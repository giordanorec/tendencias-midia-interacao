---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-22
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 12
efeitos_ordem_2: 20
efeitos_ordem_3: 20
tecnologias_citadas: [WebGPU, WGSL, WebGL, WebXR, WebXR AR Module, Hand Input API, Depth Sensing, WebNN, WebAssembly, Prompt API, Gemini Nano, BrowserEngineKit, WebKit, Blink, Safari 26.2, Safari 27, visionOS, Android XR, Galaxy XR, Meta Quest Browser, Meta Horizon Store, Bubblewrap, Trusted Web Activity, PWA, three.js, WebGPURenderer, TSL, PlayCanvas, SuperSplat, Babylon.js, A-Frame, model-viewer, model element, Unity 6, glTF, KHR_gaussian_splatting, Gaussian Splatting, 8th Wall, WebLLM, MLC-LLM, Transformers.js, ONNX Runtime, Ruffle, Flash Player, Google Stadia, Android Instant Apps, Ray-Ban Meta, Gestalt Village]
fontes: 42
confianca: media
experimento: "Cartão espacial sem loja: a mesma experiência 3D/XR curta (cena glTF com splats + personagem com modelo pequeno no cliente) publicada como link e aberta por QR em Quest, Android XR, Vision Pro, iPhone e Android intermediário, registrando, aparelho por aparelho, o que a página foi impedida de fazer e quanto tempo levou até a primeira interação"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em 2026 a GPU passou a ser acessível pelo navegador em todos os motores principais (WebGPU, 25/11/2025) e os óculos passaram a abrir WebXR com WebGPU (visionOS 26.2, Quest Browser 146–150, Chrome do Android XR com AR e mãos). Visualizador 3D por WebGL, jogo HTML5 de portal e jogo por streaming ficam fora como raiz: já são produto de massa ou já falharam. Para 2041, quinze anos à frente, o mapa tem quatro raízes: **(1)** o link substitui a instalação como porta da experiência 3D/XR executada no aparelho; **(2)** o navegador passa a ser o runtime de conteúdo dos óculos, e não um app dentro deles; **(3)** modelo de IA e cena dividem a mesma GPU do navegador, e parte da mídia passa a ser gerada no cliente; **(4)** a ferramenta de criação 3D pesada vira página sobre formato aberto. O achado mais forte é uma convergência: as quatro raízes deslocam a curadoria da loja para o navegador e para o assistente do sistema, e deslocam a desigualdade de acesso de "ter o app" para "ter a GPU que o navegador aceita". A retroação principal tem dono: Apple e Meta mantêm a web imersiva um passo atrás do nativo em recursos, e nenhum motor alternativo chegou ao iPhone em dois anos e meio de DMA. Confiança geral média; toda a terceira ordem é baixa.

## 2. O tema

**O que é.** A web deixando de ser o lugar onde se *anuncia* uma experiência 3D ou imersiva e passando a ser o lugar onde ela *roda*: WebGPU dá à página acesso à GPU moderna (render e compute, com a linguagem WGSL), WebXR liga a página ao óculos, WebAssembly traz motores escritos em C++/Rust, e bibliotecas como three.js, PlayCanvas e Babylon.js fazem disso uma plataforma-alvo. O objeto deste mapa é **a web como plataforma de execução 3D/XR** — não a captura 3D (tema 10) nem a IA local em geral (tema 16, aqui só como sinal "no navegador").

**Onde encosta em mídia e interação.** Distribuição (link contra loja), curadoria (quem decide o que se vê num óculos), ofício (o artista técnico de web, o editor de cena sem estação), preservação (obra imersiva que não expira com o app), acesso (quem tem a GPU certa) e gramática de interação (mão como entrada padrão, cartão espacial aberto por voz).

**Por que merece um mapa, e não um estado da arte.** Porque a pergunta de 2041 não é técnica. É se a web volta a ser a plataforma universal — como foi entre 1995 e 2008, antes da App Store — agora incluindo o óculos, e o que isso faria com a loja, o sistema operacional e o controle das fabricantes sobre o que se pode ver. Há precedente de ida e de volta: o iPhone foi anunciado em 2007 só com web apps e ganhou loja em 2008 [34]; o Flash chegou a centenas de milhões de desktops e foi desligado em 2020–2021 [33]; os Android Instant Apps (2017–2025) e o Google Stadia (2019–2023) tentaram o "sem instalação" e fecharam [31][32]. Um mapa força a dizer o que seria diferente desta vez.

**Premissas deste mapa** (do briefing; o que ele não cobre está em 12.2): horizonte 2041; público: quem projeta mídia e interação; recorte global, com nota sobre o Brasil; descartado de saída o que já é comum em produto de massa; nenhuma raiz suspeita; viés neutro, com um cenário de cada lado; zona de interesse do autor: Criação e plataforma. **Falseador declarado pelo autor:** evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe. O teste está em 7.8.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026: 30 buscas e aberturas, 42 fontes abertas (seção 11).

### 3.1 O que já existe e funciona

- **WebGPU em todos os motores principais.** Chrome/Edge 113+ em Windows, macOS e ChromeOS; Android 12+ desde o 121; Firefox 141 no Windows e 145 no macOS ARM; Safari 26 em macOS, iOS, iPadOS e visionOS. Anúncio conjunto em 25/11/2025 [1]. Bibliotecas com suporte: Babylon.js, PlayCanvas, ONNX Runtime, Three.js, Transformers.js, TypeGPU, Unity [1].
- **WebXR com WebGPU no óculos.** Safari 26.2 no visionOS (12/12/2025): "WebXR supports WebGPU" [4]. Quest Browser: WebGPU e projeção de profundidade experimentais no 146 (21/04/2026), WebGPU em camadas de space-warp no 149.1 (27/07/2026), foveação WebGPU experimental no 150.1 (28/08/2026) [9]. Chrome no Android XR: módulo AR, hit test, âncoras, depth sensing, estimativa de luz e **mão como entrada padrão** [7]. Galaxy XR (US$ 1.799) lista WebXR entre os padrões e traz Chrome "reimaginado para XR" [8].
- **Distribuição de web app pela loja do óculos.** A Meta aceita PWA na Horizon Store empacotado por Bubblewrap (Trusted Web Activity), e diz que o empacotamento é **opcional**: o web app pode continuar só no site [10].
- **Editor 3D pesado no navegador.** SuperSplat 3.0 (09/09/2026) foi reescrito **só para WebGPU**, sem fallback WebGL; memória ociosa numa cena de 4,4 milhões de gaussianas caiu de 1.557 MB para 105 MB; projeção, recorte, compactação e ordenação passaram para compute shader; cenas de "dezenas de milhões" de gaussianas [14].
- **Formato aberto para splats.** `KHR_gaussian_splatting` em release candidate (03/02/2026), com Autodesk, Cesium/Bentley, Esri, Huawei, Niantic Spatial, NVIDIA e XGRIDS; ratificação prevista para o 2º tri de 2026 [15] (confirmação não encontrada; ver 12.3).
- **Motores.** three.js com `WebGPURenderer`, TSL e WebXR sobre WebGPU nas notas do r186 [16]. Unity 6.3 tem WebGPU, marcado como **experimental** [17]. `model-viewer`, do Google, mostra 3D e AR com WebXR, hit test e DOM overlay [37].
- **IA no navegador.** WebLLM retém até ~80% da vazão de decodificação nativa (Phi-3.5-mini 79,6%; Llama-3.1-8B 71,2%, num M3 Max) [19]. Transformers.js v4 (09/02/2026) traz runtime WebGPU reescrito em C++ com o time do ONNX Runtime, modelos acima de 8B, GPT-OSS 20B a ~60 tokens/s num M4 Pro Max, e funcionamento offline após a primeira carga [20]. O Chrome embute um modelo gerenciado pelo navegador (Gemini Nano) atrás de APIs de Prompt, resumo e tradução, em origin trial [22]. WebNN em origin trial no Chrome 146 [21].
- **Jogo web leve** (contexto, não raiz): Poki declara mais de 100 milhões de usuários mensais em 2026; 53% de 400 desenvolvedores dos EUA e Reino Unido planejam portar jogo mobile para o navegador em 12 meses [18].

### 3.2 O que existe e ainda não funciona

- **WebGPU incompleto nas bordas.** Linux: só Intel Gen12+ e NVIDIA Wayland no Chromium; Firefox Linux em Nightly; Firefox Android atrás de flag; Windows ARM64 experimental; GPU Samsung Xclipse só previsto no Chromium 154 (status editado em 13/08/2026) [2]. No Web3D Survey, 82,09% dos relatos têm adaptador WebGPU funcional; Android 72,48%, iOS 84,67%, Linux 16,97% [3].
- **AR na web da Apple.** O visionOS liga WebXR por padrão desde a versão 2, mas **só VR**, sem o módulo AR [6]. O Safari 27 beta leva o elemento `<model>` a iOS, iPadOS e macOS e oferece "ambientes imersivos" com `<model>` e uma chamada de API — mas não menciona `immersive-ar` [5].
- **Especificação e interoperabilidade.** WebXR Device API em Candidate Recommendation desde 2022 e ainda em CRD (09/06/2026) [12]. Nem WebGPU nem WebXR estão entre as 20 áreas do Interop 2026 [13].
- **Motor alternativo no iOS.** Mais de dois anos depois do DMA, nenhum fabricante lançou motor não-WebKit no iOS; um protótipo do Edge com Blink marcou 49,27 contra 38,3 do Safari no Speedometer 3.1 [24]. A OWA lista quatro barreiras contratuais e técnicas [25]. A CMA britânica exige motores alternativos com prazo de conformidade em 01/01/2027, sujeito a recurso [26].
- **IA no navegador em aparelho comum.** Demos como a de Llama-3.2-1B no Hacker News (02/08/2025) funcionam em Android, mas comentadores relatam download de 500 MB, falha total no Safari e saída corrompida [23]. O artigo do WebLLM mede em M3 Max, não em celular [19].
- **Óculos leves sem web.** O anúncio do Google I/O 2026 para os óculos Android XR (áudio primeiro, tela depois; Samsung, Qualcomm, Gentle Monster, Warby Parker) fala de Uber, DoorDash e Mondly e **não menciona web, Chrome nem WebXR** [42].
- **Segurança.** WebGPU-SPY (2024) usa cache da GPU integrada Intel como canal lateral, com precisão de 90% em fingerprinting de 100 sites [38].

### 3.3 Quem constrói

- **Fabricantes de navegador e de óculos:** Google (Chrome, Android XR), Apple (WebKit, visionOS), Meta (Quest Browser, Horizon Store), Mozilla (Firefox).
- **Grupos de padrão:** W3C (GPU for the Web, Immersive Web), Khronos (glTF, extensão de splats).
- **Motores e ferramentas abertos:** three.js, PlayCanvas/SuperSplat, Babylon.js, A-Frame, `model-viewer`.
- **IA no cliente:** MLC/CMU (WebLLM), Hugging Face e Microsoft ONNX Runtime (Transformers.js), Google (Gemini Nano no Chrome).
- **Reguladores com prazos que afetam o tema:** Comissão Europeia (DMA), CMA (Reino Unido), CADE (Brasil), Justiça dos EUA (Epic contra Apple).

### 3.4 Números de adoção

| O quê | Número | Fonte |
|---|---|---|
| Suporte WebGPU nos relatos do Web3D Survey | 82,09% (Android 72,48%, Linux 16,97%) | [3] |
| Jogadores mensais da Poki | 100+ milhões (2026) | [18] |
| Óculos inteligentes sem tela, 2026 (IDC) | 13,6 milhões, 27,3 milhões em 2030 | [40] |
| Óculos Ray-Ban Meta vendidos em 2025 | mais de 7 milhões | [41] |
| Participação da Meta nos óculos sem tela, 1º sem. 2026 (Counterpoint) | 94% | [41] |
| Uso de WebXR (sessões, usuários) | **sem número encontrado** | — |
| Uso de apps de terceiros no tempo de headset Meta | 86% | [11] |

Não achei número público de uso de WebXR. Um site que cita "40%" de adoção de WebXR foi descartado por não indicar fonte (12.6).

### 3.5 Nota sobre o Brasil

Android tem 75,45% do tráfego móvel no Brasil em agosto de 2026 [39]; como o suporte WebGPU no Android é o mais baixo entre as plataformas móveis (72,48% [3]), o Brasil fica mais exposto à fronteira "ter a GPU que o navegador aceita" do que os EUA. O acordo do CADE com a Apple (aprovado em 23/12/2025) obriga a aceitar pagamento alternativo e canais de distribuição fora da App Store em 105 dias, por três anos, com multa de até R$ 150 milhões, sem percentuais de comissão publicados na matéria [29]. O Brasil é, portanto, uma das jurisdições onde o link que cobra direto pode sair mais cedo do que no resto do mundo. Óculos XR não têm distribuição relevante no país nos números abertos; a parte "XR" deste mapa, no Brasil, passa pelo celular.

## 4. As disrupções-raiz

### Recusados como raiz (e tratados como contexto)

- **3D por WebGL no navegador** (visualizador de produto, configurador, `model-viewer` [37]): recusado; produto de massa há uma década.
- **Jogo HTML5 leve em portal** (Poki [18]): recusado; 100 milhões de usuários mensais. Entra como classe de referência.
- **Jogo por streaming no navegador**: recusado; não usa a GPU do cliente, e a tentativa mais visível (Stadia, 2019–2023) fechou por falta de tração [32]. Entra como efeito (e9.2).
- **WebAR de campanha no celular** (8th Wall): recusado; a plataforma hospedada foi aposentada em 28/02/2026 e partes viraram código aberto [30]. Entra como sinal de retroação (e2.2).
- **Ferramenta de design 2D no navegador** (Figma com WebAssembly desde 2017 [36]): recusada; madura. Entra como classe de referência da Raiz 4.
- **"A loja de aplicativos acaba"**: recusado como raiz e como efeito — é extrapolação sem mecanismo (12.4).

### Raiz 1 — O link substitui a instalação como porta da experiência 3D/XR executada no aparelho

1. **O que rompe.** A suposição de que experiência 3D pesada ou imersiva exige instalação e, portanto, passa por uma loja que aprova, cura e cobra. Rompe a loja como ponto obrigatório de descoberta e de pedágio.
2. **Por que agora.** WebGPU nos quatro motores só desde o fim de 2025 [1]; WebXR com WebGPU no visionOS desde dezembro de 2025 [4]; Quest com WebGPU no navegador desde abril de 2026 [9]; Meta aceitando PWA na loja sem exigir empacotamento [10]. Há cinco anos, o navegador não tinha acesso à GPU moderna nem compute.
3. **Onde está na difusão.** Produto de nicho no óculos, onde o navegador já é o caminho multiplataforma; nicho também no celular para 3D pesado. Emergente.
4. **O que falta.** `immersive-ar` na Apple; motor não-WebKit no iOS; WebGPU no Firefox Android, Linux e Windows ARM [2]; WebGPU estável no Unity [17]; pagamento na web sem comissão ao sair do app; uma métrica pública de uso de WebXR.

**Quem bloqueia.** A Apple, com incentivo (App Store e ~US$ 20 bi/ano do acordo de busca com o Google, segundo a OWA [25]) e instrumento (WebKit obrigatório no iOS, WebXR sem AR). Efeito com dono: e3.

### Raiz 2 — O navegador passa a ser o runtime de conteúdo dos óculos, e não um app dentro deles

1. **O que rompe.** A suposição de que o fabricante do óculos decide o que pode aparecer no campo de visão, por meio de loja e de SDK proprietário. Se o conteúdo leve do óculos chega como página, quem cura é o navegador (e o assistente que abre links), não a loja.
2. **Por que agora.** Em 2025–2026 os três ecossistemas de headset passaram a tratar a web como cidadã: Android XR com AR e mãos no Chrome [7], visionOS com WebXR+WebGPU e `<model>` com ambientes imersivos [4][5], Quest com WebGPU e foveação [9]. Ao mesmo tempo, os óculos leves começaram a vender em escala (mais de 7 milhões de Ray-Ban Meta em 2025 [41]) — mas ainda sem web.
3. **Onde está na difusão.** Produto de nicho nos headsets; **laboratório** nos óculos leves. Parte especulativa: os efeitos que dependem do óculos leve saem com `confianca: baixa`.
4. **O que falta.** Óculos com tela e navegador (nenhum anunciado com web [42]); acesso da página à câmera do mundo com permissão aceitável; um padrão de "cartão espacial" leve que não exija sessão imersiva inteira; interesse de pelo menos um fabricante grande em ter a web como plataforma primária.

**Quem bloqueia.** Meta e Apple, que têm loja própria e mantêm diferença de capacidade entre página e app como fosso. Efeito com dono: e5.

### Raiz 3 — Modelo de IA e cena dividem a mesma GPU do navegador

1. **O que rompe.** A regra de que mídia interativa com IA (personagem que conversa, narração, cena que se ajusta) exige servidor do criador e custo por usuário. O custo marginal passa ao aparelho de quem usa; o asset pré-produzido deixa de ser a única forma de conteúdo.
2. **Por que agora.** WebLLM a até ~80% da vazão nativa [19], Transformers.js v4 com runtime WebGPU [20], Gemini Nano embutido no Chrome [22] e WebNN em origin trial [21] são todos de 2024–2026. Antes do WebGPU compute, inferência séria no navegador ficava na CPU ou em truques de WebGL.
3. **Onde está na difusão.** Biblioteca e demo pública; em jogo e XR, laboratório (Gestalt Village, trazido pela turma, não foi encontrado na busca — 12.3). Confiança baixa na maior parte da cadeia.
4. **O que falta.** Modelo pequeno bom o bastante para diálogo em jogo; memória em celular intermediário; WebNN estável; cache de pesos entre sites; regra de moderação para fala gerada no cliente.

**Quem bloqueia (ou captura).** Os fabricantes de navegador, que podem tornar o próprio modelo embutido o padrão (Gemini Nano [22]), e os fornecedores de API de inferência, que perdem receita por usuário. Efeito com dono: e7.1.1.

### Raiz 4 — A ferramenta de criação 3D pesada vira página, sobre formato aberto

1. **O que rompe.** A estação instalada e licenciada como pré-condição para editar cena 3D pesada, e o pipeline "exportar arquivo, mandar arquivo, abrir em outro programa". O entregável deixa de ser arquivo ou vídeo e passa a ser um link de cena.
2. **Por que agora.** O SuperSplat 3.0 só existe porque o compute do WebGPU permite ordenar e recortar dezenas de milhões de gaussianas na GPU do navegador, e a versão WebGL ocupava 15 vezes mais memória ociosa [14]; o glTF ganhou extensão de splats com a indústria de CAD e GIS [15]. É o mesmo movimento que o Figma fez no 2D com WebAssembly em 2017 [36], agora no 3D pesado.
3. **Onde está na difusão.** Produto de nicho (edição de splats, visualização). O caso 2D é maduro e fica fora.
4. **O que falta.** Ratificação da extensão glTF; streaming de cena grande; WebGPU em todo Android e no Linux [2][3]; colaboração em tempo real sobre cena; modelo de negócio para editor gratuito.

**Quem bloqueia.** Fornecedores de DCC com licença por assento e os motores comerciais (Unity, Epic), que preferem a web como alvo de exportação do próprio motor [17]. Efeito com dono: e11.1.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O link substitui a instalação como porta da experiência 3D/XR executada no aparelho
    efeitos:
      - id: e1
        ordem: 1
        efeito: Estúdios pequenos de jogo 3D e XR lançam primeiro uma versão jogável completa como link WebGPU e só depois empacotam para loja, quando empacotam
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A loja do óculos e do celular vira balcão de cobrança e reembalagem de web apps empacotados e perde para o link compartilhado a função de descoberta
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Portais agregadores de links 3D e XR assumem a curadoria com receita de anúncio e reconstroem um porteiro de taxa menor que controla o ranking
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Jogos 3D e XR cujo produto inteiro roda no link passam a cobrar direto na web, e a comissão de 30% perde base nas jurisdições onde o pagamento externo não é taxado
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A diferença entre app e site deixa de ser técnica e vira contratual, e reguladores passam a mirar o contrato de distribuição em vez do binário
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Museus, escolas e artistas passam a publicar obra e acervo 3D/XR como link permanente em glTF em vez de app que expira com o contrato ou com a loja
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Obras imersivas lançadas como app nativo entre 2016 e 2030 viram as mais perdidas do período, e a preservação passa a arquivar página e cena
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Arquivos da web e bibliotecas nacionais mantêm emuladores de navegador antigo para cenas WebGPU e WebXR, como o Ruffle passou a fazer para o Flash
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Agências de XR trocam runtime proprietário hospedado por pilha aberta (three.js, PlayCanvas, WebXR) e o valor sai do SaaS de runtime para a produção de conteúdo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Sem runtime pago, o rastreamento de imagem e rosto na WebAR do celular passa a depender de poucos mantenedores voluntários e fica atrás da AR web dos óculos
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A Apple mantém WebKit obrigatório no iOS e WebXR sem AR, e a experiência imersiva por link fica pior justamente no aparelho de maior renda
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Os prazos da CMA, da Comissão Europeia e do CADE viram a variável que decide se o link imersivo chega ao iPhone, e o link universal se fragmenta por jurisdição
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Campanhas de experiência WebGPU e XR passam a indicar o navegador recomendado conforme o país, e o QR code carrega detecção de motor e de jurisdição
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Projetistas desenham para o menor denominador (VR no óculos, 3D em janela no iPhone) e a gramática da AR web, com a mão como entrada padrão, nasce no Android XR e no Quest
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Quando o iOS abrir a AR web, importa convenções de interação que não desenhou, e a Apple passa a propor extensões próprias no W3C para recuperar a gramática
                sinal: fraco
                prazo: 2038
                confianca: baixa
  - disrupcao: O navegador passa a ser o runtime de conteúdo dos óculos, e não um app dentro deles
    efeitos:
      - id: e4
        ordem: 1
        efeito: Fabricantes de óculos passam a receber conteúdo leve de terceiros como página espacial (elemento model, WebXR) em vez de app, e o navegador vira a loja de fato do conteúdo curto
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A interface dos óculos com tela passa a ser composta por cartões web de terceiros abertos por voz, e o assistente do sistema que escolhe qual cartão abrir vira o porteiro no lugar da loja
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A disputa antitruste migra da escolha de navegador para a escolha do assistente que abre links no óculos, porque é ele que decide qual página ocupa o campo de visão
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A página ganha acesso a profundidade e câmera do mundo no óculos, e a permissão de ver o que o usuário vê vira o recurso mais disputado da plataforma web
            sinal: medio
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Navegadores criam uma categoria de permissão para ver o mundo com lista de origens aprovadas, e a curadoria que era da loja volta como política de permissões do navegador
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Meta e Apple mantêm a web imersiva atrás do app nativo em recursos (AR de passagem, ambientes, câmera) e preservam a diferença de capacidade como fosso da loja
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Os padrões imersivos avançam no W3C na velocidade do fabricante mais lento, e a web fica pelo menos uma geração de recursos atrás do SDK nativo
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Fabricantes menores de óculos, sem loja forte, adotam a web como plataforma primária, e a web imersiva vira a plataforma de quem perdeu a disputa das lojas
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O sistema do óculos encolhe para compositor, navegador e assistente, e a distinção entre app e página espacial some para quem usa
        sinal: fraco
        prazo: 2039
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Fabricantes de óculos sem ecossistema de apps competem por desempenho em WebGPU e WebXR, como fabricantes de Chromebook competiram por rodar bem o Chrome
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A concentração do XR migra do hardware para o motor de navegador do qual todos os óculos dependem, e quem mantém esse motor passa a definir o que a web imersiva pode fazer
                sinal: fraco
                prazo: 2043
                confianca: baixa
  - disrupcao: Modelo de IA e cena dividem a mesma GPU do navegador
    efeitos:
      - id: e7
        ordem: 1
        efeito: Jogos e experiências web passam a embarcar modelo pequeno (personagem, voz, narração) rodando no cliente, e o criador independente deixa de pagar inferência por jogador
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O tamanho do download volta a ser restrição de design, porque pesos de centenas de megabytes a gigabytes exigem cache persistente e a primeira visita ao link deixa de ser instantânea
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Navegadores passam a oferecer modelo compartilhado entre sites, e quem escolhe o modelo padrão do navegador define a voz e o estilo dos personagens da web
                sinal: medio
                prazo: 2036
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Portais de jogo web aceitam títulos com IA generativa sem custo de servidor, e a moderação da fala gerada no cliente passa a ser problema do portal
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A classificação etária passa a considerar o modelo embarcado, e portais exigem na submissão a lista de modelos e filtros que o jogo carrega
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Parte da cena web (textura, iluminação, variação de cenário) passa a ser gerada no cliente a cada visita, e o entregável do criador passa a ser gerador com restrições em vez de asset fechado
        sinal: fraco
        prazo: 2036
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O artista técnico de web passa a escrever restrições, orçamentos de GPU e instruções de geração em TSL e WGSL em vez de modelar cada asset
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Contratos de obra 3D passam a registrar semente, modelo e versão do navegador, porque duas visitas ao mesmo link mostram cenas diferentes e a autoria fica indeterminada
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A GPU do usuário vira recurso disputado entre cena, modelo e página, e navegadores restringem informação de adaptador e impõem orçamento por aba
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A desigualdade de acesso a experiências 3D e com IA muda de ter internet ou ter o app para ter uma GPU que o navegador aceita, com o Android intermediário e o Linux como fronteira
            sinal: forte
            prazo: 2030
            confianca: alta
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: No Brasil, com três quartos dos celulares em Android, suporte a WebGPU e WebNN entra como critério em compras públicas de dispositivos escolares
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: O streaming de GPU pelo navegador volta como plano B de quem não tem WebGPU, e o sem-instalação se divide em local (privado e grátis) e nuvem (pago e com latência)
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: A latência vira marcador de classe na XR web, e quem depende de streaming fica restrito a experiências em janela, sem imersão confortável
                sinal: fraco
                prazo: 2037
                confianca: baixa
  - disrupcao: A ferramenta de criação 3D pesada vira página, sobre formato aberto
    efeitos:
      - id: e10
        ordem: 1
        efeito: A edição de splats e de cenas capturadas passa a ser feita principalmente em editores de navegador, sem instalação por estação
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O entregável ao cliente passa de vídeo renderizado a link de cena navegável, e a revisão acontece dentro da cena, com comentário espacial
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Contratos de produção 3D passam a cobrar hospedagem e manutenção da cena como serviço recorrente, porque o entregável é um link que precisa continuar vivo
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O glTF com splats vira a moeda de troca entre ferramentas, e o formato proprietário perde valor como fosso dos fornecedores de DCC
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Fornecedores de DCC deslocam o fosso para o processamento em nuvem (treino, compressão e streaming de cena), e a cobrança passa do assento ao processamento
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Motores web abertos (three.js, PlayCanvas, Babylon.js) passam a ser alvo primário em visualização e jogo 3D leve, com a exportação web de Unity e Unreal como segunda opção
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Unity e Epic respondem com exportação web própria e runtime hospedado, e a web imersiva se bifurca entre cena aberta em glTF e HTML e blob WebAssembly de motor
            sinal: medio
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Só a cena aberta pode ser buscada, arquivada e remixada, e buscadores e assistentes passam a indexar conteúdo glTF e a ignorar os blobs de motor
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: A primeira obra 3D interativa de quem começa passa a nascer publicada, como fork de exemplo no navegador, e o link substitui o executável no portfólio de entrada
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Editais culturais brasileiros de obra digital (Lei Paulo Gustavo, Rouanet) passam a exigir acesso público por link sem instalação como contrapartida verificável
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A memória e a GPU do celular médio limitam o editor de navegador a cenas médias, e estúdios mantêm estação nativa para o trabalho pesado
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O streaming de cena por nível de detalhe vira camada obrigatória da publicação 3D, e quem hospeda esse streaming vira intermediário entre criador e público
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: O custo de banda, e não o de licença, vira a barreira de entrada do criador independente de cena 3D
                sinal: fraco
                prazo: 2038
                confianca: baixa
```

### Mecanismos, classes de referência e o que o bloco não diz

**Classes de referência usadas para os prazos.** Quinze anos pedem referências longas:
- **App Store** — do anúncio sem loja (2007) à loja com 500 apps (07/2008) e ao pico de ~2,2 milhões de apps (2017) [34]: ~9 anos da criação à saturação. Referência para a velocidade com que um *canal de distribuição* se impõe.
- **Flash Player** — 1996 a 2020 [33]: ~24 anos de vida de uma plataforma de mídia interativa no navegador, com o declínio começando por uma decisão de uma fabricante (a carta de Jobs em 2010) e levando dez anos até o desligamento. Referência para *retroação por fabricante* e para *preservação* (e2.1).
- **Figma com WebAssembly** — 2017 [36]; a dominância posterior no design 2D é conhecida, mas **não abri número** de participação de mercado (seção 8). Referência qualitativa para a Raiz 4: ferramenta profissional vira página em ~5 anos quando há colaboração no link.
- **WebXR** — CR em 2022, ainda CRD em 2026 [12]: 7+ anos de especificação sem Recommendation. Referência para e5.1.
- **VR de consumo** — mais de uma década e ainda crescendo "menos que o esperado" nas palavras da Meta [11]. Referência que empurra todo efeito que depende de headset.
- **Óculos leves** — 7 milhões de Ray-Ban Meta em 2025 [41] e 27,3 milhões/ano de óculos sem tela previstos para 2030 [40]; óculos com tela e navegador: zero. Referência para a Raiz 2: se o óculos com tela seguir a curva do smartwatch (sem número aberto nesta rodada), o navegador no óculos só chega a 10% dos usuários de óculos na segunda metade da década de 2030.
- **Fracassos do sem-instalação** — Instant Apps (2017–2025, por baixa adoção de desenvolvedores [31]) e Stadia (2019–2023 [32]). Referências de retroação: o sem-instalação falhou duas vezes quando exigiu trabalho extra do desenvolvedor ou custo de servidor do fornecedor.

**Raiz 1.** e1: porque o link WebGPU roda o jogo completo sem aprovação, o estúdio pequeno usa o link como teste de mercado barato; a Poki mostra 62% de jogadores comprando depois de descobrir na web e 53% dos desenvolvedores planejando portar [18]; sinal médio (dois artefatos: Poki e PWA opcional da Meta [10]). Prazo 2030 pela referência App Store (~4 anos até um canal virar padrão de lançamento). e1.1: porque o empacotamento é opcional [10], a loja deixa de ser necessária para existir e passa a ser necessária só para cobrar e para aparecer no menu do aparelho. e1.1.1: porque descoberta sem loja precisa de alguém que ordene, o portal de links (modelo Poki) repõe o porteiro — retroação por reconcentração. e1.2: porque a Justiça dos EUA reabriu a discussão da comissão sobre link externo [27] e o CADE obrigou a aceitar pagamento alternativo [29], o jogo que roda inteiro no link pode cobrar fora; prazo 2034 porque o valor da comissão ainda está em disputa. e1.2.1: porque um PWA empacotado é o mesmo código que o site, o que o regulador pode distinguir é o contrato. e2: porque app de museu expira com o contrato de manutenção e com a loja (32 bits removidos em 2017 [34]), e um link glTF com `model-viewer` [37] não; o fim da plataforma hospedada do 8th Wall [30] é o caso concreto de runtime que some. e2.1: porque a web tem emulação (o Ruffle revive Flash em WebAssembly [35]) e o app nativo não tem; sinal médio por dois artefatos (Ruffle, 8th Wall). e2.1.1: prazo 2041, na borda. e2.2: porque a plataforma hospedada acabou e as partes abertas estão em MIT [30]. e2.2.1: retroação — o componente difícil (rastreamento) ficou como binário de licença limitada [30]. **e3 (quem bloqueia):** sinal forte com três artefatos (WebKit obrigatório sem motor alternativo [24], OWA [25], WebXR só VR [6]/sem `immersive-ar` no Safari 27 [5]); confiança alta porque o incentivo está documentado. e3.1: a CMA tem prazo em 01/01/2027 [26]; se ele escorregar 6–12 meses por recurso [26], a fragmentação dura anos. e3.2: porque o Android XR define a mão como entrada padrão [7] e o Quest tem WebGPU [9], as convenções se formam onde há AR web.

**Raiz 2.** e4: porque `<model>` agora existe em iOS, macOS e visionOS e abre ambiente imersivo com uma chamada [5], e o Android XR tem AR completa no navegador [7], um conteúdo curto pode ser página em vez de app; sinal médio (dois artefatos). Prazo 2034 pela referência dos óculos leves. e4.1: porque em óculos com tela a entrada principal é voz e assistente [42], a descoberta passa pelo assistente, não por menu de apps — a troca de ator (loja → assistente) justifica a ordem. e4.1.1: consequência antitruste; sem artefato. e4.2: porque o Android XR já expõe depth sensing à página [7] e o Quest depth projection [9]; sinal médio, confiança rebaixada (ver 7.9). e4.2.1: retroação — a curadoria volta por permissões. **e5 (quem bloqueia):** três artefatos (visionOS sem AR [6], Safari 27 sem `immersive-ar` [5], a Meta falando de loja, passes de temporada e descoberta sem mencionar web [11]). e5.1: WebXR em CRD desde 2022 e fora do Interop 2026 [12][13]. e5.1.1: porque quem não tem loja forte (Rokid lidera AR+IA com 41% [41]) ganha catálogo de graça com a web. e6: porque, se o conteúdo vem da web e a entrada é o assistente, o que resta ao sistema é compor camadas; sem artefato, especulativo; prazo 2039. e6.1: referência Chromebook (qualitativa, sem número aberto). e6.1.1: **prazo 2043, fora da janela do mapa**; porque a web imersiva hoje depende de Blink (Chrome, Android XR, Quest Browser é Chromium) e WebKit, a concentração passa para o motor.

**Raiz 3.** e7: porque WebLLM e Transformers.js rodam modelo de 1–8B no navegador [19][20] e a demo do HN funciona em Android [23], o custo de inferência pode sair do servidor do criador; sinal médio (dois artefatos de biblioteca, nenhum jogo comercial aberto). e7.1: os comentadores do HN reclamam de 500 MB [23] e o Transformers.js oferece cache para funcionar offline depois da primeira carga [20] — contradição direta com "é só um link"; retroação. e7.1.1 (quem captura): o Chrome já traz Gemini Nano gerenciado pelo navegador [22]; sinal médio, confiança baixa porque não se sabe se os criadores aceitarão um modelo que não escolheram. e7.2: troca de ator (portal); sem artefato. e8: porque o compute do WebGPU serve tanto à cena quanto ao modelo, a geração pode ocorrer no cliente a cada visita; sinal fraco. e8.1.1: **prazo 2042, fora da janela.** e9: WebGPU-SPY [38] mostra o canal lateral que obriga o navegador a restringir; sinal médio (um artefato de pesquisa, um de mitigação em curso). e9.1: três artefatos (Web3D Survey com Android 72% e Linux 17% [3]; SuperSplat 3.0 sem fallback [14]; lacunas do status oficial [2]); sinal forte e confiança alta: já é observável. e9.2: Stadia mostra que streaming pelo navegador existe e pode falhar [32]; volta como plano B, não como raiz.

**Raiz 4.** e10: SuperSplat 3.0 [14] e a extensão glTF [15]; prazo 2030 pela referência Figma (~5 anos). e10.1: porque o editor já exporta e renderiza vídeo no navegador [14], o próximo passo é mandar a própria cena. e10.2: porque sete empresas de CAD/GIS/captura estão na extensão [15]. e11: three.js com `WebGPURenderer` [16], bibliotecas listadas no anúncio do WebGPU [1], Unity ainda experimental [17]. **e11.1 (quem bloqueia):** Unity trata WebGPU como alvo de exportação [17]; confiança baixa porque a resposta dos motores é incerta. e11.2: sem artefato direto; sinal rebaixado para fraco (7.9). e11.2.1: nomeia os editais e o mecanismo (contrapartida de acesso público verificável por link); sem artefato. e12 (retroação): números de memória do SuperSplat [14] e lacunas de GPU [2][3].

**Regra de parada.** Parei em cada ramo quando o filho seria o pai "mais adiante": por exemplo, depois de e1.1.1 (portal como porteiro), o próximo seria "o portal cobra mais", que é o mesmo ator e o mesmo mecanismo. Depois de e9.1.1 (compras públicas), o próximo seria "escolas sem GPU ficam de fora", que é o próprio e9.1 amadurecendo.

**Teste da causa solta.** e9.2 (streaming como plano B) poderia acontecer sem WebGPU? Sim, em parte — o streaming existe desde 2019 [32]. Mantido porque o *motivo* de voltar é a fronteira de GPU criada por e9.1; sem a raiz, o streaming seria concorrente do console, não plano B do navegador. e2 (acervo como link) poderia acontecer só com WebGL? Parcialmente, para objetos isolados; a cena capturada pesada com splats não [14]. e3.1 (regulação decide) aconteceria sem a raiz, por causa das lojas em geral — por isso o efeito foi escrito especificamente sobre o *link imersivo*; a regulação existiria de todo modo, o que muda é o que ela passa a decidir.

**Cobertura STEEP e quem perde.** Social: e2, e3.2, e9.1, e11.2. Tecnológico: e5, e7, e8, e10, e11, e12. Econômico: e1, e1.2, e10.1.1, e12.1.1. Ecológico: **vazio** — não encontrei mecanismo específico; o consumo de energia da inferência no cliente é real, mas não achei fonte e ele serve a qualquer tema de IA local (12.4). Político: e3, e3.1, e4.1.1, e5. **Quem perde:** a loja como pedágio (e1.2), agências de runtime WebAR (e2.2), quem tem iPhone (e3), quem tem Android intermediário ou Linux (e9.1), fornecedores de DCC por assento (e10.2), fornecedores de inferência por chamada (e7), criadores que dependem de streaming (e9.2.1).

### Cruzamentos

- **Convergência 1 — a curadoria sai da loja e vai para o navegador e para o assistente.** Chega por quatro ramos de três raízes: e1.1.1 (portal de links), e4.1 (assistente dos óculos), e4.2.1 (permissões do navegador), e7.1.1 (modelo padrão do navegador). A loja não desaparece; o porteiro troca de endereço. É o achado mais valioso do mapa.
- **Convergência 2 — a desigualdade passa a ser de GPU.** e9.1 (Raiz 3), e12 (Raiz 4) e e3 (Raiz 1, pelo lado inverso: o aparelho de maior renda tem a GPU mas não tem o motor) chegam ao mesmo efeito: o acesso depende de uma combinação aparelho × motor × jurisdição.
- **Retroalimentação.** e5.1.1 (fabricantes menores adotam a web) reforça a Raiz 2: quanto mais a web vira a plataforma de quem não tem loja, mais conteúdo existe para o óculos genérico. Em sentido contrário, e6.1.1 (concentração no motor de navegador) enfraquece a promessa da Raiz 1: sem porteiro de loja, o porteiro vira quem mantém o Blink.
- **Contradição.** e7.1 (download volta a pesar) contra e1 (o link é o teste barato): as duas não coexistem no mesmo produto. O que decide é e7.1.1 — se o navegador oferecer modelo compartilhado, o link continua leve; se não, experiência com IA volta a parecer instalação.
- **Contradição 2.** e11.1 (Unity e Epic recapturam a web com blob WebAssembly) contra e10.2 (glTF vira moeda de troca). O que decide: se a extensão de splats for ratificada e adotada pelos motores comerciais como formato de importação, ou se cada motor empacotar a cena no próprio formato.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **`<model>` com ambientes imersivos no Safari 27** [5]. Onde: WebKit, WWDC26. O que mudaria: a Apple estaria construindo a sua versão de "página espacial" fora do WebXR, com controle total sobre o que a página pode fazer (Raiz 2 com gramática da Apple, não do W3C). Sinal observável: `<model>` entrar em fase de padronização no W3C com implementação em outro motor; ou a Apple publicar API de interação dentro do ambiente.
2. **Foveação e space-warp em WebGPU no Quest Browser** [9]. O que mudaria: a web deixaria de ser a versão "leve" no headset. Sinal observável: um título comercial do Quest lançado primeiro como link; ou as notas do navegador passarem de "experimental" a padrão.
3. **Gemini Nano gerenciado pelo navegador** [22]. O que mudaria: e7.1.1 viraria o cenário provável. Sinal observável: API de Prompt sair do origin trial e aparecer em outro motor; ou o Safari anunciar modelo embutido equivalente.
4. **Rokid liderando AR+IA com 41% e a China com 45% desse segmento** [41]. O que mudaria: os fabricantes que mais precisam de catálogo sem loja própria forte estão fora do eixo Apple/Meta/Google (e5.1.1). Sinal observável: um óculos chinês com navegador WebXR como interface principal.
5. **Gestalt Village** (trazido pela turma: modelo de linguagem inteiro no navegador via WebGPU, sem rede). Não o encontrei na busca (12.3), então não entra como fonte. O que mudaria: se jogos de simulação com agentes rodarem no link, a Raiz 3 sai do laboratório. Sinal observável: um jogo com agentes LLM entre os mais jogados de um portal web.

### Wildcards

1. **Uma fabricante de óculos desliga WebXR por padrão** (o wildcard da turma). Mecanismo: alegação de segurança ou privacidade (câmera do mundo, fingerprinting de GPU [38]) justifica restringir WebXR a sites de uma lista, como a Apple quase fez com os web apps no iOS 17.4 na UE antes de recuar sob 500+ queixas [28]. Por que é improvável: as três fabricantes acabaram de *adicionar* WebGPU ao XR [4][7][9], e o recuo de 2024 mostra o custo regulatório. O que faria com o mapa: a Raiz 2 morre naquele ecossistema, e1 recua para o celular, e5 vira a regra. Sinal precoce: WebXR passar a exigir permissão por origem com revisão, ou uma nota de versão que o desligue "temporariamente".
2. **Motor não-WebKit no iPhone em 2027, com WebXR AR.** Mecanismo: a CMA mantém o prazo de 01/01/2027 [26] e o Chrome leva Blink ao iOS britânico com o módulo AR que já tem no Android XR [7]. Por que é improvável: nenhum motor alternativo foi lançado em dois anos e meio de DMA [24], e o prazo pode escorregar 6–12 meses [26]. O que faria: e3 cai de "alta" para "baixa" em poucos anos; a gramática da AR web (e3.2) se unifica mais cedo. Sinal precoce: um beta público de Chrome com Blink no iOS no Reino Unido.
3. **Um ataque grave por WebGPU leva os navegadores a desligar compute por padrão.** Mecanismo: um canal lateral mais forte que o WebGPU-SPY [38] (extração de dado, não só fingerprinting) força uma mitigação drástica. Por que é improvável: há mitigação incremental em curso e o custo de desligar para toda a indústria de IA no navegador seria alto. O que faria: as Raízes 3 e 4 perdem o fundamento técnico; volta a instalação. Sinal precoce: um CVE de WebGPU classificado como crítico com prova de conceito pública.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — "é 2041 e este mapa errou. Por quê?"

1. **O óculos nunca virou aparelho de uso geral, e o celular continuou sendo o centro.** A Meta já admite que o VR cresceu menos que o esperado e moveu o Horizon Worlds para o celular [11]; os óculos que vendem não têm tela [40][41]. Se isso persistir, a Raiz 2 inteira é enredo. Consequência aplicada: e4 confianca mantida em media mas prazo empurrado (ver 7.9); e6 e seus filhos rebaixados para baixa e prazo empurrado.
2. **O sem-instalação falhou pela terceira vez, como Instant Apps e Stadia.** Os dois morreram porque exigiam trabalho extra do desenvolvedor ou custo do fornecedor [31][32]. O link WebGPU exige trabalho extra (fallback WebGL, testes por motor, [2][3]). Consequência: e1 fica em media e não sobe; e11 fica em media.
3. **A loja se adaptou: aceitou o PWA, cobrou menos e manteve a descoberta.** A Meta já aceita PWA [10] e tem incentivo para recuperar dado de uso e pagamento. Se a loja reduzir a taxa, o incentivo de cobrar no link some. Consequência: e1.2 prazo empurrado para 2034 e confiança mantida em media; e1.1 não sobe acima de media.

### 7.2 Extrapolação linear

- **e10 (edição de splats vira de navegador)** é "SuperSplat maior". Ganhou mecanismo de não-linearidade: a extensão glTF [15] cria efeito de rede entre ferramentas, e o link permite revisão colaborativa, que a estação não tem. Mantido, com "principalmente" sob suspeita (7.9).
- **e12.1.1 (banda vira barreira)** é "cena maior, banda maior". Sem mecanismo não-linear forte; mantido na 3ª ordem com confiança baixa e sinalizado aqui.
- **"A loja acaba"** era extrapolação pura de e1; removido (12.4).

### 7.3 Velocidade de adoção

- **e6 (SO do óculos encolhe)** exigia, no rascunho, óculos com tela e navegador em uso amplo em 2036. Referência: nenhum óculos com tela tem navegador em 2026 [42]; VR de consumo levou mais de dez anos sem chegar à maioria [11]. Prazo empurrado de 2036 para 2039 (+3 anos).
- **e4 (página espacial como loja de fato)** tinha prazo 2031; exigia adoção de óculos com tela mais rápida que a de headset. Empurrado para 2034 (+3).
- **e7 (modelo embarcado em jogo web)** tinha 2029; nenhum jogo comercial aberto nesta rodada faz isso; referência WebGL (2011 → 3D comum no navegador ~anos depois, sem número exato aberto). Empurrado para 2032 (+3).
- **e1.2** tinha 2031; a comissão ainda está em disputa judicial [27]. Empurrado para 2034 (+3).

### 7.4 A raiz que não acontece

- **Sem a Raiz 1**, sobram as Raízes 3 e 4 no navegador de desktop e o 3D como ferramenta, não como distribuição: o mapa perde e1–e3, mas e9, e10, e11 continuam. Não é raiz disfarçada.
- **Sem a Raiz 2**, o mapa perde o óculos como destino, mas as Raízes 1, 3 e 4 continuam no celular e no headset atual. É a raiz mais provável de não acontecer (7.1.1).
- **Sem a Raiz 3**, sobra o 3D sem IA; a convergência 1 perde um ramo (e7.1.1) mas se mantém pelos outros três.
- **Sem a Raiz 4**, a criação continua em estação e a web é só destino de publicação; e10 some, e11 sobrevive como exportação.
- Conclusão: as quatro raízes dependem do mesmo pré-requisito técnico (WebGPU), mas não uma da outra. Se o WebGPU for desligado (wildcard 3), três caem juntas; isso está declarado como wildcard, não escondido.

### 7.5 Suposições escondidas

1. **WebGPU continua habilitado por padrão** em todos os motores. Quebrada → wildcard 3.
2. **As fabricantes continuam permitindo WebXR** no óculos. Quebrada → wildcard 1.
3. **Os motores abertos continuam mantidos** (three.js é mantido por comunidade; PlayCanvas é empresa). Quebrada → e11 cai; não virou wildcard porque há vários motores.
4. **O modelo aberto continua aberto** e pequeno o bastante para o cliente (Raiz 3). Quebrada → e7 depende só do modelo do navegador (e7.1.1 vira o único caminho).
5. **A banda continua barata** para cena grande e pesos de modelo. No Brasil, plano pré-pago com franquia torna essa premissa frágil (e7.1, e12.1.1).
6. **A regulação segue na direção atual** (DMA, CMA, CADE, Epic). Um recuo muda e1.2 e e3.1.

### 7.6 Viés do autor

A zona de interesse do autor é "Criação e plataforma", e o mapa foi escrito para quem projeta mídia e interação. Dois efeitos estão aqui em boa parte porque esse público gosta deles: **e2 (acervo como link permanente)** e **e11.2 (a primeira obra nasce publicada)**. Os dois são desejáveis para quem ensina; e11.2 teve o sinal rebaixado e e2 foi mantido porque tem dois artefatos. Há também viés pró-web: o mapa trata a loja como pedágio e a web como aberta, mas e6.1.1 e a convergência 1 mostram que a web também concentra (no motor e no assistente) — foi deixado explícito para compensar.

### 7.7 Calibração

Contagem final: ordem 1 — alta 2, media 8, baixa 2; ordem 2 — alta 1, media 12, baixa 7; ordem 3 — alta 0, media 0, baixa 20. A proporção de "alta" cai (17% → 5% → 0%) e a de "baixa" sobe (17% → 35% → 100%). As duas "alta" de 1ª ordem (e3, e5) e a de 2ª (e9.1) são as que já são observáveis hoje com três artefatos cada — "alta" aqui mede o mecanismo documentado, não a posição na árvore.

### 7.8 Teste do falseador do autor

- **A adoção já passou da maioria inicial?** Para 3D por WebGL e jogo HTML5, sim — por isso foram recusados como raiz. Para WebGPU como alvo primário de 3D pesado e WebXR como distribuição, não: WebGPU tem suporte técnico amplo [3], mas o SuperSplat 3.0 é de 09/09/2026 [14], o Unity marca WebGPU como experimental [17], e não existe número público de uso de WebXR (3.4). Suporte instalado não é adoção de uso.
- **A tecnologia só melhora o que existe?** Para o visualizador de produto, sim (contexto). Para as quatro raízes, cada uma nomeia o que rompe (seção 4). A Raiz 4 é a mais próxima de "melhoria sustentadora" — editar splats no navegador é "editar splats, mais acessível". Mantida porque o que rompe é o entregável (arquivo → link) e a licença por assento, não o editor.

### 7.9 Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| e1.2 | prazo 2031 | prazo 2034 | comissão sobre link ainda em disputa judicial [27] (7.3) |
| e4 | prazo 2031 | prazo 2034 | óculos com tela e navegador: zero em 2026 [42] (7.3) |
| e4.2 | confianca media | confianca baixa | depende do óculos leve, raiz em laboratório (§2 da skill) |
| e6 | prazo 2036, confianca media | prazo 2039, confianca baixa | pré-mortem 1 e referência VR [11] |
| e6.1.1 | prazo 2040 | prazo 2043 | acompanha e6; declarado fora da janela |
| e7 | prazo 2029, sinal forte | prazo 2032, sinal medio | nenhum jogo comercial aberto; os três artefatos eram bibliotecas e demos, não jogos |
| e10 | confianca alta | confianca media | "principalmente" depende de WebGPU em Android e Linux [2][3] |
| e11.2 | sinal medio | sinal fraco | nenhum artefato direto aberto; viés do autor (7.6) |
| e11.1 | confianca media | confianca baixa | resposta de Unity/Epic incerta; só um artefato [17] |
| e12 | confianca alta | confianca media | números de memória são de um fabricante só [14] |
| "a loja de aplicativos acaba" | e1.3 | removido (12.4) | extrapolação sem mecanismo |
| "óculos sem tela ganham navegador por voz" | e4.3 | removido (12.4) | sem tela não há cena 3D; fora do objeto do tema |
| "energia da inferência no cliente" | e9.3 | removido (12.4) | falha no teste de especificidade: serve a qualquer IA local (tema 16) |

Pelo menos um efeito rebaixado ou removido por raiz: Raiz 1 (e1.2; "a loja acaba"), Raiz 2 (e4, e4.2, e6), Raiz 3 (e7; e9.3), Raiz 4 (e10, e11.1, e11.2, e12).

## 8. O que a máquina errou

1. **Data do three.js.** O extrato automático da página de releases do three.js atribuiu ao r186 a data de "08/09/2024". Isso é implausível: o `WebGPURenderer` com XR nativo e TSL com as funções citadas não correspondem a 2024, e o r186 não seria a versão de dois anos atrás. Não usei a data em lugar nenhum; uso só o conteúdo das notas [16].
2. **"Gestalt Village".** A briefing da turma cita o projeto como sinal; a busca não o encontrou (voltaram WebLLM e demos genéricas). Eu poderia tê-lo descrito com a frase do briefing como se fosse fonte. Não o fiz: ficou como sinal fraco sem citação, e registrado em 12.3.
3. **Figma e Chromebook como classes de referência sem número.** Usei "Figma dominou o design 2D em ~5 anos" e "fabricantes de Chromebook competiram por rodar Chrome" como referência. Abri só o post do Figma de 2017 [36], que fala de tempo de carga, não de mercado; o "~5 anos" é de memória. Declarado na prosa como qualitativo; e10 e e6.1 não dependem só disso.
4. **Galaxy XR sem data.** O post do Google aberto [8] traz preço e padrões mas o extrato não mostrou a data de lançamento; eu tinha escrito "lançado em outubro de 2025" de memória e retirei.
5. **Os 20 bi da Apple.** O número "~US$ 20 bi/ano" vem da OWA [25], organização de advocacy; é estimativa citada, não dado auditado. Mantido com a atribuição.
6. **A "precisão de 90"** do WebGPU-SPY [38] aparece no resumo como "precision of 90" sem unidade explícita; tratei como 90%. É a leitura mais provável, mas não conferi no corpo do artigo.
7. **Ordem de grandeza do download (e7.1).** "Centenas de megabytes a gigabytes" combina os 500 MB citados no HN [23] com a ideia de modelos maiores; o "gigabytes" é inferência minha, não número aberto nesta rodada para um jogo.
8. **Mecanismo fraco em e11.2.1.** Editais culturais exigirem link sem instalação é plausível, mas o mecanismo ("contrapartida verificável") é meu; não há artefato. Mantido com sinal fraco e confiança baixa, e marcado aqui como o efeito mais "soa bem, sustenta pouco" do mapa.

## 9. Três cenários para 2041

**Provável.** Em 2041 o 3D e o XR pela web são a porta de entrada comum, mas não a casa. Estúdios pequenos lançam primeiro o link e depois o app; museus e escolas publicam acervo 3D como link em glTF; a edição de cena capturada acontece no navegador para o trabalho médio e em estação para o pesado. Nos headsets, a web é a plataforma de quem não tem loja forte, e as duas maiores fabricantes mantêm o nativo uma geração à frente. O óculos com tela existe e vende, mas seu conteúdo curto chega por um assistente que escolhe quais cartões abrir — e a curadoria que era da loja agora é do assistente e das permissões do navegador. A desigualdade de acesso é de GPU e motor: o Android intermediário brasileiro roda a versão reduzida ou o streaming. **Sinal precoce de que estamos entrando nele:** a Meta ou o Google destacarem na loja PWAs empacotados com a mesma visibilidade dos apps nativos, e a Apple manter o Safari sem `immersive-ar` até 2029.

**Desejável.** Em 2041 um link abre a mesma experiência imersiva em qualquer óculos e em qualquer celular dos últimos cinco anos, com fallback que funciona; a cena é glTF indexável e arquivável; o personagem usa um modelo aberto escolhido pelo criador, cacheado pelo navegador e compartilhado entre sites sem que o navegador imponha o seu. Para chegar aqui teria de acontecer: WebXR (incluindo AR) em todos os motores, inclusive no iOS, por força da CMA/UE/CADE; WebGPU no Android intermediário e no Linux; ratificação e adoção de `KHR_gaussian_splatting` pelos motores comerciais; uma regra de interoperabilidade para modelos no navegador que permita ao criador escolher o modelo. **Sinal precoce:** WebXR e WebGPU entrarem no Interop de algum ano, e um motor não-WebKit no iPhone com o módulo AR.

**Indesejável.** Em 2041 a web imersiva existe, mas atrás de dois porteiros novos: o motor de navegador de que todos os óculos dependem e o assistente que decide o que abre no campo de visão. O link é tecnicamente livre, mas só aparece se o assistente o escolher; o modelo que fala nos jogos é o do navegador; a permissão de ver o mundo é concedida a uma lista de origens aprovadas. Quem tem aparelho antigo roda por streaming com latência, e a imersão confortável virou marcador de renda. **Sinal precoce:** a primeira geração de óculos com tela sair com navegador sem WebXR, ou com WebXR restrito a uma lista de sites; ou a API de Prompt do navegador sair do teste sem opção de trocar o modelo.

## 10. O experimento

**O que é.** "Cartão espacial sem loja": uma experiência curta (dois a três minutos) publicada **só como link** — uma cena glTF com splats (captura de um lugar do CIn), carregada com three.js ou PlayCanvas sobre WebGPU, com um personagem que responde por texto usando um modelo pequeno no cliente (WebLLM ou Transformers.js), e modo imersivo por WebXR quando o aparelho permitir. Aberta por QR em cinco aparelhos: Quest, um headset Android XR (se disponível; senão, Chrome no Android com AR), Vision Pro (se disponível), iPhone e um Android intermediário. Para cada aparelho, uma planilha registra: tempo até a primeira interação, tamanho baixado, o que a página foi impedida de fazer (AR, mãos, WebGPU, modelo), e se caiu para fallback.

**Que pergunta sobre o futuro responde.** Se o conteúdo do óculos viesse da web (Raiz 2), o que cada fabricante deixa a página fazer hoje — e onde a desigualdade de GPU (e9.1) e o peso do modelo (e7.1) quebram a promessa do "é só um link" (e1)?

**Que tecnologia emergente usa, e por que não dá com a madura.** WebGPU compute (ordenação de splats e inferência no mesmo aparelho), WebXR com mãos e AR, modelo no navegador. Com WebGL, a cena com milhões de gaussianas não cabe em memória [14] e a inferência fica na CPU; com um app nativo, a pergunta ("e sem loja?") deixa de existir.

**O que a turma faz ao testar em sala.** Cada dupla abre o link no próprio celular e num óculos disponível; preenche a planilha; depois, a turma compara as colunas por aparelho e marca, no mapa, quais efeitos o resultado confirma ou enfraquece (e3, e3.2, e7.1, e9.1). Uma segunda rodada troca o modelo local por um fallback sem IA, para medir quanto o modelo custa em tempo de primeira interação.

**O que faria mudar de ideia.** (a) Se o link abrir com AR, mãos e modelo funcionando em quatro dos cinco aparelhos, incluindo o Android intermediário, em menos de 10 segundos, e9.1 e e7.1 estão superestimados e o cenário desejável fica mais perto. (b) Se, entrevistados, os colegas disserem que preferem instalar pela loja mesmo quando o link funciona (por confiança ou por achar mais fácil achar depois), a Raiz 1 perde força: a fricção de instalar não seria o que segura a loja. (c) Se o iPhone rodar a cena e o personagem em janela sem diferença perceptível para o Android, e3 é menos grave do que o mapa diz para experiências que não são AR.

## 11. Fontes

Quarenta e duas fontes, todas abertas nesta rodada em 22/09/2026.

**WebGPU e WebXR — especificação, suporte, óculos**

1. https://web.dev/blog/webgpu-supported-major-browsers — web.dev (Google), 25/11/2025. Versões com WebGPU por navegador e plataforma; lacunas; bibliotecas. Sustenta 3.1 e "por que agora" das Raízes 1 e 3. *Confiabilidade:* alta, fonte primária de fabricante.
2. https://github.com/gpuweb/gpuweb/wiki/Implementation-Status — grupo GPU for the Web, editado em 13/08/2026. Lacunas em Linux, Android, Windows ARM. Sustenta 3.2, e9.1, e12. *Confiabilidade:* alta.
3. https://web3dsurvey.com/webgpu — Web3D Survey. 82,09% de suporte; Android 72,48%; Linux 16,97%. Sustenta 3.2, 3.4, 3.5, e9.1. *Confiabilidade:* média — amostra autosselecionada, sem data nem tamanho.
4. https://webkit.org/blog/17640/webkit-features-for-safari-26-2/ — WebKit, 12/12/2025. WebXR com WebGPU no visionOS. Sustenta 3.1, Raízes 1 e 2. *Confiabilidade:* alta.
5. https://webkit.org/blog/17967/news-from-wwdc26-webkit-in-safari-27-beta/ — WebKit, WWDC26. `<model>` em iOS/macOS, ambientes imersivos, sem `immersive-ar`. Sustenta e3, e4, e5, sinal fraco 1. *Confiabilidade:* alta.
6. https://www.uploadvr.com/visionos-2-apple-vision-pro-webxr/ — UploadVR, 2024. WebXR por padrão no visionOS 2, só VR; transient-pointer. Sustenta e3, e5. *Confiabilidade:* média-alta.
7. https://developer.android.com/develop/xr/web — Android Developers. Módulo AR, hit test, âncoras, depth, mãos como entrada padrão no Chrome do Android XR. Sustenta e3.2, e4, e4.2, wildcard 2. *Confiabilidade:* alta.
8. https://blog.google/products-and-platforms/platforms/android/samsung-galaxy-xr/ — Google. Galaxy XR, US$ 1.799, WebXR e OpenXR, Chrome para XR. Sustenta 3.1. *Confiabilidade:* alta para fatos; tom promocional.
9. https://developers.meta.com/horizon/release-notes/web/ — Meta, notas do Quest Browser 2026. WebGPU e depth (146), space-warp (149.1), foveação (150.1). Sustenta 3.1, e4.2, sinal fraco 2. *Confiabilidade:* alta.
10. https://developers.meta.com/horizon/documentation/web/pwa-overview/ — Meta. PWA na Horizon Store, empacotamento opcional por Bubblewrap. Sustenta e1, e1.1. *Confiabilidade:* alta.
11. https://developers.meta.com/horizon/blog/2026-vr-state-of-the-union-horizon-mobile-focus/ — Meta, 2026. VR cresceu menos que o esperado; Worlds para mobile; 86% do tempo em apps de terceiros; sem menção à web. Sustenta pré-mortem 1, e5, classe de referência VR. *Confiabilidade:* alta para a posição da empresa.
12. https://www.w3.org/standards/history/webxr/ — W3C. WebXR em CR desde 2022, CRD de 09/06/2026. Sustenta 3.2, e5.1. *Confiabilidade:* alta.
13. https://web.dev/blog/interop-2026 — web.dev, 12/02/2026. 20 áreas do Interop 2026, sem WebGPU nem WebXR. Sustenta 3.2, e5.1. *Confiabilidade:* alta.
40. https://www.idc.com/resource-center/blog/smart-glasses-surge-the-xr-market-is-rewriting-its-own-rules/ — IDC, 2026. Óculos sem tela: 2,25 milhões no 1º tri de 2026; 13,6 milhões em 2026; 27,3 milhões em 2030; Meta 69,2%. Sustenta 3.4, referência dos óculos leves. *Confiabilidade:* média-alta, previsão de consultoria.
41. https://9to5mac.com/2026/09/21/report-ai-glasses-shipments-surged-263-in-h1-2026-as-apple-prepares-to-enter-the-market/ — 9to5Mac sobre Counterpoint, 21/09/2026. +263% no 1º sem. 2026; Meta 94% dos sem tela; Rokid 41% dos AR+IA; 7 milhões de Ray-Ban Meta em 2025; Apple em 2027. Sustenta 3.4, e5.1.1, sinal fraco 4. *Confiabilidade:* média-alta (secundária de consultoria).
42. https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/ — Google, I/O 2026. Óculos Android XR de áudio no outono, com tela depois; sem menção à web. Sustenta 3.2, Raiz 2 "o que falta", e4.1. *Confiabilidade:* alta para o anúncio.

**Motores, ferramentas, formatos**

14. https://blog.playcanvas.com/new-in-supersplat-editor-3-0-rebuilt-on-webgpu/ — PlayCanvas, 09/09/2026. SuperSplat 3.0 só WebGPU; memória 1.557 → 105 MB. Sustenta Raiz 4, e9.1, e10, e12. *Confiabilidade:* alta para fatos; números do fabricante.
15. https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release — Khronos, 03/02/2026. RC de `KHR_gaussian_splatting`; participantes; ratificação prevista 2º tri 2026. Sustenta Raiz 4, e10, e10.2. *Confiabilidade:* alta.
16. https://github.com/mrdoob/three.js/releases — three.js, r186. `WebGPURenderer`, TSL, WebXR com WebGPU. Sustenta 3.1, e11. *Confiabilidade:* alta para conteúdo; data do extrato errada (seção 8).
17. https://docs.unity3d.com/6000.3/Documentation/Manual/WebGPU.html — Unity 6.3. WebGPU experimental. Sustenta 3.1, e11, e11.1. *Confiabilidade:* alta.
36. https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/ — Figma, 08/06/2017. WebAssembly reduziu o tempo de carga em 3x. Sustenta recusa do 2D e referência da Raiz 4. *Confiabilidade:* alta para o fato técnico.
37. https://modelviewer.dev/ — Google, `model-viewer`. 3D e AR com WebXR. Sustenta recusa do visualizador WebGL e e2. *Confiabilidade:* alta.

**Jogo web e classes de referência**

18. https://poki.com/blog/state-of-web-gaming-report-2026 — Poki, pesquisa de maio de 2026 (400 desenvolvedores, 2.000 jogadores, EUA/Reino Unido). 100+ milhões/mês; 53% planejam portar; 62% compram após descoberta na web. Sustenta 3.1, e1. *Confiabilidade:* média — parte interessada.
31. https://www.androidauthority.com/google-killing-android-instant-apps-3567211/ — Android Authority. Instant Apps 2017–2025, fim por baixa adoção. Sustenta classe de referência, pré-mortem 2. *Confiabilidade:* média-alta.
32. https://en.wikipedia.org/wiki/Google_Stadia — Wikipedia. Stadia 2019–2023, no Chrome, fim por falta de tração. Sustenta recusa do streaming, e9.2. *Confiabilidade:* média.
33. https://en.wikipedia.org/wiki/Adobe_Flash_Player — Wikipedia. Flash 1996–2020; carta de Jobs em 2010; bloqueio em 12/01/2021. Sustenta classe de referência e e2.1. *Confiabilidade:* média.
34. https://en.wikipedia.org/wiki/App_Store_%28Apple%29 — Wikipedia. Plano inicial só de web apps; loja em 07/2008 com 500 apps; pico de ~2,2 milhões em 2017; 30%. Sustenta seção 2, classe de referência, e2. *Confiabilidade:* média.
35. https://ruffle.rs/ — Ruffle. Emulador de Flash em Rust e WebAssembly. Sustenta e2.1, e2.1.1. *Confiabilidade:* alta para o que o projeto é.

**IA no navegador**

19. https://arxiv.org/html/2412.15803v2 — Ruan et al. (CMU), WebLLM. Até ~80% da vazão nativa, em M3 Max. Sustenta Raiz 3, e7. *Confiabilidade:* alta como preprint com código; hardware de ponta.
20. https://huggingface.co/blog/transformersjs-v4 — Hugging Face, 09/02/2026. Runtime WebGPU; GPT-OSS 20B ~60 tok/s; offline após primeira carga. Sustenta Raiz 3, e7, e7.1. *Confiabilidade:* média-alta, número do fabricante.
21. https://www.phoronix.com/news/Chrome-146-Beta — Phoronix, 11/02/2026. WebNN em origin trial. Sustenta 3.1. *Confiabilidade:* média-alta.
22. https://developer.chrome.com/docs/ai/built-in — Chrome. Gemini Nano gerenciado pelo navegador; APIs em origin trial. Sustenta e7.1.1, sinal fraco 3, "quem captura" da Raiz 3. *Confiabilidade:* alta.
23. https://news.ycombinator.com/item?id=44767775 — Hacker News, Show HN, 02/08/2025, 145 pontos. Llama-3.2-1B no navegador; 500 MB; falhas no Safari. Sustenta 3.2, e7, e7.1. *Confiabilidade:* média — comentários de praticantes, não medição.
38. https://arxiv.org/abs/2401.04349 — Ferguson, Wilson, Naghibijouybari, WebGPU-SPY, 2024. Canal lateral de cache da GPU; 90 de precisão em fingerprinting. Sustenta 3.2, e9, wildcard 3. *Confiabilidade:* alta como pesquisa.

**Lojas, regulação, poder**

24. https://www.macrumors.com/2026/06/17/webkit-rule-costs-ios-users-browser-performance/ — MacRumors, 17/06/2026. Nenhum motor alternativo no iOS; benchmarks do Edge com Blink. Sustenta 3.2, e3, wildcard 2. *Confiabilidade:* média-alta.
25. https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/ — OWA, 14/07/2025. Quatro barreiras; ~US$ 20 bi/ano do acordo de busca. Sustenta "quem bloqueia" da Raiz 1, e3. *Confiabilidade:* média — advocacy com argumento documentado.
26. https://www.mymobiles.com/news/cma-apple-mobile-browser-investigation-ruling — MyMobiles, 2026. CMA exige motores alternativos até 01/01/2027; recurso pode adiar 6–12 meses. Sustenta 3.2, e3.1, wildcard 2. *Confiabilidade:* média — fonte secundária.
27. https://www.macrumors.com/2026/04/29/epic-games-wins-reversal-app-store-fee-battle/ — MacRumors, 29/04/2026. Comissão sobre link externo volta à primeira instância. Sustenta e1.2, 7.3. *Confiabilidade:* média-alta.
28. https://techcrunch.com/2024/03/01/apple-reverses-decision-about-blocking-web-apps-on-iphones-in-the-eu/ — TechCrunch, 01/03/2024. Recuo da Apple sobre web apps na UE; 500+ queixas. Sustenta wildcard 1. *Confiabilidade:* alta.
29. https://www.cnnbrasil.com.br/economia/negocios/cade-faz-acordo-para-apple-oferecer-pagamento-e-lojas-de-apps-alternativos/ — CNN Brasil, 12/2025. Acordo CADE-Apple: 105 dias, 3 anos, multa até R$ 150 milhões. Sustenta 3.5, e1.2, e3.1. *Confiabilidade:* média-alta.
30. https://8thwall.org/ — 8th Wall. Plataforma hospedada aposentada em 28/02/2026; partes em MIT; XR Engine binário. Sustenta recusa da WebAR de campanha, e2, e2.2, e2.2.1. *Confiabilidade:* alta, fonte primária.
39. https://gs.statcounter.com/os-market-share/mobile/brazil — StatCounter, agosto de 2026. Android 75,45% no Brasil. Sustenta 3.5, e9.1.1. *Confiabilidade:* média-alta (tráfego, não aparelhos).

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Saída inteira de `python3 futurizacao-giordano/references/verificar.py tendencia-o-navegador-como-console-3d-e-xr-sem-instalacao.md --links`, rodada em 22/09/2026 depois da correção de uma URL com parênteses (a primeira execução acusou 41/42 links porque o verificador corta a URL no `)`; a URL da Wikipedia da App Store passou a usar `%28`/`%29`):

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 20 (frontmatter diz 20)
efeitos ordem 3: 20 (frontmatter diz 20)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e6.1.1', 2043), ('e8.1.1', 2042)]
confiança ordem 1: alta 2 · media 8 · baixa 2
confiança ordem 2: alta 1 · media 12 · baixa 7
confiança ordem 3: alta 0 · media 0 · baixa 20
links da seção 11: 42/42 respondem (frontmatter diz fontes: 42)
RESULTADO: ok
```

Os dois efeitos de 3ª ordem além do horizonte (e6.1.1 em 2043, e8.1.1 em 2042) estão declarados fora da janela na prosa da seção 5.

### 12.2 Premissas assumidas (o que o briefing não cobria)

- **Modo não interativo com briefing completo:** a entrevista (§0) foi substituída pelo bloco `briefing:` e pelas respostas padrão do pedido; sem rebaixamento de confiança, conforme a skill 1.2.0.
- **Cenário de cada lado:** o briefing pede viés neutro; interpretei como a seção 9 com provável, desejável e indesejável, sem inclinar a roda.
- **"Óculos"** neste mapa cobre headset (Quest, Vision Pro, Galaxy XR) e óculos leves com tela; óculos sem tela ficaram fora do objeto (não rodam cena 3D).
- **Fronteira com o tema 16:** IA no navegador entra só quando divide a GPU com a cena (Raiz 3). O efeito de energia foi cortado por isso.
- **Fronteira com o tema 10:** a captura 3D é contexto; a edição e a publicação no navegador são objeto (Raiz 4).
- **Brasil:** tratado como nota (3.5) e em dois efeitos (e9.1.1, e11.2.1), não como recorte separado.
- **Independência:** existe uma rodada irmã desta skill para o mesmo tema com horizonte 2036 (`rodadas/giordano-h2036/15-…`). Li o resumo, as raízes e a lista de fontes dela antes de buscar, e usei a lista como ponto de partida para as buscas. Todas as fontes desta seção 11 foram reabertas nesta sessão. A Raiz 2 (navegador como runtime dos óculos) e os efeitos e4–e6, e8, e2.1.1, e11.2.1 são novos nesta rodada; o restante tem parentesco declarado com a de 2036, reavaliado para 2041. Isto reduz a independência do mapa como contraparte adversarial e fica registrado aqui.

### 12.3 Buscas e aberturas feitas

Buscas (WebSearch):
1. `smart glasses shipments 2026 forecast IDC Ray-Ban Meta sales` → IDC [40], 9to5Mac/Counterpoint [41]; descartados blogs de fabricantes de óculos (Dymesty, AirCaps) por serem parte interessada.
2. `Android XR glasses web browser Chrome 2026 display glasses` → post do Google I/O [42]; o resumo da busca afirmava que "WebAR se torna o caminho de menor fricção" nos óculos Android XR — essa frase veio de um blog de agência (ar-go.co) e **não** foi usada; o post oficial não menciona web.
3. `Gestalt Village WebGPU LLM browser simulation` → **não encontrou o projeto**; voltaram WebLLM [19], a demo do HN [23] e posts genéricos. Gestalt Village fica como sinal da turma sem fonte.

Aberturas diretas (WebFetch), além das três buscas: as 42 páginas numeradas na seção 11, todas abertas nesta sessão.

Buscas que não deram em nada ou não foram feitas:
- Número de uso de WebXR (sessões/mês, usuários): nenhum encontrado em fonte primária. O VR.org cita "40%" sem fonte (12.6).
- Confirmação da ratificação de `KHR_gaussian_splatting` no 2º tri de 2026: não procurada com sucesso nesta rodada; a seção 3 diz "prevista".
- Participação de mercado do Figma: não aberta (seção 8, item 3).
- Energia da inferência no navegador: não buscada, porque o efeito foi cortado por especificidade.

### 12.4 Efeitos cortados e caminhos abandonados

- **"A loja de aplicativos acaba" (rascunho e1.3).** Cortado: extrapolação sem mecanismo; a evidência aponta para a loja virando balcão de cobrança (e1.1), não para o fim. A própria Meta acolhe PWA na loja [10].
- **"Óculos sem tela ganham navegador por voz" (rascunho e4.3).** Cortado: sem tela não há 3D; é tema de assistente, não de plataforma 3D/XR.
- **"A inferência no cliente transfere o custo de energia para o usuário" (rascunho e9.3).** Cortado: falha no teste de especificidade — serve a qualquer IA local (tema 16). Deixou a categoria "ecológico" do STEEP vazia; registrado.
- **"Surge a profissão de desenvolvedor WebXR".** Cortado como genérico ("surge uma nova profissão"); a versão específica é e8.1 (artista técnico de web que escreve restrições de geração).
- **"Cursos de computação gráfica reorganizam o currículo em torno de WebGPU".** Cortado como genérico; substituído por e11.2.1, com ator (editais nomeados) e mecanismo.
- **"O navegador vira o sistema operacional do celular" (3ª ordem da Raiz 1).** Cortado: o precedente é ChromeOS no laptop, e o mapa não tem mecanismo para o celular; a versão sustentável é e6, restrita ao óculos.
- **"WebGPU substitui os consoles de mesa".** Cortado: sem mecanismo nem artefato; a classe de referência (Stadia [32]) aponta contra.
- **Raiz candidata "a cena capturada vira o conteúdo padrão da web".** Recusada: pertence ao tema 10; entra aqui só como o que a Raiz 4 edita.

### 12.5 Dados levantados que não entraram no texto

- Meta: quase US$ 150 milhões investidos em programas de desenvolvedor de VR; compras dentro de apps +13% ao ano; Horizon+ acima de 1 milhão de assinantes; MAU móvel do Worlds 4x em 2025 [11].
- IDC: óculos com tela cresceram 86% no 1º tri de 2026; preço médio de óculos sem tela de US$ 376 caindo para ~US$ 229 em 2030; óculos de visão óptica com tela crescendo 41,9% ao ano até 2030 [40].
- Counterpoint: América do Norte com metade dos embarques de óculos sem tela; Europa Ocidental 28% [41].
- Poki: 46% dos jogadores abandonaram jogo mobile por carga lenta, 28% por tamanho do download; sessão típica de 11–20 minutos [18].
- Transformers.js v4: build de 2 s para 200 ms; tokenizador de 8,8 kB [20].
- Benchmarks do Edge com Blink no iOS: JetStream 3, 306,35 contra 270,9; MotionMark 1.3.1, 4.773,52 contra 4.673,68 [24].
- App Store: mais de US$ 320 bilhões pagos a desenvolvedores até 2023 [34].
- Flash: "mais de 400 milhões de mais de 1 bilhão de desktops conectados" atualizados em seis semanas, segundo a Adobe em 2013 [33].
- 8th Wall Desktop disponível como download offline, com abertura total do código prevista [30].
- Galaxy XR também por US$ 149/mês [8].

### 12.6 Fonte vista e excluída

- **VR.org, "WebXR adoption surge 2026: browsers vs apps"** — listada na rodada de 2036 como exemplo de número sem fonte ("40%"). Não reaberta nesta rodada; não entra na seção 11.
- **ar-go.co, "Android XR and the AR glasses revolution 2026"** — apareceu na busca 2 com a frase de que a WebAR seria o caminho de menor fricção nos óculos Android XR; blog de agência, sem fonte primária; não aberta, não citada.
- **Dymesty, AirCaps, axis-intelligence** — números de óculos inteligentes em blogs de fabricantes ou agregadores; não abertos; preferidos IDC e Counterpoint.
