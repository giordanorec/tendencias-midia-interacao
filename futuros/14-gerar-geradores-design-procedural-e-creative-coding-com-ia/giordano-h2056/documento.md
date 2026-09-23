---
tema: "Gerar geradores: design procedural e creative coding com IA"
slug: gerar-geradores-design-procedural-e-creative-coding-com-ia
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-22
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 13
efeitos_ordem_2: 20
efeitos_ordem_3: 21
tecnologias_citadas: [img2threejs, Three.js, TypeScript, WebGPU, Blender, Blender Lab MCP server, Geometry Nodes, Houdini 22, Apex Script Comfort Package, SideFX Labs, KineFX, Unreal Engine 5.8, PCG, MCP, 3DCodeBench, 3DCodeArena, P3D-Bench, OpenSCAD, CadQuery, LL3M, BlenderRAG, ProcFunc, Infinigen, StarVector, SVG, GLSL, shader-spec-eval, Manim, manim-mcp-server, p5.js, Processing, OpenProcessing, Shadertoy, WaveFunctionCollapse, Townscaper, Cavalry, Grasshopper, Rhino, Gaussian splatting, SOG, SPZ, KSplat, Project Genie, Genie 3, GROMIT, Unity, Art Blocks, PostScript, PDF, Adobe Flash, Ruffle, Flashpoint, Claude conectores criativos, Autodesk Fusion, Adobe Creative Cloud, NodeArchitect]
fontes: 31
confianca: media
experimento: "Gerador contra arquivo: o mesmo objeto entregue como código procedural (img2threejs) e como malha/splat, medido em bytes, em tempo de edição pedida e em fidelidade julgada pela turma"
skill_usada: futurizacao-giordano
publico_ok: false
---

# Gerar geradores: design procedural e creative coding com IA — mapa de futuro até 2056

## 1. Resumo

Três rupturas sustentam este mapa de trinta anos. **A IA passa a escrever o gerador**: modelos de linguagem produzem script do Blender, grafo de PCG do Unreal, Apex Script do Houdini, GLSL e Three.js que rodam — e o artista fica com "um script comum, não uma caixa-preta". Com isso, o ofício do técnico-diretor deixa de ser gargalo e passa a ser o de auditor, e o erro típico deixa de ser "não roda" para ser "roda, mas está errado" (precisão geométrica ≈0,35 com alinhamento semântico ≈0,8, segundo o P3D-Bench). **A mídia passa a circular como programa**: o objeto viaja como uma função de alguns milhares de linhas, e não como um splat de 140 MB a 1,4 GB, e é executado na GPU de quem o recebe — o que puxa o asset de arquivo para parâmetro e o arquivamento de dado para ambiente de execução. **O gerador é escrito no momento do uso** (laboratório: GROMIT; o concorrente em pixel é o Genie 3): jogo e interface deixam de ser artefato fechado. As três convergem num ponto: **quem controla onde o código roda** — suíte de criação, loja de aplicativos, navegador — controla a mudança. O bloqueio tem dono e precedente: o PostScript virou PDF, e o Flash foi desligado. O provável em 2056 é uma mídia em que a regra é o formato de trabalho, mas o formato de distribuição continua mais congelado do que a promessa sugere.

## 2. O tema

**O que é.** Em vez de produzir o artefato, produzir a regra que produz o artefato — e, agora, fazer a IA escrever essa regra. Entram aqui: modelos que reconstroem um objeto como código procedural (img2threejs, LL3M, 3DCodeBench), que escrevem shaders (GLSL), que montam grafos de nós (PCG do Unreal, Houdini, Geometry Nodes), que geram SVG (StarVector), que dirigem ferramentas de animação programática (Manim via MCP) e que escrevem comportamento de jogo durante a partida (GROMIT). Ficam de fora a captura de realidade em 3D (tema 10; aqui ela só aparece como concorrente, o splat) e a geração de vídeo e imagem como pixel (tema 12; aqui só aparece como o polo oposto da disputa "gerar pixel × gerar programa").

**Onde encosta em mídia e interação.** Em três lugares: no ofício (quem modela, quem escreve shader, quem projeta motion design por regra — Cavalry); no formato (o que trafega pela rede e o que roda no dispositivo); e na interação (conteúdo e mecânica que são escritos quando a pessoa chega, em vez de antes).

**Por que merece um mapa de futuro e não um levantamento.** Porque o procedural em si é maduro — WFC em jogos comerciais, Houdini há trinta anos, p5.js no ensino — e o levantamento diria "já existe". O que é novo é a mudança de quem escreve a regra, e essa mudança mexe com três suposições que o levantamento não pergunta: que o gerador exige especialista; que a mídia distribuída é dado; e que o software é fechado quando sai de fábrica.

**Premissas do briefing (assumidas, não perguntadas).** Horizonte 2056; público: quem projeta mídia e interação; recorte global com nota sobre o Brasil; descartado: o que já é comum em produto de massa; nenhuma raiz suspeita; viés neutro; ideias óbvias fora: as que servem para qualquer tema; falseador: evidência de que a adoção já passou da maioria inicial de Rogers, ou de que a tecnologia só melhora o que existe. Profundidade de três ordens; modo a partir de tema.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026: 9 buscas e 37 tentativas de abrir página, das quais 31 fontes abertas (lista na seção 11).

### 3.1 O que já existe e funciona

- **Conectores oficiais das ferramentas de criação.** O Blender Lab publicou um servidor MCP que dá acesso em linguagem natural à API Python (Blender 5.1+), com o aviso de que ele "executa código gerado por LLM no Blender sem nenhuma guarda" e a recomendação de rodar em máquina isolada [4]. A Anthropic anunciou em 28/04/2026 conectores para Blender, Autodesk Fusion, Adobe (50+ apps), Affinity, SketchUp, Resolume, Ableton e Splice [10].
- **Houdini.** O Houdini 22 saiu em 16/07/2026 com toolset de Gaussian splatting, KineFX e Copernicus [6]. No keynote (22/06/2026), a SideFX mostrou o *Apex Script Comfort Package* — extensão de VS Code, painel Python e servidor MCP — em que o assistente devolveu um componente de rig de mais de 300 linhas, com a frase "o artista possui um script comum, não uma caixa-preta"; está como prévia rumo ao SideFX Labs, não no lançamento principal [21]. Há terceiros no mesmo lugar: NodeArchitect (agente com MCP embutido para Houdini, vendido no Gumroad; só vi a listagem na busca, não abri).
- **Unreal Engine 5.8.** A Epic documenta o uso de um servidor MCP com o PCG no *City Sample*: duas habilidades, "geração de grafo PCG" e "definição de gramática de formas", e o aviso de que o prompt avançado exige entender o grafo "para conferir a qualidade do trabalho do LLM" [7].
- **Imagem → código 3D.** O img2threejs reconstrói o objeto de uma imagem como fábrica TypeScript de `THREE.Group`, em oito passes (blockout → estrutura → forma → material → superfície → luz → interação → otimização), com portões determinísticos em Python e revisão visual por passe; Apache 2.0, ~16,6 mil estrelas, v2.0 [2]. A vitrine da comunidade WebGPU (30/07/2026) atribui a autoria a Hoài Nhớ e o descreve como agnóstico de agente (Claude Code, Codex, OpenCode) [3]. O próprio projeto recusa pedidos de fidelidade que uma imagem não sustenta [2].
- **Pesquisa em 3D por código.** LL3M (ago/2025): multiagente escrevendo Python do Blender, com a representação "interpretável, legível, documentada" como argumento central [13]. ProcFunc (Princeton, abr/2026, revisto em 15/09/2026): biblioteca de funções procedurais em que VLMs criam código novo "com significativamente menos erros" [17]. Infinigen (CVPR 2023) é o precedente: mundos naturais inteiros por regra, sem aprendizado (visto só no resultado da busca, não aberto; fora da seção 11).
- **SVG e shader.** StarVector gera SVG a partir de imagem ou texto, treinado em 2 milhões de SVGs [14]. O shader-spec-eval, projeto individual, mede GLSL gerado por propriedades: 90,8% compilam, 67,5% passam em todas as propriedades; bordas nítidas são a falha mais comum [5].
- **Animação programática.** Manim tem 94,1 mil estrelas (MIT) [16]; um servidor MCP executa código Manim e devolve o vídeo (644 estrelas) [20].
- **O procedural maduro, como contexto.** WaveFunctionCollapse (25,3 mil estrelas), usado em Bad North, Caves of Qud, Townscaper e Matrix Awakens [19]; p5.js (24 mil estrelas, versão 2.0 em beta) [28]; Cavalry, motion design procedural, com plano gratuito e hoje da Canva [30]; Grasshopper, programação visual para Rhino desde 2007, padrão no Rhino desde a versão 6 [29].

### 3.2 O que existe e ainda não funciona

- **Precisão.** O P3D-Bench (jun/2026; 11 modelos gerais + 3 de domínio; JSON, OpenSCAD, CadQuery e Three.js) encontra alinhamento semântico ≈0,8 e precisão geométrica ≈0,35; o melhor modelo chega a ≈0,5 de PartMatchF1; CadQuery produz programa inválido com frequência; "programas que executam e renderizam de forma plausível ainda falham em recuperar a geometria paramétrica correta" [18].
- **Falhas típicas.** O 3DCodeBench (31/05/2026; 12 VLMs escrevendo Python do Blender 5.0; 212 categorias) aponta incompatibilidade de API como a maior causa de falha e, nos renders que dão certo, peças desconectadas ou flutuando; mais orçamento de raciocínio e refinamento em várias rodadas melhoram o resultado [1].
- **Geração em tempo de execução.** GROMIT (UIST 2024, melhor artigo) compila em Unity comportamento escrito por LLM durante a partida; em entrevistas com 13 desenvolvedores, as preocupações são qualidade, expectativa da comunidade e integração ao fluxo, e os autores pedem mais sistemas de proteção [31]. Não achei jogo comercial que faça isso.
- **Modelo de mundo em pixel.** O Project Genie (29/01/2026, Genie 3) gera mundos interativos em pixel, com limite de 60 s, disponível só para assinantes Ultra nos EUA, e com controle inconsistente [8]. É o polo oposto do tema: gera a experiência, não a regra.

### 3.3 Quem constrói

Fabricantes de ferramentas de criação (Blender Foundation, SideFX, Epic, Autodesk, Adobe, Canva/Cavalry); laboratórios de modelo (Anthropic com conectores; Google com Genie e com autores do 3DCodeBench); grupos acadêmicos (Princeton VL com Infinigen/ProcFunc; Chicago com LL3M; Berkeley com GROMIT); e a comunidade aberta (img2threejs, manim-mcp-server, WFC, p5.js, Arteprog).

### 3.4 Números de adoção

- 84% dos desenvolvedores usam ou pretendem usar IA; 50,6% dos profissionais usam todo dia; ~31% usam agentes com regularidade; 66% se frustram com soluções "quase certas" (Stack Overflow 2025) [11]. É população de desenvolvedor, não de designer.
- WebGPU: 87,35% de suporte global [15].
- Splat de uma cena interna com 4 milhões de gaussianas: 1,4 GB em PLY, 140 MB em SOG [9].
- Art Blocks, o precedente de "o código é a obra": script gravado on-chain, semente por token, 177 mil obras, US$ 1,4 bilhão em vendas até mai/2022 [27].
- **Proporção de designers de mídia que usam IA para escrever gerador: sem número encontrado.** O tamanho em bytes de um modelo do img2threejs também não foi encontrado; o "mil vezes mais leve" da descrição do tema não foi verificado.

### 3.5 Nota sobre o Brasil

Existe comunidade de programação criativa com lastro: a Noite de Processing em São Paulo (mensal desde 2018, Monica Rizzolli, Alexandre Villares, João Antônio Ferreira), o Processing Community Day SP 2020 da Arteprog [23], o encontro Compoética e um grupo no Telegram [24]. O custo pesa: Houdini Core custa US$ 1.995 e o FX, US$ 4.495 por licença fixa [6]; o Blender é gratuito. A hipótese deste mapa é que, no Brasil, a IA-autora-de-gerador chega pelo Blender e pelo navegador (Three.js, p5.js), não pelo Houdini. O inglês da API é barreira que a IA reduz: quem pede em português recebe código em Python. A classificação indicativa (ClassInd, Ministério da Justiça) é o regulador que encosta na raiz 3.

## 4. As disrupções-raiz

### 4.1 Raiz 1 — A IA escreve o gerador (script, grafo de nós, shader) que o humano recebe e possui

1. **O que rompe.** A divisão entre artista e técnico-diretor: o procedural deixa de exigir quem saiba a sintaxe do Houdini ou a API do Blender. Rompe também a suposição de que modelo gerado por IA é caixa-preta — o que sai é script legível, editável e sem dependência do modelo depois de gerado [21].
2. **Por que agora.** Três pré-condições de 2025–2026: modelos que escrevem programa gráfico que executa (LL3M, 3DCodeBench); o protocolo MCP adotado *oficialmente* pelas ferramentas (Blender Lab, SideFX, Epic) [4][7][21]; e laços de execução, render e crítica que corrigem o erro — o 3DCodeBench mostra que o refinamento em várias rodadas é o que melhora [1]. Há cinco anos, nenhuma das três existia.
3. **Onde está na difusão.** Entre **produto de nicho** e **adoção precoce**: conectores oficiais existem; a SideFX ainda está em prévia no Labs; não há número entre designers. Emergente.
4. **O que falta.** Precisão geométrica e por peça (≈0,35; ≈0,5) [18]; estabilidade de API entre versões [1]; guardas de execução [4]; um jeito de testar asset gerado que não seja olhar.

**Quem bloqueia.** Os fabricantes de suíte (Autodesk, Adobe, SideFX) têm incentivo para capturar o agente como recurso da suíte e prender o gerador ao próprio formato — efeito e5.

### 4.2 Raiz 2 — A mídia circula como programa: o gerador viaja, não o resultado

1. **O que rompe.** O pipeline de asset baseado em arquivo pesado e fechado (malha, textura, splat, vídeo), e a suposição de que distribuir mídia é transmitir dado. O objeto entregue é uma função com parâmetros, executada na GPU de quem recebe [2].
2. **Por que agora.** A IA baixou o custo de escrever o gerador — o que antes exigia um artista procedural por objeto passa a ser um passe de agente [2]; a WebGPU chegou a 87% de suporte [15]; e a mídia capturada ficou pesada (splat de 140 MB a 1,4 GB) [9], o que cria a tensão que dá sentido à alternativa leve. Procedural na web existe desde a demoscene, mas não na escala de "qualquer objeto a partir de uma foto".
3. **Onde está na difusão.** **Demo pública / produto de nicho**: galerias de demonstração, nenhum pipeline de produção documentado. Especulativo na parte de formato de distribuição; `confianca` alta proibida nos ramos de formato.
4. **O que falta.** Formato portátil de gerador (hoje, cada motor tem seu dialeto); determinismo entre GPUs; sandbox para rodar código alheio; aceitação da fidelidade estilizada [2]; preservação de longo prazo.

**Quem bloqueia.** Os donos de plataforma de execução (Apple, Google, lojas de console) e os comitês de padrão, que já fizeram isso duas vezes: o PostScript, linguagem Turing-completa, perdeu a distribuição para o PDF [25]; o Flash, formato de mídia programada instalado em mais computadores que qualquer outro em 2005, foi recusado no iOS em 2010 e desligado em 2020 [26]. Efeitos e8 e e8.1.

### 4.3 Raiz 3 — O gerador é escrito no momento do uso

1. **O que rompe.** O software como artefato fechado e testado antes da venda: mecânica de jogo, conteúdo e interface passam a ser código escrito quando o usuário chega [31]. Rompe o controle final do designer sobre o que existe no produto.
2. **Por que agora.** A latência e o custo de gerar código caíram a ponto de permitir compilar durante a partida (GROMIT, 2024) [31]; e o concorrente em pixel (Genie 3) tornou a pergunta "regra ou pixel?" concreta [8].
3. **Onde está na difusão.** **Laboratório / demo.** Especulativo: `confianca: baixa` em toda a cadeia, por regra.
4. **O que falta.** Guardas de segurança e de balanceamento [31]; política de loja que admita código gerado depois da certificação; modelo local rápido (tema 16); e a aceitação de quem joga.

**Quem bloqueia.** Lojas de console e de aplicativos, que certificam o binário; e classificadores etários (ESRB, PEGI, ClassInd), que classificam conteúdo conhecido. Efeitos e13 e e10.1.1.

### 4.4 Candidatos recusados como raiz

- *Geração procedural em jogos* (WFC, Townscaper, Houdini): recusado; adoção em maioria nos jogos desde os anos 2010 [19]; tratado como contexto.
- *Creative coding em Processing/p5.js*: recusado; maduro em seu nicho e no ensino desde 2001/2014 [28]; contexto.
- *Programação visual por nós* (Grasshopper, Geometry Nodes): recusado; padrão no Rhino desde a versão 6 [29]; contexto.
- *Assistente de código de IA em geral*: recusado aqui; 84% dos desenvolvedores [11]; pertence ao tema 1.
- *Gaussian splatting*: pertence ao tema 10; aparece só como concorrente em e6.1.
- *Modelos de mundo em pixel* (Genie): pertence aos temas 9 e 12; aparece como polo oposto em e11.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A IA escreve o gerador (script, grafo de nós, shader) que o humano recebe e possui
    efeitos:
      - id: e1
        ordem: 1
        efeito: O técnico-diretor deixa de ser o gargalo do procedural, porque o artista generalista pede o script ou o grafo ao agente e recebe um programa que roda sem o modelo
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O técnico-diretor passa de autor de ferramentas a revisor de geradores escritos por agente, lendo diffs e testando os limites dos parâmetros
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Estúdios tratam a biblioteca interna de funções procedurais canônicas que o agente compõe como o ativo competitivo, acima do acervo de assets
                sinal: medio
                prazo: 2042
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Some o degrau de entrada de modelador júnior, e com ele o caminho pelo qual se formava o técnico-diretor sênior que agora precisa auditar
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A sintaxe do Houdini e dos Geometry Nodes deixa de filtrar quem trabalha em procedural, e artistas sem formação em programação entregam geradores
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O grafo de nós perde a função de interface de autoria e fica como interface de leitura e inspeção do que o agente escreveu
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O defeito típico do asset gerado deixa de ser não rodar e passa a ser rodar errado, com peças flutuando e medidas imprecisas, e a conferência vira a etapa cara
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Ferramentas de criação incorporam testes de propriedade de asset (contagem de peças, simetria, estanqueidade, borda) rodando como integração contínua de arte
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O briefing de design passa a ser escrito como lista de propriedades verificáveis e vira o documento contratual entre cliente e estúdio
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O gerador escrito por IA entra antes e mais fundo na mídia, que tolera o quase-certo, do que no CAD de fabricação, que não tolera
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A mídia incorpora o erro do gerador como estética, e a distância de ferramenta e de formação entre design de mídia e design de produto aumenta
                sinal: fraco
                prazo: 2048
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Disciplinas de design de jogos e de mídia trocam o exercício de fazer o objeto pelo de escrever e restringir a regra, seguindo o caminho que a arquitetura fez com o Grasshopper
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O ateliê de sistemas visuais ocupa carga horária do ateliê de modelagem e ilustração em cursos de design, games e mídia digital
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A crítica de design passa a julgar o espaço de variação de um gerador, e não uma peça, e a banca avalia o que o gerador nunca produz
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: No creative coding, o valor de ter conseguido programar o efeito cai, porque o agente escreve o sketch e o shader, e o prestígio se desloca para a regra e a ideia
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Comunidades como OpenProcessing e Shadertoy marcam o que foi escrito à mão e criam desafios com restrição de tamanho ou sem IA, como prova de habilidade
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O código minúsculo escrito à mão vira gênero de prestígio, valorizado como a caligrafia depois da imprensa
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Coletivos de programação criativa como a Noite de Processing trocam o ensino de sintaxe pelo ensino de leitura crítica e modificação de gerador
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Em escolas públicas brasileiras, programação criativa entra como modificação de gerador pedido em português, contornando a barreira do inglês e da sintaxe
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Fabricantes de suíte de criação capturam o agente como recurso da própria suíte, e o gerador que o artista possui só roda dentro daquele formato e daquela licença
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Projetos abertos que emitem código portátil (Three.js, OpenSCAD, Python do Blender) ganham tração justamente por fugir do formato da suíte
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Um padrão neutro de gerador portátil é negociado, como o USD fez para a cena, ou fracassa e cada motor mantém seu dialeto
                sinal: fraco
                prazo: 2046
                confianca: baixa
  - disrupcao: A mídia circula como programa, e o gerador viaja no lugar do resultado
    efeitos:
      - id: e6
        ordem: 1
        efeito: Na web, objetos e cenários 3D passam a ser entregues como código executado na GPU do visitante em vez de malha ou splat de centenas de megabytes
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A disputa entre splat e gerador se resolve por papel, com captura para o que precisa ser fiel ao real e gerador para o que precisa ser editado, animado ou leve
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Codecs de mídia passam a procurar o programa que gera o conteúdo em vez de codificar pixels, e o arquivo vira código mais resíduo
                sinal: fraco
                prazo: 2052
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Óculos de XR, limitados em bateria e banda, preferem geradores, e a estética procedural estilizada volta a dominar ambientes imersivos
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Mundos com cara de regra viram marca visual de uma época, como o pixel art dos anos 1980
                sinal: fraco
                prazo: 2055
                confianca: baixa
          - id: e6.3
            ordem: 2
            efeito: Trocar transferência por computação desloca o gasto de energia da rede e do data center para o aparelho de quem recebe a cena
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e6.3.1
                ordem: 3
                efeito: Fabricantes de óculos e celulares expõem um orçamento de computação por cena, e geradores passam a ser otimizados por energia como hoje se otimiza por peso
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Lojas de asset passam a vender geradores parametrizáveis em vez de modelos fixos, e o asset deixa de ser arquivo para ser função
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A cobrança por download dá lugar à licença do espaço de variação, com restrição sobre quais saídas e sementes o comprador pode usar
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Tribunais têm de decidir se a saída de um gerador alheio é a obra, e o código passa a ser protegido como texto enquanto as saídas ficam em zona cinzenta
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Como o gerador é código legível, um estilo procedural é copiado em minutos por quem lê e reescreve o código, e a vantagem de estilo dura menos
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Estúdios passam a distribuir geradores compilados ou ofuscados, abrindo mão da legibilidade que era a vantagem do formato
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Rodar código gráfico alheio na máquina de quem recebe vira problema de segurança, e plataformas passam a exigir sandbox e assinatura para geradores
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Donos de plataforma só admitem geradores em linguagem declarativa restrita, repetindo a passagem do PostScript para o PDF
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A expressividade do gerador distribuído passa a ser definida por comitê de padrão, e a arte de programa mais radical volta a circular fora das lojas
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Preservar mídia feita por gerador passa a exigir preservar o ambiente de execução, como já acontece com o Flash no Ruffle e no Flashpoint
        sinal: medio
        prazo: 2040
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Obras procedurais geradas contra uma versão de API deixam de rodar quando a ferramenta muda, e congelar gerador, versão do motor e semente vira prática de entrega
            sinal: fraco
            prazo: 2045
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Acervos de mídia como cinematecas e o Internet Archive mantêm emuladores de motores gráficos como parte do acervo
                sinal: fraco
                prazo: 2054
                confianca: baixa
  - disrupcao: O gerador é escrito no momento do uso, quando o jogador ou usuário chega
    efeitos:
      - id: e10
        ordem: 1
        efeito: Jogos passam a compilar mecânica escrita por IA durante a partida, e o designer deixa de definir o conjunto fechado de regras para definir o que pode ser gerado
        sinal: medio
        prazo: 2038
        confianca: baixa
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Teste e balanceamento viram monitoramento contínuo em produção, com agentes-jogadores exercitando um código que nenhum humano leu
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: ClassInd, ESRB e PEGI passam a certificar o limitador do gerador em vez do conteúdo, porque o conteúdo é escrito depois da venda
                sinal: fraco
                prazo: 2052
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Guias, speedrun e wikis de jogo perdem o objeto comum, porque cada jogador tem mecânicas diferentes
            sinal: fraco
            prazo: 2045
            confianca: baixa
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Jogadores passam a trocar sementes e geradores, e o jogo vira plataforma de troca de regras entre eles
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: O conteúdo interativo gerado se divide entre mundo sonhado em pixel, opaco e sem estado, e mundo escrito em código, persistente e com regra explícita
        sinal: medio
        prazo: 2035
        confianca: baixa
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Sistemas híbridos usam o modelo de mundo para a aparência e um gerador de código para o estado e a regra, que vira o esqueleto auditável sob a pele gerada
            sinal: fraco
            prazo: 2042
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Em disputa de e-sport, aposta ou simulação, o que aconteceu de fato só é demonstrável na camada de código, e o pixel perde valor de prova
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Aplicativos geram o componente de interface em código para a tarefa de cada usuário, e o designer de interação entrega sistema de design e restrições em vez de telas
        sinal: fraco
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Design systems viram gramáticas executáveis lidas por agentes e passam a ser testados como código
            sinal: fraco
            prazo: 2045
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Acessibilidade passa a ser garantida pela gramática, ou falha em escala, porque um erro nela aparece em milhões de telas únicas que ninguém testou
                sinal: fraco
                prazo: 2052
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: Lojas de console e de aplicativos limitam código gerado e executado depois da certificação, freando a geração em tempo de execução fora do PC e da web
        sinal: fraco
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A geração em tempo de execução fica restrita a linguagens interpretadas e isoladas aprovadas pelo dono da plataforma
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O navegador vira o principal palco de jogos e mídias escritos em tempo de execução, por ser a plataforma sem certificação prévia
                sinal: fraco
                prazo: 2048
                confianca: baixa
```

### 5.1 Os mecanismos, raiz por raiz

**Raiz 1.**
- **e1** — porque o agente devolve script comum, sem dependência do modelo depois de gerado [21], o trabalho de traduzir a intenção do artista em Apex Script ou em grafo PCG deixa de passar pelo técnico-diretor. `sinal` forte: três artefatos — Blender Lab MCP [4], Houdini Apex Script Comfort Package [21], Unreal 5.8 PCG+MCP [7]. Classe de referência para o prazo: assistentes de código foram de demo pública (2021) a 50,6% de uso diário entre profissionais em 2025 [11], ~4 anos; mas a população de artistas técnicos adota ferramenta mais devagar que a de desenvolvedores (Grasshopper levou de 2007 até o Rhino 6 para virar padrão, ~10 anos [29]). Média das duas: 2030.
- **e1.1** — porque a Epic já escreve que prompt avançado exige entender o grafo "para conferir a qualidade do trabalho do LLM" [7], quem entende o grafo passa a gastar o tempo conferindo. Sinal médio: um artefato.
- **e1.1.1** — porque o ProcFunc mostra que biblioteca de funções procedurais reduz os erros do VLM [17], o estúdio que tem a biblioteca melhor tem o agente melhor; o valor migra do asset para a primitiva. Troca de ator (estúdio como organização) e de mecanismo (ativo competitivo).
- **e1.1.2** — porque o degrau de entrada (modelar à mão, peça por peça) é o que o agente faz primeiro, o júnior não acumula o repertório que o e1.1 exige do sênior. Efeito de quem perde. Sinal fraco: inferência.
- **e1.2** — porque o pedido em linguagem natural substitui a sintaxe, o filtro de entrada do Houdini deixa de ser a sintaxe. Precedente: o Grasshopper se popularizou por permitir "explorar desenhos sem aprender a programar" [29].
- **e1.2.1** — porque quem não escreveu o grafo ainda precisa entendê-lo, o grafo sobrevive como vista de leitura. Troca de função, não de popularidade: por isso é outra ordem.
- **e2** — retroação. Porque os três benchmarks convergem — 3DCodeBench (peças flutuando, API errada) [1], P3D-Bench (0,35 de geometria com 0,8 de semântica) [18], shader-spec-eval (67,5% passam, bordas falham) [5] —, o gargalo sai da escrita e vai para a conferência. `sinal` forte (três artefatos); prazo 2028 porque já é o estado de hoje. É o único efeito com confiança alta, e está na 1ª ordem.
- **e2.1** — porque conferir a olho não escala, as ferramentas adotam o método que o shader-spec-eval já usa (propriedade mensurável em vez de comparar pixel) [5]. Sinal médio.
- **e2.1.1** — porque o teste de propriedade é também uma especificação, o briefing vira o teste. Troca de ator: o cliente.
- **e2.2** — porque na mídia o "quase certo" passa e na fabricação não (CadQuery gera programa inválido com frequência) [18], a adoção se bifurca por setor.
- **e2.2.1** — porque a mídia aceita o erro e a engenharia exige solver, as duas culturas de ferramenta se separam. Fraco.
- **e3** — porque o designer que pede ao agente precisa saber especificar e restringir, o exercício de ensino muda. O ator nomeado são as disciplinas de design de jogos e de mídia (a CIN0055 incluída) e o precedente nomeado é a arquitetura com o Grasshopper [29]. Classe de referência: Grasshopper, de 2007 até padrão de ensino em ~10 anos; aplicada a partir de 2026, 2036.
- **e3.1** — porque a carga horária é fixa, o ateliê de sistemas entra ocupando o de modelagem. Fraco.
- **e3.1.1** — porque o objeto de avaliação passa a ser o gerador, a crítica avalia o espaço de variação, incluindo o que ele não produz.
- **e4** — porque o agente escreve o sketch e o shader (manim-mcp-server [20], shader-spec-eval [5]), a habilidade de programar deixa de ser distintiva no creative coding. Sinal médio: dois artefatos.
- **e4.1** — porque o prestígio precisa de prova, a comunidade cria restrição que o agente não satisfaz ou que se possa verificar. Fraco: não achei regra desse tipo publicada.
- **e4.1.1** — porque a restrição vira forma, o gênero ganha valor por ser feito à mão. Fraco.
- **e4.2** — porque o participante chega com código gerado, o coletivo passa a ensinar a lê-lo. Ator nomeado: Noite de Processing/Arteprog [23].
- **e4.2.1** — porque o pedido em português substitui a sintaxe em inglês, a barreira de entrada no Brasil cai. Troca de ator: escola pública.
- **e5** — quem bloqueia. Porque os conectores oficiais saíram primeiro dentro das suítes (Adobe, Autodesk Fusion, SketchUp) [10] e o MCP da SideFX é do próprio Houdini [21], o agente chega como recurso da suíte. Sinal forte: três artefatos.
- **e5.1** — porque o formato da suíte prende, o que é portátil (img2threejs, Apache 2.0, TypeScript) [2] vira a alternativa. Sinal médio.
- **e5.1.1** — porque o portátil precisa de padrão para sair do nicho, a questão é padronizar ou fragmentar. Fraco.

**Raiz 2.**
- **e6** — porque o gerador é texto e roda na GPU do visitante (WebGPU a 87,35% [15]), entregar código custa menos banda do que entregar um splat de 140 MB [9]. Sinal médio: galeria do img2threejs [2] e vitrine da WebGPU [3]. Classe de referência: a própria WebGPU (lançada no Chrome em 2023, 87% de suporte em 2026) mede só o suporte; o formato do conteúdo muda mais devagar que o navegador — o SVG levou mais de uma década entre a especificação e o uso comum. Prazo 2032.
- **e6.1** — porque o Houdini 22 lançou splat e procedural na mesma ferramenta [6], a coexistência por função já está no produto. Sinal médio.
- **e6.1.1** — porque achar o programa que gera uma imagem é o que o StarVector faz para SVG [14] e o img2threejs para objeto [2], a mesma operação aplicada a vídeo seria compressão. Fora do alcance técnico visível; fraco.
- **e6.2** — porque bateria e banda limitam o óculos, a forma leve ganha. Mecanismo plausível e sem sinal: fraco.
- **e6.2.1** — porque a geração que cresce vendo a forma a guarda como marca de época.
- **e6.3** — ecológico. Porque transferir menos e calcular mais é uma troca, a energia muda de lugar em vez de sumir. Fraco: não achei medição.
- **e6.3.1** — porque o gasto passa para o aparelho, o fabricante precisa expô-lo.
- **e7** — porque o img2threejs entrega uma "função fábrica" [2] e o Houdini Digital Asset já era um gerador vendável, a loja de asset tem com o que vender geradores. Sinal médio.
- **e7.1** — porque o gerador produz infinitas saídas, cobrar por arquivo perde sentido.
- **e7.1.1** — porque o USCO entende que prompt sozinho não dá autoria, mas seleção e arranjo podem dar [12], a saída de um gerador escrito por IA fica em zona cinzenta, enquanto o código escrito por humano é texto protegido. Troca de ator: tribunal.
- **e7.2** — porque o código é legível, a imitação fica barata. Fraco.
- **e7.2.1** — retroação contra a própria raiz: para proteger o estilo, o estúdio fecha o código.
- **e8** — retroação. Porque o próprio Blender Lab avisa que o servidor executa código do LLM sem guardas [4] e o Flash caiu em parte por segurança [26], distribuir programa tem custo de segurança. Sinal médio.
- **e8.1** — porque o precedente existe duas vezes (PostScript → PDF [25]; Flash recusado no iOS [26]), o dono da plataforma prefere formato declarativo. Troca de ator: plataforma.
- **e8.1.1** — porque o padrão declarativo é decidido em comitê, o limite expressivo sai da mão do artista.
- **e9** — porque obra que é programa só existe enquanto roda, preservar exige emulador; o Flashpoint guarda mais de 160 mil aplicações Flash [26]. Sinal médio: dois artefatos (Ruffle e Flashpoint), ambos de outra geração de mídia programada.
- **e9.1** — porque a incompatibilidade de API já é a falha principal do 3DCodeBench [1], a mesma falha, com o tempo, torna obra antiga irreproduzível.
- **e9.1.1** — porque a obra depende do motor, o acervo precisa guardar o motor. Troca de ator: instituição de memória.

**Raiz 3** (toda a cadeia com `confianca: baixa`, por ser laboratório).
- **e10** — porque o GROMIT compila comportamento escrito por LLM durante a partida [31], a regra do jogo deixa de ser fechada na entrega. Sinal médio: GROMIT, e o PCG do Unreal com MCP [7] como meia-prova (geração no editor, não na partida). Classe de referência: VR de consumo, mais de dez anos de demo sem chegar a 10% — tecnologia que exige ferramenta nova e aceitação cultural nova. Prazo 2038.
- **e10.1** — porque nenhum humano leu o código da partida, o teste vira monitoramento. Os entrevistados do GROMIT pedem justamente proteções [31].
- **e10.1.1** — porque o classificador classifica conteúdo conhecido, conteúdo escrito depois da venda o obriga a classificar o limitador. Reguladores nomeados.
- **e10.2** — porque cada jogador tem mecânica própria, o conhecimento coletivo sobre o jogo perde o objeto.
- **e10.2.1** — porque o gerador é compartilhável, a troca de regra substitui o guia.
- **e11** — porque o Genie 3 gera pixel sem regra explícita e com limite de 60 s [8] e o GROMIT gera regra [31], as duas vias existem hoje em laboratório.
- **e11.1** — porque o pixel não guarda estado confiável e o código não tem aparência rica, a combinação usa cada um no que faz.
- **e11.1.1** — porque só o código é auditável, a prova migra para ele.
- **e12** — porque o mesmo mecanismo do GROMIT se aplica a interface, a tela deixa de ser desenhada antes. Sinal fraco: não abri fonte de interface gerada nesta rodada (satori e Remotion, trazidos pela turma, geram imagem e vídeo a partir de código, mas não por usuário).
- **e12.1** — porque o agente precisa de regra para compor, o design system vira gramática testável. Converge com e2.1.
- **e12.1.1** — porque um erro na gramática se replica em cada tela gerada, acessibilidade vira propriedade do sistema.
- **e13** — quem bloqueia. Porque lojas certificam binário e o precedente do iOS com o Flash [26] mostra o dono da plataforma recusando mídia programada, a geração em tempo de execução encontra a loja como porteiro. Sinal fraco: não abri a regra atual de loja nesta rodada.
- **e13.1** — porque a loja admite o que pode isolar, o gerador fica restrito a linguagem isolada.
- **e13.1.1** — porque o navegador não certifica, ele recebe o que as lojas recusam.

### 5.2 Regra de parada

Não derivei 4ª ordem em nenhum ramo. Em e6.2.1 → "a estética volta como nostalgia em 2070" seria o mesmo efeito amadurecendo, sem troca de ator. Em e1.1.2 → "falta de sêniores em 2060" é o mesmo mecanismo mais adiante. Parei por isso.

### 5.3 Cobertura STEEP e quem perde

- Social: e3, e4, e10.2. Tecnológico: e1, e2, e6, e11, e12. Econômico: e5, e7. **Ecológico: e6.3** (fraco; categoria quase vazia, registrada). Político: e8, e13, e10.1.1.
- **Quem perde:** técnico-diretor como autor (e1.1); modelador júnior (e1.1.2); quem vive de ter conseguido programar o efeito (e4); lojas de asset por download (e7.1); estúdios de estilo (e7.2); comunidades de conhecimento sobre jogos (e10.2); quem depende de acessibilidade (e12.1.1, risco); acervos (e9.1).

### 5.4 Cruzamentos

- **Convergência 1 — o controle da execução.** e5 (suíte prende o gerador), e8.1 (plataforma restringe a linguagem) e e13 (loja barra código depois da certificação) partem de raízes diferentes e chegam ao mesmo efeito de 2ª ordem: **quem decide onde o código roda decide o que o gerador pode ser**. É o achado mais forte do mapa: o gargalo do tema não é o modelo, é o ambiente de execução.
- **Convergência 2 — especificação como teste.** e2.1 (testes de propriedade de asset) e e12.1 (design system como gramática testável) chegam ao mesmo lugar por caminhos diferentes: o documento de design passa a ser executável. e2.1.1 e e3.1.1 são a consequência no contrato e na formação.
- **Retroalimentação positiva.** e6.1.1 (codecs procuram o programa) produz pares imagem–programa em escala, que são o dado de treino que falta à raiz 1 (os 2 milhões de SVGs do StarVector [14] são o exemplo pequeno). O ciclo: mais geradores → mais dado → melhores autores de gerador.
- **Retroalimentação negativa.** e7.2.1 (ofuscar o gerador para proteger o estilo) desmonta a legibilidade, que é a vantagem da raiz 2 e o argumento da raiz 1 ("script comum, não caixa-preta"). Se o mercado premiar a proteção, o gerador volta a ser caixa-preta, agora em forma de bytecode.
- **Contradição.** e6.2 (a estética procedural volta a dominar o XR) contra e11.1 (pele em pixel sobre esqueleto de código). Não coexistem como tendência dominante. Decide entre elas o custo de renderização neural no dispositivo: se cair a ponto de rodar em óculos com bateria de um dia, e11.1 vence e a estética procedural fica invisível sob a pele; se não cair, e6.2 vence.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

1. **O gerador medido em tokens.** O img2threejs vende eficiência de token como argumento de projeto: validação em Python determinístico, token só "onde o julgamento é necessário" [2]. *O que mudaria:* se o custo passa a ser contado em token e não em hora de artista, o preço de um asset vira preço de inferência. *Observável:* lojas de asset ou estúdios cotando geradores em custo de inferência.
2. **"Sem dependência do LLM depois de gerado."** A frase da SideFX [21] separa o gerador escrito por IA do modelo generativo como serviço. *O que mudaria:* se a propriedade do artefato vira argumento de venda, a raiz 1 ganha o mercado profissional antes do de consumo. *Observável:* a prévia do Apex Script entrar no Houdini estável e aparecer em contrato de estúdio como requisito.
3. **A IA dirigindo ferramenta de animação matemática.** manim-mcp-server (644 estrelas) [20]. *O que mudaria:* a explicação visual programada (Manim tem 94,1 mil estrelas [16]) pode virar o formato padrão de vídeo didático gerado — um vídeo que é código, reeditável. *Observável:* plataformas de ensino aceitando envio de cena Manim em vez de MP4.
4. **Biblioteca que reduz o erro do agente.** ProcFunc: VLMs erram menos quando compõem funções prontas [17]. *O que mudaria:* o gargalo técnico de e2 cairia por biblioteca, não por modelo maior. *Observável:* benchmarks como o 3DCodeBench com trilha "com biblioteca" superando a trilha "modelo maior".

### 6.2 Wildcards

1. **O motor de jogo em que o conteúdo é escrito como código quando o jogador chega** (proposto pela disciplina). *Mecanismo:* modelo local rápido o bastante (tema 16) + biblioteca canônica (e1.1.1) + sandbox aceita pela plataforma (contrário de e13). *Por que é improvável:* exige três condições que dependem de atores diferentes, e a loja é contra. *O que faria com o mapa:* a raiz 3 sairia do laboratório de uma vez; e10 e e10.1.1 chegariam uma década antes; e13 viraria o efeito derrotado. *Sinal precoce:* um jogo comercial em console aprovado com geração de código em tempo de execução declarada na página da loja.
2. **O worm do gerador.** *Mecanismo:* o servidor MCP do Blender executa código sem guardas [4]; arquivos com script embutido circulam entre estúdios; um código malicioso escondido num gerador compartilhado se espalha por pipelines. *Por que é improvável:* ferramentas já pedem permissão para scripts automáticos, e estúdios isolam redes. *O que faria:* e8 viraria regra de uma vez, e5 ganharia (a suíte fechada como garantia de segurança), a raiz 2 recuaria uma década. *Sinal precoce:* um CVE de execução de código em arquivo .blend ou .hda com circulação real.
3. **Um tribunal protege o espaço de variação como obra.** *Mecanismo:* uma decisão aceita que a regra, e não as saídas, é a expressão protegida — o contrário da leitura atual [12]. *Por que é improvável:* o direito autoral protege expressão, não método. *O que faria:* e7.1 e e7.1.1 inverteriam: o gerador vira propriedade forte, e a cópia de e7.2 vira infração. *Sinal precoce:* um caso sobre obra do Art Blocks ou de gerador de loja de asset chegando a instância superior.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem: é 2056 e este mapa errou. Por quê?

1. **O pixel venceu por completo.** Modelos de mundo e de vídeo ficaram baratos no dispositivo, e ninguém precisou de regra: o gerador de pixel se tornou editável por prompt, e a legibilidade do código deixou de importar para quem projeta mídia. Atinge a raiz 2 inteira (e6, e7) e e11. *Ação:* e6.1 mantido como média, mas e6.2 (estética procedural domina o XR) já está baixa e ganhou a contradição da seção 5.4; e11 tinha sinal médio e ficou, porque o próprio Genie é um dos artefatos.
2. **A regra ficou na suíte.** A convergência 1 foi mais forte do que o mapa admite: geradores só existem dentro das suítes e das lojas, e a "mídia que circula como programa" nunca saiu das galerias de demonstração. Atinge e6 e e5.1. *Ação:* e6 teve o prazo empurrado (registro abaixo).
3. **A imprecisão não foi resolvida.** Os 0,35 de precisão geométrica ficaram em torno de 0,6, e a conferência humana continuou mais cara do que modelar à mão para objetos específicos. Atinge e1 e e7. *Ação:* e1 fica em média; e7 fica em média, com sinal médio.

### 7.2 Extrapolação linear

- **e1** ("o TD deixa de ser gargalo") é, em parte, "mais IA, mais rápido". Ganhou o mecanismo não linear em e1.1.2: a perda do degrau de formação produz falta de auditores, o que *freia* o próprio e1 — é um limite, não mais do mesmo.
- **e6** ("entrega como código") era linear no rascunho ("mais leve, então mais usado"). O mecanismo não linear é a restrição de plataforma (e8.1) — a adoção não cresce suavemente, ela bate num porteiro.
- **e4.1.1** (código à mão vira caligrafia) é analogia, não mecanismo. Mantido com baixa, e marcado aqui.

### 7.3 Velocidade de adoção

- **e6:** no rascunho, prazo 2029. A classe de referência (formato de conteúdo web; SVG levou mais de uma década entre especificação e uso comum) não sustenta três anos. Empurrado para 2032.
- **e10:** no rascunho, 2032. O GROMIT é de 2024 e está em laboratório; a referência de VR de consumo (mais de dez anos sem chegar a 10%) pede mais. Empurrado para 2038.
- **e6.2:** no rascunho, 2034. Depende de óculos de XR em adoção, que não aconteceu em dez anos. Empurrado para 2040.
- **e13:** no rascunho, 2030. Nenhuma loja publicou restrição específica que eu tenha aberto. Empurrado para 2032.

### 7.4 A raiz que não acontece

- **Sem a raiz 1:** a raiz 2 perde a razão de "por que agora" (o gerador continuaria caro de escrever) e volta a ser a demoscene. A raiz 3 cai junto. **Isto é um aviso:** o mapa depende fortemente da raiz 1; as raízes 2 e 3 são independentes em ator (plataforma, jogo), mas não em pré-condição. Declarado, não disfarçado.
- **Sem a raiz 2:** sobra a raiz 1 inteira dentro das suítes (o cenário provável da seção 9), e e9 perde metade do sentido.
- **Sem a raiz 3:** sobram as raízes 1 e 2; perde-se a camada de interação em tempo real, e e12 some.

### 7.5 Suposições escondidas

1. **As ferramentas continuam expondo a API ao agente.** Se a Adobe ou a Autodesk fecharem o MCP para parceiro único, e1 vira e5. Não vira wildcard novo: já é e5.
2. **Modelos continuam bons em código gráfico sem regressão.** O 3DCodeBench mostra que o gargalo é a API [1]; se as APIs mudarem mais depressa que os modelos aprendem, e2 piora. Coberto por e9.1.
3. **O código gerado por IA continua sem proteção autoral forte.** É a leitura do USCO em 2025 [12]; virou o wildcard 3.
4. **Energia do aparelho continua cara em relação à banda.** Premissa de e6.2 e e6.3; se inverter, e6.2 cai.
5. **O navegador continua sem certificação prévia.** Premissa de e13.1.1. Se o navegador passar a exigir assinatura de código (há pressão de segurança, e8), o último palco fecha.

### 7.6 Viés do autor

O autor (e esta máquina) gosta de mídia programada, que é legível e ensina. Os efeitos que estão aqui por gosto: **e4.1.1** (o código à mão como caligrafia) e **e3.1.1** (a crítica avalia o espaço de variação) são desejáveis para quem ensina creative coding e não têm sinal. Ficaram com baixa e estão marcados. **e6.2** (estética procedural domina o XR) também é gosto; ganhou a contradição da seção 5.4.

### 7.7 O falseador do briefing

- *A adoção já passou da maioria inicial (Rogers)?* Entre desenvolvedores, o uso de IA sim (84% [11]); o uso de **agentes**, não (~31% [11]); e entre designers de mídia escrevendo geradores não há número. As ferramentas oficiais estão em prévia (SideFX) ou recém-lançadas (Blender Lab, Unreal 5.8). **Não passou.** Mantido como emergente.
- *A tecnologia só melhora o que existe?* Para o técnico-diretor, melhora (escreve mais rápido). Para o artista generalista, rompe o filtro de entrada (e1.2). Para o formato de distribuição, rompe a suposição de que mídia é dado (raiz 2). **O teste passa para as raízes 1 e 2 e passa com reservas para a 3** (que é especulativa).

### 7.8 Calibração

| ordem | alta | média | baixa | total |
|---|---|---|---|---|
| 1 | 1 | 8 | 4 | 13 |
| 2 | 0 | 6 | 14 | 20 |
| 3 | 0 | 0 | 21 | 21 |

A confiança cai com a ordem. Nenhum efeito de 3ª ordem com confiança alta ou média.

### 7.9 Registro de alterações

- e8: `confianca` alta → media, porque o precedente (Flash) levou de 2010 a 2020 para que a segurança derrubasse o formato [26]; o freio é real, mas lento.
- e6: `prazo` 2029 → 2032, porque a classe de referência de formato web (SVG) levou mais de uma década.
- e10: `prazo` 2032 → 2038, porque o GROMIT (2024) está em laboratório e a referência de VR de consumo pede mais de dez anos.
- e6.2: `prazo` 2034 → 2040, porque depende de óculos de XR em adoção, que não aconteceu.
- e13: `prazo` 2030 → 2032, e `sinal` medio → fraco, porque não abri regra de loja atual.
- e12: `sinal` medio → fraco, porque nenhuma fonte sobre interface gerada por usuário foi aberta nesta rodada.
- e1.2.1: `confianca` media → baixa, porque é 3ª ordem e o sinal é só inferência.
- e3.1: `confianca` media → baixa, porque não achei curso de design com esse ateliê documentado.
- e11: `sinal` forte → medio, porque GROMIT e Genie são laboratório/demonstração restrita, não caso real de uso.
- **Removido** "e3.2 — surge a profissão de engenheiro de prompt procedural" (vai para a seção 12): efeito proibido sem ator e mecanismo específicos; o que ele dizia já está em e1.1.
- **Removido** "e7.3 — o mercado de NFT de gerador volta com IA" (vai para a seção 12): falha no teste da causa solta; o Art Blocks existiu sem IA [27], e um retorno teria causa financeira, não esta raiz.
- **Removido** "e10.3 — jogadores perdem interesse em jogos fixos" (vai para a seção 12): efeito genérico, serve para qualquer tecnologia de personalização.

Cota por raiz cumprida: raiz 1 (e1.2.1, e3.1 rebaixados; e3.2 removido), raiz 2 (e8 rebaixado; e6, e6.2 empurrados; e7.3 removido), raiz 3 (e10, e13 empurrados; e12, e11 rebaixados; e10.3 removido).

## 8. O que a máquina errou

1. **O "85% de sucesso" do GROMIT.** O número apareceu no resumo da ferramenta de busca, mas as duas páginas que tentei abrir (ACM, 403; PDF, grande demais) não carregaram, e a página que abri não traz o número. Fica fora do texto. Eu quase o usei no mecanismo de e10.
2. **"Mil vezes mais leve."** A descrição do tema compara o 3D procedural ao splat e diz "mil vezes mais leve". Não achei o tamanho de um modelo do img2threejs; o que abri dá só o lado do splat (140 MB a 1,4 GB [9]). A comparação de peso em e6 é inferência a partir de o gerador ser texto, não medida. O experimento da seção 10 existe em parte para medir isso.
3. **Resumos intermediados.** Todos os números (16,6 mil estrelas, 0,35/0,8/0,5, 90,8%/67,5%, 87,35%) passaram por um modelo menor que resume a página. Os que pesam no mapa (P3D-Bench, 3DCodeBench) vieram do resumo do artigo, não da tabela. Pode haver erro de transcrição.
4. **Uma contradição entre fontes que resolvi, talvez mal.** A CG Channel diz que o Houdini 22 não traz recursos de IA [6]; a Jon Peddie Research descreve o MCP no keynote [21]. Conciliei como "prévia no Labs, fora do lançamento". É a leitura mais provável, mas é minha.
5. **Classes de referência de memória.** "SVG levou mais de uma década" e "VR de consumo, mais de dez anos sem 10%" são de memória; não abri fonte nesta rodada. Os outros precedentes (PostScript, Flash, Grasshopper) foram abertos [25][26][29].
6. **A autoria do img2threejs.** A vitrine da WebGPU atribui a Hoài Nhớ [3]; a busca mostrou também um repositório em outra conta (fraaalk/img2threejs). Não verifiquei qual é o original.
7. **O Unreal "5.8".** A documentação da Epic diz 5.8 [7]; não conferi a data de lançamento dessa versão.
8. **Mecanismo fraco em e4.1.1 e e6.2.1.** Os dois são analogias históricas (caligrafia, pixel art) e não têm mecanismo causal forte. Plausíveis, estão em baixa, e são os primeiros candidatos a sair numa revisão.

## 9. Três cenários para 2056

**Provável.** Em 2056, quase todo asset procedural de estúdio é escrito por agente e conferido por gente. O técnico-diretor é um revisor com bateria de testes de propriedade; o briefing é uma lista de propriedades que o gerador precisa satisfazer. O gerador vive dentro das suítes, que cobram assinatura pelo agente e pelo formato; o padrão portátil saiu pela metade, aceito na web e ignorado nos consoles. Na web e no XR, objetos estilizados chegam como código, e o que precisa ser fiel chega como captura. A geração em tempo de execução existe em PC e navegador; nas lojas, só em linguagem declarativa. Cursos de design e de games têm um ateliê de sistemas visuais obrigatório, e a queixa recorrente dos estúdios é a falta de sêniores capazes de auditar. *Sinal precoce:* entre 2027 e 2030, o Apex Script da SideFX sai da prévia e entra no Houdini estável, e a Adobe lança formato próprio de gerador para o Creative Cloud.

**Desejável.** Em 2056, a regra é um formato público. Existe um padrão neutro de gerador, adotado pela web e pelos motores, com sandbox que as lojas aceitam; a obra procedural de 2030 ainda roda porque o acervo guarda o motor junto. Quem projeta mídia escreve restrições e avalia espaços de variação; o júnior aprende modificando gerador canônico, não modelando à mão, e continua virando sênior. No Brasil, a programação criativa chegou à escola pública como leitura e modificação de gerador pedido em português. *O que teria que ser feito:* um consórcio (Khronos, W3C, Blender Foundation) padronizar o gerador portátil antes de 2040; acervos adotarem emulação como política; cursos manterem um degrau de trabalho à mão. *Sinal precoce:* um grupo de trabalho da Khronos ou do W3C para geradores procedurais, com participação de pelo menos um motor comercial.

**Indesejável.** Em 2056, o gerador voltou a ser caixa-preta. Para proteger o estilo, estúdios distribuem bytecode ofuscado; para proteger o usuário, lojas só admitem linguagens declarativas definidas por comitê; o pixel gerado por modelo de mundo venceu no consumo, e a regra ficou só como esqueleto invisível que ninguém lê. A geração de técnicos formados à mão se aposentou, e ninguém a substituiu: os geradores de 2030 não rodam mais, e quem saberia consertá-los não existe. *Sinal precoce:* entre 2028 e 2032, um incidente de segurança com gerador compartilhado (wildcard 2) seguido de restrição de loja; e a primeira loja de asset que vende gerador compilado sem código.

## 10. O experimento

**O que é.** "Gerador contra arquivo." A turma escolhe cinco objetos do cotidiano (uma luminária, uma xícara, uma bicicleta, uma cadeira, um fone). Para cada um, uma foto vira duas versões: (a) código Three.js procedural gerado pelo img2threejs com um agente; (b) malha ou splat gerado por uma ferramenta de imagem→3D ou por captura com celular. As duas vão para uma página web lado a lado.

**Que pergunta responde.** Para quem projeta mídia e interação, a editabilidade do gerador vale mais do que a fidelidade da captura? E quão mais leve o gerador é de fato (a comparação que a seção 8 não conseguiu verificar)?

**Que tecnologia emergente usa, e por que não dá com a madura.** O img2threejs com agente (raiz 1) e a entrega como código na GPU do visitante via WebGPU/WebGL (raiz 2). Com a tecnologia madura (modelar à mão no Blender, ou fotogrametria), o gerador de cada objeto custaria dias de um artista procedural; o experimento mede justamente o que muda quando esse custo cai para um passe de agente.

**O que a turma faz em sala.** Três medidas por objeto. (1) Bytes transferidos e tempo até o primeiro quadro no celular de cada um. (2) Uma tarefa de edição sorteada ("alongue a alça", "anime a tampa", "troque o material para latão"): metade da turma faz na versão código, pedindo ao agente ou editando à mão; metade faz na versão arquivo, no Blender; cronometra. (3) Julgamento cego de fidelidade: "qual se parece mais com a foto?" e "qual você usaria numa peça interativa?".

**O que me faria mudar de ideia.** Se a edição na versão arquivo for tão rápida quanto na versão código em pelo menos três dos cinco objetos, **ou** se a turma julgar a fidelidade do gerador inaceitável para uso em mais de 70% dos julgamentos, a raiz 2 perde a razão prática: o ganho de editabilidade não compensa, e e6/e7 devem cair uma ordem de confiança. Se a diferença de bytes for menor que 10×, o argumento do peso (e6, e6.2) cai.

## 11. Fontes

1. https://arxiv.org/abs/2606.01057 — *3DCodeBench* (Gao, Shu, Ye, Xiong, Makadia, Guo, Itti, Chen; 31/05/2026): 12 VLMs escrevendo Python do Blender; falhas por API e peças flutuando; refinamento em várias rodadas melhora; 3DCodeArena. Sustenta 3.2, 4.1, e2, e9.1, 7.5. Preprint recente, sem revisão por pares; autores de laboratório de grande empresa e universidade.
2. https://github.com/img2threejs/img2threejs — repositório do img2threejs: oito passes, portões determinísticos, eficiência de token, Apache 2.0, ~16,6 mil estrelas, v2.0, limites declarados. Sustenta 3.1, 4.2, e5.1, e6, e7, sinal fraco 1, seção 10. Fonte primária do projeto; alegações de qualidade são do próprio autor.
3. https://www.webgpu.com/showcase/img2threejs-photo-to-procedural-threejs-code/ — vitrine da comunidade WebGL/WebGPU (30/07/2026): autor, v1.3, agnóstico de agente. Sustenta 3.1, e6. Fonte secundária de comunidade; boa para existência, não para desempenho.
4. https://www.blender.org/lab/mcp-server/ — servidor MCP oficial do Blender Lab: capacidades, Blender 5.1+, execução sem guardas. Sustenta 3.1, e1, e8, wildcard 2. Fonte primária oficial.
5. https://github.com/Husienvora/shader-spec-eval — avaliação de GLSL por propriedades: 15 tarefas, 90,8% compilam, 67,5% passam, bordas nítidas falham mais. Sustenta 3.1, e2, e2.1, e4. Projeto individual, pequena escala.
6. https://www.cgchannel.com/2026/07/sidefx-just-released-houdini-22/ — lançamento do Houdini 22 (16/07/2026): splat, KineFX, Copernicus, preços. Sustenta 3.1, 3.5, e6.1. Imprensa especializada, confiável; não menciona IA.
7. https://dev.epicgames.com/documentation/unreal-engine/city-sample-pcg-and-mcp-server-interaction-in-unreal-engine?lang=en-US — documentação da Epic: MCP com PCG no City Sample, UE 5.8, papel humano de conferência. Sustenta 3.1, e1, e1.1, e10. Fonte primária oficial.
8. https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/ — Project Genie (29/01/2026): pixel, 60 s, acesso Ultra nos EUA. Sustenta 3.2, 4.3, e11. Fonte primária do fornecedor.
9. https://swyvl.io/blog/gaussian-splat-formats-ply-spz-ksplat/ — tamanhos de splat por formato (4M gaussianas: PLY 1,4 GB, SOG 140 MB). Sustenta 3.4, 4.2, e6. Blog de empresa do setor; números plausíveis, sem metodologia detalhada.
10. https://www.anthropic.com/news/claude-for-creative-work — anúncio dos conectores criativos (28/04/2026). Sustenta 3.1, e5. Fonte primária de fornecedor; tom promocional.
11. https://survey.stackoverflow.co/2025/ai — Stack Overflow Developer Survey 2025, IA: 84%, 50,6% diário, ~31% agentes, 66% "quase certo". Sustenta 3.4, 4.4, e1, 7.7. Pesquisa grande, amostra autosselecionada, população de desenvolvedores.
12. https://www.mintz.com/insights-center/viewpoints/54731/2025-02-07-us-copyright-office-publishes-second-part-report-ai — resumo do relatório do USCO de 2025: prompt sozinho não dá autoria; seleção e arranjo podem dar. Sustenta e7.1.1, wildcard 3, 7.5. Escritório de advocacia; li o resumo, não o relatório original.
13. https://arxiv.org/abs/2508.08228 — *LL3M* (Lu, Chen, Dinh, Lang, Holtzman, Hanocka; ago/2025): multiagente escrevendo Python do Blender, representação interpretável. Sustenta 3.1, 4.1. Preprint de grupo acadêmico conhecido em geometria.
14. https://arxiv.org/abs/2312.11556 — *StarVector*: imagem/texto → SVG, SVG-Stack com 2 milhões de amostras. Sustenta 3.1, e6.1.1, 5.4. Preprint revisado várias vezes, com modelos públicos.
15. https://caniuse.com/webgpu — suporte global a WebGPU: 87,35%. Sustenta 3.4, 4.2, e6. Referência padrão, baseada em StatCounter.
16. https://github.com/3b1b/manim — Manim: 94,1 mil estrelas, MIT. Sustenta 3.1, sinal fraco 3. Fonte primária.
17. https://arxiv.org/abs/2604.26943 — *ProcFunc* (Raistrick et al.; abr/2026, rev. 15/09/2026): funções procedurais que reduzem erros de VLM. Sustenta 3.1, e1.1.1, sinal fraco 4. Preprint do grupo do Infinigen.
18. https://arxiv.org/html/2606.11152v1 — *P3D-Bench* (jun/2026): 14 modelos, ≈0,8 semântica, ≈0,35 geometria, ≈0,5 PartMatchF1, CadQuery inválido com frequência. Sustenta 3.2, 4.1, e2, e2.2, 7.1. Preprint recente, sem revisão por pares.
19. https://github.com/mxgmn/WaveFunctionCollapse — WFC: 25,3 mil estrelas, jogos que o usam. Sustenta 3.1, 4.4. Fonte primária.
20. https://github.com/abhiemj/manim-mcp-server — MCP que executa Manim e devolve vídeo; 644 estrelas. Sustenta 3.1, e4, sinal fraco 3. Projeto individual; prova existência, não adoção.
21. https://www.jonpeddie.com/news/sidefx-and-nvidia-bring-mcp-powered-ai-agents-to-houdini-22s-rigging-workflow-at-siggraph-2026/ — Apex Script Comfort Package com MCP, rig de 300+ linhas, "script comum, não caixa-preta", prévia no Labs. Sustenta 3.1, 4.1, e1, e5, sinal fraco 2. Analista de indústria gráfica, confiável.
22. https://artificialintelligenceact.eu/article/50/ — art. 50 do AI Act: marcação legível por máquina de conteúdo sintético, exceção para função assistiva de edição; aplicação em 02/08/2026. Sustenta a nota de 12.6. Site não oficial que reproduz o texto legal; confiável para o texto.
23. https://arteprog.space/PCD-SP-20/ — Processing Community Day SP 2020 e Noite de Processing (desde 2018). Sustenta 3.5, e4.2. Página do próprio coletivo; datada de 2020.
24. https://dev.to/he4rt/programacao-criativa-vamos-desenhar-com-codigo-4a1 — artigo de Sara Aniceto (He4rt) sobre programação criativa no Brasil: Compoética, grupo no Telegram, OpenProcessing. Sustenta 3.5. Texto de comunidade; bom para existência dos grupos, sem data de ano clara.
25. https://en.wikipedia.org/wiki/PostScript — PostScript (1984), LaserWriter (1985), substituído pelo PDF na distribuição. Sustenta 4.2, e8.1, e13.1. Enciclopédia; confiável para datas.
26. https://en.wikipedia.org/wiki/Adobe_Flash — Flash (1996), mais instalado em 2005, carta de Jobs (2010), fim em 31/12/2020, Ruffle e Flashpoint (160 mil aplicações). Sustenta 4.2, e8, e9, e13, 7.9. Enciclopédia; confiável para datas.
27. https://www.rightclicksave.com/article/art-blocks-and-the-data-of-generative-art — Art Blocks (Kyle Waters, Coin Metrics, 09/05/2022): script on-chain, 177 mil obras, US$ 1,4 bilhão. Sustenta 3.4, 7.9, wildcard 3. Analista de dados de cripto; números de 2022.
28. https://github.com/processing/p5.js/ — p5.js: 24 mil estrelas, LGPL-2.1, 2.0 em beta. Sustenta 3.1, 4.4. Fonte primária.
29. https://en.wikipedia.org/wiki/Grasshopper_3D — Grasshopper (2007), padrão no Rhino 6, uso no ensino de arquitetura, "explorar sem aprender a programar". Sustenta 3.1, 4.4, e1, e1.2, e3. Enciclopédia; a afirmação sobre ensino cita revista do setor.
30. https://cavalry.studio/ — Cavalry: motion design procedural, plano gratuito, hoje da Canva. Sustenta 3.1, 2. Página do produto; promocional.
31. https://www.deep-hci.org/e/uist-2024-best-paper-whats-the-game-then-opportunities-and-challenges-for-runtime-behavior-generation/ — resumo do GROMIT (Jennings, Wang, Li, Smith, Hartmann; UIST 2024, melhor artigo): comportamento compilado em Unity durante a partida, entrevistas com 13 desenvolvedores, pedido de proteções. Sustenta 3.2, 4.3, e10, e10.1, e11. Resumo de terceiros em podcast de IHC; o artigo original não abriu.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando: `python3 futurizacao-giordano/references/verificar.py tendencia-gerar-geradores-design-procedural-e-creative-coding-com-ia.md --links`, rodado em 22/09/2026.

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 13 (frontmatter diz 13)
efeitos ordem 2: 20 (frontmatter diz 20)
efeitos ordem 3: 21 (frontmatter diz 21)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 1 · media 8 · baixa 4
confiança ordem 2: alta 0 · media 6 · baixa 14
confiança ordem 3: alta 0 · media 0 · baixa 21
links da seção 11: 31/31 respondem (frontmatter diz fontes: 31)
RESULTADO: ok
```

### 12.2 Premissas assumidas e o que o briefing não cobriu

O briefing cobriu horizonte, público, recorte, descartado, raiz suspeita, viés, zona de interesse, ideias óbvias e falseador — sem rebaixamento de confiança por falta de entrevista. Assumido por mim, sem estar no briefing:
- `data`: 2026-09-22, do relógio da máquina.
- `publico_ok: false` (padrão do formato).
- O nome e o desenho do experimento.
- A decisão de tratar o Genie e o splat como concorrentes, não como raízes (fronteira com os temas 9, 10 e 12).
- Profundidade: três ordens (do pedido).

Pedido em três linhas: mapear até 2056, para quem projeta mídia e interação, o que muda quando a IA passa a escrever o gerador em vez do artefato; recorte global com nota sobre o Brasil; recusar o procedural já comum em produto de massa.

### 12.3 Buscas feitas

| # | busca | deu em |
|---|---|---|
| 1 | LLM procedural 3D generation code Blender Python benchmark 2026 | 3DCodeBench, P3D-Bench, CodeGen-3D, BlenderRAG, ProcFunc, 3D-GPT |
| 2 | img2threejs procedural Three.js code from image | repositório, vitrine WebGPU, galeria |
| 3 | LLM shader generation GLSL evaluation paper | AI Co-Artist, ShadAR, shader-spec-eval |
| 4 | geração procedural IA design generativo creative coding Brasil | He4rt/dev.to, SVR (UPF), blogs genéricos |
| 5 | Art Blocks generative art on-chain script sales volume | DappRadar (403), RightClickSave, Tané |
| 6 | LLM generate Houdini node graph OR Geometry Nodes AI agent 2026 | NodeArchitect, JPR sobre Houdini 22, Houdini-Agent |
| 7 | code-generated game content at runtime LLM procedural level generation shipped game 2026 | GROMIT, Word2World, Word2Minecraft; nenhum jogo comercial |
| 8 | Infinigen procedural generator Princeton | CVPR 2023, GitHub, CG Channel |
| 9 | GROMIT runtime behavior generation Unity arXiv Jennings | UIST 2024, relatório técnico de Berkeley, deep-hci |

Mais 37 tentativas de abrir página (WebFetch): 31 abertas, listadas na seção 11; 4 falharam (ACM 403, DappRadar 403, Medium do Art Blocks 403, PDF do GROMIT grande demais); 2 foram redirecionamentos (Cavalry, seguido; Tané/Notion, abandonado).

**Buscas que não deram em nada útil:** a de Brasil (4) trouxe sobretudo texto genérico sobre "design generativo" e um artigo do SVR sobre PCG em RV (não aberto); a de jogo comercial com geração em tempo de execução (7) não achou nenhum jogo lançado — é o dado que mantém a raiz 3 em laboratório.

**Não abertos, vistos só na busca (e por isso fora da seção 11):** AI Co-Artist (arXiv 2512.08951), ShadAR, CodeGen-3D, BlenderRAG (2605.00632), 3D-GPT, Word2World, avaliação em tempo de execução de PCG em endless runner (2605.01783), NodeArchitect, Infinigen (GitHub e arXiv), Houdini-Agent, ShapeCraft.

### 12.4 Efeitos cortados

- **e3.2 (rascunho) — "Surge a profissão de engenheiro de prompt procedural."** Cortado: efeito proibido ("surge uma nova profissão") sem ator e mecanismo; o conteúdo útil está em e1.1.
- **e7.3 (rascunho) — "O mercado de NFT de gerador volta com IA."** Cortado pelo teste da causa solta: o Art Blocks já existia sem IA [27]; um retorno teria causa financeira.
- **e10.3 (rascunho) — "Jogadores perdem interesse em jogos fixos."** Cortado: genérico, serve para qualquer personalização.
- **Rascunho de e6.4 — "CDNs perdem receita."** Cortado: extrapolação linear, sem mecanismo de não linearidade, e a fração de tráfego 3D em CDN é pequena; o efeito real está em e6.3 (energia muda de lugar).
- **Rascunho de e2.3 — "Seguradoras de produção exigem auditoria de asset."** Cortado: sem nenhum sinal e com ator mal definido.
- **Rascunho de e12.2 — "Figma vira editor de gramática."** Cortado: raiz trocada por produto; o efeito geral está em e12.1.

### 12.5 Raízes descartadas antes da roda

- *"Neurossimbólico gráfico" como raiz própria.* Descartado: é o mecanismo da raiz 1 (modelo neural escrevendo programa simbólico), não outra ruptura.
- *"A obra vira o código" como raiz.* Descartado como raiz e mantido como efeito (e7.1.1, wildcard 3): o precedente do Art Blocks [27] mostra que "código como obra" existe sem IA; o que a IA muda é quem escreve, e isso já é a raiz 1.
- *"Design paramétrico na arquitetura" como raiz.* Descartado: maduro desde o Grasshopper [29]; usado como classe de referência.

### 12.6 Notas que não couberam

- **AI Act, art. 50** [22]: a marcação obrigatória de conteúdo sintético vale para áudio, imagem, vídeo e texto desde 02/08/2026, com exceção para função assistiva de edição. Pergunta aberta, não derivada na roda por falta de mecanismo claro: um objeto 3D entregue como código gerado por IA é "conteúdo sintético" a marcar, ou é software? Se for software, a raiz 2 ganha uma vantagem regulatória sobre o pixel gerado; se for conteúdo, a marca teria de estar no código. Candidato a efeito numa próxima rodada.
- **Fronteira com o tema 1 (programação agêntica):** a raiz 1 é um caso particular de programação agêntica. O que a separa é o objeto (programa gráfico, avaliado por render e por olho humano) e o ator (artista, não desenvolvedor).
- **Fronteira com o tema 16 (IA local):** o wildcard 1 depende de modelo local rápido; tratado como condição, não derivado aqui.
- **Nota sobre o Houdini no Brasil:** o preço do Houdini Core (US$ 1.995) [6] e a gratuidade do Blender sustentam a hipótese de que a raiz 1 chega ao Brasil pelo Blender; sem número de uso por país.
