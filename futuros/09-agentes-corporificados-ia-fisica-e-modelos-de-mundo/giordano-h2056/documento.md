---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-22
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 14
efeitos_ordem_2: 25
efeitos_ordem_3: 23
tecnologias_citadas: [NVIDIA Cosmos 3, NVIDIA Isaac Sim, NVIDIA GR00T N1, Genie 3, SIMA 2, Gemini Robotics, Gemini Robotics On-Device, Gemini Robotics-ER 2, Physical Intelligence pi0, Odyssey-1, Odyssey-3, LeRobot, LeRobotDataset v3, SO-100, MetaDrive, MuJoCo, Isaac Lab, AirSim, habitat-sim, Genesis, PhysX, MoveIt 2, WorldBench, Physics-IQ, RoboDojo, ISO 25785-1, Unitree G1, Figure 03, Agility Digit]
fontes: 15
confianca: media
experimento: Bancada de transferência — o mesmo cenário escrito à mão e gerado por modelo, medindo se o mundo que agrada ao humano é o que treina melhor o agente
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A IA ganhou corpo, mas o que mudou de lugar não foi o corpo: foi o **ambiente**. Entre 2025 e
2026 o mundo em que o agente aprende deixou de ser exclusivamente escrito — geometria, física,
regras — e passou a ser também **gerado** por um modelo condicionado à ação (Genie 3, Cosmos 3,
Odyssey-1), enquanto a política que controla o corpo deixou de ser programada por tarefa e
passou a ser um modelo pré-treinado que transfere entre corpos (π0, GR00T N1, Gemini Robotics).
Este mapa parte daí e de uma terceira ruptura, menos comentada e de consequência mais dura: o
insumo escasso da IA física é o **dado de contato**, cujo custo marginal não cai com escala — a
décima-milésima demonstração custa o que custou a primeira. Para quem projeta mídia e interação,
o efeito central não é o robô: é que **desenhar mundo passa a ser desenhar currículo de treino**,
medido por uma métrica que não é estética — o quanto o agente formado ali funciona fora dali. O
achado do mapa é a convergência: as mesmas casas que vendem geração de vídeo para publicidade
já estão, em 2026, na mesma coalizão das casas de robótica. Até 2056, a aposta é que a separação
institucional entre indústria criativa e indústria de automação deixe de existir no nível da
ferramenta, e que a disputa se desloque para quem certifica o mundo, quem é pago pelo gesto
capturado e quem responde quando a causa do acidente está no simulador.

## 2. O tema

O objeto aqui é **o agente com corpo e o mundo em que ele aprende** — não a simulação de
sociedades (tema 6), não a captura do mundo real em 3D (tema 10), não a percepção de vocabulário
aberto (tema 11). A fronteira que interessa é estreita e precisa: a técnica que permite a um
sistema agir no mundo físico é hoje, majoritariamente, **treinar em outro lugar antes** — num
simulador, e cada vez mais num modelo que *gera* o ambiente em vez de renderizá-lo a partir de
uma cena escrita por alguém.

Onde isso encosta em mídia e interação: no ponto em que o ofício de fazer mundo — level design,
world-building, direção de arte de ambiente, projeto de espaço interativo — deixa de ter um
único público. Historicamente o mundo digital era feito para o olho e para a mão humanos. A partir
do momento em que o mesmo artefato serve de terreno de aprendizado para uma política que depois
vai operar um corpo físico, ele passa a ter **um segundo público que não vê e não sente como
nós**, e que julga o mundo por outro critério: variedade de contato, cobertura de caso raro,
fidelidade de atrito. O jogo, o simulador e a fábrica passam a ser, para a máquina, o mesmo tipo
de lugar.

Por que isto merece mapa de futuro e não levantamento de estado da arte: porque as três coisas
que decidem o desfecho não são técnicas resolvidas em laboratório, são **arranjos que ainda não
existem** — quem certifica um mundo de treino, quem é dono da demonstração coletada numa fábrica,
quanto vale uma hora de gesto humano capturado, e o que acontece com a responsabilidade quando a
causa do erro está no ambiente e não na máquina. Um levantamento de estado da arte responde "o
que existe". Aqui a pergunta é "o que passa a valer quando isso existir".

**Premissas assumidas nesta rodada** (o briefing veio completo; o que ele não cobria está
declarado aqui, conforme §0 da skill): (a) o mapa foi escrito com acesso à web em 22/09/2026 e
só cita fonte aberta; (b) o recorte é global, com uma nota sobre o Brasil embutida no ramo da
raiz 3 (efeito e11.1) e na seção 3; (c) o viés declarado é neutro, com um cenário de cada lado
na seção 9; (d) a régua de exclusão é a da disciplina — o que já é comum em produto de massa não
entra como raiz; (e) trinta anos de horizonte significam que a **segunda metade da janela é
período de consolidação**, e eu deliberadamente não empurrei efeito para 2054 só para preencher
o calendário — o mapa se concentra em 2030-2050 e diz por quê na seção 7.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 22/09/2026. Doze buscas em português e inglês; quinze páginas
efetivamente abertas e lidas, listadas na seção 11. O que não abriu está registrado na seção 12.*

### O que já existe e funciona

**Modelos de mundo acionáveis, como produto de nicho ou preview.** A NVIDIA lançou o **Cosmos 3**
em 31/05/2026, descrito como omnimodelo aberto que entende e gera texto, imagem, vídeo, som
ambiente e **ação**, distribuído no Hugging Face e no GitHub, com a alegação de reduzir ciclos de
treino e avaliação de física "de meses para dias" e primeiro lugar entre modelos abertos em
Physics-IQ, PAI-Bench, R-Bench, RoboLab e RoboArena (fonte 1). O **Genie 3** da DeepMind
(05/08/2025) gera ambiente interativo a partir de texto, a 720p e 24 fps, com coerência visual de
"alguns minutos" e memória de cerca de um minuto — liberado como *research preview* para um grupo
pequeno (fonte 3). A **Odyssey-1** (28/05/2025) entrega quadro a cada 40 ms, até 30 fps, coerência
de cinco minutos ou mais, a **US$ 1-2 por hora de usuário** (fonte 15) — o único número público de
custo unitário de mundo gerado que encontrei nesta rodada.

**Agente generalista que transfere entre mundos.** O **SIMA 2** (13/11/2025), sobre o Gemini,
conversa sobre objetivo, aprende por tentativa e erro sem demonstração humana e — o ponto que
importa — foi operado dentro de mundos recém-gerados pelo Genie 3, orientando-se em ambiente que
nunca viu (fonte 2). A alegação de auto-melhoria é explícita: a experiência do SIMA 2 treina
versões seguintes.

**Políticas corporificadas em produção.** **Gemini Robotics** (12/03/2025), **On-Device**
(24/06/2025) e **ER 2** (30/07/2026, com vídeo em tempo real, rastreio de progresso de tarefa e
colaboração multi-robô, disponível via API) formam a linha da DeepMind (fonte 14). Do lado aberto,
o **LeRobot** (artigo de 26/02/2026) consolidou a camada de dado e de controle: mais de 16 mil
datasets, mais de 2.200 contribuidores, mais de 1 milhão de episódios, 7 milhões de downloads, e
braços a partir de ~€225 (SO-100) (fonte 9).

**Corpos em chão de fábrica, em número pequeno e verificável.** A contagem mais conservadora que
abri (fonte 4) registra: Figure — piloto de onze meses na BMW Spartanburg, mais de 1.250 horas de
operação e mais de 90 mil peças de chapa movimentadas, com transição da Figure 02 para a Figure 03;
Agility — mais de 65 mil horas de operação em nove instalações de clientes (GXO, Schaeffler, Toyota
Canadá, Mercado Libre), fábrica dimensionada para até 10 mil unidades/ano; Unitree — ~5.500
unidades embarcadas em 2025, meta de 10 a 20 mil em 2026; Tesla — **nenhuma contagem publicada pela
empresa**. A mesma fonte registra que as alegações de dezenas de milhares de unidades em operação
não vêm das empresas e não sobrevivem a escrutínio.

**Uma indústria de dado corporificado já montada.** Levantamento de 2026 (fonte 5): plataformas de
teleoperação custam US$ 50 mil a US$ 150 mil por posto, rendem **menos de 200 demonstrações por
trabalhador por dia**, com teleoperador a US$ 15/hora na coleta por smartphone; mais de **40
centros de treino de robô com apoio governamental** na China até 2025, um em Pequim com mais de
10.000 m², um em Sichuan com capacidade declarada de 3 milhões de registros por ano; mercado de
anotação de dado de IA em US$ 4,89 bi (2025) com projeção de US$ 17,1 bi (2030).

### O que existe e ainda não funciona

**A física dos modelos de mundo.** O **WorldBench** (arXiv 2601.21282, versão de 18/08/2026)
avalia conceito físico isolado e conclui com uma frase que vale mais que qualquer demo: os modelos
"geram evoluções de cena visualmente realistas (a bola segue trajetória parabólica) mas falham em
aderir aos parâmetros físicos (a bola acelera a 9,8 m/s²)". Testou a família Cosmos (1 AR, 1 DM,
2, 2.5) e modelos de vídeo (Wan 2.2, Hunyuan, CogVideoX, Kling 3.0, Runway Gen-4.5, LTX-2.0), e
conclui que **nenhum** tem a consistência física necessária para gerar interação confiável com o
mundo real (fonte 6). Um levantamento de 08/07/2026 formaliza a distinção que a indústria embaralha:
geração de vídeo produz quadro plausível; modelo de mundo teria de sustentar contrafactual,
planejamento e controle — e não sustenta ainda (fonte 7).

**A execução no mundo real.** O **RoboDojo** (arXiv 2607.04434) monta 42 tarefas em simulação e 18
no mundo real, avaliando generalização, memória, precisão, horizonte longo e instrução de
vocabulário aberto, justamente para expor política generalista a condição de campo (fonte 8). O
número de taxa de sucesso que circulou na minha busca não está no resumo que abri — ver seção 8.

**A norma.** A **ISO 25785-1**, tipo C, cobre robô móvel industrial com estabilidade **ativamente
controlada** — bípede, quadrúpede, plataforma autoequilibrada —, com requisitos de queda,
comportamento em perda de energia, limite de força de contato e zoneamento. Em 2026 ainda é
rascunho de trabalho; a estimativa corrente é de 18 a 36 meses do rascunho de maio de 2025 até a
norma ratificada, o que joga a publicação para o fim de 2026 ou 2027 (fonte 10).

### Quem constrói

Cinco blocos, e a composição do quinto é o que interessa a este mapa. (1) **Plataforma vertical**:
NVIDIA (Isaac, Cosmos, GR00T). (2) **Laboratório de fronteira**: Google DeepMind (Gemini Robotics,
SIMA, Genie), Physical Intelligence, Skild AI. (3) **Fabricante de corpo**: Figure, Agility,
Unitree, Tesla, Apptronik, 1X. (4) **Comunidade aberta**: Hugging Face/LeRobot, MuJoCo, Genesis,
habitat, MetaDrive. (5) **A coalizão misturada**: a Cosmos Coalition anunciada com o Cosmos 3 reúne
**Agile Robots, Black Forest Labs, Generalist, LTX, Runway e Skild AI** — duas casas de robótica,
três casas de mídia generativa e uma de agentes, na mesma mesa (fonte 1). É o sinal mais concreto
de que os dois pipelines já são um só no nível da ferramenta.

### Números de adoção

Densidade de robô industrial, IFR, 08/04/2026: média global de **132 unidades por 10 mil
empregados**; Coreia 1.220, Singapura 818, Alemanha 449, Japão 446, EUA 307, China 166, Canadá 241,
México 62; a IFR não publica figura para o Brasil nesse release (fonte 12). Um levantamento
brasileiro de 2026 dá **18 robôs por 10 mil trabalhadores** no Brasil — 350 no automotivo, dígito
único fora dele —, mercado de robótica e automação em R$ 8,2 bi, crescimento de investimento de
52% em 2025, e cerca de **45 mil drones agrícolas em operação**, segundo maior parque do mundo
(fonte 13). Esse mesmo levantamento cita média global de 151, divergindo da IFR — registro a
divergência em vez de escolher. A leitura de uma integradora brasileira (fonte 11) é que o gargalo
para humanoide aqui "nunca foi a tecnologia: é o custo de capital e a mão de obra qualificada",
com chegada esperada "alguns anos depois da fronteira global" e percepção de prazo encurtando de
cinco para três ou quatro anos.

**Contexto, não raiz** — o que já é maduro e por isso não entra na seção 4: ROS, planejamento de
trajetória, SLAM, e a simulação física acelerada por GPU (Isaac Sim, MuJoCo, PhysX). São a camada
sobre a qual tudo isto roda.

## 4. As disrupções-raiz

Antes das três escolhidas, **as recusas**, com o critério do §2 da skill aplicado:

- *Candidato recusado como raiz: **simulação física acelerada por GPU** (Isaac Sim, MuJoCo, PhysX,
  Genesis).* Faz o mesmo mais rápido e mais barato — melhoria sustentadora, não ruptura. Adoção em
  maioria na robótica de pesquisa desde ~2021. Tratado como contexto na seção 3; reaparece como
  **efeito** (e4.1), na volta do motor determinístico como camada de prova.
- *Candidato recusado como raiz: **o humanoide como fator de forma**.* Duas pernas não rompem nada:
  é escolha de embalagem para caber em ambiente construído para gente. O que rompe é a política que
  o controla — que roda igual em braço, quadrúpede ou base móvel. Tratar humanoide como raiz é
  confundir o produto com a ruptura (o anti-padrão "raiz que é produto").
- *Candidato recusado como raiz: **LLM que conversa com o robô**.* Melhoria de interface sobre
  controle que já existia; entra como efeito (e9), não como origem.
- *Candidato recusado como raiz: **ROS, SLAM e planejamento de trajetória**.* Maduros; a régua da
  disciplina os exclui.

---

### R1 — O ambiente deixa de ser escrito e passa a ser gerado

**O que rompe.** Rompe a suposição de que fazer mundo é *autorar*: modelar geometria, escrever
regra, ajustar física, versionar cena. No modelo de mundo acionável, o ambiente é produzido por
um modelo condicionado à ação do agente, quadro a quadro. O ofício deixa de ser construção e passa
a ser **condicionamento e curadoria** — prompt, referência, seleção, avaliação. Deixa de valer, no
limite, a economia do asset: o que se vende não é a cena, é a hora de mundo.

**Por que agora, e não há cinco anos.** Três pré-condições apareceram juntas entre 2025 e 2026:
latência de geração abaixo do quadro interativo (Odyssey-1 em 40 ms, 30 fps, maio/2025), coerência
temporal suficiente para uma sessão (Genie 3, "alguns minutos", agosto/2025; Odyssey, "cinco
minutos ou mais"), e um modelo aberto que gera **ação** junto com imagem e som (Cosmos 3,
maio/2026). Em 2021 nenhuma das três existia.

**Onde está na difusão.** Entre **demo pública e produto de nicho**: Genie 3 é research preview
para um grupo pequeno; Odyssey vende por hora; Cosmos 3 está aberto no Hugging Face mas roda em
infraestrutura da própria NVIDIA. Longe de adoção precoce. Toda a cadeia derivada desta raiz
carrega confiança rebaixada.

**O que ainda falta acontecer.** (1) Consistência física de parâmetro, não só de aparência — o
achado do WorldBench é exatamente a lacuna. (2) Coerência de horas, não de minutos. (3) Custo por
hora de mundo que compita com rodar um motor determinístico em GPU de consumidor. (4) Um regime
de licença para o vídeo que treinou o modelo. (5) Uma forma de **auditar** um mundo gerado — hoje
não há como versionar o que não é arquivo.

**Quem bloqueia, e com que incentivo.** Os detentores de motor e de acervo — Epic, Unity, e quem
tem biblioteca de cena e de captura. O incentivo é direto: se o mundo vira serviço gerado, a
licença por assento e o royalty por receita perdem base. O caminho de bloqueio disponível é
contratual, não técnico: termo de licença que veda uso do artefato como dado de treino. O efeito
disso está em e5 e e4.1.

---

### R2 — A política corporificada generalista: um modelo que transfere entre corpos e entre mundos

**O que rompe.** Rompe o ofício de programar robô. O controle deixa de ser especificado por tarefa
e por corpo — cinemática, célula, parametrização — e passa a ser um **modelo pré-treinado**
adaptado com demonstração. Quem sabia fazer a máquina funcionar sabia parametrizar; passa a valer
quem sabe **coletar demonstração e avaliar política**. Rompe também a fronteira entre mundo
virtual e mundo físico do ponto de vista do modelo: o SIMA 2 operando dentro de um Genie 3 e o
Odyssey-3 sendo oferecido para braço robótico e para jogo são o mesmo movimento.

**Por que agora, e não há cinco anos.** A arquitetura visão-linguagem-ação estabilizou em 2025 com
três linhas independentes convergindo (π0, GR00T N1, Gemini Robotics), e apareceu a camada que
faltava: um **formato comum de dado** com massa crítica (LeRobot, 16 mil datasets, 1 milhão de
episódios, artigo de fevereiro/2026). Em 2021 cada laboratório tinha o seu formato e o seu corpo.

**Onde está na difusão.** Entre **produto de nicho e adoção precoce**: implantações reais e
auditáveis existem, mas são dezenas de instalações, não milhares — 65 mil horas da Agility em nove
clientes, 1.250 horas da Figure na BMW. Bem abaixo de 10%.

**O que ainda falta acontecer.** (1) Execução real confiável: o RoboDojo existe justamente porque a
lacuna entre simulação e campo ainda derruba política generalista. (2) Recuperação de erro
intermediário — o problema não é entender a tarefa, é o contato, o alinhamento fino e a volta
depois da falha. (3) Norma de segurança ratificada (ISO 25785-1). (4) Um jeito de medir autonomia
que não seja adjetivo.

**Quem bloqueia, e com que incentivo.** O fabricante de corpo. Se a margem migra para a política,
o incentivo dele é **fechar o corpo** — firmware assinado, API restrita, telemetria proprietária —
para reter valor, exatamente como aconteceu em outros mercados de hardware barato com software
caro. O efeito está em e7.1 e, em terceira ordem, no movimento por robô reparável (e7.1.1).

---

### R3 — O dado de contato é o insumo escasso, e seu custo marginal não cai

**O que rompe.** Rompe a economia que sustentou a IA de tela: dado abundante, quase gratuito,
raspado da web, com custo marginal tendendo a zero. No corpo, **a décima-milésima demonstração
custa o que custou a primeira** — tempo de operador, tempo de robô, tempo de reposição da cena.
Não há economia de escala como há em rastrear a web. Isso rompe a premissa de que basta esperar o
modelo escalar, e desloca o poder para quem consegue **montar e operar fábrica de dado**. Também
cria uma categoria nova de trabalho: o corpo humano como sensor remunerado por hora.

**Por que agora, e não há cinco anos.** Porque só em 2025-2026 os modelos ficaram bons o bastante
para que o limite deixasse de ser arquitetura e passasse a ser dado — e porque a resposta
industrial já está montada e é grande: dezenas de centros de coleta com apoio estatal, um deles
com capacidade declarada em milhões de registros por ano. Em 2021 o gargalo ainda era o modelo.

**Onde está na difusão.** **Produto de nicho caminhando para adoção precoce**: já existe indústria,
preço de hora e projeção de mercado (US$ 4,89 bi → US$ 17,1 bi entre 2025 e 2030), mas a prática
ainda é de laboratório e de integrador grande, não do comprador médio de automação.

**O que ainda falta acontecer.** (1) Um formato de intercâmbio que deixe dono diferente somar dado
sem entregar operação — o LeRobotDataset v3 é candidato, não vencedor. (2) Um regime jurídico para
o gesto humano capturado: hoje ele não é claramente dado pessoal nem claramente obra. (3) Um método
de avaliar quanto do treino pode ser sintético sem perder o caso raro — que depende da R1 e é o
ponto onde as duas se amarram.

**Quem bloqueia, e com que incentivo.** O Estado. O incentivo é duplo e puxa para os dois lados:
controle de exportação (tratar corpus de contato como ativo estratégico, como já se trata GPU) e
proteção de dado pessoal (o gesto identifica quem o executou). Os efeitos estão em e11.2 e e12.1.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ambiente deixa de ser escrito e passa a ser gerado por um modelo condicionado à ação
    efeitos:
      - id: e1
        ordem: 1
        efeito: Casas de simulação passam a vender hora de mundo condicionado e avaliação de transferência, não biblioteca de cenário
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Nasce um mercado de mundos certificados, precificados por desvio físico medido em conceito isolado
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Um instituto de metrologia publica o corpo de cenas de referência e a física medida vira norma pública
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Casas de vídeo generativo vendem para a robótica o mesmo modelo que vendem para publicidade
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A separação institucional entre indústria criativa e indústria de automação deixa de existir no nível da ferramenta, e o mesmo profissional é contratado pelas duas
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Desenhar mundo passa a ser desenhar currículo de treino, e o level designer é medido pela política que o mundo dele produz
        sinal: fraco
        prazo: 2038
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O portfólio de quem projeta interação passa a incluir a política treinada, e não só a peça jogável
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O crédito autoral se desloca de quem fez o mundo para quem fez o agente que aprendeu nele, e a disputa chega à negociação coletiva de estúdio
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Estúdio passa a ser remunerado por transferência medida — quanto a política treinada no mundo dele funciona fora dele
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Mundo bonito e mundo útil se separam em duas linhas de produção com equipes distintas
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Provar que um robô é seguro passa a exigir auditoria do mundo em que ele treinou, e não só ensaio da máquina
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Seguradora exige o registro do mundo de treino — semente, versão do modelo, trajetórias — como condição de apólice
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O prêmio de seguro vira o preço corrente do risco de IA física e passa a conter mais que a norma técnica
                sinal: fraco
                prazo: 2050
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Investigação de acidente passa a rodar contrafactual no modelo de mundo, e o laudo inclui uma versão de software do ambiente
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Forma-se jurisprudência que trata o ambiente de treino como peça defeituosa, com responsabilidade de quem o gerou
                sinal: fraco
                prazo: 2048
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O custo de GPU por hora de mundo gerado trava a substituição do motor escrito, e o simulador determinístico volta como camada de verificação
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A arquitetura híbrida vira padrão — mundo gerado para variedade, motor determinístico para o teste que assina
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O motor determinístico sobrevive como infraestrutura de prova e vira dependência crítica mantida por poucas equipes
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Quem detém acervo de vídeo do mundo real vira fornecedor de ambiente, e o acervo passa a ser licenciado por hora de treino
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Operadores de espaço com fluxo — aeroporto, metrô, shopping, hospital — passam a cobrar pela captura do próprio espaço, como já cobram por filmagem
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Espaço público novo passa a ser projetado já pensando em ser capturável e licenciável como ambiente de treino
                sinal: fraco
                prazo: 2052
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O acervo de vídeo doméstico vira ativo disputado, e a captação de ambiente entra no contrato de aparelho de casa
            sinal: fraco
            prazo: 2040
            confianca: baixa
  - disrupcao: A política corporificada generalista — um modelo que transfere entre corpos e entre mundos
    efeitos:
      - id: e6
        ordem: 1
        efeito: O integrador de automação deixa de programar tarefa e passa a coletar demonstração e avaliar política
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A demonstração coletada vira ativo disputado no contrato de integração, e a cláusula de propriedade do dado entra na negociação
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O corpus de contato da fábrica entra no balanço como intangível e a auditoria contábil passa a opinar sobre robô
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Aparece mercado secundário de políticas — a política afinada numa fábrica é vendida a outra do mesmo ramo
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Poucas políticas dominam um ramo inteiro, e uma falha comum atinge ao mesmo tempo fábricas que não se conhecem
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O corpo do robô caminha para commodity e a margem migra para a política, invertendo onde a indústria de robô ganha dinheiro
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Fabricante de corpo fecha firmware e API para reter margem, e nasce a disputa pelo robô destravado
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Consolida-se um movimento por robô reparável e destravado, com norma própria e obrigação de peça
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O preço de entrada cai a ponto de laboratório de graduação e estúdio pequeno rodarem robô real em projeto de disciplina
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A prototipagem de interação física vira prática comum de curso de projeto, como a prototipagem de tela é hoje
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A fragilidade medida em execução real trava a venda de autonomia plena, e o humano permanece no circuito como camada paga
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O teleoperador de plantão vira profissão global, com turno arbitrado por fuso e salário arbitrado por país
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O trabalho físico se desloca em vez de sumir — o corpo é da máquina, a atenção é humana, vendida por hora e em outro país
                sinal: fraco
                prazo: 2046
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Autonomia vira grandeza contratada por faixa — intervenções por hora — e deixa de ser adjetivo de catálogo
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: O contrato de automação passa a ter cláusula de degradação, com preço por ponto de autonomia perdido
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O comando vira linguagem natural situada, e o projeto de interação passa a incluir o que o agente pode recusar
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A recusa do agente vira elemento de design de produto, com vocabulário, tempo e estética próprios
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O encontro entre pessoa e máquina com corpo passa a ser regulado como relação de serviço, com direito de recusa dos dois lados
                sinal: fraco
                prazo: 2052
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Espaço construído ganha sinalização legível por máquina, negociada como mobiliário urbano e cobrada como tal
            sinal: fraco
            prazo: 2042
            confianca: baixa
      - id: e10
        ordem: 1
        efeito: O programador de trajetória e o técnico de célula perdem o centro do ofício, porque o valor estava na parametrização
        sinal: fraco
        prazo: 2038
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O saber do operador vira dado de treino sem contrapartida, e o conflito chega à negociação sindical nas montadoras
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A qualificação que resta é diagnóstico de falha rara, que não se aprende em operação rotineira, e falta quem saiba consertar
                sinal: fraco
                prazo: 2048
                confianca: baixa
  - disrupcao: O dado de contato é o insumo escasso, e seu custo marginal não cai com escala
    efeitos:
      - id: e11
        ordem: 1
        efeito: A fábrica de dado corporificado vira infraestrutura estratégica, tratada como fundição de chip
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: País com custo de trabalho baixo e mercado interno grande — o Brasil entre eles — passa a vender hora de teleoperação como vendeu hora de call center
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A hora de teleoperação ganha preço de referência público e passa a ser contratada como commodity
                sinal: fraco
                prazo: 2050
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: Corpus de contato entra na pauta de controle de exportação, ao lado de GPU
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Modelos corporificados se fragmentam por bloco geopolítico, e o robô importado chega sem a política que o faz funcionar
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O corpo humano vira sensor remunerado, e a captura de gesto cotidiano entra no mercado de trabalho informal
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A captura de gesto colide com proteção de dado pessoal, porque o modo de mover identifica quem moveu
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: O gesto entra na categoria de dado biométrico, e capturar movimento em espaço público passa a exigir base legal específica
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: O custo do dado real empurra o setor para o sintético, e a fidelidade do modelo de mundo passa a limitar quanto se pode economizar
        sinal: forte
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: O benchmark de física vira instrumento de mercado, porque quem define a régua define quanto dado real é obrigatório
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O que conta como físico passa a ser decidido em comitê, e a física do produto vira a física do benchmark
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: A proporção entre dado real e sintético vira número declarado em ficha técnica, como composição em rótulo
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: Comprador industrial passa a especificar proporção mínima de dado real em edital, e o sintético barato perde o mercado regulado
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: O formato aberto de dado decide quem consegue somar demonstração de muitos donos, e vira campo de disputa como o formato de arquivo já foi
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Surgem cooperativas de dado em que fábricas concorrentes somam demonstração sem entregar a operação
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: O acervo comum de demonstração vira bem de infraestrutura, disputado como espectro de radiofrequência
                sinal: fraco
                prazo: 2052
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: Quem publica o formato passa a arbitrar o que é registrável, e o que o formato não representa deixa de ser coletado
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: Fenômenos físicos mal representados no formato ficam fora do treino de toda uma geração de políticas
                sinal: fraco
                prazo: 2048
                confianca: baixa
```

### Os mecanismos, um a um

**R1.** `e1` — *porque a geração de ambiente tem custo por hora de uso (US$ 1-2/hora de usuário na
Odyssey) e não custo por artefato produzido, o vendedor deixa de ter o que empacotar e passa a
cobrar pelo uso*. `e2` — *porque o SIMA 2 aprende por tentativa e erro dentro do mundo e sua
experiência treina a versão seguinte, o mundo deixa de ser palco e vira insumo de formação: o que
o mundo produz é medível, logo o mundo passa a ser medido por isso*. `e3` — *porque a ISO 25785-1
regula estabilidade ativamente controlada, e estabilidade ativamente controlada é propriedade da
política, não da estrutura, o ensaio da máquina isolada deixa de cobrir o objeto regulado — e a
única evidência do comportamento da política é o ambiente onde ela se formou*. `e4` (retroação) —
*porque US$ 1-2 por hora de mundo multiplicados por milhões de horas de treino é custo recorrente
que um motor determinístico em GPU própria não tem, a substituição para no ponto em que a
variedade gerada deixa de compensar a conta*. `e5` — *porque o modelo de mundo aprende de vídeo do
mundo real e não de cena modelada, o gargalo migra do artista para o dono da filmagem*.

Classes de referência dos prazos de R1: o caminho de um motor de terceiro até padrão industrial de
simulação levou cerca de duas décadas (Unreal, 1998, até virar base de AirSim e afins no fim dos
anos 2010) — por isso `e2` fica em 2035 e não em 2030. Para `e3`, a referência é a própria ISO:
18 a 36 meses de rascunho a norma ratificada, mais o intervalo habitual entre norma publicada e
exigência contratual efetiva.

**R2.** `e6` — *porque a política é pré-treinada e adaptada com demonstração, o trabalho de
especificar movimento é substituído pelo de produzir exemplo e medir resultado*. `e7` — *porque o
mesmo modelo roda em corpos diferentes (π0 é explicitamente cross-embodiment), o corpo deixa de
ser fonte de diferenciação e a diferença passa a estar no modelo — e a Unitree, com G1 a ordens de
grandeza abaixo das plataformas ocidentais, já mostra a direção do preço*. `e8` (retroação) —
*porque a taxa de sucesso em campo é o que o comprador paga, e os benchmarks construídos em 2026
existem justamente para expor a queda entre simulação e mundo, a promessa de autonomia não se
converte em contrato — e o humano remoto vira item de custo permanente*. `e9` — *porque o modelo
que comanda é o mesmo que conversa (Gemini Robotics-ER 2 orquestra em tempo real), a interface de
comando herda a capacidade de negar — e negar precisa de projeto*. `e10` — *porque o conhecimento
do técnico de célula estava codificado na parametrização, e a parametrização é o que a política
substitui*.

Classe de referência de R2: **o carro autônomo**. Da demonstração pública (DARPA, 2005-2007) ao
serviço comercial restrito (por volta de 2020) foram treze a quinze anos, e em 2026 ainda não é
maioria em lugar nenhum — e o registro de lesão de motorista de teste por frenagem brusca mostra
que a última milha de confiabilidade é a mais cara. É por isso que `e8` tem prazo curto (2030) e
confiança alta: ele é a *continuação* dessa classe, não a ruptura dela. E é por isso que `e9.2`,
que depende de espaço público reconfigurado, só aparece em 2042.

**R3.** `e11` — *porque menos de 200 demonstrações por trabalhador por dia, em plataforma de US$ 50
a 150 mil, é uma função de produção industrial e não de software: quem quer volume precisa de
prédio, turno e gente*. `e12` — *porque a alternativa barata à plataforma cara é o humano com
sensor vestível ou telefone, a US$ 15/hora*. `e13` (retroação) — *porque o custo do dado real
empurra para o sintético, mas o sintético herda a lacuna do WorldBench (aparência certa, parâmetro
errado), a economia só vai até onde a física do gerador aguenta*. `e14` — *porque dado que não
soma não tem valor de escala, e somar exige formato comum: o LeRobotDataset chegou a 16 mil
datasets sendo adotado inclusive por plataformas que ele não integra nativamente*.

Classe de referência de R3: o mercado de anotação de dado (US$ 4,89 bi em 2025 → US$ 17,1 bi em
2030, cerca de 3,5× em cinco anos) e a densidade de robô industrial, que a IFR mede como tendo
**dobrado em sete anos** globalmente. Sete anos para dobrar é o ritmo de difusão de corpo físico
em chão de fábrica — e é a razão de `e11.1` (Brasil vendendo hora de teleoperação) estar em 2036
e não em 2030: partindo de 18 robôs por 10 mil trabalhadores, dois ciclos de duplicação ainda
deixam o país abaixo da média global de hoje.

### Cobertura STEEP e quem perde

**Social**: e10 (perda do ofício de parametrização), e12 (corpo como sensor pago), e8.1
(teleoperador global). **Tecnológico**: e1, e13, e14, e4. **Econômico**: e7 (inversão de margem),
e11, e5. **Político**: e3, e11.2, e12.1. **Ecológico**: fica **fino, e declaro**: só e4 carrega a
dimensão, pela via do custo de GPU por hora de mundo. Não forcei um efeito ambiental: não achei,
nesta rodada, fonte aberta que sustentasse cadeia causal específica entre IA física e consumo
material ou energético que não servisse igualmente a qualquer outro tema de IA — e efeito que
serve a qualquer tema é o genérico que a skill proíbe.

**Quem perde**, explicitamente: o programador de trajetória e o técnico de célula (e10); o operador
cujo saber é capturado sem contrapartida (e10.1); o estúdio que faz mundo bonito e não transferível
(e2.2); o fabricante de corpo que não tem política (e7); o país que compra robô mas não tem corpus
nem política (e11.2.1); e o morador cujo ambiente doméstico vira ativo de terceiro (e5.2).

### Cruzamentos

**Convergência — o achado do mapa.** Dois ramos de raízes diferentes chegam ao mesmo ponto:
`e1.2` (casa de mídia generativa vendendo modelo para robótica) vem da R1, e `e13` (pressão
econômica por dado sintético) vem da R3. O encontro já tem endereço em 2026: a Cosmos Coalition
anunciada com o Cosmos 3 põe **Runway, Black Forest Labs e LTX** — três casas de mídia — na mesma
mesa que **Skild AI e Agile Robots**; e a Odyssey oferece o mesmo modelo para braço robótico, para
veículo, para dron e para jogar videogame. Para o público deste mapa, essa é a notícia: não é que a
robótica vá precisar de gente de mídia por simpatia; é que a economia do dado empurra a robótica
para dentro da ferramenta de mídia, porque gerar é mais barato que coletar. O efeito de terceira
ordem correspondente (`e1.2.1`) é a dissolução institucional da fronteira entre as duas indústrias.

**Retroalimentação — um ciclo que se freia sozinho.** `e13` reforça `e1` (mais demanda por modelo
de mundo) e `e1` reforça `e13` (modelo melhor, mais economia de dado real). Mas o ciclo tem um
freio embutido: quanto mais treino sintético, menos cobertura de contato raro; quanto menos
cobertura de raro, pior o gerador justamente nos casos que importam para a segurança — e volta a
exigir dado real caro. **O ciclo não explode: ele oscila em torno de uma proporção**, e é essa
proporção que `e13.2` transforma em número de ficha técnica. Há também um ciclo de reforço puro,
que o mapa registra sem resolver: SIMA 2 melhora dentro de Genie 3 e sua experiência treina a
versão seguinte — auto-melhoria em ambiente gerado, cujo limite ninguém mediu ainda.

**Contradição — não resolvo, registro.** `e7` diz que o corpo vira commodity e a margem migra para
a política. `e7.1` e `e11.2.1` dizem que o fabricante fecha o corpo e que os modelos se fragmentam
por bloco geopolítico. As duas coisas não podem valer plenamente juntas: corpo fechado e política
regionalizada recriam exatamente a diferenciação por hardware que `e7` dissolve. **O que decide
entre elas**: se um formato aberto de dado e uma camada aberta de política (a linhagem
LeRobot/Cosmos aberto) atingirem massa crítica **antes** de os fabricantes fecharem o corpo. É uma
corrida com data, não um dilema filosófico — e o sinal para acompanhar é se o Cosmos continua
aberto na versão 4 ou 5.

**Contradição menor.** `e2` (mundo medido por transferência) e `e2.2.1` (mundo bonito e mundo útil
em linhas separadas) apontam para desfechos opostos: no primeiro o critério da máquina invade o
ofício, no segundo os dois ofícios se separam e cada um fica em paz. Decide entre eles o custo de
manter duas linhas de produção — se a geração de mundo ficar barata, separar sai barato e a
convivência vence; se continuar cara, o critério único vence.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. Mundo vendido por hora de usuário.** A Odyssey publica US$ 1-2 por hora de usuário para
manter um mundo gerado rodando (fonte 15). É o primeiro preço unitário público de um bem que
antes não tinha unidade — mundo se vendia por licença ou por asset, nunca por hora. *O que
mudaria*: se a hora de mundo ficar mais barata que manter uma equipe de build de motor, a
economia inteira do level design muda de base. *Sinal observável de crescimento*: um estúdio de
médio porte publicando que substituiu pipeline de cenário por assinatura de mundo gerado — ou o
preço por hora caindo abaixo de US$ 0,20.

**2. O benchmark de física virando objeto de disputa.** Em 2026 já existe literatura que **audita
o próprio benchmark** — trabalho que reexamina o Physics-IQ e discute ambiguidade de prompt,
ativação espúria de verdade-base e artefato de agregação como fontes de erro que se propagam para
decisões de desenvolvimento. *O que mudaria*: quando a régua vira contrato, quem escreve a régua
escreve o mercado (`e13.1`). *Sinal observável*: o primeiro contrato comercial ou edital público
que cite um escore de física como requisito. **Registro de honestidade**: esse artigo não abriu
para mim nesta rodada (ver seção 8); o sinal fraco está aqui pela existência do trabalho, não pelo
seu conteúdo.

**3. Casas de mídia e casas de robótica na mesma coalizão.** Runway, Black Forest Labs e LTX ao
lado de Skild AI e Agile Robots na Cosmos Coalition (fonte 1). *O que mudaria*: confirma a
convergência da seção 5. *Sinal observável*: a primeira contratação cruzada com contrato público —
um estúdio de vídeo contratado por montadora para produzir ambiente de treino, ou uma casa de
robótica vendendo modelo de mundo para entretenimento.

**4. Formato aberto adotado por quem ele não integra.** O relato do LeRobot registra que o maior
número de downloads **não** é de uma plataforma nativamente integrada — o formato está sendo
adotado por fora (fonte 9). É assim que formato vira padrão: quando quem não foi convidado usa.
*Sinal observável*: o formato aparecer como exigência em edital de compra pública ou em
especificação de fornecedor industrial.

**5. Seguro específico de humanoide.** O primeiro produto de seguro desenhado só para humanoide
surgiu na China em 2025, combinando patrimonial e responsabilidade civil de terceiro (fonte 10).
*O que mudaria*: seguradora é o ator que consegue exigir evidência antes de a norma existir.
*Sinal observável*: a primeira apólice que exija log do ambiente de treino — é o gatilho direto de
`e3.1`.

**6. O corpo humano machucado pela política, sem colisão.** Mais de duas dezenas de lesões de
motoristas de teste de robotáxi em 2024-2025, por frenagem brusca e manobra automática — torção,
distensão, chicote — e não por batida. *O que mudaria*: mostra que a categoria de dano da IA
física não é a que a norma de máquina prevê. *Sinal observável*: o primeiro registro
ocupacional de lesão causada por humanoide em chão de fábrica — que, pelo atraso habitual dos
sistemas de registro, aparecerá cerca de um ano depois de acontecer. **Registro de honestidade**:
a reportagem que traz esses números não abriu para mim (HTTP 403); o dado veio do resumo de busca
e está aqui como sinal, não como fonte — por isso não consta da seção 11.

### Wildcards

**W1 — O recall de um ambiente.** *Mecanismo*: um acidente com robô cuja investigação localiza a
causa não no robô nem na política, mas no modelo de mundo em que ela treinou — uma classe de
contato sistematicamente mal gerada (o caso do WorldBench: trajetória certa, aceleração errada).
A autoridade determina a retirada de circulação não da máquina, mas do **ambiente**, e de todas as
políticas dele derivadas. *Por que é improvável*: exige rastreabilidade que hoje não existe —
mundo gerado não é arquivo versionado, e reproduzir a semente exata de uma sessão de treino é
problema em aberto. *O que faria com o mapa*: `e3`, `e3.1` e `e3.2` saltariam de fraco para forte
em um ano, e `e1.1` (mundo certificado) deixaria de ser mercado e viraria obrigação. *Sinal
precoce*: qualquer exigência regulatória de **registro reprodutível de treino** — semente, versão,
trajetórias — antes de haver acidente.

**W2 — O mundo cai para zero.** *Mecanismo*: um modelo de mundo aberto com fidelidade física
suficiente e custo de inferência baixo o bastante para rodar em GPU de consumidor — por liberação
deliberada ou por vazamento. O preço da hora de mundo vai a quase zero. *Por que é improvável*: a
fidelidade física ainda não existe em modelo nenhum, aberto ou fechado, e o custo de inferência
autoregressiva em tempo real não caiu na ordem de grandeza necessária. *O que faria com o mapa*:
mata `e1` e `e5` (não há o que vender), acelera `e2` e `e7.2` em cerca de cinco anos, e transforma
`e13` de retroação em aceleração — o dado real ficaria restrito ao caso raro e à certificação.
*Sinal precoce*: um modelo de mundo aberto liderando o WorldBench, não só o Physics-IQ entre
abertos.

**W3 — Moratória.** *Mecanismo*: um caso de grande repercussão envolvendo humanoide em espaço
público — dano a criança, ou falha em massa por política compartilhada (`e6.2.1`) — leva uma
jurisdição grande a suspender operação de robô com estabilidade ativamente controlada em ambiente
não segregado. *Por que é improvável*: a base instalada em espaço público ainda é pequena demais
para gerar o caso, e o precedente existente em veículo autônomo foi suspensão de empresa, não de
categoria. *O que faria com o mapa*: `e9.2`, `e8.1.1` e todo o ramo urbano saem da janela; a IA
física fica confinada a ambiente controlado, e a R1 sobrevive intacta — porque mundo gerado não
depende de o robô sair à rua. *Sinal precoce*: a primeira audiência legislativa municipal sobre
circulação de robô com pernas, em qualquer cidade grande.

## 7. Contra o próprio mapa

### Pré-mortem — é 2056 e este mapa se mostrou errado

**Razão 1: o modelo de mundo nunca atingiu consistência física de parâmetro, e ficou em
entretenimento e pré-visualização.** É o desfecho mais provável entre os de fracasso, porque é o
que a única evidência experimental que abri já indica: o WorldBench conclui que *nenhum* modelo
testado tem a consistência necessária para interação confiável, e a distinção entre gerar quadro
plausível e sustentar contrafactual é justamente o que o levantamento de julho/2026 aponta como
não resolvido. Se isso persistir, `e1.1` (mundo certificado) e `e3` (auditoria do mundo de treino)
não acontecem, e a R1 vira um capítulo de mídia, não de robótica. *Ação tomada*: `e1.1` fica em
confiança media e prazo 2038, não antes; toda a terceira ordem da R1 permanece em baixa.

**Razão 2: a IA física ficou presa na última milha, como o carro autônomo.** Em 2026 o registro
verificável é de dezenas de instalações e dezenas de milhares de horas, não de milhões de corpos —
e a classe de referência diz que treze a quinze anos depois da demonstração o carro autônomo ainda
não é maioria em lugar nenhum. Se a curva da IA física repetir essa, em 2056 teremos centenas de
milhares de corpos, não dezenas de milhões, e os ramos econômicos da R3 encolhem por falta de
demanda. *Ação tomada*: é exatamente por isso que `e8` (o humano permanece no circuito) tem
confiança **alta** e prazo curto — ele é o efeito que sobrevive a este cenário.

**Razão 3: o gargalo não era dado nem mundo — era atuador, bateria e cadeia de suprimento.** Este
mapa é sobre software, dado e ambiente. Se o limite real for material — densidade de energia,
ímã, redutor, mão com tato durável —, o mapa erra o objeto inteiro, não um efeito. *Ação tomada*:
não consegui, nesta rodada, fonte aberta que sustentasse cadeia causal específica sobre cadeia de
suprimento física; registro a lacuna aqui e na seção 12 em vez de inventar efeito.

### Extrapolação linear

`e7.2` (o preço de entrada cai a ponto de laboratório e estúdio pequeno rodarem robô real) é "mais
do mesmo, maior": braços a €225 já existem no LeRobot em 2026. Pela regra do §6.2 ele precisava
ganhar mecanismo de não-linearidade ou perder uma ordem. **O mecanismo não-linear que o salva**: o
braço barato sozinho não faz nada — o que muda o patamar é a política transferível chegar junto, e
isso é degrau, não rampa: antes dela o braço é brinquedo, depois dela é ferramenta. Mantido, com
essa dependência explícita de `e7`.

`e11` (fábrica de dado como infraestrutura estratégica) também era extrapolação de um levantamento
único, com leitura geopolítica interessada. Rebaixado — ver registro de alterações.

### Velocidade de adoção

Confrontei cada prazo de efeito com sinal fraco contra as classes de referência declaradas na
seção 5. Dois não passaram:

- `e2` exigia nove anos entre um *research preview* de mundo gerado e a reorganização do ofício de
  desenhar mundo. A classe de referência — motor de terceiro virando padrão de simulação
  industrial — levou cerca de duas décadas. **Empurrado de 2035 para 2038**, e ainda assim é
  otimista: 2038 são treze anos desde o Genie 3.
- `e6` exigia que o integrador trocasse de ofício em seis anos, enquanto `e8` (do mesmo mapa) diz
  que a venda de autonomia trava. As duas coisas não cabem juntas no mesmo prazo. **Empurrado de
  2032 para 2034.**

Os prazos de terceira ordem ficaram entre 2042 e 2052, todos dentro do horizonte de 2056. Isso é
deliberado e merece declaração: **não empurrei efeito para 2054-2056 só para preencher a janela**.
Um horizonte de trinta anos convida a inventar futuro distante; a disciplina aqui foi o contrário —
se não consigo escrever o mecanismo, o efeito não entra, e o que sobra cabe em 2050. A segunda
metade da janela deste mapa é período de consolidação do que já foi nomeado, não de novidade.

### Conferência de teto — a janela final ficou vazia, e isso é declarado

Obrigatória em rodada de horizonte longo por **TMI-0080**, com o gatilho corrigido por
**TMI-0086** (densidade da faixa `[horizonte-2, horizonte]`, não o contador do verificador).
Os números desta rodada, medidos e não estimados:

- Efeitos terminais (sem filhos): **25**.
- Na faixa `[2054, 2056]`: **zero** — nenhum prazo terminal encosta no teto.
- Contador do verificador `prazo > horizonte em ordem 3`: **zero**.
- Prazo terminal mais tardio: **2052** (`e5.1.1`, `e9.1.1`, `e14.1.1`).
- Distribuição por década: 20 terminais nos anos 2040, 5 nos anos 2050.

Ou seja: **não houve compressão contra o teto** — não há o que re-derivar, porque nada foi
empurrado para o ano do horizonte. O que há é o caso oposto, previsto por **TMI-0085**: a cadeia
de classes de referência **se esgota antes do horizonte**, e os últimos quatro anos da janela
ficam vazios. A razão é verificável nas próprias referências usadas na seção 5 — carro autônomo
(treze a quinze anos de demo a serviço restrito), motor de terceiro virando padrão industrial
(cerca de vinte anos), duplicação da densidade de robô (sete anos), ISO (18 a 36 meses). Nenhuma
delas mede trinta anos. Encadeadas em três ordens a partir de 2025-2026, elas terminam por volta
de 2050, e é ali que o mapa termina.

Conforme TMI-0085, **deixo a janela final vazia e declaro o esgotamento**, em vez de esticar
efeitos para cobrir o horizonte que o briefing pediu. O parágrafo da seção 2 que diz "não empurrei
efeito para 2054-2056 só para preencher o calendário" está correto, mas era formulação de
intenção; esta subseção é a verificação que a torna auditável — e o enquadramento certo não é
"escolhi não preencher", é "**a cadeia de referências acabou em 2052 e eu não tenho referência
para o que vem depois**".

*Consequência honesta*: este é um mapa de 2056 que descreve até cerca de 2052. Os quatro anos
finais não estão vazios por modéstia, e sim porque eu não sei datá-los — e um efeito datado sem
referência seria chute com aparência de método.

### A raiz que não acontece

- **Sem R1** (mundo continua sendo escrito): sobram R2 e R3 quase inteiras. A IA física continua,
  treinada em Isaac e MuJoCo, e o que se perde é o ramo de certificação de mundo e a convergência
  com mídia. Perde-se cerca de um terço do mapa — o terço que mais interessa ao público deste
  documento.
- **Sem R2** (a política não generaliza entre corpos): a R1 vira mídia pura e a R3 perde o
  comprador do dado. O mapa colapsa: sem transferência, cada corpo volta a ser um projeto, e nada
  do que está aqui vale. **R2 é a raiz de que as outras dependem** — declaro isso em vez de fingir
  três pilares independentes.
- **Sem R3** (o dado deixa de ser escasso, por exemplo porque vídeo humano passa a bastar): a R1
  ganha força (sintético vira o caminho) e some todo o ramo geopolítico e trabalhista. É a perda
  mais concentrada e a mais fácil de detectar: bastaria um modelo treinado só em vídeo de internet
  alcançar política treinada em demonstração.

Portanto o mapa **não** tem três raízes de peso igual. Tem uma raiz condicionante (R2) e duas que
descrevem, respectivamente, de onde vem o ambiente (R1) e de onde vem o dado (R3). Registro a
assimetria em vez de maquiá-la com simetria de apresentação.

### Suposições escondidas

1. **Energia e GPU continuam disponíveis e com preço decrescente.** Todo o custo de `e4` e de `e1`
   supõe isso. Se o preço de computação subir, `e4` (retroação) vence e a R1 estaciona.
2. **O Cosmos continua aberto.** Metade do argumento de difusão da R1 depende de haver um modelo de
   mundo de fronteira publicado no Hugging Face. Abertura é decisão comercial reversível, e já foi
   revertida em outros mercados. Se fechar, `e1` e `e13` viram dependência de um fornecedor —
   e isso é wildcard novo que não escrevi na seção 6.
3. **A cadeia física de atuador e bateria não é o gargalo** (ver pré-mortem 3).
4. **O regime jurídico do vídeo de treino permanece permissivo.** Se o vídeo do mundo real passar a
   exigir licença como obra, `e5` deixa de ser oportunidade e vira barreira, e o custo do mundo
   gerado sobe.
5. **A régua da disciplina é a régua certa.** Excluir o que já é comum em produto de massa é
   premissa metodológica, não verdade: pode ser que a mudança relevante até 2056 venha justamente
   da difusão em massa do que já existe — aspirador, drone agrícola, carro com assistência — e não
   da fronteira. O Brasil, com 45 mil drones agrícolas e 18 robôs por 10 mil trabalhadores, é o
   caso que mais desafia essa premissa.

### Viés do autor

Dois, nomeados. **Primeiro**: o efeito `e2` — "desenhar mundo vira desenhar currículo de treino" —
é o efeito que eu queria que existisse, porque é o que torna este tema interessante para uma
disciplina de mídia e interação. Ele tem sinal **fraco**, e é fraco mesmo: não encontrei um único
estúdio que já seja remunerado por transferência. Está no mapa com prazo empurrado e confiança
media, e um leitor cético deveria começar por ele. **Segundo**: escolhi três raízes que são todas
de software e dado, e nenhuma de material. Isso é conforto de quem lê arXiv e press release, não
resultado de análise — está declarado no pré-mortem 3.

### Calibração

Ordem 1: alta 3, media 11, baixa 0. Ordem 2: alta 0, media 15, baixa 10. Ordem 3: alta 0, media 0,
baixa 23. A distribuição cai com a ordem, como deve. As três confianças altas de primeira ordem são
`e4`, `e8` e `e13` — e as três são **retroações ou limites**, não acelerações. Isso não é acaso:
o que dá para afirmar com confiança sobre um futuro de trinta anos é quase sempre o que o freia.

### Registro de alterações — antes → depois

- `e2`: prazo **2035 → 2038**, porque a classe de referência (motor de terceiro virando padrão de
  simulação industrial) levou cerca de vinte anos, e 2035 assumia nove.
- `e6`: prazo **2032 → 2034**, porque contradizia o prazo de `e8` no mesmo mapa.
- `e11`: confiança **alta → media**, porque a alegação de infraestrutura estratégica se apoia num
  único levantamento de think tank com leitura geopolítica declaradamente interessada (fonte 5), e
  eu não encontrei confirmação independente dos números de capacidade dos centros chineses.
- `e12`: prazo **2032 → 2034**, alinhado ao rebaixamento de `e11` — sem fábrica de dado em escala,
  a captura de gesto cotidiano não vira mercado de trabalho.
- `e5.2.1` (*recusar a captura do próprio ambiente passa a ter preço na fatura*): **removido**, vai
  para a seção 12. Falha no teste da causa solta (§3.10): isso aconteceria igual por qualquer
  economia de dado doméstico, sem nenhuma relação com IA física.
- `e9.2.1` (*cidade com duas camadas de legibilidade vira pauta de acessibilidade*): **removido**,
  vai para a seção 12. Mesma falha: a cidade já ganha camada legível por máquina por logística e
  veículo autônomo; não deriva desta raiz.

Cota da skill cumprida: pelo menos um rebaixamento ou remoção por raiz — R1 (`e2` + remoção de
`e5.2.1`), R2 (`e6` + remoção de `e9.2.1`), R3 (`e11` + `e12`).

## 8. O que a máquina errou

Eu sou a máquina. Sobre esta rodada, especificamente:

**1. Quase usei um número que a fonte seguinte desmentiu.** Uma busca devolveu "a Tesla implantou
mais de 1.000 unidades do Optimus Gen 3 em suas fábricas a partir de janeiro de 2026", com
capacidade declarada de ~100 mil em 2026. Na mesma rodada, a fonte 4 — que abri — registra que a
Tesla **nunca publicou contagem de produção**, que a produção em Fremont não havia começado em
meados de julho de 2026, e que a alegação de mais de mil Optimus em linha de produção não vem da
empresa. Se eu tivesse parado na primeira busca, o mapa teria uma âncora falsa exatamente no ponto
mais citado do tema. Não usei nenhum dos dois números como fato.

**2. Atribuí a um artigo um limiar que ele não tem.** O resumo de busca dizia que o WorldBench
encontrou "degradação acentuada do mIoU de primeiro plano após 5-9 quadros de predição
autoregressiva". Ao abrir o artigo (arXiv 2601.21282), esse limiar **não está lá** — o que está é
a formulação qualitativa sobre aparência realista com parâmetro físico errado. Um número com
aparência de precisão quase entrou no mapa por empréstimo de um resumo. Cito só o que o artigo diz.

**3. Um número central do tema não foi verificado, e está marcado como tal.** A taxa de "12,8% de
sucesso da melhor política em 18 tarefas reais, contra 100% de teleoperação humana" apareceu em
resumo de busca atribuída ao RoboDojo. O PDF não abriu (excedeu o limite de tamanho da ferramenta)
e o resumo que abri (arXiv 2607.04434) não contém esses valores. **Não usei o número em lugar
nenhum do mapa**, nem como justificativa de prazo. O argumento de `e8` se apoia só no que o resumo
sustenta: que o benchmark existe, tem 42 tarefas simuladas e 18 reais, e foi construído para expor
política generalista a condição de campo. Um mapa que dependesse daquele 12,8% estaria errado.

**4. Duas páginas relevantes não abriram, e a ausência mudou o texto.** A reportagem sobre lesões
de motoristas de teste de robotáxi e a página que compila implantações de humanoides devolveram
HTTP 403; o artigo "Physics-IQ Verified" excedeu o limite de tamanho. As três aparecem no mapa
apenas como **sinal fraco com ressalva declarada**, e nenhuma entra na seção 11. A tentação era
citá-las pelo resumo de busca; é exatamente a forma de erro que a seção 11 da disciplina existe
para impedir.

**5. Errei a data do Genie 3 no primeiro rascunho.** Tratei-o como lançamento de 2026, porque a
matéria que apareceu na busca era de junho de 2026. Ao abrir o blog da DeepMind, a data é
**05/08/2025**. Isso importa: com 2026, `e2` em 2035 pareceria nove anos de folga; com 2025, são
dez — e ainda assim empurrei para 2038. Uma data errada teria distorcido meia dúzia de prazos.

**6. Duas fontes discordam de um número e eu não tenho como arbitrar.** A IFR (fonte 12) dá média
global de 132 robôs por 10 mil empregados; o levantamento brasileiro (fonte 13) fala em 151 ao
comparar com o Brasil. Podem ser anos-base ou denominadores diferentes. Registrei as duas em vez
de escolher a que sustentasse melhor o argumento — que seria a maior.

**7. Onde o mecanismo é fraco e eu mantive mesmo assim.** `e9.2` (espaço construído com sinalização
legível por máquina, negociada como mobiliário urbano) é plausível e tem mecanismo, mas o
mecanismo é de analogia — "como aconteceu com acessibilidade e com sinalização viária" —, não de
evidência. Está com sinal fraco, confiança baixa e prazo 2042, e é o candidato mais provável a ser
cortado por um revisor.

## 9. Três cenários para 2056

**Provável — o mundo gerado é ferramenta, não lugar.** Em 2056, o modelo de mundo é o que foi o
motor de física: infraestrutura invisível, usada para produzir variedade de treino e
pré-visualização, e cercada por uma camada determinística que é a que assina o laudo. Robôs com
corpo estão em ambiente produtivo em número grande mas não universal — logística, montagem,
agricultura, inspeção —, quase sempre com um humano remoto no circuito, em turno global, pago por
hora e medido por intervenções. Quem projeta mídia e interação trabalha nos dois lados da mesma
ferramenta sem que isso seja notícia: o mesmo modelo que gera o comercial gera o cenário de treino,
e a diferença está no briefing, não na tecnologia. O ofício se partiu em duas linhas — uma para o
olho humano, outra para a transferência medida — e a segunda paga melhor. A cidade mudou pouco; a
fábrica mudou muito. *Sinal precoce de que estamos entrando neste cenário*: a arquitetura híbrida
(`e4.1`) virar a configuração padrão dos toolkits, e não um arranjo de quem tem dinheiro.

**Desejável — o corpo com dono, o mundo com registro.** Em 2056 existe um acervo comum de
demonstração corporificada, mantido como bem de infraestrutura, alimentado por quem trabalha e
remunerado por isso — o gesto é dado da pessoa, tem base legal e tem preço. Todo ambiente de treino
que sustenta certificação é reproduzível: semente, versão, trajetórias, disponíveis para
investigação independente. O corpo é aberto o bastante para ser consertado, e a política é
auditável o bastante para ser contestada. O Brasil não exporta só hora de teleoperação: exporta
ambiente — o Cerrado, o canavial mecanizado, a cidade densa, o galpão sem clima controlado são
mundos que ninguém mais tem, e são licenciados por quem vive neles. *O que teria de ser feito para
chegar lá*: transformar o registro reprodutível de treino em exigência antes do primeiro acidente
grave, e tratar o corpus comum como política pública e não como cortesia de plataforma — as duas
coisas são decisões dos próximos dez anos, não de 2050. *Sinal precoce*: a primeira norma que
exija semente e versão do ambiente de treino, sem que tenha havido acidente para motivá-la.

**Indesejável — mundo alugado, gesto capturado, ninguém responsável.** Em 2056 o ambiente de treino
é serviço de três fornecedores, o corpo é fechado, a política é regionalizada por bloco e o robô
importado chega sem o que o faz funcionar. O gesto humano foi capturado em escala por quem tinha
câmera em casa e no trabalho, sem contrapartida e sem regime jurídico claro. Quando algo dá errado,
a cadeia de responsabilidade se dissolve entre quem fez o corpo, quem treinou a política, quem
gerou o mundo e quem operava remotamente — e, na prática, responde o operador humano na ponta, que
é quem tem nome e CPF. A régua do que conta como "física correta" é um comitê privado. Quem projeta
mundo virou fornecedor de dado para três compradores. *Sinal precoce deste cenário*: o momento em
que um contrato de integração passar a incluir cláusula de propriedade do dado **em favor do
fornecedor por padrão** (`e6.1` resolvido para um lado só), e ninguém achar isso estranho.

## 10. O experimento

**O que é.** Uma bancada de transferência chamada *O mesmo lugar, dois públicos*. Monta-se **um
cenário em duas versões**: (a) escrito à mão num simulador determinístico leve — o `MetaDrive`, que
foi a escolha número 1 de desenvolvimento da turma, ou o `habitat-sim` para navegação em
interiores; (b) gerado por modelo de mundo, a partir de descrição em texto, com as ferramentas que
estiverem acessíveis (preview de modelo de mundo, ou geração de variação visual sobre a cena
determinística quando o acesso direto não existir). Treina-se a **mesma política** nas duas
versões, com o mesmo orçamento de passos, e avalia-se as duas **num terceiro cenário que nenhuma
das duas viu**. Em paralelo, a turma avalia os dois mundos como mundos: qual é mais agradável,
mais legível, mais interessante de percorrer.

**Que pergunta sobre o futuro ele responde.** A pergunta de `e2`, que é a pergunta central deste
mapa para quem projeta mídia e interação: **o mundo que agrada ao humano é o mundo que treina bem
a máquina?** Se as duas medidas andarem juntas, o ofício de desenhar mundo continua sendo um só, e
quem tem bom olho tem valor novo. Se andarem separadas — ou se forem opostas —, o ofício se parte,
e o mapa está certo ao prever duas linhas de produção (`e2.2.1`).

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa modelo de mundo gerativo
condicionado à ação e política de aprendizado por imitação ou reforço sobre biblioteca aberta
(linhagem LeRobot). **Não dá com tecnologia madura** por uma razão precisa: com simulador
determinístico só, a única coisa que se pode variar é o que alguém escreveu — a variedade é
inventário, e o experimento viraria um teste de randomização de domínio, que já se sabe fazer
desde 2017. A pergunta exige uma fonte de variedade que **ninguém desenhou item a item**, e é isso
que o modelo de mundo traz de novo. O segundo requisito emergente é a política transferível: sem
ela, cada cenário exigiria um controlador próprio e não haveria "mesma política" para comparar.

**O que a turma faz quando testar em sala.** Três rodadas de vinte minutos. (1) Cada pessoa
percorre os dois mundos sem saber qual é qual e responde três perguntas — qual é mais coerente,
qual é mais interessante, em qual erraria menos. (2) Assiste às curvas de aprendizado lado a lado e
aposta, antes de ver o resultado final, em qual mundo produziu a política melhor. (3) Discute os
casos em que a aposta errou — que é onde está o conteúdo da aula, porque errar a aposta é a
evidência direta de que os dois públicos julgam mundo por critérios diferentes. O material de
avaliação (apostas registradas antes do resultado) vira dado da própria turma.

**O resultado que me faria mudar de ideia.** Se o juízo estético humano e a transferência medida
tiverem **correlação forte e positiva** — mundo que a turma acha melhor é consistentemente o que
treina melhor —, então `e2`, `e2.2` e `e2.2.1` caem, e com eles a tese de que o ofício se parte. O
mapa passaria a dizer o contrário: que desenhar bem para humano é desenhar bem para máquina, e que
a chegada da IA física **valoriza** o ofício existente em vez de reorganizá-lo. Esse resultado é
plausível o bastante para que o experimento valha a pena, e é por isso que ele é experimento e não
demonstração.

## 11. Fontes

Quinze páginas efetivamente abertas e lidas em 22/09/2026. O que não abriu está na seção 12.

1. NVIDIA — *NVIDIA Launches Cosmos 3, the Open Frontier Foundation Model for Physical AI*
   (31/05/2026). https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai
   Sustenta: existência e data do Cosmos 3, natureza de omnimodelo com ação, distribuição aberta,
   alegação de redução de ciclo, e a composição da Cosmos Coalition (Runway, Black Forest Labs,
   LTX, Skild AI, Agile Robots, Generalist) — base da convergência da seção 5.
   Confiabilidade: é comunicado do fabricante; as alegações de desempenho são autodeclaradas e
   foram tratadas como alegação, não como medida. A composição da coalizão é fato verificável.

2. Google DeepMind — *SIMA 2: an agent that plays, reasons and learns with you in virtual 3D
   worlds* (13/11/2025). https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/
   Sustenta: agente generalista operando em mundos gerados pelo Genie 3, auto-melhoria por
   tentativa e erro, e as limitações declaradas (horizonte longo, memória, controle fino).
   Confiabilidade: blog de laboratório, com as limitações declaradas pelos próprios autores — o
   que aumenta a confiança no que afirma e mantém o viés de seleção de resultados.

3. Google DeepMind — *Genie 3: a new frontier for world models* (05/08/2025).
   https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/
   Sustenta: 720p, 24 fps, coerência de alguns minutos, memória de cerca de um minuto, status de
   research preview e as limitações (multiagente, geografia real, texto).
   Confiabilidade: idem — laboratório declarando limitação própria.

4. humanoid.guide — *Humanoid deployments in 2026 favor Figure and Agility*.
   https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/
   Sustenta: todos os números de implantação verificada usados na seção 3, e a separação explícita
   entre dado reportado pela empresa e alegação em circulação.
   Confiabilidade: publicação especializada cuja metodologia declarada é justamente distinguir o
   reportado do alegado — é a razão de eu preferi-la a fontes com números maiores.

5. Special Competitive Studies Project — *ISF Voices 2026: The Robotics Data Gap*.
   https://scsp222.substack.com/p/isf-voices-2026-the-robotics-data
   Sustenta: custo de plataforma de teleoperação, demonstrações por trabalhador, salário do
   teleoperador, escala dos centros chineses, projeção do mercado de anotação.
   Confiabilidade: **a mais fraca desta lista, e a única de tese**. É publicação de think tank de
   política tecnológica, com posição declarada na competição EUA-China. Os números de capacidade
   dos centros chineses não encontrei confirmados em outro lugar — foi o motivo direto do
   rebaixamento de `e11` na seção 7.

6. WorldBench: *Benchmarking Physical Understanding of World Models by Isolating Physics Concepts*,
   arXiv 2601.21282 (versão de 18/08/2026). https://arxiv.org/html/2601.21282
   Sustenta: a lacuna entre realismo visual e parâmetro físico; a lista de modelos avaliados
   (família Cosmos, Wan 2.2, Hunyuan, CogVideoX, Kling 3.0, Runway Gen-4.5, LTX-2.0); a conclusão
   de que nenhum tem consistência para interação confiável. É a âncora empírica do pré-mortem 1.
   Confiabilidade: preprint com método declarado e avaliação por conceito isolado; não consta
   revisão por pares. Alta para o que afirma, moderada como veredito de campo.

7. *A Definition and Roadmap for World Models*, arXiv 2607.06401 (08/07/2026).
   https://arxiv.org/pdf/2607.06401
   Sustenta: a distinção entre geração de vídeo e modelo de mundo (contrafactual, planejamento,
   controle) e a lista de problemas em aberto.
   Confiabilidade: preprint de levantamento; serve como definição de referência, não como medida.

8. *RoboDojo: A Unified Sim-and-Real Benchmark for Generalist Robot Manipulation Policies*,
   arXiv 2607.04434. https://arxiv.org/abs/2607.04434
   Sustenta: existência do benchmark, 42 tarefas em simulação e 18 reais, as cinco dimensões
   avaliadas, e a intenção de expor política a condição de campo. **Não** sustenta taxa de
   sucesso — ver seção 8, item 3.
   Confiabilidade: resumo de preprint; li o resumo, não o artigo completo (o PDF excedeu o limite
   da ferramenta), e o mapa não depende de nenhum número interno dele.

9. *LeRobot: An Open-Source Library for End-to-End Robot Learning*, arXiv 2602.22818 (26/02/2026).
   https://arxiv.org/html/2602.22818v1
   Sustenta: 16 mil+ datasets, 2.200+ contribuidores, 1 milhão+ de episódios, 7 milhões+ de
   downloads, preços dos corpos (SO-100 ~€225, ALOHA ~€21.000), e o fato de o maior volume de
   download não vir de plataforma nativamente integrada — o sinal fraco 4.
   Confiabilidade: preprint dos próprios mantenedores; os números de comunidade são autorreportados
   mas verificáveis na plataforma.

10. i-scoop — *ISO 25785-1 explained and what it means for humanoid robot safety*.
    https://www.i-scoop.eu/iso-25785-1-explained-and-what-it-means-for-humanoid-robot-safety/
    Sustenta: escopo da norma (estabilidade ativamente controlada), status de rascunho em 2026,
    estimativa de 18 a 36 meses até ratificação, itens cobertos (queda, perda de energia, força de
    contato, zoneamento), e a existência do primeiro seguro de humanoide na China em 2025.
    Confiabilidade: publicação de análise setorial; a estimativa de prazo é de "especialistas da
    indústria", sem fonte nomeada — tratada como estimativa, e é a base do prazo de `e3`.

11. Pollux — *Robôs humanoides na indústria: promessa distante ou próxima fronteira da automação?*
    https://pollux.com.br/robos-humanoides-na-industria-promessa-distante-ou-proxima-fronteira-da-automacao/
    Sustenta: a leitura brasileira do gargalo ("nunca foi a tecnologia: é o custo de capital e a mão
    de obra qualificada"), a expectativa de chegada alguns anos após a fronteira global, e a
    percepção de encurtamento de prazo de cinco para três ou quatro anos.
    Confiabilidade: é integradora de automação falando do próprio mercado — interessada, e por isso
    usada para *leitura de contexto*, não para número.

12. International Federation of Robotics — *Robot Density Surges in Europe, Asia, and Americas*
    (08/04/2026). https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas
    Sustenta: média global de 132 robôs por 10 mil empregados e as densidades por país usadas na
    seção 3 e na classe de referência de R3.
    Confiabilidade: a melhor série estatística disponível para robô industrial. Não traz o Brasil
    neste release, e essa ausência está declarada.

13. Robotics Center — *State of Robotics Brazil 2026*.
    https://www.roboticscenter.ai/state-of-robotics-brazil-2026
    Sustenta: 18 robôs por 10 mil trabalhadores no Brasil (350 no automotivo), mercado de R$ 8,2 bi,
    crescimento de investimento de 52% em 2025, ~45 mil drones agrícolas, mecanização de cana acima
    de 95% em São Paulo, e os atores nacionais citados.
    Confiabilidade: levantamento setorial sem metodologia detalhada aberta; discorda da IFR na
    média global (151 contra 132) — divergência registrada na seção 8. Usado para ordem de
    grandeza, não para precisão.

14. Wikipédia — *Gemini Robotics*. https://en.wikipedia.org/wiki/Gemini_Robotics
    Sustenta: a cronologia das versões (12/03/2025 Gemini Robotics e ER; 24/06/2025 On-Device;
    30/07/2026 ER 2 com vídeo em tempo real, rastreio de progresso e colaboração multi-robô) e os
    parceiros de acesso inicial.
    Confiabilidade: fonte terciária, usada só para datas e nomes, que são o tipo de fato que ela
    sustenta bem. Nenhuma alegação de desempenho foi tirada daqui.

15. Odyssey — *Introducing Odyssey-1: a playable world model* (28/05/2025).
    https://odyssey.systems/introducing-odyssey-1
    Sustenta: quadro a cada 40 ms, até 30 fps, coerência de cinco minutos ou mais, e o número que
    mais usei no mapa — **US$ 1-2 por hora de usuário**. Sustenta também o argumento da empresa de
    treinar em vídeo do mundo real em vez de ambiente de jogo.
    Confiabilidade: página da própria empresa; o custo é autodeclarado e foi usado como ordem de
    grandeza (é o único preço unitário público que encontrei), não como referência de mercado.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2056/09-agentes-corporificados-ia-fisica-e-modelos-de-mundo/tendencia-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md --links
```

Saída inteira, sem corte:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 25 (frontmatter diz 25)
efeitos ordem 3: 23 (frontmatter diz 23)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 3 · media 11 · baixa 0
confiança ordem 2: alta 0 · media 15 · baixa 10
confiança ordem 3: alta 0 · media 0 · baixa 23
  link não responde: https://www.i-scoop.eu/iso-25785-1-explained-and-what-it-means-for-humanoid-robot-safety/
links da seção 11: 14/15 respondem (frontmatter diz fontes: 15)
RESULTADO: 1 problema(s) — corrija antes de entregar
```

**O único problema apontado, e por que não o "corrigi".** O link da fonte 10 (i-scoop) responde,
mas recusa o user-agent do verificador. Conferido na mesma sessão:

```
curl -o /dev/null -s -w "%{http_code}" -L --max-time 15 -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36" "https://www.i-scoop.eu/iso-25785-1-explained-and-what-it-means-for-humanoid-robot-safety/"
→ 200

python3 -c "import urllib.request; urllib.request.urlopen(urllib.request.Request('https://www.i-scoop.eu/...', headers={'User-Agent':'Mozilla/5.0'}))"
→ HTTP Error 403: Forbidden
```

A página foi aberta e lida nesta rodada. Removê-la da seção 11 deixaria o verificador verde
mentindo: a norma ISO 25785-1 sustenta `e3` e o prazo dele. Mantida, com o 403 declarado aqui.
A alternativa — citar a página da própria ISO (`iso.org/standard/91469.html`) — foi descartada
porque **eu não a abri**, e a seção 11 só aceita o que foi aberto. Fica como recomendação para o
verificador: enviar user-agent de navegador, já que o filtro é de UA e não de disponibilidade.

Este tratamento não é escolha desta rodada: é o que manda a decisão em vigor **TMI-0120**
(`docs/decisoes/0124-verificador-links-falso-negativo-cloudflare.md`), tomada em 22/09/2026 na
rodada `giordano-h2041` do mesmo tema 09, sobre exatamente esta URL — manter a fonte, colar a
saída do verificador como ela saiu e acrescentar a checagem cruzada no anexo. A decisão vizinha
`TMI-0115` (citar cobertura alternativa) **não** se aplica aqui, porque ela trata do caso em que o
`curl` também reprova; aqui o `curl` aprova.

### 12.2 Premissas assumidas (o briefing não cobria tudo)

O bloco `briefing:` veio completo nos sete itens da entrevista do §0, então **não houve
rebaixamento de confiança por ausência de entrevista**. O que o briefing não cobria e eu assumi,
declarado aqui e na seção 2:

- **Profundidade de fonte**: assumi que "busca na web: true" significa abrir e ler, não citar de
  resumo. Foi a regra mais cara desta rodada — três páginas relevantes ficaram de fora.
- **Nota sobre o Brasil**: o briefing pedia recorte global "com uma nota sobre o Brasil". Escolhi
  colocá-la onde ela tem mecanismo (`e11.1`, venda de hora de teleoperação; e os números de
  densidade e drones agrícolas na seção 3) em vez de num parágrafo separado — uma nota solta seria
  o tipo de efeito genérico que a skill proíbe.
- **Quantas raízes**: o briefing não dizia. Escolhi três, e a seção 7 declara que elas **não** têm
  peso igual (R2 é condicionante).
- **O que "descartado" cobre**: a régua "o que já é comum em produto de massa" foi aplicada
  literalmente, e foi ela que recusou simulação acelerada por GPU, ROS/SLAM e o humanoide como
  fator de forma.

### 12.3 Efeitos cortados na bateria da seção 7

**`e5.2.1` — "Recusar a captura do próprio ambiente passa a ter preço explícito na fatura do
serviço doméstico."** (era ordem 3, sinal fraco, prazo 2050, confiança baixa)
Motivo do corte: teste da causa solta (§3.10). Cobrança por não ceder dado doméstico já é prática
estabelecida em outros mercados digitais e aconteceria igual sem nenhuma relação com IA física ou
modelo de mundo. Não deriva desta raiz.

**`e9.2.1` — "A cidade passa a ter duas camadas de legibilidade, e o conflito entre elas vira pauta
de acessibilidade."** (era ordem 3, sinal fraco, prazo 2050, confiança baixa)
Motivo do corte: mesma falha. A cidade já está ganhando camada legível por máquina por causa de
logística, veículo autônomo e pagamento — remover a raiz "agente corporificado" não muda nada no
enunciado.

### 12.4 Efeitos que não chegaram ao bloco `roda:`

Escritos no rascunho e descartados antes da versão final, com o motivo:

- *"Cursos de design de jogos reorganizam o currículo em torno de treino de agente."* — Proibido
  explicitamente pela skill sem nome de curso e mecanismo. Tentei nomear e não consegui sustentar
  com fonte: não achei um único programa que já faça isso. Virou, em forma aceitável, `e7.2.1`
  (prototipagem de interação física como prática de curso de projeto), que pelo menos tem o
  mecanismo do preço do corpo.
- *"Reguladores criam categoria jurídica nova para agente corporificado."* — Genérico; serve a
  qualquer tema de IA. O que sobrou com mecanismo específico foi `e3` (auditoria do mundo de
  treino, ancorada no fato de a ISO 25785-1 regular estabilidade ativamente controlada, que é
  propriedade da política) e `e12.1.1` (gesto como dado biométrico).
- *"Surge a profissão de curador de política robótica."* — Proibido pela mesma razão ("surge uma
  nova profissão"). O que sobreviveu foi `e8.1`, que tem nome, mecanismo e preço: teleoperador de
  plantão, arbitrado por fuso e por país.
- *"Museus e parques geram cenário ao vivo por modelo de mundo."* — Bonito e sem teste de
  especificidade: decorre de geração de vídeo em tempo real, não de IA física, e serviria igual ao
  tema 12 (mídia sintética controlável). Cortado por invadir tema vizinho.
- *"O consumo energético do treino corporificado vira pauta ambiental."* — Cortado por falta de
  mecanismo específico: não achei fonte aberta que distinguisse o consumo de treino corporificado
  do consumo de IA em geral. É a razão declarada de a perna ecológica do STEEP ficar fina.
- *"Robô doméstico geral chega ao consumidor."* — Cortado porque é aposta de produto, não efeito
  com mecanismo, e porque a classe de referência (carro autônomo, VR de consumo) não sustenta
  prazo defensável dentro do horizonte.
- *"O modelo de mundo substitui o motor de jogo no desenvolvimento comercial de jogos."* — Cortado
  por contradizer `e4`: a conta de US$ 1-2 por hora de usuário não fecha para um jogo com milhões
  de horas jogadas. Sobrou como a versão honesta, `e4.1` (arquitetura híbrida).

### 12.5 Buscas feitas e o que cada uma rendeu

Doze buscas, em português e inglês, em 22/09/2026.

| Busca | Rendeu |
|---|---|
| `NVIDIA Cosmos world foundation model 2026 physical AI release` | fonte 1; data e composição da coalizão |
| `vision-language-action model robot foundation model 2026 pi0 Gemini Robotics GR00T` | contexto de arquitetura (System 1/System 2, difusão de ação); nenhuma página aberta virou fonte — o conteúdo útil estava em blogs secundários, e as datas foram buscadas na fonte 14 |
| `humanoid robot shipments 2026 deployment numbers Figure Unitree Optimus` | fonte 4; e o contraste entre alegação e verificado (seção 8, item 1) |
| `sim-to-real gap 2026 robot learning benchmark generalization failure` | fonte 8; e o número de 12,8% que **não** consegui verificar |
| `DeepMind SIMA 2 Genie world model generalist agent 3D environments 2026` | fontes 2 e 3 |
| `regulation humanoid robot safety standard ISO 25785 liability 2026` | fonte 10; e o seguro de humanoide na China (sinal fraco 5) |
| `robótica humanoide Brasil 2026 automação indústria IA física` | fonte 11; muito resultado de conteúdo promocional, pouca substância |
| `teleoperation data collection robot demonstrations cost bottleneck 2026 scaling laws robotics` | fonte 5 — a busca mais produtiva do conjunto, e a que gerou a raiz R3 |
| `world models criticism limits 2026 world model physics consistency Physics-IQ benchmark` | fontes 6 e 7 |
| `game engine licensing AI training synthetic data Unreal Unity terms 2026 robotics simulation` | **nada útil.** Procurava evidência de cláusula de licença de motor vedando uso como dado de treino — a hipótese de bloqueio da R1. Só devolveu comparação de royalties e preço de assento. A hipótese permanece no mapa como *incentivo declarado do bloqueador*, sem evidência de que já esteja sendo exercido. É a lacuna mais relevante desta rodada |
| `robot injury incident investigation 2026 autonomous robot accident cause simulation` | lesões de motorista de teste de robotáxi (sinal fraco 6); a reportagem não abriu (403) |
| `LeRobot Hugging Face open robotics dataset 2026 community robot learning adoption` | fonte 9 |
| `IFR World Robotics 2026 robot density Brazil` | fontes 12 e 13, e a divergência 132 × 151 |
| `playable world model game 2026 product generative interactive world entertainment Odyssey Decart` | fonte 15; e a menção ao Odyssey-3 (15/09/2026) como modelo único para braço robótico, veículo, dron, agente e videogame — usada na seção 5 como evidência da convergência, mas **a página do Odyssey-3 não foi aberta**, só a do Odyssey-1 |

### 12.6 Páginas que não abriram

- `https://arxiv.org/pdf/2607.04434` (RoboDojo, PDF) — excedeu o limite de tamanho da ferramenta.
  Li o resumo em `arxiv.org/abs/2607.04434`, que é a fonte 8.
- `https://arxiv.org/pdf/2606.18943` (*Physics-IQ Verified*) — excedeu o limite de tamanho.
  Consequência: o sinal fraco 2 está declarado como "existe o trabalho", sem afirmação sobre o
  conteúdo dele.
- `https://techcrunch.com/2026/08/27/sprains-pain-and-whiplash-waymo-and-zoox-test-drivers-are-getting-hurt-as-robotaxis-scale/`
  — HTTP 403. Consequência: o sinal fraco 6 não tem fonte na seção 11.
- `https://www.technology.org/2026/07/18/humanoid-robots-in-2026-what-is-actually-deployed/`
  — HTTP 403. Os números de implantação vieram da fonte 4, que cobre o mesmo terreno.
- `https://odyssey.ml/introducing-odyssey-1` — redirecionamento 308 para `odyssey.systems`, que é
  o que consta como fonte 15.

### 12.7 Números que circularam e NÃO entraram no mapa

Registrados para que ninguém os reintroduza numa rodada futura achando que foram esquecidos:

| Número | Origem | Por que ficou de fora |
|---|---|---|
| "Mais de 1.000 Optimus Gen 3 em fábricas da Tesla desde jan/2026"; "meta de ~100 mil em 2026"; "1 milhão/ano em 2028" | resumo de busca | A fonte 4 registra que a Tesla nunca publicou contagem e que a produção em Fremont não havia começado em jul/2026 |
| "Tesla passou de 50.000 Optimus acumulados"; "Figure tem 10.000 implantações" | resumo de busca | A fonte 4 registra explicitamente que não vêm das empresas |
| "12,8% de sucesso da melhor política em 18 tarefas reais; 22,9 de escore; 100% de teleoperação humana" | resumo de busca, atribuído ao RoboDojo | Não consta do resumo que abri; PDF não abriu |
| "Queda de desempenho de 24-30% na transferência sim-para-real" | resumo de busca, atribuído a estudo empírico com VLA | A página não foi aberta; a afirmação qualitativa equivalente está sustentada pela fonte 8 |
| "mIoU de primeiro plano degrada após 5-9 quadros" | resumo de busca, atribuído ao WorldBench | Não está no artigo que abri (fonte 6) |
| "Cosmos 3 treinado em 20 trilhões de tokens, ~1 bilhão de imagens, 400 milhões de vídeos" | resumo de busca | O comunicado que abri (fonte 1) diz "bilhões de amostras" sem detalhar; usei a formulação do comunicado |
| "Mercado de inteligência corporificada na China chegará a 400 bilhões de RMB (US$ 56,5 bi) até 2030"; "US$ 137 bi de investimento chinês em robótica em duas décadas"; "Tesla embarcou só 150 humanoides em 2025" | fonte 5 | **Estão na fonte que abri**, mas são projeções e comparações da tese do think tank. Não os usei como âncora; foram o motivo do rebaixamento de `e11`, não a sua justificativa |
| "Média global de 151 robôs por 10 mil trabalhadores" | fonte 13 | Conflita com os 132 da IFR (fonte 12). Registrei as duas na seção 3 e a divergência na seção 8 |

### 12.8 Caminhos abandonados

- **Uma quarta raiz: "a convergência dos pipelines de mídia e de robótica".** Chegou a ser
  escrita. Descartada porque não passa no teste de independência do §6.4: se R1 e R3 não
  acontecerem, ela não acontece — é *resultado* das duas, não origem. Promovida ao lugar certo: é
  a **convergência** nomeada na seção 5, que a skill trata como o achado mais valioso de um mapa.
  Mantenho a decisão, mas registro a dúvida: um revisor pode argumentar, com razão, que treinar
  robô em motor de jogo (AirSim, Isaac sobre Unreal) já é essa convergência desde 2017, e que
  portanto ela **tem** vida própria. Se ele estiver certo, o mapa tem quatro raízes e a quarta
  está mal alojada.
- **Uma raiz sobre "o corpo entra no raciocínio"** (a leitura do `ROSClaw`, citado no material da
  disciplina: restrição física como parte do modelo de execução). Descartada por sobreposição com
  R2 — é uma propriedade das arquiteturas VLA, não uma ruptura separada. Não encontrei fonte
  aberta sobre o ROSClaw nesta rodada.
- **Tratar o enxame de drones como ramo próprio** (o wildcard trazido pela turma). Descartado por
  fronteira: coordenação de enxame é problema de multiagente, mais próximo do tema 6, e puxaria o
  mapa para fora do objeto declarado na seção 2. Sobrou como contexto na seção 3 (45 mil drones
  agrícolas no Brasil), que é onde ele tem número.
- **Um ramo sobre robô doméstico e cuidado.** Descartado por falta de âncora: não achei nesta
  rodada dado de implantação em ambiente doméstico que não fosse aspirador (maduro) ou demo.

### 12.9 O que este mapa faria diferente com horizonte de 2031

*Subseção fixa das rodadas longas, por **TMI-0059**: o valor da escada 2036/2041/2046/2056 só
existe se cada degrau disser o que o degrau padrão veria.*

**Quantos efeitos sobreviveriam.** Dos 62 efeitos do bloco `roda:`, **seis** têm prazo dentro de
2031: `e8` (2030, o humano permanece no circuito), `e11` (2030, fábrica de dado como
infraestrutura estratégica), `e1.2` (2030, casa de mídia vendendo para robótica), `e7.2` (2030,
preço de entrada cai a ponto de estúdio pequeno rodar robô real), `e4` (2031, o custo por hora
trava a substituição do motor escrito) e `e13` (2031, o custo do dado empurra para o sintético).
Os outros 56 ficariam fora da janela. Com horizonte 2034 seriam 19 — o que mostra que a densidade
do mapa está em 2034-2048, não nas pontas.

**Quantas raízes sobreviveriam: as três, e nenhuma com o mesmo peso.** Cada uma mantém exatamente
dois efeitos dentro de 2031, mas o que sobra delas é desigual. **R2** e **R3** sobrevivem como
raízes de verdade: têm efeito de primeira ordem datado dentro da janela, com sinal forte e
evidência de 2026. **R1** sobrevive no papel e não na prática — seus dois efeitos dentro de 2031
são `e4`, que é a *retroação* que a freia, e `e1.2`, que é de segunda ordem. Num mapa de 2031, a
R1 seria honestamente rebaixada a **contexto da seção 3**, e o critério do §2 a recusaria: em
cinco anos, mundo gerado não rompe ofício nenhum.

**O que mudaria de ordem.** A cadeia inteira se acharia. `e1.2` e `e7.2`, que aqui são de segunda
ordem, seriam lidos como de primeira — em cinco anos não há distância causal para três níveis, e
a roda de 2031 teria um nível e meio, não três. Os efeitos de terceira ordem deste mapa
(2042-2052) não existiriam em nenhuma ordem: não são "o mesmo mais tarde", são consequências de
efeitos que ainda não teriam acontecido.

**Qual seria o teto de confiança.** Subiria, e essa é a troca. Os seis efeitos que sobrevivem têm
confiança `alta` (três: `e4`, `e8`, `e13`) ou `media` (três), sem nenhuma `baixa` — contra as 23
confianças `baixa` de terceira ordem deste mapa. Um mapa de 2031 do mesmo tema fecharia com
`confianca: alta` no frontmatter, contra a `media` deste. **E seria um mapa pior para a pergunta
do tema**: as três confianças altas são todas retroações — o que trava, o que freia, o que custa.
Um mapa de 2031 diria, com razão e com segurança, que até 2031 a IA física não transforma o ofício
de ninguém; o que ele não conseguiria dizer é o que este aqui existe para explorar, que é o que
acontece **depois** que essas três travas cedem.

**O que se perde ao encurtar.** A convergência da seção 5 — casas de mídia e casas de robótica
virando uma indústria só — sobrevive pela metade: `e1.2` está dentro de 2031, mas `e1.2.1` (a
dissolução institucional) está em 2044. O achado do mapa, para o público de mídia e interação,
**só é visível em horizonte longo**. Este é o argumento mais forte a favor da escada de TMI-0053
que encontrei nesta rodada.

### 12.10 O que uma rodada futura deveria buscar primeiro

1. **Cláusula de licença de motor e de acervo de vídeo sobre uso como dado de treino.** É a lacuna
   da busca 10 e o teste direto do bloqueador declarado da R1. Se já existir cláusula em contrato
   de Unreal, Unity ou de banco de imagem, `e5` sobe de fraco para médio.
2. **O artigo completo do RoboDojo**, por outro caminho de acesso, para resolver a taxa de sucesso
   real — o número que mais falta a este mapa.
3. **A página do Odyssey-3 (15/09/2026)**, que segundo o resumo de busca oferece um único modelo
   para braço robótico, humanoide, veículo, dron, treino de agente e videogame. Se isso se
   confirmar na fonte primária, é a evidência mais forte da convergência e `e1.2` pode subir de
   media para alta.
4. **Cadeia de suprimento física** — atuador, redutor, ímã, bateria, tato durável. É o buraco
   declarado do pré-mortem 3 e o candidato mais forte a derrubar o mapa inteiro.
5. **O status da ISO 25785-1** depois do fim de 2026: se ratificar, `e3` ganha data firme; se
   atrasar, o prazo de 2034 precisa ser empurrado.
6. **Dado brasileiro de primeira mão** — a divergência 132 × 151 e a ausência do Brasil no release
   da IFR sugerem que a série nacional precisa vir da Abimaq, da CNI ou da própria IFR em
   publicação paga, não de levantamento secundário.
