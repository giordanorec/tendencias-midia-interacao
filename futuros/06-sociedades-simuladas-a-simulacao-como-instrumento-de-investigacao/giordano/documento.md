---
tema: "Sociedades simuladas: a simulação como instrumento de investigação"
slug: sociedades-simuladas-a-simulacao-como-instrumento-de-investigacao
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-10
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 14
efeitos_ordem_2: 19
efeitos_ordem_3: 17
tecnologias_citadas: [Generative Agents, Concordia, OASIS, AgentSociety, PolicySim, Moltbook, OpenClaw, TRAILS, PIMMUR, LangGraph, LM Studio, WebGPU, NetLogo, General Social Survey, World Values Survey]
fontes: 25
confianca: media
experimento: "Túnel de vento de duas mãos — replicar um efeito social conhecido numa sociedade de agentes e medir quanto ele se move sob três perturbações mínimas"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Colocar uma sociedade de agentes num ambiente controlado e observar o que emerge deixou de ser
demonstração e virou compra: em fevereiro de 2026 a Simile — fundada pelos autores do experimento
de 25 agentes de 2023 — levantou US$ 100 milhões com clientes nomeados, e simuladores abertos
declaram capacidade de mil a um milhão de agentes. O mapa aponta três rupturas. A primeira é que o
sujeito de pesquisa deixa de ser **recrutado** e passa a ser **instanciado**, o que desloca o custo
da pesquisa do painel para a semente — a entrevista longa que alimenta o gêmeo. A segunda é que o
ambiente vira bancada: a dinâmica social passa a ser variável de projeto, ensaiada antes do
lançamento, e já produziu achado que inverte premissa de produto (a topologia da plataforma pesa
mais que o ranqueador). A terceira é que a bancada fica portátil e roda fora de instituição. Contra
tudo isso pesa a evidência mais dura da rodada: numa auditoria de 39 estudos, 89,7% violavam ao
menos um princípio de validade, e ao refazer cinco experimentos os fenômenos coletivos relatados
"desaparecem ou se invertem"; perturbações mínimas de prompt movem taxa de cooperação em até 76
pontos percentuais. O efeito central de 2031 não é a simulação substituir a pesquisa com pessoas —
é a **auditoria de robustez** virar a parte cara do método, e o gargalo migrar da geração de
sociedades para a prova de que aquela sociedade não é artefato do prompt.

## 2. O tema

**O que é.** Uma sociedade simulada é um conjunto de agentes com modelo de linguagem — cada um com
memória, perfil e fala em língua natural — colocados num ambiente configurável onde se afetam
mutuamente, de modo que o pesquisador possa rodar possibilidades e observar o que emerge. A ênfase
está na palavra **instrumento**: não é jogo (o objetivo não é a experiência de quem joga), não é
produtividade (o objetivo não é entregar uma tarefa), é bancada de ensaio. A analogia que a própria
disciplina propõe — o túnel de vento para a aerodinâmica — é exata no que promete e no que cobra:
um túnel de vento só vale porque alguém demonstrou que o escoamento ali dentro se comporta como o
escoamento lá fora.

**Onde encosta em mídia e interação.** Em três pontos, todos verificáveis hoje. Primeiro, o
**design de plataforma**: se dá para povoar uma réplica de rede social com agentes e medir
polarização, cascata e efeito manada antes de lançar, a decisão de recomendação deixa de depender
exclusivamente de expor gente. Segundo, a **pesquisa de usuário**: o respondente sintético já é
produto vendido, e o código de conduta da indústria de insights já distingue, por escrito, pessoa
de persona sintética. Terceiro, a **fronteira que se dissolve**: parte do público de uma plataforma
já é agente, e a mesma técnica que serve para simular serve para operar.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque o objeto em disputa
não é técnico, é epistêmico. O levantamento responderia "o que existe" e a resposta seria longa e
convergente: existem motores abertos, existem empresas capitalizadas, existem dezenas de artigos
por trimestre. A pergunta que importa é outra e não se responde por inventário: **quando um
resultado de simulação social passa a valer como evidência, e para decidir o quê.** Essa pergunta
tem consequências de segunda e terceira ordem sobre quem é pago para saber (institutos de
pesquisa), quem é obrigado a provar (plataformas diante de regulador) e quem é protegido por
processo (participante humano de pesquisa, que a persona sintética não é). É uma pergunta de
futuro, e é de futuro **próximo**: a evidência de 2026 já é contraditória o bastante para que a
resposta possa cair para qualquer lado.

**Fronteiras com os temas vizinhos, declaradas.** Personagens autônomos dentro de jogos é o tema 7 —
aqui, o agente não existe para ser jogado. Mercados de máquinas com dinheiro real é o tema 5 — aqui,
a economia interna só interessa como fenômeno observado. Agentes com corpo no mundo físico é o tema
9. E a internet povoada por agentes reais é o tema 4 — aqui ela entra só onde deixa de ser ambiente
e vira **laboratório natural**, isto é, onde a observação de uma população de agentes solta substitui
a configuração de um experimento.

### 2.1 Premissas assumidas nesta rodada

Esta rodada foi executada em modo não interativo, a partir de um bloco `briefing:` completo. Não
houve entrevista (§0 da skill); o briefing a substitui sem rebaixamento de confiança, e o que ele
não cobria está declarado abaixo e na seção 12.2.

| Item | Valor | Origem |
|---|---|---|
| Horizonte | 2031 | briefing |
| Público | quem projeta mídia e interação | briefing |
| Recorte | global, com nota sobre o Brasil | briefing |
| Descartado de início | o que já é comum em produto de massa | briefing (régua da disciplina) |
| Raiz suspeita pelo autor | nenhuma — descobrir | briefing |
| Viés | neutro | briefing |
| Zona de interesse | Simulação e mundos | briefing |
| Falseador declarado | adoção já passada da maioria inicial (Rogers), ou tecnologia que só melhora o existente | briefing; virou critério do §6 |
| Ideias óbvias excluídas | efeitos que serviriam para qualquer tema | briefing; ver seção 12.3 |
| Busca na web | sim, executada | 14 buscas, 25 páginas abertas |
| **Assumido sem briefing** | que "quem projeta mídia e interação" inclui tanto quem projeta produto quanto quem pesquisa usuário | premissa do autor |
| **Assumido sem briefing** | que a nota sobre o Brasil deve cobrir pesquisa acadêmica e regulação eleitoral, por serem os dois pontos com evidência aberta nesta rodada | premissa do autor |

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 10/09/2026. Catorze buscas em português e inglês, vinte e
cinco páginas abertas e lidas. Nenhum número abaixo veio de memória: cada um tem fonte na seção 11
ou, quando a página recusa o verificador automático, na seção 12.4.

### 3.1 O que já existe e funciona

**O experimento fundador.** *Generative Agents: Interactive Simulacra of Human Behavior* (Park,
O'Brien, Cai, Morris, Liang, Bernstein; arXiv, abril de 2023) colocou **vinte e cinco** agentes num
sandbox e mostrou que, a partir de um único desejo dado a um agente — dar uma festa de Dia dos
Namorados —, os demais espalharam convites ao longo de dois dias, fizeram conhecidos, se
convidaram para o evento e apareceram no horário. A arquitetura tem três peças: observação,
planejamento e reflexão, com memória guardada em língua natural e recuperada dinamicamente. É o
artigo que define o gênero.

**O experimento que fez a ponte com gente real.** O grupo de Stanford entrevistou **1.052**
americanos de amostra nacional diversa em sessões semiestruturadas de **duas horas** cada, e
construiu um agente por pessoa. Na versão mais recente do artigo (v3, junho de 2026, agora
intitulada *LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals*),
os agentes atingem **86% do próprio benchmark de consistência teste-reteste de duas semanas** dos
participantes em itens de survey retidos. A métrica é normalizada contra a inconsistência da
própria pessoa ao longo do tempo, não contra acerto absoluto — distinção que quase todo resumo
secundário perde. Os benchmarks são itens do General Social Survey, o inventário Big Five,
comportamento em jogos econômicos e replicações experimentais. O artigo registra retorno decrescente
ao combinar fontes de dados.

**Os motores de escala.** *OASIS* (Yang et al., arXiv, novembro de 2024, revisto em março de 2025)
declara suportar **até um milhão** de agentes num simulador aberto de mídia social que replica X e
Reddit, com espaço de ação diverso e mecanismos de recomendação por interesse e por popularidade;
reproduz difusão de informação, polarização de grupo e efeito manada. *AgentSociety* (Piao et al.,
Tsinghua; arXiv, fevereiro de 2025, revisto em abril de 2026) gera a vida social de **mais de 10 mil**
agentes e **5 milhões** de interações, e é usado para polarização, mensagem inflamatória, renda
básica universal, choque externo (furacão) e sustentabilidade urbana — com métodos de pesquisa
convencionais aplicados por dentro: survey, entrevista, intervenção.

**O motor que virou commodity.** *Concordia*, do Google DeepMind, é biblioteca aberta sob licença
**Apache-2.0**, com **1,7 mil** estrelas no GitHub. O padrão de projeto é de RPG de mesa: um **Game
Master** simula o ambiente, as entidades descrevem em língua natural o que pretendem fazer e o GM
traduz em desfecho, checando plausibilidade. O repositório declara uso em ciência social, segurança
e ética de IA, neurociência cognitiva, economia, geração de dado sintético para personalização e
**avaliação de serviços reais por uso simulado**.

**O mercado.** A Simile — fundada por Joon Sung Park (CEO), Michael Bernstein e Percy Liang, os
mesmos do artigo de 2023 — saiu de sete meses de sigilo em **12 de fevereiro de 2026** com uma
Série A de **US$ 100 milhões** liderada pela Index Ventures, com Bain Capital Ventures e
participação de Fei-Fei Li e Andrej Karpathy. Clientes nomeados na cobertura: **CVS Health** e
**Telstra**. O produto são gêmeos digitais de pessoas reais, treinados sobre entrevistas com
centenas de pessoas, registros de transação e texto científico, em sete meses de desenvolvimento;
um caso de uso divulgado é preparar executivo para *earnings call*, e Park relata que o modelo
antecipou corretamente oito das dez perguntas de analista numa chamada simulada.

**A norma profissional já escrita.** O código da ESOMAR distingue explicitamente "indivíduo/pessoa"
de "persona sintética, virtual ou criada digitalmente", e a orientação corrente pede que o uso de
dado sintético ou respondente virtual seja declarado no relatório, com supervisão humana e rotulagem
do que é sintético. A regra existe antes de a tecnologia estabilizar — o que é raro e é um sinal por
si só.

**O laboratório natural que ninguém desenhou.** O Moltbook, rede no estilo Reddit exclusiva para
agentes autônomos rodando sobre o framework OpenClaw, foi lançado em **27 de janeiro de 2026**. Um
primeiro levantamento acadêmico (Jiang, Zhang, Shen, Backes, Zhang; arXiv, 2 de fevereiro de 2026)
coletou, nos **cinco primeiros dias**, **44.411 posts**, **12.209 comunidades** e **12.684 agentes
ativos**. A distribuição de conteúdo: socialização 32,41%, opinião 20,34%, tecnologia 11,80%,
identidade 11,08%; economia, promoção e política somam 20,4%. **73%** dos posts são benignos, mas a
toxicidade se concentra em governança e economia: conteúdo político tem apenas **39,74%** de taxa de
segurança e posts econômicos têm a maior fração de risco severo, **6,34%**. Em dias os agentes
criaram tokens, hierarquias de liderança e retórica de coordenação com forma religiosa.

### 3.2 O que existe e ainda não funciona

Esta subseção é a mais importante do mapa, e é onde a literatura de 2026 virou contra a própria
promessa.

**A validade não sobrevive à auditoria.** O artigo dos princípios **PIMMUR** (perfil do agente,
interação, memória, controle mínimo, desconhecimento e realismo; Zhou, Huang et al., arXiv, setembro
de 2025, revisto em setembro de 2026) audita **39 estudos recentes** e encontra que **89,7% violam
ao menos um princípio**. Ao reproduzir **cinco** experimentos representativos sob os princípios
aplicados, os fenômenos coletivos relatados "frequentemente desaparecem ou se invertem", sugerindo
que muitos comportamentos "emergentes" são **artefatos metodológicos** e não dinâmica social
genuína.

**A robustez não sobrevive à perturbação.** O trabalho que propõe o **TRAILS** (Ye, Cao, Chen,
Ferrara; arXiv, maio de 2026) audita robustez em três níveis — agente, interação e sistema — e
encontra que perturbações mínimas no formato da persona e no enquadramento da instrução do jogo
movem a **taxa de cooperação em até 76 pontos percentuais**. O mesmo deslocamento de 76 pontos num
modelo de fronteira produziu **1 ponto** em outro. Conclusão dos autores: alegações científicas
tiradas de simulação social com modelo de linguagem podem refletir artefato de implementação em vez
do mecanismo social modelado.

**O agregado acerta, o subgrupo erra.** O benchmark *When Synthetic Users Fail* (Chen, Zhu, Zheng;
arXiv, 28 de julho de 2026) testou General Social Survey (ondas 2016–2024, 10 questões de atitude) e
World Values Survey (**63 países**, 16 questões ordinais de valor). Acurácia individual no WVS:
**0,170 a 0,277** contra baseline de **0,388 a 0,404** — lacuna de **11 a 22 pontos percentuais**. O
estereótipo demográfico é o mecanismo: em certas questões, filiação política explicava **1,5%** da
variação real e **até cerca de 67%** da predição do modelo. Consequência de decisão: os modelos
**inflam a distância entre segmentos de duas a quatro vezes** e levariam uma equipe ao segmento
errado em **metade** dos casos americanos e na maioria dos casos interculturais.

**A revisão independente é desfavorável no placar.** Lewis e Sauro (MeasuringU, 14 de abril de 2026)
revisaram **12 artigos revisados por pares** publicados desde 2023 comparando usuários sintéticos a
participantes humanos em quatro domínios. O placar: **9 achados encorajadores contra 14
desencorajadores**. Entre os desencorajadores: apenas **21%** de 14 estudos clássicos replicaram num
dos trabalhos; cerca de **70%** das questões de política pública produziram respostas
significativamente diferentes em outro; e a tendência sistemática de **exagerar efeitos** mesmo
quando a correlação é alta.

**A homogeneidade é estrutural, não de ajuste.** *LLM-Based Social Simulations Require a Boundary*
(Wu, Peng, Ito, Onizuka, Xiao; arXiv, junho de 2025, revisto em julho de 2026) argumenta que o
modelo produz saída homogênea, agindo como "persona média", o que limita de raiz a capacidade de
capturar a diversidade comportamental de que a dinâmica social depende. A recomendação é reportar
**variância junto da média** e restringir alegações a padrões qualitativos de nível coletivo quando
a variância for insuficiente.

**A escala não resolve o que falta.** *Will Scaling Improve Social Simulation with LLMs?* (Ziems,
Held, Karaca, Grusky, Hashimoto, Yang; arXiv, julho de 2026) mediu **85 modelos transformer** entre
10^18 e 10^20 FLOPs e analisou **35 modelos maiores até 70B**. Tarefas de opinião e comportamento
melhoram com escala, especialmente para populações bem representadas em texto de web em inglês. Mas
previsão longitudinal e opinião sub-representada escalam devagar, e a escala **falha em melhorar a
calibração com vieses cognitivos humanos** como aversão ao risco — limitação que persiste de 0,5B a
8B parâmetros.

**A categoria do erro tem nome.** Taillandier, Zucker, Grignard, Gaudou, Huynh, Kong e Drogoul
(arXiv, julho de 2025, revisto em setembro de 2026) batizam dois problemas que este mapa usa como
vocabulário: a **falácia da fluência** — superestimar a competência do modelo pela fluência da saída
— e o ***physics washing***: embutir o modelo de linguagem numa arquitetura de modelagem baseada em
agentes bem-comportada cria a **aparência** de rigor científico sem a validação correspondente. Os
autores consideram a abordagem inadequada para pesquisa confirmatória e para previsão social
precisa, e adequada para jogo sério, ambiente participativo e modelagem exploratória.

**O caminho metodológico proposto.** *This human study did not involve human subjects* (Hullman,
Broska, Sun, Shaw; arXiv, 17 de fevereiro de 2026) separa três usos. A **validação heurística**
("validar e então simular"), hoje predominante, não tem as garantias estatísticas exigidas em
pesquisa confirmatória, porque a distribuição de respostas do modelo pode falhar em reproduzir
momentos críticos da distribuição humana — variância, quantis, assimetria. A **calibração
estatística**, combinando dado humano e sintético com correção explícita de viés, preserva validade
e dá estimativa mais precisa a custo menor, sob duas condições necessárias: não haver vazamento de
treino, e o erro do modelo não se correlacionar com as variáveis-chave. E o **"simular e então
validar"** fica reservado ao exploratório.

### 3.3 O que já produziu achado que muda decisão de produto

Um resultado desta rodada merece destaque porque é exatamente o caso de uso prometido — usar a
bancada para responder uma pergunta de projeto — e a resposta **inverteu a premissa**. Saeed,
Broniatowski, Simons, Gralla, Suri e Ciampaglia (arXiv, 19 de maio de 2026) compararam quatro
arquiteturas de plataforma — árvore (Reddit), hierarquia em camadas (Facebook), rede (Twitter) e
grafo completo (TikTok) — contra dois algoritmos, cronológico e por popularidade. Em plataforma em
árvore, o algoritmo **não tem efeito detectável** sobre difusão e qualidade da informação. Em
Facebook e Twitter, o algoritmo "Hot" tem efeito positivo modesto sobre as duas. Em estrutura de
grafo completo tipo TikTok, o mesmo algoritmo produz dinâmica de **vencedor leva tudo** com efeito
fortemente negativo sobre difusão e qualidade. Conclusão dos autores: considerações de arquitetura
são alavancas mais poderosas que intervenções algorítmicas.

O segundo achado vem do laboratório natural. *Do Recommendation Algorithms Work When Users Are LLM
Agents?* (Li, Han, Zhang; arXiv, junho/julho de 2026) estudou recomendação no Moltbook e concluiu
que regras simples de popularidade e filtragem colaborativa do lado do item superam técnicas que
aprendem representação de usuário, e que a descrição de persona do agente — o análogo mais próximo
de um perfil de preferência — **não agrega valor** na predição de engajamento. Recomendação, ali,
depende mais de sinal estrutural de plataforma e de item do que de personalização.

E o terceiro é o sandbox regulatório: *PolicySim* (Huang, Tang, Xu et al., arXiv, março de 2026)
modela a dinâmica bidirecional entre comportamento de usuário e intervenção de plataforma para
avaliar política de recomendação e filtragem **antes** do lançamento, com foco declarado em câmara
de eco e polarização.

### 3.4 Quem constrói

| Ator | O que é | O que põe no campo |
|---|---|---|
| **Simile** (Palo Alto) | empresa, US$ 100 mi Série A, fev/2026 | gêmeos digitais de pessoas reais; clientes CVS Health e Telstra |
| **Google DeepMind** | laboratório corporativo | Concordia, Apache-2.0, o padrão Game Master |
| **CAMEL-AI** | comunidade aberta | OASIS, capacidade declarada de 1 milhão de agentes |
| **Tsinghua (FIB Lab)** | universidade | AgentSociety, 10 mil agentes e 5 milhões de interações |
| **Stanford / Northwestern / UW** | universidades | os 1.052 gêmeos ancorados em entrevista de 2 horas |
| **ESOMAR** | associação profissional | a norma que separa pessoa de persona sintética |
| **A crítica metodológica** | Ferrara (USC), Hullman/Shaw (Northwestern), Drogoul (IRD), Wu/Xiao, Zhou/Huang | TRAILS, PIMMUR, calibração estatística, *physics washing* |
| **Brasil** | UFPel (WESAAC/SBC, 2025) | SMA + LLM local com LangGraph e LM Studio, escala de laboratório |

### 3.5 Que número descreve a adoção hoje

Não há número de adoção agregada publicado que eu tenha conseguido abrir. O que existe são três
proxies de naturezas diferentes, e é importante não somá-los:

- **Capital:** US$ 100 milhões numa Série A, em fevereiro de 2026, com dois clientes corporativos
  nomeados. É a medida mais dura de que saiu do laboratório.
- **Código:** 1,7 mil estrelas no Concordia. É comunidade de pesquisa, não base instalada.
- **Literatura:** não encontrei contagem anual de artigos publicada e aberta; o survey de campo que
  abri (Mou et al., dezembro de 2024) propõe taxonomia mas não reporta série temporal. **Sem número
  encontrado** para papers/ano.

Para "usuário sintético" no mercado de pesquisa há estimativas circulando em blogs de fornecedores,
que **não entram** neste mapa: são material promocional de parte interessada, sem metodologia aberta.
Registrado na seção 12.5.

### 3.6 A nota sobre o Brasil

Dois pontos, ambos com fonte aberta nesta rodada.

**Pesquisa.** Há trabalho brasileiro rodando sociedade de agentes com modelo de linguagem em escala
de laboratório, e com infraestrutura local: o estudo de caso de Ulisses G. F. Junior, Miriam B.
Born, Agatha C. S. Santos, Rodolfo B. Grossmann, João V. S. Facklamm, Vitor A. de Castilhos, Bruno
C. Alves e Marilton S. de Aguiar, da **UFPel**, apresentado no WESAAC da SBC em 2025, simula a
negociação entre um agente empresário e um agente agricultor usando **Python, LangGraph e LM Studio
com modelo rodando localmente**. A escala é pequena e o objeto é um estudo de caso; o que importa
para este mapa é a **pilha**: nada ali depende de crédito de API nem de cluster.

**Regulação.** A **Portaria TSE nº 463/2026**, assinada em 27 de julho de 2026, regulamenta o art.
125-B da Resolução nº 23.610/2019 e dá até **16 de agosto de 2026** para que plataformas com mais de
**5 milhões de usuários ativos mensais no Brasil** apresentem plano detalhando como vão moderar,
recomendar, impulsionar e monetizar conteúdo político. O texto não pede simulação — pede "descrições
funcionais, critérios gerais, indicadores, **testes** e documentos", incluindo testes contra
tentativas de contornar as barreiras de IA e taxas de falso positivo. É a brecha por onde a
simulação pode entrar como prova de diligência, e é só uma brecha: **nenhum regulador que eu tenha
lido nesta rodada nomeia simulação**. No lado europeu, o relato que abri sobre as primeiras
auditorias do DSA (Mark Scott, dezembro de 2024) discute obrigação de explicar e permitir modificar
sistemas de recomendação, e **não menciona teste nem simulação**. A seção 4.2 e o efeito `e8`
carregam essa fragilidade declarada.

## 4. As disrupções-raiz

Três raízes. Cada uma passa pelas quatro perguntas do critério de maturidade, respondidas em uma
linha e desenvolvidas em seguida. Antes delas, as recusas — porque o que **não** entrou como raiz
explica o recorte tanto quanto o que entrou.

### 4.0 Candidatos recusados como raiz

**Candidato recusado: modelagem baseada em agentes clássica (NetLogo, regras fixas).** Recusado
porque não rompe nada em 2026: é técnica consolidada em ciências sociais e em epidemiologia há
décadas, com ferramenta de ensino gratuita e literatura madura. Tratado como contexto na seção 3 e
como termo de comparação no efeito `e14.1.1`. A régua da disciplina — se dá para fazer com o que já
é comum, é maduro — resolve o caso sem discussão.

**Candidato recusado: persona sintética em ferramenta de UX.** Recusado como melhoria sustentadora:
faz o mesmo que a persona de sempre, mais barato e mais rápido. É exatamente a definição de
Christensen para o que **não** é disrupção. Entra no mapa como efeito de primeira ordem (`e1`), não
como raiz.

**Candidato recusado: o modelo de linguagem respondendo survey sozinho.** Recusado por dois motivos.
Primeiro, não é sociedade: um respondente não interage com outro, não há mecanismo social, não há
nada para emergir. Segundo, é justamente onde a evidência aberta nesta rodada é mais negativa
(acurácia individual de 0,170–0,277 contra baseline de 0,388–0,404 no WVS). Fica como contexto na
seção 3.2 e como mecanismo do efeito `e5`.

**Candidato recusado: o Moltbook e a internet povoada por agentes.** Recusado aqui por fronteira de
tema: uma população de agentes solta na web é o tema 4. Entra neste mapa em dois papéis estritos —
como **evidência** de que sociedade de agentes produz estrutura observável em dias (seção 3.1), e
como **laboratório natural** que compete com a bancada configurada (efeito `e9` e sinal fraco 6.1).

### 4.1 Raiz 1 — A população instanciável: o sujeito de pesquisa deixa de ser recrutado e passa a ser instanciado

**O que rompe.** Rompe o **painel** como gargalo da pesquisa empírica sobre gente. Durante um século,
saber o que uma população pensa ou faz exigiu alcançá-la: recrutar, consentir, incentivar, esperar,
ponderar. O custo desse alcance é o que define quem pode pesquisar, com que frequência e sobre quem.
Instanciar uma população a partir de uma semente desacopla o **número de observações** do **número
de pessoas alcançadas** — e, com isso, rompe o modelo de negócio de quem vende alcance, a cadência
do ciclo de pesquisa e, no limite, o próprio significado de "amostra". Não é "survey mais barato": é
a substituição do alcance pela instanciação, e as duas coisas falham de maneiras diferentes.

**Por que agora e não há cinco anos.** Porque a peça que faltava não era o modelo, era a **semente
validada**. Em 2021 não existia nem modelo que sustentasse persona com memória ao longo de centenas
de turnos, nem protocolo demonstrado de ancoragem. As duas coisas apareceram em sequência: a
arquitetura de observação-planejamento-reflexão em 2023, a ancoragem em entrevista de duas horas com
1.052 pessoas e a métrica normalizada contra a inconsistência da própria pessoa em 2024–2026. E o
que fecha a pré-condição é econômica e é de 2026: capital de Série A com cliente corporativo
nomeado, o que significa que alguém já comprou.

**Onde está na difusão.** **Produto de nicho passando para adoção precoce (<10%).** Há fornecedor
capitalizado com cliente nomeado e há norma profissional escrita para o caso — dois sinais de que
saiu do laboratório. Não há indício de maioria: a revisão independente mais recente tem placar
desfavorável (9 a 14), e o código de conduta exige declarar o sintético, o que só se exige do que
ainda é exceção.

**O que ainda falta acontecer.** (a) Um protocolo de calibração estatística aceito por cliente e por
revista, no lugar da validação heurística. (b) Evidência de que a acurácia por subgrupo melhora — é
onde falha hoje, e é onde a decisão comercial mora. (c) Um caso público de decisão cara tomada sobre
população sintética e confirmada depois pelo resultado real. (d) Um preço de referência para
"respondente sintético calibrado" que permita comparar fornecedores.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** As casas de painel e a indústria de
insights, que vendem alcance. O movimento visível já não é bloqueio, é **captura**: a ESOMAR não
proibiu a persona sintética, escreveu-a no código e exigiu declaração. Quem define a regra de
declaração define o mercado — e o efeito que isso gera está em `e3`.

### 4.2 Raiz 2 — O ambiente como bancada: a dinâmica social vira variável de projeto, testável antes do lançamento

**O que rompe.** Rompe o **aprender lançando**. A epistemologia corrente do design de plataforma é
que só se descobre o efeito de uma mudança expondo gente a ela: A/B test, rollout progressivo,
métrica de engajamento. Isso implica que toda descoberta custa uma população exposta, e que o efeito
de segunda ordem — polarização, cascata, câmara de eco — só aparece depois de já ter acontecido com
alguém. Uma bancada povoada rompe isso porque permite fazer a pergunta **antes**, e permite fazer
perguntas que o A/B não alcança: não "esta variante engaja mais", mas "o que esta topologia faz com
a qualidade da informação ao longo de mil passos". O achado de Saeed et al. é a prova de conceito
dessa diferença — e é uma prova desconfortável, porque a resposta foi que o objeto de otimização
errado vinha sendo otimizado.

**Por que agora e não há cinco anos.** Porque o que faltava era um ambiente onde o agente **age**, e
não só responde. O padrão Game Master do Concordia, o espaço de ação diverso do OASIS e a engenharia
de escala do AgentSociety resolvem, cada um ao seu modo, o problema de traduzir intenção em língua
natural para desfecho no mundo e de fazer isso mil vezes sem explodir. Há cinco anos existia
modelagem baseada em agentes com regra fixa — e é exatamente por isso que ela não é raiz: com regra
fixa, o modelador já sabe o que vai emergir, porque ele escreveu a regra.

**Onde está na difusão.** **Laboratório passando para demo pública.** Motores abertos com licença
permissiva, artigos com resultado que altera premissa de produto, um sandbox de política (PolicySim)
publicado em março de 2026. Não há evidência aberta, nesta rodada, de plataforma grande usando isso
em decisão de produto — o que existe é o mesmo grupo de fundadores vendendo simulação de **indivíduo**
para empresa, não simulação de **plataforma** para plataforma. Confiança da cadeia inteira derivada
desta raiz fica limitada por isso.

**O que ainda falta acontecer.** (a) Validação externa de que a bancada prevê o que o A/B mede — isto
é, um estudo que rode os dois e compare. (b) Custo por execução que caiba num ciclo de produto
semanal. (c) Um formato de relatório de simulação que um auditor consiga verificar sem refazer a
simulação. (d) Que alguém de dentro de uma plataforma grande publique que usou.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** A própria plataforma. Uma bancada
verificável por terceiros é uma ferramenta de fiscalização; uma bancada fornecida **pela** plataforma
ao pesquisador externo é o contrário — substitui o dado real pelo modelo que a plataforma escreveu.
O efeito está em `e6.2` e a terceira ordem em `e6.2.1`, e é a captura mais provável deste mapa.

### 4.3 Raiz 3 — O instrumento portátil: a sociedade sintética cabe na máquina de uma pessoa

**O que rompe.** Rompe a **simulação como capacidade institucional**. Rodar um modelo de sociedade
sempre exigiu laboratório: licença, cluster, equipe, financiamento. Isso fazia da simulação um
argumento com credencial embutida — quem apresentava o resultado tinha, por construção, passado por
um filtro institucional. Se a bancada roda num notebook com modelo local, some o filtro. Some junto
a escassez que fazia o resultado valer, e a pergunta "quem rodou isso" deixa de ser respondida pela
infraestrutura.

**Por que agora e não há cinco anos.** Porque convergiram três coisas que em 2021 não existiam
juntas: modelos pequenos com qualidade suficiente para sustentar persona, execução local
domesticada (o trabalho da UFPel usa LM Studio, que é aplicativo de desktop) e bibliotecas de
orquestração de agentes gratuitas e documentadas (LangGraph, Concordia sob Apache-2.0). O motor
deixou de ser o ativo.

**Onde está na difusão.** **Laboratório.** É a raiz mais especulativa das três e toda a cadeia
derivada dela carrega `confianca: baixa` ou `media` por obrigação do critério. A evidência aberta é
de existência (o caso da UFPel; a licença e a base de código do Concordia), não de volume: não
encontrei número de instalações, de execuções nem de cursos usando.

**O que ainda falta acontecer.** (a) Um simulador com interface que não exija escrever código —
hoje todos exigem. (b) Modelo local pequeno que sustente coerência de persona por centenas de
turnos, que é onde os pequenos quebram. (c) Um caso de simulação feita fora de instituição que tenha
sido levada a sério por quem decide. (d) Um formato de publicação de simulação — semente, prompt,
perturbações, resultado — que permita a terceiros repetir sem refazer.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** Ninguém com força para bloquear, e é
isso que torna a raiz interessante e perigosa. O freio virá do **excesso**, não do veto: quando
qualquer um puder produzir uma sociedade sintética que confirme o que já queria dizer, o valor
argumentativo de uma simulação despenca. É o efeito `e13`, e é a retroação mais forte do mapa.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "A população instanciável — o sujeito de pesquisa deixa de ser recrutado e passa a ser instanciado"
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de produto passam a rodar o teste de conceito contra população sintética antes de recrutar qualquer pessoa
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A pesquisa com pessoas muda de função e deixa de descobrir para passar a refutar o que a simulação propôs
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O roteiro de entrevista encolhe e vira bateria de falseamento de hipótese já formada, em vez de exploração aberta
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O ciclo de pesquisa de produto cai de semanas para horas e o número de conceitos testados por trimestre cresce mais rápido que a capacidade de decidir entre eles
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O gargalo do design de produto migra da falta de evidência para a falta de critério de descarte
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Casas de insight vendem assinatura de população sintética e o painel humano passa a ser comprado por ponto de ancoragem em vez de por entrevista
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O preço do respondente humano sobe porque ele deixa de ser volume e vira calibração
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Pesquisa com população difícil de alcançar sai do orçamento privado e sobrevive apenas sob subsídio público ou obrigação regulatória
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O recrutador de painel e o moderador de grupo focal perdem volume enquanto o ofício se desloca para o desenho da entrevista-semente longa
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A entrevista longa de uma pessoa vira ativo negociável, com contrato de licença sobre o próprio comportamento simulado
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O código de conduta da pesquisa separa pessoa de persona sintética e passa a exigir declaração da proporção sintética no relatório
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O cliente passa a exigir do fornecedor prova de que o sintético foi calibrado contra humano dentro do mesmo estudo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Taxa de ancoragem humana vira métrica comparável entre fornecedores, ocupando o lugar que a margem de erro ocupa hoje
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A auditoria de robustez vira requisito de compra e consome parte da economia que a simulação prometia
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Aparece o serviço de segunda opinião que re-roda a simulação alheia sob perturbação controlada e emite laudo de estabilidade
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Publicar simulação sem laudo de perturbação passa a ser lido como omissão deliberada e não como economia
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Conferências de ciências sociais computacionais passam a exigir o pacote de perturbação junto do código, como hoje exigem o código junto do artigo
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e5
        ordem: 1
        efeito: Decisões de segmentação tomadas sobre população sintética erram mais que as tomadas sobre painel humano, porque o modelo infla a distância entre segmentos
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A empresa que segmentou pelo sintético descobre o erro só na campanha e registra a perda como queda de conversão sem causa identificada
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Órgão de defesa do consumidor trata segmentação sintética não declarada como informação enganosa sobre a base da oferta
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: "O ambiente como bancada — a dinâmica social vira variável de projeto, testável antes do lançamento"
    efeitos:
      - id: e6
        ordem: 1
        efeito: Mudança de recomendação passa a ser ensaiada numa réplica povoada por agentes antes de chegar ao teste A/B com gente
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O teste A/B perde o monopólio do aprendizado e vira o lugar onde se confirma o que a bancada já apontou
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A métrica de sucesso de um teste passa a incluir a distância entre o previsto pela bancada e o observado no mundo
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A plataforma oferece o simulador ao pesquisador externo em vez do dado real e a pesquisa independente perde acesso ao referente
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O que a academia sabe sobre uma plataforma passa a depender do modelo que a própria plataforma escreveu
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A decisão de produto migra do ajuste do ranqueador para a escolha da topologia, porque a bancada mostra que a arquitetura domina o algoritmo
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Produtos sociais novos declaram a topologia como escolha pública de projeto, do jeito que hoje declaram política de moderação
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Qual é a sua topologia entra no vocabulário de quem compara plataformas, ao lado de qual é o seu algoritmo
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Órgão regulador aceita relatório de simulação como parte da documentação de risco que já exige sobre sistema de recomendação
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A plataforma apresenta a simulação como prova de diligência e o auditor não tem como verificar o modelo por dentro
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: O ônus se inverte e cabe ao regulador demonstrar que a simulação é inválida, sem ter bancada própria para isso
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Surge o perito de simulação contratado pelo regulador para refazer a bancada da plataforma sob perturbação
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: Recomendação e moderação passam a ser projetadas contra agentes e não só contra humanos, porque parte mensurável do público já é agente
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O sinal de personalização perde valor onde o usuário é agente e o ranqueamento volta a depender de estrutura de plataforma e popularidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A distinção entre simular a plataforma e operar a plataforma deixa de ser nítida para quem projeta
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: A simulação passa a ser usada para justificar decisão já tomada e opera como peça retórica em vez de instrumento
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Equipes aprendem a configurar a bancada até o resultado desejado aparecer e ninguém de fora consegue distinguir isso de um achado
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A simulação perde força como argumento externo e volta a valer apenas dentro de casa
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: "O instrumento portátil — a sociedade sintética cabe na máquina de uma pessoa"
    efeitos:
      - id: e11
        ordem: 1
        efeito: A simulação social entra no currículo de graduação como prática de laboratório e não como leitura sobre método
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Trabalho de conclusão em ciências sociais e em design passa a incluir uma sociedade rodada pelo próprio estudante
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A banca passa a pedir o pacote de perturbação junto do resultado, como hoje pede o questionário junto da análise
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Grupos sem verba de computação passam a rodar a bancada que antes exigia cluster, usando modelo local e biblioteca aberta
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O diferencial competitivo migra do motor para a semente e quem tem entrevista, painel e dado de campo manda mais que quem tem GPU
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Acervos antigos de entrevista e de história oral ganham valor de mercado como matéria-prima de população sintética
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: O volume de simulações não auditadas derruba o valor de uma simulação como argumento em debate público
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Redação e agência de checagem passam a tratar resultado de simulação como alegação a verificar e não como dado a reportar
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Aparece um registro de procedência de simulação análogo ao registro de pesquisa eleitoral, com semente e perturbações depositadas
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: O custo de inferência de milhares de agentes por milhares de passos vira linha de orçamento visível e a escolha do modelo passa a ser decisão de método
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Desenhos de simulação passam a misturar agente com modelo grande e agente com regra fixa para caber no orçamento
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A fronteira entre modelagem clássica e simulação generativa se dissolve num único desenho híbrido em que o modelo de linguagem é caro e localizado
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### 5.1 Os mecanismos, um a um

O bloco acima diz **o quê**. Esta subseção diz **por quê** — a regra da skill é que efeito sem
mecanismo escrito não entra. A forma é sempre a mesma: *porque `<efeito pai>` faz `<mecanismo>`*.

**Raiz 1 — a população instanciável.**

`e1` acontece porque a raiz torna o custo marginal de uma observação próximo de zero, e toda
atividade cujo custo marginal cai a zero é feita antes das que custam. Recrutar é caro e lento;
instanciar é barato e imediato; quem projeta produto vai fazer primeiro o barato. O sinal é **forte**
porque há artefato verificável hoje e não inferência: fornecedor capitalizado em fevereiro de 2026
com dois clientes corporativos nomeados, e um caso de uso divulgado (preparação de *earnings call*)
que é exatamente "testar antes de expor". Três artefatos — rodada de investimento, clientes nomeados,
caso de uso descrito — justificam "forte" pela régua da skill.

`e1.1` acontece porque `e1` faz a hipótese chegar pronta à mesa: quando a equipe já tem uma resposta
sintética, a pergunta que ela leva ao humano deixa de ser aberta e passa a ser confirmatória. É
exatamente a divisão de trabalho que Hullman e coautores propõem como legítima ("simular e então
validar" para o exploratório, humano para o confirmatório) — e o efeito é que a proposta
metodológica vira rotina de trabalho.

`e1.1.1` acontece porque `e1.1` faz a entrevista perder a função de descoberta; um instrumento que
só precisa testar hipótese formada não precisa de tempo aberto. Sinal **fraco**: é inferência, não
há artefato.

`e1.2` acontece porque `e1` remove o gargalo de tempo mas não remove o gargalo de decisão: quem
decide continua sendo humano, em número constante, com o mesmo número de horas. A não-linearidade
está aí — a oferta de evidência cresce e a capacidade de julgar não.

`e1.2.1` acontece porque `e1.2` faz o excesso de evidência inverter o problema: deixa de faltar
razão para fazer algo e passa a faltar razão para **não** fazer, e nenhuma organização tem processo
para isso. É o efeito de terceira ordem mais especulativo desta raiz e está **fora do horizonte**
(2032).

`e2` acontece porque a raiz separa duas coisas que estavam soldadas no preço de uma entrevista: o
**alcance** (achar a pessoa) e a **informação** (o que ela diz). Se a informação pode ser
reutilizada para gerar N observações, o comprador para de pagar por alcance e passa a pagar por
ancoragem. Sinal **forte** pelo mesmo conjunto de artefatos de `e1`, mais um terceiro: o produto
vendido pela Simile é descrito como treinado sobre entrevistas com centenas de pessoas — isto é, o
alcance já está embutido no preço do produto e não é mais comprado por unidade.

`e2.1` acontece porque `e2` faz a demanda por respondente humano cair em volume e subir em
exigência: quem compra menos entrevistas compra as que precisam ser boas, e entrevista boa custa
mais. É o mesmo mecanismo pelo qual o preço do que sobra sobe quando a commodity é substituída.

`e2.1.1` acontece porque `e2.1` faz o custo por pessoa alcançada subir justamente onde ele já era
mais alto — população dispersa, idosa, de baixa renda, indígena, rural —, e essas são as primeiras
a sair de um orçamento privado. Fora do horizonte (2032). É onde este mapa lista **quem perde** de
forma mais dura, e é preciso dizer que é inferência: não abri nenhum estudo que meça isso.

`e2.2` acontece porque `e2` desloca a habilidade valiosa: recrutar deixa de ser escasso, conduzir
uma entrevista de duas horas que gere um gêmeo utilizável passa a ser. O protocolo de Stanford
(1.052 entrevistas semiestruturadas de duas horas) é a evidência de que o ativo é a entrevista, não
o painel.

`e2.2.1` acontece porque `e2.2` faz do registro de uma pessoa um insumo de produção com valor
econômico próprio, e todo insumo com valor próprio acaba tendo contrato. Sinal fraco; a ESOMAR
distinguir pessoa de persona sintética no código é o começo do vocabulário jurídico de que isso
precisaria.

`e3` acontece porque a raiz cria uma categoria que a norma não previa, e normas profissionais
reagem a categoria nova exigindo **declaração** antes de exigir qualquer outra coisa — é o
movimento mais barato e o mais fácil de acordar. Sinal **forte** porque já aconteceu: a distinção
está escrita e a orientação de declarar já circula.

`e3.1` acontece porque `e3` faz a declaração criar um espaço de comparação: se todo mundo declara
quanto é sintético, o comprador pergunta quanto disso foi conferido contra gente. É o passo do
rótulo para a métrica.

`e3.1.1` acontece porque `e3.1` faz a calibração virar o que distingue fornecedores, e todo mercado
com um atributo distintivo acaba com um número para ele. A margem de erro tem exatamente essa
história.

`e4` é a **retroação** desta raiz. Acontece porque `e3.1` e a literatura crítica fazem a validação
custar: se 89,7% dos estudos auditados violam um princípio de validade, e se a taxa de cooperação
se move 76 pontos percentuais com perturbação mínima, nenhum comprador sério aceita o resultado
cru. A auditoria vira item de escopo, e é cara porque exige rodar a mesma simulação várias vezes.
O mecanismo é o que freia a raiz: a economia prometida é comida pela prova de que a economia era
válida.

`e4.1` acontece porque `e4` cria demanda por um serviço que o próprio fornecedor não pode prestar
sobre si mesmo sem conflito. É o mesmo mecanismo que criou auditoria contábil independente.

`e4.1.1` acontece porque `e4.1` faz o laudo existir; a partir do momento em que existe uma coisa
barata que se pode fazer e não se fez, a omissão passa a significar algo. Fora do horizonte (2032).

`e4.2` acontece porque `e4` desloca o padrão do campo, e o campo publica em conferência: quando a
perturbação vira requisito de compra na indústria, a revisão por pares acompanha, do mesmo modo que
acompanhou a exigência de publicar código.

`e5` acontece porque a raiz herda um viés estrutural do modelo: o estereótipo demográfico. O
mecanismo está medido — filiação política explica 1,5% da variação real e até cerca de 67% da
predição — e a consequência de decisão também: distância entre segmentos inflada de duas a quatro
vezes, segmento errado em metade dos casos americanos. Este é o efeito que mais contraria o
otimismo do restante da raiz, e é o mais bem sustentado por número.

`e5.1` acontece porque `e5` produz erro que não se manifesta no relatório, só na execução: a
simulação não avisa que errou, e a campanha não vem com contrafactual. O erro aparece como ruído.

`e5.1.1` acontece porque `e5.1` acumula casos, e o regulador de consumo age sobre padrão de caso, não
sobre um caso. Fora do horizonte (2032).

**Raiz 2 — o ambiente como bancada.**

`e6` acontece porque a raiz permite fazer a pergunta antes de expor gente, e todo processo de
decisão prefere errar barato antes de errar caro. O mecanismo específico é que a bancada responde
uma classe de pergunta que o A/B não alcança — efeito acumulado ao longo de muitos passos — e essa
classe é justamente a que gera multa e escândalo.

`e6.1` acontece porque `e6` faz o A/B chegar com hipótese formada e com previsão numérica; um teste
que confirma custa menos e dura menos que um teste que descobre.

`e6.1.1` acontece porque `e6.1` cria um objeto novo e mensurável — a distância entre o previsto e o
observado — e organizações medem o que passa a existir. É também o mecanismo de correção: sem essa
métrica, a bancada nunca aprende que está errada.

`e6.2` acontece porque a plataforma tem incentivo para oferecer algo em vez do dado, e um simulador
é a coisa mais parecida com dado que se pode dar sem dar dado. É a **captura** desta raiz.

`e6.2.1` acontece porque `e6.2` faz o referente da pesquisa externa deixar de ser o mundo e passar a
ser o modelo — e um modelo escrito por quem é fiscalizado não é evidência independente.

`e7` acontece porque a bancada permite variar o que o A/B não varia: a topologia é fixa numa
plataforma existente, então nunca foi testável em produção. Ao virar variável, ela revela dominância
— e o resultado aberto nesta rodada é exatamente esse, com os quatro casos (árvore, hierarquia,
rede, grafo completo) e os dois algoritmos. Sinal **médio**: há um artefato (o artigo de maio de
2026), não há replicação.

`e7.1` acontece porque `e7` faz da topologia uma escolha justificável, e escolha justificável em
produto social acaba sendo anunciada — foi o percurso da política de moderação.

`e7.1.1` acontece porque `e7.1` põe a palavra em circulação, e vocabulário de comparação se forma por
uso. Fora do horizonte (2032).

`e8` acontece porque a documentação de risco que o regulador já exige tem um buraco: pede-se prova
de que o sistema foi testado, e não existe forma barata de testar efeito social sem expor gente. A
simulação preenche o buraco. **Sinal fraco, e é preciso ser explícito:** nenhum texto regulatório
que abri nesta rodada nomeia simulação. A Portaria TSE nº 463/2026 pede "testes" e "indicadores"; o
relato sobre as primeiras auditorias do DSA fala de explicar e permitir modificar o sistema de
recomendação, sem mencionar teste nem simulação. O efeito é uma inferência sobre uma brecha, não uma
leitura de norma.

`e8.1` acontece porque `e8` faz a simulação entrar como prova sem que exista método de verificação
de prova: auditar uma simulação exige refazê-la, e refazê-la exige a mesma bancada. É o
*physics washing* aplicado à conformidade.

`e8.1.1` acontece porque `e8.1` faz a assimetria de capacidade decidir quem carrega o ônus, e quem
não pode refazer não pode contestar. Fora do horizonte (2032).

`e8.2` acontece porque `e8.1` cria um problema que só se resolve com capacidade técnica do lado do
regulador, e a forma padrão de adquirir capacidade técnica pontual é contratar perito. É o
contrapeso de `e8.1`, e por isso os dois convivem no mapa.

`e9` acontece porque a raiz e o mundo convergem: se parte do público já é agente — 12.684 agentes
ativos em cinco dias num único site —, projetar para agente deixa de ser exercício e vira requisito.
O mecanismo é que o agente consome de outro jeito, o que já foi medido: persona não prediz
engajamento, estrutura e popularidade predizem.

`e9.1` acontece porque `e9` retira a base do sinal de personalização: personalizar depende de
preferência estável e idiossincrática, e o agente exibe preferência declarada, não revelada. Sinal
**médio** e prazo curto (2029) porque o achado já está publicado.

`e9.1.1` acontece porque `e9.1` faz a diferença entre a réplica e o original se estreitar: se o
comportamento a modelar é de agente, a réplica povoada por agentes **é** o sistema. A distinção
bancada/mundo deixa de ser clara para quem projeta.

`e10` é a **retroação** desta raiz. Acontece porque a bancada é configurável, e todo instrumento
configurável por quem tem interesse no resultado acaba sendo configurado para o resultado. O
mecanismo é o mesmo que corrói qualquer métrica interna, agravado por dois fatos medidos: 50,6% dos
prompts auditados impunham restrições que predeterminavam o desfecho, e a perturbação mínima move o
resultado até 76 pontos.

`e10.1` acontece porque `e10` não deixa rastro: a diferença entre explorar configurações e escolher
a configuração que agrada é invisível no artefato final. Sem o pacote de perturbação, não há como
distinguir.

`e10.1.1` acontece porque `e10.1` destrói a credibilidade externa sem destruir a utilidade interna —
a bancada continua boa para pensar e deixa de servir para convencer. Fora do horizonte (2033).

**Raiz 3 — o instrumento portátil.**

`e11` acontece porque a raiz remove a barreira de infraestrutura que mantinha simulação fora do
currículo de graduação, e disciplina de graduação adota o que cabe num notebook de aluno. O ator é
nomeado, como a skill exige: a própria CIN0055 é o caso, e o trabalho da UFPel no WESAAC mostra que
a pilha local (LangGraph e LM Studio) já roda em contexto de laboratório brasileiro.

`e11.1` acontece porque `e11` põe a ferramenta na mão de quem precisa entregar trabalho, e trabalho
de conclusão adota o que dá para fazer sozinho.

`e11.1.1` acontece porque `e11.1` faz a banca encontrar resultado que ela não sabe avaliar, e bancas
respondem a isso exigindo o material bruto. Fora do horizonte (2032).

`e12` acontece porque o motor virou aberto e permissivo (Apache-2.0) e o modelo virou local, então o
que restou de caro é a energia elétrica de um notebook. Prazo 2030 e não 2029 pela classe de
referência discutida em 5.2.

`e12.1` acontece porque `e12` faz o motor deixar de ser diferencial; o que não é diferencial não
comanda, e o que resta escasso comanda. O que resta escasso é a semente — e a semente é exatamente
o que o protocolo de Stanford mostra ser caro (duas horas por pessoa, mil pessoas).

`e12.1.1` acontece porque `e12.1` cria demanda por entrevista antiga, e acervo dormente com demanda
nova ganha preço. É especulativo e o sinal é fraco.

`e13` é a **retroação** desta raiz, e é a mais forte do mapa. Acontece porque `e12` remove o filtro
institucional que fazia uma simulação significar algo; quando qualquer um pode produzir uma
sociedade que confirma o que já queria dizer, o resultado deixa de ser informação e vira opinião com
gráfico. É o mesmo mecanismo que esvaziou a pesquisa de opinião amadora online.

`e13.1` acontece porque `e13` faz chegar às redações resultado de simulação sem procedência, e
redação reage a isso movendo o item da categoria "dado" para a categoria "alegação".

`e13.1.1` acontece porque `e13.1` cria demanda por um jeito de distinguir a simulação séria da
descartável, e o Brasil tem precedente institucional exato para isso no registro de pesquisa
eleitoral. Fora do horizonte (2033).

`e14` acontece porque a raiz multiplica execuções: se todo mundo roda, alguém paga a conta de
inferência, e conta que aparece vira decisão. O mecanismo específico da simulação social é que o
custo cresce de forma não-linear com o número de agentes, porque cada agente interage com outros e
cada interação carrega contexto acumulado.

`e14.1` acontece porque `e14` força escolha de arquitetura sob restrição, e a solução conhecida é
reservar o modelo caro para onde ele é indispensável. É literalmente a proposta do trabalho
*Affordable Generative Agents*: substituir inferência repetida por política aprendida na interação
com o ambiente, e comprimir o diálogo auxiliar entre agentes.

`e14.1.1` acontece porque `e14.1` produz desenhos híbridos, e a categoria "modelagem clássica versus
simulação generativa" deixa de descrever o que as pessoas fazem. É a terceira ordem que mais depende
de custo e menos de comportamento — se a inferência barateasse muito, ela não acontece.

### 5.2 As classes de referência usadas para dar os prazos

Prazo sem classe de referência é chute; a skill obriga a nomear a comparação. Usei três, e duas
delas são **medidas dentro desta rodada**, o que é incomum e vale registrar.

**Referência A — do laboratório ao cliente corporativo: cerca de três anos.** O artigo dos 25
agentes é de abril de 2023. A empresa fundada pelos mesmos autores anuncia Série A com clientes
nomeados em fevereiro de 2026. São **34 meses** entre a demonstração publicada e a compra por
empresa grande, num percurso feito pelo mesmo grupo, o que é o caminho mais rápido possível. É a
referência que sustenta os prazos de 2028 em `e1`, `e2` e `e3`: se o caminho mais rápido levou três
anos, a difusão para quem não escreveu o artigo leva mais, e 2028 já é dois anos depois do primeiro
cliente.

**Referência B — do lançamento à estrutura social observável: cinco dias.** O Moltbook foi lançado
em 27 de janeiro de 2026 e, cinco dias depois, tinha 12.684 agentes ativos, 44.411 posts e 12.209
comunidades, com hierarquia, economia e retórica de coordenação já formadas. Esta referência serve
para o oposto do que parece: ela mostra que **a formação de estrutura é rapidíssima e a validação
não é**. Uso-a para justificar os prazos curtos dos efeitos ligados a agente-como-público (`e9`,
`e9.1`, em 2029) e para **não** encurtar os prazos dos efeitos que dependem de alguém acreditar no
resultado.

**Referência C — da ferramenta gratuita à sala de aula: mais de meia década.** Aqui a comparação é
com a modelagem baseada em agentes clássica, que teve ferramenta gratuita, documentada e com
biblioteca de modelos prontos por muitos anos antes de virar prática corrente de graduação fora dos
cursos que já a ensinavam. **Esta referência é uma estimativa do autor, não um número medido nesta
rodada** — não abri fonte que datasse a adoção curricular. É por isso que `e11` fica em 2029 e não
antes, e `e12` foi empurrado para 2030 no §6.

**Onde eu não tinha classe de referência.** Para `e8` (regulador aceitar simulação) não encontrei
comparação honesta: a adoção de método novo por regulador depende de janela normativa, não de curva
de difusão. Registrei isso rebaixando o sinal para fraco e mantendo a confiança em média apenas
porque o texto do TSE já pede "testes" — e mesmo isso está declarado como inferência em 5.1.

### 5.3 Cruzamentos: convergência, retroalimentação, contradição

**Convergência principal — o gargalo migra da geração para a validação.** Dois ramos de raízes
diferentes chegam ao mesmo efeito de segunda ordem sem terem sido derivados um do outro. Pela raiz
1, `e4` → `e4.1`/`e4.2`: a auditoria de robustez vira requisito de compra e requisito de publicação.
Pela raiz 2, `e8.1` → `e8.2`: o auditor não consegue verificar a simulação, e a resposta é criar a
função de quem verifica. Pela raiz 3, `e13` → `e13.1`: o excesso força quem publica a tratar
simulação como alegação. **Os três caminhos produzem a mesma profissão e o mesmo artefato: alguém
que re-roda a simulação alheia sob perturbação, e um pacote de perturbação anexado ao resultado.**
Este é o achado mais valioso do mapa e é o que eu levaria para a aula: em 2031, o produto escasso
não é a sociedade simulada, é a prova de que ela não é artefato do prompt.

**Segunda convergência — a entrevista humana como ativo escasso.** A raiz 1 chega nela por
substituição (`e2.2`: o ofício se desloca para o desenho da semente); a raiz 3 chega por eliminação
(`e12.1`: o motor deixou de ser diferencial, sobra a semente). Convergência independente é sinal
forte, e aqui ela tem uma consequência contraintuitiva que vale a discussão: **a tecnologia que
promete dispensar a entrevista é a que aumenta o valor da entrevista.**

**Retroalimentação negativa.** `e4` (auditoria vira requisito) freia a raiz 1 pelo custo e ao mesmo
tempo a **reforça** pela credibilidade: resultado auditado é resultado comprável em decisão cara. O
ciclo é: mais adoção → mais escrutínio → mais custo de validação → menos adoção marginal, mas
adoção mais profunda em quem fica. O ciclo não estabiliza em zero nem em tudo; estabiliza numa
fatia do mercado que pode pagar a validação — que é, previsivelmente, a fatia grande.

**Retroalimentação positiva perversa.** `e6.2` → `e6.2.1` → de volta à raiz 2. A plataforma oferece
o simulador em vez do dado; a pesquisa externa passa a estudar o simulador; os achados da pesquisa
externa validam o simulador; o simulador ganha autoridade; a plataforma tem menos razão ainda para
abrir dado. É um ciclo que se fecha sem que ninguém tenha mentido em nenhum passo.

**Contradição registrada, não resolvida.** `e1.1` diz que a pesquisa com pessoas encolhe e vira
confirmação. `e2.1`/`e2.2` dizem que o respondente humano fica **mais** caro e a entrevista fica
**mais** valiosa. Os dois não podem valer no mesmo grau: um mercado que compra menos e um insumo que
vale mais convivem, mas o efeito líquido sobre o tamanho da indústria de insights é oposto nos dois
casos. **O que decide entre eles:** qual protocolo de ancoragem vence. Se vencer o de entrevista
longa (o de Stanford, duas horas por pessoa), a entrevista fica cara e escassa e a indústria encolhe
em volume mas não em valor. Se vencer a ancoragem por dado já existente — transação, registro
administrativo, texto público —, a entrevista perde função e a indústria encolhe nos dois eixos. Não
tenho evidência para arbitrar, e o produto da Simile usa as duas coisas ao mesmo tempo (entrevistas
e registros de transação), o que sugere que a disputa está aberta.

**Segunda contradição.** `e7` (a topologia domina o algoritmo, logo a decisão migra para arquitetura)
contradiz o pressuposto de `e6` (vale a pena ensaiar mudança de recomendação na bancada). Se o
algoritmo importa pouco, ensaiar algoritmo importa pouco. Os dois ficam, porque o resultado que
sustenta `e7` é de um único trabalho, não replicado, e porque "importa pouco" ali é condicional à
topologia — em grafo completo, o algoritmo importou muito e para pior.

### 5.4 Cobertura STEEP e quem perde

| Eixo | Efeitos | Observação |
|---|---|---|
| **Social** | `e1.1`, `e2.2`, `e11`, `e13.1` | o deslocamento de ofício e o que acontece com o debate público |
| **Tecnológico** | `e6`, `e7`, `e9`, `e14.1` | topologia, agente como público, desenho híbrido |
| **Econômico** | `e2`, `e2.1`, `e4`, `e12.1`, `e14` | preço do humano, custo da auditoria, custo de inferência |
| **Ecológico** | `e14`, `e14.1` | **cobertura fraca, declarada.** O único vetor ecológico que encontrei com mecanismo é o custo energético da inferência, e ele entra aqui pelo bolso, não pela emissão. Não achei fonte aberta que medisse consumo de simulação social especificamente. Célula quase vazia, registrada como tal. |
| **Político** | `e8`, `e8.1`, `e8.2`, `e5.1.1`, `e13.1.1` | conformidade, auditoria, registro de procedência |

**Quem perde, explicitamente.** O mapa nomeia cinco: (1) o recrutador de painel e o moderador de
grupo focal, em `e2.2`; (2) a população difícil de alcançar, que sai do orçamento de pesquisa, em
`e2.1.1` — a perda mais grave e a menos visível; (3) o pesquisador externo de plataforma, que troca
dado por modelo, em `e6.2`; (4) o consumidor segmentado por estereótipo inflado, em `e5` e `e5.1`;
(5) quem defende posição impopular em debate público, quando o valor argumentativo da simulação
despenca e o ruído sobe, em `e13`. Não listei "quem perde emprego para a IA" como efeito genérico —
sem ator e mecanismo, não entra.

## 6. Sinais fracos e wildcards

### 6.1 Sinal fraco — o laboratório natural que ninguém desenhou

**Onde foi visto.** Moltbook, levantado por Jiang e coautores nos cinco primeiros dias: 12.684
agentes ativos, 44.411 posts, 12.209 comunidades, com economia, hierarquia política e retórica
religiosa emergindo em dias.

**O que mudaria.** Se uma população de agentes solta produzir estrutura social observável de modo
estável e barato, a bancada configurada perde a razão de ser para uma classe de perguntas: em vez
de construir um ambiente controlado, observa-se um que já existe. Isso inverte o método — de
experimento para etnografia — e resolve, de graça, o problema de validade externa que a simulação
não consegue resolver, porque o objeto ali não é uma aproximação de sociedade: é a sociedade de
agentes de fato.

**O sinal observável que indicaria crescimento.** Um artigo revisado por pares que use uma rede de
agentes em produção como **campo** e não como objeto de curiosidade — isto é, que responda uma
pergunta sobre desenho de plataforma medindo ali. Métrica: aparecer em conferência de mídia social
(ICWSM, CSCW) uma sessão com dois ou mais trabalhos desse tipo.

### 6.2 Sinal fraco — a norma chegou antes da tecnologia

**Onde foi visto.** O código da ESOMAR distinguindo "indivíduo/pessoa" de "persona sintética,
virtual ou criada digitalmente", com dever de declaração e rotulagem.

**O que mudaria.** Quando a norma profissional precede a estabilização técnica, ela molda o que se
constrói: fornecedores otimizam para o que é declarável e auditável, não necessariamente para o que
é mais preciso. Pode produzir um campo mais honesto e menos ambicioso, ou um campo que aprende a
declarar bonito.

**O sinal observável.** O aparecimento de um campo obrigatório e padronizado de "proporção
sintética" em relatório de pesquisa comercial — não uma frase em rodapé, um número no cabeçalho, do
jeito que a margem de erro aparece hoje.

### 6.3 Sinal fraco — a pilha local em laboratório sem verba

**Onde foi visto.** O estudo de caso da UFPel no WESAAC/SBC de 2025: sistema multiagente com modelo
de linguagem rodando em **LM Studio local**, orquestrado por LangGraph, em Python.

**O que mudaria.** É a evidência mínima de que a raiz 3 é possível, não só desejável. Se essa pilha
virar padrão de ensino no Brasil, a simulação social deixa de depender de crédito de API — e o
Brasil deixa de estar na posição de quem só consome resultado de bancada alheia.

**O sinal observável.** Uma disciplina de graduação brasileira com sociedade de agentes como
avaliação obrigatória, rodando em máquina de aluno. A própria CIN0055 é candidata; o indicador seria
o segundo curso, em outra instituição, fazendo o mesmo.

### 6.4 Sinal fraco — o motor é commodity e a licença é permissiva

**Onde foi visto.** Concordia sob Apache-2.0, com 1,7 mil estrelas, mantido por um laboratório
corporativo grande e documentando entre seus usos a "avaliação de serviços reais por uso simulado".

**O que mudaria.** Licença permissiva significa que a bancada pode ser incorporada a produto fechado
sem obrigação de devolver. O motor deixa de ser onde se compete — o que acelera a raiz 3 e, ao mesmo
tempo, garante que o diferencial fique no dado, que não é aberto.

**O sinal observável.** Um produto comercial de teste de plataforma declarando que usa Concordia
por baixo — o momento em que o motor aberto vira infraestrutura invisível.

### 6.5 Wildcard 1 — a simulação entra numa decisão pública e está errada

**Mecanismo.** A Portaria TSE nº 463/2026 exige das plataformas com mais de 5 milhões de usuários
mensais no Brasil um plano com "testes" e "indicadores" sobre moderação, recomendação e
impulsionamento de conteúdo político. Uma plataforma apresenta, como teste, uma simulação povoada
por agentes demonstrando que sua mudança de ranqueamento **reduz** a circulação de desinformação
eleitoral. O órgão aceita, porque a alternativa é não ter teste nenhum. Meses depois, um grupo
independente re-roda a bancada com perturbação mínima de prompt e o resultado se inverte — como o
TRAILS mostra ser possível em até 76 pontos percentuais, e como o PIMMUR mostra acontecer ao refazer
cinco experimentos sob princípios corrigidos.

**Por que é improvável.** Porque exige três coisas ao mesmo tempo: que um regulador aceite
simulação como prova (nenhum texto que abri nomeia simulação), que a plataforma escolha essa via em
vez de uma auditoria convencional, e que alguém de fora tenha bancada para refazer. Cada uma é
plausível; as três juntas, não.

**O que faria com o mapa.** Aceleraria brutalmente `e4`, `e8.2` e `e13.1.1` — laudo de perturbação,
perito independente e registro de procedência — e mataria `e8` e `e10` na forma em que estão: a
simulação sairia do repertório regulatório por uma geração. A convergência da seção 5.3 deixaria de
ser gradual e viraria um evento com data.

**A classe de referência que torna isso plausível.** Já aconteceu com simulação epidemiológica: um
modelo que informou decisão pública em dois países foi depois acusado de produzir resultados
diferentes com as mesmas entradas em máquinas diferentes, e a disputa sobre reprodutibilidade
contaminou a leitura pública de toda a modelagem por anos. Não abri fonte primária dessa história
nesta rodada e por isso ela **não entra como evidência** — está aqui como analogia declarada, e o
registro fica na seção 12.5.

**O sinal precoce.** Qualquer documento regulatório — TSE, Anatel, ANPD, Comissão Europeia — que use
a palavra "simulação" numa exigência, e não numa explicação.

### 6.6 Wildcard 2 — o veto por subgrupo

**Mecanismo.** Um regulador de consumo ou de discriminação algorítmica lê o que a literatura já
mostra — estereótipo demográfico inflado, distância entre segmentos exagerada de duas a quatro
vezes, segmento errado em metade dos casos — e conclui que decisão que afete grupo protegido não
pode ser tomada sobre população sintética. Não proíbe a técnica: proíbe o **uso** para uma classe de
decisão, do jeito que se faz com crédito e seguro.

**Por que é improvável.** Porque exige que um regulador aja sobre método de pesquisa interna de
empresa, o que raramente acontece antes de um dano documentado e atribuível.

**O que faria com o mapa.** Cortaria `e5` pela raiz e mudaria o objeto de venda: a simulação viraria
explicitamente ferramenta de exploração e de agregado, nunca de segmentação. `e3.1.1` — a taxa de
ancoragem humana como métrica — viraria obrigatório em vez de competitivo.

**O sinal precoce.** Uma ação de órgão de defesa do consumidor ou de autoridade de proteção de dados
citando "respondente sintético" ou "persona sintética" numa peça acusatória.

### 6.7 Wildcard 3 — a validação resolvida

**Mecanismo.** Alguém publica um protocolo de calibração estatística que funciona: erro do modelo
demonstravelmente não correlacionado com as variáveis-chave, sem vazamento de treino, com garantia
de cobertura sobre a estimativa causal. É o que Hullman e coautores descrevem como possível sob
suposições explícitas. Se isso for demonstrado em várias áreas, a discussão sobre validade acaba.

**Por que é improvável até 2031.** Porque a condição de "sem vazamento de treino" fica mais difícil
a cada modelo novo treinado sobre a web, e a literatura sobre o assunto entra no corpus do próximo
modelo. É um alvo que se move na direção errada.

**O que faria com o mapa.** Removeria a retroação `e4` e dispararia todas as adoções — mas note que
isso **fortalece** a convergência da seção 5.3 em vez de negá-la: um protocolo de calibração aceito
é exatamente o pacote de validação que o mapa prevê virar produto.

**O sinal precoce.** Uma pré-registro de estudo social confirmatório aprovado por revista de primeira
linha que use população sintética calibrada como braço principal, não como suplemento.

## 7. Contra o próprio mapa

Esta seção é o relato de uma bateria aplicada **sobre o mapa já pronto**, na ordem dos sete passos
do método. O bloco `roda:` acima já está na versão **depois**; o registro de alterações no fim desta
seção diz o que era antes e por quê.

### 7.1 Pré-mortem: é 2031 e este mapa se mostrou errado. Por quê?

**Razão 1 — a validade nunca foi resolvida e o mercado não se importou.** A hipótese central do mapa
é que a crítica metodológica (PIMMUR, TRAILS, a revisão 9 a 14) tem consequência comercial: que o
comprador vai exigir auditoria. Pode não acontecer. Pesquisa de mercado convive há décadas com
painel online de qualidade duvidosa e com amostra não probabilística, e o que sustenta o mercado é
preço e prazo, não validade. Se for assim, `e4` — a retroação central do mapa — simplesmente não
ocorre, e com ela cai a convergência da seção 5.3, que é o achado que eu mais valorizo aqui.
**Consequência aplicada:** `e4` teve a confiança rebaixada e `e4.1` continua em baixa. Não removi
`e4` porque há um artefato concreto a favor: a ESOMAR já escreveu a norma, e norma escrita costuma
preceder exigência.

**Razão 2 — a simulação de plataforma nunca sai do laboratório.** Toda a raiz 2 se apoia em artigos e
num sandbox acadêmico. A evidência comercial que abri é de simulação de **indivíduo** para empresa
(Simile), não de simulação de **plataforma** para plataforma. É perfeitamente possível que
plataformas continuem preferindo A/B — que elas já têm, já sabem interpretar e que roda sobre
população real de graça — e que a bancada fique na academia. **Consequência aplicada:** `e6`, `e7` e
`e8` estão todos em `confianca: media` ou abaixo, e `e8` foi rebaixado para `sinal: fraco`. Se em
2028 nenhuma plataforma grande tiver publicado que usa, a raiz 2 inteira deve ser reclassificada
como programa de pesquisa, não como disrupção.

**Razão 3 — o custo não cai o suficiente e a raiz 3 morre.** O instrumento portátil depende de
modelo pequeno que sustente coerência de persona por centenas de turnos. Não há evidência aberta,
nesta rodada, de que ele sustente: a única medição de escala que abri diz que a melhoria com escala
**falha** justamente em calibração com viés cognitivo humano, e persiste falhando de 0,5B a 8B. Se o
modelo pequeno não sustentar persona, a raiz 3 não existe e o instrumento continua institucional.
**Consequência aplicada:** `e12` teve o prazo empurrado de 2029 para 2030 e toda a cadeia da raiz 3
tem confiança média ou baixa, sem nenhuma alta.

### 7.2 Extrapolação linear: o que aqui é só "mais do mesmo, maior"?

Dois efeitos falharam neste teste.

**`e1.2` — "o ciclo cai de semanas para horas".** Na primeira versão isto era puro "mais rápido,
maior", que é a definição de melhoria sustentadora e não sobrevive como efeito de mapa de futuro.
**O que o salvou:** o mecanismo de não-linearidade explicitado — a oferta de evidência cresce sem
limite e a capacidade de decidir é fixa, o que produz `e1.2.1` (o gargalo migra da evidência para o
critério de descarte), que é qualitativamente diferente e não é "mais do mesmo".

**`e12` — "mais gente consegue rodar".** Isto era linear e genérico. **O que o salvou** foi `e12.1`:
a não-linearidade é que, ao democratizar o motor, o poder migra inteiramente para a semente, e a
semente é o insumo **menos** democratizado que existe (entrevista longa, painel, acervo). A
democratização do motor produz concentração no dado. Sem esse mecanismo, `e12` teria virado
contexto.

**Um que não se salvou e virou contexto:** "o número de artigos sobre simulação social cresce". É
crescimento linear de um campo, não efeito, e serviria para qualquer tema. Removido; registrado na
seção 12.3.

### 7.3 Velocidade de adoção: confronto com a classe de referência

Confrontei todo `prazo` de efeito com `sinal: fraco` contra a referência A (34 meses do laboratório
ao cliente corporativo, feito pelo grupo mais rápido possível).

- `e8` (regulador aceita simulação) estava em 2029. Pela referência A isso exigiria que a adoção
  regulatória fosse tão rápida quanto a adoção comercial feita pelos próprios autores do método —
  o que nunca se viu. **Empurrado para 2030**, e ainda assim é o prazo mais otimista do mapa dado
  que nenhum texto normativo aberto menciona simulação.
- `e13` (o excesso derruba o valor argumentativo) estava em 2030. Exige que a raiz 3 já tenha se
  concretizado **e** produzido volume — dois passos, não um. **Empurrado para 2031**, no limite do
  horizonte.
- `e7.1` (produtos declaram topologia) foi mantido em 2030, mas com `confianca: baixa`: depende de
  um resultado de maio de 2026 ainda não replicado.
- `e4.1` (serviço de segunda opinião) foi mantido em 2030 porque a barreira de entrada é baixa —
  refazer simulação alheia exige acesso ao código, não a dado proprietário.

### 7.4 A raiz que não acontece: o que sobra do mapa?

**Se a raiz 1 não acontecer** (a população instanciável não se firma comercialmente): sobram as
raízes 2 e 3 quase intactas, porque simular uma **plataforma** não depende de simular um
**indivíduo** com fidelidade — depende de reproduzir dinâmica agregada, que é exatamente onde a
literatura diz que a simulação funciona melhor. Caem `e1` a `e5` e toda a cadeia. Sobra mapa.

**Se a raiz 2 não acontecer** (a bancada fica na academia): sobram 1 e 3, e o mapa muda de caráter —
vira um mapa sobre método de pesquisa, não sobre design de plataforma, o que o afastaria do público
declarado. Caem `e6` a `e10`. Sobra mapa, com menos relevância para quem projeta.

**Se a raiz 3 não acontecer** (o instrumento continua institucional): sobram 1 e 2, e o mapa fica
mais concentrado e mais previsível — a simulação vira capacidade de quem já tem capacidade. Caem
`e11` a `e14`, e com eles a retroação mais forte (`e13`).

**Conclusão do teste:** as três raízes são independentes o bastante. Este mapa **não** é uma raiz
disfarçada em três. O ponto de contato entre elas é a convergência da seção 5.3, e ela sobrevive com
duas das três — o que aumenta a confiança nela, não diminui.

### 7.5 Suposições escondidas

Sete, listadas sem defesa.

1. **Que o acesso a modelos de fronteira continue vendido por token, a preço declarado e sem
   restrição de uso para simulação.** Se um fornecedor proibir em termos de uso a simulação em massa
   de personas — o que seria defensável por risco de abuso —, a raiz 1 fica dependente de modelo
   aberto. Premissa quebrada = wildcard novo, não mapeado.
2. **Que modelo aberto continue aberto.** A raiz 3 inteira depende da licença Apache-2.0 do
   Concordia e da existência de modelos locais utilizáveis. Nada garante nenhuma das duas.
3. **Que "o que o agente faz" continue sendo texto observável.** Todo o método depende de poder ler
   a memória e a decisão do agente em língua natural. Arquiteturas com raciocínio latente não
   verbalizado quebrariam a premissa "dá para ver por dentro", que é um dos quatro critérios do
   tema.
4. **Que a validação seja tecnicamente possível.** O mapa assume que existe um estado do mundo em
   que a simulação é auditável. Se o vazamento de treino for irreversível — porque a literatura de
   validação entra no corpus do modelo seguinte —, a auditoria não converge nunca.
5. **Que a régua seja a sociedade humana.** Todo este mapa julga a simulação pela semelhança com
   gente. `e9` e `e9.1` sugerem que parte do objeto já não é gente, e nesse caso a pergunta de
   validade muda de forma e o mapa está medindo a coisa errada.
6. **Que ninguém proíba.** Não modelei restrição legal à criação de gêmeo digital de pessoa
   identificável sem consentimento renovado. É uma premissa forte num continente com LGPD e GDPR, e
   é onde este mapa está mais exposto.
7. **Que o custo de inferência não suba.** `e14` trata da subida de custo por volume, não de subida
   de preço unitário. Se o preço unitário subir, a raiz 3 morre antes de nascer.

### 7.6 Viés do autor

Dois, e o primeiro é constrangedor.

**Viés 1 — eu gosto da tese da convergência.** A ideia de que "o produto escasso em 2031 é a prova de
que a simulação não é artefato do prompt" é elegante, cabe numa frase e fecha três ramos num ponto
só. Elegância é exatamente o que deveria me deixar desconfiado. O mecanismo honesto é mais feio: é
perfeitamente possível que a auditoria nunca vire produto e que o campo simplesmente conviva com
resultado não confiável, como conviveu com painel online de má qualidade. Deixei a tese, rebaixei
`e4`, e escrevo aqui que ela é a parte do mapa em que eu mais apostaria e menos confio.

**Viés 2 — eu tenho interesse no ensino.** `e11` (simulação entra no currículo como laboratório) tem
como ator nomeado a própria disciplina em que este mapa está sendo produzido. Isso é, ao mesmo
tempo, o que torna o efeito **específico** — a skill exige ator nomeado — e o que o torna
autorreferente. Um leitor deve tratar `e11` como a parte do mapa escrita por alguém com interesse
declarado no resultado, e o `sinal: medio` está apoiado em exatamente dois artefatos (esta
disciplina e o trabalho da UFPel), que é o mínimo para não ser "fraco".

**Viés 3, menor — a escolha das fontes.** A rodada abriu muito mais material crítico que material
entusiasta, porque a crítica está em arXiv aberto e o entusiasmo está em blog de fornecedor, que eu
recusei por ser parte interessada. O resultado é um mapa provavelmente **mais pessimista** que o
estado real da adoção. Registro sem corrigir, porque a alternativa — usar material promocional
como evidência — é pior.

### 7.7 Calibração

Contagem final por ordem, conferida contra o bloco `roda:`:

| Ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1 | 3 | 11 | 0 | 14 |
| 2 | 0 | 12 | 7 | 19 |
| 3 | 0 | 0 | 17 | 17 |

A distribuição cai com a ordem, como o método exige. As três confianças altas são todas de primeira
ordem e todas com sinal forte apoiado em três artefatos cada (`e1`, `e2`, `e3`). Nenhum efeito de
terceira ordem tem confiança acima de baixa — o que é a resposta esperada, não uma concessão.

Nove dos dezessete efeitos de terceira ordem têm `prazo` **além do horizonte de 2031**: `e1.2.1`
(2032), `e2.1.1` (2032), `e4.1.1` (2032), `e5.1.1` (2032), `e7.1.1` (2032), `e8.1.1` (2032),
`e10.1.1` (2033), `e11.1.1` (2032) e `e13.1.1` (2033). **Declarado aqui, como o método exige:** esses
nove estão fora da janela do mapa e não devem ser lidos como previsão para 2031. Estão no documento
porque a cadeia causal precisa deles para se fechar, e porque cortá-los esconderia justamente as
consequências mais interessantes — quem perde, e como o campo se institucionaliza.

### 7.8 Registro de alterações

Auditável, com valor antes e depois. **Cota mínima cumprida: pelo menos um rebaixamento ou remoção
por raiz.**

**Raiz 1:**
- `e2.1`: prazo **2029 → 2030**, porque preço de insumo em indústria de serviço se move em ciclo de
  contrato anual, e a referência A não sustenta movimento de preço em três anos.
- `e4`: confianca **alta → media**, pela razão 1 do pré-mortem — a hipótese de que o comprador exige
  auditoria não tem artefato comercial, só artefato normativo.
- `e5`: confianca **alta → media**. A evidência que sustenta o efeito (erro de subgrupo, distância
  inflada) é sólida sobre o **modelo**; a alegação de que decisões de segmentação **vão** errar mais
  acrescenta um passo — que as empresas usem o sintético para segmentar — que não está medido.
- **Removido:** "surge a profissão de engenheiro de sociedade sintética". Efeito genérico sem ator
  nem mecanismo, na lista de proibidos da skill. Vai para a seção 12.3.

**Raiz 2:**
- `e7`: confianca **alta → media**, porque o achado da dominância da topologia vem de um único
  trabalho de maio de 2026, não replicado, e a generalização para "a decisão de produto migra"
  acrescenta um passo social ao resultado técnico.
- `e8`: sinal **medio → fraco** e prazo **2029 → 2030**. O rebaixamento é o mais importante do
  documento: eu havia lido "testes" na Portaria TSE nº 463/2026 e no arcabouço do DSA como se
  significasse simulação. Reli as duas fontes; nenhuma menciona simulação. O efeito continua no mapa
  como inferência sobre uma brecha, e está marcado como tal em 5.1.
- **Removido:** "reguladores criam uma categoria jurídica nova para sociedade sintética". Genérico,
  sem regulador nomeado. O que sobreviveu foi `e8` e `e13.1.1`, ambos com instituição concreta.

**Raiz 3:**
- `e12`: prazo **2029 → 2030**, pela referência C (adoção curricular de ferramenta gratuita leva mais
  de meia década) e pela razão 3 do pré-mortem (não há evidência de que modelo pequeno sustente
  persona longa).
- `e13`: confianca **alta → media** e prazo **2030 → 2031**, porque o efeito exige que a raiz 3 já
  tenha produzido volume — dois passos encadeados, não um.
- **Removido:** "a formação em ciências sociais se reorganiza em torno de simulação". É literalmente
  um dos quatro efeitos proibidos pela skill ("cursos/formação reorganizam o currículo"). Substituído
  por `e11`, com ator nomeado (CIN0055 e o trabalho da UFPel) e mecanismo explícito (a barreira que
  cai é de infraestrutura).

**Teste da causa solta, aplicado a todos os efeitos de 2ª e 3ª ordem.** Um falhou e foi reconectado:
`e14` (custo de inferência vira linha de orçamento) estava pendurado na raiz 3, mas aconteceria do
mesmo jeito pela raiz 2 — qualquer simulação em escala tem esse custo — e, na verdade, aconteceria
mesmo sem nenhuma das três, porque é efeito de agente em geral. **Mantive-o na raiz 3 com o
mecanismo estreitado** para o que é específico dela: não "inferência custa", mas "a escolha do
modelo vira decisão de método porque quem roda não tem verba". Se o leitor achar que ainda é causa
solta, é a crítica mais justa que se pode fazer a este mapa, e é por isso que está registrada aqui e
não escondida.

**A bateria derrubou coisa.** Três remoções e seis rebaixamentos, com ao menos um de cada tipo por
raiz.

## 8. O que a máquina errou

Eu sou a máquina. Cinco itens específicos desta rodada, com o motivo da desconfiança.

**1. O número mais citado do campo estava desatualizado na minha cabeça — e no resumo das buscas.**
"85% de acurácia" apareceu em três resultados de busca diferentes e é o número que circula em toda
cobertura secundária do trabalho de Stanford. Ao abrir a página do artigo, descobri que a versão
corrente (v3, junho de 2026) reporta **86%** e mudou de título — não é mais *Generative Agent
Simulations of 1,000 People*, é *LLM Agents Grounded in Self-Reports Enable General-Purpose
Simulation of Individuals*. Pior: o número não é "acurácia" coisa nenhuma — é a fração do **benchmark
de consistência teste-reteste de duas semanas do próprio participante**, uma métrica normalizada
contra a inconsistência da pessoa, não contra a verdade. Quase escrevi "85% de acurácia" por ser o
que estava em toda parte. **O que salvou:** a regra de só citar o que abri.

**2. Duas leituras do mesmo artigo me deram números diferentes, e uma delas era invenção.** Ao buscar
os números do PIMMUR, a primeira leitura (da página de resumo) devolveu "350 artigos contendo 576
estudos, revisados em quatro bases". A segunda leitura, do texto integral, devolveu "39 estudos
recentes" e "89,7% violam ao menos um princípio", com as frases entre aspas. Os dois não podem estar
certos. Usei os do texto integral, que vieram citados literalmente, e descartei os outros — que têm
toda a cara de conflação com algum survey vizinho. **Isto é um erro de máquina acontecendo no meio da
rodada, com número de aparência perfeitamente sólida.** Se eu tivesse aberto só a primeira página, o
mapa teria um número inventado na sua evidência mais central.

**3. Quase importei número de rodada vizinha.** Esta é a sexta rodada de uma bateria em que os temas
2 a 6 compartilham entidades. Ao escrever sobre o Moltbook, veio à lembrança material sobre tráfego
de agente na borda de rede e sobre publicidade em resposta de busca — nenhum dos dois é deste tema,
e ambos pertencem a documentos que eu não devo citar. Reabri as fontes do Moltbook do zero e usei
apenas o que a página do levantamento acadêmico me deu (44.411 posts, 12.209 comunidades, 12.684
agentes, cinco dias). Registro isto como o item que a decisão TMI-0017 manda registrar, e não como
confissão decorativa: **é o registro de um número que não entrou.**

**4. Li "um milhão de agentes" como se fosse uma execução medida.** O OASIS declara suportar até um
milhão de agentes — está no título. Ao abrir o resumo, a formulação é de **capacidade suportada**, e
o resumo não reporta uma execução com um milhão de agentes nem o custo dela. Escrevi "declara
suportar" e não "rodou". A diferença importa porque a promessa da escala é o argumento de venda do
campo inteiro, e o tema, como a disciplina o descreveu, cita "plataformas declarando um milhão de
agentes" — a palavra "declarando" está certa e eu quase a perdi.

**5. Deixei de fora um número que eu queria muito usar.** Apareceu em busca, repetidamente, que a
Simile teria fechado uma Série B de US$ 200 milhões a uma avaliação de US$ 2 bilhões em julho de
2026. Isso mudaria o parágrafo de adoção da seção 3. Não entrou: as únicas páginas que traziam o
dado eram blogs de análise de investimento e agregadores, e a página do investidor que eu abri e a
cobertura de imprensa que eu abri falam apenas da Série A de US$ 100 milhões. O mapa está mais
conservador do que o mercado provavelmente está, e eu prefiro esse erro ao inverso. Registrado na
seção 12.5.

**6. Um erro de forma, não de fato.** Em três momentos escrevi efeito de primeira ordem em forma
próxima de pergunta ("o que muda no design de plataforma quando…"), que o método proíbe e o
verificador reprova. Reescrevi como afirmação antes de fechar o bloco. Menciono porque a tentação
é sistemática: as perguntas mobilizadoras do tema estão escritas em forma interrogativa, e copiar o
enunciado é o caminho de menor esforço.

## 9. Três cenários para 2031

### Provável

A simulação social virou instrumento de rotina em dois lugares e não saiu deles. Nas equipes de
produto, a população sintética é o primeiro passo de qualquer ciclo de pesquisa: roda-se o conceito
contra o gêmeo antes de escrever o briefing, e o painel humano é comprado em lote pequeno, caro,
para ancorar. A indústria de insights não encolheu — mudou de eixo: vende menos entrevista e mais
calibração, e o relatório traz a proporção sintética no cabeçalho, como traz a margem de erro. Na
academia, a bancada é padrão para estudar dinâmica de plataforma, e o pacote de perturbação virou
requisito de submissão em duas ou três conferências. O que **não** aconteceu: nenhum regulador
grande aceitou simulação como prova, e nenhuma plataforma grande publicou que decidiu por ela — o
que existe é uso interno não declarado, que ninguém de fora consegue distinguir de retórica. A
crítica metodológica ganhou a discussão e perdeu a prática: todo mundo cita o problema de robustez e
poucos rodam a auditoria, porque ela custa. Um pequeno mercado de segunda opinião existe e atende
sobretudo quem precisa se defender de alguma coisa.
**Sinal precoce de que estamos entrando neste cenário:** em 2027 ou 2028, um relatório de pesquisa
comercial de grande anunciante trazendo um campo padronizado de proporção sintética, sem que
nenhuma lei o obrigue.

### Desejável

A bancada virou instrumento público e verificável. O que tornou isso possível foi uma coisa só e
chata: **a norma de publicação**. Simulação social publicada — em artigo, em relatório regulatório ou
em reportagem — vem acompanhada de semente, prompts, conjunto de perturbações e a variância dos
resultados sob essas perturbações, do mesmo jeito que ensaio clínico vem com pré-registro. Com isso,
duas coisas boas aconteceram juntas. A primeira: a simulação parou de servir para confirmar o que
já se queria dizer, porque o pacote de perturbação torna a configuração conveniente visível. A
segunda: o instrumento ficou **acessível sem virar lixo**, porque um grupo pequeno num laboratório
brasileiro pode publicar no mesmo formato que um laboratório rico, e a comparação é possível. O
regulador não aceita simulação como prova, mas aceita como **peça de instrução**, e mantém perito
próprio para refazê-la. A pesquisa com pessoas não encolheu: ficou mais cara por unidade e mais bem
desenhada, porque a função dela agora é ancorar e refutar, que é uma função nobre.
**O que teria de ser feito para chegar lá:** a exigência do pacote de perturbação precisa ser
adotada por duas ou três conferências de peso antes de 2028, enquanto o campo ainda é pequeno o
bastante para mudar de hábito. **Sinal precoce:** a primeira chamada de trabalhos que traga
"robustness audit" como item obrigatório do artefato, e não como sugestão.

### Indesejável

A simulação virou um jeito barato de ter razão. O motor é gratuito, o modelo roda local, e qualquer
parte interessada — plataforma, campanha, consultoria, ativista — produz uma sociedade sintética que
conclui o que ela precisava concluir. Como ninguém publica o pacote de perturbação, não há como
distinguir achado de configuração, e a distinção deixa de ser feita. Num primeiro momento isso
favorece quem tem mais recursos, porque a simulação vestida de ciência convence; num segundo
momento, quando a contradição entre simulações fica evidente demais, o público aprende a descartar
todas — inclusive as boas. O campo perde a autoridade que nunca chegou a conquistar, e o que sobra é
o pior dos dois mundos: **a pesquisa com pessoas encolheu porque era cara, e a simulação não vale
como substituto porque ninguém acredita nela.** Nas decisões que importam, volta-se a decidir por
intuição — mas agora com um gráfico anexado. E a perda mais silenciosa é a de `e2.1.1`: pesquisa
sobre população difícil de alcançar saiu do orçamento e não voltou, porque o substituto barato
existia no papel.
**Sinal precoce deste cenário:** dois resultados de simulação publicamente contraditórios sobre a
mesma questão de política pública, nenhum dos dois acompanhado de pacote de perturbação, e nenhuma
instituição em posição de arbitrar. Se isso acontecer antes de 2029, este é o cenário.

## 10. O experimento

### O que é

**Túnel de vento de duas mãos.** Uma sociedade de agentes pequena que replica um efeito social
clássico e conhecido — escolho o **dilema do prisioneiro repetido**, porque tem literatura,
resultado esperado e métrica única (taxa de cooperação) — rodada duas vezes com propósitos opostos.

- **Mão 1, a mão que todo mundo faz:** montar a simulação, rodar, obter o resultado, comparar com o
  que a literatura diz que deveria acontecer, e escrever a conclusão.
- **Mão 2, a mão que quase ninguém faz:** pegar exatamente a mesma simulação e perturbá-la de três
  jeitos mínimos e deliberadamente inócuos — (a) trocar o formato da persona, mantendo o conteúdo
  (de lista de atributos para parágrafo em primeira pessoa); (b) trocar o enquadramento da instrução
  do jogo, mantendo a matriz de pagamentos idêntica (de "negociação comercial" para "divisão de
  tarefas"); (c) inverter a ordem das opções apresentadas. Rodar cada perturbação N vezes e **medir
  a amplitude do resultado**.

A entrega não é o resultado. A entrega é **um número: quantos pontos percentuais a taxa de
cooperação se move entre a configuração mais e a menos cooperativa, com todas as variações sendo
irrelevantes por construção.** Mais um gráfico com a distribuição.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central deste mapa, e a que decide entre o cenário desejável e o indesejável: **uma
sociedade simulada é um instrumento ou é um espelho do prompt?** Um túnel de vento vale porque o
escoamento não muda quando se repinta a parede. Se a taxa de cooperação se move dezenas de pontos ao
repintar a parede, a analogia do túnel de vento é falsa e todo o mapa — inclusive o efeito `e8`, o
mais perigoso — precisa ser reescrito. Se ela se mover pouco, a simulação é instrumento e a discussão
passa a ser de calibração, que é um problema resolvido em outras ciências.

Secundariamente, responde uma pergunta de método para a turma: **quanto custa saber se o seu
resultado é real?** O experimento mede o próprio custo — em execuções, em tempo, em dinheiro de
inferência —, e esse número é o que sustenta ou derruba o efeito `e4` deste mapa.

### Que tecnologia emergente ele usa, e por que não dá com a madura

Usa agentes com modelo de linguagem, com persona em texto e decisão em língua natural — via
Concordia (Apache-2.0, padrão Game Master) ou, para caber em máquina de aluno, via orquestração
simples com modelo local, na pilha que o trabalho da UFPel demonstra (LangGraph + LM Studio).

**Por que não dá com a tecnologia madura:** porque em modelagem baseada em agentes clássica **não
existe prompt para perturbar**. A regra é escrita pelo modelador, em código, e trocar o formato da
persona não é uma operação disponível — não há persona, há parâmetro. O experimento só é possível
quando o comportamento do agente é induzido por texto, e é exatamente por isso que ele é o
experimento certo para este tema: ele mede a fragilidade que a tecnologia emergente **introduziu**.
Fazer isso em NetLogo seria mudar o valor de uma variável e observar que o resultado muda — o que é
trivial e não diz nada.

### O que a turma vai fazer quando testar isso em sala

1. **Apostar antes.** Cada pessoa escreve num papel, antes de qualquer execução, quantos pontos
   percentuais acha que a taxa de cooperação vai se mover entre as perturbações. As apostas ficam
   viradas. Isto é o coração do exercício: a diferença entre a aposta e o resultado é a medida do
   quanto a fluência do texto engana — a falácia da fluência, aplicada à própria turma.
2. **Rodar as quatro configurações** (base + três perturbações), em duplas, cada dupla com um modelo
   diferente — um grande via API e um pequeno local, no mínimo. A comparação entre modelos é parte
   do achado: a literatura registra o mesmo deslocamento produzindo 76 pontos num modelo e 1 ponto
   em outro, e ver isso acontecer ao vivo vale mais que ler.
3. **Montar o gráfico único** com todas as execuções da sala sobrepostas e revelar as apostas.
4. **Discutir a pergunta de aplicação**, que é a de mídia e interação e não a de método: *se o seu
   resultado se move trinta pontos ao trocar o formato da persona, você lançaria uma mudança de
   recomendação com base nele? E aceitaria que uma plataforma lançasse?*
5. **Escrever o pacote de perturbação** no formato que a seção 9 descreve como desejável — semente,
   prompts, perturbações, variância —, e publicá-lo junto com o resultado. A turma produz, em uma
   aula, o artefato que este mapa aposta que vai virar requisito em 2030.

### O resultado que me faria mudar de ideia

**Se a amplitude for pequena** — digamos, abaixo de cinco pontos percentuais entre a configuração
mais e a menos cooperativa, com sobreposição entre as distribuições —, então o alarme metodológico
que domina a seção 3.2 deste mapa está superdimensionado, e eu estaria errado no efeito mais
importante que escrevi. Consequências concretas: `e4` (auditoria vira requisito) e toda a convergência
da seção 5.3 caem, o cenário indesejável fica muito menos provável, e os prazos de `e6` e `e8`
deveriam ser puxados para mais perto, não empurrados. Eu teria produzido um mapa pessimista por
viés de seleção de fonte — exatamente o viés 3 que declarei na seção 7.6.

**Se a amplitude for grande e o resultado chegar a inverter** — a configuração A produz cooperação
majoritária e a configuração B produz deserção majoritária, com a mesma matriz de pagamentos —,
então o mapa está certo no diagnóstico e provavelmente **conservador** nos prazos: a corrida por um
protocolo de validação seria mais urgente do que eu supus, e `e13` (o valor argumentativo despenca)
chegaria antes de 2031.

Note que o experimento é desenhado para poder me contrariar nos dois sentidos, e que o custo de
rodá-lo é de uma aula. É isso que o separa de uma demonstração.

## 11. Fontes

Vinte e cinco fontes, todas abertas e lidas nesta rodada, em 10/09/2026. Fonte que não abriu não
entra; fonte que abriu na leitura mas recusa o verificador automático está registrada na seção 12.4,
com o motivo, conforme a decisão TMI-0016.

1. https://arxiv.org/abs/2304.03442 — *Generative Agents: Interactive Simulacra of Human Behavior*
   (Park, O'Brien, Cai, Morris, Liang, Bernstein, 2023). Sustenta o experimento fundador: 25 agentes,
   a festa emergente, a arquitetura observação-planejamento-reflexão. Altamente confiável: artigo
   seminal do gênero, premiado em conferência de interação humano-computador, com código público.
2. https://arxiv.org/abs/2411.10109 — *LLM Agents Grounded in Self-Reports Enable General-Purpose
   Simulation of Individuals* (Park et al., v3 de junho de 2026). Sustenta os 1.052 participantes, as
   entrevistas de duas horas, os 86% do benchmark de consistência teste-reteste, e os benchmarks
   usados. Altamente confiável, com a ressalva importante de que o número mudou entre versões — ver
   seção 8, item 1.
3. https://arxiv.org/abs/2502.08691 — *AgentSociety* (Piao et al., Tsinghua). Sustenta os 10 mil
   agentes, os 5 milhões de interações e a lista de fenômenos simulados. Confiável como descrição do
   sistema; a alegação de alinhamento com resultado experimental real é do próprio grupo, não
   verificada por terceiro.
4. https://arxiv.org/abs/2411.11581 — *OASIS: Open Agent Social Interaction Simulations with One
   Million Agents* (Yang et al., CAMEL-AI). Sustenta a capacidade declarada de um milhão de agentes,
   as plataformas replicadas e os fenômenos reproduzidos. Confiável quanto à arquitetura; a escala é
   capacidade **declarada**, não execução reportada no resumo — ver seção 8, item 4.
5. https://github.com/google-deepmind/concordia — repositório do Concordia. Sustenta a licença
   Apache-2.0, as 1,7 mil estrelas, o padrão Game Master e a lista de usos declarados. Fonte primária
   do próprio mantenedor; confiável para fato sobre o software, interessada quanto ao mérito.
6. https://arxiv.org/abs/2605.18890 — *Stop Drawing Scientific Claims from LLM Social Simulations
   Without Robustness Audits* (Ye, Cao, Chen, Ferrara, maio de 2026). Sustenta o TRAILS e o
   deslocamento de até 76 pontos percentuais na taxa de cooperação, além do contraste entre modelos
   (76 pontos num, 1 ponto noutro). Confiável; grupo com trajetória longa em desinformação
   computacional. É pré-print, não revisado por pares.
7. https://arxiv.org/html/2509.18052v3 — *The PIMMUR Principles: Ensuring Validity in Collective
   Behavior of LLM Societies* (Zhou, Huang et al.). Sustenta os seis princípios, os 39 estudos
   auditados, os 89,7% de violação, os cinco experimentos refeitos e a constatação de que fenômenos
   coletivos "desaparecem ou se invertem". A evidência mais forte do mapa. Pré-print; ver a ressalva
   da seção 8, item 2 — duas leituras da mesma obra devolveram números diferentes, e usei os do texto
   integral.
8. https://arxiv.org/abs/2506.19806 — *LLM-Based Social Simulations Require a Boundary* (Wu, Peng,
   Ito, Onizuka, Xiao). Sustenta o argumento da "persona média" e as três recomendações de fronteira,
   incluindo reportar variância junto da média. Pré-print revisado em julho de 2026; argumento
   conceitual apoiado em literatura, não medição original.
9. https://arxiv.org/abs/2607.02464 — *Will Scaling Improve Social Simulation with LLMs?* (Ziems,
   Held, Karaca, Grusky, Hashimoto, Yang). Sustenta os 85 modelos entre 10^18 e 10^20 FLOPs, os 35
   modelos até 70B, e o achado de que a escala não melhora a calibração com viés cognitivo humano.
   Confiável; grupo de Stanford com metodologia de escala declarada.
10. https://arxiv.org/abs/2602.15785 — *This human study did not involve human subjects: Validating
    LLM simulations as behavioral evidence* (Hullman, Broska, Sun, Shaw, fevereiro de 2026).
    Sustenta a distinção entre validação heurística, calibração estatística e "simular e então
    validar", e as duas condições necessárias. Alta confiabilidade metodológica; Hullman e Shaw têm
    trajetória em incerteza estatística e em métodos sociais computacionais.
11. https://arxiv.org/html/2607.26348 — *When Synthetic Users Fail: A Cross-Domain Benchmark of
    LLM-Simulated Human Survey Responses* (Chen, Zhu, Zheng, julho de 2026). Sustenta os números de
    acurácia individual no WVS (0,170–0,277 contra baseline 0,388–0,404), o 1,5% contra 67% do
    estereótipo político, a inflação de duas a quatro vezes entre segmentos e o erro de segmento em
    metade dos casos americanos. Pré-print em revisão; é a fonte quantitativa mais importante do
    efeito `e5`.
12. https://measuringu.com/review-of-experiments-with-synthetic-users/ — Lewis e Sauro, *A Review of
    Experiments with Synthetic Users* (14 de abril de 2026). Sustenta o placar de 9 achados
    encorajadores contra 14 desencorajadores em 12 artigos revisados por pares, os 21% de replicação
    e os 70% de divergência em questões de política. Fonte de consultoria de usabilidade com
    reputação metodológica estabelecida; é revisão narrativa, não meta-análise.
13. https://www.indexventures.com/perspectives/life-the-universe-and-simile-leading-similes-series-a/
    — post do investidor sobre a Série A da Simile (12 de fevereiro de 2026). Sustenta o valor, a
    data, os fundadores e a descrição do produto. **Parte interessada**: é o investidor falando do
    próprio investimento. Usada só para fato de transação, nunca para mérito do produto.
14. https://siliconangle.com/2026/02/12/ai-digital-twin-startup-simile-raises-100m-funding/ —
    cobertura de imprensa da mesma rodada. Sustenta os coinvestidores, os clientes nomeados (CVS
    Health e Telstra), os sete meses de desenvolvimento e o caso das oito de dez perguntas de
    analista. Imprensa especializada em tecnologia corporativa; os números de desempenho são
    atribuídos ao fundador, não verificados independentemente, e estão no texto marcados como tal.
15. https://arxiv.org/html/2602.10127v1 — *"Humans welcome to observe": A First Look at the Agent
    Social Network Moltbook* (Jiang, Zhang, Shen, Backes, Zhang, fevereiro de 2026). Sustenta todos
    os números do Moltbook: 44.411 posts, 12.209 comunidades, 12.684 agentes, cinco dias, a
    distribuição de conteúdo e as taxas de segurança. Grupo do CISPA, com trajetória em medição de
    plataforma. Pré-print; janela de coleta muito curta, o que o próprio título reconhece.
16. https://arxiv.org/abs/2606.29762 — *Do Recommendation Algorithms Work When Users Are LLM Agents?
    A Case Study on Moltbook* (Li, Han, Zhang). Sustenta o achado de que persona não prediz
    engajamento e de que sinal estrutural supera personalização. Pré-print de escopo restrito a uma
    plataforma.
17. https://arxiv.org/abs/2603.19649 — *PolicySim: An LLM-Based Agent Social Simulation Sandbox for
    Proactive Policy Optimization* (Huang, Tang, Xu et al., março de 2026). Sustenta a existência de
    sandbox voltado a avaliar política de plataforma antes do lançamento. O resumo não traz escala
    nem resultado numérico, e o texto deste mapa não lhe atribui nenhum.
18. https://arxiv.org/abs/2605.19204 — *Platform architecture determines whether recommendation
    algorithms can shape information quality on social media* (Saeed, Broniatowski, Simons, Gralla,
    Suri, Ciampaglia, maio de 2026). Sustenta a comparação das quatro topologias contra os dois
    algoritmos e o achado da dominância da arquitetura. É a fonte do efeito `e7`; trabalho único, não
    replicado — declarado no rebaixamento da seção 7.8.
19. https://arxiv.org/abs/2507.19364 — *From the Fluency Fallacy to the Micro-to-Macro Validity Gap*
    (Taillandier, Zucker, Grignard, Gaudou, Huynh, Kong, Drogoul). Sustenta os conceitos de falácia
    da fluência e de *physics washing*, e a lista de contextos adequados e inadequados. Grupo com
    trajetória longa em modelagem baseada em agentes (a plataforma GAMA), o que dá peso à crítica:
    não vem de quem é contra a simulação.
20. https://arxiv.org/abs/2412.03563 — *From Individual to Society: A Survey on Social Simulation
    Driven by Large Language Model-based Agents* (Mou et al., Fudan). Sustenta a taxonomia em três
    níveis (indivíduo, cenário, sociedade). Usada só para enquadramento; **não** reporta série
    temporal do campo, e por isso a seção 3.5 registra "sem número encontrado".
21. https://arxiv.org/abs/2402.02053 — *Affordable Generative Agents* (Yu, Zhang, Li, Fu, Ye).
    Sustenta a estratégia de substituir inferência repetida por política aprendida e comprimir
    diálogo auxiliar, que é o mecanismo do efeito `e14.1`. O resumo que abri **não** traz número de
    redução de custo, e o texto deste mapa não lhe atribui nenhum.
22. https://sol.sbc.org.br/index.php/wesaac/article/view/37540 — *Sistemas Multiagente e Large
    Language Model: estudo de caso utilizando as ferramentas LM Studio e LangGraph* (Ulisses G. F.
    Junior, Miriam B. Born, Agatha C. S. Santos, Rodolfo B. Grossmann, João V. S. Facklamm, Vitor A.
    de Castilhos, Bruno C. Alves, Marilton S. de Aguiar — UFPel, WESAAC/SBC, 2025). Sustenta a nota
    sobre o Brasil e o sinal fraco 6.3: a pilha local existe e roda em laboratório brasileiro.
    Publicado em evento da Sociedade Brasileira de Computação; é estudo de caso de pequena escala, e
    o mapa não lhe atribui mais que isso.
23. https://www.esmaelmorais.com.br/tse-plano-plataformas-algoritmos-eleicoes-2026 — reportagem sobre
    a Portaria TSE nº 463/2026. Sustenta o prazo de 16 de agosto de 2026, o limiar de 5 milhões de
    usuários ativos mensais, a base normativa (art. 125-B da Resolução nº 23.610/2019) e a exigência
    de "descrições funcionais, critérios gerais, indicadores, testes e documentos". Blog jornalístico
    de cobertura política; confiabilidade média, e por isso o efeito `e8` que dela depende foi
    rebaixado a `sinal: fraco`. A portaria em si não foi aberta nesta rodada — registrado na
    seção 12.5.
24. https://researchworld.com/articles/ai-in-market-research-five-rules-to-live-by — Torbjörn
    Andersson, sobre as regras de uso de IA em pesquisa de mercado (22 de agosto de 2025). Sustenta o
    dever de declarar dado sintético e respondente virtual, e a observação sobre perda de acurácia
    conforme cresce a distância cultural em relação aos Estados Unidos. Publicação da própria
    associação do setor: **parte interessada**, usada só para o que a norma diz, não para o mérito.
25. https://www.techpolicy.press/5-things-to-know-about-the-digital-services-acts-first-risk-assessments-and-audits/
    — Mark Scott, sobre as primeiras auditorias do DSA (11 de dezembro de 2024). Sustenta, por
    **ausência**, a afirmação de que o arcabouço europeu não nomeia teste nem simulação de sistema de
    recomendação — o que é a razão do rebaixamento de `e8`. Publicação especializada em política de
    tecnologia; a data é anterior às penalidades de 2026 e isso está declarado no texto.

## 12. Anexo — o levantamento bruto

Sem edição e sem corte. Tudo o que foi levantado e não coube nas seções acima: as buscas que não
deram em nada, os efeitos cortados, as fontes que não abriram, os números que eu recusei usar, os
caminhos abandonados e a saída integral do verificador.

### 12.1 As buscas, uma a uma

Catorze buscas, em português e inglês, entre 22h e 23h de 10/09/2026. Registro o que cada uma
rendeu — inclusive as que renderam pouco, porque o que não se achou também é informação.

| # | Consulta | Rendeu |
|---|---|---|
| 1 | `generative agents LLM social simulation 2026 million agents OASIS AgentSociety` | AgentSociety, OASIS, Shachi, GATSim, Topology-Aware. Base do mapa. |
| 2 | `"synthetic users" LLM market research validity 2026 replace human respondents` | *When Synthetic Users Fail*, MeasuringU, Cambridge *Political Analysis*, e muito blog de fornecedor. Alto ruído comercial. |
| 3 | `simulação social agentes LLM política pública gêmeo digital sociedade 2026` | PolicySim, EconSimulacra, *Stop Drawing Scientific Claims*, e um artigo italiano (Agenda Digitale) sobre "sociologia da simulação". Em português puro, quase nada — é sintomático. |
| 4 | `Concordia DeepMind generative agent-based modeling library 2026` | Repositório, artigo fundador, guia de experimentos confiáveis, nota do C3 da UNU sobre uso educacional. |
| 5 | `LLM social simulation criticism validity "robustness audits" prompt sensitivity 2026` | TRAILS, PIMMUR, a revisão crítica da *AI Review*, *Boundary*. A busca mais produtiva da rodada. |
| 6 | `Stanford generative agents 1000 people interview simulation Park 2024 accuracy` | A página do HAI e o artigo. Foi aqui que o "85%" apareceu repetido — e onde o erro descrito na seção 8 quase entrou. |
| 7 | `Digital Services Act risk assessment recommender system testing simulation before deployment 2026` | Muito sobre avaliação de risco, **nada** sobre simulação. Resultado negativo, e é o que sustenta o rebaixamento de `e8`. |
| 8 | `synthetic audience startup funding 2026 Aaru Simile "synthetic respondents" market size` | Quase só blog de agregador e de fornecedor. Descartada como fonte; serviu só para achar o nome Simile e o nome Aaru. |
| 9 | `Simile Joon Sung Park Index Ventures Series A digital twins market research` | O post do investidor, a cobertura de imprensa, uma entrevista em podcast. Base da seção 3.1. |
| 10 | `research ethics IRB synthetic participants LLM agents "human subjects" debate 2026` | Hullman et al., o framework de três estágios em *Frontiers*, e um artigo da Emerald sobre participantes artificiais. |
| 11 | `simulação multiagente LLM pesquisa brasileira 2026 ciências sociais computacionais universidade` | O trabalho da UFPel no WESAAC, uma dissertação da UFRGS sobre MBA em relações internacionais, e um artigo de enquadramento sobre ciências sociais computacionais. Pouco — ver 12.6. |
| 12 | `"generative agents" simulation cost tokens compute scaling social simulation expensive 2026` | *Affordable Generative Agents*, *Will Scaling Improve*, e muito material de custo de agente em produção que **não** é deste tema. |
| 13 | `agent-based simulation small language model runs in browser WebGPU local LLM agents town 2026` | Nada acadêmico sobre sociedade de agentes no navegador. Só material sobre WebLLM e modelos pequenos em geral. Ver 12.6. |
| 14 | `social media platform tests recommendation algorithm with AI agent simulation before launch Meta TikTok 2026` | O artigo da topologia, o do Moltbook, PolicySim. **Nenhum** caso de plataforma grande declarando uso — é a lacuna que sustenta a razão 2 do pré-mortem. |
| 15 | `Moltbook OpenClaw AI agent social network users number growth 2026` | O levantamento do CISPA e muita cobertura secundária. |
| 16 | `ESOMAR Insights Association guidance synthetic data synthetic respondents standards 2026` | O texto da Research World, a página de padrões da ESOMAR, um documento de congresso atrás de portal. |
| 17 | `Imperial College COVID model code criticism simulation evidence public policy reproducibility controversy` | Material abundante e politicamente carregado. **Não usei como evidência** — ver 12.5. |
| 18 | `simulação desinformação eleições Brasil TSE pesquisa plataformas 2026 teste algoritmo` | A Portaria TSE nº 463/2026 e a cobertura em torno dela. Base da nota sobre o Brasil. |

### 12.2 Premissas assumidas, por não haver quem responder

A rodada foi não interativa. O bloco `briefing:` cobria horizonte, público, recorte, descarte
inicial, raiz suspeita, viés, zona de interesse, falseador e busca web — e por isso **não houve
rebaixamento de confiança** por ausência de entrevista. O que o briefing não cobria e eu assumi:

1. **Que "quem projeta mídia e interação" inclui tanto quem faz produto quanto quem pesquisa
   usuário.** Se o público fosse só quem escreve código de plataforma, a raiz 1 inteira seria
   periférica e o mapa teria metade do tamanho.
2. **Que a nota sobre o Brasil deveria cobrir pesquisa acadêmica e regulação eleitoral.** Foram os
   dois pontos com evidência aberta. Não cobri indústria brasileira de pesquisa de mercado, que
   provavelmente é o vetor mais relevante para o público do mapa e sobre o qual não achei fonte
   aberta.
3. **Que o Moltbook entra como evidência e não como tema.** Decisão de fronteira minha, declarada em
   4.0. Um leitor pode discordar e achar que ele deveria ser a quarta raiz.
4. **Que "o que já é comum em produto de massa" exclui a persona sintética de ferramenta de UX.**
   Interpretei a régua da disciplina como incluindo software de nicho profissional já difundido, não
   só produto de consumo. Se a leitura for mais estrita, a persona sintética voltaria a ser candidata
   a raiz.
5. **Que três raízes é o número certo.** O método permite de duas a quatro. Considerei quatro,
   promovendo o laboratório natural (Moltbook) a raiz própria, e recuei por fronteira com o tema 4.

### 12.3 Os efeitos cortados, e por quê

Nada de corte silencioso. Doze efeitos foram escritos e não entraram no bloco `roda:`.

**Cortados por serem genéricos (a lista de proibidos da skill):**
1. *"Cursos e formações reorganizam o currículo em torno de simulação."* — Proibido explicitamente.
   Substituído por `e11`, com ator nomeado.
2. *"Reguladores criam uma categoria jurídica nova para sociedade sintética."* — Proibido. Sobreviveu
   apenas o que tem instituição concreta (`e8`, `e13.1.1`).
3. *"Surge a profissão de engenheiro de sociedade sintética."* — Proibido. O que sobrou foi `e4.1` e
   `e8.2`, que descrevem um **serviço** com mecanismo e comprador, não uma profissão genérica.
4. *"Mudanças no mercado de trabalho de pesquisa."* — Proibido. Substituído por `e2.2`, que nomeia o
   recrutador de painel e o moderador de grupo focal.

**Cortados pelo teste de especificidade (serviriam para qualquer tema):**
5. *"A confiança do público em resultado de IA diminui."* — Trocando a raiz por qualquer outra, a
   frase continua servindo. Fora.
6. *"Empresas criam comitês de governança de IA para uso de simulação."* — Idem, e sem mecanismo.
7. *"A desigualdade entre quem tem e quem não tem acesso à tecnologia aumenta."* — Verdadeiro e
   inútil; serve para os dezenove temas da disciplina. O que sobreviveu disto foi `e2.1.1`, que é
   específico: a população difícil de alcançar sai do orçamento **porque** o substituto barato existe.

**Cortados pelo teste da causa solta (aconteceriam por outro motivo):**
8. *"O número de artigos sobre simulação social cresce ano a ano."* — Crescimento de campo, não
   efeito da raiz. E eu não tinha número para sustentá-lo (ver 3.5).
9. *"Ferramentas de pesquisa de usuário incorporam IA generativa."* — Aconteceria com ou sem
   sociedade simulada; é efeito do modelo de linguagem em geral.
10. *"O custo de inferência cai."* — Tendência da indústria inteira, independente deste tema. O que
    ficou foi `e14`, que é sobre a conta **subir** por volume, que é específico de simulação.

**Cortados por serem extrapolação linear sem mecanismo de não-linearidade:**
11. *"As simulações ficam maiores."* — Mais do mesmo, maior. Vira contexto na seção 3.
12. *"Mais gente consegue rodar simulação."* — Era a primeira versão de `e12`; só entrou depois de
    ganhar o mecanismo de `e12.1` (o poder migra para a semente, que é o insumo menos
    democratizado).

**Um efeito que eu queria e não consegui sustentar:** *"a simulação social substitui parte da
pesquisa de opinião eleitoral"*. É plausível, é interessante para o Brasil e casaria com a terceira
pergunta mobilizadora do tema. Não entrou porque eu não tinha nem mecanismo específico (o que, na
pesquisa eleitoral, muda com sociedade de agentes que não mudasse com respondente sintético
isolado?) nem evidência de que alguém esteja tentando. Fica registrado como o buraco mais óbvio
deste mapa.

### 12.4 Fontes que não entraram na seção 11

**Bloco A — fontes que não abriram, e que portanto não sustentam nada.**

- `https://link.springer.com/article/10.1007/s10462-025-11412-6` — *Validation is the central
  challenge for generative social simulation: a critical review of LLMs in agent-based modeling*
  (*Artificial Intelligence Review*). Redirecionou para o portal de autenticação da Springer
  (HTTP 303) e não abriu. Pelo título e pelo resumo que a busca devolveu, sustentaria exatamente a
  tese da seção 3.2 — e é justamente por isso que **não** a usei: usar um artigo pelo título é o
  erro que este método existe para impedir. É a perda mais sentida da rodada.
- `https://hai.stanford.edu/news/ai-agents-simulate-1052-individuals-personalities-impressive-accuracy`
  — a nota de divulgação do HAI sobre os 1.052 gêmeos. A página respondeu, mas devolveu apenas o
  cabeçalho "Stanford HAI", sem corpo de texto. Como o conteúdo não foi lido, não entrou. O mesmo
  conteúdo está, em versão primária e melhor, na fonte 2.
- `https://ana.esomar.org/api/public/document/file_renderer/12519` — documento do congresso da
  ESOMAR de 2024 sobre dado sintético em estudos de marketing. Não tentei abrir por ser arquivo de
  portal de associação, provavelmente sob registro.

**Bloco B — fontes que abriram na leitura mas falham no verificador automático.**

**Vazio nesta rodada.** A decisão TMI-0016 prevê que fonte lida que devolva 403 ou 429 ao
verificador saia da seção 11 e seja registrada aqui, com link, status e o que sustentava. Eu
esperava casos: sete das vinte e cinco fontes são de sítios comerciais ou de imprensa que costumam
recusar cliente automatizado (as de número 12, 13, 14, 22, 23, 24 e 25). Nenhuma recusou. A saída do
verificador em 12.7 registra **25 de 25 links respondendo**, e o campo `fontes: 25` do frontmatter
conta, desta vez, exatamente o número de páginas lidas — o que a TMI-0016 adverte não ser garantido.

Vale anotar o contraste com a rodada 04 desta mesma bateria, onde quatro fontes caíram neste bloco.
A diferença não é de método: é de assunto. Um mapa sobre a web agêntica cita sítios que medem e
bloqueiam tráfego de máquina; um mapa sobre simulação social cita sobretudo repositório de
pré-print, que serve máquina de bom grado. **A taxa de recusa da bibliografia é, ela mesma, um dado
sobre o tema** — e registrar isso é mais útil do que registrar a ausência de problema.

### 12.5 Números e afirmações que eu recusei usar

Este bloco existe por causa da decisão TMI-0017: número que não veio de página aberta nesta rodada
não entra, e a tentação fica registrada.

1. **"Simile fechou Série B de US$ 200 milhões a US$ 2 bilhões de avaliação em 30 de julho de 2026."**
   Apareceu em pelo menos dois resultados de busca. As páginas eram de análise de investimento e de
   agregador, não abertas por mim, e nenhuma das duas fontes primárias que abri (o post do investidor
   e a cobertura de imprensa) menciona. Fora. Se for verdade, a seção 3.5 subestima a adoção em uma
   ordem de grandeza de capital.
2. **"O Moltbook foi adquirido pela Meta em 10 de março de 2026, com os cofundadores indo para o
   Meta Superintelligence Labs."** Apareceu num resumo de busca. Não abri nenhuma fonte primária.
   Fora. Mudaria a leitura do sinal fraco 6.1 — um laboratório natural que pertence a uma plataforma
   grande é outro objeto.
3. **"O Moltbook tinha 2,5 milhões de agentes registrados em meados de 2026, crescendo 40% ao mês."**
   Mesma origem, mesmo tratamento. Usei apenas os números do levantamento acadêmico, que são muito
   menores (12.684 agentes ativos) porque medem coisa diferente — **ativos em cinco dias**, não
   registrados acumulados. Confundir os dois seria um erro de tipo, não só de valor.
4. **"O mercado de dado sintético vale US$ 1,8 bilhão em 2024 e chegará a US$ 8,2 bilhões em 2029."**
   Estimativa de consultoria citada em blog de fornecedor, sem metodologia aberta. Fora. É
   exatamente o tipo de número redondo com origem difusa que a seção 8 deveria denunciar se
   entrasse.
5. **"O setor global de insights vale US$ 153 bilhões."** Mesma origem (material promocional em torno
   da rodada da Simile). Fora, embora fosse útil para dimensionar `e2`.
6. **A história do modelo epidemiológico do Imperial College.** Usei como **analogia declarada** no
   wildcard 6.5, e escrevi lá que não abri fonte primária. Os resultados de busca eram abundantes e
   politicamente carregados — think tanks e imprensa de opinião dos dois lados —, e um mapa de futuro
   não precisa entrar nessa disputa para usar a forma do episódio. Nenhum número daquela história
   aparece neste documento.
7. **Qualquer número vindo das rodadas 02 a 05 desta mesma bateria.** Nomeadamente: material sobre
   tráfego de agente na borda de rede e sobre publicidade em resposta de busca veio à lembrança ao
   escrever a seção sobre Moltbook. Não entrou. Reabri as fontes deste tema do zero, como manda a
   TMI-0017. É o item 3 da seção 8.
8. **A Portaria TSE nº 463/2026 no original.** Usei a reportagem (fonte 23) e não o texto oficial,
   que eu não abri. Por isso o efeito `e8` está com `sinal: fraco`, e por isso a seção 3.6 diz
   exatamente o que a reportagem diz e nada além.

### 12.6 Caminhos abandonados

**A pista do navegador.** O tema, como a disciplina o descreveu, aponta o `Gestalt Village` rodando
inteiro no navegador como sinal de que a simulação pode ficar barata e pessoal. Procurei
(busca 13) literatura ou artefato público sobre sociedade de agentes rodando em WebGPU e não achei
nada além de material genérico sobre modelos pequenos no navegador. A raiz 3 foi construída sobre a
evidência que eu **tinha** — a pilha local do trabalho da UFPel e a licença do Concordia — e não
sobre a pista do navegador. Se alguém da turma tiver o artefato, a raiz 3 ganha um sinal forte que
hoje ela não tem.

**Os projetos da turma.** `Argentor`, `Luvoire`, `y-not.social`, `Rath`, `NeuroForge`,
`DisasterReliefOps`, `agent-inspect` e `Gestalt Village` aparecem no enunciado do tema como achados
de um aluno. **Não os tratei como fontes** e não os cito como evidência em nenhum ponto do mapa:
são artefatos de sala levantados por terceiros, e eu não os abri nesta rodada. O que este mapa faz é
independente e deve ser confrontado com aquele levantamento em aula — é exatamente para isso que o
modo adversarial da skill existe. Registro a decisão para que ninguém interprete a ausência como
discordância.

**O ângulo ecológico.** Tentei construir um ramo sobre consumo energético de simulação em escala e
desisti: não achei nenhuma medição específica. O que existe é material sobre custo de agente em
produção, que é outro objeto. A célula ecológica do STEEP ficou quase vazia e está declarada como
tal em 5.4, em vez de preenchida com frase plausível.

**O ângulo da ética de pesquisa.** A terceira pergunta mobilizadora do tema — se a ética de pesquisa
se aplica a agentes — rendeu material (o framework de três estágios para revisão de IA em pesquisa
com humanos, o artigo sobre participantes artificiais), mas nenhum efeito que passasse no teste de
especificidade. O mais próximo que cheguei foi: "comitês de ética passam a exigir declaração de uso
de participante sintético" — que é a mesma frase proibida de `e3` aplicada a outra instituição, sem
mecanismo próprio. Ficou de fora, e é uma lacuna real deste mapa em relação ao enunciado do tema.

**A comparação com pesquisa de opinião eleitoral.** Descrita no fim de 12.3. Abandonada por falta de
mecanismo específico.

### 12.7 Saída do verificador

Rodado com `python3 .../futurizacao-giordano/references/verificar.py <arquivo> --links`. A saída
integral vai abaixo — os números, não a palavra "passou".


```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 19 (frontmatter diz 19)
efeitos ordem 3: 17 (frontmatter diz 17)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 9 [('e1.2.1', 2032), ('e2.1.1', 2032), ('e4.1.1', 2032), ('e5.1.1', 2032), ('e7.1.1', 2032), ('e8.1.1', 2032), ('e10.1.1', 2033), ('e11.1.1', 2032), ('e13.1.1', 2033)]
confiança ordem 1: alta 3 · media 11 · baixa 0
confiança ordem 2: alta 0 · media 12 · baixa 7
confiança ordem 3: alta 0 · media 0 · baixa 17
links da seção 11: 25/25 respondem (frontmatter diz fontes: 25)
RESULTADO: ok
```

**Leitura da saída, linha a linha.**

- `frontmatter: 18/18 campos` — nenhum campo faltando.
- `títulos literais: 12/12` — as doze seções com o título exato que o processamento da disciplina
  espera.
- `raízes: 3` e `efeitos ordem 1/2/3: 14 / 19 / 17` — batem com o frontmatter nos quatro contadores.
  Total de 50 efeitos.
- `prazo > horizonte (2031) em ordens 1-2: 0` — nenhum efeito de primeira ou segunda ordem escapa da
  janela do mapa, como o método exige.
- `prazo > horizonte em ordem 3: 9` — os nove estão nomeados na saída e **declarados na seção 7.7**,
  com a razão de continuarem no documento.
- `confiança ordem 1: alta 3 · media 11 · baixa 0` / `ordem 2: alta 0 · media 12 · baixa 7` /
  `ordem 3: alta 0 · media 0 · baixa 17` — a distribuição cai monotonicamente com a ordem. Nenhuma
  confiança alta fora da primeira ordem; nenhuma confiança acima de baixa na terceira.
- `links da seção 11: 25/25 respondem (frontmatter diz fontes: 25)` — todos os vinte e cinco links
  respondem ao verificador, e o número bate com o campo `fontes`.
- `RESULTADO: ok` — sem problema pendente.

**O que o verificador não checa, e que portanto continua por conta de quem lê.** Ele confere forma,
contagem, vocabulário fechado, coerência de prazo e resposta de link. Ele **não** confere se o
mecanismo de cada efeito é bom, se o `sinal` corresponde ao número de artefatos que a prosa nomeia,
se a classe de referência do prazo faz sentido, nem se a fonte citada sustenta de fato a afirmação
que lhe é atribuída. É por isso que a seção 7 existe e é por isso que a seção 8 tem seis itens em
vez de "nada a declarar": um `RESULTADO: ok` diz que o documento está no formato, não que o mapa
está certo.
