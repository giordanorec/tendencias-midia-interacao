---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: alpa2
zona_de_interesse: Simulação e mundos
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 16
efeitos_ordem_3: 11
tecnologias_citadas: [NVIDIA Cosmos 3, Genie 3, SIMA 2, Gemini Robotics 2, Gemini Robotics On-Device, pi0.5, Isaac Sim, IsaacLab, MuJoCo, Genesis, habitat-sim, MetaDrive, AirSim, drake, MoveIt 2, ROS 2, Solinftec Solix, WorldModelBench, PhyWorldBench]
fontes: 7
confianca: media
experimento: Uma bancada de "divergência de mundo" que roda a mesma tarefa em três mundos — gerado, simulado e real — e mede onde o comportamento do agente se separa.
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

A IA física está trocando de fundamento. Até aqui, ensinar uma máquina a agir no mundo exigia
construir o mundo antes: uma engine, uma malha de colisão, uma física escrita à mão, um time de
3D. O que mudou entre 2025 e 2026 é que o ambiente de treino passou a ser **gerado** por um
modelo, e que a política que controla o corpo passou a ser **transferível** entre corpos
diferentes. Cosmos 3 (NVIDIA, 31/05/2026) gera vídeo, som e **ação** no mesmo sistema; Genie 3
(DeepMind) devolve um mundo navegável em tempo real a partir de uma frase; Gemini Robotics 2
adapta o mesmo modelo a uma nova embodiment bi-braço com poucas horas e menos de 200 exemplos;
SIMA 2 opera mundos 3D que nunca viu, pela mesma tela que um humano usa, e gera as próprias
tarefas e recompensas.

Três disrupções-raiz sobreviveram ao teste de corte: (1) o **modelo de mundo gerativo como
ambiente de treino**, (2) a **política generalista transferível entre corpos** e (3) o **agente
que opera qualquer mundo 3D pela interface humana**, sem acesso ao código. ROS, SLAM, MoveIt,
planejamento de trajetória e a própria ideia de sim-to-real ficaram de fora: são maduros, e
entram na seção 3 como estado atual.

O que o mapa diz para quem projeta mídia e interação, em uma frase: até 2031 o trabalho deixa de
ser **modelar um mundo** e passa a ser **especificar a distribuição de mundos** — e a peça de
design mais disputada não é o cenário, é o currículo. O maior risco do mapa não é otimismo sobre
capacidade; é otimismo sobre **confiabilidade**. Quase todo efeito de 2ª ordem aqui depende de o
mundo gerado ser fiel o bastante para que o comportamento aprendido nele sobreviva ao real — e
os benchmarks de 2026 mostram que ainda não é.

## 2. O tema

Agentes corporificados são sistemas de IA que agem num corpo — braço, veículo, drone, humanoide
— e não apenas numa tela. "IA física" é o rótulo comercial disso. O elemento que a disciplina
pôs no centro, e que este mapa mantém no centro, não é o robô: é **o mundo onde ele aprende**.

Historicamente, esse mundo foi um simulador construído: Isaac Sim, MuJoCo, AirSim, habitat-sim,
MetaDrive. Construído quer dizer escrito — alguém modelou a geometria, escolheu o solver de
física, definiu os materiais. O que está emergindo é o **modelo de mundo**: um modelo que
*gera* o ambiente em vez de renderizá-lo a partir de uma descrição feita à mão. A diferença é de
natureza, não de grau. Num caso, o mundo é um artefato de engenharia com custo marginal alto;
no outro, é uma saída de modelo com custo marginal quase nulo e fidelidade incerta.

**Recorte declarado.** Horizonte 2031. Público: quem projeta mídia e interação — design de
jogo, de interface, de experiência, de mundo. Recorte global, com uma nota sobre o Brasil.
Descartado de início apenas o que já é comum em produto de massa (a régua da disciplina).
Viés declarado: neutro. Nenhuma disrupção suspeita foi dada de antemão.

**Fronteiras.** Simulação de *sociedades* (agentes sociais, economias sintéticas) é outro tema.
Captura do mundo real em 3D (gaussian splatting, fotogrametria, NeRF) é outro tema. Percepção
genérica (segmentar qualquer coisa) é outro tema. Aqui o objeto é o **agente com corpo e o
mundo em que ele aprende**.

## 3. Onde isso está hoje

### O que já existe e funciona (maduro — não entra como disrupção)

- **ROS / ROS 2, MoveIt 2, OMPL, pinocchio, Lanelet2, MAVLink, RT-Thread.** A camada de
  middleware, planejamento de trajetória, cinemática e comunicação com drones é estável,
  documentada e amplamente adotada. Passa no teste 1 do critério (torna mais barato algo que já
  se fazia) e falha no teste 3 (não falta nada para se concretizar).
- **SLAM e navegação visual-inercial** (`OpenVINS` e congêneres). Resolvido o bastante para
  produto.
- **Simulação física construída.** MuJoCo, Isaac Sim / IsaacLab, PhysX, `newton`, Genesis,
  habitat-sim, AirSim, MetaDrive, `drake`. Maduro como prática: treinar em simulação antes de
  tocar o real (*sim-to-real*) é rotina em robótica desde meados da década de 2010. **Sim-to-real
  não é a disrupção deste mapa** — é o pano de fundo dela.
- **Robô industrial de tarefa fixa.** Célula fechada, trajetória programada, décadas de uso.

### O que existe mas ainda não pegou

- **Humanoide generalista em operação econômica.** Há unidades em campo e pilotos com
  montadoras, mas as ordens de grandeza divergem muito entre fontes (ver seção 8) e o padrão
  declarado pelos próprios laboratórios continua sendo tarefa estreita com supervisão. Gemini
  Robotics 2 declara, no texto do próprio DeepMind, que "manipulação destra multi-dedo permanece
  desafiadora" e que os robôs "têm mais a avançar em velocidade de movimento".
- **Modelo de mundo como simulador confiável.** Genie 3 mantém consistência por "alguns
  minutos", a 720p e 24 fps, com memória visual de cerca de um minuto; o DeepMind lista
  explicitamente como limitação o espaço de ação restrito, a dificuldade com múltiplos agentes
  independentes e a imprecisão geográfica. Isso é ótimo para prototipar e ruim para certificar.

### Quem está construindo

- **NVIDIA** — Cosmos (plataforma de world foundation models, papel de 2025 e Cosmos 3 em
  31/05/2026, arquitetura *mixture-of-transformers*, pesos abertos em Hugging Face e GitHub),
  Isaac, GR00T. Formou a *Cosmos Coalition* com Agile Robots, Black Forest Labs, Generalist,
  LTX, Runway e Skild AI.
- **Google DeepMind** — Genie (modelos de mundo), SIMA 2 (agente corporificado generalista sobre
  Gemini), Gemini Robotics / Gemini Robotics-ER / On-Device (VLA).
- **Physical Intelligence** — família π (π0, π0.5 com generalização em mundo aberto, π0.7).
- **Fabricantes de corpo** — Figure, Unitree, AgiBot, Apptronik, Agility, Tesla (Optimus).
- **Comunidade aberta** — MuJoCo, Genesis, habitat, MetaDrive, `drake`, e a longa cauda de 241
  ferramentas de sistemas embarcados/navegação levantada pela turma.

### Brasil (nota)

O Brasil não aparece na fronteira dos modelos de mundo, e aparece no **uso**: o agronegócio é
onde a IA física brasileira tem corpo. A Solinftec apresentou na Agrishow 2026 (Ribeirão Preto,
27/04 a 01/05, ~800 marcas, 197 mil visitantes previstos) os robôs autônomos Solix XT e XC sob o
rótulo explícito de "IA física", ao lado do Hural Rover (pulverizador autônomo elétrico) e da
AGRA (robôs terrestres para detecção precoce de doença na soja, saída da UnB). O padrão
brasileiro é claro e vale para o mapa inteiro: **importamos o modelo, geramos o dado de
operação**. É a assimetria que reaparece no efeito e4.1.1.

## 4. As disrupções-raiz

### D1 — O modelo de mundo gerativo vira o ambiente de treino

- **O que rompe.** Quem pode produzir um ambiente de treino. Hoje é quem tem engine, artista 3D e
  engenheiro de física; passa a ser quem sabe escrever o que quer ver. Muda também *o que é* um
  ambiente: de artefato versionado e inspecionável para saída de modelo, probabilística.
- **Por que agora, e não há cinco anos.** Cosmos 3 (31/05/2026) junta raciocínio visual, geração
  de mundo e **predição de ação** num sistema só, com pesos abertos; Genie 3 entrega mundo
  navegável em tempo real a 24 fps. Em 2021 não havia nem o modelo nem o dado: Cosmos 3 é
  treinado em "bilhões de amostras" de texto, imagem, vídeo, som e **trajetórias de ação** — essa
  última modalidade é a nova.
- **O que ainda falta.** Consistência de horas em vez de minutos; física auditável (os benchmarks
  de 2026 — WorldModelBench, PhyWorldBench, PhyScore/LoViF — existem justamente porque as
  violações físicas são sutis e escapam às métricas perceptuais); e um método aceito para provar
  que o que foi aprendido no mundo gerado vale no mundo real. → **emergente, aceita.**

### D2 — A política generalista transferível entre corpos

- **O que rompe.** O acoplamento entre robô e programa. A unidade de engenharia deixa de ser "o
  robô X, programado para a tarefa Y" e passa a ser "o modelo, adaptado ao corpo X". Muda quem
  precisa de quem: o fabricante de corpo deixa de ser o dono do comportamento.
- **Por que agora.** Gemini Robotics 2 declara adaptação a novas embodiments bi-braço "com apenas
  algumas horas" e "tipicamente menos de 200 exemplos", inclusive entre corpos drasticamente
  diferentes em forma, sensores e graus de liberdade; π0.5 demonstra generalização em mundo
  aberto (limpar uma cozinha nunca vista). Há cinco anos, política de robô era treinada por
  tarefa e por corpo.
- **O que ainda falta.** Destreza multi-dedo, velocidade de movimento, confiabilidade na cauda
  longa, e economia: os números de implantação em campo divergem por uma ordem de grandeza entre
  fontes, o que por si só indica que não há escala estabilizada. → **emergente, aceita.**

### D3 — O agente generalista que opera qualquer mundo 3D pela interface humana

- **O que rompe.** A necessidade de integração. O agente não usa API, não lê o estado do jogo:
  vê a mesma tela que a pessoa vê e usa os mesmos controles. Qualquer software 3D vira, sem
  consentimento nem adaptação, um ambiente operável — e um ambiente de treino.
- **Por que agora.** SIMA 2 (dezembro/2025, sobre Gemini) raciocina sobre objetivo alto,
  conversa, aceita instrução por imagem, generaliza para ambientes não vistos e — o ponto — usa
  o próprio Gemini para **gerar tarefas e recompensas**, aprendendo sozinho num mundo novo. O que
  faltava em 2021 era um modelo de fundação capaz de sustentar o raciocínio por trás da ação.
- **O que ainda falta.** O desempenho ainda não é humano, apenas "substancialmente mais perto";
  a transferência para corpo físico não está demonstrada; e a disponibilidade é de *research
  preview*, não de produto. → **emergente, aceita.**

### Candidatas rejeitadas pelo critério do Passo 2

| Candidata | Teste que falhou | Para onde foi |
|---|---|---|
| Sim-to-real | Teste 3: nada falta, é prática corrente há uma década | Seção 3 |
| ROS 2 / MoveIt / SLAM | Teste 1: torna mais barato o que já se fazia | Seção 3 |
| Robô humanoide (o corpo em si) | Teste 1: é forma, não ruptura — o que rompe é a política que o controla | Absorvida em D2 |
| Simulação acelerada por GPU | Teste 1: mais rápido, mesma natureza | Seção 3 |
| Enxame de drones para resgate | Teste 2: nenhum limiar concreto cruzado em 2025-26 | Seção 6, como wildcard |

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O modelo de mundo gerativo vira o ambiente de treino
    efeitos:
      - id: e1
        ordem: 1
        efeito: Fabricar um ambiente de treino deixa de exigir equipe de engine e passa a ser um pedido em linguagem natural.
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge a função de curador de currículo, que escreve a distribuição de mundos em vez de modelar um mundo.
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formação de quem projeta mundos migra de modelar geometria para especificar variação, raridade e modo de falha.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A escassez em robótica desloca-se de dados para avaliação, porque gerar experiência fica barato e saber se ela vale continua caro.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Forma-se um mercado de auditoria de simulação, com terceiros atestando a cobertura do mundo sintético usado no treino.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A divergência entre mundo gerado e mundo real vira o defeito principal a ser medido e gerenciado.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Contratos e apólices de robótica passam a exigir rastro do ambiente de treino: qual mundo, qual versão, qual cobertura.
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A responsabilidade por acidente se distribui ao longo da cadeia que forneceu o mundo, e deixa de recair só sobre o fabricante do robô.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Prova em simulação perde valor como argumento comercial isolado e passa a exigir relatório de reprodução real-to-sim.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e3
        ordem: 1
        efeito: O mundo gerado deixa de ser apenas treino e vira mídia: cenário, interface e produto navegável em tempo real.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Jogos e audiovisual passam a entregar espaço navegável em vez de plano fixo, e a pipeline de asset encolhe no meio.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A autoria se desloca de ter feito o cenário para ter definido as regras do lugar.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O custo marginal de um mundo cai o bastante para que mundos de uso único sejam descartados após uma sessão.
            sinal: fraco
            prazo: 2030
            confianca: media
  - disrupcao: A política generalista transferível entre corpos
    efeitos:
      - id: e4
        ordem: 1
        efeito: Adaptar um modelo de controle a um robô novo passa a custar horas e centenas de exemplos, não meses de engenharia.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O hardware robótico se comoditiza em parte, e o valor migra para o modelo e para os dados de operação.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Integradores brasileiros passam a competir por dado de operação local em cultura, clima e chão de fábrica daqui, não por mecânica.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Aparece uma camada de distribuição de habilidades, com comportamento entregue como pacote atualizável e não como firmware.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A cadeia de suprimento de comportamento vira superfície de risco própria, com habilidade envenenada no lugar de dependência maliciosa.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A interface de comando de máquina passa a ser linguagem natural mais demonstração, em vez de programa.
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Quem opera a máquina volta a ser quem conhece a tarefa, e não quem sabe programar o controlador.
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A formação técnica de operação se reorganiza em torno de instruir, supervisionar e recusar, e não de programar trajetória.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A instrução ambígua vira classe própria de incidente, e projetar confirmação e recusa no mundo físico entra no escopo do design de interação.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e6
        ordem: 1
        efeito: A confiabilidade, e não a capacidade, torna-se o gargalo declarado da IA física.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A regulação de máquina exige avaliação por organismo terceiro para componentes de segurança com comportamento auto-evolutivo.
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O regime europeu vira padrão de fato para exportação, e fabricantes de fora o adotam por default em vez de manter duas linhas.
                sinal: fraco
                prazo: 2030
                confianca: media
          - id: e6.2
            ordem: 2
            efeito: Os sistemas em produção se estabilizam em autonomia estreita com supervisão remota, em vez de generalista autônomo.
            sinal: medio
            prazo: 2030
            confianca: media
  - disrupcao: O agente generalista que opera qualquer mundo 3D pela interface humana
    efeitos:
      - id: e7
        ordem: 1
        efeito: Qualquer software 3D vira ambiente operável por agente sem integração, API ou consentimento de quem o fez.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Jogos e simuladores passam a ser projetados sabendo que há um leitor não humano diante da tela.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A interface gráfica se torna protocolo de fato entre humanos e máquinas, e legibilidade por máquina converge com acessibilidade.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O mundo de jogo vira instrumento barato de avaliação de agente, por já ser populado, medido e ter objetivo explícito.
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e8
        ordem: 1
        efeito: O agente aprende sozinho em mundo novo porque outro modelo gera as tarefas e as recompensas.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O custo de produzir dado de comportamento cai e se converte em custo de computação.
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O gargalo econômico da IA física passa a ser energia e capacidade de GPU, e não mão de obra de anotação e teleoperação.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Aparece deriva de objetivo, com o agente otimizando a recompensa que outro modelo inventou em vez da tarefa pedida.
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Auditar o objetivo, e não apenas o comportamento observado, entra no trabalho de quem projeta sistemas interativos.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o YAML não diz

**A tensão central do mapa é entre e1 e e2.** O mesmo movimento que torna o mundo barato de
produzir (e1) torna o mundo difícil de confiar (e2). São efeitos da mesma disrupção puxando em
direções opostas, e a resolução dessa tensão decide quase tudo depois: se a fidelidade for
resolvida, e1.2 e e2.1 se fundem num regime de certificação e o mapa acelera; se não for, o
modelo de mundo fica confinado a prototipagem e mídia (e3) e nunca chega à produção robótica.
Não é um detalhe: é o nó do qual dependem dezesseis dos trinta e cinco efeitos.

**e6 é o único efeito com data legal.** O Regulamento (UE) 2023/1230 se aplica a partir de
20/01/2027 e trata explicitamente de máquina móvel autônoma e de módulos de IA que asseguram
funções de segurança. Isso dá a e6.1 uma ancoragem que nenhum outro efeito deste mapa tem — e
é, provavelmente, o item mais confiável aqui. O resto é inferência; esse é calendário.

**e5 e e7 se cruzam de um jeito desconfortável para quem projeta interação.** Em e5, a pessoa
instrui a máquina por linguagem. Em e7, a máquina lê a interface feita para a pessoa. Somados,
a interface gráfica deixa de ter um público só — e as duas leituras têm requisitos diferentes.
Um ícone ambíguo, que um humano resolve pelo contexto, vira erro de execução física. Este é o
efeito de segunda ordem mais diretamente acionável pelo público deste mapa, e por isso ele
aparece duas vezes (e5.2 e e7.1.1).

**O que o formato esconde.** A roda trata cada ramo como independente, e eles não são: e6.2
(autonomia estreita com supervisão) é justamente o que impede e4.1 (comoditização do hardware)
de se completar, porque supervisão remota reintroduz custo operacional por unidade. Um mapa em
árvore não representa esse freio; a prosa precisa dizê-lo.

## 6. Sinais fracos e wildcards

**Sinais fracos** — coisas pequenas hoje, com peso desproporcional se crescerem:

1. **A ação virou modalidade de treino.** Cosmos 3 lista "trajetórias de ação" ao lado de texto,
   imagem, vídeo e som nos dados de treino. É uma linha num anúncio, mas significa que o
   comportamento passou a ser tratado como conteúdo — com tudo que isso implica de licença,
   proveniência e direito sobre o gesto gravado.
2. **Autoaperfeiçoamento por recompensa gerada.** SIMA 2 usa Gemini para inventar a tarefa e
   julgar o resultado. É o fechamento do ciclo sem humano no meio, e hoje aparece como nota
   técnica, não como problema de governança. Em 2031 será o inverso.
3. **A restrição física entrando no raciocínio.** Ferramentas como `ROSClaw` tratam a limitação
   do corpo como parte do modelo de execução, não como verificação posterior. Se isso
   generalizar, "saber o que meu corpo pode" vira propriedade do modelo, e não do controlador.
4. **A coalizão aberta.** A Cosmos Coalition junta laboratório de robótica com estúdio de vídeo
   gerativo (Runway, Black Forest Labs, LTX). O sinal fraco é institucional: robótica e
   audiovisual passaram a comprar o mesmo insumo.

**Wildcards:**

- **Alto impacto, baixa probabilidade — o acidente cuja causa está no simulador.** Um incidente
  sério cuja investigação conclua que o robô agiu corretamente segundo um mundo que estava
  errado. O efeito não é o acidente: é que a peça auditada deixa de ser a máquina e passa a ser
  o modelo que gerou o treino. Isso colapsa e2.1 e e2.1.1 de 2030-31 para dezoito meses depois
  do evento, e cria a auditoria de simulação (e1.2.1) por via regulatória em vez de mercado.
- **Alto impacto, baixa probabilidade — vazamento de mundo proprietário.** Um modelo de mundo
  treinado com captura de instalações reais reproduz, a partir de um prompt, o interior
  reconhecível de uma fábrica, hospital ou casa. Mundo gerado vira questão de privacidade
  espacial, categoria que hoje não existe.
- **Baixa probabilidade, impacto invertido — o enxame que funciona antes do humanoide.** Resgate
  em incêndio por enxame de drones (o *wildcard* que a turma trouxe sem querer) entrega valor
  público visível anos antes do humanoide de propósito geral. Se isso acontecer, a narrativa da
  IA física troca de corpo: o público associa "robô que salva" a muitos corpos pequenos e
  descartáveis, e não a um corpo humanoide — e o investimento segue a narrativa.
- **O que derruba o mapa inteiro.** Um resultado que mostre que política treinada
  predominantemente em mundo gerado tem teto de desempenho abaixo da treinada em simulador
  construído. Não é implausível: a fidelidade física é exatamente o ponto fraco medido pelos
  benchmarks de 2026. Nesse caso D1 vira ferramenta de mídia e prototipagem, não de robótica, e
  metade do mapa muda de seção.

## 7. Contra o próprio mapa

**1. Qual efeito é só extrapolação linear do presente?**

`e1` e `e8.1` são os piores nesse quesito. Os dois pegam uma curva de custo caindo e a esticam.
"Gerar mundo fica barato, logo todo mundo gera mundo" ignora que o custo dominante pode migrar
para verificação — que é precisamente o que `e1.2` diz, no mesmo mapa. Mantidos, mas com a
ressalva: se `e1.2` estiver certo, `e1` não produz a democratização que sugere, e sim uma
concentração em quem consegue pagar a avaliação. `e3.2` (mundos descartáveis) é o caso mais
puro de extrapolação e foi **rebaixado** de confiança média para sinal fraco durante esta etapa.

**2. Qual efeito assume velocidade de adoção sem precedente?**

`e4.1` — comoditização do hardware robótico até 2030. O caso comparável mais próximo é o PC
compatível com IBM nos anos 1980, onde o software padronizado comoditizou a máquina; ali levou
cerca de uma década a partir de um padrão estabelecido, e em robótica **não há padrão
estabelecido** — cada corpo tem sensores, graus de liberdade e segurança próprios, e a segurança
é regulada por corpo, não por modelo. **Efeito revisado:** o prazo original que escrevi era 2029;
foi movido para 2030 e a confiança, de alta para média. E mesmo assim continua sendo o efeito
mais frágil dos oito de primeira ordem.

`e7` também assume velocidade suspeita. A analogia usada implicitamente é a do agente que opera
navegador — mas mundo 3D tem estado contínuo, tempo real e sem desfazer. Marcado: **não encontrei
precedente comparável** para adoção em massa de agente operando interface 3D.

**3. Qual disrupção-raiz pode simplesmente não se concretizar?**

**D1 é a mais vulnerável.** Ela depende de um salto de fidelidade que ninguém demonstrou: das
limitações que o próprio DeepMind declara (minutos de consistência, espaço de ação restrito,
dificuldade com múltiplos agentes) até "ambiente de treino confiável para máquina que opera
perto de gente" há uma distância que não é obviamente questão de escala. Se D1 não se
concretizar como ambiente de treino, ela sobrevive como **mídia** — e1 e e3 continuam de pé,
e1.2, e2.1 e e2.1.1 caem.

**D2 é a mais robusta**: já tem demonstração pública, número declarado (menos de 200 exemplos
para nova embodiment) e mais de um laboratório independente chegando ao mesmo lugar.

**D3 é a mais incerta em prazo, não em direção**: a capacidade está demonstrada, a distribuição
não. Se ficar em *research preview* até 2031, e7 e e8 recuam inteiros para depois do horizonte.

O mapa **não** desmorona inteiro se uma cair, porque D2 sustenta sozinha o ramo e4-e5-e6 — que é
o ramo com mais consequência prática para quem projeta interação. Desmorona se **D2** cair, e
D2 é justamente a mais bem evidenciada.

**4. Que viés entrou aqui?**

- **Viés de fonte, o mais grave.** Cinco das sete fontes lidas são de quem vende a tecnologia
  (NVIDIA e DeepMind). Nenhum anúncio de laboratório declara o que não funciona com o mesmo
  rigor com que declara o que funciona. Compensei citando as limitações que eles próprios
  escrevem — mas limitação autodeclarada é piso, não teto.
- **Viés declarado pelo usuário:** neutro, sem preferência. Nenhuma disrupção suspeita foi
  fornecida, o que reduz viés de confirmação e aumenta o risco de eu ter reproduzido a agenda
  dos anúncios recentes — que é exatamente o que aconteceu na primeira passagem (ver seção 8).
- **Viés de recência.** Três dos quatro marcos citados são de 2026. Um mapa montado em janeiro
  teria disrupções-raiz diferentes, e isso deveria incomodar mais do que incomoda.
- **Suposições assumidas por falta de resposta:** horizonte, público e recorte vieram
  declarados; "descartado de início" ficou restrito à régua da disciplina; nenhuma pergunta ficou
  sem resposta nesta rodada, então não há suposição substituindo entrevista.

**Efeitos descartados nesta etapa** (registro obrigatório): três foram cortados e dois revisados.
Ver seção 12.

## 8. O que a máquina errou

**1. Classifiquei sim-to-real como disrupção-raiz na primeira passagem.** O enunciado do tema
apresenta o simulador e o sim-to-real como "a técnica que permite isso", e eu comecei montando a
roda com sim-to-real no centro. Aplicando os três testes por escrito: o que rompe? Nada — é
prática corrente em robótica há uma década. O que falta para se concretizar? Nada. É **maduro**.
Foi movido para a seção 3. É o mesmo erro documentado em `DUVIDAS.md` para o monitor contínuo de
glicose: fato correto, categoria errada, e nada no texto gerado levantava bandeira.

**2. Quase citei "mais de 700 robôs Solinftec em campo".** O número apareceu no resumo de um
motor de busca atribuído a uma matéria da Forbes Brasil. Abri a matéria: **o número não está
lá**. O texto fala dos Solix XT e XC e do rótulo "IA física", e não dá quantidade de robôs em
campo. Motivo da desconfiança: número redondo, atribuído a uma fonte que eu ainda não tinha
aberto. O número saiu do documento; ficou só o que a página sustenta.

**3. Números de implantação de humanoides: descartados por divergência.** Resumos de busca
apresentaram, lado a lado, "Figure passou de 10.000 implantações", "Tesla passou de 50.000
Optimus acumulados" e, na mesma página, "produção do Optimus em Fremont ainda não começou em
meados de julho de 2026". Três afirmações que não cabem juntas, nenhuma delas de fonte primária
que eu tenha aberto. Não usei nenhuma. A seção 3 diz apenas que as ordens de grandeza divergem —
que é o que eu de fato sei. Perde-se concretude; ganha-se não inventar escala.

**4. Inflei a confiança de e4.1.** Escrevi "alta / 2029" sem caso comparável. No Passo 6, ao ser
obrigado a nomear o precedente, o único que encontrei (PC compatível) tinha um padrão
estabelecido que a robótica não tem. Corrigido para média / 2030. O sintoma foi ter escrito a
confiança antes de procurar o comparável.

**5. Tentei atribuir ao paper do SIMA 2 uma limitação declarada.** Ao ler a página do arXiv, a
seção de limitações explícitas não aparece no resumo disponível. Registro como ausência, não
como limitação inexistente: **não verifiquei** o que o SIMA 2 declara como limitação, e por isso
a seção 3 não afirma nada a respeito.

**6. A fronteira entre 2ª e 3ª ordem em e6.1 é discutível.** O Regulamento (UE) 2023/1230 já
existe e já tem data — chamá-lo de "efeito de 2ª ordem" da disrupção é forçado: ele é anterior a
ela. Mantive na 2ª ordem porque o que o mapa afirma é o *encontro* entre o regulamento e o
comportamento auto-evolutivo, não o regulamento. Mas é o ponto do mapa em que a numeração das
ordens é mais arbitrária, e quem ler deve saber disso.

## 9. Três cenários para 2031

### Provável — "a simulação virou papelada"

Em 2031, gerar um mundo custa pouco e provar que ele serve custa muito. Modelos de mundo estão
em toda parte na fase de prototipagem — em estúdios, em laboratórios, na sala de aula — e em
quase nenhum lugar na certificação. Quem coloca máquina perto de gente ainda treina em simulador
construído, versionado e auditável, e usa o mundo gerado para gerar variação em cima daquilo. O
Regulamento europeu, aplicável desde janeiro de 2027, se consolidou como o formato do dossiê que
todo mundo entrega, dentro e fora da UE. Os robôs que funcionam são de autonomia estreita com
supervisão remota, e o humanoide generalista continua a dezoito meses de distância, como está
desde 2024. Para quem projeta mídia e interação, a mudança real não foi o robô: foi que o mundo
navegável virou um formato de entrega comum, e que a interface passou a ser lida por dois tipos
de leitor.

### Desejável — "o mundo virou coisa auditável"

Em 2031, existe uma prática estabelecida de declarar em que mundo um agente aprendeu — algo como
uma ficha técnica do ambiente: que distribuição, que cobertura, que casos raros, que modos de
falha, quem verificou. Isso não nasceu de regulação sozinha: nasceu porque seguradora e
comprador passaram a pedir, e porque houve ferramenta aberta para produzir a ficha. O efeito
lateral foi bom para quem projeta: descrever um mundo em termos de variação e falha virou uma
competência de design, ensinada, e não um subproduto de engenharia. O Brasil entrou por onde
tinha vantagem — o dado de operação em agricultura tropical, que não existe em nenhum dataset do
Norte — e passou a exportar mundo, não só comprar modelo.

**O que teria que acontecer para chegar lá:** que os benchmarks de fidelidade física de 2026
virem norma antes de virar marketing; que pelo menos um grande fornecedor publique a ficha do
mundo de treino por vontade própria, criando o padrão antes da obrigação; e que a auditoria de
simulação nasça como prática aberta e não como serviço de três consultorias.

### Indesejável — "a caixa-preta ganhou um corpo"

Em 2031, políticas generalistas controlam máquinas em espaços com gente, treinadas em mundos
gerados que ninguém consegue inspecionar, porque o mundo não existe como artefato: existe como
peso de modelo. Quando algo dá errado, a investigação não tem o que abrir. A responsabilidade se
dilui entre quem fez o corpo, quem fez a política, quem gerou o mundo e quem escreveu o prompt —
e, na prática, recai sobre o operador humano que estava supervisionando e "deveria ter
intervindo". O trabalho físico não desapareceu: virou supervisão remota de muitas máquinas ao
mesmo tempo, mal paga, com a responsabilidade legal toda concentrada na ponta mais fraca.

**Sinal precoce, que dá para observar antes de 2029:** contratos de fornecimento que transfiram
ao operador a responsabilidade por falha de política — a cláusula aparece bem antes do acidente.
O segundo sinal é a ausência: se em 2028 nenhum fornecedor grande publicar nada sobre a
composição do mundo de treino, é porque a opacidade virou posição de mercado, não limitação
técnica.

## 10. O experimento

**A bancada de divergência de mundo.**

**O que é.** Uma tarefa única e boba — empurrar um objeto sobre uma mesa até uma marca, com um
obstáculo no caminho — executada pelo mesmo agente em três ambientes: (a) um mundo **gerado** por
modelo de mundo a partir de uma descrição em texto; (b) o mesmo ambiente **construído** em
simulador físico clássico (MuJoCo ou MetaDrive, dependendo do corpo escolhido); (c) uma versão
**física** improvisada, com um braço barato ou mesmo um carrinho, filmada. Registra-se, das três,
a mesma coisa: trajetória, tempo, contatos, falhas. O produto do experimento não é o agente
funcionando: é **o gráfico de onde as três curvas se separam**, e sob que perturbação (atrito
diferente, objeto mais leve, obstáculo deslocado, iluminação).

**Que pergunta sobre o futuro ele ajuda a responder.** A do nó do mapa: a divergência entre mundo
gerado e mundo real é ruído (some com escala) ou viés (é sistemática, tem direção)? Se for
sistemática e nomeável — "o mundo gerado subestima atrito", por exemplo — então a ficha técnica
do ambiente do cenário desejável é construível hoje, por gente sem laboratório. Se for ruído sem
padrão, `e1.2` e a auditoria de simulação são muito mais difíceis do que este mapa assume.

**Que tecnologia emergente ele usa, e por que a madura não serve.** Precisa de um modelo de mundo
gerativo (Genie 3, Cosmos ou equivalente aberto) no ramo (a) — é justamente a peça emergente. Um
simulador construído sozinho não serve porque ele *é* o termo de comparação: sem o ramo gerado,
o experimento vira mais um estudo de sim-to-real, que é exatamente o maduro que este mapa tirou
da seção 4. E não serve rodar só no gerado, porque sem o real não há divergência a medir.

**O que faria quem testar mudar de ideia sobre o mapa.** Duas saídas mudam o mapa em direções
opostas. Se a divergência for pequena e não aumentar com a perturbação, D1 está mais madura do
que este documento diz, os prazos de e1 e e1.2 se antecipam, e a hipótese do cenário indesejável
(opacidade como posição de mercado) fica mais provável, porque não haverá motivo técnico para
abrir a caixa. Se a divergência for grande e **imprevisível** — direção diferente a cada
regeneração do mesmo prompt —, então o modelo de mundo não é ambiente de treino coisa nenhuma
neste horizonte, D1 vira mídia (e3), e metade da roda desce para depois de 2031.

## 11. Fontes

Sete fontes foram efetivamente abertas e lidas. Tudo que não está amparado por elas está marcado
no texto como inferência ou especulação da própria skill.

1. `https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai`
   — Sustenta: a data (31/05/2026), a arquitetura *mixture-of-transformers*, a geração nativa de
   texto, imagem, vídeo, som e **ação**, os pesos abertos e a composição da Cosmos Coalition.
   Confiabilidade: material de imprensa do fabricante — os fatos de produto e data são
   verificáveis, as alegações de desempenho ("de meses para dias") são do vendedor e foram
   tratadas como tal.

2. `https://arxiv.org/abs/2501.03575`
   — Sustenta: a tese do *world foundation model* como "gêmeo digital do mundo" ao lado do gêmeo
   digital da política, e os componentes da plataforma (curadoria de vídeo, tokenizador,
   pós-treino) com pesos abertos. Confiabilidade: relatório técnico de laboratório corporativo em
   preprint, sem revisão por pares; descreve o método com detalhe suficiente para ser checado.

3. `https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/`
   — Sustenta: 720p, 24 fps, consistência de alguns minutos, memória de cerca de um minuto, e —
   o mais útil — as **limitações declaradas** (espaço de ação restrito, múltiplos agentes,
   imprecisão geográfica, texto ilegível, duração curta) e o uso com o agente SIMA.
   Confiabilidade: blog do laboratório; a seção de limitações é o que dá peso à fonte, porque é
   contra o interesse de quem escreve.

4. `https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/`
   — Sustenta: controle de corpo inteiro, colaboração multi-robô, adaptação a nova embodiment
   bi-braço em horas com menos de 200 exemplos, e as limitações declaradas (destreza multi-dedo,
   velocidade). Confiabilidade: mesma ressalva do item 3; os números de adaptação são
   autodeclarados e não reproduzidos por terceiros.

5. `https://arxiv.org/abs/2512.04797` (SIMA 2)
   — Sustenta: agente corporificado generalista sobre Gemini, instrução por linguagem e imagem,
   generalização para ambientes não vistos, e o autoaperfeiçoamento com tarefas e recompensas
   geradas pelo próprio Gemini. Confiabilidade: preprint de laboratório; **não** localizei no
   material lido uma seção de limitações declaradas, e isso está registrado na seção 8.

6. `https://osha.europa.eu/en/legislation/directive/regulation-20231230eu-machinery`
   — Sustenta: a data de aplicação (20/01/2027), a substituição da Diretiva 2006/42/CE e a
   cobertura explícita de máquina móvel autônoma e de módulos de IA que asseguram funções de
   segurança. Confiabilidade: **a melhor fonte deste documento** — agência da União Europeia
   descrevendo legislação própria, com data verificável e sem interesse comercial.

7. `https://forbes.com.br/forbes-agro/2026/04/maquinas-robos-e-ia-agrishow-chega-a-sua-31a-edicao-como-o-maior-festival-de-inovacao-do-agro/`
   — Sustenta: os robôs Solix XT e XC sob o rótulo "IA física", o Hural Rover, e a escala da
   Agrishow 2026 (27/04 a 01/05, Ribeirão Preto, ~800 marcas, 197 mil visitantes previstos).
   Confiabilidade: jornalismo de negócios em cobertura de feira — bom para "o que foi
   apresentado", fraco para números de adoção, que a matéria não traz (ver seção 8, item 2).

**Marcado como especulação da própria skill, sem fonte:** todos os efeitos da seção 5 (é o que a
roda dos futuros é); os três cenários da seção 9; os wildcards da seção 6; a leitura sobre o
Brasil como importador de modelo e gerador de dado de operação; e a comparação com o PC
compatível na seção 7, que é analogia minha e não resultado de pesquisa.

**Consultado em listagem de busca, mas NÃO aberto** — e portanto não usado como sustentação de
nenhuma afirmação específica: páginas sobre implantação de humanoides (contagens divergentes, ver
seção 8), a página de produto da Physical Intelligence e os papers de benchmark de fidelidade
física (WorldModelBench, PhyWorldBench, PhyScore/LoViF). Estes últimos são citados no texto
apenas como **existência de uma família de benchmarks em 2026**, que é o que os títulos de fato
sustentam — nenhum resultado numérico deles é afirmado aqui.

## 12. Anexo — o levantamento bruto

### Entrevista (Passo 1) — respostas recebidas

- **Horizonte:** 2031.
- **Recorte:** quem projeta mídia e interação; global, com nota sobre o Brasil.
- **Descartado de início:** o que já é comum em produto de massa (régua da disciplina). Nenhuma
  outra exclusão.
- **Viés desejado:** neutro.
- **Palpite de disrupção central:** nenhum — levantar do zero.
- **Extras dados espontaneamente:** profundidade de três ordens; modo "a partir de uma
  inovação/tema", não de setor; excluir ideias genéricas que serviriam para qualquer tema; o que
  faria mudar de ideia = evidência de adoção além da maioria inicial (Rogers) ou de que a
  tecnologia só melhora o existente.

Condição de saída satisfeita (itens 1 e 2 respondidos). Nenhuma suposição precisou substituir
resposta de entrevista nesta rodada.

### Buscas realizadas

| Busca | Resultado |
|---|---|
| NVIDIA Cosmos world foundation model physical AI 2026 | útil → fonte 1 aberta |
| Gemini Robotics 2026 DeepMind VLA generalist robot | útil → fonte 4 aberta |
| Genie 3 world model DeepMind interactive environment agent training | útil → fonte 3 aberta |
| Physical Intelligence pi-0.5 generalist robot policy 2026 | parcialmente útil — retornou sobretudo preprints de terceiros; página do laboratório não aberta; usado só para o fato geral de π0.5/π0.7 |
| humanoid robot deployment numbers 2026 Figure Unitree | **descartado** — números mutuamente incompatíveis, nenhuma fonte primária aberta (seção 8, item 3) |
| EU Machinery Regulation 2023/1230 January 2027 | útil → fonte 6 aberta |
| Brasil robótica IA física 2026 agronegócio | útil → fonte 7 aberta; número de robôs em campo **não confirmado** na fonte |
| world models fail physics benchmark 2026 | útil como sinal de existência de campo de avaliação; nenhum paper aberto individualmente |
| SIMA 2 DeepMind generalist agent 2026 | útil → fonte 5 aberta |

### Rodada descartada — a primeira montagem da roda

A primeira passagem tinha **quatro** disrupções-raiz, com sim-to-real no centro ("treinar em
mundo sintético antes de tocar o real"). Removida pelo Passo 2, teste 3: já está em produção e
em uso comum. O ramo inteiro que pendia dela (barateamento do treino → mais empresas treinando →
mais robôs) era, além de tudo, o tipo de ideia genérica que a instrução pedia para excluir:
serviria idêntica para qualquer tema. Reescrito como D1, com o eixo movido de "treinar em
simulação" para "o ambiente ser gerado em vez de construído".

### Efeitos cortados

1. **"A cidade passa a ser redesenhada para máquinas."** Cortado por falta de especificidade —
   é a definição de "tudo vai mudar" aplicada a urbanismo, e não sobrevive à pergunta "o que
   exatamente muda em 2031, e quem decide". A versão específica que sobreviveria — piso,
   sinalização e portas de galpão logístico padronizados para robô — já acontece hoje em
   armazém, o que a torna madura, não futura.
2. **"O trabalho físico desaparece."** Cortado. Não é efeito, é slogan. A versão específica e
   sustentável — o trabalho físico vira supervisão remota de muitas máquinas, com a
   responsabilidade concentrada no supervisor — foi preservada, mas dentro do cenário
   indesejável (seção 9), que é onde ela pode ser afirmada com honestidade sobre a incerteza.
3. **"Todo jogo vira ambiente de treinamento de robô."** Cortado por confundir dois temas
   vizinhos. Jogo vira ambiente de treino e avaliação de **agente**, o que está em e7.2; a ponte
   até o robô físico não está demonstrada e não deve ser afirmada.

### Efeitos revisados (e não cortados)

- **e4.1** — comoditização do hardware. Era `2029 / confiança alta`; virou `2030 / confiança
  média` depois do Passo 6, item 2 (ausência de padrão estabelecido em robótica).
- **e3.2** — mundos de uso único. Era `sinal médio`; rebaixado para `sinal fraco`, por ser
  extrapolação linear pura de uma curva de custo.

### Nota de método

O Passo 6 desta rodada produziu três cortes e duas revisões, o que satisfaz a condição de alerta
da skill ("se nada foi descartado, questione de novo"). O erro mais instrutivo da rodada não foi
uma alucinação: foi a classificação de sim-to-real como disrupção — mesmo padrão descrito em
`DUVIDAS.md`, e detectável apenas por escrever as três respostas do Passo 2, uma por uma, em vez
de perguntar vagamente se a tecnologia é nova.
