---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: ["Three.js", "Blender", "Geometry Nodes", "Houdini", "Graphite", "Manim", "GLSL", "WebGPU", "Model Context Protocol", "img2threejs", "Proc3D", "VLMaterial", "3DCodeBench", "Gaussian Splatting", "Processing/p5.js"]
fontes: 11
confianca: media
experimento: Mesmo objeto, dois caminhos
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo

A geração procedural é velha; o que é novo é a IA escrevendo o gerador. Em 2026 já existem
benchmarks medindo modelos que produzem código Blender executável (3DCodeBench, 212 categorias
de objeto), sistemas que devolvem grafos procedurais editáveis em vez de malha (Proc3D, 89% de
taxa de compilação) e uma skill de código aberto com 16,3 mil estrelas que reconstrói o objeto
de uma foto como TypeScript Three.js paramétrico (img2threejs). A disputa que se abre até 2031
não é "IA faz ou não faz imagem" — é **pixel contra programa**: mídia gerada como dado (pesada,
opaca, não editável) contra mídia gerada como regra (leve, inspecionável, versionável em git).
O resultado provável é híbrido e menos glorioso do que os dois lados prometem: a IA acerta a
executabilidade (97,4% com feedback multi-turno) e erra a plausibilidade física; o gargalo migra
de "escrever código gráfico" para "julgar se o que saiu presta". O designer que ganha nesse
arranjo é o que sabe especificar restrição e ler o grafo — não o que sabe desenhar mais rápido.

## 2. O tema

Design procedural é produzir a **regra** em vez do artefato: um programa que, executado, gera a
textura, o modelo, o mapa, a animação. Existe há décadas — Houdini, Geometry Nodes do Blender,
Processing/p5.js, shaders de Shadertoy, WaveFunctionCollapse. A disrupção não está na técnica
procedural; está em **quem a escreve**. Modelos de linguagem passaram a produzir programas
gráficos que rodam: scripts Python de Blender, fragment shaders GLSL, grafos de nós, fábricas de
`THREE.Group`.

Isso encosta em mídia e interação em três pontos. Primeiro, no **artefato**: o que se entrega
deixa de ser um arquivo e passa a ser um programa curto que produz o arquivo — com tudo que um
programa tem e um arquivo não tem (parâmetro, versão, diff, reuso, licença de código). Segundo,
na **interface de autoria**: se a IA escreve o gerador, o trabalho do designer desloca-se para
especificar restrições, avaliar saídas e editar parâmetros — mais perto de projetar sistemas do
que de desenhar telas. Terceiro, na **economia de entrega**: 3D capturado é pesado; 3D
programado é leve. Na web, no jogo e no óculos isso decide o que carrega.

Merece um mapa porque é o único ramo da IA generativa visual em que a saída continua **legível
por humano**. Todo o resto do campo aposta em representações que ninguém inspeciona. Aqui a
aposta é oposta — e as duas não podem estar certas ao mesmo tempo.

## 3. Onde isso está hoje

**O que existe e funciona.** O `img2threejs` reconstrói o objeto de uma foto como código
procedural TypeScript, não como malha: um pipeline de oito passes (blockout → estrutural → forma
→ material → superfície → iluminação → interação → otimização) com portões determinísticos entre
eles, licença Apache 2.0, 16,3 mil estrelas no GitHub e versão 2.0.0 corrente. Ele roda sob
Claude Code, Codex ou OpenCode — ou seja, é uma skill de agente, não um produto. O ponto
declarado do projeto é econômico: "os tokens do modelo são gastos só em julgamento visual e
código", com o trabalho mecânico empurrado para scripts Python.

Na pesquisa, o `3DCodeBench` (arXiv 2606.01057, 31/05/2026) é o primeiro benchmark sério do
problema: 212 categorias de objeto, 26 mil triplas (prompt, código, malha), doze VLMs de fronteira
avaliados. O resultado mais útil é o que ele mostra estar **resolvido** e o que segue **aberto**:
executabilidade sobe de 70,2% para 97,4% com feedback multi-turno de erro — o código roda. Mas a
qualidade condicional da forma quase não melhora com refinamento agêntico, e as falhas dominantes
são incompatibilidade de API do Blender e **implausibilidade física**: partes desconectadas,
alinhamento estrutural errado. O modelo escreve programa; não entende mundo.

O `Proc3D` (arXiv 2601.12234, 18/01/2026) ataca o mesmo problema pelo outro lado: em vez de o LLM
escrever a API crua, ele escreve um **Procedural Compact Graph** — uma representação simplificada,
4 a 10× menor que Python nativo do Blender — que depois é interpretada. A taxa de compilação
salta para 89% contra 0–30% das representações concorrentes, e a edição paramétrica fica 400×
mais rápida que regerar. O `VLMaterial` (ICLR 2025 Spotlight, arXiv 2501.18623) faz o equivalente
para material: imagem → grafo de nós procedural expresso como programa Python, via VLM
fine-tunado.

Fora do 3D, o `AI Co-Artist` (arXiv 2512.08951) transforma autoria de shader GLSL em curadoria
evolutiva: o usuário escolhe os shaders que gosta numa grade, e o LLM faz mutação semântica e
crossover — algoritmo genético cujos operadores são um modelo de linguagem. Estudo com 50
participantes: novatos produziram 4,2 shaders contra 0,6 com ferramenta tradicional. Medida de
democratização, não de qualidade.

**O que existe e não funciona.** O grafo de nós continua sendo o ponto fraco. Relato de campo de
maio de 2026 sobre Blender via MCP: fluxos baseados em nós — Geometry Nodes, redes de material,
compositor — são difíceis; "qualquer coisa além de uns poucos nós tende a produzir erro ou
conexão incorreta", e Geometry Nodes especificamente é frágil porque a API muda entre versões e o
dado de treino não bate com a versão instalada. A ironia é grande: o formato mais próximo do
"gerar gerador" é justamente onde os modelos vão pior.

A ferramenta procedural nativa também não está pronta. O `Graphite` — editor 2D de raster e vetor
construído sobre um motor procedural de nós, em Rust compilado para WebAssembly, 27,3 mil estrelas
— segue em alfa: vetor maduro o bastante para adotante inicial, raster experimental, animação
resumida a play/reset, sem timeline nem keyframe, e o build desktop via Tauri abandonado por
incompatibilidade técnica.

**Quem está construindo.** Três grupos distintos, o que é sinal de campo real e não de moda:
laboratórios acadêmicos (Proc3D, VLMaterial, 3DCodeBench), comunidade de código aberto operando
como *skills* de agente (img2threejs, os vários `manim-mcp` — um deles com pipeline multiagente
de análise de conceito → planejamento de cena → geração → revisão sobre base RAG de 5,3 mil
documentos, mas apenas 18 estrelas) e fabricantes de ferramenta procedural (Graphite, Blender via
MCP). Ninguém domina; a camada de integração é MCP, que é padrão aberto.

**Do outro lado da disputa.** A captura por Gaussian splatting, que é o caminho "dado" oposto ao
caminho "regra", chegou em 2026 a um veredito honesto: pronta para alguns trabalhos e não para
outros. Splat de qualidade é pesado, carregar rápido em celular sob dados móveis exige trabalho
real de otimização, o objeto não se mede com confiança, e remover ou reposicionar coisa depois da
captura é difícil. Cada uma dessas quatro limitações é exatamente o que representação procedural
não tem.

## 4. As disrupções-raiz

### 4.1. A síntese de programa gráfico virou tarefa resolvida na execução e aberta no julgamento

**O que rompe.** O paradigma de que produzir imagem por IA significa produzir pixels. Quando o
modelo devolve um programa executável, a saída herda as propriedades do software — parametrizável,
versionável, auditável, composável — e perde as do dado gerado. Rompe também o pressuposto de que
qualidade visual e controle são um trade-off: o programa dá controle sem custar resolução.

**Por que agora e não há cinco anos.** Duas coisas mudaram. Modelos de código ficaram bons o
bastante para que o gargalo deixasse de ser sintaxe: 97,4% de executabilidade com feedback de
erro, medido em 2026, não existia em 2021. E surgiu a camada de execução — MCP, agentes que rodam
código, renderizam, olham o resultado e corrigem — que fecha o laço entre escrever o programa e
ver se ele produziu o que se queria. Sem esse laço, síntese de programa gráfico é escrita cega.

**O que falta acontecer.** Falta o modelo entender física e montagem: a falha dominante do
3DCodeBench é peça desconectada e alinhamento errado, que refinamento agêntico não corrige. Falta
estabilidade de API — modelos treinados em Blender 3.x escrevendo para Blender 5.x é o caso
patológico. E falta uma métrica de qualidade que não dependa de humano: hoje o melhor preditor de
preferência humana é similaridade de vista SigLIP-2 (r=0,964), o que é uma muleta, não uma
definição.

### 4.2. O grafo procedural compacto virou o formato de negociação entre humano e máquina

**O que rompe.** A ideia de que a interface entre pessoa e IA generativa é linguagem natural. O
prompt é bom para começar e péssimo para ajustar: mudar uma coisa exige regerar tudo, e o que
volta é outro objeto. O grafo compacto rompe isso — o LLM escreve a estrutura uma vez, e depois a
edição é paramétrica: slider, checkbox, nó. Proc3D mede o ganho em 400× sobre regerar.

**Por que agora.** Porque se descobriu que a linguagem intermediária importa mais que o modelo:
89% de compilação com representação compacta contra 0–30% com API crua, com os mesmos modelos.
Isso é um resultado de *design de linguagem*, não de escala — e por isso é acessível a quem não
treina modelo de fronteira. É também o que explica o fracasso do Geometry Nodes via MCP: lá não
há camada compacta, o modelo fala a API crua.

**O que falta acontecer.** Falta convergência. Hoje cada sistema inventa seu grafo compacto —
PCG do Proc3D, registro de material do img2threejs, o grafo do VLMaterial — e nenhum
interopera. Falta também diversidade de dado de treino: os autores do Proc3D reconhecem que os
conjuntos existentes são dominados por primitivas de baixa complexidade. E falta o passo político:
um grafo compacto padronizado é infraestrutura, e infraestrutura costuma ser disputada por quem
vende a ferramenta.

### 4.3. A unidade de custo da mídia deslocou-se de bytes para tokens

**O que rompe.** A economia de entrega. Por trinta anos a pergunta foi "quantos megabytes pesa e
quanto demora a baixar". Na mídia programada a pergunta vira dupla: o artefato pesa quase nada
(um programa curto), mas **produzi-lo** custa inferência, e mantê-lo custa inferência de novo. O
img2threejs anuncia sua eficiência em tokens, não em polígonos — é a primeira vez que um projeto
gráfico de código aberto escolhe essa métrica como bandeira.

**Por que agora.** Porque o contraste ficou mensurável dos dois lados. Splat de cena pesado e
difícil de servir em celular; programa Three.js que produz o mesmo objeto cabe em alguns
quilobytes de texto. E porque o custo de inferência caiu o suficiente para que gerar-na-hora deixe
de ser absurdo — sem ter caído o bastante para que seja trivial.

**O que falta acontecer.** Falta o caso econômico fechado em produção, com número público:
ninguém publicou ainda um comparativo honesto de custo total (geração + revisão humana + correção)
entre pipeline procedural assistido por IA e pipeline de captura, para o mesmo resultado. Falta
também resolver a variância: programa gerado que às vezes sai errado tem custo de QA que não
aparece na conta de tokens.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A síntese de programa gráfico virou tarefa resolvida na execução e aberta no julgamento
    efeitos:
      - id: e1
        ordem: 1
        efeito: O gargalo da autoria procedural deixa de ser escrever código gráfico e passa a ser julgar a saída
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surgem portões de qualidade automáticos como componente padrão de pipeline generativo, e não como extra
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A competência que o mercado passa a contratar em design é escrever critério de aceitação, não executar peça
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O portfólio do designer passa a exibir o gerador e a família de saídas, não a peça única
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A avaliação de trabalho criativo migra de artefato para espaço de possibilidades, e o júri precisa saber ler código
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Fornecedores de software 3D expõem APIs estáveis e versionadas para agentes, porque a instabilidade de API é o erro dominante
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A compatibilidade com agente vira critério de escolha de ferramenta, ao lado de preço e curva de aprendizado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Ferramenta proprietária de nós fecha a API para agentes de terceiros e transforma a automação em assinatura
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O ensino de ferramenta 3D encolhe e o ensino de modelagem de sistema e restrição ocupa o lugar
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Cursos de design passam a exigir fundamento de programação e geometria que hoje só a engenharia exige
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O grafo procedural compacto virou o formato de negociação entre humano e máquina
    efeitos:
      - id: e3
        ordem: 1
        efeito: Linguagens intermediárias compactas se multiplicam, uma por ferramenta, e a interoperabilidade vira o problema central
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Nasce um esforço de padronização de grafo procedural comparável ao que glTF fez por malha
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A mídia procedural ganha um formato de troca publicável e o artefato de design passa a circular como arquivo-programa
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O grafo compacto vaza para fora do 3D e vira interface de edição para vídeo, tipografia e animação
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Edição por parâmetro convive com edição por prompt, e o prompt fica restrito à primeira versão
                sinal: fraco
                prazo: 2031
                confianca: media
      - id: e4
        ordem: 1
        efeito: A edição paramétrica pós-geração torna-se a expectativa mínima do usuário diante de qualquer saída de IA visual
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Produtos de geração de imagem que só devolvem pixel perdem espaço em fluxo profissional
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O mercado se parte entre mídia descartável gerada como pixel e mídia de produção gerada como programa
                sinal: fraco
                prazo: 2031
                confianca: media
          - id: e4.2
            ordem: 2
            efeito: O controle de versão de código entra no fluxo de design como norma, com diff e revisão de pares sobre geradores
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Estúdio de design adota prática de engenharia de software inteira, incluindo teste de regressão visual
                sinal: fraco
                prazo: 2031
                confianca: media
  - disrupcao: A unidade de custo da mídia deslocou-se de bytes para tokens
    efeitos:
      - id: e5
        ordem: 1
        efeito: Projetos de mídia passam a publicar custo em tokens ao lado de peso em bytes, como métrica de eficiência
        sinal: fraco
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Conteúdo 3D leve e programado ganha a web e o óculos, enquanto a captura pesada fica no cinema e na arquitetura
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A estética procedural volta a ser dominante na web por razão econômica, e não por escolha de linguagem visual
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Surge um mercado de geradores como ativo licenciável, vendidos como programa e não como asset
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A disputa de direito autoral desloca-se do resultado para a regra, e a autoria de uma regra gerada por IA fica indefinida
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Motores de jogo e navegadores experimentam gerar conteúdo como código no momento em que o jogador chega
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A distinção entre baixar conteúdo e produzir conteúdo desaparece para o usuário final
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O conceito de build de um jogo se dissolve e a certificação de conteúdo por loja de aplicativos perde objeto
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o YAML não diz.** Três coisas.

A primeira é que os três ramos não são independentes: o ramo do custo (e5, e6) só se realiza se o
ramo do julgamento (e1) for resolvido antes. Mídia gerada na hora só funciona se ninguém precisar
olhar antes de mostrar — e hoje precisa. Na prática isso significa que e6 depende de e1.1, e a
árvore esconde essa amarra transversal.

A segunda é que o prazo mais provável está errado por otimismo em e2. Fornecedor de software 3D
estabilizar API pública é decisão comercial, não técnica, e a história do Blender sugere que
quebra entre versões é prática cultural, não descuido. Se e2 não acontecer, e2.1 e e2.2 caem
juntos e o ramo inteiro da disrupção 1 fica reduzido a e1.

A terceira é o que **não** está na roda porque não tem sinal: o efeito sobre quem hoje vive de
produzir asset 3D avulso. A intuição diz que é o grupo mais exposto; nenhuma das fontes abertas
mede isso, e inventar o número seria pior que deixar a lacuna visível.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a métrica trocou de lado.** O `img2threejs` anuncia eficiência em tokens como
característica de projeto gráfico. É a primeira vez que um projeto visual de código aberto trata
custo de inferência como o mesmo tipo de compromisso que peso de arquivo. Se essa métrica pegar,
ela reorganiza o que significa "otimizar" em mídia.

**Sinal fraco 2 — algoritmo genético com operadores de linguagem.** No AI Co-Artist, mutação e
crossover são delegados a um LLM em vez de operadores estocásticos clássicos. Isso é pequeno e
estranho o bastante para ser ignorado, e é exatamente o tipo de coisa que vira padrão de autoria
depois: o humano curando, a máquina variando semanticamente.

**Sinal fraco 3 — o gargalo é o nó, não o código.** Que Geometry Nodes seja o pior caso para
agentes, sendo o formato mais procedural de todos, contradiz a expectativa. Ou o grafo de nós é
uma péssima representação para máquina (e o futuro é texto), ou é a *API específica* que é ruim
(e o futuro é o grafo compacto do Proc3D). Os dois caminhos levam a mundos diferentes.

**Wildcard — o pacote de conteúdo morre.** Baixa probabilidade, alto impacto: um motor de jogo ou
navegador que gere o conteúdo como código no instante em que o jogador chega, sem build. Deixa de
existir "o jogo" como artefato distribuível; existe um gerador e uma semente. O impacto não é
estético — é jurídico e regulatório. Classificação indicativa, certificação de loja e auditoria de
conteúdo pressupõem um artefato fixo para examinar. Sem artefato, o regulador não tem objeto. Um
único lançamento comercial bem-sucedido nesse formato forçaria a discussão em dois anos.

**Wildcard menor — a regra como obra.** Se um tribunal decidir que o **gerador** escrito por IA é
obra protegível enquanto a saída dele não é (ou o inverso), o mercado inteiro de mídia procedural
se reorganiza em torno da decisão, e não do estado da técnica.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O e4.2 — controle de versão e revisão
de pares entrando no design — é extrapolação preguiçosa. Ele assume que, porque o artefato virou
código, a cultura de trabalho de quem produz código vem junto. Não vem: designers já trabalham
com arquivos versionáveis há vinte anos (SVG, CSS, tipografia variável) e a maioria dos estúdios
segue sem git. A forma técnica do artefato não determina a prática de trabalho; a estrutura do
mercado determina. Esse efeito é o mais "óbvio" do mapa e provavelmente o mais fraco.

**Qual efeito assume velocidade de adoção irreal.** O e5.1 — 3D programado ganhando a web e o
óculos até 2030. O argumento econômico é bom, mas ignora que o Graphite, que é a ferramenta
procedural mais visível do campo, segue em alfa depois de anos, sem timeline de animação e com o
build desktop abandonado. Ferramenta de autoria procedural madura é pré-requisito da adoção, e
ela não está a quatro anos de distância pelo ritmo observado. Provavelmente o prazo correto é
2033–2035, fora do horizonte deste mapa.

**Qual disrupção-raiz pode não se concretizar e derrubar o mapa inteiro.** A terceira — o
deslocamento de bytes para tokens. Ela sustenta e5 e e6 por inteiro e alimenta e4.1. E ela repousa
num pressuposto não verificado: que o custo total da mídia programada é menor. O 3DCodeBench
mostra que executabilidade é quase perfeita mas qualidade de forma não melhora com refinamento —
o que significa que o custo real está na revisão humana, que ninguém contabiliza em tokens. Se o
custo de QA for alto o bastante, mídia procedural gerada por IA é mais cara que captura, e o
ramo inteiro do custo cai. Nenhuma fonte aberta que encontrei fecha essa conta.

**Qual foi o viés da análise.** Três, declarados. (i) **Viés de fonte aberta**: quase toda a
evidência disponível vem de arXiv e GitHub, porque é o que se pode abrir e ler. Pipeline
procedural fechado de estúdio grande — Houdini na produção real — é invisível aqui, e pode estar
anos à frente ou anos atrás do que este mapa descreve. (ii) **Viés de instrumento**: estrelas no
GitHub medem atenção, não uso; 16,3 mil estrelas do img2threejs não são 16,3 mil projetos em
produção. (iii) **Viés de simpatia pelo legível**: há uma preferência estética e política implícita
por representação inspecionável sobre representação opaca, e ela pode ter me feito ler o
"programa contra pixel" como disputa em aberto quando talvez o mercado já a tenha decidido em
favor do pixel por conveniência.

## 8. O que a máquina errou

[Preencher após leitura crítica.]

## 9. Três cenários para 2031

* **Provável:** híbrido desigual. A IA escreve o rascunho do gerador e o humano corrige; grafos
  compactos proprietários se multiplicam sem padrão comum; mídia programada domina nichos onde
  peso e editabilidade decidem (web, interface, motion, dado visual) e captura domina onde
  realismo decide (cinema, arquitetura, e-commerce de produto físico). O ensino de design muda
  pouco e tarde; o mercado contrata pela mesma régua de antes, com uma linha a mais no anúncio.
  Nenhuma das duas mídias vence: elas se dividem por caso de uso e ninguém chama isso de
  revolução.
* **Desejável:** um formato aberto de grafo procedural, com adoção real, que faça pela regra o que
  o glTF fez pela malha — e que torne possível auditar, licenciar e reusar geradores fora da
  ferramenta em que nasceram. Para isso acontecer é preciso que os laboratórios que hoje inventam
  grafos compactos próprios (Proc3D e sucessores) publiquem a especificação separada do modelo, e
  que pelo menos um fabricante de ferramenta grande adote sem tentar estender. Também é preciso
  que o ensino de design acolha a leitura de código como alfabetização, não como especialização —
  caso contrário o formato existe e só engenheiros o usam.
* **Indesejável:** o grafo procedural vira formato fechado e a automação por agente vira
  assinatura. A ferramenta que hoje é aberta ao MCP fecha a API para terceiros quando a automação
  se torna o produto; quem projeta perde o acesso ao gerador da própria peça e volta a operar uma
  caixa, agora com prompt em vez de menu. **Sinal precoce:** o primeiro fabricante grande de
  ferramenta procedural que anunciar "integração oficial com IA" e simultaneamente restringir ou
  depreciar o acesso programático de terceiros. É a mesma jogada que se viu em outras plataformas,
  e o anúncio costuma vir vestido de melhoria.

## 10. O experimento

**Mesmo objeto, dois caminhos.**

**A pergunta que responde.** Para um mesmo objeto real, o caminho "gerar regra" e o caminho
"gerar dado" produzem resultados comparáveis — e a que custo? A pergunta é deliberadamente
estreita, porque é a única do mapa que uma turma consegue medir numa sala.

**O que se constrói.** Pega-se um objeto físico simples e disponível (uma cadeira da sala, uma
garrafa, um violão). Dele saem dois artefatos, pelo mesmo grupo, no mesmo dia:
1. **Caminho regra**: uma foto do objeto → agente de código (Claude Code, Codex ou OpenCode) com
   uma skill de reconstrução procedural em Three.js (o `img2threejs` é Apache 2.0 e serve como
   base) → um programa TypeScript que produz o objeto.
2. **Caminho dado**: um vídeo de volta ao objeto no celular → captura por splat em ferramenta
   comum (Polycam, Scaniverse) → um arquivo.

**O que se mede**, com número no quadro, não com impressão: peso do artefato entregue em KB;
tempo de carga em 3G simulado no DevTools; tokens gastos e tempo de parede de cada caminho;
quantas rodadas de correção até o resultado passar; e um teste de edição — "mude a cor e encurte
a perna em 20%" — cronometrado nos dois.

**O que a turma faz em sala.** Quatro grupos, quatro objetos de dificuldade crescente: um
geométrico regular (caixa, banco), um com simetria e articulação (cadeira), um orgânico (planta,
tênis), um com material difícil (vidro, metal escovado). A hipótese a testar é que a vantagem do
caminho regra **cai com a irregularidade do objeto** — exatamente onde o 3DCodeBench encontrou a
falha de plausibilidade física. Depois, teste cego: mostrar os oito resultados sem dizer a
procedência e pedir que a turma adivinhe qual é qual e qual prefere.

**Que resultado mudaria minha ideia.** Se o caminho regra vencer também no objeto orgânico e no
material difícil, minha leitura de que existe uma fronteira de complexidade está errada, e o mapa
subestima a disrupção 1 — o ramo e5.1 deveria ser "forte" e não "médio". Se o caminho regra
custar mais tempo humano total (geração mais correção) que o caminho dado mesmo no objeto
geométrico mais simples, a disrupção 3 cai, e com ela metade do mapa: a economia de tokens seria
contabilidade criativa, com o custo real escondido na revisão.

## 11. Fontes

1. https://github.com/img2threejs/img2threejs — Skill de código aberto (Apache 2.0, 16,3 mil
   estrelas, v2.0.0) que reconstrói o objeto de uma foto como Three.js procedural em TypeScript;
   sustenta o pipeline de oito passes, os portões determinísticos de qualidade e a métrica de
   eficiência em tokens. Confiabilidade: alta para o que o projeto é e faz (fonte primária),
   média para as alegações de desempenho, que são autodeclaradas e sem avaliação independente.
2. https://arxiv.org/html/2606.01057 — 3DCodeBench (31/05/2026): benchmark de modelagem 3D
   procedural agêntica por código, 212 categorias, 26 mil triplas, doze VLMs. Sustenta os números
   de executabilidade (70,2% → 97,4%), a correlação SigLIP-2 (r=0,964) e as falhas de
   implausibilidade física. Confiabilidade: alta — preprint metodológico com dado quantitativo;
   ressalva usual de preprint sem revisão por pares.
3. https://arxiv.org/html/2601.12234v1 — Proc3D (18/01/2026): geração e edição paramétrica por
   Procedural Compact Graph. Sustenta a taxa de compilação de 89% contra 0–30%, a redução de 4–10×
   e o ganho de 400× em edição. Confiabilidade: média-alta; preprint, e os autores declaram a
   limitação de diversidade do dado de treino.
4. https://arxiv.org/abs/2501.18623 — VLMaterial: geração de material procedural como programa
   Python por VLM fine-tunado. ICLR 2025 Spotlight. Sustenta que o caminho "grafo como programa"
   já passou por revisão por pares em conferência de primeira linha. Confiabilidade: alta —
   é a única fonte revisada por pares do conjunto.
5. https://arxiv.org/html/2512.08951 — AI Co-Artist (27/11/2025): autoria de shader GLSL por
   curadoria evolutiva com LLM como operador de mutação e crossover. Sustenta o dado de
   democratização (4,2 contra 0,6 shaders por novato, n=50). Confiabilidade: média — estudo de
   usuário pequeno, conduzido pelos próprios autores em empresa (aiXplain).
6. https://www.mindstudio.ai/blog/claude-blender-mcp-real-world-performance — Relato de campo
   (06/05/2026) sobre Blender via MCP. Sustenta a fragilidade de Geometry Nodes, a quebra de API
   entre versões e o limite de "poucos nós". Confiabilidade: média — é relato de prática, não
   medição; mas é específico, datado e coerente com o achado do 3DCodeBench sobre API.
7. https://lwn.net/Articles/1051242/ — LWN (26/12/2025) sobre o estado do Graphite. Sustenta o
   diagnóstico de alfa: vetor maduro, raster experimental, animação sem timeline, Tauri
   abandonado. Confiabilidade: alta — LWN é jornalismo técnico com histórico longo de rigor.
8. https://github.com/GraphiteEditor/Graphite — Repositório oficial do Graphite (27,3 mil
   estrelas, Rust, alfa). Sustenta escala de atenção da comunidade e o roteiro declarado.
   Confiabilidade: alta como fonte primária de estado do projeto; estrelas medem atenção, não uso.
9. https://amplifiedcreations.com/journal/gaussian-splatting-production-ready-2026 — Relato de
   campo (2026) sobre limites de produção do Gaussian splatting. Sustenta as quatro restrições do
   caminho "dado": peso e entrega em celular, impossibilidade de medição confiável, dificuldade de
   edição pós-captura, sensibilidade à qualidade de captura. Confiabilidade: média — fonte de
   estúdio, sem número publicado, mas com posição explicitamente não promocional.
10. https://github.com/paulnegz/manim-mcp — Pipeline multiagente que dirige o Manim por MCP
    (análise de conceito → planejamento → geração → revisão, sobre RAG de 5,3 mil documentos; 18
    estrelas). Sustenta o sinal fraco de "IA dirigindo ferramenta de animação programática" e,
    pelo número de estrelas, que ainda é sinal fraco mesmo. Confiabilidade: média — fonte primária
    de um projeto pequeno e sem avaliação externa.
11. https://www.dataprivacybr.org/en/the-artificial-intelligence-legislation-in-brazil-technical-analysis-of-the-text-to-be-voted-on-in-the-federal-senate-plenary/
    — Análise técnica do PL 2338/2023 (Data Privacy Brasil). Sustenta a nota sobre o Brasil:
    obrigação de informar conteúdo protegido usado no treino, direito de oposição do titular e
    remuneração por uso, com isenção para pesquisa não comercial. Confiabilidade: alta para o
    conteúdo do texto legislativo; é organização de pesquisa com posição declarada, o que colore a
    leitura política mas não os dispositivos.

**Nota sobre o Brasil.** O recorte brasileiro deste tema é regulatório, não técnico: o campo é
global e em código aberto, e um estudante em Recife tem o mesmo acesso ao img2threejs que um
estúdio em Londres — a barreira é crédito de inferência, não ferramenta. O que é específico do
Brasil é o PL 2338/2023, que introduz obrigação de informar o conteúdo protegido usado no treino,
direito de oposição do titular e remuneração por uso comercial. Para mídia procedural isso pesa
mais que para mídia gerada como pixel, por uma razão simples: o gerador é código, e código
carrega proveniência de licença com muito mais clareza que um conjunto de pesos. Um gerador
publicado sob Apache 2.0 — como o img2threejs — é rastreável; o estilo embutido num modelo não é.
Se a lei brasileira se consolidar como escrita, mídia programada fica em vantagem de conformidade
sobre mídia gerada como dado. É uma vantagem que ninguém está reivindicando ainda, e ela não
aparece em nenhuma das fontes internacionais consultadas.

## 12. Anexo — o levantamento bruto

**A entrevista (etapa a).** A skill exige as cinco perguntas antes de qualquer geração. Esta
execução ocorreu em lote, sem interlocutor humano disponível; as respostas foram fornecidas de
antemão pelo enunciado da rodada e são reproduzidas aqui na íntegra, como recebidas:

1. *Horizonte de tempo:* **2031**.
2. *Público-alvo:* **quem projeta mídia e interação**.
3. *Recorte geográfico:* **global, com uma nota sobre o Brasil**.
4. *Fora do escopo:* **o que já é comum em produto de massa** (a régua da disciplina); nenhuma
   outra exclusão. Também foi pedido excluir "ideias óbvias que servem para qualquer tema".
5. *Viés desejado:* **neutro**. Disrupção suspeita: **nenhuma — descobrir**. Profundidade: **três
   ordens**. Modo: **a partir de uma inovação/tema, não de um setor**. Critério declarado de
   mudança de ideia: **evidência de que a adoção já passou da maioria inicial (Rogers), ou de que
   a tecnologia não rompe nada**.

**O filtro de maturidade (etapa b).** Avaliação explícita pelo critério da skill. Geração
procedural *em si* é madura: Houdini, Geometry Nodes, Processing/p5.js e shaders têm infraestrutura
consolidada e mercado estabelecido há décadas — se o tema fosse esse, a skill mandaria recusar.
O tema submetido, porém, não é a técnica procedural: é **a IA como autora do gerador**. Esse
recorte passa no critério de disrupção por dois testes. (i) *Rompe modelo mental*: inverte o
pressuposto de que IA generativa visual produz dado; aqui produz programa, e a saída é legível,
editável e versionável — o modelo mental do "arquivo final" cai. (ii) *Cria ou destrói mercado*:
se o artefato entregue é um programa, o mercado de asset avulso perde objeto e surge um mercado
de gerador licenciável. Não é incremental, porque não melhora um processo existente — troca a
natureza do que se entrega. **Veredito: disruptivo. Execução autorizada, avança para (c).**

**Caminhos abandonados.** Três linhas foram investigadas e descartadas antes de virarem
disrupção-raiz. (1) *"O designer vira programador"* — descartada por ser a ideia óbvia que serve
para qualquer tema de IA e criação, e que o enunciado pediu explicitamente para excluir; entrou
apenas como efeito de segunda e terceira ordem (e2.2, e1.1.1), onde tem consequência específica.
(2) *"WaveFunctionCollapse e geração de mapa"* — descartada por maturidade: geração procedural de
mapa em jogo é prática estabelecida, e a novidade ali é de ferramenta, não de paradigma.
(3) *"Creative coding fica mais fácil"* — descartada por ser efeito, não disrupção; o dado do AI
Co-Artist sustenta o efeito, não uma raiz.

**Lacunas assumidas e declaradas.** (i) Nenhuma fonte aberta fecha a conta de custo total
(geração + revisão + correção) entre pipeline procedural assistido por IA e captura — a
disrupção 3 repousa sobre essa lacuna e a autocrítica da seção 7 a expõe. (ii) O efeito sobre
produtores de asset 3D avulso não entrou na roda por ausência de sinal mensurável. (iii) Pipelines
procedurais fechados de grandes estúdios são invisíveis a este método, que só lê o que responde
HTTP 200.

**Divergência de metadado, declarada.** O enunciado desta rodada informa a zona de interesse
**"Criação e plataforma"**. O formato de saída obrigatório da skill `futurizacao-jlsn`, porém,
fixa no cabeçalho o literal `zona_de_interesse: Sistemas de Informação`, sem campo variável. A
instrução da rodada é executar a skill exatamente como ela manda, sem melhorá-la; obedeceu-se ao
literal da skill e registra-se aqui a divergência, para que o cabeçalho não seja lido como
descuido. O mesmo vale para `autor_login: jlsn`, que a skill fixa e que coincide com o enunciado.

**Nota de execução.** Todas as onze fontes da seção 11 foram efetivamente abertas nesta execução
(busca e leitura de página), não recuperadas de memória do modelo. Duas verificações adicionais
que não viraram citação: a busca por um benchmark específico de geração de shader por LLM
("ShaderBench") não retornou nada com esse nome — o que existe são benchmarks de kernel de GPU e
avaliações informais de arte GLSL; e a busca por número público de adoção de Geometry Nodes
dirigido por agente não retornou medição, só relato. Ambas as ausências estão refletidas no rebaixamento
de confiança dos efeitos correspondentes.
