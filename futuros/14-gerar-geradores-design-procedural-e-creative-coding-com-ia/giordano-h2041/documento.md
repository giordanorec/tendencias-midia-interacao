---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-22
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 13
efeitos_ordem_2: 19
efeitos_ordem_3: 19
tecnologias_citadas: [3DCodeBench, 3DCodeArena, CodeGen-3D, LL3M, BlenderRAG, StarVector, SVG-Bench, AI Co-Artist, shader-spec-eval, img2threejs, Three.js, TypeScript, WebGPU, WebGL, GLSL, HLSL, SVG, Blender, Blender Lab MCP Server, Geometry Nodes, Houdini 22, APEX Script Comfort Package, SideFX Labs, KineFX, Unreal Engine 5.8, PCG Framework, PCG Primitives, Unreal MCP, City Sample, Shape Grammar, Model Context Protocol, Claude Connectors, Adobe Express Developer MCP Server, Affinity, Foundry Griptape, Boris FX Silhouette, Autodesk Fusion, SketchUp, Ableton, Manim, manim-mcp-server, manim-web, p5.js, Processing, OpenProcessing, Shadertoy, Remotion, Cavalry, Rive, WaveFunctionCollapse, Townscaper, Bad North, Caves of Qud, Gaussian Splatting, PLY, SPZ, SOG, KSplat, Genie 3, Project Genie, C2PA, Glaze, Fab]
fontes: 24
confianca: media
experimento: "Brief executável: o mesmo pedido de mídia escrito como referência visual e como especificação verificável, entregue a um agente que escreve o gerador, medindo convergência, número de rodadas, bytes do artefato e editabilidade"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Design procedural (Houdini, Geometry Nodes, o PCG do Unreal, shaders, p5.js) é maduro e este mapa o
recusa como raiz. O que é novo em 2026 é que **a IA passou a escrever o gerador** — e a indústria abriu
as ferramentas para isso (conectores MCP de Blender, Unreal, Houdini 22, Adobe e Affinity entre abril e
julho de 2026; a Epic refez a City Sample em grafos PCG com ajuda de LLM). Para 2041 o mapa trabalha
três raízes: **(1)** a especificação vira o meio de produção do gerador, com um laço render → crítica →
reparo; **(2)** a mídia volta a trafegar como programa executado no cliente, em disputa com o pixel e o
splat gerados; **(3)** qualquer artefato visual publicado pode ser revertido em regra editável. Os achados
mais fortes: o ofício de quem projeta mídia desloca-se de construir para **especificar de forma
verificável e revisar grafos alheios**; a disputa "programa × pixel" não tem vencedor único e se
resolve por domínio (editável e interativo vs fotorreal de uma vez); e a autoria migra para o que não se
parametriza, enquanto a lei de direito autoral (critério do US Copyright Office de 2025) deixa sem dono
o gerador escrito só por prompt. Confiança do mapa: média; toda a 3ª ordem é baixa.

## 2. O tema

**O que é.** "Gerar geradores" é produzir a regra que produz o artefato, e não o artefato. A regra pode
ser um script Python do Blender, um grafo de Geometry Nodes, um grafo PCG do Unreal, um shader GLSL/WGSL,
uma cena Manim, um sketch p5.js, um arquivo SVG ou um componente Three.js. Isso existe há décadas. O
objeto deste mapa é o que mudou: **quem escreve a regra passa a ser um modelo de linguagem**, a partir de
texto ou de uma imagem, e com um laço automático que renderiza o resultado, compara com a referência e
corrige o código.

**Onde encosta em mídia e interação.** Em tudo o que é visual e precisa ser editado, animado, variado
ou entregue leve: 3D para web e jogo, motion design, vídeo explicativo, UI animada, texturas, mundos de
jogo. E na fronteira com dois vizinhos: o tema 10 (capturar realidade em 3D — dado, não regra) e o tema
12 (gerar vídeo e imagem como pixel). Aqui o objeto é **a regra como artefato**.

**Por que merece um mapa de futuro.** Porque há uma disputa aberta entre duas formas de geração —
"gerar pixel" (pesado, opaco, não editável) e "gerar programa" (leve, legível, editável) — e porque a
mudança de quem escreve a regra mexe em três coisas ao mesmo tempo: o ofício (quem projeta passa a
especificar e revisar), o formato (o que trafega pela rede) e a autoria (o que é obra quando a obra é
um programa que ninguém digitou).

**Premissas do briefing, declaradas.** Horizonte 2041 (quinze anos). Público: quem projeta mídia e
interação. Recorte global, com nota sobre o Brasil (seção 5, prosa, e cenários). Descartado de início:
o que já é comum em produto de massa. Disrupção suspeita: nenhuma. Viés: neutro. Falseador pedido:
evidência de que a adoção já passou da maioria inicial ou de que a tecnologia só melhora o que existe —
entra como critério no §6 (seção 7). Não houve entrevista: o briefing completo a substitui, sem
rebaixamento (regra da skill). O que o briefing não cobre e foi assumido está na seção 12.2.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026 (24 fontes abertas; lista na seção 11).

### 3.1 O que já existe e funciona

- **Pesquisa com código, agente escrevendo 3D procedural.** *LL3M* (Lu et al., ago/2025) é um sistema
  multiagente que gera objetos 3D escrevendo Python do Blender, com uma base de documentação
  recuperável (BlenderRAG), e argumenta pela editabilidade do código como representação [12].
  *3DCodeBench* (Gao et al., Google/USC, 31/05/2026) mede 12 modelos de visão-linguagem escrevendo
  Blender 5.0 Python para 212 categorias de objeto, em modo single-shot, multi-turno e agente;
  lança também a *3DCodeArena*, ranking por preferência humana pareada [1].
- **Imagem → programa.** *img2threejs* reconstrói o objeto de uma única imagem como fábrica
  TypeScript de `THREE.Group` feita de primitivas, shaders procedurais e geometria gerada, com
  pivôs, sockets e colisores; Apache 2.0, cerca de 16,6 mil estrelas no GitHub em 22/09/2026, com
  portões de qualidade ("scripts enforce, the model judges") e geração por passe para economizar
  tokens [2][3]. *StarVector* (Rodriguez et al., 2023–2025) gera código SVG a partir de imagem e texto,
  com um conjunto de 2 milhões de SVGs [13].
- **Shader por linguagem.** *AI Co-Artist* (Yuksel e Sawaf, nov/2025) evolui animações GLSL com GPT-4
  numa interface ao estilo Picbreeder [10]. *shader-spec-eval* testa se um modelo transforma uma
  especificação em shader que cumpre propriedades mensuráveis: 600 gerações, 90,8% compilam, 67,5%
  passam em todos os testes [11].
- **A indústria abriu as ferramentas.** Em 28/04/2026 a Anthropic lançou nove conectores MCP para
  ferramentas criativas (Ableton, Adobe, Affinity, Autodesk Fusion, Blender, Resolume, SketchUp,
  Splice), prometendo que o modelo escreva "scripts, plugins e sistemas generativos" [5]. O Blender
  mantém um servidor MCP no *Blender Lab* (exige Blender 5.1+), que documenta grafos de Geometry
  Nodes e avisa que **executa código gerado sem proteção** [4]. No SIGGRAPH 2026, seis ferramentas
  profissionais anunciaram MCP — Unreal, Houdini 22, Adobe, Griptape, Blender, Affinity —, algumas só
  demonstradas [9]. A SideFX mostrou o *APEX Script Comfort Package*, com MCP para gerar código de
  rigging procedural, como prévia via SideFX Labs [6]; o Houdini 22 saiu em 16/07/2026 [7].
- **O caso mais completo: a City Sample.** A Epic refez a cidade da City Sample em grafos PCG
  dentro do Unreal 5.8, com ajuda de um LLM via Unreal MCP e duas "skills" (geração de grafo PCG e
  gramática de forma). A documentação diz que é preciso "entender a fundo como o grafo PCG funciona
  para checar a qualidade do trabalho do LLM" [8].
- **Creative coding maduro, que vira matéria-prima.** Manim (94,1 mil estrelas, MIT) [21] já tem
  servidores MCP que recebem roteiro e devolvem vídeo [22]; p5.js tem 24 mil estrelas [23];
  WaveFunctionCollapse (25,3 mil estrelas) gera níveis em *Bad North*, *Caves of Qud* e *Townscaper*
  [20]. No Brasil há comunidade organizada: o Processing Community Day São Paulo, organizado pelo
  Arteprog, e a Noite de Processing no Garoa Hacker Clube desde 2018 [24].
- **O runtime existe.** WebGPU tem 87,35% de suporte global (total + parcial) em 22/09/2026, com
  Safari de desktop parcial e Firefox desligado por padrão [19].

### 3.2 O que existe e ainda não funciona

- **Geometria complexa e orgânica.** O 3DCodeBench registra *API mismatches* e componentes
  "desconectados ou flutuantes" como falhas típicas; melhora com mais orçamento de pensamento e
  refinamento multi-turno [1]. No shader-spec-eval, formas simples passam em ~98%, mas espelhamento
  passa em 3%, anéis em 25%, círculos deslocados perto de 0% [11].
- **As integrações de estúdio são prévia.** APEX+MCP é "sneak peek" nos Labs [6]; parte dos MCPs do
  SIGGRAPH foi demonstração, não lançamento estável [9]; o MCP do Blender é experimental e inseguro
  por desenho [4].
- **World models como alternativa ao programa.** Genie 3 gera mundos navegáveis a 24 fps, 720p; o
  Project Genie (29/01/2026) só para assinantes Ultra nos EUA, com limite de 60 segundos por mundo
  [15]. Pixel em tempo real existe; persistência e edição não.

### 3.3 Quem constrói

Laboratórios acadêmicos (UChicago/LL3M [12]; Google e USC/3DCodeBench [1]; ServiceNow e Mila/StarVector
[13]); fornecedores de ferramenta (Epic [8], SideFX [6], Blender Foundation [4], Adobe e Canva/Affinity
[5][9]); fornecedores de modelo (Anthropic com conectores [5], Google com Genie [15]); e comunidade
aberta (img2threejs, criado por Hoài Nhớ [3]; manim e servidores MCP [21][22]; Processing Foundation
[23]).

### 3.4 Números de adoção

- 84% dos desenvolvedores usam ou pretendem usar IA; 50,6% dos profissionais usam todo dia; mas
  agentes são nicho: 30,9% usam ao menos mensalmente; 66% reclamam de soluções "quase certas" [18].
  É o número mais próximo para "quem escreve programa com IA"; **não há número para designers
  escrevendo gerador com IA** — sem número encontrado.
- Estrelas no GitHub (proxy fraco de interesse, não de uso): img2threejs ~16,6 mil [2], manim
  94,1 mil [21], WFC 25,3 mil [20], p5.js 24 mil [23], manim-mcp-server 644 [22].
- Peso comparativo: uma cena interna típica de 4 milhões de gaussianas pesa ~1.400 MB em PLY e
  ~140 MB em SOG [14]. Os modelos do img2threejs são código TypeScript — o repositório não publica
  um tamanho médio; a ordem de grandeza de dezenas de KB é inferência minha, não medida (seção 8).

### 3.5 Critério de maturidade aplicado ao contexto

*Candidato "geração procedural" recusado como raiz: maioria em VFX e jogos AAA há mais de uma década
(Houdini, PCG, WFC em jogos comerciais [20]); tratado como contexto.* *Candidato "creative coding
(p5.js, Processing, Shadertoy)" recusado como raiz: prática consolidada em educação e arte; contexto.*
*Candidato "assistente de código genérico" recusado como raiz: 84% dos desenvolvedores [18] — maioria;
é a pré-condição, não a ruptura.*

## 4. As disrupções-raiz

### 4.1 Raiz 1 — A especificação vira o meio de produção do gerador

A IA escreve o programa procedural (script, grafo, shader) a partir de texto ou imagem, e um laço
automático renderiza, compara e repara.

1. **O que rompe.** A suposição de que quem dirige uma ferramenta procedural precisa saber construir
   o grafo nó a nó. O gargalo do ofício passa de *construir* para *especificar e revisar*. Não é "o
   mesmo, mais rápido": o tipo de trabalho humano muda de natureza.
2. **Por que agora.** Três pré-condições apareceram entre 2025 e 2026: modelos de código que compilam
   shader em ~91% das vezes [11]; o laço render-crítica-reparo com VLM como juiz [1][2]; e APIs
   abertas para agente nas próprias ferramentas de produção (MCP em Blender, Unreal, Houdini) [4][6][8].
   Há cinco anos só havia o primeiro, e pior.
3. **Difusão.** Produto de nicho → adoção precoce entre artistas técnicos; em estúdios, prévia.
   Emergente.
4. **O que falta.** Geometria orgânica e relações espaciais confiáveis [1][11]; execução segura
   (sandbox) [4]; saída das prévias para lançamento estável [6][9]; um formato de especificação
   verificável que designers usem.

### 4.2 Raiz 2 — A mídia volta a trafegar como programa executado no cliente

Em vez de enviar o artefato pesado (malha, splat, vídeo), envia-se o programa que o desenha na GPU de
quem recebe.

1. **O que rompe.** O pipeline de asset "assado" e distribuído por CDN, e a suposição de que mídia
   gerada por IA é necessariamente pixel opaco. A disputa "pixel × programa" reabre o que o vídeo e a
   malha tinham fechado.
2. **Por que agora.** O programa sempre foi leve, mas caro de escrever à mão; a raiz 1 barateia a
   escrita. E o runtime chegou: WebGPU em 87% do tráfego [19]. Enquanto isso, o concorrente capturado
   pesa centenas de MB [14] e o world model pixel dura 60 s [15].
3. **Difusão.** Demo pública e produto de nicho (img2threejs, showcase WebGPU [3]). Especulativo a
   emergente — cadeia com confiança no máximo média.
4. **O que falta.** Que programas gerados cubram o orgânico; que plataformas de distribuição (redes
   sociais, lojas) aceitem mídia executável; que a execução de código de terceiros seja segura;
   resolver onde entra a marcação de conteúdo sintético [17].

### 4.3 Raiz 3 — Qualquer artefato visual pode ser revertido em regra

Procedural inverso: a partir de uma imagem, o agente reconstrói um gerador editável do objeto.

1. **O que rompe.** A assimetria entre ver e poder refazer. Até aqui, publicar um render não entregava
   o trabalho de modelagem; agora qualquer imagem publicada é ponto de partida para um gerador
   editável de outra pessoa. Rompe a opacidade como proteção de ofício e de estilo.
2. **Por que agora.** img2threejs [2], StarVector [13] e os benchmarks de imagem-para-código [1]
   são de 2023–2026; exigem VLM que descreva a imagem e LLM que escreva a regra, ambos recentes.
3. **Difusão.** Demo pública → produto de nicho (código aberto com milhares de estrelas [2]).
   Emergente em objetos rígidos, laboratório em orgânicos.
4. **O que falta.** Qualidade em forma complexa [1][11]; uma resposta jurídica sobre se o gerador
   reconstruído é obra derivada; ferramentas que tornem o procedimento acessível a quem não programa.

**Teste da raiz que não acontece (antecipado).** Se a raiz 3 falhar, as raízes 1 e 2 continuam
(escrever gerador a partir de texto não depende de reverter imagem). Se a raiz 1 falhar, a raiz 2
perde a fonte barata de programas e a 3 perde o motor — a dependência é declarada na seção 7.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A especificação vira o meio de produção do gerador (IA escreve script, grafo ou shader com laço render-crítica-reparo)
    efeitos:
      - id: e1
        ordem: 1
        efeito: Artistas técnicos de estúdio passam a revisar grafos PCG e Geometry Nodes escritos por agente em vez de montá-los nó a nó
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Estúdios passam a exigir legibilidade do grafo (parâmetros nomeados, frames de documentação) como critério de aceite de trabalho gerado
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Estúdios de jogo e VFX criam a função de revisor de grafo procedural, paga por revisão como a revisão de código em software
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O artista júnior perde o degrau de entrada de montar variações e setups simples, que é o primeiro trabalho que o agente assume
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Disciplinas de computação gráfica e design de interação trocam o exercício de construir shader do zero pelo de consertar e explicar shader escrito por agente
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Quem projeta mídia passa a entregar especificação verificável (propriedades mensuráveis) em vez de referência visual, porque o agente só converge contra critério testável
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Ferramentas de brief e de design ganham campos de restrição checável e testes de render, e o brief vira arquivo executável
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Contratos entre cliente e estúdio de mídia passam a incluir suíte de aceite, e a disputa de entrega é decidida por teste que passou ou falhou
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O que não se mede (atmosfera, estranheza, tom) passa a ser o território cobrado do humano, e a estética que só passa nos testes fica reconhecível como genérica
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Uma corrente estética deliberadamente não especificável ganha valor de mercado como sinal de autoria humana
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Ferramentas procedurais caras e difíceis (Houdini, PCG) perdem a barreira da curva de aprendizado porque o agente vira a interface, não o grafo
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A concorrência entre fornecedores de ferramenta desloca-se de melhor interface de nós para melhor API e documentação legível por agente
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Ferramentas criativas sem API scriptável perdem espaço em estúdio mesmo quando são melhores na mão humana
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Fornecedores de DCC restringem o acesso de agentes externos e empurram o próprio assistente pago, capturando a camada de agente
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Blender, aberto e gratuito, torna-se a ferramenta de referência para agentes de terceiros e ganha fatia em estúdios pequenos
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Por executar código gerado sem proteção, integrações de agente em DCC ficam confinadas a máquina virtual e escopo restrito, o que atrasa a entrada em produção
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Linguagens procedurais seguras por construção (grafos puros, sem acesso a arquivo e rede) viram o formato preferido para agente escrever
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Grafos declarativos serializados substituem o script Python como formato de troca de geradores entre ferramentas
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O asset estático vendido em marketplace perde valor para o gerador parametrizável, porque o comprador pede variações que o agente produz
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Marketplaces de conteúdo passam a vender geradores e skills de agente em vez de modelos prontos
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A remuneração do artista de asset passa de pagamento por peça para royalty por execução do gerador, o que exige medir execução
                sinal: fraco
                prazo: 2039
                confianca: baixa
  - disrupcao: A mídia volta a trafegar como programa executado no cliente, em disputa com pixel e splat gerados
    efeitos:
      - id: e6
        ordem: 1
        efeito: Objetos e cenas 3D para web passam a ser entregues como código procedural leve em vez de splat ou malha de centenas de megabytes
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Em redes caras e lentas, a experiência 3D procedural chega onde o splat não chega, e a estética se divide por banda disponível
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A estética procedural e estilizada se associa a mercados de banda cara e é reapropriada como identidade visual local
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O custo de entregar mídia passa do tráfego de CDN para computação no aparelho, e o gargalo vira bateria e aquecimento em celular e óculos
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Fabricantes de óculos XR tratam o runtime procedural certificado como ponto de controle da plataforma
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A disputa entre pixel gerado e programa gerado se resolve por domínio, com programa onde é preciso editar e interagir e pixel onde é preciso fotorrealismo de uma vez
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: World models passam a gerar referência e protótipo navegável, e um agente converte o resultado em gerador editável para produção
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O fluxo de sonhar em pixel e entregar em programa vira etapa padrão da pré-produção de jogos
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Vídeo programático (Manim, Remotion, motion por regra) cresce em conteúdo explicativo e de marca que exige texto e número exatos, onde o vídeo gerado falha
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Material didático passa a ser distribuído como cena-programa que o aluno altera, e o vídeo vira só uma renderização possível
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Executar código gráfico de terceiros no aparelho abre superfície de ataque e de rastreamento, e navegadores e sistemas restringem o que a mídia-programa pode fazer
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Redes sociais e lojas de aplicativo aceitam mídia-programa só dentro do próprio sandbox, e quem controla o runtime controla o formato
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A mídia-programa fica restrita à web aberta e aos motores de jogo, e o feed das redes continua em vídeo
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A marcação obrigatória de conteúdo sintético, desenhada para pixel, áudio e texto, deixa em zona cinzenta o programa gerado que desenha a imagem na hora
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O AI Office da Comissão Europeia passa a tratar a saída renderizada do programa como conteúdo sintético, com marca exigida no render e não no código
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Motores e navegadores incorporam marcação de proveniência na renderização, e a prova de origem migra do arquivo para o executor
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: Qualquer artefato visual publicado pode ser revertido em regra editável (procedural inverso)
    efeitos:
      - id: e10
        ordem: 1
        efeito: Um objeto publicado como imagem vira em minutos um gerador editável nas mãos de outra pessoa, e a opacidade do render deixa de proteger o trabalho de modelagem
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Estúdios e marcas passam a publicar menos referência em alta resolução (model sheets, turnarounds) ou a publicá-la com perturbação contra reconstrução
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Ferramentas de perturbação adversarial, hoje voltadas a estilo de imagem, estendem-se a proteger forma 3D contra reconstrução
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Tribunais e escritórios de registro passam a julgar se o gerador reconstruído é obra derivada do objeto ou apenas método, que não é protegido
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Geradores escritos por agente só com prompt ficam sem proteção autoral, e o valor migra para o segredo com execução remota em vez de publicação
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Obras de mídia interativa obsoletas passam a ser reconstruídas como programa legível a partir de captura de tela e vídeo
        sinal: fraco
        prazo: 2034
        confianca: baixa
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Museus e arquivos de jogos guardam o gerador reconstruído ao lado do binário original, e a fidelidade da reconstrução vira disputa curatorial
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Historiadores da mídia passam a discutir se a obra é o binário ou a regra reconstruída
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O estudo de estilo em design passa de copiar à mão para ler e alterar a regra reconstruída de uma peça de referência
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O estilo de um designer fica expresso como conjunto de parâmetros extraíveis e passa a ser licenciado como preset
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Artistas registram geradores-assinatura como obra, e os primeiros casos testam se a lei protege uma regra
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: A reconstrução como código falha em formas orgânicas e relações espaciais complexas, o que limita o procedural inverso a objetos rígidos e simples
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A produção se divide, com objetos rígidos entregues como código e personagens e vegetação mantidos como malha ou splat capturado
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Formatos híbridos com esqueleto procedural e detalhe neural viram padrão, e o só-código vira nicho estético
                sinal: fraco
                prazo: 2038
                confianca: baixa
```

### 5.1 Mecanismos, raiz 1 (a especificação produz o gerador)

- **e1** — porque a raiz faz o agente produzir o grafo, o trabalho humano restante é conferir. Sinal
  forte: três artefatos verificáveis — a City Sample refeita em PCG com LLM [8], o APEX+MCP da SideFX
  [6] e o conector Blender que escreve scripts e documenta Geometry Nodes [4][5]. Prazo 2029 pela
  classe de referência *assistentes de código*: Copilot (2021) → maioria dos desenvolvedores em 2025
  [18], ~4 anos; artistas técnicos são um público mais conservador e com ferramentas em prévia, então
  somei um ano e contei a partir de 2026 (data de Copilot é de memória, seção 8).
  - **e1.1** — porque e1 transfere o custo para a revisão, e revisar grafo de outro custa mais que
    montar o próprio, o estúdio passa a exigir legibilidade. Sinal médio: a documentação da Epic diz
    que é preciso entender a fundo o grafo para checar o LLM [8]; o MCP do Blender já gera frames de
    documentação [4]. Referência: code review obrigatório em software, que se espalhou com o GitHub
    (pull request) em menos de uma década.
    - **e1.1.1** — porque e1.1 transforma revisão em tarefa separável e contável, ela pode ser
      vendida separadamente. Ator: estúdios de jogo e VFX. Troca de ator (do artista para a função de
      revisão). Confiança baixa.
  - **e1.2** — porque as tarefas mais fáceis de especificar são as que o júnior fazia, e1 retira
    primeiro o degrau de aprendizagem. Sinal médio: 66% dos desenvolvedores já relatam soluções
    "quase certas" [18] — é justamente o trabalho de conserto que sobra para quem sabe. Teste da
    causa solta: sem a raiz, automação genérica não tira esse degrau de artista 3D; mantido.
    - **e1.2.1** — porque e1.2 remove o exercício que formava, disciplinas específicas (computação
      gráfica e design de interação; no CIn-UFPE, por exemplo) passariam a ensinar leitura e
      depuração. É o efeito "cursos reorganizam o currículo" que a skill proíbe sem ator e
      mecanismo — aqui entra com o exercício concreto trocado (construir shader → consertar shader).
- **e2** — porque o laço render-crítica-reparo converge contra critérios mensuráveis e não contra
  "algo assim", quem pede passa a escrever o critério. Sinal médio: shader-spec-eval [11] e
  3DCodeBench [1] medem por propriedade; o img2threejs exige inventário de detalhes antes de gerar
  [2]. Referência: design de UI → design tokens e specs de componente, que levaram cerca de uma década
  para virar prática (de memória).
  - **e2.1** — porque e2 torna a especificação um objeto recorrente, as ferramentas de brief o
    absorvem. Sinal fraco (nenhum produto encontrado). Confiança média pelo mecanismo.
    - **e2.1.1** — porque e2.1 dá um artefato checável ao contrato, a disputa de entrega passa a ter
      árbitro objetivo. Troca de ator (do estúdio para o jurídico e o cliente).
  - **e2.2** — porque o que o teste não captura é o que o agente não otimiza, o valor humano se
    concentra ali; e a saída que só passa nos testes converge para um centro reconhecível.
    - **e2.2.1** — porque e2.2 cria escassez do não especificável, ela é precificada.
- **e3** — porque o agente fala com a API e não com a interface de nós, a curva de aprendizado deixa
  de ser barreira (Houdini FX custa US$ 4.495 por licença fixa [7] — o preço permanece; o que cai é o
  custo de aprender). Sinal médio (MCPs em prévia [6][9]).
  - **e3.1** — porque e3 muda quem é o usuário da ferramenta (o agente), o fornecedor compete na
    legibilidade da API. Sinal forte: a SideFX cura uma biblioteca de APEX para MCP [6]; a Epic
    publica o plugin PCG Primitives "feito para interagir com um servidor MCP e um LLM" (na busca;
    a página da Epic devolveu 403, ver seção 12); o LL3M construiu o BlenderRAG a partir da
    documentação [12].
    - **e3.1.1** — porque e3.1 premia a scriptabilidade, a ferramenta só-GUI perde mesmo sendo boa.
  - **e3.2** — **retroação com dono (quem bloqueia):** fornecedores de DCC têm incentivo para que o
    agente seja o deles, pago. Sinal fraco — até agora os MCPs são abertos ao cliente que for [5]; é
    inferência.
    - **e3.2.1** — porque e3.2 fecha ferramentas proprietárias, a aberta vira padrão dos agentes de
      terceiros.
- **e4** — **retroação:** porque o servidor MCP do Blender executa código gerado sem guardas e
  recomenda VM [4], estúdios com propriedade intelectual a proteger isolam o agente, e isso atrasa.
  - **e4.1** — porque e4 torna o risco um custo, cresce a demanda por linguagem que não consegue
    exfiltrar dado. Referência: shaders já são sandbox por desenho — o modelo existe.
    - **e4.1.1** — porque e4.1 padroniza grafos puros, eles viram formato de troca.
- **e5** — **quem perde:** vendedores de packs de asset. Porque e1 torna a variação barata, o
  comprador prefere o gerador. Sinal fraco; rebaixado de médio no §6.
  - **e5.1** — porque e5 desloca a demanda, o marketplace muda o que vende. Sinal médio: o
    img2threejs já é distribuído como skill de agente [2][3].
    - **e5.1.1** — porque e5.1 cobra por uso e não por peça, o artista recebe por execução.

### 5.2 Mecanismos, raiz 2 (a mídia como programa)

- **e6** — porque a raiz 1 barateia escrever o programa e o WebGPU já está em 87% do tráfego [19], o
  código de poucos KB compete com o splat de ~140 MB [14]. Sinal médio: showcase do img2threejs [3] e
  galeria [2]. Prazo 2031 pela referência *WebGPU*: lançado no Chrome em 2023 (de memória) → 87% em
  2026 [19]; o formato de conteúdo costuma vir anos depois do runtime.
  - **e6.1** — porque o custo por MB pesa mais onde o dado é caro, a vantagem do programa é maior no
    celular pré-pago. **Nota Brasil:** é aqui que o recorte geográfico muda o mapa — mercados com
    franquia de dados limitada favorecem o procedural. Sem número de preço de dados aberto nesta
    rodada.
    - **e6.1.1** — porque e6.1 associa uma estética a um mercado, ela pode ser reapropriada como
      identidade (a comunidade Arteprog/Noite de Processing em São Paulo [24] é o tipo de ator que o
      faria). Confiança baixa.
  - **e6.2** — porque o programa troca bytes por ciclos de GPU, o custo migra para o aparelho.
    - **e6.2.1** — porque e6.2 faz do runtime o recurso escasso, o fabricante do óculos o controla.
- **e7** — porque o programa é editável e o pixel não, e o pixel é fotorreal e o programa (por ora)
  não [1][11][15], nenhum vence tudo. Sinal médio: a City Sample editável [8] de um lado; o Genie 3,
  60 s e 720p, do outro [15].
  - **e7.1** — porque world models produzem referência navegável rápido mas não persistente, e o
    procedural inverso (raiz 3) converte, os dois se encadeiam. Convergência com a raiz 3.
    - **e7.1.1** — porque e7.1 funciona, vira etapa padrão.
  - **e7.2** — porque vídeo gerado erra texto e número, e o vídeo programático não, conteúdo que
    exige exatidão migra para programa escrito por agente. Sinal médio: Manim com 94 mil estrelas [21] e
    servidores MCP para Manim [22].
    - **e7.2.1** — porque e7.2 entrega uma cena parametrizável, o aluno recebe o programa, não o MP4.
- **e8** — **retroação:** porque mídia-programa é código de terceiro rodando localmente, abre
  superfície de ataque. Sinal fraco — nenhuma fonte aberta sobre incidente; inferência.
  - **e8.1** — **quem bloqueia:** plataformas que controlam o runtime (lojas, redes sociais) têm
    incentivo para aceitar só o próprio sandbox.
    - **e8.1.1** — porque e8.1 fecha o feed, a mídia-programa fica em ilhas.
- **e9** — porque o art. 50(2) do AI Act exige marcar em formato legível por máquina saídas de áudio,
  imagem, vídeo e texto [17], e o que trafega aqui é código que gera a imagem na hora, a regra não
  encaixa limpo; a exceção para "função assistiva de edição padrão" amplia a ambiguidade. Obrigação
  vigente desde 02/08/2026 [17].
  - **e9.1** — **ator nomeado:** o AI Office da Comissão Europeia, que publica as diretrizes do art. 50.
    Porque e9 cria brecha, a diretriz tende a olhar para o render. Confiança média.
    - **e9.1.1** — porque e9.1 marca o render, quem renderiza (motor, navegador) passa a carregar a
      proveniência.

### 5.3 Mecanismos, raiz 3 (procedural inverso)

- **e10** — porque img2threejs e StarVector fazem imagem → código [2][13], a imagem publicada entrega
  o ponto de partida do gerador. Sinal forte: três artefatos (img2threejs, StarVector, 3DCodeBench no
  modo imagem [1]).
  - **e10.1** — porque e10 torna a referência publicada um insumo alheio, quem publica reduz ou
    envenena. Referência: marcas d'água e perturbação contra treinamento de estilo em imagem (Glaze,
    de memória — não aberto).
    - **e10.1.1** — porque e10.1 cria demanda, a ferramenta de perturbação estende-se a forma.
  - **e10.2** — porque e10 produz um objeto (o gerador) que não copia pixel nem malha, a pergunta
    jurídica muda de "cópia" para "derivação ou método". **Ator:** US Copyright Office e tribunais
    americanos; o relatório de 2025 diz que prompt sozinho não dá controle suficiente para autoria [16].
    - **e10.2.1** — porque [16] nega autoria a saída só de prompt, o gerador escrito por agente só com
      prompt fica sem dono, e o valor migra para segredo (execução remota).
- **e11** — porque a reconstrução por imagem não depende do binário original, obras cujo binário não
  roda mais podem ser recuperadas como regra. Sinal fraco; confiança baixa desde a 1ª ordem.
  - **e11.1** e **e11.1.1** — troca de ator (arquivo → curadoria → historiografia). e11.1.1 tem prazo
    2041, no limite do horizonte.
- **e12** — porque a peça de referência vira código que se lê e altera ("code you can inspect, diff,
  animate, and extend" [2]), o estudo de estilo vira leitura de regra. Sinal médio (galeria do
  img2threejs [2], Manim como instrumento didático [21]).
  - **e12.1** — porque e12 expõe o estilo como parâmetros, ele pode ser licenciado. Rebaixado no §6.
    - **e12.1.1** — porque e12.1 transforma estilo em objeto, alguém testa a proteção em juízo.
- **e13** — **retroação:** as falhas são medidas hoje — geometria flutuante e *API mismatches* [1];
  espelhamento 3%, anéis 25% [11]. Confiança alta porque é observação presente com prazo curto (2028).
  - **e13.1** — porque e13 é seletivo por tipo de forma, a produção se divide por tipo.
    - **e13.1.1** — porque e13.1 obriga a combinar, os formatos híbridos vencem o "só código".

### 5.4 Cobertura STEEP e quem perde

- **Social:** e1.2 (júnior), e2.2 (valor do não mensurável), e12 (ensino).
- **Tecnológico:** e3, e4, e6, e7, e13.
- **Econômico:** e5 (marketplace), e6.2 (custo migra para o aparelho), e3.2.
- **Ecológico:** e6.2 é o único ramo — trocar tráfego por computação local tem efeito energético de
  sinal desconhecido; **sem fonte aberta, categoria quase vazia, registrado.**
- **Político:** e9 (AI Act), e10.2 (direito autoral), e8.1 (controle de plataforma).
- **Quem perde:** artista júnior (e1.2), vendedor de asset (e5), quem publica referência (e10),
  ferramentas só-GUI (e3.1.1), fornecedores de captura pesada onde a banda é cara (e6.1).

### 5.5 Cruzamentos

- **Convergência 1 — o autoral é o que não se parametriza.** e2.2 (raiz 1: o não mensurável fica com o
  humano) e e12.1 (raiz 3: o estilo parametrizável vira preset licenciável) chegam ao mesmo ponto por
  caminhos diferentes: o que se expressa como parâmetro deixa de ser diferencial. É o achado mais
  forte do mapa.
- **Convergência 2 — a proveniência migra para o executor.** e9.1.1 (raiz 2: marca no render) e
  e10.2.1 (raiz 3: gerador sem dono, valor no segredo com execução remota) apontam para o mesmo lugar:
  quem executa o gerador passa a ser quem prova e quem controla.
- **Convergência 3 — pixel e programa se encadeiam.** e7.1 (raiz 2) depende da raiz 3: o world model
  produz a referência; o procedural inverso a converte.
- **Retroalimentação.** e5.1 (marketplaces de geradores) e e3.1 (APIs legíveis por agente) aumentam o
  corpus de programas gráficos públicos, que treina e alimenta o RAG dos próximos agentes (o BlenderRAG
  do LL3M é o precedente [12]) → a raiz 1 melhora. Ciclo reforçador. Em sentido contrário, e10.1
  (publicar menos referência) e e10.2.1 (geradores em segredo) **reduzem** esse corpus — ciclo
  enfraquecedor que compete com o primeiro.
- **Contradição.** e6 (programa leve vence na web) e e13.1 (orgânico continua pesado) não podem ser
  ambos dominantes para a mesma cena: se a cena é de personagens e vegetação, e13.1 ganha. O que
  decide: a taxa de sucesso em forma orgânica nos próximos ciclos do 3DCodeBench [1].
- **Contradição 2.** e3.2 (captura pelo fornecedor) e e3.2.1 (Blender vira padrão) dependem de uma
  mesma variável: se os conectores continuarem abertos a qualquer cliente MCP, como hoje [5], e3.2 não
  acontece.

### 5.6 Regra de parada

Não derivei uma 4ª ordem em nenhum ramo (o formato fixa três). Onde o filho seria "o pai mais
adiante", parei antes: por exemplo, "estúdios adotam PCG com agente em todos os projetos" seria e1
amadurecendo, não e1.1 — descartado (seção 12).

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

1. **A geração medida em tokens.** O img2threejs se vende como "token-efficient" e desenha o pipeline
   para economizar tokens (um passe por vez, uma imagem por revisão) [2]. Se crescer: o custo de
   produção de mídia passa a ser orçado em tokens de inferência, e o programa (curto) vence o pixel
   (longo) também no custo de geração, não só no de tráfego. **Sinal observável:** ferramentas de
   criação publicando custo por asset em tokens; benchmarks (tipo 3DCodeBench) reportando custo além
   de qualidade.
2. **A IA dirigindo ferramentas de animação matemática.** Servidores MCP para Manim [22] e o próprio
   Manim com 94 mil estrelas [21]. Se crescer: o vídeo explicativo passa a ser um programa por padrão
   (e7.2). **Sinal:** plataformas de curso aceitando cena-programa como formato de entrega.
3. **Ferramentas feitas para agente, não para humano.** O plugin PCG Primitives da Epic "projetado
   para interagir com MCP e LLM" (visto na busca, página 403) e o APEX curado para MCP [6]. Se
   crescer: a interface de nós deixa de ser o produto principal (e3.1). **Sinal:** release notes de
   DCC listando recursos "para agentes" separados de recursos para artistas.
4. **Brief como teste.** shader-spec-eval troca comparação com imagem por propriedades mensuráveis
   [11]. Se crescer: e2 acontece. **Sinal:** um gerenciador de projeto criativo ou ferramenta de
   design com "critérios de aceite" executáveis.

### 6.2 Wildcards

1. **O motor que gera o jogo como código na chegada do jogador.** Mecanismo: o agente escreve o
   gerador do nível/objeto quando o jogador entra na área, em segundos, e o jogo não tem conteúdo
   instalado, só regras-mãe e um modelo. **Por que é improvável até 2041:** latência de inferência,
   custo por jogador, e a falha em forma orgânica (e13); e a certificação de console exige conteúdo
   testado. **O que faz com o mapa:** a raiz 2 vira dominante no jogo; e5 (asset estático) colapsa;
   QA de jogo vira teste de gerador. **Sinal precoce:** um jogo comercial com crédito de "conteúdo
   escrito por agente em tempo de execução" e revisão de loja aprovada.
2. **O world model barato vence o programa.** Mecanismo: world models tipo Genie ganham persistência e
   edição por instrução, e a inferência fica barata o bastante para rodar no aparelho. **Improvável
   porque:** hoje dura 60 s e é restrito a um plano pago nos EUA [15]. **O que faz:** a raiz 2 perde
   (pixel vence também onde é preciso editar), e7 se resolve para o pixel, e o mapa encolhe para as
   raízes 1 e 3 como nicho profissional. **Sinal precoce:** um world model que aceita "mude a cor da
   porta" e mantém o resto intacto após 10 minutos.
3. **Codec-programa.** Mecanismo: um padrão de vídeo que transmite, junto do fluxo comprimido, um
   programa gerado que redesenha partes da cena (texto, gráficos, UI) — compressão semântica por regra.
   **Improvável porque:** padrões de codec levam uma década e dependem de consórcio. **O que faz:**
   a mídia-programa entra no feed pela porta do codec, anulando e8.1.1. **Sinal:** proposta desse tipo
   em grupo de padronização de vídeo.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem

*"É 2041 e este mapa se mostrou errado. Por quê?"*

1. **O pixel melhorou mais rápido que o programa.** World models e geração de vídeo ganharam edição
   localizada e consistência; a vantagem "editável" do programa evaporou. → Atinge e7, e6 e toda a
   raiz 2. Ação: e7.1 rebaixado (media → baixa); wildcard 2 escrito para cobrir.
2. **A especificação verificável nunca pegou entre designers.** Quem projeta mídia continuou pedindo
   por referência visual e o agente aprendeu a convergir contra imagem, dispensando o critério
   mensurável. → Atinge e2 e seus filhos. Ação: e2.1 mantido com sinal fraco; o experimento (seção 10)
   testa exatamente isto.
3. **A camada de agente foi capturada pelos fornecedores.** Os MCPs abertos de 2026 fecharam; cada DCC
   só aceita o próprio assistente. → Atinge e3.2.1 e a retroalimentação por corpus público. Ação:
   e3.2.1 mantido em baixa; contradição registrada em 5.5.

### 7.2 Extrapolação linear

- **e1** é, em parte, "mais do que já acontece na City Sample". Ganha não-linearidade pela troca de
  tarefa (construir → revisar), que é mudança de natureza — mantido, mas sem subir confiança.
- **e7.2** (vídeo programático cresce) era "Manim maior". Ganhou mecanismo não linear: o vídeo gerado
  falha justamente em texto e número, o que cria um nicho protegido. Mantido.
- **e3.1.1** (ferramenta só-GUI perde) é extrapolação de e3.1; mantido em baixa como 3ª ordem porque
  troca de ator (de fornecedor que ganha para fornecedor que perde).

### 7.3 Velocidade de adoção

- **e6** exigia, na primeira versão, 2029 — dois anos depois do lançamento de demos. A referência
  WebGPU (2023 → 87% em 2026, [19]) é de runtime, não de formato de conteúdo; formato vem depois.
  Empurrado para 2031 (+2 anos).
- **e9.1** estava em 2029; diretrizes do AI Office sobre o art. 50 já existem [17], mas uma revisão
  específica para mídia-programa exigiria casos. Empurrado para 2031.
- **e5** estava com prazo 2030 e sinal médio; não achei marketplace vendendo gerador no lugar de
  asset. Prazo → 2032.

### 7.4 A raiz que não acontece

- **Sem a raiz 1:** a raiz 2 perde sua fonte barata de programas (vira o que já é: creative coding
  artesanal, maduro); a raiz 3 perde o escritor. Sobra pouco — **o mapa depende da raiz 1**. Não é uma
  raiz disfarçada em três porque a raiz 3 tem mecanismo próprio (imagem → regra rompe a opacidade, o
  que a raiz 1 por texto não faz) e a raiz 2 tem ator próprio (plataformas, runtime, regulador).
- **Sem a raiz 2:** e6–e9 caem; raízes 1 e 3 continuam dentro de estúdios (programa gerado, mas
  entregue "assado"). O ofício muda; o formato de distribuição não.
- **Sem a raiz 3:** e10–e13 caem; convergência 1 perde um lado, mas e2.2 continua.

### 7.5 Suposições escondidas

1. Modelos de código fortes continuam acessíveis a preço baixo — se encarecerem, e5 e e6 perdem.
2. Os conectores MCP continuam abertos a qualquer cliente [5] — já virou contradição (5.5).
3. O critério de autoria do USCO [16] se mantém — uma mudança legal para aceitar prompt como autoria
   anularia e10.2.1.
4. GPU no aparelho continua crescendo — se estagnar, e6.2 vira freio forte.
5. A falha em forma orgânica é de capacidade, não de representação — se for de representação (código
   não é bom meio para forma orgânica), e13.1 vira permanente e a raiz 2 fica nicho. Isso é um
   wildcard negativo novo: **"código nunca aprende orgânico"**; registrado na seção 12.

### 7.6 Viés do autor

O autor (professor de mídia e interação, criador de ferramentas de creative coding e música) tem
simpatia declarada por mídia legível, editável e leve — o "contra o pixel gerado". **e6.1.1**
(estética procedural como identidade local) e **e7.2.1** (aula como cena-programa) estão no mapa em
parte por esse gosto. Ficam, em confiança baixa, e marcados aqui.

### 7.7 Falseador do briefing

- *"A adoção já passou da maioria inicial?"* — Para assistentes de código genéricos, sim (84% [18]),
  e por isso foram recusados como raiz. Para **agente escrevendo gerador em ferramenta de produção**,
  não: agentes em geral são usados mensalmente por 30,9% dos desenvolvedores [18], e as integrações
  de DCC são prévia [6][9]. Não falseia.
- *"A tecnologia só melhora o que existe?"* — O risco é real na raiz 1: e3 (curva de aprendizado cai)
  é melhoria sustentadora se lida sozinha. A raiz se sustenta pelo que rompe (a divisão de trabalho
  construir/revisar, e1/e1.2) e não por e3. Se a evidência mostrar que estúdios usam o agente só para
  acelerar o artista sênior sem mudar quem faz o quê, a raiz 1 vira melhoria — **condição registrada
  como critério de revisão do mapa.**

### 7.8 Calibração

Após as alterações: 1ª ordem — alta 1 · média 11 · baixa 1; 2ª ordem — alta 0 · média 16 · baixa 3;
3ª ordem — alta 0 · média 0 · baixa 19. A confiança cai com a ordem. (Números conferidos pelo
verificador, seção 12.)

### 7.9 Registro de alterações

- e7.1: confianca media → baixa, porque o pré-mortem 1 (pixel melhora mais rápido) e o limite atual de
  60 s do Genie [15] tornam a conversão world model → gerador dupla aposta.
- e12.1: confianca media → baixa, porque não há caso de estilo licenciado como preset; é inferência sobre
  inferência.
- e11: confianca media → baixa, porque o único mecanismo é a raiz 3 aplicada a um domínio (arquivo) sem
  nenhum artefato observado.
- e3.1: confianca alta → media, porque o sinal forte é de fornecedor anunciando em prévia [6][9], não de
  adoção.
- e5: sinal medio → fraco e prazo 2030 → 2032, porque nenhum marketplace vendendo gerador no lugar de
  asset foi encontrado.
- e6: prazo 2029 → 2031, porque a referência WebGPU é de runtime e o formato de conteúdo chega depois.
- e9.1: prazo 2029 → 2031, pela mesma razão de casos necessários.
- e13: confianca media → alta (única subida), porque é medição presente [1][11] com prazo curto.
- **Removido** "e2.3 — agências passam a vender direção de arte como assinatura de agente" (vai para a
  seção 12), porque falhou no teste da causa solta: aconteceria por qualquer IA generativa, não por
  gerar geradores.
- **Removido** "e8.2 — shaders maliciosos provocam incidente de segurança de grande porte" (seção 12),
  porque não achei um único caso para ancorar e virava enredo.
- **Removido** "e10.3 — plataformas de modelos 3D bloqueiam reconstrução automática nos termos de uso"
  (seção 12), porque é o filho e10.1 "mais adiante" (regra de parada).

Cota por raiz cumprida: raiz 1 (e3.1, e5, e2.3 removido), raiz 2 (e7.1, e6, e9.1, e8.2 removido),
raiz 3 (e12.1, e11, e10.3 removido).

## 8. O que a máquina errou

1. **Datas de referência citadas de memória.** O lançamento do Copilot (2021), do WebGPU no Chrome 113
   (2023), a duração de adoção de design tokens (~uma década) e o Glaze como ferramenta de
   perturbação de estilo foram usados como classes de referência **sem abrir fonte** nesta rodada.
   Estão marcados no texto; um revisor deveria conferir antes de usar os prazos derivados deles.
2. **Ordem de grandeza do tamanho do código.** Escrevi que os modelos do img2threejs são "código de
   poucos KB" contra ~140 MB de SOG [14]. O repositório não publica tamanho médio [2]; o número é
   inferência de que um arquivo TypeScript de primitivas raramente passa de dezenas de KB. Um "mil
   vezes mais leve" (frase do enunciado do tema) não foi medido por ninguém que eu tenha aberto.
3. **Autoria e afiliação do 3DCodeBench.** Escrevi "Google/USC" a partir da lista de autores (Makadia,
   Itti) e de conhecimento prévio sobre onde publicam; a página do arXiv que abri [1] não lista
   instituições. Idem "UChicago" para o LL3M [12] (Hanocka) e "ServiceNow e Mila" para o StarVector
   [13] — plausíveis, não verificados na página.
4. **Nomes de modelos no shader-spec-eval.** A tabela devolvida pela ferramenta de leitura trazia
   modelos como "Gemini-3.7-Flash" e "Kimi-K2.7-Code" [11]. Não reproduzi os nomes no corpo porque não
   consegui confirmar que o resumo da ferramenta não os distorceu; usei só os agregados (90,8%, 67,5%,
   3%, 25%).
5. **"Nove conectores" e a lista.** A lista da Anthropic [5] tem nove nomes, mas Resolume aparece como
   dois (Arena e Wire); a contagem de "nove" é da fonte, não minha.
6. **Mecanismo fraco que ficou.** e6.2.1 (óculos XR tratam runtime procedural como ponto de controle)
   soa plausível mas o mecanismo depende de XR de consumo decolar — que a própria classe de
   referência da skill diz que não aconteceu em mais de dez anos. Ficou em baixa; é o efeito mais
   frágil do mapa.
7. **Página da Epic não aberta.** O dado "18 grafos PCG interligados" e a frase "o modelo escreve as
   regras, o PCG faz o posicionamento" vieram do resumo da busca, porque a página de aprendizado da
   Epic devolveu 403. Usei no corpo só o que a documentação da Epic [8], que abriu, sustenta.

## 9. Três cenários para 2041

**Provável.** Em 2041, em estúdios de jogo, VFX e motion, o grafo procedural é escrito primeiro por
agente e revisado por gente; a revisão de grafo é uma etapa com nome e preço. Objetos rígidos, cenários
arquitetônicos, UI animada e vídeo explicativo circulam como programa; personagens e natureza
continuam em malha ou splat, muitas vezes com esqueleto procedural e detalhe neural. A web aberta e os
motores aceitam mídia-programa; o feed das redes sociais continua em vídeo. O gerador escrito só com
prompt não tem proteção autoral nos EUA, e os melhores geradores são executados como serviço, sem
publicar o código. No Brasil, onde o dado móvel é caro, o 3D procedural é o 3D que carrega.
**Sinal precoce:** as prévias de 2026 (APEX+MCP, Unreal MCP) saem de prévia até 2028 e aparecem em
vagas de emprego como requisito "revisar grafos gerados".

**Desejável.** Quem projeta mídia escreve especificações verificáveis como parte normal do ofício, e o
brief executável virou contrato; a revisão de grafo formou uma geração que sabe ler sistemas, não só
operar interfaces. Os conectores de agente continuaram abertos, e o corpus público de geradores cresceu
— o que manteve Blender e ferramentas abertas no centro. A marcação de proveniência foi para o render,
de modo que um objeto procedural gerado é identificável sem proibir o formato. O que teria de ter sido
feito: escolas de design tratando leitura de programa gráfico como alfabetização básica; fornecedores
mantendo MCP aberto; o AI Office definindo marcação no render cedo. **Sinal precoce:** uma ferramenta
de design de uso amplo com "critérios de aceite" executáveis antes de 2032.

**Indesejável.** A camada de agente foi capturada: cada ferramenta só aceita o próprio assistente
pago, os geradores públicos rarearam porque tudo virou segredo executado remotamente, e o júnior não
tem mais onde aprender, porque o trabalho de montar variações sumiu antes que se criasse o de revisar.
A estética que passa nos testes dominou o que é produzido em volume, e o não especificável virou luxo
de estúdios grandes. Qualquer imagem publicada é reconstruída e revendida como gerador, e quem publica
referência passou a envenená-la. **Sinal precoce:** um grande fornecedor de DCC retirando o suporte a
clientes MCP de terceiros, ou exigindo o próprio modelo para usar o servidor.

## 10. O experimento

**O que é.** *Brief executável.* Um banco pequeno de pedidos de mídia (dez objetos 3D para Three.js e
dez shaders 2D) escritos de duas formas: **(A)** como se escreve hoje — imagem de referência e frase
("algo assim, mais quente"); **(B)** como especificação verificável — propriedades mensuráveis
(quantidade de repetições, simetria, proporção, borda dura/suave, paleta, número de peças móveis,
pivôs). Um agente de código (Claude Code, Codex ou equivalente) escreve o gerador em cada caso, com o
laço render → comparação → reparo do img2threejs para os objetos e o harness do shader-spec-eval para
os shaders. Mede-se: rodadas até convergir, taxa de aceite por um júri da turma, bytes do artefato,
tempo até o primeiro quadro num celular com rede 4G, e quantos de cinco pedidos de alteração ("mais
alto", "sem a alça", "outra cor na parte de trás") o artefato aceita sem regenerar do zero.

**Que pergunta responde.** e2: *quem projeta mídia vira quem escreve critério verificável?* E, de
passagem, e6 (o programa é de fato leve e rápido no celular?) e e13 (onde a reconstrução quebra).

**Que tecnologia emergente usa, e por que não dá com a madura.** O agente que escreve o gerador com
laço de verificação por render (raiz 1), e o procedural inverso a partir de imagem (raiz 3). Com
tecnologia madura (p5.js, Geometry Nodes à mão) a turma mediria só o próprio ofício, não a
convergência de um agente contra dois tipos de pedido — que é a pergunta.

**O que a turma faz em sala.** Metade escreve pedidos tipo A, metade tipo B, para os mesmos objetos;
trocam; rodam o agente; o júri avalia sem saber qual brief gerou o quê; depois cada um tenta as cinco
alterações. Discussão final: o que foi impossível de escrever como teste?

**O resultado que faria mudar de ideia.** Se os pedidos tipo A (referência visual) convergirem em
número de rodadas e aceite do júri igual ou melhor que os tipo B, **e2 cai** e com ele a tese de que o
ofício se desloca para a especificação — a raiz 1 passaria a ser só aceleração (melhoria
sustentadora). Secundário: se os artefatos-programa não forem pelo menos dez vezes menores que um
splat SOG equivalente ou falharem nas alterações tanto quanto uma malha gerada, **e6** perde a base.

## 11. Fontes

1. https://arxiv.org/abs/2606.01057 — *3DCodeBench* (Gao et al., 31/05/2026): benchmark de 12 VLMs
   escrevendo Blender Python; falhas típicas; 3DCodeArena. Sustenta 3.1, 3.2, e2, e13. Preprint recente,
   autores de laboratório de grande empresa; ainda sem revisão por pares.
2. https://github.com/img2threejs/img2threejs — repositório do img2threejs: pipeline imagem → Three.js
   procedural, portões de qualidade, eficiência em tokens, Apache 2.0, ~16,6 mil estrelas. Sustenta 3.1,
   e5.1, e10, e12, sinal fraco 1. Fonte primária do projeto; alegações de qualidade são do autor.
3. https://www.webgpu.com/showcase/img2threejs-photo-to-procedural-threejs-code/ — vitrine da
   comunidade WebGL/WebGPU: descrição, autor (Hoài Nhớ), versão 1.3, agnóstico de agente. Sustenta 3.1,
   e6. Fonte secundária de comunidade; confiável para existência, não para desempenho.
4. https://www.blender.org/lab/mcp-server/ — servidor MCP oficial do Blender Lab: capacidades, Blender
   5.1+, aviso de execução sem guardas. Sustenta 3.1, 3.2, e1, e1.1, e4. Fonte primária oficial.
5. https://www.anthropic.com/news/claude-for-creative-work — anúncio de 28/04/2026 dos conectores
   criativos. Sustenta 3.1, e1, e3.2, 5.5. Fonte primária de fornecedor; tom promocional.
6. https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/ —
   APEX Script Comfort Package com MCP no Houdini 22, prévia via SideFX Labs. Sustenta 3.1, 3.2, e1,
   e3.1. Analista de indústria gráfica, confiável.
7. https://www.cgchannel.com/2026/07/sidefx-just-released-houdini-22/ — lançamento do Houdini 22
   (16/07/2026), recursos e preços. Sustenta 3.1, e3. Imprensa especializada, confiável.
8. https://dev.epicgames.com/documentation/unreal-engine/city-sample-pcg-and-mcp-server-interaction-in-unreal-engine?lang=en-US —
   documentação da Epic sobre City Sample, PCG e MCP; papel humano de revisão. Sustenta 3.1, e1, e1.1,
   e7. Fonte primária oficial.
9. https://www.upendrasengar.com/blog/six-professional-creative-tools-got-mcp — resumo das seis
   ferramentas com MCP no SIGGRAPH 2026 e ressalvas de maturidade. Sustenta 3.1, 3.2, e3, 7.7. Blog
   individual; útil pela ressalva, confiança média.
10. https://arxiv.org/abs/2512.08951 — *AI Co-Artist* (Yuksel e Sawaf, nov/2025): evolução interativa
    de shaders GLSL com LLM. Sustenta 3.1. Preprint, estudo com usuários sem número no resumo.
11. https://github.com/Husienvora/shader-spec-eval — avaliação de shaders por propriedades
    mensuráveis: 90,8% compilam, 67,5% passam, falhas espaciais. Sustenta 3.1, 3.2, e2, e13, sinal
    fraco 4. Projeto experimental individual; pequena escala (15 tarefas).
12. https://arxiv.org/abs/2508.08228 — *LL3M* (Lu et al., ago/2025): multiagente escrevendo Blender
    Python, BlenderRAG. Sustenta 3.1, e3.1, 5.5. Preprint de grupo acadêmico conhecido em geometria.
13. https://arxiv.org/abs/2312.11556 — *StarVector*: imagem/texto → SVG, 2 milhões de SVGs. Sustenta
    3.1, e10. Preprint revisado várias vezes; modelos públicos.
14. https://swyvl.io/blog/gaussian-splat-formats-ply-spz-ksplat/ — tamanhos típicos de splat por
    formato (PLY ~1.400 MB, SOG ~140 MB para 4M gaussianas). Sustenta 3.4, e6. Blog de empresa do
    setor; números plausíveis, sem metodologia detalhada.
15. https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/ — Project
    Genie (29/01/2026): acesso Ultra nos EUA, limite de 60 s. Sustenta 3.2, e7, wildcard 2. Fonte
    primária de fornecedor.
16. https://www.mintz.com/insights-center/viewpoints/54731/2025-02-07-us-copyright-office-publishes-second-part-report-ai —
    resumo do relatório de 2025 do USCO: prompt sozinho não dá autoria. Sustenta e10.2, e10.2.1, 7.5.
    Escritório de advocacia; resumo fiel do relatório (li o resumo, não o PDF do USCO).
17. https://artificialintelligenceact.eu/article/50/ — texto do art. 50 do AI Act, marcação legível por
    máquina e exceção assistiva. Sustenta e9, e9.1. Site de referência não oficial que reproduz o texto
    legal; confiável para o texto.
18. https://survey.stackoverflow.co/2025/ai — Stack Overflow Developer Survey 2025, seção de IA: 84%,
    50,6% diário, 30,9% agentes, 66% "quase certo". Sustenta 3.4, 3.5, e1, e1.2, 7.7. Pesquisa grande,
    amostra autosselecionada de desenvolvedores.
19. https://caniuse.com/webgpu — suporte a WebGPU (87,35% global). Sustenta 3.1, 4.2, e6. Fonte de
    referência padrão, baseada em StatCounter.
20. https://github.com/mxgmn/WaveFunctionCollapse — WFC, 25,3 mil estrelas, usos em jogos comerciais.
    Sustenta 3.1, 3.5. Fonte primária.
21. https://github.com/3b1b/manim — Manim, 94,1 mil estrelas, MIT. Sustenta 3.1, e7.2, e12, sinal fraco
    2. Fonte primária.
22. https://github.com/abhiemj/manim-mcp-server — servidor MCP que executa Manim e devolve vídeo (644
    estrelas). Sustenta 3.1, e7.2, sinal fraco 2. Projeto individual pequeno; existência, não adoção.
23. https://github.com/processing/p5.js/ — p5.js, 24 mil estrelas, LGPL-2.1. Sustenta 3.1, 3.3.
    Fonte primária.
24. https://arteprog.space/PCD-SP-20/ — Processing Community Day São Paulo 2020 (Arteprog) e Noite de
    Processing. Sustenta 3.1, e6.1.1, nota Brasil. Página do próprio coletivo; datada de 2020.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

```
$ python3 references/verificar.py tendencia-gerar-geradores-design-procedural-e-creative-coding-com-ia.md --links   # 22/09/2026
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 13 (frontmatter diz 13)
efeitos ordem 2: 19 (frontmatter diz 19)
efeitos ordem 3: 19 (frontmatter diz 19)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 1 · media 11 · baixa 1
confiança ordem 2: alta 0 · media 16 · baixa 3
confiança ordem 3: alta 0 · media 0 · baixa 19
links da seção 11: 24/24 respondem (frontmatter diz fontes: 24)
RESULTADO: ok
```

### 12.2 Premissas assumidas que o briefing não cobria

- **Nota sobre o Brasil:** o briefing pedia "global, com uma nota sobre o Brasil". Assumi que a nota
  entra onde o recorte muda o mecanismo (e6.1, e6.1.1, cenário provável), e não como seção separada.
- **Público "quem projeta mídia e interação":** assumi que inclui artista técnico de jogo/VFX, motion
  designer e designer de interação, não o público final.
- **"O que já é comum em produto de massa" descartado:** apliquei a assistentes de código genéricos
  (84% [18]), creative coding clássico e geração procedural em jogos — todos recusados como raiz.
- **Autor sem entrevista:** o viés do autor (seção 7.6) foi inferido do perfil do professor e do tema
  estar na família "Criação e plataforma", não declarado por ele.

### 12.3 Buscas feitas (todas)

1. "LLM procedural 3D generation code Blender benchmark 2026 arXiv" → 3DCodeBench, CodeGen-3D, 3Dify,
   BlenderRAG, P3D-Bench, DI-PCG. Abri 3DCodeBench. CodeGen-3D, 3Dify, P3D-Bench e DI-PCG **não
   abertos** — não citados.
2. "img2threejs procedural three.js code from image" → repositório, showcase, blogs. Abri repositório
   e vitrine WebGPU.
3. "LLM shader generation GLSL benchmark paper" → AI Co-Artist, shader-spec-eval, ShadAR (HLSL em AR,
   só resumo de terceiro — não citado), CUDABench (fora do tema).
4. "Blender MCP server official 2026 AI geometry nodes" → servidor do Blender Lab, MCPs comunitários
   (blender-mcp-pro, mcp-blender com 218 ferramentas — não abertos).
5. "Anthropic Claude connectors creative tools Blender Adobe April 2026" → anúncio da Anthropic
   (aberto), cobertura de imprensa (não aberta).
6. "Houdini 22 AI MCP APEX SideFX 2026" → Jon Peddie (aberto), CG Channel (aberto), Digital Production,
   GfxSpeak, VP Land (não abertos).
7. "Unreal Engine PCG framework LLM City Sample 2026" → página de aprendizado da Epic (**403** ao abrir;
   não citada), documentação da Epic (aberta), post no X (não aberto).
8. "manim-web-mcp" → Glama (manim-web), abhiemj/manim-mcp-server (aberto), outros servidores.
9. "Gaussian splatting file size vs procedural model web streaming comparison MB" → Swyvl (aberto),
   PlayCanvas, World Labs Spark 2.0 (não abertos). **Nenhuma fonte compara splat com programa
   procedural diretamente** — busca que não deu no que se procurava.
10. "US Copyright Office AI generated code prompt authorship 2025 report part 2" → resumo Mintz
    (aberto); PDF do USCO não aberto. **Nada específico sobre código/programas gerados.**
11. "LLM generate SVG code StarVector benchmark vector graphics" → StarVector (aberto), SVGEditBench
    (não aberto).
12. "LL3M large language 3D modelers Blender code agents arXiv" → LL3M (aberto); SceneCraft, ShapeCraft,
    EZBlender (não abertos).
13. "Genie 3 world model real-time interactive DeepMind" → página do Genie 3 (não aberta), blog do
    Project Genie (aberto).
14. "Stack Overflow developer survey 2025 AI tools usage percent" → página de IA da pesquisa (aberta).
15. "EU AI Act Article 50 transparency obligations machine-readable marking" → texto do art. 50 (aberto);
    FAQ da Comissão e nota da CSA (não abertos). A busca mencionou prorrogação até 02/12/2026 para
    sistemas já no mercado (acordo "AI Omnibus" de maio/2026) — **não verificada**, não usada no corpo.
16. "creative coding Brasil comunidade p5.js Processing festival 2025" → p5.js em Libras (Medium, não
    aberto), PCD-SP-20 (aberto), p5.js (aberto). **Não achei evento brasileiro de 2025–2026**; a nota
    Brasil se apoia em fonte de 2020.
17. Aberturas diretas: Remotion license (a página devolveu só o sumário, sem os termos — **não
    citada**); caniuse WebGPU (aberta); WFC e Manim (abertos).

### 12.4 Efeitos cortados e caminhos abandonados

- **e2.3 (removido no §6):** "Agências passam a vender direção de arte como assinatura de agente" —
  falha no teste da causa solta (serve para qualquer IA generativa).
- **e8.2 (removido no §6):** "Shaders maliciosos provocam incidente de segurança de grande porte" —
  sem caso para ancorar; enredo.
- **e10.3 (removido no §6):** "Plataformas de modelos 3D proíbem reconstrução automática nos termos de
  uso" — é e10.1 mais adiante.
- **Descartado na derivação:** "estúdios adotam PCG com agente em todos os projetos" — e1 amadurecendo
  (regra de parada).
- **Descartado:** "surge a profissão de engenheiro de prompt procedural" — efeito proibido (profissão
  nova genérica); a versão com ator e mecanismo virou e1.1.1 (revisor de grafo).
- **Descartado:** "o ensino de design vira ensino de sistemas" (pergunta do enunciado) na forma genérica
  — reescrito como e1.2.1 com o exercício concreto trocado.
- **Descartado como raiz:** "world models geram mundos jogáveis" — é tema 12/10 (pixel e captura); entra
  aqui só como concorrente (e7, wildcard 2).
- **Candidato a raiz abandonado:** "a regra vira o lugar da prova de autoria humana" — tratado como
  efeito (e10.2, e2.2.1, e12.1.1) porque não tem pré-condição técnica própria; deriva das raízes 1 e 3.
- **Wildcard negativo registrado no §6 (7.5):** "código nunca aprende orgânico" — se a falha em forma
  orgânica for de representação e não de capacidade, e13.1 fica permanente e a raiz 2 vira nicho de
  objetos rígidos, UI e diagramas. Sinal precoce: três ciclos seguidos do 3DCodeBench sem melhora nas
  categorias orgânicas (plantas, criaturas marinhas, coral).

### 12.5 Dados brutos das fontes, como vieram

- 3DCodeBench [1]: 212 categorias; 12 VLMs; métricas de executabilidade, similaridade de imagem
  (SigLIP-2/DINOv3), distância 3D (Chamfer/Uni3D), LLM-juiz; o resumo não traz a taxa por modelo.
- img2threejs [2]: "Scripts enforce, the model judges"; "Zero dependencies"; "Pass-gated generation";
  "One image per review"; v2.0 "The Plugin Update"; Apache 2.0; 16,6 mil estrelas.
- Blender Lab MCP [4]: v1.0.3; Blender 5.1+; três componentes instalados à mão; "executará código
  gerado por LLM no Blender sem nenhuma proteção".
- Houdini 22 [7]: splats gaussianos nativos (treino, animação, relighting em Karma); KineFX; Copernicus;
  FX US$ 4.495 fixa / US$ 6.995 flutuante; Core US$ 1.995 / 2.995; Apprentice gratuita.
- shader-spec-eval [11]: 15 tarefas, 600 gerações, temperatura 0,7; 90,8% compilação; 67,5% conformidade
  total; formas simples ~98%; espelho 3%; anéis 25%; círculos deslocados ~0%; falha mais comum "bordas
  suaves" (128 casos).
- Splats [14]: PLY 1.400 MB; PLY comprimido 320 MB; SPZ 160 MB; SOG 140 MB; KSplat 260/180 MB (4M
  gaussianas, interior).
- Stack Overflow 2025 [18]: 84% usam/pretendem; 50,6% diário (profissionais); 3,1% confiam muito; 45,7%
  desconfiam; sentimento positivo 60%; agentes 30,9% mensal, 37,9% sem planos; 69,7% dos usuários de
  agente relatam ganho; 66% "quase certo"; 45,2% depurar código de IA toma tempo.
- WebGPU [19]: 87,35%; Chrome/Edge 113+; Safari iOS 26+; Firefox desligado por padrão; Safari desktop
  parcial; W3C Working Draft.
