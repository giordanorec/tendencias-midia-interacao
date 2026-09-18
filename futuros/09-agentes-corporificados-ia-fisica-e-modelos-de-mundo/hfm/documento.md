---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: hfm
zona_de_interesse: Simulação e mundos
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 14
efeitos_ordem_3: 14
tecnologias_citadas: [NVIDIA Cosmos, Cosmos 3, Isaac Sim, IsaacLab, Genie 3, SIMA 2, Gemini Robotics 2, Gemini Robotics ER 2, Gemini Robotics On-Device 2, "pi-zero", "pi-star-0.6", openpi, MetaDrive, AirSim, MuJoCo, Genesis, habitat-sim, habitat-lab, drake, newton, PhysX, Apollo, "MoveIt 2", OMPL, pinocchio, MAVLink, Lanelet2, OpenVINS, RT-Thread, MONAI, ROSClaw, WRBench, "Physics-IQ", WorldModelBench, Waymo Driver, Digit, "Figure 03", Unitree, AGIBOT]
fontes: 15
confianca: media
experimento: Banco de provas de divergência mundo-modelo — um agente que recebe a mesma instrução em linguagem natural num mundo gerado por modelo e num mundo escrito à mão, e um placar do que ele erra em cada um
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

A IA ganhou corpo, mas o que mudou de fato não foi o corpo: foi o lugar onde ela aprende. Até
aqui, o mundo de treino era escrito à mão — física programada, cena montada, regra declarada. A
ruptura em curso é o **modelo de mundo gerativo**: um modelo que *produz* o ambiente em vez de
renderizá-lo, e um **agente generalista** que atravessa mundos sem acesso ao código de nenhum
deles. Em 2026 isso já é produto aberto (NVIDIA Cosmos 3, 31/05/2026, pesos no Hugging Face),
já é agente que joga treze jogos comerciais e generaliza para mundos gerados por outro modelo
(SIMA 2, DeepMind), e já é política de robô que controla um humanoide inteiro por instrução em
linguagem (Gemini Robotics 2, 30/07/2026). Também já é falha: a Waymo recolheu quase 4.000
carros em 18/06/2026 porque o software não reconheceu placa de interdição de rampa — erro de
distribuição, não de mecânica. Daí saem três disrupções-raiz: o mundo de treino deixa de ser
escrito e passa a ser gerado; a instrução em linguagem natural vira a interface de comando de
qualquer corpo; e a responsabilidade pela falha desloca-se do dispositivo para o currículo em
que ele aprendeu. Para quem projeta mídia e interação, a consequência mais direta não é robô
na rua: é que **projetar um mundo passa a ser projetar um currículo de treino**, e que o
ambiente construído terá dois públicos de leitura — pessoas e agentes. A confiança geral deste
mapa é média: a evidência de capacidade é forte e aberta, a de adoção produtiva é fraca (19,1
mil humanoides embarcados no 1º semestre de 2026, a maior parte em ambiente cercado), e a
evidência de que os modelos de mundo sustentam estado persistente é, hoje, negativa.

## 2. O tema

O tema é o **agente com corpo e o mundo em que ele aprende**. Corpo aqui é qualquer coisa que
age sobre matéria e sofre consequência dela: braço manipulador, humanoide, drone, veículo,
avatar num mundo 3D com física. Mundo é o lugar onde a política de controle é treinada e
avaliada antes de tocar o real — historicamente um simulador escrito por engenheiros
(MuJoCo, Isaac Sim, AirSim, MetaDrive), e agora, cada vez mais, um **modelo de mundo**: uma
rede treinada em vídeo que gera o próximo estado do ambiente dada uma ação.

Onde isso encosta em mídia e interação, sem metáfora:

1. **A ferramenta é a mesma.** Isaac Sim roda sobre pipeline de renderização de jogo; AirSim
   nasceu sobre Unreal e Unity; SIMA 2 é treinado em jogos comerciais (Valheim, No Man's Sky,
   Teardown) e avaliado em mundos gerados pelo Genie 3. O motor de jogo já é o instrumento de
   pesquisa em robótica. Quem sabe construir mundo digital já domina a infraestrutura da IA
   física, e na maior parte das vezes não sabe disso.
2. **A interface mudou de natureza.** Quando o comando vira linguagem natural e o executor tem
   corpo, o objeto de design deixa de ser a tela e passa a ser a **negociação entre a intenção
   dita e o efeito físico**. Isso é problema de interação, não de mecânica.
3. **O ambiente ganha um segundo leitor.** Sinalização, iluminação, textura, affordance —
   tudo o que o design do espaço construído resolve para olhos humanos passa a ser também
   entrada de percepção de máquina. O recall da Waymo de junho de 2026 é exatamente isso: uma
   placa que um humano lê e um modelo não leu.

Por que isso merece mapa de futuro e não levantamento de estado da arte: porque o estado da
arte está mudando de *tipo*, não de *grau*. O item maduro da área (ROS, planejamento de
trajetória, SLAM, controle) está resolvido e não gera pergunta interessante. A pergunta
interessante é causal e ainda aberta: se o aprendizado migra para um mundo que uma IA inventou,
**o que passa a ser um erro, e de quem é a culpa quando ele acontece?** Levantamento de estado
da arte não responde isso; roda dos futuros pelo menos organiza a cadeia.

Limite de escopo desta análise, declarado: simulação de *sociedades* e multidão é outro tema;
captura fotogramétrica do mundo real em 3D é outro tema; segmentação e visão de propósito geral
é outro tema. Aqui o objeto é o agente corporificado e o mundo de treino dele. Pela régua da
disciplina, também fica de fora o que já é comum em produto de massa — o que exclui, por
exemplo, assistente de faixa, aspirador com SLAM e braço industrial de trajetória fixa.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**Modelo de mundo como produto aberto.** A NVIDIA lançou o Cosmos 3 em 31/05/2026, na GTC
Taipei, descrito como omnimodelo aberto que entende e gera texto, imagem, vídeo, som ambiente e
**ação**, sobre arquitetura *mixture-of-transformers* que emparelha um transformador de
raciocínio com um de geração. Pesos no Hugging Face, código no GitHub. A empresa formou a
Cosmos Coalition com Agile Robots, Black Forest Labs, Generalist, LTX, Runway e Skild AI, e
cita Doosan, LG, Samsung e Li Auto entre usuários. A plataforma original (arXiv 2501.03575,
77+ autores da NVIDIA) já era open-weight com licença permissiva e trazia pipeline de curadoria
de vídeo, modelos pré-treinados, exemplos de pós-treino e tokenizadores de vídeo. *Fato
observado.*

**Agente generalista que atravessa mundos.** O SIMA 2 (DeepMind, arXiv 2512.04797, 04/12/2025,
65+ autores) roda sobre Gemini 2.5 flash-lite e deixou de ser um mapeamento direto de pixels
para ações: forma um plano interno, raciocina em linguagem e executa. Foi treinado em treze
jogos comerciais (Valheim, Satisfactory, Goat Simulator 3, Hydroneer, No Man's Sky, Space
Engineers, Wobbly Life, Eco, ASKA, The Gunk, Steamworld Build, Road 96, Teardown) e avaliado em
ambientes inéditos — MineDojo e mundos **gerados pelo Genie 3**. Demonstra auto-melhoria: usa o
Gemini para gerar tarefas e atribuir recompensa, aprendendo habilidade nova sem demonstração
humana. *Fato observado.*

**Política de robô por linguagem.** Em 30/07/2026 a DeepMind publicou Gemini Robotics 2 (VLA
que converte visão e linguagem em controle motor, incluindo controle de corpo inteiro de
humanoide: andar, equilibrar, agachar, manipular com mão de cinco dedos), Gemini Robotics ER 2
(raciocínio incorporado, planejamento multietapa, coordenação multi-robô, disponível via Gemini
API e AI Studio) e Gemini Robotics On-Device 2 (versão leve para rodar no próprio hardware do
robô). A Physical Intelligence publicou o π0 (31/10/2024): VLM de 3 bilhões de parâmetros com
saída contínua de ação por *flow matching*, treinado em 8 embodiments distintos, com pesos e
código do π0 e do π0-FAST liberados no repositório `openpi`; a linha seguiu para π0.5 e π*0.6,
este último aprendendo por experiência própria em deployment, não só por demonstração. *Fato
observado.*

**Corpo comprado em volume.** No 1º semestre de 2026 foram embarcados cerca de **19.100
humanoides** no mundo, alta de 272% sobre os 5,1 mil do mesmo período de 2025, segundo a Smart
Analytics Global: AGIBOT 8.400 unidades (44%), Unitree 5.900 (31%), Galbot 900, UBTECH 700,
Leju 600. Mais de 70% dos embarques foram para aplicação industrial e comercial. *Fato
observado, fonte de mercado — ver ressalva em 3.3.*

**Horas de operação, não só demonstração.** A Agility Robotics declara mais de 65.000 horas
operacionais do Digit em nove instalações de clientes, com GXO, Schaeffler, Toyota Motor
Manufacturing Canada e Mercado Libre nomeados. A Figure declara piloto de onze meses do Figure
02 na planta da BMW em Spartanburg: mais de 1.250 horas, mais de 90.000 peças movimentadas,
ciclo de 84 segundos, dez horas por dia, cinco dias por semana, com o Figure 03 passando agora
a sequenciamento logístico. *Fato observado — todos são números declarados pelo próprio
fabricante.*

**Autonomia veicular como o caso mais maduro.** A Waymo declara mais de 170 milhões de milhas
autônomas e opera serviço comercial em 14 áreas metropolitanas dos EUA. É o único ponto da
área com escala de uso público real e com **regulação em funcionamento**. *Fato observado.*

### 3.2 O que existe e não funciona

**O modelo de mundo não guarda o mundo.** O trabalho de Jinpeng Lu e 10 coautores (arXiv
2606.20545, 18/06/2026) testou 9.600 vídeos de 23 modelos, em quatro paradigmas de controle, e
introduziu o WRBench — o primeiro benchmark diagnóstico que trata movimento de câmera como
intervenção sobre observabilidade. Achado central: os sistemas atuais mantêm o mundo como um
*tracking shot*; ao voltar a um alvo que saiu de quadro, retomam-no no estado em que foi
abandonado, em vez de fazer o evento avançar enquanto não era visto. E a falha **reincide em
todas as famílias de modelo, em todos os paradigmas de controle e em todos os incrementos de
escala**. Não é problema de qualidade visual nem de número de parâmetros. *Fato observado —
esta é a evidência mais desconfortável do mapa, e é contra o entusiasmo do tema.*

**O que falta não é política, é supervisão.** Karcini, Mehrban, Nguyen e colegas (Motoniq.ai,
Stanford, ETH Zurich, TU Darmstadt; arXiv 2606.06556, 04/06/2026) argumentam que reduzir
aprendizado de robô a escala de política é erro de diagnóstico: faltam motor de dado físico com
autorrotulagem incorporada, *retargeting* que preserve a tarefa entre corpos diferentes,
modelos de mundo fundados em física (que prevejam consequência de ação, não futuro visualmente
plausível) e laços de melhoria contínua em deployment. *Inferência de terceiros, argumentada e
com revisão de literatura, não medição.*

**O reality gap não fechou.** A revisão de Elie Aljalbout e 11 coautores, aceita no *Annual
Review of Control, Robotics, and Autonomous Systems* 2026 (arXiv 2510.20808), registra
resultados promissores em locomoção, navegação e manipulação por randomização de domínio,
real-to-sim, abstração de estado/ação e co-treino sim-real — e conclui que os desafios
persistem, distinguindo *visual gap* (renderizado × real) de *dynamic gap* (motor de física,
propriedade de objeto, controle). *Fato observado, em revisão por pares.*

**A falha de distribuição já custou dinheiro.** Em 18/06/2026 a Waymo recolheu quase 4.000
robotáxis — o sexto recall da empresa — após pelo menos 13 episódios de entrada em zona de obra
em rodovia (6 em Phoenix em abril, 7 em São Francisco em maio). Causa declarada pela própria
empresa: os veículos "não reconheceram e passaram por placas de fechamento de rampa", com o
software "priorizando evitar outros riscos da via e/ou falhando em reconhecer a zona de obra".
A operação em rodovia foi suspensa voluntariamente em 19/05/2026. Somam-se a investigação da
NHTSA sobre ultrapassagem de ônibus escolar parado (20 episódios relatados só pela rede de
Austin), o atropelamento de uma criança de 9 anos em zona escolar em Santa Monica em
23/01/2026, com ferimentos leves, e a determinação do administrador da NHTSA para que
desenvolvedores entregassem planos de remediação até o fim de julho de 2026 quanto a
interferência em cena de emergência. *Fato observado.*

**O gargalo é dado de ação, não modelo.** Dado sensório-motor pareado com ação não existe em
escala de internet. Teleoperação tem lei de escala cara — cada demonstração exige um robô — e
produz demonstração mais lenta, mais rígida e menos diversa, porque força o operador à
cinemática, à latência e ao ponto de vista da máquina. Para tarefa única, cena única e mesmos
objetos, o retorno de demonstrações adicionais achata na casa das centenas baixas; onde o eixo
de *diversidade* dobra, ninguém mapeou. *Inferência de analistas de mercado sobre trabalhos
técnicos — confiança média.*

### 3.3 A linha da regulação, que é onde a coisa trava

A ISO 10218 foi revisada em fevereiro de 2025, depois de cerca de oito anos de trabalho:
incorporou a ISO/TS 15066 (colaborativos), acrescentou requisitos de cibersegurança ligados à
segurança, orientações sobre carga/descarga manual e efetuadores, e novas classificações de
robô com métodos de ensaio. A versão anterior excluía por definição robôs sobre plataforma
móvel — o que deixava humanoides de fora; a nova permite incluí-los, **mas os riscos de
mobilidade do humanoide continuam fora do escopo da norma**, e aplicações fora de ambiente
industrial também. O motivo é físico: a 10218 pressupõe robô estaticamente estável, isto é, que
permanece de pé quando a energia cai; humanoide de pernas é dinamicamente estável. A norma que
trataria disso, ISO 25785-1, seguia como *working draft* em janeiro de 2026, com publicação
esperada para 2026 ou 2027. Não existe norma única de segurança de humanoide: a conformidade
hoje é uma pilha remendada de ISO, OSHA e regulação europeia. *Fato observado, com a ressalva
de que o dado sobre a 25785-1 vem de fonte secundária especializada, não da ISO.*

### 3.4 Quem está construindo

Plataforma e modelo de mundo: NVIDIA (Cosmos, Isaac Sim, IsaacLab, Newton/Warp, PhysX).
Agente e política: DeepMind (SIMA 2, Gemini Robotics 2/ER 2/On-Device 2), Physical Intelligence
(π0, π0.5, π*0.6, openpi), Skild AI, Generalist. Corpo: AGIBOT, Unitree, Figure, Agility,
UBTECH, Galbot, Leju, Tesla. Veículo: Waymo, Apollo, Zoox, Tesla. Camada aberta de simulação e
controle, que é a que a turma efetivamente varreu: MuJoCo, Genesis, habitat-sim/habitat-lab,
MetaDrive, AirSim, drake, MoveIt 2, OMPL, pinocchio, OpenVINS, Lanelet2, MAVLink, RT-Thread.

### 3.5 Nota sobre o Brasil

A densidade é o dado, e ele é duro: o Brasil registra cerca de **7 robôs para cada mil
trabalhadores**, contra cerca de mil por dez mil na Coreia do Sul — informação de Ismael Secco,
coordenador do Instituto SENAI de Sistemas de Manufatura, em janeiro de 2026. O país está,
portanto, do lado importador desta tendência: consome corpo e modelo produzidos fora, e a
discussão sobre substituição de trabalho físico chega aqui com atraso e com base de automação
muito menor. Isso tem uma consequência não óbvia e mais interessante que a lamentação: como a
base instalada de automação rígida é pequena, o Brasil tem **menos legado a desinstalar** — o
salto para agente aprendido não precisa passar pela etapa de célula robótica programada. Não
há, nas fontes que abri, evidência de que esse salto esteja ocorrendo. *Fato observado quanto à
densidade; o resto é hipótese prospectiva de baixa confiança.*

## 4. As disrupções-raiz

Critério aplicado, conforme a skill: tecnologia madura não entra; entra o que tem sinal
observável, ruptura identificável, condição ainda não resolvida e cadeia causal plausível.
Ficaram **fora** da raiz, por serem maduros: ROS/ROS 2, SLAM, planejamento de trajetória
(MoveIt 2, OMPL), dinâmica de corpo rígido (pinocchio, drake), simulação física escrita à mão
(MuJoCo, PhysX), e condução autônoma em domínio delimitado — esta última já opera em escala
comercial regulada, e melhoria de cobertura geográfica não é ruptura.

### D1 — O mundo de treino deixa de ser escrito e passa a ser gerado

**O que rompe.** Rompe a autoria do ambiente. No simulador clássico, alguém escreve a física,
modela a cena e declara as regras; o ambiente é auditável porque é código. No modelo de mundo,
o ambiente é a saída de uma rede treinada em vídeo: ninguém escreveu aquela cena, e não há
linha de código a inspecionar quando ela está errada. O que era engenharia de software vira
condicionamento de modelo.

**Por que agora e não há cinco anos.** Três condições se juntaram. Primeira: modelos de vídeo
com controlabilidade suficiente para aceitar ação como entrada e devolver estado — é
exatamente o que o Cosmos 3 declara ao unir raciocínio, geração de mundo e previsão de ação num
só sistema. Segunda: **pesos abertos** — Cosmos é open-weight com licença permissiva, o que
tira a capacidade das mãos de um único laboratório. Terceira: prova de que agente treinado em
mundo gerado transfere — o SIMA 2 foi avaliado em mundos do Genie 3, não só em jogos escritos.
Em 2021 nenhuma das três existia.

**O que ainda falta acontecer.** Falta o modelo de mundo manter estado persistente. O WRBench
mostra que não mantém, e que escalar não resolveu. Enquanto o mundo "esquece" o que sai de
quadro, treinar tarefa longa nele é treinar numa física que não existe. Falta também um método
aceito de auditoria: os benchmarks de consistência física são de 2026, são muitos e não
convergem.

### D2 — A instrução em linguagem natural vira a interface de comando de qualquer corpo

**O que rompe.** Rompe a fronteira entre programar e pedir, e com ela a divisão entre software
com corpo e software sem corpo. Se o mesmo tipo de agente segue instrução num jogo, num
simulador e numa planta, **o jogo, o simulador e a fábrica passam a ser o mesmo tipo de lugar
para a IA** — diferem em consequência, não em natureza. Rompe também quem projeta o
comportamento: deixa de ser quem escreve a rotina e passa a ser quem escreve o currículo de
treino e as instruções.

**Por que agora e não há cinco anos.** Porque a política deixou de mapear pixel em ação e passou
a planejar em linguagem antes de agir — é a diferença declarada entre SIMA 1 e SIMA 2 — e
porque isso chegou ao corpo real: o Gemini Robotics 2 controla humanoide inteiro por VLA, e o
π0 já demonstrou uma política única sobre 8 embodiments diferentes. Há cinco anos, política de
robô era treinada por tarefa e por corpo.

**O que ainda falta acontecer.** Falta dado. O gargalo migrou do modelo para o dado de ação
sincronizado, que não existe em escala de internet e cuja coleta por teleoperação escala mal e
enviesa. Falta também memória: a própria DeepMind declara que o SIMA 2 tropeça em tarefa longa
de muitas etapas, tem janela de contexto limitada por exigência de latência, memória curta das
próprias interações e dificuldade com ação precisa de baixo nível. Instrução em linguagem
resolve o "o quê"; não resolveu o "como", milímetro a milímetro.

### D3 — A responsabilidade desloca-se do dispositivo para o mundo em que ele aprendeu

**O que rompe.** Rompe a cadeia de prestação de contas da engenharia de segurança, que foi
construída para defeito de peça e falha de função. Quando a causa da falha é **distribucional**
— a situação não estava no treino, ou estava mal representada —, não há peça defeituosa a
trocar nem função a corrigir: há um currículo a refazer. E rompe a definição de produto
acabado, porque uma máquina que continua aprendendo em deployment (π*0.6) não tem versão final.

**Por que agora e não há cinco anos.** Porque a falha já aconteceu em escala regulada e com
causa declarada pela própria empresa: a Waymo recolheu quase 4.000 veículos em junho de 2026 e
descreveu o erro como não reconhecimento de placa e priorização errada de risco — isto é, um
erro de percepção e de política, não de freio. Um recall de software com corpo, contado como
recall de veículo. Há cinco anos não havia frota autônoma comercial grande o bastante para que
o instrumento regulatório fosse acionado dessa forma.

**O que ainda falta acontecer.** Falta a norma. A ISO 10218:2025 admite humanoide mas deixa de
fora justamente o risco de mobilidade dele; a ISO 25785-1, que trataria de robô dinamicamente
estável, ainda era rascunho em janeiro de 2026. E falta jurisprudência: responsabilidade em
acidente com veículo autônomo permanece zona cinzenta. Enquanto isso, a resposta prática do
mercado é cercar o robô — o que segura a adoção e, de quebra, atrasa a coleta de dado.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O mundo de treino deixa de ser escrito e passa a ser gerado por um modelo de mundo
    efeitos:
      - id: e1
        ordem: 1
        efeito: Construir ambiente de treino deixa de ser escrever física e vira condicionar um modelo por texto, imagem e vídeo
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Estúdio de jogo e laboratório de robótica passam a comprar a mesma infraestrutura de mundo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Formação em design de mundo e formação em robótica convergem em disciplinas comuns
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Acervo de vídeo do mundo físico vira ativo de treino e entra em disputa por licenciamento
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Direito de imagem de espaços e de corpos filmados entra na pauta regulatória da IA física
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A qualidade de um mundo passa a ser medida por consistência física e persistência de estado, não por realismo visual
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Forma-se um mercado de auditoria e benchmark de mundos sintéticos
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Certificação de ambiente sintético vira pré-requisito de compra pública de sistema autônomo
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Equipes de teste de jogo migram para validação de mundos de treino
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Testar mundo se formaliza como ocupação com trilha própria de qualificação
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A instrução em linguagem natural vira a interface de comando de qualquer corpo
    efeitos:
      - id: e3
        ordem: 1
        efeito: Comandar máquina com corpo passa a ser dizer o objetivo em vez de programar a rotina
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O projeto de interação passa a tratar o corpo do agente como elemento de interface, e não como embalagem
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Ambientes públicos passam a ser desenhados para leitura simultânea por pessoas e por agentes
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Empresas param de programar tarefa e passam a escrever currículo de treino e critério de aceitação
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A gestão do trabalho físico se reorganiza em torno de quem escreve o currículo, não de quem opera a máquina
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Habilidade aprendida num mundo passa a ser reaproveitada em outro sem reprogramação
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O jogo comercial vira fonte legítima e disputada de dado de treino para máquina física
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Termos de uso de mundos digitais passam a regular agentes automáticos como classe própria de participante
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O custo marginal de dar corpo a um software cai e aparece hardware genérico barato para tarefas variadas
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Trabalho físico de baixa variabilidade deixa de ser a fronteira de custo das operações
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O gargalo do campo desloca-se do modelo para o dado de ação sincronizado com percepção
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Teleoperação vira indústria de coleta de dado, com trabalho humano remunerado para ensinar máquina a se mover
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Forma-se uma camada de trabalho invisível de treinamento físico, com as mesmas disputas que a moderação de conteúdo teve
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Bases de demonstração viram ativo negociado e se concentram em poucos detentores
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A concentração de dado físico vira questão de política industrial em países importadores de automação, inclusive o Brasil
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A responsabilidade pela falha desloca-se do dispositivo para o mundo em que ele aprendeu
    efeitos:
      - id: e6
        ordem: 1
        efeito: A investigação de acidente passa a examinar o ambiente e o currículo de treino, e não apenas o dispositivo
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O recall de software em máquina com corpo se firma como instrumento regulatório rotineiro
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A noção de produto acabado se dissolve para máquinas que continuam aprendendo depois de vendidas
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Seguradoras passam a exigir registro auditável do que foi simulado antes da operação
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Rastreabilidade do treino vira cláusula contratual padrão em operação com autonomia física
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A norma técnica de segurança fica atrás da máquina real porque foi escrita para corpo estaticamente estável
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Implantação de humanoide permanece presa a ambiente cercado enquanto a norma de estabilidade dinâmica não fecha
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O espaço construído se divide entre zonas legíveis por agente e zonas onde o agente é proibido
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Quem certifica segurança passa a precisar de competência em aprendizado de máquina, além de mecânica
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A engenharia de segurança absorve estatística de distribuição como saber obrigatório de formação
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda separa três disrupções que na prática se alimentam.** O efeito `e5` (o gargalo é dado)
é o que mais empurra `e1` (gerar mundo em vez de escrevê-lo): gera-se mundo *porque* falta
dado real, não por elegância técnica. E `e7.1` (humanoide preso em ambiente cercado) realimenta
`e5` negativamente: robô cercado coleta menos dado de mundo aberto, o que atrasa a
generalização que justificaria descercá-lo. Esse laço de realimentação é o mecanismo mais
importante do mapa e é justamente o que uma árvore não representa.

**Uma cadeia foi interrompida por falta de evidência.** Tentei derivar, de `e4.2` (corpo
barato), um efeito de segunda ordem sobre deslocamento de emprego com número — quanto trabalho,
em que setor, em que prazo. Não há base: os números de implantação disponíveis são declarados
pelo próprio fabricante, referem-se a horas de operação e a peças movimentadas, e nenhuma fonte
que abri mede posto de trabalho substituído. O efeito ficou em `e4.2.1`, redigido como mudança
de fronteira de custo, e não como substituição de emprego. É deliberado.

**Os prazos são ordenações, não datas.** `prazo: 2029` significa "depois do que está em 2028 e
antes do que está em 2030 nesta mesma cadeia". Tratar como data é erro de leitura.

**Confiança baixa em toda a terceira ordem é a resposta esperada, não uma falha.** Dos 14
efeitos de terceira ordem, 14 estão em `confianca: baixa`. Isso é o método funcionando: se
algum estivesse em "alta", seria sinal de que eu confundi consequência sistêmica com
extrapolação confortável.

## 6. Sinais fracos e wildcards

### Sinais fracos

**O corpo entrando no raciocínio, não só na execução.** O ROSClaw, tal como a turma o
descreveu, conecta o raciocínio do modelo a capacidades reais de robô mantendo consciência do
corpo físico do agente — isto é, a restrição física deixa de ser filtro a jusante do plano e
vira parte do modelo de execução. Se isso se generalizar, a separação entre "planejar" e
"poder" desaparece, e o design de interação ganha um objeto novo: a negociação entre o que foi
pedido e o que aquele corpo específico consegue. Não abri fonte primária sobre o ROSClaw nesta
rodada; registro como sinal fraco declaradamente não verificado.

**Auto-melhoria sem demonstração humana.** O SIMA 2 gera as próprias tarefas e as próprias
recompensas via Gemini e aprende habilidade nova do zero num ambiente novo. Está em ambiente
virtual, é limitado e é um único sistema. Mas é o mecanismo que, se atravessar para o corpo
real, dissolve `e5` inteiro — o gargalo de dado deixa de existir. É o sinal fraco de maior
alavancagem do mapa, e o mais fácil de superinterpretar.

**Avaliação virando o produto.** Em poucos meses de 2026 apareceram WRBench, WorldModelBench,
Physics-IQ, PhyGround, CRONOS, VideoPhy-2, PhyGenBench, WBench. Quando a medição prolifera
antes da consolidação, é sinal de que ninguém confia nas alegações de capacidade — inclusive
quem as faz. Historicamente, o campo que constrói régua antes de construir consenso demora mais
do que o discurso sugere.

**O enxame como forma, e não como número.** O wildcard que a turma trouxe sem querer —
telemetria avançada de enxame de drones para resgate em incêndio — aponta para uma
corporificação que não é humanoide e não é veículo: muitos corpos baratos, descartáveis e
coordenados, em ambiente onde nenhum humano deveria estar. É o caso em que a régua de segurança
não trava, porque o dano do erro recai sobre a máquina. Pode ser a primeira corporificação a
escapar do cercado — e o debate público está olhando para o outro lado.

### Wildcard

**Um acidente grave cuja causa-raiz seja localizada no simulador, e não no robô.** Baixa
probabilidade até 2031, alto impacto. O cenário: uma investigação oficial conclui que um
ambiente de treino — gerado por modelo, e portanto sem código a auditar — representava mal uma
classe de situação, e que o fabricante do robô não tinha como saber. O precedente técnico já
existe em forma branda: o recall da Waymo de junho de 2026 tem causa declarada de percepção e
priorização, não de mecânica; ninguém, porém, foi responsabilizado pelo ambiente de treino. O
impacto seria imediato sobre `e6.2` e `e2.1`: exigência de auditoria de mundo sintético como
condição de operação, e possivelmente a exigência de que o ambiente de treino seja
inspecionável — o que, num modelo de mundo gerativo, é uma exigência hoje tecnicamente
irrealizável.

**Não é previsão.** É o evento que, se ocorrer, reorganiza o mapa; e é o único item deste
documento cuja função é justamente não acontecer.

## 7. Contra o próprio mapa

### Qual efeito é só extrapolação linear do presente

`e4.2` — "o custo marginal de dar corpo a um software cai e aparece hardware genérico barato".
É a curva de embarques de humanoide (272% ao ano) projetada para frente, e curva de crescimento
percentual sobre base minúscula não é evidência de nada: 19,1 mil unidades no mundo, num
semestre, é ruído estatístico ao lado de qualquer categoria de equipamento industrial.
Rebaixei a confiança para `baixa` por isso. O mesmo vale, em menor grau, para `e4`: transferir
habilidade entre corpos é declarado pelo π0 sobre 8 embodiments que a própria Physical
Intelligence escolheu — não é transferência para um corpo arbitrário.

### Qual efeito assume velocidade de adoção sem caso comparável

`e3.1.1` — "ambientes públicos passam a ser desenhados para leitura simultânea por pessoas e
por agentes", em 2033. Não há caso comparável de reprojeto de espaço construído nessa
velocidade. A adaptação de calçadas a cadeira de rodas, com lei, orçamento e movimento social
organizado, levou décadas e segue incompleta. Sete anos para adaptar ambiente a um leitor não
humano, sem lei e sem pressão de público, é otimismo. Mantive o efeito porque a versão fraca
dele já ocorre — sinalização de zona de obra sendo repensada depois do recall da Waymo é
literalmente isto —, mas com `sinal: fraco` e `confianca: baixa`.

### Qual disrupção pode simplesmente não se concretizar

**D1, e ela é a espinha do mapa.** A evidência mais forte que abri é contra ela: o WRBench
mostra que os modelos de mundo atuais não sustentam estado persistente, que a falha atravessa
23 modelos e quatro paradigmas de controle, e que **escalar não resolveu**. Se essa limitação
for estrutural à abordagem gerativa por vídeo — e não uma etapa —, então o modelo de mundo fica
como gerador de dado sintético e de variação visual, útil, e a simulação escrita à mão continua
sendo onde a política é de fato treinada. Nesse caso `e1`, `e2` e toda a cadeia abaixo deles
caem, e o mapa encolhe a D2 e D3, que sobrevivem sozinhas — a interface em linguagem natural e
o deslocamento da responsabilidade não dependem de o mundo ser gerado. É o meu cenário
alternativo mais provável, e diria que a chance de D1 não se concretizar até 2031 é
substancial, na faixa de um terço.

### Que viés entrou aqui

Três, e são identificáveis.

**Viés de fonte de fornecedor.** As capacidades mais impressionantes deste documento — Cosmos 3
"liderando oito benchmarks", Gemini Robotics "mais que dobrando a generalização", os números de
horas da Figure e da Agility — vêm de material publicado por quem vende o produto, sem revisão
independente. A página do Gemini Robotics que abri **não traz uma única métrica numérica, data
de versão ou limitação declarada**. Tratei isso como alegação, não como fato de eficácia, mas o
tom entusiasmado do campo vaza para dentro do texto, e provavelmente vazou.

**Viés de escolha de tema.** A zona de interesse declarada é "Simulação e mundos", o que
predispõe a ver o simulador como protagonista. Um mapa escrito por alguém da zona de trabalho e
organização provavelmente teria posto `e5.1.1` (a camada de trabalho invisível de treinamento
físico) na primeira ordem, e o modelo de mundo como detalhe técnico. Essa seria uma leitura
igualmente defensável da mesma evidência.

**Viés do agente que escreveu.** Fui instruído a partir de uma descrição de tema que já
afirmava qual é a disrupção-raiz ("a IA sai da tela e ganha corpo... e a técnica que permite
isso é o simulador"). Isso é ancoragem. Tentei compensar procurando deliberadamente evidência
contrária — foi assim que cheguei ao WRBench e ao paper do reality gap —, mas a estrutura de
D1 ainda reproduz a formulação de quem me deu a tarefa.

### Uma contestação que o mapa perdeu e eu registro

Argumentei comigo mesmo que a disrupção real seria "o humanoide", não "o mundo de treino".
Rejeitei: forma de corpo não é ruptura, é escolha de embodiment — o humanoide existe desde os
anos 1980 e o que mudou foi a política que o controla. Mas a contestação tem um ponto que
sobrevive: se o humanoide se firmar como padrão de fato, ele carrega uma ruptura própria, que é
**a máquina que ocupa o espaço desenhado para gente sem exigir que o espaço mude**, e isso
inverte `e3.1.1` inteiro. Não registrei como quarta disrupção-raiz por falta de evidência de
padronização; registro aqui como alternativa viva.

## 8. O que a máquina errou

**1. Inventou uma capacidade a partir do nome do produto.** Ao ler "Gemini Robotics — mais que
dobra o desempenho num benchmark abrangente de generalização", eu tinha escrito, numa primeira
versão, que o modelo "dobra a taxa de sucesso em tarefas inéditas". Ao abrir a página oficial,
ela **não traz nenhum número, nenhuma data de versão, nenhum benchmark e nenhuma limitação
declarada** — só a frase promocional de que o modelo "consegue completar tarefas variadas,
mesmo sem ter sido treinado nelas". O sinal de alarme foi a estrutura da frase: "mais que
dobra" sem dizer dobra de quê e a partir de qual linha de base é formulação de marketing, não
de resultado. Corrigido: a alegação está no texto como alegação do fabricante.

**2. Datou o π0 com confiança em ano errado.** Na primeira passagem eu tratei o π0 como
lançamento de 2025, arrastado pelo fato de π0.5 e π*0.6 serem de 2026. A página da própria
Physical Intelligence diz 31/10/2024. Erro típico de modelo de linguagem: interpolar data a
partir de vizinhança temática em vez de verificar. A pista foi a inconsistência interna — se
π*0.6 é de 2026 e há duas versões intermediárias, a primeira dificilmente seria do ano
anterior.

**3. Quase converteu "existe" em "funciona".** Escrevi, numa versão descartada, que "o modelo
de mundo já substitui o simulador escrito à mão no treino de robôs". Nenhuma fonte sustenta
isso. O que as fontes sustentam é que existe um modelo de mundo aberto que declara gerar ação
(Cosmos 3), e que existe um agente avaliado em mundos gerados (SIMA 2, em ambiente virtual, em
jogo). O WRBench diz o contrário quanto a persistência. O erro tem nome — tomar disponibilidade
de ferramenta por evidência de eficácia — e é exatamente o que a skill manda separar.

**4. Somou números de fontes incompatíveis.** Tentei compor "quantos humanoides existem
operando" juntando 19,1 mil embarques do 1S 2026 com as 65 mil horas do Digit e as 1.250 horas
do Figure 02. São grandezas diferentes (unidade embarcada, hora de operação acumulada, hora de
piloto), de fontes diferentes, com definições que não batem — e nenhuma delas diz quantos
robôs estão de fato trabalhando agora. Desisti da soma e mantive os três números separados, com
a autoria de cada um.

**5. Mencionou um projeto sem abrir.** Cheguei a escrever um trecho sobre o ROSClaw como se
tivesse verificado a arquitetura dele. Não abri fonte primária. Está marcado no texto como
sinal fraco não verificado, na seção 6 — e essa é a forma honesta de manter o item.

**6. Um erro que provavelmente permanece.** A informação de que a ISO 25785-1 seguia como
*working draft* em janeiro de 2026 vem de fonte secundária especializada, não da ISO. Não
consegui confirmar no site da ISO dentro desta rodada. Se estiver errada, o efeito `e7` perde
prazo, mas não perde direção — a 10218:2025 excluir o risco de mobilidade do humanoide está
confirmado em duas fontes independentes.

## 9. Três cenários para 2031

**Provável.** Em 2031, o modelo de mundo venceu como *fábrica de dado* e perdeu como *mundo*. A
maior parte do treino sério ainda acontece em simulador escrito à mão — Isaac Sim, MuJoCo,
MetaDrive e sucessores —, agora alimentado por variação sintética gerada por modelos derivados
do Cosmos: textura, iluminação, arranjo de cena, casos raros. Persistência de estado continua
sendo o calcanhar, e o campo aprendeu a conviver com isso restringindo o horizonte de tarefa. A
interface em linguagem natural venceu por inteiro: praticamente nenhum integrador programa
trajetória à mão, e a função que cresceu não foi "programador de robô" e sim quem escreve
currículo, critério de aceitação e caso de teste — gente que, em 2026, trabalhava com design de
experiência e com QA de jogo. Humanoide é presença normal em armazém e planta, ainda quase
sempre em área delimitada, porque a norma de estabilidade dinâmica saiu tarde e é conservadora.
Houve pelo menos dois recalls de grande porte em robôs de serviço, no molde do que a Waymo já
fazia em 2026, e "recall de comportamento" virou expressão corrente. O Brasil continua
importando corpo e modelo; a densidade subiu de 7 para algo entre 12 e 18 robôs por mil
trabalhadores, quase toda em automação convencional, e o país discute soberania de dado físico
sem ter dado físico próprio.

**Desejável.** O mesmo quadro técnico, com três coisas que não vieram de graça. Primeira:
**auditoria de mundo de treino** virou prática estabelecida — quem opera sistema autônomo em
espaço compartilhado mantém registro do que foi simulado, com que cobertura, e com que
resultado, e esse registro é inspecionável por terceiro. Isso exigiu que os benchmarks de 2026
convergissem em dois ou três padrões, em vez dos oito concorrentes, e que alguém aceitasse
publicar o que o próprio mundo não cobre. Segunda: **o trabalho de ensinar máquina foi
reconhecido como trabalho** — teleoperação e demonstração viraram ocupação com contrato,
qualificação e remuneração declarada, e não a repetição silenciosa do que aconteceu com
moderação de conteúdo e rotulagem de dado. Terceira, e é a que interessa a quem projeta mídia e
interação: o desenho de ambiente legível por agente foi tratado como **questão de acessibilidade
e não de eficiência** — o mesmo esforço que torna a placa legível para a máquina tornou-a mais
legível para gente com baixa visão, e isso foi escolha deliberada, não coincidência. Para
chegar aqui teria sido preciso, já em 2027, que a discussão de norma incluísse quem projeta
espaço e interface, e não só quem fabrica robô.

**Indesejável.** O modelo de mundo venceu como retórica antes de vencer como técnica. Sistemas
foram implantados apoiados em validação feita dentro de ambientes gerados pelos mesmos modelos
que os treinaram — validação circular, com número bonito e cobertura desconhecida. A falha
apareceu como sempre aparece: não em catástrofe única, mas em série de episódios pequenos em
situações que ninguém pensou em simular, cada um explicado como caso isolado. A prestação de
contas dissolveu-se entre quem gerou o mundo, quem treinou a política, quem integrou e quem
operou, e nenhum deles tinha o objeto inspecionável. A resposta regulatória veio tarde, foi por
proibição ampla, e empurrou a operação para onde não há regra — o que, para um país com 7 robôs
por mil trabalhadores e fiscalização escassa, significa empurrar para cá. **O sinal precoce é
específico e dá para vigiar agora:** quando um fornecedor publicar métrica de segurança de um
sistema físico medida exclusivamente em ambiente sintético, sem teste independente em ambiente
real, e ninguém no mercado exigir a diferença. Isso já está a um passo — os oito benchmarks de
2026 medem consistência física do vídeo gerado, não desempenho do robô no mundo.

## 10. O experimento

**O que é.** Um **banco de provas de divergência mundo-modelo**. Um agente simples, comandado
por instrução em linguagem natural, recebe exatamente a mesma tarefa em dois ambientes: (a) um
mundo escrito à mão, com física declarada — MetaDrive para direção, ou uma cena do
habitat-sim/MuJoCo para navegação e manipulação; (b) um mundo gerado por modelo, a partir do
mesmo enunciado, usando um modelo de mundo aberto da família Cosmos. O produto é um **placar de
divergência**: mesma instrução, mesma tarefa, o que o agente faz diferente em cada mundo, e —
o ponto — **o que o mundo gerado deixa de manter**. O teste decisivo é o do WRBench,
simplificado: mandar o agente olhar para o outro lado e voltar. No mundo escrito, o objeto que
saiu de quadro continuou caindo. No mundo gerado, ele provavelmente está onde foi deixado.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta de primeira ordem do tema:
*se o robô aprende num mundo simulado, o que acontece quando o mundo real diverge?* O
experimento não alcança o mundo real, e é honesto dizer isso; alcança a divergência entre dois
mundos, que é o mesmo problema com uma ordem de grandeza a menos de custo e risco. E responde,
em escala de sala de aula, à pergunta que decide a disrupção D1 inteira: **o mundo gerado
sustenta estado, ou é um plano de fundo convincente?**

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa modelo de
mundo gerativo com pesos abertos (Cosmos) e agente comandado por linguagem. Com tecnologia
madura, o experimento não existe: um simulador escrito à mão mantém estado por construção —
o objeto continua caindo porque alguém escreveu a gravidade. A divergência que o experimento
mede só é possível porque um dos dois mundos não foi escrito por ninguém. É precisamente o que
separa este tema de "simulação", que é assunto resolvido há vinte anos.

**O que a turma vai fazer quando testar isso em sala.** Cada pessoa escreve **uma instrução e
uma armadilha**. A instrução é a tarefa em linguagem natural ("recolha a caixa vermelha e
coloque na prateleira de baixo"). A armadilha é a situação que ela aposta que o mundo gerado
não vai sustentar — algo que continua acontecendo fora de quadro, um objeto que deveria ter
inércia, uma consequência que deveria persistir. Roda-se nos dois mundos, ao vivo, e monta-se o
placar coletivo: quantas armadilhas pegaram, quais pegaram nos dois mundos, e — a coluna mais
interessante — **quais armadilhas ninguém pensou em escrever**. Essa última coluna é uma
demonstração direta de por que validar sistema autônomo dentro do mundo que o treinou é
circular: a cobertura do teste é limitada pela imaginação de quem escreve o teste, e o mundo
gerado não avisa o que não representa.

**O que seria um resultado que me faria mudar de ideia.** Se o mundo gerado sustentar estado e
consequência nas armadilhas da turma tão bem quanto o simulador escrito — inclusive na prova de
olhar para o outro lado e voltar —, então a limitação do WRBench é mais estreita do que este
mapa assume, D1 acelera, e `e1`/`e2` merecem prazo mais curto e confiança mais alta. Se, no
outro extremo, o agente falhar igualmente nos dois mundos por razão que não tem nada a ver com
o mundo — instrução ambígua, ação de baixo nível imprecisa, memória curta —, então o gargalo
não está no mundo e sim no agente, e a disrupção que importa é D2, não D1. Nesse caso o mapa
precisa ser reescrito com a interface, e não a simulação, na raiz. Declaro desde já: considero
este segundo desfecho mais provável que o primeiro, e é por isso que o experimento vale a pena.

## 11. Fontes

Quinze fontes, todas abertas e lidas nesta rodada, em 18/09/2026. Fonte não aberta não entra —
e há, na seção 12, a lista das que foram vistas em resultado de busca e **não** foram usadas
por isso.

1. **NVIDIA Newsroom — "NVIDIA Launches Cosmos 3, the Open Frontier Foundation Model for
   Physical AI"** · `https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai`
   Sustenta: data (31/05/2026, GTC Taipei), arquitetura mixture-of-transformers, abertura dos
   pesos no Hugging Face, composição da Cosmos Coalition, versões Super/Nano/Edge.
   Confiabilidade: alta para fato de lançamento e de licenciamento; **baixa para desempenho** —
   é release do fabricante, com linguagem promocional explícita ("big bang da IA física"),
   e as lideranças de benchmark citadas não têm verificação independente aqui.

2. **arXiv 2501.03575 — "Cosmos World Foundation Model Platform for Physical AI"** (NVIDIA,
   77+ autores) · `https://arxiv.org/abs/2501.03575`
   Sustenta: o desenho da plataforma (curadoria de vídeo, modelos pré-treinados, exemplos de
   pós-treino, tokenizadores de vídeo) e a liberação open-weight com licença permissiva.
   Confiabilidade: média-alta — preprint técnico de autoria corporativa, não revisado por
   pares; o abstract não informa tamanho de dataset.

3. **Google DeepMind — página dos modelos Gemini Robotics** ·
   `https://deepmind.google/models/gemini-robotics/`
   Sustenta: a existência de Gemini Robotics 2 (VLA de corpo inteiro), ER 2 (raciocínio
   incorporado, planejamento e coordenação multi-robô) e On-Device 2 (execução local).
   Confiabilidade: **baixa como evidência de capacidade** — a página não traz benchmark, número,
   data de versão nem limitação declarada. Usada estritamente como prova de existência e de
   posicionamento declarado. Este é o caso mais claro de alegação de fornecedor no documento.

4. **arXiv 2510.20808 — Aljalbout et al., "The Reality Gap in Robotics: Challenges, Solutions,
   and Best Practices"**, aceito no *Annual Review of Control, Robotics, and Autonomous
   Systems* 2026 · `https://arxiv.org/abs/2510.20808`
   Sustenta: que o reality gap persiste; a distinção entre visual gap e dynamic gap; o
   inventário de técnicas (randomização de domínio, real-to-sim, abstração, co-treino).
   Confiabilidade: alta — revisão aceita em periódico de revisão da área, 12 autores.

5. **arXiv 2512.04797 — "SIMA 2: A Generalist Embodied Agent for Virtual Worlds"** (DeepMind,
   65+ autores, 04/12/2025) · `https://arxiv.org/abs/2512.04797`
   Sustenta: o salto de mapeamento pixel-ação para planejamento em linguagem; generalização a
   ambientes inéditos; auto-melhoria com tarefas e recompensas geradas pelo próprio Gemini.
   Confiabilidade: média-alta para o método; média para desempenho — o abstract afirma "fecha a
   distância para o humano" **sem número**, e o preprint é do próprio laboratório.

6. **Google DeepMind — blog do SIMA 2** ·
   `https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/`
   Sustenta: a lista dos treze jogos de treino; avaliação em MineDojo e em mundos gerados pelo
   Genie 3; e — o que mais importa aqui — **as limitações declaradas pela própria DeepMind**:
   tarefa longa de muitas etapas, janela de contexto limitada por latência, ação precisa de
   baixo nível, memória curta. Confiabilidade: média-alta; fonte do fabricante, mas a parte
   usada é autocrítica, o que reduz o risco de inflação.

7. **Humanoids Daily — "Global Humanoid Shipments Surge 272% in 1H 2026 as AGIBOT Overtakes
   Unitree"** (11/08/2026) ·
   `https://www.humanoidsdaily.com/news/global-humanoid-shipments-surge-272-in-1h-2026-as-agibot-overtakes-unitree`
   Sustenta: 19,1 mil unidades no 1S 2026; AGIBOT 8.400 (44%), Unitree 5.900 (31%), Galbot 900,
   UBTECH 700, Leju 600; mais de 70% para aplicação industrial e comercial; ressalva de que
   parte relevante do volume da Unitree é pesquisa, educação e performance.
   Confiabilidade: média — jornalismo especializado reproduzindo relatório pago da Smart
   Analytics Global, cuja metodologia não foi possível inspecionar. Usei os números com a
   autoria explícita.

8. **humanoid.guide — "Humanoid deployments in 2026 favor Figure and Agility"** ·
   `https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/`
   Sustenta: Figure 02 na BMW Spartanburg (piloto de 11 meses, +1.250 horas, +90.000 peças,
   ciclo de 84 s, >99% de precisão de posicionamento por turno); Digit com +65.000 horas em
   nove instalações, clientes nomeados (GXO, Schaeffler, Toyota Canadá, Mercado Libre); e a
   distinção explícita entre piloto e produção. Confiabilidade: média — publicação
   especializada compilando números **declarados pelos fabricantes**; nenhum deles é auditado.

9. **The Robot Report — "ISO 10218 industrial robot safety standard receives major overhaul"** ·
   `https://www.therobotreport.com/iso-10218-industrial-robot-safety-standard-receives-major-overhaul/`
   Sustenta: publicação em fevereiro de 2025 após ~8 anos; incorporação da ISO/TS 15066;
   cibersegurança ligada à segurança; e o ponto decisivo — humanoides passam a poder ser
   cobertos, **mas os riscos de mobilidade deles ficam fora da norma**, assim como aplicações
   não industriais (comentário técnico atribuído a Akshay Chalana).
   Confiabilidade: alta para o conteúdo da revisão; jornalismo técnico setorial com fonte
   nomeada. Não menciona a ISO 25785-1.

10. **arXiv 2606.20545 — Lu et al., "Current World Models Lack a Persistent State Core"**
    (18/06/2026) · `https://arxiv.org/abs/2606.20545`
    Sustenta: 9.600 vídeos, 23 modelos, quatro paradigmas de controle; o benchmark WRBench; e o
    achado de que o alvo que sai de quadro é retomado no estado em que foi abandonado, falha que
    reincide entre famílias de modelo e **não cede com escala**.
    Confiabilidade: média-alta — preprint recente, não revisado por pares, mas com desenho
    experimental explícito e amostra grande. É a evidência central contra a minha própria D1, e
    por isso foi mantida com destaque.

11. **arXiv 2606.06556 — Karcini, Mehrban, Nguyen et al. (Motoniq.ai, Stanford, ETH Zurich, TU
    Darmstadt), "Robots Need More Than VLAs & World Models"** (04/06/2026) ·
    `https://arxiv.org/html/2606.06556v1`
    Sustenta: a tese de que o gargalo é converter experiência física heterogênea em supervisão
    utilizável; os quatro componentes ausentes (motor de dado com autorrotulagem, retargeting
    que preserva tarefa, modelo de mundo fundado em física, laço de melhoria em deployment).
    Confiabilidade: média — é argumento com revisão de literatura, não medição; preprint, com
    coautoria de empresa interessada no diagnóstico.

12. **TechCrunch — "Waymo recalls nearly 4,000 robotaxis to stop them driving into highway
    construction zones"** (18/06/2026) ·
    `https://techcrunch.com/2026/06/18/waymo-recalls-nearly-4000-robotaxis-to-stop-them-driving-into-highway-construction-zones/`
    Sustenta: ~4.000 veículos, sexto recall da empresa; 13 episódios (6 em Phoenix em abril, 7
    em São Francisco em maio); causa declarada pela Waymo — não reconhecimento de placa de
    fechamento de rampa e priorização de outros riscos; suspensão voluntária de rodovia em
    19/05/2026. Confiabilidade: alta — jornalismo especializado sobre documento entregue à
    NHTSA, com citação direta da empresa.

13. **Physical Intelligence — "π0: Our First Generalist Policy"** (31/10/2024) ·
    `https://www.pi.website/blog/pi0`
    Sustenta: VLM de 3 bilhões de parâmetros com ação contínua por flow matching; π0-small de
    470 milhões; **8 embodiments** nomeados; uso do Open X-Embodiment mais dados proprietários.
    Confiabilidade: média-alta para arquitetura e escopo de treino; é publicação do laboratório,
    e o número total de horas de dado não é informado.

14. **Canaltech — "Indústria 4.0: Brasil tem apenas 7 robôs para cada 1 mil trabalhadores"**
    (02/01/2026) · `https://canaltech.com.br/mercado/industria-40-brasil-tem-apenas-7-robos-para-cada-1-mil-trabalhadores/`
    Sustenta: a densidade brasileira (~7 robôs por mil trabalhadores) e a comparação com a
    Coreia do Sul (~1.000 por 10 mil), atribuídas a Ismael Secco, do Instituto SENAI de Sistemas
    de Manufatura. Confiabilidade: média — jornalismo geral de tecnologia, citando fonte
    institucional nomeada em entrevista, não relatório publicado. Usada só para a nota sobre o
    Brasil, com a atribuição explícita.

15. **arXiv 2109.12674 — "MetaDrive: Composing Diverse Driving Scenarios for Generalizable
    Reinforcement Learning"** · `https://arxiv.org/abs/2109.12674`
    Sustenta: o que é o simulador escolhido em primeiro lugar pela turma — geração procedural
    de cenários mais importação de dado real — e o achado de que aumentar diversidade e tamanho
    do conjunto de treino melhora a generalização do agente. Confiabilidade: alta — trabalho
    acadêmico consolidado e amplamente usado como benchmark.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista com resposta antes de pesquisar. Nesta rodada **não havia interlocutor
humano disponível** — a execução foi automatizada e os parâmetros vieram fixados na abertura da
tarefa. Registro isso como desvio declarado do procedimento da skill: não houve rodada de
perguntas, houve recebimento de parâmetros. Os valores confirmados, usados como contrato:

| Campo | Valor |
|---|---|
| tema | Agentes corporificados, IA física e modelos de mundo (tema 9 de 19; família "Simulação e mundos") |
| recorte | O agente com corpo e o mundo em que ele aprende; a partir de uma inovação/tema, não de um setor |
| horizonte | 2031 |
| público | Quem projeta mídia e interação |
| região | Global, com nota sobre o Brasil |
| objetivo | Mapa de futuro com disrupções-raiz e três ordens de efeito, no formato da disciplina |
| exclusões | O que já é comum em produto de massa (régua da disciplina); ideias óbvias que serviriam a qualquer tema; nenhuma outra |
| viés desejado | Neutro |
| profundidade | Três ordens |
| disrupção suspeita | Nenhuma declarada — a descoberta era parte da tarefa |
| critério de mudança de ideia | Evidência de que a adoção passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada, só melhora o que existe |

**Sobre o critério de mudança de ideia, o veredito desta rodada.** Nenhuma das duas condições se
verificou, e vale registrar por quê. (a) Adoção passar da maioria inicial: não — 19,1 mil
humanoides embarcados em um semestre, majoritariamente em ambiente cercado, e um único caso de
autonomia veicular com escala pública real, em 14 áreas metropolitanas de um país, colocam a
tendência como muito anterior à maioria inicial. (b) Não romper nada: **parcialmente sim para
uma parte do tema**. O corpo em si — humanoide, braço, drone — é melhoria incremental de coisa
antiga, e por isso não virou disrupção-raiz neste mapa. A ruptura ficou onde há evidência de
mudança de relação e de papel: quem escreve o mundo (D1), como se comanda um corpo (D2), e de
quem é a culpa (D3).

### 12.2 Buscas realizadas

Nove consultas, em 18/09/2026, com WebSearch, mais quinze aberturas com WebFetch.

1. `NVIDIA Cosmos world foundation model physical AI 2026` — rendeu a fonte 1 e a fonte 2.
2. `Gemini Robotics DeepMind vision-language-action 2026` — rendeu a fonte 3.
3. `sim-to-real gap robot learning limitations 2026 arXiv survey` — rendeu a fonte 4.
4. `humanoid robot deployment numbers 2026 Figure Agility Unitree shipments` — rendeu 7 e 8.
5. `DeepMind SIMA 2 generalist agent 3D virtual worlds Gemini` — rendeu 5 e 6.
6. `ISO 10218:2025 robot safety standard humanoid regulation gap` — rendeu a fonte 9.
7. `world models criticism video generation physics inconsistency evaluation benchmark 2026` —
   rendeu a fonte 10 e o inventário de benchmarks citado em 6.
8. `robótica Brasil 2026 robôs industriais densidade adoção IA física` — rendeu a fonte 14.
9. `Physical Intelligence pi0.6 open source VLA robot foundation model 2026` — rendeu a 13.
10. `Waymo miles 2026 robotaxi NHTSA investigation liability autonomous vehicle` — rendeu 12.
11. `robot data bottleneck teleoperation demonstrations scaling law embodied AI 2026` — rendeu o
    material sobre gargalo de dado usado em 3.2, cujas fontes foram descartadas (ver 12.3).

### 12.3 Fontes vistas e descartadas, com motivo

- **`technology.org` — "Humanoid Robots in 2026: What Is Actually Deployed"** — seria a fonte
  cética ideal para contrapor os números de fabricante. Retornou **HTTP 403**. Regra da skill:
  link que não responde não entra. Não citada.
- **`theresarobotforthat.com`** (vários: guia de normas de humanoide 2026, ISO 10218 explicada,
  kit de conformidade) — foi daqui que veio a informação sobre a **ISO 25785-1 como working
  draft em janeiro de 2026** e sobre a distinção entre estabilidade estática e dinâmica. Não
  abri a página diretamente e o site vende kit de conformidade, o que é conflito de interesse
  sobre exatamente esse conteúdo. A informação foi mantida no corpo do texto **marcada como
  secundária e não confirmada**, e o erro residual está declarado na seção 8, item 6.
- **`aiproem.substack.com` — "Bodies are Cheap, Data is Not: A Mid-2026 Primer on Humanoids"** e
  **`shaip.com` / `evsint.com`** (estratégia de dado de treino, teleoperação × simulação ×
  vídeo humano) — origem das formulações sobre lei de escala cara da teleoperação, achatamento
  do retorno na casa das centenas baixas e a tese do "stack" em vez de escolha. Não abri
  nenhuma; duas são conteúdo comercial de empresa de rotulagem de dado. O conteúdo foi usado em
  3.2 **rotulado como inferência de analistas, confiança média**, e não sustenta nenhum efeito
  da roda sozinho.
- **`smartanalyticsglobal.com`** — fonte primária dos números de embarque. Relatório pago, não
  aberto. Usei a reprodução da Humanoids Daily com a autoria explicitada.
- **`en.wikipedia.org/wiki/Gemini_Robotics`** — trazia as datas de 30/07/2026 para Gemini
  Robotics 2 e ER 2. Não aberta diretamente; a página oficial da DeepMind confirma a existência
  dos modelos mas **não** as datas. As datas estão no texto e são o ponto mais frágil da
  seção 3.1.
- **Benchmarks de consistência física** (WorldModelBench, PhyGround, CRONOS, VideoPhy-2,
  PhyGenBench, WBench, LoViF/PhyScore, Physics-IQ) — apareceram em resultado de busca com
  descrições detalhadas; abri apenas o WRBench (fonte 10). Os demais são citados na seção 6
  como **evidência de proliferação de réguas**, que é uma afirmação sobre a quantidade e a data
  delas, não sobre o conteúdo de cada uma. É o uso mais fraco que sustento, e está declarado.
- **`damfirm.com`, `whalesbook.com`, `thechargeport.com`** (dados de acidente Waymo, arquivos
  NHTSA, tracker de robotáxi) — não abertas. As informações sobre a investigação de ônibus
  escolar, o atropelamento em Santa Monica em 23/01/2026 e o prazo de julho de 2026 da NHTSA
  vêm de resultado de busca com atribuição a CBS News e NPR, **não** de leitura direta. Marcadas
  aqui como de segunda mão; o recall de junho, que é o que sustenta a disrupção D3, está
  apoiado em leitura direta (fonte 12).
- **`github.com/Physical-Intelligence/openpi`, `pi.website/download/pistar06.pdf`** — não
  abertos nesta rodada. π0.5 e π*0.6 aparecem no texto como linha de evolução, com a afirmação
  verificável restrita ao π0 (fonte 13). A caracterização do π*0.6 como "aprende por
  experiência em deployment" vem de descrição em resultado de busca.
- **Fontes brasileiras de tendência** (`exame.com`, `arevista.com.br`, `atlantico.com.br`,
  `tuenkers.com.br`, `realtime1.com.br`, `tiinside.com.br`) — todas descartadas. São peças de
  tendência ou conteúdo comercial de integrador, com previsões redondas ("2026, o ano da
  virada") e sem dado primário. O número de 48% das indústrias brasileiras planejando investir
  em robô multifuncional e o pacote de R$ 186,6 bilhões da Nova Indústria Brasil apareceram em
  busca e **não entraram** por falta de fonte primária aberta. A nota sobre o Brasil ficou
  deliberadamente magra: uma densidade e uma comparação.

### 12.4 Efeitos gerados e removidos

Registro do que foi cortado, por quê, e o que isso diz sobre o mapa que sobrou.

- **"Robôs domésticos de uso geral se tornam produto de consumo até 2031"** — removido
  integralmente. Nenhuma fonte aberta sustenta preço, volume ou capacidade; e a régua da
  disciplina exclui produto de massa de qualquer forma. Era extrapolação pura.
- **"A formação em robótica desaparece, absorvida pela engenharia de prompt"** — removido. É
  efeito que soa profundo e não tem mecanismo: o conteúdo da robótica (controle, cinemática,
  segurança) não some porque a camada de comando mudou. Ficou uma versão muito mais fraca e
  defensável em `e1.1.1` (convergência de disciplinas, não desaparecimento).
- **"Modelos de mundo substituem motores de jogo na produção de entretenimento até 2031"** —
  removido do mapa e não citado no corpo. Confunde dois usos: gerar mundo para *treinar agente*
  e gerar mundo para *ser jogado por gente*. O segundo é o tema 7 e o tema 10 da disciplina,
  não este.
- **"Sindicatos negociam cláusula de humanoide em acordo coletivo até 2030"** — removido por
  falta de qualquer sinal observável. Nenhuma fonte aberta registra negociação coletiva sobre
  humanoide. Voltaria ao mapa na hora em que houvesse uma.
- **"O custo de um humanoide cai abaixo do salário anual de um operador"** — removido por ser
  exatamente o tipo de comparação que soa decisiva e é vazia: o custo relevante não é o preço do
  corpo, é o custo total de integração, dado, manutenção e conformidade, e nenhuma fonte aberta
  mede isso.
- **Quarta disrupção-raiz candidata: "o humanoide como padrão de fato"** — considerada e
  rejeitada; argumento completo e o que sobrevive dela estão na seção 7.
- **Cadeia interrompida: efeito de emprego com número** — derivada de `e4.2` e abandonada por
  falta de base. Detalhamento na prosa da seção 5.

### 12.5 Limitações desta rodada

1. **Sem interlocutor.** A entrevista obrigatória da skill não ocorreu como diálogo. Os
   parâmetros foram recebidos prontos, e não houve como testar se o recorte fazia sentido para
   quem pediu. Isto reduz a confiança do mapa como um todo e está declarado no frontmatter
   (`confianca: media`).
2. **Assimetria de evidência, e ela é sistemática.** A evidência de *capacidade* é abundante,
   aberta e recente; a evidência de *adoção produtiva* é escassa e quase toda declarada por
   fabricante; a evidência de *efeito sobre trabalho, cidade e norma* é praticamente inexistente
   — e é exatamente onde ficam a segunda e a terceira ordem. Nenhuma sofisticação de método
   corrige isso: o mapa é mais firme perto da raiz e mais especulativo longe dela, e a queda de
   confiança na terceira ordem é honesta, não decorativa.
3. **Nenhum número foi verificado de forma independente.** Todos os números deste documento
   vêm de uma única fonte cada. Onde a fonte é o fabricante, está dito.
4. **Datas de julho de 2026 não confirmadas em fonte primária.** As datas de lançamento do
   Gemini Robotics 2 e ER 2 (30/07/2026) vêm de resultado de busca; a página oficial que abri
   não as traz.
5. **Recorte temporal do agente.** O conhecimento base deste agente vai até maio de 2026;
   tudo posterior a isso neste documento veio exclusivamente de busca e leitura em 18/09/2026, e
   não de memória. Onde a busca não alcançou — julho e agosto de 2026, sobretudo — há lacuna.
6. **Uma fonte aberta que a checagem automática marca como quebrada.** A verificação por
   `curl` dos links da seção 11 devolveu HTTP 200 em quatorze dos quinze e **403 no
   `therobotreport.com`** (fonte 9). A página foi de fato aberta e lida nesta rodada; o 403 é
   bloqueio de agente automatizado, não link morto. Fica o registro para quem rodar a checagem
   do formato e vir o vermelho.
7. **Viés de língua.** Todas as fontes abertas são em inglês, exceto a brasileira. Produção
   em chinês sobre AGIBOT, Unitree, Galbot e UBTECH — que respondem por mais de 80% dos
   embarques de 2026 — ficou inteiramente fora. Para um tema cujo volume de hardware está na
   China, essa é a lacuna mais séria do levantamento, e provavelmente distorce o mapa na
   direção do laboratório norte-americano.
