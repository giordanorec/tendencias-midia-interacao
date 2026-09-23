---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-22
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 12
efeitos_ordem_2: 20
efeitos_ordem_3: 20
tecnologias_citadas: [WebGPU, WGSL, WebGL, WebXR, WebXR AR Module, Hand Input API, Depth Sensing, transient-pointer, WebAssembly, Prompt API, Gemini Nano, BrowserEngineKit, WebKit, Blink, Safari 26.2, Safari 27, model element, USDZ, visionOS, Android XR, Meta Quest Browser, Meta Horizon Store, Bubblewrap, PWA, three.js, WebGPURenderer, TSL, PlayCanvas, SuperSplat, Babylon.js, model-viewer, Unity 6.3, glTF, KHR_gaussian_splatting, Gaussian Splatting, 8th Wall, WebLLM, MLC-LLM, Transformers.js, ONNX Runtime, Ruffle, Flash Player, Java applet, NPAPI, Google Stadia, Android Instant Apps, Ray-Ban Meta, Rokid, Gestalt Village]
fontes: 42
confianca: media
experimento: "O link de trinta anos: a mesma cena 3D/XR curta (glTF com splats + personagem com modelo pequeno no cliente), publicada como link autocontido e aberta por QR na maior variedade de aparelhos da turma e em navegadores antigos emulados, medindo o que roda, o que é bloqueado e o que já quebra com dois anos de idade"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em 2026 a página ganhou a GPU moderna em todos os motores principais (WebGPU, anúncio conjunto de 25/11/2025) e os três ecossistemas de headset passaram a abrir WebXR com WebGPU ou AR completa no navegador. Visualizador 3D por WebGL, jogo HTML5 de portal, jogo por streaming e WebAR de campanha ficam fora como raiz: são produto de massa ou já falharam. Para 2056 — trinta anos, o tempo de vida inteiro do Flash e do applet Java — o mapa tem quatro raízes: **(1)** o link substitui a instalação como porta da experiência 3D/XR; **(2)** o navegador vira o runtime de conteúdo dos óculos; **(3)** modelo de IA e cena dividem a GPU do navegador; **(4)** a ferramenta de criação 3D pesada vira página sobre formato aberto. O achado principal é uma convergência: as quatro raízes tiram a curadoria da loja e a entregam ao navegador, ao portal e ao assistente — o porteiro troca de endereço, não some. O segundo achado é de acesso: a desigualdade passa de "ter internet" para "ter a GPU e o motor que a página exige, no país certo". Com trinta anos de janela, o risco mais sério ao mapa não é técnico: é a página deixar de ser a unidade de interface, se assistentes passarem a montar a experiência no lugar do link. Confiança geral média; toda a terceira ordem é baixa.

## 2. O tema

**O que é.** A web deixando de ser o lugar onde se *anuncia* uma experiência 3D ou imersiva e passando a ser o lugar onde ela *roda*: WebGPU dá à página render e compute na GPU (com a linguagem WGSL), WebXR liga a página ao óculos, WebAssembly traz motores escritos em C++ e Rust, e bibliotecas como three.js, PlayCanvas e Babylon.js fazem disso uma plataforma-alvo. O objeto é **a web como plataforma de execução 3D/XR**. Captura 3D é o tema 10 e só entra como conteúdo que essa plataforma executa; IA local em geral é o tema 16 e só entra na parte "no navegador".

**Onde encosta em mídia e interação.** Distribuição (link contra loja), curadoria (quem decide o que aparece no campo de visão), ofício (o artista técnico de web, o editor de cena sem estação), preservação (obra imersiva que não morre com o app), acesso (quem tem a GPU e o motor certos) e gramática de interação (a mão como entrada padrão, o cartão espacial aberto por voz).

**Por que merece um mapa e não um estado da arte.** Porque a pergunta de 2056 é de plataforma, não de desempenho. A web já foi a plataforma universal uma vez: o iPhone foi apresentado em 2007 com a orientação de fazer web apps para o Safari, e a loja abriu em 10/07/2008 com 500 aplicativos [27]. Trinta anos é o tamanho de um ciclo inteiro de plataforma de mídia no navegador: o applet Java nasceu em 1995, perdeu os navegadores entre 2013 e 2017 e foi removido do Java 26 em 2026 [26]; o Flash foi de 1996 ao bloqueio em 12/01/2021, com o declínio aberto por uma carta de uma fabricante em 2010 [25]. Um mapa com este horizonte tem de dizer o que seria diferente desta vez — e o que sobraria em 2056 de uma pilha que hoje tem um ano de idade.

**Premissas deste mapa** (do briefing; o que ele não cobre está em 12.2): horizonte 2056; público: quem projeta mídia e interação; recorte global, com nota sobre o Brasil; descartado de saída o que já é comum em produto de massa; nenhuma raiz suspeita; viés neutro, com um cenário de cada lado; zona de interesse do autor: Criação e plataforma; profundidade de três ordens; ideias óbvias excluídas: as que serviriam a qualquer tema. **Falseador declarado pelo autor:** evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada. O teste está em 7.8.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026: 12 buscas e 42 páginas abertas (seção 11). Uma rodada anterior da mesma skill sobre o mesmo tema com horizonte 2041 foi lida como ponto de partida; todos os fatos abaixo foram reabertos nesta rodada, e dois erros daquela rodada foram corrigidos (seção 8).

### 3.1 O que já existe e funciona

- **WebGPU nos quatro motores principais.** Anúncio conjunto de 25/11/2025: Chrome/Edge em Windows, macOS e ChromeOS, Android 12+ desde a versão 121; Firefox 141 no Windows e 145 no macOS ARM; Safari 26 em macOS, iOS, iPadOS e visionOS. Bibliotecas listadas: Babylon.js, PlayCanvas, ONNX Runtime, React Native, Three.js, Transformers.js, TypeGPU e Unity [1].
- **WebXR com WebGPU no óculos.** Safari 26.2 no visionOS: "WebXR supports WebGPU" [3]. Quest Browser 146 (21/04/2026) com WebGPU e projeção de profundidade experimentais; 149.1 (27/07/2026) com WebGPU em camadas de space-warp; 150.1 (28/08/2026) com foveação WebGPU experimental [7]. Chrome no Android XR: módulo AR, hit test, âncoras, depth sensing estéreo, estimativa de luz e **mão como entrada padrão**, com permissão por domínio [6].
- **Loja aceita web app, e o empacotamento é opcional.** A Meta aceita PWA na Horizon Store via Bubblewrap e diz que "um web app pode continuar disponível pelo site sem o pacote" [8].
- **3D declarativo da Apple.** O Safari 27 beta leva o elemento `<model>` (USDZ) a iOS, iPadOS e macOS e, no visionOS 27, oferece "ambientes imersivos" com `<model>` e uma chamada de JavaScript [4].
- **Editor 3D pesado no navegador.** SuperSplat 3.0 (09/09/2026) é "WebGPU only"; numa cena de 4,4 milhões de gaussianas, a memória ociosa caiu de 1.557 MB para 105 MB; projeção, recorte, compactação, ordenação e submissão de desenho rodam como compute; demo com 20 milhões de gaussianas [16].
- **Formato aberto para splats.** `KHR_gaussian_splatting` em release candidate (03/02/2026), com Autodesk, Cesium/Bentley, Esri, Huawei, Niantic Spatial, NVIDIA e XGRIDS; ratificação prevista para o 2º trimestre de 2026 [17] — confirmação não encontrada (12.3).
- **Motores.** three.js com melhorias de WebGPU e camadas XR nas notas do r186 [18] (data do extrato duvidosa, seção 8). Unity 6.3: "WebGPU is experimental and not supported by all browsers and devices" [19]. `model-viewer` mostra 3D e AR com WebXR, hit test e DOM overlay [21].
- **IA no navegador.** WebLLM retém 71,2% (Llama-3.1-8B) a 79,6% (Phi-3.5-mini) da vazão nativa num M3 Max [29]. Transformers.js v4 (09/02/2026) traz runtime WebGPU reescrito em C++ com o time do ONNX Runtime, modelos acima de 8B e GPT-OSS 20B a ~60 tokens/s num M4 Pro Max [30]. O Chrome embute Gemini Nano, com download, atualização e remoção geridos pelo navegador, atrás de APIs (Prompt, Writer, Summarizer, Translator…) em origin trial [31].
- **Jogo web leve** (contexto, não raiz): na pesquisa da Poki (EUA/Reino Unido), 53% dos desenvolvedores planejam portar jogo mobile para o navegador em 12 meses e 62% dos jogadores compraram um jogo em outro lugar depois de conhecê-lo na web [22].

### 3.2 O que existe e ainda não funciona

- **WebGPU nas bordas.** No Web3D Survey, 82,09% dos relatos têm adaptador WebGPU funcional: ChromeOS 92,7%, macOS 89,65%, Windows 86,84%, iOS 84,67%, **Android 72,48%**, **Linux 16,97%**; Firefox 61,27% [2]. O anúncio oficial lista Linux em progresso e Android limitado a "GPUs compatíveis" [1].
- **AR na web da Apple.** O visionOS liga WebXR por padrão desde a versão 2, **só VR**, com entrada por olhar e pinça via `transient-pointer` [5]. O Safari 27 não menciona `immersive-ar` [4].
- **Especificação lenta.** WebXR Device API: primeiro rascunho em 05/02/2019, Candidate Recommendation em 31/03/2022, ainda em CRD em 09/06/2026 [10]. Nem WebGPU nem WebXR estão entre as áreas do Interop 2026 [11].
- **Motor alternativo no iOS.** Mais de dois anos depois do DMA, nenhum fabricante lançou motor não-WebKit no iOS; o protótipo do Edge com Blink marcou 49,27 contra 38,3 do Safari no Speedometer 3.1 [34]. A OWA lista quatro barreiras (app separado, teste impossível fora da UE, viagem, contrato) e calcula que a Apple recebe ~US$ 20 bi/ano do Google pela busca [35]. A CMA exige motores alternativos no Reino Unido até 01/01/2027, prazo que um recurso pode estender em 6–12 meses [36].
- **IA no navegador em aparelho comum.** Demo de Llama-3.2-1B no Hacker News: ~500 MB de download, falha no Safari de macOS e iOS, saída corrompida para um testador, exige `f16` [32]. O artigo do WebLLM mede em M3 Max, não em celular [29].
- **Óculos leves sem web.** O anúncio do Google I/O 2026 (Samsung, Qualcomm, Gentle Monster, Warby Parker; áudio no outono, tela depois) **não menciona web, Chrome nem WebXR** [14]. Nos óculos Android XR com tela, os apps do celular são "projetados", e a interface mais complexa é "algo como um widget de tela inicial" [15].
- **Segurança.** WebGPU-SPY usa o cache da GPU integrada Intel como canal lateral, com precisão de 90 em fingerprinting de 100 sites [33].

### 3.3 Quem constrói

- **Navegador e óculos:** Google (Chrome, Android XR), Apple (WebKit, visionOS), Meta (Quest Browser, Horizon Store), Mozilla (Firefox).
- **Padrões:** W3C (GPU for the Web, Immersive Web), Khronos (glTF e a extensão de splats).
- **Motores e ferramentas abertos:** three.js, PlayCanvas/SuperSplat, Babylon.js, `model-viewer`, Ruffle (preservação).
- **IA no cliente:** CMU/MLC (WebLLM), Hugging Face com ONNX Runtime (Transformers.js), Google (Gemini Nano no Chrome).
- **Reguladores com prazo:** Comissão Europeia (DMA), CMA (Reino Unido), CADE (Brasil), Justiça dos EUA (Epic contra Apple [37]).

### 3.4 Números de adoção

| O quê | Número | Fonte |
|---|---|---|
| Relatos com WebGPU funcional (Web3D Survey) | 82,09% (Android 72,48%, Linux 16,97%) | [2] |
| Óculos sem tela, 1º tri 2026 (IDC) | ~2,25 milhões; previsão 13,6 mi em 2026 e 27,3 mi em 2030; Meta 69,2% | [12] |
| Óculos com tela (OST), IDC | de 3 mi para 12,2 mi até 2030 (previsão) | [12] |
| Ray-Ban Meta vendidos em 2025 (Counterpoint via 9to5Mac) | mais de 7 milhões | [13] |
| Meta nos sem tela / Rokid nos AR+IA, 1º sem. 2026 | 94% / 41% (China 45% desse segmento) | [13] |
| Tempo em headset Meta gasto com apps de terceiros | 86% | [9] |
| População mundial online (ITU, 2025) | 74%; países de alta renda 94%, baixa renda 23% | [42] |
| Uso de WebXR (sessões, usuários) | **sem número encontrado** | — |

Um site de divulgação afirma que "a adoção de WebXR subiu 40% em 2026" sem indicar a base; não foi usado (12.3).

### 3.5 Nota sobre o Brasil

Android tem 75,45% do tráfego móvel no Brasil em agosto de 2026 [41]. Como o Android é a plataforma móvel com menor suporte a WebGPU nos relatos (72,48% [2]), o Brasil fica mais exposto à fronteira "ter a GPU que o navegador aceita" do que os EUA. O acordo do CADE com a Apple (homologado em 23/12/2025) obriga a aceitar pagamento externo e canais de distribuição fora da App Store em até 105 dias, por três anos, com multa de até R$ 150 milhões [39]: o Brasil é uma das jurisdições onde um jogo que roda inteiro no link pode cobrar direto mais cedo. Óculos XR não têm distribuição relevante no país nos números abertos; até meados da década de 2030, a parte "XR" deste mapa, no Brasil, passa pelo celular.

## 4. As disrupções-raiz

### Recusados como raiz (e tratados como contexto)

- **3D por WebGL no navegador** (visualizador de produto, configurador, `model-viewer` [21]): recusado; adoção em maioria há uma década.
- **Jogo HTML5 leve em portal** [22]: recusado; é produto de massa. Entra como classe de referência de descoberta.
- **Jogo por streaming no navegador**: recusado; não usa a GPU do cliente, e o Stadia (19/11/2019–18/01/2023) fechou "por falta de tração" [24]. Entra como efeito (e9.2).
- **WebAR de campanha no celular** (8th Wall): recusado; a plataforma hospedada foi aposentada em 28/02/2026 [40]. Entra como retroação (e2.2).
- **Ferramenta de design 2D no navegador** (Figma com WebAssembly desde 2017 [20]): recusada; madura. Entra como classe de referência da Raiz 4.
- **"A loja de aplicativos acaba"**: recusado como raiz e como efeito — extrapolação sem mecanismo (12.4).

### Raiz 1 — O link substitui a instalação como porta da experiência 3D/XR executada no aparelho

1. **O que rompe.** A suposição de que experiência 3D pesada ou imersiva exige instalação e, portanto, passa por uma loja que aprova, cura e cobra.
2. **Por que agora.** WebGPU nos quatro motores só desde o fim de 2025 [1]; WebXR com WebGPU no visionOS desde a 26.2 [3]; WebGPU no Quest Browser desde abril de 2026 [7]; loja do óculos aceitando PWA sem exigir o pacote [8]. Há cinco anos a página não tinha compute nem GPU moderna.
3. **Onde está na difusão.** Produto de nicho no headset; nicho no celular para 3D pesado. Emergente.
4. **O que falta.** `immersive-ar` na Apple; motor não-WebKit no iOS; WebGPU em Android intermediário e Linux [2]; WebGPU estável no Unity [19]; pagamento na web sem comissão ao sair do app [37]; uma métrica pública de uso de WebXR.

**Quem bloqueia.** A Apple: incentivo (App Store e ~US$ 20 bi/ano da busca [35]) e instrumento (WebKit obrigatório, WebXR sem AR [5][34]). Efeito com dono: e3.

### Raiz 2 — O navegador vira o runtime de conteúdo dos óculos, e não um app dentro deles

1. **O que rompe.** A suposição de que o fabricante do óculos decide o que aparece no campo de visão por meio de loja e SDK próprio. Se o conteúdo curto chega como página, quem cura é o navegador e quem abre o link.
2. **Por que agora.** Em 2025–2026 os três ecossistemas de headset passaram a tratar a web como cidadã [3][4][6][7]; ao mesmo tempo, óculos leves começaram a vender em escala (mais de 7 milhões de Ray-Ban Meta em 2025 [13]) — ainda sem web [14][15].
3. **Onde está na difusão.** Produto de nicho nos headsets; **laboratório** nos óculos leves. Os efeitos que dependem do óculos leve saem com `confianca: baixa`.
4. **O que falta.** Óculos com tela e navegador (o modelo anunciado projeta apps do celular [15]); acesso da página à câmera do mundo com permissão aceitável; um formato leve de "cartão espacial" que não exija sessão imersiva inteira; um fabricante grande que tenha a web como plataforma primária.

**Quem bloqueia.** Meta e Apple, que mantêm diferença de capacidade entre página e app como fosso da loja. Efeito com dono: e5.

### Raiz 3 — Modelo de IA e cena dividem a mesma GPU do navegador

1. **O que rompe.** A regra de que mídia interativa com IA (personagem que conversa, narração, cena que se adapta) exige servidor do criador e custo por usuário; e a regra de que o conteúdo é um asset fechado, idêntico para todos.
2. **Por que agora.** WebLLM a 71–80% da vazão nativa [29], Transformers.js v4 com runtime WebGPU [30] e Gemini Nano embutido no Chrome [31] são de 2024–2026. Antes do compute do WebGPU, inferência séria no navegador ficava na CPU.
3. **Onde está na difusão.** Biblioteca e demo; em jogo e XR, laboratório — o Gestalt Village trazido pela turma não foi encontrado (12.3). Confiança baixa na maior parte da cadeia.
4. **O que falta.** Modelo pequeno bom para diálogo de jogo; memória no celular intermediário; cache de pesos entre sites; regra de moderação para fala gerada no cliente.

**Quem bloqueia (ou captura).** Os fabricantes de navegador, que podem tornar o próprio modelo embutido o padrão [31], e fornecedores de inferência por chamada, que perdem receita. Efeito com dono: e7.1.1.

### Raiz 4 — A ferramenta de criação 3D pesada vira página, sobre formato aberto

1. **O que rompe.** A estação instalada e licenciada como pré-condição para editar cena 3D pesada, e o entregável como arquivo ou vídeo. O entregável passa a ser um link de cena.
2. **Por que agora.** O SuperSplat 3.0 só existe porque o compute do WebGPU ordena e recorta dezenas de milhões de gaussianas na GPU do navegador, com memória ociosa 15 vezes menor que a versão anterior [16]; o glTF ganhou extensão de splats com a indústria de CAD e GIS [17]. É o movimento que o Figma fez no 2D com WebAssembly em 2017 [20], agora no 3D pesado.
3. **Onde está na difusão.** Produto de nicho (edição de splats, visualização). O caso 2D é maduro e fica fora.
4. **O que falta.** Ratificação da extensão; streaming de cena grande; WebGPU no Android intermediário e no Linux [2]; colaboração em tempo real sobre cena; modelo de negócio para editor gratuito.

**Quem bloqueia.** Fornecedores de DCC com licença por assento e os motores comerciais, que preferem a web como alvo de exportação do próprio motor [19]. Efeito com dono: e11.1.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O link substitui a instalação como porta da experiência 3D/XR executada no aparelho
    efeitos:
      - id: e1
        ordem: 1
        efeito: Estúdios independentes de jogo 3D e XR lançam primeiro uma versão completa como link WebGPU e tratam a loja como canal secundário de reembalagem
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A loja do celular e do óculos perde para o link compartilhado a função de descoberta e passa a competir como serviço de pagamento e de confiança
            sinal: medio
            prazo: 2038
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Portais de links 3D e XR reconstroem o porteiro com ranking pago e taxa menor, e a disputa regulatória migra da loja para o ranking dos portais
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A comissão de 30% perde base em jogos e experiências cujo produto inteiro roda no link, nas jurisdições que liberaram o pagamento externo
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: As leis de mercados digitais passam a definir aplicativo pelo contrato de distribuição e não pelo binário, porque o PWA empacotado e o site são o mesmo código
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Museus, arquivos e artistas publicam obra e acervo 3D/XR como link em glTF aberto em vez de app que expira com o contrato de manutenção ou com a loja
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: As obras imersivas lançadas como app nativo entre 2016 e 2035 viram a camada mais perdida da mídia digital do período, e a preservação passa a arquivar cena e página
            sinal: medio
            prazo: 2045
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Bibliotecas nacionais e arquivos da web mantêm emuladores de navegador de época para cenas WebGPU e WebXR, e a web imersiva de 2030 continua executável em 2056
                sinal: fraco
                prazo: 2056
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Agências de WebAR trocam runtime proprietário hospedado por pilha aberta (three.js, PlayCanvas, WebXR) e o valor sai do SaaS de runtime para a produção de conteúdo
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O rastreamento de imagem e rosto da WebAR de celular fica com poucos mantenedores e estaciona, enquanto a AR web dos óculos avança pelo navegador do fabricante
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A Apple mantém WebKit obrigatório no iOS e WebXR sem AR, e a experiência imersiva por link fica pior justamente no aparelho de maior renda
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Os prazos da CMA, da Comissão Europeia e do CADE decidem onde o link imersivo chega ao iPhone, e o link universal se fragmenta por país
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O motor de navegador passa a ser regulado como infraestrutura essencial, com obrigação legal de interoperabilidade em WebGPU e WebXR, como a portabilidade numérica foi imposta às operadoras
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A gramática de interação da AR web, com a mão como entrada padrão, se forma no Android XR e no Quest, e o iOS a importa quando abre a AR
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A Apple passa a propor no W3C extensões de interação próprias para recuperar a gramática que não desenhou, e a especificação imersiva se divide em perfis por fabricante
                sinal: fraco
                prazo: 2042
                confianca: baixa
  - disrupcao: O navegador vira o runtime de conteúdo dos óculos, e não um app dentro deles
    efeitos:
      - id: e4
        ordem: 1
        efeito: Fabricantes de óculos passam a receber conteúdo curto de terceiros como página espacial (elemento model, WebXR) em vez de app, e o navegador vira a loja de fato do conteúdo curto
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A interface dos óculos com tela passa a ser composta por cartões web de terceiros abertos por voz, e o assistente que escolhe qual cartão abrir ocupa o lugar da loja como porteiro
            sinal: fraco
            prazo: 2042
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A disputa antitruste migra da escolha de navegador para a escolha do assistente que abre links no campo de visão
                sinal: fraco
                prazo: 2050
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A página ganha acesso a profundidade e câmera do mundo no óculos, e a permissão de ver o que o usuário vê vira o recurso mais disputado da plataforma web
            sinal: medio
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Navegadores criam uma categoria de permissão para ver o mundo com lista de origens aprovadas, e a curadoria que era da loja volta como política de permissões
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Meta e Apple mantêm a web imersiva atrás do app nativo em recursos (AR de passagem, ambientes, câmera) e preservam a diferença de capacidade como fosso da loja
        sinal: forte
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Os padrões imersivos avançam no W3C na velocidade do fabricante mais lento, e a web fica pelo menos uma geração de recursos atrás do SDK nativo
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Fabricantes de óculos sem loja forte, sobretudo os chineses, adotam a web como plataforma primária, e a web imersiva vira a plataforma de quem perdeu a disputa das lojas
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O sistema do óculos encolhe para compositor, navegador e assistente, e a distinção entre app e página espacial some para quem usa
        sinal: fraco
        prazo: 2046
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Fabricantes de óculos sem ecossistema de apps competem por desempenho em WebGPU e WebXR, como fabricantes de Chromebook competiram por rodar bem o Chrome
            sinal: fraco
            prazo: 2050
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A concentração do XR migra do hardware para o motor de navegador do qual todos os óculos dependem, e quem mantém esse motor define o que a web imersiva pode fazer
                sinal: fraco
                prazo: 2055
                confianca: baixa
  - disrupcao: Modelo de IA e cena dividem a mesma GPU do navegador
    efeitos:
      - id: e7
        ordem: 1
        efeito: Jogos e experiências web embarcam modelo pequeno (personagem, voz, narração) rodando no cliente, e o criador independente deixa de pagar inferência por jogador
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O tamanho do download volta a ser restrição de design, porque pesos de centenas de megabytes exigem cache persistente e a primeira visita ao link deixa de ser instantânea
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Navegadores oferecem modelo compartilhado entre sites, e quem escolhe o modelo padrão do navegador define a voz e o estilo dos personagens da web
                sinal: medio
                prazo: 2040
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Portais de jogo web aceitam títulos com IA generativa sem custo de servidor, e a moderação da fala gerada no aparelho do jogador passa a ser responsabilidade do portal
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A classificação indicativa (no Brasil, a ClassInd do Ministério da Justiça) passa a pedir na submissão a lista de modelos e filtros que o jogo carrega no cliente
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Parte da cena web (textura, iluminação, variação de cenário) passa a ser gerada no cliente a cada visita, e o entregável do criador vira gerador com restrições em vez de asset fechado
        sinal: fraco
        prazo: 2040
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O artista técnico de web passa a escrever restrições, orçamentos de GPU e instruções de geração em TSL e WGSL em vez de modelar cada asset
            sinal: fraco
            prazo: 2044
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Contratos de obra 3D passam a registrar semente, modelo e versão do navegador, porque duas visitas ao mesmo link mostram cenas diferentes e a autoria fica indeterminada
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A GPU do usuário vira recurso disputado entre cena, modelo e página, e navegadores restringem a informação do adaptador e impõem orçamento de GPU por aba
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A desigualdade de acesso a experiências 3D e com IA muda de ter internet para ter uma GPU que o navegador aceita, com o Android intermediário e o Linux como fronteira
            sinal: forte
            prazo: 2030
            confianca: alta
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Compras públicas de equipamento escolar passam a especificar suporte a WebGPU como requisito, e a especificação de GPU entra no edital como antes entrou a conectividade
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: O streaming pelo navegador volta como plano B para aparelhos sem GPU aceita, e a mesma página passa a oferecer versão local e versão alugada na nuvem
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Quem tem aparelho fraco paga latência e franquia de dados pela versão alugada, e a experiência sem instalação se divide em duas classes de público
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: A ferramenta de criação 3D pesada vira página, sobre formato aberto
    efeitos:
      - id: e10
        ordem: 1
        efeito: A edição de splats e de cenas capturadas passa a ser feita principalmente em editores de navegador, sem instalação por estação
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O entregável ao cliente passa de vídeo renderizado a link de cena navegável, e a revisão acontece dentro da cena, com comentário espacial
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Contratos de produção 3D passam a cobrar hospedagem e manutenção da cena como serviço recorrente, porque o entregável é um link que precisa continuar vivo
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O glTF com splats vira a moeda de troca entre ferramentas, e o formato proprietário perde valor como fosso dos fornecedores de DCC
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Fornecedores de DCC deslocam o fosso para o processamento em nuvem (treino, compressão e streaming de cena), e a cobrança passa do assento ao processamento
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Motores web abertos (three.js, PlayCanvas, Babylon.js) viram alvo primário em visualização e jogo 3D leve, com a exportação web de Unity e Unreal como segunda opção
        sinal: medio
        prazo: 2035
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Unity e Epic respondem com exportação web própria e runtime hospedado, e a web imersiva se bifurca entre cena aberta em glTF e HTML e blob WebAssembly de motor
            sinal: medio
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Só a cena aberta pode ser buscada, arquivada e remixada, e buscadores e assistentes passam a indexar conteúdo glTF e a ignorar os blobs de motor
                sinal: fraco
                prazo: 2045
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: A primeira obra 3D interativa de quem começa passa a nascer publicada, como fork de exemplo no navegador, e o link substitui o executável no portfólio de entrada
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: A geração que aprendeu 3D sem instalar ferramenta chega à direção de estúdios, e o pipeline padrão da indústria passa a começar pela página e terminar, quando termina, no nativo
                sinal: fraco
                prazo: 2052
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A memória e a GPU do celular médio limitam o editor de navegador a cenas médias, e estúdios mantêm estação nativa para o trabalho pesado
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O streaming de cena por nível de detalhe vira camada obrigatória da publicação 3D, e quem hospeda esse streaming vira intermediário entre criador e público
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: O custo de banda, e não o de licença, vira a barreira de entrada do criador independente de cena 3D
                sinal: fraco
                prazo: 2044
                confianca: baixa
```

### Classes de referência usadas para os prazos

Trinta anos pedem referências que cubram um ciclo inteiro de plataforma:

- **Applet Java** — 1995 → navegadores abandonam o NPAPI a partir de 2013, inutilizável entre 2015 e 2017 → removido do Java 26 em 2026 [26]: **~20 anos de uso, 31 de existência formal**. Referência para a vida útil de uma pilha de mídia no navegador, e para quanto tempo o conteúdo fica órfão depois de a pilha morrer (e2.1).
- **Flash Player** — 1996 → carta de Jobs em 2010 → fim em 31/12/2020, bloqueio em 12/01/2021; em 2013 a Adobe dizia atualizar 400 milhões de desktops em seis semanas [25]: **~24 anos, com dez de declínio aberto por uma fabricante**. Referência de retroação por fabricante (e3, e5) e de preservação por emulação (o Ruffle, em Rust e WebAssembly [28]).
- **App Store** — anúncio sem loja em 2007, loja em 07/2008 com 500 apps, ~2,2 milhões em 2017 [27]: **~9 anos da criação à saturação**, e 18 anos depois ainda dominante. Referência para a velocidade com que um canal de distribuição se impõe (e1) e para quanto tempo ele resiste (e1.1).
- **A própria internet** — 74% da população mundial em 2025, 94% nos países de alta renda e 23% nos de baixa renda [42]: **~30 anos da web comercial até três quartos do mundo**, com a desigualdade persistente. Referência para e9.1: uma fronteira de acesso técnico dura décadas, mesmo com o custo caindo.
- **WebXR como especificação** — 2019 → CR em 2022 → CRD em 2026 [10]: **7+ anos sem Recommendation**. Referência para e5.1.
- **VR de consumo** — mais de uma década e, nas palavras da Meta, sem crescer "tanto nem tão rápido quanto esperávamos" [9]. Empurra todo efeito que depende de headset.
- **Óculos leves** — mais de 7 milhões de Ray-Ban Meta em 2025 [13]; previsão de 27,3 milhões/ano sem tela e 12,2 milhões com tela em 2030 [12]; nenhum com navegador anunciado [14][15]. Para a Raiz 2: se o óculos com tela levar da primeira geração (2026) até 10% dos usuários de óculos o mesmo tempo que o VR não chegou a atingir, o navegador no óculos só é hábito na década de 2040.
- **Fracassos do sem-instalação** — Instant Apps (2017–2025, por baixa adoção de desenvolvedores, com limite de 15 MB [23]) e Stadia (2019–2023 [24]). O sem-instalação falhou duas vezes quando exigiu trabalho extra do desenvolvedor ou custo de servidor do fornecedor.
- **Figma** — WebAssembly em 2017 cortou a carga em 3x [20]; a dominância posterior no 2D é de memória, **sem número aberto** (seção 8). Referência qualitativa para a Raiz 4.

### Mecanismos, raiz a raiz

**Raiz 1.** **e1:** porque o link WebGPU roda o jogo completo sem aprovação, o estúdio pequeno usa o link como teste de mercado barato; a Poki mede 62% de jogadores comprando depois de descobrir na web e 53% dos desenvolvedores planejando portar [22], e a Meta torna o pacote de loja opcional [8] — sinal médio (dois artefatos). Prazo 2032: seis anos a partir do WebGPU em todos os motores, mais lento que os ~2 anos da App Store até virar padrão de lançamento porque o link ainda falha em parte dos aparelhos [2]. **e1.1:** porque o pacote é opcional [8], a loja deixa de ser necessária para existir e passa a ser necessária para cobrar e aparecer no menu; troca de mecanismo (existência → pagamento). **e1.1.1:** porque descoberta sem loja precisa de alguém que ordene, o portal repõe o porteiro — retroação por reconcentração. **e1.2:** porque a Justiça dos EUA devolveu à primeira instância o valor da comissão sobre link externo [37] e o CADE obrigou a aceitar pagamento externo [39], o jogo que roda inteiro no link pode cobrar fora; 2036 porque o valor ainda está em disputa. **e1.2.1:** porque PWA empacotado e site são o mesmo código, o que o regulador consegue distinguir é o contrato. **e2:** porque app de museu expira com o contrato e com a loja (a Apple removeu apps de 32 bits [27]) e um link glTF com `model-viewer` [21] não; o fim da plataforma hospedada do 8th Wall [40] é o caso concreto de runtime que some. **e2.1:** porque a web tem emulação (Ruffle [28]) e o app nativo de headset não tem; referência Flash/Java: o conteúdo de uma pilha morta fica órfão por uma década ou mais [25][26]. Prazo 2045: dez anos depois do fim da janela 2016–2035. **e2.1.1:** prazo 2056, na borda do horizonte; mecanismo: é mais barato emular um navegador de época (um programa) do que milhares de apps de headset (um por título e por SO). **e2.2:** porque a plataforma hospedada acabou e partes viraram MIT [40]. **e2.2.1:** retroação — o componente difícil ficou como binário de licença limitada [40]. **e3 (quem bloqueia):** três artefatos (nenhum motor alternativo em dois anos [34], barreiras da OWA [35], WebXR só VR [5] e sem `immersive-ar` no Safari 27 [4]); confiança alta porque o incentivo está documentado. Prazo 2029: horizonte até onde há evidência de que nada muda sem ordem regulatória. **e3.1:** a CMA tem prazo em 01/01/2027, que pode escorregar 6–12 meses [36]; com três reguladores em ritmos diferentes, o link imersivo chega ao iPhone por país. **e3.1.1:** troca de ator (regulador de concorrência → legislador de infraestrutura) e de mecanismo (remédio caso a caso → obrigação permanente). Referência: portabilidade numérica — o paralelo é meu, sem fonte aberta. **e3.2:** porque o Android XR tem a mão como entrada padrão [6] e o Quest tem WebGPU [7], as convenções se formam onde há AR web. **e3.2.1:** a Apple já mudou a especificação uma vez para caber o olhar-e-pinça (`transient-pointer` [5]); a previsão é que faça de novo, agora para recuperar a gramática.

**Raiz 2.** **e4:** porque `<model>` agora existe em iOS, macOS e visionOS e abre ambiente imersivo com uma chamada [4], e o Android XR tem AR completa no navegador [6], um conteúdo curto pode ser página; sinal médio (dois artefatos). Prazo 2036 pela referência dos óculos leves. **e4.1:** porque no óculos com tela a entrada principal é voz e assistente [14] e a interface mais complexa é um widget [15], a descoberta passa pelo assistente — troca de ator (loja → assistente). **e4.1.1:** consequência antitruste, sem artefato. **e4.2:** o Android XR já expõe depth sensing estéreo à página, com permissão por domínio [6], e o Quest faz projeção de profundidade [7]; confiança rebaixada (7.9). **e4.2.1:** retroação — a curadoria volta pelas permissões. **e5 (quem bloqueia):** três artefatos (visionOS só VR [5], Safari 27 sem `immersive-ar` [4], a Meta descrevendo o futuro do VR sem mencionar a web [9]). **e5.1:** WebXR em CRD desde 2022 e fora do Interop 2026 [10][11]. **e5.1.1:** porque quem não tem loja forte (Rokid lidera AR+IA com 41%, e a China tem 45% do segmento [13]) ganha catálogo de graça com a web. **e6:** se o conteúdo vem da web e a entrada é o assistente, o que sobra ao sistema é compor camadas; sem artefato, especulativo. **e6.1:** referência Chromebook, qualitativa, sem número aberto. **e6.1.1:** prazo 2055; porque a web imersiva depende hoje de dois motores (Blink e WebKit), a concentração passa ao motor.

**Raiz 3.** **e7:** porque WebLLM e Transformers.js rodam modelo de 1–20B no navegador [29][30] e a demo do HN funciona em Android [32], o custo de inferência pode sair do servidor do criador; sinal médio (bibliotecas e demo, nenhum jogo comercial aberto). **e7.1:** os comentadores do HN reclamam dos 500 MB [32] e o Transformers.js oferece controle de cache [30] — contradição direta com "é só um link"; retroação. **e7.1.1 (quem captura):** o Chrome já traz Gemini Nano com ciclo de vida gerido pelo navegador [31]; sinal médio, confiança baixa porque não se sabe se criadores aceitarão modelo que não escolheram. **e7.2:** troca de ator (criador → portal). **e7.2.1:** nomeia o órgão (ClassInd) e o mecanismo (o que é avaliado deixa de ser só o conteúdo fixo); sem artefato. **e8:** porque o compute do WebGPU serve tanto à cena quanto ao modelo, a geração pode acontecer no cliente; sinal fraco. **e8.1.1:** consequência de autoria, sem artefato. **e9:** WebGPU-SPY [33] mostra o canal lateral que obriga o navegador a restringir informação de adaptador; sinal médio. **e9.1:** três artefatos (Web3D Survey com Android 72% e Linux 17% [2]; SuperSplat 3.0 sem fallback [16]; lacunas no anúncio oficial [1]); sinal forte e confiança alta porque já é observável. Referência ITU [42]: a fronteira de acesso dura décadas. **e9.1.1:** mecanismo meu, sem artefato; nomeio o ator (quem compra equipamento escolar) e deixo o programa sem nome porque não abri edital (seção 8). **e9.2:** o Stadia mostra que streaming pelo navegador existe e pode falhar [24]; volta como plano B, não como raiz. **e9.2.1:** troca de mecanismo (GPU → banda e franquia), relevante no Brasil pré-pago.

**Raiz 4.** **e10:** SuperSplat 3.0 [16] e extensão glTF [17]; prazo 2032 pela referência Figma (~5 anos, qualitativa). **e10.1:** porque o editor já renderiza vídeo e publica no navegador [16], o passo seguinte é mandar a própria cena. **e10.2:** porque sete empresas de CAD, GIS e captura estão na extensão [17]. **e11:** three.js com WebGPU [18], bibliotecas no anúncio [1], Unity ainda experimental [19]. **e11.1 (quem bloqueia):** Unity trata WebGPU como alvo de exportação [19]; confiança baixa. **e11.2:** sem artefato direto; sinal fraco. **e11.2.1:** prazo 2052 — uma geração profissional (~20 anos) depois de e11.2; troca de ator (estudante → diretor de estúdio). **e12 (retroação):** números de memória do SuperSplat [16] e lacunas de GPU [2].

**Regra de parada.** Parei cada ramo quando o filho seria o pai "mais adiante": depois de e1.1.1 (portal como porteiro), o próximo seria "o portal cobra mais" — mesmo ator, mesmo mecanismo. Depois de e9.1.1, o próximo seria "escolas sem GPU ficam de fora", que é e9.1 amadurecendo. Depois de e2.1.1, o próximo ("a história da mídia imersiva é escrita a partir do que era web") é a mesma preservação vista de longe.

**Teste da causa solta.** e9.2 (streaming como plano B) aconteceria sem WebGPU? O streaming existe desde 2019 [24]; mantido porque o *motivo* de voltar é a fronteira criada por e9.1 — sem a raiz, ele seria concorrente do console, não plano B da página. e2 (acervo como link) aconteceria só com WebGL? Para objetos isolados, sim; para cena capturada pesada, não [16]. e3.1 (regulação decide) existiria sem a raiz, por causa das lojas em geral; foi escrito especificamente sobre o link imersivo. e3.1.1 poderia vir de qualquer disputa de navegador: mantido porque WebGPU/WebXR são justamente as capacidades que um motor pode negar e que a página não pode contornar; confiança baixa.

**Cobertura STEEP e quem perde.** Social: e2, e3.2, e9.1, e11.2. Tecnológico: e5, e7, e8, e10, e11, e12. Econômico: e1, e1.2, e10.1.1, e12.1.1. Ecológico: **vazio** — o consumo de energia da inferência no cliente é real, mas não achei fonte e ele serve a qualquer tema de IA local (12.4). Político: e3, e3.1, e3.1.1, e4.1.1, e5. **Quem perde:** a loja como pedágio (e1.2), agências de runtime WebAR (e2.2), quem tem iPhone (e3), quem tem Android intermediário ou Linux (e9.1), quem tem aparelho fraco e franquia curta (e9.2.1), fornecedores de DCC por assento (e10.2), fornecedores de inferência por chamada (e7), o artista de asset fechado (e8.1).

### Cruzamentos

- **Convergência 1 — a curadoria sai da loja e vai para navegador, portal e assistente.** Chega por cinco ramos de três raízes: e1.1.1 (portal), e4.1 (assistente dos óculos), e4.2.1 (permissões), e7.1.1 (modelo padrão do navegador), e6.1.1 (motor). A loja não desaparece; o porteiro troca de endereço. É o achado mais valioso do mapa.
- **Convergência 2 — a desigualdade passa a ser de GPU, motor e país.** e9.1 (Raiz 3), e12 (Raiz 4) e e3 (Raiz 1, pelo lado inverso: o aparelho de maior renda tem a GPU mas não o motor) chegam ao mesmo efeito: o acesso depende de aparelho × motor × jurisdição.
- **Convergência 3 — preservação.** e2.1.1 (emulador de navegador de época) e e11.1.1 (só a cena aberta é arquivável) chegam ao mesmo efeito de longo prazo: em 2056, a memória da mídia imersiva de 2026–2046 é desproporcionalmente a que foi publicada como página aberta.
- **Retroalimentação.** e5.1.1 (fabricantes menores adotam a web) reforça a Raiz 2. Em sentido contrário, e6.1.1 (concentração no motor) enfraquece a promessa da Raiz 1: sem porteiro de loja, o porteiro é quem mantém o Blink.
- **Contradição 1.** e7.1 (download volta a pesar) contra e1 (o link é o teste barato). O que decide é e7.1.1: com modelo compartilhado pelo navegador, o link continua leve; sem ele, experiência com IA volta a parecer instalação.
- **Contradição 2.** e11.1 (motores recapturam a web com blob WebAssembly) contra e10.2 (glTF vira moeda de troca). O que decide: se a extensão de splats for ratificada e adotada pelos motores comerciais como formato de importação.

## 6. Sinais fracos e wildcards

### Sinais fracos

1. **`<model>` com ambientes imersivos no Safari 27** [4]. O que mudaria: a Apple construiria a sua "página espacial" fora do WebXR, com controle total do que a página pode fazer. Sinal observável: `<model>` entrar em padronização no W3C com implementação em outro motor, ou a Apple publicar API de interação dentro do ambiente.
2. **Foveação e space-warp em WebGPU no Quest Browser** [7]. O que mudaria: a web deixaria de ser a versão leve no headset. Sinal observável: um título comercial de Quest lançado primeiro como link; ou as notas passarem de "experimental" a padrão.
3. **Modelo gerido pelo navegador** [31]. O que mudaria: e7.1.1 viraria o cenário provável. Sinal observável: a Prompt API sair do origin trial e aparecer em outro motor.
4. **Rokid e a China liderando AR+IA** [13]. O que mudaria: os fabricantes que mais precisam de catálogo sem loja forte estão fora do eixo Apple/Meta/Google (e5.1.1). Sinal observável: um óculos com navegador WebXR como interface principal.
5. **Remoção final do applet Java em 2026** [26]. O que mudaria: é o fim formal de uma pilha de mídia de navegador de 1995; indica o prazo real de uma plataforma web morta. Sinal observável para este mapa: WebGL entrar em deprecação formal num motor principal — seria o início do mesmo ciclo para o 3D web de 2011–2025.
6. **Gestalt Village** (da turma: modelo de linguagem inteiro no navegador via WebGPU, sem rede). Não encontrado na busca (12.3); não entra como fonte. Sinal observável: um jogo com agentes LLM no cliente entre os mais jogados de um portal web.

### Wildcards

1. **Uma fabricante de óculos desliga WebXR por padrão** (o wildcard da turma). Mecanismo: alegação de segurança ou privacidade (câmera do mundo, fingerprinting de GPU [33]) justifica restringir WebXR a uma lista de sites — como a Apple anunciou retirar os web apps da tela inicial na UE e recuou no iOS 17.4 depois de mais de 500 queixas [38]. Por que é improvável: as três fabricantes acabaram de *adicionar* WebGPU ao XR [3][6][7], e o recuo de 2024 mostra o custo regulatório. O que faria: a Raiz 2 morre naquele ecossistema, e1 recua ao celular, e5 vira regra. Sinal precoce: WebXR passar a exigir revisão por origem, ou uma nota de versão que o desligue "temporariamente".
2. **A página deixa de ser a unidade de interface.** Mecanismo: assistentes passam a montar a experiência a partir de dados e modelos, sem abrir a página do criador — o link vira fonte de dados, não destino. Por que é improvável *para 3D e XR* até 2056: uma cena é obra autoral pesada, não formulário. O que faria: as Raízes 1 e 2 perdem o sujeito; a convergência 1 se completa (o assistente é o único porteiro); e2 vira o único ramo intacto. Sinal precoce: óculos com tela cujo assistente exibe resposta sintetizada em vez de abrir a página, como padrão.
3. **Um ataque grave por WebGPU faz os navegadores desligarem compute por padrão.** Mecanismo: um canal lateral mais forte que o WebGPU-SPY [33], com extração de dado, força mitigação drástica. Por que é improvável: o custo de desligar para toda a IA no navegador seria alto. O que faria: Raízes 3 e 4 perdem o fundamento técnico. Sinal precoce: CVE crítico de WebGPU com prova de conceito pública.
4. **Motor não-WebKit no iPhone com AR web antes de 2030.** Mecanismo: a CMA mantém o prazo [36] e o Chrome leva ao iOS o módulo AR que já tem no Android XR [6]. Por que é improvável: nenhum motor em dois anos de DMA [34], e o prazo pode escorregar [36]. O que faria: e3 cai de alta para baixa e a gramática (e3.2) se unifica cedo. Sinal precoce: beta público de Chrome com Blink no iOS britânico.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem — "é 2056 e este mapa errou. Por quê?"

1. **A pilha de 2026 morreu antes de 2056, como o Flash e o applet.** As duas pilhas de mídia de navegador anteriores viveram 20–25 anos úteis [25][26]; WebGPU tem um. É razoável que em 2056 o 3D web rode sobre outra API. Consequência aplicada: nenhum efeito depois de 2045 menciona WebGPU como condição; e2.1.1 e e11.1.1 foram escritos sobre "cena aberta", não sobre WebGPU; e2.1.1 ficou com confiança baixa.
2. **O óculos nunca virou aparelho de uso geral, e o celular continuou o centro.** A Meta admite que o VR cresceu menos que o esperado e levou o Horizon Worlds ao celular [9]; os óculos que vendem não têm tela [12][13]. Consequência: e4 prazo 2034 → 2036; e6 e filhos empurrados e mantidos em baixa.
3. **O sem-instalação falhou pela terceira vez, e a loja se adaptou.** Instant Apps e Stadia morreram por exigir trabalho extra ou custo do fornecedor [23][24]; o link WebGPU exige fallback e testes por motor [2]. A loja já aceita PWA [8] e pode baixar a taxa. Consequência: e1 não sobe de media; e1.2 prazo 2034 → 2036.

### 7.2 Extrapolação linear

- **e10 (edição vira de navegador)** é "SuperSplat maior". Ganhou mecanismo não linear: a extensão glTF [17] cria efeito de rede entre ferramentas, e o link permite revisão colaborativa que a estação não tem.
- **e12.1.1 (banda vira barreira)** é "cena maior, banda maior". Sem mecanismo não linear forte; mantido na 3ª ordem com confiança baixa e sinalizado aqui.
- **e11.2.1 (geração chega à direção)** é demografia pura — o tempo passa e quem era estudante vira diretor. Ganhou uma condição: só vale se e11.2 acontecer; confiança baixa.
- **"A loja acaba"** era extrapolação pura; removido (12.4).

### 7.3 Velocidade de adoção

- **e6 (SO do óculos encolhe)**: rascunho com 2040. Referência VR [9] e óculos sem navegador [14][15]. Empurrado para 2046 (+6).
- **e4 (página espacial)**: rascunho 2034 → 2036 (+2), pela mesma referência.
- **e7 (modelo embarcado em jogo web)**: rascunho 2030. Nenhum jogo comercial aberto nesta rodada faz isso [32]. Empurrado para 2033 (+3).
- **e1.2**: rascunho 2034, comissão ainda em disputa judicial [37]. Empurrado para 2036 (+2).
- **e2.1**: rascunho 2038. Referência Flash/Java: a percepção de perda vem uma década depois de a pilha morrer [25][26]. Empurrado para 2045 (+7).

### 7.4 A raiz que não acontece

- **Sem a Raiz 1**, sobram as Raízes 3 e 4 no desktop e o 3D web como ferramenta, não como distribuição: perde-se e1–e3, ficam e9–e12.
- **Sem a Raiz 2**, perde-se o óculos como destino; as Raízes 1, 3 e 4 continuam no celular e no headset atual. É a raiz mais provável de não acontecer (7.1.2).
- **Sem a Raiz 3**, sobra o 3D sem IA; a convergência 1 perde um ramo (e7.1.1) e se mantém pelos outros quatro.
- **Sem a Raiz 4**, a criação continua em estação e a web é só destino; e10 some, e11 sobrevive como exportação.
- As quatro dependem do mesmo pré-requisito (GPU acessível pela página), mas não uma da outra. Se esse acesso for desligado (wildcard 3), três caem juntas — declarado como wildcard.

### 7.5 Suposições escondidas

1. **A GPU continua acessível pela página por padrão.** Quebrada → wildcard 3.
2. **As fabricantes continuam permitindo WebXR.** Quebrada → wildcard 1.
3. **A página continua sendo a unidade de interface.** Quebrada → wildcard 2 (novo nesta rodada, por causa do horizonte de 30 anos).
4. **Os motores abertos continuam mantidos** (three.js é comunitário; PlayCanvas é empresa). Quebrada → e11 cai; não virou wildcard porque há vários motores.
5. **Modelo aberto continua aberto e pequeno o bastante.** Quebrada → e7 depende só do modelo do navegador.
6. **Banda barata.** No Brasil, o pré-pago com franquia torna isso frágil (e7.1, e9.2.1, e12.1.1).
7. **Regulação na direção atual** (DMA, CMA, CADE, Epic). Um recuo muda e1.2, e3.1 e e3.1.1.

### 7.6 Viés do autor

A zona de interesse é "Criação e plataforma", e o público é quem projeta mídia. Três efeitos estão aqui em boa parte porque esse público gosta deles: **e2 (acervo como link)**, **e11.2 (a primeira obra nasce publicada)** e **e2.1.1 (a web imersiva de 2030 ainda roda em 2056)**. e11.2 teve a confiança rebaixada; e2.1.1 ficou em baixa; e2 foi mantido porque tem dois artefatos. Há viés pró-web: o mapa trata a loja como pedágio e a web como aberta, mas e6.1.1 e a convergência 1 mostram que a web também concentra. Por fim, a rodada anterior deste mesmo tema (horizonte 2041) foi lida antes de escrever esta; a estrutura de raízes é parecida, o que pode ser ancoragem e não convergência independente (12.1).

### 7.7 Calibração

Contagem final: ordem 1 — alta 2, media 8, baixa 2; ordem 2 — alta 1, media 11, baixa 8; ordem 3 — alta 0, media 0, baixa 20. "Alta" cai (17% → 5% → 0%) e "baixa" sobe (17% → 40% → 100%). As três "alta" (e3, e5, e9.1) são observáveis hoje com três artefatos cada; medem mecanismo documentado, não posição na árvore.

### 7.8 Teste do falseador do autor

- **A adoção já passou da maioria inicial?** Para 3D por WebGL e jogo HTML5, sim — recusados como raiz. Para WebGPU como alvo primário de 3D pesado e WebXR como distribuição, não: o suporte instalado é amplo [2], mas o SuperSplat 3.0 é de 09/09/2026 [16], o Unity marca WebGPU como experimental [19] e não há número público de uso de WebXR (3.4). Suporte instalado não é adoção de uso.
- **A tecnologia só melhora o que existe?** Para o visualizador de produto, sim (contexto). A Raiz 4 é a mais próxima de melhoria sustentadora; mantida porque o que rompe é o entregável (arquivo → link) e a licença por assento.

### 7.9 Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| e1.2 | prazo 2034 | prazo 2036 | comissão sobre link ainda em disputa [37] (7.1.3) |
| e2.1 | prazo 2038 | prazo 2045 | referência Flash/Java: a perda aparece uma década depois [25][26] (7.3) |
| e2.1.1 | confianca media | confianca baixa | pré-mortem 1: a pilha de 2026 pode não existir em 2056 |
| e4 | prazo 2034 | prazo 2036 | óculos com tela sem navegador [14][15] |
| e4.2 | confianca media | confianca baixa | depende do óculos leve, raiz em laboratório |
| e6 | prazo 2040, confianca media | prazo 2046, confianca baixa | pré-mortem 2 e referência VR [9] |
| e6.1.1 | prazo 2050 | prazo 2055 | acompanha e6 |
| e7 | prazo 2030, sinal forte | prazo 2033, sinal medio | nenhum jogo comercial aberto; os artefatos eram bibliotecas e demo |
| e9.1.1 | efeito nomeava o programa federal de compra de equipamento | ator genérico "compras públicas de equipamento escolar" | não abri edital nem nome de programa; nomear seria inventar |
| e10 | confianca alta | confianca media | "principalmente" depende de WebGPU em Android e Linux [2] |
| e11.1 | confianca media | confianca baixa | resposta de Unity/Epic incerta; um artefato [19] |
| e11.2 | sinal medio, confianca media | sinal fraco, confianca baixa | nenhum artefato direto; viés do autor (7.6) |
| e12 | confianca alta | confianca media | números de memória de um fabricante só [16] |
| "a loja de aplicativos acaba" | e1.3 | removido (12.4) | extrapolação sem mecanismo |
| "óculos sem tela ganham navegador por voz" | e4.3 | removido (12.4) | sem tela não há cena 3D; fora do objeto |
| "energia da inferência no cliente" | e9.3 | removido (12.4) | serve a qualquer IA local (tema 16) |

Pelo menos um efeito rebaixado ou removido por raiz: Raiz 1 (e1.2, e2.1, e2.1.1, "a loja acaba"), Raiz 2 (e4, e4.2, e6), Raiz 3 (e7, e9.1.1, "energia"), Raiz 4 (e10, e11.1, e11.2, e12).

## 8. O que a máquina errou

1. **Dois erros herdados da rodada anterior, pegos ao reabrir as fontes.** A rodada de horizonte 2041 dizia "20 áreas do Interop 2026"; a página aberta agora lista 18 [11]. E dizia "Chrome/Edge 113+" citando o anúncio conjunto; o extrato do anúncio aberto agora fala em "versão 144" no Windows [1] — a 113 é a da estreia no Chrome, mas não está nessa fonte. Neste documento não uso nenhum dos dois números.
2. **Data do three.js.** O extrato da página de releases atribui ao r186 a data de 08/09/2024 e ao r185 a de 01/07/2023, o que é incoerente (r184 aparece em abril de 2024, depois do r185). Não usei data nenhuma do three.js; uso só o conteúdo das notas [18].
3. **Afirmação de "offline após a primeira carga" no Transformers.js.** A rodada anterior atribuía isso ao post do v4; o extrato aberto agora fala de `ModelRegistry` com controle de cache, não de funcionamento offline [30]. Reescrevi e7.1 com o que a fonte diz.
4. **Gestalt Village.** O briefing da turma cita o projeto; a busca não o encontrou. Poderia ter descrito com a frase do briefing como se fosse fonte; ficou como sinal fraco sem citação (12.3).
5. **Referências sem número.** "Figma dominou o 2D em ~5 anos", "Chromebooks competiram por rodar Chrome" e "portabilidade numérica como precedente regulatório" são de memória. Declaradas como qualitativas; nenhum efeito depende só delas.
6. **Os US$ 20 bi da Apple** vêm da OWA [35], organização de advocacy; é estimativa citada, não dado auditado.
7. **"Precisão de 90"** do WebGPU-SPY [33] aparece sem unidade explícita no resumo; tratei como 90%.
8. **Mecanismos fracos.** e7.2.1 (ClassInd pedindo lista de modelos) e e9.1.1 (GPU no edital escolar) soam plausíveis, mas os mecanismos são meus e não há artefato. São os efeitos que mais "soam bem e sustentam pouco" no mapa.
9. **Ancoragem na rodada anterior.** Li a rodada 2041 do mesmo tema antes de escrever. A estrutura de quatro raízes é quase a mesma; não posso afirmar que eu chegaria a ela sozinho. O que mudou por causa do horizonte está listado em 12.1.

## 9. Três cenários para 2056

**Provável.** Em 2056 o 3D e o XR pela web são a porta comum, mas não a casa. Uma geração inteira abriu a primeira experiência imersiva por link, e o estúdio pequeno lança na página antes de lançar em qualquer loja. A loja sobreviveu como caixa registradora e selo de confiança. A pilha técnica de 2026 já foi trocada uma vez; o que sobreviveu dela foi o formato de cena aberta e o hábito do link. Nos óculos, o conteúdo curto chega como página espacial, mas quem decide qual página ocupa o campo de visão é o assistente do sistema — e é sobre ele, e não sobre a loja, que correm os processos de concorrência. A desigualdade é de aparelho, motor e país: o Android intermediário brasileiro recebe a versão reduzida ou a alugada na nuvem. **Sinal precoce:** a Meta ou o Google darem aos PWAs empacotados a mesma visibilidade dos apps nativos na loja, e a Apple manter o Safari sem `immersive-ar` até 2030.

**Desejável.** Em 2056 um link abre a mesma experiência imersiva em qualquer óculos e celular da última década, com fallback que funciona; a cena é glTF indexável, arquivável e remixável; as obras imersivas de 2030 ainda rodam num emulador mantido por bibliotecas públicas; o personagem usa um modelo aberto escolhido pelo criador, compartilhado entre sites sem que o navegador imponha o seu. Para chegar aqui: WebXR com AR em todos os motores, inclusive no iOS, por força da CMA, da UE e do CADE; GPU acessível no aparelho barato; ratificação e adoção comercial da extensão glTF de splats; política pública de preservação que trate cena web como acervo; e um padrão de modelo compartilhado entre sites que não seja propriedade de um navegador.

**Indesejável.** Em 2056 a web imersiva é a plataforma de quem perdeu: fabricantes grandes mantêm o nativo uma geração à frente, WebXR ficou restrito a listas de sites aprovados "por privacidade", e o único motor que roda WebGPU completo nos óculos é mantido por uma empresa, que define o que a página pode fazer. O assistente sintetiza a experiência em vez de abrir o link, e o criador vira fornecedor de dados para ele. As obras imersivas de 2016–2040 feitas como app sumiram com as lojas; as feitas como blob de motor não são arquiváveis. **Sinal precoce:** uma nota de versão que restrinja WebXR a origens aprovadas, ou um óculos com tela cujo assistente exiba resposta sintetizada em vez de abrir a página.

## 10. O experimento

**O que é.** *O link de trinta anos.* Uma cena 3D/XR curta — um objeto capturado em glTF com splats, um personagem que responde por um modelo pequeno rodando no cliente — publicada como **um link autocontido** (todas as dependências no mesmo endereço, sem CDN) e como QR. A página registra, aparelho a aparelho: motor, adaptador WebGPU (ou ausência), se `immersive-vr` e `immersive-ar` foram oferecidos, tempo até a primeira interação, tamanho baixado, e se o modelo rodou local ou caiu para a versão sem IA. A segunda metade do experimento é temporal: a mesma página é aberta em versões antigas de navegador (Chromium de 2024 e 2025, via Playwright) para medir o que já quebra com um ou dois anos de idade.

**Que pergunta responde.** Duas: (a) o link é de fato mais universal que o app para 3D/XR, ou a fronteira de GPU e motor já recria a fragmentação que a loja tinha? (e3, e9.1); (b) quão rápido uma página WebGPU envelhece — a web imersiva é mais durável que o app, como supõem e2.1 e e2.1.1, ou tão frágil quanto?

**Que tecnologia emergente usa, e por que não dá com a madura.** WebGPU (compute para ordenar os splats e rodar o modelo), WebXR com AR, `KHR_gaussian_splatting`, WebLLM ou Transformers.js. Com WebGL dá para mostrar um objeto, mas não ordenar milhões de gaussianas nem rodar o modelo na mesma GPU [16][29]; com app nativo o experimento mediria a loja, não o link.

**O que a turma faz em sala.** Cada pessoa abre o QR no próprio celular (e nos óculos disponíveis no laboratório) e anota o que viu; a página envia o registro técnico. A turma monta a tabela aparelho × motor × resultado, compara com os 72% do Android no Web3D Survey [2] e discute: quem ficou de fora, por quê, e o que o criador teria de fazer para incluí-lo (fallback, streaming, versão sem IA).

**O que me faria mudar de ideia.** Se **mais de 90%** dos aparelhos da turma rodarem a cena completa com IA local e o tempo até a primeira interação ficar abaixo de 10 segundos, e9.1 está superestimado e a Raiz 1 está mais adiantada do que o mapa diz. Se **menos de 50%** rodarem a versão completa, a Raiz 1 está atrasada e o cenário provável fica mais perto do indesejável. Se a página já falhar em navegador de 2024, e2.1.1 (a web imersiva de 2030 roda em 2056) deve ser removido.

## 11. Fontes

Quarenta e duas fontes, todas abertas nesta rodada em 22/09/2026.

**WebGPU e WebXR — especificação, suporte, óculos**

1. https://web.dev/blog/webgpu-supported-major-browsers — web.dev (Google), 25/11/2025. WebGPU nos quatro motores, versões, lacunas e bibliotecas. Sustenta 3.1, 3.2, "por que agora" das Raízes 1 e 3, e9.1. *Confiabilidade:* alta, fonte primária de fabricante.
2. https://web3dsurvey.com/webgpu — Web3D Survey. 82,09% de suporte; Android 72,48%; Linux 16,97%; Firefox 61,27%. Sustenta 3.2, 3.4, 3.5, e9.1, e12, experimento. *Confiabilidade:* média — amostra autosselecionada, sem data nem tamanho visíveis.
3. https://webkit.org/blog/17640/webkit-features-for-safari-26-2/ — WebKit, Safari 26.2. WebXR com WebGPU no visionOS. Sustenta 3.1, Raízes 1 e 2. *Confiabilidade:* alta.
4. https://webkit.org/blog/17967/news-from-wwdc26-webkit-in-safari-27-beta/ — WebKit, WWDC26. `<model>` em iOS/macOS, ambientes imersivos, sem `immersive-ar`. Sustenta e3, e4, e5, sinal fraco 1. *Confiabilidade:* alta.
5. https://www.uploadvr.com/visionos-2-apple-vision-pro-webxr/ — UploadVR, 2024. WebXR por padrão no visionOS 2, só VR, `transient-pointer`. Sustenta e3, e3.2.1, e5. *Confiabilidade:* média-alta.
6. https://developer.android.com/develop/xr/web — Android Developers. Módulo AR, hit test, âncoras, depth estéreo, mãos como entrada padrão, permissão por domínio. Sustenta e3.2, e4, e4.2, wildcard 4. *Confiabilidade:* alta.
7. https://developers.meta.com/horizon/release-notes/web/ — Meta, notas do Quest Browser. WebGPU e depth (146), space-warp (149.1), foveação (150.1). Sustenta 3.1, e4.2, sinal fraco 2. *Confiabilidade:* alta.
8. https://developers.meta.com/horizon/documentation/web/pwa-overview/ — Meta. PWA na Horizon Store, pacote opcional. Sustenta e1, e1.1. *Confiabilidade:* alta.
9. https://developers.meta.com/horizon/blog/2026-vr-state-of-the-union-horizon-mobile-focus/ — Meta, 2026. VR cresceu menos que o esperado; Worlds para o celular; 86% do tempo em apps de terceiros; sem menção à web. Sustenta pré-mortem 2, e5, referência VR. *Confiabilidade:* alta para a posição da empresa.
10. https://www.w3.org/standards/history/webxr/ — W3C. FPWD 2019, CR 2022, CRD 09/06/2026. Sustenta 3.2, e5.1, referência. *Confiabilidade:* alta.
11. https://web.dev/blog/interop-2026 — web.dev, 12/02/2026. Áreas do Interop 2026, sem WebGPU nem WebXR. Sustenta 3.2, e5.1, seção 8. *Confiabilidade:* alta.
12. https://www.idc.com/resource-center/blog/smart-glasses-surge-the-xr-market-is-rewriting-its-own-rules/ — IDC, 2026. Óculos sem tela: 2,25 mi no 1º tri; 13,6 mi em 2026; 27,3 mi em 2030; com tela 3 → 12,2 mi. Sustenta 3.4, referência dos óculos. *Confiabilidade:* média-alta, previsão de consultoria.
13. https://9to5mac.com/2026/09/21/report-ai-glasses-shipments-surged-263-in-h1-2026-as-apple-prepares-to-enter-the-market/ — 9to5Mac sobre Counterpoint, 21/09/2026. +263%; Meta 94%; Rokid 41%; China 45%; 7 mi de Ray-Ban Meta em 2025. Sustenta 3.4, e5.1.1, sinal fraco 4. *Confiabilidade:* média-alta (secundária).
14. https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/ — Google, I/O 2026. Óculos de áudio primeiro, com tela depois; sem menção à web. Sustenta 3.2, Raiz 2, e4.1. *Confiabilidade:* alta para o anúncio.
15. https://9to5google.com/2025/12/08/android-xr-glasses-displays-2026/ — 9to5Google, 08/12/2025. Óculos Android XR com tela em 2026; apps projetados do celular; interface "como um widget". Sustenta 3.2, Raiz 2, e4.1. *Confiabilidade:* média-alta.

**Motores, ferramentas, formatos**

16. https://blog.playcanvas.com/new-in-supersplat-editor-3-0-rebuilt-on-webgpu/ — PlayCanvas, 09/09/2026. SuperSplat 3.0 só WebGPU; memória 1.557 → 105 MB; compute; 20 mi de gaussianas. Sustenta Raiz 4, e9.1, e10, e12. *Confiabilidade:* alta para fatos; números do fabricante.
17. https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release — Khronos, 03/02/2026. RC de `KHR_gaussian_splatting`; participantes; ratificação prevista no 2º tri. Sustenta Raiz 4, e10, e10.2. *Confiabilidade:* alta.
18. https://github.com/mrdoob/three.js/releases — three.js, r186. Melhorias de WebGPU e camadas XR. Sustenta 3.1, e11. *Confiabilidade:* alta para conteúdo; datas do extrato incoerentes (seção 8).
19. https://docs.unity3d.com/6000.3/Documentation/Manual/WebGPU.html — Unity 6.3. WebGPU experimental. Sustenta 3.1, e11, e11.1. *Confiabilidade:* alta.
20. https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/ — Figma, 08/06/2017. WebAssembly cortou a carga em 3x. Sustenta recusa do 2D e referência da Raiz 4. *Confiabilidade:* alta para o fato técnico.
21. https://modelviewer.dev/ — Google, `model-viewer`. 3D e AR com WebXR. Sustenta recusa do visualizador WebGL e e2. *Confiabilidade:* alta.

**Jogo web e classes de referência**

22. https://poki.com/blog/state-of-web-gaming-report-2026 — Poki, 2026. 53% planejam portar; 62% compram depois de descobrir na web. Sustenta 3.1, e1. *Confiabilidade:* média — parte interessada.
23. https://www.androidauthority.com/google-killing-android-instant-apps-3567211/ — Android Authority. Instant Apps 2017–2025, limite de 15 MB, fim por baixa adoção. Sustenta referência, pré-mortem 3. *Confiabilidade:* média-alta.
24. https://en.wikipedia.org/wiki/Google_Stadia — Wikipedia. Stadia 2019–2023, no Chrome, fim por falta de tração. Sustenta recusa do streaming, e9.2. *Confiabilidade:* média.
25. https://en.wikipedia.org/wiki/Adobe_Flash_Player — Wikipedia. Flash até 31/12/2020, bloqueio em 12/01/2021, carta de 2010, 400 mi em seis semanas (2013). Sustenta referência, e2.1, pré-mortem 1. *Confiabilidade:* média.
26. https://en.wikipedia.org/wiki/Java_applet — Wikipedia. Applet 1995; NPAPI abandonado a partir de 2013; removido do Java 26 em 2026. Sustenta referência de 30 anos, e2.1, pré-mortem 1, sinal fraco 5. *Confiabilidade:* média.
27. https://en.wikipedia.org/wiki/App_Store_%28Apple%29 — Wikipedia. Plano inicial de web apps; loja em 10/07/2008 com 500 apps; ~2,2 mi em 2017; 30%; 32 bits. Sustenta seção 2, referência, e2. *Confiabilidade:* média.
28. https://ruffle.rs/ — Ruffle. Emulador de Flash em Rust e WebAssembly, MIT/Apache. Sustenta e2.1, e2.1.1. *Confiabilidade:* alta para o que o projeto é.

**IA no navegador**

29. https://arxiv.org/html/2412.15803v2 — Ruan et al. (CMU), WebLLM. 71,2–79,6% da vazão nativa num M3 Max. Sustenta Raiz 3, e7, experimento. *Confiabilidade:* alta como preprint com código; hardware de ponta.
30. https://huggingface.co/blog/transformersjs-v4 — Hugging Face, 09/02/2026. Runtime WebGPU em C++; >8B; GPT-OSS 20B ~60 tok/s; `ModelRegistry`. Sustenta Raiz 3, e7, e7.1. *Confiabilidade:* média-alta, número do fabricante.
31. https://developer.chrome.com/docs/ai/built-in — Chrome. Gemini Nano gerido pelo navegador; APIs em origin trial. Sustenta e7.1.1, sinal fraco 3. *Confiabilidade:* alta.
32. https://news.ycombinator.com/item?id=44767775 — Hacker News, Show HN. Llama-3.2-1B no navegador; 500 MB; falhas no Safari. Sustenta 3.2, e7, e7.1. *Confiabilidade:* média — relato de praticantes.
33. https://arxiv.org/abs/2401.04349 — Ferguson, Wilson, Naghibijouybari, WebGPU-SPY, 2024. Canal lateral de cache de GPU; fingerprinting de 100 sites. Sustenta 3.2, e9, wildcards 1 e 3. *Confiabilidade:* alta como pesquisa.

**Lojas, regulação, poder, acesso**

34. https://www.macrumors.com/2026/06/17/webkit-rule-costs-ios-users-browser-performance/ — MacRumors, 17/06/2026. Nenhum motor alternativo no iOS; benchmarks do Edge com Blink. Sustenta 3.2, e3, wildcard 4. *Confiabilidade:* média-alta.
35. https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/ — OWA, 14/07/2025. Quatro barreiras; ~US$ 20 bi/ano. Sustenta "quem bloqueia" da Raiz 1, e3. *Confiabilidade:* média — advocacy com argumento documentado.
36. https://www.mymobiles.com/news/cma-apple-mobile-browser-investigation-ruling — MyMobiles, 2026. CMA: motores alternativos até 01/01/2027; recurso pode adiar 6–12 meses. Sustenta 3.2, e3.1, wildcard 4. *Confiabilidade:* média — secundária.
37. https://www.macrumors.com/2026/04/29/epic-games-wins-reversal-app-store-fee-battle/ — MacRumors, 29/04/2026. Comissão sobre link externo volta à primeira instância. Sustenta e1.2, 7.3. *Confiabilidade:* média-alta.
38. https://techcrunch.com/2024/03/01/apple-reverses-decision-about-blocking-web-apps-on-iphones-in-the-eu/ — TechCrunch, 01/03/2024. Recuo da Apple sobre web apps na UE; 500+ queixas. Sustenta wildcard 1. *Confiabilidade:* alta.
39. https://www.cnnbrasil.com.br/economia/negocios/cade-faz-acordo-para-apple-oferecer-pagamento-e-lojas-de-apps-alternativos/ — CNN Brasil. Acordo CADE-Apple homologado em 23/12/2025: 105 dias, 3 anos, até R$ 150 mi. Sustenta 3.5, e1.2, e3.1. *Confiabilidade:* média-alta.
40. https://8thwall.org/ — 8th Wall. Plataforma hospedada aposentada em 28/02/2026; partes em MIT; XR Engine binário. Sustenta recusa da WebAR de campanha, e2, e2.2, e2.2.1. *Confiabilidade:* alta, fonte primária.
41. https://gs.statcounter.com/os-market-share/mobile/brazil — StatCounter, agosto de 2026. Android 75,45% no Brasil. Sustenta 3.5. *Confiabilidade:* média-alta (tráfego, não aparelhos).
42. https://www.itu.int/itu-d/reports/statistics/2025/10/15/ff25-internet-use/ — ITU, Facts and Figures 2025. 74% online; 94% alta renda, 23% baixa renda. Sustenta 3.4, referência de 30 anos, e9.1. *Confiabilidade:* alta.

## 12. Anexo — o levantamento bruto

### 12.1 Relação com a rodada anterior (horizonte 2041)

Esta rodada partiu da leitura do documento da mesma skill, mesmo tema, horizonte 2041 (`rodadas/giordano-h2041/15-…`). O que mudou por causa do horizonte de 2056:

- **Classes de referência de ciclo completo:** applet Java (1995–2026 [26]) e internet até 74% (~30 anos [42]) entraram; são as que dizem quanto dura uma pilha de mídia de navegador e uma fronteira de acesso.
- **Pré-mortem novo (7.1.1):** a pilha de 2026 pode não existir em 2056. Levou a reescrever os efeitos tardios sobre "cena aberta" em vez de "WebGPU".
- **Wildcard novo (6, n.º 2):** a página deixa de ser a unidade de interface. Só faz sentido com trinta anos de janela.
- **Efeitos novos ou reescritos:** e3.1.1 (motor como infraestrutura regulada), e3.2.1 (especificação em perfis por fabricante), e9.2.1 (duas classes de público), e11.2.1 (a geração que nunca instalou chega à direção), e2.1.1 (a web de 2030 roda em 2056). Convergência 3 (preservação) é nova.
- **Prazos:** todos redistribuídos pela janela de 30 anos; nenhum efeito de 3ª ordem passa de 2056.
- **Correções factuais:** Interop 2026 tem 18 áreas, não 20 [11]; a versão do Chrome no anúncio conjunto [1]; a afirmação sobre offline no Transformers.js [30]; Galaxy XR e WebNN saíram porque as fontes não foram reabertas nesta rodada.

### 12.2 Premissas assumidas que o briefing não cobria

- "Três ordens" foi lido como três níveis no bloco, como exige o formato.
- A nota sobre o Brasil foi posta na seção 3.5 e em e7.2.1, e9.1.1, e9.2.1; sem subseção própria nas demais.
- Não houve entrevista; o briefing foi completo e nenhuma confiança foi rebaixada por isso.
- O experimento foi pensado para caber em uma aula do movimento 3 (celulares da turma + óculos do laboratório, se houver); se não houver óculos, a parte `immersive-*` vira só registro de indisponibilidade.

### 12.3 Buscas que não deram em nada

- **"Gestalt Village WebGPU LLM browser simulation":** voltaram WebLLM, um PoC de raciocínio no navegador, uma vitrine "AI Grid" e demos genéricas; o projeto não apareceu. Não citado como fonte.
- **"WebXR usage statistics sessions 2026":** o único número ("adoção de WebXR subiu 40%") vem de um site de divulgação sem base declarada; não aberto como fonte, não usado. Conclusão: sem número público de uso de WebXR.
- **Ratificação do `KHR_gaussian_splatting`:** a página aberta [17] é de fevereiro e prevê o 2º trimestre; não abri confirmação de ratificação.
- **Android XR com tela e navegador:** a busca trouxe páginas de terceiros afirmando que o Chrome estaria disponível no Android XR via Google Play; a fonte aberta sobre os óculos [15] fala de apps projetados do celular, e o anúncio do I/O [14] não fala de web. Tratei os óculos leves como sem navegador.

### 12.4 Efeitos cortados

- **"A loja de aplicativos acaba"** (rascunho e1.3): extrapolação de e1 sem mecanismo; a loja tem funções (pagamento, confiança, menu do aparelho) que o link não substitui.
- **"Óculos sem tela ganham navegador por voz"** (rascunho e4.3): sem tela não há cena 3D; fora do objeto.
- **"Energia da inferência no cliente sobe a conta do usuário"** (rascunho e9.3): falha no teste de especificidade — serve a qualquer IA local (tema 16). Deixou a categoria ecológica vazia.
- **"Surge a profissão de artista técnico de web"**: proibido pela skill sem ator e mecanismo; reescrito como e8.1 (o que o artista passa a escrever, e por quê).
- **"Cursos de design reorganizam o currículo em torno de WebGPU"**: genérico; cortado. O efeito sobre formação ficou em e11.2 com mecanismo (o fork de exemplo no navegador).
- **"Governos criam lei de XR"**: genérico; substituído por e3.1.1 com ator e mecanismo.

### 12.5 Caminhos abandonados

- **Raiz 5 candidata: "a web como plataforma de compute distribuído"** (sites emprestando a GPU do visitante para inferência de terceiros — apareceu na busca como "AI Grid"). Abandonada: não é 3D nem XR; é tema 16, e o único artefato é uma vitrine não aberta.
- **Raiz candidata "streaming volumétrico no navegador"**: é captura (tema 10) mais transmissão; entrou só como e12.1.
- **Separar "celular" e "óculos" em raízes diferentes da Raiz 1**: descartado; o mecanismo (link contra loja) é o mesmo, e a diferença está nos ramos e3 e e4.

### 12.6 Números vistos e não usados

- "WebGPU em todo navegador principal desde meados de 2026, Chrome 113+" — de um resumo de busca, não de página aberta.
- "WebXR ships natively in Chrome 79+, Edge 79+, Opera 66+, Samsung Internet 12+" — de resumo de busca de site de divulgação; plausível, não aberto.
- Poki "100+ milhões de usuários mensais" — estava na rodada 2041; o extrato aberto agora não mostrou o número. Retirado.

### 12.7 Saída do verificador

(colada abaixo, sem edição)

```
$ python3 references/verificar.py tendencia-o-navegador-como-console-3d-e-xr-sem-instalacao.md --links   # 22/09/2026
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 20 (frontmatter diz 20)
efeitos ordem 3: 20 (frontmatter diz 20)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 2 · media 8 · baixa 2
confiança ordem 2: alta 1 · media 11 · baixa 8
confiança ordem 3: alta 0 · media 0 · baixa 20
links da seção 11: 42/42 respondem (frontmatter diz fontes: 42)
RESULTADO: ok
```
