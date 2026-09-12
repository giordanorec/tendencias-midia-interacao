---
tema: "O navegador como console: 3D e XR sem instalação"
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: vafs
zona_de_interesse: Criação e plataforma
data: 2026-09-11
horizonte: 2031
publico: "Quem projeta mídia e interação — para decidir em que alvo publicar experiência 3D/imersiva nos próximos cinco anos"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 16
tecnologias_citadas: [WebGPU, WGSL, WebXR, WebGL 2, WebAssembly, three.js WebGPURenderer, PlayCanvas Engine, SuperSplat, Streamed SOG, gaussian splatting, WebLLM, MLC-LLM, Prompt API, Gemini Nano, WebNN, Meta Quest Browser, Safari visionOS, BrowserEngineKit, 8th Wall]
fontes: 20
confianca: media
experimento: "Mesma cena, três portas — uma única URL que mede quantos aparelhos da turma alcançam tela, XR imersivo e inferência local"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

Entre setembro de 2025 e setembro de 2026 o navegador deixou de ser um alvo secundário de
gráficos e passou a ser um alvo possível de primeira classe: WebGPU chegou a Chrome, Edge,
Firefox e Safari, está em Candidate Recommendation Draft no W3C desde 01/09/2026, e a página do
caniuse media 87,35% de cobertura global quando foi aberta para este documento. WebXR, por sua
vez, é Candidate Recommendation Draft desde 09/06/2026, roda em Quest Browser e em Safari no
visionOS — e, desde o Safari 26.2, dentro do WebXR também se pode renderizar com WebGPU. Deste
estado derivam três rupturas: publicar gráfico pesado deixa de exigir um runtime instalado (D1);
a experiência imersiva passa a ser distribuível por link, fora de qualquer loja, exatamente no
momento em que as lojas perdem o monopólio da cobrança por decisão judicial (D2); e a mesma
porta que dá GPU ao gráfico dá GPU ao modelo de linguagem, de modo que uma obra interativa pode
ter comportamento generativo sem servidor (D3). O mapa é neutro por pedido, e a sua parte mais
frágil é exatamente a que mais empolga: a régua de exclusão se desloca de "ter loja" para "ter
GPU e RAM", o que, num país onde 65% dos usuários de internet só acessam pelo celular, pode
transformar o "sem instalação" numa promessa cumprida para quem já tinha máquina.

## 2. O tema

O tema é a web como **plataforma de execução** de 3D e de experiência imersiva — não a web como
lugar onde se anuncia, se vende ou se documenta uma experiência que roda em outro lugar. A
distinção importa porque ela move o objeto de estudo do *conteúdo* para o *caminho de entrega*:
o que muda quando a unidade de distribuição de uma experiência 3D deixa de ser um binário
aprovado por alguém e passa a ser um endereço.

Onde isso encosta em mídia e interação: em três lugares simultâneos. Primeiro, no **ofício** —
quem projeta interação passa a ter um alvo só, com degradação automática, em vez de uma matriz
de plataformas. Segundo, na **economia da publicação** — se a porta de entrada é uma URL, a
camada que cobrava pela porta (loja, taxa, curadoria, aprovação) precisa justificar o preço por
outro serviço que não o de deixar entrar. Terceiro, no **acesso** — a web sempre foi a
plataforma cuja promessa era "qualquer um, de qualquer aparelho"; conteúdo que exige GPU
moderna, VRAM e RAM reintroduz um corte de hardware dentro da plataforma que existia justamente
para não ter um.

Por que isto merece um mapa de futuro, e não um levantamento de estado da arte: porque o estado
da arte, aqui, é quase todo verificável e quase todo recente — dá para listar em uma tarde quais
navegadores expõem o quê, em que versão, desde que data. O que **não** é verificável é o que
acontece com a loja de aplicativos, com o papel do desenvolvedor de XR, com a régua de
acessibilidade e com o controle de plataforma quando essa lista vira infraestrutura assumida. O
interessante do tema não é a capacidade técnica, que já existe; é o rearranjo que ela permite e
que ainda não aconteceu.

## 3. Onde isso está hoje

### O que já existe e funciona

**WebGPU está nos quatro navegadores principais.** A página oficial de status de implementação
do grupo GPU for the Web registra: Chromium (Chrome, Edge) desde a versão 113 em macOS, Windows
x86/x64 e ChromeOS; Android com GPUs ARM/Qualcomm/Intel desde a 121 (Android 12+), e GPUs
Imagination desde a 139 (Android 16+); Linux com Intel Gen12+ desde a 144 e NVIDIA sob Wayland
nas 147–148. Firefox desde a 141 em Windows e desde a 145 em macOS Apple Silicon (26+), com
Linux e Android ainda em Nightly. Safari/WebKit na versão 26, ativado por padrão em macOS,
iOS/iPadOS e visionOS.

A especificação **WebGPU é W3C Candidate Recommendation Draft de 01/09/2026** — estável o
bastante para implementação, ainda não Recommendation.

O **caniuse**, aberto em 11/09/2026, soma `85,72% + 1,63% = 87,35%` de uso global. O número
merece uma ressalva que o próprio painel deixa ver: o Firefox aparece ali como "desabilitado por
padrão" em todas as versões, porque o caniuse conta por versão de navegador e o Firefox só
entrega WebGPU em parte das suas plataformas. A cobertura real é boa no desktop e irregular no
Android fora do Chrome.

**Os motores já trataram WebGPU como alvo, não como experimento.** O three.js documenta o
`WebGPURenderer` como "the new alternative of `WebGLRenderer`" e descreve o comportamento
padrão: "By default, the renderer tries to use a WebGPU backend if the browser supports WebGPU.
If not, `WebGPURenderer` falls back to a WebGL 2 backend" — com `forceWebGL` disponível para
forçar o caminho antigo. Isto é a forma madura de uma transição: o autor da experiência escreve
uma vez e o motor decide o backend.

O **PlayCanvas Engine 2.19.0**, de 03/06/2026, trouxe um renderizador de splats gaussianos
baseado em *compute shader* WebGPU. Os ganhos medidos e publicados pela equipe, num Apple M4
Max: 1,1× a um milhão de gaussianas, 2,6× a dez milhões, 4,4× a vinte milhões e **5,7× a 35
milhões**; num iPhone 13 Pro Max, 2× a 2,1× entre um e quatro milhões. O post estima
aproximadamente 85% de usuários com WebGPU (também citando o caniuse) e mantém fallback para
WebGL 2 "com saída visual idêntica". Junto veio o formato **Streamed SOG**, que decima a cena em
níveis de detalhe e a serve em pedaços — a cena do museu ferroviário bávaro usada como exemplo
tem 24 milhões de gaussianas no nível máximo. O **SuperSplat**, editor que roda no navegador,
foi reconstruído sobre WebGPU. Tudo sob licença MIT.

**WebXR está em Candidate Recommendation Draft desde 09/06/2026** e existe em dois lugares que
importam. No **Meta Quest Browser**, que é Chromium e se atualiza: as notas de versão públicas
registram, em 21/04/2026, "Experimental WebGPU and WebXR depth projection support" com
atualização para o Chromium Milestone 146; em 27/07/2026, "added WebGPU support for space-warp
layers"; em 28/08/2026, "Experimental WebGPU foveation support". E no **Safari**: "Support for
WebXR first shipped in Safari 18.0 in visionOS 2 in September 2024", e "Now with Safari 26.2 on
visionOS, WebXR supports WebGPU. This means you can build experiences in WebXR with the full
power of WebGPU."

**Inferência dentro do navegador já é produto, não demo.** O WebLLM (MLC AI) roda modelos das
famílias Llama, Phi, Gemma, Mistral e Qwen "directly onto web browsers with hardware
acceleration", via WebGPU sobre Apache TVM, com 19,1 mil estrelas no GitHub e API compatível com
a da OpenAI. E o Chrome estabilizou a **Prompt API com o Gemini Nano na versão 148** — o modelo
mora no navegador, sem chave de API e sem requisição de rede.

**O cerco jurídico às lojas mudou de fase.** No caso Epic × Apple, a juíza Yvonne Gonzalez
Rogers barrou a cobrança sobre links externos em abril de 2025; em 13/08/2026 a Apple protocolou,
por ordem judicial, a proposta de cobrar 15% de apps padrão que linkarem para fora, 10% de
programas parceiros e 5% de participantes do Small Business Program — sem poder cobrar nada até
a corte aprovar, e com o caso escalado à Suprema Corte em setembro de 2026. No caso Epic ×
Google, a injunção de outubro de 2024 seguiu de pé: Google e Epic retiraram, em julho de 2026, o
pedido conjunto de modificá-la, e o Google passou a suportar lojas alternativas a partir de
**22/07/2026**, cobrando US$ 5.000 anuais de cada loja rival pelo acesso ao programa.

### O que existe e não funciona

**WebXR não é uma plataforma uniforme, e o painel de compatibilidade é duro.** O caniuse, aberto
hoje, dá `0% + 77,15% = 77,15%` — tudo "suporte parcial", nenhum "suporte pleno". Safari aparece
como não suportado em **todas** as versões, e Safari em iOS idem. Isso não contradiz o blog do
WebKit: contradiz a granularidade do caniuse, que não tem uma linha para visionOS. A leitura
correta é que **WebXR no mundo Apple existe no Vision Pro e não existe no iPhone** — a AR
*handheld* segue sem ser exposta pelo Safari. O MDN classifica a própria `isSessionSupported`
como *"Limited availability — This feature is not Baseline because it does not work in some of
the most widely-used browsers."*

**WebXR ficou de fora do Interop 2026.** Foi proposto (issue #1021 do repositório
`web-platform-tests/interop`), mas as 20 focus areas acordadas e as 4 investigation efforts,
publicadas no README oficial de 2026 e no anúncio do web.dev, não incluem nem WebXR nem WebGPU.
Ou seja: em 2026 não há placar público de interoperabilidade pressionando os fabricantes a
convergir nessas duas APIs. Este é o fato isolado que mais enfraquece o mapa, e está registrado
na seção 7.

**No iOS, o navegador ainda não é uma plataforma independente.** Sob a DMA, a Apple permite
motores alternativos na UE, mas a Open Web Advocacy documenta as barreiras que esvaziam a
permissão: exigência de aplicativo separado — o fornecedor precisa abandonar a base de usuários
europeia e recomeçar do zero —, impossibilidade de desenvolvedores fora da UE testarem,
incerteza sobre atualizações de segurança para quem viaja mais de 30 dias, termos contratuais do
*Browser Engine Entitlement* descritos pela Mozilla como "tão dolorosos quanto possível",
instabilidade do BrowserEngineKit e integrações de sistema (controle parental) disponíveis só
para o Safari. A conclusão da OWA é direta: *"Apple knows exactly what the issues are. It is
simply refusing to address them."*

**O custo de entrada da inferência local é alto.** A documentação do Chrome para a Prompt API
lista: mais de 4 GB de VRAM, ou 16 GB de RAM e 4 núcleos, **e ao menos 22 GB livres** no volume
do perfil; não há suporte em Chrome para Android, iOS, ou Chromebooks que não sejam Chromebook
Plus.

**Uma plataforma de WebAR consolidada acabou de fechar.** O 8th Wall, comprado pela Niantic em
2022, teve os serviços hospedados encerrados em 2026 — editor em nuvem, logins e XR Studio fora
do ar —, com parte do código liberada sob MIT (arquitetura principal, Face Effects, Image
Targets, Sky Effects) e o SLAM distribuído apenas como binário. É o contraexemplo vivo de que
"a web venceu" não é a única leitura possível do período.

### Quem está construindo

Do lado da especificação, o W3C (GPU for the Web e Immersive Web). Do lado do navegador, Google
(Chrome/Chromium, e o Quest Browser é Chromium), Apple (WebKit/Safari em macOS, iOS e visionOS),
Mozilla (Firefox), Meta (Quest Browser, com a distribuição via Horizon Store aceitando PWA
empacotado como 2D, 3D em tela ou WebXR imersivo). Do lado dos motores, PlayCanvas, three.js e
Babylon.js. Do lado da inferência, MLC AI (WebLLM) e o próprio Chrome (Prompt API / Gemini
Nano).

### Nota sobre o Brasil

O dado que muda a leitura do tema no país está no TIC Domicílios 2025: **65% dos usuários de
internet acessam exclusivamente pelo celular**, e a distribuição por classe é 5% na A, 35% na B,
67% na C e **87% na DE**. A conversa sobre "console no navegador" pressupõe um parque de
aparelhos com GPU capaz; a maioria brasileira, e quase a totalidade das classes DE, chega por um
aparelho que é o único que a pessoa tem.

## 4. As disrupções-raiz

### D1 — WebGPU como alvo de renderização primário, não como fallback

**O que rompe.** Rompe a necessidade de um **runtime instalado** para entregar gráfico pesado —
e, com ela, a razão de existir do *pipeline de build por plataforma* dentro de um estúdio
pequeno. Não é que o app nativo fique pior; é que a etapa "empacotar, submeter, aguardar
aprovação, manter uma versão por loja" deixa de ser necessária para uma classe inteira de obra
que antes não tinha alternativa.

**Por que agora e não há cinco anos.** Porque a última lacuna grande fechou. Até setembro de
2025, publicar em WebGPU significava excluir todo o ecossistema Apple; com o Safari 26, e com o
Firefox 141/145, o alvo passou a ser os quatro navegadores. E porque os motores já absorveram a
decisão: no three.js, desde o `WebGPURenderer` com fallback automático para WebGL 2, o autor não
precisa escolher — escreve uma vez.

**O que ainda falta.** Android estável fora do Chrome, Linux completo, Firefox em Android (a
página de status dá "expectativa de lançamento em 2026"), e paridade de limites e desempenho
entre implementações. E falta o que o Interop 2026 não vai dar: um placar público que force a
convergência.

**Teste aplicado.** Teste 1 (madura?) — não: a adoção é de *early adopter*, e o alvo padrão de
produção ainda é WebGL 2 com fallback. Teste 2 (emergente?) — sim: fora do laboratório,
em produto real (PlayCanvas 2.19, SuperSplat 3.0), curva subindo. Teste 3 (disruptiva?) — sim:
há um ator nomeável cuja razão de existir é ameaçada, o *build por plataforma* e o instalador.

### D2 — WebXR como canal de distribuição imersiva sem loja: o app vira link

**O que rompe.** Rompe a **loja como porta obrigatória** da experiência imersiva. O ator ameaçado
não é a loja em si — é a loja *como condição de existir*: a aprovação prévia, a taxa como custo
inevitável da distribuição, a curadoria de plataforma como filtro de o que pode ser visto.

**Por que agora e não há cinco anos.** Por dois movimentos que se cruzam. O técnico: WebXR em CR
Draft, implementado com profundidade no Quest Browser (que recebe módulos novos poucos meses
depois de fechada a especificação) e no Safari do visionOS, onde agora renderiza com WebGPU. E o
jurídico: a economia da loja está sendo redesenhada por tribunal — a Apple sem poder cobrar por
link externo até a corte aprovar sua proposta de 15%/10%/5%, e o Google obrigado a abrir o
Android a lojas rivais desde 22/07/2026. Há cinco anos, o link existia tecnicamente e não tinha
como competir economicamente; agora a assimetria de custo entre link e loja está sendo comprimida
de fora.

**O que ainda falta.** Falta o iPhone: o Safari não expõe AR *handheld*, e é o aparelho com que a
maior parte do mundo encostaria primeiro em XR. Falta interoperabilidade sob pressão pública —
WebXR não entrou no Interop 2026. Falta a camada que a loja fazia e o link não faz sozinho:
descoberta, cobrança e confiança.

**Teste aplicado.** Teste 1 — não é madura: 77,15% de suporte **parcial** no caniuse, zero de
suporte pleno, e ausente no Safari fora do visionOS. Teste 2 — sim, é emergente: uso real e
crescente, com cadência de release documentada. Teste 3 — sim: a taxa de plataforma e a aprovação
prévia deixam de ser necessárias, não apenas mais caras.

### D3 — O navegador como runtime de inferência, pela mesma porta do gráfico

**O que rompe.** Rompe a exigência de **servidor de inferência** para que uma experiência tenha
comportamento generativo — e, junto, a exigência de conta, chave de API e custo marginal por
usuário. O ator ameaçado é o *backend de inferência por sessão* como item obrigatório de qualquer
obra interativa com IA; e, no limite, a distinção entre "site" e "aplicativo com IA".

**Por que agora e não há cinco anos.** Porque a mesma API que dá acesso à GPU para desenhar dá
acesso a ela para computar: WGSL e *compute shaders* são a base tanto do renderizador de splats
do PlayCanvas quanto do WebLLM. E porque a inferência local saiu da categoria "projeto de
pesquisa": o Chrome 148 estabilizou a Prompt API com o Gemini Nano dentro do navegador.

**O que ainda falta.** Falta o parque de aparelhos: mais de 4 GB de VRAM ou 16 GB de RAM, e 22 GB
livres, com ausência total em Chrome para Android e iOS. Falta uma resposta de produto para o
primeiro carregamento (um modelo de bilhões de parâmetros não é um asset de página). E falta
convergência: a Prompt API é do Chrome, o WebLLM é de terceiro, e o WebNN — a via padronizada
para NPU — ainda não é baseline.

**Teste aplicado.** Teste 1 — não é madura: o requisito de hardware sozinho a mantém fora do
padrão. Teste 2 — sim: 19,1 mil estrelas, API estável em um navegador de massa, uso real. Teste 3
— sim: um item de custo obrigatório deixa de ser obrigatório, e a regra "IA implica provedor de
serviço" deixa de valer.

### Onde passa a linha, com a régua da disciplina

Não entram como raiz, por serem comuns em produto de massa: WebGL/WebGL 2, WebAssembly, PWA,
exportação de Unity/Unreal para web, aplicativo nativo de VR, e *cloud rendering* / pixel
streaming. O registro de cada rejeição está na seção 12.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "WebGPU como alvo de renderização primário, não como fallback"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Publicar uma experiência 3D pesada deixa de exigir um build por plataforma e passa a exigir um alvo único, o navegador, com degradação automática para WebGL 2"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O estúdio pequeno deixa de manter pessoal dedicado a porte e submissão por loja e realoca essa capacidade para conteúdo"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O portfólio de quem projeta mídia interativa passa a ser um link executável, e o processo seletivo deixa de pedir binário"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "Cursos de jogos e mídia digital reorganizam a disciplina de pipeline de plataforma em torno da web e aposentam a matriz de exportação por console"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O requisito de hardware substitui o requisito de loja como critério de corte de público, e o corte deixa de ser visível para quem publica"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Surge uma prática de projeto de orçamento de GPU, análoga ao orçamento de peso de página, com número declarado na documentação da obra"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Conteúdo 3D volumoso passa a ser transmitido por streaming progressivo com nível de detalhe por dispositivo, em vez de baixado inteiro antes do primeiro quadro"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A unidade de distribuição de 3D deixa de ser o arquivo e passa a ser uma URL versionada com níveis de detalhe negociados na hora"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Museus e arquivos publicam acervo tridimensional como endereço permanente e param de encomendar aplicativo de exposição"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e2.1.2
                ordem: 3
                efeito: "A proteção comercial de uma cena 3D desloca-se do controle de cópia do arquivo para o controle de acesso ao endpoint que serve os níveis de detalhe"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O editor 3D profissional roda no navegador e o projeto deixa de ter instalação, começando pelos nichos em que o dado nasce pesado demais para a máquina do autor"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A licença de software criativo migra de licença de instalação para assinatura de sessão hospedada, e o modo offline vira um diferencial vendido à parte"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "WebXR como canal de distribuição imersiva sem loja: o app vira link"
    efeitos:
      - id: e3
        ordem: 1
        efeito: "A experiência imersiva passa a ser compartilhável por link, sem aprovação prévia de plataforma e sem conta na loja"
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "A taxa de loja deixa de ser custo inevitável da distribuição imersiva e passa a ser o preço de um serviço opcional de descoberta, cobrança e confiança"
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Lojas de XR se reposicionam como selo de curadoria e passam a listar endereços ao lado de binários, cobrando pela auditoria e não pela entrada"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: "Editais públicos de obra imersiva passam a exigir entrega em web aberta como condição de preservação, por terem visto acervo desaparecer com plataforma encerrada"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "A moderação de conteúdo imersivo sai do controle prévio da loja e passa ao regime da web, feito depois da publicação, por denúncia, bloqueio e jurisdição"
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A fabricante de óculos passa a exercer o controle que a loja exercia através do navegador embarcado, via permissões, listas e configurações padrão"
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e3.2.2
                ordem: 3
                efeito: "A regulação de conteúdo imersivo passa a ser escrita como regulação de web, e não como regulação de aplicativo, mudando quem responde por um dano"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "A mesma URL atende tela, celular e óculos a partir de uma base de código só, porque o motor decide backend e modo de sessão em tempo de execução"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O papel de desenvolvedor de XR se dilui dentro do de desenvolvedor web sênior, e a vaga passa a ser descrita por competência de web, não por SDK de fabricante"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A formação em XR deixa de ser trilha separada e vira especialização dentro de front-end, com o laboratório de óculos virando equipamento de apoio e não de curso"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Veículos e agências publicam peça imersiva dentro do ciclo editorial de uma página, sem o ciclo de submissão que antes a tirava da pauta"
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A medição de audiência imersiva é absorvida pela analítica web e a XR perde o painel próprio que a mantinha como categoria separada de mídia"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "O navegador como runtime de inferência, pela mesma porta do gráfico"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Uma experiência 3D ganha comportamento generativo sem servidor de inferência e sem chave de API, usando a mesma GPU que desenha a cena"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O custo marginal por usuário de uma obra generativa cai para perto de zero e o modelo de negócio deixa de precisar de cobrança por uso para não dar prejuízo"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Obra interativa com IA volta a ser publicável por autor individual, sem operação de backend, recolocando a autoria independente onde ela estava antes do custo de inferência"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "O dado do usuário deixa de sair do dispositivo por padrão nas experiências que adotam inferência local, e o consentimento deixa de ser o único lugar onde a privacidade se resolve"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Normas de IA que pressupõem um provedor de serviço identificável perdem ponto de aplicação quando a inferência acontece na máquina de quem usa"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A régua de exclusão migra de ter loja e sistema compatível para ter GPU, VRAM e espaço livre, porque o requisito publicado da inferência local é de hardware e não de plataforma"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Quem publica passa a manter duas versões da mesma obra, uma local e uma servida, e a servida vira a versão de acessibilidade em vez da versão premium"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "No Brasil, onde a maioria acessa só pelo celular, a versão local vira produto de nicho de classe alta e a servida vira o padrão de fato do mercado nacional"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "VRAM e memória viram especificação anunciada ao consumidor comum, como megapixel foi para câmera, porque passam a determinar o que o aparelho abre"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O ciclo de troca de aparelho volta a ser puxado por requisito de software, invertendo a estabilização que fez o aparelho durar mais na última década"
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz

**As três disrupções não são independentes, e o YAML finge que são.** D3 depende de D1: a
inferência local usa a mesma API de GPU. D2 depende de D1 para ter o que entregar sem
instalação. Se D1 travar — por fragmentação entre implementações, que é exatamente o risco que o
Interop 2026 deixou sem placar —, D2 e D3 não acontecem na velocidade indicada, mesmo que nada
lhes aconteça diretamente.

**Dois efeitos se contradizem de propósito, e isso é o achado.** `e3` diz que a barreira de
entrada cai (some a aprovação prévia); `e6` diz que a barreira de entrada sobe (aparece o
requisito de hardware). Ambos derivam do mesmo movimento. A leitura honesta é que a barreira não
cai nem sobe: ela **muda de dono** — sai de uma empresa que a administrava de forma visível e
recorrível, e passa para o mercado de hardware, onde ninguém recorre e ninguém publica o
critério. Quem projeta mídia e interação vai descobrir isso na analítica, não no anúncio.

**`e1` e `e2` estão marcados como `forte`/`alta` porque já começaram**, e essa é justamente a
razão de desconfiar deles como *futurização*: são a extrapolação do que as notas de versão de
2026 já registram. O valor deles no mapa é servir de âncora — se nem eles se sustentarem, nada
abaixo se sustenta.

**Os prazos de 3ª ordem em 2031 estão no limite do horizonte pedido** e foram mantidos
deliberadamente no limite: derivar além disso cairia no critério (b) de parada da skill.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a foveação e o space-warp chegando ao WebGPU.** As notas do Quest Browser
registram "WebGPU support for space-warp layers" (27/07/2026) e "Experimental WebGPU foveation
support" (28/08/2026). São recursos de *otimização de headset* — o tipo de coisa que só se
implementa quando se espera que a web seja o caminho por onde o conteúdo sério vai chegar. É a
fabricante tratando o navegador como cidadão, não como convidado.

**Sinal fraco 2 — o editor profissional migrando antes do consumidor.** O SuperSplat foi
reconstruído sobre WebGPU e roda no navegador com cenas de dezenas de milhões de gaussianas. A
ordem histórica costuma ser a inversa (o consumo migra, a produção resiste); quando a
*produção* migra primeiro, é porque o limite que apertava não era de potência, e sim de
distribuição do dado.

**Sinal fraco 3 — o WebNN parado enquanto o WebGPU anda.** A via padronizada para usar NPU no
navegador não é baseline, enquanto a via de GPU é. Se isso persistir, a inferência local vai
ficar presa ao aparelho com GPU boa e não descer para o aparelho com NPU modesta — o que trava
`e6.1` exatamente no mercado onde ele mais importaria.

**Sinal fraco 4 — a Prompt API não existe em Android nem em iOS.** O caminho de IA embutida que
o Chrome estabilizou é, por enquanto, um caminho de desktop. Se ficar assim, `e5` é um efeito de
computador pessoal com nome de efeito de web.

**Wildcard 1 (baixa probabilidade, alto impacto) — uma fabricante de óculos desliga o WebXR por
padrão.** Basta uma decisão de configuração padrão no navegador embarcado, justificada por
segurança ou por conforto do usuário, para que o link deixe de abrir em imersivo e a loja volte
a ser o único caminho — sem mudar uma linha de especificação e sem infringir nada. O mapa inteiro
do D2 cai junto, e `e3.2.1` deixa de ser efeito de 3ª ordem para virar causa.

**Wildcard 2 — o precedente 8th Wall se repete com um motor, e não com uma plataforma.** O
encerramento dos serviços hospedados do 8th Wall mostrou que uma camada inteira de WebAR pode
sair do ar por decisão de portfólio de uma empresa. Se o mesmo acontecer com um motor
amplamente adotado, o custo de "publicar como link" descobre que tinha uma dependência
proprietária no meio.

**Wildcard 3 — a Suprema Corte reverte o rumo do caso Epic × Apple.** O caso foi escalado em
setembro de 2026. Uma decisão que restaure integralmente a cobrança da plataforma sobre
transações externas devolve à loja a assimetria econômica que os tribunais vinham comprimindo, e
`e3.1` perde o mecanismo.

**Wildcard 4 (na direção oposta) — a CMA britânica cumpre o calendário.** Se a Apple tiver
mesmo de admitir motores alternativos em aparelhos vendidos no Reino Unido, e se isso vier
acompanhado de exposição de WebXR *handheld* no iPhone, todo o mapa acelera de uma vez — e os
prazos de 2030/2031 deste documento passam a ser conservadores.

## 7. Contra o próprio mapa

### O efeito que é só extrapolação linear

**`e1` e `e2`.** Não são futurização: são a curva de 2026 estendida. O three.js já faz o fallback
automático, o PlayCanvas já publicou os ganhos medidos, o Streamed SOG já existe. Marcá-los como
`forte`/`alta` é honesto quanto à evidência e desonesto quanto ao gênero do documento — eles
são *estado atual com data futura*. Quem usar este mapa para decidir algo não deve tratá-los
como descoberta.

### O efeito que assume velocidade de adoção sem precedente

**`e3.1` — a taxa de loja virando preço de serviço opcional até 2029.** Não há caso comparável
em que uma camada de intermediação com essa margem tenha sido desmontada nesse prazo. O
comparável mais próximo é a transição do software em caixa para o SaaS entregue por navegador,
que levou cerca de uma década e aconteceu **sem** um incumbente controlando o sistema operacional
do aparelho. Aqui o incumbente controla. Por isso `e3.1` foi rebaixado para `confianca: baixa`
mesmo tendo `sinal: medio` — o sinal jurídico é real (Epic × Apple, Epic × Google, lojas
alternativas no Android desde 22/07/2026), mas sinal de litígio não é sinal de adoção, e os dois
foram confundidos na primeira versão da roda.

### A disrupção que pode simplesmente não se concretizar

**D2.** E a evidência contra está neste próprio documento, na seção 3: **WebXR não entrou nas 20
focus areas nem nas 4 investigation efforts do Interop 2026**. Sem placar público de
interoperabilidade, a API continua funcionando bem onde já funciona (Quest, visionOS) e mal onde
importaria para escala (Safari no iPhone, Firefox, Android fora do Chrome) — e "compartilhável
por link" vira "compartilhável por link para quem tem Quest". Se D2 não se concretizar, caem `e3`,
`e4` e seus dez descendentes, ou seja, **um terço do mapa**; D1 sobrevive inteiro, porque não
depende de óculos, e D3 sobrevive parcialmente. Vale registrar o desconforto: este é o ponto em
que a leitura mais confortável do tema (o enunciado da disciplina fala em "o hardware de XR
começou a tratar a web como cidadã") encontra o dado que a contraria.

Há um segundo modo de D2 falhar, mais sutil: ela se concretiza tecnicamente e não muda nada,
porque a fabricante do óculos assume, pelo navegador embarcado, o papel de controle que a loja
exercia. Isso está no mapa como `e3.2.1` — e é incômodo que um efeito de 3ª ordem do mapa seja,
ao mesmo tempo, a forma de a disrupção-raiz não valer nada.

### A disrupção cujo alcance foi superestimado na primeira versão

**D3.** A primeira redação de `e6` dizia "todo dispositivo vai precisar de GPU", que é uma
afirmação sem mecanismo. Na auditoria, o efeito foi **reescrito** com o passo que faltava: o
requisito publicado da Prompt API (mais de 4 GB de VRAM, ou 16 GB de RAM, e 22 GB livres, sem
suporte em Android/iOS) é o mecanismo concreto pelo qual a régua se desloca. Sem essa
substituição, `e6` era retórica.

### O viés de quem pediu e de quem construiu

Três vieses declarados:

1. **O viés do tema.** O enunciado da disciplina já afirma a conclusão — "o que era app vira
   link" — e pede a roda a partir dela. Um mapa construído sobre uma premissa já formulada tende
   a procurar confirmação. A contramedida aplicada foi caçar deliberadamente as fontes que
   contradizem (Interop 2026, caniuse de WebXR, barreiras da DMA, encerramento do 8th Wall), e
   elas estão na seção 3 e aqui, não escondidas no anexo.
2. **O viés da fonte.** Boa parte da evidência de capacidade vem de quem vende a capacidade:
   notas de versão de navegador, blog de motor, documentação de plataforma. Ninguém publica
   "nossa API continua irregular". A cobertura de 87,35% do caniuse é o contrapeso mais neutro
   que consegui, e ainda assim mede versão de navegador, não experiência real de usuário.
3. **O viés do recorte pedido.** "Global, com uma nota sobre o Brasil" faz do Brasil um apêndice
   de um mapa calibrado por um parque de aparelhos que não é o brasileiro. O dado do TIC
   Domicílios (65% acessando só por celular; 87% na classe DE) não é nota de rodapé — ele
   contradiz o prazo de metade dos efeitos para o mercado nacional. Mantive como nota porque foi
   o que se pediu, e registro aqui que a escolha empobrece o resultado.

## 8. O que a máquina errou

**1. Interop 2026: eu ia afirmar que WebXR é focus area, e não é.** A busca trouxe um texto
secundário afirmando que "WebXR foi posta como focus area do Interop 2026" e que "com o Safari na
jogada e um placar do Interop empurrando todo mundo para o mesmo comportamento, a promessa
multiplataforma deixa de ser marketing". Antes de escrever, abri o README oficial de 2026 do
repositório `web-platform-tests/interop` e o anúncio do web.dev: as 20 focus areas são outras
(anchor positioning, container style queries, view transitions, WebRTC, WebTransport etc.) e as 4
investigation efforts são accessibility testing, JPEG XL, mobile testing e WebVTT. **Nem WebXR
nem WebGPU estão em nenhuma das duas listas.** WebXR existe apenas como *proposta*, na issue
#1021. O erro é do tipo pior: não era invenção de fonte, era a confusão entre "foi proposto" e
"foi selecionado", que muda o sentido do fato. E como esse fato sustenta um dos argumentos
centrais do mapa, a correção não ficou só nesta seção — reescreveu a seção 7.

**2. Números de suporte divergentes, e eu quase usei o errado.** A busca deu "caniuse coloca o
suporte global a WebGPU em torno de 83%". A página do caniuse, aberta em 11/09/2026, diz
`85,72% + 1,63% = 87,35%`. O post do PlayCanvas, de 03/06/2026, diz "aproximadamente 85%",
citando a mesma fonte. Os três números não se contradizem — medem momentos diferentes de uma
curva que sobe. Usei o da página que abri, com a data, em vez do da busca, sem data. A lição
aplicada aqui: número de cobertura sem data de medição é número inútil.

**3. Data errada no status do WebXR.** A busca informou que o WebXR Device API estava em
Candidate Recommendation Draft "de 16 de março de 2026". Abri `w3.org/TR/webxr/`: o cabeçalho diz
**9 de junho de 2026**. Três meses de diferença, num documento cujo eixo é "por que agora e não
há cinco anos". Prevalece o que está na página.

**4. Versões de navegador inventadas com cara de precisão.** Um dos textos secundários
recuperados afirmava que "Chrome 113+, Firefox 130+ e Safari 17.4+ suportam WebGPU em 2026". Os
dois últimos estão errados por larga margem: a página oficial de status do gpuweb registra
Firefox **141** (Windows) e **145** (macOS Apple Silicon), e Safari **26**. "Firefox 130" e
"Safari 17.4" são exatamente o tipo de número que passa despercebido porque parece específico
demais para ser chute.

**5. Quase escrevi que "o Safari não tem WebXR".** O caniuse marca Safari e Safari iOS como não
suportados em todas as versões — e isso é verdade no recorte do caniuse, que não tem linha para
visionOS. O blog do WebKit diz que "Support for WebXR first shipped in Safari 18.0 in visionOS 2
in September 2024". As duas coisas são verdadeiras e a frase "o Safari não tem WebXR" é falsa. A
formulação correta — WebXR no mundo Apple existe no Vision Pro e não no iPhone — só apareceu
porque as duas fontes foram abertas; com uma só, qualquer das duas leituras erradas passaria.

**6. `Gestalt Village` não foi confirmado e por isso não entrou.** O enunciado do tema cita o
projeto como sinal de cruzamento entre navegador e modelo de linguagem. Busquei por ele em três
formulações; os resultados foram um jogo eletrônico homônimo e projetos genéricos de LLM no
navegador. Não achei nada que corresponda ao que o enunciado descreve. Como o enunciado é
contexto e não fonte, o projeto **não entra como evidência** — o papel dele no mapa foi assumido
por WebLLM e pela Prompt API, que foram abertos e verificados. Se ele existir, a conclusão não
muda; mas não vou citar de memória o que não consegui abrir.

**7. Um efeito de 3ª ordem saiu bom demais e cedo demais.** `e6.2` ("VRAM vira especificação de
consumo, como megapixel foi para câmera") nasceu redondo — porque é uma analogia importada de
outro setor, não um sinal deste. Nenhuma fonte aberta aqui mostra fabricante anunciando VRAM ao
consumidor comum. Foi mantido, porque a derivação é válida, com `sinal: fraco` e
`confianca: baixa`, e está declarado aqui para não ser lido como mais sólido do que é. Sem o
passo de auditoria obrigatório da skill, teria saído com confiança maior do que merece.

## 9. Três cenários para 2031

**Provável.** Em 2031, publicar 3D pesado na web é rotina e ninguém mais discute: o alvo é o
navegador, o motor decide o backend, e o WebGL 2 é o caminho de compatibilidade de que quase
ninguém fala. A parte imersiva ficou pela metade. WebXR é excelente no Quest e no visionOS, e
continua ausente do iPhone em modo *handheld*; sem placar de interoperabilidade, as diferenças
entre implementações viraram folclore de quem desenvolve — cada estúdio mantém sua lista de
truques por aparelho. As lojas não morreram: perderam o monopólio da cobrança, aprenderam a
listar endereços junto de binários e passaram a vender confiança, descoberta e cobrança como
serviços separáveis, a preços menores. A inferência local existe, é ótima e é de desktop; o
mundo do celular continua chamando servidor. No Brasil, quase tudo que chega ao público chega
pela versão servida — a versão local é uma opção que aparece para a minoria, sem alarde.

**Desejável.** Em 2031, a mesma URL abre com dignidade num aparelho antigo e num óculos caro,
porque "orçamento de GPU" virou prática declarada de projeto, do mesmo jeito que peso de página
virou. Isso aconteceu porque três coisas foram feitas: WebXR entrou num ciclo de Interop com
placar público e as diferenças entre navegadores foram fechadas por pressão; a via padronizada
para acelerador neural saiu do limbo e desceu para o aparelho mediano; e quem publica assumiu,
por convenção de ofício e não por lei, a obrigação de manter a versão servida como versão de
acessibilidade — não como versão pobre. O efeito colateral bonito é que a obra imersiva
independente voltou a caber num autor só, sem operação de backend e sem loja, e alguns acervos
públicos foram preservados como endereço em vez de morrerem junto com a plataforma que os
hospedava. Para chegar aqui foi preciso, sobretudo, que alguém tenha tratado o corte de hardware
como um problema de projeto — e não como uma característica do público.

**Indesejável.** Em 2031 o "sem instalação" cumpriu-se ao pé da letra e não significou nada. A
loja saiu do caminho e a fabricante do óculos ocupou o lugar dela pelo navegador embarcado:
permissão desligada por padrão, lista de origens confiáveis, e o link que abre plano enquanto o
aplicativo da própria plataforma abre imersivo. A régua de exclusão, que era visível e recorrível
quando era da loja, virou invisível: a obra simplesmente não abre, e ninguém publica o critério.
A inferência local consolidou uma web de duas velocidades — a de quem tem VRAM e a de quem não
tem —, e como o custo marginal da versão local é quase zero, ela recebe o investimento de
produção enquanto a servida apodrece como plano de contingência. No Brasil, isso significa que o
que se fez de melhor não abriu no aparelho da maioria. **O sinal precoce disso é mensurável e
começa antes**: o dia em que a documentação de uma obra passar a publicar requisito de hardware
em vez de requisito de navegador — e o dia em que a analítica de uma peça imersiva mostrar taxa
de falha de sessão sem que ninguém no time saiba dizer em que aparelhos ela falhou.

## 10. O experimento

### O que é

**"Mesma cena, três portas".** Uma única URL que serve a mesma cena 3D em três modos, medindo o
que cada aparelho consegue:

- **Porta 1 — tela.** A cena renderizada em `WebGPURenderer` com fallback para WebGL 2,
  registrando qual backend foi de fato usado, tempo até o primeiro quadro e quadros por segundo
  sustentados.
- **Porta 2 — imersivo.** A mesma cena, tentando `immersive-vr`/`immersive-ar` via
  `isSessionSupported`, registrando o resultado da negociação por aparelho e navegador.
- **Porta 3 — local.** Um personagem da cena que responde em linguagem natural usando inferência
  no próprio aparelho (Prompt API onde existir, WebLLM com modelo pequeno como alternativa),
  registrando se a porta abriu, quanto pesou o primeiro carregamento e a latência da primeira
  resposta.

A instrumentação é o produto. Ao final, um painel público mostra, para os aparelhos que
participaram: quantos alcançaram cada porta, com que backend, e onde falharam.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central deste mapa: **a régua do "sem instalação" é o navegador ou o aparelho?** Toda
a diferença entre o cenário desejável e o indesejável está aí — e nenhuma fonte deste documento
responde, porque todas medem *suporte declarado de navegador*, não *capacidade dos aparelhos que
as pessoas têm na mão*. O caniuse diz 87,35%; o que isso vira numa sala de aula no Recife é um
dado que não existe até alguém medir.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa WebGPU como caminho primário (não como enfeite: a porta 3 depende de *compute shader*, que
WebGL 2 não tem), WebXR para a negociação de sessão, e inferência local por Prompt API ou WebLLM.

Com tecnologia madura o experimento não existe: em WebGL 2 puro, a porta 3 é impossível — não há
caminho de computação de propósito geral —, e a porta 2 não tem o que negociar. Feito com tudo
maduro, isto vira um *benchmark* de WebGL, que é uma coisa que já se sabe medir e que não
responde à pergunta.

### O que a turma vai fazer quando testar isso em sala

Cada pessoa abre a URL no aparelho que já tem — o celular que trouxe, o notebook do curso, a
máquina do laboratório —, e o painel se preenche ao vivo. Em seguida, três coisas:

1. **Ler o corte.** Ver quantos alcançaram cada porta e o que os separa. A conversa útil é sobre
   quem ficou de fora, não sobre quem chegou.
2. **Estimar o custo de incluir.** Para o aparelho que falhou na porta 1, decidir em grupo qual
   seria o orçamento de GPU aceitável para que ele abrisse — e o que se perde da cena ao caber
   nele.
3. **Testar o wildcard.** Nos óculos disponíveis, verificar se o link abre em imersivo por padrão
   ou se exige permissão/gesto — isto é, medir na prática o quanto `e3.2.1` já é presente e não
   futuro.

### O que seria um resultado que me faria mudar de ideia

**Se a maioria dos aparelhos da turma abrir as três portas sem degradação perceptível**, `e6` e
toda a linha de exclusão por hardware perdem força, e o mapa deveria ser reescrito na direção
otimista: o corte seria transitório, e não estrutural.

**Se quase nenhum aparelho abrir a porta 2**, D2 não é disrupção-raiz neste horizonte — é
tecnologia de nicho de hardware caro, e deveria ter sido rejeitada no Teste 2 da Fase 2 deste
documento.

**E se a porta 3 abrir em celular** — em qualquer celular, por qualquer caminho —, então o
requisito publicado pelo Chrome está desatualizado, o mecanismo que sustenta `e6` cai, e a parte
mais pessimista deste mapa foi construída sobre uma restrição que já não existia.

## 11. Fontes

1. [WebGPU Implementation Status — wiki do grupo GPU for the Web](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status) — sustenta as versões e plataformas de WebGPU em Chromium, Firefox e WebKit (seções 3 e 4) e a correção do item 4 da seção 8. Alta confiabilidade: é mantida pelo próprio grupo de trabalho, com granularidade por GPU e sistema.
2. [W3C — WebGPU (Candidate Recommendation Draft, 01/09/2026)](https://www.w3.org/TR/webgpu/) — sustenta o estágio normativo do WebGPU. Máxima confiabilidade: é o documento normativo.
3. [W3C — WebXR Device API (Candidate Recommendation Draft, 09/06/2026)](https://www.w3.org/TR/webxr/) — sustenta o estágio normativo do WebXR e corrige a data que a busca trouxe errada. Máxima confiabilidade: documento normativo.
4. [web.dev — WebGPU is now supported in major browsers](https://web.dev/blog/webgpu-supported-major-browsers) — sustenta o quadro geral de suporte e quais plataformas seguem em desenvolvimento. Confiabilidade alta com viés declarado: é publicação do Google sobre uma API que o Google puxa.
5. [caniuse — WebGPU](https://caniuse.com/webgpu), consultado em 11/09/2026 — sustenta os 87,35% de cobertura global e a ressalva sobre o Firefox contar como desabilitado. Confiabilidade alta para tendência; mede versão de navegador ponderada por uso, não capacidade de hardware.
6. [caniuse — WebXR Device API](https://caniuse.com/webxr), consultado em 11/09/2026 — sustenta os 77,15% de suporte parcial e a ausência no Safari fora do visionOS. Mesma ressalva metodológica da fonte 5, agravada por não ter linha para visionOS.
7. [three.js — documentação do WebGPURenderer](https://threejs.org/docs/pages/WebGPURenderer.html) — sustenta o fallback automático para WebGL 2 e a opção `forceWebGL`, base de `e1` e `e4`. Máxima confiabilidade: documentação oficial do motor.
8. [PlayCanvas Blog — New in SuperSplat: WebGPU and Streaming Bring Huge Performance Wins (03/06/2026)](https://blog.playcanvas.com/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins/) — sustenta os ganhos medidos (5,7× a 35 M gaussianas; 2× no iPhone 13 Pro Max), o Streamed SOG e a estimativa de 85% de usuários com WebGPU. Confiabilidade média-alta: números medidos e publicados com metodologia declarada, por parte interessada.
9. [WebKit — Features for Safari 26.2](https://webkit.org/blog/17640/webkit-features-for-safari-26-2/) — sustenta "WebXR supports WebGPU" no visionOS e a data de estreia do WebXR (Safari 18.0, visionOS 2, setembro de 2024). Alta confiabilidade como fonte primária de fabricante; viés de omissão sobre o que não funciona.
10. [Meta Horizon OS — Release notes do Browser](https://developers.meta.com/horizon/release-notes/web/) — sustenta a cadência de 2026 (Chromium 146 em 21/04, space-warp em 27/07, foveação em 28/08) e os sinais fracos 1 da seção 6. Alta confiabilidade: registro datado de fabricante.
11. [MDN — XRSystem.isSessionSupported](https://developer.mozilla.org/en-US/docs/Web/API/XRSystem/isSessionSupported) — sustenta a classificação "Limited availability / not Baseline" do WebXR. Alta confiabilidade; a tabela detalhada não renderizou na leitura, então só a classificação foi usada.
12. [web-platform-tests/interop — README de 2026](https://github.com/web-platform-tests/interop/blob/main/2026/README.md) — sustenta a lista das 20 focus areas e 4 investigation efforts, e portanto a ausência de WebXR e WebGPU. Máxima confiabilidade: é a fonte da própria decisão.
13. [web.dev — Interop 2026](https://web.dev/blog/interop-2026) — confirma, de forma independente da fonte 12, a mesma lista. Alta confiabilidade; usada como segunda leitura porque o achado contradiz o enunciado do tema.
14. [GitHub — mlc-ai/web-llm](https://github.com/mlc-ai/web-llm) — sustenta a existência e maturidade da inferência em navegador via WebGPU (19,1 mil estrelas; Llama, Phi, Gemma, Mistral, Qwen; API compatível com a da OpenAI). Confiabilidade alta para existência e escopo; estrelas são proxy fraco de adoção real.
15. [Chrome for Developers — The Prompt API](https://developer.chrome.com/docs/ai/prompt-api) — sustenta a estabilização no Chrome 148, o uso do Gemini Nano e os requisitos de hardware (>4 GB VRAM, ou 16 GB RAM e 4 núcleos, e 22 GB livres; sem Android/iOS), que são o mecanismo de `e6`. Máxima confiabilidade: documentação do fornecedor sobre o próprio produto.
16. [MacRumors — Apple Wants to Charge Developers Up to 15 Percent for Linking Outside the App Store (13/08/2026)](https://www.macrumors.com/2026/08/13/app-store-fees-apple-link-outs/) — sustenta a proposta de 15%/10%/5%, a submissão por ordem judicial e a escalada à Suprema Corte em setembro de 2026. Confiabilidade média-alta: imprensa especializada que cita o documento processual; não é a fonte primária.
17. [MacRumors — Google and Epic Abandon Injunction Modification Request (15/07/2026)](https://www.macrumors.com/2026/07/15/google-third-party-app-stores/) — sustenta a abertura do Android a lojas alternativas em 22/07/2026 e a taxa anual de US$ 5.000. Mesma ressalva da fonte 16.
18. [Open Web Advocacy — Apple's Browser Engine Ban Persists, Even Under the DMA](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/) — sustenta as barreiras concretas a motores alternativos no iOS. Confiabilidade média: é organização de defesa, com posição declarada; usada pelo detalhe factual (exigência de app separado, BrowserEngineKit, impossibilidade de teste fora da UE), não pelo juízo.
19. [Road to VR — Niantic's WebAR platform 8th Wall goes open source as hosted services go offline](https://www.roadtovr.com/niantic-webar-platform-8th-wall-open-source/) — sustenta o encerramento dos serviços hospedados, a abertura parcial sob MIT e a exclusão do SLAM. Confiabilidade média-alta: imprensa especializada de longa data no setor.
20. [Cetic.br — TIC Domicílios 2025, indicador C16A](https://cetic.br/pt/tics/domicilios/2025/individuos/C16A/) — sustenta os 65% de acesso exclusivo por celular e a distribuição por classe (A 5%, B 35%, C 67%, DE 87%). Máxima confiabilidade: pesquisa amostral oficial do NIC.br, com metodologia pública.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista da Fase 1 — o que foi respondido e o que foi assumido

A entrevista **não foi pulada**: os seis pontos vieram respondidos na abertura do pedido, o que a
skill prevê explicitamente ("se quem pediu já responder tudo da Fase 1 na primeira mensagem, não
repita a pergunta — confirme o que foi entendido em uma frase e siga"). Por isso `confianca` no
frontmatter é `media`, e não `baixa`.

| Ponto | Resposta recebida |
|---|---|
| 1. Tema e recorte | "O navegador como console: 3D e XR sem instalação" — a web como plataforma de **execução** 3D/XR, tema 15 de 19, família "Criação e plataforma". A fronteira com os vizinhos veio dada: IA local no dispositivo em geral é o tema 16 (aqui, só a parte "no navegador", como sinal); captura 3D é o tema 10. |
| 2. Horizonte | 2031. |
| 3. Para quem | Quem projeta mídia e interação. |
| 4. Recorte geográfico | Global, com uma nota sobre o Brasil. |
| 5. Já descartado | O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. |
| 6. Viés desejado | Neutro. |

Complementos recebidos junto, e obedecidos: nenhuma disrupção suspeita foi indicada ("descubra");
ideias óbvias a excluir são "as que servem para qualquer tema" (aplicado como critério (c) de
parada da Fase 3); e o que faria quem pediu mudar de ideia é "evidência de que a adoção já passou
da maioria inicial (Rogers) ou de que a tecnologia não rompe nada" — o que foi incorporado como
Teste 1 e Teste 3 da Fase 2, e é exatamente o que rejeitou WebGL, PWA e Unity-para-web.

**O que ficou sem poder ser perguntado.** Esta rodada não tinha pessoa disponível para responder
de volta. Houve uma ambiguidade que eu teria levantado, na forma da Fase 1 da skill: **onde
exatamente passa "o que já é comum em produto de massa"** para *cloud rendering* / pixel
streaming. É uma tecnologia com uso comercial real e escalado (GeForce Now e similares), o que a
faz madura pelo Teste 1; mas ela é a **alternativa concorrente** a D1 — se a GPU pode ficar no
servidor, o requisito de hardware local de `e6` some. Assumi que ela é madura e fica fora como
raiz, e a registro aqui como a maior alternativa não explorada deste mapa. Se a resposta fosse
outra, haveria uma quarta disrupção-raiz — ou, mais provavelmente, um contra-mapa inteiro.

**Viés declarado no documento, como a skill exige:** neutro. Na prática, isso foi implementado
assim — quando o sinal era ambíguo, prevaleceu a leitura da fonte primária aberta, e não a da
narrativa do setor. Foi por isso que o achado do Interop 2026 ficou na seção 7 em vez de ser
suavizado.

### 12.2 Fase 2 — todas as tecnologias testadas, aceitas e rejeitadas

| Candidato | Teste 1 (madura?) | Teste 2 (emergente?) | Teste 3 (disruptiva?) | Decisão |
|---|---|---|---|---|
| **WebGL / WebGL 2** | Sim — é o alvo padrão de 3D na web há mais de uma década, e hoje é o *caminho de fallback* que os motores usam quando WebGPU falta. O que resta é ficar mais rápido, não mudar de natureza. | — | — | **Madura.** Rejeitada como raiz; entra na seção 3 como o piso sobre o qual D1 acontece. |
| **WebAssembly** | Sim — opção padrão para levar código nativo à web, em produção em escala. | — | — | **Madura.** Rejeitada. Aparece só como caminho de CPU do WebLLM. |
| **PWA (Progressive Web App)** | Sim — instalável, com service worker, em produto de massa há anos; a própria Meta aceita PWA empacotado na Horizon Store. | — | — | **Madura.** Rejeitada pela régua da disciplina e pelo Teste 1. |
| **Unity / Unreal exportando para web** | Sim — existe e é usado; o que muda é o tamanho do build e o desempenho, não a natureza. | — | — | **Madura.** Rejeitada. |
| **Aplicativo nativo de VR (Quest, visionOS)** | Sim — é o padrão de fato da distribuição imersiva hoje. | — | — | **Madura.** Rejeitada; é o incumbente que D2 ameaça, não a disrupção. |
| **Cloud rendering / pixel streaming** | Sim — serviço comercial em escala. | — | — | **Madura.** Rejeitada, com a ressalva de 12.1: é a alternativa concorrente que mais ameaça o mapa, e não foi explorada por decisão de recorte. |
| **WebGPU como alvo de renderização primário** | Não — a adoção é de *early adopter*; o padrão de produção ainda é WebGL 2. | Sim — em produto real (PlayCanvas 2.19, SuperSplat 3.0, three.js r171+), curva subindo, quatro navegadores. | Sim — o *build por plataforma* e o instalador deixam de ser necessários para uma classe inteira de obra. | **Disrupção-raiz (D1).** |
| **WebXR como canal de distribuição sem loja** | Não — 77,15% de suporte **parcial**, zero pleno; ausente no Safari fora do visionOS. | Sim — uso real e crescente, com cadência de release documentada no Quest Browser. | Sim — a aprovação prévia e a taxa de plataforma deixam de ser condição de existir. | **Disrupção-raiz (D2).** Com a contraevidência do Interop 2026 registrada na seção 7. |
| **Inferência de modelo no navegador (WebGPU compute)** | Não — os requisitos publicados a mantêm fora do padrão, e não existe em Android/iOS. | Sim — WebLLM em uso real; Prompt API estável no Chrome 148. | Sim — o backend de inferência por sessão deixa de ser item obrigatório de custo. | **Disrupção-raiz (D3).** |
| **Gaussian splatting no navegador (SuperSplat, Streamed SOG)** | Não é madura. | Sim — em produto, sob MIT, com números medidos. | **Não** — o que ela muda é o custo e a qualidade de entregar 3D capturado; nenhum ator nomeável perde a razão de existir por causa dela isoladamente. É o caso-limite de "fica mais rápido/barato". | **Emergente, não disruptiva sozinha.** Rejeitada como raiz; entra como a evidência mais forte de D1 (é o caso em que WebGPU deixou de ser opção e virou requisito de produto) e alimenta `e2`. |
| **WebNN** | Não. | **Não** — não é baseline, não está em uso real em escala; é promessa de padronização. | — | **Especulação, não tecnologia emergente.** Rejeitada como raiz pelo Teste 2; vira sinal fraco 3 na seção 6. |
| **Motores alternativos no iOS sob DMA/CMA** | Não. | Não — permitido no papel, praticamente inexistente na prática, pelas barreiras que a OWA documenta. | — | **Não é tecnologia; é condição regulatória.** Rejeitada como raiz; entra na seção 3 como obstáculo e na seção 6 como wildcard 4. |
| **Chrome Prompt API / Gemini Nano isoladamente** | Não. | Sim. | Parcialmente — mas é **um fornecedor**, não uma capacidade de plataforma; tratá-la como raiz faria o mapa depender de uma decisão de produto do Google. | **Absorvida por D3**, que é formulada como "o navegador como runtime de inferência" e se sustenta também pelo WebLLM, que é de terceiro. |

### 12.3 Fase 4 — a auditoria, efeito por efeito

Resultado global: **4 efeitos rebaixados, 1 reescrito, 3 cortados**, de um total de 37 gerados.
Sobreviveram 34.

**Rebaixados:**

- **`e3` — de `forte`/`alta` para `medio`/`media`.** A primeira versão tratava a possibilidade
  técnica de compartilhar por link como se fosse a prática. É técnica hoje; prática, não. O sinal
  jurídico (Epic × Apple, Epic × Google) é forte, mas é sinal de litígio, não de adoção.
- **`e3.1` — para `confianca: baixa`.** Teste 2 da auditoria: assume a desmontagem de uma camada
  de intermediação com margem alta em três anos, sem precedente. O comparável — caixa para SaaS —
  levou cerca de uma década e não tinha incumbente dono do sistema operacional. Detalhado na
  seção 7.
- **`e3.2` — para `sinal: fraco`/`confianca: baixa`.** Não encontrei nenhuma fonte mostrando
  moderação de conteúdo imersivo já migrando para o regime da web; é derivação lógica pura.
- **`e4.1` — para `sinal: fraco`.** A diluição do papel de desenvolvedor de XR dentro do de
  desenvolvedor web é plausível e não tem sinal de mercado neste levantamento: não olhei dado de
  vaga, e não vou afirmar tendência de emprego sem ele.

**Reescrito:**

- **`e6`.** Versão original: *"todo dispositivo vai precisar ter GPU"*. Falhou no Teste 3 da
  auditoria — o elo pulava a etapa. Versão final: a régua migra **porque** o requisito publicado
  da inferência local é de hardware (>4 GB VRAM, ou 16 GB RAM, e 22 GB livres) e não de
  plataforma. O mecanismo agora está nomeado e é verificável na fonte 15.

**Cortados (não entram na roda):**

- **"O sistema operacional perde relevância como camada de controle."** Cortado pelo critério (c)
  da Fase 3: é o efeito de 3ª ordem que se escreveria para qualquer disrupção de web dos últimos
  vinte anos. Não é específico deste tema e não tem mecanismo próprio aqui.
- **"As lojas de aplicativo deixam de existir."** Cortado pelo Teste 3 da auditoria: elo causal
  pulado, e contrariado pela evidência. O que os tribunais estão fazendo é remover a
  *exclusividade da cobrança*, não a loja; e o próprio Google, ao abrir o Android, criou um
  programa pago (US$ 5.000/ano) para lojas rivais — o que constrói mercado de lojas, não o
  contrário. Substituído por `e3.1`, que diz o que de fato se pode derivar.
- **"A web volta a ser a plataforma universal, inclusive para XR."** Cortado por ser a conclusão
  do enunciado do tema reapresentada como achado. Não é efeito: é a tese. Mantê-la seria
  confirmar a premissa com ela mesma.

### 12.4 Buscas que não deram em nada

- **`Gestalt Village`** — três formulações ("Gestalt Village browser WebGPU language model
  simulation" e variações). Retorno: um jogo eletrônico homônimo, projetos genéricos de LLM no
  navegador, e uma simulação acadêmica de vila com NPCs sem relação com o nome. Nada corresponde
  ao projeto descrito no enunciado do tema. Registrado na seção 8, item 6.
- **Métrica de uso real de WebGPU no Chrome Platform Status** — tentei chegar ao contador de
  *page loads* do chromestatus para ter uma medida de uso **efetivo** (quantas páginas realmente
  chamam a API), que seria melhor que a de suporte declarado do caniuse. A busca devolveu as
  páginas de métricas, mas não o valor; e o painel é renderizado por JavaScript, o que impede a
  leitura por busca de página. **Este é o dado que mais falta neste documento**: sei quantos
  *poderiam* rodar WebGPU, não quantos rodam.
- **Tabela de compatibilidade do WebXR no MDN** — a página da `isSessionSupported` foi aberta,
  mas a tabela de compatibilidade não veio no conteúdo renderizado. Só a classificação
  "Limited availability / not Baseline" foi aproveitada; a granularidade por navegador veio do
  caniuse e do blog do WebKit.
- **Dado brasileiro de parque de aparelhos com GPU capaz de WebGPU** — não procurei exaustivamente
  e não encontrei nada no caminho; o TIC Domicílios responde sobre *acesso* e sobre *tipo de
  dispositivo*, não sobre capacidade gráfica. É precisamente a lacuna que o experimento da seção
  10 existe para preencher, ainda que em amostra minúscula.

### 12.5 Divergências entre fontes, registradas

| Alegação | Onde divergiu | O que prevaleceu |
|---|---|---|
| Cobertura global de WebGPU | Busca: "~83%". PlayCanvas (03/06/2026): "~85%". caniuse (11/09/2026): 87,35%. | O valor da página aberta, com a data explícita. Não são contraditórios: são pontos de uma curva. |
| Status do WebXR no Interop 2026 | Texto secundário: é focus area. README oficial + web.dev: não está entre as 20 focus areas nem as 4 investigation efforts; existe só como proposta (issue #1021). | As fontes primárias. Reescreveu a seção 7. |
| Data do CR Draft do WebXR | Busca: 16/03/2026. `w3.org/TR/webxr/`: 09/06/2026. | O cabeçalho do documento normativo. |
| Versões mínimas de WebGPU | Texto secundário: "Firefox 130+, Safari 17.4+". gpuweb wiki: Firefox 141/145, Safari 26. | A wiki do grupo de trabalho. |
| WebXR no Safari | caniuse: não suportado em todas as versões, inclusive iOS. WebKit: enviado no Safari 18.0/visionOS 2 desde setembro de 2024. | As duas: não há contradição, há recorte de plataforma. Formulação adotada: existe no Vision Pro, não no iPhone. |

**Nota de verificação de links.** Rodada a checagem automática dos 20 endereços da seção 11, 18
responderam 200. As duas páginas do caniuse (fontes 5 e 6) responderam **406** ao `curl` — é
recusa de cliente automatizado por parte do site, não link morto: as duas foram efetivamente
abertas e lidas durante este trabalho, e é de lá que vêm os números de 87,35% e 77,15%. Fica
registrado para que a divergência não seja lida depois como fonte fabricada.

### 12.6 Contagem declarada

- Disrupções-raiz aprovadas: **3** (de 13 candidatas testadas).
- Efeitos gerados: **37**. Cortados na auditoria: **3**. No mapa: **34** (6 de 1ª ordem, 12 de 2ª,
  16 de 3ª).
- Efeitos com `confianca: baixa`: **22 de 34** — dos quais os 16 de 3ª ordem, que é o resultado
  esperado pelo método, mais 6 de 1ª e 2ª ordem rebaixados na auditoria.
- Fontes abertas e lidas: **20**. Fontes citadas de memória e não verificadas: **0** — o critério
  aplicado foi o do `DUVIDAS.md` da skill: se não abri nesta sessão, não entra.
