---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: grec
zona_de_interesse: Criação e plataforma
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 14
efeitos_ordem_2: 21
efeitos_ordem_3: 14
tecnologias_citadas: [WebGPU, WGSL, compute shader, WebXR Device API, WebXR AR Module, WebXR Layers, XRGPUBinding, WebXR Hand Input, WebXR Depth Sensing, WebXR Anchors, WebNN, MLTensor, WebGL 2, WebAssembly, Three.js, TSL, WebGPURenderer, SPZLoader, KHR_gaussian_splatting, Babylon.js, Clustered Lighting, Frame Graph, PlayCanvas, SuperSplat, SuperSplat Studio, SPZ, PLY, KSPLAT, SOG, glTF, Gaussian Splatting, 8th Wall, Dawn, Tint, wgpu, WebLLM, Transformers.js, Prompt API, Gemini Nano, Summarizer API, Chrome, Safari, Firefox, Meta Quest Browser, space-warp layers, foveation, Android XR, Samsung Galaxy XR, Apple Vision Pro, visionOS, elemento model, USDZ, Apple Projected Media Profile, PWA, Unity, Godot, pixel streaming]
fontes: 30
confianca: media
experimento: "A mesma cena, quatro portas — a mesma captura 3D publicada como link WebGPU, como link WebXR, como app de loja e como vídeo gravado, medida em quem conseguiu abrir, quanto o aparelho esquentou, quanto custou servir e o que sobra depois de um ano"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O navegador ganhou acesso de primeira classe à GPU e ao óculos, e a pergunta do tema — se a
experiência imersiva virou um link, o que acontece com a loja? — tem, em setembro de 2026, uma
resposta desconfortável: **a porta abriu antes de o corredor existir**. O WebGPU está estável nos
quatro navegadores principais desde o Safari 26 (15/09/2025) e o Firefox 141 (07/2025), e o
caniuse mede 87,35% dos usuários com suporte. Mas ninguém tem número confiável de **uso**: o
capítulo de Capabilities do Web Almanac 2025 mede 86 APIs e não mede WebGPU; e o maior conjunto
público de execuções de GPU em navegador — 32.604 submissões — **retirou em agosto de 2026** a
alegação de que 86,2% das execuções usaram WebGPU, por não conseguir provar qual backend
desenhou os quadros. Do lado do XR, a especificação do WebXR Device API é Candidate
Recommendation Draft de 09/06/2026, o Chrome do Android XR entrega o módulo de AR completo com
mãos, âncoras e profundidade estéreo, e o navegador do Quest ganhou WebGPU experimental em
21/04/2026, camadas de space-warp em 27/07 e foveação em 28/08. E, ainda assim, **WebGPU e WebXR
não se compõem**: a ligação entre os dois, o XRGPUBinding, virou Editor's Draft do Immersive Web
só em 15/06/2026, e o three.js acabou de adicionar MSAA para WebXR sobre WebGPU no r186
(08/09/2026). WebXR foi proposto como área de foco do Interop 2026 e **não** entrou na lista de
vinte. Três rupturas sustentam o mapa, e nenhuma delas é "gráfico melhor no navegador", que é
melhoria e foi recusada como raiz: a GPU do usuário virou API pública, e com ela a inferência
entrou na página (Chrome 148 estabilizou a Prompt API com o Gemini Nano em 2026, exigindo 22 GB
livres e 4 GB de VRAM); a sessão imersiva virou endereço, e a aprovação de loja deixou de ser
etapa obrigatória — num ano em que o Nono Circuito (11/12/2025) redesenhou a briga da comissão de
27% e a Comissão Europeia ainda não viu **um único** motor de navegador alternativo embarcar no
iOS, 26 meses depois do prazo; e — a ruptura que quase ninguém escreve — **sem instalação é sem
posse**: o 8th Wall, plataforma de WebAR da Niantic, desligou o serviço hospedado em 28/02/2026 e
avisou que em 28/02/2027 "todos os links param de funcionar e todos os dados são apagados". O
mapa registra os freios com dono: a Apple não implementa o módulo de AR do WebXR no visionOS e
oferece em troca o elemento `<model>` com USDZ; a mesma API que desenha também identifica o
aparelho, e navegadores já racionam o que revelam; e no Brasil, onde 65% da população acessa a
internet só pelo celular e 87% da classe DE só tem o aparelho, executar a regra no aparelho de
entrada transfere a conta para quem menos pode pagá-la.

## 2. O tema

**O que é.** A tese do tema é que o navegador virou plataforma de execução gráfica de primeira
classe: WebGPU dá acesso à GPU, WebXR liga o óculos, e o que era aplicativo vira link — sem loja,
sem aprovação, sem plataforma dona. O objeto deste mapa não é "3D na web" (isso é WebGL, e é
maduro) nem "IA local" em geral (isso é o tema 16). É a **web como alvo primário de execução
3D/XR**, e o que se rompe quando a unidade de distribuição de uma experiência pesada deixa de ser
um binário aprovado e passa a ser um endereço.

**Onde encosta em mídia e interação.** Em três lugares ao mesmo tempo, e é por isso que o tema
merece roda e não levantamento de estado da arte.

1. **No ofício.** Quem projeta mídia interativa hoje decide, no primeiro dia do projeto, para qual
   plataforma vai construir — e essa decisão arrasta motor, formato de arquivo, modelo de negócio
   e prazo. Se o alvo passa a ser a página, a decisão muda de natureza: não se escolhe plataforma,
   escolhe-se o piso de hardware que se aceita perder.
2. **Na distribuição.** Loja de aplicativos é, ao mesmo tempo, vitrine, curadoria, cobrança e
   arquivo. Tirar a loja do caminho resolve a cobrança e a curadoria — e **desmonta o arquivo**,
   que é a parte que ninguém pediu para desmontar.
3. **Na conta de luz.** Renderizar no servidor é caro para quem publica. Renderizar no aparelho é
   caro para quem acessa. Essa troca de incidência não é detalhe técnico: é quem paga.

**Por que merece mapa de futuro.** Porque o estado da arte, sozinho, engana aqui. A leitura fácil
lê "WebGPU chegou a todo navegador" e conclui "a web ganhou". A leitura difícil olha os mesmos
fatos e vê uma pilha que ainda não se compõe (WebGPU e WebXR falam por um rascunho), um número de
adoção que foi publicamente retratado, um mercado de WebAR que **fechou** no ano em que a
tecnologia amadureceu, e uma promessa de "sem instalação" que, na prática do Gemini Nano, pede 22
GB livres antes da primeira frase. O interessante não é se a web vence a loja. É o que muda de
lugar enquanto as duas coisas convivem — e o que se perde no caminho sem que ninguém tenha
decidido perder.

**O recorte declarado.** Horizonte 2031. Público: quem projeta mídia e interação. Recorte global,
com nota sobre o Brasil. Descartado de início, pela régua da disciplina: o que já é comum em
produto de massa. Viés declarado: neutro, com um cenário de cada lado na seção 9. Disrupção-raiz
suspeita pelo autor: nenhuma — foram derivadas do §2 da skill, e duas candidatas óbvias foram
recusadas (seção 4).

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 11/09/2026. Trinta fontes abertas e lidas (seção 11); o que não
abriu está registrado na seção 12 e não foi usado.*

### 3.1 O que já existe e funciona

**WebGPU está nos quatro navegadores, por padrão.** Chrome e Edge desde a versão 113 (abril de
2023) em Windows, macOS e ChromeOS; Firefox 141 no Windows (julho de 2025), 145 em macOS Apple
Silicon e 147 nas demais arquiteturas de macOS; Safari 26 em macOS Tahoe 26, iOS 26, iPadOS 26 e
visionOS 26 (post do WebKit de 15/09/2025). O post do web.dev que marca o fechamento do ciclo é de
25/11/2025. O texto do WebKit é explícito quanto à intenção: *"WebGPU supersedes WebGL on macOS,
iOS, iPadOS, and visionOS"* — não é uma alternativa, é a sucessão declarada.

**O número de cobertura existe e é alto.** O caniuse mede, em setembro de 2026, **85,72% de
suporte pleno mais 1,63% parcial = 87,35%** dos usuários globais. É o número que a PlayCanvas
citou (arredondando para "~85%") ao decidir tornar o renderizador WebGPU o caminho principal do
SuperSplat.

**O ganho de desempenho é real e medido.** O renderizador WebGPU do SuperSplat, em post de
03/06/2026, publica: num Apple M4 Max, 10 milhões de gaussianas passam de **48,1 para 124,1 fps**
(2,6×); com 35 milhões, de **13,3 para 75,8 fps** (5,7×). Num iPhone 13 Pro Max, 1 milhão de
gaussianas vai de **38,1 para 77,6 fps**, e o ganho se mantém em 2,1× com 4 milhões. A cena do
museu ferroviário bávaro tem **24 milhões de gaussianas** no nível mais alto de detalhe — volume
impossível de manter inteiro num celular — e carrega "quase instantaneamente" por streaming
progressivo de LOD.

**Os motores adotaram, e não como experimento.** O three.js entrega o `WebGPURenderer` com
fallback automático para WebGL 2 e, no r186 (08/09/2026), traz renderizador e carregador nativos
de gaussian splat escritos em TSL, com ordenação por contagem na GPU, harmônicos esféricos para
dependência de vista, raycasting, e carregadores PLY, SPLAT, SPZ, KSPLAT e glTF
(`KHR_gaussian_splatting`) — o conjunto SPZ pesa **7 KB** sobre a base. O Babylon.js está na linha 9.x — a release mais
recente listada em 11/09/2026 é a **9.26.0** —, e o changelog mostra onde o esforço está indo:
caminho de *quad layer* para WebGPU, **âncoras persistentes de WebXR** com ciclo de vida, captura de
sala, *depth sensing* com controle de ciclo de vida, controle de camadas de composição e escala de
viewport, e LOD dirigido por orçamento e ciente de múltiplas câmeras para **streaming** de gaussian
splats, com PLY em meia precisão.
O PlayCanvas transformou o SuperSplat em **endpoint de publicação** com API REST, e lançou o
SuperSplat Studio para autoria de experiências interativas — com três parceiros de captura
publicando direto: Teleport (Varjo), XGRIDS LCC Studio e LichtFeld Studio.

**O WebXR funciona em três famílias de hardware.** No Android XR, o Chrome entrega Device API,
módulo de AR, gamepads, hit test, **hand input**, âncoras, **depth sensing estéreo** (dois mapas de
profundidade em tempo real, um por olho) e estimativa de iluminação — com permissões por domínio
para mapeamento 3D, rastreamento de câmera e dados de rosto, olhos e mãos. No Meta Horizon OS, o
navegador ganhou, só em 2026: Chromium 144 (02/03), **WebGPU e projeção de profundidade WebXR
experimentais** no 146.0 (21/04), ancoragem da janela na parede no 146.1 (11/05), **WebGPU para
camadas de space-warp** no 149.1 (27/07) e **foveação WebGPU experimental** no 150.1 (28/08). No
visionOS, o Safari habilita WebXR por padrão desde o visionOS 2.

**A inferência entrou na página, e saiu do laboratório.** A Prompt API do Chrome está **estável
para a web na versão 148**, com Gemini Nano no dispositivo; ao lado dela, Summarizer, Translator e
Language Detector. O WebLLM entrega motor de inferência em navegador sobre WebGPU, compatível com
a API da OpenAI, com Llama 3, Phi 3, Gemma, Mistral e Qwen2. Essa é a porta que o tema chamou de
"o navegador como console de IA, não só de gráficos".

**A distribuição sem loja já move gente, só que em 2D.** O MCV/Develop (10/08/2026) reporta que os
lançamentos de jogos HTML5 quase **triplicaram** no primeiro semestre de 2025, para 15 mil — 4,9
vezes o número do primeiro semestre de 2023; a Poki declara **100 milhões de usuários mensais**
(contra 10 milhões em 2020) e 122,5 milhões de visitas/mês; a CrazyGames, 61,1 milhões de visitas.
37% dos jogadores jogam jogo de navegador "várias vezes por dia", e a sessão média é de 30
minutos. O mercado projetado sai de US$ 19,28 bi neste ano para US$ 28,44 bi em 2032.

### 3.2 O que existe e ainda não funciona

**WebGPU e WebXR não se compõem.** Este é o fato que mais muda a leitura do tema. Para desenhar
uma sessão WebXR com WebGPU é preciso um `XRGPUBinding` que forneça swap chains WebGPU a cada tipo
de camada, no lugar do `XRWebGLLayer`. Esse documento virou **Editor's Draft** do Immersive Web
Working Group em 15/06/2026 — rascunho de editor, não recomendação, sem relatório de
implementação. O three.js só agora, no r186 (08/09/2026), adicionou "MSAA support to WebXR WebGPU".
Ou seja: em setembro de 2026, o *"WebGPU + WebXR como plataforma-alvo primária"* do enunciado do
tema é, tecnicamente, **duas plataformas que estão aprendendo a conversar**.

**Ninguém sabe quanto se usa.** O capítulo Capabilities do Web Almanac 2025 analisou 86 expressões
regulares de capacidades web e reportou as sete mais usadas (Compression Streams 12,3% mobile,
Clipboard 11,2%, Web Share 6,6%, Device Memory 6,3%, Media Session 4,7%, Add to Home Screen 4,6%,
Media Capabilities 4,4%) — e **não mede WebGPU, WebXR nem WebGL**. O maior conjunto público de
execuções (32.604 submissões entre 10/10/2025 e 13/04/2026, 73,6% em mobile) **retirou em agosto
de 2026** sua alegação de 86,2% de execuções em WebGPU, porque "linhas históricas com
`api=webgpu` não contêm proveniência de renderizador suficiente para provar qual backend completou
os quadros". Cobertura de navegador nós temos. Uso, não.

**O WebNN não chegou.** A rede neural na web — o caminho que usaria NPU em vez de GPU — é
Candidate Recommendation Draft de 10/09/2026, e o próprio documento condiciona o avanço a "pelo
menos duas implementações independentes e interoperáveis de cada recurso" e a uma suíte de testes
aberta. Chrome e Edge têm implementação; Firefox e Safari, não.

**O "sem instalação" tem letra miúda.** A Prompt API do Chrome exige **22 GB livres** no volume do
perfil, e GPU com mais de 4 GB de VRAM **ou** CPU com 16 GB de RAM e 4 núcleos. Não funciona em
Chrome para Android, nem em iOS, nem em ChromeOS fora de Chromebook Plus. O download inicial do
modelo pede conexão não medida.

**A cobertura de WebGPU no Android é mais estreita que o número do caniuse sugere.** Pela tabela
do próprio grupo de trabalho: Chrome 121 para ARM/Qualcomm/Intel, **139 para Imagination**, e
**154 planejado para Samsung Xclipse**. No Linux, 144+ para Intel Gen12+ e 147+ para NVIDIA com
Wayland; no Firefox, Linux e Android seguem em desenvolvimento com previsão para 2026. Windows
ARM64 ainda exige flag.

**A Apple não implementa o AR do WebXR.** O visionOS suporta sessões `immersive-vr`; sessões
`immersive-ar` não. Em troca, o Safari 26.0 traz — **exclusivo do visionOS** — o elemento HTML
`<model>`, que embute modelo 3D interativo usando os mesmos arquivos USDZ do AR Quick Look, com
`environmentmap`, `autoplay`, `loop` e `stagemode="orbit"`. É um caminho paralelo ao WebXR, com
formato da casa. O Safari 26.4 (24/03/2026) não traz recurso novo de WebGPU nem menciona WebXR:
traz uma correção de formatos PNG.

**WebXR não entrou no Interop 2026.** A proposta foi aberta em 05/09/2025 citando Meta Quest,
sistemas tetherizados, Apple Vision Pro, Xreal Air e celulares. O anúncio oficial do Interop 2026
(12/02/2026) lista vinte áreas de foco — anchor positioning, container style queries, dialogs e
popovers, scroll-driven animations, view transitions, `attr()`, `contrast-color()`, custom
highlights, fetch uploads/ranges, IndexedDB, JSPI para Wasm, media pseudo-classes, Navigation API,
scoped custom element registries, scroll snap, `shape()`, web compat, WebRTC, WebTransport e
`zoom`. **Nem WebXR nem WebGPU estão nela.** Isso é uma medida direta de prioridade dos quatro
fabricantes de navegador, e vale mais que qualquer declaração.

**Motor alternativo no iOS continua não existindo.** A Open Web Advocacy, em 15/05/2026, registra
que, passados **mais de 26 meses** do prazo de 07/03/2024 da DMA, "nenhum fornecedor de navegador
conseguiu portar seu próprio motor para o iOS na UE". A regra mudou; o fato, não.

### 3.3 Quem constrói

| Ator | O que constrói | Sinal de compromisso |
|---|---|---|
| **W3C "GPU for the Web" / GPU Working Group** | a especificação WebGPU e o WGSL | grupo comunitário criado em **16/02/2017**; nove anos até baseline |
| **W3C Immersive Web WG** | WebXR Device API e módulos | CRD de 09/06/2026; XRGPUBinding em Editor's Draft desde 15/06/2026 |
| **Google (Chrome, Dawn/Tint, Android XR)** | a implementação de referência e o único navegador com módulo de AR completo | Chrome 113 (2023) a 154 (planejado); Prompt API estável no 148 |
| **Apple (WebKit, visionOS)** | WebGPU sobre Metal, e o elemento `<model>` como caminho próprio | Safari 26 traz WebGPU; recusa `immersive-ar` |
| **Mozilla (Firefox, wgpu)** | a segunda implementação independente, em Rust | 141 no Windows; Linux/Android ainda em 2026 |
| **Meta (Quest Browser)** | o navegador com mais recurso de XR embarcado | cinco releases em 2026 tocando WebGPU/WebXR |
| **PlayCanvas, three.js, Babylon.js (Microsoft)** | a camada onde a maioria realmente programa | SuperSplat Studio; three.js r186; Babylon.js 9.26.0 |
| **Niantic Spatial (8th Wall)** | construiu o mercado de WebAR — **e saiu dele** | serviço hospedado desligado em 28/02/2026; código aberto sob MIT em 10/03/2026 |

### 3.4 O número que descreve a adoção hoje

**Cobertura de navegador: 87,35% dos usuários globais (caniuse, setembro de 2026).**

**Uso real: sem número confiável encontrado.** O Web Almanac 2025 não mede a API; a única série
pública grande retratou sua própria estatística. Este mapa **não estima** o número que não achou —
e essa ausência é, ela própria, um dado sobre o estágio do tema: uma tecnologia com nove anos de
especificação e três de disponibilidade que ninguém ainda se deu ao trabalho de medir na base
instalada não está na maioria de Rogers. Pela escala do §2 da skill, WebGPU está em **produto de
nicho / adoção precoce**, e WebXR, em **demo pública / produto de nicho**.

### 3.5 O Brasil, em uma nota

A TIC Domicílios 2025 (divulgada em 09/12/2025) mede 157 milhões de usuários de internet (85% da
população), 163 milhões contando quem usa aplicativos sem se dizer usuário (88%). **65% da
população acessa a internet unicamente pelo celular**, cinco pontos a mais que em 2024; na classe
DE são **87%**; entre a população preta, **73%** (alta de 17 pontos). Só **32% dos domicílios** têm
ao menos um computador — 97% na classe A, **10% na DE**. No mercado de aparelhos, a Samsung tem
**48%** das vendas brasileiras no 2T26 (Omdia, via TelecomLead, 02/09/2026), à frente de Motorola
(20%), Xiaomi (14%), OPPO (8%) e Apple (7%); os lançamentos de entrada citados custam R$ 1.299 a
R$ 1.399. A versão do sistema não é o gargalo — pelo StatCounter, Android 12 ou superior domina o
acesso brasileiro em agosto de 2026 (16.0 com 25,18%, 15.0 com 22,6%, 13.0 com 15,46%, 14.0 com
14,22%, 12.0 com 7,81%). **O gargalo é a GPU**: a tabela do grupo de trabalho ainda coloca o
suporte a Xclipse — a linha gráfica dos Exynos da Samsung — como planejado para o Chrome 154.

## 4. As disrupções-raiz

Antes das três que entraram, as que **não** entraram.

### 4.0 Candidatos recusados

**Recusado: "WebGL e 3D no navegador".** Adoção em maioria desde meados da década de 2010; é a
base sobre a qual tudo isto acontece. Tratado como contexto na seção 3.

**Recusado: "WebGPU como sucessor do WebGL".** Pergunta 1 do §2: o que rompe? Faz o mesmo,
melhor e mais rápido — 2,6× a 5,7× no SuperSplat. Isso é **melhoria sustentadora** no sentido de
Christensen, e entra no mapa como efeito, não como raiz. O que rompe no WebGPU não é o desenho: é
o **compute shader**, que é outra coisa e virou a raiz 1.

**Recusado: "motor de jogo exportando para a web" (Unity, Godot).** Existe há mais de uma década;
o Unity 6 tem backend WebGPU experimental e o Godot 4.7 (junho de 2026) manda WebAssembly SIMD por
padrão, mas o caminho para web continua sendo WebGL 2 no Godot. Melhoria, não ruptura.

**Recusado como raiz, mantido como efeito: "o custo da computação troca de dono".** É rupturа
real, mas falha no teste da causa solta (§3.10): não acontece sem a raiz 1 ou a raiz 2. Entra como
`e2` e sua descendência.

**Recusado como raiz, mantido como efeito: "a GPU exposta vira impressão digital".** Mesma
lógica: é consequência direta de expor a GPU, não ruptura independente. Entra como `e3`.

**Recusado: "PWA substitui o aplicativo".** Tem dez anos. O Web Almanac 2025 mede "Add to Home
Screen" em **4,6% em mobile**. Não é emergente — é uma promessa que não se cumpriu, e por isso vale
como classe de referência (seção 5), não como raiz.

### 4.1 Raiz 1 — A GPU do usuário virou API pública: computação de propósito geral dentro da aba

**O que rompe.** A suposição de que o navegador é um cliente de documento e desenho, e que a
computação pesada mora no servidor de quem publica. Com compute shader disponível por padrão em
quatro navegadores, a aba passa a ser **nó de computação**: inferência, física, ordenação,
treinamento. Isso rompe três coisas ao mesmo tempo — o modelo de cobrança por requisição de
inferência (não há requisição), a premissa de que dado sensível precisa sair do aparelho para ser
processado (não precisa), e a definição de "aparelho suficiente" (deixa de ser tela e rede, passa
a ser GPU e memória). O WebKit não deixa margem sobre o que a novidade é: compute shaders
"permitem computação de propósito geral na GPU, algo que não era possível com WebGL".

**Por que agora, e não há cinco anos.** Em 2021 o WebGPU era rascunho num grupo criado em 2017, e
não havia navegador estável. A pré-condição que faltava tinha três partes e as três fecharam entre
julho de 2025 e junho de 2026: (a) a segunda e a terceira implementações independentes — Firefox
141 e Safari 26 — tirando a API de "coisa do Chrome"; (b) uma geração de modelos quantizados que
cabe na memória de GPU de consumo, com motores prontos (WebLLM, Transformers.js); (c) o navegador
mais usado **estabilizando** a inferência local como API da plataforma, não como biblioteca:
Prompt API estável na web no Chrome 148.

**Onde está na difusão.** Produto de nicho migrando para adoção precoce. Cobertura de navegador em
87,35%; uso sem número confiável; requisitos de hardware que excluem todo o mobile no caso da
Prompt API.

**O que ainda falta acontecer.** Cobertura de Android e Linux fechar (Xclipse só no Chrome 154;
Firefox Linux/Android em 2026). WebNN sair de CRD com duas implementações independentes. Uma forma
de declarar capacidade sem entregar impressão digital. E um modelo de custo de energia que o
projetista consiga ver antes de publicar — hoje ele não vê.

**Quem tem incentivo para bloquear.** Quem vende inferência por token. Um provedor de API de
modelo não ganha nada com a página que não faz requisição; ganha com a que faz. O bloqueio
provável não é proibição — é **não portar**: manter os modelos bons fora do formato que roda no
navegador, e os que rodam no navegador pequenos o bastante para decepcionar.

### 4.2 Raiz 2 — A sessão imersiva virou endereço: XR sem instalação, sem loja, sem aprovação

**O que rompe.** A loja como passagem obrigatória entre quem cria conteúdo imersivo e quem o
consome — e, com ela, quatro funções que estavam coladas: cobrança, curadoria, distribuição e
permanência. Se a sessão imersiva abre por URL, a cobrança sai do aparelho, a curadoria vira
indexação, a distribuição vira hospedagem e a permanência... some (é a raiz 3). Rompe também a
unidade de trabalho do estúdio: deixa de existir "a versão para a loja X".

**Por que agora, e não há cinco anos.** Em 2021 havia WebXR no Chrome e no navegador do Quest, e
nada na Apple. O que mudou: (a) a especificação chegou a Candidate Recommendation Draft
(09/06/2026) com o critério explícito de duas implementações interoperáveis; (b) uma terceira
família de hardware entrou — Android XR, com Chrome entregando o módulo de AR **completo**: hit
test, mãos, âncoras, profundidade estéreo, estimativa de luz; (c) o navegador do Quest passou a
receber recurso de XR **de ponta** — space-warp e foveação sobre WebGPU — e não só atualização de
Chromium; (d) o Safari do visionOS habilitou WebXR por padrão.

**Onde está na difusão.** Demo pública migrando para produto de nicho. E com um sinal contrário
forte: o principal negócio de WebAR do mundo, o 8th Wall, **encerrou o serviço hospedado** em
28/02/2026, no ano em que a tecnologia amadureceu.

**O que ainda falta acontecer.** O XRGPUBinding sair de Editor's Draft e ser implementado — sem
ele, quem quer WebGPU no óculos programa contra rascunho. A Apple implementar `immersive-ar`, ou
assumir que o `<model>` é a resposta dela. Os fabricantes aceitarem um compromisso público de
interoperabilidade — o Interop 2026 era a porta, e ela não abriu. E uma base instalada que
justifique o investimento.

**Quem tem incentivo para bloquear.** O fabricante do óculos. Ele controla o navegador embarcado,
e cada recurso de WebXR que ele não implementa é um usuário a mais na loja dele. A Apple já exerce
isso sem precisar proibir nada: basta não implementar o módulo de AR e oferecer um elemento
próprio, com formato próprio, que resolve 80% dos casos comerciais (ver um produto em 3D) sem
passar pelo padrão.

### 4.3 Raiz 3 — Sem instalação é sem posse: a mídia executável passa a existir só enquanto alguém a hospeda

**O que rompe.** A relação entre uma obra de mídia interativa e o seu suporte. Um jogo em disco,
um binário de loja, um APK baixado: todos são cópias, e cópias sobrevivem ao seu distribuidor.
Uma experiência publicada como link não é cópia de nada — é um serviço em execução. Quando o
serviço para, a obra não fica indisponível: **ela deixa de existir**. Isso rompe o portfólio
(prova do que se fez), a pesquisa (o objeto some antes do artigo), o acervo (museu não sabe guardar
o que não é arquivo), e o contrato de encomenda (que hoje entrega "a experiência", não a
capacidade de executá-la em 2035).

**Por que agora, e não há cinco anos.** A objeção óbvia é que isto é velho: o Flash morreu em
31/12/2020 e levou embora duas décadas de web interativa. Verdade — e é justamente por isso que a
ruptura agora é de outra natureza. No Flash, o que se perdia era um runtime **cliente**, e a obra
(o .swf) continuava existindo como arquivo, emulável pelo Ruffle. O que muda em 2026 é que o
artefato passou a ser **capital intensivo e servido**: uma captura de 24 milhões de gaussianas com
LOD progressivo não é um arquivo que alguém guarda numa pasta; é um pipeline de streaming num
endpoint de publicação. A pré-condição nova é exatamente essa: em 2021 não havia mídia executável
pesada distribuída como serviço de streaming de geometria. Em 2026 há, com três parceiros de
captura publicando direto no endpoint.

**Onde está na difusão.** Aqui o sinal é **forte**, e tem data: o 8th Wall avisou que as
experiências publicadas seguem no ar até **28/02/2027**, e que depois disso "todos os links param
de funcionar e todos os dados são apagados". Não é previsão — é um aviso de desligamento com dia
marcado.

**O que ainda falta acontecer.** Que a perda seja sentida por alguém com poder de contratar: um
museu, um edital público, uma universidade. Que exista formato de empacotamento que sobreviva ao
hospedeiro. E que quem paga a encomenda descubra, na renovação, que não tem nada.

**Quem tem incentivo para bloquear... ou melhor, para acelerar.** Aqui o ator com incentivo não
bloqueia: **abandona**. A empresa que hospeda mídia executável de terceiros tem custo recorrente e
receita decrescente; sair é racional. O bloqueio vem do outro lado — de quem contrata e passa a
exigir cláusula de sobrevida —, e é o efeito `e11.1`.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A GPU do usuário virou API pública — computação de propósito geral dentro da aba
    efeitos:
      - id: e1
        ordem: 1
        efeito: Aplicações de mídia passam a embarcar o modelo na própria página em vez de chamar uma API remota
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Ferramenta criativa com IA volta a ser vendida como licença de produto em vez de assinatura medida por uso
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O preço de software criativo desacopla-se do volume de uso e volta a variar por recurso e por suporte
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A promessa de que nada sai do aparelho deixa de ser cláusula contratual e passa a ser verificável na aba de rede
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Auditoria de privacidade de software de mídia passa a se apoiar em inspeção de tráfego, e o contrato perde valor probatório
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: A primeira visita passa a baixar gigabytes de peso de modelo, e o sem instalação vira instalação com outro nome
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: O navegador ganha gerenciador de modelos com cota, atualização e desinstalação, replicando dentro da aba a loja que o link dispensava
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O custo de computação da experiência troca de dono — sai do servidor de quem publica e vira bateria e silício de quem acessa
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Portais de jogo e publicadores de 3D deixam de pagar GPU em nuvem e passam a competir por quem roda em aparelho fraco
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A vantagem competitiva em mídia interativa desloca-se para quem sabe caber em pouco — compressão, LOD e quantização — e não para quem tem mais servidor
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Custo por watt do usuário entra na avaliação de front-end ao lado de tempo de carregamento
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: A mesma API que desenha também mede o aparelho, e a GPU exposta vira identificador estável de quem visita
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Navegadores racionam a informação do adaptador, e quem publica 3D perde a capacidade de detectar hardware para degradar a experiência
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Padroniza-se um nível de capacidade declarado pelo navegador, e esse rótulo vira objeto de negociação entre fabricantes e publicadores
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Visualização de dados e simulação científica migram do ambiente instalado para a aba, porque compute shader e dado passam a morar no mesmo lugar
        sinal: medio
        prazo: 2031
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Artigo científico passa a ser publicado com a simulação executável dentro da página, revisável sem instalar nada
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A figura estática deixa de bastar como registro de resultado em áreas que simulam, e o PDF perde o monopólio do depósito
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A régua de aparelho suficiente deixa de ser tela e rede e passa a ser GPU e memória, e no Brasil isso recorta por classe social
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Experiências passam a ser projetadas em dois níveis, e a versão que só roda em GPU recente vira a versão de verdade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A diferença entre as duas versões deixa de ser assunto de design e vira assunto de política pública de acesso digital
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Escola e museu brasileiros ficam com a versão degradada por padrão, porque o parque instalado é de aparelho de entrada
            sinal: fraco
            prazo: 2030
            confianca: media
  - disrupcao: A sessão imersiva virou endereço — XR sem instalação, sem loja, sem aprovação
    efeitos:
      - id: e6
        ordem: 1
        efeito: A experiência imersiva passa a ser publicada como endereço, e a aprovação de loja deixa de ser etapa obrigatória para chegar ao público
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A comissão de loja deixa de incidir sobre a parte da experiência que roda na web, e o pagamento migra para fora do aparelho
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A disputa regulatória sobre comissão perde objeto onde a web funciona e se desloca para o direito de o fabricante limitar o navegador embarcado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A unidade de trabalho do estúdio deixa de ser a versão para a loja X e passa a ser a página que se adapta ao aparelho
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O papel de quem cuidava do relacionamento com a plataforma encolhe no estúdio médio, e o orçamento migra para quem cuida de desempenho por aparelho
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O catálogo de conteúdo imersivo deixa de ser curado e passa a ser indexado — busca em vez de vitrine
        sinal: fraco
        prazo: 2030
        confianca: baixa
      - id: e8
        ordem: 1
        efeito: Quem fabrica o óculos ganha um ponto de controle novo — permitir, limitar ou simplesmente atrasar recursos de WebXR no navegador embarcado
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A viabilidade de uma experiência imersiva passa a depender de um recurso de navegador que o fabricante pode mudar sem aviso nem prazo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Surge pressão por um compromisso público de fabricantes sobre recursos de navegador em óculos, nos moldes do Baseline, e ela nasce fora do Interop
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: O estúdio mantém dois caminhos para o mesmo conteúdo, WebXR e aplicativo nativo, e o custo de manter os dois anula parte da economia do link
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e9
        ordem: 1
        efeito: A pilha gráfica imersiva fica partida em duas por alguns anos — WebXR desenhando com WebGL enquanto o WebGPU fica fora do óculos
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Os motores viram a camada que esconde a divisão, e a dependência de three.js, Babylon.js ou PlayCanvas aumenta em vez de diminuir
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Quem aprende XR aprende um motor e não a plataforma, e a portabilidade prometida pela web é reintermediada por três projetos
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: Marca, museu e escola passam a tratar XR como campanha de link, com o orçamento e a vida útil de uma campanha
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: A vida útil de uma peça imersiva passa a ser medida em meses de contrato de hospedagem e não em anos de catálogo
            sinal: medio
            prazo: 2029
            confianca: media
          - id: e10.2
            ordem: 2
            efeito: A agência de publicidade volta a ser a maior compradora de XR, e a pauta estética do meio segue o briefing de campanha
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: Sem instalação é sem posse — a mídia executável existe só enquanto alguém a hospeda
    efeitos:
      - id: e11
        ordem: 1
        efeito: A peça de mídia executável deixa de ter cópia e passa a existir apenas enquanto alguém paga a hospedagem
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Contrato de encomenda de experiência interativa passa a ter cláusula de sobrevida e entrega de executável autocontido
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Encomenda pública de experiência digital passa a exigir depósito do executável, como já se exige do relatório final
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O portfólio de quem cria mídia interativa apodrece sozinho, e já fiz deixa de ser demonstrável
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O portfólio migra para vídeo de captura de tela, porque a gravação sobrevive ao que foi gravado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A memória do que se fez em mídia interativa nos anos 2020 chega aos anos 2030 como vídeo de terceiros e não como obra
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: Museu, universidade e arquivo descobrem que não sabem guardar o que não é arquivo
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Instituições de memória passam a coletar o ambiente de execução — imagem congelada de navegador — em vez do conteúdo
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O depósito legal, hoje restrito a publicação, vira objeto de disputa sobre incluir software executável
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: A pesquisa acadêmica sobre mídia interativa perde reprodutibilidade porque o objeto estudado sai do ar antes da publicação
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e14
        ordem: 1
        efeito: Reaparece a demanda por empacotar, e o mesmo conteúdo que dispensou a loja volta empacotado para ter dono
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A loja se reposiciona como serviço de permanência e confiança em vez de vitrine, e passa a vender durabilidade
            sinal: fraco
            prazo: 2031
            confianca: baixa
```

### O que o bloco não diz

**Os mecanismos, um por um.** O YAML guarda a afirmação; o mecanismo mora aqui, e sem ele o efeito
não entrou.

`e1` acontece **porque** compute shader estável em quatro navegadores mais modelo quantizado que
cabe em 4 GB de VRAM tornam a inferência local mais barata para quem publica do que a chamada de
API — e o Chrome 148 tirou dela o último atrito, que era escolher e carregar a biblioteca. O sinal
é **forte** por artefatos contáveis: WebLLM em produção, Transformers.js, Prompt API estável,
Summarizer/Translator/Language Detector junto. Classe de referência para o prazo: o WebAssembly
ficou baseline em 2017 e, oito anos depois, o Web Almanac ainda o trata como capítulo de nicho —
por isso 2029 e não 2027; três anos a partir do estável no Chrome é o mínimo defensável, e é
otimista.

`e1.1` decorre **porque**, sem requisição por token, o custo marginal do fornecedor some e a
assinatura medida por uso perde justificativa diante do cliente. Mecanismo fraco de propósito: o
fornecedor tem todo incentivo para manter a assinatura mesmo sem o custo. Por isso `confianca:
baixa`, e por isso o filho `e1.1.1` é o desdobramento mínimo, não o máximo.

`e1.2` decorre **porque** "não sai do aparelho" deixa de ser afirmação e vira observação: abre-se a
aba de rede e não há requisição. Isso muda o ônus da prova em saúde, direito e educação, onde o
argumento hoje é contratual. Não confundir com o efeito genérico "aumenta a privacidade": o
específico aqui é **a mudança do instrumento de verificação**.

`e1.3` é a **retroação da raiz 1** e o efeito de que mais gosto neste mapa por ser contraintuitivo:
o "sem instalação" da raiz produz, ele mesmo, uma instalação. A Prompt API pede **22 GB livres** e
4 GB de VRAM. Um peso de modelo de 2,7 a 4 GB baixado na primeira visita não é diferente, do ponto
de vista de quem usa, de instalar um aplicativo — é pior, porque não aparece na lista de
aplicativos instalados. `e1.3.1` fecha o ciclo: para gerenciar isso, o navegador precisa de uma
tela de cotas e desinstalação, que é uma loja com outro nome.

`e2` decorre **porque** a computação, ao mudar de máquina, muda de pagador. É o efeito de
incidência, e é o que amarra a raiz 1 ao Brasil. Classe de referência de prazo: o vídeo por
streaming levou cerca de cinco anos entre "funciona" e "a conta de dados do usuário virou assunto
público".

`e2.2` — "custo por watt do usuário" — é o efeito mais especulativo do ramo, e está marcado como
fraco e baixo por isso: não há hoje, no navegador, instrumento que meça energia por página de modo
comparável. Sem instrumento, não há métrica; com instrumento, ela aparece rápido.

`e3` decorre **porque** a informação do adaptador WebGPU é estruturada e necessária para o
desenvolvedor decidir o que renderizar — diferente do WebGL, onde a extensão
`WEBGL_debug_renderer_info` podia ser simplesmente mascarada sem quebrar nada. O estudo de medição
de privacidade de WebGPU (arXiv, 26/06/2026) é o artefato. `e3.1` é a resposta previsível dos
navegadores, e `e3.1.1` é a saída de compromisso: um rótulo grosso de capacidade no lugar da
identidade fina do chip.

`e4` e `e4.1` estão marcados com prazo no limite do horizonte e confiança baixa de propósito: o
mecanismo (dado e computação no mesmo lugar, sem servidor) é sólido, mas a inércia das áreas que
simulam é enorme e a classe de referência é péssima — Jupyter levou uma década para virar padrão, e
não morreu.

`e5` e a sua descendência carregam o **quem perde** do mapa, e são o ponto em que o recorte
brasileiro deixa de ser nota de rodapé. Mecanismo: quando a capacidade que importa passa de rede
para GPU, a desigualdade muda de eixo — e o eixo novo é pior, porque rede se compra por mês e GPU
se compra por aparelho. Os números da seção 3.5 sustentam: 65% só de celular, 87% na classe DE,
10% de computador na DE, Samsung com 48% do mercado e a linha Xclipse ainda esperando o Chrome 154.
`e5.2` tem `sinal: fraco` e `confianca: media` deliberadamente — é o caso em que há pouca evidência
observável hoje e mecanismo forte.

`e6` decorre **porque** o navegador do óculos, entregando a sessão imersiva, elimina a etapa de
submissão e revisão. Prazo empurrado para 2030 no §6 (era 2029): a classe de referência é o PWA,
que prometeu isto há dez anos e está em 4,6% de "Add to Home Screen" no mobile. `e6.1` liga ao
único lugar onde há dinheiro medido: a briga da comissão. `e6.2` é o efeito mais concreto para quem
projeta — muda o artefato de trabalho.

`e7` ficou sem filhos por aplicação da **regra de parada** (§3.9): tudo o que eu derivava dele
("SEO de XR", "agregadores de link imersivo") era o próprio efeito amadurecendo, com o mesmo ator e
o mesmo mecanismo. Registro a parada em vez de inventar um nível.

`e8` é **quem bloqueia, com nome**: o fabricante do óculos. O mecanismo é elegante e não exige má
fé — basta não implementar. A Apple não implementa `immersive-ar` e oferece `<model>` com USDZ;
o resultado prático é que a experiência de AR na web não existe no visionOS, e a de visualização de
produto existe, no formato da Apple. `e8.2` é a **retroação da raiz 2**: manter WebXR e nativo em
paralelo devolve o custo que o link tinha economizado.

`e9` é o único efeito de primeira ordem com `confianca: alta` junto de `e11`, e é o achado técnico
do mapa. Mecanismo: sem `XRGPUBinding` implementado, uma sessão WebXR desenha por `XRWebGLLayer`;
logo, quem quer o compute shader da raiz 1 dentro do óculos da raiz 2 não tem caminho padronizado.
Artefatos: Editor's Draft de 15/06/2026, o three.js adicionando MSAA para WebXR/WebGPU em
08/09/2026, e o Quest Browser marcando WebGPU como **experimental** ainda em 21/04/2026. Prazo 2028
porque é quando a divisão estará resolvida ou terá se consolidado como permanente — e note que este
efeito é, na prática, um **freio à convergência das duas raízes**.

`e10` e `e10.1` ligam a raiz 2 à raiz 3: quando XR vira campanha, a duração vira orçamento.

`e11` tem `sinal: forte` e `prazo: 2027` por um motivo raro num mapa de futuro: **existe uma data
publicada**. O 8th Wall desliga tudo em 28/02/2027. Não é inferência.

`e12`, `e12.1` e `e12.1.1` são a versão pessoal da raiz 3, e a mais fácil de verificar na própria
turma: peça a um aluno o link de um projeto de dois anos atrás.

`e13` e `e13.2` são a versão institucional. `e13.2` — perda de reprodutibilidade — é o efeito que
eu apostaria como o mais provável de se confirmar cedo, porque o ciclo de publicação acadêmica é
mais longo que o ciclo de hospedagem de uma demo.

`e14` é a **retroação da raiz 3**, e fecha o mapa numa ironia: a solução para a impermanência do
link é empacotar, e empacotar é o que a loja faz. `e14.1` diz o que sobra da loja nesse mundo: não
a vitrine (a busca resolve), não a cobrança (o link externo resolve), mas a **permanência** — que é
justamente a função que ninguém estava tentando substituir.

### Cruzamentos

**Convergência 1 — o gerenciador de modelos e a loja de permanência.** `e1.3.1` (o navegador ganha
gerenciador de modelos com cota e desinstalação, vindo da raiz 1) e `e14.1` (a loja se reposiciona
como serviço de permanência, vindo da raiz 3) chegam ao mesmo lugar por caminhos independentes: **a
função de loja volta, deslocada.** Numa, ela reaparece dentro do navegador para administrar peso
baixado; na outra, reaparece fora dele para administrar durabilidade. Este é o achado mais valioso
do mapa, porque contradiz a leitura que o enunciado do tema convida a fazer. A loja não é
eliminada pelo link; ela é **desagregada** em quatro funções e **reagregada** em outros lugares.

**Convergência 2 — a reintermediação pelo motor.** `e9.1` (dependência de motor aumenta, vinda da
raiz 2) e `e2.1.1` (a vantagem vai para quem sabe caber em pouco, vinda da raiz 1) convergem: quem
sabe caber em pouco, na prática, é quem domina o motor. A promessa de "a web é aberta, não tem
dono" sobrevive no padrão e morre na prática, porque três projetos concentram o conhecimento
operacional.

**Retroalimentação negativa — o peso que a leveza produz.** `e1.3` (a primeira visita baixa
gigabytes) enfraquece diretamente a raiz 1: quanto mais capaz o modelo local, maior o download,
menor a vantagem sobre instalar um aplicativo. Ciclo: mais capacidade → mais peso → mais atrito de
primeira visita → menos uso → menos incentivo para embarcar modelo. O ponto de equilíbrio é o
tamanho de modelo que cabe num download tolerável, e ele não está subindo tão rápido quanto a
qualidade dos modelos.

**Retroalimentação negativa — o custo que volta.** `e8.2` (manter dois caminhos) devolve à raiz 2
o custo que ela prometia cortar. Enquanto a base instalada de óculos não justificar abrir mão do
nativo, o link é **custo adicional**, não substituto.

**Contradição registrada e não resolvida.** `e6` diz que a aprovação de loja deixa de ser
obrigatória; `e8` diz que o fabricante ganha um ponto de controle novo. As duas não podem ser
plenamente verdadeiras no mesmo aparelho: ou o navegador embarcado entrega a plataforma inteira, e
a loja perde o gargalo, ou ele entrega o que o fabricante quiser, e o gargalo apenas muda de nome —
de "revisão de app" para "recurso não implementado". O que decide entre as duas não é técnico: é se
algum regulador passar a tratar **recurso de navegador embarcado** como objeto de obrigação, do
jeito que a DMA tratou motor de navegador. E a evidência de 2026 sobre isso é desanimadora: 26
meses depois do prazo, nenhum motor alternativo embarcou no iOS.

### Cobertura STEEP e quem perde

| Eixo | Efeitos | Observação |
|---|---|---|
| **Social** | `e5`, `e5.1`, `e5.2`, `e12`, `e12.1.1` | desigualdade de acesso muda de eixo; memória profissional se degrada |
| **Tecnológico** | `e1`, `e3`, `e9`, `e9.1`, `e1.3` | a pilha não compõe; a API que desenha também mede |
| **Econômico** | `e2`, `e2.1`, `e6.1`, `e8.2`, `e10.1`, `e14.1` | incidência de custo, comissão, vida útil contratual |
| **Ecológico** | `e2.2` | **quase vazio, e registro isso**: o único efeito é a métrica de watt. Não forcei os demais — não encontrei mecanismo específico ligando este tema a efeito ambiental que não servisse para qualquer tema de computação |
| **Político** | `e6.1.1`, `e8.1.1`, `e5.1.1`, `e13.1.1` | disputa de comissão, compromisso de fabricante, política de acesso, depósito legal |

**Quem perde, nomeado:** o provedor de API de inferência por token (`e1`); a loja, na função de
cobrança (`e6.1`); o profissional de relacionamento com plataforma no estúdio médio (`e6.2.1`);
quem usa aparelho de entrada, e no Brasil isso é a classe DE (`e5.2`); quem criou obra interativa e
não guardou cópia (`e12`); o pesquisador cujo objeto sai do ar (`e13.2`); e — não intuitivo — **o
próprio estúdio que apostou no link**, que descobre em `e8.2` que precisa manter os dois caminhos.

## 6. Sinais fracos e wildcards

### Sinal fraco 1 — A retratação da estatística

**Onde foi visto.** O relatório público de benchmark de GPU em navegador, com 32.604 submissões
entre 10/10/2025 e 13/04/2026, **retirou em agosto de 2026** sua alegação de que 86,2% das
execuções usaram WebGPU, e passou a marcar submissões como `renderer_unverified`, excluindo-as de
comparações de API.

**O que mudaria.** Se for confirmado que não há como saber qual backend desenhou os quadros na base
instalada, então a decisão de portar para WebGPU passa a ser tomada **sem instrumento de medida** —
e decisões assim são tomadas por moda, não por dado. Isso atrasa `e1` e `e6` em vários anos, porque
comprador corporativo não financia migração que não consegue medir.

**Sinal observável de que está crescendo.** Um capítulo de WebGPU no Web Almanac 2026, ou um
contador de uso em chromestatus com metodologia publicada. Se nenhum dos dois aparecer até o fim de
2027, a ausência de medida é estrutural, não temporária.

### Sinal fraco 2 — O elemento `<model>` como caminho paralelo

**Onde foi visto.** Safari 26.0 (15/09/2025) traz o elemento HTML `<model>`, exclusivo do visionOS,
usando USDZ, com `environmentmap`, `autoplay`, `loop` e `stagemode="orbit"`.

**O que mudaria.** Se a Apple estender o `<model>` para iOS e macOS e **continuar** sem
`immersive-ar`, o 3D na web bifurca: o caso comercial dominante (ver objeto em 3D, provar produto)
resolve-se por elemento declarativo com formato da Apple, e o WebXR fica restrito ao caso imersivo
completo, que é o de menor volume. A raiz 2 perde a maior parte do seu mercado sem que ninguém
bloqueie nada.

**Sinal observável.** `<model>` aparecer em Safari para iOS/macOS; ou o Chrome implementar algo
equivalente (há histórico: `model-viewer` é um componente, não um elemento da plataforma). Um
elemento declarativo de 3D entrando no caminho de padronização do WHATWG é o marco.

### Sinal fraco 3 — Splat treinado dentro do navegador

**Onde foi visto.** Em agosto de 2026, uma biblioteca MIT que roda SfM por SIFT **e treino de
gaussian splat** dentro de uma aba; e dois renderizadores nativos de splat em WebGPU em duas
semanas (three.js em 10/08, `@luma.gl/splats` em 24/08).

**O que mudaria.** Se o **treino** — e não só a exibição — couber no navegador, some a última razão
técnica para um pipeline servidor em captura 3D, e a raiz 1 ganha um caso de uso pesado, visual e
economicamente óbvio. É o caminho mais provável de a raiz 1 virar prática em mídia, antes da IA
generativa.

**Sinal observável.** Uma ferramenta de captura de consumo (celular → cena) que anuncie "nada é
enviado para servidor" como recurso, não como curiosidade.

### Sinal fraco 4 — O aviso de desligamento com data

**Onde foi visto.** 8th Wall: serviço hospedado desligado em 28/02/2026; experiências publicadas no
ar até **28/02/2027**; depois, links param e dados são apagados. Código aberto sob MIT em
10/03/2026, com o binário do motor distribuído desde janeiro.

**O que mudaria.** Se, em 03/2027, houver reportagem contando obras perdidas com nome e autor, a
raiz 3 sai do campo especulativo e entra na pauta de quem contrata. Se passar em silêncio, a raiz 3
fica dormente por mais um ciclo — e o mapa erra.

**Sinal observável.** Um museu, uma agência ou uma universidade **citar cláusula de sobrevida** em
edital de contratação de experiência digital. É o menor evento verificável que confirmaria `e11.1`.

### Wildcard 1 — Uma fabricante desliga o WebXR por padrão

**Mecanismo.** O fabricante do óculos controla o navegador embarcado. Se um incidente de segurança
ou de conteúdo — uma experiência WebXR que induza enjoo severo, capture ambiente doméstico sem
consentimento claro, ou explore o rastreamento de mãos — ganhar repercussão, a resposta barata é
exigir *opt-in* explícito por sessão, ou desligar o módulo por padrão e reabilitá-lo só para
domínios verificados. Tecnicamente é uma linha de configuração; politicamente é "proteção do
usuário".

**Por que é improvável.** Os três fabricantes investiram em WebXR de forma verificável em 2026
(Quest Browser com space-warp e foveação; Android XR com módulo de AR completo; Safari com WebXR
por padrão no visionOS). Desligar destruiria investimento próprio.

**O que faria com o mapa.** Mataria `e6`, `e7` e `e10`; transformaria `e8` de "ponto de controle"
em "controle exercido"; e a raiz 2 viraria contexto. As raízes 1 e 3 sobreviveriam intactas — o que
é, aliás, a prova de que não são a mesma raiz disfarçada.

**Sinal precoce.** Um navegador de óculos mover WebXR para trás de uma permissão por sessão (não
por domínio). O Android XR já pede permissão para mapeamento 3D, câmera, rosto, olhos e mãos, com
persistência **por domínio** — a mudança para "por sessão" seria o primeiro passo, e é pequena o
bastante para passar despercebida num release note.

### Wildcard 2 — Um navegador passa a exigir orçamento de energia por aba

**Mecanismo.** Pressão regulatória ou de fabricante de aparelho leva um navegador a impor cota de
energia/GPU por aba — como já existe cota de armazenamento e limite de CPU em aba de segundo plano.
Uma página que exceda o orçamento é estrangulada ou pede permissão explícita.

**Por que é improvável.** Não existe hoje, no navegador, medida de energia por página que seja
comparável entre aparelhos; sem medida, não há cota. E o primeiro navegador a fazer isso perderia
os sites pesados para o concorrente.

**O que faria com o mapa.** `e2` e `e2.2` saltariam de fraco para forte de uma vez; `e1` seria
empurrado para depois de 2031; e a raiz 1 ficaria confinada a desktop. Seria o freio mais eficaz
imaginável para este tema, e viria do lado de onde ninguém está olhando.

**Sinal precoce.** Uma API de "energia por frame" ou "orçamento de GPU" aparecer em origin trial em
qualquer navegador. Ou um sistema operacional móvel começar a avisar o usuário que **uma aba**
está consumindo bateria — hoje o aviso é por aplicativo, e o navegador leva a culpa inteira.

## 7. Contra o próprio mapa

Este é o passo feito por escrito sobre o mapa já pronto, e ele alterou o mapa. O registro auditável
de alterações está em 7.8.

### 7.1 Pré-mortem — é 2031 e este mapa se mostrou errado. Por quê?

**Razão 1 (a mais provável): a base instalada de óculos nunca chegou.** O mapa tratou a raiz 2 como
uma ruptura de distribuição, mas a distribuição só importa se houver a quem distribuir. Se o
hardware de XR seguir em nicho até 2031, `e6`, `e7` e `e10` descrevem um mercado que não existe, e
a parte interessante do tema terá sido, o tempo todo, o WebGPU no celular — ou seja, a raiz 1.
→ **Ação: `e6` teve o prazo empurrado de 2029 para 2030 e `e7` foi rebaixado para `confianca:
baixa`.** Este mapa deliberadamente **não** usa números de vendas de óculos, porque não consegui
abrir fonte primária confiável sobre isso nesta rodada (registro em 8 e 12); a consequência é que a
raiz 2 está apoiada em capacidade técnica e em investimento de fabricante, não em demanda medida. É
a maior fragilidade do documento.

**Razão 2: o "sem instalação" nunca foi verdade para o caso que importa.** Se o padrão de mídia com
IA no navegador exigir sempre gigabytes na primeira visita, a vantagem sobre o aplicativo some, e
`e1` descreve uma mudança de embalagem, não de natureza. A evidência já está no mapa como `e1.3` —
e talvez `e1.3` devesse ser a raiz, e `e1`, o efeito.
→ **Ação: `e1` caiu de `confianca: alta` para `media`.**

**Razão 3: a raiz 3 é verdadeira e irrelevante.** Obras digitais somem desde sempre; o Flash levou
duas décadas de web e a civilização seguiu. É possível que em 2031 ninguém tenha se importado, e que
`e11.1`, `e13.1` e `e11.1.1` descrevam uma preocupação de arquivista que o mercado nunca comprou.
→ **Ação: `e11.1` caiu de `media` para `baixa` e `e11.2` foi removido** (ver 7.8).

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

Três efeitos caíram neste teste:

- **`e7`** ("catálogo indexado em vez de curado") é literalmente a história da web aplicada a um
  conteúdo novo. Não tem mecanismo de não-linearidade: é "a busca vence a vitrine, de novo".
  Mantido, rebaixado, e **sem filhos** — o que eu derivava dele era mais extrapolação.
- **`e4`** ("ciência migra para a aba") é o mesmo movimento que já ocorreu do desktop para o
  notebook e do notebook para o Colab. Rebaixado para `confianca: baixa` e prazo empurrado para
  2031, no limite do horizonte.
- **`e10.2`** ("agência volta a ser a maior compradora") é extrapolação do que já acontece — era
  assim no WebAR do 8th Wall. Mantido como `fraco`/`baixa` porque tem valor descritivo para quem vai
  projetar, mas não é achado.

### 7.3 Velocidade de adoção — cada prazo contra sua classe de referência

| Efeito | Prazo | Classe de referência usada | Veredito |
|---|---|---|---|
| `e1` | 2029 | WebAssembly: baseline 2017, ainda nicho em 2025 (8 anos) | 3 anos após estável no Chrome é **otimista**; mantido por causa da Prompt API estar na plataforma, não em biblioteca |
| `e6` | **2030** (era 2029) | PWA: 10 anos, 4,6% de "Add to Home Screen" no mobile | empurrado um ano; ainda assim otimista |
| `e9` | 2028 | ciclo de padronização W3C: Editor's Draft → implementação → estável, tipicamente 2 a 4 anos | compatível |
| `e11` | 2027 | não é estimativa: **data publicada** de desligamento (28/02/2027) | não se aplica |
| `e13.1` | **2031** (era 2030) | preservação digital institucional: o web archiving levou ~15 anos entre proposta e prática corrente | empurrado um ano; possivelmente ainda cedo |
| `e5.2` | 2030 | difusão de hardware no parque brasileiro: troca de aparelho de entrada leva 4 a 5 anos | compatível |

A regra que aplico e declaro: **prazo com `sinal: fraco` e sem classe de referência não entrou**.
Foi por isso que dois candidatos saíram (7.8).

**Efeitos fora da janela do mapa, declarados.** Cinco efeitos de terceira ordem têm prazo em 2032 e
portanto **passam do horizonte de 2031**: `e1.2.1` (auditoria de privacidade por inspeção de
tráfego), `e4.1.1` (a figura executável e o fim do monopólio do PDF), `e5.1.1` (a diferença entre as
duas versões vira política pública), `e11.1.1` (depósito de executável em encomenda pública) e
`e13.1.1` (depósito legal de software). A skill permite que a terceira ordem ultrapasse o horizonte,
desde que se diga — e digo: **esses cinco não são previsões para 2031, são o que o mapa aponta
depois dele**, e por isso todos carregam `confianca: baixa`. Nenhum efeito de primeira ou segunda
ordem passa de 2031.

### 7.4 A raiz que não acontece

- **Se a raiz 1 não acontecer** (WebGPU fica como "WebGL mais rápido", compute nunca passa de
  demo): sobram `e6` a `e10` inteiros — a raiz 2 desenha com WebGL e não perde nada — e a raiz 3
  inteira, que não depende de compute. Some o ramo `e1`–`e5`. O mapa perde um terço e continua de
  pé.
- **Se a raiz 2 não acontecer** (XR segue em nicho, ou o fabricante fecha a porta): somem `e6` a
  `e10`; as raízes 1 e 3 permanecem, e a raiz 3 até **ganha** força, porque o conteúdo 2D efêmero é
  mais volumoso que o imersivo. O mapa perde um terço.
- **Se a raiz 3 não acontecer** (alguém resolve permanência, ou ninguém se importa): somem `e11` a
  `e14`, e com eles a convergência 1, que é o achado do mapa. As raízes 1 e 2 permanecem.

Nenhuma das três sustenta as outras duas. O teste passa: **não é uma raiz disfarçada em três.**
O que **não** passa é o oposto — `e2` e `e3` dependem estritamente da raiz 1, e por isso foram
recusados como raízes na seção 4.0, e não promovidos.

### 7.5 Suposições escondidas

1. **Que os quatro navegadores continuam existindo e convergindo.** O mapa assume concorrência
   entre motores. Se o Firefox sair do mercado — e a sua cobertura de WebGPU em Linux e Android
   ainda era "em desenvolvimento" em 2026 —, a "plataforma aberta" da web vira dois fornecedores, e
   `e8` deixa de ser problema só do óculos.
2. **Que a Apple não quebra o WebGPU por decisão de produto.** O Safari 26.4, seis meses depois do
   lançamento, não traz recurso novo de WebGPU: traz correção de PNG. Se o ritmo for esse, "está nos
   quatro navegadores" e "funciona igual nos quatro" são coisas diferentes, e o mapa às vezes trata
   como iguais.
3. **Que energia é barata e o aparelho aguenta.** O mapa quase não tem eixo ecológico (registrado em
   5) e assume que rodar modelo e 24 milhões de gaussianas no aparelho de quem acessa é
   sustentável. O wildcard 2 existe porque essa premissa pode quebrar.
4. **Que hospedar continua barato.** A raiz 3 assume que quem desiste desiste por falta de receita.
   Se o custo de servir geometria em streaming subir, a raiz 3 acelera muito.
5. **Que o padrão continua aberto.** WebGPU é do W3C, mas as implementações são de três empresas, e
   o WGSL, o Dawn e o Tint estão concentrados em uma. "Padrão aberto" e "implementação
   distribuída" não são a mesma coisa.

Premissa quebrada vira wildcard: a 3 virou o wildcard 2. As outras estão registradas e não viraram
efeito, para não inflar o mapa.

### 7.6 Viés do autor

Dois, e são de sinais opostos.

**Viés a favor.** Gosto da web como plataforma e tenho simpatia intelectual pela tese "o link vence
a loja". Isso aparece em `e6` e `e6.2`, que descrevem uma mudança de ofício que eu **queria** que
acontecesse. A correção que apliquei foi metodológica, não de gosto: exigi classe de referência, e
a classe de referência (PWA) é humilhante para a tese.

**Viés contra.** Também tenho fascínio pela ideia de perda e de arquivo, e a raiz 3 é
suspeitosamente a parte mais bem escrita do documento. Ela entrou porque tem uma data publicada
(28/02/2027) — se não tivesse esse artefato, eu teria de admitir que a escolhi por gosto. Registro
que `e12.1.1` ("a memória chega aos anos 2030 como vídeo de terceiros") é a frase de que mais
gosto no mapa, e que gostar de uma frase não é evidência.

### 7.7 Calibração

Depois das alterações, contados pelo verificador: primeira ordem, **2 altas, 10 médias, 2
baixas**; segunda ordem, **0 altas, 14 médias, 7 baixas**; terceira ordem, **0 altas, 0 médias, 14
baixas**. A confiança cai monotonicamente com a ordem, como exige o §3.6 da skill: nenhuma `alta`
sobrevive à segunda ordem, e a terceira é inteiramente `baixa`. As duas únicas `alta` de primeira ordem são `e9` (apoiada
em documento de especificação e changelog de motor) e `e11` (apoiada em data de desligamento
publicada) — as duas em que a evidência é documental e não inferencial.

### 7.8 Registro de alterações — o que a bateria derrubou

**A bateria derrubou coisa em todas as três raízes.** Nove alterações, três delas remoções.

| id | antes | depois | por quê |
|---|---|---|---|
| `e1` | `confianca: alta` | `confianca: media` | pré-mortem razão 2: se o download de gigabytes é sempre necessário, `e1` descreve embalagem e não natureza |
| `e3.2` | existia: *"anunciante e antifraude adotam impressão digital de GPU como sinal, e reguladores a alcançam depois"* | **removido** | teste da causa solta (§3.10): acontece igual por canvas, WebGL e fontes; não deriva desta raiz |
| `e4` | `prazo: 2030`, `confianca: media` | `prazo: 2031`, `confianca: baixa` | extrapolação linear do movimento desktop→notebook→Colab; classe de referência (Jupyter) é lenta |
| `e6` | `prazo: 2029` | `prazo: 2030` | classe de referência PWA: 10 anos e 4,6% de adoção em mobile |
| `e7` | `confianca: media` | `confianca: baixa`, e **sem filhos** | extrapolação linear; os filhos derivados eram o próprio efeito amadurecendo (regra de parada) |
| `e7.1` | existia: *"aparece disputa por posição em busca de conteúdo imersivo — SEO de XR"* | **removido** | serve para qualquer tema com conteúdo novo; falha no teste de especificidade |
| `e11.1` | `confianca: media` | `confianca: baixa` | pré-mortem razão 3: cláusula de sobrevida depende de um comprador que ainda não se manifestou |
| `e11.2` | existia: *"emerge um mercado de hospedagem de longo prazo para mídia executável, com preço por década"* | **removido** | sem mecanismo de quem paga; é desejo, não efeito |
| `e13.1` | `prazo: 2030` | `prazo: 2031` | classe de referência: web archiving levou ~15 anos entre proposta e prática |

Os três efeitos removidos estão escritos por extenso na seção 12, com o que diriam se tivessem
ficado.

## 8. O que a máquina errou

Sou eu, a máquina, sobre esta rodada. Nove itens, com o motivo da desconfiança.

**1. Quase publiquei que WebXR e WebGPU entraram no Interop 2026 — não entraram.** Duas fontes de
busca afirmaram, com confiança e em parágrafos bem escritos, que "a WebXR Device API é área de foco
proposta do Interop 2026, com a Safari juntando-se a Chrome e Quest Browser". Ao abrir a proposta no
GitHub, o resumo automático ainda me disse que o status "Done" indicava aceitação. Só ao abrir o
**anúncio oficial** no web.dev (12/02/2026) e contar as vinte áreas é que ficou claro: nem WebXR nem
WebGPU estão na lista. "Done" no quadro do projeto significa triagem concluída, não proposta
aceita. **Este erro teria invertido o sinal de `e8` e de `e8.1.1`** — de "os fabricantes não se
comprometeram" para "os fabricantes se comprometeram". Foi o erro mais grave que quase entrou.

**2. Citei de segunda mão uma estatística do Web Almanac que não existe.** Vários textos repetem
que "o Web Almanac 2025 mediu 65% dos novos web apps com 3D usando WebGPU", com uma comparação
bonita ("eram 8% dois anos atrás"). Abri o capítulo de Capabilities do Web Almanac 2025: ele mede 86
capacidades, lista as sete mais usadas, e **não menciona WebGPU, WebXR nem WebGL**. O número é
fabricado, e é do tipo mais perigoso: redondo, com série histórica, e atribuído a uma fonte real e
verificável — o que faz o leitor não verificar.

**3. A maior parte dos resultados de busca sobre este tema é conteúdo gerado por máquina.** Dos
oito primeiros resultados de várias buscas, a maioria eram artigos com títulos de otimização
("WebGPU 2026: 70% Browser Support, 15x Performance Gains", "WebGPU Hits Critical Mass") em
domínios sem autoria, repetindo uns aos outros com números incompatíveis entre si — 70%, 84,68%,
85%, 86,2%, 87,35% para a mesma grandeza. O único número que sobreviveu foi o do caniuse, porque
abri a página e ele é decomposto (85,72% + 1,63%). **Registro o risco:** este tema, por ser novo e
técnico, é um dos mais contaminados por texto sintético que já encontrei, e um mapa feito só por
busca sairia inteiramente errado.

**4. Não consegui abrir a fonte acadêmica do ataque de cache em GPU.** O artigo "WebGPU-SPY:
Finding Fingerprints in the Sandbox through GPU Cache Attacks" aparece nas buscas com um número
chamativo (90% de precisão para identificar sites entre os 100 mais acessados), mas a ACM devolveu
403. **Não usei o número em lugar nenhum do mapa.** `e3` está apoiado apenas no estudo de medição
do arXiv, que abri.

**5. O resumo automático do estudo do arXiv que usei é vago.** A leitura que obtive de "What
Browsers Do in the Shaders: A Measurement Study of WebGPU Privacy" (26/06/2026) descreve
metodologia e conclusões em termos gerais, sem os números de entropia que eu gostaria de citar.
Usei-o como evidência da **existência** do problema de impressão digital, não da sua magnitude — e
mesmo assim `e3` ficou com `confianca: media` e não alta.

**6. Uma soma não fecha e eu a reporto do mesmo jeito.** O StatCounter para o Brasil em agosto de
2026 lista Android 16.0 (25,18%), 15.0 (22,6%), 13.0 (15,46%), 14.0 (14,22%), 12.0 (7,81%) e 11.0
(6,16%); a leitura automática me devolveu "Android 12 ou superior = 91,43%", mas os valores listados
para 12+ somam 85,27%. A diferença provavelmente está em versões não listadas no recorte. Reporto
os valores individuais e **não** uso o agregado. O argumento do mapa não depende dele: o gargalo
brasileiro que importa é GPU, não versão de sistema.

**8. Troquei uma fonte na revisão final, e isso muda uma afirmação do mapa.** Eu havia escrito a
descrição do Babylon.js a partir do anúncio da versão 9.0 no Windows Developer Blog (26/03/2026),
que abri e li — dali vinham o Clustered Lighting, a iluminação volumétrica em compute shader e a
economia de "40% ou mais de memória de GPU" do Frame Graph. Ao rodar o verificador de links,
descobri que a página devolve **HTTP 403** a qualquer cliente que não seja navegador. Pela regra da
disciplina, link que não responde não é fonte. Reescrevi o trecho a partir do changelog do GitHub e
**removi os três números do corpo do documento**, deixando-os registrados em 12.6 como lidos e não
citáveis. Registro também uma incerteza que sobrou: a leitura automática do changelog me devolveu
"10 de setembro de 2024" como data da 9.26.0, o que é impossível (a linha 8.x é de 2025) —
provavelmente é 10/09/2026. Por isso escrevi "a release mais recente listada em 11/09/2026" em vez
de afirmar a data.

**9. Duas afirmações que eu queria fazer, e não faço.** (a) Li em resultado de busca que o Meta
cobra ~15% sobre compras dentro de experiência web no Quest, contra 30% na loja — número que
sustentaria `e6.1` de forma linda. Abri a página oficial de opções de distribuição do Horizon OS:
ela lista as opções e **não menciona comissão alguma**. Não uso o número. (b) O enunciado do tema
cita "Gestalt Village" como o cruzamento navegador+modelo; procurei e não encontrei o projeto.
Registro como não verificado e não construo nada sobre ele.

## 9. Três cenários para 2031

### Provável — "a web ganhou o compute e perdeu o óculos"

É 2031. O WebGPU é infraestrutura invisível: quem faz 3D na web não pensa mais nisso, do jeito que
ninguém pensa em WebGL desde 2018. A novidade real da década não foi gráfica, foi computacional — a
aba virou o lugar onde roda o modelo pequeno, o filtro, a simulação, o reconhecimento. Ferramentas
criativas de nicho embarcam modelo e cobram por licença; ferramentas grandes continuam na nuvem,
porque os modelos que importam não cabem. O XR no navegador existe, funciona, e é uma linha de
orçamento de agência: campanhas, museus, feiras. A loja de aplicativos não morreu nem ficou
irrelevante — perdeu a função de cobrança, que os tribunais abriram, e ganhou uma função nova, de
permanência, porque o mercado descobriu que link não dura. O que se perdeu, quase ninguém contou: as
obras de 2020 a 2026 que existiam só como serviço não estão mais lá, e o registro delas é vídeo de
terceiros. No Brasil, a experiência "de verdade" roda em 20% dos aparelhos, e a versão que roda em
todos é reconhecidamente pior — e isso é tratado como fato da vida, não como problema.
**Sinal precoce de que estamos entrando neste:** o primeiro grande produto de mídia que anuncia
"funciona sem instalar" e, na primeira visita, baixa mais de 1 GB sem que ninguém reclame.

### Desejável — "a permanência virou requisito"

É 2031. Aconteceu o que era barato e ninguém tinha feito: publicar experiência executável passou a
vir com um empacotamento padrão, autocontido, que qualquer navegador futuro consegue abrir — e
editais públicos, museus e universidades passaram a exigir esse pacote na entrega, do jeito que já
exigem o relatório final. A perda do 8th Wall em 2027 foi documentada com nome e autor e virou o
caso que se cita. O `XRGPUBinding` foi implementado nos três navegadores de óculos, e a pilha voltou
a ser uma só. Os fabricantes assumiram um compromisso público de recursos de navegador embarcado — o
Interop de 2029 incluiu WebXR, seis anos depois de a proposta ser recusada. E a camada de
capacidade que o navegador declara é grossa o bastante para degradar uma experiência com elegância e
fina demais para identificar ninguém. **O que teria de ser feito para chegar aqui:** alguém com
poder de compra — no Brasil, um edital da Lei Paulo Gustavo, um museu federal, uma universidade —
escrever "entrega de executável autocontido e cláusula de sobrevida" em uma minuta, e outros
copiarem. É a menor alavanca do mapa inteiro, e é de quem contrata, não de quem programa.

### Indesejável — "a porta aberta que mede quem entra"

É 2031. O WebGPU cumpriu tudo o que prometeu e a conta chegou. O acesso à GPU virou o identificador
mais estável da web: mais que o cookie, mais que o canvas, porque o desenvolvedor **precisa** dele
para decidir o que renderizar, e por isso não dá para mascarar. Rastreamento se reorganizou em
torno do hardware, e quem usa aparelho antigo é identificado com mais precisão do que quem usa
aparelho novo. Do lado do XR, o fabricante do óculos exerceu o controle que tinha: o WebXR está lá,
atrás de uma permissão por sessão, com um aviso que assusta, e ninguém constrói negócio em cima
disso — o que sobrou foi a loja, com a comissão renegociada para 20% e uma reportagem por ano
dizendo que agora vai abrir. E as experiências de 2026 não estão mais em lugar nenhum.
**Sinal precoce deste cenário:** o primeiro caso público de discriminação de preço ou de conteúdo
baseado em modelo de GPU detectado no navegador. Não é ficção: é a aplicação óbvia de `e3` por quem
já faz isso com todo o resto.

## 10. O experimento

### A mesma cena, quatro portas

**O que é.** Uma única captura 3D — feita pela turma, com celular, de um espaço do CIn — publicada
**quatro vezes**, pelos quatro caminhos que o mapa põe em disputa:

1. **Porta A — link WebGPU.** A cena como gaussian splat, servida por página com renderizador
   WebGPU e LOD progressivo, com fallback declarado para WebGL 2.
2. **Porta B — link WebXR.** A mesma cena numa sessão imersiva, aberta por URL, no óculos que a
   turma tiver e no celular em modo *magic window*.
3. **Porta C — pacote de loja.** A mesma cena empacotada como PWA instalável e/ou aplicativo,
   percorrendo o caminho de submissão até onde for possível em uma aula.
4. **Porta D — vídeo.** A mesma cena gravada como vídeo, que é o que sobra quando tudo o mais sai
   do ar.

**Que pergunta sobre o futuro ele responde.** Três, todas do mapa, e nenhuma respondível por
leitura:

- **Quem conseguiu abrir?** (`e5`, `e5.1`, `e5.2`) Com os aparelhos reais de catorze alunos — e
  eles são o parque brasileiro, não o de conferência —, quantos abrem a porta A? Quantos abrem em
  WebGPU e quantos caem no WebGL? O número que não existe em lugar nenhum (seção 3.4) pode ser
  medido em sala, para n=14, e isso é mais do que qualquer fonte aberta deu.
- **Quanto custou, e a quem?** (`e2`, `e2.2`) Mede-se temperatura do aparelho, queda de bateria em
  dez minutos, e o custo de servir os bytes. A porta A cobra do aluno; a porta C cobra uma vez; a
  porta D cobra do servidor. A tabela resultante é a incidência de custo, em números da turma.
- **O que sobra em um ano?** (`e11`, `e12`) As quatro portas ficam publicadas e são reabertas na
  primeira aula de 2027.2. A aposta do mapa é que a porta D abre, a porta A depende de alguém ter
  renovado a hospedagem, e a porta B depende de um recurso de navegador que pode ter mudado.

**Que tecnologia emergente usa — e por que não dá com a madura.** Usa WebGPU (renderizador de splat
com ordenação na GPU e LOD por streaming) e WebXR (sessão imersiva por URL, com entrada por mãos
onde houver). Com tecnologia madura — WebGL 2 e vídeo 360° — o experimento **não responde à
pergunta central**: em WebGL a cena de milhões de gaussianas não cabe com desempenho comparável (o
próprio SuperSplat mede 13,3 contra 75,8 fps em 35 milhões), e sem WebXR não existe a porta B, que
é o objeto da raiz 2. A porta D, essa sim, é deliberadamente madura: é o controle do experimento.

**O que a turma faz ao testar em sala.** Cada pessoa abre as quatro portas **no próprio aparelho**,
e preenche quatro campos: abriu ou não; qual backend (a página informa); temperatura ao fim de dez
minutos; e uma nota de 1 a 5 para "eu instalaria um aplicativo para ver isto?". Depois, a turma
monta a tabela de incidência de custo e discute a contradição registrada na seção 5: em qual das
quatro portas o fabricante do aparelho teve poder de veto, e como isso apareceu.

**O resultado que me faria mudar de ideia.** Dois, simétricos.

- **Se a porta A abrir em WebGPU em mais de 80% dos aparelhos da turma, sem aquecimento
  significativo**, então `e5`, `e5.1` e `e5.2` estão errados, a desigualdade de GPU que estruturei
  não existe no parque real brasileiro de 2026, e o ramo inteiro da raiz 1 ligado a acesso precisa
  ser reescrito. Eu aceitaria isso: é o tipo de resultado que dado de fabricante não mostra.
- **Se a porta C — o caminho da loja — for mais rápida de publicar e mais confiável de abrir que as
  portas A e B**, então a raiz 2 não é ruptura nenhuma: o link é pior que o pacote, e o mapa está
  descrevendo uma preferência estética minha com cara de tendência.

## 11. Fontes

Trinta fontes, todas abertas e lidas em 11/09/2026. Fonte que não abriu está na seção 12 e não
sustenta nada no mapa.

1. `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status` — a tabela de estado de
   implementação mantida pelo próprio grupo de trabalho do WebGPU. Sustenta as versões por
   navegador e, sobretudo, as **lacunas** (Chrome 154 planejado para Samsung Xclipse; Linux por GPU;
   Firefox Linux/Android em 2026). Alta confiabilidade: é o mantenedor da especificação falando da
   própria implementação.
2. `https://web.dev/blog/webgpu-supported-major-browsers` — post de 25/11/2025 que marca o
   fechamento do ciclo de suporte. Sustenta as versões de Chrome, Firefox e Safari. Confiável com
   ressalva de parte interessada: é publicação do Google sobre uma API que o Google lidera.
3. `https://caniuse.com/webgpu` — a única medida de cobertura que usei. Sustenta os **85,72% +
   1,63% = 87,35%**. Alta confiabilidade para cobertura de navegador; **não** mede uso, e o mapa não
   a usa para isso.
4. `https://webkit.org/blog/17333/webkit-features-in-safari-26-0/` — post de 15/09/2025. Sustenta a
   chegada do WebGPU ao Safari, a frase "WebGPU supersedes WebGL", o WGSL, e o elemento `<model>`
   exclusivo do visionOS com USDZ. Alta confiabilidade: é o fornecedor documentando o próprio
   lançamento.
5. `https://webkit.org/blog/17862/webkit-features-for-safari-26-4/` — post de 24/03/2026. Sustenta
   o argumento **negativo** de 7.5: seis meses depois, nenhum recurso novo de WebGPU e nenhuma
   menção a WebXR. Alta confiabilidade, mesma natureza.
6. `https://web.dev/blog/interop-2026` — post de 12/02/2026 com as vinte áreas de foco. Sustenta a
   afirmação central de que **WebXR e WebGPU não entraram** no Interop 2026. Alta confiabilidade: é
   o anúncio oficial do programa, feito conjuntamente pelos fabricantes.
7. `https://github.com/web-platform-tests/interop/issues/1021` — a proposta de WebXR para o Interop
   2026, aberta em 05/09/2025. Sustenta que a proposta **existiu** e quais dispositivos citava.
   Confiável como registro; o campo de status "Done" **não** significa aceitação, e este é o erro
   documentado em 8.1.
8. `https://www.w3.org/TR/webxr/` — Candidate Recommendation Draft de 09/06/2026 (anterior:
   16/03/2026). Sustenta o estágio da especificação e o critério de duas implementações
   independentes. Máxima confiabilidade: é a norma.
9. `https://github.com/immersive-web/WebXR-WebGPU-Binding/blob/main/README.md` — o repositório do
   módulo de ligação. Sustenta a existência e o escopo do `XRGPUBinding` — fornecer swap chains
   WebGPU às camadas do WebXR. Alta confiabilidade; o README não declara status, o que por si só é
   informação sobre maturidade.
10. `https://developer.android.com/develop/xr/web` — documentação oficial do Android XR. Sustenta a
    lista de módulos WebXR suportados pelo Chrome no Android XR, a profundidade estéreo com duas
    views, a entrada por mãos como mecanismo primário e o modelo de permissões por domínio. Alta
    confiabilidade.
11. `https://developers.meta.com/horizon/release-notes/web` — notas de versão do navegador do Meta
    Horizon OS. Sustenta a cronologia de 2026: 144 (02/03), 146.0 com WebGPU e projeção de
    profundidade experimentais (21/04), 146.1 (11/05), 149.1 com space-warp (27/07), 150.1 com
    foveação (28/08). Alta confiabilidade: é o changelog do fabricante.
12. `https://developers.meta.com/horizon/policy/distribution-options/` — política de distribuição do
    Horizon OS. Usada por **resultado negativo**: lista as opções (Horizon Store, Link PC VR Store,
    canais de release, sideloading) e **não menciona comissão**, o que me fez descartar o número de
    15% que circulava em buscas (8.7a). Alta confiabilidade para o que diz; silente sobre taxas.
13. `https://blog.playcanvas.com/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins/`
    — post de 03/06/2026. Sustenta todos os números de desempenho de splat (48,1→124,1 fps em 10 M;
    13,3→75,8 em 35 M; 38,1→77,6 no iPhone 13 Pro Max; 24 M de gaussianas no museu ferroviário) e a
    citação do caniuse em ~85%. Confiável com ressalva: é benchmark do próprio fornecedor, medido
    por ele, em cenas escolhidas por ele.
14. `https://github.com/mrdoob/three.js/releases/tag/r186` — release de 08/09/2026. Sustenta o
    renderizador nativo de splat em TSL, os carregadores, e **"Add MSAA support to WebXR WebGPU"**,
    que é a evidência de que a junção das duas APIs está sendo construída agora. Alta
    confiabilidade: changelog versionado.
15. `https://github.com/BabylonJS/Babylon.js/releases` — o changelog versionado do Babylon.js,
    linha 9.x, com a 9.26.0 como release mais recente listada em 11/09/2026. Sustenta o caminho de
    quad layer para WebGPU, as âncoras persistentes de WebXR, a captura de sala, o depth sensing com
    ciclo de vida, o controle de camadas de composição e o LOD por orçamento para streaming de
    splats. Alta confiabilidade: changelog versionado, verificável linha a linha. **Substituiu**, na
    revisão final, o anúncio do Babylon.js 9.0 no Windows Developer Blog, que eu havia lido mas que
    devolve HTTP 403 a cliente que não é navegador — e a regra da disciplina é que o link tem que
    responder (ver 8.8 e 12.5).
16. `https://radiancefields.substack.com/p/gaussian-splatting-in-august-2026` — boletim de agosto de
    2026. Sustenta os dois renderizadores nativos WebGPU (three.js em 10/08, `@luma.gl/splats` em
    24/08), os 7 KB do SPZ, a biblioteca MIT que treina splat na aba, e o SuperSplat como endpoint
    de publicação. Confiabilidade média-alta: boletim especializado, com links, mas sem revisão.
17. `https://www.roadtovr.com/niantic-webar-platform-8th-wall-open-source/` — matéria de 10/03/2026,
    por Scott Hayden. Sustenta o encerramento do serviço hospedado do 8th Wall e a abertura sob MIT.
    Confiabilidade alta para o setor; a data de 28/02/2027 para o apagamento vem da comunicação da
    própria empresa, reportada de forma consistente.
18. `https://www.w3.org/TR/webnn/` — Candidate Recommendation Draft de 10/09/2026. Sustenta que o
    caminho de NPU na web ainda não fechou, e o critério de duas implementações. Máxima
    confiabilidade.
19. `https://developer.chrome.com/docs/ai/prompt-api` — documentação oficial. Sustenta a
    estabilização da Prompt API para a web no **Chrome 148** e os requisitos: 22 GB livres, 4 GB de
    VRAM ou 16 GB de RAM com 4 núcleos, e a **ausência** de suporte em Android, iOS e ChromeOS fora
    de Chromebook Plus. Alta confiabilidade.
20. `https://github.com/mlc-ai/web-llm` — o motor de inferência em navegador sobre WebGPU. Sustenta
    a existência da categoria e a lista de modelos. Confiabilidade alta para o que é; **não** traz
    números de desempenho no README, e por isso não cito nenhum.
21. `https://almanac.httparchive.org/en/2025/capabilities` — capítulo de 2025. Sustenta as sete
    APIs mais usadas (incluindo "Add to Home Screen" em 4,6% no mobile, que é a classe de referência
    do `e6`) e a **ausência** de medição de WebGPU/WebXR/WebGL. Alta confiabilidade: metodologia
    publicada, com limitações declaradas.
22. `https://www.volumeshader.dev/en/blog/browser-gpu-benchmark-report-2026` — relatório sobre
    32.604 submissões entre 10/10/2025 e 13/04/2026, 73,6% em mobile. Sustenta o sinal fraco 1: a
    **retratação**, em agosto de 2026, da alegação de 86,2% de execuções em WebGPU. Confiabilidade
    média — é um site de benchmark —, mas **a retratação em si aumenta a confiança** na fonte.
23. `https://arxiv.org/pdf/2606.26412` — "What Browsers Do in the Shaders: A Measurement Study of
    WebGPU Privacy", 26/06/2026. Sustenta a existência do risco de impressão digital via WebGPU e o
    argumento de que os dados do adaptador são mais difíceis de mascarar que os do WebGL.
    Confiabilidade média: preprint sem revisão por pares, e a leitura que obtive é genérica (8.5).
24. `https://open-web-advocacy.org/blog/the-digital-markets-act-is-delivering-real-wins-but-not-yet-for-browser-engines/`
    — post de 15/05/2026. Sustenta que, 26 meses depois do prazo de 07/03/2024, **nenhum** motor
    alternativo embarcou no iOS. Confiabilidade média-alta com viés declarado: é organização de
    defesa da web aberta, parte interessada — mas o fato alegado é verificável por ausência.
25. `https://www.macrumors.com/2025/12/11/apple-app-store-fees-external-payment-links/` — 11/12/2025.
    Sustenta a decisão do Nono Circuito sobre comissão em links externos e os percentuais em disputa
    (27% contra os 30% padrão). Confiabilidade média-alta para noticiário do setor.
26. `https://mcvuk.com/business-news/why-browser-games-are-the-next-billion-dollar-bet/` —
    10/08/2026. Sustenta os números de jogos de navegador: 15 mil lançamentos HTML5 no 1º semestre
    de 2025 (4,9× o de 2023), Poki com 100 M de usuários mensais, CrazyGames com 61,1 M de visitas,
    37% jogando várias vezes por dia, sessão de 30 minutos, mercado de US$ 19,28 bi para US$ 28,44
    bi em 2032. Confiabilidade média: imprensa setorial citando dados de plataformas interessadas.
27. `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/` — 09/12/2025. Sustenta
    a TIC Domicílios 2025: 157 M de usuários (85%), 163 M (88%), **65% só pelo celular**, 87% na
    classe DE, 73% entre a população preta, 32% de domicílios com computador (97% na A, 10% na DE).
    Alta confiabilidade: pesquisa do NIC.br/Cetic com amostragem probabilística.
28. `https://gs.statcounter.com/android-version-market-share/mobile/brazil` — agosto de 2026.
    Sustenta a distribuição de versões do Android no Brasil. Confiabilidade média: mede
    visualizações de página, não aparelhos; e a soma reportada não fecha (8.6).
29. `https://telecomlead.com/smart-phone/brazil-smartphone-market-q2-2026-samsung-leads-with-48-share-as-rising-prices-reshape-demand-127559`
    — 02/09/2026, sobre dados da Omdia. Sustenta Samsung com 48% do mercado brasileiro, Motorola
    20%, Xiaomi 14%, OPPO 8%, Apple 7%, e os preços de entrada (R$ 1.299–1.399). Confiabilidade
    média: imprensa setorial reportando consultoria paga.
30. `https://en.wikipedia.org/wiki/WebGPU` — usada só para a cronologia institucional: grupo
    comunitário "GPU for the Web" criado em **16/02/2017**, e as implementações nativas (Dawn com
    Tint, wgpu). Confiabilidade média, usada apenas para datas corroboradas nas fontes 1 e 2.

## 12. Anexo — o levantamento bruto

### 12.1 Como esta rodada foi feita

Modo MAPA da skill `futurizacao-giordano` v1.2.0, em execução não interativa, conta CIn, modelo
Opus 5, em 11/09/2026. A entrevista do §0 foi substituída por bloco `briefing:` completo, entregue
no pedido; pela regra da skill, **briefing completo não rebaixa confiança**, e o que ele não cobre
está declarado em 12.2 como premissa assumida.

Sequência executada: leitura de `references/formato.md` → leitura de `references/verificar.py` →
inspeção da rodada 14 para calibrar extensão e densidade → 16 buscas web → 24 tentativas de abertura
de página, 22 bem-sucedidas → §1 âncora → §2 critério de maturidade com cinco recusas → §3 roda →
§4 cruzamentos → §5 sinais e wildcards → §6 bateria contra o mapa, com nove alterações → §7
cenários, experimento e fontes → §8 erros da máquina → verificação.

**Buscas realizadas** (português e inglês): WebGPU support Safari 26 Firefox Chrome baseline 2026;
WebXR 2026 Android XR Chrome Samsung Galaxy XR browser support; visionOS 26 Safari WebXR immersive
web; "WebGPU" adoption 2026 Chrome platform status usage; WebKit blog WebGPU Safari 26 release
notes; Interop 2026 focus areas WebXR WebGPU; Meta Quest Browser WebXR 2026 Horizon OS; three.js
WebGPURenderer default release 2026; WebLLM transformers.js WebGPU in-browser LLM benchmark;
PlayCanvas SuperSplat gaussian splatting browser 2026; WebNN status 2026 W3C CR Chrome; Unity 6
WebGPU web export Godot; Web Almanac 2025 WebGPU WebXR chapter; Epic v Apple injunction external
purchase links; Digital Markets Act 2026 Apple browser engine; Quest MAU / Vision Pro / Galaxy XR
install base; WebGPU security vulnerabilities fingerprinting 2026; Brasil TIC Domicílios 2025
celular único acesso; chromestatus WebGPU percentage page loads; Samsung market share Brazil 2026 +
Android version distribution; WebGPU mobile battery thermal throttling; immersive-web
WebXR-WebGPU-Binding XRGPUBinding; Babylon.js 9 release 2026; 8th Wall Niantic shutdown 2026;
visionOS WebXR AR module not supported; Poki CrazyGames 2026 monthly players; "Gestalt Village"
WebGPU browser; cloud rendering pixel streaming vs local WebGPU; Meta Horizon Store fee web apps;
WebXR museu educação navegador sem instalar.

### 12.2 Premissas assumidas que o briefing não cobria

1. **Número de disrupções-raiz: três.** A skill permite de duas a quatro. Escolhi três porque as
   duas candidatas adicionais (incidência de custo; impressão digital de GPU) **falharam no teste
   da causa solta** e viraram efeitos `e2` e `e3`. Declarado na seção 4.0.
2. **Tratamento do tema 16 (IA local no dispositivo).** O enunciado manda tratar aqui só a parte
   "no navegador". Assumi a fronteira assim: a **Prompt API do Chrome** e o **WebLLM** entram,
   porque são navegador; modelo rodando em NPU de celular fora do navegador, não. O `e1` e a sua
   descendência respeitam essa linha.
3. **Tratamento do tema 10 (captura 3D).** Gaussian splatting entra **apenas como carga de
   trabalho** — é o que dá números de desempenho de WebGPU e o que torna a raiz 3 material. Como se
   captura, não entra.
4. **Ausência de dados de base instalada de XR.** Não abri fonte primária confiável sobre vendas ou
   usuários ativos de óculos nesta rodada; os resultados de busca eram todos agregadores comerciais.
   **Consequência assumida e declarada em 7.1:** a raiz 2 apoia-se em capacidade técnica e
   investimento de fabricante, não em demanda medida. É a maior fragilidade do documento.
5. **Nota sobre o Brasil, não recorte brasileiro.** O mapa é global; o Brasil aparece em `e5.2` e na
   seção 3.5, com dados próprios. Não construí um ramo brasileiro completo.

### 12.3 Os efeitos removidos pela bateria do §6, por extenso

**`e3.2` — removido.** Texto original: *"Anunciante e antifraude adotam impressão digital de GPU
como sinal de risco, e reguladores de privacidade alcançam a prática depois."* Ordem 2, filho de
`e3`, com `sinal: fraco`, `prazo: 2030`, `confianca: baixa`. **Motivo da remoção:** teste da causa
solta (§3.10 da skill). Removendo a raiz 1, o efeito acontece igualmente — a indústria de
impressão digital já usa canvas, WebGL, fontes, áudio e temporização. O WebGPU melhora o sinal
existente; não o cria. Um efeito que aconteceria de qualquer jeito não deriva desta raiz.
**O que ele diria se tivesse ficado:** que a economia de rastreamento ganharia um identificador de
hardware quase à prova de limpeza de dados, e que a resposta regulatória chegaria com o atraso
habitual de três a cinco anos.

**`e7.1` — removido.** Texto original: *"Aparece disputa por posição em busca de conteúdo imersivo
— SEO de XR —, e quem já tem audiência web leva vantagem sobre quem tem audiência de loja."*
Ordem 2, filho de `e7`. **Motivo:** falha no teste de especificidade (§3.3). Troque "conteúdo
imersivo" por "podcast", "vídeo curto" ou "newsletter" e a frase continua servindo. É a história da
web aplicada a um objeto novo, e a skill proíbe explicitamente esse tipo de efeito.
**O que ele diria:** que o poder de descoberta migraria de quem cura para quem indexa — o que é
verdade e é banal.

**`e11.2` — removido.** Texto original: *"Emerge um mercado de hospedagem de longo prazo para mídia
executável, com preço por década em vez de por mês."* Ordem 2, filho de `e11`, com `prazo: 2031`.
**Motivo:** sem mecanismo de pagamento. Quem paga por uma década adiantada de hospedagem de uma
peça que já saiu de cartaz? O efeito descreve o que **deveria** existir, não o que decorre da raiz.
Um efeito sem pagador é desejo. **O que ele diria:** o que hoje é dito por serviços de arquivamento
web, que existem e são subfinanciados — o que é, aliás, a evidência contra ele.

### 12.4 Candidatos a raiz recusados, com o registro do §2

**Candidato recusado: WebGL e 3D no navegador.** Adoção em maioria desde meados dos anos 2010;
tratado como contexto na seção 3. Responde "não" à pergunta 1 (não rompe nada hoje) e sua lista de
"o que falta acontecer" é vazia — pela regra do §2, lista vazia significa que já aconteceu.

**Candidato recusado: WebGPU como sucessor do WebGL.** Rompe? "Faz o mesmo, melhor e mais barato" é
a definição de melhoria sustentadora. O que sobrou da candidatura — o compute shader — virou a raiz
1, que é outra coisa: não é desenhar melhor, é **calcular**.

**Candidato recusado: motores exportando para a web.** Unity 6 com backend WebGPU experimental e
Godot 4.7 (junho de 2026) com WebAssembly SIMD por padrão e exportação wasm64. Melhoria de um
caminho que existe desde o Unity Web Player. Não rompe ofício nem modelo de negócio.

**Candidato recusado: PWA substitui aplicativo.** Dez anos, 4,6% de "Add to Home Screen" no mobile
pelo Web Almanac 2025. Não é emergente nem maduro: é uma promessa não cumprida, e por isso serve
como classe de referência para `e6`, que é a mesma promessa com roupa nova.

**Candidato recusado: pixel streaming / renderização em nuvem.** Considerado como raiz alternativa
("a experiência pesada roda no servidor e chega como vídeo"). Recusado porque não é ruptura
emergente — é a arquitetura que o WebGPU **substitui** no caso de uso deste tema, e porque o seu
custo por usuário/hora é justamente o que a raiz 1 elimina. Fica registrado como a alternativa
contra a qual a raiz 1 compete, e é o contraponto natural do experimento da seção 10.

### 12.5 Buscas que não deram em nada

- **"Gestalt Village"** (o cruzamento navegador+modelo citado no enunciado do tema): não encontrado
  em nenhuma busca. Os resultados devolveram WebLLM, Transformers.js e artigos genéricos sobre LLM
  no navegador. **Não usei.** Se o projeto existir, provavelmente é um repositório pequeno que o
  levantamento da turma encontrou no GitHub e que não tem presença indexável.
- **Número de uso real de WebGPU na base instalada:** procurado em quatro buscas distintas
  (chromestatus, Web Almanac, HTTP Archive, relatórios de benchmark). Não existe fonte confiável.
  Registrado como "sem número encontrado" na seção 3.4 — e virou o sinal fraco 1.
- **Comissão do Meta Horizon Store sobre conteúdo web:** o número de ~15% aparece em agregadores,
  mas a página oficial de opções de distribuição não menciona taxa alguma. Descartado.
- **Base instalada e usuários ativos de óculos:** todos os resultados eram sites de estatísticas
  comerciais agregando estimativas de terceiros, com números incompatíveis entre si. Não abri
  nenhum como fonte, e o mapa não usa nenhum. Declarado como fragilidade em 7.1.
- **`https://blogs.windows.com/windowsdeveloper/2026/03/26/announcing-babylon-js-9-0/`**: abriu
  normalmente para leitura, mas devolve **HTTP 403** a cliente que não é navegador, e por isso saiu
  da seção 11 na revisão final. O conteúdo está preservado em 12.6, e nenhum número dele sustenta
  efeito.
- **`https://dl.acm.org/doi/10.1145/3634737.3637648`** ("WebGPU-SPY: Finding Fingerprints in the
  Sandbox through GPU Cache Attacks"): HTTP 403. Não usado.
- **`https://immersive-web.github.io/WebXR-WebGPU-Binding/`** (a página do Editor's Draft): HTTP 404
  na tentativa de abertura. O conteúdo foi confirmado pelo README do repositório (fonte 9), que
  abriu, e a data de 15/06/2026 vem de resultado de busca — **registro que a data não foi
  confirmada em fonte primária aberta**, embora o fato (o documento existe e é Editor's Draft)
  esteja confirmado.
- **Consumo de energia de WebGPU por página:** não há instrumento nem estudo comparável. A busca
  devolveu patentes de throttling térmico e estudos de inferência em borda, nenhum sobre navegador.
  É por isso que `e2.2` está marcado como `fraco`/`baixa` e o wildcard 2 existe.

### 12.6 Dados coletados e não usados no corpo do mapa

Registrados aqui porque a seção 12 não corta nada, e porque são a matéria-prima de quem for
processar este documento depois.

- **Interop 2026, lista completa das vinte áreas de foco** (web.dev, 12/02/2026): anchor
  positioning; container style queries; dialogs and popovers; scroll-driven animations; view
  transitions; `attr()`; `contrast-color()`; custom highlights; fetch uploads and ranges; IndexedDB;
  JSPI for Wasm; media pseudo-classes; Navigation API; scoped custom element registries; scroll
  snap; `shape()`; web compat; WebRTC; WebTransport; `zoom`.
- **Web Almanac 2025, as sete capacidades mais usadas** (mobile/desktop): Compression Streams
  12,3%/14%; Clipboard 11,2%/11,8%; Web Share 6,6%/6,7%; Device Memory 6,3%/6,2%; Media Session
  4,7%/5,3%; Add to Home Screen 4,6%/4,9%; Media Capabilities 4,4%/5%. APIs nascentes de IA
  (LanguageDetector, Translator, Summarizer, Prompt) abaixo de 0,3%. **Este último dado é
  importante e não coube no corpo:** as APIs de IA do navegador estavam em menos de 0,3% das páginas
  na coleta de 2025, o que dá a régua real de `e1`.
- **three.js r186, itens completos relacionados:** WebGPU — `DirectRenderPipeline`,
  `packed_4x8_integer_dot_product`, compartilhamento de textura de profundidade entre passes, troca
  dinâmica do sistema de iluminação. TSL — `CodeNode` como referência, funções de pack/unpack 4x8,
  arrays atômicos de workgroup. Splat — renderizador/carregador em TSL, raycasting, harmônicos
  esféricos. WebXR — correção de sombras, correção de transmissão, MSAA para camadas nativas de XR,
  MSAA para WebXR WebGPU.
- **Babylon.js 9.0, lista completa — lida, mas fora da seção 11.** O anúncio de 26/03/2026 no
  Windows Developer Blog traz: Clustered Lighting, Textured Area Lights, Node Particle Editor,
  Particle Flow Maps e Attractors, Volumetric Lighting, Frame Graph (v1) com economia declarada de
  40% ou mais de memória de GPU, Animation Retargeting, suporte avançado a Gaussian Splats (.PLY,
  .splat, .SPZ, .SOG/.SOGS, splat triangular, sombras, ordenação global de múltiplos ativos) e
  renderização geoespacial. **Eu abri e li esta página**, mas ela devolve HTTP 403 a cliente que não
  é navegador, e por isso ela não está na seção 11 e nenhum número dela sustenta efeito no mapa. O
  que o corpo do documento afirma sobre o Babylon.js vem do changelog do GitHub (fonte 15), que
  responde.
- **Babylon.js 9.26.0, itens de XR e splat do changelog:** âncoras persistentes de WebXR com ciclo
  de vida, captura de sala, hápticos avançados de controle, depth sensing com controle de ciclo de
  vida, controle de camadas de composição e escala de viewport, caminho de quad layer para WebGPU,
  correção de WebGPU quando `maxSimultaneousLights` estoura o orçamento de uniform buffer, cache de
  pipeline de layout de vértice em WebGPU, LOD por orçamento e ciente de múltiplas câmeras para
  streaming de splats, PLY em meia precisão, carregador WebAssembly de cena OpenUSD, pipeline FSR 1.
- **Meta Horizon OS Browser, 2026 completo:** 42.0 (26/01, nova aba experimental); 144 (02/03,
  Chromium 144); 146.0 (21/04, WebGPU e projeção de profundidade WebXR experimentais, correção de
  calibração de lente e de espaço delimitado, Chromium 146); 146.1 (11/05, janela ancorada na
  parede no Quest 3+); 149.1 (27/07, WebGPU para camadas de space-warp); 150.1 (28/08, foveação
  WebGPU experimental, reprodução MV-HEVC).
- **SuperSplat / PlayCanvas, agosto de 2026:** virou endpoint de publicação com API REST; três
  parceiros de captura publicando direto (Teleport by Varjo, XGRIDS LCC Studio, LichtFeld Studio);
  SuperSplat Studio lançado para autoria de experiências interativas.
- **Ecossistema de splat em agosto de 2026:** 49 artigos, 77 vagas de emprego e 103 artigos de
  pesquisa no mês — mais do dobro de julho em todos os três. Foundry (Nuke 17.1v1), Autodesk Maya
  2026 e Houdini receberam funcionalidades de splat. Não usei no corpo porque é o tema 10, não este.
- **Requisitos completos da Prompt API:** Windows 10/11, macOS 13+, Linux, ChromeOS a partir da
  plataforma 16389.0.0 em Chromebook Plus; 22 GB livres no volume do perfil; GPU com mais de 4 GB de
  VRAM **ou** CPU com 16 GB de RAM e 4+ núcleos; entrada de áudio exige GPU; conexão não medida para
  o download inicial. Não suportado em Chrome para Android, iOS, e ChromeOS fora de Chromebook Plus.
- **WebNN, mudanças entre 11/04/2024 e 22/01/2026:** mais de 100 mudanças significativas, incluindo
  operadores de transformer, a API `MLTensor` de compartilhamento de buffer, e um modelo abstrato de
  seleção de dispositivo.
- **8th Wall, cronologia completa:** janeiro de 2026, Distributed Engine Binary sob licença binária
  para uso comercial e não comercial, incluindo SLAM; 28/02/2026, desligamento de logins, editor em
  nuvem e XR Studio; 10/03/2026, código aberto sob MIT (arquitetura central, Face Effects, Image
  Targets, Sky Effects); 28/02/2027, apagamento de tudo o que restou. Contexto: a Niantic comprou o
  8th Wall em 2022 na sua maior aquisição até então, e vendeu a divisão de jogos em 2025 por US$
  3,85 bi.
- **Epic × Apple, cronologia relevante:** injunção original obrigando a Apple a permitir links
  externos; comissão de 27% imposta pela Apple e considerada desacato; decisão do Nono Circuito em
  11/12/2025 permitindo "comissão razoável" ligada à coordenação do link externo, com o percentual a
  ser fixado pelo tribunal distrital; a Suprema Corte negou suspensão em maio de 2026 e aceitou
  examinar a questão do desacato no termo iniciado em outubro de 2026.
- **Godot 4.7** (junho de 2026, com 4.7.1 em julho): WebAssembly SIMD por padrão e opção de
  exportação wasm64; renderizador de compatibilidade continua sobre WebGL 2. Unity 6: backend WebGPU
  experimental, heap de WebAssembly de 4 GB, SIMD e exceções nativas.

### 12.7 O que este mapa deixou de fora deliberadamente

- **Áudio espacial na web** (Web Audio, resonance): é tema vizinho e o enunciado não o inclui.
- **Multiusuário e presença** (o "metaverso" social por WebXR): entra só de raspão em `e10`; um mapa
  próprio precisaria de uma raiz sobre sincronização e custo de servidor de estado, que contradiz
  parcialmente a raiz 1.
- **Segurança de execução** (escapes de sandbox via driver de GPU): mencionado como risco em `e3`,
  mas sem fonte primária aberta que eu pudesse citar (a fonte acadêmica devolveu 403).
- **Modelos de licenciamento de conteúdo 3D** (quem é dono da captura): é o tema 10.
- **Acessibilidade em XR na web**: não encontrei fonte de 2026 que sustentasse efeito específico, e
  não quis inventar um. **Registro como lacuna consciente do mapa** — é o buraco que eu apontaria
  primeiro se estivesse confrontando este documento.

### 12.8 Saída do verificador

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 21 (frontmatter diz 21)
efeitos ordem 3: 14 (frontmatter diz 14)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 5 [('e1.2.1', 2032), ('e4.1.1', 2032), ('e5.1.1', 2032), ('e11.1.1', 2032), ('e13.1.1', 2032)]
confiança ordem 1: alta 2 · media 10 · baixa 2
confiança ordem 2: alta 0 · media 14 · baixa 7
confiança ordem 3: alta 0 · media 0 · baixa 14
links da seção 11: 30/30 respondem (frontmatter diz fontes: 30)
RESULTADO: ok
```

Saída colada na íntegra, com os números, como manda o §9 da skill — não a palavra "passou". Notas
sobre o que os números dizem:

- **Ordem 3 com 14 e não 13.** Ao contar à mão, na redação da seção 7, eu havia escrito 13 efeitos
  de terceira ordem no frontmatter. O verificador contou 14. Pela regra do §9 da skill, **corrigi o
  frontmatter, não o texto** — o efeito que faltava na minha contagem era `e1.1.1`.
- **Os cinco fora do horizonte** estão declarados em 7.3, e todos têm `confianca: baixa`.
- **A calibração passa por margem confortável:** nenhuma confiança `alta` sobrevive à segunda ordem,
  e a terceira é inteiramente `baixa` — 14 de 14.
- **Os 30 links respondem**, depois da troca de fonte descrita em 8.8. Na primeira execução eram
  29 de 30.
