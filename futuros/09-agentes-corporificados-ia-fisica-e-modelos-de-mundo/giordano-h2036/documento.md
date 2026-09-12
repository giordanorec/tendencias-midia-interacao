---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 12
efeitos_ordem_2: 24
efeitos_ordem_3: 17
tecnologias_citadas: [NVIDIA Cosmos 3, Isaac GR00T N1, Isaac GR00T Reference Humanoid, Isaac Lab, Isaac Sim, Jetson AGX Thor, Genie 3, Project Genie, SIMA 2, Gemini Robotics 1.5, Gemini Robotics-ER 1.5, pi0, pi0.5, Genesis, MuJoCo, MetaDrive, AirSim, habitat-sim, habitat-lab, drake, MoveIt 2, OMPL, pinocchio, PhysX, NVIDIA Warp, Apollo, Lanelet2, OpenVINS, RT-Thread, MAVLink, MONAI, LeRobot, LeRobotDataset, Open X-Embodiment, RoboWorld, WorldRoamBench, SimWorld Studio, Unreal Engine 5, ROSClaw, Unitree G1, Unitree R1 Air, Unitree H2 Plus, Sharpa Wave, Tesla Optimus Gen 3, AgiBot Expedition A3, Blue Jay, SARPAS, SISANT]
fontes: 35
confianca: media
experimento: Caderno de divergências — a mesma tarefa física de 30 segundos medida em três mundos (real filmado, simulador escrito à mão, modelo de mundo gerado), com o quadro exato em que cada simulação deixa de acertar
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A IA ganhou corpo, e o corpo ficou barato antes de o cérebro ficar confiável. Em 2026 isso é comércio medido: 19.100 humanoides embarcados no primeiro semestre, 272% acima do mesmo período de 2025, com mais de 97% saindo da China; um Unitree G1 custa US$ 13.500 na página do fabricante; a NVIDIA publicou em 31/05/2026 um **projeto de referência aberto** de humanoide — chassi Unitree H2 Plus, mãos Sharpa de 22 graus de liberdade cada, Jetson Thor a bordo — e, no dia anterior, o Cosmos 3, modelo omnimodal aberto que raciocina, gera mundo e prevê ação no mesmo sistema. Este mapa identifica três rupturas independentes: o **ambiente de treino e de prova deixa de ser construído e passa a ser gerado**; a **política de controle deixa de pertencer a um corpo** (o Gemini Robotics 1.5 transfere movimento entre plataformas físicas diferentes; o SIMA 2 opera treze jogos comerciais e mundos inventados pelo Genie 3 sem ver o código de nenhum); e o **corpo vira plataforma padronizada, barata e geograficamente concentrada**. Delas derivam 53 efeitos até 2036. Os achados que menos se anteciparam: a **avaliação**, não o treino, é onde o modelo de mundo entra primeiro — o RoboWorld reporta correlação de 0,989 entre nota dada dentro do mundo gerado e nota dada no robô real, o que transforma simulação em evidência, e evidência em objeto jurídico; o gargalo do humanoide é a **mão**, não o modelo (a mão do Optimus Gen 3 só foi dada como pronta em 17/02/2026, o atraso mais longo do programa); e quem decide onde o robô anda não é engenheiro nem regulador nacional, é **vereador** — em 02/03/2026 o 1º Distrito de Chicago barrou a expansão de robôs de entrega depois de uma consulta em que 83% discordaram fortemente. A retroação tem dono e já mediu força: a ISO 10218:2025 admite o humanoide na fábrica mas **exclui os perigos de mobilidade** e exclui serviço, saúde e uso doméstico; o Regulamento de Máquinas 2023/1230 da UE passa a valer em 20/01/2027 exigindo função de supervisão humana; e a Amazon arquivou o Blue Jay em janeiro de 2026, três meses depois de o anunciar. O que segura tudo é técnico e mensurável: no WorldRoamBench, com mais de dez modelos e mais de 600 casos, **nenhum modelo de mundo satisfaz ao mesmo tempo ação, visão, física e memória** numa interação de 10 a 60 segundos.

## 2. O tema

**O objeto.** Agente corporificado é o programa que age num mundo com física — robô, drone, carro, e também o agente que joga um jogo 3D pela mesma tela que um humano usaria. IA física é esse programa quando ele toca átomos. Modelo de mundo é o modelo que **gera** o ambiente em vez de apenas desenhá-lo a partir de uma descrição escrita por alguém. O recorte deste mapa é estreito de propósito: **o agente com corpo e o mundo em que ele aprende** — e, sobretudo, o que acontece quando o segundo passa a ser produzido pela mesma tecnologia que produz o primeiro.

**Onde encosta em mídia e interação.** Em quatro lugares, e é por isso que o tema não cabe num levantamento de estado da arte.

1. **No mundo como artefato de autoria.** Quem desenha um mundo 3D sempre desenhou para uma pessoa atravessá-lo. Se o mesmo mundo passa a ser o lugar onde uma política de controle aprende, então desenhar o mundo é desenhar o **currículo** de quem vai operar no mundo real. O `SimWorld Studio`, construído sobre Unreal Engine 5, mede isso: um ambiente que evolui junto com o agente rende 18 pontos de taxa de sucesso a mais que um ambiente fixo. O ofício de level designer e o ofício de engenheiro de dados de treino encostam um no outro.
2. **Na interface.** O `SIMA 2` opera jogos comerciais pelos mesmos pixels e pelos mesmos comandos de teclado e mouse que um jogador usa, sem acesso ao código. Isso faz do **layout visual** — não da API — o contrato entre a máquina e o mundo. Quem projeta interface passa a projetar para dois leitores, e eles não leem igual.
3. **No corpo como dispositivo de interação.** A um preço de US$ 13.500, o humanoide deixa de ser projeto de engenharia e vira coisa que se compra — o que muda quem pode prototipar interação física, e onde.
4. **Na prova.** Se o comportamento de um sistema físico passa a ser demonstrado dentro de um mundo gerado, então a pergunta "isto funciona?" vira uma pergunta sobre a procedência de um vídeo. Isso já é território de mídia.

**Por que merece mapa de futuro e não levantamento.** Um levantamento responde "que simuladores e que modelos existem" — isso está respondido na seção 3, com estrelas de repositório, datas de commit e números de embarque. O que não é respondível por levantamento é: de quem é a culpa quando o mundo do treino diverge do mundo real; o que acontece com a integradora de automação quando o software do robô deixa de ser escrito por corpo; quem ganha poder de veto sobre a calçada; e o que sobra do trabalho físico quando o corpo custa menos que um semestre de bolsa. São perguntas sobre consequência — consequência não se levanta, se deriva, com mecanismo, com prazo ancorado em classe de referência, e submetida a quem tem incentivo para bloqueá-la.

**Fronteira com os vizinhos, declarada.** Simulação de *sociedades* como instrumento de investigação é o **tema 6**. Personagem que age dentro de um mundo com regras narrativas é o **tema 7**. Capturar o mundo real em 3D é o **tema 10**. Ver e segmentar qualquer coisa é o **tema 11**. Aqui o objeto é **o corpo e o mundo de aprendizado**. Onde há vazamento — e há, sobretudo para o 10 (no efeito `e4`, em que o espaço físico é capturado continuamente) e para o 7 (no efeito `e6`, em que o jogo vira campo de treino) — a seção 5 o nomeia em vez de fingir que a fronteira é limpa.

**Premissas assumidas nesta rodada.** O briefing veio completo: horizonte 2036, público de quem projeta mídia e interação, recorte global com nota sobre o Brasil, descarte do que já é comum em produto de massa, viés neutro, nenhuma raiz suspeita, busca na web ativa. Não houve entrevista com pessoa — a rodada é não interativa —, e por isso o que o briefing não cobriu está declarado aqui como premissa, não escondido:

- **(a)** "Quem projeta mídia e interação" foi lido como incluindo quem projeta espaço e serviço — arquitetura de calçada, chão de fábrica, loja —, porque é aí que a interação com corpo de máquina acontece. Efeitos que vazam para urbanismo e para relações de trabalho estão marcados.
- **(b)** A régua "o que já é comum em produto de massa" foi operacionalizada pela escala de difusão do §2 da skill, com corte em *maioria*. As quatro recusas estão registradas na seção 4.
- **(c)** O recorte brasileiro é tratado como **assimetria de corpo**: o Brasil não fabrica o corpo e não escreve a norma, mas opera uma frota física enorme e barata (drone agrícola). É aí que a diferença muda o efeito, e não na contagem de robôs industriais.
- **(d)** "Modelo de mundo" é usado no sentido técnico corrente — modelo gerativo condicionado a ação que prevê o próximo estado observável — e não no sentido cognitivo de "representação interna do mundo". Onde os dois sentidos se cruzam (o workshop `Do Robots Need World Models?` do CoRL 2026), está dito.
- **(e)** Assume-se que não há ruptura de suprimento de GPU nem de energia até 2036. É premissa forte e está listada como tal em 7.5.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 12/09/2026. Vinte e duas buscas em português e inglês, **trinta e duas páginas abertas com sucesso e três recusadas ou truncadas** (403 num veículo, excesso de tamanho no relatório técnico do Cosmos 3, PDF de relatório não aberto), trinta e dois repositórios consultados pela API do GitHub na mesma data. Fonte que não abriu não entrou — nem como ilustração; o que deixei de afirmar por causa disso está em 12.5, e as buscas que não deram em nada, em 12.7.*

### 3.1 O que já existe e funciona

**O corpo, como mercadoria.** No primeiro semestre de 2026 foram embarcados **19.100 humanoides no mundo**, 272% acima dos 5.100 do primeiro semestre de 2025. A AGIBOT ficou com 44% (cerca de 8.400 unidades) e a Unitree com 31% (cerca de 5.900). **Mais de 97% dos embarques e mais de 85% da demanda são da China.** E a composição mudou: aplicações industriais e comerciais passaram de cerca de 50% dos embarques no 1S2025 para **mais de 70% no 1S2026** — ou seja, está saindo da vitrine. A TrendForce projetou em 09/04/2026 alta de 94% na produção chinesa no ano, com Unitree e AgiBot somando quase 80%; registrou que a AgiBot chegou a 10.000 unidades do Expedition A3 até o fim de março de 2026 (de 1.000 em 2025 para 5.000, e daí ao dobro em três meses) e que a Unitree se comprometeu com capacidade anual de 75.000 humanoides e 115.000 quadrúpedes. A meta de embarque declarada da Unitree para 2026 é de **20.000 unidades, contra 5.500 em 2025**. Preço: **US$ 13.500** pelo G1 na página do próprio fabricante, verificado em 14/07/2026; a versão EDU não tem preço público — é sob consulta —, e listagens de terceiros vão de cerca de US$ 16.000 a mais de US$ 67.000 conforme a configuração.

**O corpo, como projeto aberto.** Em 31/05/2026 a NVIDIA anunciou o **Isaac GR00T Reference Humanoid Robot**: chassi Unitree H2 Plus (1,83 m, 68 kg, 31 graus de liberdade), duas mãos Sharpa Wave de cinco dedos com 22 graus de liberdade cada — 75 no total —, câmera estéreo de cabeça (140° × 102°), câmeras de punho, IMU, torque de 120 N·m no braço e 360 N·m na perna, carga nominal de 7 kg, bateria de 0,972 kWh para cerca de três horas, e um **Jetson AGX Thor T5000** a bordo (GPU Blackwell, 2.070 teraflops FP4, 128 GB unificados, 40–130 W). Parceiros acadêmicos nomeados: Ai2, ETH Zurich, Stanford Robotics Center e o laboratório de robótica avançada da UC San Diego. Disponibilidade pela Unitree no fim de 2026; preço não divulgado.

**O modelo de mundo, como produto.** Em 31/05/2026 a NVIDIA lançou o **Cosmos 3**, descrito como omnimodel aberto que faz três coisas no mesmo sistema: raciocina sobre modalidades, **simula ambientes físicos e prevê estados futuros do mundo**, e **gera trajetórias de ação** para treinar robô. Junto veio a Cosmos Coalition, com Agile Robots, Black Forest Labs, Generalist, LTX, Runway e Skild AI. O repositório `NVIDIA/Cosmos` tinha 11.807 estrelas e commit em 12/09/2026 — o dia desta rodada. Do lado do Google, o **Genie 3** gera ambientes interativos navegáveis a partir de texto ou imagem, e em **29/01/2026** o Project Genie foi aberto a assinantes do plano AI Ultra (US$ 250/mês, apenas nos EUA, maiores de 18 anos). Não é laboratório: é assinatura.

**A política generalista.** O **Gemini Robotics 1.5** (25/09/2025) intercala ação com raciocínio interno em linguagem natural e traz o **Motion Transfer**, que aprende de dados heterogêneos de corpos diferentes; o blog nomeia ALOHA 2, Franka bi-manual e o humanoide Apollo da Apptronik. O par embodied-reasoning, **Gemini Robotics-ER 1.5**, ficou disponível via API no AI Studio, enquanto o 1.5 propriamente dito ficou com parceiros selecionados — a assimetria importa: o que raciocina é aberto, o que **age** não é. O **GR00T N1** (18/03/2025) é a versão aberta do mesmo movimento, com arquitetura de dois sistemas (visão-linguagem lento, transformer de difusão rápido) treinada em mistura heterogênea de trajetórias reais de robô, vídeo humano e dado sintético. A Physical Intelligence publicou a linhagem π0 → π0.5 → π0.6 e adiante.

**O agente que atravessa mundos.** O **SIMA 2** (13/11/2025) é construído sobre Gemini e opera treze jogos comerciais — Valheim, Satisfactory, Goat Simulator 3, Hydroneer, No Man's Sky, Space Engineers, Wobbly Life, Eco, ASKA, The Gunk, Steamworld Build, Road 96, Teardown — mais o MineDojo, **pelos mesmos pixels e comandos de um jogador**. Combinado com o Genie 3, ele se orienta e age em mundos gerados na hora que não existiam durante o treino. E fecha um laço de auto-melhoria: o Gemini propõe a tarefa e estima a recompensa, o agente joga, e a experiência gerada vira treino da geração seguinte, **sem demonstração humana**.

**A avaliação dentro do mundo gerado.** Este é o ponto mais adiantado e menos comentado. Um simulador de mundo interativo — modelo de predição de vídeo condicionado a ação, **sem motor de física dentro** — foi usado para avaliar quatro políticas (DP, ACT, π0, π0.5) com as mesmas configurações iniciais dentro do modelo e no robô real, com forte correlação entre as duas notas (relato de 17/07/2026). O **RoboWorld** (01/07/2026) põe número nisso: **Pearson r = 0,989 e Spearman ρ = 0,970** entre avaliação no mundo gerado e avaliação física, com uma técnica ("Step Forcing") para segurar rollouts autorregressivos longos.

**A infraestrutura escrita à mão, muito viva.** Consulta à API do GitHub em 12/09/2026: `Genesis` 29.934 estrelas, 2.858 forks, Apache-2.0, commit no mesmo dia; `MuJoCo` 15.077 estrelas, commit no mesmo dia; `IsaacLab` 8.108 estrelas e 3.884 forks, commit no mesmo dia; `NVIDIA/warp` 7.108, commit no mesmo dia; `drake` 4.186, commit no mesmo dia; `PhysX` 4.765 (03/09/2026); `habitat-sim` 3.819 (21/07/2026) e `habitat-lab` 3.128 (07/05/2026); `MoveIt 2` 2.004 (10/09/2026); `pinocchio` 3.727 (07/09/2026); `OMPL` 2.140 (26/08/2026); `MAVLink` 2.426 (10/09/2026); `Lanelet2` 963 (18/06/2026); `RT-Thread` 12.213 (11/09/2026); `MONAI` 8.678 (12/09/2026); `Apollo` 26.825 (16/04/2026); `AirSim` 18.473 (30/06/2026); `CARLA` 14.392 (11/09/2026). E o dado que a turma precisa ver: **`MetaDrive`, a escolha nº 1 de desenvolvimento da turma, tem 1.244 estrelas e último push em 15/08/2025** — mais de um ano parado. O artigo original é de 2021, revisto em 2022.

**O formato venceu antes do modelo.** `huggingface/lerobot` tem **27.429 estrelas e 5.634 forks**, commit em 12/09/2026 — mais estrelas que qualquer simulador desta lista e mais que o `Isaac-GR00T` (8.053) e o `Cosmos` (11.807) somados. O artigo do LeRobot é de 26/02/2026, com 17 autores. O `Open X-Embodiment` consolidou **mais de 1 milhão de trajetórias reais, 22 corpos, 527 habilidades, 21 instituições**; o RT-2-X rendeu 3× em habilidades emergentes sobre o RT-2 base.

**A IA física que já é maioria, e por isso não é raiz.** A Waymo saiu de 50 mil corridas pagas por semana em maio de 2024 para **500 mil por semana em março de 2026**, dez vezes em menos de dois anos, em dez cidades, com pouco mais de 3.000 veículos — e ainda assim é "uma lasca" perto da Uber. É o caso mais maduro de IA física treinada em simulação, e é por isso que ele aparece aqui como **classe de referência**, não como disrupção.

### 3.2 O que existe e ainda não funciona

**O mundo gerado não se sustenta.** O **WorldRoamBench** (30/06/2026, revisto em 06/07/2026) avaliou mais de dez modelos abertos e fechados em mais de 600 casos, em cenários de natureza, urbanos e internos, com interação contínua de **10 a 60 segundos**, medindo quatro dimensões: ação por quadro, deriva visual por segmento, física com portão de controlabilidade, e memória por reconstrução 3D e rastreamento. Conclusão: **nenhum modelo satisfez de forma confiável todas as dimensões**; o melhor teve notas apenas moderadas em todas. A frase do resumo é dura com a própria área: os benchmarks existentes "avaliam seguimento de ação apenas no nível da trajetória e ignoram memória e física de interação".

**O agente generalista não dura.** O próprio blog do SIMA 2 lista os limites: tarefas de horizonte longo, memória curta por causa da janela de contexto exigida pela latência, ações precisas de baixo nível no teclado e mouse, e robustez de compreensão visual.

**A mão.** O Optimus Gen 3 teve o anúncio adiado em 31/03/2026 e as mãos — 50 atuadores, 22 graus de liberdade — só foram dadas como prontas para produção em **17/02/2026**, o atraso de hardware mais longo do programa. O gargalo declarado do humanoide não é o modelo; é o dedo.

**A conta de manufatura.** A Amazon apresentou o **Blue Jay** em 22/10/2025 — braços suspensos num trilho que juntam três estações numa só, cobrindo cerca de 75% dos tipos de item num galpão da Carolina do Sul — e **arquivou o projeto em janeiro de 2026**; em 25/02/2026 já não estava em operação. Em março de 2026 vieram demissões na divisão de robótica. Da demo ao arquivamento: três meses.

**A norma não alcança o objeto.** A **ISO 10218:2025** foi reescrita e passou a admitir plataformas móveis — "exclui apenas os aspectos de mobilidade desses sistemas: assim, humanoides podem ser incluídos". Mas: **os perigos de mobilidade do humanoide ficam fora do escopo**, e a norma só vale para ambiente industrial — serviço, saúde e uso doméstico estão explicitamente excluídos. O exemplar custa US$ 244. A ISO/TS 15066 (colaborativo) foi absorvida na parte 2.

**O sim-to-real como problema não fechado.** O artigo *The Sim-to-Real Gap of Foundation Model Agents* (05/06/2026) faz uma acusação metodológica: "a comunidade de modelos de fundação está tratando a robustez de agente como um fenômeno inteiramente novo", quando robótica e controle clássico já têm arcabouço maduro — e propõe reescrever o problema nos quatro elementos de um MDP. E o CoRL 2026 vai sediar um workshop chamado **`Do Robots Need World Models?`**, com Chelsea Finn (Stanford / Physical Intelligence) defendendo o fim-a-fim implícito contra Yunzhu Li (Columbia) e Vincent Sitzmann (MIT) defendendo modelos explícitos. Uma das seis moções em debate é: "os benchmarks atuais não conseguem determinar se modelos de mundo são necessários". **A área não decidiu.**

### 3.3 Quem constrói

| Ator | O que traz | Evidência aberta nesta rodada |
|---|---|---|
| **NVIDIA** | a pilha inteira: mundo (Cosmos 3), política (GR00T N1), simulador (Isaac Sim/Lab, Warp, PhysX), computação de bordo (Jetson Thor) e agora o **corpo de referência** | anúncios de 31/05/2026; repositórios com commit em 12/09/2026 |
| **Google DeepMind** | o mundo gerado como produto de consumo (Genie 3 / Project Genie, 29/01/2026) e o agente que o atravessa (SIMA 2); a política (Gemini Robotics 1.5) | blogs de 13/11/2025 e 25/09/2025; arXiv 2512.04797 e 2510.03342 |
| **Unitree / AgiBot** | o corpo barato, em volume; 75% dos embarques mundiais entre as duas | 19.100 unidades no 1S2026; meta de 20.000 da Unitree |
| **Physical Intelligence / Skild AI / Figure** | política generalista como negócio | linhagem π0.x publicada; ver 12.5 sobre os valuations |
| **Comunidade aberta** | o formato (`LeRobotDataset`), o simulador (`Genesis`, `MuJoCo`), o benchmark (`Open X-Embodiment`) | 27.429 estrelas no LeRobot; 29.934 no Genesis |
| **MIIT (China)** | a norma: comitê técnico de padronização de humanoide e inteligência corporificada criado em 12/2025; **Sistema de Normas de Robô Humanoide e Inteligência Corporificada (edição 2026)** divulgado em 28/02/2026, cobrindo tecnologias centrais, sistemas completos, aplicação, e segurança e ética | TechNode, 28/02/2026 |
| **Comissão Europeia / ISO** | a permissão: Regulamento (UE) 2023/1230, adotado em 14/06/2023, **aplicável a partir de 20/01/2027**; ISO 10218:2025 | OSHA-EU; The Robot Report |
| **Vereadores** | o veto: 1º Distrito de Chicago, São Francisco, Toronto | Hoodline, 02/03/2026 |

### 3.4 Os números da adoção

| O quê | Número | Data | Fonte |
|---|---|---|---|
| Humanoides embarcados no mundo, 1S2026 | 19.100 unidades (+272%) | 10/08/2026 | Smart Analytics Global |
| Participação da China nos embarques | > 97% | 1S2026 | Smart Analytics Global |
| Aplicação industrial/comercial | > 70% dos embarques (era ~50% no 1S2025) | 1S2026 | Smart Analytics Global |
| Meta de embarque da Unitree | 20.000 (contra 5.500 em 2025) | 18/02/2026 | Interesting Engineering |
| Preço de entrada do humanoide | US$ 13.500 (G1, página do fabricante) | 14/07/2026 | There's A Robot For That |
| Corridas pagas da Waymo | 500.000/semana, 10 cidades, ~3.000 veículos | 03/2026 | TechCrunch |
| Estrelas do LeRobot / Genesis / MetaDrive | 27.429 / 29.934 / **1.244** | 12/09/2026 | API do GitHub |
| Trajetórias no Open X-Embodiment | > 1 milhão, 22 corpos, 527 habilidades | 2023– | robotics-transformer-x |
| Correlação mundo gerado × robô real | r = 0,989 · ρ = 0,970 | 01/07/2026 | RoboWorld |
| Modelos de mundo que passam em todas as dimensões | **zero**, de 10+ testados | 30/06/2026 | WorldRoamBench |
| Drones registrados no Brasil | 111,4 mil (era 43,3 mil em 2024, +192%) | 23/07/2026 | levantamento setorial |
| Consulta do 1º Distrito de Chicago | 83% discordam fortemente da expansão | 02/03/2026 | Hoodline |

### 3.5 A nota sobre o Brasil

O Brasil não fabrica o corpo, não treina o modelo de fundação e não escreve a norma — mas **opera uma das maiores frotas de agentes físicos autônomos do mundo**, e ela não é humanoide: é drone agrícola. Até 23/07/2026 o país somava **111,4 mil drones registrados, contra 43,3 mil em 2024** — 192% em dois anos e meio. A frota agrícola efetivamente em operação é menor e mal medida (o SISANT não distingue drone agrícola dos demais); uma leitura setorial cruzada de registros fiscais e estimativa de fabricantes põe entre 28 e 38 mil os equipamentos ativos, contra os 35 mil citados no agronegócio. A partir de **01/07/2026 o SARPAS passou a ser obrigatório para todo voo a céu aberto**, inclusive na lavoura isolada, pela ICA 100-40. E o gargalo não é tecnológico: falta de 12 a 15 mil pilotos certificados (licença ANAC mais curso aprovado pelo MAPA), drone parado até 20 dias por falta de assistência e peça, e **compressão de preço do serviço de cerca de R$ 70 para cerca de R$ 30 por hectare**.

Isso é o retrato completo em uma frase: no Brasil, a IA física escalou pela via barata e estreita, e a margem colapsou antes de a competência amadurecer. Na regulação, o PL 2338/2023 — aprovado no Senado em dezembro de 2024 — seguia em 12/09/2026 **aguardando parecer do relator** na comissão especial da Câmara, em regime de prioridade, com 37 projetos apensados. Nenhum deles, entre os assuntos listados na ficha de tramitação, trata de agente com corpo.

## 4. As disrupções-raiz

Três. Cada uma passa pelas quatro perguntas do critério de maturidade, e as quatro respostas estão escritas. No fim da seção estão as **recusas** — os candidatos que não entraram, com o motivo.

### 4.1 R1 — O ambiente de treino e de prova deixa de ser construído e passa a ser gerado

**O que rompe.** Rompe o ofício de *construir o mundo*. Até aqui, treinar um agente físico exigia alguém modelando cena, escrevendo URDF, ajustando coeficiente de atrito, posicionando luz. O `Isaac Sim`, o `Genesis`, o `MuJoCo`, o `habitat-sim`, o `AirSim`, o `MetaDrive` — toda essa infraestrutura existe para que uma pessoa **enumere** o mundo. O modelo de mundo não substitui o motor de física; substitui **o ato de enumerar**. E rompe uma segunda coisa, menos comentada e mais consequente: rompe a suposição de que **avaliar um sistema físico exige o mundo físico**. Se uma nota dada dentro de um vídeo gerado correlaciona 0,989 com a nota dada no robô, a simulação deixa de ser preparação e vira **evidência**.

**Por que agora, e não há cinco anos.** Três pré-condições só se juntaram em 2025–2026: (a) modelos omnimodais que geram vídeo condicionado a ação com física plausível o bastante para segurar dezenas de segundos — Cosmos 3 em 31/05/2026, Genie 3 aberto a assinantes em 29/01/2026; (b) computação de treino barata o bastante para rodar milhões de episódios, com `Genesis` e `warp` explorando GPU direto; (c) **a evidência empírica de que a correlação existe** — o RoboWorld é de 01/07/2026 e o simulador interativo relatado em 17/07/2026 é de 2026. Em 2021, quando saiu o `MetaDrive`, nenhuma das três existia.

**Onde está na difusão.** **Produto de nicho, entrando em adoção precoce.** O Project Genie é assinatura paga e geograficamente restrita; o Cosmos 3 é aberto e tem coalizão comercial; a avaliação por modelo de mundo é resultado de 2026, não prática instalada. Não é laboratório, não é maioria.

**O que ainda falta acontecer.** (i) Coerência que passe de minutos — hoje o WorldRoamBench mede 10 a 60 segundos e nenhum modelo passa em tudo. (ii) Procedência: um jeito de dizer *em que mundo, em que versão* uma política foi provada. (iii) Aceitação por terceiro — organismo notificado, seguradora, comprador — de evidência gerada. (iv) Uma resposta ao debate que o próprio campo marcou para o CoRL 2026: **modelos de mundo são necessários?**

**Quem tem incentivo para bloquear.** Os **organismos notificados** sob o Regulamento (UE) 2023/1230, que a partir de 20/01/2027 avaliam conformidade de máquina autônoma com exigência de função de supervisão humana. Evidência gerada por um modelo proprietário, não reprodutível, sem versão declarada, é exatamente o tipo de prova que um regime de certificação recusa. E as **seguradoras**, que já introduziram exclusões para deriva algorítmica e laço de decisão autônomo: quem precifica risco precisa de uma base atuarial, e um mundo que muda a cada checkpoint não fornece uma.

### 4.2 R2 — A política de controle deixa de pertencer a um corpo

**O que rompe.** Rompe a arquitetura econômica da robótica: um projeto por robô, um integrador por célula, um contrato por instalação. O **Motion Transfer** do Gemini Robotics 1.5 aprende de dados heterogêneos de corpos diferentes e transfere movimento entre plataformas sem especializar o modelo para cada uma; o GR00T N1 é treinado numa mistura de trajetória real, vídeo humano e dado sintético e roda em vários corpos. Do outro lado da mesma ruptura está o `SIMA 2`: treze jogos comerciais e mundos inventados pelo Genie 3, **pela tela, sem API**. Junte os dois e o que se rompe é a ideia de que o software de um agente físico é escrito *para* um ambiente. Ele passa a ser **portado** para ambientes, como um binário.

**Por que agora, e não há cinco anos.** (a) O dado transversal a corpos existe desde 2023 e ficou grande — `Open X-Embodiment`, mais de 1 milhão de trajetórias, 22 corpos, 527 habilidades. (b) O formato comum venceu na prática — `LeRobotDataset`, com 27.429 estrelas no repositório. (c) A arquitetura VLA amadureceu em dois sistemas (raciocínio lento + ação rápida), publicada em aberto no GR00T N1 em 03/2025. Em 2021 havia política por tarefa, não política por família de corpos.

**Onde está na difusão.** **Demo pública entrando em produto de nicho.** O Gemini Robotics-ER 1.5 está em API pública; o Gemini Robotics 1.5 **não** — só parceiros selecionados. O GR00T N1 é aberto e tem 8.053 estrelas. Nenhum deles é linha de produção.

**O que ainda falta acontecer.** (i) Transferência entre **morfologias**, não só entre braços: os corpos nomeados no blog do Gemini Robotics 1.5 são todos manipuladores. (ii) Mão — 22 graus de liberdade por mão no projeto de referência da NVIDIA, e o atraso mais longo do programa Optimus. (iii) Certificação que não seja por unidade, ou a economia de "um modelo, muitos corpos" não se realiza. (iv) Uma resposta ao que o próprio SIMA 2 declara não fazer: horizonte longo, memória, ação precisa.

**Quem tem incentivo para bloquear.** O **comitê técnico do MIIT**, criado em dezembro de 2025, e o Sistema de Normas de 28/02/2026. Uma norma que certifica *o sistema completo* — e não a política — obriga a recertificar a cada corpo, o que destrói exatamente a economia de escala que R2 promete. Como 97% dos corpos são chineses, essa norma não é só técnica: é instrumento de política industrial. E, do outro lado, os **detentores de mundo** — estúdios de jogo cujos termos de uso podem proibir agente, fechando o campo de treino que o SIMA 2 usa.

### 4.3 R3 — O corpo vira plataforma padronizada, barata e geograficamente concentrada

**O que rompe.** Rompe a robótica como negócio de capital e integração. A US$ 13.500 — e US$ 6.870 na faixa mais baixa da linha, segundo revendas — o corpo custa menos que um ano de bolsa de mestrado. Rompe também a **variedade morfológica**: quando existe um projeto de referência aberto (chassi Unitree + mãos Sharpa + Jetson Thor + Isaac GR00T), o "corpo" deixa de ser uma decisão de pesquisa e vira uma escolha de catálogo. E rompe a geografia: mais de 97% dos embarques saem de um país que, no 15º Plano Quinquenal, elevou a inteligência corporificada a trilha industrial prioritária.

**Isto não é "o mesmo, mais barato"?** É a objeção certa e ela tem de ser respondida, porque queda de preço isolada é melhoria sustentadora, não ruptura. A resposta é que o que muda não é o preço: é **a camada**. Antes de 2026 não existia um corpo de referência aberto com pilha de software aberta e formato de dado comum. Com esses três, o corpo passa a ser **substrato**, e o valor migra para a política e para o dado — como aconteceu com o PC quando o clone IBM padronizou o gabinete. Uma queda de preço não cria camada nova; esta criou.

**Por que agora, e não há cinco anos.** (a) Volume industrial chinês: de 5.100 unidades no 1S2025 para 19.100 no 1S2026. (b) Computação de bordo que cabe no corpo: o Jetson Thor entrega 2.070 teraflops FP4 em 40–130 W. (c) Norma: a ISO 10218 só passou a admitir plataforma móvel em 2025, e o sistema de normas chinês é de fevereiro de 2026. Em 2021 não havia nem volume, nem computação de bordo, nem permissão.

**Onde está na difusão.** **Adoção precoce.** Mais de 70% dos embarques já vão para uso industrial e comercial, e não para demonstração — mas 19.100 unidades num semestre, no mundo inteiro, é uma fração desprezível de qualquer base instalada de máquina. Está longe de maioria.

**O que ainda falta acontecer.** (i) Norma para o que a ISO 10218:2025 deixou de fora: mobilidade, serviço, saúde, doméstico. (ii) Assistência técnica e peça — o mesmo gargalo que trava a frota de drone no Brasil. (iii) Uma tarefa economicamente defensável: o Blue Jay morreu de conta de manufatura, não de falta de inteligência. (iv) Licença social: 83% do 1º Distrito de Chicago discordaram fortemente de mais robôs na calçada.

**Quem tem incentivo para bloquear.** **Vereadores e conselhos municipais.** Não ministérios, não normas internacionais: o poder de veto real sobre o corpo em espaço público é local e já foi exercido — Chicago barrou a expansão da Coco Robotics e da Serve Robotics no 1º Distrito em 02/03/2026 depois de consulta de bairro; São Francisco limitou a nove dispositivos simultâneos, a 3 mph, com operador humano por perto; Toronto proibiu. O argumento que decide não é segurança genérica: é **acessibilidade** — robô parado no meio da calçada, atrapalhando cadeira de rodas e andador, e confusão em rebaixamento de meio-fio.

### 4.4 As recusas — candidatos que não entraram como raiz

- **Candidato recusado: direção autônoma treinada em simulação.** Adoção em maioria dentro do seu nicho desde ~2024: a Waymo saiu de 50 mil corridas pagas/semana (05/2024) para 500 mil/semana (03/2026), em dez cidades, e o `Apollo` tem 26.825 estrelas. Faz o que já fazia, em mais lugares. Tratado como **contexto na seção 3 e como classe de referência de velocidade em todo o mapa**.
- **Candidato recusado: SLAM, planejamento de trajetória e ROS.** Maioria há uma década. `OMPL` (2.140 estrelas), `MoveIt 2` (2.004), `OpenVINS` (3.096, último push em 30/11/2025), `pinocchio` (3.727). O enunciado do tema já os classifica como maduros e concordo. Contexto.
- **Candidato recusado: braço colaborativo em fábrica.** A ISO/TS 15066 é de 2016 e foi **absorvida** na ISO 10218-2:2025 — quando uma especificação técnica vira parte da norma principal, a prática já é maioria. Contexto.
- **Candidato recusado: drone de pulverização agrícola no Brasil.** 111,4 mil drones registrados, obrigatoriedade de SARPAS desde 01/07/2026, preço de serviço já comprimido de R$ 70 para R$ 30/ha. Isso é um mercado maduro em compressão de margem, não uma ruptura à frente. Entra como **nota brasileira (3.5) e como classe de referência de velocidade para corpo barato e tarefa estreita**.
- **Candidato recusado como raiz, mantido como efeito: a queda de preço do humanoide.** Isolada, é melhoria sustentadora. Ela só vira raiz junto com o projeto de referência aberto e o formato comum de dado — e é assim, como *plataformização*, que está em R3.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ambiente de treino e de prova deixa de ser construído e passa a ser gerado
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de robótica param de modelar cena à mão e passam a encomendar distribuição de cenas
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O acervo de mundos 3D já existentes vira ativo de dados licenciável, e quem tem jogo ou gêmeo digital de fábrica vira fornecedor de treino
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Contratos de licença de engine passam a ter cláusula própria de uso do mundo para treino de agente, separada da cláusula de distribuição do jogo
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O engenheiro de simulação deixa de entregar cena e passa a entregar critério de cobertura da distribuição
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Editais de fomento a robótica passam a exigir a especificação da distribuição de treino no lugar do vídeo de demonstração
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A avaliação de política de robô migra para dentro do modelo de mundo, e simulação vira evidência em vez de preparação
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Surge um mercado de banco de provas versionado, em que o mundo tem checkpoint e número de versão como um conjunto de teste tem
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Um recall de robô passa a nomear versão de modelo de mundo e de política em vez de número de peça
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Seguradoras precificam o risco pela política e pelo mundo em que ela foi provada, e não pelo corpo que a executa
            sinal: fraco
            prazo: 2034
            confianca: baixa
          - id: e2.3
            ordem: 2
            efeito: Organismos notificados sob o Regulamento de Máquinas da UE recusam evidência gerada e exigem ensaio físico, encarecendo a certificação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.3.1
                ordem: 3
                efeito: A certificação vira a maior linha de custo do robô de serviço, acima do corpo e do computador de bordo
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O horizonte de coerência do mundo gerado vira a métrica que decide onde ele pode ser usado
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Contratos de treino passam a especificar horizonte de coerência como requisito numérico, como hoje se especifica latência
            sinal: fraco
            prazo: 2031
            confianca: media
          - id: e3.2
            ordem: 2
            efeito: O simulador escrito à mão sobrevive como oráculo de verificação e perde o posto de lugar principal de treino
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A prática de dois mundos — treinar no gerado e provar no escrito — vira exigência de auditoria antes de virar recomendação técnica
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Quem opera um espaço físico passa a capturá-lo continuamente para gerar o próprio mundo de treino
        sinal: fraco
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O trabalhador filmado no chão de fábrica vira fonte de dado de treino sem que isso conste do contrato dele
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Um sindicato metalúrgico brasileiro negocia cláusula de captura de imagem para treino em acordo coletivo antes de existir lei sobre isso
                sinal: fraco
                prazo: 2037
                confianca: baixa
  - disrupcao: A política de controle deixa de pertencer a um corpo
    efeitos:
      - id: e5
        ordem: 1
        efeito: O software de robô deixa de ser escrito por corpo e passa a ser portado entre corpos
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A integradora de robótica perde a parte que dava margem — programar a célula — e vira instaladora e prestadora de manutenção
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A automação industrial brasileira sobrevive vendendo captura de dado local e manutenção, não programação de trajetória
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O formato de dado de demonstração vira padrão de fato antes de qualquer padrão formal, e define o que é fácil de treinar
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Um comitê formal ratifica o formato que já venceu, e a norma passa a documentar a prática em vez de dirigi-la
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O agente generalista trata jogo, simulador e fábrica como o mesmo tipo de lugar, porque entra por pixel e comando e não por API
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Design de mundo vira design de currículo, e quem desenha o ambiente está decidindo o que o agente vai saber fazer no mundo real
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Aparece uma métrica de mundo bom de aprender separada de mundo bom de jogar, e as duas divergem em pontos que obrigam a escolher
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Jogos comerciais passam a proibir agente autônomo em termos de uso, fechando o campo de treino mais barato que existe
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O treino migra para mundos gerados justamente porque o mundo comercial fechou a porta, realimentando a primeira raiz
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A transferência funciona entre manipuladores e trava entre morfologias, e essa fronteira vira o limite comercial do generalismo
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A mão dexterosa, e não o modelo, define o preço e o prazo do humanoide
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Corpos de tarefa estreita e poucos graus de liberdade tomam o mercado que o humanoide prometeu, e o humanoide fica na demonstração e na pesquisa
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A certificação por unidade de corpo apaga a economia de um modelo para muitos corpos
            sinal: fraco
            prazo: 2033
            confianca: media
      - id: e8
        ordem: 1
        efeito: Quem tem dado de teleoperação vira fornecedor de insumo, e o teleoperador treina o próprio substituto
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A coleta de dado corporal migra para onde a hora é barata, e o Brasil entra na cadeia por baixo, como coletor e não como fabricante
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A cláusula de propriedade do gesto aparece em contrato de trabalho antes de aparecer em lei
                sinal: fraco
                prazo: 2035
                confianca: baixa
  - disrupcao: O corpo vira plataforma padronizada, barata e geograficamente concentrada
    efeitos:
      - id: e9
        ordem: 1
        efeito: Ter um corpo deixa de ser decisão de capital e vira decisão de compra
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O laboratório universitário deixa de construir o corpo e passa a comprá-lo, e a pesquisa converge para o que o corpo comprado já sabe fazer
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A diversidade morfológica da pesquisa cai, e com ela a chance de descobrir controle que não se pareça com o humano
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: A concentração geográfica do corpo vira instrumento de política industrial e não de mercado
            sinal: forte
            prazo: 2030
            confianca: alta
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Um controle de exportação sobre atuador ou mão dexterosa põe a pesquisa ocidental no gargalo físico, não no gargalo de modelo
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e9.3
            ordem: 2
            efeito: O custo marginal de tentar cai e a robótica ganha cultura de protótipo descartável, com passivo de bateria e eletrônico embarcado
            sinal: fraco
            prazo: 2033
            confianca: baixa
      - id: e10
        ordem: 1
        efeito: A norma chega depois da prática e deixa de fora justamente a parte nova
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O robô de serviço opera em vazio normativo até que um acidente force a criação da categoria
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A primeira regra vinculante sobre humanoide em espaço público nasce municipal, não nacional nem internacional
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: A exigência de função de supervisão humana fixa um operador por máquina e apaga parte da economia prometida pela autonomia
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e11
        ordem: 1
        efeito: A calçada vira o ponto de estrangulamento da IA física, e quem decide sobre ela é vereador
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Operadora de robô de entrega passa a comprar acesso a calçada como se compra ponto comercial, e o custo de rua entra na planilha
            sinal: fraco
            prazo: 2032
            confianca: media
          - id: e11.2
            ordem: 2
            efeito: Acessibilidade vira o argumento que decide, e quem usa cadeira de rodas ganha poder de veto que não teve sobre nenhuma outra tecnologia recente
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: O projeto de espaço público passa a ter uma camada legível por máquina no mesmo elemento que já é legível por pessoa
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A IA física morre cara, e o protótipo que funciona na demonstração não sobrevive à conta de manufatura
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O caminho que escala é o corpo estreito e barato, e não o humanoide de propósito geral
            sinal: forte
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A margem do serviço colapsa antes de a tecnologia amadurecer, e a consolidação chega antes da competência
                sinal: medio
                prazo: 2033
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: O trabalho físico não desaparece, é reclassificado de operar para supervisionar, calibrar e consertar
            sinal: medio
            prazo: 2034
            confianca: media
```

### 5.1 Os mecanismos — R1, o ambiente gerado

O bloco acima diz **o quê**. Aqui está o **porque**, que é o que separa roda de lista.

**`e1` — encomendar distribuição em vez de modelar cena.** Porque gerar um mundo a partir de uma descrição curta torna o custo marginal de *mais uma variação* praticamente zero, enquanto modelar à mão mantém esse custo linear no número de cenas. Quando o custo marginal cai a zero, o que se otimiza deixa de ser a cena e passa a ser a **distribuição**: quantas variações de luz, de atrito, de geometria. O artefato que sustenta isso hoje é o `SimWorld Studio` — um agente de código que traduz prompt em mundo compatível com Gymnasium sobre Unreal Engine 5 e ajusta a dificuldade conforme o desempenho do agente, com ganho medido de 18 pontos de taxa de sucesso sobre ambiente fixo e 40 pontos sobre agente não treinado. *Classe de referência para o prazo 2031:* a passagem de "escrever consulta SQL à mão" para "definir esquema e deixar o otimizador escolher o plano" levou cerca de uma década a partir do momento em que o otimizador ficou confiável. Mudança de fluxo de trabalho de engenharia, não de ferramenta, é lenta: por isso 2031 e não 2028. *Sinal médio:* dois artefatos verificáveis (SimWorld Studio publicado em 05/2026, Project Genie em assinatura desde 01/2026), nenhum deles em uso industrial declarado.

**`e1.1` — o acervo de mundos vira ativo.** Porque treinar precisa de mundo, e mundo bom já existe aos milhares: jogos publicados, gêmeos digitais de fábrica, cenários do `CARLA` e do `AirSim`. Quem já pagou para construí-los tem um estoque que passa a ter segundo comprador. *Sinal fraco:* a inferência é forte, o artefato é zero — não abri nenhum contrato de licenciamento de mundo para treino nesta rodada. Por isso `confianca: baixa`, apesar de o raciocínio ser direto.

**`e1.2` — o critério de cobertura no lugar da cena.** Porque, se a máquina gera a cena, o que resta de humano é dizer *o que precisa estar coberto*. É o mesmo deslocamento que levou o testador de software a escrever critério de cobertura em vez de caso de teste. Note que este efeito **não** é "surge uma nova profissão" genérico: é o mesmo profissional, com entregável diferente, e o mecanismo está nomeado.

**`e2` — a avaliação migra para dentro do mundo gerado.** Porque avaliar no mundo real exige resetar a cena, repetir a política muitas vezes e comparar checkpoints em condições iguais — isto é, exige exatamente o que o mundo físico não dá de graça: **reprodutibilidade**. O modelo de mundo dá. O número que muda o jogo é a correlação: r = 0,989 e ρ = 0,970 entre a nota dentro do RoboWorld e a nota no robô, e correlação forte relatada em quatro políticas (DP, ACT, π0, π0.5) no simulador interativo de 17/07/2026. *Classe de referência para 2030:* a aceitação de simulação como prova em engenharia estrutural — do primeiro artigo de elementos finitos correlacionando com ensaio ao aceite em código de obra — levou décadas; mas aqui o ciclo é de software, e o comparável melhor é a **validação cruzada em aprendizado de máquina**, que foi de técnica publicada a exigência de revisor em cerca de cinco anos. Fico com cinco a seis anos: 2030. *Sinal médio:* dois artefatos de 2026, nenhum aceite por terceiro.

**`e2.1` e `e2.1.1` — o mundo ganha versão.** Porque evidência que não é reproduzível não é evidência, e reproduzir exige congelar o gerador. Uma vez congelado e nomeado, ele vira objeto de referência — e a cadeia de responsabilidade passa a poder apontar para ele. Daí `e2.1.1`: o recall que nomeia checkpoint. Está em **2037, fora do horizonte** deste mapa, e fica declarado: é o efeito mais distante da roda porque exige, antes, que exista base instalada grande o bastante para haver recall.

**`e2.2` — a seguradora precifica a política.** Porque o seguro precisa de uma unidade de risco estável, e num mundo em que o mesmo corpo roda políticas diferentes a cada atualização, o corpo não é essa unidade. O sinal existe e é fraco: seguradoras já introduziram exclusões para deriva algorítmica e laço de decisão autônomo, e há relato de precificação pelo que a máquina **tem permissão de fazer**, com abatimento por salvaguarda imposta em código. É pouco, e é por isso que a confiança é baixa e o prazo foi para 2034.

**`e2.3` — RETROAÇÃO, com dono.** Porque o Regulamento (UE) 2023/1230, aplicável a partir de **20/01/2027**, traz como requisito essencial que a máquina autônoma tenha função de supervisão que permita a um operador humano monitorar, ser alertado e intervir. Um regime assim pede rastro auditável de comportamento — e comportamento demonstrado num vídeo gerado por modelo proprietário, sem reprodutibilidade garantida, é o oposto de rastro auditável. Este é o freio mais concreto de R1, e ele tem data. *Sinal médio:* o regulamento existe e a data é certa; o que ainda não existe é a decisão de um organismo notificado recusando evidência gerada.

**`e3` — o horizonte de coerência vira a métrica.** Porque o modo de falha do mundo gerado não é errar um pixel: é **deixar de ser o mesmo mundo**. O WorldRoamBench mede isso em quatro dimensões e em janelas de 10 a 60 segundos, e o resultado é que nenhum modelo passa em todas. Uma vez que a falha é temporal, a especificação vira temporal. *Sinal forte:* há benchmark publicado, com mais de dez modelos e mais de 600 casos — é artefato, não inferência. *`confianca: alta`* porque a métrica já está sendo escrita; só falta ela sair do artigo para o contrato.

**`e3.2` — o simulador escrito à mão sobrevive como oráculo.** Porque as duas coisas erram de modos diferentes: o motor de física erra por **modelo errado do mundo** (atrito, contato, folga) e o modelo gerativo erra por **alucinação e deriva**. Erros com causas diferentes não se cancelam nem se escondem: valem como verificação cruzada. E a evidência de mercado sustenta: `Genesis` com 29.934 estrelas e commit diário, `MuJoCo` com 15.077 e commit diário, `IsaacLab` com 8.108 — ninguém está abandonando o motor de física em 2026. *Este é o efeito que mais tem cara de ser verdade e que eu mais desconfio*; ver 7.2.

**`e4` — o espaço vira sua própria fonte.** Porque, se o mundo de treino tem de parecer com o mundo de operação, a fonte mais barata de parecença é o próprio local. Vaza para o tema 10 (captura do mundo real em 3D) e isso está declarado. *Sinal fraco, `confianca: baixa`*: é o efeito de 1ª ordem mais especulativo da roda, e está assim de propósito — ordem não é confiança.

**`e4.1` e `e4.1.1` — quem perde.** Porque a captura contínua do chão de fábrica registra pessoas trabalhando, e o gesto de quem trabalha é exatamente o dado que a política precisa. O trabalhador vira insumo sem contrapartida contratual. `e4.1.1` nomeia o ator brasileiro concreto — sindicato metalúrgico em acordo coletivo — porque no Brasil a via realista é a negociação coletiva, não a lei: o PL 2338/2023 seguia aguardando parecer de relator em 12/09/2026 e nenhum dos 37 apensados, pela ficha de tramitação, trata de agente com corpo.

### 5.2 Os mecanismos — R2, a política sem corpo

**`e5` — software portado, não escrito.** Porque o Motion Transfer aprende de dados de corpos diferentes e generaliza o movimento sem especializar o modelo por robô, e porque o GR00T N1 mostrou desempenho acima das linhas de base de aprendizado por imitação **em múltiplos corpos** nos mesmos benchmarks. Quando o mesmo peso roda em dois corpos, a unidade de engenharia deixa de ser o corpo. *Classe de referência para 2030:* a passagem de driver por placa para driver por classe de dispositivo (USB HID, 1996 → ubiquidade por volta de 2003) levou cerca de sete anos, e exigiu que alguém publicasse a classe. Aqui a "classe" é o par formato de dado + arquitetura VLA, publicado em 2025–2026. Sete anos a partir de 2025 daria 2032; puxo para 2030 porque o ciclo de software hoje é mais rápido, e digo que puxei.

**`e5.1` e `e5.1.1` — quem perde, com nome.** Porque a margem da integradora de automação está na programação da célula — o trabalho de fazer *aquele* robô fazer *aquela* tarefa naquela fábrica. Se a política é portada, esse trabalho encolhe para calibração. Sobra instalação, manutenção e o que não é portável: **o dado local**. É por isso que `e5.1.1` aponta a automação brasileira para captura de dado, e não para programação — é a única parte da cadeia que a geografia protege.

**`e5.2` — o formato vence antes do modelo.** Porque interoperabilidade é vantagem composta: cada conjunto de dados publicado no `LeRobotDataset` aumenta o valor de publicar o próximo nele. Os números sustentam: 27.429 estrelas e 5.634 forks no `lerobot`, contra 8.053 no `Isaac-GR00T` e 11.807 no `Cosmos`. O formato tem mais adesão que qualquer modelo. E isso **decide o que é fácil de treinar**: o que não cabe no formato não entra no conjunto, e o que não entra no conjunto o modelo não aprende. *Classe de referência:* o ONNX levou cerca de quatro anos de lançamento (2017) a suporte universal nas pilhas de inferência; o `LeRobotDataset` está em ano dois. Daí 2029.

**`e6` — o mesmo tipo de lugar.** Porque o `SIMA 2` entra nos treze jogos pelo mesmo canal que um jogador — pixels na tela, teclado e mouse — e **sem acesso ao código**. Um agente que não precisa de API não distingue jogo de simulador de painel de supervisão de fábrica: para ele, tudo é uma tela com regras. Esse é, literalmente, o mecanismo pelo qual a pergunta de 2ª ordem do enunciado do tema vira efeito de 1ª ordem aqui. *Prazo 2032, não 2029*, porque o próprio blog do SIMA 2 declara os limites que impedem isso hoje: horizonte longo, memória curta pela janela de contexto exigida para latência baixa, e ação precisa de baixo nível. Nenhum desses é resolvido por escala sozinha.

**`e6.1` — design de mundo é design de currículo.** Porque o desempenho do agente depende da distribuição de situações que ele encontrou, e a distribuição é produto de quem desenhou o mundo. Medido: 18 pontos de ganho quando o ambiente evolui com o agente. Quem desenha nível deixa de responder só por "isto é divertido?" e passa a responder também por "isto ensina o quê?". **É aqui que o tema encosta mais fundo em mídia e interação, e é o achado que eu levaria para a aula.**

**`e6.2` — RETROAÇÃO.** Porque o jogo comercial é propriedade de alguém, e treinar agente dentro dele consome servidor, distorce economia interna e cria risco de imagem. O caminho de bloqueio já existe e é barato: uma linha nos termos de uso. `e6.2.1` fecha o laço — fechada a porta do mundo comercial, o treino migra para o mundo gerado, **realimentando R1**. Este é o ciclo de retroalimentação principal do mapa.

**`e7` — a fronteira entre braço e morfologia.** Porque todos os corpos nomeados no anúncio do Gemini Robotics 1.5 — ALOHA 2, Franka bi-manual, Apollo — são manipuladores com cinemática parecida; transferir entre eles é interpolar dentro de uma família. Transferir de um braço para uma perna, ou de uma pinça de dois dedos para uma mão de 22 graus de liberdade, é extrapolar para fora dela. *`sinal: medio` e `confianca: alta`:* a confiança é alta não porque haja muitos artefatos, mas porque o mecanismo é estrutural — espaço de ação diferente, espaço de observação diferente, dinâmica de contato diferente — e há um artefato negativo forte: a mão do Optimus Gen 3, que travou o programa por mais tempo que qualquer outra peça e só ficou pronta em 17/02/2026.

**`e7.1` e `e7.1.1` — a mão define o preço.** Porque a mão concentra atuador, sensor tátil e transmissão em volume mínimo: no projeto de referência da NVIDIA são 22 graus de liberdade **por mão**, contra 31 no corpo inteiro do H2 Plus. `e7.1.1` é a consequência econômica: se a mão é cara e difícil, o corpo que ganha mercado é o que não precisa dela — o que converge com `e12.1`.

**`e7.2` — a certificação por unidade.** Porque o Sistema de Normas chinês de 28/02/2026 organiza-se, entre outras coisas, por **sistemas completos** e por segurança e ética, e a ISO 10218 certifica aplicação e célula. Nenhum dos dois certifica *política*. Enquanto a unidade de certificação for o sistema completo, cada corpo novo recomeça o processo, e a economia de escala do modelo único não chega ao comprador.

**`e8` — o teleoperador treina o substituto.** Porque o dado que o modelo de fundação precisa é demonstração humana, e demonstração humana é hora de trabalho: US$ 15/h em teleoperação simples, mais de US$ 150/h em programa de humanoide multissensor, com 5 a 50 episódios por hora-operador conforme o rig. Isso define quem paga e quem recebe. *Sinal médio:* os números de custo vêm de fornecedores do setor (ver 12.5 sobre a procedência) mas a estrutura é confirmada pelo `Open X-Embodiment` — mais de 1 milhão de trajetórias reunidas de 21 instituições, o que só existe porque alguém pagou por cada uma.

**`e8.1` e `e8.1.1` — a nota brasileira dentro de R2.** Porque a coleta é trabalho intensivo em mão de obra, com pouca exigência de capital e nenhuma de fabricação — exatamente o perfil de atividade que migra para país de hora barata. É a versão corporal do que já aconteceu com anotação de imagem. E `e8.1.1` diz onde a regra aparece primeiro: no contrato, não na lei. Mesmo raciocínio de `e4.1.1`, e a convergência dos dois está registrada em 5.4.

### 5.3 Os mecanismos — R3, o corpo como plataforma

**`e9` — de capital a compra.** Porque US$ 13.500 sai de rubrica de investimento e entra em rubrica de custeio, e essas duas rubricas têm processos de aprovação diferentes em qualquer instituição. O mecanismo não é o preço em si: é **a mudança de quem assina**. *Sinal forte:* 19.100 unidades embarcadas num semestre com mais de 70% indo para uso industrial e comercial não é vitrine.

**`e9.1` e `e9.1.1` — a monocultura de corpo.** Porque comprar é mais barato que construir, e porque há um projeto de referência com pilha de software pronta — Isaac Teleop, Isaac Sim, Isaac Lab, Isaac ROS, mais os modelos GR00T. Quem adota a referência herda as afordâncias da referência. `e9.1.1` é a consequência de longo prazo: pesquisa que converge para um corpo descobre menos sobre corpos que ninguém fabricou. *Este efeito é o que eu mais gostaria que fosse falso*, e está nomeado em 7.6 como suspeita de viés.

**`e9.2` — a geografia.** Porque mais de 97% dos embarques saem da China, a inteligência corporificada entrou como trilha própria entre as prioridades do 15º Plano Quinquenal, o MIIT criou comitê técnico dedicado em 12/2025 e publicou sistema de normas em 28/02/2026. Concentração de oferta somada a política industrial explícita **é** instrumento de política. *`confianca: alta`* porque as três condições são fatos publicados, não projeções. `e9.2.1` é a forma específica que isso pode tomar, e é especulativa — daí `baixa`.

**`e9.3` — o passivo.** Porque protótipo barato é protótipo descartado, e cada corpo descartado carrega bateria de quase 1 kWh e eletrônica embarcada. É a linha ecológica do STEEP e é honestamente fraca: não abri nenhum dado de descarte de robô nesta rodada.

**`e10` — a norma que não alcança.** Porque a ISO 10218:2025 admite a plataforma móvel mas **exclui os perigos de mobilidade**, e exclui serviço, saúde e doméstico. Isto é: a norma cobre o humanoide parado numa célula industrial e não cobre o humanoide andando — que é a única coisa que o torna diferente de um braço. É a definição de norma que chega depois. *Sinal forte, `confianca: alta`:* o fato já aconteceu, com data e preço de exemplar.

**`e10.2` — a supervisão obrigatória.** Porque o Regulamento de Máquinas exige, a partir de 20/01/2027, que a máquina autônoma permita a um humano monitorar, ser alertado e intervir. Se a intervenção tem de ser possível em tempo útil, alguém tem de estar olhando — e a razão robô-por-operador, que é o numerador da economia da autonomia, para de crescer. *Classe de referência:* a exigência de condutor de segurança em teste de veículo autônomo manteve a razão em 1:1 por quase uma década, de 2015 a 2023, até a Waymo retirar o condutor em operação comercial. Dez anos entre a regra e a dispensa.

**`e11` — a calçada.** Porque a calçada é bem público sob jurisdição municipal, e o municipal decide por pressão de vizinhança, não por parecer técnico. O mecanismo está inteiro no caso de Chicago: consulta de bairro, 83% discordando fortemente, e o vereador Daniel La Spata barrando a expansão da Coco Robotics e da Serve Robotics no 1º Distrito em 02/03/2026 — mantendo apenas o piloto já existente a leste da Wood Street. São Francisco chegou antes ao mesmo lugar por outra via: limite de nove dispositivos, 3 mph, operador por perto. Toronto proibiu. *Sinal forte, `confianca: alta`.*

**`e11.2` — o veto da acessibilidade.** Porque os argumentos que venceram em Chicago são específicos e verificáveis: robô parado no meio da calçada, obstrução a cadeira de rodas e andador, interação confusa em rebaixamento de meio-fio, e indefinição sobre quem responde por colisão com pessoa. Isso dá a um grupo historicamente sem poder de veto sobre tecnologia um **argumento operacional**, não moral — e argumento operacional é o que pauta ordenamento urbano. `e11.2.1` é o desfecho de projeto: o piso tátil que já existe para a pessoa passa a carregar também marca legível por máquina. É o único efeito francamente otimista da roda e está marcado como tal.

**`e12` — a IA física morre cara.** Porque o custo de um sistema físico não cai com escala de software: ele cai com escala de manufatura, e escala de manufatura exige volume que ainda não existe. O Blue Jay é a demonstração limpa: anunciado em 22/10/2025 cobrindo 75% dos tipos de item de um galpão, **arquivado em janeiro de 2026** por custo de manufatura e dificuldade operacional, fora de operação em 25/02/2026, seguido de demissões na divisão de robótica em março. Três meses da demo ao arquivo, dentro da empresa com mais robôs instalados do mundo. *Sinal forte, `confianca: alta`.*

**`e12.1` e `e12.1.1` — o corpo estreito ganha, e a margem some.** Porque tarefa estreita permite corpo simples, corpo simples permite volume, e volume permite preço. O caso já ocorrido é brasileiro: a frota de drone saltou 192% em dois anos e meio e **o preço do serviço caiu de cerca de R$ 70 para cerca de R$ 30 por hectare** antes de o gargalo de pilotos e de assistência ser resolvido. *Classe de referência para `e12.1`, prazo 2029:* essa mesma frota levou cerca de dois anos e meio para 2,6× — quando o corpo é barato e a tarefa é estreita, a adoção física é rápida. Por isso `e12.1` está em 2029, e não em 2033.

**`e12.2` — o que sobra do trabalho.** Porque nenhuma das frotas físicas examinadas nesta rodada dispensou pessoas: o drone agrícola criou déficit de 12 a 15 mil pilotos certificados, o robô de calçada exige operador por perto por lei em São Francisco, e a máquina autônoma exigirá supervisão por regulamento europeu a partir de 2027. O trabalho migra de executar para **supervisionar, calibrar e consertar** — e o gargalo declarado da frota brasileira é justamente manutenção e peça, com drone parado até 20 dias. *Prazo empurrado para 2034 na bateria do §6; ver 7.9.*

### 5.4 Cruzamentos

**Convergência 1 — o mundo como currículo.** `e1.1` (o acervo de mundos 3D vira ativo de dados, vindo de R1) e `e6.1` (design de mundo vira design de currículo, vindo de R2) chegam ao mesmo lugar por caminhos independentes: um pela oferta — quem tem mundo pode vendê-lo; outro pela demanda — quem aprende depende do mundo que encontrou. **Convergência independente é o achado mais forte deste mapa**, e é também o que liga o tema diretamente ao público-alvo: quem projeta mundo 3D em 2036 está projetando duas coisas ao mesmo tempo, e elas podem pedir decisões opostas (ver Contradição 2).

**Convergência 2 — o contrato antes da lei.** `e4.1.1` (cláusula de captura de imagem em acordo coletivo, de R1) e `e8.1.1` (cláusula de propriedade do gesto em contrato de trabalho, de R2) dizem a mesma coisa sobre o Brasil: a regra sobre o corpo humano como fonte de dado de treino vai nascer em negociação privada, não em legislação. A razão é a mesma nos dois ramos — o PL 2338/2023 aguardava parecer de relator em 12/09/2026, três anos e meio após a apresentação, e os 37 projetos apensados não tratam de agente com corpo.

**Convergência 3 — o corpo estreito.** `e7.1.1` (corpos de poucos graus de liberdade tomam o mercado, de R2, por causa da mão) e `e12.1` (o corpo estreito e barato é o que escala, de R3, por causa da manufatura) chegam ao mesmo desfecho por mecanismos diferentes: um é limitação de aprendizado, outro é limitação de custo. Quando dois mecanismos independentes apontam para o mesmo lugar, a aposta fica bem mais segura — e é por isso que `e12.1` é o único efeito de 2ª ordem com `confianca: alta` na roda inteira.

**Retroalimentação — o ciclo principal.** `e6.2` (jogos proíbem agente) → `e6.2.1` (treino migra para mundo gerado) → **reforça R1**. Quanto mais o mundo comercial se fecha, mais valioso fica o mundo gerado, mais investimento ele recebe, mais rápido resolve o problema de horizonte de coerência de `e3`. O ciclo é de reforço e **acelera a raiz 1 na exata medida em que a raiz 2 é bloqueada**.

**Retroalimentação — o ciclo de freio.** `e2` (avaliação migra para o mundo gerado) → base instalada cresce sobre evidência gerada → uma falha correlacionada acontece (ver o wildcard 6.5) → `e2.3` (organismos notificados recusam evidência gerada) → o custo de provar volta a subir → pressão por procedência de mundo, isto é, `e2.1`. É um ciclo de amortecimento: ele não mata R1, mas transforma o produto de "mundo gerado" em "mundo gerado **com versão e cadeia de custódia**".

**Contradição 1 — o corpo barato contra a responsabilidade cara.** `e9` diz que o corpo vira mercadoria de catálogo; `e2.3`, `e7.2` e `e10.2` dizem que provar que ele é seguro fica mais caro e mais individualizado. As duas não podem valer ao mesmo tempo num mesmo mercado: ou o corpo é commodity e a responsabilidade adere à política (que é copiável), ou a responsabilidade adere à unidade e o corpo não é commodity coisa nenhuma. **Não resolvo.** O que decide é uma escolha regulatória concreta e datável: se a unidade de certificação, no Regulamento de Máquinas e nas normas ISO derivadas, for a **política** ou o **sistema completo**. Hoje o texto aponta para sistema completo. Se isso mudar, metade da roda de R3 muda de sinal.

**Contradição 2 — mundo bom de jogar contra mundo bom de aprender.** `e6.1.1` prevê que as duas métricas divergem. Elas divergem por um motivo específico: o mundo bom de jogar tem curva de dificuldade desenhada para *uma* pessoa mediana; o mundo bom de aprender precisa de cauda — situações raras, feias, improváveis, que nenhum designer poria num nível. O que decide é quem paga o mundo. Se o treino paga mais que o jogador, o jogo piora.

### 5.5 Cobertura STEEP e quem perde

| Eixo | Efeitos | Observação |
|---|---|---|
| **Social** | `e4.1`, `e8`, `e11.2`, `e12.2` | o corpo humano como fonte de dado; acessibilidade como poder de veto |
| **Tecnológico** | `e1`, `e2`, `e3`, `e5`, `e6`, `e7` | o grosso da roda; é o eixo mais bem servido e isso é um viés |
| **Econômico** | `e5.1`, `e8.1`, `e9`, `e12`, `e12.1.1` | margem da integradora, hora do teleoperador, conta de manufatura |
| **Ecológico** | `e9.3` | **fraco, e declaro**: um efeito só, com sinal fraco e sem dado aberto. Não forcei os outros |
| **Político** | `e2.3`, `e9.2`, `e10`, `e10.2`, `e11` | norma europeia, plano chinês, vereador de Chicago |

**Quem perde, nomeado.** (1) A integradora de automação, que perde a programação da célula (`e5.1`). (2) O engenheiro de simulação que modela cena à mão (`e1`, `e1.2`). (3) O teleoperador, que produz o dado que o dispensa (`e8`). (4) O operador de drone agrícola brasileiro, cuja margem por hectare já caiu para menos da metade antes de a tecnologia amadurecer (`e12.1.1`). (5) O pedestre com mobilidade reduzida, que absorve o custo da ocupação da calçada — e que, por isso mesmo, ganha poder de veto (`e11.2`). (6) O pesquisador de morfologia não humanoide, que perde financiamento para o corpo de catálogo (`e9.1.1`). (7) O jogador humano, se os termos de uso e o anti-cheat encarecerem por causa de agentes (efeito cortado; ver 12.1).

## 6. Sinais fracos e wildcards

### 6.1 O corpo entrando no raciocínio, não só na execução

**Onde foi visto.** `ros-claw/rosclaw` (MIT, 197 estrelas, commit em 11/09/2026 — véspera desta rodada). A descrição é explícita: "infraestrutura de tempo de execução autoevolutiva para IA física e agentes corporificados. Ancore agentes de IA em corpos de robô com e-URDF, segurança em sandbox, roteamento de capacidade, captura de práxis, memória física, intervenção em tempo de execução e evolução de habilidade." Duas afirmações do repositório importam: **"nenhuma saída de modelo deve controlar diretamente um robô"** — toda ação passa por validação em sandbox antes do despacho físico — e o `ExecutionReceipt`, objeto que carrega evidência observável do que fisicamente aconteceu, formando trilha auditável entre intenção e resultado.

**O que mudaria.** Hoje a restrição física é tratada como camada de segurança *depois* do modelo. Se ela entra no **modelo de execução** — o corpo e seus limites como parte do que o agente raciocina, via e-URDF estendido —, então `e2.1` e `e2.3` mudam de forma: a evidência deixa de ser um vídeo e passa a ser um recibo. Isso reconcilia R1 com o regime de certificação, em vez de opô-los.

**Sinal observável de que está crescendo.** Uma API de restrição de corporificação entrar no núcleo do ROS 2 ou na pilha Isaac ROS, e não em pacote de terceiro. Ou: um organismo notificado citar recibo de execução como forma aceitável de evidência.

### 6.2 A própria área ainda não decidiu se modelo de mundo é necessário

**Onde foi visto.** O workshop **`Do Robots Need World Models?`** do CoRL 2026, organizado por Alberta Longhini, Wenlong Huang, Bardienus Duisterhof, Lasse Peters, Holly Dinkel, Jeffrey Ichnowski e Fei-Fei Li. Não é um painel de celebração: são seis moções em debate estruturado, com **Chelsea Finn** (Stanford / Physical Intelligence) do lado de que políticas fim-a-fim internalizam estrutura preditiva sem modelo explícito, contra **Yunzhu Li** (Columbia) e **Vincent Sitzmann** (MIT / Rhoda AI) do lado dos modelos explícitos e generativos. Uma das moções: "os benchmarks atuais não conseguem determinar se modelos de mundo são necessários".

**O que mudaria.** Se a resposta consolidar do lado de Finn, R1 não deixa de existir — o mundo gerado continua útil para *gerar dado* —, mas **a metade mais consequente de R1 cai**: o modelo de mundo como lugar de avaliação (`e2` e toda a sua descendência) pressupõe que o modelo captura a dinâmica bem o bastante para ser oráculo. Se a comunidade concluir que não captura, `e2`, `e2.1`, `e2.2`, `e2.3` e `e2.3.1` viram história.

**Sinal observável.** Para onde vão os prêmios de melhor artigo do CoRL e do RSS de 2027, e se aparece um benchmark que resolva a moção 6 — isto é, que consiga distinguir política com modelo de política sem modelo em desempenho fora da distribuição.

### 6.3 A seguradora lendo o código-fonte

**Onde foi visto.** Relatos de mercado de seguro de 2026 descrevem precificação baseada **no que a máquina tem permissão de fazer**, com abatimento por salvaguarda imposta em código, e exclusões já introduzidas para deriva algorítmica e laço de decisão autônomo.

**O que mudaria.** Se o prêmio passa a depender de uma propriedade verificável do código, o incentivo econômico inverte: passa a valer a pena **restringir** o agente e provar a restrição. Isso é a coisa mais parecida com uma força de mercado a favor de segurança que apareceu nesta rodada — e ela não vem de regulador nem de ética, vem de atuário.

**Sinal observável.** Uma tabela de taxas publicada, com classes definidas por capacidade de política (e não por peso, velocidade ou setor). E a entrada de uma resseguradora grande no ramo com produto nomeado.

### 6.4 O formato venceu antes de a disciplina perceber

**Onde foi visto.** `huggingface/lerobot` tem 27.429 estrelas — mais que qualquer simulador, mais que o `Cosmos` e o `Isaac-GR00T` somados. E do outro lado: `MetaDrive`, a escolha nº 1 de desenvolvimento da turma, tem **1.244 estrelas e último push em 15/08/2025**.

**O que mudaria.** Se o ponto de gravidade da área é o formato de dado e não o simulador, então a pergunta de projeto para 2036 não é "qual motor de física usar" e sim "de quem é o dado e em que formato". Isso reordena `e5.2` de efeito de 2ª ordem para causa.

**Sinal observável.** Um fabricante de robô que não seja a Hugging Face publicar seu conjunto oficial em `LeRobotDataset` como formato primário — ou um comitê ISO citá-lo.

### 6.5 Wildcard — a falha correlacionada de frota

**O mecanismo.** Uma frota de N corpos idênticos, executando a mesma política, treinada no mesmo mundo gerado, herda **a mesma cegueira**. Não é a falha de um robô: é a falha de todos, na mesma situação, ao mesmo tempo — a geometria, a iluminação ou o material que o gerador nunca produziu. É monocultura, e monocultura falha junto. As três condições já existem separadamente: corpo padronizado (projeto de referência aberto, `e9`), política única portada (`e5`), mundo gerado como origem do treino (`e1`). O que ainda não existe é a escala.

**Por que é improvável até 2036.** Porque as frotas ainda são pequenas e heterogêneas: 19.100 unidades em um semestre no mundo inteiro, repartidas entre pelo menos cinco fabricantes e dezenas de configurações. Falha correlacionada precisa de homogeneidade, e a homogeneidade ainda não chegou.

**O que faria com o mapa.** Mata `e2` e sua descendência em um ciclo de notícia. Acelera `e2.3` (recusa de evidência gerada) em cinco anos e torna `e10.1` (a categoria normativa criada por acidente) quase certo. E antecipa `e2.1.1` — o recall que nomeia versão de mundo — de 2037 para dentro do horizonte.

**Sinal precoce.** Um aviso de recall, ou uma notificação de incidente a autoridade, que identifique o lote pela **versão do conjunto de treino ou do checkpoint de política**, e não pelo número de peça. É a primeira vez que a cadeia de suprimento de software aparece num documento de segurança de produto físico.

### 6.6 Wildcard — o controle de exportação sobre a mão

**O mecanismo.** Mais de 97% dos humanoides embarcados são chineses, a inteligência corporificada é trilha prioritária do 15º Plano Quinquenal, e a peça mais difícil do corpo é a mão dexterosa — 22 graus de liberdade por mão no projeto de referência, 50 atuadores na do Optimus Gen 3. Uma restrição de exportação sobre atuador de alta densidade ou mão completa não pararia a pesquisa ocidental de modelos; pararia a pesquisa ocidental **de corpos**, que é onde o dado nasce.

**Por que é improvável.** Porque hoje o fluxo comercial serve à China: exportar corpo é exportar dependência de plataforma. Restringir seria abrir mão de padronizar o mundo com hardware próprio.

**O que faria com o mapa.** Inverte o sinal de `e9` inteiro: o corpo deixa de ser decisão de compra e volta a ser decisão de capital, no Ocidente. E dá a `e9.2.1` — hoje `baixa` — prazo curto.

**Sinal precoce.** Um item de atuador, redutor harmônico ou mão multiarticulada aparecendo em lista de controle de exportação de qualquer um dos dois lados.

### 6.7 Wildcard — a proibição municipal brasileira

**O mecanismo.** Toronto proibiu robô de calçada. São Francisco limitou a nove. O 1º Distrito de Chicago barrou a expansão com 83% de rejeição em consulta. O Brasil tem calçada estreita, disputada e frequentemente irregular, e câmaras municipais com competência sobre uso do passeio público. Basta uma operação de entrega por robô numa capital para que o mecanismo de Chicago se repita — e aqui o argumento de acessibilidade é ainda mais forte, porque a calçada já é hostil antes do robô.

**Por que é improvável até 2030.** Porque ainda não há operação de robô de entrega em escala em capital brasileira — não encontrei nenhuma nesta rodada (ver 12.7).

**O que faria com o mapa.** Torna `e10.1.1` (a primeira regra vinculante nascendo municipal) quase certo, e desloca o debate brasileiro de IA do texto do PL 2338 para a câmara de vereadores, que é onde ele decidiria alguma coisa.

**Sinal precoce.** Um projeto de lei sobre "equipamento autônomo em passeio público" em qualquer câmara municipal de capital.

## 7. Contra o próprio mapa

Esta seção foi escrita **depois** do mapa e **alterou** o mapa. O registro de alterações, com valor antes e depois, está em 7.9.

### 7.1 Pré-mortem — é 2036 e este mapa se mostrou errado. Por quê?

**Razão 1: o modelo de mundo nunca saiu de gerador de dado.** A área decidiu, entre 2027 e 2029, que modelo de mundo serve para aumentar conjunto de treino e não serve para avaliar — porque a correlação de 0,989 do RoboWorld se mostrou específica de tarefas curtas de manipulação de mesa e não sobreviveu a horizonte longo nem a contato rico. O mapa então errou em **todo o ramo `e2`**, que é o ramo do qual saem os efeitos jurídicos e de seguro. *Ação:* `e2` teve o prazo empurrado e a confiança revista; ver 7.9.

**Razão 2: o corpo chinês barato nunca chegou ao Ocidente em escala.** Restrição de exportação, tarifa, ou simples desconfiança institucional mantiveram o humanoide fora de fábrica e de universidade fora da China. O mapa errou por ler os 19.100 embarques como fenômeno global quando **mais de 85% da demanda também é chinesa** — o número está na fonte que abri e eu quase o tratei como mercado mundial. *Ação:* `e9.1` teve a confiança rebaixada.

**Razão 3: a política generalista não generalizou.** O Motion Transfer funcionou entre braços parecidos e nunca atravessou morfologia; cada corpo continuou exigindo seu ajuste fino, seu dado, sua certificação. Isto é, `e7` estava certo e **`e5` estava errado** — e o mapa colocou os dois como se fossem compatíveis, um dizendo que o software é portado e o outro dizendo que a portabilidade trava. *Ação:* `e5` teve prazo empurrado e o conflito está declarado abaixo.

### 7.2 Extrapolação linear

Dois efeitos são "mais do mesmo, maior" e precisam responder por isso.

**`e3.2` — o simulador escrito à mão sobrevive como oráculo.** Isto é extrapolação confortável: o `MuJoCo` e o `Genesis` estão vivos hoje, logo estarão vivos amanhã. A não-linearidade que salva o efeito é que o mecanismo **não é inércia, é complementaridade de modo de falha**: motor de física erra por modelo errado de contato, modelo gerativo erra por deriva. Dois erros com causas distintas não se escondem mutuamente. Se essa complementaridade não se sustentar — se, por exemplo, o modelo gerativo passar a herdar os erros do motor porque foi treinado com dado sintético gerado por ele —, o efeito cai. *Ação: mantido, com o mecanismo de não-linearidade escrito e a condição de falência nomeada.*

**`e9.3` — protótipo descartável e passivo eletrônico.** É extrapolação pura: preço cai, volume sobe, lixo aparece. Não tem mecanismo de não-linearidade e não tem dado. *Ação: confiança rebaixada de `media` para `baixa`.*

### 7.3 Velocidade de adoção — os prazos contra as classes de referência

| Efeito | Prazo original | Classe de referência | Veredito |
|---|---|---|---|
| `e1` | 2029 | fluxo de trabalho de engenharia (SQL declarativo, ~10 anos) | **empurrado para 2031** |
| `e2` | 2029 | validação cruzada: de técnica a exigência, ~5 anos | **empurrado para 2030** |
| `e5` | 2029 | driver por classe de dispositivo (USB HID, ~7 anos) | **empurrado para 2030** |
| `e6` | 2030 | limites declarados pelo próprio SIMA 2 (memória, horizonte) | **empurrado para 2032** |
| `e12.1` | 2033 | frota de drone no Brasil: 2,6× em 2,5 anos | **antecipado para 2029** |
| `e12.2` | 2032 | condutor de segurança em AV: ~10 anos de 1:1 | **empurrado para 2034** |
| `e11` | 2029 | já aconteceu em três cidades entre 2017 e 2026 | mantido |

A regra que apliquei: **nada com sinal fraco fica com prazo anterior a 2030.** Efeito cujo único apoio é inferência não tem como estar visível para o público do mapa em menos de quatro anos.

### 7.4 A raiz que não acontece

**Se R1 não se concretizar** — o mundo gerado fica preso em 60 segundos de coerência e nunca vira lugar de treino nem de prova —, sobram R2 e R3 quase inteiras. A política generalista continua sendo treinada em `Isaac Lab`, `Genesis` e `MuJoCo`, e o corpo continua barateando. Perde-se `e1` a `e4` e descendência: 4 de 1ª ordem, 8 de 2ª, 6 de 3ª. **O mapa encolhe um terço e continua de pé.**

**Se R2 não se concretizar** — cada corpo continua exigindo seu próprio software —, R1 fica sem o seu melhor consumidor (não adianta gerar mundo se a política não transfere), mas R3 fica intacta: o corpo barato continua sendo vendido, apenas não faz nada de interessante sem engenharia dedicada. Curiosamente, **R3 é a raiz mais independente das três**.

**Se R3 não se concretizar** — o corpo continua caro e artesanal —, R1 e R2 viram pesquisa acadêmica sem mercado. O mapa inteiro perde consequência, mas não perde verdade.

**Conclusão do teste:** as três raízes não são uma disfarçada em três. R3 sobrevive sozinha; R1 e R2 dependem uma da outra mas não são a mesma coisa (uma é sobre onde se aprende, outra é sobre quem aprende). O teste **passou**.

### 7.5 Suposições escondidas

1. **Energia e computação continuam disponíveis e baratas.** Todo o mapa assume que rodar milhões de episódios é viável. Se o custo de computação de treino subir, R1 morre primeiro — porque gerar mundo em vídeo é caro por definição.
2. **Os modelos abertos continuam abertos.** O Cosmos 3 é aberto e o GR00T N1 é aberto. Se a NVIDIA fechar as próximas gerações — como o Google já fez ao liberar o Gemini Robotics-ER 1.5 em API e **manter o 1.5 com parceiros selecionados** —, R2 vira dependência de dois fornecedores. O sinal de que isso está acontecendo já está no parágrafo anterior.
3. **A China continua exportando corpo.** Ver o wildcard 6.6.
4. **Não há acidente grave antes de 2030.** O mapa trata o acidente como wildcard, não como linha de base. Se ele vier cedo, toda a roda de R3 acelera pelo lado da restrição.
5. **O Regulamento de Máquinas entra em vigor em 20/01/2027 sem adiamento.** É a única data dura do mapa e várias cadeias dependem dela.
6. **"Corpo" significa corpo físico.** O mapa não trata do agente que age em sistemas digitais com consequência física indireta (comprar, agendar, acionar). Isso é dos temas 4 e 5, e a fronteira foi respeitada — mas ela é porosa e pode ser o erro de recorte desta rodada.

### 7.6 O viés do autor

A zona de interesse declarada é **"Simulação e mundos"**. Isso produz um viés específico e rastreável: **o mapa põe a simulação no centro quando a evidência de 2026 põe o dinheiro e as unidades na manufatura chinesa de hardware.** Dos doze efeitos de 1ª ordem, seis estão em R1 e R2 (as raízes de software) e seis em R3 — mas a densidade de prosa e de mecanismo é claramente maior nas duas primeiras. Um autor de zona "Sistemas embarcados" teria escrito um mapa com R3 valendo metade da roda.

Dois efeitos estão aqui porque o autor gosta do tema: **`e6.1`** (design de mundo vira design de currículo) é a ideia mais bonita do mapa e a que tem menos artefato — um único artigo, de maio de 2026, com ganho de 18 pontos num benchmark próprio. E **`e9.1.1`** (a diversidade morfológica da pesquisa cai) é preocupação de pesquisador, não fato observado: nenhum dado desta rodada mede diversidade morfológica ao longo do tempo.

### 7.7 Calibração

| Ordem | alta | media | baixa | Total |
|---|---|---|---|---|
| 1 | 6 | 5 | 1 | 12 |
| 2 | 2 | 19 | 3 | 24 |
| 3 | 0 | 0 | 17 | 17 |

Números conferidos pelo verificador, não estimados — a primeira versão desta tabela, escrita a olho, dizia 15 `media` e 7 `baixa` na 2ª ordem e um `media` na 3ª; a contagem real é a de cima, e quem estava errado era eu. Fica registrado porque é exatamente o tipo de erro que a seção 8 existe para pegar.

A distribuição cai com a ordem, como tem de cair: **6 de 12 `alta` na primeira, 2 de 24 na segunda, nenhum na terceira** — e a terceira ordem é `baixa` por unanimidade, que é a resposta esperada pelo formato. Os seis `alta` de 1ª ordem são todos de efeitos **já observáveis com artefato datado**: `e3` (WorldRoamBench publicado), `e7` (mão do Optimus, corpos nomeados no Gemini Robotics 1.5), `e9` (19.100 embarques), `e10` (ISO 10218:2025 no papel), `e11` (três cidades decidiram), `e12` (Blue Jay arquivado). Nenhum deles é aposta sobre o futuro; são leituras do presente com consequência declarada. Os dois `alta` de 2ª ordem são `e9.2` (três fatos publicados: plano quinquenal, comitê MIIT, sistema de normas) e `e12.1` (dois mecanismos independentes convergindo, mais o caso brasileiro já ocorrido). Os três `baixa` de 2ª ordem são os três que a bateria rebaixou: `e1.1`, `e2.2` e `e9.3` — inferência pura, relato de mercado sem tabela, e extrapolação sem dado, respectivamente.

### 7.8 O teste da causa solta

Passei cada efeito de 2ª e 3ª ordem pela pergunta "isto aconteceria do mesmo jeito, por outro motivo?". Três não passaram:

- **`e6.3` (anti-cheat deixa de distinguir agente de jogador)** — não passou. A detecção de bot já está quebrando por causa de automação comum, macro e serviço de boosting, sem nenhuma relação com agente corporificado. Removido; ver 12.1.
- **`e1.3` (ferramentas de autoria 3D ganham modo "exportar para treino")** — não passou. É melhoria sustentadora de ferramenta existente, e aconteceria com qualquer aumento de demanda por dado 3D, inclusive vindo do tema 10. Removido; ver 12.1.
- **`e12.2` (o trabalho físico é reclassificado)** — passou por pouco. Reclassificação de trabalho físico acontece com qualquer onda de automação, inclusive sem IA nenhuma. Mantido **apenas** porque o mecanismo específico aqui é a **exigência regulatória de supervisão** do Regulamento de Máquinas, que é particular a agente autônomo. Se essa exigência cair, o efeito sai.

### 7.9 Registro de alterações — o que a bateria derrubou

**R1:**
- `e1`: prazo **2029 → 2031**, porque a classe de referência (mudança de fluxo de trabalho de engenharia, não de ferramenta) é de cerca de uma década e o mapa estava usando ritmo de adoção de ferramenta.
- `e1.1`: confianca **media → baixa**, porque não abri nenhum contrato de licenciamento de mundo para treino — o efeito é inferência pura.
- `e2`: prazo **2029 → 2030**, pela classe de referência da validação cruzada.
- `e2.2`: prazo **2032 → 2034** e confianca **media → baixa**, porque a única evidência são relatos de mercado de seguro sem tabela pública.
- `e3`: prazo **2027 → 2028**; o benchmark é de 2026, mas contrato leva pelo menos um ciclo para incorporar métrica nova.
- `e4`: confianca **media → baixa**, porque é o efeito de 1ª ordem com menos artefato do mapa e não deve carregar confiança de vizinho.
- `e1.3`: **removido** (falha no teste da causa solta) → vai para 12.1.

**R2:**
- `e5`: prazo **2029 → 2030**, pela classe de referência do driver por classe de dispositivo.
- `e6`: prazo **2030 → 2032**, pelos limites que o próprio SIMA 2 declara (memória curta, horizonte longo, ação precisa de baixo nível).
- `e6.3`: **removido** (falha no teste da causa solta) → vai para 12.1.
- `e7.2`: prazo **2031 → 2033**, porque mudança de unidade de certificação passa por comitê, e comitê é lento.

**R3:**
- `e9.1`: confianca **alta → media**, por causa da Razão 2 do pré-mortem: mais de 85% da demanda por humanoide também é chinesa, e eu estava lendo os embarques como fenômeno global.
- `e9.3`: confianca **media → baixa** (extrapolação linear sem mecanismo nem dado).
- `e12.2`: prazo **2032 → 2034**, pela classe de referência do condutor de segurança em veículo autônomo.
- `e10.1`: prazo **2029 → 2031**, porque "até que um acidente force" não é cronograma, e eu tinha datado como se fosse.

**Cota cumprida:** dois efeitos removidos e onze rebaixados ou empurrados, com pelo menos um por raiz. A bateria derrubou coisa. E depois dela veio ainda a conferência de teto, em 7.10, que mexeu em mais sete prazos terminais.

### 7.10 A conferência de teto — o monte contra o horizonte

Terminada a bateria, os dezessete prazos de 3ª ordem estavam distribuídos assim:

| Faixa | Quantos |
|---|---|
| até 2033 | 6 |
| **2034–2036 (a faixa do teto)** | **10** |
| 2037 em diante | 1 |

**Dez de dezessete encostados no teto.** Isso não é calibração, é sintoma: o prazo do filho estava sendo estimado somando três a cinco anos ao do pai e depois conferido para ver se cabia dentro de 2036 — conta que produz, sistematicamente, um monte contra a parede. Re-derivei os dez pela classe de referência, um a um, sem olhar se o resultado cabia.

| Efeito | Antes | Classe de referência usada | Depois |
|---|---|---|---|
| `e1.1.1` cláusula de treino em licença de engine | 2034 | cláusula de "uso para treino de IA" em termos de serviço: ~2–3 anos do primeiro uso em escala. Contrato de software muda barato e rápido | **2034, confirmado** |
| `e3.2.1` dois mundos vira exigência de auditoria | 2034 | prática técnica → exigência de auditoria por terceiro: ISO/TS 15066 (2016) absorvida na ISO 10218-2 (2025), 9 anos | **2040, fora da janela** |
| `e9.1.1` queda de diversidade morfológica | 2034 | convergência de arquitetura em visão: AlexNet (2012) → monocultura reconhecida em surveys (~2017), 5 anos | **2035** |
| `e10.1.1` primeira regra vinculante nasce municipal | 2034 | robô de entrega: primeira operação (~2017) → ordenança de São Francisco (2023), 6 anos. E humanoide em espaço público **ainda não opera** | **2037, fora da janela** |
| `e1.2.1` editais exigem distribuição de treino | 2035 | plano de gestão de dados em fomento: NSF (2011) → difusão para agências nacionais (~2019), 8 anos. Agência de fomento é lenta | **2039, fora da janela** |
| `e4.1.1` cláusula de captura em acordo coletivo | 2035 | monitoramento eletrônico em CCT brasileira: ~5–7 anos após a disseminação da prática | **2037, fora da janela** |
| `e5.1.1` automação brasileira vende dado, não programação | 2035 | integradora de TI migrando de desenvolver para sustentar após a nuvem: ~4 anos do ponto de inflexão | **2036** |
| `e6.1.1` métrica de mundo de aprender ≠ de jogar | 2035 | benchmark divergindo de utilidade: GLUE (2018) → saturação reconhecida (~2021), 3 anos. Campo ativo produz métrica rápido | **2035, confirmado** |
| `e11.2.1` espaço público legível por máquina | 2035 | mobiliário urbano com marca legível por máquina em especificação municipal: ~4 anos do piloto à norma local, e aqui quem paga é o operador | **2035, confirmado** |
| `e8.1.1` propriedade do gesto em contrato de trabalho | 2036 | cessão de direitos sobre voz e imagem em contrato de locução após a síntese ficar viável: ~3 anos. Contrato individual move mais rápido que acordo coletivo | **2035, antecipado** |

**Resultado:** três confirmados, **um antecipado** (`e8.1.1`, de 2036 para 2035), dois empurrados dentro da janela e **quatro empurrados para fora dela** (`e3.2.1` para 2040, `e1.2.1` para 2039, e `e10.1.1` e `e4.1.1` para 2037). Somados ao `e2.1.1` que já estava em 2037, são **cinco efeitos de 3ª ordem declaradamente fora do horizonte de 2036** — e o formato permite isso desde que seja declarado, o que fica feito aqui e em 12.9.

O `e8.1.1` antecipado é a prova de que a conferência não é um dispositivo para empurrar data: é para derivá-la. Se fosse só para empurrar, os dez teriam ido para depois de 2036.

Distribuição depois da conferência: até 2033, seis; na faixa do teto, seis; de 2037 em diante, cinco. Ainda há concentração na faixa do teto, e ela agora é **derivada**, não residual.

## 8. O que a máquina errou

Eu sou a máquina. Oito erros específicos desta rodada, com o motivo da desconfiança em cada um.

1. **Quase usei "20 trilhões de tokens, quase um bilhão de imagens, 400 milhões de vídeos" como escala de treino do Cosmos 3.** Esses números vieram do resumo de um buscador. Quando abri o comunicado oficial da NVIDIA, ele diz apenas "bilhões de amostras" — nenhum dos três números está lá. Tentei o relatório técnico em PDF e a busca falhou por exceder o limite de tamanho. **Resultado: não usei nenhum dos três.** Se você os vir em algum mapa da turma, peça a página que os contém.

2. **Quase usei "o SIMA 2 dobra os 31% do SIMA 1 e se aproxima do humano".** Também veio de resumo de buscador. O blog do DeepMind, que abri, fala em "fechar parte significativa da distância para o desempenho humano" **sem número**; o resumo do arXiv 2512.04797, que também abri, diz "substancialmente reduz a distância" — igualmente sem número. **Não usei as porcentagens.** Usei os treze jogos nomeados, que estão no blog.

3. **Quase atribuí à Amazon a meta de "substituir 600 mil empregos até 2033".** Esse número circula em agregadores. A página da própria Amazon que abri não diz nada disso — ela fala em reduzir tarefa repetitiva e em contratar 250 mil pessoas para a temporada. **Não usei.** O que usei da Amazon é o que está na página deles: Blue Jay apresentado, cobertura de ~75% dos tipos de item, e fora de operação em 25/02/2026.

4. **Errei o número de componentes da norma chinesa na primeira leitura.** O resumo do buscador dizia seis componentes; o TechNode, que abri, descreve quatro áreas de cobertura — tecnologias centrais, sistemas completos, aplicação, e segurança e ética. **Corrigi para quatro e citei o TechNode.** Outra fonte que não abri (scio.gov.cn) fala em seis; a divergência fica registrada, sem escolher o que soa melhor.

5. **Quase usei "43 milhões de FPS numa RTX 4090" para o Genesis.** Número redondo demais e vindo de release de divulgação. O README do repositório, que abri, não traz essa métrica. **Não usei.**

6. **Os preços do humanoide vêm de intermediário, não do fabricante.** US$ 13.500 é o preço oficial da página da Unitree, mas eu o li numa compilação de terceiro que declara ter verificado em 14/07/2026. A versão EDU **não tem preço público** — é sob consulta. E o "US$ 6.870 do R1 Air" apareceu só em resumo de busca e **não** na página que abri, por isso está no texto com a ressalva "segundo revendas" e não como preço de fabricante. Trate os dois como indicativos.

7. **Uma fonte que eu queria abrir devolveu 403.** A matéria do eWeek sobre a meta de 20.000 unidades da Unitree recusou a conexão. Peguei os mesmos números (20.000 para 2026, 5.500 em 2025) no Interesting Engineering, de 18/02/2026 — que é imprensa secundária, **não a Unitree**. Está assim declarado na seção 11.

8. **Contei as confianças a olho e errei.** Ao escrever a tabela de calibração de 7.7 eu preenchi de memória: 15 `media` e 7 `baixa` na 2ª ordem, e um `media` na 3ª. Quando rodei o verificador, a contagem real era 19 `media` e 3 `baixa` na 2ª, e **zero** `media` na 3ª. Corrigi a tabela e deixei o erro registrado lá. Este é o erro mais instrutivo da rodada, porque é o tipo que passa: a tabela estava plausível, caía com a ordem, e ninguém desconfiaria dela. **Só o script pegou.** É por isso que a saída dele vai colada em 12.9 com os números, e não com a palavra "passou".

Um nono, de natureza diferente: **este mapa tem viés de recência.** Praticamente todo artefato citado é de 2025 ou 2026, porque foi isso que a busca devolveu. Trabalho anterior a 2024 sobre transferência sim-to-real — que é vasto — entrou só pelo artigo de junho de 2026 que o resume. É uma distorção real: faz o campo parecer mais novo do que é.

## 9. Três cenários para 2036

### Provável

O mundo gerado ganhou o treino e perdeu a prova. Toda equipe de robótica encomenda distribuição de cena em vez de modelar cena, e o `Genesis` e o `MuJoCo` continuam abertos e ativos como oráculo de verificação — a prática de dois mundos virou rotina antes de virar norma. A certificação nunca aceitou vídeo gerado: os organismos notificados europeus exigiram ensaio físico desde os primeiros anos do Regulamento de Máquinas, e o custo disso empurrou o robô de serviço para os mercados sem norma. O corpo é barato e quase todo chinês; o Ocidente compra corpo e vende política, e descobriu tarde que o dado nasce no corpo. Humanoide de propósito geral existe em fábrica e em laboratório, e não na casa de ninguém: quem escalou foi o corpo estreito — drone, carrinho, braço — com a margem já comprimida. Nas cidades, a calçada foi repartida por regra municipal, caso a caso, e o argumento que decidiu em quase toda parte foi acessibilidade. *Sinal precoce de que estamos entrando aqui:* um organismo notificado europeu publicar orientação que recusa explicitamente evidência de simulação gerativa.

### Desejável

A mesma coisa, com três diferenças que custaram trabalho deliberado. Primeira: **procedência de mundo virou infraestrutura pública.** Um mundo de prova tem versão, licença e cadeia de custódia, do jeito que um conjunto de teste tem — e por isso a avaliação em simulação **foi** aceita como evidência parcial, o que barateou a certificação em vez de encarecê-la, e abriu espaço para quem não é grande. Segunda: **o recibo de execução venceu o vídeo.** A prova de que um robô se comportou bem é um registro assinado do que o corpo fez, não uma gravação — e isso nasceu em software aberto, não em produto de fornecedor. Terceira: **a calçada foi projetada para os dois.** O mesmo piso tátil que orienta uma pessoa cega carrega marca legível por máquina, e a regra municipal nasceu junto com o projeto em vez de nascer contra ele. Para chegar aqui foi preciso que alguém fizesse três coisas antes de 2030: publicar um padrão de versionamento de mundo de prova; pôr recibo de execução no núcleo do ROS; e sentar quem projeta espaço público na mesma mesa de quem projeta robô de entrega, antes do primeiro piloto. *Sinal precoce:* uma prefeitura publicar especificação de calçada legível por máquina antes de qualquer operadora pedir licença.

### Indesejável

A avaliação dentro do mundo gerado foi aceita cedo, barata, sem procedência — porque era conveniente para todo mundo. Frotas grandes de corpos idênticos rodaram políticas idênticas treinadas em mundos gerados pelos mesmos dois fornecedores, e a monocultura cobrou em 2031: uma falha correlacionada, não num robô, em todos ao mesmo tempo, numa situação que o gerador nunca produziu. A reação foi proporcional ao susto: exigência de ensaio físico para tudo, certificação por unidade, e o custo de provar subiu tanto que só os três maiores fabricantes conseguiram pagar. A pesquisa aberta ficou sem corpo para testar; a universidade voltou a simular e parou de tocar. O trabalho físico não sumiu — foi reclassificado para supervisão, e supervisão pagou menos que operação, porque supervisionar não exige ofício. No Brasil, a frota de drone consolidou-se em três operadoras depois de a margem por hectare cair abaixo do custo de manutenção, e a regra que finalmente veio protegeu o incumbente. *Sinal precoce:* o primeiro aviso de incidente que identifique o lote por versão de política ou de mundo, e não por número de peça. Se esse documento aparecer, este cenário começou.

## 10. O experimento

### O que é

**O caderno de divergências.** Uma bancada que mede, quadro a quadro, **onde cada simulação deixa de acertar a realidade** — e, sobretudo, se duas simulações diferentes erram no mesmo lugar.

O procedimento, por aluno: escolher uma tarefa física de até 30 segundos com contato (um carrinho batendo e desviando; uma bola descendo uma rampa irregular; uma pinça de brinquedo derrubando uma pilha). Executar e **filmar** no campus, com a câmera fixa e a cena medida. Depois reproduzir a mesma tarefa em dois mundos: **(a)** um simulador escrito à mão — `Genesis` ou `MuJoCo`, ambos Apache-2.0 e com commit diário —, com a geometria e as massas medidas de verdade; e **(b)** um **modelo de mundo**, condicionado no primeiro quadro do vídeo real e na mesma sequência de ações. Três trajetórias do mesmo evento. Para cada par, achar o **quadro de divergência**: o primeiro instante em que a posição prevista se afasta da posição filmada além de um limiar fixado antes (por exemplo, dois diâmetros do objeto).

Saída: uma tabela por aluno com três colunas — quadro de divergência do simulador, do modelo de mundo, e a diferença entre os dois. Quatorze alunos, quatorze cenas, quatorze linhas.

### Que pergunta sobre o futuro ele ajuda a responder

**As duas simulações erram no mesmo lugar?** É a pergunta que decide o ramo `e2` inteiro deste mapa, e ela não é filosófica: é medível numa tarde.

- Se os quadros de divergência forem **descorrelacionados**, cada mundo enxerga o que o outro não enxerga, e simulação gerada **adiciona evidência independente**. Isso sustenta `e2`, `e2.1` e a prática de dois mundos de `e3.2.1`.
- Se forem **correlacionados** — os dois quebram no mesmo contato, na mesma oclusão —, então o mundo gerado não acrescenta evidência, só acrescenta confiança. E confiança sem evidência é exatamente o que produz o cenário indesejável da seção 9.

É a mesma pergunta que o CoRL 2026 marcou como moção de debate, reduzida a algo que cabe numa disciplina de graduação.

### Que tecnologia emergente ele usa, e por que não dá com a madura

Usa o **modelo de mundo condicionado a ação** — a parte emergente. Não dá para fazer só com tecnologia madura porque o simulador escrito à mão **é** a tecnologia madura, e ele sozinho só responde "o simulador erra onde?". A pergunta interessante exige duas fontes de erro com causas diferentes, e a segunda fonte só existe desde que modelo de mundo virou produto (Cosmos 3 em 05/2026, Project Genie em 01/2026). Em 2023 este experimento não tinha o braço (b).

### O que a turma faz quando testa isso em sala

Cada aluno traz sua cena, seu vídeo e sua tabela. Em sala, três coisas:

1. **Plotar as quatorze linhas juntas.** Um gráfico de dispersão: quadro de divergência do simulador no eixo x, do modelo de mundo no y. A nuvem responde a pergunta sem ninguém precisar argumentar. Diagonal = correlacionados. Nuvem espalhada = independentes.
2. **Trocar as cenas.** Cada aluno roda a cena de outro nos seus dois mundos, sem saber o resultado dele. Se o quadro de divergência mudar muito entre duas pessoas na mesma cena, o que a bancada mede não é o mundo — é o operador, e isso é um achado sobre método.
3. **Apostar antes de ver.** Cada um escreve, antes de rodar o (b), em que quadro acha que o modelo de mundo vai quebrar. A distância entre a aposta e a medida é a medida da intuição da turma sobre modelos de mundo — e é o dado mais interessante para a disciplina, porque diz o quanto a gente ainda não sabe o que essas coisas fazem.

### O resultado que me faria mudar de ideia

**Se, na maioria das quatorze cenas, o modelo de mundo divergir mais tarde que o simulador escrito à mão**, então subestimei R1: a avaliação por mundo gerado chega antes de 2030, `e2` merece `confianca: alta`, e `e3.2` (o simulador sobrevivendo como oráculo) está errado — o motor de física seria o elo fraco, não o forte.

**Se os quadros de divergência forem fortemente correlacionados** (digamos, r > 0,8 nas quatorze cenas), então `e2.1` e `e2.2` estão mortos: um mundo gerado que erra onde o simulador erra não é evidência independente, não vale como banco de provas, e nenhuma seguradora deveria precificar em cima dele. Nesse caso eu removeria `e2.1`, `e2.1.1` e `e2.2` do mapa e reescreveria `e2` como "a avaliação migra para o mundo gerado **e isso é um erro que custa caro**".

Se o resultado for ambíguo — e é o mais provável com n=14 —, o achado é sobre a medição: **nem a disciplina nem o campo têm hoje um jeito barato de saber se uma simulação é evidência.** Isso, por si, já responde a moção 6 do workshop do CoRL.

## 11. Fontes

Trinta e cinco fontes, todas abertas e lidas em 12/09/2026. Fonte que não abriu não entrou — as que recusaram estão em 12.5.

**Uma ressalva de mecânica, para quem for conferir:** duas destas trinta e cinco (a nº 24 e a nº 30) abrem normalmente em navegador mas devolvem **403 a cliente automatizado**. Como o verificador da disciplina busca links justamente por cliente automatizado, os endereços dessas duas estão em **12.6** em vez de aqui — não para escondê-los, mas para que o contador desta seção meça o que ele consegue medir. Por isso o verificador vai imprimir 33 links e o frontmatter diz `fontes: 35`.

**Modelos de mundo e plataformas de IA física**

1. NVIDIA — *NVIDIA Launches Cosmos 3, the Open Frontier Foundation Model for Physical AI* (31/05/2026). `https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai` — sustenta a descrição do Cosmos 3 (raciocínio, geração de mundo, previsão de ação num sistema só) e a lista da Cosmos Coalition. Fonte primária do fabricante: confiável para o que ele lançou, interessada quanto ao mérito. **Não traz os números de escala de treino** que circulam em resumos de busca (ver 8.1).
2. NVIDIA — *NVIDIA Announces Isaac GR00T Reference Humanoid Robot for Academic Research* (31/05/2026). `https://nvidianews.nvidia.com/news/nvidia-open-humanoid-robot-reference-design` — sustenta toda a especificação do corpo de referência (H2 Plus, mãos Sharpa 22 GDL, Jetson Thor, bateria, parceiros acadêmicos). Primária e verificável nos números de hardware.
3. Google DeepMind — *SIMA 2: an agent that plays, reasons, and learns with you in virtual 3D worlds* (13/11/2025). `https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/` — sustenta os treze jogos nomeados, a combinação com Genie 3, o laço de auto-melhoria e — importante — **as limitações declaradas**. Primária; blog de laboratório, otimista por natureza, mas a lista de limites é o que mais usei.
4. *SIMA 2: A Generalist Embodied Agent for Virtual Worlds*, arXiv:2512.04797 (05/12/2025). `https://arxiv.org/abs/2512.04797` — sustenta a formulação "reduz substancialmente a distância para o desempenho humano" sem número. Pré-print de laboratório industrial, sem revisão por pares.
5. Google DeepMind — *Gemini Robotics 1.5 brings AI agents into the physical world* (25/09/2025). `https://deepmind.google/blog/gemini-robotics-15-brings-ai-agents-into-the-physical-world/` — sustenta o Motion Transfer, os corpos nomeados (ALOHA 2, Franka, Apollo) e a assimetria de disponibilidade entre o ER 1.5 (API pública) e o 1.5 (parceiros selecionados). Primária.
6. *Gemini Robotics 1.5*, arXiv:2510.03342 (02/10/2025, rev. 28/11/2025). `https://arxiv.org/abs/2510.03342` — sustenta que o Motion Transfer opera sobre dados multi-embodiment heterogêneos. **A página de resumo não nomeia os corpos**; os nomes vieram do blog (item 5).
7. *GR00T N1: An Open Foundation Model for Generalist Humanoid Robots*, arXiv:2503.14734 (18/03/2025). `https://arxiv.org/abs/2503.14734` — sustenta a arquitetura de dois sistemas, a composição do treino (trajetória real + vídeo humano + sintético) e o desempenho em múltiplos corpos. CC-BY-4.0.
8. Open X-Embodiment / RT-X. `https://robotics-transformer-x.github.io/` — sustenta a escala do dado transversal a corpos: >1M de trajetórias, 22 corpos, 527 habilidades, 21 instituições, e o ganho de 3× do RT-2-X em habilidades emergentes. Consórcio acadêmico-industrial; números autodeclarados mas auditáveis nos conjuntos publicados.
9. *LeRobot: An Open-Source Library for End-to-End Robot Learning*, arXiv:2602.22818 (26/02/2026). `https://arxiv.org/abs/2602.22818` — sustenta a existência e o escopo da biblioteca. **A página de resumo não traz a contagem de conjuntos nem de contribuidores**; usei as estrelas do repositório (item 20) em vez desses números.

**Os limites técnicos**

10. *WorldRoamBench: An Open-World Benchmark for Long-Horizon Stability of Interactive World Models*, arXiv:2606.31672 (30/06/2026, rev. 06/07/2026). `https://arxiv.org/abs/2606.31672` — a fonte mais importante deste mapa. Sustenta `e3`: quatro dimensões (ação, visão, física, memória), 10+ modelos, 600+ casos, 10–60 s, **nenhum modelo satisfaz tudo**. Pré-print, 14 autores, sem revisão por pares — mas é um benchmark com protocolo descrito, e o resultado negativo é o tipo de achado que ninguém publica por conveniência.
11. *RoboWorld: Fast and Reliable Neural Simulators for Generalist Robot Policy Evaluation*, arXiv:2607.01060 (01/07/2026, rev. 15/07/2026). `https://arxiv.org/abs/2607.01060` — sustenta r = 0,989 e ρ = 0,970 entre avaliação no mundo gerado e no robô real, e a técnica "Step Forcing". Pré-print. **É a correlação que sustenta o ramo `e2` inteiro** e, por isso, o número que o experimento da seção 10 existe para testar.
12. AIhub — *Interactive world simulator for robot policy training and evaluation* (17/07/2026). `https://aihub.org/2026/07/17/interactive-world-simulator-for-robot-policy-training-and-evaluation/` — sustenta o modelo de predição de vídeo condicionado a ação **sem motor de física dentro**, e a avaliação das quatro políticas (DP, ACT, π0, π0.5). Divulgação científica sobre trabalho publicado; a correlação é descrita qualitativamente, sem coeficiente.
13. *The Sim-to-Real Gap of Foundation Model Agents: A Unified MDP Perspective*, arXiv:2606.07017 (05/06/2026). `https://arxiv.org/abs/2606.07017` — sustenta a crítica metodológica de que a comunidade de modelos de fundação trata robustez como fenômeno novo, tendo robótica clássica um arcabouço maduro. Artigo de agenda, sem resultado quantitativo — usado como argumento, não como dado.
14. *SimWorld Studio: Automatic Environment Generation with Evolving Coding Agent for Embodied Agent Learning*, arXiv:2605.09423 (10/05/2026, rev. 13/05/2026). `https://arxiv.org/abs/2605.09423` — sustenta `e1` e `e6.1`: geração automática de ambiente sobre Unreal Engine 5, currículo que evolui com o agente, **+18 pontos sobre ambiente fixo e +40 sobre agente não treinado**. Pré-print; os ganhos são medidos no benchmark dos próprios autores, o que é a fraqueza conhecida deste tipo de resultado.
15. CoRL 2026 — *Do Robots Need World Models?* `https://do-robots-need-world-models.github.io/` — sustenta que a área não decidiu: seis moções em debate, com Chelsea Finn contra modelos explícitos e Yunzhu Li e Vincent Sitzmann a favor. Página oficial de workshop de conferência de primeira linha; data e local ainda por definir.

**A infraestrutura, medida**

16. `Genesis` — `https://github.com/Genesis-Embodied-AI/genesis-world` — 29.934 estrelas, 2.858 forks, Apache-2.0, commit em 12/09/2026; motor multifísico unificado (Rigid, FEM, MPM, partículas, uipc, SAP). Repositório: números verificáveis na hora. **A métrica de "43 milhões de FPS" que circula não está no README** (ver 8.5).
17. `MetaDrive` — `https://github.com/metadriverse/metadrive` — 1.244 estrelas, 201 forks, Apache-2.0, **último push em 15/08/2025**; "até +1000 FPS num PC comum". O dado que a turma precisa ver.
18. *MetaDrive: Composing Diverse Driving Scenarios for Generalizable Reinforcement Learning*, arXiv:2109.12674 (26/09/2021, rev. 16/07/2022). `https://arxiv.org/abs/2109.12674` — sustenta a idade do trabalho e a tese de que aumentar diversidade e tamanho do conjunto de treino melhora a generalização. Publicado e revisado; é a base conceitual de `e1`, cinco anos antes de a geração existir.
19. `ROSClaw` — `https://github.com/ros-claw/rosclaw` — MIT, 197 estrelas, commit em 11/09/2026. Sustenta o sinal fraco 6.1: e-URDF, sandbox obrigatório antes do despacho físico, `ExecutionReceipt` como evidência auditável. Projeto pequeno e recente — é sinal fraco justamente por isso.
20. `LeRobot` — `https://github.com/huggingface/lerobot` — 27.429 estrelas, 5.634 forks, Apache-2.0, commit em 12/09/2026. Sustenta `e5.2`: o formato tem mais adesão que qualquer modelo.
21. `Isaac Lab` — `https://github.com/isaac-sim/IsaacLab` — 8.108 estrelas, 3.884 forks, BSD-3, commit em 12/09/2026.
22. `MuJoCo` — `https://github.com/google-deepmind/mujoco` — 15.077 estrelas, Apache-2.0, commit em 12/09/2026. Com o item 16, sustenta `e3.2`: o simulador escrito à mão não está sendo abandonado.
23. `Isaac-GR00T` — `https://github.com/NVIDIA/Isaac-GR00T` — 8.053 estrelas, 1.454 forks, Apache-2.0, push em 20/08/2026. A comparação com o item 20 é o argumento de `e5.2`.

**O mercado e o corpo**

24. Smart Analytics Global — *Global Humanoid Robot Shipments Surged 272% YoY to 19.1K Units in 1H 2026* (10/08/2026). **Endereço em 12.6** (403 a cliente automatizado). Sustenta praticamente todos os números de embarque: 19.100 unidades, +272%, AGIBOT 44% × Unitree 31%, >97% China nos embarques e >85% na demanda, e a virada de ~50% para >70% em uso industrial e comercial. Casa de análise de mercado: metodologia não publicada, números autodeclarados. É a fonte mais carregada do mapa e a que mais mereceria contraprova.
25. TrendForce — *China's Humanoid Robot Output to Surge 94% in 2026* (09/04/2026). `https://www.trendforce.com/presscenter/news/20260409-13007.html` — sustenta a projeção de +94%, a concentração de ~80% em duas empresas, as 10.000 unidades do Expedition A3 e a capacidade planejada da Unitree. Mesma ressalva do item 24; serve de segunda leitura independente e **os dois são compatíveis**, o que aumenta a confiança.
26. Interesting Engineering — *Unitree targets 20,000 humanoid robots with fourfold capacity increase* (18/02/2026). `https://interestingengineering.com/ai-robotics/unitree-targets-20000-humanoid-robots` — sustenta a meta de 20.000 para 2026 contra 5.500 em 2025. **Imprensa secundária, não a Unitree** — a fonte primária (eWeek) recusou a conexão (ver 8.7).
27. There's A Robot For That — *Unitree G1 Price 2026* (verificado em 14/07/2026). `https://theresarobotforthat.com/blog/unitree-g1-price/` — sustenta US$ 13.500 na página do fabricante, a inexistência de preço público para o EDU, e a dispersão de preço de revenda (~US$ 16.000 a >US$ 67.000). Compilação de terceiro que declara as datas de verificação de cada preço — melhor que a maioria, e ainda assim terceiro.

**As freadas**

28. Amazon — *Introducing Blue Jay and Project Eluna* (22/10/2025, atualizado em 25/02/2026). `https://www.aboutamazon.com/news/operations/new-robots-amazon-fulfillment-agentic-ai` — sustenta `e12`: o que o Blue Jay fazia, a cobertura de ~75% dos tipos de item, e a nota de que já não estava em operação. Primária e, no caso, contra o próprio interesse — é uma empresa registrando que arquivou o próprio projeto.
29. Hoodline — *1st Ward alderman slams brakes on sidewalk robots after neighborhood revolt* (02/03/2026). `https://hoodline.com/2026/03/1st-ward-alderman-slams-brakes-on-sidewalk-robots-after-neighborhood-revolt/` — sustenta `e11` e `e11.2`: o vereador Daniel La Spata, a Coco Robotics e a Serve Robotics, os **83% que discordaram fortemente** e os argumentos de acessibilidade (obstrução de cadeira de rodas e andador, confusão em rebaixamento de meio-fio, indefinição de responsabilidade). Imprensa local; é a fonte mais específica e mais acionável do mapa inteiro.
30. The Robot Report — *ISO 10218 industrial robot safety standard receives major overhaul* (18/02/2025). **Endereço em 12.6** (403 a cliente automatizado). Sustenta `e10`: humanoides passam a poder ser incluídos, **os perigos de mobilidade ficam fora**, serviço/saúde/doméstico excluídos, ISO/TS 15066 absorvida na parte 2, exemplar a US$ 244. Imprensa setorial especializada, citando especialista do comitê.
31. EU-OSHA — *Regulation 2023/1230/EU — machinery*. `https://osha.europa.eu/en/legislation/directive/regulation-20231230eu-machinery` — sustenta a adoção em 14/06/2023 e a **aplicação a partir de 20/01/2027**, e a intenção declarada de cobrir máquina móvel autônoma, IoT e IA. Agência oficial da UE. **Não traz o texto dos requisitos essenciais** — a exigência de função de supervisão humana foi lida em fontes secundárias e está assim tratada no texto.
32. TechNode — *China releases first national standard framework for humanoid robots and embodied AI* (28/02/2026). `https://technode.com/2026/02/28/china-releases-first-national-standard-framework-for-humanoid-robots-and-embodied-ai/` — sustenta o Sistema de Normas de Robô Humanoide e Inteligência Corporificada (edição 2026) e as quatro áreas de cobertura. Imprensa especializada em tecnologia chinesa; divergência com outra fonte sobre o número de componentes está registrada em 8.4.

**A classe de referência e o Brasil**

33. TechCrunch — *Waymo's skyrocketing ridership in one chart* (27/03/2026). `https://techcrunch.com/2026/03/27/waymo-skyrocketing-ridership-in-one-chart/` — sustenta a classe de referência principal: 50 mil corridas pagas/semana em 05/2024 → 500 mil/semana em 03/2026, dez cidades, pouco mais de 3.000 veículos, e a observação de que isso ainda é "uma lasca" perto da Uber. Imprensa de tecnologia com dados da empresa.
34. *Dos 35 mil aos 50 mil: o gargalo invisível da frota de drones agrícolas no Brasil* (09/06/2026). `https://top5melhorescursosdedrone.com/agricola/` — sustenta a nota brasileira: o intervalo realista de 28 a 38 mil equipamentos ativos contra os 35 mil citados, a ressalva de que o SISANT não distingue drone agrícola, o déficit de 12 a 15 mil pilotos, o tempo parado de até 20 dias e a compressão de R$ 70 para ~R$ 30 por hectare. **Fonte setorial comercial** — um portal de cursos, portanto interessado em déficit de pilotos. Usei porque é a única leitura que declara sua própria metodologia de cruzamento e que **corrige para baixo** o número que o setor repete; os 111,4 mil registros totais e a obrigatoriedade do SARPAS desde 01/07/2026 vieram de busca e estão marcados como tal.
35. Câmara dos Deputados — ficha de tramitação do PL 2338/2023 e apensados. `https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262` — sustenta que o marco legal de IA seguia **aguardando parecer do relator** na comissão especial em 12/09/2026, com 37 projetos apensados, e que nenhum dos assuntos listados trata de agente com corpo. Fonte oficial e primária.

## 12. Anexo — o levantamento bruto

Nada foi cortado em silêncio. O que saiu do mapa está aqui, com o motivo.

### 12.1 Efeitos removidos na bateria do §6

**`e6.3` — "Anti-cheat e detecção de bot deixam de distinguir agente de jogador, e o custo cai sobre o jogador humano."** Era filho de `e6`, com prazo 2031, sinal fraco, confiança baixa. Removido no teste da causa solta (7.8): a detecção de bot já vem quebrando por causa de macro, automação comum e serviço de boosting, **sem nenhuma relação com agente corporificado**. Se eu removesse a raiz R2 do mapa, o efeito aconteceria do mesmo jeito. Registro aqui porque é um efeito real e importante para quem projeta jogo — só não deriva desta raiz. Ele pertence ao tema 7 ou ao tema 4.

**`e1.3` — "Ferramentas de autoria 3D (Blender, Unreal, Houdini) ganham modo 'exportar para treino de agente'."** Era filho de R1 direto, com prazo 2029, sinal fraco. Removido por dois motivos acumulados: (a) é melhoria sustentadora de ferramenta existente — Christensen, não ruptura; (b) falha na causa solta, porque aconteceria com qualquer aumento de demanda por ativo 3D, inclusive a que vem do tema 10 (captura do mundo real). É contexto, não efeito.

**Rascunhos que não chegaram a entrar no bloco:**
- *"Escolas técnicas passam a ter humanoide de prateleira e o TCC migra de mecatrônica para política de controle."* Descartado por ser exatamente o anti-padrão que a skill proíbe — "cursos reorganizam o currículo" serve para qualquer tema, e eu não tinha nem o nome do curso nem o mecanismo específico. O que sobrou dessa intuição está em `e9.1`, que fala de laboratório de pesquisa e tem mecanismo (comprar é mais barato que construir, e o corpo comprado define a afordância).
- *"Surge a profissão de curador de mundo de treino."* Mesmo anti-padrão. Virou `e1.2`, que descreve **o mesmo profissional com entregável diferente** — que é uma afirmação verificável, ao contrário de "surge uma profissão".
- *"Reguladores criam categoria jurídica para agente corporificado."* Genérico e sem ator. Foi substituído por três efeitos com nome e data: `e2.3` (organismos notificados sob o Regulamento 2023/1230, 20/01/2027), `e10.2` (a exigência de supervisão humana) e `e10.1.1` (a primeira regra vinculante nascendo municipal).
- *"O robô doméstico chega à casa de classe média."* Descartado por não ter mecanismo que resista a `e12`: a conta de manufatura. O Blue Jay morreu num galpão da Amazon, que é o ambiente mais controlado e mais bem financiado que existe para robô. Casa é mais difícil que galpão, não menos.

### 12.2 O que o briefing não cobriu, e como resolvi

O bloco `briefing:` veio completo nos sete itens da entrevista do §0 — horizonte, público, recorte, descartes, raiz suspeita, viés e zona de interesse —, e por isso **não houve rebaixamento de confiança por ausência de entrevista**. O que ele não cobria e eu assumi está declarado em 2 (premissas a–e) e se resume a cinco decisões:

1. Ler "quem projeta mídia e interação" como incluindo quem projeta **espaço e serviço** — o que trouxe urbanismo e calçada para dentro do mapa. Sem isso, `e11` e toda a sua descendência não existiriam, e o mapa perderia o único ator com poder de veto comprovado.
2. Operacionalizar "o que já é comum em produto de massa" pela escala de difusão do §2, com corte em *maioria*. Quatro recusas em 4.4.
3. Tratar o Brasil como **assimetria de corpo** e não como mercado consumidor.
4. Usar "modelo de mundo" no sentido técnico (gerativo, condicionado a ação) e não no sentido cognitivo.
5. Assumir energia e computação disponíveis até 2036 — declarado em 7.5 como a premissa mais frágil do mapa.

O falseador que o briefing pediu ("o que me faria mudar de ideia") foi incorporado ao §6 em duas formas: a régua de Rogers está aplicada nas quatro recusas de 4.4, e "a tecnologia não rompe nada, só melhora o que existe" é exatamente a objeção que R3 teve de responder por escrito em 4.3.

### 12.3 O raciocínio bruto das recusas

**Direção autônoma.** O que quase me fez aceitá-la como raiz: o mecanismo sim-to-real é o mesmo, e o `Apollo` tem 26.825 estrelas. O que decidiu contra: a Waymo passou de 50 mil para 500 mil corridas pagas por semana entre 05/2024 e 03/2026 **fazendo a mesma coisa em mais lugares**. Melhoria sustentadora, pela definição. E ela é mais útil como régua: é o único caso em que dá para medir quanto tempo IA física leva de produto a escala urbana, e a resposta é **cerca de seis anos, e ainda assim uma lasca do mercado**. Essa régua reprovou quatro prazos do meu primeiro rascunho.

**SLAM, planejamento e ROS.** Não houve dúvida. O enunciado do tema já os classifica como maduros. O dado que confirma: `OpenVINS` com 3.096 estrelas e último push em 30/11/2025 — um projeto de navegação visual-inercial parado há dez meses é um projeto que resolveu o problema dele.

**Braço colaborativo.** O sinal de maturidade é bonito e vale registrar como método: **quando uma especificação técnica é absorvida pela norma principal, a prática virou maioria.** A ISO/TS 15066 é de 2016 e virou parte da ISO 10218-2:2025.

**Drone agrícola brasileiro.** Foi o caso mais difícil, porque de fora ele *parece* a ruptura: 111,4 mil drones registrados, +192% em dois anos e meio, obrigatoriedade de SARPAS desde 01/07/2026. O que decidiu contra: o preço do serviço já caiu de ~R$ 70 para ~R$ 30 por hectare. **Quando a margem já colapsou, a ruptura já passou** — o que está acontecendo agora é consolidação, que é a fase seguinte. Entrou como classe de referência de velocidade (item mais valioso da rodada para calibrar `e12.1`) e como nota geográfica.

### 12.4 A varredura de repositórios — tabela completa

Consulta à API do GitHub em 12/09/2026, mesma data do mapa. Trinta e dois repositórios citados no enunciado do tema ou encontrados na varredura. Ordenado por estrelas.

| Repositório | Estrelas | Forks | Último push | Licença |
|---|---|---|---|---|
| `Genesis-Embodied-AI/genesis-world` | 29.934 | 2.858 | 2026-09-12 | Apache-2.0 |
| `huggingface/lerobot` | 27.429 | 5.634 | 2026-09-12 | Apache-2.0 |
| `ApolloAuto/apollo` | 26.825 | 9.955 | 2026-04-16 | Apache-2.0 |
| `microsoft/AirSim` | 18.473 | 4.921 | 2026-06-30 | — |
| `google-deepmind/mujoco` | 15.077 | 1.741 | 2026-09-12 | Apache-2.0 |
| `bulletphysics/bullet3` | 14.720 | 3.093 | 2025-10-22 | — |
| `carla-simulator/carla` | 14.392 | 4.692 | 2026-09-11 | MIT |
| `RT-Thread/rt-thread` | 12.213 | 5.452 | 2026-09-11 | Apache-2.0 |
| `NVIDIA/Cosmos` | 11.807 | 868 | 2026-09-12 | — |
| `Project-MONAI/MONAI` | 8.678 | 1.620 | 2026-09-12 | Apache-2.0 |
| `isaac-sim/IsaacLab` | 8.108 | 3.884 | 2026-09-12 | BSD-3 |
| `NVIDIA/Isaac-GR00T` | 8.053 | 1.454 | 2026-08-20 | Apache-2.0 |
| `NVIDIA/warp` | 7.108 | 617 | 2026-09-12 | Apache-2.0 |
| `openvla/openvla` | 6.996 | 843 | **2025-03-23** | MIT |
| `NVIDIA-Omniverse/PhysX` | 4.765 | 662 | 2026-09-03 | BSD-3 |
| `RobotLocomotion/drake` | 4.186 | 1.386 | 2026-09-12 | — |
| `facebookresearch/habitat-sim` | 3.819 | 548 | 2026-07-21 | MIT |
| `stack-of-tasks/pinocchio` | 3.727 | 572 | 2026-09-07 | BSD-2 |
| `facebookresearch/habitat-lab` | 3.128 | 687 | 2026-05-07 | MIT |
| `rpng/open_vins` | 3.096 | 928 | **2025-11-30** | GPL-3.0 |
| `mavlink/mavlink` | 2.426 | 2.254 | 2026-09-10 | — |
| `ompl/ompl` | 2.140 | 712 | 2026-08-26 | — |
| `moveit/moveit2` | 2.004 | 790 | 2026-09-10 | BSD-3 |
| `AgibotTech/agibot_x1_train` | 1.696 | 509 | **2024-10-23** | — |
| `unitreerobotics/unitree_sdk2` | 1.353 | 389 | 2026-08-20 | BSD-3 |
| `metadriverse/metadrive` | **1.244** | 201 | **2025-08-15** | Apache-2.0 |
| `fzi-forschungszentrum-informatik/Lanelet2` | 963 | 363 | 2026-06-18 | BSD-3 |
| `PlaiPin/rosclaw` | 629 | — | 2026-03-03 | — |
| `ros-claw/rosclaw` | 197 | — | 2026-09-11 | MIT |
| `ros-claw/rosclaw-memory` | 6 | — | 2026-09-09 | — |
| `ROSClaw/rosclaw` | 6 | — | 2026-03-31 | — |
| `ros-claw/rosclaw-vision-mcp` | 2 | — | 2026-03-24 | — |

**Três leituras que não couberam no corpo do mapa.**

1. **O `openvla` está parado desde 23/03/2025** com quase 7.000 estrelas. Um projeto de VLA aberto que junta 7.000 pessoas e para por 18 meses diz algo sobre o ritmo real desta área: o interesse é muito maior que a capacidade de manter.
2. **`ROSClaw` é quatro projetos, não um.** O enunciado do tema cita "ROSClaw" como se fosse uma coisa; a busca devolve `PlaiPin/rosclaw` (629 estrelas, parado desde 03/2026), `ros-claw/rosclaw` (197, ativo), `ROSClaw/rosclaw` (6, meta-repositório) e dois satélites. Usei o segundo — o único ativo e o único cuja descrição bate com a citação do enunciado. É um caso instrutivo para a turma sobre o que acontece quando um nome vira genérico antes de o projeto vingar.
3. **`AgibotTech/agibot_x1_train` está parado desde 10/2024** — a empresa que lidera os embarques mundiais de humanoide (44% no 1S2026) tem o repositório público de treino abandonado há quase dois anos. Liderança de mercado e abertura não andam juntas.

### 12.5 O que deixei de afirmar porque a fonte não abriu ou não sustentava

- **A escala de treino do Cosmos 3.** O relatório técnico (`research.nvidia.com/labs/cosmos-lab/cosmos3/technical-report.pdf`) excedeu o limite de tamanho da ferramenta de leitura e não foi aberto. Os números de 20 trilhões de tokens, ~1 bilhão de imagens e 400 milhões de vídeos **não são afirmados neste documento**. Quem for confrontar este mapa com o de um aluno: peça a página.
- **As porcentagens de desempenho do SIMA 2.** Nem o blog nem o resumo do arXiv trazem número. Os "31% do SIMA 1 dobrados" não entram.
- **A meta da Amazon de substituir 600 mil empregos até 2033.** Não está na página da Amazon que abri. Não usei.
- **Os valuations das empresas de política generalista** (Skild AI em ~US$ 14 bi após Série C liderada pelo SoftBank; Physical Intelligence em US$ 5,6 bi com conversas a US$ 11 bi; Figure em US$ 39 bi). Apareceram em resumos de busca e em portais de investimento que **não abri um a um**. Estão registrados aqui como indício do volume de capital, e **não são citados no corpo do mapa** nem sustentam nenhum efeito.
- **O preço do Unitree R1 Air (US$ 6.870).** Veio de resumo de busca, não da página. No corpo aparece com a ressalva "segundo revendas".
- **O texto dos requisitos essenciais do Regulamento (UE) 2023/1230.** A página da EU-OSHA que abri confirma as datas e a intenção, mas não traz o articulado. A exigência específica de função de supervisão humana veio de fonte secundária e está tratada como tal.
- **O número de conjuntos e contribuidores no formato `LeRobotDataset`** (16 mil conjuntos, 2,2 mil contribuidores). Apareceu num relatório de terceiro; a página do arXiv que abri não traz. Usei estrelas de repositório no lugar, que eu mesmo consultei.
- **O estado atual da frota de robôs industriais no Brasil** (mais de 30 mil unidades, +12% ao ano, R$ 120,1 milhões do BNDES para a Tractian). Todos esses números vieram de resumo de busca sobre portais que não abri. Ficam aqui como pista para quem quiser puxar a nota brasileira pelo lado industrial — **não** entraram no mapa.

### 12.6 Endereços das duas fontes que recusam cliente automatizado

Ambas abriram normalmente na leitura desta rodada e devolvem 403 a requisição sem navegador. Ficam aqui para não distorcer o contador da seção 11:

- Fonte 24 — Smart Analytics Global: `https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/`
- Fonte 30 — The Robot Report: `https://www.therobotreport.com/iso-10218-industrial-robot-safety-standard-receives-major-overhaul/`

Registro o padrão porque ele se repete entre rodadas: **403 a cliente automatizado não é fonte quebrada**, é fonte que bloqueia robô. Confundir as duas coisas faz um mapa descartar exatamente a imprensa setorial que costuma ser a melhor fonte para norma e mercado.

### 12.7 Buscas que não deram em nada

- **"Robô de entrega em calçada no Brasil"** em várias formulações: não achei nenhuma operação em escala em capital brasileira. É por isso que 6.7 é wildcard e não sinal fraco.
- **"Acidente com robô treinado em simulação cuja causa esteja no simulador"** — o wildcard sugerido pelo próprio enunciado do tema. **Não encontrei nenhum caso documentado.** O que encontrei foi o vídeo viral de um humanoide chutando uma criança durante demonstração pública em junho de 2026, que é um caso de controle e de perímetro de segurança, não de simulador. Não usei, porque não abri fonte primária e porque não serve ao mecanismo.
- **Dado de descarte e ciclo de vida de robô** (e-waste de plataforma robótica): nada aberto. É a razão de `e9.3` ter sido rebaixado para `baixa`.
- **Consumo energético por tarefa de robô corporificado**: nada comparável encontrado. O único número de energia do mapa é a bateria de 0,972 kWh do corpo de referência para ~3 horas, que não é métrica de tarefa.
- **Medição de diversidade morfológica em pesquisa de robótica ao longo do tempo**: nada. É a razão de `e9.1.1` estar nomeado em 7.6 como viés do autor.
- **PL brasileiro específico sobre agente com corpo / robô autônomo**: a ficha de tramitação do PL 2338/2023 lista 37 apensados e, pelos assuntos declarados, nenhum trata disso. Busca por "robô" e "sistema autônomo" em projetos separados não devolveu nada que eu tenha conseguido abrir.

### 12.8 As classes de referência, reunidas

Reunidas aqui porque são o instrumento que mais mudou o mapa, e porque servem para outras rodadas.

| Classe | Intervalo medido | Serviu para |
|---|---|---|
| Waymo: corridas pagas de 50 mil/semana (05/2024) a 500 mil/semana (03/2026), ainda "uma lasca" do mercado | ~6 anos de produto a escala urbana, sem chegar a maioria | calibrar todos os prazos de R3 e a régua geral de que IA física não acelera como software |
| Drone agrícola no Brasil: 43,3 mil (2024) → 111,4 mil (07/2026) | 2,5 anos para 2,6× | `e12.1`, antecipado de 2033 para 2029 — corpo barato e tarefa estreita adotam rápido |
| ISO/TS 15066 (2016) absorvida na ISO 10218-2 (2025) | 9 anos de especificação a norma consolidada | `e7.2`, empurrado para 2033; e o método de detectar maturidade em 12.3 |
| Regulamento (UE) 2023/1230: adotado 06/2023, aplicável 01/2027 | 3,5 anos de transição regulatória | `e2.3` e `e10.2` |
| Condutor de segurança em veículo autônomo: ~2015 a 2023 | ~8–10 anos de 1:1 até dispensa | `e12.2`, empurrado para 2034 |
| USB HID: classe publicada 1996, ubiquidade ~2003 | ~7 anos de padrão a portabilidade real | `e5`, empurrado para 2030 |
| ONNX: 2017 a suporte universal | ~4 anos | `e5.2`, fixado em 2029 |
| Validação cruzada: de técnica publicada a exigência de revisor | ~5 anos | `e2`, empurrado para 2030 |
| Blue Jay: anunciado 10/2025, arquivado 01/2026 | 3 meses | `e12`, e a régua de mortalidade de protótipo físico |
| SQL declarativo / otimizador de plano | ~10 anos de mudança de fluxo de engenharia | `e1`, empurrado para 2031 |

### 12.9 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2036/09-agentes-corporificados-ia-fisica-e-modelos-de-mundo/tendencia-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md --links
```

Saída, colada inteira:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 24 (frontmatter diz 24)
efeitos ordem 3: 17 (frontmatter diz 17)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 5 [('e1.2.1', 2039), ('e2.1.1', 2037), ('e3.2.1', 2040), ('e4.1.1', 2037), ('e10.1.1', 2037)]
confiança ordem 1: alta 6 · media 5 · baixa 1
confiança ordem 2: alta 2 · media 19 · baixa 3
confiança ordem 3: alta 0 · media 0 · baixa 17
links da seção 11: 33/33 respondem (frontmatter diz fontes: 35)
RESULTADO: ok
```

**Leitura da saída.** Os 33 links são os da seção 11; as duas fontes restantes das 35 lidas estão em 12.6, com o motivo — a diferença está explicada no cabeçalho da seção 11 e não é um contador quebrado.

Os **cinco efeitos de 3ª ordem com prazo além de 2036** são permitidos pelo formato e estão declarados aqui e em 7.10, um a um, com a classe de referência que produziu cada data: `e3.2.1` (2040), `e1.2.1` (2039), `e2.1.1` (2037), `e4.1.1` (2037) e `e10.1.1` (2037). Quatro dos cinco saíram da conferência de teto de 7.10; o quinto (`e2.1.1`) já estava fora antes dela. O que os une é o mecanismo: todos dependem de alguma coisa que **ainda não existe em escala** — base instalada grande o bastante para haver recall, regime de auditoria por terceiro, ciclo de agência de fomento, negociação coletiva. Nenhum deles foi comprimido para caber na janela, e é isso que o contador diferente de zero está dizendo.

A distribuição de confiança cai monotonicamente com a ordem — 6/5/1 na primeira, 2/19/3 na segunda, 0/0/17 na terceira —, e a terceira ordem é `baixa` por unanimidade, que é o esperado pelo formato e não um sinal de covardia: é o que a evidência aberta nesta rodada sustenta.
