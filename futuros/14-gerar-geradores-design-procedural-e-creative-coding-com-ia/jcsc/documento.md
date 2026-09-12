---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: jcsc
zona_de_interesse: Criação e plataforma
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 14
efeitos_ordem_3: 14
tecnologias_citadas: [img2threejs, Three.js, TSL, WebGPU, WGSL, GLSL, Blender, Geometry Nodes, blender-mcp, Houdini, APEX Script, MCP, Infinigen, 3D-GPT, 3Dify, MeshCoder, Proc3D, CAD-Coder, Text2CAD, CadQuery, Shadertoy, ShaderMatch, SGP-GenBench, SVG, Manim, manim-mcp, Graphite, WaveFunctionCollapse, p5.js, Processing, Spellburst, AI Co-Artist, GROMIT, Unity, Gaussian Splatting, glTF]
fontes: 14
confianca: media
experimento: "Duelo de formatos: o mesmo objeto entregue como malha glTF, como splat e como gerador procedural escrito por IA, medindo bytes, tempo até o primeiro quadro e — sobretudo — tempo até a primeira alteração pedida em voz alta"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Design procedural tem quatro décadas; o que muda agora é quem escreve a regra. Modelos de código
passaram a produzir o programa gráfico — a função que constrói o objeto em Three.js, o shader, o
script do Blender, o roteiro paramétrico de CAD — em vez de emitir o pixel ou a malha. Isso
desloca o artefato entregue de binário opaco para texto versionável, editável e barato de
transportar, e com ele desloca a competência central de quem projeta: de executar a peça para
especificar a regra que a produz. Até 2031 o efeito mais sólido não é estético, é de processo —
arte entra no controle de versão, portão automático de qualidade substitui aprovação caso a caso,
e a ferramenta procedural profissional (Houdini, Blender, editores por nós) passa a expor sua API
como superfície para agente. O mapa é cético quanto à velocidade e quanto à parte bonita da
história: a linguagem do gerador é de baixo recurso — os melhores modelos ainda falham em 31% dos
casos ao completar GLSL —, os ganhos medidos em creative coding vêm de estudos pequenos e
autodeclarados, e a peça que mais cresce em uso real continua sendo a geração de pixel, não a de
programa. O achado mais desconfortável: se o gerador é escrito por máquina e a lei exige autoria
humana, a obra pode ficar sem dono exatamente quando ela deixa de ser imagem e passa a ser código.

## 2. O tema

### O que é

"Gerar geradores" é produzir a **regra** que produz o artefato, em vez de produzir o artefato.
Design procedural — ruído, gramáticas de forma, L-systems, grafos de nós, colapso de função de
onda — faz isso desde os anos 1980. O deslocamento recente é de autoria: o programa que era
escrito por um humano passa a ser escrito por um modelo de linguagem, a partir de uma imagem de
referência, de uma nuvem de pontos ou de uma frase. A saída continua sendo código: legível,
diferenciável, parametrizável, leve.

Isso encosta em mídia e interação em três pontos ao mesmo tempo. No **artefato**: um objeto
entregue como programa pode ser animado, adaptado a dado e re-renderizado sem novo asset. No
**ofício**: quem projeta passa a escrever especificação — faixas, invariantes, parâmetros — e a
julgar o espaço de saídas, não uma saída. Na **plataforma**: o programa curto é o único formato de
mídia rica que cabe confortavelmente numa página web, num óculos e num orçamento de banda.

### Por que um mapa de futuro e não um estado da arte

Porque o estado da arte aqui é entediante e já está escrito: sim, existem modelos que escrevem
shader; sim, existem servidores MCP para Blender e Houdini. O que não está decidido é a disputa
de fundo — **gerar pixel** (mídia pesada, opaca, impossível de editar) contra **gerar programa**
(mídia leve, transparente, editável) — e essa disputa tem consequências de segunda e terceira
ordem sobre formação, contrato, preservação e autoria que nenhum levantamento de ferramentas
captura. Um estado da arte responderia "o que existe". O mapa precisa responder "o que muda no
ofício se a regra virar o entregável".

### A entrevista (Etapa 1 da skill)

A skill proíbe gerar qualquer conteúdo antes da entrevista. Ela foi feita e **as cinco perguntas
foram respondidas** — mas há uma condição desta rodada que precisa ficar registrada por honestidade:
**não houve interlocutor ao vivo**. As respostas foram fornecidas por escrito, de antemão, pelo
operador da rodada, junto com a instrução de não fazer perguntas de volta. Registro isto aqui, na
seção 2, porque a skill manda registrar explicitamente qualquer desvio do protocolo de entrevista
em vez de assumir padrão em silêncio.

| # | Pergunta da skill | Resposta recebida |
|---|---|---|
| 1 | Horizonte temporal | **2031** |
| 2 | Público-alvo | **Quem projeta mídia e interação** |
| 3 | Recorte geográfico | **Global, com uma nota sobre o Brasil** |
| 4 | Descartes explícitos | **O que já é comum em produto de massa** (a régua da disciplina). Nenhuma outra exclusão. |
| 5 | Viés desejado | **Neutro** |

Respostas complementares fornecidas na mesma leva, usadas como restrição de execução: profundidade
de três ordens; modo "a partir de uma inovação/tema", não de um setor; nenhuma disrupção suspeita
indicada de antemão (descobrir); excluir ideias óbvias que serviriam para qualquer tema; e o
critério declarado de mudança de ideia — *evidência de que a adoção já passou da maioria inicial
na curva de Rogers, ou de que a tecnologia não rompe nada e só melhora o que existe*. Esse último
item foi usado literalmente como teste na Etapa 2 e na seção 7.

Nenhuma pergunta foi respondida com "tanto faz". Nenhuma foi pulada.

## 3. Onde isso está hoje

### O gerador escrito por modelo já existe, em quatro famílias distintas

**Reconstrução de objeto como código.** O caso mais legível é o `img2threejs`: dada uma imagem de
referência, ele produz uma *factory* em TypeScript que reconstrói o objeto com primitivas, shaders
procedurais e geometria gerada — "sem arquivo de malha, sem download", com hierarquia de pivôs e
sockets pronta para animação. O projeto é Apache 2.0, tem 15,8 mil estrelas, e o desenho interno é
a parte interessante: oito passes sequenciais (blockout → estrutural → forma → material →
superfície → iluminação → interação → otimização), cada um renderizando e comparando contra a
referência antes de seguir; scripts determinísticos em Python fazem validação e portão, e o modelo
**só julga imagem** — nunca executa a validação mecânica. A economia declarada é em token: saída
textual em vez de binário, uma imagem de comparação por ciclo de revisão, passes com portão para
não reler o modelo inteiro [1].

**Reconstrução a partir de geometria.** O `MeshCoder` converte nuvem de pontos em script Python de
Blender usando um modelo multimodal, decompondo o código em componentes semânticos — o objetivo
declarado não é só reconstruir, é permitir **edição geométrica e topológica alterando o código**
[5]. O `Proc3D` vai na mesma direção pelo lado do texto: gera um grafo procedural compacto a
partir de linguagem natural, com parâmetros expostos em sliders e edição por instrução
("deixe as pernas mais altas"), relatando 89% de taxa de compilação contra 0–45% de representações
alternativas, e edição local em ~0,01 s contra 30 s ou mais de métodos que regeneram tudo [7].
Os próprios autores registram o limite que importa: o treino é dominado por primitivas de baixa
complexidade, majoritariamente geometria baseada em cubos [7].

**Grafos gráficos simbólicos.** O trabalho de *Symbolic Graphics Programming* formaliza a tarefa —
gerar programa gráfico simbólico a partir de descrição em linguagem natural — e introduz o
`SGP-GenBench`, que mede fidelidade de objeto, fidelidade de cena e composicionalidade (ligação de
atributo, relação espacial, numeracia). O achado relevante para este mapa é a correlação: o
desempenho em gerar SVG acompanha a capacidade geral de **código**, não a de imagem; modelos
proprietários de fronteira superam substancialmente os abertos, e um Qwen-2.5-7B treinado com
aprendizado por reforço com recompensa verificável chega ao patamar dos de fronteira [3].

**Motor procedural dirigido por agente.** O `3D-GPT` decompõe a instrução do usuário em subtarefas
e controla o `Infinigen` (gerador procedural em Python/Blender) descobrindo os parâmetros certos;
o `3Dify` faz algo próximo com MCP mais RAG sobre a documentação das ferramentas de DCC. O `3Dify`
é honesto sobre onde quebra: com dezenas de objetos e instruções sequenciais, "o LLM pode ter
falhado em rastrear as relações posicionais", e partes do modelo se interpenetram — atribuído a
limite de contexto [10].

### A ferramenta profissional está abrindo a porta, devagar

Em 22 de junho de 2026, no keynote da Houdini 22 em Londres, a SideFX mostrou suporte a MCP —
o "Apex Script Comfort Package": extensão de VS Code, painel Python e um servidor MCP que conecta
modelos de linguagem à documentação e aos exemplos de Apex Script, para ajudar a escrever código
procedural de **rigging de personagem**. O escopo é deliberadamente estreito e o status é explícito:
*sneak peek* rumo ao SideFX Labs, não recurso de produção; a peça gerada é um script autônomo, não
uma caixa-preta que depende de acesso contínuo ao modelo [6].

Do lado aberto, o `blender-mcp` tem 28,3 mil estrelas e faz o Blender responder a agente: criar,
modificar e apagar objetos, aplicar materiais, executar Python arbitrário dentro da aplicação. O
próprio README registra as duas limitações que interessam — operações complexas precisam ser
quebradas em passos menores, e a execução de código arbitrário "pode ser poderosa, mas
potencialmente perigosa" [14].

### O que não está acontecendo

O `Graphite`, o editor de gráficos vetoriais por nós mais visível em código aberto — fluxo
não-destrutivo que combina composição por camadas com design generativo por nós, cada decisão
amarrada a um parâmetro ajustável depois — está em alfa, com apps de desktop em release candidate,
e **não menciona IA em lugar nenhum da sua página principal** [12]. O roteiro dele é raster,
colaboração ao vivo, animação, pintura, diagramação e composição de VFX. Nenhuma linha sobre
gerador escrito por máquina. Isso é um dado, não um descuido: onde a ferramenta procedural é boa,
o humano continua escrevendo a regra.

### O chão técnico ficou pronto sem alarde

WebGPU passou a ser suportado em Chrome/Edge 144, Firefox 141 e Safari 26 — anunciado como
disponível em todos os navegadores principais em novembro de 2025, com Linux e Android ainda em
andamento [13]. A consequência para este tema é direta: o alvo do gerador deixou de exigir escolha
de plataforma. Um programa gráfico escrito hoje roda no navegador do telefone e no óculos sem
porte, e as linguagens de sombreamento portáveis (o TSL do Three.js compila para WGSL e GLSL)
removeram a última bifurcação.

### Do lado do gerador escrito à mão, nada disso é novo

Geração procedural em jogos, ruído, `WaveFunctionCollapse`, shaders no Shadertoy, `Processing` e
`p5.js` como prática de creative coding: tudo maduro, tudo em produto de massa. A pesquisa de
geração procedural de conteúdo em jogos já trata o LLM como categoria emergente ao lado de busca,
aprendizado de máquina e funções de ruído, e afirma que a chegada dos modelos de linguagem
"realmente perturbou a trajetória" do campo [4] — afirmação de survey, sem número que a sustente
no resumo.

### A nota sobre o Brasil

Não há levantamento representativo do uso de IA para **gerar geradores** no Brasil — procurei e não
encontrei. O que existe de mais próximo e legível é o relatório do Reglab sobre adoção de IA
generativa na indústria criativa brasileira, publicado em 19 de maio de 2026, com entrevistas
feitas entre setembro e novembro de 2025. A metodologia é amostragem de caso extremo — sete
profissionais de uso intensivo, deliberadamente não representativos, e os autores dizem isso
explicitamente. Os achados úteis aqui: a IA aparece como **habilitadora**, com ganho de
viabilidade e autonomia especialmente para criador independente com restrição de orçamento; e a
adoção depende de letramento digital, repertório e acesso prévios — fatores que, sem política
deliberada, aprofundam desigualdade [9]. Traduzindo para este tema: a parte de "gerar geradores"
que exige ler código é exatamente a parte que a assimetria de repertório filtra. A cena brasileira
de creative coding existe e tem lastro (o festival Multiverso, no Oi Futuro, no Rio, é o marco
mais citado), mas não abri fonte primária sobre ela e portanto não conto isso como evidência —
está registrado na seção 12 como pista.

## 4. As disrupções-raiz

### Antes: os candidatos recusados por maturidade

O critério da skill é explícito: recusa-se — trata-se como presente, não futuro — qualquer
tecnologia que já seja **padrão de mercado consolidado**, amplamente adotada pelos líderes do setor
**e** sem debate técnico real e atual sobre sua substituição no horizonte. A resposta 4 da
entrevista reforça o mesmo corte pela régua da disciplina ("o que já é comum em produto de massa").
Aplicado candidato a candidato:

| Candidato cogitado | Veredito | Por quê |
|---|---|---|
| Geração procedural clássica em jogos (ruído, L-systems, WFC, Houdini em produção) | **Recusado** | Padrão de mercado há duas décadas. Não há debate sobre substituí-la; há debate sobre quem a escreve. |
| Creative coding em Processing/p5.js como prática | **Recusado** | Consolidado. `p5.js` é infraestrutura de ensino, não fronteira. |
| Shader escrito à mão / Shadertoy | **Recusado** | Prática madura e estável. |
| Geometry Nodes (Blender) e grafos por nós como paradigma de autoria | **Recusado** | Padrão desde 2021. O que é novo é o agente do outro lado do grafo — isso virou a disrupção 2. |
| Autocompletar de código por IA na IDE | **Recusado** | Produto de massa: entre 84% e 92% dos desenvolvedores relatam usar ferramenta de IA no trabalho, conforme sínteses da pesquisa do Stack Overflow de 2025. Não consegui abrir a fonte primária e por isso o número **não sustenta nada** neste documento além da recusa — ver seção 8. |
| Texto→imagem e texto→vídeo como mídia | **Recusado** | Maduro **e** fora de escopo: é o tema 12 da disciplina. |
| Captura de realidade em 3D / Gaussian splatting | **Recusado** | Maduro **e** fora de escopo: é o tema 10. Entra aqui só como termo de comparação. |
| WebGPU como API | **Recusado** | Desde novembro de 2025 está em todos os navegadores principais [13]. É chão, não ruptura. |
| Modelo de linguagem escrevendo o programa gráfico | **Aceito → disrupção 1** | Adoção real e em curso; debate técnico genuíno sobre confiabilidade (31% de falha em GLSL nos melhores modelos [11]) e sobre se o formato entregue muda mesmo. |
| Ferramenta procedural exposta como superfície de agente (MCP) | **Aceito → disrupção 2** | Anunciado por fornecedor líder em junho de 2026 e explicitamente **não** de produção [6]. Nenhum padrão consolidado. |
| Gerador escrito/escolhido em tempo de execução | **Aceito → disrupção 3** | Pesquisa com protótipo e ceticismo documentado de desenvolvedores; nenhum produto. |

### Disrupção-raiz 1 — O modelo de linguagem escreve o programa gráfico

**O que rompe.** Rompe a equação entre "gerar mídia" e "gerar amostra". Desde 2022 a geração visual
por IA significa emitir o resultado: pixel, quadro, malha, splat. Escrever o gerador inverte o
entregável — sai um **programa** que, executado, produz o resultado, e que pode ser lido, versionado,
parametrizado e reexecutado com outro dado. O que quebra não é o pipeline de arte: é a premissa de
que mídia gerada é necessariamente opaca e pesada.

**Por que agora e não há cinco anos.** Duas condições que não existiam em 2021. Primeira: modelos de
código bons o bastante para escrever programas gráficos que compilam — e a evidência de que a
habilidade que importa é de **código**, não de imagem, está medida: o desempenho em geração de SVG
correlaciona com capacidade geral de programação [3]. Segunda: a descoberta de que o modelo não
precisa acertar de primeira se houver portão. O `img2threejs` só funciona porque renderiza e compara
contra a referência a cada passe, com script determinístico fazendo o julgamento mecânico e o
modelo julgando apenas o visual [1]; o `Proc3D` só reporta 89% de compilação porque a representação
alvo foi projetada para ser compilável [7]. Em 2021 faltavam as duas pontas.

**O que ainda falta acontecer.** Três coisas concretas. (a) A linguagem-alvo deixar de ser de baixo
recurso: o `ShaderMatch` — 467 cabeçalhos de função de shaders reais do Shadertoy, avaliados por
comparação estática **e** comparação de quadro renderizado — mostra que mesmo os melhores modelos
falham em gerar código funcional em 31% dos casos, atribuído a GLSL aparecer pouco nos dados de
pré-treino [11]. (b) O repertório de formas sair do trivial: o `Proc3D` reconhece treinar quase só
com geometria de cubo [7]. (c) Existir vocabulário compartilhado de abstrações — o ganho vem de o
modelo reusar funções nomeadas de forma reconhecível, e hoje cada projeto inventa o seu.

### Disrupção-raiz 2 — A ferramenta procedural vira superfície de agente

**O que rompe.** Rompe a fronteira entre a aplicação de autoria e o ambiente de programação. Por
trinta anos o grafo de nós foi uma interface **para humano**: arrastar, conectar, ajustar. Expor a
API da ferramenta como conjunto de operações que um agente invoca transforma a ferramenta
profissional em alvo de escrita automática — e desloca o valor do software da interface para a
**documentação indexada**, porque o que o agente acerta depende de haver exemplo recuperável, não
de haver recurso implementado.

**Por que agora e não há cinco anos.** Porque o protocolo existe e o fornecedor aderiu. A SideFX
apresentou MCP na Houdini 22 em junho de 2026, ligando modelos à documentação e aos exemplos de
Apex Script, com a garantia de que o resultado é script autônomo [6]; o `blender-mcp`, do lado
aberto, acumulou 28,3 mil estrelas expondo a API Python do Blender [14]; o `3Dify` demonstra a
combinação MCP + RAG sobre manuais de DCC [10]. Nada disso era possível antes de haver um padrão
para "ferramenta que fala com agente".

**O que ainda falta acontecer.** (a) Cobertura: o próprio `3Dify` reporta que MCP não escala para
todos os recursos de uma ferramenta de DCC, e por isso os autores partiram para automação de GUI
[10]. (b) Estabilidade: nomes de socket e de nó mudam entre versões, e o modelo não sabe qual
versão está rodando. (c) Segurança: executar Python arbitrário dentro do Blender é um vetor que o
próprio projeto adverte [14], e nenhum estúdio grande liga isso numa estação de produção sem
sandbox e lista de permissões.

### Disrupção-raiz 3 — O gerador escrito ou escolhido em tempo de execução

**O que rompe.** Rompe a separação entre desenvolvimento e execução. Se o programa que produz o
conteúdo pode ser escrito quando o usuário chega, o conteúdo deixa de estar no pacote — e com ele
saem a auditoria prévia, a certificação de loja, a reprodutibilidade e a noção de "versão
aprovada". O ativo que se distribui passa a ser o espaço de possibilidades, não a amostra.

**Por que agora e não há cinco anos.** Porque existe protótipo acadêmico funcional e porque o alvo
ficou universal. O `GROMIT` gera, em resposta a uma ação do jogador, comportamento em C# que é
compilado sem intervenção do desenvolvedor e incorporado ao jogo rodando na Unity — trabalho
premiado na UIST 2024, com estudo de entrevista com 13 desenvolvedores. **Não consegui abrir o
artigo** (a ACM devolveu 403); a descrição acima vem de resumos de busca e está marcada como não
verificada em primeira mão na seção 11. Do lado do alvo, WebGPU em todos os navegadores desde
novembro de 2025 [13] significa que um gerador escrito na hora tem onde rodar sem porte.

**O que ainda falta acontecer.** (a) Latência e custo por sessão compatíveis com interação — hoje
não são. (b) Verificação: já existe pesquisa sobre verificar jogo gerado por modelo por injeção de
estado em tempo de execução, o que só faz sentido porque a saída não é confiável. (c) Aceitação: o
próprio estudo do `GROMIT` reporta que as preocupações dos desenvolvedores se concentram em
qualidade, expectativa da comunidade e encaixe no fluxo de trabalho — três barreiras culturais, não
técnicas.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O modelo de linguagem escreve o programa gráfico em vez de emitir o artefato
    efeitos:
      - id: e1
        ordem: 1
        efeito: O artefato visual entregue passa a ter forma textual versionável, e o diff de arte vira possível
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A revisão de arte incorpora revisão de código, e a crítica se desloca do render para os parâmetros que o produzem
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A direção de arte se parte em duas competências contratadas separadamente, quem julga a imagem e quem julga o sistema
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Biblioteca de abstrações nomeadas passa a valer mais que biblioteca de modelos prontos, porque é ela que o modelo reutiliza
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O mercado de asset migra de vender malha para licenciar gerador parametrizado, e o preço passa a depender da faixa de variação permitida
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Portão automático de qualidade comparando render e referência substitui a aprovação humana caso a caso na maior parte do volume
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Aparece um CI de aparência, em que cada commit de gerador dispara comparação perceptual antes de entrar na branch
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Contratos de produção passam a especificar tolerância métrica de aparência em vez de número de rodadas de aprovação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O custo de produção visual passa a ser cotado em token e em rodada de portão, não em hora de artista
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Estúdio pequeno disputa contrato antes inacessível, porque a barreira deixa de ser tamanho de equipe e passa a ser qualidade da especificação
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Especificar regra com parâmetro, invariante e faixa vira a habilidade central de quem projeta mídia, acima de executar a peça
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O portfólio de design deixa de ser coleção de peças e passa a ser coleção de espaços de possibilidade navegáveis
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Processo seletivo de design adota leitura de código como etapa, e a fronteira administrativa com engenharia fica indefensável
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Currículos de design reescrevem a disciplina de forma, saindo de composição visual para modelagem de sistemas e teoria de parâmetros
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Uma geração entra no mercado sem prática de execução manual, e a capacidade de julgar o que o gerador errou vira escassa
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A ferramenta procedural profissional passa a expor sua API como superfície para agente
    efeitos:
      - id: e4
        ordem: 1
        efeito: O grafo de nós deixa de ser montado apenas à mão e passa a ser escrito por agente a partir da documentação da ferramenta
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A montagem repetitiva de cena, material e rig migra para o agente, e o artista fica com o julgamento
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O degrau de entrada do pipeline de 3D desaparece, e a formação de iniciante se desloca para dentro do estúdio
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A documentação da ferramenta vira ativo de engenharia, porque o que o agente acerta depende de haver exemplo indexado e não de haver recurso
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Ferramenta com documentação fraca perde mercado para ferramenta tecnicamente inferior porém melhor documentada
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Executar código arbitrário dentro da ferramenta de autoria vira problema de segurança de primeira ordem no pipeline criativo
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Estúdios rodam agente de autoria em ambiente isolado com lista de operações permitidas, em vez de execução livre
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A linguagem de nós ganha um subconjunto declarativo restrito, projetado para ser escrito por máquina e auditado por humano
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O fornecedor de software criativo passa a responder comercialmente pelo que o agente executa dentro do seu produto
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Seguro de produção audiovisual incorpora cláusula sobre autoria e execução automatizada no pipeline
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O gerador escrito ou escolhido em tempo de execução, no momento em que o usuário chega
    efeitos:
      - id: e6
        ordem: 1
        efeito: Parte do conteúdo deixa de ser empacotada no build e passa a ser produzida como programa durante a sessão
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O tamanho do download deixa de ser proxy de riqueza do conteúdo, e a métrica de peso de mídia perde sentido comercial
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Plataformas de distribuição revisam regras de certificação que pressupõem conteúdo auditável antes da publicação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Reprodutibilidade vira requisito de produto, porque sem semente e versão de gerador registradas duas sessões não mostram a mesma coisa
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Preservação de obra interativa passa a exigir arquivar o gerador e seu ambiente em vez do resultado, e o acervo de 2026 a 2029 já nasce irrecuperável
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A web vira alvo padrão do gerador, porque WebGPU e as linguagens de sombreamento portáveis removeram a escolha de plataforma
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O 3D leve por código ocupa o espaço que o 3D capturado não alcança na web e no óculos, por peso e por editabilidade
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Uma estética reconhecivelmente procedural de superfície limpa, forma paramétrica e repetição variada volta a marcar época
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Publicidade e editorial adotam peça procedural porque ela se adapta a dado como idioma, estoque e clima sem novo render
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A peça publicitária deixa de ter uma versão aprovada e passa a ter um espaço aprovado, e a autorregulação precisa aprovar regra em vez de anúncio
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A cadeia continua, e foi cortada aqui por regra.** A skill fixa três níveis e proíbe um quarto,
mesmo quando o desdobramento é evidente. Dois casos onde o corte dói: de `e3.2.1` (geração sem
prática de execução manual) sairia naturalmente um efeito de quarta ordem sobre **quem treina o
próximo modelo** — se ninguém escreve mais shader à mão, o corpus de GLSL para de crescer, e o
problema de linguagem de baixo recurso medido pelo `ShaderMatch` [11] se agrava em vez de melhorar.
De `e6.2.1` (preservação) sairia a questão de arquivo público e de obrigação legal de depósito. Os
dois ficam registrados aqui, em prosa, e não no YAML.

**Os prazos são teto, não estimativa central.** Todos os `prazo` do bloco estão dentro do horizonte
de 2031 pedido na entrevista. Isso é decisão de execução, não descoberta: pelo menos quatro efeitos
de terceira ordem — `e1.2.1`, `e3.2.1`, `e5.2.1` e `e6.1.1` — provavelmente **só se consolidam
depois de 2031**, e estão marcados com 2031 e confiança baixa porque o formato não tem como
expressar "depois do horizonte". Registro isto porque a skill, na versão usada, não manda conferir
`prazo` contra `horizonte` — falha que o próprio autor da skill documentou em `DUVIDAS.md` e ainda
não corrigiu no `SKILL.md`. Ver seção 8.

**O bloco não expressa dependência entre disrupções.** As três não são independentes: a disrupção 3
só acontece se a 1 ficar confiável, e a 2 pode **matar** a 1 em vez de reforçá-la — se a ferramenta
procedural aceita ser dirigida por agente, o incentivo de escrever gerador do zero em Three.js cai,
e o código gerado vira script de Houdini em vez de artefato distribuível. Esse é o conflito mais
importante do mapa e ele não cabe numa árvore.

**Sinal forte e confiança alta não são a mesma coisa.** `e3` tem sinal forte (a evidência de que
está acontecendo é abundante) e confiança apenas média (a evidência de que vai se **consolidar** é
fraca, e foi rebaixada na Etapa 4 — ver seção 7).

## 6. Sinais fracos e wildcards

### Sinais fracos

**O silêncio do Graphite.** O editor por nós mais ambicioso em código aberto — o que mais se
aproxima de "design generativo como fluxo padrão" — não menciona IA em nenhum ponto da sua página
principal, e o roteiro público é todo de recursos de autoria humana [12]. É o contrassinal mais
limpo que encontrei: onde a ferramenta procedural amadurece, a demanda por gerar o gerador não
aparece.

**A métrica em token.** O `img2threejs` se descreve como *token-efficient image-to-3D* e lista
economia de token entre suas características de projeto, ao lado de qualidade [1]. É a primeira vez
que vejo uma ferramenta de 3D se posicionar por custo de inferência em vez de por fidelidade ou
velocidade de render. Se isso pegar, a economia da mídia gerada passa a ser contada numa unidade
que nenhum diretor de arte sabe ler.

**O portão como arquitetura, não como recurso.** Nos três sistemas mais convincentes que li
— `img2threejs` [1], `Proc3D` [7] e `AI Co-Artist` [8] — o ganho não vem do modelo, vem do laço:
gerar, renderizar, comparar, repetir, com script determinístico fazendo a parte mecânica. O sinal
fraco é de método: o valor está migrando do modelo para o **verificador**.

**A escolha do alvo estreito.** A SideFX não escolheu "gerar cena"; escolheu gerar Apex Script para
rigging de personagem, um problema pequeno e bem delimitado, e ainda assim mandou para o Labs e não
para o produto [6]. Fornecedor sério, em 2026, achou que só isso era defensável.

**O empurrão vindo da educação, não da produção.** A ferramenta de animação matemática programática
(`manim`, 40,8 mil estrelas na edição da comunidade [2]) ganhou servidores MCP de vários autores
independentes antes de qualquer motor de jogo ter algo equivalente. O primeiro lugar onde "a IA
dirige a ferramenta procedural" virou rotina foi a produção de vídeo educacional — que é onde a
tolerância a erro é maior e a estética é convenção fixa.

**O estudo pequeno com número grande.** O `AI Co-Artist` relata, com 50 participantes, que novatos
produziram 4,2 shaders contra 0,6 sem a ferramenta, satisfação de 4,7/5 contra 2,8/5, e taxa de erro
de compilação abaixo de 3% após tentativas de repetição [8]. Número grande, desenho pequeno,
comparação contra "ferramenta tradicional" não especificada. É sinal fraco no sentido literal: dá
para construir uma narrativa inteira em cima dele, e não se deveria.

### Wildcards

**Wildcard 1 — o programa gráfico vira formato de mídia de primeira classe.** Um navegador passa a
aceitar programa procedural como conteúdo declarável e sandboxado, do jeito que aceita imagem: um
elemento que recebe um gerador, com orçamento de execução, sem acesso a rede ou a DOM. Baixa
probabilidade dentro do horizonte — exige consenso de padronização, que leva anos —, impacto máximo:
o gerador deixaria de ser técnica de produção e viraria formato de arquivo, e todo o mapa aceleraria
dois níveis de uma vez.

**Wildcard 2 — a regra fica sem dono.** A exigência de autoria humana segue firme: em 2 de março de
2026 a Suprema Corte dos Estados Unidos negou certiorari no caso Thaler, mantendo a recusa de
registro de obra produzida inteiramente por IA. Se um tribunal aplicar isso literalmente ao
**código do gerador** — e não só à imagem que ele produz —, a regra escrita por máquina nasce sem
proteção, e o incentivo se inverte: publica-se a imagem e esconde-se o gerador, exatamente o
contrário do que a disrupção 1 promete. **Não abri fonte primária sobre este caso** — a informação
vem de resumos de busca de escritórios de advocacia e está registrada como não verificada na
seção 11. É wildcard de alto impacto justamente porque contradiz o mapa inteiro.

**Wildcard 3 — o incidente que mata a categoria.** Código gerado em tempo de execução e executado
no cliente é, por construção, execução de código não auditado na máquina do usuário — e o próprio
`blender-mcp` já adverte sobre isso no contexto muito mais protegido de uma estação de trabalho
[14]. Um incidente de segurança público envolvendo conteúdo gerado como código dentro de um produto
de massa congelaria a disrupção 3 por três anos, independentemente de mérito técnico. Baixa
probabilidade num horizonte curto, impacto de zerar um terço deste mapa.

**Wildcard 4 — o modelo que gera pixel fica leve demais para a disputa continuar.** Todo este mapa
pressupõe a tensão entre mídia gerada (pesada, opaca) e mídia programada (leve, transparente). Se a
geração de amostra ficar barata e rápida o bastante para rodar no dispositivo em tempo de quadro, a
vantagem de peso do programa evapora e sobra só a vantagem de **edição** — que é real, mas é muito
mais estreita. Este é o wildcard que eu consideraria o mais provável dos quatro, e o que mais me
faria reescrever a seção 4.

## 7. Contra o próprio mapa

### Os rebaixamentos da Etapa 4, com o valor original

A skill exige que a autocrítica seja auditável: cada efeito que falha no teste tem de ter a
confiança rebaixada **e** o valor anterior registrado. Foram cinco rebaixamentos nesta rodada.

| Efeito | Confiança original | Depois | Por que caiu |
|---|---|---|---|
| `e3` — especificar regra vira a habilidade central | **alta** | media | Assume que uma profissão inteira redefine sua competência central em cinco anos. Não encontrei precedente comparável: design não virou "design de interação" nesse ritmo, nem quando a web forçou. É extrapolação da vontade, não do observado. |
| `e4.1` — montagem repetitiva migra para o agente | **alta** | media | Ignorei, na primeira passada, que o `3Dify` reporta perda de coerência espacial com dezenas de objetos [10] e que o `blender-mcp` pede quebra manual em passos menores [14]. "Montagem repetitiva" é exatamente onde há muitos objetos. A força contrária está medida e eu tinha lido. |
| `e5` — segurança vira problema de primeira ordem | **media** | baixa | Pressupõe que o setor reaja antes do incidente. Historicamente reage depois. Sem evento desencadeador, a inércia de pipeline criativo é enorme. |
| `e6` — conteúdo gerado durante a sessão | **media** | baixa | Apoiava-se quase inteiramente no `GROMIT`, que eu **não consegui abrir**, e cujos próprios entrevistados relatam preocupação com qualidade e encaixe de fluxo. Confiança média sobre fonte não lida em primeira mão é indefensável. |
| `e7.1` — 3D leve por código ocupa o espaço do capturado | **alta** | media | Vinha da premissa de peso (splat na casa das dezenas a centenas de megabytes contra programa de quilobytes). Mas não medi isso: a comparação de peso que li estava em fonte secundária que não abri, e o wildcard 4 ataca a premissa de frente. |

### Qual efeito é só extrapolação linear do presente

`e1` e `e2.1`. "Arte entra no controle de versão" e "CI de aparência" são a aplicação mecânica, a um
domínio novo, de práticas que a engenharia de software já consolidou. Não exigem ruptura nenhuma —
exigem que alguém porte a ferramenta. São os efeitos de maior confiança do mapa **e** os menos
informativos: se eu estiver certo neles, não descobri nada.

### Qual efeito assume velocidade de adoção sem precedente

`e3.2` — currículos de design reescritos até 2031. Currículo universitário é o sistema mais lento
que existe no perímetro deste mapa: aprovação em colegiado, reconhecimento, corpo docente com
formação na prática anterior. Cinco anos é curto até para uma disciplina eletiva virar obrigatória.
Mantive o efeito porque a pressão existe, mas com sinal fraco e confiança baixa, e deveria ser lido
como "começa", não como "acontece".

### Qual disrupção pode simplesmente não se concretizar

A **disrupção 3** é a mais frágil das três, e por três razões independentes. Primeira: latência e
custo por sessão não fecham hoje e ninguém mostrou que fecham em cinco anos. Segunda: a evidência
é um protótipo acadêmico cujos próprios entrevistados listam barreiras culturais. Terceira: o
wildcard 3 a mata sozinho. **Se ela cair, o mapa perde `e6`, `e7` continua de pé** (porque a web
como alvo não depende de geração em tempo de execução), e as disrupções 1 e 2 ficam intactas — o
que significa que o mapa degrada bem, mas perde exatamente a parte que o distinguiria de um
levantamento de ferramentas.

Há um cenário pior, que é a disrupção 2 **engolir** a disrupção 1. Se a ferramenta profissional
absorve o agente e o resultado é sempre script interno de Houdini ou de Blender, o gerador não é
artefato distribuível — é automação de pipeline. Nesse mundo, a promessa de "mídia programada, leve
e transparente" nunca chega ao usuário final, e "gerar geradores" vira uma história sobre
produtividade de estúdio. Metade deste documento seria sobre o assunto errado.

### Que viés entrou aqui

Três, e vale nomear.

**Viés de simpatia pelo objeto.** A tese "programa é melhor que pixel porque é legível, editável e
leve" é esteticamente e eticamente agradável para quem escreve código — e este mapa foi escrito por
um sistema que escreve código. Ela é atraente demais para ser aceita de graça, e o wildcard 4 existe
neste documento precisamente como contrapeso a ela. A entrevista pediu viés **neutro**; o risco de
ter entregado viés pró-código é real.

**Viés de fonte.** Quase toda a evidência que consegui abrir é acadêmica (arXiv, ICSE) ou de
repositório. Isso enviesa o mapa para "o que é publicável" e contra "o que estúdios fazem em
silêncio" — e produção visual é uma indústria que publica pouco. O dado do Reglab tem a limitação
declarada oposta e complementar: sete casos extremos, não generalizáveis [9].

**Viés de estrela.** Contei estrelas de GitHub (15,8 mil, 28,3 mil, 40,8 mil) porque era o número
disponível. Estrela mede visibilidade e novidade, não uso em produção. Um projeto com 28 mil
estrelas pode ter zero instalações em estúdio profissional, e provavelmente é o caso de mais de um
deles.

### O teste declarado na entrevista

A entrevista definiu o que faria mudar de ideia: evidência de que a adoção já passou da maioria
inicial de Rogers, ou de que a tecnologia só melhora o que existe sem romper nada. Aplicando:
**a primeira condição não foi atingida** — nada aqui tem adoção de maioria inicial em produção
profissional, e o próprio fornecedor líder chama sua peça de *sneak peek* [6]. **A segunda é o
risco vivo**, e está admitido acima: se a disrupção 2 engolir a 1, isto vira melhoria de
produtividade, não ruptura — e o tema teria de ser rebaixado.

## 8. O que a máquina errou

Cinco erros concretos nesta rodada, com o que os denunciou.

**1. O número de estrelas da `manim` no enunciado não bate.** O texto do tema afirma que a `manim`
tem "92 mil estrelas". Fui verificar: `ManimCommunity/manim`, a edição mantida pela comunidade,
tem **40,8 mil estrelas** lidas em 12/09/2026 [2]. Como percebi: bastou abrir o repositório em vez
de repetir o enunciado. O número de 92 mil pode se referir a outro repositório, a outra métrica ou
ser simplesmente errado — não consegui reconciliar e por isso **não usei o número do enunciado em
lugar nenhum deste documento**. O enunciado da disciplina é contexto, não fonte, e esta foi a
ocasião em que essa distinção teve consequência prática.

**2. Quase citei um benchmark com o nome errado.** Busquei por "ShaderEval" achando que era assim
que se chamava o benchmark de shader. Não existe com esse nome nos resultados; o trabalho real é o
`ShaderMatch`, apresentado no LLM4Code 2025 (ICSE), com 467 cabeçalhos de função e a métrica em
duas etapas [11]. Se eu tivesse escrito a seção 3 antes de abrir a página, teria publicado o nome
inventado com ar de autoridade. Como percebi: os resultados da busca não retornaram nada com aquele
nome e eu fui abrir o que retornou.

**3. Comecei a escrever a seção 3 citando `Cavalry` e `Rive` como evidência.** Ambos aparecem no
enunciado como motion design por regra, e eu redigi meia frase sobre eles antes de perceber que
**não tinha aberto nenhuma página dos dois**. Cortei os dois das seções 3, 4 e 5 e não os incluí em
`tecnologias_citadas`. Eles ficam na seção 12 como pista não verificada. A regra da skill é literal:
fonte que não abri não entra.

**4. Usei um número de adoção que não pude verificar em primeira mão — e o isolei.** O intervalo de
84% a 92% de desenvolvedores usando ferramenta de IA no trabalho aparece em várias sínteses da
pesquisa do Stack Overflow de 2025, mas **não abri a pesquisa original**. Deixei o número apenas na
tabela de recusa por maturidade, com a ressalva explícita de que ele não sustenta nenhuma conclusão
do mapa. É a diferença entre usar um número e apoiar-se nele.

**5. A skill não confere prazo contra horizonte, e eu tive de fazer isso à mão.** A `SKILL.md`
manda, na Etapa 4, rebaixar confiança — e só. Não manda comparar cada `prazo` do YAML com o
`horizonte` do frontmatter. Essa é exatamente a falha que o autor da skill documentou em
`DUVIDAS.md` depois da rodada de teste (quatro efeitos de terceira ordem com `prazo` em 2031 e 2032
sob horizonte 2030) e que ele deliberadamente não corrigiu no `SKILL.md` para manter o `TESTE.md`
fiel. Executei a skill como está escrita e apliquei a checagem manualmente, declarando na seção 5
quais efeitos provavelmente só se consolidam depois de 2031. Registro aqui para que a rodada não
seja lida como evidência de que a skill já resolve isso — ela não resolve.

**Erro menor, mas de método:** `graphite.rs` responde 301 para `graphite.art`. Anotar isso importa
porque a seção 11 exige que o link responda, e o endereço que circula na literatura é o antigo.

## 9. Três cenários para 2031

### Provável

O gerador escrito por máquina virou infraestrutura de pipeline e quase não se fala nele. Estúdios
de médio porte têm o equivalente a um CI de aparência: o artista altera parâmetros, o agente escreve
a variação do grafo, um script renderiza e compara contra a referência, e só o que passa vai para
revisão humana. As ferramentas grandes expõem MCP com escopo restrito e lista de operações
permitidas, porque a primeira geração de execução livre deu sustos suficientes. Do lado do
entregável, a promessa não se cumpriu como se anunciou: o código gerado é majoritariamente **interno**
— script de Blender, grafo de Houdini, ativo de build — e o que chega ao usuário continua sendo
malha, textura e vídeo. A exceção é a web, onde o 3D por código de fato ocupou o nicho do objeto
pequeno, editável e adaptável a dado, e onde uma estética paramétrica reconhecível voltou a aparecer
em portfólio e em campanha. O ensino se moveu menos do que o discurso: existem disciplinas de design
generativo em toda escola razoável, mas o currículo central ainda é de forma e composição. A
disputa "pixel contra programa" não foi resolvida — foi dividida por território.

### Desejável

Vale a pena dizer o que teria de ter sido feito, e não só o resultado. Três coisas. Primeira: um
vocabulário compartilhado de abstrações procedurais — funções nomeadas de forma reconhecível,
publicadas em aberto, que os modelos aprendem a reusar em vez de reinventar; é o que resolveria, ao
mesmo tempo, o problema de linguagem de baixo recurso e o de repertório preso a primitivas simples.
Segunda: portões de qualidade **públicos e auditáveis** — a comparação perceptual que decide se um
gerador passa não pode ser segredo de fornecedor, porque ela é que define o padrão estético do que
é produzível. Terceira: um acordo sobre autoria que reconheça a especificação como obra — quem
escreve a regra, com suas faixas e invariantes, fez trabalho criativo mesmo que o texto do programa
tenha saído da máquina. Com essas três, 2031 chega com o entregável sendo o gerador, com o estúdio
pequeno competindo por qualidade de especificação em vez de tamanho de equipe, e com obra
interativa preservável porque o gerador e seu ambiente foram arquivados junto. É plausível. Não é o
que está a caminho.

### Indesejável

O gerador ficou dentro da ferramenta e o valor migrou para quem controla a ferramenta. As
abstrações que os modelos sabem usar bem são proprietárias, indexadas na documentação de um
fornecedor, e mudar de ferramenta significa jogar fora o repertório inteiro — o aprisionamento
deixou de ser de formato de arquivo e passou a ser de **vocabulário**. A camada júnior do pipeline
desapareceu sem que a formação seguinte fosse organizada, e a competência de julgar o que o gerador
errou ficou concentrada numa geração que aprendeu antes e está saindo. No Brasil, a assimetria que
o Reglab já apontava se aprofundou: quem tinha repertório e acesso multiplicou a capacidade, quem
não tinha ficou operando saída de caixa-preta em contrato de margem baixa. E o acervo de obra
interativa dos anos anteriores é ilegível, porque ninguém arquivou o gerador — só o resultado.
**O sinal precoce, e dá para vigiá-lo a partir de agora:** ferramentas anunciando "nosso agente" em
vez de "nossa API para agente". A primeira formulação é aprisionamento; a segunda é infraestrutura.

## 10. O experimento

### O que é

**Duelo de formatos.** Uma página única, aberta em sala, com o **mesmo objeto** carregado por três
caminhos lado a lado:

1. **malha** — um `.glb` exportado de modelagem convencional;
2. **captura** — o mesmo objeto como Gaussian splat (o vizinho do tema 10, aqui só como régua);
3. **gerador** — uma *factory* em Three.js escrita por IA a partir de uma foto do objeto, no
   espírito do `img2threejs` [1]: só código, com parâmetros expostos.

A página instrumenta três medidas automáticas — bytes transferidos, tempo até o primeiro quadro, e
quadros por segundo sustentados — e uma medida humana, que é a que interessa: **tempo até a primeira
alteração pedida em voz alta**. Alguém da turma pede uma mudança ("30% mais alto", "enferrujado",
"em madeira clara", "com o dobro de repetições"), o cronômetro corre, e os três caminhos correm
juntos: no `.glb` alguém abre o Blender, no splat alguém descobre que não dá, e no gerador alguém
mexe num parâmetro — ou pede a mudança à IA e espera o portão de qualidade fechar.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta que sustenta o efeito `e7.1` e que o wildcard 4 ataca: **a vantagem do programa é peso ou
é edição?** Se for peso, ela evapora quando o hardware melhorar, e este mapa envelhece rápido. Se
for edição, ela é estrutural e independe de banda — e aí a disrupção 1 é real. O experimento separa
as duas: a coluna de bytes responde uma, o cronômetro responde a outra.

Secundariamente ele mede a coisa de que ninguém fala: **quantas rodadas de portão** o gerador precisa
para atender a um pedido dito em linguagem natural. Se forem três, é ferramenta. Se forem doze, é
demonstração.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa reconstrução de objeto como código procedural por modelo de linguagem — a família do
`img2threejs` [1] e do `MeshCoder` [5] — e, se der tempo, um segundo caminho por `MCP` para uma
ferramenta de DCC, para comparar "IA escreve o programa distribuível" contra "IA dirige a ferramenta"
(a disputa entre as disrupções 1 e 2 que o YAML não consegue expressar).

Com tecnologia madura não dá, e a razão é precisa: escrever à mão a *factory* procedural de um
objeto qualquer leva horas de programador experiente — o que existe maduro é o gerador **já escrito**
para um domínio específico (terreno, cidade, vegetação), não o gerador de um objeto arbitrário
fotografado na mesa dez minutos antes da aula. Esse "dez minutos antes da aula" é a tecnologia
emergente inteira. E é também o que torna o experimento honesto: se a turma escolher o objeto na
hora, não há como ter preparado o resultado.

### O que a turma faz quando testar isso em sala

Escolhe o objeto (algo que esteja na sala, com forma legível e algum detalhe difícil — alça, rosca,
textura irregular). Fotografa. Dispara os três caminhos. Pede, em voz alta e por consenso, três
alterações sucessivas de dificuldade crescente: uma de proporção, uma de material, uma
**estrutural** (acrescentar uma parte que não existe na foto). Anota os quatro números por caminho e
por alteração. No fim, cada pessoa aponta qual dos três resultados usaria num trabalho real — e essa
votação, que é subjetiva de propósito, entra no relatório ao lado dos números.

### O que seria um resultado que me faria mudar de ideia

Qualquer um destes três, e todos são plausíveis:

- **A alteração no gerador demora mais do que remodelar na mão.** Se pedir "30% mais alto e
  enferrujado" ao gerador custar mais tempo que abrir o Blender, a vantagem de edição é retórica, e
  `e7.1` e `e1.1` caem juntos.
- **O portão não fecha na alteração estrutural.** Se acrescentar uma parte que não está na foto fizer
  o laço de qualidade rodar indefinidamente, então o gerador reconstrói mas não **projeta** — e a
  disrupção 1 é uma técnica de reconstrução com nome ambicioso demais.
- **A turma prefere o splat.** Se, vendo os três, a maioria escolher o resultado capturado para uso
  real, a disputa "pixel contra programa" já está decidida do lado do pixel para objeto único, e este
  mapa deveria ter sido escrito sobre onde o programa ganha — cena, sistema, variação — e não sobre
  objeto.

## 11. Fontes

Listadas apenas as páginas que **abri e li** nesta rodada. Leads que apareceram em busca e não foram
abertos estão na seção 12 e não sustentam nenhuma afirmação do documento.

`fontes: 14` no frontmatter coincide com os 14 itens numerados abaixo, e todos os 14 endereços
respondem. As URLs de páginas que **não** abri — inclusive a que devolveu 403 a cliente automatizado
— ficam no anexo 12.3, não aqui.

1. **img2threejs — repositório** · `https://github.com/img2threejs/img2threejs`
   Sustenta: a existência e o desenho da reconstrução de objeto como código procedural; o pipeline
   de oito passes com portão; a divisão entre script determinístico (validação) e modelo (julgamento
   visual); a métrica de eficiência em token; licença Apache 2.0 e 15,8 mil estrelas.
   Confiabilidade: **média** — é autodescrição de projeto, sem avaliação independente. O que é
   verificável (licença, estrelas, estrutura declarada) eu tratei como fato; o que é alegação de
   desempenho, não.

2. **ManimCommunity/manim — repositório** · `https://github.com/ManimCommunity/manim`
   Sustenta: 40,8 mil estrelas na edição da comunidade, e a relação de fork com o repositório
   original de Grant Sanderson. Usado para contestar o número do enunciado (seção 8).
   Confiabilidade: **alta** para a métrica, que é do próprio GitHub.

3. **Symbolic Graphics Programming with Large Language Models** · `https://arxiv.org/abs/2509.05208`
   Sustenta: a formulação da tarefa de programa gráfico simbólico; o benchmark SGP-GenBench e suas
   três dimensões; a correlação entre desempenho em SVG e capacidade geral de código; a vantagem dos
   modelos proprietários e o resultado de RL com recompensa verificável.
   Confiabilidade: **média-alta** — preprint com benchmark descrito, mas li o resumo e não a
   avaliação completa.

4. **Procedural Content Generation in Games: A Survey with Insights on Emerging LLM Integration** ·
   `https://arxiv.org/abs/2410.15644`
   Sustenta: o enquadramento do LLM como categoria emergente ao lado de busca, aprendizado de máquina
   e ruído; a afirmação de que os modelos perturbaram a trajetória do campo.
   Confiabilidade: **média** — survey, apresentado no AIIDE-24; li o resumo, que não traz número.
   A afirmação está no documento identificada como afirmação de survey.

5. **MeshCoder: LLM-Powered Structured Mesh Code Generation from Point Clouds** ·
   `https://arxiv.org/abs/2508.14879`
   Sustenta: conversão de nuvem de pontos em script Python de Blender; decomposição em componentes
   semânticos; a finalidade de permitir edição por alteração de código.
   Confiabilidade: **média** — preprint, resumo lido. O PDF completo excedeu o limite da ferramenta
   e não foi lido; por isso não cito número de desempenho deste trabalho.

6. **SideFX and Nvidia bring MCP-powered AI agents to Houdini 22's rigging workflow at Siggraph 2026**
   · `https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/`
   Sustenta: a data (22/06/2026, keynote em Londres); o escopo restrito a Apex Script para rigging;
   a composição do pacote (extensão VS Code, painel Python, servidor MCP); o status de *sneak peek*
   rumo ao Labs; e o fato de o resultado ser script autônomo.
   Confiabilidade: **média-alta** — Jon Peddie Research é analista estabelecido do setor gráfico, mas
   é cobertura de terceiro sobre keynote, não documentação do fornecedor.

7. **Proc3D: Procedural 3D Generation and Parametric Editing of 3D Shapes with Large Language Models**
   · `https://arxiv.org/html/2601.12234`
   Sustenta: o grafo procedural compacto; edição por slider e por instrução; 89% de compilação contra
   0–45% de alternativas; ~0,01 s de edição local contra 30 s de regeneração; e a limitação declarada
   de treino dominado por geometria de cubo.
   Confiabilidade: **média** — preprint, números autorrelatados, sem replicação independente. A
   limitação declarada pelos próprios autores é o que dá credibilidade ao resto.

8. **AI Co-Artist: A LLM-Powered Framework for Interactive GLSL Shader Animation Evolution** ·
   `https://arxiv.org/html/2512.08951v1`
   Sustenta: mutação e cruzamento de shaders GLSL por LLM; os números do estudo com 50 participantes
   (4,2 contra 0,6 shaders por novato; 4,7/5 contra 2,8/5 de satisfação; erro de compilação abaixo de
   3% após repetição); e as limitações de dependência de API e de comprimento de código.
   Confiabilidade: **baixa-média** — estudo pequeno, comparação com "ferramenta tradicional" não
   especificada, métricas autodeclaradas. Usei-o como **sinal fraco**, nunca como base de efeito.

9. **The Creatives of the Future: How Artificial Intelligence is Reshaping the Creative Industry in
   Brazil (Reglab)** · `https://reglab.com.br/en/the-creatives-of-the-future-ai-creative-industry/`
   Sustenta: a nota sobre o Brasil — IA como habilitadora, ganho para criador independente com
   restrição de orçamento, e a dependência de letramento, repertório e acesso prévios.
   Confiabilidade: **média, com limite declarado** — sete entrevistas, amostragem de caso extremo,
   entre setembro e novembro de 2025, publicado em 19/05/2026. Os próprios autores dizem que não é
   generalizável, e eu não a usei como se fosse.

10. **3Dify: a Framework for Procedural 3D-CG Generation Assisted by LLMs Using MCP and RAG** ·
    `https://arxiv.org/html/2510.04536`
    Sustenta: a combinação MCP + RAG sobre documentação de ferramentas de DCC; a indexação
    pai-filho; e as limitações reportadas — perda de coerência posicional com dezenas de objetos,
    atribuída a contexto, e a não-escalabilidade do MCP para cobrir todos os recursos.
    Confiabilidade: **média** — preprint com demonstração, sem avaliação quantitativa. As limitações
    são o achado mais útil e vêm dos autores.

11. **Evaluating Language Models for Computer Graphics Code Completion (LLM4Code 2025, ICSE)** ·
    `https://conf.researchr.org/details/icse-2025/llm4code-2025-papers/13/Evaluating-Language-Models-for-Computer-Graphics-Code-Completion`
    Sustenta: o benchmark ShaderMatch — 467 cabeçalhos de função de shaders reais do Shadertoy,
    avaliação em duas etapas (comparação estática e comparação de quadro renderizado), oito rótulos
    de avaliação; e o número que mais pesa neste mapa: **31% de falha em gerar código funcional mesmo
    nos melhores modelos**, com GLSL caracterizado como linguagem de baixo recurso.
    Confiabilidade: **alta** — trabalho revisado por pares em workshop de conferência de primeira
    linha, com dados, código e leaderboard públicos. É a fonte mais sólida do documento.

12. **Graphite** · `https://graphite.art/`
    Sustenta: o contrassinal da seção 6 — editor de vetor por nós, alfa, fluxo não-destrutivo
    combinando camadas e design generativo por nós, apps de desktop em release candidate, roteiro de
    raster/colaboração/animação/pintura/diagramação/VFX, e **nenhuma menção a IA** na página
    principal.
    Confiabilidade: **alta para o que afirma sobre si**, que é tudo o que usei. Ausência numa página
    de divulgação é evidência fraca de ausência no projeto — tratei como sinal, não como prova.
    Nota: `graphite.rs` redireciona (301) para este endereço.

13. **WebGPU is now supported in major browsers (web.dev)** ·
    `https://web.dev/blog/webgpu-supported-major-browsers`
    Sustenta: WebGPU em Chrome/Edge 144, Firefox 141 e Safari 26; publicação em 25/11/2025; Linux e
    Android ainda em andamento.
    Confiabilidade: **alta** para o fato de disponibilidade. Ressalva de origem: web.dev é do Google,
    que é parte interessada na adoção de WebGPU — mas o fato é verificável em qualquer navegador.

14. **blender-mcp (ahujasid) — repositório** · `https://github.com/ahujasid/blender-mcp`
    Sustenta: 28,3 mil estrelas; criação/modificação/remoção de objetos, materiais e execução de
    Python dentro do Blender; integração com bancos de asset; e as duas limitações declaradas —
    operações complexas precisam ser quebradas em passos menores, e execução de código arbitrário é
    "poderosa, mas potencialmente perigosa".
    Confiabilidade: **média** — autodescrição de projeto; a métrica de estrelas é do GitHub, as
    advertências são dos autores (e advertência contra o próprio produto é o tipo de alegação que se
    pode tomar pelo valor de face).

### Declarações de não-verificação

Três coisas entraram no texto **marcadas como não verificadas em primeira mão**, e nenhuma delas
sustenta efeito no YAML:

- **GROMIT / "What's the Game, then?" (UIST 2024), na Biblioteca Digital da ACM.** O servidor
  devolveu **HTTP 403** a cliente automatizado; a URL fica no anexo 12.3, e não aqui, para que a
  checagem de links da seção 11 meça saúde de link e não política de robô. A descrição (geração de
  comportamento em C# compilado em tempo de execução na Unity; estudo com 13 desenvolvedores;
  preocupações com qualidade, expectativa da comunidade e encaixe de fluxo) vem de resumos de busca.
  O efeito `e6`, que dependia disso, foi rebaixado de média para baixa confiança por esta razão.
- **Thaler / negativa de certiorari em 02/03/2026 e a exigência de autoria humana.** Não abri decisão
  nem fonte primária; o que li foram resumos de busca de publicações de escritórios de advocacia.
  Usado apenas no wildcard 2, explicitamente rotulado.
- **84% a 92% de desenvolvedores usando ferramenta de IA (Stack Overflow 2025).** Não abri a pesquisa
  original. Usado apenas na tabela de recusa por maturidade, com ressalva.

## 12. Anexo — o levantamento bruto

### 12.1 Transcrição da entrevista (Etapa 1), literal

As respostas foram entregues por escrito, de antemão, pelo operador da rodada, com a instrução
explícita de não fazer perguntas de volta e de assumir e declarar o que não estivesse definido.
Reproduzidas sem edição:

> - Tema: "Gerar geradores: design procedural e creative coding com IA" (tema 14 de 19 da
>   disciplina; família "Criação e plataforma").
> - Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o
>   Brasil.
> - Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma
>   outra exclusão.
> - Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem
>   para qualquer tema.
> - O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers)
>   ou de que a tecnologia não rompe nada (só melhora o que existe).
> - Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
> - Zona de interesse do autor: "Criação e plataforma". Login do autor: jcsc. Skill usada:
>   futurizacao-jcsc.
> - Busca na web: use WebSearch e WebFetch de verdade; só cite o que abriu. Não invente fontes.
> - Não faça perguntas de volta. Não pare para pedir confirmação. Se algo não estiver definido,
>   assuma e declare.

**Suposições declaradas** que preenchem lacunas da entrevista (a skill proíbe assumir em silêncio):

- `publico_ok: false` — o padrão do formato, porque a autorização de nome na galeria não foi tratada.
- `confianca: media` para o mapa como um todo — justificada pela mistura de uma fonte revisada por
  pares (a [11]), várias preprints com números autorrelatados, e três declarações de não-verificação.
- A instrução "excluir ideias óbvias que servem para qualquer tema" foi aplicada como critério de
  corte na Etapa 3; os efeitos descartados por ela estão em 12.4.
- O item "modo: a partir de uma inovação/tema, não de um setor" foi lido como a instrução de
  organizar a roda por **disrupção**, não por indústria afetada — daí não haver seção por setor.

### 12.2 Buscas executadas, na ordem

Quatorze buscas e dezoito tentativas de abertura. Registro completo, inclusive as improdutivas:

1. `img2threejs procedural Three.js reconstruction from image code only GitHub` — produtiva.
2. `LLM shader generation arXiv 2026 program synthesis graphics` — produtiva (levou a [3] e a [8];
   também retornou **ShadAR**, geração de shader HLSL por LLM em AR no Meta Quest 3, CHI 2026 EA,
   que **não abri**).
3. `3D-GPT procedural generation LLM Blender Infinigen` — produtiva (levou a [10]; também retornou
   `SceneCraft`, `AutoUE`, `SimWorlds`, `Scene Co-pilot`, nenhum aberto).
4. `"Text2CAD" OR "CAD-Coder" OR "ShapeCoder" program synthesis 3D shape code generation` —
   parcialmente produtiva (levou a [5]; `Text2CAD` em NeurIPS 2024, `CAD-Coder` com distância de
   Chamfer média 6,54 e mediana 0,17, `ShapeLib`, `ShapeCoder` em TOG e o survey *Neurosymbolic
   Models for Computer Graphics* — **nenhum aberto**, e por isso nenhum número de CAD entrou no corpo
   do documento).
5. `Blender MCP AI agent controlling Blender geometry nodes 2026` — produtiva (levou a [14]; também
   retornou "Blender MCP Pro", com alegação de que geometry nodes eram somente-leitura no projeto
   aberto e que a versão Pro resolveu — **não aberto, não usado**).
6. `Gaussian splatting file size versus procedural 3D web performance 2026` — **improdutiva para
   citação**: só retornou blogs de fornecedor e preprints de compressão (`PCGS`, `WebSplatter`,
   `Mobile-GS`, `Local-GS`, `AdpSplit`). O intervalo de 20–200 MB que apareceu em resumo de busca
   **não foi usado** como evidência — é exatamente o tipo de número que sustentaria `e7.1` e que eu
   não tenho. Este buraco é a razão do rebaixamento de `e7.1` na seção 7.
7. `manim-web-mcp Manim MCP AI animação matemática` — parcialmente produtiva: **não achei
   `manim-web-mcp` com esse nome exato**; achei `wstcpyt/manim-mcp`, `abhiemj/manim-mcp-server` e
   `paulnegz/manim-mcp`. Nenhum aberto. A afirmação da seção 6 fala de "servidores MCP de vários
   autores independentes", que é o que os resultados sustentam, e não do projeto nomeado no enunciado.
8. `creative coding p5.js LLM study designers generative art code 2026` — parcialmente produtiva
   (levou a `Spellburst`, UIST 2023, interface por nós para creative coding exploratório com prompts;
   e a `Reflexa`, sobre andaimes de reflexão apoiados por LLM em creative coding). **Nenhum dos dois
   aberto**; `Spellburst` é citado em `tecnologias_citadas` como entidade do campo, não como
   evidência.
9. `Houdini SideFX AI copilot procedural node graph generation 2026` — produtiva (levou a [6]).
10. `copyright AI-generated code procedural art US Copyright Office 2026 human authorship` —
    produtiva como pista, **não** como fonte: base do wildcard 2, com a não-verificação declarada.
11. `runtime LLM generated code game engine procedural content generation 2026 research` — produtiva
    como pista (levou a [4] e ao GROMIT; também `GameGen-Verifier`, verificação de jogo gerado por
    injeção de estado em tempo de execução, e `ProxyWar`, ICSE 2026 — **nenhum aberto**; a menção a
    verificação por injeção de estado na disrupção 3 está em nível de existência de linha de
    pesquisa, sem número).
12. `Three.js TSL node material WebGPU shading language adoption 2026` — parcialmente produtiva: só
    blogs e cursos. Sustenta a afirmação geral de que o TSL compila para WGSL e GLSL, que é
    documentação conhecida do Three.js, mas **não abri** fonte primária e por isso a afirmação está
    no texto sem número e sem referência.
13. `arte generativa creative coding Brasil 2026 comunidade design procedural` — **improdutiva para
    citação**: retornou o festival Multiverso (Oi Futuro, Rio), turmas no OpenProcessing e uma
    comunidade brasileira de programação criativa no Telegram. Nada aberto, nada usado. Foi esta
    busca que me levou a [9] por caminho lateral.
14. `WebGPU Safari 26 support September 2025` e
    `LLM generated shader code correctness failure benchmark ShaderEval Shadertoy evaluation` —
    produtivas (levaram a [13] e a [11]). A segunda é onde descobri que "ShaderEval" não existe e o
    nome correto é `ShaderMatch` (seção 8, erro 2).

### 12.3 Tentativas de abertura que falharam

- `https://arxiv.org/pdf/2508.14879` (MeshCoder, PDF) — **excedeu o limite de tamanho** da
  ferramenta. Resolvido abrindo a página de resumo, `arxiv.org/abs/2508.14879` [5]. Consequência: não
  cito nenhum número de desempenho do MeshCoder.
- `https://dl.acm.org/doi/fullHtml/10.1145/3654777.3676358` (GROMIT) — **HTTP 403**. Não resolvido.
  Consequência: rebaixamento de `e6` e declaração de não-verificação na seção 11.
- `https://graphite.rs/` — **301** para `https://graphite.art/`. Resolvido.

### 12.4 Efeitos gerados e cortados antes do YAML

Cortados por serem genéricos demais — serviriam para qualquer tema de IA, que é exatamente o corte
pedido na entrevista:

- "Aumenta a produtividade das equipes criativas." — vale para todos os dezenove temas.
- "Surgem novas funções profissionais e desaparecem outras." — idem.
- "Cresce a preocupação com viés nos dados de treino." — verdadeiro e irrelevante aqui; não há
  mecanismo específico de "gerar geradores" que o produza.
- "Empresas correm para adotar e algumas se arrependem." — narrativa, não efeito.
- "A regulação tenta acompanhar e fica para trás." — clichê de mapa de futuro; foi substituído por
  dois efeitos com mecanismo concreto (`e6.1.1`, certificação de loja, e `e7.2.1`, aprovação de regra
  em vez de anúncio).

Cortados por serem melhoria e não ruptura (falham o teste declarado na entrevista):

- "O tempo de iteração em shader cai." — é a promessa de qualquer ferramenta de autoria desde 1990.
- "Artistas usam IA para explorar variações mais rápido." — extrapolação de assistente de código
  para o domínio visual; não muda estrutura nenhuma.
- "Aumenta o número de pessoas capazes de fazer arte generativa." — o `AI Co-Artist` até sugere isso
  [8], mas com 50 participantes e comparação frouxa; virou sinal fraco na seção 6, não efeito.

Cortados por pertencerem a tema vizinho (fronteira declarada no enunciado da disciplina):

- Tudo sobre qualidade de captura, fotogrametria e splat como **mídia** → tema 10.
- Tudo sobre geração de vídeo e imagem como produto final → tema 12.
- Efeitos sobre narrativa e mundo persistente → família de storytelling e mundos virtuais.

Cortado por exceder três níveis (a skill proíbe o quarto nível; ambos registrados em prosa na
seção 5):

- De `e3.2.1`: "o corpus público de código gráfico escrito por humano para de crescer, e o problema
  de linguagem de baixo recurso se agrava" — quarta ordem.
- De `e6.2.1`: "obrigação legal de depósito de gerador em instituição de memória" — quarta ordem.

### 12.5 Uma quarta disrupção que foi cogitada e não entrou

**"A economia da mídia recontada em token e em byte."** A ideia: o `img2threejs` se medir em token
[1] e o programa gráfico pesar quilobytes onde a captura pesa dezenas de megabytes indicaria uma
mudança de **unidade de conta** da produção visual, com efeitos próprios sobre preço, contrato e
decisão de arquitetura.

**Por que não entrou como disrupção-raiz:** falha no teste "o que ela rompe". Mudar a unidade de
conta é consequência de gerar programa em vez de amostra, não causa independente — e a evidência de
peso comparativo que a sustentaria é exatamente a que a busca 6 não produziu. Foi rebaixada a
efeitos (`e2.2` e `e6.1`) e a sinal fraco (seção 6). Registro a decisão aqui porque ela muda a
contagem do frontmatter: `disrupcoes_raiz: 3`, e não 4.

### 12.6 Entidades e termos do enunciado que não consegui verificar

O enunciado da disciplina cita um conjunto grande de projetos. Verifiquei e abri apenas os que
aparecem na seção 11. **Não abri** e portanto não uso como evidência: `WaveFunctionCollapse`,
`Fantasy-Map-Generator`, `noise-rs`, `Pixel Composer`, `material-maker`, `nannou`, `css-doodle`,
`glisp`, `curv`, `SHADERed`, `rust-gpu`, `triangula`, `msdfgen`, `pixelgen`, `satori`, `Remotion`,
`Cavalry`, `Rive`. Vários deles estão em `tecnologias_citadas` apenas quando aparecem no corpo do
texto como entidade do campo (p. ex. `WaveFunctionCollapse` na tabela de recusa por maturidade);
`Cavalry` e `Rive` foram **removidos** do corpo do texto e de `tecnologias_citadas` pelo motivo
descrito na seção 8, erro 3.

Também não verifiquei a afirmação do enunciado de que "o GitHub escondia a `manim` da busca" — é
alegação sobre comportamento de plataforma, não testável a partir daqui, e não afeta nenhuma
conclusão.

### 12.7 Ordem de execução das etapas da skill, para auditoria

1. **Etapa 1 (entrevista)** — cinco perguntas, cinco respostas, nenhuma pulada, nenhuma "tanto faz";
   condição anômala (respostas pré-fornecidas, sem interlocutor ao vivo) declarada na seção 2.
2. **Etapa 2 (levantamento e filtro)** — quatorze buscas, quatorze fontes abertas, três falhas de
   abertura, doze candidatos passados pelo critério de maturidade com veredito registrado na tabela
   da seção 4.
3. **Etapa 3 (roda)** — 3 disrupções, 7 efeitos de 1ª ordem, 14 de 2ª, 14 de 3ª; corte no terceiro
   nível, com os dois desdobramentos de quarta ordem mencionados em prosa, como a skill manda.
4. **Etapa 4 (autocrítica)** — releitura efeito a efeito, com atenção aos de confiança alta; cinco
   rebaixamentos, todos com valor original registrado na tabela da seção 7; checagem adicional de
   `prazo` contra `horizonte`, feita à mão porque a skill não a exige (seção 8, erro 5).
5. **Etapa 5 (saída)** — frontmatter completo, doze seções com títulos literais, bloco YAML da roda
   dentro da seção 5 com três níveis exatos.
