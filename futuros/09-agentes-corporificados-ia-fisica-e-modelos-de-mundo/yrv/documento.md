---
tema: "Agentes corporificados, IA física e modelos de mundo"
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: yrv
zona_de_interesse: "Simulação e mundos"
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 14
efeitos_ordem_3: 11
tecnologias_citadas: [NVIDIA Cosmos 3, Cosmos Coalition, Isaac GR00T N1, Isaac GR00T Reference Humanoid Robot, Isaac Sim, Isaac Lab, Isaac Teleop, Jetson AGX Thor, Genie 3, Project Genie, SIMA 2, Gemini Robotics 1.5, Gemini Robotics-ER 1.5, pi-zero, pi-0.5, pi-0.7, openpi, Qwen-RobotWorld, Qwen-RobotManip, Qwen-RobotNav, World Labs R2S2R, SceneSmith, RoboDojo, RoboDojo-RealEval, XPolicyLab, WRBench, EgoCS-400K, MuJoCo, Genesis, MetaDrive, AirSim, habitat-sim, habitat-lab, drake, newton, PhysX, ROS 2, MoveIt 2, OMPL, pinocchio, OpenVINS, Lanelet2, MAVLink, RT-Thread, Apollo, MONAI, ROSClaw, Unitree G1, Unitree H2 Plus, Sharpa Wave, ALOHA 2, Apptronik Apollo, Franka, Figure 02, Figure 03, Agility Digit, RoboFab, Tesla Optimus, 1X NEO, Waymo Driver, Solix (Solinftec), Mornine e Argos (AiMoga/Chery), Regulamento (UE) 2023/1230, ISO 25785-1, ISO 10218, RBAC 100 (ANAC), PL 2338/2023]
fontes: 31
confianca: media
experimento: "A banca do mundo errado — a turma se divide em tres papeis (quem descreve o mundo, quem escreve a instrucao e quem executa como corpo, sem improvisar); a instrucao e escrita sobre um mundo descrito no papel, a execucao acontece numa sala que diverge dele em uma unica variavel nao declarada, e mede-se quantas instrucoes sobrevivem, quantos minutos ate a divergencia ser percebida, e a quem a turma atribui a culpa antes e depois de saber qual variavel mudou"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

Pôr um corpo no mundo deixou de ser o problema caro. Isso, sozinho, não é a disrupção — é o
substrato, e já está em produção. A Waymo fazia **500 mil corridas pagas por semana em dez
cidades dos Estados Unidos** em março de 2026, contra 50 mil por semana em maio de 2024, com
pouco mais de **3.000 veículos** declarados à NHTSA. A Figure operou **onze meses** na fábrica da
BMW em Spartanburg, com **mais de 1.250 horas** registradas, **mais de 90.000 peças de chapa**
carregadas e ciclo de 84 segundos. A Agility acumulou **mais de 65.000 horas** de operação em
nove instalações de clientes. ROS, SLAM, planejamento de trajetória e simulação física acelerada
por GPU têm caminho de instalação padrão, preço estável e modos de falha documentados. Pela régua
da disciplina, isso é **maduro**, e este mapa **recusa** tratá-lo como tendência: entra como
substrato na seção 3 e não vira raiz na seção 4.

O que ainda não é rotina — e é onde este mapa aposta — são três deslocamentos que o barateamento
do corpo torna possíveis e que **não são "a mesma coisa mais rápido"**.

**Primeiro: a política deixa de ser escrita para aquele robô naquela estação.** Em **16 de abril
de 2026** a Physical Intelligence publicou o `π0.7`, com 87 coautores, afirmando generalização
*zero-shot* entre corpos — um robô dobrando roupa sem ter visto a tarefa, uma máquina de espresso
operada de saída. Em **25 de setembro de 2025** o Google DeepMind já havia mostrado tarefas
treinadas no ALOHA 2 executando no humanoide Apptronik Apollo e no Franka bi-braço "sem
especializar o modelo para cada novo corpo". A competência que isso torna sem valor não é
programar robô: é a **engenharia de célula** — o ofício de especificar, programar e calibrar a
tarefa para um corpo e um posto, que é o que faz a automação só compensar acima de certo volume.
E a consequência imediata não é fábrica sem gente: é que **demonstrar passa a valer mais do que
programar**.

**Segundo: o ambiente de treino deixa de ser construído e passa a ser gerado.** Em **31 de maio de
2026** a NVIDIA lançou o `Cosmos 3`, aberto, que produz não só texto, imagem, vídeo e som, mas
**trajetórias de ação**; a coalizão anunciada junto inclui `Runway` e `Black Forest Labs` — casas
de mídia gerativa, não de robótica. Em **13 de julho de 2026** o MIT CSAIL e a Toyota Research
Institute publicaram o `SceneSmith`, três agentes que geram cenas 3D de treino, com **mais de
1.300 cenas** e até seis vezes mais objetos por cena que o método anterior. Em **15 de agosto de
2026** a World Labs mostrou um motor real-para-sim-para-real que transforma **uma** demonstração
física em milhares de variações, avaliando políticas com **2.000 execuções simuladas contra 100
reais** por checkpoint. Quem projetava mundo para ser visto passa a projetar mundo para ser
aprendido — e isso muda o que conta como bom mundo.

**Terceiro: o robô entregue é, antes de tudo, um coletor.** O `NEO`, da 1X, é vendido a **US$
20.000** (ou ~US$ 500/mês) para casas nos Estados Unidos ainda em 2026, com o primeiro lote de
10.000 unidades esgotado em cinco dias — e a parte da tarefa que o modelo não faz é executada por
um operador humano remoto, que enxerga e ouve a casa pelo robô. Na China, a `JD.com` planeja
mobilizar **100 mil funcionários e 500 mil trabalhadores externos** em dois anos para gravar dado
corporificado, e uma dona de casa em Suqian recebe **20 yuans (US$ 3) por hora** para filmar as
próprias tarefas domésticas. O que rompe aqui não é a tecnologia: é o **arranjo** — vende-se
presença física agora e autonomia depois, e quem paga pela diferença é o cliente, com o dado do
seu espaço, e o teleoperador, com o próprio tempo.

As três se somam num único deslocamento: **o que se projeta deixa de ser o comportamento e passa a
ser o mundo em que o comportamento é aprendido — e a interface do agente com corpo passa a ser a
instrução e a evidência de que ela foi entendida.** Para quem projeta mídia e interação, isso não
é uma notícia sobre robôs: é a informação de que projetar ambiente, projetar currículo de treino e
projetar interface viraram a mesma atividade, com clientes diferentes.

O contrapeso, dito já aqui para o mapa não soar como propaganda: em **5 de julho de 2026**, o
`RoboDojo` — banca conjunta de 30 e poucos pesquisadores de HKU, Berkeley, Tsinghua, Stanford e
MIT, entre outros — mediu a melhor política generalista em **12,8% de sucesso** em 18 tarefas
reais, contra **100% da teleoperação humana**. Nenhuma frase deste mapa faz sentido sem esse
número ao lado.

## 2. O tema

**O que é.** O objeto deste mapa é **o agente com corpo e o mundo em que ele aprende**. Duas
coisas, e a segunda é a que muda de natureza: durante quinze anos o simulador foi uma ferramenta
de engenharia — um lugar construído à mão, com malha, colisor e cenário, onde se testava o que
seria depois executado. O que aparece agora é o **modelo de mundo**: um modelo que *gera* o
ambiente em vez de renderizá-lo, aceita ação como entrada, prevê o próximo estado e — no caso do
`Cosmos 3` — emite também a trajetória que o corpo deveria seguir ali. O treino deixa de acontecer
num mundo que alguém construiu e passa a acontecer num mundo que a própria máquina inventa.

**O que não é — a fronteira, e por que ela está aqui.** Sem fronteira este mapa incharia até virar
"o futuro da tecnologia", e na terceira ordem eu estaria escrevendo sobre trabalho, cidade, saúde
e regulação ao mesmo tempo. Os três cortes, herdados do bloco da disciplina e declarados:

- **Não é simulação de sociedades.** Multidão de agentes como instrumento de investigação social é
  o tema 6. Aqui o mundo simulado existe para treinar um corpo, não para estudar uma população.
- **Não é captura de realidade.** Reconstruir em 3D um lugar que existe — fotogrametria,
  *splatting*, renderização neural — é o tema 10. Aqui interessa o mundo **gerado**, inclusive o
  que nunca existiu.
- **Não é percepção de vocabulário aberto.** Ver e segmentar qualquer coisa é o tema 11. Aqui a
  percepção entra só como insumo da ação.

E um quarto corte, que é a régua da disciplina aplicada ao próprio tema: **o que já é comum em
produto de massa não entra.** Carro com ADAS, braço industrial, aspirador que mapeia a sala,
drone com retorno automático e ROS inteiro estão fora como tendência — e dentro como substrato.

**Por que isto interessa a quem projeta mídia e interação, e não só a quem faz robô.** Três
razões, todas com evidência datada na seção 3:

1. **O mundo virou insumo.** Um acervo de partidas de `CS2` — 400 mil vídeos em primeira pessoa,
   10 mil horas — foi publicado em **16 de junho de 2026** como conjunto de treino para modelos de
   mundo. Quem faz jogo produz, há vinte anos, exatamente o par que falta à robótica: ação
   sincronizada com estado.
2. **O agente atravessa mundos.** O `SIMA 2`, de **13 de novembro de 2025**, opera em jogos que
   nunca viu e, mais importante, dentro de mundos **gerados pelo `Genie 3`**, cuja geometria e
   cujos objetos não existiam no treino. Se o mesmo agente serve jogo e fábrica, o jogo e a
   fábrica viram o mesmo tipo de lugar para ele — e o desenho de mundo vira, de fato, desenho de
   currículo.
3. **A interface do corpo é linguagem, e o produto é a evidência de entendimento.** O
   `Gemini Robotics-ER 1.5` foi aberto a desenvolvedores pela API em setembro de 2025 e "pensa
   antes de agir", expondo o plano. O problema de projeto que isso cria não é técnico: é de
   interação — quanto do raciocínio mostrar, quando, e como sinalizar intenção antes do movimento
   para alguém que está no caminho.

**O estado do tema na régua de adoção.** O falsificador declarado pelo interessado era: *evidência
de que a adoção já passou da maioria inicial de Rogers, ou de que a tecnologia só melhora o que
existe*. Ele **não** foi encontrado para o objeto deste mapa — e quase foi para o substrato. Os
humanoides estão em punhado de sítios nomeados, com tarefas estreitas; o robotáxi, esse sim, está
atravessando de inovadores para maioria inicial em algumas cidades americanas, e por isso ficou do
lado maduro. A distinção importa: **este mapa é sobre o que ainda não atravessou.**

## 3. Onde isso está hoje

Tudo nesta seção foi aberto por mim em **17 de setembro de 2026**; os endereços estão na seção 11.
O que não consegui abrir está declarado na seção 12 e **não** sustenta nenhuma afirmação. Onde há
divergência entre fontes, ela está dita, não harmonizada.

### 3.1 O substrato maduro — o que está aqui para ser recusado como tendência

**Condução autônoma urbana, nos Estados Unidos.** A Waymo passou de 50 mil corridas pagas por
semana (maio de 2024) a **500 mil por semana em dez cidades** (27 de março de 2026), com **3.067
robotáxis** de quinta geração declarados à NHTSA em dezembro de 2025. Mais decisivo para a régua
do que o volume é o **modo de falha documentado e o procedimento de correção**: em **18 de junho
de 2026** a empresa recolheu voluntariamente cerca de **3.900 veículos** após 13 episódios (seis
em Phoenix em abril, sete em São Francisco em maio) em que o sistema "não reconheceu e passou por
placas de fechamento de rampa, entrando em zonas de obra na via expressa"; a correção é
**atualização de software**, e a operação em via expressa ficou restrita desde 19 de maio
enquanto a correção era desenvolvida. Em **9 de dezembro de 2025** houve outro recall de software
por falhas diante de ônibus escolares — 19 episódios documentados pelo distrito escolar de Austin,
cinco deles depois de a empresa afirmar ter corrigido, com investigação aberta pela NHTSA em
outubro de 2025. Preço estável, falha catalogada, autoridade que recebe o registro, correção que
chega por atualização: isto é **T5 aprovado**. É maduro. Entra aqui como substrato — e volta na
seção 7, porque é o melhor caso histórico de velocidade de adoção que este mapa tem.

**A pilha de robótica clássica.** ROS 2, `MoveIt 2`, `OMPL`, `pinocchio`, `Lanelet2`, `OpenVINS`,
`MAVLink`, `RT-Thread`, `PhysX`, `drake`: instalação padrão, documentação, comunidade, contratação
como habilidade de rotina. **T5 aprovado, maduro.** Aparecem no catálogo da turma — 241 itens só
na varredura de sistemas embarcados e navegação — e é justamente essa densidade que indica
maturidade, não novidade.

**Os simuladores físicos.** `MuJoCo`, `Isaac Sim`, `Isaac Lab`, `habitat-sim`, `habitat-lab`,
`AirSim`, `MetaDrive`, `Genesis`, `newton`. Aqui a régua exige cuidado: como **artefato**, são
maduros — instala-se por gerenciador de pacotes, roda-se em GPU de prateleira, e a escolha nº 1 de
desenvolvimento da turma (`MetaDrive`) é exatamente um simulador leve e bem documentado. Como
**arranjo**, participam da disrupção sem serem a disrupção: o que muda não é existir simulador, é
**quem escreve o conteúdo dele** (§3.3). Esta é a consequência que a Fase 2 obriga a aceitar:
tecnologia madura pode participar de uma disrupção quando o que rompe é o arranjo, não o artefato.

**A densidade industrial, como medida de que robô já é banal onde compensa.** A IFR publicou em
**8 de abril de 2026** a densidade global de **132 robôs por 10.000 trabalhadores da manufatura**
— Europa Ocidental 267, América do Norte 204, Ásia 131, Coreia do Sul 1.220, Estados Unidos 307.
Robô industrial é infraestrutura, não tendência.

### 3.2 A camada que rompe (1) — políticas que atravessam corpos

- **`π0.7`**, Physical Intelligence, **16 de abril de 2026** (revisto em 24/04), 87 coautores,
  entre eles Sergey Levine, Chelsea Finn e Karl Pertsch: modelo generalista "dirigível", com
  condicionamento por contexto diverso — linguagem, metadados de desempenho e imagens de
  submeta —, reivindicando **generalização *zero-shot* entre corpos** e tarefas como operar uma
  máquina de espresso sem treino específico. A linhagem é pública: `π0` teve código aberto em
  fevereiro de 2025, `π0.5` saiu em abril de 2025, e o repositório `openpi` distribui os pesos.
- **`Gemini Robotics 1.5` e `Gemini Robotics-ER 1.5`**, Google DeepMind, **25 de setembro de
  2025**: o primeiro converte visão e instrução em comando motor e "pensa antes de agir"; o
  segundo raciocina sobre o mundo físico, chama ferramentas digitais e planeja. Duas afirmações
  importam para este mapa: tarefas treinadas **só** no ALOHA 2 executam no Apptronik Apollo e no
  Franka bi-braço sem especialização, e o `ER 1.5` foi **aberto a desenvolvedores** pela API do
  Gemini no AI Studio no mesmo dia — o modelo de alto nível virou infraestrutura pública antes de
  o modelo de baixo nível virar.
- **`Qwen-RobotNav`, `Qwen-RobotManip` e `Qwen-RobotWorld`**, Alibaba/Tongyi Lab, **16 de junho de
  2026**: três modelos-base para IA corporificada, com o de manipulação treinado em **mais de
  38.100 horas de dados integralmente abertos**. O que isso sinaliza não é qualidade — não abri
  avaliação independente — e sim **commoditização**: o mesmo movimento que fez modelo de linguagem
  aberto virar piso está acontecendo com política de robô.
- **`Isaac GR00T Reference Humanoid Robot`**, NVIDIA, **31 de maio de 2026**: projeto de
  referência aberto que combina chassi `Unitree H2 Plus` (cerca de 1,83 m e 68 kg, 31 graus de liberdade), mãos
  táteis `Sharpa Wave` (22 graus), `Jetson AGX Thor` e a pilha `Isaac GR00T` — 75 graus de
  liberdade ao todo. Ai2, ETH Zurich, Stanford Robotics Center e o laboratório de robótica
  avançada da UC San Diego adotaram; a venda fica com a Unitree, no fim de 2026. Um **corpo de
  referência aberto** é para a robótica o que a placa de referência foi para o PC: não é a
  inovação, é o que permite que a inovação de outros seja comparável.
- **O preço.** O `Unitree G1` é anunciado pelo próprio fabricante **a partir de US$ 13,5 mil**,
  1,32 m, ~35 kg, 23 juntas (até 43 na versão EDU, a única com desenvolvimento secundário
  liberado). Um corpo de laboratório custa menos que um carro popular.

**O contraponto, na mesma camada.** O `RoboDojo` (**5 de julho de 2026**) montou 42 tarefas em
simulação e 18 no mundo real, com hardware padronizado e um arcabouço único de integração de
políticas. Resultado: **melhor política em 12,8% de sucesso no real** e **8,8% em simulação**,
contra **100% e 76% da teleoperação humana**. E a conclusão que mais interessa a este mapa não é o
número baixo, é o **descasamento**: a ordenação relativa das políticas **muda** entre simulação e
realidade. Quem escolhe política por resultado simulado está escolhendo outra coisa.

### 3.3 A camada que rompe (2) — o mundo como coisa gerada

- **`Cosmos 3`**, NVIDIA, **31 de maio de 2026**: modelo-base aberto de mundo, arquitetura de
  mistura de transformadores, que entende e produz texto, imagem, vídeo, som ambiente **e
  trajetórias de ação com física**. Pode funcionar como modelo de visão-linguagem, como modelo de
  mundo/vídeo ou como espinha de um modelo mundo-ação. `Cosmos 3 Super` e `Nano` saíram disponíveis
  em `build.nvidia.com`, Hugging Face, GitHub e NIM. A empresa afirma reduzir ciclos de treino e
  avaliação "de meses para dias" — alegação de fabricante, sem verificação independente que eu
  tenha aberto. A **Cosmos Coalition** anunciada junto reúne Agile Robots, **Black Forest Labs**,
  Generalist, LTX, **Runway** e Skild AI: metade dela é gente de mídia gerativa.
- **`Genie 3`**, Google DeepMind, **5 de agosto de 2025**: mundos navegáveis em tempo real, 720p,
  24 quadros por segundo, consistentes por alguns minutos, com memória visual de cerca de um
  minuto e permanência de objeto emergente. Os limites são declarados pelos autores: espaço de
  ação restrito, interação entre múltiplos agentes independentes ainda não resolvida, texto
  legível só quando fornecido na descrição, e duração de minutos, não de horas.
- **`Project Genie`**, **29–30 de janeiro de 2026**: o modelo de mundo vira **produto de consumo**
  — assinatura Google AI Ultra de **US$ 250 por mês**, Estados Unidos, maiores de 18, gerações de
  60 segundos a 720p/24fps. A própria cobertura registra o essencial: "`Genie 3` não é um motor de
  jogo". É outra categoria de artefato, vendida ao público antes de estar resolvida.
- **`SIMA 2`**, Google DeepMind, **13 de novembro de 2025**: agente generalista sobre Gemini
  Flash-Lite que segue instrução, conversa, raciocina sobre a meta e **melhora sozinho** — o Gemini
  propõe tarefas e estima recompensa, e o agente aprende com as próprias falhas "independentemente
  de demonstrações humanas". Em mundos gerados pelo `Genie 3`, que não estavam no treino, o agente
  "se orienta, entende a instrução e age em direção à meta". Limites declarados: tarefas longas,
  memória curta por restrição de latência, precisão de controle e compreensão de cena 3D.
- **`SceneSmith`**, MIT CSAIL + Toyota Research Institute, **13 de julho de 2026**: três agentes
  (projetista, crítico, orquestrador) geram cenas internas realistas para treino — **mais de 1.300
  cenas**, até seis vezes mais objetos por cena que o método anterior, mais de 90% de ganho de
  realismo em avaliação com pessoas, e concordância de 99% entre julgamento humano e julgamento do
  modelo de visão-linguagem sobre o desempenho da política. Russ Tedrake, do TRI: "um dos desafios
  que restam tem sido criar conteúdo de simulação suficientemente rico e diverso para capturar a
  complexidade do mundo real".
- **`R2S2R`**, World Labs, **15 de agosto de 2026**: motor real-para-sim-para-real que converte uma
  tarefa física em milhares de variações controladas — luz, posição e número de objetos, ambiente,
  atrito, ângulo de câmera. Modelos de controle operaram **uma hora sem intervenção** em quatro
  plataformas, e a avaliação usou **2.000 execuções simuladas contra 100 reais por checkpoint**,
  com a ordenação dos modelos preservada entre os dois lados. Os autores dizem o que ainda não
  sabem: quanto disso transfere para ambientes complexos e situações pouco controladas.
- **`EgoCS-400K`**, **16 de junho de 2026**: 400 mil vídeos em primeira pessoa, **10 mil horas** de
  partidas profissionais de CS e CS2, mais de mil partidas, 40 mil rodadas, 13 mapas, dez pontos
  de vista por rodada. A justificativa dos autores é a que interessa aqui: modelo de mundo precisa
  de trajetórias de vídeo-ação-linguagem alinhadas no tempo, e o jogo é a ponte barata entre vídeo
  da web (passivo) e dado corporificado real (caro).

**O contraponto, na mesma camada — e é grave.** Em **18 de junho de 2026**, o `WRBench` avaliou
**9.600 vídeos de 23 modelos** e concluiu que os modelos de mundo atuais **não mantêm um estado
persistente**: o sistema trata o mundo observado como um **plano-sequência** e, ao voltar a um
alvo, o retoma no estado em que o abandonou, em vez de fazer o evento avançar enquanto ninguém
olhava. A falha atravessa arquiteturas, escalas e formas de controle. O levantamento acadêmico de
**30 de abril de 2026** sobre modelos de mundo para aprendizado de robô — 18 autores, entre eles
Pieter Abbeel, Jitendra Malik e Jiajun Wu — lista seis desafios abertos e inclui entre eles a
**ausência de protocolo padronizado** para medir consistência entre ação e predição. Em uma frase:
o mundo gerado ainda é **aparência que responde**, não estado que evolui.

### 3.4 A camada que rompe (3) — o corpo entregue, e quem está dentro dele

- **`NEO`, da 1X**, **8 de maio de 2026**: humanoide doméstico de 1,65 m e menos de 30 kg, a
  partir de **US$ 20.000** ou cerca de **US$ 500 por mês**, com primeiras entregas a clientes
  americanos até o fim de 2026; o primeiro lote de **10.000 unidades esgotou em cinco dias**, e a
  meta declarada é 100 mil unidades em 2027. A inteligência roda em `Jetson Thor` e o treino usa
  `Isaac`. A parte que este mapa considera decisiva está na cobertura de **21 de novembro de
  2025**: o caminho é **teleoperação** — um especialista remoto dirige o robô dentro da casa e, em
  princípio, vê e ouve o ambiente pelas câmeras e microfones durante as janelas agendadas. A
  recomendação do próprio veículo especializado é reposicionar o produto: não um robô doméstico
  autônomo, mas **uma plataforma que permite a pessoas trabalharem remotamente**.
- **O trabalho que ensina.** A reportagem da *Rest of World* de **3 de junho de 2026** mostra a
  outra ponta: a `JD.com` planeja mobilizar **100 mil funcionários e 500 mil trabalhadores
  externos** em dois anos, com meta de **10 milhões de horas** de dado de treino em Suqian;
  trabalhadores filmam tarefas domésticas por seis horas diárias a **20 yuans (US$ 3) por hora**;
  câmeras na cabeça em centros de cuidado de idosos e fazendas, sensores de pulso em fábricas. Uma
  entrevistada resume o arranjo melhor do que qualquer análise: *"ninguém tinha me pago para
  cozinhar e lavar roupa antes"*. E o contraponto vem de dentro, com Alan Fern, da Oregon State:
  *"não é uma ideia maluca. É só muito pouco comprovada."*
- **O que está de fato implantado.** Levantamento de **19 de julho de 2026** que separa dado
  reportado por empresa de número que circula sem fonte: Figure com 11 meses na BMW, +1.250 horas,
  +90.000 peças, acima de 99% de acerto por turno; Agility com +65.000 horas em nove instalações
  (GXO, Schaeffler, Toyota do Canadá, Mercado Libre) e a fábrica RoboFab dimensionada para até
  10.000 unidades por ano; e **Tesla Optimus sem contagem de produção publicada**, com Elon Musk
  dizendo na teleconferência de **28 de janeiro de 2026** que as unidades não estavam em uso nas
  fábricas "de forma material". Os números que circulam — 50 mil Optimus, 10 mil Figure — não vêm
  das empresas.
- **A régua econômica, dita por quem vende automação.** Reportagem de **21 de julho de 2026**:
  cerca de **US$ 300 bilhões** aportados no ecossistema de humanoides, pilotos industriais com
  eficácia entre **20% e 50%**, e a China com **54% dos robôs industriais do mundo** (~2 milhões
  de unidades). A frase de Jeff Burnstein, da associação americana de automação, é a que resume o
  ponto: o cliente não quer humanoide, quer solução — se o robô existente for melhor, ótimo.

### 3.5 As regras que já estão escritas, e as que faltam

- **União Europeia — Regulamento (UE) 2023/1230**, de 14 de junho de 2023, **aplicável a partir de
  20 de janeiro de 2027**: substitui a Diretiva de Máquinas de 2006 e passa a cobrir
  explicitamente **máquinas móveis autônomas** e **módulos de IA que asseguram funções de
  segurança**. A data está dentro do horizonte deste mapa e antes de qualquer efeito de segunda
  ordem aqui previsto.
- **ISO 25785-1**, norma **em desenvolvimento** para robôs móveis industriais de estabilidade
  ativamente controlada — bípedes, quadrúpedes, equilibrados sobre rodas, com ou sem braços. A
  liderança da delegação americana reúne Boston Dynamics, Agility Robotics e a A3. O
  reconhecimento que a torna relevante: a ISO 10218 **não cobre** humanoide, e o problema é
  estrutural — "o valor central de um humanoide é sair e tocar coisas no mundo; se o seu princípio
  de segurança é nunca tocar em nada, fica muito difícil ir tocar as coisas". **Não consegui abrir
  a ficha oficial da ISO** (§12); o que está aqui vem de cobertura secundária e está marcado.
- **Brasil — PL 2338/2023**, "dispõe sobre o uso da Inteligência Artificial", aprovado pelo
  Plenário do Senado em **dezembro de 2024** e **remetido à Câmara dos Deputados em 17 de março de
  2025**, onde segue. A ficha da matéria registra 26/12/2024 como data de aprovação; parte da
  cobertura registra 10/12/2024 — divergência não resolvida, declarada na §8.
- **Brasil — ANAC, Resolução nº 806, de 15 de junho de 2026** (publicada em 16/06): trata das
  aeronaves não tripuladas, dispensa de cadastro até 250 gramas, limite de 120 metros, e opera
  sobre as categorias **VLOS** e **EVLOS** — voo dentro da linha de visada, direta ou por
  observadores. O que a imprensa especializada descreve como nova estrutura de categorias (Aberta,
  Específica, Certificada, com BVLOS na Específica) **não** foi verificado por mim na fonte
  primária e não sustenta afirmação deste mapa.

### 3.6 A nota sobre o Brasil

O recorte é global, com uma nota. Ela cabe em quatro fatos e uma assimetria.

**Densidade.** O levantamento do *State of Robotics Brazil* de março de 2026 registra **18 robôs
por 10.000 trabalhadores da manufatura** no Brasil, com o setor automotivo em 350 — contra a média
global de **132** medida pela IFR em abril de 2026. (A fonte brasileira compara com 151; os dois
números são de anos diferentes, e a divergência está declarada na §8.) Seja qual for a base, a
ordem de grandeza é a mesma: **o Brasil automatiza cerca de sete vezes menos que a média
mundial.**

**Onde o Brasil tem corpo autônomo de verdade: no campo.** A Solinftec operava **50 robôs `Solix`**
em fevereiro de 2025 — 40 em grãos, 10 em cana — com meta de **700 robôs** até a safra 2025/26,
R$ 1,3 bilhão captados, e resultados medidos de **65% menos herbicida** em cana e **mais de 90%**
em soja. É o caso brasileiro que mais se aproxima do objeto deste mapa: corpo autônomo, percepção
embarcada, decisão local, escala de frota.

**Onde o corpo chega como mídia, não como produção.** A divisão de robótica da Chery anunciou em
**5 de agosto de 2026** a chegada ao Brasil, no último trimestre de 2026, da humanoide `Mornine`
(1,68 m, ~70 kg) e do cão `Argos`. A função declarada da Mornine é **receber clientes em
concessionária**, apresentar os modelos e servir bebida. O primeiro humanoide que a maior parte do
público brasileiro vai encontrar não estará numa fábrica: estará numa loja, cumprindo papel de
peça de comunicação.

**A assimetria que organiza a nota.** O Brasil não fabrica o corpo, não treina a política
generalista e não gera o mundo — mas **consome os três** e opera o ambiente em que eles vão agir.
Isso põe o país no lugar em que a decisão sobre o que o robô faz é tomada fora, e o trabalho que
sobra é o de adaptação: norma, ambiente, língua, cultura. Não é pouco, e é exatamente o efeito
`e7.2` da roda.

## 4. As disrupções-raiz

Três, conforme o recorte fechado. Cada uma com os três campos obrigatórios: **o que rompe** (a
competência que deixa de valer), **por que agora e não há cinco anos** (com sinal datado) e **o
que ainda falta acontecer** (a precondição nomeada). Onde a Fase 2 classificou como *disruptivo* e
não apenas *emergente*, estão nomeados o incumbente e a porta de entrada — baixa do mercado ou
mercado novo.

### Raiz 1 — A política de ação deixa de ser escrita para um corpo e passa a ser treinada uma vez e transferida

**O que rompe.** A **engenharia de célula**: o ofício de especificar, programar, calibrar e manter
a tarefa para aquele robô, naquele posto, com aquelas peças. É esse trabalho que faz a automação
ter um piso de volume — abaixo de certa repetição, programar não paga. Junto com ele cai o
pressuposto que organiza toda a indústria de integração: o de que **o comportamento é um produto
de engenharia local**. Se uma política treinada em braços de mesa executa num humanoide e num
braço industrial "sem especialização", o ativo deixa de ser o projeto da célula e passa a ser o
**conjunto de demonstrações** e o modelo que as absorveu.

**Por que agora e não há cinco anos.** Quatro sinais datados, nenhum deles "a IA avançou":
`Gemini Robotics 1.5` (25/09/2025) executando em três corpos diferentes sem especialização e com o
modelo de raciocínio liberado por API no mesmo dia; `π0.7` (16/04/2026) reivindicando
generalização *zero-shot* entre corpos com 87 coautores e pesos abertos na linhagem `openpi`;
`Qwen-Robot` (16/06/2026) publicando um conjunto de modelos-base com 38.100 horas de dados
abertos, isto é, **commoditizando** o que até ontem era ativo estratégico; e o
`Isaac GR00T Reference Humanoid Robot` (31/05/2026), corpo de referência aberto adotado por quatro
laboratórios de ponta e vendido pela Unitree. Há cinco anos, cada um destes quatro itens era um
projeto de doutorado por laboratório.

**O que ainda falta acontecer.** **Confiabilidade medida em banca independente.** O `RoboDojo`
(05/07/2026) põe o número na mesa: 12,8% no real contra 100% da teleoperação humana, com
reordenação das políticas entre simulação e realidade. Não falta "mais modelo": falta o dado de
interação e o protocolo de avaliação que permitam a um comprador escolher sem apostar. Enquanto
essa precondição não cair, a raiz 1 alimenta **piloto**, não frota.

**Classificação.** Emergente **e** disruptiva. Incumbente nomeado: o **integrador de automação**
(e a área de engenharia de processo que o contrata). Porta de entrada: **mercado novo** — tarefas
que nunca foram automatizadas porque não havia volume que pagasse a programação (galpão pequeno,
agro de média escala, serviço, casa) — e, secundariamente, **baixa do mercado**, onde a exigência
de precisão é menor que a da linha de montagem. Three Horizons: **H2+**.

### Raiz 2 — O ambiente de treino deixa de ser construído e passa a ser gerado, e a avaliação vai junto

**O que rompe.** O **ofício de autorar o cenário**: modelagem 3D, montagem de cena, roteiro de
caso de teste, engenharia de simulação — e, com ele, o pressuposto de que o custo de testar cresce
com o número de situações testadas. Rompe também algo menos óbvio e mais importante para quem
projeta mídia: o **critério de qualidade de um mundo**. Um mundo deixa de ser bom por ser
verossímil ao olho e passa a ser bom por **produzir transferência** — por ensinar algo que
sobrevive ao contato com o real. São critérios diferentes, e quem domina o primeiro não domina
automaticamente o segundo.

**Por que agora e não há cinco anos.** `Genie 3` (05/08/2025) tornou mundo navegável em tempo real
a partir de texto, com permanência de objeto emergente; `Project Genie` (30/01/2026) o vendeu ao
público por assinatura; `Cosmos 3` (31/05/2026) tornou aberto um modelo que emite **trajetória de
ação**, não só imagem, e trouxe casas de mídia gerativa para dentro da coalizão; `SceneSmith`
(13/07/2026) automatizou a autoria da cena com agentes e mediu concordância de 99% entre
julgamento humano e julgamento automático sobre desempenho de política; `R2S2R` (15/08/2026)
transformou uma demonstração em milhares e avaliou com 2.000 execuções simuladas por 100 reais.
Há cinco anos, "gerar o ambiente" queria dizer geração procedural com regras escritas à mão.

**O que ainda falta acontecer.** **Estado persistente e física auditável.** O `WRBench`
(18/06/2026) mostrou que 23 modelos tratam o mundo como plano-sequência e retomam o objeto no
estado em que o largaram; o levantamento de 30/04/2026 aponta a falta de protocolo padronizado
para medir consistência entre ação e predição. Sem estado que evolua sem observador e sem métrica
aceita, o mundo gerado serve para **variar** o que já se sabe e não para **descobrir** o que não
se sabe — e é justamente descobrir que a simulação precisa fazer.

**Classificação.** Emergente **e** disruptiva. Incumbente nomeado: o **estúdio de simulação e de
conteúdo 3D para engenharia** (e a equipe interna de cenários das montadoras e dos laboratórios).
Porta de entrada: **mercado novo** — times que nunca tiveram equipe de simulação e agora geram
ambiente por texto. Three Horizons: **H3** na parte gerativa, **H2+** na parte de avaliação.

### Raiz 3 — O corpo implantado é um dispositivo de coleta, e a pessoa remota é a parte do modelo que ainda falta

**O que rompe.** A **economia da autonomia**. Até aqui, robô se vendia quando funcionava sozinho; o
que está sendo vendido agora é **presença física com autonomia parcial e um humano remoto cobrindo
o resto** — e o cliente paga para ser, ao mesmo tempo, usuário e fonte de dado. Rompe duas coisas
ao mesmo tempo: a promessa de autonomia como **condição de venda** (vira promessa de roteiro), e a
separação entre **produto** e **linha de coleta**. O ambiente do cliente — a casa, a loja, o
galpão — passa a ser o local de captura, e a relação comercial embute uma cessão que não estava
lá quando se comprava máquina.

**Por que agora e não há cinco anos.** O `NEO` (08/05/2026) a US$ 20 mil, com lote de 10.000
unidades esgotado em cinco dias e operação por especialista remoto durante janelas agendadas; o
`Unitree G1` a partir de US$ 13,5 mil, com desenvolvimento secundário liberado na versão EDU; a
`Mornine` chegando a concessionárias brasileiras no último trimestre de 2026 para receber
clientes; e a industrialização da coleta na China — 100 mil funcionários e 500 mil trabalhadores
externos previstos pela JD.com, meta de 10 milhões de horas, US$ 3 por hora de gravação. Há cinco
anos, teleoperação era contingência de laboratório e de operação militar, não **modelo de
negócio** de produto de consumo.

**O que ainda falta acontecer.** **Um regime de divulgação.** Não existe hoje obrigação de o robô
informar que há uma pessoa vendo pela câmera, nem norma sobre o que ela pode ver, quanto tempo o
vídeo fica guardado e se ele treina o modelo. A precondição não é técnica: é de **regra**, e ela
tem data provável — o Regulamento (UE) 2023/1230 passa a se aplicar em 20/01/2027 e a ISO 25785-1
está em desenvolvimento, mas nenhum dos dois trata de divulgação de teleoperação. Enquanto não
existir, cada empresa decide sozinha, e o primeiro incidente público define o padrão.

**Classificação.** Emergente e disruptiva **pelo arranjo, não pelo artefato** — a teleoperação é
madura, o humanoide é hardware conhecido, e o que rompe é a **combinação com o modelo de
receita**. É o caso que a Fase 2 obriga a admitir: tecnologia madura participando de uma disrupção
sem ser a disrupção. Incumbente nomeado: **o serviço presencial de baixa qualificação** (portaria,
recepção, atendimento de loja, cuidado doméstico) e, do outro lado, **o fabricante de robô que
vende autonomia**. Porta de entrada: **mercado novo** (a casa, a concessionária) e **baixa do
mercado** (tarefas que nenhum robô industrial disputaria). Three Horizons: **H2+**, com um pé no
H2− — porque parte disso apenas **escora** o arranjo atual de trabalho de serviço em vez de
substituí-lo.

## 5. A roda dos futuros

Método: **Futures Wheel** (Jerome C. Glenn, 1971; entrada na literatura em 1972). A árvore abaixo é
o resultado **depois** dos cortes da Fase 5 — três efeitos foram mortos e vários rebaixados, e
todos estão na seção 12 com o `id` original e a prova que os matou. A regra de expansão é declarada
como minha, porque a literatura da roda não traz regra de parada: **expande-se um nó só se o filho
mudar de ator ou de mecanismo em relação ao pai.**

```yaml
roda:
  - disrupcao: A politica de acao deixa de ser escrita para um corpo e passa a ser treinada uma vez e transferida entre corpos
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo de automatizar deixa de escalar com o numero de tarefas e passa a escalar com o numero de demonstracoes, e a unidade de compra deixa de ser o robo programado e vira a politica assinada
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O integrador de automacao para de vender projeto de celula e passa a vender curadoria de dado, validacao e manutencao de comportamento
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O curso tecnico de automacao troca programar robo por especificar tarefa e auditar comportamento, e o curriculo muda antes de a norma exigir
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A responsabilidade por falha se desloca do integrador local para quem treinou a politica, e o contrato passa a exigir procedencia do dado de treino
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Auditar comportamento de maquina com corpo vira pericia reconhecida, com metodo publicado e perito que responde em juizo
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: O robo deixa de ser vendido por capacidade declarada e passa a ser vendido por desempenho em banca independente, porque nenhum comprador aceita video de demonstracao depois de 12,8%
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: A avaliacao publica de robos vira genero de conteudo, assistida como esporte e usada como instrumento de compra
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Instruir em linguagem natural vira a interface padrao de operacao de maquina com corpo, e projetar interacao passa a ser projetar instrucao e evidencia de entendimento
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Mostrar a intencao antes do movimento vira requisito de projeto do agente corporificado, e nao recurso opcional de interface
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A norma de seguranca passa a exigir sinalizacao de intencao legivel por humano, como a seta do carro, e o vocabulario de sinais vira objeto de padronizacao
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Ensinar o robo vira ocupacao de massa, e a operacao passa a empregar quem demonstra em vez de quem programa
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O dado corporificado vira ativo negociavel com procedencia declarada, e quem gravou passa a reivindicar remuneracao pelo que ensinou
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O gesto profissional entra na pauta de direitos como entrou a voz, e surge licenciamento de movimento com registro e prazo
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A casa e o corpo de quem trabalha viram locais de captura, e a fronteira entre trabalho e vida privada passa a ser desenhada pelo enquadramento da camera
            sinal: medio
            prazo: 2029
            confianca: media
  - disrupcao: O ambiente de treino deixa de ser construido e passa a ser gerado por modelo de mundo, e a avaliacao vai junto
    efeitos:
      - id: e4
        ordem: 1
        efeito: Projetar mundo vira projetar curriculo, e o valor de um ambiente passa a ser medido pelo que ele ensina e nao pelo que ele mostra
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O acervo de jogos vira insumo de treino licenciado, e o estudio passa a vender trajetoria de acao e estado alem da obra jogavel
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O contrato de quem faz jogo separa direito de jogar de direito de aprender com, e a licenca de uso vira instrumento de politica de dados
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A avaliacao de politica migra para banca simulada gerada, e o numero que a industria publica passa a depender de quem gerou o mundo do teste
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Quem certifica o robo passa a ter de certificar tambem o gerador do mundo de teste, e o simulador entra na cadeia regulada
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A divergencia entre o mundo de treino e o mundo real vira categoria propria de incidente, separada de falha de hardware e de erro de operacao
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Investigar acidente com maquina autonoma passa a exigir reconstituir o mundo em que ela treinou, e o registro do simulador vira peca de pericia
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Guardar o mundo de treino por prazo legal vira custo corrente de operar robo, e aparece arquivo de mundos com funcao equivalente a da caixa-preta
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A seguradora passa a precificar robo pela procedencia do treino, e o premio distingue politica treinada em mundo gerado de politica treinada em dado real
            sinal: fraco
            prazo: 2031
            confianca: baixa
  - disrupcao: O corpo implantado e um dispositivo de coleta, e a pessoa remota e a parte do modelo que ainda falta
    efeitos:
      - id: e6
        ordem: 1
        efeito: O robo chega ao publico como servico presencial com pessoa dentro, e a decisao de projeto passa a ser quando e como revelar que ha alguem ali
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Divulgar a presenca do operador remoto vira exigencia, primeiro de mercado e depois de norma, e o corpo passa a ter um sinal visivel de no ar
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O direito de saber se do outro lado ha maquina ou pessoa se estende do atendimento digital para o atendimento fisico
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.3
            ordem: 2
            efeito: A casa equipada com robo vira ambiente instrumentado, e o contrato de consumo passa a tratar o comodo como dado com prazo e finalidade
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e7
        ordem: 1
        efeito: O corpo deixa de ser o item caro do projeto, e o gargalo economico se desloca para validacao, seguro e responsabilidade
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Universidade e pequeno negocio passam a ter corpo proprio, e a pesquisa de interacao com maquina sai do laboratorio de robotica e entra no de design
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O repertorio de interacao com maquinas que ocupam espaco passa a ser ensinado em curso de design como hoje se ensina interface de tela
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O pais que nao fabrica corpo nem treina politica compra os dois prontos, e a decisao sobre o que o robo faz passa a ser tomada fora dele
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Adaptar politica importada ao ambiente, a norma e a cultura locais vira a especialidade que sobra, e ela se torna exportavel
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### 5.1 O que a árvore não consegue dizer, e precisa ser dito em prosa

A Roda dos Futuros é uma **árvore**. Ela não representa retroalimentação, não representa efeito que
amortece a própria causa, e não representa cruzamento entre raízes. Quatro coisas deste mapa só
existem aqui embaixo.

**As raízes 1 e 3 se anulam parcialmente, e o mapa não soma.** Se a raiz 1 se realizar rápido — se
a política generalista atingir confiabilidade de operação —, a raiz 3 **morre como modelo de
negócio**: ninguém paga assinatura para um humano dirigir o robô se o robô faz sozinho. Se a raiz 1
travar no 12,8%, a raiz 3 **cresce**, e cresce na direção mais desconfortável: o humanoide como
avatar de trabalho remoto, e a casa como posto avançado de captura. Quem ler a árvore somando os
galhos vai superestimar o total. Os dois galhos são **alternativos em boa parte**, e a única coisa
que os une é que ambos precisam de dado — o que explica por que a coleta (e3) é o efeito mais bem
ancorado do mapa: ela é necessária **nos dois** futuros.

**Convergências — efeitos que só existem com duas raízes, e por isso ficaram fora da árvore.**

- **O recall de política.** Combina raiz 1 (mesma política em muitos corpos) com o substrato maduro
  (correção entregue por atualização de software, como a Waymo já faz). Se uma política-base
  defeituosa estiver rodando em corpos de fabricantes diferentes, o recall deixa de ser por
  fabricante e passa a ser **por modelo** — e ninguém sabe hoje quem o emite. É o wildcard da §6.
- **A banca gerada que certifica o corpo barato.** Combina raiz 2 (avaliação em mundo gerado) com
  raiz 3 (corpo acessível). Junto, produz um mercado de **certificação sintética**: o pequeno
  fabricante compra aprovação em banca simulada porque não tem laboratório físico. Barateia a
  entrada e cria a captura mais óbvia — quem gera o mundo do teste decide quem passa.
- **O mundo do cliente como produto.** Combina raiz 2 e raiz 3: o ambiente capturado na casa ou na
  loja vira mundo gerável, e o cliente passa a ter, sem saber, contribuído com um **cenário** e não
  só com um dado. É o ponto em que este tema encosta no tema 10 sem invadi-lo: lá a captura é o
  objeto; aqui ela é subproduto da operação.

**O efeito que já é presente e por isso não entrou na roda.** "Robô corrigido por atualização
remota depois de falha em via pública" não é futuro: aconteceu duas vezes documentadas em doze
meses com a Waymo. Está na §3.1, como manda a regra de parada.

**Onde a numeração engana.** Terceira ordem aqui não é mais profunda: é mais **mediada**, e portanto
mais frágil — herda a incerteza de todos os elos anteriores. Por isso não há nenhum efeito de
ordem 3 com confiança alta neste mapa, e isso é resultado, não modéstia.

## 6. Sinais fracos e wildcards

**Efeitos que exigem duas precondições não validadas ao mesmo tempo — vieram para cá, como manda a
regra de parada.**

**O robô doméstico que aprende com o próprio morador, sem ninguém do outro lado.** Precisa de (a)
adaptação no dispositivo, com poucas demonstrações e sem reenvio de vídeo para o fabricante, e (b)
aceitação de que a casa seja instrumentada. A primeira tem endereço técnico — `Jetson Thor` já
está no `NEO` —, a segunda não tem nenhum sinal medido. Se as duas caírem juntas, o galho `e6`
inteiro muda de sentido: a teleoperação deixa de ser ponte e vira resíduo, e `e6.1` perde objeto.

**A banca pública obrigatória antes da venda.** Precisa de (a) um protocolo de avaliação aceito
por compradores e (b) uma autoridade disposta a exigi-lo. O `RoboDojo` e o `RoboArena` são o
embrião do primeiro; o Regulamento (UE) 2023/1230, aplicável em 20/01/2027, é o candidato mais
provável ao segundo, mas não trata de política generalista. Se as duas aparecerem, `e1.3` sobe de
médio para forte e `e4.2` vira infraestrutura em vez de prática de mercado.

**A licença de movimento.** Precisa de (a) jurisprudência que reconheça o gesto profissional como
objeto protegível e (b) registro técnico capaz de identificar a origem de uma trajetória dentro de
um modelo treinado. Nenhuma das duas existe; a segunda talvez seja impossível. É por isso que
`e3.1.1` está em `fraco`/`baixa` e não em outro lugar.

**Sinais fracos genuínos — pequenos, e com alcance desproporcional.**

**Metade da coalizão de modelos de mundo é gente de mídia.** A `Cosmos Coalition`, anunciada em
31/05/2026, inclui `Runway` e `Black Forest Labs` ao lado de robóticas. Isso é uma informação sobre
**quem vai escrever a ferramenta**: se o mundo de treino for construído por quem fez ferramenta de
vídeo, ele vai herdar as prioridades do vídeo — plano, corte, aparência — que são exatamente as que
o `WRBench` mostrou insuficientes. Sinal fraco, consequência grande, e mensurável já: basta ver se
as métricas publicadas nos próximos doze meses falam de realismo ou de transferência.

**Dez mil horas de `CS2` publicadas como dado de modelo de mundo.** O `EgoCS-400K` (16/06/2026) é o
primeiro caso em que um acervo de jogo competitivo é empacotado explicitamente como insumo de IA
corporificada. O jogo tem o que a robótica não tem: ação, estado e evento alinhados no tempo, de
graça, em volume. Se isso pegar, o ativo mais valioso de um estúdio deixa de ser a obra e passa a
ser o **registro de como as pessoas a jogaram**.

**O modelo de mundo vendido por assinatura a US$ 250 por mês.** `Project Genie` põe um artefato de
pesquisa não resolvido no mercado de consumo antes de ele ter estado persistente. Isso acelera a
familiarização do público com mundo gerado — e, ao mesmo tempo, ensina o público a esperar dele
uma coisa (entretenimento efêmero de 60 segundos) que não é a que a robótica precisa.

**O corpo que chega ao Brasil é de recepção, não de produção.** A `Mornine` em concessionária, no
último trimestre de 2026, é um sinal fraco sobre **onde o repertório de interação vai se formar**:
não na fábrica, mas no varejo, sob roteiro de marca. Quem projeta interação vai encontrar a
primeira norma prática de comportamento de humanoide escrita por área de marketing.

**Wildcards — baixa probabilidade, alto impacto, e cada um derruba uma parte nomeada deste mapa.**

**O acidente cuja causa está no simulador.** Um dano físico relevante cuja investigação conclua
que a falha não estava no robô nem na política, mas no **mundo em que ela foi treinada** — um
atrito mal modelado, um objeto que o gerador nunca produz, um evento que só acontece quando
ninguém olha, que é exatamente a falha que o `WRBench` mediu. O efeito não é técnico: é jurídico e
narrativo. `e5` deixa de ser previsão e vira fato consumado anos antes do prazo, e `e5.1.1` — o
arquivo de mundos — passa a ser exigido por seguradora antes de qualquer regulador. É o wildcard
que a própria disciplina levantou, e este mapa não encontrou nenhum caso público desses até
17/09/2026.

**O recall de política, atravessando fabricantes.** Uma política-base amplamente adotada
apresenta modo de falha comum, e corpos de marcas diferentes precisam ser parados ao mesmo tempo.
Isso não tem dono: a Waymo recolhe os próprios carros porque é fabricante e operadora; num mundo de
política transferível, **quem emite o recall não é quem vendeu o corpo**. A monocultura de política
é o risco sistêmico deste tema, e é pouco discutida porque a política ainda não é boa o bastante
para ser monocultura.

**O vídeo doméstico que vaza.** Gravação de teleoperação dentro de uma casa torna-se pública —
ou é usada em processo — e a categoria "robô doméstico com operador remoto" perde viabilidade
comercial em um trimestre. O mapa inteiro da raiz 3 depende de a divulgação (e6.1) chegar **antes**
disso; se chegar depois, chega como reação, e reação costuma proibir em vez de regular.

**A proibição preventiva de humanoide em atendimento ao público.** Uma norma trabalhista ou
sanitária, em qualquer país relevante, que exija presença humana em atendimento presencial. Não é
improvável: é o tipo de regra que aparece rápido quando o primeiro caso ruim vira notícia. Derruba
`e6` no ponto de entrada mais visível — e, ironicamente, empurra a raiz 3 para dentro de casa e de
galpão, onde ninguém fiscaliza.

**O melhor argumento contra o mapa inteiro, dito por quem está dentro.** Alan Fern, da Oregon
State, sobre a corrida chinesa por dado corporificado: *"não é uma ideia maluca. É só muito pouco
comprovada."* Se a aposta central da indústria — escala de demonstração produz generalidade — for
falsa, nada neste mapa acontece na velocidade escrita. Os 12,8% do `RoboDojo` são compatíveis com
as duas hipóteses: "falta dado" e "falta ideia". Nenhum número que eu tenha aberto distingue as
duas, e essa é a fronteira do conhecimento disponível em setembro de 2026.

## 7. Contra o próprio mapa

Esta seção existe para dizer onde este documento é fraco. A bateria adversarial da Fase 5 foi
aplicada aos 35 efeitos do rascunho, com as seis provas, citando `id`. **Três efeitos morreram** e
**seis foram rebaixados**; todos estão na seção 12 com a prova que os atingiu. A cota mínima de
dano foi cumprida nas três raízes — uma morte em cada uma.

### 7.1 A fragilidade maior: este mapa mede laboratório e conclui sobre implantação

Quase toda a evidência forte das seções 3.2 e 3.3 é de **capacidade demonstrada**: modelos
publicados, bancadas montadas, coalizões anunciadas, pesos abertos. A evidência de **implantação**
é minúscula e concentrada: uma linha da BMW, nove instalações da Agility, um punhado de sítios
nomeados, e uma empresa que nunca publicou contagem de produção. Entre as duas colunas há um
número que este mapa não consegue contornar: **12,8%**.

Isso é a prova **P6** funcionando. Na camada da **litania**, "os robôs chegaram" é verdadeira — há
vídeo, há preço, há lote esgotado em cinco dias. Na camada **sistêmica**, o que se vê é outra coisa:
uma indústria de US$ 300 bilhões comprando tempo com dado barato de trabalhador enquanto espera uma
generalização que ainda não tem prova. São afirmações diferentes, e o mapa que as confunde é
entusiasmo com data.

### 7.2 O teste de velocidade de adoção, aplicado a este mapa e não perdoado

A prova **P2** exige caso histórico comparável. O melhor que este mapa tem é o robotáxi: de 50 mil
para 500 mil corridas semanais em 22 meses — rápido — mas **depois de quinze anos de
desenvolvimento** e restrito a dez cidades de um país. O segundo caso é o robô industrial, com a
densidade global em 132 por 10.000 e o Brasil em 18 **depois de cinquenta anos** de existência da
tecnologia. Qualquer efeito deste mapa que suponha frota — e `e1`, `e6` e `e7` supõem — está
apostando numa adoção mais rápida do que os dois casos comparáveis disponíveis. Foi por isso que
`e6` caiu de `alta` para `media` e `e5.1` caiu para `baixa`. Se eu tivesse que apostar em um erro
sistemático deste documento, apostaria neste: **prazos curtos demais na primeira ordem.**

### 7.3 A visão de mundo que este mapa assume como permanente

Rodando a CLA até o fim, o mapa inteiro repousa sobre duas crenças que ele não examina:

1. **Trabalho físico é custo a ser eliminado.** Toda a economia da raiz 1 e da raiz 3 pressupõe que
   substituir esforço humano é valor. Se a métrica de sucesso virar outra — emprego mantido,
   energia gasta, material consumido, vínculo local —, uma dúzia de efeitos troca de sinal sem que
   um único fato mude. O Brasil é o caso vivo dessa inversão: 18 robôs por 10.000 não é só atraso
   tecnológico, é **preço relativo de mão de obra** operando como política industrial de fato.
2. **Ambiente é coisa a ser otimizada para o agente.** A terceira ordem deste tema, na pergunta da
   disciplina, é se a cidade e a casa passam a ser desenhadas para os dois. Este mapa assume que
   sim, e é uma suposição de visão de mundo, não um fato: pode acontecer o contrário — que o
   ambiente humano seja deliberadamente **mantido hostil** à máquina como forma de preservar
   trabalho, e isso teria mais precedente histórico do que o mapa admite.

O **mito** abaixo de tudo isso é antigo e não é técnico: o **servo incansável** — a promessa de que
alguém fará o trabalho penoso sem ser ninguém. É o que faz a palavra "robô" ter nascido de
*robota*, trabalho forçado. Quando a raiz 3 revela que há uma pessoa dentro do servo, ela não cria
um problema novo: **ela devolve o problema antigo**, e por isso é a raiz com maior potencial de
reação pública e menor potencial de consenso.

### 7.4 O que a bateria derrubou, e o que ela não conseguiu derrubar

A **P1** (extrapolação linear) matou `e4.3`, que era o presente com outro preço. A **P3** (já
aconteceu) matou `e6.2`: atendimento remoto deslocalizado existe há duas décadas, e pôr um corpo na
outra ponta não muda o mecanismo econômico. A **P6** (camada) matou `e2.2`, que sobrevivia como
manchete e não tinha causa sistêmica abaixo.

A **P4** (força contrária) é onde este mapa está mais bem servido, e por isso é onde ele mais se
defende: há incumbente nomeado em todas as raízes (integrador, estúdio de simulação, fabricante que
vende autonomia), há regulador com data (20/01/2027), há norma em elaboração (ISO 25785-1), há
custo e há inércia medida (densidade de robôs). O que a P4 **não** conseguiu derrubar foi `e3` — a
coleta como ocupação de massa —, e vale registrar por quê: é o único efeito deste mapa que **os dois
futuros possíveis exigem**. Se a generalização vier, foi o dado que a trouxe; se não vier, o dado é
o que se compra enquanto se espera. Efeito que sobrevive às duas pernas da bifurcação é o mais
seguro que um mapa pode ter — e mesmo ele está em `media`, não em `alta`, porque a escala declarada
pela JD.com é plano, não execução medida.

### 7.5 Quatro fragilidades de procedimento, ditas sem atenuação

1. **O recorte não foi confirmado por ninguém.** A Fase 1 é bloqueante e exige confirmação
   explícita do bloco `RECORTE FECHADO`. Nesta rodada, as respostas vieram por escrito, de
   antemão, e **não houve confirmação interativa**. O número de raízes (3) foi suposto por mim, não
   respondido. Isso está declarado na §12 e é uma violação parcial do procedimento, não um detalhe.
2. **Uma fonte primária ficou fechada.** A ficha da ISO 25785-1 devolveu 403; o que se afirma sobre
   ela vem de cobertura secundária, e está marcado no texto e na §12.
3. **Três alegações centrais são de fabricante.** "Meses para dias" (NVIDIA), "zero-shot entre
   corpos" (Physical Intelligence) e "sem especializar o modelo" (DeepMind) não têm, até onde abri,
   replicação independente. O `RoboDojo` é a única medida independente deste mapa, e ela **discorda
   do tom** das três.
4. **O mapa é global com nota brasileira, e a nota é mais fraca que o resto.** Não encontrei
   nenhuma avaliação independente de robótica brasileira, nenhum dado da IFR sobre o Brasil, e a
   densidade de 18 por 10.000 vem de um levantamento setorial que compara com uma média global de
   ano diferente. A nota está no documento porque foi pedida, e vale o que vale.

## 8. O que a máquina errou

Registro dos erros e das divergências desta rodada, no espírito do `DUVIDAS.md`: o que separa erro
detectável de erro indetectável não é desconfiar mais — é existir um segundo registro para
comparar.

**A data que a busca inventou por arredondamento.** O resumo de busca situava o lançamento do
`Cosmos 3` em **1º de junho de 2026**, citando cobertura de imprensa. A página da própria NVIDIA
diz **31 de maio de 2026**. *Como percebi:* abri a fonte primária para copiar os números de
treino, e a data no alto não batia. Adotei a da empresa e registrei a divergência. Um dia não muda
nada neste mapa — mas a **forma** do erro é a mesma que já derrubou uma viga antes: data deduzida
de cobertura apresentada com a mesma confiança de data declarada na fonte.

**A confusão entre `π0.5` e `π0.7`, que teria virado erro de viga.** O resumo de busca afirmava,
com ar de fato, que "Pi-0.5 foi lançado em 22 de abril de 2026" e que seria "o primeiro modelo-base
de robótica a generalizar entre corpos sem ajuste por robô". Duas coisas erradas numa frase: o
`π0.5` é de **abril de 2025**, e o que existe em abril de 2026 é o **`π0.7`** — arXiv de 16/04,
revisto em 24/04. *Como percebi:* a mesma lista de resultados trazia o `π0.7` com data de 2026;
duas datas para o mesmo evento não podem estar certas juntas. Abri o arXiv. Esse item é o **"por
que agora" da raiz 1**: o erro estava exatamente sobre a viga, de novo.

**Duas médias globais de densidade de robôs, das quais uma eu poderia ter usado sem perceber.** A
fonte brasileira compara o Brasil (18 por 10.000) com uma média global de **151**; a IFR, em
release de 08/04/2026, publica **132**. São anos-base diferentes, e nenhuma das duas está errada —
mas escrever "18 contra 151" citando a IFR seria uma citação verdadeira sustentando um número que
não é dela. Declarei os dois. *Como percebi:* abri as duas fontes porque precisava da data do
release, e os números não bateram.

**Uma data de aprovação legislativa que não consegui fechar.** A ficha oficial do PL 2338/2023 no
Senado registra **26/12/2024**; a cobertura jornalística e as entidades de sociedade civil registram
**10/12/2024**. Não resolvi. Escrevi "dezembro de 2024" e deixei a divergência visível, em vez de
escolher a que soava melhor.

**Um recall que a busca trouxe como se fosse de 2026.** A lista de resultados sobre recalls da
Waymo misturava o episódio das zonas de obra (18/06/2026) com o dos ônibus escolares, e o segundo é
de **9 de dezembro de 2025**, com investigação aberta pela NHTSA em outubro de 2025. *Como
percebi:* abri os dois; o segundo traz a data no alto e fala em "planeja protocolar esta semana".
Se eu tivesse citado de memória, teria concentrado dois episódios num ano só — e a frase "duas vezes
em doze meses" da §5.1 depende de acertar isso.

**O número redondo que recusei.** Circula, em material de fornecedor, a afirmação de que existem
"cerca de 500 mil horas de dado de interação corporificada no mundo" contra "10 milhões
necessárias". É redondo, é sem fonte primária, é vendido por quem vende coleta de dado. **Não entrou
no mapa.** No lugar dele ficou a meta declarada da JD.com — 10 milhões de horas em Suqian —, que é
plano de uma empresa e está escrito como plano.

**Duas informações que apareceram e não entraram por não terem sido abertas.** Um `Gemini Robotics
ER 2` anunciado em 30/07/2026 e uma estrutura nova de categorias da ANAC (Aberta, Específica,
Certificada) com BVLOS na Específica. As duas são plausíveis e nenhuma sustenta qualquer afirmação
deste documento; estão listadas na §12 como pistas não verificadas.

**O erro que não foi erro, e é o mais instrutivo.** Escrevi de memória, no rascunho, que a
`Futures Wheel` é de Jerome Glenn, 1971, com entrada na literatura em 1972 — e está certo, porque
está apurado no `ESTUDO.md` da própria skill. Mas **por dentro** essa certeza era indistinguível da
certeza com que a busca afirmou "Pi-0.5, 22 de abril de 2026". A diferença não estava em mim:
estava em haver, num caso, um arquivo apurado antes para conferir.

## 9. Três cenários para 2031

Os três partem dos **mesmos fatos** verificados na seção 3. O que muda entre eles é qual força
ganha, não quais fatos existem.

### Cenário A — O mundo de treino vira infraestrutura auditável (desejável, e o menos provável)

A precondição da raiz 2 cai: aparecem estado persistente e um protocolo de consistência
ação-predição aceito. Com métrica, aparece banca; com banca, aparece comparação; com comparação, o
comprador para de decidir por vídeo. O Regulamento (UE) 2023/1230 entra em vigor em 20/01/2027 e a
ISO 25785-1 sai; entre os dois, a exigência de que máquina com comportamento aprendido demonstre
segurança empurra a indústria para **registro do mundo de treino**. Em 2031, avaliar robô é como
homologar avião: caro, chato, público — e por isso confiável.

Nesse mundo, quem projeta mundo ganha profissão nova e séria. O estúdio que sabe montar situação
difícil — o mesmo ofício de quem desenha fase de jogo — vira fornecedor de **currículo de treino**
com valor mensurável, e a pergunta "este mundo ensina?" tem resposta numérica. Perde quem vendia
realismo; ganha quem vende dificuldade útil.

*O que faria este cenário acontecer:* que a métrica venha por **seguro** e não por ética. Prêmio
diferenciado por procedência de treino (`e5.2`) faz mais pela auditoria do que qualquer princípio,
porque converte rigor em preço.

### Cenário B — A monocultura de política com mundo fechado (indesejável, e o mais barato de chegar)

A precondição da raiz 2 **não** cai: o mundo gerado continua sendo aparência que responde, boa para
variar e ruim para descobrir. A raiz 1 avança mesmo assim, porque dado barato em escala compensa
parcialmente a falta de teoria — e uma ou duas políticas-base passam a rodar em corpos de muitos
fabricantes, treinadas em mundos proprietários que ninguém de fora inspeciona.

Nesse mundo, três coisas acontecem juntas. A avaliação vira **marketing**: quem gera o mundo do
teste é quem vende a política (`e4.2` sem `e4.2.1`). A falha vira **sistêmica**: modo de falha comum
atravessa marcas, e o recall não tem dono. E a responsabilidade vira **inalcançável**: o operador
local não programou nada, o fabricante do corpo não treinou nada, e quem treinou está em outro
país, protegido por contrato. A pergunta de primeira ordem da disciplina — *quem responde pelo
erro?* — recebe a pior resposta possível, que é "ninguém, e todos assinaram".

*O sinal de que estamos indo para cá:* métrica publicada falando de **realismo** em vez de
transferência, e nenhuma banca independente com financiamento estável. Em setembro de 2026, esse é
o estado do mundo.

### Cenário C — A IA física chega como serviço com gente dentro (o mais provável, e o mais desconfortável)

A generalização não chega no prazo: em 2031 as políticas generalistas fazem bem um conjunto
estreito de tarefas, e o `RoboDojo` de 2031 registra 40% onde hoje registra 12,8% — progresso real,
insuficiente para autonomia. O mercado não espera. O corpo é barato, o público está curioso, e a
lacuna é preenchida por **pessoas**: teleoperadores em fuso barato, janelas agendadas, um
especialista para vários robôs. O humanoide se estabelece como **interface de presença** — no
varejo, no cuidado, na recepção — e como **coletor**, e a coleta vira um setor de trabalho com
sindicato, piso e disputa de dado.

Para quem projeta mídia e interação, este é o cenário de trabalho: o objeto de projeto não é a
autonomia, é a **costura** — como um corpo alterna entre modelo e pessoa sem enganar quem está na
frente, como se sinaliza quem responde agora, o que o operador vê, o que fica gravado, e como o
cômodo deixa de ser cenário e vira dado. `Mornine` em concessionária, em dezembro de 2026, é o
primeiro capítulo brasileiro disso.

*Por que este é o mais provável:* é o único dos três que **não exige que nada novo dê certo**.
Exige apenas que o preço do corpo continue caindo, que a generalização continue difícil, e que
haja gente disposta a trabalhar remotamente por menos. As três já são verdade.

### O que os três têm em comum, e por isso é a aposta mais segura deste mapa

Em todos os três, **o dado corporificado é o ativo, e ele é extraído de algum lugar** — da casa do
cliente, do corpo do trabalhador, do acervo de um jogo, do mundo que um modelo gerou. Em A ele é
auditado, em B é fechado, em C é comprado a US$ 3 a hora. Mas em nenhum dos três ele deixa de ser o
centro. Se este mapa estiver certo em uma coisa só, que seja nesta: **a disputa deste tema até 2031
é sobre a procedência do dado de ação, não sobre a habilidade do robô.**

## 10. O experimento

**A banca do mundo errado.** Testável numa aula, com a turma inteira, sem robô e sem orçamento.

**O que se testa.** A pergunta de primeira ordem da disciplina, na forma mais crua: quando o mundo
de treino diverge do mundo real, **quem responde pelo erro** — e quanto dessa atribuição muda
quando as pessoas descobrem qual variável divergiu.

**Procedimento.**

1. **Três papéis, sorteados.** *Projetista de mundo* (2 a 3 pessoas): escreve, em uma página, a
   descrição do ambiente em que a tarefa acontecerá — medidas, objetos, posições, iluminação, peso
   das coisas. *Instrutor* (2 a 3 pessoas): escreve a política — uma lista numerada de instruções
   em linguagem natural, sem condicionais vagas. *Corpo* (1 pessoa por rodada): executa a lista
   **literalmente**, sem improvisar, e só pode usar informação que esteja na instrução.
2. **O treino.** Instrutores e corpo ensaiam numa "sala simulada": a descrição no papel, mais uma
   maquete grosseira montada com o que houver. Os instrutores podem revisar a lista quantas vezes
   quiserem. O corpo memoriza. Tempo: 20 minutos.
3. **A execução.** A tarefa é executada na sala real, que o professor preparou **divergindo da
   descrição em uma única variável não declarada** — a altura da mesa, o peso do objeto, uma
   cadeira a mais no caminho, a lâmpada apagada de um lado. Ninguém, além do professor, sabe qual.
4. **A atribuição, em dois tempos.** Assim que a execução falha (ou termina), **antes** de qualquer
   discussão, cada participante escreve em papel: *de quem foi a culpa?* — projetista, instrutor,
   corpo, ou ninguém —, distribuindo 100 pontos. Depois o professor revela a variável divergente, e
   **todos escrevem de novo**.
5. **Uma segunda rodada invertendo os papéis**, com outra variável divergente, para separar efeito
   de papel de efeito de pessoa.

**O que se mede.**

- **Taxa de sobrevivência da instrução:** quantas das instruções numeradas foram executáveis sem
  ambiguidade na sala real. É a medida direta de transferência — o `sim-to-real` da aula.
- **Latência de divergência:** em que passo o corpo percebeu que o mundo não era o descrito, e se
  ele **continuou** executando mesmo assim. A política que insiste é o comportamento mais perigoso
  do tema, e ela aparece sozinha aqui.
- **Deslocamento de culpa:** a diferença entre a distribuição dos 100 pontos antes e depois da
  revelação. É a medida que interessa: se o conhecimento da causa desloca a culpa do executor para
  quem descreveu o mundo, a turma acabou de descobrir sozinha o efeito `e1.2` e a peça de perícia
  do `e5.1`.

**Por que este experimento e não outro.** Porque ataca o efeito de que este mapa tem **menos**
certeza e do qual mais depende: `e5` — a divergência entre mundo de treino e mundo real como
categoria própria de incidente — e o par `e1.2`/`e5.1`, sobre quem responde. A raiz 1 se mede com
papers públicos; a raiz 3 se mede com o preço de um `NEO` e um contrato de teleoperação. A raiz 2
tem uma pergunta — *de quem é a culpa quando o mundo mentiu?* — que não tem instrumento de medida
no mundo, e tem numa sala de aula.

**Variação de controle, se houver tempo.** Rodar uma terceira execução **sem** divergência: mesma
descrição, mesma sala. A taxa de sobrevivência da instrução nessa rodada é o teto — mostra quanto
da falha é do mundo divergente e quanto é só de instrução mal escrita. Sem esse controle, o
experimento mede as duas coisas somadas e atribui tudo à primeira, que é exatamente o erro que
`e5` corre o risco de ser.

**O que o experimento não mede, e não deve fingir que mede.** Capacidade de robô, qualidade de
modelo, viabilidade de mercado. Ele mede uma coisa só — **como as pessoas distribuem
responsabilidade quando a execução falha por causa do ambiente** —, e essa é a virtude dele.

## 11. Fontes

Todos os endereços abaixo foram abertos por mim nesta sessão, em **17 de setembro de 2026**. Fontes
que aparecem nesta lista sustentam afirmações do texto; o que não consegui abrir está declarado na
seção 12 e **não** sustenta nenhuma afirmação. São **31** fontes.

**Modelos de ação e corpos de referência (raiz 1)**

1. Physical Intelligence et al. — *π₀.7: a Steerable Generalist Robotic Foundation Model with
   Emergent Capabilities* (arXiv, 16/04/2026, revisto em 24/04; 87 coautores; generalização
   *zero-shot* entre corpos): `https://arxiv.org/abs/2604.15483`
2. Google DeepMind — *Gemini Robotics 1.5 brings AI agents into the physical world* (25/09/2025;
   ALOHA 2 → Apptronik Apollo → Franka; ER 1.5 aberto por API):
   `https://deepmind.google/blog/gemini-robotics-15-brings-ai-agents-into-the-physical-world/`
3. TechNode — *Alibaba unveils Qwen-Robot series with three foundation models for embodied AI*
   (17/06/2026; RobotNav, RobotManip, RobotWorld; 38.100 horas de dados abertos):
   `https://technode.com/2026/06/17/alibaba-unveils-qwen-robot-series-with-three-foundation-models-for-embodied-ai/`
4. NVIDIA Newsroom — *NVIDIA Announces NVIDIA Isaac GR00T Reference Humanoid Robot for Academic
   Research* (31/05/2026; Unitree H2 Plus, Sharpa Wave, Jetson AGX Thor, 75 graus de liberdade):
   `https://nvidianews.nvidia.com/news/nvidia-open-humanoid-robot-reference-design`
5. Unitree — página do humanoide G1 (preço a partir de US$ 13,5 mil; 1,32 m; ~35 kg; 23 juntas;
   desenvolvimento secundário só na EDU): `https://www.unitree.com/g1/`

**Modelos de mundo e geração de ambiente (raiz 2)**

6. NVIDIA Newsroom — *NVIDIA Launches Cosmos 3, the Open Frontier Foundation Model for Physical AI*
   (31/05/2026; trajetórias de ação; Cosmos Coalition com Runway e Black Forest Labs):
   `https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai`
7. Google DeepMind — *Genie 3: A new frontier for world models* (05/08/2025; 720p, 24 fps, limites
   declarados): `https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/`
8. Engadget — *Google's Project Genie lets you create your own 3D interactive worlds* (30/01/2026;
   AI Ultra a US$ 250/mês, gerações de 60 s, "Genie 3 não é um motor de jogo"):
   `https://www.engadget.com/ai/googles-project-genie-lets-you-create-your-own-3d-interactive-worlds-183646428.html`
9. Google DeepMind — *SIMA 2: an agent that plays, reasons and learns with you in virtual 3D
   worlds* (13/11/2025; auto-melhoria; operação dentro de mundos do Genie 3):
   `https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/`
10. MIT News — *AI agents create virtual playgrounds to help robots get crucial training data*
    (13/07/2026; SceneSmith, MIT CSAIL + Toyota Research Institute; 1.300+ cenas; citação de Russ
    Tedrake):
    `https://news.mit.edu/2026/ai-agents-create-virtual-playgrounds-to-help-robots-get-crucial-training-data-0713`
11. The Decoder — *World Labs turns one real-world robot task into thousands of simulated
    variations for training* (15/08/2026; R2S2R; 2.000 execuções simuladas por 100 reais):
    `https://the-decoder.com/world-labs-turns-one-real-world-robot-task-into-thousands-of-simulated-variations-for-training/`
12. Guo et al. — *EgoCS-400K: An Egocentric Gameplay Dataset for World Models* (arXiv, 16/06/2026;
    400 mil vídeos, 10 mil horas de CS/CS2): `https://arxiv.org/abs/2606.18180`

**Avaliação, limites e literatura (o contraponto)**

13. Consórcio RoboDojo — *RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation
    of Generalist Robot Manipulation Policies* (arXiv, 05/07/2026; 12,8% no real, 8,8% em
    simulação, 100% da teleoperação): `https://arxiv.org/html/2607.04434v1`
14. Lu et al. — *Current World Models Lack a Persistent State Core* (arXiv, 18/06/2026; WRBench,
    9.600 vídeos, 23 modelos; o mundo como plano-sequência): `https://arxiv.org/abs/2606.20545`
15. Hou et al. — *World Model for Robot Learning: A Comprehensive Survey* (arXiv, 30/04/2026; 18
    autores, entre eles Abbeel, Malik, Wu; seis desafios abertos):
    `https://arxiv.org/html/2605.00080v1`

**Implantação medida, preço e trabalho (raiz 3)**

16. Humanoid Guide — *Humanoid deployments in 2026 favor Figure and Agility* (19/07/2026; separa
    dado reportado por empresa de número que circula sem fonte):
    `https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/`
17. heise online — *1X to deliver humanoid household robot Neo to US customers in 2026*
    (08/05/2026; US$ 20 mil ou ~US$ 500/mês; lote de 10.000 esgotado em cinco dias; Jetson Thor e
    Isaac): `https://www.heise.de/en/news/1X-to-deliver-humanoid-household-robot-Neo-to-US-customers-in-2026-11287205.html`
18. The Robot Report — *Teleop, not autonomy, is the path for 1X's Neo humanoid* (21/11/2025; o
    especialista remoto, câmeras e microfones, e a proposta de reposicionar o produto):
    `https://www.therobotreport.com/teleop-not-autonomy-the-path-for-1x-neo-humanoid/`
19. Rest of World — Viola Zhou, *How China is using human labor to win the humanoid robot data
    race* (03/06/2026; JD.com, 100 mil + 500 mil trabalhadores, 10 milhões de horas, 20 yuans/hora;
    Alan Fern): `https://restofworld.org/2026/china-ai-robotics-training-data/`
20. Forbes Brasil — *Robôs humanoides estão chegando às fábricas. Mas não do jeito que você pensa*
    (21/07/2026; US$ 300 bi, eficácia de 20% a 50%, 54% dos robôs industriais na China; Jeff
    Burnstein):
    `https://forbes.com.br/forbes-tech/2026/07/robos-humanoides-estao-chegando-as-fabricas-mas-nao-do-jeito-que-voce-pensa/`

**O substrato maduro — robotáxi, densidade e os recalls**

21. TechCrunch — *Waymo's skyrocketing ridership in one chart* (27/03/2026; 500 mil corridas
    semanais, dez cidades, 3.067 veículos declarados à NHTSA):
    `https://techcrunch.com/2026/03/27/waymo-skyrocketing-ridership-in-one-chart/`
22. TechCrunch — *Waymo recalls nearly 4,000 robotaxis to stop them driving into highway
    construction zones* (18/06/2026; 13 episódios; correção por software):
    `https://techcrunch.com/2026/06/18/waymo-recalls-nearly-4000-robotaxis-to-stop-them-driving-into-highway-construction-zones/`
23. The Robot Report — *Waymo recalls robotaxi software after school bus safety failures*
    (09/12/2025; 19 episódios documentados em Austin; investigação da NHTSA de outubro de 2025):
    `https://www.therobotreport.com/waaymo-recalls-robotaxi-software-after-school-bus-safety-failures/`
24. IFR — *Robot Density Surges in Europe, Asia, and Americas* (08/04/2026; média global de 132 por
    10.000; Coreia 1.220; EUA 307; sem dado do Brasil):
    `https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas`

**Regra — o que já está escrito**

25. EU-OSHA — *Regulation 2023/1230/EU – machinery* (adotado em 14/06/2023; **aplicável a partir de
    20/01/2027**; cobre máquinas móveis autônomas e IA que assegura funções de segurança):
    `https://osha.europa.eu/en/legislation/directive/regulation-20231230eu-machinery`
26. Tech Briefs — *Safety in Motion: Setting the Standard for Humanoid Robots* (ISO 25785-1 em
    desenvolvimento; ISO 10218 não cobre humanoide; liderança Boston Dynamics/Agility/A3):
    `https://www.techbriefs.com/component/content/article/53111-safety-in-motion-setting-the-standard-for-humanoid-robots`
27. Senado Federal — ficha da matéria **PL 2338/2023**, "Dispõe sobre o uso da Inteligência
    Artificial" (aprovado pelo Plenário em dezembro de 2024; remetido à Câmara em 17/03/2025):
    `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`
28. ANAC — **Resolução nº 806, de 15/06/2026** (aeronaves não tripuladas; até 250 g sem cadastro;
    120 metros; VLOS e EVLOS):
    `https://www.anac.gov.br/assuntos/legislacao/legislacao-1/resolucoes/2026/resolucao-806`

**A nota brasileira**

29. Silicon Valley Robotics Center — *State of Robotics Brazil 2026* (março de 2026; 18 robôs por
    10.000 trabalhadores; automotivo em 350; WEG, Auttom, Positivo, Horus, Embraer/Eve, Solinftec):
    `https://www.roboticscenter.ai/state-of-robotics-brazil-2026`
30. Forbes Agro — *Solinftec atinge maioridade e vislumbra 700 robôs no campo até 2026* (05/02/2025;
    50 robôs Solix em operação; 65% menos herbicida em cana, 90% em soja; R$ 1,3 bi captados):
    `https://forbes.com.br/forbesagro/2025/02/solinftec-atinge-maioridade-e-vislumbra-700-robos-no-campo-ate-2026/`
31. Terra Brasil Notícias — *Robô humanoide da Chery será lançado no Brasil ainda este ano*
    (05/08/2026; Mornine, 1,68 m, ~70 kg, e o cão Argos, em concessionárias, 4º trimestre de 2026):
    `https://terrabrasilnoticias.com/2026/08/o-futuro-chegou-robo-humanoide-da-chery-sera-lancado-no-brasil-ainda-este-ano-veja-video/`

## 12. Anexo — o levantamento bruto

Sem edição e sem limite, como manda o formato. Esta é a seção que permite a outra pessoa refazer a
rodada e discordar dela com conhecimento de causa.

### 12.1 Fase 1 — a entrevista, como aconteceu

O bloco das nove perguntas foi emitido em uma única mensagem, numerado, conforme a skill. **As
respostas vieram por escrito, de antemão, e não houve confirmação interativa do recorte fechado** —
esta rodada é automatizada e não há ninguém para confirmar. Registro isto como violação parcial do
procedimento, não como detalhe de execução: a Fase 1 é bloqueante justamente porque o recorte é
produto tanto quanto o mapa.

| # | Pergunta | Resposta recebida |
|---|---|---|
| 1 | Tema e fronteira | "Agentes corporificados, IA física e modelos de mundo" — tema 9 de 19, família *Simulação e mundos*. Fronteira herdada do bloco da disciplina: não é simulação de sociedades (tema 6), não é captura de realidade (tema 10), não é percepção de vocabulário aberto (tema 11) |
| 2 | Horizonte | 2031 |
| 3 | Recorte geográfico | Global, com uma nota sobre o Brasil |
| 4 | Para quem | Quem projeta mídia e interação |
| 5 | O que já está descartado | O que já é comum em produto de massa — a régua da disciplina. Nenhuma outra exclusão |
| 6 | Viés desejado | Neutro |
| 7 | O que faria mudar de ideia | Evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada — só melhora o que existe |
| 8 | Quantas disrupções-raiz | **Não respondida.** Supus **3** e declarei (§12.2) |
| 9 | Posso navegar? | Sim. WebSearch e WebFetch de verdade; só cita o que abriu |

Perguntas condicionais (§1.2 da skill): **uma rodada**, e ela se resolveu sozinha porque a fronteira
com os vizinhos já vinha respondida no bloco da disciplina. A única incoerência candidata —
horizonte de cinco anos para tema que envolve hardware pesado — foi examinada e **mantida**: os três
deslocamentos deste mapa são de software, dado e arranjo comercial, não de fábrica de robô. O que a
decisão custa está dito na §7.2: risco de prazos curtos demais na primeira ordem.

### 12.2 O recorte fechado, como foi assumido

```
RECORTE FECHADO — assumido sem confirmação interativa (rodada automatizada)
  tema ................ o agente com corpo e o mundo em que ele aprende
  não é ............... simulação de sociedades (6), captura de realidade (10),
                        percepção de vocabulário aberto (11), nem o que já é
                        comum em produto de massa
  horizonte ........... 2031
  região .............. global, com nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... tecnologia madura, pela régua da disciplina
  viés ................ neutro
  falsificador ........ adoção além da maioria inicial (Rogers), ou ausência de ruptura
  raízes .............. 3
  navegação ........... sim
  SUPOSIÇÕES MINHAS ... (a) número de raízes = 3, não respondido na pergunta 8;
                        (b) "global" lido como "onde os artefatos são produzidos e
                        implantados hoje", o que na prática significa EUA, China e UE;
                        (c) confirmação do recorte dada por ausência de interlocutor
```

### 12.3 Fase 2 — a triagem de maturidade, item por item

Régua da disciplina primeiro; depois T1 a T5, na ordem; uma reprovação em T1 ou uma aprovação em T5
encerra.

| Candidata | Resultado | Teste que decidiu | Uma linha |
|---|---|---|---|
| ROS 2, `MoveIt 2`, `OMPL`, `pinocchio` | **MADURO** | T5 aprovado | Instalação padrão, documentação, contratação como habilidade de rotina |
| SLAM e navegação visual-inercial (`OpenVINS`) | **MADURO** | T5 aprovado | Mudou o possível há uma década; hoje é biblioteca |
| Simuladores físicos (`MuJoCo`, `Isaac Sim`, `habitat`, `AirSim`, `MetaDrive`, `Genesis`, `newton`, `PhysX`) | **MADURO como artefato** | T5 aprovado | Entram como substrato; o que rompe é quem escreve o conteúdo deles, não a existência deles |
| Planejamento de trajetória e controle clássico (`drake`) | **MADURO** | T1 reprovado | Faz melhor o que já se fazia; não muda o que é possível |
| Condução autônoma urbana (Waymo, `Apollo`) | **MADURO** | T5 aprovado | Preço, escala, falhas catalogadas e recall por software junto à autoridade |
| Braço industrial e cobot | **MADURO** | T5 aprovado | Densidade global de 132 por 10.000; infraestrutura |
| Teleoperação | **MADURO como técnica** | T5 aprovado | Décadas de uso; entra na raiz 3 pelo **arranjo comercial**, não pelo artefato |
| Drone com retorno automático / `MAVLink` / `RT-Thread` | **MADURO** | T5 aprovado | Consumo de massa e regulação já escrita |
| `MONAI` (imagem médica) | **FORA DO RECORTE** | — | Não é agente com corpo; ficou de fora por fronteira, não por maturidade |
| VLA generalista (`π0.7`, `GR00T`, `Gemini Robotics`, `Qwen-Robot`) | **DISRUPTIVO** | T1, T3, T4 aprovados; T5 reprovado | Torna sem valor a engenharia de célula; entra por mercado novo; falta confiabilidade medida |
| Modelo de mundo gerativo (`Cosmos 3`, `Genie 3`, `Qwen-RobotWorld`, `R2S2R`, `SceneSmith`) | **DISRUPTIVO** | T1, T3, T4 aprovados | Torna sem valor a autoria de cenário; entra por mercado novo; falta estado persistente |
| Agente generalista em mundo 3D (`SIMA 2`) | **EMERGENTE** | T1, T3, T4 aprovados | Entrou como evidência das raízes 1 e 2; não virou raiz para não invadir o tema 7 |
| Corpo barato e aberto + teleoperação vendida (`NEO`, `G1`, `Mornine`) | **DISRUPTIVO pelo arranjo** | T1 aprovado pela via do modelo de receita | Artefato maduro, arranjo novo; entra por mercado novo e pela baixa |
| `ROSClaw` (restrição física no laço de raciocínio) | **SINAL, não candidata** | T3 não apurado | Citado no catálogo da turma; não abri fonte primária, não sustenta afirmação |

**Three Horizons.** H1: ROS, SLAM, braço industrial, robotáxi. H2−: humanoide de recepção com
roteiro de marca (escora o arranjo atual de trabalho de serviço em vez de substituí-lo), e
simulador clássico com melhor renderização. H2+: VLA transferível, avaliação em banca, corpo de
referência aberto. H3: mundo gerativo com estado persistente, e o agente que atravessa mundos.

**Não houve recusa integral do tema.** A régua reprovou uma parte substantiva do que a turma trouxe
— e essa parte está nomeada na §3.1 em vez de escondida.

### 12.4 Fase 5 — o que morreu, e com qual prova

Nada desaparece em silêncio.

| `id` morto | Enunciado do rascunho | Prova | Por quê |
|---|---|---|---|
| `e2.2` | "O erro do robô deixa de ser falha de máquina e passa a ser mal-entendido de linguagem, e o registro do que foi dito vira prova" | **P6** | Verdadeiro só na litania. Abaixo da manchete não há mecanismo novo: a causa sistêmica da falha continua sendo a política e o dado, e registrar instrução já é prática em sistemas de voz. Trocar a **categoria** do erro sem trocar a **causa** é retórica |
| `e4.3` | "Ferramenta de autoria 3D passa a ser cobrada por variação gerada em vez de por assento" | **P1** | Extrapolação linear: mesmo ator (fornecedor de ferramenta), mesmo mecanismo (licenciamento), só outro volume. É "mais X" com nome de tendência |
| `e6.2` | "A teleoperação vira posto de trabalho deslocalizado, e a cadeia de atendimento se separa do lugar" | **P3** | Já aconteceu. Call center offshore tem duas décadas; pôr um corpo na outra ponta muda a experiência de quem é atendido, não o mecanismo econômico. O que sobra de novo já está em `e6` e `e6.1` |

**Rebaixamentos — seis, com a prova que os causou.**

| `id` | De | Para | Prova | Por quê |
|---|---|---|---|---|
| `e6` | confiança `alta` | `media` | **P4** | Existe força contrária forte e nomeada — privacidade doméstica e reação pública ao operador remoto — e não há razão clara para ela perder |
| `e5.1` | `media` | `baixa` | **P2** | Nenhum caso histórico sustenta a criação de uma prática pericial nova em cinco anos; a perícia de acidente aéreo levou décadas |
| `e1.1` | `media` | `baixa` | **P4** | O integrador é incumbente com contrato, relação e conhecimento de planta; ele tem meios de absorver a mudança em vez de ser deslocado por ela |
| `e3.1` | `media` | `baixa` | **P4** | Não existe mecanismo de atribuição que ligue uma trajetória dentro de um modelo a quem a gravou; sem isso, a reivindicação não tem alavanca |
| `e5.2` | `media` | `baixa` | **P5** | Depende da mesma precondição de `e5.1` — método aceito de reconstituição. Duas apostas na mesma perna |
| `e4.1` | sinal `forte`, confiança `alta` | `medio`/`media` | **P2** | O único artefato aberto é um conjunto acadêmico (`EgoCS-400K`); licenciamento de acervo de jogo como insumo de robótica não tem caso comparável com prazo medido |

**Efeitos que não entraram na árvore por regra de parada, e para onde foram.**

- *Robô doméstico que aprende sozinho com o morador* → **§6**, duas precondições não validadas.
- *Banca pública obrigatória antes da venda* → **§6**, duas precondições.
- *Licença de movimento com registro técnico* → **§6** (e o resíduo virou `e3.1.1`, em `fraco`).
- *Recall de política atravessando fabricantes* → **§5.1** e **§6**, porque exige duas raízes.
- *Certificação sintética de corpo barato* → **§5.1**, convergência de raízes 2 e 3.
- *Correção de robô por atualização remota depois de falha em via pública* → **§3.1**, porque já é
  presente, não efeito.

### 12.5 O que eu não consegui abrir, e o que isso custou

| Endereço | O que houve | Custo |
|---|---|---|
| `https://www.iso.org/standard/91469.html` | HTTP 403 | Não li a ficha oficial da ISO 25785-1; estágio e previsão de publicação ficaram fora do mapa, e o que há sobre a norma vem de cobertura secundária, marcada no texto |
| `https://www.solinftec.com/pt-br/solinftec-amplia-portfolio-de-robotica-e-apresenta-familia-de-robos/` | HTTP 403 | Não confirmei o anúncio dos modelos `Solix XT` e `XC` na Agrishow 2026; a nota brasileira usa só os números de fevereiro de 2025, que são mais antigos do que eu gostaria |
| `https://www.technology.org/2026/07/18/humanoid-robots-in-2026-what-is-actually-deployed/` | HTTP 403 | Perdi uma segunda fonte independente sobre implantação; ficou só o levantamento de 19/07/2026 |
| `https://arxiv.org/pdf/2606.20545` | Excedeu o limite de tamanho | Resolvido abrindo a página de resumo; os números do `WRBench` vêm de lá |
| `https://www.gov.br/anac/pt-br/noticias/2026/anac-apresenta-novo-regulamento-de-drones...` | Conexão derrubada | Não confirmei a estrutura de categorias Aberta/Específica/Certificada nem BVLOS; a afirmação foi retirada do corpo do mapa |

### 12.6 Pistas que apareceram e não entraram

Cada uma destas é plausível, nenhuma foi aberta, e por isso **nenhuma sustenta afirmação** deste
documento. Ficam registradas porque são os primeiros lugares para onde ir numa próxima rodada.

- `Gemini Robotics ER 2`, anunciado em **30/07/2026**, com entendimento de vídeo em tempo real e
  colaboração entre múltiplos robôs. Se confirmado, reforça `e2` e antecipa `e2.1`.
- Nova estrutura de categorias de operação de drone da ANAC (Aberta, Específica, Certificada), com
  BVLOS na Específica, e autorização de projeto para `DJI Dock 2` em **12/02/2026**.
- `RoboArena`, `RobotArena ∞`, `RoboWorld` e `RoboLab` — família de bancas de avaliação real e
  sim-to-real que apareceu repetidamente nas buscas e que eu li apenas por resumo.
- Estimativas de mercado de dado sintético para robótica (US$ 2,48 bi em 2026) e a afirmação de que
  políticas treinadas com 40% de dado sintético igualariam políticas treinadas com 100% de dado real
  (atribuídas a CMU e Stanford, sem referência rastreável no material que vi).
- `ZENOS Data` e `Troveo`, intermediários que vendem jogo licenciado como dado de treino
  corporificado. Se `e4.1` tiver um artefato comercial, é por aí.
- `GigaWorld-0`, `Lucid-XR`, `TWIST2`, `HumanoidUMI` — motores de dado e sistemas de captura sem
  robô, todos de 2025–2026.
- `UBTech` com meta declarada de 5.000 humanoides em 2026, e `Unitree` com 10 a 20 mil unidades
  planejadas — números de plano, não de entrega, e por isso fora.

### 12.7 Buscas que não deram em nada

- **Acidente atribuído ao simulador.** Procurei caso público em que a investigação tenha concluído
  que a causa estava no ambiente de treino, e não no robô ou na política. **Não encontrei nenhum.**
  O que existe é literatura de *método* de investigação de acidente com robô e um trabalho sobre
  acidente simulado de exoesqueleto. Isso é o motivo de o wildcard da §6 ser wildcard e não sinal.
- **Acordo comercial entre motor de jogo e robótica.** Procurei licenciamento explícito
  Unreal/Unity para treino de robô em 2026. Só achei material de marketing e intermediários; nenhum
  acordo nomeado. `e4.1` ficou em `medio`/`media` por causa disso.
- **Dado brasileiro de densidade de robôs na base da IFR.** O release de 08/04/2026 não traz Brasil
  nem América Latina.
- **Norma sobre divulgação de teleoperação.** Nenhuma, em nenhuma jurisdição, até 17/09/2026. É a
  precondição declarada da raiz 3, e ela está mesmo em aberto.

### 12.8 As quatro perguntas do teste cruzado, respondidas sobre esta rodada

1. **Fez perguntas antes de rodar?** **Sim, com ressalva.** As nove perguntas da Fase 1 estão na
   §12.1 e o bloco `RECORTE FECHADO` está na §12.2 — mas ele foi **assumido**, não confirmado, por
   ausência de interlocutor, e a pergunta 8 foi respondida por mim. A ressalva está também na §7.5.
2. **Separou novidade de comum, e recusou o comum?** **Sim.** A §12.3 nomeia o teste que reprovou
   cada item, e a §3.1 é inteiramente dedicada ao que foi recusado — incluindo o robotáxi, que é o
   artefato mais vistoso do tema e não virou raiz.
3. **Duvidou do próprio resultado?** **Sim.** Três efeitos mortos com prova nomeada e seis
   rebaixados, na §12.4; uma morte por raiz, cumprindo a cota; a §7 diz onde o mapa é fraco,
   inclusive contra o próprio procedimento; e a §8 registra cinco divergências factuais, duas delas
   sobre vigas do mapa.
4. **Saiu no formato?** **Sim.** Doze títulos `##`, bloco `roda:` em YAML válido com três níveis e
   `id` hierárquico, contadores do frontmatter conferidos contra a árvore final, e a autochecagem
   colada na §12.9.

### 12.9 A autochecagem, rodada e colada

Contagem de títulos literais:

```
$ grep -c "^## " tendencia-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md
12
```

Script de estrutura da skill (frontmatter, árvore, ordens, prazos monotônicos, cota de humildade):

```
faltam: nada
raizes: 3 (frontmatter diz 3 )
efeitos por ordem: {1: 7, 2: 14, 3: 11}
ordem 3 com confianca alta: 0 (cota: no maximo 1)
contadores batem: True
ids unicos: True 32
ordem 1 dentro do horizonte 2031 : True
```

Verificador do professor (`futurizacao-giordano/references/verificar.py`), com checagem de links:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 7 (frontmatter diz 7)
efeitos ordem 2: 14 (frontmatter diz 14)
efeitos ordem 3: 11 (frontmatter diz 11)
prazo > horizonte (2031) em ordens 1-2: 0
prazo > horizonte em ordem 3 (permitido, mas declare): 10
  [('e1.1.1', 2032), ('e1.2.1', 2033), ('e2.1.1', 2032), ('e3.1.1', 2033),
   ('e4.1.1', 2033), ('e4.2.1', 2033), ('e5.1.1', 2034), ('e6.1.1', 2032),
   ('e7.1.1', 2032), ('e7.2.1', 2033)]
confiança ordem 1: alta 2 · media 5 · baixa 0
confiança ordem 2: alta 0 · media 10 · baixa 4
confiança ordem 3: alta 0 · media 0 · baixa 11
  link não responde: https://www.anac.gov.br/.../resolucao-806
  link não responde: https://www.therobotreport.com/teleop-not-autonomy-the-path-for-1x-neo-humanoid/
  link não responde: https://www.therobotreport.com/waaymo-recalls-robotaxi-software-after-school-bus-safety-failures/
links da seção 11: 28/31 respondem (frontmatter diz fontes: 31)
RESULTADO: 1 problema(s) — corrija antes de entregar
```

**Três declarações sobre esta saída, porque o formato exige honestidade e não aprovação.**

1. **As dez datas de ordem 3 que passam de 2031 estão declaradas**, aqui e na §5.1: terceira ordem
   pode ultrapassar o horizonte, e a razão de ultrapassar é que ela é mais mediada, não mais
   importante. Ordens 1 e 2 estão inteiramente dentro de 2031.
2. **Os três links que "não respondem" respondem.** O verificador usa o agente padrão do `urllib`,
   que esses três servidores recusam. Conferido à mão, com agente de navegador:

   ```
   https://www.anac.gov.br/.../resolucao-806                                     -> 200
   https://www.therobotreport.com/teleop-not-autonomy-the-path-for-1x-neo-humanoid/ -> 200
   https://www.therobotreport.com/waaymo-recalls-robotaxi-software-after-school-bus-safety-failures/ -> 200
   ```

   Os três foram abertos e lidos por mim nesta sessão, e é de lá que vêm as afirmações sobre a
   Resolução 806, sobre a teleoperação do `NEO` e sobre o recall dos ônibus escolares. O
   `RESULTADO: 1 problema(s)` do verificador é **este** e só este.
3. **A contagem de `fontes: 31` diz a verdade**, e o critério foi estrito: só entrou na §11 o
   endereço que eu abri e li nesta sessão. O que apareceu em resumo de busca e não foi aberto está
   na §12.6, fora da lista, e não sustenta nenhuma frase.
