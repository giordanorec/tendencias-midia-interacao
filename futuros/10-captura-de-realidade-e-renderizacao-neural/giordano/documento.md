---
tema: "Captura de realidade e renderização neural"
slug: captura-de-realidade-e-renderizacao-neural
autor_login: grec
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 17
efeitos_ordem_2: 30
efeitos_ordem_3: 19
tecnologias_citadas: [3D Gaussian Splatting, NeRF, 4D Gaussian Splatting, KHR_gaussian_splatting, SPZ, L-GSC, glTF 2.0, MPEG Gaussian Splat Coding, V-PCC, G-PCC, OGC 3D Tiles, OpenUSD Particle Fields, COLMAP, PostShot, Babylon.js, VRChat, OctaneRender 2026, Nuke 17.0, WebGPU, Marble, World API, Chisel, Hyperscape Capture, Horizon Engine, Matterport, SkyTours, Matterport 3D Exteriors, FlyAround, ArcGIS Pro, ArcGIS Reality, Autodesk ReCap, Revit, Civil 3D, InfraWorks, Autodesk Construction Cloud, iTwin, Cesium, DJI Terra, Pix4D, XGRIDS PortalCam, Trimble X12, Hunyuan3D 2.1, Hunyuan3D-DiT, Hunyuan3D-Paint, Azure Kinect, OpenSim, OptiTrack Prime 13W, Large Geospatial Model, Niantic VPS, Localize, Galaxy XR, Android XR, visionOS 26, iOS 26 Spatial Scenes, Apple Personas, Spatial Photos, Deis, NEXIA VIDEO, 4DV.ai, GeoSampa, Rio Verde 360]
fontes: 21
confianca: media
experimento: "A sala que mente — a mesma sala em três versões (capturada por celular, reconstruída de uma foto só, gerada por texto) no mesmo viewer web, e a turma tentando dizer qual delas existiu"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A captura de realidade deixou de ser um problema de pesquisa e virou um problema de formato,
de contrato e de posse. Em 2025 saíram 1.692 artigos de Gaussian splatting só no arXiv; em
fevereiro de 2026 o Khronos publicou o candidato a versão final da extensão
`KHR_gaussian_splatting` para o glTF, com ratificação prevista para o segundo trimestre, e o
MPEG abriu chamada de material dinâmico — pedindo explicitamente captura de pessoa e de
espetáculo — com prazo em 15 de outubro de 2026. No mesmo intervalo o splat entrou na
ferramenta de quem trabalha: ArcGIS Pro, ReCap, Revit, iTwin, DJI Terra, Nuke 17, Zillow
SkyTour, e um headset de consumo que digitaliza a sala de estar em cinco a dez minutos de
caminhada mais uma a oito horas de servidor. O que este mapa argumenta é que a ruptura não
está na qualidade da imagem, e sim em quatro deslocamentos com dono: **o ativo 3D passa de
modelado a amostrado**; **o espaço privado passa a ser capturável por qualquer um, sem
porteiro**; **o corpo em movimento vira ativo de quatro dimensões, e filmar passa a produzir
geometria**; e **o território capturado vira camada georreferenciada de uso comum**. Atravessa
os quatro uma mesma fratura, que é o achado do mapa: a captura neural produz algo que **parece
medido e não é** — o erro geométrico médio relatado para splat fica na casa dos centímetros,
contra 2,2 mm de um scanner de referência —, e é exatamente essa diferença entre parecer e
medir que vai ser disputada em contrato, em perícia, em lei de biometria e em política de
dado até 2031. Para quem projeta mídia e interação, a consequência prática é que a pergunta
deixa de ser "como eu faço este modelo" e passa a ser "quem autorizou esta cópia, o que nela é
dado e o que nela é invenção do modelo, e quem responde pela diferença".

## 2. O tema

**O objeto.** Transformar realidade em ativo 3D. Não a renderização de um mundo autorado, e
não a geração de um mundo inteiro do zero — o recorte aqui é o movimento que parte de um
sensor comum (câmera de celular, headset, drone) e chega num objeto navegável: campo de
radiância, splat gaussiano, malha reconstruída, esqueleto animado. Inclui o caso-limite em que
o sensor entrega tão pouco (uma foto só) que a reconstrução vira, na prática, geração.

**Onde encosta em mídia e interação.** Em três lugares, e não são os óbvios. Primeiro, no
**pipeline**: o ofício de fazer 3D — modelar, abrir UV, texturizar, otimizar — foi construído
sobre a premissa de que o ativo nasce de uma decisão humana ponto a ponto, e a captura desloca
essa premissa para amostragem. Segundo, na **distribuição**: o 3D nunca teve o equivalente do
JPEG ou do H.264, e é isso que o Khronos e o MPEG estão tentando resolver agora, ao mesmo
tempo; quando existir, 3D vira anexo, e anexo muda o que se pode publicar. Terceiro, no
**consentimento**: fotografar e filmar têm cem anos de regra social e jurídica; capturar em
três dimensões não tem nenhuma, e a diferença não é de grau — um splat de um rosto é
literalmente uma varredura da geometria facial, categoria que já existe em lei.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Um levantamento
responderia "quais ferramentas capturam" — e a resposta já é longa e vai envelhecer em seis
meses. O que ele não responde é a cadeia: se capturar fica trivial, quem perde o controle do
que era seu; se o formato abre, quem lucra com o codec; se a performance vira volume, quem
enquadra a cena; se o mundo inteiro está capturado, qual é a diferença entre mapa e cópia e
quem é dono dela. Essas perguntas têm consequência em cascata e prazos diferentes — é o
formato de uma roda dos futuros, não o de uma tabela comparativa.

**O recorte deste mapa.** Global, com uma nota sobre o Brasil na seção 3 e um ramo inteiro
(`e9`) dedicado a onde a tecnologia entra no país. O público é quem projeta mídia e interação,
então "efeito relevante" aqui é o que muda o que essa pessoa desenha, captura, contrata, mede
ou assina.

**Premissas assumidas.** O `briefing:` veio completo — modo, tema, horizonte, público,
recorte, descartado, viés, falseador — e por isso não há rebaixamento de confiança por
entrevista pulada (§0 da skill). O que o briefing não cobria, e que eu assumi, está declarado
aqui em vez de escondido:

- Assumi que **"o que já é comum em produto de massa" é a única exclusão**, e apliquei-a
  literalmente: o que está embarcado em iPhone e em headset de consumo desde 2025 é tratado
  como contexto, não como raiz (ver §4, recusas).
- Assumi que **geração de mundo inteiramente sintético é vizinho, não conteúdo**: o Marble e o
  Genie entram onde encostam na captura (reconstrução a partir de imagem, exportação em splat),
  não como objeto do mapa. O mundo gerado para treinar máquina é o tema 9.
- Assumi que **distribuição de 3D e XR pelo navegador é o tema 15**, e que aqui ela entra só
  como mecanismo de um efeito (`e3`), não como ramo próprio.
- Assumi **data de corte de pesquisa em 11/09/2026**. Nada posterior entra.
- Assumi que **"Brasil" significa onde a tecnologia encontra contrato e orçamento já
  existentes**, não onde há pesquisa — daí o ramo entrar por infraestrutura e canteiro.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 11/09/2026: vinte e uma fontes abertas e lidas, listadas
na seção 11. Nenhum rebaixamento por falta de busca.

### 3.1 O que já existe e funciona

**A técnica virou literatura de massa.** O 3D Gaussian Splatting (Kerbl et al., SIGGRAPH 2023)
substituiu a representação implícita do NeRF por milhões de gaussianas explícitas e aprendíveis,
e é essa explicitação — não a qualidade da imagem — que dá tempo real e editabilidade; a survey
de referência (arXiv 2401.03890, submetida em 08/01/2024, nona revisão em 09/04/2026, aceita na
ACM Computing Surveys) organiza o campo em torno disso. O volume é o dado que mais impressiona:
**1.692 artigos de Gaussian splatting no arXiv só em 2025**, segundo o balanço anual do Radiance
Fields.

**O padrão de entrega está sendo escrito agora, e em dois lugares ao mesmo tempo.** Em **3 de
fevereiro de 2026** o Khronos anunciou o candidato a versão final da extensão
`KHR_gaussian_splatting` para o glTF 2.0, com **ratificação prevista para o segundo trimestre de
2026**, acompanhada de extensões de compressão — o **SPZ**, da Niantic Spatial, e o **L-GSC**, da
Qualcomm. O grupo de trabalho reúne Autodesk, Cesium/Bentley Systems, Esri, Huawei, Niantic
Spatial, NVIDIA e XGRIDS, além da Alliance for OpenUSD, da Academy Software Foundation e da UHD
World Association. Em paralelo, o **MPEG** conduz o *Gaussian Splat Coding* (GSC) numa estratégia
de duas camadas: um caminho de curto prazo dentro dos arcabouços de nuvem de pontos já
existentes — a emenda V-PCC chegou a *Committee Draft Amendment* e a G-PCC a *Working Draft* na
reunião 153 — e um caminho de exploração conjunta para versões futuras. E o MPEG **abriu chamada
de material de teste dinâmico**, com prioridade para "capturas 6DoF centradas em objeto, uma
pessoa ou um objeto não rígido" e "cenas dinâmicas 6DoF como um evento esportivo ou uma
apresentação de palco", exigindo calibração COLMAP, 25 ou 30 fps e ao menos cinco segundos sem
corte — **prazo em 15 de outubro de 2026**.

**A captura entrou na ferramenta de quem trabalha.** Em 2025 e 2026 passaram a suportar splats:
**Esri** (ArcGIS Pro 2.6), **Autodesk** (ReCap, Revit, Civil 3D, InfraWorks, Construction Cloud),
**Bentley Systems** (iTwin), **DJI** (Terra), **Pix4D** (georreferenciamento), 3DVista, Skyline,
NUBIGON, **Babylon.js** 8.0, **PostShot** 1.0, **VRChat** e o **OctaneRender 2026**, este último
com splats em *path tracing* completo. No mercado imobiliário, a **Zillow** foi a primeira grande
empresa do setor a embarcar splats, no SkyTours; a **Apartments.com** (CoStar) adicionou splats
de exterior via Matterport 3D Exteriors; o **Realtor.com** lançou o FlyAround em outubro de 2025.
Na Intergeo 2025, **vinte empresas de escaneamento por SLAM** mostraram suporte. A **XGRIDS**
lançou a PortalCam a **US$ 5.000**.

**O headset de consumo digitaliza a sala.** O **Hyperscape Capture**, anunciado pela Meta em
**17 de setembro de 2025** junto com o Horizon Engine, roda em Quest 3 e 3S sem PC: cerca de
**30 segundos** girando a cabeça para a malha grosseira, **5 a 10 minutos** andando pela sala
para o detalhe, e **1 a 8 horas** de processamento em servidor, conforme o tamanho do espaço.
O resultado é transmitido da nuvem (tecnologia interna "Avalanche") — **o usuário não recebe o
arquivo bruto**, e no lançamento o compartilhamento estava desligado. A análise técnica registra
distorção visível em texto pequeno e "distorção significativa debaixo dos móveis, em áreas que o
headset nunca viu durante a varredura".

**A performance humana virou volume, e já saiu do laboratório.** *Superman* foi o primeiro longa
a usar splats gaussianos dinâmicos em produção, com VFX da Framestore; a Volinga registra o uso
de ferramentas 3DGS em Houdini nesse pipeline e o suporte nativo a 3DGS anunciado para o **Nuke
17.0**. Em **27 de abril de 2026**, a DNE e a Gracia publicaram o que descrevem como a primeira
performance musical transmitida em tempo real em 4DGS — quatro minutos, artista Amy May, direção
de Ed Fraiman, palco volumétrico próprio em Los Angeles, transmissão por **WebGPU** a **17–75
Mbps**, tocável em desktop, celular e Quest 3, **sem aplicativo**, com **1,5 milhão de
visualizações no fim de semana de estreia**. A NEXIA lançou serviço comercial de 4DGS para
palco e esporte; a 4DV.ai mostrou na NAB 2026 um rig de 60 câmeras.

**Mapa e localização já são splat em produto.** Em **22 de outubro de 2025**, Samsung e Google
anunciaram que o **Galaxy XR** (US$ 1.799, Android XR) renderiza em tempo real, **no próprio
aparelho**, as capturas de interior do Google Maps Immersive View como splats navegáveis — não
mais sobrevoos pré-renderizados —, cobrindo **mais de mil locais só em Manhattan**. A Niantic
Spatial descreve seu *Large Geospatial Model* como treinado sobre **mais de 30 bilhões de
imagens posadas**, e o posiciona como a camada de "verdade de campo" georreferenciada, ao lado
dos LLMs e dos modelos de mundo, sustentando o produto de localização visual (Localize) onde o
GPS falha.

**Reconstruir a partir de pouquíssima imagem já é produto.** O **Hunyuan3D 2.1** (arXiv
2506.15442, 18/06/2025) gera ativo texturizado de alta resolução a partir de imagem, com módulo
de forma (Hunyuan3D-DiT) e de textura (Hunyuan3D-Paint) e material PBR pronto para produção,
com repositório público. Do lado do consumo, o **visionOS 26 / iOS 26** transforma qualquer foto
plana em *spatial scene* com profundidade generativa, e a Apple confirmou que **Personas e
Spatial Photos usam Gaussian splatting**.

**O mundo gerado exporta no mesmo formato do mundo capturado.** O **Marble**, da World Labs,
ficou geralmente disponível em **12 de novembro de 2025**: aceita texto, uma imagem, várias
imagens, vídeo ou um layout 3D grosseiro (ferramenta Chisel) e devolve **splats gaussianos**,
malha de colisão e malha visual, além de vídeo com controle de câmera; a exportação é `.spz` ou
`.ply`, em faixas de cerca de 2 milhões ou 500 mil splats, e o World API saiu em janeiro de 2026.
Isto importa para este mapa por um motivo específico: **capturado e gerado chegam ao pipeline no
mesmo contêiner**, indistinguíveis pelo formato.

### 3.2 O que existe e ainda não funciona

**O splat parece medido e não é.** O levantamento de estado da técnica de 2026 reporta **erro
geométrico médio de 7,82 cm** para splats, contra **2,2 mm a 20 metros** de um scanner terrestre
de referência (Trimble X12) — adequado para visualizar, inadequado para engenharia. É a fratura
central deste mapa, e a fonte é comercial: registro a ressalva na seção 8.

**Reflexo, transparência e reiluminação continuam abertos.** A literatura de 2025–2026 trata
objetos reflexivos como desafio não resolvido em renderização inversa e relighting. Na prática,
é por isso que o Marble exporta malha de colisão e malha visual junto com o splat: o splat sozinho
não é governável no motor.

**Captura de movimento por uma câmera só tem erro grande e conhecido.** Um estudo publicado em
**05/09/2025** comparou Azure Kinect com cinemática inversa no OpenSim contra um sistema OptiTrack
Prime 13W de 10 câmeras a 120 Hz, com 12 adultos saudáveis de 22 a 33 anos: RMSE de **8,5°** na
elevação de ombro no plano sagital, **13,8°** na flexo-extensão de cotovelo, e **22,4°** na
rotação de ombro. Autoclusão e movimento multiplanar degradam muito; rastreamento de polegar não
permite medir prono-supinação do antebraço. Serve para triagem e retorno visual; não serve como
medida clínica.

**O 4D ainda pede palco.** A captura volumétrica de performance de qualidade de cinema usa rig
esférico de dezenas a centenas de câmeras sincronizadas; o codec padrão para esse conteúdo não
existe — a chamada do MPEG de outubro de 2026 é justamente o passo anterior a ele.

**Arquivar splat não está resolvido.** Nenhum dos padrões em curso é formato de preservação de
longo prazo; a comparação entre fotogrametria, NeRF e 3DGS em patrimônio (Carmeliti & Marziali,
ISPRS, 12/02/2026) conclui por **complementaridade e não substituição**: a fotogrametria segue
padrão em restauro pela textura confiável, e o neural entra onde ela falha — superfície
reflexiva, transparente ou sem textura.

### 3.3 Quem constrói

Cinco blocos, com incentivos diferentes: **plataformas de headset e celular** (Meta, Apple,
Samsung/Google), que capturam e ficam com o arquivo; **geoespaciais e AEC** (Esri, Autodesk,
Bentley/Cesium, DJI, Pix4D, XGRIDS, Trimble), que precisam do splat compatível com o que já
medem; **ferramentas abertas e de web** (Babylon.js, PostShot, VRChat, e a
comunidade de pesquisa no arXiv e no GitHub); **captura de pessoa e produção** (Framestore,
Infinite Realities, DNE/Gracia, NEXIA, 4DV.ai, Move.ai); e **os detentores do índice do mundo**
(Niantic Spatial, Google, Apple), cujo ativo é a coleção posada, não o algoritmo.

### 3.4 Números de adoção

- **1.692** artigos de Gaussian splatting no arXiv em 2025 (Radiance Fields).
- **Mais de mil** locais de interior só em Manhattan já navegáveis como splat em tempo real no
  Galaxy XR (Samsung/Google, 22/10/2025).
- **Mais de 30 bilhões** de imagens posadas no treino do Large Geospatial Model (Niantic Spatial).
- **1,5 milhão** de visualizações no fim de semana de estreia do primeiro clipe 4DGS em
  navegador (DNE/Gracia, 27/04/2026).
- **Vinte** empresas de escaneamento SLAM com suporte a splat na Intergeo 2025.
- Comparação de escala do que veio antes: a Matterport, que representa o paradigma anterior
  (câmera proprietária, tour por teletransporte), saiu de ~13 mil assinantes em 2018 para mais de
  **1 milhão** em 2024, com **14,1 milhões** de espaços e **50,7 bilhões** de pés quadrados sob
  gestão, e foi comprada pela CoStar por **US$ 1,6 bilhão** em fevereiro de 2025. Esses números
  vêm de um post comercial que os atribui a relatórios da própria Matterport; uso-os como ordem
  de grandeza do paradigma maduro, não como medida do emergente.
- **Sem número encontrado** para: quantidade de splats publicados no mundo, usuários ativos do
  Hyperscape Capture, ou participação de splat no total de ativos 3D entregues em produção.

### 3.5 Nota sobre o Brasil

No Brasil a captura 3D chega antes pela infraestrutura do que pela mídia, porque é lá que já
existem drone, LiDAR, contrato e orçamento: gêmeos digitais urbanos em São Paulo (sobre a base
do GeoSampa) e Curitiba, a plataforma Rio Verde 360° em Rio Verde (GO) lançada em 2026, e
sobrevoo semanal de canteiro com nuvem de pontos sobreposta ao modelo BIM para medir avanço
físico de obra. Na pesquisa, há revisão sistemática de técnicas de renderização de nuvem de
pontos incluindo NeRF e splatting na UFC campus Russas (2026). Do lado regulatório, o que existe
não é regra sobre captura 3D, e sim o precedente mais próximo: a **ANPD** abriu tomada de
subsídios sobre tratamento de **dados biométricos** de **02/06/2025 a 01/08/2025** na plataforma
Participa + Brasil, encerrada, e a regulamentação específica ainda não saiu. Isto é: o país tem
captura acontecendo e não tem regra sobre ela.

## 4. As disrupções-raiz

### 4.0 As recusas (candidatos que não entram como raiz)

- **Candidato recusado: fotogrametria clássica, Matterport e escaneamento a laser.** Adoção em
  maioria no seu nicho desde ~2020 (mais de 1 milhão de assinantes, 14,1 milhões de espaços,
  aquisição de US$ 1,6 bilhão); é caro e maduro. Tratado como contexto na seção 3 e como classe
  de referência de velocidade de adoção.
- **Candidato recusado: paralaxe generativa a partir de uma foto no aparelho.** As *spatial
  scenes* do iOS 26 / visionOS 26 estão embarcadas em produto de massa desde setembro de 2025.
  Pela régua da disciplina — "se dá para fazer com o que já é comum em produto de massa, é
  maduro" —, isso não é raiz. Entra como contexto e como efeito (`e4`), porque o que ainda rompe
  não é a paralaxe, é a reconstrução de um **ativo** a partir de uma imagem só.
- **A ruptura anunciada pelo enunciado do tema foi testada, não assumida.** O enunciado propõe como
  disrupção-raiz que "o pipeline de criação 3D colapsa em captura". Submetida aos quatro testes do
  §2, ela passa em parte e falha em parte, e o mapa registra as duas coisas: passa como `R1`, com o
  recorte de que o que colapsa é a **origem** do ativo e não o pipeline inteiro — `e5` mostra que o
  meio do pipeline continua sendo malha —, e não passa no teste 1 na forma "uma foto vira um objeto
  3D", porque isso já está embarcado em produto de massa. O enunciado é contexto, não fonte, e a
  divergência está aqui por escrito para ser defendida na aula.
- **Candidato recusado: "3D Gaussian Splatting" como tal.** É técnica, e uma raiz não pode ser
  um produto ou um algoritmo — tem de ser a ruptura que ele habilita. O 3DGS aparece como
  pré-condição das quatro raízes abaixo, não como uma delas.

### 4.1 R1 — O ativo 3D deixa de ser modelado e passa a ser amostrado

**O que rompe.** Rompe a cadeia que define o ofício: modelar, abrir UV, texturizar, otimizar. E
rompe dois pressupostos comerciais: que ativo 3D se vende por hora de modelagem, e que ativo 3D é
uma malha. Não é "a mesma coisa mais barata" — o objeto entregue tem outra natureza (amostra
volumétrica, não superfície), e por isso serve para coisas diferentes e falha em coisas
diferentes.

**Por que agora, e não há cinco anos.** Três pré-condições fecharam juntas. O 3DGS (2023) deu
tempo real onde o NeRF (2020) só dava prova de conceito. A captura saiu do tripé e virou
caminhada. E — a peça que faltava e chegou em 2026 — o **formato de entrega**: candidato a versão
final do `KHR_gaussian_splatting` em 03/02/2026, ratificação prevista para o segundo trimestre, e
o MPEG trabalhando o codec. Sem formato, captura é demonstração; com formato, é insumo.

**Onde está na difusão.** Entre **produto de nicho** e **adoção precoce**. Em AEC e imobiliário
há produto embarcado em ferramenta de mercado; em cinema e jogo ainda é exceção nomeada (um
longa, um plugin, um clipe).

**O que ainda falta acontecer.** A ratificação efetiva do glTF; um codec que torne o dinâmico
distribuível; edição, animação e reiluminação de splat maduras; suporte nativo em motor de jogo
sem conversão; e a resolução da questão métrica (§4.4 e `e17`).

**Quem bloqueia, e com que incentivo.** As plataformas que processam a captura na nuvem e não
devolvem o arquivo bruto — o Hyperscape é o caso explícito. O incentivo é direto: se o ativo
capturado for portátil, o valor migra da plataforma para o formato. Efeito gerado: `e2.3`.

### 4.2 R2 — O espaço privado vira dado capturável por qualquer um, sem porteiro

**O que rompe.** Rompe o controle de fato que dono de imóvel, loja, museu, escola e palco tinha
sobre a representação tridimensional do seu espaço — controle que nunca precisou de lei porque
era garantido pelo custo e pela visibilidade do ato de digitalizar. E rompe o pressuposto
jurídico e social de que "imagem de um lugar" é uma superfície plana.

**Por que agora, e não há cinco anos.** Porque o ato deixou de ser visível e deixou de ter
custo: cinco a dez minutos de caminhada com um headset que a pessoa já usa para outra coisa, ou
um aplicativo gratuito e ilimitado no iPhone. Em 2021 isso exigia equipe, equipamento e
autorização — e a autorização era pedida porque o ato era óbvio.

**Onde está na difusão.** **Produto de nicho** caminhando para **adoção precoce** entre quem tem
headset; especulativo no conjunto da população.

**O que ainda falta acontecer.** Um mecanismo operável de consentimento e de remoção; a primeira
decisão judicial sobre uma captura de interior alheio; a queda do custo de processamento (uma a
oito horas de servidor por sala não escala para captura casual); e a devolução do arquivo ao
usuário, que hoje não acontece.

**Quem bloqueia, e com que incentivo.** A própria plataforma de headset, por duas vias opostas:
retém o arquivo (incentivo de lock-in) e, ao mesmo tempo, tem incentivo de risco para limitar a
captura de terceiros — foi ela quem desligou o compartilhamento no lançamento. Efeitos gerados:
`e6.1.1`, `e6.3`.

### 4.3 R3 — O corpo em movimento vira ativo de quatro dimensões, e filmar passa a produzir geometria

**O que rompe.** Rompe o mocap como serviço de estúdio com marcador e volume. E rompe algo mais
fundo: a distinção entre **filmar uma pessoa** e **adquirir um modelo animado dela**. Quando o
subproduto normal de uma filmagem é geometria reutilizável, o consentimento para filmar deixa de
cobrir o que foi produzido, e a cessão de imagem deixa de descrever o objeto cedido.

**Por que agora, e não há cinco anos.** Porque o 4DGS saiu do artigo: um longa em produção, um
serviço comercial de palco e esporte, e um clipe de quatro minutos transmitido em tempo real
**no navegador**, sem aplicativo, a 17–75 Mbps via WebGPU, com 1,5 milhão de visualizações na
estreia. E porque o MPEG está pedindo, agora, material dinâmico de pessoa para escrever o codec.
Em 2021 não havia nem representação em tempo real nem caminho de distribuição.

**Onde está na difusão.** **Demo pública** avançando para **produto de nicho**. Toda a cadeia de
confiança deste ramo herda `confianca` no máximo média por causa disso.

**O que ainda falta acontecer.** Queda brutal do custo do palco volumétrico; um codec padrão
para 4D; e um regime de consentimento que distinga imagem de geometria.

**Quem bloqueia, e com que incentivo.** A legislação biométrica estadual norte-americana, com
incentivo econômico do lado dos autores das ações: um splat de rosto é literalmente uma
"varredura da geometria facial", categoria já prevista na BIPA de Illinois, com exposição de
US$ 1.000 a US$ 5.000 por violação e contagem **por evento de coleta** (*Cothron v. White
Castle*) — a aritmética de uma plataforma de 50 mil usuários com dez sessões cada chega a 500
mil violações. Efeitos gerados: `e12.2`, `e12.2.1`.

### 4.4 R4 — O território capturado vira camada georreferenciada de uso comum

**O que rompe.** Rompe a distinção entre **mapa** (representação simbólica, licenciada, com
convenções) e **cópia** (reconstrução navegável do próprio lugar). Rompe o tour virtual
proprietário, porque o splat sai em formato aberto e roda em qualquer navegador. E rompe a
exclusividade de quem tinha frota de captura: o usuário passa a ser a frota.

**Por que agora, e não há cinco anos.** Porque três coisas coincidiram: renderização em tempo
real **no aparelho** de capturas de interior de mapa comercial (Galaxy XR + Google Maps, outubro
de 2025); um índice posado em escala de dezenas de bilhões de imagens sustentando localização
visual onde o GPS falha; e a entrada do splat nos padrões geoespaciais (glTF, 3D Tiles). O NeRF
não servia: era lento demais para o aparelho e caro demais para atualizar.

**Onde está na difusão.** **Produto de nicho** indo para **adoção precoce** no geoespacial;
especulativo no uso cotidiano.

**O que ainda falta acontecer.** Cobertura; um modelo econômico de **recaptura** (a cópia
envelhece); precisão métrica que hoje não existe; e alguma definição sobre quem é titular da
cópia de um lugar.

**Quem bloqueia, e com que incentivo.** Quem detém o índice visual e o VPS — Niantic Spatial,
Google, Apple. O incentivo é manter a camada fechada e vender **localização** como API, porque o
ativo defensável é a coleção posada, não o renderizador. Efeito gerado: `e15.1`.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ativo 3D deixa de ser modelado e passa a ser amostrado — a captura vira o pipeline
    efeitos:
      - id: e1
        ordem: 1
        efeito: Escritórios de arquitetura, AEC e imobiliário entregam o levantamento como cena capturada navegável em vez de maquete modelada
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O prestador de captura deixa de precisar da câmera proprietária de milhares de dólares e o serviço cai para a faixa de preço do pacote fotográfico
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A rede de parceiros credenciados por fabricante de câmera perde razão de existir e o tour 3D vira commodity de software
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Escritórios passam a entregar dois artefatos do mesmo lugar — a cena capturada para ver e a nuvem medida para cotar
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surge a figura contratual do laudo de proveniência de captura, que declara qual parte do modelo foi medida e qual foi inferida pelo modelo
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Cenário e ambiente em produção audiovisual deixam de ser modelados à mão e passam a ser capturados ou gerados
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A vaga de modelador de ambiente júnior encolhe antes da de sênior, porque o que a captura substitui é a execução e não a decisão
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Estúdios passam a avaliar portfólio de entrada por qualidade de limpeza de captura e direção de câmera, não por topologia de malha
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O não-fotorrealismo vira escolha cara e deliberada, porque o caminho barato passa a entregar fotorrealismo por padrão
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Abre-se um mercado de desfotografar — pipelines que empurram a captura de volta para o estilizado e são vendidos como identidade visual
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.3
            ordem: 2
            efeito: O custo de processamento e de armazenamento concentra a captura em quem tem infraestrutura de nuvem, e a produção pequena fica dependente de plataforma
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e3
        ordem: 1
        efeito: A entrega de 3D na web deixa de exigir visualizador proprietário, porque a cena capturada passa a caber num arquivo glTF comum
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A cena capturada vira anexo corriqueiro de peça de comunicação — catálogo, reportagem, laudo — como o vídeo virou nos anos 2010
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Redações passam a precisar de política editorial para cena capturada, porque o leitor pode olhar para onde o repórter não olhou
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A disputa migra da captura para a compressão, e quem controla o codec controla o custo de distribuir mundo
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e4
        ordem: 1
        efeito: Reconstruir a partir de uma imagem só vira geração e não medição, e o que faltava na foto é inventado pelo modelo com aparência de dado
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Loja de ativos e pipeline de produção passam a exigir declaração de origem do modelo 3D, porque o comprador não distingue capturado de inventado
            sinal: fraco
            prazo: 2029
            confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Perícia, seguradora e projeto executivo recusam reconstrução monocular como prova, e a distinção entre capturado e completado vira cláusula
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O metadado de proveniência — que câmeras viram o quê, quando — passa a valer mais que a geometria e vira o objeto do licenciamento
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A cena capturada resiste a ser editada, animada e reiluminada, e por isso a malha continua indispensável no meio do pipeline
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O ofício que cresce não é o de modelador nem o de capturador, é o de converter captura em ativo governável — retopologia, segmentação e rigging assistidos
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A malha vira o formato de contrato — o que se aprova e se assina — e a cena capturada vira apenas o formato de exibição
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O espaço privado vira dado capturável por qualquer um, em minutos, sem porteiro
    efeitos:
      - id: e6
        ordem: 1
        efeito: Capturar um interior alheio passa a ser trivial e silencioso, e o dono do espaço perde o controle prático sobre quem tem uma cópia dele
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Loja, museu, hospital e estúdio passam a proibir captura 3D onde hoje proíbem fotografia, e descobrem que a regra é inaplicável porque a captura parece o uso normal do aparelho
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O controle migra do ato de capturar para o ato de publicar, e plataformas de hospedagem de cena capturada passam a operar notificação e remoção como as de vídeo
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O interior doméstico vira a matéria-prima mais disputada por quem treina modelo de mundo e robô de casa, e a captura caseira passa a ser coleta de dado remunerada ou embutida
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Abre-se disputa sobre quem é titular do interior capturado — o morador, o proprietário do imóvel ou a plataforma que processou
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.3
            ordem: 2
            efeito: A recusa cultural chega antes da lei, e bar, show e escola passam a pedir o aparelho desligado como pediram com os óculos de câmera na década passada
            sinal: fraco
            prazo: 2028
            confianca: media
      - id: e7
        ordem: 1
        efeito: A locação física para audiovisual encolhe onde a cena pode ser capturada uma vez e reusada indefinidamente
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O contrato de locação passa a separar filmar aqui de capturar aqui, com preço e prazo diferentes, porque a captura não expira
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Proprietários de imóveis icônicos licenciam a cópia digital como ativo separado do imóvel
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Patrimônio e acervo passam a ser capturados por equipes pequenas, e a digitalização deixa de ser projeto de financiamento para virar rotina de manutenção
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A instituição descobre que capturou rápido e não sabe arquivar, porque cena capturada não tem formato de preservação de longo prazo aceito
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O acervo passa a guardar as imagens-fonte e a calibração em vez do modelo reconstruído, porque só elas permitem reconstruir com o método seguinte
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: No Brasil a captura neural entra pela infraestrutura e pelo canteiro antes de entrar pela mídia, porque é ali que já existem drone, LiDAR e contrato
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Prefeituras brasileiras acumulam captura 3D de espaço público sem regra de acesso, e o gêmeo digital municipal vira base de dado sem política de dado
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A ANPD é chamada a se manifestar sobre captura 3D de espaço público, e o precedente que ela usa é a discussão de dados biométricos que abriu em 2025
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O corpo em movimento vira ativo de quatro dimensões, e filmar passa a produzir geometria
    efeitos:
      - id: e10
        ordem: 1
        efeito: A performance humana passa a ser gravada em volume e reenquadrada depois, e a decisão de câmera deixa de ser tomada no set
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Direção de fotografia e montagem passam a disputar uma decisão que antes não existia — quem enquadra uma cena que foi gravada sem enquadramento
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Crédito e remuneração de direção de fotografia passam a ser negociados por cena capturada e não por diária
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O público assiste no navegador sem headset, e o volumétrico deixa de depender de realidade virtual para existir comercialmente
            sinal: medio
            prazo: 2029
            confianca: media
          - id: e10.3
            ordem: 2
            efeito: O custo do palco volumétrico com dezenas a centenas de câmeras sincronizadas mantém a captura 4D dentro do orçamento de grande produção enquanto não houver codec padrão
            sinal: forte
            prazo: 2028
            confianca: media
      - id: e11
        ordem: 1
        efeito: Captura de movimento sem marcador por câmera comum entra em uso corrente fora do estúdio — clínica, esporte, escola — com erro conhecido e declarado
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Rotação e autoclusão continuam ruins, e o uso se estabiliza em triagem e retorno visual em vez de medida clínica
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Mostrar a faixa de erro junto com o número vira praxe de produto de captura de movimento
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: Animação de personagem a partir de vídeo de celular entra no fluxo de produção independente e de conteúdo curto
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e12
        ordem: 1
        efeito: Filmar uma pessoa passa a produzir por padrão um modelo tridimensional reutilizável dela, e o consentimento para filmar deixa de cobrir o que foi produzido
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Contrato de elenco e de figuração ganha cláusula de captura volumétrica separada da cessão de imagem, como já ganhou a de voz sintética
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Sindicatos de atores e de dublagem passam a negociar a geometria do corpo como item de tabela, não como cessão genérica de imagem
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: A legislação biométrica estadual norte-americana morde a captura volumétrica, porque uma cena capturada de um rosto é literalmente uma varredura de geometria facial
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Plataformas passam a processar captura de pessoa fora das jurisdições com lei biométrica, e a geografia do processamento vira decisão de produto
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: O avatar fotorrealista de si mesmo deixa de exigir estúdio, porque a pessoa se captura com o próprio aparelho
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A identidade visual em chamada de vídeo passa a exigir registro de autenticidade, porque parecer com você deixou de provar que é você
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: O território capturado vira camada georreferenciada de uso comum, navegável em escala um para um
    efeitos:
      - id: e14
        ordem: 1
        efeito: Mapas ganham uma camada navegável em primeira pessoa renderizada em tempo real no aparelho, no lugar de fotos costuradas e sobrevoos pré-renderizados
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: O interior comercial vira o metro quadrado mais capturado do mundo, porque é o único cuja captura tem valor de conversão medido
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: O estabelecimento passa a projetar o espaço físico para ficar bem na cena capturada, como já projeta para ficar bem na foto
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: A cópia envelhece e manter a camada atualizada custa mais do que criá-la, o que faz nascer uma economia de recaptura
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: A data da captura vira metadado exibido ao usuário e a defasagem vira reclamação de consumidor
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: Localização por visão passa a competir com GPS onde o GPS falha, e a posição do usuário passa a ser calculada a partir do que ele vê
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Quem detém o índice visual do mundo vende localização como serviço e mantém a camada fechada por incentivo econômico, não por limitação técnica
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Nasce um esforço de cópia aberta do mundo capturado nos moldes do mapa colaborativo, e a disputa passa a ser de licença e não de técnica
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: Robô e drone passam a usar a mesma camada capturada que o aplicativo de mídia, e a fronteira entre mapa de consumo e mapa de máquina desaparece
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e16
        ordem: 1
        efeito: Captura sistemática de espaço público vira questão de política pública antes de virar questão de direito autoral, porque o que incomoda é a vigilância e não a cópia
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Cidades passam a exigir autorização para varredura sistemática de rua como já exigem para filmagem em via pública
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e17
        ordem: 1
        efeito: A precisão da cena capturada não serve para engenharia, e a camada neural fica confinada a ver e a localizar sem substituir o levantamento topográfico
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: Convive-se com dois mundos digitais sobre o mesmo lugar — o bonito e o medido — com donos, formatos e contratos diferentes
            sinal: medio
            prazo: 2029
            confianca: media
```

### O que o bloco não diz — mecanismos, referências e cruzamentos

**Os mecanismos, ramo a ramo.**

`e1` acontece porque o `R1` põe o splat dentro da ferramenta que o escritório já usa (ArcGIS Pro,
ReCap, Revit, iTwin): não é adoção de tecnologia nova, é aparecimento de um botão. `e1.1` decorre
porque, deslocada a captura para caminhada com aparelho comum e formato aberto, o equipamento e a
plataforma deixam de ser barreira de entrada — o comparativo de mercado registra a diferença entre
uma câmera proprietária de ~US$ 6 mil e um celular ou scanner de US$ 1 a 3 mil, com 15 a 25
minutos por residência. `e1.2` decorre de `e1` cruzado com `e17`: a mesma entrega que encanta o
cliente não fecha a cota, e a saída racional é entregar dois artefatos. `e1.2.1` é a formalização
disso em papel.

`e2` decorre de `R1` porque a economia de um cenário capturado uma vez e reusado supera a de um
cenário modelado, e porque a ferramenta de composição passou a aceitar o formato (3DGS nativo
anunciado para o Nuke 17.0; splats em *path tracing* no OctaneRender 2026). `e2.1` decorre de `e2`
porque a captura elimina a **execução** (varrer, limpar, texturizar) e não a **decisão** (o que
filmar, como enquadrar, o que remover) — e é a execução que define a vaga júnior. `e2.2` decorre
de `e2` porque o caminho barato passa a produzir fotorrealismo como estado padrão, invertendo o
custo relativo do estilizado. `e2.3` é a **retroação** deste ramo: uma a oito horas de servidor por
sala é um custo que não some, e ele empurra a captura de volta para quem tem nuvem.

`e3` decorre de `R1` pelo caminho do padrão: um contêiner universal transforma cena capturada em
anexo. `e3.2` decorre de `e3` porque, resolvido o contêiner, o custo marginal passa a ser o codec,
e há duas compressões concorrentes já dentro do glTF (SPZ da Niantic, L-GSC da Qualcomm) além do
trilho do MPEG. `e3.1.1` decorre de `e3.1` por um mecanismo específico de jornalismo: numa foto, o
enquadramento é a edição; numa cena capturada, o leitor escolhe o enquadramento, e o que o repórter
não quis mostrar pode estar lá.

`e4` decorre de `R1` no seu limite: com uma imagem só, a maior parte da geometria não foi
observada, e o que aparece é priori do modelo — o produto entrega isso sem distinguir. `e4.2`
decorre de `e4` porque o primeiro lugar onde a diferença entre observado e inferido tem
consequência com dono é perícia e seguro. `e5` é a **retroação** de `R1` como um todo, e está
ancorada em fato: o Marble exporta malha de colisão e malha visual **junto** com o splat porque o
splat sozinho não é governável no motor; reflexo e reiluminação continuam abertos na literatura.

`e6` decorre de `R2` diretamente: o custo e a visibilidade do ato caíram a zero. `e6.2` decorre de
`e6` cruzado com o apetite por dado de treino — a Niantic é a prova de conceito do mecanismo, com
mais de 30 bilhões de imagens posadas vindas de jogador, e o Hyperscape é a versão de interior,
com a plataforma retendo o arquivo. `e6.3` é a **retroação** de `R2`: a reação social chega antes
da norma. `e9` é o ramo brasileiro, e o mecanismo é econômico, não cultural: a captura entra onde
já há contrato de drone e de BIM.

`e10` decorre de `R3` porque, capturado o volume, o enquadramento deixa de ser um ato de produção e
vira um ato de pós-produção. `e10.3` é a **retroação** de `R3`: 192 câmeras sincronizadas não
cabem em orçamento médio, e sem codec não há distribuição barata. `e11` e `e11.1` decorrem do
mesmo estudo: o erro de 8,5° no plano sagital serve para triagem, o de 22,4° em rotação não serve
para medir. `e12` decorre de `R3` pela via contratual, e `e12.2` é o **bloqueio com dono**.

`e14` e `e15` decorrem de `R4` porque a camada já está em produto (Manhattan, Galaxy XR) e o índice
já está em escala. `e15.1` é o **bloqueio com dono** de `R4`. `e17` é a **retroação** de `R4`, e é
a mesma fratura de `e1.2`: 7,82 cm contra 2,2 mm.

**Classes de referência usadas para os prazos** — cada uma escrita aqui para que se possa
contestar o ano:

| Efeito | Classe de referência | O que ela mede | Prazo derivado |
|---|---|---|---|
| `e3` | glTF 2.0: ratificado em junho de 2017, padrão de fato da web 3D por volta de 2020–21 | 3 a 4 anos entre ratificação e uso corrente | RC em fev/2026, ratificação Q2/2026 → **2029** |
| `e3.2` | HEVC: finalizado em 2013, maioria do streaming por volta de 2019–20 | 6 a 7 anos entre codec pronto e maioria | CfP do GSC ainda por abrir → efeito visível **2030**, maioria fora da janela |
| `e1.1`, `e6.2` | Matterport: ~13 mil assinantes em 2018 → mais de 1 milhão em 2024 | ~6 anos para escalar captura por prestador | **2028–2029** |
| `e10.2`, `e13` | VR de consumo: mais de dez anos sem chegar a 10% de adoção | o headset não é o caminho | efeitos condicionados ao **navegador**, e rebaixados |
| `e6.3` | Óculos com câmera embutida, 2013–2015: ~2 anos entre lançamento e proibição em bares | velocidade da recusa cultural | **2028** |
| `e6.1.1` | DMCA/Content ID: ~8 anos entre a plataforma de vídeo e o regime maduro de remoção | velocidade de um regime de notificação | **2032**, fora do horizonte |
| `e12.2`, `e16` | BIPA: lei de 2008, onda de litígio de massa em 2017–19 | ~9 a 10 anos entre norma e efeito prático | **2029–2030** |
| `e9`, `e1` | Drone e fotogrametria em AEC, 2012→2018 | ~6 anos até virar corriqueiro no canteiro | **2027–2028** |

**Efeitos de terceira ordem fora da janela do mapa.** Dois passam de 2031 e ficam declarados como
tal: `e6.1.1` (2032) e `e15.1.1` (2033). Ambos dependem de um regime institucional se formar, e a
classe de referência de formação de regime (DMCA, BIPA) não cabe em cinco anos. Estão no mapa
porque sem eles a cadeia fica truncada, não porque eu espere vê-los no horizonte.

**Cobertura STEEP.** *Social*: `e6.3`, `e12`, `e13.1`, `e14.1.1`. *Tecnológico*: `e3`, `e3.2`,
`e5`, `e11.1`, `e17`. *Econômico*: `e1.1`, `e2.1`, `e7`, `e14.2`, `e15.1`. *Político*: `e9.1`,
`e12.2`, `e16`, `e16.1`. *Ecológico*: **ficou vazia**, e registro em vez de forçar — o consumo
energético do processamento (1 a 8 horas de servidor por sala) é real e aparece em `e2.3` como
custo econômico, mas não encontrei número que sustentasse um efeito ambiental específico, e
inventá-lo seria o tipo de linha que serve para qualquer tema.

**Quem perde.** Modelador de ambiente júnior (`e2.1`); rede de parceiros credenciados por
fabricante de câmera (`e1.1.1`); locadora de locação física (`e7`); estúdio de mocap com marcador
(`R3`); o dono de espaço privado, que perde controle sem ganhar remédio (`e6`); a instituição de
patrimônio, que ganha velocidade e perde capacidade de arquivar (`e8.1`); e o cidadão cujo
interior vira dado de treino sem que ninguém tenha perguntado (`e6.2`).

**Convergência (o achado mais valioso).** `e6.2` (o interior doméstico vira matéria-prima de
treino) e `e15.2` (robô e drone usam a mesma camada capturada do aplicativo de mídia) saem de
raízes **diferentes** — `R2`, que é sobre espaço privado, e `R4`, que é sobre território — e
chegam ao mesmo lugar: **a captura feita para mídia e a captura feita para máquina são o mesmo
dado, no mesmo formato, na mesma nuvem.** Quem projeta uma experiência de captura está, sem
decidir isso, produzindo corpus de treino para agente físico. É a fronteira exata com o tema 9,
e é uma fronteira que não existe no dado — existe só na intenção de quem captura.

**Segunda convergência.** `e1.2` (dois artefatos por levantamento) e `e17.1` (dois mundos digitais
sobre o mesmo lugar) vêm de `R1` e de `R4` e descrevem a mesma bifurcação em escalas diferentes: o
bonito e o medido não convergem, e cada um vai ter dono, formato e contrato próprios.

**Retroalimentação.** `e6.2` fecha um ciclo positivo sobre `R2`: quanto mais interiores
capturados, melhores os modelos de reconstrução; quanto melhores os modelos, menos imagens são
necessárias; quanto menos imagens, mais fácil capturar — e mais interiores são capturados. O ciclo
tem dono (a plataforma que processa e retém), o que significa que ele acelera a raiz **e**
concentra o resultado. É o mesmo mecanismo que a Niantic descreve ao chamar 30 bilhões de imagens
posadas de "corpus extraordinário".

**Contradição 1, não resolvida.** `e3` e `e3.1` dizem que o formato abre e a cena vira anexo
portátil. `e2.3` e `e6` dizem que o processamento é da plataforma e o arquivo bruto não é
devolvido. As duas coisas são verdadeiras hoje, e não podem continuar sendo. **O que decide:** se
a reconstrução passar a rodar no aparelho, `e3` vence; se continuar exigindo horas de servidor,
`e2.3` vence e o formato aberto vira fachada — um padrão que descreve um arquivo ao qual o usuário
não tem acesso.

**Contradição 2, não resolvida.** `e12.2` (a lei biométrica morde a captura de pessoa) e `e13`
(todo mundo se captura com o próprio aparelho) não coexistem na mesma jurisdição. **O que decide:**
se a varredura de geometria facial que **não identifica** ninguém conta como identificador
biométrico. Há litígio corrente sobre exatamente isso; não consegui abrir a fonte primária (a
página retornou 403) e por isso não apoio nenhum dos lados neste mapa — registro a pergunta na
seção 8 e no anexo.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. A cena capturada deixa de ser um arquivo e vira cidadã do grafo de cena.** A Alliance for
OpenUSD trabalha um esquema de *particle fields* em que a primitiva gaussiana coexiste com malha e
nuvem de pontos **dentro da mesma cena**, em vez de ser importada como objeto estrangeiro.
*Onde foi visto:* no levantamento de padrões de 2026 (fonte 4). *O que mudaria:* enquanto o splat
for arquivo, ele é anexo; quando for primitiva de cena, ele entra na hierarquia, recebe
transformação, material e animação como qualquer outro objeto — e `e5` (a malha como formato de
contrato) perde a sua razão principal de ser. *Sinal observável:* um programa de autoria
comercial passar a tratar splat como primitiva nativa do grafo de cena, e não como importação.

**2. A guerra de compressão dentro do padrão.** O glTF chega com **duas** compressões candidatas
de origens comerciais distintas — SPZ (Niantic Spatial) e L-GSC (Qualcomm). *O que mudaria:* se
divergirem, `e3` adia e a portabilidade prometida não se realiza. *Sinal observável:* qual das
duas é implementada primeiro em navegador e em motor de jogo; e se a ratificação prevista para o
segundo trimestre de 2026 escorrega.

**3. Splat em render offline com path tracing.** O OctaneRender 2026 traz splats em *path tracing*
completo. *O que mudaria:* se o splat entrar no render offline de qualidade final, ele deixa de ser
formato de visualização e vira ativo de produção — e `e5` (a malha indispensável) enfraquece.
*Sinal observável:* suporte nativo em Arnold, RenderMan ou Cycles.

**4. O MPEG pedindo gente.** A chamada de material dinâmico prioriza explicitamente "uma pessoa ou
um objeto não rígido" e "uma apresentação de palco", e exige que quem contribui ceda direito de
usar o material inclusive **para treinar modelos de IA**. *O que mudaria:* o corpo humano em
movimento vira conjunto de teste padronizado, o que acelera `R3` e antecipa `e12`. *Sinal
observável:* a Call for Proposals formal sair com categoria separada para captura humana.

**5. A recaptura como assinatura.** Ninguém vende ainda atualização periódica de cena capturada.
*O que mudaria:* `e14.2` deixa de ser inferência e vira mercado. *Sinal observável:* a primeira
oferta comercial de "seu espaço recapturado a cada N meses" por preço recorrente.

**6. O headset como sensor de captura contínua.** Hoje a captura é um modo que a pessoa liga.
*O que mudaria:* se virar passiva, `R2` deixa de depender da intenção do usuário e `e6.3` (recusa
cultural) antecipa vários anos. *Sinal observável:* um fabricante descrever mapeamento persistente
do ambiente como funcionalidade de sistema e não de aplicativo.

### Wildcards

**W1 — Uma ação coletiva vence sobre captura volumétrica de pessoas, com contagem por evento.**
*Mecanismo:* um splat facial é, literalmente, uma varredura da geometria do rosto, categoria já
prevista na BIPA; sob *Cothron v. White Castle* cada coleta é uma violação, a US$ 1.000–5.000; um
aplicativo com 50 mil usuários e dez sessões cada chega a 500 mil violações. *Por que é improvável:*
exige jurisdição, classe certificada, e que o tribunal aceite que uma representação volumétrica que
não foi usada para identificar ninguém é ainda assim um identificador — ponto hoje em disputa.
*O que faria com o mapa:* `R3` trava; `e12.2.1` (fuga de jurisdição) sobe de terceira para primeira
ordem; `e13` (avatar de si mesmo) recua para além de 2031. *Sinal precoce:* a primeira petição
inicial que escreva "Gaussian splat" como objeto da coleta.

**W2 — Vazamento em massa de capturas domésticas de uma plataforma de headset.** *Mecanismo:* as
capturas são processadas e guardadas na nuvem, o usuário não recebe o arquivo bruto, e o conteúdo
é a planta baixa e o inventário visual de casas reais. Uma falha de acesso expõe isso em volume.
*Por que é improvável:* exige falha em empresa grande com investimento pesado em segurança.
*O que faria com o mapa:* `e6.3` (recusa cultural) salta para 2027 e vira primeira ordem; `R2`
congela por um ciclo regulatório; `e6.1.1` (regime de remoção) antecipa. *Sinal precoce:* uma
demonstração acadêmica de extração automática de planta baixa e de objetos identificáveis a partir
de cenas capturadas publicadas.

**W3 — A padronização racha.** *Mecanismo:* as duas compressões candidatas não convergem, cada
motor escolhe uma, e o `KHR_gaussian_splatting` ratifica apenas a camada base — que ninguém usa sem
compressão. *Por que é improvável:* o Khronos tem histórico de convergir, e o grupo reúne
concorrentes que já decidiram cooperar. *O que faria com o mapa:* `e3` cai de primeira ordem para
contexto, `e3.1` some, e a promessa de 3D na web sem visualizador proprietário sai da janela de
2031 — com ela, boa parte do que `R1` prometia ao público deste mapa. *Sinal precoce:* a
ratificação prevista para o segundo trimestre de 2026 não sair até o fim do ano.

**W4 — Um tribunal reconhece direito patrimonial sobre a cópia digital de um edifício.**
*Mecanismo:* proprietário de imóvel icônico processa uma plataforma de mapa por exploração
comercial da reconstrução volumétrica do seu prédio, e vence — não por direito autoral da obra
arquitetônica, mas por aproveitamento comercial da cópia. *Por que é improvável:* colide com
liberdade de panorama em vários países e com décadas de prática de fotografia de rua.
*O que faria com o mapa:* `e7.1.1` (licenciar a cópia como ativo separado) vira primeira ordem, e
`R4` ganha um custo de aquisição por metro quadrado que hoje não existe. *Sinal precoce:* a
primeira notificação extrajudicial pública de um grande proprietário a uma plataforma de captura.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria do §6 da skill, aplicada ao mapa **já montado**, com o registro
auditável das alterações no fim.

### 7.1 Pré-mortem — é 2031 e este mapa se mostrou errado. Por quê?

**Razão 1 — o gargalo nunca foi capturar, foi editar.** Se cena capturada continuar intratável para
animar, segmentar e reiluminar, tudo o que `R1` prometia se reduz a "fundo bonito atrás de
personagem modelado". A evidência de que esse é o risco mais provável já está no mapa: o Marble
exporta malha junto com o splat precisamente porque o splat não é governável, e reflexo e
reiluminação continuam problemas abertos na literatura de 2026. *Aponta para:* `e2` e `e2.1`.
*Ação:* rebaixei `e2.1`.

**Razão 2 — a plataforma come o formato aberto.** Um padrão ratificado não vale nada se quem
processa não devolve o arquivo. O Hyperscape é o contraexemplo vivo: splat de ponta, formato
irrelevante, usuário sem acesso. *Aponta para:* `e3`. *Ação:* empurrei o prazo de `e3`.

**Razão 3 — o público nunca pediu 3D.** A realidade virtual de consumo levou mais de dez anos sem
chegar a 10% de adoção. Este mapa aposta que o **navegador** resolve isso, com base num único caso
(1,5 milhão de visualizações de um clipe em WebGPU). Um caso não é uma classe. *Aponta para:*
`e10.2` e `e13`. *Ação:* rebaixei `e13` e seu filho.

### 7.2 Extrapolação linear

`e14.1` ("o interior comercial vira o metro quadrado mais capturado do mundo") era, na primeira
versão, puro "mais do mesmo, maior". Ganhou mecanismo de não-linearidade e ficou: o interior
comercial é o único cuja captura tem **valor de conversão medido** e, portanto, orçamento
publicitário — é isso que o distingue de qualquer outro metro quadrado, não o volume. Mantido com
o mecanismo explícito.

`e11.2` (animação de personagem por vídeo de celular) também era extrapolação; mantive porque o
mecanismo não é "a técnica melhora", é "o erro de 8,5° no plano sagital já é aceitável para
conteúdo curto, embora não seja para medida" — a linha de corte é o uso, não a precisão.

### 7.3 Velocidade de adoção

Confrontei todo prazo com sinal fraco contra a classe de referência da tabela na seção 5. Três não
passaram: `e3` (glTF), `e16` (BIPA) e `e14` (Manhattan é mil locais, não é o mundo). Os três foram
empurrados. `e6.1.1` e `e15.1.1` foram deixados **fora do horizonte** em vez de espremidos para
dentro dele, o que é a resposta honesta.

### 7.4 A raiz que não acontece

- **Sem `R1`** (o ativo continua sendo modelado): perde-se `e1`–`e5`, mas `R2`, `R3` e `R4`
  sobrevivem inteiras — captura de espaço, de corpo e de território não dependem de o splat
  substituir a malha no pipeline. O mapa encolhe e não cai.
- **Sem `R2`** (o espaço privado não vira capturável em massa): perde-se `e6`–`e9`, e `e6.2`
  desaparece — o que derruba a **convergência principal** do mapa, porque o lado "mídia" da
  convergência vinha daqui. `R4` sozinha ainda leva robô e mapa ao mesmo dado, mas só em espaço
  público.
- **Sem `R3`** (o corpo não vira ativo 4D): perde-se `e10`–`e13` e o wildcard W1. É a raiz mais
  isolada do mapa, e também a que tem o sinal de difusão mais atrasado (demo pública).
- **Sem `R4`** (não há camada territorial comum): perde-se `e14`–`e17`, incluindo `e17`, que é a
  retroação que sustenta a tese central sobre a diferença entre parecer e medir. Essa tese
  sobreviveria via `e1.2`, que vem de `R1` — o que confirma que ela não está presa a uma raiz só.

Nenhuma das quatro é as outras disfarçada: atores diferentes (escritório/estúdio, morador,
elenco/atleta, plataforma de mapa), mecanismos diferentes (pipeline, custo do ato de capturar,
contrato de imagem, índice georreferenciado) e bloqueadores diferentes.

### 7.5 Suposições escondidas

1. **Processamento barato.** O mapa assume que uma a oito horas de servidor por sala cai de preço.
   Se não cair, `e2.3` domina e `R2` fica preso à plataforma.
2. **O Khronos ratifica no prazo.** Está escrito como previsão da própria entidade, não como fato.
   Virou o wildcard W3.
3. **Modelo aberto continua aberto.** O Hunyuan3D 2.1 publicou pesos, mas há relato de que a
   licença Tencent exclui União Europeia, Reino Unido e Coreia do Sul e exige licença comercial
   acima de 1 milhão de usuários mensais — dado que **vi em resultado de busca e não abri**, e por
   isso não usei no corpo do mapa. Se for assim, `e4` tem uma restrição geográfica que o mapa não
   modelou.
4. **A plataforma continua permitindo capturar.** Meta desligou o compartilhamento no lançamento;
   uma decisão de produto pode encerrar `R2` do lado do headset sem nenhuma lei.
5. **A curiosidade do usuário não satura.** O mapa assume que capturar o próprio espaço continua
   interessante depois da terceira vez. Não há evidência disso.

### 7.6 Viés do autor

Dois, e são nomeáveis. **Primeiro:** `R4` — mapa contra cópia, quem é dono da cópia do mundo — é a
pergunta que mais me interessa intelectualmente, e é justamente a que tem os sinais mais fracos no
horizonte (`e16` é o único efeito de primeira ordem do mapa com `sinal: fraco`). Ela está aqui por
gosto tanto quanto por evidência. **Segundo:** `e3` e `e3.2` (padrão e codec) recebem atenção
desproporcional porque padrões são elegantes e verificáveis — dão fonte boa, data exata,
ratificação datada. Isso enviesa o mapa na direção do que é documentável, e contra o que é difuso.
`e6.3` (recusa cultural) provavelmente importa mais para 2031 do que qualquer extensão do glTF, e
está com `sinal: fraco` porque ninguém publica artigo sobre bar que pede para desligar o aparelho.

### 7.7 Calibração

Depois das alterações: primeira ordem com 10 altas, 7 médias, nenhuma baixa; segunda ordem com
nenhuma alta, 27 médias, 3 baixas (`e4.1`, `e13.1`, `e16.1`); terceira ordem com 19
baixas e nada mais. A distribuição cai
monotonicamente com a ordem, como deve.

### 7.8 Registro de alterações

A bateria **derrubou** coisas — não passou em branco. Cada linha traz o antes e o depois:

1. `e3`: **prazo 2028 → 2029**, porque a classe de referência do glTF 2.0 (ratificado em jun/2017,
   padrão de fato por volta de 2020–21) dá 3 a 4 anos entre ratificação e uso corrente, e a
   ratificação só é prevista para o segundo trimestre de 2026. *(raiz R1)*
2. `e2.1`: **confianca alta → media**, pelo teste da causa solta (§3.10): a contração de vagas
   medida pela GDC 2026 (28% demitidos em dois anos; 33% nos EUA; 50% com demissão no empregador
   nos últimos doze meses) aconteceria sem captura nenhuma. O efeito continua no mapa porque o
   *recorte* — júnior antes de sênior, execução antes de decisão — é específico da captura; mas a
   confiança não sustenta "alta". *(R1)*
3. `e4.1`: **confianca media → baixa**, porque não há um único caso de loja de ativos exigindo
   declaração de origem, e o efeito é inferência pura. *(R1)*
4. **`e6.4` removido** — dizia "surge a profissão de capturador de espaços". É exatamente o efeito
   proibido pela skill ("surge uma nova profissão") sem ator nomeado nem mecanismo que o ligue ao
   pai. Vai para a seção 12. *(R2)*
5. `e6.2`: **prazo 2028 → 2029**, pela classe Matterport (~6 anos de 13 mil a 1 milhão de
   assinantes): mercado de captura por prestador não escala em dois anos. *(R2)*
6. **`e11.3` removido** — dizia "escolas de educação física adotam captura de movimento por
   celular". Não passa no teste da causa solta: isso aconteceria com estimativa de pose 2D, que é
   anterior e mais barata, sem nenhuma captura neural. Vai para a seção 12. *(R3)*
7. `e13`: **confianca alta → media**; `e13.1`: **prazo 2029 → 2030 e confianca media → baixa**,
   pela classe da realidade virtual de consumo — todo efeito cuja adoção depende de a pessoa querer
   um duplo volumétrico de si mesma herda o histórico ruim dessa classe. *(R3)*
8. `e16`: **prazo 2029 → 2030 e confianca alta → media**, pela classe BIPA (lei em 2008, litígio de
   massa em 2017–19): regime público sobre captura demora quase uma década a morder. *(R4)*
9. `e14`: **prazo 2028 → 2029**, porque "mais de mil locais em Manhattan" é um piloto urbano, não
   uma camada; o salto de piloto a camada é o que custa. *(R4)*
10. `e10.3`: **confianca alta → media**, porque o prazo depende do codec do MPEG, cuja Call for
    Proposals **ainda não abriu** — o material de teste só é recolhido até 15/10/2026. *(R3)*
11. `e12.2` e a **Contradição 2**: mantive o efeito mas **removi do corpo do mapa** qualquer apoio
    na decisão federal de Illinois sobre o que conta como identificador biométrico, porque a fonte
    não abriu (403). A contradição fica declarada como aberta em vez de resolvida a meu favor.

Cota da skill: pelo menos um efeito rebaixado ou removido **por raiz** — cumprida em R1 (itens 1,
2, 3), R2 (4, 5), R3 (6, 7, 10) e R4 (8, 9).

## 8. O que a máquina errou

Sobre o meu próprio trabalho nesta rodada, e não sobre IA em geral:

1. **Escrevi, em rascunho, que a Apple levou Gaussian splatting ao Apple Maps na WWDC 2026, com
   mais de 300 locais.** A afirmação veio de um resultado de busca. Tentei abrir a página
   (`pasqualepillitteri.it`) **duas vezes** e as duas deram *socket hang up*. Cortei a afirmação do
   corpo do documento. Ela seria conveniente para `e14` — e é exatamente por ser conveniente que
   precisava ser aberta.

2. **"1.692 artigos de Gaussian splatting no arXiv em 2025" vem de um balanço editorial** (Radiance
   Fields), não de uma contagem minha no arXiv. É específico demais para ser fabricação, mas é
   contagem de terceiro com critério de busca não publicado. Se o critério for "menciona", o número
   infla; se for "é sobre", desinfla. Usei como ordem de grandeza.

3. **"Erro geométrico médio de 7,82 cm" é o número mais importante do mapa e a fonte é comercial.**
   Vem de um site de conteúdo sobre 3D, sem citar o estudo de origem, sem *n*, sem desvio e com dois
   decimais — a precisão declarada é maior do que a origem sustenta. Mantive porque a ordem de
   grandeza (centímetros contra milímetros do Trimble X12) é o que o argumento exige, mas toda a
   tese central deste mapa apoia-se num número que eu não consegui rastrear até a medição.

4. **Tentei usar uma decisão judicial que me convinha e não consegui abrir.** A página do
   InsidePrivacy sobre a decisão federal em Illinois — que identificador biométrico precisa
   identificar — retornou 403. Ela teria resolvido a Contradição 2 numa direção. Deixei a
   contradição aberta em vez de citar de memória.

5. **Dois números atraentes ficaram de fora por procedência ruim:** "o time de Fortnite opera com
   40% menos artistas que em 2024" e "Tripo Smart Mesh P1.0 gera ativo low-poly em dois segundos,
   março de 2026". Ambos vieram de agregadores de baixa credibilidade (`industrifyai`,
   `aicrisis.org`). O primeiro, em especial, teria sido a evidência mais forte de `e2.1` — e é
   justamente o tipo de número que circula sem origem.

6. **Autoria possivelmente imprecisa.** Atribuí o rig esférico "Deis", de 192 câmeras sincronizadas
   a 24 fps, à Infinite Realities, com VFX da Framestore em *Superman*. Abri duas fontes que
   confirmam a Framestore e o uso de splats dinâmicos no filme; **o nome do rig e o número 192
   vieram de um resumo de busca do CineD/CG Channel, não de página que eu tenha aberto.** Por isso
   o número aparece na prosa da seção 3 com o nome do filme, mas nenhum efeito do mapa depende dele.

7. **Mecanismo plausível e fraco:** `e3.1.1` (redações precisam de política editorial para cena
   capturada) soa certo e não tem nenhum caso. O mecanismo é dedutivo — se o leitor escolhe o
   enquadramento, o enquadramento deixa de ser edição — mas nenhuma redação fez isso ainda, nem para
   fotografia 360, que existe há dez anos e nunca gerou política editorial própria. É o efeito do
   mapa de que eu mais desconfio.

8. **Viés de fonte.** Quatro das vinte e uma fontes abertas vêm do ecossistema `radiancefields`
   (site e substack), que é publicação entusiasta do campo. Elas sustentam fatos verificáveis
   (datas, nomes de produto, quem embarcou o quê), mas o tom do setor entrou no meu mapa por esse
   canal, e ele é otimista por construção.

## 9. Três cenários para 2031

**Provável.** A captura venceu no meio da cadeia e perdeu nas pontas. Todo escritório de
arquitetura e toda corretora entregam cena capturada navegável; ela abre no navegador, sem
aplicativo, porque o glTF ratificou em 2026 e o codec do MPEG saiu em 2029. Ninguém mais modela
ambiente do zero em produção média. Mas o ativo de contrato continua sendo a malha, porque a cena
capturada não se anima nem se reilumina bem, e o levantamento que vale em juízo continua sendo o
LiDAR, porque o splat erra centímetros. A captura de pessoa ficou onde estava: em grande produção,
por causa do custo do palco e do risco jurídico. A camada territorial existe e é de três empresas.
E a maior parte das capturas domésticas feitas no mundo está guardada em servidor de plataforma,
sem que quem capturou tenha o arquivo. *Sinal precoce de que estamos aqui:* a ratificação do
`KHR_gaussian_splatting` sair no prazo e, ao mesmo tempo, nenhum fabricante de headset passar a
devolver o arquivo bruto ao usuário.

**Desejável.** A mesma difusão técnica, com três coisas que não vieram de graça. Primeiro, a
**proveniência virou metadado obrigatório**: toda cena capturada carrega quais câmeras viram o quê
e quando, e o que foi completado por modelo aparece marcado — foi isso que permitiu a perícia, o
seguro e o jornalismo usarem captura sem que ela virasse um argumento de autoridade visual.
Segundo, a captura de pessoa ganhou **regime de consentimento próprio**, separado do de imagem,
negociado por sindicato e escrito em contrato, em vez de resolvido por ação coletiva a posteriori.
Terceiro, existe uma **camada territorial aberta** ao lado das três proprietárias — imperfeita,
desatualizada, mas suficiente para que pesquisa, cidade e pequeno desenvolvedor não dependam de
API de ninguém. Para chegar aqui teria sido preciso que a proveniência entrasse no padrão **antes**
da ratificação, e não depois. *Sinal precoce:* um grupo de trabalho do Khronos ou do MPEG abrir
item de proveniência e não só de compressão.

**Indesejável.** A captura ficou trivial e a posse ficou concentrada. O interior das casas, dos
consultórios e das escolas foi digitalizado por aparelhos de consumo e processado por três
plataformas, que retiveram tudo e treinaram modelo de mundo e robô doméstico em cima — sem que
nenhum morador tenha lido um contrato que descrevesse isso, porque o contrato falava em
"experiência imersiva". Um vazamento em 2029 mostrou que planta baixa e inventário de objeto se
extraem de cena capturada; a reação legislativa veio ampla e mal-escrita, e capturar espaço próprio
virou operação com termo de responsabilidade, enquanto capturar espaço alheio continuou impossível
de fiscalizar. A camada territorial é de dois donos, custa por chamada, e a única coisa que ninguém
consegue comprar é a atualização. *Sinal precoce deste cenário:* uma plataforma de headset ampliar
o escopo do que a captura envia para servidor sem mudar o que diz ao usuário — ou qualquer
demonstração pública de extração de planta baixa a partir de cena capturada publicada.

## 10. O experimento

**O que é — "A sala que mente".** A mesma sala da aula, em três versões, no mesmo visualizador web:
(a) **capturada** com celular por aplicativo gratuito de splat; (b) **reconstruída a partir de uma
única fotografia** da sala, por modelo de imagem-para-3D; (c) **gerada por texto**, a partir de uma
descrição da sala escrita por quem nunca a viu. As três chegam ao navegador no mesmo formato, com o
mesmo visual, sem rótulo e em ordem aleatória. A turma navega as três e responde a um questionário
de fatos verificáveis — quantas tomadas há na parede do fundo, o que está embaixo da mesa, que cor
é o rodapé, qual a distância entre a porta e a janela — antes de saber qual é qual.

**Que pergunta sobre o futuro ele ajuda a responder.** A do centro deste mapa: **quando capturado e
gerado chegam no mesmo contêiner, o que ainda distingue mapa de cópia para quem olha?** E as
consequentes: quanto tempo até alguém perceber que uma das salas nunca existiu; que tipo de erro a
reconstrução comete (falta de dado ou invenção coerente); e se as pessoas confiam mais na versão
que responde mais rápido do que na que está certa. É a evidência empírica de que `e4.2` (perícia
recusa reconstrução monocular) e `e1.2` (dois artefatos por levantamento) precisam para sair da
inferência.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa splat gaussiano
capturado por celular, reconstrução monocular por modelo de difusão 3D e geração de mundo por
texto — as três emergentes. Com tecnologia madura não dá, e a razão é precisa: a alternativa
madura é a **fotografia panorâmica 360°**, que existe desde os anos 2000 e é oferecida por qualquer
plataforma de tour. Ela não serve porque **não tem paralaxe**: quem olha não pode andar, nem olhar
por trás de um objeto, nem se aproximar. E é exatamente a paralaxe que produz a sensação de estar
diante de uma medida do lugar em vez de uma imagem dele — é ela que torna a mentira convincente.
Sem paralaxe não há experimento, há álbum de fotos.

**O que a turma faz quando testar em sala.** Três rodadas de vinte minutos. Primeiro cada pessoa
responde o questionário sozinha, sem saber que uma das salas é falsa, e marca o grau de confiança
em cada resposta. Depois, em grupo, tenta ordenar as três da mais confiável para a menos, dizendo
em que se apoiou. Por fim compara com a sala real, ali do lado, e conta os erros de cada versão,
separados em duas pilhas: **o que faltou** (região que nenhuma câmera viu) e **o que foi
inventado** (região que o modelo preencheu com algo plausível e errado). A segunda pilha é o
resultado que interessa.

**O que seria um resultado que me faria mudar de ideia.** Se a turma acertar consistentemente qual
é a capturada — digamos, acima de 80% de acerto sem pista externa —, então o problema de
proveniência que este mapa põe no centro é menor do que suponho: as pessoas leem a diferença entre
observado e inferido sem precisar de metadado, e `e4.1`, `e4.2` e `e4.2.1` caem de ordem ou saem.
Se, ao contrário, os erros inventados passarem despercebidos **e** vierem acompanhados de alta
confiança declarada, o mapa está certo e subdimensionou o efeito: a proveniência precisa ser
obrigatória e não opcional, e `e4.2` deveria ser primeira ordem.

## 11. Fontes

Vinte e uma fontes abertas e lidas em 11/09/2026. Nenhuma citada de memória; o que não abriu está
declarado nas seções 8 e 12.

1. `https://mpeg.expert/gsc/index.html` — página oficial do MPEG sobre Gaussian Splat Coding.
   Sustenta a estratégia de duas camadas, o estágio das emendas V-PCC (CDAM) e G-PCC (WD) na
   reunião 153 e o escopo de trabalho. **Confiabilidade: alta** — é o organismo de padronização
   falando do próprio trabalho, embora sem datas de CfP.
2. `https://radiancefields.com/mpeg-calls-for-dynamic-gaussian-splat-test-material-ahead-of-a-coding-call-for-proposals` —
   chamada de material dinâmico. Sustenta o prazo de 15/10/2026, os requisitos (COLMAP, 25–30 fps,
   5+ segundos), a prioridade por captura de pessoa e de palco, e a cessão de direito para treino
   de modelos. **Confiabilidade: média-alta** — publicação especializada reproduzindo documento do
   MPEG; o documento original não foi aberto.
3. `https://www.khronos.org/news/press/gltf-gaussian-splatting-press-release` — anúncio do
   `KHR_gaussian_splatting`. Sustenta a data (03/02/2026), a ratificação prevista para o segundo
   trimestre de 2026, as duas compressões (SPZ da Niantic, L-GSC da Qualcomm) e a lista de
   participantes. **Confiabilidade: alta** — fonte primária; é anúncio, então o prazo é intenção.
4. `https://www.thefuture3d.com/blog/state-of-gaussian-splatting-2026/` — estado dos padrões e
   ferramentas em 2026. Sustenta o panorama de padrões (glTF, OpenUSD, 3D Tiles, MPEG), os preços
   de ferramenta e **o número de 7,82 cm de erro geométrico médio contra 2,2 mm do Trimble X12**.
   **Confiabilidade: baixa-média** — site comercial de conteúdo, sem citar o estudo de origem do
   número mais importante que dele extraí. Ver seção 8, item 3.
5. `https://radiancefields.substack.com/p/gaussian-splatting-year-end-wrap` — balanço de 2025.
   Sustenta os 1.692 artigos no arXiv, a lista de quem embarcou splats (Esri, Autodesk, Bentley,
   DJI, Pix4D, Zillow, Apartments.com, VRChat, Babylon.js 8.0, PostShot 1.0, OctaneRender 2026), as
   vinte empresas de SLAM na Intergeo 2025, a PortalCam a US$ 5.000 e a confirmação de que Personas
   e Spatial Photos da Apple usam splatting. **Confiabilidade: média** — publicação entusiasta do
   campo, factual em datas e nomes, otimista em interpretação.
6. `https://radiancefields.com/meta-announces-meta-horizon-engine-and-capture` — anúncio do
   Hyperscape Capture e do Horizon Engine. Sustenta a data (17/09/2025), o funcionamento em Quest 3
   e 3S sem PC, e o compartilhamento desligado no lançamento. **Confiabilidade: média-alta.**
7. `https://www.uploadvr.com/meta-horizon-hyperscape-photorealistic-scene-capture-quest-3/` —
   análise prática. Sustenta os 30 segundos de malha grosseira, os 5 a 10 minutos de varredura, as
   1 a 8 horas de processamento em servidor, a não entrega do arquivo bruto e as distorções
   observadas sob móveis e em texto pequeno. **Confiabilidade: alta para observação direta** —
   é teste prático com método descrito.
8. `https://www.nianticspatial.com/blog/world-models-2026` — posicionamento do Large Geospatial
   Model. Sustenta a tese das três camadas (LLM, modelo de mundo, LGM) e o papel de "verdade de
   campo". **Confiabilidade: baixa-média para as alegações** — é material de posicionamento
   comercial, e notavelmente **não traz número nenhum** de cobertura.
9. `https://radiancefields.com/samsung-galaxy-xr-to-support-gaussian-splatting-through-google-maps` —
   Samsung e Google no Galaxy XR. Sustenta a data (22/10/2025), a renderização de splat em tempo
   real no aparelho, os mais de mil locais em Manhattan e o preço de US$ 1.799.
   **Confiabilidade: média-alta.**
10. `https://www.cgchannel.com/2026/04/dne-and-gracia-release-4-minute-streamable-4dgs-performance/` —
    primeira performance musical 4DGS transmitida em tempo real. Sustenta a data (27/04/2026), os
    quatro minutos, o WebGPU, os 17–75 Mbps, a reprodução em desktop/celular/Quest 3 sem aplicativo
    e 1,5 milhão de visualizações na estreia. **Confiabilidade: alta** — publicação editorial
    estabelecida do setor gráfico, com números específicos.
11. `https://web.volinga.ai/2025-turning-point-and-2026-trends-blog/` — balanço de produção.
    Sustenta o uso de 3DGS em *Superman* pela Framestore, o 3DGS nativo no Nuke 17.0 e o pipeline
    LiDAR-para-Unreal "em horas" com a XGRIDS. **Confiabilidade: baixa-média** — é blog de
    fornecedor, e ele mesmo não apresenta número nenhum.
12. `https://pmc.ncbi.nlm.nih.gov/articles/PMC12416023/` — captura de movimento sem marcador por
    câmera única, com cinemática inversa no OpenSim. Sustenta o método (Azure Kinect contra
    OptiTrack Prime 13W de 10 câmeras a 120 Hz), a amostra (12 adultos, 22–33 anos) e os erros
    (8,5° ombro sagital, 13,8° cotovelo, 22,4° rotação de ombro), além das limitações de autoclusão
    e rotação. Publicado em 05/09/2025. **Confiabilidade: alta** — artigo revisado por pares, com
    método e n explícitos.
13. `https://arxiv.org/abs/2401.03890` — *A Survey on 3D Gaussian Splatting*. Sustenta a
    caracterização técnica (representação explícita contra implícita do NeRF) e a atualidade do
    campo (submetida em 08/01/2024, nona revisão em 09/04/2026, aceita na ACM Computing Surveys).
    **Confiabilidade: alta.**
14. `https://arxiv.org/abs/2410.12262` — *3D Gaussian Splatting in Robotics: A Survey*. Sustenta a
    ponte entre captura neural e robótica que aparece em `e15.2`. **Confiabilidade: alta** como
    levantamento; é de out/2024, então está defasada para o estado de 2026.
15. `https://arxiv.org/abs/2506.15442` — *Hunyuan3D 2.1*. Sustenta a existência de sistema de
    imagem-para-3D com material PBR pronto para produção e repositório público (18/06/2025).
    **Confiabilidade: alta para a existência e a arquitetura**; o resumo não traz contagem de
    parâmetros nem alegação de *benchmark*, e a questão de licença não está nele (ver §7.5).
16. `https://www.worldlabs.ai/blog/marble-world-model` — Marble. Sustenta a disponibilidade geral
    em 12/11/2025, as modalidades de entrada (texto, imagem, múltiplas imagens, vídeo, layout 3D) e
    a saída em splats **mais** malha de colisão e malha visual — que é o apoio factual de `e5`.
    **Confiabilidade: média-alta** — fonte primária do fabricante, sem limitações declaradas.
17. `https://www.splatlabs.ai/blog/virtual-tours-real-estate-gaussian-splatting` — mercado de tours
    virtuais. Sustenta os números do paradigma maduro (Matterport: ~13 mil assinantes em 2018, mais
    de 1 milhão em 2024, 14,1 milhões de espaços, 50,7 bilhões de pés quadrados, aquisição pela
    CoStar por US$ 1,6 bilhão em fev/2025), os preços de serviço e o comparativo estrutural entre
    tour proprietário e splat. **Confiabilidade: baixa-média** — é peça de fornecedor concorrente
    do Matterport, com interesse direto no comparativo; usei só como ordem de grandeza.
18. `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/` —
    State of the Game Industry 2026. Sustenta a amostra (2.300+ profissionais), 28% demitidos em
    dois anos (33% nos EUA), 50% com demissão no empregador em doze meses, 36% usando IA generativa
    e 64% dos artistas visuais e técnicos com visão desfavorável. **Confiabilidade: alta para a
    pesquisa** — mas ela **não** mede captura 3D, e é por isso que rebaixei `e2.1` (ver §7.8, item 2).
19. `https://isprs-archives.copernicus.org/articles/XLVIII-2-W12-2026/89/2026/` — comparação entre
    fotogrametria, NeRF e 3DGS em patrimônio (Carmeliti e Marziali, Academia de Belas Artes de
    Verona, 12/02/2026). Sustenta a conclusão por complementaridade e o recorte de onde o neural
    ganha (superfície reflexiva, transparente, sem textura). **Confiabilidade: alta** — arquivo
    ISPRS; a página aberta não trouxe os números quantitativos.
20. `https://wcr.legal/bipa-liability-ai-avatar-ma/` — responsabilidade sob a BIPA em plataformas de
    avatar. Sustenta que extração de geometria facial satisfaz a definição legal de identificador
    biométrico, a faixa de US$ 1.000–5.000 por violação, a contagem por evento sob *Cothron v.
    White Castle* e a aritmética de 500 mil violações num serviço de 50 mil usuários.
    **Confiabilidade: média** — é conteúdo de escritório de advocacia (interesse comercial no
    risco), mas cita estatuto e precedente nomeados e declara explicitamente que **não** há decisão
    de 2026 sobre o ponto.
21. `https://www.gov.br/participamaisbrasil/ts-dados-biometricos` — tomada de subsídios da ANPD
    sobre dados biométricos. Sustenta as datas (02/06/2025 a 01/08/2025), o encerramento, o número
    de contribuições e os quatro eixos (bases legais, reconhecimento facial, governança, proteção
    de vulneráveis). **Confiabilidade: alta** — fonte primária do governo. Nota: a página aberta
    registra **84 contribuições**, enquanto um resultado de busca falava em 1.594 contribuições de
    88 participantes; adotei o número da página oficial e descartei o outro.

## 12. Anexo — o levantamento bruto

### 12.1 O briefing, e o que ele não cobria

O `briefing:` recebido trazia: modo MAPA, tema, slug, autor `grec`, zona de interesse "Percepção e
mídia sintética", horizonte 2031, público "quem projeta mídia e interação", recorte global,
descartado "o que já é comum em produto de massa", raiz suspeita `null`, viés neutro, busca web
`true`, e caminho de saída. A instrução complementar acrescentava profundidade de três ordens,
modo "a partir de uma inovação", falseador declarado ("evidência de que a adoção já passou da
maioria inicial, ou de que a tecnologia não rompe nada") e a nota sobre o Brasil.

Por ser briefing completo, **não houve rebaixamento de confiança por entrevista pulada**
(§0 da skill, regra corrigida em 10/09). O que ele não cobria está declarado como premissa na
seção 2, e não escondido aqui.

O **falseador** foi aplicado literalmente e teve consequência: ele é a razão de as três recusas da
§4.0 existirem (fotogrametria clássica, paralaxe generativa em produto de massa, e o 3DGS como
técnica). Se eu tivesse aceito "3DGS" como raiz, o mapa inteiro teria uma raiz só disfarçada em
quatro — e é justamente o que a pergunta 4 do §6 detecta.

### 12.2 Efeitos cortados na bateria do §6

- **`e6.4` — "Surge a profissão de capturador de espaços, entre o fotógrafo e o topógrafo."**
  Removido. É o efeito explicitamente proibido pela skill ("surge uma nova profissão") sem nome da
  profissão, sem ator e sem mecanismo que o ligue ao pai. O que sobrou de aproveitável dele foi
  absorvido por `e1.1` (o prestador existente muda de equipamento e de preço) e por `e5.1` (o ofício
  que cresce é o de converter captura em ativo governável), que **têm** mecanismo.
- **`e11.3` — "Escolas de educação física adotam captura de movimento por celular na avaliação."**
  Removido pelo teste da causa solta (§3.10): isso aconteceria com estimativa de pose 2D, técnica
  anterior, mais barata e já disponível, sem nenhuma captura neural. Não deriva desta raiz.
- **`e2.4` — "Bibliotecas de ativos 3D crescem em volume."** Cortado antes de entrar: extrapolação
  linear pura, sem mecanismo de não-linearidade e sem ator.
- **`e16.2` — "Reguladores criam categoria jurídica nova para cena capturada."** Cortado: é o
  efeito proibido "reguladores criam categoria/lei nova" sem nomear o regulador nem o mecanismo.
  Sobreviveu, com nome, em `e9.1.1` (ANPD) e `e16.1` (autorização municipal de varredura).
- **`e5.2` — "Formação em 3D reorganiza o currículo."** Cortado pelo mesmo motivo: é o efeito
  proibido "cursos reorganizam o currículo". Substituído por `e2.1.1`, que troca o sujeito difuso
  ("a formação") por um ator com decisão concreta (o estúdio que avalia portfólio de entrada).

### 12.3 Rebaixamentos, na íntegra

Ver §7.8 para o registro auditável com antes e depois de cada um. Resumo: dois efeitos removidos,
quatro confianças rebaixadas, quatro prazos empurrados, e uma alegação jurídica retirada do corpo
por falha de acesso à fonte. Nenhuma raiz saiu ilesa.

### 12.4 Buscas que não deram em nada, e fontes que não abriram

- **Apple Maps com 3DGS na WWDC 2026.** Apareceu em resultado de busca
  (`pasqualepillitteri.it/en/news/4534/...`), com alegação de cobertura de mais de 300 locais e
  comparação com o Immersive View do Google. **Duas tentativas de abrir, duas vezes *socket hang
  up*.** Não entrou em lugar nenhum do mapa. Se for verdadeiro, `e14` ganha um segundo ator de peso
  e o prazo de 2029 fica conservador. É a pista mais valiosa que este mapa não conseguiu confirmar.
- **Decisão federal em Illinois no caso contra o X** (identificador biométrico tem de identificar).
  `insideprivacy.com` retornou **403 Forbidden**. Teria resolvido a Contradição 2. Não usada.
- **Contagem própria de artigos de 3DGS por ano no arXiv.** Busquei por bibliometria e não achei:
  as surveys encontradas (2401.03890, 2508.09977, SUCCESS-GS) fazem curadoria, não contagem
  publicada. Fiquei com o número de terceiro (1.692 em 2025), com a ressalva da seção 8.
- **Números de adoção do Hyperscape Capture.** Nenhuma fonte publica usuários, capturas ou países.
  Escrito como "sem número encontrado" na §3.4, em vez de estimado.
- **Move.ai com benchmark de 2026.** A busca devolveu só a página institucional e literatura
  clínica de câmera única. A descrição de método de benchmark ("compara lado a lado contra óptico e
  inercial, avaliando contato de pé, movimento de coluna, tremor, dedos e autenticidade") apareceu
  em resultado de busca sem página aberta; não usei número nenhum de Move.ai no mapa.
- **Licença do Hunyuan3D 2.1.** Resultado de busca afirma que a licença Tencent **não se aplica**
  no Reino Unido, na União Europeia e na Coreia do Sul, e exige licença comercial acima de 1 milhão
  de usuários mensais. Não abri a licença. Registrado como suposição escondida em §7.5, item 3, e
  não usado como fato.
- **Epic / Fortnite com 40% menos artistas que em 2024** e **Tripo Smart Mesh P1.0 gerando ativo
  low-poly em dois segundos (março de 2026).** Ambos de agregadores de baixa credibilidade
  (`industrifyai`, `aicrisis.org`). Não usados. Seriam a melhor evidência de `e2.1` e de `e4`
  respectivamente — o que é exatamente a razão para desconfiar.
- **Brasil, lado mídia.** Procurei captura neural em produção audiovisual, museu ou emissora
  brasileira e não achei caso nomeado. O que achei foi infraestrutura (gêmeos digitais municipais,
  canteiro com drone) e pesquisa (UFC Russas, revisão sistemática de 2026). É por isso que `e9`
  afirma que no Brasil a tecnologia entra por infraestrutura antes de entrar por mídia — o achado
  é a **ausência** do caso de mídia, não a presença do caso de infraestrutura.
- **Consumo energético da reconstrução neural.** Busquei número que sustentasse um efeito ecológico
  e não achei nenhum com origem. Categoria STEEP declarada vazia na §5 em vez de preenchida com
  linha genérica.

### 12.5 Caminhos abandonados

- **Tratar "renderização neural" e "captura de realidade" como duas raízes separadas.** Abandonado:
  a renderização neural sem captura é o tema 9 (mundo gerado) e a captura sem renderização neural é
  fotogrametria madura. O que este tema tem de próprio é exatamente a junção, e separá-las produzia
  duas raízes que não passavam no teste 4 do §2 (uma delas seria a outra disfarçada).
- **Organizar a roda por setor** (cinema, jogo, arquitetura, saúde, geoespacial). Abandonado porque
  o briefing pede modo "a partir de uma inovação, não de um setor", e porque a organização por setor
  esconde a convergência: `e6.2` e `e15.2` estariam em capítulos diferentes e nunca se encontrariam.
- **Incluir um ramo sobre captura para treino de robô.** Abandonado por fronteira: é o tema 9. Ficou
  como um efeito de segunda ordem (`e15.2`) e como metade da convergência principal, o que é o
  tratamento correto de vizinho — cita onde encosta, não invade.
- **Incluir compressão de malha e visualizador web embarcado como ramo próprio.** Abandonado por
  fronteira com o tema 15 (distribuir 3D e XR pelo navegador): a entrega é lá, e aqui entra só como
  mecanismo de `e3` e `e3.2`.

### 12.6 Os artefatos da turma, e por que não entraram

**Este mapa não usa, como fonte nem como sinal, nenhum dos artefatos listados sob "o que a turma
trouxe" no enunciado do tema 10.** Ficaram de fora, por essa razão e só por essa: `supersplat`,
`img2threejs`, `EasyMocap`, `Low-Cost-Mocap`, `SysMocap`, `amass`, `draco`, `nerf` (o repositório),
`instant-ngp`, `TripoSR`, `Depth-Anything-V2`, `kornia`, `Open3D`, `pcl`, `model-viewer` e
`Magnific`. A ausência é escolha, não desconhecimento.

A razão é a independência do confronto: o mapa do professor só tem valor adversarial na aula se
tiver sido produzido **sem ver** o levantamento do aluno; se ele herdar os achados da turma, a aula
compara um documento com o próprio reflexo. A seção "para a sua IA" do enunciado — termos e
entidades — **é** insumo de busca liberado, e foi usada; a seção "o que a turma trouxe" não é.

Dois registros de honestidade sobre esta rodada, porque a regra foi aplicada **depois** de uma
parte do trabalho já ter sido feita:

1. Duas afirmações e um sinal fraco haviam entrado no rascunho apoiados num editor de splats de
   navegador e num reconstrutor que devolve código procedural — ambos nomeados no enunciado. Foram
   **removidos das seções 1 a 11**: saiu o parágrafo sobre edição no navegador da seção 3.1, saiu o
   nome da lista de quem constrói na 3.3, e o sinal fraco nº 1 da seção 6 foi substituído por outro,
   apoiado em fonte que abri nesta rodada (o esquema de *particle fields* do OpenUSD).
2. Uma das buscas que rodei — sobre o editor de splats em navegador — **foi disparada pelo
   enunciado**, e não por vocabulário. Esse é exatamente o caminho de contaminação que a regra
   descreve ("a pista orienta a busca e a busca traz o que a pista mandou buscar"). O resultado
   dessa busca foi descartado do documento; registro aqui que ela existiu, em vez de apagá-la.

Isto empobrece o mapa em sinal fraco, e o empobrecimento é aceito: o sinal que o aluno achou é
matéria do confronto em aula, não do mapa do professor.

### 12.7 Termos e entidades usados na varredura

*Termos, em inglês:* gaussian splatting, 3DGS, 4D gaussian, NeRF, neural rendering, radiance field,
3D reconstruction from single image, markerless motion capture, volumetric video, photogrammetry AI,
splat compression, SPZ, glTF extension, reality capture, large geospatial model, visual positioning
system, world model export, spatial scenes. *Termos, em português:* captura neural, digitalização
3D, gêmeo digital, nuvem de pontos, dados biométricos, patrimônio digitalizado, ANPD biometria.
*Entidades:* Khronos, MPEG, OGC, AOUSD, PlayCanvas, Niantic Spatial, Qualcomm, Meta, Apple, Samsung,
Google, World Labs, Framestore, Infinite Realities, DNE, Gracia, NEXIA, 4DV.ai, Move.ai, Tencent,
Esri, Autodesk, Bentley, Cesium, DJI, Pix4D, XGRIDS, Trimble, Matterport, CoStar, Zillow, Realtor.

### 12.8 Saída do verificador

Rodado em 11/09/2026 com `--links`, colado abaixo na íntegra, com os números:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 17 (frontmatter diz 17)
efeitos ordem 2: 30 (frontmatter diz 30)
efeitos ordem 3: 19 (frontmatter diz 19)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e6.1.1', 2032), ('e15.1.1', 2033)]
confiança ordem 1: alta 10 · media 7 · baixa 0
confiança ordem 2: alta 0 · media 27 · baixa 3
confiança ordem 3: alta 0 · media 0 · baixa 19
links da seção 11: 21/21 respondem (frontmatter diz fontes: 21)
RESULTADO: ok
```
