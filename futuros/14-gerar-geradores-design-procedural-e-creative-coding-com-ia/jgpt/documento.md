---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: jgpt
zona_de_interesse: "Criação e plataforma"
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 9
efeitos_ordem_3: 9
tecnologias_citadas:
  - Three.js
  - Blender (Python API e geometry nodes)
  - Houdini 22 / Apex Script / MCP
  - Manim
  - img2threejs
  - LL3M
  - MeshCoder
  - Proc3D
  - 3DCodeBench
  - P3D-Bench
  - OpenSCAD
  - CadQuery
  - GLSL / shader art
  - 3D Gaussian Splatting (PLY, SPZ, SPLAT)
  - Processing / p5.js
  - Model Context Protocol
fontes: 10
confianca: media
experimento: "Duelo cego entre o mesmo objeto entregue como programa e como captura, medindo bytes, tokens, tempo de edição e acerto percebido."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

Design procedural — produzir a regra em vez do artefato — tem décadas. O que mudou em 2025–2026
é que o gerador passou a ser escrito por modelo de linguagem, e que esse modelo passou a olhar o
próprio render antes de entregar. Benchmarks publicados em 2026 mostram o tamanho exato do salto e
do buraco: código gráfico que executa em 46% a 91% dos casos numa tentativa e em 97% com correção
iterativa, mas com falha sistemática de plausibilidade física — peças soltas, montagem errada,
similaridade semântica alta (≈0,8) contra similaridade geométrica baixa (≈0,35). Ao mesmo tempo, a
economia inverteu de lado: um objeto entregue como fábrica TypeScript ocupa poucos quilobytes
diffáveis, enquanto uma captura equivalente em splat ocupa dezenas a centenas de megabytes — e o
peso do asset agora conta duas vezes, em banda e em contexto de modelo. Este mapa trata das três
rupturas que vêm daí: a IA que fecha o laço escrever-ver-corrigir, o artefato de mídia que volta a
ser texto, e a IA que opera a ferramenta procedural por protocolo sem deixar dependência. Horizonte
2031.

## 2. O tema

O tema é a regra como artefato — e, especificamente, a IA na posição de quem escreve a regra.

A distinção importa porque separa dois modos de geração que o discurso público confunde. Gerar
mídia é produzir pixels ou gaussianas: o resultado é denso, opaco e só se edita gerando de novo.
Gerar gerador é produzir um programa: o resultado é leve, legível, parametrizável e se edita
mudando uma linha. Os dois competem pelo mesmo trabalho — "quero um objeto 3D deste produto" — e
resolvem com ontologias incompatíveis.

Onde isso encosta em mídia e interação: no que o designer entrega (imagem ou especificação
executável), no que a plataforma distribui (binário ou fonte), no que o usuário pode alterar
(nada ou tudo), e em quem consegue trabalhar no pipeline (quem opera ferramenta ou quem lê código).

Merece mapa de futuro, e não estado da arte, porque o estado da arte aqui é medível e já foi
medido — o interessante não é o número de hoje, é o que se desloca quando ele sobe. Uma taxa de
executabilidade não diz nada sozinha; o que ela habilita é que revisão de arte passe a ser revisão
de código, que biblioteca de asset vire biblioteca de função, e que a pergunta de autoria mude de
lugar. É isso que a roda tenta rastrear.

## 3. Onde isso está hoje

### O que já existe e funciona

**IA escrevendo programa gráfico, com portão de qualidade.** O `img2threejs` reconstrói o objeto de
uma imagem de referência como fábrica TypeScript que devolve um `THREE.Group` — sem fotogrametria,
sem extração de malha, sem baixar pacote de arte. O pipeline tem oito passes (blockout, estrutural,
forma, material, superfície, iluminação, interação, otimização), cada um encerrado por uma folha de
comparação referência × render que precisa passar antes do próximo. Apache-2.0, 16,3 mil estrelas,
v2.0.0, roda sob Claude Code, Codex ou OpenCode [F1]. O projeto se descreve em economia de tokens:
validação mecânica em Python sem dependência, geração só do passe destravado, uma imagem de
comparação por decisão, saída em texto diffável no lugar de arquivo de malha.

**IA dirigindo ferramenta de produção.** O LL3M usa um time de modelos para escrever Python que
cria e edita assets no Blender, em três fases — criação inicial, refino automático, refino guiado
pelo usuário — e entrega código editável com parâmetros expostos na própria interface do Blender,
incluindo shader procedural por nós e cena multi-objeto com hierarquia nomeada [F2]. Em junho de
2026, no keynote do Houdini 22 em Londres, a SideFX apresentou o Apex Script Comfort Package:
suporte a MCP para que assistentes puxem sintaxe e exemplos reais de Apex Script e escrevam código
de rigging procedural. A demo gerou mais de 300 linhas de componente funcional, e a matéria destaca
o ponto que importa aqui — *nenhuma dependência do LLM depois de gerado* [F3].

**O campo já sabe medir.** O 3DCodeBench (Google DeepMind e USC, maio/2026) tem 212 categorias de
objeto e 26 mil prompts de texto/imagem pareados com código procedural e malha; os scripts têm em
média 531 linhas. Doze VLMs de fronteira (Google, Anthropic, OpenAI) foram avaliados [F4]. O
P3D-Bench (junho/2026) testa 11 modelos gerais e 3 especializados em 1.003 casos, em quatro
formatos de saída — JSON mínimo, OpenSCAD, CadQuery e Three.js — com métricas de geometria,
topologia, juiz multimodal e parte [F5].

**Reconstrução de programa a partir de dado.** O MeshCoder reconstrói objetos a partir de nuvem de
pontos como scripts Python de Blender executáveis, decompostos em partes semânticas, treinado sobre
dataset pareado objeto-código construído para isso (agosto/2025) [F6]. O Proc3D faz geração e
edição paramétrica de formas 3D por LLM (Adobe Research, janeiro/2026) [F7].

**Arte por código como teste de modelo.** A microavaliação "LLM Ultimate Challenge: Interactive GLSL
Shader Art" pede um HTML autocontido com Three.js e fragment shader GLSL que renderize um conjunto
de Julia animado, com paleta em transição temporal e controles de zoom centrado no cursor, pan,
morph por posição do mouse e pausa. Dos 16 modelos testados, 7 receberam voto positivo e 9 ficaram
em zero [F8]. Shader art virou régua de capacidade, não só passatempo de comunidade.

### O que existe e não funciona

O gargalo não é sintaxe, é mundo físico. O 3DCodeBench reporta executabilidade de 46% a 91% em
turno único, subindo a 97% agregado com feedback multi-turno de erro — mas conclui que os modelos
"frequentemente produzem partes desconectadas e alinhamentos estruturais incorretos, revelando
falta crítica de entendimento do mundo físico", e nomeia a plausibilidade física, não a execução,
como o gargalo principal [F4]. O P3D-Bench mede a mesma coisa com outro instrumento: o modelo mais
forte chega a J-Sem ≈ 0,8 e só a J-Geo ≈ 0,35 — acerta a identidade da forma e erra a geometria
paramétrica. Em montagem, PartMatchF1 ≈ 0,5: nem a geometria das peças nem a contagem delas. Os
modos de falha são nomeados: erro de sintaxe domina JSON/OpenSCAD (50–73%), erro de especificação
de parâmetro domina CadQuery (55%), e falha de kernel geométrico — código semanticamente válido que
não constrói geometria válida — responde por 24–27% [F5].

O mesmo ponto aparece de outro ângulo no ranking de shader art: mais da metade dos modelos testados
entrega algo estático, com erro de WebGL ou com controle que não funciona [F8].

Traduzindo: em 2026 a máquina escreve programa gráfico que roda. Ela ainda não sabe se o que o
programa desenhou faz sentido como objeto.

### Quem está construindo

Laboratórios corporativos (Google DeepMind, Adobe Research), academia (USC, Threedle/Chicago no
LL3M), fabricantes de ferramenta (SideFX com MCP no Houdini 22; a Blender Foundation por
tabela, já que o Python API dela virou o alvo de fato dos geradores) e um ecossistema aberto
articulado em torno de *agent skills* — o `img2threejs`, com plugins e patrocínio, é o caso mais
visível [F1, F2, F3, F4, F5, F7].

### Diagnóstico de hype × adoção

Usando o Hype Cycle apenas como heurística de leitura, e não como previsão: a cobertura do Houdini
22 é explicitamente de demonstração — a própria matéria registra que é "sneak peek" e que
*potencialmente* vai para o Labs, canal experimental, não para o núcleo do produto [F3]. Isso é
cobertura de pico de expectativa. Já o `img2threejs`, com 16,3 mil estrelas, forks, versão 2.0 e
ecossistema de plugin, é cobertura de uso — ainda de nicho, mas uso [F1]. E os benchmarks são o
terceiro tipo, o mais útil: cobertura de *limite*, que é o que permite datar a rampa em vez de
torcer por ela.

## 4. As disrupções-raiz

Critério aplicado a cada candidata: **o que isso rompe, e por que agora e não há cinco anos?** Sem
limiar concreto, a candidata não entra como raiz — vai para sinal fraco (seção 6) ou é descartada.

### D1 — A IA fecha o laço: escreve o gerador, olha o render, corrige

**O que rompe.** A restrição de que gerar 3D exigia *dado* — malha modelada à mão, fotogrametria,
captura. Passa a ser possível gerar *programa*, e o que sai é editável, diffável e animável.

**Por que agora.** Dois limiares datados. Primeiro, executabilidade: 46–91% em turno único e 97%
com correção iterativa num benchmark de 26 mil prompts cujos scripts têm 531 linhas em média — não
é primitiva de brinquedo [F4]. Segundo, e mais decisivo: o modelo passou a ser capaz de *ver o
próprio resultado*. O portão do `img2threejs` é uma folha de comparação referência × render julgada
pelo modelo antes de destravar o próximo passe [F1]; o LL3M tem fase de refino automático por
autocrítica [F2]. Há cinco anos não havia nem código gráfico executável em escala nem crítica
visual fechada no laço.

**O que ainda falta.** Plausibilidade física. J-Geo ≈ 0,35 e PartMatchF1 ≈ 0,5 em montagem [F5],
partes desconectadas e alinhamento estrutural errado [F4]. Enquanto isso não subir, o laço fecha
sobre "parece com a referência" e não sobre "monta como objeto".

### D2 — O artefato de mídia volta a ser texto: bytes e tokens contra a malha

**O que rompe.** A premissa de que fidelidade visual custa peso. Um objeto como fábrica TypeScript
mais especificação JSON é texto na casa dos quilobytes [F1]; a mesma cena capturada em 3D Gaussian
Splatting sai em PLY de 80 MB a 400 MB numa captura externa comum, e a faixa citada para cenas
completas chega à casa do gigabyte, com SPZ reduzindo até 10× e SPLAT 60–70% [F9]. A diferença não
é de percentual, é de ordem de grandeza.

**Por que agora.** O peso passou a ser cobrado duas vezes. A primeira é a de sempre — banda,
memória, taxa de quadros. A segunda é nova: quando quem manipula o asset é um agente, o asset
precisa caber no contexto dele. O `img2threejs` se mede explicitamente em tokens e diz por quê —
saída em texto diffável no lugar de arquivo de malha de vários megabytes, e tokens gastos só em
julgamento visual e código [F1]. Há cinco anos ninguém contava o peso de um asset em tokens porque
não havia agente lendo asset.

**O que ainda falta.** A comparação é injusta nos dois sentidos e ninguém publicou a medida honesta.
Programa ganha em objeto isolado, manufaturado, com simetria e repetição. Captura ganha em lugar,
pessoa, vegetação, desgaste — tudo que é irregular por natureza e que uma regra curta não comprime.
Falta o benchmark que meça as duas rotas na mesma tarefa com as mesmas métricas.

### D3 — A IA opera a ferramenta procedural por protocolo, e sai sem deixar dependência

**O que rompe.** A restrição de mão de obra especialista. Grafo de nós, VEX, Apex Script e geometry
nodes são poderosos e caros de aprender; o custo de entrada era um profissional treinado.

**Por que agora.** Junho de 2026, keynote do Houdini 22: MCP como via para o assistente puxar
sintaxe e exemplos *reais* de Apex Script — a matéria é explícita ao dizer que o código sai de
exemplos verdadeiros e não de sintaxe inventada — e gerar mais de 300 linhas de componente de rig
funcional [F3]. O limiar não é o modelo ficar mais esperto; é o protocolo de ferramenta ter
resolvido o problema de alucinação de API, que era o que inviabilizava isso em 2021. O LL3M mostra
o mesmo padrão no Blender, entregando parâmetros expostos na interface nativa [F2].

**O ponto que muda a natureza da coisa.** "Nenhuma dependência do LLM depois de gerado" [F3]. O
artista recebe um script que continua rodando sem assinatura, sem API, sem rede. Isso separa esta
disrupção de qualquer serviço de geração hospedado: o que se entrega é um ativo, não um acesso.

**O que ainda falta.** Escopo e status. O pacote da SideFX é deliberadamente estreito — só rigging,
só Apex Script — e foi apresentado como sneak peek que *potencialmente* vai para o Labs, não como
recurso de produto [F3]. E a plausibilidade física de D1 reaparece aqui: nada garante que o rig de
300 linhas deforme bem.

### Candidatas rejeitadas

**Geração procedural clássica em jogos, Processing/p5 no ensino, geometry nodes como recurso,
WaveFunctionCollapse.** Maduras. Teste: se sumissem amanhã, o campo voltaria ao que era? Não —
viraram infraestrutura absorvida, com substituto equivalente. Não mudam restrição, ficaram mais
baratas dentro do mesmo jogo. Rejeitadas como raiz, pela régua da disciplina.

**Reconstrução de programa a partir de nuvem de pontos (MeshCoder) e shader por linguagem natural
em RA (ShadAR).** Emergentes: existem, a curva de capacidade sobe, mas ainda não forçaram mudança
estrutural em quem produz. Vão para a seção 6.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A IA fecha o laço: escreve o gerador, olha o render e corrige"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A especificação executável substitui o arquivo de malha como entregável do designer 3D."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Revisão de arte passa a acontecer como revisão de código, com diff, comentário em linha e histórico."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Estúdios avaliam candidatos pela capacidade de ler e criticar um diff, não só pelo portfólio de imagem."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Bibliotecas de asset viram bibliotecas de função paramétrica versionadas em repositório."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O mercado de asset passa a cobrar licença de regra em vez de venda de arquivo baixado."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O gargalo do 3D por código se desloca de sintaxe para plausibilidade física: o programa executa e a montagem sai errada."
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Aparece uma camada de verificação geométrica e física independente do modelo que escreveu o código."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Passar no verificador vira credencial comercial do asset gerado, exigida por quem compra."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Ferramentas de creative coding incorporam modo agente com laço render-crítica embutido no editor."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O trabalho fica bimodal: o esboço é feito em linguagem natural e o acabamento é feito no código."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O ensino de design se reorganiza em torno de especificar sistemas e julgar saída, deslocando o treino em operação de ferramenta."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "O artefato de mídia volta a ser texto: bytes e tokens contra a malha"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Em objeto isolado e banda apertada, a entrega por programa passa a ser preferida à entrega por captura."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Consolida-se uma divisão de trabalho explícita: captura para lugar e pessoa, programa para objeto e produto."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Catálogos de comércio eletrônico distribuem a peça como função paramétrica configurada no dispositivo do cliente."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "A estética procedural volta a circular como escolha declarada de linguagem, e não como limitação técnica."
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Feito por regra e feito por captura se tornam marcadores opostos de gosto, com públicos distintos."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O peso do asset passa a ser contado em tokens, porque o agente que o edita precisa lê-lo inteiro."
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Formatos de cena são reprojetados para serem legíveis por modelo: texto, nomeado, hierárquico, diffável."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O pipeline adota um formato-fonte único legível por humano e máquina, e o binário fica reduzido a cache descartável."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "A IA opera a ferramenta procedural por protocolo, e sai sem deixar dependência"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Tarefas de grafo de nós que exigiam especialista sênior passam a ser encomendadas em linguagem natural."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A escassez profissional se desloca de quem opera a ferramenta para quem sabe especificar e conferir o resultado."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O papel do technical director procedural se bifurca em curador de biblioteca de regras e auditor de saída gerada."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A regra gerada por máquina não é protegível por direito autoral sem autoria humana demonstrável."
        sinal: forte
        prazo: 2026
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Estúdios passam a documentar deliberadamente a intervenção humana sobre o gerador para sustentar direito sobre a obra."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O registro de autoria migra do artefato final para o histórico de edição do gerador que o produz."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz sozinho

**As três raízes não são independentes, e a ordem entre elas importa.** D2 é condição econômica de
D1: sem a inversão de peso, gerar programa seria só uma curiosidade técnica ao lado de gerar pixel.
E D3 é o canal de distribuição das duas: é dentro de Blender, Houdini e Manim que o trabalho
procedural do mundo já acontece, e é por lá que a prática entra na produção real. Uma roda que
tratasse só de D1 descreveria um laboratório.

**e2 é a única raiz cujo efeito de 1ª ordem já é presente, não futuro.** Está datado em 2026 porque
já foi medido — J-Geo ≈ 0,35, PartMatchF1 ≈ 0,5, falha de kernel geométrico em 24–27% dos casos
[F4, F5]. Ele está na roda como efeito, e não na seção 3, porque o que interessa não é o número: é
que a existência do gargalo cria mercado para verificador (e2.1), e é isso que se projeta.

**e7 é o único ramo que não depende de nenhum limiar técnico subir.** Ele já aconteceu: em 2 de
março de 2026 a Suprema Corte dos Estados Unidos negou o pedido de revisão em *Thaler v.
Perlmutter*, deixando de pé o entendimento de que obra sem criador humano não é registrável [F10].
Se as três raízes travarem amanhã, e7 continua valendo — e é justamente por isso que ele é o ramo
mais confiável e o menos interessante da roda.

**O que a estrutura hierárquica esconde é a convergência.** e1.1.1 (contratar por leitura de diff),
e3.1.1 (ensino vira especificação de sistemas) e e6.1.1 (o TD se bifurca) são o mesmo fenômeno visto
de três portas: o deslocamento da competência de *fazer o artefato* para *julgar o artefato feito*.
Nenhuma árvore de efeitos mostra isso, porque a convergência é lateral e a árvore só desce.

## 6. Sinais fracos e wildcards

**Emergentes rejeitadas como raiz na Etapa 2, mantidas no radar.**

*Reconstrução de programa a partir de nuvem de pontos.* O MeshCoder transforma dado capturado em
script Python de Blender decomposto em partes semânticas [F6]. É a ponte entre os dois mundos que a
D2 opõe: capturar e *depois* virar regra. Não é raiz porque não mudou o trabalho de ninguém ainda —
mas se amadurecer, dissolve a divisão de trabalho de e4.1 inteira.

*Shader por linguagem natural em ambiente vestível.* O ShadAR gera shader por intenção visual dita
em voz alta para transformar percepção em realidade aumentada (IEEE, 2025). Não abri o texto
integral — registro aqui como sinal, não como fonte, e está declarado na seção 8.

*Animação matemática dirigida por agente.* A ecologia de servidores MCP em torno do Manim — pipeline
multiagente que escreve o código, renderiza, adiciona narração sincronizada — existe e é ativa em
2026. É o caso onde "a IA escreve o gerador" já chegou ao usuário final sem passar por estúdio. Só
consultei descrições de catálogo, não o código: sinal, não fonte.

*Adobe no jogo.* Proc3D vem da Adobe Research [F7]. Quando a edição paramétrica por LLM aparece
dentro de uma suíte comercial de criação, e não num repositório, D1 e D3 se fundem.

**Wildcard — baixa probabilidade, alto impacto.**

*O motor que gera o conteúdo como código no instante em que o jogador chega.* Não pré-geração
determinística por semente, que é madura; geração *de programa* em tempo de jogo, com o modelo
escrevendo o gerador do bairro conforme o jogador vira a esquina, e o programa persistindo como
fonte do lugar. Hoje trava em três pontos, todos medidos: latência de inferência, os 24–27% de
falha de kernel geométrico [F5] e a plausibilidade física [F4]. Se destravar, o impacto é
qualitativo — o mundo deixa de ser distribuído e passa a ser *descrito*; um jogo inteiro cabe em
alguns quilobytes e uma assinatura de modelo; e a garantia de que dois jogadores veem o mesmo lugar
vira problema de engenharia, não de instalação.

*Wildcard secundário, de sentido contrário.* Um tribunal decide que um gerador escrito por máquina
sobre exemplos de uma ferramenta proprietária é obra derivada da documentação e da base de código
que treinou o modelo. Não é a discussão de autoria de e7, é a inversa — e atinge exatamente o
mecanismo que fez D3 funcionar, que é puxar sintaxe e exemplos reais da ferramenta [F3].

## 7. Contra o próprio mapa

### Extrapolação linear

**e5 e e5.1 são o presente com mais adjetivo.** "O peso do asset passa a ser contado em tokens" e
"formatos de cena viram legíveis por modelo" descrevem uma curva já andando — o `img2threejs` já
conta tokens hoje [F1] — sem descontinuidade nenhuma. São observação com data no futuro. Mantidos,
com `confianca: media` em e5 e `media` em e5.1, e sem nenhum efeito de 3ª ordem além de e5.1.1, que
é o único ponto do ramo onde há mesmo uma virada (o binário vira cache descartável).

**e4.2 é gosto disfarçado de prognóstico.** "A estética procedural volta a circular como escolha" é
uma frase que se pode escrever sobre qualquer estética em qualquer década, e a evidência que eu
teria para sustentá-la — algum indicador de circulação de arte generativa — eu não levantei.
Rebaixado para `confianca: baixa` já no bloco. Deveria talvez ter saído.

### Velocidade de adoção nunca vista

**e1 em 2027 é o prazo mais frágil do mapa.** Ele supõe que "a especificação executável substitui o
arquivo de malha como entregável" em cerca de um ano. O caso comparável que contradiz isso é o
próprio USD: a Pixar abriu o Universal Scene Description em 2016, ele tinha respaldo de estúdio,
padrão e consórcio, e levou perto de uma década para virar troca padrão de cena — e ainda convive
com FBX e OBJ. Formato de entrega em pipeline gráfico é onde a inércia é maior, porque cada mudança
quebra ferramenta contratada, treinamento de equipe e arquivo legado. Mantive `alta` em e1 restrito
a *um nicho* — objeto manufaturado para web — e é esse o sentido em que a leio; se for lida como
"substitui em geral", o prazo correto seria 2031 e a confiança, baixa. Declaro a ambiguidade em vez
de escondê-la.

**e6 em 2027 supõe que a demo vira produto em um ano.** A própria fonte diz o contrário com todas as
letras: sneak peek, *potencialmente* para o Labs, não recurso de núcleo [F3]. Sei que a história das
ferramentas de VFX é de recurso experimental levando três a cinco anos até produção. Mantive 2027
porque a formulação do efeito é "passam a ser encomendadas em linguagem natural", que já acontece
por caminhos não oficiais (add-ons de terceiros no Blender e no Houdini), mas o leitor deve
descontar isso.

### Se a disrupção não vingar

**Se D1 não vingar** — se a plausibilidade física for gargalo estrutural e não engenharia, e J-Geo
empacar em 0,35 —, caem e1, e2.1, e3 e todas as subárvores: nove efeitos, mais da metade do mapa. O
que sobra é o programa como formato de *rascunho* e de *objeto simples*, com humano refazendo tudo
que precise montar. Cenário inteiramente plausível: J-Sem ≈ 0,8 contra J-Geo ≈ 0,35 é um fosso de
natureza, não de grau — o modelo sabe o que é a coisa e não sabe onde ela fica [F5].

**Se D2 não vingar** — se a compressão de splat continuar melhorando (SPZ já corta até 10× [F9]) e
o argumento de peso deixar de morder —, caem e4 e e5 com suas cinco subárvores, e a disputa
"programa contra pixel" se resolve por conveniência de pipeline, não por bytes. Este é o risco mais
subestimado do mapa: eu comparei a ordem de grandeza de hoje e tratei como estável uma diferença
que está sob ataque ativo de otimização dos dois lados.

**Se D3 não vingar** — se o MCP em ferramenta de produção morrer como experimento e a curadoria de
sintaxe não escalar para além de rigging —, caem e6 e e6.1.1, e e7 *fica de pé sozinho*, porque não
depende de nada disso. Seria a configuração irônica: a única coisa que restaria do mapa é a
conclusão jurídica.

### Viés do autor

A skill manda perguntar ao usuário, não inventar por ele. Não há usuário nesta rodada, então
registro o que pode ser respondido e o que fica em aberto.

O que pode ser respondido: o enunciado declara viés neutro e diz que mudaria de ideia diante de
evidência de que a adoção passou da maioria inicial ou de que a tecnologia não rompe nada. Nenhuma
das duas foi encontrada — o que encontrei foi adoção de nicho com limite medido, que é exatamente a
faixa em que o mapa se justifica.

O que fica em aberto, e é pergunta para `jgpt` antes da entrega: **você escolheu este tema porque
gosta de código?** Se sim, há um viés estrutural neste mapa que eu não consigo corrigir sozinho —
ele trata "o artefato volta a ser texto legível" como boa notícia em praticamente todos os ramos, e
trata a mídia densa como o polo opaco e pesado. Um mapa escrito por quem gosta de captura ordenaria
os mesmos fatos ao contrário, tratando a regra como redução empobrecedora do mundo. Os dados
verificados não decidem essa disputa; a moldura decide, e a moldura aqui é a do código. Isto é uma
limitação declarada, não corrigida.

### O que mudou depois do ataque

Rebaixadas: e4 (alta → media), e4.2 (media → baixa), e5 (alta → media). Reformulado: e4, que dizia
"a web prefere programa a captura" e virou "em objeto isolado e banda apertada", porque a versão
anterior não sobrevivia à distinção lugar/objeto. Cortados três efeitos, listados no Anexo.

## 8. O que a máquina errou

**O erro específico, e o mais plausível de todos.** Na primeira montagem da D2 eu escrevi, com toda
a confiança, que "um objeto em código pesa mil vezes menos que o mesmo objeto em splat" — encostando
no número que o próprio enunciado do tema sugeria. As duas pontas do número existem e foram lidas:
1–5 KB de fábrica TypeScript [F1] e 80–400 MB de PLY [F9]. A conta fecha e dá mais de mil vezes. O
problema é que **as duas medidas não são do mesmo objeto**: a faixa de 80–400 MB é de *cena externa
capturada*, não do objeto isolado que o `img2threejs` reconstrói, e a de 1–5 KB é do objeto isolado,
não de uma cena. Eu estava comparando um parafuso com um quarteirão e apresentando a razão como
propriedade da tecnologia. Percebi ao voltar para escrever "o que ainda falta" em D2 e não conseguir
nomear uma fonte que tivesse medido as duas rotas *na mesma tarefa* — porque não existe. Corrigi
para "ordem de grandeza, sem medida pareada publicada", e a ausência dessa medida virou justamente o
experimento da seção 10.

**Fontes citadas sem leitura integral, declaradas.** O ShadAR (IEEE) e o ecossistema MCP do Manim
aparecem na seção 6 a partir de descrição de busca, não de texto aberto — *não verificados, o
usuário precisa confirmar antes de entregar*, e por isso ficaram fora da seção 11 e fora da contagem
de dez fontes. O LL3M foi lido pela página do projeto, que não traz autores, instituição nem venue;
a busca indica arXiv 2508.08228, que eu não abri. O MeshCoder foi lido pelo resumo no arXiv, não
pelo PDF — a primeira tentativa de baixar o PDF falhou por tamanho, e o resumo não traz nenhuma
métrica numérica, só a afirmação de "desempenho superior". Registro para não deixar passar como se
tivesse número.

**Número redondo demais.** "16,3 mil estrelas" no `img2threejs` [F1] é métrica de popularidade de
repositório, que mede atenção e não uso. Usei como evidência de "cobertura de adoção" na seção 3;
é o elo mais fraco desse diagnóstico e deveria ser lido com desconto.

**Uma limitação de método, não de fonte.** Todos os benchmarks que sustentam este mapa avaliam
geração de *objeto*. Nenhum avalia geração de *comportamento* — o shader que anima, o sistema de
partículas, o motion design por regra ao estilo Cavalry, que é metade do território de "creative
coding". A microavaliação de shader art [F8] é o único vizinho, e é uma amostra de 16 modelos numa
única tarefa, com votação por polegar, não uma métrica. O mapa está, portanto, mais bem sustentado
no eixo 3D do que no eixo animação, e as afirmações sobre o segundo são mais fracas do que a prosa
deixa parecer.

## 9. Três cenários para 2031

**Provável.** A divisão se consolidou por natureza do objeto, e não por ideologia. Produto,
mobiliário, arquitetura, interface e tudo que é manufaturado e simétrico passou a ser entregue como
programa; pessoa, lugar, vegetação e desgaste continuaram sendo capturados. O pipeline típico de
2031 mistura os dois na mesma cena sem que ninguém ache isso notável. A camada de verificação
geométrica virou etapa padrão, como *linter* — não porque alguém a tenha projetado, mas porque os
estúdios cansaram de receber montagem torta. O ensino de design mudou menos do que o mapa previa:
as escolas acrescentaram uma disciplina de especificação de sistemas e mantiveram o resto. O cargo
de operador de ferramenta procedural não desapareceu; encolheu e ficou mais bem pago, concentrado
em quem audita.

**Desejável.** Chegou-se a 2031 com o formato-fonte legível como padrão e o binário como cache — e,
por causa disso, com mídia que o usuário final pode abrir, ler e alterar, coisa que não acontecia
desde o HTML. Para chegar aqui foi preciso fazer três coisas que não eram automáticas. Primeira,
publicar o benchmark pareado que ninguém publicou em 2026: mesma tarefa, mesmas métricas, programa
contra captura, com o resultado honesto de que cada rota ganha em metade do território. Segunda,
tratar o verificador geométrico como bem comum e abrir o código, em vez de deixar virar selo
proprietário vendido por quem também vende o gerador — porque quem controla o portão controla o
mercado. Terceira, o campo educacional ter resistido à leitura fácil de que "agora todo mundo é
designer": as escolas que ensinaram a *ler* saída gerada formaram profissionais que perceberam a
montagem errada; as que ensinaram a *pedir* formaram gente que não percebeu.

**Indesejável.** O gerador ficou dentro da plataforma. A regra é escrita por modelo hospedado,
executada em ambiente hospedado, e o "código editável" que o mapa de 2026 celebrava chega ao
designer como artefato ilegível de dez mil linhas que ninguém revisa e todo mundo aceita, porque
revisar custa mais do que regerar. A promessa de "nenhuma dependência do LLM depois de gerado" [F3]
virou exceção de um fabricante e não regra do campo. Como a regra gerada não é protegível sem
autoria humana [F10] e comprovar essa autoria dá trabalho, o valor migrou inteiro para quem opera a
infraestrutura, e o designer virou o revisor mal pago de um sistema que não consegue auditar. **O
sinal precoce disto já é observável e é de 2026:** é a distância entre a taxa de execução, que todo
mundo divulga (97% com correção iterativa [F4]), e a taxa de plausibilidade, que quase ninguém cita
(J-Geo ≈ 0,35 [F5]). Quando o campo comemorar a primeira e parar de medir a segunda, o cenário
indesejável começou.

## 10. O experimento

**O duelo cego: o mesmo objeto por duas rotas.**

Construível hoje, em uma semana, com laptop.

*O que é.* Escolher oito objetos que cubram o espectro da hipótese — quatro manufaturados, com
simetria e repetição (uma cadeira, uma caneca, um controle de videogame, uma luminária), e quatro
irregulares (uma planta em vaso, uma pedra, um tênis usado, um rosto de boneco gasto). Para cada um,
produzir duas entregas. Rota A: captura, com o telefone e um aplicativo de splat, exportando em
formato web. Rota B: programa, com o `img2threejs` ou equivalente sob agente, gerando fábrica
TypeScript. Registrar quatro medidas por objeto: **bytes** na entrega web final; **tokens** gastos
para produzir; **tempo até uma alteração dirigida** — "deixe o encosto 20% mais alto", "troque a cor
do cabo" —, que é onde a regra deveria ganhar de goleada; e **acerto percebido**, por um painel
cego que vê os dois lados contra a foto de referência sem saber qual é qual.

*Que pergunta sobre o futuro ele responde.* Exatamente a que falta em D2 e que eu errei na seção 8:
onde passa a linha entre o território do programa e o território da captura, medida e não afirmada.
O mapa inteiro depende dessa fronteira — e4.1 é uma hipótese sobre ela — e nenhuma fonte de 2026
publicou a medida pareada.

*Que tecnologia emergente usa, e por que não dá com tecnologia madura.* Usa a reconstrução por
código com portão de crítica visual [F1], que não existia antes de 2025. Com tecnologia madura só se
faz metade: um modelador humano produz a rota B, e aí a medida de tempo e de tokens vira medida da
perícia do modelador, não da rota. O experimento só existe porque a geração de programa ficou barata
o suficiente para ser tratada como *rota* e não como *projeto*.

*O que a turma faria em sala.* Duas coisas, e a segunda é a boa. Primeiro, o painel cego: cada
aluno vê os dezesseis resultados contra as oito fotos e aponta qual lado está mais perto — e a
aposta que vale registrar antes é a de que o painel acerta a origem nos objetos irregulares e erra
nos manufaturados. Segundo, e mais interessante: a rodada de **alteração ao vivo**. O professor
pede uma mudança que não estava prevista, cronômetro na mão. Na rota B alguém abre o arquivo e muda
um número. Na rota A não há o que abrir. A turma vê a diferença entre editar e regerar, que é a tese
inteira do tema, em noventa segundos e sem slide.

*O que mudaria a opinião do autor.* Se a rota B vencer também nos objetos irregulares, a divisão de
trabalho de e4.1 está errada e D2 é mais forte do que o mapa diz. Se a rota B perder até nos
manufaturados quando o critério é acerto percebido, então o argumento de peso é consolo de quem
entrega pior, e2 é o gargalo real e não um obstáculo de percurso, e metade do mapa cai.

## 11. Fontes

Somente o que foi de fato aberto e lido nesta sessão. Fontes mencionadas sem leitura integral estão
declaradas na seção 8 e não entram aqui.

1. **[F1]** `https://github.com/img2threejs/img2threejs` — repositório do `img2threejs`. Sustenta:
   a descrição do pipeline de oito passes e do portão de comparação (seção 3), a saída em fábrica
   TypeScript de 1–5 KB e o argumento de economia de tokens (D2), a licença Apache-2.0 e as 16,3 mil
   estrelas. *Confiabilidade:* fonte primária do projeto, e portanto interessada — as alegações de
   eficiência são autodeclaradas e não foram auditadas por terceiro. Os fatos verificáveis (licença,
   estrelas, estrutura) são confiáveis; as comparações de custo, não.
2. **[F2]** `https://threedle.github.io/ll3m/` — página do projeto LL3M. Sustenta: time de modelos
   escrevendo Python para Blender, as três fases, código editável com parâmetros expostos na
   interface (seção 3, D3). *Confiabilidade:* página de projeto acadêmico, sem autores, instituição
   ou venue declarados no que foi lido, e sem benchmark comparativo. Descrição de capacidade, não
   evidência de desempenho.
3. **[F3]** `https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/`
   — cobertura do keynote do Houdini 22 (22/06/2026, Londres). Sustenta: o Apex Script Comfort
   Package, o MCP, as 300+ linhas de rig, a ausência de dependência do LLM depois de gerado, e
   também o escopo estreito e o status de sneak peek (D3, seção 7). *Confiabilidade:* Jon Peddie
   Research é analista estabelecido do setor gráfico; é cobertura de evento, e a própria matéria
   marca o que é demonstração e o que é produto — o que a torna mais útil que um comunicado.
4. **[F4]** `https://arxiv.org/html/2606.01057` — 3DCodeBench (Google DeepMind e USC, 31/05/2026).
   Sustenta: 212 categorias, 26 mil prompts, 531 linhas médias, 12 VLMs, executabilidade 46–91% em
   turno único e 97% multi-turno, e a conclusão de que plausibilidade física — não execução — é o
   gargalo. *Confiabilidade:* preprint de arXiv sem revisão por pares confirmada, com autoria
   institucional forte e metodologia declarada. É a melhor evidência quantitativa do mapa.
5. **[F5]** `https://arxiv.org/html/2606.11152v1` — P3D-Bench (Yang et al., 06/2026). Sustenta:
   1.003 casos, quatro formatos de saída, J-Sem ≈ 0,8 contra J-Geo ≈ 0,35, PartMatchF1 ≈ 0,5, e a
   distribuição dos modos de falha (sintaxe 50–73% em JSON/OpenSCAD, parâmetro 55% em CadQuery,
   kernel geométrico 24–27%). *Confiabilidade:* preprint de arXiv, metodologia detalhada e métricas
   declaradas. Converge com [F4] por instrumento independente, o que reforça as duas.
6. **[F6]** `https://arxiv.org/abs/2508.14879` — MeshCoder (Dai et al., 20–22/08/2025). Sustenta:
   nuvem de pontos reconstruída como script Python de Blender decomposto em partes semânticas
   (seção 6). *Confiabilidade:* lido apenas o resumo; o PDF excedeu o limite de download. O resumo
   afirma "desempenho superior" sem número, e nenhum dado quantitativo foi extraído daqui.
7. **[F7]** `https://arxiv.org/pdf/2601.12234` — Proc3D (Raji, Petrangeli, Gadelha, Shen,
   Bhattacharya e Wu; 21/01/2026). Sustenta: geração e edição paramétrica de forma 3D por LLM, e a
   presença da Adobe Research no campo (seções 3 e 6). *Confiabilidade:* preprint recente; o resumo
   descreve capacidade sem métrica comparativa — usado como evidência de *quem está construindo*,
   não de desempenho.
8. **[F8]** `https://artificialanalysis.ai/microevals/llm-ultimate-challenge-interactive-glsl-shader-art-1756340323607`
   — microavaliação de arte em shader GLSL. Sustenta: a tarefa do conjunto de Julia interativo, os
   critérios de falha, e o placar de 16 modelos com 7 positivos e 9 zerados (seção 3).
   *Confiabilidade:* a mais fraca do conjunto. Amostra de uma tarefa, pontuação por voto e não por
   métrica. Serve como indício de dificuldade, nunca como medida.
9. **[F9]** Levantamento de formatos de 3D Gaussian Splatting (comparativos de PLY, SPLAT, SPZ e
   KSPLAT consultados via busca, 2026). Sustenta: as faixas de peso — 80–400 MB para captura externa
   comum em PLY, com casos na casa do gigabyte; SPZ até 10× menor; SPLAT com corte de 60–70% (D2).
   *Confiabilidade:* material técnico de fornecedor e de documentação de serviço, não acadêmico. As
   faixas são plausíveis e consistentes entre si, mas a medida não é pareada com nenhuma
   contraparte procedural — é exatamente a lacuna descrita na seção 8.
10. **[F10]** `https://www.morganlewis.com/pubs/2026/03/us-supreme-court-declines-to-consider-whether-ai-alone-can-create-copyrighted-works`
    — *Thaler v. Perlmutter*, negativa de certiorari em 02/03/2026. Sustenta: obra criada
    exclusivamente por IA autônoma não é registrável, e a necessidade de demonstrar contribuição
    humana e nomear autor humano (e7, e7.1). *Confiabilidade:* publicação de escritório de advocacia
    sobre decisão pública e datada; alta para o fato jurídico, e limitada à jurisdição
    estadunidense — o mapa não a estende a outros ordenamentos.

**Nota sobre o Brasil.** A leitura brasileira deste mapa não tem, hoje, dado próprio que a sustente.
O que foi encontrado foi trabalho qualitativo — um estudo do Reglab publicado em 19/05/2026, com
amostragem de caso extremo e sete profissionais entrevistados entre setembro e novembro de 2025 em
audiovisual, design, artes visuais e educação, concluindo por efeito predominantemente aumentativo e
condicionado a acesso, tempo de aprendizado, repertório prévio e letramento técnico. É um bom
diagnóstico de contexto e uma base ruim para projeção: sete casos escolhidos por serem extremos não
generalizam, e o próprio estudo diz isso. Números de adoção que circulam em matérias de mercado
(ordem de 60% de designers brasileiros usando alguma ferramenta de IA) não foram rastreados até a
fonte primária e por isso não estão no corpo do documento. A hipótese razoável, e declarada como
hipótese: o eixo D2 — peso e banda — morde mais forte no Brasil do que na média global, porque a
restrição de banda e de dispositivo é mais real aqui; e o eixo D3 morde menos, porque depende de
licença de ferramenta cara.

## 12. Anexo — o levantamento bruto

### A.1 Respostas da Etapa 0 (entrevista), tal como recebidas

Não houve usuário nesta rodada. As respostas vieram no enunciado da execução e são estas, sem
edição:

- Tema: "Gerar geradores: design procedural e creative coding com IA" (tema 14 de 19; família
  "Criação e plataforma").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (a régua da disciplina). Nenhuma outra
  exclusão.
- Disrupção suspeita: nenhuma — descobrir. Viés: neutro. Ideias óbvias a excluir: as que servem para
  qualquer tema.
- O que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers), ou de
  que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Login: `jgpt`. Skill: `futurizacao-jgpt`.

**Defaults assumidos em silêncio pela ausência de usuário, declarados aqui:** `publico_ok: false`
(a skill manda `false` salvo autorização explícita, que não houve); `confianca: media` para o mapa
como um todo, decidida na Etapa 4 e não pelo usuário; e a resposta à pergunta de viés da Etapa 4,
item 4, que **não pôde ser obtida** — está registrada como pergunta aberta na seção 7 e é o item
que mais falta a este documento.

### A.2 Buscas realizadas, com resultado

| Busca | Resultado |
|---|---|
| `LLM generating procedural 3D code Three.js instead of mesh 2026` | Produtiva. Levou a 3DCodeBench, LL3M, MeshCoder, P3D-Bench, 3Dify. |
| `img2threejs procedural code reconstruction from image` | Produtiva. Repositório oficial, showcase, e uma constelação de domínios espelho (`img2threejs.io`, `img2threejs.dev`, `webgpu.com`, `uwarp.design`) que não abri. |
| `LLM shader generation benchmark ShaderBench GLSL 2026` | **Parcialmente frustrada.** Não existe "ShaderBench". O que há de shader é a microavaliação [F8], e o resto do resultado é geração de *kernel* de GPU (KernelBench, FlashInfer-Bench, SOL-ExecBench, CodegenBench, Triton-Bench) — que é outro problema. Registro a busca sem resultado: **não encontrei benchmark sistemático de geração de shader por LLM.** Esta é uma lacuna real do campo e não um fracasso da busca. |
| `Blender geometry nodes AI generate node graph LLM 2026` | Produtiva de lado. Levou a LL3M e Proc3D, e a dois itens que não abri: `treegen-llm` (add-on de árvore procedural por prompt) e a afirmação de que 79 nós do geometry nodes foram traduzidos em representação textual legível por máquina — item promissor que ficou de fora por falta de fonte aberta. |
| `SideFX Houdini AI procedural assistant copilot 2026` | Produtiva. Levou a [F3] e a MorfyAI, co-piloto de terceiro que lê a cena, constrói redes de nós, escreve VEX e roda Python — não aberto, não citado. |
| `gaussian splat file size vs procedural code web 3D performance 2026` | Produtiva só de um lado. Devolveu as faixas de peso de splat [F9] e nenhuma comparação com rota procedural. **É a busca cujo resultado vazio virou o experimento da seção 10.** |
| `manim MCP AI driven animation generation 2026` | Produtiva como sinal, não como fonte. Vários servidores MCP e pipelines multiagente para Manim, todos em catálogo de MCP ou README — nada que eu tenha aberto e verificado. Fica na seção 6. |
| `copyright AI generated code procedural art US Copyright Office 2026` | Produtiva. Levou a [F10] e ao relatório de janeiro de 2025 do Copyright Office (controle criativo humano sobre elementos expressivos; prompt sozinho em geral não basta), citado por intermediário e não aberto. |
| `Brasil creative coding arte generativa ensino design procedural 2026 IA` | **Fraca.** O resultado é majoritariamente material comercial de curso. O único item com método declarado é o Reglab, usado na nota do Brasil. Nenhuma fonte brasileira entrou na seção 11. |

### A.3 Efeitos cortados, com o motivo

- **"O prompt vira o formato de distribuição: um mundo inteiro cabe numa frase."** Cortado da 3ª
  ordem de e4. Motivo: é a pergunta de 3ª ordem do enunciado do tema transformada em afirmação, sem
  nenhum mecanismo causal que a ligue a e4.1. Virou parte do wildcard da seção 6, que é onde
  especulação sem mecanismo pode morar.
- **"Surge um mercado secundário de geradores como os pacotes de asset de hoje."** Cortado por
  redundância com e1.2.1, que diz a mesma coisa com mais precisão (licença de regra em vez de venda
  de arquivo).
- **"A arte generativa recupera prestígio institucional e entra em acervo de museu."** Cortado da
  subárvore de e4.2. Motivo: nenhuma evidência levantada, e o efeito serviria igualmente bem para
  qualquer tema de estética digital — cai na exclusão de "ideias óbvias que servem para qualquer
  tema", pedida na Etapa 0.
- **Um quarto nível sob e1.1.1** ("a formação em design se separa em trilha de sistema e trilha de
  forma"). Cortado por regra fixa de formato: três níveis é teto. O desdobramento está preservado
  aqui e reaparece em prosa no cenário Desejável.

### A.4 Candidatas a disrupção-raiz e o veredito da Etapa 2

| Candidata | Teste "o que rompe, por que agora" | Veredito |
|---|---|---|
| IA escreve gerador com portão visual | Executabilidade medida em benchmark de 26 mil prompts + crítica visual fechada no laço, inexistente antes de 2025 | **Raiz (D1)** |
| Artefato de mídia como texto: peso em bytes e em tokens | Ordem de grandeza entre 1–5 KB e dezenas/centenas de MB, somada à cobrança dupla do peso quando um agente lê o asset | **Raiz (D2)** |
| IA operando ferramenta procedural por protocolo | MCP com sintaxe curada resolvendo alucinação de API; junho/2026; sem dependência do modelo depois de gerado | **Raiz (D3)** |
| Geração procedural em jogo (semente, WFC, terreno) | Não rompe restrição nova; ficou mais barata dentro do mesmo jogo; substituível por equivalente | Madura — rejeitada |
| Creative coding em Processing/p5 no ensino | Infraestrutura absorvida há duas décadas | Madura — rejeitada |
| Geometry nodes / Houdini como recurso de ferramenta | Recurso consolidado; o que é novo é *quem opera*, e isso é D3 | Madura — rejeitada |
| Reconstrução de programa a partir de nuvem de pontos (MeshCoder) | Capacidade subindo, ainda sem mudança estrutural em quem produz | Emergente — seção 6 |
| Shader por linguagem natural em RA (ShadAR) | Piloto acadêmico; fonte não aberta | Emergente — seção 6 |
| Animação matemática dirigida por agente (Manim + MCP) | Ecossistema ativo, mas sem fonte verificada e sem limiar datável | Emergente — seção 6 |

### A.5 Caminhos abandonados

- **Um quarto eixo sobre motion design por regra** (Cavalry, Rive), sugerido pelo enunciado do tema.
  Abandonado por falta de qualquer fonte verificável sobre IA escrevendo a *regra de animação* — o
  que existe é IA escrevendo geometria. A consequência disso está declarada na seção 8 como
  limitação de método, e é a maior fragilidade do documento: o tema diz "creative coding" e o mapa
  entrega, sobretudo, 3D.
- **Tentativa de abrir o PDF do MeshCoder** (`arxiv.org/pdf/2508.14879`): falhou por exceder o
  limite de tamanho da ferramenta. Recuperado pelo resumo em `arxiv.org/abs/`, sem métrica.
- **Tentativa de datar a adoção pela curva de Rogers**, como o enunciado sugeria como critério de
  mudança de ideia. Abandonada: não há denominador. Estrelas de repositório não são adoção, e
  nenhuma das fontes lidas mede quantos estúdios ou designers usam qualquer uma destas ferramentas.
  Registro como a lacuna metodológica central — **o mapa não consegue provar que a adoção *não*
  passou da maioria inicial; consegue apenas mostrar que ninguém mediu.**

### A.6 Verificação de formato

Rodado sobre o arquivo final: `grep -c "^## "` deve retornar 12. Frontmatter e bloco `roda:`
validados como YAML. Contagens do frontmatter conferidas contra o bloco: 3 disrupções, 7 efeitos de
1ª ordem, 9 de 2ª, 9 de 3ª. Nenhum campo `sinal`, `prazo` ou `confianca` vazio. Nenhum efeito
escrito como pergunta. Nenhum link da seção 11 é de fonte não aberta; as não abertas estão na seção
8 e na seção 6, nomeadas como tais.
