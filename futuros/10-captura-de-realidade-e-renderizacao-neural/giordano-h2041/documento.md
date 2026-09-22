---
tema: Captura de realidade e renderização neural
slug: captura-de-realidade-e-renderizacao-neural
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-22
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 17
efeitos_ordem_2: 20
efeitos_ordem_3: 16
tecnologias_citadas: [3D Gaussian Splatting, 4D Gaussian Splatting, NeRF, glTF 2.0, KHR_gaussian_splatting, SPZ, SPZ 2.0.0, L-GSC, PLY, OGC 3D Tiles, MPEG-I Gaussian Splat Coding, V-PCC, G-PCC, JVET, OpenUSD Particle Fields, CesiumJS, Cesium for Unreal, Cesium ion, Cesium World Terrain, Google Photorealistic 3D Tiles, ArcGIS, Scaniverse, Niantic Spatial VPS, Large Geospatial Model, Lixel Cybercolor, Polycam, Luma AI, SuperSplat, UnityGaussianSplatting, Unreal Engine 5.7, DJI Terra, Trimble X12, Insta360 X5, Antigravity A1, Splatica, Marble, World API, MaterialClusterGS, 2D Gaussian Splatting, OpenSim, Azure Kinect, OptiTrack, Move, EasyMocap, AMASS, OBSBOT Tail 2, 4DV.ai, Gracia, WebGPU, C2PA 2.4, JPEG Trust, Content Credentials, FARO, Civil 3D, InfraWorks, BIM, TripoSR, Depth Anything V2, img2threejs]
fontes: 22
confianca: media
experimento: "O inventário do que entrou sem ser convidado — capturar uma sala do CIn, listar tudo que apareceu sem ser o objeto da captura e cronometrar quanto custa tirar"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Entre 2023 e 2026 a captura de realidade resolveu, na ordem, três problemas que não são o mesmo:
renderizar em tempo real, guardar num formato que todo mundo lê e transportar em escala
planetária. O último caiu em 2026 — a extensão `KHR_gaussian_splatting` do glTF saiu como
candidata a versão final em 3 de fevereiro, o Cesium publicou em 27 de abril um *tileset* de
110 milhões de splats cobrindo 3,7 km² com nível de detalhe hierárquico, e o MPEG levou duas
emendas de compressão a estágio formal. Resolvido o transporte, a discussão deixa de ser
técnica. Este mapa separa quatro rupturas e as leva até 2041. A primeira é de **representação**:
o ativo 3D deixa de ser uma malha que alguém construiu e passa a ser um campo amostrado sem alça
de edição — o que desloca o valor da geometria para a iluminação e deixa o ferramental de três
décadas sem ponto de apoio. A segunda é de **ato**: capturar deixa de ser perceptível, e com isso
o consentimento perde o instante em que era pedido; a resposta previsível não é mais direito, é
mais apagamento — a cidade capturada tende a ficar sistematicamente vazia de gente. A terceira é
de **estatuto**: o modelo generativo completa o que o sensor não viu e exporta no mesmo formato de
quem mediu, num momento em que a captura 3D já está sendo aceita como prova em tribunal sob o
padrão Daubert; a procedência assinada existe para foto (C2PA 2.4, câmeras da Canon e da Sony) e
não existe para cena. A quarta é de **corpo**: filmar passa a produzir animação, e a diária de
gravação se separa da licença sobre o movimento. Até 2041 o efeito que mais desloca quem projeta
mídia não é o fim do modelador — é que o ativo escasso deixa de ser a habilidade de construir e
passa a ser **o acesso ao lugar, ao corpo e à assinatura que provam que aquilo existiu**.
Confiança média: a base sobre formato, padrão e ferramenta é forte e datada; a base sobre adoção
por ofício, sobre direito e sobre o Brasil é fraca, e foi ela que puxou a confiança para baixo.

## 2. O tema

Captura de realidade e renderização neural é o conjunto de técnicas que transforma registro de
sensor comum — foto, vídeo, vídeo 360, varredura de celular — em cena tridimensional navegável,
sem passar pelo pipeline de modelagem. O objeto do tema não é a qualidade da imagem: é a
**inversão do sentido do trabalho**. No pipeline que a indústria construiu desde os anos 1990,
alguém modela uma geometria, abre coordenadas de textura, pinta material, monta esqueleto e anima
— e o resultado é um objeto com alças, editável em cada etapa. Na captura neural, o resultado sai
pronto e sem alças: milhões de primitivas gaussianas anisotrópicas, cada uma com posição, escala,
rotação, cor e opacidade, otimizadas para reproduzir as fotos de entrada e mais nada. A pesquisa
de referência descreve 3DGS exatamente assim — representação **explícita**, com renderização em
tempo real e "editabilidade sem precedentes" (arXiv:2401.03890, aceita na *ACM Computing
Surveys*, nona revisão em 09/04/2026) — e a palavra "editabilidade" ali significa poder mexer nas
primitivas, não poder mexer no material, que é o que um artista chama de editar.

Onde isso encosta em mídia e interação: em tudo que precisa de um lugar. Jogo, cinema, produção
virtual, arquitetura, publicidade de imóvel, transmissão de esporte, museu, treinamento, prova
judicial. O tema atravessa a disciplina porque redefine de onde vem a matéria-prima do virtual —
e, por tabela, quem tem direito sobre ela.

Por que isto merece mapa de futuro e não levantamento de estado da arte: porque as perguntas
interessantes não são sobre a técnica, e a técnica já está resolvida o bastante para que elas
sejam feitas. Se qualquer pessoa captura qualquer lugar, o que acontece com o consentimento de
quem estava lá? Se o 3D deixa de ser feito e passa a ser colhido, o que sobra do ofício de fazer?
Se o gerado e o medido saem no mesmo formato, o que sustenta a diferença entre mapa e invenção?
Nenhuma dessas perguntas se responde lendo um *benchmark*. Todas dependem de efeitos de segunda e
terceira ordem — contrato, tribunal, mercado de trabalho, acervo — que só aparecem se alguém os
derivar com mecanismo.

Um recorte que este mapa assume e declara: o horizonte é **2041**, quinze anos. Isso muda o
objeto. Em cinco anos a pergunta seria qual ferramenta vence; em quinze, a pergunta é que
instituição se forma em volta da técnica — quem regula, quem cobra, quem guarda, quem fica de
fora. O mapa privilegia efeitos com **dono**: um ator que decide, um contrato que muda, um
orçamento que aparece. Efeito sem dono ficou na seção 12.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 22/09/2026. Vinte e duas fontes abertas e lidas; o que não abriu
está declarado nas seções 8 e 12.

### 3.1 O que já existe e funciona

**O formato foi resolvido em 2026.** Em 3 de fevereiro de 2026 o Khronos Group anunciou a
`KHR_gaussian_splatting`, extensão do glTF 2.0 que define como armazenar splats gaussianos num
esquema neutro de fornecedor, com ratificação prevista para o segundo trimestre de 2026. Duas
compressões entram por baixo — a SPZ, da Niantic Spatial, e a L-GSC, da Qualcomm. Participam do
desenvolvimento Autodesk, Cesium/Bentley Systems, Esri, Huawei, Niantic Spatial, NVIDIA e XGRIDS;
os primeiros a adotar são CesiumJS, Esri ArcGIS, Scaniverse e Lixel Cybercolor. Neil Trevett,
presidente do Khronos, chamou o passo de "marco para o glTF, estendendo o formato a uma classe
inteiramente nova de representação geométrica". A Bentley, no seu próprio blog (10/02/2026),
resume a velocidade: de artigo de pesquisa a padrão da indústria **em três anos**, e chama o glTF
de "o JPEG do 3D".

**O transporte foi resolvido junto.** Em 27 de abril de 2026 o Cesium publicou splats gaussianos
com nível de detalhe hierárquico em CesiumJS, Cesium for Unreal e Cesium ion, usando 3D Tiles
como índice espacial e glTF como carga. O caso publicado é concreto: o campus da Microsoft em
Redmond, **110 milhões de splats sobre 3,7 km²**, reconstruídos de **20.169 fotos (427,7
gigapixels)**, com distância de amostragem no solo de 3 cm em média. A compressão SPZ 2.0.0
reduz o arquivo em até 90% contra PLY. E o resultado é georreferenciado: encaixa no Cesium World
Terrain e nos 3D Tiles fotorrealistas do Google. Isto é o que muda de patamar — não é mais uma
cena, é uma camada do planeta.

**A compressão está em corpo de norma.** A atividade MPEG-I *Gaussian Splat Coding* tem duas
frentes: uma emenda de perfil no V-PCC, em estágio de *Committee Draft Amendment*, e outra no
G-PCC, em *Working Draft*, ambas na reunião 153; em paralelo, uma exploração conjunta entre os
grupos WG 7, WG 4 e JVET prepara versões futuras, incluindo conteúdo dinâmico. A leitura de
padronização da Ofinno situa a GSC ainda em **estágio de exploração** — "nenhuma padronização
formal foi iniciada" — e coloca a chamada de propostas de codificação de próxima geração em 15
de maio de 2026, registro em 1º de agosto e propostas em janeiro de 2027, com a ressalva de que
as datas podem mudar.

**A captura virou gesto de consumidor.** Em 23 de abril de 2026, Insta360, Splatica, a fabricante
de drones Antigravity e a CyArk lançaram o *Project Eternal*: grava-se um vídeo 360 de 5 a 10
minutos com uma Insta360 X5 ou com o drone A1 — que pesa **249 gramas**, o que permite operar em
sítio frágil —, sobe-se para o Splatica e em poucas horas volta uma cena fotorrealista com visor
web, suporte a VR e exportação para Unity, Unreal, NVIDIA Isaac Sim e Omniverse. Os sítios-piloto
são Civita di Bagnoregio e Pompeia; a campanha abriu **1.000 uploads gratuitos** de 10 minutos.
Do lado da plataforma, a Niantic Spatial descreve o Scaniverse (07/04/2026) como plataforma
integrada web e móvel que gera mapas de posicionamento visual, malhas e splats, com teto de
**500 m² por varredura móvel**, precisão de localização em 6 graus de liberdade na ordem do
centímetro onde já há varredura, e a alegação de manter "uma das maiores coleções de splats
gaussianos do mundo" — sob a frase que descreve o projeto inteiro: "mapear o mundo para as
máquinas", para os "80% da economia que acontecem fora das telas".

**A geração alcançou a captura no mesmo formato de saída.** Em 21 de janeiro de 2026 a World Labs
abriu a World API, que gera ambientes 3D navegáveis a partir de texto, imagem, panorama,
múltiplas vistas e vídeo, renderizáveis na web ou exportáveis para ferramentas de produção. Os
primeiros parceiros nomeados são Preview (cinema), Fenestra (arquitetura), Escape.ai (narrativa
interativa), Interior AI, xFigura e a Lightwheel em robótica; a SHoP Architects resume o apelo:
"a adição de uma terceira dimensão em segundos é incrível". Não há número de adoção público.

**O corpo em movimento saiu do estúdio instrumentado.** A Move afirma operar volumes de 4×4 m a
20×20 m, **100% localmente**, sem marcador e sem traje, com modelo treinado em "milhões de
minutos de movimento", e cita a EA como cliente. Do lado ao vivo: em 27 de abril de 2026 a DNE e
a Gracia publicaram a primeira performance musical transmitida em 4D Gaussian Splatting — 4
minutos, **17 a 75 Mbps**, tocando em navegador por WebGPU, em desktop, celular e Quest 3, sem
aplicativo, com **1,5 milhão de visualizações no fim de semana de estreia**; a grade de câmeras
foi projetada pela diretora de fotografia Addie Reiss em torno da saída volumétrica, não da
linguagem de cinema. E em 20 de abril de 2026, na NAB, OBSBOT e 4DV.ai demonstraram captura
volumétrica com **cerca de 60 câmeras PTZ Tail 2**, com arquitetura declarada para escalar a
**200 ou mais**, entregando "ativos espaciais 4D editáveis, prontos para reenquadrar e
retemporizar".

**A captura 3D já é prova aceita.** Em 18 de setembro de 2026, num caso de homicídio em Marietta,
Geórgia, um perito documentou a cena com varredor a laser FARO — "milhões de pontos" — e
apresentou ao júri uma reconstrução interativa com posições, trajetória e percurso de veículo. O
juiz admitiu a prova sob o padrão Daubert, considerando a varredura a laser 3D "método bem
estabelecido e cientificamente confiável"; três dos quatro réus foram condenados, com peso
declarado dessa prova.

### 3.2 O que existe e ainda não funciona

- **Precisão métrica.** O levantamento da THE FUTURE 3D sobre o estado de 2026 dá erro geométrico
  médio de **7,82 cm** para splat gaussiano, contra **2,2 mm a 20 m** de uma estação Trimble X12
  — mais de 35 vezes mais preciso. Se o número estiver certo, splat não serve para medir. A fonte
  é comercial e **não cita o estudo de origem**; ver seção 8.
- **Suporte nativo em motor de jogo.** Em 2026 a Unreal Engine 5.7 **não tem** módulo de primeira
  parte para splats; a integração é por plugin (Luma AI, Polycam) ou implementação própria. Na
  Unity, o caminho de referência é o pacote aberto de Aras Pranckevičius. Ou seja: o formato foi
  padronizado antes de o consumo ser padronizado.
- **Edição e reiluminação com sentido físico.** É pesquisa ativa, não produto. O
  MaterialClusterGS (arXiv:2606.09018, 08/06/2026) descreve o problema com precisão: quando cada
  primitiva ganha seus próprios parâmetros de BRDF, "sombras, iluminação indireta, erros
  geométricos e resíduos de visibilidade" são absorvidos em milhares de estimativas de material
  ligeiramente diferentes — e o autor propõe uma paleta global compartilhada justamente para
  tornar a edição propagável. Não há número de desempenho no resumo.
- **Captura de movimento por câmera única.** O estudo revisado por pares mais específico que abri
  (PMC12416023, 05/09/2025) comparou Azure Kinect de câmera única contra OptiTrack de dez câmeras,
  com n = 12 adultos de 22 a 33 anos, e reporta RMSE de **8° na elevação do ombro**, **13,8° na
  flexo-extensão do cotovelo**, **15,6° no plano de elevação** e **21,2° na rotação de ombro**;
  pronação e supinação do antebraço foram declaradas não confiáveis. Para animação, isso pode
  bastar; para clínica ou alto rendimento, não.
- **Procedência de cena.** Existe procedência assinada para imagem: a C2PA chegou à versão 2.4 em
  21/04/2026; a Canon anunciou em 11/05/2026 o *Authenticity Imaging System*, que embute data,
  hora, local, equipamento e ajustes assinados no ato da captura — nas EOS R1 e R5 Mark II,
  mirando redações. **Não há menção a 3D ou dado de profundidade.** Não achei nenhuma cadeia de
  procedência para cena capturada.

### 3.3 Quem constrói

Cinco camadas com atores distintos, e a distinção importa porque elas têm incentivos diferentes:

| Camada | Quem |
|---|---|
| Padrão e formato | Khronos (glTF), OGC (3D Tiles), MPEG (WG 7, WG 4, JVET), C2PA/JPEG Trust |
| Captura de consumo | Niantic Spatial (Scaniverse), Polycam, Luma AI, Insta360 + Splatica, Antigravity |
| Infraestrutura e engenharia | Cesium/Bentley, Esri, Autodesk, XGRIDS, DJI, Trimble |
| Geração de mundo | World Labs (Marble, World API), e os fabricantes de modelo de imagem-para-3D |
| Corpo e espetáculo | Move, Gracia, 4DV.ai + OBSBOT, DNE |

Fora do eixo comercial: a academia (a *survey* de 3DGS acumulou nove revisões entre 2024 e 2026),
e o patrimônio — CyArk no lado internacional; no Brasil, o Museu do Ipiranga, que desde 2019
varre prédio, esculturas e parque com varredor a laser, drone, Civil 3D, InfraWorks e método BIM
para montar um modelo tridimensional completo do acervo e do monumento, com a curadora Solange
Ferraz de Lima declarando que "o futuro do Museu do Ipiranga é digital".

### 3.4 Que número descreve a adoção hoje

Aqui a honestidade custa caro. **Não encontrei número confiável de adoção de captura neural.** O
que encontrei:

- Mercado de *reality capture* avaliado em **US$ 7,8 bilhões em 2026** por consultoria de
  relatório pago, e software de *reality capture* em US$ 3,8 bilhões em 2025 com projeção de
  US$ 11,2 bilhões em 2034 (CAGR 12,7%) por outra. **Não abri nenhum dos dois relatórios** — são
  páginas de venda; o número não entra como evidência, só como ordem de grandeza declarada.
- A THE FUTURE 3D afirma **12.100 buscas mensais** por serviço profissional de splatting e
  "nenhuma empresa americana oferecendo explicitamente" o serviço no início de 2026 — sendo que a
  própria autora vende o serviço. Trato como marketing, não como medida.
- Faixas de preço de serviço no mesmo levantamento: engajamento mínimo de US$ 2.250; sítio
  pequeno US$ 2.250–5.000; campus médio US$ 5.000–15.000; distrito grande US$ 10.000–25.000;
  ambiente de cinema ou produção virtual US$ 10.000–50.000; multiplicador de 1,5× sobre
  fotogrametria. Mesma ressalva.
- Contagem de varreduras: a loja Android dá "100.000+" downloads do Scaniverse, enquanto a
  Niantic diz ter varrido "milhões de objetos e lugares". Duas ordens de grandeza de distância
  entre as duas afirmações sobre a mesma coisa — **não uso nenhuma das duas**.

**Sem número encontrado** para: quantas cenas capturadas circulam, quantos profissionais
trabalham com isso, que fração da produção 3D já é captura. Este buraco é o principal motivo de a
confiança do mapa ser média e não alta.

### 3.5 Uma nota sobre o Brasil

O recorte é global, com uma nota sobre o Brasil, conforme o briefing. O que achei:

- **Patrimônio.** O Museu do Ipiranga varre desde 2019 com laser e drone. O Museu Nacional,
  depois do incêndio de 2018, recuperou peças a partir de inventário digitalizado anterior —
  tomografia e varredura a laser iniciadas nos anos 2000. O #ConectaMuN digitaliza o acervo do
  Museu Nacional da República, com exposição entre 20/06 e 19/07/2026 em Brasília. Nenhum desses
  projetos é captura neural: são laser e fotogrametria, o paradigma maduro.
- **Custo como barreira estrutural.** Um artigo brasileiro revisado (Alencastro, Dantas, Silva e
  Jacques, *Interações*, 2019, sobre o Museu Júlio de Castilhos em Porto Alegre) testa
  digitalização "faça-você-mesmo" exatamente porque museus brasileiros não têm verba para serviço
  profissional, e conclui que fotogrametria vence laser por curva de aprendizado menor. É um dado
  de 2019, mas descreve uma condição que não mudou: no Brasil, a questão não é qual técnica é
  melhor, é qual cabe no orçamento. É por isso que a captura por celular importa mais aqui do que
  em Redmond.
- **Direito.** A LGPD trata imagem como dado pessoal, e a discussão brasileira já se move da
  distinção público/privado para a "expectativa razoável de privacidade" — mas **não achei nenhum
  posicionamento da ANPD, decisão judicial ou artigo jurídico sobre captura volumétrica de
  espaço**. O buraco é declarado, não preenchido.

### 3.6 O que é maduro e por isso NÃO entra como raiz

Registro das recusas, conforme o critério da seção 4:

- **Fotogrametria clássica e varredura a laser terrestre**: recusadas como raiz — adoção em
  maioria em topografia, obra e perícia há mais de uma década; o próprio veredito de 18/09/2026
  trata varredura a laser como técnica estabelecida. Tratadas como contexto em 3.1 e 3.5.
- **Tour virtual proprietário (Matterport e similares)**: recusado — mercado consolidado e já
  adquirido. Contexto.
- **LiDAR em celular de topo de linha**: recusado como raiz — está em aparelho de massa desde
  2020. É pré-condição, não ruptura.
- **NeRF**: recusado — foi a prova de conceito de 2020, e na prática de produção já foi
  substituído pelo splatting. Entra como pré-condição histórica.
- **WebGPU e distribuição 3D no navegador**: é habilitador e é o tema 15 da disciplina.
- **Ampliador que inventa detalhe (Magnific) e reconstrução a partir de uma imagem (TripoSR,
  Depth Anything V2)**: entram como *efeito* e como ferramenta dentro da raiz 3, não como raiz
  própria — não rompem uma prática, aceleram uma que a raiz 3 já rompeu.

## 4. As disrupções-raiz

Quatro. Cada uma passa pelas quatro perguntas do critério de maturidade, respondidas em uma linha
cada.

### R1 — O ativo 3D perde a alça: a representação deixa de ser construída e passa a ser amostrada

**O que rompe.** Rompe o pipeline modelar → abrir UV → texturizar → riggar e, com ele, três
décadas de ferramental, de formação e de divisão de trabalho construídas sobre a malha com
topologia. Rompe também a noção de "arquivo editável": o que chega não tem parte nomeável, não
tem material separável da luz, não tem aresta para puxar. Não é "o mesmo mais barato" — é outro
objeto, com outras operações possíveis e outras impossíveis.

**Por que agora, e não há cinco anos.** Porque em 2026 as três camadas fecharam no mesmo ano:
formato (`KHR_gaussian_splatting`, RC em 03/02/2026, ratificação prevista no 2º trimestre),
transporte em escala (3D Tiles com LOD hierárquico, 27/04/2026, 110 M splats em 3,7 km²) e
compressão em corpo de norma (MPEG GSC, CDAM no V-PCC e WD no G-PCC). Em 2021 havia técnica sem
formato; formato sem transporte não circula, e transporte sem compressão não escala.

**Onde está na difusão.** Entre **produto de nicho e adoção precoce**. Está na ferramenta de quem
trabalha (ArcGIS, Autodesk, Cesium, Nuke, DJI), mas o consumo ainda é por plugin: a Unreal 5.7
não traz suporte de primeira parte. Não é maioria.

**O que ainda falta acontecer.** (1) Ratificação efetiva da extensão e implementação nativa nos
dois motores dominantes. (2) Edição e reiluminação com sentido físico saindo da pesquisa — o
MaterialClusterGS é de junho de 2026 e é artigo. (3) Precisão métrica declarável, hoje na casa
dos centímetros contra milímetros do instrumento. (4) Um ofício de "editar splat" com nome,
portfólio e faixa salarial, que ainda não existe.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** Os fabricantes de instrumento de
medida (Trimble, Leica, Faro) e as consultorias de engenharia que vendem precisão: para eles, a
captura barata é a mercadoria que corrói a margem. O movimento racional deles não é negar a
técnica — é **empurrar a norma de tolerância**, isto é, tornar obrigatório declarar o erro. Isso
gera o efeito `e4`, e é retroação com dono.

### R2 — Capturar deixa de ser um ato visível, e o consentimento perde o momento em que era pedido

**O que rompe.** Rompe o regime de consentimento que depende de um ato perceptível: a câmera
apontada, o tripé montado, a autorização de filmagem, a placa na porta. Uma pessoa andando com o
celular por dez minutos produz o interior da sua casa, da loja do concorrente ou do hospital — e
ninguém em volta tem indício de que aquilo está virando um modelo navegável. Rompe também a
distinção público/privado que sustenta o direito de imagem: a fachada sempre foi visível; o que
está atrás dela nunca foi capturável assim.

**Por que agora, e não há cinco anos.** Porque o gesto ficou trivial e a cadeia ficou curta: 5 a
10 minutos de vídeo 360 com câmera de consumidor e resultado em horas (Project Eternal,
23/04/2026); 500 m² por varredura no próprio aparelho, com localização centimétrica onde já há
mapa (Scaniverse, 07/04/2026). E porque a captura passiva entrou no litígio: em 29/06/2026 foi
protocolada nos EUA (N.D. Cal.) a *Fennessy et al. v. Google LLC*, alegando que as câmeras Nest
coletam dado biométrico facial de transeuntes sem aviso, com a frase que descreve o problema
inteiro — "uma pessoa caminhando pela calçada não tem nenhum indicador ou pista visual de que sua
impressão facial está sendo catalogada". Troque "impressão facial" por "geometria da casa" e
está descrito o próximo caso.

**Onde está na difusão.** **Adoção precoce.** O gesto está em aparelho de consumidor e há
plataforma vendendo o serviço; a consciência social e a resposta institucional não estão.

**O que ainda falta acontecer.** (1) Um caso judicial sobre captura **volumétrica** — de corpo e
de espaço —, e não sobre rosto; todo o litígio de hoje é biométrico-facial. (2) Uma definição
jurídica que trate a forma de um espaço como dado protegido, que hoje não existe nem na LGPD nem
nas leis biométricas estaduais americanas. (3) Um mecanismo de recusa que funcione: não há
equivalente do "não me fotografe" para quem está dentro de um volume capturado.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** As próprias plataformas de
captura, e por um motivo que não é cinismo: o risco jurídico é delas. O caminho racional para
elas não é defender o direito de quem foi capturado — é **remover a pessoa antes de devolver a
cena**, transferindo o problema para o apagamento. Daí `e8.1`, e daí a consequência mais
desconfortável deste mapa: a conformidade produz um arquivo de cidades vazias.

### R3 — O sensor deixa de ser a única fonte: o modelo completa o que não foi medido e exporta no mesmo formato

**O que rompe.** Rompe a equivalência entre "existe um arquivo 3D deste lugar" e "alguém esteve
neste lugar". Enquanto o 3D era construído à mão, ninguém confundia modelo com registro; agora o
gerado e o medido saem no mesmo contêiner, com a mesma aparência, e sem nada no arquivo que
distinga um do outro. Isso rompe o estatuto de **prova** da captura — e rompe num momento
específico: quando ela acabou de ser aceita como prova.

**Por que agora, e não há cinco anos.** Porque a geração chegou ao formato de saída da captura,
não a um formato próprio: a World API (21/01/2026) devolve ambiente navegável a partir de texto,
imagem ou vídeo, exportável para ferramenta de produção. E porque o outro lado ficou pronto ao
mesmo tempo: em 18/09/2026 um júri condenou com base em reconstrução 3D admitida sob Daubert. Os
dois fatos separados por um ano são a tesoura.

**Onde está na difusão.** Entre **demo pública e produto de nicho** — a geração de mundo tem
parceiros nomeados e nenhum número de adoção público. Por isso toda a cadeia derivada desta raiz
carrega confiança baixa na terceira ordem, e nenhuma confiança alta além da primeira.

**O que ainda falta acontecer.** (1) Procedência que atravesse o pipeline 3D: a C2PA 2.4 e o
sistema da Canon assinam **foto**, com data, hora, local e ajustes; não há menção a profundidade
nem a cena. (2) Um caso de fraude volumétrica com consequência — é o que costuma produzir a
norma. (3) Um custo de verificação que não seja proibitivo; hoje verificar é mais caro que gerar,
e é daí que sai a retroação `e12`.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** As seguradoras e os peritos
judiciais — que perdem se a cena deixar de valer como prova, e ganham se a validade passar a
depender de equipamento certificado que só eles operam. O movimento racional deles é **capturar**
a mudança: não barrar a captura barata, e sim erguer um requisito de procedência que ela não
cumpra. É `e11.1`, e é a diferença entre regulação que protege e regulação que fecha mercado.

### R4 — O corpo em movimento deixa de exigir instrumentação: filmar passa a produzir animação

**O que rompe.** Rompe o estúdio de captura de movimento como ativo de capital — o galpão, as
câmeras infravermelhas, o traje, a calibração — que era a barreira de entrada de toda animação de
personagem humano crível. E rompe algo mais fino no contrato: enquanto filmar produzia imagem,
contratar um ator por um dia comprava um dia. Quando filmar produz um ativo volumétrico
reutilizável, o mesmo dia de trabalho passa a entregar uma coisa que continua rendendo depois que
a diária acabou, e **nenhum contrato padrão de elenco no Brasil separa essas duas coisas**.

**Por que agora, e não há cinco anos.** Porque a captura sem marcador saiu do laboratório em três
frentes ao mesmo tempo: volume de 4×4 m a 20×20 m rodando **localmente** e sem traje (Move, com a
EA citada como cliente); câmera única com cinemática inversa validada contra sistema óptico de
dez câmeras (PMC12416023, 05/09/2025); e cena 4D transmitida ao vivo para navegador comum com 1,5
milhão de visualizações na estreia (DNE e Gracia, 27/04/2026), além de rigs de 60 a 200 câmeras
PTZ entregando ativo 4D editável (OBSBOT e 4DV.ai, NAB, 20/04/2026).

**Onde está na difusão.** **Produto de nicho**, entrando em adoção precoce na animação e na
produção virtual; ainda não é o caminho padrão.

**O que ainda falta acontecer.** (1) Precisão em rotação e articulação fina — 21,2° de erro em
rotação de ombro inviabiliza uso clínico e de alto rendimento. (2) Direito: o NO FAKES Act (S.
4591) avançou no Comitê Judiciário do Senado americano em 18/06/2026 criando direito federal
sobre réplica digital de **voz, imagem, nome e semelhança**, com mecanismo de notificação e
retirada e multa de US$ 25.000 por contranotificação falsa — e o texto que abri **não trata
explicitamente de réplica volumétrica**. (3) Um custo de rig que caiba fora do topo do
espetáculo; 60 a 200 câmeras não é democratização.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** Os sindicatos de atores e
dubladores, que já ganharam vocabulário nessa briga com a IA generativa de voz e imagem. Eles não
bloqueiam a técnica — **cobram por ela**, e é isso que produz `e15.1`: a separação entre diária e
licença. Do outro lado, as detentoras de direito de transmissão esportiva têm incentivo oposto:
capturar o espetáculo volumetricamente aumenta o valor do pacote que elas já vendem, o que
acelera `e16` e desacelera qualquer norma que dificulte a captura de corpo em estádio.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ativo 3D perde a alça de edição — a representação deixa de ser construída e passa a ser amostrada
    efeitos:
      - id: e1
        ordem: 1
        efeito: Bibliotecas de ativos passam a vender cena capturada georreferenciada ao lado da malha, e o preço da malha genérica de ambiente cai
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O artista de ambiente deixa de ser contratado para construir e passa a ser contratado para consertar captura
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O portfólio de entrada em estúdio deixa de ser um modelo que a pessoa fez e passa a ser uma captura que ela consertou, e quem contrata perde o instrumento com que media habilidade
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Ferramenta de edição de splat com material físico entra em pacote comercial de criação, e a captura passa a ser reacendível sem recaptura
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O valor do trabalho migra da geometria para a iluminação, e quem sabe reacender uma captura cobra mais do que quem sabe capturá-la
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A captura crua vira commodity vendida por metro quadrado, como foto de banco de imagem, e quem opera a câmera deixa de assinar a obra
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Os motores de jogo passam a tratar splat como tipo nativo, e o custo de produzir ambiente de mundo real cai a ponto de viabilizar estúdio pequeno
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Jogos e experiências passam a se passar em lugares que existem, e o direito de uso do lugar vira item de orçamento onde antes não havia item
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Administradores de estádio, shopping e centro histórico passam a licenciar a aparência do lugar como receita, e o espaço público ganha dono na cópia mesmo sem ter dono no original
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A imprecisão métrica da captura neural trava sua adoção em engenharia, e o setor de infraestrutura mantém dois pipelines — splat para ver, instrumento para medir
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Surge uma classe de laudo que declara a tolerância da captura, e nenhuma decisão de obra pode citar uma cena capturada sem ela
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A distinção entre imagem do lugar e medida do lugar vira cláusula padrão em contrato de obra pública, e a captura barata fica confinada à comunicação
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Quem captura deixa de receber o dado e passa a receber acesso à cena, porque o processamento pesado mora na nuvem de poucas empresas
        sinal: fraco
        prazo: 2033
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Museus e arquivos brasileiros que digitalizam acervo descobrem que não têm o acervo digital, têm uma assinatura
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Uma exigência de cópia soberana em formato aberto e verificável entra em edital público de digitalização, e o custo de digitalizar sobe
                sinal: fraco
                prazo: 2043
                confianca: baixa
  - disrupcao: Capturar deixa de ser um ato visível, e o consentimento perde o momento em que era pedido
    efeitos:
      - id: e6
        ordem: 1
        efeito: Espaços que hoje proíbem foto e vídeo passam a proibir captura volumétrica em placa própria, porque a proibição antiga não descreve o gesto de andar filmando em 360
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O varejo passa a tratar o layout da loja como segredo comercial e a acionar quem publica captura de interior, movendo a disputa de privacidade para concorrência desleal
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O direito sobre o interior de um espaço aberto ao público se separa do direito sobre a fachada, e o passeio virtual passa a depender de licença como a trilha sonora depende
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Locadores e condomínios passam a exigir cláusula de não-captura em contrato de locação e de visita, depois que anúncio de imóvel com cena navegável expõe o interior de terceiros
        sinal: fraco
        prazo: 2031
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Corretor e fotógrafo de imóvel passam a responder pelo que entrou na cena sem ser o imóvel, e nasce uma etapa paga de limpeza antes da publicação
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A limpeza vira automática e o vazio habitado — cena sem nenhum vestígio de pessoa — passa a ser a estética padrão do espaço publicado
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Uma ação sobre captura volumétrica sem consentimento chega a tribunal em jurisdição com lei biométrica, e a pergunta passa a ser se a forma do corpo em splat é dado biométrico
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: As plataformas passam a remover pessoas no servidor antes de devolver a cena, e a cena com gente só existe sob contrato
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O acervo volumétrico do século XXI registra ruas sem ninguém, e o apagamento por conformidade vira o viés estrutural do arquivo
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: A ANPD trata a captura de espaço como tratamento de dado pessoal quando a cena permite inferir rotina de morador, e o legítimo interesse deixa de cobrir mapeamento urbano privado no Brasil
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Plataforma global passa a servir ao Brasil uma versão degradada do mundo capturado, e o país fica com menos resolução espacial do que paga
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A reação à captura invisível produz contramedida física, e superfícies que quebram reconstrução passam a ser especificadas em projeto de arquitetura e de vestuário
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A legibilidade de um espaço para máquina passa a ser decisão de quem constrói, e não uma propriedade dada do mundo
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O modelo do mundo passa a ter buracos deliberados, e não estar no modelo vira privilégio pago
                sinal: fraco
                prazo: 2042
                confianca: baixa
  - disrupcao: O sensor deixa de ser a única fonte — o modelo completa o que não foi medido e exporta no mesmo formato
    efeitos:
      - id: e10
        ordem: 1
        efeito: Quem produz mídia deixa de distinguir no orçamento ir ao lugar de gerar o lugar, e a decisão passa a ser de custo em vez de natureza
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Produtoras passam a gerar o ambiente e capturar só o que precisa ser reconhecível, e a captura vira ancoragem em vez de construção
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: O público aprende a procurar o índice de realidade na cena, e o defeito de captura passa a ser lido como selo de autenticidade em vez de erro
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A procedência assinada chega ao ativo 3D e passa a registrar sensor, percurso e o que foi completado por modelo
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Seguradora e perito passam a recusar cena sem procedência, e a captura barata deixa de entrar em processo como entrava a fotografia
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A prova visual do espaço deixa de valer por semelhança e passa a valer por assinatura, e a desigualdade de instrumentação vira desigualdade processual
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: O ativo sem procedência não desaparece, vira o padrão do que circula em rede social, e a assinatura fica confinada ao uso institucional
            sinal: fraco
            prazo: 2037
            confianca: baixa
      - id: e12
        ordem: 1
        efeito: Verificar uma cena passa a custar mais do que gerá-la, e instituições trocam a verificação do artefato pela confiança na origem
        sinal: fraco
        prazo: 2036
        confianca: baixa
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Três a cinco plataformas de captura viram os cartórios de fato do espaço digitalizado, e escolher fornecedor vira decisão de política pública
            sinal: fraco
            prazo: 2040
            confianca: baixa
      - id: e13
        ordem: 1
        efeito: Modelos de mundo passam a ser treinados com captura de gente comum, e a cena que alguém sobe para ver a própria casa alimenta o gerador que a dispensa
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Nasce demanda por captura que não sobe, e processamento local vira diferencial de produto em vez de limitação técnica
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Capturar localmente vira o gesto caro e capturar na nuvem vira o gesto grátis, e ter o modelo do próprio espaço passa a ser função de renda
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: O corpo em movimento deixa de exigir instrumentação — filmar passa a produzir animação
    efeitos:
      - id: e14
        ordem: 1
        efeito: Animação de personagem humano em produção pequena passa a sair de vídeo comum, e o estúdio de captura deixa de ser barreira de entrada
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: O animador de personagem passa a ser contratado por intenção e correção, não por captura, porque o dado bruto deixou de ser escasso
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: O gesto característico de um intérprete vira identificável e licenciável fora do corpo dele, como a voz já é
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: Contratos de elenco passam a distinguir filmagem de captura volumétrica, porque filmar passou a produzir um ativo reutilizável que a filmagem não produzia
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Sindicatos e agentes brasileiros passam a cobrar por reuso volumétrico, e a diária de gravação se separa da licença sobre o corpo
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: O intérprete deixa de vender tempo e passa a vender direito de instanciação, e a carreira passa a se medir por catálogo em vez de agenda
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: Esporte e espetáculo ao vivo passam a ser transmitidos como cena navegável, e a posição da câmera deixa de ser decisão da direção
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: A direção de imagem ao vivo se parte em dois ofícios — quem posiciona sensor e quem projeta as regras do que o espectador pode olhar
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: O enquadramento deixa de ser linguagem compartilhada, e a crítica de imagem perde o objeto comum porque não existe mais o plano que todos viram
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e16.2
            ordem: 2
            efeito: O custo de rig e de banda confina a cena navegável ao topo do espetáculo, e o resto do audiovisual permanece plano
            sinal: medio
            prazo: 2037
            confianca: baixa
      - id: e17
        ordem: 1
        efeito: O erro em rotação e articulação fina trava a captura sem marcador no uso clínico e no alto rendimento, e o sistema instrumentado sobrevive onde o número decide
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: O mesmo gesto passa a ter dois preços conforme o que se vá fazer com ele — barato para expressão, caro para medida
            sinal: medio
            prazo: 2038
            confianca: baixa
```

### O que o bloco não diz

**Os mecanismos, um por um.** O bloco YAML guarda o efeito, não a causa. Abaixo, a cadeia
`porque <pai> faz <mecanismo>` para cada efeito de primeira ordem, e para os de segunda e
terceira onde o mecanismo não é evidente.

- **`e1`** — porque R1 padroniza formato (glTF), transporte (3D Tiles) e compressão (SPZ 2.0.0,
  −90% contra PLY) no mesmo ano, o custo marginal de *publicar* uma cena cai para perto de zero,
  e quem vende ativo 3D passa a poder listar captura sem pedir conversão ao comprador. **Classe
  de referência:** glTF 2.0 foi ratificado em 2017 e virou o padrão de fato do 3D na web em
  quatro a cinco anos; contando da ratificação prevista para 2026, 2029 é o mesmo passo. Sinal
  forte porque há caso: Cesium, Esri, Autodesk, Niantic e XGRIDS já embarcaram.
- **`e1.1`** — porque `e1` torna a cena abundante e a malha genérica barata, o gargalo deixa de
  ser produzir e passa a ser **corrigir**: remover pessoa, fechar buraco de oclusão, resolver o
  borrão sob o móvel. Isto não é o mesmo efeito de `e1` mais adiante: muda o ator (de vendedor de
  ativo para contratante de artista) e muda o mecanismo (de custo de distribuição para escassez
  de habilidade). Passa na regra de parada.
- **`e1.1.1`** — porque `e1.1` muda o que o profissional entrega, o artefato pelo qual ele é
  avaliado muda junto; e conserto, ao contrário de construção, **não deixa rastro de autoria**.
  Quem contrata perde o sinal que usava. Terceira ordem e confiança baixa: depende de `e1.1`
  acontecer e de o mercado não inventar outro sinal no caminho.
- **`e2`** — porque a representação amostrada mistura material e luz numa mesma primitiva, a
  reiluminação vira o problema de pesquisa central (MaterialClusterGS, 06/2026, propõe paleta
  global compartilhada justamente para tornar a edição propagável). **Classe de referência:** o
  3DGS levou três anos de artigo (2023) a recurso nativo no Nuke 17 (2026); contando de junho de
  2026, 2030 dá quatro anos, um pouco mais porque reiluminação física é mais difícil que
  renderização. Sinal fraco: é artigo, não produto.
- **`e3`** — porque `e1` e `e2` tornam a cena distribuível e manipulável, e porque o motor é onde
  o consumo acontece; hoje não há suporte de primeira parte na Unreal 5.7, e é exatamente essa
  lacuna que o padrão ratificado fecha. **Classe de referência:** o glTF entrou como importador
  nativo nos motores cerca de três anos depois de ratificado. Sinal médio: há plugins maduros
  (Luma, Polycam, o pacote da Unity) — há tentativa, não caso consolidado.
- **`e4`** — **retroação com dono.** Porque a captura neural erra na casa dos centímetros
  (7,82 cm médio contra 2,2 mm de estação total, com a ressalva de fonte da seção 8), e porque
  fabricantes de instrumento e consultorias de engenharia têm incentivo direto em tornar a
  tolerância declarável, a adoção em obra **não** segue a adoção em mídia. Este efeito freia R1.
- **`e5`** — porque splat de cena grande é pesado e o processamento é de nuvem (o
  Project Eternal devolve "em poucas horas" e a plataforma fica com o pipeline), a custódia do
  dado se separa do ato de capturar. Confiança **baixa**: derrubada na bateria da seção 7, porque
  o próprio Scaniverse faz prévia no aparelho e a tendência técnica pode ir no sentido contrário.
- **`e6`** — porque o gesto de capturar volumetricamente não se parece com fotografar, a
  proibição existente ("proibido foto e vídeo") não o descreve, e quem administra espaço precisa
  de um texto novo para ter o que alegar. **Classe de referência:** a placa "proibido filmar com
  drone" apareceu em espaço privado cerca de quatro anos depois de o drone de consumo se
  popularizar. Sinal médio, não forte: museus já restringem varredura, mas não achei placa
  específica de captura volumétrica — ver seção 7.
- **`e6.1`** — porque o interior de uma loja é desenho e o desenho é ativo concorrencial, quando
  o interior vira arquivo navegável o dano deixa de ser de privacidade e passa a ser econômico —
  e o direito que oferece remédio rápido para isso é o de concorrência, não o de dados. Troca de
  ator (de pessoa capturada para empresa concorrente) e de mecanismo: passa na regra de parada.
- **`e7`** — porque a captura de um imóvel para anúncio inclui, sem intenção, o que estiver na
  janela, na mesa e na parede, e porque quem responde pelo anúncio é o locador e o corretor.
  **Classe de referência:** a cláusula de imagem em contrato de locação por temporada apareceu
  cerca de cinco anos depois de a fotografia de anúncio virar padrão de plataforma.
- **`e8`** — porque existe estatuto que dá ação privada por coleta de identificador biométrico
  sem consentimento (a BIPA, de Illinois), e porque a *Fennessy v. Google* (29/06/2026) já testa
  a captura passiva de transeunte; a extensão natural é perguntar se geometria corporal em splat
  é identificador. **Classe de referência:** a BIPA é de 2008 e levou cerca de doze anos até os
  grandes acordos — mas aqui o estatuto **já existe**, então o prazo conta da técnica, não da lei:
  seis anos.
- **`e8.1`** — porque a plataforma é quem carrega o risco jurídico e quem controla o pipeline, o
  caminho de menor custo para ela é apagar no servidor, não negociar consentimento. Este é o
  mecanismo mais importante do mapa e o mais desconfortável.
- **`e8.1.1`** — porque `e8.1` roda em toda cena, o acervo resultante tem um viés sistemático que
  ninguém escolheu: a cidade capturada do século XXI não terá habitantes. Confiança baixa; o
  mecanismo é forte, o prazo é chute calibrado.
- **`e8.2`** — porque a LGPD trata imagem como dado pessoal e a doutrina brasileira já migra para
  "expectativa razoável de privacidade", uma cena que revela rotina de morador cabe no conceito
  sem lei nova. **Não achei posicionamento da ANPD sobre isto** — por isso sinal fraco e confiança
  baixa. `e8.2.1` é a consequência comercial: a plataforma degrada em vez de litigar.
- **`e9`** — **retroação sem dono institucional, com dono de mercado.** Porque a captura
  invisível não tem mecanismo de recusa, a recusa migra para o material: superfície que quebra
  reconstrução. Sinal fraco — é inferência, não caso. Mas o mecanismo é o mesmo da moda
  anti-reconhecimento facial, que existe.
- **`e10`** — porque a World API devolve ambiente navegável a partir de texto ou imagem
  exportável para produção, "ir ao lugar" e "gerar o lugar" passam a competir na mesma linha de
  planilha. **Classe de referência:** a substituição de locação por cenário virtual em produção
  virtual levou cerca de três anos depois do LED wall se tornar acessível. Sinal forte: há
  parceiros nomeados usando em previsualização e arquitetura.
- **`e10.1`** — porque gerar é barato e capturar é caro, o orçamento racional captura só onde o
  reconhecimento importa (a fachada que o espectador identifica, o letreiro real) e gera o resto.
  A captura vira **âncora**, não construção — muda a função, não só a quantidade.
- **`e10.1.1`** — porque `e10.1` torna a mistura padrão, o espectador desenvolve uma heurística
  de leitura; e como o modelo generativo produz superfície limpa, o **defeito** é o que sobra de
  distintivo. É o mesmo mecanismo pelo qual grão de filme virou marca de autenticidade.
- **`e11`** — porque a C2PA já resolveu o problema análogo para imagem (versão 2.4 em 21/04/2026;
  Canon assinando data, hora, local e ajustes em 11/05/2026), e porque o vetor de ataque
  volumétrico é novo, a extensão do mesmo desenho para cena é o caminho técnico óbvio. **Classe
  de referência:** a C2PA saiu de fundação (2021) a câmera assinando (2024–2026) em cinco anos;
  para 3D o relógio começa em 2026 e é mais lento, porque não há um fabricante de "câmera 3D" que
  possa impor o padrão sozinho — daí 2034.
- **`e11.1`** — porque perito e seguradora têm incentivo em elevar o requisito (protege a
  validade da prova que eles operam e fecha o mercado para quem não tem instrumento certificado),
  e porque a porta já está aberta: o veredito de 18/09/2026 admitiu varredura a laser por Daubert
  **por ser método estabelecido** — critério que uma captura de celular com preenchimento
  generativo não atende.
- **`e11.2`** — contradição deliberada com `e11.1`, e as duas ficam. Ver seção 5, "contradições".
- **`e12`** — **retroação.** Porque verificar exige recomputar ou confiar em assinatura, e gerar
  é quase grátis, a economia da verificação inverte: fica mais barato restringir a origem do que
  checar o artefato. É o que já aconteceu com software (assinatura de fornecedor em vez de
  auditoria de binário).
- **`e13`** — porque a plataforma processa na nuvem e mantém a coleção (a Niantic diz operar "uma
  das maiores coleções de splats gaussianos do mundo" e descreve o objetivo como "mapear o mundo
  para as máquinas"), a captura do usuário é insumo por construção, não por má-fé. **Não abri
  nenhum termo de uso**; é por isso que o efeito está com sinal médio e não forte, e é o item 2
  da seção 8.
- **`e14`** — porque o volume operável chegou a 20×20 m rodando localmente e sem traje, e porque
  há cliente nomeado em jogo (EA), o custo fixo do galpão deixa de ser condição. **Classe de
  referência:** a câmera digital profissional levou cerca de quatro anos do primeiro uso em
  produção grande até ser o caminho padrão do independente.
- **`e15`** — porque o produto do dia de trabalho muda de natureza (imagem → ativo reutilizável),
  e porque já existe vocabulário jurídico sendo construído para réplica digital: o NO FAKES Act
  (S. 4591) avançou no Comitê Judiciário em 18/06/2026 com direito federal sobre voz, imagem,
  nome e semelhança — mas **sem tratar explicitamente de réplica volumétrica**, o que é
  precisamente a brecha que o contrato terá de cobrir antes da lei.
- **`e16`** — porque o rig de 60 a 200 câmeras PTZ entrega "ativo 4D editável, pronto para
  reenquadrar" (NAB, 20/04/2026) e porque a entrega em navegador já funcionou em escala (1,5
  milhão de visualizações, 17–75 Mbps, sem aplicativo). **Classe de referência:** a transmissão
  em alta definição levou cerca de doze anos da demonstração à maioria; a cena navegável começa a
  contar de 2026, e 2033 é a entrada em rotina no topo, não a maioria.
- **`e16.2`** — **retroação.** Porque o custo de rig e de banda não cai na mesma velocidade da
  técnica de reconstrução, a promessa de "tudo volumétrico" fica confinada ao espetáculo caro. É
  a mesma história do 3D estereoscópico no cinema.
- **`e17`** — **retroação com número.** Porque 21,2° de erro em rotação de ombro e a falha
  declarada em pronação/supinação inviabilizam decisão clínica e de alto rendimento, e porque
  nesses domínios existe um comprador disposto a pagar por precisão. Freia R4 exatamente onde R4
  parecia mais promissora.

**Dois efeitos de terceira ordem caem fora da janela do mapa, e ficam declarados:** `e9.1.1`
(buracos deliberados no modelo do mundo, 2042) e `e5.1.1` (exigência de cópia soberana em edital
público, 2043). Os dois estão na roda porque completam a cadeia causal, e os dois estão **um a dois
anos além de 2041** — não são previsões dentro do horizonte deste mapa, são a direção para onde a
cadeia aponta depois dele. Todos os efeitos de 1ª e 2ª ordem estão dentro da janela.

### Cobertura por STEEP e por quem perde

| Eixo | Efeitos de 1ª ordem |
|---|---|
| **Social** | `e6`, `e7`, `e8`, `e9` |
| **Tecnológico** | `e1`, `e2`, `e3`, `e11` |
| **Econômico** | `e5`, `e10`, `e12`, `e13`, `e14`, `e16` |
| **Ecológico** | **vazio** — registrado, não forçado. Ver nota abaixo. |
| **Político-institucional** | `e4`, `e8`, `e15`, `e17` |

**Nota sobre o eixo ecológico.** Ficou vazio de propósito. Há um argumento óbvio (captura
substitui viagem de equipe a locação, logo reduz emissão) e um contra-argumento igualmente óbvio
(treinar e servir modelo de mundo consome energia), e **não achei número para nenhum dos dois**.
Escrever um efeito ali sem número seria exatamente o efeito genérico que o método recusa. Fica
registrado como buraco, na seção 12.

**Quem perde, nomeadamente:**

| Quem | Por qual efeito |
|---|---|
| Modelador e artista de ambiente júnior | `e1.1`, `e1.1.1` |
| Operador de câmera de captura, quando vira commodity | `e2.1.1` |
| Museu e arquivo público sem custódia do próprio digital | `e5.1`, `e5.1.1` |
| Quem é capturado sem saber, sem ter como recusar | `e8`, `e8.1` |
| A historiografia futura, privada da cidade com gente | `e8.1.1` |
| Quem não tem instrumento certificado, em processo judicial | `e11.1.1` |
| Quem não tem renda para processar localmente | `e13.1.1` |
| Estúdio de captura de movimento instrumentado, fora do nicho clínico | `e14` |
| Intérprete sem contrato que separe diária de licença | `e15`, `e15.1.1` |
| Diretor de imagem ao vivo, e a crítica de imagem | `e16.1`, `e16.1.1` |
| O audiovisual de orçamento médio, deixado em 2D | `e16.2` |

### Convergências

Três ramos de raízes diferentes chegam ao mesmo lugar, e é o achado mais valioso do mapa.

1. **A custódia do espaço concentra em poucas mãos, por três caminhos independentes.** `e5`
   (processamento pesado na nuvem, vindo de R1), `e12.1` (verificação cara demais leva a confiar
   na origem, vindo de R3) e `e13.1.1` (processar localmente vira caro, vindo de R3) apontam para
   o mesmo estado: três a cinco plataformas como cartórios de fato do mundo digitalizado. Duas
   raízes técnicas diferentes — a economia do dado e a economia da prova — produzem a mesma
   concentração. Se eu tivesse que apostar num efeito de 2041, seria neste.
2. **A cena vazia de gente é produzida por dois motivos que não se conhecem.** `e8.1`
   (conformidade jurídica, de R2) e `e10.1` (o gerado preenche o que o sensor não viu, de R3)
   chegam ambas a uma imagem do mundo sistematicamente limpa de pessoas — uma por remoção, outra
   por nunca ter havido pessoa ali. O resultado visual é indistinguível, e o efeito sobre o
   arquivo é o mesmo.
3. **A separação entre ver e medir, e entre expressar e medir.** `e4.1` (laudo de tolerância, de
   R1) e `e17.1` (dois preços para o mesmo gesto, de R4) são o mesmo movimento em domínios
   diferentes: a captura barata é aceita para representar e recusada para decidir. Isso sugere
   que a linha divisória de 2041 não será entre real e gerado, mas entre **o que tem tolerância
   declarada e o que não tem**.

### Retroalimentações

- **Ciclo que freia R1.** `e4` → `e4.1` → `e4.1.1`: a imprecisão gera laudo, o laudo gera
  cláusula contratual, a cláusula reduz o mercado endereçável da captura neural em engenharia —
  que é justamente o setor com verba. Menos verba, menos pressão para melhorar a precisão. Ciclo
  negativo estável.
- **Ciclo que reforça R2 pela reação.** `e8` → `e8.1` → plataformas ficam mais seguras
  juridicamente → capturar fica **mais** fácil de vender, não menos. A defesa do capturado
  acelera a captura. Ciclo positivo perverso, e o que mais me convenceu ao escrever.
- **Ciclo que reforça R3.** `e13` → modelo de mundo melhora com captura de usuário → `e10` fica
  mais barato → menos gente captura → mas o modelo já treinou. Reforço com esgotamento: o
  gerador fica melhor até o ponto em que a fonte de dado seca, e aí trava.

### Contradições que ficam sem resolver

1. **`e11.1` contra `e11.2`.** A procedência vira requisito (perito, seguradora) **e** a maior
   parte do que circula continua sem procedência (rede social). Os dois podem coexistir num mesmo
   ano, e coexistir é o pior dos mundos: o cidadão comum vê cena não assinada o tempo todo e
   aprende a confiar nela, enquanto a instituição a rejeita. **O que decide entre elas:** se o
   custo de assinar cair a ponto de a plataforma de consumo assinar por padrão — como aconteceu
   com HTTPS. Se não cair, fica a rachadura.
2. **`e3` contra `e4`.** O mesmo objeto técnico é adotado rápido em jogo e travado em obra. Não é
   contradição lógica — é a demonstração de que "adoção" sem qualificar o domínio não quer dizer
   nada. **O que decide:** se o requisito é ver ou medir.
3. **`e14` contra `e17`.** A captura sem marcador democratiza a animação e **não** substitui o
   sistema instrumentado. Ambas verdadeiras, e a convivência é o cenário provável.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — Reconstrução como programa, não como dado.** O `img2threejs` levantado pela turma
reconstrói o objeto de uma imagem como **código Three.js procedural**, não como malha nem como
nuvem. Onde foi visto: na varredura da própria turma sobre storytelling. O que mudaria: se a
reconstrução volta como programa, ela volta **editável por definição** — e toda a raiz R1 muda de
sinal, porque o problema da alça perdida se resolve por fora. Sinal observável de crescimento:
uma ferramenta comercial de captura oferecendo saída em código procedural, ou um artigo em
SIGGRAPH que meça fidelidade de reconstrução procedural contra splat. Liga com o tema 14 da
disciplina.

**SF2 — Splat com tempo, não apenas com espaço.** A Bentley escreve, em 10/02/2026, que "ao
adicionar uma dimensão de tempo, os splats gaussianos deixam de capturar um momento e passam a
rastrear como algo muda ao longo do tempo". Hoje isso é discurso de fornecedor de infraestrutura.
O que mudaria: se a captura vira **série temporal** em vez de instantâneo, o objeto deixa de ser
"o lugar" e passa a ser "a história do lugar" — e aí a pergunta de privacidade muda de natureza,
porque rotina é inferível. Sinal observável: um produto que venda assinatura de captura periódica
do mesmo endereço, ou a entrada de campo temporal no `KHR_gaussian_splatting` pós-ratificação.

**SF3 — O teto de 500 m² por varredura móvel.** O número aparece na documentação do Scaniverse e
é uma restrição de produto, não de física. Se ele subir uma ordem de grandeza, um único
transeunte captura um quarteirão. Sinal observável: o próprio número na página do produto.

**SF4 — O laudo de tolerância antes da norma.** Se alguma seguradora publicar critério próprio de
aceitação de cena capturada antes de qualquer organismo normativo, `e4.1` e `e11.1` chegam muito
antes do previsto — porque seguradora move mais rápido que comitê. Sinal observável: uma apólice
que cite splat ou nuvem de pontos em cláusula de sinistro.

**SF5 — O erro de reconstrução como estética.** Já há uso deliberado do borrão e da distorção de
splat como linguagem em clipe e arte digital. Se isso virar convenção, `e10.1.1` antecipa muito —
o defeito deixa de ser sinal de autenticidade e vira decoração, e a heurística do público morre
antes de nascer. Sinal observável: um festival com categoria própria, ou um filtro que **imite**
artefato de splat.

**SF6 — A captura entrando pelo tribunal antes de entrar pelo mercado.** O veredito de
18/09/2026 é laser, não neural. Mas o precedente Daubert estabelecido para "documentação 3D de
cena" é a porta por onde a captura neural entra depois. Sinal observável: a primeira perícia
apresentada com splat gaussiano, e se ela sobrevive à impugnação.

### Wildcards

**W1 — Um splat de pessoa, capturado sem consentimento, no centro de uma obra comercial de
sucesso.** Mecanismo: alguém captura volumetricamente uma pessoa reconhecível em espaço público,
publica como cena navegável ou insere em obra, e a pessoa processa. Por que é improvável: o
gargalo não é técnico, é de escala — a maior parte da captura hoje é de espaço vazio, e a captura
de corpo ainda exige rig. Por que é alto impacto: o caso dá **rosto** a R2 e R4 ao mesmo tempo, e
casos com rosto movem legislação. Sinal precoce: uma disputa extrajudicial sobre uso de captura
volumétrica de pessoa, mesmo que acordada em sigilo — costuma vazar pela imprensa especializada.
O que faria com o mapa: `e8` e `e15` antecipariam de quatro a seis anos, e `e8.1` (apagamento
como padrão) viraria quase certeza.

**W2 — O formato fragmenta depois de padronizado.** Mecanismo: a `KHR_gaussian_splatting` é
ratificada, mas a pesquisa muda de representação — surge algo que não é gaussiana (primitiva
neural comprimida, campo aprendido com decodificador) e que é claramente superior; a extensão
vira o formato do que já foi capturado, e o novo circula proprietário. Por que é improvável: o
Khronos desenhou a extensão explicitamente para "permitir inovação futura", e a Bentley chama
isso de flexibilidade de projeto. Por que é alto impacto: mata `e1` — sem formato único não há
biblioteca, e sem biblioteca não há queda de preço. Sinal precoce: um artigo com ganho de uma
ordem de grandeza em qualidade por byte sobre uma primitiva que não seja gaussiana, adotado por
uma das plataformas grandes. O que faria com o mapa: R1 perderia a perna de distribuição e todo o
ramo `e1`–`e3` recuaria cinco anos.

**W3 — Um Estado torna a captura volumétrica do espaço público um monopólio cartorial.** Mecanismo:
depois de um incidente de segurança (uma captura de instalação sensível circulando), um país
grande exige licença para capturar espaço público e delega a um operador único. Por que é
improvável: contraria o interesse das plataformas globais e é difícil de fiscalizar. Por que é
alto impacto: `e12.1` deixa de ser concentração de mercado e vira concentração de Estado, e
`e8.2.1` (o Brasil recebendo versão degradada do mundo) vira a regra, não a exceção. Sinal
precoce: qualquer norma de segurança que proíba varredura 3D de perímetro sem autorização —
começaria por aeroporto, porto e instalação militar. **Eu não achei nenhuma.**

**W4 — A precisão métrica é resolvida.** Mecanismo: um método híbrido amarra splat a restrição
geométrica e leva o erro de 7,82 cm para a casa do milímetro sem instrumento caro. Por que é
improvável: o limite é de amostragem e de calibração de câmera, não só de otimização. Por que é
alto impacto: mata `e4` e `e4.1` inteiros — a retroação que segura R1 desaparece, e a adoção em
engenharia acelera de uma vez. Sinal precoce: um artigo com erro submilimétrico validado contra
estação total, replicado por terceiro. É o wildcard mais **desejável** deste mapa e o único que
melhoraria quase tudo.

## 7. Contra o próprio mapa

Bateria aplicada ao mapa já pronto, por escrito, em 22/09/2026. O registro de alterações está no
fim da seção, com valor antes e depois.

### 7.1 Pré-mortem — é 2041 e este mapa se mostrou errado. Por quê?

**Razão 1 (a mais provável): nada disso saiu da mídia.** A captura neural virou um recurso de
nicho em produção virtual e visualização de infraestrutura, e nunca tocou o consentimento, o
contrato de elenco nem o tribunal — porque quem captura em escala continuou sendo empresa, com
contrato e advogado, e não a pessoa comum. O mapa confundiu **acessibilidade técnica** com
**prática difundida**. Isto atinge diretamente R2 e todo o ramo `e6`–`e9`. Ação: `e6` rebaixado
de sinal forte para médio; `e7` rebaixado de confiança alta para média; `e9` teve o prazo
empurrado de 2032 para 2034.

**Razão 2: o splat foi um formato de transição.** A representação mudou outra vez antes de 2035,
e a padronização de 2026 acabou descrevendo um objeto que ninguém mais produz — como aconteceu
com VRML. Isto atinge R1 na perna de distribuição. Ação: `e2` rebaixado de confiança alta para
média, e o wildcard W2 foi acrescentado justamente por esta razão.

**Razão 3: a geração engoliu a captura.** Em 2041 ninguém captura porque gerar ficou bom o
bastante para qualquer uso que não seja prova, e a captura sobreviveu apenas como perícia e
cadastro. Isto **inverteria** o mapa: R3 deixaria de ser uma raiz paralela e passaria a ser a
única. Ação: registrado como cenário indesejável na seção 9 e como a principal ameaça à validade
da estrutura de quatro raízes; `e10` mantido com confiança alta justamente porque é a única perna
desse futuro que já tem caso.

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

- **`e1`** é linear: mais formato, mais biblioteca, mais barato. O que o salva de virar contexto
  é a não-linearidade da **georreferência**: quando a cena entra no mesmo espaço de coordenadas
  dos 3D Tiles do planeta, ela deixa de ser um arquivo e passa a ser uma camada endereçável, e
  isso é mudança de tipo, não de grau. Mantido, com a justificativa escrita.
- **`e3`** era linear ("motores vão suportar"). Ganhou não-linearidade no efeito econômico: o
  ponto não é o suporte, é o limiar de orçamento abaixo do qual um estúdio de cinco pessoas
  produz ambiente de mundo real. Mantido, com prazo empurrado de 2029 para 2031 — o suporte
  nativo não existe ainda nem na 5.7.
- **`e16`** era linear ("mais câmeras, mais resolução"). Sem o argumento da **escolha de ponto de
  vista passando para o espectador**, seria só transmissão melhor. Mantido pelo mecanismo, com o
  prazo empurrado de 2030 para 2033 pela classe de referência da alta definição.
- **`e2.1.1`** ("captura vira commodity") é a extrapolação mais frágil do mapa. Mantido em
  terceira ordem com confiança baixa, e registrado aqui como candidato a corte na próxima revisão.

### 7.3 Velocidade de adoção — prazos confrontados com a classe de referência

| Efeito | Prazo original | Classe de referência | Prazo final |
|---|---|---|---|
| `e1` | 2028 | glTF 2.0: ratificação (2017) → padrão de fato (~2021), 4 anos | **2029** |
| `e3` | 2029 | glTF: ratificação → importador nativo em motor, ~3 anos, contando de 2026 | **2031** |
| `e7` | 2030 | cláusula de imagem em locação por temporada, ~5 anos após a foto virar padrão | **2031** |
| `e8` | 2031 | BIPA existe desde 2008; o relógio conta da técnica (2026), ~6 anos | **2032** |
| `e9` | 2032 | moda anti-reconhecimento facial: ~8 anos do reconhecimento entrar em uso | **2034** |
| `e11` | 2033 | C2PA: fundação (2021) → câmera assinando (2026), 5 anos; +3 por não haver fabricante único | **2034** |
| `e12` | 2035 | assinatura de fornecedor substituindo auditoria em software, ~10 anos | **2036** |
| `e15` | 2031 | negociação sindical sobre réplica digital de voz: ~4 anos do problema aparecer | **2032** |
| `e16` | 2030 | alta definição: demonstração → maioria, ~12 anos; aqui só a entrada no topo | **2033** |
| `e4.1` | 2035 | norma de tolerância em fotogrametria aérea, ~6 anos após o uso se espalhar | **2036** |
| `e11.1` | 2037 | aceitação pericial de nova técnica sob Daubert, ~4 anos do primeiro caso | **2038** |

Todos os empurrões foram para **mais tarde**, nenhum para mais cedo. Isso é sintoma de que o mapa
estava otimista com velocidade, que é o viés mais comum da futurização — e é o que a bateria
existe para corrigir.

### 7.4 A raiz que não acontece — o que sobra do mapa

- **Se R1 não acontecer** (a representação amostrada não substitui a malha; splat vira só um modo
  de visualização): caem `e1`, `e2`, `e3` e todos os seus filhos — onze efeitos. Sobra R2 inteira
  (a captura continua invisível mesmo produzindo malha), sobra R3 (a geração continua exportando
  no formato de quem mede) e sobra R4 (o corpo não depende de splat). O mapa perde um terço e
  **continua de pé**.
- **Se R2 não acontecer** (a sociedade simplesmente não se importa, como não se importou com
  Street View): caem `e6`–`e9` e filhos — treze efeitos. Sobra tudo o que é econômico e
  profissional. Este é o ramo mais frágil do mapa, e é onde a minha confiança é menor.
- **Se R3 não acontecer** (a geração nunca chega a ser confundível com a medida): caem `e10`–`e13`
  e filhos — onze efeitos. Mas `e11` sobreviveria por outro caminho: a procedência é demandada de
  qualquer forma pela fraude em imagem 2D. Reconectado mentalmente, não estruturalmente.
- **Se R4 não acontecer** (a captura sem marcador fica presa ao erro de rotação): caem `e14`–`e17`
  e filhos — onze efeitos. O resto do mapa não sente.

**Conclusão do teste:** não há raiz disfarçada. As quatro são independentes o bastante para que a
queda de qualquer uma deixe as outras três de pé. Isso é o que eu queria verificar.

### 7.5 Teste da causa solta — efeitos que aconteceriam do mesmo jeito sem a raiz

Aplicado a todos os efeitos de 2ª e 3ª ordem. Três não passaram:

1. **"A formação em 3D se reorganiza em torno de direção, não de execução"** — removido. Isso
   aconteceria de qualquer forma pela IA generativa em geral; não deriva desta raiz. Foi para a
   seção 12 e substituído por `e1.1.1`, que é específico: o **portfólio** deixa de mostrar o que
   a pessoa fez.
2. **"Reguladores criam categoria jurídica nova para dado espacial"** — removido. É o efeito
   genérico que o método proíbe: serve para qualquer tema, não tem regulador nomeado e não tem
   mecanismo. Substituído por `e8.2`, que nomeia a ANPD, o conceito (rotina inferível) e a base
   legal que deixa de servir (legítimo interesse).
3. **"Surge a profissão de auditor de cena"** — removido. "Surge uma nova profissão" é proibido
   sem nome e mecanismo. O conteúdo útil foi absorvido em `e11.1`, onde os atores são perito e
   seguradora, que já existem.

### 7.6 Suposições escondidas

O mapa assume, sem dizer, que:

1. **O processamento continua caro o bastante para morar na nuvem.** Se um telefone de 2032 fizer
   em minutos o que hoje exige servidor, `e5`, `e12.1` e `e13.1.1` caem juntos — e com eles a
   convergência 1, que é o achado principal. Esta é a premissa mais carregada do mapa, e a que eu
   menos consigo defender com evidência. O próprio Scaniverse já faz prévia no aparelho.
2. **A padronização se sustenta.** Se a ratificação da extensão do glTF atrasar ou for capturada
   por um fornecedor, `e1` perde a base. O anúncio de fevereiro é intenção, não fato consumado —
   e o verbo, na fonte primária, é "expected".
3. **O modelo aberto continua aberto.** Boa parte do que sustenta R1 e R4 é código publicado. Se
   o campo fechar — como aconteceu com modelos de linguagem —, a curva de custo muda.
4. **A plataforma continua permitindo.** `e16` e `e13` supõem que as plataformas continuem
   distribuindo e ingerindo captura de terceiros. Uma mudança de termo de uso reverte os dois num
   trimestre.
5. **Energia e banda seguem disponíveis.** 17 a 75 Mbps por espectador é o número de uma
   performance de quatro minutos. Multiplicado por um público de esporte, não é óbvio que a rede
   suporte — e é parte do que sustenta a retroação `e16.2`.
6. **O horizonte de 2041 é longo o bastante para instituição e curto o bastante para técnica.**
   Pode ser o pior dos dois: longo demais para prever ferramenta, curto demais para ver mudança
   institucional consumada.

Cada premissa quebrada gera wildcard ou remoção; as premissas 1, 2 e 4 são as que mais efeitos
derrubam.

### 7.7 Viés do autor

Três, e nomeados:

1. **O efeito `e8.1.1` (a cidade sem habitantes) está aqui porque é bonito.** É a frase mais
   citável do mapa e a que eu mais quis escrever. O mecanismo é sólido, mas o prazo (2041) é
   completamente arbitrário e a confiança baixa é o mínimo que se pode atribuir. Se eu tivesse que
   cortar um efeito de terceira ordem por elegância excessiva, seria este.
2. **O mapa é mais rico em consequência institucional do que em consequência estética.** Isso
   reflete o meu interesse, não o do tema. Para quem projeta mídia e interação — o público
   declarado —, a pergunta "o que acontece com a linguagem quando o enquadramento acaba" (`e16.1.1`)
   merecia um ramo inteiro e ficou com um efeito só.
3. **A escolha de quatro raízes e não três favorece a completude sobre a parcimônia.** R4 (corpo)
   poderia ser lida como caso particular de R1 (representação amostrada). Separei porque o ator e
   o direito envolvidos são outros — mas é uma escolha, e um mapa de três raízes seria defensável.

### 7.8 Calibração

| Ordem | alta | media | baixa |
|---|---|---|---|
| 1ª (17) | 3 | 12 | 2 |
| 2ª (20) | 0 | 13 | 7 |
| 3ª (16) | 0 | 0 | 16 |

A distribuição cai com a ordem, como tem de cair. As três confianças altas de primeira ordem
(`e1`, `e10`, `e14`) são exatamente as três com sinal forte — isto é, as três em que há caso real
hoje, não inferência. Nenhuma confiança alta além da primeira ordem, e nenhuma confiança média na
terceira.

### 7.9 Registro de alterações — antes → depois

Auditável, com motivo. Cota mínima cumprida: pelo menos um efeito rebaixado ou removido por raiz.

**Raiz 1 (representação):**
- `e1`: prazo **2028 → 2029**, porque a classe de referência do glTF 2.0 dá quatro anos da
  ratificação ao uso de fato, e a ratificação é de 2026.
- `e2`: confiança **alta → media**, porque o único apoio é um artigo de junho de 2026 sem número
  de desempenho no resumo.
- `e3`: prazo **2029 → 2031**, porque a Unreal 5.7 não tem suporte de primeira parte em 2026.
- `e4.1`: prazo **2035 → 2036**, pela classe de referência de norma de tolerância.
- `e5`: confiança **media → baixa**, porque o Scaniverse já faz prévia no aparelho — a premissa de
  que o processamento fica na nuvem é a mais frágil do mapa (§7.6.1).
- **Removido:** "a formação em 3D se reorganiza em torno de direção" — falha no teste da causa
  solta. Para a seção 12.

**Raiz 2 (consentimento):**
- `e6`: sinal **forte → medio**, porque não encontrei nenhuma placa ou regulamento específico de
  captura volumétrica; o que existe é restrição a varredura em museu, que é outra coisa.
- `e7`: confiança **alta → media** e prazo **2030 → 2031**, pela classe de referência da cláusula
  de imagem em locação.
- `e8`: prazo **2031 → 2032**; mantida a confiança média porque o estatuto (BIPA) já existe.
- `e9`: prazo **2032 → 2034**, pela classe de referência da moda anti-reconhecimento facial.
- **Removido:** "reguladores criam categoria jurídica nova para dado espacial" — efeito genérico
  proibido pelo método. Substituído por `e8.2`, com ator, conceito e base legal nomeados.

**Raiz 3 (estatuto):**
- `e11`: prazo **2033 → 2034**, porque não há fabricante de "câmera 3D" capaz de impor padrão
  sozinho, como a Canon e a Sony fizeram para foto.
- `e11.1`: prazo **2037 → 2038**, pela classe de referência de aceitação pericial sob Daubert.
- `e12`: confiança **media → baixa** e prazo **2035 → 2036**, porque a inversão econômica da
  verificação é inferência por analogia com software, sem nenhum caso no domínio 3D.
- `e13`: sinal **forte → medio**, porque **não abri nenhum termo de uso** de plataforma de
  captura; a alegação sobre treino se apoia só na descrição de propósito da própria Niantic.
- **Removido:** "surge a profissão de auditor de cena" — efeito genérico. Absorvido em `e11.1`.

**Raiz 4 (corpo):**
- `e15`: prazo **2031 → 2032**, pela classe de referência da negociação sindical sobre voz.
- `e16`: prazo **2030 → 2033**, pela classe de referência da alta definição (doze anos da
  demonstração à maioria; aqui, só a entrada em rotina no topo).
- `e16.2`: **acrescentado** na bateria como retroação — o mapa original tinha R4 só com
  aceleração, o que a regra proíbe.
- `e17`: **acrescentado** na bateria como segunda retroação, ancorado no número de erro de rotação
  de ombro (21,2°), que estava na seção 3 e não estava produzindo efeito nenhum na roda.

A bateria derrubou coisa: cinco confianças ou sinais rebaixados, nove prazos empurrados (todos
para mais tarde), três efeitos removidos e dois acrescentados. Nenhum prazo foi antecipado.

## 8. O que a máquina errou

Eu sou a máquina. Sobre o meu trabalho nesta rodada, em 22/09/2026:

1. **Tentei abrir a página da chamada de material dinâmico do MPEG no radiancefields.com e ela
   devolveu só metadado.** Eu tinha, do resultado de busca, um conjunto de afirmações atraentes —
   prazo de 15/10/2026, requisito de COLMAP e 25–30 fps, prioridade para captura de pessoa e de
   palco, e uma cessão de direito de uso do material para treino de modelos. **Nada disso entrou
   no mapa como fato**, e o efeito `e13` foi reescrito para não depender disso. A versão que quase
   escrevi citava o prazo e a cláusula de treino como se eu os tivesse lido. O sinal de alerta foi
   o retorno da ferramenta dizendo que só havia cabeçalho — se eu estivesse trabalhando mais
   rápido, teria passado batido. É o erro mais grave que quase cometi aqui.
2. **Uso um número cuja origem eu não consigo verificar, e uso mesmo assim.** Os 7,82 cm de erro
   geométrico médio contra 2,2 mm da Trimble X12 vêm de um site comercial (THE FUTURE 3D) que
   **não cita o estudo de origem** e que vende o serviço sobre o qual escreve. Esse número sustenta
   sozinho o efeito `e4` e toda a retroação que segura R1. Se ele estiver errado por um fator de
   dois, o argumento muda de tamanho; se estiver errado por um fator de dez, `e4` cai. Mantive e
   declarei — cortar seria pior, porque a retroação existe de fato e é a única com número.
3. **Duas afirmações sobre a mesma coisa com duas ordens de grandeza de diferença, e eu não sei
   qual é a certa.** A loja de aplicativos diz "100.000+" downloads do Scaniverse; a Niantic diz
   ter varrido "milhões de objetos e lugares". Não usei nenhuma das duas como medida de adoção, e
   por isso a seção 3.4 termina com "sem número encontrado" em vez de com um gráfico. A tentação
   de usar a maior era grande.
4. **Citei de memória e tive de tirar.** Escrevi, na primeira versão da seção 3, que "saíram 1.692
   artigos de Gaussian splatting no arXiv em 2025". Eu reconheço esse número, mas **não consegui
   reabrir a fonte nesta rodada** — e número reconhecido sem fonte reaberta é exatamente o modo de
   falha que este método existe para pegar. Removido do documento e registrado aqui.
5. **Duas afirmações relevantes vieram de resultado de busca, não de página aberta, e por isso não
   estão na seção 11.** A primeira: a Niantic teria 30 bilhões de imagens posadas e 10 milhões de
   locais varridos — a página do GeekWire devolveu HTTP 403 e o número não entrou como evidência.
   A segunda: o visionOS 26 teria sido lançado em 15/09/2025 com geração de profundidade em foto
   2D. As duas seriam úteis; nenhuma entrou.
6. **A autoria de um efeito pode estar trocada.** O `img2threejs` e o `Magnific` aparecem no
   enunciado do tema como levantamento da turma, e eu os uso em SF1 e na seção 3.6 sem ter aberto
   nenhum dos dois repositórios nesta rodada. Estão tratados como *ideia* trazida pela turma, não
   como fonte — mas se alguém me perguntar em aula o que exatamente o `img2threejs` gera, eu não
   verifiquei.
7. **O eixo ecológico ficou vazio, e eu quase o preenchi com uma frase plausível.** "Captura
   substitui viagem de equipe e reduz emissão" é verdadeira o bastante para passar numa leitura
   rápida e vazia o bastante para não significar nada sem número. Ficou como buraco declarado.

## 9. Três cenários para 2041

### Provável — "o mundo tem cópia, e a cópia tem porteiro"

É 2041. Capturar um lugar é tão banal quanto fotografá-lo, e por isso ninguém pensa mais nisso
como um ato. Quase toda produção de mídia que precisa de ambiente começa por uma busca numa
biblioteca georreferenciada, e o que se contrata não é modelagem — é conserto e iluminação. O
formato aguentou: a extensão do glTF virou o contêiner comum, como o JPEG foi, e o que circula
circula. O que não se previu bem foi a concentração: entre três e cinco plataformas processam,
guardam e assinam a maior parte do espaço digitalizado do planeta, porque verificar ficou mais
caro que gerar e a saída institucional foi confiar na origem em vez de auditar o artefato. Museus
e prefeituras que digitalizaram acervo nos anos 2020 descobriram, ao longo dos anos 2030, que
tinham assinatura e não tinham cópia — alguns recompraram, e o edital público brasileiro passou a
exigir cópia soberana em formato aberto, o que encareceu digitalizar na exata hora em que a
técnica barateava. As ruas capturadas estão vazias de gente, e quase ninguém estranha: metade por
conformidade, metade porque o gerado nunca teve ninguém. Em engenharia, a linha se manteve —
splat para ver, instrumento para medir, com tolerância declarada em cláusula contratual. E a
captura de corpo se dividiu em dois mercados que não conversam: barata para expressão, cara e
instrumentada para medida. **Sinal precoce de que estamos entrando neste cenário:** a primeira
licitação pública brasileira que exija entrega do dado bruto, em formato aberto e verificável,
como condição de pagamento de um serviço de digitalização.

### Desejável — "a cópia tem procedência, e a procedência é barata"

É 2041. A diferença entre o que foi medido e o que foi completado por modelo está escrita no
arquivo, é verificável por qualquer pessoa e não custa nada — a assinatura de cena virou padrão de
plataforma como o HTTPS virou padrão de navegador, e o visualizador comum mostra a procedência sem
que ninguém peça. Isso teve duas consequências que não eram óbvias. A primeira: a captura barata
**continuou** valendo em processo judicial, porque a cadeia de custódia deixou de depender do
preço do instrumento e passou a depender da assinatura, e o perito de escritório pequeno não foi
expulso do mercado. A segunda: com a diferença explícita, o gerado ficou livre para ser gerado —
ninguém precisa mais fingir que uma cena inventada é um registro, e a linguagem da mídia sintética
se soltou da obrigação de parecer real. O consentimento encontrou uma forma que funciona: não é
autorização prévia, que era impraticável, e não é apagamento automático, que empobrecia o arquivo;
é registro de quem capturou, quando e onde, com remoção a pedido e com trilha do que foi removido
— de modo que o acervo do século XXI ainda tem gente dentro. **O que teria de ser feito para
chegar aqui:** que a extensão de procedência para cena 3D tenha saído junto com a ratificação do
formato, e não dez anos depois; e que um organismo com poder de compra — uma agência de patrimônio,
um sistema público de saúde, uma federação esportiva — tenha exigido procedência antes de o
mercado precificar. **Sinal precoce:** a C2PA ou o JPEG Trust abrindo grupo de trabalho para cena
capturada, com fabricante de sensor dentro.

### Indesejável — "o mundo já foi capturado, e ninguém captura mais"

É 2041. A geração ficou boa o bastante, e capturar virou coisa de perícia e cadastro. Os modelos de
mundo foram treinados com o que a década de 2020 e 2030 subiu — casas, lojas, escolas, ruas,
corpos —, e o que eles devolvem é suficiente para qualquer uso de mídia. O resultado não é um mundo
falso: é um mundo **médio**. As cenas têm a textura estatística do que foi mais capturado, e o que
foi pouco capturado — periferia, interior do país, o que não interessava a plataforma nenhuma —
simplesmente não está bem representado em lugar nenhum, nem no registro nem no gerador. A captura
sobreviveu onde o número decide, e ali ficou cara e certificada: quem tem instrumento homologado
faz prova, quem não tem, não faz. O consentimento deixou de ser problema porque deixou de haver
captura nova — o dado já foi colhido, e não há como revogar o que já treinou. E o ofício se
reorganizou em torno de operar o gerador, o que significa que o repertório visual de 2041 é
derivado do repertório de 2028, reprocessado. **Sinal precoce deste cenário:** o momento em que um
estúdio grande anunciar que parou de capturar locação porque gerar ficou mais barato **e** o
resultado passou na revisão de cliente. É um anúncio que soa como boa notícia de produtividade. É
o sinal.

## 10. O experimento

### O que é

**"O inventário do que entrou sem ser convidado."** Um exercício de captura com três atos, feito
com celular, em uma sala ou corredor do CIn, publicado em navegador.

**Ato 1 — capturar.** Duas pessoas capturam o mesmo ambiente: uma varredura de celular de dois a
três minutos cada, processada em ferramenta gratuita (Polycam, Luma, Scaniverse) e publicada como
splat no navegador via SuperSplat ou visualizador web equivalente. Nenhuma instrução sobre o que
evitar — a captura é feita como qualquer pessoa faria.

**Ato 2 — inventariar.** A turma abre a cena e lista, exaustivamente, **tudo o que está na cena e
não era o objeto da captura**: pessoas, rostos, telas ligadas com conteúdo legível, papéis, nomes
em crachá, mochilas, garrafa com etiqueta, o que está escrito no quadro, a marca do equipamento, a
janela do vizinho. Cada item vai para uma planilha com três colunas: o que é, se é identificável e
se a pessoa dona daquilo saberia que aquilo foi para a cena.

**Ato 3 — cronometrar a limpeza.** Uma equipe tenta remover tudo o que o inventário marcou, no
editor de splat, cronometrando cada remoção. Mede-se: o tempo total contra o tempo de captura, e —
o mais importante — **se a remoção deixou rastro**: buraco, borrão, sombra de alguém que não está
mais lá.

Variante opcional, se houver crédito disponível: gerar o mesmo ambiente por descrição textual numa
ferramenta de modelo de mundo, publicar as duas cenas lado a lado sem rótulo e pedir à turma que
diga qual existiu. Mas essa variante é a sobremesa; o prato é o inventário.

### Que pergunta sobre o futuro ele ajuda a responder

Duas, e as duas estão na roda:

1. **`e7.1` e `e8.1` — a limpeza vira ofício ou vira botão?** Se limpar custar uma fração
   desprezível do tempo de captura e não deixar rastro, não nasce etapa profissional nenhuma:
   nasce um botão, e o efeito de remoção sistemática (`e8.1`) chega antes e mais fundo. Se limpar
   custar mais que capturar, nasce um ofício — e a captura amadora fica impublicável, o que
   desacelera R2 inteira.
2. **`e8` — quanto do que aparece numa captura é capturável por acidente?** O inventário produz o
   número que eu não consegui achar em lugar nenhum: quantos itens identificáveis entram numa
   captura casual de um ambiente comum. É um número pequeno e local, feito por quinze pessoas numa
   tarde — e é mais do que a literatura me deu nesta rodada.

### Que tecnologia emergente ele usa, e por que não dá com a madura

Usa captura neural a partir de sensor comum e edição de splat no navegador. **Não dá com
fotogrametria clássica** por um motivo que é o próprio ponto do experimento: fotogrametria de
qualidade exige cobertura deliberada, tripé, iluminação controlada e horas de processamento — isto
é, exige um procedimento visível, planejado e negociado. Quem faz fotogrametria clássica **sabe o
que está capturando**, porque teve de planejar a captura. O experimento só tem sentido com a
técnica que permite capturar sem planejar — é a falta de planejamento que produz o inventário.
Também não dá com varredura a laser: o equipamento é conspícuo, e conspicuidade é exatamente a
variável que R2 elimina.

### O que a turma faz quando testa isso em sala

- Captura em duplas (10 minutos).
- Publicação e abertura conjunta no navegador (15 minutos).
- Inventário coletivo, com a planilha projetada, item por item, em voz alta (25 minutos). Esta é a
  parte que produz o desconforto útil: o momento em que alguém diz "aquilo é o meu caderno".
- Limpeza cronometrada por uma equipe, com as outras assistindo (20 minutos).
- Discussão final (20 minutos), com três perguntas fixas: quem, na sala, deveria ter sido avisado?
  Que placa teria de existir na porta para cobrir isto, e ela cobriria? Se este arquivo vazasse
  daqui a dez anos, o que ele contaria sobre nós?

### O que seria um resultado que me faria mudar de ideia

Números explícitos, definidos antes de rodar:

- **Se a limpeza levar menos de 10% do tempo de captura e não deixar rastro visível**, então `e7.1`
  (a etapa paga de limpeza) está errado — não nasce ofício, nasce recurso de produto — e eu rebaixo
  `e7.1` e antecipo `e8.1` em pelo menos três anos.
- **Se o inventário produzir menos de cinco itens identificáveis** numa captura casual de ambiente
  coletivo, então R2 está superestimada: a captura acidental de terceiro é rara, não sistemática, e
  os efeitos `e6`–`e8` merecem rebaixamento geral de confiança.
- **Se a limpeza deixar rastro visível e irreparável em mais da metade das remoções**, então
  `e8.1.1` (a cidade vazia) ganha um mecanismo que eu não tinha: a cena limpa não fica vazia, fica
  **estragada** — e o efeito muda de "arquivo sem gente" para "arquivo com buracos", que é outra
  coisa e talvez pior.

Se nenhum dos três resultados aparecer e tudo ficar no meio-termo, o experimento não terá servido
— e isso também é resultado, registrável.

## 11. Fontes

Vinte e duas fontes abertas e lidas em 22/09/2026. Nada citado de memória; o que não abriu está
declarado nas seções 8 e 12.

1. `https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release` — anúncio da
   extensão `KHR_gaussian_splatting`. Sustenta a data (03/02/2026), a previsão de ratificação no
   2º trimestre de 2026, as compressões SPZ (Niantic Spatial) e L-GSC (Qualcomm), a lista de
   participantes e os primeiros adotantes. **Confiabilidade: alta** — fonte primária; mas é
   anúncio, então "ratificação prevista" é intenção declarada, não fato.
2. `https://ofinno.com/standards-readout/gaussian-splat-coding-exploration-advances-as-next-gen-video-coding-timeline-takes-shape/` —
   leitura de padronização. Sustenta que a GSC segue em **estágio de exploração** e as datas da
   chamada de propostas de codificação de próxima geração (15/05/2026, registro 01/08/2026,
   propostas em janeiro de 2027), com a ressalva explícita de que podem mudar.
   **Confiabilidade: média-alta** — consultoria especializada em padrões, sem interesse direto no
   resultado; não traz número de desempenho.
3. `https://mpeg.expert/gsc/index.html` — página do próprio MPEG sobre Gaussian Splat Coding.
   Sustenta a estratégia de duas camadas, os estágios CDAM (V-PCC) e WD (G-PCC) na reunião 153 e
   os grupos envolvidos (WG 7, WG 4, JVET). **Confiabilidade: alta** — é o organismo falando do
   próprio trabalho; última atualização em janeiro de 2026.
4. `https://cesium.com/blog/2026/04/27/3d-gaussian-splats-lod/` — splats com LOD hierárquico em
   3D Tiles. Sustenta a data (27/04/2026), os 110 milhões de splats em 3,7 km², as 20.169 fotos e
   427,7 gigapixels, os 3 cm de amostragem no solo, a redução de até 90% da SPZ 2.0.0 contra PLY
   e a integração com terreno global. **Confiabilidade: alta para os números** — é o fabricante
   descrevendo um caso próprio, com metodologia e escala declaradas.
5. `https://www.bentley.com/blog/insights/why-gaussian-splats-could-change-infrastructure/` —
   por que o padrão aberto muda a engenharia. Sustenta a data (10/02/2026), a metáfora do "JPEG do
   3D", os três anos de artigo a padrão e a ideia de splat com dimensão temporal (SF2).
   **Confiabilidade: média** — blog de fornecedor participante do grupo de trabalho; sem número
   de custo, tempo ou precisão, e ele mesmo declara isso pela ausência.
6. `https://www.thefuture3d.com/blog/state-of-gaussian-splatting-2026/` — estado de ferramentas,
   padrões e preços em 2026. Sustenta os **7,82 cm de erro médio contra 2,2 mm da Trimble X12**, as
   faixas de preço de serviço (US$ 2.250 a US$ 50.000), os preços de ferramenta e o quadro de
   padrões. **Confiabilidade: baixa-média** — site comercial que vende o serviço sobre o qual
   escreve e **não cita o estudo de origem do número mais importante que dele extraí**. Ver
   seção 8, item 2.
7. `https://www.nianticspatial.com/en/blog/scaniverse` — Scaniverse como plataforma. Sustenta a
   data (07/04/2026), o teto de 500 m² por varredura móvel, a localização centimétrica em 6DoF
   onde há varredura prévia, a alegação de "uma das maiores coleções de splats gaussianos do
   mundo" e a formulação "mapear o mundo para as máquinas" / "80% da economia fora das telas".
   **Confiabilidade: média-alta para o que a empresa faz, baixa para as alegações de escala** —
   e o texto **não trata de propriedade das varreduras**, ausência que sustenta a ressalva de `e13`.
8. `https://www.worldlabs.ai/blog/announcing-the-world-api` — World API. Sustenta a data
   (21/01/2026), as modalidades de entrada (texto, imagem, panorama, múltiplas vistas, vídeo), a
   renderização na web e exportação, e os parceiros nomeados (Preview, Fenestra, Escape.ai,
   Interior AI, xFigura, Lightwheel). **Confiabilidade: média-alta** — fonte primária; **sem
   número de adoção e sem preço público**, o que é em si um dado.
9. `https://arxiv.org/abs/2401.03890` — *A Survey on 3D Gaussian Splatting*. Sustenta a
   caracterização de 3DGS como representação explícita com renderização em tempo real e
   "editabilidade sem precedentes", a submissão em 08/01/2024, a nona revisão em 09/04/2026 e a
   aceitação na *ACM Computing Surveys*. **Confiabilidade: alta.**
10. `https://arxiv.org/abs/2606.09018` — *MaterialClusterGS*. Sustenta a data (08/06/2026), o
    diagnóstico de que BRDF por primitiva absorve sombra, iluminação indireta e erro geométrico em
    milhares de estimativas divergentes, e a proposta de paleta global para tornar a edição
    propagável. **Confiabilidade: alta para o problema e o método**; o resumo **não traz número de
    desempenho**, o que limita o que se pode concluir sobre prazo.
11. `https://pmc.ncbi.nlm.nih.gov/articles/PMC12416023/` — captura sem marcador por câmera única
    com cinemática inversa no OpenSim. Sustenta a data (05/09/2025), o n = 12 (22–33 anos), o
    método (Azure Kinect contra OptiTrack de dez câmeras) e os erros: 8° elevação de ombro, 13,8°
    flexo-extensão de cotovelo, 15,6° plano de elevação, 21,2° rotação de ombro, com
    pronação/supinação declaradas não confiáveis. **Confiabilidade: alta** — revisado por pares,
    com método e amostra explícitos; amostra pequena e população saudável, declarado pelos autores.
12. `https://move.ai/tech` — tecnologia da Move. Sustenta o volume de 4×4 m a 20×20 m, a execução
    100% local, a ausência de marcador e de traje, o treino em "milhões de minutos de movimento" e
    a citação à EA. **Confiabilidade: baixa-média para as alegações** — é página de produto, com a
    afirmação de ser "a mais precisa" **sem nenhum número de precisão**.
13. `https://www.cgchannel.com/2026/04/dne-and-gracia-release-4-minute-streamable-4dgs-performance/` —
    primeira performance musical em 4DGS transmitida. Sustenta a data (27/04/2026), os 4 minutos,
    os 17–75 Mbps, o WebGPU, a reprodução em navegador, celular e Quest 3 sem aplicativo, 1,5
    milhão de visualizações na estreia e a grade de câmeras projetada em torno da saída
    volumétrica. **Confiabilidade: alta** — publicação editorial estabelecida do setor gráfico,
    com números específicos; sem cifra de custo.
14. `https://www.obsbot.com/news/4dv-volumetric-capture-nab-show-2026` — captura volumétrica
    escalável na NAB. Sustenta a data (20/04/2026), as ~60 câmeras Tail 2 na demonstração, a
    arquitetura declarada para 200 ou mais e a entrega de "ativos 4D editáveis, prontos para
    reenquadrar e retemporizar". **Confiabilidade: média** — comunicado do fabricante; **sem
    bitrate, sem latência e sem custo**, três ausências que importam.
15. `https://global.canon/en/news/2026/20260511.html` — *Authenticity Imaging System* da Canon.
    Sustenta a data (11/05/2026), a base em C2PA, as câmeras (EOS R1 e R5 Mark II), o que é
    assinado (data, hora, local, equipamento, ajustes) e o alvo inicial (redações), com expansão
    prevista para governo, saúde e pesquisa. **Confiabilidade: alta** — fonte primária;
    **nenhuma menção a 3D ou profundidade**, que é o ponto que ela sustenta neste mapa.
16. `https://www.hklaw.com/en/insights/publications/2026/06/senate-judiciary-committee-advances-legislation-to-protect-name` —
    NO FAKES Act (S. 4591). Sustenta a data (18/06/2026), o avanço no Comitê Judiciário do Senado,
    o direito federal sobre voz, imagem, nome e semelhança, o mecanismo de notificação e retirada,
    as exceções (imprensa, paródia, crítica, educação sem fins lucrativos) e a multa de US$ 25.000
    por contranotificação falsa. **Confiabilidade: alta** — análise de escritório jurídico sobre
    texto legislativo público; **não trata explicitamente de réplica volumétrica**, e é essa
    ausência que o mapa usa.
17. `https://classactionu.org/our-news/google-hit-with-privacy-class-action-claiming-nest-smart-cameras-scan/` —
    *Fennessy et al. v. Google LLC*. Sustenta a data (29/06/2026), o foro (N.D. Cal.), a alegação
    sobre coleta de dado biométrico de transeuntes pelo Nest, as leis invocadas (BIPA, Califórnia,
    Virgínia) e a frase sobre a ausência de qualquer indicador visual para quem passa na calçada.
    **Confiabilidade: média** — site especializado em ação coletiva, que reproduz a petição; é
    **alegação**, não decisão, e nenhum valor de dano foi fixado.
18. `https://www.expertwitnessblog.com/3d-laser-scanning-expert-witness-testimony-shapes-verdict-in-fatal-accident-case/` —
    admissibilidade de reconstrução 3D sob Daubert. Sustenta a data (18/09/2026), o caso em
    Marietta (Geórgia), o uso de varredor FARO, a animação apresentada ao júri, a decisão de
    admissibilidade com a formulação "método bem estabelecido e cientificamente confiável" e a
    condenação de três dos quatro réus. **Confiabilidade: média** — blog especializado em perícia,
    sem número de processo citado; a narrativa é consistente com a jurisprudência descrita em
    fontes mais antigas sobre o tema.
19. `https://wwwhatsnew.com/2026/04/25/insta360-splatica-gaussian-splats-3d-project-eternal-abril-2026/` —
    Project Eternal. Sustenta a data (23/04/2026), os parceiros (Insta360, Splatica, Antigravity,
    CyArk), o fluxo de 5–10 minutos de vídeo 360 com retorno em horas, os 249 g do drone A1, os
    sítios (Civita di Bagnoregio e Pompeia), os destinos de exportação e os 1.000 uploads
    gratuitos. **Confiabilidade: média** — publicação de tecnologia reproduzindo anúncio; não
    abri o comunicado original dos fabricantes.
20. `https://jornal.usp.br/universidade/digitalizacao-do-museu-do-ipiranga-vai-levar-acervo-a-mais-pessoas/` —
    digitalização do Museu do Ipiranga. Sustenta o início em 2019, o equipamento (varredor a laser,
    drone, Civil 3D, InfraWorks, método BIM), o escopo (prédio, esculturas, objetos, parque) e a
    declaração da curadora Solange Ferraz de Lima. **Confiabilidade: alta para os fatos do
    projeto** — veículo institucional da USP; é de **10/06/2021**, então descreve o estado de 2021,
    não o de 2026, e o mapa o usa como âncora histórica, não como estado atual.
21. `https://www.scielo.br/j/inter/a/JFxBx6R5srj7PL3Kt3f5ndP/` — Alencastro, Dantas, Silva e
    Jacques, "Ferramentas de digitalização 3D faça-você-mesmo na preservação do patrimônio
    cultural", *Interações*, 2019. Sustenta a condição orçamentária dos museus brasileiros, o teste
    de fotogrametria contra triangulação a laser no Museu Júlio de Castilhos e a conclusão de que
    fotogrametria vence por curva de aprendizado. **Confiabilidade: alta** — revisado por pares, em
    veículo brasileiro; **é de 2019**, e o mapa o usa para a condição estrutural, não para o estado
    da técnica.
22. `https://www.avgguild.org/post/animation-vfx-game-jobs-in-2026-what-s-changing-and-how-to-stay-hireable` —
    mercado de trabalho em animação, VFX e jogos em 2026. Sustenta o encolhimento das vagas
    juniores e das tarefas de treinamento, e o crescimento de funções de tempo real, pipeline e
    ferramenta. **Confiabilidade: baixa-média** — texto de associação profissional, **sem nenhum
    número de contratação ou demissão**, por declaração própria; sustenta direção, não magnitude.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

```
SAIDA_VERIFICADOR_AQUI
```

### 12.2 Premissas assumidas do briefing

O bloco `briefing:` veio completo no pedido (modo MAPA, tema, slug, autor, zona de interesse,
horizonte 2041, público, recorte, descartado, raiz suspeita nula, viés neutro, busca web ligada,
caminho de saída). Não houve entrevista e não houve rebaixamento de confiança por isso, conforme
a §0 da skill. O que o briefing **não** cobria e eu assumi, declarado aqui:

1. **Rodada não interativa, sem usuário para responder.** Toda bifurcação foi decidida por mim e
   está registrada.
2. **"O que já é comum em produto de massa" como régua de descarte** foi aplicado literalmente:
   é o que produziu as recusas da seção 3.6.
3. **Quatro raízes e não três.** O briefing não fixa número. Escolhi quatro; a justificativa e a
   fragilidade dessa escolha estão em §7.7.3.
4. **"Global, com uma nota sobre o Brasil"** foi lido como: evidência global, com uma subseção
   brasileira própria (3.5) e efeitos brasileiros nomeados na roda (`e5.1`, `e8.2`, `e8.2.1`,
   `e15.1`) em vez de uma camada separada.
5. **O experimento é presencial e cabe em 90 minutos**, porque o movimento 3 da disciplina testa
   em sala. O briefing não dizia isso; é inferência do contexto da disciplina.
6. **A data do documento é a do relógio da máquina** (22/09/2026), não de memória.

### 12.3 Efeitos cortados na bateria da seção 7

Nenhum corte silencioso. Estes saíram da roda e ficam registrados com o motivo:

| Efeito cortado | Raiz | Motivo |
|---|---|---|
| "A formação em 3D se reorganiza em torno de direção, não de execução" | R1 | Falha no teste da causa solta: aconteceria igual por IA generativa em geral. Substituído por `e1.1.1`. |
| "Reguladores criam categoria jurídica nova para dado espacial" | R2 | Efeito genérico proibido: sem regulador nomeado, sem mecanismo. Substituído por `e8.2`. |
| "Surge a profissão de auditor de cena" | R3 | "Surge uma nova profissão" sem nome e sem mecanismo. Absorvido em `e11.1`, onde os atores já existem. |
| "Mudanças no mercado de trabalho 3D" | R1 | Escrito e cortado no rascunho: é o exemplo de manual do efeito que serve para qualquer tema. |
| "Cursos de graduação em design criam disciplina de captura" | R1 | Mesmo motivo; e eu não tenho evidência de nenhum currículo alterado. |
| "A sociedade debate os limites da captura" | R2 | Não é efeito, é enredo: sem ator e sem consequência mensurável. |
| "Captura 3D reduz emissões por dispensar viagem de equipe" | eixo ecológico | Plausível e sem número dos dois lados. Ver §5, nota sobre o eixo ecológico, e §8 item 7. |
| "A publicidade passa a usar cenas capturadas" | R1 | Verdadeiro, banal e já acontecendo: é contexto de 2026, não efeito futuro. |

### 12.4 Candidatos a raiz recusados pelo critério de maturidade

| Candidato | Veredito | Onde está na difusão | Onde entrou |
|---|---|---|---|
| Fotogrametria clássica | **Recusado como raiz** | maioria, há mais de uma década | contexto, §3.1 e §3.5 |
| Varredura a laser terrestre | **Recusado como raiz** | maioria em perícia e obra; tratada como "método bem estabelecido" em decisão judicial de 2026 | contexto, §3.1 |
| Tour virtual proprietário | **Recusado como raiz** | maioria no mercado imobiliário; consolidação já ocorrida | contexto, §3.6 |
| LiDAR em celular de topo | **Recusado como raiz** | em produto de massa desde 2020 | pré-condição de R2 |
| NeRF | **Recusado como raiz** | superado na prática pelo splatting | pré-condição histórica, §2 e §3 |
| WebGPU / 3D no navegador | **Recusado — é outro tema** | tema 15 da disciplina | habilitador de `e16` |
| Ampliador que inventa detalhe (Magnific) | **Recusado como raiz** | é ferramenta, não ruptura | dentro de R3 |
| Reconstrução a partir de uma imagem (TripoSR, Depth Anything) | **Recusado como raiz** | acelera a ruptura de R3, não cria ruptura própria | dentro de R3 |
| Modelo de mundo generativo | **Aceito, dentro de R3** | demo pública → produto de nicho | R3 |

### 12.5 Classes de referência usadas para datar, e de onde vieram

Nenhuma é medida por mim; todas são analogias declaradas, e o mapa depende delas. Registro para
que possam ser contestadas:

| Classe | Intervalo usado | Aplicada a |
|---|---|---|
| glTF 2.0: ratificação → padrão de fato na web | ~4 anos | `e1` |
| glTF: ratificação → importador nativo em motor | ~3 anos | `e3` |
| C2PA: fundação → câmera assinando | ~5 anos (+3 por não haver fabricante único) | `e11` |
| BIPA: estatuto existente → litígio sobre técnica nova | conta da técnica, ~6 anos | `e8` |
| Alta definição: demonstração → maioria | ~12 anos (usados só para a entrada no topo) | `e16` |
| Cláusula de imagem em locação por temporada | ~5 anos após a foto virar padrão | `e7` |
| Moda anti-reconhecimento facial | ~8 anos após o reconhecimento entrar em uso | `e9` |
| Assinatura de fornecedor substituindo auditoria em software | ~10 anos | `e12` |
| Negociação sindical sobre réplica digital de voz | ~4 anos do problema aparecer | `e15` |
| Aceitação pericial de técnica nova sob Daubert | ~4 anos do primeiro caso | `e11.1` |
| Câmera digital: uso em produção grande → padrão do independente | ~4 anos | `e14` |
| 3DGS: artigo → recurso nativo em software de composição | 3 anos (2023→2026, medido) | `e2` |
| Drone de consumo → placa de proibição em espaço privado | ~4 anos | `e6` |
| Norma de tolerância em fotogrametria aérea | ~6 anos após o uso se espalhar | `e4.1` |

A única medida com data dos dois lados é a do 3DGS (2023 → Nuke 17 em 2026). As demais são
reconstruções de memória do campo, e por isso **toda confiança que depende só de prazo foi
limitada a média**.

### 12.6 As buscas que não deram em nada

Registro completo, porque ausência de evidência é informação:

1. **"gaussian splatting arXiv papers 2026 number published growth"** — não achei contagem anual.
   O repositório Awesome3DGS lista aceitos em WACV, IEEE VR, VISAPP e ICASSP 2026, mas não totaliza.
   **Consequência:** o mapa não tem indicador de volume de pesquisa, e o número de 1.692 artigos em
   2025 que eu reconhecia foi removido (§8 item 4).
2. **"Scaniverse Polycam downloads millions 3D scans 2026"** — achei "100.000+" numa loja e
   "milhões" no blog do fabricante. **Consequência:** §3.4 termina sem número de adoção.
3. **"reality capture market size 2026"** — achei US$ 7,8 bi (2026) e US$ 3,8 bi (2025) → US$ 11,2
   bi (2034), ambos em páginas de venda de relatório. **Não abri nenhum relatório.**
   **Consequência:** citados como ordem de grandeza declarada, não como evidência.
4. **"3D scanning privacy law building facade capture lawsuit 2026"** — **não achei nenhum caso de
   captura volumétrica de espaço**. Todo o litígio disponível é biométrico-facial (Clearview, Nest).
   **Consequência:** `e8` é derivado por extensão de estatuto existente, não por caso — e é por isso
   que o sinal é médio e não forte.
5. **"LGPD captura 3D espaço privado consentimento Brasil 2026"** — achei doutrina sobre imagem e
   sobre "expectativa razoável de privacidade", **nenhuma menção a captura volumétrica**, nenhum
   posicionamento da ANPD. **Consequência:** `e8.2` está com sinal fraco e confiança baixa, e é o
   efeito brasileiro mais especulativo do mapa.
6. **"museu acervo digitalização 3D Brasil 2026"** — achei Ipiranga (2019–2021), Museu Nacional
   (pós-2018, recuperação por impressão 3D a partir de inventário anterior) e #ConectaMuN (exposição
   entre 20/06 e 19/07/2026). **Nenhum projeto brasileiro de captura neural.** O Brasil aparece no
   mapa como quem tem o problema de custo, não como quem tem o projeto.
7. **"Meta Hyperscape 2026 consumer capture rollout"** — a busca não retornou nada novo sobre
   estado atual. **Consequência:** a captura de sala por headset, que num mapa anterior era peça
   central, **não entrou nesta rodada** — não consegui verificar o estado de 2026.
8. **`radiancefields.com/4d-gaussian-splatting` e a página da chamada do MPEG** — as duas
   devolveram só metadado, sem corpo de artigo. **Consequência:** o prazo de 15/10/2026 para
   material de teste, os requisitos técnicos e a alegada cessão de direito para treino de modelos
   **não entraram no documento**, e `e13` foi reescrito para não depender deles. Ver §8 item 1.
9. **`geekwire.com` sobre a plataforma global de mapeamento da Niantic Spatial** — HTTP 403.
   **Consequência:** os 30 bilhões de imagens posadas e os 10 milhões de locais varridos **não
   entraram** como evidência, embora apareçam em resultado de busca. Ver §8 item 5.
10. **"Unreal Engine native gaussian splat support 2026"** — a informação disponível é de fontes
    secundárias (blogs de estúdio e de fornecedor), não da Epic. **Consequência:** a afirmação de
    que a 5.7 não tem suporte de primeira parte está sustentada por fonte secundária, e por isso
    `e3` ficou com sinal médio e não forte.
11. **"C2PA 3D capture authenticity spatial data"** — achei C2PA 2.4 (21/04/2026), JPEG Trust
    segunda edição alinhada à C2PA 2.3, Canon e Sony assinando foto. **Nenhuma iniciativa para
    cena 3D.** **Consequência:** `e11` é inferência de extensão, com sinal fraco — e é justamente o
    buraco que o cenário desejável da §9 pede para fechar.
12. **Eixo ecológico** — buscas sobre consumo energético de treino e serviço de modelo de mundo
    contra emissão evitada por dispensa de viagem: nada com número comparável dos dois lados.
    **Consequência:** eixo declarado vazio.

### 12.7 Números que circulam e que eu decidi NÃO usar

- 1.692 artigos de 3DGS no arXiv em 2025 — reconheço, não reabri (§8.4).
- 30 bilhões de imagens posadas / 10 milhões de locais na Niantic — página bloqueada (§8.5).
- 100.000+ downloads do Scaniverse — contradiz a outra alegação do próprio fabricante (§8.3).
- US$ 7,8 bi / US$ 3,8 bi / US$ 11,2 bi de mercado — relatórios não abertos (§3.4).
- 12.100 buscas mensais por serviço de splatting — número de marketing de quem vende o serviço.
- "aproximadamente 47% dos erros médios abaixo de 20 mm e 80% abaixo de 30 mm" em captura sem
  marcador — apareceu em resultado de busca sem que eu identificasse o estudo de origem; usei em
  vez dele o PMC12416023, que abri e cujo método e amostra conheço.
- visionOS 26 lançado em 15/09/2025 com geração de profundidade em foto 2D — não abri a fonte.

### 12.8 O que eu faria diferente com mais uma hora

1. Abrir pelo menos um **termo de uso** de plataforma de captura (Scaniverse, Polycam, Luma) e ler
   a cláusula de licença sobre o conteúdo enviado. É o item que mais mudaria `e13`, que hoje é o
   efeito mais forte do mapa com a base mais fraca.
2. Achar o estudo de origem do erro de 7,82 cm, ou substituí-lo por um artigo revisado que compare
   splat contra estação total. `e4` inteiro depende disso.
3. Procurar decisão da ANPD, do CNJ ou do STJ que mencione captura tridimensional de espaço — não
   achei em português, e a ausência pode ser da minha busca, não do mundo.
4. Verificar diretamente na documentação da Epic se a Unreal 5.7 tem ou não suporte nativo, em vez
   de confiar em três blogs concordantes.
5. Levantar o que existe de captura neural aplicada a **favela, periferia e patrimônio informal** —
   o cenário indesejável da §9 depende da hipótese de que o que não foi capturado não será
   representado, e eu não testei essa hipótese contra nenhum projeto real de mapeamento
   comunitário brasileiro.

### 12.9 Fronteira com os temas vizinhos, como eu a tracei

- **Tema 9 (agentes corporificados)** — o robô que aprende em mundo capturado ou simulado. Aparece
  aqui só como demanda: a Niantic diz "mapear o mundo para as máquinas" e a World Labs cita
  robótica entre os parceiros. **Não derivei nenhum efeito sobre robótica**; é o objeto do tema 9.
- **Tema 11 (visão de vocabulário aberto)** — segmentar e nomear o que está na cena. É pré-condição
  técnica de `e8.1` (remover pessoas automaticamente) e eu a uso sem desenvolvê-la.
- **Tema 12 (mídia sintética controlável)** — geração de vídeo e imagem. R3 encosta, mas o objeto
  aqui é a cena 3D navegável, não o quadro.
- **Tema 14 (gerar geradores)** — é para onde aponta o sinal fraco SF1 (reconstrução como programa).
- **Tema 15 (navegador como console 3D)** — é o canal de distribuição de quase tudo neste mapa
  (WebGPU, visualizador web, 3D Tiles em CesiumJS), e é por isso que ele aparece como habilitador
  e nunca como raiz.

### 12.10 Nota de método sobre a regra de parada

Apliquei a regra de parada (derivar o próximo nível só enquanto houver troca de ator ou de
mecanismo) e ela **cortou** a derivação em oito ramos, que ficariam artificialmente com três
níveis. Os casos:

- `e5.1.1`, `e8.2.1`, `e11.2`, `e12.1`, `e16.2`, `e17.1` são finais de ramo — o filho seguinte
  seria o pai amadurecido, não outro efeito.
- `e6.1.1`, `e7.1.1`, `e9.1.1` chegam ao nível 3 e param ali porque o passo seguinte sairia do
  horizonte e do escopo (viraria discussão sobre propriedade do espaço em geral, que não deriva
  desta raiz em particular).

Por isso o mapa tem 16 efeitos de terceira ordem e não 20: nem todo ramo merecia neto, e forçar
simetria teria produzido exatamente o efeito genérico que o método recusa.
