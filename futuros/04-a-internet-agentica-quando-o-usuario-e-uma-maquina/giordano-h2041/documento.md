---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 15
efeitos_ordem_2: 20
efeitos_ordem_3: 14
tecnologias_citadas: [Model Context Protocol, WebMCP, document.modelContext, llms.txt, robots.txt, RSL (Really Simple Licensing), pay per crawl, HTTP 402, x402, Web Bot Auth, HTTP Message Signatures (RFC 9421), Signature-Agent, Ed25519, Cloudflare AI Crawl Control, Cloudflare Monetization Gateway, AWS CloudFront, AWS WAF, Amazon Bedrock AgentCore Payments, USDC, Base, Not Human Search, Chrome Lighthouse Agentic Browsing, ai-plugin.json, OpenAPI, Schema.org, NLWeb, IAB Tech Lab AAMP, Ad Context Protocol, Client ID Metadata Documents, OAuth 2.1, Cloudflare Radar, Perplexity Comet, ChatGPT Atlas]
fontes: 22
confianca: media
experimento: "A mesma peça, quatro portas — servir uma reportagem em quatro regimes de acesso e medir o que o agente e a pessoa ganham e perdem em cada um"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em 3 de junho de 2026 o tráfego automatizado passou o humano no tráfego HTML medido pela
Cloudflare — 57,5% contra 42,5% — e a web deixou de ser, na média, um lugar para onde pessoas
vão. Este mapa segue três rupturas que decorrem disso até 2041, e recusa como raiz a que mais
aparece na imprensa (a otimização para IA, o "AEO"), porque ela é consequência de uma tecnologia
que já está em maioria. A primeira ruptura é a **declaração**: o site deixa de ser só uma página
e passa a se oferecer como conjunto de ferramentas invocáveis — Model Context Protocol no
servidor, WebMCP (`document.modelContext`, Draft Community Group Report de 10 de setembro de
2026) dentro do navegador — o que transfere o lugar onde o valor é entregue da interface para a
chamada de função, e transforma a descrição de uma ferramenta em peça de redação. A segunda é a
**cobrança**: o código HTTP 402, dormente desde 1997, virou infraestrutura de borda na AWS e na
Cloudflare em julho de 2026, e o `robots.txt` está deixando de ser um pedido de favor para virar
uma tabela de preços por caminho — com a ressalva medida de que o comprador ainda não apareceu
(cerca de US$ 28 mil por dia em volume real de x402 em março de 2026, metade disso transação
artificial). A terceira é a **perda de isonomia da URL**: desde 15 de setembro de 2026 — três
dias depois desta data — o mesmo endereço passa a devolver coisas diferentes conforme o
propósito declarado de quem pede, porque a Cloudflare passou a bloquear por padrão, em domínios
novos e em páginas com anúncio, as categorias *Training* e *Agent*, mantendo *Search* liberada. O
achado que os três ramos compartilham não é o de que a web se fecha: é o de que **a capacidade de
existir para uma máquina e a capacidade de cobrar por isso ficaram, as duas, na mão dos mesmos
intermediários** — a plataforma de publicação e a rede de borda. Para quem projeta mídia e
interação, a consequência de primeira ordem é dupla superfície e dupla métrica; a de terceira é
que o que o agente sabe do mundo passa a refletir quem pôde se declarar e pôde ser pago.

## 2. O tema

O tema é a web sendo reprojetada para um visitante que não tem olhos. Não é a mesma coisa que
"IA na busca" nem que "agentes autônomos": é a camada de baixo — protocolo, descoberta,
autenticação e cobrança — sendo reescrita sob a suposição de que o principal consumidor de uma
página é um programa. Três objetos concretos delimitam o assunto: o **protocolo** pelo qual um
site se oferece a um agente (MCP, WebMCP, `ai-plugin.json`, OpenAPI); a **política de acesso**
que decide se aquele agente entra, e como ele prova quem é (robots.txt, Web Bot Auth, a
classificação por propósito); e a **contrapartida** pelo acesso (pay per crawl, RSL, x402,
licença bilateral).

Onde isso encosta em mídia e interação: em tudo o que a disciplina chama de interface. Trinta
anos de ofício — hierarquia visual, affordance, funil, teste A/B, viewability de anúncio — foram
construídos sobre a premissa de que existe alguém olhando e de que a atenção dessa pessoa é
mensurável e vendável. A premissa não some, mas deixa de ser majoritária: a página continua
existindo para a pessoa e passa a ser, ao mesmo tempo, um endpoint para uma máquina que não olha,
não rola, não vê anúncio e não volta. O padrão de viewability do IAB — 50% dos pixels na tela por
um segundo — é uma definição que pressupõe uma retina; o mesmo IAB publicou, em janeiro de 2026,
um protocolo para agentes transacionarem anúncio entre si. As duas coisas convivem no mesmo
documento de padrões, e essa convivência é exatamente o objeto deste mapa.

Por que isto merece um mapa de futuro em vez de um levantamento de estado da arte: porque o
estado da arte aqui tem validade de um trimestre e a pergunta que importa não é técnica. O
`llms.txt` cresceu 8,8 vezes em doze meses e 97% dos arquivos não receberam uma única requisição
em maio de 2026 — publicar padrão é barato, ser lido é outra coisa. Qual protocolo vence é
pergunta de estado da arte. **Quem paga pela página que ninguém vê, quem decide se o agente
entra, e o que acontece com o acervo de quem não conseguiu se declarar** são perguntas de futuro,
e é delas que saem consequências de segunda e terceira ordem para o ofício de quem projeta.

Uma delimitação, porque três dos dezenove temas da disciplina encostam neste. **Identidade e
detecção de agentes** é o tema 2: aqui a assinatura criptográfica entra só como condição de
acesso, não como problema de segurança. **Pagamento e comércio por agentes** é o tema 5: aqui o
402 entra como preço do conteúdo, não como meio de compra. **Observabilidade e avaliação** é o
tema 3: o registro do que o agente leu aparece em e9.1 e é explicitamente devolvido àquele mapa.
O objeto deste é a web como plataforma sendo reprojetada para máquinas.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**O tráfego já virou.** Em 3 de junho de 2026 a Cloudflare mediu requisições automatizadas em
57,5% do tráfego HTML, contra 42,5% de humanos — a primeira vez que máquinas são maioria. O
mesmo levantamento registra o tráfego agêntico crescendo cerca de 7.851% ano a ano e a atividade
automatizada expandindo cerca de oito vezes mais rápido que a humana ([18]). Este é o dado que
funda o tema, e é também o mais frágil da minha cadeia: eu o li em quem cita a Cloudflare, não no
Radar (ver seção 8).

**O protocolo existe, tem governança e tem número.** O MCP publicou em 28 de julho de 2026 a
maior revisão desde o lançamento: protocolo **sem estado**, sem handshake de inicialização e sem
session id, com nome de método e de ferramenta viajando em cabeçalho HTTP — explicitamente para
que gateway e WAF consigam rotear —, e com listas de ferramentas cacheáveis com TTL. É uma
especificação que deixou de ser desenhada para um cliente de desktop e passou a ser desenhada
para infraestrutura de borda. No mesmo release, autorização alinhada a OAuth 2.0/OpenID,
`Client ID Metadata Documents` no lugar do registro dinâmico de cliente, e depreciação de Roots,
Sampling e Logging com janela de doze meses ([5]). Do lado do tamanho: 9.652 registros de
servidor mais recente na API do registro oficial em 24 de maio de 2026, 15.926 repositórios com o
tópico `mcp-server` no GitHub na mesma data, e — pela pesquisa Stacklok — 41% das organizações de
software com algo em produção (29% produção limitada, 12% ampla) ([14]).

**A declaração chegou ao navegador.** O WebMCP é um *Draft Community Group Report* do Web Machine
Learning CG datado de **10 de setembro de 2026** — dois dias antes desta rodada. Ele define
`document.modelContext` com `registerTool()`, `getTools()` e `executeTool()`: a página registra
funções JavaScript com descrição em linguagem natural e schema JSON, e o agente as invoca. O
objetivo declarado no documento é "fluxos colaborativos em que usuário e agente trabalham juntos
na mesma interface web, aproveitando a lógica de aplicação existente e mantendo contexto
compartilhado e controle do usuário". O texto diz de si mesmo que **não é padrão do W3C nem está
na trilha de padrões** ([6]).

**A cobrança saiu do papel.** O pay per crawl da Cloudflare usa o 402 literalmente: o crawler
apresenta credencial de pagamento no cabeçalho e recebe 200, ou recebe 402 com o preço. A
autenticação é Web Bot Auth — par de chaves Ed25519 e assinatura de mensagem HTTP — e a
Cloudflare atua como *merchant of record* ([1]). O changelog de 10 de dezembro de 2025 mostra a
coisa amadurecendo em três direções que importam: **preço por caminho** (a home e a navegação
podem ser gratuitas, `/robots.txt` e `/sitemap.xml` são sempre gratuitos), **onze códigos de erro
padronizados** para o crawler tratar programaticamente, e — o detalhe mais revelador — um
endpoint autenticado, `GET https://crawlers-api.ai-audit.cfdata.org/charged_zones`, para que o
crawler **descubra quais domínios cobram** e monte a fila de rastreio de acordo ([2]). O preço
mínimo documentado é US$ 0,001 por crawl, sem máximo documentado ([3]).

**O 402 virou infraestrutura de borda.** Em julho de 2026 a AWS tornou o x402 geralmente
disponível no CloudFront e no WAF sem custo adicional além do WAF, e a Cloudflare abriu lista de
espera do Monetization Gateway para cobrar por páginas, APIs, datasets e **ferramentas MCP**. A
liquidação é em stablecoin (USDC na Base), sub-segundo, com custo por transação abaixo de uma
fração de centavo; a x402 Foundation foi criada sob a Linux Foundation em abril de 2026. A
Coinbase declara 169 milhões de pagamentos, 590 mil compradores e 100 mil vendedores no primeiro
ano ([9]).

**O licenciamento tem coletivo.** O RSL, lançado em 10 de setembro de 2025, põe termos de licença
legíveis por máquina dentro do `robots.txt`, com três modelos: livre/atribuição, pay-per-crawl e
**pay-per-inference** — pagamento quando o modelo usa o conteúdo para gerar a resposta, não
quando o lê. Junto nasceu o RSL Collective, entidade sem fins lucrativos de gestão coletiva
modelada em ASCAP e BMI, com adesão gratuita e não exclusiva. Apoiadores no lançamento: Reddit,
Yahoo, People Inc., Internet Brands, Ziff Davis, Fastly, Quora, O'Reilly Media, Medium, The Daily
Beast, wikiHow, Raptive, Ranker e Evolve Media ([8]).

**A política de acesso virou default.** Em 1º de julho de 2026 a Cloudflare anunciou três
categorias — **Search** (indexa para responder depois), **Agent** (age em tempo real por uma
pessoa) e **Training** (absorve para treinar) — e a decisão que muda o terreno: a partir de **15
de setembro de 2026**, em domínios novos, contas novas e contas gratuitas que não mexeram na
configuração, *Training* e *Agent* passam a ser **bloqueados por padrão nas páginas que exibem
anúncio*, e *Search* continua liberada. A justificativa publicada é explícita: o anúncio sinaliza
que o objetivo do negócio é atenção humana ([4]).

**A identidade do bot tem mecanismo.** O Web Bot Auth define que clientes automatizados assinem
as requisições com chave privada (RFC 9421), com `keyid`, `created`, `expires` e
`tag="web-bot-auth"`, e um cabeçalho opcional `Signature-Agent` para descoberta da chave. O draft
de arquitetura que abri é a versão 05, de 2 de março de 2026, **individual e já substituída** por
`draft-meunier-webbotauth-httpsig-protocol` — ou seja: está em produção na Cloudflare desde julho
de 2025 e ainda não foi adotado por grupo de trabalho do IETF ([7]). Registro o detalhe que mais
importa para este mapa: o draft **não distingue** crawler autônomo de agente agindo por delegação
de um usuário — os dois são "agentes" que precisam se identificar. A distinção que a Cloudflare
já usa comercialmente ainda não existe na norma.

**A jurisprudência começou a existir.** Em 4 de agosto de 2026 o Nono Circuito derrubou a liminar
que a Amazon obtivera contra o Comet, da Perplexity, com um raciocínio que vale mais que o
resultado: quando o usuário manda o assistente fazer algo na Amazon, **quem acessa o computador é
o usuário**, com ajuda do assistente — logo, não há acesso não autorizado sob a CFAA pela
Perplexity. O processo de mérito continua em São Francisco e cabe recurso ([19]).

**A descoberta para máquina já tem instrumento.** O Not Human Search indexa e pontua sites de 0 a
100 por sinais de prontidão agêntica — `llms.txt`, `ai-plugin.json`, OpenAPI, MCP, Schema.org,
compatibilidade com bots. Aberto em 12 de setembro de 2026, o índice mostra **5.316 sites e score
médio 38** ([16]). E a auditoria entrou na ferramenta que todo desenvolvedor já usa: o Chrome
Lighthouse 13.3.0 moveu a categoria **Agentic Browsing** para a configuração padrão em 7 de maio
de 2026 ([13]).

**A publicidade já tem protocolo para agentes.** O IAB Tech Lab publicou o AAMP (Agentic
Advertising Management Protocols) v1.0 em 28 de janeiro de 2026, sobre dois padrões de novembro
de 2025 — Agentic Audiences (troca de sinais de intenção entre agentes) e ARTF — e mantém desde
setembro de 2024 o CoMP, voltado justamente a monetizar a ingestão de conteúdo por LLM ([15]).

### 3.2 O que existe e ainda não funciona

**O `llms.txt` é o caso resolvido de padrão sem consumidor.** De junho de 2025 a maio de 2026 os
arquivos saltaram de 4.088 para 36.120 em três milhões de sites monitorados — 8,8 vezes. No mesmo
mês, log de servidor de 137 mil domínios mostra **97% dos arquivos com zero requisição**, e bots
de recuperação de IA respondendo por 1,1% das requisições que chegaram ([12]). Em 15 de junho de
2026 o Google escreveu na documentação, com todas as letras, que "a Busca do Google os ignora" e
que criá-los não ajuda nem atrapalha ([13]). Guardem este caso: ele é a **classe de referência**
de quase todo prazo deste mapa.

**O micropagamento não tem comprador.** O contraste é a medida mais útil deste mapa. De um lado,
os números acumulados: mais de 165 milhões de transações x402 em cerca de 69 mil agentes ativos
até abril de 2026, com volume acumulado em torno de US$ 50 milhões ([22]). De outro, o volume
corrente: em março de 2026 o protocolo movia **cerca de US$ 28 mil por dia** em 131 mil
transações, com ticket médio de US$ 0,20; um pico de fevereiro com 3,8 milhões de transações e
US$ 2 milhões foi atribuído a teste de infraestrutura, e cerca de metade do volume observado é
autonegociação — mesma carteira nas duas pontas — ou experimento com memecoin. O ecossistema é
avaliado em torno de US$ 7 bilhões contra esses US$ 28 mil diários, e o analista citado resume:
"os comerciantes que o x402 foi feito para servir ainda são raros"; a comparação histórica
oferecida — Lightning, BAT — é desfavorável ([10]). Pesquisadores da Artemis chamam o surto de
"ainda principalmente uma miragem", e uma auditoria da Sherlock estimava cerca de US$ 600 milhões
anualizados em 19/03/2026 — expressivo para um protocolo de dez meses, pequeno diante das
projeções de trilhões para 2030 ([22]). Infraestrutura pronta, economia ausente.

**A contabilidade do micropagamento não existe.** Arquitetos corporativos citados na cobertura do
lançamento apontam o buraco: em regime de IVA, o vendedor precisa calcular imposto por jurisdição
do comprador — e o comprador aqui é uma carteira anônima ([9]).

**A classificação por propósito não sobrevive ao bot misto.** Como o Googlebot rastreia para busca
e para treino no mesmo agente, bloquear *Training* bloqueia o Googlebot naquelas páginas a menos
que o dono do site abra exceção explícita ([4] e a cobertura em torno dele). A taxonomia é limpa
no dashboard e suja no mundo.

**O ChatGPT Atlas foi descontinuado em 9 de agosto de 2026**, com as capacidades agênticas de
navegação movidas para dentro do ChatGPT e do Codex. Vale como aviso contra tomar produto por
tendência: o navegador agêntico como categoria de produto separada não se firmou; a função
migrou.

**O WebMCP não está estável.** O documento diz de si que não é padrão e lista questões em aberto;
o objeto que a imprensa técnica descreve (`navigator.modelContext`) não é o que a especificação
define (`document.modelContext`) ([6]).

### 3.3 Quem constrói

| Ator | O que põe de pé | Interesse |
|---|---|---|
| **Anthropic** | MCP e o registro; revisão de 28/07/2026 | que o conector seja único e neutro — e que o agente entre |
| **Google (Chrome)** | WebMCP com a Microsoft; Lighthouse auditando prontidão agêntica; Busca que ignora `llms.txt` | manter o navegador como mediador e a Busca como régua |
| **Microsoft** | coautoria do WebMCP; NLWeb, que expõe o site como servidor MCP | ser a camada de interoperabilidade da "web agêntica aberta" |
| **Cloudflare** | pay per crawl, AI Crawl Control, Web Bot Auth, taxonomia Search/Agent/Training, Monetization Gateway | virar o pedágio e o cartório da web de máquinas |
| **AWS** | x402 no CloudFront e no WAF; AgentCore Payments | vender a borda e a carteira do agente |
| **RSL Collective** | licença dentro do robots.txt; gestão coletiva | dar aos pequenos um balcão único de negociação |
| **IAB Tech Lab** | AAMP, Agentic Audiences, CoMP | preservar a cadeia publicitária num mundo sem retina |
| **IETF / W3C** | Web Bot Auth (individual, não adotado); WebMCP (CG, fora da trilha); grupos de identidade, memória e conformidade de agentes | transformar default de empresa em norma — devagar |
| **Perplexity, OpenAI** | agentes que navegam de fato | que o agente seja tratado como o usuário, não como bot |

### 3.4 Os números que descrevem a adoção hoje

| Número | Valor | Data | Fonte |
|---|---|---|---|
| Tráfego HTML automatizado | 57,5% (humano 42,5%) | 03/06/2026 | [18], citando Cloudflare Radar |
| Crescimento do tráfego agêntico | ~7.851% a/a | 2026 | [18], citando HUMAN Security |
| Servidores no registro oficial de MCP | 9.652 | 24/05/2026 | [14] |
| Repositórios com tópico `mcp-server` | 15.926 | 24/05/2026 | [14] |
| Organizações de software com MCP em produção | 41% (29% limitada + 12% ampla) | 2026 | [14], pesquisa Stacklok |
| Arquivos `llms.txt` publicados | 36.120 (de 4.088 em jun/2025) | maio/2026 | [12] |
| `llms.txt` com zero requisição | 97% | maio/2026 | [12] |
| Volume real diário do x402 | ~US$ 28 mil, ticket médio US$ 0,20 | março/2026 | [10] |
| Preço mínimo por crawl na Cloudflare | US$ 0,001 | 2026 | [3] |
| Sites no índice do Not Human Search | 5.316, score médio 38/100 | 12/09/2026 | [16] |
| Crawl-to-refer (Anthropic) | 2.237:1 | julho/2026 | [17] |
| Crawl-to-refer (OpenAI) | 217:1 | julho/2026 | [17] |
| Crawl-to-refer (Google) | 4,6:1 | julho/2026 | [17] |
| Requisições de crawler de IA para treino / para busca | 51,8% / 9,3% | 2026 | [18] |
| Queda de pageviews humanos da Wikipédia | ~8% em um ano | mar–ago/2025, reclassificado | [11] |
| Referral de chatbot vs buscador | ~96% menor; ~1% clica na fonte | 23/04/2026 | [20], relatório Akamai |

### 3.5 A nota sobre o Brasil

O recorte deste mapa é global, mas três coisas mudam de figura aqui. **Primeira:** a Wikimedia
descobriu o problema de detecção de bot justamente investigando tráfego anômalo **vindo do
Brasil** em maio de 2025 — bots construídos para parecer gente, contados como gente ([11]). O
Brasil aparece na infraestrutura de medição da web primeiro como ruído. **Segunda:** a camada de
cobrança é operada por Cloudflare, AWS e Coinbase, liquidada em USDC, com a Cloudflare como
*merchant of record*: um veículo brasileiro que queira cobrar por acesso de máquina precifica em
dólar, arrecada por intermediário estrangeiro e resolve tributação depois — e o furo de IVA
apontado em [9] é ainda maior num regime de ISS/ICMS/IBS. **Terceira:** o material que mais
importa para que um agente saiba algo sobre o Brasil — Diário Oficial, repositórios
universitários, portais `.gov.br`, acervos de veículos regionais — é exatamente o material que
não está atrás de plataforma que entregue prontidão agêntica pronta. Se a declaração vira default
de plataforma (e3), quem publica fora dela some por omissão (e3.1), e o resultado é e3.1.1: o
agente conhece o Brasil pelo que terceiros indexaram dele.

## 4. As disrupções-raiz

Antes das três que entram, **as recusas** — pelo critério do §2 da skill, tecnologia madura não
entra como raiz.

- **Candidato recusado: "otimização para IA" (AEO/GEO).** Recusado por maturidade e por causa
  solta. A busca generativa que produz a resposta sem clique já está em maioria: entre 58% e 68%
  das buscas terminam sem clique e o referral de chatbot é ~96% menor que o de buscador, com ~1%
  de cliques na fonte ([20]). Reorganizar conteúdo para ser citado por um modelo é a resposta
  racional a algo que **já aconteceu** — é contexto (seção 3), e reaparece como efeito em e14,
  onde o objeto novo não é "otimizar para IA" e sim "o índice deixar de ser de documentos e
  passar a ser de capacidades pontuadas".
- **Candidato recusado: API REST, SDK e scraping.** O próprio enunciado da disciplina já os
  classifica como maduros, e concordo: não rompem nada, barateiam.
- **Candidato recusado: "o agente que navega".** É produto (Comet, ChatGPT agent), não ruptura — e
  o Atlas descontinuado em 09/08/2026 mostra o risco de tomar produto por tendência. A ruptura não
  é o agente navegar; é a web mudar de forma para recebê-lo.
- **Candidato recusado: servir Markdown em vez de HTML para bots.** Melhoria sustentadora: mesma
  coisa, mais barata em token. Vira efeito, não raiz.

### R1 — O site deixa de ser página e passa a se declarar como conjunto de ferramentas

O site publica capacidades invocáveis — servidor MCP do lado do servidor, `document.modelContext`
do lado do navegador — e o agente chama função em vez de renderizar interface.

1. **O que rompe.** Rompe a interface como o lugar onde o valor é entregue e capturado. Todo o
   ofício de projetar decisão em tela — hierarquia, affordance, funil, microcopy persuasivo,
   teste A/B de layout — pressupõe que a decisão acontece olhando. Na chamada de ferramenta, a
   decisão acontece antes, na escolha entre ferramentas, feita por um modelo que lê uma descrição
   de duas linhas. Rompe também a unidade de medida: sessão, pageview e tempo na página não
   descrevem nada do que aconteceu.
2. **Por que agora, e não há cinco anos.** Porque a pré-condição não era o modelo, era o
   **conector comum**. O MCP saiu em novembro de 2024 e, em 28 de julho de 2026, foi reescrito
   para ser sem estado, roteável por gateway e cacheável — desenho de infraestrutura, não de
   desktop ([5]). E porque a declaração chegou ao navegador: o WebMCP virou Draft CG Report em
   10/09/2026, com origin trial no Chrome ([6]). Em 2021 não havia nem conector nem agente que o
   usasse.
3. **Onde está na difusão.** Entre **produto de nicho e adoção precoce**. 9.652 servidores no
   registro oficial e 41% das organizações de software com algo em produção ([14]) é adoção
   precoce no software; no conjunto da web é nicho — o score médio de prontidão agêntica dos
   sites indexados é 38 de 100 ([16]). No navegador, ainda é origin trial.
4. **O que ainda falta acontecer.** Rollout estável do WebMCP no Chrome; compromisso de Safari e
   Firefox (hoje inexistente); um modelo de permissão e consentimento que não peça confirmação a
   cada ação; e — o que ninguém resolveu — uma forma de o site **ser pago pela chamada de
   ferramenta**, que hoje entrega valor sem carregar página nenhuma.
5. **Quem bloqueia, e com que incentivo.** Quem vive de anúncio. Declarar ferramenta é entregar o
   conteúdo sem a impressão publicitária — e o incentivo é tão claro que a Cloudflare já o
   transformou em default: *Agent* bloqueado nas páginas com anúncio ([4]). É a origem do efeito
   e4.

### R2 — O acesso de máquina vira transação: o HTTP 402 sai de trinta anos de dormência

O `robots.txt` deixa de ser um pedido de favor e passa a ser um contrato com preço, e a borda da
rede passa a cobrar por requisição.

1. **O que rompe.** Rompe o acordo implícito de trinta anos da web comercial: *deixe-me rastrear e
   eu te mando gente*. O acordo era mensurável e ainda é — 4,6 páginas rastreadas por referral no
   Google contra 2.237 na Anthropic e 217 na OpenAI, em julho de 2026 ([17]). Com essa razão, o
   pagamento em atenção deixou de existir e sobra pagamento em dinheiro ou nada. Rompe também a
   natureza do `robots.txt`: de declaração voluntária honrada por convenção (1994) para termo
   licenciado e exigível, com preço por caminho e código de erro padronizado ([2], [8]).
2. **Por que agora, e não há cinco anos.** Porque três peças ficaram prontas quase juntas: o
   mecanismo de cobrança na borda (pay per crawl em 07/2025, x402 em CloudFront e WAF em 07/2026),
   a identidade verificável do comprador (Web Bot Auth, sem a qual cobrar é cobrar de qualquer
   um), e o gatilho econômico — a razão rastreio/referral virando indefensável. Em 2021 faltavam
   as três.
3. **Onde está na difusão.** **Produto de nicho**, e com o lado comprador ausente: US$ 28 mil/dia
   reais, metade artificial ([10]). O lado vendedor tem escala de infraestrutura (toda a rede da
   Cloudflare, todo CloudFront); o lado comprador tem experimentos.
4. **O que ainda falta acontecer.** Um comprador com volume — isto é, um fabricante de modelo
   assumindo publicamente pagar por requisição em vez de negociar bilateralmente; contabilidade e
   tributação de micropagamento anônimo ([9]); e alguma teoria de preço, porque hoje o piso é
   US$ 0,001 e não há qualquer método para dizer quanto vale uma página ([3]).
5. **Quem bloqueia, e com que incentivo.** Os fabricantes de modelo, que preferem acordo bilateral
   com poucos grandes — mais barato, mais previsível e sem criar precedente de preço universal.
   É a origem de e10.1.

### R3 — A URL deixa de ser isonômica: o acesso passa a ser classificado por propósito e assinado

O mesmo endereço passa a devolver coisas diferentes conforme quem pede e para quê, com o padrão
invertido de aberto para fechado.

1. **O que rompe.** Rompe a suposição fundadora da web: um URI identifica um recurso, e o recurso
   é o mesmo para quem o pedir. O que a Cloudflare pôs em produção é uma web em que
   `exemplo.com/materia` devolve a matéria para *Search*, nada para *Training* e nada para
   *Agent* se a página tiver anúncio ([4]). Rompe também o regime de confiança: `robots.txt` era
   declaração honrada; Web Bot Auth é assinatura Ed25519 verificada ([7]) — passa-se de "por
   favor" para "prove".
2. **Por que agora, e não há cinco anos.** Porque a alavanca existe e foi puxada: uma empresa que
   está na frente de uma fração enorme da web mudou o **default**, com data marcada — 15/09/2026 —
   e a mudança pega domínios novos e o plano gratuito, que é onde está a cauda longa ([4]).
   Porque a assinatura de bot já roda em produção desde 07/2025, antes mesmo de adoção por grupo
   do IETF ([7]). E porque o tribunal começou a responder: quem acessa é o usuário, não o
   fabricante do agente (Nono Circuito, 04/08/2026, [19]).
3. **Onde está na difusão.** **Adoção precoce com alavanca de infraestrutura** — combinação rara:
   a porcentagem de sites que *decidiram* isso é pequena, mas o default de um intermediário
   converte decisão de um em comportamento de milhões.
4. **O que ainda falta acontecer.** O IETF adotar o Web Bot Auth em grupo de trabalho (hoje é
   draft individual, e o de arquitetura já foi substituído); a norma passar a distinguir agente
   delegado de crawler autônomo, distinção que só existe comercialmente; jurisprudência estável
   (o caso Amazon×Perplexity segue aberto); e algum mecanismo de exceção para arquivo, pesquisa e
   acessibilidade, que hoje não existe.
5. **Quem bloqueia, e com que incentivo.** Os anunciantes e as próprias plataformas de busca: se
   bloquear *Training* bloqueia junto o Googlebot ([4]), o custo de fechar recai sobre quem
   fecha. É a origem da retroação e15.

**Teste da raiz única (§6.4 aplicado aqui).** As três são independentes: se R1 não acontecer
(ninguém declara nada, o agente segue lendo DOM), R2 e R3 seguem de pé — cobra-se e bloqueia-se
HTML como sempre. Se R2 não acontecer (o pagamento não encontra comprador), R1 e R3 seguem — a web
se fecha em vez de cobrar. Se R3 não acontecer (o default continua aberto), R1 e R2 seguem — a web
se declara e cobra sem precisar discriminar. Nenhuma é disfarce das outras.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O site deixa de ser página e passa a se declarar como conjunto de ferramentas invocáveis (MCP, WebMCP)
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de produto passam a manter duas superfícies do mesmo produto, a interface para pessoas e o catálogo de ferramentas declaradas para agentes
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Escrever a descrição da ferramenta vira trabalho de redação de produto, e cai no colo de quem hoje escreve microcopy
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Duas ferramentas com descrições parecidas passam a disputar o mesmo lugar na cabeça do agente, e nasce uma prática de nomeação defensiva
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A métrica de sucesso de um site deixa de ser sessão e passa a ser chamada de ferramenta concluída com êxito
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Agências deixam de cobrar por tráfego entregue e passam a cobrar por tarefa concluída pelo agente do cliente
                sinal: fraco
                prazo: 2033
                confianca: media
      - id: e2
        ordem: 1
        efeito: O design de interface passa a ter de acomodar pessoa e agente operando a mesma tela ao mesmo tempo, com estado compartilhado e desfazer
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O consentimento por ação substitui o consentimento por sessão como padrão de interface
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O número de confirmações vira o gargalo do agente e empurra o produto para autonomia contratada por faixa de valor
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Plataformas de publicação e de comércio passam a entregar o catálogo de ferramentas pronto, e a prontidão agêntica deixa de ser projeto para virar default da plataforma
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Quem publica fora de plataforma desaparece do mundo dos agentes por omissão, e não por escolha
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O acervo público brasileiro só entra na camada de máquina por política de Estado, e sem ela o agente conhece o Brasil pelo que terceiros indexaram dele
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Sites que vivem de anúncio deixam de declarar ferramentas, porque a chamada de função entrega o conteúdo sem carregar a página que paga a conta
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A camada agêntica cresce onde não há anúncio, em software, comércio, serviço e documentação, e nasce praticamente sem jornalismo dentro
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O que o agente sabe do mundo passa a refletir quem pôde se declarar, e assuntos sustentados por publicidade ficam sub-representados na camada de máquina
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O navegador vira o ponto de mediação entre site e agente, e quem controla o navegador passa a decidir quais ferramentas o agente enxerga
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A mediação do navegador reproduz a economia da loja de aplicativos, com curadoria, ordenação e taxa sobre a chamada
            sinal: fraco
            prazo: 2034
            confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Sites passam a publicar a mesma capacidade em três lugares ao mesmo tempo, servidor MCP, página com WebMCP e API pública, para não depender de um único mediador
            sinal: medio
            prazo: 2031
            confianca: media
  - disrupcao: O acesso de máquina vira transação cobrada e licenciada por requisição, com o HTTP 402 saindo de dormência
    efeitos:
      - id: e6
        ordem: 1
        efeito: O robots.txt deixa de ser pedido de favor e vira tabela de preços por caminho, com termos de licença legíveis por máquina
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A redação passa a precificar por URL, cobrando caro pelo que custou apuração e liberando de graça a agregação que serve de isca para o agente
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Nasce uma função de precificação editorial que não pertence nem à redação nem ao comercial, e a disputa por ela define quem manda na pauta
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O contrato de uso do conteúdo passa a morar no arquivo servido, e não no departamento jurídico, o que torna a licença objeto de versionamento e de deploy
            sinal: medio
            prazo: 2031
            confianca: media
      - id: e7
        ordem: 1
        efeito: A rede de borda vira a cobradora do conteúdo e ocupa a posição de intermediário de pagamento que nem a publicidade nem os bancos ocuparam
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Quem não está atrás de uma dessas redes não consegue cobrar, e a capacidade de monetizar máquina passa a depender do fornecedor de infraestrutura, não do conteúdo
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Editores fora do eixo Estados Unidos e União Europeia arrecadam em moeda, regra e jurisdição de terceiros, e a tributação do acesso de máquina vira problema sem dono
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O orçamento de leitura vira restrição de projeto de quem constrói assistentes, que passam a escolher fontes por custo por requisição antes de escolher por qualidade
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Fontes baratas e rasas ganham presença desproporcional nas respostas, e a qualidade do que o agente sabe passa a ser função do orçamento de quem pergunta
            sinal: fraco
            prazo: 2035
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: Contratos de acesso de máquina passam a fixar prazo de validade e direito de retenção do que foi lido, porque o preço por requisição não sobrevive ao cache do agente
        sinal: fraco
        prazo: 2031
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A cobrança migra da leitura para o uso, e o agente passa a ser obrigado a registrar qual fonte entrou em qual resposta
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O registro de uso vira insumo de repartição de receita e cria um cadastro central de quem citou o quê, com os problemas de concentração que isso traz
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: A cobrança por requisição não encontra comprador em escala, o volume real fica ordens de grandeza abaixo do prometido e parte dos publicadores volta ao bloqueio puro
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O licenciamento se concentra em acordos bilaterais entre poucos grandes, exatamente o oposto do que o protocolo universal prometia
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: O produtor pequeno só é pago se for representado por uma entidade de gestão coletiva, e quem ficar fora dela não é pago de forma nenhuma
                sinal: fraco
                prazo: 2035
                confianca: baixa
  - disrupcao: A URL deixa de ser isonômica, com o acesso classificado por propósito, assinado criptograficamente e fechado por padrão
    efeitos:
      - id: e11
        ordem: 1
        efeito: O mesmo endereço passa a devolver coisas diferentes conforme o propósito declarado de quem pede, e a página deixa de ser um objeto único
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Testar e medir um site passa a exigir uma matriz por classe de visitante, e o controle de qualidade de mídia ganha uma dimensão de propósito
            sinal: medio
            prazo: 2030
            confianca: media
          - id: e11.2
            ordem: 2
            efeito: Ser classificado como busca e não como treino passa a valer dinheiro, e a categoria vira objeto de disputa comercial e de lobby
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Fabricantes separam seus robôs por propósito para caber na categoria liberada, e o custo dessa separação exclui quem opera agente pequeno
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A identidade do agente vira credencial de infraestrutura, e quem não tem chave reconhecida não passa, inclusive pesquisa acadêmica e arquivo
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O arquivamento da web precisa de exceção legal explícita para continuar existindo, porque tecnicamente é um rastreador de treino
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: O registro do que a web foi nos anos 2030 fica mais pobre que o dos anos 2010, e a história do período passa a depender de quem tinha contrato
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: A doutrina de que quem acessa é o usuário e não o fabricante do agente empurra a responsabilidade para a pessoa que delega, e os termos de uso passam a ser escritos contra ela
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Sites passam a exigir login para tudo o que tem valor, porque o contrato com pessoa identificada vira o único instrumento que sobra
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: A web aberta encolhe até a função de vitrine e o que tem valor passa a viver atrás de autenticação, o que resolve o problema de medição e destrói o de descoberta
                sinal: fraco
                prazo: 2035
                confianca: media
      - id: e14
        ordem: 1
        efeito: A descoberta passa a ser feita por índice de capacidades pontuadas, e não por índice de documentos ordenados por links
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A régua da prontidão agêntica é escrita por quem fabrica navegador e agente, de modo que otimizar para ela é otimizar para o fornecedor
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: A conformidade agêntica vira teste reproduzível com corpus público, e a disputa deixa de ser sobre o algoritmo e passa a ser sobre o corpus
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: Nota mínima de prontidão agêntica entra em edital público e em contrato de plataforma como hoje entra requisito de acessibilidade
            sinal: fraco
            prazo: 2033
            confianca: baixa
      - id: e15
        ordem: 1
        efeito: O bloqueio por padrão custa audiência que ainda convertia, e parte dos sites reabre para a categoria de agente enquanto mantém a de treino fechada
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: A distinção entre ler para responder agora e ler para treinar depois vira a linha central de negociação da web, com preços separados nas duas pontas
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Modelos treinados apenas com material licenciado viram um produto distinto, vendido pela procedência do corpus e não pela capacidade
                sinal: fraco
                prazo: 2036
                confianca: media
```

### 5.1 Os mecanismos, efeito por efeito

O bloco acima diz o quê. Esta seção diz **por quê** — e é onde a roda se separa de uma lista de
palpites. Cada parágrafo declara o mecanismo (`porque o efeito pai faz X`), a **classe de
referência** usada para o prazo, e os **artefatos** que sustentam o `sinal`.

**e1 — dupla superfície.** *Mecanismo:* porque declarar ferramenta obriga a expor a lógica da
aplicação por um canal que não renderiza nada, o time passa a ter dois contratos com o mundo — o
visual e o invocável — que precisam concordar entre si. *Sinal forte, quatro artefatos:* o WebMCP
como Draft CG Report com `document.modelContext` (10/09/2026, [6]); o origin trial no Chrome; os
9.652 servidores MCP no registro oficial ([14]); e o Lighthouse auditando prontidão agêntica por
padrão desde 07/05/2026 ([13]). *Classe de referência para 2029:* o design responsivo — uma vez
que o navegador entrega a primitiva e a plataforma entrega o default, a prática vira obrigatória
em cerca de três anos, não porque convença, mas porque a ferramenta de auditoria cobra. Aqui a
auditoria já existe antes da prática.

**e1.1 — a descrição vira redação.** *Mecanismo:* porque a escolha entre ferramentas é feita por
um modelo lendo `name`, `description` e schema, o texto dessas três coisas passa a ser o único
lugar onde se disputa a preferência — e texto que convence máquina é ofício de quem escreve, não
de quem programa. *2030, classe de referência:* o `title` e a meta description no SEO levaram
cerca de quatro anos para migrar de detalhe técnico a item de pauta de redação.

**e1.1.1 — nomeação defensiva.** *Mecanismo:* porque a desambiguação entre duas ferramentas
semelhantes é resolvida pelo modelo com base em texto, e não por um ranking auditável, o
incentivo é descrever de modo a não colidir — e, no limite, a colidir de propósito com o
concorrente. *Sinal fraco:* nenhum artefato hoje; é inferência a partir de e1.1. *2034* porque
depende de um mercado de ferramentas já povoado, que não existe.

**e1.2 — a métrica muda de objeto.** *Mecanismo:* porque a chamada de função não produz pageview,
não produz tempo na página e não produz rolagem, o painel inteiro de analytics deixa de descrever
o que aconteceu; sobra a taxa de sucesso da chamada. *Sinal médio, dois artefatos:* a recomendação
explícita de segmentar tráfego de agente e rastrear transação em nível de API ([18]); e o fato de
o próprio MCP ter passado a cachear listas de ferramentas com TTL ([5]), o que quebra a contagem
por requisição. *2030:* mesma classe do e1.

**e1.2.1 — agência cobra por tarefa.** *Mecanismo:* porque a base de cobrança de agência é a
métrica que ela entrega, e essa métrica deixou de existir, o contrato migra para o que ainda é
contável. *Confiança média, e não baixa,* apesar de terceira ordem: contrato por performance já é
prática corrente, então a mudança é de unidade, não de modelo. *2033* porque depende de e1.2
estar consolidado.

**e2 — humano e agente na mesma tela.** *Mecanismo:* porque o WebMCP declara como objetivo o
trabalho colaborativo na mesma interface com contexto compartilhado e controle do usuário ([6]),
a tela deixa de ter um operador e passa a ter dois — e dois operadores sobre o mesmo estado é um
problema de projeto que a disciplina de interface nunca precisou resolver fora de edição
colaborativa. *2030, classe de referência:* a edição colaborativa em tempo real (Google Docs)
levou cerca de cinco anos para virar expectativa padrão.

**e2.1 — consentimento por ação.** *Mecanismo:* porque quem delega não acompanha cada passo, o
consentimento tem de ser dado no momento da ação, e não na entrada. *Sinal fraco, um artefato:* o
modelo de autorização do MCP de 07/2026 move-se para credenciais ligadas ao servidor emissor e
validação de *issuer* ([5]) — é a mesma ideia um nível abaixo.

**e2.1.1 — autonomia contratada.** *Mecanismo:* porque confirmar tudo anula o ganho de delegar, a
pressão do produto é substituir confirmação por limite — "pode gastar até X", "pode agir nesta
categoria". *2035,* e a comparação é com o limite de cartão sem senha: levou mais de uma década
para o valor de dispensa virar norma.

**e3 — a plataforma entrega pronto.** *Mecanismo:* porque implementar servidor MCP e catálogo de
ferramentas é caro por site e barato por plataforma, o custo marginal empurra a capacidade para
quem hospeda muitos. O NLWeb já faz exatamente isso — qualquer instância expõe o conteúdo como
servidor MCP. *2031:* prazo empurrado na bateria da seção 7; a classe de referência é o HTTPS, que
só virou universal quando a plataforma passou a entregá-lo ligado.

**e3.1 — sumir por omissão.** *Mecanismo:* porque o default da plataforma define a mediana, quem
está fora dela precisa de trabalho deliberado para aparecer — e trabalho deliberado é exatamente
o que falta a quem publica pouco. *Artefato:* score médio 38 de 100 entre os sites já indexados
como "agent-ready" ([16]) — mesmo entre os candidatos, a mediana é baixa. **Este é o efeito de
"quem perde" do ramo R1.**

**e3.1.1 — o Brasil pelo espelho dos outros.** *Mecanismo:* porque acervo público brasileiro não
está em plataforma comercial, ele não herda default nenhum; o que sobra é política, e política de
Estado para prontidão agêntica não existe em lugar nenhum ainda. *2036, confiança baixa:* depende
de uma cadeia longa e de uma decisão política que não tem sinal hoje.

**e4 — o anúncio bloqueia a declaração.** *Mecanismo:* porque a chamada de ferramenta entrega o
conteúdo sem carregar a página, ela subtrai a impressão publicitária — e quem depende dela perde
receita ao se declarar. *Sinal médio, artefato decisivo:* a Cloudflare já transformou esse
raciocínio em default, bloqueando *Agent* em páginas com anúncio a partir de 15/09/2026, com a
justificativa publicada de que o anúncio sinaliza que o negócio quer atenção humana ([4]).
**Esta é a retroação do ramo R1** — o freio nasce dentro do modelo de negócio, não da regulação.

**e4.1 — a camada agêntica sem jornalismo.** *Mecanismo:* porque e4 exclui seletivamente quem vive
de anúncio, a camada de máquina cresce enviesada para quem cobra de outro jeito. *Artefatos:* a
explosão de servidores MCP é concentrada em ferramenta de software ([14]); o Not Human Search
categoriza o índice em AI Tools, Developer, Finance, E-Commerce, Security, Health — categorias de
serviço, não de mídia ([16]).

**e4.1.1 — o mundo segundo quem pôde se declarar.** *Mecanismo:* porque o agente responde com o
que consegue invocar, a cobertura de assuntos herda a distribuição econômica de e4.1. *Confiança
baixa:* há um contra-mecanismo forte — o modelo continua tendo o material de treino antigo, e
pode simplesmente responder de memória. Este é o efeito que mais depende de R1 dar certo.

**e5 — o navegador como mediador.** *Mecanismo:* porque `document.modelContext` roda dentro da
página, é o navegador quem decide quais ferramentas são visíveis, quais são executadas e sob que
política. *Artefatos:* a autoria do WebMCP é de Google e Microsoft ([6]); o Lighthouse já pontua
prontidão ([13]). *Rebaixado na bateria* de confiança alta para média — Safari e Firefox não se
comprometeram, e sem eles não há mediação universal.

**e5.1 — a taxa da loja.** *Mecanismo:* porque mediar, ordenar e executar é a mesma posição que a
loja de aplicativos ocupou, e essa posição historicamente cobra. *Confiança baixa:* é analogia
estrutural, não evidência; nenhum artefato indica intenção de cobrar hoje.

**e5.2 — publicar em três lugares.** *Mecanismo:* porque depender de um mediador só é risco
conhecido, e porque os três canais têm custo marginal baixo depois do primeiro. *Artefato:* o
padrão do NLWeb — mesma base servindo `/ask` humano e `/mcp` de máquina.

**e6 — o robots.txt vira tabela de preços.** *Mecanismo:* porque o mesmo arquivo que já é lido por
todo crawler passou a aceitar termos de licença legíveis por máquina, o caminho de menor
resistência para cobrar é ali — não é preciso construir nada novo. *Sinal forte, três artefatos:*
o RSL com pay-per-crawl e pay-per-inference dentro do `robots.txt`, com quinze apoiadores
nomeados no lançamento — Reddit, Yahoo, Ziff Davis, Quora, Medium, O'Reilly Media entre eles — e
uma entidade de gestão coletiva ([8]); o preço por URI da Cloudflare, com
`/robots.txt` e `/sitemap.xml` sempre gratuitos ([2]); e os onze códigos de erro padronizados,
que é o que transforma um pedido em protocolo. *2029, classe de referência:* o próprio
`robots.txt` levou pouco mais de dois anos (1994–1996) para virar convenção universal quando o
custo de adotar era quase zero — e aqui também é.

**e6.1 — preço por URL dentro da redação.** *Mecanismo:* porque o preço por caminho existe e o
custo de produção varia brutalmente entre uma nota e uma apuração, a precificação uniforme deixa
dinheiro na mesa nas duas direções. *2031,* atrás de e6 porque exige que alguém esteja comprando.

**e6.1.1 — pricing editorial sem dono.** *Mecanismo:* porque a decisão exige julgamento editorial
(o que custou) e julgamento comercial (o que o mercado paga), ela não cabe em nenhum dos dois
departamentos, e a organização precisa criar o cargo ou viver com a briga. *Nota:* este é o tipo
de efeito que a skill proíbe em forma genérica ("surge uma nova profissão"); ele só entra porque
tem ator nomeado (a redação e o comercial de um veículo), mecanismo específico (preço por caminho
existe) e consequência verificável (quem define o preço define o que vale a pena apurar).

**e6.2 — a licença vira arquivo.** *Mecanismo:* porque o termo passa a ser lido por máquina no
momento do acesso, ele tem de viver no repositório, entrar em deploy e ser versionado como código.
*Este efeito foi rebaixado de primeira para segunda ordem na bateria da seção 7* — era
extrapolação linear de e6, sem ator novo.

**e7 — a borda vira cobradora.** *Mecanismo:* porque só quem está na frente do servidor consegue
devolver 402 antes de a requisição chegar ao origin, e porque só quem tem escala consegue ser
*merchant of record* para milhões de microtransações. *Sinal forte, três artefatos:* Cloudflare
como merchant of record no pay per crawl ([1]); x402 geralmente disponível em CloudFront e WAF
([9]); Monetization Gateway cobrindo páginas, APIs, datasets **e ferramentas MCP** ([9]) — este
último é o ponto em que R1 e R2 se encontram tecnicamente.

**e7.1 — cobrar depende do CDN.** *Mecanismo:* porque a cobrança está implementada na borda e não
no protocolo do conteúdo, quem não contrata borda não tem como cobrar. **Quem perde:** o site
próprio, o veículo pequeno, a instituição pública. *2031.*

**e7.1.1 — arrecadar em moeda alheia.** *Mecanismo:* porque a liquidação é em stablecoin por um
facilitador estrangeiro e o *merchant of record* é a rede, o fluxo financeiro de um publicador
brasileiro atravessa jurisdição que não é a dele. *Artefato parcial:* o próprio furo de IVA
levantado por arquitetos corporativos na cobertura do lançamento ([9]) — se o problema já existe
na União Europeia, é maior onde o tributo é estadual e municipal.

**e8 — orçamento antes de qualidade.** *Mecanismo:* porque cada leitura passa a ter preço e cada
resposta tem um teto de custo, a seleção de fontes vira problema de orçamento. *Sinal fraco* —
hoje não há volume de cobrança que force isso ([10]) — mas *confiança média*, porque o mecanismo é
direto e o endpoint `charged_zones` existe justamente para o crawler montar fila por custo ([2]).

**e8.1 — barato e raso ganha espaço.** *Mecanismo:* porque a escolha por custo é sistemática e não
aleatória, ela tem direção: a agregação gratuita (que e6.1 libera de propósito como isca) é
sempre mais barata que a apuração.

**e9 — validade e retenção em contrato.** *Mecanismo:* porque o agente guarda o que leu e o preço
é por requisição, o vendedor perde receita na segunda leitura e passa a vender tempo, não acesso.
*Confiança média* apesar de sinal fraco: o mecanismo econômico é inescapável assim que houver
volume.

**e9.1 — da leitura para o uso.** *Mecanismo:* porque cobrar por leitura é fácil de burlar com
cache e cobrar por uso captura o valor onde ele acontece. *Artefato:* o pay-per-inference já está
escrito no RSL ([8]) — existe como termo, não como prática. **Fronteira declarada:** a exigência
de o agente registrar o que usou é objeto do tema 3 (observabilidade); aqui entra só como
condição de pagamento.

**e9.1.1 — o cadastro central de citações.** *Mecanismo:* porque repartir receita exige um registro
comum, e registro comum de quem leu o quê é uma base de dados de leitura em escala populacional.

**e10 — a cobrança não encontra comprador.** *Mecanismo:* porque o comprador racional prefere
acordo bilateral (previsível, sem precedente de preço) a mercado spot, e porque bloquear sai mais
barato do que cobrar quando a receita esperada é de centésimos de centavo por página. *Sinal
médio, artefatos:* US$ 28 mil/dia com cerca de metade em autonegociação e o descompasso com a
avaliação do ecossistema ([10]); a leitura da Artemis de que o surto é "principalmente uma
miragem" e os ~US$ 600 milhões anualizados da Sherlock diante de projeções de trilhões ([22]).
**Esta é a retroação do ramo R2, e é a mais forte do mapa** — é o cenário em que R2 simplesmente
não acontece.

**e10.1 — o bilateral vence o universal.** *Mecanismo:* porque os dois lados da negociação
bilateral preferem o bilateral, e não há terceiro com poder de impor o mercado. *Artefato:* os
próprios experimentos da Cloudflare com Ceramic.ai e You.com são bilaterais com desenhos
distintos, não um mercado único.

**e10.1.1 — o pequeno só é pago via coletivo.** *Mecanismo:* porque o custo de transação de
negociar individualmente com cada fabricante é maior que a receita esperada de um produtor
pequeno. *Artefato:* o RSL Collective existe exatamente para isso, modelado em ASCAP e BMI ([8]).
*Classe de referência:* a gestão coletiva musical levou décadas para arrecadar de fato, e continua
com repartição opaca — motivo da confiança baixa.

**e11 — a URL deixa de ser a mesma para todos.** *Mecanismo:* porque a política passou a ser
avaliada por requisição, com o propósito declarado como chave. *Sinal forte, três artefatos:* a
taxonomia Search/Agent/Training em produção; a data de 15/09/2026 para o default fechado em
domínios novos e no plano gratuito; e o Web Bot Auth verificando quem é quem ([4], [7]). *2028:*
é o prazo mais curto do mapa e o único que não depende de ninguém adotar nada — o default já está
marcado.

**e11.1 — a matriz de teste por propósito.** *Mecanismo:* porque cada classe de visitante vê uma
composição diferente, validar "o site" deixa de ser uma afirmação com sentido único.

**e11.2 — a categoria vale dinheiro.** *Mecanismo:* porque *Search* é liberada e *Training* é
bloqueada, ser classificado numa ou noutra muda o acesso — logo, muda a receita. *Artefato:* o
problema do Googlebot misto ([4]) já força essa conversa.

**e11.2.1 — separar robôs custa caro.** *Mecanismo:* porque manter frotas distintas por propósito
exige infraestrutura, chaves e reputação separadas, o que é barato para quem tem escala e
proibitivo para quem não tem.

**e12 — identidade como pedágio.** *Mecanismo:* porque a verificação por assinatura substitui a
confiança declarativa, quem não tem chave reconhecida por um verificador simplesmente não passa —
e o draft **não distingue** crawler de agente delegado ([7]), de modo que a exclusão é indiscriminada
por construção. *2030.* **Quem perde:** pesquisa acadêmica sem contrato, arquivo, ferramenta de
acessibilidade que automatiza navegação.

**e12.1 — o arquivo precisa de exceção.** *Mecanismo:* porque arquivar é, tecnicamente, rastrear
para guardar — a definição de *Training* — e nenhuma das políticas publicadas abre exceção para
arquivo. *Confiança média:* há precedente forte de exceção legal para preservação em direito
autoral, o que torna a exceção plausível; o que é incerto é o prazo.

**e12.1.1 — o buraco no registro histórico.** *Mecanismo:* porque o que não foi coletado no
momento não é recuperável depois. *2038, confiança baixa* — mas é o efeito de maior consequência
cultural do mapa inteiro.

**e13 — a responsabilidade desce para a pessoa.** *Mecanismo:* porque, se quem acessa é o usuário
([19]), o instrumento de controle do site deixa de ser a ação contra o fabricante e passa a ser o
termo de uso contra quem delega. *Sinal médio, um artefato robusto:* a decisão do Nono Circuito de
04/08/2026, com o caso de mérito ainda aberto.

**e13.1 — login para o que vale.** *Mecanismo:* porque o termo de uso só é exigível contra quem se
identificou, e porque login resolve de uma vez identidade, medição e cobrança. *Artefato:* a
recomendação de credenciais escopadas por agente com OAuth 2.1 e controle fino de acesso ([18]).

**e13.1.1 — a web aberta como vitrine.** *Mecanismo:* porque o valor migra para onde há contrato e
a parte aberta fica com a função de atrair. *Confiança média em terceira ordem,* excepcionalmente:
o movimento já aconteceu uma vez, com o aplicativo móvel, e o mecanismo é o mesmo.

**e14 — índice de capacidades.** *Mecanismo:* porque o agente não segue link, ele invoca — e
ordenar por links (o voto de um documento em outro) deixa de descrever o que ele precisa saber,
que é o que cada site **consegue fazer**. *Sinal médio, dois artefatos:* o Not Human Search
pontuando 5.316 sites em sete sinais ([16]) e o Lighthouse auditando a categoria Agentic Browsing
por padrão ([13]). *Rebaixado de alta para média na bateria:* a causa solta é forte — a descoberta
também está mudando por conta da busca generativa, que é madura.

**e14.1 — a régua é do fornecedor.** *Mecanismo:* porque quem define os sinais pontuados define o
comportamento de quem otimiza — e hoje os sinais são definidos por quem fabrica navegador
(Lighthouse) e por índices privados. *Contraste útil:* o Google diz que ignora `llms.txt` na Busca
enquanto o Chrome o audita ([13]) — a régua já está em desacordo consigo mesma.

**e14.1.1 — a disputa vira o corpus.** *Mecanismo:* porque conformidade reproduzível exige corpus
de teste público, e quem escolhe o corpus escolhe o resultado. *Artefato:* o grupo do W3C proposto
em 25/08/2026 para conformidade e benchmark de agentes diz isso com todas as letras — vários
grupos definem como o agente se identifica e troca mensagens, nenhum define como se **mede**
conformidade ([21]).

**e14.2 — a nota entra no edital.** *Mecanismo:* porque comprador público precisa de critério
objetivo e verificável, e a pontuação automática oferece exatamente isso. *Classe de referência:*
acessibilidade digital (eMAG, WCAG) levou cerca de uma década para sair de recomendação e virar
exigência de edital. *Confiança baixa,* e esta é uma das candidatas a efeito genérico: só entra
porque nomeia o instrumento (edital com nota mínima medida por auditoria automática) e o
precedente.

**e15 — a reabertura.** *Mecanismo:* porque bloquear *Agent* junto com *Training* fecha também o
tráfego que ainda converte, e porque a razão rastreio/referral do Google (4,6:1) mostra que as
duas economias não são a mesma ([17]). **Esta é a retroação do ramo R3.**

**e15.1 — a linha de negociação.** *Mecanismo:* porque a diferença de valor entre ler-para-responder
(que gera referência e às vezes clique) e ler-para-treinar (que não devolve nada) é grande e
mensurável, o preço se separa.

**e15.1.1 — o modelo com procedência.** *Mecanismo:* porque, se treinar passa a exigir licença
cara, a licença vira atributo do produto — e o comprador corporativo com exposição jurídica paga
por ela. *Confiança média em terceira ordem:* o mecanismo comercial é conhecido (é o mesmo do
software com indenização contratual).

### 5.2 O que o bloco não consegue dizer

Três coisas ficam de fora da estrutura em árvore e precisam ser ditas em prosa.

**A árvore sugere paralelismo entre as raízes, e não há.** R3 já está datada — 15 de setembro de
2026 — enquanto R2 depende de um comprador que ainda não existe. Se o mapa fosse uma linha do
tempo, R3 viria primeiro, R1 em seguida e R2 talvez nunca. A ordem causal não é a ordem
calendárica, e o `prazo` de cada efeito carrega isso sozinho.

**A árvore não mostra que dois efeitos se anulam.** e6 (a web se abre com preço) e e13.1 (a web se
fecha com login) são incompatíveis no mesmo acervo. Estão os dois no mapa de propósito — está na
seção 7 o que decide entre eles.

**A árvore não mostra o contrafactual do usuário.** Em nenhum dos quinze efeitos de primeira ordem
a pessoa comum aparece como quem decide. Isso não é descuido: é o achado desconfortável. Em todas
as cadeias, quem decide é a plataforma, a rede de borda, o navegador, o fabricante do agente ou o
tribunal. A pessoa aparece em e13 — como réu do termo de uso.

### 5.3 Cruzamentos

**Convergência (o achado mais valioso do mapa).** Dois ramos independentes chegam ao mesmo efeito
de segunda ordem por caminhos que não se tocam: **e3.1** ("quem publica fora de plataforma
desaparece por omissão", vindo de R1, por via técnica) e **e7.1** ("quem não está atrás de uma
rede de borda não consegue cobrar", vindo de R2, por via econômica). Juntos formam um enunciado
que nenhum dos dois ramos diz sozinho: **a capacidade de existir para uma máquina e a capacidade
de ser pago por isso foram, as duas, terceirizadas para o mesmo pequeno conjunto de
intermediários** — e são intermediários diferentes dos que dominavam a web da atenção (a rede
social e o buscador). A convergência recebe o nome de **dupla dependência de intermediário**, e
é ela que justifica o experimento da seção 10.

Uma segunda convergência, mais estreita: **e4.1** (a camada agêntica nasce sem jornalismo) e
**e13.1.1** (o que vale migra para trás do login) chegam à mesma consequência — o material caro de
produzir sai da camada aberta de máquina — partindo, um, do modelo publicitário e, o outro, da
doutrina jurídica.

**Retroalimentação.** e13.1.1 (o valor atrás de autenticação) **reforça R2** e **enfraquece R1**
ao mesmo tempo: com tudo fechado, cobrar é o único caminho que sobra (mais R2), mas não há o que
declarar publicamente para o agente descobrir (menos R1). É um ciclo com sinal trocado entre as
raízes, e é a razão de e10 e e13.1 não poderem ser lidos isoladamente.

Um segundo ciclo, este reforçador: e11 → e15 → e15.1 → e11. O bloqueio por propósito gera reação,
a reação gera preço diferenciado por propósito, e o preço diferenciado torna a classificação por
propósito ainda mais valiosa — consolidando a perda de isonomia da URL que a originou. Cada volta
torna mais difícil voltar atrás.

**Contradição registrada, sem resolução.** e6 e e13.1 não podem valer para o mesmo acervo: ou o
material fica acessível e cobrado por requisição, ou fica fechado atrás de login. **O que decide
entre os dois é e10** — se a cobrança por requisição encontrar comprador em escala, vence e6; se
não encontrar, vence e13.1. Em setembro de 2026 o placar é desfavorável a e6 (US$ 28 mil/dia,
metade artificial), e é por isso que e13.1 sai desta rodada com o mesmo nível de confiança de e6.1,
apesar de ser o cenário menos anunciado.

**Cobertura STEEP, com as lacunas declaradas.**

| Dimensão | Onde aparece | Estado |
|---|---|---|
| **Social** | e12 (exclusão de quem não tem chave), e13.1.1 (fim da web aberta), e3.1.1 (acervo brasileiro) | coberta |
| **Tecnológico** | e1, e5, e11, e14 | coberta |
| **Econômico** | e4, e6, e7, e8, e10 | coberta, é o eixo mais denso |
| **Ecológico** | — | **vazia.** Não forcei: não encontrei mecanismo específico ligando a camada de protocolo a consumo energético que não valesse igualmente para qualquer uso de modelo. O argumento "menos HTML renderizado gasta menos" existe, mas é de segunda ordem sobre o volume de inferência, que é outro tema. |
| **Político/jurídico** | e13 (doutrina do Nono Circuito), e12.1 (exceção para arquivo), e14.2 (edital) | coberta, mas rasa em regulação — ver seção 7 |

**Quem perde, nomeado.** e3.1 (quem publica fora de plataforma), e7.1 (quem não tem borda), e8.1
(as fontes caras), e12 (pesquisa e arquivo), e12.1.1 (a historiografia do período), e10.1.1 (o
produtor pequeno fora do coletivo), e11.2.1 (o operador de agente pequeno). Sete dos quarenta e
nove efeitos descrevem perda explícita. Não é uma roda só de aceleração.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

Critério de Hiltunen: algo que quase não aparece hoje mas que, se crescer, muda o mapa. Para cada
um, **onde foi visto**, **o que mudaria** e **o sinal observável** que diria que está crescendo.

**SF1 — O índice de quem cobra.** *Onde:* o endpoint autenticado
`GET https://crawlers-api.ai-audit.cfdata.org/charged_zones`, documentado no changelog de
10/12/2025, que permite ao crawler descobrir quais domínios cobram e montar a fila de rastreio a
partir disso ([2]). *Por que é fraco:* é uma linha num changelog, sem número público. *O que
mudaria:* é a primeira infraestrutura de **descoberta por preço** da web — um índice invertido
cuja chave não é o assunto, é o custo. Se ele crescer, e8 sai do especulativo e vira o mecanismo
central do mapa: o agente não escolhe fonte por qualidade, escolhe por fila de custo. *Sinal
observável:* a publicação de um número de zonas cobradas, ou o aparecimento de um segundo índice
equivalente por outra rede (Fastly, Akamai) — no momento em que houver dois, vira mercado.

**SF2 — A auditoria de prontidão dentro da ferramenta de todo mundo.** *Onde:* Chrome Lighthouse
13.3.0 movendo a categoria *Agentic Browsing* para a configuração padrão em 07/05/2026, com a
ausência de `llms.txt` retornando "N/A" e não falha ([13]). *Por que é fraco:* é um item de
auditoria que não reprova ninguém. *O que mudaria:* auditoria embutida é como a prática vira
obrigatória sem que ninguém decida — foi assim com HTTPS, com performance e com acessibilidade.
*Sinal observável:* o dia em que o "N/A" virar nota que pesa, ou em que a categoria aparecer no
PageSpeed público — a partir daí e1 e e3 aceleram, e e14.1 (a régua é do fornecedor) deixa de ser
hipótese.

**SF3 — Conformidade agêntica como teste reproduzível.** *Onde:* proposta de Community Group no
W3C em 25/08/2026, "Agent Conformance and Benchmarking", com a observação de que vários grupos
definem como agentes se identificam, trocam mensagens, carregam memória e provam o que fizeram, e
**nenhum define como se mede conformidade a isso** ([21]). *Por que é fraco:* o grupo ainda
precisa de cinco apoiadores para existir. *O que mudaria:* o dia em que "pronto para agente" tiver
suíte de teste executável por terceiro, a briga sai da prosa de marketing e vai para o corpus —
e14.1.1. *Sinal observável:* os cinco apoiadores e a publicação do primeiro corpus.

**SF4 — A instabilidade do próprio objeto.** *Onde:* a imprensa técnica descreve a API do WebMCP
como `navigator.modelContext`; a especificação define `document.modelContext` ([6]). *Por que é
fraco:* parece detalhe. *O que mudaria:* divergência de nome entre o que se escreve sobre uma API
e o que ela é indica que a coisa ainda não tem forma — e tudo em R1 depende de ela ter. *Sinal
observável:* a spec fixar o objeto e o origin trial virar recurso estável no Chrome.

**SF5 — Pagamento por uso, não por leitura.** *Onde:* o RSL prevê **pay-per-inference** desde
09/2025 ([8]). *Por que é fraco:* está escrito e não está em prática; nenhum fabricante de modelo
aderiu publicamente. *O que mudaria:* cobrar por uso captura valor onde ele acontece e torna o
cache irrelevante — o que desativa e9 e faz e9.1 saltar à frente. *Sinal observável:* um
fabricante de modelo aceitar o termo por escrito, ou uma ação judicial usando o termo do
`robots.txt` como contrato.

**SF6 — O tráfego de agente medido separado do de crawler.** *Onde:* a taxonomia da Cloudflare
separa *Agent* de *Training* desde 01/07/2026 ([4]); o Web Bot Auth, que é o mecanismo de
identidade, **não faz essa distinção** ([7]). *Por que é fraco:* a separação existe no produto de
uma empresa e não na norma. *O que mudaria:* se a distinção subir para o IETF, "agente do usuário"
vira categoria de direito com tratamento próprio, e e13 muda de figura — a doutrina do Nono
Circuito ganharia correspondente técnico. *Sinal observável:* adoção do draft por grupo de
trabalho com a distinção incorporada.

### 6.2 Wildcards

Critério de Petersen: baixa probabilidade, alto impacto, plausibilidade interna. Cada um com
mecanismo, motivo da improbabilidade, efeito sobre o mapa e sinal precoce.

**W1 — Um grande portal bloqueia todos os agentes e a audiência não nota.** *Mecanismo:* se o
referral de chatbot é ~96% menor que o de buscador e apenas ~1% dos usuários clica na fonte
([20]), o custo real de fechar é muito menor do que o custo percebido. Um veículo grande fecha,
mede, e descobre que a perda é de um dígito — e publica o resultado. *Por que é improvável:*
nenhuma diretoria fecha uma torneira que não sabe medir, e o medo de perder o que não se entende é
maior que a evidência. *O que faria com o mapa:* derruba R2 inteira — ninguém precisa cobrar por
algo que pode simplesmente desligar sem dor — e acelera e13.1 e e13.1.1. A web de máquinas passaria
a ser feita de quem quer estar nela, e a mídia profissional ficaria de fora por escolha, não por
exclusão. *Sinal precoce:* a primeira publicação de um teste A/B de bloqueio com números.

**W2 — Uma instância superior reverte a doutrina do agente-como-usuário.** *Mecanismo:* o caso
Amazon×Perplexity segue aberto no mérito e cabe recurso ([19]); se uma corte superior decidir que
quem acessa é o fabricante do agente, cada agente passa a precisar de autorização de cada site.
*Por que é improvável:* exigiria a Suprema Corte aceitar o caso e contrariar a leitura restritiva
da CFAA já consolidada em outro precedente. *O que faria com o mapa:* transformaria a web agêntica
numa rede de acordos bilaterais — e10.1 saltaria de segunda ordem para descrição do presente,
enquanto R1 perderia sentido (declarar ferramenta para quem não pode entrar sem contrato). *Sinal
precoce:* pedido de certiorari aceito, ou uma decisão em sentido contrário em outro circuito.

**W3 — A declaração morre de irrelevância, como o llms.txt.** *Mecanismo:* os modelos ficam bons o
bastante lendo pixel e DOM para que declarar ferramenta deixe de compensar o custo de manter a
segunda superfície; o precedente está medido — 36.120 arquivos publicados, 97% sem uma única
requisição ([12]). *Por que é improvável:* há investimento pesado de Google e Microsoft na
primitiva do navegador, e a chamada de função é ordens de grandeza mais barata em token que ler a
página. Mas "mais barato" não venceu antes. *O que faria com o mapa:* mata R1 e deixa R2 e R3 de
pé — a web ficaria fechada e cobrada, sem nunca ter ficado declarada. *Sinal precoce:* um
fabricante grande anunciar que seu agente ignora ferramentas declaradas por padrão, ou a taxa de
uso do WebMCP em origin trial não sair do lugar depois de dois trimestres.

**W4 — O default vira norma estatal antes de virar norma técnica.** *Mecanismo:* um regulador —
União Europeia é o candidato óbvio — transforma a classificação por propósito em obrigação legal,
com direito de recusa de treino oponível a qualquer coletor, antes de o IETF adotar qualquer
draft. *Por que é improvável (e este é o wildcard mais provável dos quatro):* o ritmo regulatório
recente foi de adiamento, não de antecipação. *O que faria com o mapa:* daria a e12.1 (exceção
para arquivo) e a e15.1 (preço separado por propósito) prazos muito mais curtos, e criaria uma
web com duas políticas geográficas — o que hoje não está em nenhum efeito do mapa. *Sinal
precoce:* um texto de consulta pública que use as palavras "treino", "busca" e "agente" como
categorias distintas de acesso.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria do §6 da skill, aplicada ao mapa **já pronto**, com o registro
das alterações que ela produziu. Ela não foi frouxa: derrubou onze coisas, entre rebaixamentos,
adiamentos, uma mudança de ordem e três remoções.

### 7.1 Pré-mortem — é 2041 e este mapa se mostrou errado

**Razão 1: a camada de declaração foi um degrau, não um andar.** Os modelos passaram a operar a
interface visual com confiabilidade suficiente, e manter catálogo de ferramentas virou custo sem
retorno. O precedente estava na cara desde 2026: `llms.txt` com 97% de arquivos sem requisição
([12]) e um produto de navegador agêntico descontinuado em nove meses (Atlas, 09/08/2026). O mapa
apostou que declarar venceria ler, e essa aposta tem um histórico ruim. *→ Rebaixa e1, e3, e5 e
todo o ramo R1.*

**Razão 2: o pagamento por requisição nunca saiu do laboratório.** US$ 28 mil/dia com metade
artificial em março de 2026 ([10]) não era um começo, era o teto. O 402 ficou como infraestrutura
sem economia, e o que existiu de fato foram dez ou vinte acordos bilaterais entre empresas
grandes. *→ Rebaixa e6, e7 e todo o ramo R2; promove e10 e e10.1.*

**Razão 3: a política de acesso era decisão comercial de uma empresa e mudou num trimestre.** O
default de 15/09/2026 foi revertido sob pressão de anunciantes e de quem perdeu tráfego, e a web
voltou a ser razoavelmente isonômica — não por princípio, por conveniência. Um default não é uma
instituição: tratar a decisão de produto de uma companhia como se fosse a mudança de uma camada da
internet é o erro estrutural mais provável deste mapa. *→ Rebaixa e11 e obriga a explicitar a
dependência de ator único em R3.*

### 7.2 Extrapolação linear — o que era só "mais do mesmo"

- **e6.2** ("a licença vira arquivo versionado") estava em primeira ordem e é extrapolação direta
  de e6, sem ator novo e sem mecanismo novo. **Perdeu uma ordem**: passou a segunda ordem, sob e6.
- **e11.1** (matriz de teste por classe de visitante) quase caiu pelo mesmo motivo. Sobreviveu
  porque troca o ator — sai o time de conteúdo, entra o de qualidade — e porque muda a natureza da
  afirmação "o site está no ar".
- **e5.1** (a taxa da loja de aplicativos) é analogia estrutural, não mecanismo observado.
  Mantido, com confiança baixa e a analogia declarada no texto em vez de escondida.

### 7.3 Velocidade de adoção — cada prazo contra sua classe de referência

A classe de referência mais dura deste mapa é a do próprio tema: **`llms.txt` cresceu 8,8× em
publicação e 0 em consumo**, em doze meses ([12]). Todo prazo que dependia de *alguém ler* o que
foi publicado teve de ser conferido contra isso.

- **e3** (plataformas entregam prontidão por default): estava em **2029**, foi para **2031**.
  Motivo: a classe de referência correta não é "plataforma liga uma flag", é HTTPS — e o HTTPS só
  virou universal quando havia autoridade certificadora gratuita **e** penalidade de navegador.
  Aqui há auditoria (Lighthouse) mas não há penalidade.
- **e3.1.1** (acervo público brasileiro): **2033 → 2036**. Depende de política de Estado, e a
  classe de referência é a Lei de Acesso à Informação e o eMAG, que levaram de cinco a dez anos
  entre norma e prática.
- **e13.1.1** (a web aberta vira vitrine): **2033 → 2035**. A classe de referência é a migração
  para aplicativo móvel, que levou cerca de oito anos para deslocar o valor.
- **e8** (orçamento antes de qualidade): **mantido em 2032**, mas com o sinal rebaixado a fraco —
  depende inteiramente de haver volume de cobrança, que hoje não há.
- **e11** (a URL deixa de ser isonômica) foi o único prazo que **encurtou** na bateria: de 2029
  para **2028**, porque não depende de adoção — a data do default já está marcada e pega o plano
  gratuito, que é onde está a cauda longa ([4]).

### 7.4 A raiz que não acontece

- **Se R1 não acontecer:** sobra bastante — R2 e R3 operam sobre HTML comum, e onze dos quinze
  efeitos de primeira ordem seguem de pé. O que se perde é a parte do mapa que fala com quem
  projeta interface, isto é, o público deste documento.
- **Se R2 não acontecer:** já está previsto **dentro** do mapa, em e10 — é a retroação mais forte
  que escrevi. O mapa não desmorona; ele muda de conclusão, de "a web se abre com preço" para "a
  web se fecha com login" (e13.1).
- **Se R3 não acontecer:** perde-se o ramo mais bem ancorado e mais curto. R1 e R2 sobrevivem, mas
  sem a pressão que torna a cobrança necessária.

Nenhuma das três é disfarce das outras — mas **R3 é a que sustenta a urgência das outras duas**.
Se a política de acesso não tivesse mudado, nem declarar nem cobrar seriam necessários. Isso é uma
dependência que a estrutura de árvore não mostra, e por isso está escrita aqui.

### 7.5 Suposições escondidas

Sete premissas que o mapa assume sem dizer, cada uma um wildcard em potencial:

1. **O intermediário continua permitindo.** Todo o R2 e metade do R3 supõem que Cloudflare e AWS
   mantêm as funcionalidades e os preços. Nenhuma das duas se comprometeu com nada.
2. **O agente continua sendo de terceiro.** Se o agente passar a rodar no dispositivo, sem
   provedor identificável, a assinatura de bot deixa de ter em quem se ancorar e R3 perde
   mecanismo de execução.
3. **O custo do token continua caindo.** e8 (escolher fonte por custo) só faz sentido se o custo
   de leitura for comparável ao de inferência. Se a inferência ficar muito barata, o preço do
   conteúdo domina; se ficar cara, ninguém liga para centésimos de centavo por página.
4. **A regulação fica quieta.** O mapa quase não tem regulador como ator, e isso é uma escolha
   discutível — ver W4.
5. **O protocolo permanece aberto.** MCP e WebMCP são governados por quem os criou. O mapa supõe
   que continuam interoperáveis; a história de HTML, RSS e ActivityPub sugere cautela.
6. **Há uma web para reprojetar.** Se a consulta ao modelo substituir a visita em grau muito maior
   que o medido, a discussão sobre como servir páginas para máquinas perde objeto — a Wikipédia já
   perdeu ~8% de leitores humanos em um ano ([11]).
7. **O Brasil segue a política global.** e3.1.1 e e7.1.1 assumem que o país é tomador de regra.
   Se houver política pública de prontidão agêntica para acervo estatal, os dois mudam de sinal.

### 7.6 O viés do autor

Escolhi este tema por gostar de protocolo, e o mapa mostra isso: **R1 tem cinco efeitos de
primeira ordem e o ramo inteiro depende de uma primitiva que está em origin trial num navegador**.
Um mapa escrito por quem vende anúncio teria posto e4 (o anúncio bloqueia a declaração) como raiz,
e R1 como efeito — e não seria errado. O segundo viés é de otimismo institucional: escrevi três
efeitos (e12.1, e14.2, e15.1.1) que supõem que instituições — legislador, comprador público,
mercado corporativo — reagem de forma ordenada. O terceiro, e mais provável, é **viés de
disponibilidade de fonte**: quase tudo que abri foi publicado por quem tem interesse comercial no
tema (Cloudflare, AWS, Coinbase via InfoQ, IAB, RSL). As contas de quem não implementa nada — que
é a maioria da web, com score médio 38 de 100 ([16]) — não têm blog.

### 7.7 Calibração

| Ordem | alta | media | baixa | Total |
|---|---|---|---|---|
| 1 | 4 | 11 | 0 | 15 |
| 2 | 0 | 16 | 4 | 20 |
| 3 | 0 | 3 | 11 | 14 |

A distribuição cai com a ordem, como deve: a confiança alta desaparece na segunda ordem e a baixa
passa a dominar na terceira. As três confianças médias de terceira ordem são as exceções
justificadas no texto — e1.2.1 (contrato por performance já é prática, muda a unidade e não o
modelo), e13.1.1 (o mesmo movimento já aconteceu uma vez, com o aplicativo móvel) e e15.1.1 (o
mecanismo comercial de vender procedência é conhecido). As quatro confianças altas de primeira ordem são todas
efeitos com data ou artefato em produção: e1 (WebMCP publicado, registro com 9.652 servidores), e6
(RSL e preço por caminho em produção), e7 (x402 geralmente disponível na AWS) e e11 (default
datado em 15/09/2026). Nenhuma confiança alta sobrevive à segunda ordem — e isso é deliberado:
tudo que depende de uma cadeia de dois passos neste tema depende de um comprador ou de um
regulador que ainda não se manifestou.

### 7.8 Registro de alterações — auditável

| id | antes | depois | por quê |
|---|---|---|---|
| **e5** | `confianca: alta` | `confianca: media` | Safari e Firefox não se comprometeram com o WebMCP; sem eles não há mediação universal, e o efeito depende de universalidade (**rebaixamento do ramo R1**) |
| **e3** | `prazo: 2029` | `prazo: 2031` | classe de referência trocada de "flag de plataforma" para HTTPS: há auditoria (Lighthouse) mas não há penalidade de navegador |
| **e3.1.1** | `prazo: 2033` | `prazo: 2036` | depende de política de Estado; referência LAI/eMAG, de cinco a dez anos entre norma e prática |
| **e6.2** | ordem 1 | ordem 2, sob e6 | extrapolação linear de e6, sem ator novo nem mecanismo novo (**mudança de ordem no ramo R2**) |
| **e10** | `confianca: alta` | `confianca: media` | o efeito é uma negativa ("a cobrança não encontra comprador") e eu a estava tratando como certeza; o mesmo dado que a sustenta (US$ 28 mil/dia) pode ser leitura de mercado imaturo, não de mercado inexistente |
| **e8** | `sinal: medio` | `sinal: fraco` | não há artefato de que alguém já escolha fonte por custo; o `charged_zones` é infraestrutura para isso, não evidência disso (**rebaixamento do ramo R2**) |
| **e14** | `confianca: alta` | `confianca: media` | teste da causa solta: a mudança na descoberta também decorre da busca generativa, que é madura e foi recusada como raiz — o efeito não deriva limpo de R3 (**rebaixamento do ramo R3**) |
| **e13.1.1** | `prazo: 2033` | `prazo: 2035` | referência: a migração de valor para aplicativo móvel levou cerca de oito anos |
| **e11** | `prazo: 2029` | `prazo: 2028` | único prazo encurtado: não depende de adoção, o default tem data marcada |
| ~~e16~~ | ordem 1, ramo R1 | **removido** (seção 12.3) | "cursos de design reorganizam o currículo em torno de interação agêntica" — efeito proibido pela skill: serve a qualquer tema, sem curso, sem mecanismo, sem ator |
| ~~e17~~ | ordem 1, ramo R2 | **removido** (seção 12.3) | "sites passam a servir Markdown em vez de HTML para agentes" — melhoria sustentadora; foi para a seção 3 como contexto |
| ~~e18~~ | ordem 2, sob e14 | **removido** (seção 12.3) | "surge a profissão de projetista de experiência agêntica" — genérico sem ator nomeado; o que sobrou dele virou e6.1.1, que tem ator e disputa concretos |

**Cota cumprida:** pelo menos um efeito rebaixado ou removido por raiz — R1: e5 rebaixado, e3 e
e3.1.1 adiados, e16 removido. R2: e8 e e10 rebaixados, e6.2 perdeu uma ordem, e17 removido. R3:
e14 rebaixado, e13.1.1 adiado, e18 removido.

## 8. O que a máquina errou

Eu sou a máquina. Seis erros específicos desta rodada, com o motivo da desconfiança em cada um.

**1. Usei "8.000+ sites" antes de abrir a página.** A busca devolveu, em três lugares diferentes,
que o Not Human Search indexa "8.000+ sites agent-ready". Ao abrir o site em 12/09/2026, o número
mostrado é **5.316, com score médio 38**. O "8.000+" vem provavelmente do texto de apresentação da
API, que ninguém atualiza. Fiquei com o número da página aberta e registro a divergência — e o
caso serve de aviso: em tema novo, o número que circula é quase sempre o do release.

**2. Ia escrever o nome errado da API.** Toda a cobertura técnica do WebMCP fala em
`navigator.modelContext`. A especificação, aberta em 12/09/2026, define `document.modelContext`
([6]). Se eu tivesse citado de memória — e a tentação era grande, porque quatro fontes secundárias
concordavam entre si — teria escrito o nome errado de uma API num documento que vai ser lido por
quem programa. Concordância entre fontes secundárias não é verificação; é eco.

**3. Escolhi entre números de crawl-to-refer que discordam por ordem de grandeza.** Para a
Anthropic, encontrei 4.580:1 (junho/2026), 3.386:1 (junho), 1.917:1 (julho), 2.237:1 (julho) e
23.951:1 (sem mês). Usei os de julho/2026 do relatório que de fato abri ([17]) e não os mais
impressionantes. Qualquer um deles isolado, sem o mês e sem a metodologia, seria propaganda com
cara de dado.

**4. Três números centrais são de segunda mão e estão marcados como tal — e um quarto trocou de
fonte no meio do caminho.** O tráfego automatizado
em 57,5% vem de [18] citando o Cloudflare Radar — não abri o Radar. Os ~96% a menos de referral e
o ~1% de cliques vêm de [20] citando o relatório da Akamai de 23/04/2026 — não abri o relatório. E
"1.500 organizações apoiando o RSL" apareceu numa busca e **não** está no texto que abri ([8]),
que lista quinze nomes; a seção 5.1 chegou a trazer
"1.500 organizações declaradas de apoio" e foi corrigida para o número verificado, **quinze
apoiadores nomeados no lançamento**. Fica registrado aqui como erro meu, não do documento-fonte. O quarto caso é o do volume do x402: li a análise da
CoinDesk de 11/03/2026, de onde vem o número de US$ 28 mil/dia, e descobri na verificação final que
o veículo devolve HTTP 429 a qualquer checagem automática de link. Meu primeiro movimento foi
trocar a fonte por outra que respondesse 200 — e isso teria sido um erro de duas naturezas.
Primeiro, porque a CoinDesk é a evidência mais forte **contra** uma das raízes deste mapa, e
substituí-la por material mais complacente enfraquece a seção 7 sem que ninguém perceba:
substituição é neutra para link e não é neutra para argumento. Segundo, porque este contexto já
tinha decisão em vigor sobre o caso (TMI-0058, confirmada por TMI-0067), e eu estava prestes a
reabrir em silêncio uma discussão já fechada. Desfiz: a fonte voltou numerada, sem URL, com a URL
no anexo, e a corroboração independente entrou como [22]. Fica o registro de que o erro que quase
cometi não foi factual — foi de método.

**5. Comecei com a raiz errada.** No primeiro rascunho, "otimização para IA (AEO/GEO)" era uma das
disrupções-raiz — é o que a imprensa do setor trata como a grande mudança. Ela não passa no
critério: decorre da busca generativa, que já está em maioria. Se eu não tivesse aplicado o §2,
teria escrito um mapa inteiro sobre uma tendência madura com nome novo.

**6. Chamei o pay per crawl de "geralmente disponível".** As únicas datas que abri são o anúncio
de 01/07/2025 (beta privado, [1]) e o changelog de 10/12/2025 ([2]). "GA" apareceu num título de
terceiro que não abri. Corrigido no texto para "em evolução desde beta privado" — e o episódio
mostra como um adjetivo de release note vira fato num documento em três parágrafos.

**7. Um viés de composição que só percebi ao montar a seção 11.** Das 22 fontes, nove são de
empresas que vendem a infraestrutura descrita (Cloudflare×4, AWS via InfoQ, Coinbase via CoinDesk,
MCP/Anthropic, W3C/WebMCP escrito por Google e Microsoft). Isso não invalida os fatos técnicos —
uma data de changelog é uma data —, mas contamina a **interpretação**: o material disponível
descreve um mundo em que essa camada importa muito, porque foi escrito por quem precisa que ela
importe. A correção possível foi incluir as fontes que medem o não-uso ([12], [10], [11], [20]) e
dar a elas peso igual nas retroações e10 e W3.

## 9. Três cenários para 2041

### Provável — "a web dos dois portões"

É 2041. Quase todo site comercial tem duas portas, e ninguém mais chama isso de novidade: a
página, que continua existindo para gente, e o catálogo de capacidades, que é por onde passa a
maior parte do que se faz. A porta de máquina é entregue pronta pela plataforma de publicação —
quem usa Shopify, WordPress ou o equivalente da década a tem sem nunca ter decidido tê-la; quem
publica fora dela não a tem, e por isso não existe para os agentes. A cobrança por requisição
existe e funciona, mas nunca virou mercado: ela sustenta cauda longa em centavos enquanto o
dinheiro de verdade está em vinte ou trinta acordos bilaterais entre quem fabrica modelo e quem
tem acervo grande. A classificação por propósito virou banal; ninguém estranha que um endereço
devolva coisas diferentes para quem pergunta diferente, e o litígio migrou de "pode entrar?" para
"em que categoria você se declarou?". O jornalismo sustentado por publicidade está em grande parte
fora da camada agêntica — não por proibição, por aritmética. E os acervos públicos dos países que
não fizeram política a respeito, o Brasil entre eles, estão representados nas máquinas por
intermediários estrangeiros que os indexaram primeiro. *Sinal precoce de que estamos entrando
neste cenário:* a primeira grande plataforma de publicação ligar catálogo de ferramentas por
default para todos os seus sites, sem pedir.

### Desejável — "a porta de máquina é infraestrutura pública"

É 2041. A declaração de capacidades virou uma camada tão comum e tão barata quanto ter um
certificado TLS, e por um motivo parecido: alguém decidiu que não podia custar. Existe uma
autoridade de conformidade agêntica com suíte de teste executável por qualquer um — o que começou
naquele Community Group de 2026 —, e "pronto para agente" é uma afirmação verificável por
terceiro, não um selo vendido. O direito de acesso para arquivo, pesquisa e acessibilidade está
escrito em lei, com chave reconhecida por padrão, e por isso o registro histórico da web dos anos
2030 existe. A distinção entre ler-para-responder e ler-para-treinar está na norma técnica, não só
no produto de uma empresa, e o pagamento por uso — não por leitura — tornou-se o mecanismo
padrão, o que fez com que o dinheiro chegasse a quem produziu, inclusive pequeno, via gestão
coletiva com repartição auditável. No Brasil, os acervos públicos foram declarados por política de
Estado em meados da década de 2030, e é por isso que um agente, perguntado sobre uma decisão
judicial ou um dado municipal brasileiro, responde a partir da fonte e não de um resumo de
terceiro. *O que teria de ser feito para chegar aqui:* tirar a política de acesso das mãos de um
único intermediário e pô-la em norma; financiar a camada de declaração dos acervos públicos como
se financia biblioteca; e resolver o pagamento por uso antes que o bilateral se consolide.
*Sinal precoce:* a distinção agente/treino subir para um grupo de trabalho do IETF com exceção
explícita para arquivo.

### Indesejável — "a web de três andares"

É 2041. O andar de cima é fechado e caro: o material que dá trabalho produzir vive atrás de login
e de contrato, acessível a agentes que pagam, e isso resolveu o problema de medição da indústria
ao preço de ter matado a descoberta. O andar do meio é a web aberta, que sobrou como vitrine —
conteúdo feito para ser lido de graça por máquina porque é isca, e ninguém finge o contrário. O
andar de baixo é o acervo de quem não conseguiu entrar em nenhum dos dois: site próprio, veículo
pequeno, instituição pública sem orçamento de infraestrutura, país inteiro sem política. Esse
andar não foi bloqueado; ele simplesmente não é encontrado, porque a descoberta é feita por
pontuação de prontidão e a pontuação dele é baixa. O arquivamento da web parou por volta de 2032,
quando os coletores de preservação passaram a ser tratados como rastreadores de treino e nenhuma
exceção foi criada — a história desses anos vai ser escrita a partir do que as empresas guardaram.
E a qualidade do que os agentes sabem seguiu o dinheiro de quem pergunta: respostas caras usam
fontes caras, respostas baratas usam o que estava de graça. *O sinal precoce deste cenário:* o
primeiro ano em que o volume de páginas arquivadas por instituições de preservação cair, em vez de
crescer. É um número público, publicado anualmente, e é a métrica mais barata de vigiar deste
mapa inteiro.

## 10. O experimento

### O que é

**"A mesma peça, quatro portas."** Pegar **uma única peça editorial real** — uma reportagem curta
produzida pela turma, com dados próprios, fotos e três ou quatro afirmações verificáveis — e
publicá-la em **quatro regimes de acesso simultâneos**, no mesmo domínio, cada um num caminho:

1. `/humano/` — HTML como se faz hoje, com layout, imagens e (importante) um bloco de anúncio
   simulado que registra impressão.
2. `/declarado/` — a mesma peça, mais `llms.txt`, Schema.org e um **servidor MCP** expondo três
   ferramentas: `buscar_afirmacao`, `obter_dado` e `citar_com_fonte`.
3. `/pago/` — a mesma peça, servida atrás de um **HTTP 402** implementado à mão (não precisa de
   stablecoin: basta o 402 com um cabeçalho de preço e um token de pagamento simulado), com preço
   por caminho: manchete grátis, corpo pago, dado primário mais caro.
4. `/fechado/` — a mesma peça atrás de login, com robots.txt bloqueando tudo.

Depois, rodar **a mesma tarefa** com três ou quatro agentes diferentes (um assistente de
programação com acesso à web, um navegador agêntico, um script com um modelo via API) e medir. A
tarefa é fixa e verificável: *"resuma esta reportagem em cinco linhas e cite três números com a
fonte exata de cada um"*.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central da raiz R1, que é a mais frágil do mapa: **declarar serve para alguma coisa?**
Se o agente resolve a tarefa igualmente bem em `/humano/` e em `/declarado/`, então a segunda
superfície é custo sem retorno, o wildcard W3 ganha força e o ramo R1 inteiro cai. E, de quebra,
duas perguntas menores mas mensuráveis: **quanto custa a declaração** (em requisições e em tokens
gastos pelo agente para completar a mesma tarefa) e **o que o 402 quebra** (quantos agentes
tratam o 402 corretamente e quantos simplesmente desistem ou alucinam o conteúdo que não puderam
ler — este último é o resultado mais interessante possível).

### Que tecnologia emergente ele usa, e por que não dá com a madura

Usa **MCP** (servidor com três ferramentas declaradas), **HTTP 402 com preço por caminho** e, se
o Chrome permitir no origin trial, **WebMCP** com `document.modelContext`. Não dá para fazer com
tecnologia madura porque a pergunta é justamente sobre a diferença entre a porta madura e a porta
nova: com API REST documentada e scraping — os dois maduros — o experimento mediria o que já se
sabe. O 402 é o caso mais claro: é um código de 1997 que ninguém implementou; só agora existe
cliente do outro lado que sabe o que fazer com ele, e medir **quantos sabem** é a contribuição.

### O que a turma faz quando testar isso em sala

Trinta a quarenta minutos, em três blocos:

1. **Apostar antes de medir** (5 min). Cada pessoa escreve num papel qual dos quatro caminhos vai
   dar o melhor resumo, e quantos dos números citados vão estar certos. Sem isso, o resultado
   parece óbvio depois.
2. **Rodar ao vivo** (15 min). Cada dupla roda a tarefa com um agente diferente nos quatro
   caminhos e preenche uma tabela: tarefa concluída (sim/não), número de requisições, tokens
   gastos, números citados corretamente, fonte citada corretamente, e **o que o agente fez quando
   levou 402**.
3. **Discutir o que não estava na aposta** (15 min). A discussão que interessa não é qual caminho
   ganhou; é o que apareceu: alucinação sob bloqueio, citação de manchete como se fosse o corpo,
   agente que ignorou as ferramentas declaradas e leu o HTML assim mesmo, ou o contrário.

O material que sai daqui é reaproveitável no movimento 3 e alimenta diretamente a discussão do
tema 2 (identidade) e do tema 5 (pagamento).

### O que seria um resultado que me faria mudar de ideia

Três resultados, cada um derrubando uma parte específica deste mapa:

- **Se `/declarado/` não for melhor que `/humano/` em nenhuma das quatro métricas** — nem em
  acerto, nem em requisições, nem em tokens, nem em citação correta — então a raiz R1 é uma aposta
  de fornecedor, não uma tendência. Eu rebaixaria e1, e3 e e5 para `confianca: baixa` e promoveria
  W3 a cenário provável.
- **Se a maioria dos agentes tratar o 402 corretamente** — pedir, receber preço, e pelo menos
  relatar o custo em vez de desistir ou inventar — então e6 e e7 estão subestimados, e a retroação
  e10 está superestimada: o comprador existe, falta só a carteira.
- **Se os agentes alucinarem o conteúdo de `/fechado/`** em vez de dizer que não conseguiram ler,
  o mapa inteiro ganha um efeito que não previ: fechar a porta não protege o conteúdo, produz uma
  versão falsa dele em circulação. Esse efeito não está na roda, e se aparecer no experimento eu o
  acrescento como primeira ordem de R3.

## 11. Fontes

Vinte e duas fontes, todas abertas nesta rodada (12/09/2026). Quando o dado é de segunda mão, está
dito na linha. Nove delas são de empresas com interesse comercial direto no que descrevem — ver o
item 7 da seção 8.

**Por que `fontes: 22` no frontmatter e 21 URLs nesta seção.** A fonte [10] (CoinDesk) foi aberta e
lida nesta rodada, mas o servidor devolve **HTTP 429 a cliente automatizado — seis medições, seis
429**, pelo método exato do `verificar.py`. Aplica-se o critério em vigor neste contexto
(TMI-0058, confirmado por TMI-0067): a fonte fica numerada e descrita aqui **sem a URL**, e a URL
vai para o anexo, em 12.4, com o motivo. `fontes:` conta **o que foi lido**; a contagem de links
desta seção conta **o que responde a um robô**. As duas deixaram de ser iguais de propósito.

1. **Cloudflare — "Introducing pay per crawl"** · `https://blog.cloudflare.com/introducing-pay-per-crawl/`
   Sustenta: o mecanismo do 402 no pay per crawl, os três modos (allow/charge/block), o uso de Web
   Bot Auth com Ed25519 e a Cloudflare como *merchant of record*. Confiabilidade: fonte primária do
   produto; é o anúncio de um beta privado, sem números de adoção — descreve o desenho, não o uso.

2. **Cloudflare — changelog "pay per crawl enhancements", 10/12/2025** · `https://developers.cloudflare.com/changelog/2025-12-10-pay-per-crawl-enhancements/`
   Sustenta: preço por URI, caminhos sempre gratuitos, onze códigos de erro padronizados e o
   endpoint `charged_zones` de descoberta de domínios que cobram (SF1). Confiabilidade: alta para
   o que documenta; changelog não diz quantos usam.

3. **Cloudflare — "Set a pay per crawl price"** · `https://developers.cloudflare.com/ai-crawl-control/features/pay-per-crawl/use-pay-per-crawl-as-site-owner/set-a-pay-per-crawl-price/`
   Sustenta: preço mínimo de US$ 0,001 por crawl, sem máximo documentado. Confiabilidade: alta,
   documentação de produto.

4. **Cloudflare — "Your site, your rules: new AI traffic options for all customers", 01/07/2026** · `https://blog.cloudflare.com/content-independence-day-ai-options/`
   Sustenta: as categorias Search/Agent/Training, a data de 15/09/2026, o bloqueio por padrão de
   Training e Agent em páginas com anúncio para domínios novos e plano gratuito, e a justificativa
   publicada. Confiabilidade: primária e decisiva para R3 — mas é política de uma empresa, o que é
   exatamente a fragilidade apontada na razão 3 do pré-mortem.

5. **Model Context Protocol — "The 2026-07-28 Specification"** · `https://blog.modelcontextprotocol.io/posts/2026-07-28/`
   Sustenta: protocolo sem estado, roteamento por cabeçalho, listas cacheáveis com TTL, alinhamento
   com OAuth 2.0/OIDC, CIMD no lugar do registro dinâmico, depreciação de Roots/Sampling/Logging.
   Confiabilidade: primária; a parte de adoção é declaração de parceiros.

6. **W3C Web Machine Learning CG — WebMCP, Draft Community Group Report, 10/09/2026** · `https://webmachinelearning.github.io/webmcp/`
   Sustenta: `document.modelContext` com `registerTool`/`getTools`/`executeTool`, o objetivo de
   trabalho colaborativo humano-agente na mesma interface, e a declaração de que **não é padrão
   W3C nem está na trilha de padrões**. Confiabilidade: primária; documento instável por
   construção, com questões em aberto.

7. **IETF — draft-meunier-web-bot-auth-architecture-05, 02/03/2026** · `https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture`
   Sustenta: assinatura de requisições automatizadas com RFC 9421, cabeçalho `Signature-Agent`, e
   dois pontos decisivos — é draft **individual** já substituído, e **não distingue** crawler
   autônomo de agente delegado. Confiabilidade: primária; status de rascunho é o próprio dado.

8. **RSL — press release do padrão, 10/09/2025** · `https://rslstandard.org/press/rsl-standard`
   Sustenta: licença legível por máquina dentro do robots.txt, os três modelos (livre,
   pay-per-crawl, pay-per-inference), o RSL Collective modelado em ASCAP/BMI e os quinze
   apoiadores nomeados. Confiabilidade: é press release — os fatos de desenho são verificáveis, a
   adesão declarada não.

9. **InfoQ — "Cloudflare and AWS Embed x402 Agent Payments at the Edge", 06/07/2026** · `https://www.infoq.com/news/2026/07/cloudflare-aws-x402-micropayment/`
   Sustenta: x402 geralmente disponível em CloudFront e WAF, Monetization Gateway da Cloudflare
   cobrindo páginas, APIs, datasets e ferramentas MCP, x402 Foundation sob a Linux Foundation
   (04/2026), os números declarados pela Coinbase e as duas críticas (detecção de bot e
   contabilidade de IVA). Confiabilidade: jornalismo técnico com atribuição clara; os números da
   Coinbase são declaração da parte interessada e estão marcados assim no texto.

10. **CoinDesk — sobre a demanda real do x402, 11/03/2026** · *URL em 12.4 — o servidor devolve
    429 a cliente automatizado (6/6 medições)*
    Sustenta: ~US$ 28 mil/dia em 131 mil transações, ticket médio US$ 0,20, o pico de fevereiro
    atribuído a teste de infraestrutura, cerca de metade do volume em autonegociação, o
    descompasso com a avaliação do ecossistema e a comparação com Lightning e BAT. É a base de
    e10 e da razão 2 do pré-mortem. Confiabilidade: veículo especializado em cripto — com viés
    próprio, mas aqui é o cético, o que reduz o risco de complacência. É também a evidência mais
    forte **contra** uma das raízes deste mapa, e por isso não foi substituída por uma fonte
    equivalente mais complacente (o mesmo raciocínio registrado em TMI-0067).

11. **Wikimedia Diff — "New User Trends on Wikipedia", 17/10/2025** · `https://diff.wikimedia.org/2025/10/17/new-user-trends-on-wikipedia/`
    Sustenta: queda de ~8% de pageviews humanos, a reclassificação de março a agosto de 2025 após
    detectar bots que se faziam de gente — com o episódio partindo de tráfego anômalo vindo do
    **Brasil** — e a leitura da Fundação sobre busca generativa e vídeo social. Confiabilidade:
    primária, com metodologia declarada e correção assumida — a fonte mais honrada desta lista.

12. **mecanik.dev — "Does llms.txt Do Anything Yet: The 2026 Evidence"** · `https://mecanik.dev/en/posts/does-llms-txt-do-anything-yet/`
    Sustenta: 4.088 → 36.120 arquivos em doze meses (Originality.ai, 3 milhões de sites), 97% com
    zero requisição em maio/2026 e 1,1% de bots de recuperação (Ahrefs, 137 mil domínios). É a
    classe de referência de quase todo prazo do mapa. Confiabilidade: análise secundária que cita
    os dois levantamentos com denominador — não abri os originais, e isso está dito.

13. **digitalapplied — sobre a posição do Google quanto ao llms.txt e o Lighthouse** · `https://www.digitalapplied.com/blog/google-llms-txt-no-seo-value-lighthouse-audit-2026`
    Sustenta: a atualização de 15/06/2026 do guia do Google ("a Busca do Google os ignora") e o
    Lighthouse 13.3.0 movendo *Agentic Browsing* para a configuração padrão em 07/05/2026 (SF2).
    Confiabilidade: blog de agência com citação literal e datas; a citação do Google é verificável
    na documentação, o item do Lighthouse não conferi na origem.

14. **digitalapplied — "MCP Adoption Statistics 2026"** · `https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol`
    Sustenta: 9.652 servidores no registro oficial e 15.926 repositórios com o tópico
    `mcp-server` (ambos 24/05/2026), 41% de organizações com MCP em produção (Stacklok), 97 milhões
    de downloads mensais de SDK. Confiabilidade: o próprio texto declara ter trocado uma
    estatística sem fonte por números com denominador e origem — o que é bom sinal, e é o motivo
    de eu tê-lo preferido a outros agregadores.

15. **IAB Tech Lab — Agentic Advertising and AI** · `https://iabtechlab.com/standards/agentic-advertising-and-ai/`
    Sustenta: AAMP v1.0 (28/01/2026), Agentic Audiences e ARTF (11/2025), CoMP (09/2024) para
    monetizar ingestão por LLM. Confiabilidade: primária do órgão de padrões do setor; descreve
    intenção, não adoção.

16. **Not Human Search** · `https://nothumansearch.ai/`
    Sustenta: 5.316 sites indexados e score médio 38/100, com os sete sinais pontuados (llms.txt,
    ai-plugin.json, OpenAPI, MCP, Schema.org, robots.txt, compatibilidade com bots). É o artefato
    central de e14. Confiabilidade: é o próprio índice — o número é o que ele mostra hoje, e diverge
    do que o material de divulgação afirma (ver seção 8, item 1).

17. **SEOmator — crawl-to-refer ratio, dados de julho/2026** · `https://seomator.com/blog/crawl-to-refer-ratio-ai-crawlers-llm-bots`
    Sustenta: Anthropic 2.237:1, OpenAI 217:1, Perplexity 225:1, Microsoft 35:1, Google 4,6:1, com
    janela móvel de 28 dias encerrada em 21/07/2026 e um painel proprietário de 500+ sites como
    segunda fonte. Confiabilidade: fornecedor de ferramenta de SEO — interesse comercial no
    alarme —, mas é a única leitura que abri com **método e janela declarados**, e os números
    batem em duas redes independentes.

18. **WorkOS — "AI agents now make up the majority of web traffic"** · `https://workos.com/blog/ai-agent-web-traffic-what-developers-need-to-change`
    Sustenta (todos de segunda mão): 57,5% de tráfego automatizado em 03/06/2026 citando o
    Cloudflare Radar, crescimento de ~7.851% a/a do tráfego agêntico citando a HUMAN Security,
    51,8% das requisições de crawler para treino contra 9,3% para busca, e as recomendações de
    credencial escopada com OAuth 2.1 usadas em e13.1. Confiabilidade: empresa que vende
    autenticação escrevendo sobre por que você precisa de autenticação — li os fatos, descontei a
    conclusão.

19. **Engadget — Perplexity derruba a liminar da Amazon, 04/08/2026** · `https://www.engadget.com/2230471/perplexity-has-successfully-overturned-amazon-injunction-on-its-ai-shopping-bot/`
    Sustenta: decisão do Nono Circuito de que quem acessa é o usuário e não a Perplexity, o teste
    da CFAA, e o fato de o mérito continuar aberto com recurso possível. Base de e13 e de W2.
    Confiabilidade: veículo de tecnologia relatando decisão pública; não li o acórdão.

20. **E-Commerce Brasil — sobre o relatório "State of the Internet" da Akamai, 23/04/2026** · `https://www.ecommercebrasil.com.br/noticias/buscas-via-ia-cortam-mais-de-95-do-trafego-para-sites-mostra-estudo`
    Sustenta (segunda mão): chatbots gerando ~96% menos referral que buscadores, ~1% de cliques
    nas fontes, mídia como setor mais afetado. Base da recusa do candidato AEO e de W1.
    Confiabilidade: veículo setorial brasileiro relatando relatório de fornecedor; não abri o
    relatório da Akamai, e o recorte geográfico do estudo não está claro no texto.

21. **W3C — proposta do "Agent Conformance and Benchmarking Community Group", 25/08/2026** · `https://www.w3.org/community/blog/2026/08/25/proposed-group-agent-conformance-and-benchmarking-community-group/`
    Sustenta: a constatação de que vários grupos definem identidade, mensagem, memória e prova de
    ação dos agentes e **nenhum define como medir conformidade**; e a exigência de cinco
    apoiadores para o grupo existir (SF3, e14.1.1). Confiabilidade: primária; é uma proposta, não
    um grupo ativo — e o texto diz isso.

22. **RZLT — "Agentic Payments in 2026: The x402 Explainer"** · `https://www.rzlt.io/blog/agentic-payments-2026-x402-explainer`
    Sustenta: 165 milhões de transações x402 em ~69 mil agentes ativos e ~US$ 50 milhões
    acumulados até abril de 2026, ticket de US$ 0,20 a US$ 0,30, a leitura da Artemis de que o
    surto é "principalmente uma miragem" e a estimativa de ~US$ 600 milhões anualizados da
    Sherlock em 19/03/2026. Entrou como corroboração de [10], que não responde a verificação
    automática. Confiabilidade: material explicativo de empresa do setor — favorável ao protocolo,
    e por isso mesmo útil, porque os números desfavoráveis aparecem apesar do interesse do autor;
    atribui explicitamente à CoinDesk os dados de volume corrente.

**Fontes procuradas e não usadas por não abrirem:** Forbes (04/06/2026, sobre bots superando
humanos) devolveu 403; HUMAN Security (página sobre detecção do ChatGPT Atlas) devolveu 403;
full.services (queda da busca tradicional no Brasil em 2026) devolveu 403. Nenhuma afirmação deste
documento depende delas — os dados que elas trariam estão citados por [18] e [20], com a segunda
mão declarada. Uma quarta página, a PYMNTS sobre o x402, abriu normalmente e foi descartada por
não trazer nenhum número de adoção: só o registro da transferência do protocolo para a Linux
Foundation em 02/04/2026 e a lista de participantes da fundação, que já estão em [9].

## 12. Anexo — o levantamento bruto

### 12.1 Como esta rodada foi feita

Rodada não interativa, em 12/09/2026, com a skill `futurizacao-giordano` v1.2.0 em **modo MAPA**.
Não houve entrevista (§0): veio um bloco `briefing:` completo, o que — pela regra da própria skill,
corrigida na primeira rodada de 10/09 — **substitui a entrevista sem rebaixamento de confiança**.
O que o briefing não cobriu está declarado como premissa assumida em 12.2.

Ferramentas de busca **estavam disponíveis e foram usadas**: 17 buscas na web (em português e em
inglês) e 26 tentativas de abertura de página, das quais 23 responderam. Não houve, portanto, o
rebaixamento previsto no §1 da skill para rodadas sem acesso à web. Das 23 abertas, **22 entraram
na lista de fontes** — a única descartada foi a matéria da PYMNTS sobre o x402, que não traz
nenhum número de adoção. A fonte [10] (CoinDesk) entra numerada e sem URL, com a URL em 12.4, por
devolver 429 a cliente automatizado: é o tratamento em vigor neste contexto (TMI-0058, confirmado
por TMI-0067), medido seis vezes conforme TMI-0034. As três páginas que devolveram 403 estão
listadas ao final da seção 11.

Ordem de trabalho: (1) leitura do formato; (2) leitura da rodada anterior do mesmo autor, para
consistência de estilo e para conferir a saída do verificador; (3) buscas; (4) aberturas; (5)
critério de maturidade e recusas; (6) roda; (7) bateria do §6 sobre o mapa pronto; (8) reescrita
das seções afetadas; (9) verificação.

### 12.2 Premissas assumidas — o que o briefing não cobriu

O briefing fixou tema, horizonte (2041), público (quem projeta mídia e interação), recorte
(global com nota sobre o Brasil), descarte inicial ("o que já é comum em produto de massa"), viés
(neutro), zona de interesse (Agentes) e o falseador ("adoção passou da maioria" ou "não rompe
nada"). **Não cobriu** o seguinte, que assumi e declaro:

1. **Profundidade de três ordens e nada além** — o formato exige exatamente três níveis, e a regra
   de parada do §3.9 foi aplicada: derivei o nível seguinte apenas onde havia troca de ator ou de
   mecanismo. Onde não havia, parei e disse por quê (é o caso de e11.1 e e14.2, que não têm filhos).
2. **Número de raízes: três.** A skill permite de duas a quatro. Escolhi três porque a quarta
   candidata (AEO/GEO) foi recusada por maturidade, e porque as três sobreviventes passam no teste
   da independência (§7.4).
3. **"O que já é comum em produto de massa"** foi lido como a régua do §2: busca generativa que
   responde sem clique, scraping, API REST e SDK estão fora como raiz e dentro como contexto.
4. **Fronteira com os temas vizinhos** — 2 (identidade e detecção), 3 (observabilidade) e 5
   (pagamento e comércio) — resolvida por conteúdo, não por exclusão: quando o assunto encosta,
   o efeito entra com a fronteira declarada no texto (e9.1 é o caso explícito).
5. **A data de corte dos fatos é 12/09/2026.** Um fato deste mapa (o default da Cloudflare) entra
   em vigor em 15/09/2026 — três dias depois. Tratei-o como fato datado e futuro, não como fato
   consumado, e isso está dito em e11.
6. **"Global com nota sobre o Brasil"** foi implementado como uma subseção na âncora (3.5) e dois
   efeitos com o Brasil como ator (e3.1.1 e e7.1.1), não como um mapa paralelo.

### 12.3 Os efeitos cortados, na íntegra

Nada foi cortado em silêncio. Os três removidos na bateria do §6, com o texto original:

**e16 (removido) — "Cursos de design e de comunicação reorganizam o currículo em torno de
interação agêntica."** Removido por ser exatamente um dos quatro efeitos que a skill proíbe sem
ator e mecanismo específicos. Ele serve para qualquer um dos dezenove temas da disciplina, o que é
a definição operacional de genérico. Para entrar, precisaria de nome de curso, de instituição e do
mecanismo que liga a mudança curricular ao efeito pai — e, se eu fosse honesto, o mecanismo real é
"alguém decidiu", que não é mecanismo.

**e17 (removido) — "Sites passam a servir Markdown em vez de HTML quando o visitante é uma
máquina."** Removido por ser melhoria sustentadora no sentido de Christensen: entrega a mesma
coisa, mais barata em token. Não rompe ofício, não rompe modelo de negócio, não rompe suposição.
Virou uma linha de contexto na seção 3 (entre os candidatos recusados).

**e18 (removido) — "Surge a profissão de projetista de experiência agêntica (agent experience
designer)."** Removido pelo mesmo motivo de e16. O que havia de real nele — a existência de uma
decisão nova que não pertence a nenhum departamento existente — foi preservado em **e6.1.1**, que
nomeia o ator (a redação e o comercial de um veículo), o objeto da decisão (o preço por caminho) e
a consequência verificável (quem define o preço define o que vale apurar).

**Um quarto efeito quase cortado, e por que ficou.** "e14.2 — nota de prontidão agêntica entra em
edital" tem a mesma cara dos três acima ("reguladores criam categoria nova"). Ficou porque nomeia
o instrumento (edital com nota mínima aferida por auditoria automática executável), tem precedente
direto (acessibilidade digital, que percorreu exatamente esse caminho) e é falseável: ou aparece
um edital com essa exigência até 2033, ou o efeito está errado. Fica registrado como o efeito mais
frágil que sobreviveu.

### 12.4 As buscas que não deram em nada

- **"Agentes de IA + mídia brasileira + prontidão agêntica"** — não há levantamento de prontidão
  agêntica de sites brasileiros. Nenhum. O que existe é material de agência sobre "AI search" no
  Brasil, que trata de otimização para chatbot, não de camada de protocolo. Isso é, em si, um
  achado: a nota sobre o Brasil (3.5) teve de ser construída por dedução a partir de fatos
  estruturais (quem opera a borda, quem hospeda o acervo público), e não a partir de medição.
- **Publicidade em páginas visitadas por agente, com número** — o IAB tem protocolos para agentes
  transacionarem anúncio entre si ([15]), mas não encontrei nenhuma medição de o que acontece com
  a impressão publicitária quando quem carrega a página é um agente. A pergunta de primeira ordem
  do enunciado do tema ("se o agente lê o site no seu lugar, o que acontece com a publicidade?")
  **não tem resposta medida publicada** até onde esta rodada alcançou. É a lacuna mais
  significativa deste mapa.
- **Número de sites servindo WebMCP em origin trial** — não publicado. Sem ele, o `sinal` de e1
  se apoia em artefatos de publicação (spec, registro, auditoria), não de uso.
- **Receita agregada de pay per crawl** — não publicada por ninguém. Se existisse, seria o dado
  que decide entre e6 e e10, que é a contradição central do mapa (5.3).
- **Volume de páginas arquivadas por instituições de preservação em 2026** — procurei porque é o
  sinal precoce do cenário indesejável (seção 9); não encontrei série atualizada nesta rodada.
  Fica como tarefa para a próxima.
- **Adoção real do NLWeb** — a cobertura é toda de lançamento e de tutorial; não há contagem de
  instâncias. Por isso o NLWeb aparece como mecanismo (e3, e5.2) e nunca como número.

**URL da fonte que bloqueia cliente automatizado (TMI-0058).** A fonte [10] da seção 11 foi aberta
e lida nesta rodada; o servidor devolve 429 a qualquer verificação automática. A URL fica aqui, com
o motivo, para que a checagem de links da seção 11 meça saúde de link e não política de robô:

```
https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet
```

Medição pelo método exato do `verificar.py` (urllib com `User-Agent: Mozilla/5.0`, seis
tentativas, conforme TMI-0034): `[429, 429, 429, 429, 429, 429]` — falha determinística, não
intermitente. Com `curl -L` e User-Agent de navegador completo, o mesmo 429; em navegador, a
página abre. A substituição da fonte por outra que respondesse 200 foi **descartada** porque esta
é a evidência mais forte contra a raiz R2, e trocá-la por material mais complacente enfraqueceria
a retroação e10 e a razão 2 do pré-mortem — mesmo raciocínio já registrado em TMI-0067. A
corroboração independente entrou como fonte [22], que responde normalmente.

### 12.5 Caminhos abandonados

**Um mapa organizado por camada da pilha** (protocolo / descoberta / identidade / pagamento) foi a
primeira estrutura tentada e foi abandonada: produz uma taxonomia arrumada e uma roda ruim, porque
camadas não causam umas às outras — elas coexistem. A estrutura por ruptura (declaração, cobrança,
perda de isonomia) mantém a relação causal, que é o que a roda precisa.

**Um ramo sobre "o fim do SEO"** foi escrito e descartado por redundância com o que já é maduro.
Sobrou dele o e14, que muda o objeto do índice (de documento para capacidade) em vez de falar de
otimização.

**Um ramo sobre agentes atacando sites** (o custo de servir tráfego automatizado, o DDoS
involuntário, o consumo de banda) foi descartado por pertencer ao tema 2. Ele é real e está
medido — mais de 90% do que os bots rastreiam é conteúdo único, o que arruína a economia de cache
—, mas o objeto ali é infraestrutura sob ataque, não a web sendo reprojetada.

**Uma quarta raiz sobre carteira e orçamento do agente** foi descartada por pertencer ao tema 5.
Sobrou dela o e8 e o e9, que tratam do efeito do preço sobre a escolha de fonte — que é assunto
de mídia — e não do mecanismo de pagamento em si.

### 12.6 O que este mapa deixa para os vizinhos

- **Tema 2 (identidade e detecção):** o draft do Web Bot Auth não distinguir crawler de agente
  delegado ([7]) é um problema de segurança antes de ser um problema de acesso. A distinção que a
  Cloudflare usa comercialmente e que o IETF não tem é o assunto deles, com este mapa apenas
  registrando a consequência econômica (e11.2).
- **Tema 3 (observabilidade):** e9.1 exige que o agente registre o que usou em cada resposta.
  Aquele mapa trata do registro; este, só do pagamento que o exige.
- **Tema 5 (pagamento e comércio):** toda a mecânica de carteira, stablecoin, política de gasto e
  AgentCore Payments. Este mapa usa o 402 como preço de conteúdo e para por aí.

### 12.7 Contagem para conferência

| Item | Valor |
|---|---|
| Disrupções-raiz | 3 (R1 declaração, R2 cobrança, R3 perda de isonomia) |
| Candidatos recusados como raiz | 4 (AEO/GEO, API REST e scraping, o agente que navega, Markdown para bots) |
| Efeitos de 1ª ordem | 15 (5 por raiz) |
| Efeitos de 2ª ordem | 20 |
| Efeitos de 3ª ordem | 14 |
| Total de efeitos | 49 |
| Efeitos de retroação | 3 (e4, e10, e15) — um por raiz, como manda a skill |
| Efeitos de "quem perde" | 7 (e3.1, e7.1, e8.1, e10.1.1, e11.2.1, e12, e12.1.1) |
| Convergências nomeadas | 2 (dupla dependência de intermediário; o material caro sai da camada aberta) |
| Retroalimentações | 2 (e13.1.1 com sinal trocado entre R1 e R2; o ciclo e11→e15→e15.1→e11) |
| Contradições registradas | 1 (e6 × e13.1, decidida por e10) |
| Sinais fracos | 6 |
| Wildcards | 4 |
| Alterações da bateria do §6 | 12 (6 rebaixamentos/adiamentos por confiança ou prazo, 1 encurtamento, 1 mudança de ordem, 3 remoções, 1 mantida com analogia declarada) |
| Fontes abertas e citadas | 22 (uma delas, [10], sem URL na §11 por devolver 429 — URL em 12.4) |
| Páginas abertas e não citadas | 1 (PYMNTS, sem número de adoção) |
| Páginas que não abriram | 3 (403) |
| Buscas na web | 17 |
| Dimensão STEEP vazia | 1 (ecológica), declarada em 5.3 |

### 12.8 Saída do verificador

Comando executado:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2041/04-a-internet-agentica-quando-o-usuario-e-uma-maquina/tendencia-a-internet-agentica-quando-o-usuario-e-uma-maquina.md --links
```

Saída, na íntegra:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 20 (frontmatter diz 20)
efeitos ordem 3: 14 (frontmatter diz 14)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 4 · media 11 · baixa 0
confiança ordem 2: alta 0 · media 16 · baixa 4
confiança ordem 3: alta 0 · media 3 · baixa 11
links da seção 11: 21/21 respondem (frontmatter diz fontes: 22)
RESULTADO: ok
```


Leitura da saída, item a item, porque "ok" sozinho já escondeu bug de script numa entrega desta
disciplina:

- **frontmatter 18/18 e títulos 12/12** — o documento está no formato, sem campo faltando e sem
  título trocado.
- **3 raízes, 15 / 20 / 14 efeitos** — os quatro contadores batem com o frontmatter. Total de 49
  efeitos, conferido também em 12.7.
- **prazo > horizonte: 0 em ordens 1-2 e 0 em ordem 3** — nenhum efeito deste mapa passa de 2041.
  O mais distante é e12.1.1, em 2038. Isso não é virtude: com horizonte de quinze anos, todo
  efeito coube dentro da janela, o que sugere que a terceira ordem deste mapa é conservadora.
- **confiança 4/11/0, 0/16/4, 0/3/11** — a distribuição cai com a ordem, como exige o §6.7 da
  skill: a confiança alta desaparece na segunda ordem e a baixa domina a terceira. A checagem
  automática de calibração (mais da metade da terceira ordem em "alta") não foi acionada.
- **links 21/21, com `fontes: 22` no frontmatter** — a divergência é deliberada e está explicada
  na abertura da seção 11: a fonte [10] foi lida mas devolve 429 a cliente automatizado, então
  fica numerada sem URL, com a URL em 12.4, conforme TMI-0058 e TMI-0067. `fontes:` conta o que
  foi lido; a contagem de links conta o que responde a robô. O verificador confere que o link
  responde, não que ele sustenta o que eu disse que sustenta — essa segunda parte é a seção 11
  inteira, e é responsabilidade minha.
