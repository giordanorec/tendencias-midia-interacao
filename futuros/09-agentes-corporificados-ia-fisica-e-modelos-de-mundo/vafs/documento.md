---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: vafs
zona_de_interesse: Simulação e mundos
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: [NVIDIA Cosmos 3, Genie 3, Project Genie, SIMA 2, Gemini Robotics 1.5, pi-0.7 (Physical Intelligence), World Labs R2S2R, Interactive World Simulator, Isaac Lab, MuJoCo, MetaDrive, AirSim, Genesis, habitat-sim, Newton, ROS 2, MoveIt 2, SLAM, Open X-Embodiment, Figure 03, Agility Digit, Unitree G1, Waymo Driver]
fontes: 18
confianca: media
experimento: "O ponto cego do simulador — troca cruzada de mundos em MetaDrive"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

A disrupção que este mapa persegue não é o robô. É **o mundo em que ele aprende**. Entre
2025 e 2026 o ambiente de treino deixou de ser algo que um engenheiro modela e passou a ser
algo que um modelo **gera**: a NVIDIA lançou o Cosmos 3 como modelo de fundação aberto para
IA física em 31/05/2026, o Google abriu o Genie 3 ao público pago em 29/01/2026, e trabalhos
de 2026 já relatam políticas robóticas treinadas dentro de modelos de mundo com desempenho
comparável ao de políticas treinadas com a mesma quantidade de dado real.

Ao mesmo tempo, o agente com corpo deixou de ser uma política por tarefa e virou um modelo de
fundação que atravessa corpos (Gemini Robotics 1.5, π0.7) e mundos 3D sem acesso ao código
(SIMA 2). Três coisas perdem a razão de existir se isso escalar: a coleta de demonstração
humana como caminho obrigatório para cada tarefa nova, o programa-por-célula do integrador de
automação, e a API como pré-requisito para automatizar um ambiente digital.

Para quem projeta mídia e interação, a consequência mais concreta não é estética — é de
mercado e de ofício: **estúdio de jogo e laboratório de robótica passam a comprar o mesmo
artefato**. A Autodesk pôs US$ 200 milhões na World Labs em fevereiro de 2026; a Coalizão
Cosmos, lançada pela NVIDIA no mesmo ano, senta Runway, Black Forest Labs e LTX à mesma mesa
que Skild AI e Agile Robots. Quem desenha espaço passa a ser avaliado por uma propriedade que
hoje não está no portfólio: **se o mundo que você fez ensina**.

O mapa é deliberadamente neutro e tem um freio declarado: robô industrial de braço, ROS, SLAM
e planejamento de trajetória foram testados e **rejeitados como disrupção-raiz por maturidade**
(4.664.000 robôs industriais em operação no mundo em 2024). Humanoide também foi rejeitado —
por ser forma-fator, não mecanismo. Os efeitos de 3ª ordem saem majoritariamente com confiança
baixa, e isso é o resultado esperado, não uma falha do trabalho.

---

## 2. O tema

**O recorte.** Não é robótica em geral. É o par **agente corporificado + mundo de treino**: a
técnica que permite a uma política aprender num ambiente sintético e funcionar no real
(*sim-to-real*), e a virada recente em que esse ambiente deixa de ser renderizado por um motor
escrito à mão e passa a ser **gerado por um modelo** (*world model*). O objeto é o que a IA
aprende antes de tocar o mundo, e quem responde quando o que ela aprendeu não corresponde ao
mundo.

**O horizonte** é 2031 — cinco anos. Não é prazo de ficção: é prazo em que contrato de trabalho,
norma de conformidade e currículo de graduação mudam ou não mudam.

**O público** é quem projeta mídia e interação. Isso muda o que conta como efeito relevante:
um deslocamento no mercado de fornecedores de motor gráfico importa aqui; um ganho de 3 pontos
percentuais num *benchmark* de manipulação, não.

**O viés declarado é neutro.** Onde o sinal é ambíguo, este mapa registra as duas leituras em
vez de escolher a mais interessante. O custo disso aparece: vários efeitos ficaram com
`confianca: baixa` em lugar de serem escritos com mais convicção do que a evidência sustenta.

**O que ficou de fora, e por quê.** A régua da disciplina — o que já é comum em produto de
massa não entra como disrupção — e as fronteiras com os temas vizinhos: simulação de
*sociedades* é o tema 6, captura do mundo real em 3D é o tema 10, percepção e segmentação é o
tema 11. Aqui o objeto é o agente com corpo e o mundo em que ele aprende.

**Uma nota sobre o Brasil**, pedida no recorte: o país tem **18 robôs por 10 mil trabalhadores
de manufatura**, contra uma média global relatada de 151 na mesma fonte, com o setor automotivo
como exceção isolada (350 por 10 mil). O mercado brasileiro de robótica e automação chegou a
R$ 8,2 bilhões em 2026, o maior da América Latina, e a barreira apontada é tributária antes de
ser técnica: a carga empilhada de II + IPI + ICMS + PIS/COFINS resulta em custo de desembarque
de 2 a 3 vezes o dos Estados Unidos. Há, porém, um ponto em que o Brasil não é retardatário:
cerca de **45 mil drones agrícolas em operação** em 2025, concentrados em soja, cana e algodão
no Cerrado. Se a IA física chega ao Brasil por algum lugar primeiro, o sinal aponta para o
campo, não para o chão de fábrica.

---

## 3. Onde isso está hoje

**O que já é maduro** (e por isso não é disrupção-raiz — ver seção 4 e o anexo):

- **Robô industrial de braço.** 542 mil instalações em 2024, quarto ano consecutivo acima de
  500 mil, e **4.664.000 unidades em operação** no mundo, alta de 9% sobre o ano anterior. Ásia
  com 74% das novas implantações, Europa 16%, Américas 9%. Isto é opção padrão de fluxo real;
  o que resta é ficar mais barato e mais difundido.
- **A pilha clássica de autonomia** — ROS 2, MoveIt 2, OMPL, SLAM, planejamento de trajetória.
  Infraestrutura, não fronteira.
- **Simulador físico de corpo rígido** (MuJoCo, Isaac Sim/Isaac Lab, AirSim, Genesis,
  habitat-sim). É a escolha padrão em aprendizado de robô há anos. A novidade não está aqui.

**O que está em escala, mas em nicho geográfico.** O robotáxi. A Waymo fazia **500 mil
corridas pagas por semana em 10 cidades dos EUA** em março de 2026, contra 50 mil por semana em
maio de 2024 — crescimento de dez vezes em menos de dois anos —, com 3.067 veículos de 5ª
geração declarados à NHTSA em dezembro de 2025. É o caso mais avançado de IA física em serviço
comercial, e é também de onde vem o melhor sinal de risco deste mapa (seção 6).

**O que é emergente e ainda não é padrão de nada.**

- **Modelo de mundo gerativo.** O Cosmos 3 foi apresentado em 31/05/2026 como *omnimodel*
  aberto que "entende e gera nativamente texto, imagem, vídeo, som ambiente e ações", com a
  promessa declarada de "reduzir ciclos de treino e avaliação de IA física de meses para dias";
  a NVIDIA nomeia Doosan Robotics, LG, Samsung, Li Auto, Centific, Fogsphere, Linker Vision,
  Milestone e Yuan como construindo sobre a plataforma, e lançou a Coalizão Cosmos com Agile
  Robots, Black Forest Labs, Generalist, LTX, Runway e Skild AI. Do lado do Google, o Genie 3
  saiu de *research preview* para produto pago em **29/01/2026** (Project Genie, assinantes AI
  Ultra nos EUA, maiores de 18 anos) — com limites que importam para o argumento: 720p, 20 a 24
  quadros por segundo, **sessões de 60 segundos**, física que "nem sempre reflete com precisão o
  mundo real".
- **Treino e avaliação dentro do modelo de mundo.** Um trabalho de 09/03/2026 relata que
  "políticas treinadas com dado gerado por modelo de mundo têm desempenho comparável às
  treinadas com a mesma quantidade de dado do mundo real" e observa "forte correlação entre
  desempenho simulado e real" — sem publicar o coeficiente dessa correlação. A World Labs
  divulgou em 28/07/2026 cinco demonstrações de manipulação aprendidas com "zero dado de treino
  do mundo real", cada uma operando "por uma hora sem intervenção" — sem taxa de sucesso, sem
  taxa de falha, sem parceiro comercial nomeado.
- **Agente com corpo generalista.** Gemini Robotics 1.5 (outubro/2025) introduz *Motion
  Transfer*, mecanismo que "permite aprender de dados robóticos heterogêneos e de múltiplos
  corpos e torna o VLA mais geral". π0.7 (abril/2026, Physical Intelligence, 87 coautores)
  relata seguir instruções em ambientes não familiares, tarefas de cozinha em múltiplos
  estágios, e generalização entre corpos — dobrar roupa sem exposição prévia àquele corpo.
- **Agente generalista em mundos 3D sem acesso ao código.** SIMA 2 (DeepMind, 04/12/2025, 65
  autores) é um agente construído sobre o Gemini que opera ambientes 3D diversos por linguagem e
  imagem, com "generalização robusta para ambientes nunca vistos" e "automelhoria aberta" —
  gerando as próprias tarefas e recompensas para aprender habilidades do zero.
- **Humanoide.** Fora do laboratório, ainda em poucos sítios nomeados. Figure: piloto de onze
  meses na planta da BMW em Spartanburg, "mais de 1.250 horas de operação", "mais de 90 mil
  peças de chapa metálica", 99% de precisão de colocação, ciclo de 84 segundos — e o Figure 03
  agora em tarefa logística na mesma planta. Agility: Digit com "mais de 65 mil horas de
  operação em nove instalações de cliente" (GXO, Schaeffler, Toyota Motor Manufacturing Canada,
  Mercado Libre), fábrica em Salem projetada para até 10 mil unidades ao ano. Unitree: ~5.500
  unidades embarcadas em 2025, meta de 10 a 20 mil em 2026, G1 a cerca de US$ 16 mil. No lado
  de consumo, a Ubtech registrou 3.800 reservas em dez dias de pré-venda (junho/2026). Tesla
  Optimus é o caso com menos verificação: Musk declarou em janeiro de 2026 que o Optimus "não
  estava em uso nas nossas fábricas de forma material".

**O gargalo que explica o resto do mapa: o dado.** Coletar demonstração humana por teleoperação
custa, em 2026, **US$ 8 a 15 por episódio** em *pick-and-place* simples e **US$ 25 a 35** em
tarefa bimanual rica em contato; operador treinado a US$ 25–50 por hora produz 30 a 60
demonstrações utilizáveis por hora; uma bancada mínima custa US$ 6 a 10 mil e uma baseada em
UR5e, US$ 60 a 80 mil; um conjunto de treino de nível de produção sai por **US$ 50 mil a 200
mil**. É contra esse custo que o modelo de mundo compete. É isso, e não a elegância técnica,
que decide se a disrupção acontece.

**O relógio regulatório já está andando.** Na União Europeia: obrigações de transparência do AI
Act desde 02/08/2026; prazo de transposição da nova Diretiva de Responsabilidade pelo Produto
em 09/12/2026; **Regulamento de Máquinas substituindo a antiga diretiva em 20/01/2027**, com
exigências explícitas sobre funções de IA e autoaprendizagem, cibersegurança e colaboração
humano-robô; obrigações de alto risco do AI Act em 02/12/2027 (Anexo III) e 02/08/2028 (Anexo
I). A Diretiva de Responsabilidade por IA foi retirada em 2025 — o que sobra é responsabilidade
objetiva por produto, e software conta como produto. No Brasil, o PL 2338/2023 foi aprovado
pelo Senado e **remetido à Câmara em 17/03/2025**, onde segue: o país entra nesta janela sem
marco legal de IA em vigor.

---

## 4. As disrupções-raiz

Três candidatas passaram nos três testes. O registro completo das rejeitadas está na seção 12.

### D1 — O modelo de mundo gerativo vira o lugar onde a política é treinada **e avaliada**

- **Teste 1 (madura?)** Não. Genie 3 em produto pago com sessão de 60 segundos e física
  declaradamente aproximada; Cosmos 3 lançado há pouco mais de três meses; a única avaliação
  independente publicada relata correlação forte **sem número**. Não é a opção padrão de nenhum
  fluxo de treino em escala. **Não é madura.**
- **Teste 2 (emergente?)** Sim. Está fora do laboratório com clientes nomeados (Doosan, LG,
  Samsung, Li Auto), produto público (Project Genie) e trabalhos independentes reproduzindo o
  mecanismo. A curva de capacidade ainda sobe.
- **Teste 3 (disruptiva?)** Sim, e o ator é nomeável: **a fábrica de dados de teleoperação**.
  Hoje ela existe porque não há outro jeito de obter demonstração de tarefa nova; a US$ 50–200
  mil por conjunto de produção, ela é o gargalo declarado do setor. Se gerar variação de cena
  custa menos que pagar operador, ela não fica pior — ela deixa de ser necessária para a maior
  parte do volume. Segundo ator: **o engenheiro de simulação que modela a cena à mão**.
  **Aprovada.**

### D2 — Uma política que atravessa corpos: o agente com corpo deixa de ser programa por máquina

- **Teste 1 (madura?)** Não. Gemini Robotics 1.5 e π0.7 são publicações de 2025 e 2026; nenhum
  é escolha padrão de chão de fábrica.
- **Teste 2 (emergente?)** Sim. Avaliação em múltiplas plataformas físicas reais, não só em
  simulação; e a adoção de robô generalista com corpo humanoide já tem sítios de cliente
  nomeados com horas contadas (65 mil horas, nove instalações).
- **Teste 3 (disruptiva?)** Sim. O ator que perde a razão de existir é **o integrador de
  automação que vende a programação por célula** — o modelo de receita em que reprogramar a
  estação a cada troca de peça é o produto. Se a política vem do fornecedor do modelo e
  transfere entre corpos, essa receita recorrente não fica menor: ela muda de dono.
  **Aprovada.**

### D3 — O mundo 3D vira interface: o agente opera pela mesma superfície que o humano, sem API

- **Teste 1 (madura?)** Não. SIMA 2 é resultado de pesquisa com avaliação declarada, não
  produto.
- **Teste 2 (emergente?)** Sim, com ressalva honesta: é a mais próxima da fronteira
  laboratório/produto das três. Opera jogos comerciais reais, generaliza para ambientes não
  vistos, e está construído sobre um modelo que já é produto (Gemini).
- **Teste 3 (disruptiva?)** Sim. O que deixa de fazer sentido é **a camada de integração como
  pré-requisito**: API, SDK, *mod*, *plugin*. Hoje, para automatizar um ambiente digital, é
  preciso que alguém decida expô-lo. Um agente que joga pelo pixel e pela linguagem não pede
  licença a ninguém — e, do outro lado, não dá para negar acesso por chave a quem entra pela
  tela. **Aprovada.**

---

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O modelo de mundo gerativo vira o lugar onde a política é treinada e avaliada"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A coleta de demonstração por teleoperação deixa de ser o caminho obrigatório para cada tarefa nova, porque gerar variação de cena passa a custar menos por episódio do que pagar operador humano."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A fábrica de dados robóticos deixa de vender volume de episódios e passa a vender episódio difícil — contato, falha, caso raro — que o modelo de mundo ainda não gera de forma confiável."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O trabalho de teleoperador se parte em duas ocupações com preços distintos: operador de volume, comprimido pela geração sintética, e demonstrador de borda, contratado pela raridade do gesto."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Avaliar política vira produto vendido separadamente de treinar política: quem tem o simulador reprodutível vende o laudo, não o robô."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Seguradora e organismo certificador passam a exigir banco de avaliação declarado como condição de cobertura, pela mesma porta que o Regulamento de Máquinas da UE abre em 20/01/2027 ao exigir avaliação de conformidade por terceiro para máquina com IA embarcada em função de segurança."
                sinal: medio
                prazo: 2031
                confianca: media
      - id: e2
        ordem: 1
        efeito: "O erro de comportamento de um agente com corpo passa a ter duas origens separáveis — a política e o mundo que a treinou — e a investigação de incidente precisa abrir as duas, porque corrigir a política sem corrigir o banco de avaliação já se mostrou insuficiente no caso dos ônibus escolares da Waymo, onde dois remendos foram declarados como correção antes de o regulador forçar processo formal."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Surge exigência de proveniência de mundo — qual modelo gerou o ambiente de treino, em que versão, com que distribuição de cenas — como artefato de auditoria, análogo ao cartão de conjunto de dados."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Parte da responsabilidade civil se desloca do fabricante do robô para o fornecedor do modelo de mundo, tratado como componente defeituoso sob responsabilidade objetiva por produto, já que a Diretiva de Responsabilidade por IA foi retirada em 2025 e o regime que sobrou cobre software."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Estúdio de jogo e laboratório de robótica passam a comprar o mesmo artefato — um gerador de ambiente navegável — e a disputar o mesmo fornecedor e o mesmo orçamento de GPU."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O ofício de level designer se aproxima do de curador de currículo de treino: o portfólio deixa de ser julgado só por a cena ser boa de jogar e passa a ser julgado também por a cena cobrir caso difícil."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O ensino de design de jogos incorpora vocabulário de cobertura e distribuição — emprestado de aprendizado de máquina — ao repertório básico de quem desenha espaço."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "Uma política que atravessa corpos: o agente com corpo deixa de ser programa por máquina"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Comprar robô deixa de significar comprar comportamento: corpo e política passam a ser adquiridos, versionados e atualizados separadamente."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O integrador de automação perde a receita recorrente de reprogramar a estação a cada troca de peça e migra para instalação, segurança funcional e manutenção."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O fabricante de hardware robótico vira fornecedor de margem baixa e o lucro se concentra em quem detém a política, por analogia com o deslocamento entre montadora de computador e sistema operacional — analogia entre setores, sem sinal próprio do domínio."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "A interface de comissionamento de um robô vira conversa e demonstração em vez de painel de parâmetros, e o trabalho de UX industrial passa a ser desenhar como se corrige um agente que errou, não como se configura uma máquina."
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Forma-se uma disciplina de projeto para reparo de intenção com corpo — como uma pessoa interrompe, corrige e reensina um agente físico em movimento —, com convenções de sinalização e de consentimento que hoje não existem."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O gargalo de desempenho de um robô deixa de ser mecânico e passa a ser de dado: duas empresas com o mesmo braço entregam resultados diferentes por causa do que treinaram, não do que compraram."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Empresa e país passam a tratar o registro do gesto de trabalho — o que a mão do operário faz — como ativo estratégico, com disputa explícita sobre quem é o dono do dado."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A negociação coletiva incorpora cláusula sobre captura e uso do gesto do trabalhador, objeto sem precedente direto na automação clássica, onde o que se automatizava era descrito por engenheiro e não copiado do corpo de quem executa."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "O mundo 3D vira interface: o agente opera pela mesma superfície que o humano, sem API"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Automatizar um ambiente digital deixa de exigir que ele exponha integração: quem quer um agente dentro do próprio jogo ou ferramenta 3D não precisa mais abrir API para isso acontecer — e também não consegue impedir que aconteça."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O controle de quem entra no seu mundo deixa de ser técnico e vira jurídico e comportamental, porque não há chave de API para barrar o que entra pela tela."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Servidor verificadamente só de humanos vira categoria comercial de mundo online, com prova de presença humana como item de assinatura, pelo mesmo caminho que hoje se vende servidor sem trapaça."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "O playtest automatizado deixa de ser script frágil e vira agente que joga, e um estúdio pequeno alcança cobertura de teste que hoje só um time grande banca."
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A dificuldade de um jogo passa a ser medida contra um agente de referência público, e não só contra telemetria de jogadores, virando um número comparável entre títulos diferentes."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A distinção operacional entre jogo, simulador de treino e gêmeo digital de fábrica se apaga para quem constrói: é o mesmo artefato com finalidade diferente, comprado do mesmo fornecedor."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A ferramenta de autoria de mundo passa a ser vendida com exportação de currículo — distribuição de variação, injeção de caso raro, métrica de cobertura —, recursos que hoje não estão em nenhuma engine comercial."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O mundo autoral vira ativo de dupla receita, entretenimento e licença de treino, e o contrato de trabalho criativo passa a negociar o uso do mundo como dado, não só como obra."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

---

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o corpo entra no raciocínio, não só na saída.** O padrão que a turma
identificou no `ROSClaw` — tratar restrição física como parte do modelo de execução, não como
verificação posterior — aparece de forma independente na literatura de 2025-2026 sob o rótulo
de "pensar antes de agir" em modelos visão-linguagem-ação. Se isso se consolidar, o registro de
raciocínio de um robô vira artefato inspecionável, e a pergunta "por que ele fez isso" ganha
resposta em texto. Para quem projeta interação, isso abre uma superfície nova: **a explicação
como elemento de interface de um agente físico**.

**Sinal fraco 2 — o limite de 60 segundos.** O Project Genie limita a sessão a um minuto. Esse
número não é detalhe de produto: é o horizonte em que a coerência do mundo gerado se sustenta.
Quase toda a diferença entre "brinquedo impressionante" e "ambiente de treino" está em quanto
esse número cresce. É a métrica isolada mais informativa para acompanhar até 2031 — mais que
qualquer demonstração de robô.

**Sinal fraco 3 — o Brasil pelo campo, não pela fábrica.** 45 mil drones agrícolas em operação
contra 18 robôs por 10 mil trabalhadores de manufatura. Se algum agente corporificado se torna
banal no Brasil antes de 2031, o sinal aponta para o Cerrado.

**Sinal fraco 4 — a mesa compartilhada.** A Coalizão Cosmos coloca fornecedores de vídeo
gerativo (Runway, LTX, Black Forest Labs) e de robótica (Skild AI, Agile Robots) no mesmo
consórcio; a Autodesk pôs US$ 200 milhões numa empresa de modelo de mundo. Quem projeta mídia
e quem projeta robô já estão comprando do mesmo lugar — e ainda não perceberam.

**Wildcard 1 — o acidente cuja causa está no simulador, não no robô.** É o wildcard que o
próprio tema propõe, e ele quase aconteceu. Em janeiro de 2026 o NTSB abriu investigação sobre
robotáxis da Waymo que não pararam para ônibus escolares com o braço de parada estendido;
dois remendos anteriores haviam sido declarados como correção e não resolveram, e o diagnóstico
publicado é explícito: "se o seu banco de segurança não consegue medir o contexto baseado em
regra que o remendo deveria tratar, você está validando a coisa errada". Isso não é falha do
carro. É falha do mundo onde o carro foi avaliado. Basta que o próximo caso termine em dano
grave para que a pergunta "de quem é a culpa quando o simulador é que estava errado" saia da
sala de aula e entre no tribunal.

**Wildcard 2 — o incidente com humanoide em evento aberto.** Em 5 e 6 de fevereiro de 2026, na
China, um humanoide colidiu com um espectador idoso em Chengdu e o feriu, e outro, da XPeng,
caiu no palco em Shenzhen; a OCDE classificou os dois como incidentes de IA porque a falha de
movimento autônomo "causou dano direto a uma pessoa". Demonstração pública de humanoide é hoje
um gênero de mídia — e é também a superfície de risco menos regulada do setor.

**Wildcard 3 — o inverso: nada disso escala e o modelo de mundo vira ferramenta de pré-produção
apenas.** Um analista do setor de jogos coloca a comparação que mais me fez hesitar: "modelos de
mundo em 2026 estão onde a fotogrametria estava por volta de 2014 — obviamente o futuro,
desajeitadamente à frente do pipeline". Se a analogia valer, o horizonte de 2031 é curto demais
para os efeitos de 3ª ordem deste mapa. Ver seção 7.

**Wildcard 4 — enxame.** O `Advanced Drone Swarm Telemetry` que a turma trouxe sem querer —
resgate em incêndio por enxame de drones — é o caso em que IA física, modelo de mundo e decisão
coletiva se encontram sob pressão de tempo real e responsabilidade pública. Não entrou na roda
porque não achei ator nomeável que perca a razão de existir até 2031. Fica registrado como o
lugar onde a próxima rodada deveria olhar primeiro.

---

## 7. Contra o próprio mapa

Esta seção é o produto da auditoria da Fase 4, item a item. Não é ressalva genérica.

**1. `e5` é extrapolação linear, e está no mapa mesmo assim.** "O gargalo passa a ser dado e não
mecânica" é a curva de hoje, só que mais. É o único efeito com `confianca: alta` justamente
porque já aconteceu — não é futurização, é constatação. Mantido porque é a premissa de que
`e5.1` e `e5.1.1` dependem; mas quem ler este mapa procurando previsão deve descontar `e5` do
saldo.

**2. `e1` assume adoção mais rápida que o caso comparável conhecido.** O efeito supõe que o
custo de gerar cena sintética confiável caia abaixo de US$ 8–35 por episódio até 2028. O
precedente mais próximo é a fotogrametria em produção de jogos, que levou cerca de uma década
entre "obviamente o futuro" e "padrão de pipeline" — e o próprio setor situa modelos de mundo
em 2026 no equivalente a 2014 daquela curva. Se a analogia valer, `e1` é 2031, não 2028, e
tudo que pende dele (`e1.1`, `e1.1.1`, `e1.2`, `e1.2.1`) sai do horizonte deste mapa. **É a
fragilidade mais séria aqui.**

**3. `e4.1.1` é analogia entre setores disfarçada de derivação.** "Hardware vira commodity, a
margem vai para quem tem o software" é o padrão PC/Windows, Android/fabricante, recolocado em
robótica. Não encontrei nenhum sinal do domínio apontando nessa direção — nenhuma
reprecificação, nenhuma mudança de modelo de receita anunciada por fabricante de robô. Ficou no
mapa com `sinal: fraco` e `confianca: baixa`, e com a origem declarada dentro do próprio texto
do efeito, para que ninguém o leia como mais sólido do que é.

**4. `e2` foi reescrito porque pulava uma etapa.** A versão original dizia que "a
responsabilidade pelo erro passa do robô para o simulador" — o verbo mágico sem mecanismo. O
passo que faltava, e que agora está no texto, é o caso dos ônibus escolares: corrigir a política
duas vezes sem corrigir o banco de avaliação produziu duas declarações de conserto e nenhum
conserto. É isso que obriga a investigação a abrir os dois lados, não a preferência de ninguém.

**5. `e5.1.1` também foi reescrito.** A versão original era "sindicatos vão disputar isso". Sem
mecanismo e sem o que distingue este caso da automação clássica. O passo inserido é a diferença
material: na automação clássica, o que se automatizava era **descrito** por um engenheiro; em
aprendizado por imitação, é **copiado** do corpo de quem executa. É essa diferença que cria um
objeto novo de negociação.

**6. D1 pode simplesmente não se concretizar, e o que isso derruba.** A única evidência pública
de equivalência entre política treinada em modelo de mundo e política treinada com dado real
vem de um trabalho de março de 2026 que relata "forte correlação" **sem publicar o
coeficiente**, e de um conjunto de cinco demonstrações de uma empresa interessada, sem taxa de
sucesso e sem parceiro comercial nomeado. Isso é fraco para sustentar uma disrupção-raiz. Se D1
cair, caem os sete efeitos derivados dela e sobra um mapa de duas disrupções — e a mais
interessante para o público deste documento, `e3`, cai junto.

**7. O viés de quem escolheu o tema, e o meu.** O tema chegou com a lista de ferramentas já
feita pela turma, e ela é fortemente NVIDIA — Isaac, Cosmos, Newton, PhysX, Warp. Um mapa
montado a partir dessa lista tende a tratar a pilha de um fornecedor como se fosse a forma do
campo. Tentei compensar puxando DeepMind, Physical Intelligence e World Labs, mas a assimetria
permanece: não há nesta roda nenhuma fonte de laboratório chinês, e a China responde por 54% das
instalações industriais do mundo e pela liderança de embarque de humanoides. **Este é um mapa
escrito com bibliografia ocidental sobre um fenômeno cujo centro de gravidade industrial está
na Ásia.** Não sei o tamanho do erro que isso introduz. Sei que não é zero.

**8. O viés do próprio método.** A roda dos futuros premia o efeito narrável. Efeito que não
cabe numa frase causal sai do mapa — e nem tudo que importa tem mecanismo narrável em uma
frase. A ausência de qualquer efeito ambiental neste mapa (consumo de energia de treinar
mundos, ciclo de vida de hardware robótico) é consequência direta disso, não da irrelevância
do assunto.

---

## 8. O que a máquina errou

Todos os itens abaixo são divergências entre o que a busca resumiu — ou o que eu teria escrito
de memória — e o que a fonte, aberta e lida, de fato diz. Cada um foi corrigido antes de entrar
no documento.

**1. Números do Cosmos 3 que não existem no comunicado.** O resumo de busca afirmava que o
Cosmos 3 foi "treinado em 20 trilhões de tokens multimodais, incluindo quase um bilhão de
imagens e 400 milhões de vídeos reais e sintéticos". Abri o comunicado da NVIDIA: ele diz
apenas "bilhões de amostras através de texto, imagem, vídeo, som e trajetórias de ação", sem
nenhum desses três números. São números precisos o bastante para passar por fato verificado.
**Não entraram no documento.**

**2. Data errada por um dia.** O mesmo resumo datava o lançamento do Cosmos 3 em 1º de junho de
2026. A página da NVIDIA que abri está datada de **31 de maio de 2026**. Usei a data da fonte.

**3. Afirmações sobre o Gemini Robotics 1.5 que o resumo inventou.** O resumo de busca dizia
que o modelo "controla ALOHA, bi-arm Franka e Apollo sem nenhum pós-treino específico de robô"
e que "permite transferência zero-shot de habilidade entre robôs". Abri o resumo do artigo
(arXiv:2510.03342): **nenhuma dessas duas afirmações está lá**. O que está é que o Motion
Transfer "permite aprender de dados robóticos heterogêneos e de múltiplos corpos e torna o VLA
mais geral". A diferença entre as duas formulações é exatamente a diferença entre disrupção e
melhoria — e eu teria escrito a versão forte sem desconfiar. A seção 3 e D2 usam a formulação
da fonte.

**4. Waymo: escala inflada em duas dimensões.** O resumo de busca dizia "14 cidades e mais de
4.000 veículos". A reportagem que abri (TechCrunch, 27/03/2026) diz **10 cidades** e **3.067
robotáxis** declarados à NHTSA em dezembro de 2025. Usei os números da fonte aberta. As 14
cidades podem ser verdadeiras em setembro de 2026 — só não em fonte que eu tenha aberto, então
não entram.

**5. SIMA 2 e Genie 3: relação invertida.** Eu teria escrito que o SIMA 2 foi treinado dentro do
Genie 3. O resumo do artigo do SIMA 2 (arXiv:2512.04797) **não menciona Genie**. O que existe
é o inverso e mais fraco: a DeepMind relata ter gerado mundos com o Genie 3 para testar
compatibilidade com "uma versão recente do SIMA". A afirmação forte foi cortada.

**6. Densidade robótica do Brasil: dois números incompatíveis, não resolvidos.** Um resumo de
busca dizia "menos de 50 robôs por 10 mil trabalhadores, contra média global de 141"; o
relatório que abri (março de 2026) diz **18 por 10.000**, contra média global de **151**. Usei
os números da fonte aberta e registro aqui que **a divergência não foi resolvida** — não sei
qual denominador cada fonte usa. Trate o "18" como ordem de grandeza, não como medida.

**7. Uma fonte que eu queria citar e não pude.** O dado de 19.100 humanoides embarcados no
primeiro semestre de 2026, alta de 272%, apareceu em busca mas a página devolveu HTTP 403. Como
não abri, **não entrou na seção 11, não conta em `fontes` e não está no corpo do documento** —
apesar de ser o número que melhor sustentaria a tese de aceleração. É o custo da regra, e é
deliberado.

**8. O que a verificação confirmou.** As horas de operação da Figure (1.250) e da Agility
(65.000), os custos de coleta de dado por episódio, as datas do calendário regulatório europeu e
a tramitação do PL 2338 bateram com a fonte. Isso não significa que memória seja confiável em
geral — os itens 1, 3, 4 e 5 acima mostram o contrário. Significa que **estes** bateram.

---

## 9. Três cenários para 2031

**Cenário A — O mundo é o produto** *(D1 e D3 se confirmam; D2 fica pela metade)*

Gerar ambiente de treino ficou mais barato que coletar demonstração, e o mercado se reorganizou
em torno de quem gera mundo. A engine de jogo e a plataforma de treino robótico são o mesmo
produto vendido a dois mercados; o portfólio de quem desenha espaço tem uma segunda coluna, a
de cobertura. O trabalho de teleoperação não desapareceu — encolheu e se especializou no gesto
raro. Certificação de máquina com IA passou a exigir banco de avaliação declarado, e o
fornecedor do modelo de mundo entrou na cadeia de responsabilidade. Para quem projeta mídia e
interação, este é o cenário de maior oportunidade e de maior perda de controle simultâneas: o
mundo autoral vale mais, e deixa de ser só seu.

**Cenário B — Pré-produção e nada mais** *(a analogia da fotogrametria vale)*

Modelo de mundo se estabilizou onde estava em 2026: excelente para pitch, previz e blockout,
insuficiente para o que precisa de colisão, topologia e orçamento de performance — e,
analogamente, insuficiente para treinar política que vai encostar em objeto real. O treino
robótico continuou preso a simulador físico escrito à mão e a dado de teleoperação caro; a
densidade robótica cresceu devagar; o humanoide continuou concentrado em poucos sítios nomeados
com horas contadas. Nada neste mapa além de `e5` aconteceu. É o cenário mais provável se o
limite de coerência dos mundos gerados não crescer muito além de um minuto.

**Cenário C — O tribunal define o ritmo** *(o wildcard 1 se realiza)*

Um incidente com dano grave é rastreado, publicamente, até uma lacuna no ambiente de avaliação
— não até um defeito do robô. A partir daí, proveniência de mundo deixa de ser boa prática e
vira requisito; certificar passa a custar mais que treinar; e o efeito colateral é contrário à
intuição: **a barreira de entrada sobe**, e quem já tem simulador certificado e histórico de
horas consolida o mercado. O modelo de mundo aberto continua existindo para pesquisa e para
entretenimento, mas some do caminho crítico industrial. Neste cenário a tecnologia venceu e a
disrupção não — o incumbente absorveu.

**O que distingue os três, e é observável já em 2027:** (a) até onde vai a duração coerente de
um mundo gerado; (b) se alguém publica o coeficiente da correlação entre desempenho simulado e
real, em vez de afirmá-la; (c) se o primeiro laudo de incidente aponta para o ambiente de
treino em vez de para a política.

---

## 10. O experimento

**"O ponto cego do simulador" — troca cruzada de mundos em MetaDrive.**

**A pergunta.** Todo mundo concorda, no abstrato, que "o simulador pode estar errado". O
experimento existe para transformar isso em experiência de primeira pessoa, em uma aula.

**Montagem.** MetaDrive — a escolha nº 1 de desenvolvimento da turma, leve o bastante para rodar
em máquina de aluno. Quatro duplas. Cada dupla desenha um conjunto de **cenários de treino** com
as suas próprias escolhas de mapa, tráfego e condição, e obtém um agente sobre eles (política
aprendida ou, se o tempo apertar, uma política simples com hiperparâmetros ajustados nos
próprios cenários — o mecanismo do experimento não depende do método de aprendizado). Cada dupla
também escreve, separadamente e **em envelope fechado**, um conjunto de **cenários de teste**
que ela considera justo.

**A troca.** Os agentes rodam em rodízio nos cenários de teste das outras duplas. Registra-se
taxa de sucesso em casa e taxa de sucesso fora.

**O que se mede.** A queda de desempenho. E, mais importante, o que a produz: qual propriedade
do mundo que a dupla A desenhou — uma distribuição de tráfego, uma geometria de cruzamento, uma
condição que ela nunca pensou em variar — fez o agente da dupla B falhar.

**A entrega.** Não é o agente que ganhou. É um documento de uma página por dupla: **"o que o meu
mundo não ensinou, e eu só descobri porque outra pessoa testou"**. Mais uma linha coletiva: dos
casos de falha observados, quantos alguém teria previsto antes da troca.

**Por que isto e não outra coisa.** Reproduz, em escala de sala de aula e em duas horas, o
mecanismo exato do wildcard 1 e do efeito `e2`: o erro não está na política, está no mundo onde
ela foi avaliada — e **não é visível de dentro**. Para quem projeta mídia e interação, há um
segundo aprendizado, que é o do efeito `e3.1`: desenhar espaço para ser jogado e desenhar espaço
para ensinar são ofícios diferentes, e a diferença aparece no primeiro rodízio.

**Variação opcional, se houver acesso.** Repetir a rodada com um dos conjuntos de cenários
gerado por prompt em modelo de mundo em vez de montado à mão, e comparar as duas quedas. É a
versão barata da pergunta central deste mapa.

---

## 11. Fontes

Dezoito fontes, todas abertas e lidas nesta sessão. O que foi encontrado em busca e não aberto
não está aqui e não conta.

1. NVIDIA Newsroom — *NVIDIA Launches Cosmos 3, the Open Frontier Foundation Model for Physical AI*, 31/05/2026. `https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai`
2. DeepMind et al. — *SIMA 2: A Generalist Embodied Agent for Virtual Worlds*, arXiv:2512.04797, 04/12/2025. `https://arxiv.org/abs/2512.04797`
3. Gemini Robotics Team — *Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with Advanced Embodied Reasoning, Thinking, and Motion Transfer*, arXiv:2510.03342, 02/10/2025 (v3 em 28/11/2025). `https://arxiv.org/abs/2510.03342`
4. Physical Intelligence — *π0.7: a Steerable Generalist Robotic Foundation Model with Emergent Capabilities*, arXiv:2604.15483, 16/04/2026. `https://arxiv.org/abs/2604.15483`
5. Wang, Syed, Wu, Zhang, Onol, Barreiros, Nayyeri, Dear, Zhang, Li — *Interactive World Simulator for Robot Policy Training and Evaluation*, arXiv:2603.08546, 09/03/2026. `https://arxiv.org/abs/2603.08546`
6. World Labs — *Building Worlds That Train Robots* (Real-to-Sim-to-Real), 28/07/2026. `https://www.worldlabs.ai/blog/real-to-sim-to-real`
7. Perlo, Robey, Barez, Floridi, Mökander — *Embodied AI: Emerging Risks and Opportunities for Policy Action*, arXiv:2509.00117, 28/08/2025. `https://arxiv.org/abs/2509.00117`
8. Humanoid Guide — *Humanoid deployments in 2026 favor Figure and Agility*. `https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/`
9. International Federation of Robotics — *Global Robot Demand in Factories Doubles Over 10 Years* (World Robotics 2025), 25/09/2025. `https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years`
10. CMS — *Physical AI: embodied AI gives rise to new legal requirements*, 06/07/2026. `https://cms.law/en/deu/legal-updates/physical-ai-embodied-ai-gives-rise-to-new-legal-requirements`
11. Senado Federal — ficha de tramitação do PL 2338/2023 (remetido à Câmara em 17/03/2025). `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`
12. OECD.AI — incidente de 05/02/2026, humanoides em demonstração pública na China. `https://oecd.ai/en/incidents/2026-02-05-f85d`
13. SoftwareSeni — *When Robotaxis Fail — Real Incidents and What They Reveal About Autonomous System Design*. `https://www.softwareseni.com/when-robotaxis-fail-real-incidents-and-what-they-reveal-about-autonomous-system-design/`
14. TechCrunch — *Waymo's skyrocketing ridership in one chart*, 27/03/2026. `https://techcrunch.com/2026/03/27/waymo-skyrocketing-ridership-in-one-chart/`
15. Robotics Center (SVRC) — *How Much Does Robot Data Collection Cost in 2026?*, 31/03/2026. `https://www.roboticscenter.ai/en/blog/robot-data-collection-cost`
16. Robotics Center — *State of Robotics Brazil 2026*, março/2026. `https://www.roboticscenter.ai/state-of-robotics-brazil-2026`
17. TechForum.ca — *AI World Models for Game Studios: What Marble Changes*. `https://techforum.ca/articles/ai-world-models-game-studios-marble`
18. Gizmodo Brasil — *Robôs humanoides com inteligência artificial conquistam consumidores e já acumulam milhares de reservas em 2026*, 17/06/2026. `https://www.gizmodo.com.br/robos-humanoides-com-inteligencia-artificial-conquistam-consumidores-e-ja-acumulam-milhares-de-reservas-em-2026-57474`

Detalhes do Project Genie (data de lançamento, 720p, 20–24 fps, sessões de 60 segundos,
restrição a assinantes AI Ultra nos EUA) e da meta de embarques da Unitree vieram de resultados
de busca cujas páginas **não foram abertas individualmente**; estão no corpo do documento
porque são consistentes entre múltiplos resultados, e ficam declarados aqui como
**não verificados em fonte aberta**, não contando no total de 18.

---

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista (Fase 1) — o que foi respondido e o que foi assumido

Não houve interlocutor humano disponível nesta rodada. As seis respostas vieram por escrito, no
enunciado da execução, de quem despachou a skill — não do autor original do pedido. Isso muda
uma coisa concreta: **não houve como pedir desambiguação**, e a skill, que na sua rodada de
teste usou esse recurso, aqui não pôde usá-lo.

| Ponto | Situação | Valor usado |
|---|---|---|
| 1. Tema e recorte | Respondido | "Agentes corporificados, IA física e modelos de mundo"; recorte no par agente-com-corpo + mundo de treino, excluindo o que já é comum em produto de massa |
| 2. Horizonte | Respondido | 2031 |
| 3. Para quem, **para decidir o quê** | **Parcialmente respondido** | "Quem projeta mídia e interação" foi dado; **"para decidir o quê" não foi**. Assumido: decidir onde investir tempo de ofício e o que aprender — não decisão de investimento financeiro |
| 4. Recorte geográfico | Respondido | Global, com nota sobre o Brasil (§2 e §6) |
| 5. O que já está descartado | Respondido | A régua da disciplina, e nada mais |
| 6. Viés | Respondido | Neutro |

Nenhum dos seis ficou totalmente sem resposta, então `confianca` do documento **não** foi
rebaixada para `baixa` por esse motivo. Ficou em `media` por outra razão, declarada na §7: a
evidência que sustenta D1 é mais fraca do que o peso que D1 carrega no mapa.

Dois itens adicionais vieram no enunciado e foram usados: **o que faria mudar de ideia**
(evidência de que a adoção já passou da maioria inicial, ou de que a tecnologia só melhora o que
existe) — é exatamente a forma dos Testes 1 e 3 da Fase 2, e foi aplicada assim; e **ideias
óbvias a excluir** (as que serviriam a qualquer tema) — critério que cortou dois efeitos de 3ª
ordem, registrados em 12.3.

### 12.2 Fase 2 — tecnologias testadas e **rejeitadas**, com motivo

| Candidato | Teste 1 (madura?) | Teste 2 (emergente?) | Teste 3 (disruptiva?) | Decisão |
|---|---|---|---|---|
| Robô industrial de braço | **Sim.** 4.664.000 em operação (2024); 542 mil instalações no ano; 4º ano acima de 500 mil | — | — | **Rejeitado: maduro.** Vai para a §3 |
| ROS 2, MoveIt 2, OMPL, SLAM, planejamento de trajetória | **Sim.** Padrão de fato da pilha de autonomia | — | — | **Rejeitado: maduro** |
| Simulador físico de corpo rígido (MuJoCo, Isaac Sim/Lab, AirSim, Genesis, habitat-sim, Newton, PhysX) | **Sim.** Escolha padrão em robot learning | — | — | **Rejeitado: maduro.** É a linha de base contra a qual D1 compete |
| Robotáxi / condução autônoma urbana | Parcialmente — padrão de fluxo real em algumas cidades, 500 mil corridas/semana | Sim | Sim, mas **o que nela é disruptivo já está capturado em D1 e D2** | **Rejeitado como raiz por redundância.** Usado como estado atual (§3) e como fonte de sinal de risco (§6) |
| Humanoide como forma-fator | Não — poucos sítios nomeados, horas contadas | Sim | **Não.** É embodiment, não mecanismo: o que ele derruba é o mesmo que D2 derruba | **Rejeitado: emergente, não disruptivo por si.** Usado como indicador de adoção |
| Enxame de drones (Advanced Drone Swarm Telemetry) | Não | Sim, em nicho (45 mil drones agrícolas só no Brasil) | **Não identifiquei ator nomeável** que perca a razão de existir até 2031 | **Rejeitado como raiz.** Vai para §6 como wildcard |
| Captura 3D do mundo real (gaussian splats, fotogrametria) | — | — | — | **Fora do recorte:** é o tema 10 da disciplina |
| Simulação de sociedades / agentes sociais | — | — | — | **Fora do recorte:** é o tema 6 |
| Percepção e segmentação genérica | — | — | — | **Fora do recorte:** é o tema 11 |
| MONAI (imagem médica), drake (verificação), Lanelet2, OpenVINS, MAVLink, RT-Thread, Apollo | Variam entre maduros e infraestruturais | — | **Não.** Nenhum tem ator nomeável ameaçado no horizonte | **Rejeitados.** São a pilha, não a fronteira |

### 12.3 Fase 4 — efeitos cortados e efeitos alterados

**Cortados (com motivo):**

- *"A cidade passa a ser redesenhada para incluir agentes físicos, e a calçada deixa de ser um
  artefato só humano."* — **Cortado por dois critérios de parada simultâneos:** (a) não consigo
  narrar o mecanismo em uma frase sem "e aí tudo muda"; (b) cinco anos é curto demais para
  mudança de infraestrutura urbana em qualquer precedente conhecido. Fica registrado porque é o
  efeito de 3ª ordem que o próprio enunciado do tema sugere — e ele não sobreviveu à auditoria.
- *"O trabalho físico encolhe de forma generalizada."* — **Cortado por genérico.** Serve a
  qualquer disrupção de automação dos últimos quarenta anos, e os números disponíveis não o
  sustentam para 2031: densidade robótica global relatada em 151 por 10 mil, Brasil em 18.
- *"O selo 'feito por humano' vira diferencial comercial em serviço físico."* — **Cortado por
  analogia importada.** É o mesmo raciocínio que já apareceu em alimento orgânico e em conteúdo
  criativo, recolocado aqui sem nenhum sinal do domínio. Um efeito do mesmo tipo (`e4.1.1`)
  ficou no mapa, mas com a origem por analogia declarada dentro do texto do próprio efeito; este
  não teve nem isso a favor.

**Rebaixado:** `e4.1.1` — de `confianca: media` para `baixa`, por ser analogia PC/sistema
operacional sem evidência do domínio (§7, item 3).

**Reescritos com o passo causal que faltava:** `e2` e `e5.1.1` (§7, itens 4 e 5).

**Sobreviveram sem alteração:** 20 dos 27 efeitos. Sete foram tocados — três cortados, um
rebaixado, dois reescritos, e `e5` mantido com ressalva explícita de que é constatação e não
projeção.

### 12.4 Buscas que não deram em nada, e limites do levantamento

- **Fonte que recusou acesso:** `inovativos.com.br` devolveu HTTP 403 no artigo que traz o
  número de 19.100 humanoides embarcados no 1º semestre de 2026 (+272%). O dado **não** entrou
  em lugar nenhum do documento além deste registro.
- **Busca sem retorno útil:** procurei um laudo público de incidente robótico cuja causa-raiz
  tivesse sido atribuída formalmente ao ambiente de simulação — o wildcard central deste mapa.
  **Não encontrei nenhum.** O caso mais próximo é a investigação do NTSB sobre os ônibus
  escolares, em que o diagnóstico publicado aponta para o banco de validação, não para um laudo
  oficial sobre o simulador. Essa ausência é informação: em setembro de 2026, o wildcard 1
  ainda **não** aconteceu.
- **Assimetria geográfica não corrigida:** nenhuma fonte primária de laboratório chinês foi
  aberta, num campo em que a China responde por 54% das instalações industriais mundiais.
  Declarado na §7, item 7.
- **Números não resolvidos:** densidade robótica brasileira (18 vs. "menos de 50") e média
  global (141 vs. 151) divergem entre fontes; o coeficiente da correlação simulado-real nunca
  foi publicado por quem a afirma. Nenhum dos três foi resolvido nesta rodada.
- **Ferramentas de busca e leitura de página estavam disponíveis** neste ambiente e foram usadas
  em todas as afirmações factuais do documento. Não houve `fontes: 0` nem rebaixamento de
  confiança por falta de sourcing.
