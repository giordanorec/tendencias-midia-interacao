---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 15
efeitos_ordem_2: 25
efeitos_ordem_3: 17
tecnologias_citadas: [LL3M, BlenderRAG, MeshCoder, Proc3D, Procedural Compact Graph, ProcFunc, Infinigen, 3DCodeBench, 3DCodeArena, Text2CAD-Bench, CadQuery, CAD-Coder, Text2CADQuery, CADFusion, img2threejs, Three.js, TSL, WebGPU, WebGPURenderer, WGSL, GLSL, Blender, Geometry Nodes, bpy, BlenderMCP, Model Context Protocol, Houdini 22, Apex Script, SideFX Labs, Substance 3D Designer 16, Shape Splatter v2, SDF nodes, Substance 3D Sampler, Cavalry, Rive, Lottie, Graphite, Manim, ManimCommunity, manim-mcp, Processing, p5.js, Shadertoy, ShadAR, AI Co-Artist, StarVector, TikZero, Claude Code, Codex, Gemini CLI, GPT-5.5, Gemini 3.1 Pro, Claude 4.5 Sonnet, WaveFunctionCollapse, Gaussian Splatting]
fontes: 32
confianca: media
experimento: "O duelo do quilobyte — o mesmo objeto de referência reconstruído por quatro caminhos, medido em bytes entregues, custo de produção, edições que aceita sem refazer e autoria que consegue provar"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Design procedural tem quarenta anos e é maduro: Houdini, Geometry Nodes, Substance Designer e
Shadertoy são padrão de indústria, e este mapa os recusa como disrupção-raiz. O que mudou é quem
escreve a regra. A partir de 2025 a IA passou a produzir o **programa** que gera o artefato em vez
do artefato — LL3M escrevendo Python de Blender (UChicago, 08/2025), MeshCoder reconstruindo nuvem
de pontos como código (08/2025), Proc3D com um grafo compacto que corta de 4 a 10 vezes o contexto
necessário (Adobe, 01/2026), ProcFunc redesenhando a biblioteca de Princeton **para que o modelo
erre menos** (04/2026). E ganhou medição: o 3DCodeBench (06/2026) testou 12 modelos de visão e
linguagem sobre 212 categorias e 13 mil objetos, e achou o resultado que organiza este mapa — em
uma tacada o GPT-5.5 lidera com Elo 1167 e 87,3% de executabilidade, o Gemini 3.1 Pro fica em 69,3%,
mas **dentro de um agente com execução e correção a executabilidade vai a praticamente 100%**. O
ambiente que roda o código importa mais que o modelo que o escreve. Quatro rupturas sustentam o
mapa: a IA como autora do gerador, que troca o entregável binário por um script versionável; o
render no loop, que dá à criação visual um oráculo — rodou, comparou, reprovou — e a puxa para o
regime de engenharia de software; a assimetria jurídica entre regra e imagem, num ano em que o
AG München negou proteção a logos feitos por prompt de 1.700 caracteres (13/02/2026) mas manteve
aberta a porta da "influência concreto-formativa", que é exatamente o que editar um gerador é; e a
mídia voltando a trafegar como regra, com WebGPU estável por padrão em Chrome, Edge, Firefox e
Safari 26, e TSL transpilando o mesmo shader escrito em JavaScript para WGSL ou GLSL. Contra a
leitura fácil, o mapa registra três freios com dono: o p5.js **recusa** contribuição gerada e exige
que o contribuidor explique cada linha; a qualidade por consenso tem retorno decrescente medido —
platô em nove candidatos, ganho de 1 a 10% em distância de Chamfer (Siemens, 08/2026) —, o que
devolve ao procedural o custo que ele prometia cortar; e executar a regra no aparelho de entrada,
que é o aparelho brasileiro, pode custar mais que baixar a amostra. O que se perde já tem número:
a GDC 2026 ouviu mais de 2.300 profissionais e achou 52% dizendo que a IA generativa faz mal ao
setor, 64% entre artistas visuais e técnicos, 28% demitidos em dois anos e 74% dos estudantes
preocupados com o próprio futuro.

## 2. O tema

**O que é.** Em vez de produzir o artefato, produzir a regra que produz o artefato. Um modelo de
cadeira deixa de ser uma malha com 40 mil triângulos e passa a ser um programa de duzentas linhas
que, executado, constrói aquela cadeira — e, mudando um número, constrói outra. Uma textura deixa
de ser um PNG de 4K e passa a ser um grafo de nós que a calcula. Uma animação deixa de ser uma
sequência de quadros e passa a ser uma máquina de estados que responde a evento. Isso é design
procedural, e não é novo: Houdini nasceu nos anos 1990, o Processing em 2001, o Substance Designer
em 2010, as Geometry Nodes do Blender em 2021.

**O que é novo.** A IA passou a escrever a regra. Não a executar, não a ajustar parâmetro — a
escrever o programa: o script de Blender, o shader, o grafo de nós, a fábrica de `THREE.Group` em
TypeScript, o código CadQuery. Isso muda o objeto do trabalho de quem projeta: a peça entregue ao
cliente é o gerador; o que se revisa é código; o que se versiona é texto; o que se edita continua
editável depois de gerado, porque não virou pixel.

**Onde encosta em mídia e interação.** Em quatro lugares de uma vez. (a) No ofício: se a execução
vira gratuita, o valor migra para a especificação da regra e para o julgamento do resultado — e o
julgamento é o que não escala. (b) No peso: uma regra tem kilobytes, uma amostra tem megabytes, e
mídia interativa vive de tempo até o primeiro quadro. (c) Na revisão: um programa se diffa, se
testa, se comenta em linha; uma imagem gerada, não. (d) No direito: programa de computador é obra
literária em praticamente toda jurisdição, e imagem de prompt vem sendo declarada sem proteção —
uma assimetria que ninguém no design ainda usou como critério de escolha técnica, e que este mapa
argumenta que será usada.

**Por que merece um mapa de futuro e não um levantamento de estado da arte.** Porque a pergunta
interessante não é "o que existe" — existe muito, e está listado na seção 3. É a disputa entre duas
formas de gerar mídia que não se resolveu, e que tem consequências que não estão no artigo de
nenhuma delas: **gerar a amostra** (pixel, malha, splat, quadro — pesada, opaca, não editável,
juridicamente estéril) contra **gerar o programa** (leve, legível, editável, verificável,
protegível — e menos fiel). Um levantamento de estado da arte descreveria as duas. Um mapa de
futuro pergunta quem ganha onde, quem perde o emprego no meio, o que trava, e o que acontece com o
ensino de design quando a execução deixa de ser o que se ensina.

**A fronteira com os vizinhos da disciplina.** Capturar realidade em 3D — fotogrametria, splat,
renderização neural — é o tema 10: ali o artefato é **dado medido**. Gerar vídeo e imagem como
mídia é o tema 12: ali o artefato é **amostra sintetizada**. Aqui o artefato é **a regra**, e a
novidade é a IA escrevendo a regra. Onde os três se tocam — e eles se tocam — este mapa cita e
segue adiante, sem invadir.

**O recorte deste mapa.** Horizonte 2031. Público: quem projeta mídia e interação — designer,
motion designer, artista técnico, desenvolvedor de front-end 3D, professor de design. Recorte
global, com uma nota sobre o Brasil onde a diferença importa (e ela importa: o parque de aparelhos
é de entrada, e a formação em design digital ainda é formação em ferramenta). Descartado de
início, pela régua da disciplina: o que já é comum em produto de massa.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**A IA escrevendo código de Blender.** O **LL3M** (Sining Lu, Guan Chen, Nam Anh Dinh, Itai Lang,
Ari Holtzman, Rana Hanocka; Universidade de Chicago; arXiv 2508.08228, 11/08/2025) coordena um time
de agentes especializados que planejam, recuperam, escrevem, depuram e refinam scripts Python de
Blender. Ele não aprende de conjuntos de dados 3D: reformula geração de forma como tarefa de
escrita de código. O pipeline tem três fases — criação inicial, refinamento automático (que corrige
configuração implausível e geometria simplória) e refinamento dirigido pelo usuário — e usa
**BlenderRAG**, uma base de recuperação montada a partir da documentação da API do Blender. A saída
usa B-meshes, modificadores de geometria e nós de shader, com nomes de variável e comentários
legíveis. A página do projeto é explícita sobre a ambição: lidar com "assets irrestritos, com
geometria, layout e aparência", não com uma subtarefa.

**A IA lendo forma e devolvendo código.** O **MeshCoder** (Bingquan Dai e outros onze autores;
arXiv 2508.14879, 20/08/2025) faz o caminho inverso: recebe nuvem de pontos e devolve script Python
de Blender editável, com o código decomposto em partes semânticas. Não inventa uma DSL: usa um
conjunto expressivo de APIs do próprio Blender. O ponto que interessa a este mapa é o que ele
habilita — "edição geométrica e topológica intuitiva por modificação conveniente de código", isto
é, mexer no objeto mexendo no texto.

**A biblioteca redesenhada para a IA escrever.** O **ProcFunc** (Alexander Raistrick, Karhan Kayan,
Jack Nugent, David Yan, Lingjie Mei, Meenal Parakh, Hongyu Wen, Dylan Li, Yiming Zuo, Erich Liang,
Jia Deng; Princeton; arXiv 2604.26943, 29/04/2026) é a evolução da linhagem do Infinigen — o
gerador procedural de mundos naturais fotorrealistas do mesmo laboratório, em que cada asset, da
forma à textura, nasce de regras matemáticas aleatorizadas, sem fonte externa. O ProcFunc oferece
funções Python de alto nível para criar, combinar, analisar e executar código de geração
procedural, e a justificativa declarada no resumo é a que importa aqui: **modelos de visão e
linguagem usando ProcFunc editam código procedural de material e geometria e escrevem código novo
"com significativamente menos erros de código"**. Não há percentual publicado no resumo — registro
isso como ausência, não como número.

**O grafo compacto como economia de contexto.** O **Proc3D** (Fadlullah Raji, Stefano Petrangeli,
Matheus Gadelha, Yu Shen, Uttaran Bhattacharya, Gang Wu; Adobe; arXiv 2601.12234, 21/01/2026)
enfrenta o limite de contexto com o **Procedural Compact Graph**, uma representação que abstrai
operações procedurais num formato conciso e **reduz o custo de contexto de 4 a 10 vezes** em
relação ao código específico da plataforma. É a primeira vez que vejo economia de token tratada
como decisão de projeto de representação gráfica.

**A medição.** O **3DCodeBench** (Yipeng Gao, Lei Shu, Genzhi Ye, Xi Xiong, Ameesh Makadia, Meiqi
Guo, Laurent Itti, Jindong Chen; arXiv 2606.01057, 02/06/2026) é a âncora quantitativa deste mapa.
Avalia 12 modelos de visão e linguagem traduzindo texto e imagem de referência em código
procedural para software de modelagem, sobre **212 categorias de objeto e 13 mil objetos 3D com
código**. Resultados de uma tacada: **GPT-5.5 com Elo 1167 e 87,3% de executabilidade; Gemini 3.1
Pro com Elo 1149 e 69,3%**. E o achado que reorganiza o mapa: com harness de agente de código —
Claude Code, Codex, Gemini CLI — os modelos chegam a **executabilidade praticamente perfeita**,
múltiplos deles a 100%. O resumo é direto sobre os modos de falha: as falhas vêm sobretudo de
incompatibilidade de API, e **mesmo os renders bem-sucedidos sofrem de componentes geométricos
desconectados ou flutuantes**. Como métrica automática não captura qualidade perceptual, os autores
montaram o **3DCodeArena**, plataforma de ranqueamento por preferência humana pareada. As duas
conclusões declaradas: falta dado de código procedural de qualidade para os modelos comerciais
avançarem, e modelagem procedural efetiva exige "um ambiente de execução robusto que forneça
feedback de alta fidelidade para refinamento iterativo".

**O mesmo, no lado da engenharia.** O **Text2CAD-Bench** (Liang Wang, Heng Meng, Zekai Xiang, Jin
Liu, Pingyi Zhou, Litao Chen, Yongqiang Tang; arXiv 2605.18430, 18/05/2026) tem 600 exemplos
curados por humanos em quatro faixas — 200 básicos, 200 intermediários, 100 avançados e 100 de
mundo real em cinco domínios — e avalia sete LLMs de propósito geral (GPT-5.2, Claude 4.5 Sonnet,
DeepSeek-V3.2, Qwen3-max, MiniMax-M2.1, GLM-4.7, Gemini3-Flash) mais três modelos de domínio
(Text2CAD, Text2CADQuery, CADFusion). Os números descrevem uma curva de dificuldade brutal: o
GPT-5.2 lidera no nível 1 com distância de Chamfer 44,31 e **11,1% de taxa de invalidez**; no nível
3, a invalidez sobe para **68% a 93%** em todos os modelos, com o Claude 4.5 Sonnet degradando de
forma mais graciosa (Chamfer 70,13). As operações que quebram são nomeadas: sweep, loft, shell. E
os modelos de domínio produzem saídas "executáveis mas geometricamente imprecisas" — baixa
invalidez, resultado errado.

**Ferramenta de autoria virando servidor.** No keynote do **Houdini 22**, em 22/06/2026, em
Londres, durante o SIGGRAPH 2026, a SideFX apresentou com a NVIDIA o **Apex Script Comfort
Package**: suporte a Model Context Protocol que conecta o LLM a uma biblioteca curada de sintaxe,
funções, documentação e exemplos de Apex Script — a linguagem de rigging procedural do Houdini. Nas
demonstrações, o artista pediu coisas como "construir seis splines em S" e recebeu código
funcional **puxado de exemplos reais, não sintetizado**. O pacote inclui **um validador que checa o
código gerado antes de ele rodar**, e o texto registra a propriedade que interessa: o código gerado
**não tem dependência contínua do LLM depois de gerado** — o artista fica com um script comum, não
com uma caixa-preta proprietária. Status declarado: sneak peek, chegando pelo SideFX Labs, o canal
experimental pré-produção, **não** como recurso padrão do aplicativo. No lado aberto, o
**BlenderMCP** de Siddharth Ahuja está em **28,2 mil estrelas e 2,6 mil forks**, e conecta Blender a
Claude Desktop, Claude Code, Cursor, VS Code, Codex, OpenCode e Antigravity.

**O procedural clássico, maduro e em expansão.** O **Substance 3D Designer 16** (Adobe, 2026)
ampliou o toolset procedural com o nó Shape Splatter v2 redesenhado e **novos nós de campo de
distância assinado (SDF)** para construir formas 3D dentro do próprio grafo, mais um nó de
visualizador 3D para ver o resultado em tempo real enquanto se constrói. O texto de lançamento
que abri (21/07/2026) apresenta essas novidades como redução da dependência de ferramenta externa e
aceleração da iteração, e **não menciona IA generativa dentro do Designer** — o reforço, ali, foi
procedural. O
**Graphite**, editor 2D vetorial e raster com fluxo procedural por nós, escrito em Rust e compilado
para WebAssembly, está em **27,2 mil estrelas e 1,3 mil forks**, ainda em alfa, rodando no
navegador sem instalação. O **Cavalry**, aplicativo de animação procedural que combina — nas
palavras do fabricante — "o poder e a flexibilidade do 3D com a facilidade de uso do 2D", foi
comprado pela Canva por volta de março de 2026 e teve a versão 2.7 liberada **gratuitamente em
16/04/2026**, incluindo tudo o que antes custava £192 por ano; artista individual usa de graça,
inclusive comercialmente, e estúdio precisa de Canva Enterprise. O **Rive** entrega editor, formato
de arquivo com estado e runtime para web, Unity, Unreal, iOS/iPadOS/macOS/visionOS, Android, React
Native, Flutter, Framer, Webflow e Wix Studio, com máquinas de estado descritas como "o contrato
entre design e engenharia", e cita Spotify, LinkedIn e Duolingo em estudos de caso.

**Creative coding.** O **Manim** de Grant Sanderson está em **93,7 mil estrelas e 7,7 mil forks**; o
**ManimCommunity/manim**, a edição comunitária, em **40,8 mil estrelas e 3,1 mil forks**. O
**p5.js** lançou a versão 2.0 em 2025, com suporte a fontes variáveis, novos espaços de cor
(incluindo OKLCH) e — o detalhe que mais importa para este mapa — **shaders escritos em JavaScript
em vez de GLSL**. O **Shadertoy** segue como a praça pública do shader.

**A base de execução.** WebGPU está estável e ligado por padrão em Chrome e Edge desde a versão 113
(Mac, Windows, ChromeOS) e 121 (Android), no **Firefox 141** em Windows, **145** em macOS Apple
Silicon e **147** no restante do macOS, e no **Safari 26** em macOS, iOS, iPadOS e visionOS. O
Three.js expõe isso pelo **WebGPURenderer**, cujo sistema de materiais é inteiramente baseado em
nós, e pelo **TSL**, a linguagem de shading do projeto: "uma abstração de shader baseada em nós,
escrita em JavaScript", capaz de "codificar em saídas diferentes, como WGSL/GLSL — WebGPU/WebGL".
Escreve-se uma vez, em JavaScript, e roda nos dois backends.

**Adoção, com número.** Não achei número de adoção do "procedural escrito por IA" em produção —
registro isso como **ausência**. Os números que achei e que descrevem o entorno: 28,2 mil estrelas
no BlenderMCP; 27,2 mil no Graphite; 93,7 mil e 40,8 mil nos dois Manim; 15,8 mil estrelas e 1,3 mil
forks no repositório principal do img2threejs, contra 145 estrelas na sua vitrine de demonstrações
— uma diferença que não consegui conciliar e que trato na seção 8; 12 modelos, 212 categorias e 13
mil objetos no 3DCodeBench; 600 exemplos no Text2CAD-Bench.

### 3.2 O que existe e ainda não funciona

**O objeto que não fecha.** É o modo de falha característico e está medido: mesmo quando o código
roda e o render sai, o 3DCodeBench encontra "partes desconectadas e estruturas desalinhadas". O
benchmark, aliás, declara que prioriza **plausibilidade física sobre executabilidade** — porque
executar virou fácil e ficar de pé, não.

**A topologia difícil.** A curva do Text2CAD-Bench — de 11,1% de invalidez no nível 1 para 68% a
93% no nível 3 — é a medida mais clara de onde está o teto hoje. Sweep, loft e shell derrubam os
modelos. Traduzindo para mídia: forma simples com parametrização, sim; superfície complexa com
continuidade, não.

**O shader com número.** Procurei um benchmark estabelecido de geração de shader e **não existe**
com placar utilizável. O que há é um microeval da Artificial Analysis que pede um arquivo HTML
autocontido com fractal de Julia animado em Three.js e GLSL, com zoom na posição do cursor,
arrasto, morphing pela posição X do mouse, pausa no espaço e gradiente específico pulsando — e que,
quando aberto, **não tem placar numérico**: lista 16 modelos e mostra apenas contagem de joinha,
sete modelos com um voto cada. Do lado da pesquisa há sistemas, não medições: o **ShadAR** (Yanni
Mei, Samuel Wendt, Florian Mueller, Jan Gugenheimer; arXiv 2602.17481, 19/02/2026) gera shader por
linguagem natural para transformar a percepção visual em realidade aumentada em tempo real —
simulação de daltonismo, efeitos criativos —, e o **AI Co-Artist** (arXiv 2512.08951) faz evolução
iterativa de shader GLSL com GPT-4, permitindo dirigir por julgamento estético sem manipular
código.

**A qualidade que se compra com computação, até certo ponto.** O trabalho da Siemens (Aaron Haag,
Altay Kaçan, Bertram Fuchs, Oliver Lohse; arXiv 2608.09706, 10/08/2026) seleciona, entre vários
candidatos gerados, o que **mais concorda com os outros** — compila todos, mede similaridade
geométrica (Chamfer) ou topológica (característica de Euler) e escolhe o mais representativo, sem
verificador treinado. O consenso geométrico supera o verificador do estado da arte nas três
métricas de geometria (p ≤ 0,022) e reduz a distância de Chamfer em **1% a 10%** sobre escolha
aleatória. E o número que mais importa para o futuro: **o benefício estabiliza por volta de nove
candidatos amostrados**. Escala, mas pouco, e para de escalar.

**O 3D procedural por IA em produção.** Não achei estúdio publicando que entrega asset como script.
Há ferramenta, há paper, há benchmark, há MCP em canal experimental. Não há caso de produção
divulgado — e isso é o que mantém boa parte deste mapa em confiança média.

### 3.3 Quem está construindo

| Ator | O que faz | Onde entra neste mapa |
|---|---|---|
| **Princeton Vision & Learning (Jia Deng)** | Infinigen e ProcFunc — biblioteca procedural redesenhada para o VLM errar menos | Raiz 1; a API projetada para a máquina |
| **Universidade de Chicago (Rana Hanocka / 3DL)** | LL3M — time de agentes escrevendo Blender Python com RAG da documentação | Raiz 1 e 2 |
| **Adobe Research** | Proc3D e o Procedural Compact Graph; Substance 3D Designer 16 com nós SDF | Raiz 1; economia de contexto |
| **Google (autores do 3DCodeBench) + USC** | 3DCodeBench e 3DCodeArena — a medição e a arena humana | Raiz 2 |
| **Siemens Foundational Technologies** | Consenso sem verificador para geração de CAD | Raiz 2; o limite do test-time scaling |
| **SideFX + NVIDIA** | MCP e validador dentro do Houdini 22, via Labs | Raiz 2; a ferramenta virando servidor |
| **Comunidade aberta (Ahuja, GraphiteEditor, ManimCommunity, Processing Foundation)** | BlenderMCP, Graphite, Manim, p5.js — e a política que **recusa** contribuição gerada | Raiz 1; a retroação com dono |
| **Canva / Cavalry e Rive** | Motion design procedural distribuído: Cavalry grátis, Rive com runtime único multiplataforma | Raiz 4 |
| **Grupo Three.js / W3C GPU for the Web** | WebGPU estável nos quatro navegadores; TSL transpilando JavaScript para WGSL e GLSL | Raiz 4; a base de execução |
| **img2threejs (projeto aberto)** | Reconstrução por código com oito passes e portão determinístico | Raiz 1 e 2 |

### 3.4 O que este mapa recusou como raiz, por maturidade

- **Geração procedural em si.** Adoção em maioria desde os anos 1990 em VFX (Houdini) e desde 2021
  no Blender (Geometry Nodes); Substance Designer é padrão de textura desde 2010. **Recusada como
  raiz; tratada como contexto nesta seção.**
- **Creative coding.** Processing tem 25 anos, p5.js tem 13 e chegou à versão 2.0. Comunidade
  madura, ferramenta madura. **Recusada como raiz; entra como ator na retroação (e4).**
- **Assistente de código escrevendo JavaScript comum.** Produto de massa desde 2023. **Recusada:**
  faz o mesmo, melhor e mais barato — melhoria sustentadora no sentido de Christensen.
- **Text-to-3D nativo (difusão sobre malha/splat).** É o tema 10 e o tema 12 desta disciplina, não
  este. Entra aqui só como a alternativa contra a qual o procedural se mede.
- **WaveFunctionCollapse, noise, mapas de fantasia.** Técnicas consolidadas, com biblioteca em toda
  linguagem. Contexto.

## 4. As disrupções-raiz

Quatro. Cada uma passa pelas quatro perguntas do critério de maturidade, respondidas em uma linha,
e traz o ator com incentivo para bloqueá-la — porque roda sem freio é propaganda.

---

### Raiz 1 — A IA escreve o gerador: o entregável deixa de ser o artefato e passa a ser o programa que o produz

**1. O que ela rompe.** Rompe a equação "produzir mídia = operar uma ferramenta de autoria até o
arquivo ficar pronto". Se o artefato nasce de um script, o software de criação deixa de ser o lugar
onde o trabalho acontece e vira um runtime; o entregável deixa de ser binário opaco e vira texto
versionável; e o mercado de asset — que vende arquivo por peça — perde o objeto que vendia. Não é
"o mesmo, mais rápido": é outro objeto, com outra economia, outro fluxo de revisão e outro estatuto
jurídico. Quem só acelerava a modelagem com IA continua no regime antigo.

**2. Por que agora, e não há cinco anos.** Porque três pré-condições se juntaram entre 2025 e 2026:
(a) modelos de código bons o bastante para APIs gráficas grandes e idiossincráticas — o
3DCodeBench mede 87,3% de executabilidade em uma tacada no melhor modelo, o que era impensável em
2021; (b) recuperação da documentação como parte do laço, que é o BlenderRAG do LL3M e a biblioteca
curada do Apex Script Comfort Package; (c) **representações desenhadas para o modelo**, que é a
inversão nova — o Procedural Compact Graph do Proc3D cortando 4 a 10 vezes o contexto e o ProcFunc
existindo declaradamente para que o VLM erre menos. Em 2021 não havia modelo capaz, não havia RAG de
API e, sobretudo, ninguém projetava biblioteca gráfica pensando em quem a leria seria uma máquina.

**3. Onde está na difusão.** Entre **produto de nicho e adoção precoce (<10%)**. Há ferramenta
usável (BlenderMCP com 28,2 mil estrelas), há pesquisa reprodutível com código público (LL3M,
MeshCoder, ProcFunc), há benchmark. Não há caso de produção divulgado com asset entregue como
script. Emergente, portanto — não especulativo, não maduro.

**4. O que ainda falta acontecer.** (a) A taxa de "partes desconectadas e flutuantes" cair a um
nível em que o humano não precise inspecionar cada peça — é o gargalo declarado do 3DCodeBench.
(b) Dado de código procedural de qualidade em volume, que os próprios autores do benchmark apontam
como a carência crítica. (c) Um formato de entrega que estúdio e cliente aceitem: hoje ninguém sabe
como se assina um contrato cujo entregável é um repositório. (d) Ferramenta de autoria que trate o
script como cidadão de primeira classe na revisão, e não como plugin.

**Quem bloqueia, e com que incentivo.** As **comunidades de software gráfico aberto**. O p5.js tem
política pública de uso de IA cuja regra central é "todas as contribuições precisam vir de humanos
que entendem e podem assumir total responsabilidade pelo seu código": proíbe escrever PRs inteiros
ou blocos grandes de código, proíbe deixar a IA tomar decisão de implementação, exige que o
contribuidor **explique cada linha que submete** e **declare quais ferramentas de IA usou na
descrição do PR**. O incentivo é claro e legítimo: o custo de revisar contribuição gerada cai
inteiro sobre o mantenedor voluntário. E a justificativa escrita na própria política não é técnica,
é de valor: LLMs erram e **não podem ser responsabilizados**, e escrever código e contribuir com
software aberto são "empreendimentos profundamente humanos, que exigem curiosidade, lentidão e
comunidade". O efeito disso está em `e4`.

---

### Raiz 2 — O render entra no loop: criação visual ganha oráculo e vira disciplina verificável

**1. O que ela rompe.** Rompe a suposição — velha e raramente enunciada — de que produção visual
não é verificável, e que por isso o controle de qualidade em arte é sempre humano, sempre caro e
sempre subjetivo. Quando o artefato é um programa, existe oráculo: roda, renderiza, compara com a
referência, reprova antes de gastar julgamento. Isso arrasta a criação visual para o regime de
engenharia de software — teste, regressão, integração contínua, portão de aceitação — que é
exatamente o regime que a criação visual nunca teve. Geração de imagem não tem isso: não há como
"rodar" um PNG e ver se ele passa.

**2. Por que agora, e não há cinco anos.** Porque o harness de agente com execução de ferramenta só
existe desde 2025. E o efeito é medido: no 3DCodeBench, o mesmo modelo que entrega 69,3% de
executabilidade em uma tacada chega a **praticamente 100%** dentro de Claude Code, Codex ou Gemini
CLI. A conclusão declarada dos autores — "modelagem procedural efetiva exige um ambiente de execução
robusto que forneça feedback de alta fidelidade para refinamento iterativo" — é a formulação exata
da raiz. Some-se o validador embutido do Apex Script Comfort Package, que checa antes de rodar, e o
portão determinístico do img2threejs, cuja regra de projeto é gastar token **só onde há julgamento**
e deixar validação para script Python.

**3. Onde está na difusão.** Entre **demo pública e produto de nicho**, com um pé já em adoção
precoce por contaminação: todo mundo que usa agente de código já usa esse laço, mesmo sem chamá-lo
assim. A parte especificamente gráfica — render no laço, comparação com referência, arena de
preferência — está em pesquisa e em projeto aberto, não em produto de prateleira.

**4. O que ainda falta acontecer.** (a) Métrica perceptual confiável: os autores do 3DCodeBench
tiveram que montar uma arena humana porque a métrica automática não captura qualidade — enquanto
isso não se resolver, o laço precisa de gente. (b) Custo: cada volta do laço é um render, e o
consenso da Siemens mostra que o ganho estabiliza em nove candidatos. (c) Integração com o
pipeline: nenhum grande DCC trata render-de-verificação como artefato de CI.

**Quem bloqueia, e com que incentivo.** O **próprio orçamento**. O produtor que aprovou o
procedural porque "sai mais barato" é quem trava quando descobre que qualidade exige N execuções.
Aqui o bloqueio não é ideológico, é aritmético, e está em `e7.1`.

---

### Raiz 3 — O artefato-programa tem estatuto jurídico que o artefato-pixel não tem

**1. O que ela rompe.** Rompe a suposição, hoje quase consensual no meio criativo, de que "fazer com
IA" significa "não ter direito sobre o resultado". Isso é verdade para a imagem de prompt e vem
sendo confirmado em tribunal. Não é obviamente verdade para o programa: software é obra literária,
e a via de proteção passa por contribuição humana demonstrável — que é precisamente o que arquitetar,
parametrizar e editar um gerador produz, e o que digitar um prompt não produz. Se a proposição se
sustentar, o caminho procedural deixa de ser escolha estética e vira escolha de ativo: muda o que
um estúdio pode licenciar, o que uma marca pode defender e o que um contrato pode exigir.

**2. Por que agora, e não há cinco anos.** Porque 2026 fechou o lado da imagem com decisão escrita.
Em **13/02/2026**, o **AG München** (142 C 9786/25) negou proteção autoral a três logos gerados por
IA — aperto de mão com sino, envelope diante de prédio com colunas, laptop com livro jurídico
flutuante —, inclusive ao que nasceu de um prompt de **1.700 caracteres**, com o argumento de que
tempo gasto não é ato criativo e que instruções genéricas deixam a decisão de forma com a máquina.
Mas a mesma decisão **deixou a porta aberta** exatamente onde este mapa aposta: há proteção quando o
usuário exerce "influência concreto-formativa", estabelecendo um arcabouço complexo que **restringe
as escolhas da IA** — e o tribunal usou como paradigma o vitral da catedral de Gerhard Richter, em
que o artista, apesar do auxílio do computador, manteve o controle escolhendo cores e corrigindo
padrões indesejados à mão, sendo o "chefe" do processo. Escrever, ler e editar o gerador é
literalmente estabelecer o arcabouço que restringe as escolhas da máquina. Há cinco anos não havia
nem a decisão sobre a imagem nem o hábito de gerar código gráfico.

**3. Onde está na difusão.** **Produto de nicho**, e talvez menos: a prática jurídica já discute
documentação de contribuição humana ao longo do ciclo de desenvolvimento, mas **ninguém no design
escolhe o caminho procedural por esse motivo hoje**. É a raiz mais frágil das quatro e a que mais
depende de inferência minha — assumo isso aqui e volto a assumir na seção 7.

**4. O que ainda falta acontecer.** (a) Um caso julgado sobre **código gráfico** gerado por IA — os
casos existentes são sobre imagem. (b) Uma prática de registro que o mercado adote sem transformar
em burocracia. (c) Resolver o contrapeso: código gerado por IA sem autoria humana suficiente não é
protegível, mas **continua gerando responsabilidade** se reproduzir código de terceiro, inclusive
com risco de contaminação por licença copyleft. A prática jurídica descreve isso como toda a
responsabilidade e nenhuma proteção.

**Quem bloqueia, e com que incentivo.** O **jurídico corporativo do comprador**. Quem aprova
fornecedor numa agência grande ou num estúdio contratado por marca tem incentivo direto para vetar
gerador escrito por IA enquanto a assimetria durar: a empresa herda o risco de reprodução e não
ganha o ativo. Está em `e10.2`.

---

### Raiz 4 — Mídia volta a trafegar como regra: o cliente recebe um programa, não uma amostra

**1. O que ela rompe.** Rompe a economia de distribuição de mídia montada sobre o pressuposto de que
o que viaja é a amostra — arquivo, malha, textura, quadro, splat — e que a otimização é comprimir
melhor. Se o que viaja é o programa que reconstrói a cena no cliente, o orçamento de performance
muda de eixo (de peso de download para tempo de execução), o CDN perde parte da função, e o custo
de energia migra do servidor para o aparelho do usuário. Não é compressão melhor: é outra coisa
sendo transmitida.

**2. Por que agora, e não há cinco anos.** Porque o cliente universal ganhou GPU programável: WebGPU
está estável e ligado por padrão em Chrome/Edge 113 (121 no Android), Firefox 141 no Windows, 145 e
147 no macOS, e Safari 26 em macOS, iOS, iPadOS e visionOS. E porque a camada de autoria se tornou
agnóstica: o TSL do Three.js é "uma abstração de shader baseada em nós, escrita em JavaScript" que
transpila para WGSL ou GLSL conforme o backend disponível — escreve-se uma vez e roda nos dois.
Há cinco anos, shader era GLSL escrito à mão por backend, e Safari não tinha WebGPU.

**3. Onde está na difusão.** **Produto de nicho com adoção precoce em faixas específicas.** O Rive
já entrega formato com estado e runtime único para web, Unity, Unreal, Apple, Android, React Native,
Flutter, Framer, Webflow e Wix Studio, com Spotify, LinkedIn e Duolingo em estudo de caso — isso é
mídia-como-regra em produção, hoje, em interface. O Graphite roda um motor procedural inteiro em
WebAssembly no navegador. O que ainda é nicho é **3D** como regra em vez de malha.

**4. O que ainda falta acontecer.** (a) Autoria: falta ferramenta que gere direto para esse alvo sem
programador no meio. (b) Custo no cliente fraco — e este é o item brasileiro. (c) Determinismo: para
qualquer coisa multiusuário, dois clientes precisam gerar exatamente a mesma cena.

**Quem bloqueia, e com que incentivo.** A **plataforma que mede bateria e calor**. Loja de
aplicativos e sistema operacional têm incentivo e poder para limitar execução pesada em segundo
plano e penalizar aplicativo que esquenta o aparelho; e o produto que perde usuário por
aquecimento desliga a experiência procedural antes de qualquer discussão estética. Está em `e12.2`.

---

### 4.5 O teste da causa solta entre as raízes

Antes de rodar a roda, o teste que o método exige: cada raiz aconteceria sem as outras?

- **Raiz 1 sem 2:** sim, mas no regime "escreve e reza" — é o resultado de uma tacada, 87,3% e
  69,3% de executabilidade, com partes flutuantes. Existe, é pior.
- **Raiz 2 sem 1:** sim. O laço de execução com verificação vale para qualquer código com saída
  observável — TikZ, SVG, CAD, notebook — e veio do agente de código, não da computação gráfica.
- **Raiz 3 sem 1 e 2:** sim, e é o estado atual: a assimetria jurídica existe hoje, com ou sem IA
  escrevendo gerador. O que a raiz 1 faz é torná-la **explorável em escala**.
- **Raiz 4 sem 1:** sim, e está em produção — Rive, Cavalry, Lottie, WebGPU. A raiz 1 muda **quem**
  escreve a regra que trafega, não se ela trafega.

As quatro são independentes e se compõem. Onde se compõem, a seção 5.3 nomeia as convergências.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A IA escreve o gerador — o entregável deixa de ser o artefato e passa a ser o programa que o produz
    efeitos:
      - id: e1
        ordem: 1
        efeito: O asset 3D passa a ser entregue como script versionado no repositório do projeto, e não como binário no gerenciador de assets
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A revisão de arte migra para o pull request, com diff, comentário de linha e histórico de quem decidiu o quê
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A direção de arte passa a se exercer por permissão de merge, e a hierarquia criativa vira configuração de repositório
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Estúdios param de comprar pacotes de asset e passam a licenciar bibliotecas de geradores parametrizados
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Lojas de asset 3D trocam a venda por arquivo por assinatura de API de geração, e o preço deixa de ser por peça
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A API gráfica passa a ser projetada para caber no contexto do modelo, e não apenas para a leitura do programador humano
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Documentação de API vira produto de primeira classe, com corpus de exemplos executáveis mantido como dado de recuperação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O ecossistema gráfico se concentra em duas ou três APIs, porque aquela com mais código público é a que o modelo escreve melhor
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Bibliotecas gráficas novas e pequenas perdem espaço por não terem código público suficiente para o modelo imitar
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: O custo de produzir uma variação cai a quase zero e a entrega padrão deixa de ser a peça, passando a ser a família de peças
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Agências de publicidade e motion design passam a contratar sistema de peça por família, e não peça entregue por unidade
            sinal: fraco
            prazo: 2030
            confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A curadoria entre centenas de variações vira o gargalo do processo e a etapa mais cara da produção
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Estúdios treinam e vendem modelos de preferência com o próprio gosto, e o filtro de curadoria passa a integrar a identidade da marca
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Comunidades de creative coding fecham a porta à contribuição gerada e exigem prova de compreensão, e o software gráfico aberto passa a andar mais devagar que o proprietário
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A manutenção de biblioteca gráfica aberta vira trabalho de triagem, e declarar o uso de IA no pull request vira norma de projeto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Procedência humana declarada vira selo de diferenciação entre bibliotecas, do modo como a origem funciona em alimento
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Os postos de entrada da arte técnica desaparecem como degrau de carreira, porque o degrau era a execução repetitiva que o gerador absorveu
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A formação em arte digital se reorganiza em torno de leitura de código e especificação de regra, e o curso que não fizer isso perde matrícula para formação curta de arte técnica
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O portfólio deixa de ser pasta de imagens e vira repositório com histórico de commits, e a contratação passa a ler o processo em vez da peça
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O artista técnico sênior que lê grafo e julga render vira o cargo mais disputado do estúdio e concentra a faixa salarial
            sinal: medio
            prazo: 2029
            confianca: media
  - disrupcao: O render entra no loop — criação visual ganha oráculo e vira disciplina verificável
    efeitos:
      - id: e6
        ordem: 1
        efeito: O ambiente que executa e corrige passa a importar mais que o modelo que escreve, e a escolha de ferramenta se desloca do modelo para o harness
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Ferramentas de autoria passam a expor servidor de ferramenta com validador embutido, porque o valor está no feedback de execução e não no modelo
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O software de criação vira parcialmente servidor, a interface gráfica deixa de ser o único modo de operar e o licenciamento passa a ser cobrado por chamada
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O portão de qualidade determinístico, que reprova a saída antes de gastar julgamento do modelo, vira a peça vendável do pipeline
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Estúdios publicam a própria régua de aceitação como parte do briefing, e o fornecedor passa a ser avaliado pela taxa de aprovação automática
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Qualidade passa a ser comprada com tempo de inferência, amostrando vários candidatos e escolhendo por consenso em vez de confiar numa geração
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O custo por peça volta a subir porque a qualidade exige várias execuções e vários renders, e o procedural perde o argumento do barateamento
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O orçamento de arte passa a ser escrito em unidades de computação, e o contrato com o cliente inclui teto de amostragem
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A métrica automática perde autoridade e a arena de preferência humana vira infraestrutura permanente do estúdio
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e8
        ordem: 1
        efeito: O erro visual passa a ser tratado como bug, reproduzível por semente, localizável no código e coberto por teste de regressão
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Surge integração contínua de arte, em que cada commit renderiza um conjunto de quadros e compara com a referência aprovada
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A noção de versão final desaparece da produção visual, e o que se aprova passa a ser a faixa de tolerância em vez do quadro
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O modo de falha muda de lugar — o problema deixa de ser fidelidade de textura e passa a ser peça desconectada, escala errada e geometria flutuante
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Surge uma camada de verificação estrutural que pergunta se o objeto fecha, apoia e cabe, inexistente no pipeline de pixel e exigida na compra
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A fronteira entre arte e engenharia se apaga no software de autoria, e o mesmo grafo que desenha também valida restrição física
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Complexidade topológica, e não estilo, vira o eixo em que se comparam fornecedores e modelos
            sinal: medio
            prazo: 2029
            confianca: media
  - disrupcao: O artefato-programa tem estatuto jurídico que o artefato-pixel não tem
    efeitos:
      - id: e10
        ordem: 1
        efeito: Estúdios passam a preferir o caminho procedural por razão jurídica e não estética, porque o que sai é código com contribuição humana documentável
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O registro do processo — o que foi pedido, o que foi rejeitado, o que foi editado à mão — vira documento de autoria arquivado junto com a entrega
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Contratos de encomenda passam a exigir o histórico do processo como entregável, e a ausência dele vira inadimplemento
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O jurídico do comprador barra gerador escrito por IA em produto, porque a empresa herda risco de reprodução de código alheio sem ganhar proteção sobre o resultado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Forma-se um mercado de geradores com procedência auditada, treinados apenas em código de licença permissiva e vendidos com indenização contratual
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A disputa autoral se desloca do resultado para a regra, e o que se reivindica passa a ser o grafo, o shader e a faixa de parâmetro em vez da imagem
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Comunidades de arte generativa publicam o gerador sob licença explícita e tratam a saída como material livre
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: Mídia volta a trafegar como regra — o cliente recebe um programa, não uma amostra
    efeitos:
      - id: e12
        ordem: 1
        efeito: Experiência 3D na web deixa de depender de download de malha e passa a ser código que constrói a cena no cliente
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O orçamento de performance da web passa a ser medido em tempo de execução do gerador, e não em peso do arquivo baixado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A conta de energia da renderização migra do servidor para o aparelho do usuário e passa a aparecer na avaliação de sustentabilidade do produto digital
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Em aparelho de entrada, que é a maioria do parque brasileiro, executar a regra custa mais bateria que baixar a amostra, e a experiência procedural é desligada por padrão
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Aplicações passam a entregar dois caminhos, regra para aparelho forte e amostra pré-cozida para aparelho fraco, e a desigualdade de hardware vira desigualdade estética
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: O motion design se separa do vídeo e a peça entregue passa a ser uma máquina de estados que responde a evento, com um runtime único para várias plataformas
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Agências passam a entregar comportamento em vez de arquivo, e a cobrança migra da produção para a manutenção do sistema
            sinal: fraco
            prazo: 2030
            confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: Com o Cavalry gratuito dentro do ecossistema Canva, o motion design por regra chega ao não especialista e a escassez do ofício cai
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: O diferencial do motion designer profissional deixa de ser a animação e passa a ser o desenho da máquina de estados e das regras de transição
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: A estética procedural volta a ser visível por economia e não por gosto, e repetição, simetria, ruído e malha simples reaparecem como sinal de mídia leve
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Marcas adotam deliberadamente a aparência procedural para sinalizar leveza e transparência contra a estética da mídia gerada pesada
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e15
        ordem: 1
        efeito: A regra é texto e viaja sem perda, e o conteúdo distribuído como programa se torna o mais fácil de copiar e o mais difícil de rastrear
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Plataformas respondem ofuscando o gerador ou movendo-o para o servidor, e o argumento de transparência do procedural se perde na prática
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Repete-se com a regra gráfica a história do shader compilado, em que a peça é executável mas ilegível e a promessa de edição perpétua só serve ao autor original
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

### 5.1 Os mecanismos — o que o bloco YAML não consegue dizer

O bloco acima dá o quê. Aqui vai o **porquê**: cada efeito com o mecanismo que o liga ao pai, na
forma "porque o pai faz X". Efeito sem mecanismo não entrou na roda; os que foram derrubados por
falta de mecanismo estão na seção 12.

#### Raiz 1 — a IA escreve o gerador

**e1 — o asset vira script versionado.** Porque a raiz faz o objeto nascer como texto executável, e
texto executável tem um lugar natural de morar que não é o gerenciador de asset: é o repositório. O
mecanismo não é preferência, é atrito: quem já tem o objeto em Python ou TypeScript paga um custo
extra para exportá-lo em binário e perder o histórico. *Sinal médio* — há artefato de pesquisa e
projeto aberto (LL3M, MeshCoder, img2threejs entregando fábrica TypeScript), mas nenhum estúdio
publicou entrega de produção assim. *Prazo 2028, classe de referência:* a migração de configuração
de infraestrutura para código — o mesmo movimento, de clicar na interface para versionar o texto —
levou de quatro a seis anos entre a ferramenta existir e virar prática default em equipe média.
Estamos em 2026 com a ferramenta existindo; dois anos é o piso otimista.

**e1.1 — revisão de arte no pull request.** Porque `e1` faz o artefato ser diffável, e diff
convida ao fluxo que já existe em volta dele. O mecanismo específico é que **comentário de linha em
código é mais barato que comentário em imagem**: em vez de "escurece um pouco esse canto", escreve-se
na linha do parâmetro. *Prazo 2029:* um ano depois de `e1`, porque a mudança de fluxo de revisão
depende de gente com outro repertório, não de ferramenta.

**e1.1.1 — direção de arte por permissão de merge.** Porque `e1.1` põe a decisão criativa dentro de
um sistema que já tem modelo de autoridade embutido — quem aprova, quem pode escrever em qual
branch. O mecanismo é a captura do poder criativo pela infraestrutura: onde há botão de aprovar,
alguém vira dono do botão. *Confiança baixa e sinal fraco:* isto é inferência pura; não vi nenhum
estúdio operando assim.

**e1.2 — licenciamento de gerador em vez de pacote.** Porque `e1` faz a unidade de valor deixar de
ser a peça: um gerador com seis parâmetros substitui um pacote de duzentos arquivos. *Sinal fraco*
— o que existe hoje nessa direção é venda de ferramenta, não de gerador. *Prazo 2030:* depende de
`e1` estar consolidado antes.

**e1.2.1 — loja de asset vira assinatura de API.** Porque `e1.2` retira do arquivo a função de
unidade de cobrança, e nenhuma loja sobrevive vendendo o que deixou de ser escasso. *Prazo 2032,
fora do horizonte deste mapa, e declaro:* mudança de modelo de receita de marketplace consolidado é
lenta; a classe de referência é a transição de licença perpétua para assinatura no software
criativo, que levou de cinco a sete anos entre anúncio e receita majoritária.

**e2 — a API projetada para o modelo.** Porque a raiz transfere a leitura da API de humano para
máquina, e o que limita a máquina não é clareza conceitual, é **contexto**. O mecanismo está
medido: o Procedural Compact Graph do Proc3D reduz de 4 a 10 vezes o custo de contexto, e o ProcFunc
existe declaradamente para o VLM errar menos. *Sinal forte:* três artefatos verificáveis hoje —
Proc3D (01/2026), ProcFunc (04/2026) e o Apex Script Comfort Package com biblioteca curada
(06/2026). *Prazo 2028:* a classe de referência é a adoção de OpenAPI como forma padrão de descrever
API web, que levou cerca de três anos do formato existir até virar item esperado numa entrega.

**e2.1 — documentação como produto e como corpus.** Porque `e2` faz a documentação sair do papel de
material de apoio e entrar no laço de execução, via recuperação — é literalmente o BlenderRAG do
LL3M e a biblioteca curada do Houdini 22. O mecanismo é que **a documentação mal escrita passa a ter
custo mensurável**: erro de API é o modo de falha número um do 3DCodeBench.

**e2.1.1 — concentração em duas ou três APIs.** Porque `e2.1` cria retorno crescente: a API com mais
código público é a que o modelo escreve melhor, o que atrai mais uso, o que gera mais código
público. O mecanismo é feedback positivo clássico, e é o mesmo que concentrou linguagens de
programação onde o assistente funciona melhor. *Confiança baixa,* porque o mesmo mecanismo pode ser
quebrado por síntese de dado de treino específico — que é exatamente o que o 3DCodeBench pede.

**e2.2 — biblioteca nova perde espaço.** Porque `e2.1.1` opera como barreira de entrada: uma
biblioteca de 2027 não tem corpus, então o modelo erra nela, então o desenvolvedor desiste. **Este é
um efeito de quem perde**, e é o contrapeso ecológico da concentração.

**e3 — a variação vira a entrega padrão.** Porque a raiz faz o custo marginal de uma variação cair
para o custo de mudar um número, e tudo que fica barato vira default. *Prazo 2028, classe de
referência:* a mesma coisa aconteceu com formato de imagem responsiva na web — no momento em que
gerar dez tamanhos ficou automático, entregar um só virou erro; levou cerca de três anos.

**e3.1 — contrato por família.** Porque `e3` torna absurdo cobrar por peça o que se produz aos
milhares. *Sinal fraco,* nenhuma agência publicou contrato assim; é inferência econômica.

**e3.2 — a curadoria vira o gargalo.** Porque `e3` desloca o trabalho da produção para a escolha, e
escolher não barateou. É o mecanismo mais robusto desta raiz e o mais fácil de verificar: o
3DCodeBench precisou construir uma **arena de preferência humana pareada** justamente porque
nenhuma métrica automática resolvia a escolha. *Sinal médio, prazo 2029.*

**e3.2.1 — modelo de preferência como identidade de marca.** Porque `e3.2` transforma o gosto do
estúdio em gargalo, e gargalo atrai automação. O mecanismo é que o gosto, sendo o único ativo
escasso restante, é o que vale a pena destilar. *Confiança baixa:* depende de o gosto de um estúdio
ser aprendível com poucos exemplos, o que não está demonstrado.

**e4 — o aberto fecha a porta e desacelera (RETROAÇÃO).** Porque a raiz produz contribuição barata e
abundante, e abundância de contribuição sem responsável aumenta o custo de revisão para quem
mantém. O mecanismo é assimetria de esforço: gerar um PR custa um minuto, revisá-lo custa uma hora,
e o mantenedor voluntário paga a conta. *Sinal forte,* com artefato: a política do p5.js proíbe PR
gerado inteiro, exige explicar cada linha, exige declarar a ferramenta usada e fundamenta a regra em
que o modelo não pode ser responsabilizado pelo que escreve. *Prazo 2028, classe de
referência:* a adoção de políticas de "contribuição assistida" em projeto aberto grande costuma
levar de dois a três anos entre o primeiro projeto publicar e virar norma no ecossistema.

**e4.1 — manutenção vira triagem, e a declaração vira norma.** Porque `e4` estabelece a regra e a
regra precisa de procedimento. O mecanismo é o custo de verificação: não dá para detectar código
gerado, então se exige **declaração** e **prova de compreensão** — que é o que a política do p5.js
faz.

**e4.1.1 — procedência humana como selo.** Porque `e4.1` cria um dado declarado, e dado declarado
vira rótulo, e rótulo vira diferencial de mercado. *Sinal fraco;* a analogia com alimento orgânico é
minha e pode não se sustentar — software não tem o mesmo apelo de saúde que sustenta o prêmio de
preço.

**e5 — o degrau de entrada desaparece (QUEM PERDE).** Porque a raiz absorve exatamente o trabalho
que servia de degrau: modelagem repetitiva, variação de prop, limpeza de malha, textura de base. O
mecanismo é que **a IA não come o topo da pirâmide, come a base** — e a base era o mecanismo de
formação de sênior. *Sinal forte, com número:* a GDC 2026 ouviu mais de 2.300 profissionais, e 52%
dizem que a IA generativa impacta negativamente o setor, número que sobe a **64% entre artistas
visuais e técnicos**, com **28% demitidos nos últimos dois anos** e **74% dos estudantes**
preocupados com as próprias perspectivas. *Prazo 2028:* já está acontecendo; 2028 é o ano em que
fica estrutural em vez de conjuntural.

**e5.1 — a formação se reorganiza.** Este efeito só entra porque tem **ator nomeado e mecanismo**:
não é "cursos reorganizam o currículo" genérico. O ator é o curso de arte digital e design gráfico
disputando matrícula com formação curta de arte técnica; o mecanismo é que, com o degrau de entrada
destruído por `e5`, o egresso que sabe operar ferramenta não emprega e o egresso que lê código
emprega, e a matrícula segue o emprego com atraso de um ciclo. No Brasil o mecanismo é mais lento e
mais político: currículo de graduação passa por colegiado, e há literatura crítica que resiste a
tratar IA como competência a ensinar — Beccari, Kussler e Diehl de Oliveira, em SCIAS, argumentam
que a narrativa de democratização criativa encobre automação de viés e precarização do trabalho, e
que a alienação do ato criativo operada pela IA precisa ser discutida em sala, não apenas
incorporada. *Confiança baixa e prazo 2030:* a classe de referência é a reforma curricular
universitária brasileira, que leva de quatro a oito anos do consenso à turma formada.

**e5.1.1 — portfólio vira repositório.** Porque `e5.1` muda o que se ensina e, portanto, o que se
mostra. O mecanismo é a inflação do artefato: quando qualquer um gera uma imagem bonita, a imagem
bonita para de discriminar candidatos, e o empregador procura o sinal que ainda custa caro — o
histórico de decisões. *Sinal fraco,* inferência.

**e5.2 — o artista técnico sênior concentra salário.** Porque `e5` destrói a base e deixa intacto o
julgamento, e `e3.2` põe o julgamento no caminho crítico. Mecanismo de escassez pura: a oferta de
quem lê grafo e julga render não cresce, porque o caminho que a formava foi cortado. É o outro lado
exato de `e5` e de `e5.1`. *Sinal médio.*

#### Raiz 2 — o render no loop

**e6 — o harness importa mais que o modelo.** Porque a raiz introduz um oráculo, e oráculo
transforma erro em informação: o modelo que erra mas recebe o traceback e o render converge; o que
acerta mais mas escreve às cegas, não. **É o único efeito de 1ª ordem com confiança alta em toda a
raiz, e é alta porque está medido de forma direta**: 87,3% (GPT-5.5) e 69,3% (Gemini 3.1 Pro) em uma
tacada, contra executabilidade praticamente perfeita dentro de Claude Code, Codex ou Gemini CLI.
*Prazo 2027:* é o efeito mais próximo, porque já ocorreu no laboratório e falta apenas o mercado
reconhecê-lo na hora de comprar.

**e6.1 — a ferramenta de autoria vira servidor com validador.** Porque `e6` põe o valor no
feedback, e quem controla o feedback é quem tem o executor — ou seja, o DCC, não o modelo. O
mecanismo é de captura de posição: a SideFX não precisa treinar modelo para ser indispensável;
precisa ser o lugar que valida. *Sinal forte,* com dois artefatos: o Apex Script Comfort Package com
validador embutido (SIGGRAPH 2026, com NVIDIA) e o BlenderMCP com 28,2 mil estrelas. *Prazo 2028,
classe de referência:* de anúncio no canal experimental a recurso padrão, a SideFX historicamente
leva de dois a três ciclos de versão; o texto do anúncio é explícito em que isto é sneak peek pelo
Labs, não recurso de fábrica.

**e6.1.1 — cobrança por chamada.** Porque `e6.1` cria um novo canal de consumo do software que não
passa por assento de usuário. O mecanismo é que licença por assento não modela agente: um agente não
é um usuário, e pode chamar mil vezes. *Confiança baixa;* pode ser absorvido como parte do assento
existente.

**e6.2 — o portão determinístico vira o produto.** Porque `e6` torna o julgamento do modelo o item
caro do laço, e tudo que evita gastar julgamento vira valor. É o princípio de projeto declarado do
img2threejs: scripts determinísticos fazem validação e gating, e o token do modelo é gasto **só onde
há julgamento visual**. *Sinal médio, prazo 2029.*

**e6.2.1 — a régua de aceitação entra no briefing.** Porque `e6.2` dá ao comprador um instrumento
objetivo, e comprador com instrumento objetivo o usa em contrato. Mecanismo de deslocamento de
poder: quem define o portão define o trabalho.

**e7 — qualidade comprada com inferência.** Porque a raiz permite comparar candidatos entre si sem
gabarito — se todos executam, dá para medir quem concorda com quem. O mecanismo é o do trabalho da
Siemens: compila-se o conjunto, mede-se Chamfer ou característica de Euler entre os candidatos e
escolhe-se o mais representativo, sem verificador treinado, superando o verificador do estado da
arte em geometria (p ≤ 0,022). *Sinal médio, prazo 2028.*

**e7.1 — o custo volta a subir (RETROAÇÃO).** Porque `e7` compra qualidade com execuções, e execução
custa. E o mecanismo tem teto medido: **o benefício estabiliza em torno de nove candidatos** e o
ganho total fica entre 1% e 10% de Chamfer sobre escolha aleatória. Ou seja, não é só caro — é caro
e limitado. É o freio mais bem documentado deste mapa, e é o que desmonta a promessa de "procedural
porque é barato". *Sinal médio, prazo 2029.*

**e7.1.1 — orçamento em unidades de computação.** Porque `e7.1` torna o custo variável e
negociável, e o que é variável entra em cláusula. *Confiança baixa.*

**e7.2 — a arena humana vira infraestrutura.** Porque `e7` resolve executabilidade e não resolve
gosto, e o próprio 3DCodeBench respondeu a isso montando o 3DCodeArena, com ranqueamento por
preferência pareada, porque métrica automática não captura qualidade perceptual. O mecanismo é que
**a métrica que sobra é a comparação, não a nota**.

**e8 — erro visual vira bug.** Porque a raiz dá reprodutibilidade: com a mesma semente e o mesmo
código, sai o mesmo quadro. O mecanismo é que reprodutibilidade é a condição de existência de teste
de regressão, e sem ela nada do vocabulário de engenharia se aplica. *Prazo 2029:* depende de `e1`
para ter onde rodar o teste.

**e8.1 — integração contínua de arte.** Porque `e8` torna a comparação automatizável, e comparação
automatizável em cada commit é literalmente CI. O mecanismo já existe fora daqui: é o teste de
regressão visual usado em front-end há anos, aplicado a um objeto novo.

**e8.1.1 — some a "versão final".** Porque `e8.1` aprova faixas em vez de quadros: se o que passa no
portão é qualquer saída dentro de uma tolerância, "o final" deixa de ser um arquivo. É o efeito
mais especulativo desta raiz e o mais interessante para a disciplina, porque ataca uma noção que
organiza todo o ensino de produção. *Confiança baixa.*

**e9 — o modo de falha muda de lugar.** Porque a raiz resolve o problema de sintaxe e expõe o
problema de estrutura: o código roda, mas a cadeira não fica de pé. *Sinal forte, com dois números
independentes:* o 3DCodeBench registra que renders bem-sucedidos ainda sofrem de componentes
desconectados ou flutuantes, e o Text2CAD-Bench mostra a curva de invalidez subindo de 11,1% no
nível básico para 68%–93% no avançado, com sweep, loft e shell nomeados como as operações que
quebram. *Confiança alta e prazo 2027,* porque isto não é previsão: é descrição do presente que se
tornará senso comum de mercado.

**e9.1 — verificação estrutural vira requisito de compra.** Porque `e9` cria uma classe de defeito
que o comprador não sabia que precisava checar, e defeito que chega ao cliente vira cláusula. O
mecanismo é específico do procedural e **não existe em pipeline de pixel**: um PNG nunca falha por
não apoiar no chão.

**e9.1.1 — arte e engenharia no mesmo grafo.** Porque `e9.1` põe restrição física dentro da
ferramenta de desenho. O mecanismo é convergência de representação: o mesmo grafo que calcula a
forma pode calcular se ela fecha — e o Substance 3D Designer 16 já andou nessa direção ao trazer
nós de campo de distância assinado para dentro do grafo de material.

**e9.2 — topologia como eixo de comparação.** Porque `e9` mostra que o eixo antigo (estilo,
fidelidade) parou de discriminar e o novo (complexidade topológica) discrimina muito — é
exatamente o que a curva L1→L3 do Text2CAD-Bench mede.

#### Raiz 3 — o estatuto jurídico da regra

**e10 — procedural por razão jurídica.** Porque a raiz cria um diferencial que não é perceptível na
peça, mas é decisivo no contrato. O mecanismo é a transposição do critério de Munique: proteção
existe quando há "influência concreto-formativa", isto é, quando o humano estabelece um arcabouço
que **restringe as escolhas da máquina** — e o tribunal ofereceu o vitral de Gerhard Richter como
paradigma, em que o artista mantém controle escolhendo cores e corrigindo padrões à mão. Escrever e
editar um gerador é, ponto a ponto, esse arcabouço. *Sinal fraco e confiança baixa:* a decisão é
sobre **imagem**, e a transposição para **código gráfico** é minha inferência, sem caso julgado.
*Prazo 2029.*

**e10.1 — o registro do processo vira documento de autoria.** Porque `e10` transforma o histórico —
o que foi pedido, rejeitado e editado — na prova da contribuição humana. O mecanismo é probatório:
sem registro, a alegação de controle criativo é palavra contra palavra.

**e10.1.1 — o histórico entra no contrato.** Porque `e10.1` dá valor ao registro, e o que tem valor
vira obrigação contratual. *Confiança baixa.*

**e10.2 — o jurídico do comprador barra (RETROAÇÃO).** Porque a raiz é de duas pontas: código sem
autoria humana suficiente **não é protegido** e ao mesmo tempo **pode reproduzir código de terceiro**,
inclusive sob licença copyleft que contamina o produto derivado. O mecanismo é de aversão
assimétrica a risco: o jurídico não é premiado por ganho de eficiência e é punido por passivo.
*Sinal médio* — a prática jurídica já descreve a assimetria e já recomenda ferramenta de checagem
de repositório e revisão contratual com o fornecedor de IA. *Prazo 2029.*

**e10.2.1 — geradores com procedência auditada.** Porque `e10.2` cria demanda por um produto que
resolva o risco, e risco jurídico se resolve com indenização contratual e com corpus de treino
declarado. O mecanismo é o mesmo que criou o mercado de modelos "indenizados" em imagem.

**e11 — a disputa autoral se desloca para a regra.** Porque a raiz retira o valor da saída e o põe
no que a produz. O mecanismo é que a saída se tornou reproduzível a custo zero por quem tiver o
gerador, então defender a saída não faz sentido econômico. *Confiança baixa,* e prazo 2030.

**e11.1 — gerador licenciado, saída livre.** Porque `e11` inverte o objeto da licença. O mecanismo é
o mesmo do software livre aplicado à arte: libera-se o resultado e controla-se a fonte — que é, aliás,
o oposto do que o direito autoral de imagem faz.

#### Raiz 4 — a mídia como regra

**e12 — 3D na web sem download de malha.** Porque a raiz põe GPU programável em todo cliente e uma
camada de autoria agnóstica em cima: o TSL escreve-se em JavaScript e transpila para WGSL ou GLSL,
de modo que o mesmo shader roda nos dois backends. O mecanismo é a eliminação do custo de
portabilidade, que era o que mantinha 3D na web preso a asset pré-cozido. *Sinal médio* — a
pré-condição é forte (WebGPU estável e por padrão em Chrome/Edge, Firefox 141/145/147 e Safari 26),
mas o **efeito** enunciado não tem caso em escala; o sinal mede o efeito, não a pré-condição.
*Prazo 2028, classe de referência:* WebGL levou cerca de quatro anos entre suporte universal e 3D
virar recurso corriqueiro em site comercial.

**e12.1 — orçamento de performance em tempo de execução.** Porque `e12` troca o gargalo: não adianta
o pacote ter 40 KB se construir a cena leva três segundos de CPU. O mecanismo é que a métrica segue
o gargalo, sempre.

**e12.1.1 — a conta de energia migra para o aparelho.** Porque `e12.1` desloca computação do
servidor para o cliente, e computação deslocada não desaparece — muda de dono. *Confiança baixa,*
mas o mecanismo é aritmético e verificável.

**e12.2 — no aparelho de entrada, a regra custa mais que a amostra (RETROAÇÃO, e a nota brasileira).**
Porque `e12` presume cliente capaz, e o parque real não é uniforme. O mecanismo é direto: gerar
geometria em tempo de execução usa CPU e GPU sustentadas, o que aquece e consome bateria, enquanto
baixar uma malha usa rede uma vez e depois desenha. Em aparelho de entrada, que é a maioria do
parque brasileiro, a conta pode inverter — e quem desliga a experiência não é o designer, é o
sistema operacional ou o próprio produto medindo retenção. *Sinal fraco,* porque **não achei medição
publicada dessa comparação** — é inferência com mecanismo, e está declarada como tal. *Prazo 2029.*

**e12.2.1 — desigualdade de hardware vira desigualdade estética.** Porque `e12.2` obriga a entregar
dois caminhos, e dois caminhos significam duas experiências. O mecanismo é que a versão pré-cozida
para aparelho fraco é sempre a mais pobre, e ela vai justamente para quem tem menos. É o efeito
social mais desconfortável do mapa e o que menos aparece nos papers.

**e13 — o motion design se separa do vídeo.** Porque a raiz permite que o comportamento — não só a
forma — trafegue como regra. O mecanismo está em produção: o Rive entrega formato com estado e
runtime único para web, Unity, Unreal, Apple, Android, React Native, Flutter e construtores web, com
as máquinas de estado explicitamente descritas como "o contrato entre design e engenharia", e cita
Spotify, LinkedIn e Duolingo. *Sinal forte* e *confiança média* — forte porque o artefato existe e
está em produtos grandes; média porque "se separa do vídeo" é uma afirmação mais ampla do que o
artefato sustenta. *Prazo 2028.*

**e13.1 — agência entrega comportamento.** Porque `e13` muda o entregável e, com ele, o que há para
manter: arquivo não tem manutenção, sistema tem. *Sinal fraco.*

**e13.2 — Cavalry grátis derruba a escassez.** Porque a raiz combinada com distribuição de
plataforma remove a barreira de preço: o Cavalry 2.7, aplicativo de animação procedural por nós,
ficou **gratuito em 16/04/2026** depois da compra pela Canva, com uso comercial liberado para
artista individual e cobrança só para estúdio via Canva Enterprise. O mecanismo é o de sempre:
ferramenta profissional gratuita dentro de uma plataforma de massa não amplia o mercado do
profissional, amplia o número de pessoas que fazem sem ele. *Sinal médio, prazo 2029.*

**e13.2.1 — o diferencial vira o desenho do sistema.** Porque `e13.2` comoditiza a execução da
animação e deixa escasso o que não se aprende num tutorial: a lógica de estados e transições.
Mesmo mecanismo de `e5.2`, em outro ofício — e essa repetição é um dos achados da seção 5.3.

**e14 — a estética procedural volta por economia.** Porque `e12` e `e13` premiam o que é leve, e o
que é leve tem aparência: repetição, simetria, ruído, malha simples. O mecanismo é que restrição
técnica sempre produziu estilo — foi assim com o pixel art, com o low-poly e com o design plano.
*Sinal fraco, confiança baixa e prazo 2030:* retorno de estética é a coisa mais difícil de datar
neste mapa e **não achei classe de referência boa**; o design plano levou cerca de três anos a
partir do iOS 7, mas foi dirigido por uma plataforma dominante, e aqui não há.

**e14.1 — marcas adotam a aparência deliberadamente.** Porque `e14` transforma a restrição em sinal
legível, e marca compra sinal legível. *Sinal fraco.*

**e15 — a regra é fácil de copiar.** Porque a raiz faz trafegar texto executável, e texto executável
chega ao cliente por definição — está no pacote. O mecanismo é o oposto simétrico da virtude: a
mesma transparência que permite editar permite copiar. *Sinal fraco, prazo 2029.*

**e15.1 — a plataforma ofusca ou move para o servidor.** Porque `e15` cria perda, e quem perde
reage. O mecanismo é conhecido e já aconteceu com shader compilado, com JavaScript minificado e com
lógica de jogo movida para servidor. *Sinal médio* — porque a reação já existe em toda outra mídia
que virou código. *Prazo 2030.*

**e15.1.1 — executável e ilegível.** Porque `e15.1`, levado ao fim, devolve exatamente a opacidade
que o procedural prometia resolver. *Prazo 2032 — fora do horizonte deste mapa, e declaro.* É a
contradição central do mapa e está tratada em 5.3.

### 5.2 Cobertura STEEP e quem perde

| Eixo | Efeitos de 1ª ordem | Observação |
|---|---|---|
| **Social** | `e5` (fim do degrau de entrada), `e14` (estética como sinal social) | O eixo mais bem servido por dado: GDC 2026, com 2.300+ respondentes |
| **Tecnológico** | `e1`, `e2`, `e6`, `e8`, `e9`, `e12`, `e13` | O eixo onde o mapa tem mais artefato verificável e menos inferência |
| **Econômico** | `e3`, `e7`, `e13` (comoditização), `e15` (perda de exclusividade) | Onde estão os dois freios mais fortes: `e7.1` e `e10.2` |
| **Ecológico** | `e12.1.1` (a conta de energia muda de dono) | **Eixo quase vazio, e registro isso.** Não achei medição de consumo de geração procedural no cliente contra download de amostra; é uma lacuna real deste mapa, não uma escolha |
| **Político / regulatório** | `e10`, `e10.2`, `e11` | Eixo inteiro dependente da raiz mais frágil; a seção 7 trata disso |

**Quem perde, nomeado:**

1. **Artista de entrada** — `e5`. Não é retórica: 64% dos artistas visuais e técnicos ouvidos pela
   GDC 2026 veem a IA generativa como força negativa, 28% do total foram demitidos em dois anos, e
   74% dos estudantes estão preocupados com as próprias perspectivas.
2. **Loja de asset e autor que vende peça** — `e1.2`, `e1.2.1`.
3. **Biblioteca gráfica nova e pequena** — `e2.2`. Perde por não ter corpus, e perde antes de ter
   chance de ganhar.
4. **Mantenedor voluntário de projeto aberto** — `e4`, `e4.1`. Paga o custo de revisar o que a IA
   escreve sem receber por isso, e a resposta racional é fechar a porta.
5. **Motion designer de execução** — `e13.2`. Perde a escassez no ano em que a ferramenta
   profissional virou gratuita dentro de uma plataforma de massa.
6. **Usuário de aparelho de entrada** — `e12.2`, `e12.2.1`. Recebe a versão pré-cozida, mais pobre,
   e a desigualdade de hardware vira desigualdade de experiência.
7. **O próprio comprador de procedural** — `e7.1`. Aprovou esperando economia e recebe uma conta em
   computação.

### 5.3 Convergências, retroalimentação e contradição

**Convergência 1 — o artefato visual entra no regime de engenharia de software (`e1.1` × `e8.1`).**
Dois ramos de raízes diferentes chegam ao mesmo lugar: a raiz 1 leva o artefato para o repositório
(porque ele é texto) e a raiz 2 leva o julgamento para o teste (porque ele tem oráculo). O encontro
é o achado mais valioso deste mapa, porque nenhuma das duas raízes, sozinha, produz o resultado: é
preciso que o artefato seja diffável **e** que a saída seja verificável para que exista revisão de
arte em pull request com integração contínua. Consequência prática para a disciplina: o vocabulário
que a próxima geração de designers vai precisar não é de ferramenta, é de controle de versão e de
teste.

**Convergência 2 — o julgamento é a única escassez restante (`e3.2` × `e5.2` × `e7.2` × `e13.2.1`).**
Quatro efeitos, três raízes, o mesmo ponto: produção barateia, escolha não. Ele aparece como gargalo
de curadoria (`e3.2`), como concentração salarial no artista técnico sênior (`e5.2`), como arena
humana virando infraestrutura (`e7.2`) e como o motion designer sobrevivendo pelo desenho do sistema
e não pela animação (`e13.2.1`). Quando um mesmo efeito reaparece em quatro lugares independentes,
ou é um achado ou é um viés do autor — e eu suspeito de mim aqui; está na seção 7.

**Convergência 3 — o processo vira o ativo (`e1.1` × `e10.1`).** A raiz 1 produz histórico de
commits porque o objeto é código; a raiz 3 precisa de prova de contribuição humana. O mesmo artefato
serve às duas: o log. Isso dá ao "fluxo de trabalho documentado" um valor que ele nunca teve em
produção visual, e explica por que `e10.1.1` (histórico como entregável contratual) é plausível
mesmo com confiança baixa.

**Retroalimentação positiva — o corpus que se alimenta (`e2.1.1` → raiz 1).** Quanto mais código
procedural público existe para uma API, melhor o modelo escreve nela; quanto melhor escreve, mais se
usa; quanto mais se usa, mais código público. O ciclo reforça a raiz 1 e concentra o ecossistema
(`e2.1.1`), estrangulando a diversidade (`e2.2`). É o motor e o veneno na mesma engrenagem.

**Retroalimentação negativa — o custo que volta (`e7.1` → raiz 2 → raiz 1).** Se qualidade exige
nove execuções e o ganho é de 1% a 10%, o argumento econômico do procedural enfraquece, o comprador
recua e a pressão para adotar a raiz 1 diminui. Este ciclo é o mais bem medido do mapa e é o que me
impede de dar confiança alta a quase qualquer coisa.

**Contradição não resolvida — transparência contra apropriação (`e11.1` × `e15.1`).** `e11.1` diz que
comunidades vão publicar o gerador e liberar a saída; `e15.1` diz que plataformas vão ofuscar o
gerador ou movê-lo para o servidor. As duas não podem valer no mesmo mercado. **Não resolvo.** O que
decide entre elas é uma coisa só: se a receita do produto vem da peça ou da plataforma. Onde a
receita vem da peça (asset, ilustração, trilha), vence `e15.1` e o procedural fica opaco; onde a
receita vem de outro lugar (produto, serviço, atenção), vence `e11.1` e o gerador fica público. É a
pergunta que eu levaria à aula.

**Contradição menor — leveza contra fidelidade (`e12` × `e14` contra os temas 10 e 12).** Este mapa
afirma que a regra ganha por peso e editabilidade. O tema 10 (captura de realidade) e o tema 12
(mídia sintética) afirmam que a amostra ganha por fidelidade. As duas afirmações podem coexistir
porque tratam de mercados diferentes — interface e produto contra cinema e publicidade —, mas a
coexistência é uma hipótese, não um fato, e o experimento da seção 10 existe para testá-la.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

Para cada um: onde foi visto, o que mudaria, e **o sinal observável** que diria que está crescendo.

**SF1 — A ferramenta de autoria virando servidor de ferramenta, com validador.**
*Onde foi visto:* o Apex Script Comfort Package, apresentado por SideFX e NVIDIA no keynote do
Houdini 22, em 22/06/2026, em Londres, durante o SIGGRAPH 2026 — MCP ligando o LLM a uma biblioteca
curada de sintaxe, funções, documentação e exemplos de Apex Script, com um validador que checa o
código **antes de ele rodar** e sem dependência contínua do modelo depois de gerado. E, no lado
aberto, o BlenderMCP com 28,2 mil estrelas e 2,6 mil forks.
*O que mudaria:* se isto virar padrão, o software de criação deixa de competir por interface e passa
a competir por qualidade de feedback — e o poder de plataforma migra do fabricante de modelo para o
fabricante de DCC.
*Sinal observável:* o recurso **sair do SideFX Labs e entrar no aplicativo principal**. O texto do
anúncio é explícito em que isto é sneak peek pelo canal experimental, não recurso de fábrica. O dia
em que a SideFX documentar isso no manual do produto, e não no Labs, o mapa acelera um ano.

**SF2 — Consenso sem verificador: a qualidade vindo da mediana de N, não de um juiz.**
*Onde foi visto:* Siemens Foundational Technologies, arXiv 2608.09706, 10/08/2026 — compila-se o
conjunto de candidatos, mede-se Chamfer ou característica de Euler entre eles e escolhe-se o mais
representativo; supera o verificador do estado da arte nas três métricas de geometria (p ≤ 0,022),
com ganho de 1% a 10% e platô em nove candidatos.
*O que mudaria:* se isto migrar de CAD para arte, o pipeline de qualidade deixa de precisar de
modelo avaliador treinado — o que derruba uma barreira de entrada inteira para estúdio pequeno.
*Sinal observável:* um plugin de DCC ou um projeto aberto de arte generativa expondo "gerar N,
escolher por consenso" como botão. Hoje isso existe só em paper de engenharia.

**SF3 — A biblioteca gráfica redesenhada para a máquina ler.**
*Onde foi visto:* ProcFunc (Princeton, 04/2026), cujo motivo declarado é que o VLM escreva código
procedural **com significativamente menos erros**; e o Procedural Compact Graph do Proc3D (Adobe,
01/2026), que corta de 4 a 10 vezes o custo de contexto.
*O que mudaria:* é a inversão mais silenciosa e mais profunda do tema — APIs gráficas deixando de
ser projetadas para o programador humano. Se pegar, muda quem escreve biblioteca e por quê.
*Sinal observável:* uma API gráfica grande (Three.js, Godot, Unity) publicar explicitamente uma
superfície "para agente", com documentação otimizada para recuperação e exemplos executáveis como
artefato versionado. Métrica: aparecer `AGENTS.md` ou equivalente no repositório de uma engine
grande, com contrato de API declarado.

**SF4 — O shader recuando para a linguagem hospedeira.**
*Onde foi visto:* p5.js 2.0 trazendo shaders escritos em JavaScript em vez de GLSL; TSL, do
Three.js, sendo "uma abstração de shader baseada em nós, escrita em JavaScript" que transpila para
WGSL ou GLSL.
*O que mudaria:* modelos são muito melhores em JavaScript e Python do que em GLSL — há ordens de
grandeza de diferença em código público. Se a camada de shader for expressa na linguagem hospedeira,
a IA passa a escrever shader com a competência que tem na hospedeira, e não com a que tem em GLSL.
*Sinal observável:* um benchmark de geração de shader publicado **em TSL ou em p5.js**, e não em
GLSL. Hoje não existe benchmark de shader com placar utilizável em nenhuma das três.

**SF5 — A arena humana como infraestrutura permanente, não como experimento.**
*Onde foi visto:* o 3DCodeArena, plataforma de ranqueamento por preferência humana pareada, montada
porque as métricas automáticas não capturavam qualidade perceptual do 3D gerado.
*O que mudaria:* se comparação pareada virar o modo padrão de aprovar arte, muda o fluxo interno do
estúdio — de aprovação hierárquica para votação distribuída.
*Sinal observável:* uma agência ou um estúdio publicar que aprova peça por comparação pareada
interna, com placar.

**SF6 — A economia da geração recontada em tokens.**
*Onde foi visto:* o img2threejs medindo-se explicitamente em eficiência de token — a regra de projeto
é gastar token só onde há julgamento visual, deixando validação e gating para script determinístico;
e o Proc3D tratando redução de contexto como resultado publicável.
*O que mudaria:* se o custo por peça passar a ser dito em tokens, o procedural ganha um argumento
que a mídia gerada não tem, porque código é barato de transmitir ao modelo e imagem não.
*Sinal observável:* uma ferramenta comercial publicando preço por asset em unidades de computação
em vez de assinatura. **Ressalva importante:** o img2threejs **não publica número medido** de
economia de token; é alegação do projeto, e está tratada assim na seção 8.

**SF7 — A objeção pedagógica organizada.**
*Onde foi visto:* a política de uso de IA do p5.js, que não argumenta por qualidade de código e sim
por responsabilidade e por ritmo — contribuir com software aberto como "empreendimento profundamente
humano, que exige curiosidade, lentidão e comunidade"; e, no Brasil, a crítica de Beccari, Kussler e
Diehl de Oliveira em SCIAS, que trata a narrativa de democratização criativa como encobrimento de
automação de viés e de precarização do trabalho, e defende que a alienação do ato criativo operada
pela IA seja discutida em sala.
*O que mudaria:* se a objeção pedagógica se organizar, `e5.1` não acontece como eu escrevi — o
currículo não se reorganiza em torno de código, se reorganiza em torno de crítica.
*Sinal observável:* uma associação de escolas de design publicar diretriz curricular que trate IA
generativa como objeto de crítica, e não como competência a ensinar.

### 6.2 Wildcards

**W1 — O motor de jogo que compila o conteúdo na chegada do jogador.**
*Mecanismo:* o cliente não baixa o nível; baixa um gerador de alguns kilobytes com uma semente,
executa dentro de um sandbox, valida contra um portão determinístico e monta a cena no momento em
que o jogador chega. Todas as peças existem separadas hoje: geração procedural determinística por
semente é rotina em jogos; WebGPU dá GPU programável universal; o 3DCodeBench mostra que
executabilidade quase perfeita é alcançável com harness; e o Rive já prova que runtime único
multiplataforma com estado funciona em produto grande.
*Por que é improvável:* duas barreiras duras. Primeira, **segurança** — executar código não confiável
no cliente é o problema que a indústria passou vinte anos tentando conter, e ninguém quer reabri-lo
para conteúdo de usuário. Segunda, **determinismo entre plataformas** — se dois clientes geram
versões ligeiramente diferentes da mesma cena, qualquer coisa multiusuário quebra, e ponto flutuante
não é determinístico entre GPUs.
*O que faria com o mapa:* inverteria `e12.2`. Se o conteúdo chega como regra assinada e validada, o
argumento do aparelho de entrada muda de figura — o custo deixa de ser rede e passa a ser
integralmente CPU, o que pode ser pior, não melhor.
*Sinal precoce:* um motor comercial publicar sandbox de execução de gerador com semente determinística
**e assinatura criptográfica** do gerador. É o par "sandbox + assinatura" que indica a coisa toda;
qualquer um dos dois sozinho é outra coisa.

**W2 — Um tribunal decide que o gerador é obra e o render não é.**
*Mecanismo:* a decisão de Munique já separou "instrução genérica" de "influência concreto-formativa"
e ofereceu o vitral de Richter como paradigma de controle humano sobre processo assistido. Basta um
caso em que a parte que traz o gerador — com histórico de edição, parametrização e rejeição
documentados — seja tratada como autora, enquanto a saída, reproduzível por qualquer um que execute
o mesmo código, seja tratada como não protegida por falta de originalidade adicional.
*Por que é improvável:* exige um litígio específico sobre código gráfico, exige que a parte tenha
guardado o histórico, e exige um juiz disposto a separar programa de saída — o que contraria a
intuição comum de que o valor está na imagem.
*O que faria com o mapa:* `e10` e `e11` saltariam de confiança baixa para média, e `e10.1.1`
(histórico como entregável contratual) viraria prática em um ano, não em cinco. Toda a raiz 3
deixaria de ser a mais frágil e passaria a ser a mais consequente.
*Sinal precoce:* qualquer decisão publicada que use a expressão "influência concreto-formativa" —
ou equivalente de outra jurisdição — aplicada a **código**, e não a imagem.

**W3 — Um modelo pequeno, especializado em uma API gráfica só, rodando local.**
*Mecanismo:* treinar um modelo de poucos bilhões de parâmetros exclusivamente em uma API — Houdini
VEX, Geometry Nodes, TSL — com dado sintético gerado pela própria API, de modo que o custo de gerar
a regra caia a quase zero e a privacidade deixe de ser questão. O ProcFunc mostra o caminho: quando a
biblioteca é desenhada para a máquina, o erro cai sem precisar de modelo maior.
*Por que é improvável:* o próprio 3DCodeBench declara a carência de dado de código procedural de
qualidade como o gargalo crítico, e dado sintético de gerador tende a ser pobre em diversidade
justamente onde o humano é rico — a decisão estranha, o atalho, a exceção.
*O que faria com o mapa:* mataria `e6.1.1` (cobrança por chamada) e `e2.1.1` (concentração em duas
ou três APIs), porque cada API poderia ter o seu próprio modelo. E devolveria à comunidade aberta a
posição que `e4` diz que ela vai perder.
*Sinal precoce:* alguém publicar um modelo abaixo de 10 bilhões de parâmetros que **bata um modelo de
fronteira** numa faixa do 3DCodeBench. Hoje o placar é dos modelos grandes: GPT-5.5 com Elo 1167.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria adversarial aplicada ao mapa já pronto, e as alterações que ela
produziu estão registradas em 7.8, com valor antes e depois.

### 7.1 Pré-mortem — é 2031 e este mapa se mostrou errado

**Razão 1, a mais provável: o gargalo nunca foi escrever o gerador, era julgá-lo — e julgar não
barateou.** Em 2031, "gerar geradores" ficou confinado aos domínios em que a especificação é
objetiva e verificável: CAD, dado sintético de treino, visualização matemática, diagrama técnico. Em
mídia e interação — onde a pergunta é "está bom?" e não "fecha?" — o procedural escrito por IA ficou
como ferramenta de esboço. O indício de que isto pode acontecer já existe: o 3DCodeBench teve que
construir uma arena humana porque nenhuma métrica automática servia, e o consenso da Siemens dá 1% a
10% de ganho com platô em nove candidatos. *Aponta para:* `e3`, `e3.1`, `e14`, `e13.1`.

**Razão 2: o procedural perdeu a guerra da fidelidade e virou nicho estilizado.** Se o público
continuar premiando fotorrealismo — e não há nenhum sinal de que pare —, quem ganha a mídia é a
captura (tema 10) e a síntese (tema 12), e a regra fica onde já estava: interface, motion, dado. Os
modos de falha medidos reforçam essa leitura: peças desconectadas e flutuantes no 3DCodeBench,
invalidez de 68% a 93% no nível avançado do Text2CAD-Bench. *Aponta para:* `e12`, `e14`, `e9.2`.

**Razão 3: a dependência de harness se fechou.** Se a executabilidade quase perfeita depende do
agente, e o agente é de três empresas, então "código editável para sempre" não protege ninguém de
dependência de plataforma — apenas troca a dependência do formato pela dependência do ambiente.
Quem prometeu autonomia entregou outra assinatura. *Aponta para:* `e6.1.1`, e reforça `e15.1`.

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

Três efeitos foram flagrados como extrapolação sem mecanismo de não-linearidade:

- **`e3` (a variação vira a entrega padrão)** é, na forma bruta, "o custo cai, então produz-se mais".
  O mecanismo de não-linearidade que o salva é `e3.2`: a curadoria vira gargalo, e gargalo muda o
  formato do trabalho, não só a quantidade. **Mantido, com a dependência declarada.**
- **`e14` (a estética procedural volta)** era extrapolação pura de "leve é bonito". Não achei classe
  de referência utilizável. **Rebaixado** — ver 7.8.
- **`e8` (erro visual vira bug)** parecia linear, mas tem descontinuidade real: reprodutibilidade por
  semente é um limiar, não uma escala. Ou o quadro é reproduzível e existe teste, ou não é e não
  existe. **Mantido.**

### 7.3 Velocidade de adoção — os prazos confrontados com a classe de referência

| Efeito | Prazo | Classe de referência usada | Veredito |
|---|---|---|---|
| `e1` | 2028 | Infraestrutura como código: 4 a 6 anos da ferramenta à prática default | No limite otimista; mantido com confiança média |
| `e2` | 2028 | OpenAPI como descrição esperada de API: ~3 anos | Compatível |
| `e6.1` | 2028 | SideFX: 2 a 3 ciclos de versão do Labs ao produto | **Empurrado de 2027 para 2028** |
| `e5.1` | 2030 | Reforma curricular universitária brasileira: 4 a 8 anos | **Confiança rebaixada**; 2030 já é o piso |
| `e12` | 2028 | WebGL: ~4 anos entre suporte universal e uso corriqueiro | Compatível; WebGPU universal é de 2025-2026 |
| `e1.2.1` | 2032 | Licença perpétua → assinatura em software criativo: 5 a 7 anos | **Empurrado de 2030 para 2032**, e declarado fora do horizonte |
| `e14` | 2030 | Design plano pós-iOS 7: ~3 anos, mas com plataforma dominante dirigindo | Referência **não se aplica**; prazo empurrado e confiança rebaixada |

### 7.4 A raiz que não acontece — o que sobra do mapa

- **Sem a raiz 1** (a IA não fica boa o bastante para escrever gerador útil): sobra bastante. As
  raízes 2, 3 e 4 seguem, com outro dono — quem escreve a regra continua sendo humano, e o mapa vira
  um mapa sobre verificação, direito e distribuição. Perde-se `e1` a `e5` inteiros, o que é um terço
  do mapa. **O mapa sobrevive mutilado.**
- **Sem a raiz 2** (o laço de execução não se consolida em ferramenta gráfica): a raiz 1 continua,
  mas no regime "escreve e reza", com 69% a 87% de executabilidade e peças flutuantes. Todo o ramo
  `e6`–`e9` cai, e com ele a convergência 1. **O mapa perde o seu achado principal.**
- **Sem a raiz 3** (a assimetria jurídica não é explorada, ou um tribunal decide o contrário): caem
  `e10` e `e11` e seus filhos — sete efeitos, todos já de confiança baixa exceto `e10.2`. **O mapa
  quase não sente**, e isso é exatamente o que se espera da raiz mais frágil. Registro que ela
  passou no teste com a nota mínima: não é uma raiz disfarçada de outra, mas é a mais dispensável.
- **Sem a raiz 4** (a mídia continua trafegando como amostra): caem `e12` a `e15`. O mapa vira um
  mapa de **processo de produção** e deixa de ser um mapa de **distribuição**. Continua de pé, e
  fica menos interessante.

Nenhuma raiz é as outras disfarçadas: o teste da causa solta de 4.5 já tinha mostrado isso, e este
teste confirma por outro caminho — nenhuma remoção esvazia o mapa inteiro.

### 7.5 Suposições escondidas

Listadas porque o mapa as assume sem dizer, e cada uma quebrada é um wildcard novo ou um efeito a
menos:

1. **O modelo de código continua barateando.** Se o preço por token de raciocínio subir, `e7` e todo
   o test-time scaling ficam caros e `e7.1` deixa de ser retroação e vira barreira.
2. **A API gráfica continua pública e documentada.** Se um fabricante fechar a API para conter
   agentes — o que é economicamente racional se `e6.1.1` acontecer —, a raiz 1 morre naquela
   ferramenta.
3. **A licença das bibliotecas abertas continua permissiva.** `e10.2` depende disso, e a política do
   p5.js já mostra que o aberto pode endurecer.
4. **O navegador continua permitindo executar código arbitrário na GPU.** É o que WebGPU faz hoje.
   Uma classe de ataque séria por shader mudaria isso em um ano.
5. **Computação e energia continuam baratas.** `e12.1.1` e `e7` presumem isso.
6. **A mais escondida: que "editável" importa para quem paga.** Este mapa inteiro presume que
   editabilidade é valor. Para boa parte do mercado, o cliente quer a peça pronta e nunca vai abrir
   o gerador — e, para esse cliente, código procedural é só um jeito mais trabalhoso de chegar ao
   mesmo JPEG. Se essa suposição cair, `e1`, `e1.2` e `e11` caem com ela.

### 7.6 Viés do autor

Três, nomeados.

**Viés 1 — gosto de código.** Este mapa foi escrito por um sistema (e num contexto) que trata
"virar texto versionável" como promoção. Um mapa do mesmo tema escrito por quem trabalha em After
Effects começaria pela raiz 4, colocaria `e13` no topo e provavelmente não teria `e1` — porque, de
dentro do motion design, o que mudou não foi o artefato virar código: foi a ferramenta ficar
gratuita.

**Viés 2 — a convergência bonita demais.** A convergência 2 ("o julgamento é a única escassez
restante") aparece em quatro efeitos de três raízes diferentes. Isso pode ser um achado — ou pode
ser eu impondo a mesma história quatro vezes porque ela é elegante e reconfortante para quem faz
trabalho criativo. Sinalizo e não removo, porque cada uma das quatro instâncias tem mecanismo
próprio; mas quem for confrontar este mapa deve começar por aqui.

**Viés 3 — a raiz 3 é uma aposta minha, não uma leitura do campo.** Ninguém no design escolhe
procedural por razão jurídica hoje. Eu achei a assimetria bonita — programa é obra, imagem não é — e
construí uma raiz em cima de uma inferência a partir de um caso sobre **logos**. Está declarado no
próprio §4, está com confiança baixa na roda, e sobreviveria a este exame como "hipótese útil", não
como tendência observada.

### 7.7 Calibração

| Ordem | alta | media | baixa | Total |
|---|---|---|---|---|
| 1ª | 2 | 9 | 4 | 15 |
| 2ª | 0 | 16 | 9 | 25 |
| 3ª | 0 | 0 | 17 | 17 |

A distribuição cai com a ordem, como o método exige. As duas únicas confianças altas são `e6` e
`e9`, e ambas descrevem coisas **já medidas** — a diferença de executabilidade com e sem harness, e
o deslocamento do modo de falha —, não previsões. Toda a terceira ordem está em confiança baixa, o
que é a resposta esperada e não um pudor retórico: nenhum efeito de terceira ordem deste mapa tem
artefato observável hoje.

### 7.8 Registro de alterações — o que a bateria derrubou

A bateria derrubou coisa em todas as quatro raízes. Cada linha traz o valor antes e depois.

**Raiz 1:**
- `e1`: sinal **forte → medio**. Motivo: eu tinha contado LL3M, MeshCoder, ProcFunc e img2threejs
  como artefatos do efeito, mas eles são artefatos da **raiz**, não do efeito enunciado. O efeito diz
  "entregue como script no repositório do projeto", e disso não achei nenhum caso de produção. Sinal
  conta artefato do efeito.
- `e1.2.1`: prazo **2030 → 2032**, agora fora do horizonte e declarado. Motivo: a classe de
  referência (licença perpétua para assinatura em software criativo) levou de cinco a sete anos.
- `e5.1`: confiança **media → baixa**. Motivo: reforma curricular universitária brasileira leva de
  quatro a oito anos, e há uma corrente crítica organizada que empurra o currículo para outro lado —
  o que está em SF7.

**Raiz 2:**
- `e6.1`: prazo **2027 → 2028**. Motivo: o próprio anúncio do Houdini 22 é explícito em que o recurso
  chega pelo SideFX Labs, canal experimental, e não como recurso de fábrica.
- **REMOVIDO — "a IA passa a projetar o próprio gerador de geradores, escrevendo DSLs gráficas
  novas".** Motivo: falhou no teste da causa solta. Se isso acontecer, acontece porque síntese de
  programa avançou em geral, não porque o render entrou no laço. Vai para a seção 12.

**Raiz 3:**
- `e10`: confiança **media → baixa** e prazo **2028 → 2029**. Motivo: a única evidência é uma decisão
  sobre **imagem** (AG München, logos); a transposição para código gráfico é inferência minha, sem
  caso julgado.
- **REMOVIDO — "reguladores criam uma categoria de obra gerada por regra".** Motivo: é exatamente um
  dos efeitos proibidos pelo método — regulador genérico, sem nome, sem mecanismo. Eu não consegui
  nomear o regulador nem o instrumento. Vai para a seção 12.

**Raiz 4:**
- `e12`: sinal **forte → medio**. Motivo: WebGPU estável nos quatro navegadores é sinal forte da
  **pré-condição**, não do efeito. O efeito — experiência 3D sem download de malha — não tem caso em
  escala.
- `e14`: prazo **2028 → 2030** e confiança **media → baixa**. Motivo: não achei classe de referência
  aplicável para retorno de estética sem plataforma dominante dirigindo.

Sete alterações e duas remoções. A bateria não passou em branco em nenhuma raiz.

## 8. O que a máquina errou

Eu sou a máquina. Sobre esta rodada, especificamente:

**1. Aceitei por pouco um número dez vezes menor do que o real.** A busca me devolveu
"ManimCommunity/manim tem 3.077 estrelas". Abri os dois repositórios e o número verdadeiro é **40,8
mil** na edição comunitária e **93,7 mil** no repositório pessoal do Grant Sanderson. Se eu tivesse
escrito a partir do resultado da busca, o mapa descreveria a comunidade de creative coding
matemático como um projeto de nicho quando ela é um dos maiores repositórios de Python do GitHub. O
enunciado do tema falava em "92 mil", que corresponde ao repositório pessoal — os dois números
existem e são de coisas diferentes.

**2. Repeti o mesmo erro de escala com o BlenderMCP, em sentido inverso.** A busca me deu "13.386
estrelas", que é de um **fork**. O repositório original de Siddharth Ahuja tem **28,2 mil estrelas e
2,6 mil forks**. Em ambos os casos o erro tem a mesma origem: resultado de busca agrega forks e
projetos homônimos, e só abrir o repositório resolve. Corrigi os dois abrindo.

**3. Descartei os números mais chamativos deste tema porque não achei a fonte primária.** Dois
agregadores davam "-67% em vagas de concept artist", "-71% em environment artist júnior" e "estúdios
que empregavam 50 concept artists hoje se viram com 12". Nenhum cita fonte primária. Abri a página
oficial da GDC e usei **apenas** o que está lá: mais de 2.300 respondentes, 52%, 64% entre artistas
visuais e técnicos, 28% demitidos em dois anos, 74% dos estudantes preocupados. Os números de -67% e
-71% **não entraram no mapa**, e teriam sido o dado mais citável dele.

**4. Procurei um benchmark de shader que não existe, e quase o citei de memória.** Busquei
"ShaderEval" como se fosse um benchmark estabelecido, com placar. Abri o único candidato — o
microeval de arte GLSL da Artificial Analysis — e ele **não tem placar numérico**: lista 16 modelos
e mostra apenas contagem de joinha, sete com um voto cada, e não datado na página. Portanto este
mapa **não faz nenhuma afirmação quantitativa sobre qualidade de shader gerado por IA**, e o efeito
`e6`, que eu queria ancorar em shader, foi reancorado no 3DCodeBench, que tem número.

**5. Afirmei "WebGPU virou Baseline em janeiro de 2026" na minha cabeça e não consegui sustentar.**
Um agregador dizia isso com data. Abri a página do web.dev, que confirma o suporte nos quatro
navegadores mas **não menciona status de Baseline nem data**, e abri o wiki oficial de status de
implementação do grupo GPU for the Web, que dá versão por navegador e plataforma. O documento agora
diz o que as duas fontes primárias sustentam — estável e ligado por padrão, com as versões — e
**não** afirma Baseline nem a data de janeiro.

**6. Tenho uma contradição de venue que não consegui resolver.** O ShadAR aparece com DOI da ACM
apontando para os Extended Abstracts do CHI 2026 e, no registro do arXiv, como ISMAR-Adjunct 2025,
em Daejeon. Não consegui resolver com uma fonte só. Cito as duas possibilidades e **não afirmo o
local de publicação**.

**7. Tratei a alegação central do img2threejs como alegação, não como fato.** O projeto se define por
eficiência de token e por portão de qualidade, e o argumento é elegante — validação determinística
em Python, token do modelo só onde há julgamento visual. Mas **não há nenhum número medido** de
economia de token em nada que eu abri, nem no repositório nem na vitrine. Também não consegui
conciliar 15,8 mil estrelas no repositório principal com 145 na vitrine de demonstrações do mesmo
projeto — é uma diferença grande o bastante para eu desconfiar de que uma das duas páginas descreva
outra coisa. Uso o projeto como evidência de **método** (o portão determinístico existe e está
documentado), nunca como evidência de **economia**.

**8. Escrevi "significativamente menos erros" sem percentual e quase inventei um.** O resumo do
ProcFunc diz exatamente isso e não dá número. A tentação de escrever "cerca de 30% menos erros" foi
real e teria passado despercebida por qualquer leitor. Está registrado no documento como ausência de
número publicado.

**9. Um viés de seleção que não consegui corrigir.** Quase toda a evidência quantitativa deste mapa
vem de benchmark acadêmico — 3DCodeBench, Text2CAD-Bench, consenso da Siemens. Benchmark mede o que
é fácil de medir, e o que é fácil de medir aqui é executabilidade e distância geométrica. A parte do
tema que mais interessa à disciplina — se a peça é **boa** — é justamente a que nenhum número
cobre, e o mapa herda esse viés inteiro. A arena humana do 3DCodeBench existe por essa razão, e é
sintomático que ela seja a exceção, não a regra.

**10. Duas afirmações caíram quando fui abrir a fonte primária, já com o texto escrito.** A
primeira: eu tinha escrito que a Processing Foundation formulou a objeção pedagógica contra LLMs em
grupo de foco de março de 2025, com as expressões "fricção significativa" e "bagunça humana". Isso
veio de um resumo de busca; fui ao blog da própria fundação e **não achei o post**. Reescrevi os
três lugares onde isso aparecia usando só o que está na política de uso de IA do p5.js, que eu abri.
A segunda: eu tinha escrito que a IA generativa da Adobe estava no Sampler, em Text to Texture e
Image to Material. Abri o anúncio de 21/07/2026 e ele **não menciona IA no Substance 3D**; o que ele
descreve são recursos procedurais e modelos de material. Corrigido. As duas afirmações eram
plausíveis, ambas provavelmente têm algum fundo de verdade em outra fonte, e é exatamente por isso
que seriam difíceis de pegar numa revisão — o critério que as pegou não foi implausibilidade, foi a
regra de só citar o que se abriu.

## 9. Três cenários para 2031

### Provável — a regra venceu onde o objeto tem função, e perdeu onde ele tem aura

É 2031. Gerar o gerador virou rotina em três lugares e não saiu deles. Em **interface e motion**, o
entregável é comportamento: máquina de estados, runtime único, peça que responde a evento — e o
aplicativo que fazia isso ficou gratuito em 2026 dentro de uma plataforma de massa, então quase
todo mundo faz. Em **engenharia e produto**, a peça nasce como código porque precisa fechar, apoiar
e caber, e a camada de verificação estrutural que não existia em pipeline de pixel virou requisito
de compra. Em **dado sintético**, procedural é dominante porque só ele dá diversidade com rótulo. Em
**cinema, publicidade de marca e jogo triplo-A**, a captura e a síntese ganharam: o público premiou
fidelidade, e a regra não alcançou. O laço de execução se consolidou, os DCCs viraram em parte
servidores com validador, e a escolha de ferramenta se faz pelo ambiente que corrige, não pelo
modelo que escreve. O custo não caiu tanto quanto se prometeu, porque qualidade continua se
comprando com execuções repetidas e com gente olhando. A base da pirâmide da arte técnica não
voltou: quem entrou no mercado depois de 2026 entrou já lendo código, e quem não leu, não entrou.
*Sinal precoce de que estamos aqui:* uma grande loja de asset lançando venda de gerador parametrizado
ao lado do arquivo, sem substituir o arquivo.

### Desejável — o gerador é público, a saída é livre, e a formação mudou de objeto

É 2031. A promessa de transparência do procedural foi cobrada e cumprida: peças interativas viajam
como regra legível, publicadas sob licença explícita, e o que se protege é o gerador, não a imagem —
o que devolveu às comunidades de arte generativa uma posição que elas não tinham desde antes das
plataformas. O ensino de design deixou de ser ensino de ferramenta sem virar ensino de programação:
virou ensino de **sistema** — especificar regra, ler saída, decidir tolerância —, e a crítica que
alertava contra a alienação do ato criativo foi incorporada em vez de atropelada, de modo que o
aluno aprende a escrever o gerador **e** a perguntar de quem é o trabalho que ele automatiza. O laço
de verificação ficou barato o bastante para o estúdio pequeno, porque consenso entre candidatos
substituiu o modelo avaliador caro. E a entrega dupla — regra para aparelho forte, amostra para
aparelho fraco — foi tratada como problema de equidade e não como detalhe de engenharia, com
orçamento para a versão pobre.
*O que teria que ser feito para chegar aqui:* três coisas, todas decididas por gente e não por
tecnologia. Publicar o gerador quando a receita não depende dele. Escrever no contrato que o
histórico do processo é entregável. E medir, na universidade, o consumo da regra no aparelho de
entrada antes de recomendar a regra.
*Sinal precoce:* um estúdio brasileiro publicando o gerador de uma peça comercial sob licença aberta,
com o portão de qualidade junto.

### Indesejável — a regra virou binário, e o degrau sumiu sem nada no lugar

É 2031. O procedural ganhou a distribuição e perdeu a transparência: o que chega ao cliente é
executável e ilegível — ofuscado, compilado, ou executando no servidor —, exatamente como aconteceu
com shader e com JavaScript minificado, e "editável para sempre" virou uma vantagem que só o autor
original desfruta. A promessa de propriedade se inverteu: o código gerado não é protegível por falta
de autoria humana, mas continua gerando responsabilidade se reproduzir código alheio, então as
empresas grandes compram geradores com procedência auditada e indenização contratual, e quem não
pode pagar por isso não entra. A base da pirâmide não se reconstituiu: a formação continuou
ensinando ferramenta por mais cinco anos, o mercado deixou de contratar júnior, e a escassez de
sênior em 2031 é um problema sem solução no horizonte, porque o caminho que formava sênior foi
cortado em 2026 e ninguém abriu outro. E a desigualdade de hardware virou desigualdade estética sem
que ninguém a nomeasse: metade do público recebe a versão pré-cozida, mais pobre, e a métrica de
engajamento diz que está tudo bem.
*Sinal precoce deste cenário — e é o mais fácil de observar dos três:* ferramentas de motion e 3D
começarem a **empacotar o gerador em formato binário próprio** em vez de entregá-lo como texto. No
dia em que o "arquivo procedural" deixar de ser legível num editor de texto, este cenário está em
curso.

## 10. O experimento

### O duelo do quilobyte

**O que é.** Reconstruir **o mesmo objeto de referência** por quatro caminhos e medir as quatro
saídas com a mesma régua. Um objeto só, fotografado uma vez — de preferência algo com função e com
detalhe, tipo um ventilador de mesa ou uma cadeira de sala de aula do CIn.

Os quatro caminhos:

- **A — amostra gerada.** Imagem do objeto gerada por modelo de imagem a partir da referência. É o
  tema 12 servindo de controle.
- **B — malha gerada.** Modelo 3D nativo por difusão/reconstrução, exportado em glTF. É o tema 10
  servindo de controle.
- **C — regra escrita por agente.** Código procedural (Three.js/TSL ou Blender Python) escrito por um
  agente **com laço de execução**: renderiza, compara com a referência, corrige, com um portão
  determinístico antes de gastar julgamento do modelo — o método do img2threejs e do LL3M, feito à
  mão pela turma.
- **D — regra escrita por humano.** A mesma coisa, feita por um aluno em Geometry Nodes ou em p5.js,
  cronometrada.

**As cinco medidas** — todas registradas numa planilha única, e é a planilha que é o resultado:

1. **Bytes entregues ao cliente.** Tamanho do que precisa trafegar para a cena existir na tela.
2. **Tempo até o primeiro quadro**, em dois aparelhos: um laptop e **um celular Android de entrada**.
   Este é o item brasileiro do experimento e o que testa `e12.2` diretamente.
3. **Custo de produção**: tokens e reais no caminho C, minutos de gente nos caminhos B e D.
4. **Editabilidade**, medida por um teste concreto: pede-se **cinco alterações dirigidas** —
   "aumente a base em 20%", "mude o material da haste", "faça a hélice girar", "troque a cor sem
   trocar o material", "faça uma variação 30% menor" — e conta-se quantas cada caminho aceita **sem
   refazer do zero**. O caminho A vai marcar zero ou perto disso, e é por isso que ele está no
   experimento.
5. **Autoria demonstrável**: quanto do resultado é atribuível a decisão humana registrada. Conta-se,
   no histórico, quantas decisões de forma foram tomadas por pessoa e quantas pela máquina — é o
   critério de "influência concreto-formativa" de Munique transformado em medida.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta central deste mapa, que é uma
disputa e não uma tendência: **a regra ganha da amostra em quê, e a que preço?** As três hipóteses
que o experimento testa são separáveis: (i) a regra é ordens de grandeza mais leve; (ii) a regra
aceita edição dirigida e a amostra não; (iii) a regra custa mais para produzir. Se (i) e (ii) se
confirmarem e (iii) for pequeno, este mapa está certo. Se (iii) for grande, a seção 7.1 estava
certa e o mapa está errado.

**Que tecnologia emergente ele usa, e por que não dá com a madura.** Usa o **laço de agente com
execução e verificação visual** — o que o 3DCodeBench mostrou valer executabilidade quase perfeita
contra 87,3% e 69,3% em uma tacada. Não dá para fazer o caminho C com tecnologia madura por duas
razões: escrever à mão o gerador é o caminho D, que é o **controle**, não o objeto do experimento; e
um assistente de código sem execução produz o regime "escreve e reza", que é justamente a condição
que o benchmark mediu e que perde. O caminho C **só existe** com agente que roda, olha e corrige.

**O que a turma vai fazer quando testar isso em sala.** Três tempos, numa aula:

1. **Antes** — cada pessoa aposta, por escrito, na ordem dos quatro caminhos em cada uma das cinco
   medidas. As apostas ficam guardadas. (Isto é o experimento dentro do experimento: mede-se também
   o quanto a turma está calibrada.)
2. **Durante** — a turma executa as cinco alterações dirigidas nos quatro artefatos, ao vivo, e
   cronometra. Dois celulares de entrada circulam pela sala para a medida 2.
3. **Depois** — abre-se as apostas e discute-se **onde todo mundo errou junto**, que é o dado mais
   valioso. A discussão termina na pergunta de `e15.1` contra `e11.1`: se o gerador é bom, você o
   publicaria?

**O que seria um resultado que me faria mudar de ideia.** Dois resultados, cada um derrubando um
pedaço do mapa:

- **Se o caminho C precisar de mais de ~15 iterações do laço para cruzar o portão, custar mais que o
  caminho B e não ganhar em editabilidade**, então "gerar geradores" em mídia é romantismo de
  programador e não economia — e as raízes 1 e 2 perdem quase todo o alcance fora de CAD e dado
  sintético. Rebaixo `e1`, `e3` e `e12` para confiança baixa e movo o mapa para a razão 1 do
  pré-mortem.
- **Se o caminho C ficar mais lento que o caminho B no celular de entrada**, `e12.2` deixa de ser
  retroação e vira o efeito principal da raiz 4 — e a conclusão prática para o Brasil se inverte:
  regra é luxo de aparelho bom, e recomendar procedural aqui é recomendar exclusão.

**O que este experimento não é.** Não é comparação de qualidade estética. As quatro saídas vão
parecer diferentes, e a mais bonita provavelmente vai ser a A. Quem for medir beleza está fazendo
outro experimento — e, se quiser fazê-lo direito, vai precisar de comparação pareada, como o
3DCodeArena precisou.

## 11. Fontes

Trinta e duas fontes, todas **abertas nesta rodada** — nenhuma citada de memória, nenhuma citada a
partir de resumo de busca. Onde o resumo de busca discordou da fonte aberta, prevaleceu a fonte
aberta e o desacordo está registrado na seção 8.

**Pesquisa — a IA escrevendo o gerador**

1. https://arxiv.org/abs/2508.08228 — **LL3M: Large Language 3D Modelers**, Sining Lu, Guan Chen,
   Nam Anh Dinh, Itai Lang, Ari Holtzman, Rana Hanocka, 11/08/2025. Sustenta a raiz 1: time de
   agentes escrevendo Python de Blender, com BlenderRAG sobre a documentação da API, e código legível
   e editável como saída. *Confiabilidade:* alta — preprint com autoria institucional identificada e
   código público; sem revisão por pares declarada na página.
2. https://threedle.github.io/ll3m/ — **Página do projeto LL3M**, laboratório 3DL, Universidade de
   Chicago. Sustenta as três fases do pipeline (criação, refinamento automático, refinamento dirigido)
   e a edição de material por nós procedurais. *Confiabilidade:* média — página de autor, sem métrica;
   é demonstração, e a tratei como tal.
3. https://arxiv.org/abs/2508.14879 — **MeshCoder**, Bingquan Dai e outros, 20/08/2025. Sustenta o
   caminho inverso: nuvem de pontos vira script de Blender editável, decomposto em partes semânticas.
   *Confiabilidade:* alta como preprint; os números quantitativos não estão no resumo e não os usei.
4. https://arxiv.org/pdf/2601.12234 — **Proc3D**, Fadlullah Raji, Stefano Petrangeli, Matheus Gadelha,
   Yu Shen, Uttaran Bhattacharya, Gang Wu (Adobe), 21/01/2026. Sustenta o **Procedural Compact Graph**
   e a redução de 4 a 10 vezes no custo de contexto — a evidência central de `e2`. *Confiabilidade:*
   alta para a existência da representação; o fator 4-10× é alegação dos autores, sem replicação
   independente.
5. https://arxiv.org/abs/2604.26943 — **ProcFunc: Function-Oriented Abstractions for Procedural 3D
   Generation in Python**, Alexander Raistrick, Karhan Kayan, Jack Nugent, David Yan, Lingjie Mei,
   Meenal Parakh, Hongyu Wen, Dylan Li, Yiming Zuo, Erich Liang, Jia Deng (Princeton), 29/04/2026.
   Sustenta SF3 e `e2`: biblioteca desenhada para o VLM errar menos. *Confiabilidade:* alta como
   preprint de grupo consolidado; **o resumo não publica percentual**, e registrei a ausência.
6. https://arxiv.org/abs/2306.09310 — **Infinite Photorealistic Worlds using Procedural Generation
   (Infinigen)**, Alexander Raistrick e 14 coautores, CVPR 2023, 15/06/2023. Sustenta a linhagem do
   ProcFunc e a definição operacional de procedural usada neste mapa — cada asset gerado do zero por
   regras matemáticas aleatorizadas, sem fonte externa. *Confiabilidade:* alta — revisado por pares,
   código sob BSD.
7. https://github.com/img2threejs/img2threejs — **img2threejs**, 15,8 mil estrelas, 1,3 mil forks, v2.
   Sustenta o método de oito passes com comparação render × referência e o portão determinístico que
   gasta token só onde há julgamento. *Confiabilidade:* média — projeto aberto, método documentado,
   **sem número medido** de economia de token; tratado como evidência de método, nunca de economia.
8. https://github.com/img2threejs/img2threejs-showcase — **Vitrine do img2threejs**, 145 estrelas,
   20+ demonstrações, cada uma uma fábrica de `THREE.Group` em TypeScript. *Confiabilidade:* média, e
   com a ressalva da seção 8 sobre a diferença de estrelas entre este repositório e o principal.

**Medição — benchmark e verificação**

9. https://arxiv.org/abs/2606.01057 — **3DCodeBench**, Yipeng Gao, Lei Shu, Genzhi Ye, Xi Xiong,
   Ameesh Makadia, Meiqi Guo, Laurent Itti, Jindong Chen, 02/06/2026. A âncora quantitativa do mapa:
   12 VLMs, falhas por incompatibilidade de API, partes desconectadas mesmo em render bem-sucedido,
   test-time scaling ajudando, e a conclusão de que falta dado procedural de qualidade e sobra
   necessidade de ambiente de execução com feedback. *Confiabilidade:* alta — preprint CC-BY com
   plataforma pública e arena humana associada.
10. https://3dcodebench.com — **Placar do 3DCodeBench**. Sustenta os números usados em `e6` e `e9`:
    212 categorias, 13 mil objetos, GPT-5.5 com Elo 1167 e 87,3% de executabilidade, Gemini 3.1 Pro
    com Elo 1149 e 69,3%, executabilidade praticamente perfeita sob harness de agente, e a prioridade
    declarada de plausibilidade física sobre executabilidade. *Confiabilidade:* alta para os números
    publicados pelos próprios autores; sem auditoria externa.
11. https://arxiv.org/html/2605.18430v1 — **Text2CAD-Bench**, Liang Wang, Heng Meng, Zekai Xiang, Jin
    Liu, Pingyi Zhou, Litao Chen, Yongqiang Tang, 18/05/2026. Sustenta `e9.2`: 600 exemplos em quatro
    faixas, invalidez de 11,1% no nível 1 e de 68% a 93% no nível 3, sweep/loft/shell como operações
    que quebram, e modelos de domínio "executáveis mas geometricamente imprecisos". *Confiabilidade:*
    alta para a metodologia; os nomes de modelo e versões são autodeclarados.
12. https://arxiv.org/html/2608.09706v1 — **Test-Time Scaling for CAD Generation via Verifier-Free
    Consensus Selection**, Aaron Haag, Altay Kaçan, Bertram Fuchs, Oliver Lohse (Siemens Foundational
    Technologies), 10/08/2026. Sustenta `e7` e a retroação `e7.1`: consenso geométrico batendo o
    verificador do estado da arte (p ≤ 0,022), ganho de 1% a 10% em Chamfer sobre escolha aleatória e
    **platô em nove candidatos**. *Confiabilidade:* alta — reporta significância estatística, o que é
    raro nesta literatura.
13. https://artificialanalysis.ai/microevals/llm-ultimate-challenge-interactive-glsl-shader-art-1756340323607
    — **Microeval de arte GLSL interativa**, Artificial Analysis. Usada para sustentar uma **ausência**:
    16 modelos listados, nenhum placar numérico, apenas contagem de joinha (sete modelos com um voto),
    sem data na página. *Confiabilidade:* baixa como medição — e é por isso que este mapa não faz
    afirmação quantitativa sobre qualidade de shader gerado.
14. https://arxiv.org/abs/2602.17481 — **ShadAR: LLM-driven shader generation to transform visual
    perception in Augmented Reality**, Yanni Mei, Samuel Wendt, Florian Mueller, Jan Gugenheimer,
    19/02/2026. Sustenta que a geração de shader por linguagem natural já opera em tempo real em RA.
    *Confiabilidade:* média — **há contradição de venue** entre o registro do arXiv (ISMAR-Adjunct 2025)
    e o DOI da ACM (CHI 2026 Extended Abstracts), tratada na seção 8; e o resumo não traz estudo com
    participantes nem latência, de modo que não uso número desta fonte.
15. https://arxiv.org/abs/2503.11509 — **TikZero: Zero-Shot Text-Guided Graphics Program Synthesis**,
    Jonas Belouadi e coautores, ICCV 2025 (highlight), 14/03/2025. Sustenta que síntese de programa
    gráfico a partir de texto é linha estabelecida além do 3D — o mesmo movimento em figura técnica.
    *Confiabilidade:* alta — revisado por pares em conferência de primeira linha.

**Ferramenta — o procedural que já existe**

16. https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/
    — **SideFX e NVIDIA levam agentes por MCP ao Houdini 22**, 22/06/2026, keynote em Londres durante o
    SIGGRAPH 2026. Sustenta SF1 e `e6.1`: Apex Script Comfort Package, biblioteca curada, código puxado
    de exemplos reais, **validador que checa antes de rodar**, sem dependência contínua do LLM depois de
    gerado, e o status de sneak peek pelo SideFX Labs. *Confiabilidade:* alta — veículo especializado de
    longa data em CG, com relato de keynote; não é fonte primária do fabricante.
17. https://github.com/ahujasid/blender-mcp — **BlenderMCP**, Siddharth Ahuja, 28,2 mil estrelas, 2,6
    mil forks, conectando Claude Desktop, Claude Code, Cursor, VS Code, Codex, OpenCode e Antigravity.
    Sustenta a adoção do padrão de ferramenta-servidor no lado aberto. *Confiabilidade:* alta para as
    contagens, que são do próprio GitHub; estrela não é uso, e trato como proxy.
18. https://blog.adobe.com/en/publish/2026/07/21/adobe-substance-3d-unveils-new-innovations-deliver-faster-workflows-openpbr-everywhere-digital-twins-scale
    — **Novidades do Substance 3D**, Adobe, 21/07/2026. Sustenta que o procedural clássico segue se
    aprofundando: Shape Splatter v2, nós de campo de distância assinado dentro do grafo e nó de
    visualizador 3D no Designer 16. *Confiabilidade:* alta como fonte primária do fabricante, com o
    viés esperado de material de lançamento.
19. https://github.com/GraphiteEditor/Graphite — **Graphite**, 27,2 mil estrelas, 1,3 mil forks, alfa.
    Sustenta que motor procedural por nós roda hoje em navegador via Rust e WebAssembly, e que o
    interesse por isso é grande. *Confiabilidade:* alta para contagens; alfa é alfa.
20. https://www.cgchannel.com/2026/04/canva-makes-motion-graphics-and-animation-app-cavalry-free/ —
    **Canva torna o Cavalry gratuito**, 17/04/2026. Sustenta `e13.2`: compra pela Canva por volta de
    março de 2026, versão 2.7 gratuita em 16/04/2026, uso comercial liberado para artista individual,
    Canva Enterprise para estúdio, e a descrição do produto como animação procedural. *Confiabilidade:*
    alta — veículo especializado, com preço anterior (£192/ano) e datas verificáveis.
21. https://rive.app/features — **Rive**. Sustenta `e13`: formato com estado, máquinas de estado como
    "o contrato entre design e engenharia", runtimes para web, Unity, Unreal, Apple, Android, React
    Native, Flutter, Framer, Webflow e Wix Studio, com Spotify, LinkedIn e Duolingo em estudo de caso.
    *Confiabilidade:* média — é material do fabricante; usei a lista de plataformas e de clientes, que
    são verificáveis, e **não** usei as alegações de desempenho, que não têm método publicado.
22. https://github.com/ManimCommunity/manim — **Manim Community Edition**, 40,8 mil estrelas, 3,1 mil
    forks. Sustenta a escala real da comunidade de animação programática. *Confiabilidade:* alta.
23. https://github.com/3b1b/manim — **Manim (3Blue1Brown)**, 93,7 mil estrelas, 7,7 mil forks.
    Sustenta o mesmo, e a distinção entre os dois repositórios que a busca confundia. *Confiabilidade:*
    alta.
24. https://github.com/processing/p5.js/blob/main/AI_USAGE_POLICY.md — **Política de uso de IA do
    p5.js**. A fonte de `e4` e de SF7: contribuição tem de vir de humano que entende e se
    responsabiliza; proibido escrever PR inteiro ou bloco grande, proibido deixar a IA decidir
    implementação; obrigatório explicar cada linha, testar, assumir os bugs e **declarar as ferramentas
    de IA usadas na descrição do PR**; com a justificativa de que o modelo não pode ser responsabilizado
    e de que contribuir é um empreendimento que exige "curiosidade, lentidão e comunidade".
    *Confiabilidade:* alta — é a norma vigente do projeto, no repositório oficial.

**Base de execução — a mídia como regra**

25. https://github.com/gpuweb/gpuweb/wiki/Implementation-Status — **Status de implementação do WebGPU**,
    grupo GPU for the Web (W3C). Sustenta a raiz 4 com versão por navegador e plataforma: Chrome/Edge
    113 em Mac, Windows e ChromeOS e 121 em Android; Firefox 141 em Windows, 145 em macOS Apple Silicon
    e 147 no restante; Safari 26 em macOS, iOS/iPadOS e visionOS. *Confiabilidade:* alta — é a fonte
    primária do grupo de trabalho.
26. https://web.dev/blog/webgpu-supported-major-browsers — **WebGPU suportado nos principais
    navegadores**, web.dev. Confirma o suporte nos quatro navegadores. *Confiabilidade:* alta para o
    fato do suporte; **não menciona status de Baseline nem data**, e é por isso que este mapa não
    afirma nenhum dos dois — ver seção 8.
27. https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language — **TSL, a linguagem de shading do
    Three.js**. Sustenta SF4 e `e12`: "abstração de shader baseada em nós, escrita em JavaScript",
    capaz de "codificar em saídas diferentes, como WGSL/GLSL — WebGPU/WebGL", mantendo o renderizador
    agnóstico. *Confiabilidade:* alta — documentação do próprio projeto.

**Direito**

28. https://legalblogs.wolterskluwer.com/copyright-blog/the-prompter-as-copyright-author-lessons-from-munich/
    — **"O 'prompter' como autor? Lições de Munique"**, Kluwer Copyright Blog. Sustenta a raiz 3: AG
    München, sentença de **13/02/2026**, processo **142 C 9786/25**, negando proteção a três logos
    gerados por IA, inclusive o de prompt com 1.700 caracteres; e a abertura decisiva — há proteção
    quando o humano exerce "influência concreto-formativa", estabelecendo arcabouço que restringe as
    escolhas da máquina, com o vitral de Gerhard Richter como paradigma. *Confiabilidade:* alta —
    análise especializada de decisão identificada, com número de processo e data.
29. https://hedman.legal/articles/copyright-and-privacy-implications-of-using-artificial-intelligence-to-generate-code/
    — **Implicações de direito autoral e privacidade no uso de IA para gerar código**, 05/06/2024.
    Sustenta `e10.2`: código gerado só por IA não é protegido, a proteção surge da contribuição humana
    no conjunto, e o risco de reprodução de código de terceiro persiste — com destaque para contaminação
    por licença copyleft. *Confiabilidade:* média-alta — escritório especializado; é análise, não
    decisão judicial, e a data é anterior a Munique.
30. https://www.copyright.gov/ai/ — **Copyright and Artificial Intelligence**, US Copyright Office.
    Sustenta o pano de fundo institucional: relatório em partes, com a Parte 2 (29/01/2025) sobre
    protegibilidade de saídas de IA generativa, e a linha de decisões de registro (*Zarya of the Dawn*,
    *Théâtre D'opéra Spatial*, *SURYAST*). *Confiabilidade:* alta como fonte primária; a página é índice,
    e as conclusões detalhadas estão nos relatórios, que **não abri** — por isso não cito frase do
    escritório, só a existência e as datas dos documentos.

**Trabalho e ensino**

31. https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/
    — **State of the Game Industry 2026**, GDC. A fonte de `e5` e de toda a seção "quem perde": mais de
    2.300 respondentes, 52% dizendo que a IA generativa impacta negativamente o setor, **64% entre
    artistas visuais e técnicos**, 28% demitidos nos últimos dois anos. *Confiabilidade:* alta para
    pesquisa de opinião com amostra grande e declarada; é autorrelato de percepção, não medida de
    emprego — e os números de variação de vaga que circulam em agregadores **não estão aqui** e não
    entraram no mapa.
32. https://revista.uemg.br/sciasedcomtec/article/view/7896 — **Imagens [de]generativas: o ensino de
    artes visuais e design gráfico face à inteligência artificial**, Marcos N. Beccari (UFPR), Leonardo
    Marques Kussler (UERGS), João Victor Diehl de Oliveira (UFPR), SCIAS Educação, Comunicação e
    Tecnologia, v. 5, n. 2. A nota brasileira de `e5.1` e SF7: a narrativa de democratização criativa
    como encobrimento de automação de viés e de precarização, e a alienação do ato criativo como objeto
    de discussão em sala. *Confiabilidade:* alta como artigo em periódico revisado; é argumento
    teórico-crítico, sem dado empírico próprio, e o texto é anterior à geração de código gráfico por IA
    — uso-o como posição organizada do campo, não como evidência do fenômeno.

## 12. Anexo — o levantamento bruto

Nada de corte silencioso. Aqui está tudo o que foi levantado e não coube acima: os efeitos
removidos pela bateria da seção 7, os candidatos a raiz recusados, as buscas que não deram em nada,
os números que descartei, os caminhos abandonados e a saída integral do verificador.

### 12.1 Efeitos removidos pela bateria da seção 7

**REMOVIDO — "A IA passa a projetar o próprio gerador de geradores, escrevendo DSLs gráficas novas"**
(era efeito de 1ª ordem da raiz 2).
*Enunciado original:* "Modelos passam a propor linguagens de domínio específico para gráficos,
otimizadas para si mesmos, e a DSL gráfica deixa de ser desenhada por humano."
*Por que caiu:* teste da causa solta. Se isto acontecer, acontece porque síntese de programa avançou
em geral — é o mesmo mecanismo que faria um modelo propor uma DSL para qualquer domínio —, e não
porque o render entrou no laço. Não deriva desta raiz. Poderia ser reconectado à raiz 1, mas ali
viraria um terceiro nível sem troca de ator, o que a regra de parada proíbe.
*Onde ele ainda faz sentido:* como pergunta para a aula. O ProcFunc é uma biblioteca desenhada por
humanos **para** a máquina; o passo seguinte — desenhada **pela** máquina — é plausível e não tem
evidência.

**REMOVIDO — "Reguladores criam uma categoria de obra gerada por regra"** (era efeito de 1ª ordem da
raiz 3).
*Enunciado original:* "Reguladores criam uma categoria jurídica própria para obra gerada por
programa, distinta de obra gerada por prompt."
*Por que caiu:* é literalmente um dos efeitos que o método proíbe — "reguladores criam categoria/lei
nova" sem nome do regulador, sem instrumento e sem mecanismo. Tentei nomear e não consegui: não
achei nenhuma consulta pública, projeto de lei ou diretriz em curso que trate de código gráfico
gerado. Sem ator nomeado, não entra. O que sobrou desse território está em `e10.2.1`, que tem ator
(o comprador corporativo) e mecanismo (indenização contratual).

**REBAIXADOS, com o valor antes e depois** — o registro completo está em 7.8 e não repito aqui:
`e1` (sinal), `e1.2.1` (prazo), `e5.1` (confiança), `e6.1` (prazo), `e10` (confiança e prazo),
`e12` (sinal), `e14` (prazo e confiança).

### 12.2 Candidatos a disrupção-raiz recusados, e o motivo

- **Geração procedural clássica.** Recusada como raiz: adoção em maioria desde os anos 1990 em VFX e
  desde 2021 no Blender; Substance Designer é padrão desde 2010. Tratada como contexto na seção 3.
- **Creative coding.** Recusada: Processing tem 25 anos, p5.js chegou à versão 2.0. Entra na roda
  como **ator**, em `e4`, não como ruptura.
- **Assistente de código genérico.** Recusado: melhoria sustentadora. Faz o mesmo, melhor e mais
  barato.
- **Text-to-3D nativo por difusão.** Recusado por recorte: é o tema 12 e, na parte de captura, o tema
  10. Entra como a alternativa contra a qual o procedural se mede, em 5.3 e na seção 10.
- **WaveFunctionCollapse, ruído, geradores de mapa.** Recusados: técnicas consolidadas, com
  implementação em toda linguagem. Contexto.
- **MCP como padrão.** Considerado e recusado como raiz autônoma: é o **veículo** da raiz 2, não a
  ruptura. A ruptura é o oráculo de execução; MCP é um jeito de entregá-lo, e amanhã pode ser outro.
- **"Vibe coding" aplicado a shader.** Considerado e recusado: é modo de interação, não ruptura de
  prática, e a única evidência que achei (AI Co-Artist, com GPT-4) é de sistema, não de adoção.

### 12.3 Premissas assumidas por falta de entrevista

Esta rodada foi não interativa. O bloco `briefing:` cobriu horizonte (2031), público (quem projeta
mídia e interação), recorte (global com nota sobre o Brasil), descartado (o que já é comum em
produto de massa), disrupção suspeita (nenhuma), viés (neutro), zona de interesse (Criação e
plataforma) e o falseador (evidência de adoção além da maioria inicial, ou de que a tecnologia só
melhora o que existe). Por isso **não houve rebaixamento geral de confiança**.

O que o briefing **não** cobriu, e que assumi:

1. **"Quem projeta mídia e interação" inclui o artista técnico e o desenvolvedor de front-end 3D.**
   Se o público fosse só designer gráfico, `e6`, `e8` e `e9` seriam menos relevantes e `e13` subiria.
2. **A nota sobre o Brasil é sobre parque de aparelhos e sobre formação**, não sobre mercado de
   trabalho brasileiro — para o qual eu não achei dado equivalente ao da GDC. Isto é uma lacuna
   declarada.
3. **"Ideias óbvias a excluir: as que servem para qualquer tema"** foi aplicado literalmente, e é o
   que derrubou o efeito de regulador genérico em 12.1.
4. **O falseador foi aplicado às quatro raízes** na seção 7.4. Nenhuma passou de "maioria" na escala
   de difusão; a que chegou mais perto de "só melhora o que existe" foi a raiz 4, salva pela mudança
   de **o quê** trafega, não de quanto.

### 12.4 Buscas que não deram em nada

- **"Adoção de geração procedural por IA em produção"** — em inglês e português, com variações por
  estúdio, pipeline e asset. **Nada.** Não existe caso publicado de estúdio entregando asset como
  script. É a maior lacuna deste mapa e a razão de tantas confianças médias na raiz 1.
- **Comparação medida de peso e tempo de carga entre 3D procedural e malha/splat na web.** Busquei
  por tamanho de arquivo, kilobytes contra megabytes, desempenho em jogo web e em celular. Achei
  material sobre compressão de splat — de gigabytes para poucos megabytes em trabalhos de otimização
  — mas **nenhuma comparação direta** contra procedural. Por isso `e12` ficou com sinal médio e
  `e12.2` com sinal fraco, e por isso o experimento da seção 10 mede exatamente isso.
- **Benchmark de geração de shader com placar.** Descrito na seção 3.2 e na 8. Não existe.
- **Reação da comunidade do Shadertoy a shader gerado por IA.** Busquei por backlash, por política de
  submissão e por discussão de comunidade. **Nada utilizável** — o que achei foi material genérico
  sobre vibe coding. Se existe a discussão, ela está em fórum ou Discord que a busca não alcança, e
  seria um ótimo levantamento para um aluno fazer à mão.
- **Dado brasileiro sobre emprego em arte técnica e 3D.** Não achei equivalente nacional da pesquisa
  da GDC. A nota brasileira do mapa ficou, portanto, apoiada em parque de aparelhos e em crítica
  acadêmica de ensino, não em dado de mercado.
- **Consumo de energia e bateria de geração procedural no cliente.** Nada. É o buraco do eixo
  ecológico registrado em 5.2.
- **Cavalry e IA.** Busquei se o Cavalry ganhou geração por IA depois da compra pela Canva. Não
  achei. O efeito `e13.2` é sobre **preço e distribuição**, não sobre IA dentro da ferramenta — e
  isso está enunciado assim de propósito.

### 12.5 Números que apareceram e que eu descartei

| Número | De onde veio | Por que descartei |
|---|---|---|
| "-67% em vagas de concept artist", "-71% em environment artist júnior", "de 50 para 12 artistas" | Dois agregadores sobre a pesquisa da GDC 2026 | Nenhum cita fonte primária; não estão na página oficial da GDC, que eu abri |
| "ManimCommunity/manim: 3.077 estrelas" | Resumo de busca | Errado por uma ordem de grandeza; o real é 40,8 mil, conferido abrindo o repositório |
| "BlenderMCP: 13.386 estrelas" | Resumo de busca | É de um **fork**; o original tem 28,2 mil |
| "WebGPU virou Baseline em janeiro de 2026" | Agregador | Nenhuma das duas fontes primárias que abri menciona Baseline nem essa data |
| "65% das novas aplicações web que entregam 3D usam WebGPU" (Web Almanac 2025) | Resumo de busca | Não abri o Web Almanac; sem a fonte aberta, não entra |
| "Rive: produção 4× mais rápida, arquivos até 90% menores" | Resumo de busca sobre comparações com After Effects/Lottie | Alegação de marketing sem método publicado; não usei, mesmo tendo aberto a página do fabricante |
| "80% das empresas de desenvolvimento de software usarão essas tecnologias até 2026" | Resumo de busca sobre currículo e IA | Projeção sem fonte rastreável; irrelevante para o tema |
| "p5.js 2.0 lançado em abril de 2025" | Resumo de busca | A data específica não foi confirmada na fonte que abri; o documento diz apenas "em 2025" |

### 12.6 Caminhos abandonados

**A roda começou com três raízes, não quatro.** A raiz 4 (mídia como regra) estava, na primeira
versão, como um ramo de efeitos da raiz 1 — o que estava errado por dois motivos: ela acontece sem
IA nenhuma (Rive e Cavalry são prova disso), e ela tem um freio próprio, o aparelho de entrada, que
não tem nada a ver com quem escreve o gerador. Promovida a raiz depois do teste da causa solta.

**Considerei e abandonei um recorte "por setor".** Fazer a roda por jogo, publicidade, web e cinema
daria um mapa mais legível e mais raso: cada setor repetiria os mesmos quatro mecanismos com nomes
diferentes. O modo escolhido — a partir da inovação, não do setor — foi o do briefing, e a seção 9
recupera o corte setorial onde ele é útil.

**Tentei ancorar a raiz 2 em shader e não deu.** Era o caminho mais bonito: shader é o objeto mais
puramente procedural do tema, tem comunidade (Shadertoy), tem tradição e é onde o creative coding
mora. Mas não há medição. A raiz 2 acabou ancorada em 3D e CAD, que é onde os números estão, e o
shader ficou como sinal fraco (SF4) e como sistema de pesquisa (ShadAR, AI Co-Artist).

**Quase escrevi um efeito sobre "a obra vira o código" no sentido estético**, que é a terceira
pergunta do enunciado do tema — se tudo que é visual pode ser expresso como programa curto, a obra
vira o código, e um mundo inteiro cabe num prompt. Está fora da roda porque eu não consegui escrever
o mecanismo sem cair em ensaio: a proposição é interessante e não é verificável no horizonte de 2031.
Fica registrada aqui, e é o material mais promissor para a discussão em sala — encosta em `e11`
(reivindicar a regra em vez da imagem) pelo lado jurídico, sem precisar do lado estético.

**Não desenvolvi a ponte com WaveFunctionCollapse e com os geradores de mapa**, apesar de eles
estarem no enunciado do tema. Motivo: são técnicas maduras, e a pergunta "a IA escreve o gerador?"
aplicada a elas dá a mesma resposta que dá para o resto — sim, e o laço de verificação é que decide
se presta. Não acrescentaria mecanismo novo.

### 12.7 Material do enunciado do tema que este mapa não usou

O enunciado listava, do levantamento da turma: `WaveFunctionCollapse`, `Fantasy-Map-Generator`,
`noise-rs`, `Pixel Composer`, `material-maker`, `nannou`, `css-doodle`, `glisp`, `curv`, `SHADERed`,
`rust-gpu`, `triangula`, `msdfgen`, `pixelgen`, `satori` e `Remotion`. **Não abri nenhum destes**, e
por isso nenhum é citado como fonte. Eles descrevem bem o tamanho e a vitalidade do campo do creative
coding, que este mapa trata como maduro na seção 3.4 — e é exatamente por serem muitos e maduros que
eles sustentam a recusa, não a raiz. O `manim-web-mcp`, citado como wildcard no enunciado, não foi
aberto: o que abri foram os dois repositórios do Manim, para acertar a escala, e a evidência de "IA
dirigindo ferramenta de animação" ficou com o caso mais bem documentado que achei, que é o Houdini 22.

### 12.8 Saída integral do verificador

Comando executado:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano/14-gerar-geradores-design-procedural-e-creative-coding-com-ia/tendencia-gerar-geradores-design-procedural-e-creative-coding-com-ia.md --links
```

Saída:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 25 (frontmatter diz 25)
efeitos ordem 3: 17 (frontmatter diz 17)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e1.2.1', 2032), ('e15.1.1', 2032)]
confiança ordem 1: alta 2 · media 9 · baixa 4
confiança ordem 2: alta 0 · media 16 · baixa 9
confiança ordem 3: alta 0 · media 0 · baixa 17
links da seção 11: 32/32 respondem (frontmatter diz fontes: 32)
RESULTADO: ok
```

Leitura da saída, item a item, porque o método pede os números e não a palavra "passou":

- **frontmatter 18/18** e **títulos 12/12** — o documento está no formato da disciplina, sem desvio.
- **raízes 4, ordens 15 / 25 / 17** — batem com o frontmatter. Volume dentro da regra: de 3 a 6
  efeitos de 1ª ordem por raiz (5, 4, 2 e 4), de 1 a 3 filhos por efeito e de 1 a 2 netos. A raiz 3
  tem só dois efeitos de 1ª ordem, abaixo do piso de três — **e isso é deliberado**: é a raiz mais
  frágil do mapa, perdeu um efeito na bateria (o do regulador genérico, em 12.1) e eu preferi deixar
  o buraco visível a preenchê-lo com efeito inventado.
- **prazo > horizonte em ordens 1 e 2: 0** — nenhum efeito próximo escapou da janela.
- **prazo > horizonte em ordem 3: 2 — `e1.2.1` (2032) e `e15.1.1` (2032)** — os dois estão declarados
  como fora da janela do mapa na prosa de 5.1, e `e1.2.1` teve o prazo empurrado de 2030 para 2032
  pela bateria, com a classe de referência registrada em 7.3.
- **confiança: 1ª ordem 2 alta / 9 média / 4 baixa; 2ª ordem 0 / 16 / 9; 3ª ordem 0 / 0 / 17** — a
  distribuição cai com a ordem, como exigido. As duas únicas confianças altas descrevem coisa já
  medida, não previsão; a terceira ordem inteira está em baixa.
- **links 32/32 respondem** — nenhuma fonte morta, e o número bate com o campo `fontes` do
  frontmatter. Todas as 32 foram abertas nesta rodada; as duas afirmações que não sobreviveram à
  abertura da fonte primária estão na seção 8, item 10.
- **RESULTADO: ok** — sem problema pendente.
