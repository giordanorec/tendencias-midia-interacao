---
tema: "Captura de realidade e renderização neural"
slug: captura-de-realidade-e-renderizacao-neural
autor_login: yrv
zona_de_interesse: "Percepção e mídia sintética"
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 11
tecnologias_citadas: [3D Gaussian Splatting, NeRF, KHR_gaussian_splatting, KHR_gaussian_splatting_compression_spz, SPZ, glTF 2.0, 3D Tiles, CesiumJS, Cesium for Unreal, Cesium ion, SuperSplat, PlayCanvas, Polycam, Luma AI, Scaniverse, Niantic Spatial VPS 2.0, NSDK 4.0, Large Geospatial Model, Meta Horizon Hyperscape Capture, Avalanche, Apple SHARP, Splat Studio, visionOS 26, Depth Anything 3, VGGT, TripoSR, TRELLIS, Hunyuan3D 2.1, Tripo, Meshy, Move.ai Genesis, EasyMocap, SqueezeMe, Codec Avatars, 4D Gaussian Splatting, Gracia, 4DV.ai, OBSBOT, Xgrids Lixel L2 Pro, Lixel CyberColor, Lixel L3, PortalCam, DJI Terra, Esri ArcGIS Pro, Zillow SkyTour, Project Genie, Street View, img2threejs, Three.js, Unity Gaussian Splatting, Sony Crystal LED Verona, Unreal Engine, Lei 9.610/98 art. 48, PL 2338/2023, Copyright Act dinamarquesa secoes 65-a e 73-a]
fontes: 32
confianca: media
experimento: "O inventario do que nao foi medido — a turma representa o mesmo canto de sala por tres caminhos (uma foto reconstruida em 3D, um video de trinta segundos virado splat, e uma descricao escrita virada cena gerada), e um quarto grupo que nao viu o original responde perguntas factuais sobre o lugar olhando so para as tres representacoes; mede-se quantas respostas cada representacao sustenta corretamente, quantas ela sustenta com confianca ALTA e errada, e em que ponto cada grupo percebe que esta olhando para detalhe inventado"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

Capturar um lugar com uma câmera comum e navegá-lo em tempo real deixou de ser problema de
pesquisa. Isso, sozinho, **não é a disrupção** — é o substrato, e ele está virando rotina à
vista de todos. Em **3 de fevereiro de 2026** o Khronos levou a `KHR_gaussian_splatting` a
*release candidate* dentro do glTF 2.0, com Autodesk, Cesium/Bentley, Esri, Huawei, Niantic
Spatial, NVIDIA e XGRIDS assinando junto. Em **27 de abril de 2026** a Cesium entregou nível de
detalhe hierárquico para splats em CesiumJS, Cesium for Unreal e Cesium ion, com um exemplo de
**110 milhões de splats reconstruídos de 20.169 fotos cobrindo cerca de 3,7 km² a 3 cm de GSD**.
O editor de splats do PlayCanvas roda no navegador, é MIT, e não pede instalação. Existem, por
uma contagem de **9 de julho de 2026**, **212 ferramentas, apps e empresas** de splatting, **415
vagas abertas** que pedem a competência, e **mais de US$ 1,5 bilhão** em captação declarada.
Caminho de instalação padrão, preço estável, modos de falha documentados: pela régua da
disciplina, **isso é maduro**, e este mapa **recusa** tratá-lo como tendência. Entra na seção 3
como substrato e **não vira raiz** na seção 4.

O que ainda não é rotina — e é onde este mapa aposta — são três deslocamentos que o
barateamento da captura torna possíveis e que **não são "a mesma coisa mais rápido"**.

**Primeiro: a captura de espaço deixa de ser serviço e vira gesto.** Em **14 de janeiro de 2026**
a Polycam levou captura espacial a iPhones **sem LiDAR**, a partir do iPhone 13 — cerca de **800
milhões de aparelhos**, segundo a empresa, que declara **mais de 34 milhões de capturas** e **mais
de 2 bilhões de pés quadrados** acumulados. Em **17 de dezembro de 2025** a Apple abriu o `SHARP`,
que produz **1,18 milhão de gaussianas a partir de uma única foto em menos de um segundo**. A
competência que isso torna sem valor não é "fazer 3D": é a **cadeia de produção de ambiente** —
modelar, texturizar, iluminar um lugar que existe. E a consequência imediata não é estúdio sem
artista: é que **fotografar direito passa a valer mais do que modelar**.

**Segundo: a pessoa e o movimento passam a ser capturáveis por câmera comum, e a aparência vira
dado destacável do corpo.** A Move.ai vende captura de movimento de qualidade óptica **sem traje e
sem marcador**, com 6 a 12 câmeras e uma GPU. O `Depth Anything 3`, de **13 de novembro de 2025**,
recupera geometria de qualquer conjunto de vistas com ou sem pose conhecida, superando o estado da
arte anterior em **44,3% em precisão de pose e 25,1% em geometria**. E o direito começou a se
mover antes do produto: a Dinamarca propôs em **26 de junho de 2025** um direito de tipo autoral
sobre rosto, voz e traços corporais, para toda pessoa e não só para figuras públicas; nos Estados
Unidos, uma ação ajuizada em **5 de maio de 2026** contra James Cameron e a Disney discute
exatamente a cadeia de captura — um rosto esculpido em maquete e **escaneado a laser** — e não o
resultado exibido (⚠️ fonte primária não aberta; ver §12.8).

**Terceiro: quem captura não fica com a cópia.** O Hyperscape da Meta, em acesso antecipado desde
**17 de setembro de 2025** no Quest 3 e 3S, processa na nuvem, transmite por streaming e **não
entrega o arquivo bruto**. Em **7 de abril de 2026** a Niantic Spatial relançou o Scaniverse como
"a porta de entrada" para o seu **Large Geospatial Model** e para o VPS 2.0, com um kit de
desenvolvimento que fala Unity, Swift, Android e **ROS 2** — isto é, robôs. O registro do mundo
está sendo acumulado por terceiros, e o cliente do mapa deixou de ser o humano que se localiza.

Os três juntos mudam a pergunta que um projetista de mídia faz. Ela deixa de ser *como eu
construo este lugar* e passa a ser **de quem é o lugar que eu capturei, o que nele foi medido, o
que foi inventado, e quem fica com o arquivo**. É sobre isso que este mapa trata.

Duas coisas o mapa **não** afirma, e convém dizer antes. Não afirma que a adoção já passou da
maioria inicial: 34 milhões de capturas sobre 800 milhões de aparelhos elegíveis é cerca de 4%,
e 415 vagas abertas no mundo inteiro é um mercado de inovadores, não de maioria. E não afirma
que a fidelidade vence: a maior força contrária a tudo o que está aqui é que **splat não tem
luz** — ele traz a iluminação assada, não responde a lanterna nem a hora do dia, e, até abril de
2026, **nenhuma ferramenta comercial de criação oferece reiluminação**. Enquanto isso durar, o
mundo capturado é cenário, não matéria.

## 2. O tema

**O que é.** Transformar registro de sensor comum em ativo 3D navegável, e renderizar esse ativo
em tempo real. A cadeia clássica de criação — modelar, texturizar, riggar, animar — colapsa em
**capturar**. O objeto do tema é essa conversão: realidade em ativo.

**O que não é — a fronteira deste mapa.** Três cortes, herdados do bloco da disciplina e
declarados aqui porque foram eles que impediram o mapa de inchar:

1. **Não é robô aprendendo em mundo simulado.** Modelo de mundo como ambiente de treino de
   política de ação é o tema 9. Aqui, quando o robô aparece, ele aparece como **cliente do
   registro capturado**, não como agente que aprende.
2. **Não é distribuição de 3D e XR pelo navegador.** Formato, streaming e runtime na web são o
   tema 15. Este mapa cita o glTF e o SPZ como **precondição de interoperabilidade**, e para no
   ponto em que a discussão vira entrega.
3. **Não é percepção aberta por conceito.** Segmentar e nomear o que está na cena é o tema 11.
   Aqui o produto da captura é **geometria e aparência**, não rótulo.

E um quarto corte, este meu: **não é fotogrametria clássica, escaneamento a laser nem mocap com
marcador.** São maduros, caros e resolvidos. Entram como linha de base para medir o que mudou.

**Onde passa a linha, então.** O emergente é a **captura neural a partir de sensor comum** e a
**reconstrução a partir de uma única imagem** — e, mais do que qualquer uma das duas, o que
acontece com o registro depois que ele existe.

**Horizonte.** 2031. É prazo curto para infraestrutura e longo para aplicativo, e essa
assimetria é proposital: as raízes 1 e 3 já têm produto no ar, e o que se mapeia é a consequência;
a raiz 2 depende de norma e contrato, que andam em anos, não em trimestres.

**Público.** Quem projeta mídia e interação. Não é mapa para investidor nem para legislador,
embora as duas seções finais toquem no que eles decidem.

**Recorte.** Global, com uma nota sobre o Brasil na seção 3. A nota não é enfeite: o Brasil tem
um precedente judicial sobre imagem de obra arquitetônica que incide diretamente sobre a raiz 1,
e tem um investimento recente e grande em produção virtual que foi feito **do lado oposto** ao
deste mapa — em parede de LED, não em captura.

## 3. Onde isso está hoje

Esta seção é a âncora no presente. Tudo aqui é verificável, datado, e **foi aberto nesta sessão**
— as fontes estão na seção 11. O que não consegui apurar está dito como não apurado.

### 3.1 O substrato maduro — o que este mapa recusa como tendência

**A técnica.** O 3D Gaussian Splatting foi publicado por Bernhard Kerbl, Georgios Kopanas, Thomas
Leimkühler e George Drettakis (Inria, Université Côte d'Azur, MPI Informatik) no SIGGRAPH 2023, em
julho de 2023, com síntese de novas vistas em tempo real **acima de 100 fps a 1080p** em cenas
abertas e completas, avaliada em 13 cenas reais. Não é novidade: é a base. O próprio Kerbl
escreveu em **30 de outubro de 2025** um balanço — *The Impact and Outlook of 3D Gaussian
Splatting* — encomendado para o Frontiers of Science Award do Congresso Internacional de Ciência
Básica, o que por si já diz o estágio: a técnica virou objeto de retrospectiva, não de aposta.

**O padrão.** Em **3 de fevereiro de 2026** o Khronos Group anunciou a `KHR_gaussian_splatting`
como *release candidate*, com ratificação prevista para o segundo trimestre de 2026, e a
`KHR_gaussian_splatting_compression_spz` para armazenamento e streaming. Nas palavras de Neil
Trevett, presidente do Khronos, a extensão "marca um marco para o glTF, estendendo o formato para
suportar uma classe inteiramente nova de representação geométrica". O SPZ, da Niantic Spatial, é
MIT e reduz o arquivo em **até 90%** em relação ao PLY. Há **fallback para nuvem de pontos** em
visualizadores que não sabem renderizar splat — detalhe que importa, porque é o que permite
adoção sem ruptura.

**A entrega em escala.** Em **27 de abril de 2026** a Cesium publicou splats com LOD hierárquico
usando 3D Tiles como índice espacial e glTF como carga, em CesiumJS, Cesium for Unreal e Cesium
ion. O exemplo publicado é o campus da Microsoft em Redmond: **110 milhões de splats, 20.169
fotos, ~3,7 km², 3 cm de distância de amostragem no solo**.

**A compressão de vídeo volumétrico.** O MPEG pediu, em anúncio de **4 de agosto de 2026**,
material de teste de 3DGS **dinâmico** em formato I-3DGS com calibração COLMAP, com prazo em **15
de outubro de 2026**, na 155ª reunião em Genebra, preparando uma chamada de propostas de
codificação. Isto é o começo de um padrão de compressão, não o fim — e por isso aparece de novo
na seção 6.

**A ferramenta.** O SuperSplat, do PlayCanvas, roda no navegador, é MIT, e na versão 2.0
(**13 de fevereiro de 2025**) ganhou publicação direta na web, linha do tempo para animação de
câmera, formato de projeto `.ssproj`, galeria da comunidade e WebXR. "Nada para instalar" é
literal.

**O hardware profissional.** O Xgrids Lixel L2 Pro é um escâner SLAM de mão de 32 canais que
captura **640.000 pontos por segundo** e produz splat nativamente pelo Lixel CyberColor, com o
único plugin GS-para-BIM do Revit no mercado; custa **US$ 15 mil a US$ 25 mil**, pesa 1,7 kg sem
bateria, e processa cerca de **1 hora por scan de 3 minutos**. Preço estável, faixa conhecida,
integrador formado: maduro.

**O mercado.** Pela contagem do Radiance Fields em **9 de julho de 2026**: **3.333 artigos** de
campos de radiância indexados, **ao menos 749 com data de 2026** (cerca de quatro por dia), **212
ferramentas/apps/empresas**, **mais de US$ 1,5 bilhão** em captação declarada (dos quais ~US$ 480
milhões em startups dedicadas a 3D e espacial), **665 vagas rastreadas desde 2024** e **415
abertas**, e nove indústrias com ferramenta dedicada — GIS na frente com 25, depois
arquitetura/engenharia/construção com 24 e mídia/entretenimento com 20.

**Por que tudo isso é recusado como raiz.** Aplicando a régua: *muda o que é possível, ou só faz
mais rápido o que já se fazia?* Renderizar campo de radiância a 100 fps, comprimi-lo em SPZ,
servi-lo em 3D Tiles e editá-lo no navegador **faz mais barato e mais rápido o que fotogrametria
e escaneamento a laser já faziam**. Reprova em T1 e aprova em T5. É H1 consolidando-se, com um
naco de H2− — inovação que escora o presente. A seção 4 vai buscar o que está acima disso.

### 3.2 O que já está em produto, e é novo o bastante para contar

- **Captura de espaço por telefone sem sensor especial.** Polycam, **14 de janeiro de 2026**:
  captura espacial em iPhone 13 ou superior **sem LiDAR**, grátis. Elliott Spelman, CEO: "Você
  costumava precisar de milhares de dólares em equipamento especializado. A partir de hoje, tudo
  o que você precisa é um iPhone comum." Números declarados pela empresa: **mais de 34 milhões de
  capturas**, **mais de 2 bilhões de pés quadrados**, usuários ativos em mais da metade das
  Fortune 500.
- **Captura de espaço dentro do headset.** Meta Horizon Hyperscape Capture, acesso antecipado nos
  EUA a partir de **17 de setembro de 2025**, Quest 3 e 3S, maiores de 18. A malha inicial da sala
  leva cerca de **30 segundos**; a captura detalhada, **5 a 10 minutos**; o processamento na nuvem,
  **1 a 8 horas** conforme o tamanho. A cena é **transmitida por streaming** dos servidores da Meta
  (tecnologia interna "Avalanche"): nada do trabalho pesado acontece no aparelho, e **o usuário não
  recebe o arquivo bruto**.
- **Reconstrução a partir de uma única foto, no aparelho.** Apple `SHARP` (*Sharp Monocular View
  Synthesis in Less Than a Second*), aberto em **17 de dezembro de 2025**, arXiv 2512.10685, código
  em `github.com/apple/ml-sharp`: estima profundidade, refina, e prevê posição e aparência de
  **1,18 milhão de gaussianas** numa única passagem, em **menos de um segundo** em GPU comum, com
  suporte a CPU, CUDA e Metal. Vem com um app visionOS, o Splat Studio. Limite declarado: renderiza
  bem pontos de vista **próximos**; não inventa o que está atrás.
- **Geometria de qualquer conjunto de vistas.** `Depth Anything 3` (ByteDance Seed), arXiv
  2511.10647, **13 de novembro de 2025**: um transformer simples, alvo único de predição
  profundidade-raio, com ou sem pose de câmera conhecida; **+44,3% em precisão de pose** e **+25,1%
  em geometria** sobre o VGGT.
- **Imobiliário.** A Zillow embarcou splatting no **SkyTour** em **16 de julho de 2025**, em
  anúncios *Showcase*, por enquanto só exterior. O que interessa não é o recurso: é a escala de
  validação — o Radiance Fields registra que "um portal com 220 milhões de visitantes mensais está
  validando o formato".
- **Mapa como produto para máquina.** Niantic Spatial, **7 de abril de 2026**: Scaniverse como
  plataforma web e móvel integrada, VPS 2.0 "funcionando em escala global", e o **NSDK 4.0** com
  suporte unificado a Unity, Swift, Android e **ROS 2**. A empresa descreve o alvo como "os 80% da
  economia que acontecem fora das telas". Em um texto seu sobre 2026, a Niantic Spatial sustenta
  que o Large Geospatial Model é a camada de **verdade de campo** que falta aos modelos de mundo.
  ⚠️ Vi resumos de busca atribuindo a essa página números — 30 bilhões de imagens posadas, 10
  milhões de scans, 1 milhão de locais. **Abri a página: ela não traz número nenhum.** Não os
  afirmo. Ver seção 8.
- **Captura de movimento sem marcador, de nível profissional.** Move.ai `Genesis`: 6 a 12 câmeras
  Z-cam e uma GPU NVIDIA (custo de GPU estimado pela própria configuradora em US$ 3.000; preço do
  conjunto sob consulta), volume de **4×4 m a 20×20 m**, **1 a 8 pessoas simultâneas**, instalação
  permanente, processamento local. **Não** faz captura por câmera única.
- **Vídeo volumétrico que transmite.** A Gracia entregou streaming 4DGS de verdade em **março de
  2026** (quadros-chave mais deltas de movimento, 10× menos banda), e em **27 de abril de 2026** a
  DNE e a Gracia publicaram a primeira performance musical transmitida em 4DGS: 4 minutos, **17 a
  75 Mbps**, WebGPU no navegador, sem app, rodando em desktop, celular e Quest 3, com 1,5 milhão de
  visualizações no primeiro fim de semana. Na NAB 2026, 4DV.ai e OBSBOT mostraram um arranjo de
  **70 câmeras PTZ 4K (~US$ 80 mil)** comprimindo ~8 Gbps de captação em um ativo final de **30 a
  60 Mbps**.

### 3.3 O que **não** está em produto, e é onde o mapa tem que ter humildade

- **Pessoa fotorreal capturada por celular.** A Meta mostrou isso em **13 de junho de 2022**: scan
  de iPhone de **3,5 minutos**, 65 expressões, modelo a priori treinado em 255 rostos — e **6 horas
  de processamento em 4 GPUs de ponta**. Quatro anos depois, em **4 de agosto de 2025**, o
  `SqueezeMe` destilou avatares gaussianos de corpo inteiro para rodar **3 avatares a 72 fps no
  Quest 3** — e continua sendo **pesquisa**, dependente do rig de mais de 100 câmeras da Meta, sem
  reiluminação dinâmica, e com o detalhe de que nem o Quest 3 nem o 3S têm rastreamento facial. É o
  contraexemplo mais útil deste mapa: **a captura de espaço barateou; a captura de pessoa, não.**
- **Reiluminação.** Splat carrega luz assada. Existe pesquisa de reiluminação, mas **não há
  ferramenta comercial de criação que a ofereça** (situação de abril de 2026), e os plugins maduros
  **não projetam sombra de splat**. Extração de malha a partir de gaussianas dispersas continua
  produzindo superfície irregular, com detalhe degradado em alta curvatura.
- **Norma de consentimento para escaneamento de espaço.** Procurei e **não encontrei** regulação,
  proposta ou diretriz que trate especificamente de consentimento para digitalização 3D de
  interiores — nem na UE, nem no Brasil. Registro como **não apurado**, e não como inexistente.

### 3.4 Uma nota sobre o Brasil

**O que a lei diz, e o que já foi julgado.** A Lei 9.610/98, no artigo 48, permite **representar
livremente** obras situadas permanentemente em logradouros públicos, por "pinturas, desenhos,
fotografias e procedimentos audiovisuais". Em **30 de novembro de 2016**, a Terceira Turma do STJ,
relator ministro Marco Aurélio Bellizze, decidiu por unanimidade que o artigo 48 **não** autoriza
"a representação unicamente da obra arquitetônica, com finalidade lucrativa" — autoriza representar
a paisagem em que a obra se insere. O caso era publicidade com a fachada de um projeto de Luis
Afonso Monzillo.

Repare no encaixe: um splat de um prédio, recortado do entorno, girável, licenciável e vendido como
ativo, é **exatamente** a representação isolada da obra com finalidade lucrativa. A doutrina
brasileira já distinguia *representação* de *reprodução* justamente prevendo escultura em 3D. O
Brasil, sem ter legislado sobre captura neural, tem um precedente que incide sobre ela.

**O que está em tramitação.** O PL 2338/2023 foi aprovado pelo Plenário do Senado em **26 de
dezembro de 2024** e remetido à Câmara dos Deputados em **17 de março de 2025**, onde permanece.
A última movimentação registrada na página do Senado é a remessa. O marco não trata de captura 3D,
e é isso que importa dizer: **o vazio normativo do tema 10 no Brasil não será preenchido por ele.**

**Onde foi o dinheiro.** O investimento brasileiro recente e grande em produção virtual foi para o
lado oposto ao deste mapa. Em **13 de julho de 2026**, Globo e Sony Professional Solutions Brasil
instalaram o que chamam de maior ambiente de produção virtual da América Latina para a Copa de
2026: **2.200 m²** nos Estúdios Globo no Rio, cerca de **800 gabinetes de LED** formando **~200 m²**
de superfície, painéis Crystal LED Verona (2,3 mm de pixel pitch, 1.500 nits, 7.680 Hz, >97% de
DCI-P3), rastreamento OCELLUS, Unreal Engine. **Nenhuma menção a captura volumétrica ou a splats.**
Ou seja: o Brasil investiu em **exibir mundo construído**, não em **capturar mundo existente**.

**E há tradição local do lado barato.** Um trabalho da UFRGS publicado na revista *Interações*
(Alencastro, Dantas, Silva e Jacques, 2019) testou fotogrametria e triangulação a laser em três
peças do Museu Júlio de Castilhos e concluiu que a fotogrametria levava vantagem sobre o laser,
inclusive por **menor curva de aprendizado**, com custo de implantação de **R$ 2.000 a R$ 3.500**.
Isso é anterior ao splatting e serve de linha de base: **a pergunta "dá para digitalizar acervo com
equipamento comum?" já era brasileira em 2019, e a resposta era sim, com 12 horas de trabalho por
peça.** O que mudou desde então não é a possibilidade; é o custo de aprendizagem e o tempo.

## 4. As disrupções-raiz

Três, conforme o recorte. Cada uma com o que rompe, o sinal datado do "por que agora", e a
precondição que ainda falta — que é o que impede o mapa de tratá-la como fato consumado.

### R1 — A captura de espaço deixa de ser serviço e vira gesto

**O que rompe.** A cadeia de produção de ambiente: modelar, texturizar e iluminar um lugar que
existe no mundo. E o serviço de tour virtual, que vendia equipamento mais operador mais pós.
A competência que perde valor não é "saber 3D": é **saber construir o que já está construído**.
A porta de entrada, no sentido de Christensen, é **mercado novo** — o corretor, o perito, o
professor, o dono da loja, gente que nunca foi cliente de estúdio 3D e agora produz ativo 3D
sozinha. Não é a baixa do mercado de VFX; é gente que não comprava nada.

**Por que agora, e não há cinco anos.** Três sinais datados que não existiam:
1. **14/01/2026** — Polycam leva captura espacial ao iPhone sem LiDAR (iPhone 13+), grátis; a
   empresa fala em ~800 milhões de aparelhos elegíveis e declara 34 milhões de capturas
   acumuladas.
2. **17/12/2025** — Apple abre o SHARP: 1,18 milhão de gaussianas de **uma** foto, em menos de um
   segundo, com aceleração Metal e CUDA e suporte a CPU.
3. **03/02/2026 e 27/04/2026** — a interoperabilidade fecha: `KHR_gaussian_splatting` em release
   candidate no glTF, e LOD hierárquico servindo 110 milhões de splats em 3,7 km² pela Cesium.

**O que ainda falta acontecer.** **Luz.** Enquanto splat chegar com iluminação assada e sem sombra
projetada, e enquanto nenhuma ferramenta comercial de criação oferecer reiluminação, o lugar
capturado é **cenário de fundo**, não material componível. Essa é a precondição nomeada, e ela
sustenta o galho e1.2 inteiro.

### R2 — A pessoa e o movimento viram capturáveis por câmera comum, e a aparência vira dado destacável do corpo

**O que rompe.** Duas coisas ao mesmo tempo. Primeiro, a cadeia de captura de movimento com
marcador — traje, volume calibrado, operador. Segundo, e mais fundo, **o pressuposto jurídico de
que reproduzir a aparência de alguém exige produção cara e rastreável**. Quando a captura é barata
e o registro é destacável, a proteção que dependia do custo some. A porta de entrada é de novo
**mercado novo**: quem nunca contratou mocap passa a gerar dado de movimento a partir de gravação
comum.

**Por que agora, e não há cinco anos.**
1. **13/11/2025** — Depth Anything 3 recupera geometria de qualquer conjunto de vistas, com ou sem
   pose, batendo o estado da arte anterior em 44,3% (pose) e 25,1% (geometria). Reconstrução deixa
   de exigir rig calibrado.
2. **26/06/2025** — a Dinamarca propõe emenda à Lei de Direito Autoral criando, nas seções 65-a e
   73-a, proteção contra imitação digital de performance e contra reprodução digital não autorizada
   de **traços corporais, rosto e voz** de **qualquer** pessoa, com exceções para paródia, sátira,
   caricatura e crítica social. Entrada em vigor esperada entre o fim de 2025 e 2026.
3. **05/05/2026** — a ação de Q'orianka Kilcher contra James Cameron e a Disney, no Distrito
   Central da Califórnia, alega que o rosto dela, fotografado aos 14 anos, foi desenhado, esculpido
   em maquete, **escaneado a laser em alta resolução** e distribuído entre fornecedores de VFX até
   virar Neytiri, sem consentimento. Os réus negam e pedem extinção, alegando que a semelhança não
   é reconhecível na obra final e que a ação é intempestiva. **O que importa aqui não é quem ganha:
   é que a disputa se desloca da obra exibida para a etapa de captura.**
   ⚠️ **Não consegui abrir fonte primária desta ação** — três tentativas, duas com HTTP 403 e uma
   com redirecionamento para paywall. Os dados vêm de resultados de busca convergentes e **não
   entram na seção 11**. A ressalva completa está em §12.8, e quem for citar este parágrafo deve
   conferi-lo antes.

**O que ainda falta acontecer.** **Captura de pessoa fotorreal por sensor comum, fora do
laboratório.** A Meta mostrou o caminho em 2022 e, em 2026, o estado público continua sendo
pesquisa dependente de rig de 100+ câmeras, sem reiluminação, em headsets sem rastreamento facial.
Enquanto essa precondição não cair, o que se captura de uma pessoa por câmera comum é **movimento**
e **aparência aproximada**, não presença. É a diferença entre os galhos e3 e e4.

### R3 — O registro capturado vira infraestrutura de terceiros, e a cópia vira índice consultável por máquina

**O que rompe.** O pressuposto de que registrar um lugar produz **um arquivo seu**. E, um andar
acima, a cartografia como bem público: o mapa que importa deixa de ser o que orienta uma pessoa e
passa a ser o índice que permite a uma máquina se localizar e agir. A competência que perde valor é
**cartografia como levantamento contratado** — porque o levantamento passa a ser subproduto do uso.
A porta de entrada é **mercado novo** e, aqui, também **baixa do mercado**: cobre-se primeiro o que
nenhum provedor de gêmeo digital queria atender — a loja, a quadra, o galpão de 300 m².

**Por que agora, e não há cinco anos.**
1. **17/09/2025** — Hyperscape Capture entra em acesso antecipado: processamento na nuvem,
   streaming a partir dos servidores da Meta, **sem acesso ao arquivo bruto**. O modelo de captura
   pessoal sem posse do artefato chega ao consumidor.
2. **07/04/2026** — Niantic Spatial relança Scaniverse como porta de entrada do Large Geospatial
   Model, com VPS 2.0 "em escala global" e NSDK 4.0 falando Unity, Swift, Android e **ROS 2**. O
   consumidor da captura passa a incluir explicitamente o robô.
3. **19/05/2026** — o Google conecta o Project Genie ao Street View: **mais de 280 bilhões de
   imagens, 110 países, sete continentes, 20 anos**, virando mundos navegáveis gerados quadro a
   quadro. O maior acervo de registro do mundo deixa de ser consultado e passa a ser **usado como
   condição de geração**.

**O que ainda falta acontecer.** **Qualquer norma que trate consentimento e propriedade de captura
de espaço.** Procurei e não encontrei. Enquanto não houver, a disputa acontece em termo de uso, e
termo de uso não é discutido por quem é capturado — é aceito por quem captura. Essa é a precondição
mais frágil do mapa, e é dela que dependem e5.2, e5.2.1 e, parcialmente, e2.2.

### Uma nota de convergência, que a roda não representa

As raízes 1 e 3 **se contradizem parcialmente**, e a árvore não tem notação para isso. R1 diz que
capturar vira gesto individual; R3 diz que o produto do gesto é acumulado por terceiro. Se R3 andar
mais rápido, R1 acontece **sem** produzir o mercado de ativos que e1.3 prevê — as capturas existem,
mas dentro de plataformas, não como bens negociáveis. Quem ler a árvore somando os galhos vai
superestimar o total. Isto está dito aqui porque não cabe em nenhum nó.

E há um efeito que só existe se R2 e R3 acontecerem **juntas**: um índice global de espaços
capturados em que pessoas aparecem incidentalmente, consultável por semelhança. Ele não está na
árvore, por regra; está na seção 6, como sinal fraco, que é onde deve estar.

## 5. A roda dos futuros

Método: **Futures Wheel** (Jerome C. Glenn, 1971; entrada na literatura em 1972). A árvore abaixo
é o resultado **depois** dos cortes da Fase 5 — seis efeitos foram mortos e três rebaixados de
confiança, e todos estão na seção 12 com o `id` original e a prova que os matou. A literatura da
roda **não traz regra de parada**; a que uso é minha e está declarada: **expande-se um nó só se o
filho mudar de ator ou de mecanismo em relação ao pai.** Paro o galho quando o filho é o pai em
outro volume, quando exige duas precondições não validadas ao mesmo tempo, quando já é verdade
hoje, ou quando só faz sentido com duas raízes.

```yaml
roda:
  - disrupcao: A captura de espaco deixa de ser servico e vira gesto, e qualquer camera comum produz um ativo 3D navegavel e publicavel
    efeitos:
      - id: e1
        ordem: 1
        efeito: O ambiente fotorrealista deixa de ser custo de producao e vira insumo de estoque, e o gargalo do 3D migra de fazer o ambiente para sanear, recortar e iluminar o que foi capturado
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O oficio de artista de ambiente se reorganiza em torno de captura e saneamento, e quem vende passa a ser quem sabe fotografar para reconstrucao e consertar o mundo capturado, nao quem modela do zero
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formacao em 3D troca modelagem por captura e direcao de luz, e a prova de competencia vira o registro do set de captura em vez do portfolio de malhas
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A iluminacao vira o diferencial escasso da cadeia, porque o splat chega com a luz assada, e quem sabe separar luz de materia cobra o que o modelador cobrava
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Reiluminacao deixa de ser recurso de ferramenta e entra na especificacao do formato, com canal de material separado do canal de cor como requisito de interoperabilidade
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: O lugar real vira bem licenciavel e catalogos de espacos capturados passam a concorrer com bibliotecas de assets sinteticos
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: Dono de imovel comercial passa a licenciar o proprio espaco como cenario e a cobrar por isso, e a prospeccao de locacao se reorganiza como catalogo consultavel
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O registro visual de um lugar passa a ser prova metrica, e fotografar deixa de apenas documentar e passa a medir
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Pericia, seguro e vistoria trocam o laudo ilustrado pela cena navegavel, e a disputa migra do que foi fotografado para como foi capturado
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Proveniencia assinada dentro do proprio arquivo 3D vira exigencia, e o splat sem assinatura de quem capturou, com que aparelho e quando perde valor probatorio
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Quem controla um espaco passa a proibir a captura como hoje proibe a fotografia, e proibido escanear vira placa na porta e clausula de contrato
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A regra de acesso a espaco publico incorpora a captura 3D como categoria propria distinta de filmar, e a liberdade de panorama precisa dizer se copia navegavel e representacao ou reproducao
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A pessoa e o movimento viram capturaveis por camera comum, e a aparencia vira dado destacavel do corpo
    efeitos:
      - id: e3
        ordem: 1
        efeito: A aparencia de uma pessoa vira ativo com procedencia, prazo e preco, capturavel por camera comum e negociavel fora do corpo
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O contrato de elenco e de figuracao passa a descrever a captura em si, o que foi escaneado, para que e por quanto tempo, e a negociacao sai do uso da imagem e entra no dado que a gerou
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Escanear alguem sem contrato vira ilicito autonomo, separado de publicar a imagem, e pune-se a captura mesmo quando nada foi divulgado
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A figuracao humana barata e substituida por multidao capturada uma vez e reencenada, e o trabalho de corpo migra de aparecer para licenciar
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Existir em banco de aparencia e de movimento vira item de negociacao coletiva, com tabela de captura ao lado da tabela de cache
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O movimento humano deixa de exigir instrumentacao e vira consequencia de qualquer gravacao, e todo acervo audiovisual passa a ser captura de movimento latente
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Quem tem arquivo de video passa a ter um ativo que nao sabia que tinha, e acervos viram base de treino de movimento sem terem sido gravados para isso
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O direito sobre o gesto se descola do direito sobre a imagem, e passa a existir licenciamento de movimento com titular distinto do titular do video
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Interface que le o corpo por camera comum deixa de ser recurso de acessibilidade e vira modo alternativo padrao de entrada, porque o custo do sensor dedicado caiu a zero
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: O registro capturado vira infraestrutura de terceiros, e a copia do mundo vira indice consultavel por maquina
    efeitos:
      - id: e5
        ordem: 1
        efeito: Capturar deixa de produzir arquivo e passa a produzir contribuicao, e quem capturou fica com a vista e nao com a copia
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O mapa 3D do mundo vira infraestrutura privada com cliente-maquina, e o comprador do mapa deixa de ser o humano que se localiza e passa a ser o sistema que age
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Localizar-se num lugar passa a depender de um indice privado, e a cobertura do mapa vira questao de politica publica como foi a cobertura de rede
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A troca por tras da captura fica visivel e quem escaneia passa a exigir contrapartida, com acesso, copia local e exclusao virando objeto de disputa no termo de uso
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Exportar o proprio espaco capturado vira direito reivindicado como portabilidade de dado, e o formato aberto e o que torna o pedido exequivel
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A copia navegavel do mundo deixa de ser feita so de captura e parte dela passa a ser gerada a partir do registro, misturando o que foi medido com o que foi preenchido
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Distinguir o medido do preenchido vira requisito de projeto de interface, e a cena passa a ter de mostrar onde acaba o registro e comeca a inferencia
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Detalhe inventado entra na norma de publicidade e de laudo, e exibir imovel, produto ou cena com regiao sintetizada sem marcacao vira infracao informacional
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

### 5.1 Comentário em prosa — o que a árvore não diz

**Por que e1 e e5 são os únicos de confiança alta.** Os dois cumprem as três condições. Sinal:
forte, com artefatos verificáveis e independentes já em uso (Polycam, Zillow SkyTour, Cesium,
Hyperscape, Scaniverse). Força contrária nomeada, com razão para perder: no caso de e1, a ausência
de reiluminação — que perde porque o uso dominante do splat é fundo, web e vistoria, onde luz
assada basta; no caso de e5, a exigência do usuário pelo arquivo — que perde porque o custo do
processamento está na nuvem e o aparelho não o faz. Caso histórico comparável: para e1, a entrada
da fotogrametria em produção de jogos ao longo dos anos 2010, que levou cerca de cinco anos entre
demonstração e pipeline padrão; para e5, o acervo pessoal de fotografias, que migrou para nuvem de
terceiro em prazo semelhante, também sem que ninguém tivesse decidido isso.

**Por que a terceira ordem está inteira em confiança baixa.** Terceira ordem não é mais profunda:
é mais **mediada**, e herda a incerteza de todos os elos. Onze efeitos de ordem 3, nenhum `alta`
— a cota permitia um. Se a minha terceira ordem tivesse saído confiante, a Fase 5 não teria sido
feita.

**Convergências que ficaram fora da árvore, por regra.**

- **e2.1.1 × e6.1.1** — proveniência assinada e marcação de detalhe inventado são o mesmo problema
  visto de dois lados: um pergunta *quem mediu*, o outro pergunta *o que não foi medido*. Se
  qualquer dos dois virar norma, o outro vem junto, e o formato de arquivo é onde os dois se
  encontram. Não pude ligar os nós na árvore porque pertencem a raízes diferentes.
- **R2 × R3** — um índice global de espaços capturados, consultável por semelhança, em que pessoas
  aparecem incidentalmente. Precisa das duas raízes: da captura barata de pessoa e do acúmulo por
  terceiro. Está na seção 6.
- **e1.3 × e5** — se o acúmulo por terceiro andar mais rápido que a posse do arquivo, e1.3
  simplesmente não acontece: os espaços capturados existem, mas dentro de plataformas, e não há
  mercado de licenciamento porque não há bem transferível. Os dois galhos estão na árvore como se
  somassem. Não somam.

**Uma assimetria de prazo que vale notar.** Os efeitos de primeira ordem caem entre 2028 e 2029,
dentro do horizonte. Os de terceira ordem, entre 2031 e 2033 — e **dez dos onze passam do horizonte**,
o que o formato permite e eu declaro aqui em vez de esconder: só e1.2.1 (2031) cai dentro de 2031;
e1.1.1, e1.3.1, e2.1.1, e3.2.1, e5.2.1 e e6.1.1 estão em 2032, e e2.2.1, e3.1.1, e4.1.1 e e5.1.1
em 2033. Os quatro de 2033 são exatamente os que dependem de **mudança normativa**, e mudança
normativa, nos casos comparáveis que encontrei (a proposta dinamarquesa levou de junho de 2025 a
2026 só para ter previsão de vigência; o PL 2338 brasileiro está há dezoito meses na Câmara), anda
em blocos de três a cinco anos. Terceira ordem que coubesse toda dentro do horizonte seria sinal de
que os prazos foram puxados para agradar ao recorte.

## 6. Sinais fracos e wildcards

Aqui entra o que não coube na árvore: o que exige duas precondições simultâneas, o que depende de
duas raízes, e o que é ainda demo, patente ou declaração. Nada disto tem prazo.

### 6.1 Sinais fracos

**Reconstrução como programa, não como dado.** O `img2threejs` (Apache 2.0, versão 2.0) reconstrói
o objeto de uma imagem de referência **como código**: uma função-fábrica em TypeScript que devolve
um `THREE.Group` montado de primitivas, shaders procedurais e geometria gerada, com hierarquia de
runtime — pivôs, encaixes, colisores — pronta para animar. A saída é "TypeScript diferenciável mais
um JSON de especificação — pequeno, revisável e versionável, em vez de arquivos de malha de vários
megabytes". Isto é o oposto exato do splat: o splat é denso, opaco e fiel; o código é esparso,
legível e aproximado. Se a linha do código pegar, **a discussão sobre posse da captura muda de
natureza**, porque código é obra derivada de leitura, não cópia de medida. É o sinal mais
interessante deste mapa, e o mais difícil de datar.

**Padrão de compressão de splat dinâmico.** O MPEG pediu material de teste até **15/10/2026** e
prepara chamada de propostas. Quando existir codec de 4DGS com anchor e processo competitivo,
vídeo volumétrico deixa de ser demonstração de fornecedor e passa a ser formato. Hoje o número
público é a faixa de entrega da Gracia — **17 a 75 Mbps** para quatro minutos, e ~80 Mbps a 120 mil
splats por quadro na qualidade plena.

**Proteção de propriedade sobre o próprio splat.** Levantamento submetido em **2 de fevereiro de
2026** (Zhao, Hong, Huang, Chen, Gong e Liu) organiza o campo de proteção de ativos 3DGS em
mecanismos de perturbação gaussiana, paradigmas passivos e ativos, e ameaças de robustez na era
generativa. Marca d'água em splat é campo de pesquisa antes de ser produto — e é a precondição
técnica de e2.1.1.

**Escâner que entrega as três representações de uma vez.** O XGRIDS apresentou no INTERGEO 2026 o
Lixel L3, que produz nuvem de pontos em cor verdadeira, malha **e** modelo 3DGS de uma única
passagem. Quando a escolha da representação deixa de ser decisão de captura e vira decisão de
consumo, o argumento "splat ou malha" perde importância — e a competência de quem captura fica
ainda mais na fotografia e menos no software.

**Forense com precisão de milímetro.** Cho e Woo (Hongik University), em *Frontiers in Computer
Science*, **9 de fevereiro de 2026**, mediram erro absoluto médio de **1,73 a 3,58 mm** em largura,
comprimento e altura, e **mediana de 0,3 mm** em objetos finos como manchas de sangue, usando DSLR
ou celular, recomendando abordagem híbrida. É o artefato que sustenta e2 — e é de um laboratório
que não vende ferramenta.

**Vagas antes de currículo.** 415 vagas abertas pedindo a competência, 665 rastreadas desde 2024.
É pouco em termos absolutos e muito em termos de derivada: o mercado de trabalho está formando a
categoria antes de a formação existir. É o sinal que antecede e1.1.1.

### 6.2 Wildcards

**Um splat de uma pessoa, capturado sem consentimento, usado em obra comercial.** Este era o
wildcard proposto pelo bloco da disciplina, e a rodada mudou a minha leitura dele: **ele já está
sendo ensaiado com tecnologia antiga.** O que a ação de 5 de maio de 2026 discute é um rosto
fotografado, esculpido e escaneado a laser em 2009, e a alegação central é que a cadeia de captura
— não a obra final — é o ilícito. Se a tese vencer, a captura vira o fato gerador da
responsabilidade, e todo o galho e3 antecipa. Se perder por "semelhança não reconhecível", o efeito
é o oposto e mais perverso: **quanto mais transformada a captura, mais segura** — o que premia
exatamente o pipeline neural, que transforma por construção.

**Uma cidade vende, ou proíbe, a própria cópia.** Um município decide que a representação
tridimensional navegável do seu território é bem público e a licencia — ou a proíbe. Precisa de
uma precondição que não existe em lugar nenhum que eu tenha conseguido apurar: alguma norma que
diga de quem é a cópia de um lugar. Foi por isso que o efeito correspondente saiu da árvore (ver
§12.6, id e5.3).

**O mapa gerado passa a ser preferido ao mapa medido em algum uso sério.** Hoje o próprio Google
descreve o Genie com Street View como experimento sem noção de física e "qualidade de videogame".
O wildcard é o dia em que alguém aceitar cena gerada onde hoje se exige medida — treino, vistoria,
projeto — porque cobre onde a medida não chega. Nesse dia, a distinção entre mapa e cópia deixa de
ser filosófica e vira cláusula de contrato.

**A reiluminação chega antes do esperado, em uma ferramenta comercial.** É o wildcard otimista, e é
o que mais deslocaria este mapa: destravaria e1.2 e e1.2.1, transformaria o lugar capturado de
cenário em matéria, e faria e1.3 (o mercado de espaços licenciáveis) deixar de depender de
plataforma. Não achei nenhuma entrega comercial; achei pesquisa. É por isso que está aqui e não na
árvore.

**Um formato único vence e fecha.** Hoje o caminho está aberto — glTF é Khronos, SPZ é MIT, o
editor de referência é MIT. O wildcard é o inverso do esperado: um ator com escala de captura
suficiente resolve que a interoperabilidade não lhe serve, e o mundo capturado se parte em ilhas.
A contra-evidência é que quem mais captura hoje (Niantic Spatial) é justamente quem doou o SPZ.

## 7. Contra o próprio mapa

Esta seção é a Fase 5 escrita. A bateria adversarial **derrubou seis efeitos e rebaixou três**, e
todos estão na seção 12 com o `id` e a prova que os matou. O que segue é o que sobreviveu, e o
preço que pagou.

### 7.1 As seis provas, aplicadas

**P1 — Extrapolação linear.** Procurei efeito que é só o presente em outro volume. Matou **e1.4**
("todo mundo passa a ter um gêmeo digital da própria casa"): mesmo ator, mesmo mecanismo, mais
capturas. Pegou também, em versão de rascunho, o e4.2 escrito como "captura por câmera substitui
todo sensor dedicado" — reescrito para "vira modo alternativo padrão", que é afirmação menor e
defensável, e mantido em confiança baixa.

**P2 — Velocidade de adoção.** Esta prova foi a mais produtiva da rodada, e a evidência que a
alimenta é o próprio contraexemplo da seção 3.3: **a Meta demonstrou avatar fotorreal por scan de
iPhone em 13/06/2022 e, em 2026, isso continua sendo pesquisa.** Quatro anos, um laboratório com
recursos ilimitados, e nenhum produto. Qualquer efeito deste mapa que dependesse de captura
fotorrealista de pessoa em prazo curto foi rebaixado ou morto por aqui — foi o caso de **e3.3**
(§12.6). O caso histórico comparável que uso para os efeitos que sobreviveram é a fotogrametria
em jogos: cerca de cinco anos entre demonstração e pipeline padrão. Nenhum prazo de ordem 1 deste
mapa é mais rápido que isso.

**P3 — Já aconteceu.** Matou **e2.3** ("turismo virtual navegável substitui parte da visita"):
já é produto hoje, e com nomes próprios — as cenas em destaque do Hyperscape incluem a cozinha de
Gordon Ramsay, a House of Kicks do Chance the Rapper e o octógono do UFC Apex. Não é efeito: é
estado da arte, e foi para a seção 3. Pegou também **e4.3** (análise biomecânica por celular vira
rotina em clínica e esporte) — já existe como produto, e, pior para a tese, **serve melhor ao mesmo
cliente do incumbente**: é sustentação, não disrupção.

**P4 — Força contrária.** Para cada efeito que sobreviveu, exijo quem perde e o que essa pessoa
pode fazer.
- Contra **e1**: o artista de ambiente, que perde escopo — e cuja defesa real não é política, é
  técnica: **a luz assada**. Enquanto splat não reiluminar, ele continua indispensável no que
  importa. Perde quando a ferramenta chegar, e não antes.
- Contra **e2**: o perito e o assistente técnico, que têm método estabelecido e vantagem
  processual, e cuja arma é a cadeia de custódia — objeção que não derruba o efeito, **produz** o
  efeito e2.1.1.
- Contra **e3** e **e4**: sindicatos e a própria litigância. Aqui a força contrária **encarece a
  captura em vez de impedi-la**, o que deixa e3.2 mais lento, não menos provável.
- Contra **e5**: o usuário que quer o arquivo, e o regulador de portabilidade de dados. É a força
  contrária mais fraca das cinco, porque hoje ninguém sabe que está trocando.
- Contra **e6**: quem depende de medida — seguradora, engenheiro, perito. Forte, e por isso e6.1
  está em confiança baixa e não em média.

**P5 — Precondição única.** Perguntei que aposta, se falhar, mata mais de três efeitos juntos.
Encontrei uma, e ela não estava na árvore: **"alguma norma vai definir de quem é a cópia de um
lugar"**. Se essa precondição falhar — e não achei absolutamente nada que a sustente — morrem
e5.2, e5.2.1, e2.2.1 e o wildcard da cidade. Por isso o efeito que dependia dela inteiro (e5.3)
foi retirado da árvore e mandado para a seção 6, e por isso os três que restaram estão todos em
confiança baixa. **Este é o ponto mais frágil do mapa, declarado.**

**P6 — Camada (CLA).** Passei os efeitos principais pelas quatro camadas de Inayatullah (1998).
- **Litania:** "qualquer um captura qualquer lugar em 3D com o celular". Verdadeiro como manchete.
- **Causas sistêmicas:** o que move não é a técnica, é **quem paga o processamento**. O splat é
  barato de exibir e caro de produzir, e esse custo mora na nuvem de alguém. É daí que sai R3, e é
  por isso que R3 tem sinal forte apesar de ser a menos discutida.
- **Visão de mundo:** o mapa inteiro repousa sobre a premissa de que **fidelidade ao real é o que
  se quer**. Ela é histórica, não natural. Se a métrica de sucesso virar *coerência* em vez de
  *fidelidade* — e o Genie com Street View é um sinal exatamente disso —, então e6 deixa de ser um
  efeito entre seis e vira a raiz, e boa parte da primeira ordem troca de sinal sem que um fato
  mude.
- **Mito/metáfora:** "o mundo como matéria-prima". A história que a cultura conta aqui é a do
  levantamento — cartografia, censo, cadastro — e ela sempre veio com a pergunta de quem levanta e
  para quem. Este mapa herda essa pergunta e não a resolve.
  **O achado da CLA:** o efeito **e6.1.1** — marcação obrigatória de detalhe inventado — existe hoje
  **só na litania**. É a manchete "o público tem direito de saber o que é real". Abaixo dela não há
  mecanismo: não achei norma, não achei processo, não achei quem pagaria a fiscalização. Mantido
  com confiança baixa, e assinalado aqui.

### 7.2 Cota de dano — o preço que a contestação cobrou

Por disrupção-raiz, pelo menos um efeito morto ou rebaixado:

| Raiz | Morto | Rebaixado |
|---|---|---|
| R1 | e1.4 (P1), e2.3 (P3) | e1.1: alta → **media** |
| R2 | e3.3 (P2, P4), e4.3 (P3) | e3.1: alta → **media** |
| R3 | e5.3 (P5), e6.2 (P2, P6) | e5.1: alta → **media** |

**A bateria derrubou coisa.** Seis efeitos de vinte e cinco escritos, e três rebaixamentos. O que
ela **não** conseguiu derrubar foram e1, e2 e e5, e é honesto dizer por quê: os três têm produto em
produção com nome, data e número, e a prova P3 ("já aconteceu") quase os pegou — o que, em vez de
matá-los, empurrou o enunciado deles para o que ainda não aconteceu.

### 7.3 O falsificador — o que me faria mudar de ideia

Duas coisas foram declaradas no recorte, e as duas foram testadas:

**(a) "Evidência de que a adoção já passou da maioria inicial (Rogers)."** Não encontrei. Ao
contrário: 34 milhões de capturas da Polycam contra cerca de 800 milhões de aparelhos elegíveis é
da ordem de **4%** — inovadores, no vocabulário de Rogers, talvez começo de adotantes iniciais.
415 vagas abertas no mundo é mercado nascente. O Hyperscape está em acesso antecipado, maiores de
18, nos EUA. A Zillow limita a exteriores de anúncios premium. **O falsificador não disparou.**
Mas registro o que o faria disparar: se o número de capturas mensais de qualquer plataforma passar
a crescer em ordem de grandeza sem campanha, ou se um sistema operacional embarcar captura
espacial como recurso padrão da câmera, este mapa vira roadmap e deve ser refeito.

**(b) "Evidência de que a tecnologia não rompe nada — só melhora o que existe."** Esta
**disparou parcialmente, e o mapa mudou por causa dela.** Renderização neural como técnica reprova
na régua: é mais rápido e mais barato fazer o que fotogrametria já fazia. Foi por isso que 3DGS,
SPZ, glTF, LOD e o hardware de US$ 15–25 mil foram para a seção 3 como substrato e **não** viraram
disrupção-raiz. O que sobrou como raiz não é a técnica: é (R1) a mudança de quem captura, (R2) a
mudança do que é capturável de uma pessoa, e (R3) a mudança de quem fica com o resultado. Se o
leitor discordar de que essas três rompem algo, o mapa inteiro cai — e é assim que ele deve ser
lido.

### 7.4 As fragilidades que restam, ditas sem enfeite

1. **Nenhuma norma sustenta R3.** Já dito em P5. É a viga mais fina.
2. **Dois dos artefatos que mais uso são declarações de empresa sobre si mesma.** Os 34 milhões de
   capturas da Polycam e as "milhões de capturas" do Scaniverse não têm auditoria independente.
   Estão citados como declaração, e não como medida.
3. **A contagem de mercado vem de uma fonte só.** Os números de 9 de julho de 2026 — 212
   ferramentas, 415 vagas, US$ 1,5 bilhão, 749 artigos — vêm todos do mesmo levantamento. Não achei
   levantamento independente para conferir.
4. **O recorte geográfico é global com nota, e a nota é fina.** Do Brasil eu apurei lei,
   jurisprudência, um projeto de lei parado e um investimento grande no lado oposto. **Não** apurei
   adoção brasileira de captura neural — nem número de usuários, nem estúdio, nem contrato público.
   Isso é lacuna, não conclusão.
5. **O mapa não modela retroalimentação.** A roda é árvore. As raízes 1 e 3 se anulam parcialmente
   (§4, nota de convergência) e isso só pôde ser dito em prosa. Quem somar os galhos vai
   superestimar.

## 8. O que a máquina errou

Registro nesta seção os erros desta rodada, incluindo os que só apareceram por atrito externo —
duas fontes discordando, um resumo sem a frase prometida, uma data que não batia. Nenhum foi pego
por releitura atenta.

**1. Duas datas incompatíveis para o mesmo lançamento, no mesmo resumo.** Um resultado de busca
afirmou que o Hyperscape Capture "entrou em acesso antecipado em julho de 2026" e, três linhas
adiante, que "o rollout começou em setembro de 2025". As duas não podiam estar certas. Abri as
duas fontes primárias: a TechCrunch de **17/09/2025** e o hands-on da UploadVR dizem a mesma coisa
— acesso antecipado a partir de 17 de setembro de 2025, Quest 3 e 3S, maiores de 18, EUA. **A data
de 2026 não foi confirmada por nenhuma fonte que eu tenha aberto, e foi descartada.** Este é
exatamente o erro que o `DUVIDAS.md` da skill descreve: data inferida de expressão relativa
apresentada no mesmo tom de uma data exata.

**2. Números atribuídos a uma página que não os contém.** Resumos de busca atribuíram à página
*World Models 2026* da Niantic Spatial os números "30 bilhões de imagens posadas", "10 milhões de
scans" e "1 milhão de locais ao vivo". **Abri a página: ela não traz número algum.** Os números
parecem vir de outras páginas (GeekWire, The New Stack) que **não consegui abrir** — a primeira
devolveu HTTP 403, a segunda entregou só menu e formulário. Portanto **não os afirmo em lugar
nenhum deste mapa**, embora fossem convenientes: eram a melhor evidência quantitativa para R3.
O mapa ficou mais fraco por causa disso, e é assim que tinha de ficar.

**3. Uma versão datada quatro anos à frente do que era.** Um resultado listava "SuperSplat 2.0"
entre novidades de 2026. O post do PlayCanvas é de **13 de fevereiro de 2025**. Corrigido no
corpo. O erro não muda nenhuma conclusão, mas mudaria o argumento de "por que agora" se tivesse
passado.

**4. O erro que teria invertido o sinal de uma raiz inteira.** No primeiro levantamento, o artigo
da UploadVR sobre geração de Codec Avatars por scan de iPhone entrou na pilha de "sinais recentes".
Ele é de **13 de junho de 2022**. A diferença não é de grau: como *sinal recente*, ele diria que a
captura fotorreal de pessoa está chegando; como artefato de 2022 sem produto em 2026, ele diz o
contrário — **quatro anos, um laboratório sem restrição de recurso, e nada embarcou**. Percebi
porque o texto falava em "avatares básicos e cartunescos de hoje" como se fosse o presente, e não
é. Essa correção é a origem da prova P2 desta rodada e da morte de e3.3.

**5. Uma fonte que eu queria citar e não abriu.** Precisava sustentar a afirmação de que os
estúdios de VFX estão montando pipeline de splat sobre a equipe de fotogrametria que já tinham, e
a citação óbvia era uma matéria da *British Cinematographer* com uma frase atribuída ao laboratório
de captura da Framestore. O servidor devolveu **HTTP 403**. Como não abri, **a afirmação não entra
no mapa e a fonte não entra na seção 11** — o que me obrigou a sustentar e1.1 só com os números de
vaga, que é evidência mais fraca e está declarada como tal.

**6. O que não consegui apurar, e fica escrito como não apurado.**
- Número de usuários ou de downloads do Scaniverse e do Luma. Vi "2,5 milhões de downloads" para o
  Luma num agregador de apps; não abri a fonte primária e não uso o número.
- Qualquer norma, projeto ou diretriz sobre consentimento para escaneamento 3D de espaço.
- Adoção brasileira de captura neural: usuários, estúdios, contratos.
- A data de lançamento do Xgrids Lixel L2 Pro. A página do produto não informa.
- Se a lei dinamarquesa entrou em vigor. As fontes que abri falam em proposta de 26/06/2025 e
  expectativa de vigência entre o fim de 2025 e 2026; **não** encontrei confirmação de promulgação,
  e por isso o texto diz "propôs", não "aprovou".

## 9. Três cenários para 2031

Os três partem dos **mesmos** fatos da seção 3 e das mesmas três raízes. O que muda entre eles é
qual força ganhou: a ferramenta, a plataforma ou a norma.

### 9.1 Desejável — "a captura vira matéria, e a matéria tem dono"

A reiluminação chega a uma ferramenta comercial de criação por volta de 2028. O lugar capturado
deixa de ser cenário e vira material: o splat traz canal de cor separado do canal de material, e o
formato absorve isso porque o Khronos já tinha a extensão base e a governança para estendê-la
(e1.2.1). A consequência menos óbvia é de emprego: em vez de o artista de ambiente desaparecer, o
**gargalo se desloca para a direção de luz** — profissão que existia, encolheu com o fotorrealismo
pré-calculado e volta a ser cara (e1.2).

Em paralelo, a proveniência assinada pega por um caminho que ninguém previu: não pela cultura, mas
pelo **seguro**. Perícia e vistoria adotam cena navegável (e2.1), o adversário processual ataca a
cadeia de custódia, e a resposta do mercado é assinar o arquivo — quem capturou, com quê, quando
(e2.1.1). A partir do momento em que existe assinatura no arquivo por razão probatória, ela passa a
servir para tudo: marcar o que foi medido e o que foi preenchido (e6.1) vira quase gratuito.

Em 2031: você captura seu apartamento com o telefone, exporta em glTF com SPZ, e o arquivo é seu —
não porque um regulador determinou, mas porque o formato aberto tornou a exportação trivial e
alguma plataforma usou isso como diferencial competitivo (e5.2.1). O Brasil entra tarde e por uma
porta lateral: o precedente do STJ de 2016 é invocado num caso de splat comercial de fachada, e a
distinção entre representar a paisagem e reproduzir a obra passa a orientar contrato de captura
urbana.

**O que precisa dar certo:** reiluminação comercial; um caso de perícia que force assinatura; e
uma plataforma que escolha abertura como estratégia. **Confiança:** baixa. É o cenário que exige
três coisas boas simultâneas.

### 9.2 Indesejável — "todo mundo captura, ninguém tem"

A reiluminação não chega. O splat continua sendo fundo, e o fundo continua sendo o uso dominante —
imobiliário, vistoria, web, cenário de LED. Isso mantém R1 verdadeira e **impede e1.3**: não há
mercado de espaços licenciáveis porque não há bem transferível, só serviço de plataforma.

R3 ganha por inércia. O custo do processamento continua na nuvem, o arquivo bruto continua não
saindo, e o padrão de fato vira "capture aqui, veja aqui". Os índices espaciais que importam —
onde uma máquina se localiza — são dois ou três, todos privados, todos alimentados por captura de
usuário (e5, e5.1). A cobertura vira o novo mapa de desigualdade: onde há gente capturando, há
serviço; onde não há, não há (e5.1.1) — e no Brasil isso reproduz, com outra tecnologia, a mesma
geografia do CEP e da entrega.

Do lado das pessoas, a litigância decide sozinha o que a norma não decidiu. Se a tese de que a
semelhança transformada não é reconhecível prevalecer, **transformar mais vira a defesa** — e o
pipeline neural, que transforma por construção, fica mais seguro juridicamente do que a
fotografia. O efeito perverso: proteger-se passa a exigir provar que você é reconhecível, o que
significa que **quem é menos conhecido é menos protegido**. A figuração barata é a primeira a
sentir (e3.2), e não há tabela coletiva a tempo (e3.2.1 não acontece até 2031).

E o mais silencioso: a mistura entre medido e gerado se consolida sem marcação (e6.1 não acontece),
porque marcar custa e ninguém exige. Em 2031 você não sabe, olhando uma cena, se aquela parede foi
medida ou completada — e a pergunta deixa de ser feita, que é como essas coisas terminam.

**O que precisa dar certo para este cenário acontecer:** nada. É o cenário de inércia, e por isso é
o mais provável dos três. **Confiança:** média.

### 9.3 Surpreendente — "a cópia perde para a descrição"

A superfície vira código. O caminho do `img2threejs` — reconstruir o objeto de uma imagem **como
programa procedural**, não como dado — encontra o caminho dos modelos de mundo, e por volta de
2029 fica mais barato **descrever** um lugar do que **carregá-lo**. Um espaço de 3,7 km² deixa de
ser 110 milhões de gaussianas e passa a ser alguns megabytes de especificação mais um gerador.

A consequência jurídica é a que ninguém está preparando: **código não é cópia**. Uma
representação procedural de um prédio é obra derivada de leitura, não reprodução de medida — e o
artigo 48 da Lei 9.610/98, o precedente do STJ e a proposta dinamarquesa foram todos escritos
pensando em *reprodução*. O regime inteiro de e2.2.1, e3.1.1 e e5.2.1 é construído sobre uma
noção de cópia que passa a não descrever o artefato dominante.

A consequência estética é maior. O mapa inteiro pressupõe que **fidelidade é o que se quer** — é a
visão de mundo que a CLA expôs em §7.1. Se descrever ficar mais barato que copiar, o que se
otimiza deixa de ser fidelidade e passa a ser **coerência**: o lugar não precisa ser aquele, precisa
ser plausível naquele. A pergunta "o que é real nesta cena" perde o sentido não porque foi
respondida, mas porque deixou de ser a pergunta que o sistema faz. E aí o tema 10 deixa de existir
como tema: ele se dissolve no tema do mundo gerado.

**O que precisa dar certo:** que reconstrução procedural alcance qualidade utilizável. Hoje ela
alcança objetos, não lugares. **Confiança:** baixa — e é o cenário que eu mais gostaria de estar
errado ao considerar improvável.

## 10. O experimento

**Nome.** O inventário do que não foi medido.

**A pergunta que ele responde.** Não "qual representação é mais bonita", e sim **qual delas
sustenta afirmação factual sobre o mundo, e em que ponto ela passa a mentir com confiança**. É a
pergunta de e6.1 posta em sala, com corpo.

**Por que este e não outro.** Porque é o único efeito deste mapa que pode ser testado numa aula,
com equipamento que a turma já tem, e cujo resultado **não é previsível por quem projeta**. Todo
mundo acha que sabe onde a reconstrução falha. Medir onde ela falha **para quem não viu o
original** é outra coisa.

**Montagem — 90 minutos, quatro grupos.**

*Fase 0 — a escolha do lugar (10 min).* A turma escolhe um canto de espaço do CIn com três
propriedades obrigatórias: tem objeto pequeno com detalhe legível (um cartaz, uma tomada, uma
rachadura), tem profundidade (não é parede chapada) e tem pelo menos um objeto parcialmente
oculto. O professor registra à parte, por escrito e sem mostrar a ninguém, o **gabarito**: dez
perguntas factuais de resposta única e verificável — quantas cadeiras, de que cor é a tomada, o
que está escrito no cartaz, há quantas tomadas atrás do armário, qual objeto está atrás do vaso.

*Fase 1 — três representações, 20 minutos, em paralelo.*
- **Grupo A — uma foto.** Tira **uma** fotografia do canto e reconstrói com um modelo de imagem
  única (`SHARP` da Apple, ou qualquer serviço equivalente disponível). Saída: cena navegável.
- **Grupo B — trinta segundos de vídeo.** Grava um giro de 30 s com celular e gera um splat
  (Polycam, Scaniverse ou Luma). Saída: cena navegável.
- **Grupo C — só palavras.** **Não fotografa.** Escreve uma descrição do canto em, no máximo, 200
  palavras, e usa essa descrição para gerar uma cena com qualquer gerador disponível. Saída: cena
  navegável.

Regra dura: ninguém dos grupos A, B e C fala com o grupo D.

*Fase 2 — o inventário (25 min).* O **grupo D**, que **não viu o lugar**, recebe as três cenas sem
saber qual é qual. Responde as dez perguntas do gabarito **três vezes**, uma por cena, e para cada
resposta marca a confiança em três níveis: chutei / acho / tenho certeza.

*Fase 3 — a virada (15 min).* O professor abre o gabarito. Calcula-se, por representação:
1. **acertos** (quantas das dez);
2. **erros com certeza** — respostas erradas marcadas "tenho certeza". **Esta é a medida
   principal.** Não é o erro que importa; é o erro confiante;
3. **abstenções** — quantas vezes a cena não sustentou resposta nenhuma;
4. o **ponto de descoberta**: em que pergunta, se em alguma, o grupo D percebeu que estava olhando
   para detalhe inventado, e o que denunciou.

*Fase 4 — a segunda pergunta, que é a incômoda (20 min).* Com as três cenas ainda abertas, a turma
responde em conjunto: **quem apareceu nessas capturas sem ter sido perguntado?** Conta-se pessoas
reconhecíveis, objetos pessoais, telas ligadas, papel com nome. E depois: **onde está cada uma das
três cenas agora** — no aparelho, no servidor de quem, sob que termo, com qual possibilidade de
apagar. É a seção 3.3 e a raiz R3 viradas para dentro da própria sala.

**O que se mede, em uma linha.** Acertos, erros confiantes, abstenções e ponto de descoberta, por
representação; mais a contagem de presenças não consentidas e a localização final de cada arquivo.

**A hipótese — declarada antes, para poder estar errada.** A cena de vídeo (B) ganha em acertos. A
cena de uma foto (A) ganha em **erros confiantes**, porque preenche o que não viu com plausibilidade
alta. A cena descrita (C) perde nos três primeiros indicadores e **ganha no ponto de descoberta**:
é a que denuncia mais cedo que é inventada, e por isso é a menos perigosa. Se essa hipótese se
confirmar, o efeito e6.1 deixa de ser conjectura e vira requisito medido: **o risco de uma
representação é proporcional à sua plausibilidade, não à sua imprecisão.**

**O que fazer se der o contrário.** Se A não produzir erro confiante, e6 fica mais fraco e o mapa
precisa dizer isso. Se B produzir mais erro confiante que A — plausível, porque splat de 30
segundos tem buraco preenchido com textura convincente —, então o efeito é maior do que o mapa
previu, e e6.1 devia estar em confiança média.

**Custo.** Zero em dinheiro; três celulares, uma conta gratuita de cada serviço, e uma sala.
**Risco.** O único é o da fase 4, e é deliberado: capturar a sala de aula **é** capturar as pessoas
que estão nela. Se alguém não quiser aparecer, a captura se refaz — e esse refazer é o dado mais
importante da aula.

## 11. Fontes

Trinta e duas fontes, **todas abertas nesta sessão**. Onde uma fonte não abriu, ela não está aqui e
o fato que ela sustentaria não está no mapa (ver §8.5). Datas são as das publicações.

**A técnica e o padrão**

1. Kerbl, Kopanas, Leimkühler, Drettakis — *3D Gaussian Splatting for Real-Time Radiance Field
   Rendering*, ACM TOG (SIGGRAPH 2023), jul/2023 — `https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/`
2. Kerbl — *The Impact and Outlook of 3D Gaussian Splatting*, arXiv, 30/10/2025 —
   `https://arxiv.org/abs/2510.26694`
3. Khronos Group — *Khronos Announces glTF Gaussian Splatting Extension*, 03/02/2026 —
   `https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release`
4. Cesium — *Introducing 3D Gaussian Splats with Hierarchical Level of Detail Using 3D Tiles*,
   27/04/2026 — `https://cesium.com/blog/2026/04/27/3d-gaussian-splats-lod/`
5. Radiance Fields — *MPEG Calls for Dynamic Gaussian Splat Test Material*, 04/08/2026 —
   `https://radiancefields.com/mpeg-calls-for-dynamic-gaussian-splat-test-material-ahead-of-a-coding-call-for-proposals`
6. PlayCanvas — *Publish Your Gaussian Splats with SuperSplat 2.0*, 13/02/2025 —
   `https://blog.playcanvas.com/publish-your-gaussian-splats-with-supersplat/`

**O mercado e o hardware**

7. Radiance Fields — *Gaussian Splatting Statistics*, dados de 09/07/2026 —
   `https://radiancefields.com/gaussian-splatting-statistics`
8. THE FUTURE 3D — *Xgrids L2 Pro Scanner* (ficha de equipamento, consultada em 17/09/2026) —
   `https://www.thefuture3d.com/equipment/xgrids-l2-pro/`

**Captura de espaço em produto**

9. Polycam — *Polycam Brings Free 3D Scanning to 800M iPhone Users, No LiDAR*, 14/01/2026 —
   `https://poly.cam/press-release/space-mode-access-expanded-2026`
10. TechCrunch — *Meta launches Hyperscape technology to turn real-world spaces into VR*,
    17/09/2025 — `https://techcrunch.com/2025/09/17/meta-launches-hyperscape-technology-to-turn-real-world-spaces-into-vr`
11. UploadVR — *Hands-On: Meta Horizon Hyperscape Captures Photorealistic VR Scenes On Quest 3*,
    set/2025 — `https://www.uploadvr.com/meta-horizon-hyperscape-photorealistic-scene-capture-quest-3/`
12. Radiance Fields — *Zillow Adds Gaussian Splatting Support with SkyTour Unveiling*, 16/07/2025 —
    `https://radiancefields.com/zillow-adds-gaussian-splatting-support-with-skytour-unveiling`

**Reconstrução a partir de pouca imagem**

13. UploadVR — *Apple's Open-Source On-Device AI Instantly Turns Images Into Volumetric Scenes*,
    dez/2025 — `https://www.uploadvr.com/apple-sharp-open-source-on-device-gaussian-splatting/`
14. 9to5Mac — *Apple's new open-source model turns 2D photos into 3D views*, 17/12/2025 —
    `https://9to5mac.com/2025/12/17/apple-sharp-ai-model-turns-2d-photos-into-3d-views/`
15. Lin, Chen, Liew, Chen, Li, Shi, Feng, Kang — *Depth Anything 3: Recovering the Visual Space
    from Any Views*, arXiv, 13/11/2025 — `https://arxiv.org/abs/2511.10647`
16. img2threejs — README do repositório (Apache 2.0, v2.0), consultado em 17/09/2026 —
    `https://github.com/img2threejs/img2threejs/blob/main/README.md`

**O mapa como infraestrutura**

17. Niantic Spatial — *Mapping the World For Machines with Scaniverse*, 07/04/2026 —
    `https://www.nianticspatial.com/en/blog/scaniverse`
18. Niantic Spatial — *Niantic Spatial & The Large Geospatial Model* (world models 2026),
    consultado em 17/09/2026 — `https://www.nianticspatial.com/blog/world-models-2026`
19. TechCrunch — *Google's Genie world model can now simulate real streets with Street View*,
    19/05/2026 — `https://techcrunch.com/2026/05/19/googles-genie-world-model-can-now-simulate-real-streets-with-street-view/`

**Pessoa, movimento e vídeo volumétrico**

20. Move.ai — página de produtos (Genesis), consultada em 17/09/2026 — `https://move.ai/products`
21. UploadVR — *Meta Got 3 Full-Body Codec Avatars Running On Quest 3* (SqueezeMe), 04/08/2025 —
    `https://www.uploadvr.com/meta-squeezeme-mobile-ready-distillation-of-gaussian-full-body-avatars/`
22. UploadVR — *Meta's Prototype Photoreal Avatars Can Now Be Generated With An iPhone*,
    13/06/2022 — `https://www.uploadvr.com/meta-codec-avatars-iphone-scan/`
23. Radiance Fields — *4D Gaussian Splatting (4DGS): Volumetric Video, Explained*, consultado em
    17/09/2026 — `https://radiancefields.com/4d-gaussian-splatting`
24. CG Channel — *DNE and Gracia release 4-minute streamable 4DGS performance*, 27/04/2026 —
    `https://www.cgchannel.com/2026/04/dne-and-gracia-release-4-minute-streamable-4dgs-performance/`

**Prova, direito e proteção**

25. Cho, Woo — *Accuracy of three-dimensional Gaussian Splatting for virtual crime scene
    reconstruction*, Frontiers in Computer Science, 09/02/2026 —
    `https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2026.1755361/full`
26. Zhao, Hong, Huang, Chen, Gong, Liu — *Intellectual Property Protection for 3D Gaussian
    Splatting Assets: A Survey*, arXiv, 02/02/2026 — `https://arxiv.org/abs/2602.03878`
27. Schjødt — *Owning the Self: Denmark's Copyright Turn Against Deepfakes*, 03/09/2025 —
    `https://schjodt.com/news/owning-the-self-denmarks-copyright-turn-against-deepfakes`
28. ArchDaily Brasil — *Superior Tribunal de Justiça reconhece direito autoral de imagem de obra
    arquitetônica* (3ª Turma, rel. min. Marco Aurélio Bellizze, 30/11/2016) —
    `https://www.archdaily.com.br/br/802551/superior-tribunal-de-justica-reconhece-direito-autoral-de-imagem-de-obra-arquitetonica`
29. Senado Federal — ficha de tramitação do **PL 2338/2023** (aprovado no Plenário em 26/12/2024;
    remetido à Câmara em 17/03/2025) —
    `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`

**Trabalho e Brasil**

30. GDC — *GDC 2026 State of the Game Industry Reveals Impact of Layoffs, Generative AI, and More*
    (mais de 2.300 respondentes; 64% em arte visual e técnica veem impacto negativo da IA
    generativa; 28% demitidos em dois anos) —
    `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
31. Tela Viva — *Globo e Sony implementam estúdio de produção virtual para a Copa do Mundo de
    2026*, 13/07/2026 — `https://telaviva.com.br/13/07/2026/globo-e-sony-implementam-estudio-de-producao-virtual-para-a-copa-do-mundo-de-2026/`
32. Alencastro, Dantas, Silva, Jacques — *Ferramentas de digitalização 3D faça-você-mesmo na
    preservação do patrimônio cultural*, Interações (Campo Grande), UFRGS, abr–jun/2019 —
    `https://www.scielo.br/j/inter/a/JFxBx6R5srj7PL3Kt3f5ndP/`

**Fontes que eu queria e não abri** (registradas para que ninguém as procure achando que estão
citadas): GeekWire sobre o lançamento da Niantic Spatial (HTTP 403); The New Stack sobre o Large
Geospatial Model (página sem conteúdo); Creative Bloq sobre artistas 3D em 2026 (página sem
conteúdo); British Cinematographer sobre splats em produção virtual (HTTP 403); Variety e escritório
Asher Hoffman sobre o caso Kilcher (redirecionamento e HTTP 403 — o caso é citado a partir de
resultados de busca e está assinalado como tal em §12.8); briefing do Parlamento Europeu sobre a
lei dinamarquesa (PDF ilegível).

## 12. Anexo — o levantamento bruto

Sem edição e sem limite. O que foi perguntado, o que foi assumido, o que foi recusado, o que foi
morto, o que foi buscado e não deu em nada. É a seção mais longa por decisão da ferramenta, e é
normal que seja.

### 12.1 A entrevista — as nove perguntas e as respostas recebidas

A Fase 1 da skill é bloqueante e exige as nove perguntas de uma vez. Elas foram feitas; as
respostas vieram do enunciado da rodada, **sem interlocutor disponível para uma segunda rodada de
perguntas**. Registro as duas colunas para que se saiba o que foi respondido e o que foi assumido.

| # | Pergunta | Resposta recebida |
|---|---|---|
| 1 | Tema e fronteira | Tema: "Captura de realidade e renderização neural" (tema 10 de 19, família "Percepção e mídia sintética"). **A fronteira não foi respondida** — foi construída por mim a partir do bloco da disciplina. Ver §12.2. |
| 2 | Horizonte | 2031 |
| 3 | Recorte geográfico | Global, com uma nota sobre o Brasil |
| 4 | Para quem | Quem projeta mídia e interação |
| 5 | O que já está descartado | "O que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão" |
| 6 | Viés desejado | Neutro |
| 7 | O que faria mudar de ideia | Evidência de que a adoção já passou da maioria inicial (Rogers), **ou** de que a tecnologia não rompe nada — só melhora o que existe |
| 8 | Quantas disrupções-raiz | **Não respondida.** Assumi **3**. Ver §12.3. |
| 9 | Posso navegar? | Sim — WebSearch e WebFetch de verdade, citando só o que foi aberto |

As **perguntas condicionais** da §1.2 da skill teriam disparado em dois casos, e registro os dois
porque não pude fazê-las:

- **Colisão de fronteira com vizinho.** O tema 10 encosta no 9 (modelos de mundo para agente
  corporificado), no 11 (percepção aberta por conceito) e no 15 (distribuição de 3D na web).
  Resolvi sozinho, com os três cortes da §2, e a decisão está declarada lá — não escondida aqui.
- **Coerência do horizonte.** 2031 é curto para o que depende de norma (R2 e parte de R3) e
  adequado para o que depende de produto (R1). Não rebaixei o horizonte; **declarei a assimetria**
  na §2 e deixei quatro efeitos de ordem 3 caírem em 2033, o que o formato permite.

### 12.2 O recorte fechado, com as suposições declaradas

O bloco de echo-back da skill exige confirmação explícita e proíbe aceitar silêncio como
confirmação. **Não havia interlocutor.** Registro o bloco como ele ficou, com as suposições
marcadas, e a rodada seguiu sob elas — o que é, em si, um desvio do método, e está dito.

```
RECORTE FECHADO — assumido sem confirmação (não havia interlocutor nesta rodada)
  tema ................ Transformar registro de sensor comum em ativo 3D navegável, e o que
                        acontece com esse registro depois que ele existe
  não é ............... [SUPOSIÇÃO MINHA] não é robô aprendendo em mundo simulado (tema 9);
                        não é distribuição de 3D/XR pelo navegador (tema 15);
                        não é percepção/segmentação por conceito (tema 11);
                        [SUPOSIÇÃO MINHA] não é fotogrametria clássica, laser nem mocap com
                        marcador — maduros, entram como linha de base
  horizonte ........... 2031
  região .............. global, com nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... o que já é comum em produto de massa (régua da disciplina)
  viés ................ neutro
  falsificador ........ adoção já passou da maioria inicial (Rogers), OU a tecnologia só melhora
                        o que existe
  raízes .............. 3  [SUPOSIÇÃO MINHA — não foi respondido]
  navegação ........... sim
  SUPOSIÇÕES MINHAS ... a fronteira (3 cortes herdados + 1 meu); o número de raízes
```

**Por que três cortes e não outros.** A skill manda propor três cortes concretos quando a fronteira
não vem. Os três primeiros são os vizinhos nomeados no próprio bloco da disciplina — herdá-los é
mais defensável do que inventar. O quarto (fotogrametria, laser, marcador) veio da frase "onde
passa a linha" do bloco, e é o que faz a Fase 2 ter o que recusar.

### 12.3 Por que três raízes, e não duas nem quatro

Duas deixariam de fora ou a questão da pessoa (R2) ou a da propriedade do registro (R3), e as duas
têm sinal datado próprio — não são consequência uma da outra. Quatro exigiriam promover a
**geração** (Genie com Street View) a raiz, e isso atravessa a fronteira com o tema 9. Ela ficou
como efeito de primeira ordem de R3 (e6) e como cenário surpreendente (§9.3), que é onde ela cabe
sem romper o recorte. Três também é o número que mantém a largura da roda dentro dos limites da
§4.1 da skill sem espremer nenhuma raiz.

### 12.4 Fase 2 — a triagem de maturidade, candidata por candidata

Onze candidatas passaram pelos cinco testes. **Sete foram recusadas.** A tabela registra o teste
que reprovou cada uma, como a skill exige.

| Candidata | T1 régua | T2 substituição | T3 por que agora | T4 precondição | T5 rotina | Veredito | 3H |
|---|---|---|---|---|---|---|---|
| Fotogrametria clássica (SfM-MVS) | reprova | reprova | não | nada falta | **sim** | **MADURO** | H1 |
| Escaneamento a laser terrestre | reprova | reprova | não | nada falta | **sim** | **MADURO** | H1 |
| Mocap óptico com marcador | reprova | reprova | não | nada falta | **sim** | **MADURO** | H1 |
| 3DGS como técnica de renderização | reprova | reprova | sim (glTF 03/02/26) | nada falta | **sim** | **MADURO** | H1/H2− |
| Compressão e streaming de splat (SPZ, 3D Tiles, LOD) | reprova | reprova | sim (27/04/26) | codec dinâmico | **sim** | **MADURO** | H2− |
| Escâner de mão com saída GS nativa (Lixel L2 Pro) | reprova | reprova | sim | nada falta | **sim** | **MADURO** | H2− |
| Parede de LED / produção virtual | reprova | reprova | sim (13/07/26) | nada falta | **sim** | **MADURO** | H1 |
| Captura de espaço por telefone sem sensor dedicado | **passa** | passa | sim (14/01/26) | reiluminação | não | **DISRUPTIVO** (R1) | H2+ |
| Reconstrução a partir de uma imagem | **passa** | passa | sim (17/12/25) | oclusão/atrás | não | **EMERGENTE→R1** | H2+/H3 |
| Captura de pessoa e movimento por câmera comum | **passa** | passa | sim (13/11/25) | pessoa fotorreal fora do lab | não | **DISRUPTIVO** (R2) | H2+ |
| Registro acumulado por terceiro como índice de máquina | **passa** | passa | sim (07/04/26) | norma de propriedade | não | **DISRUPTIVO** (R3) | H3 |

**O protocolo de recusa, escrito como a skill manda:**

```
RECUSA PARCIAL — o tema, como veio, é majoritariamente maduro

MADURO, e por quê (com o teste que reprovou):
  · Fotogrametria clássica — reprova T1: faz o mesmo, mais barato; e aprova T5 (instalação
    padrão, preço estável, falhas documentadas há uma década).
  · Escaneamento a laser — reprova T1 e aprova T5: mercado com faixa de preço conhecida
    (US$ 15–25 mil no segmento de mão) e integrador formado.
  · Mocap com marcador — reprova T1 e T2: sem ele, um time competente aceita mais custo e
    prazo, não muda de objetivo.
  · 3DGS como renderização — reprova T1: 100 fps a 1080p desde 2023 é velocidade, não
    possibilidade nova; e aprova T5 desde 03/02/2026, com extensão glTF em release candidate.
  · Compressão/streaming de splat — reprova T1 e aprova T5: SPZ MIT, 3D Tiles, LOD em três
    produtos Cesium desde 27/04/2026.
  · Escâner de mão com GS nativo — reprova T1 e aprova T5: é o escaneamento a laser com outra
    saída.
  · Parede de LED e produção virtual — reprova T1: exibe melhor o mundo construído; nada nela
    muda o que é possível capturar.
EMERGENTE que sobrou:
  · Reconstrução a partir de UMA imagem — passa T1/T3/T4: muda o que é possível (não existe
    dado suficiente para medir; o modelo completa), sinal datado em 17/12/2025, e falta
    resolver o que está oculto.
DISRUPTIVO, com incumbente nomeado:
  · Captura de espaço por telefone comum — torna sem valor a cadeia de produção de ambiente e
    o serviço de tour virtual; entra por MERCADO NOVO (corretor, perito, professor, lojista).
  · Captura de pessoa e movimento por câmera comum — torna sem valor a cadeia de mocap com
    marcador e o pressuposto de que reproduzir aparência exige produção cara; entra por
    MERCADO NOVO.
  · Registro acumulado por terceiro — torna sem valor a cartografia como levantamento
    contratado; entra pela BAIXA DO MERCADO (a loja, o galpão de 300 m²) e por mercado novo.

RECORTE EMERGENTE PROPOSTO
  Não é a renderização neural que tem futuro a mapear — é quem captura, o que passa a ser
  capturável de uma pessoa, e quem fica com o registro.

Rodo com este recorte, ou você prefere outro?
```

Sem interlocutor, rodei com o recorte proposto. **A consequência está no corpo do documento**: a
seção 3 cita o substrato maduro e a seção 4 não o usa como raiz. Esta é a diferença mais visível
entre este mapa e um mapa que tomasse "Gaussian Splatting" como a tendência.

**Uma nota sobre a distinção emergente × disruptivo.** A reconstrução a partir de uma imagem é
**emergente** e não recebeu raiz própria: ela ainda carrega incerteza genuína sobre função, uso e
mercado, e **pode não disruptar nada** — é perfeitamente possível que fique como recurso de foto
espacial em galeria de celular, servindo melhor ao mesmo cliente, isto é, sustentação. Foi
absorvida como sinal de R1 em vez de virar raiz. E a parede de LED é o caso inverso e didático:
**tecnologia madura participando de uma disrupção sem ser a disrupção** — o que rompe na produção
virtual é o arranjo de produção, não o painel.

### 12.5 A roda como ela foi escrita antes dos cortes

Vinte e cinco efeitos escritos, dezenove na árvore final. A lista abaixo é o rascunho, na ordem em
que saiu, para que se veja o que foi pensado e descartado.

R1: e1 (ambiente vira insumo), e1.1 (ofício se reorganiza), e1.1.1 (formação), e1.2 (luz vira
escassez), e1.2.1 (reiluminação no formato), e1.3 (lugar licenciável), e1.3.1 (dono licencia),
**e1.4 (gêmeo digital doméstico universal — MORTO)**, e2 (registro vira prova), e2.1 (perícia e
seguro), e2.1.1 (proveniência assinada), e2.2 (proibido escanear), e2.2.1 (panorama reescrito),
**e2.3 (turismo virtual substitui visita — MORTO)**.

R2: e3 (aparência vira ativo), e3.1 (contrato descreve captura), e3.1.1 (captura vira ilícito
autônomo), e3.2 (figuração substituída), e3.2.1 (negociação coletiva de captura), **e3.3 (elenco
vira catálogo — MORTO)**, e4 (movimento sem instrumentação), e4.1 (acervo vira base), e4.1.1
(direito sobre o gesto), e4.2 (corpo como entrada padrão), **e4.3 (biomecânica de celular vira
rotina clínica — MORTO)**.

R3: e5 (captura vira contribuição), e5.1 (mapa com cliente-máquina), e5.1.1 (cobertura como
política pública), e5.2 (contrapartida pela captura), e5.2.1 (portabilidade do espaço), **e5.3
(cidade vende ou proíbe a própria cópia — RETIRADO para §6)**, e6 (cópia parcialmente gerada),
e6.1 (medido × preenchido), e6.1.1 (marcação obrigatória), **e6.2 (mapa gerado substitui o medido
— MORTO)**.

### 12.6 Os efeitos mortos, com o id original e a prova que os matou

**e1.4 — "Todo mundo passa a ter um gêmeo digital da própria casa, e consultá-lo vira hábito."**
Morto por **P1**. Enunciável como "mais capturas": mesmo ator (a pessoa), mesmo mecanismo (o app),
só mais volume. Nenhum ator novo aparece. É e1 medido diferente. **Fundido com e1.**

**e2.3 — "Turismo virtual navegável substitui parte da visita presencial a espaço notável."**
Morto por **P3**. Já é verdade hoje, com nome próprio: as cenas em destaque do Hyperscape incluem
a cozinha de Gordon Ramsay, a House of Kicks do Chance the Rapper e o octógono do UFC Apex em Las
Vegas, disponíveis desde 2024 como cenas pré-produzidas. Não é efeito: é estado da arte. **Foi para
a seção 3.**

**e3.3 — "O elenco de figuração e de dublê deixa de ser contratado por diária e vira catálogo
consultável."** Morto por **P2** e **P4**. P2: depende de captura fotorrealista de pessoa por
sensor acessível, e o contraexemplo é fatal — a Meta demonstrou o caminho em 13/06/2022 e em 2026
continua sendo pesquisa, com rig de 100+ câmeras, sem reiluminação, em headsets sem rastreamento
facial. Quatro anos sem produto é lento demais para caber em 2031 como efeito de segunda ordem.
P4: a força contrária (sindicato, litigância) aqui **encarece** a captura, e o efeito previa
barateamento. **O que sobreviveu foi e3.2**, mais modesto e mais lento.

**e4.3 — "Análise biomecânica por celular vira rotina em clínica e em esporte de base."** Morto por
**P3** e pela §2.3 da skill. Já existe como produto (aplicativos de análise de movimento por vídeo
de celular estão no mercado). E, pior para a tese: **serve melhor ao mesmo cliente do incumbente** —
o fisioterapeuta e o preparador que já compravam análise. Pela definição de Christensen isso é
sustentação, não disrupção, e não pertence a um mapa que tem "disrupção-raiz" no centro.

**e5.3 — "Municípios passam a vender, ou a proibir, a cópia 3D do próprio território."** Retirado
por **P5**, não por falsidade. Depende de **uma** precondição não validada — alguma norma dizer de
quem é a cópia de um lugar — e essa mesma precondição sustenta e5.2, e5.2.1 e e2.2.1. Galho inteiro
pendurado numa aposta só. Pela regra de parada da §4.2 da skill, **não vai para a roda: vai para a
seção 6 como sinal fraco**, e está lá.

**e6.2 — "O mapa gerado passa a ser preferido ao mapa medido."** Morto por **P2** e **P6**. P2: o
próprio Google descreve o Genie com Street View como experimento, sem noção de física, em
"qualidade de videogame" e não fotorrealista, disponível só a assinantes de um plano de topo. P6:
na litania é uma manchete excelente; nas causas sistêmicas não há mecanismo de custo que favoreça
substituir a medida **onde a medida importa** — seguro, engenharia e perícia pagam pela medida
justamente porque ela é responsabilizável. Sobreviveu como **wildcard** na §6.2 e como cenário
surpreendente na §9.3, que é o lugar de uma hipótese sem mecanismo.

### 12.7 Os rebaixamentos, e por quê

| id | de | para | prova | razão |
|---|---|---|---|---|
| e1.1 | alta | **media** | P4 | Falta caso histórico que sustente o prazo para a reorganização de um ofício inteiro em quatro anos; a evidência que tenho é vaga em aberto (415), não recolocação medida. |
| e3.1 | alta | **media** | P2 | Contrato de elenco muda na velocidade da negociação coletiva, não na da tecnologia. O comparável mais próximo (a proposta dinamarquesa) levou mais de um ano só para chegar a previsão de vigência. |
| e5.1 | alta | **media** | P4 | A força contrária existe e é institucional — provedores públicos de dado geoespacial e reguladores de concorrência —, e eu não sei dizer por que ela perderia. Sem razão nomeada para ela perder, a terceira condição de `confianca: alta` não se cumpre. |

### 12.8 O caso Kilcher — por que ele está no mapa sem estar na seção 11

É a única afirmação factual relevante deste documento cuja fonte primária **não abriu**. O que
está registrado: uma ação ajuizada em **5 de maio de 2026** por Q'orianka Kilcher contra James
Cameron e The Walt Disney Company, no Distrito Central da Califórnia, alegando que uma fotografia
sua feita aos 14 anos virou desenho, maquete, **escaneamento a laser em alta resolução** e, daí,
a personagem Neytiri, sem consentimento nem remuneração; réus negam, pedem extinção por
semelhança não reconhecível e por intempestividade.

Tentei três fontes: a Variety redirecionou para um domínio de paywall técnico e não abriu; o site
do escritório autor da ação devolveu HTTP 403 nas duas páginas; a matéria do JD Journal sobre o
pedido de extinção devolveu HTTP 403. Os dados acima vêm de **resultados de busca convergentes**,
de três fontes diferentes, com a mesma data e os mesmos elementos — o que é forte, mas **não é a
mesma coisa que ter aberto**.

A decisão: **manter o caso no corpo, com os fatos assinalados como não verificados em fonte
aberta, e não listá-lo na seção 11.** A alternativa seria omiti-lo, e omitir o litígio que
desloca a discussão da obra para a captura empobreceria R2 mais do que a ressalva empobrece o
mapa. Quem for usar este documento: **confira este parágrafo antes de citá-lo.** É o ponto que eu
mesmo conferiria primeiro.

### 12.9 As buscas que não deram em nada

- **Norma de consentimento para escaneamento de espaço.** Busquei em português e em inglês, com e
  sem GDPR, com e sem "interiores". Nada. Não é ausência de resultado: é ausência de objeto, até
  onde consegui ver. É a precondição faltante de R3.
- **Adoção brasileira de captura neural.** Busquei projeto brasileiro de digitalização com splats,
  empresa brasileira, contrato público. Encontrei um tutorial técnico em português, um artigo
  acadêmico brasileiro de 2019 sobre fotogrametria caseira em museu, e o estúdio virtual da Globo —
  que é o oposto do tema. **A nota sobre o Brasil ficou jurídica e orçamentária porque a evidência
  disponível era jurídica e orçamentária.**
- **Números de usuários de Scaniverse e Luma.** Agregadores citam 2,5 milhões de downloads para o
  Luma; não abri fonte primária e não uso.
- **Dados de emprego específicos de modelagem 3D.** A pesquisa do GDC de 2026 traz "arte visual e
  técnica" (64% veem impacto negativo da IA generativa) e demissões (28% em dois anos, 33% nos
  EUA), mas **não** desagrega modelagem 3D nem criação de asset. Usei o número geral e disse que é
  geral.
- **Data de lançamento do Xgrids Lixel L2 Pro.** A ficha do produto não informa; usei só preço e
  especificação.
- **Confirmação de promulgação da lei dinamarquesa.** Não encontrada. O texto diz "propôs".

### 12.10 O caminho que não segui

Considerei, e abandonei, um recorte alternativo: fazer do **vídeo volumétrico (4DGS)** a terceira
raiz, em vez do acúmulo por terceiro. Havia material — Gracia com streaming em março de 2026, a
performance de 27/04/2026 a 17–75 Mbps no navegador, o arranjo de 70 câmeras de US$ 80 mil na NAB,
a chamada do MPEG com prazo em 15/10/2026. Abandonei por dois motivos. Primeiro, 4DGS **não passa
em T2 com folga**: sem ele, um time competente que queira performance volumétrica aceita mais custo
e mais prazo (existe captura volumétrica por malha desde 2016); muda o preço, não o objetivo.
Segundo, e mais importante, ele é **consequência** das três raízes escolhidas, não causa — quem
captura, o que se captura de uma pessoa, e quem fica com o arquivo são perguntas que o 4DGS herda.
Ficou na seção 3 e na seção 6, onde rende mais.

### 12.11 As quatro perguntas do teste cruzado, respondidas sobre esta rodada

A skill exige respondê-las antes de encerrar, e mostrar **onde** cada uma aconteceu.

1. **Fez perguntas antes de rodar?** **Sim.** Fase 1, registrada em §12.1, com o bloco
   `RECORTE FECHADO` em §12.2. **Ressalva honesta:** não houve confirmação explícita, porque não
   havia interlocutor; a skill proíbe aceitar silêncio como confirmação, e aqui não houve nem
   silêncio — houve ausência. As duas suposições (fronteira e número de raízes) estão marcadas como
   minhas no próprio bloco.
2. **Separou novidade de comum, e recusou o comum?** **Sim.** Fase 2, §12.4, com os cinco testes
   aplicados a onze candidatas e **sete recusadas**, cada uma com o teste que a reprovou nomeado.
   O efeito prático da recusa é verificável no corpo: 3DGS, SPZ, glTF, LOD, escâner de mão e parede
   de LED aparecem na seção 3 e **não** aparecem como raiz na seção 4.
3. **Duvidou do próprio resultado?** **Sim.** Fase 5, §7, com as seis provas aplicadas citando
   `id`. Cota de dano cumprida: **seis efeitos mortos** (e1.4, e2.3, e3.3, e4.3, e6.2, mais e5.3
   retirado) e **três rebaixados** (e1.1, e3.1, e5.1), com pelo menos um por raiz. Todos em §12.6 e
   §12.7 com o `id` original e a prova. E a CLA achou um efeito que vive só na litania (e6.1.1),
   assinalado em §7.1.
4. **Saiu no formato?** **Sim.** Fase 6, com a autochecagem rodada e o resultado colado em §12.12.

### 12.12 A autochecagem, rodada e colada

O resultado dos dois verificadores — o da skill (§6.2) e o `verificar.py` da disciplina — está
colado abaixo, tal como saiu.

**Verificador da skill (§6.2).**

```
$ grep -c "^## " tendencia-captura-de-realidade-e-renderizacao-neural.md
12

$ python3 autochecagem.py
faltam: nada
raizes: 3 (frontmatter diz 3 )
efeitos por ordem: {1: 6, 2: 12, 3: 11}
ordem 3 com confianca alta: 0 (cota: no maximo 1)
contadores batem: True
links na secao 11: 32 (frontmatter diz fontes: 32 )
```

**Verificador da disciplina (`futurizacao-giordano/references/verificar.py --links`).**

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 6 (frontmatter diz 6)
efeitos ordem 2: 12 (frontmatter diz 12)
efeitos ordem 3: 11 (frontmatter diz 11)
prazo > horizonte (2031) em ordens 1-2: 0
prazo > horizonte em ordem 3 (permitido, mas declare): 10 [('e1.1.1', 2032), ('e1.3.1', 2032),
  ('e2.1.1', 2032), ('e2.2.1', 2033), ('e3.1.1', 2033), ('e3.2.1', 2032), ('e4.1.1', 2033),
  ('e5.1.1', 2033), ('e5.2.1', 2032), ('e6.1.1', 2032)]
confiança ordem 1: alta 2 · media 4 · baixa 0
confiança ordem 2: alta 0 · media 6 · baixa 6
confiança ordem 3: alta 0 · media 0 · baixa 11
links da seção 11: 32/32 respondem (frontmatter diz fontes: 32)
RESULTADO: ok
```

**O que os dois scripts não pegam, e eu conferi à mão.** Que **todo link da seção 11 foi aberto
por mim nesta sessão** — foi, e as cinco tentativas que falharam estão nomeadas ao fim da seção 11
e em §8.5, fora da contagem. Que `fontes: 32` diz a verdade — diz: são 32 endereços, todos
recuperados por `WebFetch` durante esta rodada, nenhum citado de memória. E que **os dez efeitos de
ordem 3 além do horizonte estão declarados** — estão, em §5.1, um a um.

**Uma correção feita por causa do script, e não da leitura.** A primeira versão de §5.1 dizia que
"dois" efeitos de ordem 3 passavam do horizonte. São **dez**. Eu não teria pego relendo: dois é tão
plausível quanto dez quando se está escrevendo prosa sobre a própria árvore. Pegou o verificador,
comparando o declarado com a árvore — exatamente o tipo de erro que o `DUVIDAS.md` da skill
registra como indetectável por releitura atenta.
