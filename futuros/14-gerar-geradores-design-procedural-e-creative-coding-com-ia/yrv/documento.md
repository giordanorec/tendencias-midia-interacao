---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: yrv
zona_de_interesse: "Criação e plataforma"
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 6
tecnologias_citadas: [img2threejs, Three.js, TypeScript, WebGL, WebGPU, WGSL, GLSL, HLSL, Blender, "Blender 5.0", "geometry nodes", "shader nodes", "B-meshes", Graphite, Graphene, Cavalry, "Cavalry 2.7", Canva, "Affinity by Canva", Rive, Lottie, Figma, "Figma Code Layers", "Figma Motion", "Figma Shader Fills", "Figma Generative Plugins", "Figma Agent Skills", Houdini, "Houdini 22", "Apex Script", "Apex Script Comfort Package", "SideFX Labs", Copernicus, "Unreal Engine 5.8", "Unreal MCP", "PCG framework", "PCG Primitives", MCP, "Claude Connectors", "Claude Code", "Autodesk Fusion", SketchUp, Ableton, Splice, "Resolume Arena", "Resolume Wire", Adobe, Infinigen, ProcFunc, LL3M, SceneCraft, "3D-GPT", "CAD-Recode", CadQuery, OpenSCAD, Text2CAD, Cadrille, "CAD-Coder", MultiMat, "Substance-style node graphs", "3DCodeBench", "WorldCoder-Bench", "P3D-Bench", "ArtifactsBench", "AI Co-Artist", Shadertoy, OpenProcessing, Processing, "p5.js", manim, "manim-mcp", nannou, "css-doodle", glisp, curv, SHADERed, "rust-gpu", "noise-rs", WaveFunctionCollapse, "Fantasy-Map-Generator", "Pixel Composer", "material-maker", triangula, msdfgen, Remotion, satori, Meshy, "Meshy 6", Tripo, "Smart Mesh P1.0", "Gaussian splatting", "3DGS", SPZ, KSPLAT, SOG, "KHR_gaussian_splatting", glTF, "Genie 3", "Project Genie", "Google AI Ultra", sLua, Lua, GitClear, GitKraken, "Claude Opus 4.7", "Claude Sonnet 4.6", "GPT-5.5", "GPT-5.4", "Gemini 3.1 Pro", "Gemma 4", "DeepSeek V4-Flash", "Qwen 3.6-Plus", "Kimi K2.5", "MiniMax M2.7", "Thaler v. Perlmutter", "US Copyright Office"]
fontes: 27
confianca: media
experimento: "A ordem de mudança tardia — a turma produz o MESMO objeto por três rotas (malha gerada por modelo de difusão/3D generativo; código procedural escrito por IA; grafo de nós montado à mão) e só DEPOIS de entregue recebe uma ordem de alteração que nenhuma das rotas antecipou ('a cadeira agora tem cinco pernas, precisa caber em 200 kB e o cliente quer ver a regra'); mede-se bytes entregues, número de RECOMEÇOS do zero, quantas alterações foram possíveis sem regerar, e o tempo até um terceiro que não participou aceitar o resultado — a hipótese sob teste não é qualidade, é CUSTO DE MUDAR DEPOIS"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

Este mapa parte de uma correção. A frase que organiza o tema na disciplina — *a IA passou a escrever
o gerador* — é verdadeira, mas em 2026 ela já não é a pergunta. A pergunta virou **o que acontece
quando escrever o gerador fica barato e verificar o gerador continua caro**, porque é exatamente
esse o retrato que três medições independentes, todas de maio e junho de 2026, produziram.

No **3DCodeBench** (arXiv 2606.01057, 31/05/2026, Google DeepMind e USC), doze modelos de visão e
linguagem escrevem código Blender para 212 categorias de objeto, com scripts de **387 linhas de
mediana**. A taxa de *executabilidade* — o script roda sem erro — chega a **0,910** com o Claude
Opus 4.7 e sobe de **0,702 para 0,974 (+27,2 pontos)** quando o modelo pode ver o resultado e
tentar de novo. Escrever programa gráfico que executa deixou de ser o gargalo. O gargalo é o que
vem depois: os autores registram que os modelos "frequentemente produzem partes desconectadas e
alinhamentos estruturais incorretos, revelando uma falta crítica de compreensão do mundo físico".

No **WorldCoder-Bench** (arXiv 2606.01869, 08/06/2026, CASIA e Huawei Noah's Ark), cuja unidade de
avaliação é um mundo Three.js inteiro e executável, com **2.026 tarefas**, o melhor sistema
(GPT-5.4) alcança **27,8% de cobertura de verificação** no conjunto principal e **19,9%** na versão
robusta. Os dois modos de falha dominantes não são gráficos: **deriva do esquema de estado (42,8%)**
e **cadeias de interação quebradas (40,8%)**, juntos **83,6%** das falhas; violação de física
responde por **0,4%**. E um achado que vale por um método: a nota calculada pelo que se vê no DOM é
**essencialmente não correlacionada** com a correção do estado interno — Kendall τb de **−0,02** em
1.434 pares modelo-tarefa. *Parece certo* e *está certo* deixaram de ser a mesma medida.

No **P3D-Bench** (arXiv 2606.11152, 09/06/2026, Universidade de Nanquim e Envision), que avalia
geração paramétrica em quatro linguagens de saída — JSON mínimo, OpenSCAD, CadQuery e Three.js —, o
melhor modelo em montagem alcança **~0,80 de similaridade semântica** e **~0,35 de similaridade
geométrica**. Em uma frase: o modelo acerta *o que* é a coisa e erra *as medidas* dela.

Ao lado disso, três movimentos de plataforma datados, e nenhum deles é um modelo novo:

- **28 de abril de 2026** — a Anthropic publica o *Claude for Creative Work*, nove conectores para
  ferramentas criativas (Ableton, Adobe, Affinity by Canva, Autodesk Fusion, Blender, Resolume
  Arena e Wire, SketchUp, Splice), com a tese enunciada sem rodeio: *"Claude Code pode escrever
  scripts, plugins e sistemas generativos para o software que você já usa."*
- **22 de junho de 2026** — no keynote do Houdini 22, em Londres, a SideFX apresenta o *Apex Script
  Comfort Package*: um servidor MCP que expõe a sintaxe e os exemplos do Apex Script a assistentes,
  **com um validador que confere o código gerado antes da execução**. Na demonstração, o assistente
  escreveu mais de **300 linhas** de componentes de rig. É *sneak peek* para o canal experimental
  (SideFX Labs), não recurso de produção.
- **Unreal Engine 5.8** — a documentação oficial do Unreal MCP com PCG estabelece que "o
  carregamento da skill de PCG é parte obrigatória da configuração da sessão", porque sem ela o
  modelo "vai frequentemente: entender mal os conceitos de PCG, complicar demais as soluções, usar
  mal nós ou parâmetros". O recurso é marcado como **experimental** e a documentação insiste que o
  fluxo seja de "colaborações supervisionadas".

Há um quarto fato, e é o que impede este mapa de virar entusiasmo: **o dinheiro está apostando no
outro lado**. Em **21 de julho de 2026** a Meshy fechou uma **Série B de US$ 400 milhões a US$ 1,5
bilhão** de avaliação, com 12 milhões de usuários registrados e mais de 100 milhões de modelos
gerados. A Meshy gera **malha**, não programa. E em **29 de janeiro de 2026** o Google abriu o
*Project Genie* — mundos interativos gerados quadro a quadro — para assinantes do AI Ultra nos EUA,
com limite declarado de **60 segundos** por geração. A disputa entre *gerar o pixel* e *gerar o
programa* não está decidida, e quem tem mais capital hoje está do lado do pixel.

Três disrupções-raiz saem daí, e nenhuma delas é "a IA melhorou":

1. **O entregável do designer deixa de ser o arquivo e passa a ser a regra mais o critério de
   aceitação da regra.** O que se perde de valor não é desenhar: é a autoria manual do gerador — a
   competência escassa de montar o grafo, o shader, o sistema. A porta de entrada é mercado novo
   (quem nunca abriu o Houdini) e a baixa do mercado (props de fundo, variação descartável).
2. **A ferramenta procedural deixa de ser operada e passa a ser dirigida — e o que o fabricante
   vende passa a incluir o pacote de contexto e o validador.** O que se perde de valor é o
   conhecimento de interface: saber onde fica o nó. A porta de entrada é mercado novo (quem não
   abre a ferramenta) e a baixa (setup repetitivo).
3. **A representação da entrega vira decisão econômica explícita — programa, malha, splat ou vídeo
   — e o programa ganha onde o pixel não cabe.** O que se perde de valor é a cadeia do
   asset-como-arquivo (retopologia, compressão, marketplace) no segmento descartável. A porta de
   entrada é a baixa do mercado: web, móvel e óculos.

**Sobre o Brasil**, uma nota honesta: não encontrei medição brasileira deste tema. A única fonte
nacional que abri — o relatório da Reglab sobre IA generativa na indústria criativa brasileira,
publicado em 19/05/2026 — é **qualitativa, com sete entrevistados**, e os próprios autores declaram
que "os resultados não são generalizáveis para toda a indústria criativa". O que se pode dizer sem
inventar é estrutural, não estatístico: o Brasil produz mídia e interação sob restrição de banda e
de dispositivo, e a raiz 3 deste mapa — o programa ganhando onde o pixel não cabe — é a que mais
fala com essa restrição. Registro isso como hipótese não verificada, não como achado.

**O que este mapa não conseguiu fazer:** não achei nenhuma medição pública de adoção de "IA
escrevendo gerador" em estúdio de produção — nem número de estúdios, nem percentual de pipeline.
Todos os números acima são de *benchmark* ou de *plataforma*, e essa é a maior fragilidade
declarada aqui. A seção 7 volta a isso.

## 2. O tema

**O tema em uma frase.** Produzir a **regra que produz o artefato** em vez do artefato — e o que
muda quando é a IA que escreve essa regra, entregando código executável, editável e legível em vez
de pixels, malhas ou splats.

**O que este mapa NÃO trata** (a fronteira, respondida com o bloco "Fronteira com os vizinhos" do
material da disciplina e assumida por mim na ausência de resposta humana):

- **Não é captura de realidade.** Reconstruir uma cena a partir de fotografia ou varredura, como
  dado e não como regra, é o tema 10. Aparece aqui só quando a comparação de custo é o argumento.
- **Não é mídia sintética como mídia.** Gerar vídeo e imagem para serem assistidos é o tema 12.
  Aparece aqui só como o lado oposto da disputa de representação.
- **Não é geração procedural clássica.** Ruído, *WaveFunctionCollapse*, L-systems, PCG em jogos e
  creative coding em Processing/p5 são **substrato maduro** deste mapa, e a Fase 2 explica por quê.
  Estão na seção 3; não são disrupção-raiz.
- **Não é produtividade de programação em geral.** "A IA escreve código" não é o tema; o tema é a
  IA escrevendo **programas gráficos cuja saída é a obra**.
- **Não é agentes autônomos operando por conta própria.** O que a documentação do Unreal chama de
  "colaborações supervisionadas" é o recorte; o agente que despacha trabalho sozinho é o tema 1.

**Horizonte:** 2031. **Público:** quem projeta mídia e interação. **Recorte:** global, com a nota
sobre o Brasil acima. **Viés:** neutro. **Descartado de início:** o que já é comum em produto de
massa — a régua da disciplina, aplicada na Fase 2 e registrada na seção 12.

**O falsificador declarado.** Este mapa cai se aparecer (a) evidência de que a adoção já passou da
maioria inicial na curva de Rogers — isto é, medição de uso corrente em estúdios, não de
disponibilidade de ferramenta —, ou (b) evidência de que a tecnologia não rompe nada, só acelera o
que já se fazia. O item (b) é o teste mais perigoso para este tema, porque **geração procedural
existe há quarenta anos** e é fácil confundir "mais rápido para montar o mesmo grafo" com "outra
coisa". A Fase 2 foi desenhada exatamente contra essa confusão, e reprovou seis candidatas.

**Uma suposição minha, declarada.** A pergunta 8 da entrevista (quantas disrupções-raiz) não foi
respondida. Adotei **três**. Com duas, a disputa de representação teria de virar consequência da
primeira raiz, e ela tem mecanismo próprio (economia de entrega, não capacidade de modelo); com
quatro, a quarta candidata seria "o gerador como objeto jurídico", que não passa no teste de sinal
datado e por isso está na seção 6, como sinal fraco.

## 3. Onde isso está hoje

Esta seção é o âncora no presente: o que **já existe**, verificado nesta sessão, em 17/09/2026. Não
é previsão. Tudo aqui tem link na seção 11, e nada aqui entrou na roda como efeito futuro.

### 3.1 O substrato maduro — e é maduro mesmo

**Geração procedural e creative coding não são novidade, e este mapa não finge que são.** O
`Infinigen` de Princeton gera mundos naturais fotorrealistas inteiramente por regras aleatorizadas
desde 2023. O framework de PCG da Unreal é documentação de produto. Os *geometry nodes* do Blender
são currículo de iniciante. Shadertoy e OpenProcessing são comunidades com mais de uma década.
Nada disso entra como disrupção — entra como **o chão sobre o qual as três raízes pisam**.

Duas peças de infraestrutura fecharam nesse mesmo período, e importam porque **removem uma desculpa**:

- **WebGPU passou a existir em todos os navegadores principais.** Chrome desde a versão 113 (2023),
  Safari 26.0 (setembro de 2025), Firefox 141 no Windows (julho de 2025) e 145 no macOS, e Edge. O
  que falta é Linux, "ainda em implantação", e Android, que a Mozilla esperava endereçar "em algum
  momento de 2026". O shader deixou de ser território de plugin.
- **A ferramenta procedural ficou de graça.** Em meados de abril de 2026 a Canva — que havia
  comprado o Cavalry da Scene Group cerca de seis semanas antes — tornou a versão completa do
  Cavalry **gratuita para artistas individuais, inclusive para uso comercial**, onde antes era
  necessária uma assinatura Pro de £192/ano; estúdios precisam de conta Canva paga. O Cavalry é
  animação **procedural** com duplicador, rigging, espalhamento e instanciação — ou seja, o
  pensamento por regra deixou de ter preço de entrada no motion design.

E o **Graphite**, o editor 2D open-source cujo modelo é um grafo procedural único avaliado em tempo
real, continua em **alpha**: a resenha do LWN, de 26/12/2025, registra que os builds de setembro de
2025 já traziam vetor e compositor por nós, mas que o raster segue experimental, que o app desktop
em Tauri foi abandonado por "uma incompatibilidade técnica intransponível" e que não há linha do
tempo nem quadros-chave. O próprio site declara a ambição na frase certa — "obra como **dado**, não
pixels", com camadas e nós sendo "duas visões equivalentes e intercambiáveis da mesma estrutura de
documento" — e promete animação por quadros-chave para **o fim de 2026**. Uma promessa é sinal
fraco. Registro como promessa.

### 3.2 O que efetivamente mudou nos últimos 24 meses

**A IA escrevendo o gerador saiu do artigo isolado e virou linha de pesquisa com banco de provas.**
Antes havia demonstrações (`3D-GPT`, `SceneCraft`, `LL3M` — todos gerando script Blender); agora há
**três benchmarks publicados em cinco semanas**, cada um medindo uma coisa diferente, e todos os
três chegando à mesma conclusão pelo avesso: o código executa, e a correção não acompanha.

- **3DCodeBench** — 212 categorias, 26 mil prompts multimodais, 12 modelos de fronteira, scripts de
  mediana **387 linhas**. Executabilidade de **0,910** (Claude Opus 4.7) e **0,906** (GPT-5.5) em
  turno único; **0,974 agregada** com múltiplos turnos. Um dos dois gargalos identificados é
  prosaico e revelador: **descasamento de API**, com código escrito para o Blender 4.x falhando no
  5.0. O gerador escrito por IA envelhece com a ferramenta.
- **WorldCoder-Bench** — 2.026 tarefas, **205 no núcleo**, nove modelos. **27,8%** de cobertura de
  verificação no melhor caso. As falhas são de **estado e interação**, não de gráfico. E a nota
  externa (DOM) não prediz a correção interna: **τb = −0,02**.
- **P3D-Bench** — 400 casos de texto, 400 de imagem, 203 montagens anotadas, 14 modelos, quatro
  linguagens de saída. **Semântica ~0,80, geometria ~0,35**, `PartMatchF1` ~0,50 no melhor modelo.

**A biblioteca virou a intervenção.** O `ProcFunc` (Princeton, submetido em 29/04/2026, revisado em
15/09/2026, mesma equipe do Infinigen) é uma biblioteca de funções Python para geração procedural
em Blender cuja justificativa é explícita: com ela, modelos de visão e linguagem "podem editar
código procedural de material e geometria e podem criar código procedural novo com
**significativamente menos erros de código**". Não há número no resumo — anotei isso como limite,
não como resultado. O ponto estrutural é outro: **a forma de melhorar o gerador escrito por IA
passou a ser mudar a linguagem em que ele é escrito**, não o modelo que o escreve.

**O grafo de nós foi reconhecido como programa.** O `MultiMat` (arXiv 2509.22151, aceito como
pôster no ICLR 2026, de Belouadi, Boubekeur e Kaiser) abre com a frase que resume o tema inteiro:
*"grafos de nós de material são programas que geram os canais 2D de materiais procedurais"*. A
contribuição é tratar o grafo como objeto **visual-espacial** e não só textual, com busca em árvore
restrita que garante correção estática.

**E o oposto também foi publicado, o que é saudável.** Em *Procedural Scene Programs for
Open-Universe Scene Generation* (SIGGRAPH Asia 2025, Gumin e outros, do laboratório de Daniel
Ritchie), a correção de erro do programa procedural é feita por **busca de programa, sem LLM** — o
subtítulo é literalmente "LLM-Free Error Correction via Program Search". Nem todo mundo no campo
acha que o modelo deve ser quem conserta.

**A expertise começou a ser modelada como processo, não como resultado.** *Reflecting Process
Expertise in Procedural Material Generation* (arXiv 2607.13318, 14/07/2026) extrai conhecimento de
fluxo de trabalho de **vídeos de tutorial**, usando modelos de linguagem para produzir traços de
processo que guiam a criação de material no Blender; a avaliação por especialistas indica fluxos
mais próximos da prática profissional e **com menos revisões** que os métodos anteriores. O que se
está tentando capturar aqui não é o material — é **como um profissional chega nele**.

### 3.3 O lado humano, medido

Uma única medição com pessoas, e ela é boa: o **AI Co-Artist** (arXiv 2512.08951, 27/11/2025,
Yuksel e Sawaf) mantém uma população de **14 variantes** de shader GLSL reativas a áudio e evolui
essa população por seleção visual do usuário, com mutação e cruzamento mediados por modelo. Com
**50 participantes** (30 novatos, 20 especialistas) e 25 minutos de tarefa: novatos produziram
**4,2 shaders contra 0,6** no Shadertoy; especialistas, **6,8 contra 2,9**; redução de **60%** no
tempo até o primeiro resultado; satisfação **4,7/5 contra 2,8/5**; menos de **3%** de erro de
compilação após novas tentativas.

Leia o número com cuidado, porque ele é o ponto de virada do mapa: o ganho do **novato** foi de
**7x**; o do **especialista**, de **2,3x**. A ferramenta não iguala — ela **encurta a distância na
entrada** e mantém a hierarquia na saída.

Do lado da avaliação crua, o *microeval* da Artificial Analysis que pede um único arquivo HTML com
Three.js e shader GLSL para um fractal de Julia interativo: de **16 modelos**, **7 passaram e 9 não**.
Não consegui apurar a data desse teste — registro-o como indicativo, não como marco.

### 3.4 O lado da plataforma

Além do Claude for Creative Work, do Houdini 22 e do Unreal 5.8 já descritos no resumo, a peça que
mais diz respeito a quem projeta interface está no **Config 2026 da Figma**: *Code Layers* — qualquer
camada de desenho vira camada de código com um clique ou um prompt, e volta —, além de *Motion*,
*Shader Fills and Effects*, *Generative Plugins* e as *Skills* do agente. A distribuição das Code
Layers começou em **julho de 2026**. E a formulação de Dylan Field é a tese da raiz 1 dita por
quem vende a ferramenta: *"Código é material, assim como imagens, vetores e camadas de design. Por
muito tempo, código viveu em ambientes de um jogador só, construídos para pensamento linear."*

### 3.5 O lado contrário, que tem mais dinheiro

- **Meshy**: Série B de **US$ 400 milhões** a **US$ 1,5 bilhão**, em 21/07/2026; **12 milhões** de
  usuários registrados, mais de **100 milhões** de modelos gerados, ARR de ~US$ 40 milhões em abril
  de 2026, crescimento de ~**12x** ao ano. A análise da Naavik é sóbria sobre o alcance: ferramentas
  assim "endereçam boa parte da fruta baixa — ideação, props de fundo e malhas-base", com ganhos
  medidos pela Room8 de **10–15%** na produção de props e **30–40%** de economia na otimização de
  baixa poligonagem. Nada de asset herói, nada de montagem de ambiente.
- **Project Genie**: aberto em **29/01/2026** a assinantes do Google AI Ultra nos EUA, maiores de
  18 anos, com limitação declarada de **60 segundos** por geração e o reconhecimento de que os
  mundos "podem não parecer completamente fiéis à realidade" nem aderir à física.

Os dois números que importam para a disputa: o programa de um objeto cabe em **kilobytes de texto**
e é editável linha a linha; a cena capturada em splats, nos formatos correntes, não. Essa é a
assimetria que a raiz 3 explora — e ela é do **presente**, não do futuro.

### 3.6 O custo escondido, já medido

E há o dado que nenhum mapa entusiasmado deste tema costuma trazer. A análise da GitClear e
GitKraken sobre **623 milhões de mudanças reais de código entre 2023 e 2026**, publicada em
07/07/2026: duplicação **+81%**, reuso (medido por mover/refatorar) **−70%**, refatoração de legado
**−74%** desde 2023, conectividade funcional **−35%**, mascaramento de erro **+47%** em 2026 sobre
o ano-base. Commits assistidos por IA são cerca de **um quarto** do total. A frase do CEO da
GitClear, Bill Harding, descreve o futuro deste tema melhor que qualquer projeção: *"No longo prazo
começa a doer quando você percebe que tem cinco implementações diferentes da mesma coisa."*

Se o gerador é código, o gerador **herda isso**.

## 4. As disrupções-raiz

Três. Para cada uma, o que rompe, o sinal datado que não existia há cinco anos, e a precondição que
ainda falta. A triagem que eliminou as outras seis candidatas está na seção 12.2.

### R1 — O entregável deixa de ser o artefato e passa a ser a regra mais o critério que a aprova

**O que rompe.** A competência escassa de **autorar o gerador à mão** — montar a rede de nós,
escrever o shader, desenhar o sistema de variação. Era a barreira que separava o motion designer do
artista de Houdini, o ilustrador do artista de shader. Não some por decreto: perde **escassez**. E
com ela perde valor a forma de contratar que essa escassez sustentava — o especialista que se vende
por dominar a ferramenta, não por decidir o que a regra deve fazer.

**O que NÃO rompe, e é importante dizer:** não rompe o julgamento sobre o que vale gerar, nem o
domínio da física e da estrutura do objeto — os três benchmarks concordam que é exatamente aí que o
modelo falha (partes desconectadas, geometria a 0,35, esquema de estado derivando em 42,8% dos
casos).

**Por que agora e não há cinco anos.** Sinal datado, e é triplo: **3DCodeBench (31/05/2026)**,
**WorldCoder-Bench (08/06/2026)** e **P3D-Bench (09/06/2026)** — três bancos de prova de
*geração procedural por código*, publicados em cinco semanas, com 12, 9 e 14 modelos avaliados. Em
2021 não havia nem o objeto de avaliação: "programa gráfico escrito por modelo" não era categoria.
O número que fecha o argumento é a executabilidade de **0,974 em múltiplos turnos** do 3DCodeBench:
o problema "o script nem roda" acabou.

**O que ainda falta acontecer.** Falta **a verificação ficar tão barata quanto a escrita**. Hoje ela
não é: o WorldCoder-Bench mostra que a avaliação externa não prediz a correção interna
(τb = −0,02), o que significa que verificar exige instrumentar o estado do programa, e não olhar a
tela. A precondição nomeada é: **um verificador de gerador que rode sem supervisão humana e cuja
nota se correlacione com a aceitação do cliente.** Enquanto ela não cair, cada gerador escrito por
IA carrega um humano atrás.

### R2 — A ferramenta procedural deixa de ser operada e passa a ser dirigida; o produto passa a incluir o pacote de contexto e o validador

**O que rompe.** O conhecimento de **interface** — saber onde fica o nó, qual parâmetro faz o quê,
qual a ordem das operações. Esse conhecimento era treinado por anos, vendido em curso e usado como
critério de contratação. Rompe também a relação comercial que ele sustentava: **a ferramenta deixa
de ser vendida a um humano por assento e passa a ser avaliada por quão bem uma máquina a dirige**.

**Por que agora e não há cinco anos.** Três artefatos independentes, todos de 2026, e nenhum deles
é pesquisa — são produto:

- **28/04/2026**, Anthropic: nove conectores para ferramentas criativas, com o conector do Blender
  permitindo "analisar e depurar cenas inteiras do Blender, ou construir scripts personalizados
  para aplicar mudanças em lote", e — decisivo — "usando a API Python do Blender, o conector permite
  que o Claude **adicione novas ferramentas diretamente à interface do Blender**".
- **22/06/2026**, SideFX: o *Apex Script Comfort Package*, com **validador** acoplado. O fabricante
  não expôs só a API: expôs a **sintaxe curada, a documentação e os exemplos**, mais o juiz.
- **Unreal Engine 5.8**: a documentação torna o carregamento da skill de PCG **obrigatório** na
  configuração da sessão, e descreve o que acontece sem ela. O manual virou pré-requisito de
  execução.

Em 2021, o equivalente disso seria um SDK. A diferença é que um SDK é para quem programa; **um
pacote de contexto é para quem não programa e não abre a ferramenta**.

**O que ainda falta acontecer.** Falta **o validador ser de quem usa, e não só de quem vende**.
Hoje o juiz do código gerado é publicado pelo fabricante, o que dá a ele poder de definir o que
conta como "certo" dentro da própria ferramenta. A precondição nomeada é: **um formato de
especificação de aceitação que atravesse ferramentas** — que eu possa dizer o que é um bom
resultado sem dizer em qual software ele será produzido. Nada nesta pesquisa indica que isso exista.

### R3 — A representação da entrega vira escolha econômica explícita, e o programa ganha onde o pixel não cabe

**O que rompe.** A cadeia de valor do **asset como arquivo**: retopologia, geração de UV, conversão
de formato, compressão, distribuição em marketplace. Ela não desaparece — perde o **segmento
descartável**, que é onde está o volume. E rompe um pressuposto mais fundo: o de que "gerar" e
"produzir o pixel" são sinônimos.

**Por que agora e não há cinco anos.** Não é capacidade de modelo — é **substrato de entrega**:

- **WebGPU em todos os navegadores principais** desde o fim de 2025. O programa gráfico agora roda
  em qualquer lugar sem plugin, o que só era verdade para WebGL, com um teto de recursos muito mais
  baixo.
- A opção rival **ficou cara de entregar**: o mundo gerado em pixels do Project Genie tem limite de
  **60 segundos** e vive atrás de uma assinatura de nível mais alto; a malha gerada resolve props e
  não resolve montagem de cena, por análise de quem investe no setor.
- E surgiu um artefato que **mede a própria economia**: o `img2threejs`, com **16,3 mil estrelas** e
  licença Apache 2.0, se descreve como "deliberadamente eficiente em tokens — reconstrução por
  código, não fotogrametria, extração de malha ou pacotes de arte baixados", e organiza o trabalho
  em oito passagens com portões de revisão visual, sob a regra "os scripts impõem, o modelo julga".
  A vitrine independente do WebGPU.com, de 30/07/2026, descreve a versão 1.3 nos mesmos termos: "não
  é extração de malha, varredura fotogramétrica nem atalho por pacote de assets".

Em 2021, essa comparação não existia porque não havia o que comparar: não se gerava nem programa
nem splat de forma acessível.

**O que ainda falta acontecer.** Falta **o formato**. Não existe hoje um recipiente padrão para
entregar *o gerador* a um cliente — glTF entrega malha, os formatos de splat entregam splat, e o
programa procedural viaja como repositório de código, com tudo que isso implica de versão,
dependência e licença. A precondição nomeada: **um formato de entrega que carregue a regra, a
semente e a assinatura de quem a escreveu, e que um navegador abra sem construir.**

**Nota de convergência (a roda não representa isto).** R1 e R3 se reforçam — quanto mais barato
escrever gerador, mais viável entregar programa — mas **se anulam parcialmente em um ponto**: a
economia de bytes de R3 é comida pela duplicação de R1. Cinco implementações da mesma regra pesam
mais, e confundem mais, do que um arquivo. Quem ler a árvore vai somar os galhos; eles não somam.

## 5. A roda dos futuros

Método: **Futures Wheel** (Glenn, 1971). A regra de expansão é declarada e é minha, herdada do
`ESTUDO.md`: **expandir um nó só se o filho mudar de ator ou de mecanismo em relação ao pai**. Os
efeitos abaixo já passaram pela Fase 5 — o que morreu está na seção 12.3, com o `id` original e a
prova que o matou.

```yaml
roda:
  - disrupcao: "A IA escreve o gerador: o entregável deixa de ser o artefato e passa a ser a regra mais o critério que a aprova"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O entregável do designer passa a ser a especificação da regra — o que varia, o que nao pode variar e como se verifica —, e nao o arquivo final"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Surge no estudio a funcao de quem escreve e mantem o manual executavel das ferramentas, avaliada por taxa de execucao e nao por portfolio"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A carteira de pacotes de contexto de um estudio vira ativo negociavel em fusao e aquisicao, sem se encaixar nem como software nem como pessoal"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O portao de qualidade migra do olho humano para script executavel, e aprovado passa a ter definicao operacional escrita projeto a projeto"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Quem redige o criterio de aceitacao acumula mais poder editorial do que quem desenha, porque a metrica passa a funcionar como briefing"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: "A revisao de codigo grafico vira o gargalo do atelie, com implementacoes duplicadas da mesma regra competindo dentro do mesmo projeto"
            sinal: forte
            prazo: 2028
            confianca: media
      - id: e2
        ordem: 1
        efeito: "O repertorio procedural deixa de ser conhecimento raro e passa a ser conhecimento citavel: o modelo o traz, e o humano escolhe entre opcoes que nao sabia nomear"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A distancia entre novato e especialista encolhe no primeiro resultado e volta a crescer no resultado que sobrevive a revisao"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O ensino de design se reorganiza em torno de ler e criticar gerador alheio, e nao de escrever o proprio do zero"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A producao procedural converge para um mesmo repertorio visual, porque todos partem dos mesmos padroes internalizados pelos modelos"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O valor de mercado se desloca para o desvio deliberado do padrao, e a regra estranha passa a funcionar como assinatura de autoria"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "A ferramenta procedural deixa de ser operada e passa a ser dirigida; o produto do fabricante passa a incluir o pacote de contexto e o validador"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "O manual da ferramenta vira codigo executavel: quem publica software procedural passa a publicar tambem o pacote de contexto e o juiz que confere o resultado"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A comparacao entre ferramentas passa a incluir quao bem cada uma e dirigida por maquina, e nao so o que ela faz quando operada a mao"
            sinal: medio
            prazo: 2029
            confianca: media
          - id: e3.2
            ordem: 2
            efeito: "O licenciamento se desloca do assento humano para o uso, com individuo barato ou gratuito e cobranca concentrada no estudio e na execucao automatizada"
            sinal: medio
            prazo: 2029
            confianca: baixa
      - id: e4
        ordem: 1
        efeito: "A interface grafica deixa de ser onde o trabalho acontece e vira onde ele e conferido"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O tempo de trabalho migra de produzir para revisar, e a revisao passa a ser a etapa cara do processo"
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Contratos de producao passam a precificar revisao e aceitacao como linha separada da criacao"
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: "A representacao da entrega vira escolha economica explicita entre programa, malha, splat e video, e o programa ganha onde o pixel nao cabe"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "A escolha de representacao vira decisao de projeto declarada no briefing, tomada por peso, editabilidade e licenca, e nao por preferencia estetica"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Web, dispositivo movel e oculos consolidam-se como territorio do programa, enquanto captura e audiovisual permanecem territorio do pixel"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Nasce o formato de entrega que carrega o gerador em vez do resultado, e o cliente passa a receber um programa assinado no lugar de um arquivo"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A cadeia do asset como arquivo perde margem no segmento descartavel e se concentra no asset heroi e na montagem de cena"
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e6
        ordem: 1
        efeito: "O custo de uma cena passa a ser contado simultaneamente em tokens e em bytes, e essa conta muda o que se decide produzir"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Parte da geracao migra para o momento da entrega, com o gerador executando no dispositivo de quem assiste em vez de no estudio"
            sinal: fraco
            prazo: 2030
            confianca: baixa
```

**Leitura em prosa, e as três coisas que a árvore não diz.**

*A primeira: as raízes se anulam em um ponto.* R3 promete leveza; R1 produz duplicação. A medição
da GitClear — duplicação **+81%**, reuso **−70%** — é sobre software em geral, mas não há razão
para o código gráfico ser exceção, e há uma razão para ser pior: gerador visual é julgado por
aparência, e duas implementações diferentes que parecem iguais **não disparam alarme nenhum**. O
efeito `e1.3` e o efeito `e6` moram em galhos diferentes e brigam pelo mesmo orçamento.

*A segunda: há um efeito que só existe com duas raízes, e por isso ficou fora da árvore.* Se R2
(fabricante publica validador) e R3 (formato que carrega o gerador) acontecerem juntas, aparece
algo que nenhuma das duas produz sozinha: **a certificação de gerador** — um selo de que aquele
programa foi verificado contra um critério, emitido por quem não o escreveu. É a convergência mais
interessante deste mapa e é, por regra do método, nota de prosa, não nó.

*A terceira: a roda não representa o amortecimento.* `e2` (repertório vira citável) alimenta `e2.2`
(convergência estética), e `e2.2` **reduz** o valor de `e2` — se todo mundo gera a mesma coisa, o
acesso ao repertório deixa de ser vantagem. A Futures Wheel é árvore, não grafo; esse laço só pode
ser dito aqui.

## 6. Sinais fracos e wildcards

Aqui entra o que não passou no corte da roda por exigir **duas ou mais precondições não validadas
ao mesmo tempo** — que é a regra de parada declarada — mais os curingas.

**Sinal fraco 1 — a geração em tempo de execução, com garantia formal.** O trabalho de decodificação
restrita de Li, Rahili e Zhao (arXiv 2508.15866, COLM 2025) gera mecânicas de jogo em **sLua**, uma
variante de Lua fortemente tipada, com o argumento de que a garantia se estende à "correção em tempo
de execução para componentes críticos". Não há número de latência no resumo. Duas precondições
faltam simultaneamente: gramática restrita para APIs gráficas reais, e verificação de estado barata
o bastante para rodar entre dois quadros. Se ambas caírem, a promessa muda de figura.

**Sinal fraco 2 — o gerador como objeto jurídico.** Em **02/03/2026** a Suprema Corte dos EUA negou
certiorari em *Thaler v. Perlmutter* (nº 25-449), consolidando o entendimento do circuito do DC de
que a lei "exige que toda obra elegível seja, em primeira instância, autorada por um ser humano".
Regra vigente: obra puramente gerada por IA não é registrável; obra assistida é, quando o humano
exerce controle criativo sobre os elementos expressivos. **A pergunta que ninguém respondeu** é o
que acontece quando o objeto é a **regra** e não a saída — se o programa procedural escrito por IA
não é protegível, mas a saída dele é infinita e varia por semente, o que exatamente se licencia num
contrato? Não achei decisão, projeto de lei ou parecer tratando disso. É por isso que esta candidata
não virou a quarta raiz: falta sinal datado.

**Sinal fraco 3 — a homogeneização como fenômeno medido.** *Interrogating Design Homogenization in
Web Vibe Coding* (arXiv 2603.13036, 16/03/2026, Shin, Gao, Pang, Lee, Reinecke e Tseng) investiga
justamente a convergência estética de interfaces geradas por seis sistemas (Claude Artifacts,
ChatGPT Canvas, Gemini Canvas, v0, Lovable, Replit). **Não consegui extrair os números do PDF** —
o arquivo abriu comprimido e o texto não saiu legível. Registro o trabalho como existente e o
número como `não consegui apurar`. É a evidência mais direta que encontrei para `e2.2`, e ela está
meio-aberta.

**Sinal fraco 4 — o gerador aprendido de vídeo de tutorial.** O trabalho de expertise de processo
(arXiv 2607.13318) aprende o **caminho** e não o resultado, a partir de tutoriais gravados. Se isso
escalar, muda quem tem valor: não quem publicou o material bonito, mas quem gravou **como chegou
nele**. É uma inversão silenciosa da economia de conteúdo educacional criativo.

**Wildcard A — o motor que gera o conteúdo como código quando o jogador chega.** O curinga sugerido
pela disciplina, e que a evidência de hoje não sustenta: o WorldCoder-Bench mede **27,8%** de
cobertura no melhor caso e aponta deriva de esquema de estado como falha dominante. Um motor que
gera código no momento em que o jogador chega precisaria da direção contrária: estado estável,
geração instável. Se acontecer antes de 2031, será em um gênero onde a falha é barata — texto,
roguelike, sandbox — e não em produção AAA.

**Wildcard B — a ferramenta gráfica desaparece como produto.** Se o pacote de contexto e o validador
forem o que se vende (R2), há um cenário em que o editor visual se torna um **visualizador** e a
ferramenta comercial vira uma biblioteca mais um juiz. O Graphite é a peça que pode ler dos dois
jeitos: "camadas e nós são duas visões equivalentes da mesma estrutura de documento" descreve tanto
uma ferramenta que sobrevive quanto uma que se dissolve na sua própria representação.

**Wildcard C — o recuo.** Um estúdio grande publica uma pós-morte dizendo que abandonou geração de
gerador por IA depois de descobrir cinco implementações da mesma regra em produção, e a prática
recua para tarefa auxiliar por dois anos. Não é improvável: é o padrão da curva, e a GitClear já
está medindo a matéria-prima desse recuo.

## 7. Contra o próprio mapa

Esta seção existe para dizer, com todas as letras, onde o mapa é fraco. A bateria adversarial
completa está na seção 12.3; aqui ficam os problemas que **sobreviveram** a ela.

**O problema mais grave: não existe medida de adoção.** Todos os números deste mapa são de duas
naturezas — **benchmark** (3DCodeBench, WorldCoder-Bench, P3D-Bench, AI Co-Artist) e **plataforma**
(Anthropic, SideFX, Epic, Figma, Canva). Nenhum é de **uso**. Não achei nenhuma pesquisa dizendo
quantos estúdios usam IA para escrever gerador, nem com que frequência, nem em que fração do
pipeline. Isso significa que **o falsificador declarado na entrevista — "a adoção já passou da
maioria inicial" — não pode ser testado com o que eu tenho**. O mapa não é falsificável nesse eixo,
e isso é um defeito estrutural, não um detalhe.

**Segundo: benchmark não é ofício.** Executabilidade de 0,974 mede se o script roda, não se o
resultado presta para alguém. O próprio WorldCoder-Bench prova o ponto de dentro: a nota que se
obtém olhando o que aparece na tela **não prediz** a correção do que está por baixo (τb = −0,02).
Se a pontuação externa não prediz o estado interno, por que a pontuação de benchmark prediria valor
profissional? Não prediz. Todo `prazo` deste mapa é aposta, e apostas sobre a passagem
*benchmark → produção* têm histórico ruim.

**Terceiro: a bateria adversarial não matou nenhum efeito de primeira ordem.** Ela matou três de
terceira ordem e rebaixou três. Isso pode significar que a primeira ordem está sólida — ou que eu
escrevi primeira ordem genérica o bastante para ser irrefutável, que é o defeito clássico. Reli com
essa suspeita e mantive: `e1` a `e6` nomeiam ator e mecanismo distintos e são enunciáveis como
falsos. Mas registro a suspeita porque ela não se resolve por releitura.

**Quarto, e é o achado da camada de causas (CLA): este mapa repousa sobre uma visão de mundo que
ele não examina.** A camada da litania diz "a IA escreve o gerador". A camada sistêmica diz que a
economia da geração está sendo recontada em tokens e bytes. A camada de **visão de mundo** diz
algo que nenhum efeito acima enuncia: **que editabilidade e explicabilidade são valores**. Todo o
argumento pró-programa — leve, editável, legível, versionável — pressupõe que alguém **queira
editar depois**, e que essa vontade valha pagar por ela. Se a métrica de sucesso virar *volume de
peças entregues por semana*, e não *custo de mudar uma peça depois*, o programa perde para o pixel
em quase toda a árvore: `e5`, `e5.1`, `e5.2`, `e6` e boa parte de `e1` trocam de sinal **sem que um
único fato mude**. O mito por baixo é o do artesão que conserta; o mito rival, já financiado, é o
da fonte inesgotável que não precisa de conserto porque se gera outra.

**Quinto: o Brasil está no título e quase não está no corpo.** A única fonte brasileira que abri é
qualitativa, com sete entrevistados, e declara não ser generalizável. Tudo o que digo sobre
restrição de banda e de dispositivo é inferência estrutural sem medição. Quem for usar este mapa
para decidir algo no Brasil deve tratar a seção 1 como hipótese.

**Sexto: a alternativa "nada disso importa porque já existe" tem um argumento sério.** Geração
procedural existe desde os anos 1980; creative coding, desde os 2000; grafos de nós são padrão de
indústria. O contra-argumento, que sustento, é que **três coisas mudaram de natureza e não de
grau**: a autoria do gerador deixou de exigir a competência rara (R1), o manual virou pré-requisito
executável de uma sessão de máquina (R2), e a escolha de representação virou conta explícita
possível de fazer no briefing (R3). Se um leitor demonstrar que qualquer uma das três já era
verdade em 2021, a raiz correspondente cai e o mapa perde um terço.

**O que a bateria NÃO conseguiu derrubar, e por que isso não é elogio.** `e3` e `e4.1` sobreviveram
com confiança alta. `e3` sobreviveu porque tem três artefatos independentes de fabricantes que
competem entre si. `e4.1` sobreviveu porque a medição de revisão como gargalo já está feita em
software em geral. Mas os dois compartilham uma fragilidade: **ambos descrevem o que já começou.**
Efeito que já começou é fácil de acertar e diz pouco sobre 2031.

## 8. O que a máquina errou

Registro dos erros e dos limites desta rodada, no espírito do `DUVIDAS.md`: o que separa o
detectável do indetectável é existir um segundo registro para comparar.

**1. Duas fontes não abriram, e a informação delas não entrou.** O levantamento de desenvolvedores
de jogos sobre ferramentas de geração procedural de níveis (TU Delft) apareceu em busca com uma
descrição atraente — controle artístico como barreira principal, depuração de saída inesperada como
preocupação de designers — mas **os dois links do PDF falharam** (um retornou 404, o outro devolveu
binário ilegível). Eu tinha material para usar o resumo da busca como se fosse leitura. Não usei:
não está na seção 11, não sustenta nenhum efeito, e está registrado aqui e na 12.4. **É exatamente
o erro de "citar o que não se abriu"**, e ele só não aconteceu porque a regra da skill é anterior à
tentação.

**2. Dois PDFs abriram e não entregaram números.** O trabalho sobre homogeneização (2603.13036) e o
Reflexa (2601.17769) retornaram texto ilegível por compressão. Ambos aparecem no mapa **sem
número**, com `não consegui apurar` explícito. O Reflexa, por não ter nada além do tema, não
sustenta efeito nenhum — está na seção 11 porque foi aberto, e só.

**3. Um número que eu quase apresentei como medida e é declaração.** A busca sobre grafos de nós
devolveu a frase "mais de 60% dos profissionais de Blender que implementaram animação procedural
viram 35% de redução no tempo de produção, segundo relatório da indústria de 2026". É um número
redondo, de fonte não identificada, num blog. **Número redondo é suspeito** — a regra está na
skill, e este é o caso exato. Não entrou no mapa, em lugar nenhum.

**4. Uma data que eu tratei como fato e é inferência de terceiro.** A data de 28/04/2026 para os
conectores da Anthropic veio primeiro de blogs secundários. Conferi na fonte primária
(anthropic.com) antes de usá-la como sinal datado da R2. Bateu. Registro porque o `DUVIDAS.md`
descreve precisamente esse erro — data deduzida apresentada com o mesmo tom de data conferida — e
porque o "por que agora" de uma raiz inteira estava apoiado nela.

**5. Um limite que não é erro, mas muda a leitura.** O *microeval* da Artificial Analysis (7 de 16
modelos passando no fractal interativo) **não trouxe data**. Sem data, não serve como sinal do
"por que agora" — o teste pode ser de 2025. Usei-o apenas como ilustração na seção 3.3, e com
ressalva escrita.

**6. Duas correções factuais que fiz contra o material da disciplina.** O bloco do tema descreve o
`manim` com "92 mil estrelas" e o `img2threejs` como destaque; **não verifiquei** o número do manim
nesta sessão e por isso ele não aparece no mapa. Já o `img2threejs` eu verifiquei: **16,3 mil
estrelas**, Apache 2.0, e a vitrine independente é de 30/07/2026. O material da disciplina não traz
número de estrelas para ele; não houve contradição, houve ausência que eu preenchi com fonte.

**7. O viés que eu carrego e não consegui remover.** O tema, como descrito pela disciplina, **já
contém a tese** — "'Gerar geradores' é a forma de geração que continua editável, leve e explicável
— o contrário do pixel gerado". Isso é uma posição, não um fato, e eu a recebi como contexto. Tentei
compensar buscando deliberadamente o lado oposto (Meshy, Project Genie, GitClear) e o encontrei com
força. Mas quem escolheu as buscas fui eu, partindo daquela frase. Um mapa feito a partir de "por
que o pixel gerado está vencendo" teria as mesmas fontes e outra forma.

## 9. Três cenários para 2031

Não são previsões e não têm probabilidade — nenhum dos métodos usados aqui atribui probabilidade.
São três formas coerentes de o mapa dar certo, dar errado e dar outra coisa.

### 9.1 Desejável — a regra vira o entregável, e o critério vira o ofício

Em 2031, o que um estúdio entrega ao cliente inclui, como padrão contratual, **o gerador e o teste
que o aprova**. O formato existe: carrega a regra, a semente e a assinatura de quem escreveu, e
abre no navegador sem construir (`e5.1.1`). A competência valorizada não é escrever o gerador — isso
a máquina faz com 0,97 de executabilidade — é **redigir o critério de aceitação**, e por isso quem
redige critério acumula poder editorial (`e1.2.1`). O ensino de design já se reorganizou em torno de
ler e criticar gerador alheio (`e2.1.1`). A duplicação foi contida porque os estúdios passaram a
manter biblioteca canônica, mas o preço disso foi governança: gerador novo precisa de justificativa.

*O que precisaria ser verdade:* a precondição de R1 (verificação barata e correlacionada com
aceitação) cai antes de 2029, e o formato de R3 aparece. *O que derrubaria:* a métrica de sucesso
virar volume, não custo de mudança — o achado da CLA na seção 7.

### 9.2 Indesejável — cinco implementações da mesma regra

Em 2031, escrever gerador é trivial e ninguém sabe qual gerador está em produção. A curva da
GitClear continuou: duplicação alta, refatoração baixa, mascaramento de erro alto — e no código
gráfico é pior, porque duas regras diferentes que produzem imagens parecidas **não disparam nenhum
alarme**. A revisão virou a etapa cara (`e4.1`) e, por ser cara, foi cortada; a instabilidade voltou
como retrabalho. A estética convergiu (`e2.2`) porque ninguém mais escreve do zero, e a resposta do
mercado foi pagar caro pelo desvio deliberado (`e2.2.1`), o que produziu uma indústria de
excentricidade sob encomenda. A promessa da leveza (`e6`) nunca se realizou: o programa ficou mais
pesado de manter do que o arquivo que ele substituía.

*O que precisaria ser verdade:* nada de novo. Este cenário é a extrapolação das medições que já
existem, sem nenhuma precondição extra. **É o cenário mais barato de acontecer**, e por isso ele
está aqui.

### 9.3 Surpreendente — o gerador encontra o direito, e o direito não sabe o que fazer

Em 2031, a disputa não é técnica. Depois de *Thaler*, obra puramente gerada por IA não é
registrável e obra assistida é, conforme o controle criativo humano. Mas o objeto deste mapa é a
**regra**, não a saída — e a regra escrita por IA, executada mil vezes com sementes diferentes,
produz mil saídas que ninguém autorou individualmente. Um cliente recebe um programa; o programa
gera uma peça diferente para cada pessoa que a abre. O contrato não sabe dizer o que foi licenciado:
a execução, o programa, ou a família de saídas possíveis. A resposta que emerge não é lei nova: é
**certificação** — a convergência de R2 e R3 apontada na seção 5, um selo emitido por quem não
escreveu o gerador, atestando que aquele programa foi verificado contra um critério. O poder migra
para quem emite o selo, e não para quem escreve a regra nem para quem a executa.

*O que precisaria ser verdade:* R2 e R3 acontecerem juntas, e um caso concreto forçar a pergunta.
*Por que é surpreendente:* porque o mapa inteiro trata de capacidade técnica, e o desfecho é de
infraestrutura institucional.

## 10. O experimento

**Nome:** A ordem de mudança tardia.

**A hipótese sob teste — e o que ela NÃO é.** A hipótese não é "código procedural gerado por IA fica
melhor que malha gerada". Essa comparação é sobre qualidade, e a qualidade depende do caso. A
hipótese é sobre o que o mapa inteiro afirma: **que a diferença entre gerar o programa e gerar o
pixel aparece no custo de mudar depois**. Se não aparecer, a raiz 3 cai.

**Montagem.** Três rotas, o mesmo objeto, o mesmo prazo:

- **Rota A — pixel/malha:** gerar o objeto por ferramenta de geração 3D ou de imagem, entregando o
  arquivo resultante.
- **Rota B — programa escrito por IA:** obter o objeto como código procedural executável (Three.js,
  código Blender, shader), pedido a um modelo, com o portão de qualidade que a equipe definir.
- **Rota C — grafo à mão:** montar o objeto em grafo de nós (geometry nodes, Cavalry, Graphite) sem
  IA nenhuma.

Cada equipe faz **uma rota só** e não sabe o que vem depois. Entrega. Registra bytes e tempo.

**A dobra — e é aqui que o experimento vale.** Só **depois da entrega aceita** chega uma ordem de
mudança que nenhuma rota poderia ter antecipado, e que é deliberadamente de três tipos ao mesmo
tempo:

1. **Estrutural:** "agora a cadeira tem cinco pernas, e as cinco precisam ser iguais entre si."
2. **De orçamento:** "precisa caber em 200 kB, sem exceção."
3. **De transparência:** "o cliente quer ver a regra e quer saber por que a perna tem essa curva."

**O que se mede** — quatro números por rota, nenhum deles sobre beleza:

| Medida | Como se mede |
|---|---|
| **Recomeços** | Quantas vezes foi necessário voltar ao ponto zero em vez de alterar o que existia |
| **Alterações sem regeração** | Quantas das três ordens foram atendidas mexendo no artefato entregue |
| **Bytes entregues** | Tamanho do que efetivamente vai para o cliente, depois da mudança |
| **Tempo até aceitação de terceiro** | Quanto tempo até alguém que não participou da produção aceitar o resultado |

**Por que a ordem 3 é a mais importante e quase ninguém a inclui.** "Mostre a regra" é o teste da
explicabilidade, que é metade da tese deste tema. A rota A não tem o que mostrar. A rota C tem e é
legível para quem conhece a ferramenta. A rota B tem e é legível para qualquer um — **se o código
não tiver sido escrito como cinco implementações da mesma coisa**, que é exatamente o risco medido
pela GitClear. É a única das quatro medidas que consegue diferenciar o efeito `e5` do efeito `e1.3`.

**Como o experimento pode derrubar o mapa.** Se a rota B precisar de tantos recomeços quanto a A, a
raiz 3 perde o argumento — "editável" vira retórica. Se a rota C vencer em tudo, a raiz 1 perde: a
IA não estará mudando o que é possível, só quem consegue chegar lá. Se as três empatarem em bytes,
`e6` morre. O experimento foi desenhado para **poder** matar três efeitos deste mapa, e essa é a
condição para valer a pena rodá-lo.

**Custo e escala.** Uma aula para produzir, uma semana de intervalo, uma aula para a ordem de
mudança e a medição. Três a quatro equipes por rota. Nenhuma ferramenta paga é obrigatória: Blender,
Three.js, Graphite e Cavalry cobrem as três rotas sem custo.

## 11. Fontes

Todas as 27 foram abertas nesta sessão, em 17/09/2026. As duas que falharam ao abrir estão na seção
12.4 e **não** aparecem aqui.

**Bancos de prova e artigos**

1. 3DCodeBench: Benchmarking Agentic Procedural 3D Modeling Via Code — arXiv 2606.01057v1, 31/05/2026 — `https://arxiv.org/html/2606.01057`
2. WorldCoder-Bench: Benchmarking Physically Grounded 3D World Synthesis — arXiv 2606.01869v2, 08/06/2026 — `https://arxiv.org/html/2606.01869`
3. P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning — arXiv 2606.11152v1, 09/06/2026 — `https://arxiv.org/html/2606.11152v1`
4. ProcFunc: Function-Oriented Abstractions for Procedural 3D Generation in Python — arXiv 2604.26943, 29/04/2026 (rev. 15/09/2026) — `https://arxiv.org/abs/2604.26943`
5. MultiMat: Multimodal Program Synthesis for Procedural Materials using Large Multimodal Models — arXiv 2509.22151, ICLR 2026 — `https://arxiv.org/abs/2509.22151`
6. Procedural Scene Programs for Open-Universe Scene Generation: LLM-Free Error Correction via Program Search — arXiv 2510.16147, SIGGRAPH Asia 2025 — `https://arxiv.org/pdf/2510.16147`
7. Reflecting Process Expertise in Procedural Material Generation — arXiv 2607.13318, 14/07/2026 — `https://arxiv.org/abs/2607.13318`
8. AI Co-Artist: A LLM-Powered Framework for Interactive GLSL Shader Animation Evolution — arXiv 2512.08951v1, 27/11/2025 — `https://arxiv.org/html/2512.08951v1`
9. Interrogating Design Homogenization in Web Vibe Coding — arXiv 2603.13036, 16/03/2026 — `https://arxiv.org/pdf/2603.13036`
10. Reflexa: Uncovering How LLM-Supported Reflection Scaffolding Reshapes Creativity in Creative Coding — arXiv 2601.17769, 27/01/2026 — `https://arxiv.org/pdf/2601.17769`
11. Correctness-Guaranteed Code Generation via Constrained Decoding — arXiv 2508.15866, COLM 2025 — `https://arxiv.org/abs/2508.15866`

**Plataforma, produto e documentação**

12. Claude for Creative Work — Anthropic, 28/04/2026 — `https://www.anthropic.com/news/claude-for-creative-work`
13. SideFX and Nvidia bring MCP-powered AI agents to Houdini 22's rigging workflow at Siggraph 2026 — Jon Peddie Research, 22/06/2026 — `https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/`
14. Working with PCG and LLMs Using Unreal MCP — Epic Games, documentação do Unreal Engine 5.8 — `https://dev.epicgames.com/documentation/unreal-engine/working-with-pcg-and-llms-using-unreal-mcp-in-unreal-engine`
15. Config 2026: New Materials, New Tools and a More Expressive Canvas — Figma — `https://www.figma.com/blog/config-2026-recap/`
16. Graphite — features e roadmap — `https://graphite.art/features/`
17. An early look at the Graphite 2D graphics editor — LWN.net, 26/12/2025 — `https://lwn.net/Articles/1051242/`
18. Canva makes motion graphics and animation app Cavalry free — CG Channel, 16/04/2026 — `https://www.cgchannel.com/2026/04/canva-makes-motion-graphics-and-animation-app-cavalry-free/`
19. img2threejs — repositório oficial, 16,3 mil estrelas, Apache 2.0 — `https://github.com/img2threejs/img2threejs`
20. img2threejs Turns One Photo Into Procedural Three.js Code — WebGPU.com, 30/07/2026 — `https://www.webgpu.com/showcase/img2threejs-photo-to-procedural-threejs-code/`
21. LLM Ultimate Challenge: Interactive GLSL Shader Art — Artificial Analysis, microeval (sem data apurada) — `https://artificialanalysis.ai/microevals/llm-ultimate-challenge-interactive-glsl-shader-art-1756340323607`

**O lado do pixel, e o substrato**

22. Inside Meshy's $400M Raise for 3D Assets — Naavik, julho de 2026 — `https://naavik.substack.com/p/inside-meshys-400m-raise-for-3d-assets`
23. Project Genie: AI world model now available for Ultra users in U.S. — Google, 29/01/2026 — `https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/`
24. WebGPU Hits Critical Mass: All Major Browsers Now Ship It — WebGPU.com, 01/12/2025 — `https://www.webgpu.com/news/webgpu-hits-critical-mass-all-major-browsers/`

**Custo, direito e Brasil**

25. Code maintainability plummets in the AI coding era — LeadDev, 07/07/2026 (dados GitClear/GitKraken, 623 milhões de mudanças) — `https://leaddev.com/ai/code-maintainability-plummets-in-the-ai-coding-era`
26. US Supreme Court Declines to Consider Whether AI Alone Can Create Copyrighted Works — Morgan Lewis, março de 2026 (*Thaler v. Perlmutter*, nº 25-449, cert. negado em 02/03/2026) — `https://www.morganlewis.com/pubs/2026/03/us-supreme-court-declines-to-consider-whether-ai-alone-can-create-copyrighted-works`
27. The Creatives of the Future: How Artificial Intelligence is Reshaping the Creative Industry in Brazil — Reglab, 19/05/2026 (qualitativo, 7 entrevistados, não generalizável por declaração dos autores) — `https://reglab.com.br/en/the-creatives-of-the-future-ai-creative-industry/`

## 12. Anexo — o levantamento bruto

Sem edição e sem limite, como manda a Fase 6 da skill. É aqui que fica a prova de que a dúvida
aconteceu.

### 12.1 A entrevista, e o que eu preenchi sozinho

A skill é bloqueante na Fase 1: as nove perguntas vão de uma vez e não se produz nada antes da
confirmação. Nesta rodada **não há humano para responder** — a execução é em lote, e as respostas
vieram escritas no despacho. Isso não dispensa o registro: dispensa apenas a espera. Abaixo, o que
foi respondido, e o que **eu** decidi.

| # | Pergunta | Resposta recebida |
|---|---|---|
| 1 | Tema e fronteira | Tema dado ("Gerar geradores: design procedural e creative coding com IA"). **Fronteira não dada** — preenchida por mim a partir do bloco "Fronteira com os vizinhos" do material da disciplina |
| 2 | Horizonte | 2031 |
| 3 | Recorte geográfico | Global, com uma nota sobre o Brasil |
| 4 | Para quem | Quem projeta mídia e interação |
| 5 | O que já está descartado | O que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão |
| 6 | Viés desejado | Neutro |
| 7 | O que faria mudar de ideia | Evidência de que a adoção passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe |
| 8 | Quantas disrupções-raiz | **Não respondida** — adotei 3 |
| 9 | Posso navegar | Sim — WebSearch e WebFetch de verdade, citando só o que foi aberto |

```
RECORTE FECHADO — confirmado por despacho, sem interlocutor humano nesta rodada
  tema ................ Produzir a regra que produz o artefato, e o que muda quando e a IA
                        que escreve essa regra
  nao e ............... captura de realidade (tema 10); midia sintetica como midia (tema 12);
                        geracao procedural classica e creative coding sem IA (substrato maduro);
                        produtividade de programacao em geral; agente autonomo nao supervisionado
  horizonte ........... 2031
  regiao .............. global, com nota sobre o Brasil
  publico ............. quem projeta midia e interacao
  descartado .......... o que ja e comum em produto de massa (regua da disciplina)
  vies ................ neutro
  falsificador ........ adocao passou da maioria inicial (Rogers), OU a tecnologia so acelera
  raizes .............. 3
  navegacao ........... sim
  SUPOSICOES MINHAS ... (a) a fronteira inteira, derivada do material da disciplina;
                        (b) o numero de raizes (3), por ausencia de resposta a pergunta 8;
                        (c) que "uma nota sobre o Brasil" admite nota negativa — isto e, dizer
                            que nao ha medicao brasileira, em vez de inferir uma
```

**Perguntas condicionais que eu deveria ter feito, e a resposta que adotei no lugar.** A skill
autoriza uma segunda rodada em quatro casos; três se aplicavam:

- *A fronteira colide com um vizinho.* Colide com dois — tema 10 (captura) e tema 12 (mídia
  sintética). **Adotei:** o lado deste mapa é a **regra como artefato**; captura e pixel entram só
  como termo de comparação econômica, nunca como objeto.
- *Horizonte incoerente com o tema.* Cinco anos para software de criação é razoável — nem curto
  demais (como seria para infraestrutura) nem longo demais. **Não havia o que perguntar.**
- *A resposta 5 contradiz a 1.* Aqui havia risco real: descartar "o que já é comum em produto de
  massa" poderia descartar o tema inteiro, já que geração procedural **é** comum em produto de
  massa (todo jogo com terreno gerado, todo motion design com duplicador). **Adotei:** o descarte
  vale para a *técnica procedural*, não para a *autoria do gerador por IA*, que é o objeto. Esta é
  a decisão mais consequente desta rodada, e ela é minha.

### 12.2 A triagem de maturidade — as nove candidatas e os cinco testes

Rodadas em ordem: T1 (régua), T2 (substituição), T3 (por que agora, com sinal datado dos últimos 24
meses), T4 (precondição faltante), T5 (rotina). **Reprovação em T1 ou aprovação em T5 encerra: é
maduro.**

| # | Candidata | T1 | T2 | T3 | T4 | T5 | Veredito | 3H |
|---|---|---|---|---|---|---|---|---|
| C1 | Geração procedural clássica (ruído, WFC, L-system, PCG de terreno) | ✗ | — | — | — | ✓ | **MADURO** | H1 |
| C2 | Creative coding (Processing, p5.js, Shadertoy, openFrameworks) | ✗ | — | — | — | ✓ | **MADURO** | H1 |
| C3 | Grafos de nós de autoria (Houdini, geometry nodes, Substance, Cavalry) | ✗ | — | — | — | ✓ | **MADURO** | H1 |
| C4 | Assistente que completa código gráfico (autocompletar no editor) | ✗ | ✗ | ✓ | ✗ | ✓ | **MADURO (H2−)** | H2− |
| C5 | Geração de malha/textura por difusão (Meshy, Tripo) | ✗ | ✗ | ✓ | ✓ | ~ | **EMERGENTE, não é o tema** | H2+ |
| C6 | Mundo gerado quadro a quadro (Genie 3, Project Genie) | ✓ | ✓ | ✓ | ✓ | ✗ | **EMERGENTE, é o tema 12** | H3 |
| C7 | **IA escrevendo o gerador como código executável** | ✓ | ✓ | ✓ | ✓ | ✗ | **DISRUPTIVO → R1** | H2+ |
| C8 | **Ferramenta procedural dirigida por agente (MCP, conectores, validador)** | ✓ | ✓ | ✓ | ✓ | ✗ | **DISRUPTIVO → R2** | H2+ |
| C9 | **Escolha econômica de representação na entrega (programa × pixel)** | ✓ | ✓ | ✓ | ✓ | ✗ | **DISRUPTIVO → R3** | H2+/H3 |

**Por que cada reprovada reprovou, em uma linha cada:**

- **C1 reprova T1.** Gerar terreno por ruído não mudou o que é possível fazer desde os anos 1980 —
  mudou quanto terreno cabe no orçamento. E aprova T5 com folga: é caminho de instalação padrão, com
  framework documentado na Unreal e curso de iniciante no Blender.
- **C2 reprova T1 e aprova T5.** Processing tem mais de vinte anos, Shadertoy mais de dez. É
  comunidade estabelecida, com modos de falha conhecidos e ensino formalizado. **Substrato.**
- **C3 reprova T1.** O grafo de nós é a forma madura de escrever regra à mão. O que muda em 2026 não
  é o grafo: é **quem o escreve**. A gratuidade do Cavalry (abril de 2026) é mudança de **arranjo e
  preço**, não de artefato — e a skill obriga a dizer isto: *tecnologia madura pode participar de uma
  disrupção sem ser a disrupção*.
- **C4 reprova T1, T2 e T4 — e é o caso exemplar de H2−.** Autocompletar shader faz o presente durar
  mais: o mesmo especialista, na mesma ferramenta, mais rápido. Se eu tirasse isso, um time
  competente **não mudaria o objetivo**, só aceitaria mais prazo. Nada falta acontecer — já chegou.
  **É exatamente a inovação que se disfarça de tendência**, e a razão de o Three Horizons ter sido
  acoplado à Fase 2.
- **C5 reprova T1 para *este* tema.** Gerar malha por difusão é emergente e importante — a Série B
  de US$ 400 milhões da Meshy prova —, mas não muda o que é possível *no eixo deste mapa*: continua
  produzindo **o artefato**, não a regra. Entra no mapa como **força contrária nomeada**, não como
  raiz. Este foi o julgamento mais próximo da linha em toda a triagem.
- **C6 é emergente, disruptivo e do vizinho.** Project Genie passa em tudo — inclusive T4, com a
  precondição nomeada e pública ("limitação de 60 segundos nas gerações"). Mas gerar mundo em pixels
  é o tema 12 e o tema 10 misturados. Entra aqui **só** como o outro lado de R3.

**A recusa parcial, na forma que a skill exige.** O tema recebido é, na maior parte da sua
superfície, maduro — três das nove candidatas são H1 e uma é H2−. A skill manda recusar e
reenquadrar:

```
RECUSA PARCIAL — o tema como esta e majoritariamente maduro

MADURO, e por que (com o teste que reprovou):
  · Geracao procedural classica — reprova T1: muda escala e custo, nao o que e possivel
  · Creative coding (Processing/p5/Shadertoy) — reprova T1 e aprova T5: rotina ha uma decada
  · Grafos de no de autoria (Houdini, geometry nodes) — reprova T1: e a forma madura da regra
  · Autocompletar codigo grafico — reprova T1/T2/T4: e H2−, escora o presente
EMERGENTE que sobrou:
  · Geracao de malha por difusao — passa T1/T3/T4 no eixo do artefato, nao no da regra
  · Mundo gerado quadro a quadro — passa tudo, mas pertence ao tema 12
DISRUPTIVO, com incumbente nomeado:
  · IA escrevendo o gerador — torna sem valor a AUTORIA MANUAL DO GERADOR, entra por
    mercado novo (quem nunca abriu o Houdini) e pela baixa (prop de fundo, variacao descartavel)
  · Ferramenta dirigida por agente — torna sem valor o CONHECIMENTO DE INTERFACE, entra por
    mercado novo (quem nao abre a ferramenta) e pela baixa (setup repetitivo)
  · Escolha economica de representacao — torna sem valor a CADEIA DO ASSET COMO ARQUIVO no
    segmento descartavel, entra pela baixa (web, movel, oculos)

RECORTE EMERGENTE PROPOSTO
  Nao "design procedural com IA", e sim: o que acontece quando escrever o gerador fica barato
  e verificar o gerador continua caro.

Rodo com este recorte, ou voce prefere outro?
```

**Não houve resposta — não havia interlocutor.** Rodei com o recorte proposto e registro que a
escolha foi minha. Se o recorte estiver errado, o mapa inteiro está.

### 12.3 A bateria adversarial — as seis provas, efeito a efeito

Aplicadas a todos os quinze efeitos que existiam antes do corte. Três morreram, três foram
rebaixados, nove passaram.

**P1 — Extrapolação linear** (o efeito é o presente em outro volume?)

- `e1`, `e2`, `e5`: passam. Cada um introduz ator ou mecanismo que hoje não opera nesse papel — o
  cliente recebendo regra, o novato citando repertório, o briefing declarando representação.
- `e6` **quase morreu aqui**: "contar custo em tokens e bytes" pode ser lido como "medir melhor o
  que já se mede". Sobreviveu porque o `img2threejs` mostra a conta **decidindo a arquitetura** da
  ferramenta, não só medindo-a — o projeto se define como "deliberadamente eficiente em tokens".
  Confiança mantida em `media`, não elevada.

**P2 — Velocidade de adoção** (o prazo assume adoção mais rápida que qualquer caso comparável?)

- `e3` (prazo 2027): o caso comparável é a adoção de protocolos de integração em ferramentas de
  autoria. Três fabricantes concorrentes publicaram em cinco meses (Anthropic em abril, SideFX em
  junho, Epic na documentação do 5.8). **O prazo é conservador**, não ousado.
- `e5.1.1` (formato de entrega, 2031) **levou dano aqui**: formatos de entrega levam **uma década**
  para se estabelecer — a extensão de splats para glTF só chegou a candidata a versão no começo de
  2026, anos depois dos primeiros splats. Rebaixado para `confianca: baixa` e mantido.
- `e6.1` (geração no dispositivo, 2030): rebaixado para `sinal: fraco` e `confianca: baixa`. Não há
  caso histórico de migração de geração para o cliente nessa velocidade; a que houve — shader em
  tempo real — levou quinze anos.

**P3 — Já aconteceu** (o efeito já é verdade hoje em algum lugar?)

- **MORTE 1 — `e1.3.1`** ("estúdios passam a manter biblioteca canônica de geradores e a exigir
  justificativa para gerador novo"). **Já é verdade hoje**: sistemas de design, bibliotecas de
  componentes e políticas de reuso existem há uma década e fazem exatamente isso. Não é efeito, é
  estado da arte. **Eliminado** e movido, em substância, para a seção 3.
- `e4` **sofreu aqui e sobreviveu com ressalva**: "a interface vira lugar de conferir" já é
  parcialmente verdade em pipelines com automação pesada. Sobreviveu porque o que se confere hoje é
  **resultado**, e o que se conferirá é **regra** — muda o objeto da inspeção, não só a quantidade.

**P4 — Força contrária** (quem perde, e o que essa pessoa pode fazer?)

Esta foi a prova mais destrutiva da rodada, e a mais útil.

- **MORTE 2 — `e3.1.1`** ("ferramenta fechada sem API textual perde o mercado profissional para a
  open-source dirigível"). **A evidência diz o contrário.** Quem publicou pacote de contexto
  primeiro foram **fabricantes fechados**: SideFX (Houdini), Epic (Unreal), Autodesk (Fusion, via
  conector), Adobe. O aberto (Blender) entrou pelo conector de terceiro. O efeito supunha que
  abertura e dirigibilidade andam juntas; **não andam**. **Eliminado.**
- `e5.2` sobreviveu com força contrária nomeada e razão para ela perder só **parcialmente**: a
  cadeia do asset-como-arquivo tem capital (US$ 400 milhões numa única rodada em julho de 2026) e
  tem distribuição. A razão para ela perder o segmento descartável é econômica e está medida
  (10–15% de ganho em props; nada em montagem de cena). A razão para ela **não** perder o resto é a
  mesma. Confiança mantida em `media`.
- `e1` recebeu a força contrária mais concreta de todas: **o cliente pode simplesmente não querer a
  regra**. Um cliente que recebe um programa recebe também uma obrigação de manutenção. Isso não
  mata o efeito — desloca-o: a regra vira entregável **onde há quem a mantenha**, e vira passivo onde
  não há.

**P5 — Precondição única** (o galho inteiro está pendurado numa só aposta?)

- O galho de **R1 inteiro** depende de uma coisa: **verificação barata**. Se o verificador não
  ficar barato, `e1`, `e1.1`, `e1.2`, `e1.2.1` e `e1.1.1` caem juntos — cinco efeitos. **Isto é uma
  fragilidade estrutural do mapa**, declarada aqui e na seção 7. Não matei os efeitos porque a
  precondição está nomeada e datável; registro que um único fato os derruba em bloco.
- **MORTE 3 — `e6.1.1`** ("conteúdo distribuído como semente e regra, ninguém vê a mesma obra, o que
  quebra a noção de cópia"). Exige **duas** precondições não validadas simultaneamente — geração em
  tempo de execução confiável **e** um enquadramento jurídico que trate regra como obra. Pela regra
  de parada declarada na Fase 4, isso não é nó da roda: é **sinal fraco**. **Eliminado da árvore** e
  movido para a seção 6 (sinais fracos 1 e 2, onde aparece dividido em suas duas metades).

**P6 — Camada (CLA)** (o efeito é verdadeiro só na litania?)

Passagem dos efeitos principais pelas quatro camadas de Inayatullah:

| Camada | O que este mapa diz |
|---|---|
| **Litania** | "A IA escreve o gerador" — a manchete, e a parte verificada: 0,974 de executabilidade |
| **Causas sistêmicas** | A economia da geração está sendo recontada em tokens e bytes; fabricantes disputam ser dirigíveis por máquina; capital concentrado no lado do pixel |
| **Visão de mundo** | **Que editabilidade e explicabilidade valem dinheiro.** Nenhum efeito da árvore enuncia isto, e todos dependem disso |
| **Mito/metáfora** | O artesão que conserta, contra a fonte inesgotável que não precisa de conserto |

- **REBAIXAMENTO 1 — `e1.2.1`** ("quem redige o critério acumula poder editorial"). Verdadeiro na
  litania e frágil abaixo dela: supõe que o critério seja escrito por alguém **de dentro** do
  processo criativo, e não herdado do validador do fabricante — que é justamente o que R2 descreve.
  Rebaixado para `confianca: baixa`.
- **REBAIXAMENTO 2 — `e2.2.1`** ("o desvio deliberado vira assinatura de autoria"). É a história que
  a cultura já conta sobre toda padronização, e por isso soa verdadeira antes de ser examinada.
  Mantido, em `confianca: baixa`, com a ressalva de que é o efeito mais mitológico do mapa.
- **REBAIXAMENTO 3 — `e3.2`** ("licenciamento sai do assento humano"). Tinha `sinal: medio` bem
  sustentado (Cavalry grátis para indivíduo, pago para estúdio, em abril de 2026), mas a camada de
  visão de mundo mostra que um único movimento de uma única empresa, logo após aquisição, é
  estratégia de mercado antes de ser tendência. `confianca` rebaixada para `baixa`, `sinal` mantido
  em `medio`.

**Cota mínima de dano — cumprida.** Uma morte por raiz: `e1.3.1` (R1, por P3), `e3.1.1` (R2, por
P4), `e6.1.1` (R3, por P5). Mais três rebaixamentos por P2 e P6. A bateria **não** derrubou nenhum
efeito de primeira ordem, e a seção 7 diz por que isso é um problema, não um elogio.

### 12.4 Buscas que não deram em nada, e fontes que falharam

| O que procurei | O que aconteceu |
|---|---|
| Pesquisa de adoção de "IA escreve gerador" em estúdios | **Nada.** É a lacuna central do mapa (seção 7) |
| "What game developers actually want from procedural level generation tools" (TU Delft) | **Os dois links do PDF falharam** — um 404, outro binário ilegível. Descrição atraente, não citada, não usada |
| *Reflecting Process Expertise…* via agregador (pith.science) | Página vazia; recuperado pelo arXiv |
| Política de conteúdo gerado por IA no Shadertoy e no OpenProcessing | **Nada.** Nenhuma declaração pública encontrada. Seria a evidência mais direta sobre a reação da comunidade de creative coding |
| Números de homogeneização em *Design Homogenization in Web Vibe Coding* | PDF ilegível por compressão; trabalho citado **sem** número |
| Números do Reflexa (criatividade em creative coding com LLM) | PDF ilegível; citado só como existente |
| Edição 2026 do festival Multiverso (arte generativa, Rio) | Só encontrei registro até 2021. **Não citado** |
| Censo/pesquisa 2026 da Abragames | Terceira edição **em coleta**; sem dados publicados. **Não citado** |
| Data do microeval da Artificial Analysis | **Não consegui apurar.** Usado só como ilustração |
| Números do ProcFunc sobre redução de erro de código por VLM | Resumo diz "significativamente menos", **sem número**. Citado como qualitativo |
| Curso ou sessão do SIGGRAPH 2026 especificamente sobre síntese de programa gráfico | Encontrei o programa geral e trabalhos avulsos, nada dedicado. **Não citado como marco** |

**Um número que foi deliberadamente descartado.** "Mais de 60% dos profissionais de Blender que
implementaram animação procedural viram 35% de redução no tempo de produção, segundo relatório da
indústria de 2026." Dois números redondos, fonte não identificada, veículo secundário. Não entrou.
A regra da skill — *número redondo é suspeito; ou tem link, ou vira "não consegui apurar"* — existe
para este caso exato.

### 12.5 Caminhos abandonados

**A quarta raiz que não foi.** "O gerador como objeto jurídico" foi candidata séria: *Thaler v.
Perlmutter* tem data (02/03/2026) e efeito real. Reprovou em **T3 para este tema**: a decisão é
sobre **saída**, não sobre **regra**, e não achei nada tratando do caso em que o objeto licenciado
é o programa que gera infinitas saídas. Sinal datado sobre o *vizinho* não é sinal datado sobre o
tema. Virou sinal fraco (seção 6) e cenário surpreendente (seção 9.3).

**Um enquadramento que eu testei e descartei.** Cheguei a montar as raízes como "gerar pixel ×
gerar programa", com a disputa no centro. Descartei por dois motivos: (a) a disputa é **consequência**
de as duas capacidades existirem, não causa; e (b) enquadrar assim obrigaria o mapa a torcer por um
lado, e o viés pedido era neutro. O que sobrou dessa tentativa é a R3, que trata da **escolha**, não
da vitória.

**Uma fusão que eu considerei e recusei.** R1 e R2 quase viraram uma raiz só ("a IA opera a criação
procedural"). Recusei porque **os atores e os mecanismos são diferentes**: em R1 quem muda é o
designer e o mecanismo é a especificação; em R2 quem muda é o fabricante e o mecanismo é a
distribuição de contexto. Fundi-las produziria efeitos de primeira ordem com dois atores, que é
exatamente o que a regra de expansão proíbe.

**Um efeito que eu queria e não consegui sustentar.** "A pesquisa acadêmica em geração procedural
migra de inventar algoritmos para desenhar linguagens em que o modelo erra menos." Tenho dois
artefatos apontando para lá — o `ProcFunc` (mudar a biblioteca para reduzir erro do VLM) e o
`MultiMat` (busca em árvore restrita garantindo correção estática) —, e um terceiro apontando para o
lado oposto (correção de erro **sem** LLM, por busca de programa, no SIGGRAPH Asia 2025). Dois
artefatos e uma contradição não sustentam um efeito; sustentam uma observação, e ela ficou na
seção 3.2.

### 12.6 As quatro perguntas do teste cruzado

1. **Fez perguntas antes de rodar?** Sim — Fase 1, seção 12.1, com as nove perguntas tabuladas, o
   bloco `RECORTE FECHADO` e as três suposições declaradas. Ressalva honesta: **não houve espera por
   confirmação**, porque não há interlocutor nesta rodada em lote. A skill exige echo-back e
   confirmação explícita; entreguei o echo-back e registrei a ausência da confirmação em vez de
   fingi-la.
2. **Separou novidade de comum, e recusou o comum?** Sim — Fase 2, seção 12.2: nove candidatas, cinco
   testes, **quatro recusas nomeadas com o teste que reprovou cada uma** (C1 e C2 por T1 e T5, C3 por
   T1, C4 por T1/T2/T4 e classificada como H2−), mais duas emergentes devolvidas aos temas vizinhos.
   O bloco de `RECUSA PARCIAL` está transcrito por inteiro.
3. **Duvidou do próprio resultado?** Sim — Fase 5, seção 12.3: seis provas aplicadas a quinze
   efeitos, **três mortes** (`e1.3.1` por P3, `e3.1.1` por P4, `e6.1.1` por P5), **três
   rebaixamentos** (`e1.2.1`, `e2.2.1`, `e3.2`), cota de dano cumprida com ao menos um efeito
   eliminado por disrupção-raiz. A seção 7 registra o que a bateria **não** conseguiu derrubar e por
   que isso é confissão, não elogio.
4. **Saiu no formato?** Sim — Fase 6, seção 12.7, com a autochecagem rodada e a saída colada.

### 12.7 Autochecagem — rodada, com a saída colada

```
$ grep -c "^## " tendencia-gerar-geradores-design-procedural-e-creative-coding-com-ia.md
12
```

```
$ python3 verificacao.py
faltam: nada
disrupcoes_raiz na roda: 3
efeitos por ordem: {1: 6, 2: 11, 3: 6}
ordem 3 com confianca alta: 0 (cota: no maximo 1)
contadores batem: True
ids unicos: True | total de ids: 23
prazo minimo: 2027
```

```
$ grep -cE '^[0-9]+\. ' <secao 11>
27
$ grep -coE 'https?://[^`]+' <secao 11>
27
```

**O que o script não pega, conferido à mão:**

- **Todo link da seção 11 foi aberto por mim nesta sessão, em 17/09/2026.** As duas fontes que
  falharam ao abrir (o PDF do levantamento da TU Delft, em dois endereços, e o agregador
  pith.science) **não estão** na seção 11 — estão na 12.4, com o motivo da falha.
- **A contagem de `fontes: 27` diz a verdade:** são 27 entradas numeradas e 27 endereços na
  seção 11, e cada uma corresponde a uma leitura efetiva, não a um resultado de busca.
- **Os oito títulos livres deste anexo são `###`**, e a contagem de `^## ` imprime exatamente 12.
- **`prazo` mínimo é 2027**, maior que o ano corrente (2026) mais um, como a calibração exige; os
  seis efeitos de ordem 1 caem entre 2027 e 2028, dentro do horizonte de 2031; a monotonicidade ao
  longo de cada galho foi verificada pelo script, por asserção.
- **Nenhum efeito é pergunta** — verificado por asserção, e relido à mão, porque o material da
  disciplina traz as "perguntas que mobilizam a roda" e a tentação de convertê-las diretamente em
  nós é real. Elas foram usadas como semente de busca, não como efeito.
- **Cota de humildade cumprida com folga:** zero efeitos de ordem 3 com `confianca: alta` (a cota
  permite um). As duas únicas confianças altas do mapa estão na ordem 1 e na ordem 2 — `e3` e
  `e4.1` — e a seção 7 explica por que isso não é motivo de orgulho: ambos descrevem o que já
  começou.
