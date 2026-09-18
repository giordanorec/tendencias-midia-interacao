---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: alpa2
zona_de_interesse: Criação e plataforma
data: 2026-09-18
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [WebGPU, WebXR Device API, WGSL, WebNN, WebGL2, WebAssembly, three.js WebGPURenderer, PlayCanvas, SuperSplat, Gaussian splatting, WebLLM, Transformers.js, llama.cpp/LlamaWeb, ONNX Runtime Web, Meta Quest Browser, Safari visionOS, Chrome Prompt API]
fontes: 11
confianca: media
experimento: "Uma mesma URL que se comporta como página, como cena 3D e como sessão imersiva, instrumentada para medir o que o aparelho de cada visitante consegue de fato executar."
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

O navegador ganhou acesso de primeira classe à GPU (WebGPU embarcado por padrão em Chrome,
Edge, Safari e Firefox) e uma via para o óculos (WebXR). A leitura fácil desse fato — "agora
dá para publicar experiência 3D sem instalar nada" — é justamente a que este mapa **rejeita
como disrupção-raiz**: WebGPU chegou, está em produção e é medido em torno de 87% de cobertura
global; pelo critério do Passo 2 da skill, isso é tecnologia que amadureceu, não que rompe.

O que rompe é outra coisa, em três frentes. A primeira é a **web como alvo primário de
publicação imersiva** — e essa ainda não chegou: o WebXR não foi aceito como área de foco do
Interop 2026, o Safari fora do headset mantém a API desabilitada por padrão, e o navegador do
Quest só trata WebGPU como experimental. A segunda é o **navegador como runtime de inferência**:
o modelo deixa de ser serviço remoto e vira arquivo que a página baixa, o que desloca custo,
dado e gargalo para o aparelho de quem acessa. A terceira não é técnica: é a **erosão jurídica
do gate da loja** (DMA na UE, designação de status estratégico pela CMA no Reino Unido, Epic ×
Apple no Nono Circuito), que transforma publicar pela web de gambiarra tolerada em rota
contratualmente reconhecida.

O efeito de segunda ordem mais consequente, e o mais mal-discutido, é a troca de gargalo: se a
página executa em vez de baixar, a desigualdade de acesso deixa de ser só "ter internet" e passa
a ser também "ter GPU utilizável". No Brasil isso não é hipótese — 87% da população das classes
D e E acessa a internet exclusivamente por celular, e 10% desses domicílios têm computador.

Confiança geral: média. Toda a terceira ordem está em confiança baixa, e isso é o resultado
esperado, não um defeito do mapa.

## 2. O tema

O objeto é **a web como plataforma de execução 3D e XR** — não a captura de 3D (tema 10) nem a
IA local no dispositivo em geral (tema 16), da qual entra aqui apenas a parte que passa pela
mesma porta gráfica do navegador.

A pergunta que organiza o mapa: quando a experiência pesada deixa de ser um binário aprovado por
uma loja e passa a ser um endereço, o que se reorganiza — na produção, no aparelho e no controle?

**Parâmetros desta rodada.** Horizonte 2031. Público: quem projeta mídia e interação. Recorte
global, com uma nota sobre o Brasil no ponto em que a diferença é material. Descarte declarado:
o que já é comum em produto de massa (a régua da disciplina). Viés declarado: neutro. Palpite
de disrupção central: nenhum — levantar do zero.

**Entrevista (Passo 1).** Os cinco itens foram respondidos no enunciado desta rodada, não em
diálogo: não houve usuário disponível para responder. As suposições que precisei adotar por
conta própria, e que não vieram de resposta, estão declaradas na seção 7.

## 3. Onde isso está hoje

### O que já existe e funciona (e por isso NÃO é disrupção-raiz)

**WebGPU está embarcado nos quatro navegadores principais.** O wiki de implementação do próprio
grupo de trabalho registra: Chrome/Chromium desde a versão 113 em Mac, Windows e ChromeOS, 121+
em Android, 144+ em Linux com Intel Gen12+ e 147+ em Linux com NVIDIA sob Wayland; Safari 26 em
macOS, iOS/iPadOS e visionOS, habilitado por padrão; Firefox 141+ em Windows, 145+ em macOS com
Apple Silicon, 147+ em macOS em geral. Linux e Android no Firefox seguem em Nightly. O caniuse
mede **87,35% de cobertura global**.

Aplicado o teste 3 do critério ("o que ainda falta para se concretizar?"), a resposta honesta é
"nada — está em produção, habilitado por padrão, e com fallback automático". Isso classifica
WebGPU como **maduro**, e é por isso que ele aparece aqui, na âncora do presente, e não na
seção 4. Este é exatamente o tipo de erro que o `DUVIDAS.md` desta skill documenta: um fato
correto, recente e bem-fonteado, classificado na gaveta errada porque "recente" soa como
"emergente".

**Os motores já migraram.** O `three.js` expõe `WebGPURenderer` como caminho suportado, com
queda automática para WebGL2; `PlayCanvas` declara WebGL, WebGPU, WebXR e glTF como alvos. A
troca costuma ser de uma linha.

**Autoria 3D completa no navegador já é produto.** O `SuperSplat`, da PlayCanvas, edita, otimiza,
anota, aplica pós-processamento e publica cenas de Gaussian splat sem nada para baixar — e roda
com WebGL2, sem exigir WebGPU. Nota relevante para o mapa: **a experiência de autoria que mais se
cita como prova da tendência não depende da tecnologia emergente que se supõe estar a
sustentando.**

**Inferência no navegador já é demonstrável.** `WebLLM` (MLC), `Transformers.js` (Hugging Face) e
implementações de `llama.cpp` sobre WebGPU rodam modelos quantizados de 1B–2B em aba de
navegador. Um estudo de 2026 com 16 aparelhos de 8 fabricantes de GPU mede o quanto isso ainda
custa: o prefill sobre WebGPU fica até 10× atrás dos backends nativos CUDA/Metal, e o Safari em
iOS impõe teto de memória abaixo de 500 MB por aba.

### O que existe mas não pegou

**WebXR fora do headset.** O caniuse registra o Safari com a WebXR Device API **desabilitada por
padrão** em todas as versões rastreadas (13 até a atual), e o Firefox idem; a cobertura global
medida é 77,15%, número que vem quase todo de Chrome, Edge, Opera e Samsung Internet com suporte
*parcial*. É uma API que existe em papel em muito lugar e funciona de verdade em poucos.

**WebXR e WebGPU ficaram de fora do Interop 2026.** Ambos foram propostos como área de foco
(issues #1019 e #1021 do repositório de interop), e nenhum dos dois entrou: a lista final tem
dialogs/popovers, 11 áreas de CSS, IndexedDB, Navigation API, WebRTC, WebTransport, JSPI para
Wasm e outras — nada de gráficos ou XR, nem entre as quatro áreas de investigação. É o sinal mais
claro de que a convergência entre navegadores nesse terreno ainda não é prioridade acordada.

**Motores alternativos no iOS.** A Apple publicou os frameworks para engine alternativa na UE em
2024. Ao fim de 2025, quase dois anos depois, **zero navegadores no iOS usavam engine própria.**
A permissão existiu; a adoção não.

### Quem está construindo

W3C GPU for the Web (especificação WebGPU/WGSL) e W3C Immersive Web (WebXR, em Candidate
Recommendation); Google/Chrome, Apple/WebKit, Mozilla e Microsoft do lado dos navegadores;
PlayCanvas, three.js, Babylon.js, Needle e o ecossistema React Three Fiber / Threlte do lado dos
motores; Meta no navegador do Quest (WebGPU experimental desde a build 146.0, de abril de 2026,
com foveation experimental em agosto de 2026); Apple no Safari do visionOS; Hugging Face, MLC e o
grupo WebNN do lado da inferência — a WebNN chegou a Candidate Recommendation atualizada em 22 de
janeiro de 2026, ainda sem implementação não-experimental.

## 4. As disrupções-raiz

Cada candidata passou pelos três testes do Passo 2, por escrito. As três abaixo passaram; duas
foram rejeitadas e estão registradas no anexo.

### D1 — A web como alvo primário de publicação imersiva (o app vira link)

- **O que rompe.** Muda *quem pode publicar*: hoje uma experiência imersiva chega ao usuário
  passando por um revisor de loja que pode recusá-la. Se o alvo primário é a URL, o direito de
  publicar deixa de ser concedido por alguém. Isso não é "mais rápido e mais barato" — é uma
  mudança de quem precisa de quem.
- **Por que agora, e não há cinco anos.** Em 2021 o WebXR existia em um navegador e meio, sem
  passthrough, sem hand tracking e sem acesso à GPU moderna. Em 2026 há WebGPU embarcado nos
  quatro navegadores, WebXR em Candidate Recommendation, passthrough/plane detection/anchors/hand
  tracking alcançáveis a partir de uma página no navegador do Quest, e Safari no visionOS. O
  limiar técnico foi cruzado; o de coordenação, não.
- **O que ainda falta.** Paridade real entre navegadores (o Interop 2026 recusou o tema); WebXR
  habilitado por padrão no Safari fora do headset; uma resposta ao problema de descoberta que a
  loja hoje resolve mal, mas resolve; e desempenho previsível em aparelho de entrada.

### D2 — O navegador como runtime de inferência local

- **O que rompe.** Muda *onde o cálculo acontece e quem paga por ele*. Quando o modelo é um
  arquivo que a página baixa, e não um serviço atrás de uma chave de API, deixa de existir o
  intermediário que mede consumo, registra o prompt e cobra por token. Uma página pode inferir
  sem nenhuma requisição de rede depois do carregamento.
- **Por que agora.** WebGPU embarcado (o compute shader é o que viabiliza isso, não o
  rasterizador); quantização de 4 bits amadurecida a ponto de modelos de 1B caberem em 1–2 GB; e
  a WebNN elevada a Candidate Recommendation atualizada em janeiro de 2026, com MLTensor e
  operadores de terceira leva para transformers — o primeiro padrão web que se propõe a falar com
  NPU.
- **O que ainda falta.** Implementação não-experimental de WebNN em qualquer navegador (a própria
  W3C pede duas implementações interoperáveis antes de avançar); teto de memória por aba (abaixo
  de 500 MB no Safari em iOS); prefill até 10× mais lento que nativo; e uma resposta para baixar
  gigabytes de pesos numa conexão medida.

### D3 — A erosão jurídica do gate da loja

- **O que rompe.** Muda *o estatuto* da publicação pela web: de contorno tolerado a rota
  reconhecida. Não é tecnologia — é a remoção da razão pela qual quem publica hoje escolhe a loja
  mesmo tendo alternativa técnica.
- **Por que agora.** Três movimentos convergindo em 2025–2026. (a) Na UE, o DMA obriga à
  distribuição pelo próprio site e à engine alternativa desde 2024. (b) No Reino Unido, a CMA
  designou Apple e Google com status de mercado estratégico em outubro de 2025 — a designação da
  Apple abrange explicitamente navegador e engine de navegador —, com consulta sobre navegadores,
  engines e web apps prevista para o primeiro semestre de 2026 e compromissos anunciados em
  fevereiro de 2026. (c) Nos EUA, o Nono Circuito decidiu em dezembro de 2025 que a Apple pode
  cobrar comissão sobre compra por link externo, mas limitada ao que for "genuína e
  razoavelmente necessário" — o que corta o argumento econômico de manter tudo dentro da loja.
- **O que ainda falta.** Tudo, na prática: zero navegadores com engine alternativa no iOS ao fim
  de 2025, plano de conformidade britânico só em junho de 2026 com exigência plena em 1º de
  janeiro de 2027, e o caso americano ainda em disputa na Suprema Corte (petição da Apple de
  setembro de 2026).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — A web como alvo primário de publicação imersiva (o app vira link)"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Demonstração, portfólio, campanha e peça editorial em 3D passam a ser publicados como URL, sem build nem submissão por loja."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A métrica de sucesso de uma peça imersiva vira tráfego e taxa de entrada em sessão, não número de downloads."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A função de produtor de conteúdo imersivo se reaproxima da de web designer, e a formação em XR migra de engenharia de jogo para disciplina de web."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Estúdios dissolvem as equipes dedicadas a build e submissão por plataforma e realocam esse orçamento para desempenho por classe de aparelho."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Manter uma obra imersiva viva passa a custar menos do que mantê-la em duas lojas, e obras imersivas ganham vida útil longa em vez de serem descontinuadas por abandono de SDK."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O primeiro contato do público com uma obra XR passa a acontecer sem óculos, em tela plana, porque a mesma página serve os dois modos."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O projeto de experiência imersiva passa a ser obrigado a degradar graciosamente para mouse, toque e teclado, e não apenas a supor controle de seis graus de liberdade."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Imersivo deixa de nomear uma categoria de produto e vira um modo de exibição, como tela cheia, desaparecendo como recorte de mercado."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Fabricantes de óculos passam a ter de decidir explicitamente quanta capacidade dar ao navegador embarcado, porque a decisão deixa de ser invisível."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A qualidade do navegador do óculos vira critério de compra e item obrigatório de análise técnica, como a câmera foi no celular."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Reguladores estendem ao navegador do headset a lógica já aplicada ao navegador móvel, tratando-o como infraestrutura sobre a qual o fabricante não pode decidir sozinho."
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "D2 — O navegador como runtime de inferência local"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Páginas passam a baixar pesos de modelo como hoje baixam fontes e texturas, e o peso típico de uma aplicação web sobe uma ordem de grandeza."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Cache, versionamento e pré-carregamento de modelo viram problema central de arquitetura de front-end, e não detalhe de infraestrutura."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A profissão de front-end incorpora gestão de artefato de aprendizado de máquina, e a fronteira entre desenvolvedor web e engenheiro de ML se dissolve na borda."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Aplicações que hoje mantêm servidor apenas para guardar a chave de API passam a rodar sem backend nenhum."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A cobrança por token perde parte da base para aplicações pequenas, e fornecedores de modelo deslocam a receita para licença de peso e canal de distribuição."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O gargalo de uma experiência deixa de ser a rede e passa a ser a GPU e a memória do aparelho de quem acessa."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "A exclusão digital ganha um eixo novo, entre quem tem GPU utilizável e quem só tem aparelho de entrada, sobreposto ao eixo antigo de banda."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Políticas públicas de inclusão digital passam a ter de falar de capacidade de cálculo do aparelho, e não apenas de acesso à rede."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Surge uma camada de negociação em que a página mede a GPU disponível e decide entre executar localmente ou delegar ao servidor."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "A medição de capacidade do aparelho vira vetor de identificação por impressão digital e entra na pauta de privacidade dos navegadores."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D3 — A erosão jurídica do gate da loja"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Publicar pela web deixa de ser rota de contorno e passa a constar como rota declarada em contrato de distribuição e em plano de lançamento."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "As categorias que a loja recusa ou taxa pesado migram primeiro, e a web imersiva se povoa pela borda do catálogo, não pelo centro."
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A curadoria migra da loja para o buscador, o navegador e o processador de pagamento, e a disputa sobre quem pode barrar conteúdo muda de endereço sem desaparecer."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Plataformas respondem degradando a experiência web no próprio aparelho, por teto de memória e atrito em permissão, em vez de proibi-la explicitamente."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Aparece uma categoria regulatória de paridade de capacidade, exigindo que o app nativo e a página tenham acesso equivalente ao mesmo hardware."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A ausência de loja transfere o problema inteiro de descoberta para quem publica, que passa a arcar com um custo antes embutido na taxa."
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Surgem catálogos e curadorias independentes de experiências publicadas como link, com poder de recomendação mas sem poder de veto sobre a publicação."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O valor econômico se desloca do direito de publicar para o direito de ser encontrado, e a renda de plataforma reaparece na camada de recomendação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o YAML não diz

**As três disrupções não têm o mesmo peso, nem correm no mesmo relógio.** D1 é técnica e depende
de coordenação entre concorrentes — o tipo de coisa que o Interop existe para forçar, e que o
Interop 2026 acabou de não priorizar. D2 é técnica e depende de hardware no bolso das pessoas, o
que tem um relógio de troca de aparelho, medido em anos. D3 é jurídica, com datas marcadas em
calendário oficial (junho de 2026, janeiro de 2027) e por isso é a que tem prazo mais previsível
— e, paradoxalmente, a que menos aparece em discussão técnica sobre o tema.

**e5 e e7 puxam contra e1.** A leitura entusiasta de e1 ("todo mundo pode publicar") é
parcialmente cancelada por e5 ("mas nem todo mundo consegue executar") e por e7 ("e ninguém vai
achar"). A loja de aplicativos não cobra 30% apenas pelo direito de publicar: cobra por
distribuição, cobrança, atualização e descoberta. Um mapa que trata a queda do gate como ganho
líquido está somando o que se ganha e esquecendo o que era prestado em troca. Os três efeitos
precisam ser lidos juntos ou nenhum deles está certo.

**e6.2 é o mecanismo que torna e6 reversível sem revogação.** Nenhum fabricante precisa proibir
WebXR para matá-lo — basta manter a API desabilitada por padrão, o teto de memória por aba baixo
e o WebGPU em estado experimental. Isso não é especulação: é a descrição do estado medido do
Safari fora do headset e do navegador do Quest em 2026. A conformidade formal com a regra e a
inviabilização prática cabem no mesmo aparelho.

**A cascata de D2 tem um andar faltando.** Entre "o modelo roda na aba" e "o mercado de tokens
muda" existe uma questão de licença de peso que nenhuma das minhas fontes cobre: distribuir peso
por página é publicação, e publicação tem regime jurídico próprio. Deixei fora do YAML por não ter
base para afirmar a direção; registro aqui como buraco conhecido.

## 6. Sinais fracos e wildcards

**Sinais fracos (existem, quase não aparecem na conversa).**

- **O Interop 2026 recusou WebXR e WebGPU.** Foram propostos, foram processados, não entraram. Em
  quase toda cobertura o tema aparece invertido, como se a inclusão fosse fato. É o sinal mais
  barato de checar e o mais frequentemente errado.
- **Zero engines alternativas no iOS.** A permissão da UE existe desde 2024 e ninguém a usou até
  o fim de 2025. Permissão concedida não é adoção, e a distância entre as duas é o tempo real de
  D3.
- **A ferramenta-símbolo não usa a tecnologia-símbolo.** O SuperSplat, citado como prova de que o
  navegador virou console 3D, roda em WebGL2. O que fez a autoria migrar para o navegador não foi
  WebGPU.
- **O teto de memória por aba do Safari em iOS (abaixo de 500 MB).** Um número de implementação,
  não de especificação, que decide sozinho quais modelos existem em metade dos aparelhos do mundo.
- **A WebNN é o único padrão web capaz de falar com NPU.** Se ela embarcar, a inferência no
  navegador deixa de competir por GPU com o rasterizador — o que muda a premissa de e5 inteira.

**Wildcards.**

- *(alto impacto, probabilidade média)* **Uma fabricante de óculos desliga o WebXR por padrão**,
  alegando segurança ou conforto visual. Não exige mudança de política nem enfrenta regulador:
  exige uma linha de configuração. D1 morre no aparelho que mais importa para ela.
- *(alto impacto, probabilidade baixa — o meu wildcard de fato)* **Uma falha de segurança séria
  explorando acesso a shader de GPU pelo navegador** leva dois ou mais fabricantes a restringir
  WebGPU a origens com permissão explícita do usuário, no modelo de câmera e microfone. A
  disrupção-raiz D2 não é revogada, mas passa a exigir um clique de consentimento antes de
  qualquer carregamento — o que reintroduz, dentro do navegador, exatamente o gate que a web
  prometia dissolver.
- *(alto impacto, probabilidade baixa)* **Um fabricante de aparelho de entrada embarca NPU
  acessível por WebNN antes dos aparelhos caros.** Toda a leitura de e5.1 se inverte: a inferência
  no navegador chegaria primeiro à base da pirâmide, e não ao topo.

## 7. Contra o próprio mapa

**1. Qual efeito é só extrapolação linear do presente?**

`e4` ("o peso da página sobe uma ordem de grandeza") é a pior ofensora: estica a curva de peso de
página, que já vem subindo há vinte anos, e supõe que ela continuará subindo por um mecanismo
novo. Mas curvas de peso de página encontram limites duros — custo de dado medido, paciência e
armazenamento — que já reverteram tendências parecidas antes. Mantive `e4` porque o mecanismo
causal é diferente do histórico (pesos de modelo são cacheáveis e reusáveis entre sites, ao
contrário de imagem de campanha), mas **rebaixei a confiança de alta para média** por causa disso.

`e1` também é extrapolação, e mais direta: pega uma coisa que já acontece hoje (publicar demo 3D
por URL) e projeta como se a fronteira fosse só de volume. É o efeito de confiança mais alta do
mapa justamente por já estar acontecendo — o que é outro jeito de dizer que ele acrescenta pouco.

**2. Qual efeito assume velocidade de adoção sem precedente comparável?**

`e2.1.1` ("imersivo vira modo de exibição, como tela cheia") assume, em cinco anos, uma
normalização de categoria que no caso comparável mais próximo — o vídeo na web, de `<embed>` com
plugin proprietário até `<video>` como elemento banal — levou aproximadamente doze anos (1996 a
2008–2010), com um mandato de mercado pelo caminho (a ausência de Flash no iPhone) que não tem
equivalente aqui. Mantive o efeito, mas o prazo 2031 é o mais frágil do documento, e o sinal
"fraco" com confiança "baixa" é generoso.

`e6.1` ("categorias recusadas pela loja migram primeiro") tem, ao contrário, precedente forte: foi
exatamente assim que a web se povoou de conteúdo adulto e jogo de azar antes de qualquer outra
categoria. Precedente encontrado, e favorável.

`e3.1.1` (regulador tratando navegador de headset como infraestrutura essencial): **não encontrei
precedente comparável** para regulação preventiva de uma categoria de hardware com base instalada
pequena. Toda regulação de plataforma que consultei veio depois de escala massiva. Registro como
sem precedente.

**3. Qual disrupção-raiz pode simplesmente não se concretizar — e o que sobra?**

**D1 é a mais frágil**, e não por razão técnica. O Interop 2026 recusou WebXR; o Safari fora do
headset mantém a API desligada; o navegador do Quest trata WebGPU como experimental. Se os
fabricantes de óculos decidirem que o navegador embarcado é um visualizador de documento e não um
runtime, D1 não acontece — e não precisa de nenhum anúncio para isso, basta a inércia.

Se D1 cair, **o mapa não desmorona**: D2 e D3 se sustentam sozinhas e por mecanismos
independentes. D2 não depende de óculos nenhum — roda em aba de laptop, e toda a cascata de e4 e
e5 sobrevive intacta. D3 é jurídica e tem calendário próprio; ela se realiza sobre aplicação web
2D comum, com ou sem XR. O que se perde, especificamente, é a árvore de e1 a e3 — um terço do
mapa.

O inverso não vale: **se D3 cair, D1 fica muito enfraquecida**, porque o argumento de "publique
pela web" perde a metade econômica e vira só uma preferência técnica. Essa assimetria é a
descoberta que mais me surpreendeu ao contestar o próprio mapa, e ela contraria a intuição do
enunciado do tema, que trata a tecnologia como causa e a loja como consequência.

**4. Que viés entrou aqui?**

- **Viés declarado pelo usuário:** neutro, sem preferência. A régua de descarte pedida ("o que já
  é comum em produto de massa") empurra o mapa para o lado emergente por construção — é isso que
  faz WebGPU sair da seção 4 e ir para a 3. Não é neutro em relação ao resultado, e é bom que não
  seja: é a régua da disciplina.
- **Viés da entrevista não realizada.** Não houve interlocutor. As respostas do Passo 1 vieram
  prescritas no enunciado, então itens 1, 2, 3, 4 e 5 estão formalmente respondidos mas **nenhum
  foi negociado** — não pude perguntar de volta em nenhum ponto de bifurcação. As suposições que
  tive de adotar sozinho: (a) "quem projeta mídia e interação" inclui estúdio pequeno e
  profissional autônomo, não só empresa com equipe de plataforma — o que puxa o mapa para efeitos
  de custo de produção; (b) "com uma nota sobre o Brasil" significa citar o Brasil onde o dado
  brasileiro muda a conclusão, não fazer uma seção separada; (c) horizonte 2031 como teto rígido —
  só `e3.1.1` o ultrapassa, e está marcado em 2032 deliberadamente, para sinalizar que não cabe.
- **Viés das fontes.** Boa parte do que a busca devolve sobre este tema vem de sites de conteúdo
  gerado para ranqueamento, com números impressionantes e sem origem rastreável. Preferi
  especificação, wiki de implementação, caniuse, notas de versão do fabricante e artigo revisado.
  Isso puxa o mapa para o lado conservador: fonte primária mostra o que está pronto, e é ruim para
  ver o que está prestes a acontecer em laboratório.
- **Viés de seleção do meu próprio corte.** Escolhi D3 (jurídico) como disrupção-raiz num tema que
  a disciplina enunciou como técnico. É uma leitura, não um dado, e um analista igualmente
  informado poderia tratar D3 como contexto e não como raiz.

**Efeitos descartados ou revisados neste passo** — registro obrigatório, com os cortes detalhados
no anexo:

- **Descartado:** "as lojas de aplicativos perdem parcela relevante de receita até 2031". Não se
  sustenta: a receita de loja é dominada por compra dentro de jogo móvel 2D, categoria que este
  mapa não toca. O efeito soava bem e media a coisa errada.
- **Descartado:** "Unity e Unreal perdem participação para motores web". Extrapolação sem
  mecanismo — nada no material levantado liga uma coisa à outra, e o próprio Unity exporta para
  web há anos sem que isso tenha alterado a posição dele.
- **Revisado:** `e4` teve confiança rebaixada de alta para média (item 1 acima).
- **Revisado:** `e5.1` teve o sinal rebaixado de forte para médio. O dado brasileiro é forte para
  *acesso*, não para *GPU* — não achei medição de capacidade gráfica por faixa de renda, e usar o
  dado de acesso como se fosse de capacidade seria exatamente o erro de categorização que o
  `DUVIDAS.md` desta skill documenta.

## 8. O que a máquina errou

Registro do que falhou durante esta rodada, com o motivo da desconfiança — não só a correção.

**1. Afirmei internamente, a partir da primeira busca, que WebXR era área de foco do Interop
2026.** Três resultados diferentes diziam isso com convicção, um deles com explicação plausível
("o mecanismo que transforma 'a spec diz X' em 'todo navegador faz X igual'"). Desconfiei por um
motivo estrutural: todos os três vinham do mesmo domínio (`vr.org`), com títulos no formato
padrão de conteúdo produzido para busca ("WebXR Adoption Just Jumped 40%"). Fui ao repositório
`web-platform-tests/interop` e à nota da Igalia: **nem WebGPU nem WebXR entraram** nas áreas de
foco, de limpeza ou de investigação. O que existia era uma *proposta* (issues #1019 e #1021),
processada e encerrada. A distância entre "foi proposto" e "foi aceito" desapareceu na
reescrita — e teria invertido o sinal de uma seção inteira deste mapa.

**2. Quase usei o número "65% das novas aplicações web com conteúdo 3D já usam WebGPU, segundo o
Web Almanac 2025".** Repetido por mais de um site, com comparativo de reforço ("era 8% dois anos
atrás"). Desconfiei do formato: o Web Almanac mede páginas rastreadas pelo HTTP Archive, não
"novas aplicações que embarcam 3D" — essa não é uma população que o HTTP Archive consiga
delimitar. Fui ao índice do Web Almanac 2025: são 16 capítulos, **nenhum sobre WebGPU, 3D ou
WebXR**; o capítulo "Capabilities" mede sete APIs e nenhuma delas é gráfica. O número não tem
origem. Não entrou no documento.

**3. A cobertura global de WebGPU apareceu como "70%", "83%", "87%" e "95%" em fontes
diferentes,** todas em 2026. Só uma tem método publicado e reproduzível: o caniuse, que mostra
**87,35%**. Adotei essa e citei a data de leitura. Este é o modo mais comum de erro neste tema:
não é fato inventado, é o mesmo fato com quatro valores, e quem cita o mais conveniente vence a
discussão sem ter razão.

**4. Minhas duas fontes primárias se contradizem sobre o Firefox, e não resolvi.** O wiki de
implementação do `gpuweb` registra WebGPU embarcado no Firefox 141+ em Windows e 145+/147+ em
macOS; o caniuse registra o Firefox como "desabilitado por padrão" em todas as versões. Uma das
duas está desatualizada. Como não consegui determinar qual com o material que abri, **não uso
nenhum número que dependa dessa diferença** — e sinalizo que o 87,35% do caniuse pode estar
subestimado pelo mesmo motivo. Registro a contradição em vez de escolher a versão que me
convinha.

**5. Assumi, ao ler o enunciado do tema, que o SuperSplat era um caso de uso de WebGPU.** Ele
aparece na lista de evidências ao lado de PlayCanvas e three.js, e a associação é automática. A
documentação diz que uma GPU capaz de WebGL2 basta. É um erro de leitura por contiguidade — estar
na mesma lista não é ser a mesma coisa —, e corrigi-lo mudou uma conclusão: a autoria 3D migrou
para o navegador **antes** da tecnologia que se supõe tê-la causado. Isso virou sinal fraco na
seção 6.

**6. Falhei em obter o dado brasileiro na fonte primária.** O PDF de resultados do TIC Domicílios
2025 no site do Cetic.br não retornou texto extraível. Os números que cito (87% das classes D e E
acessando exclusivamente por celular; 10% de domicílios D/E com computador, contra 97% na classe
A) vêm de cobertura secundária da coletiva de 9 de dezembro de 2025, não da tabulação original.
São plausíveis e consistentes entre si, mas **não os verifiquei na fonte** e é assim que devem ser
lidos.

**7. Não achei nenhum dado sobre capacidade gráfica do parque de aparelhos brasileiro.** Busquei;
o que voltou foram guias de compra de celular. A afirmação de que o eixo de desigualdade se
desloca para GPU no Brasil é, portanto, **inferência minha** a partir de dado de acesso — não há
fonte que a sustente, e ela está marcada como especulação aqui e na seção 11.

## 9. Três cenários para 2031

### Provável — "a web ganhou o 3D e empatou no XR"

Em 2031, publicar conteúdo 3D pesado por URL é o normal e ninguém comenta: motor de e-commerce,
configurador de produto, visualização científica, editor de splat e jogo casual rodam em aba, com
WebGPU embaixo e sem que o usuário saiba o nome disso. A migração de D2 também aconteceu, mas de
forma desigual: modelos pequenos rodam localmente em aparelho recente e caem para servidor no
resto, e a negociação de `e5.2` virou uma linha de código que ninguém discute.

O XR é onde o empate ficou. WebXR funciona bem no navegador do headset e mal fora dele; o Safari
em telefone continua tratando-o como recurso de bandeira. Experiência imersiva séria ainda chega
por app — não porque a web não dê conta, mas porque o fabricante do óculos não a priorizou e
ninguém o obrigou. D3 se realizou no papel: o contrato permite a rota web, e a rota web tem
metade da capacidade no mesmo aparelho. A taxa de 30% caiu, e reapareceu na camada de descoberta.

### Desejável — "o link virou plataforma, com piso de capacidade"

Em 2031 a mesma URL abre em telefone, laptop e óculos, e o que muda é só o modo de exibição.
WebXR e WebGPU passaram por um ciclo de interop com placar público, e a paridade entre navegadores
é medida, não prometida. WebNN embarcou com implementações interoperáveis, e a inferência na
página usa NPU em vez de disputar GPU com o rasterizador — o que fez modelos pequenos rodarem em
aparelho de entrada, e não só no caro.

A obrigação de paridade de capacidade entre app nativo e página no mesmo aparelho virou regra em
pelo menos duas jurisdições, o que fechou a porta de `e6.2`: o fabricante não pode mais cumprir a
regra e inviabilizar a prática. Publicar uma obra imersiva custa o que custa publicar um site, e
obras de 2027 continuam abrindo em 2031 porque nenhuma loja as descontinuou.

**O que teria que acontecer para chegar lá:** WebXR e WebGPU entrarem num ciclo do Interop —
2027 é a primeira chance real, já que 2026 os recusou; WebNN conseguir as duas implementações
interoperáveis que a W3C exige; e a consulta da CMA sobre navegadores e web apps, aberta no
primeiro semestre de 2026, terminar em obrigação de paridade e não em compromisso voluntário.

### Indesejável — "conformidade formal, inviabilização prática"

Em 2031 todas as regras foram cumpridas. A distribuição pela web é permitida em contrato nas três
jurisdições, engines alternativas são legais, e ninguém as usa. O navegador do óculos existe e é
um visualizador de documento: WebXR desligado por padrão "por conforto visual", WebGPU
permanentemente experimental, teto de memória por aba baixo o bastante para que nenhum modelo
sério carregue. Nada disso exigiu proibição — exigiu uma configuração padrão e a ausência de
alguém medindo.

A inferência no navegador existe e funciona bem, em aparelho de mil dólares. A camada de
negociação de `e5.2` estabilizou numa divisão de classe: quem tem GPU roda local, com privacidade
e sem custo por token; quem não tem manda tudo para o servidor de alguém. A desigualdade que era
de acesso virou de capacidade, com a agravante de que agora ela decide *onde os dados da pessoa
são processados*. No Brasil, onde 87% das classes D e E acessam a internet apenas por celular, a
promessa "roda no seu aparelho, nada sai dele" se tornou um privilégio com nome de padrão técnico.

**Sinal precoce deste cenário — o que observar já em 2027:** o navegador de um fabricante de
óculos ficar duas versões seguidas sem tirar WebGPU do estado experimental, enquanto o SDK nativo
do mesmo fabricante ganha recurso gráfico novo. É a assinatura de `e6.2`, e ela é visível em nota
de versão pública, sem precisar de nenhuma declaração.

## 10. O experimento

**O que é.** Uma única URL — uma peça curta, de dois a três minutos, com uma cena 3D real — que se
comporta de três maneiras conforme quem abre: página com imagem e texto em aparelho sem GPU
utilizável; cena 3D navegável com mouse e toque em aparelho capaz; sessão imersiva em qualquer
aparelho que ofereça WebXR. A mesma base de código, o mesmo endereço, sem nenhuma bifurcação
visível para o público.

Embutido nela, um instrumento: a página registra, a cada visita e com consentimento explícito, o
que o aparelho de fato entregou — WebGPU disponível ou não, adaptador e limites reportados, teto
de memória alcançado, WebXR presente e com quais modos de sessão, qual dos três modos foi servido,
e se o visitante ficou ou saiu. Nenhum dado pessoal; só o retrato de capacidade, agregado.
Distribuir por um canal com público heterogêneo, não pela bolha técnica — é o ponto inteiro do
experimento.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, e são as duas mais frágeis do mapa.
A primeira: **`e5` é real?** Existe mesmo uma fratura de capacidade gráfica no público brasileiro,
ou o parque já é bom o bastante e eu inferi errado a partir de dado de acesso? A seção 8 registra
que não encontrei nenhuma medição disso — este experimento a produz. A segunda: **`e2.1` é
projetável?** Uma peça que degrada graciosamente do imersivo ao plano é viável com um time
pequeno, ou o custo de servir três modos anula o ganho de não ter build por plataforma?

**Que tecnologia emergente ele usa, e por que a madura não serviria.** Usa WebGPU com fallback
explícito para WebGL2, e WebXR com detecção de modos de sessão. Uma versão só em WebGL2 —
tecnologia madura — responderia à segunda pergunta, mas **não à primeira**: é justamente na
fronteira entre o que WebGPU exige e o que o aparelho entrega que a fratura de `e5` aparece ou
não. E sem WebXR não há terceiro modo, logo não há teste de `e2.1`. A tecnologia madura mediria
um mundo em que a pergunta já está respondida.

**O que faria quem testar mudar de ideia sobre o mapa.**

- Se **mais de 80% das visitas em celular** receberem o modo 3D completo sem cair para o plano,
  `e5` está superestimado, `e5.1` perde a base, e a leitura de desigualdade deste mapa está
  errada — o gargalo continua sendo rede, não GPU.
- Se **menos de 2% das visitas** oferecerem qualquer modo WebXR, `e1` e toda a árvore de D1 estão
  cedo demais para um horizonte 2031, e D1 deveria ter sido rejeitada no Passo 2.
- Se a **taxa de abandono no modo 3D for maior que no modo plano** entre aparelhos capazes, `e1.1`
  cai junto: tráfego não substitui download como métrica se o tráfego não converte em sessão, e a
  loja estaria entregando algo que o link não entrega.
- Se servir os três modos custar **mais do que dois builds de loja** em horas de trabalho, `e1.2`
  está invertido — e o argumento econômico inteiro de D1 vai com ele.

## 11. Fontes

Listadas apenas as fontes que abri e li nesta rodada. Onde uma afirmação do documento não tem
fonte, ela está marcada como especulação abaixo.

1. **Implementation Status — gpuweb wiki (W3C GPU for the Web)** — `https://github.com/gpuweb/gpuweb/wiki/Implementation-Status`
   Sustenta: quais navegadores e plataformas embarcam WebGPU, com versões (Chrome 113+, Safari 26,
   Firefox 141+/145+/147+, Linux e Android do Firefox em curso). *Confiabilidade:* é o registro
   mantido pelo próprio grupo de trabalho da especificação — a fonte mais próxima do primário para
   esta pergunta; desatualiza entre edições.

2. **Interop 2026 — README oficial (web-platform-tests/interop)** — `https://github.com/web-platform-tests/interop/blob/main/2026/README.md`
   Sustenta: a lista completa das áreas de foco e de investigação do Interop 2026, e a ausência de
   WebGPU e WebXR nas duas. *Confiabilidade:* documento normativo do próprio programa; é o que
   define o que é fato aqui.

3. **Igalia — "Interop 2026 Focus Areas Announced"** — `https://www.igalia.com/news/interop-2026.html`
   Sustenta: confirmação independente da mesma lista (19 focos, 3 limpezas, 4 investigações), sem
   WebGPU nem WebXR. *Confiabilidade:* alta — a Igalia é contribuinte direta dos três motores de
   navegador e participante do programa; usada aqui como segunda leitura do mesmo fato.

4. **Issue #1021 — "WebXR API (Interop 2026 Focus Area Proposal)"** — `https://github.com/web-platform-tests/interop/issues/1021`
   Sustenta: que WebXR foi *proposto* como área de foco, com o rótulo `focus-area-proposal`, e
   processado. *Confiabilidade:* primária. **Ressalva registrada:** a página não declara
   explicitamente aceitação ou recusa; a recusa é estabelecida pela ausência nas fontes 2 e 3, não
   por esta.

5. **caniuse — WebGPU** — `https://caniuse.com/webgpu` (leitura de 18/09/2026)
   Sustenta: 87,35% de cobertura global, e a tabela por navegador. *Confiabilidade:* método público
   e reproduzível, cruzando dados de uso reais; **contradiz a fonte 1 quanto ao Firefox** (marcado
   como desabilitado por padrão), contradição registrada na seção 8 e não resolvida.

6. **caniuse — WebXR Device API** — `https://caniuse.com/webxr` (leitura de 18/09/2026)
   Sustenta: 77,15% de cobertura global; Safari e Firefox com a API desabilitada por padrão;
   suporte apenas parcial em Chrome, Edge, Opera e Samsung Internet. *Confiabilidade:* mesma da
   fonte 5. **Limite conhecido:** o caniuse não tabula visionOS nem o navegador do Quest, então
   subestima o suporte dentro de headset — é por isso que a fonte 8 é necessária.

7. **"Llamas on the Web: Memory-Efficient, Performance-Portable, and Multi-Precision LLM Inference with WebGPU"** — `https://arxiv.org/html/2605.20706v1`
   Sustenta: prefill sobre WebGPU até 10× atrás de CUDA/Metal; decode competitivo; teto de memória
   abaixo de 500 MB por aba no Safari em iOS; escopo de 16 aparelhos e 8 fabricantes de GPU.
   *Confiabilidade:* preprint com metodologia e escopo declarados — a melhor evidência quantitativa
   que encontrei sobre o custo real de D2; não consta revisão por pares.

8. **Meta Horizon OS — notas de versão do navegador** — `https://developers.meta.com/horizon/release-notes/web/`
   Sustenta: WebGPU experimental na build 146.0 (21/04/2026), suporte a space-warp na 149.1
   (27/07/2026), foveation experimental na 150.1 (28/08/2026) — WebGPU **não** habilitado por
   padrão. *Confiabilidade:* primária, do fabricante; é registro do que foi embarcado, não do que
   se pretende embarcar.

9. **Web Almanac 2025 — índice de capítulos** — `https://almanac.httparchive.org/en/2025/`
   Sustenta: a inexistência de capítulo sobre WebGPU, 3D ou WebXR na edição de 2025. *Uso neste
   documento:* fonte **negativa** — serve para refutar o número de 65% citado na seção 8, não para
   afirmar nada.

10. **Web Almanac 2025 — capítulo "Capabilities"** — `https://almanac.httparchive.org/en/2025/capabilities`
    Sustenta: as sete APIs efetivamente medidas, nenhuma gráfica. *Uso:* mesma função negativa da
    fonte 9, um nível mais fundo.

11. **MobileTime — cobertura do TIC Domicílios 2025 (Cetic.br/NIC.br), coletiva de 09/12/2025** — `https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/`
    Sustenta: 87% da população das classes D e E acessa a internet exclusivamente por celular (5%
    na classe A); 32% dos domicílios brasileiros com computador — 97% na classe A contra 10% nas
    classes D e E. *Confiabilidade:* **secundária**. A tabulação original é do Cetic.br; o PDF de
    resultados principais no site do centro não retornou texto extraível na minha tentativa
    (registrado na seção 8). Os números devem ser lidos como cobertura de imprensa especializada de
    uma coletiva, não como leitura da fonte primária.

**Afirmações sem fonte — especulação desta skill, não atribuída a ninguém:**

- Que a desigualdade de capacidade **gráfica** por faixa de renda no Brasil acompanha a
  desigualdade de acesso medida pelo TIC Domicílios. Busquei medição de GPU por faixa de renda e
  não encontrei nenhuma. É inferência minha, e sustenta `e5.1` — que por isso foi rebaixado de
  sinal forte para médio na seção 7.
- Os doze anos de maturação do vídeo na web (1996–2010) usados como caso comparável na seção 7.
  Vêm do meu conhecimento prévio, não de fonte consultada nesta rodada.
- Toda a datação de prazo do YAML. Prazo é estimativa da skill; nenhuma fonte prevê ano.
- A leitura de que a receita de loja é dominada por compra dentro de jogo móvel (usada para
  descartar um efeito na seção 7). Não verifiquei nesta rodada — e é por isso que ela serviu para
  **descartar** um efeito, e não para afirmar outro.

## 12. Anexo — o levantamento bruto

### A.1 Entrevista: o que foi respondido e o que não foi negociado

Não houve interlocutor nesta rodada. As respostas aos cinco itens do Passo 1 vieram prescritas no
enunciado da tarefa. Registro item a item, porque o Passo 1 exige que as suposições fiquem por
escrito:

| Item | Resposta recebida | Observação |
|---|---|---|
| 1. Horizonte | 2031 | Fechado. Um efeito (`e3.1.1`) o ultrapassa em 2032, deliberadamente marcado. |
| 2. Recorte | quem projeta mídia e interação; global com nota sobre o Brasil | "Nota sobre o Brasil" é ambíguo; interpretei como "citar onde o dado brasileiro muda a conclusão". |
| 3. Descartado | o que já é comum em produto de massa | É a régua da disciplina e o que tira WebGPU da seção 4. |
| 4. Viés | neutro | Registrado. |
| 5. Palpite de disrupção | nenhum, levantar do zero | Cumprido: as três raízes saíram do levantamento, e uma delas (D3) não estava no enunciado do tema. |

Condição de saída satisfeita (itens 1 e 2 respondidos). Nenhum ponto de bifurcação pôde ser
consultado durante a execução.

### A.2 Aplicação do Passo 2, candidata por candidata — inclusive as rejeitadas

**Candidata A — "WebGPU chegou aos navegadores principais".** T1: o que rompe? Torna mais rápido e
mais capaz algo que já se fazia com WebGL. Não muda quem pode fazer. → melhoria sobre base madura.
T2 nem chegou a ser necessário. T3: o que falta? Nada — embarcado por padrão nos quatro, 87,35% de
cobertura, fallback automático nos motores. **REJEITADA.** Para a seção 3. *Este é o corte mais
importante da rodada, e é exatamente o erro que o `DUVIDAS.md` desta skill documenta no caso do
CGM de glicose: fato correto, recente, bem-fonteado, gaveta errada.*

**Candidata B — "autoria 3D profissional inteiramente no navegador (SuperSplat)".** T1: muda quem
pode editar cena 3D — passa no primeiro. T2: por que agora? **Não há resposta concreta:** roda em
WebGL2, disponível desde 2017. A resposta honesta é "já era possível há cinco anos e aconteceu
quando alguém construiu". T3: o que falta? Nada — é produto, com estúdio, anotação,
pós-processamento, LOD em streaming e CLI. **REJEITADA** nos testes 2 e 3. Para a seção 3, e o
achado virou sinal fraco na seção 6.

**Candidata C — "WebXR e WebGPU como alvo de publicação primário".** T1: muda quem pode publicar
sem permissão de terceiro. ✔ T2: WebGPU embarcado nos quatro + WebXR em CR + passthrough, plane
detection, anchors e hand tracking alcançáveis de uma página no navegador do Quest + Safari no
visionOS — nenhuma dessas quatro condições existia em 2021. ✔ T3: falta paridade entre navegadores
(recusada no Interop 2026), Safari fora do headset, descoberta. ✔ **ACEITA → D1.**

**Candidata D — "o navegador como runtime de inferência".** T1: muda onde o cálculo acontece e
quem o paga; uma página passa a inferir sem requisição de rede. ✔ T2: WebGPU compute embarcado +
quantização de 4 bits madura + WebNN em CR atualizada em jan/2026. ✔ T3: falta implementação
interoperável de WebNN, teto de memória por aba, prefill 10× mais lento, download de gigabytes. ✔
**ACEITA → D2.**

**Candidata E — "a erosão jurídica do gate da loja".** T1: muda o estatuto da publicação pela web,
de contorno a rota reconhecida. ✔ T2: designação SMS da CMA em out/2025 abrangendo navegador e
engine; decisão do Nono Circuito em dez/2025 limitando a comissão sobre link externo; DMA em
vigor. ✔ T3: falta tudo na prática — zero engines alternativas no iOS ao fim de 2025, plano de
conformidade britânico só em jun/2026, exigência plena em jan/2027, caso americano ainda na
Suprema Corte. ✔ **ACEITA → D3.** *Registro de desconforto:* é a candidata mais distante do
enunciado técnico do tema, e a que a contestação do Passo 6 revelou ser a mais estruturante.

### A.3 Efeitos cortados, com o motivo

- **"As lojas de aplicativos perdem parcela relevante de receita até 2031."** Cortado. Mede a coisa
  errada: a receita de loja é dominada por compra dentro de jogo móvel 2D, categoria que este mapa
  não toca. Um efeito que soa consequente e não tem relação causal com nenhuma das três raízes.
- **"Unity e Unreal perdem participação de mercado para motores web."** Cortado. Extrapolação sem
  mecanismo. O Unity exporta para web há anos sem que isso tenha deslocado a posição dele; nada no
  material levantado liga uma coisa à outra.
- **"A taxa de 30% cai para menos de 15% até 2031."** Cortado por ser número inventado com aparência
  de precisão. A direção (pressão para baixo) está preservada em `e6`; o número não tem base.
- **"Surge um formato aberto de empacotamento de experiência imersiva."** Cortado por não ser
  específico o bastante — não consegui nomear o que ele conteria que glTF e a própria página já não
  contenham.
- **"Escolas passam a ensinar XR pela web."** Cortado por ser o tipo de efeito que serve a qualquer
  tema de tecnologia. O enunciado da rodada pede exclusão explícita de ideias genéricas. A parte
  que sobrevive, específica, está em `e1.1.1`.
- **Revisão mantida:** `e4` rebaixado de confiança alta para média; `e5.1` rebaixado de sinal forte
  para médio. Motivos na seção 7.

### A.4 Buscas que não deram em nada

- **Capacidade gráfica do parque de aparelhos brasileiro por faixa de renda.** Retornou apenas
  guias de compra de celular de 2026 (Kabum, TechTudo, Buscapé, Tecnoblog). Nenhuma medição.
  Consequência direta: `e5.1` foi rebaixado e a afirmação correspondente está marcada como
  especulação na seção 11.
- **PDF de resultados principais do TIC Domicílios 2025 no Cetic.br.** Não retornou texto
  extraível. Tive de recorrer a cobertura secundária, com a ressalva registrada.
- **Número de origem rastreável para adoção de WebGPU "em novas aplicações 3D".** Não existe.
  Verificado contra o índice e o capítulo "Capabilities" do Web Almanac 2025.
- **Evidência de que algum fabricante de óculos tenha desligado WebXR.** Não encontrei nenhuma — e
  as notas de versão da Meta mostram o oposto (correções ativas de WebXR em 2026). Por isso o
  wildcard do enunciado do tema aparece aqui como *wildcard*, e não como sinal fraco: não há sinal.
- **Status de WebXR no Safari do visionOS distinto do Safari geral.** O caniuse não tabula
  visionOS. Fica como lacuna: sei que existe por fonte secundária, não confirmei em fonte primária,
  e por isso nenhuma conclusão deste mapa depende disso.

### A.5 Contradição registrada e não resolvida

`gpuweb` wiki × caniuse, sobre o Firefox: a primeira diz embarcado desde a 141 em Windows; a
segunda diz desabilitado por padrão em todas as versões. Ambas são fontes que uso em outros pontos
do documento. Não determinei qual está desatualizada com o material que abri. Nenhuma afirmação
deste mapa depende da diferença, e o 87,35% pode estar subestimado por esse motivo.

### A.6 Fontes descartadas por procedência

Descartei, sem citar, o conjunto de resultados vindo de `vr.org`, `testmuai.com`,
`webo360solutions.com`, `byteiota.com`, `altersquare.io`, `progosling.com`, `ddevtools.com`,
`vucense.com` e similares. Critério: títulos no formato de conteúdo produzido para busca, números
grandes sem origem rastreável, e — no caso do `vr.org` — uma afirmação factualmente errada sobre o
Interop 2026 repetida em três artigos do mesmo domínio. Foram úteis exatamente uma vez: como
gatilho para ir verificar na fonte, o que produziu os itens 1 e 2 da seção 8.
