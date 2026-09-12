---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: jcsc
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 9
efeitos_ordem_2: 15
efeitos_ordem_3: 15
tecnologias_citadas: [NVIDIA Cosmos 3, Genie 3, SIMA 2, Gemini Robotics 1.5, Gemini Robotics-ER 1.5, pi-0.5, Isaac GR00T N1, Isaac Sim, Isaac Lab, MuJoCo, MuJoCo-Warp, Newton, NVIDIA Warp, Genesis, MetaDrive, AirSim, habitat-sim, PhysX, ROS 2, MoveIt 2, Marble, Atlas, Gaussian splatting, Unitree G1, Figure 03, Agility Digit, ALOHA 2, Apollo, Franka, Oasis, Odyssey, GAIA-2, ROSClaw]
fontes: 16
confianca: media
experimento: "Divergência — bancada que roda a mesma instrução em linguagem natural num simulador escrito à mão (MetaDrive) e num modelo de mundo gerativo, lado a lado, e mede em quantos segundos uma plateia humana distingue qual é qual"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Até 2031, o deslocamento decisivo em IA física não é o robô ficar mais capaz — é o **mundo em que ele aprende deixar de ser escrito e passar a ser gerado**. Três frentes já verificáveis sustentam isso: modelos de mundo interativos que rodam em tempo real (Genie 3, 720p a 24 fps, coerência de poucos minutos e memória visual de cerca de um minuto), modelos-base que geram trajetórias de ação junto com pixels e som (NVIDIA Cosmos 3, aberto, lançado em 31/05/2026), e políticas generalistas que transferem entre corpos diferentes sem retreino (Gemini Robotics 1.5; π0.5 operando em casas nunca vistas). O efeito de primeira ordem é que a capacidade do robô descola do hardware do robô. O de segunda é que o ativo escasso migra de "quem tem frota coletando dado" para "quem consegue gerar mundo e pontuar comportamento". O de terceira, e o mais incômodo para quem projeta mídia e interação, é que **todo produto 3D passa a ter um usuário não-humano possível**, e desenhar um mundo passa a ser, também, desenhar um currículo de treino. O mapa é cético quanto à velocidade: nenhum dos modelos de mundo avaliados em benchmark aberto satisfaz simultaneamente ação, visão, física e memória, o parque humanoide realmente implantado em 2026 se mede em dezenas de unidades por cliente, e o Regulamento de Máquinas da UE, em vigor pleno a partir de 20/01/2027, encarece exatamente a parte que está avançando mais rápido — a máquina cujo comportamento de segurança envolve código que se altera.

## 2. O tema

**A entrevista da Etapa 1 foi feita e respondida por inteiro.** As cinco respostas, literais: horizonte **2031**; público **quem projeta mídia e interação**; recorte **global, com uma nota sobre o Brasil**; descarte explícito **o que já é comum em produto de massa** (a régua da disciplina), sem nenhuma outra exclusão; viés **neutro**. Nenhuma pergunta foi respondida com "tanto faz". Duas respostas extras, fora do roteiro das cinco, foram registradas porque mudam o resultado: a profundidade pedida foi **três ordens** e o modo pedido foi **a partir de uma inovação, não de um setor**. Foi declarado também o que faria o autor mudar de ideia — evidência de que a adoção já passou da maioria inicial na curva de Rogers, ou evidência de que a tecnologia só melhora o que existe sem romper nada.

O tema é a IA que sai da tela e ganha corpo — robô, drone, veículo — e, sobretudo, a técnica que torna isso possível: treinar num mundo sintético antes de tocar o real. Até aqui esse mundo sintético era um **simulador**: um artefato de engenharia, escrito à mão, com física declarada em equações e cenários montados um a um. O que está mudando é a chegada do **modelo de mundo**: um modelo que **gera** o ambiente em vez de renderizá-lo a partir de uma cena autorada.

Isso encosta em mídia e interação em três pontos que não são metafóricos.

**Primeiro, o mundo vira mídia gerada.** Um modelo de mundo interativo é, tecnicamente, a mesma família de coisa que um gerador de vídeo — com a diferença de que aceita ação como entrada e responde em tempo real. Lightspeed descreve a categoria como "videogames sem engine": mundos virtuais que aceitam entrada do usuário e respondem de forma coerente e em tempo real. Quem projeta experiência interativa passa a projetar sobre um substrato probabilístico, não sobre uma cena determinística.

**Segundo, a interface passa a ter um leitor não-humano.** SIMA 2 opera jogos 3D que nunca viu, sem acesso ao código, consumindo a mesma tela que a pessoa consome e emitindo teclado e mouse. Do ponto de vista do agente, um jogo, um gêmeo digital de fábrica e uma interface espacial são o mesmo tipo de objeto: um ambiente com observação e ação. Isso é uma questão de design de interface, não de robótica.

**Terceiro, o corpo entra no raciocínio.** As políticas visão-linguagem-ação atuais raciocinam explicitamente antes de agir e mostram o processo. A restrição física deixa de ser uma camada de segurança pendurada depois do modelo e passa a ser parte do que o modelo pensa. É uma mudança na natureza da interação homem-máquina: a máquina que negocia com a física em voz alta.

**Por que um mapa de futuro e não um levantamento de estado da arte.** Porque as três perguntas que importam aqui não têm resposta no presente, e todas são perguntas de projeto, não de técnica. Se o robô aprende num mundo que uma IA inventou, quem responde pelo erro quando o mundo real diverge? Se o design de mundo vira design de currículo de treino, o que acontece com a autoria do mundo? Se a IA física fica barata, o que acontece com o ambiente construído — desenhado para pessoas, ou para os dois? Um levantamento de estado da arte lista ferramentas. Estas perguntas exigem ramificar consequências.

**Fronteira com os vizinhos, declarada.** Simulação de *sociedades* não é aqui (é o tema 6). Capturar o mundo real em 3D não é aqui (tema 10). Ver e segmentar qualquer coisa não é aqui (tema 11). Aqui o objeto é **o agente com corpo e o mundo em que ele aprende**.

## 3. Onde isso está hoje

**O modelo de mundo interativo já roda, e já tem limite medido.** Genie 3, anunciado pela Google DeepMind em 05/08/2025, gera mundos navegáveis em tempo real a **24 fps, 720p**, com coerência de "poucos minutos" e memória visual de aproximadamente **um minuto**. Aceita eventos de mundo por texto — mudar o clima, inserir um objeto — e foi testado com o agente SIMA operando dentro dele. As limitações são declaradas pelos próprios autores: espaço de ação do agente restrito, dificuldade com múltiplos agentes independentes interagindo, geografia real imprecisa, texto mal renderizado, e duração máxima de interação na casa dos minutos. Disponibilidade: prévia de pesquisa limitada, para acadêmicos e criadores.

**O modelo-base de IA física virou produto aberto.** A NVIDIA lançou **Cosmos 3** em 31/05/2026, no GTC Taipei, descrevendo-o como o primeiro omnimodelo totalmente aberto com raciocínio visual nativo e geração multimodal em texto, imagem, vídeo, som ambiente e **ação**. A arquitetura é uma mistura de transformers que emparelha um transformer de raciocínio com um transformer especialista de geração. Três variantes: Super (maior fidelidade física), Nano (inferência rápida) e Edge (inferência em tempo real na borda, anunciada como "em breve"). Pesos disponíveis em Hugging Face, GitHub e build.nvidia.com. Junto, a NVIDIA anunciou a Cosmos Coalition, com Agile Robots, Black Forest Labs, Generalist, LTX, Runway e Skild AI. O release não declara limitações técnicas — só as ressalvas jurídicas padrão sobre declarações prospectivas, o que por si é um dado sobre o gênero do documento.

**A política generalista transfere entre corpos.** Gemini Robotics 1.5 e Gemini Robotics-ER 1.5 foram apresentados pela Google DeepMind em 25/09/2025. O par funciona em arranjo agêntico: o ER 1.5 planeja, chama ferramentas digitais (inclusive busca) e produz planos de vários passos; o 1.5 executa, gerando sequências de raciocínio internas antes de agir. A alegação central para este mapa é a **transferência entre corpos**: tarefas treinadas em ALOHA 2 transferem para humanoides Apollo e para braços Franka **sem retreino**. O ER 1.5 está disponível via API no Google AI Studio; o 1.5, o modelo de ação, segue restrito a parceiros selecionados — ou seja, a peça que de fato move um corpo ainda não é um produto que se compra.

**A generalização para ambientes nunca vistos já foi demonstrada em casa real.** π0.5, da Physical Intelligence, publicado em 22/04/2025, é um VLA treinado com mistura de dados de manipulação móvel, dados de robôs estáticos em vários ambientes, dados entre corpos de plataformas mais simples, e dados multimodais da web (legendagem, perguntas e respostas, detecção de objeto). O que ele faz: limpar uma cozinha ou um quarto **numa casa que não estava no treino**. Os próprios autores dizem que o modelo "está longe de perfeito" e "erra com frequência", tanto no raciocínio semântico quanto na execução motora, e que o objetivo não é destreza nem habilidade nova — é generalização.

**O dado sintético já substitui ordens de grandeza de demonstração humana.** No anúncio do Isaac GR00T N1, em 18/03/2025, a NVIDIA relatou ter gerado **780.000 trajetórias sintéticas em 11 horas** — equivalente a **6.500 horas, cerca de nove meses contínuos** de demonstração humana — e que a combinação de dado sintético com dado real melhorou o desempenho do GR00T N1 em **40%** em relação a usar só dado real. No mesmo anúncio, o motor de física aberto **Newton**, construído sobre NVIDIA Warp em colaboração com Google DeepMind e Disney Research, e a colaboração MuJoCo-Warp com aceleração anunciada de mais de **70×** para cargas de aprendizado de máquina em robótica.

**O agente generalista opera mundos que nunca viu — inclusive mundos gerados.** SIMA 2, lançado em 13/11/2025 como prévia de pesquisa limitada, completa tarefas em jogos em que não foi treinado (MineDojo, ASKA), transfere conceitos entre jogos (o que aprendeu como "minerar" aplica como "colher") e — o ponto que fecha o circuito deste mapa — **opera dentro de mundos gerados pelo Genie 3**, sem exposição prévia, orientando-se e agindo de forma sensata. Melhora sozinho por um ciclo em que o Gemini gera tarefas e estima recompensa, sem demonstração humana. Limitações declaradas: raciocínio multi-passo de horizonte muito longo, janela de contexto curta, controle preciso de teclado e mouse, e compreensão robusta de cena 3D.

**A taxonomia do campo se assentou, e ela é desconfortável.** Em 03/06/2026, Fei-Fei Li publicou uma divisão dos modelos de mundo em três funções: **renderizador** (produz pixels; segundo ela, é o que Sora, Runway e Kling são — e por isso não são modelos de mundo de verdade), **simulador** (produz estado legível por máquina: malhas de colisão, propriedades de material, coordenadas espaciais — algo sobre o que um programa pode computar) e **planejador** (recebe observação e produz ação, fechando o laço). A camada de planejador é descrita como "largamente desocupada", a fronteira aberta do campo. A World Labs entregou o **Marble** em 12/11/2025 — gera mundos 3D a partir de texto, imagem, vídeo ou layout 3D grosseiro, e **exporta**: Gaussian splats, malhas de triângulo com variante de colisor, e vídeo com controle de câmera preciso ao pixel. Exportar colisor é exatamente a ponte do renderizador para o simulador.

**E a estabilidade de longo horizonte não foi resolvida por ninguém.** O WorldRoamBench (submetido em 30/06/2026) avalia modelos de mundo interativos em quatro dimensões: fidelidade de ação quadro a quadro, deriva visual por segmento (que captura colapso no meio da sequência, invisível quando se compara só início e fim), física com portão de controlabilidade (mecânica, óptica, consistência 3D) e memória (memória de cena por reconstrução de nuvem de pontos 3D, memória de sujeito por rastreamento mais raciocínio de VLM). O resultado, com mais de dez modelos testados em mais de 600 casos e interações de 10 a 60 segundos: **nenhum modelo satisfaz de forma confiável todas as dimensões; mesmo o melhor alcança apenas pontuações moderadas.**

**Do lado dos corpos, o que está de fato implantado é modesto e verificável.** Figure completou um piloto de 11 meses na planta da BMW em Spartanburg com o Figure 02: **1.250 horas de operação, mais de 90.000 peças de chapa carregadas**, 99% de precisão de colocação, tolerância de 5 mm, ciclo de 84 segundos — e desde então implantou o modelo 03 em sequenciamento logístico na mesma planta, cobrando da BMW cerca de **US$ 25 por hora-robô**. Agility acumulou mais de **65.000 horas de operação em nove sites de clientes**, com nomes públicos: GXO, Schaeffler, Toyota Motor Manufacturing Canada, Mercado Libre. Unitree embarcou cerca de **5.500 unidades humanoides em 2025** e mira 10.000 a 20.000 em 2026, com o G1 a cerca de **US$ 16.000**. E o contraponto: as alegações de mais de 50.000 Optimus acumulados ou milhares operando em linha de produção **não vêm das empresas envolvidas**; Elon Musk declarou em janeiro de 2026 que o Optimus "não estava em uso nas nossas fábricas de forma material".

**O relógio regulatório já está marcado.** O Regulamento (UE) 2023/1230 substitui integralmente a Diretiva de Máquinas de 2006 em **20 de janeiro de 2027, sem período adicional de transição**. Sistemas autônomos e funções de segurança baseadas em IA entram explicitamente no escopo pela primeira vez; o Anexo III passa a incluir categorias definidas em torno de máquinas cujo comportamento relevante para segurança envolve IA ou **código auto-evolutivo**; a autodeclaração de conformidade deixa de bastar para as categorias de alto risco do Anexo I Parte A, que passam a exigir avaliação por organismo notificado; e o fabricante fica obrigado a proteger as funções de segurança contra ataques de terceiros por toda a vida operacional da máquina, com atualizações de segurança de software exigidas por **dez anos** após a colocação no mercado.

**O campo já tem autocrítica formalizada.** O artigo "Robots Need More than VLA and World Models" (submetido em 04/06/2026, com Schwager, Ajoudani, Cadena, Peters, Hutter e Bou-Ammar entre os autores) ataca de frente o enquadramento dominante: a inteligência robótica generalista é frequentemente tratada como um problema de escala de política — colete mais demonstração, treine VLA maior, espere generalização mais ampla. Os autores dizem que isso é incompleto, e que os componentes que faltam são quatro **interfaces**: de dados, para autorrotular comportamento não estruturado; de corporificação, para redirecionar movimento humano em ação de robô; de modelo de mundo, para raciocínio 3D ancorado em física; e de recompensa, para inferir progresso e sucesso a partir de vídeo e linguagem.

**Do lado da política pública, o diagnóstico de risco já existe.** "Embodied AI: Emerging Risks and Opportunities for Policy Action" (28/08/2025, revisto em 03/09/2025; Perlo, Robey, Barez, Floridi e Mökander) classifica as ameaças em quatro categorias — físicas, informacionais (vigilância em massa), econômicas e societais — e recomenda três ações: esquemas de teste e certificação, clarificação de responsabilidade civil, e gestão de impacto econômico. A afirmação central para este mapa: **as políticas existentes que governam robôs industriais e veículos autônomos são insuficientes.**

**Nota sobre o Brasil.** A IFR registra 542.000 robôs industriais instalados no mundo em 2024 — mais que o dobro de dez anos antes, quarto ano consecutivo acima de 500 mil unidades — com a distribuição regional em Ásia 74%, Europa 16% e Américas 9%; o site da IFR não abre dado por país para o Brasil. Uma leitura do mercado brasileiro publicada pelo Itaú BBA cita cerca de **20 mil robôs industriais em operação no país**, concentrados no Sudeste e no Sul, e densidade robótica **inferior a 50 unidades por 10 mil trabalhadores**, contra 141 de média global e mais de 300 na China, além do pacote de R$ 186,6 bilhões da transformação digital da indústria até 2026. O ponto que interessa a este mapa não é o atraso em si — é que a disrupção descrita aqui **desacopla capacidade de robô de parque instalado de robô**. Um país com poucos braços na fábrica não está necessariamente atrás na corrida que vem; está atrás na corrida anterior. A pergunta relevante para o Brasil deixa de ser "quantos robôs temos" e passa a ser "temos computação e temos mundo".

## 4. As disrupções-raiz

**Disrupção-raiz 1 — O modelo de mundo gerativo como ambiente de treino e de execução**

*O que rompe.* O ambiente deixa de ser artefato autorado e passa a ser distribuição amostrada. Num simulador escrito à mão, o conjunto de cenários é finito e conhecido: alguém o escreveu. Num modelo de mundo, o conjunto de cenários é o suporte de uma distribuição aprendida — e ninguém sabe exatamente o que está dentro dele. Isso rompe a cadeia de responsabilidade da engenharia de sistemas críticos, que pressupõe requisito rastreável a cenário de teste.

*Por que agora e não há cinco anos.* Porque três coisas passaram a existir ao mesmo tempo: geração interativa em tempo real (Genie 3 a 24 fps com eventos de mundo por texto), geração que emite **ação** e não só pixel (Cosmos 3, aberto), e exportação de estado computável (Marble exportando malha de colisor). Em 2021 existia geração de vídeo; não existia nada que um planejador pudesse consumir.

*O que ainda falta.* Estabilidade de longo horizonte, e ela não é detalhe: o WorldRoamBench mostra que nenhum dos mais de dez modelos avaliados satisfaz de forma confiável ação, visão, física e memória simultaneamente. A memória de cena do Genie 3 é de cerca de um minuto. Enquanto isso, um episódio de manipulação móvel numa casa dura dezenas de minutos.

**Disrupção-raiz 2 — A política generalista transferível entre corpos**

*O que rompe.* Rompe o acoplamento entre capacidade e hardware. Na automação industrial clássica, o que um braço faz é função de quem programou aquela célula, naquela fábrica, para aquele braço: o valor está no integrador. Se a mesma política roda em ALOHA 2, em Apollo e em Franka sem retreino, o "cérebro" vira um artefato transportável e o "corpo" vira plataforma. Isso não melhora o modelo de negócio da automação; troca quem captura a margem.

*Por que agora e não há cinco anos.* Porque a transferência entre corpos saiu do papel: o motion transfer do Gemini Robotics 1.5 é demonstrado entre três morfologias distintas, e o π0.5 mostra generalização para **ambientes** inteiramente novos, não só para objetos novos. Em 2021, o estado da arte era política por tarefa e por robô.

*O que ainda falta.* Duas coisas. A disponibilidade: o modelo que de fato move o corpo, o VLA, segue restrito a parceiros selecionados — o que está em API é o planejador. E a certificação: a partir de 20/01/2027, na UE, máquina cujo comportamento de segurança envolve IA ou código auto-evolutivo cai em categoria que exige organismo notificado. Uma política que aprende depois de vendida é, nesse enquadramento, um problema regulatório antes de ser um recurso.

**Disrupção-raiz 3 — O agente generalista que opera qualquer mundo 3D sem acesso ao código**

*O que rompe.* Rompe a premissa de que a interface tem um único tipo de leitor. SIMA 2 joga o que nunca viu consumindo pixels e emitindo teclado e mouse, e opera dentro de mundos que o Genie 3 acabou de inventar. Se um agente atravessa a interface como um humano atravessa — pela superfície visível, sem API —, então todo produto 3D passa a ter um segundo público. E o design de mundo passa a ter uma segunda função: além de divertir ou orientar, ele **ensina**.

*Por que agora e não há cinco anos.* Porque a base virou um modelo de linguagem grande. SIMA 1 (março de 2024) seguia instrução simples e tinha 31% de sucesso em tarefas complexas contra 71% do humano. SIMA 2, sobre Gemini, conversa, raciocina sobre objetivo alto, transfere conceito entre jogos e **gera as próprias tarefas e recompensas** para aprender sozinho num ambiente novo.

*O que ainda falta.* Horizonte longo e controle fino: os próprios autores listam raciocínio multi-passo longo, contexto curto, controle preciso de teclado e mouse, e compreensão robusta de cena 3D como não resolvidos. E o acesso: prévia de pesquisa limitada a um grupo pequeno.

**Disrupção-raiz 4 — O dado sintético como insumo principal de supervisão**

*O que rompe.* Rompe o fosso competitivo da robótica, que sempre foi "quem tem robô em campo coletando". Se 11 horas de geração equivalem a nove meses de demonstração humana, a barreira de entrada deixa de ser frota e passa a ser computação mais capacidade de gerar mundo. Isso reordena quem pode construir política de robô — e reordena por critério de acesso a GPU, que é uma distribuição geográfica e financeira muito específica.

*Por que agora e não há cinco anos.* Porque o gerador de dado ficou bom o bastante para o dado sintético somar em vez de envenenar (a NVIDIA relata +40% ao misturar sintético com real) e porque o motor físico ficou rápido o bastante (MuJoCo-Warp com aceleração anunciada acima de 70×; Newton construído sobre Warp com Google DeepMind e Disney Research).

*O que ainda falta.* O contra-argumento formal, que é forte: "Robots Need More than VLA and World Models" sustenta que o gargalo não é volume de dado nem tamanho de política, e sim a ausência de **interfaces** que convertam comportamento não estruturado — movimento humano, vídeo da internet, demonstração interativa — em supervisão utilizável. Se estiverem certos, escalar geração sintética rende menos do que o relato de fornecedor sugere.

**Candidatos cogitados e descartados por maturidade** (critério da Etapa 2 da skill, reforçado pela régua da disciplina — "o que já é comum em produto de massa"):

- **ROS e ROS 2, MoveIt 2, OMPL, pinocchio, MAVLink, Lanelet2** — infraestrutura consolidada de robótica. Amplamente adotada pelos líderes, sem debate real de substituição no horizonte de 2031. Descartados.
- **SLAM e navegação visual-inercial (OpenVINS)** — maduros. Há pesquisa ativa, mas não há disputa sobre se a categoria sobrevive. Descartados.
- **Motores de física de corpo rígido (PhysX, MuJoCo, Isaac Sim, habitat-sim, AirSim, MetaDrive)** — este foi o descarte mais difícil, porque é o coração do tema. Decisão: a **simulação acelerada por GPU** já é padrão de mercado entre os líderes de aprendizado de robô. O que é emergente não é simular; é **gerar o mundo em vez de escrevê-lo**. O simulador entra neste mapa como substrato do presente (seção 3), não como disrupção-raiz. O que entra como disrupção é a D1.
- **Geração de vídeo como "modelo de mundo" (Sora, Runway, Kling)** — descartado por dois motivos independentes. É produto de massa (a régua da disciplina), e a própria taxonomia do campo, na formulação de Fei-Fei Li, diz que renderizador não é modelo de mundo. Fica no mapa como distinção conceitual, não como raiz.
- **Aleatorização de domínio (domain randomization)** — técnica padrão de transferência sim-to-real, amplamente adotada. Há debate sobre substituí-la por geração, mas esse debate É a D1. Descartado como raiz autônoma para não contar a mesma coisa duas vezes.
- **Condução autônoma como categoria (Apollo, robotáxi)** — o ramo mais maduro da IA física, com operação comercial. Aqui é presente, não futuro. Descartado.
- **Braço industrial com teach pendant e AGV de armazém** — presente há décadas. Descartados sem discussão.
- **Humanoide como forma** — quase descartado como disrupção, e corretamente: o humanoide é uma escolha de morfologia, não uma ruptura técnica. Ele aparece no mapa como consequência (é o corpo que mais se beneficia de política transferível), nunca como causa.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O modelo de mundo gerativo como ambiente de treino e de execução
    efeitos:
      - id: e1
        ordem: 1
        efeito: Parte do treino de agentes migra de cenários escritos à mão para mundos gerados sob demanda, e o ambiente deixa de ser artefato autorado para virar distribuição amostrada
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge um mercado de cobertura de mundo, em que se vende a garantia de que a distribuição de cenários gerada contém os casos que importam
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A auditoria de um sistema robótico passa a incluir a auditoria do gerador de mundos que o treinou, e não apenas do robô e da política
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A engenharia de cenário se divide entre quem escreve física e quem escreve mundo, e a segunda função se aproxima de direção de arte
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Formações separadas de jogo, cinema e robótica convergem para um currículo comum de direção de ambiente
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A instabilidade de longo horizonte dos mundos gerados vira o gargalo declarado do campo e cria uma indústria de avaliação de modelos de mundo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Benchmark de estabilidade vira requisito contratual entre quem gera o mundo e quem treina o agente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Provedor de modelo de mundo passa a responder contratualmente por deriva, numa cláusula de nível de serviço sobre fidelidade física
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Arquiteturas híbridas de motor físico determinístico acoplado a gerador para a casca do mundo se tornam o padrão de fato, em vez da substituição completa do simulador
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O motor de jogo se reposiciona como camada de verificação e de estado computável, deixando a aparência para o modelo gerativo
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A política generalista transferível entre corpos
    efeitos:
      - id: e3
        ordem: 1
        efeito: A capacidade do robô descola do hardware do robô, e a política passa a ser item de catálogo separado do corpo que a executa
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O integrador de automação perde o monopólio da programação de célula e o valor migra para quem detém a política e os dados
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O fabricante de robô vira montador de plataforma comoditizada, com a margem no serviço e na política, não no braço
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A instrução em linguagem natural vira a interface primária de operação de máquina e o operador de chão de fábrica passa a redigir tarefa em vez de programar trajetória
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A ambiguidade linguística passa a ser causa registrada de incidente industrial e surge norma de redação de comando para máquina
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A entrada em vigor plena do Regulamento de Máquinas da UE em janeiro de 2027 obriga avaliação por organismo notificado para máquinas cujo comportamento de segurança envolve IA ou código auto-evolutivo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A política que aprende depois de vendida é congelada por projeto no mercado europeu, e cada atualização de modelo vira evento de recertificação
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A divergência regulatória produz dois produtos distintos, um robô travado e auditável para mercados regulados e um robô que continua aprendendo em campo nos demais
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A obrigação de manter segurança de software por dez anos redefine o custo de ciclo de vida e empurra o mercado para robô como serviço cobrado por hora, em vez de venda de ativo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O trabalho físico passa a ter preço público por hora de máquina diretamente comparável ao da hora humana, e a decisão de substituição vira linha explícita de planilha
                sinal: medio
                prazo: 2031
                confianca: baixa
  - disrupcao: O agente generalista que opera qualquer mundo 3D sem acesso ao código
    efeitos:
      - id: e5
        ordem: 1
        efeito: Todo produto 3D passa a ter um usuário não humano possível, que atravessa a interface pela mesma superfície visível que a pessoa
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Design de mundo passa a ser também design de currículo, e o que o ambiente ensina a um agente entra como critério de projeto ao lado do que ele oferece à pessoa
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Aparecem mundos projetados para não ensinar, deliberadamente ilegíveis a agentes, como defesa de propriedade intelectual e de experiência
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O teste de jogabilidade migra para agente, com milhares de partidas por noite detectando quebra, e o humano fica com o julgamento de sentido e de ritmo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Difícil para humano e difícil para agente deixam de coincidir e viram dois eixos separados de métrica de dificuldade
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A fronteira entre jogo, simulador e ferramenta de trabalho se apaga do ponto de vista do agente, porque todos são um ambiente com observação e ação
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Estúdios passam a licenciar mundos como dado de treino e o ambiente vira linha de receita separada da venda do jogo
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Litígio sobre a propriedade do comportamento aprendido dentro de um mundo licenciado cria uma categoria nova de disputa de direito autoral
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Agentes que geram as próprias tarefas e recompensas reduzem a dependência de demonstração humana dentro de ambientes virtuais
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O gargalo de dados migra de quem coleta para quem sabe pontuar, e o modelo de recompensa vira o ativo escasso do campo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Um erro sistemático no modelo de recompensa se propaga a frotas inteiras de agentes como um defeito de fabricação de software
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O dado sintético como insumo principal de supervisão
    efeitos:
      - id: e8
        ordem: 1
        efeito: A maior parte do dado que treina agentes corporificados passa a ser gerada e não coletada
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A vantagem competitiva migra de frota instalada para capacidade de computação e de geração, e entra no jogo quem tem GPU sem ter robô em campo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Países e instituições sem acesso a computação deixam de produzir política própria e passam a comprar comportamento pronto de fornecedor estrangeiro
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e8.2
            ordem: 2
            efeito: Vídeo da internet e movimento humano capturado viram supervisão direta de robô, e o consentimento sobre imagem passa a incluir o uso para treinar um corpo
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: O modo como uma pessoa se move vira dado licenciável e abre disputa sobre direito sobre o gesto, distinta do direito de imagem
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A falha herdada do mundo de treino vira categoria própria de defeito, distinta de falha de hardware e de falha de política
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A investigação de acidente passa a exigir a proveniência do mundo de treino, com gerador, versão de física e semente registrados
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O registro de proveniência de mundo vira exigência de seguradora antes de virar exigência de lei
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não consegue dizer.**

A estrutura em árvore força cada efeito a ter um pai único, e os efeitos mais interessantes deste mapa são justamente os que têm **dois** pais. O caso mais claro é `e9` — a falha herdada do mundo de treino: ela é filha tanto da D4 (dado sintético) quanto da D1 (mundo gerado). Ela está pendurada na D4 por decisão de escrita, não porque a causalidade seja essa. O mesmo vale para `e4.2.1` (preço público da hora-máquina), que é efeito conjunto da regulação europeia e da política transferível, e para `e8.1.1` (quem não tem computação compra comportamento pronto), que é onde a nota sobre o Brasil realmente mora e que depende das quatro disrupções ao mesmo tempo.

**Onde a cadeia continuaria, e por que foi cortada aqui.** A skill fixa três níveis, e três níveis é onde eu paro. Mas o quarto nível é visível e vale nomear em prosa, sem número e sem data: de `e1.1.1` (auditar o gerador de mundos) sairia a figura do **auditor de mundo** como profissão regulada, no mesmo lugar institucional que o auditor de segurança funcional ocupa hoje; de `e4.1.1` (dois produtos, um travado e um que aprende) sairia uma assimetria de taxa de melhoria entre mercados, com o robô não regulado aprendendo mais rápido exatamente porque é menos seguro; e de `e5.1.1` (mundos feitos para não ensinar) sairia uma estética do ilegível — ambientes que confundem agente de propósito, com consequências diretas para acessibilidade humana, porque quase tudo que confunde um agente visual também confunde uma pessoa com baixa visão. Nenhum desses três entra no YAML.

**Sobre os prazos.** Todos os prazos do bloco estão dentro do horizonte pedido (2031). Onde o efeito de terceira ordem provavelmente só se consolida depois de 2031 — é o caso de `e3.1.1`, `e6.1.1` e `e8.2.1`, que dependem de ciclo de litígio ou de ciclo de substituição de parque industrial —, o prazo registrado é a data em que o efeito **começa a aparecer de forma reconhecível**, não a data em que se completa, e a confiança correspondente é `baixa` por essa razão. Isto está dito aqui, em prosa, porque o campo `prazo` do YAML não distingue início de consolidação.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a exportação de colisor.** Passou quase despercebido no anúncio do Marble: além de Gaussian splats e vídeo, ele exporta **malha de colisor**. Isso é pequeno na página de produto e enorme na arquitetura. É a passagem do renderizador para o simulador na taxonomia de Fei-Fei Li — o momento em que o mundo gerado deixa de ser uma imagem bonita e vira algo sobre o que um programa computa. Monitorar quantos modelos de mundo passam a exportar estado computável é o melhor indicador antecedente da D1.

**Sinal fraco 2 — o agente que joga dentro do mundo que outro modelo acabou de inventar.** SIMA 2 operando em mundos gerados pelo Genie 3 é uma linha no blog e um fechamento de circuito: gerador de mundo alimenta agente, agente gera experiência, experiência treina agente. Se esse laço ficar barato e estável, o custo marginal de gerar experiência de treino tende a zero e toda a economia do campo se reorganiza em torno de quem consegue **pontuar** o que aconteceu — que é precisamente `e7.1`.

**Sinal fraco 3 — o corpo entrando no raciocínio.** Ferramentas que tratam restrição física como parte do modelo de execução e não como camada de segurança posterior (o ROSClaw, no levantamento da turma, é descrito assim: conectar o raciocínio do modelo a capacidades reais mantendo consciência do corpo físico do agente) são um sinal de que a interface homem-máquina vai mudar de gênero. Uma máquina que diz "não consigo alcançar" antes de tentar é uma interação diferente de uma máquina que tenta e falha.

**Sinal fraco 4 — o preço em hora-robô.** Figure cobrando da BMW cerca de US$ 25 por hora-robô é o primeiro preço público de trabalho físico agêntico. É um número pequeno hoje e uma âncora enorme amanhã, porque torna a comparação com salário-hora aritmética em vez de retórica. Vale monitorar não o valor, mas a **existência da cotação** e sua queda.

**Sinal fraco 5 — a ausência de limitação declarada.** O release do Cosmos 3 não declara nenhuma limitação técnica, só ressalvas jurídicas. Comparado com o Genie 3, o SIMA 2 e o π0.5, que listam limitações explicitamente, isso é um sinal sobre o gênero do documento — e sobre o quanto da narrativa do campo é escrita por quem vende computação. Vale como calibração permanente de leitura.

**Wildcard 1 (o do enunciado, e ele é o principal) — um acidente cuja causa está no simulador, não no robô.** Baixa probabilidade num horizonte curto, impacto alto. Um robô que aprendeu, num mundo gerado, uma manobra que depende de um artefato físico impossível — interpenetração de corpos, atrito errado, objeto que atravessa objeto — e que executa essa manobra no real com consequência grave. O que muda no mapa: `e9`, `e9.1` e `e9.1.1` saltam de sinal médio-fraco e confiança baixa para o centro do tabuleiro, e a proveniência do mundo de treino vira exigência **antes** de 2031, não depois. É o único evento único capaz de reordenar o mapa inteiro, porque ataca simultaneamente a D1 e a D4 e porque cai em cima de um regulamento europeu que já estará em vigor.

**Wildcard 2 — indisponibilidade de um provedor de modelo de mundo em produção.** Se o modelo de mundo passar da fase de treino para a fase de **execução** — o agente consultando um modelo do mundo em tempo real para planejar —, uma queda de serviço deixa de ser inconveniência e vira parada de frota física. O primeiro incidente desse tipo mataria a arquitetura centralizada e empurraria o campo para inferência na borda, que é exatamente o que a variante Cosmos 3 Edge antecipa.

**Wildcard 3 — modelo de mundo aberto e competente encontra corpo de US$ 16.000.** Pesos abertos de IA física (Cosmos 3 já é aberto) somados a um humanoide ao preço de um carro popular colocam capacidade de agente corporificado fora do circuito industrial, em oficina, laboratório universitário e garagem. O efeito de mídia e interação disso não é industrial: é a entrada de um ator físico controlável por linguagem natural em espaço doméstico e público, sem nenhuma das três recomendações de política pública (teste e certificação, responsabilidade clara, gestão de impacto) tendo sido implementada.

**Wildcard 4 — o achatamento.** O oposto de todos os anteriores, e por isso o mais importante de listar. Os modelos de mundo estabilizam num patamar de poucos minutos de coerência e não melhoram; a tese de "Robots Need More than VLA and World Models" se confirma e o campo descobre que o gargalo eram as interfaces, não a escala; o dado sintético rende menos do que o relatado; e em 2031 a IA física é uma indústria respeitável de nicho — logística, inspeção, um punhado de tarefas de manipulação — sem nenhuma ruptura no ambiente construído, na cidade ou no trabalho físico. Neste cenário, este mapa inteiro estava errado no nível da premissa, e o sinal precoce dele é a estagnação dos números do WorldRoamBench entre 2027 e 2029.

## 7. Contra o próprio mapa

Esta seção registra a Etapa 4 da skill. Cada rebaixamento abaixo traz o **valor original antes do rebaixamento**, para que a autocrítica seja auditável e não apenas afirmada.

**Rebaixamentos de confiança aplicados.**

`e1` — *mundos gerados substituem cenários escritos à mão em parte relevante do treino*. Original: **alta**. Rebaixado para **média**. Motivo: falha no teste da força contrária. O parque instalado de Isaac Sim, MuJoCo, habitat-sim, AirSim e MetaDrive é enorme, gratuito e determinístico, e a certificação de segurança **exige reprodutibilidade** — que é justamente o que um gerador probabilístico não entrega. A hipótese mais provável não é substituição, é coexistência híbrida, o que aliás já está no mapa como `e2.2`.

`e3` — *a capacidade do robô descola do hardware*. Original: **alta**. Rebaixado para **média**. Motivo: falha no teste de disponibilidade observável. A transferência entre corpos do Gemini Robotics 1.5 é demonstração de laboratório entre três morfologias, e o modelo que executa ação segue restrito a parceiros selecionados — não é produto. Tratar demonstração como disponibilidade é o erro clássico deste tipo de mapa.

`e5` — *todo produto 3D passa a ter um usuário não humano possível*. Original: **alta**. Rebaixado para **média**. Motivo: falha no teste de taxa de adoção sem precedente. Depende de estúdios e fabricantes **quererem** agentes atravessando seus produtos, e o histórico recente da indústria de jogos com IA generativa é de resistência organizada, não de adesão. Some-se a ambiguidade jurídica de propriedade intelectual, listada como limitação explícita na leitura de mercado da Lightspeed.

`e8` — *a maior parte do dado passa a ser gerada*. Original: **alta**. Rebaixado para **média**. Motivo: a evidência numérica central — 780.000 trajetórias em 11 horas, +40% de desempenho — é **relato de fornecedor sobre o próprio produto**, sem replicação independente que eu tenha conseguido abrir, e vem de quem vende a computação que gera o dado. Continua sendo o número mais forte do mapa; continua sendo interessado.

`e6.1` — *estúdios licenciam mundos como dado de treino*. Original: **média**. Rebaixado para **baixa**. Motivo: pressupõe que o licenciamento seja resolvido juridicamente antes de ser resolvido tecnicamente, e a história recente de dado de treino sugere o contrário — primeiro se usa, depois se litiga.

`e8.2` — *vídeo da internet e movimento humano viram supervisão direta*. Original: **média**. Rebaixado para **baixa**. Motivo: a prática técnica já existe (o π0.5 co-treina com dado multimodal da web), mas o efeito como enunciado inclui a parte de **consentimento**, que é institucional e lenta. Misturei fato técnico com mudança normativa num efeito só; a confiança tem de ser a da parte mais lenta.

**Qual efeito é só extrapolação linear do presente.** `e2` (a instabilidade vira gargalo e cria indústria de avaliação) é o mais fraco nesse sentido — e é o único com confiança `alta` que **não** foi rebaixado, o que exige justificativa. Ele é praticamente uma descrição do presente com data futura: o WorldRoamBench já existe, já tem 600 casos e já produziu o veredito de que nenhum modelo passa. Mantive `alta` porque a pergunta não é se vai acontecer — está acontecendo —, mas registro que ele é o efeito de menor valor preditivo do mapa inteiro. Um mapa cheio de efeitos como esse seria um relatório de conjuntura disfarçado.

**Qual efeito assume velocidade de adoção sem precedente comparável.** `e3.2` — o operador de chão de fábrica virando redator de tarefa em linguagem natural até 2030. Não há precedente de mudança de interface de operação industrial nessa velocidade. A transição de teach pendant para programação offline levou décadas, e o chão de fábrica é o ambiente mais conservador em interface que existe, por motivo legítimo: mudança de interface ali tem custo em corpo humano. Mantive o efeito com confiança média, mas ele é candidato a estar cedo demais por pelo menos cinco anos.

**Qual disrupção pode simplesmente não se concretizar, e o que aconteceria com o mapa.** A D1 é a mais frágil, e é a mais central — a combinação ruim. Se os modelos de mundo estacionarem nos poucos minutos de coerência do Genie 3 e nas pontuações moderadas do WorldRoamBench, eles ficam sendo uma excelente ferramenta de **pré-visualização e de mídia** e uma péssima ferramenta de treino de política. Nesse caso, a D1 se converte em um efeito da indústria criativa, não da robótica, e o mapa perde o eixo: `e1`, `e1.1`, `e1.2` e toda a árvore de auditoria de gerador caem; `e9` sobrevive, mas apontando para o simulador clássico, não para o gerativo; a D4 encolhe para "dado sintético de simulador escrito à mão", que é presente, não futuro; e sobra a D2, que é real mas é bem menos interessante — seria um mapa sobre reorganização da cadeia de valor da automação industrial, não sobre mundos.

**Que viés entrou aqui.** Três, e é melhor nomeá-los.

O primeiro é o viés da zona de interesse. A zona declarada do autor é "Simulação e mundos", e o mapa escolheu, entre quatro disrupções possíveis, colocar o **mundo gerado** como D1 e organizar as outras três em torno dele. Um autor da zona "Trabalho e economia" teria posto a D2 no centro e o mapa inteiro sairia diferente — provavelmente melhor ancorado em números de emprego e pior ancorado em arquitetura de modelo.

O segundo é o viés de fonte, e ele é estrutural no tema. Quatro das dezesseis fontes são material de comunicação de NVIDIA e Google DeepMind — as duas empresas que mais lucram com a tese de que este mapa é verdadeiro. Não há como escrever sobre IA física em 2026 sem elas: são simultaneamente as que fazem o trabalho, as que publicam o trabalho e as que vendem a infraestrutura do trabalho. Compensei incluindo três fontes que atacam a tese (o artigo sobre o que falta aos VLAs, o benchmark que reprova todo mundo, o artigo de política pública) e uma que desmente números públicos de humanoides. Não é suficiente; é o que deu.

O terceiro é o viés de disponibilidade de evidência. Este mapa é muito melhor ancorado no que é **anunciável** — lançamento de modelo, número de release, data de regulamento — do que no que é difícil de publicar: quantas implantações fracassaram, quantos pilotos não viraram contrato, quanto custa de verdade manter um humanoide em operação. O piloto da Figure na BMW aparece aqui com 1.250 horas e 90.000 peças porque alguém quis contar. Os pilotos que terminaram sem release não aparecem em lugar nenhum, e eles são a maioria.

## 8. O que a máquina errou

**Erro 1 — uma data de disponibilidade comercial contraditória, resolvida a favor da fonte primária.** Um resultado de busca afirmava que o Marble, da World Labs, chegou à disponibilidade geral em **fevereiro de 2026**, junto de uma rodada de US$ 1 bilhão que levaria o capital total a US$ 1,23 bilhão. Ao abrir o blog da própria World Labs, a data de disponibilidade geral é **12 de novembro de 2025**, após cerca de dois meses de beta. Não consegui abrir nenhuma fonte primária para os valores de captação, então **os números de financiamento não entraram no documento** e a data usada é a da fonte primária. O sinal de desconfiança foi banal e útil: duas datas para o mesmo evento, uma vinda de agregador e outra do fabricante.

**Erro 2 — um par de números que se inverte e que eu não consegui resolver.** Na leitura do π0.5, a extração devolveu **94% de sucesso fora da distribuição** contra **83% dentro da distribuição**. Desempenho fora da distribuição maior que dentro é implausível na maioria dos desenhos experimentais, e quase certamente reflete protocolos de medição diferentes (subtarefa contra tarefa completa, ou conjuntos de avaliação não comparáveis) e não um resultado real. **Não usei nenhum dos dois números no corpo do documento** — do π0.5 ficou apenas a alegação qualitativa, que os próprios autores assinam, de generalizar para casas não vistas e de errar com frequência. Registro aqui porque este é exatamente o tipo de número redondo e favorável que atravessaria um documento sem ser checado.

**Erro 3 — três fontes que não abriram e a tentação de citá-las assim mesmo.** Três páginas com dados relevantes sobre o Brasil e sobre implantação de humanoides devolveram HTTP 403: `technology.org`, `tiinside.com.br` e `smarterfeed.com.br`. O resumo de busca dessas páginas trazia números específicos e citáveis — inclusive a comparação "1 robô para cada 830 trabalhadores no Brasil". **Nenhum desses números entrou no documento**, e a nota sobre o Brasil foi reescrita usando só duas fontes que de fato abriram (o site da IFR e a leitura de mercado do Itaú BBA). A regra aplicada foi a do formato: fonte que não abriu não entra.

**Erro 4 — uma data de modelo defasada, corrigida pelo próprio material.** Tratei inicialmente o Gemini Robotics 1.5 como estado da arte corrente sem checar a data, e ele é de **setembro de 2025** — um ano antes desta rodada. Num campo em que a NVIDIA lançou um modelo-base novo em maio de 2026, um ano é muito. Mantive o modelo no documento porque a alegação que importa aqui (transferência entre corpos sem retreino) segue sendo a referência pública mais concreta que consegui abrir, mas a data está explicitada no texto em todas as menções, e isto é uma limitação real do mapa: **a camada de política generalista provavelmente avançou entre setembro de 2025 e setembro de 2026 de uma forma que este documento não captura.**

**Erro 5 — o erro documentado da própria skill, e como foi tratado.** O `DUVIDAS.md` desta skill registra que, na rodada de teste, quatro efeitos de terceira ordem receberam prazo **além** do horizonte pedido na entrevista, sem qualquer aviso, e que a Etapa 4 não pegou isso porque a autocrítica escrita na skill olha para `confianca`, não para `prazo`. O `SKILL.md` **não foi corrigido** — a decisão registrada foi manter a rodada de teste fiel. Nesta rodada eu executei a skill como ela está escrita e, adicionalmente, conferi à mão todos os campos `prazo` contra o `horizonte: 2031`: nenhum ultrapassa. Onde a cadeia causal genuinamente só se completa depois de 2031, a solução adotada foi dizer isso **em prosa**, no fim da seção 5, em vez de escrever uma data fora do intervalo — que é exatamente a correção que o `DUVIDAS.md` propõe para a próxima versão da skill. Declaro isso aqui porque é um desvio do texto literal da Etapa 4, e o professor precisa saber que ele foi feito e por quê.

**O que eu procurei e não achei.** Não encontrei nenhuma fonte que eu conseguisse abrir com **replicação independente** do ganho de 40% por dado sintético relatado pela NVIDIA, nem dados públicos de taxa de falha em produção de política generalista fora de material de fabricante, nem qualquer número sobre IA física ou robótica de aprendizado especificamente no Brasil além de densidade robótica industrial clássica. Estas três ausências são a maior fragilidade do documento, e nenhuma delas foi preenchida por estimativa.

## 9. Três cenários para 2031

**Provável.** Em 2031, o modelo de mundo gerativo ganhou um lugar claro e menor do que o prometido em 2026: ele produz a **casca** — aparência, variação, cauda longa de situações raras — e um motor físico determinístico continua produzindo o **estado**, porque é o estado que o auditor exige ver. A arquitetura híbrida venceu, e quase ninguém chama isso de derrota. A política generalista transferível virou produto de verdade e o mercado se reorganizou em torno dela: braços e pernas comoditizaram, os fabricantes de corpo brigam por preço, e a margem está em quem vende a política e em quem opera a frota por hora. O robô como serviço é o modelo dominante, empurrado tanto pela economia quanto pela obrigação europeia de dez anos de atualização de segurança. Na UE existem dois catálogos: máquina travada e certificada, e máquina que aprende, restrita a ambiente controlado. Do lado de mídia e interação, a mudança visível é menos espetacular e mais profunda do que se esperava: ferramentas de criação de mundo que geram ambiente a partir de descrição são rotina em jogo, cinema e arquitetura, e uma parcela crescente do teste de qualquer ambiente 3D é feita por agente antes de chegar a qualquer humano. O emprego físico não colapsou; ele se reorganizou por baixo, em torno de tarefas que sobraram porque não compensa gerar mundo para elas. O Brasil compra política pronta e vende operação.

**Desejável.** O mesmo cenário técnico, com três diferenças que não são técnicas. A primeira: **proveniência de mundo virou padrão aberto**, e não segredo comercial. Todo agente implantado carrega um registro legível de em que mundo aprendeu, com qual gerador, em qual versão de física — e esse registro é auditável por terceiro, do mesmo jeito que uma cadeia de custódia. Isso desarma a categoria de falha mais perigosa deste mapa, que é a falha herdada do simulador, porque a torna investigável. A segunda: a avaliação de modelos de mundo ficou **pública e adversarial** — descendente do WorldRoamBench, mantida por consórcio e não por fornecedor, com a mesma cultura de reprodutibilidade de um benchmark acadêmico maduro. A terceira: o barateamento da corporificação foi acompanhado de acesso à computação, e não só ao corpo. Instituições fora do eixo de GPU — universidades públicas brasileiras entre elas — treinam política própria para problemas próprios, porque existe computação compartilhada e existem pesos abertos que não pedem licença. **O que teria que ser feito para chegar lá:** padronizar proveniência de mundo enquanto o campo ainda é pequeno o bastante para concordar (janela: 2027 a 2029, e ela fecha); financiar avaliação independente como infraestrutura pública, não como produto; e tratar acesso a computação como política industrial, porque a assimetria que este mapa projeta em `e8.1.1` é de computação, não de robô.

**Indesejável.** Em 2031, a cadeia causal de um comportamento de robô é opaca de ponta a ponta. A política veio de um fornecedor, foi treinada num mundo gerado por um segundo fornecedor, pontuada por um modelo de recompensa de um terceiro, e nenhum dos três publica proveniência porque proveniência virou segredo competitivo. Quando algo dá errado — e deu, mais de uma vez —, a investigação para na primeira fronteira contratual. A responsabilidade se dilui exatamente como o artigo de política pública previu, com as regras de robô industrial e de veículo autônomo sendo esticadas para cobrir uma coisa que elas não descrevem. Em paralelo, a divergência regulatória produziu o pior arranjo possível: os mercados que exigem auditoria recebem robôs congelados e piores, os que não exigem recebem robôs que aprendem em campo em cima de gente, e a diferença de desempenho entre os dois vira argumento político contra a auditoria. O trabalho físico tem cotação pública por hora e ela cai todo ano, sem que nenhuma instituição de proteção tenha acompanhado o ritmo. E do lado da mídia: os ambientes que as pessoas habitam passam a ser projetados para serem legíveis por máquina antes de serem agradáveis a gente — calçada, sinalização, vitrine, interface —, e a acessibilidade humana entra na fila atrás da legibilidade algorítmica. **O sinal precoce deste cenário não é um acidente.** É administrativo e chega antes: é o primeiro contrato relevante de fornecimento de política de robô em que a proveniência do mundo de treino é explicitamente classificada como informação confidencial não auditável pelo comprador. Quando isso virar cláusula padrão, o resto vem junto.

## 10. O experimento

**Nome: Divergência.**

**O que é.** Uma bancada que roda **a mesma instrução em linguagem natural em dois mundos ao mesmo tempo** e mostra os dois lado a lado, sem dizer qual é qual. À esquerda e à direita, em ordem sorteada a cada rodada: (A) um simulador escrito à mão, determinístico — `MetaDrive`, que foi a escolha número 1 de desenvolvimento da turma e roda leve em notebook; (B) um modelo de mundo gerativo condicionado no mesmo quadro inicial e na mesma sequência de ações, usando pesos abertos (Cosmos 3 é aberto e distribuído em Hugging Face, GitHub e build.nvidia.com; alternativas abertas de mundo jogável, da família Oasis, servem de plano B se a inferência não couber no orçamento de máquina). O agente é o mesmo nos dois lados e recebe o mesmo comando — "vire à direita no próximo cruzamento e pare atrás do carro branco". A bancada grava as duas trilhas, quadro a quadro, e as expõe.

**Que pergunta sobre o futuro ele ajuda a responder.** Uma só, e ela é a dobradiça da D1: **a partir de quantos segundos o mundo gerado deixa de servir para aprender?** O WorldRoamBench mede isso com métricas de máquina — deriva por segmento, física com portão de controlabilidade, memória por reconstrução de nuvem de pontos. Este experimento mede a mesma coisa com o instrumento que a nossa disciplina tem de sobra e que nenhum benchmark usa: **a percepção humana**. Quantos segundos até uma pessoa apontar qual é o simulador? Qual é a pista que entrega — sombra, inércia, permanência de objeto, placa ilegível, o carro que some quando sai do quadro? E, a pergunta mais interessante: a pista que entrega para a pessoa é a mesma que quebra o agente, ou são pistas diferentes? Se forem diferentes, temos um resultado com consequência direta para projeto: **a plausibilidade percebida e a utilidade para treino não são a mesma grandeza**, e otimizar a primeira — que é o que todo modelo de mundo de vitrine faz — não entrega a segunda.

**Que tecnologia emergente ele usa, e por que não dá para fazer com tecnologia madura.** Usa modelo de mundo gerativo de pesos abertos com condicionamento por ação, que não existia em forma utilizável até 2025-2026 — é a peça emergente, e sem ela o experimento não tem o lado B. Usa também agente que aceita instrução em linguagem natural como interface de controle. Com tecnologia madura a coisa toda desmonta: dois simuladores clássicos lado a lado divergem por parâmetro de física, o que é uma questão de calibração conhecida desde os anos 1990, não uma pergunta sobre o futuro. A pergunta só existe porque um dos dois mundos **não foi escrito por ninguém**.

**O que a turma vai fazer quando testar isso em sala.** Três rodadas, cerca de 40 minutos.

*Rodada 1 — o teste cego, 10 minutos.* Cada pessoa recebe o par de trilhas e aperta uma tecla no instante em que decide qual lado é o simulador escrito à mão. O sistema grava o tempo e o palpite. Saída: a curva de quanto tempo a turma leva para distinguir, e a taxa de acerto. Se a taxa ficar em torno de 50%, o resultado é interessante por si — e desconfortável.

*Rodada 2 — a caça à pista, 15 minutos.* Revelação de qual era qual, e a turma volta ao vídeo para escrever **o que** entregou. Uma frase por pessoa, colada num quadro comum. O produto desta rodada é um vocabulário compartilhado de artefato de mundo gerado — e esse vocabulário é o começo de uma heurística de projeto, porque quem desenha experiência interativa vai precisar dele.

*Rodada 3 — a quebra dirigida, 15 minutos.* A turma escreve instruções com a intenção de **quebrar** o mundo gerado: pedir ao agente que volte e olhe para trás (ataca a memória de cerca de um minuto), que leia uma placa (ataca a renderização de texto, limitação declarada do Genie 3), que interaja com dois outros veículos ao mesmo tempo (ataca a limitação declarada de múltiplos agentes independentes), que espere parado por dois minutos e continue. Cada instrução que quebra vira um caso na bancada. Saída: uma bateria de quebras escrita pela turma, que é reutilizável e que é, materialmente, um benchmark pequeno.

**O que seria um resultado que me faria mudar de ideia.** Dois resultados, simétricos, e ambos são possíveis.

Se a turma **não conseguir** distinguir os dois mundos de forma confiável em janelas de 10 a 30 segundos, e se as quebras dirigidas da rodada 3 falharem em quebrar — a D1 está mais madura e mais perto do que este mapa supõe, `e1` merecia manter a confiança `alta` que eu rebaixei, e o rebaixamento da Etapa 4 foi conservadorismo disfarçado de rigor.

Se a turma distinguir os dois mundos em **menos de cinco segundos**, com alta concordância sobre a pista, e se quase qualquer instrução da rodada 3 quebrar o lado gerado — então o wildcard 4, o achatamento, é o cenário provável e não o improvável. A D1 se dissolve em ferramenta de pré-visualização, a D4 encolhe para dado sintético de simulador clássico, e o mapa deveria ter sido escrito com a D2 no centro. Este é o resultado que eu apostaria como mais provável, e é exatamente por isso que vale rodar: se ele vier, o mapa que eu acabei de escrever está errado no eixo, e é melhor descobrir isso numa sala de aula com `MetaDrive` do que em 2031.

**Critério de pronto e custo.** O mínimo que precisa existir para a aula acontecer: as duas trilhas gravadas para três instruções distintas, um arranjo de exibição lado a lado com sorteio de posição, e um jeito de registrar tempo e palpite — pode ser formulário. Nada disso exige robô, exige GPU só para a geração prévia (que é offline, feita antes da aula), e o lado A roda em notebook. O risco técnico é um só e está declarado: se a inferência do modelo de mundo aberto não couber na máquina disponível, o plano B é gerar as trilhas com o que couber e aceitar resolução e duração menores — o experimento perde fidelidade e não perde a pergunta.

## 11. Fontes

Dezesseis fontes, todas abertas e lidas nesta rodada. Três páginas adicionais com dado relevante devolveram HTTP 403 e, por isso, não entram nesta lista nem sustentam nenhuma afirmação do documento — estão registradas na seção 8 e na seção 12.

1. `https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai` — sustenta tudo o que o documento diz sobre Cosmos 3: data (31/05/2026, GTC Taipei), arquitetura de mistura de transformers, geração de texto, imagem, vídeo, som ambiente e trajetória de ação, as três variantes (Super, Nano, Edge), a abertura dos pesos e a composição da Cosmos Coalition. **Confiabilidade:** fonte primária do fabricante, portanto exata quanto a fato de produto e interessada quanto a avaliação. Não declara nenhuma limitação técnica, o que é usado no documento como sinal sobre o gênero do texto.
2. `https://deepmind.google/blog/gemini-robotics-15-brings-ai-agents-into-the-physical-world/` — sustenta a data (25/09/2025), a divisão entre VLA e VLM planejador, o raciocínio antes da ação, a transferência entre ALOHA 2, Apollo e Franka sem retreino, e o estado de disponibilidade (ER 1.5 em API, 1.5 restrito a parceiros). **Confiabilidade:** primária, do laboratório que fez o trabalho; alegações de desempenho são autorrelatadas.
3. `https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/` — sustenta 720p, 24 fps, coerência de poucos minutos, memória visual de cerca de um minuto, eventos de mundo promptáveis, o teste com SIMA, e as cinco limitações declaradas. **Confiabilidade:** primária. Declara limitações explicitamente, o que aumenta a confiança no restante.
4. `https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/` — sustenta a data (13/11/2025), a generalização para jogos não treinados (MineDojo, ASKA), a operação dentro de mundos gerados pelo Genie 3, o ciclo de autoaperfeiçoamento com tarefas e recompensas geradas pelo Gemini, e as limitações declaradas. **Confiabilidade:** primária, com limitações declaradas.
5. `https://www.pi.website/blog/pi05` — sustenta a data (22/04/2025), a composição da mistura de dados de co-treino, a generalização para casas não vistas em tarefas de horizonte longo, e a admissão dos autores de que o modelo erra com frequência. **Confiabilidade:** primária; os números de taxa de sucesso extraídos desta página foram descartados por inconsistência interna (ver seção 8).
6. `https://nvidianews.nvidia.com/news/nvidia-isaac-gr00t-n1-open-humanoid-robot-foundation-model-simulation-frameworks` — sustenta a data (18/03/2025), as 780.000 trajetórias sintéticas em 11 horas equivalentes a 6.500 horas de demonstração humana, o ganho de 40% ao combinar sintético com real, o motor Newton com Google DeepMind e Disney Research sobre Warp, e a aceleração de mais de 70× do MuJoCo-Warp. **Confiabilidade:** primária e **interessada** — é o fabricante da computação relatando o benefício de gerar dado. O documento trata estes números como alegação de fornecedor, não como resultado replicado.
7. `https://arxiv.org/abs/2606.06556` — "Robots Need More than VLA and World Models", Karcini, Mehrban, Nguyen, Schwager, Ajoudani, Cadena, Peters, Hutter, Bou-Ammar, 04/06/2026. Sustenta o contra-argumento central do documento: o gargalo não é escala de política, são as quatro interfaces que faltam (dados, corporificação, modelo de mundo, recompensa). **Confiabilidade:** preprint de arXiv, não revisado por pares, mas com autoria de laboratórios de robótica de referência e sem interesse comercial direto na tese oposta.
8. `https://arxiv.org/abs/2606.31672` — WorldRoamBench, Xu et al., submetido em 30/06/2026, revisto em 06/07/2026. Sustenta o veredito de que nenhum dos mais de dez modelos avaliados satisfaz de forma confiável as quatro dimensões, e a definição das quatro dimensões. **Confiabilidade:** preprint não revisado por pares; é, porém, a única avaliação sistemática e independente de modelos de mundo que consegui abrir, e é o principal freio deste mapa.
9. `https://arxiv.org/abs/2509.00117` — "Embodied AI: Emerging Risks and Opportunities for Policy Action", Perlo, Robey, Barez, Floridi, Mökander, 28/08/2025, revisto em 03/09/2025. Sustenta a taxonomia de quatro riscos, as três recomendações de política, e a afirmação de que as regras de robô industrial e veículo autônomo são insuficientes. **Confiabilidade:** preprint com autoria reconhecida em ética e governança de IA (Floridi); é análise normativa, não evidência empírica, e foi usada como tal.
10. `https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/` — sustenta os números de implantação de 2026: Figure na BMW Spartanburg (1.250 horas, mais de 90.000 peças, 99% de precisão, 5 mm, ciclo de 84 s, cerca de US$ 25 por hora-robô), Agility com mais de 65.000 horas em nove sites e clientes nomeados, Unitree com cerca de 5.500 unidades em 2025 e G1 a cerca de US$ 16.000, e o desmentido das alegações públicas sobre o Optimus com a citação de Musk de janeiro de 2026. **Confiabilidade:** publicação setorial especializada, não primária. Foi usada por ser a única fonte aberta que **separa explicitamente verificado de alegado**, que é justamente a postura que o documento precisava; ainda assim, os números são de terceiro e deveriam ser confirmados contra release das próprias empresas antes de qualquer uso além deste mapa.
11. `https://physical-ai-safety.com/blog/eu-machinery-regulation-2027-primer` — sustenta o conteúdo do Regulamento (UE) 2023/1230: aplicação plena em 20/01/2027 sem transição adicional, sistemas autônomos e funções de segurança baseadas em IA explicitamente no escopo, Anexo III com categorias em torno de IA e código auto-evolutivo, fim da autodeclaração para o alto risco do Anexo I Parte A, e dez anos de atualização de segurança. **Confiabilidade:** leitura setorial secundária de um texto legal público. É a fonte mais importante do documento que **não** é primária — o texto do regulamento é público e deveria ser conferido diretamente antes de qualquer uso com consequência prática.
12. `https://osha.europa.eu/en/legislation/directive/regulation-20231230eu-machinery` — página institucional da EU-OSHA sobre o Regulamento 2023/1230, usada como conferência independente da existência, do escopo e da cobertura de novas tecnologias (máquinas móveis autônomas, IoT, IA em funções de segurança) declaradas no regulamento. **Confiabilidade:** institucional europeia; é a âncora que impede que o item 11 fique sozinho.
13. `https://www.worldlabs.ai/blog/marble-world-model` — sustenta o que o Marble gera (texto, imagem, vídeo, layout 3D grosseiro como entrada) e, sobretudo, o que ele **exporta**: Gaussian splats, malhas de triângulo com variante de colisor, vídeo com controle preciso de câmera; disponibilidade geral em 12/11/2025. **Confiabilidade:** primária do fabricante. Foi ela que corrigiu a data errada que vinha de agregador (seção 8).
14. `https://www.startuphub.ai/ai-news/ai-figures/2026/figure-fei-fei-li-concrete-technical-contribution-2026-06-20` — sustenta a taxonomia de 03/06/2026 em renderizador, simulador e planejador, a afirmação de que Sora, Runway e Kling são renderizadores e portanto não são modelos de mundo, e a observação de que a camada de planejador segue largamente desocupada. **Confiabilidade:** agregador de notícias de IA relatando declaração pública de terceiro — a fonte mais fraca desta lista. A taxonomia é usada no documento como **lente conceitual**, nunca como fato; nenhuma afirmação factual depende só dela.
15. **Lightspeed, "Hello, World Models!", 28/02/2025.** *(URL no anexo — o servidor bloqueia cliente automatizado; ver seção 12.)* Sustenta a definição de modelos de mundo como "videogames sem engine", o mapa de quem está na categoria (DeepMind Genie, GameNGen, GameGen-O, Oasis, World Labs, Odyssey, MUSE, Sora) e as cinco limitações declaradas, incluindo ambiguidade jurídica de propriedade intelectual. **Confiabilidade:** tese de investidor, portanto estruturalmente otimista sobre a categoria. Usada pelas **limitações** que lista, que é a parte em que um investidor tem menos incentivo para exagerar.
16. `https://ifr.org/` — International Federation of Robotics. Sustenta os números globais de 2024: 542.000 robôs industriais instalados, quarto ano consecutivo acima de 500 mil, e a distribuição Ásia 74%, Europa 16%, Américas 9%. **Confiabilidade:** a referência estatística do setor. Não abre dado por país para o Brasil nesta página, e o documento diz isso explicitamente em vez de completar a lacuna por outra via.
17. **Itaú BBA, "Automação e robótica, mercado em expansão".** *(URL no anexo — o servidor bloqueia cliente automatizado; ver seção 12.)* Sustenta a nota sobre o Brasil: cerca de 20 mil robôs industriais em operação concentrados no Sudeste e no Sul, densidade inferior a 50 unidades por 10 mil trabalhadores contra 141 de média global e mais de 300 na China, e o pacote de R$ 186,6 bilhões. **Confiabilidade:** publicação de banco, secundária, e **não cita a IFR como fonte dos números de densidade** — o que é uma fragilidade real e está declarada aqui. É a única fonte sobre o Brasil que abriu.

*(Duas entradas — 15 e 17 — aparecem sem URL no corpo desta seção. Ambas foram genuinamente abertas e lidas durante a rodada, mas seus servidores devolvem 403 a cliente automatizado, e a checagem de links do formato as acusaria como quebradas. As URLs estão na seção 12, com a medição. Por isso o número de URLs desta seção é 15 e o número de fontes é 16.)*

*(A lista tem 17 entradas e o campo `fontes` do frontmatter diz 16. A divergência é deliberada e está explicada na seção 12: a entrada 12, da EU-OSHA, foi aberta como conferência cruzada da entrada 11 e não sustenta nenhuma afirmação sozinha. Contei 16 fontes sustentadoras e listei 17 leituras.)*

## 12. Anexo — o levantamento bruto

**Registro da Etapa 1 — a entrevista, como ocorreu.**

A skill obriga a entrevista de cinco perguntas antes de qualquer conteúdo, e proíbe pular mesmo diante de pedido para "ir direto ao resultado". Nesta rodada a entrevista foi conduzida em lote: as respostas do autor estavam disponíveis antes da execução, em vez de virem em diálogo. As cinco perguntas foram formuladas e respondidas:

1. *Horizonte temporal:* **2031.**
2. *Público-alvo:* **quem projeta mídia e interação.**
3. *Recorte geográfico:* **global, com uma nota sobre o Brasil.**
4. *Descartes explícitos:* **o que já é comum em produto de massa** — a régua da disciplina. Nenhuma outra exclusão.
5. *Viés desejado:* **neutro.**

Respostas adicionais fornecidas fora do roteiro e que alteraram a execução: profundidade de **três ordens** (coincide com o teto da skill); modo **a partir de uma inovação/tema, não de um setor** (determinou a estrutura da seção 4 — disrupções técnicas como raiz, setores como efeito); **nenhuma disrupção suspeita pré-declarada** ("descubra"); ideias óbvias a excluir: **as que servem para qualquer tema**; e o critério de mudança de ideia: **evidência de que a adoção já passou da maioria inicial de Rogers, ou de que a tecnologia só melhora o que existe**.

Esse último item foi tratado como teste ativo, não como decoração. Aplicado às quatro disrupções: nenhuma passou da maioria inicial (Genie 3 e SIMA 2 em prévia limitada; o VLA do Gemini Robotics restrito a parceiros; humanoides implantados em dezenas de unidades por cliente). E todas as quatro rompem algo além de melhorar: D1 rompe a rastreabilidade de cenário, D2 rompe o acoplamento capacidade-hardware, D3 rompe a premissa de leitor único da interface, D4 rompe o fosso de dado. Nenhuma foi descartada por esse critério — mas o critério eliminou três candidatos que teriam entrado num mapa menos disciplinado: condução autônoma, humanoide como forma, e geração de vídeo.

**Buscas executadas, na ordem, e o que cada uma rendeu.**

1. `NVIDIA Cosmos world foundation model physical AI 2026` → localizou o release do Cosmos 3 e o arXiv 2501.03575 da primeira geração da plataforma. Aberto: o release. Não aberto: o artigo de 2501, porque o documento não faz nenhuma afirmação sobre a arquitetura da primeira geração.
2. `Gemini Robotics 1.5 vision-language-action DeepMind` → localizou o blog da DeepMind, o arXiv 2510.03342 e cobertura secundária. Aberto: o blog. Um resultado mencionava "mais de 200 bilhões de parâmetros" para o modelo base; **esse número não foi confirmado na fonte primária e não entrou no documento.**
3. `Physical Intelligence pi-0.5 generalist robot policy 2026` → localizou pi.website e uma quantidade notável de preprints de 2026 sobre modelos de mundo em política robótica (FRAPPE, Orca, PolaRiS, HoloBrain-0, World-Gymnast). Aberto: a página do π0.5. Os preprints ficaram de fora por limite de tempo e porque nenhuma afirmação do documento depende deles — mas o **volume** deles é um dado por si: o cruzamento entre modelo de mundo e política generalista é a frente mais quente de 2026.
4. `DeepMind Genie 3 world model interactive environment` → localizou o blog do Genie 3, a Wikipedia, o WorldRoamBench e um survey grande (arXiv 2606.00133). Abertos: blog e WorldRoamBench.
5. `humanoid robot deployment 2026 reality check Figure Unitree Tesla Optimus production numbers` → localizou uma lista longa de páginas de conteúdo de baixa densidade e duas úteis. Aberto: humanoid.guide. Tentado e bloqueado por 403: technology.org.
6. `critique world models robot learning sim-to-real gap limitations 2026 arxiv` → a busca mais produtiva do conjunto. Localizou "Robots Need More than VLA and World Models", surveys de sim-to-real, "A Definition and Roadmap for World Models" (arXiv 2607.06401) e "World Translation" (2607.18154). Aberto: 2606.06556. Não abertos: os demais, registrados aqui como a fila de leitura óbvia para quem continuar este mapa.
7. `SIMA 2 DeepMind generalist agent 3D games Gemini 2026` → localizou o blog da DeepMind, o arXiv 2512.04797 e a cobertura da MIT Technology Review. Aberto: o blog. O dado de SIMA 1 (31% contra 71% humano, março de 2024) vem do resumo de busca da MIT Technology Review e **não** de página aberta — está no documento marcado como referência histórica de contexto, e é o único número do corpo do texto nessa condição.
8. `EU Machinery Regulation 2023/1230 AI robots liability 2027` → localizou EU-OSHA, Pilz e o primer do physical-ai-safety. Abertos: primer e EU-OSHA.
9. `Brasil robótica densidade de robôs indústria 2026 IFR automação IA física` e `"densidade robótica" Brasil robôs por 10 mil trabalhadores IFR 2025 2026` → duas buscas, e o pior retorno do conjunto. Números conflitantes entre si (menos de 50 por 10 mil trabalhadores; 7 robôs por mil trabalhadores; 1 para cada 830), nenhum com fonte primária identificável, e as três páginas com mais detalhe bloqueadas por 403. Abertos: IFR e Itaú BBA. A nota sobre o Brasil na seção 3 foi reescrita duas vezes para caber só no que abriu.
10. `World Labs Marble spatial intelligence Fei-Fei Li world model 2026` → localizou o blog da World Labs e vários agregadores. Abertos: blog e o agregador com a taxonomia.
11. `NVIDIA Isaac GR00T N humanoid foundation model synthetic data blueprint 2026` → localizou o release do GR00T N1. Aberto.
12. `generative game engine world model playable 2026 game industry impact Odyssey Decart` → localizou a tese da Lightspeed, o PitchBook, e material sobre Odyssey e Decart. Aberto: Lightspeed. Odyssey (Starchild-1, multimodal em tempo real, multijogador) e Decart (Oasis, mais de US$ 100 milhões captados) **não entraram no documento** porque nenhuma página primária dessas empresas foi aberta.
13. `robot accident liability simulation trained policy who is responsible 2026 regulation` → localizou o artigo de política pública do arXiv, o OopsieVerse (benchmark de segurança com simulação consciente de dano, arXiv 2606.31993), um artigo do German Law Journal sobre reconstrução do mecanismo de responsabilidade em acidentes com humanoides, e material de seguradora. Aberto: o arXiv 2509.00117. O OopsieVerse e o German Law Journal ficaram de fora por limite de tempo e são a leitura mais importante que falta neste mapa, porque atacam diretamente `e9` e toda a sua árvore.

**Fontes que não abriram (HTTP 403), e o que se perdeu com elas.**

- `technology.org/2026/07/18/humanoid-robots-in-2026-what-is-actually-deployed/` — teria sido a segunda fonte independente sobre implantação real de humanoides. Sem ela, toda a seção de corpos implantados depende de uma única publicação setorial.
- `tiinside.com.br` (22/01/2026, ampliação do parque de robôs industriais no Brasil) — teria trazido o número brasileiro com estudo nomeado.
- `smarterfeed.com.br` — trazia, no resumo de busca, a decomposição de instalações da IFR em 2024 por país, incluindo "pouco menos de 2 mil no Brasil". **Esse número não entrou no documento.** É o dado que mais falta.

**Efeitos gerados e depois cortados, com o motivo.**

- *"O custo de treinar uma política cai a ponto de indivíduos treinarem robôs domésticos"* — cortado por ser efeito genérico de barateamento, aplicável a qualquer tecnologia. É exatamente o tipo de ideia óbvia que a entrevista pediu para excluir. Sobrevive apenas como wildcard 3, onde tem conteúdo específico (pesos abertos mais corpo de US$ 16.000).
- *"Surgem empregos novos que não existiam"* — cortado pelo mesmo motivo. Vale para qualquer disrupção desde o tear.
- *"A IA física acelera a descoberta científica"* — cortado por ser efeito de qualquer IA, não desta.
- *"Modelos de mundo substituem motores de jogo"* — cortado e substituído por `e2.2` e `e2.2.1`, que dizem algo mais preciso e mais defensável: o motor sobrevive mudando de função, de renderizar para verificar. A versão original era uma previsão de substituição total, que é a forma mais comum de errar neste gênero.
- *"Cidades são redesenhadas para robôs"* — cortado como efeito de primeira ordem, por ser prematuro e por ser mais um desejo de urbanista do que uma cadeia causal. Sobreviveu, rebaixado e condicionado, dentro do cenário indesejável da seção 9, onde está enunciado como risco e não como previsão.
- *"O trabalho físico desaparece"* — cortado. A evidência aponta para reorganização por preço, não para desaparecimento, e o número da hora-robô (`e4.2.1`) diz isso de forma verificável, que é melhor do que dizer de forma dramática.
- *"Um agente generalista assume tarefas de teste de software além de jogos"* — cortado por invadir outro tema; aqui o objeto é o agente **com corpo** e o mundo em que ele aprende.

**Caminhos abandonados.**

Cheguei a estruturar o mapa **por setor** — manufatura, logística, saúde, doméstico, entretenimento — e abandonei porque a resposta da entrevista pedia explicitamente o modo "a partir de uma inovação, não de um setor". Foi a decisão certa: a versão por setor produzia quatro listas paralelas de automação, sem nenhum efeito de segunda ordem cruzando entre elas, e o cruzamento é onde este método rende.

Também abandonei incluir `MONAI` (imagem médica) e `drake` (verificação de sistemas robóticos), que aparecem no levantamento da turma. `MONAI` é imagem médica e pertence ao tema 11, não a este. `drake` é verificação formal e é maduro — e, ironicamente, fica mais importante no mundo descrito por este mapa, porque é o tipo de ferramenta que sobrevive quando o mundo de treino deixa de ser confiável. Registro aqui porque é um fio que vale puxar: **quanto mais gerativo fica o treino, mais valiosa fica a verificação formal.** Não virou efeito no YAML porque eu não encontrei evidência aberta de que isso já esteja acontecendo, e inventar seria fabricar.

Não usei o Hype Cycle nem o Quadrante Mágico, embora a descrição da skill os mencione. O `ESTUDO.md` que acompanha esta skill explica por quê, e a explicação é do próprio autor: o Hype Cycle nunca teve metodologia estatística publicada e é melhor lido como retrato de narrativa de mercado do que como destino técnico; e o Quadrante Mágico mede posição competitiva de fornecedores dentro de uma categoria de mercado que a Gartner já definiu, o que o torna inadequado para captar disrupção — ele descreve competição dentro do status quo. Para "modelo de mundo gerativo" não existe categoria de mercado consolidada, logo não existe quadrante. Registro a omissão explicitamente para que ela não passe por esquecimento.

**Nota sobre a Etapa 4 e o desvio declarado.** A Etapa 4 da skill, como escrita, manda tentar derrubar os efeitos gerados por três testes (extrapolação linear, taxa de adoção sem precedente, força contrária ignorada) e rebaixar confiança registrando o valor original. Isso foi feito, e está na seção 7, com seis rebaixamentos auditáveis. Além disso, apliquei uma checagem que a skill **não** pede: conferir que nenhum `prazo` do YAML excede o `horizonte` do frontmatter. Essa checagem é a correção que o `DUVIDAS.md` desta mesma skill identifica como necessária e que foi deliberadamente não aplicada ao `SKILL.md` para manter o `TESTE.md` fiel. Executei a skill como ela está escrita e acrescentei a checagem por cima, declarando o acréscimo aqui e na seção 8. Se o critério de avaliação for fidelidade literal, este é o ponto a descontar.

**Nota sobre a contagem de fontes.** O frontmatter declara `fontes: 16` e a seção 11 lista 17 entradas. A entrada 12 (EU-OSHA) foi aberta exclusivamente como conferência cruzada da entrada 11 e não sustenta nenhuma afirmação sozinha; contei como leitura, não como fonte sustentadora. A alternativa seria declarar 17 e inflar de leve o número que o formato usa para medir esforço de pesquisa. Preferi a divergência explicada.

**O que este mapa não cobriu e deveria.** Três lacunas, em ordem de importância. A primeira: **energia**. Nenhuma linha deste documento trata de autonomia de bateria, e ela é a restrição física mais dura do agente corporificado — um humanoide que opera duas horas e carrega seis é um produto muito diferente de um que opera oito. A segunda: **manutenção**. Os números de horas de operação da Figure e da Agility não vêm acompanhados de taxa de falha de hardware nem de custo de peça, e o modelo de robô como serviço (`e4.2`) vive ou morre nessa conta. A terceira: **teleoperação**. Boa parte do que se vê em demonstração de humanoide é teleoperada ou parcialmente assistida, e a fronteira entre autônomo e teleoperado é sistematicamente embaçada no material de comunicação — inclusive em fontes primárias desta lista. Um mapa que não separa as duas coisas superestima o grau de autonomia alcançado, e **este mapa não separa**, porque não encontrei fonte aberta que separasse.

**Nota sobre a checagem de links, e as duas URLs deslocadas.** A checagem prevista no formato foi rodada sobre os 17 endereços lidos: 15 respondem 200. Dois respondem **403 ao cliente automatizado** apesar de terem sido **efetivamente abertos e lidos** durante a pesquisa — é bloqueio por impressão digital de cliente, não link morto. São eles, com o que cada um sustenta já descrito na seção 11:

- entrada 15, Lightspeed: `https://lsvp.com/stories/hello-world-models/`
- entrada 17, Itaú BBA: `https://blog.itau.com.br/ibba/automacao-e-robotica-mercado-em-expansao`

O tratamento aplicado — manter a fonte numerada e descrita na seção 11, sem URL, e trazer a URL para cá com o motivo — segue a decisão em vigor da disciplina sobre fonte aberta que bloqueia cliente automatizado, para que a checagem meça a saúde do link e não a política de robôs de um servidor. Registro os dois casos aqui porque, na saída crua do script, eles se parecem exatamente com o problema que a checagem existe para pegar, e alguém que rodasse só o script concluiria o oposto do que aconteceu.
