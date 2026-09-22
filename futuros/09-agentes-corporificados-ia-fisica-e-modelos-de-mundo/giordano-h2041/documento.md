---
tema: Agentes corporificados, IA física e modelos de mundo
slug: agentes-corporificados-ia-fisica-e-modelos-de-mundo
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-22
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 15
efeitos_ordem_2: 27
efeitos_ordem_3: 30
tecnologias_citadas: ["Genie 3", "SIMA 2", "Dreamer 4", "NVIDIA Cosmos 3", "Cosmos Reason 2", "Cosmos Transfer 2.5", "Cosmos Predict 2.5", "Isaac GR00T N1.6", "Isaac Lab", "Isaac Lab-Arena", "Isaac Sim", "MuJoCo", "MJX", "Genesis", "MetaDrive", "AirSim", "habitat-sim", "drake", "MoveIt 2", "OMPL", "ROS 2", "pi0.5", "pi0.7", "Gemini Robotics 1.5", "Odyssey Starchild-1", "Odyssey Agora-1", "GameNGen", "Oasis", "Open X-Embodiment", "DROID", "ALOHA", "GELLO", "UMI", "WorldModelBench", "CRONOS", "ISO 25785-1", "Jetson T4000", "OpenMDW 1.1"]
fontes: 12
confianca: media
experimento: O mesmo agente em três mundos — jogo, simulador e ferramenta — com o mundo editado como variável
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A IA ganhou corpo, mas a novidade de 2026 não é o corpo: é o **lugar onde ela aprende**. Três
coisas passaram a existir ao mesmo tempo — modelos que **geram** o ambiente em vez de renderizar
um ambiente escrito à mão (Genie 3, Cosmos 3), agentes que aprendem **inteiramente dentro** desse
ambiente imaginado sem tocar o original (Dreamer 4 obteve diamantes no Minecraft só com dado
offline), e agentes generalistas que operam qualquer mundo 3D **pela interface humana**, sem
acesso ao código (SIMA 2). Some-se a isso a descoberta econômica do ano: o gargalo da robótica
deixou de ser o algoritmo e passou a ser a **hora de corpo humano gravada** — rig, operador,
episódio aproveitável, preço por hora. Deste conjunto derivam quatro rupturas e setenta e dois
efeitos até 2041, entre os quais: o cenário de teste vira prompt versionado e não arquivo de
cena; o corpo do robô vira commodity enquanto a política vira a marca; projetar mundo passa a ser,
em parte, projetar currículo de treino, com dois destinatários que já não enxergam a mesma
affordance; e o movimento humano vira ativo com dono, preço e disputa sindical. O mapa também diz
onde provavelmente erra: modelos de mundo geram vídeo plausível, não física conservativa, e a
régua de segurança (ISO 25785-1) pode congelar tudo isso num nicho industrial por uma década, como
o robotáxi ficou.

## 2. O tema

O objeto deste mapa é **o agente com corpo e o mundo em que ele aprende** — não a captura do real
em 3D (tema 10), não a visão de vocabulário aberto (tema 11), não a simulação de sociedades
(tema 6). Aqui a pergunta é outra: quando a maior parte do aprendizado de uma máquina com corpo
acontece dentro de um mundo que outra máquina inventou, o que muda para quem projeta mídia e
interação.

Encosta em mídia e interação por três costuras, e nenhuma delas é metáfora:

1. **A engine de jogo virou infraestrutura de treino.** AirSim roda sobre Unreal; Isaac Sim é um
   renderizador com física; SIMA 2 aprende em *Goat Simulator 3* e *No Man's Sky*. O software que
   a disciplina estuda como mídia é literalmente o aparato de formação de robôs.
2. **O mundo gerado é, ao mesmo tempo, mídia e aparelho.** Genie 3 produz um ambiente navegável a
   24 fps a partir de um parágrafo; Odyssey transmite vídeo interativo quadro a quadro. A mesma
   peça técnica serve para entreter uma pessoa e para treinar um agente — e quem projeta uma
   está projetando a outra sem saber.
3. **O agente passou a ser um segundo usuário do mesmo espaço.** SIMA 2 não usa API: lê pixels e
   manda teclado e mouse. Isso põe no mesmo mundo um destinatário humano e um destinatário
   máquina, com affordances que deixam de coincidir. É problema de design de interação, não de
   robótica.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Um levantamento
responderia "quais simuladores existem" — e a resposta já existe, em 241 itens, na varredura da
turma. O que um levantamento não responde é o que muda de natureza: o ambiente deixa de ser
**artefato autoral, determinístico e auditável** e passa a ser **saída de modelo, estocástica e
opaca**. Essa troca redefine ofício (quem projeta ambiente), contrato (quem responde pelo erro),
ativo (o que vale numa empresa de robótica) e prova (o que conta como teste). Nada disso se lê
numa lista de ferramentas.

**Premissas deste mapa, declaradas.** O briefing cobriu horizonte (2041), público (quem projeta
mídia e interação), recorte (global com nota sobre o Brasil), viés (neutro), descarte inicial (o
que já é comum em produto de massa) e o falseador (evidência de adoção além da maioria inicial de
Rogers, ou de que a tecnologia só melhora o que existe). O que o briefing **não** cobriu e eu
assumi: (a) "quem projeta mídia e interação" inclui estúdio de jogo, design de produto digital e
pesquisa de interação em universidade, não inclui engenharia de controle; (b) o mapa trata de
horizonte 2041 como janela, então efeitos de terceira ordem podem passar de 2041 e dois passam —
estão marcados; (c) o recorte global usa dado predominantemente EUA-China, porque é onde há número
publicado, e a nota sobre o Brasil vem de uma fonte só. Ver §12.2.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 22/09/2026, com 16 buscas em português e inglês e 12 fontes
efetivamente abertas (§11). Nenhum rebaixamento de confiança por falta de busca.

### 3.1 O que já existe e funciona

**Mundo gerado em tempo real, para pessoa.** Genie 3 (Google DeepMind, 05/08/2025) gera mundos
navegáveis a partir de texto, a **24 quadros por segundo, em 720p**, mantendo consistência por
"vários minutos", com memória visual que a própria DeepMind descreve como alcançando "até um
minuto atrás". Está fora do laboratório: virou o Project Genie, acessível a quem assina o plano
AI Ultra da Google (US$ 250/mês, EUA, 18+).

**Agente que aprende dentro do mundo imaginado.** Dreamer 4 (Hafner, Yan e Lillicrap, arXiv
2509.24527, 29/09/2025) é, pela descrição dos autores, **o primeiro agente a obter diamantes no
Minecraft puramente a partir de dado offline, sem nenhuma interação com o ambiente** — aprendeu
em imaginação, dentro do próprio modelo de mundo, com inferência interativa em tempo real numa
única GPU. Este é o artefato que muda o estatuto da simulação: não é mais onde se testa, é onde
se aprende.

**Agente generalista que opera mundo 3D pela interface humana.** SIMA 2 (DeepMind, 13/11/2025;
relatório em arXiv 2512.04797) roda sobre Gemini, atua em jogos 3D variados sem acesso ao código,
generaliza para títulos inéditos (MineDojo, ASKA), entende instrução composta, esboço, emoji e
várias línguas, e demonstra **auto-melhora**: usa o Gemini para gerar tarefa e recompensa e
aprende sozinho em ambiente novo. E — o dado que liga as duas frentes — **jogou em mundos gerados
por modelo**, não apenas em jogos publicados.

**Modelo de mundo como produto de infraestrutura.** No CES de 06/01/2026 a NVIDIA lançou Cosmos
Transfer 2.5, Cosmos Predict 2.5, Cosmos Reason 2, GR00T N1.6 e o **Isaac Lab-Arena**, um
framework de avaliação e *benchmark* de políticas. A página do Cosmos hoje descreve o Cosmos 3
como *omni-model* Mixture-of-Transformers unificando **texto, imagem, vídeo, som e ação**, com
**pesos abertos sob licença OpenMDW 1.1 da Linux Foundation**, no Hugging Face e no GitHub.
Parceiros nomeados no anúncio: Boston Dynamics, Caterpillar, Franka Robotics, Humanoid, LG
Electronics, NEURA Robotics. Hardware de borda no mesmo anúncio: Jetson T4000, 1.200 FP4 TFLOPS,
64 GB, 70 W, **US$ 1.999** em lote de mil.

**Corpo, em volume mensurável.** Embarques globais de humanoides no 1º semestre de 2026:
**19.100 unidades, +272% em um ano** (Smart Analytics Global, 10/08/2026). AGIBOT 8.400 (44% de
participação, +562%), Unitree 5.900 (31%, +170%), Galbot 900, UBTECH 700, Leju 600. Projeção da
mesma casa para o ano fechado: **~60 mil unidades e US$ 1,6 bilhão de receita**.

**Um mercado de hora de corpo humano.** Coletar demonstração virou serviço com tabela. Rigs:
ALOHA bimanual ~US$ 20 mil (móvel ~US$ 32 mil), GELLO ~US$ 300 por braço líder, VR US$ 500 a
3.500, UMI (de mão, sem robô) abaixo de US$ 1.500, SpaceMouse US$ 150 a 450. Produtividade:
operador iniciante 8 a 12 episódios aproveitáveis por hora, treinado 25 a 40 depois de duas a três
semanas. Custo cheio informado pelo fornecedor: **US$ 28 a 60 por hora**, incluindo salário,
supervisão e amortização de hardware (Dexset, 19/07/2026 — é empresa do ramo, viés declarado).
Acervos de referência: DROID com 76 mil episódios (350 horas), Open X-Embodiment com mais de 1
milhão de trajetórias.

### 3.2 O que existe e ainda não funciona

- **Física.** A própria existência dos *benchmarks* de 2026 — WorldModelBench, CRONOS
  (consistência física contrafactual), PhyScore/LoViF (1.554 vídeos, 7 modelos, 26 categorias) —
  é a evidência de que a violação é comum: mudança irregular de tamanho de objeto, leis de
  conservação quebradas. Modelo de mundo gera **vídeo plausível**, não física conservativa.
- **Duração.** A DeepMind declara, sobre o Genie 3, que ele sustenta "alguns minutos de interação
  contínua, não horas"; que o repertório de ações do agente é limitado; que interação entre vários
  agentes independentes num mesmo ambiente segue em aberto; que não reproduz local real com
  precisão geográfica; e que texto legível só sai quando já vem na descrição do mundo.
- **Horizonte longo e controle fino.** SIMA 2 declara memória curta de interações, dificuldade em
  tarefa multi-etapa longa, e execução imprecisa de ações de baixo nível por teclado e mouse.
- **Prova de transferência.** Dreamer 4 fechou o ciclo num mundo **já discreto e codificado**
  (Minecraft). Não há demonstração equivalente de política de contato rico aprendida só dentro de
  um mundo gerado e transferida ao real.
- **Régua de segurança.** A ISO 25785-1 — robôs móveis industriais de estabilidade ativamente
  controlada, o que inclui bípedes, quadrúpedes e equilibrantes sobre rodas — seguia em **working
  draft no início de 2026**, com estimativa de 18 a 36 meses desde o rascunho de maio de 2025:
  DIS em 2026, publicação no fim de 2026 ou em 2027. Ela cria obrigação de mitigação de queda,
  limitação de força, integração de parada de emergência, zona de queda marcada e registro de
  incidente. E **exclui** explicitamente: declive acima de cinco graus, subterrâneo, atmosfera
  corrosiva ou explosiva, campo magnético forte, temperatura extrema, superfície vertical.
- **Adoção declarada versus adoção verificada.** A página oficial do Cosmos, aberta hoje, **não
  nomeia um só cliente em produção nem publica número de adoção** — fala em "desenvolvedores de
  robótica, veículos autônomos e visão". Registro a ausência porque ela importa: a narrativa de
  ubiquidade vem de material de marketing.

### 3.3 Quem constrói

| Ator | O que traz | Estágio |
|---|---|---|
| Google DeepMind | Genie 3 (mundo gerado), SIMA 2 (agente generalista), Gemini Robotics | demo pública → produto de nicho pago |
| NVIDIA | Cosmos 3 (mundo, pesos abertos OpenMDW 1.1), GR00T, Isaac Sim/Lab/Arena, Jetson | produto, com ecossistema de parceiros |
| Physical Intelligence | família π (π0.5, π0.7) — política generalista | laboratório → piloto |
| AGIBOT, Unitree, UBTECH, Galbot, Leju | corpo, em volume; 1H2026 concentrado na China | produto, 19,1 mil unidades no semestre |
| Figure, Apptronik, Agility, Boston Dynamics | corpo, com contrato industrial no Ocidente | piloto e primeiras operações pagas |
| Comunidade aberta | MuJoCo/MJX, Genesis, MetaDrive, habitat-sim, drake, MoveIt 2, OMPL, ROS 2 | maduro, é a base |
| Estados | China trata robótica como indústria estratégica no 15º Plano (2026-2030); 40+ centros de dado, 20 operacionais | política industrial em curso |

### 3.4 Os números que descrevem a adoção hoje

- Humanoides: **19.100 unidades no 1S2026**, projeção **60 mil** no ano, **US$ 1,6 bi** de receita.
- Comparação que calibra a escala: a receita global projetada de humanoides em 2026 (US$ 1,6 bi) é
  **da ordem do mercado brasileiro inteiro de robótica** (R$ 8,2 bi ≈ US$ 1,6 bi). São duas
  medições independentes de coisas diferentes — a coincidência não significa nada, mas o tamanho
  sim: humanoide ainda é um mercado pequeno.
- Dado: mercado de anotação US$ 4,89 bi (2025) → projeção US$ 17,1 bi (2030); rig de teleoperação
  US$ 50 mil a 150 mil; menos de 200 demonstrações por trabalhador por dia; instalação em Zigong
  (China) com **3 milhões de entradas de dado por ano**; ARM Institute (EUA) com orçamento de
  US$ 30 milhões; Tesla despachou **150 humanoides em 2025** (Phillip An, ISF Voices, 22/06/2026).
- Desenvolvedores: a NVIDIA declara **2 milhões** em robótica e 13 milhões de construtores de IA
  no Hugging Face — número de vendor, não auditado.
- Simulação: MetaDrive roda a mais de 1.000 fps num PC comum; Isaac Sim sustenta 4.096 ambientes
  humanoides paralelos a ~150 mil passos/s numa RTX 4090; MJX trouxe o MuJoCo para GPU/TPU com
  dezenas de milhares de ambientes paralelos.
- **Sem número encontrado** para: quantas políticas em produção foram treinadas majoritariamente
  em mundo gerado (não em simulador escrito); quantos estúdios de jogo usam modelo de mundo em
  produção; downloads do Cosmos 3.

### 3.5 Nota sobre o Brasil

Densidade de robôs: **18 por 10 mil trabalhadores**, contra média global de **151** — e **350** no
automotivo, que sozinho é competitivo com a Europa média. Mercado de R$ 8,2 bilhões em 2026, com
investimento de R$ 2,8 bi em 2025 (+52% em um ano, a maior aceleração da América Latina). Tributo
acumulado na importação (II 14-20%, IPI 5-15%, ICMS 17-25%, PIS/COFINS 9,25%) coloca o custo
**2 a 3 vezes** acima do americano. E o dado que desarma a leitura fácil: **45 mil drones agrícolas
operacionais**. O Brasil já tem IA física em escala — **no campo, não na fábrica**, e num corpo
que voa, não num que anda. O relatório aberto (Robotics Center, março/2026) **não trata** de
humanoides nem de IA embarcada no país; registro a lacuna em vez de preenchê-la por inferência.

## 4. As disrupções-raiz

Quatro raízes, e antes delas as recusas.

### 4.0 Candidatos recusados como raiz

- **ROS 2, SLAM, planejamento de trajetória (MoveIt 2, OMPL), controle clássico.** Recusados:
  adoção em maioria dentro do campo há anos; são a base sobre a qual o resto acontece. Tratados
  como contexto na §3.
- **Simulador físico escrito à mão (MuJoCo, Isaac Sim, Gazebo, MetaDrive, AirSim, habitat-sim).**
  Recusado como raiz: é a prática corrente do campo — a escolha nº 1 da turma para desenvolvimento
  foi justamente o MetaDrive, o que confirma maturidade, não ruptura. Entra como **objeto** que a
  raiz 1 desloca, e como contexto na §3.
- **O humanoide.** Recusado: é um corpo, um formato de produto. Bípede não rompe nada por ser
  bípede — a ruptura está no que roda dentro dele e em onde ele aprendeu. Humanoide entra como
  indicador de adoção (§3.4), não como raiz.
- **"Robô mais barato".** Melhoria sustentadora clássica (Christensen): faz o mesmo, por menos.
  Entra como efeito (e6.1), nunca como raiz.
- **GPU mais rápida / simulação acelerada.** Pré-condição, não ruptura. É a resposta ao "por que
  agora" das raízes 1 e 4.

### 4.1 R1 — O ambiente deixa de ser construído e passa a ser gerado

**O que rompe.** Rompe o ambiente como **artefato autoral**: um arquivo que alguém modelou,
versionou, revisou e pode auditar linha a linha. No lugar entra uma saída de modelo — estocástica,
não inspecionável, que não existe antes de ser pedida. Com isso caem três práticas: o *asset
pipeline* como ativo da empresa, o teste de regressão de cena (não há cena fixa para regredir) e a
cadeia de responsabilidade "o erro está no arquivo X, linha Y".

**Por que agora e não há cinco anos.** Porque em 2025-2026 três coisas coincidiram: geração
autorregressiva em tempo real (Genie 3 a 24 fps; Odyssey transmitindo quadro a quadro), memória
visual suficiente para o mundo não se contradizer a cada volta de cabeça (~1 minuto), e pesos
abertos de modelo de mundo sob licença permissiva (Cosmos 3 sob OpenMDW 1.1). Em 2021 nada disso
existia: havia geração de vídeo curto, não navegação.

**Onde está na difusão.** **Demo pública → produto de nicho.** Genie 3 é assinatura paga em um
país; Cosmos tem pesos abertos e nenhum cliente nomeado em produção na própria página. Não é
laboratório, não é adoção precoce. Confiança rebaixada em toda a cadeia conforme §2 da skill.

**O que ainda falta acontecer.** (a) Física conservativa verificável — hoje os benchmarks existem
porque a violação é rotina; (b) consistência de horas, não minutos; (c) custo de inferência por
hora de mundo que feche conta contra renderizar; (d) forma de auditar o que foi gerado, sem a qual
nenhum comprador industrial assina; (e) resolução da pergunta de direito autoral sobre o corpus.

**Quem bloqueia.** **Donos de engine e estúdios.** Epic e Unity vivem de o mundo ser autoral,
determinístico e licenciável; um estúdio vive de poder prometer que a versão 1.2 é igual à 1.2.
Nenhum dos dois tem incentivo em trocar um artefato auditável por uma saída estocástica — e ambos
têm o poder de simplesmente não oferecer o caminho. O efeito que isso gera é e1.2 (laudo de
fidelidade como condição de compra) e e2.2 (cláusula de corpus antes de contrato).

### 4.2 R2 — A competência do corpo vira um checkpoint transferível

**O que rompe.** Rompe a equação "robô = máquina programada para uma tarefa". Se a competência
é um modelo visão-linguagem-ação treinado em muitos corpos e transferível entre eles, então: o
integrador deixa de vender programação; o fabricante deixa de vender capacidade; e o que a empresa
compra deixa de ser um equipamento e passa a ser uma **assinatura de política**, com atualização,
regressão e dependência de fornecedor. Rompe também a premissa regulatória de que a máquina
certificada é a máquina que continua a mesma.

**Por que agora e não há cinco anos.** Porque a receita do LLM foi portada para ação: um tronco
visão-linguagem pré-treinado (no caso da NVIDIA, o Cosmos Reason) ganhou uma cabeça de ação e
passou a aceitar instrução em linguagem natural — GR00T N1.6, a família π, Gemini Robotics 1.5
com transferência de movimento entre corpos. Em 2021 não havia nem o tronco nem os acervos
multi-corpo (Open X-Embodiment, DROID).

**Onde está na difusão.** **Produto de nicho → adoção precoce** dentro do campo de robótica; muito
antes disso na economia. Base instalada relevante ainda é industrial fixa.

**O que ainda falta acontecer.** (a) Confiabilidade em tarefa de contato rico fora de demonstração
curada; (b) uma régua de segurança que saiba lidar com sistema que muda de comportamento por
atualização — a ISO 25785-1 nem terminou e já não trata disso; (c) modelo de responsabilidade
civil; (d) custo por hora que ganhe do trabalho humano no lugar onde ele é caro, o que hoje
acontece só em parte dos pilotos.

**Quem bloqueia.** **Integradores de automação e a cadeia de seguro-certificação.** O integrador
perde a receita de programação; a seguradora não sabe precificar risco de sistema que aprende. Os
dois têm incentivo em exigir política congelada e auditável, o que é exatamente e5.2 — e é um
freio com dono e com data.

### 4.3 R3 — O agente opera o mundo pela interface humana, sem API

**O que rompe.** Rompe a **API como contrato**. Desde sempre, para uma máquina operar um software,
alguém precisava expor uma interface para máquinas. SIMA 2 dispensa: lê pixels, manda teclado e
mouse. Com isso, a fronteira entre *jogo*, *simulador* e *ferramenta de trabalho* deixa de ser
técnica e passa a ser só convenção humana — para o agente, todos são a mesma coisa: um mundo com
tela e comandos. Rompe também o consentimento implícito do fabricante: qualquer software vira
ambiente operável sem que seu dono tenha feito nada — ou autorizado.

**Por que agora e não há cinco anos.** Porque só em 2025 um modelo passou a **ver a tela e
raciocinar sobre o objetivo** ao mesmo tempo, com generalização medida para jogos inéditos. O
*screen scraping* da automação robótica de processos (RPA) tentou isso desde 2015 e quebrava a
cada mudança de layout, porque casava padrão em vez de entender a cena.

**Onde está na difusão.** **Laboratório → demo pública.** SIMA 2 não é produto; é pesquisa com
relatório técnico. Toda a cadeia derivada leva confiança baixa ou média, conforme §2 da skill.

**O que ainda falta acontecer.** (a) Memória longa e tarefa de muitas etapas; (b) controle fino
confiável; (c) latência e custo por hora de operação; (d) e a questão que não é técnica — a
permissão. Hoje um agente que joga pela interface humana é, para o sistema anti-trapaça, um
trapaceiro.

**Quem bloqueia.** **Plataformas de jogo e de software.** Valve, Riot, Microsoft, os fabricantes
de SaaS: todos já operam detecção de entrada sintética e termos de uso que proíbem automação.
Bloquear é barato e já está construído. O efeito é e9.1, e a consequência de segunda ordem é uma
camada de identidade de agente (e9.1.1) — o mesmo caminho que o tema 2 desta disciplina descreve
por outro lado.

### 4.4 R4 — O movimento humano vira insumo escasso, medido e comprado

**O que rompe.** Rompe a premissa que sustentou a era dos LLMs: **dado de treino é abundante e
sai de graça da internet**. Não há internet de corpo. Cada hora de manipulação existe porque uma
pessoa vestiu um rig e fez a tarefa — com salário, supervisão e amortização. Com isso, o gasto
migra de GPU para folha de pagamento e logística de sítio, o ativo escasso vira **acesso a
ambiente real**, e o movimento humano ganha estatuto de bem: com dono, preço e, em seguida,
disputa.

**Por que agora e não há cinco anos.** Porque a coleta barateou ao ponto de virar operação
industrial: UMI abaixo de US$ 1.500, GELLO a US$ 300 por braço, VR a partir de US$ 500 — contra
rigs de US$ 50 mil a 150 mil que ainda dominam o número por trabalhador. E porque, pela primeira
vez, **Estado financia coleta como política industrial**: 40+ centros na China, 20 já operando,
um deles com 3 milhões de entradas por ano.

**Onde está na difusão.** **Produto de nicho → adoção precoce.** Já existe tabela de preço, já
existe fornecedor especializado, já existe mercado de anotação de US$ 4,89 bi.

**O que ainda falta acontecer.** (a) Padrão de formato que torne dado de um comprador utilizável
por outro; (b) prova de que vídeo egocêntrico humano substitui demonstração no robô em escala;
(c) regime jurídico do movimento gravado — hoje ele não é dado pessoal, não é obra, não é nada;
(d) resposta à questão da qualidade: mais horas param de melhorar a política em algum ponto, e
ninguém sabe onde.

**Quem bloqueia.** **Quem detém o sítio e quem regula o corpo.** Hospital, galpão, fazenda e
oficina controlam o acesso ao ambiente e podem cobrar por ele (e14.1); e legislação de dado
biométrico — no Brasil, a LGPD — pode enquadrar gravação de corpo em jornada, encarecendo a
coleta justamente onde ela é mais útil (e13.1.1).

**Dependência declarada.** Esta é a raiz mais dependente das outras: se R2 não se concretizar,
grande parte da demanda por dado de corpo some. Ver §7.4.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O ambiente deixa de ser construído e passa a ser gerado por modelo
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Estúdios e laboratórios produzem o cenário de teste como prompt versionado, e não como arquivo de cena"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O ofício de projetar ambiente se divide entre quem escreve a especificação do mundo e quem audita o que o modelo gerou"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O portfólio de quem projeta ambiente deixa de ser a cena entregue e passa a ser o conjunto de prompts com o registro de rejeições"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Compradores de simulação exigem laudo de fidelidade física antes de aceitar dado sintético em projeto crítico"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Surge um mercado de auditoria de mundo, exercido por quem não vende o mundo"
                sinal: fraco
                prazo: 2035
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: "Simuladores escritos à mão sobrevivem como referência de calibração do mundo gerado, e não como lugar de treino"
                sinal: medio
                prazo: 2033
                confianca: media
          - id: e1.3
            ordem: 2
            efeito: "A divergência entre mundo de treino e mundo real vira cláusula de contrato entre fornecedor de simulação e operador do robô"
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "Um seguro de risco de simulador se separa do seguro do robô"
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O mundo jogável deixa de ser distribuído como build e passa a ser servido como fluxo gerado por modelo"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O custo de um jogo migra da produção anterior ao lançamento para a inferência cobrada por hora jogada"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Jogos de público pequeno e sessão longa deixam de fechar conta, e a produção independente se reconcentra no que é leve"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Estúdios e sindicatos negociam cláusula sobre treino em obra própria antes de assinar contrato de engine gerativa"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O crédito de autoria em jogo passa a listar o corpus de treino ao lado da equipe"
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Laboratórios treinam políticas inteiramente dentro do modelo de mundo, sem tocar o ambiente de origem"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O ambiente de treino vira segredo industrial, e o valor de uma empresa de robótica passa a estar no mundo e não no algoritmo"
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Empresas de robótica passam a ser compradas pelo acervo de mundos, como gravadoras são compradas por catálogo"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Erro de política passa a ser diagnosticado assistindo ao mundo que o robô imagina, e não ao registro de sensores"
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "A interface de depuração de robô vira peça de mídia, porque mostrar o que a máquina imagina é assistível"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Quem projeta interação ganha prototipagem de espaço navegável sem passar por modelagem 3D"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O grey-box deixa de ser etapa do projeto e o teste com usuário acontece antes de existir arte"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Pesquisa de usabilidade espacial deixa de exigir orçamento de estúdio e passa a caber em disciplina de graduação"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: "Treinar em mundo gerado troca deslocamento físico por consumo de data center, e a pegada ambiental do projeto de robótica muda de lugar"
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "Laboratórios em país de energia cara passam a alugar simulação onde a energia é barata, e a pesquisa de robótica se concentra geograficamente"
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "O Brasil entra na cadeia como fornecedor de simulação, pela matriz elétrica e pelo fuso, antes de entrar como fabricante de robô"
                sinal: fraco
                prazo: 2039
                confianca: baixa
  - disrupcao: A competência do corpo vira um checkpoint transferível entre robôs
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Integradores de automação deixam de vender programação de tarefa e passam a vender ajuste fino e dado do próprio sítio"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O contrato de automação muda de entrega de célula funcionando para serviço contínuo de política mantida"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A fábrica passa a depender de atualização remota de política como hoje depende do ERP, com o mesmo risco de parada"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Seguradora e certificadora exigem política congelada e auditável, e recusam cobrir robô que continua aprendendo em produção"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Separam-se em direito dois tipos de robô, o que aprendeu e parou e o que segue aprendendo, com regimes de responsabilidade distintos"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "O mesmo modelo passa a ser embarcado em corpos de fabricantes diferentes, e o corpo vira commodity"
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Fabricantes de corpo disputam por preço e manutenção, e não por capacidade"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O Brasil entra pela carroceria, montagem e manutenção local, e não pelo cérebro"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A marca do robô deixa de dizer o que ele faz, e a pergunta de compra passa a ser qual política está rodando"
            sinal: fraco
            prazo: 2034
            confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Robôs passam a ser instruídos em linguagem natural por quem não programa, no próprio local de trabalho"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O ofício de ensinar o robô aparece no galpão e no chão de fábrica, exercido por quem já fazia a tarefa"
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O trabalhador que ensina passa a tratar a demonstração como contribuição negociável, e não como parte do salário"
                sinal: fraco
                prazo: 2038
                confianca: baixa
              - id: e7.1.2
                ordem: 3
                efeito: "Horas demonstradas entram no currículo do trabalhador e passam a valer fora da empresa que as coletou"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "O design de interação com robô deixa de ser tela e vira roteiro de gesto, fala e correção no meio da tarefa"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Um vocabulário padrão de sinalização corporal, equivalente ao cursor e à barra de progresso, é publicado como biblioteca e copiado entre fabricantes"
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "A avaliação de robô migra do teste de bancada para o benchmark de política em arena simulada"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Comprador passa a exigir número de arena antes de autorizar piloto, e o piloto encolhe"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A arena vira alvo de otimização e aparece o equivalente robótico de treinar para a prova, política boa na arena e ruim no galpão"
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: O agente opera o mundo pela interface humana, sem API
    efeitos:
      - id: e9
        ordem: 1
        efeito: "Qualquer software com tela vira ambiente operável por agente, sem que o fabricante tenha feito nada para isso"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Plataformas de jogo e de software endurecem a detecção de entrada sintética e passam a distinguir agente autorizado de agente intruso"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Forma-se uma camada de identidade de agente, quem é e para quem trabalha, como pré-condição de acesso a mundo"
                sinal: fraco
                prazo: 2035
                confianca: baixa
              - id: e9.1.2
                ordem: 3
                efeito: "Mundos abertos por decisão, publicados para serem operados por agente, se separam dos fechados, e a distinção vira argumento de venda"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "A fronteira entre jogo, simulador e ferramenta de trabalho deixa de importar para quem compra automação"
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "Motores de jogo passam a ser vendidos como infraestrutura de treino, e o mercado de engine cresce por fora do entretenimento"
                sinal: fraco
                prazo: 2037
                confianca: media
      - id: e10
        ordem: 1
        efeito: "Estúdios passam a projetar mundos sabendo que parte dos jogadores será agente"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "O projeto de affordance ganha um segundo destinatário, e o que é legível para a máquina deixa de coincidir com o que é legível para a pessoa"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Projetar mundo passa a ser, em parte, projetar currículo de treino, e a dificuldade deixa de ser curva de diversão para ser grade de competência"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "Playtest automatizado em escala substitui parte do controle de qualidade humano, e o defeito de progressão é achado antes do lançamento"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: "O controle de qualidade de jogo se reorganiza em torno do que a máquina não vê, gosto, ritmo, ofensa e sentido"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "O mesmo agente que joga passa a operar equipamento real pela mesma interface de tela e comando, sem integração"
        sinal: fraco
        prazo: 2033
        confianca: baixa
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "Sistemas legados sem API ganham automação por cima, sem consentimento do fornecedor"
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Contratos de software passam a proibir operação por agente, e a proibição vira item de negociação de preço"
                sinal: fraco
                prazo: 2038
                confianca: baixa
  - disrupcao: O movimento humano vira insumo escasso, medido e comprado
    efeitos:
      - id: e12
        ordem: 1
        efeito: "Capturar demonstração vira posto de trabalho remunerado por hora e por episódio aproveitável"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "O trabalhador que demonstra passa a ser medido por taxa de episódio aproveitável, e a métrica volta como pressão de produtividade"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "A disputa sindical se desloca do salário por hora para a propriedade do movimento gravado"
                sinal: fraco
                prazo: 2036
                confianca: baixa
              - id: e12.1.2
                ordem: 3
                efeito: "Plataformas de coleta remota de demonstração aparecem como trabalho de plataforma, com as assimetrias já conhecidas do entregador de aplicativo"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: "Estados montam fábricas de dado corporificado como política industrial, e o acervo vira ativo soberano"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: "Acordo de compartilhamento de dado de corpo entra na pauta de comércio exterior, ao lado de dado pessoal"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: "Vídeo egocêntrico humano passa a valer mais que demonstração feita no robô, porque escala sem rig"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Óculos e câmeras de primeira pessoa deixam de ser produto de mídia e passam a ser instrumento de coleta"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "O consentimento de gravação em jornada de trabalho vira o litígio central da década, à frente do reconhecimento facial"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "Acervos audiovisuais antigos são relicenciados como dado de treino motor, e não como conteúdo"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: "Arquivos audiovisuais públicos passam a ser avaliados por utilidade motora, e não só por valor histórico"
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "O gargalo da robótica se desloca do algoritmo para a logística de coleta, e o valor migra para quem tem acesso ao sítio"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "Hospital, galpão e fazenda passam a cobrar pelo acesso ao próprio ambiente, como se cobra por espaço publicitário"
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "O ambiente físico ganha preço por hora de gravação, e os lugares difíceis de gravar ficam caros"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: "A queda do custo do dado trava na qualidade, mais horas param de melhorar a política e o mercado se volta para curadoria"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: "Aparece a figura do curador de dado motor, que decide o que entra, como já existe curador de conjunto de texto"
                sinal: fraco
                prazo: 2036
                confianca: baixa
```

### 5.1 Os mecanismos, ramo a ramo

O bloco acima diz **o quê**. Aqui está o **porque** — a regra da skill é que efeito sem mecanismo
não entra, e mecanismo é da forma "porque o efeito pai faz X".

**Ramo e1 (cenário vira prompt).** Porque gerar um ambiente a partir de texto (Genie 3, 24 fps)
torna a cena mais barata de *pedir* do que de *guardar*, o artefato versionado deixa de ser o
`.usd` e passa a ser a instrução — e1. Porque a instrução não garante o resultado, alguém tem de
conferir o que saiu, e a função se parte em duas: quem especifica e quem audita (e1.1) — o que
muda o que se mostra num portfólio (e1.1.1). Porque a saída é estocástica e os benchmarks de 2026
já mostram violação de conservação, o comprador industrial exige prova antes de aceitar dado
sintético (e1.2, **retroação**); e porque quem vende o mundo não pode ser quem atesta o mundo,
abre-se espaço para auditor independente (e1.2.1). E porque calibrar exige um padrão de
comparação, os simuladores escritos à mão não desaparecem: **mudam de função**, de lugar de treino
para régua de aferição (e1.2.2) — é assim que a tecnologia madura sobrevive a esta raiz. Porque a
divergência entre mundo e realidade passa a ter consequência financeira, ela vira cláusula
(e1.3) e, no limite, produto de seguro separado (e1.3.1).

**Ramo e2 (jogo servido, não distribuído).** Porque o mundo passa a ser gerado quadro a quadro
(Odyssey já transmite assim), o binário deixa de ser a unidade de distribuição — e2. Porque gerar
custa por hora e renderizar custa por compra, o custo migra de capex de produção para opex de
inferência (e2.1), o que penaliza exatamente o jogo de sessão longa e público pequeno (e2.1.1).
Porque treinar o modelo exige corpus e o corpus é obra de alguém, o conflito de 2025-2026 sobre
IA em jogos (30% dos desenvolvedores contra, segundo a imprensa do setor) chega ao contrato antes
de chegar ao produto (e2.2, **retroação**), e a resposta plausível é declarar o corpus junto com
a equipe (e2.2.1).

**Ramo e3 (treinar dentro do mundo).** Porque o Dreamer 4 mostrou que dá para aprender uma tarefa
longa **sem tocar o ambiente**, o mundo deixa de ser instrumento e vira o lugar onde o valor é
criado — e3. Porque o valor está lá, ele é fechado: o mundo vira segredo (e3.1), e ativos de
mundo passam a ser comprados como catálogo (e3.1.1). E porque o robô passa a ter um modelo interno
explícito do que espera, depurar é assistir ao que ele imagina (e3.2) — o que transforma a
ferramenta de diagnóstico em algo que dá para exibir (e3.2.1). Este último é o efeito mais
diretamente "mídia" da raiz 1.

**Ramo e4 (prototipagem de espaço).** Porque escrever um parágrafo e caminhar dentro dele custa
segundos, o gargalo de produzir espaço para teste desaparece — e4. Porque o teste com usuário
deixa de esperar a arte, a ordem do projeto se inverte (e4.1) e a pesquisa espacial deixa de
exigir orçamento de estúdio (e4.1.1). **Parei aqui**: o próximo nível seria "fica mais barato
ainda" — mesmo ator, mesmo mecanismo, portanto não é outra ordem (regra de parada, §3.9 da skill).

**Ramo e15 (a conta de energia).** Porque treinar em mundo gerado substitui deslocamento, rig e
hora de laboratório por inferência em data center, a pegada do projeto **muda de lugar** em vez de
sumir — e15. Porque inferência é fungível e energia não é, a escolha de onde simular vira
econômica (e15.1), o que abre ao Brasil uma entrada pela matriz elétrica antes da entrada pela
manufatura (e15.1.1). É o efeito ecológico da roda, e o único em que o Brasil aparece ganhando
posição por um atributo que já tem.

**Ramo e5 (o integrador).** Porque a capacidade vem no checkpoint, o que resta de específico ao
cliente é o dado do sítio e o ajuste — e5. Porque isso é serviço e não obra, o contrato vira
assinatura (e5.1), e a dependência de atualização remota leva o risco de parada para dentro da
operação (e5.1.1) — o mesmo padrão que o ERP criou nos anos 1990. Porque seguradora precifica o
que consegue descrever, ela exige política congelada (e5.2, **retroação**), e a distinção entre
"aprendeu e parou" e "segue aprendendo" acaba entrando no direito (e5.2.1).

**Ramo e6 (o corpo vira commodity).** Porque o mesmo modelo roda em corpos diferentes — a
transferência de movimento entre embodiments é o que o Gemini Robotics 1.5 anuncia —, o corpo
perde exclusividade (e6). Porque a disputa passa a ser por preço e manutenção (e6.1), abre-se
espaço para montagem local em país sem indústria de IA (e6.1.1): é a entrada mais realista do
Brasil, e é a subordinada. E porque a capacidade não está na marca, a pergunta de compra muda
(e6.2).

**Ramo e7 (instruir em linguagem).** Porque a política aceita instrução natural, quem sabe a
tarefa passa a poder ensiná-la sem intermediário — e7. Porque quem sabe a tarefa é o trabalhador,
nasce um ofício dentro do galpão (e7.1); porque a demonstração tem valor mensurável, ela vira
objeto de negociação (e7.1.1) e credencial portável (e7.1.2). E porque instruir um corpo em
movimento não cabe numa tela, o design de interação muda de superfície (e7.2) — o que exige um
vocabulário compartilhado de sinalização, o cursor e a barra de progresso dos corpos (e7.2.1).
Este é o efeito que mais interessa ao público deste mapa.

**Ramo e8 (a arena).** Porque avaliar política exige milhares de tentativas e bancada não escala,
a avaliação migra para arena simulada (e8) — o Isaac Lab-Arena, lançado em janeiro de 2026, é o
artefato. Porque o número da arena chega antes do piloto, o piloto encolhe (e8.1), e porque toda
métrica publicada vira alvo, aparece o treinar-para-a-prova (e8.1.1) — o mecanismo é o mesmo de
qualquer benchmark de IA, e por isso este efeito é dos mais confiáveis do ramo apesar do sinal
fraco hoje.

**Ramo e9 (sem API).** Porque o agente lê pixels e manda teclado, nenhuma decisão do fabricante é
necessária para seu software virar ambiente — e9. Porque agente indistinguível de jogador é
indistinguível de trapaceiro, as plataformas endurecem (e9.1, **retroação**), e a saída técnica
para separar um do outro é identidade de agente (e9.1.1) — que é exatamente a segunda ordem que
o tema 2 desta disciplina encontra vindo do outro lado. Porque nem todo mundo quer fechar, alguns
abrem de propósito e fazem disso venda (e9.1.2). Porque para o agente jogo e ferramenta são a
mesma coisa (e9.2), quem vende engine passa a vender infraestrutura de treino (e9.2.1).

**Ramo e10 (mundo com dois destinatários).** Porque parte dos ocupantes do mundo será agente, o
projeto passa a ter dois leitores — e10. Porque o que é legível para a máquina não é o que é
legível para a pessoa, a affordance se bifurca (e10.1), e o projeto de mundo assume função de
currículo (e10.1.1): é a resposta deste mapa à pergunta de 2ª ordem que a disciplina levantou.
Porque agente barato joga milhares de horas, parte do QA é automatizada (e10.2) e o QA humano se
especializa no que a máquina não avalia (e10.2.1).

**Ramo e11 (do jogo ao equipamento).** Porque a mesma interface serve, o agente atravessa para
equipamento real sem integração (e11) — mas este é o efeito de menor confiança da roda, e a razão
está na §7. Porque isso automatiza legado sem consentimento do fornecedor (e11.1), o contrato de
software reage proibindo (e11.1.1).

**Ramo e12 (o posto de trabalho de demonstrar).** Porque não existe internet de corpo, cada hora
tem de ser produzida — e12: já há tabela de preço (US$ 28 a 60/h), rig, treinamento de operador
e métrica de episódio aproveitável. Porque a métrica existe, ela vira pressão (e12.1), e porque a
pressão recai sobre um corpo que também é o objeto do dado, a disputa sindical muda de eixo: de
salário para propriedade do movimento (e12.1.1). Porque a coleta pode ser remota, ela assume a
forma de trabalho de plataforma (e12.1.2). E porque o acervo é estratégico, Estado entra como
financiador (e12.2) — a China já entrou —, o que leva dado de corpo para a mesa de comércio
exterior (e12.2.1).

**Ramo e13 (o vídeo egocêntrico).** Porque vídeo humano em primeira pessoa é ordens de grandeza
mais abundante que teleoperação, ele tende a valer mais por hora coletada (e13). Porque passa a
valer, o dispositivo que grava muda de estatuto: de produto de mídia para instrumento de coleta
(e13.1), o que põe o consentimento em jornada de trabalho no centro do litígio (e13.1.1). E porque
acervo antigo também é vídeo de corpo, ele é reavaliado por utilidade motora (e13.2, e13.2.1).

**Ramo e14 (o sítio).** Porque o custo se desloca para coleta, o recurso escasso passa a ser o
**acesso ao lugar** — e14. Porque acesso escasso se cobra, o ambiente vira inventário vendável
(e14.1), com preço por hora que reflete dificuldade (e14.1.1). E porque escala de dado tem
retorno decrescente, o mercado se volta para curadoria (e14.2, **retroação**) e nasce o curador de
dado motor (e14.2.1).

### 5.2 Classes de referência usadas para os prazos

Prazo sem classe de referência é chute. As que usei:

| Classe | O que levou | Onde apliquei |
|---|---|---|
| Robotáxi | demo pública 2015 → operação comercial em punhado de cidades 2024 (~9 anos), ainda fração ínfima das viagens | tudo que depende de segurança física em espaço compartilhado: e5, e5.2, e7, e11 |
| ROS | 2007 → padrão de facto na pesquisa ~2013 (6 anos) → uso industrial relevante ~2020 (13 anos) | adoção de infraestrutura de software em robótica: e8, e9.2.1 |
| Smartphone | 2007 → ~10% dos usuários de celular em ~4 anos | ferramenta de criação que não exige mudar processo nem comprar certificação: e4, e4.1 |
| VR de consumo | 2012 → 14 anos depois, ainda abaixo de 10% de uso regular | tudo que exige hardware novo no corpo da pessoa: e13.1 |
| LLM de chat | nov/2022 → dezenas de milhões em ~1 ano | **limite superior** de velocidade, só para software puro sem corpo e sem certificação: e9 |
| Norma ISO | rascunho → ratificação em 18-36 meses; adoção em compra +3 a 5 anos | e1.2, e5.2, e5.2.1 |
| Relicenciamento de acervo para treino de texto | ~3 anos entre o primeiro litígio e os primeiros contratos | e2.2, e13.2 |
| Densidade de robô no Brasil | 18 por 10 mil contra 151 global — defasagem que persiste há duas décadas | e6.1.1, e15.1.1 |

A referência que mais disciplina este mapa é a do robotáxi: **IA física anda na velocidade do mais
lento entre caso de segurança, seguro e conta unitária — não na velocidade do modelo.** Foi ela
que empurrou os prazos de R2 e R3 para a década de 2030.

### 5.3 Cobertura STEEP e quem perde

- **Social:** e7.1, e12.1, e13.1.1, e12.1.1. O eixo social desta roda é o trabalhador que ensina
  a máquina e o corpo gravado em jornada.
- **Tecnológico:** e1, e3, e8, e9 — o grosso da roda.
- **Econômico:** e2.1, e5.1, e6.1, e14, e14.1.
- **Ecológico:** e15 e cadeia. **Categoria magra, e digo que é magra:** não encontrei número aberto
  sobre custo energético de hora de mundo gerado, então o ramo inteiro se apoia em inferência, não
  em medida. É o ponto mais fraco da cobertura.
- **Político:** e12.2, e12.2.1, e9.1.1, e5.2.1, e13.1.1.

**Quem perde**, explicitamente — toda roda que só lista quem ganha está incompleta:

| Quem | Por quê | Efeito |
|---|---|---|
| Artista técnico e level designer de execução | a cena deixa de ser feita à mão | e1.1 |
| Integrador de automação que vive de programar tarefa | a tarefa vem no checkpoint | e5 |
| Fabricante de robô que vendia capacidade | a capacidade não é mais dele | e6, e6.1 |
| Operador de teleoperação | treina o próprio substituto, e é medido por isso | e12.1 |
| Estúdio independente de sessão longa | não fecha conta com custo por hora | e2.1.1 |
| Quem faz QA de jogo por execução | a execução é automatizável | e10.2 |
| Fornecedor de software legado | é automatizado por cima, sem ser pago por isso | e11.1 |
| O Brasil como comprador | tributo de 2 a 3 vezes sobre um bem que vira essencial | e6.1.1 |
| Arquivista que avalia acervo por valor histórico | passa a competir com avaliação por utilidade motora | e13.2.1 |

### 5.4 Cruzamentos

**Convergências** — o achado mais valioso é quando dois ramos de raízes diferentes chegam ao mesmo
lugar:

1. **A prova passa a ser produzida por quem vende o objeto.** e1.2 (laudo de fidelidade, R1)
   encontra e8 (arena como avaliação, R2). Em 2026 a mesma empresa vende o mundo (Cosmos), o
   modelo (GR00T) e a régua (Isaac Lab-Arena). Isso não é acusação: é uma propriedade estrutural
   do mercado atual, e é ela que cria o espaço de e1.2.1 (auditoria independente). **Convergência
   independente, sinal forte.**
2. **Para entrar num mundo, o agente terá de se identificar e apresentar uma versão fixa de si.**
   e9.1.1 (identidade de agente, R3) encontra e5.2 (política congelada e auditável, R2). Duas
   pressões completamente diferentes — anti-trapaça de plataforma e seguro industrial — chegam ao
   mesmo requisito técnico.
3. **O ativo da robótica deixa de ser software e vira acesso.** e3.1 (mundo como segredo, R1)
   encontra e14 (valor migra para quem tem o sítio, R4). Num caso o acesso é a um mundo gerado, no
   outro a um lugar real; a forma econômica é a mesma — renda sobre ambiente.
4. **O design de interação ganha um interlocutor não humano dentro do mesmo espaço.** e10.1
   (affordance bifurcada, R3) encontra e7.2 (roteiro de gesto e correção, R2). É a convergência que
   mais fala ao público deste mapa.

**Retroalimentações** — ciclos, com sinal:

- **(+) Acelera R1:** e3 → e3.1 → mundo vira ativo → investimento em mundo → mundo melhor → mais
  treino dentro do mundo. É o ciclo que explica por que o dinheiro entrou em modelo de mundo em
  2025-2026.
- **(−) Freia R2, e é o ciclo que provavelmente decide o ritmo até 2035:** e5.2 exige política
  congelada → robô não aprende em produção → menos dado de operação real → política melhora mais
  devagar → seguradora segue sem base para relaxar a exigência. Trava que se realimenta.
- **(−) Freia R4:** e12.1 mede por episódio aproveitável → operador otimiza para "aproveitável" em
  vez de "diverso" → e14.2 (mais horas param de melhorar a política) → o mercado paga menos pela
  hora → sai quem sabe demonstrar. O incentivo destrói o insumo.
- **(−) Freia R1 pela via cultural:** e2.2 (cláusula de corpus) → licenciar corpus fica caro →
  mundo gerado perde vantagem de custo contra build → volta ao build para o que é comercial.

**Contradições** — registro os dois lados e o que decide entre eles:

1. **e2.1 × e3.** Se a inferência é cara o bastante para virar o modelo de negócio do jogo de
   cabeça para baixo (e2.1), ela é cara demais para treinar robô em mundo gerado em escala (e3).
   Se é barata para e3, não muda o negócio do jogo. **O que decide:** o custo em dólar por hora de
   interação a 720p em 2030. Não encontrei esse número publicado hoje — é a medida que eu mais
   gostaria de ter.
2. **e9.1 × e9.2.** Se as plataformas fecharem com eficácia, a fronteira entre jogo e ferramenta
   não some: fica *mais* rígida, com mundos permitidos e proibidos. **O que decide:** se a detecção
   de entrada sintética funciona contra um agente que se comporta como jogador mediano — e hoje
   não há evidência pública nos dois sentidos.
3. **e13 × e12.** Se vídeo egocêntrico humano bastar, o posto de trabalho de teleoperação encolhe
   em vez de crescer, e metade do ramo R4 se inverte. **O que decide:** se a transferência de vídeo
   passivo (sem ação rotulada) para política se sustenta fora de tarefa curta. A alegação de escala
   existe e é de vendor; a verificação independente, não achei.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

Critério (Hiltunen): algo que quase não aparece hoje, mas que muda o mapa se crescer. Para cada
um, o **sinal observável** que diria que está crescendo.

**SF1 — Mundo gerado com mais de uma pessoa dentro.** *Onde foi visto:* Odyssey publicou o
Agora-1, descrito como seu primeiro modelo de mundo multiagente, com até quatro pessoas
compartilhando o mesmo ambiente gerado quadro a quadro; e a própria DeepMind declara que
interação entre vários agentes independentes no mesmo mundo segue em aberto. *O que mudaria:* o
mundo gerado deixaria de ser experiência solitária e passaria a competir com engine em
multijogador — e, do lado de robôs, permitiria treinar coordenação entre máquinas dentro do mundo
imaginado, que hoje não dá. *Sinal observável:* um mundo gerado sustentando 16 ou mais
participantes com estado compartilhado por mais de 30 minutos.

**SF2 — Auto-melhora sem humano no laço.** *Onde foi visto:* o relatório do SIMA 2 declara que o
agente usa o Gemini para **gerar tarefa e recompensa** e aprender sozinho em ambiente novo. Hoje
é um parágrafo num relatório técnico. *O que mudaria:* se a curva de competência deixar de
depender de coleta humana, a raiz 4 inteira perde força — o insumo escasso deixa de ser escasso.
*Sinal observável:* um resultado replicado por terceiro em que política treinada com tarefa e
recompensa geradas por modelo supere política treinada com demonstração humana, **na mesma tarefa
física**.

**SF3 — Pesos abertos de modelo de mundo sob licença permissiva.** *Onde foi visto:* Cosmos sob
OpenMDW 1.1 da Linux Foundation, no Hugging Face e no GitHub. Parece detalhe jurídico. *O que
mudaria:* mundo gerado deixa de ser serviço de plataforma e vira infraestrutura que se roda
localmente — o que habilita auditoria independente (e1.2.1) e deslocamento geográfico de treino
(e15.1), e é a única via pela qual um laboratório brasileiro entra nessa fronteira sem pagar
plataforma em dólar. *Sinal observável:* um laboratório fora do eixo EUA-China publicando
política robótica treinada em mundo gerado com pesos abertos.

**SF4 — O corpo entrando no raciocínio, e não depois dele.** *Onde foi visto:* o `ROSClaw`, na
varredura da turma, conecta o raciocínio do modelo a capacidades reais de robô "mantendo
consciência do corpo físico do agente". *O que mudaria:* restrição física deixaria de ser
checagem posterior e viraria parte do modelo de execução — o que muda o design de interação,
porque o robô passa a poder sinalizar o que **não** consegue antes de tentar. *Sinal observável:*
um framework grande (ROS 2, LeRobot, Isaac Lab) adotar envelope de capacidade como tipo de
primeira classe, e não como verificação de segurança no fim do laço.

**SF5 — A norma que nasce cobrindo só o chão plano.** *Onde foi visto:* a ISO 25785-1 exclui
declive acima de cinco graus, subterrâneo, atmosfera corrosiva ou explosiva e superfície vertical.
*O que mudaria:* forma-se uma zona sem régua — obra, mineração, campo, emergência — que é
justamente onde a IA física tem a melhor justificativa econômica e o pior cenário de acidente.
*Sinal observável:* a primeira apólice comercial que exclua explicitamente operação fora de
superfície plana.

**SF6 — O Brasil entrando pelo ar, não pelo chão de fábrica.** *Onde foi visto:* 45 mil drones
agrícolas operacionais no país, contra densidade industrial de 18 robôs por 10 mil trabalhadores.
Praticamente ausente da conversa sobre IA física, que é toda sobre humanoide. *O que mudaria:* o
mapa brasileiro deixa de ser "chega tarde" e passa a ser "chega por outro corpo" — e a pesquisa
local de política visão-linguagem-ação teria um domínio próprio com dado próprio. *Sinal
observável:* uma política visão-linguagem-ação embarcada em pulverizador ou drone agrícola
brasileiro, publicada ou vendida como produto.

### 6.2 Wildcards

Critério (Petersen): baixa probabilidade, alto impacto, **plausibilidade interna** — mecanismo
escrito, ou não é wildcard, é enredo.

**W1 — Um acidente cuja causa esteja no simulador, e não no robô.** *Mecanismo:* uma política
treinada majoritariamente em mundo gerado carrega um viés físico que nenhum benchmark cobria
(atrito em piso molhado, por exemplo); ela é distribuída por atualização remota para uma frota
inteira; o erro acontece **simultaneamente em todas as unidades**, porque o defeito está no mundo,
não na máquina. *Por que é improvável até 2035:* quase nenhuma política em produção é hoje
treinada majoritariamente em mundo gerado, e as que se aproximam disso passam por validação real
antes de embarcar. *O que faria com o mapa:* antecipa e1.2, e1.2.1, e1.3, e1.3.1 e e5.2 em cerca
de cinco anos, e mata e3 como prática industrial por uma década — o treino em mundo gerado
voltaria a ser coisa de laboratório. *Sinal precoce:* o primeiro **recall de frota de robô por
atualização de política**, e não por defeito de hardware.

**W2 — Fidelidade física vira coisa certificável, e quem certifica não é quem vende.** *Mecanismo:*
um consórcio neutro — a Linux Foundation já licencia o Cosmos — publica uma bateria de física
conservativa com aprovação binária, e um modelo aberto passa; a partir daí mundo gerado entra em
projeto regulado sem discussão caso a caso. *Por que é improvável:* os benchmarks de 2026 existem
exatamente porque a violação é rotina, e ninguém sabe ainda definir "passou" sem ambiguidade.
*O que faria com o mapa:* antecipa R1 inteira em cinco anos e **torna e1.2.2 falso** — o simulador
escrito à mão perderia até a função de régua. *Sinal precoce:* um órgão normativo citar um
benchmark de física de modelo de mundo em documento técnico.

**W3 — O primeiro corpo de massa é o enxame, não o humanoide.** *Mecanismo:* o corpo que escala
primeiro não é o que imita a pessoa — é o barato, descartável e coordenado; e o ambiente onde a
régua é mais frouxa (ar, emergência, campo) é justamente onde a ISO 25785-1 não chega, porque ela
trata de robô que precisa de controle ativo para ficar de pé no chão. *Por que é improvável:*
coordenação em tempo real com falha parcial não está resolvida, e espaço aéreo é regulado.
*O que faria com o mapa:* e6, e6.1 e e6.1.1 mudam de objeto, e o Brasil — com 45 mil drones
agrícolas já voando — deixa de ser coadjuvante. *Sinal precoce:* uma operação de emergência com
mais de 50 unidades autônomas coordenadas sem piloto por unidade, com relatório público.

**W4 — Uma plataforma de jogo abre o mundo de propósito e vira o maior conjunto de treino que
existe.** *Mecanismo:* um estúdio conclui que dado de agente jogando vale mais que assinatura,
publica interface e contrato para agentes, e passa a vender horas de mundo em vez de cópias.
*Por que é improvável:* o setor está em conflito aberto sobre IA generativa, e abrir a porta
colide com o próprio anti-trapaça. *O que faria com o mapa:* e9.1.2 vira regra em vez de nicho, e
e10.1.1 (projetar mundo como currículo) chega em 2033 em vez de 2039. *Sinal precoce:* um jogo de
grande porte publicar termos de uso específicos para agentes, com dado como contrapartida.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria do §6 da skill, aplicada ao mapa **já pronto**, e as alterações
que ela produziu estão no bloco YAML da §5 — o registro auditável está em 7.8.

### 7.1 Pré-mortem: é 2041 e este mapa se mostrou errado. Por quê?

**Razão 1 — a física nunca fechou.** Modelo de mundo é um gerador de vídeo plausível, não um
integrador de leis de conservação. Os benchmarks de 2026 (WorldModelBench, CRONOS, PhyScore)
existem porque a violação é rotina, e a diferença entre "parece certo" e "está certo" pode ser
irredutível sem física explícita. Se foi isso, R1 ficou confinada a mídia — pré-produção,
prototipagem, entretenimento — e nunca virou lugar de treino de corpo. *Aponta para:* **e3**,
que é o efeito mais exposto. Ação tomada em 7.8.

**Razão 2 — o gargalo de dado não cedeu.** Se o custo por hora não caiu e o vídeo egocêntrico não
substituiu demonstração, então o "checkpoint transferível" virou "checkpoint por cliente", e R2
não passou de automação cara com interface melhor. *Aponta para:* **e6** e toda a promessa de
commodity. Ação em 7.8.

**Razão 3 — a régua chegou antes da capacidade e congelou tudo.** A ISO 25785-1 cobre chão plano
e não diz nada sobre atualização de política; seguro exige congelar; o resultado é um nicho
industrial fechado por uma década, exatamente como o robotáxi (demo em 2015, operação comercial
em punhado de cidades em 2024, fração ínfima das viagens). *Aponta para:* **e7** e **e11**, os
efeitos que assumem difusão para fora do ambiente controlado.

### 7.2 Que efeito é só extrapolação linear

**e6.2.1** — "a ficha técnica do robô no ponto de venda vira o cartão do modelo" — era o histórico
do varejo de PC transplantado, sem mecanismo próprio. **Removido** (vai para §12.3). Isso deixa
e6.2 como o único efeito de 2ª ordem sem neto em toda a roda; declaro a assimetria em vez de
inventar um filho para preenchê-la.

**e6.1** ("fabricantes disputam por preço e manutenção") continua sendo, em parte, extrapolação do
PC — mas ganha mecanismo próprio e não linear: a transferência de movimento entre corpos
diferentes (anunciada no Gemini Robotics 1.5) é o que descola capacidade de hardware, e não existe
equivalente no caso do PC. Mantido, com prazo empurrado.

### 7.3 Velocidade de adoção confrontada com a referência

- **e11** (agente que joga passa a operar equipamento real) assumia 2031. A automação robótica de
  processos promete exatamente isso por captura de tela **desde 2015** e nunca saiu do nicho,
  porque quebrava a cada mudança de layout. Mesmo com um modelo que entende a cena, a barreira
  agora é permissão e responsabilidade, não reconhecimento. **Empurrado e rebaixado.**
- **e13.2** (relicenciamento de acervo audiovisual como dado motor) assumia 2031. O relicenciamento
  de acervo para treino de **texto** levou cerca de três anos entre o primeiro litígio e os
  primeiros contratos — e ali o direito já existia. Para movimento gravado não existe ainda
  nenhum regime jurídico. **Empurrado e rebaixado.**
- **e1.3.1** (seguro de risco de simulador) e **e13.2.1** (arquivo avaliado por utilidade motora)
  foram empurrados para **2042** — ou seja, **para fora da janela de 2041 deste mapa**. Ficam
  registrados porque a cadeia causal os exige, mas o mapa declara que não os alcança.
- **e12** (posto de trabalho de demonstração) manteve 2028 com confiança alta: não é projeção, é
  descrição — o mercado já tem tabela de preço, rig, curva de treinamento de operador e métrica de
  produtividade em 2026.

### 7.4 A raiz que não acontece

- **Se R1 não acontecer** (mundo gerado não vira lugar de treino nem de produção): caem e1, e2,
  e3, e4, e15 e descendentes — 5 de 15 efeitos de 1ª ordem. Sobram R2, R3 e R4 inteiras, porque
  nenhuma delas depende de mundo gerado: política generalista se treina com teleoperação real
  (é o caminho da família π), agente generalista opera jogo publicado, e a economia do dado existe
  justamente porque o mundo gerado **não** basta. **O mapa sobrevive.**
- **Se R2 não acontecer:** caem e5, e6, e7, e8. R1 sobrevive como mídia (e2, e4 intactos) e R3
  sobrevive inteira. R4 perde metade da demanda — ver abaixo.
- **Se R3 não acontecer:** caem e9, e10, e11. É a raiz mais isolável e a de menor confiança; o
  resto do mapa não se move.
- **Se R4 não acontecer** (coleta deixa de ser gargalo, por auto-melhora ou por vídeo passivo):
  caem e12, e13, e14 — e **R2 acelera**, em vez de cair. Esta é a única raiz cujo fracasso
  *beneficia* outra, o que é sinal de que ela está no lugar certo do mapa.
- **R4 é a mais dependente:** se R2 não se concretizar, some boa parte da demanda por dado de
  corpo. Declarei isso em 4.4 e repito aqui porque é a fragilidade estrutural desta roda: R4 é
  meio raiz, meio consequência. Se eu tivesse de cortar uma raiz, seria ela — e o mapa perderia o
  único ramo que fala de trabalho.

### 7.5 Suposições escondidas, agora ditas

1. **Energia e computação seguem disponíveis a preço que não inviabiliza inferência contínua.**
   Se não, e2.1, e3 e e15 mudam de sinal. Não encontrei número aberto de custo por hora de mundo
   gerado — é a lacuna mais grave deste mapa (§5.3, categoria ecológica).
2. **Pesos abertos continuam abertos.** O mapa usa a licença OpenMDW 1.1 do Cosmos como fato
   estrutural; ela pode mudar na próxima versão. Se fechar, e15.1, e1.2.1 e SF3 caem.
3. **A cadeia de fornecimento física continua funcionando** — atuador, redutor, célula de carga,
   e terra-rara. Nenhum efeito deste mapa sobrevive a uma restrição séria aí, e nenhum deles a
   contempla.
4. **Ninguém proíbe.** O mapa não tem nenhum efeito em que um país bane robô com corpo em espaço
   público. Não porque seja implausível — porque eu não achei sinal.
5. **A separação entre mundo gerado e mundo capturado se mantém.** Se captura de realidade
   (tema 10) convergir com geração, R1 muda de natureza e este mapa está descrevendo a coisa
   errada.
6. **O Brasil continua importador.** Assumi isso em e6.1.1 a partir de uma única fonte
   (Robotics Center, março/2026) que, ela mesma, não trata de humanoide nem de IA embarcada.

### 7.6 Viés do autor

Este mapa foi escrito por quem trabalha com mídia, interação e música, não com controle. Isso
enviesa de dois modos, e nomeio os dois:

- **Excesso de peso em e10.1 e e10.1.1** ("affordance com dois destinatários", "projetar mundo é
  projetar currículo"). São os efeitos que mais me interessam e os mais bonitos de discutir em
  aula — e são também os de sinal mais fraco da roda. Estão aqui porque eu gosto deles. Mantidos,
  com a confissão junto.
- **Simpatia pelo aberto.** SF3 e e15.1.1 tratam pesos abertos como caminho de entrada do Brasil;
  é uma preferência minha, e o dado que a sustenta é uma licença publicada, não uma adoção medida.
- **Subestimação do controle clássico.** Um engenheiro de controle escreveria uma roda em que
  metade dos efeitos deriva de dinâmica, atuação e estimação de estado — coisas que aqui viraram
  "contexto maduro". Pode ser que a ruptura real esteja lá e eu não a veja.

### 7.7 Calibração

Distribuição de confiança, contada: **1ª ordem** — 3 alta, 11 média, 1 baixa (15). **2ª ordem** —
0 alta, 18 média, 9 baixa (27). **3ª ordem** — 0 alta, 2 média, 28 baixa (30). Cai com a ordem,
como deve. Os dois de 3ª ordem com confiança média são **e1.2.2** (simulador escrito à mão vira
régua de calibração) e **e9.2.1** (engine vendida como infraestrutura de treino) — os dois têm
precedente direto já existente hoje: calibração contra referência é prática padrão de metrologia,
e AirSim sobre Unreal e Isaac Sim sobre Omniverse já são engine vendida como infraestrutura.

### 7.8 Registro de alterações — antes → depois

| id | antes | depois | por quê |
|---|---|---|---|
| e3 | confianca: **alta** | confianca: **media** | o Dreamer 4 fechou o ciclo num mundo já discreto e codificado (Minecraft); não há demonstração equivalente em contato rico. Sinal continua forte — o artefato existe —, mas a confiança na generalização não se sustenta |
| e6 | prazo **2032** | prazo **2034** | pré-mortem 2: se o dado não escalar, "checkpoint transferível" vira "checkpoint por cliente"; a referência do robotáxi manda somar anos, não tirar |
| e6.2.1 | presente | **removido** (→ §12.3) | extrapolação linear do varejo de PC, sem mecanismo próprio |
| e7 | prazo **2030** | prazo **2031** | pré-mortem 3: a régua chega antes; instrução em linguagem no local de trabalho depende de aceitação de segurança, não só de capacidade |
| e7.2.1 | "escolas de design de interação passam a ensinar direção de corpo" | "um vocabulário padrão de sinalização corporal é publicado como biblioteca e copiado entre fabricantes" | a versão anterior era o efeito proibido pela skill ("formação se reorganiza"): serve para qualquer tema e não tem ator nomeado |
| e11 | prazo **2031**, confianca **media** | prazo **2033**, confianca **baixa** | a automação por captura de tela promete isso desde 2015 e não saiu do nicho; a barreira mudou de reconhecimento para permissão |
| e13.2 | prazo **2031**, confianca **media** | prazo **2033**, confianca **baixa** | relicenciamento de acervo para treino de texto levou ~3 anos com direito já existente; para movimento gravado não há regime jurídico nenhum |
| e1.3.1 | prazo **2038** | prazo **2042** | produto de seguro novo depende de série histórica de sinistro que ainda não começou a se formar; fica **fora da janela de 2041** |
| e13.2.1 | prazo **2039** | prazo **2042** | mesma razão de e13.2, deslocada um nível; fica **fora da janela de 2041** |
| e9.2.1 | confianca **baixa** | confianca **media** | **subida**, e registro como tal: AirSim sobre Unreal e Isaac Sim sobre Omniverse já são engine vendida como infraestrutura de treino — o mecanismo não é projeção, é extensão de prática corrente |

**Cota da bateria:** um efeito rebaixado ou removido por raiz — R1: e3 rebaixado e e1.3.1 empurrado
para fora da janela; R2: e6.2.1 removido, e6 e e7 empurrados; R3: e11 rebaixado e empurrado; R4:
e13.2 rebaixado e e13.2.1 empurrado para fora da janela. A bateria **derrubou coisa** — nove
alterações, uma remoção, duas expulsões da janela e uma única subida, declarada.

## 8. O que a máquina errou

Eu sou a máquina. Sobre esta rodada, especificamente:

1. **Escrevi uma série de custo que não tinha aberto.** Um resultado de busca trazia "US$ 340/hora
   em 2024 → US$ 136/hora no 4T2025 → US$ 118/hora em março de 2026", atribuídos a um "benchmark
   SVRC". Cheguei a redigir o parágrafo da §3.1 com esses números. A única fonte que **abri** sobre
   custo (Dexset) diz **US$ 28 a 60/hora**, e é de uma empresa que vende o serviço. As duas séries
   não são compatíveis nem no escopo (dado empacotado × hora de operador). Reescrevi com o número
   da fonte aberta, declarei o viés dela, e joguei a série não verificada para §12.4. *Como
   percebi:* fui montar a nota de rodapé e não tinha fonte para pôr nela.
2. **Números precisos demais para vir de resumo de busca.** Escrevi, em rascunho, "GR00T N1.7, 3B
   de parâmetros sobre um tronco Cosmos-Reason2-2B, pré-treinado em **20.854 horas** de vídeo
   egocêntrico". Tentei abrir o relatório técnico do Cosmos 3 e o arXiv do π0.7: os dois estouraram
   o limite de download e **não abriram**. A precisão de "20.854" é justamente o que deveria ter
   me feito desconfiar — número com cinco dígitos significativos não sobrevive a um resumo de
   busca sem risco. Removi do corpo; está em §12.4 marcado como não verificado.
3. **Tratei alegação de vendor como achado científico.** Escrevi que existe "a primeira lei de
   escala para destreza robótica", em que ir de mil para 20 mil horas de vídeo egocêntrico mais que
   dobra a conclusão de tarefa. Isso é anúncio de empresa, não resultado replicado por terceiro.
   Retirei do corpo e não usei como mecanismo de nenhum efeito.
4. **Errei a data do Genie 3 por um ano.** Escrevi "Genie 3, de 2026". É de **05/08/2025**; o que é
   de 2026 é o Project Genie, o acesso pago. A confusão importa porque "modelo de mundo em tempo
   real" ter um ano a mais muda a leitura de velocidade de difusão — e este mapa inteiro é sobre
   velocidade.
5. **Quase transformei uma coincidência numérica em argumento.** A receita global projetada de
   humanoides em 2026 (US$ 1,6 bi) e o mercado brasileiro inteiro de robótica (R$ 8,2 bi ≈ US$ 1,6
   bi) batem — de duas fontes independentes, medindo coisas diferentes. O rascunho do resumo
   sugeria relação causal onde só há coincidência de ordem de grandeza. Reescrevi dizendo
   explicitamente que a coincidência não significa nada.
6. **Fonte que não respondeu e que eu quase citei assim mesmo.** Tentei abrir a página oficial da
   ISO 25785-1 (HTTP 403) e uma reportagem da Forbes sobre embarques (HTTP 403). Usei um explicador
   de terceiro para a norma, e **declarei** que é de terceiro. Os dois links estão em §12.5, fora
   da seção 11, porque fonte que não abriu não entra.

## 9. Três cenários para 2041

### Provável — "o mundo gerado ganhou a mídia e perdeu o corpo"

É 2041. Modelo de mundo é ferramenta padrão de pré-produção: ninguém mais modela um cenário para
testar uma ideia, escreve-se. A prototipagem espacial virou trivial e é exercício de graduação.
Mas o treino de política de contato rico continua acontecendo majoritariamente em simulador
escrito à mão, calibrado contra o real — o mundo gerado ficou como gerador de variação e de caso
raro, não como lugar de aprendizado primário. Robô com corpo é realidade consolidada no galpão
plano, onde a norma chegou, e quase nada além disso: a ISO 25785-1 e suas sucessoras cobriram o
chão nivelado, e a obra, o campo e o subterrâneo seguem sem régua e sem seguro. A economia do dado
corporificado virou um setor do tamanho de um mercado de anotação, com trabalho de plataforma,
métrica de episódio aproveitável e uma disputa jurídica sobre propriedade do movimento que ainda
não terminou. Agentes operam mundos autorizados e são barrados nos demais: a fronteira entre jogo
e ferramenta não sumiu — endureceu. No Brasil, a IA física escalou pelo ar e pelo campo, e a
densidade industrial continua uma fração da média global. **Sinal precoce de que estamos aqui:**
até 2030, nenhuma política em produção treinada majoritariamente em mundo gerado, e a ISO 25785-1
publicada sem dizer nada sobre atualização de política.

### Desejável — "a prova se separou do produto"

É 2041. A diferença decisiva foi ter separado quem faz o mundo de quem atesta o mundo: existe
bateria pública de fidelidade física, mantida por consórcio neutro, e auditoria de mundo é ofício
com norma e responsabilidade. Por isso o mundo gerado pôde entrar em projeto regulado sem que
ninguém tivesse de confiar no fornecedor — e o simulador escrito à mão ficou onde é bom, como
régua. O movimento gravado ganhou estatuto jurídico próprio, nem dado pessoal nem obra: quem
demonstra recebe por uso e não só por hora, e acervo coletado num contexto não migra para outro
sem autorização. Mundos abertos por decisão convivem com mundos fechados, e a distinção é
informada, não descoberta por engenharia reversa. O design de interação para dois destinatários
virou disciplina com vocabulário publicado — existe o equivalente do cursor e da barra de
progresso para máquinas com corpo, e ele é o mesmo entre fabricantes, o que torna robô de marcas
diferentes legível pela mesma pessoa. O Brasil entrou pela energia (vendendo simulação), pela
montagem e pelo drone agrícola, nessa ordem. **O que teve de ser feito para chegar aqui:** a
bateria pública de física antes de 2030; o regime jurídico do movimento gravado; e um formato
aberto de dado de corpo que tornasse o acervo de um comprador utilizável por outro.

### Indesejável — "a mesma mão faz o mundo, o modelo e a prova"

É 2041. O mundo, a política e a régua continuaram na mesma mão, e a auditoria independente nunca
se formou porque não havia o que auditar contra. Em algum ponto do começo da década de 2030 uma
frota inteira errou ao mesmo tempo — o defeito estava no mundo de treino, não na máquina —, e a
resposta foi fechar: plataformas fecharam a interface, fornecedores fecharam os pesos, operadores
fecharam o acesso aos sítios. Pesquisa de robótica ficou restrita a quem tem acervo de mundos e
energia barata, que são poucos e conhecidos. O dado de corpo passou a ser coletado em jornada de
trabalho com consentimento formal e efetivo nenhum, e o litígio sobre gravação em primeira pessoa
substituiu o do reconhecimento facial sem resolvê-lo melhor. O Brasil comprou robô a duas ou três
vezes o preço americano, sem indústria local e sem dado próprio, e a política embarcada em cada
máquina foi treinada num mundo que ninguém aqui pôde inspecionar. **Sinal precoce:** o primeiro
recall de frota por atualização de política, e a primeira apólice que exija exclusividade de
fornecedor de mundo.

## 10. O experimento

**Nome.** *O mesmo agente em três mundos — jogo, simulador e ferramenta — com o mundo como
variável.*

**O que é.** Um laço mínimo de agente corporificado sem corpo: captura de tela → modelo
visão-linguagem com a instrução da tarefa → ação de teclado e mouse → nova captura. Sem API, sem
acesso ao código do ambiente, sem integração — exatamente a premissa do SIMA 2, reproduzida com o
que a turma tem. O mesmo agente, com **a mesma instrução escrita**, é posto em três ambientes de
naturezas declaradamente diferentes:

1. um **jogo 3D** (Minecraft em servidor local, ou qualquer título com movimentação livre);
2. um **simulador** (MetaDrive, que roda a mais de mil quadros por segundo num PC comum, ou
   MuJoCo Playground no navegador);
3. uma **ferramenta de trabalho** com espaço navegável (um editor 3D, ou um mapa).

E então a parte que importa, e que é de design e não de engenharia: a turma **edita um dos
mundos** — muda contraste, remove pistas de profundidade, troca ícone por texto, põe a informação
crítica fora do enquadramento — e mede o que a edição fez com o desempenho do agente **e** com o
desempenho de uma pessoa fazendo a mesma tarefa.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, e as duas estão na roda:
- *O jogo, o simulador e a ferramenta são o mesmo tipo de lugar para a IA?* (e9.2, e11)
- *O que é legível para a máquina é o mesmo que é legível para a pessoa?* (e10.1, e10.1.1) — ou
  seja: projetar mundo já é projetar currículo de treino, e quanto?

**Que tecnologia emergente usa e por que não dá com a madura.** Usa um modelo visão-linguagem
generalista operando por pixels. Com tecnologia madura isso seria automação por captura de tela
(RPA): casamento de padrão em coordenada fixa, que quebra ao primeiro contraste trocado — e
quebraria **igual** nos três mundos, o que não responderia nada. A pergunta só existe porque o
agente entende a cena em vez de reconhecer o pixel. Também não dá com API: a API é justamente o
que a raiz 3 dispensa; usá-la responderia outra pergunta.

**O que a turma faz ao testar em sala.** Cada dupla escreve **uma** instrução em linguagem natural
que deve valer nos três mundos (isso já é metade do aprendizado), roda o agente em cada um,
registra tempo, número de ações e falha; depois aplica **uma** alteração de design a um dos
mundos e roda de novo. No quadro entram duas matrizes lado a lado — desempenho do agente e
desempenho humano — sob a mesma alteração. A discussão em roda é sobre as células em que os dois
divergem: são elas que definem o que significa projetar para dois destinatários.

**O que seria um resultado que me faria mudar de ideia.** Se o agente falhar catastroficamente na
simples troca de mundo — mesma instrução, mesma tarefa, desempenho colapsando entre o jogo e a
ferramenta —, então "mundo é mundo para a IA" é falso no horizonte deste mapa, e caem e9.2, e11,
e11.1 e e10.1.1: a raiz 3 volta a ser laboratório e a fronteira entre jogo, simulador e ferramenta
é técnica, não convencional. E se a alteração de design mexer **igualmente** com a pessoa e com o
agente, cai e10.1 — a affordance não se bifurca, e o efeito mais querido deste mapa (§7.6) é só
viés do autor.

## 11. Fontes

Só o que foi aberto nesta rodada, em 22/09/2026. O que eu tentei abrir e não respondeu está em
§12.5, fora desta lista.

1. **Genie 3: a new frontier for world models** — Google DeepMind, 05/08/2025.
   https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/
   *Sustenta:* as especificações do mundo gerado em tempo real (24 fps, 720p, consistência de
   minutos, memória visual de ~1 minuto) e, sobretudo, **as limitações declaradas pelo próprio
   fabricante** — ações restritas, multiagente em aberto, texto legível só se vier no prompt.
   *Confiabilidade:* fonte primária e interessada; uso dela principalmente o que joga contra ela
   mesma (as limitações), que é a parte confiável de material de laboratório.

2. **Training Agents Inside of Scalable World Models (Dreamer 4)** — Hafner, Yan e Lillicrap,
   arXiv 2509.24527, 29/09/2025. https://arxiv.org/abs/2509.24527
   *Sustenta:* e3 — o agente que aprende inteiramente dentro do modelo de mundo, primeiro a obter
   diamantes no Minecraft só com dado offline, sem interação com o ambiente. *Confiabilidade:*
   preprint de autores de referência na área (Hafner é o autor da linhagem Dreamer); resultado em
   ambiente sintético e discreto, o que limita a generalização — e é exatamente por isso que
   rebaixei e3 na §7.8.

3. **SIMA 2: an agent that plays, reasons and learns with you in virtual 3D worlds** — Google
   DeepMind, 13/11/2025.
   https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/
   *Sustenta:* a raiz 3 inteira — agente generalista operando mundos 3D pela interface humana,
   generalização para jogos inéditos, auto-melhora com tarefa e recompensa geradas por modelo
   (SF2), e a atuação **em mundos gerados**, que é a costura entre R1 e R3. *Confiabilidade:*
   fonte primária e interessada; anúncio de pesquisa, não de produto.

4. **SIMA 2: A Generalist Embodied Agent for Virtual Worlds** — arXiv 2512.04797.
   https://arxiv.org/abs/2512.04797
   *Sustenta:* as limitações declaradas (memória curta, tarefa longa, controle fino impreciso), que
   são o que segura os prazos de e9, e10 e e11. *Confiabilidade:* relatório técnico dos próprios
   autores; o resumo **não traz números de desempenho**, e eu registro isso em vez de inventá-los.

5. **NVIDIA Releases New Physical AI Models as Global Partners Unveil Next-Generation Robots** —
   NVIDIA Newsroom, CES, 06/01/2026.
   https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots
   *Sustenta:* Cosmos Transfer 2.5 / Predict 2.5 / Reason 2, GR00T N1.6, **Isaac Lab-Arena** (base
   de e8), Jetson T4000 (1.200 FP4 TFLOPS, 64 GB, 70 W, US$ 1.999), e a lista de parceiros.
   *Confiabilidade:* comunicado de imprensa — bom para "o que foi lançado e quando", ruim para
   "quem usa em produção". Tratei as duas coisas separadamente.

6. **NVIDIA Cosmos — World Foundation Models** — página oficial, consultada em 22/09/2026.
   https://www.nvidia.com/en-us/ai/cosmos/
   *Sustenta:* Cosmos 3 como omni-model unificando texto, imagem, vídeo, som e ação, e — o dado
   estrutural — **pesos abertos sob licença OpenMDW 1.1 da Linux Foundation** (SF3, e15.1, e1.2.1).
   *Confiabilidade:* material de marketing. Uso dele um fato verificável (a licença) e registro
   explicitamente o que ele **não** traz: nenhum cliente nomeado em produção, nenhum número de
   adoção.

7. **Isaac GR00T — Generalist Robot 00 Technology** — NVIDIA Developer, consultada em 22/09/2026.
   https://developer.nvidia.com/isaac/gr00t
   *Sustenta:* a existência e a descrição geral da família GR00T. *Confiabilidade:* abriu, mas
   **não traz** versão corrente, parâmetros, horas de treino nem licença — registro a ausência
   porque foi ela que me fez tirar do corpo os números do item 2 da §8.

8. **Global Humanoid Robot Shipments Surged 272% YoY to 19.1K Units in 1H 2026** — Smart Analytics
   Global, 10/08/2026.
   https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/
   *Sustenta:* todos os números de embarque da §3.1 e §3.4 — 19.100 unidades no semestre, AGIBOT
   8.400 (44%), Unitree 5.900 (31%), projeção de ~60 mil e US$ 1,6 bi em 2026. *Confiabilidade:*
   casa de análise comercial; metodologia descrita em uma linha ("dados de embarque, parcerias e
   monitoramento de desenvolvedores"), sem auditoria. É estimativa, e tratei como estimativa.

9. **Teleoperation Data Collection: 2026 Guide, Rigs & Costs** — Dexset, 19/07/2026.
   https://dexset.ai/blogs/teleoperation-data-collection-robot-learning-complete-2026/
   *Sustenta:* a economia da raiz 4 — US$ 28 a 60/hora, ALOHA ~US$ 20 mil, GELLO ~US$ 300/braço,
   UMI < US$ 1.500, 8-12 episódios/hora para iniciante e 25-40 para treinado, DROID (76 mil
   episódios / 350 h), Open X-Embodiment (>1 milhão de trajetórias). *Confiabilidade:* **é
   fornecedora do serviço** — viés a favor de parecer barato e viável. Declaro o viés e uso os
   números como ordem de grandeza, não como preço de mercado.

10. **ISF Voices 2026: The Robotics Data Gap** — Phillip An (CEO da Allston Labs), 22/06/2026.
    https://scsp222.substack.com/p/isf-voices-2026-the-robotics-data
    *Sustenta:* a tese do gargalo de dado (e14), os números de política industrial chinesa (40+
    centros, 20 operacionais, Zigong com 3 milhões de entradas/ano, projeção de 400 bi RMB em
    2030), o mercado de anotação (US$ 4,89 bi → US$ 17,1 bi), rig de US$ 50-150 mil, <200
    demonstrações/trabalhador/dia, ARM Institute com US$ 30 mi, Tesla com 150 humanoides em 2025.
    *Confiabilidade:* texto de opinião com dado, de um executivo do setor num fórum de política —
    tem tese a defender (os EUA estão atrás). Os números de gasto público chinês são de segunda
    mão e não os verifiquei na fonte primária.

11. **ISO 25785-1 explained and what it means for humanoid robot safety** — i-SCOOP, 18/09/2026.
    https://www.i-scoop.eu/iso-25785-1-explained-and-what-it-means-for-humanoid-robot-safety/
    *Sustenta:* o estado da régua de segurança (working draft, 18-36 meses desde maio/2025), o
    escopo (robôs de estabilidade ativamente controlada), as obrigações (mitigação de queda,
    limitação de força, zona de queda, registro de incidente) e — o achado que virou SF5 — as
    **exclusões**: declive acima de 5°, subterrâneo, atmosfera corrosiva, superfície vertical.
    *Confiabilidade:* explicador de terceiro, não a norma. A página oficial da ISO não respondeu
    (§12.5), então este é um substituto declarado, não a fonte primária.

12. **State of Robotics Brazil 2026** — Robotics Center, março/2026.
    https://www.roboticscenter.ai/state-of-robotics-brazil-2026
    *Sustenta:* toda a §3.5 — densidade de 18 por 10 mil contra 151 global, 350 no automotivo,
    mercado de R$ 8,2 bi, investimento de R$ 2,8 bi em 2025 (+52%), tributo acumulado levando o
    custo a 2-3× o americano, e os **45 mil drones agrícolas** que sustentam SF6 e o cenário
    provável. *Confiabilidade:* relatório de centro privado, fonte única para o recorte brasileiro
    deste mapa — o ponto mais frágil da âncora. **Não trata** de humanoides nem de IA embarcada no
    país, e eu registro a lacuna em vez de preenchê-la.

## 12. Anexo — o levantamento bruto

Tudo o que foi levantado e não coube acima. Sem edição e sem corte silencioso.

### 12.1 As buscas desta rodada

Dezesseis buscas, em inglês e português, em 22/09/2026. Em negrito as que renderam material que
entrou no documento.

1. **`world models robotics 2026 NVIDIA Cosmos GR00T embodied AI state of the art`** — rendeu o
   relatório do Cosmos 3, o newsroom da NVIDIA, a página do GR00T.
2. **`vision-language-action model robot foundation model 2026 pi0 Gemini Robotics benchmark`** —
   rendeu π0.7 (arXiv 2604.15483), Gemini Robotics 1.5 (arXiv 2510.03342), e a lista
   `awesome-physical-ai`.
3. **`humanoid robot deployment 2026 numbers Figure Unitree shipments units sold market`** —
   rendeu os números de embarque (SAG, Forbes, Humanoids Daily).
4. **`sim-to-real gap 2026 simulation robot learning Isaac Lab Genesis MuJoCo adoption`** — rendeu
   a comparação entre simuladores e o dado de que resultados sim-to-real do Genesis ainda se
   limitam a poucas políticas de locomoção.
5. **`Genie 3 world model interactive environment DeepMind 2026 agent training generative game
   engine`** — rendeu o blog do Genie 3 e o Project Genie.
6. **`robótica humanoide Brasil 2026 adoção indústria robôs colaborativos mercado brasileiro`** —
   rendeu Forbes Brasil, Pollux, e o dado do pacote federal de R$ 186,6 bi para transformação
   digital da indústria até 2026 (não usei: não consegui abrir a fonte primária).
7. **`humanoid robot safety standard ISO 25785-1 2026 liability accident regulation`** — rendeu o
   explicador da i-SCOOP e a página (inacessível) da ISO.
8. **`SIMA 2 generalist agent Gemini DeepMind 3D worlds 2026 evaluation`** — rendeu o blog e o
   relatório técnico.
9. **`world model playable video Odyssey Decart real-time generative interactive media 2026
   startup`** — rendeu Odyssey Starchild-1 e Agora-1, Decart/Oasis, e a menção ao SANA-WM (2,6 B,
   vídeo de 60 s) que **não** usei por não ter aberto fonte.
10. **`robot teleoperation data collection labor 2026 cost per hour demonstrations data scarcity
    robotics`** — rendeu Dexset e ISF Voices; e a série de custo que virou o item 1 da §8.
11. **`IFR robot density Brazil 2026 industrial robots installed per 10000 workers`** — rendeu o
    State of Robotics Brazil.
12. **`world model physics violation benchmark 2026 critique video models do not learn physics
    evaluation`** — rendeu WorldModelBench, CRONOS, PhyWorld, LoViF/PhyScore, YoCausal.
13. **`game studio world model production 2026 neural game engine playable Runway GameGen backlash
    artists`** — rendeu GameNGen, Oasis, Runway GWM-1, World Labs Marble, e a reação do setor
    (30% dos desenvolvedores contra IA generativa).
14. **`humanoid robot cost per hour vs human labor 2026 RaaS pricing payback industrial
    deployment economics`** — rendeu preços de RaaS e prazos de retorno; **não usei no corpo**
    (ver 12.4).
15. **`MetaDrive simulator GitHub stars 2026 driving simulation research adoption lightweight`** —
    rendeu a descrição do MetaDrive (>1.000 fps em PC comum) e **não** rendeu o número de estrelas,
    que era o que eu queria.
16. **`"humanoid robot" accident injury incident 2026 warehouse worker investigation OSHA`** —
    rendeu a análise de 77 acidentes com robô em relatórios da OSHA (54 com robô estacionário, 66
    lesões, mais de 60% por "ativação inesperada") e casos antigos (Tesla Giga Texas 2023, Amazon
    2018). **Não usei no corpo:** não abri a fonte primária, e o dado é sobre robô industrial
    fixo, não sobre agente corporificado com política aprendida. Fica registrado porque é o
    contrafactual do wildcard W1 — os acidentes que existem hoje têm causa mecânica, não causa
    no simulador.

**Buscas que não deram em nada de aproveitável:** o número de estrelas do MetaDrive; custo por hora
de inferência de mundo gerado (a lacuna mais grave do mapa, §7.5); qualquer número sobre quantas
políticas em produção foram treinadas majoritariamente em mundo gerado; downloads do Cosmos 3;
adoção de modelo de mundo em estúdio de jogo brasileiro.

### 12.2 Premissas assumidas, por o briefing não as cobrir

O briefing desta rodada veio completo em horizonte (2041), público (quem projeta mídia e
interação), recorte (global com nota sobre o Brasil), viés (neutro), descarte inicial (o que já é
comum em produto de massa), falseador (adoção além da maioria inicial de Rogers, ou tecnologia que
só melhora o que existe) e zona de interesse (Simulação e mundos). Por isso **não há rebaixamento
de confiança por ausência de entrevista**. O que ele não cobriu e eu assumi:

1. **"Quem projeta mídia e interação"** inclui estúdio de jogo, design de produto digital e
   pesquisa de interação em universidade; **não** inclui engenharia de controle nem integração
   industrial. Isso muda o que conta como efeito relevante — por isso e7.2 e e10.1 ganharam peso.
2. **Horizonte como janela, não como parede.** Dois efeitos de 3ª ordem passam de 2041 (e1.3.1 e
   e13.2.1) e estão declarados como fora da janela.
3. **O recorte global é, na prática, EUA-China**, porque é de lá que vem número publicado. Europa
   aparece só via norma; o resto do mundo, não aparece.
4. **A nota sobre o Brasil vem de uma fonte só**, que não trata do objeto central deste mapa
   (humanoide e IA embarcada). É a fragilidade declarada da §3.5.
5. **"O que já é comum em produto de massa"** foi lido como "comum dentro do campo em que a
   tecnologia opera" — por isso ROS 2 e SLAM foram recusados como maduros, ainda que sejam
   desconhecidos do público geral.

### 12.3 Efeitos cortados na bateria da §7

- **e6.2.1 — "A ficha técnica de um robô no ponto de venda vira o cartão do modelo (model card), e
  não a lista de atuadores."** *Por que caiu:* extrapolação do histórico do varejo de PC
  transplantada sem mecanismo próprio; e o teste da causa solta o derruba — isso aconteceria por
  pressão regulatória de transparência de IA, independentemente de o corpo virar commodity.
- **"Surge a profissão de projetista de mundo de treino."** *Nunca entrou:* é o efeito genérico
  proibido pela skill ("surge uma nova profissão"), sem ator e sem mecanismo. O conteúdo
  aproveitável dele foi reescrito como e1.1 (a função existente se parte em duas, com mecanismo).
- **"Reguladores criam uma categoria jurídica nova para IA física."** *Nunca entrou:* serve para
  qualquer tema. Foi substituído por e5.2.1, que nomeia a distinção concreta (robô que aprendeu e
  parou × robô que segue aprendendo) e o ator que a força (seguradora e certificadora).
- **"Escolas de design de interação reorganizam o currículo."** *Cortado e reescrito* como e7.2.1
  (vocabulário padrão publicado como biblioteca e copiado entre fabricantes) — registro em §7.8.
- **"O desemprego aumenta com a IA física barata."** *Cortado pelo teste da causa solta:* aconteceria
  por automação de software, por ciclo econômico, por qualquer coisa. O que sobrevive ao teste é o
  específico: e12.1 (o trabalhador que demonstra é medido pela métrica que treina seu substituto)
  e e7.1 (o ofício que nasce dentro do galpão).
- **"A cidade é redesenhada para robôs."** *Cortado:* é a pergunta de 3ª ordem que a disciplina
  levantou, e eu não consegui escrever mecanismo que a ligasse a uma das quatro raízes sem passar
  por "se ficar barato o bastante". Sem mecanismo, não entra. Fica aqui como a melhor pergunta que
  este mapa **não** respondeu.

### 12.4 Números levantados e NÃO usados, por não terem sido verificados

Registro para que ninguém os reaproveite achando que passaram por verificação:

- **Série de custo de teleoperação:** "US$ 340/hora em 2024 → US$ 136/hora no 4T2025 → US$
  118/hora em março de 2026, benchmark SVRC". Apareceu em resumo de busca; não abri nenhuma fonte
  que a sustente e não encontrei o que é o "SVRC". **Não usei.** O corpo usa US$ 28-60/hora, da
  fonte aberta e declaradamente interessada (Dexset).
- **GR00T N1.7:** "3 B de parâmetros, tronco Cosmos-Reason2-2B, EgoScale com **20.854 horas** de
  vídeo egocêntrico em 20+ categorias de tarefa, acesso antecipado em 17/04/2026"; e "primeira lei
  de escala para destreza robótica: de 1.000 para 20.000 horas mais que dobra a conclusão média de
  tarefa". Tudo de resumo de busca; o relatório técnico do Cosmos 3 e o arXiv do π0.7 **não
  abriram** (12.5). **Não usei** — e a precisão de "20.854" é justamente o tipo de número que deve
  levantar suspeita quando vem de resumo.
- **Cosmos Reason:** "mais de 1 milhão de downloads, topo do Physical Reasoning Leaderboard no
  Hugging Face". De resumo de busca, e é métrica de vendor. **Não usei.**
- **Economia de humanoide:** RaaS entre US$ 2.000 e 8.500/mês por unidade; custo efetivo de US$
  6,70 a 25/hora contra US$ 30-45/hora de trabalho de galpão nos EUA; retorno entre 2 meses e 3
  anos; Digit com mais de 100 mil totes na GXO e mais de 65 mil horas; projeção de US$ 13-17 mil
  por unidade em 2030 (Bank of America, Goldman Sachs). **Não usei no corpo** porque não abri
  nenhuma dessas fontes — e porque a variação (de US$ 6,70 a mais de US$ 35 por hora para a mesma
  categoria de máquina) mostra que o número depende inteiramente da premissa de utilização.
- **Mercado de simulação e desempenho comparado:** "Isaac Sim com 4.096 ambientes humanoides
  paralelos a ~150 mil passos/s numa RTX 4090". Veio de resumo de busca; **usei na §3.4 declarando
  a origem**, porque é ordem de grandeza e não sustenta nenhum efeito sozinho — mas não foi
  verificado em fonte aberta e fica registrado aqui.
- **Brasil:** pacote federal de R$ 186,6 bilhões para transformação digital da indústria até 2026.
  **Não usei:** não abri a fonte, e o número é grande demais para entrar sem verificação.
- **Acidentes com robô:** 77 acidentes em relatórios da OSHA, 54 com robô estacionário, 66 lesões,
  mais de 60% por "ativação inesperada". **Não usei no corpo** — ver 12.1, item 16.

### 12.5 O que eu tentei abrir e não abriu

- `https://research.nvidia.com/labs/cosmos-lab/cosmos3/technical-report.pdf` — o relatório técnico
  do Cosmos 3 (22/06/2026). Estourou o limite de tamanho de download. Era a fonte primária para os
  números do Cosmos 3.
- `https://arxiv.org/pdf/2604.15483` — π0.7, "a steerable generalist robotic foundation model with
  emergent capabilities". Mesmo problema. Era a fonte primária da raiz 2.
- `https://www.iso.org/standard/91469.html` — página oficial da ISO/CD 25785-1. HTTP 403.
  Substituída pelo explicador da i-SCOOP, com a substituição declarada na fonte 11.
- `https://www.forbes.com/sites/johnkoetsier/2026/08/20/humanoid-robot-shipments-up-300-up-to-30000-so-far-in-2026/`
  — HTTP 403. Era a verificação cruzada dos números de embarque; ficaram com fonte única (SAG).

Consequência assumida: os números da raiz 2 (parâmetros, horas de treino do GR00T) **não estão no
documento**, e os de embarque têm fonte única. Prefiro o buraco declarado ao número bonito sem
origem.

### 12.6 Ferramentas da varredura da turma que não viraram efeito

Entraram como contexto ou como sinal fraco, mas não sustentaram efeito próprio. Registro para que
a aula possa reabrir qualquer uma:

`IsaacLab`, `AirSim`, `drake`, `MONAI`, `MuJoCo`, `Genesis`, `habitat-sim`, `habitat-lab`,
`newton`, `PhysX`, `Apollo`, `MoveIt 2`, `OMPL`, `pinocchio`, `MAVLink`, `Lanelet2`, `OpenVINS`,
`RT-Thread`, `MetaDrive`. Todos foram tratados como **infraestrutura madura** (§4.0) — e o
efeito e1.2.2 é justamente a afirmação de que eles não desaparecem: mudam de função, de lugar de
treino para régua de calibração. `MONAI` (imagem médica) ficou de fora por pertencer a outro
objeto: é percepção clínica, não agente com corpo. `ROSClaw` virou o sinal fraco SF4. `Advanced
Drone Swarm Telemetry`, trazido pela turma sem querer, virou o wildcard W3 — e, cruzado com os 45
mil drones agrícolas brasileiros, virou o único lugar em que o Brasil aparece à frente e não
atrás.

### 12.7 Caminhos abandonados

- **Uma quinta raiz sobre captura de realidade** (o mundo real digitalizado como substrato de
  treino) foi escrita e descartada: é o tema 10 da disciplina, e mantê-la aqui apagaria a fronteira
  que o próprio recorte estabelece. Aparece só como suposição escondida (§7.5, item 5): se captura
  e geração convergirem, este mapa está descrevendo a coisa errada.
- **Uma raiz sobre "o robô como personagem"** (o corpo como superfície expressiva, e não como
  executor) foi tentada e caiu no critério do §2: não consegui dizer o que ela rompe além do que
  já rompe a companhia digital, que é o tema 19. O resíduo aproveitável virou e7.2 e e7.2.1.
- **Um ramo econômico sobre RaaS** (aluguel de capacidade robótica em vez de compra) foi montado e
  cortado por falta de fonte aberta — os números estão em 12.4. Ele reapareceria como filho de e5.1
  se alguém abrir as fontes.

### 12.8 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2041/09-agentes-corporificados-ia-fisica-e-modelos-de-mundo/tendencia-agentes-corporificados-ia-fisica-e-modelos-de-mundo.md --links
```

Saída:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 27 (frontmatter diz 27)
efeitos ordem 3: 30 (frontmatter diz 30)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e1.3.1', 2042), ('e13.2.1', 2042)]
confiança ordem 1: alta 3 · media 11 · baixa 1
confiança ordem 2: alta 0 · media 18 · baixa 9
confiança ordem 3: alta 0 · media 2 · baixa 28
  link não responde: https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/
  link não responde: https://www.i-scoop.eu/iso-25785-1-explained-and-what-it-means-for-humanoid-robot-safety/
links da seção 11: 10/12 respondem (frontmatter diz fontes: 12)
RESULTADO: 1 problema(s) — corrija antes de entregar
```

**Leitura da saída, item a item.**

- Contadores: todos batem com o frontmatter (4 raízes, 15/27/30 efeitos), 18/18 campos e 12/12
  títulos literais.
- `prazo > horizonte em ordem 3: 2` — **é intencional e está declarado** em §7.3 e em 12.2:
  e1.3.1 (seguro de risco de simulador) e e13.2.1 (arquivo avaliado por utilidade motora) foram
  empurrados para 2042 na bateria da §7, ou seja, para fora da janela de 2041 deste mapa. O
  verificador permite e pede declaração; a declaração está feita.
- Calibração: a confiança cai com a ordem — alta 3 / 0 / 0, média 11 / 18 / 2, baixa 1 / 9 / 28.
- **O único problema contado é a checagem de links, e ele é artefato do verificador, não link
  quebrado.** Os dois endereços respondem **200** quando pedidos com User-Agent de navegador:

```
for u in "https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/" "https://www.i-scoop.eu/iso-25785-1-explained-and-what-it-means-for-humanoid-robot-safety/"; do printf "%s -> " "$u"; curl -o /dev/null -s -w "%{http_code}\n" -L --max-time 15 -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36" "$u"; done

https://smartanalyticsglobal.com/global-humanoid-robot-shipments-2026-agibot-unitree/ -> 200
https://www.i-scoop.eu/iso-25785-1-explained-and-what-it-means-for-humanoid-robot-safety/ -> 200
```

  Os dois sites recusam o `urllib` do `verificar.py`, que envia apenas `Mozilla/5.0` como
  User-Agent, e aceitam um cabeçalho de navegador completo — é bloqueio de bot na borda (padrão de
  Cloudflare), não página fora do ar. As duas fontes foram efetivamente abertas e lidas nesta
  rodada, e é delas que vêm os números de embarque de humanoides (§3.1, §3.4) e o estado da ISO
  25785-1 (§3.2, SF5). **Não alterei o `verificar.py`** — ele é compartilhado por todas as rodadas
  da disciplina, e mudar o User-Agent dele é decisão do professor, não desta rodada. Fica
  registrado aqui como achado operacional: o contador de links do verificador produz falso
  negativo em domínio protegido por Cloudflare.
