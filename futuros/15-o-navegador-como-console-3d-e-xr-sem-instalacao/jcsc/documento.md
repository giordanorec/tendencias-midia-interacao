---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: jcsc
zona_de_interesse: Criação e plataforma
data: 2026-09-12
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 10
efeitos_ordem_2: 20
efeitos_ordem_3: 26
tecnologias_citadas: [WebGPU, WebXR, WGSL, WebGPU compute, WebNN, WebGL 2, WebAssembly, three.js, WebGPURenderer, PlayCanvas Engine, SuperSplat, Streamed SOG, Babylon.js, A-Frame, model-viewer, "elemento <model>", glTF, USDZ, Unity 6, transformers.js, ONNX Runtime Web, WebLLM, MLC-LLM, Progressive Web App, Bubblewrap, Trusted Web Activity, Digital Goods API, Android XR, Meta Horizon OS, visionOS, Safari 26.2, Safari 27 beta, gaussian splatting]
fontes: 26
confianca: media
experimento: "Mesmo link, três portas — uma URL que negocia WebGPU, WebXR e 3D declarativo e registra qual porta cada aparelho da turma consegue abrir"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

O navegador deixou de ser um lugar onde o 3D é possível e passou a ser um lugar onde o 3D é o
padrão: WebGPU está em Chrome, Edge, Firefox e Safari, com cobertura global de 87% segundo o
caniuse, e o renderizador de gaussianos do PlayCanvas Engine 2.19.0 mostra 5,7× de ganho sobre
WebGL 2 em cena de 35 milhões de primitivas. A leitura fácil disso é "o que era app vira link".
Este mapa argumenta que a leitura fácil está errada em dois pontos verificáveis. Primeiro, a
porta de bolso está fechada: o WebXR não existe no Safari do iPhone e do iPad em nenhuma versão,
e a sessão `immersive-ar` está desligada e não-funcional também no visionOS — confirmado por
engenheiro da Apple no fórum de desenvolvedores. Segundo, a Apple está construindo a rota
concorrente, declarativa e sob seu controle: o elemento `<model>`, que no Safari 27 beta sai do
visionOS para iOS, iPadOS e macOS. Some-se a isso que o WebXR foi proposto como área de foco do
Interop 2026 e **não** foi selecionado entre as vinte escolhidas. O futuro que este mapa desenha
para 2031, então, não é a web engolindo a loja de aplicativos: é a troca de um gargalo
(aprovação editorial da loja) por três outros — a GPU de quem assiste, a permissão de sensor
concedida pelo fabricante do óculos, e a aquisição de tráfego. O que era taxa de 30% vira preço
de serviço; o que era "sem instalação" vira instalação transferida para o cache.

## 2. O tema

O objeto aqui é estreito e vale delimitá-lo antes de qualquer coisa: **a web como plataforma de
execução de 3D e XR**. Não é "captura de 3D" (tema 10 da disciplina), não é "IA local no
dispositivo" em geral (tema 16 — aqui entra só a parte que roda pela mesma porta do navegador,
e entra como sinal, não como assunto). É a pergunta de plataforma: quando a experiência
tridimensional e imersiva executa dentro de uma aba, o que muda para quem projeta mídia e
interação?

Ele encosta em mídia e interação em três frentes ao mesmo tempo. Na **distribuição**: se uma
experiência imersiva é um endereço, o ato de publicar muda de natureza — não há binário, não há
revisão, não há versão aprovada. Na **materialidade do meio**: o que se pode fazer numa cena
passa a depender do que o navegador expõe da GPU, e o shader escrito em WGSL passa a ser
artefato de autoria, não só de engenharia. E na **política do acesso**: a GPU do espectador vira
parte da obra, o que reintroduz na web uma categoria que ela havia abandonado — o requisito
mínimo de hardware.

Por que isso merece mapa de futuro e não levantamento de estado da arte: porque o estado da arte
já está resolvido e é chato de descrever — WebGPU embarcou, os motores adotaram, funciona. O que
está aberto é a **estrutura de poder** que sobra depois. Quatro atores disputam o mesmo ponto
(o fabricante do sistema do óculos, o dono do navegador, o dono da loja e o autor), e os quatro
já fizeram jogadas públicas e contraditórias entre si em 2025 e 2026. Um levantamento de estado
da arte registra as jogadas. Um mapa de futuro pergunta o que elas produzem quando se compõem —
e é aí que aparecem os efeitos que ninguém está olhando, como a moderação de conteúdo imersivo
subindo do nível da loja para o nível do navegador e do DNS.

### A entrevista (Etapa 1 da skill), registrada como aconteceu

A skill proíbe gerar conteúdo antes da entrevista e manda registrar explicitamente o que o
usuário não respondeu, em vez de assumir padrão em silêncio. **Registro honesto da condição
desta rodada:** não havia interlocutor humano disponível. As cinco respostas foram fornecidas
por antecipação no briefing da rodada, e não houve possibilidade de pergunta de esclarecimento
de volta — o que é uma limitação real desta execução e não uma dispensa da etapa.

| Pergunta da Etapa 1 | Resposta recebida |
|---|---|
| 1. Horizonte temporal | **2031** |
| 2. Público-alvo | **Quem projeta mídia e interação** |
| 3. Recorte geográfico | **Global, com uma nota sobre o Brasil** |
| 4. Descartes explícitos | **O que já é comum em produto de massa** (a régua da disciplina). Também: ideias óbvias que serviriam para qualquer tema. Nenhuma outra exclusão. |
| 5. Viés desejado | **Neutro** |

Parâmetros adicionais declarados no briefing, fora das cinco perguntas: profundidade de três
ordens; modo "a partir de uma inovação/tema", não a partir de um setor; nenhuma disrupção
suspeita indicada de antemão ("descubra"); zona de interesse do autor "Criação e plataforma".

O briefing também declarou o critério de falseamento do próprio pedido — **o que faria mudar de
ideia**: evidência de que a adoção já passou da maioria inicial de Rogers, ou de que a
tecnologia não rompe nada e só melhora o que existe. Esse critério foi aplicado de forma
consequente e mudou o mapa: ele é a razão pela qual WebGL 2, motor exportando para web e glTF
foram recusados como disrupção (seção 4), e é a razão pela qual a primeira disrupção aceita
passou por rebaixamento de confiança na seção 7. A cobertura de 87% do WebGPU é,
honestamente, um dado que **empurra o tema para fora da janela do emergente** — e o mapa diz
isso em vez de esconder.

O recorte geográfico é global com nota sobre o Brasil, e a nota não é decorativa: o efeito
`e8.1.1` da roda existe porque a TIC Domicílios 2025 mostra que 65% dos usuários brasileiros
acessam a internet exclusivamente pelo celular, proporção que sobe para 87% nas classes DE. Um
mapa desta tendência escrito só com dados de parque de aparelhos do hemisfério norte chegaria
a conclusões diferentes — e erradas para o público desta disciplina.

## 3. Onde isso está hoje

### A camada gráfica embarcou, com asterisco

O WebGPU não está mais "chegando". A tabela de status de implementação mantida pelo próprio
grupo GPU for the Web registra, em setembro de 2026: Chromium (Chrome/Edge) em macOS, Windows
x86/x64 e ChromeOS desde a versão 113; Android desde a 121 para GPUs ARM, Qualcomm e Intel em
Android 12+, e desde a 139 para Imagination em Android 16+; Firefox no Windows desde a 141
(julho de 2025), no macOS Apple Silicon desde a 145 e em todas as versões de macOS desde a 147;
Safari na versão 26, habilitado por padrão em macOS, iOS, iPadOS e visionOS. O caniuse soma
85,72% + 1,63% = **87,35%** de cobertura global [2].

O asterisco importa mais do que o número. A mesma tabela mostra o Linux entrando por GPU:
Intel Gen12+ a partir do Chrome 144, NVIDIA com Wayland e driver 535.183.01+ a partir do 147,
o resto atrás de flag. Windows ARM64 exige `--enable-unsafe-webgpu`. Samsung Xclipse é
esperado por volta da versão 154. Firefox no Android segue atrás de flag, com trabalho previsto
para 2026 [1]. Ou seja: a matriz de compatibilidade da mídia interativa parou de ser uma linha
por navegador e virou uma linha por **fornecedor de GPU e versão de driver** — um regime que a
web não conhecia e o console conhece bem.

### Os motores já mudaram o padrão, não só a opção

O `WebGPURenderer` do three.js usa o backend WebGPU por padrão e cai para WebGL 2 quando o
navegador não suporta — comportamento relatado de forma consistente pela documentação de
migração, embora a página de manual específica que tentei abrir tenha retornado 404 (registro
em 8 e 11). O PlayCanvas foi mais longe e publicou número: a versão **2.19.0 do engine, em 3 de
junho de 2026**, trouxe um renderizador de gaussianos baseado em compute shader, e a medição
publicada no blog compara WebGPU contra WebGL 2 no mesmo aparelho — em um M4 Max, 138,7 contra
137,2 fps com 1 milhão de gaussianos (empate), 124,1 contra 48,1 com 10 milhões (2,6×), e 75,8
contra 13,3 com 35 milhões (**5,7×**). Num iPhone 13 Pro Max, 77,6 contra 38,1 fps com 1 milhão
(2×) e 42,4 contra 20,4 com 4 milhões. O mesmo texto declara que "o WebGPU está agora disponível
para aproximadamente 85% dos usuários finais" e que o SuperSplat cai automaticamente para o
renderizador WebGL 2 para o resto, com saída visual idêntica [13].

O dado escondido nesse conjunto é o primeiro: **em 1 milhão de gaussianos, WebGPU e WebGL 2
empatam**. O ganho só aparece quando a cena é grande o bastante para saturar o caminho antigo.
Isso significa que a disrupção não é "o 3D na web ficou rápido" — é "o teto de complexidade da
cena subiu uma ordem de grandeza, e com ele o custo de produzir a cena".

### A camada imersiva não embarcou — e a fratura é geográfica de plataforma, não de país

O caniuse registra o WebXR Device API em 77,15% de cobertura, toda ela como *partial support*:
Chrome e Edge desde a 79, Opera desde a 66. Firefox: não suportado. Safari no iOS: **não
suportado em nenhuma versão, da 3.2 à 26.6**. Safari no macOS: desabilitado por padrão da 13 em
diante [3].

No Android XR o quadro é o oposto e é generoso: o Chrome do Android XR implementa Device API,
**módulo AR**, gamepads, hit test, entrada por mão, âncoras, sensoriamento de profundidade e
estimativa de luz — a documentação do Google recomenda tratar a entrada por mão como mecanismo
primário e exige permissões de mapeamento 3D e rastreamento de câmera [10].

No lado da Apple, o que existe é menos e é deliberado. O Safari 26.2 no visionOS passou a
permitir WebXR com WebGPU: "Agora, com o Safari 26.2 no visionOS, o WebXR suporta WebGPU. Isso
significa que você pode construir experiências em WebXR com todo o poder do WebGPU" [7]. Mas a
sessão `immersive-ar` continua fora. A resposta de um engenheiro da Apple no fórum de
desenvolvedores é explícita: sessões WebXR `immersive-ar` "não são suportadas no visionOS ou
iOS", o recurso "não está em estado testável", e "mesmo que a flag esteja lá, ela é
não-funcional neste momento" [21].

### A rota concorrente: o navegador assumindo a renderização

Enquanto o WebXR não avança nas plataformas da Apple, a Apple avança numa alternativa que ela
controla. O `<model>` — elemento HTML que embute uma cena 3D como `<img>` embute uma imagem —
estreou no visionOS e, no **Safari 27 beta anunciado na WWDC26**, passa a estar disponível em
iOS, iPadOS e macOS, com atributo `dynamic-range-limit` para controle de HDR em conteúdo 3D. O
mesmo anúncio traz ambientes imersivos de site inteiro via `<model>` e uma API JavaScript
parecida com a de tela cheia, e controles interativos para fotos espaciais e panorâmicas em
`<img>`. Os casos de uso citados são comércio: prévia de assento em bilheteria virtual, visita a
quarto de hotel. Sobre WebXR, o mesmo documento traz uma única linha, e é uma correção de bug —
"corrigido um problema em que viewports de WebXR não recebiam valor inicial até `getViewport()`
ser chamado" [8].

A especificação do `<model>` é publicada pelo Immersive Web Community Group e a página que abri
declara apenas "This is a work in progress" [9]. É um elemento embarcado em produto antes de
ser padrão — o padrão de comportamento que a web já viveu com `<canvas>` e com vídeo.

### A governança olhou e desviou

O sinal mais desconfortável para a tese entusiasta deste tema está no processo, não na
tecnologia. O WebXR Device API foi **proposto** como área de foco do Interop 2026 (issue #1021
do repositório web-platform-tests/interop, com o rótulo `focus-area-proposal`) [6]. A lista
final, publicada no anúncio oficial e no README do repositório, tem vinte áreas de foco —
posicionamento por âncora, consultas de estilo de contêiner, diálogos e popovers, animações
guiadas por rolagem, transições de view, `attr()`, `contrast-color()`, destaques customizados,
uploads e ranges no fetch, IndexedDB, JSPI para Wasm, pseudoclasses de mídia, Navigation API,
registros de custom element com escopo, scroll snap, `shape()`, compatibilidade web, WebRTC,
WebTransport e `zoom` — e **nem WebXR nem WebGPU estão nela** [4][5]. Os cinco fornecedores que
decidem o Interop olharam para o WebXR em 2026 e escolheram outras vinte coisas.

### A porta da loja: absorvida, não derrubada

A previsão simples ("a experiência imersiva é um link, logo a loja morre") tem contraevidência
direta, e ela vem da própria Meta. Desde o Connect 2024 o WebXR empacotado como PWA é
distribuível na Meta Horizon Store via Bubblewrap, a ferramenta do Google que embala um PWA num
Android App Bundle servido por Trusted Web Activity; a documentação da Meta distingue modo `2D`
(site em janela, inclusive 3D em tela) de modo `immersive` (o pacote abre direto numa sessão
WebXR), e afirma que o empacotamento "é uma opção de distribuição, não uma categoria de
conteúdo separada" — o app web continua disponível pelo próprio site [11]. Em junho de 2025, a
Meta passou a permitir que esses PWAs de WebXR usem **pagamento dentro do app** pela Digital
Goods API, um padrão web para PWA integrar com loja de aplicativos [12].

Ler isso como vitória da web é um erro de sinal. O movimento é a loja **absorvendo** a web como
formato de empacotamento, não a web escapando da loja. E a mesma reportagem registra o que os
desenvolvedores de fato queriam e não receberam: monetizar na web aberta, coisa que o navegador
da Meta ainda não suporta, ao contrário do Apple Pay no Vision Pro e do Google Pay no Chrome [12].

Do lado do dinheiro, o que mudou de verdade em 2026 foi regulatório e é mensurável. A página de
ajuda do Google Play, para desenvolvedores em EEA, Reino Unido e Estados Unidos a partir de 30
de junho de 2026, publica taxa de serviço de 10% + 5% de cobrança para instalações novas, 20% a
25% + 5% para transações em instalações existentes, e **15% a 20% para links web externos** [20].
A taxa de 30% como número único deixou de existir nessas jurisdições. Fora delas, em boa parte
continua valendo. (Tentei confirmar as taxas equivalentes da Apple na página de suporte do
direito de compra externa nos EUA; a página não as declara — registro em 8 e 11, e por isso
nenhum número da Apple entra neste mapa.)

### O navegador como runtime de modelo

A quarta frente é a que o tema chama de cruzamento: a mesma porta que dá GPU ao gráfico dá GPU
ao modelo. O artigo do WebLLM publica a comparação com nativo no mesmo aparelho — Llama-3.1-8B
em 4 bits a **41,1 tokens/s no navegador contra 57,7 no MLC-LLM nativo** (71,2% retidos), e
Phi-3.5-mini a 71,1 contra 89,3 (79,6% retidos), num MacBook Pro M3 Max sob Chrome Canary
133 — e nomeia a limitação de fundo: o WebGPU "não tem bibliotecas de GPU aceleradas para
kernels comuns", o que obriga a gerar kernels próprios por compilação [15]. O transformers.js,
que roda sobre ONNX Runtime, mantém no README o aviso de que a API WebGPU "ainda é experimental
em muitos navegadores", pedindo relatório de bug — e a tagline "rode Transformers direto no seu
navegador, sem precisar de servidor" [14]. Do lado da norma, o W3C publicou em **22 de janeiro
de 2026** uma Candidate Recommendation atualizada da WebNN, pelo Web Machine Learning Working
Group [17].

Os dois números do WebLLM dizem coisas opostas e as duas importam: 71% a 80% do nativo é bom
o bastante para valer a pena, e um M3 Max é o aparelho de quase ninguém.

### O custo escondido: superfície de ataque

Expor GPU à página tem preço de segurança, e ele está documentado em literatura revisada. O
WebGPU-SPY, de Ethan Ferguson, Adam Wilson e Hoda Naghibijouybari, demonstra ataque de canal
lateral em cache de GPU a partir da pilha de compute espionando atividade na pilha de
renderização, e reporta **precisão de 90% na identificação de site** num conjunto de 100 sites
populares, em GPUs Intel integradas [16].

### O mercado que já vive disso

Para não tratar o tema como especulação de laboratório: a imprensa setorial registra o mercado
de jogo de navegador projetado de US$ 19,28 bilhões em 2026 para US$ 28,44 bilhões em 2032,
lançamentos HTML5 quase triplicando ano a ano no primeiro semestre de 2025 para cerca de 15 mil
títulos, Poki com 100 milhões de usuários ativos mensais (contra 10 milhões em 2020) e 122,5
milhões de visitas mensais, CrazyGames com 61,1 milhões, Unity respondendo por 55% dos
lançamentos do segundo trimestre de 2025 em parte pela adoção de WebGPU no Unity 6, e 46% dos
desenvolvedores citando o jogo web como resposta ao problema de descobribilidade [19].

Esse último número é o que interessa mais e é o mais contraintuitivo: o motivo declarado para ir
para a web **não** é fugir da taxa — é ser encontrado. O que sugere que o gargalo real nunca foi
a aprovação da loja.

### Nota sobre o Brasil

A TIC Domicílios 2025, do Cetic.br, registra 157 milhões de usuários de internet no país (163
milhões, 88%, na definição ampliada) e, o dado que muda este mapa: **65% acessam a internet
exclusivamente pelo telefone celular**, cinco pontos percentuais acima de 2024. A desagregação
por classe é brutal — 87% na classe DE contra 5% na classe A, e computador em casa em 97% dos
lares da classe A contra 10% na DE; fibra ou cabo em 95% dos domicílios A, 75% nos C e 60% nos
DE [18].

Cruzando com o que está acima: a rota "3D e IA pesados no navegador" pressupõe GPU e memória
que o aparelho de entrada não tem, e pressupõe download grande que o plano de dados não
comporta. O parque brasileiro majoritário é, além disso, um parque de **celular** — exatamente o
formato onde o WebXR mais falta, seja por ausência no iOS, seja por WebGPU atrás de flag no
Firefox Android.

## 4. As disrupções-raiz

### O que foi recusado, e por quê

A Etapa 2 da skill exige aplicar um critério explícito de recusa por maturidade — tratar como
presente, não futuro, o que já é padrão de mercado consolidado e não tem debate técnico real e
atual sobre substituição no horizonte — e exige **documentar o que foi cogitado e descartado**,
como prova de que o critério foi aplicado e não só citado. Nove candidatos foram levantados e
cinco foram recusados:

| Candidato cogitado | Veredito | Motivo |
|---|---|---|
| **WebGL / WebGL 2 como alvo 3D da web** | recusado — maduro | Baseline desde 2017, adotado por todos os motores. Não há debate sobre substituí-lo: ele é o *fallback* que todo mundo continua embarcando, inclusive o SuperSplat [13] e o three.js. Tecnologia que sobrevive como plano B não é futuro. |
| **Motor (Unity, Unreal) exportando para web** | recusado — maduro | Prática consolidada há uma década; Unity respondeu por 55% dos lançamentos web do 2T2025 [19]. O que é novo ali é o WebGPU por baixo — e esse é o candidato 1, aceito. Exportar para web, em si, é melhoria, não ruptura. |
| **glTF como formato de intercâmbio 3D** | recusado — maduro | Padrão Khronos universalmente adotado. *Ressalva registrada:* o `<model>` da Apple reabre a disputa com USDZ, e por isso a disputa de formato voltou ao mapa como efeito `e10.2`, não como disrupção. |
| **`<model-viewer>` e AR Quick Look** | recusado — maduro | Em produção em comércio eletrônico desde 2019. É o estado presente do 3D em página comum, não a ruptura dele. |
| **Aplicativo nativo de VR em loja** | recusado — é o incumbente | É o Horizonte 1 do enquadramento de Sharpe: o sistema dominante cuja adequação declina. Não é candidato a disrupção; é o que as disrupções deslocam. |
| **PWA instalável** | recusado — maduro, com fatia aceita | Padrão desde 2018. A parte emergente é estreita e específica: PWA como **formato de empacotamento de loja de XR**, com pagamento por Digital Goods API [11][12]. Entrou como efeito `e4.1`, não como raiz. |
| **WebAssembly** | recusado — maduro | Baseline desde 2017. Habilitador, não ruptura. |

Restaram quatro. Cada uma abaixo responde às três perguntas do formato: o que rompe, por que
agora e não há cinco anos, e o que ainda falta acontecer.

### D1 — WebGPU como alvo primário de renderização, não como fallback invertido

**O que rompe.** Rompe o teto de complexidade da cena que a web podia executar, e com ele a
relação entre *onde a mídia interativa é produzida* e *onde ela é consumida*. Enquanto o
navegador era um alvo degradado, o 3D na web era a versão reduzida de algo feito para outro
lugar; havia sempre um "de verdade" em outra plataforma. Com compute shader e acesso explícito
a recurso de GPU, o pipeline deixa de ser reduzido: o mesmo caminho de renderização que roda no
nativo roda na aba. O que rompe, então, não é a performance — é a hierarquia entre plataforma
principal e plataforma secundária.

**Por que agora e não há cinco anos.** Em 2021 o WebGPU era especificação em rascunho, sem
implementação embarcada. Hoje está em todos os quatro motores de navegador principais, com 87%
de cobertura no caniuse [1][2], e o ganho é medido e publicado: 5,7× sobre WebGL 2 em 35 milhões
de gaussianos [13]. E há o gesto de compromisso dos motores 3D — o `WebGPURenderer` do three.js
tenta WebGPU **por padrão** e só depois cai para WebGL 2; o padrão inverteu de lado.

**O que ainda falta acontecer.** Falta o Linux sair do regime por-GPU e o Firefox Android sair
da flag [1]. Falta uma resposta para o fato de que, em cena pequena, WebGPU e WebGL 2 empatam
[13] — ou seja, falta a disrupção valer a pena para a maioria dos projetos, não só para os
grandes. E falta o parque de aparelhos de entrada, onde o fallback é permanente.

### D2 — WebXR como cidadão de primeira classe do sistema do óculos: a experiência imersiva como URL

**O que rompe.** Rompe o monopólio da loja como porta de entrada da experiência imersiva, e
rompe a ideia de que uma obra imersiva é um artefato instalado. Se a sessão imersiva se abre a
partir de um endereço, o ato de publicar deixa de passar por aprovação, o ato de atualizar deixa
de passar por revisão, e o ato de experimentar deixa de exigir decisão de compra ou de espaço em
disco. Isso muda a forma da obra, não só o canal: um link tolera experimento de dois minutos que
uma instalação não tolera.

**Por que agora e não há cinco anos.** Porque o hardware passou a tratar a web como cidadã de
verdade, e há três gestos concretos. O Chrome do Android XR implementa o conjunto quase
completo — módulo AR, mão, âncoras, profundidade, estimativa de luz [10]. O Safari do visionOS
26.2 passou a permitir WebXR **com WebGPU**, o que significa sessão imersiva com pipeline
moderno e não com o antigo [7]. E a Meta permite empacotar WebXR como PWA na sua loja, com
pagamento integrado [11][12].

**O que ainda falta acontecer.** Falta muito, e é aqui que este mapa se separa da leitura
otimista. Falta o WebXR existir no iPhone e no iPad — hoje não existe em nenhuma versão do
Safari do iOS [3]. Falta `immersive-ar` sair do estado não-funcional nas plataformas da Apple,
onde a flag existe e não faz nada [21]. E falta o processo de governança tratar isso como
prioridade: proposto para o Interop 2026, o WebXR não entrou nas vinte áreas escolhidas [4][5][6].

### D3 — O navegador como runtime de inferência: a mesma porta para gráfico e para modelo

**O que rompe.** Rompe a arquitetura econômica da mídia com IA. Quando o modelo roda no
servidor, publicar experiência interativa com IA tem custo variável por espectador, e quem
publica paga por atenção recebida — o que inverte a economia de mídia e exclui quem não tem
caixa. Quando o modelo roda na aba, o custo variável vai a zero para quem publica e migra para
o aparelho de quem assiste. Rompe também o pressuposto de que interação com IA exige rede:
sem requisição, não há latência de rede, não há indisponibilidade e não há dado saindo do
aparelho.

**Por que agora e não há cinco anos.** Porque o compute shader do WebGPU tornou a inferência
viável em ordem de grandeza utilizável — o WebLLM retém 71% a 80% da velocidade nativa em
modelo de 8 bilhões de parâmetros [15] — e porque há trilha de norma sendo construída para
isso, com a WebNN em Candidate Recommendation atualizada em janeiro de 2026 [17]. Em 2021 a
alternativa era WebAssembly em CPU, uma ordem de grandeza abaixo.

**O que ainda falta acontecer.** Falta o transformers.js deixar de marcar WebGPU como
experimental [14]. Falta resposta para o download: um modelo utilizável são centenas de
megabytes a gigabytes, e a primeira visita passa a custar o que uma instalação custava. Falta,
sobretudo, um número honesto para aparelho mediano — os 41 tokens/s do WebLLM são de um M3 Max
[15], e não há medição pública comparável para o celular de entrada que é a maioria do parque
brasileiro [18].

### D4 — 3D declarativo: o navegador assume a renderização

**O que rompe.** Rompe quem escreve o renderizador. Nas três disrupções anteriores, a cena é
desenhada por código do autor — motor, shader, loop de renderização. No 3D declarativo, o autor
entrega um ativo e uma tag, e **o navegador** decide como iluminar, compor e apresentar. Isso é
exatamente o que aconteceu com vídeo: o Flash entregava o player, o `<video>` entregou o
arquivo e o controle foi para o navegador. A consequência é dupla e vale nas duas direções — o
3D passa a caber em página comum, escrita por quem nunca abriria um motor; e o resultado visual
deixa de ser do autor.

**Por que agora e não há cinco anos.** Porque saiu de proposta para produto multiplataforma em
um ciclo: o `<model>`, que era do visionOS, está no Safari 27 beta para iOS, iPadOS e macOS, com
ambientes imersivos de site inteiro e API JavaScript própria [8]. E porque o gesto tem direção
estratégica legível: a mesma empresa que não implementa `immersive-ar` no WebXR [21] embarca a
rota declarativa que ela controla.

**O que ainda falta acontecer.** Falta padronização: a especificação é publicação do Immersive
Web Community Group e a página declara ser trabalho em progresso [9] — elemento embarcado antes
de ser padrão. Falta resolver renderização consistente entre implementações, problema já
levantado na comunidade. Falta decidir o formato do ativo, com USDZ e glTF de volta à disputa.
E falta a segunda implementação: enquanto for um só fornecedor, é recurso de plataforma, não
capacidade da web.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "WebGPU como alvo primário de renderização, não como fallback invertido"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Motores 3D passam a publicar na web o mesmo pipeline que publicam no nativo, e o port para web deixa de ser uma versão reduzida"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Cena de milhões de primitivas passa a ser servida em streaming com orçamento por dispositivo, em vez de baixada inteira"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O peso de um projeto de mídia migra de tamanho de arquivo para orçamento de GPU por sessão, e alguém passa a ter o ofício de dimensionar esse orçamento"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "O ativo 3D passa a ser servido em vez de entregue, e a posse prática da obra migra para quem hospeda"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O shader escrito em WGSL vira artefato de autoria de mídia, e não só de engenharia gráfica"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Formação em design de interação incorpora programação de GPU como alfabetização, ao lado de CSS"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A compatibilidade de mídia interativa deixa de ser uma linha por navegador e passa a ser uma linha por GPU e por versão de driver"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O teste de experiência imersiva volta a exigir parque de aparelhos físicos, encarecendo justamente o que a web havia barateado"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Surge certificação de compatibilidade por modelo de GPU, análoga ao selo de compatibilidade de console"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Todo projeto sério mantém dois renderizadores simultâneos, o moderno e o fallback, e o custo de manutenção do meio dobra"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O fallback se torna permanente nos mercados de aparelho de entrada, e a web imersiva se estratifica por hardware em vez de por conexão"
                sinal: medio
                prazo: 2031
                confianca: media
      - id: e3
        ordem: 1
        efeito: "A GPU exposta à página amplia ao mesmo tempo a superfície de ataque e a de identificação do aparelho"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Navegadores passam a mediar o acesso à GPU com permissão explícita ou degradação, como já fazem com câmera e microfone"
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Parte das experiências 3D perde o clique-e-funciona que era o argumento central do meio"
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Modo de navegação anti-impressão-digital degrada 3D e inferência local, criando duas classes de web imersiva por escolha de privacidade"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Projeto de mídia passa a ser avaliado por como se comporta degradado, e não apenas no melhor caso de hardware"
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "WebXR como cidadão de primeira classe do sistema do óculos: a experiência imersiva como URL"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Distribuir experiência imersiva passa a ter duas rotas simultâneas, o link aberto e o pacote de loja, e o autor escolhe caso a caso"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A loja deixa de ser porta de entrada obrigatória e passa a ser canal comprado de pagamento, descoberta e confiança"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A taxa de plataforma se desloca de imposto sobre distribuição para preço de serviço, e cai onde existe alternativa legal disponível"
                sinal: medio
                prazo: 2030
                confianca: media
              - id: e4.1.2
                ordem: 3
                efeito: "O gargalo do criador migra de aprovação editorial para aquisição de tráfego, e o portal de jogo web ocupa o lugar que era da loja"
                sinal: forte
                prazo: 2030
                confianca: media
          - id: e4.2
            ordem: 2
            efeito: "Curadoria de plataforma perde o poder de barrar e mantém o poder de não recomendar"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Conteúdo imersivo que a loja não aceitaria reaparece pela web, e a moderação sobe do nível da loja para o do navegador, da rede e do DNS"
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O fabricante do óculos passa a governar o que se pode ver pelo navegador, via permissão de sensor e recurso desligado, em vez de pela loja"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O que uma experiência imersiva pode fazer passa a variar por fabricante de hardware, como variava por navegador em 2010"
            sinal: forte
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Consolida-se um subconjunto seguro de WebXR que todos implementam, e o resto da capacidade fica reservado ao aplicativo nativo"
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e5.2
            ordem: 2
            efeito: "O corpo vira dado sujeito a permissão, e o design de interação imersiva passa a ser desenhado a partir da negativa do sensor"
            sinal: forte
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Interação por olhar, mão e profundidade precisa ter equivalente sem sensor, e isso restringe a gramática expressiva do meio"
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A ausência de WebXR no iPhone e no iPad mantém o maior parque de bolso fora da rota do link durante todo o horizonte"
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Projeto de mídia imersiva nasce em duas versões desde o briefing, a imersiva no óculos e a planar ou declarativa no telefone"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O custo de autoria imersiva não cai com a chegada da web, porque duas rotas incompatíveis têm de ser mantidas em paralelo"
                sinal: forte
                prazo: 2031
                confianca: media
          - id: e6.2
            ordem: 2
            efeito: "A base instalada de XR na web se concentra em Android e Quest, e o repertório estético do meio se forma a partir dessa base"
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O que se vier a chamar de linguagem da web imersiva será a linguagem de um parque minoritário, apresentada como universal"
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "O navegador como runtime de inferência: a mesma porta para o gráfico e para o modelo"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "A aba passa a ser o lugar onde o modelo roda, e não apenas onde a resposta do servidor aparece"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Experiência interativa com IA passa a funcionar sem rede e sem custo por uso para quem publica"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Mídia com IA deixa de ter custo variável por espectador, o que muda quem consegue publicar em escala"
                sinal: medio
                prazo: 2030
                confianca: media
              - id: e7.1.2
                ordem: 3
                efeito: "A alegação de que nada sai do aparelho vira argumento de produto verificável, e aparece quem se dedique a auditá-la"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "O download inicial da experiência cresce de megabytes para gigabytes, e o tempo até o primeiro quadro volta a ser o problema central do meio"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "A primeira visita passa a ser tratada como instalação disfarçada, e a expressão sem instalação perde precisão descritiva"
                sinal: medio
                prazo: 2030
                confianca: media
              - id: e7.2.2
                ordem: 3
                efeito: "Cache e persistência local entram no escopo do design de mídia, e não apenas no da engenharia"
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "A qualidade da experiência passa a depender da GPU de quem assiste, e não da infraestrutura de quem publica"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A desigualdade de acesso deixa de ser apenas ter internet e passa a incluir ter GPU e memória suficientes"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "No Brasil, onde a maioria acessa só por celular de entrada, a rota do modelo no navegador chega depois da rota do modelo no servidor, invertendo a promessa de democratização"
                sinal: forte
                prazo: 2030
                confianca: media
              - id: e8.1.2
                ordem: 3
                efeito: "Política pública de inclusão digital passa a ter de falar de capacidade de processamento do aparelho, e não só de banda disponível"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "O projeto de mídia passa a declarar requisito de hardware, como fazia o jogo vendido em caixa"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "A web recupera uma prática que havia abandonado, o requisito mínimo, e com ela recupera a exclusão explícita de público"
                sinal: medio
                prazo: 2031
                confianca: baixa

  - disrupcao: "3D declarativo: o navegador assume a renderização da cena"
    efeitos:
      - id: e9
        ordem: 1
        efeito: "Publicar 3D na web deixa de exigir motor e passa a caber numa tag, como aconteceu com vídeo"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "O 3D entra em página comum, de comércio, notícia e documentação, por autores que nunca escreveriam WebGL"
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "O volume de 3D publicado na web cresce por fora do circuito de quem faz 3D hoje, e o campo perde o controle sobre o próprio repertório"
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e9.1.2
                ordem: 3
                efeito: "Acessibilidade de cena tridimensional passa a ser responsabilidade do navegador, e surge pela primeira vez um caminho de leitor de tela para 3D"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "O repertório visual do 3D na web se padroniza no que a tag permite, e a variação estética do meio cai"
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "Quem vende experiência de marca volta ao motor próprio, e as duas rotas passam a conviver em vez de uma vencer"
                sinal: medio
                prazo: 2031
                confianca: media
      - id: e10
        ordem: 1
        efeito: "O controle do resultado visual migra do autor para o fabricante do navegador, que decide como a cena é iluminada e composta"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "A disputa por renderização idêntica entre implementações reaparece, como nos primeiros anos de CSS"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Surge teste de conformidade visual para 3D, e alguém tem de decidir qual renderização é a correta"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "O formato do ativo volta a ser disputa de plataforma depois de uma década de convergência em glTF"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: "Pipelines de produção passam a manter dois masters 3D, e o custo de autoria sobe exatamente onde a promessa era baixá-lo"
                sinal: medio
                prazo: 2031
                confianca: media
```

### O que o bloco não consegue dizer

**A roda esconde as contradições entre ramos, e elas são o achado.** O bloco apresenta `e4`
("duas rotas simultâneas", que é a leitura otimista) e `e6` ("o parque de bolso fica fora") como
efeitos irmãos, de igual peso. Eles não são irmãos: `e6` é uma restrição que **condiciona** `e4`.
A rota do link só é rota de verdade onde o link abre sessão imersiva, e isso hoje exclui todo
iPhone e iPad [3]. Uma roda em árvore não representa "este efeito limita aquele"; precisaria de
aresta lateral.

**A mesma coisa acontece entre D2 e D4, e ali é ainda mais forte.** O 3D declarativo não é um
desdobramento paralelo do WebXR — é, em parte, o **substituto** que um dos fabricantes está
oferecendo em lugar dele. Os efeitos `e9` e `e10` são, em boa medida, o que acontece *se* `e5` e
`e6` vencerem. O formato em árvore força a apresentá-los como independentes.

**As datas de terceira ordem estão comprimidas contra o teto, e isso é artefato do horizonte
pedido.** Vinte e um dos vinte e seis efeitos de terceira ordem estão datados em 2031, o último
ano do horizonte. Isso não significa que 2031 seja o ano provável deles; significa que o horizonte
fechou ali. Três deles — `e5.1.1` (a consolidação de um subconjunto seguro de WebXR), `e9.2.1`
(o retorno ao motor próprio) e `e10.1.1` (o teste de conformidade visual para 3D) —
provavelmente só se consolidam **depois de 2031**, e estão registrados em 2031 apenas porque a
skill proíbe ultrapassar o horizonte pedido sem dizê-lo. Fica dito aqui, em prosa, como manda a
correção registrada em `DUVIDAS.md`.

**A cadeia continuaria, e o corte no terceiro nível é decisão de formato, não do método.** Glenn
nunca fixou profundidade na Futures Wheel; o limite de três níveis é engenharia de entrega. Dois
ramos deixam quarta ordem visível a olho nu e vale nomeá-los: de `e8.2.1` (a web recuperando o
requisito mínimo) sairia a repolitização da acessibilidade digital como direito de hardware, com
o litígio que vem com isso; e de `e4.2.1` (moderação subindo para navegador e DNS) sairia a
disputa sobre quem tem legitimidade para decidir o que uma pessoa pode ver dentro do próprio
campo de visão — que é a pergunta grande do tema e está a um salto de distância do que este
documento pode registrar.

**`confianca` não é probabilidade.** É a avaliação de quantos saltos causais e quantas premissas
não verificadas separam o efeito da evidência da seção 3. Nenhum número neste bloco veio de
modelo preditivo, e nenhum deveria ser lido como tal.

## 6. Sinais fracos e wildcards

### Sinais fracos — quase invisíveis hoje, decisivos se crescerem

**1. O Interop 2026 olhou para o WebXR e desviou.** Este é o sinal fraco mais importante do mapa
e é puro processo, não tecnologia: o WebXR Device API foi formalmente proposto como área de foco
do Interop 2026 e não entrou nas vinte selecionadas [4][5][6]. Interop é onde Apple, Google,
Igalia, Microsoft e Mozilla combinam no que vão gastar esforço de compatibilidade no ano. Ficar
de fora não é veto; é ausência de compromisso. Se em 2027 e 2028 o WebXR continuar fora, o
cenário indesejável da seção 9 deixa de ser cenário e passa a ser descrição.

**2. A Apple embarcando a rota que ela controla enquanto a padronizada não anda.** O `<model>`
sai do visionOS para iOS, iPadOS e macOS no Safari 27 beta, com ambientes imersivos e API
própria [8], no mesmo ciclo em que o WebXR recebe uma correção de bug de viewport e o
`immersive-ar` permanece não-funcional por decisão declarada [21]. Os dois fatos separados são
notícias de release; juntos, são estratégia.

**3. A Digital Goods API — a loja absorvendo a web, não o contrário.** Pagamento dentro do app
para PWA de WebXR na Meta Horizon Store [12], empacotado por Bubblewrap em Trusted Web Activity
[11]. O sinal é a direção: o que parece a web entrando na loja é a loja adquirindo a web como
formato de empacotamento — mantendo a posição de intermediário sem precisar mais exigir binário
nativo.

**4. A GPU virando recurso sob permissão.** Ainda é detalhe de API, e o WebGPU-SPY, com 90% de
precisão de identificação de site por canal lateral de cache de GPU [16], é a razão técnica pela
qual isso vai crescer. O dia em que um navegador pedir autorização para acesso à GPU como pede
para câmera, o "clique e funciona" — que é o argumento central deste tema — deixa de valer.

**5. A cena 3D como fluxo em vez de arquivo.** O Streamed SOG do SuperSplat decima a cena em
níveis de detalhe e serve pedaços, buscando o menor primeiro e refinando até o orçamento de
gaussianos daquele aparelho [13]. Hoje é otimização de carregamento. Se virar padrão, o ativo 3D
deixa de ter versão canônica entregável — e aí a pergunta de posse da obra (`e1.1.2`) sai do
campo da terceira ordem especulativa e entra no contrato.

**6. O motivo declarado de ir para a web é descoberta, não taxa.** 46% dos desenvolvedores citam
o jogo web como resposta ao problema de descobribilidade [19]. Se esse é o motivo real, então o
gargalo nunca foi a aprovação da loja, e metade da narrativa deste tema está mirando no alvo
errado.

### Wildcards — baixa probabilidade, impacto que reescreve o mapa

**W1 — Um fabricante de óculos desliga o WebXR por padrão, alegando privacidade de sensor.**
*(Probabilidade baixa; impacto: mata D2 inteira.)* Não é hipótese sem lastro: a Apple já mantém
`immersive-ar` como flag que existe e não funciona, e enquadra a decisão em termos de
preservação de privacidade [21]. Se um fabricante com base instalada relevante passar a exigir
concessão explícita por origem para abrir sessão imersiva, a experiência imersiva volta a ter
porteiro — só que o porteiro é o navegador do fabricante, e não há processo de apelação como há
numa revisão de loja. Sinal precoce a monitorar: a chegada de um *permission prompt* por origem
para `requestSession`.

**W2 — Uma cadeia de exploração de driver de GPU a partir de página web chega ao uso real, e os
navegadores colocam o WebGPU atrás de clique por um ano.** *(Probabilidade baixa; impacto: para
D1 e D3 ao mesmo tempo.)* A literatura já demonstra canal lateral funcional [16] e a fragilidade
de código de driver é documentada. Uma execução de código fora do sandbox pela pilha de GPU
produziria a reação que a web já teve com Java e Flash. Diferente dos outros wildcards, este
teria efeito **retroativo**: quebraria o que já está publicado.

**W3 — Regulador classifica o navegador do óculos como serviço essencial de plataforma e obriga
paridade de WebXR.** *(Probabilidade baixa; impacto: o inverso de W1 — confirma D2 e derruba
`e5` e `e6`.)* É o caminho pelo qual `e6` pode falhar: a mesma pressão regulatória que abriu
pagamento externo no Google Play em EEA, Reino Unido e Estados Unidos a partir de 30 de junho de
2026 [20] pode alcançar motor de navegador e paridade de API em hardware imersivo. Se o WebXR
chegar ao Safari do iOS por obrigação legal e não por escolha de produto, este mapa erra na
disrupção mais bem ancorada que tem.

**W4 — O 3D declarativo é padronizado com escape hatch para WebGPU, e as duas rotas se fundem.**
*(Probabilidade média-baixa; impacto: D1 e D4 deixam de ser concorrentes.)* Tecnicamente é o
desfecho mais elegante: uma tag para o caso comum, com acesso ao pipeline programável quando
necessário — como `<canvas>` conviveu com `<img>`. Reescreveria o ramo `e9`/`e10`: a camada de
motor se torna middleware opcional em vez de requisito, e a seção 9 desejável se realiza.

**W5 — Um serviço público brasileiro de grande alcance publica experiência em WebGPU e descobre
que um terço do público não consegue abrir.** *(Probabilidade média; impacto: `e8.1.1` e `e8.2`
saem da terceira ordem e entram na pauta política.)* Com 87% das classes DE acessando
exclusivamente por celular e computador em apenas 10% desses domicílios [18], a colisão é
aritmética, não hipotética. O impacto de mapa é que a discussão de requisito mínimo de hardware
deixaria de ser assunto de engenharia e entraria na linguagem de política pública — com uma
palavra para isso, o que hoje não existe.

**W6 — O óculos não chega à escala pressuposta, e o meio imersivo na web vive de telefone e
desktop.** *(Probabilidade média; impacto: D2 perde relevância sem nunca ser refutada.)* Este é o
wildcard mais chato de admitir porque é o mais banal: nada precisa ser bloqueado nem quebrado.
Basta o hardware imersivo permanecer nicho. Nesse desfecho D1, D3 e D4 seguem valendo e D2 se
torna um capítulo de história técnica — um padrão completo, interoperável e sem público.

## 7. Contra o próprio mapa

### O registro auditável dos rebaixamentos de confiança (Etapa 4 da skill)

A skill exige que a autocrítica seja auditável e não apenas afirmada: cada efeito rebaixado deve
aparecer aqui **com o valor original antes do rebaixamento**. Seis efeitos foram gerados com
confiança acima do que sustentam e foram rebaixados:

| Efeito | Original | Final | Teste em que falhou |
|---|---|---|---|
| `e1` — motores publicam na web o pipeline do nativo | **alta** | media | *Extrapolação linear.* O `WebGPURenderer` já tenta WebGPU por padrão; isso é presente, não futuro. E ignorei força contrária documentada: em cena de 1 milhão de gaussianos o WebGPU **empata** com WebGL 2 [13], então para a maioria dos projetos a migração não paga. |
| `e2` — compatibilidade por GPU e driver | **alta** | media | *Extrapolação de um presente já observável.* A matriz por fornecedor de GPU e versão de driver está publicada hoje [1]; eu havia apresentado como descoberta o que é estado atual. O que é futuro é apenas a generalização do efeito para a prática de produção. |
| `e4` — duas rotas simultâneas de distribuição | **alta** | media | *Já é presente, e em parte no sentido contrário.* PWA de WebXR em loja existe desde 2024 [11]. Além disso a leitura otimista ignora a direção do movimento observado: a loja absorvendo a web [12], não o inverso. |
| `e5.1` — capacidade variando por fabricante | **alta** | media | *Força contrária ignorada:* o Interop existe exatamente para reduzir divergência entre implementações, e há pressão regulatória crescente sobre plataformas de hardware. Eu tratei divergência como destino em vez de como disputa aberta. |
| `e6` — iPhone e iPad fora da rota do link | **alta** | media | *Força contrária ignorada, e é grande:* pressão regulatória sobre motor de navegador no iOS. A evidência atual é forte e confirmada por engenheiro da Apple [3][21], mas o efeito afirma **permanência até 2031**, e permanência de quatro anos é premissa sobre decisão de empresa, não leitura de dado. Mantive `sinal: forte` porque o fato presente é sólido; a confiança caiu porque a projeção não é. |
| `e3.1` — acesso à GPU sob permissão | media | **baixa** | *Taxa de adoção sem precedente.* Nenhum navegador jamais retrocedeu um recurso de desempenho já embarcado por causa de canal lateral — nem com Spectre, nem com WebGL. Eu assumi uma reação que a história do meio não sustenta. |

**O resultado agregado é o achado desconfortável desta seção: depois da Etapa 4, nenhum dos dez
efeitos de primeira ordem permaneceu em confiança `alta`, e nenhum efeito da roda inteira está
em `alta`.** Um mapa em que nada é altamente confiável, sobre um tema cuja base técnica é sólida
e verificável, é sinal de que a solidez está na **camada técnica** e a incerteza toda está na
**camada de decisão de plataforma** — que é justamente a camada onde cinco empresas decidem e
nenhuma publica roadmap. Por isso o `confianca: media` do frontmatter é avaliação honesta do
documento e não modéstia protocolar.

### A checagem que a rodada anterior desta skill deixou passar

O `DUVIDAS.md` do autor registra que a execução de teste da skill atribuiu `prazo: 2031` e
`prazo: 2032` a efeitos de terceira ordem num mapa cujo horizonte pedido era 2030, sem aviso
nenhum no texto — e que a Etapa 4 não pegou, porque olhou só para `confianca`. A correção foi
aplicada aqui de forma explícita: todos os 56 valores de `prazo` do bloco YAML foram conferidos
contra `horizonte: 2031` por script, e **nenhum o excede** (máximo encontrado: 2031). Os três
efeitos que provavelmente só se consolidam depois de 2031 estão nomeados em prosa na seção 5,
como manda a correção, em vez de receberem data fora do intervalo.

### Onde este mapa provavelmente está errado

**O efeito que é só extrapolação linear do presente: `e9.1`** ("o 3D entra em página comum por
autores que nunca escreveriam WebGL"). É a história do `<model-viewer>` desde 2019, contada de
novo com uma tag diferente. O `<model>` reduz o atrito, mas o atrito não era técnico: era o
custo de produzir e manter um ativo 3D apresentável, que a tag não resolve. `e1` e `e2` também
são extrapolações, com a diferença de que dizem coisas que o campo ainda não incorporou; `e9.1`
diz uma coisa que o campo já ouviu e que não se confirmou na escala prometida.

**O efeito que assume velocidade de adoção sem precedente comparável: `e7.2` e `e8`, juntos.**
Eles supõem que carregamento inicial de centenas de megabytes a gigabytes se tornará aceitável em
mídia web. Toda a história do meio vai no sentido oposto — vinte anos de engenharia para reduzir
o tempo até o primeiro quadro, orçamento de performance, *lazy loading*, formatos de imagem mais
leves. Nenhum precedente mostra público aceitando esperar gigabytes por uma página. O caso
frequentemente invocado (jogo em loja de console, 80 GB) não é comparável, porque ali a espera
acontece **depois** da decisão de compra, e aqui teria de acontecer antes. `e4.1.1` tem problema
irmão em outra dimensão: assume erosão de taxa de plataforma numa velocidade que só a regulação
produziu, e produziu em duas jurisdições [20] — extrapolar isso para o mundo é extrapolar
política, não tecnologia.

**A disrupção que pode simplesmente não se concretizar: D3, o navegador como runtime de
inferência.** E convém ser preciso sobre o que a sustenta: dois números medidos num MacBook Pro
M3 Max [15]. Não encontrei medição pública comparável em aparelho mediano, e muito menos em
celular de entrada — que é a maioria do parque brasileiro [18]. Além disso o transformers.js
ainda marca WebGPU como experimental no próprio README [14], e a WebNN está em Candidate
Recommendation, não em Recommendation [17]. Se D3 não se concretizar, caem `e7` e `e8` inteiros —
nove efeitos, um sexto da roda — e o mapa muda de assunto: deixa de ser sobre *computação* na
borda e fica sendo sobre *distribuição*, com D1, D2 e D4. Curiosamente, o mapa **melhoraria** de
confiança média, porque D3 é o ramo mais especulativo. Perderia, em troca, o cruzamento que o
tema apontava como o mais interessante.

**A disrupção que pode se concretizar e não importar: D2.** É o cenário do wildcard W6, e é o
mais provável dos desfechos negativos: nada é bloqueado, nada quebra, e o WebXR simplesmente
amadurece sem parque. Um padrão perfeito sem público. O mapa não tem instrumento para detectar
isso, porque toda a evidência da seção 3 é evidência de **capacidade técnica**, e nenhuma é de
**uso**. Não encontrei nenhum dado público de quantas sessões WebXR de fato se abrem por mês em
nenhum navegador. Essa ausência é a maior lacuna de evidência deste documento, e é maior que
qualquer erro pontual da seção 8.

### O viés que entrou aqui

Este tema não foi escolhido por gosto — foi atribuído (tema 15 de 19). O viés clássico do
formato, portanto, é fraco. Mas há um viés mais forte e mais difícil de ver, e ele entrou pelo
enunciado: **o tema foi descrito com uma tese embutida** — "o que era app vira link" — e uma
roda construída a partir de uma tese encontra a tese. Fiz três contrapesos deliberados (`e6`,
`e5` e a disrupção D4 inteira, que é a *rota concorrente* controlada pelo fabricante), e
recusei a leitura fácil do dado da Digital Goods API. Mas a estrutura dos primeiros ramos que
gerei seguia a tese, e o que me tirou dela não foi método: foi uma contradição de fonte — a
lista oficial do Interop 2026 contrariando um artigo entusiasta [4][5]. Se eu não tivesse ido
conferir a lista, este mapa seria bem mais otimista e bem menos correto.

Um segundo viés, de forma: **meus efeitos de terceira ordem gravitam para "uma profissão se
reorganiza" e "a formação se reorganiza"** (`e1.1.1`, `e1.2.1`, `e9.1.1`). É o tipo mais barato
de efeito de terceira ordem — sempre plausível, nunca falseável, e serviria a qualquer tema
desta disciplina. O briefing pedia explicitamente para excluir ideias que servem para qualquer
tema; esses três passaram do meu filtro e ficam marcados aqui como os candidatos mais fracos da
roda.

## 8. O que a máquina errou

Seis erros e limitações reais, nesta rodada, com o motivo da desconfiança em cada caso.

**1. Aceitei por alguns minutos que o WebXR era área de foco do Interop 2026 — e era falso.** A
primeira busca sobre suporte a WebXR devolveu, em primeiro lugar, um artigo (`vr.org`) afirmando
que "a proposta do Interop 2026 inclui o WebXR como área de foco" e, em outro texto do mesmo
site, que a adoção de WebXR "saltou 40%". Comecei a estruturar a seção 3 com a primeira
afirmação como fato favorável ao tema. Ao abrir a fonte primária — o anúncio oficial no web.dev
e o `2026/README.md` do repositório `web-platform-tests/interop` — as vinte áreas de foco estão
listadas e **nem WebXR nem WebGPU aparecem** [4][5]. O que existe é a issue #1021, uma
*proposta* com o rótulo `focus-area-proposal` [6]. Pior: ao abrir a issue, o resumo automático
do meu próprio leitor de páginas concluiu que ela havia sido "fechada como Done, indicando que
foi aceita como área de foco" — o que contradiz diretamente a lista oficial. Tratei a lista
oficial como correta e a leitura da issue como erro de interpretação de estado de projeto no
GitHub. **Como percebi:** por desconfiar de um artigo cujo título é uma afirmação de percentual
("saltou 40%") sem fonte para o percentual. O número de 40% nunca foi confirmado em nenhuma
fonte e não entra neste documento. A lição operacional: o mesmo site produziu duas das três
afirmações que não consegui confirmar.

**2. Não consegui verificar "Gestalt Village", que o enunciado do tema apresenta como o
cruzamento central.** O enunciado descreve um "modelo de linguagem inteiro carregado no navegador
via WebGPU, sem requisição de rede" com esse nome. Fiz três buscas com combinações diferentes
(nome + WebGPU + LLM + browser; nome + github; nome isolado) e o retorno foi: um vilarejo do
jogo *Clair Obscur: Expedition 33*, repositórios homônimos sem relação (um motor de jogo, um
ambiente de desenvolvimento, um sistema de resolução de problemas matemáticos) e projetos
diversos com "village" no nome. **Não usei o projeto como evidência em nenhum ponto do mapa.**
Ou o nome está incorreto no enunciado, ou é projeto pequeno demais para estar indexado. A
função que ele cumpriria no argumento — navegador como console de IA, não só de gráficos — está
sustentada por WebLLM [15] e transformers.js [14], que verifiquei.

**3. Recusei quatro números que a busca me ofereceu com aparência de dado, porque não fecham
entre si.** Apareceram: "70% de suporte de navegador e 15× de ganho de performance"
(`byteiota`); "~95% dos usuários têm navegador com WebGPU" (um guia de migração de three.js);
"browser é 5-10× mais lento que llama.cpp, ~15-25 t/s contra ~150 t/s numa RTX 4090" (`9bench`);
e a soma de cobertura de outro agregador. Os três primeiros são incompatíveis entre si e com as
duas fontes que considero confiáveis: caniuse em 87,35% [2] e o blog do PlayCanvas em
"aproximadamente 85%" [13] — que, essas sim, concordam. O terceiro também contradiz o artigo do
WebLLM, que mede 71% a 80% do nativo [15]; pode ser que ambos estejam certos medindo coisas
diferentes (transformers.js sobre ONNX contra WebLLM sobre kernels compilados), mas como não
pude verificar a metodologia de nenhum dos dois lados, usei só o número revisado por pares.
**Como percebi:** ao montar a seção 3 e ver quatro cifras de cobertura de WebGPU brigando entre
78% e 95% no mesmo mês.

**4. Uma URL que a busca me devolveu como existente retornou 404, e por isso uma afirmação deste
mapa está apenas parcialmente verificada.** `https://threejs.org/manual/en/webgpurenderer.html`
apareceu como primeiro resultado e respondeu 404. Abri o índice de documentação
(`threejs.org/docs`), que lista a classe `WebGPURenderer` e o detector de capacidade, mas não
descreve comportamento de backend. Portanto: **a afirmação de que o `WebGPURenderer` usa WebGPU
por padrão e cai para WebGL 2 não está sustentada em fonte primária neste documento** — vem de
fontes secundárias consistentes entre si, e está marcada como tal na seção 3. É uma afirmação
pouco controversa e amplamente repetida, o que é exatamente a categoria em que se erra sem
perceber.

**5. Duas fontes que abri não sustentaram o que eu esperava, e por isso números saíram do mapa.**
(a) A página de suporte da Apple sobre o direito de compra externa nos EUA não declara taxa
alguma; as cifras que circulam (26%, 21%, 15%, 5%) vêm de terceiros. **Nenhum número de comissão
da Apple entra neste documento** — só os do Google Play, que a própria página de ajuda do Google
publica [20]. (b) O PDF de principais resultados da TIC Domicílios 2025 no `cetic.br` veio como
imagem e não pôde ser lido; os números brasileiros vêm da cobertura da Abranet, que os cita
entre aspas [18]. É fonte secundária de um dado primário, e fica registrado que não conferi
contra o relatório.

**6. Confiei numa afirmação sobre status normativo que a própria especificação não confirma.**
Escrevi que o `<model>` é publicação de Community Group e não está na trilha de padrões do W3C.
Abri a especificação em `immersive-web.github.io/model-element/` e ela não traz o boilerplate de
"status deste documento" — só a frase "This is a work in progress" [9]. A afirmação sobre a
trilha normativa, portanto, vem de reportagem secundária. Corrigi o texto da seção 3 para dizer
o que a fonte de fato diz. **Como percebi:** ao conferir fonte por fonte para escrever a
seção 11, percebendo que havia atribuído à especificação uma frase que ela não contém.

**Um erro que não cometi e vale registrar porque é o erro reincidente desta skill:** o
`DUVIDAS.md` documenta que a rodada de teste anterior colocou prazos de 2031 e 2032 num mapa de
horizonte 2030. Aqui a checagem foi feita por script contra os 56 efeitos, e nenhum prazo excede
2031. Não conto isso como acerto de mérito — conto como a única coisa que a skill já sabia que
erra e que, desta vez, foi verificada em vez de presumida.

**Sobre o que a máquina *não* pôde errar aqui, e é limitação da rodada, não erro:** a Etapa 1
manda entrevistar e aguardar. Não havia interlocutor. As respostas vieram por antecipação, e
nenhuma pergunta de esclarecimento pôde ser feita — em particular, não pude perguntar se
"quem projeta mídia e interação" incluía quem decide orçamento, o que mudaria o peso relativo
dos ramos de custo (`e2.2`, `e6.1.1`, `e10.2.1`) na apresentação.

## 9. Três cenários para 2031

### Provável — "o link abriu, mas só em metade dos aparelhos"

É 2031 e o 3D pesado na web é rotina. Ninguém mais discute WebGPU: é o caminho padrão, o WebGL 2
sobreviveu como fallback permanente nos aparelhos de entrada, e a matriz de compatibilidade que
uma equipe de mídia mantém é uma planilha de GPUs e versões de driver, não de navegadores.
Publicar experiência imersiva por link é normal — e, onde o público está no telefone, continua
não sendo possível, porque o Safari do iOS nunca implementou WebXR e a rota que a Apple ofereceu
foi outra: o `<model>` e os ambientes declarativos, que entregam 3D bonito em qualquer página e
não entregam sessão imersiva programável. Todo projeto sério nasce em duas versões, e o custo de
autoria imersiva não caiu — mudou de lugar. A taxa de 30% virou memória histórica em três
jurisdições e preço de tabela no resto do mundo; a loja não morreu, virou canal pago de descoberta
e pagamento, e o gargalo do criador é comprar tráfego. O modelo rodando na aba existe e funciona
bem em aparelho caro; em aparelho mediano, a experiência com IA continua chamando servidor, e a
frase "nada sai do seu dispositivo" é recurso de nicho premium. No Brasil, quem publica mídia
interativa aprendeu a declarar requisito mínimo — e a excluir público explicitamente, coisa que a
web havia deixado de fazer nos anos 2000. O saldo: a plataforma abriu, a promessa de universalidade
não se cumpriu, e o campo ganhou uma nova estratificação que ainda não sabe nomear.

### Desejável — "a tag e o motor na mesma página"

É 2031 e aconteceu o desfecho do wildcard W4 combinado com o W3. O 3D declarativo foi padronizado
com uma saída explícita para o pipeline programável: uma tag resolve o caso comum — produto,
notícia, documentação, prótese, peça de museu — e quando o autor precisa de controle, a mesma
cena aceita shader próprio sem trocar de arquitetura. O `<img>` e o `<canvas>` da era espacial
convivem, e a camada de motor virou middleware opcional em vez de requisito de entrada. O WebXR
entrou no Interop em 2028, ganhou suíte de teste compartilhada e painel público de conformidade,
e a paridade entre fabricantes deixou de ser favor: sensor de mão, profundidade e âncora
funcionam igual em três hardwares diferentes, sob permissão granular que o usuário concede e
revoga como concede câmera. O `immersive-ar` chegou ao telefone — por padrão, não por obrigação
judicial, porque a Apple concluiu que o custo de não ter era maior. E a parte que exigiu decisão
deliberada de alguém: a discussão de orçamento de GPU entrou no vocabulário de projeto ao lado de
orçamento de performance, com ferramenta de medição, alvo declarado para aparelho de entrada, e
o hábito de tratar o modo degradado como primeira classe em vez de sobra. Para chegar aqui foi
preciso que os cinco fornecedores do Interop colocassem XR na lista, que um dos fabricantes de
óculos abrisse paridade sem ser forçado, e que o campo de mídia e interação parasse de projetar
para o aparelho que tem na mesa. Nenhuma das três é automática.

### Indesejável — "a aba virou console fechado"

É 2031 e a porta que se abriu serviu para instalar um porteiro melhor. O `<model>` e seus
equivalentes venceram como forma dominante de 3D na web — são fáceis, bonitos e o resultado
visual pertence ao fabricante do navegador, que decide iluminação, composição, o que anima e o
que não. O WebXR nunca saiu da divergência: cada fabricante implementa o subconjunto que lhe
convém, e o que exige sensor está atrás de permissão que o fabricante concede por origem, com
lista de origens confiáveis que ninguém audita — o poder de barrar que era da loja, agora sem
processo de apelação. Uma cadeia de exploração de driver de GPU chegou ao uso real em 2029 e o
WebGPU passou dezoito meses atrás de clique de confirmação; o "sem instalação" morreu ali, junto
com os projetos que dependiam dele. E o modelo na aba cumpriu a promessa ao contrário: o
download de gigabytes na primeira visita transferiu o custo da infraestrutura de quem publica
para o plano de dados de quem assiste, e o meio se dividiu entre quem tem GPU e quem recebe a
versão pobre — no Brasil, entre 13% e 87% das classes DE, na proporção de quem tem computador em
casa. **Os sinais precoces, todos monitoráveis desde hoje:** o WebXR ficando fora do Interop por
um terceiro ano consecutivo; o primeiro *permission prompt* por origem para abrir sessão
imersiva; o primeiro CVE de escape de sandbox pela pilha de GPU a partir de página web; e o
primeiro projeto de mídia relevante que publique "requisitos mínimos" sem que ninguém ache
estranho.

## 10. O experimento

### O que é

**"Mesmo link, três portas".** Uma única URL, aberta pela turma ao mesmo tempo, na sala, cada
pessoa no seu próprio aparelho. A página negocia, em ordem, três rotas de apresentação da mesma
cena — uma captura em gaussianos de um espaço do CIn:

1. **Porta imersiva** — se `navigator.xr` existir e `isSessionSupported('immersive-vr')` (ou
   `immersive-ar`) responder verdadeiro, oferece entrar na cena.
2. **Porta WebGPU** — se não houver XR mas houver WebGPU, renderiza a cena em tela com o caminho
   de compute, sem limite reduzido de primitivas.
3. **Porta degradada** — WebGL 2, com orçamento de gaussianos cortado; e, onde existir, a rota
   declarativa (`<model>`) como quarta variante de comparação visual.

Sobre as três, um quarto teste opcional e independente: um modelo pequeno carregado por WebGPU
que responde perguntas sobre a cena **sem nenhuma requisição de rede depois do carregamento
inicial**.

A página é, ao mesmo tempo, a obra e o instrumento. Ela registra por visitante, sem identificar
ninguém: porta obtida; `adapter.info` quando disponível; modos de sessão XR suportados; tempo
até o primeiro quadro; bytes lidos da rede contra bytes vindos de cache na segunda visita; e, se
a pessoa tentar o modelo, tempo de carga e tokens por segundo. Ao final, mostra o histograma da
sala em tempo real.

### Que pergunta sobre o futuro ele ajuda a responder

**Quanto da promessa "sem instalação" sobrevive ao parque real de aparelhos de uma turma
brasileira?** É a pergunta que a seção 3 deixa aberta e que nenhuma fonte responde: a cobertura
de 87% do caniuse [2] e os "aproximadamente 85%" do PlayCanvas [13] são médias globais ponderadas
por tráfego, e tráfego é ponderado por renda. Quatorze aparelhos numa sala em Recife são amostra
pequena e enviesada — mas são uma amostra *medida*, e é mais do que existe hoje no documento.

Secundariamente, responde a pergunta de `e6`: **quantos aparelhos da sala abrem sessão
imersiva?** A previsão do mapa é que os iPhones sejam zero, por ausência de WebXR no Safari do
iOS em qualquer versão [3], e que a taxa geral seja baixíssima por ausência de óculos.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa **WebGPU com compute shader** (renderização de gaussianos pelo caminho que o PlayCanvas 2.19.0
introduziu [13]), **negociação de sessão WebXR** e **inferência em WebGPU** no navegador.

Por que não dá com tecnologia madura, ponto a ponto: (a) WebGL 2 *renderiza* gaussianos, mas por
caminho de rasterização — e o objeto do experimento é justamente a diferença entre os caminhos,
que só existe medindo os dois no mesmo aparelho; (b) a pergunta central é "qual porta este
aparelho abre", e essa pergunta **só passou a existir** quando surgiram portas alternativas: em
2021 havia uma só; (c) rodar o modelo sem rede depende de compute em WebGPU — em WebAssembly, a
ordem de grandeza torna a demonstração inviável em sala [15]; (d) e a variante `<model>` não
existia em iOS e macOS antes do Safari 27 [8]. Um experimento equivalente feito com tecnologia
madura só conseguiria medir uma coisa: que WebGL funciona. Isso já se sabe.

### O que a turma vai fazer quando testar isso em sala

Cinco passos, quinze a vinte minutos:

1. Cada pessoa abre o link no **próprio** aparelho — sem trocar de aparelho, sem pedir emprestado,
   sem usar o do professor. O enviesamento da amostra é o dado.
2. Cada uma anota qual porta recebeu e o tempo até o primeiro quadro, e compara com o vizinho.
3. Quem tiver iPhone confirma na prática o que a seção 3 afirma em documento: sem WebXR, mesmo com
   WebGPU presente desde o iOS 26 [1][3]. A cena aparece; a sessão imersiva não abre.
4. **Segunda visita, com a rede desligada:** quem conseguir ver a cena descobre, na prática, que a
   primeira visita foi uma instalação — que é o efeito `e7.2.1` da roda, transformado em
   experiência em vez de argumento.
5. A sala compara o histograma medido contra os 87% do caniuse [2], e discute a diferença.

### O que seria um resultado que me faria mudar de ideia

Três resultados, cada um derrubando uma parte nomeada do mapa:

- **Se 90% ou mais dos aparelhos da sala abrirem a porta WebGPU e o modelo carregar em menos de
  30 segundos no aparelho mediano**, então `e8.1.1` (a desigualdade migrando para "ter GPU") está
  superestimado e o ramo de estratificação por hardware deve ser rebaixado. Seria a evidência que
  o briefing pediu para me fazer mudar de ideia: adoção já passada da maioria inicial.
- **Se algum iPhone abrir sessão imersiva**, `e6` está errado em fato presente — não em projeção —
  e a disrupção D2 é mais forte do que este mapa admite. É o teste mais barato e mais decisivo do
  experimento.
- **Se a diferença visual entre a porta WebGPU e a porta degradada for imperceptível para a turma**
  em cena de tamanho realista, então D1 é melhoria e não ruptura, e o mapa inteiro perde a raiz
  que sustenta `e1`, `e2` e `e3` — exatamente o critério de falseamento declarado no briefing. O
  empate em 1 milhão de gaussianos medido pelo PlayCanvas [13] sugere que este é o resultado mais
  provável dos três, e é o que mais me obrigaria a reescrever.

## 11. Fontes

Vinte e seis fontes abertas, todas nesta rodada, em 12/09/2026. As numeradas de 1 a 21 sustentam
afirmações do documento; as de 22 a 26 foram abertas e **não** sustentaram — ficam listadas porque
o fato de não terem sustentado é informação, e porque duas delas estão citadas na seção 8.

1. **Implementation Status — GPU for the Web (gpuweb wiki)** · `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status`
   Sustenta: a matriz de embarque do WebGPU por navegador, plataforma e fornecedor de GPU (Chromium 113 desktop, 121 Android ARM/Qualcomm/Intel, 139 Imagination; Firefox 141 Windows, 145/147 macOS; Linux por GPU a partir do Chrome 144/147; Safari 26; Firefox Android atrás de flag).
   Confiabilidade: **máxima para este fato.** É o wiki do próprio grupo de trabalho que especifica a API — fonte primária, atualizada pelos implementadores.

2. **caniuse — WebGPU** · `https://caniuse.com/webgpu`
   Sustenta: cobertura global de 85,72% + 1,63% = 87,35%; iOS Safari a partir de 26.0; Firefox Android desabilitado por padrão.
   Confiabilidade: **alta, com ressalva metodológica que importa muito neste mapa.** O caniuse pondera por *tráfego global*, e tráfego é ponderado por renda — o que faz o número superestimar a cobertura em parque de aparelho de entrada. É a ressalva que motiva o experimento da seção 10.

3. **caniuse — WebXR Device API** · `https://caniuse.com/webxr`
   Sustenta: 77,15% de cobertura, toda como suporte parcial; Chrome/Edge 79+; **Safari iOS não suportado da 3.2 à 26.6**; Safari macOS desabilitado por padrão.
   Confiabilidade: **alta**, mesma ressalva de ponderação. Não cobre visionOS como plataforma separada, o que é limitação relevante aqui.

4. **Interop 2026: Continuing to improve the web for developers — web.dev** · `https://web.dev/blog/interop-2026`
   Sustenta: as vinte áreas de foco e as quatro investigações do Interop 2026, e a **ausência** de WebXR e WebGPU.
   Confiabilidade: **alta.** É o anúncio oficial conjunto. É a fonte que derrubou a afirmação falsa registrada na seção 8, item 1.

5. **interop/2026/README.md — web-platform-tests** · `https://raw.githubusercontent.com/web-platform-tests/interop/main/2026/README.md`
   Sustenta: confirmação independente da mesma lista de vinte áreas, direto do repositório.
   Confiabilidade: **máxima.** É o artefato de que o anúncio deriva. Abri as duas para não depender de uma só.

6. **WebXR API (Interop 2026 Focus Area Proposal) — issue #1021** · `https://github.com/web-platform-tests/interop/issues/1021`
   Sustenta: que o WebXR foi formalmente proposto, com o rótulo `focus-area-proposal`.
   Confiabilidade: **alta para a existência da proposta; baixa para seu desfecho.** O estado de projeto no GitHub ("closed/Done") é ambíguo e meu leitor o interpretou como aceitação, contrariando [4] e [5]. Registrado na seção 8, item 1.

7. **WebKit Features for Safari 26.2 — webkit.org** · `https://webkit.org/blog/17640/webkit-features-for-safari-26-2/`
   Sustenta: "Agora, com o Safari 26.2 no visionOS, o WebXR suporta WebGPU."
   Confiabilidade: **máxima.** Blog oficial do motor, sobre o próprio release.

8. **News from WWDC26: WebKit in Safari 27 beta — webkit.org** · `https://webkit.org/blog/17967/news-from-wwdc26-webkit-in-safari-27-beta/`
   Sustenta: `<model>` chegando a iOS, iPadOS e macOS com `dynamic-range-limit`; ambientes imersivos de site via `<model>` + API JS no visionOS 27; controles interativos para foto espacial em `<img>`; e que a única menção a WebXR é correção de bug de viewport.
   Confiabilidade: **máxima** para o que foi anunciado. A leitura estratégica que faço a partir disso (seção 6, sinal 2) é minha, não da fonte.

9. **The `<model>` element — Immersive Web (spec draft)** · `https://immersive-web.github.io/model-element/`
   Sustenta: que a especificação declara "This is a work in progress".
   Confiabilidade: **alta para a frase, insuficiente para o status normativo.** A página que abri não traz boilerplate de status; a afirmação sobre trilha de padrões vem de terceiros (seção 8, item 6).

10. **Develop for the web on Android XR — Android Developers** · `https://developer.android.com/develop/xr/web`
    Sustenta: Chrome no Android XR com Device API, módulo AR, gamepads, hit test, entrada por mão, âncoras, profundidade e estimativa de luz; recomendação de mão como entrada primária; exigência de permissão de mapeamento 3D e câmera.
    Confiabilidade: **máxima** — documentação do implementador. É publicidade de capacidade, não medição de uso.

11. **Progressive Web Apps — Meta Horizon OS Developers** · `https://developers.meta.com/horizon/documentation/web/pwa-overview/`
    Sustenta: empacotamento por Bubblewrap em Trusted Web Activity; modos `2D` e `immersive`; "é uma opção de distribuição, não uma categoria de conteúdo separada"; o app web segue disponível pelo site. Não declara taxa.
    Confiabilidade: **máxima** para mecânica; silente sobre economia, e o silêncio é ele mesmo um dado.

12. **WebXR Apps On Quest's Store Can Now Use In-App Payments — UploadVR** · `https://www.uploadvr.com/webxr-apps-on-quest-meta-horizon-store-can-now-use-in-app-payments/`
    Sustenta: Digital Goods API habilitada para PWA de WebXR na Meta Horizon Store (jun/2025); origem em Bubblewrap no Connect 2024; e que os desenvolvedores queriam monetizar na web aberta, o que o navegador da Meta não suporta.
    Confiabilidade: **média-alta.** Imprensa setorial especializada, com histórico de acerto no nicho; não é fonte primária e não traz a taxa.

13. **New in SuperSplat: WebGPU and Streaming Bring Huge Performance Wins — PlayCanvas Blog** · `https://blog.playcanvas.com/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins/`
    Sustenta: engine 2.19.0 em 03/06/2026; renderizador de gaussianos por compute; M4 Max 138,7 vs 137,2 fps (1M), 124,1 vs 48,1 (10M), 75,8 vs 13,3 (35M); iPhone 13 Pro Max 77,6 vs 38,1 (1M) e 42,4 vs 20,4 (4M); "aproximadamente 85% dos usuários finais"; fallback automático para WebGL 2; Streamed SOG com LOD.
    Confiabilidade: **média-alta, com viés declarado.** É benchmark do fornecedor sobre o próprio produto — mas publica aparelho, contagem e número dos dois lados, incluindo o **empate em 1M**, que é desfavorável à própria tese. Benchmark que publica o próprio empate é mais confiável que a média.

14. **transformers.js — README (Hugging Face)** · `https://github.com/huggingface/transformers.js`
    Sustenta: execução sobre ONNX Runtime com backends WASM e WebGPU; `device: 'webgpu'`; o aviso de que "a API WebGPU ainda é experimental em muitos navegadores"; e a tagline de rodar sem servidor.
    Confiabilidade: **máxima** para o estado declarado da biblioteca. É o mantenedor dizendo que ainda é experimental — o que vale mais que terceiros dizendo que está pronto.

15. **WebLLM: A High-Performance In-Browser LLM Inference Engine (arXiv 2412.15803v2)** · `https://arxiv.org/html/2412.15803v2`
    Sustenta: Llama-3.1-8B a 41,1 tok/s contra 57,7 do MLC-LLM (71,2%); Phi-3.5-mini a 71,1 contra 89,3 (79,6%); MacBook Pro M3 Max, 4 bits, Chrome Canary 133; e a limitação de o WebGPU não ter bibliotecas aceleradas para kernels comuns.
    Confiabilidade: **alta para o número, limitada em escopo.** Publica hardware, quantização e versão de navegador — o que permite auditar. Mas é **um** aparelho, e de topo de linha: é a razão pela qual D3 é a disrupção mais fraca deste mapa.

16. **WebGPU-SPY: Finding Fingerprints in the Sandbox through GPU Cache Attacks (arXiv 2401.04349)** · `https://arxiv.org/abs/2401.04349`
    Sustenta: canal lateral em cache de GPU a partir da pilha de compute espionando a de renderização; precisão de 90% na identificação de site em 100 sites populares; GPUs Intel integradas.
    Confiabilidade: **alta.** Ferguson, Wilson e Naghibijouybari. A página que abri é a de resumo no arXiv (cs.CR); o registro em anais da 19ª ACM AsiaCCS apareceu em resultado de busca e **não** foi aberto — portanto trato a revisão por pares como provável, não verificada aqui. Escopo restrito a GPU Intel integrada; não generalizei além disso.

17. **Updated Candidate Recommendation: Web Neural Network (WebNN) API — W3C News** · `https://www.w3.org/news/2026/updated-candidate-recommendation-web-neural-network-webnn-api/`
    Sustenta: CR atualizada publicada em 22/01/2026 pelo Web Machine Learning Working Group, com prazo de comentários em 22/03/2026.
    Confiabilidade: **máxima.** Anúncio normativo do próprio W3C. Usada só para status de norma — não para desempenho.

18. **TIC Domicílios 2025 aponta redução da lacuna de acesso à internet entre classes sociais, mas diferença persiste — Abranet** · `https://abranet.org.br/noticias/tic-domicilios-2025-aponta-reducao-da-lacuna-de-acesso-a-internet-entre-classes-sociais-mas-diferenca-persiste/`
    Sustenta: 157 milhões de usuários (163 milhões / 88% na definição ampliada); 65% acessam exclusivamente por celular (+5 p.p. sobre 2024); 87% na classe DE contra 5% na A; computador em 97% dos lares A e 10% dos DE; fibra ou cabo em 95% (A), 75% (C) e 60% (DE); a lacuna caindo de 83 p.p. em 2015 para 27 p.p.
    Confiabilidade: **média-alta como veículo, alta como dado.** Os números são do Cetic.br/NIC.br, a referência do país, e vêm citados entre aspas — mas esta é cobertura, não o relatório. Tentei o PDF primário e não deu (item 24).

19. **Why browser games are the next billion-dollar bet — MCV/DEVELOP** · `https://mcvuk.com/business-news/why-browser-games-are-the-next-billion-dollar-bet/`
    Sustenta: US$ 19,28 bi (2026) → US$ 28,44 bi (2032); ~15 mil títulos HTML5 no 1S2025, quase triplo ano a ano; Poki com 100 M de ativos mensais e 122,5 M de visitas, CrazyGames com 61,1 M; Unity em 55% dos lançamentos do 2T2025 em parte por WebGPU no Unity 6; 46% dos desenvolvedores citando descobribilidade.
    Confiabilidade: **média.** Imprensa setorial de referência, mas repassando projeção de mercado de terceiro não nomeado e pesquisa encomendada (Poki/Atomik). Usei para ordem de grandeza e para o dado de *motivação declarada*, não como medição.

20. **Service fees — Google Play Console Help** · `https://support.google.com/googleplay/android-developer/answer/112622`
    Sustenta: a partir de 30/06/2026 em EEA, Reino Unido e EUA — 10% + 5% de cobrança em instalações novas; 20% a 25% + 5% em instalações existentes; 15% a 20% para links web externos.
    Confiabilidade: **máxima.** Página de ajuda do próprio Google, que é o documento contratual de referência.

21. **Immersive AR mode of WebXR in visionOS / Support for AR module in visionOS 2.x — Apple Developer Forums, thread 756850** · `https://developer.apple.com/forums/thread/756850`
    Sustenta: resposta de engenheiro da Apple afirmando que sessões `immersive-ar` "não são suportadas no visionOS ou iOS", que o recurso "não está em estado testável" e que "mesmo que a flag esteja lá, ela é não-funcional neste momento".
    Confiabilidade: **alta com ressalva de forma.** Fórum oficial e resposta identificada como de engenheiro da Apple, o que é a declaração mais direta que existe publicamente — mas não é documentação e pode envelhecer sem aviso.

### Abertas e que não sustentaram (registro honesto)

22. **three.js — índice de documentação** · `https://threejs.org/docs/index.html#api/en/renderers/WebGPURenderer`
    Abri; lista a classe `WebGPURenderer`, `WGSLNodeBuilder` e o detector `WebGPU`, e **não** descreve backend padrão nem fallback. Não sustenta a afirmação para a qual a busquei.

23. **three.js manual — WebGPURenderer** · `https://threejs.org/manual/en/webgpurenderer.html`
    **HTTP 404.** URL oferecida pela busca como existente. Por causa dela, a afirmação sobre backend padrão e fallback do three.js está marcada na seção 3 como não verificada em fonte primária (seção 8, item 4).

24. **TIC Domicílios 2025 — principais resultados (PDF, Cetic.br)** · `https://cetic.br/media/analises/tic_domicilios_2025_principais_resultados.pdf`
    Abri; veio como imagem sem camada de texto e não foi possível extrair número nenhum. É a fonte primária dos dados brasileiros que usei via [18].

25. **StoreKit External Purchase Link Entitlement (US) — Apple Developer Support** · `https://developer.apple.com/support/storekit-external-entitlement-us/`
    Abri; a página **não declara taxa alguma**. Por isso nenhum percentual de comissão da Apple aparece neste documento (seção 8, item 5a).

26. **WebGPU-SPY — PDF no arXiv** · `https://arxiv.org/pdf/2401.04349`
    Abri; o PDF não pôde ser lido como texto. Substituído pela página de resumo [16], que trouxe título, autoria, classificação e o número de precisão.

### Fontes que apareceram na busca e foram deliberadamente NÃO usadas

Registro por transparência, porque a decisão de não usar é parte do método: `vr.org` (duas
matérias; afirmou que o WebXR é área de foco do Interop 2026, contrariado por [4] e [5], e um
"salto de 40%" na adoção que nenhuma fonte confirma), `byteiota` ("70% de suporte, 15× de
performance"), `webo360solutions`, `testmuai`, `9bench` ("5-10× mais lento que llama.cpp"),
`vucense`, `utsubo`, `buildmvpfast`, `kanopylabs`, `swyvl`, `cinevva`, `impulsemediahub`,
`dodopayments`, `tech-insider.org`, `taylancetech`, `digitalstrategyforce`, `threejsroadmap`,
`localaimaster`, `egnworks`. Padrão comum a quase todas: data de 2026 no título, número redondo
sem metodologia, e divergência entre si sobre a mesma grandeza. Nenhuma afirmação deste documento
depende delas.

## 12. Anexo — o levantamento bruto

### 12.1 As respostas da entrevista, como chegaram

Transcrição literal do que foi fornecido no briefing da rodada, sem edição:

- Tema: "O navegador como console: 3D e XR sem instalação" (tema 15 de 19 da disciplina; família "Criação e plataforma").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
- Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
- O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse do autor: "Criação e plataforma". Login do autor: jcsc. Skill usada: futurizacao-jcsc.

Condição desta execução, registrada porque afeta a validade: **não havia interlocutor humano**.
Nenhuma pergunta de esclarecimento pôde ser feita. Onde faltou definição, assumi e declarei —
as três assunções que fiz estão listadas em 12.6.

### 12.2 A rodada completa de buscas, com o que cada uma rendeu

| # | Consulta | Rendeu | Uso |
|---|---|---|---|
| 1 | `WebGPU Safari Firefox shipped 2026 browser support status` | O wiki gpuweb e três blogs de SEO | Levou a [1]; blogs descartados |
| 2 | `WebXR support visionOS Safari Meta Quest Browser 2026 immersive-vr WebXR adoption` | Duas matérias `vr.org` com a afirmação falsa sobre Interop | **Disparou a verificação** que virou seção 8, item 1 |
| 3 | `Interop 2026 focus areas announced WebXR web-platform-tests` | web.dev, README do repo, issue #1021, Igalia | [4], [5], [6] |
| 4 | `three.js WebGPURenderer default 2026 release notes WebGL fallback` | Guias de migração; a URL 404 | Afirmação parcialmente verificada; [22], [23] |
| 5 | `WebKit blog visionOS 26 Safari WebXR immersive spatial web features` | Blogs do WebKit 26.0, 26.2, 27 beta e a categoria Spatial | [7], [8] |
| 6 | `WebNN status 2026 W3C candidate recommendation Chrome implementation` | CRD de 13/08/2026, notícia de 22/01/2026, Microsoft Learn | [17] |
| 7 | `Meta Horizon Store WebXR PWA distribution 2026 browser app store fee change` | UploadVR, docs da Meta | [11], [12]. **Nada sobre mudança de taxa em 2026** |
| 8 | `WebLLM transformers.js WebGPU in-browser LLM 2026 benchmark tokens per second` | O artigo do WebLLM e cinco sites com números conflitantes | [14], [15]; conflitos na seção 8, item 3 |
| 9 | `PlayCanvas SuperSplat gaussian splatting browser 2026 engine WebGPU release` | Blog do PlayCanvas, radiancefields | [13] |
| 10 | `Apple Safari WebXR augmented reality module not supported 2026 immersive-ar` | Quatro threads do fórum da Apple | [21] |
| 11 | `App Store Google Play commission 2026 DMA Epic ruling external payments` | Blogs de monetização; levou à ajuda do Google | [20]; números da Apple descartados |
| 12 | `Brasil 2026 smartphone entrada Android baixo custo participação mercado GPU conectividade` | **Quase nada útil** — guias de compra de celular | Descartada inteira; substituída pela nº 13 |
| 13 | `Cetic.br TIC Domicílios 2025 acesso internet exclusivamente celular classes DE Brasil` | Abranet, MobileTime, o PDF do Cetic | [18], [24] |
| 14 | `Android XR Samsung Galaxy XR browser WebXR Chrome support 2026` | Docs do Android, Wikipedia, `vr.org` de novo | [10] |
| 15 | `"model element" HTML Apple proposal standardization W3C immersive-web 2026 criticism` | Spec do ICG, issues #1 e #50, CSS-Tricks, WWDC26 | [9]; as críticas de renderização consistente |
| 16 | `WebGPU security vulnerabilities GPU driver attack surface fingerprinting 2026 browser` | WebGPU-SPY (ACM e arXiv), LockedApart, um estudo de medição de privacidade | [16] |
| 17 | `"Gestalt Village" browser WebGPU LLM in-browser no network request github` | **Nada.** Três reformulações; retorno: um jogo e repositórios homônimos | Seção 8, item 2 |
| 18 | `browser game discovery problem no app store traffic acquisition 2026 web games Poki CrazyGames` | MCV/DEVELOP e guias | [19] |

**A busca que não deu em nada e a ausência que mais pesa.** Nenhuma consulta produziu **dado de
uso real de WebXR** — sessões abertas por mês, aparelhos ativos, retenção. Existe farta evidência
de capacidade e nenhuma de utilização. Tentei por três caminhos (adoção, telemetria de navegador,
números de loja) e não achei. Está registrado como a maior lacuna do documento na seção 7, e é o
que torna o wildcard W6 — o padrão perfeito sem público — impossível de refutar com o que tenho.

### 12.3 O log completo dos rebaixamentos de confiança (Etapa 4)

Ordem em que a Etapa 4 correu, com as três perguntas aplicadas efeito a efeito. Dez efeitos de
primeira ordem foram gerados; **cinco nasceram em `alta`** e os cinco foram rebaixados. Um de
segunda ordem foi rebaixado de `media` para `baixa`. Nenhum foi elevado.

```
e1   alta  -> media   [extrapolação linear + força contrária: empate em 1M gaussianos]
e2   alta  -> media   [descreve presente documentado, não futuro]
e4   alta  -> media   [já é presente; e o movimento observado vai no sentido inverso]
e5.1 alta  -> media   [ignorou Interop e pressão regulatória como forças contrárias]
e6   alta  -> media   [fato presente sólido; projeção de 4 anos não é dado]
e3.1 media -> baixa   [assume reação de navegador sem precedente: nem Spectre, nem WebGL]

Distribuição final, conferida por script:
  1a ordem: 10 efeitos — 10 media,  0 alta, 0 baixa
  2a ordem: 20 efeitos — 16 media,  4 baixa, 0 alta
  3a ordem: 26 efeitos — 11 media, 15 baixa, 0 alta
  Total: 56 efeitos. Nenhum em 'alta' na roda inteira.

Checagem de horizonte (a falha registrada em DUVIDAS.md):
  56 valores de prazo conferidos contra horizonte: 2031
  máximo encontrado: 2031 — nenhum excede
  3a ordem por prazo: 2031 -> 21 efeitos; 2030 -> 5 efeitos
```

O fato de **nenhum** efeito ter restado em `alta` foi o achado da Etapa 4, e não estava previsto.
Ele é a razão de `confianca: media` no frontmatter e está interpretado na seção 7.

### 12.4 Efeitos gerados e cortados antes do bloco final

Cortados por serem genéricos — servem a qualquer tema desta disciplina, e o briefing pediu para
excluir exatamente isso:

- "Surgem novas profissões na interseção entre design e engenharia." (serve para os 19 temas)
- "As ferramentas se tornam mais acessíveis e a barreira de entrada cai." (serve para qualquer tema, e neste é provavelmente falso: `e2.2` e `e6.1.1` apontam custo subindo)
- "A IA acelera a produção de conteúdo 3D." (é o tema 14, não este)
- "Empresas precisarão se adaptar ou perder relevância."

Cortados por serem execução, não efeito: "engines publicam changelog de WebGPU"; "navegadores
atualizam tabela de compatibilidade".

Cortados por pertencerem a tema vizinho, conforme a fronteira declarada no enunciado: tudo sobre
**captura** de gaussianos (tema 10) e tudo sobre IA local fora do navegador (tema 16). O ramo D3
foi mantido estritamente dentro da porta do navegador.

Cortado por não ter como sustentar: "o navegador substitui o sistema operacional como camada de
aplicação em XR". É a pergunta de terceira ordem que o próprio enunciado levanta, e é a mais
interessante do tema — mas eu não tenho evidência nenhuma sobre ela, e escrevê-la como efeito
datado seria inventar. Fica aqui, nomeada e sem data, como o que este mapa não alcança.

Cortado por exceder o horizonte: um quarto nível em dois ramos (`e8.2.1` → direito de hardware
como pauta de acessibilidade; `e4.2.1` → legitimidade sobre o que se pode ver no próprio campo de
visão). Mencionados em prosa na seção 5, como a skill manda, em vez de gerados no YAML.

### 12.5 Os números que brigaram entre si

Registro de todas as cifras conflitantes encontradas para a mesma grandeza, porque a divergência
é o dado:

| Grandeza | Cifras encontradas | O que usei, e por quê |
|---|---|---|
| Cobertura global de WebGPU | 70% (`byteiota`), ~85% (PlayCanvas [13]), 87,35% (caniuse [2]), ~95% (guia de migração three.js) | **87,35% e ~85%.** As duas concordam e uma delas publica metodologia. 70% e 95% descartados. |
| Perda de performance de LLM no navegador contra nativo | 71-80% retidos (WebLLM, revisado [15]); "5-10× mais lento", 15-25 t/s contra 150 t/s (`9bench`) | **71-80%.** Único com aparelho, quantização e versão de navegador declarados. Pode ser que ambos estejam certos medindo pilhas diferentes; não pude verificar. |
| Ganho de WebGPU sobre WebGL 2 | "15×" (`byteiota`); 1× a 5,7× dependendo da contagem de primitivas (PlayCanvas [13]) | **1× a 5,7×,** com o intervalo inteiro. O limite inferior — o empate — é o número que mudou minha leitura de D1. |
| Comissão de loja | 30% (senso comum); 10%+5% a 25%+5%, e 15-20% em link externo (Google [20]); 26%/21%/15%/5% para a Apple (terceiros) | **Só os do Google.** A página da Apple que abri não declara taxa [25]. |
| Status do WebXR no Interop 2026 | "é área de foco" (`vr.org`); ausente da lista oficial ([4], [5]); issue fechada como "Done" ([6]) | **Ausente.** Proposto, não selecionado. |

### 12.6 Assunções feitas por falta de interlocutor

Três, todas declaradas conforme o briefing manda:

1. **"Quem projeta mídia e interação" inclui quem decide escopo e orçamento**, não só quem
   executa. Foi por isso que mantive os efeitos de custo (`e2.2`, `e6.1.1`, `e10.2.1`) com peso
   igual aos efeitos de capacidade. Se o público fosse só de execução, esses ramos seriam
   secundários.
2. **"Nota sobre o Brasil" significa uma nota integrada aos efeitos, não um apêndice.** Por isso
   `e8.1.1` está dentro da roda, e não numa seção separada. A alternativa — parágrafo isolado ao
   final — deixaria o dado brasileiro fora do que a máquina lê para gerar o infográfico.
3. **"Neutro" significa dar peso igual à evidência favorável e à contrária, não buscar meio-termo
   entre elas.** Consequência prática: quatro dos dez efeitos de primeira ordem (`e3`, `e5`, `e6`
   e `e10`) são desfavoráveis à tese do enunciado. Um mapa "neutro" lido como meio-termo teria
   dois.

### 12.7 O que ficaria para uma segunda rodada

Em ordem de valor, não de esforço:

1. **Medição de uso, não de capacidade.** Toda a seção 3 é sobre o que é possível. Nada é sobre o
   que acontece. Sem isso, W6 é irrefutável e D2 fica sem chão empírico.
2. **Um número honesto de inferência em navegador em aparelho de entrada.** Os 41 tok/s do WebLLM
   são de um M3 Max [15]. O que a disciplina precisa é o número num aparelho de R$ 900 — e é
   exatamente o que o experimento da seção 10 mediria.
3. **O relatório primário da TIC Domicílios**, em vez da cobertura [18], com a desagregação por
   capacidade de aparelho se ela existir.
4. **A trilha do `<model>`**: verificar se há segunda implementação anunciada e em que estado
   estão as issues de renderização consistente. Enquanto for um fornecedor, D4 é recurso de
   plataforma e não capacidade da web — e essa distinção decide os ramos `e9` e `e10`.
5. **Conferir se o WebXR entra no Interop 2027.** É o indicador mais baixo em custo e mais alto em
   sinal deste mapa inteiro: uma linha numa lista pública, uma vez por ano, que separa o cenário
   provável do indesejável.
