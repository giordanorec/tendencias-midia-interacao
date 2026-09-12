---
tema: O navegador como console — 3D e XR sem instalação
slug: o-navegador-como-console-3d-e-xr-sem-instalacao
autor_login: kvv
zona_de_interesse: Criação e plataforma
data: 2026-09-15
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: [WebGPU, WGSL, compute shaders, WebGPU compatibility mode, WebXR Device API, elemento HTML model, USDZ, 3D Gaussian splatting, transformers.js v4 WebGPU runtime, WebNN, TSL, WebAssembly SIMD e wasm64]
fontes: 17
confianca: media
experimento: Publicar a mesma cena 3D pesada como URL única e medir, na turma, em quantos aparelhos ela roda em WebGPU, em quantos cai para WebGL 2 e em quantos não roda.
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

Em 2026 o navegador deixou de pedir licença ao sistema operacional para usar a GPU: WebGPU está habilitado por padrão em Chrome, Firefox e Safari, e desde Safari 26.2 a sessão WebXR do visionOS também renderiza por WebGPU, não só por WebGL. Este mapa não trata disso como "mais um avanço de performance", e sim como três rupturas ainda incompletas: o *compute shader* na aba (a GPU deixa de ser rasterizador e vira recurso programável de uso geral), a sessão imersiva como estado do navegador (XR deixa de exigir binário instalado, mas ganha um caminho proprietário concorrente no elemento `<model>`), e o fim do binário como unidade de distribuição (a regulação abre canais, mas o motor de renderização do iOS continua trancado 26 meses depois da obrigação do DMA). Nenhuma das três está resolvida: a especificação WebGPU segue em Candidate Recommendation Draft, WebGPU e WebXR ficaram **fora** das áreas de foco do Interop 2026, Godot ainda não tem WebGPU e o backend da Unity saiu de experimental há pouco. O documento rastreia efeitos de primeira, segunda e terceira ordem até 2031, ataca o próprio raciocínio e propõe um experimento de sala mensurável em uma aula.

## Seção 2 — O tema

"O navegador como console" nomeia uma mudança de camada, não de recurso. Até aqui, a web executava gráficos por concessão: o WebGL dava acesso a um pipeline de rasterização fixo, herdado do OpenGL ES, e tudo que fosse simulação, ordenação, física ou inferência precisava voltar para a CPU ou para um servidor. Com WebGPU, a aba recebe *compute shaders* — nas palavras da própria WebKit ao anunciar o Safari 26, "computações de propósito geral na GPU, algo que antes não era possível com WebGL". O ponto de contato com mídia e interação é direto e duplo: (a) o que se pode *mostrar* numa página muda de ordem de grandeza — cenas de captura com dezenas de milhões de gaussianas, mundos com física na GPU, modelos de linguagem carregados na própria aba; e (b) o que se pode *distribuir* muda de natureza — uma experiência imersiva passa a caber num link, sem loja, sem aprovação, sem binário.

Por que isto exige mapa prospectivo e não levantamento de estado da arte: o estado da arte é conhecido e, sozinho, engana. Levantar que "WebGPU está em todos os navegadores" é verdade e é inútil, porque a pergunta que interessa a quem projeta mídia não é se a API existe, e sim o que acontece com o resto do arranjo quando ela existir de fato em produção — com a loja de aplicativos, com o requisito de hardware do usuário, com o controle das fabricantes de óculos sobre o que se pode ver, com quem consegue abrir a experiência no Brasil. Essas são perguntas de segunda e terceira ordem, e nenhuma delas se responde listando navegadores compatíveis. Além disso, o campo tem uma armadilha específica: os sinais fortes (todos os navegadores ficaram compatíveis) e os sinais fracos (nenhum motor de jogo majoritário adotou por padrão; o padrão ficou fora do Interop 2026) apontam em direções contrárias. Mapa de futuro é exatamente o instrumento para segurar duas evidências opostas ao mesmo tempo sem escolher a mais confortável.

## Seção 3 — Onde isso está hoje

**O que funciona — a base está posta, e a data importa.** WebGPU está "supported and enabled by default" no Safari 26 em macOS, iOS, iPadOS e visionOS; no Chrome desde a 113 em Mac, Windows e ChromeOS, e na 121 em Android 12+ para GPUs ARM/Qualcomm/Intel; no Firefox desde a 141 no Windows e, a partir da 147, em todas as versões do macOS [1]. Em 25 de fevereiro de 2026 o Chrome 146 lançou o *compatibility mode*, que roda WebGPU sobre APIs antigas — OpenGL ES 3.1 no Android, com ChromeOS e Direct3D 11 no Windows em estudo — ativado por `featureLevel: "compatibility"` no `requestAdapter()` [2]. Do lado de XR, o Safari 18.0 trouxe sessões `immersive-vr` no visionOS 2 em setembro de 2024, e o Safari 26.2, em 12 de dezembro de 2025, fechou a lacuna que quase ninguém nota: até então o WebXR do visionOS dependia de WebGL para desenhar; agora "WebXR on visionOS now supports WebGPU" [3][4]. No Quest, o Browser 146.0 (21/04/2026) adicionou "Experimental WebGPU and WebXR depth projection support", o 149.1 (27/07/2026) trouxe WebGPU para *space-warp layers* e o 150.1 (28/08/2026), foveação experimental por WebGPU [5].

**O que funciona na prática, com número.** O caso mais bem documentado não é um demo de fabricante: é o SuperSplat, editor de *gaussian splatting* da PlayCanvas. Em 3 de junho de 2026 eles publicaram um renderizador baseado em *compute shader* que faz *culling*, projeção e ordenação na GPU, e mediram: num Apple M4 Max, ganho de 1× com 1 milhão de gaussianas subindo a 5,7× com 35 milhões; num iPhone 13 Pro Max, ganho consistente de 2×. E registraram a base instalada com fonte: "WebGPU is now available to roughly 85% of end users according to caniuse.com", com queda automática para WebGL 2 para o restante, renderizando idêntico [6]. Do lado da inferência, o transformers.js v4 (09/02/2026) reescreveu o runtime WebGPU em C++ e reporta GPT-OSS 20B em q4f16 a cerca de 60 tokens por segundo num M4 Pro Max, além de ~4× em modelos de *embedding* BERT [7].

**O que falha — e falha em três lugares diferentes.** Primeiro, o padrão: a especificação WebGPU ainda é Candidate Recommendation Draft (01/09/2026) do GPU for the Web Working Group [8], e — este é o dado que contraria a narrativa de consolidação — nem WebGPU nem WebXR entram na lista de áreas de foco do **Interop 2026**, que ficou com anchor positioning, view transitions, WebRTC, WebTransport, IndexedDB e afins [9]. Sem foco de Interop, não há pressão coordenada de conformidade entre navegadores exatamente na camada que este tema supõe universal. Segundo, os motores: a documentação oficial do Godot é explícita — "Godot currently does not support WebGPU, which is a prerequisite for allowing Forward+/Mobile to run on the web platform"; o *export* web só alcança WebGL 2.0 e projetos em C# nem exportam [10]. Na Unity, o manual descreve WebGPU como "currently experimental and not supported by all browsers and devices", sem *async compute*, sem resolução dinâmica, sem leitura síncrona de buffer da GPU para a CPU (o que quebra `GetPixels()` e `CaptureScreenshot()`) [11]. Terceiro, a distribuição: 26 meses depois de o Artigo 5(7) do DMA obrigar a Apple a permitir motores de navegador de terceiros no iOS, "not a single browser vendor has successfully ported their own engine to iOS in the EU", por barreiras contratuais [12].

**Quem está construindo.** W3C/GPU for the Web e o Immersive Web Working Group nos padrões; Apple (WebKit), Google (Chrome/Dawn), Mozilla (wgpu) e Meta (Quest Browser, sobre Chromium — milestone 146 em abril de 2026) nos navegadores; PlayCanvas, Three.js e Babylon.js nos motores web nativos, com Unity e Godot atrás; Hugging Face no runtime de inferência. E a Apple, simultaneamente, constrói uma alternativa: o elemento HTML `<model>`, habilitado por padrão no visionOS 26, que embute um USDZ como se fosse uma imagem — "being considered by the W3C for the Model Element and the HTML specification managed by WHATWG. It's a work in progress" — com a justificativa explícita de que WebXR e Quick Look não bastam para "existing websites" [13].

## Seção 4 — As disrupções-raiz

**Filtro aplicado (Etapa 2).** Foram recusados como tecnologia madura ou melhoria incremental, e portanto **não** entram como disrupção-raiz: (a) WebGL/WebGL 2 e todo o ecossistema three.js clássico — maduros desde a década passada; (b) Unity e Unreal exportando para WebAssembly — prática estabelecida, e ainda por cima presa ao WebGL 2 na Unity fora do modo experimental; (c) aplicativo nativo de VR nas lojas de Meta e Apple — é o *status quo*, não a ruptura; (d) PWA instalável e *service worker* — adotados em massa há anos; (e) "IA generativa no site" via chamada de API — aceleração de processo existente, sem mudança de arquitetura; (f) visualizador 3D de produto em e-commerce — recurso comum de produto de massa, exatamente o que a régua da disciplina manda descartar. Também foi recusada como disrupção, por ser consequência e não causa, a melhoria de *frame rate* em cenas existentes: rodar mais rápido o que já rodava é otimização.

### Disrupção 1 — O *compute shader* na aba: a GPU deixa de ser rasterizador e vira recurso programável de uso geral

*O que rompe.* Rompe a divisão de trabalho que organizava a mídia na web desde 2011: GPU desenha, CPU calcula, servidor pensa. Com *compute*, a mesma porta serve para ordenar 35 milhões de gaussianas, rodar física, e executar as camadas de um transformer. A consequência arquitetural não é de aplicação, é de motor: o núcleo do renderizador é reescrito em torno de *compute* (foi o que a PlayCanvas fez no SuperSplat [6]), e a linguagem de shader muda de GLSL para WGSL, o que quebra todo shader customizado existente. Rompe também a fronteira conceitual entre "página" e "programa": o navegador passa a ser um alvo de execução com acesso a hardware paralelo, não um cliente de documentos com um `<canvas>` privilegiado.

*Por que agora e não há cinco anos.* Porque há cinco anos a capacidade simplesmente não existia na web — a própria WebKit registra o *compute shader* como "algo que antes não era possível com WebGL" [14] — e porque a última grande lacuna de navegador só fechou em setembro de 2025, com o Safari 26 [1][14]. Sem Safari, WebGPU era alvo minoritário; com Safari, virou linha de base, na casa dos 85% dos usuários segundo o caniuse citado pela PlayCanvas [6]. E porque em fevereiro de 2026 o *compatibility mode* do Chrome 146 estendeu o alcance para hardware antigo sobre OpenGL ES 3.1 [2], o que muda a conta de quem pode ser público-alvo.

*O que falta para se concretizar.* Falta (i) sair de Candidate Recommendation Draft e, mais importante, entrar num regime de conformidade cruzada — hoje WebGPU está **fora** do Interop 2026 [8][9]; (ii) adoção por motores de maioria: Godot não tem WebGPU no *export* oficial [10] e a Unity o mantém com buracos documentados, inclusive a ausência de leitura síncrona GPU→CPU [11]; (iii) resolver o teto de memória e o tempo de compilação de shader em aparelho móvel, que é o que separa o benchmark do M4 Max do celular de entrada.

### Disrupção 2 — A sessão imersiva como estado do navegador, disputada por um caminho declarativo proprietário

*O que rompe.* Rompe a equação "experiência imersiva = binário instalado e aprovado pela fabricante do óculos". Uma sessão `immersive-vr` ou `immersive-ar` passa a ser um estado que uma aba entra e sai, endereçável por URL, compartilhável por mensagem. Rompe ainda um pressuposto interno da própria web: o de que só existe um caminho para 3D. Enquanto o WebXR trata o imersivo como sessão imperativa sobre um canvas, a Apple habilitou por padrão no visionOS 26 o elemento `<model>`, declarativo, que embute um USDZ como se fosse um `<img>` e é, por desenho, trivial de publicar em qualquer CMS [13]. São duas web 3D concorrentes, com governanças e formatos diferentes.

*Por que agora e não há cinco anos.* Porque a peça que faltava não era a API de XR — WebXR existe desde 2019 —, era a capacidade gráfica dentro dela. Até dezembro de 2025 a sessão WebXR do visionOS era obrigada a desenhar com WebGL; o Safari 26.2 foi quem ligou WebGPU dentro do WebXR [3]. No Quest, os recursos que separam uma demo de um produto — *depth projection*, *space-warp*, foveação — só chegaram por WebGPU entre abril e agosto de 2026 [5]. Ou seja: 2026 é o primeiro ano em que a web pode tentar paridade gráfica com o nativo dentro do óculos, e não apenas rodar dentro dele.

*O que falta para se concretizar.* Falta (i) WebXR entrar num programa de interoperabilidade — não está no Interop 2026 [9]; (ii) o iPhone: o WebXR da Apple é do visionOS, não do iOS — o anúncio do Safari 18.0 é literal, "Safari 18.0 for visionOS 2 adds support for `immersive-vr` sessions" [4]; (iii) uma decisão sobre se `<model>`/USDZ e WebXR convergem ou se bifurcam de vez, o que hoje é declaradamente "a work in progress" no W3C e no WHATWG [13]; (iv) que os recursos novos de XR deixem de chegar primeiro ao SDK nativo e depois — ou nunca — à web.

### Disrupção 3 — O fim do binário como unidade de distribuição, sob arbitragem regulatória

*O que rompe.* Rompe o gargalo econômico do software de experiência: a loja como canal obrigatório, a taxa sobre a transação e a aprovação prévia como filtro editorial. Se a experiência é um link, não há submissão, não há revisão, não há versão mínima de sistema, não há *download* de gigabytes — e não há 30%. Rompe também a geografia do lançamento: um link não tem *storefront* por país.

*Por que agora e não há cinco anos.* Porque a ruptura aqui não é técnica, é jurídica, e ela só ficou operante recentemente. No Brasil, o acordo homologado com o CADE — originado de representação do Mercado Livre em 2022 — obriga a Apple a abrir canais alternativos de distribuição e permitir links para pagamento externo, com estrutura de taxas declarada (5% + 25% na App Store; 15% em direcionamento externo; 5% em loja alternativa), multa de até R$ 150 milhões por descumprimento e vigência de três anos [15]. Na Europa, o DMA já obriga desde 7 de março de 2024. Há cinco anos nada disso existia com força executória.

*O que falta para se concretizar.* Falta o principal: a regulação abriu a distribuição de **binários** e não destravou o **motor**. Passados 26 meses da obrigação do Artigo 5(7), nenhum fornecedor de navegador conseguiu portar seu próprio motor para o iOS na UE, travado por termos contratuais [12] — o que significa que, no aparelho que a maioria carrega, a capacidade da web continua sendo decidida por uma empresa só. Falta também que a queda da taxa se traduza em alcance: sem loja, o problema não é distribuir, é ser encontrado. E falta o desfecho brasileiro: um acordo de três anos é um laboratório com prazo de validade.

## Seção 5 — A roda dos futuros

```yaml
roda_dos_futuros:
  - id: e1
    efeito: "Motores 3D reescrevem o núcleo em torno de compute e o WebGL vira camada de compatibilidade"
    sinal: forte
    prazo: "2026-2029"
    confianca: alta
    filhos:
      - id: e1.1
        efeito: "Cena de captura com milhões de gaussianas vira entregável web corriqueiro, no lugar do vídeo"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e1.1.1
            efeito: "Patrimônio, imóvel e varejo publicam cena navegável em vez de galeria de fotos"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media
          - id: e1.1.2
            efeito: "Hospedagem e streaming de geometria viram linha de custo fixa de projeto, como vídeo foi nos anos 2010"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa
      - id: e1.2
        efeito: "WGSL e linguagens de nó (TSL) fragmentam o conhecimento de shader acumulado em GLSL"
        sinal: moderado
        prazo: "2026-2029"
        confianca: media
        filhos:
          - id: e1.2.1
            efeito: "Portfólio de creative coding em GLSL perde valor de mercado sem tradução para WGSL"
            sinal: fraco
            prazo: "2028-2030"
            confianca: baixa

  - id: e2
    efeito: "A aba passa a rodar inferência pela mesma porta gráfica, sem servidor de modelo"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e2.1
        efeito: "Experiência de mídia com IA passa a ter custo marginal zero para quem publica"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e2.1.1
            efeito: "Privacidade vira atributo verificável de produto ('nada sai desta aba'), não promessa contratual"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
      - id: e2.2
        efeito: "O download volta: pesos de modelo como asset de centenas de megabytes na primeira visita"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e2.2.1
            efeito: "Franquia de dados móvel vira barreira de acesso onde o celular é o único dispositivo"
            sinal: forte
            prazo: "2027-2031"
            confianca: media
          - id: e2.2.2
            efeito: "Cota e despejo de cache do navegador viram território disputado entre publicadores"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa

  - id: e3
    efeito: "O requisito de hardware desloca-se do sistema operacional para a GPU e a bateria do usuário"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e3.1
        efeito: "Fallback deixa de ser decisão de engenharia e vira decisão de design, declarada no briefing"
        sinal: moderado
        prazo: "2027-2029"
        confianca: media
        filhos:
          - id: e3.1.1
            efeito: "Surge 'grau de experiência' (A/B/C) como campo contratual, com preço diferente por grau"
            sinal: fraco
            prazo: "2028-2031"
            confianca: baixa
      - id: e3.2
        efeito: "A desigualdade de acesso migra de 'ter internet' para 'ter GPU capaz'"
        sinal: moderado
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e3.2.1
            efeito: "Serviço público, aula e exposição em 3D excluem quem está em aparelho de entrada, sem que ninguém meça"
            sinal: fraco
            prazo: "2029-2031"
            confianca: media
          - id: e3.2.2
            efeito: "Renderização remota por streaming ressurge como concorrente do local e reintroduz o servidor que a web tinha dispensado"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media

  - id: e4
    efeito: "A sessão imersiva vira estado do navegador: endereçável por URL, pedida por permissão"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e4.1
        efeito: "O link imersivo entra no fluxo social — mensagem, QR, post — e a experiência XR vira campanha efêmera, não produto instalado"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e4.1.1
            efeito: "Consentimento espacial (planta da sala, mãos, profundidade) vira permissão de navegador tão disputada quanto câmera"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
      - id: e4.2
        efeito: "A fabricante de óculos descobre no próprio navegador um ponto de controle mais discreto que a loja"
        sinal: fraco
        prazo: "2027-2031"
        confianca: media
        filhos:
          - id: e4.2.1
            efeito: "Recurso novo de XR chega primeiro ao SDK nativo e só depois, ou nunca, ao WebXR"
            sinal: moderado
            prazo: "2026-2030"
            confianca: media
          - id: e4.2.2
            efeito: "'Web de segunda classe dentro do headset' vira pauta regulatória, nos moldes do caso dos motores de navegador"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa

  - id: e5
    efeito: "A web ganha um caminho 3D declarativo paralelo ao WebXR, com outro formato e outro dono"
    sinal: moderado
    prazo: "2026-2030"
    confianca: media
    filhos:
      - id: e5.1
        efeito: "Publicar 3D fica tão fácil quanto publicar imagem, e CMS e lojas passam a aceitar modelo como mídia nativa"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e5.1.1
            efeito: "Quem define o container de cena define o ecossistema: o formato vira o ponto de poder, não a API"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
      - id: e5.2
        efeito: "A divergência de plataforma reaparece dentro da própria web, depois de uma década de convergência"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e5.2.1
            efeito: "Estúdio passa a entregar duas versões (imperativa e declarativa) e o custo de uma peça 3D quase dobra"
            sinal: fraco
            prazo: "2028-2031"
            confianca: baixa
          - id: e5.2.2
            efeito: "Entrar num programa de interoperabilidade vira objetivo de lobby técnico, disputado como pauta de padrão"
            sinal: moderado
            prazo: "2027-2029"
            confianca: media

  - id: e6
    efeito: "O binário deixa de ser a unidade de distribuição da experiência interativa"
    sinal: moderado
    prazo: "2026-2031"
    confianca: media
    filhos:
      - id: e6.1
        efeito: "A regulação abre canais e reduz a taxa, mas não destrava o motor de renderização do aparelho"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e6.1.1
            efeito: "O acordo brasileiro com o CADE vira laboratório observado de fora, com prazo de validade de três anos"
            sinal: moderado
            prazo: "2026-2029"
            confianca: media
          - id: e6.1.2
            efeito: "Com a taxa menor, o ativo escasso deixa de ser a distribuição e passa a ser a descoberta"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media
      - id: e6.2
        efeito: "A loja se reposiciona como curadoria, aquisição e cobrança — não mais como canal obrigatório"
        sinal: fraco
        prazo: "2028-2031"
        confianca: baixa
        filhos:
          - id: e6.2.1
            efeito: "Anúncio jogável e demo instantânea absorvem o topo do funil que a vitrine da loja ocupava"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media
```

**O que o bloco não exprime sozinho.** Três coisas.

A primeira é que os seis efeitos de primeira ordem não têm o mesmo *tipo* de causa. `e1` e `e2` são consequências técnicas quase mecânicas da existência do *compute shader* — vão acontecer com ou sem decisão de ninguém. `e4`, `e5` e `e6` são consequências de disputa: dependem de o que a Apple decidir sobre `<model>`, do que a Meta expuser no Quest Browser, do que a Comissão Europeia e o CADE conseguirem executar. Um YAML com `confianca: media` nos dois casos esconde que a incerteza de `e1` é sobre prazo e a de `e6` é sobre direção.

A segunda é que `e3.2` e `e2.2.1` são o mesmo efeito visto por dois ângulos, e juntos formam o achado mais desconfortável do mapa. A promessa "sem instalação" só é universal se o custo de entrada for zero — e ele não é: ele foi transferido para a GPU e para a franquia de dados do usuário. No Brasil isso tem número: a TIC Domicílios 2025 mediu 65% dos usuários de internet acessando exclusivamente pelo celular, proporção que chega a 87% nas classes DE, enquanto só 32% dos domicílios têm ao menos um computador — 97% na classe A contra 10% nas classes DE [16]. O *compatibility mode* do Chrome 146 [2] é precisamente um reconhecimento de que esse abismo existe; e o fato de a PlayCanvas manter um caminho WebGL 2 renderizando idêntico [6] mostra que, para quem constrói a sério, o fallback não é cortesia, é requisito.

A terceira é que a roda não representa bem o efeito *negativo*, isto é, o que deixa de acontecer. Se `e4.2.1` se confirmar — recurso de XR nascendo no SDK nativo e chegando tarde à web —, o mapa inteiro se esvazia sem que nenhum nó precise ser marcado como falso: a web continuaria rodando XR, só que sempre uma geração atrás, que é o modo mais eficiente de manter uma plataforma viva e irrelevante.

## Seção 6 — Sinais fracos e wildcards

**Sinais fracos que já existem, mas ainda em fontes marginais.**

1. *Simulação multiagente nativa do navegador.* O repositório `paulobsf/GestaltVillage` se descreve como "a browser-native multi-agent social simulation", em JavaScript, com zero estrelas [17]. Não é um produto nem uma prova de nada — é exatamente o tipo de objeto que aparece antes de uma categoria existir: alguém tratando a aba como ambiente de simulação com agentes, não como tela.

2. *Backend de WebGPU nascendo fora do motor.* A ausência de WebGPU no Godot oficial [10] não impediu que iniciativas de terceiros tentassem o caminho por fora. Um renderizador que a fundação não prioriza sendo escrito pela comunidade é sinal de que a demanda existe antes da oferta — e, se estabilizar, o motor oficial herda a decisão.

3. *A inferência migrando para o mesmo runtime do gráfico.* O transformers.js v4 reescreveu o runtime WebGPU em C++ e passou a rodar o **mesmo código** em navegador, Node, Bun e Deno [7]. O sinal fraco não é o desempenho: é a unificação. Quando o alvo de compilação do modelo e o alvo de compilação da cena são o mesmo, o navegador deixa de ser um destino de publicação e vira um runtime de propósito geral.

4. *Um padrão fora do foco.* WebGPU e WebXR ficarem de fora do Interop 2026 [9] é um sinal fraco lido ao contrário: o que não entra na lista tende a divergir silenciosamente entre navegadores, e a divergência só aparece como bug de produção dois anos depois.

**Wildcard (baixa probabilidade, alto impacto).** Uma fabricante de óculos desliga o WebXR por padrão — não o remove, apenas o coloca atrás de uma opção desligada em Ajustes, com uma justificativa de segurança espacial (mapeamento do ambiente doméstico por página arbitrária). Tecnicamente é uma linha de configuração; juridicamente é quase inatacável, porque o recurso continua existindo. Em menos de um trimestre, toda experiência imersiva na web passa a exigir uma instrução ao usuário para ser vista — e nenhuma campanha, aula ou exposição sobrevive a "antes de abrir este link, vá em Ajustes". Isso inverteria o mapa inteiro: `e4`, `e5` e boa parte de `e6` deixariam de valer, `e1` e `e2` sobreviveriam apenas na tela plana, e o tema desta análise se reduziria a "3D sem instalação" — sem o XR. O precedente para achar isso plausível já existe e não é especulação: 26 meses depois da obrigação legal do DMA, nenhum motor de navegador de terceiros roda no iOS [12]. Quando a camada de execução pertence a uma empresa, o *default* é uma forma de política.

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa toma a curva 2023→2026 (Chrome, depois Firefox, depois Safari; depois WebGPU dentro do WebXR; depois *compatibility mode*) e a projeta como se continuasse. Mas a mesma sequência já esteve disponível para a geração anterior: WebGL foi universal, WebXR existe desde 2019, e nem por isso a experiência imersiva deixou de ser majoritariamente um binário de loja. É perfeitamente possível que 2026 seja o **teto** da curva, não o começo dela: todos os navegadores compatíveis, nenhum motor de maioria adotando, e a web 3D permanecendo o que já é há dez anos — ótima para demo, marginal para produto.

**Velocidade de adoção irreal.** O mapa sugere que a reescrita de motores em torno de *compute* acontece em três a quatro anos. Contra isso pesa a evidência mais dura que encontrei: a documentação oficial do Godot, em 2026, diz sem rodeios que WebGPU não é suportado [10], e o manual da Unity classifica o backend como experimental, com ausências que quebram fluxos de produção reais, como leitura síncrona da GPU para a CPU [11]. Motor de jogo não é biblioteca de renderização: migração de backend leva anos e é bloqueada por compatibilidade retroativa. O prazo "2026-2029" de `e1` é, honestamente, a estimativa mais otimista defensável, não a mais provável.

**Falha da disrupção.** A Disrupção 3 é a mais frágil das três, e por um motivo específico: ela pressupõe que a abertura regulatória da distribuição se converta em abertura da **capacidade**. A evidência disponível diz o contrário — os canais alternativos avançaram (DMA na UE, acordo com o CADE no Brasil [15]) enquanto o motor de renderização do iOS continua fechado [12]. Se esse descompasso persistir até 2031, a Disrupção 3 se cumpre na letra e fracassa no espírito: haverá muitas lojas, e a web continuará podendo apenas o que uma empresa permitir no aparelho que a maioria carrega. Há também uma fragilidade na Disrupção 2: se `<model>` e WebXR se bifurcarem de vez, "a web como plataforma universal de XR" nunca chega a existir — existirão duas webs 3D, o que é o oposto da premissa.

**Viés pessoal do autor (e da IA que redigiu).** Há um viés estrutural neste tipo de exercício, e ele tem nome: torcida pela web aberta. Toda a literatura de referência do tema — blogs de navegador, especificações do W3C, *changelogs* de motor, advocacy de padrão — é produzida por quem tem interesse direto em que a web vença, e eu li majoritariamente essas fontes. Faltou no meu levantamento a voz oposta: estúdios que avaliaram a web e escolheram nativo, e o motivo comercial dessa escolha. Um segundo viés, mais sutil: tratei "sem instalação" como valor evidente. Para uma fabricante de óculos, instalação é o que permite controle de qualidade, verificação de idade e segurança espacial — e nada garante que o público prefira o link. A recusa do usuário é um cenário de falha que este mapa não modelou.

## Seção 8 — O que a máquina errou

1. **Afirmou que WebXR é área de foco do Interop 2026 — é falso.** Duas fontes secundárias encontradas na busca sustentavam que "a WebXR Device API é uma área de foco proposta do Interop 2026" e que WebGPU teria "cruzado 90% de aprovação nos Web Platform Tests" para essas áreas. Corrigido ao abrir a fonte primária: o anúncio do Interop 2026 no web.dev lista vinte áreas de foco e **nenhuma** delas é WebGPU ou WebXR [9]. O erro foi identificado pela regra de só citar o que foi efetivamente aberto; o achado inverteu o sinal do argumento — o que parecia evidência de consolidação virou evidência de risco de divergência, e foi reescrito assim na Seção 3 e em `e5.2.2`.

2. **Afirmou que "a Apple lançou WebXR no Safari 18 em iOS, iPadOS, macOS e visionOS".** Também vinha de fonte secundária. Ao abrir o anúncio oficial do Safari 18.0, o texto é restritivo: "Safari 18.0 for visionOS 2 adds support for `immersive-vr` sessions with WebXR" — visionOS, e só [4]. A diferença é decisiva para este tema: se houvesse WebXR no iOS, a tese do "XR sem instalação no aparelho que a maioria carrega" teria base; sem ela, a Disrupção 2 fica confinada a hardware dedicado. O texto foi corrigido e a limitação foi promovida a item de "o que falta" na Disrupção 2.

3. **Quase tratou "Gestalt Village" como projeto estabelecido.** O enunciado do tema o apresenta como um cruzamento notável (modelo de linguagem inteiro no navegador via WebGPU). A primeira busca não encontrou nada com esse nome, e a tentação foi descrevê-lo assim mesmo, a partir do enunciado. Em vez disso, busquei diretamente nos repositórios e achei o objeto real: `paulobsf/GestaltVillage`, "a browser-native multi-agent social simulation", JavaScript, zero estrelas [17]. Ficou como **sinal fraco**, com a contagem de estrelas explícita, e não como evidência de tendência — a diferença entre as duas coisas é exatamente o que separa um mapa de um folheto.

4. **Tentou usar "70% de suporte de navegador" e "15× de ganho de performance" como números do tema.** Ambos vinham de páginas de SEO sem método declarado. Foram descartados e substituídos pelos únicos números com procedência e contexto que encontrei: ~85% de usuários com WebGPU segundo o caniuse, citado por quem tem interesse em saber a base real; e ganhos de 1× a 5,7× conforme a contagem de gaussianas, num hardware nomeado [6]. Um número sem denominador nem hardware não é dado, é adjetivo.

## Seção 9 — Três cenários para 2031

**Provável.** Em 2031, WebGPU é infraestrutura invisível: ninguém mais anuncia que um site "usa WebGPU", do mesmo modo que ninguém anuncia que usa HTTPS. Três em cada quatro peças 3D publicadas na web rodam sobre *compute*, com um caminho WebGL 2 mantido por obrigação contratual para o público de aparelho antigo — e esse caminho é a parte mais cara do orçamento, porque exige testar tudo duas vezes. Os motores de maioria migraram, com atraso: a Unity estabilizou o backend, o Godot chegou por último. O XR na web existe e funciona, mas continua uma segunda opção dentro do óculos: os recursos que definem qualidade percebida nascem no SDK nativo e chegam à web com um ou dois anos de defasagem, e a Apple mantém `<model>` e USDZ como o caminho fácil para o site comum, enquanto WebXR atende quem constrói experiência inteira. A distribuição por link é real e comum para campanha, demo, educação e peça institucional; para jogo de fôlego e assinatura, a loja continua sendo onde está o dinheiro, agora cobrando menos e chamando a si mesma de curadoria. No Brasil, o acordo com o CADE venceu, foi renovado com ajustes e produziu o efeito que ninguém previu: um mercado interno de lojas alternativas pequeno demais para importar, e uma jurisprudência grande o bastante para ser citada fora.

**Desejável.** Em 2031, publicar uma cena imersiva é tão banal quanto publicar um vídeo, e por um motivo específico: WebGPU e WebXR entraram num programa de interoperabilidade com testes públicos, e a mesma URL se comporta igual no Quest, no visionOS, no Android XR e no navegador do celular — com degradação previsível e declarada, não com quebra. O caminho declarativo e o imperativo convergiram: `<model>` virou o `<img>` do 3D, especificado no WHATWG, aceitando mais de um formato, e quem precisa de controle fino desce para WebXR sem reescrever o projeto. O *compatibility mode* deixou de ser modo e virou o piso: um celular de entrada abre a mesma cena que um desktop, com menos detalhe e a mesma interação, e isso é medido e publicado como requisito de acessibilidade — do mesmo jeito que contraste e legenda. A desigualdade não desapareceu, mas passou a ser um número que aparece no relatório do projeto, e não uma surpresa descoberta pelo usuário que não conseguiu abrir o link da matrícula.

**Indesejável.** Em 2031, "sem instalação" virou um slogan que descreve apenas a experiência de quem tem hardware recente. A web 3D se bifurcou: um caminho declarativo, fácil e proprietário, que domina o site comum, e um WebXR tecnicamente vivo mas desligado por padrão em duas das três plataformas de óculos, sob justificativa de segurança espacial que nenhum regulador conseguiu contestar porque o recurso "continua disponível". Os motores de maioria nunca migraram de verdade, e a promessa de paridade gráfica ficou nos demos de 2026. O peso do que a aba carrega — cena de milhões de gaussianas mais pesos de modelo — transformou a primeira visita num download de centenas de megabytes que, para os 87% das classes DE que acessam exclusivamente pelo celular, simplesmente não acontece: a página abre, o *placeholder* aparece, e a experiência nunca carrega. O resultado não é exclusão declarada, que seria contestável; é exclusão silenciosa, que se manifesta como taxa de abandono e é lida como desinteresse. E a camada que a web tinha reconquistado voltou para o servidor por outra porta: renderização remota por streaming, com assinatura mensal, dona do que você vê e de quanto tempo você vê.

## Seção 10 — O experimento

**O que é.** Uma página única, publicada numa URL, contendo três coisas na mesma cena: (1) uma captura em *gaussian splats* de um espaço real do CIn, feita com celular e processada no SuperSplat; (2) um efeito que só existe com *compute shader* — por exemplo, partículas ou fluido calculados na GPU sobre a cena; (3) um botão "Entrar em XR" que abre a sessão imersiva onde houver suporte. A página instrumenta a si mesma: registra, sem identificar ninguém, se o adaptador obtido foi *core*, *compatibility* ou nenhum (queda para WebGL 2 ou falha total), o modelo declarado de GPU, a taxa de quadros média nos primeiros dez segundos e se a sessão XR foi oferecida, negada ou inexistente. Tudo cabe em uma aula: a captura na semana anterior, a instrumentação é um punhado de linhas em torno de `navigator.gpu.requestAdapter()`.

**Pergunta sobre o futuro.** "Sem instalação" quer dizer "para todo mundo"? Dito de outro modo: quando o requisito de execução sai da loja e entra no aparelho, quem fica de fora — e quem, na sala, sabia que ia ficar?

**Tecnologia emergente usada.** WebGPU com *compute shader* (renderizador de splats em compute, no caminho que a PlayCanvas descreveu [6]); o *compatibility mode* do Chrome, pedido explicitamente com `featureLevel: "compatibility"` [2] para medir quantos aparelhos só entram por ali; WebXR para a sessão imersiva; e, como extensão opcional para a segunda metade da aula, um modelo pequeno via transformers.js rodando na mesma aba [7], para medir o custo de download e o efeito térmico no celular.

**Atividade da turma.** Todos abrem o mesmo link, ao mesmo tempo, cada um no seu aparelho — sem uniformizar nada, e é esse o ponto. O painel projetado mostra a distribuição ao vivo: quantos em *core*, quantos em *compatibility*, quantos caíram para WebGL 2, quantos não abriram, quantos tinham XR disponível. Em seguida a turma se divide: um grupo escreve o requisito mínimo que colocaria num briefing real a partir *daqueles* números, e outro grupo escreve o e-mail que mandaria ao cliente explicando por que parte do público não conseguiu ver a peça. Fecha-se comparando as duas listas com o dado nacional — 65% dos usuários acessando exclusivamente pelo celular, 87% nas classes DE, 10% dos domicílios das classes DE com computador [16] — e perguntando qual dos dois textos teria sido escrito sem a medição.

**Resultado de mudança de ideia esperado.** A expectativa é que a turma chegue tratando "roda no navegador" como sinônimo de "roda em qualquer lugar", e saia com a distinção operante entre **disponibilidade da API** e **capacidade do aparelho**. O momento de virada previsto é a hora em que a mesma URL, no mesmo Wi-Fi, produzir três experiências diferentes dentro da sala — e alguém perceber que o aparelho que não abriu não é uma exceção estatística, é a mediana do país. A mudança de ideia que interessa não é "então a web 3D não presta"; é perceber que o *fallback* é uma decisão de projeto com consequência distributiva, e que quem não a toma explicitamente a está tomando por omissão.

## Seção 11 — Fontes

1. **WebGPU Implementation Status — Wiki do gpuweb (W3C GPU for the Web), GitHub.** Sustenta: versões e plataformas exatas de suporte a WebGPU em Chrome (113 Mac/Windows/ChromeOS; 121 Android 12+), Firefox (141 Windows; 145/147 macOS) e Safari (26 em todas as plataformas, habilitado por padrão), na Seção 3 e na Disrupção 1. Confiabilidade: alta. https://github.com/gpuweb/gpuweb/wiki/Implementation-Status
2. **What's New in WebGPU (Chrome 146) — Chrome for Developers, 25/02/2026.** Sustenta: lançamento do *compatibility mode*, alvo inicial em OpenGL ES 3.1 no Android, exploração de ChromeOS e Direct3D 11, uso de `featureLevel: "compatibility"` e a ressalva de que aplicações complexas precisam de ajustes. Base de `e3.1` e do experimento. Confiabilidade: alta. https://developer.chrome.com/blog/new-in-webgpu-146
3. **WebKit Features for Safari 26.2 — WebKit, 12/12/2025.** Sustenta: "WebXR on visionOS now supports WebGPU", e o histórico de que o WebXR do visionOS dependia de WebGL até então. Peça central do "por que agora" da Disrupção 2. Confiabilidade: alta. https://webkit.org/blog/17640/webkit-features-for-safari-26-2/
4. **WebKit Features in Safari 18.0 — WebKit.** Sustenta: WebXR `immersive-vr` chegou no visionOS 2, e **somente** ali — correção do erro descrito na Seção 8, item 2. Confiabilidade: alta. https://webkit.org/blog/15865/webkit-features-in-safari-18-0/
5. **Release notes — Meta Quest Browser, Meta Horizon OS Developers.** Sustenta: Browser 146.0 (21/04/2026) com WebGPU e *depth projection* experimentais e Chromium milestone 146; 149.1 (27/07/2026) com WebGPU em *space-warp layers*; 150.1 (28/08/2026) com foveação por WebGPU. Base da Disrupção 2 e de `e4.2.1`. Confiabilidade: alta. https://developers.meta.com/horizon/release-notes/web/
6. **"New in SuperSplat: WebGPU and Streaming Bring Huge Performance Wins" — PlayCanvas Blog, 03/06/2026.** Sustenta: renderizador de splats em *compute shader*; ~85% de usuários com WebGPU segundo caniuse; ganhos de 1× a 5,7× (M4 Max, 1M a 35M gaussianas) e 2× no iPhone 13 Pro Max; fallback para WebGL 2 renderizando idêntico; LOD por *streaming* com orçamento por dispositivo. Confiabilidade: alta (fonte interessada, mas com método e números verificáveis declarados). https://blog.playcanvas.com/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins/
7. **"Transformers.js v4: Now Available on NPM!" — Hugging Face, 09/02/2026.** Sustenta: runtime WebGPU reescrito em C++; mesmo código em navegador, Node, Bun e Deno; GPT-OSS 20B em q4f16 a ~60 tokens/s num M4 Pro Max; ~4× em modelos BERT de embedding. Base de `e2` e do sinal fraco 3. Confiabilidade: alta (fonte interessada; números de benchmark próprios). https://huggingface.co/blog/transformersjs-v4
8. **WebGPU — W3C, Candidate Recommendation Draft de 01/09/2026, GPU for the Web Working Group.** Sustenta: a especificação ainda não é Recomendação. Confiabilidade: alta. https://www.w3.org/TR/webgpu/
9. **"Interop 2026: Continuing to improve the web for developers" — web.dev.** Sustenta: as vinte áreas de foco do Interop 2026, nenhuma delas WebGPU ou WebXR. Correção do erro da Seção 8, item 1; base de `e5.2.2` e do sinal fraco 4. Confiabilidade: alta. https://web.dev/blog/interop-2026
10. **Exporting for the Web — Documentação oficial do Godot Engine.** Sustenta: "Godot currently does not support WebGPU, which is a prerequisite for allowing Forward+/Mobile to run on the web platform"; só WebGL 2.0 (Compatibility); C# não exporta para web; complicações de *threads* e isolamento de origem cruzada. Base do "o que falha" e do teste adversarial. Confiabilidade: alta. https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html
11. **"Limitations of the WebGPU graphics API" — Unity Manual 6000.3.** Sustenta: WebGPU "currently experimental and not supported by all browsers and devices"; ausência de *async compute*, resolução dinâmica, *cubemap arrays* e leitura síncrona GPU→CPU (quebrando `GetPixels()` e `CaptureScreenshot()`). Confiabilidade: alta. https://docs.unity3d.com/6000.3/Documentation/Manual/WebGPU-limitations.html
12. **"The Digital Markets Act Is Delivering Real Wins, But Not Yet for Browser Engines" — Open Web Advocacy.** Sustenta: 26 meses após a obrigação do Artigo 5(7) do DMA (07/03/2024), "not a single browser vendor has successfully ported their own engine to iOS in the EU", travado por barreiras contratuais. Base da Disrupção 3, do teste adversarial e do precedente do wildcard. Confiabilidade: média (organização de *advocacy*, parte interessada; o fato central — ausência de portes — é verificável de forma independente). https://open-web-advocacy.org/blog/the-digital-markets-act-is-delivering-real-wins-but-not-yet-for-browser-engines/
13. **"A step into the spatial web: The HTML model element in Apple Vision Pro" — WebKit, 26/06/2025.** Sustenta: `<model>` habilitado por padrão no visionOS 26; USDZ como formato; status "being considered by the W3C for the Model Element and the HTML specification managed by WHATWG. It's a work in progress"; e a justificativa explícita de que WebXR e Quick Look não bastam para sites existentes. Base da Disrupção 2 e de `e5`. Confiabilidade: alta. https://webkit.org/blog/17118/a-step-into-the-spatial-web-the-html-model-element-in-apple-vision-pro/
14. **"News from WWDC25: WebKit in Safari 26 beta" — WebKit.** Sustenta: WebGPU "shipping in Safari 26 beta for macOS, iOS, iPadOS, and visionOS"; *compute shaders* como "computações de propósito geral na GPU, algo não previamente possível com WebGL"; `<model>` e mídia imersiva no visionOS. Confiabilidade: alta. https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/
15. **"Apple permitirá compras externas e lojas alternativas à App Store no Brasil" — MacMagazine, 23/12/2025 (atualizado).** Sustenta: acordo com o CADE, originado de representação do Mercado Livre (2022); abertura de canais alternativos de distribuição e links para pagamento externo; redação neutra nos alertas; estrutura de taxas (5% + 25% na App Store, 15% em *steering*, 5% em loja alternativa); multa de até R$ 150 milhões; vigência de três anos. Base da Disrupção 3, de `e6.1.1` e da nota sobre o Brasil. Confiabilidade: média (imprensa especializada; os termos exatos e as datas de vigência devem ser conferidos no documento do CADE antes de uso normativo). https://macmagazine.com.br/post/2025/12/23/apple-permitira-compras-externas-e-lojas-alternativas-a-app-store-no-brasil/
16. **"TIC Domicílios 2025: 163 milhões de brasileiros acessaram a internet" — MobileTime, 09/12/2025 (cobertura da pesquisa do Cetic.br/NIC.br).** Sustenta: 65% dos usuários acessam exclusivamente pelo celular (+5 p.p. sobre 2024); 87% nas classes DE; 95% da classe A por múltiplos dispositivos; 32% dos domicílios com ao menos um computador (97% na classe A, 10% nas classes DE); queda da diferença entre classes de 83 p.p. (2015) para 27 p.p. Base da nota sobre o Brasil, de `e2.2.1`, `e3.2` e do experimento. Confiabilidade: média-alta (cobertura jornalística de pesquisa primária do Cetic.br; para citação acadêmica, ir ao relatório original). https://www.mobiletime.com.br/noticias/09/12/2025/tic-domicilios-2025/
17. **Busca por repositórios "Gestalt Village" — GitHub.** Sustenta: existência e natureza real do projeto `paulobsf/GestaltVillage`, "a browser-native multi-agent social simulation", em JavaScript, com zero estrelas. Usado como sinal fraco explicitamente dimensionado, e na correção da Seção 8, item 3. Confiabilidade: média (metadado de repositório verificado; nenhuma avaliação técnica do código foi feita). https://github.com/search?q=%22gestalt+village%22&type=repositories

## Seção 12 — Anexo: o levantamento bruto

**Entrevista de recorte (Etapa 1) — perguntas feitas e respostas recebidas, sem edição.**

1. *Tema da análise:* "O navegador como console: 3D e XR sem instalação" (tema 15 de 19 da disciplina; família "Criação e plataforma").
2. *Horizonte temporal:* 2031.
3. *Público-alvo:* quem projeta mídia e interação.
4. *Recorte geográfico:* global, com uma nota sobre o Brasil.
5. *Premissas descartadas e viés:* descartar de início o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão. Disrupção suspeita: nenhuma — descobrir. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema. O que faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe).
6. *Tecnologias/vetores de interesse:* nenhum vetor imposto; profundidade de três ordens; modo de análise a partir de uma inovação/tema, não de um setor. Zona de interesse do autor: "Criação e plataforma". Login do autor: kvv.
7. *Instrução operacional adicional:* usar busca na web de verdade, citar apenas o que foi aberto, não inventar fontes, não fazer perguntas de volta, assumir e declarar o que não estiver definido.

**Pressupostos assumidos e declarados (por ausência de interlocutor).**
- "Nota sobre o Brasil" foi interpretada como: manter as disrupções e a roda em recorte global, e ancorar em dado brasileiro os pontos onde a diferença de aparelho e de acesso muda o resultado (`e2.2.1`, `e3.2`, `e6.1.1`, cenário indesejável, experimento).
- "Confiança" no *frontmatter* foi mantida em `media`, conforme o modelo da skill, apesar de a Seção 3 ter base documental forte: a incerteza dominante do mapa é de direção (disputa de plataforma), não de fato.
- O campo `data` foi preenchido como `2026-09-15` por estar assim, literalmente, no modelo de saída da skill, embora a execução tenha ocorrido em 12/09/2026.
- A fronteira com o tema 16 (IA local no dispositivo) foi respeitada: a inferência no navegador entra como efeito (`e2`) e como sinal fraco, **não** como disrupção-raiz, porque o objeto deste tema é a web como plataforma de execução, não a IA local em geral.

**Aplicação do filtro anti-tecnologia madura (Etapa 2) — candidatas recusadas, com motivo.**
- *WebGL / WebGL 2:* recusada. Universal há mais de uma década; é a linha de base sobre a qual a ruptura acontece, não a ruptura.
- *Unity/Unreal exportando para WebAssembly:* recusada. Prática estabelecida; e a própria Unity documenta o backend WebGPU como experimental [11], o que confirma que o que está maduro é o caminho WebGL.
- *App nativo de VR em loja:* recusada. É o *status quo* que as disrupções atacam.
- *PWA e service worker:* recusada. Adotados em massa; "instalar do navegador" não é novidade estrutural.
- *Visualizador 3D de produto em e-commerce:* recusada explicitamente pela régua da disciplina (comum em produto de massa).
- *Chamada de API de IA generativa dentro de uma página:* recusada. Aceleração de processo existente, sem mudança de arquitetura de execução.
- *Ganho de frame rate em cenas existentes:* recusada. Otimização, não ruptura — rodar mais rápido o que já rodava não cria comportamento novo.
- *Renderização remota por streaming (cloud rendering):* recusada como disrupção-raiz por ser restauração do modelo cliente-servidor, não ruptura dele; preservada como efeito de terceira ordem em `e3.2.2`, onde é mais interessante justamente por contrariar a tese do mapa.

**Rodadas de busca (log das iterações).**
- Iteração 1 — estado do WebGPU nos navegadores. Busca "WebGPU Safari 26 shipping browser support 2026". Resultado: muitas páginas de SEO com números divergentes (70%, 85%, "15× de ganho"). Decisão: descartar todas e ir às primárias — wiki do gpuweb [1] e blog do WebKit [14].
- Iteração 2 — estado do WebXR. Busca "WebXR support 2026 visionOS Safari Quest browser Android XR". Resultado contaminado: fontes secundárias afirmando WebXR no iOS e WebXR como foco do Interop 2026. Decisão: verificar as duas afirmações nas primárias. Ambas caíram (ver Seção 8).
- Iteração 3 — Interop 2026. Fetch de web.dev [9]. Achado que inverteu parte do argumento: WebGPU e WebXR fora da lista.
- Iteração 4 — hardware antigo e desigualdade de acesso. Busca por *compatibility mode*; fetch de developer.chrome.com [2]. Ligou-se, aqui, o fio com o dado brasileiro da iteração 8.
- Iteração 5 — motores. Fetch das documentações oficiais de Godot [10] e Unity [11]. Achado mais forte contra a própria tese do mapa.
- Iteração 6 — evidência de produção com número. Fetch do blog da PlayCanvas [6]. Única fonte encontrada com benchmark, hardware nomeado e denominador de base instalada.
- Iteração 7 — inferência no navegador. Fetch do blog do transformers.js v4 [7] e do W3C WebNN. **Nota:** o WebNN foi consultado (Candidate Recommendation Draft de 10/09/2026, "low-level API for neural network inference hardware acceleration"), mas **não** entrou na lista de fontes numeradas porque a afirmação que eu queria sustentar com ele — que só roda atrás de *origin trial* em Chrome 147-149 — vinha de fonte secundária não verificada. Sem essa verificação, o WebNN aparece no *frontmatter* como tecnologia citada e fora do corpo do texto como evidência. Registrado aqui por honestidade de método.
- Iteração 8 — Brasil. Duas frentes: acordo Apple/CADE [15] e TIC Domicílios 2025 [16].
- Iteração 9 — o sinal fraco do enunciado. Busca direta por repositórios "Gestalt Village" [17], depois de a busca genérica não retornar nada.
- Consolidação — cruzamento das nove frentes para derivar as três disrupções-raiz, a roda de 36 nós (6 + 12 + 18), o teste adversarial e a lista de erros.

**Efeitos cortados da roda dos futuros (e por quê).**
- *"Surge um formato padrão de cena para a web, e ele não é glTF"* — cortado por ser aposta sem sinal: nenhuma das fontes consultadas indica movimento de substituição do glTF. O núcleo defensável da ideia sobreviveu, em forma mais honesta, em `e5.1.1` ("quem define o container define o ecossistema").
- *"Navegador vira alvo de pirataria de assets 3D, já que a cena está no cliente"* — cortado por redundância com um efeito que o mapa já não modelava bem e por falta de fonte; o problema é real desde o WebGL e não é consequência da disrupção.
- *"A web se torna a plataforma dominante de jogos"* — cortado por ser exatamente o tipo de afirmação genérica que o filtro da Etapa 2 manda recusar: sem mecanismo causal identificável, sem denominador e contrariada pela evidência dos motores [10][11].
- *"Fabricantes de GPU passam a otimizar drivers para WGSL"* — cortado por baixa especificidade e por não gerar consequência distinguível para quem projeta mídia até 2031.
- *"Redes sociais embutem sessões XR nativamente no feed"* — mesclado em `e4.1` (o link imersivo entrando no fluxo social), para não duplicar o mesmo mecanismo em dois nós.
- *Um sexto efeito de primeira ordem candidato, "a acessibilidade de conteúdo 3D vira exigência legal"* — cortado por falta de qualquer sinal nas fontes consultadas; a preocupação sobreviveu como aspiração declarada dentro do cenário desejável da Seção 9, onde é honesto chamá-la de desejo em vez de projeção.

**Nota final de método.** Toda afirmação factual numerada neste documento corresponde a uma página que foi efetivamente aberta e lida nesta sessão. Quatro afirmações encontradas em resultados de busca foram descartadas por não sobreviverem à checagem na fonte primária, e três delas estão registradas na Seção 8. Nenhum número de mercado, projeção de receita ou percentual de adoção sem fonte direta foi incluído.
