---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-22
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 12
efeitos_ordem_2: 20
efeitos_ordem_3: 21
tecnologias_citadas: [img2threejs, Three.js, WebGPU, Blender, Blender Geometry Nodes, Blender MCP Server, Houdini, Houdini 22, Apex Script, MCP, LL3M, SceneCraft, MeshCoder, Procedura, ShapeCraft, 3DCodeBench, 3DCodeArena, VLMaterial, Im2Sim, GLSL, AI Co-Artist, Shadertoy, Cavalry, Canva, Affinity, Remotion, React, manim, manim-web-mcp, p5.js, Processing, ml5.js, Graphite, WaveFunctionCollapse, Townscaper, .kkrieger, .werkkzeug3, Gaussian Splatting, SPZ, KSPLAT, Meshy, Hunyuan3D, Art Blocks, Ethereum, GitHub Copilot, TypeScript, AutoUE, Unreal Engine PCG, Unity, Godot]
fontes: 29
confianca: media
experimento: "Gerador ou pixel? — a mesma foto reconstruída como programa Three.js e como malha gerada, medida em bytes, tokens, tempo de edição e preferência cega"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Até 2046, a mudança que este tema anuncia não é "a IA gera imagem 3D"; é que o artefato
entregue deixa de ser o objeto e passa a ser **o programa que produz o objeto** — e que quem
escreve esse programa é, na maior parte das vezes, um modelo. O mapa parte de três rupturas:
(1) modelos escrevem geradores gráficos que funcionam (shape programs, shaders, grafos de nós)
a partir de foto, texto ou exemplo; (2) o gerador vira formato de entrega, executado no
cliente, e a economia da mídia passa a ser contada em tokens e milissegundos de GPU em vez de
megabytes; (3) verificadores automáticos fecham o laço gerar-avaliar, tirando o humano de cada
iteração e deixando-o só no aceite. A convergência mais forte é que as três empurram o
trabalho de design para **escrever critérios** — o que aceitar, o que recusar — e não
artefatos. As retroações mais claras: falta de dados procedurais de treino (que dá poder a
quem é dono do software de criação), a "mesmice procedural" que o público percebe, a
insegurança de executar código gerado e a ausência de verificador para movimento e tempo.
Confiança geral média: a primeira ordem tem artefatos verificáveis hoje; a terceira é
exploratória.

## 2. O tema

**O que é.** Design procedural é produzir a regra em vez do artefato: um programa que, dado
um parâmetro ou uma semente, produz a árvore, a textura, o mapa, a animação. Isso existe há
décadas — na demoscene (.kkrieger, 2004, um FPS inteiro em cerca de 95 KB porque texturas são
guardadas como "histórico de criação", não como pixels), nos jogos (WaveFunctionCollapse em
Bad North, Caves of Qud, Townscaper), no motion design (Cavalry), no VFX (Houdini). O que
muda em 2025–2026 é o **autor do gerador**: modelos de linguagem e de visão-linguagem passaram
a escrever programas gráficos que executam — reconstroem um objeto de uma foto como código
Three.js, escrevem o shader GLSL, montam o grafo de materiais do Blender.

**Onde encosta em mídia e interação.** Em toda cadeia de produção de mídia visual: 3D para
web e jogo, motion design de marca, animação explicativa (manim), arte generativa, interface
3D, conteúdo de realidade aumentada. E encosta na **forma de entrega**: um objeto que trafega
como programa é editável, leve e explicável — o oposto do pixel gerado ou da malha gerada,
que são pesados e opacos.

**Por que merece um mapa de futuro e não um estado da arte.** Porque a disputa entre "gerar
pixel/malha" e "gerar programa" ainda não foi decidida e decide coisas de segunda e terceira
ordem: quem guarda o ativo de um estúdio, o que se ensina num curso de design, o que é
protegível como obra, que peso a mídia tem numa rede e num óculos. Um levantamento diria o
que existe; este mapa pergunta o que deixa de valer se a regra — e não a peça — passar a ser
o produto.

**Fronteiras (declaradas no briefing).** Capturar realidade em 3D (splats, fotogrametria) é o
tema 10: aqui entra só como concorrente de formato. Gerar vídeo e imagem como mídia é o tema
12. Aqui o objeto é **a regra como artefato, e a IA escrevendo a regra**.

**Premissas da rodada.** Briefing completo recebido em modo não interativo: horizonte 2046;
público quem projeta mídia e interação; recorte global com nota sobre o Brasil; descartado de
início o que já é comum em produto de massa; nenhuma raiz suspeita; viés neutro; ideias
óbvias a excluir são as que servem para qualquer tema; falseadores: adoção já além da maioria
inicial (Rogers) ou tecnologia que não rompe nada; profundidade de três ordens; modo a partir
de um tema. O que o briefing não cobriu está em 12.2. Como o briefing é completo, a confiança
**não** foi rebaixada por ausência de entrevista.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026 (24 buscas, 32 páginas tentadas, 30 abertas, 29
citadas; as que não abriram ou saíram da lista estão em 12.4).

### 3.1 O que já existe e funciona

- **Foto → programa Three.js.** `img2threejs` (Apache 2.0, 16,6 mil estrelas, v2.0 com
  arquitetura de plugins) reconstrói o objeto de uma imagem de referência como modelo Three.js
  procedural — primitivas, shaders procedurais, geometria gerada, pivôs e colisores — com saída
  em TypeScript mais uma especificação JSON, "não um download opaco de malha". Roda como skill
  do Claude Code; o custo declarado no repositório é de cerca de 80 mil a 180 mil tokens por
  objeto de superfície dura. O princípio do projeto é "os scripts impõem, o modelo julga": o
  trabalho mecânico e a validação vão para scripts Python determinísticos, e há portões
  obrigatórios entre as passadas (inventário de detalhe, checagem estrita antes do código,
  confiança por região, render lado a lado). O próprio repositório declara o limite: uma imagem
  não revela a geometria oculta, e personagens saem estilizados, não fotorreais. [1]
- **Blender escrito por agentes.** LL3M (Lu, Chen, Dinh, Lang, Holtzman, Hanocka; ago/2025)
  é um sistema multiagente que gera assets escrevendo Python do Blender — planeja, recupera,
  escreve, depura e refina — com um RAG sobre a documentação da API (BlenderRAG), e defende o
  código como representação "interpretável, legível, documentada" que permite um laço de
  cocriação. [5] O Blender mantém no "Blender Lab" um servidor MCP oficial (v1.0.3, exige
  Blender 5.1+), com um aviso em destaque: o servidor "executa código gerado por LLM no Blender
  sem nenhuma proteção" contra remoção ou envio de dados, e recomenda máquina virtual. [4]
- **Houdini com agente, pelo fabricante.** No keynote do Houdini 22 (Londres, 22/06/2026), a
  SideFX mostrou o *Apex Script Comfort Package*: extensão de VS Code, painel Python e um
  servidor MCP que liga um LLM a uma biblioteca "eficiente em tokens" de sintaxe, guias e
  exemplos, para gerar código de rigging procedural. Está em prévia, a caminho do SideFX Labs
  (experimental). [7]
- **Objeto como montagem paramétrica.** Procedura (Lin et al., 26/08/2026) escreve o objeto
  como "montagem procedural": um programa paramétrico cujas peças nomeadas se ligam por
  encaixes tipados e checáveis por máquina; afirma superar geradores 3D nativos e agentes de
  código anteriores e produzir "as arestas mais nítidas" entre os métodos testados. [3]
- **Materiais procedurais a partir de imagem.** VLMaterial (Li, Wu, Solar-Lezama, Zheng,
  Shi, Bickel, Matusik; ICLR 2025 Spotlight) ajusta um modelo de visão-linguagem para gerar
  materiais procedurais como programas Python a partir de uma imagem, e publica um dataset
  aberto de materiais procedurais. [16] "Reflecting Process Expertise…" (Gupta et al., ECCV
  2026) extrai "traços de processo" de vídeos-tutorial e os compila em grafos de material do
  Blender; com cinco artistas de Blender, os materiais "exigiram menos edições"; estudo com 150
  participantes. [15]
- **Shader com IA.** AI Co-Artist (Yuksel e Sawaf, nov/2025) usa GPT-4 para evoluir
  animações de shader GLSL no estilo Picbreeder, sem que o usuário escreva código, e relata que
  isso "reduz significativamente o limiar técnico". [6] A Artificial Analysis mantém um
  microteste público ("Interactive GLSL Shader Art": fractal de Julia animado e interativo em
  Three.js + GLSL) com 16 modelos avaliados e resultado dividido — oito com voto positivo, oito
  sem. [28]
- **Vídeo e motion como código.** Remotion (React → MP4/WebM/GIF) publica "Agent Skills"
  oficiais para Claude Code, Codex, Kimi Code e Cursor (`npx skills add remotion-dev/skills`).
  [22] O manim original (3b1b/manim, MIT) tem 94,1 mil estrelas. [11] Cavalry — motion design
  procedural, lançado em 2020 pela Scene Group (egressos da equipe do MASH do Maya) — foi
  comprado pela Canva em 25/02/2026 [10] e ficou gratuito para artistas individuais, inclusive
  em uso comercial, a partir de 16–17/04/2026; estúdios precisam do plano Enterprise. [9]
- **Editor 2D procedural por nós.** Graphite (Rust, Apache/MIT, 27,3 mil estrelas, alfa)
  combina camadas com um grafo de nós "construído mais como motor de jogo do que como app
  criativo". [24]
- **Jogo inteiro por agentes.** AutoUE (ACL'26 Findings) coordena agentes para recuperar
  modelos, gerar cena com o PCG do Unreal Engine, escrever código de jogabilidade e fazer
  *playtest* automatizado. [27]
- **A regra como obra já tem mercado.** Na Art Blocks, "o algoritmo é a obra": 90% dos
  projetos podem ser reconstruídos só a partir da blockchain, com p5.js e three.js guardados
  on-chain (anúncio de 27/11/2024). [18]

### 3.2 O que existe e ainda não funciona

- **3DCodeBench** (Gao et al., 31/05/2026; entre os autores, nomes ligados ao Google e à USC — afiliação não confirmada) avalia 12 modelos de visão-linguagem
  escrevendo código 3D procedural a partir de texto e imagem. Achados: as falhas vêm
  "principalmente de incompatibilidades de API", e mesmo os renders bem-sucedidos têm "peças
  desconectadas ou flutuando"; mais orçamento de raciocínio e refinamento em várias rodadas
  ajudam; há "necessidade crítica de dados de código procedural de alta qualidade". Publica um
  ranking por preferência humana (3DCodeArena). O resumo não traz taxa de sucesso. [2]
- **Im2Sim** ("Coding the Visual World", Eppel, jan/2026): dada uma foto de nuvens,
  vegetação, cidades, o modelo identifica o mecanismo e escreve o código que o simula. Os
  modelos mostram boa compreensão de alto nível mas "capacidade limitada de reproduzir detalhe
  fino e arranjo de baixo nível". [17]
- **Movimento sem verificador.** Uma análise sobre Remotion mostra que o agente escreve e
  renderiza o vídeo mas não consegue julgar se o movimento atende ao pedido; os autores não
  encontraram nenhuma ferramenta que julgue a intenção de uma animação, e a assinatura humana
  segue como o único portão documentado. Notam também que a licença cobra US$ 0,01 por render
  na camada de automação, o que encarece cada autocorreção. [23]
- **Mesmice.** Kate Compton (2016): dá para gerar dez mil tigelas de mingau, todas
  matematicamente únicas, e o usuário "vai ver muito mingau". Unicidade perceptiva é a métrica
  que importa, e é difícil. [25]

### 3.3 Quem constrói

- **Fabricantes de software de criação:** SideFX (Houdini 22, MCP) [7]; Blender Foundation
  (MCP no Lab) [4]; Canva (Cavalry + Affinity) [9][10].
- **Laboratórios acadêmicos** (afiliações inferidas pelos nomes dos autores, não confirmadas — ver §8): Univ. de Chicago/Hanocka (LL3M) [5]; MIT e ETH (VLMaterial)
  [16]; Google/USC (3DCodeBench) [2]; UCSD/Chandraker (Process Expertise) [15]; grupo de
  Procedura [3].
- **Comunidade aberta:** img2threejs [1], Graphite [24], manim [11], WaveFunctionCollapse
  (25,3 mil estrelas) [13], Processing Foundation (p5.js) [20].
- **Concorrentes do lado "malha":** Meshy, que declara 12 milhões de usuários e exporta FBX,
  OBJ, GLB, USDZ; e Hunyuan3D (Tencent), cuja saída "exige retopologia para produção"
  segundo a comparação publicada pela própria Meshy. [19]

### 3.4 Números de adoção

| Indicador | Valor | Fonte |
|---|---|---|
| Estrelas do img2threejs | 16,6 mil | [1] |
| Tokens por objeto (img2threejs) | ~80 mil–180 mil | [1] |
| Estrelas do 3b1b/manim | 94,1 mil | [11] |
| Estrelas do Graphite | 27,3 mil | [24] |
| Estrelas do WaveFunctionCollapse | 25,3 mil | [13] |
| Usuários da Meshy (autodeclarado) | 12 milhões+ | [19] |
| Visitantes mensais de p5js.org + Editor | 353 mil | [20] |
| Contribuidores do p5.js no início de 2026 | 800+ | [20] |
| Novos devs no GitHub que usam Copilot na 1ª semana | "quase 80%" | [26] |
| Desenvolvedores no Brasil (GitHub) | 6,89 milhões, 4º país | [26] |
| Cena de 500 mil gaussianas | PLY ~118 MB; SPLAT 16,2 MB; SPZ 11,8 MB; KSPLAT 11,4 MB | [8] |
| .kkrieger | 97.280 bytes em disco | [14] |
| Projetos Art Blocks reconstruíveis on-chain | 90% | [18] |
| Designers que usam IA para escrever geradores | **sem número encontrado** | — |
| Tamanho em bytes de um objeto img2threejs | **sem número encontrado** (o repositório diz só "sem binários de vários megabytes") | [1] |

**Leitura da difusão.** Entre desenvolvedores em geral, assistente de código já está na
maioria (Octoverse). Entre quem projeta mídia, escrever gerador com IA está entre **demo
pública** e **produto de nicho**: há ferramentas oficiais em prévia (Houdini, Blender Lab),
repositórios com dezenas de milhares de estrelas, e nenhum número de uso entre designers.
É emergente, não maduro — o falseador do briefing não se confirma nesta data.

### 3.5 Nota sobre o Brasil

O Brasil é o 4º país em desenvolvedores no GitHub (6,89 milhões) [26], o que dá base para a
parte "código" do tema. A parte "design procedural" tem comunidade menor e ativa: o FILE 2026
(Centro Cultural FIESP, São Paulo, 19/08 a 11/10) tem como tema "Inter-Criatividade", obras
sobre sistemas generativos e oficinas gratuitas de creative coding, live coding e audiovisual
com IA [21]. A ClassInd, que classifica jogos no Brasil, entra no mapa em e7.1.1. Não achei
número de designers brasileiros usando IA para escrever geradores.

### 3.6 Candidatos recusados como raiz (critério §2)

- **Geração procedural em jogos** (WFC, roguelikes, Townscaper): recusada; é maduro no
  nicho de jogos desde a década de 2010 e comum em produto de massa. Tratada como contexto.
- **Creative coding em Processing/p5.js e shaders à mão:** recusada; maduro na comunidade,
  sem ruptura nova.
- **Assistente de código em geral:** recusado; adoção em maioria entre desenvolvedores novos
  ("quase 80%" na primeira semana) [26]. É pré-condição da raiz 1, não raiz.
- **Geradores de malha a partir de texto/imagem** (Meshy, Hunyuan3D): recusados por
  fronteira (é o lado "pixel/malha" dos temas 10 e 12) e por já terem produto de massa
  declarado (12 milhões de usuários). Entram como concorrente de formato.
- **Arte generativa em blockchain** (Art Blocks): recusada; nicho estabelecido desde 2020.
  Entra como contexto do efeito e4.

## 4. As disrupções-raiz

### 4.1 Raiz 1 — A IA como autora do gerador

Modelos de linguagem e de visão-linguagem escrevem programas gráficos que executam — shape
programs, shaders, grafos de nós, cenas Blender, rigs Houdini — a partir de foto, texto ou
exemplo, com laço de execução e correção.

1. **O que rompe.** A separação entre quem desenha e quem programa o sistema que desenha
   (o artista e o TD); a suposição de que trabalho procedural exige formação técnica; e a
   economia do asset como arquivo pronto, porque passa a ser mais barato pedir o programa do
   que comprar o objeto. Não é "o mesmo, mais barato": muda **o que** é entregue (regra editável
   em vez de peça) e **quem** consegue entregar.
2. **Por que agora.** Três pré-condições que não existiam em 2021: modelos de código bons o
   bastante para API gráfica de nicho (a falha dominante, segundo o 3DCodeBench, ainda é de
   API, mas já há renders) [2]; modelos de visão que leem a própria saída renderizada e
   corrigem (LL3M, img2threejs) [1][5]; e protocolos de acesso a ferramentas de criação — MCP
   oficial no Blender e no Houdini em 2026 [4][7].
3. **Onde está na difusão.** Entre demo pública e produto de nicho. Emergente.
4. **O que ainda falta.** Corpus de programas procedurais para treino [2]; verificação de
   qualidade perceptiva, não só de execução; paridade de detalhe fino com captura e malha [17];
   ferramentas oficiais saírem de prévia [4][7].

### 4.2 Raiz 2 — O gerador como formato de entrega

Em vez de enviar o objeto (malha, splat, vídeo), envia-se o programa que o produz e ele roda
no cliente; a mídia passa a ser medida em custo de execução e de geração, não em bytes.

1. **O que rompe.** O pipeline de asset como arquivo fixo (exportar, comprimir, distribuir
   binário por CDN); a ideia de que um objeto de mídia tem uma forma única; e a contabilidade
   da mídia em megabytes, que passa a ser feita em tokens (para escrever) e milissegundos
   (para executar).
2. **Por que agora.** A saída de sistemas como img2threejs é TypeScript diffável, não
   binário [1]; a concorrência (splats) ainda pesa 11–16 MB por cena de 500 mil gaussianas
   mesmo comprimida [8]; e o custo em tokens de escrever um objeto já é declarado e mensurável
   (80 mil–180 mil tokens) [1]. A demoscene provou a viabilidade técnica em 2004 [14] — o que
   faltava era quem escrevesse o gerador sem uma equipe de especialistas.
3. **Onde está na difusão.** Laboratório/demo para geração no cliente com IA. A entrega
   procedural sem IA (demoscene, Townscaper) é nicho maduro. O conjunto é **especulativo**:
   pela regra do §2, toda a cadeia desta raiz leva `confianca` no máximo média, e baixa onde o
   mecanismo depende de geração em tempo de execução.
4. **O que ainda falta.** Determinismo e versionamento do gerador entre runtimes; sandbox
   segura para executar código gerado [4]; custo de GPU e bateria no cliente; ferramentas de
   autoria que exportem o gerador em vez do asset.

### 4.3 Raiz 3 — O julgamento de máquina fecha o laço gerar-avaliar

Verificadores automáticos (render comparado ao original, checagem de conectividade,
encaixes tipados, *playtest* por agente, ranking por preferência) passam a decidir a maior
parte das iterações; o humano sai do laço interno e fica no aceite final.

1. **O que rompe.** A suposição de que o controle de qualidade visual é humano a cada passo;
   e a divisão de trabalho em que o diretor de arte comenta peças prontas. Com o laço fechado,
   o que se escreve é o **critério de aceite**, e ele é executável.
2. **Por que agora.** Os portões existem em código e são o próprio desenho dos sistemas
   recentes: "os scripts impõem, o modelo julga" [1]; encaixes "checáveis por máquina" [3];
   ambiente de execução com retorno de alta fidelidade como requisito [2]; *playtest*
   automatizado [27]; ranking público por preferência humana (3DCodeArena) [2].
3. **Onde está na difusão.** Laboratório / demo pública. Especulativo para objeto estático e
   ainda ausente para movimento: nenhuma ferramenta julga intenção de animação [23].
4. **O que ainda falta.** Verificador de tempo e movimento [23]; métrica de unicidade
   perceptiva [25]; confiança do mercado em aceitar peça que nenhum humano viu por inteiro.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A IA como autora do gerador — modelos escrevem programas gráficos executáveis (shape programs, shaders, grafos de nós) a partir de foto, texto ou exemplo"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Técnicos de pipeline em Houdini e Blender deixam de escrever a maior parte do código de rig e de nós e passam a revisar e corrigir o que assistentes conectados por MCP escrevem"
        sinal: forte
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Estúdios de VFX e jogos passam a pedir aos TDs suítes de verificação (conectividade, peças flutuantes, encaixes) em vez de ferramentas, porque a ferramenta o modelo escreve e o teste é o que garante"
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O ativo que um estúdio protege como central passa a ser seu corpus de verificadores e de traços de processo, e aquisições de estúdio passam a avaliar esse corpus mais que a biblioteca de assets"
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O posto de TD júnior que traduzia o pedido do artista em nós e scripts encolhe, e o primeiro degrau da carreira técnica em VFX deixa de existir como emprego"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Estúdios passam a formar TDs em residências internas pagas, porque o degrau júnior que formava pela prática desapareceu e o mercado não encontra sêniores"
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Designers de motion e de interface sem formação em programação produzem peças procedurais em Cavalry, Remotion e manim descrevendo o comportamento, e o código vira camada que eles leem mas não escrevem"
        sinal: forte
        prazo: 2031
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Materiais de ensino de creative coding da Processing Foundation e os cursos de design que usam p5.js separam explicitamente uma fase sem IA (esboço, leitura, depuração) de uma fase com IA"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Turmas formadas lendo código gerado não conseguem depurar o gerador quando o modelo falha, e escrever gerador à mão volta a ser diferencial pago no mercado de motion"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A estética procedural (instanciamento, ruído, simetria, repetição com variação) volta a dominar o motion de marca, porque é o que o modelo escreve bem e barato"
            sinal: medio
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Marcas passam a licenciar a identidade visual como programa gerador de variações, e o manual de marca em PDF é substituído por um repositório com parâmetros e limites"
                sinal: fraco
                prazo: 2040
                confianca: baixa
              - id: e2.2.2
                ordem: 3
                efeito: "O acabamento manual de detalhe fino, que o gerador escrito por IA não reproduz, vira a camada cara e assinada do trabalho de motion"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Uma foto de objeto passa a virar programa paramétrico editável (img2threejs, MeshCoder, Procedura) e compete no mesmo pedido com geradores de malha como Meshy e Hunyuan3D"
        sinal: forte
        prazo: 2032
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Lojas de modelos 3D prontos perdem valor em objetos de superfície dura (móveis, props, arquitetura), porque o comprador pede o programa e ajusta parâmetros em vez de comprar a malha"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Fabricantes de móveis e objetos publicam o catálogo como programa paramétrico, e o varejo online renderiza a configuração do cliente em vez de fotografar cada variante"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "A foto de um produto com desenho industrial registrado vira um programa que o reconstrói, e o clone por código cai numa zona sem regra entre desenho industrial e software"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Fabricantes passam a registrar a forma paramétrica (o programa de referência) junto do desenho, para poder provar derivação em disputa"
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Plataformas em que o algoritmo é a obra, como a Art Blocks, recebem geradores competentes escritos por IA em volume, e ter um gerador deixa de ser escasso"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Colecionadores e curadores de arte generativa passam a exigir o histórico de edições humanas do gerador como prova de autoria"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O repositório com histórico vira o documento de autenticação da arte digital, e museus arquivam repositórios como arquivam esboços e cadernos"
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O gargalo da geração procedural passa de escrever código para ter dados de treino procedurais, e quem tem corpus de programas gráficos e tutoriais controla a qualidade dos modelos"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Blender, por ser aberto e ter a API mais usada em pesquisa, vira o alvo padrão de treino e de agentes, e os fabricantes proprietários respondem com assistentes próprios e curados"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O dialeto que os modelos escrevem melhor (Python do Blender, Three.js) vira padrão de fato da geometria procedural na indústria, por um ciclo de conveniência igual ao que levou o TypeScript ao topo"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Vídeos-tutorial de artistas viram matéria-prima de treino de processo, e seus autores passam a licenciar ou bloquear esse uso"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Criadores de tutorial passam a vender o traço de processo legível por máquina como produto separado do vídeo"
                sinal: fraco
                prazo: 2038
                confianca: baixa
  - disrupcao: "O gerador como formato de entrega — envia-se o programa que produz a mídia, executado no cliente, e a mídia passa a ser contada em tokens e milissegundos em vez de megabytes"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Na web, objetos e cenas passam a trafegar como código (fábrica TypeScript mais especificação) em vez de malhas e splats de dezenas de megabytes, e o critério de escolha vira custo de execução no cliente"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Captura e procedural dividem o território 3D — o captado fica com o singular (esta pessoa, este lugar), o programado com o genérico e o interativo (props, arquitetura, interface)"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Óculos leves de realidade aumentada, limitados por bateria e banda, usam cenas programadas por padrão e reservam o fotorreal para conteúdo de memória e documento"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Ferramentas de otimização de asset (compressão, LOD, entrega de binário) perdem centralidade para ferramentas que medem quanto custa executar um gerador"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O orçamento de desempenho de jogos e sites passa a ser negociado em milissegundos de geração por cena, e o motor agenda geração como hoje agenda download"
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Motores de jogo passam a gerar parte do conteúdo como código no momento em que o jogador chega, com agentes escrevendo sobre o sistema procedural do motor"
        sinal: medio
        prazo: 2036
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O teste de jogo vira verificação contínua feita por agentes, porque cada sessão tem conteúdo que nenhum testador humano viu antes"
            sinal: medio
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Órgãos de classificação etária (ESRB, PEGI, ClassInd) deixam de conseguir classificar o conteúdo e passam a certificar o gerador e seus limites declarados"
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Jogadores percebem a mesmice do conteúdo gerado sem autoria, e jogos que prometem mundo infinito sofrem reação de público e crítica"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "O selo feito à mão vira argumento de venda de jogo, como artesanal em comida"
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Executar código gráfico gerado vira superfície de ataque, e ferramentas de criação e plataformas passam a restringir o que um gerador pode fazer ao rodar"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Navegadores e lojas de aplicativos passam a aceitar geradores só num subconjunto de linguagem sem entrada e saída e determinístico, porque é o único código que conseguem verificar"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A estética da mídia programada de uma década fica moldada pela lista de primitivas que a sandbox permite, como o limite de 96 KB moldou a demoscene"
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "O custo de produzir um objeto de mídia passa a ser declarado em tokens e o de distribuí-lo tende a zero, e o preço de um asset vira o preço da geração mais o da verificação"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Licenças de ferramentas programáticas passam a cobrar por execução do agente, e cada iteração de autocorreção vira custo contábil para empresas"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Autônomos e equipes abaixo do limite de licença iteram mais que empresas médias, e a vantagem de escala na produção programada se inverte nessa faixa"
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: "O julgamento de máquina fecha o laço gerar-avaliar — verificadores automáticos decidem a maior parte das iterações e o humano fica só no aceite final"
    efeitos:
      - id: e10
        ordem: 1
        efeito: "Pipelines de geração procedural passam a ter portões automáticos entre passadas (render comparado, conectividade, encaixes, playtest), e o revisor humano sai do laço de cada iteração"
        sinal: forte
        prazo: 2032
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Os rankings públicos de preferência (3DCodeArena, microtestes de shader) viram o júri de fato do que é um bom gerador, e quem define a métrica define a estética"
            sinal: medio
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Artistas passam a projetar contra o gosto do avaliador, e surgem movimentos estéticos que se definem por recusar o que o benchmark premia"
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "A revisão humana de assets, que era trabalho de equipe inteira, concentra-se num aceite final por amostragem, e o erro que o verificador não mede passa a chegar ao público"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: "Surgem auditorias externas de pipeline gerativo, contratadas por marcas para achar a classe de defeito que o verificador do fornecedor não vê"
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "Movimento e tempo continuam sem verificador automático, e o laço se fecha para objeto estático mas não para animação, de modo que a automação avança desigual entre ofícios"
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Animadores de tempo e atuação mantêm poder de negociação que modeladores de superfície dura perdem"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "A remuneração relativa na indústria 3D se inverte — quem domina tempo passa a ganhar mais que quem domina forma"
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "A direção de arte passa a ser escrita como critério de aceite executável (inventário de detalhe, limites, encaixes) em vez de comentário sobre peça pronta"
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "O portfólio de quem projeta mídia passa a mostrar especificações e verificadores escritos, e não só as peças"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "Processos seletivos de estúdio passam a testar a escrita de critério — dar um gerador e pedir o teste que o reprova — em vez de pedir uma peça"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: "Como o prompt sozinho não protege a obra (Escritório de Copyright dos EUA, 2025), quem quer proteção passa a documentar as escolhas humanas de critério, seleção e edição do gerador"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: "Pedidos de registro de obra visual passam a anexar o log de decisões humanas sobre o gerador como prova de autoria"
                sinal: fraco
                prazo: 2040
                confianca: baixa
```

### 5.1 Os mecanismos, efeito a efeito

**Raiz 1 — a IA como autora do gerador.**

- **e1.** Porque a raiz dá ao modelo acesso direto à API da ferramenta (MCP oficial no
  Blender [4] e no Houdini 22 [7]) e porque a falha dominante é de API [2], que é exatamente o
  que a SideFX ataca com uma biblioteca curada de sintaxe e exemplos [7], o trabalho do TD
  passa de escrever para revisar. *Sinal forte*: três artefatos — MCP do Blender, Apex Script
  MCP, LL3M. *Classe de referência*: assistente de código genérico, do lançamento público
  (2021, de memória) a "quase 80% dos novos desenvolvedores na primeira semana" em 2025 [26]:
  cerca de quatro anos até a maioria entre novatos. Ferramentas de criação 3D são mais lentas
  (prévia, Labs), então somo cinco anos à data de prévia (2026): 2031. Confiança alta porque o
  mecanismo já está implantado pelo fabricante e o horizonte é longo.
- **e1.1.** Porque o modelo escreve a ferramenta mas erra em "peças desconectadas ou
  flutuando" [2], o que garante entrega passa a ser o teste; Procedura já trata encaixes
  "checáveis por máquina" como parte do objeto [3]. Troca de mecanismo: de escrever código a
  escrever verificação. *Sinal médio*: dois artefatos (Procedura, portões do img2threejs).
- **e1.1.1.** Porque o verificador acumula o conhecimento da casa e o asset é regenerável,
  o que se protege muda de lugar. Inferência; *sinal fraco*.
- **e1.2 (quem perde).** Porque o trabalho que o assistente assume primeiro é o de tradução
  de pedido em nós, que é o trabalho do júnior. *Sinal fraco*: sem artefato; inferência do
  mecanismo de e1.
- **e1.2.1.** Porque sem o emprego júnior não há onde formar sêniores, alguém tem de pagar a
  formação; o ator é o estúdio, e o mecanismo é a escassez de sêniores. Reescrito no §6 (a
  versão anterior era "cursos de VFX reorganizam o currículo", efeito proibido por genérico).
- **e2.** Porque o modelo escreve o código de Remotion, manim ou Cavalry a partir de
  descrição [22][11], e porque o AI Co-Artist mostra não programadores evoluindo shaders sem
  escrever código [6], o designer passa a especificar comportamento. A Canva tornar o Cavalry
  gratuito [9] amplia a base que chega ao procedural. *Sinal forte*: Remotion Agent Skills,
  AI Co-Artist, Cavalry gratuito. *Classe de referência*: editoração eletrônica, do PageMaker
  (1985) à maioria dos estúdios gráficos em cerca de dez anos (de memória, não verificado
  nesta rodada); aplicada a partir de 2026, dá ~2036 para maioria e ~2031 para adoção precoce
  visível. Uso 2031.
- **e2.1.** Porque o foco da Processing Foundation sobre LLM no ensino já registra que o
  modelo "encurta a fricção significativa" e recomenda esboço em papel, depuração com LLM e
  "pergunte a três, depois ao GPT, depois a mim" [20]. O ator e o mecanismo estão nomeados; é
  a formalização dessa separação em material de curso que é o efeito.
- **e2.1.1.** Porque quem só leu não depurou, e o modelo falha de forma não óbvia (API, peças
  flutuando [2]), a habilidade escassa volta a valer. Troca de ator: do curso ao mercado.
- **e2.2.** Porque o gerador que o modelo escreve com menos erro é o de primitivas,
  instanciamento e ruído (img2threejs trabalha com primitivas e shaders procedurais [1]) e o
  de detalhe fino é onde ele falha [17], o barato puxa a estética. Marcado como extrapolação
  no §6 e rebaixado.
- **e2.2.1.** Porque se a identidade é um gerador, o manual de marca é o código e seus
  limites. Inferência.
- **e2.2.2.** Porque o modelo tem "capacidade limitada de reproduzir detalhe fino" [17], o
  detalhe fino vira escasso e caro. Troca de mecanismo: da abundância do procedural à
  escassez do acabamento.
- **e3.** Porque a raiz permite reconstruir foto como programa [1][3], o pedido "quero este
  objeto em 3D" passa a ter duas respostas concorrentes — malha (Meshy, 12 milhões de
  usuários declarados; Hunyuan3D, que "exige retopologia" [19]) ou programa. *Sinal forte*:
  img2threejs, Procedura, MeshCoder (este último visto só no resultado de busca; ver 12.4 —
  conta como artefato só pela menção, por isso o forte se apoia nos dois primeiros e no LL3M).
- **e3.1 (quem perde).** Porque o programa é paramétrico, uma cadeira vira infinitas
  cadeiras; a loja que vende uma malha por variante perde o argumento. Restrito a superfície
  dura, porque é onde a reconstrução por código funciona melhor [1].
- **e3.1.1.** Porque o catálogo paramétrico elimina a fotografia de cada variante, o varejo
  passa a renderizar. Troca de ator: da loja de assets ao fabricante físico.
- **e3.2.** Porque uma foto basta para gerar o programa [1], o clone deixa de exigir acesso
  ao objeto. A zona sem regra é inferência; nenhum caso encontrado.
- **e3.2.1.** Porque provar derivação exige referência, o fabricante registra a forma
  paramétrica. Inferência.
- **e4.** Porque a Art Blocks já trata o algoritmo como obra e guarda p5.js e three.js
  on-chain [18], e porque a IA escreve geradores de shader e p5 competentes [6][28], a
  escassez do gerador acaba. *Sinal médio*: dois artefatos.
- **e4.1 / e4.1.1.** Porque a escassez migra do gerador para a autoria humana verificável, o
  histórico vira prova; o repositório é o único artefato que carrega esse histórico.
- **e5 (retroação e quem bloqueia).** Porque o 3DCodeBench diz que a qualidade depende de
  "dados de código procedural de alta qualidade" [2], e VLMaterial precisou montar o próprio
  dataset [16], e o trabalho de materiais usa vídeos-tutorial como fonte de processo [15], o
  gargalo é dado. Quem tem o dado — fabricante de software, dono do tutorial — tem incentivo
  para capturar a mudança. Este é o **ator que bloqueia/captura** da raiz 1.
- **e5.1.** Porque LL3M, SceneCraft, o trabalho de materiais e o MCP oficial miram o Blender
  [4][5][15], e porque a SideFX responde com MCP próprio e curado [7], o aberto vira padrão de
  treino e o fechado vira jardim próprio.
- **e5.1.1.** Porque o Octoverse mostra que a IA levou o TypeScript ao topo por conveniência
  de tipagem com assistentes [26], o mesmo ciclo pode fixar o dialeto procedural que o modelo
  escreve melhor. Referência nomeada; aplicação ao 3D é inferência.
- **e5.2 / e5.2.1.** Porque o tutorial virou dado de treino [15], o autor do tutorial ganha
  algo para vender ou negar. Troca de ator: do laboratório ao criador de conteúdo.

**Raiz 2 — o gerador como formato de entrega.**

- **e6.** Porque a saída é TypeScript "sem binários de vários megabytes" [1] e a concorrência
  comprimida ainda tem 11–16 MB por cena [8], o gargalo sai da rede e vai para a execução.
  **Não medi o tamanho de um objeto img2threejs**; o "mil vezes mais leve" do enunciado do tema
  não foi verificado (ver §8). *Classe de referência*: WebGL, da especificação (2011, de
  memória) a suporte majoritário em navegador em ~3–4 anos, mas 3D em sites ainda minoritário
  quinze anos depois — suporte técnico chega rápido, uso não. Por isso 2033 e não antes.
- **e6.1.** Porque captura é fiel ao singular e programa é barato para o genérico [1][17],
  cada um fica com o que faz melhor. Ponto de contato com o tema 10.
- **e6.1.1.** Porque bateria e banda limitam óculos leves, o formato mais leve vence onde a
  fidelidade não é o objetivo. Troca de ator: do navegador ao óculos. Inferência.
- **e6.2 / e6.2.1 (quem perde).** Porque se o conteúdo é executado e não baixado, otimizar
  binário importa menos que otimizar execução. Inferência.
- **e7.** Porque AutoUE já escreve cena com o PCG do Unreal e código de jogabilidade [27], o
  passo seguinte é fazer isso na hora. *Sinal médio*: AutoUE (um artefato aberto; há outros
  vistos só em busca, 12.4). Confiança baixa pela regra de especulativo e porque latência e
  custo de geração em tempo real não têm referência de adoção.
- **e7.1.** Porque o conteúdo é inédito a cada sessão, QA humano não cobre; AutoUE já tem
  *playtest* automatizado [27].
- **e7.1.1.** Porque o classificador etário classifica conteúdo visto, e conteúdo gerado na
  hora não é visto antes, o objeto da classificação muda para o gerador. Ator nomeado (ESRB,
  PEGI, ClassInd); o mecanismo é a impossibilidade de ver antes.
- **e7.2 (retroação).** Porque a unicidade matemática não é perceptiva [25], o público
  percebe mingau; No Man's Sky é o caso de referência citado na própria discussão (visto em
  resultado de busca, não aberto).
- **e7.2.1.** Porque o gerado vira padrão, o feito à mão vira diferença vendável.
- **e8 (retroação e quem bloqueia).** Porque o servidor MCP do Blender "executa código gerado
  por LLM sem nenhuma proteção" [4], executar gerador é executar código não confiável.
  Plataformas (navegador, loja de apps, ferramenta de criação) têm incentivo e poder para
  restringir — o **ator que bloqueia** da raiz 2.
- **e8.1 / e8.1.1.** Porque só código restrito é verificável, o subconjunto permitido define
  o que é expressável; referência histórica: o limite de 96 KB e o .werkkzeug3 moldaram o que
  a demoscene fez [14].
- **e9.** Porque img2threejs já declara custo em tokens por objeto [1], e distribuir texto
  custa quase nada, o preço de um asset passa a ser o custo de escrevê-lo e verificá-lo.
- **e9.1.** Porque o Remotion cobra US$ 0,01 por render na camada de automação e exige
  licença acima de três funcionários [23], o laço de autocorreção entra na conta.
- **e9.1.1.** Porque o limiar de licença isenta equipes pequenas, elas iteram de graça.
  Depende de um modelo de licença específico; frágil.

**Raiz 3 — o julgamento de máquina fecha o laço.**

- **e10.** Porque os sistemas mais recentes já são desenhados com portões — img2threejs [1],
  Procedura [3], AutoUE [27], e o 3DCodeBench pede ambiente de execução com retorno [2] —, o
  humano sai do laço interno. *Sinal forte*: quatro artefatos. Confiança alta para objeto
  estático; movimento está em e11.
- **e10.1 (quem captura).** Porque o 3DCodeArena ranqueia por preferência humana agregada [2]
  e a Artificial Analysis publica microtestes de shader [28], quem monta a métrica passa a
  decidir o que é bom. Ator que captura a raiz 3: os donos de benchmark e de avaliador.
- **e10.1.1.** Porque avaliador fixo é alvo, artistas otimizam contra ou fogem dele (lei de
  Goodhart aplicada à estética). Inferência.
- **e10.2 / e10.2.1 (quem perde).** Porque a revisão sai de cada iteração, a equipe de
  revisão encolhe e sobra o erro que o verificador não mede; quem compra passa a auditar.
- **e11 (retroação).** Porque não existe ferramenta que julgue intenção de movimento [23], o
  laço não fecha para animação. É o freio mais concreto da raiz 3.
- **e11.1 / e11.1.1.** Porque a automação chega desigual, o ofício não automatizado ganha
  poder relativo.
- **e12.** Porque o img2threejs já exige "inventário de detalhe" e especificação antes do
  código [1] e o Procedura exige encaixes tipados [3], o que o diretor escreve vira entrada do
  sistema. Converge com e1.1 e e2.
- **e12.1 / e12.1.1.** Porque o critério é o trabalho, é o que se mostra e o que se testa.
- **e12.2.** Porque o Escritório de Copyright dos EUA concluiu em 29/01/2025 que prompts
  "não controlam a forma como a ideia é expressa" e que seleção, arranjo e modificação humanas
  podem ser protegidas [12][29], quem quer proteção documenta essas escolhas. *Sinal médio*:
  um artefato (o relatório), mais a prática da Art Blocks de guardar o gerador [18].
- **e12.2.1.** Porque a prova de autoria passa a ser o processo, o registro anexa o processo.

### 5.2 Cobertura STEEP e quem perde

- **Social:** e2.1, e2.1.1, e7.2, e7.2.1, e10.1.1.
- **Tecnológico:** e1, e3, e6, e7, e8, e10, e11.
- **Econômico:** e3.1, e4, e9, e9.1, e5.2, e1.1.1.
- **Ecológico:** fraco. Só aparece indiretamente em e6/e6.1.1 (troca de banda por
  computação no cliente). Não achei fonte que meça o balanço energético entre baixar um splat
  e executar um gerador; **categoria registrada como praticamente vazia**.
- **Político/jurídico:** e3.2, e7.1.1, e8.1, e12.2.
- **Quem perde:** TD júnior (e1.2), lojas de assets (e3.1), ferramentas de compressão e
  entrega de binário (e6.2), equipes de revisão (e10.2), modeladores de superfície dura
  (e11.1), testadores humanos de jogo (e7.1), autores de tutorial se não licenciarem (e5.2).

### 5.3 Cruzamentos

**Convergência (o achado principal).** Três ramos de raízes diferentes chegam ao mesmo
efeito de segunda ordem: **o trabalho de quem projeta vira escrever critério de aceite**.
e1.1 (TDs escrevem suítes de verificação, raiz 1), e12 (direção de arte como critério
executável, raiz 3) e e8.1 (plataformas só aceitam gerador verificável, raiz 2) descrevem a
mesma coisa por atores diferentes: estúdio, diretor e plataforma. Se o mapa acerta uma coisa
até 2046, é esta: **a peça deixa de ser o produto do designer; o critério passa a ser**.

Segunda convergência: e2.2.2 (acabamento manual vira camada cara, raiz 1) e e11.1 (animador
de tempo retém poder, raiz 3) chegam ao mesmo lugar — **o valor migra para o que a máquina
não verifica nem reproduz**: detalhe fino e movimento.

**Retroalimentação.**
- *Reforço:* e10 (portões) → e5 (mais execuções geram mais pares programa-render) → mais
  dado procedural de treino → a raiz 1 melhora → mais geradores → mais portões. É o ciclo que
  pode tirar a raiz 1 do nicho.
- *Freio:* e2.2 (estética procedural domina) → e7.2 (mesmice percebida) → reação do público
  → demanda por feito à mão (e7.2.1, e2.2.2) → enfraquece a raiz 2 como formato de massa.
- *Freio:* e8 (segurança) → e8.1 (sandbox) → menos expressividade → menos razão para
  entregar gerador em vez de asset.

**Contradição.** e6 (programa vence na web por leveza) × e7.2 (público rejeita a mesmice
procedural). Os dois não se sustentam juntos no conteúdo de destaque: se o público rejeita,
o programa fica com o fundo e o genérico, e o destaque segue sendo captado ou feito à mão.
**O que decide:** se a unicidade perceptiva [25] entra nos verificadores (e10). Se entrar, e6
vence; se não, e7.2 vence e e6 se reduz a e6.1 (divisão de território).

**Contradição 2.** e5.1 (Blender aberto vira padrão) × e5 (dono do dado captura). Se o
padrão é aberto, a captura por fabricante fracassa; se a SideFX e similares têm os melhores
dados de produção, o aberto vira brinquedo de pesquisa. **O que decide:** se os estúdios
liberam traços de produção para treino ou os guardam (e1.1.1).

### 5.4 Regra de parada

Parei na terceira ordem em todos os ramos porque, em cada um, o nível seguinte repetiria o
ator. Exemplos: depois de e7.1.1 (classificação certifica o gerador), o próximo seria "o
classificador exige auditoria periódica" — mesmo ator, mesmo mecanismo, só mais adiante.
Depois de e6.1.1, o próximo seria "o fotorreal fica mais caro" — é o mesmo efeito amadurecendo.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

1. **A IA dirigindo ferramenta de animação matemática** (`manim-web-mcp`, citado pela turma;
   skills de manim vistas em busca). Onde: GitHub; manim com 94,1 mil estrelas [11]. Se
   crescer: a animação explicativa — aula, divulgação científica — passa a ser encomendada em
   texto, e o vídeo educativo vira código versionável. **Sinal observável:** proporção de
   vídeos educacionais que publicam o código-fonte da cena; número de instalações das skills de
   manim.
2. **A mídia medida em tokens.** img2threejs declara 80 mil–180 mil tokens por objeto [1]; a
   SideFX descreve sua biblioteca como "eficiente em tokens" [7]. Se crescer: token por asset
   vira métrica de orçamento de produção (e9). **Sinal observável:** fornecedor de asset ou
   estúdio publicando custo em tokens na tabela de preço.
3. **O tutorial como dado de processo** [15]. Se crescer: a habilidade tácita do artista vira
   ativo licenciável (e5.2). **Sinal observável:** primeira licença pública de "traço de
   processo" ou primeiro bloqueio explícito de uso de tutoriais para treino por uma plataforma
   de ensino de 3D.
4. **Da foto ao mecanismo** (Im2Sim [17]). O modelo não só copia a forma: propõe a regra que
   a gera (nuvem, cidade, vegetação). Se crescer: geradores de fenômeno natural passam a ser
   inferidos de foto, e "regra da natureza" vira asset. **Sinal observável:** benchmark de
   Im2Sim com medida de detalhe fino melhorando em versões sucessivas de modelo.
5. **Canva comprando procedural e dando de graça** [9][10]. Uma plataforma de massa tornando
   o procedural profissional gratuito. Se crescer: o procedural sai da comunidade técnica.
   **Sinal observável:** assistente de IA embutido no Cavalry escrevendo *setups*.

### 6.2 Wildcards

**W1 — O mundo gerado como código no momento em que o jogador chega.** Mecanismo: um motor
em que nenhum nível existe antes da sessão; um agente escreve, verifica e executa o gerador
da região à frente do jogador, com o PCG do motor como alvo [27]. Por que é improvável:
latência, custo de inferência por jogador, mesmice [25] e certificação (e7.1.1). O que faria
com o mapa: e7 salta de baixa para alta, e6.2.1 vira realidade antes de 2040, e o jogo deixa
de ser produto para ser serviço de geração. **Sinal precoce:** um título comercial de estúdio
médio anunciando geração por LLM em tempo de execução com classificação etária obtida.

**W2 — Decisão judicial que protege a regra independentemente das saídas.** Mecanismo: um
tribunal reconhece o gerador (a regra, os parâmetros e os limites escolhidos por humano)
como obra, e toda saída como derivada. Por que é improvável: o relatório do Escritório de
Copyright dos EUA vai em sentido contrário para o prompt [12][29], e software já tem regime
próprio. O que faria com o mapa: e2.2.1 (identidade como gerador licenciado) e e4 (mercado
de obra-regra) disparam; e12.2 muda de "documentar escolhas" para "registrar o gerador".
**Sinal precoce:** registro aceito de um gerador visual como obra de arte, não como software.

**W3 — Paridade de detalhe fino.** Mecanismo: um modelo passa a escrever geradores que
reproduzem detalhe fino e arranjo de baixo nível com fidelidade — o limite que Eppel mediu
[17] desaparece. Por que é improvável no curto prazo: o 3DCodeBench ainda aponta falta de
dado e peças flutuando [2]. O que faria: e6.1 (divisão de território com a captura) cai — o
programa vence também no singular, e o tema 10 perde espaço para este. **Sinal precoce:**
reconstrução por código de um rosto ou de um personagem preferida à malha gerada em teste
cego.

**W4 — Uma falha de segurança grave via gerador.** Mecanismo: um gerador executado num
editor ou num navegador exfiltra dados em escala [4]. Por que é improvável: sandboxes
existem. O que faria: e8.1 vira regra antes de 2030, a raiz 2 recua para nichos fechados.
**Sinal precoce:** aviso de segurança de fabricante de navegador ou de ferramenta de criação
citando código gerado por IA.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — "É 2046 e este mapa se mostrou errado. Por quê?"

1. **A malha venceu por conveniência.** Geradores de malha (12 milhões de usuários
   declarados [19]) melhoraram a topologia, e editar por re-prompt ficou tão rápido quanto
   editar parâmetro. O programa ficou só no nicho técnico. *Aponta para:* e3 e e3.1. Ação:
   e3.1 mantém prazo mas fica restrito a superfície dura; e3 mantém confiança média, não alta.
2. **A web não trocou banda por computação.** Banda ficou barata, splats comprimiram mais, e
   o custo de executar gerador em celular fraco pesou mais que baixar 10 MB. *Aponta para:* e6
   e toda a raiz 2. Ação: e6 prazo 2032 → 2033 e mantido em média; e6.2 média → baixa.
3. **O verificador não chegou ao gosto.** Os portões ficaram em conectividade e execução;
   ninguém fez verificador de qualidade perceptiva, e o humano nunca saiu do laço de verdade.
   *Aponta para:* e10.1 e e10.2. Ação: e10.1 média → baixa.

### 7.2 Extrapolação linear

- **e2.2 (estética procedural domina)** é "o que o modelo faz bem vira mais comum" — mais do
  mesmo, maior. Ganhou um mecanismo não linear (a mesmice percebida, e7.2, como freio), mas a
  confiança cai: média → baixa.
- **e1 (TDs revisam em vez de escrever)** é extrapolação do que já aconteceu com
  desenvolvedores. Mantido porque há troca de ator (TD de mídia, não desenvolvedor) e o
  fabricante já implantou [7]; o prazo foi calibrado pela referência.
- **e9 (custo em tokens)** é quase uma descrição do presente [1]. Mantido na 1ª ordem porque
  o efeito é a mudança de contabilidade, não o número.

### 7.3 Velocidade de adoção

- **e7 (geração em tempo de execução):** o primeiro rascunho tinha prazo 2032 e confiança
  média. Não há classe de referência de algo comparável que tenha chegado a 10% em seis anos
  a partir de laboratório no setor de jogos; a referência mais próxima — procedural em jogo de
  massa, de Rogue (1980) a Minecraft (2009), de memória — levou décadas. Empurrado: 2032 →
  2036, média → baixa.
- **e3.1 (lojas de asset perdem valor):** rascunho 2033. Lojas de asset têm catálogo, efeito
  de rede e contratos com engines. Empurrado: 2033 → 2036.
- **e12.1 (portfólio com especificação):** rascunho 2032. Mudança de convenção de portfólio
  depende de mudança de contratação, que é lenta. Empurrado: 2032 → 2036.
- **e6.1.1 (óculos leves usam cena programada):** VR de consumo não chegou a 10% em mais de
  dez anos (classe de referência do próprio método). Mantido em 2044, confiança baixa, e
  declarado que depende de óculos existirem em escala — o que este mapa não assume.

### 7.4 A raiz que não acontece

- **Se a raiz 1 não acontecer** (modelos não passam do nível atual em API gráfica): a raiz 2
  sobrevive como nicho (demoscene, Townscaper, Cavalry — procedural escrito por humano), e a
  raiz 3 sobrevive para geradores escritos à mão. Sobram e6.1, e8, e10 em versão reduzida. O
  mapa encolhe muito mas não zera — há dependência forte, não disfarce de raiz única.
- **Se a raiz 2 não acontecer** (a entrega segue sendo asset baixado): a raiz 1 continua —
  o gerador escrito por IA é usado dentro do estúdio e exporta malha. Sobram e1, e2, e3, e4,
  e5, e10, e12. É a hipótese mais provável de falha parcial; por isso a raiz 2 é tratada como
  especulativa.
- **Se a raiz 3 não acontecer** (sem verificador confiável): a raiz 1 fica com humano no
  laço, mais lenta; e1.1 e e12 perdem força, a convergência principal enfraquece. Sobram e1,
  e2, e3, e6.

### 7.5 Suposições escondidas

1. **O acesso às APIs de criação continua aberto a modelos de terceiros.** Se a SideFX,
   Autodesk ou Adobe fecharem, e5.1 se inverte. Vira contradição 2 (5.3).
2. **Modelos de código continuam baratos o bastante** para 80 mil–180 mil tokens por objeto
   serem aceitáveis. Se o preço subir, e9 e a raiz 2 recuam.
3. **Navegadores continuam permitindo GPU no cliente** (WebGPU) sem restrição de energia. Se
   houver limite de energia por aba, e6 cai. Vira parte de W4.
4. **Regime de direito autoral dos EUA influencia o resto do mundo.** Usei o relatório dos
   EUA [12][29]; Brasil e UE não foram pesquisados. Rebaixa implicitamente e12.2.1.
5. **O público não se importa com a origem do gerador.** Se se importar, e7.2.1 cresce e
   vira retroação principal.

### 7.6 Viés do autor

O autor (zona "Criação e plataforma") e a disciplina tratam este tema como o contrário
"editável, leve e explicável" do pixel gerado — a própria descrição do tema escolhe um lado.
Os efeitos **e6** (programa vence na web por leveza) e **e2.2.1** (identidade como gerador)
estão aqui em parte porque o enquadramento favorece o programa. Por isso e6 não passa de
média, e a contradição e6 × e7.2 foi mantida sem resolver. A máquina (eu) tem viés adicional:
o img2threejs roda como skill do mesmo tipo de agente que escreveu este mapa.

### 7.7 Calibração

Contagem final (ver 12.1): 1ª ordem alta 2 · média 9 · baixa 1; 2ª ordem alta 0 · média 12 ·
baixa 8; 3ª ordem alta 0 · média 0 · baixa 21. A confiança cai com a ordem. Nenhum efeito de
3ª ordem ficou com alta.

### 7.8 Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| e7 | prazo 2032, confianca media | prazo 2036, confianca baixa | Sem referência de adoção de laboratório a 10% em 6 anos em jogos; raiz 2 especulativa (§2.3) |
| e7.1 | confianca media | baixa | Herda a especulação de e7 |
| e3.1 | prazo 2033 | 2036 | Efeito de rede de lojas de asset; pré-mortem 1 |
| e2.2 | confianca media | baixa | Extrapolação linear (7.2) |
| e6 | prazo 2032 | 2033 | Referência WebGL: suporte técnico rápido, uso lento; pré-mortem 2 |
| e6.2 | confianca media | baixa | Pré-mortem 2 |
| e10.1 | confianca media | baixa | Pré-mortem 3 |
| e12.1 | prazo 2032 | 2036 | Convenção de portfólio depende de contratação |
| e1.2.1 | "Cursos de VFX reorganizam o currículo em torno de sistemas" | "Estúdios formam TDs em residências internas pagas" | Efeito proibido sem curso e mecanismo nomeados; reescrito com ator e mecanismo |
| e6.3 (rascunho) | "Operadores de CDN perdem receita de entrega de assets 3D" | removido → 12.3 | Falha no teste da causa solta: receita de CDN é dominada por vídeo e cairia ou subiria por outros motivos |
| e2.3 (rascunho) | "Surge a profissão de engenheiro de geradores" | removido → 12.3 | Efeito proibido ("surge nova profissão") e redundante com e1.1 e e12 |
| e9.2 (rascunho) | "O preço de modelos 3D despenca" | removido → 12.3 | Teste de especificidade: decorreria também de geradores de malha, não desta raiz |

Cota do §6 cumprida: raiz 1 (e2.2 e e3.1 rebaixados, e1.2.1 reescrito, e2.3 removido); raiz
2 (e6, e6.2, e7, e7.1 rebaixados ou empurrados, e6.3 e e9.2 removidos); raiz 3 (e10.1
rebaixado, e12.1 empurrado).

### 7.9 Os falseadores do briefing

- *Adoção já passou da maioria inicial?* Para assistente de código genérico, sim [26] — por
  isso foi recusado como raiz. Para IA escrevendo gerador gráfico entre quem projeta mídia,
  não há número; as ferramentas oficiais estão em prévia [4][7]. Não passou.
- *A tecnologia não rompe nada, só melhora?* Para geradores de malha, é quase isso — por isso
  ficaram fora. Para a entrega do programa em vez do objeto, rompe o pipeline de asset e a
  contabilidade em bytes. O ponto mais frágil é a raiz 2, que pode acabar sendo só "3D mais
  leve" se não mudar quem entrega o quê (7.4).

## 8. O que a máquina errou

1. **O "mil vezes mais leve" não foi verificado.** O enunciado do tema pergunta sobre 3D
   procedural "mil vezes mais leve que o splat". Tenho o tamanho dos splats [8] mas não medi
   um objeto img2threejs; o repositório só diz "sem binários de vários megabytes" [1]. Quase
   escrevi "dezenas de KB" em e6 como se fosse dado; deixei a frase qualitativa e registrei o
   número como ausente em 3.4. Também não considerei o peso do runtime (three.js) que o
   programa exige — ele entra na conta e reduz a vantagem.
2. **Números de estrelas de outra versão.** O enunciado fala em manim com "92 mil
   estrelas"; abri o 3b1b/manim e vi 94,1 mil [11]. Uma busca devolveu "cerca de 39 mil" para
   a edição comunitária, que não abri — não cito. Os dois números são de repositórios
   diferentes e fáceis de trocar.
3. **Adoção citada de terceiros não aberta.** Um resultado de busca dizia que a skill do
   Remotion tinha "126 mil instalações" e era a "4ª mais instalada". Veio de um blog que não
   abri; ficou fora. A página oficial que abri [22] não traz número nem data de lançamento.
4. **Autodeclaração tratada como dado.** Os "12 milhões de usuários" da Meshy [19] e as
   comparações de qualidade contra o Hunyuan3D vêm de uma página de comparação escrita pela
   própria Meshy. Uso só como ordem de grandeza e com a ressalva.
5. **Classes de referência de memória.** PageMaker (1985), WebGL (2011), Rogue/Minecraft e
   a data de lançamento do Copilot (2021) estão de memória, não verificadas nesta rodada. O
   único dado de adoção aberto é o do Octoverse [26]. Os prazos que dependem dessas
   referências (e2, e6, e7) carregam essa fragilidade.
6. **Autoria que pode estar trocada.** Atribuí LL3M à Universidade de Chicago pelo nome da
   pesquisadora (Hanocka); a página do arXiv que abri não lista afiliação [5]. Idem para
   "Google e USC" no 3DCodeBench [2] — inferência por nomes de autores; não confirmado.
   Em 3.3 isso aparece como atribuição; trate como provável, não como verificada.
7. **Resumos de modelo auxiliar.** As páginas foram lidas por um extrator que resume; um
   deles disse que o 3DCodeBench "não fornece taxas de sucesso no resumo" — não consegui ver
   o texto integral, então não afirmo que o paper não tem esses números.
8. **Efeito que soa bem e tem mecanismo fraco:** e9.1.1 (equipes pequenas iteram mais por
   isenção de licença) depende de um modelo de licença de um fornecedor [23]. É plausível e
   frágil; mantive com confiança baixa em vez de cortar, porque é o único efeito que trata da
   distribuição de vantagem por porte.

## 9. Três cenários para 2046

**Provável.** Em 2046, quase todo TD e todo designer de motion trabalha com um assistente
que escreve o gerador; ninguém escreve grafo de nós do zero, e revisar código gerado é parte
do ofício. O objeto 3D de catálogo, o prop de jogo, a animação explicativa e o motion de
marca são, na maioria, programas — mas entregues como asset exportado, não executados no
cliente, porque a plataforma restringiu código gerado e a banda ficou barata. Captura e
procedural dividem o território: o singular é captado, o genérico é programado. Os
verificadores fecharam o laço para objeto estático e não para movimento; animadores de
tempo são o ofício mais protegido da cadeia. O ensino de design se dividiu entre uma fase
sem IA e uma com IA, e a queixa corrente é de formados que não conseguem depurar. **Sinal
precoce:** o assistente MCP do Houdini sair do Labs para o produto principal antes de 2030,
e nenhum navegador aceitar executar gerador sem sandbox restrita.

**Desejável.** Em 2046, o gerador é um formato aberto e verificável, que roda em sandbox
padronizada e leve, e o designer publica a regra junto da peça: qualquer pessoa pode
reabrir, ajustar e remixar um objeto em vez de baixar um arquivo opaco. Os verificadores
incluem unicidade perceptiva, e a mesmice procedural virou problema resolvido de ofício, não
reclamação do público. Autores de tutorial licenciaram seu traço de processo e são pagos pelo
uso em treino. A autoria é documentada pelo histórico de decisões humanas, e o registro de
obra aceita esse histórico. Para chegar aqui: fabricantes de ferramenta mantêm APIs abertas
a modelos de terceiros, surge um padrão de sandbox de gerador fora de uma empresa só, e
alguém constrói e publica o verificador de movimento. **Sinal precoce:** um formato de
gerador (subconjunto de linguagem + especificação) aceito por dois motores concorrentes.

**Indesejável.** Em 2046, a geração procedural é controlada por dois ou três fabricantes de
software que fecharam suas APIs e treinaram com os traços de processo de seus próprios
usuários; o Blender ficou como brinquedo de pesquisa. O critério de "bom" é o ranking de
preferência de uma plataforma, e o motion de marca de todo o planeta parece o mesmo
instanciamento com ruído. O degrau júnior do ofício sumiu e não foi substituído; os estúdios
não encontram sêniores. Clones de produto por código são rotina e não há regra para eles.
**Sinal precoce:** um grande fabricante de software de criação proibindo nos termos de uso o
acesso de agentes de terceiros à sua API, ou reivindicando direito sobre traços de processo
de usuários.

## 10. O experimento

**O que é.** *Gerador ou pixel?* — Um banco de teste em que a mesma foto de objeto é
reconstruída por dois caminhos: (A) programa — img2threejs [1] ou um agente escrevendo
Three.js direto; (B) malha — um gerador de imagem-para-3D (Hunyuan3D aberto ou camada
gratuita de um serviço comercial). Doze fotos: seis de superfície dura (cadeira, luminária,
garrafa, caixa de som, bicicleta, prédio simples) e seis orgânicas (planta, sapato, pão,
personagem, animal, rosto). Cada reconstrução registra: bytes entregues (incluindo o runtime
three.js), tokens gastos, tempo de parede, e o resultado em três testes.

**Que pergunta sobre o futuro responde.** Em que classe de objeto o programa vence a malha —
e se a vantagem de edição e de peso é real ou é discurso. Isso decide se a raiz 2 (gerador
como formato de entrega) tem base ou é só "3D mais leve", e testa a divisão de território
de e6.1.

**Que tecnologia emergente usa, e por que não dá com a madura.** Agente de código com visão
escrevendo geometria procedural a partir de foto, com portões de qualidade [1][3]. Com a
tecnologia madura — modelar à mão em Blender ou escrever p5.js à mão — o teste mede a
habilidade do aluno, não a pergunta: o que está em jogo é justamente o custo de ter **um
modelo** escrevendo o gerador, medido em tokens.

**O que a turma faz em sala.**
1. *Teste cego de preferência:* cada pessoa vê os pares A/B lado a lado, sem saber qual é
   qual, e escolhe o mais fiel à foto.
2. *Teste de edição:* com as instruções "pernas da cadeira 20% mais longas e assento
   vermelho", "abajur com dois braços", uma dupla edita o programa (mudando parâmetros ou
   pedindo ao agente) e outra re-gera ou edita a malha. Cronometra-se até o resultado aceito.
3. *Teste de mesmice:* gera-se dez variações de cada objeto pelo programa (mudando
   semente/parâmetros) e a turma diz quantas "são a mesma cadeira" — a medida de Compton [25].
4. *Planilha pública:* bytes, tokens, tempo, preferência, tempo de edição, variações
   percebidas.

**O que me faria mudar de ideia.** Se, nos objetos de superfície dura — onde o programa
deveria ser mais forte —, (a) a malha for preferida no teste cego em mais de 70% dos pares
**e** (b) o tempo de edição por re-prompt da malha for igual ou menor que o do programa, a
raiz 1 vale só dentro do estúdio e a raiz 2 não tem base: rebaixo e3 para baixa, retiro e6 da
1ª ordem e o mapa passa a dizer que "gerar programa" é sustentador, não disruptivo. Também:
se, contando o runtime, o programa pesar mais que a malha comprimida em GLB, o argumento de
leveza de e6 cai.

## 11. Fontes

1. `https://github.com/img2threejs/img2threejs` — sustenta foto → programa Three.js, saída
   em TypeScript + JSON, 80k–180k tokens por objeto, portões, limites declarados, 16,6 mil
   estrelas. Confiabilidade: repositório do próprio projeto; números autodeclarados.
2. `https://arxiv.org/abs/2606.01057` — 3DCodeBench: 12 VLMs, falhas de API, peças
   flutuantes, falta de dados procedurais, 3DCodeArena. Confiabilidade: preprint, sem revisão
   por pares confirmada.
3. `https://arxiv.org/abs/2608.26238` — Procedura: objeto como montagem paramétrica com
   encaixes tipados checáveis. Confiabilidade: preprint recente (ago/2026), alegações dos
   autores.
4. `https://www.blender.org/lab/mcp-server/` — MCP oficial do Blender no Lab, v1.0.3, aviso
   de execução sem proteção. Confiabilidade: alta, página oficial.
5. `https://arxiv.org/abs/2508.08228` — LL3M: agentes escrevendo Python do Blender, BlenderRAG,
   laço de cocriação. Confiabilidade: preprint de grupo conhecido em geometria.
6. `https://arxiv.org/abs/2512.08951` — AI Co-Artist: evolução de shaders GLSL com GPT-4 por
   não programadores. Confiabilidade: preprint; resultados de estudo sem números no resumo.
7. `https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/`
   — Houdini 22, Apex Script MCP, prévia, 22/06/2026. Confiabilidade: boa, análise de setor
   (JPR).
8. `https://www.polyvia3d.com/formats/gaussian-splatting-formats` — tamanhos de PLY/SPLAT/
   SPZ/KSPLAT para 500 mil gaussianas. Confiabilidade: média, site de ferramenta com
   benchmark próprio.
9. `https://www.cgchannel.com/2026/04/canva-makes-motion-graphics-and-animation-app-cavalry-free/`
   — Cavalry gratuito para indivíduos, 04/2026. Confiabilidade: boa, imprensa especializada.
10. `https://www.cgchannel.com/2026/02/canva-acquires-next-gen-motion-graphics-tool-cavalry/`
    — Canva compra Cavalry (25/02/2026), descrição procedural, origem MASH. Confiabilidade:
    boa.
11. `https://github.com/3b1b/manim` — manim, 94,1 mil estrelas, MIT. Confiabilidade: alta.
12. `https://copyright.gov/ai/` — relatório do USCO, Parte 2 (Copyrightability), 29/01/2025.
    Confiabilidade: alta, fonte primária (só a página índice foi lida).
13. `https://github.com/mxgmn/WaveFunctionCollapse` — WFC, 25,3 mil estrelas, jogos que usam
    (Bad North, Caves of Qud, Townscaper). Confiabilidade: alta.
14. `https://en.wikipedia.org/wiki/.kkrieger` — .kkrieger, 97.280 bytes, .werkkzeug3, 2004.
    Confiabilidade: boa para fatos históricos.
15. `https://arxiv.org/abs/2607.13318` — traços de processo de tutoriais → grafos de material
    Blender; ECCV 2026. Confiabilidade: aceito em conferência.
16. `https://arxiv.org/abs/2501.18623` — VLMaterial, materiais procedurais como programas;
    ICLR 2025 Spotlight. Confiabilidade: alta, revisado.
17. `https://arxiv.org/abs/2601.05344` — Im2Sim: foto → código que simula o mecanismo; limite
    em detalhe fino. Confiabilidade: preprint, autor único.
18. `https://www.artblocks.io/articles/true-on-chain-preservation-a-four-year-journey` — 90%
    dos projetos reconstruíveis on-chain; p5.js e three.js on-chain. Confiabilidade: fonte do
    próprio interessado.
19. `https://www.meshy.ai/compare/meshy-vs-hunyuan3d` — 12 milhões de usuários (autodeclarado),
    formatos de malha, retopologia do Hunyuan3D. Confiabilidade: baixa para comparações,
    página de marketing do concorrente.
20. `https://processingfoundation.report/` — 353 mil visitantes/mês, 800+ contribuidores,
    grupo focal sobre LLM no ensino. Confiabilidade: boa, relatório institucional.
21. `https://file.org.br/highlight/file-2026-inter-criatividade/` — FILE 2026, São Paulo,
    oficinas de creative coding. Confiabilidade: alta, página oficial.
22. `https://www.remotion.dev/docs/ai/skills` — Agent Skills do Remotion, agentes compatíveis.
    Confiabilidade: alta, documentação oficial.
23. `https://www.digitalapplied.com/blog/video-as-code-remotion-agentic-generation-2026` —
    ausência de verificador de intenção de movimento; US$ 0,01 por render. Confiabilidade:
    média, blog de consultoria.
24. `https://github.com/GraphiteEditor/Graphite` — Graphite, 27,3 mil estrelas, alfa,
    procedural por nós. Confiabilidade: alta.
25. `https://galaxykate0.tumblr.com/post/139774965871/so-you-want-to-build-a-generator` —
    Kate Compton, as dez mil tigelas de mingau, unicidade perceptiva (2016). Confiabilidade:
    alta como fonte primária de praticante.
26. `https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/`
    — Octoverse 2025: quase 80% dos novos devs usam Copilot na 1ª semana; Brasil 4º com 6,89
    milhões; TypeScript em 1º. Confiabilidade: boa, dados da plataforma (interessada).
27. `https://arxiv.org/abs/2603.07106` — AutoUE: jogo 3D completo por agentes no Unreal, PCG,
    playtest automatizado; ACL'26 Findings. Confiabilidade: aceito em conferência.
28. `https://artificialanalysis.ai/microevals/llm-ultimate-challenge-interactive-glsl-shader-art-1756340323607`
    — microteste público de shader GLSL, 16 modelos, resultado dividido. Confiabilidade: baixa
    como medida (votos da comunidade), útil como sinal.
29. `https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf`
    — texto integral da Parte 2: "prompts alone do not provide sufficient human control to make
    users of an AI system the authors of the output"; prompts "do not control the way that idea
    is expressed"; seleção, coordenação e arranjo humanos podem ser protegidos. Lido em texto
    (pdftotext) e buscado pelas frases. Confiabilidade: alta, fonte primária.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando: `python3 .../futurizacao-giordano/references/verificar.py tendencia-gerar-geradores-design-procedural-e-creative-coding-com-ia.md --links`, rodado em 22/09/2026 depois das correções (a primeira rodada acusou ordem 2 = 20 e ordem 3 = 21 contra 19/19 no frontmatter, e o link do Skadden com 403; frontmatter corrigido e fonte trocada — ver 12.4). Saída inteira:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 20 (frontmatter diz 20)
efeitos ordem 3: 21 (frontmatter diz 21)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 2 · media 9 · baixa 1
confiança ordem 2: alta 0 · media 12 · baixa 8
confiança ordem 3: alta 0 · media 0 · baixa 21
links da seção 11: 29/29 respondem (frontmatter diz fontes: 29)
RESULTADO: ok
```

### 12.2 Premissas assumidas que o briefing não cobriu

- **Data de referência e fuso:** 22/09/2026, relógio da máquina (-03).
- **Número de raízes:** três (a skill pede duas a quatro); não havia orientação no briefing.
- **Recusa de "geradores de malha" como raiz:** decisão da rodada, por fronteira com os temas
  10 e 12 e por adoção em massa declarada.
- **Direito autoral:** só o regime dos EUA foi pesquisado; Brasil (Lei 9.610/98) e UE não
  entraram — premissa de que o relatório dos EUA é o precedente mais citado.
- **Profundidade:** três ordens em todos os ramos, sem quarta.
- **Nota sobre o Brasil:** feita com o que a busca trouxe (Octoverse, FILE); não houve
  busca dedicada a estúdios brasileiros de VFX ou jogos.
- **Viés neutro:** interpretado como um cenário de cada lado (desejável e indesejável) mais
  o provável, e contradições registradas sem resolver.

### 12.3 Efeitos cortados e reescritos

- **e6.3 (rascunho):** "Operadores de CDN perdem receita de entrega de assets 3D." Cortado no
  teste da causa solta: a receita de CDN é dominada por vídeo; o efeito aconteceria ou não
  por motivos alheios a esta raiz.
- **e2.3 (rascunho):** "Surge a profissão de engenheiro de geradores." Cortado: efeito
  proibido sem ator nomeado; o conteúdo útil já está em e1.1 e e12.
- **e9.2 (rascunho):** "O preço de modelos 3D despenca." Cortado no teste de
  especificidade: geradores de malha causariam o mesmo.
- **e1.2.1 (rascunho):** "Cursos de VFX reorganizam o currículo em torno de sistemas."
  Reescrito como residências internas de estúdio (ator e mecanismo nomeados).
- **Candidato a raiz descartado cedo:** "Linguagens visuais por nós viram a interface
  padrão de criação" (Graphite, Geometry Nodes, Cavalry). Descartado: nó já é interface
  madura em VFX; o que muda é quem monta o grafo — absorvido pela raiz 1.
- **Candidato a raiz descartado cedo:** "A regra como obra" (Art Blocks). Descartado como
  raiz porque existe desde 2020 sem IA; entra como efeito e4.
- **Efeito considerado e não incluído:** "Shadertoy vira dataset de treino e a comunidade
  reage." Encontrei só o número "mais de 31 mil" contribuições na Wikipedia via busca, sem
  abrir, e nenhum caso de reação; sem artefato, ficou fora.
- **Efeito considerado e não incluído:** ensino de p5.js em Libras (projeto brasileiro
  premiado pela Processing Foundation, visto em busca) como sinal de acessibilidade do
  creative coding com IA. Sem ligação causal com a raiz; registrado aqui como contexto
  brasileiro.

### 12.4 Buscas e páginas

Buscas feitas (24; as duas últimas no parêntese abaixo):
1. LLM generates procedural 3D shape program code arXiv 2025 — deu 3DCodeBench, LL3M,
   MeshCoder, Procedura, ShapeLib, ShapeCraft.
2. LLM shader generation benchmark GLSL — AI Co-Artist, microteste da Artificial Analysis.
3. img2threejs procedural three.js from image — repositório, showcase, blogs.
4. Blender geometry nodes LLM agent generate node graph — treegen-llm, SceneCraft, MCP do
   Blender.
5. Houdini SideFX AI assistant 2026 procedural LLM — JPR sobre Houdini 22, assistentes da
   comunidade (MorfyAI, Houdini AI Assistant).
6. Gaussian splat file size versus procedural code web 3D comparison — só formatos de
   splat; **nenhuma comparação direta splat × código procedural encontrada**.
7. manim github stars 3blue1brown MCP — 3b1b/manim, ManimCE, manim_skill.
8. Cavalry motion design procedural Canva acquisition — CG Channel, Canva newsroom.
9. copyright AI-generated code procedural generator US Copyright Office 2025 — USCO, Skadden,
   Wiley.
10. WaveFunctionCollapse mxgmn stars games — repositório.
11. SIGGRAPH 2026 LLM procedural material node graph — Process Expertise (ECCV), SIGGRAPH
    2026 listas.
12. .kkrieger 96KB demoscene — Wikipedia, Activision Blizzard.
13. VLMaterial ICLR 2025 — arXiv, ICLR, MultiMat.
14. Shadertoy number of shaders 2026 — só Wikipedia (31 mil+), não aberta.
15. Hunyuan3D Meshy Tripo adoption 2026 — comparativos de mercado.
16. Art Blocks on-chain code is the artwork — docs e artigo de preservação.
17. Coding the Visual World Im2Sim — arXiv.
18. Processing Foundation p5.js 2.0 AI education — relatório de impacto.
19. creative coding Brasil Processing p5.js FILE 2026 — FILE, UFRGS, p5.js em Libras, Garoa.
20. Remotion programmatic video AI agent skill 2026 — docs, blogs.
21. Graphite procedural vector editor 2026 — repositório.
22. Kate Compton 10,000 bowls of oatmeal — tumblr original.
(e mais duas: runtime LLM generated game content 2026 — AutoUE, GameGen-Verifier, RPGAgent;
GitHub Octoverse 2025 AI — blog do GitHub.)

Páginas tentadas e **não abertas** (fora da seção 11):
- `https://www.ufrgs.br/cultura/events/arte-e-tecnologia-basicos-de-arte-generativa-em-p5-js-reedicao/`
  — erro de certificado TLS. Seria a nota brasileira sobre ensino de arte generativa.
- `https://www.canva.com/newsroom/news/cavalry/` — HTTP 403. Substituída por [10].
- `https://www.skadden.com/insights/publications/2025/02/copyright-office-publishes-report` —
  **abriu** pela ferramenta de leitura (resumo do relatório do USCO sobre prompts), mas devolve
  403 ao verificador de links; substituída na seção 11 pelo PDF primário do USCO [29], que diz
  o mesmo com as palavras do relatório.

Vistas só em resultado de busca, **não abertas e não citadas como fonte**: MeshCoder
(arXiv 2508.14879), ShapeLib (2502.08884), ShapeCraft, SceneCraft (2403.01248), treegen-llm,
MorfyAI, Houdini AI Assistant, manim_skill, ManimCE (39 mil estrelas segundo a busca),
Remotion "126 mil instalações" (gaga.art), GameGen-Verifier, RPGAgent (CHI 2026), Zero-shot
3D Map Generation with LLM Agents, Runtime Evaluation of PCG in an Endless Runner, MultiMat,
No Man's Sky como "18 quintilhões de tigelas de mingau" (Vice), p5.js em Libras,
Wikipedia do Shadertoy.

### 12.5 Classes de referência usadas

| Classe | Intervalo | Onde usei | Verificada? |
|---|---|---|---|
| Assistente de código (Copilot) | ~4 anos até maioria entre novatos | e1 | Parcial: o ponto final (2025, "quase 80%") [26]; o início (2021) de memória |
| Editoração eletrônica (PageMaker 1985) | ~10 anos até maioria dos estúdios | e2 | Não, de memória |
| WebGL (2011) | suporte técnico em ~3–4 anos, uso em sites ainda minoritário | e6 | Não, de memória |
| Procedural em jogo de massa (Rogue 1980 → Minecraft 2009) | ~3 décadas | e7 | Não, de memória |
| VR de consumo | >10 anos sem chegar a 10% | e6.1.1 | Referência do próprio método |
| Demoscene procedural (.kkrieger 2004) | 20+ anos sem sair do nicho | raiz 2 | Parcial: fato de 2004 [14]; "sem sair do nicho" é leitura |

### 12.6 Contagem de sinal por artefato (regra 7 do §3)

- e1 forte: Blender MCP [4], Apex Script MCP [7], LL3M [5].
- e2 forte: Remotion Agent Skills [22], AI Co-Artist [6], Cavalry gratuito [9].
- e3 forte: img2threejs [1], Procedura [3], LL3M [5].
- e10 forte: img2threejs [1], Procedura [3], AutoUE [27], 3DCodeBench [2].
- Médios: e4 ([18],[6]), e5 ([2],[16],[15]), e6 ([1],[8]), e7 ([27]), e8 ([4]), e9 ([1],[23]),
  e11 ([23]), e12 ([1],[3]), e1.1 ([3],[1]), e2.1 ([20]), e2.2 ([1],[17]), e5.1
  ([4],[5],[7]), e5.2 ([15]), e7.1 ([27]), e7.2 ([25]), e9.1 ([23]), e10.1 ([2],[28]), e12.2
  ([12],[29]).
- Todos os demais: fracos (inferência, zero artefato).

### 12.7 Mapas irmãos não lidos

Existem nesta mesma pasta de rodadas mapas do mesmo tema com horizontes 2031, 2036 e 2041
(`giordano/`, `giordano-h2036/`, `giordano-h2041/`). **Não foram lidos** nesta rodada, para
manter o mapa independente; a comparação entre horizontes fica para o processamento.
