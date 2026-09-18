---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: jgpt
zona_de_interesse: Simulação e mundos
data: 2026-09-18
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 16
efeitos_ordem_3: 16
tecnologias_citadas: [modelo de mundo gerativo, NVIDIA Cosmos 3, Genie 3, SIMA 2, Gemini Robotics 1.5, Gemini Robotics ER 1.5, Gemini Robotics 2, Motion Transfer, pi 0.5, pi 0.7, VLA (vision-language-action), RoboDojo, Isaac Sim, MetaDrive, MuJoCo, Genesis, habitat-sim, teleoperação, Unitree G1, AGIBOT G2, Apptronik Apollo 2, envenenamento de modelo de mundo, sim-to-real, gêmeo digital, EU Machinery Regulation 2023/1230, Product Liability Directive revisada]
fontes: 13
confianca: media
experimento: Um duplo-cego de simuladores — a mesma política avaliada num mundo modelado à mão e num mundo gerado por modelo de mundo, com as duas ordenações confrontadas contra um robô real barato, e uma rodada em que cada dupla adultera secretamente um dos mundos para que as outras descubram a adulteração só pelo comportamento do agente.
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

A IA saiu da tela, mas ainda não chegou ao mundo. Em julho de 2026 a melhor política generalista de
manipulação avaliada num banco de provas unificado acertou 12,8% de dezoito tarefas reais, enquanto
um humano teleoperando o mesmo hardware acertou 100%. No mesmo ano, o embarque global de humanoides
cresceu 272% e passou de dezenove mil unidades no primeiro semestre, com mais de 70% já em uso
industrial ou comercial. As duas coisas são verdadeiras ao mesmo tempo, e é essa tesoura que este
mapa tenta ler. Aceito três limiares como raízes de disrupção: o ambiente de treino que passou a ser
gerado em vez de modelado, com evidência de que política treinada em dado sintético empata com
política treinada em dado real; a política que transfere entre corpos diferentes sem retreino, o que
faz do dado de robô um ativo agregável pela primeira vez; e o corpo capaz que caiu para a faixa de
preço de um carro usado, tirando a corporificação do laboratório industrial. Nenhum dos três é ROS,
SLAM ou planejamento de trajetória — isso é infraestrutura absorvida. O que muda é quem responde
quando o mundo real diverge do mundo em que se aprendeu, e o que acontece com o design de ambientes
quando o mundo passa a ser projetado para dois tipos de corpo. O mapa projeta 40 efeitos até 2031 e
aposta que o gargalo de 2031 não será o corpo nem o modelo, mas a prova auditável de que o mundo
usado no treino se parecia com este aqui.

## 2. O tema

Agente corporificado é o agente que paga o preço do erro em matéria. A diferença entre ele e o
agente de software não é a modalidade de entrada — é que uma ação errada não é um token descartável,
é um copo quebrado, um dedo prensado, um carro fora da faixa. IA física é o nome que a indústria deu
a esse recorte em 2025 e 2026. Modelo de mundo é a peça técnica que o viabiliza: um modelo que
*gera* o ambiente em vez de apenas renderizá-lo a partir de uma cena que alguém construiu.

O objeto deste mapa é a dupla **agente com corpo + mundo em que ele aprende**. Fica de fora a
simulação de sociedades, que é o tema 6; a captura do mundo real em 3D, que é o tema 10; e a
segmentação e visão computacional como campo, que é o tema 11. Aqui interessa o laço: o agente
aprende num mundo que a máquina inventou e depois age num mundo que ela não inventou.

Onde isso encosta em mídia e interação, que é o público deste documento. Em três pontos, e nenhum
deles é robótica industrial. Primeiro: se um agente generalista opera qualquer ambiente 3D sem
acesso ao código do ambiente, o jogo, o simulador e a fábrica viram o mesmo tipo de lugar para a
máquina — e o design de mundo, que era uma disciplina de experiência, passa a ser também uma
disciplina de currículo de treino. Segundo: a interface de comando de uma máquina física vira
linguagem natural com restrição, e escrever o que o robô nunca pode fazer perto de uma pessoa é
trabalho de design de interação, não de engenharia de controle. Terceiro: o ambiente construído —
loja, hospital, calçada, apartamento — foi desenhado durante um século para um tipo de corpo, e está
prestes a ganhar um segundo usuário com percepção, alcance e falhas diferentes.

Por que isso merece um mapa de futuro e não um estado da arte. Um estado da arte listaria modelos, e
a lista muda a cada trimestre — entre a escrita deste parágrafo e a aula em que ele for lido, é
provável que dois dos modelos citados aqui tenham sido substituídos. O que não muda tão rápido, e é
o objeto do mapa, é o conjunto de consequências institucionais de treinar num mundo gerado: quem
responde pelo erro, quem certifica o simulador, quem é dono do movimento demonstrado por um
trabalhador, e o que acontece com o desenho de espaços quando eles precisam funcionar para dois
tipos de habitante.

## 3. Onde isso está hoje

### O que já existe e funciona

**O modelo de mundo gerativo saiu do papel e virou produto.** O Genie 3, do Google DeepMind, gera
mundos navegáveis em tempo real a partir de um texto, a 720p e 24 quadros por segundo, com
consistência por alguns minutos e memória visual de cerca de um minuto para trás; aceita eventos
promptáveis, isto é, mudar o clima ou inserir um personagem por instrução durante a navegação [2].
A NVIDIA lançou o Cosmos 3 em 31 de maio de 2026 como omnimodel aberto para IA física: arquitetura
de mistura de transformers que junta um transformer de raciocínio a um de geração, entendendo e
gerando texto, imagem, vídeo, som ambiente e ações, em três tamanhos — Super, Nano e um Edge
anunciado como "em breve". A alegação central é reduzir ciclos de treino e avaliação de meses para
dias, e vêm citadas adoções por Agile Robots, Doosan, LG, Samsung, Skild AI e Li Auto [1].

**O agente generalista atravessa mundos que nunca viu.** O SIMA 2, do DeepMind, é um agente
corporificado para mundos 3D construído sobre o Gemini; ele fecha parte significativa da distância
até o desempenho humano nos jogos de treino, melhora bastante em ambientes retidos como ASKA e
MineDojo, e — o ponto que interessa aqui — age com direção a objetivo dentro de mundos gerados na
hora pelo Genie 3, sem exposição prévia. Aprende por tentativa e erro com feedback do próprio
Gemini, chegando a jogar sozinho jogos novos sem dado humano [3].

**A política transfere entre corpos.** O Gemini Robotics 1.5 é um VLA multi-corporificação com um
mecanismo de Motion Transfer que aprende de dados heterogêneos de robôs diferentes e intercala ação
com raciocínio em linguagem natural — "pensar antes de agir" [4]. Em 30 de julho de 2026 o Gemini
Robotics 2 acrescentou controle de corpo inteiro, dos pés às pontas dos dedos, no humanoide Apollo 2
da Apptronik, com taxas de sucesso reportadas de 45,7% a 76,3% em manipulação de corpo inteiro, 36%
a 92% em destreza multidedos e 74,2% a 89,6% com garra [5]. Do lado da Physical Intelligence, o
π0.7, submetido em 16 de abril de 2026, reivindica generalização composicional e transferência entre
corpos sem exemplo prévio — dobrar roupa sem ter visto a tarefa, operar uma máquina de espresso de
saída —, treinado com demonstrações, dados autônomos subótimos incluindo falhas, e vídeo de humanos
[6].

**Há evidência de que o mundo gerado serve como fonte de treino.** Um trabalho apresentado no RSS e
submetido em 9 de março de 2026 constrói um simulador interativo a partir de um conjunto moderado de
interação real e mostra duas coisas: políticas de imitação treinadas com dado gerado pelo modelo de
mundo têm desempenho comparável às treinadas com a mesma quantidade de dado real, e há correlação
forte entre desempenho no simulador e no mundo real. O sistema mantém interação estável por mais de
dez minutos a 15 quadros por segundo numa única RTX 4090, sobre objetos rígidos, deformáveis e
pilhas [7].

**O corpo ficou mais barato e começou a sair da vitrine.** O Unitree G1 foi lançado em maio de 2024 a
US$ 16.000 e está em US$ 13.500 na loja direta desde o fim de 2025 [9]. Os embarques globais de
humanoides no primeiro semestre de 2026 foram de 19.100 unidades, alta de 272% sobre as 5.100 do
mesmo período de 2025, com a AGIBOT em 8.400 unidades (44%) e a Unitree em 5.900 (31%). O dado mais
informativo não é o volume: é a composição — aplicações industriais e comerciais passaram de cerca
de 50% para mais de 70% dos embarques em um ano [8].

### O que existe e não funciona

**A transferência para o mundo real, medida direito, é ruim.** O RoboDojo, submetido em 5 de julho
de 2026, é um banco de provas unificado de simulação e realidade: 42 tarefas simuladas sobre Isaac
Sim, avaliando generalização, memória, precisão, horizonte longo e instrução de vocabulário aberto,
mais 18 tarefas reais num sistema reprodutível com hardware padronizado e acesso em nuvem. Trinta
políticas avaliadas. O melhor resultado no mundo real foi o π0.5, com **12,8% de sucesso geral** nas
18 tarefas em três corporificações — contra 100% da teleoperação humana no mesmo hardware. E há um
descompasso explícito entre a ordenação em simulação e a ordenação no real: quem ganha na bancada
não é quem ganha na mesa [10].

**A cadeia de treino tem um flanco aberto.** Um preprint de CoRL submetido em 8 de junho de 2026
mostra que o modelo de mundo é um ponto de entrada de envenenamento especialmente furtivo: prompts
maliciosos ou dinâmicas de transição comprometidas podem ser injetados em conjuntos de teleoperação
*visivelmente seguros*, e só se ativam quando o dado passa pelo modelo de mundo, gerando trajetórias
sintéticas perigosas. Os autores demonstram um backdoor ponta a ponta numa política de aprendizado
por reforço a jusante, contra modelos de mundo condicionados a ação e a texto [11].

**Os limites declarados do próprio Genie 3 são estruturais, não cosméticos:** o repertório de ações
que um agente pode executar diretamente é restrito; interação entre múltiplos agentes independentes
num ambiente compartilhado segue em aberto; texto legível só aparece quando já vem na descrição; e a
interação dura alguns minutos, não horas [2]. Os limites do SIMA 2 rimam: tarefas longas com
raciocínio de muitos passos, janela de memória curta por exigência de latência, controle de precisão
e compreensão de cena 3D complexa [3].

### Quem está construindo isso agora

NVIDIA (Cosmos, Isaac Sim, e uma coalizão anunciada com Agile Robots, Black Forest Labs, Generalist,
LTX, Runway e Skild AI [1]); Google DeepMind (Genie, SIMA, Gemini Robotics e Gemini Robotics ER
[2][3][4][5]); Physical Intelligence (π0.5, π0.7 [6][10]); os fabricantes de corpo AGIBOT, Unitree,
Galbot, UBTECH, Leju [8] e Apptronik [5]; e uma camada acadêmica que está, neste momento, fazendo a
coisa mais útil do campo, que é construir réguas — RoboDojo é isso [10].

### Diagnóstico de maturidade, sem previsão

Uso o Hype Cycle da Gartner aqui apenas como heurística para separar cobertura de demonstração de
cobertura de adoção, e não para estimar prazo — a curva não é validada empiricamente como padrão
universal, e usá-la para cravar data seria exatamente o erro que a Etapa 1 desta skill existe para
evitar. Aplicado assim, o quadro é: os humanoides estão em cobertura de demonstração com um fio de
adoção real embaixo (os 70% comerciais de [8] são adoção; os vídeos virais não são); os modelos de
mundo estão em cobertura de demonstração quase pura, com uma única evidência séria de uso
instrumental [7] e uma régua que contradiz o otimismo [10]; e os VLAs estão no ponto mais perigoso,
que é ter métrica boa em bancada e métrica ruim no mundo ao mesmo tempo. O Cosmos 3 Edge anunciado
como "em breve" [1] é o marcador clássico: o produto que ainda não existe já tem nome.

## 4. As disrupções-raiz

Teste aplicado a cada candidata: **o que isso rompe, e por que agora e não há cinco anos?** Sem
limiar concreto, não entra como raiz.

### 4.1 O ambiente de treino passou a ser gerado, não modelado

**O que rompe.** A restrição removida é a engenharia de cena. Até aqui, treinar em simulação exigia
que alguém construísse o mundo: modelar geometria, atribuir materiais, ajustar atrito, escrever o
domínio de randomização. O custo de uma variação de cenário era custo de engenharia humana. Com um
modelo de mundo, a variação é uma inferência: muda-se o clima, a iluminação, a presença de um
objeto, por texto, durante a execução [2]. O mundo deixa de ser um ativo construído e vira um ativo
amostrado.

**Por que agora e não há cinco anos.** Três limiares datados. (a) Tempo real interativo: Genie 3 a
720p e 24 fps com consistência de minutos, agosto de 2025 [2] — antes disso, geração de vídeo não
era navegável. (b) Utilidade instrumental provada, e não só demonstrada: março de 2026, política
treinada em dado gerado empata com política treinada na mesma quantidade de dado real, com
correlação forte entre avaliação simulada e real, rodando dez minutos a 15 fps numa única RTX 4090
[7] — é o primeiro resultado que transforma o modelo de mundo de espetáculo em ferramenta, e o
número da GPU importa porque põe isso na mesa de um laboratório e não de uma nuvem. (c) Fechamento
do laço agente-mundo: SIMA 2 agindo com direção a objetivo dentro de mundos gerados pelo Genie 3
[3], mais o Cosmos 3 unindo raciocínio, geração de mundo e predição de ação num só sistema, maio de
2026 [1].

**O que ainda falta.** A evidência de [7] é de um framework específico, com dataset moderado, sobre
manipulação. Não há, até onde esta busca alcançou, resultado equivalente para locomoção, direção ou
contato rico prolongado. E os limites declarados do Genie 3 — repertório de ação restrito, múltiplos
agentes em aberto, minutos e não horas [2] — são precisamente os que um currículo de treino sério
exigiria vencer.

### 4.2 A política generalista transfere entre corpos

**O que rompe.** A restrição removida é a especificidade do dado. Enquanto cada robô exigia seu
próprio modelo, o dado coletado por uma frota valia só para aquela frota, e a economia da robótica
era a economia de um ateliê: cada instalação, um projeto. Com transferência entre corpos, o dado
vira ativo agregável — e, pela primeira vez, ter uma frota *heterogênea* é vantagem em vez de
problema.

**Por que agora e não há cinco anos.** O mecanismo tem nome e data: Motion Transfer, no Gemini
Robotics 1.5, aprendendo de dado heterogêneo de múltiplas corporificações [4]; e a demonstração
associada de que tarefa aprendida num bimanual de laboratório aparece num braço industrial diferente
e num humanoide sem retreino. Do outro lado, o π0.7, abril de 2026, reivindica generalização
composicional e transferência sem exemplo prévio, treinado deliberadamente com dado subótimo e com
falhas — o que só faz sentido se o ativo for a diversidade, não a limpeza [6]. Em julho de 2026 o
Gemini Robotics 2 estende isso ao corpo inteiro de um humanoide, com números publicados por
categoria [5]. Cinco anos atrás, o estado da arte era política por tarefa e por robô.

**O que ainda falta.** A régua independente contradiz o otimismo: 12,8% da melhor política em 18
tarefas reais, com ordenação simulada que não prevê a ordenação real [10]. Os números do Gemini
Robotics 2 [5] e do π0.7 [6] são autorreportados pelos laboratórios que os treinaram, em tarefas que
eles escolheram; os do RoboDojo são de terceiro, em hardware padronizado. Enquanto a distância entre
as duas fontes for essa, a raiz está aceita como limiar cruzado, não como capacidade entregue.

### 4.3 O corpo capaz entrou na faixa de preço de um bem durável

**O que rompe.** A restrição removida é a posse. Corporificação deixa de ser algo que só uma
montadora ou um laboratório financiado tem, e passa a ser item de orçamento de um estúdio, uma
escola, um coletivo, um curso de design. Isso muda o que o corpo é: de bem de capital para material
de projeto.

**Por que agora e não há cinco anos.** O G1 saiu de US$ 16.000 em maio de 2024 para US$ 13.500 em
loja direta [9] — e, mais que o preço, o que muda é o que existe para comprar: 19.100 humanoides
embarcados só no primeiro semestre de 2026, alta de 272%, com a fatia industrial e comercial subindo
de ~50% para mais de 70% em um ano [8]. Há cinco anos não havia mercado, havia encomenda.

**O que ainda falta — e esta é a raiz mais frágil das três.** US$ 16.000 para US$ 13.500 em
dezenove meses é queda de 16%: curva de aprendizado de manufatura, não colapso de custo. E a versão
que faz trabalho útil, a EDU, é revendida entre US$ 43.900 e US$ 73.900 [9] — três a cinco vezes o
preço de vitrine. Aceito esta raiz pelo argumento do limiar de posse institucional, mas com confiança
rebaixada e com um teste de falseamento explícito na seção 7.

### Candidatas rejeitadas como raiz

**ROS 2, SLAM, planejamento de trajetória, MoveIt, OMPL, engines físicos clássicos (MuJoCo, PhysX,
Drake).** Maduros. Teste: se sumissem amanhã, o campo não voltaria a 2021 — seriam substituídos por
equivalentes em meses, porque viraram infraestrutura absorvida. Não mudam mais as restrições do
campo; só ficam mais rápidos.

**Simulação acelerada por GPU (Isaac Sim, Genesis, Newton, habitat-sim, MetaDrive, AirSim).**
Habilitador, não raiz. É a condição de possibilidade das três raízes acima e, hoje, piso — o próprio
RoboDojo roda sobre Isaac Sim [10]. Um habilitador que todo mundo tem não é disrupção.

**Enxame de drones, RTOS com LLM embarcado, pele tátil e VTLA.** Emergentes. Vão para a seção 6.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ambiente de treino passou a ser gerado, não modelado
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo marginal de uma variação de cenário de treino cai ao custo de uma inferência, e a variedade de ambiente deixa de ser orçada como engenharia.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A vantagem competitiva em robótica migra do acervo de dado real coletado para a receita de geração de variação, e o catálogo de cenários vira ativo proprietário.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Surge um mercado de currículos de treino vendidos como produto, e o design de mundo passa a ser remunerado por quanto ensina, não por como parece.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A avaliação de política passa a ocorrer majoritariamente dentro de modelos de mundo, e as métricas publicadas deixam de ser comparáveis entre laboratórios porque cada um avalia no próprio gerador.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Compradores institucionais e seguradoras passam a exigir avaliação em simulador de terceiro credenciado, e nasce a figura de quem certifica o mundo em vez do robô.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O simulador entra na cadeia de responsabilidade, e a causa-raiz de uma falha física passa a ser rastreada até o modelo que gerou o dado de treino, não só até o código embarcado.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Fabricantes passam a exigir proveniência assinada do dado sintético — qual modelo, qual versão, qual semente — e a lista de materiais do software vira também lista de materiais do mundo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O envenenamento de modelo de mundo vira classe reconhecida de ataque à cadeia de suprimentos de robôs, com identificador público de vulnerabilidade e recall de política em vez de recall de peça.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O seguro de operação robótica passa a precificar a qualidade do simulador usado no treino, e apólice barata exige mundo auditado.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Integradores pequenos deixam de treinar política própria por não conseguirem pagar a auditoria do mundo, e a IA física se concentra em poucos fornecedores de pilha completa.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A distinção operacional entre jogo, simulador e chão de fábrica se apaga para quem projeta, porque os três são ambientes 3D interativos onde um agente generalista atua sem acesso ao código.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O design de nível ganha um segundo critério de avaliação além da experiência humana — quanto aquele mundo ensina uma política — e as ferramentas de autoria incorporam telemetria de agente.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Estúdios licenciam seus mundos como ambiente de treino, e a receita de um mundo deixa de depender de ele ter jogadores humanos.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Testes de usabilidade e de acessibilidade passam a ser rodados primeiro por agentes dentro de mundos gerados, e o teste com pessoas vira etapa final e mais cara.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Projetos de loja, hospital e aeroporto passam a entregar uma versão gerada de si mesmos junto da planta, e o gêmeo navegável vira requisito de projeto arquitetônico em vez de entregável de tecnologia.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A política generalista transfere entre corpos
    efeitos:
      - id: e4
        ordem: 1
        efeito: O dado de robô deixa de ser específico do robô e vira ativo agregável, e ter frota heterogênea passa a ser vantagem justamente por ser heterogênea.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Consórcios de dados entre fabricantes de corpos diferentes se tornam economicamente racionais, e a disputa migra do dado para o direito de uso do dado.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Trabalhadores que teleoperam robôs reivindicam participação sobre a política treinada com suas demonstrações, e ocorre a primeira negociação coletiva sobre dado de movimento.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A camada de cérebro se separa comercialmente da camada de corpo, e comprar um robô passa a significar comprar hardware mais assinatura de política.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Um corpo sem assinatura ativa perde a maior parte de suas capacidades, e o debate de direito ao reparo chega à máquina que anda pela casa.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A instrução em linguagem natural com restrição vira a interface primária de comando de máquina física, e programar o robô se desloca para descrever a tarefa e a maneira de executá-la.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Consolida-se um ofício de projetista de instrução corporificada — quem escreve o que a máquina nunca pode fazer perto de uma pessoa — mais próximo do design de interação que da engenharia de controle.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Cursos de design passam a tratar corpo, alcance e restrição física como material de projeto, do mesmo modo que passaram a tratar tela e toque.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A ambiguidade da linguagem natural vira causa registrada de acidente em espaço compartilhado, e protocolos de confirmação antes da ação se tornam exigência de conformidade.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Máquinas físicas ganham um modo de dúvida audível e visível, e a hesitação do robô vira elemento projetado de interação em vez de defeito a esconder.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A distância entre desempenho em bancada e desempenho no mundo vira o principal objeto de disputa pública sobre IA física, porque passou a existir medida independente dela.
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O vídeo de demonstração perde valor como evidência comercial, e compradores institucionais passam a exigir avaliação em hardware padronizado com acesso remoto.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Um ciclo de desilusão atinge o financiamento de humanoides, e sobrevivem as empresas que venderam tarefa entregue em vez de corpo vendido.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: As aplicações se concentram em ambientes reprojetados para a máquina, e o movimento dominante deixa de ser o robô que se adapta ao mundo e passa a ser o mundo estreitado até caber na política.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Prédios e ruas começam a ganhar affordances para máquinas — marcação, iluminação, piso, largura — e isso entra na pauta de acessibilidade como disputa por prioridade entre dois tipos de corpo.
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O corpo capaz entrou na faixa de preço de um bem durável
    efeitos:
      - id: e7
        ordem: 1
        efeito: Ter um corpo deixa de ser privilégio de laboratório industrial e vira item de orçamento de estúdio, escola e coletivo.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Aparece produção de mídia com robô como executante — performance, instalação, câmera corporificada — e o corpo entra no repertório de linguagem e não só no de logística.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Firma-se uma estética própria da IA física construída sobre as falhas características do corpo — o tropeço, a hesitação, a correção — do mesmo modo que o glitch virou estética digital.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A escassez se desloca do hardware para a habilidade, e o gargalo passa a ser quem sabe especificar tarefa e coletar demonstração de qualidade.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A teleoperação vira trabalho de massa deslocalizado, com gente em países de salário baixo gerando demonstração para políticas treinadas e vendidas em outro lugar.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O trabalho físico repetitivo em ambiente controlado começa a ser exposto à substituição por política generalista, primeiro onde o ambiente já é legível pela máquina.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O impacto no emprego se concentra em galpão, linha e depósito e poupa quem trabalha na rua, na casa alheia e na obra, onde o ambiente não coopera com a máquina.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A separação entre trabalho legível e trabalho ilegível pela máquina inverte a hierarquia salarial de alguns ofícios, e o serviço difícil de simular se valoriza.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: No Brasil o efeito chega primeiro por agro, mineração e óleo, onde já se automatiza por risco, e não pela manufatura, cuja densidade robótica é baixa demais para dar o salto.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: O país consome política treinada fora e exporta demonstração e teleoperação, repetindo na IA física a posição que ocupou na IA de tela.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz sozinho

**A roda tem um eixo que o YAML não mostra: todos os três ramos convergem para a mesma pergunta, que
é de prova.** e1.2.1 (certificar o simulador), e2.1 (proveniência do dado sintético), e6.1 (avaliação
em hardware de terceiro) e e2.2 (seguro que precifica o mundo) são quatro nomes para o mesmo
problema visto de quatro lugares — regulador, fabricante, comprador e segurador. Se eu tivesse de
apostar num único efeito deste mapa, seria neste feixe, e não em nenhum robô específico.

**As profundidades não são simétricas de propósito.** O ramo de D1 desce para instituições — quem
certifica, quem responde, quem paga o seguro. O ramo de D2 desce para ofício e para espaço
construído. O ramo de D3 desce para trabalho e estética. Isso reflete uma escolha: a corporificação
barata muda quem faz, a transferência entre corpos muda o que se faz, e o mundo gerado muda quem
responde.

**Onde parei de derivar, e por quê.** Três desdobramentos foram cortados por deixarem de ter
mecanismo causal rastreável e virarem especulação livre: o efeito de e6.2.1 sobre norma urbanística
(exigiria um quarto nível, e o teto do formato é três); a hipótese de um mercado secundário de corpos
usados com política embarcada; e a hipótese de o direito de imagem do movimento humano ser
reconhecido como direito de personalidade. Os três estão registrados no Anexo, não perdidos.

**O que a tabela de prazos esconde.** Nenhum efeito deste mapa pressupõe mais de algumas centenas de
milhares de humanoides em operação até 2031 — a projeção que abri é de ~60 mil unidades no ano de
2026 inteiro [8], e um mapa que precisasse de milhões estaria errado pela aritmética antes de estar
errado pela previsão. Os efeitos de e8 são deliberadamente cautelosos por isso.

## 6. Sinais fracos e wildcards

### Emergentes rejeitadas como raiz, mantidas no radar

**Percepção tátil densa e modelos visão-tato-linguagem-ação.** O campo fala em VTLA como extensão
natural do VLA. Rejeitada como raiz por falta de limiar datado: não encontrei, nas buscas desta
sessão, um resultado que mostre pele tátil mudando a restrição de custo, acesso ou capacidade —
apenas a constatação, no diagnóstico de sim-to-real, de que deformáveis e contato rico são
justamente onde o simulador erra mais. Se um resultado de tato sair do laboratório antes de 2028, o
ramo e6.2 muda de sinal: em vez de estreitar o mundo para caber na política, a política passa a
caber no mundo.

**Restrição física dentro do laço de raciocínio.** A ideia de manter o modelo consciente do próprio
corpo — limites de junta, alcance, carga — como parte do modelo de execução, e não como camada de
segurança pendurada depois. É pequena e estruturalmente grande: transforma a restrição de filtro em
premissa. Fica como emergente porque o que existe hoje é implementação, não evidência comparada.

**Enxame corporificado.** Vários corpos baratos coordenando-se num ambiente de risco — resgate,
incêndio, inspeção. O limiar de custo por unidade já está caindo [9], mas a peça que falta é
explicitamente a que o Genie 3 declara em aberto: modelar interação entre múltiplos agentes
independentes num ambiente compartilhado [2]. Enquanto o mundo gerado não souber simular vários
agentes, não há como treinar enxame no mundo gerado.

**Inferência de modelo de mundo na borda.** Anunciada como Cosmos 3 Edge, "em breve" [1]. Anotada
aqui exatamente por isso: é o produto que ainda não existe e já tem nome. Se sair e funcionar, a
consequência é grande — o robô passa a carregar o próprio simulador e a imaginar o passo seguinte
antes de dá-lo, e vários efeitos de 2030 deste mapa antecipam.

### Wildcards — baixa probabilidade, alto impacto

**O acidente cuja causa está no simulador, não no robô.** Um incidente sério, investigado, cuja
causa-raiz seja uma dinâmica errada no mundo de treino e não uma falha de hardware ou de código.
Impacto: converte e2 de tendência em fato consumado e antecipa e1.2.1 e e2.1 em anos. O terreno
jurídico já está posto — a diretiva de responsabilidade revisada estende a responsabilidade a quem
anota dado e treina algoritmo, e o Regulamento de Máquinas aplicável a partir de janeiro de 2027
exige prova documentada de segurança para estados operacionais futuros e não só para as capacidades
atuais [12]. Falta só o caso.

**Um envenenamento de modelo de mundo encontrado em produção.** A prova de conceito existe e é de
junho de 2026: conjunto de teleoperação visivelmente seguro, comprometimento que só se ativa ao
passar pelo modelo de mundo, backdoor ponta a ponta na política a jusante [11]. O wildcard é a
descoberta do mesmo padrão numa cadeia comercial. Impacto: recall de política em vez de recall de
peça, e a primeira vez em que se desliga uma frota física por causa de um dado.

**A régua independente virando ferramenta de mercado.** Se uma política aberta passar de 50% no
conjunto real do RoboDojo, onde a melhor de trinta fez 12,8% [10], o efeito não é técnico, é
financeiro: o prêmio pago hoje por pilhas fechadas evapora em um trimestre. Esse é o wildcard
otimista deste mapa, e o mais fácil de verificar — basta olhar o placar público.

**A proibição preventiva.** Uma cidade grande proibir humanoides em espaço público *antes* de
qualquer acidente, por precaução ou por pressão sindical. Impacto assimétrico e subestimado: empurra
todo o desenvolvimento para ambientes fechados e reprojetados, o que acelera e6.2 e mata e7.1.

**O caso invertido, que este mapa quase não contempla.** A IA física ficar boa e ninguém querer.
Rejeição social a máquinas com corpo em espaços de convívio, não por medo de desemprego, mas por
desconforto — o equivalente corporificado do que aconteceu com óculos de câmera no rosto. Nenhum
efeito do meu bloco YAML depende de aceitação social, e isso é uma falha do mapa que registro aqui
por não ter conseguido convertê-la em efeito com mecanismo rastreável.

## 7. Contra o próprio mapa

### Extrapolação linear — o que é só "o presente, só que mais"

**e7 e todo o ramo de D3 são os mais frágeis.** US$ 16.000 em maio de 2024 para US$ 13.500 no fim de
2025 [9] é uma queda de 16% em dezenove meses. Isso é curva de aprendizado de manufatura, não
remoção de restrição. Pior: a versão que executa trabalho útil, a EDU, é revendida entre US$ 43.900
e US$ 73.900 [9] — de três a cinco vezes o preço de vitrine, o que sugere que o número baixo é de
uma máquina de demonstração e pesquisa, não de produção. Mantive D3 como raiz pelo argumento da
composição de embarques (industrial e comercial de ~50% para >70% em um ano [8]), que é uma mudança
de natureza e não de grau, mas **rebaixei a confiança de e7 de alta para média e a de todas as suas
folhas para baixa**.

**e1 também é suspeito de linearidade**, por motivo oposto: é quase certo demais. "Variação de
cenário fica mais barata" é a continuação óbvia de uma curva que já corre desde a randomização de
domínio. Mantive a confiança alta justamente porque o efeito é trivialmente verdadeiro — e assinalo
que efeito trivial não é mérito do mapa, é piso.

**e8.1 é extrapolação sociológica sem mecanismo novo.** "A automação atinge primeiro o ambiente
controlado" vale para o robô industrial desde os anos 1970. O que há de novo é apenas o alargamento
da fronteira do que conta como controlado. Rebaixei o sinal e mantive a confiança em média por
prudência, não por evidência.

### Velocidade de adoção nunca vista

**O risco maior deste mapa seria projetar centenas de milhares de humanoides operando até 2031.** A
projeção da fonte que abri é de cerca de 60 mil unidades no ano de 2026 inteiro [8]. Mesmo mantendo
um crescimento de três dígitos por três anos seguidos — coisa que nenhuma categoria de hardware
sustentou na história recente —, 2031 não é um mundo povoado de humanoides. O caso comparável que
contradiz qualquer prazo agressivo é o próprio robô industrial: a base global instalada levou
décadas para chegar à casa dos milhões, apesar de ter mercado, norma, integrador e financiamento
desde os anos 1980. O segundo comparável é o veículo autônomo, prometido para 2020 e operando em
2026 em um punhado de cidades com frotas na casa dos milhares.

Por isso **nenhum efeito deste mapa exige escala de massa**. e8 e suas folhas foram escritos para
funcionar com dezenas de milhares de unidades concentradas em poucos tipos de ambiente, e as folhas
que dependeriam de ubiquidade (e8.1.1, e8.2.1) estão em `confianca: baixa`.

O efeito que mais viola esta disciplina é **e5**, que põe a linguagem natural como interface
primária de máquina física já em 2028. O comparável que o contradiz é a interface de voz em
eletrodoméstico: existe há uma década, funciona, e não virou interface primária de nada. Rebaixei
e5 de confiança alta para média por conta disso.

### O que acontece com cada subárvore se a raiz não vingar

**Se D1 não vingar** — isto é, se a evidência de [7] for específica daquele framework, daquele
dataset moderado e daquelas tarefas de manipulação, e o mundo gerado não servir como fonte de treino
para locomoção, direção e contato rico —, caem e1, e3 e as onze folhas abaixo deles. Sobra o
simulador físico clássico, que é maduro, e o mapa inteiro desidrata para "mais Isaac Sim, mais
barato". **Sobrevive apenas e2**, e sobrevive por um motivo que vale registrar: a cadeia de
responsabilidade se estende a dado sintético de qualquer origem [12], gerado por modelo de mundo ou
construído à mão. A pergunta "quem responde pelo mundo em que se treinou" não depende de o mundo ser
gerado — só fica mais aguda quando ele é.

**Se D2 não vingar** — se Motion Transfer for resultado de laboratório entre corpos parecidos, e a
transferência real for muito pior que a anunciada —, caem e4 e e5 com suas oito folhas. **e6, porém,
se fortalece**: a distância entre bancada e mundo é exatamente o que e6 descreve, e um fracasso de
D2 é a confirmação de e6, não a sua refutação. Este é o único ponto do mapa em que o fracasso de uma
raiz confirma um efeito derivado dela, e vale notar a assimetria: o RoboDojo [10] já é evidência
parcial contra D2 e a favor de e6 ao mesmo tempo.

**Se D3 não vingar** — se o preço do corpo útil estacionar na faixa dos US$ 44 mil e o G1 de vitrine
permanecer uma máquina de demonstração —, caem e7, e8 e suas oito folhas, e a corporificação não
vira material de design nesta década: fica como bem de capital industrial, exatamente onde estava.
Nesse cenário, o interesse do tema para quem projeta mídia e interação cai bastante, e o que resta
de relevante é o ramo de D1 — o mundo gerado como lugar onde o design de ambiente e o design de
currículo se encontram.

### Viés do autor

A skill manda **perguntar ao usuário** se ele escolheu o tema por gostar dele, e não inventar a
resposta por ele. Perguntei; **nesta rodada não há usuário disponível para responder** — a execução
é automatizada e as respostas de entrevista vieram pré-fixadas no prompt da rodada, que declara viés
neutro e zona de interesse "Simulação e mundos". Portanto: **o viés do autor não foi verificado com
o autor, e isto é uma limitação declarada deste documento**, registrada também na seção 8.

O que consigo diagnosticar sem ele: a zona de interesse declarada é "Simulação e mundos", o que
predispõe estruturalmente a tratar o simulador como protagonista da história. Parte da força que dei
a D1 pode ser esse viés falando — um autor cuja zona fosse "trabalho" provavelmente teria posto D3
como raiz principal e o mundo gerado como detalhe de implementação. Compensei parcialmente
escolhendo, como evidência mais dura de todo o documento, um número que *desfavorece* o campo (os
12,8% de [10]), mas compensação não é neutralidade.

### O que sobreviveu intacto ao ataque

Dois efeitos: **e2** e **e6**. e2 sobrevive porque as datas regulatórias são exógenas ao sucesso
técnico — janeiro de 2027 para o Regulamento de Máquinas e dezembro de 2024 para a diretiva de
responsabilidade revisada [12] acontecem independentemente de o robô funcionar. e6 sobrevive porque
já aconteceu: a régua existe, o número é 12,8%, e ele é público [10]. Que apenas dois de oito efeitos
de primeira ordem tenham passado sem rebaixamento é, a meu ver, o sinal de que a contestação foi
feita de verdade.

## 8. O que a máquina errou

**Errei com número mais preciso que a fonte.** Ao levantar o Cosmos 3, o resumo agregado da busca
trazia "20 trilhões de tokens multimodais, quase um bilhão de imagens, 400 milhões de vídeos reais e
sintéticos". Números específicos, plausíveis, do tipo que se cita sem pensar. Ao abrir o comunicado
oficial da NVIDIA [1], o texto diz apenas "bilhões de amostras através de texto, imagem, vídeo, som
e trajetórias de ação" — sem nenhum dos três números. Ou seja: a camada de resumo era **mais
precisa** que a fonte primária, o que só pode significar que os números vieram de outro lugar que
não verifiquei. Não os usei. Este é o erro mais perigoso da sessão, porque o número inventado não
soa inventado — soa pesquisado.

**Quase juntei dois papers num argumento só.** Eu ia escrever que "a melhor política faz 12,8% no
real, enquanto no LIBERO todas ficam entre 90% e 95%" como se as duas metades viessem do mesmo
trabalho — uma frase muito boa, com um contraste muito limpo. Abri o RoboDojo [10]: os 12,8% do
π0.5 em 18 tarefas reais, três corporificações, teleoperação humana a 100%, estão lá. A frase sobre a
saturação do LIBERO **não está**. Ela veio de um blog de fornecedor de rotulagem de dados, que não
abri. Mantive a primeira metade, descartei a segunda, e o argumento ficou menos elegante e mais
verdadeiro.

**Datei mal o "por que agora".** Tratei o Genie 3 como novidade recente até abrir a fonte: é de 5 de
agosto de 2025 [2], não de 2026. Num mapa cuja Etapa 2 inteira gira em torno de "por que agora e não
há cinco anos", errar em um ano a data de um limiar não é detalhe — muda se o limiar está sendo
cruzado ou se já foi cruzado e não produziu o efeito esperado. Corrigi, e a correção enfraquece D1:
faz treze meses que existe mundo gerado navegável em tempo real, e a evidência de utilidade
instrumental ainda é um único paper [7].

**Quase abri o documento com o preço errado.** Ia escrever US$ 16.000 como preço atual do Unitree
G1 — o número que circula em toda parte. É o preço de lançamento de maio de 2024; o atual é
US$ 13.500 [9]. Um mapa cuja terceira raiz é um limiar de preço não pode errar o preço.

**Usei uma fonte fraca de propósito, e declaro.** O dado brasileiro — cerca de 7 robôs por mil
trabalhadores, contra cerca de 100 por mil na Coreia do Sul — vem de entrevista em podcast com o
coordenador do Instituto SENAI de Sistemas de Manufatura, **sem ano informado e sem citação da
federação internacional de robótica** [13]. É a diferença entre fonte lida e fonte confiável: eu li,
e ainda assim não confiaria nela para uma decisão. Está no mapa porque a ordem de grandeza sustenta
e8.2 e porque omitir o Brasil por falta de fonte boa seria pior que incluí-lo com a ressalva.

**Divergência numérica que não sei resolver.** Duas casas de análise reportam o mesmo primeiro
semestre de 2026 com números diferentes: 19.100 unidades [8] e "mais de 22.000" numa segunda casa
cujo relatório não abri. Adotei o da fonte que abri, e registro a divergência em vez de escolher o
número mais conveniente — que seria o maior, porque favorece a narrativa de disrupção.

**Limitação de processo declarada.** A Etapa 4 desta skill exige perguntar ao autor sobre o próprio
viés. Não havia autor disponível nesta rodada. A seção 7 foi escrita com a autocrítica que consigo
fazer sozinho, que é estruturalmente mais fraca: eu consigo apontar o viés que o método prevê, não o
viés que só quem escolheu o tema conhece.

## 9. Três cenários para 2031

### Provável — "o mundo estreitado"

Em 2031, olhando para trás, o que aconteceu foi menos espetacular e mais chato do que se previu em
2026. A política generalista melhorou de verdade — o placar público do banco de provas real saiu dos
12,8% de 2026 para algo em torno de 40% —, mas o salto veio menos do modelo e mais do ambiente: as
empresas descobriram que era mais barato reprojetar o galpão do que ensinar a máquina a lidar com um
galpão qualquer. Piso marcado, iluminação padronizada, corredores largos, embalagem redesenhada. O
mundo gerado virou infraestrutura silenciosa de treino em todos os laboratórios sérios, e a
discussão pública sobre ele migrou de "que impressionante" para "quem assina". A primeira exigência
de avaliação em simulador de terceiro apareceu em contrato de compra pública antes de aparecer em
lei. Os humanoides existem, na casa das centenas de milhares, quase todos em ambientes fechados que
ninguém visita. A IA física não chegou à cidade; a cidade é que começou, discretamente, a se mudar
para perto dela.

### Desejável — "a régua venceu"

Em 2031, o que salvou o campo do seu próprio ciclo de desilusão foi uma coisa sem glamour nenhum: a
avaliação independente virou norma antes de a bolha estourar. A partir de 2027, comprador
institucional parou de aceitar vídeo como evidência e passou a exigir avaliação em hardware
padronizado com acesso remoto, e os placares públicos passaram a valer mais que as demonstrações.
Isso teve dois efeitos que ninguém tinha previsto. Primeiro: laboratórios pequenos e políticas
abertas voltaram ao jogo, porque a régua não pergunta quem treinou. Segundo: a proveniência do dado
sintético virou requisito ordinário — que modelo, que versão, que semente —, o que fechou por
antecipação o flanco de envenenamento que a literatura tinha demonstrado em 2026. **Para chegar
aqui foi preciso, concretamente:** manter o banco de provas real financiado por dinheiro público e
não por fornecedor; escrever no contrato de compra, e não na lei, a exigência de avaliação por
terceiro; e tratar o registro de proveniência do mundo de treino como se trata hoje a lista de
materiais de software. Nada disso exigiu tecnologia nova — exigiu que alguém pagasse a conta da
régua.

### Indesejável — "o oligopólio do mundo"

Em 2031, treinar uma política própria ficou impossível para quem não é um dos quatro fornecedores de
pilha completa. O caminho foi razoável a cada passo: um acidente sério em 2028, causa-raiz no mundo
de treino e não no robô; a resposta regulatória exigindo simulador auditado; a auditoria custando
mais que o robô; seguradoras recusando apólice para quem treinou em mundo não credenciado. Ao fim,
quem vende o corpo, o cérebro, o mundo e o certificado do mundo é a mesma empresa, e a avaliação
independente morreu de inanição porque ninguém tinha interesse em financiá-la. O integrador pequeno
virou revendedor. O laboratório universitário virou consumidor de API. E a pergunta que a disciplina
fez em 2026 — quem responde quando o mundo real diverge do simulado — recebeu a pior resposta
possível: responde quem tem contrato para responder, e ele é o mesmo que fez o simulado. **O sinal
precoce disto, visível já em 2027:** o primeiro edital de compra pública que exigir simulador
credenciado *sem* criar um caminho de credenciamento acessível a quem não é fornecedor de pilha
completa. Quando essa cláusula aparecer, o cenário já começou.

## 10. O experimento

### O que é

**O duplo-cego de simuladores.** Uma mesma política simples de manipulação ou direção é avaliada em
três lugares: (a) um mundo modelado à mão num simulador clássico — MetaDrive para direção, ou um
engine físico com um braço barato para manipulação; (b) um mundo **gerado** por modelo de mundo a
partir de imagem ou texto descrevendo a mesma cena; e (c) o mundo real reduzido — um carrinho com
câmera, ou um braço de baixo custo sobre uma mesa. Produz-se uma ordenação de desempenho em cada um
dos três. A medida que interessa não é o desempenho: é **qual dos dois mundos artificiais prevê
melhor a ordenação do mundo real**.

### Que pergunta sobre o futuro ele responde

A pergunta de que depende a disrupção-raiz 4.1 inteira, e que a literatura de 2026 responde de forma
contraditória: um trabalho diz que há correlação forte entre desempenho no mundo gerado e no mundo
real [7]; outro, de terceiro e com hardware padronizado, encontra descompasso entre ordenação
simulada e ordenação real [10]. São medidas sobre coisas diferentes, mas a tensão é real e é
verificável em escala de sala de aula. Se o mundo gerado prever o real melhor que o mundo modelado,
e1.2, e2 e todo o feixe de certificação sobem de confiança. Se prever pior, o modelo de mundo fica
sendo, por ora, uma ferramenta de aumento de dado — e não o lugar onde a maior parte do aprendizado
acontece.

### Que tecnologia emergente usa, e por que não dá para fazer com tecnologia madura

Usa modelo de mundo gerativo (Cosmos ou equivalente aberto [1]) mais uma política VLA aberta. **Não
dá para fazer só com tecnologia madura** porque o objeto do experimento *é o gerador*: com Isaac Sim
ou MuJoCo puros mede-se sim-to-real, que é problema conhecido desde os anos 1990 e tem literatura
madura. O que não tem literatura madura, e é o que este experimento mede, é a diferença entre um
mundo que alguém construiu e um mundo que um modelo amostrou — comparados pela mesma régua real.

### O que a turma faria testando em sala

Duas rodadas, presenciais.

**Rodada 1 — a medida.** Cada dupla roda as três avaliações e traz sua ordenação. Junta-se tudo num
quadro. A discussão é sobre a discordância: onde os dois mundos artificiais divergem do real, e se
divergem nos mesmos lugares ou em lugares diferentes. Divergir nos mesmos lugares é uma notícia
(ambos erram a física do contato); divergir em lugares diferentes é outra (o mundo gerado erra o que
o modelado acerta, e vice-versa) — e a segunda é a interessante, porque sugere combinação em vez de
substituição.

**Rodada 2 — a adulteração.** Cada dupla injeta secretamente **uma** discrepância no seu mundo:
atrito alterado, iluminação deslocada, um objeto a mais, uma latência inserida. Troca-se: as outras
duplas recebem só os vídeos de execução do agente e precisam descobrir **qual** mundo foi adulterado
e **como**, olhando apenas o comportamento. É a versão de sala de aula do ataque demonstrado em
[11] — envenenamento que só se manifesta depois de passar pelo modelo de mundo —, e serve para
ensinar a coisa mais difícil deste tema: que a falha do agente corporificado é frequentemente um
sintoma cuja causa está num lugar que ninguém está olhando.

### O que mudaria a opinião do autor

Três coisas, declaradas antes de rodar. **Se** o mundo gerado empatar ou superar o mundo modelado na
previsão do real em tarefas de contato, D1 sobe de confiança média para alta e o feixe de
certificação (e1.2.1, e2.1, e2.2) antecipa dois anos. **Se** ficar sistematicamente abaixo, e1.2
perde o pé e o modelo de mundo volta a ser aumento de dado — e este mapa deve ser reescrito com D1
rebaixada a sinal fraco. **Se** a rodada 2 mostrar que uma adulteração grosseira é indetectável pelo
comportamento, e2 e e2.1.1 sobem de confiança, porque a auditoria do mundo deixa de ser
zelo burocrático e vira a única defesa disponível.

## 11. Fontes

Apenas o que foi de fato aberto e lido nesta sessão. Buscas que só produziram títulos e resumos, sem
que a página fosse aberta, estão registradas no Anexo e **não** aparecem aqui.

1. **NVIDIA — "NVIDIA Launches Cosmos 3, the Open Frontier Foundation Model for Physical AI"**,
   31/05/2026. `https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai`
   Sustenta: a existência e a arquitetura do Cosmos 3, os três tamanhos (Super, Nano, Edge "em
   breve"), a alegação de redução de ciclos de meses para dias, a coalizão e as adoções nomeadas.
   Confiabilidade: comunicado do fabricante — fonte primária para o que a empresa lançou, e material
   de marketing para qualquer alegação de desempenho. Tratada como a primeira coisa, não como a
   segunda.

2. **Google DeepMind — "Genie 3: a new frontier for world models"**, 05/08/2025.
   `https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/`
   Sustenta: 720p, 24 fps, consistência de alguns minutos, memória visual de cerca de um minuto,
   eventos promptáveis, e — o mais útil — a lista explícita de limitações (ação restrita, múltiplos
   agentes em aberto, texto ilegível, minutos e não horas).
   Confiabilidade: blog de laboratório, autorreportado, sem revisão por pares; boa para capacidade
   declarada e para limitação declarada, que é o uso que faço.

3. **Google DeepMind — "SIMA 2: an agent that plays, reasons and learns with you in virtual 3D
   worlds"**, 13/11/2025.
   `https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/`
   Sustenta: agente generalista agindo em mundos gerados pelo Genie 3 sem exposição prévia,
   autoaperfeiçoamento com feedback do próprio Gemini, e as limitações (horizonte longo, memória
   curta por latência, precisão, cena 3D complexa).
   Confiabilidade: idem item 2.

4. **arXiv:2510.03342 — "Gemini Robotics 1.5: Pushing the Frontier of Generalist Robots with
   Advanced Embodied Reasoning, Thinking, and Motion Transfer"**, submetido 02/10/2025.
   `https://arxiv.org/abs/2510.03342`
   Sustenta: o mecanismo Motion Transfer, o aprendizado a partir de dado heterogêneo de múltiplas
   corporificações, e o raciocínio em linguagem natural intercalado à ação.
   Confiabilidade: preprint de laboratório industrial, não revisado por pares; resultados
   autorreportados.

5. **Google DeepMind — "Gemini Robotics 2 brings whole body intelligence to robots"**, 30/07/2026.
   `https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/`
   Sustenta: controle de corpo inteiro no Apollo 2, e as faixas de sucesso 45,7–76,3% (corpo
   inteiro), 36–92% (multidedos), 74,2–89,6% (garra), além da lista de plataformas suportadas.
   Confiabilidade: blog de laboratório; números autorreportados em tarefas escolhidas pelo próprio
   laboratório. Uso deliberadamente contrastado com o item 10.

6. **arXiv:2604.15483 — "π0.7: a Steerable Generalist Robotic Foundation Model with Emergent
   Capabilities"**, submetido 16/04/2026, revisto 24/04/2026. `https://arxiv.org/abs/2604.15483`
   Sustenta: generalização composicional, transferência entre corpos sem exemplo prévio, e a
   composição do treino com dado subótimo, falhas e vídeo de humanos.
   Confiabilidade: preprint, autorreportado.

7. **arXiv:2603.08546 — "Interactive World Simulator for Robot Policy Training and Evaluation"**
   (RSS), submetido 09/03/2026. `https://arxiv.org/abs/2603.08546`
   Sustenta: a evidência central de D1 — políticas treinadas em dado gerado por modelo de mundo com
   desempenho comparável às treinadas na mesma quantidade de dado real; correlação forte entre
   simulado e real; mais de dez minutos a 15 fps numa única RTX 4090; rígidos, deformáveis e pilhas.
   Confiabilidade: a mais alta do conjunto — trabalho aceito em conferência com revisão. Ressalva
   que faço na própria seção 7: dataset moderado e escopo de manipulação.

8. **Smart Analytics Global — embarques globais de humanoides, 1S 2026**, 2026.
   `https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/`
   Sustenta: 19.100 unidades no 1S2026, +272% sobre 5.100 no 1S2025; AGIBOT 8.400 (44%), Unitree
   5.900 (31%); projeção de ~60 mil unidades e ~US$ 1,6 bi em 2026; e o dado que mais uso — fatia
   industrial/comercial de ~50% para >70% em um ano.
   Confiabilidade: consultoria de mercado, metodologia não publicada; diverge de outra casa que
   reporta "mais de 22 mil" para o mesmo período. Divergência declarada na seção 8.

9. **Theresarobotforthat — "Unitree G1 Price 2026: $13,500 Official, EDU From $43,900"**, verificado
   em 20/07/2026. `https://theresarobotforthat.com/blog/unitree-g1-price/`
   Sustenta: lançamento a US$ 16.000 em maio de 2024, corte para US$ 13.500 no fim de 2025, EDU
   entre US$ 43.900 e US$ 73.900 via revenda.
   Confiabilidade: blog especializado que declara a data de verificação e distingue preço direto de
   preço de revendedor — o que é mais do que a maioria faz —, mas é fonte secundária. O preço direto
   é conferível na loja do fabricante; o intervalo da EDU, não.

10. **arXiv:2607.04434 — "RoboDojo: A Unified Sim-and-Real Benchmark for Comprehensive Evaluation of
    Generalist Robot Manipulation Policies"**, submetido 05/07/2026, v3 em 08/07/2026.
    `https://arxiv.org/abs/2607.04434`
    Sustenta: 42 tarefas em simulação sobre Isaac Sim e 18 no real; 30 políticas avaliadas; melhor
    resultado real de **12,8%** (π0.5) em três corporificações contra **100%** da teleoperação
    humana; e o descompasso explícito entre ordenação simulada e real.
    Confiabilidade: a evidência mais dura deste documento e a única que corta contra a narrativa
    dominante do campo. Preprint, mas com protocolo público, hardware padronizado e placar aberto —
    exatamente o tipo de fonte que não tem incentivo para inflar o número.

11. **arXiv:2606.09499 — "Targeting World Models to Compromise Robot Learning Pipelines"** (preprint
    CoRL), submetido 08/06/2026. `https://arxiv.org/abs/2606.09499`
    Sustenta: o envenenamento via modelo de mundo, com injeção em dados de teleoperação visivelmente
    seguros que só se ativa ao passar pelo modelo, e backdoor ponta a ponta demonstrado numa política
    de RL a jusante, contra modelos condicionados a ação e a texto.
    Confiabilidade: preprint de 8 páginas, prova de conceito em laboratório; sustenta a
    *possibilidade* do ataque, não sua prevalência — e é assim que o uso, como wildcard e não como
    tendência.

12. **Osborne Clarke — "Robotics at a global regulatory crossroads: compliance challenges for
    autonomous systems"**, 2026.
    `https://www.osborneclarke.com/insights/robotics-global-regulatory-crossroads-compliance-challenges-autonomous-systems`
    Sustenta: Regulamento de Máquinas 2023/1230 aplicável a partir de janeiro de 2027 com limiares
    de autonomia, cibersegurança de ciclo de vida e mapeamento colaborativo de risco; diretiva de
    responsabilidade revisada em vigor desde dezembro de 2024; classificação por risco sob o AI Act;
    a exigência de prova documentada de segurança **para estados operacionais futuros e não só para
    a capacidade atual**; e a responsabilidade compartilhada ao longo da cadeia, alcançando quem
    anota dado e quem treina algoritmo.
    Confiabilidade: escritório de advocacia escrevendo para clientes — bom para datas e para a
    estrutura da norma, e a ser lido com reserva onde interpreta. As datas são conferíveis no texto
    legal.

13. **Canaltech — "Indústria 4.0: Brasil tem apenas 7 robôs para cada 1 mil trabalhadores"**.
    `https://canaltech.com.br/mercado/industria-40-brasil-tem-apenas-7-robos-para-cada-1-mil-trabalhadores/`
    Sustenta: a ordem de grandeza da densidade robótica brasileira (~7 por mil trabalhadores, contra
    ~100 por mil na Coreia do Sul) e a leitura de que agro, mineração e óleo lideram a adoção no
    país por redução de risco — que é o mecanismo de e8.2.
    Confiabilidade: **a mais fraca do conjunto, e declarada como tal na seção 8.** Declaração em
    entrevista de podcast de um coordenador do Instituto SENAI de Sistemas de Manufatura, sem ano e
    sem citação da federação internacional de robótica. Usada só para ordem de grandeza.

## 12. Anexo — o levantamento bruto

Sem corte. O que não estiver aqui não pode ser processado depois.

### A.1 Etapa 0 — a entrevista, como ela de fato ocorreu

A skill exige entrevista bloqueante antes de qualquer geração. **Nesta rodada não houve usuário
humano para entrevistar**: a execução é automatizada e o prompt da rodada trouxe as respostas
pré-fixadas. Reproduzo-as como recebidas, porque é delas que sai o frontmatter:

- Tema: "Agentes corporificados, IA física e modelos de mundo" (tema 9 de 19; família "Simulação e
  mundos").
- Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o
  Brasil.
- Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra
  exclusão.
- Disrupção suspeita: nenhuma — descobrir. Viés: neutro. Excluir ideias óbvias que servem para
  qualquer tema.
- O que faria mudar de ideia: evidência de adoção além da maioria inicial (Rogers), ou de que a
  tecnologia só melhora o que existe.
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse: "Simulação e mundos". Login: jgpt. Skill: futurizacao-jgpt.

**Defaults que assumi por conta própria, por não estarem definidos:** `recorte_geografico: global`
no frontmatter (o campo não comporta "global com nota sobre o Brasil", e a nota está em e8.2 e na
fonte 13); `publico_ok: false`, porque não houve autorização explícita; `confianca: media` para o
mapa como um todo, pelo motivo dado em A.5.

**Consequência metodológica, registrada nas seções 7 e 8:** a pergunta da Etapa 4 sobre o viés do
autor — se ele escolheu o tema por gostar dele — não pôde ser feita a ninguém. A skill proíbe
inventar a resposta pelo usuário; não a inventei.

### A.2 Todas as buscas rodadas, e o que cada uma devolveu

Onze buscas e treze aberturas de página. Buscas cujo resultado não foi aberto **não** viraram fonte.

1. `NVIDIA Cosmos world foundation model physical AI 2026` → Cosmos 3 (01/06/2026 na cobertura,
   31/05 no comunicado), mistura de transformers, coalizão. Resumo trazia "20 trilhões de tokens,
   ~1 bilhão de imagens, 400 milhões de vídeos" — **números que a fonte primária não confirma**.
   Descartados. Abri: comunicado oficial.
2. `Gemini Robotics 1.5 embodied reasoning DeepMind 2026` → o par VLA + ER, Motion Transfer,
   transferência ALOHA2 → Franka → Apollo sem retreino; menção ao Gemini Robotics ER 2 de
   30/07/2026 com vídeo em tempo real, rastreio de progresso, Live API e colaboração multi-robô.
   Abri: arXiv 2510.03342 e o blog do Gemini Robotics 2.
3. `Genie 3 world model real time interactive 720p DeepMind persistence` → 720p/24fps, permanência
   de objeto emergente, 11 bilhões de parâmetros (número que **não** confirmei na fonte aberta e
   por isso não uso), preview de agosto de 2025. Apareceu também `Matrix-Game 3.0` (arXiv 2604.08995,
   modelo de mundo interativo com memória de horizonte longo) e um survey de modelos de mundo
   (arXiv 2606.00133) — **nenhum dos dois aberto**, registrados aqui como pista para quem continuar.
   Abri: blog do Genie 3.
4. `humanoid robot deployment numbers 2026 Figure Unitree shipments factory` → duas contagens
   divergentes para o 1S2026 (19,1 mil e "mais de 22 mil"); AGIBOT ultrapassando a Unitree; G2 da
   AGIBOT na linha da Longcheer; 15.000º robô em junho; projeções de 50 a 60 mil para o ano.
   Abri: Smart Analytics Global.
5. `Physical Intelligence pi 0.6 robot foundation model 2026 generalization` → π0.7 de abril de
   2026. Apareceram vários VLAs que **não** abri e que ficam como pista: ACE-Brain-0.5
   (arXiv 2607.04426), Orca (2606.30534), ABot-M0 (2602.11236), HoloBrain-0 (2602.12062), FRAPPE
   (2602.17259), GigaBrain-0.5M (2602.12099). Abri: arXiv 2604.15483.
6. `sim-to-real gap world model failure robot 2026 critique "reality gap" benchmark` → a busca mais
   produtiva de todas. Trouxe RoboDojo, o survey de world models para robot learning (2605.00080),
   "Robots Need More than VLA and World Models" (2606.06556), Mask World Model (2604.19683),
   Fail2Progress (2509.01746) e a perspectiva unificada de MDP sobre o gap (2606.07017) — **apenas o
   RoboDojo foi aberto**. Trouxe também a frase sobre saturação do LIBERO (90–95%) que descartei por
   não estar na fonte primária (ver seção 8).
7. `regulação robô autônomo responsabilidade acidente simulação 2026 EU Machinery Regulation AI Act
   robots` → datas de janeiro de 2027 e dezembro de 2024/2026 (as fontes divergem entre a entrada em
   vigor e a aplicabilidade da diretiva de responsabilidade — adotei a formulação da fonte 12);
   Bird & Bird (retornou HTTP 402, **não aberto**); Timelex (não aberto); "Beyond Tools and Persons"
   (2604.05568) e "Consent Chain Degradation in Embodied Multi-Agent Systems" (2605.16300), ambos
   não abertos e ambos promissores para o ramo e2. Abri: Osborne Clarke.
8. `SIMA 2 DeepMind generalist agent 3D virtual worlds Genie` → SIMA 2 dobrando os 31% de conclusão
   do SIMA 1 (número do resumo agregado, **não confirmado na fonte aberta**, por isso ausente do
   corpo do documento); ASKA e MineDojo como ambientes retidos; arXiv 2512.04797 não aberto.
   Abri: blog do SIMA 2.
9. `Unitree G1 price $16000 humanoid cost decline 2026 bill of materials` → o corte de US$ 16.000
   para US$ 13.500; EDU de US$ 43.900 a US$ 73.900; margem bruta de ~60% e receita de ~¥1,7 bi em
   2025 (números que **não** uso, por virem de fonte secundária não aberta); R1 a US$ 5.900 como
   pista adiante. Abri: theresarobotforthat.
10. `"world model" generated data training robot policy works evidence 2026 neural simulator replace
    physics engine` → o paper do RSS e o do envenenamento. Abri os dois.
11. `Brasil robótica IA física 2026 startup humanoide pesquisa embodied AI universidade` e
    `Brasil robôs industriais densidade 2026 IFR Brasil automação número instalações` → ~20 mil
    robôs industriais no país, densidade abaixo de 50 por 10 mil trabalhadores contra média mundial
    de 141, 30,5% das indústrias usando robótica segundo o IBGE, 74,3% citando custo e 60,6% citando
    falta de mão de obra como barreira, 542 mil instalações mundiais em 2024 segundo a IFR. **Nenhum
    desses números foi confirmado em fonte aberta**: tentei realtime1.com.br, que não traz número
    nenhum apesar de a busca sugerir que traria, e recuei para o Canaltech, que traz um número com
    origem fraca. Por isso o Brasil aparece neste mapa como ordem de grandeza e como mecanismo
    (e8.2), nunca como estatística citada.

**Busca que não fiz e deveria ter feito:** nada especificamente sobre acidentes já ocorridos com
robôs treinados em simulação. O wildcard da seção 6 foi construído por dedução a partir do quadro
regulatório [12], não a partir de um caso. Se alguém continuar este mapa, comece por aí.

### A.3 O teste de maturidade, aplicado candidata por candidata

Registro completo da Etapa 2, incluindo as rejeitadas. A pergunta é sempre a mesma: **o que rompe, e
por que agora e não há cinco anos?**

| Candidata | Veredito | Limiar concreto, ou por que falta |
|---|---|---|
| Modelo de mundo gerativo como fonte de treino e avaliação | **Disruptiva** | 720p/24fps navegável (ago/2025); paridade com dado real e 10 min a 15 fps numa RTX 4090 (mar/2026) |
| Política generalista transferível entre corpos | **Disruptiva** | Motion Transfer (out/2025); transferência sem exemplo prévio no π0.7 (abr/2026); corpo inteiro (jul/2026) |
| Corpo capaz barato | **Disruptiva, com ressalva** | US$ 16k → US$ 13,5k; e, sobretudo, industrial/comercial de ~50% para >70% em um ano |
| ROS 2 / MoveIt 2 / OMPL / pinocchio | Madura | Infraestrutura absorvida e substituível; sumir amanhã não devolve o campo a 2021 |
| SLAM e navegação visual-inercial (OpenVINS) | Madura | Idem; problema com literatura estabelecida e implementações intercambiáveis |
| Engines físicos (MuJoCo, PhysX, Drake, Newton) | Madura | Idem; é o piso sobre o qual as raízes correm |
| Simulação acelerada por GPU (Isaac Sim, Genesis, habitat-sim, MetaDrive, AirSim) | Habilitador | Condição de possibilidade das três raízes; o próprio RoboDojo roda sobre Isaac Sim |
| Agente generalista em mundos 3D (SIMA 2) | Absorvida em D1 | É o fechamento do laço agente-mundo, não uma raiz separada — sem o mundo gerado, é um agente de jogo |
| Percepção tátil densa / VTLA | Emergente | Sem limiar datado nesta busca; vai para a seção 6 |
| RTOS com raciocínio embarcado / corpo dentro do laço | Emergente | Existe implementação, falta evidência comparada |
| Enxame corporificado | Emergente | Bloqueado justamente pela limitação declarada do Genie 3 quanto a múltiplos agentes |
| Modelo de mundo na borda (Cosmos 3 Edge) | Emergente anunciada | "Em breve" — produto que ainda não existe e já tem nome |
| Aprendizado por reforço em robô real | Madura como técnica | Não removeu restrição nova; o que mudou é de onde vem o dado, e isso é D1 |
| Gêmeo digital industrial | Madura | Prática consolidada de indústria desde os anos 2010; o que é novo é o gêmeo **gerado**, e isso é D1 |

### A.4 Efeitos cortados, e por que

Escritos e removidos durante a Etapa 3, todos por falharem o critério de "consequência causal
rastreável" ou por exigirem um quarto nível que o formato da disciplina proíbe:

- **Norma urbanística com requisito de legibilidade por máquina.** Derivaria de e6.2.1 e seria
  quarto nível. Fica aqui.
- **Mercado secundário de corpos usados com política embarcada.** Derivaria de e4.2.1; o mecanismo
  que ligaria um ao outro (o que acontece com a assinatura na revenda) é interessante mas
  especulativo demais para o nível 3.
- **Direito de personalidade sobre o movimento humano.** Derivaria de e4.1.1. Cortado porque
  transforma uma negociação trabalhista concreta numa inovação jurídica sem precedente identificável
  — exatamente o tipo de salto que a Etapa 4 manda caçar.
- **"O robô doméstico chega em 2031."** Escrito, medido contra os números de embarque [8], e
  descartado por aritmética antes de qualquer juízo: não há corpos suficientes nem à velocidade
  suficiente.
- **"A IA física acaba com o emprego industrial."** Descartado por ser exatamente uma das "ideias
  óbvias que servem para qualquer tema" que a entrevista mandou excluir. O que sobrou dele é e8.1,
  que é mais específico e falseável: o recorte entre ambiente legível e ambiente que não coopera.
- **"Todo mundo terá um avatar corporificado."** Descartado por não ter mecanismo: nenhuma evidência
  desta busca liga as três raízes a consumo doméstico em escala.

### A.5 Como cheguei a `confianca: media` para o mapa inteiro

Três raízes com evidência desigual: D1 tem um paper revisado a favor [7] e um preprint forte de
terceiro que puxa contra [10]; D2 tem resultados autorreportados fortes [4][5][6] e uma régua
independente que os contradiz [10]; D3 tem números de mercado de consultoria com metodologia não
publicada e divergência entre casas [8]. Dois efeitos de primeira ordem sobreviveram intactos à
contestação, seis foram rebaixados. Com esse placar, `alta` seria desonesto e `baixa` seria falsa
modéstia — o mapa tem uma evidência dura (os 12,8%) e um feixe institucional com datas exógenas
(janeiro de 2027) que não dependem de o robô funcionar.

### A.6 Verificação final

```
grep -c "^## " tendencia-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md   # esperado: 12
```

Conferido manualmente: frontmatter é YAML válido com todos os campos presentes; o bloco `roda:` é
YAML válido com exatamente três níveis e todo efeito com `sinal`, `prazo` e `confianca` preenchidos,
nenhum nulo; contagens do frontmatter batem com o bloco (3 raízes, 8 efeitos de 1ª ordem, 16 de 2ª,
16 de 3ª); todo `efeito` é frase afirmativa, nenhuma pergunta; e as treze entradas da seção 11
correspondem, uma a uma, a páginas efetivamente abertas nesta sessão — com a ressalva de
confiabilidade escrita em cada uma, e com a fonte 13 marcada como fraca no próprio corpo do
documento.

**Correção feita na verificação:** o frontmatter dizia `fontes: 12`, valor fixado quando o
levantamento ainda tinha doze itens; a lista final da seção 11 tem **treze** — a décima terceira é a
fonte brasileira, incorporada por último para sustentar e8.2. A checagem da Etapa 5 pegou a
divergência e o campo foi corrigido para 13. Registro aqui em vez de corrigir em silêncio, porque a
contagem do frontmatter é o que a disciplina processa e a lista é o que o leitor confere: os dois
agora dizem a mesma coisa.
