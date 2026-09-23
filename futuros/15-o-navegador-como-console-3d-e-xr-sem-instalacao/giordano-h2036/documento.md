---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-22
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 12
efeitos_ordem_2: 19
efeitos_ordem_3: 19
tecnologias_citadas: [WebGPU, WGSL, WebGL, WebGL 2, WebXR, WebXR AR Module, Hand Input API, WebNN, WebAssembly, BrowserEngineKit, WebKit, Blink, Chromium, Safari 26, Safari 27, visionOS, Android XR, Galaxy XR, Meta Quest Browser, Meta Horizon Store, Bubblewrap, Trusted Web Activity, PWA, three.js, WebGPURenderer, TSL, PlayCanvas, SuperSplat, Babylon.js, A-Frame, Unity 6, glTF, KHR_gaussian_splatting, Gaussian Splatting, model element, 8th Wall, WebLLM, MLC-LLM, Transformers.js, ONNX Runtime, GeForce NOW, Android Instant Apps, Gestalt Village]
fontes: 38
confianca: media
experimento: "Link contra loja: a mesma cena 3D/XR publicada como link WebGPU e como app empacotado, medida em três aparelhos (celular Android intermediário, iPhone, óculos) por tempo até a primeira interação, taxa de abandono e o que falha em cada um"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Três coisas maduras ficam fora deste mapa como raiz: 3D por WebGL (visualizador de produto,
`model-viewer`), jogo HTML5 leve de portal (Poki declara 100 milhões de jogadores por mês) e jogo
por streaming no navegador (GeForce NOW no Safari desde 2020). O que é novo em 2026 é outra coisa.
A GPU passou a ser acessível pelo navegador em todos os motores principais (WebGPU, Baseline em
novembro de 2025), e os óculos passaram a tratar a web como plataforma: WebXR com WebGPU no
visionOS 26.2, módulo AR e mãos no Chrome do Android XR, WebGPU com foveação no navegador do Quest.
Para 2036, o mapa tem três raízes. **(1)** O link substitui a loja como porta de entrada da
experiência 3D/XR executada localmente. **(2)** A ferramenta de criação 3D pesada vira página, sobre
formato aberto. **(3)** O modelo de IA e a cena passam a dividir a mesma GPU do cliente. O achado
mais forte é uma convergência: as três raízes terminam deslocando a desigualdade de acesso de
"ter o app" para "ter a GPU certa", e deslocando a curadoria da loja para o navegador. A principal
retroação tem dono: a Apple mantém o WebKit obrigatório no iOS e não oferece `immersive-ar` na web,
e nenhum motor alternativo chegou ao iPhone em dois anos e meio de DMA. Confiança geral média; a
terceira ordem é toda baixa.

## 2. O tema

**O que é.** A web como plataforma de *execução* de gráficos 3D e de experiências imersivas — não
como vitrine de vídeo renderizado nem como terminal de streaming. Tecnicamente, é a combinação de
WebGPU (acesso de primeira classe à GPU: render e compute, shaders em WGSL), WebXR (sessões imersivas
em óculos e AR no celular) e motores abertos que já usam as duas (three.js com `WebGPURenderer`,
PlayCanvas, Babylon.js). O resultado prático é que jogo 3D, editor de cena capturada, visualização
científica e experiência de XR abrem por um link, sem loja, sem aprovação e sem instalação.

**Onde encosta em mídia e interação.** Em quatro pontos: distribuição (quem decide o que o público
vê num óculos), autoria (onde e com que ferramenta se produz cena 3D), formato (o que se entrega ao
cliente: vídeo, arquivo, link de cena) e acesso (que aparelho entra na experiência).

**Por que merece mapa de futuro e não levantamento.** Porque a parte técnica está quase resolvida e
a parte institucional não. WebGPU ficou disponível nos quatro motores; o que decide o futuro é se a
Apple, a Meta, o Google, os reguladores e os motores de jogo deixam o link valer como produto
completo. As consequências de segunda e terceira ordem — o que acontece com a taxa de 30%, com a
curadoria, com a desigualdade de hardware, com o arquivamento de obra imersiva — não decorrem da
especificação, decorrem de quem ganha e quem perde com ela.

**Premissas deste mapa (do briefing).** Horizonte 2036. Público: quem projeta mídia e interação.
Recorte global, com nota sobre o Brasil (seção 3.5 e e5.1.1). Descartado de início: o que já é
comum em produto de massa. Viés declarado: neutro. Critério de mudança de ideia fornecido pelo
autor: evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia não rompe nada
e só melhora o que existe — ambos viraram testes na seção 7. Fronteiras com os temas vizinhos: IA
local em geral é o tema 16 (aqui só entra a IA *dentro da experiência interativa no navegador*,
raiz 3); captura 3D é o tema 10 (aqui só a *edição e publicação* da cena no navegador, raiz 2).

## 3. Onde isso está hoje

Âncora feita com busca na web em 22/09/2026 (28 buscas — 22 principais e 6 extras, listadas em 12.3 —; 38 páginas abertas e lidas na seção 11, mais uma em 12.6).

### 3.1 O que já existe e funciona

- **WebGPU nos quatro motores.** Chrome/Edge desde a versão 113 (abril de 2023) em Windows, macOS e
  ChromeOS; Android 12+ com GPU Qualcomm/ARM desde a 121; Firefox 141 no Windows (julho de 2025) e
  145 no macOS ARM; Safari 26 em macOS, iOS, iPadOS e visionOS. O web.dev declarou o suporte "nos
  principais navegadores" em 25/11/2025 [1]. A página de status do grupo gpuweb (editada em
  13/08/2026) mostra o que ainda falta: Linux só em parte no Chrome (Intel Gen12+ desde a 144, NVIDIA
  Wayland desde a 147), Firefox Linux e Android só em Nightly ou atrás de flag, Chrome em Windows ARM
  atrás de flag [2].
- **WebXR com WebGPU no visionOS.** WebXR saiu no Safari 18 do visionOS 2 (setembro de 2024) só para
  `immersive-vr`, com entrada por olhar e pinça [6]; o Safari 26.2 passou a aceitar WebGPU dentro da
  sessão WebXR [4]. O Safari 27 beta (WWDC26) acrescenta "immersive website environments" com o
  elemento `<model>` e uma chamada de API, e leva `<model>` a iOS, iPadOS, macOS e visionOS [5].
- **Android XR trata a web como cidadã.** O Chrome do Android XR expõe o módulo AR, hit test, âncoras,
  profundidade estereoscópica, estimativa de luz e **mãos como entrada principal** [7]. O Galaxy XR,
  primeiro aparelho Android XR, saiu a US$ 1.799 e o Google o descreve como "built on open standards
  with support for tools like OpenXR, WebXR, and Unity" [8].
- **Meta Quest.** O navegador do Quest recebeu em 2026 WebGPU experimental com projeção de
  profundidade (abril, v146), WebGPU em camadas de space-warp (julho, v149) e foveação em WebGPU
  (agosto, v150.1) [11]. A Meta Horizon Store aceita PWA 2D e WebXR imersivo, empacotado com
  Bubblewrap como Trusted Web Activity; a documentação diz que o empacotamento é "optional", e que "a
  web app can remain available through its website without a PWA package" [10].
- **Motores e ferramentas.** three.js está na r186 com `WebGPURenderer`, TSL (shaders escritos em
  JavaScript que compilam para WGSL e GLSL), MSAA em camadas XR nativas e correções de transmissão em
  sessão WebXR [23]. O SuperSplat Editor 3.0 (09/09/2026) foi reescrito sobre WebGPU e **só roda com
  WebGPU**; numa cena de 4,4 milhões de gaussianas (PLY de 990 MB), o uso de memória em repouso caiu
  de 1.557 MB para 105 MB, e um modo "Stochastic Alpha" dispensa ordenação em cenas de ~20 milhões [21].
  O Khronos publicou em 03/02/2026 o candidato a release da extensão `KHR_gaussian_splatting` do glTF,
  com Autodesk, Bentley/Cesium, Esri, Huawei, Niantic Spatial, NVIDIA e XGRIDS [22].
- **IA pela mesma porta.** O WebLLM (CMU, SJTU, NVIDIA) retém até ~80% da vazão de decodificação
  nativa num M3 Max: Llama-3.1-8B a 41,1 tokens/s, Phi-3.5-mini a 71,1 tokens/s [24]. O Transformers.js
  v4 (09/02/2026) traz um runtime WebGPU reescrito em C++ com o time do ONNX Runtime e relata GPT-OSS
  20B (q4f16) a ~60 tokens/s num M4 Pro Max [25].

### 3.2 O que existe e ainda não funciona

- **AR imersiva web na Apple.** `immersive-ar` não existe no visionOS nem no iOS; engenheiros da
  Apple disseram em fórum que o recurso "is not in a testable state" [6]. O Safari 27 beta não o
  menciona [5].
- **Motor alternativo no iPhone.** O DMA exigiu BrowserEngineKit em março de 2024; "more than two
  years later no browser maker has shipped an alternative engine on iOS" [28]. A Open Web Advocacy
  atribui a três barreiras: app separado obrigatório, impossibilidade de teste fora da UE e hostilidade
  contratual [27]. Um protótipo do Edge com Blink marcou 28,6% a mais que o Safari no Speedometer 3.1,
  mas só 2,1% a mais no MotionMark (gráficos) [28]. A CMA britânica deu prazo até 01/01/2027 para a
  Apple abrir motores no Reino Unido [38].
- **WebGPU no Unity.** O Unity 6.3 LTS ainda chama o backend WebGPU de "experimental"; WebGL2 segue
  como padrão [20].
- **WebNN.** Chegou a origin trial no Chrome 146 (fevereiro de 2026) [26], mas foi adiado e
  desativado mais de uma vez por problemas que bloqueavam o release (ver seção 12).
- **Interop.** Nem WebGPU nem WebXR estão entre as 20 áreas do Interop 2026, conforme os anúncios do
  WebKit e do web.dev [14][15]. A especificação WebXR está em Candidate Recommendation Draft
  contínuo desde abril de 2022; a última é de 09/06/2026 [13].

### 3.3 Quem constrói

| Ator | O que faz neste tema | Incentivo |
|---|---|---|
| Google (Chrome, Android XR) | WebGPU desde 2023; WebXR com AR e mãos no Android XR | web aberta como canal de Android XR e de busca |
| Apple (WebKit, visionOS) | WebGPU no Safari 26; WebXR só VR; `<model>` e ambientes imersivos | App Store; controle do motor no iOS |
| Meta (Quest Browser, Horizon Store) | WebGPU com foveação; PWA WebXR na loja | catálogo barato para o Quest sem abrir mão da loja |
| PlayCanvas / three.js / Babylon.js | motores abertos com WebGPU e WebXR | adoção; PlayCanvas vende editor hospedado |
| Khronos, W3C (GPU for the Web, Immersive Web) | glTF com splats; WebGPU; WebXR | interoperabilidade |
| Reguladores (Comissão Europeia, CMA, CADE) | motor de navegador e anti-steering | concorrência |

### 3.4 Números de adoção

- **Suporte a WebGPU por dispositivo** (Web3D Survey, relatórios enviados, sem data nem amostra
  declaradas): 82,09% no total; Chromium OS 92,7%, macOS 89,65%, Windows 86,84%, iOS 84,67%,
  **Android 72,48%**, Linux 16,97% [3].
- **Jogo web (maduro, contexto):** Poki declara 100 milhões de jogadores ativos por mês; 53% de 400
  desenvolvedores (EUA/Reino Unido) planejam portar jogo mobile para o navegador em 12 meses; 62% dos
  jogadores compraram ou baixaram jogo depois de descobrir na web [17].
- **Loja de XR:** a Meta diz que mais de 100 títulos passaram de US$ 1 milhão em receita bruta em 2025
  e que a indústria de VR "hasn't grown as much or as quickly as we'd hoped" [12].
- **Uso de WebXR:** sem número encontrado. O "40% de crescimento em 2026" que circula vem de um artigo
  sem fonte (ver seção 8) [16]. A página de uso do chromestatus não renderizou no fetch.

### 3.5 Nota sobre o Brasil

Android tem 75,45% do tráfego móvel brasileiro em agosto de 2026 (StatCounter) [37]. É no Android
que o suporte a WebGPU é mais baixo entre as plataformas móveis (72,48% dos relatórios do Web3D
Survey, global, amostra autosselecionada) [3] — então a linha da GPU corta mais fundo aqui do que em
mercados de iPhone. Do lado institucional, o acordo da Apple com o CADE (dezembro de 2025) obriga a
permitir oferta e link para pagamento externo e canais alternativos de distribuição, por três anos,
com multa de até R$ 150 milhões [31]; a comissão do link externo, segundo matéria do MacMagazine
(seção 12.6), ficou em 15%. Nenhuma das duas matérias menciona motor de navegador. O Brasil ganhou a porta da loja
alternativa, mas não a do motor.

## 4. As disrupções-raiz

### Recusados como raiz (e tratados como contexto)

- **3D por WebGL no navegador** (visualizador de produto, `model-viewer`, configuradores): recusado;
  roda em produto de massa desde a década passada.
- **Jogo HTML5 leve em portal** (Poki, CrazyGames): recusado; 100 milhões de jogadores por mês [17] e
  prática estabelecida. Entra como classe de referência.
- **Jogo por streaming no navegador** (GeForce NOW no Safari desde novembro de 2020 [36]): recusado;
  não usa a GPU do cliente e existe há seis anos. Entra como efeito (e5.2).
- **WebAR de campanha no celular** (8th Wall): recusado; o próprio 8th Wall aposentou a plataforma
  hospedada em 28/02/2026 e abriu parte do código [32]. Entra como sinal de retroação (e2.1).
- **"A loja de aplicativos acaba"**: recusado como raiz e como efeito — é extrapolação; ver seção 12.

### Raiz 1 — O link substitui a loja como porta da experiência 3D/XR executada localmente

1. **O que rompe.** A suposição de que experiência 3D pesada ou imersiva exige instalação e, portanto,
   passa por uma loja que cura, aprova e cobra. Rompe a loja como ponto obrigatório de descoberta e
   de pedágio.
2. **Por que agora.** WebGPU disponível nos quatro motores só desde o fim de 2025 [1]; WebXR com
   WebGPU no visionOS desde o Safari 26.2 [4]; Chrome do Android XR com AR e mãos [7]; Quest com
   WebGPU experimental desde abril de 2026 [11]. Há cinco anos, WebGL e WebXR sem GPU moderna não
   seguravam o que um óculos exige.
3. **Onde está na difusão.** Produto de nicho, entrando em adoção precoce nos óculos (onde o navegador
   já é o caminho multiplataforma) e ainda de nicho no celular. Emergente.
4. **O que falta.** `immersive-ar` na Apple; motor não-WebKit no iOS; WebGPU no Firefox Android e no
   Linux; WebGPU como padrão no Unity; um meio de pagamento na web que não pague comissão ao sair do
   app; uma métrica pública de uso de WebXR.

**Quem bloqueia.** A Apple: tem incentivo (App Store e ~US$ 20 bi/ano do acordo de busca com o Google
[27]) e instrumento (WebKit obrigatório, VR sem AR). Efeito com dono: e3.

### Raiz 2 — A ferramenta de criação 3D pesada vira página, sobre formato aberto

1. **O que rompe.** A estação instalada e licenciada como pré-condição para editar cena 3D pesada, e o
   pipeline "exportar arquivo, mandar arquivo, abrir em outro programa". O entregável deixa de ser
   arquivo ou vídeo e passa a ser um link de cena.
2. **Por que agora.** WebGPU compute permite ordenar, recortar e compactar milhões de gaussianas na
   GPU do navegador — o SuperSplat 3.0 só existe porque isso passou a ser possível [21]; o glTF ganhou
   extensão de splats com a indústria de CAD e GIS [22]. Em WebGL isso não cabia na memória.
3. **Onde está na difusão.** Produto de nicho (edição de splats, cena capturada, visualização).
   Distinto do caso 2D (Figma), que é maduro e fica fora.
4. **O que falta.** Ratificação da extensão glTF (prevista para o segundo trimestre de 2026, sem
   confirmação encontrada); streaming de cena grande; WebGPU em todo Android e no Linux; colaboração
   em tempo real sobre cena; modelo de negócio para o editor gratuito.

**Quem bloqueia.** Fornecedores de DCC com licença por assento, e os motores comerciais (Unity, Epic),
que preferem que a web seja alvo de exportação do próprio motor. Efeito com dono: e7.2.

### Raiz 3 — O modelo de IA e a cena dividem a mesma GPU do navegador

1. **O que rompe.** A regra de que mídia interativa com IA (NPC que conversa, narração, assistente de
   edição) exige servidor do criador e custo por usuário. O custo marginal passa ao aparelho de quem
   usa.
2. **Por que agora.** WebLLM a 71–80% da vazão nativa [24] e Transformers.js v4 com runtime WebGPU
   [25] são de 2024–2026. Antes de WebGPU, inferência séria no navegador ficava na CPU ou em WebGL.
3. **Onde está na difusão.** Demo pública e biblioteca com código; em jogo e XR, laboratório. Parte
   especulativa: confiança baixa na maior parte da cadeia.
4. **O que falta.** Modelos pequenos bons o bastante para diálogo em jogo; memória em celular
   intermediário; WebNN estável [26]; cache de pesos entre sites; regra de moderação para fala gerada
   no cliente.

**Quem bloqueia (ou captura).** Os fabricantes de navegador, que podem embutir o próprio modelo e
torná-lo o padrão, e os fornecedores de API de inferência, que perdem receita. Efeito com dono: e10.1.1.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O link substitui a loja como porta da experiência 3D/XR executada localmente (WebGPU + WebXR como alvo primário)
    efeitos:
      - id: e1
        ordem: 1
        efeito: Estúdios pequenos de jogo 3D e XR passam a lançar primeiro uma versão jogável completa como link WebGPU e só depois empacotam para loja
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A loja de óculos vira canal de cobrança e reembalagem de web apps (PWA empacotado) e perde para o link compartilhado a função de descoberta
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Portais agregadores de 3D e XR na web assumem a curadoria com receita de anúncio e reconstroem um porteiro de taxa menor que controla o ranking
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O funil experimenta-no-link e compra-no-app vira o padrão de lançamento de jogo 3D, e quem tem demo web paga menos para adquirir jogador
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Lojas nativas passam a restringir links para demos web nas fichas de apps, e a disputa anti-steering se reabre no terreno das demos
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Experiências XR de marca, museu e ensino passam a abrir por QR ou link no óculos e no celular com o mesmo código, sem app
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Agências de XR trocam runtime proprietário hospedado por pilha aberta (three.js, PlayCanvas, WebXR) e o valor sai do SaaS de runtime para a produção de conteúdo
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Sem runtime pago, o rastreamento de imagem e rosto no celular passa a depender de poucos mantenedores, e a WebAR móvel estagna fora do Android XR
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Museus e escolas passam a publicar acervo 3D e XR como link permanente em glTF em vez de app que expira com o contrato
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Obras imersivas lançadas como app nativo entre 2016 e 2026 viram as mais perdidas do período, e a preservação passa a arquivar página e cena
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A Apple mantém WebKit obrigatório no iOS e WebXR sem AR no visionOS, e a experiência imersiva web fica pior justamente no aparelho de maior renda
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Projetistas desenham para o menor denominador (VR no óculos, 3D em janela no iPhone) e a AR de passagem na web se concentra no Android XR e no Quest
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A gramática da AR web (mão como entrada padrão, profundidade estereoscópica) nasce no Android XR, e o iOS, quando abrir, importa convenções que não desenhou
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Prazos regulatórios da CMA britânica e da Comissão Europeia viram a variável que decide se o link imersivo chega ao iPhone, e a disputa passa a ser pela especificação técnica do BrowserEngineKit
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Onde um motor não-WebKit chegar ao iPhone, campanhas de jogo WebGPU passam a indicar o navegador recomendado, e o link universal se fragmenta por jurisdição
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Jogos 3D e XR cujo produto inteiro roda no link passam a cobrar direto na web, e a comissão de 30% perde base onde o pagamento externo não é taxado
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Fabricantes de óculos passam a oferecer vantagem de descoberta a quem empacota o web app na loja, para recuperar dado de uso e pagamento
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A diferença entre app e site deixa de ser técnica e vira contratual, e a regulação passa a mirar o contrato de distribuição em vez do binário
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A desigualdade de acesso a experiências 3D muda de ter o app para ter uma GPU que o navegador aceita, com o Android intermediário como fronteira
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Produtores de conteúdo público e educativo mantêm duas versões (WebGPU e WebGL ou 2D), e o custo da acessibilidade gráfica recai sobre quem tem menos orçamento
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: No Brasil, com três quartos dos celulares em Android, o suporte a WebGPU entra como critério em compras públicas de dispositivos escolares
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O streaming de GPU pelo navegador vira o plano B de quem não tem WebGPU, e o sem-instalação se divide em local (rico e privado) e nuvem (pago e com latência)
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A latência vira marcador de classe na XR web, e quem depende de streaming fica restrito a experiências em janela, sem imersão confortável
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: A ferramenta de criação 3D pesada vira página — editar, revisar e publicar cena no navegador sobre formato aberto
    efeitos:
      - id: e6
        ordem: 1
        efeito: A edição de splats e de cenas capturadas passa a ser feita principalmente em editores de navegador, sem instalação por estação
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O entregável ao cliente passa de vídeo renderizado a link de cena navegável, e a revisão acontece dentro da cena, com comentário espacial
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Contratos de produção 3D passam a cobrar hospedagem e manutenção da cena como serviço recorrente, porque o entregável é um link que precisa continuar vivo
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O glTF com splats vira a moeda de troca entre ferramentas, e o formato proprietário perde valor como fosso dos fornecedores de DCC
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Fornecedores de DCC deslocam o fosso para o processamento em nuvem (treino, compressão e streaming de cena), e a cobrança passa do assento ao processamento
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Motores web abertos (three.js, PlayCanvas, Babylon.js) passam a ser alvo primário em visualização e jogo 3D, com a exportação web de Unity e Unreal como segunda opção
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O artista técnico de web (shader em TSL e WGSL, orçamento de GPU do celular) se separa do artista técnico de console, com portfólio e mercado próprios
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A primeira obra 3D interativa de quem começa passa a nascer publicada, como fork de exemplo no navegador, e o link substitui o executável no portfólio de entrada
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Unity e Epic respondem com exportação web própria otimizada e runtime hospedado, recapturando o alvo web dentro do próprio ecossistema
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A web imersiva se bifurca entre cenas abertas indexáveis (glTF e HTML) e blobs WebAssembly de motor, e só as primeiras podem ser buscadas, arquivadas e remixadas
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A memória e a GPU do celular médio limitam o editor de navegador a cenas médias, e estúdios mantêm estação nativa para o trabalho pesado
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O streaming de cena por nível de detalhe vira camada obrigatória da publicação 3D, e quem hospeda o streaming vira intermediário
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Provedores de nuvem vendem hospedagem de cena como produto, e o custo de banda, não o de licença, vira a barreira de entrada do criador independente
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Navegadores restringem informação de adaptador e precisão de timer no WebGPU para conter fingerprinting, e ferramentas pesadas perdem desempenho e previsibilidade
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Ferramentas profissionais no navegador passam a pedir permissão de modo desempenho por origem, e a instalação reaparece disfarçada de permissão
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O navegador herda o papel de autoridade que concede poderes a aplicações, e a curadoria que era da loja passa a ser feita na política de permissões do navegador
                sinal: fraco
                prazo: 2035
                confianca: baixa
  - disrupcao: O modelo de IA e a cena dividem a mesma GPU do navegador — mídia interativa com IA sem servidor do criador
    efeitos:
      - id: e10
        ordem: 1
        efeito: Jogos e experiências web passam a embarcar modelo pequeno (NPC, narração, voz) rodando no cliente, e o criador independente deixa de pagar inferência por jogador
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O tamanho do download volta a ser restrição de design, porque modelo de gigabytes exige cache persistente e a primeira visita ao link deixa de ser instantânea
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Navegadores passam a oferecer modelo compartilhado entre sites, e quem escolhe o modelo padrão do navegador define a voz e o estilo dos personagens da web
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Portais de jogo web aceitam títulos com IA generativa sem custo de servidor, e a moderação da fala gerada no cliente passa a ser problema do portal
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A classificação etária passa a considerar o modelo embarcado, e portais exigem na submissão a lista de modelos e filtros que o jogo carrega
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Editores 3D de navegador ganham assistente local (segmentar, limpar e texturizar cena) que não envia a captura do cliente para servidor
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Capturas 3D de espaços sensíveis (casa, hospital, acervo) passam a ser editadas no próprio aparelho, e processar sem sair do navegador vira cláusula de contrato
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Contratantes públicos no Brasil, sob a LGPD, passam a exigir processamento local na digitalização 3D de interiores
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A GPU do usuário vira recurso disputado entre cena, modelo e página, e navegadores impõem orçamento por aba que derruba experiências pesadas em segundo plano
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Fabricantes de celular intermediário passam a anunciar desempenho de WebGPU como especificação de venda, como antes anunciavam câmera
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A exclusão passa a ser por geração de chip e não por conexão, e aparelhos de 2024 ficam fora da web rica em 2034 mesmo com 5G
                sinal: fraco
                prazo: 2034
                confianca: baixa
```

### Mecanismos, classes de referência e o que o bloco não diz

**Classes de referência usadas para os prazos.**
- *R-a, WebGPU do primeiro navegador à paridade:* Chrome 113 em abril de 2023 → quatro motores em
  novembro de 2025, ~2,5 anos [1][2]. Serve para prazos de especificação e suporte.
- *R-b, WebXR sem virar Recommendation:* Candidate Recommendation em março de 2022, ainda CRD em junho
  de 2026, 4+ anos [13]. Serve para prazos que dependem de convergência entre motores.
- *R-c, app sem instalação dentro da loja:* Android Instant Apps, 2017 → desligado em dezembro de 2025
  por baixa adoção, ~8 anos sem chegar a 10% [33]. Serve de freio: "sem instalação" já fracassou uma
  vez quando exigia trabalho extra do desenvolvedor.
- *R-d, contornar a loja pelo navegador:* GeForce NOW no Safari desde novembro de 2020 [36], seis
  anos e ainda nicho. Serve para prazos da Raiz 1 no iPhone.
- *R-e, plataforma comercial de WebAR:* 8th Wall, lançado comercialmente na década passada e
  aposentado em fevereiro de 2026 [32]. Ciclo completo sem chegar à maioria.
- *R-f, VR de consumo:* mais de dez anos e ainda abaixo de 10% (dado da skill; a Meta confirma que o
  crescimento ficou aquém [12]). Teto para tudo que depende de óculos.

**Raiz 1.** *e1* — porque o link WebGPU dá ao estúdio uma versão completa sem aprovação e sem taxa,
e porque 53% dos desenvolvedores de portal já planejam portar para o navegador [17]; prazo 2029 pela
R-a mais três anos de amadurecimento de motor. *e1.1* — porque a Meta já aceita PWA WebXR na loja e
diz que o empacotamento é opcional [10], a loja passa a disputar o mesmo código que circula por link;
o que ela retém é cobrança e confiança. *e1.1.1* — porque descoberta sem loja precisa de agregador, e
agregador de jogo web já existe com 100 milhões de usuários [17]; o mecanismo é o mesmo de Poki
aplicado ao 3D — é troca de ator (loja → portal), por isso é outra ordem. *e1.2* — porque 62% dos
jogadores web compraram depois de descobrir na web [17]; o link vira topo de funil. *e1.2.1* — porque
a loja perde a descoberta e reage onde tem controle, na ficha do app; o litígio Epic × Apple sobre
link externo segue aberto (retorno à primeira instância em abril de 2026 [29]).

*e2* — porque o mesmo código WebXR agora roda no visionOS (VR), no Android XR (AR e mãos) e no Quest
[4][7][11], o custo de ter experiência em três óculos cai para um. *e2.1* — sinal forte com três
artefatos: 8th Wall aposentado e aberto [32], PlayCanvas aberto com WebXR, three.js com WebXR sobre
WebGPU [23]; prazo 2028. *e2.1.1* — porque o 8th Wall liberou o XR Engine só como binário de licença
limitada [32], a camada de rastreamento fica sem dono comercial; retroação dentro da raiz. *e2.2* —
porque link em glTF não expira com contrato de app e a extensão de splats dá formato aberto para
acervo capturado [22]; a reação de escolas e hospitais quando a Apple tentou tirar web apps na UE
(mais de 500 queixas [30]) mostra que instituição pública já depende de web app. *e2.2.1* — porque
app nativo de XR depende de loja e SO que mudam; página e cena glTF são arquiváveis. Prazo 2035.

*e3* — **quem bloqueia**; sinal forte com três artefatos: VR sem AR no visionOS [6], nenhum motor
alternativo no iOS [28], barreiras descritas pela OWA [27]. Confiança alta porque o efeito já é
observável e o incentivo está escrito. *e3.1* — porque projetista desenha para o público pagante e o
iPhone não oferece AR web, a AR web se muda para onde ela funciona. *e3.1.1* — porque quem implementa
primeiro define as convenções (mão como entrada padrão [7]). *e3.2* — porque a CMA deu prazo até
01/01/2027 [38] e a OWA pede que a Comissão Europeia especifique as barreiras [28]; a disputa sai do
"pode ou não pode" para "em que termos técnicos". *e3.2.1* — porque o motor alternativo chega por
jurisdição (UE, Reino Unido), não globalmente.

*e4* — porque o produto inteiro roda no link, o pagamento pode ficar na web; onde o link-out é
taxado (15% no acordo do CADE, seção 12.6; "comissão razoável" em definição nos EUA [29]) o ganho encolhe.
Teste da especificidade: sem a Raiz 1, a regra anti-steering beneficia apps nativos que vendem fora,
mas não cria produto 3D completo fora da loja — o efeito depende da raiz. *e4.1* — porque a loja
perde pedágio mas ainda controla a descoberta dentro do óculos; o mecanismo de empacotamento já
existe [10]. *e4.1.1* — porque o mesmo código é "app" ou "site" conforme o contrato, a regulação
precisa de outro objeto.

*e5* — porque 27,5% dos relatórios Android no Web3D Survey não têm WebGPU [3] e o SuperSplat 3.0
mostra uma tela de aviso em vez do editor [21], quem não tem GPU aceita fica de fora, não com versão
pior. *e5.1* — porque o three.js cai para WebGL2 automaticamente [23] mas nem toda ferramenta faz
isso; manter duas versões custa, e custa mais para quem produz conteúdo público. *e5.1.1* — nota do
Brasil: 75,45% Android [37]. *e5.2* — porque o streaming por navegador já existe [36], ele é o
substituto natural onde a GPU local falta. *e5.2.1* — porque XR imersiva tolera pouca latência, e o
streaming a impõe.

**Raiz 2.** *e6* — sinal forte: SuperSplat 3.0 WebGPU-only [21], extensão glTF de splats com
Autodesk e NVIDIA [22], editor PlayCanvas hospedado. Prazo 2028 pela R-a (a ferramenta já existe;
falta a base de aparelhos). *e6.1* — porque, se a cena abre por link, mandar vídeo renderizado deixa
de ser o único jeito de mostrar. *e6.1.1* — porque link precisa de hospedagem viva, o contrato ganha
parcela recorrente. *e6.2* — porque um formato aberto com os fornecedores de CAD e GIS dentro reduz o
custo de trocar de ferramenta. *e6.2.1* — retroação do fornecedor: se o editor é página, o que se
cobra é o processamento. *e7* — porque o `WebGPURenderer` cai para WebGL2 sozinho [23] e o Unity ainda
trata WebGPU como experimental [20], o motor aberto chega primeiro. *e7.1* — porque TSL e WGSL são
outro ofício que HLSL de console. *e7.1.1* — porque o exemplo que roda no navegador é bifurcável na
hora. *e7.2* — **quem bloqueia**: o Unity já disse em 2024 que via WebGPU como mercado em
crescimento [19]; o motor comercial tem incentivo para manter a web como alvo de exportação próprio.
*e7.2.1* — porque blob WebAssembly de motor não é indexável como glTF e HTML. *e8* — **retroação**:
os números do SuperSplat mostram que cena de 4,4 milhões de gaussianas ainda precisa de 623 MB para
salvar [21]; celular intermediário não segura o pesado. *e8.1* — porque a própria PlayCanvas já
publica streaming de splats como caminho [21]. *e8.1.1* — troca de ator (editor → nuvem). *e9* —
**retroação** política: WebGPU-SPY obteve 90% de precisão identificando 100 sites por canal lateral
de cache na GPU [34]; um estudo de 2026 mede o custo de mitigação entre navegadores [35]. Restringir
timer e adaptador custa desempenho. *e9.1* — porque restrição geral pede exceção por permissão.
*e9.1.1* — porque quem concede poderes a aplicações faz curadoria, mesmo sem loja.

**Raiz 3.** *e10* — porque WebLLM e Transformers.js já rodam modelos de 4–20 bilhões de parâmetros no
navegador em máquina de ponta [24][25]; o custo passa ao aparelho. Prazo 2030 por R-a aplicada a
modelos pequenos em celular, com confiança média porque o celular médio é o gargalo. *e10.1* — porque
modelo pesa gigabytes e a promessa do link é a primeira visita instantânea; é a mesma restrição que
matou o Instant Apps (limite de 15 MB, R-c [33]) voltando por outro lado. *e10.1.1* — **quem captura**:
o fabricante de navegador que oferecer modelo compartilhado define o padrão. *e10.2* — porque sem
servidor não há ponto central de moderação. *e10.2.1* — porque o regulador de classificação precisa de
algo verificável. *e11* — porque captura de interior é dado sensível e o processamento no cliente o
mantém local. *e11.1* e *e11.1.1* — porque LGPD e contratos públicos já tratam dado de interior como
pessoal; troca de ator (ferramenta → contratante). *e12* — **retroação**: três cargas pesadas na
mesma GPU; sem artefato verificado hoje, sinal fraco. *e12.1* — porque, se a experiência depende da
GPU, ela vira argumento de venda. *e12.1.1* — converge com e5.

**Regra de parada.** Nenhum ramo foi para a quarta ordem. Em e2.1.1, e8.1.1 e e12.1.1 o filho
seguinte seria o mesmo efeito "mais adiante" (mais estagnação, mais custo de banda, mais exclusão),
sem troca de ator; parei.

**Cobertura STEEP e quem perde (1ª ordem).**
- Social: e2, e5. Tecnológico: e6, e7, e8, e10, e12. Econômico: e1, e4. Político: e3, e9. Ecológico:
  **vazio** — o consumo de energia de GPU no cliente contra no servidor não tem mecanismo que eu
  consiga ancorar em fonte aberta nesta rodada; registrado na seção 12.
- Quem perde: lojas de apps (e1, e4), SaaS de runtime WebAR (e2.1), usuário de iPhone na AR web (e3),
  dono de Android sem WebGPU e quem produz conteúdo público (e5), fornecedores de DCC por assento
  (e6.2), fornecedores de API de inferência (e10), privacidade do usuário (e9).

### Cruzamentos

- **Convergência 1 — a linha da GPU.** e5 (Raiz 1), e8 (Raiz 2) e e12.1.1 (Raiz 3) chegam ao mesmo
  lugar: a exclusão deixa de ser por loja ou conexão e passa a ser por geração de GPU. É o achado mais
  forte do mapa, porque vem por três mecanismos diferentes (suporte ao WebGPU, memória para cena,
  disputa entre cena e modelo).
- **Convergência 2 — a curadoria muda de casa.** e1.1.1 (portal agregador), e9.1.1 (política de
  permissões do navegador) e e10.1.1 (modelo padrão do navegador): três caminhos para o mesmo
  resultado — sem loja, o poder de decidir o que o público vê vai para o navegador ou para o
  agregador, não desaparece.
- **Retroalimentação.** e7.2 (Unity/Epic recapturando o alvo web) enfraquece a Raiz 2: se a web
  imersiva virar blob de motor, ela perde a indexabilidade e o arquivamento que motivaram e2.2 e e6.
  Ciclo: mais web → mais incentivo para motor comercial capturar → menos web aberta.
- **Retroalimentação positiva.** e2.2 (acervos públicos em link) reforça a Raiz 1: instituição pública
  que depende de web app é quem reclamou em 2024 [30] e é quem pressiona regulador.
- **Contradição.** e4 (a comissão perde base) × e4.1 (o fabricante recupera pedágio via
  empacotamento). Não coexistem na mesma escala. O que decide: se a descoberta dentro do óculos
  continua passando pela loja. Se passar, vence e4.1; se o link compartilhado fora do óculos
  prevalecer, vence e4.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **`<model>` e "immersive website environments" no Safari 27** [5]. Onde: anúncio da WWDC26. O que
   mudaria: a Apple pode estar construindo uma via própria de 3D imersivo na web, declarativa, que
   dispensa WebXR — o que desviaria a Raiz 1 no ecossistema Apple para um padrão que ela controla.
   Sinal observável: `<model>` ou ambientes imersivos propostos a outro motor (Chromium ou Gecko) ou
   levados ao W3C com implementação fora do WebKit.
2. **Foveação e space-warp em WebGPU no navegador do Quest** [11]. O que mudaria: são recursos de
   desempenho que antes só o app nativo tinha; se saírem de "experimental", a diferença de qualidade
   entre web e nativo no óculos encolhe. Sinal observável: remoção do rótulo experimental e um
   título de loja publicado só como PWA WebXR.
3. **Editor que se recusa a rodar sem WebGPU** (SuperSplat 3.0 [21]). O que mudaria: se mais
   ferramentas abandonarem o fallback, a linha da GPU (convergência 1) chega antes. Sinal observável:
   three.js ou PlayCanvas deixarem de manter o backend WebGL2.
4. **Gestalt Village** — citado pela turma como modelo de linguagem inteiro carregado no navegador
   via WebGPU, sem requisição de rede. Não localizei o projeto na busca (seção 12); fica como sinal
   não verificado. Sinal observável: um jogo com NPC gerado localmente publicado num portal de massa.

### Wildcards

1. **Uma fabricante de óculos desliga WebXR por padrão.** Mecanismo: a plataforma alega segurança
   (rastreamento de ambiente, permissões de câmera) ou desempenho e passa a exigir flag ou app
   empacotado. Improvável porque as três principais apostaram na web (Android XR [8], visionOS [4],
   Quest [10]) e porque a Apple recuou em 2024 da remoção de web apps na UE depois de 500 queixas [30].
   O que faria com o mapa: derruba e2 e e1 naquele óculos e acelera e4.1. Sinal precoce: WebXR
   movido para configuração avançada numa atualização de SO.
2. **Um motor não-WebKit chega ao iPhone em escala.** Mecanismo: a CMA exige conformidade até
   01/01/2027 [38] e a Apple decide implementar globalmente para não manter duas versões do iOS
   (hipótese levantada pela própria matéria). Improvável porque em dois anos e meio de DMA nenhum
   motor chegou [28]. O que faria: Raiz 1 ganha o iPhone de uma vez, e3 cai, e3.2.1 perde sentido.
   Sinal precoce: Chrome com Blink em beta pública no iOS britânico.
3. **Falha de segurança grave via WebGPU explorada em massa.** Mecanismo: acesso à GPU é superfície
   de ataque nova [34]; uma exploração de ampla escala leva navegadores a desligar compute ou exigir
   permissão. O que faria: a Raiz 3 recua e e9 vira o efeito dominante. Sinal precoce: um CVE de
   WebGPU com exploração ativa registrada.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — "é 2036 e este mapa errou. Por quê?"

1. **Os óculos não pegaram.** A VR de consumo seguiu abaixo de 10% (R-f) e a Meta já admite que o
   mercado cresceu menos que o esperado [12]. Se os óculos não saem do nicho, metade da Raiz 1 (e2, e3)
   vira nota de rodapé e a disrupção se resume a jogo 3D em aba de navegador. **Ação:** e2 prazo mantido
   em 2029, mas confiança não sobe; e2.2.1 teve prazo empurrado (ver registro).
2. **O Unity resolveu primeiro.** Se o Unity passar WebGPU a padrão e dominar a exportação web, o
   "motor aberto como alvo primário" (e7) não acontece: a web vira alvo de exportação de motor
   comercial, e a Raiz 2 perde força. **Ação:** e7 confiança mantida em média mas prazo empurrado; e7.2
   entra como retroação explícita.
3. **A IA no navegador ficou no desktop.** Os números de WebLLM e Transformers.js são de M3 Max e M4
   Pro Max [24][25]. Se o celular médio não carrega modelo útil até 2036, a Raiz 3 é um fenômeno de
   notebook caro. **Ação:** e10 prazo empurrado; e11 sinal rebaixado; e12 confiança rebaixada.

### 7.2 Extrapolação linear

- **e1.1 ("a loja perde a descoberta")** era, na primeira versão, "a loja de apps perde relevância" —
  só "menos loja". Ganhou mecanismo não linear: a descoberta migra para portais (e1.1.1), que
  reconstroem o porteiro. A versão linear foi removida (seção 12).
- **e8.1.1 (custo de banda)** é "mais cena, mais banda". Mantido porque troca o ator (nuvem) e o
  mecanismo (a barreira passa de licença para tráfego); se não trocasse, perderia a ordem.
- **e12.1.1** é, em parte, e5 "mais adiante". Mantido como terceira ordem da Raiz 3 porque o
  mecanismo é outro (disputa de GPU entre cena e modelo, não suporte à API) — e declarado como
  convergência em vez de efeito novo.

### 7.3 Velocidade de adoção

- **e2.1 (agências trocam runtime SaaS):** a primeira versão dizia 2027. Pela R-e, a saída do 8th Wall
  é de 2026 e a migração de agências leva ciclos de contrato; empurrado para 2028 (+1 ano).
- **e10 (NPC local em jogo web):** primeira versão 2028. Pela R-a (2,5 anos da API à paridade) mais o
  gargalo do celular médio, 2028 exigia adoção mais rápida que a própria WebGPU teve; empurrado para
  2030 (+2 anos).
- **e2.2.1 (preservação):** primeira versão 2032. Instituições de memória trabalham em ciclos longos
  e nenhuma política pública de arquivamento de XR foi encontrada; empurrado para 2035 (+3 anos).
- **e7 (motor aberto como alvo primário):** primeira versão 2029. O Unity levou de 2024 (anúncio de
  interesse [19]) a 2026 sem tirar WebGPU do experimental [20]; empurrado para 2030 (+1 ano).
- **e3.2 (regulador como variável decisiva):** primeira versão 2027, coincidindo com o prazo da CMA.
  Pela R-d e pelo histórico do DMA (prazo formal em 2024, nenhum motor em 2026 [28]), prazo formal não
  é adoção; empurrado para 2028.

### 7.4 A raiz que não acontece

- **Se a Raiz 1 não acontece** (a loja segue como porta), sobram a Raiz 2 (ferramenta de criação na
  página não depende de loja) e a Raiz 3 (o modelo no navegador serve a editores e a sites, não só a
  jogos). O mapa não é uma raiz disfarçada — mas perde e4 e boa parte da convergência 2.
- **Se a Raiz 2 não acontece** (a estação nativa segue dominante), a Raiz 1 continua para consumo
  (jogar, visitar), e a convergência 1 perde um de três mecanismos (e8).
- **Se a Raiz 3 não acontece**, o mapa perde e10–e12, mas as Raízes 1 e 2 ficam intactas — a Raiz 3 é
  a mais especulativa e a mais dispensável; é a que tem mais confiança baixa.

### 7.5 Suposições escondidas

1. **A Google continua financiando uma web aberta.** A Raiz 1 depende de o Chrome ser o aliado da web
   contra lojas. Mas o Google também tem loja (Play). Se o Android XR crescer, o incentivo pode virar.
   → Vira parte do wildcard 1.
2. **WebGPU segue sem permissão.** Toda a Raiz 2 assume acesso à GPU sem prompt. → Vira o wildcard 3
   e o efeito e9.
3. **O pagamento web é barato e sem atrito.** e4 assume isso; o litígio nos EUA ainda define a
   "comissão razoável" [29]. → e4 fica em confiança média, não sobe.
4. **Os modelos abertos continuam abertos e pequenos o bastante.** A Raiz 3 inteira depende disso. →
   Declarado; não gera efeito novo porque é o tema 16.
5. **Energia no cliente é gratuita para o criador.** A Raiz 3 transfere custo ao usuário (bateria,
   calor). → Categoria ecológica ficou vazia justamente aqui; registrado na seção 12.

### 7.6 Viés do autor

Este mapa foi escrito para quem projeta mídia e interação, e a zona de interesse é "Criação e
plataforma". Os efeitos de autoria (e6, e7.1, e7.1.1) estão aqui em parte porque o autor gosta da
ideia da obra que nasce publicada; e7.1.1 é o mais suspeito — o mecanismo (exemplo bifurcável no
navegador) já existe há anos com WebGL e Shadertoy, e a contribuição da raiz é pequena. Mantido com
confiança baixa e marcado aqui. O viés de plataforma aberta também empurra a ler e7.2 (motor
comercial captura) como ameaça, quando pode ser simplesmente o caminho mais provável.

### 7.7 Calibração

Contagem final: ordem 1 — alta 1, média 10, baixa 1; ordem 2 — alta 0, média 15, baixa 4; ordem 3 —
alta 0, média 0, baixa 19. A confiança cai com a ordem. A única alta (e3) é o efeito já observável
com três artefatos.

### 7.8 Teste do falseador do autor

- *"A adoção já passou da maioria inicial?"* Para 3D por WebGL e jogo HTML5, sim — por isso foram
  recusados. Para WebGPU + WebXR como alvo primário, não: o Unity ainda o chama de experimental [20],
  e o uso de WebXR não tem número público. O teste não derruba as raízes.
- *"A tecnologia só melhora o que existe?"* É o risco real da Raiz 2: editar cena no navegador pode
  ser só "Figma para 3D", melhoria de um modelo já conhecido. Ela passa porque rompe o fosso de
  licença por assento e muda o entregável (arquivo → link), mas é a raiz mais próxima do limite.

### 7.9 Registro de alterações

- e1.1: efeito "a loja de apps perde relevância" → reescrito como "a loja vira canal de cobrança e
  perde a descoberta", porque a versão anterior era extrapolação linear (7.2).
- e2.1: prazo 2027 → 2028, pela R-e (7.3).
- e2.2.1: prazo 2032 → 2035, sem política de arquivamento encontrada (7.3).
- e3.2: prazo 2027 → 2028, prazo formal não é adoção (R-d, 7.3).
- e6: confianca alta → media, porque o sinal forte se apoia sobretudo em uma ferramenta (SuperSplat) e
  numa extensão ainda sem ratificação confirmada (7.1).
- e7: prazo 2029 → 2030, pelo ritmo do Unity (7.3).
- e10: prazo 2028 → 2030 (7.3); confianca mantida em media.
- e11: sinal medio → fraco, porque nenhum editor de navegador aberto nesta rodada tem assistente de IA
  local (7.1, razão 3).
- e12: confianca media → baixa, sem artefato verificado (7.1).
- e10.2: confianca media → baixa, porque o mecanismo de moderação é inferência.
- Removido: "A loja de apps deixa de ser relevante para XR até 2036" (1ª ordem da Raiz 1) — extrapolação
  e contradiz R-c e R-d; para a seção 12.
- Removido: "Surge a profissão de curador de experiências web imersivas" (2ª ordem) — efeito genérico
  proibido sem ator; para a seção 12.
- Removido: "Consumo de energia de datacenter cai porque a inferência vai para o cliente" (2ª ordem da
  Raiz 3) — falha no teste da causa solta (IA local em geral, tema 16, produziria o mesmo) e sem fonte;
  para a seção 12.
- Movido para wildcard: "A Apple bloqueia WebXR no visionOS" — era efeito de 1ª ordem; sem mecanismo
  observável hoje (a Apple ampliou WebXR em 26.2), vira wildcard 1.

Cota por raiz: Raiz 1 — 4 alterações e 1 remoção; Raiz 2 — 2 alterações; Raiz 3 — 4 alterações e 1
remoção.

## 8. O que a máquina errou

1. **Número de adoção sem fonte quase entrou.** A busca devolveu, em três resultados diferentes, que
   "WebXR adoption grew 40% in 2026". Abri o artigo (VR.org, 13/04/2026): não há fonte, metodologia
   nem definição de "adoção" [16]. O número não entra no mapa; a seção 3.4 diz "sem número encontrado".
2. **"WebXR é área do Interop 2026" era falso.** O mesmo site afirmava que WebXR tinha virado área de
   foco do Interop 2026 com a Safari junto. Os anúncios oficiais do WebKit e do web.dev listam as 20
   áreas e nenhuma é WebXR ou WebGPU [14][15]. O resumo automático de uma busca chegou a listar WebGPU
   entre as áreas — também errado. Percebi porque abri a fonte primária em vez de aceitar o resumo.
3. **Data trocada no three.js.** O extrator da página de releases do three.js respondeu "r186
   (September 8, 2024)". A r184 é de abril de 2026 segundo outro resultado, então r186 não pode ser de
   2024; o ano está errado no extrato. Usei só o conteúdo técnico da release, não a data [23].
4. **"Unity 7 LTS com WebGPU como padrão"** apareceu num resumo de busca vindo de um blog (StraySpark)
   que não abri. A documentação oficial aberta diz que no Unity 6.3 LTS o WebGPU é experimental [20].
   Não uso a afirmação sobre o Unity 7.
5. **Números de portal que não batem.** Um artigo do Game Developer de abril de 2025 dá à Poki 30
   milhões de usuários ativos e "700B gameplays/month" [18] — o segundo número é implausível
   (provavelmente 700 milhões) e o primeiro diverge dos 100 milhões do relatório da Poki de 2026 [17].
   Uso só o relatório da própria Poki, como autodeclaração.
6. **Resumo genérico de um preprint.** O extrato do artigo "What Browsers Do in the Shaders" [35] veio
   em termos muito genéricos (timing, adaptador, cache), sem números. Pode ser que o modelo de extração
   tenha preenchido com o que se espera de um artigo desse tipo. Cito-o só como evidência de que o
   custo de mitigação está sendo medido em 2026, não por nenhum resultado específico.
7. **Classe de referência R-f** (VR de consumo "mais de dez anos e abaixo de 10%") vem do texto da
   skill, não de fonte aberta nesta rodada; a Meta confirma só que o crescimento ficou aquém [12].
8. **A fonte da CMA é secundária** [38] (site de notícias de celular, atualizado em 10/04/2026). Não
   abri o documento da CMA. O prazo de 01/01/2027 aparece também num resumo de busca, mas a
   confirmação é de uma fonte só.

## 9. Três cenários para 2036

**Provável.** Em 2036 o link é a porta normal para jogo 3D e experiência imersiva em Android, Android
XR, Quest e desktop, e uma porta menor no iPhone, onde o motor alternativo chegou só em algumas
jurisdições e a AR web continua limitada. As lojas não acabaram: viraram caixa registradora e selo de
confiança, e cobram menos de quem só empacota o web app. A curadoria mudou de casa — portais
agregadores e o próprio navegador (permissões, modelo padrão) decidem boa parte do que se vê. Editar
cena capturada no navegador é trivial para cena média; o pesado ainda mora em estação. O motor
comercial capturou parte do alvo web com exportação própria. A linha da GPU separa quem entra na web
rica de quem vê a versão em janela ou por streaming. *Sinal precoce de que estamos entrando nele:* um
título relevante de loja de óculos lançado só como PWA WebXR, e o Unity tirando o WebGPU do
experimental.

**Desejável.** Em 2036 uma cena 3D ou uma obra imersiva é um endereço que qualquer aparelho de cinco
anos abre, e que uma biblioteca pública consegue arquivar. Isso aconteceu porque três coisas foram
feitas: os reguladores especificaram tecnicamente o que "motor alternativo" exige (e não só o
direito), o glTF com splats virou o formato de acervo, e as ferramentas mantiveram fallback para
GPU antiga em vez de exigir WebGPU. Criadores independentes publicam direto, portais cobram pouco, e
a IA embutida roda em modelo aberto escolhido pelo criador, não pelo navegador. *Sinal precoce:* uma
instituição de memória (museu ou arquivo nacional) publicando política de preservação de obra
imersiva baseada em página e glTF.

**Indesejável.** Em 2036 a web imersiva existe, mas partida: blobs de motor comercial que ninguém
indexa, AR web só num ecossistema, e um iPhone que abre 3D em janela e manda o resto para a loja. A
linha da GPU virou exclusão explícita — ferramentas e experiências abandonaram o fallback, e escolas
públicas brasileiras com Android intermediário antigo veem a tela de aviso. O navegador herdou o
poder da loja sem as obrigações dela: decide que modelo fala nos jogos e que site ganha "modo
desempenho". *Sinal precoce:* three.js ou PlayCanvas anunciando fim do backend WebGL2, ou um navegador
oferecendo modelo embutido que sites não podem trocar.

## 10. O experimento

**O que é.** "Link contra loja": uma mesma cena 3D interativa (um splat de um espaço da UFPE, editado
no SuperSplat, com uma interação simples) publicada de três jeitos — link WebGPU com fallback WebGL2
(three.js), link WebGPU sem fallback, e PWA empacotado (Bubblewrap/TWA) para o Quest ou Android XR, se
houver aparelho. A turma abre nos aparelhos que tiver (celular Android intermediário, iPhone, notebook,
óculos se disponível) e mede: tempo até a primeira interação, o que falhou, se a versão AR/VR abriu.

**Que pergunta responde.** Onde passa, hoje, a linha da GPU (convergência 1) e quanto custa o
"sem instalação" em tempo e falha, por tipo de aparelho — o que decide se e5 é um efeito de 2028 ou de
2034.

**Que tecnologia emergente usa, e por que não dá com a madura.** WebGPU (para o editor e para a cena
de milhões de gaussianas) e WebXR sobre WebGPU. Com WebGL, a cena de splat do tamanho que o SuperSplat
3.0 abre não cabe na memória [21]; com app nativo, o experimento responderia outra pergunta (a da
loja, não a do link).

**O que a turma faz em sala.** Cada pessoa abre os três links no próprio celular, registra modelo do
aparelho, navegador, se abriu, tempo até interagir e o que viu (versão rica, fallback, tela de aviso).
Uma planilha coletiva monta, em uma aula, o mapa real da linha da GPU na própria turma.

**O que me faria mudar de ideia.** Se mais de 90% dos aparelhos da turma abrirem a versão WebGPU sem
fallback com tempo de primeira interação comparável ao do app empacotado, a linha da GPU não é
fronteira social em 2028 — e5 e a convergência 1 perdem força, e o mapa deveria ser reescrito com a
loja, não o hardware, como gargalo. Se, ao contrário, menos da metade abrir a versão WebGPU, e5 deveria
subir de confiança e o prazo de e1 deveria ser empurrado.

## 11. Fontes

Trinta e oito fontes, todas abertas nesta rodada em 22/09/2026.

**WebGPU — especificação, suporte, adoção**

1. https://web.dev/blog/webgpu-supported-major-browsers — web.dev (Google), 25/11/2025. Versões de
   Chrome, Firefox e Safari com WebGPU; Linux em curso; bibliotecas. Sustenta a Raiz 1 "por que agora" e
   R-a. *Confiabilidade:* alta, fonte primária de fabricante.
2. https://github.com/gpuweb/gpuweb/wiki/Implementation-Status — grupo GPU for the Web, editado em
   13/08/2026. Status por navegador e plataforma, lacunas em Linux, Android e Windows ARM. Sustenta 3.1 e
   Raiz 1 "o que falta". *Confiabilidade:* alta.
3. https://web3dsurvey.com/webgpu — Web3D Survey. 82,09% de suporte; Android 72,48%. Sustenta e5,
   3.4 e 3.5. *Confiabilidade:* média — amostra autosselecionada, sem data nem tamanho.
4. https://webkit.org/blog/17640/webkit-features-for-safari-26-2/ — WebKit, Safari 26.2. WebXR com
   WebGPU no visionOS. Sustenta Raiz 1 e e2. *Confiabilidade:* alta.
5. https://webkit.org/blog/17967/news-from-wwdc26-webkit-in-safari-27-beta/ — WebKit, WWDC26.
   `<model>` e ambientes imersivos; sem `immersive-ar`. Sustenta sinal fraco 1 e e3.
   *Confiabilidade:* alta.
6. https://www.uploadvr.com/visionos-2-apple-vision-pro-webxr/ — UploadVR, 12/06/2024. WebXR por
   padrão só em VR no visionOS 2; AR não. Sustenta e3. *Confiabilidade:* média-alta, imprensa
   especializada com citação a engenheiros da Apple.
7. https://developer.android.com/develop/xr/web — Android Developers. Recursos WebXR do Chrome no
   Android XR, mãos como entrada principal. Sustenta e2, e3.1.1. *Confiabilidade:* alta.
8. https://blog.google/products-and-platforms/platforms/android/samsung-galaxy-xr/ — Google. Galaxy XR,
   US$ 1.799, WebXR entre os padrões. Sustenta 3.1. *Confiabilidade:* alta para fato; tom promocional.
9. https://9to5google.com/2026/05/19/google-samsung-android-xr-glasses-styles-release-date/ —
   9to5Google, 19/05/2026. Óculos Android XR no outono de 2026, versões com tela em 2027; nada sobre
   web. Sustenta a seção 12 (óculos leves ainda sem web). *Confiabilidade:* média-alta.
10. https://developers.meta.com/horizon/documentation/web/pwa-overview/ — Meta. PWA na Horizon Store,
    empacotamento opcional por Bubblewrap. Sustenta e1.1, e4.1. *Confiabilidade:* alta.
11. https://developers.meta.com/horizon/release-notes/web/ — Meta, notas do Quest Browser 2026. WebGPU
    experimental, space-warp, foveação. Sustenta 3.1 e sinal fraco 2. *Confiabilidade:* alta.
12. https://developers.meta.com/horizon/blog/2026-vr-state-of-the-union-horizon-mobile-focus/ — Meta,
    19/02/2026. VR cresceu menos que o esperado; Worlds vai para mobile. Sustenta pré-mortem 1 e R-f.
    *Confiabilidade:* alta para a posição da empresa.
13. https://www.w3.org/standards/history/webxr/ — W3C. Histórico da WebXR Device API; CRD de
    09/06/2026. Sustenta R-b. *Confiabilidade:* alta.
14. https://web.dev/blog/interop-2026 — web.dev, 12/02/2026. 20 áreas do Interop 2026, sem WebGPU nem
    WebXR. Sustenta 3.2 e item 2 da seção 8. *Confiabilidade:* alta.
15. https://webkit.org/blog/17818/announcing-interop-2026/ — WebKit. Mesmo conteúdo, do lado da Apple.
    *Confiabilidade:* alta.
16. https://vr.org/articles/webxr-adoption-surge-2026-browsers-vs-apps — VR.org, 13/04/2026. Citado
    **como exemplo de número sem fonte** ("40%"). *Confiabilidade:* baixa.

**Jogo web, motores, ferramentas**

17. https://poki.com/blog/state-of-web-gaming-report-2026 — Poki, pesquisa de maio de 2026 (400
    desenvolvedores, 2.000 jogadores, EUA/Reino Unido). Sustenta e1, e1.2, 3.4. *Confiabilidade:*
    média — autodeclaração de parte interessada.
18. https://www.gamedeveloper.com/business/the-huge-hidden-web-game-market-no-one-talks-about-and-how-to-get-in-
    — Game Developer, 15/04/2025, texto de fundador de portal. Contexto de mercado; números
    inconsistentes (seção 8). *Confiabilidade:* baixa-média.
19. https://www.gamedeveloper.com/programming/unity-sees-webgpu-is-a-growing-market-for-game-development
    — Game Developer, 02/04/2024. Unity vê WebGPU como mercado. Sustenta e7.2. *Confiabilidade:* média.
20. https://docs.unity3d.com/6000.3/Documentation/Manual/WebGPU.html — Unity, manual 6.3. WebGPU
    "experimental". Sustenta e7, 7.3. *Confiabilidade:* alta.
21. https://blog.playcanvas.com/new-in-supersplat-editor-3-0-rebuilt-on-webgpu/ — PlayCanvas,
    09/09/2026. SuperSplat 3.0 só com WebGPU; números de memória. Sustenta Raiz 2, e5, e6, e8.
    *Confiabilidade:* alta para fatos do produto; números do próprio fabricante.
22. https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release — Khronos, 03/02/2026.
    RC de `KHR_gaussian_splatting`. Sustenta e6.2, e2.2. *Confiabilidade:* alta.
23. https://github.com/mrdoob/three.js/releases — three.js, r186. `WebGPURenderer`, TSL, WebXR com
    WebGPU. Sustenta e5.1, e7. *Confiabilidade:* alta para conteúdo; data do extrato errada (seção 8).

**IA no navegador**

24. https://arxiv.org/html/2412.15803v2 — Ruan et al., WebLLM. Até 80% da vazão nativa. Sustenta Raiz
    3, e10. *Confiabilidade:* alta como preprint com código; hardware de ponta.
25. https://huggingface.co/blog/transformersjs-v4 — Hugging Face, 09/02/2026. Runtime WebGPU; GPT-OSS
    20B a ~60 tok/s em M4 Pro Max. Sustenta Raiz 3. *Confiabilidade:* média-alta, número do fabricante.
26. https://www.phoronix.com/news/Chrome-146-Beta — Phoronix, 11/02/2026. WebNN em origin trial.
    Sustenta 3.2. *Confiabilidade:* média-alta.

**Lojas, regulação, poder**

27. https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/ — OWA,
    14/07/2025. Barreiras ao motor alternativo; receita do Safari. Sustenta e3, "quem bloqueia" da Raiz
    1. *Confiabilidade:* média — organização de advocacy, argumento documentado.
28. https://www.macrumors.com/2026/06/17/webkit-rule-costs-ios-users-browser-performance/ — MacRumors,
    17/06/2026. Nenhum motor alternativo no iOS; benchmarks do Edge com Blink. Sustenta e3, e3.2.
    *Confiabilidade:* média-alta.
29. https://www.macrumors.com/2026/04/29/epic-games-wins-reversal-app-store-fee-battle/ — MacRumors,
    29/04/2026. Comissão de link externo volta à primeira instância. Sustenta e1.2.1, e4.
    *Confiabilidade:* média-alta.
30. https://techcrunch.com/2024/03/01/apple-reverses-decision-about-blocking-web-apps-on-iphones-in-the-eu/
    — TechCrunch, 01/03/2024. Recuo da Apple; 500+ queixas. Sustenta e2.2, wildcard 1.
    *Confiabilidade:* alta.
31. https://www.cnnbrasil.com.br/economia/negocios/cade-faz-acordo-para-apple-oferecer-pagamento-e-lojas-de-apps-alternativos/
    — CNN Brasil, dezembro de 2025. Acordo com o CADE: pagamento e link externo, lojas alternativas,
    105 dias, três anos, multa de até R$ 150 milhões; sem percentuais. Sustenta 3.5, e4.
    *Confiabilidade:* média-alta.
32. https://8thwall.org/ — 8th Wall. Plataforma hospedada aposentada em 28/02/2026; partes em MIT, XR
    Engine como binário. Sustenta e2.1, e2.1.1, R-e. *Confiabilidade:* alta, fonte primária.
33. https://www.androidauthority.com/google-killing-android-instant-apps-3567211/ — Android Authority.
    Fim do Instant Apps em dezembro de 2025. Sustenta R-c, e10.1. *Confiabilidade:* média-alta.
34. https://arxiv.org/abs/2401.04349 — Ferguson, Wilson, Naghibijouybari, WebGPU-SPY, 2024. 90% de
    precisão em fingerprinting de sites. Sustenta e9, wildcard 3. *Confiabilidade:* alta como pesquisa.
35. https://arxiv.org/pdf/2606.26412 — Santos-Grueiro, "What Browsers Do in the Shaders", 26/06/2026.
    Mitigação de privacidade em WebGPU entre navegadores. Sustenta e9, só em termos gerais (seção 8).
    *Confiabilidade:* média — extrato genérico.
36. https://en.wikipedia.org/wiki/GeForce_Now — Wikipedia. GeForce NOW no Safari desde 19/11/2020.
    Sustenta R-d, e5.2. *Confiabilidade:* média.
37. https://gs.statcounter.com/os-market-share/mobile/brazil — StatCounter, agosto de 2026. Android
    75,45% no Brasil. Sustenta 3.5, e5.1.1. *Confiabilidade:* média-alta (tráfego, não aparelhos).
38. https://www.mymobiles.com/news/cma-apple-mobile-browser-investigation-ruling — MyMobiles,
    17/03/2026, atualizado 10/04/2026. CMA exige motores alternativos até 01/01/2027. Sustenta e3.2,
    wildcard 2. *Confiabilidade:* média — fonte secundária.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Rodado em 22/09/2026 com `verificar.py --links`, depois de trocar o link do MacMagazine (403 para acesso automatizado; ver 12.6). Saída inteira:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 19 (frontmatter diz 19)
efeitos ordem 3: 19 (frontmatter diz 19)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 1 · media 10 · baixa 1
confiança ordem 2: alta 0 · media 15 · baixa 4
confiança ordem 3: alta 0 · media 0 · baixa 19
links da seção 11: 38/38 respondem (frontmatter diz fontes: 38)
RESULTADO: ok
```

### 12.2 Premissas assumidas (o que o briefing não cobria)

- Modo MAPA, não interativo; o `briefing:` foi tratado como entrevista completa, sem rebaixamento
  de confiança (regra do §0).
- "Três ordens" de profundidade, conforme o briefing.
- Nota sobre o Brasil: incluída em 3.5 e em e5.1.1 e e11.1.1.
- `publico_ok: false` (padrão; o briefing não autoriza).
- Fronteira com o tema 16 aplicada: a IA local só entra quando é parte da experiência interativa ou da
  ferramenta de criação no navegador.
- A "raiz suspeita" do briefing é nula; as três raízes foram descobertas na âncora.

### 12.3 Buscas feitas (22 principais + 6 extras)

1. WebGPU browser support 2026 Safari Firefox Chrome shipped — deu em [1][2].
2. WebXR Apple Vision Pro Safari immersive-ar support 2026 — deu em [6]; resultados de SEO descartados.
3. Android XR Chrome WebXR Galaxy XR browser — deu em [7][8].
4. WebGPU usage statistics percentage of page loads chromestatus — deu em [3]; **chromestatus não
   renderizou** no fetch (página dinâmica), sem número de uso por carregamento de página.
5. web games instant play platform revenue 2026 Poki CrazyGames players — deu em [17][18].
6. Digital Markets Act browser engine choice iOS WebKit alternative engine 2026 — deu em [27][28][38].
7. Meta Quest browser WebXR Horizon OS web apps PWA store 2026 — deu em [10][11].
8. Epic v. Apple anti-steering ruling external payment links commission — deu em [29].
9. WebLLM WebGPU in-browser LLM performance tokens per second paper — deu em [24].
10. WebNN origin trial Chrome 2026 status — deu em [26]; a mesma busca mostrou (sem abrir) mensagens do
    blink-dev dizendo que o origin trial foi reativado no M147 até o M149 e depois desativado de novo
    por problemas que bloqueavam o release. Não abri as mensagens; registro como indicação.
11. three.js WebGPURenderer r17x release default TSL 2026 — deu em [23]; o resumo indicou que desde a
    r171 (setembro de 2025) o `WebGPURenderer` se importa sem configuração e cai para WebGL 2 — não abri
    a página de migração que sustentaria isso.
12. WebKit blog Safari 26 WebGPU WebXR visionOS news — deu em [4][5].
13. Khronos glTF Gaussian splatting extension — deu em [22]; ratificação prevista para o 2º trimestre de
    2026, **não confirmei** se aconteceu.
14. PlayCanvas SuperSplat 2026 WebGPU editor release — deu em [21].
15. Unity 6 web platform WebGPU support mobile browser 2026 — deu em [19][20]; a afirmação "Unity 7 LTS
    ships WebGPU as default" veio de blog não aberto (seção 8).
16. CADE Apple App Store decisão Brasil — deu em [31]; um resultado (GSMArena) dizia "Apple
    successfully appeals Brazilian antitrust ruling" — não abri; pode ser anterior ao acordo.
17. Android XR glasses 2026 launch display Chrome web — deu em [9]; nenhuma menção a web nos óculos leves.
18. "Gestalt Village" WebGPU — **nada**. O sinal vem só da varredura da turma.
19. WebXR usage growth statistics sessions 2025 2026 8th Wall shutdown — deu em [32] e em [16] (sem fonte).
20. Apple iOS 17.4 EU home screen web apps removed reversed — deu em [30].
21. Google Play Instant deprecated 2025 — deu em [33].
22. WebGPU fingerprinting privacy attack GPU side channel — deu em [34][35].
Extras: Interop 2026 focus areas (deu em [14][15], desmentindo [16]); GeForce NOW browser (deu em [36]);
Meta Horizon Store revenue (deu em [12]); smartphones no Brasil (resultados de agregadores de SEO não
abertos; substituídos por [37]); Transformers.js v4 (deu em [25]); visionOS 2 immersive-ar (deu em [6]).

### 12.4 Efeitos cortados e caminhos abandonados

- **"A loja de apps deixa de ser relevante para XR até 2036"** — removido no §6: extrapolação; R-c
  (Instant Apps) e R-d (GeForce NOW) mostram que contornar a loja não a esvazia.
- **"Surge a profissão de curador de experiências web imersivas"** — removido: efeito genérico
  proibido, sem ator nem mecanismo. O que sobrou de útil foi para e1.1.1 (portais agregadores).
- **"Consumo de energia de datacenter cai porque a inferência vai para o cliente"** — removido: não
  deriva desta raiz (tema 16) e não achei fonte. É por isso que a categoria ecológica ficou vazia.
- **"A Apple bloqueia WebXR no visionOS"** — movido para wildcard 1.
- **Candidato a raiz "o óculos leve com tela vira terminal da web"** — abandonado: os óculos Android XR
  de 2026 são de áudio, as versões com tela ficam para 2027, e a cobertura não fala de web [9]. Fica
  como observação: se os óculos com tela de 2027 abrirem WebXR, isso viraria um sinal fraco forte.
- **Candidato a raiz "IA gera a cena 3D no navegador"** — abandonado: sobrepõe-se aos temas 10
  (captura) e 14 (gerar geradores); aqui entra só como assistente de edição (e11).
- **Efeito "anúncio jogável 3D substitui vídeo de anúncio"** — cortado antes do §6: o PlayCanvas já
  vende isso sobre WebGL; é melhoria sustentadora, não depende de WebGPU.
- **Efeito sobre ofício de dublagem/voz em NPC** — cortado: é tema 13.

### 12.5 Dados levantados que não entraram no texto

- Benchmarks do Edge com Blink no iOS: Speedometer 3.1 49,27 × 38,3; JetStream 3 306,35 × 270,9;
  MotionMark 1.3.1 4.773,52 × 4.673,68 [28]. A diferença em gráficos (MotionMark) é de 2,1% — o
  argumento de desempenho contra o WebKit é forte em JavaScript e fraco em gráficos; para este tema, o
  bloqueio relevante é de recurso (AR, motor), não de velocidade.
- Meta: US$ 150 milhões em programas de desenvolvedor de VR em 2025; Horizon+ com mais de 1 milhão de
  assinantes e quase US$ 20 milhões distribuídos (estes últimos de resumo de busca, não confirmados na
  página aberta) [12].
- Poki: 37% jogam várias vezes por dia; sessão típica de 11–20 minutos; 90% fazem outra coisa enquanto
  jogam; 74% dos desenvolvedores acham fácil publicar no navegador [17].
- OWA: Safari rende ~US$ 20 bi/ano em acordo de busca, 14–16% do lucro operacional da Apple; cada 1%
  de participação perdida custaria ~US$ 200 milhões/ano [27].
- CADE: 105 dias para cumprir, multa de R$ 150 milhões [31]; menores de 18 anos precisam de autorização
  para compras por meio alternativo (MacMagazine, 12.6).

### 12.6 Fonte aberta que saiu da seção 11

- https://macmagazine.com.br/post/2025/12/23/apple-permitira-compras-externas-e-lojas-alternativas-a-app-store-no-brasil/
  — MacMagazine, 23/12/2025. Aberta nesta rodada pelo navegador de busca: comissões de 25% na App Store
  (10% em programas especiais), 15% no link externo e 5% de "Core Technology Commission" em lojas
  alternativas. Saiu da seção 11 porque o servidor responde 403 a acesso automatizado e o verificador
  a conta como link quebrado; foi substituída por [31], que confirma o acordo mas não os percentuais.
  Os percentuais ficam sustentados só por esta fonte.
- Instant Apps: exigia versão de até 15 MB; ferramentas removidas do Android Studio [33].
- 8th Wall: Image Target Processor, XR Extras, Face Effects e Sky Effects em MIT; XR Engine só binário
  de uso limitado; conteúdo hospedado sai do ar em 28/02/2027 (resumo de busca) [32].
