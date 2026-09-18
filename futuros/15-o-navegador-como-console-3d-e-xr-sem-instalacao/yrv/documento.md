---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: yrv
zona_de_interesse: "Criação e plataforma"
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 13
efeitos_ordem_3: 10
tecnologias_citadas: [WebGPU, WebXR, WGSL, WebGL, "WebGL 2", WebNN, WebAssembly, "WebAssembly 64", Dawn, wgpu, Vulkan, "Vulkan 1.1", Metal, "Direct3D 12", "Direct3D 11", "OpenGL ES 3.1", "WebGPU Compatibility Mode", "featureLevel: compatibility", "Three.js", WebGPURenderer, "Babylon.js", "Babylon.js 9.0", PlayCanvas, SuperSplat, "SuperSplat Editor 3.0", "A-Frame", "model-viewer", "Unity 6.6", "Unity WebGPU", "Immersive Web SDK", "Meta Quest Browser", "Horizon OS", "Android XR", "Samsung Galaxy XR", visionOS, "visionOS 26", "Safari 26", "Safari 26.2", "Chrome 113", "Chrome 121", "Chrome 146", "Chrome 148", "Firefox 141", "Firefox 145", "Firefox 147", "Samsung Internet", glTF, KHR_gaussian_splatting, "gaussian splatting", "3DGS", SPZ, SOG, SOGS, PLY, Draco, KTX2, "Prompt API", "Gemini Nano", "Transformers.js v4", "ONNX Runtime", "transient-pointer", "WebXR Hand Input", "WebXR Depth Sensing", "WebXR Hit Test", "WebXR Anchors", "WebXR Light Estimation", "Interop 2026", "web-platform-tests", CVE-2026-5281, "CISA KEV", WGPULens, Poki, CrazyGames, Playgama, "TIC Domicílios 2025"]
fontes: 27
confianca: media
experimento: "O teste do aparelho mais fraco — a turma publica UMA única cena 3D como link (sem instalação, sem loja) e cada pessoa abre no pior aparelho a que tem acesso, não no melhor; instrumenta-se a própria página para registrar qual caminho foi negociado (WebGPU nativo, WebGPU em modo de compatibilidade, WebGL 2, nada), tempo até o primeiro quadro, quadros por segundo sustentados e, sobretudo, ABANDONO ANTES DO PRIMEIRO QUADRO; a hipótese sob teste não é desempenho, é QUEM FICA DE FORA do 'sem instalação' — e o resultado que interessa é a diferença entre a taxa de sucesso no aparelho que a turma usa para estudar e a taxa no aparelho que ela tem em casa"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

Este mapa começa desfazendo uma ambiguidade da frase que abre o tema. *O navegador virou plataforma
de gráficos de primeira classe* é verdade, e é verificável: em 17/09/2026 o WebGPU está em Chrome,
Edge, Firefox e Safari, e o `caniuse` mede **87,35%** de cobertura global de uso. Só que essa frase
descreve o **substrato**, não a tendência. Rodar 3D no navegador sem instalar nada não é novidade: a
Poki declara **mais de 100 milhões de jogadores mensais em 2026, contra 10 milhões em 2020**, e a
Playgama contou **15 mil jogos HTML5 lançados só no primeiro semestre de 2025** — 4,9 vezes o número
de 2023. Isso é produto de massa. Pela régua da disciplina, e pelo que o recorte desta rodada mandou
descartar, está fora.

O que **muda o que é possível fazer** é outra coisa, e ela tem data. Em **24/08/2026** a Unity
anunciou que, "a partir do Unity 6000.6, a API gráfica WebGPU não é mais experimental — é agora um
recurso plenamente suportado". Em **09/09/2026** a PlayCanvas publicou o SuperSplat Editor 3.0
**reconstruído sobre WebGPU**, e o requisito deixou de ser educado: o editor **exige** WebGPU. Uma
cena de 4,4 milhões de gaussianas que ocupava **1.557 MB parada** passou a ocupar **105 MB** — uma
queda de 93%. Não é o mesmo produto mais rápido: é um produto que antes esgotava o navegador e agora
não esgota. E em **02/2026** o Khronos levou o `KHR_gaussian_splatting` do candidato à **ratificação**,
o que dá ao 3D capturado um formato de entrega comum pela primeira vez.

A disrupção, então, não é "dá para rodar 3D no navegador". É **o navegador deixar de ser a saída
degradada e passar a ser o alvo primário** — e, com isso, herdar as três coisas que o alvo primário
carrega: o requisito de hardware, o porteiro, e a responsabilidade pelo ativo.

O mapa também registra uma assimetria que quase todo texto sobre o tema apaga. **WebGPU e WebXR não
estão no mesmo lugar.** O `caniuse` mede WebGPU em 87,35% e WebXR em **77,15%** — mas o número do
WebXR esconde o que importa: o Safari no **iOS aparece como "não suportado" em todas as versões
rastreadas, da 3.2 à 27.1**, e o Firefox segue **desabilitado por padrão** desde a versão 77. WebXR
existe no Chromium, no navegador do Quest e no Safari do visionOS. No iPhone, não existe. E nem
WebXR nem WebGPU entraram nas áreas de foco do **Interop 2026** — conferi a lista no repositório do
`web-platform-tests`, e nenhum dos dois está lá. Quer dizer: a interoperabilidade dessas duas APIs
**não** é um compromisso público medido em placar por Google, Apple, Mozilla, Microsoft e Samsung
neste ano. É decisão unilateral de cada fornecedor.

Daí a terceira coisa que este mapa afirma, e que é a menos confortável: **a promessa de "sem loja de
aplicativos" se cumpre pela metade, porque o veto não desaparece — ele muda de mão.** Sai o curador
da loja, entra o fornecedor do motor de navegador. A diferença é que o curador da loja tem política
escrita e prazo de recurso, e o fornecedor do motor não precisa ter nenhum dos dois.

E a exclusão também muda de eixo, exatamente como a pergunta de 2ª ordem do tema suspeitava — só que
com número. A proposta de modo de compatibilidade do próprio grupo de trabalho do WebGPU registra
que **23% dos usuários de Android não têm Vulkan 1.1, e 15% não têm Vulkan nenhum**. O modo de
compatibilidade chegou no **Chrome 146, em 25/02/2026**, precisamente para cobrir esse buraco. No
Brasil o buraco tem outra forma: segundo a TIC Domicílios 2025 (coleta de março a agosto de 2025),
**86% dos domicílios têm acesso à Internet, 32% têm computador, e 65% dos usuários de Internet
acessam a rede exclusivamente pelo telefone celular** — 87% na classe DE. "Não instala nada" é uma
promessa de acesso. Ela só se cumpre onde há GPU.

### O que este mapa NÃO afirma

Não afirma que o aplicativo nativo acaba. Não afirma que a loja acaba. Não afirma que WebXR chega ao
iPhone no horizonte. E não trata de IA local no dispositivo em geral — isso é o tema 16; aqui o
modelo rodando no navegador entra apenas como **sinal fraco de convergência** (seção 6), porque ele
usa a mesma porta de GPU que o 3D e concorre pelos mesmos recursos.

## 2. O tema

**O tema em uma frase:** a passagem do navegador de porta de saída degradada a **alvo primário de
execução 3D e XR** — quando o jogo, o visualizador, o editor e a experiência imersiva deixam de ser
empacotados e passam a ser endereçados.

**O que NÃO é o tema** (a fronteira, fechada na Fase 1 e respeitada até o fim):

- **Não é capturar 3D.** Reconstrução, fotogrametria e treino de campo gaussiano são o tema 10. Aqui
  o campo já existe: o objeto é a **entrega e a execução** dele na web.
- **Não é IA local no dispositivo em geral.** Isso é o tema 16. Aqui entra só a parte "no navegador",
  e só como sinal, porque compartilha a porta de GPU.
- **Não é o que já é comum em produto de massa.** Jogo casual HTML5, WebGL, anúncio jogável, visor de
  produto em página de comércio: tudo isso é substrato, e a seção 3 o registra sem levá-lo à roda.
- **Não é percepção de vocabulário aberto nem visão computacional** (tema 11), ainda que os módulos
  de profundidade e de estimativa de luz do WebXR encostem nisso.

**Horizonte:** 2031. **Recorte:** global, com uma nota sobre o Brasil embutida no efeito `e5.2` e na
seção 7 — não como apêndice, porque é ali que o mapa muda de conclusão.

**Para quem:** quem projeta mídia e interação e precisa decidir, em projeto concreto, se entrega um
link, um aplicativo, ou os dois.

**Viés declarado:** neutro. **Falsificador declarado pelo demandante:** (a) evidência de que a adoção
**da prática** já passou da maioria inicial na escala de Rogers, ou (b) evidência de que a tecnologia
não rompe nada — só melhora o que existe. Os dois foram testados de verdade na seção 7, e um deles
quase derrubou a primeira raiz.

**Suposição minha, declarada:** o número de disrupções-raiz não foi definido pelo demandante. Adotei
**3**, pelo critério da própria ferramenta: menos de 3 esconderia a assimetria entre WebGPU e WebXR,
que é o achado central; mais de 4 viraria lista de tecnologias.

## 3. Onde isso está hoje

Esta seção existe para que a roda não invente o presente. Tudo aqui foi aberto por mim em 17/09/2026,
e o que não consegui apurar está dito.

### 3.1 O substrato gráfico — já chegou, e isto é o maduro

O WebGPU está nos quatro motores. O wiki de status de implementação do grupo `gpuweb` registra Chrome
desde a **113** em Mac, Windows e ChromeOS; **Android desde a 121** (ARM, Qualcomm e Intel;
Imagination a partir da 139); Linux com Intel Gen12+ desde a **144**. Firefox: **141 no Windows**,
**145 no macOS 26+ em Apple Silicon**, e **147 em todas as versões do macOS**. Safari: "no macOS
Tahoe 26, iOS 26, iPadOS 26 e visionOS 26, o WebGPU é suportado e habilitado por padrão". O anúncio
do web.dev que consolida isso é de **25/11/2025**. O `caniuse` fecha a conta em **87,35%** de
cobertura global de uso.

Nos motores, o mesmo movimento, com datas:

- **Three.js** — o `WebGPURenderer` é apresentado na documentação como "a nova alternativa ao
  `WebGLRenderer`", e o comportamento padrão já é: "por padrão, o renderizador tenta usar um backend
  WebGPU se o navegador suportar WebGPU. Se não, o `WebGPURenderer` cai para um backend WebGL 2."
- **Unity** — em **24/08/2026**, Brendan Duncan, do time de Web Graphics, anuncia: "a partir do Unity
  6000.6, a API gráfica WebGPU não é mais experimental — é agora um recurso plenamente suportado" e
  "graduou-se do rótulo experimental e está coberta pelo suporte padrão da Unity". O manual lista o
  que o WebGPU destrava e o WebGL2 não permite: **compute shaders, renderização indireta, skinning
  na GPU e VFX Graph**.
- **Babylon.js 9.0**, em **26/03/2026**: iluminação agrupada "funciona tanto em WebGPU quanto em
  WebGL 2", e iluminação volumétrica "tira pleno proveito dos compute shaders do WebGPU. WebGL 2
  também é suportado com degradações graciosas". WebGPU é preferido; não é exclusivo.
- **PlayCanvas / SuperSplat 3.0**, em **09/09/2026**: aqui o padrão se inverte. O editor foi
  reconstruído sobre WebGPU e **exige** WebGPU — "roda em Chrome, Edge, Safari 26+ e Firefox atuais
  com WebGPU habilitado". Projeção, descarte por frustum, compactação, ordenação por profundidade e
  submissão de desenho passaram a acontecer na GPU a cada quadro.

**O que é maduro nesta lista, e por quê.** Rodar 3D no navegador via WebGL: reprova T5 (é caminho de
instalação padrão, com preço estável e falhas documentadas há uma década). Motor nativo exportando
para a web: reprova T2 — sem ele, um time competente não mudaria o **objetivo**, só o custo e o
prazo. Jogo casual sem instalação: além de reprovar T5, é exatamente o que o recorte descartou. Nada
disso vai à roda. Tudo isso é substrato.

### 3.2 O substrato imersivo — chegou pela metade, e a metade importa

A especificação **WebXR Device API** está em **Candidate Recommendation Draft de 09/06/2026**,
segundo o histórico de publicações do W3C. O que já existe em produto:

- **Android XR / Samsung Galaxy XR** — o aparelho foi apresentado em **21–22/10/2025** a US$ 1.799.
  A documentação do Google para desenvolvedores web afirma, sem rodeio, que "o Chrome no Android XR
  suporta WebXR", e lista os módulos suportados: **Device API, AR Module, Gamepads, Hit Test, Hand
  Input, Anchors, Depth Sensing e Light Estimation**. Recomenda `three.js` e `babylon.js` para
  controle total, e `A-Frame` e `model-viewer` para prototipação.
- **Apple / visionOS** — o WebXR chegou no Safari 18.0 do visionOS 2, em setembro de 2024, com o modo
  de entrada `transient-pointer` (olhar e pinçar). Em **12/12/2025**, o WebKit anuncia o passo que
  fecha o par: "agora, com o Safari 26.2 no visionOS, o WebXR suporta WebGPU. Isso significa que você
  pode construir experiências em WebXR com todo o poder do WebGPU."
- **Meta / Horizon OS** — o navegador do Quest segue mantido e recebendo WebXR; não achei sinal de
  descontinuação.

**E aqui está o buraco.** O `caniuse` mede WebXR em **77,15%**, mas com esta composição: Safari no
**iOS**, "não suportado" em **todas** as versões rastreadas, da 3.2 à 27.1. Safari no desktop,
"desabilitado por padrão". Firefox, "desabilitado por padrão" da versão 77 à 159. Quem suporta é
Chrome, Edge, Opera, Chrome para Android e Samsung Internet — mais o navegador do Quest e o Safari do
visionOS. **A plataforma imersiva universal da web é, hoje, a plataforma imersiva do Chromium.**

E o dado que amarra: abri o `README` do **Interop 2026** no repositório do `web-platform-tests`. As
áreas de foco são consultas de estilo de contêiner, posicionamento por âncora em CSS, `attr()`,
`contrast-color()`, `zoom`, destaques personalizados, diálogos e popovers, envios e faixas no Fetch,
IndexedDB, JSPI para Wasm, pseudoclasses de mídia, Navigation API, registros de elementos
personalizados com escopo, animações dirigidas por rolagem, encaixe de rolagem, `shape()`, transições
de visualização, compatibilidade web, WebRTC e WebTransport. As investigações são acessibilidade,
JPEG XL, teste em móvel e WebVTT. **Nem WebXR nem WebGPU estão na lista.**

### 3.3 A porta da GPU também é a porta do modelo — e isso é sinal, não raiz

Pela fronteira, isto não vira disrupção-raiz aqui. Mas é presente, e é presente datado:

- **Transformers.js v4**, publicado em **30/03/2026** (data confirmada na API do GitHub, não no
  resumo — ver seção 8): "a maior mudança é, sem dúvida, a adoção de um novo runtime WebGPU,
  completamente reescrito em C++", testado em cerca de 200 arquiteturas de modelo, e agora rodando
  também em Node, Bun e Deno. O anúncio relata **GPT-OSS 20B (q4f16) a ~60 tokens por segundo num M4
  Pro Max** e redução média de 10% no tamanho dos pacotes.
- **Prompt API do Chrome** — a documentação oficial lista requisitos de operação que dizem tudo sobre
  quem fica de fora: **"pelo menos 22 GB de espaço livre"** no volume do perfil, **"estritamente mais
  de 4 GB de VRAM"**, e **"16 GB de RAM ou mais e 4 núcleos de CPU ou mais"**.
- **WebNN** — o W3C publicou Candidate Recommendation atualizada em **22/01/2026**, com comentários
  abertos até 22/03/2026. Ainda aguarda implementações independentes.

### 3.4 Formato: o 3D capturado ganhou unidade de troca

O Khronos anunciou a extensão `KHR_gaussian_splatting` para glTF 2.0 em **03/02/2026**, como release
candidate, com ratificação prevista para o segundo trimestre de 2026. Em 17/09/2026, o `README` da
extensão no repositório do glTF traz o estado **"Complete, Ratified by the Khronos Group"** — está
ratificada. A lista de contribuintes inclui Cesium, Niantic Spatial, Esri, Nvidia, Huawei, Autodesk e
o próprio Khronos. Os adotantes iniciais citados na nota são CesiumJS, Esri ArcGIS, Scaniverse da
Niantic Spatial e XGRIDS.

O detalhe que a seção 7 vai cobrar: a extensão declara-se **suporte básico**, deliberadamente
projetada para ser estendida — "permitindo que extensões futuras introduzam novos tipos de kernel,
espaços de cor, métodos de projeção e métodos de ordenação". Ratificado não é o mesmo que
interoperável.

O Babylon.js 9.0 já lê **.PLY, .splat, .SPZ e .SOG/.SOGS**.

### 3.5 A cobertura de hardware, com número

A proposta de **modo de compatibilidade** do grupo de trabalho do WebGPU é o documento mais honesto
que li sobre o assunto, porque ele existe para admitir o problema: "o WebGPU é um bom par para APIs
gráficas explícitas modernas como Vulkan, Metal e D3D12. Entretanto, há um grande número de
dispositivos que ainda não suportam essas APIs." Os números que ela cita: **31% dos usuários de
Chrome não têm D3D11.1 ou superior**; **23% dos usuários de Android não têm Vulkan 1.1, sendo que 15%
não têm Vulkan nenhum**; no ChromeOS, a penetração do Vulkan "ainda é bastante baixa, enquanto o
OpenGL ES 3.1 é onipresente". O Intent to Ship repete o número do Android e fixa o marco: **entrega
na 146 no desktop, no Android e no WebView**. O blog do Chrome confirma em **25/02/2026**: o modo é
opcional, ativado com `featureLevel: "compatibility"` em `requestAdapter()`, e permite rodar WebGPU
sobre APIs antigas como OpenGL ES 3.1.

### 3.6 Custo de estar na aba: segurança e privacidade

Em **01/04/2026** o Google corrigiu a **CVE-2026-5281**, uso após liberação no **Dawn**, a
implementação do WebGPU usada pelo Chromium, **com exploração já observada em circulação** —
corrigida no Chrome 146.0.7680.177/178, uma entre 21 vulnerabilidades daquele lote. Em **24/06/2026**,
Igor Santos-Grueiro publicou *"What Browsers Do in the Shaders: A Measurement Study of WebGPU
Privacy"*, que introduz o arcabouço WGPULens e identifica o **estado de compilação de pipeline** como
a principal superfície de privacidade; o estudo de campo mostra que o comportamento ativo de WebGPU é
"altamente distintivo" na amostra, com estabilidade variável entre visitas. O mesmo trabalho registra,
com honestidade, que numa varredura de sites públicos o WebGPU aparecia sobretudo em sondagem de
adaptador e código estático — a exposição real ainda é pequena.

### 3.7 O Brasil, em número

Da TIC Domicílios 2025 (CGI.br; 27.177 domicílios e 24.535 indivíduos respondentes; coleta de março a
agosto de 2025; apresentação de 09/12/2025): **86% dos domicílios com acesso à Internet** (contra 51%
em 2015); **32% dos domicílios com computador** — e **10% na classe DE**; **65% dos usuários de
Internet acessam exclusivamente pelo telefone celular**, cinco pontos acima do ano anterior, chegando
a **87% na classe DE**. A leitura consolidada desses números por veículo especializado bate com o que
li no PDF da coletiva.

## 4. As disrupções-raiz

Três. Cada uma com o que rompe, o sinal datado que responde "por que agora e não há cinco anos", e a
precondição que ainda falta — que é de onde sai a prova P5 da Fase 5.

### R1 — O navegador deixa de ser saída degradada e passa a ser alvo gráfico primário

**O que rompe.** Rompe a obrigação, que durava uma década, de manter **duas pilhas gráficas**: a
completa (nativa) e a empobrecida (web). Com ela, rompe a competência de **portar** — o ofício de
reduzir uma cena até caber no que o navegador suportava. E rompe a premissa de que a página não pode
ter requisito de hardware: passa a ter, e declarado.

**Por que agora e não há cinco anos.** Há cinco anos o WebGPU não existia em navegador estável. O
sinal não é "os navegadores adotaram" — é **uma ferramenta profissional ter deixado de oferecer
alternativa**: SuperSplat Editor 3.0, **09/09/2026**, exige WebGPU e mede a diferença (1.557 MB →
105 MB numa cena de 4,4 milhões de gaussianas). E é **a Unity ter tirado o rótulo experimental em
24/08/2026**, o que significa que o backend passou a ser coberto por suporte comercial. Compute
shader, renderização indireta e VFX Graph no navegador não são "mais rápido": são coisas que o
WebGL 2 não faz.

**O que ainda falta acontecer.** Falta o modo de compatibilidade cobrir os 23% de Android sem
Vulkan 1.1 **fora do Chrome** — hoje ele é do Chrome 146, e a proposta é do grupo de trabalho, não
uma entrega dos quatro motores. E falta o Firefox sair do rastro de plataformas parciais no Linux e
no Android.

**Classificação.** Passa T1 (muda o que é possível), T2 (sem WebGPU, o objetivo muda: não se edita
uma cena de 4,4 milhões de gaussianas na aba), T3 (sinais de 08 e 09/2026), T4 (precondição
nomeável), e **não** aprova T5 (não é rotina: a maioria ainda mantém fallback). **Emergente.**
Disruptivo porque torna sem valor a competência de portar e de manter duas pilhas, e entra por
**mercado novo** — o editor de campo gaussiano e o visualizador de scan que nunca justificaram um
aplicativo — e pela **baixa** — o produto gráfico que não valia empacotar. **H2+ rumo a H3.**

### R2 — A porta de entrada da experiência imersiva vira o URL, e o porteiro troca de crachá

**O que rompe.** Rompe a **curadoria de loja como filtro obrigatório** para experiência imersiva, e o
empacotamento por SDK de fabricante como condição de existir no aparelho. O que **não** rompe — e é
por isso que esta raiz é a mais desconfortável do mapa — é a existência de um porteiro. Ela apenas o
move: do curador da loja, que tem política publicada e prazo de recurso, para o **fornecedor do motor
de navegador**, que não precisa ter nem uma coisa nem outra.

**Por que agora e não há cinco anos.** Três sinais datados. O **Android XR** chegou em aparelho de
consumo em **21–22/10/2025** com o Chrome expondo oito módulos de WebXR, inclusive profundidade,
âncoras e entrada por mão — não é um subconjunto de cortesia. O **Safari 26.2 do visionOS**, em
**12/12/2025**, uniu WebXR e WebGPU, o que só faz sentido se a Apple espera conteúdo pesado ali. E a
especificação chegou a **Candidate Recommendation Draft em 09/06/2026**.

**O que ainda falta acontecer.** Falta o WebXR existir no Safari do **iPhone** — hoje o `caniuse`
registra "não suportado" em toda a linha do tempo, da 3.2 à 27.1. E falta algo mais sutil e mais
decisivo: **falta o WebXR entrar num compromisso público de interoperabilidade medido**. Ele não está
no Interop 2026, e enquanto não estiver, uma falha de conformidade continua sendo nota de rodapé no
rastreador de bugs de alguém, e não número num placar que cinco fornecedores concordaram em observar.

**Classificação.** Passa T1, T2, T3 e T4; não aprova T5. **Emergente.** Disruptivo por **mercado
novo**: a peça imersiva curta que nunca justificaria instalação — a visita, a demonstração, a
devolutiva, o anúncio. Mas com um veto já exercido e nomeado. **H2+, com risco real de virar H2−**:
se o WebXR só existir como rota alternativa dentro de aparelhos que já têm loja própria, ele escora o
presente em vez de abrir o futuro.

### R3 — O ativo 3D pesado passa a ser entregue e editado na aba, e a unidade de troca deixa de ser a malha

**O que rompe.** Rompe a **cadeia de ativos** construída em torno da malha: modelagem, UV,
otimização, LOD, material. Rompe o pressuposto de que o trabalho 3D mora num arquivo local aberto por
um programa instalado. E rompe a divisão entre quem captura e quem publica, porque o mesmo artefato
atravessa as duas etapas sem conversão de formato.

**Por que agora e não há cinco anos.** Há cinco anos não havia formato comum, e o campo gaussiano nem
existia em produção. Agora há: `KHR_gaussian_splatting` **ratificado pelo Khronos** (anunciado como
candidato em 03/02/2026 e ratificado desde então), com Cesium, Niantic, Esri, Nvidia, Huawei e
Autodesk entre os contribuintes. E há o leitor: Babylon.js 9.0 lendo .PLY, .splat, .SPZ e .SOG/.SOGS
desde **26/03/2026**, e o SuperSplat 3.0 editando na aba desde **09/09/2026**.

**O que ainda falta acontecer.** Falta a extensão deixar de ser **"suporte básico"**. O próprio texto
diz que tipos de kernel, espaços de cor, métodos de projeção e métodos de ordenação ficam para
extensões futuras — ou seja, dois leitores conformes ainda podem mostrar coisas diferentes. Ratificar
o contêiner não é ratificar a aparência.

**Classificação.** Passa T1 (a unidade de troca muda), T2 (sem isto, o objetivo muda: não se entrega
um scan de 990 MB como link), T3, T4; não aprova T5. **Emergente**, e disruptivo por **mercado novo**
— o cliente que nunca comprou 3D porque não ia instalar nada para ver. **H2+.**

### Uma candidata que NÃO virou raiz, e por quê

**O navegador como console de modelo de IA.** Passa em todos os testes de maturidade — Transformers.js
v4 com runtime WebGPU em C++ (30/03/2026), Prompt API no Chrome, WebNN em CR (22/01/2026) — e seria
disruptiva por mercado novo. **Não entra como raiz porque a fronteira do tema a exclui**: IA local no
dispositivo é o tema 16. Entra na seção 6 como sinal fraco e como nota de convergência na seção 5,
porque compartilha literalmente a mesma porta de hardware e concorre pelos mesmos 4 GB de VRAM.

## 5. A roda dos futuros

Método: **Futures Wheel** (Glenn, 1971). A regra de expansão é declarada e é minha, herdada do
`ESTUDO.md`: **expandir um nó só se o filho mudar de ator ou de mecanismo em relação ao pai.** Os
efeitos abaixo já passaram pela bateria da Fase 5 — o que morreu está na seção 12.3, com o `id`
original e a prova que o matou.

```yaml
roda:
  - disrupcao: "O navegador deixa de ser saida degradada e passa a ser alvo grafico primario: WebGPU como alvo, nao como bonus"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O fallback para WebGL 2 deixa de ser obrigatorio em ferramenta profissional, e a exigencia de GPU passa a ser requisito de sistema declarado na propria pagina"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A pagina de experiencia 3D passa a trazer ficha tecnica de hardware antes de abrir, e nao instala nada convive com seu aparelho nao roda"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Capacidade de GPU entra nos criterios de acessibilidade digital ao lado de contraste e leitor de tela, e vira item verificavel em edital de compra publica"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A competencia de engenharia grafica, orcamento de memoria e perfilagem de GPU migra do time de motor para o time de front-end, que nao foi contratado para isso"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A formacao em design de interacao se parte em duas trilhas com pouca intersecao, documento e superficie grafica, e o generalista de front-end perde preco"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: "O driver grafico entra na superficie de ataque do navegador, e a area de seguranca corporativa ganha motivo escrito para desligar a GPU da aba"
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "A experiencia 3D no navegador e bloqueada por politica na rede corporativa e na rede escolar, e o sem instalacao perde exatamente o publico que nao podia instalar"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A conta de servidor grafico e de inferencia sai da planilha do produto, e junto com ela sai o registro de quem usou o que"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O modelo de cobranca por chamada de API perde base numa faixa de produtos, porque o processamento acontece onde o fornecedor nao mede"
            sinal: medio
            prazo: 2030
            confianca: media
          - id: e2.2
            ordem: 2
            efeito: "Processar sem que o dado saia do aparelho vira argumento comercial explicito, e a conformidade passa a ser afirmada na interface em vez de no contrato"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A auditoria de privacidade muda de objeto: deixa de perguntar para onde o dado foi e passa a perguntar o que o codigo baixado fez enquanto rodava"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "A porta de entrada da experiencia imersiva vira o URL, e o porteiro troca de cracha: sai o curador da loja, entra o fornecedor do motor de navegador"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "A distribuicao de experiencia imersiva se parte por motor de navegador: existe no Chromium e no visionOS, e nao existe no iPhone"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O fornecedor do navegador assume a funcao que era da loja, decidir o que o aparelho deixa ver, sem publicar criterio nem prazo de recurso"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A regulacao de plataforma passa a tratar a lista de APIs suportadas pelo motor de navegador como obrigacao verificavel, e nao como decisao de produto"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "A agencia entrega link e aplicativo ao mesmo tempo e cobra pela manutencao das duas rotas, em vez de escolher uma e defende-la"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Imersivo deixa de nomear um meio e passa a nomear um grau, e a peca e especificada por quanto ela degrada, nao por qual oculos ela exige"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "A experiencia imersiva curta deixa de pedir instalacao e entra na campanha ao lado de video e imagem, com o mesmo prazo e o mesmo orcamento"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O briefing passa a trazer um piso de aparelho e um numero de quadros por segundo, e o criativo negocia com o requisito tecnico antes de desenhar"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A metrica de midia imersiva se separa da metrica de video, e a comparacao entre as duas deixa de caber no mesmo plano de midia"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Museu, acervo e patrimonio publicam cena visitavel por link e herdam um custo de manutencao de software que nao estava no orcamento de acervo"
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: "O ativo 3D pesado passa a ser entregue e editado na aba, e a unidade de troca deixa de ser a malha"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "O entregavel 3D deixa de ser malha otimizada e passa a ser campo capturado com visualizador embutido, endereçado por URL"
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O oficio de otimizacao de malha e de nivel de detalhe perde o centro, e quem vive dele migra para captura, limpeza e edicao de campo"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O portfolio de 3D deixa de mostrar wireframe, e a prova de competencia passa a ser quanto se removeu sem que ninguem percebesse"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Em mercado de acesso majoritariamente movel, a cena pesada na aba reproduz a exclusao que prometia resolver: o link chega a todos e o quadro por segundo nao"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "O piso de aparelho entra no contrato de servico publico digital, e funciona no navegador deixa de ser aceito como prova de universalidade"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A ferramenta de autoria 3D migra para a aba, e o arquivo local deixa de ser o lugar onde o trabalho mora"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A revisao da cena acontece na mesma aba em que ela e editada, e o cliente passa a opinar sobre o que antes so via renderizado e parado"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A disputa sobre o que foi aprovado muda de natureza, porque cada versao tem endereco e o registro de aprovacao deixa de depender de anexo de e-mail"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A posse do arquivo de trabalho passa a depender do contrato de um servico, e o estudio descobre que nao tem copia do que produziu"
            sinal: fraco
            prazo: 2030
            confianca: baixa
```

### 5.1 Comentário em prosa — e as notas de convergência

A roda é uma **árvore**, e o `ESTUDO.md` já registra para que ela não serve: representar
retroalimentação. Três coisas neste mapa só existem no cruzamento de duas raízes, e por isso ficam
fora dos galhos, aqui:

**Convergência 1 — R1 × o tema 16 (IA local).** O modelo carregado na aba e a cena 3D pesada disputam
**a mesma GPU e a mesma memória de vídeo**. A documentação do Prompt API do Chrome pede
"estritamente mais de 4 GB de VRAM"; o SuperSplat 3.0 celebra ter derrubado o consumo de uma cena de
1.557 MB para 105 MB justamente porque isso não cabia. À medida que os dois amadurecem, o navegador
vira um **sistema operacional sem escalonador declarado**: duas abas competindo por um recurso que
nenhuma das duas sabe que a outra está usando. Nenhum efeito da roda captura isso, porque ele exige
as duas raízes.

**Convergência 2 — R2 × R3.** O `KHR_gaussian_splatting` ratificado e o WebXR em Candidate
Recommendation formam, juntos, uma rota de ponta a ponta: capturar, entregar por link, e ver dentro
do óculos sem instalar. Separadamente, cada um é uma conveniência. Juntos, são a primeira vez que a
cadeia inteira de uma experiência imersiva cabe num endereço. Mas essa rota **não existe no iPhone**,
e é ali que está a maior parte do público de alto poder aquisitivo no mundo — o que faz dela uma rota
comercialmente estranha: tecnicamente completa, mercadologicamente truncada.

**Convergência 3 — R1 × R2, em sentido contrário.** As duas raízes **se anulam parcialmente**, e a
árvore não sabe somar isso. R1 diz que o navegador vira alvo primário porque o hardware ficou
acessível pela API. R2 diz que o acesso depende de quem controla o motor. Se R2 vencer — se o veto do
fornecedor for a força dominante —, R1 vira **H2−**: uma inovação que faz o arranjo atual durar mais,
porque o fabricante do aparelho passa a ter uma web gráfica boa o suficiente para não ser acusado de
fechamento, e ruim o suficiente para não ameaçar a loja. Quem lê a árvore soma os galhos, e eles não
somam.

## 6. Sinais fracos e wildcards

### Sinais fracos — coisas pequenas que, se crescerem, mudam a leitura

**O navegador como console de modelo, não só de gráfico.** Transformers.js v4 rodando WebGPU em Node,
Bun e Deno (30/03/2026) significa que o runtime deixou de ser "do navegador": virou um runtime
portátil que **usa a API do navegador**. Se isso continuar, a fronteira entre web e nativo deixa de
ser onde está hoje — não porque a web ganhou, mas porque a API dela vazou para fora.

**O modo de compatibilidade como admissão pública.** O que interessa na proposta do WebGPU não é o
recurso: é o fato de o grupo de trabalho ter **escrito os números da exclusão num documento
público**. 23% do Android sem Vulkan 1.1; 31% dos usuários de Chrome sem D3D11.1. Grupos de
padronização raramente publicam o tamanho do próprio buraco.

**A extensão ratificada que se declara básica.** O `KHR_gaussian_splatting` foi desenhado para ser
estendido, e deixa fora kernel, espaço de cor, projeção e ordenação. Se cada motor preencher esses
buracos à sua maneira, o formato comum vira formato de transporte com aparência divergente — o que já
aconteceu com glTF e materiais, e demorou anos para convergir.

**A exposição real do WebGPU ainda é pequena.** O estudo de privacidade de 24/06/2026 registra que,
numa varredura de sites públicos, o WebGPU aparecia sobretudo em sondagem de adaptador e código
estático — sem atividade de shader, pipeline, fila ou mapeamento durante o carregamento. Ou seja: a
API está em quase todo navegador e **quase ninguém a está usando de verdade ainda**. Este é o sinal
que mais pesa contra a velocidade suposta neste mapa.

**A ausência do Interop.** Não é um sinal do que vai acontecer; é um sinal do que **não** foi
prometido. Nem WebXR nem WebGPU estão nas áreas de foco do Interop 2026.

### Wildcards

**O wildcard que o tema propôs, e que já é meio-realidade.** "Uma fabricante de óculos bloquear WebXR
por default." Não precisa acontecer: em aparelho de bolso **já é o estado atual** — o Safari do
iPhone não expõe WebXR, e o `caniuse` registra isso em toda a linha de versões. O wildcard real é o
inverso: **a Apple ligar o WebXR no iPhone**. Se isso acontecer dentro do horizonte, `e3`, `e3.1` e
`e3.1.1` perdem a razão de ser, e a segunda raiz muda de forma inteira.

**Uma vulnerabilidade de driver explorada em escala.** A CVE-2026-5281 no Dawn foi corrigida em um
dia útil e com exploração já observada. Uma segunda, mais grave, num componente compartilhado por
todos os navegadores Chromium, produziria a resposta que a indústria de TI corporativa já tem pronta:
desligar. O efeito `e1.3.1` é o galho que isso transformaria de sussurro em regra.

**O navegador deixar de ser o lugar.** O agente que navega em nome da pessoa não precisa de GPU nem
de aba. Se a interação com serviço migrar para agente, a "plataforma universal" volta a ser
infraestrutura invisível, e todo este mapa muda de público: não descreveria mais o que a pessoa vê,
e sim o que a máquina renderiza para si mesma — o que é uma contradição em termos.

## 7. Contra o próprio mapa

### 7.1 O falsificador declarado, aplicado de verdade

O demandante declarou que mudaria de ideia diante de **(a)** evidência de que a adoção já passou da
maioria inicial na escala de Rogers, ou **(b)** evidência de que a tecnologia não rompe nada.

**Sobre (a): o falsificador quase venceu, e é preciso dizer onde ele parou.** O `caniuse` mede
**87,35%** de cobertura de WebGPU. Em qualquer leitura ingênua de Rogers, 87% está muito além da
maioria inicial — está na maioria tardia. Se o objeto do mapa fosse *a disponibilidade da API*, o
mapa estaria refutado e eu deveria ter recusado o tema inteiro.

Não está, por uma distinção que o mapa precisa sustentar sob pressão: **87% é adoção pelo fornecedor
do navegador, não adoção da prática.** A prática é *projetar tendo o navegador como alvo primário*, e
a medida dela aponta para o outro lado: o estudo de privacidade de junho de 2026 encontrou, em
varredura de sites públicos, WebGPU usado quase só para sondar o adaptador; a Unity só tirou o rótulo
experimental em agosto de 2026; e a única ferramenta profissional que conheço a **exigir** WebGPU tem
oito dias de idade em relação a esta rodada. A curva que interessa mal saiu dos inovadores.

**Isto é uma escolha interpretativa minha, e ela é atacável.** Quem sustentar que a unidade de adoção
correta é a API — e não a prática — tem um argumento defensável, e nesse caso este mapa é um mapa de
tecnologia madura escrito como se fosse emergente. Registro isso como a **maior fragilidade única do
documento**, e não como detalhe.

**Sobre (b): parcialmente procedente, e já cobrado.** Boa parte do que se anuncia como "WebGPU" é
melhoria: a mesma cena, mais rápida, com menos memória. Isso reprova T1 e foi recusado na Fase 2 —
motor nativo exportando para web, jogo casual HTML5, WebGL em geral. O que sobreviveu foi o que muda
**o objetivo**: editar 4,4 milhões de gaussianas na aba, rodar compute shader, entregar um scan de
990 MB por link. Se alguém demonstrar que esses três também eram possíveis em WebGL 2 com engenharia
suficiente, a primeira raiz cai.

### 7.2 A camada que o mapa supõe permanente (CLA)

Passando os efeitos principais pelas quatro camadas de Inayatullah:

- **Litania** — "o navegador virou console"; "sem instalar nada"; "87% de suporte".
- **Causas sistêmicas** — o custo de manter duas pilhas gráficas; a taxa e o prazo da loja; a queda
  do custo de computação no cliente; a existência de um formato comum para o 3D capturado.
- **Visão de mundo** — e aqui está o achado: **o mapa inteiro repousa sobre "instalar é atrito, e
  atrito é ruim"**. Todo efeito que trata "sem instalação" como ganho supõe que o objetivo é
  *reduzir a distância até o primeiro uso*.
- **Mito/metáfora** — "a web como praça pública": um lugar sem dono onde qualquer um entra por um
  endereço.

**A pergunta que derruba metade da roda:** e se a métrica de sucesso deixar de ser *alcance* e passar
a ser *permanência*? A própria pesquisa da Poki, em 25/06/2026, mostra o caminho: **62% dos jogadores
web já baixaram ou compraram um jogo depois de descobri-lo na web — 72% entre os mais frequentes**.
Nessa leitura, o navegador não é o destino: é a **vitrine** do aplicativo. Se o mercado premiar
permanência em vez de alcance, instalar deixa de ser atrito e volta a ser **ativo** — e `e3`, `e4`,
`e6` e seus filhos trocam de sinal sem que um único fato técnico mude. Este é o cenário indesejável
da seção 9, e ele não depende de nenhuma tecnologia falhar.

E o mito também é atacável. "Praça pública sem dono" é falso em produto: o `caniuse` mostra que a
praça imersiva tem dono, tem portão, e o portão do iPhone está fechado.

### 7.3 O que a bateria adversarial cobrou

A Fase 5 **derrubou coisas**, e a seção 12.3 lista cada uma com o `id` e a prova. Em resumo: três
efeitos eliminados (um por P1, um por P2, um por P3), um rebaixamento de confiança de `alta` para
`media` no efeito `e1`, e um galho inteiro reescrito depois que P3 mostrou que ele já era presente.

**A prova que mais doeu foi P5 — precondição única.** Os galhos de `e1`, `e5` e `e6` — nove efeitos
somados — dependem todos de **uma só coisa**: cobertura de GPU suficiente para que se possa exigir
WebGPU sem perder público. Se o modo de compatibilidade ficar restrito ao Chrome, se o Firefox não
completar Linux e Android, e se os 23% de Android sem Vulkan 1.1 não encolherem, esses nove efeitos
caem juntos. **Não são nove apostas: é uma aposta contada nove vezes.** Um mapa honesto tem de dizer
isso, porque a árvore não diz.

### 7.4 Três coisas que não consegui apurar

- **A afirmação de que o Babylon.js 8.0 "tornou o WebGPU o backend padrão".** Apareceu em resultado de
  busca; o anúncio primário da versão 9.0 que abri descreve WebGPU como preferido com WebGL 2 como
  degradação graciosa, o que não é a mesma coisa. Não abri o anúncio da 8.0. **Não consegui apurar.**
- **O estado atual do litígio sobre comissão de loja nos Estados Unidos.** Tentei a decisão do Nono
  Circuito na Justia e recebi 403. Como a economia da loja seria um argumento importante para R2, e eu
  não abri a fonte, **deixei o argumento fora do mapa** em vez de escorá-lo em resumo de busca.
- **A penetração de Vulkan no ChromeOS.** A proposta diz "ainda é bastante baixa" e não dá número.
  **Não consegui apurar.**

## 8. O que a máquina errou

Cinco erros apanhados nesta rodada. Todos por **atrito externo** — nenhum por releitura atenta, que é
exatamente o que o `DUVIDAS.md` previa.

**1. A fonte que afirmou que WebXR é área de foco do Interop 2026.** Um resultado de busca afirmava,
com naturalidade, que "o WebXR Device API chegou a Candidate Recommendation e é agora uma área de
foco proposta do Interop 2026", e descrevia o mecanismo do placar compartilhado em detalhe
convincente. Abri o `README` do Interop 2026 no repositório do `web-platform-tests` e li a lista
inteira: **nem WebXR nem WebGPU estão nela**. *Como percebi:* o texto era bom demais — explicava o
funcionamento do programa com precisão e a participação do WebXR sem citar a lista. Detalhe correto
ao redor de uma afirmação não verificada é a forma clássica do erro. Este importava: a ausência do
Interop virou uma das vigas da segunda raiz.

**2. O ano da versão 4 do Transformers.js, errado por um.** O resumo da página de release devolveu
**"March 30, 2025"**. A API do GitHub devolve `published_at: 2026-03-30T12:55:30Z`. *Como percebi:* o
próprio corpo do texto diz "depois de um ano de desenvolvimento (começamos em março de 2025)" — as
duas coisas não podiam ser verdade ao mesmo tempo. O resumo colheu a data errada da frase errada. É o
mesmo erro do `DUVIDAS.md`: **data inferida de expressão relativa e apresentada como fato**.

**3. "Safari 18 entrega WebXR nativo em todo o ecossistema Apple."** Frase de um resultado de busca,
que ainda datava o Safari 18 de "final de 2024 junto com iOS 18, iPadOS 18 e macOS Sequoia". A parte
das datas está certa; a conclusão é falsa. O WebKit diz "o suporte a WebXR chegou primeiro no Safari
18.0 no **visionOS 2**", e o `caniuse` registra o Safari do iOS como não suportado em **todas** as
versões, e o Safari do desktop como desabilitado por padrão. *Como percebi:* eu já tinha o `caniuse`
aberto e as duas leituras não batiam. Referência verdadeira, conclusão de outra pessoa — o erro mais
perigoso do `DUVIDAS.md`, porque quem confere vê que o Safari 18 existe e para ali.

**4. "70% de suporte a navegador" para WebGPU.** Número redondo, sem fonte, repetido em pelo menos
dois resultados. O `caniuse` mede **87,35%**. *Como percebi:* pela forma, antes do conteúdo — número
redondo em manchete é a assinatura descrita na invariante da própria ferramenta. Não usei.

**5. Um erro meu de estrutura, pego pelo script e não pela leitura.** O primeiro rascunho da roda dava
**um** efeito de primeira ordem por raiz, quando a própria Fase 4 exige de 2 a 4 por nó pai. Reli o
rascunho duas vezes sem ver: três raízes com um efeito cada parece um mapa enxuto, não um mapa
errado. Pegou a conferência contra a tabela de limites de largura. É o caso "14 e 14 eram 12 e 12" do
`DUVIDAS.md`, na outra ponta: **nenhuma releitura pega, porque o errado é tão plausível quanto o
certo.**

**E um caso que não foi erro, e é o mais instrutivo.** Escrevi de memória, antes de conferir, que o
WebGPU tinha chegado ao Chrome estável na versão 113. Está certo — o wiki do `gpuweb` confirma. E por
dentro era **indistinguível** de estar errado: a mesma confiança que acompanhou o "Safari 18 em todo
o ecossistema" acompanhou essa.

## 9. Três cenários para 2031

Nenhum é previsão. Cada um é uma configuração coerente das forças já nomeadas, e cada um indica **o
que observar para saber em qual estamos**.

### 9.1 Desejável — "A aba como console de verdade"

O modo de compatibilidade sai do Chrome e vira comportamento dos quatro motores; os 23% de Android
sem Vulkan 1.1 encolhem pela troca natural de aparelho; o Firefox completa Linux e Android; a Apple
liga o WebXR no Safari do iPhone; e o `KHR_gaussian_splatting` ganha as extensões de kernel, cor e
ordenação que o tornam de fato interoperável. O resultado: a experiência 3D e imersiva é um endereço,
funciona no aparelho que a pessoa tem, e o requisito de hardware é declarado e degradável em vez de
ser uma porta fechada.

**Como saber se estamos aqui:** WebXR aparece nas áreas de foco de um Interop futuro. É o teste mais
barato que existe, porque é uma lista pública de uma linha.

### 9.2 Provável — "Duas webs"

A web gráfica de primeira classe consolida-se no Chromium e no desktop; a web de documento continua
em todo o resto. O "sem instalação" cumpre-se para quem tem GPU e não se cumpre para quem não tem. O
WebXR permanece rota do Chromium e do visionOS, e quem produz experiência imersiva entrega **duas**
coisas — o link e o aplicativo — e cobra pelas duas. O Brasil vive a versão aguda disso: o link chega
aos 86% de domicílios conectados e a cena pesada chega a bem menos que os 32% que têm computador,
porque 65% dos usuários só têm o celular.

**Como saber se estamos aqui:** a ficha técnica de hardware aparecer na página antes da cena — `e1.1`
— é o sintoma visível deste cenário, e é o primeiro a aparecer.

### 9.3 Indesejável — "O porteiro trocou de crachá, e a métrica trocou de nome"

Duas coisas acontecem juntas, e nenhuma delas é uma falha técnica. Primeira: o veto sobre o que se
pode ver migra em definitivo da loja para o fornecedor do motor, que não publica critério nem prazo
de recurso — e uma vulnerabilidade de driver explorada em escala dá a ele, e às áreas de segurança
corporativa, uma justificativa inatacável para restringir. Segunda, e pior: o mercado passa a premiar
**permanência** em vez de **alcance**, apoiado no dado de que a maioria dos jogadores web já usa a web
como vitrine para depois instalar. Nesse arranjo, o WebGPU vira **H2−** — uma inovação que faz o
presente durar mais: boa o bastante para ninguém acusar fechamento, insuficiente para ameaçar a loja.
E o "sem instalação" termina onde começou: como demonstração grátis de um produto que se instala.

**Como saber se estamos aqui:** os motores de jogo passarem a tratar a exportação web como canal de
aquisição, com ferramenta de conversão para instalação embutida, em vez de canal de distribuição.

## 10. O experimento

### 10.1 O que o experimento testa

**Não é desempenho. É quem fica de fora.** A tese deste mapa é que a promessa "sem instalação" se
converte, silenciosamente, num requisito de hardware não declarado. Isso é testável numa aula, com o
parque de aparelhos que a turma já tem — e o resultado não depende de nenhuma opinião sobre o futuro.

### 10.2 Procedimento — "O teste do aparelho mais fraco"

1. **Uma cena só, para todos.** A turma publica **uma única** cena 3D como link, sem loja e sem
   instalação, com três variantes do mesmo conteúdo: leve (malha simples), média (malha com material
   e sombra) e pesada (campo gaussiano de alguns milhões de pontos). Mesma URL, mesma página.
2. **A regra que dá sentido ao teste:** cada pessoa abre **no pior aparelho a que tem acesso**, não no
   melhor. Celular antigo da família, computador da escola, máquina emprestada. Quem só tiver um
   aparelho bom empresta o link para alguém de fora da turma.
3. **A página instrumenta a si mesma** e registra, sem identificar pessoa: qual caminho foi negociado
   (WebGPU nativo, WebGPU em modo de compatibilidade, WebGL 2, ou nada); modelo declarado de GPU e de
   navegador; **tempo até o primeiro quadro**; quadros por segundo sustentados em 30 segundos; e —
   o dado que o experimento existe para colher — **abandono antes do primeiro quadro**.
4. **Um par de controle obrigatório:** cada participante roda também no aparelho que usa para estudar.
   O resultado que interessa **não é a média: é a diferença entre os dois**.
5. **Uma pergunta aberta ao final, respondida antes de ver os números:** "você diria que este link
   funcionou?" A distância entre a resposta e a medida é o dado qualitativo.

### 10.3 O que confirma e o que derruba a tese deste mapa

- **Confirma** se a taxa de sucesso na variante pesada cair de forma acentuada entre o aparelho de
  estudo e o aparelho mais fraco, e se o abandono antes do primeiro quadro se concentrar nos
  aparelhos sem WebGPU. Isso dá corpo a `e1.1`, `e5.2` e `e5.2.1`.
- **Derruba** se o modo de compatibilidade cobrir os aparelhos fracos a ponto de a variante pesada
  abrir em quase todos, ainda que devagar. Nesse caso `e5.2` está errado, e o cenário 9.2 perde a
  perna brasileira.
- **Derruba de outro jeito, e este seria o achado mais interessante:** se as pessoas declararem que
  "funcionou" mesmo com desempenho ruim. Aí o problema deste mapa não é técnico — é que ele mediu a
  coisa errada, e "atrito" nunca foi a variável que importava.

### 10.4 Por que este experimento e não um comparativo de motores

Comparar Three.js, Babylon.js e PlayCanvas mediria desempenho relativo com o aparelho controlado — e
o aparelho controlado é precisamente a suposição que este mapa acusa. O experimento tem de rodar no
parque real, porque é o parque real que decide se "sem instalação" quer dizer "para todos".

## 11. Fontes

Vinte e sete fontes, todas abertas por mim em **17/09/2026**. Fonte que não abri não está aqui.

**Especificações, grupos de padronização e estado de implementação**

1. `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status` — estado por navegador e plataforma.
2. `https://web.dev/blog/webgpu-supported-major-browsers` — 25/11/2025, consolidação do suporte.
3. `https://github.com/gpuweb/gpuweb/blob/main/proposals/compatibility-mode.md` — motivação e números de cobertura de API gráfica.
4. `https://groups.google.com/a/chromium.org/g/blink-dev/c/N3RlLGCOTJ4` — Intent to Ship do modo de compatibilidade; 23% do Android sem Vulkan 1.1; marco 146.
5. `https://developer.chrome.com/blog/new-in-webgpu-146` — 25/02/2026, entrega do modo de compatibilidade.
6. `https://www.w3.org/standards/history/webxr/` — WebXR Device API, Candidate Recommendation Draft de 09/06/2026.
7. `https://github.com/web-platform-tests/interop/blob/main/2026/README.md` — áreas de foco do Interop 2026; nem WebXR nem WebGPU nelas.
8. `https://www.w3.org/news/2026/updated-candidate-recommendation-web-neural-network-webnn-api` — 22/01/2026, WebNN em CR atualizada.
9. `https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release` — 03/02/2026, extensão como release candidate.
10. `https://raw.githubusercontent.com/KhronosGroup/glTF/main/extensions/2.0/Khronos/KHR_gaussian_splatting/README.md` — estado "Complete, Ratified by the Khronos Group"; contribuintes; escopo declarado como básico.

**Navegadores e plataformas**

11. `https://webkit.org/blog/17640/webkit-features-for-safari-26-2/` — 12/12/2025, WebXR com WebGPU no visionOS.
12. `https://developer.android.com/develop/xr/web` — módulos de WebXR suportados pelo Chrome no Android XR; motores recomendados.
13. `https://caniuse.com/webgpu` — 87,35% de cobertura global.
14. `https://caniuse.com/webxr` — 77,15%; iOS Safari não suportado em toda a linha; Firefox desabilitado por padrão.
15. `https://developer.chrome.com/docs/ai/prompt-api` — requisitos de 22 GB de disco, >4 GB de VRAM, 16 GB de RAM.

**Motores, ferramentas e runtimes**

16. `https://threejs.org/docs/pages/WebGPURenderer.html` — WebGPURenderer como nova alternativa; degradação automática para WebGL 2.
17. `https://discussions.unity.com/t/webgpu-out-of-experimental-in-unity-6-6/1734694` — 24/08/2026, WebGPU deixa de ser experimental.
18. `https://docs.unity3d.com/6000.6/Documentation/Manual/WebGPU-features.html` — compute shaders, renderização indireta, skinning na GPU, VFX Graph.
19. `https://blogs.windows.com/windowsdeveloper/2026/03/26/announcing-babylon-js-9-0/` — 26/03/2026; .PLY, .splat, .SPZ, .SOG/.SOGS; WebGPU preferido com degradação.
20. `https://blog.playcanvas.com/new-in-supersplat-editor-3-0-rebuilt-on-webgpu/` — 09/09/2026; editor exige WebGPU; 1.557 MB → 105 MB.
21. `https://github.com/huggingface/transformers.js/releases/tag/4.0.0` — 30/03/2026; runtime WebGPU reescrito em C++.

**Mercado e adoção**

22. `https://poki.com/blog/state-of-web-gaming-report-2026` — 25/06/2026; 100 milhões de jogadores mensais; 400 desenvolvedores pesquisados; 62% e 72% de conversão para instalação.
23. `https://mcvuk.com/business-news/why-browser-games-are-the-next-billion-dollar-bet/` — 10/08/2026; visitas de Poki e CrazyGames; 15 mil jogos HTML5 no primeiro semestre de 2025 (pesquisa da Playgama).

**Segurança e privacidade**

24. `https://www.helpnetsecurity.com/2026/04/01/google-chrome-zero-day-cve-2026-5281/` — 01/04/2026; uso após liberação no Dawn, explorado em circulação.
25. `https://arxiv.org/abs/2606.26412` — Santos-Grueiro, 24/06/2026, medição de privacidade em WebGPU; WGPULens.

**Brasil**

26. `https://cetic.br/media/analises/tic_domicilios_2025_principais_resultados.pdf` — TIC Domicílios 2025, coletiva de 09/12/2025; série de acesso à Internet 2015–2025; domicílios com computador.
27. `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/` — 09/12/2025; leitura consolidada: 86% dos domicílios com Internet, 32% com computador, 10% na classe DE, 65% de acesso exclusivo por celular, 87% na classe DE.

## 12. Anexo — o levantamento bruto

Sem edição e sem limite, conforme a Fase 6 exige.

### 12.1 A entrevista, e as respostas que recebi

A Fase 1 é bloqueante e as nove perguntas foram feitas. Nesta rodada não havia interlocutor ao vivo:
as respostas vieram pré-fixadas no encargo. Registro as duas coisas — as perguntas e o que respondeu
por elas — porque a entrevista é o produto tanto quanto o mapa, e porque um leitor futuro precisa
saber que ninguém foi entrevistado.

```
RECORTE FECHADO — confirmado pelo encargo da rodada
  tema ................ O navegador como alvo primario de execucao 3D e XR, sem instalacao
  nao e ............... captura 3D (tema 10); IA local no dispositivo em geral (tema 16);
                        o que ja e comum em produto de massa (regua da disciplina)
  horizonte ........... 2031
  regiao .............. global, com uma nota sobre o Brasil
  publico ............. quem projeta midia e interacao
  descartado .......... o que ja e comum em produto de massa; nenhuma outra exclusao
  vies ................ neutro
  falsificador ........ adocao alem da maioria inicial (Rogers), ou tecnologia que nao rompe nada
  raizes .............. 3
  navegacao ........... sim (WebSearch e WebFetch reais)
  SUPOSICOES MINHAS ... (1) numero de raizes: nao veio no encargo, adotei 3 e declarei o criterio
                        na secao 2; (2) a fronteira com os temas 10, 11 e 16 foi derivada do bloco
                        "Fronteira com os vizinhos" do proprio tema, nao inventada
```

**Perguntas condicionais que caberiam e por que não foram feitas.** A fronteira colide com três
vizinhos (10, 11 e 16), o que normalmente dispararia a segunda rodada da §1.2. Não perguntei porque o
bloco "Fronteira com os vizinhos" do tema já responde: "aqui o objeto é a web como plataforma de
execução 3D/XR". Usei essa frase como resposta e a declarei como suposição. O horizonte de 2031 para
infraestrutura de navegador é coerente — cinco anos é aproximadamente o tempo que WebGL 2 levou para
virar padrão de fato —, então não houve o que apontar.

### 12.2 A triagem de maturidade, candidata por candidata

| Candidata | T1 | T2 | T3 | T4 | T5 | Veredito | Horizonte |
|---|---|---|---|---|---|---|---|
| WebGL / 3D no navegador em geral | reprova | reprova | — | — | **aprova** | MADURO | H1 |
| Jogo casual HTML5 sem instalação | reprova | reprova | — | — | **aprova** | MADURO | H1 |
| Anúncio jogável / visor de produto | reprova | reprova | — | — | **aprova** | MADURO | H1 |
| Motor nativo exportando para web | passa fraco | **reprova** | passa | passa | quase | H2− | H2− |
| Aplicativo nativo de VR por loja | reprova | reprova | — | — | **aprova** | MADURO | H1 |
| **WebGPU como alvo primário** | passa | passa | passa | passa | não | **DISRUPTIVO** | H2+/H3 |
| **WebXR como alvo primário** | passa | passa | passa | passa | não | **DISRUPTIVO** (com veto) | H2+ |
| **Campo gaussiano entregue/editado na aba** | passa | passa | passa | passa | não | **DISRUPTIVO** | H2+ |
| Modelo de IA no navegador | passa | passa | passa | passa | não | disruptivo, **fora da fronteira** | H2+ |
| WebNN | passa | não avaliado | passa | passa | não | emergente, sem 2ª implementação | H3 |

**Por que "motor nativo exportando para web" é H2− e não raiz.** É o exemplo de livro do erro que a
régua persegue. A Unity tirar o WebGPU do experimental em 24/08/2026 **melhora a rota existente**:
faz o arranjo atual — produzir nativo, publicar na web como canal secundário — durar mais. Sem isso,
um time competente não mudaria o objetivo, só o custo e o prazo. Reprova T2. **Não é tendência, é
escora**, e foi por pouco: o anúncio é recente, é relevante, e passaria despercebido como sinal de
disrupção se a régua não existisse.

### 12.3 Os efeitos mortos e rebaixados — com o `id` original e a prova que os matou

**MORTO · `e2.1.1`** — *"A métrica de sucesso de produto gráfico deixa de ser uso medido e volta a ser
instalação declarada, e a indústria de análise reaprende um problema que julgava resolvido."*
**Prova P1 — extrapolação linear.** É o efeito pai (`e2.1`) em outro volume: mesmo ator (quem vende
análise), mesmo mecanismo (a medição some porque o processamento saiu do servidor). Nenhum ator novo
aparece, e a regra de expansão — mudar de ator ou de mecanismo — não é satisfeita. **Fundido ao pai;
`e2.1` fica como folha de ordem 2.**

**MORTO · `e4.2.1`** — *"A preservação digital ganha um objeto novo, a cena executável, que nenhuma
política de acervo sabe guardar por trinta anos."* **Prova P2 — velocidade de adoção.** O efeito é
provavelmente verdadeiro no longo prazo e o prazo de 2031 não tem caso histórico comparável que o
sustente: nenhuma política de acervo no mundo absorveu objeto executável em cinco anos, e a
digitalização de acervo — o comparável mais próximo — levou décadas. Sem caso que sustente o prazo, o
efeito não é falso: é **não datável**, e a roda exige data. **`e4.2` fica como folha de ordem 2.**

**MORTO · o antigo `e5.2`** — *"O arquivo pesado deixa de ser baixado e passa a ser transmitido por
trecho, e a banda volta a ser variável de projeto depois de uma década ignorada."* **Prova P3 — já
aconteceu.** Achei o exemplo em produção enquanto escrevia: o SuperSplat Editor 3.0, de 09/09/2026,
já exporta de forma progressiva em vez de materializar a cena inteira antes de escrever, e a
transmissão por trecho de geometria e textura existe em glTF com Draco e KTX2 há anos. Não é efeito
futuro: é estado da arte. **Foi para a seção 3.1, e a posição `e5.2` foi reocupada** pelo efeito de
exclusão móvel, que tem ator novo (o usuário de aparelho fraco) e mecanismo novo (custo de quadro, não
custo de banda).

**MORTO · um efeito de rascunho sem `id` final** — *"O portal de jogos web volta a ser curador, e o
gargalo de descoberta reaparece no mesmo lugar de onde tinha saído."* **Prova P3 — já acontece hoje.**
Poki e CrazyGames **já são** curadores: a própria matéria de 10/08/2026 os descreve como superfícies
de descoberta com acordos de participação em receita, destaque pago e garantias mínimas. O efeito
estava escrito como futuro e é presente. Não entrou na roda; registrado aqui.

**REBAIXADO · `e1`, de `alta` para `media`.** O primeiro rascunho deu `alta` porque as três condições
pareciam cumpridas: sinal forte (SuperSplat exigindo WebGPU; Unity fora do experimental), força
contrária nomeada (23% do Android sem Vulkan 1.1) com razão para perder (o modo de compatibilidade).
A terceira condição — **caso histórico comparável cuja velocidade de adoção sustente o prazo** —
**não** se cumpre. O comparável óbvio é a transição de WebGL 1 para WebGL 2, que levou perto de seis
anos para que o fallback deixasse de ser obrigatório. Aplicando essa velocidade, 2028 é otimista.
Duas condições de três: `media`.

**REBAIXADO por P6 · a leitura de `e3.2` e `e6`.** A camada de visão de mundo mostrou que os dois
supõem "instalar é atrito". Não os matei, porque ambos têm mecanismo verificável abaixo da litania —
`e3.2` tem o `caniuse`, `e6` tem o SuperSplat. Mas a seção 7.2 registra que **ambos trocam de sinal**
se a métrica de mercado virar permanência, e o dado da Poki (62% e 72% de conversão para instalação)
mostra que isso não é hipótese abstrata.

### 12.4 As seis provas, aplicadas à roda inteira

- **P1 — extrapolação linear.** Varri os 29 efeitos procurando os enunciáveis como "mais X" ou
  "menos X" com o mesmo ator. Um morreu (`e2.1.1`). Dois passaram raspando e ficaram: `e1.2`
  (migração de competência — ator novo: o time de front-end) e `e5.1` (migração de ofício — mecanismo
  novo: captura em vez de modelagem).
- **P2 — velocidade de adoção.** Testei todo prazo contra um caso histórico. Um morreu (`e4.2.1`), um
  rebaixou (`e1`). Os prazos de 2029 em diante para efeitos organizacionais ficaram, ancorados num
  comparável explícito: a absorção do desenvolvimento móvel pelos times de web, que levou de três a
  cinco anos.
- **P3 — já aconteceu.** Dois achados em produção **agora**: exportação progressiva no SuperSplat, e
  curadoria de portal. Ambos removidos da roda e transferidos para a seção 3.
- **P4 — força contrária.** Nomeada por raiz. **R1:** perde quem vende motor com exportador web e
  quem vende computação gráfica na nuvem; o contra-ataque já existe e tem nome — a CVE-2026-5281 no
  Dawn, explorada em circulação, dá à segurança corporativa argumento escrito para desligar a GPU da
  aba (é o efeito `e1.3`). **R2:** perde a loja; o contra-ataque **já foi exercido** — o WebXR não
  existe no Safari do iPhone, e a ausência do Interop 2026 significa que não há placar público
  cobrando isso. **R3:** perde a cadeia de ferramentas de desktop e o ofício de malha; o contra-ataque
  é o escopo declarado da própria extensão ratificada, que deixa kernel, cor, projeção e ordenação
  para depois — interoperabilidade nominal sem interoperabilidade visual.
- **P5 — precondição única.** O achado mais grave, e está na seção 7.3: **nove efeitos** (`e1` e todo
  o seu galho, `e5`, `e6` e filhos) dependem de uma só aposta — cobertura de GPU suficiente para
  exigir WebGPU sem perder público. Não são nove apostas independentes.
- **P6 — camada (CLA).** Litania, causas sistêmicas, visão de mundo e mito estão desdobrados na seção
  7.2. Achado principal: o mapa supõe permanente a visão de mundo "instalar é atrito", e o dado da
  Poki mostra o caminho pelo qual ela se inverte sem que nenhum fato técnico mude.

### 12.5 As buscas que não deram em nada, e as fontes que não abriram

- `https://law.justia.com/cases/federal/appellate-courts/ca9/25-2935/25-2935-2025-12-11.html` — **403
  Forbidden**. Era a decisão do Nono Circuito sobre comissão em links externos. **Consequência real:
  o argumento econômico da loja ficou fora do mapa**, em vez de ser escorado em resumo de busca. Foi
  a decisão mais cara desta rodada e a mais correta.
- `https://agenciadenoticias.ibge.gov.br/...47410-internet-chega-a-95-de-domicilios-do-pais-em-2025`
  — **403 Forbidden**. Era a PNAD Contínua TIC, que traz 95% de domicílios com Internet, número
  diferente dos 86% da TIC Domicílios. **As duas pesquisas medem coisas diferentes e eu não consegui
  abrir a segunda para explicar a diferença**; usei só a TIC Domicílios, cujo PDF baixei e extraí.
- `https://threejs.org/manual/en/webgpurenderer.html` — **404**. O manual mudou de endereço; achei o
  equivalente em `/docs/pages/`.
- `https://wpt.fyi/interop-2026` — respondeu com o título e sem conteúdo. Resolvido pelo `README` do
  repositório, que é a fonte canônica de qualquer jeito.
- `https://chromestatus.com/feature/6436406437871616` — respondeu só o título. Resolvido pelo Intent
  to Ship na lista blink-dev.
- `https://news.samsung.com/global/introducing-galaxy-xr-opening-new-worlds` — **tempo esgotado em
  60 s**. Por isso a data do Galaxy XR aparece no mapa como "21–22/10/2025", com a variação regional
  preservada em vez de arbitrada, e por isso o suporte a WebXR do aparelho está ancorado na
  documentação do Google para desenvolvedores, que eu abri, e não no comunicado da Samsung.

### 12.6 Caminhos abandonados

**Uma quarta raiz sobre economia de distribuição.** Cheguei a esboçar "a taxa de loja deixa de ser
argumento porque o tribunal a reduziu por outro caminho". Abandonada por dois motivos, nesta ordem:
não consegui abrir a decisão (P do método: fonte não aberta não sustenta afirmação), e o argumento,
mesmo se verdadeiro, é sobre **economia de aplicativo**, não sobre a web como plataforma de execução
— caberia num mapa de lojas, não neste.

**Uma raiz sobre o navegador como sistema operacional.** Tentadora, e é para onde a Convergência 1
aponta. Descartada porque, para sustentá-la, eu precisaria de sinal datado de **escalonamento de
recursos entre abas**, e não achei nenhum. Sem sinal, viraria a única coisa que a ferramenta proíbe
sem meias palavras: decisão inventada com justificativa plausível.

**Fundir R1 e R3.** Considerei, porque R3 se apoia em R1 — sem compute shader não há ordenação de
milhões de gaussianas na aba. Mantive separadas porque o **mecanismo de ruptura é outro**: R1 rompe
uma API e uma competência de engenharia; R3 rompe um **formato** e uma cadeia de ativos, e quem perde
em cada uma é gente diferente. Mas registro a dependência aqui, porque a árvore não a mostra, e quem
ler só a seção 5 vai achar que são independentes. **Não são.**

### 12.7 Nota de método

Os métodos usados, com autoria e data, estão em `ESTUDO.md` e não foram recitados de memória:
**Futures Wheel** (Glenn, 1971; literatura em 1972) como espinha; **Three Horizons** (Hodgson, Curry,
Leicester, Sharpe, Lyon e Fazey, 2006) na Fase 2, para nomear o H2− — que nesta rodada capturou
exatamente uma candidata, o motor nativo exportando para web; e **Causal Layered Analysis**
(Inayatullah, 1998, *Futures* 30(8):815–829) na Fase 5, que produziu o achado da seção 7.2. A regra de
parada da roda é minha e está declarada na seção 5, porque a literatura da Futures Wheel não traz
nenhuma.

O que nenhum dos três faz: nenhum atribui probabilidade, nenhum é validado empiricamente, e nenhum
impede este mapa — internamente coerente — de estar inteiramente errado.
