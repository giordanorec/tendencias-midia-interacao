---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-22
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 18
efeitos_ordem_2: 30
efeitos_ordem_3: 22
tecnologias_citadas: [NVIDIA Cosmos 3, Genie 3, Project Genie, SIMA 2, Gemini Robotics 2, Gemini Robotics On-Device 2, Gemini Robotics ER 2, "pi0", Isaac Lab, Isaac Sim, MuJoCo, MuJoCo Warp, mjlab, Genesis, MetaDrive, AirSim, habitat-sim, habitat-lab, drake, newton, PhysX, MoveIt 2, OMPL, pinocchio, OpenVINS, MAVLink, Lanelet2, Apollo, RT-Thread, MONAI, ROS 2, ROSClaw, RoboGSim, SplatSim, RL-GSBridge, SimplerEnv, Open X-Embodiment, Matrix-Game 3.0, AlayaWorld, Decart Oasis, Waymo World Model, 3D Gaussian Splatting, VLA, Apptronik Apollo 2, Franka Duo, Unitree G1, AGIBOT]
fontes: 17
confianca: media
experimento: Fábrica de divergência — treinar uma política simples num mundo gerado e medir onde ela quebra no mundo real, com a causa atribuída ao mundo e não ao agente
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A IA saiu da tela e o caminho que ela usou para sair foi a simulação: treinar milhões de vezes
num mundo sintético antes de tocar o real. Em 2026 esse mundo sintético deixou de ser algo que
se constrói — com asset, malha e coeficiente de atrito escritos à mão — e passou a ser algo que
se gera: modelos de mundo abertos como o Cosmos 3 (NVIDIA, 31/05/2026) produzem vídeo, som e
ação com física aproximada, e o Genie 3 gera ambientes navegáveis a 720p e 24 fps. Ao mesmo
tempo, a política que controla o corpo começou a se separar do corpo: o Gemini Robotics 2 roda
o mesmo checkpoint em plataformas diferentes, e o modelo on-device se adapta a um corpo novo com
menos de 200 exemplos. Deste par — mundo gerado e política portátil — derivam quatro rupturas e,
delas, os efeitos que este mapa persegue até 2046: o cenário de teste deixa de ser um arquivo e
vira um conjunto de pesos, com consequência direta sobre perícia e certificação; o corpo do robô
vira periférico e o cérebro vira plataforma, com a briga de padrão que isso implica; o gesto
humano capturado por teleoperação vira matéria-prima escassa, com preço, dono e disputa
sindical; e todo mundo interativo já publicado — jogo inclusive — vira campo de treino, porque
a interface humana é a API. Para quem projeta mídia e interação, o achado central é que o
projeto de mundo deixa de ser só desenho de experiência e passa a ser, também, desenho de
distribuição de treino. O mapa é calibrado por uma régua única: software puro difunde em quatro
a seis anos, coisa que toca átomos difunde em quinze a quarenta — e este tema é metade de cada.

## 2. O tema

**O que é.** Agentes corporificados são sistemas de IA que agem num corpo — braço, robô móvel,
humanoide, drone, carro — e não apenas num texto. *IA física* é o nome que a indústria deu ao
conjunto de modelos que sustentam isso. *Modelo de mundo* é a peça nova: um modelo que **gera**
o ambiente em vez de apenas renderizá-lo a partir de uma cena descrita por alguém. A cadeia que
interessa é: o agente aprende num mundo; esse mundo era um programa escrito por humanos; e agora
ele começa a ser um modelo treinado.

**Onde encosta em mídia e interação.** Em quatro lugares, e nenhum deles é o robô.

1. **O mundo interativo vira instrumento de medida.** Quem desenha um nível, uma progressão de
   dificuldade, um espaço navegável, está desenhando a distribuição de situações que uma máquina
   vai encontrar. A mesma competência — compor espaço e ritmo — passa a ter um segundo uso, com
   segunda métrica.
2. **A interface de operação muda de natureza.** Quando a política aceita instrução em linguagem
   natural e demonstração, a operação de máquina vira conversa. Um erro de ambiguidade deixa de
   produzir uma tela errada e passa a produzir um movimento errado.
3. **O mesmo artefato serve a dois públicos.** Um mundo gerado em tempo real é simultaneamente
   entretenimento e ambiente de treino. Quem publica um jogo publica, sem ter decidido isso, um
   ginásio para agentes.
4. **O corpo entra no repertório de design.** Forma, gesto, sinalização de intenção e ritmo de
   movimento passam a ser decisões de projeto de interação, e não só de engenharia mecânica.

**Por que merece mapa de futuro, e não levantamento de estado da arte.** Porque o estado da arte
aqui muda de mês em mês e envelhece antes de servir; o que não envelhece são as consequências
estruturais. Três perguntas só se respondem em forma de mapa: se o mundo de treino é gerado,
quem responde quando o mundo mentiu? Se a política transfere entre corpos, onde fica o valor —
no corpo ou no cérebro? Se o dado físico é caro e o sintético é barato, qual é a proporção
mínima de real que mantém o sistema honesto? Nenhuma delas é pergunta sobre uma ferramenta.

**Fronteira com os vizinhos da disciplina.** Simulação de *sociedades* é o tema 6; capturar o
mundo real em 3D é o tema 10; ver e segmentar qualquer coisa é o tema 11; vídeo e imagem
sintéticos são o tema 12. Aqui o objeto é **o agente com corpo e o mundo em que ele aprende**.
Quando este mapa toca captura (3D Gaussian Splatting) ou geração de vídeo, é sempre pelo ângulo
de *como aquilo vira ambiente de treino*, não pelo ângulo da imagem.

**Premissas assumidas nesta rodada.** O briefing veio completo (modo, tema, horizonte, público,
recorte, descarte, viés, zona de interesse), e por isso não há rebaixamento de confiança por
ausência de entrevista. O que o briefing **não** fixou e eu assumi: (a) "quem projeta mídia e
interação" inclui game design, design de interação, produção audiovisual e arquitetura de
experiência, e exclui o engenheiro de robótica — os efeitos foram escritos pensando em quem
projeta, não em quem constrói o atuador; (b) o recorte global inclui uma nota sobre o Brasil,
que aparece na seção 3 e nos cenários, não como ramo próprio da roda; (c) "o que já é comum em
produto de massa" foi operacionalizado como "adoção em maioria segundo a escala de difusão do
§2", e as recusas estão registradas nominalmente na seção 4.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 22/09/2026. Dezessete fontes abertas e lidas, listadas na
seção 11. Toda fonte que não abriu — e foram quatro — está registrada na seção 12, e nada que
venha delas sustenta afirmação neste documento.*

### 3.1 O que já existe e funciona

**Modelos de mundo abertos, em produção.** A NVIDIA lançou o **Cosmos 3** em 31/05/2026: um
modelo de fundação aberto para IA física, construído sobre arquitetura *mixture-of-transformers*,
que combina raciocínio visual, geração de mundo e predição de ação num sistema só. O release
descreve treino sobre "bilhões de amostras" de texto, imagem, vídeo, som e trajetórias de ação,
e reivindica primeiro lugar em Physics-IQ, PAI-Bench, R-Bench, RoboLab e RoboArena. As versões
Super e Nano estão disponíveis em Hugging Face e GitHub; a Edge foi anunciada e ainda não saiu.
Há uma coalizão em torno dele — Agile Robots, Black Forest Labs, Generalist, LTX, Runway, Skild
AI — e distribuição por Baseten, CoreWeave e Azure. É o item mais importante da âncora: um
modelo de mundo **aberto e baixável** muda quem pode entrar.

**Mundo gerado em tempo real, com público pagante.** O **Genie 3** gera ambientes navegáveis a
partir de texto, a 720p e 20–24 fps, com consistência de vários minutos e memória de alterações
por cerca de um minuto. O **Project Genie** está disponível via Google Labs. A própria DeepMind
lista, entre os usos, treinar veículo autônomo em cenário seguro e avaliar agentes — inclusive
testes com o agente SIMA. Não é mais demonstração: é produto de nicho, com assinatura.

**Política que transfere entre corpos.** O **Gemini Robotics 2** (30/07/2026) faz controle de
corpo inteiro: caminhar até a mesa, pegar o regador, andar até a prateleira, posicionar. O
**Gemini Robotics On-Device 2** roda localmente e se adapta a um corpo novo "com poucas horas de
adaptação, tipicamente com menos de 200 exemplos", inclusive em corpos de formato e sensores
diferentes. O mesmo checkpoint opera Apptronik Apollo 2 (com mãos distintas) e Franka Duo sem
retreino. Parceiros: Apptronik, Boston Dynamics, Agile Robots. As linhagens abertas vêm do
**π₀** (Physical Intelligence, out/2024), que aplicou *flow matching* sobre um VLM pré-treinado
para controle geral de robô em braço único, braço duplo e manipulador móvel.

**Agente generalista em mundo 3D, pela interface humana.** O **SIMA 2** (DeepMind, 04/12/2025) é
um agente construído sobre Gemini que entende e age em uma variedade de mundos 3D, com cadeia de
raciocínio interna, diálogo, e — o dado que importa — **generalização robusta para ambientes que
nunca viu** e capacidade de aprender habilidade nova do zero num ambiente novo, usando o Gemini
para gerar tarefa e recompensa. Ele joga pela mesma interface que um humano usa, sem acesso ao
código do jogo.

**Frota física, pequena mas com curva.** Segundo o Smart Analytics Global, o embarque global de
humanoides no primeiro semestre de 2026 foi de **19.100 unidades**, contra 5.100 no mesmo período
de 2025 — alta de 272%. AGIBOT liderou com 8.400 unidades (44%), Unitree com 5.900 (31%), Galbot
900, UBTECH 700, Leju 600. A projeção de ano cheio é de cerca de 60.000 unidades e US$ 1,6
bilhão. Aplicações industriais e comerciais passaram de ~50% para mais de 70% dos embarques. Dois números
dessa mesma apuração mudam a leitura de tudo o que vem depois: fabricantes chineses respondem por
**mais de 97%** do embarque global, e a China sozinha por **mais de 85%** da demanda. Não existe,
hoje, mercado global de corpo — existe um mercado chinês e o resto.

**Real2sim2real por captura.** O **RoboGSim** (nov/2024, revisto ago/2025) monta simulador a
partir de 3D Gaussian Splatting — reconstrutor gaussiano, construtor de gêmeo digital, compositor
de cena e motor interativo — e relata desempenho *zero-shot* no robô real comparável ao de dados
reais, com vantagem em pontos de vista e cenas novos. É a ponte entre o tema 10 (captura) e este.

**Dado.** O **Open X-Embodiment** reúne mais de 1 milhão de trajetórias reais em 22 plataformas.
O mercado de dado sintético foi avaliado em US$ 2,48 bilhões em 2026. Robôs industriais em
operação no mundo: 4,66 milhões de unidades, US$ 16,7 bilhões em instalações em 2026.

**Ferramental maduro.** ROS 2, MoveIt 2, OMPL, pinocchio, SLAM, MAVLink, Lanelet2, OpenVINS,
RT-Thread. MuJoCo e Isaac Sim/Isaac Lab como simuladores físicos; MuJoCo Warp e mjlab como a
geração acelerada; Genesis, habitat-sim/habitat-lab, AirSim, MetaDrive, drake, newton, PhysX na
volta. Isto é contexto, não disrupção — ver a seção 4.

### 3.2 O que existe e ainda não funciona

**A transferência sim-para-real continua aberta.** O artigo *Robots Need More than VLA and World
Models* (arXiv 2606.06556, 08/06/2026, com Schwager, Ajoudani, Cadena, Peters, Hutter, Bou-Ammar
entre os autores) argumenta que modelos de mundo sozinhos falham em fundamentação física,
raciocínio de contato e transferência sim-para-real, e que VLAs falham em raciocínio espacial,
compreensão temporal e adaptação ao corpo específico; nenhum dos dois trata especificação de
recompensa, eficiência de aprendizado ou quantificação de incerteza. Um levantamento de 2026
sobre modelos de mundo interativos em vídeo (arXiv 2606.01164, 02/06/2026) aponta que a lacuna
principal é de **benchmark**: consistência entre quadros, coerência temporal e plausibilidade
física não têm medida aceita.

**Destreza fina.** Os próprios números do Gemini Robotics 2 delimitam o teto: tarefas gerais de
corpo inteiro entre 45,7% e 76,3% de sucesso; inserção precisa com garra, 89,6%; tarefas
multidedo, entre 32% e 92% conforme a tarefa. Uma banda de 32% a 92% não é frota; é laboratório.

**Segurança em espaço público.** Em 23/03/2026, num shopping em Shaanxi (China), um humanoide em
apresentação de dança atingiu o rosto de uma criança com o braço mecânico e **continuou a rotina
sem detectar a presença dela** (registro de incidente da OECD.AI). Não é caso isolado: há
registros de colisão com espectador idoso em Chengdu e de perda de controle no World Robot
Conference de 2026. Não existe ainda norma específica para humanoide — a ISO 25785-1 está em
redação; o que se aplica é ISO 10218 e especificação do fabricante.

**Custo do dado físico.** Coleta por teleoperação, em 2026: US$ 15–30/hora para teleoperação
simples, US$ 40–80 para bimanual estilo ALOHA, US$ 25–60 para vestível egocêntrico, US$ 80–150
para humanoide multissensor. Rendimento: 6–12 demonstrações/hora no caso simples, 1–3 no
humanoide complexo, porque tarefa de corpo inteiro leva 3 a 8 minutos por demonstração contra
30–60 segundos numa manipulação simples. Um programa bimanual de 2.000 demonstrações custa entre
US$ 110 mil e US$ 215 mil com controle de qualidade; um de 5.000 demonstrações de corpo inteiro,
entre US$ 250 mil e US$ 750 mil só na coleta. Custo por demonstração aproveitável, em programa de
humanoide: US$ 50–150.

### 3.3 Quem constrói

- **NVIDIA** — Cosmos 3 (aberto), Isaac Sim/Isaac Lab, newton, GR00T. Vende GPU; o modelo aberto
  é meio, não fim. É o ator cuja abertura é mais contingente à estratégia.
- **Google DeepMind** — Gemini Robotics 2 / ER 2 / On-Device 2, SIMA 2, Genie 3 / Project Genie.
  Único ator com o mundo gerado, o agente de mundo virtual e a política de robô na mesma casa.
- **Physical Intelligence** — π₀ e sucessores; a linhagem VLA que a academia consegue seguir.
- **Fabricantes de corpo** — AGIBOT e Unitree concentram 75% do embarque; Apptronik, UBTECH,
  Galbot, Leju, Boston Dynamics, Agile Robots.
- **Comunidade aberta** — MuJoCo/mjlab, Genesis, Isaac Lab, habitat, MetaDrive, Open
  X-Embodiment. É por aqui que uma universidade brasileira entra sem cluster próprio.
- **Certificação e regulação** — o Regulamento (UE) 2023/1230 passa a ser obrigatório em
  **20/01/2027** e declara cobrir explicitamente máquina móvel autônoma, IoT e módulos de IA que
  asseguram funções de segurança. É a data mais firme deste mapa inteiro.

### 3.4 Números de adoção

| Indicador | Valor | Fonte |
|---|---|---|
| Humanoides embarcados, 1S/2026 | 19.100 unidades (+272% a/a) | SAG, via Humanoids Daily |
| Projeção 2026 | ~60.000 unidades · ~US$ 1,6 bi | SAG, via Humanoids Daily |
| Concentração de oferta | fabricantes chineses respondem por >97% do embarque global | SAG, via Humanoids Daily |
| Concentração de demanda | a China responde por >85% da demanda global | SAG, via Humanoids Daily |
| Robôs industriais em operação | 4,66 milhões | Label Studio (jul/2026) |
| Densidade robótica global | 162 por 10.000 empregados (2023), contra 74 em 2016 | IFR (nov/2024) |
| Coreia do Sul · Singapura · China | 1.012 · 770 · 470 por 10.000 | IFR |
| Trajetórias reais abertas | >1 milhão, 22 plataformas (Open X-Embodiment) | Label Studio |
| Custo de demonstração humanoide | US$ 50–150 por demonstração útil | DataX Power |

**Nota sobre o Brasil.** O relatório *State of Robotics Brazil 2026* (Robotics Center of Silicon
Valley, março/2026, 38 páginas) mede **18 robôs por 10.000 trabalhadores industriais** — contra
uma média global de 151 na metodologia deles — e, ao mesmo tempo, **350 por 10.000 no setor
automotivo**. O mercado brasileiro de robótica é de R$ 8,2 bilhões em 2026, com R$ 2,8 bilhões de
investimento em 2025 e 52% de crescimento, o mais rápido da América Latina. Há cerca de 45.000
drones agrícolas autorizados pela ANAC, e a colheita de cana está mais de 95% mecanizada; o país
é o segundo do mundo em drone agrícola, atrás da China. O relatório não quantifica humanoide nem
IA física no Brasil. A leitura que isto autoriza — e só ela — é que **o Brasil não tem uma curva
de automação, tem duas**: uma industrial muito baixa e uma agrícola/automotiva competitiva. Todo
efeito deste mapa que depende de densidade robótica chega ao Brasil pelo agro e pelo automotivo
antes de chegar pela indústria geral.

## 4. As disrupções-raiz

### 4.0 O critério, e as recusas

Cada candidato passou pelas quatro perguntas do método: o que rompe, por que agora, onde está na
difusão, o que ainda falta. A régua de recusa é a da disciplina: **se dá para fazer com o que já
é comum em produto de massa, é maduro.** As recusas:

- **Candidato ROS/ROS 2 recusado como raiz:** adoção em maioria na pesquisa em robótica desde
  ~2015; tratado como contexto na seção 3.
- **Candidato SLAM e planejamento de trajetória (MoveIt 2, OMPL, pinocchio) recusado:** maioria;
  contexto.
- **Candidato simulação física acelerada por GPU (MuJoCo, Isaac Sim, PhysX) recusado:** é
  pré-condição das raízes, não ruptura em si — está em maioria no campo desde ~2023. Entra como
  a razão do "por que agora" de R1 e como efeito de retroação (e5.1.1).
- **Candidato "robô humanoide" recusado como raiz:** é forma, não ruptura. Um humanoide com
  política escrita à mão não rompe nada que um braço industrial não rompesse. O que rompe é o que
  está dentro dele — R2 — e o que o treinou — R1 e R3.
- **Candidato "veículo autônomo" recusado:** dezenove anos desde o DARPA Urban Challenge de 2007
  e a operação comercial ainda é de nicho geográfico; é a **classe de referência** mais útil deste
  mapa, e por isso aparece na seção 5 como régua de prazo, não como raiz.
- **Candidato "teleoperação" recusado como raiz, promovido a insumo:** teleoperar é antigo. O que
  é novo é teleoperar **para produzir dado de treino em escala industrial** — e isso é R3.

Quatro raízes entraram.

### 4.1 R1 — O mundo de treino deixa de ser escrito e passa a ser gerado

**O que rompe.** Rompe o ofício de construir mundo de simulação — modelagem de asset, autoria de
cena, calibração de parâmetro físico — e rompe algo mais fundo: a suposição de que o ambiente de
teste é um **artefato auditável**. Um simulador escrito é um programa: tem código, tem
especificação, dá para ler a linha que define o coeficiente de atrito e discordar dela. Um modelo
de mundo é um conjunto de pesos: não tem especificação, e a pergunta "por que este mundo nunca
gera piso molhado?" não tem onde ser respondida. Não é melhoria de simulador; é troca do tipo de
objeto.

**Por que agora, e não há cinco anos.** Três pré-condições apareceram juntas entre 2024 e 2026:
(a) geração de vídeo com coerência temporal suficiente para ser navegada em tempo real — Genie 3,
720p, 24 fps, minutos de consistência; (b) modelos que geram **ação** junto com imagem e som, e
não só pixel — Cosmos 3, omnimodelo aberto; (c) computação suficiente para rodar isso como laço
de treino e não como demonstração. Nenhuma das três existia em 2021.

**Onde está na difusão.** Entre **demo pública** e **produto de nicho**. Project Genie é produto
pago; Cosmos 3 é baixável e tem parceiros de nuvem; mas nenhum operador industrial trocou o
simulador escrito pelo gerado.

**O que ainda falta acontecer.** (1) Consistência de horas, não de minutos. (2) Uma medida aceita
de plausibilidade física — o levantamento de arXiv 2606.01164 diz textualmente que ela não
existe. (3) Preço por hora de rollout que compita com física rígida em GPU. (4) Alguma forma de
auditar o que o modelo de mundo sistematicamente **não** gera — hoje não há.

**Quem bloqueia, e com que incentivo.** Organismos de certificação e seguradoras. O Regulamento
(UE) 2023/1230, obrigatório em 20/01/2027, cobre explicitamente módulos de IA que asseguram
funções de segurança; um mundo gerado não traz especificação para conferir contra. O bloqueio não
é ideológico: é que ninguém assina laudo sobre um objeto sem especificação. Efeito gerado: e2.

### 4.2 R2 — A política se separa do corpo

**O que rompe.** Rompe a integração vertical do robô. Até agora, cada fabricante escrevia o
controle do seu corpo; a capacidade era propriedade da máquina. Se o mesmo checkpoint opera
corpos de formatos e sensores diferentes, e se adaptar a um corpo novo custa menos de 200
exemplos e algumas horas, então o corpo vira periférico e o cérebro vira plataforma. Rompe também
a engenharia por tarefa: em vez de programar a tarefa, demonstra-se a tarefa.

**Por que agora.** Porque o VLA passou a herdar semântica de escala de internet em vez de aprender
do zero — o π₀ fez isso com *flow matching* sobre VLM pré-treinado em out/2024 — e porque o dado
cruzado entre corpos existe (Open X-Embodiment, >1 milhão de trajetórias, 22 plataformas). Em
2021 cada laboratório treinava a sua política no seu braço, com os seus dados.

**Onde está na difusão.** **Produto de nicho.** Gemini Robotics 2 está com parceiros de acesso
antecipado; ER 2 no AI Studio. Não é compra de prateleira.

**O que ainda falta acontecer.** (1) Confiabilidade em contato fino — a banda de 32% a 92% em
tarefas multidedo é o teto. (2) Um padrão de interface entre cérebro e corpo, que hoje não
existe. (3) Preço de corpo que faça a conta fechar fora de logística de grande porte. (4)
Resposta jurídica para o robô cuja capacidade muda por atualização.

**Quem bloqueia.** Os fabricantes de corpo, que perdem margem se o cérebro for portátil. O
instrumento é conhecido e barato: firmware assinado, garantia anulada por política de terceiro,
API fechada. Efeito gerado: e6.1.

### 4.3 R3 — O gesto humano vira matéria-prima escassa e precificada

**O que rompe.** Rompe a suposição — herdada do texto e da imagem — de que dado de treino é
abundante e raspável. Não existe internet de contato. Cada trajetória de manipulação custa entre
US$ 50 e US$ 150 para ser produzida, uma a três por hora no caso difícil, e ninguém a produziu por
acidente enquanto fazia outra coisa. Isso cria uma indústria de trabalho humano cujo produto é a
própria capacidade de substituir aquele trabalho, e cria um ativo — o gesto gravado — com dono,
preço e disputa.

**Por que agora.** Porque o gargalo migrou. Enquanto o modelo era o limitante, dado mediano
bastava; com VLA sobre VLM pré-treinado, o limitante virou a demonstração física. A coleta
deixou de ser tarefa de bolsista e virou operação com faixa salarial, métrica de produtividade
(demonstrações por hora) e taxa de aceitação (75% típica).

**Onde está na difusão.** **Adoção precoce.** Já há mercado de trabalho, faixa de preço pública e
empresas especializadas. Ainda não há padrão de formato, mercado de licenciamento nem
jurisprudência sobre propriedade do gesto.

**O que ainda falta acontecer.** (1) Um formato comum de episódio, para que dado comprado de um
fornecedor sirva a outro modelo. (2) Uma decisão jurídica sobre quem é dono da trajetória gravada
no corpo de um trabalhador. (3) Um mercado secundário — hoje quem coleta usa, não vende. (4) Uma
medida de quanto dado real é preciso para ancorar quanto dado sintético.

**Quem bloqueia.** Duas frentes com incentivos opostos ao mesmo alvo: sindicatos, que reconhecem
na teleoperação o primeiro caso em que o trabalhador treina explicitamente o substituto; e donos
de espaço movimentado — varejo, hospital, aeroporto —, que descobrem que o ambiente deles é
insumo e passam a cobrar por acesso. Efeitos gerados: e11.2 e e12.

### 4.4 R4 — O agente generalista opera qualquer mundo 3D pela interface humana

**O que rompe.** Rompe a fronteira entre software que se integra e software que se usa. Um agente
que joga pela mesma tela e pelos mesmos controles que uma pessoa não precisa de API, de permissão
nem de cooperação de quem publicou o mundo. Isso converte todo ambiente interativo já existente —
jogo, simulador, CAD, sistema supervisório industrial com interface gráfica dos anos 1990 — em
superfície operável e em campo de treino. Rompe, para quem projeta, a premissa de que o público
de um mundo interativo é humano.

**Por que agora.** SIMA 2, dez/2025: agente sobre Gemini que opera vários mundos 3D comerciais
sem acesso ao código, generaliza para ambientes não vistos e gera as próprias tarefas e
recompensas para aprender habilidade nova. O que mudou em relação a 2021 não foi o controle: foi
o modelo de linguagem-visão por trás, que entende o que é uma porta sem que alguém a rotule.

**Onde está na difusão.** **Demo pública**, caminhando para nicho. O SIMA 2 é pesquisa publicada;
o Project Genie é produto. Toda cadeia derivada desta raiz carrega confiança rebaixada.

**O que ainda falta acontecer.** (1) Custo de inferência por hora de jogo que torne o playtest
por agente mais barato que por pessoa. (2) Uma posição das plataformas — hoje nenhuma grande
loja de jogos tem política sobre agente. (3) Persistência: agente que retoma sessão e lembra.
(4) Confiabilidade suficiente para operar equipamento real pela tela, e não só jogo.

**Quem bloqueia.** As plataformas de jogo e os estúdios. O instrumento já existe e já está pago:
anti-cheat. Estender detecção de bot para detecção de agente é barato, e o incentivo é imediato
(economia de servidor, integridade competitiva, controle de marca). Efeito gerado: e15.1.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O mundo de treino deixa de ser escrito e passa a ser gerado
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O cenário de teste deixa de ser um arquivo versionável e passa a ser semente mais pesos, e reproduzir um teste exige guardar o modelo inteiro"
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A perícia de acidente com robô passa a pedir o modelo de mundo, e não apenas o log da máquina"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Fabricantes passam a manter um simulador determinístico de prestação de contas ao lado do gerativo, apenas para poder responder em juízo"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Repositórios de robótica passam a distribuir pesos de mundo como hoje distribuem descrições de corpo, e o pacote de uma tarefa sobe de megabytes para centenas de gigabytes"
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Laboratórios sem cluster próprio perdem a capacidade de replicar experimento de robótica, e a replicação migra para quem tem infraestrutura"
                sinal: fraco
                prazo: 2036
                confianca: media
      - id: e2
        ordem: 1
        efeito: "Organismos de certificação passam a vender auditoria de mundo gerado como linha de serviço, porque o Regulamento UE 2023/1230 exige revisão de função de segurança com aprendizagem e um mundo gerado não traz especificação para conferir"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O seguro de operação de robô passa a precificar a proveniência do treino, com apólice mais barata para quem treinou em mundo auditado"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O mundo certificado vira produto vendido por assinatura, e o simulador passa a ser regulado como hoje é o software de aviônica"
                sinal: fraco
                prazo: 2048
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A equipe de conteúdo de um simulador encolhe e a de avaliação cresce, porque gerar mil variações passa a custar menos que modelar uma e o gargalo vira decidir quais mil importam"
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O ofício de level designer se divide entre quem desenha experiência para pessoa e quem desenha distribuição de casos para máquina, com ferramentas e métricas diferentes"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O portfólio de um designer de mundo passa a incluir cobertura de situações raras como número, porque quem contrata é o time de robótica e não o de jogo"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "O gêmeo digital de um espaço real passa a ser reconstruído por captura e continuado por geração, em vez de modelado por artista"
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Operadores de armazém passam a exigir a reconstrução do próprio galpão antes de comprar robô, e a venda passa a incluir uma etapa de captura"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A captura de um espaço movimentado vira ativo negociável, porque quem tem a reconstrução do supermercado tem o dado que treina o robô que trabalha nele"
                sinal: fraco
                prazo: 2036
                confianca: media
          - id: e4.2
            ordem: 2
            efeito: "Arquitetos e cenógrafos passam a entregar, junto do projeto, uma versão capturável e simulável do espaço, porque quem compra quer saber se robô opera ali"
            sinal: fraco
            prazo: 2038
            confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O custo de computação para gerar mundo vira item de orçamento de quem treina robô, e o preço do rollout sintético passa a ser negociado como hoje se negocia o preço do dado"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Laboratórios trocam horas de simulação por horas úteis por dólar como métrica de progresso, e rollout curto e barato volta a ganhar de rollout longo e fotorrealista"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A física aproximada e rápida sobrevive ao modelo gerativo em vez de ser substituída por ele, e o pipeline padrão vira híbrido"
                sinal: fraco
                prazo: 2035
                confianca: media
  - disrupcao: A política se separa do corpo
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O fabricante de robô perde o centro do valor, porque o corpo vira periférico e o cérebro vira plataforma"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Fabricantes reagem fechando a interface com firmware assinado e anulação de garantia por política de terceiro, e o mercado se divide entre corpos abertos e corpos travados"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Forma-se um mercado cinza de corpos destravados, e o preço do robô usado passa a depender de ele aceitar cérebro de terceiro"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Surge uma camada de compatibilidade entre corpos, e a disputa por esse padrão decide quem cobra pedágio na cadeia inteira"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O padrão vencedor é o de quem tem mais dado e não o de quem tem melhor engenharia, porque adaptar a um corpo novo custa exemplos e não código"
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Comprar um robô passa a ser assinar um serviço, porque a capacidade chega por atualização e a máquina faz amanhã o que não fazia hoje"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O manual de instruções deixa de descrever o que a máquina faz, e isso entra em atrito com a exigência de instruções completas da legislação de máquinas"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Reguladores europeus passam a exigir congelamento de capacidade para operação junto de pessoas, e o robô só atualiza o que foi recertificado"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "O desempenho do robô passa a depender da conexão e do plano contratado, e a autonomia local vira item de preço vendido como garantia de funcionamento sem rede"
            sinal: medio
            prazo: 2031
            confianca: media
      - id: e8
        ordem: 1
        efeito: "A operação de máquina passa de programação para conversa e demonstração, e quem sabe descrever a tarefa vale mais que quem sabe programar trajetória"
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "O designer de interação passa a projetar para dois interlocutores ao mesmo tempo, a pessoa que pede e a máquina que interpreta, e o erro de ambiguidade vira erro físico em vez de erro de tela"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "O padrão de confirmação antes de ato irreversível migra da tela para o corpo, e o robô passa a sinalizar a intenção com movimento antes de executar"
                sinal: fraco
                prazo: 2034
                confianca: media
          - id: e8.2
            ordem: 2
            efeito: "O vocabulário de comando vira ativo de empresa, e a maneira como uma rede descreve suas tarefas passa a diferenciar sua frota da do concorrente"
            sinal: fraco
            prazo: 2036
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: "A confiabilidade em contato fino continua sendo o teto, e a frota real se concentra em carregar, vigiar e transportar enquanto a demonstração mostra dobrar roupa"
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "A promessa de robô de uso geral é vendida, entregue pela metade e vira litígio de publicidade em pelo menos um mercado grande"
            sinal: fraco
            prazo: 2035
            confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "O humanoide perde espaço para formas especializadas onde a tarefa é conhecida, e a forma humana fica onde o ambiente não pode ser alterado"
            sinal: medio
            prazo: 2036
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "A forma humana vira argumento de aceitação social e não de eficiência, e o desenho do corpo passa a ser trabalho de quem projeta interação"
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "O ciclo de melhoria passa a depender de dado de operação real, e a máquina que trabalha vira sensor de treino da geração seguinte"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Contratos de locação de robô passam a disputar a cláusula de uso do dado gerado no cliente, como hoje se disputa cláusula de dado em software por assinatura"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Setores com ambiente sensível ficam com frota e modelo próprios, mais caros e piores, para não exportar o retrato do seu espaço"
                sinal: fraco
                prazo: 2041
                confianca: baixa
  - disrupcao: O gesto humano vira matéria-prima escassa e precificada
    efeitos:
      - id: e11
        ordem: 1
        efeito: "A coleta de demonstração por teleoperação vira indústria de mão de obra, paga por episódio útil e medida em demonstrações por hora"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Esse trabalho se desloca para onde a hora é barata, como já aconteceu com anotação de imagem, e o gesto que treina o robô do Norte é executado no Sul"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "A maneira de fazer embutida em milhões de robôs passa a ser a de um grupo específico de trabalhadores, e diferença cultural de gesto vira viés físico"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "O teleoperador vira o primeiro caso em que a pessoa treina explicitamente quem vai substituí-la, e isso entra em negociação sindical como item próprio"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: "Acordos coletivos passam a prever participação por gesto licenciado, no molde do que atores conseguiram para voz e imagem"
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "Quem controla espaço físico movimentado descobre que pode cobrar pelo direito de capturar, e o ambiente vira fonte de renda"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "O contrato de ocupação de loja passa a ter cláusula de captura, e redes grandes montam área própria de licenciamento de ambiente"
            sinal: fraco
            prazo: 2036
            confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: "Espaços que se recusam a ser capturados ficam mal servidos por robô, e a operabilidade robótica passa a distinguir lugares como hoje a acessibilidade distingue"
            sinal: fraco
            prazo: 2041
            confianca: baixa
      - id: e13
        ordem: 1
        efeito: "O dado sintético gerado por modelo de mundo passa a ser usado em volume, e a discussão vira quanto de real é preciso para ancorar quanto de sintético"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Aparece a degradação por realimentação, com modelos de mundo treinados em saída de modelos de mundo produzindo física cada vez mais plausível e menos verdadeira"
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "Passa a valer exigência de lastro real em domínio regulado, com proporção mínima de dado capturado no mundo físico"
                sinal: fraco
                prazo: 2047
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "Dado real vira o que se compra e dado sintético vira o que se gera, e o preço da hora de contato real sobe enquanto tudo em volta barateia"
            sinal: medio
            prazo: 2034
            confianca: media
      - id: e14
        ordem: 1
        efeito: "A curadoria de dado de contato passa a valer mais que a arquitetura do modelo, e times contratam quem sabe medir distribuição em vez de quem sabe treinar rede"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "A pontuação em simulação passa a ser tratada como suspeita por construção, e a avaliação migra para arena física com robô de terceiro"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "Existe infraestrutura pública de avaliação física com tarefas seladas e fila de submissão, e passar nela vira pré-requisito de compra pública"
                sinal: fraco
                prazo: 2039
                confianca: baixa
  - disrupcao: O agente generalista opera qualquer mundo 3D pela interface humana
    efeitos:
      - id: e15
        ordem: 1
        efeito: "Todo mundo interativo já publicado vira campo de treino de agente sem consentimento de quem o publicou, porque a interface humana é a API"
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "Plataformas de jogo estendem o anti-cheat para detectar agente, e a detecção passa a atingir também jogador humano com auxílio, criando problema de falso positivo"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "Forma-se a categoria de servidor para agentes, separado do servidor humano, e o mesmo jogo passa a ter duas populações com regras diferentes"
                sinal: fraco
                prazo: 2035
                confianca: media
          - id: e15.2
            ordem: 2
            efeito: "Estúdios passam a licenciar o próprio mundo como ambiente de treino, e a receita de um jogo antigo passa a vir de quem treina agente nele"
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: "Jogos passam a ser projetados para dois públicos desde o início e ganham modo de instrumentação com estado exposto e episódio reprodutível"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: "O projeto de mundo vira em parte desenho de currículo, porque quem monta a progressão de dificuldade para pessoa monta a distribuição de treino de uma máquina"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: "Ferramentas de autoria passam a mostrar cobertura, indicando que situações o mundo produz e quais nunca acontecem, e essa métrica entra no vocabulário de quem projeta experiência"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: "A métrica de cobertura vaza para o design de experiência humana e passa a avaliar tutorial e primeiro uso de produto, não só treino de agente"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e16.2
            ordem: 2
            efeito: "A geração de ambiente fecha o laço com o desempenho de quem joga, e o mundo passa a se reescrever para manter a dificuldade na fronteira do jogador, humano ou máquina"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e16.2.1
                ordem: 3
                efeito: "A dificuldade deixa de ser escolha autoral e vira saída de um sistema de controle, e a disputa sobre quem decide o que é difícil volta com outro nome"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e17
        ordem: 1
        efeito: "O playtest inicial migra para frota de agentes rodando de madrugada, porque testar software 3D com pessoa fica caro perto de testar com máquina"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: "O achado de playtest muda de natureza, com o agente encontrando o que quebra e a pessoa continuando a ser a única que encontra o que entedia"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: "Times de produto separam formalmente teste de robustez por máquina de pesquisa de experiência com pessoa, com orçamentos e ciclos distintos"
                sinal: fraco
                prazo: 2036
                confianca: media
          - id: e17.2
            ordem: 2
            efeito: "Estúdios pequenos ganham volume de teste que só estúdio grande tinha, e a distância técnica entre grande e pequeno encolhe enquanto a de conteúdo não"
            sinal: fraco
            prazo: 2035
            confianca: baixa
      - id: e18
        ordem: 1
        efeito: "A mesma pilha que opera jogo passa a operar equipamento real pela tela de supervisão, e software industrial antigo sem interface de programação vira operável por agente que enxerga a tela"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: "A superfície de ataque de uma planta industrial passa a incluir o que está desenhado na tela, e o ataque por interface visual entra no modelo de ameaça"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e18.1.1
                ordem: 3
                efeito: "Normas operacionais passam a exigir confirmação fora da tela para ação física crítica, revertendo trinta anos de migração para a interface gráfica"
                sinal: fraco
                prazo: 2041
                confianca: baixa
```

### 5.1 A régua de prazo — as classes de referência usadas

Nenhum ano acima é chute. Cada prazo foi posto contra uma tecnologia comparável e o tempo que ela
levou entre "funciona em demonstração" e 10% de adoção no público relevante. Há duas famílias
nítidas, e o mapa inteiro depende de saber a qual cada efeito pertence:

| Classe de referência | Demo → 10% de adoção | O que ela calibra aqui |
|---|---|---|
| Smartphone (2007 → ~2011) | ~4 anos | Nada. É rápido demais para servir a este tema. |
| Modelo de linguagem em trabalho de escritório (2020 → ~2025) | ~5 anos | Efeitos puramente de software: e3, e8, e11, e13, e15, e17 |
| Motor de jogo comercial como padrão de indústria (Unreal 1998 → ~2012) | ~14 anos | Efeitos de ferramenta e ofício: e1, e5, e16, e3.1, e16.1 |
| Veículo autônomo (DARPA 2007 → operação comercial de nicho em 2026) | 19 anos e ainda <1% | Efeitos que dependem de robô em espaço não controlado: e9, e9.2, e12.2 |
| Robô industrial (1961 → 162 por 10.000 em 2023) | ~60 anos para 1,6% | O piso de velocidade para qualquer coisa que exija comprar corpo: e6, e7, e10 |
| VR de consumo (2016 → ainda <10% em 2026) | >10 anos, sem chegar | O lembrete de que demonstração convincente não implica difusão |
| Certificação de software crítico em aviação (DO-178B, 1992 → norma de fato ~2005) | ~13 anos | Efeitos regulatórios: e2, e2.1.1, e7.1.1, e14.1.1, e18.1.1 |

**A consequência prática, e é a espinha deste mapa:** software puro difunde em quatro a seis
anos; o que exige comprar átomos difunde em quinze a quarenta. Este tema é metade de cada. Por
isso os efeitos de mundo gerado, agente em jogo e coleta de dado estão nos anos 2029–2034, e os
efeitos de frota, cidade e norma estão nos anos 2036–2048. Um horizonte de 2046 é longo o
bastante para conter os dois regimes — e é exatamente por isso que ele é o horizonte certo para
este tema, e não para quase nenhum outro da disciplina.

### 5.2 Os mecanismos, ramo a ramo

**R1 — mundo gerado.** O mecanismo comum é a **perda de especificação**. Um simulador escrito é
inspecionável linha a linha; um modelo de mundo, não. De perder a especificação decorre tudo:
**e1** (o artefato do teste vira pesos, porque não há outro jeito de guardar o que gerou aquele
cenário), **e1.1** (a perícia precisa do modelo porque o log do robô não diz o que o robô
acreditava), **e2** (certificar exige algo contra o que conferir, e como não há, cria-se um
serviço para produzir esse algo), **e1.2** (se o mundo é pesos, a distribuição de uma tarefa
carrega pesos, e o tamanho salta três ordens de grandeza), **e1.2.1** (quem não tem cluster não
baixa nem roda, e replicar sai do alcance de quem só tem ideia). Em paralelo, **e3** decorre de
uma inversão de custo marginal: gerar variação passa a custar quase nada e escolher variação
passa a custar tudo — é a mesma inversão que a fotografia digital produziu na edição. **e4**
decorre de captura ter ficado barata (3DGS) e geração ter ficado contínua: reconstrói-se o que
existe e gera-se o resto. **e5** é o freio: geração custa GPU por hora de rollout, e física
rígida custa muito menos — daí **e5.1.1**, o pipeline híbrido, que é a previsão mais provável
deste ramo e a que mais contraria a leitura entusiasta da raiz.

*Prazos deste ramo:* e3 em 2029 e e1 em 2030 usam a classe do modelo de linguagem (mudança de
prática dentro de equipe, sem compra de hardware novo). e2 em 2031 usa a classe da certificação
aeronáutica, encurtada porque a data regulatória já está marcada — 20/01/2027 — e o serviço
aparece atrás da obrigação, não antes. e2.1.1 em 2048 usa a classe inteira (13 anos a partir de
2035) e **fica fora do horizonte de 2046**; está registrado aqui por completude do ramo, e não
sustenta nada nos cenários da seção 9.

**R2 — política separada do corpo.** O mecanismo é **a queda do custo de adaptação**. Menos de
200 exemplos e poucas horas para um corpo novo é o número que faz o corpo virar periférico: com
esse custo, trocar de fornecedor de corpo deixa de ser reprojeto e vira compra. Daí **e6**; daí a
reação previsível de quem perde margem, **e6.1** (o instrumento — firmware assinado — já existe e
já está pago em outros mercados, de impressora a trator); daí a necessidade de uma camada de
compatibilidade, **e6.2**, e a observação desagradável de **e6.2.1**: num regime em que adaptar
custa exemplos, quem tem exemplos define o padrão, e engenharia superior não compensa. **e7**
decorre de a capacidade passar a chegar por atualização, o que é trivial em software e inédito em
máquina que pesa 70 quilos; **e7.1** e **e7.1.1** são o atrito com um arcabouço legal escrito para
máquinas cuja função não muda. **e8** decorre da própria interface do VLA: se a política aceita
linguagem e demonstração, a competência de operação migra de programar para descrever — e
**e8.1** é a consequência que interessa a esta disciplina, porque desloca o custo do erro de
ambiguidade da tela para o mundo. **e9** é o freio, e é o freio mais forte do mapa: a banda de 32%
a 92% em tarefa multidedo não é ruído, é o estado da técnica. **e10** fecha o laço: a frota
operando é a fonte de dado da geração seguinte, o que dá vantagem cumulativa a quem já vendeu.

*Prazos deste ramo:* e6 em 2033 usa a classe do robô industrial atenuada — não é preciso que a
frota seja grande para que o valor migre, basta que a compra seja substituível; mas exige compra,
então não cabe na classe do software. e8 em 2030 usa a classe do modelo de linguagem, porque é
mudança de prática de operação. e9 em 2030 não é previsão de mudança: é a continuação medida do
presente, e por isso tem sinal forte e confiança alta.

**R3 — o gesto como matéria-prima.** O mecanismo é **escassez com preço público**. US$ 50 a 150
por demonstração aproveitável, 1 a 3 por hora no caso difícil, taxa de aceitação de 75%: com
esses números, dado de contato é insumo industrial, e insumo industrial atrai as três coisas de
sempre — deslocamento geográfico (**e11.1**), organização do trabalho (**e11.2**) e disputa pela
fonte (**e12**). **e11.1.1** é o efeito que só aparece porque se olhou para quem perde: se o
gesto vem de um grupo, o robô herda a maneira de fazer daquele grupo, e "empurrar a porta" passa
a ter sotaque. **e13** e **e13.2** são o par econômico: o sintético barateia, o real encarece
relativamente, e a razão entre os dois vira a variável de decisão — é o indicador mais útil deste
mapa inteiro para quem quiser acompanhá-lo. **e13.1** é o freio interno: modelo de mundo treinado
em saída de modelo de mundo converge para física plausível e falsa, e isso só é detectado por
teste físico — daí **e14.1**, e daí a arena física de **e14.1.1**.

*Prazos deste ramo:* e11 em 2029 e e13 em 2029 são a continuação do que já está acontecendo
(sinal forte). e11.2.1 em 2040 usa como classe de referência o acordo de voz e imagem de atores
(2023 → cláusula padrão em ~2026, três anos), mas **multiplicado por quatro**, porque o gesto não
tem a identificabilidade que a voz tem: é muito mais difícil provar que aquele movimento é seu. A
dificuldade de prova é o que empurra o prazo, não a dificuldade política. **e13.1.1** em 2047 fica
**fora do horizonte** e está registrado por completude.

**R4 — agente em qualquer mundo.** O mecanismo é **a interface humana como porta destrancada**.
Se o agente opera pela tela, não há permissão a conceder nem integração a fazer, e a condição de
uso de um mundo publicado deixa de ser tecnicamente aplicável — daí **e15**. A reação é
igualmente mecânica: quem já paga anti-cheat estende o anti-cheat (**e15.1**), e a extensão
produz falso positivo sobre jogador humano com auxílio, porque a distinção entre "auxiliado" e
"automatizado" não é observável de fora — daí a bifurcação de população em **e15.1.1**. **e15.2**
é a via cooperativa: licenciar em vez de bloquear; tem confiança baixa porque exige que o estúdio
veja valor onde hoje vê risco. **e16** é o efeito central para o público deste mapa, e o mecanismo
é: se o agente aprende no mundo publicado, então as decisões de progressão, densidade de evento e
variedade de situação — que hoje se julgam por diversão — passam a ter um segundo critério,
cobertura. **e16.2** vem da literatura de currículo automático: fechar o laço entre desempenho e
geração de ambiente é técnica conhecida, e a novidade é ela sair do treino de agente e entrar no
produto para humano, com a consequência autoral de **e16.2.1**. **e17** é economia pura: hora de
agente contra hora de pessoa. **e18** é o ramo desagradável: a mesma capacidade que opera jogo
opera supervisório industrial legado, e **e18.1** transforma o que está desenhado na tela em
superfície de ataque — um tipo de vulnerabilidade que não existe no modelo de ameaça atual.

*Prazos deste ramo:* e15 em 2029 usa a classe do modelo de linguagem, e é o efeito mais próximo
do presente — SIMA 2 já faz isso, o que falta é escala. e17 em 2031 depende do custo de
inferência por hora de jogo, que ninguém publicou; é por isso que ele foi rebaixado na seção 7.
e16.1 em 2034 usa a classe do motor de jogo (ferramenta de autoria muda devagar porque muda o
hábito de quem a usa).

### 5.3 Cobertura STEEP e quem perde

- **Social** — e11.2 (o trabalhador que treina o substituto), e11.1.1 (o gesto de um grupo virando
  padrão), e9.2.1 (forma humana como aceitação), e12.2 (lugares desigualmente servidos).
- **Tecnológico** — e1, e4, e5.1.1, e13, e13.1, e14.1.
- **Econômico** — e3, e6, e7, e11, e12, e13.2, e17.2.
- **Político e regulatório** — e2, e7.1.1, e14.1.1, e18.1.1, e13.1.1.
- **Ecológico** — **fica quase vazio, e registro isso em vez de forçar.** O único efeito com
  conteúdo ecológico é **e5**: gerar mundo consome energia por hora de rollout, e o freio
  econômico é também um freio material. O que não consegui sustentar com fonte aberta, e por isso
  não virou efeito: a pegada de material da frota — atuador, ímã de terra rara, célula de
  bateria. É uma lacuna real deste mapa, não uma escolha de recorte.

**Quem perde, nominalmente:** a equipe de conteúdo de simulador (e3); o fabricante de corpo que
não tem dado (e6, e6.2.1); o laboratório sem cluster (e1.2.1); o teleoperador (e11.2); o espaço
que se recusa a ser capturado (e12.2); o jogador humano marcado como agente por falso positivo
(e15.1); o comprador que recebeu menos do que foi prometido (e9.1); o setor que precisa de frota
própria por sensibilidade de ambiente e fica com tecnologia pior (e10.1.1).

### 5.4 Cruzamentos

**Convergência 1 — a verificação migra de quem tem a ideia para quem tem a infraestrutura.**
Dois ramos de raízes diferentes chegam ao mesmo lugar: **e1.2.1** (R1: sem cluster não se replica
experimento, porque o mundo virou pesos) e **e14.1.1** (R3: a avaliação que vale é a física, em
galpão com robô de terceiro). Vindos de premissas opostas — um do excesso de dado sintético,
outro da desconfiança dele — ambos retiram da bancada individual a capacidade de verificar. É o
achado mais relevante deste mapa para uma universidade brasileira, e está desenvolvido na seção 9.

**Convergência 2 — o mundo deixa de ser cenário e vira instrumento de medida.** **e3.1** (R1: o
level designer se divide entre experiência e distribuição) e **e16** (R4: projetar mundo é
projetar currículo) chegam ao mesmo efeito por caminhos independentes: um pela economia da
produção de simulador, outro pela presença do agente no mundo publicado. Convergência
independente é o sinal mais forte que uma roda produz, e este é o efeito que este mapa
recomendaria acompanhar de perto.

**Convergência 3 — o ambiente físico vira propriedade intelectual.** **e4.1.1** (R1: a captura do
supermercado é o dado que treina o robô do supermercado) e **e12** (R3: quem controla espaço
cobra pela captura). O mesmo objeto — a planta de um lugar movimentado — aparece como ativo em
dois ramos que não se falam.

**Retroalimentação negativa.** **e13.1** enfraquece a própria R1: o modelo de mundo que gera dado
degrada o modelo de mundo da geração seguinte, e quanto mais bem-sucedida a raiz, mais rápido o
ciclo se fecha. É o único laço deste mapa em que o sucesso da disrupção produz o seu limite.

**Retroalimentação positiva.** **e10** reforça R2: cada robô em operação produz dado que melhora
a política que vende o robô seguinte. Isso concentra: quem vendeu primeiro fica melhor mais
rápido, e o segundo colocado não alcança com engenharia. É a mesma dinâmica de **e6.2.1**.

**Contradição 1, não resolvida.** **e13.2** diz que o dado real encarece relativamente e o
sintético domina; **e5** diz que gerar mundo é caro e o freio é a conta de computação. Os dois não
podem valer com a mesma força. O que decide é uma razão observável: **preço da GPU-hora de
geração de mundo dividido pelo preço da hora de teleoperação** (hoje US$ 80–150 no caso humanoide
multissensor). Se a razão cair, vence e13.2; se subir, vence e5 e o pipeline híbrido de e5.1.1.
Deixo as duas no mapa e registro o indicador.

**Contradição 2, não resolvida.** **e9** diz que a corporificação trava no contato fino e a frota
fica em tarefa simples; **e15** e **e16** dizem que a generalização voa. Os dois estão bem
sustentados e se referem a coisas diferentes — um à atuação, outro à representação. O que decide
é onde está o gargalo: se em representar o mundo, resolve-se com modelo e em cinco anos; se em
atuar sobre ele, resolve-se com hardware e em trinta. Nenhuma fonte aberta nesta rodada responde
isso, e é a pergunta que eu levaria para a aula.

### 5.5 A regra de parada

Parei na terceira ordem em todos os ramos, e em vários parei antes por falta de **troca de ator
ou de mecanismo**. Três casos, para registro: sob **e12.2** o filho natural seria "cidades passam
a regular robô em calçada" — mas isso já acontece hoje (São Francisco restringiu área, Toronto
proíbe desde 2021, Chicago proibiu em duas áreas), então não é efeito futuro, é contexto; sob
**e17.2** o filho seria "mais jogos são lançados", que é o pai adiante e não outra ordem; sob
**e8.2** o filho seria "empresas protegem seu vocabulário", mesmo ator e mesmo mecanismo. Os três
foram cortados e estão na seção 12.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**SF1 — o corpo entrando no raciocínio, e não no filtro.** O `ROSClaw`, levantado pela turma,
descreve-se como conectando o raciocínio do modelo a capacidades reais de robô "mantendo
consciência do corpo físico do agente". A diferença entre tratar restrição física como filtro
depois da decisão e tratá-la como parte da decisão é grande e quase invisível hoje.
*O que mudaria:* se a restrição do corpo entra no raciocínio, o mesmo modelo deixa de precisar de
uma camada de segurança por corpo, e e6.2 (camada de compatibilidade) fica desnecessário.
*Sinal observável:* um VLA de produção cuja saída inclua explicitamente margem articular ou limite
de torque como parte da cadeia de raciocínio, e não como saturação aplicada depois.

**SF2 — o teatro político da robotização produzido por quem a vende.** Em 08/09/2026, cerca de 30
robôs — humanoides e quadrúpedes — marcharam diante do ministério de assuntos digitais da Polônia
pedindo regulação da IA antes que ela custe empregos. A apuração local mostrou que as máquinas
foram construídas pela Delta Robots, empresa ligada ao organizador. O ministro compareceu e
depois anunciou uma comissão nacional de IA.
*O que mudaria:* se a demanda por regulação passa a ser encenada pelo próprio setor, a regulação
que sai é a que o setor tolera, e efeitos como e2 e e7.1.1 chegam mais cedo e mais fracos.
*Sinal observável:* uma segunda manifestação do gênero, em outro país, **não** patrocinada por
fabricante.

**SF3 — mundo gerado com mais de um agente dentro.** Há trabalho de 2026 sobre modelos de mundo
interativos multijogador. Hoje o mundo gerado é de um ocupante.
*O que mudaria:* mundo gerado multiocupante é a condição para que e15.1.1 (servidor para agentes)
e e16.2 (dificuldade em laço fechado) saiam do papel, e é também o ponto em que este tema encosta
no tema 7.
*Sinal observável:* uma sessão gerada com mais de uma hora de duração, dois ou mais participantes
e memória persistente entre sessões.

**SF4 — som no modelo de mundo.** O Cosmos 3 gera som ambiente junto com vídeo e ação. Isso é
tratado como detalhe de completude e pode não ser.
*O que mudaria:* contato produz som antes de produzir erro visível; um modelo de mundo com áudio
físico abre a possibilidade de detectar contato por som, que é barato e não precisa de sensor
tátil — o que atenua e9, o freio mais forte do mapa.
*Sinal observável:* um benchmark de manipulação em que a política usa áudio como entrada e o
ganho medido seja atribuído a ele.

**SF5 — o país com duas curvas.** Brasil: 18 robôs por 10.000 na indústria, 350 no automotivo,
45.000 drones agrícolas autorizados, cana mais de 95% mecanizada.
*O que mudaria:* se a IA física chegar ao Brasil pelo agro, os efeitos deste mapa aparecem aqui
numa ordem diferente da global — primeiro campo aberto, depois galpão, e a indústria geral por
último ou nunca.
*Sinal observável:* a primeira compra de frota de corpos generalistas por um operador logístico ou
por uma usina brasileira, com valor divulgado.

**SF6 — a razão entre GPU-hora e hora de teleoperação.** Já explicado na contradição 1. É o
indicador mais barato de acompanhar e o que arbitra o ramo econômico inteiro.
*Sinal observável:* o primeiro anúncio, por um laboratório grande, de que reduziu coleta física
por decisão de custo — e não por ter atingido saturação de dado.

### 6.2 Wildcards

**W1 — um acidente cuja causa esteja no simulador, e que se consiga provar.**
*Mecanismo:* um modelo de mundo com viés sistemático de omissão — nunca gera uma combinação
específica, por exemplo piso molhado com aquele coeficiente sob aquela iluminação — treina uma
política com margem errada para aquele caso. Como a política é a mesma em toda a frota, a falha
aparece **simultaneamente e do mesmo jeito** em máquinas de vários lugares. A investigação não
encontra defeito no robô, e a causa está no que o mundo nunca mostrou.
*Por que é improvável:* exige que alguém consiga reconstruir o que o modelo de mundo
sistematicamente não gerou — e hoje não existe método aceito para isso (é a lacuna que o
levantamento de arXiv 2606.01164 aponta como falta de benchmark).
*O que faria com o mapa:* cria a categoria jurídica "defeito de mundo", antecipa e1.1, e2 e e1.1.1
em cerca de uma década, e torna e2.1.1 (simulador regulado como aviônica) provável em vez de
marginal. Inverteria a leitura de R1: o mundo gerado deixaria de ser economia e viraria passivo.
*Sinal precoce:* a primeira ação judicial em que se peça, em fase de produção de provas, o
checkpoint do modelo de mundo usado no treino.

**W2 — recall simultâneo de frota por atualização de política.**
*Mecanismo:* e7 levado ao limite. Uma atualização degrada o comportamento de milhares de máquinas
ao mesmo tempo — algo que máquina mecânica nunca fez, porque defeito de fabricação é gradual e
defeito de software é instantâneo.
*Por que é improvável hoje:* a frota é pequena (cerca de 60.000 unidades projetadas para 2026) e
está concentrada em ambiente controlado.
*O que faria com o mapa:* torna e7.1.1 (congelamento de capacidade) quase certo e reverte e7 —
comprar robô volta a ser comprar máquina, com versão fixa e homologada, e o modelo de assinatura
morre no nascedouro.
*Sinal precoce:* o primeiro rollback de política publicado por um fabricante, com nota técnica.

**W3 — extração de cena privada a partir de um modelo de mundo vazado.**
*Mecanismo:* modelos generativos memorizam. Se a captura real2sim de ambientes privados — loja,
casa, hospital — entra no treino, e os pesos vazam, alguém demonstra que é possível recuperar o
interior de um lugar específico a partir do modelo.
*Por que é improvável:* exige memorização recuperável em escala de cena 3D, e não só de imagem.
*O que faria com o mapa:* mata e4 e e12 na forma em que estão escritos. A captura de espaço
privado passaria a ser tratada como dado pessoal, e a etapa de captura na venda de robô (e4.1)
viraria passivo jurídico em vez de argumento comercial.
*Sinal precoce:* o primeiro artigo demonstrando extração de cena de treino a partir de um modelo
de mundo, mesmo em condição de laboratório.

**W4 — o corpo humano deixa de ser a referência.**
*Mecanismo:* se o mundo é gerado e a política transfere entre corpos, dá para otimizar corpo e
política juntos, dentro do simulador, sem fabricar nada. A morfologia vencedora numa tarefa real
sai de busca automatizada e não se parece com nada que um projetista teria desenhado.
*Por que é improvável:* fabricar continua lento e caro, e a busca só vale se o resultado puder ser
construído.
*O que faria com o mapa:* inverte e9.2 e e9.2.1. A forma humana deixaria de ser o padrão de
aceitação e passaria a ser a exceção cara; e o desenho de corpo — hoje território de engenharia —
viraria disciplina de projeto de interação, com a pergunta "que forma uma pessoa aceita ao lado
dela" separada de "que forma executa a tarefa".
*Sinal precoce:* o primeiro robô comercial cuja morfologia seja declaradamente resultado de busca
automatizada, e não de projeto.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria aplicada ao mapa já escrito, e as alterações abaixo foram feitas
**no bloco da seção 5** — o que está lá é o resultado, não o rascunho.

### 7.1 Pré-mortem — é 2046 e este mapa se mostrou errado

**Razão 1 (a mais provável): o gargalo não era representação, era atuação.** Mão e pele
confiáveis em contato fino não chegaram. Em 2046 existe frota grande de máquina que carrega,
vigia, transporta e dirige, e quase nada que manipula objeto irregular fora de célula controlada.
R2 e R3 viram nota de rodapé: se ninguém manipula, ninguém precisa de milhões de demonstrações de
manipulação. *Aponta para:* e9 já está no mapa como freio, com sinal forte; o que fiz foi rebaixar
os efeitos que assumem manipulação difundida — ver o registro.

**Razão 2: o modelo de mundo gerativo virou pré-visualização, não substituto.** Ele nunca ficou
verificável o bastante para treinar coisa que toca gente, e ocupou o lugar que o *previz* ocupa no
cinema: insumo caro na frente do processo, substituído por simulação escrita na hora de decidir.
R1 cai para contexto e leva junto e1, e2 e e1.2. *Aponta para:* e5.1.1 (pipeline híbrido) é a
apólice deste mapa contra esta razão, e por isso ele está lá.

**Razão 3: a economia nunca fechou fora de quatro países.** Corpo a preço de carro competindo com
trabalho humano barato não fecha conta em país de renda média. A difusão fica presa em logística
de grande porte no Norte e o mapa inteiro descreve um nicho rico. *Aponta para:* toda a nota sobre
o Brasil, e os efeitos com prazo anterior a 2040 que assumem frota ampla.

### 7.2 Extrapolação linear

Três efeitos eram "mais do mesmo, maior" e precisaram de mecanismo de não-linearidade ou de
rebaixamento:

- **e11** (fábrica de dado de teleoperação) é literalmente o que aconteceu com anotação de imagem.
  Ganha não-linearidade apenas por **e11.2.1** — licenciamento de gesto —, que muda o tipo do
  contrato, não o tamanho. Mantive e11 com confiança alta porque o sinal é forte e presente, mas
  registro que ele não é um achado: é a extrapolação mais óbvia do mapa.
- **e17.2** (estúdio pequeno ganha volume de teste) é a mesma frase que se disse da nuvem, do
  motor de jogo gratuito e da IA generativa. Rebaixado.
- **e12** (espaço vira fonte de renda) repete o que aconteceu com dado de navegação em mapa.
  Mantido, mas com prazo empurrado.

### 7.3 Velocidade de adoção — confronto com a classe de referência

Quatro efeitos exigiam adoção mais rápida do que qualquer caso comparável:

- **e4** tinha confiança alta apoiada em sinal forte; o sinal é **acadêmico** (RoboGSim, SplatSim,
  RL-GSBridge), não comercial. Nenhum operador de armazém trocou o pipeline. Rebaixado.
- **e17** assumia que agente sai mais barato que playtester **sem que o custo de inferência por
  hora de jogo tenha sido publicado por ninguém**. Rebaixado.
- **e14.1.1** (arena física pública) usava a classe do MLPerf (2018 → referência de compra em
  ~2023, cinco anos). Mas MLPerf é software: sobe-se um contêiner. Arena física exige galpão,
  robôs, seguro e pessoal. Prazo empurrado.
- **e11.2.1** (participação por gesto) usava a classe do acordo de voz e imagem de atores (três
  anos). Gesto não tem a identificabilidade da voz — é muito mais difícil provar autoria. Prazo
  multiplicado por quatro na escrita, e mantido em 2040.

### 7.4 E se a raiz não acontecer?

- **Sem R1** (o mundo continua sendo escrito): sobram R2, R3 e R4 praticamente intactos. A
  separação corpo/cérebro não depende de o mundo ser gerado, e o agente em jogo também não. Perdem-
  se e1 a e5 e seus descendentes — 5 de 18 efeitos de primeira ordem. **O mapa sobrevive.**
- **Sem R2** (a política não transfere entre corpos): R1 e R4 seguem, R3 encolhe pela metade —
  continua havendo coleta, mas por fabricante e sem mercado. **O mapa sobrevive, menor.**
- **Sem R3** (dado deixa de ser gargalo, porque o sintético bastou): R1 fica mais forte, não mais
  fraco. Cai o ramo inteiro de e11 a e14. **O mapa sobrevive e muda de sinal.**
- **Sem R4** (agente generalista não sai do laboratório): cai o ramo mais relevante para o público
  deste mapa — e16 e e17 são o que liga este tema a quem projeta mídia. **O mapa sobrevive, mas
  fica sendo um mapa de robótica industrial, e o endereçamento do briefing se perde.**

Conclusão do teste: **não há raiz disfarçada em quatro.** As quatro removidas isoladamente deixam
mapa de pé, o que é o resultado que se queria. A dependência mais forte é R3→R2 (sem dado, a
política não transfere), e ela está explícita.

### 7.5 Suposições escondidas

1. **Que o modelo aberto continua aberto.** O Cosmos 3 é aberto porque a NVIDIA vende GPU, não
   modelo. Se o valor migrar para o modelo, o incentivo inverte. Esta é a premissa mais frágil do
   mapa e sustenta boa parte de R1.
2. **Que computação continua barateando por unidade de trabalho útil.** Se não, e5 domina e o
   ramo de R1 murcha.
3. **Que a cadeia de atuador, ímã de terra rara e célula de bateria continua funcionando e
   barateando.** É premissa geopolítica, não técnica, e não há fonte aberta nesta rodada que a
   sustente. Vira wildcard implícito.
4. **Que as plataformas continuam permitindo.** e15 e e17 assumem que jogo aceita agente. Uma
   proibição contratual ampla mata os dois.
5. **Que não ocorre um evento que tire robô de espaço público por uma geração.** O incidente de
   Shaanxi mostra que o material para isso existe; o que não existe ainda é a escala.
6. **Que energia é barata.** Assumido em todo lugar, declarado em nenhum — até aqui.

### 7.6 Viés do autor

**e16** — "o projeto de mundo vira desenho de currículo" — está neste mapa porque é bonito para
quem dá aula de mídia e interação, casa exatamente com a pergunta de segunda ordem que a
disciplina formulou, e é o tipo de frase que funciona bem numa roda de discussão. A evidência é de
laboratório (currículo automático e geração adaptativa de ambiente), não de estúdio: nenhuma
ferramenta de autoria comercial mostra cobertura hoje. O efeito ficou, com sinal médio e confiança
média, mas o leitor deve saber que ele entrou por afinidade antes de entrar por evidência.

Viés secundário: escolhi quatro raízes em que **três** são sobre software e **uma** é sobre
economia do trabalho. Um autor com outra formação teria posto a cadeia de suprimentos física como
raiz — e o mapa dele envelheceria melhor se a razão 3 do pré-mortem se confirmar.

### 7.7 Calibração

Depois das alterações: primeira ordem com 7 altas, 11 médias e nenhuma baixa; segunda ordem com
nenhuma alta, 21 médias e 9 baixas; terceira ordem com nenhuma alta, 6 médias e 16 baixas. A
distribuição cai com a ordem, como tem de cair. A primeira ordem sem nenhuma confiança baixa é
defensável aqui porque quatro dos sete efeitos de confiança alta (e9, e11, e13, e15) descrevem
coisa que **já está acontecendo** e cujo prazo é de generalização, não de invenção.

### 7.8 Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| e4 | confianca: alta | confianca: media | o sinal forte é acadêmico (RoboGSim, SplatSim, RL-GSBridge), não comercial; nenhum operador trocou o pipeline |
| e17 | confianca: alta | confianca: media | o custo de inferência por hora de jogo não foi publicado por ninguém, e o efeito inteiro é uma comparação de custo |
| e14.1.1 | prazo: 2036 · confianca: media | prazo: 2039 · confianca: baixa | classe MLPerf (5 anos) vale para software; arena física exige galpão, robô, seguro e pessoal |
| e9.1 | confianca: media | confianca: baixa | litígio de publicidade depende de jurisdição e de um comprador disposto, e não há caso análogo em robótica |
| e17.2 | confianca: media | confianca: baixa | extrapolação linear: a mesma frase já foi dita da nuvem, do motor gratuito e da IA generativa |
| e12 | prazo: 2031 | prazo: 2033 | exige que o operador de espaço saiba que tem um ativo; a descoberta vem depois da primeira compra, não antes |
| e6 | prazo: 2031 | prazo: 2033 | a separação hardware/sistema no PC levou cerca de dez anos a partir do clone; aqui o corpo ainda não é clonável |
| e1 | prazo: 2028 | prazo: 2030 | o primeiro prazo saiu por simetria, sem classe de referência; refeito contra a adoção do ROS |
| — | efeito "reguladores criam categoria jurídica para agentes corporificados" | **removido** | genérico proibido: serve a qualquer tema. Substituído pelos específicos e2 (Regulamento UE 2023/1230) e e7.1.1 |
| — | efeito "surge a profissão de treinador de robô" | **removido** | genérico proibido, sem ator nem mecanismo. O conteúdo útil sobreviveu em e14 (curadoria de distribuição) |
| — | efeito "o trabalho físico desaparece" | **removido** | extrapolação sem mecanismo; a densidade robótica global levou sessenta anos para chegar a 162 por 10.000 |
| e3.1.1 | "escolas de áudio e design reorganizam o currículo" | reescrito como "o portfólio de um designer de mundo passa a incluir cobertura como número" | a formulação original é o genérico proibido; a nova tem sujeito, métrica e mecanismo |

**Cota cumprida:** R1 teve e4 rebaixado e e3.1.1 reescrito; R2 teve e6 empurrado e e9.1
rebaixado; R3 teve e12 empurrado e e14.1.1 rebaixado e empurrado; R4 teve e17 e e17.2 rebaixados.
Três efeitos foram removidos por inteiro e estão na seção 12. A bateria derrubou coisa.

## 8. O que a máquina errou

Sou eu a máquina. O que fiz de errado nesta rodada, com o motivo da desconfiança em cada caso:

1. **Número que quase entrou sem fonte aberta: "20 trilhões de tokens".** O resumo automático da
   primeira busca afirmava que o Cosmos 3 foi treinado em 20 trilhões de tokens multimodais e em
   "quase um bilhão de imagens, 400 milhões de vídeos". Ao abrir o comunicado da NVIDIA, o texto
   fala em "bilhões de amostras" e **não repete nenhum desses números**. Eles podem estar no
   relatório técnico, que não abri por inteiro. Deixei no documento apenas o que o comunicado
   aberto sustenta. O sinal de desconfiança foi a redondeza: "20 trilhões" e "400 milhões" são
   números de manchete.

2. **Três totais incompatíveis para a mesma grandeza.** Para embarque de humanoide no primeiro
   semestre de 2026 recebi "mais de 22.000" (Counterpoint), "19.100" (Smart Analytics Global) e
   "até 30.000 no ano" (Forbes). A página da Counterpoint **não abriu o corpo do texto** e a da
   Forbes não foi aberta. Usei 19.100 porque é o único número que veio com quebra por fabricante,
   e porque consegui abrir duas páginas independentes com ele — o relatório da SAG e a cobertura
   da Humanoids Daily — cujos valores batem unidade a unidade. Os três provavelmente contam coisas diferentes — provavelmente
   inclusão ou não de unidades de pesquisa, educação e apresentação. Não sei qual está certo, e
   quem usar este mapa deve saber disso.

3. **Afirmação regulatória que eu ia fazer com fonte fechada.** Escrevi, numa versão anterior da
   seção 4, que o Regulamento (UE) 2023/1230 "responsabiliza quem treinou o robô". Isso veio de
   resumo de busca sobre páginas da Pilz e do EUR-Lex que **não abriram** (403 e corpo vazio).
   Refiz a afirmação contra a página da EU-OSHA, que abriu, e ela sustenta apenas duas coisas: a
   data de aplicação (20/01/2027) e a intenção declarada de cobrir máquina móvel autônoma e
   módulos de IA que asseguram função de segurança. Tudo o que o documento diz sobre o regulamento
   está dentro desses limites. Pilz e EUR-Lex **não entram** na seção 11.

4. **Atribuição indevida de uma ideia minha a um artigo.** Ao escrever e8.1 — "o erro de
   ambiguidade vira erro físico" —, a primeira redação apresentava a formulação como sendo do
   artigo *Robots Need More than VLA and World Models*. Não é: o artigo fala em raciocínio
   espacial, compreensão temporal e quantificação de incerteza. A frase é minha inferência.
   Corrigida.

5. **Prazo posto por simetria, não por referência.** e1 saiu com 2028 na primeira passagem porque
   os vizinhos estavam em 2028–2030 e ficava bonito. Só depois procurei uma classe de referência e
   o ano mudou para 2030. Suspeito que mais de um prazo deste mapa tenha nascido assim e tenha
   sobrevivido sem que eu percebesse; a seção 5.1 é a tentativa de tornar isso auditável, não a
   garantia de que não aconteceu.

6. **Um efeito plausível cujo mecanismo é fraco, e que mesmo assim ficou.** e18.1.1 — normas
   passarem a exigir confirmação física fora da tela — é bonito e reverte trinta anos de história
   de interface, mas o mecanismo que eu escrevi ("o agente enxerga a tela, logo a tela vira
   superfície de ataque") não explica por que a resposta seria *botão físico* e não *autenticação
   de operador*. Deixei com confiança baixa e prazo distante, e registro aqui que ele é o efeito
   mais fraco do mapa.

7. **Uma lacuna que eu deveria ter fechado e não fechei.** Não encontrei, em nenhuma fonte aberta,
   número sobre pegada material da frota — atuador, terra rara, bateria. Em vez de estimar,
   declarei o eixo ecológico como quase vazio na seção 5.3. É honesto, mas é uma falha de
   cobertura, não uma escolha de recorte.

## 9. Três cenários para 2046

### Provável — o híbrido morno

É 2046. O modelo de mundo gerativo não substituiu o simulador escrito: convive com ele. Quem
treina robô gera variação em volume e valida num simulador determinístico, porque é o único que o
certificador aceita — o Regulamento (UE) 2023/1230, que entrou em vigor dezenove anos atrás,
criou a expectativa e o mercado seguiu. Pesos de mundo são distribuídos como hoje se distribuem
descrições de corpo, e um pacote de tarefa ocupa centenas de gigabytes; laboratório sem cluster
não replica experimento de robótica e, na prática, não faz robótica de fronteira. A política se
separou do corpo, mas menos do que o entusiasmo de 2026 previa: existem duas ou três plataformas
de cérebro e um mercado de corpos dividido entre abertos e travados, e a briga de padrão foi
ganha por quem tinha mais dado. A frota é grande em carregar, transportar, vigiar e dirigir, e
pequena em manipular: a banda de destreza fina melhorou, não fechou. A coleta de demonstração é
uma indústria de trabalho estabelecida, deslocada para onde a hora é barata, com cláusula própria
em acordo coletivo em pelo menos dois países. Jogos são publicados com modo de instrumentação
porque dá receita, e ferramentas de autoria mostram cobertura ao lado de ritmo. No Brasil, a IA
física entrou pelo agro e pelo automotivo; a indústria geral segue com densidade baixa, e o país
compra cérebro e vende dado — captura de ambiente, demonstração de gesto, teste de campo.
*Sinal precoce de que estamos aqui:* o primeiro grande operador logístico que anunciar frota
multiplataforma, com corpos de dois fabricantes rodando a mesma política.

### Desejável — o mundo auditável

É 2046. A diferença em relação ao cenário provável é uma só e vale tudo: **existe método aceito
para perguntar a um modelo de mundo o que ele sistematicamente não gera.** Ele surgiu no começo
dos anos 2030, da pressão combinada de seguradoras e de um caso judicial em que se pediu o
checkpoint do treino, e virou norma técnica no fim daquela década. Com isso, o mundo gerado pôde
ser certificado sem precisar de um simulador escrito ao lado, e o custo de entrar na robótica
caiu em vez de subir: publicar um modelo de mundo passou a exigir publicar o mapa das suas
omissões, e isso é barato para quem é honesto. A arena pública de avaliação física existe, é
financiada por consórcio, e passar nela é pré-requisito de compra pública em três continentes —
o que tirou da tabela de benchmark a decisão sobre o que é bom. Existe participação por gesto
licenciado em acordo coletivo, com registro de proveniência no episódio, e um teleoperador
consegue saber em que modelos o seu trabalho está. As ferramentas de autoria mostram cobertura
para quem projeta para pessoas, e isso melhorou tutoriais e primeiros usos — o efeito lateral mais
simpático deste mapa. No Brasil, o agro exportou dado de campo aberto com contrato e o CIn
consegue treinar política nova sem cluster próprio, porque avaliar virou serviço público.
*O que teria de ser feito para chegar aqui:* alguém precisa construir, entre 2027 e 2032, a
medida de plausibilidade física e de omissão sistemática que o levantamento de 2026 diz não
existir. É uma agenda de pesquisa concreta, não um desejo.
*Sinal precoce:* a publicação da primeira métrica de omissão sistemática em modelo de mundo, com
código e adesão de mais de um laboratório.

### Indesejável — a fábrica de plausibilidade

É 2046. Modelos de mundo foram treinados, por várias gerações, majoritariamente em saída de
modelos de mundo, porque dado real era caro e sintético era grátis. O resultado é física
convincente e sistematicamente errada nos cantos: tudo parece certo e algumas coisas específicas
nunca acontecem. Como a mesma política roda em toda a frota, os erros não são aleatórios — são
iguais. Houve um acidente em cadeia, no começo dos anos 2040, em que máquinas de fabricantes
diferentes falharam do mesmo jeito porque compartilhavam a linhagem de mundo; a investigação
levou quatro anos e não conseguiu reconstruir a omissão. A resposta regulatória foi retirar robô
de espaço com público e restringir operação a ambiente fechado e instrumentado, o que devolveu a
robótica à célula de onde ela tinha saído. A concentração piorou: três empresas têm o dado real,
todo mundo tem o sintético, e a distância não se fecha. A coleta física virou trabalho mal pago e
invisível, sem proveniência e sem participação, com o gesto de um grupo pequeno de pessoas
embutido em máquinas do mundo inteiro. Jogos fecharam para agentes, porque a associação entre
agente e acidente ficou politicamente cara, e o ramo inteiro de e15 a e17 nunca aconteceu.
*Sinal precoce dele:* a primeira medição publicada de degradação por realimentação em modelo de
mundo — e a reação do campo a ela. Se for tratada como problema de engenharia a resolver na
próxima versão, e não como limite estrutural, estamos entrando aqui.

## 10. O experimento

**Nome:** Fábrica de divergência.

**O que é.** Um banco pequeno — uma câmera, um objeto, um atuador simples ou um braço de mesa de
baixo custo — e três mundos do mesmo objeto: (1) o real; (2) um simulador escrito à mão, com
física rígida, no Genesis, MuJoCo ou MetaDrive; (3) um mundo gerado, a partir de captura por
Gaussian Splatting continuada por um modelo de mundo aberto. Treina-se uma política deliberadamente
simples nos mundos 2 e 3 e mede-se, no mundo 1, **onde ela quebra** — e, mais importante, atribui-se
cada quebra ao mundo, e não ao agente: que situação o mundo de treino nunca produziu?

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta de primeira ordem que a
disciplina formulou: *se o robô aprende em mundo simulado, o que acontece quando o mundo real
diverge — e quem responde pelo erro?* O experimento não a responde em geral; ele produz, numa
mesa, o objeto que hoje não existe: **um catálogo de omissões de um mundo de treino**. É a versão
de bancada da lacuna que a seção 3.2 identificou e que o cenário desejável da seção 9 exige.

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa modelo de mundo gerativo
aberto (Cosmos 3, versão pequena) e reconstrução por 3DGS. Não dá com tecnologia madura porque o
ponto inteiro do experimento é a **diferença entre um mundo com especificação e um mundo sem**.
Com dois simuladores escritos, a comparação é de parâmetro — algo que já se faz há vinte anos com
randomização de domínio e que não ensina nada novo. A pergunta só existe quando um dos lados não
tem especificação para ler.

**O que a turma faz quando testar isso em sala.** Em uma aula:

1. Cada grupo recebe o mesmo objeto físico e propõe **três situações** que acha que o mundo gerado
   nunca vai produzir. Escreve antes de ver — é aposta registrada, não observação.
2. Roda-se a política nas três situações, no real. Conta-se quantas apostas acertaram.
3. Compara-se a taxa de acerto humano com uma varredura automática, para responder se pessoa
   consegue prever omissão de modelo de mundo melhor que busca cega.
4. Cada grupo escreve **uma frase** de laudo: "esta falha é do agente" ou "esta falha é do mundo",
   com a evidência. A discussão da aula é sobre as frases em que os grupos discordaram.

**O que seria um resultado que me faria mudar de ideia.** Duas coisas, em direções opostas:

- **Se as apostas humanas acertarem muito** — digamos, mais de metade das omissões previstas antes
  de rodar —, então auditar mundo gerado é tarefa humana barata, e2 (auditoria como serviço)
  perde razão de ser como indústria, e o wildcard W1 fica improvável. O mapa perderia o ramo mais
  caro de R1.
- **Se a política treinada no mundo gerado for indistinguível, no real, da treinada no simulador
  escrito** — e as falhas forem as mesmas nos dois —, então a "perda de especificação" que sustenta
  R1 inteira não tem consequência prática, e R1 deve ser rebaixada de disrupção-raiz a melhoria
  sustentadora. Este é o resultado que derrubaria a maior parte deste mapa, e é por isso que o
  experimento vale a pena.

**Custo e viabilidade.** É o experimento mais barato que se pode montar para este tema: o corpo
pode ser um braço de mesa de baixo custo ou mesmo um carrinho, e a métrica é contagem de falha,
não desempenho. O que consome tempo é a captura e o treino, e ambos cabem em GPU de laboratório se
a política for pequena — o que, aqui, é requisito e não limitação.

## 11. Fontes

Dezesseis fontes abertas e lidas em 22/09/2026. Fonte que não abriu não está aqui — as quatro que
falharam estão registradas na seção 12.3.

1. **NVIDIA — NVIDIA Launches Cosmos 3, the Open Frontier Foundation Model for Physical AI**
   (31/05/2026).
   https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai
   *Sustenta:* a existência de um modelo de mundo aberto que gera vídeo, som e ação; a arquitetura
   *mixture-of-transformers*; a coalizão de parceiros; a disponibilidade em Hugging Face e GitHub.
   É a pré-condição técnica de R1.
   *Confiabilidade:* comunicado do próprio fabricante. Vale para o que ele lançou e o que
   disponibilizou; não vale para as alegações de desempenho, que são autodeclaradas.

2. **Google DeepMind — Gemini Robotics 2 brings whole body intelligence to robots** (30/07/2026).
   https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/
   *Sustenta:* o número que define R2 — menos de 200 exemplos e poucas horas para adaptar a um
   corpo novo; o mesmo checkpoint em Apptronik Apollo 2 e Franka Duo; e o teto de e9, com a banda
   de 32% a 92% em tarefa multidedo.
   *Confiabilidade:* blog de laboratório, com números publicados pelo próprio. Os números que
   **limitam** a tecnologia (a banda multidedo) são mais confiáveis que os que a elogiam, pela
   direção do incentivo.

3. **Google DeepMind — Genie**.
   https://deepmind.google/models/genie/
   *Sustenta:* 720p, 20–24 fps, consistência de vários minutos, memória de cerca de um minuto,
   disponibilidade do Project Genie via Google Labs, e o uso declarado para treinar veículo
   autônomo e avaliar agentes.
   *Confiabilidade:* página de produto. Os números técnicos são verificáveis por quem assina; a
   lista de usos é aspiracional.

4. **SIMA Team, Google DeepMind — SIMA 2: A Generalist Embodied Agent for Virtual Worlds**
   (arXiv:2512.04797, 04/12/2025).
   https://arxiv.org/abs/2512.04797
   *Sustenta:* R4 inteira — agente que opera vários mundos 3D pela interface humana, generaliza
   para ambiente não visto e aprende habilidade nova gerando tarefa e recompensa.
   *Confiabilidade:* artigo de 65 autores, não revisado por pares. A alegação de generalização é a
   mais forte e a mais difícil de replicar por terceiros, porque depende de acesso aos jogos.

5. **Black, Brown, Driess, Finn, Hausman, Levine e outros (Physical Intelligence) — π₀: A
   Vision-Language-Action Flow Model for General Robot Control** (arXiv:2410.24164, 31/10/2024;
   revisão de 08/01/2026).
   https://arxiv.org/abs/2410.24164
   *Sustenta:* a linhagem técnica de R2 — *flow matching* sobre VLM pré-treinado, política única
   para braço único, braço duplo e manipulador móvel.
   *Confiabilidade:* artigo muito citado, com autores de referência no campo; a arquitetura foi
   reproduzida por terceiros, o que é o critério que importa.

6. **Karcini, Mehrban, Nguyen, Schwager, Ajoudani, Cadena, Peters, Hutter, Bou-Ammar — Robots Need
   More than VLA and World Models** (arXiv:2606.06556, 08/06/2026).
   https://arxiv.org/pdf/2606.06556
   *Sustenta:* a seção 3.2 — modelos de mundo falham em fundamentação física, raciocínio de
   contato e transferência sim-para-real; VLAs falham em raciocínio espacial, temporal e adaptação
   ao corpo; nenhum dos dois trata recompensa nem incerteza.
   *Confiabilidade:* artigo de posição, não experimental, mas assinado por um conjunto de
   laboratórios que competem entre si — o que dá peso à concordância.

7. **Liu, Ni, Liu, Peng, Wang, Shen, Pollefeys, Tomizuka, Tewari, Kristensson — Towards
   Interactive Video World Modeling: Frontiers, Challenges, Benchmarks, and Future Trends**
   (arXiv:2606.01164, 02/06/2026).
   https://arxiv.org/pdf/2606.01164
   *Sustenta:* a afirmação, central em R1 e no wildcard W1, de que **não existe medida aceita** de
   consistência, coerência temporal e plausibilidade física para modelo de mundo interativo.
   *Confiabilidade:* levantamento, não resultado próprio. Bom para mapear o que falta; não serve
   para afirmar o que funciona.

8. **Li, Li, Zhang, Zhang, Jia, Wang, Fan, Tseng, Wang — RoboGSim: A Real2Sim2Real Robotic
   Gaussian Splatting Simulator** (arXiv:2411.11839, 18/11/2024; revisto 03/08/2025).
   https://arxiv.org/abs/2411.11839
   *Sustenta:* e4 — reconstrução por 3DGS como pipeline de simulação, com desempenho *zero-shot*
   no robô real comparável ao de dado real.
   *Confiabilidade:* resultado de laboratório. É exatamente por ser acadêmico e não comercial que
   rebaixei e4 na seção 7.

9. **Humanoids Daily — Global Humanoid Shipments Surge 272% in 1H 2026 as AGIBOT Overtakes
   Unitree** (11/08/2026), noticiando o relatório da Smart Analytics Global.
   https://www.humanoidsdaily.com/news/global-humanoid-shipments-surge-272-in-1h-2026-as-agibot-overtakes-unitree
   *Sustenta:* todos os números de frota da seção 3.4 — 19.100 unidades no 1S/2026, +272%, AGIBOT
   8.400 (44%, +562%), Unitree 5.900 (31%, +170%), Galbot 900, UBTECH 700, Leju 600, projeção de
   ~60.000 unidades e ~US$ 1,6 bilhão, mais de 70% em uso industrial e comercial — e a
   concentração: >97% do embarque em fabricantes chineses, >85% da demanda na China.
   *Confiabilidade:* veículo especializado noticiando relatório de consultoria cuja metodologia
   não é pública. Abri esta e a fonte primária (17) e os números batem entre as duas. Conflita com
   outras duas estimativas de mercado — ver seção 8, item 2.

10. **OECD.AI — Humanoid Robot Injures Child During Dance Performance in Shaanxi** (23/03/2026).
    https://oecd.ai/en/incidents/2026-03-23-4a38
    *Sustenta:* a seção 3.2 e a suposição escondida nº 5 — o robô não detectou a criança e
    continuou a rotina.
    *Confiabilidade:* registro de incidente com curadoria institucional, baseado em relato de
    imprensa. Bom para a existência do fato, fraco para a causa técnica.

11. **DataX Power — Humanoid Robot Data Collection Costs: 2026 Real Benchmarks by Program Type**
    (2026).
    https://www.dataxpower.com/blog/humanoid-robot-data-collection-cost
    *Sustenta:* toda a economia de R3 — US$ 15–150/hora por tipo de programa, 1 a 12
    demonstrações/hora, US$ 50–150 por demonstração útil, programas de US$ 110 mil a US$ 750 mil.
    *Confiabilidade:* fornecedor do próprio serviço. Há incentivo para inflar custo; tratei os
    números como ordem de grandeza e não como preço.

12. **Label Studio — Where robot training data comes from in 2026** (09/07/2026).
    https://labelstud.io/learning-center/where-robot-training-data-comes-from-in-2026/
    *Sustenta:* Open X-Embodiment com mais de 1 milhão de trajetórias em 22 plataformas; 4,66
    milhões de robôs industriais em operação; US$ 2,48 bilhões no mercado de dado sintético; e a
    afirmação de que simulação é complemento e não substituto, com degradação proporcional ao
    contato físico da tarefa.
    *Confiabilidade:* material de empresa de ferramenta de anotação, com incentivo alinhado à tese
    de que dado real importa. Os números de terceiros (Open X-Embodiment, IFR) são checáveis.

13. **International Federation of Robotics — Global Robot Density in Factories Doubled in Seven
    Years** (20/11/2024).
    https://ifr.org/ifr-press-releases/news/global-robot-density-in-factories-doubled-in-seven-years
    *Sustenta:* a classe de referência mais importante deste mapa — 162 robôs por 10.000
    empregados em 2023, contra 74 em 2016; Coreia do Sul 1.012, Singapura 770, China 470.
    *Confiabilidade:* a melhor série do campo, com metodologia estável há décadas. Não cobre
    humanoide nem serviço.

14. **Robotics Center of Silicon Valley — State of Robotics Brazil 2026** (março/2026, 38 páginas).
    https://www.roboticscenter.ai/state-of-robotics-brazil-2026
    *Sustenta:* a nota sobre o Brasil — 18 robôs por 10.000 na indústria, 350 no automotivo, R$ 8,2
    bilhões de mercado, ~45.000 drones agrícolas autorizados pela ANAC, cana >95% mecanizada.
    *Confiabilidade:* relatório de consultoria; a média global que ele usa (151) difere da do IFR
    (162), o que indica recorte metodológico diferente. Usei os números brasileiros e mantive a
    média global do IFR, declarando as duas.

15. **EU-OSHA — Regulation 2023/1230/EU on machinery**.
    https://osha.europa.eu/en/legislation/directive/regulation-20231230eu-machinery
    *Sustenta:* a data de 20/01/2027 e a intenção declarada de cobrir máquina móvel autônoma, IoT
    e módulos de IA com aprendizagem que assegurem funções de segurança. É a base de e2 e e7.1.1,
    e nada além disso.
    *Confiabilidade:* agência da União Europeia. Página de resumo; o texto integral do regulamento
    não abriu nesta rodada, e por isso nenhuma afirmação sobre anexos ou obrigações específicas
    entrou no documento.

16. **Euronews — Robot revolt? Polish company stages protest demanding stricter AI rules**
    (08/09/2026).
    https://www.euronews.com/next/2026/09/08/robot-revolt-polish-company-stages-protest-demanding-stricter-ai-rules
    *Sustenta:* o sinal fraco SF2 — cerca de 30 robôs diante do ministério polonês, organizados por
    iniciativa ligada a um fabricante, com presença do ministro e anúncio posterior de comissão
    nacional.
    *Confiabilidade:* jornalismo de agência europeia, e o próprio texto expõe o conflito de
    interesse do organizador — o que aumenta, não diminui, a confiança na descrição.

17. **Smart Analytics Global — Global Humanoid Robot Shipments Surged 272% YoY to 19.1K Units in
    1H 2026; AGIBOT Overtook Unitree** (agosto/2026). Fonte primária dos números da fonte 9.
    https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/
    *Sustenta:* os mesmos números da fonte 9, conferidos um a um contra ela.
    *Confiabilidade:* consultoria de mercado, metodologia não publicada.
    *Aviso de verificação:* este endereço é o único do documento que o `verificar.py --links`
    acusa como "não responde". Ele responde **200 a um `curl` com User-Agent de navegador
    completo** e recusa o User-Agent mínimo que o verificador envia — é bloqueio na borda, não
    link morto. A fonte permanece aqui, com a URL, por **TMI-0120**; a checagem cruzada com
    `curl` está na seção 12.3 e a saída do verificador está colada sem edição na seção 12.8.

## 12. Anexo — o levantamento bruto

### 12.1 O briefing recebido, na íntegra

```text
modo: MAPA
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: grec
zona_de_interesse: Simulação e mundos
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global (com nota sobre o Brasil)
descartado: ["o que já é comum em produto de massa"]
raiz_suspeita: null  (nenhuma — descobrir)
vies: neutro
busca_web: true
profundidade: três ordens
modo_de_entrada: a partir de uma inovação/tema, não de um setor
falseador declarado: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que
  a tecnologia não rompe nada (só melhora o que existe)
ideias óbvias a excluir: as que servem para qualquer tema
```

Rodada não interativa: não houve entrevista, e por isso as lacunas do briefing foram assumidas e
declaradas na seção 2 ("Premissas assumidas nesta rodada"), sem rebaixamento de confiança — o
briefing veio completo nos sete itens que a entrevista cobriria.

### 12.2 As buscas feitas

Catorze buscas, em português e inglês, entre 10h58 e 11h30 de 22/09/2026:

1. `NVIDIA Cosmos world foundation model 2026 physical AI release` — deu no lançamento do Cosmos 3.
2. `vision-language-action model robotics 2026 pi0 Physical Intelligence generalist policy` — deu
   na linhagem π₀/π₀.₅/π₀.₇ e num conjunto grande de VLAs de 2026 (ABot-M0, InternVLA-M1,
   NORA-1.5, Xiaomi-robotics-0, Cosmos Policy). Só π₀ foi aberto.
3. `humanoid robot deployment numbers 2026 Figure Unitree shipments units` — deu nos três totais
   incompatíveis descritos na seção 8.
4. `Gemini Robotics 2026 DeepMind on-device embodied reasoning` — deu no Gemini Robotics 2 e ER 2.
5. `SIMA 2 DeepMind generalist agent 3D virtual worlds 2026` — deu no artigo do SIMA 2.
6. `"world model" robotics criticism 2026 sim-to-real gap limitations benchmark fails` — deu na
   crítica de arXiv 2606.06556, no levantamento 2606.00133, na definição/roadmap 2607.06401 e na
   menção ao SimplerEnv como benchmark de correlação sim-real.
7. `robot teleoperation data collection workers salary 2026 "robot data" scarcity bottleneck` —
   deu na economia de R3 e na afirmação (não aberta) de que todo o dado aberto somado dava ~5.000
   horas em set/2025.
8. `EU Machinery Regulation 2023/1230 2027 robôs autônomos IA responsabilidade acidente` — deu na
   data de 20/01/2027 e nas páginas da Pilz, EUR-Lex e EU-OSHA.
9. `Brasil robótica 2026 robôs humanoides indústria adoção IA física startup` — deu no relatório
   brasileiro, na estimativa do Bank of America (90 mil em 2026, 1,2 milhão até 2030, não aberta)
   e no caso do humanoide Tobias, da empresa brasileira Bolha.
10. `Genie 3 interactive world model real-time generated environment 2026 game engine` — deu no
    Genie 3, no Project Genie e no uso pela Waymo de uma variante para simular casos extremos.
11. `humanoid robot safety incident accident 2026 injury investigation standard ISO 25785` — deu
    nos incidentes de Shaanxi, Chengdu e do World Robot Conference, e na ISO 25785-1 em redação.
12. `Isaac Lab Genesis MuJoCo github stars 2026 robot simulation adoption open source` — deu em
    Genesis com 27 mil estrelas, mjlab com 2,8 mil, e no ecossistema Isaac Lab.
13. `automatic curriculum generation environment design agent training 2026 procedural world
    model "environment generation"` — deu na literatura de currículo automático e geração
    adaptativa de ambiente que sustenta e16.2.
14. `robot liability insurance 2026 autonomous machine simulation defect who is responsible` — deu
    quase inteiramente em veículo autônomo, não em robô. Ver 12.4.

Mais duas de apoio: `3D Gaussian splatting robot training real2sim 2026` (RoboGSim, SplatSim,
RL-GSBridge, GASE) e `"world model" interactive video entertainment 2026 playable generated
worlds` (AlayaWorld, Matrix-Game 3.0, Decart Oasis, modelos multijogador).

### 12.3 As páginas que não abriram — e que por isso não sustentam nada

- **Counterpoint Research**, embarques de humanoide no 1S/2026: a página carregou só a manchete e
  a autoria; o corpo não veio. O número "mais de 22.000" que circula vem dela e **não** está neste
  documento.
- **Pilz — Machinery Regulation 2027**: HTTP 403.
- **EUR-Lex — Regulamento (UE) 2023/1230, versão portuguesa**: a página abriu com corpo vazio.
- **Objectways — Why the Sim2Real Gap Is Still Open in 2026**: HTTP 403.

**Caso à parte — abriu, responde ao `curl`, e mesmo assim o verificador reprova.** A página da
Smart Analytics Global (fonte 17) responde **200 a um `curl` com User-Agent de navegador
completo** e **403 ao User-Agent mínimo (`Mozilla/5.0`) que o `verificar.py` envia via `urllib`**.
É bloqueio na borda — o domínio está atrás de gestão de bots —, não link quebrado. Medido nos dois
modos em 22/09/2026, com a saída literal:

```
curl -o /dev/null -s -w "%{http_code}\n" -L --max-time 25 -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36" "https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/"
```

```
200
```

```
curl -o /dev/null -s -w "%{http_code}\n" -L --max-time 25 -A "Mozilla/5.0" "https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/"
```

```
403
```

**A decisão que governa este caso é a `TMI-0120`**, registrada em 22/09/2026 pela rodada irmã
`giordano-h2041` × tema 09 — mesmo tema, mesmo domínio bloqueado, um horizonte antes: fonte
primária que responde 200 ao `curl` de navegador **permanece na seção 11 com a URL**, a saída do
verificador é colada como saiu, e a checagem cruzada vai para o anexo. Ela descarta
explicitamente, para este caso, a saída prevista em `TMI-0115` (trocar pela cobertura que responde
200), porque `TMI-0115` trata do caso vizinho e diferente — site que recusa o `curl` também.

**Registro de uma correção nesta rodada, para quem for auditar.** Numa primeira passagem eu havia
aplicado `TMI-0115`: tirei a URL da SAG da seção 11, promovi a cobertura da Humanoids Daily a
carregadora dos números e fechei com `RESULTADO: ok`. Estava errado — o `curl` de navegador
responde 200, então quem reprova é só o `urllib` do verificador, e é o caso de `TMI-0120`, que é
a decisão mais recente (critério de `TMI-0067`). Desfeito. A cobertura da Humanoids Daily **ficou**
como fonte 9, porque ela foi aberta de fato e traz dois números que a página da SAG não trouxe na
leitura: os >97% de concentração de oferta e os >85% de concentração de demanda. Listar as duas é
o que `TMI-0115` já admitia quando a contagem de fontes não está apertada. O argumento de que
  "motores de corpo rígido resolvem atrito e escorregamento por atalhos escolhidos para velocidade"
  veio do resumo de busca, é bom, e **não** foi usado no documento por não ter sido aberto.

Não abertas por decisão, não por falha: Forbes (duas matérias sobre embarque), a lista
`awesome-physical-ai`, os artigos arXiv 2606.00133, 2607.06401, 2607.05352, 2604.08995,
2607.06291, 2602.06366 e 2604.18292, a página do Gemini Robotics ER 1.6 e a do Wikipedia sobre
Gemini Robotics. Nenhum deles sustenta afirmação no documento; aparecem aqui porque outra rodada
pode querer começar por eles.

### 12.4 As buscas que não deram em nada

- **Responsabilidade civil por robô treinado em simulação.** A busca 14 devolveu, em nove de nove
  resultados, material sobre veículo autônomo — responsabilidade do fabricante sob *product
  liability*, seguro de robotáxi, ausência de arcabouço federal nos EUA. **Nada** sobre robô de
  manipulação, e **nada** sobre o caso que interessa a este mapa: falha atribuível ao ambiente de
  treino. Isto é, em si, um achado: a categoria "defeito de mundo" não existe em lugar nenhum, o
  que é a razão de W1 ser wildcard e não sinal fraco.
- **Pegada material da frota.** Nenhuma busca produtiva sobre atuador, terra rara e bateria em
  escala de frota robótica. Registrado como lacuna na seção 5.3.
- **Política de plataformas de jogo sobre agente.** Não encontrei nenhuma loja ou plataforma grande
  com posição publicada sobre agente de IA jogando. É a razão de e15.1 ter prazo 2031 e não 2028.
- **Número de adoção de modelo de mundo em produção industrial.** Nenhuma fonte com "quantas
  empresas usam modelo de mundo gerativo em treino de robô". É por isso que R1 está entre demo
  pública e produto de nicho, e não adiante.

### 12.5 Os efeitos cortados, e por quê

**Removidos por serem genéricos proibidos** (servem a qualquer tema; apareceram e foram cortados
na seção 7.8):

- *"Reguladores criam uma categoria jurídica nova para agentes corporificados."* Sem ator, sem
  jurisdição, sem mecanismo. Substituído por e2 (Regulamento UE 2023/1230, data certa) e e7.1.1
  (congelamento de capacidade).
- *"Surge a profissão de treinador de robô."* O conteúdo útil — que a competência escassa vira
  medir distribuição de dado — sobreviveu em e14.
- *"Mudanças no mercado de trabalho físico."* Sem sujeito. O que sobrou de específico está em e11,
  e11.1 e e11.2.
- *"Cursos de design reorganizam o currículo."* Reescrito como e3.1.1, com sujeito (o portfólio do
  designer), métrica (cobertura) e mecanismo (quem contrata é o time de robótica).

**Removidos pela regra de parada** (filho é o pai adiante, sem troca de ator nem de mecanismo):

- Sob e12.2: *"cidades passam a regular robô em calçada"* — não é futuro, é presente. São
  Francisco restringiu área, Toronto proíbe desde 2021, Chicago proibiu duas áreas, Glendale
  estuda proibição temporária, e há petição em Chicago com cerca de 4.400 assinaturas. Virou
  contexto, não efeito.
- Sob e17.2: *"mais jogos são lançados por ano"*.
- Sob e8.2: *"empresas passam a proteger o próprio vocabulário de comando"*.

**Removidos pelo teste da causa solta** (aconteceriam igual sem esta raiz):

- *"O custo de computação concentra o campo em poucas empresas."* Verdadeiro, e vale igual para
  modelo de linguagem, biologia computacional e clima. Não deriva desta raiz.
- *"A interface de voz substitui a tela."* Aconteceria por assistentes, sem robô nenhum.
- *"Cresce a demanda por explicabilidade."* Serve a qualquer tema de IA.

**Candidatos a raiz recusados** (registro completo, com o critério aplicado):

| Candidato | Onde está na difusão | Veredito |
|---|---|---|
| ROS / ROS 2 | maioria na pesquisa desde ~2015 | recusado — contexto (seção 3) |
| SLAM, MoveIt 2, OMPL, pinocchio | maioria | recusado — contexto |
| Simulação física em GPU (MuJoCo, Isaac Sim, PhysX, newton) | maioria no campo desde ~2023 | recusado — pré-condição de R1; volta como e5.1.1 |
| Robô humanoide como forma | produto de nicho | recusado — é forma, não ruptura |
| Veículo autônomo | nicho geográfico após 19 anos | recusado — promovido a classe de referência |
| Teleoperação | maioria | recusado como raiz; promovido a insumo de R3 |
| Drone (MAVLink, enxame) | maioria no agro brasileiro | recusado — contexto; entra na nota sobre o Brasil |
| MONAI / imagem médica | maioria na área | recusado — fora do escopo de agente corporificado |

### 12.6 Caminhos abandonados

- **Um ramo sobre cidade e ambiente construído.** Comecei a derivar "a cidade passa a ser
  desenhada para os dois" — pessoas e máquinas —, que é a pergunta de terceira ordem do enunciado
  da disciplina. Abandonei como ramo próprio porque nenhum efeito que escrevi passava no teste da
  causa solta: calçada tátil, rampa, sinalização legível por máquina e faixa de carga aconteceriam
  igualmente por acessibilidade e por logística, sem IA física nenhuma. O que sobreviveu, com
  mecanismo específico, é e12.2 (lugares desigualmente servidos porque se recusaram a ser
  capturados) e e4.2 (entrega de versão capturável junto do projeto arquitetônico).
- **Um ramo sobre enxame.** O wildcard trazido pela turma — resgate em incêndio por enxame de
  drones — é bom, mas os efeitos que derivei dele eram sobre coordenação multiagente, que é o tema
  6 desta disciplina, não este. Cortado por fronteira, não por qualidade.
- **Um ramo sobre corpo protético e vestível.** A mesma política que controla um robô controla uma
  órtese. É um ramo inteiro e legítimo, com público próprio, e não cabe no recorte "quem projeta
  mídia e interação" sem virar outro mapa. Fica registrado como sugestão de tema.
- **Uma quinta raiz, descartada:** *"o modelo de mundo vira o formato de distribuição de
  conteúdo"* — em vez de enviar vídeo ou cena, envia-se o modelo que os gera. É sedutor e é o tema
  12 desta disciplina, não este. Ficou fora por fronteira.

### 12.7 Números que circulam e que este mapa não usa

Registrados para quem for checar depois. Nenhum deles sustenta afirmação no documento:

- "20 trilhões de tokens multimodais, quase 1 bilhão de imagens, 400 milhões de vídeos" para o
  treino do Cosmos 3 — do resumo de busca; o comunicado aberto diz "bilhões de amostras".
- "Mais de 22.000 humanoides no 1S/2026" (Counterpoint) e "até 30.000 em 2026" (Forbes).
- "90 mil humanoides entregues em 2026 e 1,2 milhão até 2030" (Bank of America Global Research,
  via imprensa brasileira).
- "Todo o dado aberto de robótica somado dava ~5.000 horas de interação em setembro de 2025".
- "Genesis com 27 mil estrelas no GitHub; mjlab com 2,8 mil."
- "Schaeffler planeja implantar até 2.000 humanoides"; "7.000 humanoides vendidos no mundo no ano
  passado" (Forbes Brasil, set/2026) — este último, aliás, é incompatível com os 19.100 de um
  semestre, o que reforça o item 2 da seção 8.

### 12.8 Saída do verificador

Comando executado, na íntegra, e a saída completa colada abaixo:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2046/09-agentes-corporificados-ia-fisica-e-modelos-de-mundo/tendencia-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md --links
```

Saída, completa e sem edição:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 18 (frontmatter diz 18)
efeitos ordem 2: 30 (frontmatter diz 30)
efeitos ordem 3: 22 (frontmatter diz 22)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e2.1.1', 2048), ('e13.1.1', 2047)]
confiança ordem 1: alta 7 · media 11 · baixa 0
confiança ordem 2: alta 0 · media 21 · baixa 9
confiança ordem 3: alta 0 · media 6 · baixa 16
  link não responde: https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/
links da seção 11: 16/17 respondem (frontmatter diz fontes: 17)
RESULTADO: 1 problema(s) — corrija antes de entregar
```

**Leitura dos números, item a item:**

- **18/18 campos e 12/12 títulos** — o documento está no formato da disciplina.
- **4 raízes, 18 · 30 · 22 efeitos** — as contagens do bloco batem com as do frontmatter. Não
  houve ajuste de frontmatter depois da contagem: os números foram conferidos contra o bloco.
- **Zero prazos fora do horizonte em primeira e segunda ordem.** Com horizonte em 2046, isso é
  fácil e não é mérito.
- **Dois prazos de terceira ordem além de 2046, e eu os declaro aqui:** `e2.1.1` (o mundo
  certificado vendido por assinatura, com o simulador regulado como aviônica) em **2048** e
  `e13.1.1` (exigência de lastro real em domínio regulado) em **2047**. Os dois estão **fora da
  janela deste mapa** e não sustentam nada nos cenários da seção 9; ficam no bloco por completude
  do ramo. Quem usar este documento deve tratá-los como continuação, não como previsão para 2046.
- **Calibração: 7 · 11 · 0 na primeira ordem, 0 · 21 · 9 na segunda, 0 · 6 · 16 na terceira.** A
  confiança cai com a ordem, que é a exigência. A ausência de confiança baixa na primeira ordem
  está justificada na seção 7.7 e é o ponto em que eu mais aceitaria contestação.
- **`RESULTADO: 1 problema(s)` — e o problema não é um link quebrado.** O único item reprovado é
  `16/17` no contador de links, por causa do endereço da Smart Analytics Global (fonte 17), que
  responde **200 a um `curl` com User-Agent de navegador** e 403 ao User-Agent mínimo que o
  verificador envia. A checagem cruzada com `curl`, nos dois modos e com a saída literal, está na
  seção 12.3. **Quem auditar esta rodada precisa ler a seção 12.3 antes de concluir que ela
  falhou** — é exatamente a consequência prevista por `TMI-0120`, que é a decisão que governa este
  caso e que foi registrada no mesmo dia, pela rodada irmã do mesmo tema no horizonte 2041.
- **Nenhum outro contador está fora.** Frontmatter, títulos, estrutura da roda, ids, vocabulário
  fechado, prazos e calibração passam todos.
