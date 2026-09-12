---
tema: "Agentes corporificados, IA física e modelos de mundo"
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 17
efeitos_ordem_2: 27
efeitos_ordem_3: 20
tecnologias_citadas: [Genie 3, SIMA 2, Gemini Robotics 1.5, NVIDIA Cosmos, Cosmos Predict 2.5, Cosmos Transfer 2.5, Cosmos Reason 2, Isaac Sim, Isaac Lab, Isaac Lab-Arena, Isaac GR00T N1.6, Newton, PhysX, MuJoCo, MJX, Genesis, MetaDrive, AirSim, habitat-sim, habitat-lab, drake, MoveIt 2, OMPL, pinocchio, OpenVINS, Lanelet2, MAVLink, RT-Thread, Apollo, MONAI, ROSClaw, pi0, openpi, LeRobot, OpenVLA, OpenVLA-OFT, UniVLA, WorldVLA, Nora, RIPT-VLA, LIBERO, LIBERO-Plus, RoboGate, WorldBench, GAUGE, Marble, World API, Odyssey-2, Agora-1, Oasis, Open X-Embodiment, GELLO, Egocentric-1M, ISO 10218-2:2025, ISO/TS 15066, ISO/WD 25785-1, Regulamento de Máquinas UE 2023/1230]
fontes: 20
confianca: media
experimento: "O mesmo mundo, três físicas: a turma aposta no desfecho de um evento físico simples visto num motor autorado, num mundo gerado por modelo de mundo e no vídeo do evento real, e depois confere contra a medida"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A IA ganhou corpo mais depressa do que ganhou mundo. Em 2026 os embarques globais de humanoides
passaram de 22 mil unidades no primeiro semestre, quase 300% acima do ano anterior — mas mais de
60% deles foram para entretenimento, performance, produção de dado e pesquisa, e apenas 13% para
manufatura: o humanoide entrou no mercado como **mídia**, não como força de trabalho. Ao mesmo
tempo, a técnica que sustentaria o resto — aprender num mundo simulado e transferir para o real —
mostrou o seu piso em números duros. Um único modelo, o GR00T N1.6, marca 97,65% de sucesso no
benchmark LIBERO e 0% em 68 cenários industriais montados no Isaac Sim. O π0 cai de 94,2% para
6,6% quando se muda apenas a posição inicial do braço. Nas medições do GAUGE contra captura de
movimento real, nenhum motor de física domina, e nos eventos de alta energia os erros ficam de 8
a 128 vezes acima da repetibilidade da própria medida. E os modelos de mundo generativos, que
deveriam substituir o simulador, estimam a gravidade entre 0,37 e 8,93 m/s². O mapa que sai daí
tem quatro raízes — o ambiente que se gera em vez de se construir, a política única que dirige
corpos diferentes, a experiência física virada mercadoria de trabalho humano, e o agente que
opera qualquer mundo 3D pela tela — e uma tese que atravessa todas: **até 2031 o gargalo da IA
física não é o corpo nem o cérebro, é o lugar onde ela aprende, e esse lugar tem dono, custo e
erro mensurável.** Para quem projeta mídia e interação, isso significa que o mundo virtual deixa
de ser cenário e passa a ser infraestrutura de treino — com tudo o que "ser infraestrutura"
implica de contrato, auditoria e responsabilidade.

## 2. O tema

**O objeto.** Agentes que têm corpo — robô, drone, carro, ou o corpo virtual de um avatar que
usa teclado e mouse — e os mundos em que eles aprendem. O tema encosta em mídia e interação por
três lados. Primeiro, porque a técnica dominante de treino é a **simulação**, e simulação é
construção de mundo: o mesmo ofício que constrói um nível de jogo. Segundo, porque o **modelo de
mundo** — um sistema que *gera* o ambiente em vez de renderizar um ambiente autorado — é
literalmente a mesma família de modelo que gera vídeo, e nasceu dentro dos laboratórios de mídia
generativa. Terceiro, porque o **agente generalista** que opera um mundo 3D sem acesso ao código
apaga a distinção entre jogar e operar: para ele, o jogo, o simulador e o painel de controle são
o mesmo tipo de lugar.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Um levantamento
responderia "quais simuladores existem" — e a resposta é longa e chata: são 241 itens só na
varredura de sistemas embarcados e navegação que a turma trouxe. O que um levantamento não
responde é a pergunta que muda decisão de projeto: **se o mundo em que a máquina aprende passa a
ser gerado por outra máquina, quem responde pelo que ela aprendeu?** Essa pergunta tem
consequência jurídica, econômica e estética, e tem consequência em cadeia — é o formato de uma
roda dos futuros, não o de uma tabela comparativa.

**O recorte deste mapa.** Global, com uma nota sobre o Brasil na seção 3 e um efeito de terceira
ordem que trata especificamente da posição brasileira na cadeia (`e10.1.1`). O público é quem
projeta mídia e interação — então "efeito relevante" aqui é o que muda o que essa pessoa desenha,
contrata, mede ou assina, não o que muda o PIB da robótica.

**Premissas assumidas** (o briefing veio completo, mas não cobria tudo; declaro em vez de
esconder, conforme §0 da skill):
- Assumi que **não há exclusão temática** além da régua da disciplina ("o que já é comum em
  produto de massa" fica fora como raiz).
- Assumi que **veículo autônomo entra apenas como classe de referência**, não como objeto do
  mapa: ele já tem uma literatura de futuros própria e um regime regulatório separado. Onde ele
  aparece (`e7`, seção 3) é como comparação de velocidade de adoção.
- Assumi que **simulação de sociedades** (tema 6) e **captura 3D do mundo real** (tema 10) são
  vizinhos e não conteúdo — cito onde a fronteira encosta, sem invadir.
- Assumi que **a data de corte da pesquisa é 11/09/2026** e que tudo posterior a isso está fora.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**Corpos embarcam em volume, e o volume é de mídia.** A Counterpoint Research mediu, em 19 de
agosto de 2026, mais de **22.000 humanoides embarcados no primeiro semestre de 2026** — alta de
quase 300% ano a ano — com previsão de ultrapassar 50.000 no ano fechado (crescimento de 210%). A
liderança é chinesa: AGIBOT com 9.700 unidades (43%), Unitree com mais de 7.000 (31%), Galbot com
mais de 1.100 (5%), UBTECH com cerca de 1.000 (4,4%) e Leju com 650 (2,9%) — os cinco primeiros
somam 86% do total. **A composição por aplicação é o dado que mais importa para este mapa:**
entretenimento e performance somados a produção de dado e pesquisa passam de **60%**; serviço e
recepção ficam em ~19%; manufatura inteligente em **13%**; armazém e logística em **5%**. Isto é,
o humanoide de 2026 é, majoritariamente, um objeto de mídia e um instrumento de coleta de dado —
não um trabalhador.

**Modelos de robô com pesos abertos e licença comercial.** A NVIDIA soltou, no CES de **5 de
janeiro de 2026**, o Cosmos Predict 2.5, Cosmos Transfer 2.5, Cosmos Reason 2, o **Isaac GR00T
N1.6** e o **Isaac Lab-Arena** (arcabouço aberto de avaliação), todos no Hugging Face. A Physical
Intelligence já havia aberto código e pesos do **π0** e do π0-FAST no repositório `openpi`, com
porte PyTorch no LeRobot. A Google DeepMind publicou o **Gemini Robotics 1.5** e o Gemini
Robotics-ER 1.5 (outubro de 2025), com um mecanismo de *Motion Transfer* que permite aprender de
dado heterogêneo de vários embodiments — a peça técnica que torna plausível "uma política, vários
corpos".

**Modelos de mundo saíram do laboratório para a API.** O **Genie 3** (DeepMind, 5 de agosto de
2025) gera mundo navegável em tempo real a 720p e 24 fps, com consistência de poucos minutos e
memória visual de cerca de um minuto, e aceita *promptable world events* — mudar o tempo,
introduzir objetos por texto. A **World Labs** lançou a **World API em 21 de janeiro de 2026**:
gera ambiente 3D navegável a partir de texto, imagem, panorâmica, multivista ou vídeo, entrega
splats gaussianos (`.spz`/`.ply`), malha de colisão GLB de 100–200 mil triângulos e malha visual
de ~600 mil, com guias oficiais de exportação para Blender, Unreal, Unity e Houdini — **e
compatibilidade declarada com Isaac Sim, MuJoCo e RoboSuite**. O Marble 1.1 e o 1.1 Plus, com
auto-expansão, saíram em 2 de abril de 2026. Do lado do vídeo interativo, a Odyssey publicou o
Odyssey-2 (outubro de 2025), depois Pro e Max, e o **Agora-1** (maio de 2026), que põe quatro
jogadores dentro do mesmo mundo gerado.

**Agente generalista em mundo 3D.** O **SIMA 2** (DeepMind, 13 de novembro de 2025) opera jogos
comerciais por pixel, teclado e mouse, sem acesso à mecânica interna. Treinou em Valheim,
Satisfactory, No Man's Sky, Space Engineers e Teardown, e foi avaliado em jogos retidos (ASKA,
MineDojo) — **e em mundos gerados pelo Genie 3**, que nunca viu no treino. Transfere conceito
entre domínios ("minerar" vira "colher") e melhora de geração em geração treinando na própria
experiência, sem dado humano novo.

**O dinheiro chegou.** Segundo a Crunchbase News (18 de agosto de 2026), o capital de risco em
"physical AI" — robótica, veículos autônomos, aeroespacial, drones, automação industrial e
sensores — somou **US$ 47,4 bilhões em 521 negócios no 1º semestre de 2026**, contra US$ 12
bilhões em 470 negócios no 2º semestre de 2025 e US$ 41,9 bilhões em **todo** o triênio 2022-2024.
As maiores rodadas foram Waymo (US$ 16 bi, fev/2026), Anduril (US$ 5 bi), Shield AI (US$ 2 bi) e
Saronic (US$ 1,75 bi) — o que também diz que "IA física" hoje é, em dinheiro, sobretudo veículo
autônomo e defesa.

**A indústria do dado corporal existe.** A XDOF saiu do stealth em **17 de junho de 2026** com
US$ 70 milhões (Thrive, Spark, a16z, Lux, WndrCo), ~60 pessoas e 20 clientes, entre eles
"laboratórios de fronteira"; publicou o conjunto ABC com 130 mil trajetórias de manipulação, 300
horas de simulação e 100 horas de avaliação. É um *spinout* de Berkeley: os fundadores fizeram o
GELLO, o rig barato de teleoperação que muitos laboratórios acadêmicos adotaram.

### 3.2 O que existe e ainda não funciona

**A política generalista não sobrevive a perturbação.** O **LIBERO-Plus** (15 de outubro de 2025;
NUS, Fudan e Tongji) montou 10.030 tarefas em sete dimensões de perturbação (layout de objetos,
ponto de vista de câmera, estado inicial do robô, instrução em linguagem, iluminação, textura de
fundo, ruído de sensor) e mediu dez modelos. O OpenVLA vai de 76,5% para **1,1%** só mudando a
câmera; o π0 vai de 94,2% para **15,8%** com câmera e para **6,6%** com estado inicial diferente.
E o achado mais desconfortável: os modelos são pouco sensíveis à variação da instrução **não por
entenderem linguagem, mas por ignorarem a instrução** — decidem por posição, não por semântica.

**A transferência entre simuladores é pior que a transferência para o real.** O **RoboGate**
(arXiv 2603.22126, março–abril de 2026) mediu um GR00T N1.6 ajustado: **97,65% no LIBERO (MuJoCo)
e 0% nos seus 68 cenários industriais no Isaac Sim** — 97,65 pontos percentuais de vão
*cruzando de simulador para simulador*, sem sair da simulação. São mais de 50 mil experimentos em
oito dimensões de parâmetro e quatro embodiments (Franka Panda, UR3e, UR5e, UR10e).

**O motor de física não bate com a física.** O relatório **GAUGE** (Pebblous, 10 de agosto de
2026) comparou Isaac Sim 6.0.0, Genesis 1.12.0 e Newton 1.3.0 contra captura de movimento com 16
câmeras a 180 Hz e propriedades de material medidas em bancada, normalizando pela repetibilidade
da própria medida (1,0). Bola quicando: o melhor motor erra **15,63×** a linha de base. Pano
lançado: de **8,54× a 128,26×** para o mesmo material. Espuma: 15,26× a 26,57×. Pêndulo de Newton:
transferência de momento medida em 0,20–0,26 contra 1,0 real, e intervalo de repouso de **0
segundos** contra 0,38 s medidos. A conclusão do relatório é que nenhum motor domina, e que todos
quebram exatamente nos eventos de alta energia e curta duração.

**O modelo de mundo não sabe o valor dos parâmetros que simula.** O **WorldBench** (arXiv
2601.21282, versão de 18 de agosto de 2026; UCLA, Yale, Sony AI e Army Research Lab) testou
Cosmos-1, Cosmos-2 (2B e 14B), Cosmos-2.5, Wan 2.2, Hunyuan Video, CogVideoX, Kling 3.0, Runway
Gen-4.5 e LTX-2.0 em 469 vídeos de física intuitiva e 279 de estimação de parâmetro. Os escores
médios de mIoU ficaram entre 0,26 e 0,45. Na estimação de **gravidade** a partir de vídeo real, os
modelos devolveram entre **0,37 e 8,93 m/s²** contra 9,81 reais; viscosidade variou de 0,22 a mais
de 50 Pa·s. A frase dos autores é a que interessa: os modelos geram evoluções de cena
"visualmente realistas" mas "falham em aderir aos parâmetros físicos", o que os torna pouco
confiáveis como simuladores sintéticos de física.

**Benchmark de velocidade de simulador já mentiu, e em ordem de grandeza.** O Genesis anunciou
"mais de 43 milhões de FPS" simulando um braço Franka num RTX 4090 — 430.000× mais rápido que o
tempo real. Ao corrigir a metodologia (substeps mínimos, robô parado em mais de 90% dos passos,
autocolisão desligada, hibernação de objeto), o número cai para **0,29 milhão de FPS: 150 vezes
menos**, e em tarefas com contato rico o Genesis fica de 3 a 10 vezes *atrás* de ManiSkill/SAPIEN.

**O modelo de mundo é curto.** O próprio Genie 3 declara os limites: ação direta do agente
restrita, interação multiagente em espaço compartilhado difícil, geografia real imprecisa, texto
mal renderizado, e sessão de poucos minutos. O SIMA 2 declara os seus: horizonte longo, memória
limitada por janela de contexto, controle fino de teclado e mouse, compreensão de cena 3D
incompleta — e segue em *research preview* fechado.

### 3.3 Quem constrói

- **NVIDIA** — a plataforma inteira: Isaac Sim/Lab, Newton, PhysX, Cosmos, GR00T, OSMO, Jetson
  Thor e T4000. É quem define o formato de fato.
- **Google DeepMind** — Genie 3 (mundo), SIMA 2 (agente de tela), Gemini Robotics 1.5 (corpo).
  É o único ator com as três peças.
- **World Labs** (Fei-Fei Li) — Marble e World API: o mundo gerado como **ativo exportável** para
  pipeline de produção e para simulador de robô.
- **Physical Intelligence** — π0/π0-FAST com pesos abertos; a linha aberta que impede o mercado de
  virar duopólio.
- **Fabricantes chineses** — AGIBOT, Unitree, Galbot, UBTECH, Leju: 86% dos embarques.
- **Indústria de dado corporal** — XDOF, micro1, Scale AI, DoorDash "Tasks", mais os centros
  chineses (Pequim, +10.000 m²; Zigong, 3 milhões de registros/ano).
- **Bancadas independentes** — os grupos por trás de LIBERO-Plus, RoboGate, WorldBench e GAUGE.
  Ator novo e pequeno, mas é a camada que este mapa aposta que cresce.

### 3.4 Nota sobre o Brasil

O relatório *Innovation Telescope – Zoom Brasil 2025*, da Indra (divulgado em 22 de janeiro de
2026), aponta que o Brasil **ultrapassou 30 mil robôs industriais ativos**, com crescimento médio
anual de 12%, e que **48% das empresas industriais brasileiras planejam investir em robôs
polifuncionais até 2026** — equipamentos que executam múltiplas tarefas e se adaptam sem
reprogramação constante, com ROI declarado 35% superior ao de robôs de função única. A densidade
robótica brasileira segue abaixo de 50 unidades por 10 mil trabalhadores, contra média global de
141 e mais de 300 em Alemanha e Coreia do Sul. A leitura para este mapa é direta: **o Brasil não
está posicionado para fabricar o corpo nem para treinar o modelo, mas está posicionado no insumo
que o mapa identifica como escasso — demonstração humana e diversidade de ambiente real.** É o que
o efeito `e10.1.1` explora.

### 3.5 Número que descreve a adoção hoje

- Humanoides embarcados no 1º sem. de 2026: **22.000+** (Counterpoint, 19/08/2026). *Divergência
  registrada: a Smart Analytics Global publica 19,1 mil para o mesmo período — cerca de 15% de
  diferença entre duas casas de pesquisa sobre o mesmo semestre. Ver seção 8.*
- Capital de risco em IA física no 1º sem. de 2026: **US$ 47,4 bi em 521 negócios** (Crunchbase
  News, 18/08/2026).
- Robôs industriais instalados no mundo no último ano: **mais de 500 mil**, 54% na China (IFR,
  via imprensa setorial).
- Demonstrações teleoperadas por trabalhador por dia: **menos de 200**; rig de teleoperação:
  **US$ 50 mil a US$ 150 mil**; pagamento típico de coleta gig: **~US$ 15/hora**.
- Modelo de mundo em tempo real: **720p, 24 fps, poucos minutos** de consistência (Genie 3).
- **Sem número encontrado** para: quantos robôs em produção rodam hoje uma política de fundação
  de terceiro (em oposição a controle clássico); e qual fração do treino de robôs comerciais vem
  de dado gerado por modelo de mundo. Procurei e não achei; são as duas lacunas que mais
  enfraquecem este mapa.

## 4. As disrupções-raiz

Antes das quatro escolhidas, o registro das **recusas** (critério §2 da skill):

- **Candidato recusado: ROS 2, SLAM, planejamento de trajetória (OMPL, MoveIt 2, pinocchio,
  Lanelet2, OpenVINS).** Adoção em maioria na indústria e na academia há anos. Não rompem nada
  hoje; são o chão. Tratados como contexto na seção 3.
- **Candidato recusado: simulação física acelerada por GPU (Isaac Sim, MJX, PhysX, Newton).** É
  pré-condição das quatro raízes, não ruptura: já é a prática padrão de quem treina robô por
  aprendizado. Recusado como raiz, mantido como pré-condição — e as suas falhas medidas (GAUGE)
  entram como mecanismo dentro de `e2` e `e6`.
- **Candidato recusado: vídeo generativo passivo (Sora, Veo, Kling).** Produto de massa desde
  2025. Rompe produção de vídeo, não IA corporificada. Entra como linhagem técnica do modelo de
  mundo.
- **Candidato recusado: "o humanoide".** Produto, não ruptura — e é o anti-padrão que a skill
  proíbe. O que ele carrega de ruptura está distribuído em R2 (a política) e R3 (o dado).
- **Candidato adiado: robôs cirúrgicos e MONAI (imagem médica).** Regime regulatório próprio,
  ciclo de aprovação de década, público diferente do deste mapa. Fora do recorte; registrado na
  seção 12.

---

### R1 — O ambiente de treino deixa de ser construído e passa a ser gerado

**O que rompe.** A suposição, que vale desde que existe computação gráfica, de que **o mundo em
que algo é simulado é um artefato autorado, inspecionável e versionável** — alguém modelou a
geometria, alguém escreveu o coeficiente de atrito, alguém pode abrir o arquivo e ver. O modelo de
mundo generativo produz o ambiente quadro a quadro a partir de texto, sem geometria explícita e
sem parâmetro legível. O ofício que deixa de valer é o de **construir cenário como etapa
obrigatória**: no jogo, o *blockout*; na robótica, a montagem da cena de treino. O que se perde
junto é a auditabilidade.

**Por que agora, e não há cinco anos.** Três pré-condições fecharam entre agosto de 2025 e abril
de 2026: (a) geração autoregressiva de vídeo interativo em tempo real a 24 fps com consistência de
minutos (Genie 3, 08/2025; público para assinantes em 29/01/2026); (b) **exportação** do mundo
gerado para formatos de produção e para simuladores de robô — a World API entrega splat, malha de
colisão e malha visual, com compatibilidade declarada com Isaac Sim, MuJoCo e RoboSuite
(21/01/2026); (c) modelos de mundo com pesos abertos no Hugging Face (Cosmos, 01/2026). Em 2021
faltavam as três.

**Onde está na difusão.** Entre **demo pública** e **produto de nicho**. Há API paga e há guia de
exportação oficial para Blender/Unreal/Unity/Houdini, mas não há estúdio comercial de porte
declarando entrega final em mundo gerado. Cadeia com confiança majoritariamente média, e baixa na
terceira ordem.

**O que ainda falta acontecer.** (1) Consistência acima de dezenas de minutos; (2) parâmetro
físico correto e *legível* — enquanto a gravidade estimada variar de 0,37 a 8,93 m/s², o mundo
gerado serve para olhar e não para medir; (3) controle de estado (poder dizer "este objeto pesa
2 kg" e ser obedecido); (4) custo por minuto de sessão que amortize contra um asset renderizado
mil vezes.

**Quem bloqueia.** Os donos de motor e de catálogo de asset (Epic, Unity, e as lojas de asset),
cujo negócio inteiro é o pipeline autorado. A forma provável do bloqueio não é proibir: é
**absorver** — oferecer geração como etapa de autoria dentro do motor, o que devolve o mundo
gerado à condição de asset congelado. É exatamente o efeito `e3.1`.

---

### R2 — Uma política pré-treinada dirige corpos diferentes

**O que rompe.** O casamento entre corpo e comportamento. Até agora, comportamento de robô era
engenharia por tarefa e por máquina: um controlador, uma célula, uma linha. Um modelo
visão-linguagem-ação pré-treinado com *motion transfer* entre embodiments rompe isso — o
comportamento passa a ser um **artefato de terceiro**, baixado, com licença, atualizável. O que
deixa de valer é o modelo de negócio do fabricante que vendia a máquina *e* o que ela faz.

**Por que agora, e não há cinco anos.** GR00T N1.6 com licença comercial em acesso antecipado
(01/2026); π0 com pesos abertos e porte no LeRobot; Gemini Robotics 1.5 com Motion Transfer
(10/2025), que é a peça que faz o dado de um corpo servir a outro. Em 2021 não havia nem o
transformer multimodal grande o bastante nem o corpus multi-embodiment (Open X-Embodiment).

**Onde está na difusão.** **Produto de nicho** caminhando para **adoção precoce** em ambiente
controlado. Longe de maioria: os números de robustez são os de um protótipo, não os de um produto.

**O que ainda falta acontecer.** (1) Robustez a perturbação — hoje um modelo cai de 94,2% para
6,6% mudando o estado inicial; (2) transferência entre simuladores, que hoje é pior que a
transferência para o real (97,65 → 0); (3) que a instrução em linguagem seja de fato lida, o que
o LIBERO-Plus mostra que não é; (4) enquadramento de conformidade para comportamento aprendido —
o Regulamento de Máquinas UE 2023/1230 passa a valer em 20/01/2027 e cobre explicitamente máquina
cujo comportamento se altera por aprendizado; (5) a ISO/WD 25785-1, sobre robôs móveis
dinamicamente estáveis, sair de rascunho.

**Quem bloqueia.** **Seguradoras e integradores.** O integrador perde a margem se o comportamento
vem de fora; a seguradora não precifica o que não consegue atribuir. O bloqueio provável é o
congelamento da política no embarque, para não reabrir a conformidade — `e8.1`, que anula
justamente a promessa de "robô que aprende".

---

### R3 — A experiência física vira mercadoria: o dado corporal como indústria de trabalho

**O que rompe.** A economia do dado de IA. Texto e imagem foram raspados a custo marginal quase
zero: o dado já existia. Demonstração corporal **não existe até que um corpo humano a execute em
tempo real**, uma vez, com um rig. Isso rompe a suposição de que escala de dado é problema de
banda e armazenamento; aqui é problema de folha de pagamento e de logística de ambiente real.

**Por que agora, e não há cinco anos.** Porque só agora existe um comprador: modelos de fundação
para robô que absorvem dado em escala. XDOF sai do stealth com US$ 70 mi e 20 clientes (06/2026);
micro1 contrata milhares de pessoas em mais de 50 países a ~US$ 15/h para filmar tarefas
domésticas com iPhone na cabeça; DoorDash usa entregadores para gravar dado de treino; Scale AI
acumula mais de 100 mil horas de coleta interna. Do lado chinês, centros dedicados: Pequim com
mais de 10.000 m², Zigong com 3 milhões de registros por ano.

**Onde está na difusão.** **Produto de nicho** virando **adoção precoce**. Já há empresas, capital
e conjuntos públicos, mas não há padrão de formato nem regime trabalhista.

**O que ainda falta acontecer.** (1) Padrão de formato e de metadado que torne o dado
intercambiável entre compradores; (2) regime jurídico sobre o gesto gravado — hoje contrato de
plataforma, não direito; (3) uma resposta honesta sobre quanto de dado sintético substitui dado
real, que os números do WorldBench hoje não autorizam; (4) uma classificação trabalhista, que já
foi proposta ("Data Demonstration Workers", ISF, 22/06/2026) e não existe.

**Quem bloqueia.** **Quem já tem frota em campo.** Uma empresa com robôs operando gera trajetória
de graça, como subproduto; ela tem interesse ativo em que o dado não vire mercadoria padronizada e
comprável, porque a padronização apaga a vantagem dela. O bloqueio é por omissão: não adotar
padrão. Efeito `e13.1`.

---

### R4 — O agente generalista opera qualquer mundo 3D pela tela

**O que rompe.** A fronteira entre **interface** e **API** — e, com ela, a fronteira entre jogar e
operar. A suposição de que interface gráfica é para gente e integração de máquina se faz por
contrato programático deixa de valer quando o agente entra por pixel, teclado e mouse, sem acesso
à mecânica. Rompe também a categoria "jogo": para o agente, o jogo comercial, o simulador de
fábrica e o painel de operação são o mesmo tipo de lugar, e a diferença entre eles vira só
diferença de currículo.

**Por que agora, e não há cinco anos.** SIMA 2 sobre Gemini (11/2025) generaliza para jogos
retidos e para mundos gerados pelo Genie 3, e melhora de geração em geração treinando na própria
experiência, sem dado humano novo. As pré-condições foram: modelo multimodal com raciocínio
suficiente para converter objetivo em plano; parceria com estúdios que deu volume de mundos
diversos; e mundo gerado sob demanda, que remove o teto de "quantos ambientes existem".

**Onde está na difusão.** **Laboratório / demo pública.** Research preview fechado, coorte
pequena, sem calendário. Por regra da skill, **toda a cadeia de R4 carrega confiança baixa a
média**, e nenhum efeito de primeira ordem dela recebe confiança alta.

**O que ainda falta acontecer.** (1) Horizonte longo e memória além da janela de contexto;
(2) controle fino de entrada; (3) uma posição das plataformas sobre agente que lê tela — hoje a
mesma assinatura técnica do cheat; (4) acesso além da coorte fechada, sem o qual o efeito é
retórico.

**Quem bloqueia.** **As plataformas de jogo e os sistemas anti-cheat.** Um agente que lê o quadro
e injeta entrada é indistinguível, na telemetria, de um bot de trapaça. O bloqueio já tem forma
conhecida: vira licença negociada com poucas empresas, como aconteceu com raspagem da web —
`e16.1`.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ambiente de treino deixa de ser construído e passa a ser gerado por um modelo de mundo
    efeitos:
      - id: e1
        ordem: 1
        efeito: Estúdios adotam mundo gerado como pré-visualização exportável e não como entrega final
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A etapa de blockout de nível sai do cronograma de produção e a disputa de prazo se desloca para o polimento
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O portfólio de entrada em level design passa a mostrar critério de espaço em vez de cenário construído
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Captura de referência no local (foto, panorâmica, vídeo) vira insumo padrão de produção porque a World API aceita esses formatos como entrada
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Locação física vira ativo licenciável e quem controla o acesso ao lugar cobra pela geração do mundo dele
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Laboratórios de robótica compram mundo gerado como aumento de dado e mantêm o simulador autorado para o que precisa de parâmetro
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Surge uma camada de verificação de física entre quem gera o mundo e quem treina o agente, medindo o gerador contra medida real
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Ambiente de treino passa a circular com ficha de física declarada, como material de construção circula com ficha técnica
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O erro de simulação deixa de ser tratado como ruído e passa a ser especificado em contrato entre fornecedor de mundo e treinador de agente
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: O custo de computação por minuto de mundo gerado freia o uso em execução e empurra o modelo de mundo para a etapa de autoria
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Estúdios adotam gerar-uma-vez-e-congelar, exportando o mundo para malha e tratando-o como asset convencional
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O modelo de mundo termina a década como ferramenta de autoria e não como motor de execução, e o mundo que se gera enquanto se joga fica restrito a nicho
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Experiência ao vivo e instalação expositiva adotam mundo gerado antes do jogo comercial porque a sessão curta cabe na janela de coerência do modelo
        sinal: fraco
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A duração de coerência do modelo vira parâmetro declarado de projeto de experiência, e a sessão é desenhada em torno dela
            sinal: fraco
            prazo: 2029
            confianca: baixa

  - disrupcao: Uma política pré-treinada dirige corpos diferentes (modelo visão-linguagem-ação como modelo de fundação)
    efeitos:
      - id: e5
        ordem: 1
        efeito: Fabricante de robô passa a vender corpo compatível com política de terceiro em vez de vender comportamento próprio
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O contrato de fornecimento separa quem responde pelo corpo de quem responde pela política, e o integrador fica no meio sem controlar nenhum dos dois
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O primeiro litígio grave por acidente com robô sob política de terceiro se decide sobre acesso ao dado de treino, não sobre defeito de peça
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Nasce um mercado de adaptação de corpo, que converte um embodiment novo para o espaço de ação de uma política já treinada
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O prédio entra na lista de corpos a adaptar, e piso, largura de corredor e sinalização legível por máquina passam a constar do projeto arquitetônico como já consta acessibilidade
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A bancada de perturbação vira o produto vendável, e medir a degradação passa a valer mais que declarar a taxa de sucesso
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Comprador industrial passa a exigir teste em simulador diferente daquele em que a política foi treinada
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O simulador de teste se separa institucionalmente do simulador de treino, e quem opera um fica impedido de operar o outro
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Taxa de sucesso perde valor de comunicação e é substituída por curva de degradação sob perturbação declarada
            sinal: fraco
            prazo: 2029
            confianca: media
      - id: e7
        ordem: 1
        efeito: O comando em linguagem natural para robô é vendido antes de funcionar, porque os modelos hoje decidem por posição e ignoram a instrução
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Quem projeta interação com robô volta a desenhar affordance física e gesto em vez de comando falado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A interface do robô doméstico converge para poucas ações confirmáveis e uma superfície que mostra intenção, mais próxima de painel de elevador que de assistente de voz
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Pedir confirmação vira padrão de projeto, e a taxa de interrupção do robô entra como métrica de produto
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e8
        ordem: 1
        efeito: A regulação de máquina alcança o comportamento aprendido antes de o comportamento aprendido ficar confiável
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Fabricante congela a política no embarque para não reabrir a avaliação de conformidade, o que anula a promessa de robô que aprende em campo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Aprender em campo vira privilégio de frota própria, e o cliente recebe versão assinada treinada no simulador do fabricante
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: A norma de robô móvel dinamicamente estável vira o gargalo comercial do humanoide, e o certificado passa a valer mais que a demonstração em vídeo
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e9
        ordem: 1
        efeito: O humanoide entra no mercado como mídia antes de entrar como força de trabalho
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Quem projeta experiência de marca contrata corpo robótico como contrata performer, com pauta de cena, ensaio e diária
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A gramática de movimento do humanoide comercial converge para o que fotografa bem, e essa gramática realimenta o dado de treino
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: A distância entre o vídeo de demonstração e a máquina entregue vira problema declarado de comunicação de produto
            sinal: medio
            prazo: 2029
            confianca: media

  - disrupcao: A experiência física vira mercadoria e o dado corporal vira indústria de trabalho humano
    efeitos:
      - id: e10
        ordem: 1
        efeito: Gravar o próprio corpo executando tarefa vira ocupação remunerada em escala global
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: A cadeia de dado de robô herda o passivo trabalhista da anotação de dado, e a proposta de classificar o trabalhador de demonstração chega antes da regulação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: O Brasil entra na cadeia como fornecedor de demonstração e de diversidade de ambiente doméstico, não como fabricante de corpo nem treinador de modelo
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Quem projeta interação passa a projetar a sessão de captura, escrevendo o roteiro do que a pessoa faz, quantas vezes e com que variação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: Direção de demonstração aparece como função nos estúdios de dado, parente da direção de captura de movimento e não da anotação
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: O gesto gravado vira ativo com dono, e a pergunta de quem é o jeito de executar uma tarefa recebe resposta contratual antes de receber resposta jurídica
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Contrato de captura passa a trazer cláusula de uso derivado, como já ocorre com voz e imagem de performer
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Entidade de representação de performer reivindica o gesto de trabalho como categoria negociável, depois de já ter negociado voz e captura de movimento
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Dado sintético gerado por modelo de mundo é vendido como substituto do dado humano antes de ser equivalente, porque é a única forma de fechar a conta de custo
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A proporção entre sintético e real vira número declarado do produto, como percentual de material reciclado em embalagem
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Comprador de robô passa a auditar a proveniência do dado de treino e não apenas o desempenho entregue
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: O custo de coletar demonstração não cai como caiu o custo de computação, porque o gargalo é tempo de corpo humano em tempo real
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A vantagem se concentra em quem já tem frota em campo gerando trajetória de operação, e o entrante sem frota compra dado em vez de coletar
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Robô barato de nicho vira estratégia de coleta e é vendido abaixo do custo para gerar trajetória, como aplicativo grátis foi vendido para gerar dado de comportamento
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: Um agente generalista opera qualquer mundo 3D pela tela, sem acesso ao código
    efeitos:
      - id: e14
        ordem: 1
        efeito: Jogo, simulador e painel de operação viram o mesmo tipo de lugar para a máquina, porque o agente entra por pixel e teclado e não por interface programática
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Estúdio passa a decidir se o jogo é território de treino de agente e escreve isso nos termos de uso, como já fez com raspagem de texto
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: O termo de uso do jogo passa a operar como licença de currículo de treino, e o catálogo antigo do estúdio vira ativo de dado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: "Design de nível ganha segunda leitura: além de curva de dificuldade para pessoa, currículo de habilidade para agente"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: Aparecem mundos feitos só para treinar agente, que nenhuma pessoa joga, num terceiro gênero que não é simulador técnico nem jogo
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: O agente que joga vira instrumento de teste de jogo antes de virar companheiro de jogo
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: O controle de qualidade de jogo se reorganiza em torno de escrever objetivo em linguagem em vez de escrever caso de teste
            sinal: medio
            prazo: 2030
            confianca: media
          - id: e15.2
            ordem: 2
            efeito: Jogabilidade ganha uma medida de máquina, quanto de um jogo um agente genérico atravessa, e essa medida discorda da humana
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: A discordância entre percurso do agente e percurso do jogador vira diagnóstico de design, separando o que o jogo comunica por regra do que comunica por convenção cultural
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: Plataforma de jogo bloqueia agente que lê tela e injeta entrada, porque a assinatura técnica é a mesma do programa de trapaça
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: O acesso de agente a mundo comercial vira licença negociada com poucas empresas em vez de capacidade geral
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: A pesquisa aberta de agente corporificado migra para mundos abertos e gerados, e a comparação entre laboratórios perde base comum
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e17
        ordem: 1
        efeito: A presença de agente numa sessão compartilhada precisa ser declarada, e o contrato do multijogador passa a distinguir companheiro de sistema
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: Declarar o agente vira exigência de plataforma antes de virar exigência de lei, pelo mesmo caminho que a rotulagem de conteúdo gerado seguiu
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: O jogador passa a escolher a companhia por procedência declarada, e sessão só-humano vira modo de jogo com valor de mercado
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

### O que o bloco não diz

**Os mecanismos, um a um.** O YAML guarda a frase; a causa está aqui.

`e1` — porque a World API entrega splat, malha de colisão de 100–200 mil triângulos e malha
visual de ~600 mil com guias oficiais de exportação, o mundo gerado **encaixa no pipeline** sem
que ninguém precise mudar o motor; e porque a coerência de poucos minutos torna a entrega final
inviável, o encaixe acontece na etapa em que a coerência longa não é exigida — a
pré-visualização. `e1.1` deriva porque previz que já é navegável elimina a razão de existir do
blockout separado; `e1.2` porque a entrada aceita panorâmica e vídeo, o que transforma ida a campo
em captura de insumo; `e1.2.1` porque, se o lugar é o insumo, quem controla o acesso ao lugar
controla o insumo — é a mesma lógica pela qual acervo de imagem virou licença.

`e2` — porque o WorldBench mede o modelo de mundo estimando gravidade entre 0,37 e 8,93 m/s², o
mundo gerado serve para **variar a aparência** (o que é exatamente o papel do Cosmos Transfer) e
não para **fixar o parâmetro**. Isso não é opinião: é a diferença entre aumento de dado e
substituição de simulador. `e2.1` deriva porque, existindo uma discrepância dessa ordem e um
comprador que precisa saber dela, aparece quem meça — e o GAUGE já é a prova de conceito do
método aplicado a motor de física. `e2.2` deriva de `e2.1`: o que se mede vira o que se
contrata.

`e3` (retroação) — porque geração autoregressiva é custo *por sessão*, e asset renderizado é custo
*por produção*; a economia do videogame vive de amortizar produção em milhões de sessões. Um mundo
que custa a cada minuto de jogo inverte essa economia. `e3.1` é a resposta racional do estúdio, e
`e3.1.1` é a consequência: o modelo de mundo cabe na autoria e não na execução. **Este ramo é o
que mais ameaça R1 e por isso está aqui.**

`e4` — porque a limitação (poucos minutos) deixa de ser limitação quando a sessão é curta por
projeto. Instalação e experiência ao vivo já operam em sessões de 3 a 10 minutos.

`e5` — porque GR00T N1.6 saiu com licença comercial e π0 com pesos abertos, o comportamento passa
a ser componente de terceiro; e componente de terceiro reorganiza contrato. `e5.1` deriva da
separação de camadas; `e5.1.1` deriva de `e5.1` porque, separadas as camadas, a prova de causa
exige o dado de treino, que é segredo comercial — o litígio vira disputa de acesso. `e5.2` deriva
porque, havendo política única e corpos muitos, o gargalo vira a tradução entre eles, e gargalo
com demanda vira mercado. `e5.2.1` é a extensão: se o corpo é adaptável, o ambiente também é, e a
arquitetura entra na conta — o que a literatura de galpão "automation-ready" já faz por outro
caminho (piso superplano, malha estrutural regular, largura de corredor).

`e6` — porque LIBERO-Plus e RoboGate demonstraram que o número de benchmark não informa sobre
implantação, e porque quem compra precisa de um número que informe. `e6.1` deriva do achado
específico de RoboGate (97,65 → 0 **entre simuladores**): a exigência natural do comprador é testar
fora do simulador de treino. `e6.1.1` deriva de `e6.1` por conflito de interesse: quem treina no
mesmo simulador em que testa não pode atestar. `e6.2` é a consequência comunicacional.

`e7` — porque o LIBERO-Plus mostra que a insensibilidade à linguagem vem de os modelos **ignorarem
a instrução**, o produto que se anuncia hoje ("fale com o robô") não é sustentado pela medida.
`e7.1` deriva do fracasso: quem projeta interação precisa de um canal que funcione, e affordance
física funciona. `e7.1.1` é a forma provável dessa interface. `e7.2` deriva porque, sem
compreensão semântica confiável, confirmação é o único mecanismo barato de segurança.

`e8` (retroação) — porque o Regulamento de Máquinas UE 2023/1230 se aplica a partir de 20/01/2027
e cobre explicitamente máquina com aprendizado que altera comportamento ao longo do tempo, com
requisitos novos de cibersegurança. `e8.1` deriva da economia de conformidade: reavaliar custa;
congelar não. `e8.1.1` é a forma que a aprendizagem sobrevive sob essa restrição. `e8.2` deriva de
o humanoide ser, por construção, dinamicamente estável — o objeto exato do rascunho ISO/WD
25785-1.

`e9` — porque a política generalista é boa o bastante para uma cena ensaiada e insuficiente para
uma linha de produção, e porque o dado de embarque confirma: mais de 60% dos humanoides do 1º
semestre de 2026 foram para entretenimento, performance, produção de dado e pesquisa, contra 13%
em manufatura. `e9.1` deriva porque o que se contrata para cena já tem forma de contrato de
performance (pauta, ensaio, diária) e o mercado de aluguel de robô para evento já existe.
`e9.1.1` é o efeito estético e tem um retorno perverso: se o movimento é otimizado para a câmera,
ele entra no dado de treino do próximo modelo. `e9.2` deriva da distância entre demo e produto,
que é o problema clássico do vídeo de robótica.

`e10` — porque o dado só existe se um corpo o produzir, a produção é trabalho, e trabalho em
escala é ocupação. Já é: milhares de pessoas em mais de 50 países a ~US$ 15/h. `e10.1` deriva por
analogia direta com a cadeia de anotação, e a proposta de classificação já foi escrita.
`e10.1.1` é a leitura brasileira: o país tem 30 mil robôs industriais e densidade abaixo de 50 por
10 mil trabalhadores — não compete em corpo nem em modelo, mas tem mão de obra e diversidade de
ambiente doméstico, que é exatamente o insumo escasso. `e10.2` deriva porque coleta em escala
exige roteiro, e roteiro de comportamento humano é projeto de interação. `e10.2.1` nomeia a função
resultante — e a nomeia com nome concreto, para não cair no anti-padrão "surge uma nova
profissão".

`e11` — porque voz e imagem já percorreram esse caminho, e o gesto é o próximo item da lista com
valor econômico e sem regime. `e11.1` deriva do contrato antes da lei, que foi a sequência de voz.
`e11.1.1` deriva de quem já tem organização para negociar: entidades de performer, não sindicatos
industriais.

`e12` — porque a conta de custo de `e13` não fecha, e a única saída barata é sintetizar. `e12.1`
deriva de comprador exigindo saber; `e12.1.1` é a auditoria correspondente.

`e13` (retroação) — porque menos de 200 demonstrações por trabalhador por dia é um teto físico, e
rig de US$ 50 a 150 mil é um teto de capital; nenhum dos dois desce com lei de Moore. `e13.1`
deriva porque frota em operação gera trajetória como subproduto de graça — vantagem estrutural, não
de execução. `e13.1.1` é a estratégia previsível de quem quer frota sem ter mercado: subsidiar o
corpo para colher o dado.

`e14` — porque o SIMA 2 entra por pixel, teclado e mouse e generaliza para jogos que não viu e
para mundos gerados pelo Genie 3, o que apaga a distinção entre os tipos de mundo. `e14.1` deriva
porque estúdio que percebe que o próprio catálogo é currículo de treino escreve isso em contrato —
a sequência foi exatamente essa com texto na web. `e14.1.1` é o desdobramento econômico. `e14.2`
deriva de o design de nível já ser desenho de currículo (só que para gente); `e14.2.1` é o gênero
que nasce quando o currículo se descola do público.

`e15` — porque teste de jogo é o uso em que erro é barato e cobertura é o valor, e agente
generalista cobre percurso sem script. `e15.1` deriva da mudança de artefato de trabalho.
`e15.2` deriva porque, havendo agente, há métrica de agente; `e15.2.1` porque a discordância entre
as duas métricas isola justamente o que o jogo comunica culturalmente.

`e16` (retroação) — porque a telemetria anti-cheat não distingue um agente de pesquisa de um bot de
trapaça: ambos leem quadro e injetam entrada. `e16.1` deriva da solução conhecida — licenciar em
vez de proibir — e `e16.1.1` é o custo científico: sem base comum, comparação entre laboratórios
degrada.

`e17` — porque, uma vez que o agente é bom o bastante para ser companhia, ele entra em sessão
compartilhada e a procedência do outro jogador vira informação relevante. `e17.1` deriva do
caminho já percorrido pela rotulagem de conteúdo gerado (plataforma antes de lei); `e17.1.1` é a
consequência de mercado.

### Classes de referência usadas para os prazos

Prazo sem classe de referência é chute; aqui estão as usadas.

| Ramo | Classe de referência | O que ela levou | Prazo derivado |
|---|---|---|---|
| `e1`, `e1.1` | Fotogrametria em produção de jogo: *The Vanishing of Ethan Carter* (2014) → prática padrão em AAA por volta de 2019-2020 | ~5-6 anos de demo a padrão | mundo gerado como previz em 2027; blockout deslocado em 2029 |
| `e2`, `e2.1` | Middleware de física: Havok (1998) → onipresente por volta de 2005 | ~7 anos até virar exigência de compra | verificação de física como camada em 2029 |
| `e5`, `e5.1` | Motor de jogo licenciado: estúdios param de escrever motor próprio entre 2005 e 2012 | ~7 anos para o comportamento virar componente de terceiro | corpo compatível com política de terceiro em 2028 |
| `e7`, `e7.1` | Assistente de voz: Siri (2011) → onipresente em telefone por volta de 2014, **e ainda não confiável para tarefa composta em 2026** | 3 anos para estar em todo lugar; 15 anos e ainda não resolve tarefa longa | promessa vendida em 2027; recuo para affordance física em 2029 |
| `e8`, `e8.2` | Robô colaborativo: ISO/TS 15066 (2016) → absorvida pela ISO 10218-2 (2025) | 9 anos de maturação normativa | congelamento de política em 2029; certificado como gargalo em 2030 |
| `e9` | Drone de consumo: Phantom (2013) → uso profissional de mídia consolidado ~2016 | ~3 anos do objeto novo à profissão de imagem | corpo robótico contratado como performer em 2028 |
| `e10`, `e13` | Indústria de anotação de dado: Mechanical Turk + ImageNet (2009) → Scale AI (2016) → cadeia madura ~2020 | ~10 anos de necessidade a indústria; aqui a necessidade começou em ~2023 | ocupação em escala em 2027; concentração por frota em 2030 |
| `e14.1`, `e16.1` | Raspagem de texto para modelo: ChatGPT (nov/2022) → primeiros acordos de licença (jul/2023, dez/2023) e onda de bloqueio em `robots.txt` (2023-2024) | ~12 a 18 meses do uso visível à resposta contratual | termos de uso em 2030 e licença negociada em 2030, contados a partir do acesso amplo ao agente, que ainda não ocorreu |
| `e14`, `e17` | Veículo autônomo: demo Waymo (2015) → serviço pago em escala (2023-2026) | 8 a 11 anos de demo a operação | agente operando mundo comercial em 2029; declaração em sessão em 2030 |
| `e6`, `e6.1` | Certificação de segurança automotiva (Euro NCAP, 1997) → critério de compra ~2003 | ~6 anos para o teste independente virar decisão de compra | bancada como produto em 2028; exigência de teste cruzado em 2030 |

**Nota de honestidade sobre `e14.1` e `e16.1`.** A classe de referência da raspagem dá 12 a 18
meses — mas ela conta a partir de *uso amplo e visível*, e o SIMA 2 segue em preview fechado. O
relógio ainda não começou. Por isso o prazo é 2030 e não 2027: 2028 para acesso amplo (que pode
não vir) mais 18 meses de resposta contratual.

### Cruzamentos

**Convergência 1 — o mundo gerado é a mesma peça para mídia e para robô, e isso é o achado mais
valioso deste mapa.** `e1` (R1, estúdio adota mundo gerado como previz) e `e2` (R1) já dividem a
raiz, mas a convergência real é entre `e1.2` (captura de referência no local vira insumo de
produção) e `e5.2.1` (o prédio entra na lista de corpos a adaptar): **o mesmo levantamento
espacial serve para gerar o cenário e para preparar o ambiente para o robô.** Quem faz captura de
locação para produção audiovisual e quem faz levantamento para implantação de frota estão
produzindo o mesmo ativo com nomes diferentes. Este é o ponto em que o tema encosta no tema 10
(capturar o mundo real em 3D) sem ser ele.

**Convergência 2 — duas raízes chegam à mesma exigência de proveniência.** `e12.1.1` (R3:
comprador audita a proveniência do dado de treino) e `e6.1` (R2: comprador exige teste em
simulador diferente do de treino) nascem de raízes distintas e desembocam no mesmo lugar: **o
comprador de sistema corporificado passa a comprar a cadeia, não o desempenho.** Quando duas
raízes independentes produzem a mesma pergunta, ela costuma virar norma.

**Convergência 3 — o agente e o corpo pedem a mesma declaração.** `e17` (R4: declarar agente em
sessão compartilhada) e `e9.2` (R2: distância entre demo e produto vira problema declarado)
chegam ao mesmo objeto: uma **etiqueta de procedência** aplicada a comportamento, não a conteúdo.
É a continuação natural do que a rotulagem de mídia gerada começou.

**Retroalimentação negativa — o mundo gerado sabota o próprio uso em robótica.** `e2.1` cria a
camada de verificação de física; a verificação, aplicada aos números do WorldBench, dá razão a
quem prefere o simulador autorado; isso reduz a demanda por mundo gerado em treino, que é
justamente o que financiaria a melhoria do gerador. É um ciclo que se freia: R1 depende de
melhorar exatamente aquilo que a sua própria camada de auditoria expõe.

**Retroalimentação positiva — a estética realimenta o treino.** `e9.1.1`: o humanoide comercial
otimiza movimento para a câmera; esse movimento é gravado; o dado gravado treina o próximo modelo;
o próximo modelo se move ainda mais para a câmera. É o ciclo que produz um corpo robótico
*fotogênico e mal-adaptado ao trabalho* — e ele reforça R2 na direção errada.

**Contradição não resolvida.** `e3.1.1` diz que o modelo de mundo termina o período como
ferramenta de autoria, não como motor de execução. `e14.2.1` diz que nascem mundos gerados feitos
só para treinar agente. Os dois não podem valer plenamente juntos: se o mundo gerado é congelado
em asset, ele não é gerado sob demanda para currículo; se é gerado sob demanda, o custo por sessão
de `e3` não morde. **O que decide entre eles é o custo de inferência por minuto de mundo em 2029.**
Se cair uma ordem de grandeza, vence `e14.2.1`; se cair menos que isso, vence `e3.1.1`. Registro
os dois e não resolvo.

**Contradição menor.** `e8.1` (congelar a política no embarque) contra `e13.1` (vantagem de quem
tem frota gerando dado em campo). Se a política é congelada, a frota gera dado que não pode ser
aplicado de volta sem reabrir conformidade — a vantagem existe, mas com atraso de um ciclo de
certificação. Decide entre eles o regime que a UE adotar para atualização de software em máquina
certificada, que hoje não está fechado.

### Cobertura STEEP e quem perde

| Eixo | Efeitos | Observação |
|---|---|---|
| **Social** | `e9.1.1`, `e10`, `e10.1`, `e10.1.1`, `e11.1.1`, `e17.1.1` | O eixo mais povoado depois do econômico: trabalho corporal, gesto como propriedade, companhia declarada. |
| **Tecnológico** | `e1`, `e2`, `e2.1`, `e5`, `e5.2`, `e6`, `e12`, `e14` | — |
| **Econômico** | `e3`, `e13`, `e13.1`, `e13.1.1`, `e14.1.1`, `e16.1`, `e1.2.1` | — |
| **Ecológico** | `e3` (custo de computação por minuto de mundo) | **Fica quase vazio, e registro isso.** Não encontrei base para afirmar efeito ambiental específico deste tema que não seja o efeito genérico de consumo de datacenter, que serve para qualquer tema de IA e por isso está proibido pela skill. A exceção honesta é `e3`, onde o custo energético entra pela porta econômica. |
| **Político/normativo** | `e8`, `e8.1`, `e8.2`, `e5.1.1`, `e10.1`, `e17.1` | Ancorado em normas com data (2023/1230 em 20/01/2027; ISO 10218-2:2025; ISO/WD 25785-1). |

**Quem perde, nomeadamente:**
- **O integrador de automação** (`e5.1`): perde a margem do comportamento e fica com a
  responsabilidade da montagem.
- **O artista de ambiente júnior** (`e1.1`, `e1.1.1`): a etapa por onde se entrava na indústria é
  a que some primeiro.
- **O fabricante de robô sem modelo próprio nem frota** (`e13.1`): fica preso comprando dado e
  licenciando política, sem ativo defensável.
- **O trabalhador de demonstração** (`e10`, `e10.1`): produz o insumo mais escasso da cadeia e
  captura a menor fração do valor, na mesma estrutura da anotação de dado.
- **O laboratório acadêmico sem acordo de plataforma** (`e16.1.1`): perde acesso à base comum de
  comparação.
- **A pessoa com deficiência que usa a calçada** (contexto de `e16`, ver seção 6): já é quem mais
  reclama de robô em espaço público, e é quem menos aparece nas decisões de implantação.
- **O comprador industrial de primeira onda** (`e6`, `e7`): compra pelo número de benchmark e
  descobre a curva de degradação depois.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — A medição independente de motor de física entrou em cena, e é jovem.** O GAUGE (10 de
agosto de 2026) fez o que ninguém fazia: mediu Isaac Sim, Genesis e Newton contra captura de
movimento com 16 câmeras a 180 Hz e propriedades de material medidas em bancada, normalizando pela
repetibilidade da própria medida. *O que mudaria:* se essa prática se institucionalizar, o
simulador deixa de ser ferramenta e vira instrumento de medida, com tudo o que isso traz de
calibração e rastreabilidade. *Sinal observável de crescimento:* **um pedido de compra industrial
exigindo relatório no estilo GAUGE como anexo obrigatório** — ou uma segunda equipe, independente
da Pebblous, publicando medições comparáveis com o mesmo protocolo.

**SF2 — O mundo gerado já exporta para simulador de robô.** A World API declara compatibilidade
com Isaac Sim, MuJoCo e RoboSuite ao lado de Blender, Unreal, Unity e Houdini. Isso é pequeno hoje
e é a junção entre duas indústrias. *O que mudaria:* o pipeline de produção audiovisual e o
pipeline de treino de robô passam a ser o mesmo pipeline, e quem domina um domina o outro.
*Sinal observável:* **um artigo de robótica em CoRL, RSS ou ICRA citando um formato de asset de
motor de jogo como origem do ambiente de treino** — não como curiosidade, como método.

**SF3 — Auto-melhoria sem dado humano, declarada em número de geração.** O SIMA 2 treina versões
sucessivas na experiência gerada pela versão anterior, sem realimentação humana. Hoje é uma frase
num blog. *O que mudaria:* se o número de gerações crescer e o ganho não saturar, o gargalo de
dado (R3 inteira) fica menor do que este mapa assume. *Sinal observável:* **um cartão de modelo
declarando "geração N" de autotreino com curva de desempenho por geração** — o dia em que essa
curva for publicada e não saturar, R3 perde peso.

**SF4 — A reação de acessibilidade a robô em espaço público chegou antes da regulação.** Em
Chicago, robôs de entrega foram bloqueados em duas áreas depois de colisões, obstrução de faixa e
de veículo de emergência; abaixo-assinados somam milhares de assinaturas, e defensores de direitos
das pessoas com deficiência relatam robôs parados em rebaixamento de calçada. *O que mudaria:* se
o critério de aceitação de robô em espaço público for definido por acessibilidade e não por
segurança veicular, muda o que se projeta. *Sinal observável:* **a primeira norma municipal que
exija de um robô ceder passagem em rebaixamento de calçada com métrica auditável**, e não apenas
licença de operação.

**SF5 — Uma norma específica para corpo dinamicamente estável está em rascunho.** A ISO/WD
25785-1 trata de robôs móveis industriais dinamicamente estáveis — máquinas que ficam instáveis
sem energia, que é a definição do humanoide. *O que mudaria:* o humanoide sai do vácuo normativo
(hoje encaixado por analogia em ISO 19649/IMR tipo C) e ganha regime próprio. *Sinal observável:*
**a passagem de WD para DIS**, que é quando o texto vira previsível.

**SF6 — A proposta de classificar o trabalhador de demonstração já está escrita.** O ensaio do
ISF (22/06/2026) propõe a categoria "Data Demonstration Workers" com exigência de transparência
salarial e expansão de arcabouços da OIT. *O que mudaria:* o custo do dado corporal subiria e a
cadeia migraria — o que altera `e13.1` e abre a porta para `e10.1.1`. *Sinal observável:* **uma
autoridade trabalhista nacional (ou a OIT) emitindo parecer que nomeie coleta de demonstração
teleoperada como categoria**.

### Wildcards

**W1 — Um acidente cuja causa é o simulador, não o robô.** *Mecanismo:* uma política treinada com
coeficiente de restituição errado — e o GAUGE mede o melhor motor errando 15,63 vezes a linha de
base em bola quicando, com o pêndulo de Newton devolvendo intervalo de repouso de 0 s contra 0,38 s
medidos — falha exatamente num evento de alta energia e curta duração, que é onde todos os motores
quebram. A investigação vai do robô para a política, da política para o conjunto de treino, e do
conjunto de treino para o arquivo de configuração do simulador. *Por que é improvável:* a
atribuição de causa costuma parar no último elo, e a cadeia probatória exige acesso a artefatos
que são segredo comercial de três empresas diferentes. *O que faria com o mapa:* promoveria
`e2.1` e `e6.1.1` de segunda e terceira ordem para primeira, aceleraria `e5.1.1` em anos, e
transformaria a verificação de física de camada opcional em requisito de seguro. *Sinal precoce:*
**uma intimação judicial pedindo arquivos de configuração de simulador**, ou uma seguradora
incluindo cláusula sobre proveniência de ambiente de treino.

**W2 — Um modelo de mundo aberto suficientemente bom colapsa R3.** *Mecanismo:* um gerador que
acerte parâmetro físico dentro da tolerância de uma classe de tarefas (manipulação quase estática,
por exemplo) torna a demonstração humana desnecessária **naquela classe**, e a classe é grande o
bastante para derrubar o preço do dado. *Por que é improvável:* os números do WorldBench não estão
perto — mIoU médio entre 0,26 e 0,45, gravidade estimada de 0,37 a 8,93 m/s² — e o problema não é
resolução, é ausência de estado explícito. *O que faria com o mapa:* R3 inteira vira contexto;
`e10`, `e11` e `e13` perdem força; `e12` vira o efeito central. *Sinal precoce:* **uma política
treinada com mais de 90% de dado gerado empatando com a linha de base de dado humano numa bancada
de perturbação** — e não num benchmark de sucesso.

**W3 — Um estúdio grande licencia oficialmente o próprio catálogo como ambiente de treino, com
receita declarada.** *Mecanismo:* o catálogo antigo tem custo marginal zero e nenhum uso; um
laboratório precisa de diversidade de mundo; alguém assina. *Por que é improvável:* o risco de
imagem de "meu jogo treina robô" e a complexidade de direitos de terceiros (música, atores,
marcas) dentro do jogo. *O que faria com o mapa:* `e14.1.1` sai de terceira ordem e vira fato de
2028, e o gênero de `e14.2.1` nasce com financiamento. *Sinal precoce:* **uma linha de
licenciamento de dado no relatório trimestral de uma publicadora de jogos**.

**W4 — Um país impõe registro e piso ao trabalho de demonstração corporal.** *Mecanismo:* a
proposta já existe; basta um caso de imprensa sobre condições de coleta para que uma autoridade
trabalhista aja. *Por que é improvável:* a cadeia é distribuída em mais de 50 países e a
intermediação por plataforma dificulta o enquadramento — os mesmos motivos pelos quais a anotação
de dado nunca foi regulada. *O que faria com o mapa:* o custo do dado sobe, `e12` (sintético)
acelera, `e13.1` (concentração por frota) fica mais forte, e `e10.1.1` (Brasil como fornecedor)
muda de sinal, podendo virar vantagem regulatória ou desvantagem de custo. *Sinal precoce:*
**uma ação civil pública ou uma notificação de autoridade trabalhista nomeando coleta de
demonstração**.

## 7. Contra o próprio mapa

Este mapa foi submetido à bateria do §6 da skill antes de ser entregue, e **a bateria derrubou
coisas**. O relato:

### 7.1 Pré-mortem — é 2031 e este mapa estava errado. Por quê?

**Razão 1 (a mais provável): o gargalo não era o mundo, era o corpo.** O mapa aposta que o lugar
de aprendizado é o gargalo. Pode ser que o gargalo seja mão — atuação, tato, durabilidade — e que
nenhuma quantidade de mundo bom resolva. Nesse caso R1 e R3 continuam valendo mas ficam
irrelevantes: melhora-se o treino de um corpo que não executa. *Aponta para:* `e5`, cuja confiança
foi mantida alta porque o fato (licença comercial, pesos abertos) já é observável, mas cujo efeito
derivado `e5.2` foi **rebaixado de alta para média**.

**Razão 2: o preview fechado nunca abre.** R4 inteira depende de o SIMA 2 (ou equivalente) sair da
coorte fechada. Se DeepMind mantiver o acesso restrito por razões de segurança e de relação com
estúdios, R4 vira um capítulo de história da pesquisa. *Aponta para:* toda a cadeia de R4, cujos
prazos foram **empurrados** (ver 7.3).

**Razão 3: o dinheiro sai antes de o produto chegar.** US$ 47,4 bilhões em seis meses é
característica de ciclo de capital, não de adoção. Se a curva de receita não acompanhar em 2027-28,
o financiamento da coleta de dado e do treino em escala evapora, e o que sobrevive é o que já tem
comprador — que hoje é entretenimento e defesa. *Aponta para:* `e9`, cuja confiança **subiu**
justamente por isso (é o único uso com receita hoje), e para `e10`/`e13`, cujos prazos foram
mantidos mas cuja prosa passou a registrar a dependência de capital.

### 7.2 Extrapolação linear

Marquei como "mais do mesmo, maior" três efeitos:

- **`e6.2`** (taxa de sucesso substituída por curva de degradação) era extrapolação pura: é o
  mesmo `e6` um pouco adiante. Ganhou mecanismo de não-linearidade — só muda se houver **um
  comprador com poder de compra suficiente para impor formato**, o que é um evento e não uma
  tendência — e foi **rebaixado de média para... mantido em média, mas com sinal rebaixado de médio
  para fraco**, porque hoje não existe artefato observável desse formato.
- **`e12.1`** (proporção sintético/real declarada) idem: foi **rebaixado de média para baixa**.
- **`e15.1`** (QA reorganizado em torno de objetivo em linguagem) é o mesmo `e15` amadurecendo, e
  quase foi cortado pela regra de parada (§3.9). Sobreviveu porque **muda o ator**: sai o
  engenheiro de teste e entra quem escreve especificação de comportamento. Registro que a
  fronteira é tênue.

### 7.3 Velocidade de adoção — o que foi empurrado

- **`e14`** (jogo e simulador viram o mesmo lugar): estava em **2028**, foi para **2029**. Motivo:
  a classe de referência que usei antes era a raspagem de texto (12-18 meses), mas ela pressupõe
  uso amplo e visível, e o SIMA 2 está em preview fechado desde novembro de 2025 sem calendário.
  Troquei para a classe do veículo autônomo (8-11 anos de demo a operação) e recalibrei.
- **`e14.1`** (termos de uso sobre treino de agente): **2028 → 2030**, mesmo motivo, em cascata.
- **`e16.1`** (licença negociada com poucas empresas): **2029 → 2030**, mesmo motivo.
- **`e5`** (corpo compatível com política de terceiro): estava em **2027**, foi para **2028**.
  Motivo: a classe de referência (estúdios abandonando motor próprio, ~7 anos) começa a contar do
  primeiro modelo de fundação com licença comercial, que é janeiro de 2026 — 2027 seria um ano.
- **`e2.1.1`**, **`e5.2.1`**, **`e11.1.1`** e **`e17.1.1`**: mantidos em **2032**, ou seja,
  **fora da janela do horizonte 2031**. Declarado aqui e no bloco: são quatro efeitos de terceira
  ordem que este mapa não promete ver acontecer dentro do próprio horizonte.

### 7.4 A raiz que não acontece

- **Se R1 não se concretizar** (o modelo de mundo não sai da previz): sobra R2, R3 e R4 inteiras,
  e o mapa perde `e1` a `e4` e enfraquece `e12`. O tema continua de pé — a IA física não depende
  de mundo gerado, depende de simulador, que é maduro. **R1 é a raiz mais dispensável do mapa**, e
  é a que mais interessa ao público deste mapa. Registro a tensão.
- **Se R2 não se concretizar** (a política generalista continua frágil e ninguém a adota em
  produção): o mapa perde o miolo. `e5` a `e9` caem, `e13` perde comprador, e o que sobra é R4 num
  ambiente puramente virtual. **R2 é a raiz sem a qual o mapa não é sobre IA física, é sobre
  mídia gerativa.**
- **Se R3 não se concretizar** (o dado corporal não vira indústria porque o sintético resolve):
  é o wildcard W2. `e10` a `e13` caem, R2 acelera.
- **Se R4 não se concretizar**: `e14` a `e17` caem, e o mapa fica sem a ponte com jogo — que é
  justamente a ponte com o público deste documento.

**Teste da raiz única disfarçada:** R2 e R3 são interdependentes (a política precisa do dado, o
dado só tem valor por causa da política), mas não são a mesma raiz — os atores são distintos
(fabricantes de modelo × empresas de coleta), os mecanismos são distintos (transferência entre
embodiments × economia de trabalho), e uma pode existir sem a outra (frotas próprias geram dado
sem mercado de dado). R1 e R4 compartilham a linhagem técnica (modelo generativo de mundo), mas
R4 funciona em mundo autorado — o SIMA 2 foi treinado em jogos comerciais, não em mundo gerado.
**Passa no teste.**

### 7.5 Suposições escondidas que o mapa assumia sem dizer

1. **Que os pesos abertos continuam abertos.** π0, Cosmos e GR00T estão no Hugging Face hoje. Se
   fecharem — e o precedente em linguagem existe — `e5`, `e5.2` e `e6` mudam de dono e o mapa
   inteiro vira um mapa de duopólio. **Isto é um wildcard novo que a bateria produziu e que não
   estava na seção 6;** registro aqui em vez de inflar a seção 6 depois do fato.
2. **Que a computação continua disponível ao preço atual.** `e3` depende disso e é o único efeito
   que a trata explicitamente.
3. **Que a cadeia de suprimento de corpo continua fluindo.** 86% dos embarques vêm de cinco
   fabricantes, quatro deles chineses. Restrição comercial muda os prazos de tudo em R2, e o mapa
   não modela isso.
4. **Que a plataforma continua permitindo.** R4 depende inteiramente disso, e `e16` é a única
   contrapartida.
5. **Que a medição independente sobrevive.** GAUGE, WorldBench, LIBERO-Plus e RoboGate são
   grupos pequenos sem modelo de receita. Se não houver quem pague pela auditoria, `e2.1` e `e6`
   não têm de onde nascer.

### 7.6 Viés do autor

Dois, nomeados.

**Viés 1 — apreço por auditoria.** Este mapa dá peso desproporcional à camada de medição
independente (`e2.1`, `e6`, `e6.1`, `e6.1.1`, `e12.1.1`). Cinco efeitos sobre um ator que hoje é
um punhado de grupos acadêmicos sem receita. É uma aposta estética minha — a de que "quem mede"
vira poder — e não uma projeção sustentada por adoção observada. **Correção aplicada:** `e6.2` teve
o sinal rebaixado a fraco e `e12.1` a confiança rebaixada a baixa.

**Viés 2 — desconfiança de demonstração.** Escolhi como fatos ancoradores justamente os números
que desmentem demonstrações (97,65 → 0; 94,2% → 6,6%; 43M → 0,29M FPS; gravidade 0,37-8,93). São
verdadeiros e verificáveis, mas a seleção é enviesada: **um mapa igualmente honesto poderia ter
sido construído sobre os números que funcionam** — 22 mil corpos embarcados, US$ 47,4 bilhões,
SIMA 2 generalizando para mundos que nunca viu. O mapa que sairia dali teria prazos mais curtos.
Registro que a escolha é minha e é discutível.

### 7.7 Calibração

Contagem final, depois dos rebaixamentos: **ordem 1 com 7 altas, 10 médias e nenhuma baixa;
ordem 2 com nenhuma alta, 20 médias e 7 baixas; ordem 3 com nenhuma alta, nenhuma média e 20
baixas.** A distribuição cai monotonicamente com a ordem, como exige a skill: a confiança alta
desaparece já na segunda ordem e a terceira é integralmente baixa.

A primeira contagem, antes desta rodada de correção, dava **9 altas na primeira ordem**. Duas
caíram, e caíram por coerência interna com o que a seção 8 admite: não dá para escrever, na seção
8, que `e9` repousa sobre uma única fonte comercial de metodologia não pública e, na roda, marcar
`e9` com confiança alta. O contador do `verificar.py` na seção 12 confirma os números finais.

### 7.8 Registro de alterações — o que a bateria derrubou

| id | antes | depois | por quê |
|---|---|---|---|
| `e5.2` | confianca: alta | **media** | Pré-mortem razão 1: se o gargalo for atuação e não mundo, o mercado de adaptação de corpo é pequeno. (R2) |
| `e6.2` | sinal: medio | **fraco** | Extrapolação linear: não há hoje nenhum artefato observável de "curva de degradação declarada". (R2) |
| `e12.1` | confianca: media | **baixa** | Extrapolação linear: é `e12` adiante, e o análogo (percentual reciclado) levou décadas. (R3) |
| `e14` | prazo: 2028 | **2029** | Classe de referência trocada: raspagem (12-18 meses) pressupõe uso amplo; SIMA 2 está fechado. Usada a classe do veículo autônomo. (R4) |
| `e14.1` | prazo: 2028 | **2030** | Cascata de `e14`. (R4) |
| `e16.1` | prazo: 2029 | **2030** | Cascata de `e14`. (R4) |
| `e5` | prazo: 2027 | **2028** | Classe de referência (motor licenciado, ~7 anos) contada a partir de jan/2026 não fecha em um ano. (R2) |
| `e2.2` | confianca: media | **baixa** | Depende de `e2.1`, que ainda não tem ator com receita (suposição escondida 5). (R1) |
| `e5` | confianca: alta | **media** | Calibração (7.7): é projeção para 2028 apoiada em licença e pesos abertos, não em adoção observada em produção. (R2) |
| `e9` | confianca: alta | **media** | Calibração (7.7) e coerência com a seção 8, item 3: o efeito repousa numa única casa de pesquisa de mercado com método não público, que diverge de outra em ~15%. (R2) |
| **removido: "Escolas de design de jogos reorganizam o currículo em torno de mundo gerado"** | efeito de 2ª ordem sob `e1` | **cortado** | Anti-padrão explícito da skill: "cursos reorganizam o currículo" serve para qualquer tema. Sem nome de curso e sem mecanismo, sai. Vai para a seção 12. (R1) |
| **removido: "Surge a profissão de curador de mundos"** | efeito de 2ª ordem sob `e14` | **cortado** | Mesmo anti-padrão. O que sobreviveu foi `e10.2.1`, que nomeia a função (direção de demonstração) e a ancora num ofício existente (direção de captura de movimento). (R4) |
| **removido: "Reguladores criam categoria jurídica para agente corporificado"** | efeito de 1ª ordem sob R2 | **cortado e substituído** | Anti-padrão. Substituído por `e8`, que nomeia o regulamento (UE 2023/1230), a data (20/01/2027) e o mecanismo (cobertura explícita de máquina com aprendizado). (R2) |
| **removido: "O mercado de trabalho físico se reorganiza"** | efeito de 3ª ordem sob `e10` | **cortado** | Anti-padrão puro. O que restou é `e10.1.1`, com país, insumo e posição de cadeia nomeados. (R3) |

**Cota cumprida:** pelo menos um efeito rebaixado ou removido em cada uma das quatro raízes —
R1 (`e2.2` rebaixado, um removido), R2 (`e5.2`, `e6.2`, `e5` rebaixados, um removido), R3
(`e12.1` rebaixado, um removido), R4 (`e14`, `e14.1`, `e16.1` empurrados, um removido).

## 8. O que a máquina errou

Sou a máquina. O que fiz de errado nesta rodada, com o motivo da desconfiança:

1. **Aceitei "43 milhões de FPS" como fato antes de abrir a correção.** O número apareceu num
   resumo de busca com a autoridade de um resultado técnico. Só ao abrir a análise independente vi
   que a correção metodológica derruba para **0,29 milhão de FPS — 150 vezes menos** — e que em
   tarefas com contato rico o Genesis fica *atrás* de ManiSkill. Pior: a fonte da correção é um
   **Substack de dezembro de 2024**, não um artigo revisado. Estou citando um blog para desmentir
   um blog, e o leitor precisa saber disso. Se eu tivesse parado no primeiro número, o mapa teria
   um efeito inteiro sobre "simulação praticamente gratuita" que não se sustenta.

2. **Quase datei o ensaio da a16z como 2026.** A busca o devolveu numa consulta explicitamente
   sobre 2026 e o texto discute produtos de 2026. A data real é **3 de abril de 2025**, e boa parte
   do que ele descreve como futuro já aconteceu. Um mapa que citasse esse ensaio como leitura atual
   estaria com o relógio um ano e meio atrasado. Corrigido na seção 11.

3. **Duas casas de pesquisa discordam em 15% sobre o mesmo semestre, e escolhi uma.** Counterpoint
   diz 22 mil humanoides embarcados no 1º semestre de 2026; a Smart Analytics Global diz 19,1 mil.
   Usei a Counterpoint porque abriu e traz o recorte por aplicação — que é o dado do qual `e9`
   depende inteiramente. Mas a metodologia não é pública em nenhuma das duas, e **`e9`, um efeito
   de primeira ordem com confiança alta, repousa sobre uma única fonte comercial com método não
   divulgado.** É a peça mais frágil do mapa e não parece frágil.

4. **O `RoboGate` é de autor único e não achei replicação independente.** O número mais dramático
   do mapa (97,65% → 0% cruzando de MuJoCo para Isaac Sim) vem de um pré-print com um único autor
   listado, em versão 4. Um benchmark industrial de 50 mil experimentos com autoria única é
   incomum. Mantive porque o achado é coerente com o LIBERO-Plus, que é multi-institucional e mede
   o mesmo fenômeno por outro caminho — mas **emparelhei os dois deliberadamente para não deixar o
   mapa apoiado só no número forte**.

5. **Citei "Egocentric-1M, ~1 milhão de horas, abril de 2026" e não abri o cartão do conjunto.**
   O número veio de uma página de centro de aprendizagem de fornecedor. Por isso ele **não sustenta
   nenhum efeito** neste mapa e ficou restrito à seção 12, com a ressalva. É exatamente o tipo de
   número redondo e conveniente que eu deveria desconfiar — e desconfiei tarde, depois de já tê-lo
   escrito uma vez no rascunho da seção 3.

6. **Escrevi "os modelos ignoram a instrução" com mais firmeza do que o artigo autoriza.** O
   LIBERO-Plus diz que a insensibilidade à variação de linguagem *não decorre* de compreensão
   superior, e sim de os modelos desprezarem a instrução — mas isso é uma inferência dos autores a
   partir de um padrão de erro, não uma ablação que prove causalidade. `e7` está construído sobre
   essa frase. Suavizei no texto ("decidem por posição, não por semântica") mas o efeito continua
   apoiado numa leitura forte de um resultado.

## 9. Três cenários para 2031

**Provável — o mundo gerado ficou na autoria, e o corpo ficou no palco.**
Em 2031 o modelo de mundo é ferramenta de pré-produção madura: nenhum estúdio grande entrega um
jogo em mundo gerado em tempo real, mas nenhum estúdio grande começa um projeto sem gerar o espaço
antes. A etapa de blockout sumiu do cronograma e a briga de prazo virou polimento. Do lado físico,
a política de fundação de terceiro é padrão em corpos de pesquisa e em performance, e é exceção em
linha de produção — o certificado, não a demonstração, decide a compra, e a maioria dos
fabricantes congela a política no embarque para não reabrir conformidade. A indústria de dado
corporal existe, é grande, é mal paga e não é regulada. O humanoide continua sendo, principalmente,
um objeto de mídia: performa, atrai câmera, coleta dado. *Sinal precoce de que estamos entrando
aqui:* uma publicadora de jogos anunciando geração de mundo como etapa oficial de pipeline **e**
um fabricante de humanoide anunciando política congelada no embarque, no mesmo semestre.

**Desejável — a proveniência virou infraestrutura, e quem demonstra é reconhecido.**
Em 2031 comprar um sistema corporificado é comprar a cadeia: ficha de física do ambiente de
treino, curva de degradação sob perturbação medida por um terceiro que não treinou o modelo, e
proveniência declarada do dado (quanto é humano, quanto é gerado, sob que contrato). O trabalho de
demonstração corporal é uma ocupação com nome, piso e cláusula de uso derivado, negociada como voz
e captura de movimento já foram. O Brasil aparece nessa cadeia não como cliente final, mas como
fornecedor qualificado de demonstração e de diversidade de ambiente — com contrato, não com
plataforma. Para chegar aqui foi preciso que a medição independente encontrasse quem a pagasse
(comprador industrial, seguradora ou norma), e que uma autoridade trabalhista nomeasse a
categoria antes do primeiro escândalo, não depois. *Sinal precoce:* um pedido de compra público
exigindo relatório de fidelidade física do ambiente de treino como anexo — e um parecer de
autoridade trabalhista sobre coleta de demonstração.

**Indesejável — a demonstração venceu a medida.**
Em 2031 a compra de robô se decide por vídeo. As bancadas de perturbação existiram, não acharam
quem as pagasse, e viraram artigo citado e não usado. A "taxa de sucesso" de benchmark continua no
material de venda, e a curva de degradação continua nos apêndices. O primeiro acidente grave
acontece num ambiente onde três empresas se atribuem responsabilidade mutuamente e nenhuma abre o
conjunto de treino; o processo se arrasta e a resposta regulatória, quando vem, é restritiva e
grosseira — proíbe classes inteiras de operação em vez de exigir evidência. O dado corporal segue
sendo produzido por trabalhadores sem categoria, em plataformas, e a estética do humanoide converge
para o que fotografa bem, realimentando o treino com um movimento que serve à câmera e não à
tarefa. *Sinal precoce:* a primeira bancada independente relevante encerrando as atividades por
falta de financiamento — ou um ano inteiro sem nenhuma publicação de auditoria de motor de física
no estilo GAUGE.

## 10. O experimento

### O que é

**"O mesmo mundo, três físicas."** Uma bancada pequena que apresenta o **mesmo evento físico
simples** — uma bola descendo uma rampa e batendo numa caixa; ou uma caixa sendo empurrada até o
ponto de tombar — em três fontes:

- **(A) motor autorado**: MuJoCo ou MetaDrive, com os parâmetros escritos por nós e visíveis;
- **(B) mundo gerado**: o mesmo cenário produzido por modelo de mundo (Marble/World API a partir de
  uma foto do arranjo real, ou vídeo interativo gerado), **sem nenhum parâmetro legível**;
- **(C) vídeo do evento real**, filmado na sala com uma régua e um cronômetro no quadro.

A turma vê A e B, **aposta** no desfecho (onde a bola para, se a caixa tomba, em quanto tempo), e
só depois vê C e a medida. Registra-se: erro de cada fonte contra a medida real, e a **confiança
declarada** de cada pessoa antes de ver C.

### Que pergunta sobre o futuro ele ajuda a responder

**O mundo gerado já é lugar de aprender, ou ainda é só lugar de olhar?** É a pergunta que separa
R1 de virar raiz ou contexto — e é a mesma pergunta que separa `e2` de `e12`. Em escala reduzida,
é o que o WorldBench faz com 469 vídeos e o GAUGE faz com 16 câmeras: aqui fazemos com uma rampa,
um celular e uma turma.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa **modelo de mundo com exportação** (World API, disponível desde 21/01/2026, ou geração de
vídeo interativo). **Não dá para fazer com tecnologia madura pelo motivo exato do experimento:**
num motor convencional o parâmetro físico é um número que eu escrevo e leio — não há o que
descobrir. O ponto do experimento é que o mundo gerado **não tem parâmetro legível**, e a única
forma de saber que física ele implementa é medir o desfecho. A ausência de parâmetro é a
tecnologia emergente aqui.

### O que a turma faz quando testa isso em sala

1. Cada pessoa vê A e B em ordem aleatória, sem saber qual é qual, e responde: **qual é o gerado?**
   (mede se dá para distinguir olhando).
2. Aposta no desfecho de cada um, com confiança de 1 a 5.
3. Vê C e a medida real; calcula o erro de A e de B.
4. Discussão dirigida: *quem errou mais, a fonte ou a pessoa?* E: *se você fosse treinar um agente,
   qual fonte usaria, e para quê?*
5. Extensão, se houver tempo: rodar uma política simples (um controlador de empurrar) treinada em A
   e em B, e medir qual transfere melhor para C.

### O resultado que faria o autor mudar de ideia

**Se o erro de B (mundo gerado) contra a medida real ficar na mesma ordem de grandeza do erro de A
(motor autorado) contra a medida real**, a premissa central de R1 — "gerar não é medir" — cai. Nesse
caso `e2` deve ser reescrito (o mundo gerado passa de aumento a substituto), `e2.1` e `e12` perdem
razão de ser, e o prazo de `e14.2.1` (mundos feitos só para treinar agente) deve ser puxado para
dentro do horizonte. O contrário também vale como aprendizado: **se a turma não conseguir
distinguir A de B olhando, mas os erros de B forem uma ordem de grandeza maiores**, então o
experimento demonstrou, em quinze minutos e com uma rampa, exatamente o que o WorldBench
demonstrou com 469 vídeos — que realismo visual e fidelidade física são coisas diferentes, e que
a primeira é justamente o que impede de perceber a ausência da segunda.

## 11. Fontes

Só entra o que foi aberto nesta rodada (11/09/2026). Links testados; os que não respondem a
cliente automatizado estão registrados na seção 12, não aqui.

1. **Counterpoint Research — "Global Humanoid Robot Shipments Soar Nearly 300% YoY in H1 2026"**
   (19/08/2026) · `https://counterpointresearch.com/en/insights/global-humanoid-robot-shipments-soar-nearly-300-percent-yoy-in-h1-2026`
   Sustenta: 22.000+ embarques no 1º sem./2026, previsão de 50.000 no ano, participação por
   fabricante (AGIBOT 43%, Unitree 31%), e — o dado central de `e9` — a composição por aplicação
   (>60% entretenimento/performance + dado/pesquisa; 13% manufatura).
   *Confiabilidade:* casa de pesquisa de mercado estabelecida, mas **metodologia não pública** e
   divergente de outra casa em ~15% para o mesmo período. Tratar como ordem de grandeza.

2. **Google DeepMind — "SIMA 2: an agent that plays, reasons and learns with you in virtual 3D
   worlds"** (13/11/2025) · `https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/`
   Sustenta R4 inteira: operação por pixel/teclado sem acesso à mecânica, jogos de treino e jogos
   retidos, generalização para mundos do Genie 3, auto-melhoria sem dado humano, e os limites
   declarados (horizonte longo, memória, controle fino).
   *Confiabilidade:* blog do laboratório que produziu o sistema — parte interessada. Os limites
   declarados são mais confiáveis que os ganhos declarados.

3. **Google DeepMind — "Genie 3: A new frontier for world models"** (05/08/2025) ·
   `https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/`
   Sustenta: 720p, 24 fps, consistência de poucos minutos, memória visual de ~1 minuto,
   *promptable world events*, teste com o agente SIMA, e as limitações (ação do agente, multiagente,
   geografia, texto, duração).
   *Confiabilidade:* mesma ressalva de parte interessada; as limitações são autodeclaradas e por
   isso provavelmente conservadoras.

4. **WorldBench: Benchmarking Physical Understanding of World Models by Isolating Physics
   Concepts** — arXiv 2601.21282v2 (18/08/2026; UCLA, Yale, Sony AI, Army Research Lab) ·
   `https://arxiv.org/html/2601.21282`
   Sustenta o mecanismo central de `e2` e de W2: mIoU 0,26–0,45; gravidade estimada 0,37–8,93 m/s²
   contra 9,81; viscosidade 0,22–50+ Pa·s; conclusão de que os modelos não têm consistência física
   para gerar interação confiável.
   *Confiabilidade:* alta — quatro instituições, protocolo descrito, 748 vídeos, e a conclusão é
   contrária ao interesse comercial dos modelos testados. Pré-print.

5. **ROBOGATE: Adaptive Failure Discovery for Safe Robot Policy Deployment** — arXiv 2603.22126v4
   (mar–abr/2026) · `https://arxiv.org/abs/2603.22126`
   Sustenta `e6`, `e6.1`, `e6.1.1`: GR00T N1.6 com 97,65% no LIBERO (MuJoCo) e 0% em 68 cenários
   industriais no Isaac Sim; 50.000+ experimentos; quatro embodiments.
   *Confiabilidade:* **média-baixa.** Pré-print de autor único sem replicação independente que eu
   tenha encontrado. Usado emparelhado com a fonte 6.

6. **LIBERO-Plus: In-depth Robustness Analysis of Vision-Language-Action Models** — arXiv
   2510.13626v1 (15/10/2025; NUS, Fudan, Tongji) · `https://arxiv.org/html/2510.13626v1`
   Sustenta `e6`, `e7` e o diagnóstico da seção 3.2: 10.030 tarefas, 7 dimensões de perturbação, 10
   modelos; OpenVLA 76,5% → 1,1% (câmera); π0 94,2% → 6,6% (estado inicial); e a leitura de que os
   modelos ignoram a instrução em linguagem.
   *Confiabilidade:* alta — multi-institucional, dez modelos, dimensões isoladas. Pré-print.

7. **GAUGE: Isaac Sim, Genesis, Newton vs. Measured Physics** — Pebblous (10/08/2026) ·
   `https://blog.pebblous.ai/report/physics-engine-reality-gap-gauge/en/`
   Sustenta a seção 3.2, `e2.1` e W1: 16 câmeras a 180 Hz, materiais medidos em bancada,
   normalização pela repetibilidade; bola quicando 15,63×; pano 8,54×–128,26×; espuma
   15,26×–26,57×; pêndulo de Newton com repouso de 0 s contra 0,38 s.
   *Confiabilidade:* média-alta no método (protocolo explícito, medida física real), média na
   independência — é o blog técnico de uma empresa que vende qualidade de dado, portanto com
   interesse em que o problema exista.

8. **"How fast is the new hyped Genesis simulator?" — Stone Tao** (20/12/2024) ·
   `https://stoneztao.substack.com/p/the-new-hyped-genesis-simulator-is`
   Sustenta o item 1 da seção 8 e o argumento de que benchmark de simulador já enganou em ordem de
   grandeza: 43 M FPS declarados → 0,29 M FPS corrigidos (150×), com as quatro falhas
   metodológicas nomeadas.
   *Confiabilidade:* blog de pesquisador da área (autor do ManiSkill — **parte interessada num
   simulador concorrente**, e isso precisa constar). O cálculo é reproduzível e foi discutido
   publicamente na *issue* #181 do repositório do Genesis.

9. **TechCrunch — "Collecting robot training data is dirty, unglamorous work. Some AI labs are
   already paying XDOF to do it"** (17/06/2026) ·
   `https://techcrunch.com/2026/06/17/collecting-robot-training-data-is-dirty-unglamorous-work-some-ai-labs-are-already-paying-xdof-to-do-it/`
   Sustenta R3: XDOF com US$ 70 mi, ~60 pessoas, 20 clientes; conjunto ABC com 130 mil trajetórias;
   origem no GELLO; a frase do CEO sobre a ausência de dado em escala.
   *Confiabilidade:* jornalismo setorial com acesso à empresa; os números vêm da empresa e não
   foram auditados.

10. **ISF Voices 2026 — "The Robotics Data Gap", Phillip An** (22/06/2026) ·
    `https://scsp222.substack.com/p/isf-voices-2026-the-robotics-data`
    Sustenta `e10`, `e10.1`, `e13`, SF6: rig de US$ 50–150 mil; <200 demonstrações/trabalhador/dia;
    ~US$ 15/h; centros chineses (Pequim >10.000 m²; Zigong 3 mi de registros/ano); proposta de
    categoria "Data Demonstration Workers".
    *Confiabilidade:* ensaio de política com viés geopolítico declarado (competição EUA–China).
    Os números operacionais são plausíveis e batem com a fonte 9; a moldura estratégica é opinião.

11. **NVIDIA Newsroom — "NVIDIA Releases New Physical AI Models as Global Partners Unveil
    Next-Generation Robots"** (05/01/2026) ·
    `https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots`
    Sustenta a seção 3.1 e `e5`: Cosmos Predict/Transfer 2.5, Cosmos Reason 2, GR00T N1.6, Isaac
    Lab-Arena, OSMO, Jetson T4000; modelos no Hugging Face; parceiros (Boston Dynamics,
    Caterpillar, Franka, LG, NEURA, AGIBOT).
    *Confiabilidade:* release corporativo. Serve para datar e nomear lançamentos; **não serve para
    desempenho.**

12. **a16z — "AI is learning to build reality"** (03/04/2025) ·
    `https://a16z.com/ai-is-learning-to-build-reality/`
    Sustenta a seção 2 e os limites técnicos de R1: ausência de memória persistente em abordagem de
    vídeo ("vire 180° e volte, a paisagem mudou"), escassez de dado 3D de qualidade, Oasis com 1
    milhão de usuários em três dias.
    *Confiabilidade:* fundo de capital de risco escrevendo sobre a própria tese — otimista por
    construção. **Data real: abril de 2025**, ver seção 8 item 2. Usada só para o diagnóstico
    técnico, não para prognóstico.

13. **"Embodied AI in Action: Insights from SAE World Congress 2026"** — arXiv 2605.10653v1
    (12/05/2026) · `https://arxiv.org/abs/2605.10653`
    Sustenta o enquadramento normativo da seção 4/R2: catálogo de normas aplicáveis a sistema
    corporificado (ISO 21448:2022, SAE J3016:2021, ISO 13482:2014) e o tratamento de sim-to-real
    como lacuna de confiança, não só técnica.
    *Confiabilidade:* relato de congresso com sete autores de indústria e do NIST; é síntese de
    discussão, não resultado experimental.

14. **EVS International — "Industrial Robot Safety Standards: ISO 10218, ISO/TS 15066 & CE
    Marking (2026)"** (21/04/2026) ·
    `https://www.evsint.com/industrial-robot-safety-standards-iso-10218-ce-marking-2026/`
    Sustenta `e8`, `e8.2`: ISO 10218-2:2025 absorvendo a ISO/TS 15066; e o **Regulamento de
    Máquinas UE 2023/1230 plenamente aplicável em 20/01/2027**, com escopo explícito para máquina
    com aprendizado que altera comportamento e requisitos novos de cibersegurança.
    *Confiabilidade:* página comercial de empresa de conformidade — **interesse em que a
    conformidade pareça complexa.** As datas e números de norma são verificáveis contra a ISO e o
    Jornal Oficial da UE; o comentário não é.

15. **Physical Intelligence — "Open Sourcing π0"** · `https://www.pi.website/blog/openpi`
    Sustenta `e5`: pesos e código de π0 e π0-FAST abertos; treino sobre OXE e 7 plataformas
    próprias; 1 a 20 horas de dado suficientes para ajustar a tarefas novas.
    *Confiabilidade:* blog do laboratório; o artefato (repositório, pesos) é verificável, o número
    de horas é autodeclarado.

16. **World Labs — "Announcing the World API"** (21/01/2026) ·
    `https://www.worldlabs.ai/blog/announcing-the-world-api`
    Sustenta `e1`, `e1.2`, SF2: entrada por texto/imagem/panorâmica/multivista/vídeo; saída
    navegável; **compatibilidade declarada com Isaac Sim, MuJoCo e RoboSuite** ao lado de Blender,
    Unreal, Unity e Houdini.
    *Confiabilidade:* página de produto. A compatibilidade é uma alegação de vendedor; não a
    verifiquei em uso.

17. **arXiv — "Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced
    Embodied Reasoning, Thinking, and Motion Transfer"** — 2510.03342 (out/2025) ·
    `https://arxiv.org/abs/2510.03342`
    Sustenta R2: modelo VLA multi-embodiment com mecanismo de Motion Transfer, e o par
    Gemini Robotics-ER 1.5 para raciocínio corporificado.
    *Confiabilidade:* relatório técnico de laboratório, sem avaliação independente. É a peça que
    torna "uma política, vários corpos" plausível — não a que prova que funciona em produção.

18. **arXiv — "NVIDIA Isaac Sim: Enabling Scalable, GPU-Accelerated Simulation for Robotics"** —
    2606.03551 (03/06/2026; Gao, Pagnucco, Bednarz, Song) · `https://arxiv.org/abs/2606.03551`
    Sustenta a seção 3 como panorama da pilha de simulação (Isaac Sim/Lab, Replicator, dado
    sintético, ambientes paralelos).
    *Confiabilidade:* levantamento acadêmico; **abri o PDF e as tabelas de desempenho não
    extraíram legivelmente**, então não usei nenhum número dele. Está aqui pelo enquadramento, e
    isso é uma limitação real desta rodada.

19. **XYSER Robotics — "Humanoid Robot in Events: Real Use Cases from Malls to Mega Shows
    (2026)"** (22/03/2026) · `https://www.xyserrobotics.com/blogdetail/humanoid-robot-event-use-cases/`
    Sustenta `e9.1`: uso em produção de entretenimento com coreografia, transmissão ao vivo, shopping
    e papel híbrido de serviço; e o argumento de que o entretenimento lidera por "monetização
    repetível" sem fadiga.
    *Confiabilidade:* **baixa** — conteúdo de marketing de fornecedor de robô para evento, sem
    número algum (o próprio texto adia a parte de preços para um artigo futuro). Usada apenas para
    a *forma* do uso, nunca para magnitude.

20. **TI INSIDE — "Brasil amplia parque de robôs industriais e investe mais de R$ 100 milhões em
    infraestrutura quântica, aponta estudo"** (22/01/2026) ·
    `https://tiinside.com.br/22/01/2026/brasil-amplia-parque-de-robos-industriais-e-investe-mais-de-r-100-milhoes-em-infraestrutura-quantica-aponta-estudo/`
    Sustenta a nota sobre o Brasil (§3.4) e `e10.1.1`: mais de 30 mil robôs industriais ativos,
    crescimento médio de 12% ao ano, 48% das indústrias planejando investir em robôs polifuncionais
    até 2026, ROI declarado 35% superior ao de robô de função única.
    *Confiabilidade:* imprensa setorial reportando um relatório de consultoria (*Innovation
    Telescope – Zoom Brasil 2025*, Indra), que combina fonte primária e secundária com dados do
    MCTI, da Secretaria de Governo Digital e da Brasscom. **Não abri o relatório original** — os
    números são de segunda mão.

## 12. Anexo — o levantamento bruto

Nada de corte silencioso. Aqui está tudo o que foi levantado e não coube acima: as buscas, as
fontes que não abriram, os efeitos cortados na bateria do §6, os candidatos a raiz recusados com
o motivo, os números que circulam e não foram usados, as premissas assumidas, e a saída completa
do verificador.

---

### 12.1 As buscas desta rodada

Quinze buscas, em português e inglês, entre 11/09/2026 09h e 11/09/2026 12h. As que renderam estão
marcadas com ✔; as que não deram em nada útil, com ✖ e o motivo.

| # | Consulta | Resultado |
|---|---|---|
| 1 | `world model robotics 2026 NVIDIA Cosmos GR00T sim-to-real` | ✔ levou ao release da NVIDIA de 05/01/2026 e ao arXiv do Isaac Sim |
| 2 | `vision-language-action model 2026 benchmark generalist robot policy` | ✔ **a busca mais produtiva da rodada** — trouxe a pista dos estudos de perturbação |
| 3 | `humanoid robot deployment numbers 2026 Figure Unitree units shipped commercial` | ✔ Counterpoint, Smart Analytics, Forbes |
| 4 | `DeepMind SIMA 2 generalist agent 3D games 2026` | ✔ blog e relatório técnico |
| 5 | `Genie 3 world model 2026 interactive generated environment agent training` | ✔ blog do Genie 3; a data pública (jan/2026 para assinantes Ultra nos EUA) veio de fonte secundária e por isso está qualificada no texto |
| 6 | `"world model" 2026 critique "does not" physics consistency evaluation benchmark failure` | ✔ WorldBench, WBench, PhyWorld, WorldArena |
| 7 | `ISO standard humanoid robot safety 2026 regulation industrial mobile manipulator` | ✔ ISO 10218-2:2025, ISO/WD 25785-1, Regulamento UE 2023/1230 |
| 8 | `teleoperation data collection workers robot training data 2026 labor "data factory"` | ✔ XDOF, micro1, DoorDash Tasks, ISF |
| 9 | `robot policy perturbation benchmark success rate collapses near zero 2026 arxiv` | ✔ RoboGate, LIBERO-Plus, COLOSSEUM, RobotArena∞ |
| 10 | `playable world model game 2026 Odyssey Decart real-time generated interactive video product` | ✔ Odyssey-2, Agora-1, Oasis — mas **quase toda a primeira página era conteúdo de SEO** (`genie3.org`, `genie3.net`, `3dgen.io`, `playableworldmodels.com`), sites que parasitam o nome do produto. Nenhum foi aberto nem citado. |
| 11 | `Brasil robótica IA física 2026 pesquisa embodied AI universidade investimento` | ✖ parcialmente — devolveu sobretudo conteúdo de investimento financeiro ("como investir em ETFs de robótica") e blogs de automação. **Não encontrei nenhum grupo de pesquisa brasileiro em IA corporificada com produção citável em 2026.** É uma lacuna real deste mapa, não do Brasil necessariamente. |
| 12 | `Genesis simulator "43 million FPS" claim disputed benchmark reproducibility robotics` | ✔ a análise do Stone Tao e a *issue* #181 |
| 13 | `World Labs Marble 3D world model game studio production pipeline 2026` | ✔ Marble 1.1 (02/04/2026), formatos de exportação, guias oficiais |
| 14 | `buildings designed for robots 2026 warehouse architecture "robot-ready" retrofit navigation` | ✔ mas fraco: só literatura de projeto de galpão (piso superplano F-min, malha estrutural, largura de corredor). Suficiente para sustentar `e5.2.1` como analogia, **não** para sustentar um efeito próprio. |
| 15 | `humanoid robot incident injury liability insurance 2026 who is responsible simulator` | ✔ seguro de robô humanoide na China, ausência de arcabouço nos EUA, discussão de responsabilidade em cadeia |
| 16 | `Brasil instalações robôs industriais 2026 IFR densidade robótica número unidades` | ✔ TI INSIDE / relatório Indra |
| 17 | `robot in public space 2026 delivery robot sidewalk complaints backlash city ban` | ✔ Chicago, NPR, abaixo-assinados |
| 18 | `humanoid robot entertainment performance rental shows 2026 events` | ✔ mas quase tudo é material de fornecedor de aluguel; usado só para forma, não para número |
| 19 | `"physical AI" funding 2026 robotics startups billions invested chart total` | ✔ Crunchbase News, PitchBook, Value Add Pulse |
| 20 | `robot foundation model open weights 2026 Physical Intelligence pi0 openpi adoption downloads` | ✖ parcialmente — achei o anúncio de abertura do π0, mas **não achei número de download nem de adoção**. Procurei e não há; por isso a seção 3.5 registra "sem número encontrado" para quantos robôs em produção rodam política de fundação de terceiro. |

### 12.2 Fontes que não entraram na seção 11, e por quê

**Abertas e legíveis, mas que bloqueiam cliente automatizado (403 a `urllib`) — por isso fora da
seção 11, para não quebrar o verificador de links:**

- **Crunchbase News, "VCs Pour Billions Into Physical AI"** (18/08/2026). Li integralmente; é
  a origem dos números de capital citados na seção 3.1 (US$ 47,4 bi / 521 negócios no 1º sem. de
  2026; US$ 12 bi / 470 no 2º sem. de 2025; US$ 26,4 bi / 436 no 1º sem. de 2025; US$ 41,9 bi em
  2022-2024; Waymo US$ 16 bi a US$ 126 bi de avaliação; Anduril US$ 5 bi; Shield AI US$ 2 bi;
  Saronic US$ 1,75 bi). **Confiabilidade alta** — a Crunchbase é a base de dados primária desses
  números. Retorna 403 a requisição sem navegador.
- **Forbes, "Humanoid Robot Shipments Up 300%: Up To 30,000 So Far In 2026"** (20/08/2026). Não
  abri o corpo; o título já diverge das outras duas contagens ("até 30.000" contra 22.000 da
  Counterpoint e 19,1 mil da SAG). **Serve só como terceiro ponto de dispersão** e reforça o item
  3 da seção 8.
- **Smart Analytics Global, "Global Humanoid Robot Shipments Surged 272% YoY to 19.1K Units in
  1H 2026; AGIBOT Overtook Unitree"**. 403. É a fonte da divergência de ~15% registrada na
  seção 8.

**Abertas, mas não usadas para sustentar nada:**

- `robotomated.com/learn/humanoid/robot-safety-standards-2026` — **HTTP 410 Gone.** A página
  aparecia na busca com a informação sobre ISO 25785-1; o conteúdo foi removido entre a indexação
  e a consulta. A informação sobre ISO/WD 25785-1 no texto vem do resumo de busca e da fonte 14, e
  está qualificada como rascunho por esse motivo. **Não a tratei como confirmada.**
- `labelstud.io/learning-center/where-robot-training-data-comes-from-in-2026` — abre, mas é
  conteúdo de marketing de plataforma de anotação. É a origem dos números **Egocentric-100K
  (dez/2025, >100 mil horas, 14.228 trabalhadores fabris) e Egocentric-1M (abr/2026, ~1 milhão de
  horas, licença permissiva no Hugging Face)**. **Não abri o cartão dos conjuntos no Hugging Face
  e por isso esses números não sustentam nenhum efeito deste mapa.** Ficam aqui como pista para
  quem quiser verificar — se forem reais, mudam a força de R3, e é uma checagem de dez minutos que
  eu não fiz.
- Página do GR00T no NVIDIA Developer (`developer.nvidia.com/isaac/gr00t`) — responde, é material
  de produto; o que ela sustenta já está na fonte 11.
- *Issue* #181 do repositório `Genesis-Embodied-AI/genesis-world` — responde; é a discussão pública
  do benchmark contestado. Citada na avaliação de confiabilidade da fonte 8, não como fonte
  autônoma.

**Vistas em busca e deliberadamente não abertas:**
`genie3.org`, `genie3.net`, `3dgen.io`, `playableworldmodels.com`, `worldsimulator.ai`,
`tooldirectory.ai`, e uma série de blogs agregadores ("Best AI World Models 2026", "World Models:
The Ultimate Guide"). São páginas de SEO construídas sobre nomes de produto de terceiros, sem
autoria identificável. Registro que existem e que **dominam a primeira página de busca deste
tema** — o que é, em si, um dado sobre o tema: a camada de conteúdo parasitário chegou antes da
camada de produto.

**Artigos identificados e não abertos por falta de tempo, mas que uma rodada mais longa deveria
abrir:** *World Model for Robot Learning: A Comprehensive Survey* (arXiv 2605.00080); *A Definition
and Roadmap for World Models* (arXiv 2607.06401); *WBench: A Comprehensive Multi-turn Benchmark for
Interactive Video World Model Evaluation* (arXiv 2605.25874); *WorldArena*; *RoboGaze* (arXiv
2606.28385); *Systematic Literature Review of VLA Models* (Robotics 15(8):160, PRISMA, 140+
publicações 2020-2025); *Green-VLA*, *HiMoE-VLA*, *DreamVLA*, *VLA-JEPA*; *Galaxea G0*. Todos
apareceram nas buscas 2, 6 e 9. **A ausência deles é a maior fragilidade bibliográfica desta
rodada** — em particular a revisão sistemática PRISMA, que daria uma base muito melhor que os
quatro benchmarks pontuais que usei.

### 12.3 Efeitos cortados na bateria do §6

Reproduzidos na íntegra, com o motivo do corte. Nada aqui foi apagado do trabalho, só do mapa.

**Cortado 1 — "Escolas de design de jogos reorganizam o currículo em torno de mundo gerado"**
(era 2ª ordem sob `e1`; sinal fraco, prazo 2030, confiança baixa).
*Motivo:* anti-padrão explícito da skill — "cursos/formação reorganizam o currículo" serve para
qualquer tema de tecnologia e por isso não diz nada. Só entraria com nome de curso, mecanismo e
data. Tentei salvá-lo nomeando um curso concreto e não consegui sustentar com fonte.
*O que sobreviveu no lugar:* `e1.1.1`, que fala de **portfólio de entrada**, não de currículo —
tem ator (quem contrata), mecanismo (a etapa por onde se entrava sumiu) e é falseável.

**Cortado 2 — "Surge a profissão de curador de mundos"** (era 2ª ordem sob `e14`).
*Motivo:* mesmo anti-padrão ("surge uma nova profissão"). E era genérico duas vezes: não dizia
quem contrata, nem o que a pessoa faria de diferente.
*O que sobreviveu no lugar:* `e10.2.1`, "direção de demonstração", que nomeia a função, ancora
num ofício existente (direção de captura de movimento), diz quem contrata (estúdio de dado) e é
verificável (basta procurar a vaga).

**Cortado 3 — "Reguladores criam categoria jurídica para agente corporificado"** (era 1ª ordem sob
R2).
*Motivo:* anti-padrão ("reguladores criam categoria/lei nova"). Além disso era falso por excesso:
não é preciso categoria nova, o Regulamento de Máquinas UE 2023/1230 já cobre.
*Substituído por:* `e8`, com regulamento nomeado, data de aplicação (20/01/2027) e mecanismo
(cobertura explícita de aprendizado que altera comportamento).

**Cortado 4 — "O mercado de trabalho físico se reorganiza"** (era 3ª ordem sob `e10`).
*Motivo:* o mais genérico de todos. Serve para qualquer tema de automação desde 1811.
*Substituído por:* `e10.1.1`, que nomeia país (Brasil), insumo (demonstração e diversidade de
ambiente doméstico) e posição de cadeia (fornecedor, não fabricante nem treinador).

**Cortado 5 — "A cidade é redesenhada para robôs"** (era 1ª ordem sob R2; sinal fraco, prazo 2031).
*Motivo:* falha no **teste da causa solta** (§3.10). Cidade sendo redesenhada para veículo
autônomo, para entrega, para micromobilidade e para acessibilidade são quatro forças anteriores e
maiores; remover a raiz R2 não faz o efeito desaparecer. Não deriva desta raiz.
*O que sobreviveu:* `e5.2.1`, deslocado para terceira ordem, restrito a **edifício** e não cidade,
e reconectado ao pai certo (`e5.2`, adaptação de corpo) — porque a especificação de piso e de
largura de corredor **é** literalmente adaptação de corpo, e porque a literatura de galpão
"automation-ready" dá o mecanismo. Prazo 2032, fora da janela, declarado.

**Cortado 6 — "Robôs domésticos chegam ao consumidor"** (era 1ª ordem sob R2).
*Motivo:* falha no §2.1 aplicado ao efeito. Não é efeito, é premissa disfarçada — e uma premissa
que os números contradizem: 13% de manufatura e 5% de logística nos embarques de 2026 não
projetam consumidor até 2031 por nenhuma classe de referência razoável. Se entrasse, seria o
efeito mais visível e mais frágil do mapa.

**Cortado 7 — "O simulador vira o produto principal da NVIDIA"** (era 2ª ordem sob `e2`).
*Motivo:* especulação sobre estratégia de uma empresa, não efeito sistêmico. Não passa no teste de
especificidade nem tem mecanismo próprio.

**Cortado 8 — "Custo de energia limita o treino em simulação"** (era 1ª ordem sob R1).
*Motivo:* serve para qualquer tema de IA — é o efeito ambiental genérico que a skill proíbe. O que
restou é `e3`, que trata do custo de computação **por minuto de sessão de mundo gerado**, que é
específico deste tema porque inverte a economia de amortização do videogame. Registro na tabela
STEEP que o eixo ecológico ficou quase vazio por causa desse corte, e que **prefiro o eixo vazio
ao efeito genérico**.

### 12.4 Candidatos a disrupção-raiz recusados, com o registro

- **ROS 2, SLAM, planejamento de trajetória (OMPL, MoveIt 2, pinocchio, Lanelet2, OpenVINS,
  RT-Thread).** Recusados como raiz: adoção em maioria; tratados como contexto na seção 3.
- **Simulação física acelerada por GPU (Isaac Sim, MJX, PhysX, Newton, AirSim, habitat-sim,
  MetaDrive, drake).** Recusada como raiz: é pré-condição das quatro, adoção em maioria entre
  quem treina robô por aprendizado. Mantida como pré-condição; suas falhas medidas (GAUGE) entram
  como mecanismo em `e2` e `e6`.
- **Vídeo generativo passivo (Sora, Veo, Kling, Runway).** Recusado: produto de massa desde 2025;
  rompe produção de vídeo, não IA corporificada.
- **"O humanoide".** Recusado: é produto, não ruptura — anti-padrão explícito da skill.
- **Enxame de drones (o wildcard que a turma trouxe sem querer, *Advanced Drone Swarm
  Telemetry*).** Recusado por recorte: coordenação multiagente física é um objeto com literatura,
  regulação (MAVLink, espaço aéreo) e atores próprios, e puxaria o mapa para defesa e resposta a
  emergência, que não é o público deste documento. **É um bom tema para outro mapa** e o registro
  fica aqui para quem quiser pegá-lo.
- **Robótica cirúrgica e imagem médica (MONAI).** Recusadas por recorte: regime regulatório
  próprio, ciclo de aprovação de década, público diferente.
- **ROSClaw** (conectar raciocínio de modelo a capacidades reais mantendo consciência do corpo).
  **Não recusado — não verificado.** Apareceu na varredura da turma e eu não achei fonte primária
  aberta nesta rodada. A ideia que ele encarna (restrição física como parte do modelo de execução)
  está no mapa por outro caminho (`e7.1`, affordance física), mas **não posso afirmar nada sobre o
  projeto em si**. Fica como pendência.

### 12.5 Números levantados e não usados

Ficam registrados porque a próxima rodada pode precisar deles, e porque não usá-los foi escolha,
não esquecimento.

- Robôs industriais no mundo: **4,66 milhões de unidades em operação** em 2026, mercado de US$ 16,7
  bi, +9% ano a ano; **mais de 500 mil instalações** no último ano, 54% na China; projeção de
  ultrapassar 700 mil instalações anuais até 2028 (IFR, via imprensa setorial). *Não usados porque
  descrevem robô industrial clássico, que este mapa recusou como maduro.*
- Mercado global de anotação de dado: US$ 4,89 bi (2025) → projeção de US$ 17,1 bi em 2030.
  *Não usado: projeção de consultoria, e o recorte inclui texto e imagem.*
- Setor de IA corporificada: projeção de US$ 3,8 bi (2026) → US$ 7,24 bi (2030). *Não usado:
  incompatível em ordem de grandeza com os US$ 47,4 bi de capital de risco em seis meses, o que
  sugere que as duas fontes definem "setor" de formas incomparáveis. Registro a incompatibilidade
  em vez de escolher uma.*
- Aluguel de robô para evento em 2026: robô de serviço/recepção **US$ 300–1.200/dia**; robô de
  entretenimento ou bartender **US$ 500–3.000**; humanoide recepcionista **US$ 500–5.000**. *Usados
  como ordem de grandeza na prosa de `e9.1`, não como fonte de prazo — vêm de páginas de
  fornecedor.*
- Figure: mais de 10.000 implantações em armazéns de parceiros; Figure 03 rodando onze meses na BMW
  Spartanburg em mais de 30.000 ciclos de produção, com implantação em Leipzig no verão de 2026.
  *Não usados: vêm de resumo de busca e não abri fonte primária. Se verdadeiros, são o
  contraexemplo mais forte a `e9` (humanoide como mídia) e mereciam uma rodada só para eles.*
- Unitree com meta de 10 a 20 mil unidades no ano de 2026. *Não usado: é meta declarada, não
  embarque medido.*
- Jetson T4000: 1.200 TFLOPS FP4, 64 GB, US$ 1.999 em volume de mil unidades; Jetson Thor com 4×
  o desempenho da geração anterior. *Não usados: são especificação de produto e não sustentam
  efeito; mas são a evidência de que a computação embarcada deixou de ser o gargalo, o que reforça
  indiretamente a tese de que o gargalo é o lugar de aprender.*
- Salesforce reportando redução de "2×" no tempo de resolução de incidentes com o Cosmos Reason.
  *Não usado: número de release corporativo, sem base.*
- Petição em Lincoln Park (Chicago) com mais de 1.500 assinaturas em dezembro e 4.400 assinaturas
  pedindo suspensão de operação de robôs na cidade; robôs banidos em duas áreas após colisões,
  ferimentos e obstrução de veículos de emergência; vereador do 1º Distrito bloqueando expansão.
  *Usados como contexto e como SF4, não como efeito, porque a fonte primária (Block Club Chicago,
  03/09/2026) retornou HTTP 429 na hora da consulta e a NPR (09/02/2026) estourou o tempo de
  leitura. Os números vêm de resumo de busca e por isso não ancoram nada.*
- Micro1 pagando US$ 15/h a milhares de pessoas em mais de 50 países para filmar tarefas
  domésticas com iPhone preso à cabeça; DoorDash com o serviço "Tasks" usando entregadores para
  gravar dado; Scale AI com mais de 100.000 horas de coleta interna em São Francisco. *Usados na
  prosa de R3 como ordem de grandeza; a fonte é a mesma página de fornecedor da seção 12.2.*
- 58% dos líderes empresariais globais declarando usar "IA física" em operações, segundo pesquisa
  de 2026. *Não usado: a definição de "IA física" nessa pesquisa é larga o bastante para incluir
  monitoramento por câmera, o que torna o número inútil para este mapa.*

### 12.6 Premissas assumidas, consolidadas

O `briefing:` veio completo (modo, tema, slug, autor, zona, horizonte, público, recorte,
descartado, raiz suspeita, viés, busca web, saída), então **não houve rebaixamento de confiança**
por ausência de entrevista — conforme a regra do §0 da skill. O que o briefing **não** cobria e
eu assumi:

1. **Data de corte da pesquisa:** 11/09/2026. Nada posterior entrou.
2. **Veículo autônomo entra só como classe de referência**, não como objeto — apesar de ser, em
   dinheiro, a maior fatia da "IA física" (Waymo sozinha levou US$ 16 bi dos US$ 47,4 bi).
   **Esta é a assunção mais discutível do mapa:** um mapa que incluísse AV teria outras raízes.
3. **Defesa fica fora**, pelo mesmo motivo e por não ser o público. Anduril, Shield AI e Saronic
   somam US$ 8,75 bi nas rodadas do semestre e não aparecem em nenhum efeito.
4. **Simulação de sociedades (tema 6) e captura 3D do mundo real (tema 10) são vizinhos**, citados
   nas fronteiras e não desenvolvidos.
5. **"Ideias óbvias a excluir"** foi lido como "as que servem para qualquer tema" e aplicado
   literalmente na bateria — foi o que matou os cortados 1 a 4 e 8.
6. **Profundidade três ordens, modo a-partir-do-tema**, como pedido.
7. **Viés neutro:** o mapa tem um cenário de cada lado na seção 9 e, na seção 7.6, nomeia os dois
   vieses que restaram apesar da instrução de neutralidade.

### 12.7 O que uma próxima rodada deveria fazer

1. **Abrir a revisão sistemática PRISMA de VLA** (Robotics 15(8):160, 140+ publicações) e o survey
   *World Model for Robot Learning* — substituiriam quatro benchmarks pontuais por uma base.
2. **Verificar Egocentric-100K e Egocentric-1M no Hugging Face.** Dez minutos de trabalho que
   mudariam a força de R3 em qualquer direção.
3. **Abrir a fonte primária sobre Figure/BMW.** É o contraexemplo mais forte a `e9`.
4. **Procurar um grupo de pesquisa brasileiro em IA corporificada.** A busca 11 falhou; não
   acredito que a ausência seja real, acredito que a consulta estava errada.
5. **Achar replicação independente do RoboGate**, ou rebaixar `e6.1` e `e6.1.1`.
6. **Medir o custo real por minuto de mundo gerado.** É a variável que decide a contradição
   registrada na seção 5 (`e3.1.1` × `e14.2.1`) e este mapa não a tem.

### 12.8 Saída do verificador

Comando executado:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano/09-agentes-corporificados-ia-fisica-e-modelos-de-mundo/tendencia-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md --links
```

Saída, na íntegra:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 17 (frontmatter diz 17)
efeitos ordem 2: 27 (frontmatter diz 27)
efeitos ordem 3: 20 (frontmatter diz 20)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 4 [('e2.1.1', 2032), ('e5.2.1', 2032), ('e11.1.1', 2032), ('e17.1.1', 2032)]
confiança ordem 1: alta 7 · media 10 · baixa 0
confiança ordem 2: alta 0 · media 20 · baixa 7
confiança ordem 3: alta 0 · media 0 · baixa 20
links da seção 11: 20/20 respondem (frontmatter diz fontes: 20)
RESULTADO: ok
```

Leitura da saída, em vez de "passou":

- **frontmatter 18/18** e **títulos 12/12** — o documento está no formato da disciplina.
- **4 raízes, 17 efeitos de 1ª ordem, 27 de 2ª, 20 de 3ª** — batendo com o frontmatter. São 64
  efeitos, com média de 4,25 efeitos de primeira ordem por raiz (dentro da faixa de 3 a 6 da
  skill).
- **Nenhum efeito de 1ª ou 2ª ordem passa do horizonte 2031.**
- **Quatro efeitos de 3ª ordem em 2032** (`e2.1.1`, `e5.2.1`, `e11.1.1`, `e17.1.1`): estão fora da
  janela do mapa, e isso está declarado na seção 7.3. São, respectivamente, a ficha de física do
  ambiente, o prédio como corpo a adaptar, o gesto de trabalho como categoria negociável e a
  sessão só-humano como modo de jogo.
- **Confiança: 7/10/0 na 1ª ordem, 0/20/7 na 2ª, 0/0/20 na 3ª.** Cai monotonicamente. A ausência
  total de confiança alta a partir da segunda ordem é deliberada e é o que a seção 7.7 discute.
- **20/20 links da seção 11 respondem**, e o número bate com `fontes: 20`. As três fontes lidas que
  bloqueiam cliente automatizado (Crunchbase News, Forbes, Smart Analytics Global) estão fora da
  seção 11 de propósito e registradas na seção 12.2, com o que cada uma sustenta.
- **RESULTADO: ok**, sem nenhum problema pendente.
