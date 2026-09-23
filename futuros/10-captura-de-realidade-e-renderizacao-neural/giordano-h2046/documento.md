---
tema: Captura de realidade e renderização neural
slug: captura-de-realidade-e-renderizacao-neural
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 13
efeitos_ordem_2: 22
efeitos_ordem_3: 21
tecnologias_citadas: [3D Gaussian Splatting, NeRF, instant-ngp, gsplat, Nerfstudio, PostShot, SuperSplat, Scaniverse, VPS 2.0, NSDK 4.0, Polycam, Luma AI, Scantic, 4DAnyone, Move AI, EasyMocap, AMASS, TripoSR, Stable Fast 3D, Depth-Anything-V2, DUSt3R, MASt3R, VGGT, World Labs Marble, NVIDIA Omniverse NuRec, Isaac Sim, AlpaSim, Cosmos, Genie 3, KHR_gaussian_splatting, OpenUSD UsdVolParticleField3DGaussianSplat, hdParticleField, OGC 3D Tiles, MPEG Gaussian Splat Coding, SPZ, SOG, KSplat, PLY, Nuke 17, Unreal Engine 5.7, model-viewer, img2threejs, Magnific, draco]
fontes: 20
confianca: media
experimento: O mesmo lugar, três origens — um canto do CIn capturado, gerado e reconstruído, publicado como três splats sem rótulo
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Entre 2023 e 2026 a captura neural saiu do laboratório e entrou na cadeia de produção: o
3D Gaussian Splatting ganhou extensão ratificada no glTF (KHR_gaussian_splatting), esquema
nativo no OpenUSD 26.03, suporte nativo no Nuke 17 e um aplicativo de celular que treina o
splat no próprio aparelho, sem nuvem, em menos de um minuto. Este mapa não trata disso como
"3D mais barato". Trata de três rupturas que o barateamento revela: **o 3D deixa de ser
desenho e passa a ser gravação**, com as propriedades de uma fotografia — indicial, datada,
mal editável, com a luz assada dentro; **a captura deixa de ser um evento anunciado** e
passa a caber no gesto de filmar, processada no aparelho, fora do alcance de qualquer
moderação de nuvem; e **captura e geração convergem no mesmo arquivo**, de modo que um
`.spz` de um quarteirão do Recife e um `.spz` de um quarteirão que nunca existiu são,
para o leitor e para o formato, a mesma coisa. Daí saem treze efeitos de primeira ordem —
da iluminação que volta a governar o cronograma de produção ao modelador de ambiente que
perde posto para o limpador de captura, do movimento humano como repertório licenciável
à captura como prova pericial —, vinte e dois de segunda e vinte e um de terceira, até
2046. O achado central do mapa é a contradição entre a primeira e a terceira raiz: a
mesma tecnologia que dá ao 3D o estatuto de registro é a que o retira.

## 2. O tema

**O que é.** Captura de realidade e renderização neural é o conjunto de técnicas que
transforma sensor comum — câmera de celular, câmera 360, vídeo de arquivo, uma foto só —
em cena tridimensional navegável, sem passar pelo ofício de modelar. O NeRF (2020) provou
que uma rede podia representar o campo de radiância de uma cena; o 3D Gaussian Splatting
(SIGGRAPH 2023, Inria) tirou a rede do caminho de render e devolveu tempo real — ≥100 fps
a 1080p, com tempo de treino comparável ao do NeRF. Do outro lado do ciclo, modelos de
profundidade monocular e de reconstrução feed-forward fecharam a ponta: uma imagem entra,
um objeto ou uma cena sai, em menos de um segundo.

**Onde encosta em mídia e interação.** Em quase tudo, e por um motivo específico: ele
muda o **estatuto** do objeto 3D, não só o custo. Um modelo feito é parametrizado,
editável, abstrato, sem data — é um desenho. Uma captura neural é um registro de um
lugar, com a luz daquele dia assada nos harmônicos esféricos, com o que a câmera não viu
faltando ou inventado, e com as pessoas que passavam gravadas junto. O 3D passa a ter as
propriedades que a fotografia tem desde 1839: presença, indexação ao real, valor
probatório, e o problema de quem aparece sem ter pedido para aparecer.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque o estado
da arte já está dado e é razoavelmente consensual — há 212 plataformas e ferramentas
catalogadas em julho de 2026, cerca de 749 artigos publicados no ano, um padrão Khronos
ratificado. O que não está dado é o que decorre disso. As perguntas abertas não são
técnicas: são sobre quem é dono da cópia de um lugar, sobre o que sobra do ofício de
modelar, sobre o que acontece com a categoria "documento" quando o mesmo arquivo serve
para o que existiu e para o que não existiu. Essas perguntas não se respondem melhorando
o benchmark.

**Premissas assumidas nesta rodada.** O `briefing:` do pedido cobriu todos os sete itens
da entrevista (§0 da skill): horizonte 2046; público "quem projeta mídia e interação";
recorte global com nota sobre o Brasil; descartado de início "o que já é comum em produto
de massa"; nenhuma disrupção-raiz suspeitada de antemão; viés neutro; zona de interesse
"Percepção e mídia sintética". Não houve rebaixamento de confiança por ausência de
entrevista. O que o briefing **não** cobriu e foi assumido aqui, declarado como exige a
skill: (a) o mapa trata de captura de **ambientes, objetos e pessoas** como um só objeto,
por serem o mesmo pipeline técnico, embora o regime jurídico de pessoas seja distinto;
(b) o recorte brasileiro entra como nota em efeitos específicos, não como ramo próprio da
roda; (c) "quem projeta mídia e interação" foi lido como incluindo estúdio, agência,
docente e desenvolvedor independente, não só grande produção.

**Falseador declarado.** O briefing definiu o que faria mudar de ideia: evidência de que
a adoção já passou da maioria inicial de Rogers, ou de que a tecnologia não rompe nada —
só melhora o que existe. Os dois testes foram aplicados no §4 e no §7, e um candidato foi
efetivamente recusado por eles.

## 3. Onde isso está hoje

Âncora feita em 22/09/2026 com acesso à web; 17 fontes abertas e lidas; as buscas que não
deram em nada estão na seção 12.

### 3.1 O que já existe e funciona

**A técnica e o padrão.** O 3D Gaussian Splatting foi publicado na SIGGRAPH 2023 por
Kerbl, Kopanas, Leimkühler e Drettakis (Inria / Université Côte d'Azur / MPI Informatik),
com a alegação verificada de novel-view synthesis em tempo real a ≥100 fps em 1080p para
cenas não delimitadas [F1]. Em 2026 ele deixou de ser técnica de pesquisa e virou formato
com padrão:

- **Khronos `KHR_gaussian_splatting`** — anunciado em 3 de fevereiro de 2026 [F2]; a
  README da especificação no repositório do glTF marca hoje o status como *"Complete,
  Ratified by the Khronos Group"* [F3]. Define posição, rotação (quaternion), escala,
  opacidade e coeficientes de harmônicos esféricos até grau 3 como atributos de um
  primitivo de malha glTF. Contribuíram dezesseis pessoas de Cesium, Niantic Spatial,
  Esri, NVIDIA, Huawei, Autodesk e independentes; Autodesk, Cesium/Bentley, Esri, Huawei,
  Niantic Spatial, NVIDIA e XGRIDS aparecem como envolvidos no anúncio, com CesiumJS,
  ArcGIS, Scaniverse e XGRIDS Lixel Cybercolor como primeiros adotantes. A especificação
  é declaradamente agnóstica de algoritmo de compressão e prevê extensões — o SPZ da
  Niantic e o L-GSC da Qualcomm são citados como propostas [F2].
- **OpenUSD 26.03**, de 25 de março de 2026 [F4], acrescentou o esquema
  `UsdVolParticleField3DGaussianSplat` e um renderizador de referência, `hdParticleField`,
  além de um script de conversão de PLY para USD. A iniciativa é da Alliance for OpenUSD.
- Segundo o levantamento de padrões e ferramentas de 2026 [F13], há ainda trabalho
  paralelo no **OGC 3D Tiles 2.0** (splat como tipo de tile de primeira classe) e no
  **MPEG Gaussian Splat Coding** (compressão), este ainda em exploração.

**As ferramentas.** O SuperSplat, da PlayCanvas, é editor de splats que roda inteiramente
no navegador, é MIT e tem 10,2 mil estrelas no GitHub [F5] — ele existe porque limpar
captura (remover flutuantes, recortar, recompor) virou uma etapa obrigatória e distinta.
O levantamento de 2026 [F13] lista como cadeia corrente DJI Terra V5 (US$ 2.800–4.400/ano),
PostShot, Polycam, Luma AI, SuperSplat, SplatForge (Blender), Nerfstudio e Cesium. A
Polycam processa na nuvem, aceita de 20 a 200 imagens ou um MP4, e exporta malha e splat,
com plugins para Unity e Unreal [F17].

**A produção.** Em VFX e virtual production a passagem já aconteceu: o longa *Superman*
usou splats via ferramentas 3DGS em Houdini na Framestore; *Picture from Auschwitz*, exibido
em Cannes, usou fluxo baseado em splat; a Foundry anunciou suporte nativo a 3DGS no Nuke 17
(beta aberto no fim de 2025) [F10]. A frase que a fonte usa para descrever 2026 é literal:
*"3D Gaussian Splatting is no longer about proving that the technology works. That question
was answered in 2025."* Em engine, o caminho para a Unreal Engine 5.7 continua sendo plugin
de terceiro — não há módulo de primeira parte da Epic.

**A captura no aparelho.** Em 19 de agosto de 2026 o Scantic passou a treinar Gaussian
Splats **localmente no iPhone**, em menos de um minuto para capturas pequenas, sem subir
o dado para a nuvem, em qualquer aparelho com chip A12 Bionic ou melhor — ou seja, a
partir de um iPhone XS de 2018. Grátis para exportação em qualidade padrão; € 29,99/ano
ou € 4,99 por captura para qualidade plena [F6].

**A captura de pessoas e de movimento.** A Move AI opera captura de movimento sem marcador
desde 2019, com clientes declarados que incluem Ubisoft, SEGA, Sony, Meta, Disney,
Paramount, Nike e Foster + Partners, e alega qualidade *"comparable to Optical"* em teste
feito pela IJAD Dance Company [F12]. Em 20 de agosto de 2026, o 4DAnyone (SIGGRAPH Asia
2026, nove autores) reconstruiu **pessoa em movimento, em 3D navegável, a partir de um
único vídeo casual** de no mínimo 121 quadros com movimento suave de câmera — sem estúdio,
sem calibração, sem multicâmera. Os próprios autores registram o risco: *"realistic human
synthesis can enable deepfakes"*, e pedem consentimento e divulgação clara [F11].

**A captura como infraestrutura de máquina.** Em 7 de abril de 2026 a Niantic Spatial
lançou o Scaniverse como plataforma web e móvel integrada e o VPS 2.0 [F7]. O alvo
declarado não é entretenimento: *robotics OEMs e operadores, energia, construção,
logística, setor público, operadores de grandes espaços*. Exporta malha em FBX e splat em
PLY e SPZ (formato aberto da própria Niantic). A NVIDIA opera na mesma direção com o
Omniverse NuRec — bibliotecas aceleradas de 3DGS que ingerem dado de sensor real e o
devolvem como cena OpenUSD renderizável dentro do Isaac Sim, do AlpaSim e do CARLA,
apoiadas no `gsplat` aberto [F9].

**A geração que sai no mesmo formato.** O Marble, da World Labs, foi disponibilizado ao
público em 12 de novembro de 2025 como *"frontier multimodal world model"* que aceita
texto, uma imagem, várias imagens, vídeo ou um layout 3D grosseiro e devolve mundos
navegáveis exportáveis em **splat gaussiano**, malha de colisão, malha de alta qualidade
e vídeo com controle de câmera [F8]. Isto é decisivo para este mapa: o produto da geração
e o produto da captura saem no mesmo contêiner.

**A compressão.** Uma cena de 4 milhões de gaussianas ocupa cerca de 1.400 MB em PLY
cru; 200–400 MB em PLY do SuperSplat; 100–250 MB em SPZ (Niantic); 80–200 MB em SOG
(Fraunhofer HHI). Em link de 50 Mbps, o PLY cru leva 224 segundos para carregar e o SPZ,
26 [F14].

### 3.2 O que existe e ainda não funciona

- **Reiluminação.** O splat assa a iluminação da captura. Não há, em 2026, caminho
  produtivo para reluzir uma cena capturada sem perda — é a razão pela qual o splat entra
  como *fundo* e a malha continua entrando como *objeto*.
- **Precisão métrica.** O erro geométrico médio reportado para 3DGS é de 7,82 cm [F13] —
  suficiente para mostrar, insuficiente para medir. Levantamento de engenharia continua
  em laser (a referência citada é o Trimble X12, 2,2 mm a 20 m).
- **Edição semântica.** Um splat não sabe o que é parede e o que é cadeira. Recortar,
  mover e substituir objetos dentro de uma captura continua manual — daí existir o
  SuperSplat.
- **Personagem articulado.** O suporte a personagem riggado no OpenUSD 26.03 é descrito
  como experimental [F4]. No 4DAnyone, roupa larga muda entre pontos de vista, porque um
  esqueleto não descreve tecido, e erro de estimativa de pose se propaga para todos os
  ângulos [F11].
- **Custo de processamento.** O 4DAnyone leva até 30 minutos em GPU de ponta para o passo
  final [F11]; o levantamento de 2026 recomenda RTX 4090 com 24 GB e 128 GB de RAM de
  sistema para projeto em escala de cidade [F13].
- **Proveniência.** Nenhum dos padrões ratificados em 2026 — nem `KHR_gaussian_splatting`
  [F3], nem o esquema do OpenUSD [F4] — carrega campo que diga se aquilo foi capturado ou
  gerado, ou quando. É uma ausência estrutural, não um detalhe de implementação.

### 3.3 Quem constrói

| Ator | O que faz | Aposta |
|---|---|---|
| **Inria / academia (CVPR, SIGGRAPH)** | origem do 3DGS; hoje ~749 artigos/ano | ganho de qualidade e velocidade |
| **Khronos + AOUSD + OGC + MPEG** | padronização do formato | interoperabilidade; splat como tipo de dado |
| **Niantic Spatial** | Scaniverse, VPS 2.0, SPZ, NSDK 4.0 | mapa do mundo para máquina, não para gente |
| **NVIDIA** | NuRec, Isaac Sim, AlpaSim, Cosmos | captura como matéria-prima de IA física |
| **World Labs** | Marble (geração que exporta splat) | mundo gerado substitui mundo capturado |
| **PlayCanvas, Polycam, Luma AI, Jawset, Scantic** | ferramenta de captura e edição | volume e acessibilidade |
| **Move AI** | captura de movimento sem marcador | fim do traje e do volume |
| **Foundry, Epic, Autodesk, Cesium, Esri** | integração no que já existe | splat como mais um tipo de ativo |

### 3.4 Que número descreve a adoção hoje

Do levantamento estatístico de julho de 2026 do RadianceFields [F15], que é o único
censo do setor que encontrei com metodologia declarada:

- **212 plataformas e ferramentas** no mercado (estúdios de captura 43, serviços de nuvem
  38, visualizadores 27, hardware 19; 25 das 212 são gratuitas).
- **Mais de US$ 1,5 bilhão** em financiamento divulgado no campo; entre as dedicadas a
  3D/espacial, cerca de US$ 480 milhões. Maiores: Wayve (US$ 1 bi+), Niantic Spatial
  (US$ 250 mi), World Labs (US$ 100 mi+).
- **3.333 artigos** de campo de radiância indexados; **749 em 2026**, cerca de quatro por
  dia.
- **415 vagas abertas** no momento do levantamento, de 665 rastreadas desde 2024.
- **992 notícias** desde janeiro de 2023; ritmo de 2026 ~415 no ano, 46% acima de 2025.

Preço de serviço profissional em 2026, do mesmo levantamento de ferramentas [F13]:
engajamento mínimo US$ 2.250; sítio pequeno US$ 2.250–5.000; médio US$ 5.000–15.000;
grande US$ 10.000–25.000; ambiente de cinema/virtual production US$ 10.000–50.000.

**Número que não encontrei:** quantidade total de capturas produzidas por ano, ou número
de usuários ativos de aplicativo de captura. A Polycam divulga 37 mil avaliações na App
Store [F17], o que não é medida de uso. O dado "120 mil capturas por semana na Polycam"
aparece em fonte secundária mas não está na página de estatísticas que abri — registrado
na seção 12 como não confirmado, e **não usado** em nenhum efeito deste mapa.

### 3.5 Nota sobre o Brasil

O Brasil aparece neste tema por três portas, e nenhuma delas é a da captura neural.

**Gêmeos digitais municipais.** Niterói mantém um gêmeo digital em produção
(`gemeo.niteroi.rj.gov.br`), com dados em tempo real de ônibus (posição a cada 30 s),
Waze for Cities (2 min), câmeras e pluviômetros, e uma camada 3D de edificações **feita
por LiDAR** pela secretaria de urbanismo [F16]. Curitiba e São Paulo seguem o mesmo
caminho — voo de drone, perfilamento a laser, aerofotogrametria. Ou seja: o Brasil
municipal está investindo justamente na tecnologia **madura**, não na emergente. Isso
importa para o mapa: a base instalada brasileira será métrica e cara, e a camada neural
chegará por cima, por fora da prefeitura.

**O regime jurídico da aparência de um lugar.** O art. 48 da Lei 9.610/98 permite
representar livremente obra situada permanentemente em logradouro público por pintura,
desenho, fotografia e procedimento audiovisual. Mas a jurisprudência do STJ (3ª Turma,
2016) reconhece que a representação de obra arquitetônica **com finalidade comercial** é
direito exclusivo do autor — e o autor é o arquiteto, não o proprietário [F15b]. A
condição que aciona a proteção é a obra ser protagonista e inconfundível, não mero
elemento de paisagem. Uma captura volumétrica navegável de uma fachada é, por
construção, protagonista: o usuário escolhe olhar para ela. O Brasil tem, portanto, uma
porta jurídica aberta que a maior parte dos países de liberdade de panorama ampla não tem.

**Dado biométrico.** A LGPD classifica dado biométrico como sensível (arts. 5º, II e 11).
A regulamentação específica da ANPD sobre biometria **ainda não saiu** em 2026. Uma
captura volumétrica de uma pessoa não é obviamente "dado biométrico para identificação" —
ela é aparência, não identificador — e é exatamente nesse vão que o problema deste mapa
mora.

## 4. As disrupções-raiz

### 4.0 O que foi recusado, e por quê

O critério de maturidade (§2 da skill) recusou quatro candidatos antes de a roda começar.
Registro dos quatro, como manda a skill:

1. **Fotogrametria clássica (SfM-MVS) e escaneamento a laser.** *Candidato recusado como
   raiz: adoção em maioria no VFX, na topografia e na engenharia desde cerca de 2015;
   tratado como contexto na seção 3.* Não rompe nada — é o padrão contra o qual a captura
   neural se compara.
2. **Paralaxe tridimensional a partir de uma foto única no celular.** *Candidato recusado
   como raiz: roda em todo iPhone 12 ou mais novo pelo recurso Spatial Scenes do iOS 26;
   maioria em produto de massa; tratado como contexto.* É precisamente o caso da regra
   prática da disciplina — se dá para fazer com o que já é comum em produto de massa, é
   maduro. Vale registrar que o recurso **é generativo**: ele inventa o que estava atrás
   do sujeito. Ele não entra como raiz, mas volta na seção 5 como evidência do mecanismo
   da terceira raiz.
3. **O 3D Gaussian Splatting como técnica de rasterização.** Recusado por não ser ruptura
   e sim artefato: é uma forma de representar e desenhar. Além disso, deixou de ser
   novidade — ratificado no glTF, esquematizado no OpenUSD 26.03, nativo no Nuke 17. É o
   **meio** pelo qual as três raízes abaixo operam, e por isso aparece em todas elas.
4. **Motion capture óptico com marcador.** Maduro desde os anos 2000 em jogo AAA e
   cinema. Entra como o incumbente que perde na raiz 2.

Sobraram três raízes. Elas não são independentes: a terceira ataca a primeira. Isso é
deliberado e está tratado na seção 5.

---

### 4.1 Raiz A — O 3D deixa de ser desenho e passa a ser gravação

> Um objeto 3D produzido por captura neural tem as propriedades de uma fotografia, não as
> de um modelo: é indexado a um lugar e a uma data, traz a luz daquele momento assada
> dentro, não se deixa editar parametricamente, e registra quem estava lá.

**1. O que ela rompe.** Rompe a suposição, válida desde o começo da computação gráfica,
de que ativo 3D é **parametrizado e editável**. Toda a economia do 3D depende disso: o
asset se compra porque se adapta; o modelador se contrata porque constrói o que não
existe; a iluminação se decide na pós porque a geometria é neutra quanto à luz. A captura
neural entrega um objeto que não adapta, não se reconstrói e já vem iluminado. Não é "a
mesma coisa, mais barata" — é outra coisa, com outro contrato de uso. E rompe ainda uma
suposição de lado nenhum da produção: a de que 3D não é prova de nada. Um registro
indicial é.

**2. Por que agora, e não há cinco anos.** Em 2021 o NeRF existia e rodava a 1 a 10 fps;
não havia formato de intercâmbio, não havia editor, não havia caminho de engine. Em 2026
há os quatro: tempo real desde o 3DGS (2023) [F1], formato ratificado (fev/2026) [F2][F3],
esquema no OpenUSD (mar/2026) [F4], editor aberto no navegador [F5] e suporte nativo em
ferramenta de composição de produção [F10]. Um formato ratificado é a pré-condição
econômica: sem ele, ninguém assina contrato de entrega.

**3. Onde está na difusão.** **Adoção precoce.** Em VFX e virtual production já há
produção entregue (*Superman*, Framestore) [F10] e ferramenta nativa; em arquitetura,
GIS e patrimônio há serviço com tabela de preço [F13]. Fora desses nichos, é produto de
nicho. Não é maioria.

**4. O que ainda falta acontecer.** Reiluminação produtiva; decomposição semântica
(separar objeto de fundo dentro do splat); precisão métrica que suporte laudo; formato de
proveniência; e uma camada de direito que diga de quem é o registro de um lugar. Nenhum
desses itens é impossível — logo, é raiz e não wildcard.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** Os bancos de ativo 3D
(TurboSquid, Sketchfab e equivalentes) e os fabricantes de ferramenta de modelagem: o
modelo de negócio deles é a malha editável. O caminho provável não é bloquear — é
redirecionar, empurrando o splat para o papel de *plano de fundo* e mantendo a malha como
o que se vende. Isso já está acontecendo e é o efeito `e5.2`.

---

### 4.2 Raiz B — A captura deixa de ser um evento e passa a ser um gesto, processado no aparelho

> Escanear deixa de exigir aparelhagem, equipe, autorização e agenda. Filmar já é
> escanear; e o processamento acontece no próprio celular, sem passar por servidor
> nenhum.

**1. O que ela rompe.** Rompe duas coisas distintas. Primeiro, o **evento de captura**:
até aqui, escanear um lugar era uma produção visível — tripé, rig, drone, crachá,
autorização. Um lugar sabia que estava sendo escaneado. Com um vídeo casual de 121
quadros bastando para reconstruir uma pessoa em movimento [F11] e com o treino do splat
rodando em um iPhone de 2018 em menos de um minuto [F6], não há mais gesto distinguível:
quem filma, escaneia. Segundo, e menos óbvio: rompe **o único ponto de estrangulamento
que existia**. Enquanto o processamento era de nuvem — Polycam, Luma AI, Scaniverse [F17]
[F7] —, havia um servidor onde era tecnicamente possível detectar rosto, recusar conteúdo,
guardar log, atender ordem judicial. Processamento no aparelho elimina esse ponto. Não há
a quem intimar.

**2. Por que agora, e não há cinco anos.** Porque três curvas se cruzaram: NPU de celular
suficiente para treinar (não só inferir) um splat pequeno; algoritmos feed-forward que
dispensam otimização por cena; e reconstrução de sujeito dinâmico a partir de câmera
única. O Scantic é de agosto de 2026 [F6]; o 4DAnyone é de agosto de 2026 [F11]. Há cinco
anos, cada captura exigia dezenas de fotos com pose e uma GPU de mesa.

**3. Onde está na difusão.** **Entre demo pública e produto de nicho.** O Scantic é
produto pago, mas é um aplicativo; o 4DAnyone é artigo de SIGGRAPH Asia com as limitações
declaradas pelos próprios autores. Isto é o elo mais especulativo do mapa e por isso os
efeitos desta raiz carregam confiança mais baixa e prazos mais longos.

**4. O que ainda falta acontecer.** Consumo de bateria e térmica para cenas grandes;
qualidade em cena dinâmica no aparelho (hoje o 4D ainda precisa de GPU de ponta e até 30
minutos [F11]); e — o item que decide o ritmo — um caso público de dano que faça a
discussão sair do laboratório.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** Apple e Google, pelos
sistemas operacionais. Eles são os únicos atores capazes de impor um requisito de
permissão para reconstrução volumétrica, distinta da permissão de câmera, e têm incentivo
reputacional para fazê-lo antes que um caso ruim os obrigue. Se fizerem, o
estrangulamento volta — não na nuvem, mas na API. É a retroação `e8`.

---

### 4.3 Raiz C — Captura e geração convergem no mesmo arquivo

> O mesmo contêiner — um `.spz`, um `.ply`, um primitivo `KHR_gaussian_splatting` —
> guarda indistintamente o registro de um lugar que existe e a invenção de um lugar que
> não existe; e nem o formato nem o padrão carregam campo que diga qual é qual.

**1. O que ela rompe.** Rompe a garantia indicial que a raiz A acabou de criar. O Marble
aceita texto, uma imagem, várias imagens, vídeo ou layout grosseiro e exporta **splat
gaussiano** [F8]; o Scaniverse captura o mundo e exporta **splat gaussiano** [F7]. Entre
os dois arquivos não há diferença de tipo. Pior: a fronteira não passa entre arquivos, e
sim **dentro** de um arquivo — o preenchimento generativo já entra na captura por baixo
(o *spatial reframing* da Apple inventa céu e chão para completar uma panorâmica; a pilha
da NVIDIA combina NuRec com Cosmos para infill generativo [F9]). Não há linha onde a
observação termina e a invenção começa. Rompe, portanto, a possibilidade de "olhar o
arquivo e saber".

**2. Por que agora, e não há cinco anos.** Porque até 2024 a geração 3D produzia malha
óbvia de modelo generativo e a captura produzia nuvem de pontos — eram distinguíveis à
vista e no formato. A convergência em splat é de 2025–2026: Marble em GA em 12/11/2025,
API em janeiro de 2026, geração 1.1 em abril de 2026 [F8]. O padrão que unifica o
contêiner é de fevereiro de 2026 [F2][F3].

**3. Onde está na difusão.** **Produto de nicho.** O Marble é comercial, com preço por
mundo, e exporta para Unreal, Unity, Houdini e Blender [F8]. A convergência é real e
comprável hoje; o que não existe ainda é a consequência dela.

**4. O que ainda falta acontecer.** Um esquema de proveniência que sobreviva à edição
(o problema que C2PA tenta resolver em imagem plana e ainda não resolveu); e um episódio
que force o mercado a pedi-lo. Nenhum dos dois é impossível.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** Os fornecedores de
geração. Um campo obrigatório de proveniência transforma "mundo gerado" em categoria de
segunda classe em todo mercado onde o real importa. A resposta previsível não é impedir o
campo — é defini-lo de forma permissiva, em que "reconstruído a partir de" cobre tanto
uma captura de 200 fotos quanto uma invenção a partir de uma. É a retroação `e12`.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O 3D deixa de ser desenho e passa a ser gravação
    efeitos:
      - id: e1
        ordem: 1
        efeito: Estúdios passam a comprar lugares gravados em catálogo, como hoje compram trilha de biblioteca
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O contrato de locação de locação vira licença de dados, com escopo, prazo e limite de reuso
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Escritórios de arquitetura cobram pelo reuso comercial da fachada capturada, apoiados no direito de autor da obra arquitetônica
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Modeladores de ambiente perdem posto em estúdio para limpadores de captura
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O portfólio de artista 3D deixa de exibir topologia e passa a exibir escolha de recorte
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A captura ganha estatuto probatório e passa a ser aceita por seguradora, perícia e fiscalização de obra como registro do estado de um lugar numa data
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Perito e cartório passam a exigir cadeia de custódia do arquivo, com fotos-fonte, poses e hash
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Captura sem proveniência é rejeitada em juízo e surge um mercado de captura certificada com equipamento lacrado
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Órgãos de patrimônio trocam a campanha de laser scanning por captura de emergência com celular quando a janela de documentação é de horas
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O acervo público passa a ter duas camadas incompatíveis, a métrica e cara e a visual e barata, e é a segunda que o público conhece
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O gargalo migra de capturar para guardar e transmitir, e o custo de armazenamento freia a captura indiscriminada
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Plataformas passam a expirar capturas antigas por padrão e o lugar gravado torna-se efêmero
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Arquivos públicos assumem a guarda do que a plataforma descarta e a memória volumétrica da cidade passa a depender de política de arquivo
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Formato com nível de detalhe por streaming vira cláusula de contrato e captura fora do padrão perde valor comercial
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e4
        ordem: 1
        efeito: Bancos de ativo 3D veem encolher o catálogo de ambiente, porque ambiente deixa de ser comprado como malha
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Esses bancos migram para vender objeto isolado, editável e reiluminável, que a captura ainda não entrega
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A malha editável vira artigo premium e a captura vira commodity, invertendo a hierarquia de preço de hoje
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A iluminação deixa de ser decidida na pós e volta a ser decidida no momento da captura
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A direção de fotografia entra em campo junto com a equipe de captura, e não na finalização
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Hora de captura vira item de orçamento como hora de locação e a janela de luz volta a governar o cronograma de produção
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Firma-se a divisão entre cena que se vê, feita de splat, e cena com que se interage, feita de malha, e produções mantêm as duas
            sinal: forte
            prazo: 2032
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O custo de manter dois pipelines empurra produtoras pequenas a escolher um só e o splat puro consolida-se como estética assumida do audiovisual independente
                sinal: fraco
                prazo: 2037
                confianca: media
  - disrupcao: A captura deixa de ser um evento e passa a ser um gesto, processado no aparelho
    efeitos:
      - id: e6
        ordem: 1
        efeito: Filmar passa a ser escanear, e a captura deixa de ser um ato distinguível por quem está no lugar
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A placa de proibido filmar perde função, porque o que se quer proibir é o levantamento do espaço e o gesto é o mesmo
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Varejo, hospital e escola passam a tratar a planta do próprio espaço como segredo operacional e adotam sinalização de não-captura
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Lojas e restaurantes descobrem o próprio interior publicado como cenário navegável por terceiros, sem contrato
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A resposta comercial não é proibir e sim publicar primeiro, e a marca captura o próprio espaço para não perder o controle da representação
                sinal: fraco
                prazo: 2036
                confianca: media
      - id: e7
        ordem: 1
        efeito: Processar no aparelho elimina o servidor, que era o único ponto onde se podia filtrar, registrar ou recusar uma captura
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A regulação desloca-se de quem processa para quem publica, porque o processador deixou de ser alcançável
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Plataformas de hospedagem de splats herdam o papel de árbitro de remoção que as redes sociais têm hoje, e a disputa passa a ser sobre retirar, não sobre capturar
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A ANPD chega ao tema com a captura já fora do alcance do controlador clássico, porque sua regulamentação de biometria ainda não saiu em 2026
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: O Brasil protege a aparência por direito de autor, na linha dinamarquesa, em vez de protegê-la por dado pessoal, porque o eixo do dano é a semelhança e não a identificação
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A reação social ao escaneamento ambiente encarece a captura em espaço de convívio antes de qualquer lei
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Bares, academias e coworkings proíbem captura por contrato de uso, e o descumprimento vira caso de expulsão e não de processo
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Forma-se uma assimetria em que o espaço público fica integralmente capturado e o espaço privado de convívio fica fora, e o mundo navegável passa a retratar só metade da vida
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O movimento humano vira ativo capturável por qualquer um e o acervo de movimento deixa de ser barreira de entrada em animação
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Estúdios de mocap perdem a receita de aluguel de volume e migram para limpeza, retargeting e garantia de qualidade
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Dançarinos e atletas licenciam o próprio jeito de mover como repertório e a assinatura de movimento entra em contrato sindical
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: A animação de fundo, de multidão e de transeunte deixa de ser produzida e passa a ser colhida da rua
            sinal: medio
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Figurantes perdem cachê recorrente e ganham uma causa de uso indevido de imagem que a lei ainda não tipifica em três dimensões
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: Captura e geração convergem no mesmo arquivo
    efeitos:
      - id: e10
        ordem: 1
        efeito: O arquivo deixa de informar se o lugar existe, porque o mesmo contêiner guarda um quarteirão real e um quarteirão inventado
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Proveniência vira cláusula de contrato antes de virar exigência de norma, empurrada por quem compra e não por quem regula
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: O selo de capturado passa a valer mais que o de gerado onde o real importa, e menos onde não importa, partindo o mercado em dois preços
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Capturas passam a ser entregues com a parte inventada indistinguível da parte observada, e o usuário deixa de saber onde o modelo parou de ver
            sinal: forte
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A oclusão deixa de ser limite técnico e vira decisão editorial, e escolher o que o modelo inventa atrás do balcão passa a ser direção de arte
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Robótica e veículo autônomo tornam-se o maior comprador de captura, e a mídia herda ferramentas projetadas para máquina
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O requisito de fidelidade muda e passa a valer o que faz a política do robô transferir, não o que convence o olho humano
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Ferramenta de mídia herda métrica de robótica e o vocabulário de qualidade visual cede espaço ao de utilidade de treino
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: A base de captura vira infraestrutura com dono e quem detém as poses do mundo cobra pedágio de quem quer se localizar nele
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Cidades brasileiras que já mantêm gêmeo digital próprio descobrem-se donas de um ativo geoespacial e passam a licenciá-lo em vez de publicá-lo
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A indistinção entre capturado e gerado corrói a confiança que dava valor à captura, e o próprio mercado restringe o uso
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Veículos jornalísticos recusam splat sem cadeia de proveniência, como já recusam fotografia sem origem
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Forma-se um acervo de fé pública, capturado por instituição com protocolo, pequeno e caro, ao lado de um oceano barato sem procedência
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: A fotografia documental perde o monopólio do eu estive lá, porque o registro navegável entrega presença que a imagem plana não entrega
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Prêmios e editais de fotografia precisam decidir se criam ou recusam categoria de registro volumétrico, e a disputa sobre o que conta como documento reabre
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O critério de autoria desloca-se do enquadramento para o percurso, e autor passa a ser quem decide por onde se anda e não de onde se olha
                sinal: fraco
                prazo: 2048
                confianca: baixa
```

### 5.1 Os mecanismos, um a um

O bloco acima diz o quê e quando. Não diz **por quê** — e sem o porquê o efeito não entra.
Cada linha abaixo é o mecanismo obrigatório, na forma *porque o efeito pai faz tal coisa*.

**Raiz A — o 3D vira gravação.**

`e1` — porque o splat chega pronto para render e **não se deixa remodelar**, o que se
negocia deixa de ser um ativo adaptável e passa a ser acesso a um registro. A analogia com
a trilha de biblioteca não é retórica: é a mesma estrutura de licença de um bem que não se
altera. *Classe de referência do prazo:* a biblioteca de textura fotográfica (Quixel
Megascans) levou de 2015 a 2019 — quatro anos — para virar item de pipeline padrão depois
de ter formato e integração de engine. `KHR_gaussian_splatting` foi ratificado em 2026;
2030 é o mesmo intervalo. *Artefatos hoje:* três — produção entregue (*Superman*), tabela
de preço por sítio (US$ 10–50 mil para ambiente de virtual production), suporte nativo em
Nuke 17. Daí `sinal: forte`.

`e1.1` — porque um registro pode ser reusado em produções que o proprietário nunca viu, e
o *location release* atual autoriza filmagem, não redistribuição de um levantamento
volumétrico. *Classe de referência:* a licença de imagem de acervo migrou de "uso único"
para "licença por escopo" ao longo de cerca de oito anos depois da digitalização
(1997–2005). 2034 é oito anos depois de `e1` estar assentado.

`e1.1.1` — porque o art. 48 da Lei 9.610/98 libera a representação de obra em logradouro
público, mas o STJ já decidiu que a exploração **comercial** da obra arquitetônica é
direito exclusivo do autor quando ela é protagonista e inconfundível [F15b]. Uma captura
navegável torna a fachada protagonista por construção. Este é um efeito **especificamente
brasileiro** e não se transporta para jurisdições de liberdade de panorama ampla.
*Prazo longo (2041)* porque direito de autor se move em escala de década: o precedente é
de 2016 e ainda não gerou prática de mercado dez anos depois.

`e1.2` — porque o gargalo deixa de ser produzir geometria e passa a ser **sanear registro**.
O SuperSplat existe exatamente para isso — inspecionar, limpar, otimizar, publicar [F5] —
e 10,2 mil estrelas dizem que há gente fazendo isso todo dia. *Artefatos hoje:* dois
(ferramenta dedicada de limpeza; 415 vagas abertas no campo em julho de 2026 [F15]) →
`sinal: medio`.

`e2` — porque um registro indicial barato compete com o laudo fotográfico, e o que a
perícia quer é justamente o que o splat entrega: o estado de um lugar numa data, navegável.
O limite está no mesmo lugar: 7,82 cm de erro médio [F13] servem para **mostrar**, não
para **medir**. Por isso `e2` fala em estatuto probatório e não em substituição do
levantamento métrico.

`e2.1` — porque, uma vez que `e10` seja verdade, o juiz não pode olhar o arquivo e saber.
Os dois ramos convergem aqui; é a convergência descrita em 5.2.

`e2.2` — porque a janela de documentação de bem sob ameaça é medida em horas e a campanha
de laser scanning é medida em semanas e em orçamento de projeto. Já há literatura
propondo exatamente isso para patrimônio em emergência. *Nota:* a fonte que sustenta esse
ponto é o único artigo que **não consegui abrir** (403 no MDPI) e por isso o efeito entra
com `confianca: media` e não alta — registrado na seção 12.

`e3` **(retroação da raiz A)** — porque uma cena de 4 milhões de gaussianas ocupa ~1.400 MB
em PLY cru e ~100–250 MB em SPZ [F14], e o número de capturas cresce mais rápido que a
razão de compressão. A captura fica barata de fazer e cara de manter, e é o custo de
manutenção que freia. *Classe de referência:* o vídeo doméstico em alta definição —
gravar ficou grátis em 2010; guardar continuou pago, e a solução foi expiração por padrão
(Stories, 2016).

`e3.1` — porque a plataforma que hospeda não tem incentivo para guardar de graça o que
ninguém acessa. *Confiança baixa*, porque há um contra-incentivo forte: capturas antigas
são exatamente o dado de treino que a raiz C valoriza, e o mesmo ator pode preferir manter.

`e3.2` — porque o SOG organiza as gaussianas espacialmente em árvore com níveis de detalhe
e permite começar a render antes do download terminar [F14], e num serviço web isso é a
diferença entre 26 e 224 segundos de espera. Quem entrega sem isso perde contrato.

`e4` — porque um ambiente capturado chega mais barato e mais parecido com o lugar do que
um ambiente comprado e montado. Quem perde é nomeável: o catálogo de *environment* dos
bancos de ativo.

`e4.1` e `e4.1.1` — porque o que a captura **não** entrega (objeto isolado, editável,
reiluminável) é precisamente o que os bancos sabem vender, e escassez inverte preço.

`e5` — porque o 3DGS assa a iluminação nos harmônicos esféricos e não há caminho produtivo
de reiluminação em 2026. Este é o efeito de maior confiança do mapa e o de prazo mais
curto (2029), porque **já está acontecendo** em quem usa splat em virtual production.
*Artefatos hoje:* três (relighting como problema aberto declarado na literatura; splat
usado como fundo e não como objeto interativo; uso em ICVFX e previs [F10]) →
`sinal: forte`.

`e5.1` — porque, se a luz é decidida na captura, a decisão de fotografia migra para o
momento em que a equipe de scan está em campo, e não para a sala de finalização.

`e5.1.1` — porque quem paga hora de locação passa a pagar hora de *captura na luz certa*.
É um retorno, não uma novidade: é como o cinema funcionava antes de o LED wall permitir
adiar a decisão de luz.

`e5.2` — porque nenhum dos dois formatos faz o trabalho do outro, e produções com dinheiro
mantêm ambos. *Artefatos hoje:* três (Marble exporta splat **e** malha de colisão [F8];
Scaniverse exporta FBX **e** SPZ [F7]; o OpenUSD 26.03 acomoda os dois no mesmo grafo
[F4]) → `sinal: forte`, e a confiança cai para `media` só porque a persistência da
divisão até 2032 depende de a reiluminação continuar sem solução.

`e5.2.1` — porque manter dois pipelines custa, e quem não pode manter escolhe o barato.
A estética chapada do splat — luz assada, flutuante na borda, buraco onde a câmera não
foi — vira marca, não defeito. É o mesmo movimento do grão do Super 8 e do ruído do DV.

**Raiz B — a captura vira gesto.**

`e6` — porque, quando o mesmo vídeo casual serve para assistir e para reconstruir [F11] e
o processamento cabe no aparelho [F6], não há gesto externo que distinga uma coisa da
outra. Quem está no lugar não consegue saber. *Confiança alta* apesar de `sinal: medio`,
porque o mecanismo é robusto: não depende de adoção em massa, depende de a capacidade
existir e de alguém usá-la.

`e6.1` — porque a proibição de filmar protege a imagem de um instante, e o dano aqui é a
planta do espaço. Proibir o gesto exigiria proibir todo celular, o que já se mostrou
inviável.

`e6.1.1` — porque planta, fluxo e disposição de prateleira são informação concorrencial e
de segurança. *Confiança baixa*: depende de um caso concreto de dano que ainda não
aconteceu.

`e6.2` — porque publicar cenário navegável de um interior comercial não exige autorização
no arcabouço atual, e a captura já não é trabalhosa. *Artefatos hoje:* dois (Scaniverse
com colaboração de múltiplos capturadores no mesmo projeto [F7]; plataformas de publicação
de splat abertas [F5]).

`e6.2.1` — porque o precedente existe e é conhecido: a resposta do varejo ao Street View
não foi processo, foi o Business View — publicar a versão oficial. Isso dá `media` mesmo
na terceira ordem, e é uma das duas exceções de calibração do mapa.

`e7` — porque um pipeline que não passa por servidor não tem onde ser interceptado. Este
é o efeito que mais gente subestima e é puramente estrutural: não depende de intenção de
ninguém.

`e7.1` — porque o regulador vai atrás de quem ele alcança. *Confiança baixa e prazo 2036*
porque a classe de referência é lenta: a responsabilização de plataforma por conteúdo de
terceiro levou de 1996 (CDA 230) a 2018–2024 para ser revista, e no Brasil o Marco Civil
de 2014 só teve o art. 19 mexido em 2025.

`e7.2` — porque a ANPD chega depois: a regulamentação específica de dado biométrico ainda
não havia saído em 2026, e o conceito que ela vai usar (dado para identificação) não
cobre bem o que é uma captura volumétrica de uma pessoa, que é **aparência**, não
identificador. Este é o efeito que a skill exigiria recusar se estivesse escrito como
"o regulador cria uma categoria nova" — entra com o regulador nomeado, o instrumento
nomeado e o mecanismo do descompasso.

`e7.2.1` — porque a Dinamarca já escolheu o outro eixo: proteger características físicas
pessoais **dentro da lei de direito autoral**, com 50 anos post mortem, com entrada em
vigor prevista para 1º de julho de 2026 [F18]. *Classe de referência:* o efeito Bruxelas
— GDPR (2016) → LGPD sancionada em 2018, vigente em 2020: cerca de quatro anos da norma
europeia à lei brasileira, mais seis até regulamentação setorial. Dinamarca 2026 + 20
anos = 2046, e mesmo isso é otimista porque a Dinamarca não é a UE.

`e8` **(retroação da raiz B)** — porque o freio de captura ambiente historicamente não é
lei, é **constrangimento social**: o Google Glass foi banido de bares e cinemas em 2013–14
antes de qualquer legislação, e morreu por isso. *Confiança media, sinal fraco* — não há
artefato hoje; é inferência a partir de um caso análogo forte.

`e8.1` e `e8.1.1` — porque contrato de uso do espaço é o instrumento que o estabelecimento
tem à mão, e ele é privado, não precisa de lei. A consequência de terceira ordem é o viés
de amostragem: o mundo navegável retrata o que é capturável, e o que é capturável é o
público e o comercial, não o íntimo.

`e9` — porque a captura de movimento sem marcador dispensa traje, volume e técnico, e o
que era barreira de entrada (o acervo de movimento) vira commodity. *Artefatos hoje:* dois
(Move AI em produção com clientes nomeados [F12]; 4DAnyone reconstruindo pessoa em
movimento de um vídeo só [F11]).

`e9.1` — porque a receita de estúdio de mocap vem do volume alugado, e o volume é o que
some primeiro. Sobra o que exige julgamento: limpar, retargetar, garantir.

`e9.2` — **rebaixado no §6**. Ver registro de alterações.

`e9.2.1` — porque a lei brasileira protege a imagem da pessoa, mas um esqueleto extraído
de vídeo não é imagem nem é dado de identificação: é *jeito de andar*. Não há tipificação.

**Raiz C — captura e geração convergem.**

`e10` — porque o Marble exporta splat gaussiano [F8] no mesmo formato que o Scaniverse
[F7], e a especificação ratificada não tem campo de proveniência [F3]. *Artefatos hoje:*
três (Marble em GA com exportação em `.ply`/`.spz`; padrão sem campo de origem; pilha
NVIDIA combinando reconstrução NuRec com preenchimento generativo Cosmos [F9]) →
`sinal: forte`, `confianca: alta`.

`e10.1` — porque quem compra é quem tem prejuízo se o ativo for inventado, e contrato se
muda mais rápido que norma. *Classe de referência:* a exigência de *model release* e
*property release* em banco de imagem foi contratual muito antes de ser regra — Adobe
Stock e congêneres a impõem hoje por política, não por lei.

`e10.2` — porque o preenchimento generativo já está dentro do pipeline de captura: o
*spatial reframing* da Apple completa céu e chão de uma panorâmica; a pilha NVIDIA combina
NuRec e Cosmos [F9]. Não é um risco futuro; é uma prática corrente sem rótulo. `sinal:
forte`, e `confianca: media` só porque a **generalização** para toda captura de consumo
ainda não se verificou.

`e11` — porque o dinheiro está lá: Wayve US$ 1 bi+, Niantic Spatial US$ 250 mi [F15], e o
Scaniverse foi lançado mirando robótica, energia, construção e logística — não
entretenimento [F7]. Quem paga a conta define o roadmap, e a mídia usa a ferramenta que
sobra.

`e11.1` — porque a métrica de quem treina robô é transferência para o real, não beleza.
Uma cena com flutuante visível mas geometria consistente é boa para robô e ruim para
plano de cinema, e o desenvolvimento seguirá a primeira.

`e11.2` — porque localizar-se num mapa requer acesso ao mapa, e o VPS 2.0 promete
localização global a nível de centímetro sobre uma base proprietária [F7]. *Confiança
baixa*: há o contraexemplo do OpenStreetMap, e a Niantic abriu o SPZ.

`e11.2.1` — porque Niterói, Curitiba e São Paulo já têm o ativo [F16] e nenhum deles tem
política de licenciamento. A primeira prefeitura que descobrir que a base vale dinheiro
muda o regime de acesso das demais.

`e12` **(retroação da raiz C)** — porque a confiança é o que dava valor econômico à
captura (a raiz A), e a raiz C a destrói. Quando isso fica visível, o mercado — não o
regulador — restringe. *Prazo 2036*: é um efeito de reação, e precisa de um episódio.

`e12.1` e `e12.1.1` — porque a redação de veículo jornalístico já opera protocolo de
origem para fotografia e o estenderá ao volumétrico; e porque protocolo custa, o acervo
confiável será pequeno.

`e13` — porque presença navegável entrega ao espectador o que a foto plana não entrega:
a escolha de para onde olhar. A fotografia documental perde exclusividade sobre a
categoria "estive lá".

`e13.1` e `e13.1.1` — porque prêmio e edital são onde a disputa sobre o que é documento
acontece publicamente (foi assim com a fotografia manipulada digitalmente, no World Press
Photo dos anos 2010); e porque, num registro navegável, quem monta o percurso exerce a
função que o enquadramento exercia.

### 5.2 Cruzamentos

**Convergência (o achado mais valioso do mapa).** Dois ramos de raízes diferentes chegam
ao mesmo efeito de segunda ordem: `e2.1` (perito e cartório exigem cadeia de custódia) e
`e10.1` (proveniência vira cláusula de contrato) são o mesmo requisito, chegando por
caminhos que não se conhecem. O primeiro vem da raiz A — a captura virou registro, e
registro precisa de custódia. O segundo vem da raiz C — o formato não distingue observado
de inventado, e quem compra precisa saber. Convergência independente é sinal forte: a
probabilidade de que **proveniência de captura volumétrica** seja um requisito real até
meados da década de 2030 é maior do que qualquer um dos dois ramos sugeriria isolado.
Um segundo ponto de convergência, mais fraco: `e6.2.1` (a marca captura o próprio espaço
para controlar a representação) e `e1.1` (o location release vira licença de dados) são
a mesma resposta — *tomar posse do registro antes que outro tome* — vinda de raízes A e B.

**Retroalimentação.** `e12.1.1` fecha ciclo sobre a raiz A e a **reforça** por escassez:
quando o acervo de fé pública se separar do oceano sem procedência, a captura certificada
volta a valer muito — exatamente porque a raiz C tornou o resto sem valor probatório.
A raiz C, ao destruir a garantia da raiz A, cria o mercado que dá à raiz A sua maior
margem. Em sentido oposto, `e3` (custo de guardar) freia as três raízes ao mesmo tempo,
por um canal puramente econômico.

**Contradição — e é a central deste mapa.** A raiz A afirma que o 3D ganha estatuto de
registro. A raiz C afirma que o arquivo deixa de informar se o lugar existe. As duas não
podem valer plenamente ao mesmo tempo: se qualquer `.spz` pode ser invenção, então
nenhum `.spz` prova nada, e `e2` (estatuto probatório) não acontece. **Não resolvo a
contradição aqui.** O que decide entre as duas é um fato verificável e datável: se um
esquema de proveniência que sobreviva à edição for adotado **antes** de o volume de
material gerado superar o de material capturado, a raiz A ganha e a raiz C vira problema
de rotulagem; se for depois, a raiz C ganha e a raiz A vira nicho caro. É exatamente essa
a pergunta que o experimento da seção 10 tenta atacar em escala de sala de aula.

### 5.3 Cobertura STEEP e quem perde

| Eixo | Efeitos de 1ª ordem | Observação |
|---|---|---|
| **Social** | `e6`, `e8`, `e13` | o gesto de capturar e a reação a ele |
| **Tecnológico** | `e5`, `e7`, `e10` | luz assada, fim do gargalo de nuvem, formato único |
| **Econômico** | `e1`, `e3`, `e4`, `e11`, `e12` | catálogo, armazenamento, ativo 3D, quem paga |
| **Político-jurídico** | `e2`, `e9` | prova, e a propriedade do movimento |
| **Ecológico** | *vazio* | ver abaixo |

**O eixo ecológico ficou vazio, e registro isso em vez de forçar.** Há um efeito plausível
— captura substituindo deslocamento de equipe, e portanto reduzindo emissão de produção —
mas ele falha no teste de especificidade da skill: a mesma frase serve para qualquer
tecnologia de trabalho remoto e não deriva especificamente da captura neural. E há o
contrário — treino de splat consome GPU. Sem número dos dois lados, não entra. Fica na
seção 12.

**Quem perde, nomeado.** Modeladores de ambiente (`e1.2`); bancos de ativo 3D no catálogo
de ambiente (`e4`); estúdios de mocap na receita de volume (`e9.1`); figurantes (`e9.2.1`);
fotógrafos documentais na exclusividade do "estive lá" (`e13`); e, em `e8.1.1`, quem
frequenta espaços que ficam de fora do mundo capturável — os lugares de menor renda, que
são os que menos têm política de captura própria.

**Um efeito de terceira ordem passa do horizonte.** `e13.1.1` (a autoria desloca-se do
enquadramento para o percurso) está datado em **2048**, dois anos além de 2046. Fica
registrado: ele está **fora da janela deste mapa** e entra porque a cadeia causal chega
lá, não porque eu saiba dizer 2048 com precisão. Todos os demais efeitos de terceira
ordem cabem dentro do horizonte, o que é menos um mérito do mapa que uma consequência de
o horizonte ser longo — ver a crítica no §7.

## 6. Sinais fracos e wildcards

### 6.1 Sinal fraco — reconstrução como programa, não como dado

**O que é.** Em vez de devolver malha ou nuvem de gaussianas, a reconstrução devolve
**código que desenha a cena** — no caso levantado pela turma, `img2threejs`, que
reconstrói um objeto de uma imagem de referência como modelo Three.js procedural.

**Onde foi visto.** Na varredura de ferramentas da própria disciplina; não encontrei
literatura acadêmica consolidada sobre o caminho, o que é parte do motivo de ele ser
sinal fraco e não raiz.

**O que mudaria.** Tudo o que este mapa afirma sobre a não-editabilidade da captura
(raiz A inteira, `e4`, `e5.2`) pressupõe que o produto da captura é **dado**. Se o produto
for **programa**, ele é editável por definição, versionável em git, difável, e a
reiluminação deixa de ser problema porque a luz é um parâmetro. A raiz A perderia sua
propriedade mais forte, e `e1.2` (limpador de captura) viraria outra coisa: programador
de cena. Liga-se diretamente ao tema 14 da disciplina.

**Sinal observável que diria que está crescendo.** Um modelo de reconstrução com pesos
abertos publicado no Hugging Face cujo *output* declarado seja código de cena (glTF
procedural, Three.js, USD com expressões) e não geometria; ou um item de roadmap da
Khronos ou da AOUSD que trate representação procedural de cena reconstruída. Nenhum dos
dois existe hoje.

### 6.2 Sinal fraco — captura como dado de treino que se esgota

**O que é.** A Niantic Spatial construiu a base do seu Large Geospatial Model sobre
dezenas de bilhões de imagens com pose. A captura de consumo alimenta modelo, e modelo
alimenta produto de captura melhor, que gera mais captura.

**Onde foi visto.** No lançamento do Scaniverse e do VPS 2.0, que descreve a plataforma
como *"a porta de entrada"* para os serviços de inteligência espacial da empresa [F7].

**O que mudaria.** Se o ciclo saturar — se mais captura deixar de melhorar o modelo —, o
incentivo de manter a captura de consumo gratuita desaparece, e `e3` (o custo de guardar)
chega mais cedo e mais forte: o hospedeiro deixa de ter razão para armazenar de graça.

**Sinal observável.** Introdução de cobrança por captura em plataforma hoje gratuita, ou
mudança de termos que reserve explicitamente o uso do dado do usuário para treino — com
opção de recusa que degrade o serviço.

### 6.3 Sinal fraco — o splat de uma pessoa como categoria jurídica própria

**O que é.** A distinção entre *identificar* uma pessoa (dado biométrico) e *reproduzir a
aparência* de uma pessoa (semelhança). A Dinamarca escolheu a segunda e a colocou na lei
de direito autoral, com 50 anos post mortem [F18]. O Brasil não escolheu nenhuma das duas
para o caso 3D.

**O que mudaria.** Se a aparência volumétrica virar categoria autônoma, `e9.1.1`
(licenciamento de movimento) e `e9.2.1` (figurantes) antecipam em anos, e a captura de
pessoas em espaço público passa a exigir instrumento que hoje não existe.

**Sinal observável.** Primeira decisão judicial, em qualquer jurisdição, que trate uma
captura volumétrica como obra derivada da aparência de alguém — e não como fotografia nem
como dado pessoal.

### 6.4 Wildcard — a captura em massa sem consentimento vira o caso público que define o campo

**O mecanismo.** Um splat de uma pessoa, capturado em espaço público sem que ela soubesse
— hoje possível a partir de um único vídeo casual [F11] —, aparece em peça comercial de
grande alcance. A pessoa é reconhecível, o uso é comercial, e nenhuma das três molduras
jurídicas disponíveis (direito de imagem, dado pessoal, direito autoral) encaixa
limpamente, porque o objeto não é foto, não identifica e não é obra dela.

**Por que é improvável.** Porque grande anunciante não corre esse risco de propósito;
porque cadeia de suprimento de agência tem *clearance*; e porque a qualidade do resultado
ainda denuncia a origem casual.

**O que faria com o mapa.** Antecipa `e7.2`, `e9.2.1` e `e6.1.1` em cinco a dez anos e,
principalmente, **inverte a ordem** do mapa: a regulação deixaria de vir depois do
mercado (`e10.1` antes de `e7.1`) e passaria a vir antes. Toda a raiz B ficaria mais
lenta e mais cara.

**Sinal precoce.** Uma ação coletiva sob a BIPA de Illinois — ou equivalente — contra
aplicativo de captura volumétrica, não de avatar facial. O precedente de rosto já existe
(Ready Player Me, Lensa); o de corpo em três dimensões, não.

### 6.5 Wildcard — o mundo gerado fica melhor que o mundo capturado

**O mecanismo.** Um modelo de mundo gerado alcança qualidade visual e coerência
geométrica superiores às de uma captura de celular, em qualquer lugar solicitado por
texto — inclusive lugares reais, gerados de memória e não de sensor. A captura deixa de
ser o caminho mais barato para o fotorrealismo específico.

**Por que é improvável.** Porque *especificidade* é o que a captura tem e a geração não:
gerar "uma praça em Recife" é fácil; gerar *aquela* praça, com *aquele* poste torto, não.
O Marble declara que, em prompt de texto ou imagem única, precisa inventar tudo o que não
está no prompt [F8].

**O que faria com o mapa.** Mataria as raízes A e B — se ninguém precisa capturar, não há
registro nem gesto — e deixaria só a raiz C, que vira o mapa inteiro. Os efeitos `e2`,
`e6`, `e8` e `e9` desapareceriam.

**Sinal precoce.** Um benchmark público em que um modelo gerativo reconstrua um lugar
**nomeado e real** com fidelidade métrica medida contra captura de referência, sem
receber imagem daquele lugar.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria do §6 da skill, aplicada ao mapa já pronto. Ela **alterou
o mapa**: sete efeitos foram rebaixados, quatro foram removidos e três prazos foram
empurrados. O registro auditável está em 7.8.

### 7.1 Pré-mortem — é 2046 e este mapa se mostrou errado. Por quê?

**Razão 1 — a reiluminação foi resolvida em 2029 e a raiz A desmontou.** É a falha mais
provável de todas, porque é a única que é puramente técnica e tem gente boa trabalhando
nela. Se um splat puder ser reiluminado sem perda, ele deixa de ser gravação e volta a ser
desenho: `e5` inteiro cai, `e5.1`, `e5.1.1`, `e5.2` e `e5.2.1` caem com ele, e `e4.1.1`
(a malha como artigo premium) inverte-se. Sobra a raiz A com metade da força: continua
valendo que o 3D é indexado a lugar e data, mas some a propriedade que mais consequência
gera. *Ação tomada:* `e5.2` rebaixado de `alta` para `media`, com a razão escrita no §5.1.
Não removi `e5` porque o sinal hoje é forte e o mecanismo é físico, não de mercado.

**Razão 2 — a raiz B não escalou e ficou em curiosidade de aplicativo.** O Scantic é um
aplicativo pago de agosto de 2026 e o 4DAnyone é artigo de conferência. Se a captura no
aparelho encalhar por consumo de bateria e qualidade, tudo o que se segue — o fim do
gargalo de nuvem, a placa de proibido filmar, a reação social — não acontece, e a captura
continua sendo evento anunciado com equipe. *Ação tomada:* `e7.1`, `e7.2` e `e8.1`
rebaixados para `baixa`; `e9.2` rebaixado para `baixa`.

**Razão 3 — errei o comprador.** O mapa assume que mídia e interação são um mercado
relevante para esta tecnologia. O lançamento do Scaniverse [F7] e a pilha NuRec [F9]
sugerem o contrário: quem paga é robótica, energia, construção e logística, e o
entretenimento é um cliente lateral. Se for esse o caso, o mapa inteiro está escrito para
o público errado — os efeitos que importariam seriam os de infraestrutura, e os de ofício
criativo seriam ruído. *Ação tomada:* `e11` foi promovido de segunda para primeira ordem
durante a revisão, justamente para que essa possibilidade estivesse no mapa e não apenas
na crítica dele.

### 7.2 Extrapolação linear

Três efeitos eram "mais do mesmo, maior", e cada um precisou de mecanismo de
não-linearidade ou perdeu uma ordem:

- `e3` (custo de guardar) era extrapolação de que dado cresce. Ganhou não-linearidade
  concreta: a razão de compressão tem teto físico (SPZ ~10×, SOG ~90–94% [F14]) enquanto
  o número de capturas não tem. É uma tesoura, não uma reta. Mantido.
- `e4` (bancos de ativo encolhem) era "menos vendas". Ganhou o mecanismo de **inversão de
  hierarquia de preço** em `e4.1.1`, que é o que o torna não-trivial. Mantido.
- **Removido:** um efeito que dizia "a qualidade da captura aumenta e mais gente captura".
  Isso é a tendência, não um efeito dela. Foi para a seção 12.

### 7.3 Velocidade de adoção

Confrontei cada prazo com sinal fraco contra a classe de referência do §5.1. Dois não
passaram:

- `e7.2.1` (o Brasil adota a via dinamarquesa) estava em **2042**. A classe de referência
  é o efeito Bruxelas medido: GDPR aplicável em 2018 → LGPD vigente em 2020 → regulamentação
  setorial de biometria **ainda pendente em 2026**. São seis anos só para a lei, mais de
  seis para a regra específica, e a Dinamarca de 2026 nem é norma da UE — é lei de um
  Estado-membro que ainda precisaria ser europeizada antes de chegar aqui. **Empurrado
  para 2046**, e mesmo assim é otimista.
- `e13.1.1` (autoria como percurso) estava em **2044**. A classe de referência é a
  disputa sobre fotografia manipulada no fotojornalismo, que levou de meados dos anos 1990
  a meados dos anos 2010 — vinte anos — para produzir critério estável de prêmio.
  **Empurrado para 2048**, o que o coloca fora do horizonte deste mapa, e assim está
  declarado no §5.3.
- `e12` (o mercado restringe o uso) estava em **2032** e assumia que a reação vem logo
  depois da causa. Não vem: a reação depende de um episódio público, e episódio não se
  agenda. **Empurrado para 2036.**

### 7.4 A raiz que não acontece

**Se a raiz A não se concretizar** — se a captura não conseguir o estatuto de registro e
permanecer só um jeito barato de fazer cenário —, sobra bastante mapa: as raízes B e C
continuam de pé, e com elas `e6` a `e13`. O que se perde é o eixo jurídico-probatório
(`e2` e filhos). O mapa fica menor, não vazio.

**Se a raiz B não se concretizar** — se a captura continuar sendo produção com equipe —,
perdem-se `e6`, `e7`, `e8` e metade de `e9`, e o mapa perde justamente o que tem de
específico sobre privacidade e espaço. Mas as raízes A e C não dependem dela: um estúdio
com rig produz tanto registro quanto um celular.

**Se a raiz C não se concretizar** — se geração e captura permanecerem distinguíveis —, a
raiz A fica **mais forte**, não mais fraca, e `e2` acontece antes. Isto é sinal de que as
raízes são de fato independentes e não uma só disfarçada em três: a ausência de uma muda
o sinal das outras em direções diferentes. O teste do §6.4 da skill passa.

### 7.5 Suposições escondidas

Cinco, que o mapa assumia sem dizer:

1. **O formato ratificado continua aberto.** Se a Khronos ratificou mas o mercado
   convergir para um formato proprietário de quem tem a base de dados (o SPZ é da
   Niantic, mesmo sendo aberto), `e3.2` e `e11.2` mudam de sentido: o pedágio não é sobre
   as poses, é sobre o codec.
2. **Energia e GPU continuam acessíveis.** Treino de splat em escala de cidade pede RTX
   4090 e 128 GB de RAM [F13]. Se o custo de computação subir, a captura volta a ser
   serviço caro e `e6` (filmar é escanear) atrasa uma década.
3. **A regulação de captura continua permissiva.** O mapa assume que capturar espaço
   público continua lícito. Se um único país grande proibir, o wildcard de 6.4 vira
   cenário-base.
4. **Os modelos de reconstrução continuam com pesos abertos.** `e1.2` (o limpador de
   captura) pressupõe que a captura é acessível ao pequeno. Se a reconstrução de qualidade
   ficar restrita a três fornecedores de nuvem, `e7` (fim do gargalo) simplesmente não
   ocorre — o gargalo volta.
5. **O corpo humano continua capturável pelos mesmos métodos que o espaço.** O mapa trata
   pessoa e lugar no mesmo pipeline. É verdade em 2026, mas se o caminho para pessoa
   divergir (esqueleto paramétrico + roupa simulada, em vez de splat), `e9` sai da raiz B
   e vira tema próprio.

Cada uma dessas premissas quebrada gera um wildcard novo; as duas mais consequentes (3 e
4) estão refletidas nos wildcards do §6.

### 7.6 Viés do autor

Três, nomeados:

- **Viés de ofício.** Este mapa é escrito por quem ensina mídia e interação, e por isso
  dá cinco efeitos de primeira ordem à raiz A — a que fala de ofício criativo — e quatro
  a cada uma das outras. Se o comprador real for robótica (7.1, razão 3), essa proporção
  está invertida. Deixo assim e declaro, em vez de reequilibrar artificialmente.
- **Viés de gosto pela contradição.** A contradição A×C é intelectualmente satisfatória,
  e desconfio de mim quando algo é satisfatório demais. É possível que ela seja menos
  importante do que escrevi, porque em boa parte dos usos (jogo, publicidade, arquitetura
  de proposta) **ninguém liga** se o lugar existe. A contradição só morde onde o real
  importa, que é um nicho.
- **Viés de recorte brasileiro.** Coloquei três efeitos com nota Brasil (`e1.1.1`,
  `e7.2`/`e7.2.1`, `e11.2.1`) porque o briefing pediu a nota, e a nota puxa para o
  jurídico — que é onde o Brasil tem particularidade — em detrimento do econômico, que é
  onde o Brasil tem mais efeito real e menos particularidade.

### 7.7 Calibração

Distribuição final de confiança por ordem, contada no bloco:

| Ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1ª | 4 | 9 | 0 | 13 |
| 2ª | 0 | 15 | 7 | 22 |
| 3ª | 0 | 2 | 19 | 21 |

Cai com a ordem, como deve. Antes da bateria, a segunda ordem tinha 22 `media` e zero
`baixa` — uma distribuição chapada que não era calibração, era preguiça. Os sete
rebaixamentos de 7.8 corrigiram isso.

**Uma crítica que a bateria levantou e que não consegui resolver.** Com horizonte de vinte
anos, apenas **um** dos vinte e um efeitos de terceira ordem precisou passar do horizonte.
Isso pode significar duas coisas: que a cadeia causal se esgota antes de 2046, ou que o
mapa não está alcançando longe o bastante e escreveu um mapa de 2035 com data de 2046. Não
sei dizer qual das duas, e essa é a fraqueza mais séria deste documento. O sintoma está
visível: onze dos treze efeitos de primeira ordem chegam até 2033, o que deixa treze anos
do horizonte carregados apenas por segunda e terceira ordem. Um mapa de vinte anos honesto
teria provavelmente uma quarta raiz que ainda não é visível em 2026 — e essa, por
definição, não está aqui.

### 7.8 Registro de alterações

Cada linha traz o `id`, o valor **antes** e o valor **depois**.

**Rebaixamentos (sete, ao menos um por raiz):**

- `e3.1`: confianca `media` → `baixa`, porque há contra-incentivo forte — captura antiga é
  dado de treino valioso (§6.2), e o hospedeiro pode preferir manter em vez de expirar.
  *(raiz A)*
- `e5.2`: confianca `alta` → `media`, porque a persistência da divisão splat/malha depende
  inteiramente de a reiluminação continuar sem solução até 2032, que é a razão 1 do
  pré-mortem. *(raiz A)*
- `e7.1`: confianca `media` → `baixa`, porque a classe de referência de responsabilização
  de plataforma é lentíssima e o prazo 2036 já é agressivo. *(raiz B)*
- `e7.2`: confianca `media` → `baixa`, porque prever o que uma agência reguladora fará em
  doze anos, sobre uma categoria que ela ainda não regulou na forma simples, é chute
  vestido de análise. *(raiz B)*
- `e8.1`: confianca `media` → `baixa`, porque o mecanismo é uma analogia (Google Glass) e
  não um artefato observado neste tema. *(raiz B)*
- `e9.2`: confianca `media` → `baixa`, porque falha parcialmente no teste da causa solta:
  animação de multidão barata também vem de simulação procedural e de geração, que não
  dependem desta raiz. Mantido no mapa porque a *fonte* do movimento (colher da rua) é
  específica desta raiz, mas com confiança rebaixada. *(raiz B)*
- `e11.2`: confianca `media` → `baixa`, porque há contraexemplo direto — o OpenStreetMap
  existe e a própria Niantic abriu o SPZ; monopólio de poses não é o único desfecho.
  *(raiz C)*
- `e13.1`: confianca `media` → `baixa`, porque prêmio de fotografia é um sistema pequeno e
  idiossincrático e a inferência sobre ele é fraca. *(raiz C)*

**Prazos empurrados (três):**

- `e7.2.1`: prazo `2042` → `2046`, porque a classe de referência (GDPR → LGPD → regulação
  setorial) mediu mais de doze anos e a fonte é lei de um Estado-membro, não da UE.
- `e13.1.1`: prazo `2044` → `2048`, porque a disputa sobre fotografia manipulada levou
  cerca de vinte anos para produzir critério estável. Fica declaradamente fora do horizonte.
- `e12`: prazo `2032` → `2036`, porque é efeito de reação e depende de um episódio público
  que ainda não ocorreu.

**Removidos (quatro, todos para a seção 12):**

- *"A qualidade da captura aumenta e mais gente captura"* — removido: é a tendência, não um
  efeito dela (§7.2).
- *"Cursos de design e de audiovisual reorganizam o currículo em torno de captura"* —
  removido: é exatamente o efeito genérico que a skill proíbe; serve para qualquer tema,
  não nomeia curso nem mecanismo.
- *"Reguladores criam uma categoria jurídica para ativos volumétricos"* — removido na
  forma genérica; reescrito como `e7.2`, com regulador nomeado (ANPD), instrumento nomeado
  (regulamentação de dado biométrico) e o mecanismo do descompasso.
- *"A captura reduz a pegada de carbono da produção audiovisual ao substituir deslocamento
  de equipe"* — removido: falha no teste de especificidade (serve para qualquer tecnologia
  de trabalho remoto) e não tem número de nenhum dos dois lados. É a razão de o eixo
  ecológico do STEEP ficar vazio (§5.3).

**Promoção (uma):**

- `e11`: de efeito de segunda ordem sob `e10` para efeito de primeira ordem da raiz C,
  porque a razão 3 do pré-mortem mostrou que ele é a hipótese concorrente principal e
  precisava de visibilidade no mapa, não só na crítica.

A bateria derrubou coisa. Não é motivo de orgulho: a versão anterior tinha 22 efeitos de
segunda ordem todos com a mesma confiança, o que só se explica por eu não ter olhado.

## 8. O que a máquina errou

Eu sou a máquina. Sete itens desta rodada, específicos:

1. **Quase publiquei o status errado do padrão da Khronos, e as fontes que abri se
   contradizem.** As buscas e o comunicado de imprensa de 3/2/2026 dizem *release
   candidate*, com ratificação **esperada** para o segundo trimestre de 2026 [F2]; o
   levantamento de padrões repete isso [F13]. Mas a README da especificação no repositório
   do glTF, aberta hoje, diz *"Complete, Ratified by the Khronos Group"* [F3]. Escrevi
   "ratificado" apoiado na fonte primária e **deixei a divergência à vista** em vez de
   escolher em silêncio. Se a README estiver com o status atualizado antes da ratificação
   formal, a data de `e1` está adiantada.

2. **Descartei um número redondo que o mapa teria adorado usar.** "A Polycam recebe 120
   mil capturas por semana, uma a cada cinco segundos" apareceu em resumo de busca
   atribuído ao levantamento do RadianceFields. Abri a página de estatísticas [F15] e o
   número **não está lá**. É redondo demais, tem a cadência de material de marketing, e a
   atribuição não confere. Não foi usado em nenhum efeito, e está registrado na seção 12.

3. **Usei o iOS 26 Spatial Scenes para recusar um candidato a raiz, com fonte secundária.**
   A recusa nº 2 do §4.0 — paralaxe de foto única é maduro porque roda em todo iPhone 12+ —
   apoia-se em cobertura de imprensa especializada, não em documentação da Apple. A página
   de suporte que abri [F19] documenta captura de foto e vídeo espacial, mas **não**
   documenta geração de Spatial Scenes a partir de foto 2D comum. A recusa continua de pé
   (o recurso é amplamente noticiado e não é contestado), mas está apoiada mais frouxamente
   do que a redação sugere.

4. **Sustentei um efeito numa fonte que não consegui abrir.** O `e2.2` (patrimônio troca
   campanha de laser por captura de emergência) vem de um artigo do periódico *Heritage*
   sobre 3DGS a partir de drone de consumo. O servidor devolveu 403 e eu li apenas o
   resumo de busca. Por isso o efeito ficou em `confianca: media` e não `alta`, e a fonte
   **não entra na seção 11** — está na 12, como manda a regra de que fonte não aberta não
   entra.

5. **Repassei uma alegação de produção vinda de quem vende a ferramenta.** A informação de
   que *Superman* usou splats via ferramentas 3DGS em Houdini na Framestore [F10] vem do
   blog da Volinga, que comercializa tecnologia de splat para virtual production. Não é
   comunicado de estúdio nem reportagem independente. Usei como artefato de `e1` porque é
   verificável em princípio, mas o conflito de interesse é real e o `sinal: forte` de `e1`
   depende dela em um dos três artefatos.

6. **Citei jurisprudência sem o número do acórdão.** Escrevi "STJ, 3ª Turma, 2016" sobre
   obra arquitetônica e exploração comercial [F15b] porque a fonte que abri — artigo de
   doutrina no Migalhas — descreve a decisão mas não traz o número do REsp. Numa peça que
   fosse usada juridicamente isso seria inaceitável; aqui está declarado.

7. **Excluí todos os números de tamanho de mercado, e isso é uma escolha discutível.** As
   buscas devolveram "US$ 1,85 bi em 2026", "US$ 2,8 bi em 2025 → US$ 12,5 bi em 2034,
   CAGR 18,7%", "mercado de mocap sem marcador US$ 15,21 bi em 2025 → US$ 74,33 bi em
   2035". São mutuamente inconsistentes, vêm de agregadores de comunicado sem metodologia,
   e o último mede uma categoria que evidentemente não é só isto. Não usei nenhum. Mas o
   mapa fica, por causa disso, **sem nenhuma medida de tamanho econômico** — o que é uma
   lacuna, não uma virtude.

Um oitavo, sobre o processo e não sobre um fato: a primeira versão do bloco `roda:` saiu
com as vinte e duas linhas de segunda ordem marcadas `confianca: media`. Isso não é
calibração — é a resposta média de um modelo que não olhou caso a caso. Só o §6 da skill
pegou.

## 9. Três cenários para 2046

### Provável — "o registro tem preço e a cópia é grátis"

É 2046. Capturar um lugar é gesto comum e o resultado não vale nada por si: há mais splat
no mundo do que houve foto em 2010, e a maior parte nunca é vista duas vezes. O que vale
é o **registro com procedência** — capturado por instituição, com cadeia de custódia,
carimbado. Perícia de seguro, fiscalização de obra e arquivo público operam sobre esse
acervo pequeno e caro; todo o resto é material de fundo, comprado por assinatura como
trilha de biblioteca. O ofício de modelar ambiente praticamente desapareceu dos estúdios
grandes e sobrevive onde o que se quer não existe no mundo. Em compensação, o mercado
descobriu que ninguém queria realmente o mundo inteiro capturado: o custo de manter fez
as plataformas expirarem o que ninguém acessa, e a memória volumétrica de uma cidade
depende de haver política de arquivo — que a maioria das cidades não tem. No Brasil, as
prefeituras que investiram em LiDAR nos anos 2020 descobriram-se donas de uma camada
métrica que a camada neural não substituiu, e passaram a licenciá-la. **Sinal precoce de
que estamos entrando aqui:** a primeira grande plataforma de hospedagem de splats anunciar
expiração automática de capturas não acessadas, junto com um plano pago de guarda
permanente.

### Desejável — "proveniência antes do volume"

É 2046. Entre 2029 e 2033, empurrado por quem comprava e não por quem regulava, um esquema
de proveniência que sobrevive à edição entrou no `KHR_gaussian_splatting` e no OpenUSD:
todo splat diz de onde veio, quanto dele foi observado, quanto foi inventado e por qual
modelo, e o campo sobrevive ao recorte e à recompressão. Isso chegou **antes** de o
material gerado superar o capturado, e por isso a distinção ainda significa alguma coisa.
A consequência não foi restringir a geração — foi tornar as duas coisas úteis e
distinguíveis: jornalismo, patrimônio e perícia operam sobre o capturado; jogo, publicidade
e arquitetura de proposta operam sobre o gerado, sem constrangimento. A captura de pessoas
ganhou moldura própria, na linha que a Dinamarca abriu em 2026: aparência é da pessoa,
licenciável por ela, e dançarinos e atletas licenciam repertório de movimento como músicos
licenciam fonograma. O que teria sido preciso fazer para chegar aqui, e que é
inteiramente acionável em 2027: colocar proveniência na pauta do grupo de trabalho da
Khronos enquanto a extensão ainda é jovem, e escrever a exigência em contrato de compra
pública de captura — no Brasil, nos editais de gêmeo digital municipal, que já existem.
**Sinal precoce:** um edital público de captura 3D que exija metadado de proveniência como
requisito, e não como diferencial.

### Indesejável — "o mundo é uma cópia de dono desconhecido"

É 2046. A captura virou dado de treino antes de virar mídia, e quem acumulou poses do mundo
cobra pedágio de quem quer se localizar nele — inclusive de quem quer se localizar no
próprio bairro. Como o processamento migrou para o aparelho, não há a quem pedir remoção:
o splat de uma pessoa, capturado sem que ela soubesse, circula sem registro de origem, e
nenhuma das três molduras jurídicas encaixa. A resposta do espaço privado foi fechar —
bares, academias, escolas e hospitais proíbem captura por contrato — e o resultado é um
mundo navegável que retrata a rua e a loja e não retrata a vida, com o viés de renda que
isso implica. A distinção entre capturado e gerado desapareceu por desistência: como
ninguém conseguia manter proveniência, o mercado parou de pedir, e "estive lá" deixou de
ser uma afirmação verificável. O Brasil chegou tarde nos dois lados: a ANPD regulou
biometria para identificação, o que não cobre aparência, e os municípios publicaram suas
bases sem licença, que foram absorvidas por quem tinha escala. **Sinal precoce:** o
primeiro serviço de localização visual a cobrar por consulta em área já mapeada por dado
público — o momento em que a base deixa de ser bem comum e vira ativo com portaria.

## 10. O experimento

### O que é

**O mesmo lugar, três origens.** Escolhe-se um canto concreto do CIn — o corredor da
entrada, a escada, um pedaço do pátio — e produz-se dele **três splats gaussianos**:

1. **Capturado**: varredura com celular (Scaniverse, Polycam ou Scantic), 60 a 200 quadros,
   processada e limpa no SuperSplat.
2. **Gerado**: o mesmo canto descrito em texto e/ou a partir de **uma única foto**, gerado
   no Marble e exportado como splat.
3. **Reconstruído de uma imagem só**: a mesma foto passada por um modelo feed-forward de
   imagem única, convertida para splat.

Os três são publicados numa página web, com o mesmo visualizador, **sem rótulo, em ordem
sorteada**, com controles de navegação idênticos. A turma responde três perguntas, nessa
ordem, sem voltar atrás: (a) ordene os três por fidelidade ao lugar; (b) diga qual é o
registro — o que foi realmente capturado; (c) escreva **que pista** usou.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta que decide a contradição central deste mapa (§5.2): **a garantia indicial
sobrevive à convergência de formato?** Se um grupo de pessoas que conhece o lugar não
consegue dizer qual arquivo é o registro, então a proveniência precisa ser metadado, e a
raiz C domina — `e10.1` e `e2.1` viram requisito, não opção. Se consegue, e sobretudo se
consegue **articular a pista**, então o meio carrega a própria assinatura e a raiz A
resiste sem precisar de infraestrutura nova.

A pergunta (c) é a mais importante das três e é a que normalmente não se faz: acertar por
intuição não serve de nada num tribunal nem numa redação. Só uma pista **nomeável** —
"o vidro reflete errado", "a sombra não bate com a hora", "as letras da placa não são
letras" — é transferível para outra pessoa e para outro caso.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa exatamente as três raízes: captura neural a partir de sensor comum (A), captura no
aparelho (B) e geração que exporta no mesmo formato (C). **Não dá para fazer com
tecnologia madura por uma razão dura:** fotogrametria clássica não gera — ela só
reconstrói o que foi fotografado. Sem um gerador que produza saída no **mesmo contêiner**
da captura, não há comparação cega possível: o item gerado seria uma malha de aspecto
óbvio e a pergunta (b) viraria trivial. A convergência de formato de 2026 é a condição de
existência do experimento, e é por isso que ele não podia ser feito em 2024.

### O que a turma vai fazer quando testar isso em sala

1. **Capturar junto** (20 min): dois ou três grupos varrem o mesmo canto com celulares
   diferentes. Comparar as três capturas entre si já mostra que "capturado" também não é
   uma coisa só.
2. **Responder às vinte perguntas cegas** (15 min): três cenas × ordem sorteada por
   participante, respostas registradas antes de qualquer discussão. É importante que
   ninguém fale antes de responder.
3. **Abrir os rótulos e tabular** (10 min): acerto em (b) contra o acaso (1/3), e
   **agrupar as pistas** de (c) — quantas pistas distintas apareceram, quantas pessoas
   citaram a mesma, quantas pistas eram na verdade artefato da captura e não da geração.
4. **Testar a pista** (15 min): pegar a pista mais citada e procurá-la nas outras duas
   cenas. Uma pista que aparece nos três arquivos não é pista de origem, é pista de
   pipeline.
5. **Escrever o campo** (10 min): a turma redige, em uma linha, o **campo de proveniência**
   que teria resolvido o problema — e descobre na hora por que ele é difícil: ele precisa
   sobreviver a recorte, recompressão e mistura de cenas.

### O que seria um resultado que me faria mudar de ideia

**Acerto acima de 80% em (b), com pista nomeável e reprodutível em (c).** Se isso
acontecer, a contradição central do mapa se dissolve: a convergência de formato não
apagou a distinção, porque o meio denuncia a origem. Nesse caso eu rebaixaria `e10` de
`alta` para `media`, removeria `e10.1` como requisito de mercado e reescreveria a raiz C
como um problema de *rotulagem comercial*, não de epistemologia — e a raiz A ficaria mais
forte do que este documento diz.

O resultado oposto — acerto próximo do acaso, ou acerto alto com pista que não se sustenta
no passo 4 — confirma o mapa e, pior, indica que a confiança das pessoas na própria
capacidade de distinguir é maior que a capacidade real, que é a pior das duas situações
possíveis.

**Custo e viabilidade hoje:** zero em captura (aplicativo gratuito), alguns dólares no
Marble (o mundo em rascunho sai por cerca de US$ 0,12), zero no visualizador e no editor
(SuperSplat é MIT e roda no navegador [F5]). É construível numa tarde.

## 11. Fontes

Só o que foi aberto e lido em 22/09/2026. Todas as vinte responderam no teste de link.
Fonte citada de memória não entra; fonte que não abriu está na seção 12.

1. **[F1]** `https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/` — página oficial do
   artigo *3D Gaussian Splatting for Real-Time Radiance Field Rendering* (Kerbl, Kopanas,
   Leimkühler, Drettakis; SIGGRAPH 2023; Inria / Université Côte d'Azur / MPI Informatik).
   Sustenta a data de origem da técnica e a alegação de ≥100 fps a 1080p. *Confiabilidade:*
   alta — fonte primária, artigo revisado por pares, com código público.

2. **[F2]** `https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release` —
   comunicado da Khronos, 3/2/2026, sobre `KHR_gaussian_splatting`. Sustenta a data do
   anúncio, a lista de empresas envolvidas, os primeiros adotantes e as propostas de
   compressão (SPZ da Niantic, L-GSC da Qualcomm). *Confiabilidade:* alta para fatos do
   consórcio; é comunicado institucional, portanto otimista quanto a cronograma — e de
   fato diz "ratificação esperada no Q2/2026", o que diverge de [F3].

3. **[F3]** `https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_gaussian_splatting/README.md`
   — a especificação no repositório do glTF. Sustenta o status *Complete, Ratified*, os
   atributos definidos (posição, rotação, escala, opacidade, harmônicos até grau 3) e a
   lista de dezesseis colaboradores. *Confiabilidade:* alta — é o documento normativo. A
   divergência de status com [F2] está declarada no §8.

4. **[F4]** `https://www.cgchannel.com/2026/03/openusd-26-03-adds-support-for-3d-gaussian-splats/`
   — CG Channel, 25/3/2026. Sustenta o esquema `UsdVolParticleField3DGaussianSplat`, o
   renderizador `hdParticleField`, o script de conversão PLY→USD, a autoria da AOUSD e o
   caráter experimental do suporte a personagem riggado. *Confiabilidade:* média-alta —
   imprensa especializada de referência do setor, mas secundária ao release da AOUSD.

5. **[F5]** `https://github.com/playcanvas/supersplat` — repositório do SuperSplat.
   Sustenta a licença MIT, as 10,2 mil estrelas, o funcionamento no navegador e o escopo
   (inspecionar, editar, otimizar, publicar). *Confiabilidade:* alta — fonte primária e
   verificável; o número de estrelas é um instantâneo.

6. **[F6]** `https://www.cgchannel.com/2026/08/scantic-trains-gaussian-splats-entirely-on-your-phone/`
   — CG Channel, 19/8/2026. Sustenta o treino local no iPhone em menos de um minuto, o
   requisito de chip A12 Bionic ou superior, e o preço (€ 29,99/ano ou € 4,99 por captura).
   *Confiabilidade:* média-alta — as alegações de tempo e de não-upload são do fabricante,
   repassadas pela imprensa; não foram verificadas de forma independente.

7. **[F7]** `https://www.nianticspatial.com/en/blog/scaniverse` — post da Niantic Spatial,
   7/4/2026. Sustenta o lançamento do Scaniverse e do VPS 2.0, os formatos de exportação
   (FBX, PLY, SPZ), o público-alvo declarado (robótica, energia, construção, logística,
   setor público) e a descrição da plataforma como porta de entrada para o Large
   Geospatial Model. *Confiabilidade:* média — é comunicação de produto da própria empresa;
   os fatos de formato e público são verificáveis, as alegações de escala não.

8. **[F8]** `https://www.worldlabs.ai/blog/marble-world-model` — post da World Labs,
   12/11/2025. Sustenta o lançamento do Marble, as entradas aceitas (texto, uma imagem,
   várias imagens, vídeo, layout 3D) e as saídas (splat gaussiano, malha de colisão, malha
   de alta qualidade, vídeo), além da limitação declarada de que, com texto ou imagem
   única, o modelo precisa inventar tudo o que não está no prompt. *Confiabilidade:* média
   — anúncio de produto, mas a limitação citada é autoconfessada, o que aumenta o valor.

9. **[F9]** `https://developer.nvidia.com/omniverse/nurec` — página do NVIDIA Omniverse
   NuRec. Sustenta a ingestão de dado de câmera e LiDAR, a saída em OpenUSD, a integração
   com Isaac Sim, AlpaSim e CARLA, o uso do `gsplat` aberto e a combinação com modelos
   generativos (Harmonizer, Asset Harvester). *Confiabilidade:* média-alta para o que o
   produto faz; a página não traz nenhum número, o que registrei.

10. **[F10]** `https://web.volinga.ai/2025-turning-point-and-2026-trends-blog/` — blog da
    Volinga sobre a virada de 2025 e as tendências de 2026. Sustenta os usos em produção
    (*Superman* via Framestore; *Picture from Auschwitz* em Cannes), o suporte nativo no
    Nuke 17 e a frase sobre 2026. *Confiabilidade:* **baixa-média — a Volinga vende
    tecnologia de splat para virtual production.** Conflito de interesse declarado no §8,
    item 5.

11. **[F11]** `https://spatialinsiders.com/stories/4danyone-turns-one-video-into-moving-3d-person`
    — cobertura do 4DAnyone (SIGGRAPH Asia 2026), 20/8/2026. Sustenta a reconstrução de
    pessoa em movimento a partir de um vídeo casual de ≥121 quadros, as limitações (roupa
    larga, propagação de erro de pose, até 30 minutos em GPU de ponta) e o alerta dos
    autores sobre deepfake e consentimento. *Confiabilidade:* média — é cobertura
    secundária de artigo revisado; as limitações citadas são dos próprios autores.

12. **[F12]** `https://move.ai/` — site da Move AI. Sustenta a operação desde 2019, a lista
    de clientes declarados (Ubisoft, SEGA, Sony, Meta, Disney, Paramount, Nike, Adidas,
    Warner Music, Foster + Partners) e a alegação de qualidade comparável a óptico, com
    teste atribuído à IJAD Dance Company. *Confiabilidade:* baixa-média — é material
    comercial; a lista de logotipos não é contrato verificado e a comparação não traz
    métrica.

13. **[F13]** `https://www.thefuture3d.com/blog/state-of-gaussian-splatting-2026/` —
    levantamento de padrões e ferramentas de 2026. Sustenta o trabalho no OGC 3D Tiles 2.0
    e no MPEG GSC, a tabela de ferramentas e preços, o erro geométrico médio de 7,82 cm, os
    requisitos de hardware e a tabela de preço de serviço. *Confiabilidade:* média — é
    compilação editorial de terceiro, com números citados sem nota de origem; usei os que
    são verificáveis em outras fontes e sinalizei o resto.

14. **[F14]** `https://swyvl.io/blog/gaussian-splat-formats-ply-spz-ksplat/` — comparação
    de formatos de splat. Sustenta os tamanhos por formato para 4 milhões de gaussianas
    (PLY cru ~1.400 MB; PLY do SuperSplat 200–400 MB; SOG 80–200 MB; KSplat 150–300 MB;
    SPZ 100–250 MB), a autoria dos formatos e os tempos de carregamento a 50 Mbps (224 s
    contra 26 s). *Confiabilidade:* média — é post técnico de empresa que opera visualizador
    de splat; os números são internamente consistentes e batem com a ordem de grandeza
    citada em [F2].

15. **[F15]** `https://radiancefields.com/gaussian-splatting-statistics` — censo do setor,
    julho de 2026. Sustenta as 212 plataformas e ferramentas, os mais de US$ 1,5 bi em
    financiamento divulgado, os 3.333 artigos indexados e os 749 de 2026, as 415 vagas
    abertas e as 992 notícias desde 2023. *Confiabilidade:* média-alta para contagem
    própria (é a base de dados deles), média para os valores de financiamento, que são de
    terceiros.

16. **[F15b]** `https://www.migalhas.com.br/depeso/281019/autorizacao-de-uso-de-imagem-de-edificacoes-e-fachadas`
    — artigo de doutrina sobre o art. 48 da Lei 9.610/98 e a autorização de uso de imagem
    de edificações. Sustenta a leitura de que a exploração comercial de obra arquitetônica
    é direito exclusivo do autor (o arquiteto, não o proprietário) e as condições que
    acionam a proteção (obra protagonista e inconfundível), com referência a decisão da 3ª
    Turma do STJ de 2016. *Confiabilidade:* média — é doutrina, não a decisão; **não traz o
    número do REsp**, o que está declarado no §8, item 6.

17. **[F16]** `https://gemeo.niteroi.rj.gov.br/` — gêmeo digital de Niterói, em produção.
    Sustenta a existência do ativo municipal, as fontes de dado em tempo real (ônibus a
    cada 30 s, Waze for Cities a cada 2 min, câmeras, pluviômetros) e o fato de a camada 3D
    de edificações ter sido feita por **LiDAR**, não por captura neural. *Confiabilidade:*
    alta — é o próprio sistema público, acessível.

18. **[F17]** `https://poly.cam/tools/gaussian-splatting` — página de produto da Polycam.
    Sustenta o processamento em nuvem, a faixa de 20 a 200 imagens ou MP4 de entrada, a
    exportação de malha e os plugins para Unity e Unreal. *Confiabilidade:* média — material
    comercial; usada só para fatos de funcionamento do serviço, nunca para números de uso.

19. **[F18]** `https://plesner.com/en/news/personal-identity-meets-copyright-denmark-moves-regulate-deepfakes-copyright-act`
    — análise jurídica da emenda dinamarquesa à lei de direito autoral. Sustenta as duas
    seções propostas (65a para intérpretes, 73a para características físicas pessoais), a
    duração de 50 anos post mortem, a notificação TRIS em 31/10/2025, a votação prevista
    para Q1/Q2 de 2026 e a entrada em vigor prevista para 1/7/2026. *Confiabilidade:* alta
    — escritório de advocacia dinamarquês analisando norma do próprio país; é análise de
    projeto, não de lei promulgada.

20. **[F19]** `https://support.apple.com/guide/apple-vision-pro/capture-dev7068c3c93/visionos`
    — guia de suporte da Apple sobre captura de fotos e vídeos espaciais. Sustenta que a
    captura espacial é feita no Vision Pro e em iPhones compatíveis e que o conteúdo aparece
    em 3D no Vision Pro e em 2D nos demais aparelhos. **Não** documenta a geração de
    *Spatial Scenes* a partir de fotos 2D comuns, que é o fato em que a recusa nº 2 do §4.0
    se apoia — ver §8, item 3. *Confiabilidade:* alta para o que documenta; a ausência do
    outro fato é informação relevante e está registrada.

## 12. Anexo — o levantamento bruto

Tudo o que foi levantado e não coube nas seções acima. Sem edição e sem corte silencioso.

### 12.1 Parâmetros desta rodada

- **Modo:** MAPA, não interativo. A entrevista do §0 da skill foi substituída por um bloco
  `briefing:` completo, com os sete itens preenchidos; por isso **não houve rebaixamento
  de confiança** por ausência de entrevista, conforme a regra aprendida em 10/09.
- **O que o briefing não cobriu e foi assumido:** três premissas, declaradas na seção 2.
- **Horizonte:** 2046, vinte anos. É o horizonte mais longo dos quatro desta série de
  rodadas (2036, 2041, 2046, 2056) e a consequência está discutida no §7.7.
- **Profundidade:** três ordens, conforme o formato da disciplina.
- **Ferramentas de busca:** WebSearch e WebFetch, de fato usados. Dezesseis buscas
  (português e inglês) e vinte e três tentativas de abertura de página, das quais vinte
  bem-sucedidas.
- **Data de referência de todo o documento:** 22/09/2026, relógio da máquina.

### 12.2 Premissas assumidas, na íntegra

1. **Pessoas, objetos e ambientes tratados como um só objeto de mapa.** Justificativa: em
   2026 é literalmente o mesmo pipeline — o 4DAnyone produz splat de pessoa, o Scaniverse
   produz splat de lugar, e o formato ratificado é o mesmo. Custo desta escolha: o regime
   jurídico é radicalmente distinto (aparência de pessoa contra obra arquitetônica contra
   coisa sem titular), e o mapa trata isso por efeito, não por raiz. Um mapa alternativo
   separaria "captura de pessoas" como quarta raiz. **Registro para quem for confrontar
   este documento: essa é a bifurcação estrutural mais discutível do desenho.**
2. **Brasil como nota, não como ramo.** O recorte pedido era global com nota sobre o
   Brasil. Implementei três efeitos com conteúdo especificamente brasileiro (`e1.1.1`,
   `e7.2`+`e7.2.1`, `e11.2.1`) e uma subseção de âncora (§3.5). Custo: o Brasil aparece
   sobretudo pelo eixo jurídico, que é onde há particularidade, e quase não aparece pelo
   econômico.
3. **Público lido de forma ampla.** "Quem projeta mídia e interação" inclui estúdio,
   agência, docente e desenvolvedor independente. Um recorte estreito (só grande produção)
   teria descartado `e5.2.1` e `e6.2`.

### 12.3 Os quatro efeitos removidos no §6, na íntegra

**Removido 1 — "A qualidade da captura aumenta e mais gente captura."**
Estava alocado como `e1` da raiz A, com `sinal: forte`, `prazo: 2029`, `confianca: alta`.
Removido no §7.2: é a descrição da própria tendência, não um efeito dela. Falha no teste
de especificidade de forma trivial — a frase serve para qualquer tecnologia em curva de
melhoria. O que sobrou de útil dele foi absorvido pela âncora (§3).

**Removido 2 — "Cursos de design e de audiovisual reorganizam o currículo em torno de
captura."**
Estava como `e1.2.1`, `sinal: fraco`, `prazo: 2036`, `confianca: baixa`. Removido: é
exatamente um dos quatro efeitos que a skill proíbe sem ator e mecanismo específicos, e
apareceu em quatro de oito mapas da turma em 2026.2, o que é a prova de que serve para
qualquer tema. Para entrar, precisaria nomear o curso, a disciplina e o mecanismo — e eu
não tenho como saber qual currículo muda primeiro. O lugar dele foi ocupado por
`e1.2.1` (o portfólio muda), que é um efeito sobre um artefato concreto e verificável.

**Removido 3 — "Reguladores criam uma categoria jurídica para ativos volumétricos."**
Estava como `e7.2`, `sinal: fraco`, `prazo: 2035`, `confianca: media`. Removido **na forma
genérica** e reescrito: a versão que ficou no mapa nomeia a ANPD, nomeia o instrumento (a
regulamentação de dado biométrico, pendente em 2026) e traz o mecanismo do descompasso —
o conceito que a agência usará (dado para identificação) não cobre bem o objeto (aparência
volumétrica). A lição, para quem for usar esta skill: a diferença entre efeito genérico e
efeito específico não é de redação, é de conteúdo — se você não consegue nomear o
regulador e o instrumento, é porque não sabe, e o efeito não deveria estar lá.

**Removido 4 — "A captura reduz a pegada de carbono da produção audiovisual ao substituir
deslocamento de equipe."**
Estava como `e5.3`, `sinal: fraco`, `prazo: 2034`, `confianca: baixa`. Removido por dois
motivos somados: falha no teste de especificidade (serve para videoconferência,
teletrabalho, previs, qualquer coisa) e não tem número de nenhum lado — nem a emissão
evitada pelo deslocamento, nem a consumida pelo treino em GPU. É a razão de o eixo
ecológico do STEEP ficar declaradamente vazio (§5.3) em vez de ser preenchido com uma
frase agradável.

### 12.4 Efeitos que considerei e não cheguei a escrever

Ficam aqui porque podem servir a quem confrontar este mapa:

- *"O turismo virtual substitui parte do turismo físico."* Descartado no teste da causa
  solta: aconteceria igual por vídeo 360 e por streaming, que são maduros. Não deriva
  desta raiz.
- *"Imobiliárias passam a vender por captura em vez de por foto."* Descartado por já ser
  quase maduro — tour 3D em anúncio imobiliário é padrão desde 2020, com tecnologia
  anterior; o splat melhora, não rompe.
- *"Museus passam a cobrar pela captura de acervo."* Interessante, mas é caso particular
  de `e1.1` e de `e1.1.1`; não justificava linha própria pela regra de parada (mesmo ator,
  mesmo mecanismo).
- *"A captura entra na prova pericial criminal."* Recortado para fora: exigiria discussão
  de cadeia de custódia penal que o público deste mapa não é. O que sobrou é `e2.1`, no
  eixo cível e securitário.
- *"Agentes de IA passam a navegar capturas como hoje navegam páginas."* É tema 4 e 9 da
  disciplina, não este. A fronteira está declarada no enunciado do tema.
- *"O splat vira formato de rede social."* Descartado: sem mecanismo. Não consegui escrever
  por que alguém publicaria splat em vez de vídeo, dado que o vídeo já funciona e o splat
  pesa cem vezes mais. Sem mecanismo, não entra.

### 12.5 As buscas que não deram em nada

Registro por honestidade metodológica — ausência de resultado também é resultado.

1. **Litígio específico sobre captura volumétrica sem consentimento.** Busquei em
   português e inglês por processo, ação coletiva ou decisão envolvendo Gaussian splat,
   captura 3D de pessoa ou de espaço privado. **Não encontrei nenhum caso.** Encontrei
   apenas o adjacente: ações sob a BIPA de Illinois contra plataformas de avatar (Ready
   Player Me) e contra o Lensa, ambas sobre **geometria facial** em 2D, não sobre captura
   volumétrica. Esta ausência é o que sustenta o wildcard do §6.4 — e é também a razão de
   `e6.1.1` e `e8.1` carregarem `confianca: baixa`. **Se alguém encontrar um caso, todo o
   ramo da raiz B antecipa.**
2. **Regulação específica de escaneamento de espaços.** Busquei por lei, projeto ou
   consulta pública sobre 3D scanning de propriedade privada. O que apareceu foi
   tangencial: rastreadores de lei de privacidade estadual nos EUA em 2026, e um artigo de
   pesquisa (FlyMeThrough) propondo **diretrizes voluntárias** para mapeamento indoor com
   drone — lista de exclusão de áreas, agendamento fora de pico, publicação do voo com 48
   horas de antecedência. Diretriz de pesquisa, não norma.
3. **Número de capturas produzidas por ano, no mundo.** Não existe. O censo do
   RadianceFields [F15] conta ferramentas, artigos, vagas e notícias — não capturas.
4. **Uso de captura neural por instituição brasileira.** Busquei por IPHAN, museus,
   universidades e prefeituras. O que existe é **LiDAR e aerofotogrametria** (Niterói,
   Curitiba, São Paulo, Rio Verde-GO), ou seja, a tecnologia madura. Não encontrei
   programa público brasileiro de captura neural. Isso é um achado, não uma falha de busca.
5. **Tamanho de mercado com metodologia.** Todas as cifras que apareceram vêm de
   agregadores de comunicado (openpr, researchintelo, dataintelo, sphericalinsights) sem
   metodologia publicada, e são mutuamente inconsistentes: "US$ 1,85 bi em 2026"; "US$ 2,8
   bi em 2025 → US$ 12,5 bi em 2034, CAGR 18,7%"; "mocap sem marcador US$ 15,21 bi em 2025
   → US$ 74,33 bi em 2035, CAGR 17,19%". **Nenhuma foi usada.** Consequência assumida: o
   mapa não tem medida de tamanho econômico.

### 12.6 Fontes que não abriram

Duas, registradas porque foram usadas em algum grau de raciocínio e **não entraram na
seção 11**:

- `https://www.mdpi.com/2571-9408/9/8/328` — *Accessible 3D Gaussian Splatting from
  Consumer-Grade UAVs as a Framework for Rapid Documentation of Cultural Heritage*
  (periódico *Heritage*). **HTTP 403.** Li apenas o resumo devolvido pela busca, que
  sustenta a tese de documentação de emergência quando a janela é de horas. Por isso
  `e2.2` ficou em `confianca: media` e a fonte não foi citada como aberta.
- `https://www.move.ai/blog/enhancing-markerless-motion-capture-system-using-multi-view-neural-rendering-and-temporal-consistency-models` — post técnico da Move AI.
  **HTTP 404.** Substituído pela página inicial da empresa [F12], que é material comercial
  e sustenta menos. Nenhum número técnico de mocap sem marcador entrou no mapa por causa
  disso.

### 12.7 Números citados em fonte secundária e NÃO usados

- **"A Polycam recebe mais de 120 mil capturas por semana, uma a cada cinco segundos."**
  Apareceu em resumo de busca com atribuição ao RadianceFields. Abri a página de
  estatísticas [F15] e o número não consta. Redondo demais, cadência de material
  promocional, atribuição não confirmada. **Não usado.** Se fosse verdadeiro, sustentaria
  `e6` com muito mais força — é o melhor número que o mapa não tem.
- **"Demanda por habilidade em IA para vagas de artista 3D subiu ~144% ao ano, com prêmio
  salarial de ~56%."** Fonte: página de template de descrição de vaga. Sem metodologia,
  sem amostra, com interesse comercial evidente. Citei como contexto na prosa de `e1.2`,
  **sinalizado como secundário**, e não como artefato de `sinal`.
- **"3D Gaussian Splatting: 500 MB a 1,5 GB por cena; NeRF: 10 a 50 MB."** Apareceu em
  resumo de busca. Está na mesma ordem de grandeza de [F14], que abri e usei no lugar.
- **"44% das empresas com programa de IA generativa a usam para gerar modelos 3D; 33%
  preveem impacto em modeladores em três anos."** De estudo sindical citado em imprensa
  secundária. Não abri o estudo. Não usado em nenhum efeito.
- **"SplatSim atingiu 86,25% de sucesso zero-shot sim-to-real; RoboSplat, 87,8% one-shot."**
  De resumo de busca sobre um post de blog técnico. Números específicos demais para
  repassar sem abrir o artigo. Não usados; o efeito `e11.1` foi escrito sem eles.

### 12.8 Material do tema que a disciplina levantou e que este mapa usou ou não

O enunciado do tema trouxe uma lista de ferramentas da varredura da turma. Registro o que
cada uma virou aqui:

| Ferramenta | Uso neste mapa |
|---|---|
| `supersplat` | âncora (§3.1), mecanismo de `e1.2`, e ferramenta do experimento [F5] |
| `img2threejs` | **sinal fraco 6.1** — reconstrução como programa. É o item mais interessante da lista e não virou raiz porque não achei literatura que o sustentasse |
| `EasyMocap`, `Low-Cost-Mocap`, `SysMocap` | contexto de `e9`; não citados individualmente por eu não os ter aberto |
| `amass` | citado em `e9` como o acervo que deixa de ser barreira |
| `draco` | não usado — compressão de malha, e o mapa tratou compressão de splat (SPZ/SOG) |
| `nerf`, `instant-ngp` | âncora histórica (§2) |
| `TripoSR` | contexto; o sucessor direto (Stable Fast 3D) apareceu na busca e não foi aberto |
| `Depth-Anything-V2` | contexto da recusa nº 2 do §4.0 |
| `kornia`, `Open3D`, `pcl` | não usados — bibliotecas de base, sem consequência de mapa |
| `Magnific` | mecanismo da raiz C (ampliador que inventa detalhe); não abri o produto |
| `model-viewer` | não usado — é tema 15 |

### 12.9 Caminhos abandonados na construção do mapa

- **Quatro raízes em vez de três.** A quarta seria "captura de pessoas como categoria
  própria", separando corpo de lugar. Abandonada porque, em 2026, é o mesmo pipeline —
  mas está registrada em 12.2 como a bifurcação mais discutível do desenho.
- **Uma raiz sobre robótica.** Considerei promover "a captura serve primeiro à máquina" a
  raiz. Abandonada porque a fronteira com o tema 9 da disciplina ficaria borrada; virou
  `e11`, com `confianca: media`, e a razão 3 do pré-mortem registra que essa decisão pode
  estar errada.
- **Organizar a roda por setor em vez de por ruptura.** O briefing pedia explicitamente o
  modo "a partir de uma inovação, não de um setor", e foi o que se fez.
- **Escrever cenários por ator (o estúdio, o regulador, o cidadão) em vez de por desfecho.**
  Abandonado por fugir ao formato da disciplina, que pede provável/desejável/indesejável.

### 12.10 Verificação — saída integral de `verificar.py --links`

Comando executado:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2046/10-captura-de-realidade-e-renderizacao-neural/tendencia-captura-de-realidade-e-renderizacao-neural.md --links
```

Saída:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 13 (frontmatter diz 13)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 21 (frontmatter diz 21)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e13.1.1', 2048)]
confiança ordem 1: alta 4 · media 9 · baixa 0
confiança ordem 2: alta 0 · media 15 · baixa 7
confiança ordem 3: alta 0 · media 2 · baixa 19
links da seção 11: 20/20 respondem (frontmatter diz fontes: 20)
RESULTADO: ok
```

Leitura da saída, item a item:

- **`frontmatter: 18/18`** — todos os campos obrigatórios presentes.
- **`títulos literais: 12/12`** — as doze seções com os títulos exatos do formato.
- **`raízes: 3` · `ordem 1: 13` · `ordem 2: 22` · `ordem 3: 21`** — as contagens reais do
  bloco `roda:` batem com as declaradas no frontmatter. Nenhum número do frontmatter foi
  ajustado para esconder divergência; o único ajuste feito foi `fontes: 17 → 20`, depois
  de contar as fontes efetivamente abertas.
- **`prazo > horizonte em ordens 1-2: 0`** — nenhum efeito de primeira ou segunda ordem
  passa de 2046, como exige a regra 8 do §3 da skill.
- **`prazo > horizonte em ordem 3: 1 [('e13.1.1', 2048)]`** — um efeito de terceira ordem
  passa do horizonte, e está **declarado** no §5.3 e no registro de alterações do §7.8,
  com a classe de referência que justificou o empurrão (vinte anos da disputa sobre
  fotografia manipulada no fotojornalismo).
- **`confiança ordem 1: alta 4 · media 9 · baixa 0` / `ordem 2: alta 0 · media 15 ·
  baixa 7` / `ordem 3: alta 0 · media 2 · baixa 19`** — a distribuição cai com a ordem,
  como manda a regra 6. Antes da bateria do §6 ela era chapada (22 `media` na segunda
  ordem); os sete rebaixamentos do §7.8 a corrigiram.
- **`links da seção 11: 20/20 respondem`** — todas as fontes citadas abrem. As duas que
  não abriram (403 no MDPI, 404 no blog da Move AI) estão na seção 12.6 e **não** foram
  citadas como fontes.
- **`RESULTADO: ok`**.
