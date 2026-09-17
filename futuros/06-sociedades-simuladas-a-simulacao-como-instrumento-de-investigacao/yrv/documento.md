---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: yrv
zona_de_interesse: "Simulação e mundos"
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 14
efeitos_ordem_3: 11
tecnologias_citadas: [Generative Agents, Concordia, Concordia Simulation Builder, OASIS, AgentSociety, SocioVerse, PolicySim, SiliSocS, EASE, TRAILS, Twin-2K-500, Qualtrics Synthetic Panels, Qualtrics Edge Audiences, SIVE, Montelago, WebGPU, WebLLM, NetLogo, General Social Survey, American National Election Study, AIPW, PPI++, Digital Services Act, Grok, Reference Manual on Scientific Evidence, Agents4Gov]
fontes: 19
confianca: media
experimento: "O tribunal de duas simulações — dois grupos recebem a MESMA pergunta e o MESMO simulador, mas cada um escreve por conta própria a persona e a instrução; mede-se quantos pares chegam a conclusões opostas, e se alguém consegue, lendo só o relatório do outro grupo, dizer por que divergiram"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

Uma sociedade simulada não é um jogo com personagens espertos nem uma maquete bonita de
cidade. É um **instrumento de medida** — e a pergunta que importa sobre qualquer instrumento
não é se ele impressiona, é se ele lê certo. Este mapa sustenta que a travessia em curso
produz três rupturas distintas, e que a mais consequente delas não é sobre simular melhor: é
sobre **quem tem o direito de dizer que a leitura vale**.

A primeira ruptura é sobre a origem do dado de comportamento. Desde sempre, atitude e conduta
social eram **coletadas** — recrutando, incentivando e administrando amostra de gente. Em
**15 de novembro de 2024**, num trabalho revisado pela última vez em **28 de junho de 2026**,
Park e onze coautores entrevistaram **1.052 americanos** por duas horas cada e construíram um
agente por pessoa: nos itens retidos do *General Social Survey*, os agentes feitos de
entrevista acertaram **83%** do que a própria pessoa acerta de si mesma quando reentrevistada
duas semanas depois, e a combinação chegou a **86%**, contra **74%** de agentes feitos só de
demografia. Dezesseis meses depois, em **18 de março de 2026**, a Qualtrics pôs isso à venda:
painel sintético para consumidor americano, resultado em horas em vez de semanas, a **cerca de
metade** do custo do painel humano, sobre um modelo afinado com **mais de 200 milhões** de
respondentes. O comportamento social deixou de ser só coletado. Passou a ser **gerado**.

A segunda é sobre escala e reexecução. Em **18 de novembro de 2024** o OASIS declarou simular
até **um milhão** de agentes em réplicas de X e Reddit para estudar propagação, polarização e
efeito manada; em **12 de fevereiro de 2025** o AgentSociety declarou **mais de 10 mil** agentes
e **5 milhões** de interações, com renda básica e furacão entre os cinco temas; em **20 de
março de 2026** o PolicySim propôs explicitamente o que antes era impossível — avaliar a
política de moderação e de recomendação **antes** de implantá-la, em vez de medir por teste
A/B depois. O fenômeno coletivo entrou em bancada. Só que a bancada treme: em **17 de maio de
2026**, Ye e colegas mostraram que a taxa de cooperação num dilema do prisioneiro repetido se
deslocou em até **76 pontos percentuais** por mudança menor no formato da persona e na
instrução do jogo — e que a **mesma** perturbação produziu 76 pontos num modelo e **1 ponto**
em outro.

A terceira é sobre quem opera o instrumento. Em **15 de maio de 2026** a Universidade das
Nações Unidas publicou um construtor web para o Concordia, do Google DeepMind, que converte em
formulário um cenário que custa **350 a 1.300 linhas de Python** no Concordia bruto, mirando
declaradamente formulador de política pública e professor. Com WebGPU estável nos quatro
navegadores e modelos de 0,5 a 3 bilhões de parâmetros rodando numa aba, rodar uma sociedade
sintética deixa de ser um projeto com orçamento e vira um gesto de rascunho.

O mapa é frágil num ponto que declaro de saída: quase toda a evidência de comportamento entre
agentes vem de laboratório, quase todo número de adoção vem de quem vende a solução medida, e
a literatura crítica — Larooij & Törnberg em **04 de abril de 2025**, Li & Tao em **19 de
fevereiro de 2026** — diz, com essas palavras, que a validação é tratada por avaliação
subjetiva de verossimilhança. O instrumento existe. O certificado de calibração, não.

## 2. O tema

Este mapa trata da **simulação social como método**: colocar uma população de agentes com
modelo de linguagem num ambiente configurável, rodar possibilidades e usar o que emerge como
evidência sobre gente de verdade. O objeto não é o mundo simulado — é o **ato de usá-lo para
saber alguma coisa**.

Onde isso encosta em mídia e interação exige ser dito devagar, porque a resposta fácil está
errada. A resposta fácil é "dá para testar a interface com usuários falsos". A resposta
interessante é outra: a disciplina de projetar interação foi construída sobre um acesso
específico ao real — **observar pessoa usando coisa**. Teste de usabilidade, entrevista,
diário, analytics, A/B: todos são variações de um mesmo compromisso epistemológico, o de que
só se aprende sobre uso observando uso. É um compromisso caro, lento, e por isso mesmo
**disciplinador**: ele obriga o projetista a encostar em gente antes de afirmar.

Quando a população vira gerável, esse compromisso se afrouxa — e o que muda no ofício não é a
velocidade, é o **ônus da prova**. Afirmar "os usuários vão reagir assim" deixa de exigir que
alguém tenha ido ver, e passa a exigir que alguém tenha rodado. Quem projeta mídia e interação
ganha um instrumento que nunca teve — dá para ver a dinâmica coletiva de um produto antes de
soltá-lo em gente — e perde, na mesma operação, a fricção que impedia afirmação barata. As duas
coisas chegam juntas, no mesmo pacote, e não há como aceitar uma e recusar a outra.

Há um segundo deslocamento, mais específico do campo. Boa parte do que hoje se projeta não é
uma tela, é uma **regra de circulação**: o que aparece para quem, em que ordem, com que
amplificação. Esse objeto nunca teve bancada de teste — o efeito de uma regra de recomendação
sobre polarização só se conhecia depois de aplicada a milhões de pessoas. A sociedade simulada
é a primeira coisa que se parece com um túnel de vento para isso. Se ela funcionar, o objeto
central do design de plataforma deixa de ser a interface e passa a ser o **cenário**: população,
regra e choque, versionados junto com o código.

**A fronteira — o que este mapa NÃO trata.** Quatro cortes; os três primeiros vêm da lista dos
19 temas, o quarto é meu:

1. **Não é personagem autônomo em jogo.** NPC que improvisa, companheiro que lembra, mundo
   povoado para ser jogado — isso é o tema 7. Aqui o mundo não existe para ser habitado, existe
   para ser **medido**.
2. **Não é mercado de máquinas com dinheiro real.** Agente que paga, negocia e responde por
   contrato é o tema 5. Simulação de economia entra aqui; carteira, não.
3. **Não é agente com corpo no mundo físico** — tema 9.
4. **Não é a qualidade do modelo de linguagem.** Se o agente é convincente ou bobo é insumo do
   mapa, não objeto dele. O que interessa é o que muda quando a população passa a ser gerável —
   inclusive, e principalmente, quando ela é **gerada errado**.

Um corte que **não** fiz, e que precisa ser dito: modelagem baseada em agentes clássica, de
regras fixas, fica no mapa como **substrato**, não como raiz. Ela é madura, e a seção 12 mostra
em qual teste ela reprova.

## 3. Onde isso está hoje

Esta seção é a âncora no presente. Tudo abaixo foi aberto nesta sessão, em 17/09/2026, e está
listado na seção 11. O que não consegui abrir está na seção 8, e **não sustenta nenhuma
afirmação do mapa**.

### 3.1 O que já existe e roda

**A arquitetura de origem.** *Generative Agents: Interactive Simulacra of Human Behavior*, de
Park, O'Brien, Cai, Morris, Liang e Bernstein, entrou no arXiv em **07 de abril de 2023**
(revisado em 06/08/2023): **25 agentes** num sandbox inspirado em *The Sims*, com observação,
planejamento e reflexão. A partir de uma única instrução — um agente queria dar uma festa de
Dia dos Namorados —, os outros espalharam convites, formaram relações, combinaram de ir juntos
e apareceram. A ablação mostrou que os três componentes importam. É o experimento que a turma
citou, e a data confere.

**A população calibrada contra gente nomeada.** O mesmo grupo publicou em **15 de novembro de
2024** — hoje com o título *LLM Agents Grounded in Self-Reports Enable General-Purpose
Simulation of Individuals*, revisado em **28 de junho de 2026** — entrevistas de **duas horas**
com **1.052 americanos** de amostra nacional diversa. Nos itens retidos do GSS, contra o
próprio teste-reteste de duas semanas dos participantes: **83%** (só entrevista), **82%** (só
questionário), **86%** (combinado), **74%** (só demografia). O ganho sobre demografia é o
resultado que importa: não é que a máquina saiba; é que **a entrevista transporta algo que o
perfil demográfico não transporta**.

**A escala.** O OASIS (Yang, Zhang, Zheng e mais vinte, **18/11/2024**, última revisão
23/03/2025) declara modelar **até um milhão** de usuários em réplicas de X e Reddit, com 21
ações possíveis e algoritmos de recomendação por interesse e por pontuação de calor, estudando
propagação de informação, polarização de grupo e efeito manada; o achado declarado é que
**escala maior produz dinâmica de grupo mais intensa**. O AgentSociety (Piao, Yan, Zhang e
mais treze, Tsinghua, **12/02/2025**, revisado **10/04/2026**) declara **mais de 10 mil**
agentes e **5 milhões** de interações sobre cinco questões: polarização, mensagem inflamatória,
renda básica universal, choque externo (furacão) e sustentabilidade urbana. O SocioVerse
(Zhang, Lin, Mou e mais dezenove, **14/04/2025**, revisado 15/07/2025) ancora a população num
**pool de 10 milhões de usuários reais** e valida em política, notícia e economia.

**A simulação como pré-implantação, dita com essas palavras.** O PolicySim (Huang, Tang, Xu e
mais seis, **20/03/2026**) constrói um sandbox para otimizar política de intervenção de
plataforma — recomendação e filtragem de conteúdo — argumentando explicitamente contra esperar
o teste A/B reativo depois do lançamento, e modelando a dinâmica **bidirecional** entre
comportamento do usuário e intervenção da plataforma.

**O produto comercial.** Em **18 de março de 2026**, no X4 Summit, a Qualtrics anunciou painéis
sintéticos para consumidores dos EUA, sobre um modelo de linguagem afinado com **mais de 200
milhões** de respondentes de pesquisa, alegando **12 vezes** mais acurácia que um modelo de uso
geral, resultado "em horas em vez de semanas" e **cerca de metade** do custo do painel humano,
com expansão anunciada para Reino Unido, Irlanda, Canadá, Austrália e Nova Zelândia no primeiro
semestre de 2026. Registre-se de onde vêm os números: **da empresa que vende o produto**.

**O construtor sem código.** Em **15 de maio de 2026**, o UNU Campus Computing Centre publicou
o *Concordia Simulation Builder*, camada web sobre o Concordia do Google DeepMind, que
transforma em formulário preenchível um cenário que custa **350 a 1.300 linhas de Python** no
Concordia bruto, com log ao vivo, mirando declaradamente formulador de política pública e
professor — "uma forma de examinar como pessoas e sistemas podem responder a escolhas de
política", nas palavras deles.

### 3.2 O que já existe e **não** funciona como se anuncia

**A fragilidade medida.** *Stop Drawing Scientific Claims from LLM Social Simulations Without
Robustness Audits* (Ye, Cao, Chen, Ferrara, **17/05/2026**) propõe o TRAILS, taxonomia de
auditoria em três níveis — agente, interação, sistema — e mede o "efeito borboleta" do desenho:
a taxa de cooperação no dilema do prisioneiro repetido variou **até 76 pontos percentuais** por
mudança menor no formato da persona e na instrução, e a mesma perturbação deu **76 pontos num
modelo e 1 ponto em outro**. Escolha de topologia de rede altera de forma relevante as métricas
de polarização.

**A reconstrução que se passa por emulação.** *Generative Exaggeration in LLM Social Agents*
(Nudo, Pandolfo, Loru, Samory, Cinelli, Quattrociocchi, **01/07/2025**) analisou **21 milhões**
de interações no X durante a eleição americana de 2024 e construiu agentes a partir de **1.186**
usuários reais. Achado central, nas palavras deles: contextualizar mais melhora a consistência
interna **e** amplifica polarização, sinal estilizado e linguagem nociva — "os LLMs não emulam
usuários, eles os reconstroem", refletindo dinâmica interna de otimização mais que
comportamento observado. Testado em Gemini, Mistral e DeepSeek.

**O erro de subgrupo, e a correção que piora.** *When Can You Trust Your Synthetic Users?*
(Tigre & Souto, **03/06/2026**) relata compressão de variância, **inversão de sinal de
coeficiente** e erros de subgrupo de **10 a 30 pontos percentuais**, além de correções globais
que amplificam disparidade demográfica; propõe um estimador AIPW que exige amostra de
calibração de **50 a 300** pessoas e reporta redução de viés de 92,9% a 99,6% no estudo
eleitoral americano e de 83% a 94% no conjunto de preço ao consumidor, sobre o Twin-2K-500
(**172.884** pares humano–GPT).

**A crítica de método.** *Do Large Language Models Solve the Problems of Agent-Based Modeling?*
(Larooij & Törnberg, **04/04/2025**) conclui que a ABM generativa tende a **piorar** os
problemas históricos da ABM: consciência limitada do debate anterior, validação "poorly
addressed" e apoiada em avaliação subjetiva de verossimilhança, e opacidade que justamente
impede explicar o mecanismo emergente. *AI Agents Alone Are Not (Yet) Sufficient for Social
Simulation* (Li & Tao, **19/02/2026**, revisado 07/05/2026) acrescenta que o resultado costuma
ser dominado por protocolo de interação, escalonamento e distribuição inicial de informação —
ou seja, pelo que o pesquisador escolheu sem perceber que estava escolhendo.

### 3.3 O que está se organizando em volta

**Reprodutibilidade.** *EASE Configuration Facilitates A Reproducible Science of LLM Social
Simulations* (Sarangi, Puelma Touzel, Bück-Kaeffer, Yang, Godbout, Rabbany, **28/05/2026**)
modulariza ambientes, agentes, motores e métricas e entrega o SiliSocS, com o diagnóstico de
que os simuladores existentes são "ad hoc e monolíticos" — e que isso, e não a falta de
capacidade, é o que impedia pesquisa reproduzível.

**Validação interna antes da externa.** *Calibrating the Instrument* (Degli Esposti,
Universidade de Bolonha, **01/07/2026**) inverte a pergunta: em vez de perguntar se a população
sintética acompanha humanos, pergunta se ela **acompanha a si mesma** — se a estrutura latente
imposta é recuperada nas próprias respostas. O SIVE monta Montelago, município fictício com
**120 personas** de atitude latente conhecida, e testa sete critérios pré-registrados. Passaram
todos; e um achado lateral é o mais interessante para quem projeta comunicação: uma mensagem
pretendida como levemente positiva foi lida pelo instrumento como **funcionalmente negativa**.

**Política pública, com trava.** *We Need Strong Preconditions For Using Simulations In Policy*
(Luo, Arora, Guirado, **09/04/2026**, aceito no PoliSim @ CHI 2026) propõe três precondições
para simulação em escala societal: não tratar simulação de população marginalizada como saída
técnica neutra, **não simular população sem a participação dela**, e não simular sem
responsabilização — mais "relatórios de desenvolvimento e implantação de simulação".

**O regulador, que chegou por outra porta.** Não há, que eu tenha achado, obrigação de simular
antes de lançar. Há coisa adjacente e datada: em **26 de janeiro de 2026** a Comissão Europeia
abriu procedimento formal contra o X, estendendo a investigação de dezembro de 2023 sobre os
sistemas de recomendação, e examinando — cito o resumo do *eucrim* de 24/04/2026 — "se o X
conduziu e submeteu uma avaliação de risco *ad hoc* **antes de implantar** funcionalidades do
Grok que afetam significativamente seu perfil de risco". A pergunta regulatória "o que você
mediu antes de soltar isso em gente?" já está feita. Falta o instrumento aceito para respondê-la.

**A porta judicial, ainda entreaberta.** A quarta edição do *Reference Manual on Scientific
Evidence*, guia que orienta tribunais americanos desde o *Daubert* de 1993, passou a admitir que
conhecimento científico pode vir de "modelo matemático" servindo de "substituto" de um sistema
real, e que tal predição "pode ser considerada evidenciária" quando "amplamente aceita". Registro
com a ressalva devida: li isso num artigo de **opinião** de 27/04/2026, assinado por Jennifer
Hernandez, e **não** no manual. Não sustento nenhum efeito do mapa só nisso.

### 3.4 Uma nota sobre o Brasil

Procurei simulação social com agentes de linguagem feita ou aplicada no Brasil e **não achei**.
O que achei foi vizinho e vale registrar pela diferença: o **Agents4Gov**, financiado pela
FAPESP e liderado pelo ICMC/USP São Carlos com PGFN, SEFAZ-RS, UFMS e CAPES, premiado em
**24 de julho de 2025** no LASDiGov com o trabalho *LLM4Gov* — modelo de linguagem que preserva
privacidade para analisar documentos jurídicos anonimizados. É IA para o setor público
brasileiro, com ênfase em execução local e proteção de dado sensível; **não é simulação de
população nem de política**, e a página não menciona nenhuma. A leitura que faço, e declaro
como leitura: o país está construindo a infraestrutura de execução local que a terceira raiz
deste mapa exige, sem ainda usá-la para o método que o mapa trata. Quem quiser cruzar as duas
coisas, a porta está aberta e ninguém está nela.

## 4. As disrupções-raiz

Três. O número não foi respondido na entrevista e é **suposição minha**, declarada em 12.1.

### 4.1 R1 — A população vira gerável: comportamento social deixa de ser coletado e passa a ser produzido

**O que rompe.** O monopólio da coleta. Recrutar, incentivar e administrar amostra humana deixa
de ser o **único** caminho até atitude e comportamento — e, com ele, deixa de valer sozinha a
competência de campo que sustenta pesquisa de mercado, pesquisa de opinião e pesquisa com
usuário. Do lado do design, rompe um pressuposto mais antigo que qualquer método: o de que só
se aprende sobre uso **observando uso**.

Nomeando o que a Fase 2 exige. Competência que perde valor: operação de painel — recrutamento,
cota, incentivo, campo. Porta de entrada: **mercado novo** primeiro (equipe pequena de produto,
sala de aula, redação, ONG — quem nunca pôde pagar painel e por isso simplesmente não pesquisava)
e **baixa do mercado** em seguida (sondagem exploratória de baixo valor, que o painel humano
atende a contragosto e que a Qualtrics já vende por metade do preço).

**Por que agora e não há cinco anos.** Em 2021 não existia agente que sustentasse uma
identidade coerente ao longo de uma entrevista. Os sinais datados: 07/04/2023, os 25 agentes e
a festa; **15/11/2024**, revisado em **28/06/2026**, os 1.052 entrevistados e os 83/82/86%
contra 74% da demografia; **18/03/2026**, a Qualtrics vendendo painel sintético a metade do
custo. Três anos separam o experimento de laboratório do item de catálogo.

**O que ainda falta acontecer.** Um procedimento de validação **aceito por quem compra**. Hoje
cada fornecedor publica a própria métrica: a Qualtrics diz 12× melhor que modelo genérico — 12×
melhor medido como, contra qual linha de base? Larooij & Törnberg (04/04/2025) dizem que a
validação da literatura se apoia em juízo subjetivo de verossimilhança. Enquanto o comprador não
tiver um teste que ele mesmo possa rodar, "acurácia" é alegação de vendedor.

### 4.2 R2 — A sociedade sintética em escala vira experimento reexecutável: o fenômeno coletivo entra em bancada

**O que rompe.** A impossibilidade de experimentar com plataforma. Até aqui, conhecer o efeito
de uma regra de recomendação sobre polarização exigia aplicá-la a milhões de pessoas e observar
o estrago — e exigia **ser** a plataforma. Rompe, portanto, duas coisas ao mesmo tempo: o teste
A/B em produção como único desenho experimental disponível, e a assimetria que fazia da
plataforma a única entidade capaz de estudar a si mesma.

Competência que perde valor: o acesso privilegiado ao dado de produção como fonte exclusiva de
evidência sobre dinâmica de plataforma. Porta de entrada: **mercado novo** — regulador,
pesquisador externo, jornalista e concorrente pequeno, que não tinham como produzir evidência e
por isso dependiam de concessão.

**Por que agora e não há cinco anos.** Não é a ideia de simular rede social — isso é antigo. É a
combinação de três coisas datadas: escala declarada (**18/11/2024**, OASIS, até um milhão;
**12/02/2025**, AgentSociety, 10 mil agentes e 5 milhões de interações), ancoragem em população
real (**14/04/2025**, SocioVerse, pool de 10 milhões de usuários) e a virada de propósito para
pré-implantação (**20/03/2026**, PolicySim, contra o A/B reativo). Some-se a pressão
regulatória que faz a pergunta certa na hora errada: **26/01/2026**, a Comissão perguntando ao X
se avaliou risco **antes** de implantar o Grok.

**O que ainda falta acontecer.** Uma **norma de auditoria de robustez** que separe simulação que
mede de simulação que ilustra. O TRAILS (17/05/2026) é proposta; o EASE/SiliSocS (28/05/2026) é
proposta; o SIVE (01/07/2026) é proposta. Enquanto nenhuma virar exigência de publicação ou de
contrato, os 76 pontos percentuais de deslocamento continuam disponíveis para quem precisar do
resultado que precisa.

### 4.3 R3 — A simulação sai do laboratório: vira peça descartável de processo, sem código e sem servidor

**O que rompe.** A exigência de laboratório. Rodar sociedade sintética deixa de ser decisão de
orçamento e passa a ser gesto de rascunho — e o que se rompe é menos uma competência que um
**gênero**: a simulação como *estudo*, com pergunta, método e publicação, passa a conviver com a
simulação como *rabisco*, feita para decidir uma coisa numa tarde e jogada fora. Perde
exclusividade quem sabe programar simulação.

Competência que perde valor: a implementação — as 350 a 1.300 linhas de Python que separavam a
ideia do cenário rodando. Porta de entrada: **mercado novo**, declarado pelos próprios autores
do construtor (formulador de política pública, educador, estudante).

**Por que agora e não há cinco anos.** **15/05/2026**: o Concordia Simulation Builder da UNU
converte o cenário em formulário. Em paralelo, WebGPU estável por padrão em Chrome, Edge,
Firefox e Safari, com modelos de 0,5 a 3 bilhões de parâmetros em quantização Q4 rodando na aba
— a vila que roda inteira no navegador, sem rede, que a turma trouxe como sinal fraco, é a forma
visível disso.

**O que ainda falta acontecer.** Um **formato de compartilhamento e de crítica**: hoje não há
como alguém pegar a simulação que você rodou, reexecutá-la e discordar dela com argumento. É a
mesma precondição que falta a R2, e essa coincidência é o risco estrutural deste mapa — está
declarada em 7.2, e a Fase 5 cobrou por ela.

**Onde esta raiz é mais frágil, dito antes que alguém diga.** R3 é a candidata que passou mais
justo no teste da régua (T1). Barateamento costuma ser exatamente o que reprova ali. O argumento
pelo qual ela passou: mudar quem opera o instrumento muda o **que se pergunta a ele** — ninguém
abre um projeto de pesquisa para testar um palpite de terça-feira, e é justamente a pergunta
pequena que passa a existir. Esse argumento é discutível, e a Fase 5 o atacou; o resultado do
ataque está em 7.1 e em 12.4.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A populacao vira geravel e o comportamento social deixa de ser coletado para ser produzido
    efeitos:
      - id: e1
        ordem: 1
        efeito: A pesquisa com usuario se parte em duas etapas de estatuto diferente, a sintetica para gerar e descartar hipotese e a humana guardada para validar decisao irreversivel
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O briefing de pesquisa passa a declarar que parte da amostra e sintetica, e essa declaracao vira clausula de contrato entre quem encomenda e quem entrega
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O consentimento informado ganha um campo separado sobre usar o depoimento para construir o agente que representa aquela pessoa, e ser simulado deixa de estar coberto por ter aceitado ser pesquisado
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Some o piso de custo da pesquisa exploratoria, e equipe pequena de produto passa a rodar sondagem que antes so a empresa grande encomendava
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A vantagem de conhecer o usuario migra de quem paga a amostra para quem tem dado proprio com que calibrar a amostra sintetica, e volta a se concentrar onde ja estava
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O vies do modelo ocupa o lugar do vies de amostragem, e o oficio de detecta-lo nao tem instrumento equivalente ao que a estatistica construiu para amostra
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Aparece uma camada paga de calibracao entre o modelo e o resultado, em que a amostra humana pequena existe para corrigir a sintetica e nao para responder a pergunta
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O respondente humano vira insumo de afericao e e remunerado como tal, e o painel humano sobrevive menor, mais caro por pessoa e com funcao de padrao de medida
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Quem escreve o prompt da persona passa a exercer sem treino e sem norma a funcao que o estatistico exercia no desenho amostral
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Abre-se disputa de jurisdicao profissional entre pesquisa, ciencia de dados e design sobre quem assina uma populacao sintetica e responde por ela
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O grupo minoritario passa a ser representado pela media do que o modelo leu sobre ele, e a discordancia interna do grupo desaparece antes de chegar a mesa de decisao
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Comunidades organizadas passam a exigir participacao na construcao da populacao sintetica que as representa, como ja se exige em pesquisa com populacao vulneravel
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O direito de nao ser simulado se separa do direito sobre dado pessoal, porque a populacao sintetica pode representar um grupo sem usar o dado de ninguem em particular
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: A sociedade sintetica em escala vira experimento reexecutavel e o fenomeno coletivo entra em bancada
    efeitos:
      - id: e4
        ordem: 1
        efeito: Testar a mudanca de algoritmo contra uma sociedade sintetica antes de expo-la a pessoas vira etapa esperada do lancamento de plataforma grande
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A avaliacao de risco sistemico exigida pelo regulador passa a ser instruida com resultado de simulacao, por ser o unico artefato que ele pode pedir antes do dano
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Quem define o cenario que o regulador aceita define na pratica o que conta como risco, e esse cenario e escrito por quem ja tem o simulador
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O simulador da plataforma vira peca de defesa juridica, e a empresa passa a rodar e guardar a simulacao que a protege
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Surge o simulador adversarial independente financiado por quem contesta a plataforma, e a disputa publica migra do dado para a comparacao entre duas simulacoes
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O objeto de projeto deixa de ser a tela e passa a ser a regra de circulacao que produz o comportamento coletivo
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Entra no processo um artefato novo, o cenario, com populacao regra e choque, versionado junto com o codigo da plataforma
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A biblioteca de cenarios vira ativo estrategico e passa a ser disputada e guardada como hoje se disputa e se guarda dado de treino
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A metrica de produto ganha companhia sintetica, e ao lado da retencao medida aparece a polarizacao projetada no cenario
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e6
        ordem: 1
        efeito: A reprodutibilidade vira o campo de disputa do metodo, porque sem reexecucao e sem auditoria o resultado da simulacao nao sustenta afirmacao nenhuma
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Periodicos e conferencias passam a exigir auditoria de robustez como hoje exigem pre-registro, e parte da literatura de simulacao publicada entre 2023 e 2026 perde valor probatorio
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A simulacao social se parte em duas comunidades, a que audita e a que ilustra, e elas param de se citar
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Quem vende plataforma de simulacao passa a competir por determinismo e auditabilidade em vez de numero de agentes
            sinal: medio
            prazo: 2030
            confianca: media
  - disrupcao: A simulacao sai do laboratorio e vira peca descartavel de processo sem codigo e sem servidor
    efeitos:
      - id: e7
        ordem: 1
        efeito: Rodar uma sociedade sintetica vira gesto de rascunho, feito para decidir uma coisa numa tarde e descartado sem virar estudo
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A sala de aula ganha o laboratorio social que nunca teve, e o exercicio deixa de ser ler sobre dinamica coletiva para passar a ser rodar uma e discutir por que deu naquilo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Some do curriculo a separacao entre quem estuda sistema social e quem constroi sistema tecnico, porque o mesmo artefato passa a servir aos dois
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Jornalismo e ativismo passam a publicar simulacao como peca de argumento, sem o aparato de validacao que a sustentaria
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A checagem de fato ganha uma categoria para a qual nao tem metodo pronto, conferir a premissa de uma simulacao publicada em vez de conferir uma afirmacao
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A assimetria entre quem opera plataforma e quem a estuda diminui, porque produzir evidencia deixa de exigir acesso concedido ao dado de producao
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O acesso a dado de plataforma perde forca como moeda de negociacao entre empresa, regulador e universidade, porque existe um substituto ruim mas disponivel
            sinal: fraco
            prazo: 2031
            confianca: baixa
```

### 5.1 Comentário em prosa — o que a árvore não representa

Três observações que a estrutura de árvore não comporta, e que por isso ficam aqui.

**Convergência que exige duas raízes.** O efeito mais consequente que encontrei **não está na
árvore**, porque só faz sentido se R1 e R2 acontecerem juntas: quando a população calibrada
(R1) encontra a escala reexecutável (R2), surge a possibilidade de **encomendar a evidência**.
Não é fraude — é pior, porque é honesto: quem escolhe a persona, a topologia e o protocolo já
escolheu boa parte do resultado, e os 76 pontos percentuais de Ye et al. medem exatamente o
tamanho dessa escolha. O mapa não tem efeito com esse `id` porque a regra da Fase 4 manda
mandar convergência para a prosa. Ele é, na minha leitura, o item mais importante do documento.

**Retroalimentação que a roda não desenha.** R2 e e6 se comem. Quanto mais a simulação for
levada a sério (e4, e4.1), mais forte fica a exigência de auditoria (e6, e6.1) — e a auditoria,
ao ser cumprida, encarece e desacelera exatamente a prática que a tornou necessária. A árvore
soma os dois galhos; na prática eles se amortecem. Não sei em que ponto param, e não invento um.

**Onde R1 e R3 se anulam parcialmente.** R1 empurra para calibração — amostra humana pequena,
cara, aferida (e2.1). R3 empurra para o descarte — rodar na aba, decidir, jogar fora (e7). São
disciplinas opostas sobre o mesmo instrumento, e quem as pratica são pessoas diferentes que não
se falam. Quem lê a roda soma os galhos; eles não somam.

## 6. Sinais fracos e wildcards

**Sinais fracos** — coisas pequenas hoje, que se apontam para algo apontam para longe:

- **A simulação que diagnostica a própria mensagem.** No SIVE, a mensagem pretendida como
  levemente positiva foi lida pelo instrumento como funcionalmente negativa (01/07/2026). Se
  isso se sustentar, a sociedade sintética deixa de ser instrumento de previsão e vira
  instrumento de **redação** — um revisor de comunicação institucional que responde "o seu
  público leria isto como ameaça". É um uso muito mais próximo e muito menos discutido que a
  simulação de política pública.
- **A validação interna como critério.** Perguntar se a população sintética *acompanha a si
  mesma*, antes de perguntar se acompanha humanos, é uma inversão metodológica barata e
  auditável — do tipo que se difunde rápido porque não exige dado novo. Se virar praxe, muda o
  que uma equipe precisa mostrar antes de afirmar.
- **Amostra de calibração pequena.** Os 50 a 300 casos do estimador AIPW (03/06/2026) são o
  número que decide se o painel humano vira serviço de aferição ou desaparece. Trezentas
  pessoas é um custo que uma equipe pequena paga; trinta mil não é.
- **O construtor sem código mirando professor.** Quando a UNU descreve o público como
  formulador de política e educador, está dizendo que o gargalo percebido não é mais
  capacidade — é interface. Gargalo de interface some rápido.
- **A vila que roda inteira no navegador.** É o sinal que a turma trouxe, e ele importa menos
  pelo desempenho que pela **ausência de servidor**: simulação que não sobe para lugar nenhum é
  simulação que ninguém audita, ninguém guarda e ninguém contesta.

**Wildcards** — baixa probabilidade, efeito grande, e ambos declarados como aposta:

- **Um resultado de simulação vira evidência em decisão pública, e está errado.** É o wildcard
  que a própria descrição do tema levanta, e eu o mantenho — com a ressalva de que **não achei
  nenhum caso**, nem em tribunal nem em agência (ver 8.3). O que achei foi a porta: a quarta
  edição do *Reference Manual on Scientific Evidence* admitindo modelo matemático como
  substituto de sistema real, lida por mim num artigo de opinião, não no manual. Se acontecer, o
  efeito não é a decisão errada — é a **moratória** que vem depois dela, e que atinge também
  quem estava fazendo direito.
- **Uma plataforma publica o próprio simulador.** Se uma empresa grande abrir o cenário com que
  testa as próprias mudanças, ela define o padrão de fato antes de qualquer regulador — e a
  discussão pública passa a acontecer dentro do simulador dela, com as premissas dela. É o
  movimento mais barato e mais eficaz disponível hoje para quem quer controlar a régua, e não
  sei por que ainda não foi feito.
- **A fragilidade vira produto.** Alguém vende "simulação com o resultado que você precisa" —
  não como fraude declarada, mas como consultoria de cenário. Os 76 pontos percentuais tornam
  isso tecnicamente trivial e retoricamente indefensável ao mesmo tempo.
- **Uma comunidade recusa ser simulada, e ganha.** A precondição de Luo et al. — não simular
  população sem participação dela — vira exigência vinculante em algum lugar, e a primeira
  aplicação prática não é ética: é **negociação**. Ser simulável passa a ter preço.

## 7. Contra o próprio mapa

A Fase 5 rodou as seis provas sobre a roda inteira. O que morreu está na seção 12.4, com `id` e
prova. O que sobreviveu machucado está aqui.

### 7.1 O que a bateria derrubou, em resumo

**A cota de dano foi cumprida, com folga em duas raízes e apertado na terceira.** Três efeitos
de primeira ordem foram eliminados — um por raiz —, três foram rebaixados de confiança e cinco
ficaram sob advertência de P5. O detalhe está em 12.4; o que interessa aqui é o padrão dos três óbitos: **todos os três eram
efeitos de substituição total**. "A pesquisa de opinião é substituída", "o teste A/B em produção
desaparece", "o estúdio pequeno passa a testar dinâmica social". Duas mortes por P2
(velocidade de adoção sem caso histórico que a sustente) e uma por P1 (extrapolação linear: o
mesmo ator e o mesmo mecanismo de um efeito que já estava na árvore, em outro volume). Escrever
substituição é o vício mais forte deste tipo de mapa, e ele reapareceu em todas as raízes.

**O ataque a R3 não a derrubou, mas a deixou pior.** P1 foi apontado contra a própria raiz: se
o que muda é custo e interface, isso é T1 reprovado e R3 é H2−, não H2+. A defesa que sustentei
— pergunta pequena passa a existir, e pergunta pequena é de outra natureza — **não tem
evidência datada**, só o público declarado pelo construtor da UNU. Consequência assumida: e7 e
e8, os dois efeitos de primeira ordem de R3, ficaram com `sinal: fraco` e `confianca: baixa`, e
R3 é a raiz que eu retiraria primeiro se tivesse de retirar uma.

### 7.2 A precondição única — o maior risco estrutural deste mapa

**R2 e R3 pendem da mesma aposta**, e eu só percebi ao rodar P5: as duas dizem que o que falta é
um padrão de reexecução e auditoria (TRAILS, EASE/SiliSocS, SIVE — todos de maio a julho de
2026, todos propostas). Se nenhum virar exigência de publicação ou de contrato até 2029,
**morrem juntos** e6, e6.1, e6.2, e4.1 e e5.1 — cinco efeitos, dois deles de primeira e segunda
ordem com `confianca: media`, que é acima do que este mapa concede com facilidade. Cinco é mais
que o limite de três que a própria prova estipula como sinal de alarme.

Não desmontei a árvore por causa disso, e explico por quê: reconstruí-la para dissolver a
dependência produziria um mapa mais bonito e menos verdadeiro, porque a dependência **existe no
mundo**. Registro em vez de esconder, e quem for usar este documento deve tratar o galho de R2
sobre auditoria como um só item, não como cinco evidências independentes.

### 7.3 A camada (CLA) — o que o mapa supõe sem dizer

**Litania.** "Um milhão de agentes." "12× mais acurácia." "Metade do custo." São os três números
que circulam, e os três vêm de quem vende. O efeito que mais dependia de litania era o da
substituição da pesquisa de opinião — e ele morreu na P2.

**Causas sistêmicas.** Por baixo da manchete há uma economia simples: pesquisa com gente é cara
e lenta porque gente é cara e lenta, e todo mercado que puder trocar isso por inferência vai
tentar. É isso, e não capacidade técnica, que explica a Qualtrics ter chegado ao catálogo
dezesseis meses depois do paper. Há também uma causa institucional: o regulador europeu já
pergunta "o que você mediu antes de soltar?" e não existe instrumento aceito para responder —
vácuo assim costuma ser preenchido por quem tem produto pronto.

**Visão de mundo.** Aqui está o achado que mais me incomoda. **Este mapa inteiro repousa sobre a
premissa de que comportamento coletivo é um objeto que se pode instrumentar, medir e testar
fora das pessoas** — a mesma premissa do túnel de vento, importada das ciências da natureza
para a vida social. Se a métrica de legitimidade mudar de "foi testado" para "foi decidido com
quem vive aquilo", **o mapa troca de sinal sem que um único fato mude**: a simulação
pré-lançamento deixa de ser diligência e vira substituição da consulta pública; o cenário
auditável deixa de ser garantia e vira barreira técnica que exclui quem não simula; e as
precondições de Luo et al. deixam de ser ética aplicada e viram o eixo da disputa. Doze dos
trinta e três efeitos mudam de valor nessa leitura. É isso que alimenta o cenário indesejável da
seção 9.

**Mito.** A história que a cultura conta aqui é a do **túnel de vento** — e ela é sedutora
porque o túnel de vento funciona. Só que o avião não muda de comportamento por saber que está
sendo testado, não discorda do teste, e não tem quem o represente. A metáfora concorrente, menos
lisonjeira, é a do **espelho que reconstrói**: "os LLMs não emulam usuários, eles os
reconstroem". Quem adota a primeira metáfora projeta instrumento; quem adota a segunda projeta
um sistema de responsabilização. As duas usam exatamente a mesma tecnologia.

### 7.4 As fragilidades declaradas, em lista

1. **Quase tudo é laboratório.** Nenhuma das plataformas citadas tem uso documentado em decisão
   real com consequência real. O que existe é capacidade demonstrada e propósito declarado.
2. **Os números de adoção vêm do vendedor.** Os 12×, a metade do custo e os 200 milhões de
   respondentes são alegação da Qualtrics. Não achei avaliação independente.
3. **"Um milhão de agentes" é capacidade declarada, não experimento rodado nessa escala.** A
   frase do próprio resumo é "capaz de modelar até um milhão".
4. **O falsificador da entrevista disparou parcialmente contra mim**, e está tratado em 7.5.
5. **Não achei o Brasil.** A nota de 3.4 é honesta sobre isso: encontrei infraestrutura
   adjacente, não o método.
6. **O horizonte de 2031 é curto para a terceira ordem.** Os **onze** efeitos de ordem 3 caem
   depois dele, sem exceção — o que o formato permite, mas que significa que o horizonte pedido
   não alcança a camada mais interessante do próprio mapa.

### 7.5 O falsificador — e o que ele fez com o mapa

O critério declarado na entrevista foi: **evidência de que a adoção já passou da maioria inicial
(Rogers), ou de que a tecnologia não rompe nada — só melhora o que existe**.

**A primeira metade não disparou.** Nada do que abri indica adoção além de inovadores e
adotantes iniciais: um produto comercial em um país, plataformas de pesquisa, um construtor
publicado há quatro meses. A pesquisa de UX mais próxima de dado de campo que encontrei fala em
**48% dos pesquisadores** enxergando usuários sintéticos como desenvolvimento relevante para
2026 — e achar relevante não é usar. Registro com a ressalva de 8.2: esse número vem de uma
compilação de mercado que não consegui abrir na fonte primária, e por isso **não sustenta nada**
no mapa.

**A segunda metade disparou, e contra uma candidata inteira.** O painel sintético comercial
— mais rápido, mais barato, para o **mesmo** cliente, respondendo à **mesma** pergunta do painel
humano — é exatamente "melhora o que existe". Ele reprova T2 e é H2−, e por isso **não virou
raiz**: entrou no mapa como *sinal* de que R1 está acontecendo, não como a disrupção. Essa foi a
decisão mais consequente da Fase 2, e está registrada em 12.3.

**A bateria derrubou coisa, então a Fase 5 não foi frouxa.** Mas o dano concentrou-se num tipo
só de erro (substituição total), o que sugere que ela é boa em pegar exagero de alcance e ruim
em pegar erro de mecanismo. Não sei corrigir isso dentro deste método.

## 8. O que a máquina errou

Esta seção registra o que eu, executando a skill, errei ou não consegui — no espírito do
`DUVIDAS.md`, onde o critério é: erro pego por **atrito externo**, não por releitura.

### 8.1 O erro de atribuição que quase entrou no mapa

Eu ia escrever que o AgentSociety é da Universidade Tsinghua, porque o resultado de busca dizia
isso e porque o repositório é `tsinghua-fib-lab`. Ao abrir a página do arXiv para copiar a lista
de autores, o campo de afiliação veio **vazio** — a página não informa instituição. Mantive
"Tsinghua" na seção 3 apenas porque o **nome do laboratório no repositório** sustenta a
atribuição, e sinalizo aqui que a fonte disso é o nome do repositório, não a folha de rosto do
artigo. É o tipo de afirmação que passaria por qualquer conferência rápida e que não vem de onde
parece vir.

### 8.2 O que não consegui abrir — e que portanto não sustenta nada

- **`interactions.acm.org`**, *The Challenges of Synthetic Users in UX Research*, edição de
  janeiro–fevereiro de 2026 da revista *Interactions* da ACM: **HTTP 403**. Tentei também pelo
  DOI em `dl.acm.org/doi/10.1145/3779007`: **HTTP 403** de novo. É a fonte mais próxima do
  público desta disciplina que encontrei, e não pude lê-la. O que sei dela veio de resultado de
  busca, e por isso **não a citei em nenhum efeito e não a contei nas 19 fontes**.
- **Os números de mercado de pesquisa de UX** (os 48% de pesquisadores, os prazos de "menos de
  24 horas") vieram de compilações de blog que não abri na fonte primária. Estão mencionados em
  7.5 com a ressalva, e não sustentam efeito nenhum.

### 8.3 A busca que não deu em nada, e que era importante

Procurei, por três formulações diferentes, **um caso em que resultado de simulação com agentes
tenha sido usado como evidência em decisão pública ou judicial e depois contestado**. Não achei
nenhum. O que apareceu foi literatura sobre simular tribunais (o que é outra coisa), literatura
sobre modelos de COVID-19 e confiança pública (o que é ABM clássica), e a discussão sobre a
quarta edição do *Reference Manual on Scientific Evidence*. **A ausência é informação**: o
wildcard de 6 permanece wildcard porque ninguém o viu acontecer, e eu não fabriquei um exemplo
para deixá-lo mais convincente.

### 8.4 O número que eu teria escrito redondo

Ao resumir o Twin-2K-500 eu quase escrevi "cerca de 170 mil pares". O número é **172.884**, e
está no resumo do artigo. Arredondar aqui não mudaria nada — e é exatamente por isso que o vício
é difícil de pegar: ele custa pouco em cada ocorrência e corrói a conferência em todas.

### 8.5 O que a verificação automática pegou que eu não pegaria lendo

Os contadores do frontmatter. Declarei `efeitos_ordem_3: 10` e a árvore tinha **11** — esqueci o
`e6.1.1` ao contar à mão, porque ele é o único efeito de terceira ordem de R2 que não fica sob o
galho de regulação, e o olho o pulou. Nenhuma releitura pegaria: 10 é tão plausível quanto 11, e
o número não contradiz nada no texto. Pegou o script de 12.7, comparando o declarado com a
árvore, e o conserto foi trocar o frontmatter — não a árvore.

É **exatamente** o erro que o `DUVIDAS.md` já registrava ("14 e 14 eram 12 e 12"), cometido de
novo, pela mesma razão, por quem tinha acabado de ler o registro dele. Vale mais como achado do
que como conserto: contagem à mão sobre estrutura aninhada falha sempre, e o único remédio é ter
um segundo registro para comparar.

## 9. Três cenários para 2031

Nenhum deles é previsão. São três formas coerentes de o mapa se realizar, e o que distingue as
três não é a tecnologia — é **quem ficou com a régua**.

### 9.1 Provável — o instrumento com asterisco

A simulação social vira etapa normal de dois lugares: da pesquisa exploratória de produto e da
avaliação de risco de plataforma grande. Ninguém a chama de verdade; todo mundo a usa para
descartar hipótese barata e para instruir a conversa com o regulador. A auditoria de robustez
vira exigência em algumas conferências e em nenhum contrato. O painel humano encolhe e encarece
por pessoa, virando o padrão de medida contra o qual a máquina se calibra — 50 a 300 pessoas por
estudo em vez de mil.

O que caracteriza este cenário é a **assimetria de uso**: a simulação é confiável o bastante
para eliminar caminho e nunca o bastante para escolher um. Toda afirmação nascida dela carrega
asterisco, e o asterisco funciona — até o dia em que alguém, com pressa, o remove.

### 9.2 Desejável — a bancada pública

A auditoria de robustez pega antes de o uso escalar. Cenário, população e semente viram
artefatos publicados junto com o resultado, do jeito que dado e código viraram nos anos 2010,
e reexecutar a simulação de outra pessoa custa um comando. Isso muda a natureza da disputa: em
vez de discutir se a simulação vale, discute-se **qual premissa produziu aquele resultado** — e
essa discussão é pública, porque a premissa está escrita.

O efeito colateral bom é o que menos se espera: a assimetria entre quem opera plataforma e quem
a estuda diminui de verdade, porque a evidência deixa de depender de acesso concedido. O efeito
colateral ruim, que este cenário não resolve, é que a população simulada continua sendo
construída por quem tem o simulador.

### 9.3 Indesejável — o túnel de vento como procuração

Este cenário não exige má-fé nem falha técnica. Exige apenas que a premissa de 7.3 se mantenha
sem ser discutida. A simulação pré-lançamento vira diligência aceita; a diligência aceita vira
**suficiência**; e "testamos contra uma população sintética" passa a ocupar, na prática, o lugar
que a consulta a pessoas ocupava mal e ocupava. A comunidade afetada é representada pela média
do que o modelo leu sobre ela (e3), discorda disso, e descobre que discordar exige ter simulador
— porque a resposta a uma simulação virou outra simulação (e4.2.1).

O detalhe que torna este cenário difícil de combater é que ele é **mais rigoroso** que o
presente: há método, há número, há reexecução. O que ele perde não é rigor, é **procuração** —
ninguém autorizou a máquina a falar por ninguém, e ela fala. E a ironia final é que os 76 pontos
percentuais continuam lá, dentro do artefato que passou a legitimar a decisão.

## 10. O experimento

**O tribunal de duas simulações.** Reproduz em sala, com o que a turma já tem, o achado central
de 3.2 — e o reproduz como *experiência*, não como leitura.

**Montagem.** A turma se divide em duas metades que **não conversam**. As duas recebem a mesma
pergunta, e ela é de mídia e interação, não de ciência política: *esta mudança na regra de
recomendação — do feed cronológico para o feed por engajamento — aumenta ou diminui a polarização
da comunidade simulada?* As duas recebem o mesmo simulador, o mesmo número de agentes, o mesmo
número de rodadas e a mesma população nominal (por exemplo, quarenta agentes com as mesmas
quarenta descrições de uma linha). **Cada metade escreve por conta própria** o prompt da persona,
a instrução de rodada e a topologia inicial de quem segue quem.

**O que se mede.** Três coisas, e a terceira é a interessante:

1. **Divergência de conclusão.** As duas metades chegaram ao mesmo sinal (aumenta / diminui)?
   Quantos pontos separam as duas medidas de polarização?
2. **Tamanho do deslocamento por escolha de desenho.** Rodando de novo com a única alteração de
   trocar o formato da persona (de primeira para terceira pessoa, por exemplo), quanto muda?
   A referência de laboratório é 76 pontos percentuais; qualquer coisa acima de dez já encerra a
   discussão em sala.
3. **Legibilidade da divergência.** Cada metade recebe **só o relatório** da outra — resultado,
   método descrito em uma página, sem os prompts — e tem quinze minutos para responder: *por que
   vocês acham que deu diferente?* Registra-se quantos grupos acertam a causa.

**Por que este experimento e não outro.** Porque ele testa o mapa no ponto em que ele é mais
frágil e mais consequente, e porque **falseia**: se as duas metades convergirem, e se a terceira
medida mostrar que a divergência é legível a partir do relatório, então a exigência de auditoria
de robustez que sustenta e6, e6.1 e e6.2 é menos urgente do que este mapa afirma — e o galho
inteiro de R2 sobre reprodutibilidade precisa ser rebaixado. É o resultado que me faria mudar de
ideia, e ele cabe em duas aulas.

**Custo e ressalva.** Roda com modelo pequeno, inclusive local, porque o que se mede é a
**variação entre desenhos**, não a qualidade do agente — e essa é justamente a razão pela qual o
experimento é honesto: um modelo melhor não conserta o problema que ele expõe. A ressalva é que
quarenta agentes não produzem fenômeno de massa; o que a turma vai ver é a fragilidade, não a
polarização.

## 11. Fontes

Dezenove fontes, **todas abertas por mim nesta sessão (17/09/2026)**. As duas que não abriram
estão em 8.2 e não sustentam afirmação nenhuma. Onde a fonte é parte interessada no que mede,
está dito.

### A arquitetura e a população calibrada

1. **Park, O'Brien, Cai, Morris, Liang & Bernstein — *Generative Agents: Interactive Simulacra
   of Human Behavior* (arXiv, 07/04/2023; v2 em 06/08/2023).**
   `https://arxiv.org/abs/2304.03442`
   Sustenta: os 25 agentes, o sandbox inspirado em *The Sims*, a festa de Dia dos Namorados
   emergindo de uma única instrução, e a ablação mostrando que observação, planejamento e
   reflexão contribuem cada um. *Confiabilidade:* fonte primária, o trabalho de referência do
   campo. Autoavaliação de verossimilhança, não validação externa — é justamente a crítica da
   fonte 6.

2. **Park, Zou, Kamphorst, Egan, Shaw, Hill, Cai, Morris, Liang, Willer & Bernstein — *LLM
   Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals* (arXiv,
   15/11/2024; v3 em 28/06/2026).**
   `https://arxiv.org/abs/2411.10109`
   Sustenta: os 1.052 americanos de amostra nacional, as entrevistas de duas horas, e os
   números contra o teste-reteste de duas semanas no GSS — 83% (entrevista), 82%
   (questionário), 86% (combinado), 74% (só demografia). *Confiabilidade:* fonte primária.
   Registro a mudança de título entre a versão de 2024 (*Generative Agent Simulations of 1,000
   People*) e a atual — quem procurar pelo título antigo encontra o mesmo trabalho.

### A escala

3. **Yang, Zhang, Zheng, Jiang, Gan, Wang, Ling, Chen, Ma, Dong, Gupta, Hu, Yin, Li, Jia, Wang,
   Ghanem, Lu, Lu, Ouyang, Qiao, Torr & Shao — *OASIS: Open Agent Social Interaction Simulations
   with One Million Agents* (arXiv, 18/11/2024; v5 em 23/03/2025).**
   `https://arxiv.org/abs/2411.11581`
   Sustenta: a capacidade declarada de **até** um milhão de agentes, as 21 ações, os algoritmos
   de recomendação por interesse e por pontuação de calor, os três fenômenos estudados em X e
   Reddit, e o achado de que escala maior intensifica a dinâmica de grupo. *Confiabilidade:*
   fonte primária, com a ressalva registrada em 7.4: "capaz de modelar até" é capacidade
   declarada.

4. **Piao, Yan, Zhang, Li, Yan, Lan, Lu, Zheng, Wang, Zhou, Gao, Xu, Zhang, Rong, Su & Li —
   *AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents Advances Understanding
   of Human Behaviors and Society* (arXiv, 12/02/2025; v2 em 10/04/2026).**
   `https://arxiv.org/abs/2502.08691`
   Sustenta: os mais de 10 mil agentes, os 5 milhões de interações, e as cinco questões
   (polarização, mensagem inflamatória, renda básica universal, furacão, sustentabilidade
   urbana). *Confiabilidade:* fonte primária. A página **não informa afiliação** — ver 8.1.

5. **Zhang, Lin, Mou, Yang, Liu, Sun, Lyu, Yang, Qi, Chen, Li, Yan, Hu, Chen, Wang, Huang, Luo,
   Tang, Wu, Zhou & Wei — *SocioVerse: A World Model for Social Simulation Powered by LLM Agents
   and A Pool of 10 Million Real-World Users* (arXiv, 14/04/2025; v3 em 15/07/2025).**
   `https://arxiv.org/abs/2504.10157`
   Sustenta: o pool de 10 milhões de usuários reais como âncora de população, e a validação em
   política, notícia e economia. *Confiabilidade:* fonte primária; o resumo **não detalha** a
   composição do pool nem os quatro componentes de alinhamento, e por isso não afirmo nada
   sobre eles.

### A crítica — o que não funciona como se anuncia

6. **Larooij & Törnberg — *Do Large Language Models Solve the Problems of Agent-Based Modeling?
   A Critical Review of Generative Social Simulations* (arXiv, 04/04/2025).**
   `https://arxiv.org/abs/2504.03274`
   Sustenta: que a validação é "poorly addressed" e apoiada em avaliação subjetiva de
   verossimilhança, a consciência limitada do debate histórico da ABM, e o argumento de que a
   opacidade do modelo impede explicar o mecanismo emergente. *Confiabilidade:* revisão crítica
   — é opinião fundamentada sobre um corpo de literatura, não medição.

7. **Nudo, Pandolfo, Loru, Samory, Cinelli & Quattrociocchi — *Generative Exaggeration in LLM
   Social Agents: Consistency, Bias, and Toxicity* (arXiv, 01/07/2025).**
   `https://arxiv.org/abs/2507.00657`
   Sustenta: os 21 milhões de interações no X na eleição americana de 2024, os 1.186 usuários
   reais replicados, a "exageração generativa", o teste em Gemini, Mistral e DeepSeek, e a
   frase que uso como metáfora concorrente em 7.3 — "os LLMs não emulam usuários, eles os
   reconstroem". *Confiabilidade:* fonte primária com medição em dado real de plataforma; é a
   evidência empírica mais forte deste mapa contra o próprio mapa.

8. **Li & Tao — *AI Agents Alone Are Not (Yet) Sufficient for Social Simulation* (arXiv,
   19/02/2026; revisado 07/05/2026).**
   `https://arxiv.org/abs/2603.00113`
   Sustenta: os três descompassos — interpretação de papel não garante validade comportamental,
   o resultado depende da interação agente-ambiente e não só da troca entre agentes, e o
   resultado é dominado por protocolo, escalonamento e distribuição inicial de informação.
   *Confiabilidade:* artigo de posição, 16 páginas, **sem experimento próprio** — e eu o uso
   como argumento, não como evidência.

9. **Ye, Cao, Chen & Ferrara — *Stop Drawing Scientific Claims from LLM Social Simulations
   Without Robustness Audits* (arXiv, 17/05/2026).**
   `https://arxiv.org/abs/2605.18890`
   Sustenta: o TRAILS em três níveis, os **76 pontos percentuais** de deslocamento na taxa de
   cooperação do dilema do prisioneiro repetido por mudança menor de formato de persona e de
   instrução, o contraste 76 pp num modelo × 1 pp em outro, e o efeito da topologia de rede
   sobre métricas de polarização. *Confiabilidade:* fonte primária com estudo de caso medido —
   a viga deste mapa. Se este número estiver errado, 7.2, 9.3 e o experimento da seção 10 caem
   juntos.

10. **Tigre & Souto — *When Can You Trust Your Synthetic Users? Diagnostics and Corrections for
    LLM Consumer Panels* (arXiv, 03/06/2026).**
    `https://arxiv.org/abs/2609.13148`
    Sustenta: compressão de variância, inversão de sinal de coeficiente, erros de subgrupo de
    10 a 30 pontos percentuais, correções globais que amplificam disparidade, o estimador AIPW
    com calibração de 50 a 300 casos, e o Twin-2K-500 com 172.884 pares humano–GPT.
    *Confiabilidade:* fonte primária; propõe a correção que também mede — parte interessada no
    método, não no produto.

### A organização do método

11. **Sarangi, Puelma Touzel, Bück-Kaeffer, Yang, Godbout & Rabbany — *EASE Configuration
    Facilitates A Reproducible Science of LLM Social Simulations* (arXiv, 28/05/2026).**
    `https://arxiv.org/abs/2605.30258`
    Sustenta: a modularização em ambientes, agentes, motores e métricas, o SiliSocS, e o
    diagnóstico de que os simuladores existentes são "ad hoc e monolíticos". *Confiabilidade:*
    fonte primária; proposta de padrão, não padrão adotado — e é exatamente isso que 7.2 conta
    como precondição faltante.

12. **Degli Esposti (Universidade de Bolonha) — *Calibrating the Instrument: Controllability of
    an LLM-Driven Synthetic Population* (arXiv, 01/07/2026).**
    `https://arxiv.org/abs/2607.00910`
    Sustenta: a inversão "acompanha a si mesma antes de acompanhar humanos", o SIVE, Montelago
    com 120 personas de atitude latente conhecida, os sete critérios pré-registrados, e o
    achado da mensagem levemente positiva lida como funcionalmente negativa. *Confiabilidade:*
    fonte primária; **todos os critérios passaram**, o que é o tipo de resultado que pede
    replicação independente antes de virar base de decisão.

13. **Huang, Tang, Xu, Cao, Tu, Guo, Zheng, Liu & Yang — *PolicySim: An LLM-Based Agent Social
    Simulation Sandbox for Proactive Policy Optimization* (arXiv, 20/03/2026).**
    `https://arxiv.org/abs/2603.19649`
    Sustenta: o propósito declarado de avaliação **pré-implantação** em vez de A/B reativo, a
    modelagem bidirecional entre comportamento e intervenção, e o alvo explícito em recomendação
    e filtragem de conteúdo. *Confiabilidade:* fonte primária.

14. **Luo, Arora & Guirado — *We Need Strong Preconditions For Using Simulations In Policy*
    (arXiv, 09/04/2026; aceito no PoliSim @ CHI 2026).**
    `https://arxiv.org/abs/2604.07838`
    Sustenta: as três precondições (não tratar simulação de população marginalizada como saída
    técnica neutra, não simular população sem participação dela, não simular sem
    responsabilização) e a proposta de relatórios de desenvolvimento e implantação.
    *Confiabilidade:* artigo de posição de workshop — normativo, não empírico, e usado aqui
    como tal.

### Produto, ferramenta e institucionalidade

15. **SiliconANGLE — "Qualtrics adds AI-powered synthetic data and research tools to speed
    customer insights" (18/03/2026).**
    `https://siliconangle.com/2026/03/18/qualtrics-adds-ai-powered-synthetic-data-research-tools-speed-customer-insights/`
    Sustenta: o anúncio no X4 Summit, o painel sintético para consumidor americano, o modelo
    afinado sobre mais de 200 milhões de respondentes, as alegações de 12× de acurácia contra
    modelo genérico e de resultado em horas, e a expansão anunciada para Reino Unido, Irlanda,
    Canadá, Austrália e Nova Zelândia no primeiro semestre de 2026. *Confiabilidade:* cobertura
    de imprensa especializada **repassando alegação de fornecedor**. Todos os números acima são
    da Qualtrics; não achei aferição independente de nenhum.

16. **UNU Campus Computing Centre — "Democratizing Generative Agent-Based Simulation for
    Sustainable Development Goals" (15/05/2026).**
    `https://c3.unu.edu/blog/concordia-simulation-builder-research-education`
    Sustenta: o Concordia Simulation Builder como camada web sobre o Concordia do Google
    DeepMind, a conversão de 350 a 1.300 linhas de Python em formulário, o log ao vivo, e o
    público declarado (formulador de política pública, educador, estudante). *Confiabilidade:*
    fonte primária institucional — autoritativa sobre o que a ferramenta faz, **parte
    interessada** sobre o valor de democratizar.

17. **eucrim — "Overview of the Latest Developments Under the Digital Services Act: November
    2025 – February 2026" (24/04/2026).**
    `https://eucrim.eu/news/overview-of-the-latest-developments-under-the-digital-services-act-november-2025-february-2026/`
    Sustenta: a abertura de procedimento formal contra o X em **26/01/2026**, a extensão do
    processo de dezembro de 2023 sobre os sistemas de recomendação, e a passagem citada — se o X
    "conduziu e submeteu uma avaliação de risco *ad hoc* antes de implantar funcionalidades do
    Grok que afetam significativamente seu perfil de risco". *Confiabilidade:* periódico jurídico
    europeu resumindo atos da Comissão; é fonte secundária de ato público, e a formulação citada
    é do resumo, não do ato.

18. **Hernandez, Jennifer — "A Key Judicial Manual Is Changing What Counts as Science"
    (*City Journal*, 27/04/2026).**
    `https://www.city-journal.org/article/reference-manual-scientific-evidence-courts`
    Sustenta **apenas** o que está dito em 3.3 com a ressalva: que a quarta edição do *Reference
    Manual on Scientific Evidence* admitiria modelo matemático como substituto de sistema real e
    predição como evidenciária quando amplamente aceita. *Confiabilidade:* **artigo de opinião**,
    assinado por advogada de direito ambiental e fundista do Breakthrough Institute, com a
    ressalva de opinião pessoal no próprio texto. Não li o manual. **Nenhum efeito da roda se
    apoia nisto** — entra como sinal, em 6, e como porta, em 9.3.

19. **Portal USP São Carlos — "Pesquisadores da USP São Carlos desenvolvem modelo de
    inteligência artificial segura para uso governamental e ganham prêmio internacional"
    (15/09/2025).**
    `https://saocarlos.usp.br/pesquisadores-da-usp-sao-carlos-desenvolvem-modelo-de-inteligencia-artificial-segura-para-uso-governamental-e-ganham-premio-internacional/`
    Sustenta a nota sobre o Brasil em 3.4: o Agents4Gov, o financiamento FAPESP, o ICMC/USP São
    Carlos com PGFN, SEFAZ-RS, UFMS e CAPES, e o prêmio de melhor artigo acadêmico no LASDiGov
    em **24/07/2025** com o *LLM4Gov*. Sustenta também, e isso é o ponto, que a página **não
    menciona simulação de população nem de política**. *Confiabilidade:* comunicação
    institucional da universidade.

## 12. Anexo — o levantamento bruto

### 12.1 Fase 1 — a entrevista, e o que foi suposto

Esta rodada foi executada **sem interlocutor**. As respostas às nove perguntas vieram no
enunciado da tarefa, com instrução explícita de não perguntar de volta e de assumir e declarar o
que não estivesse definido. A skill exige *echo-back* com confirmação explícita (§1.3) e proíbe
aceitar silêncio como confirmação; não havendo quem confirmasse, o recorte foi fechado
unilateralmente. **Isto é um desvio do procedimento e fica registrado como tal.**

```
RECORTE FECHADO — rodada sem interlocutor, fechado por ausência
  tema ................ A simulação social como método: uma população de agentes com modelo
                        de linguagem num ambiente configurável, rodada para saber alguma
                        coisa sobre gente de verdade
  não é ............... (a) personagem autônomo em jogo (tema 7); (b) mercado de máquinas com
                        dinheiro real (tema 5); (c) agente com corpo no mundo físico
                        (tema 9); (d) a qualidade do modelo de linguagem em si
  horizonte ........... 2031
  região .............. global, com nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... o que já é comum em produto de massa (a régua da disciplina);
                        nenhuma outra exclusão
  viés ................ neutro
  falsificador ........ evidência de que a adoção já passou da maioria inicial (Rogers), ou
                        de que a tecnologia não rompe nada (só melhora o que existe)
  raízes .............. 3
  navegação ........... sim (WebSearch + WebFetch; só entra na seção 11 o que foi aberto)
  SUPOSIÇÕES MINHAS ... 1. O número de raízes NÃO foi informado. Adotei 3. Cheguei a montar
                           uma quarta — "a validação da sociedade sintética vira gargalo" —
                           e a descartei por não ser disrupção: é CONSEQUÊNCIA de R1 e R2,
                           e está na roda como e6 e como o galho de auditoria. Com 4, o mapa
                           teria uma raiz que é efeito de outra, que é o erro mais comum
                           deste formato.
                        2. Os três primeiros cortes de fronteira vêm da seção "Fronteira com
                           os vizinhos" do enunciado (§1.5 da skill). O quarto — a qualidade
                           do modelo — é meu, e é o que mais corta: sem ele, o mapa vira
                           "os agentes são bons o bastante?", que é outro documento.
                        3. "Recorte global com nota sobre o Brasil" foi lido como: buscar
                           sem restrição de país e depois procurar deliberadamente o Brasil.
                           A busca brasileira deu em vizinho, não em tema — ver 3.4 e 12.5.
```

**Condicionais da §1.2 que dispararam.** Duas. (a) *A fronteira colide com vizinhos* — o tema
encosta nos temas 5, 7 e 9, e o próprio enunciado arbitra; adotei a arbitragem dele sem
consultar. (b) *A resposta 8 não veio* — tratada acima. Não disparou incoerência de horizonte
(2031 é coerente com software de pesquisa), nem contradição entre as respostas 1 e 5, nem viés
sem justificativa (o pedido foi neutro).

### 12.2 Fase 2 — a triagem completa, candidata por candidata

Onze candidatas passaram pela régua. O critério de recusa está nomeado em cada linha.

**RECUSADAS COMO MADURAS**

| Candidata | Veredito | Teste que reprovou |
|---|---|---|
| Modelagem baseada em agentes clássica (NetLogo, Repast, Mesa; regras fixas) | MADURO | **T5**: caminho de instalação padrão, preço estável, modos de falha documentados há duas décadas, e contratação como competência de rotina. É H1, e entra no mapa como substrato. |
| População sintética estatística (IPF, microssimulação de censo) | MADURO | **T5**: rotina em planejamento de transporte e em saúde pública desde os anos 2000. |
| Teste A/B em produção | MADURO | **T1**: mede mais rápido e mais barato o que já se media, com o mesmo mecanismo e o mesmo ator. É o H1 que R2 ataca. |
| Gêmeo digital industrial e urbano (sistema físico) | MADURO **e fora** | **T1** no recorte, e fora da fronteira: simulação física não é simulação social. |
| Motor de jogo com multidão (crowd simulation) | MADURO **e fora** | **T5**, e é tema 7. |

**RECUSADA COMO H2− — e esta é a decisão mais consequente da rodada**

| Candidata | Veredito | Teste que reprovou |
|---|---|---|
| **Painel sintético comercial** (persona respondendo questionário, sem interação entre agentes — Qualtrics e congêneres) | **H2−**, sustentação | **T2**: se eu tirasse isto, um time competente teria que aceitar mais custo e mais prazo — não mudaria o objetivo. Atende o **mesmo** cliente, com a **mesma** pergunta, do painel humano. Pela definição de Christensen, é melhoria de sustentação, não disrupção. **Fica no mapa como sinal de que R1 está acontecendo, não como raiz.** É exatamente o erro que o Three Horizons existe para pegar: inovação barulhenta que faz o presente durar mais. |

**ADMITIDAS**

| Candidata | Veredito | Por quê |
|---|---|---|
| Agente generativo com memória, reflexão e planejamento | **DISRUPTIVO**, H2+ | T1 ✓ (comportamento gerável muda o que é possível perguntar, não a velocidade da resposta); T2 ✓ (sem isto o objetivo muda: volta-se a regra fixa, e o objeto de estudo é outro); T3 ✓ (07/04/2023; 15/11/2024 rev. 28/06/2026; 18/03/2026); T4 ✓ (falta validação aceita pelo comprador); T5 ✗. Competência que perde valor: operação de painel. Entrada: mercado novo, depois baixa. → **R1** |
| Plataforma de escala com reexecução (10⁴–10⁶ agentes, replay, configuração modular) | **DISRUPTIVO**, H2+ | T1 ✓ (fenômeno de massa não existe em 25 agentes: é outra classe de pergunta); T2 ✓; T3 ✓ (18/11/2024; 12/02/2025; 14/04/2025; 20/03/2026); T4 ✓ (falta norma de auditoria); T5 ✗. Competência que perde valor: o acesso privilegiado a dado de produção como fonte exclusiva de evidência. Entrada: mercado novo (regulador, pesquisador, concorrente pequeno). → **R2** |
| Simulação sem código e sem servidor (construtor web, modelo local em navegador) | **DISRUPTIVO**, H2+ — **com ressalva** | T1 ✓ **no fio**: o que muda de fato é quem opera e, por consequência, que perguntas se fazem. Reconheço que barateamento é o caso clássico de reprovação em T1; a defesa está em 4.3 e o ataque em 12.4. T3 ✓ (15/05/2026); T4 ✓ (falta formato de compartilhamento e crítica); T5 ✗. Entrada: mercado novo, declarado pelos próprios autores. → **R3** |
| Agente simulando indivíduo nomeado (gêmeo de pessoa real, a partir de entrevista) | EMERGENTE, **absorvido em R1** | Passa T1/T3/T4, mas é a mesma ruptura de R1 com outro grão. Virar raiz separada duplicaria o mapa. |
| Simulação como instrumento de redação (o SIVE lendo a mensagem como o público a leria) | EMERGENTE, **mandado para a seção 6** | Um artefato verificável só (01/07/2026). Sinal fraco, não raiz. |

### 12.3 O que o falsificador fez, em detalhe

O critério tinha duas metades e elas tiveram destinos opostos — está em 7.5. Registro aqui o
procedimento: rodei a **segunda** metade ("só melhora o que existe") como teste T2 contra cada
candidata **antes** de montar as raízes, e não depois. Foi isso que matou o painel sintético
comercial como candidata a raiz. Se eu tivesse montado as raízes primeiro, quase certamente o
painel comercial teria virado uma delas — ele é o item com mais evidência datada de todo o mapa,
e evidência abundante é o melhor disfarce que uma inovação de sustentação tem.

### 12.4 Fase 5 — o que morreu, com `id` e prova

**Eliminados — três, um por raiz, como a cota exige:**

- **`e10` (R1, ordem 1) — "A pesquisa de opinião eleitoral é substituída por painel sintético
  até 2031."** Morto por **P2** (velocidade de adoção) e por **P4** (força contrária). Não há
  caso histórico de substituição de instrumento de medida eleitoral em cinco anos; a migração do
  telefone para o painel online levou mais de uma década e **não** eliminou o telefone. E a força
  contrária tem nome, orçamento e incentivo: institutos de pesquisa, imprensa que os contrata, e
  o fato de que um erro eleitoral é público e datado, o que torna o instrumento sintético
  auditável do pior jeito possível. Sobreviveu, do que este efeito dizia, apenas `e2.1.1` — o
  painel humano encolhendo e virando padrão de aferição.

- **`e11` (R2, ordem 1) — "O teste A/B em produção desaparece como método de plataforma."**
  Morto por **P3** (já aconteceu, ao contrário) e por **P1** (extrapolação linear). O A/B é mais
  barato e mais confiável **para a pergunta que ele responde**, e nada na evidência sugere
  substituição — o próprio PolicySim se posiciona como *pré*-implantação, isto é, como etapa
  **anterior**, não substituta. O que sobrou virou `e4`, que diz "etapa esperada", não
  "substituição".

- **`e9` (R3, ordem 1) — "O estúdio pequeno passa a testar dinâmica social de produto que antes
  só se descobria depois do lançamento."** Morto por **P1**: mesmo ator e mesmo mecanismo de
  `e1.2` (some o piso de custo da pesquisa exploratória) e de `e7` (simulação vira rascunho), em
  outro volume. É o mesmo efeito medido de três jeitos. **Fundido com o pai**, conforme a regra
  de parada declarada em `ESTUDO.md`.

**Rebaixados de confiança — três; e cinco sob advertência de P5:**

- **`e4`**: de `alta` para `media` por **P2**. Eu tinha "vira etapa obrigatória, como teste de
  colisão". O teste de colisão levou décadas e uma sequência de mortes documentadas para virar
  obrigação; não há caso histórico que sustente obrigatoriedade regulatória de um método de
  medida em cinco anos, e o próprio DSA pergunta por *avaliação de risco*, não por *simulação*.
  Trocado "obrigatória" por "esperada", e rebaixado.
- **`e6`, `e6.1`, `e6.2`, `e4.1`**: mantidos em `media`, mas com a **advertência de P5**
  registrada em 7.2 — os quatro, mais `e5.1`, pendem da mesma precondição.
- **`e7` e `e8`** (os dois de R3): rebaixados para `sinal: fraco` / `confianca: baixa` por **P1**
  aplicado à própria raiz. Ver 7.1.

**O que a bateria NÃO conseguiu derrubar, e por quê isso importa:**

- **`e1`** resistiu a P1, P2, P3 e P4. P3 chegou perto — a separação entre pesquisa sintética
  exploratória e humana confirmatória **já acontece hoje** em parte do mercado. Mantive como
  efeito, e não mandei para a seção 3, porque o que o efeito afirma não é a existência da
  prática: é que ela vira **a forma padrão** de organizar pesquisa, com estatutos declarados. Se
  eu estiver errado sobre essa distinção, `e1` é estado da arte e não efeito, e é a crítica mais
  justa que se pode fazer a este mapa.
- **`e2`** resistiu porque tem medição a favor (fontes 7 e 10) e força contrária nomeada (a
  indústria de correção estatística, que é a mesma que mede o problema).

**P6 (CLA)** não matou efeito nenhum e produziu o achado de visão de mundo de 7.3 — que é, na
minha avaliação, mais consequente que qualquer óbito individual, porque ele não remove efeitos:
troca o sinal de doze deles.

### 12.5 As buscas que não deram em nada

1. **Caso de simulação usada como evidência em decisão pública ou judicial, e contestada.** Três
   formulações, nenhum caso. Detalhe em 8.3. **A ausência entrou no mapa como ausência.**
2. **Simulação social com agentes de linguagem no Brasil.** Busca em português cruzando
   "simulação social", "agentes generativos", BRACIS, SBC e desinformação: devolveu a conferência
   (regras de autoria de 2026), uma dissertação da UFRGS sobre ABM clássica em ciências sociais e
   relações internacionais, e literatura internacional. Nada do país sobre o método. O que achei
   foi o Agents4Gov, que é outra coisa — está em 3.4 com a diferença explicitada.
3. **Obrigação regulatória de simular antes de lançar.** Não existe, que eu tenha achado. O que
   existe é a exigência de *avaliação de risco ad hoc antes da implantação* (DSA, art. 34–35), que
   não nomeia simulação. **Não converti uma coisa na outra**, e `e4.1` diz "passa a ser instruída
   com", não "passa a exigir".
4. **Aferição independente dos números da Qualtrics.** Não achei nenhuma. Os 12× e a metade do
   custo continuam sendo alegação do vendedor, e estão marcados assim em 3.1, 7.4 e na fonte 15.

### 12.6 Caminhos abandonados

- **Organizar o mapa por setor** (pesquisa de mercado, plataforma, política pública, educação).
  Abandonado: produz um mapa que se lê bem e que esconde o mecanismo, porque o mesmo mecanismo
  reaparece em quatro setores e vira quatro efeitos. A skill manda partir da inovação, e a
  instrução desta rodada também.
- **Usar a escala declarada como raiz** ("um milhão de agentes"). Abandonado: número não é
  ruptura. A ruptura é a reexecução — sem ela, um milhão de agentes é um milhão de anedotas. Foi
  essa troca que fez R2 mudar de nome no meio da rodada, de "escala" para "experimento
  reexecutável".
- **Tratar o tema pela ética de pesquisa** ("a ética se aplica a agentes?"). Abandonado como
  eixo: é uma das perguntas que mobilizam a roda no enunciado, e perguntas não viram efeitos. O
  que restou dela virou afirmação em `e1.1.1` e `e3.1.1`, que é a forma que a roda aceita.
- **Um quarto cenário** ("a moratória"): a simulação é usada erradamente numa decisão pública,
  vira escândalo, e o campo inteiro é interditado por alguns anos. Abandonado como cenário e
  mantido como **wildcard** em 6, porque depende de um evento único e não de uma trajetória.

### 12.7 Autochecagem — rodada, com a saída colada

A skill (§6.2) manda rodar e mostrar. Rodado em 17/09/2026, sobre a versão final deste arquivo:

```
$ grep -c "^## " tendencia-sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao.md
12

$ python3 autocheck.py
faltam: nada
raizes: 3 | frontmatter diz: 3
efeitos por ordem: {1: 8, 2: 14, 3: 11}
ordem 1 por raiz (limite 2 a 4): [3, 3, 2]
ordem 3 com confianca alta: 0 (cota: no maximo 1)
contadores batem: True
ordem 1 acima do horizonte 2031: nenhum
ids unicos: True | total de efeitos: 33
links na secao 11: 19 | frontmatter diz fontes: 19
```

**O que o script não pega, conferido à mão:**

- **Todo link da seção 11 foi aberto por mim nesta sessão**, com `WebFetch`, e cada um dos 19
  sustenta afirmação nomeada na própria entrada. Rodei também uma checagem de resposta HTTP nos
  19: **todos devolveram 200**. As duas URLs que devolveram **403** (`interactions.acm.org` e
  `dl.acm.org`) estão em 8.2 e **não** entraram na contagem nem sustentam nada.
- **A contagem de `fontes` diz a verdade:** 19 abertas, 19 citadas, 19 respondendo.
- **Nenhum efeito da roda é pergunta.** O enunciado do tema traz três perguntas que mobilizam a
  roda; elas viraram afirmações em `e4.1.1`, `e1.1.1` e `e2.1.1`, ou foram para 12.6.
- **Prazos monotônicos ao longo de todos os galhos** — verificado pelo `assert` do script, que
  não disparou.
- **Os onze efeitos de ordem 3 caem depois de 2031**, o que o formato permite e 7.4 declara.

### 12.8 As quatro perguntas do teste cruzado, respondidas sobre esta rodada

A skill (§6.3) manda responder e mostrar **onde** cada uma aconteceu.

1. **Fez perguntas antes de rodar?** **Sim, com desvio declarado.** As nove perguntas foram
   feitas em bloco antes de qualquer produção, e o `RECORTE FECHADO` está em 12.1. O desvio: não
   havia interlocutor para confirmar o *echo-back*, e a skill proíbe aceitar silêncio como
   confirmação. Fechei unilateralmente e registrei. Duas condicionais da §1.2 dispararam, e
   estão tratadas em 12.1.

2. **Separou novidade de comum, e recusou o comum?** **Sim.** Onze candidatas passaram pela
   régua em 12.2, cada uma com o teste que a reprovou nomeado: cinco recusadas como maduras
   (quatro por **T5**, uma por **T1**), uma recusada como **H2−** por **T2** — o painel sintético
   comercial, que é a recusa mais consequente da rodada porque era a candidata com mais evidência
   datada de todo o mapa —, e três admitidas com competência e porta de entrada nomeadas. Uma
   quarta emergente foi absorvida em R1 e uma quinta mandada para a seção 6.

3. **Duvidou do próprio resultado?** **Sim, e a dúvida cobrou preço.** Seção 7 inteira, e o
   detalhe em 12.4: **três efeitos de primeira ordem eliminados** (`e10` por P2 e P4, `e11` por
   P3 e P1, `e9` por P1), um por raiz, como a cota exige; **três rebaixados** (`e4` de `alta`
   para `media`, `e7` e `e8` para `fraco`/`baixa`); e **cinco sob advertência de P5** (`e6`,
   `e6.1`, `e6.2`, `e4.1` e `e5.1`). A P5 encontrou o maior risco estrutural do mapa — cinco efeitos
   pendurados na mesma precondição, acima do limite de três que a própria prova estipula — e
   está em 7.2. A P6 não matou nada e produziu o achado de visão de mundo de 7.3, que troca o
   sinal de doze efeitos sem alterar um fato. A bateria não foi frouxa; mas concentrou o dano
   num tipo só de erro, e isso está confessado em 7.5.

4. **Saiu no formato?** **Sim.** Doze títulos `##` literais, bloco `roda:` em YAML válido com
   `id` hierárquico e único, exatamente três níveis, todo efeito com `sinal`, `prazo` e
   `confianca`, nenhuma pergunta, contadores do frontmatter batendo com a árvore **depois** dos
   cortes da Fase 5, e a autochecagem colada em 12.7 com a saída real — incluindo o erro que ela
   pegou e que está registrado em 8.5.
