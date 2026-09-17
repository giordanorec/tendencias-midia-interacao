---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: yrv
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 12
efeitos_ordem_2: 17
efeitos_ordem_3: 17
tecnologias_citadas: [Model Context Protocol, MCP Registry, MCP Apps, WebMCP, navigator.modelContext, NLWeb, llms.txt, ai-plugin.json, OpenAPI, Schema.org, robots.txt, Lighthouse Agentic Browsing, Chrome DevTools Protocol, Web Bot Auth, HTTP Message Signatures RFC 9421, Signature-Agent, Cloudflare Pay Per Crawl, Cloudflare Pay Per Use, Really Simple Licensing, x402, HTTP 402, IETF AIPREF, Not Human Search, TollBit, Perplexity Comet, ChatGPT Atlas, Pix agêntico]
fontes: 19
confianca: media
experimento: "Porteiro — o mesmo serviço publicado em duas portas, a página para pessoas e um conjunto de ferramentas para agentes, com preço por requisição e registro de quem entrou; mede-se qual porta conclui a tarefa, a que custo, e o que o agente deixa de ver"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

A web não está ficando "mais inteligente": está trocando de visitante, e com isso trocam de
dono as quatro decisões que a sustentavam — o que se publica, quem entra, quem paga e quem
escolhe. Este mapa sustenta que são quatro rupturas distintas, não quatro faces da mesma. A
primeira: a página deixa de ser a unidade de entrega e o site passa a publicar **ferramentas**
— o Chrome embarcou uma auditoria de "agentic browsing" na configuração padrão do Lighthouse
13.3 em 7 de maio de 2026, que verifica registro de ferramentas WebMCP, árvore de
acessibilidade, estabilidade de layout e `llms.txt`. A segunda: entrar na web deixa de ser
anônimo por padrão para quem não é gente — a Cloudflare marcou 15 de setembro de 2026 para
bloquear por padrão crawlers de uso misto em páginas com anúncio, e o Web Bot Auth, que assina
requisição com chave, foi adotado por grupo de trabalho do IETF em 1º de setembro de 2026,
depois de já estar em produção. A terceira: o pagador deixa de ser o leitor — a razão entre o
que um crawler busca e o que ele devolve em visitas chegou a ordens de milhares para um,
52% do crawling de IA em junho de 2026 era para treino, e a Cloudflare trocou cobrança por
busca (*Pay Per Crawl*) por cobrança por uso em resposta (*Pay Per Use*). A quarta: a
descoberta migra de ranquear páginas por relevância para selecionar serviços por capacidade de
execução, com índices que pontuam "prontidão agêntica" por checklist de arquivos. O mapa é
frágil num ponto declarado: ele supõe que os agentes continuarão precisando da web aberta — e
a decisão do Nono Circuito de 4 de agosto de 2026, que tirou da lei antifraude americana o
poder de barrar o agente que age a mando do usuário, empurra a disputa para onde a engenharia,
e não o direito, decide quem entra.

## 2. O tema

Este mapa trata da **web como plataforma sendo reprojetada para máquinas**: o que um site
publica, para quem ele publica, sob que porta e por que preço, quando o cliente HTTP mais
frequente é um programa agindo por uma pessoa.

Onde encosta em mídia e interação é direto, e é desconfortável. Mídia digital, desde 1994, é
uma cadeia com três elos amarrados: alguém publica uma página, alguém vê a página, e a
visualização financia a publicação. Interação digital, no mesmo período, é a disciplina de
compor essa página de modo que a pessoa consiga fazer o que veio fazer. Os dois ofícios
pressupõem a mesma coisa — **um olho humano diante de uma superfície**. Quando quem lê é um
agente, o olho some, a superfície vira protocolo, e os dois ofícios ficam sem o seu objeto: a
publicidade perde o lugar, o design de interface perde o interlocutor, e o SEO perde o
mecanismo. Nenhuma dessas perdas é hipótese sobre o modelo de linguagem: são consequências da
mudança de quem faz a requisição.

Por que isto merece mapa de futuro, e não levantamento de estado da arte: o estado da arte
aqui é de leitura fácil — existem especificações publicadas, datas de release, painéis de
tráfego. O que **não** se lê no estado da arte é a bifurcação. Há duas trajetórias abertas ao
mesmo tempo e elas se anulam: sites abrindo portas para máquinas (WebMCP, MCP, NLWeb,
`llms.txt`) e sites fechando portas para máquinas (bloqueio por padrão, credencial assinada,
cobrança por requisição). As duas aceleraram no mesmo trimestre de 2026, às vezes na mesma
empresa — a Cloudflare publica servidor MCP e, no mesmo semestre, liga o bloqueio padrão. Um
levantamento registra as duas; só um mapa de consequências pergunta o que acontece com a web
aberta quando elas se encontram.

### O que este mapa não é

Três fronteiras, duas delas herdadas da lista de 19 temas da disciplina:

- **Não é identidade e detecção de agentes pelo ângulo da segurança** — isso é o tema 2.
  Web Bot Auth aparece aqui como **política de admissão de uma plataforma**: quem tem direito
  de entrar e o que vê depois de entrar. Como se detecta agente hostil, como se defende de
  injeção por conteúdo de página, e o que é um agente comprometido: tema 2.
- **Não é pagamento e comércio por agentes** — isso é o tema 5. O x402 e o `Pay Per Use`
  entram aqui apenas como **preço de acesso à página**, não como meio de pagamento, carteira,
  ou compra por agente. Quem paga pelo conteúdo que alimenta o agente é pergunta deste mapa;
  como o agente paga por um produto no varejo é pergunta do tema 5.
- **Não é a capacidade do modelo.** Se o agente raciocina melhor ou pior, quanto custa o
  token, e qual modelo vence: fora. O objeto aqui é a camada de publicação, admissão,
  financiamento e descoberta — que muda mesmo que a capacidade do modelo congele hoje.

## 3. Onde isso está hoje

Esta seção é a âncora. Tudo que está aqui **já aconteceu** e tem data; nada aqui entra na roda
como efeito (é a prova P3 da fase adversarial, aplicada antes e não depois).

### O protocolo virou infraestrutura, e mudou de dono

O Model Context Protocol deixou de ser projeto de um fabricante. A especificação de **28 de
julho de 2026** transforma o MCP de protocolo bidirecional com estado em protocolo de
requisição/resposta sem estado — nas palavras do próprio anúncio, *"MCP is transforming from a
bidirectional stateful protocol into a request/response stateless protocol"* —, acrescenta
roteamento por cabeçalho (`Mcp-Method`, `Mcp-Name`), resultados cacheáveis com `ttlMs` e
`cacheScope`, e formaliza extensões, entre elas **MCP Apps** e autorização gerenciada para
empresa. O detalhe que interessa a este mapa não é técnico: protocolo sem estado é protocolo
que atravessa balanceador de carga e CDN como tráfego web comum. O MCP passou a ter a forma da
web, e não a forma de uma sessão de aplicativo.

Escala declarada no mesmo anúncio: os SDKs de primeira linha somam **perto de meio bilhão de
downloads por mês**, com os SDKs de TypeScript e Python cruzando **1 bilhão de downloads
acumulados**; o post cita a Honeycomb relatando que **quase 20% de todas as consultas
interativas mensais já são feitas por agentes**. A governança é da Linux Foundation, com
Anthropic, AWS, Cloudflare, Google Cloud e Microsoft entre as mantenedoras — ou seja, o
conector é de todos, e nenhum deles pode desligá-lo sozinho.

### O navegador começou a auditar se o site serve para máquina

Em **7 de maio de 2026**, o Lighthouse 13.3 passou a trazer, **na configuração padrão**, uma
categoria chamada *agentic browsing*. Ela avalia, na descrição do Chrome, *"how well your site
is constructed for machine interaction through a set of deterministic audits"*, e roda quatro
famílias de checagem: registro de ferramentas **WebMCP** (o Lighthouse chama o domínio
`WebMCP` do Chrome DevTools Protocol e observa os eventos de registro de ferramenta), a
integridade da **árvore de acessibilidade** (nomes, rótulos, visibilidade), o **Cumulative
Layout Shift** — porque agente depende de onde o elemento está — e a presença de um resumo
legível por máquina na raiz do domínio (`llms.txt`). A categoria não tem nota de 0 a 100: tem
fração de checagens passadas e status de passa/falha. Requer Chrome 150 ou superior; as
auditorias de WebMCP exigem inscrição no origin trial.

O WebMCP em si é padrão proposto, não padrão. A documentação do Chrome, publicada em **18 de
maio de 2026** e atualizada em **7 de agosto de 2026**, registra origin trial a partir do
Chrome 149, flag local `chrome://flags/#enable-webmcp-testing`, e duas APIs: uma imperativa,
em que a página declara ferramentas em JavaScript, e uma declarativa, em que se anotam
formulários HTML. Um site que adota o WebMCP não está publicando conteúdo para o agente ler:
está publicando **funções para o agente chamar**.

### O arquivo que virou símbolo do tema não funciona

O `llms.txt` é o emblema da web agêntica na imprensa especializada — e é, medido, o item mais
fraco do conjunto. Um estudo da SE Ranking de **novembro de 2025** examinou quase **300 mil
domínios**: **10,13%** tinham o arquivo. Entre os de tráfego alto (100.001+ visitas), a adoção
era **menor** — 8,27% — do que entre os de tráfego médio (10,54%). E, o mais relevante, o
estudo cruzou presença do arquivo com citações por LLM usando correlação de Spearman e modelo
XGBoost com análise SHAP, e concluiu que **remover o fator `llms.txt` melhorava a predição do
modelo** — o arquivo não explica citação, e adiciona ruído.

Do lado do maior mecanismo de busca, a documentação do Google sobre recursos de IA, cuja
última atualização visível na página é de **10 de dezembro de 2025**, diz literalmente: *"You
don't need to create new machine readable files, AI text files, or markup to appear in these
features."*

E, no entanto, o `llms.txt` está numa auditoria embarcada no Chrome desde maio de 2026. Isto
não é contradição do mapa: é o retrato de um artefato que sobrevive por conformidade, não por
função — e é exatamente o que a fase de triagem deste método existe para separar (ver seção 4
e, no anexo, a recusa por escrito).

### A metade não-humana, e a conta que não fecha

O relatório da Cloudflare de junho de 2026 registra que **mais de 50% do tráfego da internet
já é não-humano**; que **52% do crawling de IA era para treino** (contra 22% na primavera de
2025) e **36% vinha de crawlers de uso misto**, que misturam busca, agente e treino no mesmo
agente de usuário; e que categorias muito rastreadas viram o **tráfego humano cair até 40% em
menos de um ano**. A métrica que a Cloudflare criou para tornar isso discutível é a
*crawl-to-refer ratio* — o número de requisições de HTML feitas por uma plataforma dividido
pelo número de requisições de HTML que chegam com referência dela. No post que a estreou, em
**1º de julho de 2025**, a Anthropic aparecia em **70.900:1**, e a Mistral em 0,1:1; o próprio
post adverte que o aplicativo do Claude não envia cabeçalho `Referer`, o que infla o número.
A ordem de grandeza, e não o dígito, é o achado: buscar muito e devolver quase nada.

### A porta, e quem passou a controlá-la

Em **1º de julho de 2026** a Cloudflare anunciou que, a partir de **15 de setembro de 2026**,
os padrões passam a bloquear crawlers de uso misto em qualquer página que hospede anúncio. A
mudança vale para clientes novos, sites novos de clientes existentes e **todos os clientes do
plano gratuito**; quem é pago e já tem configuração, mantém a sua. No mesmo movimento, o
*Pay Per Crawl* dá lugar ao **Pay Per Use**, que paga o editor quando o conteúdo **aparece na
resposta**, e não quando é buscado — a justificativa declarada é que mais de 50% do tráfego de
crawl de IA é nova busca de páginas que não mudaram. Os primeiros parceiros do mercado são a
Ceramic.ai e a You.com. Matthew Prince, CEO da empresa: *"Now that the majority of traffic on
the Internet is non-human, we must go further and act faster so that a sustainable ecosystem
can emerge."*

A porta tem fechadura em padronização. O **Web Bot Auth** assina requisições com HTTP Message
Signatures (RFC 9421) e descobre chave por um cabeçalho `Signature-Agent`; a arquitetura está
no draft `draft-meunier-web-bot-auth-architecture-05`, de **2 de março de 2026**, assinado por
Thibault Meunier (Cloudflare) e Sandor Major (Google), ainda como Internet-Draft individual e
já substituído por um draft de protocolo. Ou seja: **rodou em produção antes de ser padrão**, o
que é o inverso da ordem que a web costumava seguir.

E a lei saiu do caminho. Em **4 de agosto de 2026**, o Nono Circuito derrubou a liminar que
impedia o agente de compras da Perplexity de acessar a Amazon, decidindo que, quando o usuário
dirige o assistente, *"it was the user who 'accessed' Amazon's computers, with the help of
Perplexity's AI agent"* — e que o "whoever" da lei antifraude contempla acesso por uma pessoa,
não por uma ferramenta. A orientação prática que os advogados extraíram é explícita: sites que
queiram restringir agentes *"should not assume that the CFAA or similar state anti-hacking
statutes will provide an effective remedy"*. Restou o contrato, e restou a engenharia.

Enquanto isso, a instrução declarada em `robots.txt` é desobedecida com frequência mensurável:
o relatório da TollBit sobre o primeiro semestre de 2026, divulgado em **14 de agosto de
2026**, encontrou **cerca de 15%** dos buscadores de página de IA identificados na Europa
acessando URLs marcadas como proibidas, com `ChatGPT-User`, `Bytespider` e `Youbot` alcançando
páginas restritas em quase metade dos sites europeus que os nomeavam. A taxa de bloqueio
declarada também difere por região: `Claude-User` aparece proibido em 9% dos sites na Europa e
26% na América do Norte.

### A cobrança, e o que ela já arrecadou

O x402 é um protocolo de pagamento nativo de HTTP que devolve o código 402 com instruções de
pagamento; a análise da Chainalysis registra que as transações agênticas na Base foram de
quase zero em meados de 2025 para **mais de 100 milhões acumuladas até o primeiro trimestre de
2026**, e que transações acima de US$ 1 passaram a representar **95% do volume transferido**,
contra 49% no início de 2025. A mesma análise é honesta sobre a procedência: o crescimento
inicial veio de atividade especulativa com meme coin, e a métrica que ela propõe — conversão
de quem testou para quem paga de fato — melhorou 4× em seis meses, o que é bom sinal e é
sinal **sobre uma base pequena**. Do lado do licenciamento, o padrão **RSL (Really Simple
Licensing)** define termos legíveis por máquina no `robots.txt` com modelos de atribuição,
`pay per crawl` e `pay per inference`, e lista entre apoiadores Akamai, Cloudflare, Creative
Commons, Fastly, Reddit, O'Reilly Media, Vox Media, Yahoo e Ziff Davis. E, no IETF, o grupo
**AIPREF** trabalha num vocabulário para expressar preferências de uso por IA — ainda draft,
não RFC.

### A descoberta feita para máquina

O **Not Human Search** se descreve como busca da web agêntica e pontua cada site de 0 a 100 em
sete sinais, com pesos declarados: `llms.txt` (25), `ai-plugin.json` (20), OpenAPI (20), API
estruturada (15), servidor MCP (10), regras de bot em `robots.txt` (5) e Schema.org (5). Na
consulta feita para este mapa, a página inicial declarava **5.339 sites indexados** e **média
38** de pontuação. O ranking orgânico, diz a própria página, é por prontidão, não por
pagamento. Do lado do MCP, o registro oficial de servidores é o índice equivalente. Ambos são
catálogos de **capacidade declarada**: pontuam o que o site diz oferecer, não o que o agente
consegue concluir nele.

### No Brasil

Dois recortes, ambos abertos nesta sessão. Do lado do mercado de comunicação, a reportagem do
*Meio & Mensagem* de **29 de maio de 2026** mostra as agências brasileiras — Monks, Dentsu
Brasil, Song, Accenture, iD\TBWA, 404 Innovation Studio — se reorganizando em torno de GEO e
AEO, com a formulação que resume a angústia do setor: *"Uma marca ausente nas respostas
geradas por IA simplesmente não existe para uma parcela crescente do público."* Do lado da
infraestrutura, um texto da Open Finance Brasil publicado em **15 de setembro de 2026** põe a
questão no lugar certo — *"O desafio central não será ensinar a IA a fazer um Pix.
Tecnicamente, conectar um agente a uma API de pagamentos é a parte mais simples"* — e nomeia o
que falta: identidade própria do agente, mandato estruturado e aprovação por exceção. A nota
que este mapa registra sobre o Brasil é essa assimetria: o país tem trilho de execução
(Pix, Open Finance) maduro o bastante para o agente usar, e não tem a camada de **procuração
verificável** que diria em nome de quem ele agiu.

## 4. As disrupções-raiz

Antes das quatro, o que foi **recusado**. A triagem de maturidade desta skill reprova três
candidatas que quase todo material sobre o tema trata como tendência:

- **`llms.txt`** — reprova **T1** (a régua: muda o que é possível, ou só a velocidade?). É um
  resumo em Markdown de conteúdo que já estava publicado; nada que se faça com ele deixava de
  ser possível sem ele. É H2− clássico: escora a prática de SEO fazendo-a durar mais um ciclo.
  Evidência de que não rompe: 10,13% de adoção, efeito nulo sobre citação no modelo da SE
  Ranking, e o Google declarando que não usa. Entra na seção 3 como substrato, não na roda.
- **AEO/GEO como disciplina** — reprova **T1** e **T2**. Trocou-se o alvo da otimização
  (resposta em vez de link azul), não o que é possível fazer; tirando a prática do mapa, um
  time competente continua com o mesmo objetivo e aceita menos alcance. É o mesmo ofício com
  outro nome.
- **API REST documentada, SDK, scraping, Schema.org** — aprovam **T5**: caminho de instalação
  padrão, preço estável, modos de falha documentados, contratação como rotina. Maduros.
  Participam das disrupções abaixo **como substrato**, nunca como a disrupção.

O procedimento completo, candidata por candidata, com o teste que reprovou cada uma, está na
seção 12.

### R1 — A página deixa de ser a unidade de entrega: o site publica ferramentas

**O que rompe.** A competência de **compor a superfície** como forma de entregar valor. Desde
que a web existe, publicar é dispor conteúdo e controles numa tela, e a disciplina de
interação é a arte de fazer a pessoa chegar ao fim da tarefa naquela tela. Quando o site
declara `navigator.modelContext` e expõe funções chamáveis, a tela vira **uma** das
superfícies — e não a que executa. O que deixa de valer é o pressuposto de que projetar a
experiência e projetar a capacidade são a mesma coisa feita no mesmo artefato. Entra por
**mercado novo**: sites que nunca tiveram API pública — lojas, prefeituras, portais de
serviço, veículos — passam a ter interface programável sem virar empresa de plataforma; e o
comprador dessa interface (o fabricante de agente) nunca foi cliente de ninguém ali.

**Por que agora e não há cinco anos.** Três sinais datados que não existiam: a especificação
MCP de **28/07/2026** tornando o protocolo sem estado e roteável por cabeçalho; o origin trial
do WebMCP a partir do **Chrome 149**, documentado em **18/05/2026**; e, o mais decisivo porque
é auditoria e não proposta, o **Lighthouse 13.3, de 07/05/2026**, com a categoria *agentic
browsing* **ligada por padrão**. Em 2021 havia o inverso disso: o ChatGPT Plugins, que exigia
que cada site se cadastrasse num fabricante. A diferença é que agora a checagem chegou à
ferramenta que todo time de front-end já roda.

**O que ainda falta acontecer.** WebMCP estável fora do origin trial e em mais de um motor de
navegador — hoje é Chromium e é experimental. E falta a resposta à pergunta que R3 faz: um
site que publica ferramentas para o agente está entregando o trabalho da sua página a quem não
paga por ela. Sem R3 resolvida, R1 é assimétrica e vai ser revertida por quem descobrir a
conta.

### R2 — Entrar na web deixa de ser anônimo por padrão para quem não é gente

**O que rompe.** O pressuposto fundador de que a web responde igual a qualquer cliente HTTP
que peça direito. Rompe também um ofício inteiro: obter dado por acesso não identificado —
scraping — passa de prática cinzenta e viável a prática tecnicamente barrada por padrão em
parte relevante da web. E rompe o `robots.txt` como instituição: um pedido educado que 15% dos
buscadores de página ignoram não é política de admissão, é aviso.

**Por que agora e não há cinco anos.** A data é **15/09/2026**, quando o bloqueio por padrão
passa a valer para clientes novos e para todo o plano gratuito de uma rede que atende parcela
grande da web. O complemento é criptográfico e também é datado: o Web Bot Auth foi **adotado
por grupo de trabalho do IETF em 01/09/2026**, depois de rodar em produção — a arquitetura
individual é de **02/03/2026**, e a documentação da própria Cloudflare de **01/07/2026** ainda
registra incompatibilidade entre a forma do cabeçalho que ela implementa e a dos drafts
posteriores. Há cinco anos não havia nem chave, nem padrão, nem incentivo: o tráfego
automatizado era minoria e era barato.

**O que ainda falta acontecer.** Falta credencial para o **agente do usuário final**, não só
para o do fabricante. Hoje quem tem chave é quem opera frota; uma pessoa que escreve o próprio
agente não tem como se apresentar. Enquanto isso não existir, "web para agentes" significa
"web para agentes de quem tem contrato" — e a decisão do Nono Circuito, que trata o acesso do
agente como acesso do usuário, aponta na direção oposta à da infraestrutura.

### R3 — O pagador deixa de ser o leitor: a unidade econômica migra da impressão para o uso

**O que rompe.** A cadeia que sustentou a mídia digital: publicar → ser visto → ser pago pela
visualização. Rompe a **audiência como ativo**. Se 52% do crawling é para treino e o retorno
em visitas é de ordem de milhares para um, o inventário publicitário de um site não é
"consumido pouco": ele é **produzido para ninguém**. O que deixa de valer é a competência de
medir e vender atenção humana agregada. Entra por **mercado novo** — o comprador passa a ser
um laboratório de IA ou um fabricante de agente, que nunca comprou espaço de mídia — e também
por **baixa do mercado**, já que os primeiros a aceitar cobrança por requisição são os sites
que a publicidade programática pagava mal.

**Por que agora e não há cinco anos.** A troca de *Pay Per Crawl* por *Pay Per Use*,
anunciada em **01/07/2026**, é o sinal preciso: a unidade de cobrança deixou de ser o acesso e
passou a ser o **aparecimento na resposta**. Somado a isso: o padrão RSL com `pay per
inference` no `robots.txt`; o x402, com mais de 100 milhões de transações acumuladas até o
primeiro trimestre de 2026; e o dado que torna a discussão inevitável — mais de 50% do tráfego
já não é humano. Em 2021 micropagamento na web era uma ideia derrotada havia vinte anos, e o
motivo da derrota era o custo de transação e a fricção de decidir a cada clique. Os dois
motivos caem quando quem decide o gasto é um programa.

**O que ainda falta acontecer.** Falta preço que alguém pague em escala. Os números do x402
crescem em transação e não em dinheiro; o valor médio está na casa de centavos a dezenas de
centavos, e há relato de que boa parte do movimento é teste. Falta também um caso público de
editor grande cuja receita por uso de máquina seja **material** no balanço. Enquanto não
houver, R3 é um mercado montado à espera de comprador.

### R4 — Descoberta deixa de ser ranqueamento de página e vira seleção de serviço por capacidade

**O que rompe.** O PageRank como forma de arbitrar o que existe, e o SEO como disciplina de
texto e link. Quando quem escolhe é um agente que precisa **executar uma tarefa**, o critério
deixa de ser relevância semântica de um documento e passa a ser se o serviço expõe a função
certa, com o esquema certo, a um custo e uma latência aceitáveis. O que deixa de valer é a
competência de fazer um documento parecer a melhor resposta. Entra por **mercado novo**:
ferramentas e APIs nunca foram "conteúdo indexável" e agora são o item ranqueado.

**Por que agora e não há cinco anos.** O registro oficial de servidores MCP existe e é o
catálogo de referência; o Not Human Search pontua prontidão agêntica por sete sinais com pesos
publicados; e o Chrome passou a auditar prontidão por padrão em **07/05/2026**. Há cinco anos
não havia nem o objeto (a ferramenta publicada), nem o consumidor (o agente que escolhe), nem
o árbitro (o índice).

**O que ainda falta acontecer.** Falta sinal de qualidade que não seja auto-declarado. Os
índices de hoje pontuam **presença de arquivo**, e arquivo se publica em uma tarde: é
`llms.txt` (25 pontos) que pesa mais que servidor MCP (10) num score de 100, apesar de a
evidência dizer que `llms.txt` não move citação. Enquanto o ranking for checklist, a
otimização vai ser conformidade, e o ranking vai medir quem leu o checklist — não quem serve.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A página deixa de ser a unidade de entrega e o site passa a publicar ferramentas chamáveis por agente
    efeitos:
      - id: e1
        ordem: 1
        efeito: Sites de serviço passam a manter duas superfícies, a tela para pessoas e um conjunto declarado de ferramentas para agentes, e a segunda vira item de contrato e não diferencial
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A métrica de sucesso de uma interface deixa de ser conversão na tela e passa a ser taxa de conclusão de tarefa por agente, medida fora do site
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formação em design de interação se reorganiza em torno de especificar capacidade e affordance legível por máquina, e a composição visual vira a disciplina de apenas uma das duas superfícies
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Times de produto passam a versionar a superfície agêntica como API pública, com depreciação anunciada, e quebra de ferramenta vira incidente de produto e não ajuste de layout
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Contratos de fornecimento de software passam a incluir compromisso de estabilidade das ferramentas agênticas, com penalidade por quebra, como hoje há para disponibilidade
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A publicidade gráfica perde o lugar padrão na página de serviço porque a página deixa de ser vista, e o investimento migra para colocação dentro da resposta do assistente
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O anúncio deixa de ser espaço comprado e vira candidatura a ser escolhido por um agente, disputada por critério de adequação que a máquina declara
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Órgãos de defesa do consumidor passam a exigir que o agente revele qual parte da recomendação foi paga, e a divulgação vira requisito de funcionamento e não de ética
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A acessibilidade deixa de ser conformidade legal e vira requisito de funcionamento, porque a árvore de acessibilidade é o que o agente lê da página
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Erro de acessibilidade passa a aparecer como perda de receita mensurável e sai da fila de dívida técnica para a de incidente
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O ganho de acessibilidade para pessoas com deficiência passa a ser efeito colateral de uma decisão comercial, e regride nos pontos da interface que o agente não precisa atravessar
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: Entrar na web deixa de ser anônimo por padrão para clientes que não são gente
    efeitos:
      - id: e4
        ordem: 1
        efeito: O acesso anônimo por HTTP deixa de ser o padrão para clientes automatizados, e o mesmo endereço responde de forma diferente conforme a identidade assinada de quem chega
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Passa a existir um degrau de conteúdo na mesma URL, com texto integral para agente credenciado e resumo para o resto
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Citar uma página deixa de garantir que outra pessoa veja o que foi citado, e conferir uma afirmação passa a depender de ter credencial equivalente à de quem a fez
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Agentes escritos por indivíduos ficam sem porta de entrada porque a credencial reconhecida é a do fabricante, e programar o próprio agente deixa de dar acesso à web que o navegador dá
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Surge pressão regulatória por um direito de agir por procuração na web, exigindo que o site aceite o agente do usuário como aceita o navegador dele
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A recusa de agentes deixa de ser decisão de engenharia e vira política editorial declarada em arquivo, com termos distintos por finalidade de treino, de busca e de ação em nome de usuário
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Duas webs passam a existir na prática, a que responde sob licença legível por máquina e a que só responde a gente, e cada site escolhe uma ou banca o custo das duas
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O arquivamento histórico da web perde cobertura porque o que só existe atrás de porta credenciada não entra em acervo público, e o registro do período fica com buracos que ninguém vê na hora
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A declaração de finalidade desce do domínio para a peça, e a mesma reportagem passa a valer para resposta com atribuição e a não valer para treino
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Conteúdo publicado sem declaração de finalidade passa a ser tratado como proibido por padrão pelos agentes de fabricante grande, invertendo o ônus que o robots.txt estabeleceu
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A rede de entrega vira o cartório da web, porque quem emite e valida credencial de agente decide na prática quem existe para as máquinas
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Sites pequenos perdem a opção de não escolher lado, porque manter verificação própria custa mais do que aderir ao intermediário que já decide por eles
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A discussão sobre neutralidade migra da camada de rede para a camada de admissão de agentes, e passa a tratar de quem pode ler, não de quem pode trafegar
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: O pagador deixa de ser o leitor e a unidade econômica da web migra da impressão para o uso em resposta
    efeitos:
      - id: e7
        ordem: 1
        efeito: O acesso de máquina vira linha de receita medida e cobrada, e o inventário de um site passa a ter dois preços, o do olho humano e o do agente
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O conteúdo passa a ser produzido em duas versões, uma para persuadir pessoas e outra licenciada para alimentar resposta de máquina, com preços e prazos diferentes
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A qualidade editorial deixa de ser julgada por leitura e passa a ser julgada por quanto a citação rende, e o que não é citável perde financiamento antes de perder leitor
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: Veículos pequenos ficam de fora do licenciamento porque o custo de negociar excede a receita esperada, e a cobrança só funciona para eles em arranjo coletivo
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Surge uma entidade de arrecadação de direitos de uso por máquina, com as mesmas disputas de repartição e de transparência que marcam as sociedades de autores
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A requisição paga entra no desenho do produto, e grátis para pessoa e pago para máquina vira padrão de precificação de quem publica informação de referência
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Agentes passam a otimizar rota por preço, e uma fonte cara deixa de ser consultada mesmo quando tem a melhor informação disponível
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A precisão da resposta de um assistente passa a depender do orçamento de quem pergunta, e a desigualdade de informação vira função de tarifa e não de acesso à rede
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: Acervos públicos e institucionais passam a credenciar ou cobrar acesso de máquina para custear a banda que os agentes consomem
        sinal: fraco
        prazo: 2031
        confianca: baixa
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O custo de servir máquinas vira critério de curadoria, e o que é caro de entregar sai do ar antes do que é pouco consultado
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Parte do acervo digital público passa a existir só como resposta intermediada por agente, sem cópia navegável por uma pessoa
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: A descoberta deixa de ranquear páginas por relevância e passa a selecionar serviços por capacidade de execução
    efeitos:
      - id: e10
        ordem: 1
        efeito: Sites passam a ser pontuados por prontidão agêntica por terceiros, e a nota entra em briefing de contratação como entrou a nota de desempenho de página
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Nasce a otimização para o índice de agentes, com arquivos publicados para pontuar e não para servir, e o score se descola da utilidade real do serviço
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: O ranking migra de checagem de arquivos declarados para medição de tarefas concluídas, e prontidão passa a ser avaliada por execução em vez de presença
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Fornecedores de software passam a vender prontidão agêntica como serviço, e o mercado de otimização se reorganiza em torno de conformidade técnica auditável
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A função de quem otimizava conteúdo se divide em duas, a de quem escreve para pessoas e a de quem mantém contrato de interface com máquinas
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A escolha do serviço passa a ser feita pelo agente e não por quem usa, e a marca perde o instante em que era vista antes da decisão
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: A reputação de um serviço passa a se formar em registros que agentes consultam entre si, e não em avaliação escrita por usuário
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Fraudar reputação deixa de ser comprar avaliação e passa a ser envenenar catálogo de ferramentas, com um alvo técnico e nenhum leitor humano para estranhar
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Registros e diretórios de ferramentas viram infraestrutura crítica, e a queda de um registro deixa agentes sem saber que um serviço existe
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Passa a haver disputa sobre quem admite um serviço no registro, com recurso e apelação, como houve em loja de aplicativo
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: O acesso a mercado por meio de agente vira objeto de regulação de concorrência, e quem opera registro passa a ser tratado como guardião de porta
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda é árvore, e estas quatro raízes não são independentes — três pares delas se anulam.**
Isto é a cegueira nomeada do método (ver `ESTUDO.md`): não há notação para contra-reação.

*R1 contra R2.* R1 é a web se abrindo: o site declara ferramentas para que o agente aja. R2 é a
web se fechando: o site exige credencial para que o agente entre. Um site que faz as duas está
publicando capacidade **para uma lista de convidados** — e é isso, e não "a web agêntica", o
resultado provável. Quem lê a árvore soma e12 com e1 e imagina um ecossistema aberto de
serviços descobríveis; o encontro de R1 com R2 produz o oposto, um conjunto de jardins com
portaria, cada um com sua chave. Nenhum nó da árvore carrega esse encontro.

*R3 contra R1.* R3 encarece o acesso de máquina; R1 depende de que agentes acessem muito, e de
graça, para que valha a pena publicar ferramentas. Se R3 vencer cedo, R1 fica restrita a quem
vende — comércio, viagem, serviço financeiro, onde a chamada do agente gera receita direta — e
não chega a quem informa. O mapa não tem como mostrar que **a mesma disrupção que financia a
web agêntica é a que impede metade dela de existir**.

*R4 contra R3.* O ranking por prontidão (R4) premia quem se abre; a cobrança (R3) premia quem
fecha. Um site bem pontuado no índice agêntico é, por construção, um site que entrega trabalho
de graça. Enquanto o score contar arquivos e não contar preço, o índice estará ranqueando
generosidade — e o efeito e10.1.1, que prevê a migração para medição por execução, é a única
saída desse laço que a árvore consegue exprimir.

**Convergências que exigem duas raízes** e por isso ficaram fora da árvore, por regra do
método:

- **O paywall se inverte.** Com R2 mais R3, o padrão deixa de ser "de graça para máquina, pago
  para pessoa" e passa a "de graça para pessoa, pago para máquina" — o oposto exato do modelo
  de assinatura que a mídia passou quinze anos construindo. Precisa das duas raízes: sem
  credencial não há como distinguir, e sem preço não há o que cobrar.
- **A interface volta como prova de que tem gente.** Com R1 mais R2, o desenho de tela pode
  reaparecer não como meio de fazer a tarefa, mas como **teste de humanidade** — o que é
  degradação deliberada de usabilidade, e é o caminho mais provável de um site que quer
  bloquear agente sem ter credencial. É a pior consequência de interação deste mapa e ela não
  cabe em nenhum galho.
- **O agente vira o público, e o público vira dado de treino.** Com R3 mais R4, o que um site
  publica passa a ser escrito para pontuar num índice e para ser citado numa resposta; a
  pessoa que lê vira externalidade positiva. Nenhum nó exprime isso porque não é efeito: é
  mudança de destinatário, e a roda não tem campo para destinatário.

**Sobre os prazos.** Toda ordem 3 deste mapa cai **depois** do horizonte de 2031, entre 2032 e
2034, e isso é declarado de propósito: efeito de terceira ordem é mais mediado, não mais
profundo, e datá-lo dentro do horizonte seria fingir precisão. A única exceção ao padrão de
confiança é `e4`, o único efeito do mapa com confiança alta — justificado na seção 7.

## 6. Sinais fracos e wildcards

Aqui entram os efeitos que a regra de parada expulsou da árvore por exigirem **duas ou mais
precondições não validadas ao mesmo tempo**, mais os que quase não aparecem hoje e mudariam o
mapa inteiro.

### Sinais fracos

**A credencial de agente vira credencial de pessoa.** O Web Bot Auth assina o agente do
fabricante. Se a mesma mecânica for usada para assinar a **procuração** — este agente age por
esta pessoa, com este limite —, a web ganha uma camada de identidade que ela recusou ter por
trinta anos. O texto da Open Finance Brasil de 15/09/2026 nomeia exatamente essa peça
(identidade do agente, mandato estruturado, aprovação por exceção) e a OpenID Foundation e o
IETF aparecem como onde ela se decidiria. Duas precondições não validadas: padrão de mandato e
aceitação por parte de quem recebe. Se acontecer, `e4.2` e `e4.2.1` deixam de ser pressão
regulatória e viram engenharia, e o mapa muda de tom em toda a R2.

**O índice de prontidão passa a medir tarefa concluída.** Hoje o score é checklist de arquivo
(`llms.txt` vale 25 de 100 num índice; servidor MCP vale 10). O dia em que um índice publicar
**taxa de conclusão de tarefa real por domínio**, o mercado inteiro de otimização agêntica
muda de objeto em um trimestre — e a otimização por conformidade morre. Precondições: um
avaliador que execute tarefas em escala, e alguma legitimidade para publicar a nota.

**O `robots.txt` deixa de ser pedido e vira condição de contrato.** O RSL põe termos de
licença legíveis por máquina dentro do arquivo; se um tribunal tratar a leitura desses termos
como aceitação — e não como aviso —, o arquivo que 15% dos buscadores ignoram vira instrumento
exigível. Precondições: um caso julgado e um padrão estabilizado.

**A resposta do assistente ganha inventário publicitário auditado por terceiro.** Publicidade
dentro de resposta existe; o que não existe é auditoria independente de entrega e de
divulgação. Quando existir, `e2.1` acelera e `e2.1.1` perde a necessidade de regulador.

**O agente de baixa capacidade rodando local.** Se agentes pequenos, rodando na máquina da
pessoa, virarem rotina, o tráfego agêntico deixa de vir de uma dúzia de origens identificáveis
e passa a vir de milhões de endereços residenciais. Toda a R2 depende de que a origem seja
concentrada e nomeável — este sinal a destrói pela base.

### Wildcards

**W1 — Um veículo grande bloqueia todos os agentes e a audiência não muda.** Baixa
probabilidade, alto impacto. Se um portal de referência fechar a porta para máquina e, três
meses depois, seu tráfego humano, sua receita e sua influência estiverem intactos, a premissa
econômica de R3 cai: significa que o agente não é canal, é ruído — e que a conta a resolver
era de custo de banda, não de perda de audiência. Efeito no mapa: R3 encolhe para uma
discussão de infraestrutura, `e7` perde a confiança media, e `e5.1` (as duas webs) vira a
descrição do mundo, não uma previsão.

**W2 — Um tribunal decide que o agente é o usuário para todos os efeitos.** O Nono Circuito já
disse que quem acessa é a pessoa. Se essa doutrina for levada ao limite — o agente do usuário
tem o mesmo direito de entrada que o navegador do usuário —, bloquear agente vira
discriminação de cliente e não proteção de propriedade. R2 desmonta, R1 dispara, e a bifurcação
deste mapa desaparece: só sobra a web aberta, com a conta de R3 sem pagador.

**W3 — O contrário de W2: um tribunal ou um regulador reconhece direito de recusa por
finalidade.** O acesso continua livre, mas o **uso** para treino ou para resposta exige
licença específica e exigível. Neste caso `e5.2` e `e5.2.1` (declaração por peça, proibido por
padrão) passam de terceira ordem a presente, e a web se reorganiza por metadado de licença,
não por porta.

**W4 — O agente deixa de precisar do site.** Se modelos passarem a responder com qualidade
suficiente **sem** consultar a web em tempo real, a corrida por prontidão agêntica vira
irrelevante e o valor do conteúdo volta inteiro para a etapa de treino — que é justamente a que
não paga por acesso. Todas as quatro raízes perdem urgência ao mesmo tempo. É a única hipótese
deste mapa que não tem defensor público, e por isso a mais fácil de esquecer.

**W5 — Um incidente grande de agente causando dano por ação, e não por leitura.** Um agente
credenciado que execute transações em escala com erro, ou que seja sequestrado por conteúdo de
página, produz o primeiro caso público em que a porta aberta pela R1 vira passivo. O efeito
provável não é fechar a web: é exigir seguro e certificação, o que consolida os fabricantes
grandes e torna `e4.2` (o agente do indivíduo sem porta) permanente. Este wildcard encosta no
tema 2 e é onde os dois mapas deveriam ser lidos juntos.

## 7. Contra o próprio mapa

Esta seção é o resultado da bateria adversarial. Ela cobrou preço: **oito efeitos do rascunho
morreram** e três tiveram a confiança rebaixada. O registro completo, com o `id` de rascunho e
a prova que matou cada um, está na seção 12; aqui fica o que sobreviveu e continua frágil.

### P1 — Qual efeito é só extrapolação linear do presente

`e10.2` ("fornecedores vendem prontidão agêntica como serviço") é o mais próximo de ser só o
presente em outro volume: já existe empresa vendendo isso hoje, e o efeito descreve o mesmo
ator (agência, fornecedor de software) com o mesmo mecanismo (vender conformidade), em outra
escala. Sobreviveu por um fio, porque o **objeto** da conformidade muda — de texto e link para
contrato de interface —, o que é troca de mecanismo. Se eu estiver errado sobre isso, `e10.2` e
`e10.2.1` caem, e R4 fica com um galho só.

`e12` ("registros viram infraestrutura crítica") também é suspeito: é a história de qualquer
diretório, do DNS à loja de aplicativo. Ele fica porque o ator novo é o **agente que não tem
como descobrir por conta própria** — um humano perdido busca no Google; um agente sem registro
não sabe que a coisa existe. Mas o leitor deve tratar esse galho como o menos original do mapa.

### P2 — Qual efeito assume velocidade de adoção sem caso comparável

`e7` — o acesso de máquina virar linha de receita medida até 2029 — é o mais exposto. O caso
histórico que eu uso para sustentar o prazo é o do paywall na imprensa, que levou cerca de uma
década (2011–2020) para ir de excêntrico a padrão, e mesmo hoje não é universal. Mas há uma
diferença que corta nos dois sentidos: paywall exigia convencer milhões de pessoas a pagar, e
aqui é preciso convencer algumas dezenas de empresas. Menos contrapartes é mais rápido — e
também é mais frágil, porque a recusa de três delas trava o mercado inteiro.

O contra-exemplo que mais me incomoda é o micropagamento: a ideia tem trinta anos de derrotas
seguidas, e o que existe hoje de x402 é volume grande em transação e pequeno em dinheiro, com
a própria análise da Chainalysis registrando que a origem do crescimento foi especulação com
meme coin. Se o caso comparável correto for o micropagamento, e não o paywall, `e7` atrasa
cinco anos e R3 inteira sai do horizonte.

### P3 — O que deste mapa já é verdade hoje

Foi o teste mais letal: matou `e2.2` do rascunho ("marcas passam a produzir material cuja
audiência declarada é um agente") porque isso é exatamente o que 10,13% dos domínios já fazem
com `llms.txt` e o que as agências brasileiras descrevem estar montando desde maio de 2026. Foi
para a seção 3, onde era o seu lugar.

O que sobrou na fronteira: `e4` está **parcialmente acontecendo** — 15 de setembro de 2026 é a
data em que o bloqueio padrão entra em vigor, e este documento foi escrito em 17 de setembro de
2026. Mantive `e4` na roda porque o que está no ar é o bloqueio por padrão para uma parte dos
clientes de uma rede; o efeito enunciado é a **resposta diferenciada por identidade assinada
como norma da web**, que não é. Mas é honesto dizer que `e4` é o efeito mais próximo de ser
estado da arte disfarçado de futuro, e é por isso, e não por otimismo, que ele é o único com
confiança alta.

### P4 — Força contrária: quem perde, e o que essa pessoa pode fazer

Três forças estão modeladas, e uma delas provavelmente vence mais do que o mapa admite.

- **Quem perde com R2 e R3** são os fabricantes de agente, e eles têm duas armas. A primeira é
  jurídica e já foi usada com sucesso: a decisão de 04/08/2026 tira da lei antifraude o poder
  de barrar agente que age a mando de usuário. A segunda é mais simples — **ignorar**: 15% dos
  buscadores de página de IA na Europa já alcançam URLs proibidas, e a posição pública de pelo
  menos um fabricante é que o `robots.txt` não se aplica quando quem pediu foi uma pessoa. Um
  mapa que trata a porta como eficaz está errando.
- **Quem perde com R1** é o time de marca dentro do anunciante: a superfície agêntica retira
  dele o momento de exposição. A arma disponível é atrasar — não publicar ferramentas, exigir
  que o agente passe pela tela. Funciona enquanto o concorrente também não publicar, e é
  exatamente a estrutura de um dilema do prisioneiro; por isso `e1` tem confiança media e não
  alta.
- **Quem perde com R4** são os incumbentes da busca, que têm o ativo mais valioso do mapa: já
  são o índice. A hipótese realista não é o índice agêntico substituir o buscador; é o buscador
  incorporar prontidão agêntica como mais um sinal e o índice independente virar nicho. O
  Lighthouse já auditando prontidão por padrão é evidência a favor dessa leitura — o
  incumbente não está sendo atacado, ele está **distribuindo a régua**.

### P5 — Precondição única

O galho que mais depende de uma só aposta é o de R2: `e4`, `e4.1`, `e4.1.1`, `e5.1`, `e6` e
`e6.1` pendem todos de que **credencial assinada se torne a forma normal de distinguir quem
chega**. Se o Web Bot Auth não estabilizar, ou se a verificação continuar concentrada num
punhado de redes que implementam versões incompatíveis do cabeçalho — o que a documentação da
Cloudflare de 01/07/2026 descreve como realidade atual —, seis efeitos morrem juntos. Não é
distribuição de risco: é um galho de mapa apoiado num draft.

O segundo é `e7` → `e7.1` → `e7.1.1`, que pende de existir preço aceito. Se o preço não se
firmar, o galho todo vira o que o mercado de dados de treino já é: acordos bilaterais opacos
entre poucos grandes, sem padrão, sem preço público e sem acesso para o resto.

### P6 — A camada (Causal Layered Analysis)

**Litania.** "A internet está sendo reescrita para máquinas." Verdadeiro como manchete e quase
vazio como mecanismo. O número que sustenta a manchete — mais de 50% do tráfego não é humano —
é real e é **medido por quem vende a solução para isso**. Não é acusação: é procedência, e um
mapa que repete o número sem dizer de onde ele vem está fazendo publicidade.

**Causas sistêmicas.** Abaixo da manchete há uma disputa de receita entre dois setores, e ela é
velha: quem produz conteúdo quer ser pago pelo uso; quem distribui quer o insumo barato. A
camada nova é que **um intermediário de infraestrutura** — a rede de entrega — se pôs como
árbitro, e está definindo padrão, porta e preço ao mesmo tempo. A decisão de qual protocolo
vence não está sendo tomada em corpo de padronização; está sendo tomada em configuração
padrão, e depois levada ao IETF. O Web Bot Auth foi adotado por grupo de trabalho **dez meses
depois** de rodar em produção.

**Visão de mundo.** O mapa inteiro repousa sobre uma suposição que não enuncia: **que acesso é
mercadoria e que o problema a resolver é de precificação.** Toda a R3 só faz sentido nessa
visão. Há pelo menos duas visões concorrentes, e nenhuma delas é marginal: a de que informação
de referência é bem público e o custo de servi-la é infraestrutura a ser financiada
coletivamente (a visão das bibliotecas, dos arquivos e da Wikipédia); e a de que a web é
comunicação entre pessoas e um agente lendo por mim é uma extensão minha, não um terceiro a ser
cobrado (a visão que o Nono Circuito acabou de endossar sem querer). Se qualquer uma delas
prevalecer, R3 não atrasa — ela **muda de sinal**, e os efeitos e7 a e9 passam de "vira receita"
para "vira custo compartilhado".

**Mito.** A história que a cultura conta aqui é a do **visitante**. "Visitar um site" é metáfora
de hospitalidade: alguém vai até a casa de outro alguém, é recebido, olha em volta. Todo o
vocabulário da web vem daí — página, visita, sessão, endereço, porta. A internet agêntica não
substitui o visitante por outro visitante: ela substitui a visita pelo **pedido atendido**, e
com isso a metáfora certa deixa de ser a casa e passa a ser o balcão. Quem projeta mídia e
interação foi formado inteiro na primeira metáfora. É por isso que este tema desorienta — não
porque a tecnologia seja difícil, mas porque o ofício foi construído sobre uma imagem que está
sendo aposentada.

### O viés que entrou aqui

Dois, e o segundo é o pior. O primeiro é de seleção de fonte: a evidência mais forte,
quantificada e datada deste mapa vem de **uma empresa que vende bloqueio e cobrança de bot**.
Metade dos números da seção 3 é da Cloudflare. Eles são bons, são públicos e são medidos numa
fatia grande da web — e são produzidos por quem tem interesse em que o problema seja grande.
Onde pude, contrapus com fonte independente (SE Ranking, TollBit, Chainalysis, Nono Circuito);
onde não pude, o número está atribuído no texto.

O segundo: a zona de interesse declarada deste mapa é "Agentes", e quem escolhe essa zona tende
a achar que o agente vence. O modo como esse viés aparece é sutil — não é otimismo, é
**inevitabilismo**: nenhum dos doze efeitos de primeira ordem enuncia o cenário em que a web
agêntica simplesmente não pega. Esse cenário está no wildcard W4 e no indesejável da seção 9,
mas está fora da árvore, e essa exclusão é uma escolha minha, não um achado.

### O falsificador declarado

O recorte fechado desta rodada definiu o que me faria mudar de ideia: **evidência de que a
adoção já passou da maioria inicial**, ou **de que a tecnologia não rompe nada**. Os dois têm
teste definido e eu declaro o resultado honestamente:

- *Passou da maioria inicial?* Não, e com folga em quase tudo. `llms.txt` está em 10,13% dos
  domínios e em 0% dos mil maiores; WebMCP está em origin trial num só motor de navegador; o
  x402 tem volume diário pequeno. A exceção incômoda é o MCP, com um bilhão de downloads
  acumulados em dois SDKs e 20% das consultas interativas de uma plataforma de observabilidade
  vindo de agentes — aí a adoção **passou**, e é por isso que o MCP entra neste mapa como
  substrato de R1 e R4, não como a disrupção.
- *A tecnologia rompe alguma coisa?* Para `llms.txt` e para AEO, a resposta honesta foi **não**,
  e as duas foram recusadas por escrito na seção 4. Para as quatro raízes, sim — mas note que a
  ruptura que eu nomeio em três delas é **econômica e institucional**, não técnica. Se o leitor
  exigir que a ruptura seja do artefato, este mapa tem uma raiz só, a R1, e o resto é rearranjo
  de mercado sobre tecnologia madura. Essa leitura é defensável e eu não consigo derrubá-la.

### A bateria derrubou coisas, mas não derrubou a premissa

Nenhuma das seis provas atingiu a premissa central — a de que o visitante mudou. Ela está
sustentada por um número só, de uma fonte só, medido por parte interessada. Se esse número
estiver errado, ou medir outra coisa (requisições e não visitantes, HTML e não uso), o mapa
inteiro é um edifício sobre uma estaca. Não consegui verificá-lo de forma independente nesta
sessão, e registro isso como a maior fragilidade deste documento.

## 8. O que a máquina errou

Cinco itens, todos pegos por **atrito externo** — duas fontes discordando, um número que não
batia com o outro, um arquivo que não continha a frase prometida. Nenhum foi pego por releitura.

**1. O número de sites do Not Human Search, em quatro versões incompatíveis.** O enunciado do
tema diz "indexa 9.000+ ferramentas e APIs". O título do repositório no GitHub diz "8,000+
indexed sites". O README do mesmo repositório diz "1,900+ agent-first sites". A página inicial
do serviço, aberta nesta sessão, mostrava **5.339 sites indexados**. Quatro números, nenhum
deles falso no seu contexto, todos apresentados com a mesma confiança. *Como percebi:* fui
buscar o dado para escrever a seção 3 e o número da página não batia com o do enunciado —
então abri as duas outras fontes e a discrepância virou quatro. Usei o da página inicial, que é
o único que eu vi renderizado com data de consulta, e registrei os outros aqui. **A lição não é
sobre esse serviço**: é que "quantos sites estão prontos para agentes" é hoje um número sem
denominador estável, e ele está sendo citado como se tivesse.

**2. Uma atualização de documentação do Google que eu não consegui confirmar.** As buscas
retornaram, com muita consistência, que o Google publicou em **15 de junho de 2026** uma
subseção chamada *"Clarifying guidance on llms.txt files"*, dizendo que o Search ignora o
arquivo. Abri a página de recursos de IA do Search Central: a frase que encontrei é *"You don't
need to create new machine readable files, AI text files, or markup to appear in these
features"*, e a data de última atualização visível é **10 de dezembro de 2025**. A página de
atualizações de documentação que as fontes citavam respondeu **404**. *Como percebi:* fui
copiar a citação literal e ela não estava onde deveria — o mesmo tipo de erro descrito em
`DUVIDAS.md`, a referência verdadeira com a conclusão que não é dela. **O que está no
documento é o que eu li**, com a data que eu li; a subseção de junho de 2026 pode existir em
outra página, e eu não a encontrei.

**3. O estudo da SE Ranking datado de 2026 em toda parte, e de novembro de 2025 na fonte.** Os
resumos de busca apresentavam os 10,13% como "dados de 2026". Abri o artigo: o estudo é de
**novembro de 2025**. A diferença importa porque o argumento inteiro da seção 3 é sobre
velocidade de adoção — um dado de novembro de 2025 apresentado como de 2026 faz um mercado
parecer estagnado quando ele pode estar andando. Está no texto com a data correta, e a
conclusão sobre efeito nulo em citação é do estudo, não minha.

**4. A razão crawl-para-referência atribuída ao mês errado, com o dígito errado.** As buscas
davam números de junho de 2026 (Anthropic 4.580:1, OpenAI 848:1, Perplexity 186:1, Google 5:1)
e os atribuíam ao post da Cloudflare que estreou a métrica. Abri o post: ele é de **1º de julho
de 2025** e traz **70.900:1** para a Anthropic, medido entre 19 e 26 de junho de 2025 — com o
próprio post advertindo que o aplicativo do Claude não envia `Referer`, o que infla o valor.
Os números de 2026 são de painel, não daquele post. Registrei no texto apenas o que o post diz,
com a data dele, e usei a ordem de grandeza — não o dígito — como argumento.

**5. Uma fonte primária que eu abri e não consegui ler.** Baixei o acórdão do Nono Circuito
(`26-1444.pdf`, 4 de agosto de 2026) e a extração de texto voltou ilegível. Em vez de citar de
memória o que o tribunal decidiu — que é o erro descrito em `DUVIDAS.md` como "por dentro
indistinguível de estar certo" —, ancorei as citações na análise de um escritório de advocacia
que reproduz os trechos, e digo isso na seção 11. O acórdão continua sendo a fonte; eu é que
não a li.

**Um sexto caso, que não é erro e sim recusa.** Todas as buscas afirmam que o navegador
ChatGPT Atlas foi descontinuado em **9 de agosto de 2026**, com as capacidades migradas para o
ChatGPT e o Codex. É consistente entre muitas fontes secundárias e provavelmente é verdade. Eu
não abri a página oficial que confirma, e por isso **isso não aparece em nenhuma afirmação do
mapa** — nem como sinal, nem como prazo, nem como evidência de que o navegador agêntico
fracassou ou triunfou. Fica registrado aqui como o que é: informação que eu acredito e não
verifiquei.

## 9. Três cenários para 2031

**Provável — a web dos convidados.** Em 2031 continua havendo web aberta, e ela continua sendo
o lugar onde as coisas são encontradas pela primeira vez; o que mudou é que quase tudo que tem
valor comercial está atrás de uma porta que reconhece quem chega. Os grandes sites de serviço
mantêm duas superfícies, e a segunda — a de ferramentas — é onde a tarefa se conclui: o
formulário virou função, e a tela ficou para explicar, escolher e confirmar. A publicidade não
morreu, migrou: virou colocação dentro da resposta, com regra de divulgação que ninguém está
satisfeito em cumprir. O licenciamento por uso existe e paga bem para talvez duzentos veículos
no mundo; para o resto, paga pouco ou nada, e a diferença entre os dois grupos não é qualidade,
é capacidade de negociar. Quem projeta mídia e interação trabalha em times que têm, ao lado do
designer de interface, alguém responsável por manter um contrato de capacidades — e essa pessoa
não veio do design, veio da engenharia de API. A web não se partiu em duas; ela ficou porosa de
um jeito desigual, e a porosidade acompanha o tamanho do bolso.

**Desejável — o balcão com regra.** Em 2031, três coisas aconteceram e nenhuma delas era
impossível em 2026. Primeira: a credencial de agente passou a carregar **procuração**, não só
fabricante — existe um padrão para dizer "este programa age por esta pessoa, com este limite", e
o agente que uma estudante escreve num fim de semana entra nos mesmos sites que o agente de uma
empresa de trilhões. Segunda: o preço de acesso de máquina ficou **público e padronizado**, e
por isso pequenos veículos conseguiram cobrar em arranjo coletivo, em vez de cada um negociar
sozinho com quem não precisa deles. Terceira, e a mais barata de todas: os índices de prontidão
passaram a medir **tarefa concluída** em vez de arquivo presente, o que matou a otimização por
checklist antes que ela virasse indústria. Para chegar aqui foi preciso que um corpo de
padronização decidisse antes do configurador padrão de uma empresa — o inverso do que
aconteceu com o Web Bot Auth — e que alguém com legitimidade publicasse a nota de execução.
Nada disso é utópico. É só mais lento do que a alternativa.

**Indesejável — a web dos dois preços, e o sinal precoce dela.** Em 2031, conferir uma
informação depende de ter assinatura de um agente que tenha credencial. A mesma URL devolve
texto integral para quem chega assinado e resumo para o resto; a pessoa que clica no link de
uma citação vê outra coisa, e não tem como saber o que deixou de ver. Os arquivos públicos, sem
orçamento para servir a máquinas, passaram a credenciar o acesso, e parte do acervo só existe
como resposta intermediada. A qualidade editorial passou a ser medida por rendimento de citação,
o que financia o que é citável e desfinancia o que é longo, local ou inconveniente. E a
acessibilidade, que tinha melhorado quando o agente precisava dela, regrediu nos pontos em que
o agente deixou de precisar. **O sinal precoce é específico e dá para vigiar a partir de
amanhã:** o dia em que um site grande servir conteúdo diferente para agente credenciado e para
navegador anônimo **na mesma URL**, sem dizer que faz isso. Não é bloqueio — bloqueio é
visível e gera reação. É o degrau silencioso, e ele começa como otimização de custo.

## 10. O experimento

### Porteiro — um site de duas portas

**O que é.** Um serviço de informação mínimo, publicado simultaneamente em duas portas sobre o
mesmo acervo: (a) uma página web comum, com layout, navegação e busca, feita para pessoas; e
(b) um conjunto de ferramentas declaradas para agentes — um servidor MCP com três ou quatro
funções e, no navegador, o registro de ferramentas WebMCP na própria página. Em cima das duas
portas, três mecanismos ligáveis e desligáveis por chave: **credencial** (a porta de máquina
exige requisição assinada, e responde diferente para assinado e anônimo), **preço** (cada
chamada de máquina devolve `HTTP 402` com um valor simbólico antes de servir) e **registro**
(um log público de quem entrou, por qual porta, o que pediu e o que pagou).

O acervo pode ser qualquer coisa suficientemente real para a tarefa importar: o cardápio e o
horário de vinte restaurantes do Recife, os editais abertos de uma agência de fomento, a grade
de uma emissora. O que não pode é ser dado sintético — metade do que este experimento mede é o
atrito de conteúdo verdadeiro.

**Que pergunta sobre o futuro ele ajuda a responder.** Três, e todas são nós da roda:

1. *A porta de máquina conclui a tarefa que a porta de gente conclui?* (testa `e1` e `e1.1`:
   se a métrica de interface migra para conclusão por agente, alguém precisa medir isso.)
2. *O que o agente deixa de ver quando o site serve conteúdo em degrau?* (testa `e4.1` e
   `e4.1.1`: o degrau silencioso e a citação que não se confere.)
3. *A que preço o agente desiste?* (testa `e8.1`: se agentes otimizam rota por preço, existe um
   valor a partir do qual a melhor fonte deixa de ser consultada — e esse valor é mensurável em
   sala, com dinheiro de brinquedo.)

**Que tecnologia emergente ele usa, e por que não dá para fazer com tecnologia madura.** Usa
MCP (declaração de ferramentas e transporte sem estado), WebMCP no navegador (registro de
ferramentas na página, em origin trial), assinatura de requisição no modelo do Web Bot Auth
(HTTP Message Signatures) e resposta `402` com pagamento por requisição. Com tecnologia madura
dá para fazer **uma parte**: uma API REST com chave e cobrança por plano faz cobrança e
autenticação desde 2010. O que ela **não** faz é o objeto do experimento: com API REST, é o
desenvolvedor que lê a documentação e decide o que chamar, uma vez, no momento de programar.
Com ferramentas declaradas, é o **agente** que descobre em tempo de execução o que existe e
escolhe sem ninguém ler nada — e é exatamente aí que aparecem os fenômenos que interessam:
ferramenta bem nomeada vencendo ferramenta melhor, agente desistindo por preço, agente
concluindo a tarefa com metade do contexto que uma pessoa teria exigido. Nenhum desses
comportamentos existe quando um humano escolheu antes.

**O que a turma vai fazer quando testar isso em sala.** Duas rodadas, mesma tarefa, cronômetro
em ambas.

- *Rodada 1 — humano contra agente.* Metade da turma cumpre uma tarefa real ("encontre um lugar
  aberto às 22h que tenha opção vegetariana e anote o telefone") pela página; a outra metade
  cumpre pelo agente, usando as ferramentas. Mede-se tempo, taxa de acerto e — o dado mais
  interessante — **o que cada grupo consegue justificar**: quem usou a página sabe dizer por que
  escolheu; quem usou o agente, muitas vezes, não.
- *Rodada 2 — o porteiro ligado.* O professor liga a credencial e o preço no meio da sessão, sem
  avisar quais chaves são válidas. Alguns agentes da turma passam, outros recebem `402` ou
  resumo em vez do texto. A turma tem que descobrir, **pelo comportamento**, que o site mudou —
  e é aí que se discute a diferença entre bloqueio (visível) e degrau (invisível), que é o sinal
  precoce do cenário indesejável.

Ao final, cada grupo escreve uma linha no formato da roda: um efeito de segunda ordem que ele
observou e que não está neste mapa.

**O que seria um resultado que me faria mudar de ideia.** Dois, simétricos:

- *Se a porta de máquina não concluir a tarefa melhor que a página* — se o agente errar mais,
  demorar mais, ou precisar de mais intervenção humana do que uma pessoa usando a interface —,
  então R1 é entusiasmo, não disrupção: publicar ferramentas é custo sem contrapartida, e o
  mapa perde a raiz de onde saem `e1`, `e2` e `e3`. Este é o resultado que eu considero mais
  provável em 2026, e é justamente por isso que vale medir.
- *Se ninguém notar o degrau* — se o site passar a servir conteúdo parcial para agentes não
  credenciados e a turma concluir as tarefas sem perceber a diferença —, então `e4.1.1` deixa
  de ser efeito de terceira ordem e vira problema de hoje, e o cenário indesejável da seção 9
  não precisa esperar 2031. Neste caso o mapa não muda de conteúdo; muda de urgência, que é uma
  forma mais incômoda de estar errado.

## 11. Fontes

Dezenove fontes, todas abertas nesta sessão (17/09/2026) e todas respondendo no momento da
checagem. Onde a leitura falhou, está dito.

1. **Especificação MCP 2026-07-28 — blog oficial do Model Context Protocol.**
   `https://blog.modelcontextprotocol.io/posts/2026-07-28/`
   Sustenta: a virada para protocolo sem estado (*"MCP is transforming from a bidirectional
   stateful protocol into a request/response stateless protocol"*), roteamento por cabeçalho,
   resultados cacheáveis, extensões MCP Apps; os números de adoção (perto de meio bilhão de
   downloads/mês nos SDKs de primeira linha, 1 bilhão acumulado em TypeScript e Python) e os
   ~20% de consultas interativas vindas de agentes na Honeycomb. Governança na Linux
   Foundation. *Confiabilidade:* fonte primária do próprio padrão — autoritativa sobre o que a
   especificação diz, e **parte interessada** sobre adoção; os números de download são
   verificáveis em registries públicos, o de 20% é relato de terceiro citado por eles.

2. **TechCrunch — "Cloudflare's new policy pushes AI companies to pay for publishers'
   content" (01/07/2026).**
   `https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/`
   Sustenta: a data de 15/09/2026, a definição de *mixed-use crawler*, quem é atingido pelo
   novo padrão, a troca de Pay Per Crawl por Pay Per Use, os parceiros Ceramic.ai e You.com,
   os >50% de re-busca de páginas inalteradas, e a citação de Matthew Prince.
   *Confiabilidade:* imprensa especializada de referência, reportando anúncio de empresa —
   confiável para o fato do anúncio, herdando da Cloudflare os números.

3. **Cloudflare — "Content Independence Day, one year on" (relatório de bots, junho/2026).**
   `https://blog.cloudflare.com/agentic-internet-bot-report/`
   Sustenta: mais de 50% do tráfego já não-humano; 52% do crawling de IA para treino (contra
   22% na primavera de 2025); 36% de crawlers de uso misto; queda de até 40% no tráfego humano
   em categorias muito rastreadas em menos de um ano. *Confiabilidade:* medição própria numa
   fatia grande da web — a maior amostra disponível publicamente e, ao mesmo tempo, produzida
   por quem vende a solução. Tratada no texto como evidência **atribuída**, não como fato
   neutro. É a fonte de metade dos números da seção 3, e isso está declarado na seção 7.

4. **Cloudflare — "The crawl before the fall… of referrals" (01/07/2025).**
   `https://blog.cloudflare.com/ai-search-crawl-refer-ratio-on-radar/`
   Sustenta: a definição operacional de *crawl-to-refer ratio* e os valores medidos entre 19 e
   26 de junho de 2025 (Anthropic 70.900:1; Mistral 0,1:1), com a ressalva do próprio post de
   que o app do Claude não envia `Referer`. *Confiabilidade:* primária e metodologicamente
   explícita — diz como calcula. Usada para ordem de grandeza, não para dígito (ver seção 8).

5. **IETF — `draft-meunier-web-bot-auth-architecture-05` (02/03/2026).**
   `https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture`
   Sustenta: a arquitetura do Web Bot Auth sobre HTTP Message Signatures (RFC 9421), o
   cabeçalho `Signature-Agent`, a autoria (Thibault Meunier, da Cloudflare; Sandor Major, do
   Google), o status de Internet-Draft individual e a substituição por um draft de protocolo.
   *Confiabilidade:* fonte primária de padronização; o próprio documento avisa que não tem
   status formal. É a base da afirmação de que **rodou em produção antes de ser padrão**.

6. **Cooley — "Ninth Circuit Rules on AI Agent 'Access' to Third-Party Websites Under CFAA"
   (06/08/2026).**
   `https://www.cooley.com/news/insight/2026/2026-08-06-ninth-circuit-rules-on-ai-agent-access-to-third-party-websites-under-cfaa`
   Sustenta: a decisão de 04/08/2026, o raciocínio de que *"it was the user who 'accessed'
   Amazon's computers, with the help of Perplexity's AI agent"*, a distinção em relação a
   *Facebook v. Power Ventures*, e a orientação de que sites *"should not assume that the CFAA
   or similar state anti-hacking statutes will provide an effective remedy"*. *Confiabilidade:*
   análise de escritório de advocacia — secundária, mas reproduz o texto do acórdão e é
   assinada por quem responde profissionalmente pelo que escreve. Usada porque a fonte primária
   (item 7) não pôde ser lida.

7. **Nono Circuito — acórdão `26-1444` (04/08/2026), PDF oficial.**
   `https://cdn.ca9.uscourts.gov/datastore/opinions/2026/08/04/26-1444.pdf`
   Sustenta: nada diretamente. **Abri e não consegui extrair o texto** — a conversão voltou
   ilegível. Está listado porque foi aberto e porque é a fonte primária do que o item 6 relata;
   qualquer verificação séria deste mapa deve começar por ele. *Confiabilidade:* máxima, se
   lido; não lido nesta sessão.

8. **Chainalysis — "Inside x402: agentic payments adoption".**
   `https://www.chainalysis.com/blog/x402-agentic-payments-adoption/`
   Sustenta: mais de 100 milhões de transações acumuladas até o 1º trimestre de 2026;
   transações acima de US$ 1 passando de 49% para 95% do volume transferido; conversão de
   testador para pagante 4× melhor em seis meses; e a ressalva de que o crescimento inicial veio
   de especulação com meme coin. *Confiabilidade:* análise sobre dados on-chain, que são
   públicos e auditáveis; a empresa vende análise de blockchain, o que a torna interessada no
   tema mas não nos números, que qualquer um pode recontar.

9. **Chrome for Developers — "Lighthouse agentic browsing scoring".**
   `https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring`
   Sustenta: o que a categoria audita (*"how well your site is constructed for machine
   interaction through a set of deterministic audits"*), as quatro famílias de checagem
   (WebMCP via domínio CDP, árvore de acessibilidade, CLS, `llms.txt` na raiz), a exigência de
   Chrome 150+ e de origin trial para WebMCP, e o fato de não haver nota de 0 a 100.
   Atualização visível: 05/05/2026. *Confiabilidade:* documentação primária do fabricante.

10. **Chrome for Developers — "WebMCP".**
    `https://developer.chrome.com/docs/ai/webmcp`
    Sustenta: WebMCP como padrão **proposto**; as duas APIs (imperativa em JavaScript e
    declarativa sobre formulários HTML); origin trial a partir do Chrome 149; a flag
    `chrome://flags/#enable-webmcp-testing`; publicação em 18/05/2026 e atualização em
    07/08/2026. *Confiabilidade:* primária. Note que ela **não** menciona `navigator.modelContext`,
    que aparece em fontes secundárias; por isso esse nome não sustenta nenhuma afirmação aqui,
    embora conste na lista de tecnologias citadas.

11. **Not Human Search — página inicial.**
    `https://nothumansearch.ai/`
    Sustenta: os sete sinais e seus pesos (`llms.txt` 25, `ai-plugin.json` 20, OpenAPI 20, API
    estruturada 15, MCP 10, `robots.txt` 5, Schema.org 5), os **5.339 sites indexados** e a
    **média 38** no momento da consulta, e a afirmação de que o ranking orgânico é por
    prontidão e não por pagamento. *Confiabilidade:* primária sobre o próprio método; auto-declarada
    sobre cobertura — e conflitante com as outras versões do número (item 12 e seção 8).

12. **Not Human Search — repositório no GitHub.**
    `https://github.com/unitedideas/nothumansearch`
    Sustenta: a tabela de pesos do score, e a discrepância de cobertura — "8,000+ indexed sites"
    no título do repositório contra "1,900+ agent-first sites" no README. *Confiabilidade:*
    primária e datada por commits; usada aqui sobretudo como evidência de que o número não é
    estável.

13. **SE Ranking — estudo sobre `llms.txt` (novembro/2025).**
    `https://seranking.com/blog/llms-txt/`
    Sustenta: quase 300 mil domínios analisados; 10,13% de adoção; adoção menor entre os de
    tráfego alto (8,27%) do que entre os de tráfego médio (10,54%); e a conclusão metodológica
    (Spearman + XGBoost + SHAP) de que **remover o fator melhora a predição** — isto é, o
    arquivo não explica citação. *Confiabilidade:* estudo de empresa de ferramentas de SEO, com
    método declarado e amostra grande; interessada no mercado, mas a conclusão vai **contra** o
    que o mercado dela gostaria de vender, o que aumenta a credibilidade.

14. **Google Search Central — "AI features and your website".**
    `https://developers.google.com/search/docs/appearance/ai-features`
    Sustenta: *"You don't need to create new machine readable files, AI text files, or markup to
    appear in these features."* Última atualização visível na página: 10/12/2025.
    *Confiabilidade:* primária. **Não** sustenta a subseção de junho de 2026 sobre `llms.txt`
    que as buscas atribuem ao Google — ver seção 8, item 2.

15. **PPC Land — "15% of AI page fetchers in Europe reached disallowed URLs, TollBit finds"
    (14/08/2026).**
    `https://ppc.land/15-of-ai-page-fetchers-in-europe-reached-disallowed-urls-tollbit-finds/`
    Sustenta: ~15% dos buscadores de página de IA identificados na Europa alcançando URLs
    proibidas no 1º semestre de 2026; `ChatGPT-User`, `Bytespider` e `Youbot` atingindo páginas
    restritas em quase metade dos sites europeus que os nomeavam; e a diferença regional de
    bloqueio declarado (`Claude-User` 9% na Europa contra 26% na América do Norte).
    *Confiabilidade:* imprensa especializada reportando relatório de terceiro; o relatório é de
    empresa que vende cobrança de bot — mesma ressalva de procedência do item 3.

16. **TollBit — "State of the Bots".**
    `https://tollbit.com/bots/25q2/`
    Sustenta: a existência e a estrutura do relatório (seções sobre escala do scraping, bypass
    de `robots.txt` e tráfego de referência). **Abri e não obtive os números** — a página
    disponível traz índice e estrutura, não os dados. Por isso os números vieram do item 15.
    *Confiabilidade:* primária, mas inacessível nesta sessão.

17. **RSL — Really Simple Licensing.**
    `https://rslstandard.org/`
    Sustenta: a definição (*"RSL is an open standard that lets publishers define machine-readable
    licensing terms for their content"*), os modelos `pay per crawl`, `pay per inference` e
    atribuição, e a lista de apoiadores (Akamai, Cloudflare, Creative Commons, Fastly, Reddit,
    O'Reilly Media, Vox Media, Yahoo, Ziff Davis). *Confiabilidade:* primária do próprio padrão;
    **não traz dado de adoção real**, e o mapa não afirma nenhum.

18. **Meio & Mensagem — "Como as agências se estruturam para a era do GEO e AEO" (29/05/2026).**
    `https://www.meioemensagem.com.br/comunicacao/como-as-agencias-se-estruturam-para-a-era-do-geo-e-aeo`
    Sustenta: a nota sobre o Brasil no lado do mercado de comunicação — Monks, Dentsu Brasil,
    Song, Accenture, iD\TBWA e 404 Innovation Studio se reorganizando, e a frase *"Uma marca
    ausente nas respostas geradas por IA simplesmente não existe para uma parcela crescente do
    público."* *Confiabilidade:* imprensa setorial brasileira de referência; é reportagem de
    declarações de lideranças, **sem caso medido** — e o texto do mapa diz isso.

19. **Finsiders Brasil — "Agentes de IA podem fazer um Pix. Mas quem os autorizou?" (15/09/2026),
    artigo assinado por Elcio Calefi, da Open Finance Brasil.**
    `https://finsidersbrasil.com.br/pagamentos/pix/como-o-pix-pode-ser-usado-por-agentes-de-ia/`
    Sustenta: a nota sobre o Brasil no lado da infraestrutura — *"O desafio central não será
    ensinar a IA a fazer um Pix. Tecnicamente, conectar um agente a uma API de pagamentos é a
    parte mais simples"* — e as três peças ausentes (identidade do agente, mandato estruturado,
    aprovação por exceção), com OpenID Foundation e IETF apontados como foros.
    *Confiabilidade:* artigo de opinião de dirigente técnico de associação do setor — autoridade
    sobre o que falta padronizar, parte interessada sobre o caminho a seguir.

### O que ficou de fora das fontes, e por quê

Várias buscas retornaram material que **não** foi aberto ou não foi usado, e nenhuma
afirmação deste documento se apoia neles: relatórios de adoção de MCP em empresas da Fortune
500, números de participação de mercado de navegadores agênticos, projeções de receita
publicitária em assistentes, e a descontinuação do ChatGPT Atlas. Todos apareceram em fontes
secundárias consistentes entre si; nenhum foi verificado em primeira mão. O documento de
segurança do MCP publicado por agência do governo americano em junho de 2026 foi requisitado e
respondeu **403**, e por isso a discussão de segurança de MCP não entra aqui — é tema 2, de
todo modo.

## 12. Anexo — o levantamento bruto

### 12.1 Fase 1 — a entrevista, e o que foi suposto

Esta rodada foi executada **sem interlocutor**: as respostas às nove perguntas obrigatórias
vieram no enunciado da tarefa. A skill exige echo-back com confirmação explícita; não havendo
quem confirmasse, o recorte foi fechado unilateralmente e as suposições estão marcadas abaixo.
Isto é um desvio do procedimento e está registrado como tal.

```
RECORTE FECHADO — rodada sem interlocutor, confirmado por ausência
  tema ................ A web como plataforma sendo reprojetada para ser lida, admitida,
                        paga e descoberta por agentes em vez de por pessoas
  não é ............... (a) identidade e detecção de agentes pelo ângulo da segurança (tema 2);
                        (b) pagamento e comércio por agentes (tema 5);
                        (c) capacidade do modelo de linguagem
  horizonte ........... 2031
  região .............. global, com nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... o que já é comum em produto de massa (a régua da disciplina)
  viés ................ neutro
  falsificador ........ adoção além da maioria inicial (Rogers), ou tecnologia que não rompe nada
  raízes .............. 4
  navegação ........... sim (WebSearch + WebFetch; só entra na seção 11 o que foi aberto)
  SUPOSIÇÕES MINHAS ... 1. O número de raízes (4) não foi informado; adotei 4 por ser o teto da
                           skill e por ter encontrado quatro rupturas com ator e mecanismo
                           distintos. Com 3, R4 seria fundida em R1 (descoberta como
                           consequência da publicação de ferramentas) — e o mapa perderia o
                           efeito e10.1, que é dos mais úteis.
                        2. As três fronteiras foram propostas por mim a partir da seção
                           "Fronteira com os vizinhos" do enunciado do tema (§1.5 da skill).
                           A terceira (capacidade do modelo) é inteiramente minha.
                        3. "Nota sobre o Brasil" foi interpretada como uma subseção na seção 3
                           e um parágrafo na seção 6, não como recorte geográfico duplo — o
                           frontmatter diz `global`.
```

**Perguntas condicionais (§1.2 da skill).** Duas se aplicavam e foram respondidas por mim:

- *A fronteira colide com um vizinho?* Sim, com os temas 2 e 5, e a colisão é real e não
  cosmética: Web Bot Auth é objeto dos dois temas. Resolvi pelo **ângulo**: aqui é política de
  admissão de uma plataforma (quem entra, o que vê); lá é defesa contra agente hostil.
- *O horizonte é coerente com o tema?* Sim. Cinco anos para infraestrutura de protocolo é
  apertado mas não absurdo — HTTPS por padrão levou cerca de cinco anos para ir de minoria a
  norma depois do Let's Encrypt. Foi por isso que aceitei 2031 sem objeção, e é esse o caso
  histórico que sustenta o prazo de `e4`.

### 12.2 Fase 2 — a triagem completa, candidata por candidata

Dezesseis candidatas passaram pelos cinco testes. **T1** régua (muda o que é possível?);
**T2** substituição (sem isto, mudaria o objetivo ou só custo e prazo?); **T3** sinal datado nos
últimos 24 meses; **T4** precondição faltante nomeável; **T5** rotina (se sim, é maduro).

| Candidata | T1 | T2 | T3 | T4 | T5 | Three Horizons | Veredicto |
|---|---|---|---|---|---|---|---|
| API REST + OpenAPI | não | não | — | — | **sim** | H1 | MADURO — substrato |
| SDK de fabricante | não | não | — | — | **sim** | H1 | MADURO — substrato |
| Scraping / crawler | não | não | — | — | **sim** | H1 | MADURO — substrato |
| `robots.txt` | não | não | — | — | **sim** | H1 | MADURO — e desobedecido em ~15% dos casos |
| Schema.org / dados estruturados | não | não | — | — | **sim** | H1 | MADURO — substrato |
| `llms.txt` | **não** | não | sim | sim | quase | **H2−** | **RECUSADO** — reprova T1 |
| `ai-plugin.json` | não | não | não | — | — | H2− | RECUSADO — sinal parou; herdeiro do plugin de 2023 |
| AEO / GEO como disciplina | **não** | **não** | sim | sim | não | **H2−** | **RECUSADO** — reprova T1 e T2 |
| Model Context Protocol | sim | sim | sim | sim | **quase** | H2+ | EMERGENTE virando substrato — entra em R1 e R4, não é raiz sozinho |
| WebMCP | sim | sim | sim | sim | não | H2+/H3 | **DISRUPTIVO** — núcleo de R1 |
| NLWeb | sim | parcial | sim | sim | não | H2+ | EMERGENTE — não virou raiz; é uma implementação de R1 |
| Web Bot Auth | sim | sim | sim | sim | não | H2+ | **DISRUPTIVO** — núcleo de R2 |
| Bloqueio por padrão em CDN | parcial | sim | sim | sim | não | H2+ | **DISRUPTIVO por arranjo**, não por artefato — R2 |
| Pay Per Use / pay-per-inference | sim | sim | sim | sim | não | H3 | **DISRUPTIVO** — núcleo de R3 |
| x402 / HTTP 402 | sim | sim | sim | sim | não | H3 | EMERGENTE com risco alto — entra em R3, não é raiz |
| Índice de prontidão agêntica | sim | sim | sim | sim | não | H2+ | **DISRUPTIVO** — núcleo de R4 |

**Por que o MCP não é uma disrupção-raiz deste mapa**, sendo o item mais citado do enunciado do
tema: ele **quase aprova T5**. Meio bilhão de downloads por mês, SDKs de primeira linha,
governança em fundação neutra, especificação estável o bastante para uma revisão maior em
julho de 2026, servidor disponível em caminho de instalação padrão. Pela régua da skill, isso é
a assinatura de tecnologia que virou rotina — não de tecnologia cujo futuro está em aberto. O
que ainda tem futuro a mapear não é o MCP: é **o que ele torna possível fazer com um site**, e
isso é R1; e **como se descobre o que existe**, e isso é R4. Um mapa que pusesse "MCP" no centro
da roda estaria derivando consequências de um conector já instalado — exatamente o erro que a
Fase 2 existe para impedir.

**Por que o `llms.txt` foi recusado, por extenso.** É a recusa que mais importa, porque é o
emblema do tema. T1: um resumo em Markdown de conteúdo já publicado não muda o que é possível
fazer — muda o custo de o modelo achar a informação, que é velocidade. T2: tirando o arquivo,
um time competente mantém o mesmo objetivo e aceita, no máximo, pior desempenho de recuperação.
T3 passa (o arquivo tem sinal datado: auditoria no Lighthouse em maio de 2026). T4 passa (falta
alguém provar que ele funciona). T5 quase aprova. Mas **a reprovação em T1 encerra**, por regra
escrita da skill. A evidência empírica reforça: 10,13% de adoção, 0% entre os mil maiores
domínios por tráfego, efeito nulo sobre citação em modelo com SHAP, e o maior buscador
declarando que ignora. É H2−: faz o ofício de SEO durar mais um ciclo sem mudar o que ele é.

**A tentação que eu recusei.** Havia um recorte muito mais vendável — "a web está sendo
reescrita para máquinas, e `llms.txt` + MCP são a nova pilha". Ele produz um mapa bonito,
coerente e provavelmente errado nos dois itens que o sustentam. O recorte que sobrou é mais
chato e mais honesto: a pilha nova é de **admissão, preço e descoberta**, e a única peça
genuinamente nova na camada de publicação é a declaração de ferramentas no navegador.

### 12.3 Fase 5 — os efeitos que morreram

Oito efeitos do rascunho foram eliminados, com o `id` que tinham na árvore original e a prova
que os matou. Nenhum deles aparece na roda final.

| `id` de rascunho | Efeito | Prova | Por quê |
|---|---|---|---|
| `e2.2` | Marcas passam a produzir material cuja audiência declarada é um agente | **P3** | Já é verdade hoje: 10,13% dos domínios publicam `llms.txt`, e as agências brasileiras descrevem isso como reestruturação em curso desde maio de 2026. Foi para a seção 3. |
| `e3.2` | Mais sites adotam `llms.txt` e formatos legíveis por máquina | **P1** | Mesmidade pura: mesmo ator, mesmo mecanismo, só volume. É "mais X". Fundido com o pai. |
| `e4.3` | Todo agente que acessa a web passa a ter identidade verificada | **P2 + P4** | Velocidade sem caso comparável (nenhum padrão de identidade na web chegou a "todo" em cinco anos — nem SPF, nem DNSSEC, nem DANE), e força contrária nomeada: 15% de bypass medido e a decisão do Nono Circuito. |
| `e6.2` | Navegadores passam a assinar toda requisição de usuário | **P5** | Precondição única e enorme: depende de os quatro motores de navegador concordarem, e a única evidência atual é um origin trial num deles. |
| `e7.3` | A publicidade gráfica desaparece da web | **P2** | Nenhum meio publicitário desapareceu em cinco anos — nem o classificado impresso, que levou vinte. O efeito correto é migração (`e2`), não desaparecimento. |
| `e8.2` | Micropagamento por artigo vira comum entre pessoas | **P2 + P3** | O micropagamento acumula trinta anos de fracasso, e o dado atual não o socorre: o volume do x402 é grande em transações e pequeno em dinheiro, com origem especulativa declarada pela própria análise. |
| `e10.3` | O índice de prontidão agêntica vira o PageRank da era dos agentes | **P6 (litania) + P4** | Verdadeiro como manchete e sem mecanismo abaixo: o maior índice do gênero declarava 5.339 sites e média 38, e o incumbente já embutiu a régua no Lighthouse. Virou sinal fraco na seção 6, não efeito. |
| `e11.2` | Marcas deixam de existir para o consumidor | **P1** | Extrapolação linear com adjetivo. O efeito defensável é perder **o instante da escolha** (`e11`), não deixar de existir. |

**Rebaixamentos de confiança** (o efeito ficou, a confiança caiu):

- `e1`, de alta para **media** — por **P4**: o anunciante que perde o momento de exposição pode
  simplesmente não publicar ferramentas, e a estrutura de incentivo é de dilema do prisioneiro.
- `e7`, de alta para **media** — por **P2**: o caso comparável (paywall) levou uma década, e o
  caso comparável alternativo (micropagamento) nunca chegou.
- `e10.1`, de media para **baixa** — por **P3 parcial**: a otimização por checklist já é
  observável hoje em quem vende prontidão agêntica, e o efeito enunciado (o score se descolar
  da utilidade) é a parte que ainda não se mediu. Manter em media seria confundir a evidência
  do presente com a confiança na inferência.

Registro de calibração, porque ele é incômodo e não é acidente: **toda a segunda e a terceira
ordem deste mapa saíram em `confianca: baixa`**, e só um efeito do documento inteiro está em
alta. Não é modéstia de formulário — é o que sobra depois de as seis provas passarem. Um mapa
cuja segunda ordem fosse majoritariamente media significaria que a Fase 5 foi frouxa com os
netos dos efeitos que ela apertou nos pais.

**Cota de dano, por raiz:** R1 perdeu `e2.2` e `e3.2` e teve `e1` rebaixado; R2 perdeu `e4.3` e
`e6.2`; R3 perdeu `e7.3` e `e8.2` e teve `e7` rebaixado; R4 perdeu `e10.3` e `e11.2`. A cota
mínima da skill (um efeito eliminado ou rebaixado por raiz) foi cumprida em todas as quatro, com
folga. **A bateria derrubou coisas** — o que não quer dizer que tenha derrubado as certas.

### 12.4 Rodadas descartadas e caminhos abandonados

**Rodada A — o mapa por setor.** A primeira tentativa organizava tudo por setor afetado
(imprensa, varejo, serviço público, educação). Abandonada porque o enunciado pede mapa a partir
de uma inovação, não de um setor, e porque o resultado era quatro mapas rasos em vez de um
fundo: os efeitos de segunda ordem ficavam idênticos em todos os setores ("o setor X perde
tráfego"), o que é sinal de que a partição estava errada.

**Rodada B — três raízes com R4 dentro de R1.** Tentei tratar descoberta como consequência da
publicação de ferramentas. Não sobreviveu ao teste da própria regra de parada: o ator muda (de
quem publica para quem indexa) e o mecanismo muda (de declarar capacidade para ranquear
capacidade). Duas mudanças de uma vez significam raiz separada, não filho.

**Rodada C — uma raiz "a web se fecha" cobrindo R2 e R3.** Parecia elegante e era um erro de
categoria: fechar a porta (admissão) e cobrar pela entrada (preço) têm atores diferentes — a
rede de entrega e o editor —, mecanismos diferentes — credencial e tarifa — e sentidos
econômicos opostos, já que o bloqueio existe para criar escassez e a cobrança para vendê-la.
Separadas, elas geram o achado de R4 contra R3 que aparece no comentário da seção 5.

**Caminho abandonado — MCP-UI / MCP Apps como raiz própria.** A extensão MCP Apps, formalizada
na especificação de julho de 2026, permite que a resposta de uma ferramenta carregue interface.
Isso é potencialmente o efeito mais interessante de todo o tema para quem projeta interação — a
interface voltando **dentro** da resposta do agente, desenhada pelo serviço e renderizada pelo
cliente. Não virou raiz nem efeito porque eu não consegui abrir nada além da menção na
especificação: sem exemplo em uso, sem número, sem data de adoção, entraria como entusiasmo. É
a lacuna mais relevante deste levantamento e o primeiro lugar que eu olharia numa próxima
rodada.

**Caminho abandonado — o ângulo da acessibilidade como raiz.** A árvore de acessibilidade ser
"a visão de máquina da página" é um achado forte e virou `e3`. Chegou a ser considerada raiz, e
não é: a tecnologia (ARIA, HTML semântico) é madura e reprova T1 com folga. O que é novo é o
**consumidor** da árvore. Tecnologia madura participando de uma disrupção sem ser a disrupção —
o caso que a §2.3 da skill obriga a reconhecer.

### 12.5 Buscas que não deram em nada

- **Adoção real de WebMCP em produção.** Fontes secundárias listam Expedia, Booking.com,
  Shopify, Etsy, Instacart, Target e outros como participantes de origin trial. Nenhuma página
  primária aberta confirma, e nenhuma dessas empresas aparece no mapa.
- **Receita efetiva de licenciamento de conteúdo para IA.** Procurei um editor com receita de
  uso por máquina declarada em balanço. Não achei nenhuma. É por isso que `e7` está em media, e
  não em alta, apesar de sinal forte.
- **Dados brasileiros de tráfego de bot.** Procurei participação de tráfego não-humano em sites
  brasileiros e política de bloqueio dos grandes veículos nacionais. Nada primário. A nota sobre
  o Brasil ficou restrita ao que foi possível abrir: o lado das agências e o lado da
  infraestrutura de pagamento.
- **O documento de segurança de MCP do governo americano** (junho/2026) respondeu **403**.
- **A página de atualizações da documentação do Google Search Central** respondeu **404** — ver
  seção 8, item 2.

### 12.6 As quatro perguntas do teste cruzado

A skill obriga a responder, sobre a própria rodada, as quatro perguntas com que a turma avalia
as skills — e a mostrar **onde** cada uma aconteceu.

1. **Fez perguntas antes de rodar?** Sim, com ressalva grave. As nove perguntas obrigatórias
   foram respondidas no enunciado, e o bloco `RECORTE FECHADO` está em **12.1** — mas o
   echo-back não teve confirmação humana, porque não havia humano. Três suposições minhas estão
   marcadas lá, inclusive o número de raízes. **Numa rodada com interlocutor, esta resposta
   seria "sim"; nesta, o correto é "sim, e o contrato foi fechado por mim".**
2. **Separou novidade de comum, e recusou o comum?** Sim. Cinco tecnologias classificadas como
   maduras e três **recusadas por escrito** — `llms.txt` (reprova T1), AEO/GEO (reprova T1 e T2)
   e `ai-plugin.json` (reprova T3) —, com o teste que reprovou cada uma nomeado na tabela de
   **12.2** e a recusa do `llms.txt` argumentada por extenso, contra o próprio enunciado do
   tema, que o apresenta como emblema.
3. **Duvidou do próprio resultado?** Sim. As seis provas estão aplicadas na seção **7**; oito
   efeitos morreram e dois foram rebaixados, com `id` e prova, em **12.3**. A CLA (P6) produziu
   o achado que mais incomoda: o mapa inteiro repousa sobre a visão de que acesso é mercadoria,
   e há duas visões concorrentes vivas que invertem o sinal de toda a R3. E a seção **8** registra
   cinco erros de apuração pegos por atrito externo, inclusive um em que a fonte primária não
   pôde ser lida.
4. **Saiu no formato?** Sim — 12 títulos literais, bloco `roda:` válido com três níveis e ids
   hierárquicos, contadores conferidos contra a árvore **depois** dos cortes, 19 fontes todas
   abertas e todas respondendo. A saída da autochecagem está em **12.7**.

### 12.7 Autochecagem — a saída colada

Rodada sobre o arquivo final, com `references/verificar.py` da disciplina e com o script da
própria skill. O resultado está no arquivo `verificacao.txt`, neste mesmo diretório, e é
reproduzido a seguir.

```
$ grep -c "^## " tendencia-a-internet-agentica-quando-o-usuario-e-uma-maquina.md
12

$ python3 <script da §6.2 da skill>
faltam: nada
efeitos por ordem: {1: 12, 2: 17, 3: 17}
ordem 3 com confianca alta: 0 (cota: no maximo 1)
contadores batem: True

$ python3 futurizacao-giordano/references/verificar.py tendencia-...md --links
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 17 (frontmatter diz 17)
efeitos ordem 3: 17 (frontmatter diz 17)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 17 [('e1.1.1', 2033), ('e1.2.1', 2032), ('e2.1.1', 2033), ('e3.1.1', 2032), ('e4.1.1', 2032), ('e4.2.1', 2033), ('e5.1.1', 2033), ('e5.2.1', 2033), ('e6.1.1', 2032), ('e7.1.1', 2032), ('e7.2.1', 2033), ('e8.1.1', 2033), ('e9.1.1', 2034), ('e10.1.1', 2032), ('e10.2.1', 2032), ('e11.1.1', 2033), ('e12.1.1', 2033)]
confiança ordem 1: alta 1 · media 5 · baixa 6
confiança ordem 2: alta 0 · media 0 · baixa 17
confiança ordem 3: alta 0 · media 0 · baixa 17
links da seção 11: 19/19 respondem (frontmatter diz fontes: 19)
RESULTADO: ok
```

Duas leituras obrigatórias dessa saída, que o script imprime e não interpreta:

- **`prazo > horizonte em ordem 3: 17`** — os dezessete efeitos de terceira ordem caem entre
  2032 e 2034, fora do horizonte de 2031. O verificador permite e manda declarar: está
  declarado aqui e no fim da seção 5. É consequência da regra de calibração, não descuido —
  datar terceira ordem dentro do horizonte seria fingir precisão sobre o elo mais mediado.
- **`links da seção 11: 19/19 respondem`** — os dezenove foram abertos nesta sessão, não só
  testados por código de resposta. Dois deles (o acórdão do Nono Circuito e o relatório da
  TollBit) foram abertos e **não puderam ser lidos**; ambos estão marcados como tal na seção 11
  e nenhuma afirmação do mapa se apoia neles.


### 12.8 Nota de método, e o que este mapa não pode fazer

A **Roda dos Futuros** (Glenn, 1971) é a espinha, e a regra de parada é minha e está declarada:
expandir um nó só se o filho mudar de **ator** ou de **mecanismo**; parar o galho por mesmidade,
por duas precondições simultâneas, por já ser presente, ou por precisar de duas raízes. Os
quatro critérios foram usados nesta rodada e cada um matou pelo menos um nó — o registro está
em 12.3 e no comentário em prosa da seção 5.

**Three Horizons** (Hodgson, Curry, Leicester, Sharpe, Lyon e Fazey, 2006) entrou na Fase 2, e
foi útil exatamente onde se esperava: o H2− nomeou o `llms.txt` e o AEO, que são as duas coisas
que quase todo material sobre este tema chama de tendência.

**Causal Layered Analysis** (Inayatullah, 1998, *Futures* 30(8):815–829) entrou na Fase 5 e deu
o achado de maior valor do documento, que é o da camada de **mito**: o vocabulário inteiro da
web — visita, página, endereço, sessão — vem da metáfora da hospitalidade, e a internet agêntica
substitui a visita pelo pedido atendido. Quem projeta mídia e interação foi formado na primeira
metáfora, e esse é o custo real do tema, maior que qualquer protocolo.

O que **nenhum dos três** faz: nenhum atribui probabilidade, nenhum é validado empiricamente, e
nenhum impede um mapa internamente coerente de estar inteiramente errado. Os limites de cada
método, com autoria e data, estão em `ESTUDO.md` — e não foram reescritos de memória aqui.
