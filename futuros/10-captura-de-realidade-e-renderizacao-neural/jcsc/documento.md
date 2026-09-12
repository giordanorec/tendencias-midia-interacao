---
tema: Captura de realidade e renderização neural
slug: captura-de-realidade-e-renderizacao-neural
autor_login: jcsc
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 14
efeitos_ordem_3: 15
tecnologias_citadas: [3D Gaussian Splatting, NeRF, VGGT, MapAnything, Depth Anything 3, SPZ, SPZ 4, KHR_gaussian_splatting, glTF, Spark 2.0, SuperSplat, Scaniverse, Polycam, Luma AI, Move AI, Codec Avatars, SqueezeMe, Marble, Atlas, Hunyuan3D, Tripo, Houdini, Unreal Engine, Unity, Gracia AI, Apple Spatial Scenes]
fontes: 18
confianca: media
experimento: "Editor de consentimento para cena capturada: máscara de remoção e proveniência gravadas no próprio arquivo do splat"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Entre 2023 e 2026 a captura neural saiu do laboratório por três portas ao mesmo tempo, e é a terceira que ainda não foi atravessada. A primeira é algorítmica: 3D Gaussian Splatting tornou o campo de radiância renderizável em tempo real, e modelos feed-forward (VGGT, MapAnything, Depth Anything 3) tiraram a reconstrução do regime de otimização por cena e a puseram no regime de inferência — segundos, não horas. A segunda é de formato: em 2026 o splat ganhou contêiner comprimido (SPZ 4), extensão glTF em release candidate (KHR_gaussian_splatting, com Autodesk, Esri, NVIDIA, Cesium e Niantic dentro) e streaming com level-of-detail na web (Spark 2.0) — deixou de ser saída de pesquisa e virou tipo de mídia. A terceira porta, a que este mapa considera decisiva até 2031, é jurídica e social: quando a aparência de uma pessoa e o interior de um lugar passam a ser subproduto de um vídeo comum, o consentimento precisa migrar do momento da publicação para o momento da captura — e nenhuma ferramenta de captura hoje tem essa etapa. O mapa é cético quanto a prazos: a tecnologia de captura amadureceu rápido, o pipeline de produção amadureceu devagar (não há módulo first-party de splat na Unreal 5.7, e os avatares fotorrealistas da Meta ainda não rodam com relighting dinâmico em hardware de consumo), e a camada de direitos praticamente não começou.

## 2. O tema

**O que é.** Captura de realidade e renderização neural é o conjunto de técnicas que converte registro sensorial comum — foto, vídeo de celular, varredura em 360° — em representação 3D navegável, sem passar pelo pipeline clássico de modelar, texturizar e animar. O termo cobre três famílias que costumam ser confundidas: (a) reconstrução de **cena** (NeRF, 3D Gaussian Splatting, reconstrução feed-forward); (b) reconstrução de **objeto** a partir de uma ou poucas imagens; (c) reconstrução de **pessoa** — geometria, aparência e movimento (captura sem marcadores, avatares gaussianos).

**Onde encosta em mídia e interação.** Em três pontos concretos, e nenhum deles é o de "fazer 3D mais barato".

1. **A autoria muda de lugar.** No pipeline clássico, a cena existe porque alguém a construiu; cada objeto é uma decisão. Na captura, a cena existe porque alguém apontou uma câmera — e o que entra na cena inclui tudo o que estava lá, inclusive o que ninguém decidiu incluir. Isso desloca o trabalho criativo de *construção* para *enquadramento, limpeza e remoção*, que é uma gramática diferente e ainda não formada.
2. **O registro deixa de ser retangular.** Uma foto tem borda; uma cena capturada tem *fora de campo* percorrível. O espectador escolhe o ponto de vista, o que significa que a direção de câmera deixa de ser o único ato de interpretação sobre o material.
3. **O material bruto passa a conter terceiros.** Um vídeo de celular numa rua já continha pessoas; a diferença é que a cena reconstruída permite orbitar, aproximar, isolar e reusar aquelas pessoas como ativos. A captura vira, tecnicamente, extração.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque o estado da arte técnico já se estabilizou o bastante para ser descrito num parágrafo — 3DGS venceu, o feed-forward venceu, o formato está sendo padronizado — e o que permanece genuinamente indeterminado não é técnico. É quem pode capturar o quê, quem responde pelo que a captura contém, e o que acontece com os ofícios que existiam porque o 3D era caro. Um levantamento de estado da arte responde "o que já funciona". Aqui a pergunta que importa é "o que acontece com a mídia quando funcionar em todo lugar", e essa é uma pergunta de segunda e terceira ordem.

**Respostas da entrevista (Etapa 1 da skill), registradas conforme a regra.** Horizonte 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o Brasil. Descarte explícito: apenas a régua da disciplina (o que já é comum em produto de massa não entra); nenhuma outra exclusão. Viés: neutro. Nenhuma pergunta ficou sem resposta — não houve "tanto faz". O condutor declarou ainda o que o faria mudar de ideia: evidência de que a adoção passou da maioria inicial (Rogers) ou de que a tecnologia só melhora o que existe sem romper nada. A entrevista literal está transcrita na seção 12.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**A base algorítmica está resolvida e é pública.** O 3D Gaussian Splatting de Kerbl, Kopanas, Leimkühler e Drettakis (SIGGRAPH 2023, Inria/MPI) entrega renderização em tempo real de campos de radiância a **≥100 fps em 1080p**, com qualidade de estado da arte — o que os métodos volumétricos anteriores não faziam para cenas completas e não limitadas. É a razão técnica de tudo o que veio depois: NeRF provou que dava, 3DGS fez caber num orçamento de frame.

**A reconstrução saiu da otimização e entrou na inferência.** O VGGT (Best Paper da CVPR 2025) é uma rede feed-forward que, de uma única imagem ou de centenas, devolve parâmetros de câmera, mapas de profundidade, mapas de pontos e rastreamento 3D **em menos de um segundo**. O MapAnything (Meta/FAIR, apresentado no 3DV 2026, código sob licença Apache) generaliza isso: um único modelo cobre structure-from-motion não calibrado, stereo multi-view, profundidade monocular métrica, localização de câmera e completamento de profundidade, aceitando opcionalmente intrínsecos, poses e profundidade como entrada extra. O Depth Anything 3 (ByteDance Seed, ICLR 2026) usa um transformer simples com alvo único de predição depth-ray e relata **+44,3% em precisão de pose de câmera e +25,1% em precisão geométrica sobre o VGGT**, treinado apenas em bases acadêmicas públicas.

**O splat virou formato, não só saída de pesquisa.** A Niantic abriu o SPZ sob licença MIT — cerca de 10× menor que o PLY equivalente, sem perda perceptível. Em **5 de maio de 2026** saiu o SPZ 4: seis fluxos ZSTD paralelos (um por atributo) no lugar de um GZip único, cabeçalho em texto simples legível sem descompactar, e um sistema de extensões que permite acrescentar atributos sem quebrar compatibilidade. Os números do anúncio: codificação 3× mais rápida (3min26s → 1min08s num teste de 34 milhões de pontos), carregamento 1,5× a 2,1× mais rápido. O anúncio afirma que a Adobe integrou o SPZ (Photoshop, Babylon.js) e que usuários geraram cerca de 800 mil arquivos SPZ em dois meses — número de fornecedor, sem verificação independente.

**E ganhou padrão de troca.** Em **3 de fevereiro de 2026** o Khronos Group anunciou a extensão `KHR_gaussian_splatting` para glTF 2.0, padronizando posição, orientação, escala, cor e opacidade dos splats, permitindo que convivam com malha, terreno e dados fotogramétricos no mesmo arquivo, com degradação graciosa para nuvem de pontos em visualizadores incompatíveis. Estava em **release candidate**, com ratificação prevista para o segundo trimestre de 2026. Participam Autodesk, Cesium/Bentley Systems, Esri, Huawei, Niantic Spatial, NVIDIA e XGRIDS.

**E ganhou distribuição.** O Spark 2.0 da World Labs (**14 de abril de 2026**) resolve o problema de servir 3DGS na web: level-of-detail, streaming progressivo coarse-to-fine e memória virtual de GPU com pool fixo de 16M splats. Números: orçamento de 500 mil a 2,5 milhões de splats renderizados conforme o dispositivo, chunks de 64 mil splats, cenas de exemplo entre 6 e 106 milhões de splats, e um formato `.RAD` que põe 10 milhões de splats com harmônicos esféricos até ordem 3 em 200–250 MB, contra 2,3 GB no PLY. O problema declarado é exatamente o que trava adoção: cenas grandes exigiam 100 MB a mais de 1 GB antes de mostrar o primeiro pixel, e PLY e SPZ não permitiam streaming progressivo.

**A cena dinâmica começou a caber na banda de vídeo.** A reportagem da heise de **5 de abril de 2026** descreve o obstáculo vencido como o streaming de splats gaussianos *dinâmicos* para celular e headset, sem computação local pesada: a Gracia AI transmite entre 17 Mbit/s (15 mil splats por quadro, cena de pouco movimento — comparável a um 4K tradicional) e 80 Mbit/s (120 mil splats por quadro), com taxa de dados mais de dez vezes menor que a versão baixada e qualidade visual similar; a técnica descrita transmite keyframes e dados de movimento da representação 3D em vez de imagens prontas. A startup chinesa 4DV demonstrou abordagem semelhante em 2025.

**As ferramentas de edição são gratuitas e rodam no navegador.** O SuperSplat, da PlayCanvas, é editor de splats sob licença MIT que roda inteiramente no navegador — nada sobe para servidor até a publicação. Serve para limpar captura bruta, cortar *floaters*, recortar cena, retocar cor, montar animação de câmera e publicar. Tem cerca de 10 mil estrelas e 1,1 mil forks no GitHub.

**A captura de consumo processa no aparelho.** O Scaniverse (Niantic) processa localmente, sem upload, a maioria das capturas em menos de 90 segundos, é gratuito e ilimitado, e exporta SPZ e USDZ. É a porta de entrada mais baixa que existe hoje.

**As engines aguentam.** Levantamento de 11 de setembro de 2026: Houdini tem suporte **nativo** a partir da versão 21, expandido na 22; Blender tem quatro plugins de terceiros em estado estabelecido; Unreal tem dez opções de terceiros (gratuitas e pagas) num ecossistema descrito como robusto; Unity tem cinco, em desenvolvimento; Godot tem duas, nascente; e o Spark.js (World Labs, sobre Three.js) cobre a web nativamente.

**Pessoas: metade do caminho.** A Move AI faz captura de movimento sem marcador desde 2019 e lista Ubisoft, SEGA, Warner Music Group, Paramount, Nike, Sony, Meta, Disney e Unreal Engine entre clientes, com a promessa explícita de qualidade comparável à óptica sem roupa nem marcador. Do lado da aparência, a Meta demonstrou com o SqueezeMe **três avatares gaussianos de corpo inteiro a 72 FPS num Quest 3**, com perda de qualidade quase nula em relação ao PC.

### 3.2 O que existe e não funciona

**A captura de pessoa ainda depende de estúdio, e o que sai dela é iluminação congelada.** O próprio SqueezeMe, apesar de rodar no headset, foi alimentado pelo sistema tradicional de mais de cem câmeras e centenas de luzes, e os avatares resultantes têm iluminação fixa: não suportam *relighting* dinâmico, que é justamente o recurso que faz um avatar parecer estar na sala em que está. Some-se a isso que nem o Quest 3 nem o Quest 3S têm rastreamento facial ou ocular — sem isso, o avatar fotorrealista não tem o que reproduzir em tempo real.

**A cena dinâmica a partir de uma câmera só é um problema mal posto.** Reconstruir 4D (3D ao longo do tempo) de vídeo monocular é matematicamente subdeterminado: a literatura de 2026 (4D3R, Ground4D, PanoGaussian) continua atacando o problema com priors arquiteturais, e nenhum resolve o caso geral. Cena estática de sensor comum está resolvida; cena com gente se mexendo, não.

**Não há módulo first-party de splat nas duas maiores engines de jogo.** Em 2026 a entrada na Unreal 5.7 é por plugin de terceiro — não há módulo da Epic. Em Unity, a solução mais usada é comunitária. Isso significa que nenhum estúdio grande pode assumir splat como dependência de pipeline sem herdar risco de manutenção.

**A geometria métrica confiável não acompanhou a aparência.** O Luma AI produz a melhor visualização de consumo e geometria implícita que não serve para medir; o Polycam se posiciona como grau de medição via LiDAR. A separação é sintomática: reconstrução bonita e reconstrução aferível ainda são produtos diferentes.

**A camada de direitos está vazia.** Nenhuma das ferramentas de captura citadas acima tem uma etapa de consentimento, de anonimização ou de proveniência. O SuperSplat permite apagar o que você vê; não existe nada que registre o que foi apagado, nem por quê, nem que o sujeito da cena pediu.

### 3.3 Quem está construindo

| Ator | O que sustenta | Tipo |
|---|---|---|
| Inria / MPI (Kerbl et al.) | 3DGS, a base do campo | pesquisa acadêmica |
| Meta / FAIR | MapAnything (Apache), Codec Avatars, SqueezeMe | pesquisa + plataforma |
| ByteDance Seed | Depth Anything 3 | pesquisa aberta |
| Oxford VGG | VGGT | pesquisa acadêmica |
| Niantic Spatial | Scaniverse, SPZ/SPZ 4, Niantic Studio | formato + captura de consumo |
| Khronos Group | `KHR_gaussian_splatting` | padronização |
| PlayCanvas | SuperSplat | ferramenta aberta |
| World Labs | Marble, Atlas, Spark 2.0 | geração + distribuição web |
| Move AI | captura de movimento sem marcador | produção |
| Polycam / Luma AI | captura de consumo e profissional | produto |
| Gracia AI, 4DV | streaming volumétrico | infraestrutura |
| Adobe, Autodesk, Esri, NVIDIA, Cesium | adoção do formato | incumbentes |

### 3.4 Nota sobre o Brasil

Não encontrei, nas buscas feitas, nenhum projeto brasileiro de captura neural (NeRF ou Gaussian Splatting) documentado publicamente em 2026 — o que é um achado, não uma ausência de busca. O que existe no país é uma tradição de **digitalização 3D por fotogrametria e laser scanning aplicada a patrimônio**, com pelo menos quatro grupos com mais de duas décadas de trabalho: o LCAD da UFBA, o LdSM da UFRGS (desde 2002), FAU-USP e Museu Paulista em colaboração com o DIAPReM de Ferrara, e a Unicamp. Monumentos documentados incluem a Igreja de Monte Santo (BA), o Museu do Ipiranga, as fachadas da FAU-USP e o Monumento ao Laçador em Porto Alegre. É exatamente o acervo de técnica madura, cara e escassa que a captura neural de sensor comum torna barata — e é uma comunidade que já tem a competência de documentação, o que reduz o tempo de adoção se o custo cair.

Do lado jurídico, o Brasil chega neste tema com uma posição mais restritiva que a norte-americana, e pouca gente no campo técnico percebeu isso. A LGPD trata imagem como dado pessoal, e a leitura de especialistas como Bruno Bioni é que capturar imagens de pessoas identificáveis em espaço público e explorá-las comercialmente sem base legal viola a lei — e que **esperar o titular pedir a remoção já é descumprimento**, porque a obrigação de política clara de armazenamento e descarte é prévia. Aplicado a captura espacial: um splat de uma rua brasileira com pessoas identificáveis dentro é, nessa leitura, tratamento de dado pessoal desde o instante do upload, independentemente de haver ou não pedido de remoção.

## 4. As disrupções-raiz

### Critério de recusa aplicado (Etapa 2 da skill)

> Recuse — trate como "presente", não "futuro" — qualquer tecnologia ou prática que já seja padrão de mercado consolidado: amplamente adotada pelos players líderes do setor E sem debate técnico real e atual sobre sua substituição no horizonte considerado.

À régua da disciplina soma-se o descarte declarado na entrevista: **o que já é comum em produto de massa não entra**.

**Descartados por maturidade:**

- **Fotogrametria clássica (COLMAP, RealityCapture), laser scanning terrestre e mocap óptico com marcadores.** Consolidados há mais de uma década; caros e escassos, mas sem debate sobre *substituição técnica* — o debate é de custo. A própria disciplina já os coloca do lado de fora.
- **Profundidade e paralaxe a partir de imagem única em produto de massa.** Este é o descarte que mais dói, porque é o mais próximo do tema. A Apple anunciou em **9 de junho de 2025** as *spatial scenes*, geradas por "um novo algoritmo de IA generativa e profundidade computacional", disponíveis no app Fotos, no Spatial Gallery e no Safari, com API pública para desenvolvedores — e no iOS 26 a função converte fotos 2D comuns em cena 3D em qualquer iPhone a partir do 12, inclusive como papel de parede da tela de bloqueio. Reconstruir profundidade de uma imagem só **já é produto de massa**. Sai do mapa pela régua da disciplina.
- **3D Gaussian Splatting como algoritmo de renderização.** Foi cogitado como disrupção-raiz e reclassificado durante a Etapa 2 (ver seção 8): em 2026 o 3DGS é o padrão de fato do campo, com suporte nativo em Houdini, dez integrações de Unreal, ecossistema estabelecido em Blender e padronização em curso no Khronos. Não há debate real sobre substituí-lo no horizonte de 2031 — há debate sobre *estendê-lo* (beta splatting, kernels com especularidade, 4D). É a base sobre a qual as disrupções deste mapa se apoiam, não uma delas.
- **Visualização de 3D e AR no navegador** (`model-viewer` e congêneres). Consolidada, e além disso é o tema 15 da disciplina.

**Descartado por escopo, não por maturidade:**

- **Geração de objeto 3D a partir de texto ou imagem** (Hunyuan3D 2.1, aberto desde junho de 2025 e anunciado como *production-ready* com síntese de textura PBR; Tripo; TRELLIS). É emergente e tem debate real — mas é **geração**, não captura. A fronteira deste tema, como a disciplina a define, é transformar realidade em ativo 3D. Fica registrado porque volta como sinal fraco na seção 6: geração e captura estão convergindo para o *mesmo formato de saída*, e isso apaga a distinção na camada do arquivo.

---

### Disrupção-raiz 1 — A reconstrução 3D vira uma inferência de rede, não uma otimização por cena

**O que rompe.** Até 2024, obter geometria de uma cena era um *processo*: detectar features, casar pares, rodar structure-from-motion, calibrar, otimizar por minutos ou horas *aquela cena específica*. VGGT, MapAnything e Depth Anything 3 substituem o processo por um passe de rede — segundos, sem calibração, sem pose conhecida, com número arbitrário de vistas. O que rompe não é a qualidade; é a **estrutura de custo**. Reconstruir deixa de ser uma etapa de produção com fila, orçamento e especialista, e passa a ser uma chamada de função. Quando o custo marginal de uma operação cai a quase zero, a operação para de ser um projeto e vira um reflexo — e o que muda não é quem a faz melhor, é quantas vezes por dia ela é feita, e sobre o quê.

**Por que agora e não há cinco anos.** Em 2020 o NeRF provou que a representação implícita funcionava, mas exigia otimização por cena e não renderizava em tempo real. Em 2023 o 3DGS resolveu o tempo real, mas manteve a otimização por cena e ainda dependia de SfM prévio para inicializar. O que fechou o ciclo foi treinar transformers de geometria em escala, com alvo de predição unificado: o VGGT ganhou o Best Paper da CVPR em 2025, o MapAnything foi ao 3DV em 2026, o DA3 ao ICLR 2026. São dezoito meses. A condição de possibilidade foi a mesma dos modelos de linguagem — arquitetura genérica, dados em escala, alvo simples — aplicada à geometria.

**O que ainda falta.** Três coisas. (a) **Escala métrica auditável**: o MapAnything promete métrica, mas nenhum dos trabalhos publica erro em ambiente aberto num protocolo que um perito aceitaria. (b) **Latência em dispositivo**: "menos de um segundo" é numa GPU de datacenter. (c) **Comportamento com distratores e movimento** — a própria literatura de 2026 trata "VGGT no mundo real, livre de distratores" como problema aberto.

---

### Disrupção-raiz 2 — O splat deixa de ser saída de pesquisa e vira formato de mídia interoperável

**O que rompe.** Um tipo de mídia só existe socialmente quando tem contêiner, codec, padrão de troca e forma de distribuir. O JPEG não mudou a fotografia por ser bonito; mudou por caber num disquete e abrir em qualquer programa. Em 2026 o splat atravessou essa linha em quatro frentes simultâneas: contêiner comprimido com extensibilidade (SPZ 4), padrão de troca em corpo de padronização neutro com os incumbentes dentro (`KHR_gaussian_splatting`, release candidate em fevereiro de 2026), distribuição progressiva na web (Spark 2.0, abril de 2026) e streaming dinâmico dentro de banda de vídeo (Gracia AI, 17–80 Mbit/s). O que rompe é que **cena capturada passa a ser um ativo**: publicável, versionável, licenciável, arquivável, indexável — e, por consequência, disputável. Enquanto era um PLY de 2,3 GB que só abria no visualizador do autor, a questão "de quem é essa cena" não tinha onde se materializar.

**Por que agora e não há cinco anos.** Porque até 2024 não havia o que padronizar: NeRF era um conjunto de pesos, não um dado transportável. O 3DGS produziu, pela primeira vez, uma representação *explícita* (primitivas com posição, escala, orientação, cor, opacidade) — e representação explícita é o que um formato consegue descrever. O SPZ mostrou que dava para comprimir 10×; o glTF deu onde encaixar; o Spark deu como servir. A sequência tem lógica e levou dois anos e meio.

**O que ainda falta.** A ratificação da extensão glTF (prevista para o segundo trimestre de 2026, não confirmada nas fontes que abri); um codec de splat dinâmico padronizado — o MPEG estuda, não entregou; e a ausência mais importante para este mapa: **nenhum dos formatos carrega metadado de proveniência ou consentimento**. O sistema de extensões do SPZ 4 e o mecanismo de `extras` do glTF tornam isso tecnicamente trivial. Ninguém fez.

---

### Disrupção-raiz 3 — Aparência e movimento de pessoas passam a ser extraíveis de sensor comum

**O que rompe.** As duas disrupções anteriores tratam de lugares e objetos. Esta trata de gente, e é a única em que a barreira que resta não é técnica. Captura de movimento sem marcador já é produção (Move AI, com clientes de primeira linha); geração de avatar fotorrealista a partir de varredura por iPhone com sensor de profundidade frontal já é resultado de pesquisa demonstrado pela Meta; e avatar gaussiano de corpo inteiro já roda em headset de consumo (SqueezeMe, três a 72 FPS no Quest 3). O que rompe é que **a aparência de uma pessoa deixa de ser um registro e passa a ser um ativo operável** — remontável, reanimável, recombinável — obtido de material que foi capturado para outra coisa. O direito de imagem foi construído para regular a *publicação* de um registro. Aqui o registro é insumo, e o produto é uma réplica que pode fazer o que a pessoa nunca fez.

**Por que agora e não há cinco anos.** Porque três curvas se cruzaram: a representação gaussiana deu avatar fotorrealista renderizável em orçamento de headset; a captura sem marcador atingiu qualidade comparável à óptica; e o direito começou a se mover — o NO FAKES Act (*Nurture Originals, Foster Art, and Keep Entertainment Safe Act of 2026*) foi aprovado por unanimidade no Comitê Judiciário do Senado dos EUA em **18 de junho de 2026**, criando um direito de propriedade sobre voz e aparência visual que vale para celebridade e para cidadão comum, com exceções para notícia, paródia, crítica, bibliotecas e pesquisa não comercial. Que uma lei federal específica para réplica digital tenha saído de comitê por unanimidade é o sinal de que a captura de pessoas deixou de ser assunto de laboratório.

**O que ainda falta.** *Relighting* dinâmico — sem ele, o avatar carrega a iluminação do estúdio para dentro da sala do interlocutor, e a incongruência é imediata. Hardware de consumo com rastreamento facial e ocular — nem Quest 3 nem 3S têm, e não há sinal de lançamento iminente. Captura 4D robusta de câmera única — problema mal posto, sem solução geral. E base legal fora dos EUA: no Brasil a LGPD já alcança o caso por via de dado pessoal, mas não há literatura nem decisão que trate especificamente de reconstrução volumétrica.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A reconstrução 3D vira uma inferência de rede, não uma otimização por cena
    efeitos:
      - id: e1
        ordem: 1
        efeito: Capturar uma cena em 3D deixa de ter custo de processamento perceptível e vira um gesto de captura, como fotografar
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Aplicativos de captura passam a mostrar a cena reconstruída durante a filmagem, e capturar vira um ato dirigido com enquadramento
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Forma-se uma gramática de captura espacial, com convenções sobre o que se mostra e o que se deixa fora do volume
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O acervo de vídeo já existente vira estoque de cenas reconstruíveis retroativamente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Arquivos audiovisuais passam a ser tratados como bases espaciais, e a política de acesso a arquivo passa a regular reconstrução, não só cópia
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A etapa de pré-processamento geométrico deixa de ser gargalo de produção e de ser uma especialidade contratável
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Ferramentas de fotogrametria profissional se reposicionam como camadas de medição e certificação, não de reconstrução
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A disputa de valor no setor migra de quem reconstrói melhor para quem responde pela exatidão do que reconstruiu
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Drones, headsets e robôs passam a reconstruir o ambiente em tempo real a partir de câmera comum, sem sensor dedicado
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O diferencial competitivo migra do sensor para o modelo e para os dados de treino
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Fabricantes de sensor de profundidade perdem posição para quem detém modelo e base de treino
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Espaços privados passam a ser reconstruídos incidentalmente por dispositivos que estavam ali para outra finalidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Reconstrução espacial passa a ser declarada como tratamento de dados em si, separada da captação de imagem
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: O splat deixa de ser saída de pesquisa e vira formato de mídia interoperável
    efeitos:
      - id: e4
        ordem: 1
        efeito: Cena capturada vira arquivo que se publica, versiona, licencia e arquiva como qualquer outro ativo digital
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Surgem catálogos de lugares capturados, licenciados por uso e não por cópia
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O lugar físico passa a ter um valor de licença destacado do seu valor imobiliário
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Plataformas de mídia social passam a aceitar cena navegável como item nativo de feed
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A prova de presença muda de foto para cena percorrível, e verificar autenticidade fica mais difícil, não mais fácil
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Streaming de cena dinâmica passa a caber na banda de um vídeo comum
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Transmissão ao vivo com ponto de vista livre aparece em nichos de alto valor antes de virar produto de massa
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A direção de câmera deixa de ser autoria única e vira uma entre várias leituras possíveis da mesma captura
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Motores de jogo e ferramentas 3D passam a tratar splat e malha no mesmo grafo de cena
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Produções passam a misturar cenário capturado e objeto modelado por decisão de custo, não de estilo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O fotorrealismo deixa de sinalizar orçamento, e a decisão estética passa a ser justificar por que não usar o real
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e6.1.2
                ordem: 3
                efeito: O ofício de artista 3D se reorganiza em torno de limpeza, direção e curadoria de captura, e modelar do zero vira escolha de estilo
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: Aparência e movimento de pessoas passam a ser extraíveis de sensor comum
    efeitos:
      - id: e7
        ordem: 1
        efeito: Movimento e aparência de uma pessoa passam a ser extraíveis de vídeo comum, sem estúdio nem marcador
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Produção de animação e de avatar perde a barreira de entrada de estúdio e migra para equipes pequenas e criadores individuais
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A formação em animação se reorganiza em torno de direção de performance em vez de execução de quadro-chave
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Corpo e rosto de terceiros passam a aparecer, recuperáveis, em capturas feitas para outra finalidade
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: O consentimento passa a ser exigido no momento da captura, e ferramentas sem essa etapa saem do uso institucional
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A réplica digital de pessoa ganha estatuto jurídico próprio, distinto do direito de imagem fotográfico
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Contratos de audiovisual passam a discriminar captura, uso, escopo e prazo da réplica separadamente do cachê
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Forma-se um mercado de licenciamento de aparência com preço e prazo, e um mercado paralelo de réplicas não licenciadas
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Avatares fotorrealistas rodam em hardware de consumo, mas presos à iluminação do momento da captura
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Telepresença fotorrealista aparece primeiro em contexto corporativo fechado, onde a iluminação é controlada
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O vale da estranheza migra da geometria para a iluminação e vira problema de fotografia, não de modelagem
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: A distinção entre videoconferência e ambiente tridimensional deixa de ser perceptível para quem usa
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Estar em chamada descola-se da tela, e a etiqueta de reunião passa a incluir o espaço em volta
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A cadeia continua depois do terceiro nível, e o corte é de formato, não de método.** O critério de parada em três níveis é uma decisão de engenharia desta skill, não uma propriedade da Futures Wheel — Glenn deixava a profundidade a cargo de quem conduz. Pelo menos três cadeias claramente seguiriam: `e4.1.1` (valor de licença do lugar) desembocaria em tributação e em disputa de zoneamento sobre "fachada capturável"; `e6.1.2` (reorganização do ofício) desembocaria em renegociação sindical sobre o que conta como trabalho criativo quando a captura substitui a execução; `e8.1.1` (mercado de aparência) desembocaria numa economia de herança de réplica — quem controla a aparência de alguém depois da morte, e por quanto tempo. Nenhuma dessas entra no YAML.

**Três efeitos são o mesmo efeito visto de três ângulos, e isso é informação.** `e3.2` (reconstrução incidental de espaço privado), `e7.2` (terceiros dentro da captura) e `e4.2.1` (autenticidade de cena percorrível) convergem para um único ponto: **a captura neural transforma o fundo em conteúdo**. No vídeo, o fundo é ruído; na cena reconstruída, o fundo é geometria recuperável com o mesmo estatuto do primeiro plano. Que três ramos partindo de disrupções diferentes cheguem no mesmo lugar é o achado mais forte deste mapa, e o YAML, por ser árvore, não consegue representar convergência.

**Os prazos não são previsões.** São ordenações relativas. A Futures Wheel não estima probabilidade nem data com rigor — é imaginação estruturada, não modelo preditivo. Leia `prazo: 2028` como "antes de `prazo: 2030`", não como uma aposta sobre o ano.

**Nenhum prazo ultrapassa o horizonte de 2031 da entrevista, e isso foi imposto de propósito.** Três efeitos de terceira ordem (`e1.1.1`, `e8.1.1`, `e9.2.1`) provavelmente só se consolidam *depois* de 2031; estão marcados com 2031 e sinal fraco porque o horizonte da entrevista é um limite, não uma referência. Dito em prosa, como manda a correção registrada no `DUVIDAS.md` desta skill: **esses três efeitos começam a aparecer em 2031 e amadurecem fora da janela deste mapa.**

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. O SPZ 4 tem cabeçalho em texto simples e sistema de extensões.** Parece nota técnica de release; é a pré-condição de tudo o que a seção 7 deste mapa cobra. Um contêiner que permite acrescentar atributos sem quebrar compatibilidade, com cabeçalho legível sem descompactar, é exatamente onde caberia um campo de proveniência, de consentimento ou de máscara de remoção. O `extras` do glTF oferece o mesmo. A capacidade existe e ninguém usou — o que significa que a primeira ferramenta que usar define o padrão de fato.

**2. Reconstrução como programa, não como dado.** O `img2threejs`, trazido pela varredura da turma, reconstrói o objeto de uma imagem de referência como **modelo Three.js procedural — só código**. Não abri o repositório (registro isso na seção 11), mas a ideia importa independentemente da implementação: se a saída da reconstrução é código e não nuvem de primitivas, ela é editável, versionável em git, diferenciável linha a linha e auditável. Uma cena que se lê como programa tem propriedades que um splat de 40 milhões de gaussianas não tem — e liga diretamente com o tema 14.

**3. Houdini tem suporte nativo, Unreal e Unity não.** Que o primeiro DCC grande a tratar splat como tipo de dado nativo (Houdini 21, expandido na 22) seja o do mercado de efeitos, e não o das engines de jogo, sugere que a adoção inicial vem de produção linear — onde a cena capturada é *cenário* — e não de interatividade, onde ela precisaria de colisão, iluminação dinâmica e edição em tempo de execução. Se essa leitura estiver certa, `e6` chega mais tarde do que o mapa diz.

**4. Geração e captura convergem no mesmo arquivo.** A World Labs entrega com o Marble mundos navegáveis gerados de texto, imagem, panorama ou vídeo, e com o Atlas (anunciado em 1º de setembro de 2026, segundo resultado de busca que não abri) mundos que saem como nuvem de pontos ou splats gaussianos. O mesmo renderizador — Spark — serve o que foi capturado e o que foi inventado. **Na camada do arquivo, não há diferença entre um lugar que existe e um lugar que nunca existiu.** Se o formato não carrega proveniência, ninguém a recupera depois.

**5. O precedente Nefertiti já existe e aponta para o lado oposto do que os acervos queriam.** No caso do Neues Museum contra Cosmo Wenman, a decisão foi que a instituição não detinha direito autoral válido sobre a varredura de uma obra em domínio público desde 1345 a.C. Sob a leitura europeia, obra pública não se protege por copyright do scan. Aplicado a captura neural barata: acervo público capturável é acervo público capturado, e o controle institucional sobre a circulação da cópia é frágil.

**6. O 3DGS está entrando na perícia forense.** Há literatura de 2025–2026 medindo acurácia de reconstrução de cena de crime por Gaussian Splatting e otimizando protocolo de filmagem (modo paisagem, velocidade lenta, ao menos três camadas, foco em objetos-chave). Não consegui extrair os números do artigo, mas a existência do protocolo importa: quando um campo profissional escreve *como filmar* para que a reconstrução seja admissível, a técnica deixou de ser demonstração.

### Wildcards

**A — Uma decisão judicial de repercussão declara que o splat de uma pessoa é réplica digital.** Baixa probabilidade até 2031, impacto máximo. Se um tribunal enquadrar a cena capturada com pessoas identificáveis dentro como réplica digital sob o NO FAKES Act (ou, no Brasil, como tratamento de dado pessoal sem base legal sob a LGPD), a captura ambiental de espaço público com gente passa a exigir consentimento prévio. Isso inverte o mapa: `e3.2`, `e4.2` e `e7.2` viram infrações em vez de tendências, e a captura migra para ambientes fechados e controlados — o oposto da promessa de "qualquer um captura qualquer lugar".

**B — Um fabricante de celular embute captura de splat no app de câmera padrão.** Probabilidade média, e é o wildcard que **mata este mapa pela régua da disciplina**. A Apple já colocou profundidade generativa de imagem única em todo iPhone a partir do 12; o Scaniverse já processa no aparelho em menos de 90 segundos. Falta um passo. No dia em que o botão de captura 3D estiver ao lado do botão de foto, o tema atravessa a linha do "comum em produto de massa" e sai do escopo desta disciplina como emergente — e o assunto inteiro se desloca para a camada de direitos, que é onde este mapa já apostou que ele estava indo.

**C — Vazamento de um acervo de capturas de interiores residenciais.** Baixa probabilidade, impacto alto. Aspiradores robôs, headsets e câmeras domésticas já reconstroem ambiente; o efeito `e3.2` supõe que isso se torne rotina. Um vazamento em escala de reconstruções de interiores de casas — não fotos, *cenas percorríveis* — produziria a reação regulatória mais rápida que o campo já viu, e provavelmente por caminho diferente do esperado: não por lei de imagem, mas por segurança patrimonial e doméstica.

**D — Uma decisão reconhece direito autoral sobre a varredura.** É o inverso do wildcard A e do precedente Nefertiti. Se um tribunal de peso reconhecer que a varredura de um objeto em domínio público gera obra derivada protegível, acervos e proprietários travam a circulação das cópias, e a promessa de "o mundo inteiro capturado e navegável" vira "o mundo inteiro capturado e licenciado por quem chegou primeiro". Baixa probabilidade dado o precedente europeu; impacto estrutural sobre a terceira ordem inteira da disrupção 2.

**E — O relighting dinâmico é resolvido em hardware de consumo antes de 2029.** Probabilidade média-baixa. É o único wildcard *positivo* do conjunto: destrava `e9` e `e9.1` de uma vez, e transforma telepresença fotorrealista de nicho corporativo em produto. O sinal precoce seria o anúncio de um headset de consumo com rastreamento facial e ocular — hoje ausente da linha Quest.

## 7. Contra o próprio mapa

Esta seção registra a Etapa 4 da skill. Cada rebaixamento traz o valor **original** antes da autocrítica, para que a revisão seja auditável e não apenas afirmada.

### Rebaixamentos aplicados

| Efeito | Era | Ficou | Por quê |
|---|---|---|---|
| `e2` | `confianca: alta`, `prazo: 2028` | `confianca: media`, `prazo: 2029` | Assume que SfM some do pipeline. Mas o COLMAP continua sendo *baseline de avaliação* nos próprios papers de feed-forward — inclusive nos que dizem substituí-lo. Enquanto for o padrão contra o qual se mede, ele não sai do pipeline; sai da linha de produção rápida e fica na de verificação. Força contrária ignorada na primeira versão: exatidão métrica auditável, que nenhum feed-forward publicou em protocolo aceitável. |
| `e3` | `confianca: alta`, `prazo: 2029` | `confianca: media`, `prazo: 2030` | Assume que modelo substitui sensor. Ignorava duas forças: consumo de energia e latência em dispositivo (os "menos de um segundo" do VGGT são em GPU de datacenter), e o fato de que LiDAR já está embarcado e amortizado em linhas de produto inteiras. Substituição de sensor por modelo tem precedente (fotografia computacional), mas levou mais de uma década. |
| `e6` | `confianca: alta`, `prazo: 2028` | `confianca: media`, `prazo: 2029` | Extrapolação otimista contradita por fonte lida: em 2026 **não há módulo first-party da Epic** para splats na Unreal 5.7, e a solução Unity mais usada é comunitária. Estúdio grande não assume dependência de pipeline mantida por terceiro. O suporte nativo existe onde a cena é cenário (Houdini), não onde é jogável. |
| `e5.1` | `confianca: media`, `prazo: 2030` | `confianca: baixa`, `prazo: 2031` | Assume taxa de adoção sem precedente observável. Transmissão com ponto de vista livre já foi prometida por vídeo volumétrico, por 360° e por VR esportiva — três ciclos, três fracassos de adoção. A banda melhorou; a evidência de demanda, não. |
| `e9.2` | `confianca: media`, `prazo: 2030` | `confianca: baixa`, `prazo: 2031` | Ignorava a força contrária mais banal: a videochamada retangular funciona, é barata e todo mundo sabe usar. Inércia de interface é a força mais subestimada em mapas de futuro de mídia. |

### Qual efeito é só extrapolação linear do presente

**`e1` e `e4`.** `e1` (capturar vira gesto) é a continuação direta da curva que vai de 20–45 minutos de otimização (3DGS, 2023) para menos de um segundo de inferência (VGGT, 2025) e 90 segundos no aparelho (Scaniverse, 2026). É a projeção mais confiável do mapa **e por isso mesmo a menos informativa** — não pressupõe ruptura nenhuma, só que a curva não vire. `e4` (cena vira ativo) é igualmente linear: o formato já existe, o padrão está em release candidate, a Adobe já integrou. Mantive os dois com confiança alta justamente porque são extrapolação: o valor deles no mapa é servir de piso, não de aposta.

### Qual efeito assume velocidade de adoção sem precedente comparável

**`e7.2.1`** — "o consentimento passa a ser exigido no momento da captura, e ferramentas sem essa etapa saem do uso institucional". Não conheço caso em que uma prática de consentimento tenha sido incorporada ao ato de captura *antes* de um escândalo de repercussão. O histórico é o contrário: a proteção chega depois do dano (LGPD depois do Cambridge Analytica, DEFIANCE Act depois dos deepfakes íntimos). Estimar 2031 para uma mudança que historicamente só acontece reativamente é otimismo, e está marcado com sinal fraco e confiança baixa por isso. O caminho realista para `e7.2.1` passa pelo wildcard A ou C.

**`e5.1`**, já rebaixado acima, pelo mesmo motivo em outro domínio.

### Qual disrupção pode simplesmente não se concretizar

**A disrupção 3, no ponto que mais importa.** A captura de *movimento* já é produção — isso não retrocede. Mas a captura de *aparência fotorrealista de pessoa a partir de sensor comum* pode travar em três barreiras simultâneas, e nenhuma é de software: relighting não resolvido, headsets de consumo sem rastreamento facial/ocular, e um regime jurídico que encareça a captura o suficiente para empurrá-la de volta ao estúdio. Se travar, os ramos `e9`, `e9.1`, `e9.2` e boa parte de `e7` caem — e o mapa perde cerca de um terço do seu volume.

**O que sobra se cair:** o mapa fica sendo sobre *lugares e objetos*, não sobre pessoas — e vira um mapa bem mais chato, porque o conflito que anima a terceira ordem inteira (quem é dono da aparência, quem responde pelo fundo) só existe quando há gente dentro da captura. Um mapa de captura neural sem pessoas é um mapa de logística de ativo 3D.

**Uma segunda hipótese de falha, mais silenciosa:** a disrupção 2 pode se concretizar *e não importar*. Se o formato padronizar mas a cena capturada continuar sendo consumida como vídeo pré-renderizado — que é como a maior parte do público consome 3D hoje — a interatividade nunca chega ao usuário final, e efeitos como `e4.2.1` e `e5.1.1` não têm onde acontecer. Padronizar formato garante circulação, não garante mudança de uso.

### Que viés entrou aqui

Três, e um deles é do processo, não do tema.

1. **Viés de fonte.** As fontes mais ricas e mais fáceis de abrir foram anúncios de quem constrói: Niantic, Khronos, World Labs, Apple, Move AI. Anúncio de fornecedor descreve capacidade, não adoção — e este mapa, apesar do esforço em separar as coisas, muito provavelmente sobrestima a velocidade da segunda disrupção porque leu quem tinha interesse em anunciá-la. O número "800 mil arquivos SPZ em dois meses" é exemplo exato: vem do próprio anunciante e não foi verificado.

2. **Viés de disponibilidade linguística e geográfica.** Todas as fontes técnicas abertas estão em inglês, e as fontes brasileiras que encontrei são de fotogrametria acadêmica, a mais recente de 2020. A afirmação "não encontrei projeto brasileiro de captura neural em 2026" é honesta sobre o que a busca devolveu, mas não é evidência de que não exista — é evidência de que não está indexado no que este levantamento alcançou. Um mapa feito em português com fontes brasileiras primárias possivelmente contaria outra história sobre a nota do Brasil.

3. **Viés de interesse do condutor.** A zona de interesse declarada é "percepção e mídia sintética", e este mapa privilegiou consistentemente a **camada de direitos e consentimento** sobre a camada técnica e a econômica. Isso não é neutro: alguém com zona de interesse em pipeline de produção teria escrito um mapa em que a disrupção 3 é sobre custo de animação, e não sobre quem é dono do rosto. A entrevista pediu viés neutro; o resultado é neutro em tom e enviesado em *seleção do que merece terceira ordem*. Vale dizer também que este mapa foi produzido sem interação humana — as respostas da entrevista foram fornecidas antecipadamente, o que remove a etapa em que o condutor discordaria de um recorte e o corrigiria. É um mapa sem atrito, e mapa sem atrito tende a ser mais coerente do que verdadeiro.

## 8. O que a máquina errou

**1. Classifiquei 3D Gaussian Splatting como disrupção-raiz e tive de reclassificar.** Na primeira passagem da Etapa 2, o 3DGS entrou como candidato óbvio — é o que todo mundo chama de ruptura do campo. Aplicado o critério da própria skill, falha: em 2026 há suporte nativo em Houdini, dez integrações de Unreal, ecossistema estabelecido em Blender, extensão glTF em padronização com Autodesk, Esri e NVIDIA dentro, e nenhum debate real sobre substituí-lo até 2031 — o debate é sobre estendê-lo. É padrão de fato, não candidato. **Como percebi:** ao tentar responder a pergunta que a seção 4 exige — "o que ela rompe?" — a resposta que saiu foi "rompeu, em 2023". Passado não é futuro. Reclassifiquei como base das três disrupções.

**2. Deixei quatro números entrarem no rascunho vindos de agregador, e tirei todos.** "Alta de 144% ano a ano na demanda por competência em IA para artistas 3D", "prêmio salarial de 56%", "35% dos estúdios usam IA para prototipagem 3D", "30% geram ativos de produção" — atribuídos a uma pesquisa da a16z sobre IA em desenvolvimento de jogos. **Como percebi:** os quatro apareceram em páginas de recrutamento e comparativos de ferramenta, nenhuma delas a fonte primária, e nenhuma com link para o relatório. Não abri a pesquisa da a16z. Os números **não entram neste documento** e a afirmação da seção 3 sobre reorganização do ofício de artista 3D foi escrita sem eles, apoiada apenas no efeito `e6.1.2`, que é projeção declarada e não dado. Registro aqui porque a tentação era grande: são exatamente o tipo de número redondo e citável que faz um mapa parecer mais sólido do que é.

**3. Três fontes que eu queria citar não abriram, e não estão citadas.** (a) O artigo "Virtual trespassing: privacy in photographic VR" (*Ethics and Information Technology*, Springer) devolveu redirecionamento 303 para autenticação — o resumo da busca descrevia exatamente o argumento que eu queria (captura fotográfica em VR permite "ver através de janelas" e percorrer espaços de modo intrusivo), e **por isso mesmo** não o citei: usar o resumo de um buscador como se fosse leitura da fonte é o erro que a regra existe para impedir. (b) A revisão de documentação 3D em prática forense (APMIS, Wiley) devolveu HTTP 403. (c) O PDF da *Frontiers in Computer Science* sobre acurácia do 3DGS em reconstrução de cena de crime baixou como binário ilegível, e por isso a seção 6 fala da existência de protocolo forense **sem citar nenhum número de erro métrico** — que era o que interessava.

**4. O anúncio do Atlas (World Labs, 1º de setembro de 2026) entrou na seção 6 sem fonte aberta.** Veio de resultado de busca, não de página lida. Está marcado no texto como tal. É informação de contexto, não sustenta nenhum efeito da roda.

**5. Não abri o `img2threejs`, que é o sinal fraco nº 2 e o mais interessante do conjunto.** A ideia de reconstrução como programa em vez de dado é usada na seção 6 com a ressalva explícita de que não verifiquei a implementação. Deveria ter aberto o repositório; não abri, e a seção 11 registra a ausência.

**6. Uma confusão conceitual que quase passou:** tratei "spatial scenes" da Apple e "spatial photos" como a mesma coisa no primeiro rascunho. São diferentes — a *spatial photo* é capturada com profundidade real e otimizada para o Vision Pro; a *spatial scene* é gerada por algoritmo generativo a partir de foto 2D comum e funciona em tela plana, inclusive em iPhone 12. A distinção importa exatamente para o descarte por maturidade da seção 4: é a **geração** de profundidade a partir de imagem única que já é produto de massa, não a captura.

## 9. Três cenários para 2031

**Provável.** Capturar um lugar em 3D é uma função do app de câmera de pelo menos um fabricante grande, e a cena resultante abre em qualquer navegador porque `KHR_gaussian_splatting` foi ratificado em 2026 e virou o caminho padrão. Imobiliárias, seguradoras, peritos e museus capturam por rotina; a fotogrametria profissional sobreviveu deslocando-se para onde precisa carimbo — medição aferível e laudo. Produção audiovisual mistura cenário capturado e objeto modelado sem que ninguém discuta, e o cargo de "artista de ambiente" virou majoritariamente limpeza, direção e curadoria de captura, com a modelagem do zero preservada como escolha de estilo em produções que querem parecer não-fotorrealistas. Do lado das pessoas, captura de movimento sem marcador é o padrão de estúdio pequeno; avatar fotorrealista continua preso a contexto corporativo com iluminação controlada, porque relighting e headset com rastreamento facial não chegaram ao consumo. E o consentimento não migrou para o momento da captura: continua sendo tratado na publicação, com remoção mediante pedido — o que significa que a maior parte do que foi capturado com terceiros dentro nunca foi revista por ninguém. Não houve escândalo grande o suficiente; houve muitos pequenos.

**Desejável.** O mesmo cenário técnico, com uma diferença que custou pouco e mudou tudo: o metadado de proveniência e consentimento entrou no formato antes de a prática se consolidar. O sistema de extensões do SPZ 4 e o `extras` do glTF foram usados para carregar, dentro do próprio arquivo, quem capturou, quando, com que base legal, o que foi removido e a pedido de quem. Ferramenta de captura de consumo passou a ter, entre a captura e a publicação, uma etapa de revisão que detecta e oferece remover pessoas e interiores — e a etapa ficou barata porque a mesma rede que reconstrói também segmenta. Para chegar aqui, três coisas teriam de ter acontecido até 2028: o Khronos aceitar um campo de proveniência na ratificação; **um** fabricante de app de captura de consumo implementar a revisão por padrão, criando pressão competitiva; e a comunidade acadêmica publicar protocolo de captura com consentimento do mesmo modo que publicou protocolo de captura forense. Nenhuma das três exige lei nova — exige que alguém trate a questão como engenharia e não como termo de uso.

**Indesejável.** A captura barata amadureceu e a camada de direitos não, e o custo apareceu concentrado em quem tinha menos defesa. Acervos de cenas capturadas incluindo interiores de casas, escolas e comércios circulam sem proveniência; réplicas de pessoas extraídas de vídeo comum aparecem em peça comercial sem que a pessoa saiba, e a via de reparação é individual, cara e lenta. A reação reguladora, quando vem, vem depois do dano e é grosseira: proibição ampla de captura volumétrica em espaço público, que atinge o museu, a escola e o pesquisador de patrimônio com a mesma força que atinge o operador comercial — e que o operador comercial contorna capturando em jurisdição permissiva. No Brasil, onde a LGPD já alcançaria o caso, a aplicação não acontece por falta de quem fiscalize, e o efeito prático é que a proteção existe no papel e não no mundo. **O sinal precoce deste cenário é específico e observável desde já:** a chegada de captura 3D a um app de câmera de massa **sem** uma etapa de revisão do que foi capturado. Se o botão chegar sem a etapa, o cenário indesejável já começou — e a janela para o desejável se fecha, porque padrão de fato não se renegocia depois que há um bilhão de arquivos.

## 10. O experimento

**O que é.** Um editor de consentimento para cena capturada: uma página web que carrega um splat capturado com celular, permite marcar regiões — pessoas, janelas de vizinhos, documentos, telas, placas com nome — e produz duas saídas. Primeira: o arquivo limpo, com as regiões removidas de fato (não borradas: removidas, porque splat borrado ainda tem geometria). Segunda: um **registro de proveniência** gravado no próprio arquivo, usando o mecanismo de extensões do formato — quem capturou, quando, onde, o que foi removido, quantas regiões, e um campo livre para a base da remoção. O arquivo continua abrindo em qualquer visualizador que ignore o campo; quem souber lê o histórico.

Base técnica: captura com Scaniverse ou Polycam no celular (processamento no aparelho, gratuito); edição sobre o SuperSplat, que é MIT e roda inteiramente no navegador sem upload; exportação em SPZ ou glTF com o campo de proveniência em `extras`. Nada disso exige servidor, conta ou orçamento — o que importa, porque o experimento precisa rodar na mão de catorze pessoas numa sala.

**Que pergunta sobre o futuro ele ajuda a responder.** Uma só, e é a do efeito `e7.2.1`: **é viável exercer consentimento no momento da captura, ou isso é só uma frase bonita em mapa de tendência?** Desmembrada em três perguntas mensuráveis: (a) quanto tempo leva para limpar uma cena capturada a ponto de ninguém identificável restar; (b) quantos "vazamentos" sobrevivem à limpeza quando outra pessoa procura de propósito; (c) o que acontece com a cena — esteticamente e em usabilidade — depois de removido o que não podia ficar. A pergunta (c) é a mais interessante e a menos óbvia: **a cena limpa ainda é uma cena?** Se remover pessoas e janelas destrói a cena, então a promessa de "capture qualquer lugar" e a exigência de consentimento são incompatíveis na prática, e um dos dois vai ceder — e este mapa erra ao supor que será o primeiro.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa reconstrução neural por Gaussian Splatting com processamento no aparelho, edição de splat no navegador e o sistema de extensões de formato (SPZ 4 / glTF `extras`) — os três de 2024–2026. Com tecnologia madura o experimento não existe, por dois motivos independentes. **Técnico:** em fotogrametria clássica, a saída é malha com textura, e remover uma pessoa é uma operação de edição de malha e de retoque de textura, com ferramentas de trinta anos e resultado previsível; em splat, a pessoa está distribuída em dezenas de milhares de gaussianas parcialmente sobrepostas ao fundo, e "remover" é uma operação sem ferramenta consolidada e com resultado visualmente estranho. É um problema novo, não um problema antigo mais barato. **Social:** o problema do consentimento em captura só é um problema quando a captura é barata e frequente. Enquanto custava uma equipe e um dia, havia contrato, autorização e ninguém capturava por acidente. O experimento investiga uma situação que só passa a existir porque o custo caiu.

**O que a turma vai fazer quando testar isso em sala.** Em três blocos, com medição:

1. **Capturar (15 min).** Cada aluno captura um canto do prédio com o próprio celular — corredor, laboratório, entrada, o que houver. Sem instrução sobre enquadramento, de propósito: queremos o que uma pessoa captura quando ninguém a avisou.
2. **Auditar em cruz (20 min).** Cada cena vai para outro aluno, que abre e procura, de propósito, o que não deveria estar ali: rosto identificável, tela de computador legível, crachá, papel, o interior de uma sala pela porta aberta. Registra-se **número de achados por cena** e **tempo até o primeiro achado**. Esta é a medida que importa, e a intuição da turma sobre ela vai estar errada — é isso que o experimento demonstra.
3. **Limpar e comparar (25 min).** O autor recebe a lista de achados e limpa a cena no editor, cronometrando. Compara-se antes e depois lado a lado, e discute-se o que a limpeza custou à cena. Fecha-se com a pergunta que não tem resposta certa: quem devia ter feito essa limpeza — o autor, a ferramenta, ou ninguém?

**O que seria um resultado que me faria mudar de ideia.** Dois resultados, em direções opostas, e ambos são achados.

- **Se a limpeza for rápida e confiável** — digamos, menos de três minutos por cena, com zero achados na segunda auditoria e sem perda perceptível de qualidade — então o problema de consentimento em captura é de *ferramenta*, não estrutural, e o efeito `e7.2.1` deveria subir de "sinal fraco, confiança baixa" para algo bem mais forte, porque a barreira seria só de produto e produto se resolve em dois anos.
- **Se a limpeza destruir a cena** — se remover as pessoas e as janelas deixar buracos que inviabilizam a navegação — então a incompatibilidade é real, e o mapa está errado no ponto oposto: `e7.2.1` não acontece porque *ninguém aceita a troca*, e o futuro provável passa a ser captura sem consentimento com remoção reativa, que é exatamente o cenário indesejável da seção 9.

Há ainda um terceiro resultado possível, e é o que eu mais temo por ser o mais chato: **que a auditoria em cruz não ache quase nada**, porque catorze pessoas capturando cantos vazios de um prédio universitário num horário de aula não capturam ninguém. Nesse caso o experimento mede o corredor, não a tese, e a correção é rodá-lo de novo em espaço com movimento — o hall na troca de turno, a cantina no intervalo.

## 11. Fontes

Só entram aqui as páginas que **abri e li** nesta rodada. As que não abriram estão listadas no fim, com o motivo, e não sustentam nenhuma afirmação do documento.

1. `https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/` — Kerbl, Kopanas, Leimkühler, Drettakis, *3D Gaussian Splatting for Real-Time Radiance Field Rendering*, SIGGRAPH 2023 (Inria/MPI/Univ. Côte d'Azur). Sustenta: a base algorítmica da seção 3 e o descarte do 3DGS como disrupção-raiz na seção 4 (≥100 fps em 1080p). Confiabilidade alta: página oficial dos autores de um artigo em ACM TOG, com código público.
2. `https://vgg-t.github.io/` — VGGT (Visual Geometry Grounded Transformer), Oxford VGG. Sustenta: reconstrução feed-forward em menos de um segundo e o Best Paper da CVPR 2025 (disrupção 1). Confiabilidade alta: página oficial do projeto.
3. `https://map-anything.github.io/` — MapAnything, 3DV 2026, código Apache. Sustenta: modelo único cobrindo 12+ tarefas de reconstrução, com entradas opcionais (disrupção 1). Confiabilidade alta como descrição de capacidade; a página **não** publica métricas quantitativas, e este documento não atribui nenhuma a ela.
4. `https://arxiv.org/abs/2511.10647` — Lin, Chen, Liew, Chen, Li, Shi, Feng, Kang, *Depth Anything 3: Recovering the Visual Space from Any Views*, submetido em 13/11/2025, ICLR 2026. Sustenta: +44,3% em pose e +25,1% em geometria sobre o VGGT. Confiabilidade alta para o abstract; os ganhos são auto-relatados pelos autores, como em qualquer preprint.
5. `https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release` — Khronos Group, `KHR_gaussian_splatting`, 03/02/2026. Sustenta: a padronização do splat como formato (disrupção 2) e a lista de participantes. Confiabilidade alta, com a ressalva declarada no texto: era **release candidate**, não ratificada.
6. `https://www.nianticspatial.com/blog/spz4` — Niantic Spatial, SPZ 4, 05/05/2026. Sustenta: compressão ~10× sobre PLY, ZSTD paralelo, cabeçalho legível, sistema de extensões, ganhos de 3× em codificação. Confiabilidade média: é anúncio do próprio criador do formato; os números de desempenho e o "800 mil arquivos em dois meses" não têm verificação independente e estão marcados como tal no texto.
7. `https://www.worldlabs.ai/blog/spark-2.0` — World Labs, Spark 2.0, 14/04/2026. Sustenta: LOD, streaming progressivo, memória virtual de GPU, e os números de cena (6M–106M splats; .RAD 200–250 MB contra 2,3 GB em PLY). Confiabilidade média-alta: anúncio de fornecedor, mas de um renderizador open source verificável.
8. `https://www.heise.de/en/background/Volumetric-videos-overcome-a-major-hurdle-on-the-path-to-the-mainstream-11244208.html` — heise online, 05/04/2026. Sustenta: streaming de splats dinâmicos a 17–80 Mbit/s (Gracia AI) e o dado de compressão >10× contra download. Confiabilidade média-alta: jornalismo técnico independente, reportando números fornecidos pela empresa.
9. `https://github.com/playcanvas/supersplat` — SuperSplat, PlayCanvas, licença MIT. Sustenta: edição de splat no navegador sem upload, e a base técnica do experimento da seção 10. Confiabilidade alta: repositório oficial, ~10 mil estrelas.
10. `https://radiancefields.com/3d-gaussian-splatting-engine-support` — levantamento de suporte por engine, 11/09/2026. Sustenta: Houdini nativo a partir da 21, dez plugins de Unreal, cinco de Unity, Godot nascente, Spark.js na web — e o rebaixamento de `e6` na seção 7. Confiabilidade média: publicação especializada, sem revisão por pares, mas é o levantamento mais completo e mais recente que encontrei.
11. `https://radiancefields.com/platforms/scaniverse` — perfil do Scaniverse, atualizado em julho de 2026. Sustenta: processamento no aparelho em menos de 90 segundos, gratuito, exportação SPZ e USDZ. Confiabilidade média, mesma ressalva do item 10.
12. `https://www.uploadvr.com/meta-squeezeme-mobile-ready-distillation-of-gaussian-full-body-avatars/` — SqueezeMe (Meta), 04/08/2025. Sustenta: três avatares gaussianos de corpo inteiro a 72 FPS no Quest 3, e as limitações que sustentam `e9` — captura com 100+ câmeras, sem relighting dinâmico, Quest sem rastreamento facial/ocular. Confiabilidade média-alta: veículo especializado que lê os artigos da Meta e registra as limitações que o anúncio omite.
13. `https://move.ai/` — Move AI. Sustenta: captura sem marcador em produção desde 2019 e a lista de clientes (Ubisoft, SEGA, Warner Music, Paramount, Nike, Sony, Meta, Disney). Confiabilidade baixa-média para as *alegações de qualidade* ("comparável à óptica"), que são material comercial; alta apenas para a existência dos produtos e dos clientes citados.
14. `https://www.apple.com/newsroom/2025/06/visionos-26-introduces-powerful-new-spatial-experiences-for-apple-vision-pro/` — Apple, visionOS 26, 09/06/2025. Sustenta: *spatial scenes* geradas por algoritmo generativo e profundidade computacional, no app Fotos, Spatial Gallery e Safari, com API — base do descarte por maturidade na seção 4. Confiabilidade alta para o que a Apple se compromete a entregar.
15. `https://www.hklaw.com/en/insights/publications/2026/06/senate-judiciary-committee-advances-legislation-to-protect-name` — Holland & Knight sobre o NO FAKES Act, aprovado por unanimidade no Comitê Judiciário do Senado dos EUA em 18/06/2026. Sustenta: direito de propriedade sobre voz e aparência, exceções, e a base de `e8`. Confiabilidade alta: análise de escritório de advocacia sobre texto legislativo público.
16. `https://brunobioni.com.br/blog/namidia/fotografos-vendem-fotos-de-atletas-na-rua-sem-consentimento-direito-autoral-ou-um-problema-de-protecao-de-dados/` — Bruno Bioni, 12/03/2025. Sustenta: a leitura de que imagem de pessoa identificável é dado pessoal sob a LGPD e que esperar pedido de remoção já é descumprimento — base da nota sobre o Brasil. Confiabilidade alta como posição doutrinária qualificada; é interpretação especializada, não decisão judicial.
17. `https://revistapesquisa.fapesp.br/en/digitizing-monuments/` — *Pesquisa FAPESP*, edição 293, julho de 2020. Sustenta: os grupos brasileiros de digitalização de patrimônio (UFBA/LCAD, UFRGS/LdSM desde 2002, FAU-USP e Museu Paulista com DIAPReM, Unicamp) e os monumentos documentados. Confiabilidade alta como jornalismo científico, com a ressalva declarada: é de 2020 e trata de laser scanning e fotogrametria, **não** de captura neural.
18. `https://www.museumnext.com/article/legal-case-concerning-a-3d-scan-of-a-museum-artefact-may-impact-on-all-institutions/` — caso Neues Museum × Cosmo Wenman (busto de Nefertiti). Sustenta: o precedente de que a instituição não detinha direito autoral válido sobre a varredura de obra em domínio público — sinal fraco nº 5 e wildcard D. Confiabilidade média: publicação setorial de museus; não encontrei a decisão primária, e a descrição do desfecho vem em segunda mão.

**Consultadas e não abertas — não sustentam nada neste documento:**

- *Virtual trespassing: privacy in photographic VR*, `https://link.springer.com/article/10.1007/s10676-026-09911-3` — HTTP 303 para autenticação. Era a fonte acadêmica mais alinhada ao argumento central deste mapa. Não citada.
- Fukuda et al., revisão de documentação 3D em prática forense, *APMIS*, `https://onlinelibrary.wiley.com/doi/10.1111/apm.70215` — HTTP 403.
- *Accuracy of three-dimensional Gaussian Splatting for virtual crime scene reconstruction*, *Frontiers in Computer Science*, `https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2026.1755361/pdf` — PDF baixou como binário ilegível. Por isso a seção 6 não traz nenhum número de erro métrico forense.
- `img2threejs` — repositório não aberto. O sinal fraco nº 2 usa a ideia com ressalva explícita.
- Pesquisa a16z sobre IA em desenvolvimento de jogos — não localizada em fonte primária; os quatro números que dela derivariam foram removidos do documento (seção 8, item 2).
- Anúncio do Atlas (World Labs, 01/09/2026) — visto apenas em resultado de busca, marcado como tal na seção 6.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 1 — a entrevista, literal

A skill `futurizacao-jcsc` exige cinco perguntas antes de qualquer geração de conteúdo, e proíbe pular a etapa mesmo a pedido. Esta rodada foi executada **sem interlocutor humano disponível**: as respostas foram fornecidas antecipadamente, por escrito, junto com o pedido. A entrevista está registrada aqui na íntegra porque a skill considera inválida uma saída sem entrevista visível.

> **1. Horizonte temporal: para que ano você quer projetar os efeitos?**
> 2031.
>
> **2. Público-alvo: quem vai ler/usar esse mapa?**
> Quem projeta mídia e interação.
>
> **3. Recorte geográfico: mercado global, ou uma região específica?**
> Global, com uma nota sobre o Brasil.
>
> **4. Descartes explícitos: existe algo que você já sabe que NÃO quer que o mapa cubra?**
> O que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
>
> **5. Viés desejado: otimista, pessimista, ou neutro/cético?**
> Neutro.

Informações adicionais fornecidas fora das cinco perguntas, e usadas:

> Disrupção suspeita: nenhuma — descubra. Ideias óbvias a excluir: as que servem para qualquer tema. O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe). Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor. Zona de interesse do autor: "Percepção e mídia sintética".

**Nota de execução.** A skill manda, quando o usuário pede para "ir direto ao resultado", explicar por que a entrevista é necessária e repetir o pedido. Não houve pedido desse tipo: as respostas vieram completas e antecipadas. Nenhuma resposta foi "tanto faz", então não há nada a registrar como omissão na seção 2 — o que há é a condição atípica registrada acima e retomada no viés 3 da seção 7: **um mapa produzido sem interlocutor é um mapa sem atrito**.

**Restrição adicional aplicada, declarada.** O `DUVIDAS.md` desta skill documenta o erro encontrado na rodada de teste: quatro efeitos de terceira ordem receberam prazo fora do horizonte pedido, sem aviso. O aluno registrou a correção a aplicar — conferir que nenhum `prazo` exceda o `horizonte`, e dizer em prosa quando um efeito só se consolidar depois — mas deliberadamente **não** a incorporou ao `SKILL.md` daquela entrega. Nesta rodada a checagem foi feita: todos os 38 efeitos têm `prazo` ≤ 2031, e os três que provavelmente amadurecem depois estão nomeados em prosa ao fim da seção 5. Isso é uma extrapolação do que o `SKILL.md` formalmente pede, e está declarada aqui para não passar por comportamento da skill.

### 12.2 Etapa 2 — log de buscas, na ordem em que foram feitas

Buscas (WebSearch) executadas, com o que cada uma devolveu de aproveitável:

1. `3D Gaussian Splatting 2026 state of the art real-time radiance field` — confirmou 3DGS como padrão do campo; devolveu papers de extensão de 2026 (kernel com especularidade, Deformable Beta Splatting, CodecSplat). **Uso:** motivou o descarte do 3DGS como disrupção-raiz.
2. `Gaussian splatting privacy consent capture likeness law 2026` — devolveu NO FAKES Act, DEFIANCE Act, NY S8391 (réplica digital, consentimento de herdeiros), leis estaduais de biometria, e o artigo Springer sobre *virtual trespassing*. **Uso:** disrupção 3 e seção 6.
3. `feed-forward 3D reconstruction VGGT MapAnything 2026 single image to 3D` — VGGT, MapAnything, além de One2Scene, FantasyWorld, VGGT-Ω, "VGGT in the Wild". **Uso:** disrupção 1 e a lacuna de distratores.
4. `markerless motion capture video 2026 Move.ai monocular mocap state of art` — Move AI (Genesis, Gen 2), Move 4D, literatura clínica de mocap monocular. **Uso:** disrupção 3.
5. `Niantic Scaniverse SPZ Gaussian splat format open source Unity Unreal support 2026` — SPZ, SPZ 4, licença MIT, ~90% de compressão. **Uso:** disrupção 2.
6. `volumetric video Gaussian splatting streaming standard MPEG 2026 gaussian splat codec` — LapisGS, GSCodec Studio, 4D-MoDe, 4DGCPro, e a informação de que o MPEG mantém trilhas de exploração para codec de GS. **Uso:** "o que ainda falta" da disrupção 2.
7. `SuperSplat PlayCanvas editor Gaussian splat browser open source 2026` — SuperSplat, MIT, WebGL 2.0. **Uso:** seção 3 e experimento.
8. `"Depth Anything 3" 2026 monocular depth any-view geometry` — DA3, ICLR 2026, ganhos sobre VGGT. **Uso:** disrupção 1.
9. `Gaussian splatting Brasil 2026 digitalização patrimônio captura 3D celular` — devolveu Project Eternal (Insta360 + Splatica + Antigravity, com CyArk, em Civita di Bagnoregio e Pompeia, abril de 2026) e a extensão glTF. **Não devolveu nada do Brasil** — a busca em português trouxe conteúdo europeu e chinês. Ver 12.5.
10. `Meta Codec Avatars 2026 photorealistic avatar smartphone scan Quest` — SqueezeMe, Avat3r, Vid2Avatar-Pro, URAvatar, varredura por iPhone com FaceID, Meta Hyperspace. **Uso:** disrupção 3.
11. `Gaussian splatting shipped in game or product 2026 Unreal Engine Unity plugin production use` — ausência de módulo first-party na Unreal 5.7; plugin oficial da Luma AI; UnityGaussianSplatting (Aras Pranckevičius); 60 fps abaixo de 1M de gaussianas em GPU de gama média. **Uso:** rebaixamento de `e6`.
12. `Polycam Luma AI 2026 funding 3D capture market real estate scanning adoption` — editor de planta baixa da Polycam (março de 2026), captura sem LiDAR em iPhone, e a separação "Luma bonito / Polycam aferível". **Sem dados de investimento** — nenhum número de captação foi encontrado e nenhum entrou no documento.
13. `LGPD imagem de pessoa captura 3D espaço público direito de imagem fachada prédio Brasil` — doutrina sobre imagem como dado pessoal, e a posição de Bruno Bioni. **Uso:** nota sobre o Brasil.
14. `World Labs Marble 3D world generation Spark.js gaussian splat 2026 release` — Marble (quatro variantes desde 02/04/2026), World API (janeiro de 2026), Spark 2.0 (14/04/2026), Atlas (01/09/2026). **Uso:** sinal fraco nº 4.
15. `3D artist environment modeler jobs 2026 AI asset generation industry impact survey` — os quatro números descartados (ver seção 8, item 2) e a descrição qualitativa da migração "modelador júnior → curador de ativo". **Uso: nenhum número.** A descrição qualitativa não sustenta efeito sozinha.
16. `Hunyuan3D Tripo 2026 image to 3D asset generation quality production PBR mesh` — Hunyuan3D 2.1 aberto em junho de 2025 com PBR; engine hospedada em 3.1 (novembro de 2025) com 4K PBR e 8 vistas; Tripo Smart Mesh P1.0. **Uso:** descarte por escopo na seção 4.
17. `3D scan lawsuit museum artifact copyright scan ownership dispute 2026 "digital twin" rights` — Nefertiti/Neues Museum; o caso da estátua de Michelangelo em campus universitário (sem base legal para remoção, obra em domínio público e em lugar público); política de permissão do MorphoSource. **Uso:** seção 6 e wildcard D.
18. `gaussian splatting forensics crime scene insurance claim 3D capture adoption 2026` — literatura forense de 2025–2026 e o protocolo de filmagem. **Sem número aproveitável** (PDF ilegível). **Nada sobre seguros** — a hipótese de adoção por seguradoras não tem fonte e só aparece na seção 9 como projeção declarada.
19. `Apple iOS 26 spatial scenes 3D photo depth Vision Pro 2026 mass consumer feature` — *spatial scenes* no iOS 26 em iPhone 12+, distinção com *spatial photos*. **Uso:** descarte por maturidade, e o erro conceitual da seção 8, item 6.
20. `"4D Gaussian" dynamic scene capture 2026 monocular video free-viewpoint human performance limitation` — 4D3R, Ground4D, PanoGaussian, FreeTimeGS, Zero4D; e a formulação de que reconstrução 4D monocular é subdeterminada. **Uso:** "o que existe e não funciona".

Páginas abertas (WebFetch): 18 com sucesso, listadas na seção 11; 3 com falha, também listadas lá.

### 12.3 Candidatos a disrupção-raiz cogitados e descartados, com o motivo

| Candidato | Veredito | Motivo |
|---|---|---|
| 3D Gaussian Splatting como técnica de renderização | **descartado — maduro** | Padrão de fato em 2026: nativo em Houdini 21+, dez plugins de Unreal, ecossistema estabelecido em Blender, padronização glTF em curso. O debate é sobre estender, não substituir. Reclassificado como base das três disrupções. |
| NeRF | **descartado — superado** | Superado pelo próprio campo antes de virar padrão. Interessa como marco histórico (2020), não como candidato. |
| Profundidade/paralaxe de imagem única em produto de massa | **descartado — régua da disciplina** | Apple *spatial scenes*, iOS 26, todo iPhone a partir do 12. Produto de massa. |
| Fotogrametria clássica (COLMAP, RealityCapture) | **descartado — maduro** | Mais de uma década de consolidação; o debate é de custo, não de substituição técnica. |
| Laser scanning terrestre | **descartado — maduro** | Idem; permanece como referência de exatidão. |
| Mocap óptico com marcadores | **descartado — maduro** | Continua sendo a referência contra a qual o markerless se mede. |
| `model-viewer` e 3D/AR no navegador | **descartado — maduro e fora de escopo** | Consolidado, e é o tema 15 da disciplina. |
| Geração de objeto 3D de texto/imagem (Hunyuan3D, Tripo, TRELLIS) | **descartado — fora de escopo** | Emergente e com debate real, mas é geração, não captura. Volta como sinal fraco nº 4. |
| Compressão de malha (`draco`) | **descartado — maduro e lateral** | Infraestrutura consolidada; não rompe nada neste tema. |
| Bases unificadas de movimento humano (`amass`) | **descartado — insumo, não ruptura** | É dado de treino, não disrupção. Sustenta a disrupção 3 por baixo. |
| Ampliação generativa de detalhe (Magnific e similares) | **descartado — outro tema** | Inventar detalhe que não foi capturado é mídia sintética, não captura de realidade. Interessante, e de outro mapa. |
| Reconstrução como programa procedural (`img2threejs`) | **mantido como sinal fraco** | Quase não existe hoje; mudaria a natureza do ativo se pegasse. Não virou disrupção-raiz por falta de qualquer evidência de adoção. |
| Splat dinâmico 4D de câmera única | **absorvido** | Não é disrupção autônoma: é a fronteira aberta das disrupções 1 e 3. Entra como "o que ainda falta". |

### 12.4 Efeitos gerados e cortados

Cortados por serem genéricos — servem a qualquer tema de IA e por isso não informam nada (a entrevista pediu explicitamente para excluí-los):

- "A produção de conteúdo fica mais barata."
- "Surgem novas profissões e desaparecem outras."
- "Aumenta a preocupação com privacidade."
- "A regulação não acompanha a tecnologia."
- "Empresas grandes concentram a vantagem por terem mais dados."
- "A qualidade média do conteúdo cai por excesso de oferta."

Cortados por serem execução, não efeito:

- "Ferramentas passam a suportar mais formatos de exportação."
- "Os modelos ficam menores e mais rápidos."
- "A documentação melhora."

Cortados por pertencerem a temas vizinhos, conforme a fronteira declarada pela disciplina:

- "Robôs treinam em cenas capturadas em vez de simuladas" → **tema 9** (agentes corporificados, mundos simulados). Aparece aqui apenas em `e3`, e só pelo lado do sensor.
- "A distribuição de 3D e XR pelo navegador vira padrão" → **tema 15**. Usado como infraestrutura (Spark 2.0), não como efeito.
- "Segmentar a cena por conceito vira operação básica" → **tema 11**. É pressuposto do experimento da seção 10, não efeito deste mapa.

Cortados por quarto nível (o limite da skill é três, e o corte é de formato):

- de `e4.1.1`: tributação de licença de lugar; disputa de zoneamento sobre fachada capturável.
- de `e6.1.2`: renegociação sindical sobre o que conta como trabalho criativo.
- de `e8.1.1`: herança de réplica digital — quem controla a aparência depois da morte, e por quanto tempo.
- de `e3.2.1`: exigência de "zona sem varredura" por contrato de locação e por regulamento de condomínio.

### 12.5 As buscas que não deram em nada, e o que isso significa

**Brasil e captura neural.** A busca 9, em português, com termos de patrimônio, digitalização e Gaussian Splatting, não devolveu **um único projeto brasileiro de 2026**. O que devolveu foi europeu (Pompeia, Civita di Bagnoregio, via Insta360/Splatica/CyArk) e acadêmico internacional. A busca 13 devolveu doutrina jurídica brasileira sólida — mas sobre fotografia, não sobre reconstrução volumétrica. Duas leituras possíveis, e não consigo decidir entre elas com o que levantei: ou a captura neural ainda não chegou à prática documentada no Brasil, ou chegou e não está indexada em inglês nem em páginas que uma busca deste tipo alcance. A segunda hipótese é plausível — trabalho de laboratório universitário brasileiro costuma sair em anais de evento nacional, que não indexam bem. **Fica como lacuna declarada, não como conclusão.**

**Investimento e tamanho de mercado.** A busca 12 não devolveu nenhum dado de captação de Polycam ou Luma AI de fonte primária. Nenhum número de mercado entra neste documento — e isso é deliberado: mapa de tendência com número de mercado inventado é o modo mais rápido de parecer rigoroso sem ser.

**Seguros e adoção corporativa.** A busca 18 não devolveu nada sobre uso de captura neural em sinistro ou perícia de seguro, apesar de ser o caso de uso economicamente mais óbvio. A menção a seguradoras na seção 9 é projeção declarada, sem fonte.

**Litígio de 2026 sobre varredura 3D.** A busca 17 devolveu apenas os casos antigos (Nefertiti, 2019; Michelangelo em campus). Nenhum litígio de 2026 especificamente sobre splat ou captura neural foi encontrado — o que reforça a tese central deste mapa: **a camada de direitos está atrás da camada técnica, e a distância é de anos, não de meses.**

### 12.6 Onde este mapa encosta nos temas vizinhos, e onde para

- **Tema 9 (agentes corporificados / modelos de mundo):** o robô que percebe o ambiente usa a mesma pilha de reconstrução. A fronteira: aqui o produto é **mídia** — algo que alguém vai ver, navegar, licenciar; lá o produto é **ação**. `e3` toca a fronteira e para nela.
- **Tema 11 (ver e segmentar por conceito):** o experimento da seção 10 depende de segmentação para funcionar bem, mas o que este mapa investiga não é a segmentação — é o que se faz com ela quando o objeto segmentado é uma pessoa dentro de uma cena capturada.
- **Tema 14 (reconstrução como programa):** o sinal fraco nº 2 é literalmente o ponto de contato. A saída procedural é um tema em si; aqui entra só como propriedade do ativo.
- **Tema 15 (3D e XR pelo navegador):** o Spark 2.0 é infraestrutura deste mapa e objeto daquele. Usei os números de streaming; não desenvolvi a camada de entrega.

### 12.7 Verificação do documento

Contagens declaradas no frontmatter, conferidas contra o bloco YAML da seção 5:

- disrupções-raiz: **3** (feed-forward; formato; pessoas)
- efeitos de 1ª ordem: **9** (e1…e9)
- efeitos de 2ª ordem: **14** (e1.1, e1.2, e2.1, e3.1, e3.2, e4.1, e4.2, e5.1, e6.1, e7.1, e7.2, e8.1, e9.1, e9.2)
- efeitos de 3ª ordem: **15** (e1.1.1, e1.2.1, e2.1.1, e3.1.1, e3.2.1, e4.1.1, e4.2.1, e5.1.1, e6.1.1, e6.1.2, e7.1.1, e7.2.1, e8.1.1, e9.1.1, e9.2.1)
- total: **38 efeitos**, nenhum com `prazo` acima de 2031
- profundidade máxima: **3 níveis**, sem exceção
- rebaixamentos de confiança registrados com valor original: **5** (e2, e3, e6, e5.1, e9.2)
- fontes abertas e lidas: **18**; fontes tentadas e não abertas: **6**, listadas com motivo
- `confianca: media` no frontmatter — justificada: a camada técnica (seções 3 e 4) tem fontes primárias e datas verificáveis; a camada de efeitos de segunda e terceira ordem é projeção com viés de fonte declarado na seção 7, e a nota sobre o Brasil repousa sobre uma lacuna de busca admitida em 12.5.
