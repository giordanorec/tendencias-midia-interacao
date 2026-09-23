---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-22
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 11
efeitos_ordem_2: 19
efeitos_ordem_3: 19
tecnologias_citadas: [3DCodeBench, 3DCodeArena, P3D-Bench, Mage, GameGen-Verifier, Proc3D, Procedural Compact Graph, LL3M, BlenderRAG, VLMaterial, StarVector, AI Co-Artist, img2threejs, Three.js, TSL, WGSL, GLSL, WebGPU, WebGL, Blender, Blender Lab MCP, BlenderMCP, Geometry Nodes, Houdini 22, APEX Script, SideFX Labs, Unreal Engine 5.8, PCG Framework, Unreal MCP, City Sample, Shape Grammar, Model Context Protocol, Adobe Express Developer MCP Server, Affinity, Boris FX Silhouette, Foundry Griptape, Cavalry, Canva, Rive, Luau, Graphite, Rust, WebAssembly, Manim, ManimCommunity, p5.js, Processing, Shadertoy, Remotion, WaveFunctionCollapse, Gaussian Splatting, SOG, SPZ, PLY, Genie 3, OpenSCAD, CadQuery, GPT-5.5]
fontes: 36
confianca: media
experimento: "Regra ou pixel: o teste da edição — o mesmo objeto entregue como gerador escrito por agente e como malha/vídeo gerados, submetido a cinco pedidos de alteração de cliente e a um pedido de prova de autoria"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Design procedural é maduro — Houdini, Geometry Nodes, o PCG do Unreal, Substance, Shadertoy — e
este mapa o recusa como raiz. O que é novo é quem escreve a regra: em 2026 a IA passou a produzir
o programa que gera o artefato, e a indústria abriu as ferramentas para isso (servidores MCP em
Blender, Unreal, Houdini 22, Adobe, Silhouette e Griptape, anunciados em torno do SIGGRAPH 2026;
a Epic refez a City Sample em PCG com ajuda de LLM). Três raízes para 2036: **(1)** o entregável
criativo passa a ser um gerador produzido por especificação; **(2)** a mídia volta a trafegar como
programa executado na GPU do cliente; **(3)** a regra vira o lugar onde a autoria humana se prova,
porque o prompt não prova e o pixel não protege. O achado mais forte é uma convergência: as três
raízes terminam na **biblioteca de regras curadas** como camada que concentra valor e poder. A
principal retroação é a medição: o erro do agente passou de "não roda" para "roda e está
fisicamente errado", e isso segura a montagem articulada na mão humana por mais tempo. Confiança
geral média; a terceira ordem é toda baixa.

## 2. O tema

**O que é.** Em vez de produzir o artefato (a malha, a textura, o quadro de vídeo), produzir a
**regra** que o produz — um script de Blender, um grafo PCG, um shader, uma máquina de estados,
uma cena de Manim. O tema desta rodada não é o procedural em si, e sim **a IA como autora do
gerador**, e a disputa entre "gerar pixel" e "gerar programa".

**Onde encosta em mídia e interação.** Em quatro lugares: no ofício (modelador, artista técnico,
motion designer, designer de interação); na entrega (o que trafega até o dispositivo); no jogo
(conteúdo reproduzível por semente em vez de conteúdo desenhado ou alucinado quadro a quadro); e na
autoria (o que é registrável e de quem).

**Por que um mapa de futuro, e não um estado da arte.** Porque as peças já existem separadas —
modelos de código, ferramentas procedurais maduras, WebGPU nos quatro navegadores, jurisprudência
sobre autoria de saída de IA — e o interesse está no que acontece quando elas se encaixam ao longo
de dez anos. O horizonte de 2036 permite olhar para a segunda troca de geração de ferramenta, não
só para a primeira.

**Premissas assumidas (briefing não interativo).** Horizonte 2036; público: quem projeta mídia e
interação; recorte global com nota sobre o Brasil; descartado o que já é comum em produto de massa;
nenhuma raiz suspeita; viés neutro, com um cenário de cada lado; excluídas as ideias que servem para
qualquer tema. Falseadores declarados pelo autor: evidência de que a adoção já passou da maioria
inicial (Rogers) ou de que a tecnologia não rompe nada — só melhora o que existe. Os dois viraram
critério na seção 7. A fronteira com os vizinhos foi respeitada: captura 3D (tema 10) e vídeo e
imagem gerados (tema 12) só aparecem como concorrentes do programa, nunca como objeto.

**Nota sobre o Brasil.** A adoção de IA no ensino de projeto no Brasil é descrita como
"fragmentada, concentrada em iniciativas isoladas", dependente do interesse individual do docente
(Carrasco, Bremer e Silva, 2026, sobre arquitetura — fonte 34). E há uma tradição crítica
organizada no design gráfico brasileiro que lê a "democratização criativa" como encobrimento de
precarização (Beccari, Kussler e Oliveira, UFPR/UERGS — fonte 33). As duas coisas importam para
este mapa: o gerar-geradores exige formação em sistemas, que é justamente o que chega de modo
desigual; e a crítica já tem vocabulário pronto para o que a seção 5 chama de "quem perde".

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026: 30 buscas e aberturas, 36 fontes abertas. Nada abaixo
vem de memória, exceto onde está marcado.

### 3.1 O que já existe e funciona

- **Agentes que escrevem Blender Python.** LL3M (UChicago, 11/08/2025) coordena agentes que
  "planejam, recuperam, escrevem, depuram e refinam scripts de Blender", com saída em código legível
  e editável (fonte 6).
- **Imagem → programa.** VLMaterial converte imagem em material procedural escrito como programa
  Python (ICLR 2025 spotlight, fonte 7); StarVector gera SVG como código a partir de imagem (4,6 mil
  estrelas, fonte 17 — contagem pela API do GitHub); img2threejs reconstrói o objeto de uma foto
  como fábrica Three.js "só código", com oito passes (blockout → estrutura → forma → material →
  superfície → luz → interação → otimização) e o princípio "scripts impõem, o modelo julga" (fonte
  9). O repositório foi criado em 15/07/2026 e tinha 16.572 estrelas em 22/09/2026.
- **Grafo editável.** Proc3D (Adobe, 21/01/2026) propõe o Procedural Compact Graph, que expõe
  parâmetros para controle manual e por linguagem natural, com "mais de 400× de aceleração" sobre
  regenerar a cada edição e +28% em ULIP (fonte 5).
- **As ferramentas abriram a porta.** Em torno do SIGGRAPH 2026, a NVIDIA listou servidores MCP ou
  integrações de agente em Adobe, Affinity (Canva), Blender (via Blender Lab), Boris FX Silhouette,
  Foundry Griptape, Houdini 22 e Unreal Engine (fonte 13). O Houdini 22 (keynote de 22–23/06/2026)
  trouxe o APEX Script Comfort Package: extensão de VS Code, painel Python, servidor MCP sobre
  biblioteca curada, LLM local possível e **validador que confere o código antes de rodar**; a saída
  é script puro, sem dependência do modelo depois de gerado (fontes 11, 12).
- **A Epic já usou.** A documentação da City Sample PCG do Unreal 5.8 diz que a cidade procedural
  foi feita "com compatibilidade total com o servidor MCP do Unreal", que o MCP foi usado "para
  auxiliar no desenvolvimento e na criação da cidade", guarda **prompts descritivos nos metadados do
  grafo** e inclui uma *skill* para guiar um LLM na construção de uma gramática de forma (fonte 16).
- **Motion por regra ficou gratuito.** A Canva comprou o Cavalry e liberou a versão 2.7 de graça
  para artista individual, com uso comercial, em 17/04/2026 (antes: £192/ano); estúdio paga Canva
  Enterprise (fonte 22). O Rive tem máquinas de estado como "ponte entre design e desenvolvimento",
  runtimes em web, Unity, Unreal, Apple, Android, React Native, Flutter, Framer, Webflow e Wix
  Studio, e agora **scripting em Luau e um agente de IA**, ambos em acesso antecipado (fonte 23).
- **O runtime web está pronto.** WebGPU habilitado no Chrome 113+ (Mac, Windows, ChromeOS), Firefox
  141+ (Windows) e 147+ (macOS), Safari 26+ (macOS, iOS/iPadOS, visionOS) (fonte 25). O TSL do
  Three.js é "uma abstração de shader baseada em nós, escrita em JavaScript" que compila para WGSL
  ou GLSL (fonte 24).

### 3.2 O que existe e ainda não funciona

- **Executa, mas está errado.** O 3DCodeBench (31/05/2026; 12 VLMs, 212 categorias) conclui que as
  falhas vêm "principalmente de incompatibilidade de API" e que renders bem-sucedidos ainda têm
  "componentes geométricos desconectados ou flutuantes"; pede "dado de código procedural de
  qualidade" e "ambiente de execução com feedback de alta fidelidade" (fonte 1). O P3D-Bench
  (09/06/2026; 11 modelos gerais e 3 de domínio; saídas em JSON, OpenSCAD, CadQuery e Three.js)
  mede no melhor modelo (GPT-5.5) alinhamento semântico ~0,80 e geométrico ~0,35, e F1 de
  correspondência de partes ~0,50 em montagens: "montagens são o cenário mais difícil" (fonte 2).
  O Mage (maio/2026) mostra que taxa de compilação não diz nada sobre jogabilidade de cena gerada
  (fonte 3); o GameGen-Verifier (11/05/2026) propõe verificar jogos gerados injetando estado em
  tempo de execução (fonte 4).
- **Dentro do editor, ainda experimental.** O MCP do Unreal 5.8 é rotulado experimental pela Epic. No
  teste da Puget Systems (09/07/2026), o *greybox* saiu em ~5 minutos, mas ao pedir uma cidade PCG
  "a IA criou malhas estáticas em vez de grafos procedurais" e só reconheceu a limitação depois; houve
  respostas de 5 a 15+ minutos e 15% da cota semanal gasta em testes mínimos (fonte 15). Um autor que
  acompanhou os seis anúncios do SIGGRAPH escreve que "ter um servidor MCP não significa que o agente
  fará trabalho útil" e que parte foi "demonstrada" sem release estável (fonte 14).
- **A economia em tokens ainda é estimativa.** img2threejs declara ~80–180 mil tokens por objeto de
  superfície dura e ~150–350 mil por personagem, dominados pelos ciclos de revisão de render — e o
  próprio mantenedor diz que são "estimativas de engenharia, não benchmark medido" (fontes 9, 10).
- **O concorrente em pixel.** O Genie 3 (DeepMind, 05/08/2025) gera mundo navegável a 24 fps em 720p,
  com consistência de "alguns minutos" e prévia restrita de pesquisa (fonte 27).

### 3.3 Quem constrói

1. **Fabricantes de ferramenta procedural**: SideFX (Houdini 22, APEX), Epic (PCG + MCP), Adobe
   (Substance, Proc3D, MCP do Express), Blender Foundation (Blender Lab MCP), Canva (Cavalry,
   Affinity), Rive.
2. **Laboratórios acadêmicos**: UChicago 3DL (LL3M), os autores do 3DCodeBench (com Google entre os
   coautores), P3D-Bench, o grupo de VLMaterial.
3. **Comunidade aberta**: BlenderMCP (29.193 estrelas), img2threejs (16.572), Graphite (27.329,
   "caixa de ferramentas procedural para conteúdo 2D", Rust + WebAssembly, alfa), Manim (94.146 no
   repositório 3b1b; 40.975 no ManimCommunity), Remotion (60.042, vídeo como código React),
   WaveFunctionCollapse (25.341), p5.js (24.024) — contagens pela API do GitHub em 22/09/2026
   (fontes 17–20, 35, 36).
4. **Plataforma que empurra**: NVIDIA, que organizou a rodada de MCP no SIGGRAPH (fonte 13).
5. **Comunidades que freiam**: o p5.js proíbe PR inteiro ou bloco grande gerado por IA e exige
   declarar a ferramenta usada (fonte 21).

### 3.4 Números de adoção

- 36% dos profissionais de jogo usam IA generativa no trabalho; 52% veem impacto negativo; 64%
  entre artistas visuais e técnicos; 28% foram demitidos nos últimos dois anos (GDC 2026, >2.300
  respondentes, fonte 32).
- Em julho de 2025, ~7.818 títulos da Steam (~7% do catálogo) declaravam uso de IA generativa,
  contra ~1,1% um ano antes; quase 1 em 5 lançamentos de 2025 (fonte 29). É declaração voluntária
  e não separa "asset gerado" de "gerador escrito por IA".
- Estrelas no GitHub (acima) são o único número de adoção de IA-autora-de-gerador que encontrei.
  **Sem número encontrado** para: estúdios usando MCP em produção, assets entregues como código, ou
  receita de qualquer produto do tipo.

**Posição na difusão (escala do §2):** procedural clássico = maioria no seu nicho profissional
(maduro, recusado); IA escrevendo o gerador = entre **demo pública** e **produto de nicho** —
ferramentas oficiais em prévia, uso real na Epic, comunidade aberta grande, nenhum número de uso em
produção. Nada aqui passou da maioria inicial; o primeiro falseador do autor não se verificou.

## 4. As disrupções-raiz

### Candidatos recusados

- **Geração procedural em jogos, shaders, Processing/p5.** Recusado como raiz: maioria no seu campo
  há anos; dá para fazer com o que é comum. Tratado como contexto (3.1).
- **Copilot de código genérico escrevendo shader.** Recusado como raiz: é melhoria sustentadora de
  uma ferramenta de programação já difundida — faz o mesmo mais rápido. Entra como meio.
- **"Modelos de mundo substituem o motor de jogo."** Recusado aqui: é objeto do tema 12 (mídia gerada)
  e entra só como concorrente (e6.1, wildcard W3).
- **Geração de conteúdo como código no momento em que o jogador chega.** Recusado como raiz porque
  a lista do que falta tem item hoje impossível a custo de produto (latência de minutos, verificação
  sem humano — fontes 15, 28). Vai como wildcard W1.

### Raiz 1 — A IA escreve o gerador: o entregável criativo passa a ser um programa parametrizado produzido por especificação

1. **O que rompe.** A suposição de que produzir forma é trabalho manual de quem modela, anima ou
   ilumina, e de que o artista técnico que escreve regras é recurso raro. O pedido deixa de ser
   "faça esta cadeira" e passa a ser "escreva a regra que faz cadeiras deste tipo".
2. **Por que agora.** Modelos de código que executam em Blender e Three.js na maioria das tentativas
   (fonte 1); padrão de conexão ferramenta–agente (MCP) adotado por seis a sete fabricantes em um
   verão (fontes 13, 14); e a primeira produção real de uma fabricante (City Sample, fonte 16). Há
   cinco anos não havia nem o modelo nem a porta.
3. **Onde está na difusão.** Demo pública → produto de nicho.
4. **O que falta.** Sair de "executa" para "está fisicamente certo" (fontes 1, 2); dado procedural de
   qualidade para treino (fonte 1); ambientes de execução com feedback; latência compatível com
   iteração (fonte 15); passar de prévia (SideFX Labs, Unreal experimental) para release estável.

### Raiz 2 — A mídia volta a trafegar como regra: o que chega ao dispositivo é o gerador, executado na GPU local

1. **O que rompe.** A economia de asset como arquivo pesado (malha, splat, vídeo) e a cadeia
   armazenamento–CDN–download. O cliente recebe quilobytes de código e parâmetros, não megabytes de
   amostra. É o demoscene como formato comercial, com a IA pagando o custo de escrever.
2. **Por que agora.** WebGPU nos quatro navegadores principais (fonte 25), TSL compilando o mesmo
   shader para WebGPU e WebGL (fonte 24), e a IA reduzindo o custo de escrever a fábrica a uma conta
   de tokens (fontes 9, 10). Sem a terceira peça, o código leve sempre foi caro de produzir.
3. **Onde está na difusão.** Demo pública (vitrines de img2threejs, Graphite em alfa).
4. **O que falta.** Medição real de bytes e de custo por objeto; formatos de gerador que trafeguem
   fora do runtime do fabricante; política das lojas de app para código executável baixado
   (**premissa não verificada nesta rodada** — ver seção 7).

### Raiz 3 — A regra vira o lugar onde a autoria humana se prova: o prompt não prova, o pixel não protege

1. **O que rompe.** A suposição de que "escrever um bom prompt" confere autoria, e a de que o valor
   de uma peça visual está na imagem final. O AG München (13/02/2026, 142 C 9786/25) negou proteção a
   logos gerados com prompt de 1.700 caracteres e deu o critério: há autoria quando o humano exerce
   influência "concreto-formativa", definindo o arcabouço que restringe as escolhas da máquina — o
   vitral de Gerhard Richter, com 72 tons escolhidos e formas corrigidas à mão, é o paradigma (fonte
   30). A Suprema Corte dos EUA recusou o caso *Thaler v. Perlmutter* em 02/03/2026, mantendo a
   exigência de autoria humana (fonte 31).
2. **Por que agora.** As duas decisões são de 2026. E o gerador é, pela primeira vez, uma forma de
   produção por IA em que a contribuição humana fica **registrada em texto** (parâmetros, restrições,
   histórico de edição) — exatamente o que o critério de Munique pede para provar.
3. **Onde está na difusão.** Laboratório — é jurisprudência de primeira instância e recusa de
   certiorari, sem caso sobre gerador procedural. Toda a cadeia desta raiz sai com confiança baixa ou
   média, nunca alta.
4. **O que falta.** Um caso que discuta regra, não imagem; ferramentas que registrem quem escolheu
   cada parâmetro; convergência entre UE e EUA; e a pergunta aberta sobre se reconstruir a regra a
   partir de amostras é copiar expressão ou ideia.

### 4.4 O teste da causa solta entre as raízes

- Sem a Raiz 1, a Raiz 2 continua possível (o demoscene existe há décadas), mas volta a ser nicho,
  porque o código leve é caro de escrever. Parte do mapa sobrevive: e7 e e8.
- Sem a Raiz 1, a Raiz 3 continua valendo para toda mídia gerada, mas perde o argumento de que o
  gerador é o lugar privilegiado da prova. Sobrevivem e9 e e11.
- Conclusão: não é uma raiz só disfarçada em três, mas a Raiz 1 é a mais estrutural, e isso está
  declarado na seção 7.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A IA escreve o gerador — o entregável criativo passa a ser um programa parametrizado produzido por especificação
    efeitos:
      - id: e1
        ordem: 1
        efeito: Estúdios de jogo e VFX passam a pedir ao agente o grafo procedural (PCG, Geometry Nodes, APEX) em vez de pedir o asset ao modelador
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O artista técnico deixa de escrever cada regra e passa a manter as bibliotecas curadas, validadores e skills que o agente consulta
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Bibliotecas de regras curadas viram ativo licenciável, e quem mantém a biblioteca de referência define o estilo que os agentes produzem por padrão
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Vagas de modelagem de props e cenário de preenchimento encolhem antes das demais, porque são as categorias que os benchmarks já medem
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O portfólio de entrada em 3D passa a exigir um gerador parametrizável em vez de um modelo, estreitando a porta para quem vem do desenho sem código
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Motion designers e designers de interface especificam comportamento como regra (máquina de estados, rig procedural) e o agente escreve o script
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A Canva leva motion procedural ao usuário não especialista como template-gerador que se adapta a marca e formato
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Marketplaces de template reprecificam por regra e não por peça, e o template estático perde valor de revenda
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O handoff de design para engenharia deixa de ser tela desenhada e passa a ser um único artefato executável (arquivo de estados com script)
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Bancas de portfólio de design de interação passam a pedir o arquivo executável e o repositório, não o protótipo de telas
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Comunidades abertas de creative coding restringem contribuição gerada por IA e exigem declarar a ferramenta usada
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Separa-se um creative coding declarado como escrito à mão, valorizado por processo, de um creative coding de produção gerado por agente
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Mostras de arte generativa passam a aceitar o histórico de commits como prova de processo, e o histórico de edição vira parte da obra
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Mantenedores de bibliotecas gráficas abertas ficam sobrecarregados por PRs e issues gerados, e as APIs de que os agentes dependem evoluem mais devagar
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Fabricantes de modelo passam a financiar a manutenção de bibliotecas gráficas abertas para estabilizar a API que seus agentes erram
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O erro dominante do gerador escrito por IA passa de não executar para executar e estar fisicamente errado, e a avaliação migra para plausibilidade
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O ambiente de execução com render e validador determinístico vira o produto central, e quem o fornece captura o fluxo de criação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O custo dominante passa do token para a GPU de render no laço de revisão, e estúdios pequenos voltam a depender de render em nuvem
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Montagens multipeça e objetos articulados continuam feitos por humanos por mais tempo, e a fronteira humano–máquina no 3D passa pela articulação
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Rigging e montagem articulada viram a última especialidade de 3D com prêmio salarial, até que a verificação física chegue a elas
                sinal: fraco
                prazo: 2035
                confianca: baixa
  - disrupcao: A mídia volta a trafegar como regra — o que chega ao dispositivo é o gerador, executado na GPU local
    efeitos:
      - id: e5
        ordem: 1
        efeito: Peças 3D de produto e marca na web passam a ser entregues como fábrica Three.js/TSL de quilobytes em vez de GLB ou splat de megabytes
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Agências de web 3D orçam por tokens por objeto em vez de horas de modelagem
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O preço da peça 3D web cai para perto do custo de inferência, e marketplaces de modelos genéricos de catálogo perdem para o pedido sob medida
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A disputa entre pixel e programa se resolve por tipo de objeto — captura fica com o real específico, programa fica com o genérico parametrizável
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Óculos com banda e bateria restritas adotam o programa como formato padrão de objeto sintético, e a estética procedural volta a marcar o XR
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Jogos independentes passam a enviar geradores de mundo escritos por agente e executados de forma determinística, em vez de níveis desenhados
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Jogo competitivo e speedrun exigem semente pública e determinismo, e o gerador em código vence o modelo de mundo em pixel onde a regra precisa ser justa
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Modelos de mundo em pixel ficam com experiências contemplativas e treino de agentes, e o jogo com regra fica com o código — uma bifurcação de gênero por tecnologia
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A Steam passa a separar na declaração de IA o gerador escrito por IA do asset gerado por IA
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Jogadores contrários à IA generativa aceitam melhor o conteúdo por regra declarado que o asset em pixel, e o rótulo vira argumento de venda
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: SideFX, Epic e Adobe mantêm o gerador preso ao formato de runtime deles (HDA, grafo PCG, sbsar), e o programa só trafega dentro das suas ferramentas
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Geradores em formato aberto executados no navegador (TSL/WGSL, Graphite) crescem como alternativa ao runtime proprietário
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O navegador se firma como intérprete neutro de mídia gerativa, e parte do que hoje sai como vídeo renderizado passa a sair como página que executa a regra
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A pegada da mídia 3D e animada se desloca de bytes transmitidos e armazenados para computação — inferência na criação e GPU do cliente na execução
        sinal: fraco
        prazo: 2031
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Parte do tráfego de mídia sintética sai das CDNs e plataformas de vídeo para páginas que computam a peça no dispositivo
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O custo energético passa para a bateria do usuário, e sistemas operacionais móveis limitam a GPU de páginas gerativas
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: A regra vira o lugar onde a autoria humana se prova — o prompt não prova e o pixel não protege
    efeitos:
      - id: e9
        ordem: 1
        efeito: Criadores e estúdios passam a documentar a regra (parâmetros escolhidos, restrições, histórico) como prova de autoria humana
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Ferramentas de criação registram quais parâmetros do gerador foram escolhidos por humano e quais pelo agente, como recurso de produto
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A obra registrável deixa de ser a imagem e passa a ser o gerador com o registro de escolhas
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Contratos de encomenda criativa passam a exigir que parâmetros e restrições-chave do gerador sejam escritos por humano, para manter o entregável protegível
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Licenças de sistema visual com regra humana e execução de máquina passam a ter preço acima das de peça gerada
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: Marcas passam a encomendar identidade visual como sistema gerativo com regras escolhidas por humano, em vez de logotipo gerado
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Escritórios de branding entregam um gerador de marca em código com manual de parâmetros, e o manual de marca vira software
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Sistemas de marca executáveis viram alvo de clonagem por reconstrução da regra a partir das amostras, e a proteção migra do direito autoral para segredo de negócio
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Qualquer amostra visual pode ser convertida em programa (imagem para material, SVG ou fábrica 3D), e some a distância entre copiar a aparência e copiar o método
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Bibliotecas comerciais de materiais e texturas procedurais perdem exclusividade, porque o grafo pode ser reconstruído a partir da imagem
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Fornecedores fecham o grafo e entregam só o runtime compilado, invertendo a promessa de transparência do procedural
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: Tribunais alemães e o Copyright Office dos EUA passam a receber casos sobre se reconstruir a regra a partir de amostras copia expressão ou ideia
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Se a regra for tratada como ideia, o estilo gerativo fica livre para clonar e o valor migra para quem opera o gerador e a comunidade em volta dele
                sinal: fraco
                prazo: 2038
                confianca: baixa
```

### 5.1 Os mecanismos, efeito a efeito

**Raiz 1.**

- **e1** — porque o gerador escrito pelo agente sai editável e reaproveitável, e as ferramentas agora
  aceitam o agente dentro da cena (fontes 11, 13, 16), o pedido desloca-se do objeto para a regra. O
  sinal é forte por três artefatos: City Sample PCG feita com LLM (16), APEX MCP no Houdini 22 (11,
  12), Blender Lab MCP (13). *Classe de referência:* o próprio MCP nas ferramentas criativas — do
  BlenderMCP comunitário (repositório criado em 07/03/2025) a servidores oficiais em seis a sete
  fabricantes em julho de 2026, ~16 meses. De "oficial em prévia" a uso rotineiro em estúdio, usei o
  dobro disso: 2029.
- **e1.1** — porque o agente só acerta com biblioteca curada e validador (a SideFX construiu o seu
  sobre "biblioteca curada de sintaxe e trechos", a Epic embutiu uma *skill* de gramática de forma), o
  trabalho de quem sabe a regra passa de escrevê-la a manter o que o agente consulta.
- **e1.1.1** — porque o agente reproduz o que está na biblioteca que consulta, a biblioteca de
  referência vira definidora de estilo e objeto de licença. É troca de ator (do TD para o dono da
  biblioteca) e de mecanismo (de trabalho para propriedade).
- **e1.2** — porque os benchmarks e os primeiros produtos cobrem exatamente cadeiras, plantas,
  ferragens e prédios (212 categorias no 3DCodeBench, cidade da City Sample), essas são as primeiras
  tarefas substituíveis. O sinal fica em médio: 64% dos artistas visuais e técnicos veem a IA
  generativa como negativa (fonte 32), mas é percepção, não medida de vaga.
- **e1.2.1** — porque o recrutador passa a precisar de quem escreva regra, o portfólio muda de
  gênero; quem perde é quem entrou no 3D pelo desenho.
- **e2** — porque Rive pôs Luau e um agente de IA dentro do editor de máquina de estados e a Canva
  tornou o Cavalry gratuito (fontes 22, 23), a especificação de comportamento por regra ficou ao
  alcance de quem não programa. *Classe de referência:* Cavalry gratuito (04/2026) — preço zero
  acelera a base de usuários, mas agente em acesso antecipado leva de dois a três anos para release
  estável; 2029.
- **e2.1** — porque a Canva é dona do Cavalry e tem o maior canal de template para não especialista,
  a regra chega ao usuário leigo embalada como template que se recompõe.
- **e2.1.1** — porque um template-gerador serve a mil formatos, a peça estática perde valor unitário.
- **e2.2** — porque a máquina de estados do Rive já é "o contrato" entre design e engenharia, e o
  agente escreve o script que faltava, o artefato de handoff passa a ser o próprio executável.
- **e2.2.1** — porque o que se entrega no trabalho passa a ser o executável, é isso que a banca de
  portfólio passa a cobrar. Nomeio a banca de portfólio em vez de "os cursos", para não cair no
  genérico proibido.
- **e3** (retroação) — porque os mantenedores respondem por código que o modelo não pode assumir, o
  p5.js já proíbe PR gerado e exige declaração (fonte 21). Confiança alta porque o caso existe e o
  mecanismo é direto; prazo 2027 porque a norma já vigora e a pergunta é se se espalha.
- **e3.1** — porque a declaração obriga a rotular, cria-se a distinção entre as duas práticas.
- **e3.1.1** — porque rótulo sem prova não se sustenta, o histórico de commits vira evidência de
  processo; troca de ator: da comunidade de código para a curadoria de arte.
- **e3.2** — porque a IA barateia abrir PR e issue e não barateia revisar, o gargalo vai para o
  mantenedor; e como o 3DCodeBench aponta incompatibilidade de API como falha principal, API lenta
  para evoluir é problema dos próprios agentes.
- **e3.2.1** — porque o fabricante de modelo precisa de API estável e documentada para seu agente
  acertar, ele passa a pagar a manutenção.
- **e4** (retroação) — porque três benchmarks independentes de 2026 medem que o código executa e o
  objeto está errado (partes flutuantes, alinhamento geométrico ~0,35, montagens F1 ~0,50; fontes 1,
  2, 3), a régua muda. Sinal forte (três artefatos), confiança alta.
- **e4.1** — porque "scripts impõem, o modelo julga" (img2threejs) e o validador da SideFX mostram
  que a qualidade vem do ambiente e não do modelo, o ambiente é onde está o valor.
- **e4.1.1** — porque o custo estimado do img2threejs é dominado pelos ciclos de revisão de render
  (fonte 10), a conta migra do token para o render.
- **e4.2** — porque montagem é o pior resultado medido (fonte 2), é o último trabalho a sair da mão
  humana.
- **e4.2.1** — porque a articulação é a fronteira, ela carrega o prêmio. Contradição registrada em
  5.2: foi justamente o rigging que a SideFX escolheu como primeiro alvo.

**Quem bloqueia na Raiz 1:** os mantenedores das comunidades abertas (e3) e, de outro modo, as
empresas que controlam o ambiente de execução (e4.1), que podem capturar em vez de bloquear.

**Raiz 2.**

- **e5** — porque WebGPU está nos quatro navegadores e o TSL compila para os dois backends (fontes 24,
  25), a fábrica em código roda em qualquer lugar; e porque a IA escreve a fábrica, o custo de
  produção deixa de ser o impeditivo. *Classe de referência:* WebGPU — do Chrome 113 ao Safari 26
  foram cerca de dois anos e meio (a data do Chrome 113 é de memória, ver seção 8). De runtime
  disponível a formato comum de entrega em peças de marca, estimei outros três anos: 2029.
- **e5.1** — porque o custo passa a ser a conta de inferência (80–180 mil tokens estimados por objeto
  — fonte 10), o orçamento acompanha a unidade de custo.
- **e5.1.1** — porque o pedido sob medida custa perto do genérico, o catálogo genérico perde. Quem
  perde: vendedores de modelos de estoque.
- **e5.2** — porque o splat é dado de algo real (e mesmo comprimido fica de 10 a 20 vezes menor que o
  PLY, ainda na casa dos megabytes para cenas reais — fonte 26) e o programa é regra de algo genérico,
  cada um fica com o tipo de objeto em que é imbatível. Não é substituição, é divisão.
- **e5.2.1** — porque dispositivo de rosto tem banda e bateria como restrição dura, o formato mais leve
  vence para objetos sintéticos; e porque a regra deixa marca, a estética procedural fica visível.
- **e6** — porque o gerador escrito pelo agente roda sem IA durante o jogo, sem latência e sem custo
  por sessão (fonte 28), é a forma "entregável" de IA procedural. *Classe de referência:* a
  declaração de IA na Steam foi de ~1,1% a ~7% do catálogo em um ano (fonte 29) — a adoção de IA em
  jogo independente é rápida; mantive 2029 porque "gerador escrito por IA" é uma fração não medida
  disso.
- **e6.1** — porque competição e speedrun precisam de reprodutibilidade, e o modelo de mundo em pixel
  mantém consistência por "alguns minutos" (fonte 27), o código ganha onde a regra tem de ser justa.
- **e6.1.1** — troca de mecanismo: de reprodutibilidade para gênero; quem perde é o jogo competitivo
  feito em modelo de mundo.
- **e6.2** — porque a declaração atual da Steam não distingue o tipo de uso (fonte 29) e 52% da
  indústria vê a IA generativa como negativa (fonte 32), cresce a pressão por rótulo mais fino.
- **e6.2.1** — porque o gerador em código não usa arte de terceiros em tempo de jogo, o rótulo "por
  regra" pode desarmar parte da rejeição. Confiança baixa: o público pode não distinguir.
- **e7** (quem bloqueia) — porque o valor de SideFX, Epic e Adobe está no runtime (é nele que HDA,
  grafo PCG e sbsar executam), elas têm incentivo para deixar o agente escrever o gerador, mas dentro
  do seu formato. É a retroação com dono desta raiz.
- **e7.1** — porque o navegador executa TSL/WGSL e o Graphite roda em WebAssembly (fontes 18, 24), há
  um runtime que nenhum fabricante de ferramenta controla.
- **e7.1.1** — porque a página que computa é mais leve e editável que o vídeo, parte da mídia
  animada sai como regra executável. Fronteira com o tema 15 (navegador como console) — registrada.
- **e8** (ecológico) — porque a peça passa a ser computada, o custo migra do armazenamento e da
  transmissão para a inferência de criação e para a GPU do cliente. Sinal fraco: não encontrei
  nenhuma medição.
- **e8.1** e **e8.1.1** — porque o custo migra, migram também o tráfego e a fatura de energia; o
  sistema operacional, que protege a bateria, vira o novo árbitro. Quem perde: o usuário com
  aparelho barato.

**Raiz 3.**

- **e9** — porque Munique exige influência concreto-formativa e os EUA mantêm a exigência de autoria
  humana (fontes 30, 31), a prova do que o humano decidiu vira necessidade, e o gerador é onde essa
  prova já existe em texto. *Classe de referência:* a trajetória jurídica — relatório do Copyright
  Office (2025), recusa da Suprema Corte (2026), primeira instância alemã (2026): leva de dois a quatro
  anos por degrau. Daí 2029 para a prática documental, que não depende de decisão nova.
- **e9.1** — porque a prova precisa ser separável, a ferramenta registra quem escolheu cada
  parâmetro. A Epic já guarda prompts nos metadados do grafo (fonte 16) — é o embrião, mas não
  distingue humano de agente.
- **e9.1.1** — troca de ator: da ferramenta para o registro de direito autoral.
- **e9.2** — porque código gerado por agente sem contribuição humana não é protegível (fonte 31), um
  gerador escrito todo pelo agente cai na mesma regra; o contrato passa a exigir a parte humana.
  Contradição com e1, registrada em 5.2.
- **e9.2.1** — porque o protegível é escasso, ele vale mais.
- **e10** — porque os logos de Munique, gerados, ficaram sem proteção (fonte 30), a marca que quer
  exclusividade precisa de algo em que a escolha humana seja demonstrável — um sistema de regras.
  Sinal fraco: nenhum caso observado de marca fazendo isso por este motivo.
- **e10.1** e **e10.1.1** — porque o entregável vira código, o manual vira software; e porque código
  com amostras públicas pode ser reconstruído (e11), a proteção vai para o segredo.
- **e11** — porque VLMaterial (imagem → material), StarVector (imagem → SVG) e img2threejs (foto →
  fábrica 3D) já existem (fontes 7, 9, 17), a regra deixou de estar escondida atrás da aparência.
  Sinal forte por três artefatos; confiança média porque a qualidade de reconstrução ainda é
  desigual.
- **e11.1** — porque o valor de uma biblioteca procedural comercial era o grafo difícil de fazer, e
  ele passa a ser reconstruível, a exclusividade cai. Quem perde: vendedores de materiais
  procedurais.
- **e11.1.1** (retroação) — porque abrir o grafo passa a significar entregá-lo, o fornecedor fecha.
  A promessa de transparência do procedural se inverte.
- **e11.2** — porque a reconstrução copia o método, a disputa cai na velha fronteira ideia/expressão.
  Nomeei os dois foros que já decidiram sobre saída de IA em 2026.
- **e11.2.1** — fora da janela do mapa (2038): depende de decisão de tribunal superior, e a classe de
  referência jurídica dá mais de dez anos até jurisprudência estável.

**Quem bloqueia na Raiz 3:** vendedores de ferramentas de geração de imagem, que têm incentivo para
que o prompt seja reconhecido como autoria — se isso acontecer, a vantagem do gerador como lugar da
prova desaparece (ver seção 7, raiz que não acontece).

### 5.2 Cruzamentos

**Convergência — a biblioteca de regras como camada de poder.** Três ramos de raízes diferentes
chegam ao mesmo lugar: **e1.1.1** (biblioteca curada vira ativo que define estilo), **e7** (fabricante
prende o gerador ao seu runtime) e **e11.1.1** (fornecedor fecha o grafo para evitar
reconstrução). Em todos, o valor sai do artefato e da regra solta e vai para o **conjunto curado de
regras mais o ambiente que as executa e valida**. É o achado mais valioso do mapa: o gerar-geradores
não democratiza a regra por padrão; desloca o controle para quem mantém a biblioteca e o validador.

**Retroalimentação 1 (freia a Raiz 1).** e3 (comunidades restringem contribuição gerada) → e3.2
(bibliotecas abertas evoluem devagar) → menos código procedural de qualidade e APIs instáveis →
exatamente as duas causas de falha do 3DCodeBench → o agente erra mais → a Raiz 1 desacelera. O
laço só se quebra por e3.2.1 (fabricante de modelo financia a manutenção).

**Retroalimentação 2 (freia e acelera).** e9.2 (contrato exige parte humana) reduz a automação total
da Raiz 1, mas aumenta a demanda por ferramentas que registrem a escolha humana (e9.1), que tornam
o gerador mais atraente que o pixel — reforçando a Raiz 1 no formato "humano define, agente
executa".

**Contradição 1.** e4.2.1 (rigging como última reserva humana) contra a escolha da SideFX de começar
o MCP justamente pelo rigging (fonte 11). O que decide: se o validador do APEX consegue verificar
articulação (e não só sintaxe) até ~2030.

**Contradição 2.** e5.2.1 (a estética procedural volta a marcar o XR) contra e11 (qualquer amostra
vira programa, logo a estética não fica presa ao geométrico). O que decide: se a reconstrução
imagem → programa chega a superfície orgânica com poucos quilobytes, ou só a objetos de superfície
dura.

**Contradição 3.** e1 (o agente escreve o gerador) contra e9.2 (o gerador protegível precisa de
regra humana). Não se anulam, mas não crescem juntas sem ferramenta de rastreio (e9.1).

**Cobertura STEEP e quem perde.** Social: e2.2.1, e3.1, e6.2.1. Tecnológico: e4, e5, e7.1.
Econômico: e1.2, e5.1.1, e2.1.1, e11.1. Ecológico: e8 (sinal fraco, sem medição). Político e
jurídico: e9, e11.2, e7. Quem perde, nomeado: modeladores de props (e1.2), quem entra no 3D pelo
desenho (e1.2.1), mantenedores de bibliotecas abertas (e3.2), vendedores de modelos de estoque
(e5.1.1), de template estático (e2.1.1) e de materiais procedurais (e11.1), jogo competitivo em
modelo de mundo (e6.1.1), usuário com aparelho barato (e8.1.1).

**Regra de parada.** Parei em e7 com um só filho porque um segundo filho ("formato aberto vira padrão
W3C") seria o mesmo e7.1 mais adiante, sem troca de ator. Parei em e8 com um só filho pelo mesmo
motivo e porque o sinal já é fraco na raiz.

## 6. Sinais fracos e wildcards

### Sinais fracos

- **SF1 — Prompt guardado dentro do grafo.** A City Sample PCG guarda "prompts descritivos nos
  metadados do grafo" como arquitetura de referência para edição por LLM (fonte 16). *O que mudaria:*
  o asset procedural passa a carregar sua própria especificação em linguagem natural — metade código,
  metade intenção. *Sinal observável:* outro fabricante (SideFX, Adobe, Blender) adotar um campo
  padrão de "prompt de origem" no formato do asset.
- **SF2 — A economia contada em tokens.** img2threejs se apresenta como "eficiente em tokens" e
  publica orçamento por objeto (fontes 9, 10); o servidor MCP da SideFX é descrito como "econômico em
  tokens" (fontes 11, 12). *O que mudaria:* token vira a unidade de preço da produção visual.
  *Sinal:* o benchmark medido prometido pelo img2threejs (v1.5) ou uma tabela de preço de estúdio
  por token.
- **SF3 — Evolução guiada por humano.** AI Co-Artist faz o LLM mutar e cruzar shaders escolhidos pelo
  usuário, no espírito do Picbreeder (fonte 8). *O que mudaria:* a interface da autoria de regra
  deixa de ser a escrita e passa a ser a seleção. *Sinal:* uma ferramenta comercial de shader ou de
  motion com "variações" evolutivas por padrão. Ver ressalva sobre os números na seção 8.
- **SF4 — Agente no editor de estados.** Rive com Luau e agente de IA em acesso antecipado (fonte 23).
  *Sinal:* saída do acesso antecipado e primeira biblioteca pública de comportamentos gerados.
- **SF5 — Ausência que é sinal.** O `manim-web-mcp` citado pela turma não apareceu na busca do GitHub;
  o que apareceu foi um `Manim-MCP-Client` com zero estrelas. Manim tem 94 mil estrelas e nenhuma
  ponte com agente de adoção visível. *O que isso diz:* a animação programática mais popular ainda não
  foi tomada pelo agente — ou a busca a esconde, como a turma já tinha notado. *Sinal:* um servidor MCP
  de Manim passar de mil estrelas.

### Wildcards

- **W1 — Conteúdo gerado como código no momento em que o jogador chega.** *Mecanismo:* um modelo de
  código local, pequeno e rápido, escreve o gerador do nível ao entrar, e o motor o executa de forma
  determinística a partir daí — cada jogador recebe um mundo com regra própria, reproduzível por
  semente. *Por que é improvável:* hoje o agente leva de 5 a 15 minutos para tarefas de editor e erra
  PCG (fonte 15); a verificação de jogo gerado exige ferramentas próprias (fontes 3, 4); e o custo por
  sessão contradiz o argumento central do gerador escrito na produção (fonte 28). *O que faria com o
  mapa:* dissolveria a separação entre e6 (gerador escrito na produção) e e6.1.1 (modelo de mundo em
  pixel), e o jogo viraria o primeiro meio em que a regra é gerada por pessoa. *Sinal precoce:* um
  modelo de código embarcado em motor de jogo que gere e valide um gerador em menos de dez segundos.
- **W2 — Um tribunal decide que reconstruir a regra a partir de amostras é violação.** *Mecanismo:*
  uma corte trata o grafo reconstruído como obra derivada da imagem. *Improvável* porque a tradição
  ideia/expressão protege método. *O que faria:* congelaria e11, VLMaterial e img2threejs como uso
  comercial, e fortaleceria e7 (runtime fechado). *Sinal:* uma ação de fornecedor de materiais contra
  um serviço de imagem → grafo.
- **W3 — Modelos de mundo em pixel ganham horas de consistência e cabem no dispositivo.** *Mecanismo:*
  memória longa e compressão fazem o Genie 3 e seus sucessores rodarem localmente por horas. *O que
  faria:* derrubaria e5.2 e e6.1 — o programa perderia o argumento de leveza e de consistência ao
  mesmo tempo. *Sinal:* um modelo de mundo com mais de uma hora de consistência rodando em GPU de
  consumo.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — é 2036 e este mapa errou. Por quê?

1. **O agente nunca saiu da prévia.** Os servidores MCP ficaram como demonstração (fonte 14), o custo
   em tokens e a latência (fonte 15) não caíram o bastante, e o procedural continuou sendo feito por
   TDs, com o agente como autocompletar. Aponta para e1 e e2 → rebaixei o prazo de e1 e a confiança
   de e1.
2. **O pixel ficou barato e editável.** Modelos de imagem, vídeo e mundo aprenderam edição localizada
   e consistente, e a vantagem de "continuar editável" do programa sumiu (W3). Aponta para e5.2 e e6.1
   → empurrei o prazo de e6.1.
3. **O direito foi para outro lado.** Uma decisão reconheceu o prompt detalhado como autoria, e a Raiz
   3 perdeu a razão de ser. Aponta para e9 e e10 → rebaixei e10.

### 7.2 Extrapolação linear

- **e5.1.1** era "o preço da peça 3D cai", puro mais-do-mesmo. Ganhou mecanismo não linear: o pedido
  sob medida passa a custar perto do genérico, o que inverte a vantagem do catálogo — não é só
  barateamento.
- **e7.1.1** ("o navegador consolida-se") é extrapolação da tendência WebGPU. Mantido com confiança
  baixa e declarado aqui; a não linearidade possível está na troca vídeo → página que computa.
- Removido **e5.3** ("o splat desaparece da web"): extrapolação da leveza e, além disso, invade o tema
  10. Vai para a seção 12.

### 7.3 Velocidade de adoção

- **e1**: prazo 2028 → 2029. A classe de referência (MCP comunitário → oficial em ~16 meses) não se
  aplica à etapa seguinte, de prévia a produção; o teste da Puget mostra o agente fazendo malha
  estática quando pedido PCG.
- **e2.1.1**: prazo 2031 → 2033. Marketplaces reprecificam devagar; nenhum sinal hoje.
- **e6.1**: prazo 2030 → 2032. Jogo competitivo é conservador em ferramenta; e o argumento depende de o
  modelo de mundo continuar inconsistente, o que é aposta.
- **e9.1**: prazo 2030 → 2031. Não há produto que registre autoria humana por parâmetro; o mais
  próximo (prompt nos metadados, fonte 16) não separa humano de agente.

### 7.4 A raiz que não acontece

- **Sem a Raiz 1**, sobra a Raiz 2 como nicho (demoscene, creative coding) e a Raiz 3 para toda mídia
  gerada. Sobram e3, e7, e8, e9, e11 — metade do mapa. A Raiz 1 é a mais estrutural, mas não é única.
- **Sem a Raiz 2** (se o pixel comprimido e o streaming vencerem), a Raiz 1 continua no estúdio: o
  gerador é escrito pelo agente e exportado como malha. Cai e5 a e8; o resto fica.
- **Sem a Raiz 3** (se o prompt ganhar autoria), caem e9, e9.2, e10; e11 continua, porque reconstruir
  a regra independe de quem é autor.

### 7.5 Suposições escondidas

1. **As ferramentas continuam abertas a agentes externos.** Se SideFX, Epic ou Adobe só aceitarem o
   próprio agente, e7 vira regra e e7.1 enfraquece.
2. **Lojas de app deixam executar código baixado.** Não verifiquei política nesta rodada. Se Apple ou
   Google restringirem gerador executado em runtime em apps nativos, a Raiz 2 fica restrita ao
   navegador — reforça e7.1, enfraquece e5.2.1 em óculos com loja fechada.
3. **Modelos de código continuam baratos.** A conta de tokens de SF2 supõe preço de inferência em
   queda.
4. **A jurisprudência de 2026 não se inverte.** Base da Raiz 3.
5. **As comunidades abertas continuam produzindo o dado de treino.** e3 ameaça isso.

### 7.6 Viés do autor

O autor dá aula de mídia e interação e tem interesse declarado em criação e plataforma; o tema favorece
quem acredita que regra é superior a amostra. **e5.2.1** (a estética procedural volta a marcar o XR)
está aqui mais por gosto que por evidência — mantido com confiança baixa e marcado. **e2.2.1** (bancas
de portfólio pedem o executável) reflete o que o autor gostaria de ver no ensino.

### 7.7 Falseadores do briefing

- *Adoção já passou da maioria inicial?* Não: nenhuma fonte mostra IA-autora-de-gerador em produção com
  número; os anúncios são prévias. Falseador não acionado.
- *A tecnologia não rompe nada, só melhora?* Parcialmente acionado para um candidato: o copiloto de
  shader genérico foi recusado como raiz exatamente por isso (seção 4). Para as três raízes, a ruptura
  está nomeada; a mais frágil nesse teste é a Raiz 2, que pode ser apenas "o demoscene ficou barato".
  Mantida porque muda a unidade de entrega, não só o custo.

### 7.8 Calibração

Contagem final: 1ª ordem alta 2 · média 7 · baixa 2; 2ª ordem alta 0 · média 16 · baixa 3; 3ª ordem
alta 0 · média 0 · baixa 19. A distribuição cai com a ordem. Na primeira passada a 3ª ordem tinha
e4.2.1 e e6.1.1 em média; rebaixei para baixa porque ambos dependem de contradições não resolvidas
(5.2).

### 7.9 Registro de alterações

- e1: prazo 2028 → 2029; confianca alta → media — o MCP do Unreal é experimental e errou PCG no teste
  (fonte 15).
- e1.2: sinal forte → medio — o GDC mede percepção, não vaga (fonte 32).
- e2.1.1: prazo 2031 → 2033 — sem sinal de reprecificação.
- e4.2.1: confianca media → baixa — contradição 1 não resolvida.
- e5: confianca alta → media — o número de tokens é estimativa, não benchmark (fonte 10).
- e5.3: **removido** (vai para a seção 12) — extrapolação linear e invasão do tema 10.
- e6.1: prazo 2030 → 2032 — conservadorismo do jogo competitivo, e aposta contra W3.
- e6.1.1: confianca media → baixa.
- e8: sinal medio → fraco — nenhuma medição de energia encontrada.
- e9.1: prazo 2030 → 2031.
- e10: sinal medio → fraco; confianca media → baixa — nenhum caso de marca migrando por este motivo.
- e11: confianca alta → media — qualidade de reconstrução desigual entre superfície dura e orgânica.
- e9.3: **removido** ("surge o auditor de regra") — profissão genérica, sem ator nem mecanismo; vai
  para a seção 12.

Cota por raiz cumprida: Raiz 1 (e1, e1.2, e4.2.1), Raiz 2 (e5, e5.3 removido, e6.1, e8), Raiz 3 (e10,
e11, e9.3 removido).

## 8. O que a máquina errou

1. **Número divergente entre dois mapas da mesma skill.** O mapa de 2031 deste tema atribui ao Proc3D
   "redução de 4 a 10 vezes no custo de contexto". O resumo que abri nesta rodada fala em "mais de
   400× de aceleração" sobre regenerar a cada edição e +28% em ULIP (fonte 5), e não menciona contexto.
   O PDF não pôde ser lido (a extração devolveu só metadados). Não sei qual está certo; usei só o que
   está no resumo e registro que o número do mapa anterior pode vir do corpo do artigo ou ter sido
   trocado.
2. **Datas em conflito sobre o Houdini 22.** A Jon Peddie Research data a matéria de 30/07/2026 e diz
   "keynote de 22 de junho"; a Digital Production publica em 23/06/2026; a NVIDIA fala do SIGGRAPH em
   Los Angeles até 23/07. O mapa de 2031 dizia "keynote em Londres durante o SIGGRAPH 2026", o que não
   fecha: o keynote do Houdini foi em junho e o SIGGRAPH em julho. Usei "keynote de 22–23/06/2026" e
   não afirmo local.
3. **Autoria do img2threejs.** O repositório está na organização `img2threejs`; um blog de terceiros
   (fonte 10) atribui a "hoainho". Não verifiquei; não atribuo a pessoa.
4. **Números bons demais.** O AI Co-Artist (fonte 8) reporta 4,2 vs 0,6 shaders para novatos, 6,8 vs 2,9
   para especialistas, satisfação 4,7 vs 2,8, com 50 participantes e GPT-4, em preprint de empresa. Os
   números são limpos e a comparação com Shadertoy puro é desigual por desenho. Usei o sistema como
   sinal fraco (SF3), nunca os números como evidência de efeito.
5. **Classe de referência de memória.** A data do Chrome 113 (maio de 2023) e a idade do procedural
   clássico (Houdini dos anos 1990) vêm de memória, não de fonte aberta; a página do gpuweb só dá
   versões. Os prazos que dependem delas (e5) herdaram essa fragilidade.
6. **Número que chegou primeiro pelo resumo de busca.** O "80k–180k tokens por objeto" apareceu num
   resumo de busca; só entrou depois de aberto em página que cita a documentação do projeto e a
   ressalva "não é benchmark medido".
7. **Fonte que não abriu.** VoxelCodeBench (arXiv 2604.02580) estourou o limite de tamanho e não
   entrou; a página da Epic sobre a atualização da City Sample devolveu 403, e usei a documentação
   técnica no lugar.
8. **Dado velho.** O número da Steam (7%) é de julho de 2025 — mais de um ano antes desta rodada — e
   declaração voluntária. Usado como classe de referência de velocidade, não como estado atual.

## 9. Três cenários para 2036

**Provável.** Em 2036, quem trabalha em 3D de jogo, VFX e peça web descreve o que quer e recebe um
gerador; o agente escreve, o validador confere, o render no laço aponta as peças flutuantes, e um
artista técnico mantém a biblioteca curada que o agente consulta. Props e cenário de preenchimento
quase não são modelados à mão; montagens articuladas e personagens ainda são. As bibliotecas de regras
de SideFX, Epic e Adobe tornaram-se o ativo central dessas empresas, e o gerador trafega sobretudo
dentro dos seus runtimes; no navegador, fábricas TSL de quilobytes são comuns em peça de marca. A
autoria de gerador ainda não foi decidida por tribunal superior, mas estúdios guardam o registro de
escolhas humanas por precaução. *Sinal precoce:* o MCP do Houdini sair do Labs e o do Unreal perder o
rótulo experimental antes de 2028.

**Desejável.** Em 2036, os formatos de gerador são abertos e executam no navegador; as bibliotecas de
regra de referência são mantidas em comum, com financiamento dos fabricantes de modelo; as ferramentas
registram, por parâmetro, o que foi escolha humana, e isso protege o autor sem exigir que ele escreva
cada linha. Escolas de design ensinam a especificar e verificar sistemas, e o creative coding escrito à
mão tem espaço próprio e reconhecido. Para chegar lá: bibliotecas gráficas abertas financiadas antes do
colapso de manutenção (e3.2), e um padrão de rastreio de autoria em formato aberto. *Sinal precoce:* um
fabricante de modelo anunciar financiamento a Three.js, Blender ou p5.js vinculado a qualidade de API
para agentes.

**Indesejável.** Em 2036, o gerador existe, mas ninguém o abre: fornecedores entregam runtime
compilado para evitar reconstrução, o agente de cada ferramenta só usa a biblioteca da casa, e o estilo
visual de uma geração inteira de produtos vem de três bibliotecas curadas. As comunidades abertas,
sobrecarregadas, pararam de evoluir as APIs; os agentes seguem errando as mesmas incompatibilidades. A
porta de entrada para quem vem do desenho fechou, e o ensino de design no Brasil, fragmentado, não
formou para especificar sistemas. *Sinal precoce:* um grande fornecedor de materiais ou HDA passar a
distribuir só binário, citando reconstrução por IA como motivo.

## 10. O experimento

**O que é.** *Regra ou pixel: o teste da edição.* Um objeto de referência (uma luminária articulada,
escolhida por ter montagem — o ponto fraco medido) é produzido de três maneiras: (a) gerador Three.js
escrito por agente com render no laço, no método do img2threejs; (b) malha gerada por um modelo de
imagem → 3D; (c) vídeo curto gerado. Cada versão recebe os mesmos **cinco pedidos de cliente**: mudar a
altura, trocar o material, adicionar uma segunda haste, animar a abertura, e produzir vinte variações
de cor. Por fim, um **pedido de prova de autoria**: "demonstre quais escolhas desta peça foram suas".

**Que pergunta responde.** Se a vantagem do gerador — continuar editável e ter a autoria registrável —
existe na prática em 2026, ou se o pixel regenerado já edita tão bem quanto a regra. Toca e4 (o erro
físico), e5.2 (a divisão pixel × programa) e e9 (a regra como prova).

**Que tecnologia emergente usa, e por que não dá com a madura.** Agente escrevendo gerador com
validador e render no laço, sobre WebGPU/TSL. Com a madura (modelagem manual em Blender), o teste
mediria a velocidade de um humano, não a da regra escrita pela máquina — que é o objeto do tema.

**O que a turma faz em sala.** Divide-se em três grupos, um por forma; cada grupo executa os cinco
pedidos cronometrados e registra: tempo, tokens ou créditos gastos, se o pedido foi atendido sem
refazer do zero, bytes da peça final, e quantas peças flutuantes ou montagens quebradas apareceram. No
fim, cada grupo tenta cumprir o pedido de prova de autoria, e a turma julga as três provas pelo critério
de Munique (influência concreto-formativa).

**O resultado que faria o autor mudar de ideia.** Se a malha ou o vídeo regenerados atenderem os cinco
pedidos em tempo igual ou menor, com fidelidade igual, **e** o gerador não oferecer uma prova de autoria
melhor que o histórico de prompts, o argumento central do tema cai: o gerador vira só mais um formato,
e as Raízes 1 e 3 perdem uma ordem. Também mudaria de ideia se o gerador falhar na segunda haste (a
montagem) em todas as tentativas — seria sinal de que e4.2 é mais forte do que o mapa supõe, e de que o
prazo de e1 deve ir para depois de 2031.

## 11. Fontes

Trinta e seis fontes, todas abertas nesta rodada em 22/09/2026 (páginas via navegador; contagens de
estrelas via API do GitHub no mesmo dia).

**Pesquisa e medição**

1. https://arxiv.org/abs/2606.01057 — **3DCodeBench**, Gao, Shu, Ye, Xiong, Makadia, Guo, Itti, Chen,
   31/05/2026. Sustenta e4, e1.2 e o "que falta" da Raiz 1: 12 VLMs, falhas por incompatibilidade de
   API, partes flutuantes, necessidade de dado procedural e de ambiente com feedback. *Confiabilidade:*
   alta como preprint com plataforma pública.
2. https://arxiv.org/html/2606.11152v1 — **P3D-Bench**, Yang, Hu, Lin, Zhou, Xu, Zhang, Liu, Yao,
   09/06/2026. Sustenta e4 e e4.2: alinhamento geométrico ~0,35 e F1 de partes ~0,50 no melhor modelo.
   *Confiabilidade:* alta para o método; valores aproximados como lidos.
3. https://arxiv.org/pdf/2605.07342 — **Mage**, Hugh Xuechen Liu, Kıvanç Tatar, maio/2026. Sustenta e4
   (compilação não mede jogabilidade). *Confiabilidade:* média — só o enquadramento foi legível, sem
   números.
4. https://arxiv.org/pdf/2605.07442 — **GameGen-Verifier**, Jia e coautores, 11/05/2026. Sustenta W1 e
   e6: verificação de jogos gerados por injeção de estado. *Confiabilidade:* média — números não
   legíveis na extração.
5. https://arxiv.org/abs/2601.12234 — **Proc3D**, Raji, Petrangeli, Gadelha, Shen, Bhattacharya, Wu,
   21/01/2026. Sustenta 3.1 e e1: grafo compacto editável, >400× sobre regeneração, +28% ULIP.
   *Confiabilidade:* alta para a existência; números são dos autores — e ver seção 8, item 1.
6. https://arxiv.org/abs/2508.08228 — **LL3M**, Lu, Chen, Dinh, Lang, Holtzman, Hanocka, 11/08/2025.
   Sustenta 3.1: agentes escrevendo Blender Python editável, com BlenderRAG. *Confiabilidade:* alta.
7. https://arxiv.org/abs/2501.18623 — **VLMaterial**, ICLR 2025 spotlight. Sustenta e11: imagem →
   material procedural como programa. *Confiabilidade:* alta (revisado por pares); autores não
   anotados nesta leitura.
8. https://arxiv.org/html/2512.08951 — **AI Co-Artist**, Kamer Ali Yuksel, Hassan Sawaf (aiXplain),
   27/11/2025. Sustenta SF3. *Confiabilidade:* baixa para os números (seção 8, item 4).

**Ferramenta, indústria e comunidade**

9. https://github.com/img2threejs/img2threejs — **img2threejs**. Sustenta 3.1, e4.1, e5, SF2: oito
   passes, "scripts impõem, o modelo julga", portão de qualidade. *Confiabilidade:* média — método
   documentado, sem benchmark.
10. https://explainx.ai/blog/img2threejs-bunpav-procedural-photo-threejs-july-2026 — **Blog sobre o
    img2threejs**, 07/2026. Sustenta e5.1 e e4.1.1: 80–180 mil tokens por objeto, com a ressalva do
    mantenedor de que é estimativa. *Confiabilidade:* média-baixa — terceiro, útil por citar a
    documentação.
11. https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/
    — **SideFX e NVIDIA levam agentes MCP ao rigging do Houdini 22**. Sustenta e1, e4.1, contradição
    1: validador, script puro, prévia via Labs. *Confiabilidade:* alta como veículo especializado;
    datas em conflito (seção 8).
12. https://digitalproduction.com/2026/06/23/here-comes-houdini-22/ — **Here comes Houdini 22**,
    23/06/2026. Sustenta o mesmo, com os componentes do APEX Script Comfort Package. *Confiabilidade:*
    alta.
13. https://blogs.nvidia.com/blog/siggraph-news-2026/ — **NVIDIA no SIGGRAPH 2026**. Sustenta a lista de
    ferramentas com MCP. *Confiabilidade:* alta para o fato; viés de parte interessada.
14. https://www.upendrasengar.com/blog/six-professional-creative-tools-got-mcp — **Six professional
    creative tools got MCP servers**, 28/07/2026. Sustenta a ressalva de 3.2 e o pré-mortem 1.
    *Confiabilidade:* média — blog individual, útil pelo ceticismo declarado.
15. https://www.pugetsystems.com/blog/2026/07/09/unreal-engine-mcp-hands-on-testing-ai-inside-the-editor/
    — **Unreal Engine MCP hands-on**, Kelly Shipman, 09/07/2026. Sustenta 3.2, e1 (rebaixamento) e W1:
    malha estática no lugar de PCG, 5–15 min por resposta. *Confiabilidade:* alta como teste prático
    relatado, n = 1.
16. https://dev.epicgames.com/documentation/unreal-engine/city-sample-pcg-for-unreal-engine — **City
    Sample PCG, Unreal 5.8**. Sustenta e1, e1.1, SF1: MCP usado na criação, prompts nos metadados,
    *skill* de gramática de forma. *Confiabilidade:* alta — documentação do fabricante.
17. https://github.com/joanrod/star-vector — **StarVector** (4.597 estrelas). Sustenta e11: imagem →
    SVG como código. *Confiabilidade:* alta para existência e contagem.
18. https://github.com/GraphiteEditor/Graphite — **Graphite** (27.329 estrelas). Sustenta e7.1.
    *Confiabilidade:* alta para contagem; alfa.
19. https://github.com/3b1b/manim — **Manim (3Blue1Brown)** (94.146 estrelas). Sustenta 3.3 e SF5.
    *Confiabilidade:* alta.
20. https://github.com/ManimCommunity/manim — **Manim Community** (40.975 estrelas). Sustenta o mesmo.
    *Confiabilidade:* alta.
21. https://github.com/processing/p5.js/blob/main/AI_USAGE_POLICY.md — **Política de uso de IA do
    p5.js**. Sustenta e3: proíbe PR gerado, exige declaração, "curiosidade, lentidão e comunidade".
    *Confiabilidade:* alta — norma vigente.
22. https://www.cgchannel.com/2026/04/canva-makes-motion-graphics-and-animation-app-cavalry-free/ —
    **Canva torna o Cavalry gratuito**, 17/04/2026. Sustenta e2, e2.1. *Confiabilidade:* alta.
23. https://rive.app/features — **Rive**. Sustenta e2, e2.2, SF4. *Confiabilidade:* média — material do
    fabricante; usei só a lista de recursos e plataformas.
24. https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language — **TSL**. Sustenta Raiz 2, e5,
    e7.1. *Confiabilidade:* alta — documentação do projeto.
25. https://github.com/gpuweb/gpuweb/wiki/Implementation-Status — **Status do WebGPU**. Sustenta Raiz 2
    e a classe de referência de e5. *Confiabilidade:* alta — grupo de trabalho.
26. https://developer.playcanvas.com/user-manual/gaussian-splatting/formats/ — **Formatos de splat,
    PlayCanvas**. Sustenta e5.2: SOG 15–20× e SPZ ~10× menores que PLY. *Confiabilidade:* alta.
27. https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/ — **Genie 3**, 05/08/2025.
    Sustenta e6.1 e W3: 24 fps, 720p, consistência de alguns minutos. *Confiabilidade:* alta como fonte
    primária; viés do fabricante.
28. https://www.summerengine.com/blog/ai-procedural-generation-for-games — **AI procedural generation
    for games**, 06/06/2026. Sustenta e6 e W1: "a força da IA é escrever o gerador, não ser o
    gerador". *Confiabilidade:* média — blog de fabricante de motor.
29. https://www.totallyhuman.io/blog/the-surprising-new-number-of-genai-games-on-steam — **GenAI games on
    Steam**. Sustenta a classe de referência de e6 e e6.2. *Confiabilidade:* média — método declarado
    (API da Steam), dado de 07/2025.
30. https://legalblogs.wolterskluwer.com/copyright-blog/the-prompter-as-copyright-author-lessons-from-munich/
    — **O "prompter" como autor? Lições de Munique**. Sustenta a Raiz 3, e9, e10. *Confiabilidade:*
    alta — análise especializada com número de processo.
31. https://www.nortonrosefulbright.com/en/knowledge/publications/ce8eaa5f/ai-in-litigation-series-an-update-on-ai-copyright-cases-in-2026
    — **AI in litigation series: an update on AI copyright cases in 2026**, Norton Rose Fulbright,
    03/2026. Sustenta Raiz 3 e e9.2: recusa de certiorari em 02/03/2026, "reafirmando a autoria humana
    como requisito fundamental". *Confiabilidade:* alta — escritório de grande porte, fato verificável.
    (A análise da Morgan Lewis sobre o mesmo caso, com o número 25-449, também foi aberta, mas a página
    recusa acesso automatizado — 403 — e por isso não conta aqui; ver 12.4.)
32. https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/
    — **GDC State of the Game Industry 2026**. Sustenta 3.4, e1.2, e6.2. *Confiabilidade:* alta para
    pesquisa de opinião; é percepção.
33. https://revista.uemg.br/sciasedcomtec/article/view/7896 — **Imagens [de]generativas**, Beccari
    (UFPR), Kussler (UERGS), Oliveira (UFPR), SCIAS v. 5 n. 2, 2023. Sustenta a nota brasileira.
    *Confiabilidade:* alta como artigo revisado; teórico-crítico, anterior à geração de código gráfico.
34. https://www.revistaowl.com.br/index.php/owl/article/view/773 — **Inteligência artificial no
    ensino de arquitetura: Brasil × exterior**, Carrasco, Bremer, Silva, Revista OWL, 18/05/2026 (depósito
    no Zenodo em 17/05/2026). Sustenta a nota brasileira e o cenário indesejável: adoção "fragmentada,
    concentrada em iniciativas isoladas". *Confiabilidade:* média — revisão comparativa, sem dado
    primário amplo.
35. https://github.com/remotion-dev/remotion — **Remotion** (60.042 estrelas). Sustenta 3.3: vídeo como
    código. *Confiabilidade:* alta para contagem.
36. https://github.com/mxgmn/WaveFunctionCollapse — **WaveFunctionCollapse** (25.341 estrelas). Sustenta
    3.3 e a recusa do procedural clássico como raiz. *Confiabilidade:* alta.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

(ver 12.7 — colada ao final, depois da última rodada)

### 12.2 Premissas assumidas não cobertas pelo briefing

- Número de raízes: escolhi três (a skill permite de duas a quatro).
- O mapa de 2031 do mesmo tema, da mesma skill, foi lido **antes** de rodar (lista de fontes e títulos
  das raízes). Isso contamina a independência: as Raízes 1 e 3 deste mapa se parecem com as Raízes 1
  e 3 daquele. Diferenças deliberadas: não fiz do "render no laço" uma raiz (virou e4, retroação);
  a Raiz 2 aqui é sobre a entrega e o runtime, com o bloqueio pelo fabricante como efeito central
  (e7); acrescentei a disputa pixel × programa por tipo de objeto e a bifurcação de gênero no jogo.
  Todas as fontes foram reabertas nesta rodada; nenhuma veio do mapa anterior sem abertura.
- Sem entrevista, com briefing completo: sem rebaixamento geral de confiança (regra do §0).

### 12.3 Buscas feitas

1. "LLM procedural 3D generation code Blender benchmark 2026" → 3DCodeBench, CodeGen-3D, P3D-Bench,
   VoxelCodeBench, BlenderRAG.
2. "runtime generated game content as code LLM shader generation at play time 2026" → GameGen-Verifier,
   Mage, Summer Engine, Steam genAI.
3. "program synthesis graphics inverse procedural modeling arXiv 2026" → ShapeCoder, DI-PCG, VLMaterial,
   MultiMat, L-systems inversos (a maioria anterior a 2026).
4. "design procedural IA ensino de design sistemas generativos Brasil 2026" → Zenodo/OWL, Estudos em
   Design, Beccari.
5. "Houdini 22 AI agent MCP Apex Script SIGGRAPH 2026" → Jon Peddie, NVIDIA, Digital Production,
   Upendra Sengar, VP Land, GfxSpeak.
6. "Blender MCP geometry nodes LLM agent adoption GitHub stars" → vários servidores MCP comunitários
   (44 estrelas a 29 mil).
7. "copyright AI generated code human authorship procedural rules 2026 ruling" → Thaler, USCO Parte 2.
8. "SVG generation LLM vector graphics code benchmark 2026 StarVector" → StarVector, SVGenius, GeoSVG-RL.
9. "tokens per asset cost procedural code vs mesh generation file size kilobytes Three.js LLM" →
   img2threejs, explainx.
10. "Unreal Engine PCG framework AI assistant MCP procedural content 2026" → Puget, City Sample, PCG-AI.
11. "Shadertoy LLM generated shaders community policy AI 2026" → ShaderToy-MCP, AI Co-Artist;
    **nenhuma política oficial do Shadertoy encontrada**.
12. "Gaussian splat file size vs procedural model web delivery megabytes 2026" → PlayCanvas, SOG/SPZ;
    **nenhuma comparação direta splat × procedural em bytes encontrada**.
13. "Genie 3 world model DeepMind real-time interactive environments" → DeepMind.
14. API do GitHub: 14 repositórios consultados (contagens na seção 3.3 e 11); busca por `manim-web-mcp`
    devolveu apenas `Sarthak7Gautam/Manim-MCP-Client`, 0 estrelas, criado em 27/03/2026.

### 12.4 Aberturas que não deram em nada

- `https://arxiv.org/pdf/2601.12234` (Proc3D em PDF): extração só de metadados; usei o resumo.
- `https://arxiv.org/pdf/2604.02580` (VoxelCodeBench): excedeu 10 MB; não entrou.
- `https://www.unrealengine.com/learning/city-sample-gets-a-major-update-with-pcg-and-unreal-mcp-workflows`:
  403; substituído pela documentação da Epic.
- `https://www.morganlewis.com/pubs/2026/03/us-supreme-court-declines-to-consider-whether-ai-alone-can-create-copyrighted-works`
  e `https://zenodo.org/records/20263780`: abertas pelo navegador da rodada, mas respondem 403 a acesso
  automatizado; substituídas na seção 11 pela Norton Rose Fulbright e pela página da Revista OWL.
- `https://estudosemdesign.emnuvens.com.br/design/en/article/view/2336`: redirecionamento em laço; não
  entrou.
- Busca por política do Shadertoy sobre IA: nada.
- Busca por medida de consumo energético de mídia computada × transmitida: não feita a fundo; e8 ficou
  com sinal fraco por isso.

### 12.5 Efeitos cortados e caminhos abandonados

- **e5.3 (removido)** — "O splat desaparece da web para objetos sintéticos." Extrapolação da leveza e
  invasão do tema 10. A versão defensável virou e5.2 (divisão por tipo de objeto).
- **e9.3 (removido)** — "Surge a profissão de auditor de regra." Profissão genérica sem ator nem
  mecanismo; é o anti-padrão listado na skill.
- **Candidata a raiz: "o render entra no laço — criação visual vira disciplina verificável".**
  Considerada e rebaixada a efeito (e4 e e4.1). Motivo: não rompe uma prática sozinha; é a condição
  para a Raiz 1 funcionar. Passou no "por que agora", falhou no "o que rompe" como raiz autônoma.
- **Candidata a raiz: "animação matemática programática dirigida por agente (Manim + MCP)".** Abandonada
  por falta de sinal (SF5): nenhuma ponte de adoção visível.
- **Efeito descartado no teste da causa solta:** "Estúdios demitem artistas 3D" como 2ª ordem de e1 —
  aconteceria por outros motivos (a GDC reporta 28% de demitidos em dois anos por um conjunto de
  causas). Reescrito como e1.2, preso às categorias que os benchmarks medem.
- **Efeito descartado por genérico:** "Currículos de design se reorganizam em torno de sistemas."
  Substituído por e2.2.1, com ator nomeado (banca de portfólio) e mecanismo (o entregável de trabalho
  é o executável).
- **Efeito considerado e não incluído:** "Lojas de app proíbem gerador executável." Não verifiquei
  política; ficou como suposição escondida (7.5, item 2).
- **Nota sobre CAD:** P3D-Bench usa OpenSCAD e CadQuery; CAD paramétrico gerado por IA foi deixado de
  fora como objeto — é engenharia de produto, não mídia e interação — e só aparece como evidência de
  medição.

### 12.6 Notas de leitura, fonte a fonte (bruto)

- 3DCodeBench: submissão de 31/05/2026 (o mapa de 2031 dizia 02/06/2026 — diferença entre submissão e
  anúncio). 3DCodeArena por preferência humana. Repositório com 99 estrelas.
- P3D-Bench: 400 casos texto, 400 imagem, 203 montagens; saídas JSON, OpenSCAD, CadQuery, Three.js;
  11 modelos gerais + 3 de domínio.
- img2threejs: dependências zero (stdlib Python 3.10+), uma imagem por revisão, cor comparada em
  CIEDE2000; único número publicado: 748 anéis e 86.240 pontos numa integração de personagem.
- Puget: *greybox* com luzes de corredor não pedidas; controles do jogador quebrados sem recuperação;
  "criar algo e entender algo não são a mesma habilidade".
- City Sample: a amostra agora tem o nível original feito em Houdini e dois níveis em PCG feitos com
  ajuda de LLM (segundo o resumo de busca; a documentação aberta confirma o uso do MCP, não o número de
  níveis — usei só o que a documentação diz).
- Genie 3: memória visual de ~1 minuto, texto mal renderizado, sem localização geográfica fiel,
  prévia restrita.
- GDC 2026: 36% usam IA generativa no trabalho.
- Cavalry: quem já assinava pode seguir na 2.6 sem conta Canva até o fim da assinatura.
- Rive: Luau scripting e agente de IA, ambos *early access*.
- Munique: logos de aperto de mão/sino, envelope e laptop; o autor apenas escolheu entre propostas e
  pediu ajustes, tratados como correção técnica.
- Morgan Lewis: *Thaler v. Perlmutter*, nº 25-449; recomenda documentar envolvimento humano e guardar
  prompts.
- Steam: ~114.126 jogos no catálogo em 07/2025; 1 em 5 lançamentos de 2025 com declaração.

### 12.7 Saída do verificador (colada integralmente)

```
$ python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2036/14-gerar-geradores-design-procedural-e-creative-coding-com-ia/tendencia-gerar-geradores-design-procedural-e-creative-coding-com-ia.md --links
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 11 (frontmatter diz 11)
efeitos ordem 2: 19 (frontmatter diz 19)
efeitos ordem 3: 19 (frontmatter diz 19)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e11.2.1', 2038)]
confiança ordem 1: alta 2 · media 7 · baixa 2
confiança ordem 2: alta 0 · media 16 · baixa 3
confiança ordem 3: alta 0 · media 0 · baixa 19
links da seção 11: 36/36 respondem (frontmatter diz fontes: 36)
RESULTADO: ok
```

Rodada anterior do verificador, antes da correção (registrada para não haver corte silencioso):
dois links da seção 11 não respondiam a acesso automatizado (morganlewis.com e zenodo.org, ambos 403),
34/36, "RESULTADO: 1 problema(s)". As duas fontes foram trocadas por equivalentes abertas e que
respondem (12.4); a contagem da 2ª ordem na seção 7.8 foi corrigida de 15/4 para 16/3 para bater com
o verificador. O único prazo além do horizonte (e11.2.1, 2038) está declarado fora da janela em 5.1.
