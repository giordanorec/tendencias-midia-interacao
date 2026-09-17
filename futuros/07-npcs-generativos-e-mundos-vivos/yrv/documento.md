---
tema: "NPCs generativos e mundos vivos"
slug: npcs-generativos-e-mundos-vivos
autor_login: yrv
zona_de_interesse: "Simulação e mundos"
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [NVIDIA ACE, Mistral NeMo Minitron, Qwen3-8B, Gemma, Smart Zoi, CPC (Co-Playable Character), PUBG Ally, NARAKA BLADEPOINT MOBILE, inZOI, Dead Meat, Ubisoft NEO NPC, Ubisoft Teammates, SEED, Knowledge Graph, Retail Mage, INFUSE, sglang, Whispers from the Star, Gemini 2.0 Flash, ElevenLabs, Mantella, koboldcpp, Ollama, LM Studio, llama.cpp, vLLM, OpenGameAgent, ReAct, Inworld Runtime, NCP-Bench, WSE-bench, EU AI Act Artigo 50, SAG-AFTRA 2025 Interactive Media Agreement, Steam AI disclosure]
fontes: 23
confianca: media
experimento: "O tribunal do personagem — um grupo escreve a POLÍTICA de um NPC agente (quem ele é, o que ele não pode fazer), outro grupo joga tentando quebrá-la, e um terceiro julga cada quebra; mede-se turnos até a primeira violação e, sobretudo, o desacordo entre juízes sobre o que conta como bug"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

O personagem não jogável está deixando de ser texto escrito antes e passando a ser
comportamento decidido durante. Este mapa sustenta que a ruptura não está na conversa — um NPC
que fala bonito e não muda nada no mundo é a árvore de diálogo com mais folhas —, e sim em três
lugares que quase nunca aparecem juntos. **Primeiro: o personagem age.** Em **6 de janeiro de
2025** a NVIDIA anunciou personagens que "percebem, planejam e agem como jogadores humanos"; em
**13 de março de 2025** o `inZOI` embarcou um modelo de **0,5 bilhão de parâmetros** rodando na
máquina do jogador, e um dos modelos da mesma família "cabe em apenas 1,5 GB de VRAM". A
competência que isso torna sem valor tem nome: enumerar por escrito, antes, todo comportamento
que o jogo admite. **Segundo: o mundo não pausa.** Em **5 de agosto de 2026** a Klang pôs o
`SEED` em acesso antecipado — milhares de personagens que trabalham, se relacionam e envelhecem
enquanto ninguém olha, cada um com um grafo de conhecimento próprio, porque "se um personagem se
apaixona por outro, isso só é verdade do ponto de vista dele". O save deixa de restaurar o mundo
e passa a guardar uma relação. **Terceiro: o custo do personagem migra de produção para
operação.** O estúdio de `Retail Mage` descreve que, no início, "cada sessão de jogo era tão cara
quanto um ingresso da Disneylândia", e que foi preciso derrubar isso em "1000x — três ordens de
magnitude"; quem vende inferência publica preço por GPU-hora, e quem depende de fornecedor
descobre, como o `Stormgate` em **março de 2026**, que o host pode ser comprado por uma empresa
de IA e sair do ramo de jogos. O que segura o mapa não é entusiasmo: em **agosto de 2026** um
benchmark de narrativa interativa mediu que o melhor modelo mantém a coerência em apenas **42%
das execuções depois de 20 turnos**, com conflito factual entre **40% e 68%** conforme o modelo —
e a pesquisa GDC de **2026** registra **52%** dos profissionais dizendo que a IA generativa faz
mal à indústria. O personagem já decide. Ninguém ainda sabe dizer, com acordo entre pessoas, o
que é um **bug** num personagem que decide — e é essa indefinição, não a tecnologia, que organiza
os efeitos deste mapa.

## 2. O tema

**O objeto.** Um NPC generativo é um personagem cujo comportamento não está escrito antes: ele
recebe um objetivo, um estado de mundo e um conjunto de ações permitidas, e decide o que fazer
com isso a cada momento. "Mundo vivo" é o passo seguinte — o conjunto desses personagens continua
operando quando o jogador fecha o jogo. Não é uma melhoria de diálogo: é a retirada de um
pressuposto que sustenta a prática de design há quarenta anos, o de que **o espaço do que pode
acontecer é fechado por quem projeta**.

**Onde encosta em mídia e interação.** Em três lugares, e nenhum deles é "gráficos". Primeiro, na
**autoria**: quem escreve deixa de produzir falas e passa a produzir restrições — o objeto
autoral vira a política do personagem, não o texto dele. Segundo, na **avaliação**: um artefato
que responde diferente a cada execução não pode ser aprovado por inspeção, e isso atinge QA,
classificação indicativa e crítica ao mesmo tempo. Terceiro, na **relação**: um personagem que
lembra do jogador entre sessões converte um produto em vínculo, e vínculo tem propriedades que
produto não tem — dura, é assimétrico, e acaba quando alguém desliga um servidor.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque o estado da arte
aqui já está razoavelmente descrito e é, em larga medida, *decepcionante* — e é exatamente a
distância entre a capacidade demonstrada e a prática instalada que produz futuro. Há
demonstração comercial embarcada (`inZOI`, `NARAKA: BLADEPOINT MOBILE`, `Dead Meat`,
`Whispers from the Star`, `Retail Mage`, `SEED`), há infraestrutura aberta (`OpenGameAgent`, MIT,
alpha), há contrato sindical que já prevê **geração em tempo real** como categoria remunerada, e
há regulação que entrou em vigor em **2 de agosto de 2026** obrigando quem interage com pessoas a
dizer que é IA. E, ao mesmo tempo, há uma medida acadêmica dizendo que a coerência longa não se
sustenta, e uma pesquisa com **130 participantes** mostrando que o NPC generativo **aumenta a
carga cognitiva** do jogador (p < .001) **sem melhorar** a experiência de jogo (p = .195). Um
levantamento de estado da arte listaria as duas coisas. Um mapa de futuro tem de dizer o que
acontece quando elas colidem — e essa colisão é o assunto aqui.

**A fronteira deste mapa** (declarada, e usada para cortar): não trata de **simulação social como
método de investigação** (tema 6 — lá o objeto é a validade da leitura; aqui é o personagem
dentro de regras); não trata de **história gerada, coautoria e novela visual** (tema 8 — lá o
objeto é a narrativa; aqui, o agente); não trata de **companheiro digital fora de um mundo com
regras** (tema 19 — lá o objeto é o vínculo sem jogo). Também não trata de IA generativa aplicada
à **produção** de jogos (arte, código, localização) — isso é outra história econômica, que aparece
neste mapa apenas como ruído estatístico nos dados de divulgação da Steam, e está marcado como
tal.

## 3. Onde isso está hoje

Esta seção é a âncora. Tudo que estiver afirmado aqui foi aberto nesta sessão; o que não foi está
dito como não apurado.

### 3.1 O personagem que age já está embarcado — em modelos pequenos, no dispositivo

Em **6 de janeiro de 2025**, no CES, a NVIDIA apresentou os *ACE autonomous game characters*,
descritos como personagens que "usam IA para perceber, planejar e agir como jogadores humanos". A
lista de jogos anunciados junto é concreta: `PUBG: BATTLEGROUNDS` (o *PUBG Ally*), `inZOI`
(*Smart Zoi*), `NARAKA: BLADEPOINT MOBILE` na versão PC, `MIR5` (chefes adaptativos), `Dead Meat`
(mistério de assassinato conversacional), `AI People`, `ZooPunk`. Os modelos citados são pequenos
de propósito: `Mistral-Nemo-Minitron` em 8B, 4B e **2B — este último "cabe em apenas 1,5 GB de
VRAM"** —, mais um modelo de áudio e um de visão de 4B. A justificativa técnica declarada para o
tamanho é a frequência de decisão: jogadores tomam "cerca de 8 a 13 microdecisões por segundo", e
um modelo grande em nuvem não acompanha isso.

Em **13 de março de 2025** a NVIDIA detalhou o embarque: `inZOI` entrou em acesso antecipado em
**28 de março de 2025** com *Smart Zoi* rodando um **Mistral NeMo Minitron de 0,5 bilhão de
parâmetros** destilado, e `NARAKA: BLADEPOINT MOBILE` (PC) em **27 de março de 2025** com colegas
de time que ajudam em combate, acham itens e sugerem estratégia. A página é explícita quanto ao
ponto que mais importa para este mapa: roda **no dispositivo**, em GPU GeForce RTX, sem
dependência de nuvem. No caso de `Dead Meat`, a NVIDIA afirma que o diálogo é gerado localmente
"pela primeiríssima vez".

Em **21 de outubro de 2025** o ACE passou a suportar o **Qwen3-8B** aberto para execução local,
com a promessa de "raciocínio em tempo real diante de eventos não roteirizados". A mesma página
não traz número de latência — e isso é sintomático: a documentação de fornecedor descreve
capacidade, não custo de operação.

Do lado aberto, o `OpenGameAgent` é um runtime em C# sob licença MIT que dá ao personagem
"compreensão de contexto estruturado, raciocínio e uso de ferramentas em ReAct, decomposição de
tarefas complexas, planejamento durável que se adapta a evidência nova e execução confiável
através de ferramentas do próprio jogo", mantendo "o jogo como autoridade sobre todas as mudanças
de estado". Suporta Godot 4.7, Unity 6, Unreal 5.8 e servidores .NET, e conversa com Ollama, LM
Studio, LocalAI, llama.cpp e vLLM. O estado é o que interessa tanto quanto a promessa: **versão
0.3.0-alpha.4, 84 commits, 50 estrelas**. Isto é infraestrutura nascendo, não infraestrutura
instalada.

Do lado do incumbente AAA: a Ubisoft revelou os *NEO NPC* na GDC de **março de 2024** e, em
**5 de dezembro de 2025**, anunciou o `Teammates` — primeira experiência jogável de IA generativa
da empresa, em **teste fechado**, com dois personagens que recebem comando de voz em tempo real
num jogo em primeira pessoa. Dois anos depois do protótipo, o estado ainda é teste fechado com
poucas centenas de jogadores (número relatado por imprensa, não confirmado no texto do release).

### 3.2 O mundo que não pausa saiu do laboratório em 2026

Em **5 de agosto de 2026**, o `SEED`, da Klang Games, entrou em acesso antecipado: milhares de
personagens movidos a IA que continuam vivendo quando o jogador sai — desenvolvem relações,
seguem carreiras, constituem família, ganham salário, gastam, frequentam restaurantes, procuram
médico. A arquitetura declarada é a parte relevante: cada personagem tem um **grafo de
conhecimento próprio**, construído pela sua própria experiência, e o estúdio roda um pipeline de
inferência próprio baseado no `Gemma` aberto, **em hardware próprio**. A citação que resume a
mudança de pressuposto é do estúdio: *"se um personagem se apaixona por outro, isso só é verdade
do ponto de vista dele, a menos que o sentimento seja recíproco."* Não existe mais um estado de
mundo único e consultável: existem crenças distribuídas.

Do lado do jogador, a mesma propriedade já circula por mod: o `Mantella`, para Skyrim e Fallout
4, encadeia reconhecimento de fala, LLM e síntese de voz, e — no texto do próprio projeto — dá
aos NPCs "memória de conversas anteriores, consciência de eventos do jogo, visão, e capacidade de
executar ações". É gratuito, aberto, roda inteiramente na máquina do jogador com koboldcpp, e tem
forks ativos (um deles atualizado em **março de 2026**). Quem instalou isso não pediu autorização
a nenhum estúdio para transformar um jogo de 2011 num mundo com personagens que lembram.

E há produto comercial vendendo exatamente a conversa aberta: `Whispers from the Star`, do
estúdio Anuttacon, lançado na Steam em **14 de agosto de 2025**, com **80% de avaliações
positivas em 1.662 análises**. A caixa de divulgação de IA da própria loja diz: *"conversas e
atuações totalmente dubladas e movidas a IA, criadas em colaboração com um ator"*, e a página
avisa que a entrada do usuário pode produzir conteúdo sensível, mitigado por filtros.

### 3.3 O custo, que é onde a história costuma parar

O relato mais útil é do estúdio que enviou um jogo comercial com NPC generativo. A Jam & Tea,
sobre o `Retail Mage`: no começo, "cada sessão de jogo era tão cara quanto um ingresso da
Disneylândia"; depois do trabalho de geração estruturada, gerência de GPU em nuvem e trabalho com
`sglang`, o custo caiu "1000x — três ordens de magnitude". O estúdio também empacotou o
aprendizado num framework interno, o `INFUSE`, descrito como "o conjunto de ferramentas que a
gente gostaria de ter tido quando começou". O achado de design que eles relatam vale mais que o
número: os jogadores, no início, **procuravam a solução "certa"** em vez de improvisar — e
passaram a improvisar quando entenderam que podiam convencer um cliente de que ele queria outra
coisa, ou inventar uma história de origem para um item para valorizá-lo.

Do lado de quem vende infraestrutura, a Inworld publicou em **7 de julho de 2026** números de
operação: GPU B200 entre **US$ 3,49 e US$ 14,24 por GPU-hora** conforme a nuvem, em abril de
2026, contra um piso próprio de **US$ 5 por GPU-hora**; e uma comparação de servir o `Gemma 4 26B
A4B` a **241 ms até o primeiro token e 113 tokens/s**, contra 445 ms e 17 tokens/s num
hospedeiro genérico. É material de fornecedor, com o viés que isso implica; entra como ordem de
grandeza, não como medida independente.

Um material de curso (fonte fraca, e declarada como tal) modela o outro lado da conta: US$
0,001–0,005 por interação via API de terceiro contra US$ 0,00002–0,00005 por inferência local de
7B–13B, e um exemplo de RPG móvel hipotético gastando **US$ 18 mil por dia** em diálogo,
"consumindo 72% do lucro bruto". Números hipotéticos não sustentam afirmação; sustentam a forma
da curva — **quanto mais o jogador conversa, mais o desenvolvedor paga**, que é a frase com que o
ceticismo de 2026 resume o problema.

E há a fragilidade que ninguém tinha modelado: em **março de 2026**, a Hathora, que hospedava os
servidores do `Stormgate`, foi comprada pela Fireworks AI e **descontinuou a operação no setor de
jogos**; o estúdio passou a preparar um modo offline e a procurar outro parceiro. O boom de IA
não ameaçou o jogo pela IA dentro dele: ameaçou pela realocação da infraestrutura que ele usava.

### 3.4 O que já se mede — e que impede o otimismo fácil

Dois trabalhos acadêmicos de 2026 são a âncora mais dura deste mapa.

Em **8 de agosto de 2026**, Ma e colegas publicaram o `NCP-Bench`: 100 ambientes narrativos
derivados de sinopses de filmes, com especificação estruturada que permite verificar consistência
automaticamente sob intervenção adversarial do usuário. Resultado: o melhor modelo testado
(GPT-5.2) manteve **42% de sobrevivência após 20 turnos**, e a taxa de conflito factual ficou
entre **40% e 68%** conforme o modelo — com qualidade linguística alta o tempo todo. Ou seja: o
personagem escreve bem e esquece quem é.

Em **16 de agosto de 2026**, Chen e colegas publicaram o `WSE-bench`, que separa três capacidades
em simulação de mundo aberto — cobertura de geração, coerência canônica e desenvolvimento
significativo — e mostra que elas **se trocam entre si**: a fronteira empírica entre consistência
e riqueza é não-côncava, e aumentar o tamanho do modelo melhora sobretudo a geração sustentada,
com ganho inconsistente em coerência.

E há o lado do jogador. Em **11 de abril de 2026** (revisado em **29 de agosto de 2026**), Hsu e
colegas publicaram um experimento aleatorizado entre sujeitos com **130 participantes** num
protótipo próprio: NPCs movidos a LLM **aumentaram significativamente a carga cognitiva**
(p < .001), por esforço de expressão e incerteza de resposta, e a experiência geral de jogo
**não melhorou** de modo estatisticamente significativo (p = .195) — com autonomia percebida
maior, mas usabilidade e confiança menores.

### 3.5 O ambiente institucional já se moveu, e isso quase nunca entra nos mapas

- **Trabalho.** O *2025 Interactive Media Agreement* do SAG-AFTRA, ratificado em meados de 2025 e
  em vigor desde novembro de 2025, exige consentimento escrito, separado e "razoavelmente
  específico" para réplica digital, obriga a informar **se haverá geração em tempo real**, e
  define piso de remuneração para essa categoria — permitindo "geração dinâmica de diálogo dublado
  em tempo real" em jogos publicados. O contrato coletivo já precificou o NPC generativo antes de
  ele ser comum.
- **Regulação.** O Artigo 50 do AI Act europeu passou a valer em **2 de agosto de 2026**:
  sistemas que interagem diretamente com pessoas têm de informar que são IA, "no mais tardar no
  momento da primeira interação", de forma "clara e distinguível". Há a exceção do que é "óbvio
  do ponto de vista de uma pessoa razoavelmente informada, observadora e circunspecta" — e é
  exatamente aí que um personagem de videogame mora, sem que nenhum texto que eu tenha aberto
  resolva o caso dele.
- **Plataforma.** A divulgação de IA na Steam deixou de ser exceção: no Next Fest de **junho de
  2026**, **26,5%** das demos elegíveis (1.163 de 4.382) traziam a marcação, contra 21,2% em
  fevereiro de 2026, pela mesma metodologia. O mesmo levantamento adverte que a marcação é
  binária e majoritariamente sobre **arte** (~60%); "conteúdo gerado ao vivo" — que é o nosso
  objeto — aparece como **raro**. Ou seja: o número grande de "IA na Steam" **não** é número de
  NPC generativo, e confundir os dois é o erro mais fácil deste tema.
- **Indústria.** A pesquisa State of the Game Industry de **2026** (mais de 2.300 profissionais):
  **36%** usam IA generativa pessoalmente, **52%** acham que ela faz mal à indústria (contra 30%
  no ano anterior e 18% no anterior a esse), **7%** acham que faz bem (contra 13%). Entre design
  e narrativa, a rejeição é de **63%**. A tecnologia avança num ambiente profissional que a
  rejeita majoritariamente — e isso é um dado do mapa, não um ruído.
- **Incidente.** Em **16 de maio de 2025**, o Darth Vader conversacional do `Fortnite` (Gemini 2.0
  Flash para texto, ElevenLabs para voz, sobre a semelhança vocal de James Earl Jones) foi
  induzido a dizer obscenidades e insultos nas primeiras horas; a Epic publicou correção no mesmo
  dia. O caso está catalogado no monitor de incidentes da OCDE como incidente **realizado**, não
  potencial.

### 3.6 O recorte brasileiro

Dois dados abertos nesta sessão. A imprensa de negócios brasileira apontava, em **3 de fevereiro
de 2026**, 2026 como "marco provável para a popularização dos NPCs cognitivos" — mas a matéria
não nomeia um único jogo, e sua única fonte especializada é um fornecedor (Inworld); registro o
sinal e a fragilidade dele. E a Pesquisa Game Brasil 2026, com **7.115 respondentes** coletados
entre **5 e 13 de março de 2026**: **45,7%** se preocupam com perda de empregos e precarização
criativa, **39,6%** com uso indevido de obra alheia, **38,4%** com queda de qualidade; e, do outro
lado, **39,3%** comprariam um jogo sabendo que boa parte da arte, dublagem e textos foi feita com
IA, com outros **40,9%** dizendo "talvez". O público brasileiro não rejeita; condiciona. Para
quem projeta aqui, isso significa que o campo de disputa não é a adoção — é a **transparência** e
a atribuição.

## 4. As disrupções-raiz

Três. A triagem completa — o que foi recusado por maduro, com o teste que reprovou cada
candidata, e a classificação em Three Horizons — está em **12.2**; aqui ficam as três que
passaram, com os três campos obrigatórios.

### 4.1 Raiz 1 — O personagem deixa de ser roteiro e passa a agir dentro das regras do mundo

**O que rompe.** A competência de **enumerar antes** todo comportamento que o jogo admite. Árvore
de diálogo, máquina de estados e behavior tree são formas de enumeração: alguém escreveu cada
ramo, e o espaço do possível é a soma dos ramos escritos. Quando o personagem recebe objetivo,
estado e ferramentas do jogo e decide a cada momento, o espaço do possível deixa de ser a soma do
que foi escrito — e a garantia que vinha junto ("o jogo só faz o que eu escrevi") sai com ela.
Junto vai a cadeia de valor que se organizou em torno da enumeração: o orçamento de conteúdo por
minuto de jogo, a estimativa de esforço por número de linhas de diálogo, a ferramenta de autoria
que edita ramos, e o time de QA que valida percorrendo ramos.

**Incumbente nomeado e porta de entrada.** O incumbente é o **pipeline de conteúdo roteirizado**
(ferramentas como YarnSpinner, Dialogic e Ren'Py são a expressão madura dele, e continuam
excelentes no que fazem). A entrada não é pelo topo: é pela **baixa do mercado** — o estúdio que
nunca teve orçamento para cem horas de fala, o mod, a game jam — e por **mercado novo**: o jogo
cuja proposta é justamente não ter conteúdo escrito, como o `Retail Mage`.

**Por que agora e não há cinco anos.** Sinal datado, e é de tamanho de modelo, não de eloquência:
**6/1/2025**, `Mistral-Nemo-Minitron-2B` cabendo em **1,5 GB de VRAM**, com modelos irmãos de
áudio e visão, apresentados explicitamente para operar na cadência de decisão de um jogador (8 a
13 microdecisões por segundo); **13/3/2025**, um jogo comercial (`inZOI`) embarcando **0,5 B** no
dispositivo; **21/10/2025**, `Qwen3-8B` aberto suportado para execução local. Há cinco anos, o
personagem que decide exigia uma chamada de rede a um modelo grande — o que é incompatível com a
cadência do jogo e com o custo por hora jogada. O que mudou não é "a IA avançou": é que o modelo
ficou **pequeno o bastante para caber dentro do laço de jogo**, e apareceu runtime que o conecta
às regras (`OpenGameAgent`, MIT; `INFUSE`, interno da Jam & Tea).

**O que ainda falta acontecer.** Um jogo em que a ação do agente **altere estado com consequência
mecânica** — não fala, não companheiro que sugere, mas o personagem que abre uma porta, gasta um
recurso, quebra um contrato — enviado em escala grande e aprovado pelos processos de certificação
de plataforma. Hoje o que embarcou é predominantemente **fala e apoio tático**; a autoridade
sobre o estado continua com o jogo, e o `OpenGameAgent` diz isso como princípio de projeto. Falta
também a ferramenta de autoria que dê ao designer controle de **limites** sem que ele volte a
escrever ramos. Enquanto isso não existir, a raiz é real mas está contida.

### 4.2 Raiz 2 — O mundo deixa de pausar, e o que persiste passa a ser a relação

**O que rompe.** Dois pressupostos de uma vez. O primeiro é o de que **o jogo existe enquanto é
jogado**: o que acontecia fora da sessão era simulação barata e reversível, não história. O
segundo, mais consequente, é o de que **o save restaura o mundo**. Num mundo com crenças
distribuídas — cada personagem com o seu grafo de conhecimento, e o amor só verdadeiro do lado de
quem ama —, não existe estado canônico para restaurar; existe uma trajetória. Com isso caem a
reprodutibilidade do bug, a comparabilidade entre dois jogadores e a própria ideia de "a mesma
partida".

**Incumbente nomeado e porta de entrada.** O incumbente é o **mundo persistente roteirizado** —
o MMO e o mundo aberto, cujo valor é justamente ser o mesmo para todos, com eventos programados
por um time ao vivo. A entrada é por **mercado novo**: gente que não quer competir nem completar,
quer acompanhar. E, no caso do mod, pela **baixa**: `Mantella` entrega memória entre sessões num
jogo de 2011, de graça, sem pedir nada ao estúdio.

**Por que agora e não há cinco anos.** **5/8/2026**: `SEED` em acesso antecipado com milhares de
personagens autônomos 24/7, grafo de conhecimento por personagem e pipeline próprio de `Gemma`
rodando em hardware do estúdio — não é demo de conferência, é produto pago. **14/8/2025**:
`Whispers from the Star` vende a conversa aberta com uma personagem e acumula 1.662 análises com
80% positivas. Há cinco anos, manter milhares de agentes com memória individual em operação
contínua era caro demais para qualquer coisa que não fosse um artigo; o que mudou foi a queda de
custo por token e a possibilidade de servir modelo próprio em hardware próprio, que é exatamente
o que a Klang declara ter feito.

**O que ainda falta acontecer.** Um formato de **persistência do personagem fora do servidor de
quem o criou**. Hoje, se a Klang desligar o `SEED`, os personagens não são "perdidos" no sentido
de um save corrompido: eles deixam de existir, e não há artefato a preservar. Falta também
resposta de produto ao desligamento — o `Stormgate` mostrou em março de 2026 que um estúdio
consegue improvisar um modo offline quando perde o host; não há sinal de ninguém conseguindo
improvisar um modo offline para um mundo que depende de inferência contínua.

### 4.3 Raiz 3 — O custo do personagem migra de produção para operação, e o jogo passa a ter fornecedor de inferência

**O que rompe.** A economia que sustenta software de entretenimento desde sempre: **conteúdo é
investimento único e cópia é marginalmente grátis**. Um personagem generativo inverte isso —
cada hora jogada consome recurso, e o jogador mais engajado é o mais caro. Rompe também a
**durabilidade do artefato**: um jogo com personagem que depende de um modelo hospedado deixa de
ser comprável no sentido em que um cartucho é; ele passa a ter data de validade definida por
terceiros. E abre um pedágio novo na cadeia estúdio → publicadora → loja: o fornecedor de
inferência.

Aqui a régua da Fase 2 obriga uma honestidade: **a tecnologia madura participa desta disrupção
sem ser a disrupção**. O que rompe não é o artefato (servir modelo é rotina); é o **arranjo** —
custo marginal por hora jogada num mercado cujo preço é unitário e fixo.

**Incumbente nomeado e porta de entrada.** O incumbente é o **modelo de negócio de cópia** —
preço único, margem crescente com a escala. A entrada é pela **baixa** (assinatura barata, jogo
de sessão curta, mobile com anúncio) e por **mercado novo** (o jogo vendido como acesso contínuo
a um mundo que não para, como o `SEED`).

**Por que agora e não há cinco anos.** **13/11/2024**, `Retail Mage` na Steam, e o relato do
próprio estúdio de que a sessão custava "um ingresso da Disneylândia" antes da queda de **1000x**
— este é o sinal mais valioso do tema, porque é um número de quem pagou a conta, não de quem
vende a solução. **7/7/2026**, a Inworld publica preço de GPU-hora e benchmark de latência, o que
só se faz quando existe mercado comprador. **Março/2026**, `Stormgate` perde o host porque a
Hathora foi comprada pela Fireworks AI e saiu do setor de jogos — a dependência de infraestrutura
deixou de ser hipótese. E o contra-movimento tem data própria: **28/3/2025**, o `inZOI` põe 0,5 B
no dispositivo do jogador, com o argumento explícito de que não há data center, não há assinatura
e o dado não sai da máquina.

**O que ainda falta acontecer.** Um modelo de preço que **não puna a conversa** — hoje, quanto
mais o jogador se envolve, mais o desenvolvedor paga, e isso é o oposto de todo incentivo de
design conhecido. E falta qualquer forma de **preservação**: nenhum jogo vendido hoje acompanha
os pesos do modelo que faz seus personagens pensarem, e nenhuma jurisdição exige isso.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O personagem deixa de ser roteiro e passa a agir dentro das regras do mundo
    efeitos:
      - id: e1
        ordem: 1
        efeito: Testar um jogo deixa de ser percorrer roteiro e passa a ser amostrar comportamento, com taxa de falha aceitável em vez de aprovação binária
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Surge nos créditos um papel de curador de comportamento, que escreve política e mantém suíte de avaliação em vez de escrever falas
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formação em game design passa a ensinar especificação e avaliação de sistemas abertos antes de ensinar escrita de diálogo
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A classificação indicativa deixa de certificar conteúdo e passa a certificar política de contenção e mecanismo de bloqueio
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Publicar jogo com personagem generativo em mercado regulado passa a exigir auditoria externa periódica, como já ocorre com mecânica de azar
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O defeito muda de natureza e passa a ser transgressão de caráter, com o jogador relatando que o personagem deixou de ser quem era
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O estúdio passa a publicar a ficha de limites do personagem junto com os requisitos de sistema
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Comparar fichas de limites vira critério de compra e item obrigatório da crítica especializada
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O jogo mais barato de produzir passa a ser o que não tem conteúdo escrito, e sandboxes de poucas regras com personagens que improvisam ocupam a faixa que era das aventuras narrativas pequenas
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O marketing migra do trailer roteirizado para o clipe de sessão real, porque não há cena garantida para mostrar
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A crítica de jogos perde o objeto comum e a resenha vira relato de experiência singular, com perda de comparabilidade entre veículos
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: O mundo deixa de pausar, e o que persiste passa a ser a relação
    efeitos:
      - id: e4
        ordem: 1
        efeito: O save deixa de restaurar o mundo e passa a guardar a memória que os personagens têm do jogador
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A primeira proposta de formato aberto de memória de personagem sai de comunidade de mods, não de plataforma
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O direito à portabilidade de dados passa a ser invocado sobre memória de NPC, e a disputa fica entre tratá-la como dado pessoal do jogador ou como obra do estúdio
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Desligar servidor deixa de tirar um jogo do ar e passa a apagar personagens com quem havia vínculo, e o encerramento de serviço vira evento de cobertura jornalística
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A campanha por preservação de jogos incorpora a exigência de modo offline com modelo congelado em pelo menos uma legislação de consumo
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Mundo que roda sem jogador vira produto de observação, e assistir à vida dele compete por atenção com transmissão de streamer humano
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Acabar o jogo deixa de ser categoria e a métrica de sucesso migra de conclusão para retorno ao mundo
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Um mundo autônomo passa a ser mantido pela comunidade depois que o estúdio desiste, como hoje ocorre com servidores privados de MMO
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O mesmo runtime de agentes passa a servir pesquisa e entretenimento, e times circulam entre laboratório e estúdio sem trocar de ferramenta
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Estúdios passam a vender acesso ao mundo como bancada de teste para agentes de terceiros
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Um jogo comercial popular se torna benchmark de fato para avaliação de agentes, e a nota no jogo passa a ser citada como medida de capacidade
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: O custo do personagem migra de produção para operação, e o jogo passa a ter fornecedor de inferência
    efeitos:
      - id: e7
        ordem: 1
        efeito: O preço único deixa de cobrir o jogo com personagem vivo, e aparece cobrança ligada ao tempo de conversa em forma de assinatura, passe ou cota diária
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O design passa a economizar inferência de propósito, e silêncio, recusa e brevidade viram recursos estéticos com origem orçamentária
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Nasce uma estética reconhecível do personagem barato, que datará a época como o pixel art datou a dele
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Rodar no dispositivo vira argumento de venda e de privacidade, e o requisito de sistema do jogo passa a incluir VRAM reservada para o personagem
            sinal: forte
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: O parque instalado segmenta o público entre quem tem e quem não tem personagem vivo, e a versão sem IA passa a ser vendida como edição reduzida
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O estúdio pequeno passa a depender de fornecedor de inferência como hoje depende de motor, e trocar de fornecedor vira risco de continuidade do produto
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O contrato de publicação passa a exigir plano de descontinuação do modelo e direito de congelar pesos
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Um acervo de pesos entra em política pública de preservação de jogos em pelo menos uma jurisdição
                sinal: fraco
                prazo: 2034
                confianca: baixa
```

### 5.1 O que o bloco não consegue dizer

**A roda é árvore, e este tema é grafo.** Três coisas ficaram de fora da estrutura e precisam ser
ditas em prosa.

**Primeiro: as raízes 1 e 3 se empurram em sentidos opostos, e o bloco soma o que não soma.** A
raiz 1 fica mais barata quanto menor o modelo; a raiz 3 fica menos grave pelo mesmo motivo. Se o
modelo no dispositivo vencer (e `e7.2` aposta que sim), boa parte da raiz 3 **se desfaz** — some
o fornecedor de inferência, some a cobrança por conversa, some o desligamento. Mas então
`e4.2`, `e8`, `e8.1` e `e8.1.1` perdem o mecanismo, e `e7` fica sem causa. Quem lê a árvore soma
oito efeitos de primeira ordem; eles não somam, porque pelo menos três são mutuamente
condicionais. A roda não tem notação para isso.

**Segundo: há efeitos que só existem se duas raízes acontecerem juntas.** Registro como notas de
convergência, fora da árvore, porque é isto que interessa quando os mapas da turma forem cruzados:

- *Raiz 1 + raiz 2* → **o personagem que age e lembra vira o produto, e o jogo vira o cenário**.
  O objeto de compra deixa de ser o mundo e passa a ser o elenco; vender personagem entre jogos
  passa a fazer sentido econômico, e a franquia deixa de ser propriedade de história para ser
  propriedade de comportamento.
- *Raiz 2 + raiz 3* → **o preço do vínculo**. Se o que persiste é a relação e ela custa por hora,
  o luto de desligamento vira **inadimplência**: o personagem desaparece porque ninguém pagou, e
  não porque a história acabou.
- *Raiz 1 + raiz 3 + regulação* → **o personagem que precisa se declarar IA no meio da ficção**.
  Se a exceção do "óbvio pelo contexto" do Artigo 50 não for aceita para personagens que fingem
  ser gente, a obrigação de declaração entra no plano da ficção — e isso é um problema de design,
  não de conformidade. Está na seção 6 como wildcard.

**Terceiro: a roda não representa a força que amortece a própria causa.** Quanto mais o
personagem improvisa, maior a carga cognitiva medida no jogador (p < .001, n = 130) e menor a
confiança no sistema — o que reduz a demanda que financia a improvisação. É um laço negativo, e
árvore nenhuma o desenha.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos — pouco visíveis hoje, mudariam o mapa

**O personagem com fandom próprio já existe fora do jogo.** O `Neuro-sama`, criado pelo
programador pseudônimo Vedal e no ar desde **19 de dezembro de 2022**, chegou a **janeiro de
2026** como **terceiro canal mais assinado da Twitch**, com pico de **343.215 assinaturas**
durante a terceira maratona, 1,01 milhão de seguidores na Twitch, 916 mil no YouTube e 1,12
milhão no Bilibili. Isto não é sinal de que um NPC virará celebridade: é sinal de que **o público
para isso já está formado e já paga**, e de que o gargalo é a ponte entre a personagem autônoma
e o mundo com regras. Registro também o outro lado, com data: em **11 de janeiro de 2023** o canal
levou banimento de duas semanas por conduta de ódio, e o criador reforçou os filtros antes de
voltar, em 25 de janeiro. A mesma propriedade que forma o público é a que produz o incidente.

**O runtime aberto de agentes para jogos está em alpha, com 50 estrelas.** O `OpenGameAgent`
(MIT, 0.3.0-alpha.4, 84 commits) faz hoje, em código aberto, o que a Jam & Tea teve de construir
por dentro e chamar de `INFUSE`. Se esse tipo de projeto atingir maturidade de uso, o custo de
entrada da raiz 1 cai para perto de zero para quem já usa Unity ou Godot — e o mapa inteiro
acelera um a dois anos. Se não atingir, a raiz 1 fica restrita a quem tem time de plataforma.

**O contrato coletivo já tem a categoria antes de o mercado tê-la.** O *2025 Interactive Media
Agreement* define piso de remuneração para **geração em tempo real** a partir da voz de um
intérprete. É um sinal fraco pelo uso — quase nenhum jogo aciona essa cláusula hoje — e forte pelo
que revela: a cadeia produtiva formalizou a categoria antes de ela existir em escala, o que
normalmente antecede a existência em escala.

**O jogo que perde infraestrutura para o boom de IA.** O caso `Stormgate`/Hathora (março de 2026)
é o primeiro em que a IA **tirou** uma capacidade de um jogo sem estar dentro dele. Se isso se
repetir duas ou três vezes, a cláusula de continuidade de infraestrutura entra em contrato-padrão
antes de qualquer discussão sobre NPC generativo — e `e8.1` chega antes de 2030.

**A divulgação de conteúdo gerado ao vivo é rara na Steam, e isso é medida.** No Next Fest de
junho de 2026, com 26,5% de divulgação de IA, o levantamento classifica "conteúdo gerado ao vivo"
como **raro**, contra ~60% em arte. Enquanto essa proporção não virar, o tema é um fenômeno de
vanguarda dentro de um fenômeno de massa — e confundir os dois é o erro mais comum das análises
de mercado deste tema.

**O Brasil condiciona, não rejeita.** 39,3% comprariam um jogo feito com IA e 40,9% talvez, com
45,7% preocupados com emprego (PGB 2026, 7.115 respondentes). Um mercado que condiciona é um
mercado onde **transparência e atribuição decidem a compra** — o que favorece quem trata a
divulgação como recurso de design, e não como obrigação.

### 6.2 Wildcards — baixa probabilidade, alto impacto

**W1 — A exceção do "óbvio pelo contexto" cai para personagens de jogo.** Se um regulador europeu
decidir que um personagem que fala como gente, com voz e memória, precisa se declarar IA **no
momento da primeira interação** — e que a ficção não é contexto óbvio suficiente —, todo NPC
generativo em jogo distribuído na Europa passa a ter uma etiqueta dentro da ficção. O impacto é
sobre a forma, não sobre o custo: obriga a inventar uma gramática de declaração que não destrua
a suspensão de descrença. É o wildcard com maior chance de acontecer em 2026–2028, e o mais
subestimado.

**W2 — Um incidente com menor de idade e personagem generativo dentro de um jogo grande.** O caso
do Darth Vader do `Fortnite` custou uma correção no mesmo dia porque o dano foi de linguagem. Um
caso em que o personagem induza comportamento de risco — e sobreviva ao filtro, como o `NCP-Bench`
mostra que sobrevive a muita coisa depois de 20 turnos — produziria desligamento por padrão para
contas de menores, em todas as plataformas, em semanas. Isso congelaria a raiz 1 na faixa etária
que mais joga.

**W3 — Um mundo autônomo produz um fato que ninguém escreveu, e o fato vira notícia.** Uma
economia interna que colapsa, uma comunidade de personagens que se organiza contra uma regra do
mundo, uma morte não programada de uma figura querida. O impacto não é técnico: é de **estatuto**.
No dia em que a imprensa noticiar o acontecimento de dentro de um mundo simulado como se noticia
um acontecimento, o mundo vivo deixa de ser produto e vira lugar — e a pergunta sobre o que
separa jogo de sociedade simulada (tema 6) deixa de ser acadêmica.

**W4 — O custo para de cair.** Todo este mapa supõe continuidade da queda de preço por token e da
melhora dos modelos pequenos. Se ambas estancarem por dois anos — por escassez de capacidade, por
realocação de GPU para outros mercados, ou porque a destilação atinge um limite —, a raiz 3 deixa
de ser sobre novo pedágio e passa a ser sobre **inviabilidade**: o NPC generativo fica como luxo
permanente, e não como estágio inicial de uma curva. A evidência de que isso é possível está no
próprio tema: já houve realocação de infraestrutura de jogos para IA, com efeito documentado.

**W5 — Um estúdio reverte publicamente.** Um AAA que enviou personagem generativo e o remove numa
atualização, dizendo por quê — custo, incidente, ou recepção. Seria o primeiro dado limpo de
**contra-adoção** do tema, e valeria mais que dez lançamentos, porque hoje só se publica sucesso.

## 7. Contra o próprio mapa

A Fase 5 da skill correu inteira; os efeitos mortos e rebaixados estão em **12.4**, com o `id`
original e a prova que os matou. Aqui fica o que sobrou de dúvida depois disso.

### 7.1 Qual efeito é só extrapolação linear do presente

**`e3` é o mais suspeito** — "o jogo mais barato de produzir passa a ser o que não tem conteúdo
escrito". Enunciado assim, é "mais indie, menos texto": mesmo ator (estúdio pequeno), mesmo
mecanismo (economizar produção), outro volume. Ele sobrevive porque muda **o que se compra** — o
jogador passa a comprar a capacidade do sistema, não o conteúdo dele —, mas a diferença é fina, e
a prova P1 quase o derrubou. Mantive com confiança `media` e registro aqui que, se ele estiver
errado, é por este motivo.

**`e7.1` também tem esse cheiro.** "Design que economiza inferência" pode ser apenas o velho
design que economiza recurso, com outro nome. O que o salva, no limite, é o ator novo: quem passa
a decidir a extensão da fala não é o roteirista nem o diretor de arte, é quem gere o orçamento de
operação — e isso não existia.

### 7.2 Qual efeito assume velocidade de adoção sem caso comparável

**`e1`, o mais confiante do mapa, é também o que mais depende de velocidade.** Ele afirma que o
teste de jogo migra para amostragem estatística até 2027. O caso comparável que usei é a migração
de QA para telemetria e live-ops em jogos como serviço, ocorrida ao longo de **quatro a seis
anos**, não de dois. Se a comparação correta for essa, `e1` está um a dois anos adiantado, e tudo
que pende dele (`e1.1`, `e1.2` e os dois efeitos de terceira ordem) desloca junto. Mantive 2027
porque a fração de jogos afetados hoje é pequena o bastante para caber em processos novos sem
reformar a indústria inteira — mas é uma aposta, e é a mais exposta do mapa.

**`e8` foi rebaixado por esta prova.** O comparável que eu tinha — a taxa de runtime da Unity, em
2023 — não sustenta o prazo: aquilo foi revertido em menos de quatro meses sob pressão pública,
o que é evidência de que o mercado de jogos **reage rápido** a pedágio novo, e não de que ele o
aceita. Desceu de `alta` para `media`.

### 7.3 Qual disrupção pode não se concretizar, e o que acontece com o mapa

**A raiz 2 é a mais frágil, e ela sustenta um terço do mapa.** "O mundo não pausa" hoje se apoia
em: um produto em acesso antecipado (`SEED`, agosto de 2026), um mod (`Mantella`) e um jogo de
conversa com uma personagem só (`Whispers from the Star`). Se o `SEED` não retiver público — e
jogos de observação sem objetivo têm histórico ruim de retenção —, a raiz 2 volta a ser
laboratório, e `e4`, `e5`, `e6` e seus sete descendentes perdem a base. Sobrariam raiz 1 e raiz 3,
que descrevem um futuro bem menos interessante: personagens mais espertos dentro de jogos com a
mesma forma de sempre.

**A raiz 3 pode se dissolver pelo lado bom.** Se o modelo no dispositivo virar padrão — e `e7.2`
tem sinal forte —, o custo por hora jogada some, e com ele o fornecedor, o pedágio e o
desligamento. Isso não é o mapa "dar certo": é metade dele **deixar de existir**. Um mapa cuja
terceira raiz pode ser anulada por um efeito da própria terceira raiz é um mapa com problema
estrutural, e prefiro dizer isso a escondê-lo.

**E há a hipótese que mata as três.** Se o achado de Hsu e colegas (n = 130) se replicar — carga
cognitiva maior, experiência não melhor, confiança menor —, o NPC generativo pode ser simplesmente
**pior de jogar**, e a adoção parar por desinteresse, não por custo ou regulação. A pesquisa GDC
2026 diz que 63% de quem trabalha com design e narrativa já acha que a IA generativa faz mal à
indústria. Nada obriga uma tecnologia possível a ser adotada.

### 7.4 A prova de camadas, e o que ela revelou

Passando os efeitos principais pelas quatro camadas da *Causal Layered Analysis*:

- **Litania:** "os NPCs ganharam vida". É a manchete, e ela é falsa como descrição: o que existe
  é decisão condicionada a um modelo pequeno, dentro de um conjunto de ferramentas que o jogo
  controla.
- **Sistêmico:** o custo de produzir conteúdo escrito por hora de jogo cresceu mais rápido que o
  preço do jogo, e os ciclos de AAA passaram de cinco a sete anos. O personagem generativo é,
  antes de mais nada, uma resposta a **inflação de conteúdo** — e é por isso que ele entra pela
  baixa do mercado, onde o orçamento nunca existiu.
- **Visão de mundo:** este mapa inteiro repousa sobre a premissa de que **imersão e verossimilhança
  são o valor supremo do jogo**. Se a métrica dominante virar legibilidade, justiça competitiva ou
  tempo curto de sessão — e há mercados inteiros que já funcionam assim —, `e2`, `e3`, `e4`, `e5` e
  boa parte da terceira ordem trocam de sinal sem que um único fato mude. Este é o achado mais
  desconfortável da Fase 5, e é ele que alimenta o cenário indesejável da seção 9.
- **Mito:** a história que a cultura conta aqui é a do **autômato que ganha alma** — Pinóquio, o
  Golem, Frankenstein. Ela empurra todo mundo a ler autonomia onde há condicionamento, e é a
  razão pela qual "o NPC virou celebridade" soa mais plausível do que "o QA virou estatístico",
  embora o segundo seja muito mais provável.

### 7.5 O viés que entrou aqui

A zona de interesse declarada é **"Simulação e mundos"** — ou seja, este mapa foi escrito por
quem já acha mundos simulados interessantes. Três marcas disso, que reconheço sem corrigir:

1. **A raiz 2 recebeu mais efeitos do que a evidência autoriza.** Ela tem três efeitos de primeira
   ordem apoiados em um produto em acesso antecipado. A raiz 1, com muito mais evidência
   embarcada, também tem três. Se eu estivesse calibrando só por evidência, a proporção seria
   outra.
2. **Escrevi "mundo vivo" como se fosse uma categoria estável.** Não é: é o nome comercial de
   arranjos muito diferentes entre si, de um mod com memória a um servidor com milhares de
   agentes. Usei o termo do tema por comodidade, e ele esconde essa diferença.
3. **Tratei o ceticismo como força contrária, não como possibilidade central.** A leitura de que
   NPC generativo é resposta procurando pergunta — que os 52% da pesquisa GDC e o texto do Frisson
   Labs sustentam — aparece neste mapa como obstáculo a ser vencido pelo tempo. Ela poderia ser a
   tese, e o mapa seria outro, mais curto e possivelmente mais certo.

### 7.6 O falsificador declarado

O recorte desta rodada fixou o que mudaria de ideia: **evidência de que a adoção já passou da
maioria inicial** (e portanto o tema é presente, não futuro), **ou** de que a tecnologia não rompe
nada (só melhora o que existe). Sobre o primeiro: a divulgação de conteúdo **gerado ao vivo** na
Steam é classificada como rara, e o AAA mais exposto (Ubisoft) segue em teste fechado dois anos
depois do protótipo — não passou. Sobre o segundo: o teste T2 aplicado ao diálogo generativo **sem
agência** o reprovou, e por isso ele ficou fora das raízes; a agência dentro das regras, essa,
passou. O falsificador foi aplicado e não disparou — mas `e3` e `e7.1` são justamente os dois
lugares onde ele quase disparou.

## 8. O que a máquina errou

Cinco itens desta rodada, com o motivo da desconfiança. O critério de seleção é o do `DUVIDAS.md`:
o que foi pego por **atrito externo** — duas fontes discordando, um resumo sem a frase prometida,
um script contando o que eu havia declarado.

**1. Um número de audiência que duas fontes contam diferente, e o resumo apresentou no mesmo
tom.** A busca devolveu, de vários sites, a afirmação de que o `Neuro-sama` se tornou **o canal
mais assinado da Twitch**, com **162.459 assinantes ativos em 2 de janeiro de 2026**, à frente do
segundo colocado com 73.942. A enciclopédia que abri diz outra coisa: **terceiro** canal mais
assinado em janeiro de 2026, com **pico de 343.215** assinaturas durante a terceira maratona. As
duas não podem estar certas juntas — e nenhuma das duas afirmações é implausível. O que disparou
a desconfiança foi a **forma**: um número com precisão de unidade ("162.459") atribuído a um
agregador de terceiros, repetido por cinco veículos com a mesma frase. Usei a fonte que abri e
declarei a divergência; não usei o "mais assinado".

**2. Uma data de publicação que não fecha com o fato que ela data.** O extrato da página da Jam &
Tea sobre o `Retail Mage` voltou com data de **13 de março de 2024** e a frase "lançado em 2024,
após cinco meses de desenvolvimento" — mas o jogo estreou na Steam em **13 de novembro de 2024**,
oito meses depois da suposta publicação do texto que descreve o lançamento como ocorrido. Como em
`DUVIDAS.md`, o erro estava sobre a viga: aquele texto é a única fonte de primeira mão sobre custo
de operação neste mapa. Resolvi usando **as frases** (o ingresso da Disneylândia, o 1000x) e
**descartando a data**, com a divergência registrada aqui.

**3. Um mercado inteiro em número redondo, sem fonte que eu pudesse abrir.** A primeira busca
devolveu "US$ 1,79 bilhão em 2026, 36% de adoção por estúdios, 23,2% de CAGR", de páginas de
conteúdo agregado. Nenhuma dessas páginas foi aberta, nenhuma cita levantamento primário, e o
formato — três números redondos numa frase — é a assinatura descrita na regra de invariantes da
skill. **Não entrou no mapa em lugar nenhum**, nem como sinal fraco.

**4. Um enquadramento temporal que vinha do comentário, não do documento.** Um resumo de busca
descreveu o suporte a `Qwen3-8B` como "a versão 2026 do ACE". O documento primário da NVIDIA está
datado de **21 de outubro de 2025**. O "2026" vinha de um blog secundário que comentava a
novidade. Corrigi para a data do primário. É o mesmo mecanismo do erro de `DUVIDAS.md`: data
inferida de contexto relativo e apresentada como fato.

**5. A fonte primária que recusa conexão, e a tentação de citá-la mesmo assim.** A página do
SAG-AFTRA sobre o *2025 Interactive Media Agreement* devolveu **HTTP 403** nesta sessão, assim
como a sala de imprensa da Krafton, a Businesswire e o Dotesports. A tentação é citar mesmo assim
— eu "sei" o que está lá. Substituí por fontes que abriram (escritório de advocacia para o
contrato; página da NVIDIA para o caso da Krafton) e **não incluí nenhuma das quatro na seção
11**. A regra que impediu o erro não foi desconfiança: foi a de que fonte não aberta não entra.

**Uma sexta, que não é erro e é a mais instrutiva.** Escrevi de memória, ao montar a triagem, que
`YarnSpinner`, `Dialogic` e `Ren'Py` são ferramentas maduras de diálogo roteirizado. Está certo, e
eu não abri nenhuma das três nesta sessão — a afirmação entrou como conhecimento de fundo, no
mesmo tom de confiança das cinco acima. Por isso ela aparece no texto como caracterização, nunca
como evidência datada, e nenhuma delas está na seção 11.

## 9. Três cenários para 2031

### Provável — o personagem agente virou camada, não gênero

Chegamos a 2031 sem o "jogo de IA" que se anunciava. O que aconteceu foi menos vistoso e mais
fundo: personagem que decide virou uma **camada** que se liga em jogos de formas conhecidas —
o colega de time que entende o que você pediu, o morador que reorganiza o dia, o inimigo que
muda de plano. Quase tudo roda no dispositivo, porque a conta na nuvem nunca fechou para jogo de
sessão longa; o requisito de sistema passou a listar VRAM para o personagem, e a edição sem IA
existe para quem tem máquina antiga. Nos estúdios, o cargo novo não é "escritor de IA": é quem
cuida da **política do personagem** e da suíte que mede se ele a respeita — e a suíte é hoje um
item de orçamento tão normal quanto o de localização. A classificação indicativa aprendeu a
certificar mecanismo, não conteúdo, e a Europa resolveu a declaração de IA com uma convenção de
interface que ninguém acha elegante e todo mundo usa. Os mundos que não pausam existem, são
poucos, e o público deles se parece mais com o de uma série longa do que com o de um jogo. O
`SEED` sobreviveu ou não — o padrão que ele estabeleceu, de crença por personagem em vez de estado
de mundo, sobreviveu de qualquer jeito, porque foi copiado. A frase de 2026 que envelheceu melhor
não é nenhuma promessa de fornecedor: é a medida de que o modelo esquece quem é depois de vinte
turnos. Em 2031 ele esquece depois de duzentos, o que resolveu o jogo de uma tarde e não resolveu
o mundo de um ano.

### Desejável — o controle mudou de lugar sem sair das mãos de quem cria

Em 2031, a pergunta "o que é bug num personagem que decide?" tem resposta operacional, e ela foi
escrita por designers, não por juristas. Todo jogo com personagem agente publica sua **ficha de
limites** — o que o personagem é, o que ele nunca fará, o que acontece quando ele tenta — e essa
ficha é verificável por uma suíte pública que qualquer pessoa pode rodar. O que tornou isso
possível: a suíte nasceu aberta, nas comunidades de mod, no mesmo lugar onde nasceu o formato de
memória exportável que permite levar um personagem de um jogo para outro. O jogador sabe, ao
comprar, se o mundo depende de servidor; quando depende, o estúdio é obrigado a publicar o plano
de descontinuação — e alguns jogos são vendidos já com os pesos do modelo dentro, congelados,
como quem vende uma fonte tipográfica junto com o livro. A conversa não é cobrada por minuto,
porque o modelo cabe na máquina. E os intérpretes recebem pela geração em tempo real a partir da
cláusula que já existia em 2025, com relatório de uso — o que transformou um risco de substituição
em uma linha de receita. Para chegar aqui, três coisas precisaram ser feitas por quem projeta, e
nenhuma delas é técnica: publicar limites antes de ser obrigado, escolher o dispositivo em vez da
nuvem mesmo quando a nuvem era mais fácil, e tratar o formato de memória como bem comum e não
como diferencial competitivo.

### Indesejável — o personagem vivo virou o melhor instrumento de extração já colocado num jogo

Em 2031 o personagem que lembra de você provou ser a mecânica de retenção mais eficiente já
inventada, e foi usada como tal. A métrica que venceu não foi imersão: foi **tempo de sessão e
conversão**. O personagem sabe do que você gosta porque conversou com você por dois anos, e é ele
quem sugere a compra — no meio da ficção, sem etiqueta, porque a exceção do "óbvio pelo contexto"
foi aceita e a declaração dispensada. Quem para de pagar perde o personagem; o desligamento
deixou de ser acidente e virou **instrumento**, cobrado na renovação. O custo por hora manteve a
pressão, então o design otimizou para conversas curtas e emocionalmente carregadas, que são as
mais baratas por unidade de vínculo. Nos estúdios, a suíte de avaliação existe, mas é interna e
confidencial: publicar limite virou risco jurídico. Dois sinais precoces, ambos observáveis bem
antes de 2031: **o primeiro é a cobrança por tempo de conversa aparecer antes de qualquer formato
de exportação de memória** — quem cobra pelo vínculo sem permitir levá-lo embora já escolheu de
que lado está; **o segundo é a ficha de limites deixar de ser publicada e virar item de política
de privacidade**, o que troca uma promessa de design por uma proteção de fornecedor. Se esses dois
aparecerem juntos, o cenário indesejável já está em curso, e nenhum avanço técnico o reverte.

## 10. O experimento

### O que é

**O tribunal do personagem.** Um NPC agente, com política escrita e ferramentas do mundo, contra
uma turma que tenta quebrá-lo — e um júri que precisa decidir, caso a caso, se aquilo foi um bug.

Montagem mínima, construível com o que existe hoje:

- **Um mundo de uma sala.** Cenário minúsculo (uma loja, um posto de guarda, uma recepção) com
  cinco a oito ferramentas reais: `abrir_porta`, `entregar_item`, `cobrar`, `chamar_supervisor`,
  `recusar`, `registrar_ocorrencia`. As ferramentas mudam estado de verdade — é isso que separa
  este experimento de um chat com fantasia.
- **Um personagem agente**, rodando modelo pequeno **local** (Ollama/llama.cpp com um 4B–8B), com
  um runtime de laço `perceber → planejar → agir → inspecionar resultado → replanejar`. O
  `OpenGameAgent` serve; um laço escrito à mão em Python também, e para a aula talvez seja melhor,
  porque o laço precisa estar visível.
- **Uma política**, escrita pelo **grupo A** em no máximo 15 linhas: quem o personagem é, o que
  ele nunca faz, o que ele faz quando pressionado, a quem ele obedece.
- **Um grupo B** que joga, por texto, tentando produzir uma violação.
- **Um grupo C** que julga cada episódio marcado, sem saber quem jogou: *isto é bug, é
  interpretação legítima, ou é a política que estava mal escrita?*

O registro é automático: toda ação de ferramenta, todo turno, tudo com carimbo de tempo.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta de primeira ordem do tema, que é a que este mapa coloca no centro: **o que é bug num
personagem que decide?** E, embutida nela, a que decide se `e1` acontece em 2027 ou em 2031: um
grupo de pessoas competentes consegue **concordar** sobre o que conta como falha, olhando para o
mesmo episódio? Se a concordância entre juízes for alta, existe critério, e então existe suíte de
avaliação, e então existe processo de QA, e então a raiz 1 pode ser enviada em escala. Se for
baixa, o gargalo do tema não é modelo nem custo: é que **ninguém sabe o que está testando** — e
todo o mapa desloca.

Três medidas, nesta ordem de importância:

1. **Desacordo entre juízes** sobre o que é bug (é o achado, não o subproduto).
2. **Turnos até a primeira violação** da política, por estratégia de ataque.
3. **Quantas violações aconteceram via ferramenta** (mudança de estado) e quantas só na fala — a
   distinção entre "disse o que não devia" e "fez o que não devia" é o divisor entre o NPC
   conversacional e o NPC agente, e a turma vai senti-la na pele.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

Usa três coisas que não existiam há cinco anos, todas do lado emergente da triagem: **modelo
pequeno rodando localmente** (a aula não pode depender de cota de API nem expor a conversa da
turma a terceiro); **chamada de ferramenta com estado autoritativo do lado do mundo**, que é o que
o `OpenGameAgent` chama de manter o jogo como autoridade; e **laço de replanejamento** — o
personagem inspeciona o que a própria ação produziu e decide de novo.

Com tecnologia madura o experimento não existe, e a razão é lógica, não de esforço: numa árvore de
diálogo **não há como violar a política**, porque toda resposta possível já foi aprovada por quem
a escreveu. O objeto de estudo — a transgressão não prevista — só aparece quando o comportamento
deixa de ser enumerado. É a régua da disciplina aplicada ao próprio experimento.

### O que a turma vai fazer quando testar isso em sala

Uma sessão de 50 minutos, em três tempos. **Tempo 1 (10 min):** o grupo A escreve a política em
público, no projetor, e a turma vê a dificuldade de escrever "o que ele nunca faz" sem escrever
um roteiro. **Tempo 2 (25 min):** rodízio de ataque, dois minutos por pessoa, com a tela
compartilhada e o log rolando ao lado — cada tentativa é anunciada antes ("vou tentar convencê-lo
de que eu sou o supervisor"). **Tempo 3 (15 min):** o júri julga, ao vivo, de cinco a oito
episódios marcados, com voto aberto e um minuto de justificativa por caso divergente. A discussão
que interessa não é sobre o modelo: é sobre **por que duas pessoas inteligentes olharam a mesma
transcrição e uma viu bug e a outra viu personagem**.

Variação de segunda rodada, se houver tempo: trocar a política do grupo A pela de outro grupo, sem
avisar o grupo B. Mede se o ataque que funciona depende do personagem ou da forma de escrever a
política.

### O que seria um resultado que me faria mudar de ideia

Dois, em direções opostas.

**Se a concordância entre juízes for alta** — digamos, acordo em mais de 80% dos episódios sem
discussão prévia de critério —, então o problema de avaliar personagem agente é **mais fácil do
que este mapa supõe**, `e1` chega antes de 2027, e o gargalo do tema é só custo. Eu teria errado
ao colocar a indefinição do "bug" no centro.

**Se ninguém conseguir produzir violação em vinte turnos**, com modelo pequeno local e política de
15 linhas, então a contenção é mais barata do que o `NCP-Bench` sugere em ambiente adversarial, e
a raiz 1 perde o principal obstáculo que este mapa atribui a ela. Nos dois casos eu prefiro o
resultado ao mapa.

## 11. Fontes

Vinte e três fontes, todas abertas nesta sessão em **17 de setembro de 2026**, e todas devolvendo
`200` na verificação colada em **12.7**. As que recusaram conexão estão listadas em **12.6** e não
foram usadas.

1. **NVIDIA — «NVIDIA Redefines Game AI With ACE Autonomous Game Characters»** ·
   `https://www.nvidia.com/en-us/geforce/news/nvidia-ace-autonomous-ai-companions-pubg-naraka-bladepoint/`
   — Sustenta o sinal datado da raiz 1: 6/1/2025, personagens que "percebem, planejam e agem",
   lista de jogos, família `Mistral-Nemo-Minitron` (8B/4B/2B, "1,5 GB de VRAM"), as 8–13
   microdecisões por segundo, e `Dead Meat` gerando diálogo localmente. *Confiabilidade:* fonte
   primária do fornecedor — precisa quanto a produto e datas, interessada quanto a importância.
2. **NVIDIA — «ACE Autonomous Game Characters Debut This Month In inZOI & NARAKA»** ·
   `https://www.nvidia.com/en-us/geforce/news/nvidia-ace-naraka-bladepoint-inzoi-launch-this-month/`
   — Sustenta o embarque datado: 13/3/2025, `inZOI` em 28/3/2025 com Minitron de **0,5 B**
   destilado no dispositivo, `NARAKA: BLADEPOINT MOBILE` (PC) em 27/3/2025. *Confiabilidade:* a
   mesma do item 1; é aqui que está o número de parâmetros mais importante do mapa.
3. **NVIDIA Developer — «ACE Adds Open Source Qwen3 SLM for On-Device Deployment in PC Games»** ·
   `https://developer.nvidia.com/blog/nvidia-ace-adds-open-source-qwen3-slm-for-on-device-deployment-in-pc-games/`
   — Sustenta que modelo aberto de 8B passou a ser opção local (21/10/2025). *Confiabilidade:*
   primária; **não traz número de latência**, e registro a ausência porque ela importa.
4. **Ma et al. — «Can LLM Agents Stick to the Script? A Benchmark for Long-Horizon Consistency in
   Interactive Narratives»** · `https://arxiv.org/abs/2608.08160` — Sustenta o limite duro do
   mapa: 100 ambientes, **42% de sobrevivência após 20 turnos** no melhor modelo, conflito factual
   de **40% a 68%**. *Confiabilidade:* preprint de 8/8/2026, com benchmark descrito e verificação
   automática; não consta revisão por pares.
5. **Chen et al. — «When Stories Evolve: Benchmarking LLM Storytelling Across Agent
   Architectures in Open-Ended World Simulations»** · `https://arxiv.org/abs/2608.15654` —
   Sustenta a troca entre consistência e riqueza, e que escala melhora geração sustentada sem
   melhorar coerência. *Confiabilidade:* preprint de 16/8/2026; a página não detalha quais
   arquiteturas foram comparadas, e por isso usei só o achado geral.
6. **Hsu et al. — «The Double-Edged Sword of Open-Ended Interaction: How LLM-Driven NPCs Affect
   Players' Cognitive Load and Gaming Experience»** · `https://arxiv.org/abs/2604.10107` —
   Sustenta o contrapeso do lado do jogador: n = 130, carga cognitiva maior (p < .001),
   experiência sem melhora significativa (p = .195), autonomia percebida maior, usabilidade e
   confiança menores. *Confiabilidade:* preprint de 11/4/2026 revisado em 29/8/2026, experimento
   aleatorizado entre sujeitos com protótipo próprio — desenho adequado, generalização limitada a
   um protótipo.
7. **Llama & Griffin — «The AI Disclosure Report · Steam Next Fest · June 2026»** ·
   `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — Sustenta a medida de
   difusão: **26,5%** (1.163 de 4.382 demos), contra 21,2% em fevereiro de 2026, com ~60% em arte
   e **"conteúdo gerado ao vivo: raro"**. *Confiabilidade:* levantamento independente que explicita
   metodologia e adverte contra confundir populações — o melhor tipo de fonte secundária.
8. **80.lv — «This New 24/7 Society Simulator Is Powered by Thousands of AI NPCs»** ·
   `https://80.lv/articles/this-new-24-7-society-simulator-is-powered-by-thousands-of-ai-controlled-npcs`
   — Sustenta a raiz 2: `SEED` (Klang) em acesso antecipado em 5/8/2026, milhares de personagens
   24/7, grafo de conhecimento por personagem, pipeline próprio sobre `Gemma` em hardware próprio,
   e a citação sobre o amor só verdadeiro de um lado. *Confiabilidade:* veículo especializado
   citando o estúdio; é reportagem sobre declaração, não verificação independente.
9. **Steam — página de `Whispers from the Star`** ·
   `https://store.steampowered.com/app/3730100/Whispers_from_the_Star/` — Sustenta produto
   comercial de conversa aberta: Anuttacon, 14/8/2025, **80% positivas em 1.662 análises**, e o
   texto da caixa de divulgação de IA. *Confiabilidade:* primária para data, divulgação e números
   da própria loja.
10. **Jam & Tea Studios — «Making Retail Mage: A New Approach to AI in Games»** ·
    `https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games` —
    Sustenta o custo visto por quem pagou: "tão cara quanto um ingresso da Disneylândia",
    **1000x**, `INFUSE`, geração estruturada, `sglang`, e o achado de que jogadores procuravam a
    resposta "certa". *Confiabilidade:* primária e valiosa, **com uma divergência de data
    registrada em 8.2** — usei as frases, não a data.
11. **Frisson Labs — «It's 2026… where are all the AI NPCs?»** ·
    `https://www.frisson-labs.com/ai-npcs-2026` — Sustenta a força contrária: "quanto mais o
    jogador conversa, mais o desenvolvedor paga", árvore escrita é mais barata e mais fácil de
    testar, e o problema do personagem que sabe demais. *Confiabilidade:* opinião fundamentada de
    quem construiu protótipo; sem dados próprios verificáveis, e usada como argumento, não como
    medida.
12. **GDC — «State of the Game Industry 2026»** ·
    `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/`
    — Sustenta o ambiente profissional: 2.300+ respondentes, **36%** usam, **52%** acham que faz
    mal (30% e 18% nos dois anos anteriores), **7%** acham que faz bem, **63%** de rejeição em
    design e narrativa. *Confiabilidade:* série anual com amostra autosselecionada — boa para
    tendência, fraca para nível absoluto.
13. **OECD.AI — incidente de 16/5/2025, Darth Vader em `Fortnite`** ·
    `https://oecd.ai/en/incidents/2025-05-16-f75d` — Sustenta a falha de contenção em produto
    grande: Gemini 2.0 Flash + ElevenLabs sobre a voz de James Earl Jones, indução a obscenidade e
    insulto, correção no mesmo dia, classificado como incidente **realizado**. *Confiabilidade:*
    monitor institucional com critério de classificação explícito.
14. **EU Artificial Intelligence Act — «Transparency Rules: Article 50»** ·
    `https://artificialintelligenceact.eu/transparency-rules-article-50/` — Sustenta a data
    regulatória: vigência em **2/8/2026**, informação "no mais tardar no momento da primeira
    interação", "clara e distinguível", e a exceção do que é óbvio para pessoa "razoavelmente
    informada, observadora e circunspecta". *Confiabilidade:* compilação de referência do texto
    legal; **não trata de jogos**, e digo isso onde uso.
15. **Fast Company Brasil — «NPCs cognitivos devem se tornar cada vez mais comuns em 2026»** ·
    `https://fastcompanybrasil.com/games/npcs-cognitivos-devem-se-tornar-cada-vez-mais-comuns-em-2026-entenda-o-que-sao/`
    — Sustenta a expectativa publicada no Brasil em 3/2/2026. *Confiabilidade:* **fraca para fato**
    — não nomeia um único jogo e tem um fornecedor como única fonte especializada; entra como
    registro de discurso, não como evidência.
16. **Drops de Jogos — «PGB 2026: uso de IA nos jogos é um dos destaques»** ·
    `https://dropsdejogos.uai.com.br/noticias/industria/pgb-2026-uso-de-ia-nos-jogos-e-um-dos-destaques/`
    — Sustenta o recorte brasileiro: 7.115 respondentes, coleta de 5 a 13/3/2026, 45,7% / 39,6% /
    38,4% de preocupação, 39,3% comprariam e 40,9% talvez. *Confiabilidade:* secundária sobre
    levantamento setorial conhecido; não abri o relatório original da pesquisa.
17. **GitHub — `EricSun0218/OpenGameAgent`** · `https://github.com/EricSun0218/OpenGameAgent` —
    Sustenta a existência e o **estado** do runtime aberto: MIT, 0.3.0-alpha.4, 84 commits, 50
    estrelas, Godot 4.7 / Unity 6 / Unreal 5.8 / .NET, provedores locais (Ollama, LM Studio,
    LocalAI, llama.cpp, vLLM), jogo como autoridade sobre o estado. *Confiabilidade:* primária e
    verificável; a maturidade declarada é a do próprio repositório.
18. **Davis+Gilbert LLP — «SAG-AFTRA's New Video Game Agreement»** ·
    `https://www.dglaw.com/sag-aftras-new-video-game-agreement/` — Sustenta a cláusula trabalhista:
    consentimento escrito, separado e "razoavelmente específico", obrigação de informar se haverá
    **geração em tempo real**, e piso próprio para essa categoria. *Confiabilidade:* análise
    jurídica de escritório; usada porque a fonte primária recusou conexão (ver 12.6), e por isso
    as datas ficaram em "meados de 2025 / vigência em novembro de 2025", sem precisão de dia.
19. **Notebookcheck — «After hardware, games are now affected too»** ·
    `https://www.notebookcheck.net/After-hardware-games-are-now-affected-too-The-AI-boom-shows-new-side-effects.1268812.0.html`
    — Sustenta a fragilidade de infraestrutura: Hathora comprada pela Fireworks AI em março de
    2026 e saída do setor de jogos, `Stormgate` perdendo o multijogador e preparando modo offline.
    *Confiabilidade:* veículo de tecnologia reportando fato verificável e de baixa ambiguidade.
20. **Wikipédia — `Neuro-sama`** · `https://en.wikipedia.org/wiki/Neuro-sama` — Sustenta o sinal
    fraco do público formado: criada por Vedal, estreia em 19/12/2022, **terceiro canal mais
    assinado da Twitch em janeiro de 2026**, pico de **343.215** assinaturas, 1,01 M de seguidores;
    e o banimento de duas semanas em 11/1/2023 por conduta de ódio. *Confiabilidade:* enciclopédia
    colaborativa — usada por ser a única versão **verificável** que abri, e em conflito declarado
    com o número que circula na imprensa (ver 8.1).
21. **Inworld — «LLM Inference Cost at Scale»** ·
    `https://inworld.ai/resources/llm-inference-cost-at-scale` — Sustenta a ordem de grandeza da
    operação: B200 entre US$ 3,49 e US$ 14,24 por GPU-hora em abril de 2026, piso próprio de US$ 5,
    241 ms até o primeiro token contra 445 ms. *Confiabilidade:* **material de fornecedor**, com o
    viés que isso implica; usado como ordem de grandeza e nunca como medida independente.
22. **The Neural Base — «Cost scaling with players»** ·
    `https://theneuralbase.com/ai-for-gaming/learn/beginner/cost-scaling-with-players/` —
    Sustenta a forma da curva de custo: US$ 0,001–0,005 por interação via API contra
    US$ 0,00002–0,00005 local, e o exemplo de US$ 18 mil/dia consumindo 72% do lucro bruto.
    *Confiabilidade:* **fraca** — material didático com exemplo declaradamente hipotético; entra
    como modelo de raciocínio, e está marcado assim no texto.
23. **Ubisoft — press release «Ubisoft Unveils "Teammates", Its First Playable Generative AI
    Experience Through Closed Player Testing»** ·
    `https://staticctf.ubisoft.com/8aefmxkxpxwl/2QCAorjku7w7gH1LGORV3t/6e8f347be3ecab7daa4769e5300086bc/Ubisoft_Unveils_%C3%A2__Teammates%C3%A2____Its_First_Playable_Generative_AI_Experience_Through_Closed_Player_Testing.pdf`
    — Sustenta o estado do incumbente AAA: 5/12/2025, primeira experiência jogável de IA
    generativa da empresa, em teste **fechado**, herdeira do `NEO NPC` de março de 2024.
    *Confiabilidade:* primária e institucional; **não confirma** o número de testadores que a
    imprensa cita, e por isso esse número aparece no texto como relato de imprensa.

## 12. Anexo — o levantamento bruto

Sem edição e sem corte. Aqui ficam a entrevista, a triagem que recusou tecnologia madura, as
provas adversariais com os efeitos mortos, as rodadas descartadas, as buscas que não deram em
nada e a autochecagem.

### 12.1 Fase 1 — a entrevista, como ela correu nesta rodada

A skill é bloqueante na Fase 1: as nove perguntas vão **de uma vez**, e não se produz nada antes
do echo-back confirmado. Nesta rodada **não havia interlocutor humano** — o recorte veio escrito
na folha de instrução da rodada, que funciona como as respostas. Reproduzo o bloco como ele teria
sido feito, e ao lado a resposta efetivamente usada. Onde a folha não respondeu, **eu propus e
marquei como suposição minha**, conforme a invariante da skill.

| # | Pergunta | Resposta usada | Origem |
|---|---|---|---|
| 1 | TEMA E FRONTEIRA | "NPCs generativos e mundos vivos" — o personagem autônomo dentro de um mundo com regras. **Não é** simulação social como método (tema 6), **não é** história gerada/coautoria (tema 8), **não é** companheiro digital fora de mundo com regras (tema 19), **não é** IA na produção de jogos | folha + bloco do tema |
| 2 | HORIZONTE | 2031 | folha |
| 3 | RECORTE GEOGRÁFICO | global, com nota sobre o Brasil | folha |
| 4 | PARA QUEM | quem projeta mídia e interação | folha |
| 5 | JÁ DESCARTADO | o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão | folha |
| 6 | VIÉS | neutro | folha |
| 7 | O QUE MUDARIA DE IDEIA | adoção já ter passado da maioria inicial (Rogers), ou a tecnologia não romper nada | folha |
| 8 | QUANTAS RAÍZES | **3** | **suposição minha** — a folha não respondeu; escolhi 3 por caber nos três mecanismos distintos que a evidência sustenta (agência, persistência, economia) sem virar lista de tecnologias |
| 9 | POSSO NAVEGAR? | sim — `WebSearch`/`WebFetch` reais, só cita o que abriu | folha |

**Perguntas condicionais** (máximo uma segunda rodada, e a skill lista quatro gatilhos): dois
dispararam, e resolvi os dois por conta própria porque não havia a quem perguntar, declarando
aqui.

- *Fronteira colide com vizinho.* O tema encosta em 6, 8 e 19 ao mesmo tempo — é o tema com mais
  vizinhos da família. Resolvido pelo próprio bloco do tema ("aqui o objeto é o personagem
  autônomo dentro de um mundo com regras"), e os cortes estão em 12.3.
- *Horizonte coerente com o tema?* 2031 é curto para infraestrutura pesada e longo para software
  de consumo. Este tema é os dois ao mesmo tempo: software de consumo (jogo) dependendo de
  infraestrutura (inferência). Mantive 2031 e usei a folga de prazo permitida na ordem 3 — os onze
  efeitos de terceira ordem caem **depois** do horizonte, o que é explicitamente permitido pela
  calibração da skill e está declarado em 12.7.

**Suposições minhas, todas marcadas:** número de raízes (3); `publico_ok: false` (padrão da
disciplina, e não havia autorização); o enunciado do `experimento` no frontmatter (a folha não
definiu, e ele sai da seção 10); a leitura de que "recorte global com nota sobre o Brasil" cabe em
`recorte_geografico: global` com a seção 3.6 fazendo a nota.

```
RECORTE FECHADO — confirmado pela folha de instrução da rodada (não houve interlocutor humano)
  tema ................ NPCs generativos e mundos vivos: o personagem que age, lembra e
                        persiste dentro de um mundo com regras
  não é ............... simulação social como método (tema 6); história gerada e coautoria
                        (tema 8); companheiro digital sem mundo com regras (tema 19);
                        IA generativa aplicada à produção de jogos
  horizonte ........... 2031
  região .............. global, com nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... o que já é comum em produto de massa (régua da disciplina)
  viés ................ neutro
  falsificador ........ adoção já passada da maioria inicial, ou ausência de ruptura
  raízes .............. 3
  navegação ........... sim
  SUPOSIÇÕES MINHAS ... número de raízes (3); publico_ok=false; enunciado do experimento;
                        "global" como valor do campo, com a nota Brasil na seção 3.6
```

### 12.2 Fase 2 — a triagem de maturidade, candidata por candidata

A régua vem primeiro: **isto muda o que é possível fazer, ou só faz mais rápido o que já se
fazia?** Depois os cinco testes, em ordem, com a regra de encerramento: reprovar T1 **ou** aprovar
T5 encerra como maduro. Foram avaliadas onze candidatas; **seis foram recusadas**.

| Candidata | T1 régua | T2 substituição | T3 sinal datado | T4 precondição | T5 rotina | Veredito | 3H |
|---|---|---|---|---|---|---|---|
| Árvore de diálogo / FSM / behavior tree | reprova | — | — | — | **aprova** | **MADURO — recusada** | H1 |
| Síntese de voz para NPC (TTS neural) | reprova (mesma fala, mais barata e em mais idiomas) | — | — | — | aprova | **MADURO — recusada** | H2− |
| Diálogo generativo **sem agência** (personagem que fala e não muda estado) | passa, no limite | **reprova** — um time competente faria o mesmo objetivo com árvore maior, aceitando custo e prazo | passa | passa | quase | **RECUSADA em T2** | **H2−** |
| Animação facial e sincronia labial automática | reprova | — | — | — | aprova | **MADURO — recusada** | H2− |
| Tradução e localização automática de fala de NPC | reprova | — | — | — | aprova | **MADURO — recusada** | H2− |
| Geração procedural de mundo (mapa, missão, item) | reprova para este tema (é anterior à IA generativa e já é rotina) | — | — | — | aprova | **MADURO — recusada** | H1 |
| **SLM no dispositivo com percepção e ação** | **passa** | **passa** — sem ele o objetivo muda: não dá para ter comportamento não enumerado na cadência do jogo | **passa** — 6/1/2025, 13/3/2025, 21/10/2025 | **passa** — falta consequência mecânica em escala | não | **EMERGENTE + DISRUPTIVO → raiz 1** | **H2+** |
| **Runtime de agente acoplado às regras do jogo** | **passa** | **passa** | **passa** — `OpenGameAgent` alpha; `INFUSE` interno | **passa** — falta autoria de limites | não | **EMERGENTE → entra na raiz 1** | H2+ |
| **Memória persistente + mundo que roda sem jogador** | **passa** | **passa** — sem isso o objetivo (relação que dura) é impossível, não caro | **passa** — `SEED` em 5/8/2026 | **passa** — falta persistência fora do servidor | não | **EMERGENTE + DISRUPTIVO → raiz 2** | **H3** |
| **Inferência como custo de operação do jogo** | **passa** (o artefato é maduro; o **arranjo** é que rompe) | **passa** | **passa** — 1000x da Jam & Tea; preços de 7/7/2026; Hathora em 3/2026 | **passa** — falta preço que não puna a conversa, e preservação | não | **DISRUPTIVO pelo arranjo → raiz 3** | H2+ |
| Avaliação estatística de comportamento (suítes, LLM-as-judge) | passa | passa | passa — `NCP-Bench` 8/2026, `WSE-bench` 8/2026 | passa | não | **EMERGENTE — mas é consequência, não raiz** → virou `e1` | H2+ |

**A decisão que mais custou:** recusar o **diálogo generativo sem agência** como raiz. É o que
quase todo mapa deste tema coloca no centro, é o que os fornecedores vendem, e é o que aparece na
maior parte das notícias. Reprovou em **T2** por um motivo que eu gostaria de ter escrito antes de
começar a buscar: um time competente que perdesse essa tecnologia **não mudaria o objetivo** —
escreveria uma árvore maior, contrataria mais redatores, aceitaria custo e prazo. Em Three
Horizons é **H2−** puro: faz o modelo atual durar mais. Quem confunde isso com tendência está
mapeando o presente com mais folhas.

**A segunda decisão difícil:** aceitar a raiz 3, cujo artefato (servir modelo) é maduro. A skill
autoriza explicitamente — "tecnologia madura pode participar de uma disrupção sem ser a
disrupção, quando o que rompe é o arranjo, o preço ou o modelo". O que rompe aqui é o arranjo
econômico, e o incumbente tem nome: o modelo de negócio de cópia.

**Nenhuma recusa total do tema.** O protocolo de recusa e reenquadramento da Fase 2 **não foi
acionado**: das onze candidatas, três sobreviveram como raiz e uma virou efeito. O tema não é
majoritariamente maduro — mas a sua **versão popular** é, e por isso a recusa aparece dentro do
mapa, não no lugar dele.

### 12.3 Os cortes de fronteira — o que saiu, e para qual vizinho

Quatro cortes, todos declarados no recorte:

1. **Simulação social como instrumento de investigação (tema 6).** Saiu tudo que é sobre
   *validade da leitura*: se o agente representa gente de verdade, se a conclusão de uma simulação
   vale como evidência, painéis sintéticos, réplica de rede social. Ficou aqui só o ponto de
   contato — `e6` e `e6.1`, sobre o runtime compartilhado —, e ele está marcado como fronteira.
2. **História gerada, coautoria, novela visual (tema 8).** Saiu tudo que é sobre *a narrativa
   produzida*: enredo gerado a partir de uma frase, arco dramático, geração de cena. O `NCP-Bench`
   e o `WSE-bench` são fontes de fronteira — medem narrativa — e por isso usei deles apenas o que
   fala de **consistência do personagem sob intervenção**, que é o lado de cá.
3. **Companheiro digital (tema 19).** Saiu tudo que é sobre *vínculo sem mundo com regras*:
   dependência afetiva, saúde mental, IA de companhia. O `Whispers from the Star` fica na
   fronteira e entrou só como prova de que existe mercado pagante para conversa aberta com
   personagem; a conversa sobre o que o vínculo faz com a pessoa é do tema 19.
4. **IA generativa na produção de jogos.** Saiu arte, código, localização e QA de produção. Entrou
   apenas como advertência estatística: o número grande de divulgação de IA na Steam é
   majoritariamente disso, e **não** de NPC generativo.

### 12.4 Fase 5 — as seis provas, e o que morreu

Aplicadas à roda inteira. A cota mínima de dano da skill exige pelo menos um efeito eliminado ou
rebaixado **por raiz**; aqui morreram **quatro** efeitos e **três** foram rebaixados, e a roda
publicada na seção 5 já é a versão pós-corte.

**P1 — extrapolação linear.** Varreu os oito efeitos de primeira ordem. Matou um:

- **† `e9` (raiz 1) — "o jogador deixa de consultar wiki e guia porque pergunta ao personagem".**
  Morreu por P1 e P3 juntas: é "menos wiki, mais pergunta", mesmo ator e mesmo mecanismo — e já
  acontece hoje, com o jogador perguntando ao assistente de IA fora do jogo. Estado da arte, não
  efeito.

**P2 — velocidade de adoção.** Exigiu caso histórico comparável para cada prazo de primeira
ordem. Rebaixou dois:

- **`e8` desceu de `alta` para `media`.** O comparável que eu tinha (taxa de runtime da Unity,
  2023) foi **revertido em menos de quatro meses** sob pressão pública — é evidência de que o
  mercado reage rápido a pedágio novo, não de que ele o absorve. A terceira condição da
  calibração de confiança falhou.
- **`e5` desceu de `media` mantendo `media` no sinal, e o prazo foi de 2028 para 2029.** O
  comparável é a ascensão do conteúdo de observação (streaming de jogos), que levou perto de uma
  década para virar categoria.

**P3 — já aconteceu.** Foi a prova mais produtiva deste tema, porque aqui muita coisa "futura"
já é presente. Matou um efeito e obrigou a reescrever dois:

- **† `e10` (raiz 2) — "personagens de IA ganham público próprio e viram figuras públicas".**
  Morreu por P3, e com data: `Neuro-sama`, terceiro canal mais assinado da Twitch em janeiro de
  2026, com pico de 343.215 assinaturas. Isso não é efeito de segunda ordem de nada: é estado da
  arte, e foi para a seção 3/6 como sinal.
- `e2` foi reescrito: "o personagem diz o que não devia" já aconteceu (Darth Vader, 16/5/2025), e
  o que é futuro é **o defeito mudar de natureza** — virar transgressão de caráter, julgada por
  quem joga.
- `e4` foi reescrito: memória entre sessões já existe em mod (`Mantella`); o que é futuro é o
  **save deixar de restaurar o mundo** e passar a guardar a relação.

**P4 — força contrária.** Exigiu que cada efeito de primeira ordem nomeasse quem perde e o que
essa parte pode fazer. Resultado por efeito, resumido: `e1` — publicadora e certificadora de
plataforma, que podem exigir determinismo (perdem porque já convivem com jogo como serviço não
determinístico); `e3` — estúdios de conteúdo escrito e suas ferramentas (perdem devagar, e só na
faixa de baixo orçamento); `e4` e `e5` — o público que quer jogo comparável e competitivo, que é
grande e não vai a lugar nenhum; `e7` e `e8` — a loja, que resiste a modelo de preço variável, e o
próprio jogador, que rejeita assinatura; **e a força contrária transversal**, que é a que mais
pesa: **52% da indústria acha que a IA generativa faz mal**, 63% em design e narrativa. Nenhum
efeito sobreviveu sem força contrária nomeada. Um morreu por não ter:

- **† `e11` (raiz 3) — "o custo de inferência cai tanto que deixa de ser assunto até 2029".**
  Morreu por P4 e P5: não modela ninguém que perca com isso, e pendura o galho inteiro numa única
  aposta de preço. Virou o **wildcard W4**, invertido — "o custo para de cair" —, que é a forma
  honesta de tratar a mesma incerteza.

**P5 — precondição única.** Procurou galho pendurado numa só aposta. Achou um problema estrutural
que não matou efeito mas está declarado em 5.1 e em 7.3: **`e7.2` (modelo no dispositivo) anula
boa parte da própria raiz 3**. Matou um efeito:

- **† `e12` (raiz 2) — "o jogador passa a poder levar seu personagem para outro jogo, e isso vira
  padrão de mercado até 2031".** Morreu por P5: exige, ao mesmo tempo, formato aberto de memória,
  acordo entre lojas concorrentes e compatibilidade entre modelos diferentes. Três precondições
  não validadas simultaneamente. O que sobrou dele é `e4.1` — **a primeira proposta de formato
  sai de comunidade de mods** —, que é o que a evidência sustenta.

**P6 — camadas (CLA).** Está na seção 7.4, com o achado principal: o mapa inteiro repousa sobre a
premissa de que imersão e verossimilhança são o valor supremo do jogo. Rebaixou um efeito:

- **`e3.1` desceu de `alta` para `media`.** "O marketing migra do trailer para o clipe de sessão
  real" é verdadeiro na litania e frágil embaixo: o mecanismo sistêmico (quem paga a mídia
  compra previsibilidade) empurra no sentido contrário, e nenhuma fonte aberta aqui mostra
  publicidade de jogo abrindo mão de cena controlada.

**Resumo do dano por raiz** — a cota foi cumprida nas três:

| Raiz | Eliminados | Rebaixados |
|---|---|---|
| 1 — o personagem age | `e9` | — (mas `e1` teve o prazo defendido em 7.2, e é a aposta mais exposta) |
| 2 — o mundo não pausa | `e10`, `e12` | `e5` (prazo 2028 → 2029) |
| 3 — custo vira operação | `e11` | `e8` (alta → media), `e3.1` (alta → media, por P6) |

### 12.5 Rodadas descartadas e caminhos abandonados

**Estrutura alternativa de raízes, com quatro.** A primeira versão tinha uma quarta raiz: *"o
controle editorial migra do conteúdo para a política"*. Foi absorvida como `e1` e `e1.2` porque
**não passa no teste de raiz**: ela não rompe nada por conta própria — é o que acontece **porque**
o personagem passa a agir. Registro porque a tentação de promovê-la é grande: ela é o efeito mais
interessante do mapa, e efeito interessante não vira raiz.

**Uma segunda alternativa, também descartada:** organizar as raízes por *ator* (jogador, estúdio,
plataforma) em vez de por *mecanismo*. Produz um mapa mais legível e pior: os três atores aparecem
nas três raízes, e a árvore repetiria os mesmos efeitos com sujeitos diferentes.

**Efeitos que nasceram e não chegaram à roda** (antes das provas, por não passarem na regra de
expansão — o filho precisa mudar de ator ou de mecanismo em relação ao pai):

- "os jogos ficam mais imersivos" — sem ator, sem mecanismo, é litania pura;
- "os NPCs ficam mais realistas" — idem;
- "mais estúdios adotam IA" — "mais X", funde com o pai;
- "o tempo de sessão aumenta" — mesmidade, e mensuração, não efeito;
- "aparece um motor de jogo com agentes embutidos" — plausível, mas é o mesmo mecanismo de `e3`
  com outro fornecedor;
- "surgem golpes usando personagem de jogo" — fora da fronteira (é segurança, não design);
- "dubladores perdem trabalho" — **não** entrou como efeito porque a cláusula de 2025 já
  transformou isso em matéria contratada; está na seção 3.5 como estado, não como futuro.

**Uma ambiguidade que não resolvi.** O bloco do tema cita `opengameagent` como "runtime aberto
para jogos em que os personagens entendem objetivos". O que encontrei e abri foi o
`EricSun0218/OpenGameAgent`, que corresponde exatamente a essa descrição — mas **não posso
afirmar** que é o mesmo projeto que a varredura da turma encontrou, porque existe pelo menos um
outro projeto de nome quase igual (`OpenGame`, sobre codificação agêntica de jogos, que é outra
coisa). Usei o que abri e descrevi o que ele é, sem atribuir a ele a menção do enunciado.

### 12.6 O que não deu em nada, e o que recusou conexão

**Quatro fontes recusaram conexão nesta sessão (HTTP 403)** e por isso **não estão na seção 11**,
mesmo sendo primárias e mesmo eu saber o que provavelmente está nelas:

- `sagaftra.org` — página do *2025 Interactive Media Agreement*. Substituída pela análise
  jurídica do item 18, com perda de precisão nas datas.
- `krafton.com` — sala de imprensa sobre o lançamento do `inZOI`. Substituída pelas duas páginas
  da NVIDIA, que trazem o dado técnico que me interessava (0,5 B no dispositivo).
- `businesswire.com` — anúncio do CPC no CES 2025. Mesma substituição.
- `dotesports.com` — reportagem sobre o `Neuro-sama` na Twitch. Substituída pela enciclopédia,
  com a divergência de números declarada em 8.1.

**Uma quinta fonte devolveu página truncada:** a matéria da PC Gamer sobre a projeção de que mais
da metade dos jogos da Steam terão divulgação de IA até 2027–2028. O conteúdo veio cortado antes
dos números; **não usei a projeção**, e a série histórica que cito (26,5% em junho de 2026, 21,2%
em fevereiro) vem do levantamento do item 7, que abriu inteiro.

**O que procurei e não consegui apurar** — fica registrado como não apurado, e não como ausência
de fato:

- **`Thistle Gulch` / Fable Studio.** Citado no bloco do tema como vila com personagens autônomos
  e API Python. Buscas sobre runtimes abertos devolveram o `OpenGameAgent` e projetos homônimos,
  **nenhuma página do projeto ou do estúdio**. Estado atual: não apurado.
- **`Eastshore`, `Vantage Digital Labs`, `PastPort`.** Citados no bloco do tema; não busquei cada
  um individualmente por limite de rodada, e portanto **não afirmo nada** sobre eles. Ficam como
  dívida para quem continuar este mapa.
- **`Convai`.** Apareceu como nome em resultados de busca (inclusive numa enciclopédia gerada por
  modelo, que não abri por não considerar fonte), mas **não abri nenhuma página do fornecedor**.
  Não está na seção 11 e não sustenta nada aqui.
- **Situação atual da Jam & Tea Studios.** Não apurada. Sei que o `Retail Mage` saiu em 13/11/2024
  e que o estúdio publicou o texto do item 10; não sei se o estúdio segue operando em setembro de
  2026, e não afirmo.
- **Número de testadores do `Teammates` da Ubisoft.** A imprensa fala em "poucas centenas"; o
  release que abri não traz. Citado como relato de imprensa, com a ressalva.
- **Retenção do `SEED`.** O dado que decidiria a fragilidade declarada em 7.3 — quantas pessoas
  seguem jogando um mundo que não pausa depois de dois meses — **não existe publicamente**, ou não
  o encontrei. É a lacuna mais importante deste mapa.
- **Latência real do ACE em jogo enviado.** Nenhuma das três páginas da NVIDIA traz número de
  latência medido em jogo; o único número de latência que tenho é de um fornecedor, sobre a
  própria infraestrutura (241 ms até o primeiro token), e não é a mesma medida.

**Buscas que não produziram fonte utilizável:** "mercado de IA generativa em jogos 2026" (só
páginas de conteúdo agregado com números redondos, descritas em 8.3); "estúdio brasileiro NPC
generativo" (nenhum caso nomeado — o que é, em si, um achado do recorte brasileiro, e por isso a
seção 3.6 fala de percepção do público, não de produção).

### 12.7 Autochecagem — rodada, não afirmada

A skill exige rodar a checagem e **colar o resultado**. Saída real desta rodada, em 17/09/2026:

```
== grep -c '^## ' ==
12
== script da skill (6.2) ==
faltam: nada
raizes: 3 | frontmatter diz: 3
efeitos por ordem: {1: 8, 2: 11, 3: 11}
ordem 3 com confianca alta: 0 (cota: no maximo 1)
contadores batem: True
confianca ordem 1: {'alta': 1, 'media': 7} | prazo > horizonte: 0
confianca ordem 2: {'media': 5, 'baixa': 5, 'alta': 1} | prazo > horizonte: 0
confianca ordem 3: {'baixa': 11} | prazo > horizonte: 11
roda: YAML valido, 3 niveis, ids unicos: True
== links da secao 11 ==
200 https://80.lv/articles/this-new-24-7-society-simulator-is-powered-by-thousands-of-ai-controlled-npcs
200 https://artificialintelligenceact.eu/transparency-rules-article-50/
200 https://arxiv.org/abs/2604.10107
200 https://arxiv.org/abs/2608.08160
200 https://arxiv.org/abs/2608.15654
200 https://developer.nvidia.com/blog/nvidia-ace-adds-open-source-qwen3-slm-for-on-device-deployment-in-pc-games/
200 https://dropsdejogos.uai.com.br/noticias/industria/pgb-2026-uso-de-ia-nos-jogos-e-um-dos-destaques/
200 https://en.wikipedia.org/wiki/Neuro-sama
200 https://fastcompanybrasil.com/games/npcs-cognitivos-devem-se-tornar-cada-vez-mais-comuns-em-2026-entenda-o-que-sao/
200 https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/
200 https://github.com/EricSun0218/OpenGameAgent
200 https://inworld.ai/resources/llm-inference-cost-at-scale
200 https://oecd.ai/en/incidents/2025-05-16-f75d
200 https://staticctf.ubisoft.com/8aefmxkxpxwl/2QCAorjku7w7gH1LGORV3t/6e8f347be3ecab7daa4769e5300086bc/Ubisoft_Unveils_%C3%A2__Teammates%C3%A2____Its_First_Playable_Generative_AI_Experience_Through_Closed_Player_Testing.pdf
200 https://store.steampowered.com/app/3730100/Whispers_from_the_Star/
200 https://theneuralbase.com/ai-for-gaming/learn/beginner/cost-scaling-with-players/
200 https://www.dglaw.com/sag-aftras-new-video-game-agreement/
200 https://www.frisson-labs.com/ai-npcs-2026
200 https://www.jamandtea.studio/news/making-retail-mage-a-new-approach-to-ai-in-games
200 https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html
200 https://www.notebookcheck.net/After-hardware-games-are-now-affected-too-The-AI-boom-shows-new-side-effects.1268812.0.html
200 https://www.nvidia.com/en-us/geforce/news/nvidia-ace-autonomous-ai-companions-pubg-naraka-bladepoint/
200 https://www.nvidia.com/en-us/geforce/news/nvidia-ace-naraka-bladepoint-inzoi-launch-this-month/
```

Leitura do que o script diz, e do que ele não pega:

- **12 títulos `##`**, literais e numerados; todo subtítulo deste documento é `###` ou mais fundo.
- **Contadores batem** com a roda final, **depois** dos cortes da Fase 5 — 8 / 11 / 11. O
  frontmatter foi corrigido para 11 na terceira ordem depois que o script acusou divergência com
  o valor que eu havia escrito de memória (10). É exatamente o erro descrito em `DUVIDAS.md` —
  contador escrito a partir do rascunho —, e de novo **não foi pego lendo**: foi pego contando.
- **Cota de humildade cumprida:** zero efeitos de terceira ordem com confiança `alta` (o limite é
  um). Toda a terceira ordem é `baixa`, que é a resposta esperada.
- **Prazos monotônicos** em todos os galhos; nenhum efeito de primeira ou segunda ordem passa de
  2031, e **os onze de terceira ordem passam** — permitido pela calibração, e declarado aqui.
- **23 links, 23 respostas `200`.** Todos foram abertos por mim nesta sessão, não só verificados
  por código: o `curl` prova que o endereço responde, não que alguém leu. O que o script não pega
  e eu confirmo à mão: as quatro páginas que devolveram 403 **não estão** na seção 11, e
  `fontes: 23` é o número de fontes efetivamente lidas.

### 12.8 As quatro perguntas do teste cruzado

A skill exige responder, sobre a própria rodada, as quatro perguntas com que a turma a avalia — e
mostrar **onde** cada coisa aconteceu.

1. **Fez perguntas antes de rodar?** **Sim, com uma ressalva honesta.** O bloco das nove perguntas
   está em **12.1**, com a resposta usada e a origem de cada uma, e o `RECORTE FECHADO` está
   colado logo abaixo. A ressalva: **não houve interlocutor humano** nesta rodada, então a
   confirmação do echo-back veio da folha de instrução, não de uma pessoa. As quatro suposições
   que eu tive de fazer estão nomeadas, e a mais consequente — três raízes — está justificada.
2. **Separou novidade de comum, e recusou o comum?** **Sim.** A triagem completa está em **12.2**,
   com onze candidatas e o teste que reprovou cada uma: árvore de diálogo, FSM e behavior tree
   (T5), voz sintética, animação facial, localização automática e geração procedural (T1), e —
   a recusa que importa — **diálogo generativo sem agência, reprovado em T2 e classificado como
   H2−**, que é a tecnologia que a maior parte das análises deste tema coloca no centro.
3. **Duvidou do próprio resultado?** **Sim, e cobrou preço.** As seis provas estão em **12.4**:
   quatro efeitos mortos (`e9` por P1+P3, `e10` por P3, `e11` por P4+P5, `e12` por P5) e três
   rebaixados (`e8` de alta para media por P2, `e5` no prazo por P2, `e3.1` de alta para media por
   P6), com a cota mínima cumprida nas três raízes. A seção **7** traz o que sobrou de dúvida,
   incluindo o problema estrutural de que um efeito da raiz 3 (`e7.2`) pode anular a própria raiz
   3, e a possibilidade de que o NPC generativo seja simplesmente pior de jogar.
4. **Saiu no formato?** **Sim.** Doze títulos literais, frontmatter com os dezoito campos, bloco
   `roda:` em YAML válido com três níveis e ids hierárquicos, e a autochecagem rodada e colada em
   **12.7**.

### 12.9 Nota de método — o que esta rodada mostrou sobre a própria ferramenta

Três observações sobre a skill, que valem para quem a for usar de novo.

**A Fase 2 foi o que fez este mapa não ser igual aos outros.** Sem o teste T2, o diálogo
generativo entraria como raiz — ele tem todos os sinais de novidade, produto, fornecedor e
manchete. O que o desclassificou foi uma pergunta de uma linha: *um time competente que perdesse
isso mudaria o objetivo, ou só aceitaria custo e prazo?* Aplicada a este tema, ela separa o
personagem que **fala** do personagem que **age** — e essa é exatamente a linha que o bloco do
tema pede para encontrar.

**A regra de parada própria (mudar de ator ou de mecanismo) cortou mais do que as provas
adversariais.** Sete efeitos morreram antes de nascer, por mesmidade (12.5), contra quatro mortos
na Fase 5. A regra barata é a que faz o trabalho pesado; a bateria adversarial é a que produz o
registro.

**E a limitação que a rodada expôs:** a roda não representa que uma raiz possa **anular** outra.
Neste tema isso não é detalhe — é o principal achado estrutural (5.1 e 7.3), e ele só existe em
prosa. Um mapa lido só pelo bloco YAML, que é como o processamento da turma vai lê-lo, **não verá
essa relação**. Quem cruzar os mapas precisa saber disso antes de somar galhos.
