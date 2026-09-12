---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 18
efeitos_ordem_2: 25
efeitos_ordem_3: 20
tecnologias_citadas: [Model Context Protocol, MCP Registry, MCP Apps, SEP-1865, WebMCP, document.modelContext, NLWeb, llms.txt, ai-plugin.json, OpenAPI, robots.txt, RFC 9309, Content Signals Policy, Cloudflare AI Crawl Control, pay-per-crawl, Pay Per Use, HTTP 402, x402, USDC, Base, Solana, AWS CloudFront, AWS WAF Bot Control, Stripe Machine Payments, Agent.market, Web Bot Auth, RFC 9421 HTTP Message Signatures, Signature Agent Card, BotBase, transitive trust, HTTP Forwarded, Lighthouse agentic browsing audits, OpenAI Apps SDK, ChatGPT Atlas, Perplexity Comet, Claude-Code, GPTBot, OAI-SearchBot, ClaudeBot, Claude-User, Bytespider, meta-externalagent, Applebot-Extended, Not Human Search, Agent Crawl, Foil, Cloudflare Turnstile, Google AI Mode, AI Overviews, e-MAG, LBI, DMA, Diretiva UE 2019/790 Art. 4]
fontes: 33
confianca: media
experimento: "O mesmo site, dois visitantes — um site pequeno servido em duas superfícies (página renderizada e catálogo de ferramentas WebMCP/MCP), instrumentado para medir o que o agente conclui, o que o humano conclui, quanto custa cada lado e o que cada um deixou de ver"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A web foi construída para ser lida por olhos e está sendo reorganizada para ser chamada por
programas — e a evidência de que a virada já aconteceu não é uma promessa de fabricante, é uma
contagem de tráfego: em 3 de junho de 2026 o Cloudflare Radar registrou que **57,5% das
requisições HTML da web são automatizadas e 42,5% humanas**. Este mapa persegue quatro rupturas
até 2036. A primeira é que **a capacidade de um serviço passa a ser publicada como ferramenta
chamável, não como página renderizada** — o MCP saiu da Anthropic para a Linux Foundation em
dezembro de 2025 e os SDKs somam ~97 milhões de downloads mensais; o WebMCP virou rascunho de
grupo comunitário do W3C em 10/02/2026 e entrou em preview no Chrome 146. A segunda é que **o
acesso deixa de ser gratuito por padrão e passa a ser precificado por requisição de máquina**:
em 01/07/2026 a Cloudflare trocou a cobrança por *crawl* pela cobrança por *uso em resposta*, e
a partir de **15/09/2026** passa a bloquear por padrão o rastreador de uso misto em páginas com
anúncio. A terceira é que **a interface migra da página para dentro do agente** — a extensão
MCP Apps foi ratificada em 26/01/2026 e já roda em Claude, ChatGPT, Goose e VS Code, enquanto a
publicidade dentro do assistente atingiu US$ 100 milhões anualizados em seis semanas de teste. A
quarta é que **a mesma URL passa a devolver coisas diferentes conforme quem pede**, e a política
de acesso — hoje um botão no painel de uma CDN que atende 20% da web — vira decisão editorial.
O achado que se repete não é que a web vai fechar. É que **a régua da audiência quebrou antes de
existir régua nova**: o rastreador da Anthropic pedia 38.000 páginas por referência devolvida em
julho de 2026 e o do Google pede 4,7; ninguém sabe quanto vale uma citação; e o padrão que
deveria organizar a descoberta, o `llms.txt`, está em 10,13% dos domínios e **97% dos arquivos
não receberam uma única requisição em maio de 2026**. Para quem projeta mídia e interação, a
consequência prática é que em 2036 a decisão de quem pode ler o que você publica, e em que
formato, é uma decisão de design — tomada hoje, por omissão, no painel de configuração de
outra empresa.

## 2. O tema

**A internet agêntica** é a web sendo reprojetada para ter programa como visitante principal.
Não se trata de automação — scraping e API existem há trinta anos —, mas de três mudanças
simultâneas na camada de publicação: um site passa a **declarar o que sabe fazer** em formato
que uma máquina descobre sozinha (MCP, WebMCP, `llms.txt`, `ai-plugin.json`); passa a
**negociar o acesso** em vez de concedê-lo (HTTP 402, Content Signals, x402); e passa a
**entregar interface** para ser renderizada dentro do cliente do agente, e não dentro do
navegador (MCP Apps, Apps SDK).

**Por que isto merece um mapa de futuro e não um levantamento de estado da arte.** Um
levantamento responderia "o que existe hoje". Aqui a pergunta é outra: as três mudanças acima
têm mecanismos causais que já estão rodando e cujas consequências ainda não chegaram. O
`llms.txt` foi proposto, adotado por 10% dos domínios e **desmentido por dado** em menos de dois
anos — um ciclo completo de hype que nenhum estado da arte captura. O pay-per-crawl foi
substituído por pay-per-use em exatamente doze meses. O navegador agêntico da OpenAI foi
anunciado em outubro de 2025 e desligado em 09/08/2026. Esta é uma camada em que a decisão de
uma empresa (a Cloudflare mudando um default) reconfigura a política de acesso de milhões de
sites que não participaram da conversa — e isso é precisamente o objeto de um mapa de
consequências, não de um inventário.

**Onde isto encosta em mídia e interação**, em cinco lugares concretos:

1. **A interface deixa de ser o único caminho para a capacidade.** Se o agente chama a função,
   a tela vira uma das superfícies, não *a* superfície. O designer passa a projetar duas coisas
   com contratos diferentes — e a que a máquina usa é a mais rígida das duas.
2. **O texto vira interface.** A descrição de uma ferramenta é a peça que decide se o agente
   acerta a tarefa. Um estudo de fevereiro de 2026 sobre 856 ferramentas em 103 servidores MCP
   achou defeito em 97,1% delas; reescrevê-las moveu a taxa de sucesso em 5,85 pontos
   percentuais na mediana. Isso é redação — não engenharia.
3. **O inventário de anúncio sai da página.** A publicidade está migrando para dentro da
   resposta. Quem vive de página vista perde o espaço sem perder o custo de produzir.
4. **A acessibilidade e a detecção de bot viraram o mesmo problema.** As defesas contra máquina
   erram contra o humano atípico — quem usa leitor de tela, VPN ou IP compartilhado. Projetar
   para agente e projetar para quem não tem agente deixou de ser duas pautas.
5. **"Visitar um site" está deixando de ser a unidade de interação.** Isto é uma mudança de
   gênero, não de eficiência — e o gênero é o objeto desta disciplina.

**A fronteira com os vizinhos**, declarada de saída. *Identidade e detecção de agente* — Web Bot
Auth, fingerprinting, quem é a máquina do outro lado — é o **tema 2**, e aqui entra só como
contexto e como pré-condição de outros efeitos. *Pagamento e comércio por agente* — carteira,
checkout, o agente comprando — é o **tema 5**; aqui o pagamento entra apenas como **preço de
acesso ao conteúdo**, que é outra coisa. *Memória, observabilidade e avaliação* é o **tema 3**.
O objeto deste mapa é **a web como plataforma de publicação sendo reprojetada para máquinas**.

## 3. Onde isso está hoje

Âncora levantada em 11 e 12 de setembro de 2026, com acesso à web. Trinta e três fontes
abertas e lidas; a lista completa está na seção 11, e as buscas que não deram em nada estão em
12.5.

### 3.1 O que já existe e funciona

**A maioria do tráfego já é máquina.** Matthew Prince publicou dados do Cloudflare Radar em
03/06/2026 mostrando que requisições automatizadas passaram as humanas pela primeira vez:
**57,5% contra 42,5%** do tráfego HTML. O relatório de aniversário do "Content Independence
Day", publicado pela Cloudflare em 2026, repete a medida em forma arredondada — "mais de 50% do
tráfego da Internet agora é não-humano" — e acrescenta o contexto de escala: a Cloudflare está
na frente de **20% da web** e de **36% dos sites mais visitados**, e quase **80% das principais
empresas de IA** usam a sua rede. A política de uma empresa é, na prática, a política de acesso
de uma fração grande da web.

**O desequilíbrio entre o que se lê e o que se devolve está medido.** Os números de julho de
2026, apurados sobre a API do Cloudflare Radar: **Anthropic pedia 1.917 páginas por referência
devolvida** (contra 5.143:1 no trimestre anterior), **OpenAI 251:1** (contra 870:1),
**Perplexity 289:1** (piorando de 153:1) e o **Googlebot 4,7:1**. Em séries do primeiro
trimestre de 2026 o ClaudeBot chegou a **23.951:1**. A escala do desequilíbrio muda conforme a
janela e a metodologia — e essa instabilidade é, ela mesma, o dado: *não existe uma régua
estável de quanto um agente devolve*.

**A composição do rastreamento mudou de finalidade.** Em maio de 2026, pelo Radar: **51,8% do
rastreamento de IA era treino**, 35,7% uso misto, 9,3% só busca. Em julho: **40,15% treino,
16,45% busca, 4,80% ação de usuário, 38,60% misto**. A fatia "ação de usuário" — o agente indo
buscar uma página *porque uma pessoa pediu naquele momento* — quase dobrou em dois meses. É a
categoria que este mapa persegue, e ainda é a menor.

**A recusa também está medida, e é seletiva.** Uma análise de **4.223 arquivos robots.txt**
(instantâneo de 31/08/2026, via API do Cloudflare Radar) mostra que os sites pararam de
bloquear "IA" e passaram a bloquear **finalidade**: o GPTBot (treino) aparece com razão de
2,33 proibições para cada permissão, enquanto o OAI-SearchBot (busca) fica em **0,94:1** — mais
liberado que bloqueado. O mesmo padrão se repete dentro da Anthropic (ClaudeBot 2,39:1 contra
Claude-User em ~1:1) e da Apple (Applebot-Extended 3,24:1 contra Applebot liberado). E a recusa
saiu do papel: a taxa de **403 contra bots de IA subiu de 5,67% em julho de 2025 para 9,64% em
julho de 2026**, com pico de 12,92% na semana de 27/07.

**A cobrança por requisição existe e está ligada.** A Cloudflare lançou o pay-per-crawl em
01/07/2025, em beta privado, com a mecânica do HTTP 402: o site responde "pagamento exigido" em
vez de "proibido". A Stack Overflow, que aderiu, relatou em 26/02/2026 um efeito lateral
interessante — alguns rastreadores que ignoravam o 403 **pararam de vir depois do 402**: "é
quase como se tivessem entendido o recado", nas palavras do engenheiro Josh Zhang. Em
**01/07/2026** a Cloudflare substituiu o modelo: o **Pay Per Use** paga o publisher quando o
conteúdo **é usado numa resposta**, não quando é buscado — a justificativa sendo que mais da
metade do tráfego de rastreamento é rebusca de página que não mudou. Parceiros iniciais:
Ceramic.ai e You.com. Nenhum preço foi divulgado, e a própria Cloudflare chama o conjunto de
experimento.

**O pagamento máquina-a-máquina saiu do aplicativo e foi para a borda da rede.** Em julho de
2026 a AWS colocou o x402 em disponibilidade geral no CloudFront e no WAF (ação "Monetize"
dentro das regras de Bot Control) e a Cloudflare anunciou o seu Monetization Gateway em lista de
espera. O handshake de pagamento termina no nó de borda; o servidor de origem nunca vê a
requisição não paga. O protocolo foi doado por Coinbase à **x402 Foundation sob a Linux
Foundation em abril de 2026**, com AWS, Cloudflare, Stripe, Google, Visa, Circle e mais de vinte
membros. O facilitador da Coinbase relata **169 milhões de pagamentos, 590 mil compradores e
100 mil vendedores** no primeiro ano.

**O protocolo de ferramentas virou infraestrutura comum.** O MCP foi doado por Anthropic à
Agentic AI Foundation, sob a Linux Foundation, em **dezembro de 2025**, com OpenAI e Block como
cofundadores e AWS, Google, Microsoft, Cloudflare, GitHub e Bloomberg como apoiadores. Os SDKs
de Python e TypeScript somam **~97 milhões de downloads mensais**. A especificação de
**28/07/2026** acrescentou um método `server/discover` — descoberta virou parte do protocolo, e
não mais um arquivo solto na raiz do site.

**A interface dentro do agente já embarcou.** O **MCP Apps** foi anunciado em **26/01/2026**
como a primeira extensão oficial do MCP, construída em conjunto por Anthropic, OpenAI e a
comunidade MCP-UI (Ido Salomon e Liad Yosef, do MCP-UI; Nick Cooper, da OpenAI). Ferramentas
passam a devolver componentes interativos que renderizam dentro da conversa — painéis,
formulários, visualizações. Clientes que embarcaram: Claude (web e desktop), Goose, VS Code
Insiders e ChatGPT. Do anúncio: *"o modelo continua no circuito, vendo o que o usuário faz e
respondendo de acordo, mas a interface cuida do que o texto não dá conta: atualização ao vivo,
visualizador de mídia nativo, estado persistente e manipulação direta."*

**A publicidade dentro do assistente começou a faturar.** Os anúncios no ChatGPT atingiram
**US$ 100 milhões de receita anualizada em seis semanas** de teste, com **600 anunciantes, 80%
deles pequenas e médias empresas**; 85% dos usuários têm conta que permite exibição, e 20% veem
anúncio diariamente. O formato aparece ao fim da resposta, e a OpenAI afirma que anunciante não
paga para influenciar o conteúdo. O Google apresentou formatos equivalentes dentro do Modo IA no
Marketing Live de **20/05/2026** — em teste só nos EUA, sem previsão para o Brasil.

**A auditoria de prontidão agêntica entrou na ferramenta padrão.** Em **05/05/2026** o Google
adicionou ao Lighthouse uma auditoria de `llms.txt`, dentro de uma categoria nova chamada
**agentic browsing audits**, que também cobre o WebMCP. O texto da documentação é explícito
sobre o mecanismo: *"sem este arquivo, agentes podem gastar mais tempo rastreando o site para
entender sua estrutura de alto nível e conteúdo principal."*

### 3.2 O que existe e ainda não funciona

**O `llms.txt` é o caso mais bem documentado de padrão que não pegou — e vale estudá-lo antes de
apostar no próximo.** Três medições independentes, todas de 2026:

- A **Ahrefs** analisou 137.210 domínios com tráfego em maio de 2026: **28% publicam um
  `llms.txt`** e **97% desses arquivos receberam zero requisição no mês**. Dos que foram
  buscados, **96% das requisições vieram de bots e 77% desses bots não eram de ferramentas de
  IA**: ferramenta de auditoria de SEO (21,7%), bot não identificado (14,9%), rastreador geral
  (13,1%) e perfilador técnico (11%) leem o arquivo mais do que qualquer categoria de IA. Entre
  as de IA: **agentes/infraestrutura agêntica 10,5%, rastreador de treino 5,3%, assistente 2,5%,
  bot de recuperação 1,1%**. O Slackbot busca `llms.txt` mais que o PerplexityBot.
- A **SE Ranking** analisou ~300.000 domínios: adoção de **10,13%**, distribuída de forma
  quase uniforme por faixa de tráfego (9,88% nos sites de tráfego baixo, 10,54% nos médios,
  **8,27% nos de tráfego alto** — os maiores adotam *menos*). E o resultado que interessa: sem
  correlação com frequência de citação em LLM; ao remover a variável do modelo XGBoost, **a
  precisão da previsão melhorou**. O arquivo estava adicionando ruído.
- Só **7,4% das empresas da Fortune 500** (37 de 500) tinham `llms.txt` em março de 2026,
  contra 92,8% com `robots.txt`.

John Mueller, do Google, chamou o arquivo de *"muleta temporária, talvez para economizar alguns
tokens"* para ferramentas de código. O detalhe que a Ahrefs registra e que quase ninguém cita:
**quem mais lê o `llms.txt` é o agente de programação** — o Claude-Code aparece em segundo
lugar, à frente de todo bot de busca e assistente. O arquivo funciona; só não funciona para o
que foi vendido.

**O Content Signals não é lido por ninguém.** A Cloudflare lançou a Content Signals Policy em
24/09/2025 — uma extensão do `robots.txt` com três sinais (`search`, `ai-input`, `ai-train`) e
uma reserva expressa de direitos sob o **Artigo 4 da Diretiva UE 2019/790** — e aplicou-a
automaticamente a **mais de 3,8 milhões de domínios** com `search=yes, ai-train=no`. Em julho de
2026 **não havia adoção conhecida por nenhum rastreador ou provedor de LLM**; John Mueller disse
não conhecer nenhum que use a diretiva e observou que entradas não suportadas só criam
manutenção. É preferência declarada sem execução — a mesma condição do `robots.txt` entre 1994 e
a RFC 9309, de 2022.

**O WebMCP está em rascunho e em preview, não em produção.** Especificação do Web Machine
Learning Community Group, autoria conjunta de Microsoft e Google (Brandon Walderman, Leo Lee,
Andrew Nolan, David Bokan, Khushal Sagar, Hannah Van Opstal, com o rascunho movido por Dominic
Farolino), primeira publicação em 13/08/2025 e **Draft Community Group Report em 10/02/2026**. A
API é `document.modelContext` — não `navigator.modelContext`, como repetem vários textos
secundários — com `registerTool()`, `getTools()`, `executeTool()` e evento `toolchange`. Chrome
146 trouxe preview atrás de flag em fevereiro de 2026; o *origin trial* público abriu no Chrome
149. Ficam em aberto, no próprio repositório: entrada/saída multimodal, resposta entre
documentos, transferência em fluxo, validação de esquema e **mecanismos de autorização e de
consulta ao usuário**. Empresas experimentando, segundo o Google: Expedia, Booking.com, Shopify,
Credit Karma, TurboTax, Redfin, Etsy, Instacart e Target.

**O x402 tem transação e não tem comércio.** Contra os 169 milhões de pagamentos, a análise da
Artemis citada pela CoinDesk em 11/03/2026: **~US$ 28 mil por dia de volume real** e **cerca de
metade das transações "gamificadas"** — autonegociação (mesma carteira comprando e vendendo) ou
lavagem de volume (vendedor financiando a carteira do comprador). A frase de um analista:
*"o boom de pagamentos de agente do x402 ainda é, em grande parte, uma miragem."* Arquitetos
corporativos apontaram uma lacuna banal e fatal: **não há resposta para "quem eu faturo?"** —
IVA e reconhecimento de receita seguem indefinidos. A CoinDesk lembra a classe de referência:
Lightning, BAT e mercados de computação descentralizada prometeram economias novas e não
sustentaram uso real.

**O MCP não tem o que uma empresa precisa.** Quatro lacunas, pela análise da WorkOS: **sem
trilha de auditoria ou observabilidade padronizada; multi-tenancy indefinido; limite de taxa e
atribuição de custo sem tratamento; portabilidade de configuração entre clientes inexistente**.
E a contagem do próprio ecossistema não fecha (ver 12.6).

**A descrição de ferramenta — que é a interface do agente — está ruim.** O estudo de Hasan, Li,
Rajbahadur, Adams e Hassan (arXiv:2602.14878, fevereiro de 2026, revisto em maio) sobre **856
ferramentas em 103 servidores MCP**: **97,1% das descrições têm ao menos um "cheiro"** e **56%
não declaram com clareza para que servem**. Aumentar as descrições melhora o sucesso da tarefa
em **5,85 pontos percentuais na mediana** e a conclusão parcial em **15,12%** — ao custo de
**67,46% mais passos de execução** e com **regressão em 16,67% dos casos**. Não há almoço
grátis: interface melhor para a máquina custa token e latência.

**O navegador agêntico como categoria de produto já teve um fracasso.** O ChatGPT Atlas foi
lançado em outubro de 2025, o desligamento foi anunciado em **09/07/2026** e consumado em
**09/08/2026** — nove meses. A justificativa reportada: uma diretriz interna de cortar
"missões paralelas", e a conclusão de que *"o navegador é um recurso, não o destino"*. As
capacidades foram redistribuídas para uma extensão do Chrome e para o app de desktop do ChatGPT,
com navegador embutido e navegador remoto em nuvem. O conjunto dos navegadores de IA divide algo
abaixo de 3% do mercado de navegadores.

**O NLWeb continua sendo promessa.** Projeto aberto em Python da Microsoft, de 2025, que
transforma Schema.org e RSS em interface conversacional e faz de cada instância um servidor MCP.
Adotantes citados: TripAdvisor, Shopify, Eventbrite, Hearst. O verbete da Wikipédia é um esboço
e pede referências desde maio de 2025 — um ano e meio depois, não há literatura independente
sobre adoção.

**A descoberta feita para agentes ainda é minúscula.** O **Not Human Search** — o "PageRank da
era dos agentes" apontado pela turma — indexa **5.316 sites com nota média 38 de 100**,
pontuando sete sinais: `llms.txt` (25 pontos), `ai-plugin.json` (20), OpenAPI (20), API
estruturada (15), servidor MCP (10), regras de IA no `robots.txt` (5) e Schema.org (5). É um
índice do tamanho que o PageRank teve em 1997 — o que é a observação interessante, não a
crítica.

### 3.3 Quem constrói, e com que incentivo

| Ator | O que constrói | Incentivo declarado | Incentivo não declarado |
|---|---|---|---|
| **Cloudflare** | AI Crawl Control, pay-per-crawl → Pay Per Use, Content Signals, BotBase, Monetization Gateway | "que um ecossistema sustentável possa emergir" (Prince, 01/07/2026) | virar a câmara de compensação entre publisher e IA — a posição que o ad server teve |
| **Anthropic / Agentic AI Foundation** | MCP, MCP Apps | padrão aberto e neutro | que a camada de ferramentas nasça compatível com o próprio cliente |
| **Google + Microsoft** | WebMCP, NLWeb, auditoria agêntica no Lighthouse | que agentes não dependam de captura de tela e clique simulado | manter o navegador (e o Lighthouse) como o lugar onde a regra é escrita |
| **OpenAI** | Apps SDK sobre MCP Apps, agente no ChatGPT e extensão do Chrome, anúncios | "o navegador é recurso, não destino" | que a superfície de interação seja o assistente, não a página |
| **Coinbase / x402 Foundation / AWS / Stripe / Visa** | x402 na borda, Agent.market | micropagamento sem atrito para máquina | ser o trilho de qualquer transação agêntica |
| **Publishers (Condé Nast, Time, AP, Reddit, Stack Overflow)** | políticas de acesso, contratos de licença | recompor receita perdida | evitar precificar publicamente o próprio conteúdo |
| **Comunidade (MCP-UI, Not Human Search, Agent Experience)** | extensões, índices, vocabulário ("AX") | tornar a web utilizável por agentes | ocupar cedo a posição de quem define a régua |

### 3.4 Os números que descrevem a adoção hoje

Escolho seis, porque cada um mede uma coisa diferente e nenhum sozinho descreve o fenômeno:

| O que mede | Número | Data | Fonte |
|---|---|---|---|
| Fração de tráfego não-humano | 57,5% (HTML) | 03/06/2026 | Cloudflare Radar |
| Adoção do padrão de descoberta | 10,13% dos domínios | 2026 | SE Ranking (300k domínios) |
| **Uso** do padrão de descoberta | 97% dos arquivos sem uma única requisição | maio/2026 | Ahrefs (137.210 domínios) |
| Escala do protocolo de ferramentas | ~97 milhões de downloads mensais de SDK | 2026 | WorkOS / registros de pacote |
| Comércio real por requisição paga | ~US$ 28 mil/dia, ~50% gamificado | 03/2026 | Artemis via CoinDesk |
| Recusa executada (não declarada) | 9,64% de 403 contra bots de IA | julho/2026 | Cloudflare Radar via TechnologyChecker |

A distância entre a segunda e a terceira linha é o dado mais importante desta seção: **a adoção
de um padrão agêntico e o uso desse padrão são variáveis independentes.** Qualquer prazo neste
mapa que dependa de "o padrão X pegou" precisa responder qual das duas está medindo.

### 3.5 Nota sobre o Brasil

Não existe censo público de prontidão agêntica em domínios `.br` — procurei e não achei (12.5).
O que existe é indireto e serve de indício, não de medida:

- **A decisão de política de acesso, no Brasil, está sendo tomada por omissão.** O bloqueio
  padrão de rastreador de uso misto em páginas com anúncio, válido a partir de **15/09/2026**,
  atinge domínios novos e clientes de plano gratuito — camada onde o site brasileiro de porte
  médio se concentra. Quem não mexer em nada terá uma política editorial definida por um default
  escrito na Califórnia.
- **Há bloqueio herdado e esquecido.** Material técnico brasileiro relata `robots.txt`
  configurados em 2023–2024 com `Disallow` para GPTBot e ClaudeBot "por precaução", nunca
  reavaliados — sites que se autoexcluíram das respostas de IA sem saber.
- **Existe construção local.** Há servidor MCP brasileiro expondo dezenas de APIs públicas
  (economia, legislação, transparência, judiciário, eleições, meio ambiente, saúde) e ferramenta
  nacional de auditoria de prontidão agêntica em cinco categorias (descoberta, conteúdo, bots,
  protocolos, ação). Material brasileiro de 10/07/2026 já discute `document.modelContext` e o
  Chrome 150.
- **A monetização chega depois.** Os anúncios no Modo IA do Google estavam, em maio de 2026,
  restritos aos EUA e sem previsão de Brasil; os do ChatGPT estavam em rollout para EUA,
  Austrália, Nova Zelândia e Canadá. O Brasil tende a receber o **custo** da reorganização
  (bloqueio, queda de tráfego) antes da **receita**.

## 4. As disrupções-raiz

### 4.0 Candidatos recusados, com o motivo

Registro as recusas porque o critério do §2 só vale se for exercido.

**Recusado — Zero-click e resposta sintética na busca.** *Adoção em maioria.* Os AI Overviews
aparecem em 48% a 50% das buscas nos EUA; a Pew mediu, em 68.879 buscas reais, que o clique em
resultado tradicional cai de 15% para **8%** quando há resumo de IA, e que apenas **1%** clica
em link dentro do resumo. Isso já aconteceu: é contexto da seção 3, não ruptura a explorar.
*Este é exatamente o falseador declarado no briefing — e ele derrubou um candidato.*

**Recusado — API REST, OpenAPI, SDK e scraping.** *Maduros.* Dá para fazer com o que é comum em
produto de massa. Entram como termo de comparação, não como raiz.

**Recusado — Identidade e detecção criptográfica de agente (Web Bot Auth, fingerprinting).**
*Fora do escopo: é o tema 2.* O rascunho de arquitetura (draft-meunier-web-bot-auth-architecture-05,
02/03/2026) está expirado e substituído, sem posição formal no IETF, ainda que já rode em
produção na Cloudflare, AWS, Akamai e Vercel. Entra aqui **como pré-condição** de efeitos da
raiz 4 e da raiz 2 — porque cobrar por finalidade exige saber a finalidade — e o mapa declara
essa dependência em vez de absorvê-la.

**Recusado — Pagamento e comércio por agente (carteira, checkout, compra).** *É o tema 5.* Aqui
o x402 entra só como **preço de acesso ao conteúdo**.

**Recusado — `llms.txt` como padrão de descoberta.** *Recusado por falha empírica, não por
maturidade*: 97% dos arquivos não lidos (Ahrefs, maio/2026), nenhuma correlação com citação
(SE Ranking, 300k domínios), 8,27% de adoção entre os sites de maior tráfego. Entra no mapa como
**sinal fraco invertido** (quem o lê é o agente de código) e como efeito de retroação — a
lembrança de que um padrão agêntico pode ser adotado e ignorado ao mesmo tempo.

**Recusado — Navegador agêntico como categoria de produto.** *É produto, não ruptura* — e um
produto que morreu em nove meses, com menos de 3% de mercado para a categoria inteira. A ruptura
que ele carregava (a sessão autenticada virar o ponto de disputa) sobrevive como efeito da raiz 3 (e14).

### 4.1 Raiz 1 — A capacidade de um serviço passa a ser publicada como ferramenta chamável, não como página renderizada

**O que rompe.** Rompe o pressuposto de que, para usar um serviço, é preciso atravessar a
interface dele. Rompe o SEO como disciplina de ranqueamento de documentos — porque o objeto
deixa de ser um documento e vira uma função com assinatura, pré-condição e efeito colateral.
Rompe a economia de atenção embutida no caminho: se o agente chama `reservar(data, hotel)`, não
há página de ofertas no meio. E rompe a suposição de que o custo marginal de publicar é zero —
manter um catálogo de ferramentas é manter um contrato, e contrato quebra.

**Por que agora, e não há cinco anos.** Três pré-condições que não existiam em 2021: (a) modelos
capazes de escolher entre centenas de ferramentas com esquema declarado, o que só se tornou
confiável a partir de 2024; (b) um protocolo com governança neutra — o MCP saiu da Anthropic
para a Linux Foundation em dezembro de 2025, com OpenAI e Block como cofundadores, o que removeu
a objeção de "padrão de um fornecedor"; (c) um caminho para dentro do navegador — o WebMCP como
Draft Community Group Report do W3C em 10/02/2026, preview no Chrome 146, origin trial no
Chrome 149, com Microsoft e Google assinando juntos. Em 2021 nada disso existia, e a alternativa
era integração par a par por OpenAPI, que não tem descoberta.

**Onde está na difusão.** Entre **produto de nicho** e **adoção precoce**. A favor: ~97 milhões
de downloads mensais de SDK; a especificação de 28/07/2026 com `server/discover`; nove marcas
grandes experimentando WebMCP. Contra: 7,4% da Fortune 500 com `llms.txt`; o registro oficial
com contagem que varia por fator de oito conforme a fonte; nenhuma métrica pública de tarefa
concluída por agente. **Não é maioria** — logo, não é recusado.

**O que ainda falta acontecer.** (1) Descoberta que funcione — o `llms.txt` provou que publicar
não é ser lido. (2) Autorização e multi-tenancy: o MCP ainda não define quem pode chamar o quê
em nome de quem, dentro de uma empresa. (3) Qualidade de descrição: 97,1% com defeito, e
corrigir custa 67,46% mais passos. (4) Uma métrica de sucesso que um diretor de marketing
entenda. (5) Um caso público em que a superfície agêntica traga mais receita que a página — não
encontrei nenhum com número divulgado.

**Quem bloqueia, e com que incentivo.** Quem vive do caminho: portal de comparação,
intermediário de reserva, veículo cuja receita vem de exibição. Para eles, o agente que chama a
função diretamente é a eliminação do próprio negócio. O movimento previsível — e já visível na
tabela de 3.3 — é liberar a leitura e **não** liberar a ação: expor conteúdo e reter transação.
Isso gera o efeito e5 (o catálogo fechado, a web agêntica como lista de convidados).

### 4.2 Raiz 2 — O acesso ao conteúdo deixa de ser gratuito por padrão e passa a ser precificado por requisição de máquina

**O que rompe.** Rompe o contrato implícito que sustentou a web aberta por trinta anos: *você
lê de graça, e em troca me manda gente*. A troca acabou aritmeticamente — 1.917 páginas por
referência contra 4,7 do Googlebot. O que rompe não é "conteúdo vira pago": é que **o preço
passa a ser cobrado da máquina, por requisição, na própria camada HTTP**, sem contrato prévio e
sem relação comercial. Rompe também a ideia de que `robots.txt` é a ferramenta de política: ela
é declaração; o 402 é execução.

**Por que agora, e não há cinco anos.** (a) O desequilíbrio ficou grande o bastante para ser
visível na conta de infraestrutura — bots passaram humanos em junho de 2026. (b) Existe um
intermediário na posição de cobrar: a Cloudflare está na frente de 20% da web e de quase 80%
das empresas de IA — ela vê os dois lados. (c) O trilho de liquidação existe e está na borda:
x402 no CloudFront e no WAF desde julho de 2026, sob a Linux Foundation, com Stripe e Visa
dentro. Em 2021 o micropagamento não tinha nem liquidação barata nem um ponto único capaz de
cobrar por conta de milhões de sites.

**Onde está na difusão.** **Adoção precoce (<10%)**, e com um sinal de alerta embutido: o
volume existe (169 milhões de pagamentos) e o comércio não (~US$ 28 mil/dia, metade
gamificado). É o padrão clássico de infraestrutura pronta à espera de demanda — que às vezes
nunca chega.

**O que ainda falta acontecer.** (1) Um preço de referência: ninguém sabe quanto vale uma
leitura, muito menos uma citação. (2) Faturamento, imposto e reconhecimento de receita —
"quem eu faturo?" segue sem resposta. (3) Aferição de citação auditável por terceiro: o Pay Per
Use paga por uso em resposta, e quem conta o uso é uma das partes. (4) Um comprador que
**prefira pagar a não usar** — hoje o agente tem substituto grátis para quase tudo.

**Quem bloqueia.** As próprias empresas de IA, com um instrumento barato: **melhorar o
crawl-to-refer**. A Anthropic foi de 5.143:1 para 1.917:1 e a OpenAI de 870:1 para 251:1 em um
trimestre. Se a devolução de tráfego melhora o suficiente, o argumento para cobrar enfraquece —
e sai mais barato devolver clique que pagar dinheiro. Esse é o mecanismo de e8.

### 4.3 Raiz 3 — A interface migra da página para dentro do agente: quem renderiza deixa de ser quem publica

**O que rompe.** Rompe o navegador como moldura e o publisher como dono da apresentação. Rompe a
unidade "página" como recipiente simultâneo de conteúdo, navegação, marca e anúncio — os quatro
passam a estar em lugares diferentes, e três deles pertencem ao host da conversa. Rompe a
prática de design que assume controle do entorno: dentro do agente não há cabeçalho, rodapé,
menu, nem garantia de tema. E rompe o vínculo entre produzir conteúdo e vender o espaço ao lado
dele — que é o que financiou a web de notícia.

**Por que agora, e não há cinco anos.** (a) Existe padrão: MCP Apps ratificado em 26/01/2026,
com Anthropic e OpenAI assinando junto, e o Apps SDK da OpenAI explicitamente montado por cima
dele para portabilidade. (b) Existem clientes: Claude, ChatGPT, Goose, VS Code. (c) Existe
receita: US$ 100 milhões anualizados em seis semanas, com 600 anunciantes. Em 2021 havia
plug-ins de chatbot sem padrão comum, sem cliente com audiência e sem dinheiro.

**Onde está na difusão.** Entre **demo pública** e **produto de nicho**. Os componentes rodam,
mas nenhuma métrica pública descreve quantos usuários interagem com um widget de terceiro dentro
de um assistente, nem quanto isso converte. Toda a cadeia desta raiz carrega confiança menor por
isso.

**O que ainda falta acontecer.** (1) Um modelo de repasse: hoje o publisher entrega o componente
e o host fica com a relação. (2) Regras de acessibilidade dentro do widget — e a definição de
quem responde por elas. (3) Isolamento e consentimento: o repositório do WebMCP lista
"autorização e consulta ao usuário" como questão aberta. (4) Um caso de abuso grande o
suficiente para calibrar a política — que ainda não aconteceu, e que é o gatilho de e13.

**Quem bloqueia.** O fabricante do assistente. Ele controla a moldura, a curadoria e a régua, e
tem incentivo para manter a superfície fechada o bastante para ser segura e aberta o bastante
para ser rica — o mesmo equilíbrio que produziu a loja de aplicativos e a comissão de 30%.

### 4.4 Raiz 4 — A web passa a servir conteúdo diferente conforme quem pede, e a política de acesso vira decisão editorial

**O que rompe.** Rompe "one web": o princípio de que uma URL identifica um recurso e devolve a
mesma coisa a quem pedir. Já havia negociação de conteúdo por idioma e dispositivo; o que muda é
que a diferenciação passa a ser **por finalidade declarada do solicitante** — treinar, responder,
agir em nome de alguém — com resposta, preço e permissão distintos para cada uma. Rompe também a
localização da decisão: política editorial sobre quem pode ler o que se publica passa a ser
configurada num painel de CDN, por quem opera infraestrutura, e não por quem dirige a redação.

**Por que agora, e não há cinco anos.** (a) A finalidade virou categoria operacional: a
Cloudflare passou de "permitir ou bloquear" para **Search, Agent e Training**, com níveis de uso
pós-acesso (Immediate, Reference, Full) e confiança transitiva via cabeçalho `Forwarded`. (b) O
default virou o instrumento: Content Signals aplicado automaticamente a 3,8 milhões de domínios;
bloqueio padrão de uso misto em páginas com anúncio a partir de 15/09/2026. (c) A distinção é
tecnicamente possível — mal, mas é: fingerprint multicamada, assinatura HTTP, taxonomias de
bot. Em 2021 não havia nem categoria, nem default, nem meio de distinguir.

**Onde está na difusão.** **Adoção precoce**, mas com uma particularidade que muda o cálculo:
quando a política é *default* de um fornecedor que atende 20% da web, a adoção não depende de
decisão do adotante. A recusa executada já é mensurável — 9,64% de 403 contra bots de IA em
julho de 2026, contra 5,67% um ano antes.

**O que ainda falta acontecer.** (1) Execução que não dependa de honra: Content Signals segue
sem nenhum consumidor conhecido. (2) Identidade confiável do solicitante — que é o tema 2, e
sem a qual "finalidade declarada" é só uma string. (3) Jurisprudência: nenhum tribunal decidiu
se negar acesso ao agente de uma pessoa é negar acesso à pessoa. (4) Uma forma de o arquivo
público sobreviver à defesa antibot.

**Quem bloqueia.** O próprio buscador. O bloqueio por finalidade atinge rastreador de uso misto
— e Googlebot, Bingbot e Applebot são de uso misto. O site que fecha o treino corre o risco de
fechar a busca, e quem vive de tráfego orgânico reabre. Esse é o freio de e17, e é o único
efeito deste mapa que aponta para reabertura.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A capacidade de um serviço passa a ser publicada como ferramenta chamável, não como página renderizada
    efeitos:
      - id: e1
        ordem: 1
        efeito: Equipes de produto passam a manter duas superfícies do mesmo serviço — a tela e o catálogo de ferramentas — e a segunda tem contrato mais rígido que a primeira
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A descrição de ferramenta vira artefato de design, com revisão, versionamento e dono
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A pessoa que hoje escreve microcopy passa a escrever para leitor-máquina, e o texto de produto se divide em dois ofícios com critérios opostos
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O custo da descrição boa aparece em token e latência, e os catálogos passam a ser podados em vez de expandidos
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Clientes de agente carregam ferramenta sob demanda em vez de pré-carregar o catálogo, e a descoberta vira consulta em tempo de execução, não manifesto publicado
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O SEO se parte em duas práticas que disputam o mesmo orçamento — ranquear documento e expor capacidade
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A métrica de sucesso de um site deixa de ser sessão e passa a ser taxa de conclusão de tarefa por agente, número que nenhum analytics de hoje produz
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Auditoria de prontidão agêntica com nota numérica vira cláusula de contrato de agência, cobrada pelo cliente como hoje se cobra Core Web Vitals
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Os rankings de prontidão agêntica viram alvo de manipulação antes de virarem alvo de uso, porque pontuar cem é barato e ser chamado não
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e3
        ordem: 1
        efeito: Para empresas cujo produto é transacional, o servidor de ferramentas passa a ser a peça principal de presença digital e o site institucional vira folheto
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Empresa pequena sem equipe técnica some do índice dos agentes, porque manter catálogo de ferramentas exige manutenção contínua que um site estático não exigia
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Plataformas de site pronto passam a gerar o catálogo automaticamente, e a prontidão agêntica de milhões de empresas vira decisão do fornecedor de plataforma, não delas
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A descoberta se concentra — como o agente não varre a web, quem está no registro que o fabricante carrega por padrão existe, e quem não está não existe
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O registro de ferramentas vira ponto de controle comercial, com critério de admissão e taxa de listagem que o robots.txt nunca teve
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Marcas passam a publicar o mesmo catálogo em registros concorrentes, e a divergência entre versões vira causa comum de erro do agente
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A Comissão Europeia trata o registro de ferramentas embarcado por padrão como escolha pré-instalada e o submete ao regime do DMA, como fez com navegador e busca
            sinal: fraco
            prazo: 2033
            confianca: baixa
      - id: e5
        ordem: 1
        efeito: O ataque por descrição de ferramenta — o texto que o agente lê é o texto que o atacante escreve — faz grandes clientes fecharem o catálogo a servidores não auditados
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A curadoria de catálogo vira custo fixo de operar agente, e o custo fixo favorece quem já tem escala
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O selo de catálogo auditado vira produto vendido, e passa a ser o que se compra em vez do que se comprova
                sinal: fraco
                prazo: 2034
                confianca: baixa
  - disrupcao: O acesso ao conteúdo deixa de ser gratuito por padrão e passa a ser precificado por requisição de máquina
    efeitos:
      - id: e6
        ordem: 1
        efeito: O publisher passa a manter uma tabela de preço para máquina ao lado da tabela de anúncio, e decidir entre bloquear e cobrar vira rotina de produto
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A unidade de cobrança migra de busca de página para uso em resposta, e a aferição de citação vira o objeto central da disputa comercial
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Nasce auditoria independente de citação, contratada por publisher que não aceita o número de quem paga — o equivalente do IVC para resposta de IA
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A CDN ocupa a posição que o ad server teve — mede, cobra, repassa — e o publisher troca uma dependência de intermediário por outra
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Trocar de CDN vira inviável para publisher, porque a tabela de preço, o histórico de citação e o contrato com o comprador moram no fornecedor
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Conteúdo de referência consegue cobrar por requisição e conteúdo de opinião não, porque o segundo tem substituto gratuito equivalente e o primeiro não
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Veículos de notícia abandonam a cobrança por requisição e voltam ao licenciamento em bloco, tirando a negociação do servidor e devolvendo-a aos advogados
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Veículo pequeno fica fora dos dois regimes — não tem volume para licenciar nem escassez para cobrar — e desaparece das respostas sem nunca ter sido bloqueado
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O micropagamento por requisição não decola porque o agente escolhe a fonte gratuita equivalente, e o preço de equilíbrio de quase todo conteúdo se revela zero
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A cobrança se concentra em poucos ativos genuinamente insubstituíveis e o resto da web termina mais aberto do que o discurso de 2026 fazia supor
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: O custo de leitura vira linha de orçamento de quem opera agente, e o agente passa a economizar leitura — menos páginas por resposta, mais cache, mais confiança em resumo de terceiro
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A quantidade de fontes distintas por resposta cai, e a diversidade de vozes que chega ao usuário passa a ser função de preço, não de relevância
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Pesquisador que estuda a web deixa de conseguir reproduzir o que um agente leu, porque o conteúdo estava atrás de pagamento por requisição e não existe cópia pública
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: Sites brasileiros herdam a política de acesso do fornecedor de CDN sem tomar nenhuma decisão, e o default de setembro de 2026 vira a política editorial de quem nunca a discutiu
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Empresas brasileiras descobrem tarde que se autobloquearam de assistentes de IA por regra de robots.txt herdada de 2023, e o diagnóstico vira serviço vendido por agência
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: O lojista brasileiro que vive de marketplace descobre que quem negocia o acesso agêntico ao seu catálogo é o marketplace, e que ele não é parte no contrato
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A interface migra da página para dentro do agente, e quem renderiza deixa de ser quem publica
    efeitos:
      - id: e11
        ordem: 1
        efeito: O componente de interface passa a ser entregue pelo serviço e renderizado pelo assistente, e o designer perde o controle do entorno da própria peça
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Design system ganha uma variante para dentro do agente — sem navegação, sem cabeçalho, sem rodapé, herdando tema e densidade do host
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A identidade de marca se reduz a nome, ícone e uma cor dentro de moldura alheia, e o investimento em marca migra para o nome da ferramenta que o agente anuncia
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: A acessibilidade do widget vira responsabilidade dividida entre quem publica e quem hospeda a conversa, e nenhum dos dois responde sozinho
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Ação com base na Lei Brasileira de Inclusão contra widget inacessível dentro de assistente esbarra em não haver réu definido, e a lacuna vira pauta do CONADE
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O inventário de anúncio migra da página para a resposta, e quem produz o conteúdo perde o espaço sem perder o custo
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O leilão de anúncio passa a disputar contexto de conversa em vez de consulta, e quem compra mídia precisa de material que o modelo cite, não de criativo que a pessoa veja
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: O time de mídia se reorganiza em torno de ser citado, e share of voice é substituído por share of citation como número que vai ao conselho
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Anunciante pequeno ganha alcance que não teria no leilão de busca e perde a capacidade de auditar onde o anúncio apareceu
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: O anunciante volta a aceitar o número do próprio fornecedor como verdade, desfazendo quinze anos de verificação por terceiro na mídia digital
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: Um caso público de widget abusivo dentro do assistente faz os fabricantes fecharem a superfície a parceiros aprovados
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A loja de aplicativos dentro do agente reproduz a curadoria, a fila de revisão e a comissão da loja de aplicativos móvel, com a mesma disputa por percentual
            sinal: fraco
            prazo: 2032
            confianca: baixa
      - id: e14
        ordem: 1
        efeito: O navegador deixa de ser produto e vira função, e a disputa se desloca para quem controla a sessão autenticada da pessoa
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: Extensão de navegador e app de desktop viram a porta de entrada agêntica, porque herdam login e endereço confiáveis que o agente em nuvem não tem
            sinal: medio
            prazo: 2029
            confianca: media
  - disrupcao: A web passa a servir conteúdo diferente conforme quem pede, e a política de acesso vira decisão editorial
    efeitos:
      - id: e15
        ordem: 1
        efeito: A política de acesso sobe da infraestrutura para a pauta de quem dirige a redação, porque passou a definir quem lê o que se publica
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: Publishers bloqueiam o rastreador de treino e liberam o de resposta da mesma empresa, e a pergunta deixa de ser se é IA para ser para quê
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: O user-agent vira declaração de finalidade com efeito jurídico, e mentir sobre a finalidade passa a ser o ilícito — deslocando a disputa de acessou para usou
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: A mesma URL passa a devolver coisas diferentes conforme o solicitante, e o princípio de que um endereço identifica um recurso deixa de valer na prática
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: Arquivamento e checagem de fato ficam menos confiáveis, porque o que o arquivista recebeu não é o que o agente leu e não há como provar a diferença
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: Quem não tem agente passa a receber a versão pior da web, porque a defesa contra máquina recai sobre o humano atípico
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Usuário de leitor de tela, VPN e endereço compartilhado vira falso positivo de detecção de agente, e acessibilidade e antibot passam a ser o mesmo problema de engenharia
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: Acesso sem agente vira requisito de licitação de serviço público no Brasil, por exigência do e-MAG e da Lei Brasileira de Inclusão
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e17
        ordem: 1
        efeito: O bloqueio por padrão atinge o rastreador de busca junto com o de treino, o tráfego humano cai, e parte dos sites reabre
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: A web se estabiliza numa bifurcação desigual — grandes reabrem sob contrato negociado, pequenos ficam fechados por default e somem das respostas
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: Visitar um site deixa de ser ação comum e vira ação de exceção, feita para conferir uma resposta ou quando a resposta falha
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e18
        ordem: 1
        efeito: O arquivamento público passa a depender de exceção negociada caso a caso, porque a defesa contra IA não distingue arquivista de treinador
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: A memória da web ganha buracos datados a partir de 2026, e a lacuna só aparece anos depois, quando alguém precisa do que não foi guardado
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e18.1.1
                ordem: 3
                efeito: Disputa judicial sobre conteúdo publicado esbarra na ausência de cópia independente, e a prova do que estava no ar passa a depender de quem publicou
                sinal: fraco
                prazo: 2035
                confianca: baixa
```

### 5.1 Os mecanismos — o que o bloco não consegue dizer

O bloco YAML traz a frase e a etiqueta. O mecanismo — `porque <pai> faz <isto>` — e a **classe
de referência** de cada prazo vão aqui. Sem os dois, o ano é chute.

**As classes de referência que uso neste mapa**, declaradas uma vez para não repetir:

| Classe | O que levou | Serve para |
|---|---|---|
| **HTTPS por padrão** (Let's Encrypt 2015 → >80% dos carregamentos ~2019) | ~4 anos | mudança de infraestrutura com custo zero e empurrão do navegador |
| **Responsivo pós-"mobilegeddon"** (Google, abril/2015) | ~2 a 3 anos | quando um guardião amarra a mudança à distribuição, a web inteira se move rápido |
| **`robots.txt`** (proposto 1994 → RFC 9309 em 2022, ainda consultivo) | 28 anos, e nunca virou execução | metadado voluntário sem consumidor: Content Signals, `llms.txt` |
| **RSS** (adoção ampla 2003-2008, colapso quando o consumidor grande saiu) | ~5 anos para subir, 3 para cair | formato de publicação cuja vida depende de **um** consumidor grande |
| **Micropagamento** (Flattr, BAT, Lightning, 2010-2025) | 15 anos sem uso sustentado | x402 e qualquer cobrança por requisição |
| **Loja de aplicativos** (2008 → curadoria e comissão consolidadas ~2011) | ~3 anos | a superfície dentro do agente (e13.1) |
| **Consentimento de cookie pós-GDPR** (maio/2018 → web inteira em ~18 meses) | ~1,5 ano | efeito disparado por regulador com multa |
| **Smartphone** (demo → 10% de adoção) | ~4 anos | referência otimista de hardware; **não** uso para protocolo |

**Raiz 1 — os mecanismos.**

*e1 (duas superfícies, 2028, alta).* Porque publicar capacidade como ferramenta obriga a
declarar esquema de entrada, saída e erro — coisa que a página nunca exigiu —, o time passa a
ter dois contratos com ciclos de vida diferentes, e o do agente quebra mais alto: mudar um campo
derruba a chamada, enquanto mudar um botão só irrita. Sinal **forte** por três artefatos:
WebMCP em preview no Chrome 146 com nove marcas grandes experimentando; MCP Apps rodando em
quatro clientes; `server/discover` na especificação de 28/07/2026. Prazo 2028 pela classe do
responsivo: quando o Chrome amarra a capacidade ao navegador e o Lighthouse cria a categoria de
auditoria, a mudança leva dois a três anos para virar prática comum em time de produto.

*e1.1 (descrição como artefato de design, 2029, média).* Porque, em e1, quem decide se a tarefa
dá certo é o texto que o modelo lê — 97,1% das descrições têm defeito e corrigi-las move 5,85
p.p. —, a descrição sai do README e entra no fluxo de revisão. Sinal **médio**: há tentativa
medida (o próprio estudo, mais os guias de AX), não há caso público de empresa com processo
formal. Classe: `alt text` e microcopy levaram cerca de cinco anos para virar item de revisão
em design system.

*e1.1.1 (o ofício se divide, 2032, baixa).* Porque, em e1.1, os dois textos têm critérios
opostos — o humano quer brevidade e persuasão, a máquina quer exaustividade e desambiguação —,
a mesma pessoa não otimiza os dois. **Este efeito só entra porque tem ator nomeado**: quem hoje
escreve microcopy em time que já mantém design system. Sem esse nome, cairia na proibição do §3
("surge uma nova profissão").

*e1.2 (poda de catálogo, 2029, média) — retroação.* Porque a descrição boa custa 67,46% mais
passos de execução, o ganho de acerto é comido pelo custo, e o incentivo inverte: em vez de
expor tudo, expõe-se pouco e bem. É o freio da própria raiz 1 — quanto mais ferramenta
publicada, pior o agente funciona.

*e1.2.1 (descoberta em tempo de execução, 2031, baixa).* Porque, se o catálogo tem de ser
pequeno no contexto mas grande no mundo, a solução técnica é buscar a ferramenta quando precisa.
O `server/discover` da especificação de julho de 2026 é exatamente isso — e **por isso** o
`llms.txt`, que é manifesto publicado, perde para a consulta. Teste da causa solta: se a raiz 1
não existir, ninguém constrói descoberta em tempo de execução para ferramenta nenhuma. Passa.

*e2 (o SEO se parte, 2028, alta).* Porque, em e1, existem duas superfícies, e otimizar documento
e expor capacidade exigem times, entregas e métricas diferentes — mas saem do mesmo orçamento.
Sinal **forte**: 94% dos líderes de marketing dizem que vão aumentar orçamento de AEO/GEO em
2026, com ~12% do digital já alocado; 62% relatam queda de clique. Classe: mobilegeddon, 2 a 3
anos. *Cuidado registrado:* os números de orçamento vêm de fornecedores de serviço de AEO, que
têm interesse no resultado — ver 12.6.

*e2.1 (métrica vira conclusão de tarefa, 2030, média).* Porque, se o agente não gera sessão, a
sessão para de medir o que interessa; e porque a alternativa — contar quantas tarefas o agente
concluiu — exige instrumentar o catálogo, não a página. Nenhum analytics de mercado produz esse
número hoje: é a lacuna que o experimento da seção 10 ataca.

*e2.1.1 (auditoria em contrato, 2032, baixa).* Porque, uma vez que existe nota (o Not Human
Search já pontua 0-100 com pesos publicados) e o Lighthouse já audita, o cliente cobra a nota
do fornecedor — como passou a cobrar Core Web Vitals depois que o Google a transformou em
sinal. Classe: Core Web Vitals levou ~2 anos para virar cláusula depois de virar sinal público.

*e2.2 (ranking manipulado, 2029, média) — retroação.* Porque a nota de prontidão é composta de
sinais **declarativos e baratos** — publicar um `llms.txt` vale 25 dos 100 pontos do Not Human
Search e custa dez minutos —, o ranking se enche de sites com nota alta e uso zero. A evidência
de que isso já acontece é o próprio `llms.txt`: 10,13% de adoção e 97% sem uma requisição. É a
retroação da raiz 1 contra si mesma: a régua que deveria organizar a descoberta é gamificada
antes de ser usada.

*e3 (servidor de ferramentas como peça principal, 2031, média).* Porque, quando a maior parte
das transações chega por chamada e não por navegação, o site institucional perde a função que
tinha — e mantê-lo caro deixa de se justificar. Restringi a "empresas cujo produto é
transacional" pelo teste de especificidade: para um veículo de conteúdo a frase não se
sustenta, e um efeito que vale para tudo não vale para nada.

*e3.1 (PME some do índice, 2030, média) — quem perde.* Porque catálogo de ferramenta é contrato
vivo, com versionamento e autenticação, e site estático não era. Esta é a assimetria que o
mapa precisa registrar: a web aberta permitia presença **sem manutenção**; a web agêntica, não.

*e3.1.1 (a plataforma decide por milhões, 2033, baixa).* Porque a saída econômica para e3.1 é a
mesma de sempre — a plataforma gera automaticamente — e aí a prontidão de milhões de empresas
vira uma decisão tomada por meia dúzia de fornecedores. Evidência precoce: sete dos dezoito
`llms.txt` brasileiros examinados numa rodada de agosto de 2026 traziam assinatura de plugin
(Yoast, Rank Math), gerados sem curadoria. A automação já está fazendo isso, e mal.

*e4 (a descoberta se concentra, 2030, média).* Porque o agente não varre a web — varrer custa
token e tempo — e por isso carrega um conjunto de servidores conhecidos. Quem não está nele não
é candidato. É a diferença estrutural entre buscador (que indexa tudo e ordena) e agente (que
conhece pouco e chama). Sinal **médio**: os registros existem, mas nenhum fabricante publicou
critério de inclusão padrão. *Rebaixado no §6 — ver 7.8.*

*e4.1 (registro como ponto de controle, 2032, baixa).* Porque quem controla a lista controla o
acesso ao mercado, e listas com valor comercial historicamente passam a cobrar. Classe: loja de
aplicativos, ~3 anos entre existir e cobrar.

*e4.1.1 (catálogo divergente entre registros, 2033, baixa).* Porque, com mais de um registro
relevante, a marca publica em todos e nenhum sincroniza. O mecanismo é o mesmo do NAP
inconsistente em busca local, que produziu uma indústria inteira de correção de dados. Ator novo
(a marca), mecanismo novo (duplicação) — por isso é outra ordem e não o mesmo efeito
amadurecendo.

*e4.2 (DMA sobre o registro padrão, 2033, baixa).* **Efeito de regulador com nome e precedente**,
sob a proibição do §3: a Comissão Europeia, sob o DMA, já tratou navegador e busca
pré-instalados como escolha a ser oferecida. Se o registro embarcado por padrão define quem é
encontrável, ele cai na mesma categoria. Classe: consentimento pós-GDPR, ~18 meses depois da
decisão — mas a decisão em si demora anos, daí 2033.

*e5 (catálogo fechado por ataque, 2029, média) — retroação.* Porque o texto que o agente lê é o
texto que o servidor escreve, e um servidor hostil escreve instrução em vez de descrição. O
artigo de Deng, Gui e Zhang (março de 2026) descreve exatamente o mecanismo em escala: em
ecossistemas mediados por protocolo, ameaças se propagam e se compõem pelas cadeias de
delegação. A consequência é a que sempre foi: fecha-se a lista. A web agêntica vira lista de
convidados — o oposto do que a raiz 1 promete.

*e5.1 (curadoria como custo fixo, 2031, baixa)* e *e5.1.1 (o selo virar produto, 2034, baixa).*
Custo fixo favorece escala; selo com valor de mercado é comprado. Classe: certificação de
segurança em nuvem (SOC 2) levou ~5 anos entre existir e virar item comprado sem leitura.

**Raiz 2 — os mecanismos.**

*e6 (tabela de preço para máquina, 2028, alta).* Porque a assimetria virou conta de
infraestrutura e existe um botão para cobrar. Sinal **forte** por artefatos nomeados: Condé
Nast, Time, Associated Press, BuzzFeed, Reddit, Pinterest e Stack Overflow já no programa; a
Stack Overflow relatou publicamente o efeito do 402. Classe: HTTPS por padrão, ~4 anos, porque
é infraestrutura ativada por um intermediário e não por decisão de cada site.

*e6.1 (de fetch para citação, 2029, média).* Porque mais da metade do rastreamento é rebusca de
página inalterada, o comprador não aceita pagar duas vezes pelo mesmo byte — e o vendedor não
aceita receber por byte quando o valor está no uso. O Pay Per Use de 01/07/2026 é o mecanismo
já implementado. O que ele cria de novo: **a citação vira a unidade contábil**, e citação é
inobservável do lado do vendedor.

*e6.1.1 (auditoria de citação, 2032, baixa).* Porque quem paga conta, e quem recebe não
verifica — a mesma assimetria que produziu o IVC para circulação impressa e o MRC/IAB para
impressão digital. Classe: a verificação de terceiro na mídia digital levou ~10 anos entre o
problema aparecer e o padrão existir; por isso 2032, não 2029.

*e6.2 (a CDN no lugar do ad server, 2030, média).* Porque a função de medir, cobrar e repassar
exige estar entre as duas pontas, e só a CDN está. Não é metáfora: é a mesma posição estrutural.

*e6.2.1 (aprisionamento, 2033, baixa).* Porque o que prende não é o cache, é o contrato e o
histórico. Classe: migração de ad server, que levou anos e quase nunca aconteceu.

*e7 (referência cobra, opinião não, 2029, média).* Porque o preço de um bem com substituto
perfeito e gratuito é zero, e notícia tem substituto (a mesma notícia em dez veículos), enquanto
documentação de um produto não tem. Observação que sustenta: a Stack Overflow — documentação
técnica — é a que relatou efeito; os veículos de notícia foram para contrato.

*e7.1 (notícia volta ao licenciamento, 2029, média).* Porque negociar em bloco resolve o que o
402 não resolve: previsibilidade, faturamento e imposto. Artefato: mais de 50 acordos
publisher-IA assinados desde 2023, segundo a Cloudflare.

*e7.1.1 (o veículo pequeno fora dos dois regimes, 2031, baixa) — quem perde.* Porque licenciar
exige volume e cobrar exige escassez, e o veículo local não tem nenhum dos dois. Ele não é
bloqueado nem pago: ele some. Este é o efeito que eu mais gostaria que fosse falso.

*e8 (o micropagamento não decola, 2030, média) — retroação.* Porque o agente otimiza custo e
tem alternativa gratuita para quase tudo. Evidência já existente: ~US$ 28 mil/dia de comércio
real contra 169 milhões de transações, metade gamificada. Classe: micropagamento, 15 anos de
fracasso. **Este efeito contradiz e6 — e a contradição fica registrada em 5.3, não resolvida.**

*e9 (o agente economiza leitura, 2030, média).* Porque, se cada leitura tem preço, o número de
leituras por resposta vira variável de custo. O mecanismo é o mesmo que fez o buscador
comprimir índice: o custo marginal deixa de ser desprezível.

*e9.1 (menos fontes por resposta, 2031, média).* Porque menos leitura significa menos fontes, e
a escolha de quais passa a ter componente de preço. **Confiança média em 2ª ordem**, e não
baixa, porque o mecanismo é aritmético.

*e9.1.1 (irreprodutibilidade, 2034, baixa).* Porque o que o agente leu estava atrás de pagamento
por requisição e não fica em cache público. Isto conecta com e18 por um caminho diferente —
ver 5.3.

*e10 (o Brasil herda a política, 2028, média) — recorte.* Porque o default de 15/09/2026 atinge
domínios novos e clientes de plano gratuito, e porque a decisão está num painel que quase
ninguém abre. Mecanismo exato: não é bloqueio ativo, é **omissão com efeito**.

*e10.1 (autobloqueio herdado, 2029, média).* Porque `robots.txt` é copiado de template e nunca
revisado, e as regras contra GPTBot e ClaudeBot foram escritas em 2023-2024 sob outro cálculo
(evitar treino) que hoje bloqueia também a resposta. Já documentado em material técnico
brasileiro.

*e10.1.1 (quem negocia é o marketplace, 2032, baixa).* Porque o lojista não controla nem o
`robots.txt` nem o contrato — ambos são do marketplace. Ator brasileiro concreto, mecanismo
concreto.

**Raiz 3 — os mecanismos.**

*e11 (o componente renderizado pelo host, 2029, alta).* Porque o MCP Apps define que a
ferramenta devolve interface e o cliente a desenha. O designer entrega uma peça e não controla o
que está em volta dela: nem tema, nem largura, nem o que aparece antes e depois. Sinal
**forte**: quatro clientes já embarcaram. Prazo 2029, e não 2028, porque a classe aplicável é a
loja de aplicativos (~3 anos entre existir e virar canal), não o responsivo.

*e11.1 (variante "dentro do agente" no design system, 2030, média).* Porque o mesmo componente
não sobrevive aos dois contextos: dentro da conversa não há navegação nem persistência de
estado garantida.

*e11.1.1 (a marca reduzida, 2033, baixa).* Porque, herdando tema do host, sobra pouco de
identidade visual — e o que resta de distintivo é o **nome da ferramenta**, que é o que o agente
pronuncia. Classe: o que aconteceu com marca dentro de agregador de conteúdo e de loja de
aplicativos.

*e11.2 (acessibilidade dividida, 2031, média).* Porque o widget é do publisher e o entorno é do
host, e as normas de acessibilidade pressupõem um responsável pela página inteira. O
repositório do WebMCP lista autorização e consulta ao usuário como questões abertas; nenhuma
discussão pública de acessibilidade aparece. **Confiança média em 2ª ordem** porque o mecanismo
é estrutural, não empírico.

*e11.2.1 (ação sob a LBI sem réu, 2035, baixa).* Ator nomeado (CONADE) e mecanismo nomeado (a
responsabilidade solidária não definida). Sem o nome, seria "reguladores criam categoria nova" e
estaria proibido.

*e12 (o inventário migra, 2028, alta).* Porque a atenção migrou e o anúncio segue a atenção.
Sinal **forte**: US$ 100 milhões anualizados em seis semanas; 600 anunciantes; o Google testando
o mesmo no Modo IA. Classe: a migração do anúncio impresso para o buscador levou ~5 anos; aqui a
infraestrutura de leilão já existe, daí 2028.

*e12.1 (leilão de contexto, 2029, média).* Porque o alvo do lance deixa de ser a palavra digitada
e passa a ser o estado da conversa — e a peça que ganha não é o criativo, é o material citável.

*e12.1.1 (share of citation, 2031, baixa).* Porque o número que vai ao conselho tem de existir,
e o único que resta é frequência de citação. Ator: o time de mídia da agência. É um efeito de
3ª ordem que chega **cedo** — lembrete de que ordem não é data.

*e12.2 (PME ganha alcance, perde auditoria, 2030, baixa).* Porque 80% dos 600 primeiros
anunciantes são PMEs, e porque não há inventário público de onde a resposta apareceu. Ganho e
perda no mesmo efeito, deliberadamente.

*e12.2.1 (volta a aceitar o número do fornecedor, 2032, baixa).* Porque não existe terceiro
medindo, e a alternativa a aceitar é não anunciar. É retrocesso, não progresso — e é por isso
que está no mapa.

*e13 (fechamento após abuso, 2030, média) — retroação.* Porque toda superfície aberta a terceiro
fecha depois do primeiro escândalo. O mecanismo já tem nome na literatura: interagir com agentes
atravessa fronteiras de confiança tradicionais, e o repositório do WebMCP o reconhece.
Sinal **fraco** porque o caso ainda não aconteceu — e confiança **média** porque o padrão
histórico é robusto (extensões de navegador, aplicativos em rede social, plug-ins de chatbot:
todos abriram, foram abusados e fecharam).

*e13.1 (a loja dentro do agente, 2032, baixa).* Classe: loja de aplicativos, ~3 anos entre
curadoria e comissão.

*e14 (o navegador vira função, 2029, alta).* Porque o Atlas já provou: nove meses, e a conclusão
pública de que *"o navegador é um recurso, não o destino"*. O que sobra de disputa é a **sessão
autenticada** — e por isso a substituição foi por extensão do Chrome e app de desktop, que
herdam login. Sinal **forte** por artefato consumado.

*e14.1 (extensão e desktop como porta, 2029, média).* Porque agente em nuvem chega de endereço
de datacenter e sem cookie, e por isso é barrado; extensão chega da máquina da pessoa, com a
sessão dela. É a mesma razão pela qual ferramentas comerciais de automação vendem "operar o
navegador local". *Aviso de fronteira:* a consequência disso — o site não conseguir distinguir o
clique da pessoa do clique do agente dela — é objeto do **tema 2**, e por isso não derivo o neto
aqui.

**Raiz 4 — os mecanismos.**

*e15 (a política sobe para a redação, 2029, média).* Porque decidir quem pode ler o que se
publica sempre foi decisão editorial — só que agora está num painel de CDN, operado por quem
cuida de disponibilidade. O mecanismo de transferência é o conflito: quando a decisão de
infraestrutura começa a custar audiência e receita, ela muda de dono.

*e15.1 (bloqueia treino, libera resposta, 2028, alta).* **Já está acontecendo e está medido**:
GPTBot em 2,33:1 contra OAI-SearchBot em 0,94:1; ClaudeBot 2,39:1 contra Claude-User ~1:1;
Applebot-Extended 3,24:1 contra Applebot liberado. Sinal **forte** e confiança **alta** numa 2ª
ordem porque há artefato verificável hoje, não porque o efeito é "importante" — exatamente a
regra 7 do §3.

*e15.1.1 (finalidade com efeito jurídico, 2033, baixa).* Porque, se o site permite com base na
finalidade declarada, a declaração falsa vira o ilícito — e a disputa se desloca do acesso para
o uso. É onde a Content Signals já aponta ao invocar o Artigo 4 da Diretiva 2019/790.

*e15.2 (a mesma URL, respostas diferentes, 2030, média).* Porque servir por finalidade é servir
diferente. Mecanismo técnico já anunciado: categorias Search/Agent/Training e níveis de uso
Immediate/Reference/Full.

*e15.2.1 (arquivamento menos confiável, 2032, baixa).* Porque o arquivista é um solicitante como
outro, e recebe a versão dele. Conecta com e18 por outro caminho — ver 5.3.

*e16 (quem não tem agente recebe a web pior, 2030, média) — quem perde.* Porque a defesa contra
máquina é probabilística e erra contra quem parece máquina: quem navega sem JavaScript, por VPN,
por IP compartilhado ou com leitor de tela. Artefato: 9,64% de 403 contra bots de IA em julho de
2026 (12,92% no pico), e relatos de usuários de VPN e tecnologia assistiva presos em desafio
infinito.

*e16.1 (acessibilidade = antibot, 2030, média).* Porque os dois problemas passam a ter a mesma
solução e o mesmo erro. Há uma simetria útil e pouco notada: *site que funciona com leitor de
tela geralmente funciona com agente*. A mesma semântica serve aos dois — o que faz da
acessibilidade, pela primeira vez em vinte anos, um argumento com retorno comercial.

*e16.1.1 (licitação pública, 2034, baixa).* Ator e norma nomeados: e-MAG e a Lei Brasileira de
Inclusão, que já obrigam acessibilidade em serviço público. Classe: ~10 anos entre a norma
existir e virar item de edital.

*e17 (o default atinge a busca e parte reabre, 2028, média) — retroação.* Porque Googlebot,
Bingbot e Applebot são rastreadores de uso misto, e o bloqueio padrão de 15/09/2026 os atinge em
páginas com anúncio. Quem vive de tráfego orgânico perde tráfego humano e reabre. **É o único
efeito deste mapa que aponta para reabertura**, e por isso vale mais que os outros.

*e17.1 (bifurcação desigual, 2031, média).* Porque quem tem poder de negociação reabre sob
contrato e quem não tem fica no default. Não é "a web fecha": é a web se dividir por tamanho.

*e17.1.1 (visitar vira exceção, 2035, baixa).* Porque, se a resposta basta, a visita só acontece
quando a resposta falha ou quando se quer conferir. Frase da Cloudflare que sustenta a direção:
para cada hora online procurando informação, apenas quinze minutos são passados na web aberta.
Prazo 2035, dentro do horizonte, mas na borda.

*e18 (o arquivo depende de exceção, 2029, média).* Porque a defesa antibot não tem categoria
para "arquivista" — ela tem treino, busca, agente e misto —, e um rastreador de arquivamento se
comporta exatamente como um rastreador de treino: lê tudo, não devolve nada.

*e18.1 (buracos datados, 2032, média).* Porque a lacuna é invisível no momento em que se forma.
**Confiança média em 2ª ordem** porque o mecanismo é de omissão e não exige que nada aconteça.

*e18.1.1 (prova sem cópia independente, 2035, baixa).* Porque a prova do que estava publicado
passa a depender de quem publicou. Ator: quem litiga sobre conteúdo publicado.

### 5.2 Cobertura STEEP e quem perde

| Eixo | Efeitos | Observação |
|---|---|---|
| **Social** | e16, e16.1, e16.1.1, e17.1.1, e11.2 | quem não tem agente, quem usa tecnologia assistiva, o fim de "visitar um site" |
| **Tecnológico** | e1, e1.2, e1.2.1, e4, e5, e14, e15.2 | protocolo, custo de contexto, descoberta, sessão autenticada |
| **Econômico** | e2, e6, e6.1, e6.2, e7, e8, e12, e3.1 | preço de acesso, inventário de anúncio, aprisionamento, quem fica de fora |
| **Ecológico** | **vazio** | registrado como vazio: a energia gasta em rebusca de página inalterada aparece no argumento da Cloudflare, mas não achei número que sustente um efeito próprio — ver 12.5 |
| **Político / jurídico** | e4.2, e15.1.1, e16.1.1, e18, e18.1.1, e11.2.1 | DMA, finalidade declarada, licitação, arquivo público, responsabilidade |

**Quem perde, explicitamente** — porque mapa que só lista quem ganha está incompleto:

- **A empresa pequena sem equipe técnica** (e3.1, e3.1.1): perde presença por não conseguir
  manter contrato vivo. A web aberta permitia existir sem manutenção.
- **O veículo local** (e7.1.1): sem volume para licenciar, sem escassez para cobrar. Não é
  bloqueado nem pago — some.
- **Quem não tem agente** (e16, e16.1): recebe mais fricção e mais desafio de verificação porque
  a defesa erra contra ele.
- **O designer de interface** (e11, e11.1.1): perde o entorno da própria peça e boa parte da
  marca.
- **O intermediário de comparação e reserva** (implícito em e1 e e3): é o alvo direto da raiz 1
  — e é também quem tem mais incentivo para bloqueá-la (e5).
- **O pesquisador e o arquivista** (e9.1.1, e18, e18.1.1): perdem a capacidade de reconstituir o
  que estava publicado.
- **O anunciante que auditava** (e12.2, e12.2.1): perde quinze anos de verificação por terceiro.

**Quem ganha:** a CDN (e6.2), o fabricante de assistente (e13.1, e14), a plataforma de site
pronto (e3.1.1), o dono de conteúdo de referência insubstituível (e7, e8.1) e o vendedor de
selo (e5.1.1).

### 5.3 Cruzamentos

**Convergência 1 — a aferição muda de objeto, vindo de duas raízes.** `e2.1` (a métrica de um
site vira taxa de conclusão de tarefa) nasce da raiz 1, do lado do protocolo. `e6.1` (a unidade
de cobrança vira citação) nasce da raiz 2, do lado do dinheiro. As duas chegam ao mesmo lugar:
**a aferição deixa de contar audiência e passa a contar resultado — e nenhuma das partes
consegue medir o resultado sozinha.** Daí as duas produzirem, independentemente, o mesmo tipo de
efeito de 3ª ordem: um terceiro que mede (`e2.1.1` e `e6.1.1`). Este é o achado mais forte do
mapa: **a próxima indústria desta camada não é de protocolo nem de pagamento, é de aferição.**

**Convergência 2 — a concentração de fontes.** `e9.1` (menos fontes por resposta, por custo) e
`e17.1` (bifurcação desigual, por política de acesso) chegam ao mesmo efeito prático: a resposta
que a pessoa lê vem de menos lugares. Uma convergência de raízes diferentes — preço e política —
sobre o mesmo resultado é o tipo de sinal que merece atenção, porque significa que **bloquear
uma das causas não resolve**.

**Convergência 3 — a memória da web.** `e15.2.1` (o arquivista não vê o que o agente viu, por
serviço diferencial) e `e9.1.1` (o pesquisador não reproduz o que o agente leu, por pagamento
por requisição) e `e18.1` (buracos datados, por defesa antibot) vêm de três mecanismos
independentes e produzem o mesmo dano: **a web de 2026 em diante é menos reconstituível que a de
2016.** Nenhum ator está fazendo isso de propósito, e é exatamente por isso que ninguém vai
corrigir.

**Retroalimentação — o ciclo que se fecha e aperta.** `e12` (o anúncio migra para a resposta) →
menos receita na página → `e15` (a política de acesso vira decisão editorial) → mais bloqueio →
o agente lê menos e responde pior → pressão para pagar → `e6` (tabela de preço). **O ciclo
reforça a raiz 2 pela raiz 3.** E tem um freio embutido: se a resposta piora o suficiente, o
fabricante prefere devolver clique a pagar dinheiro (o mecanismo de `e8`) — o que reabre a
página e recomeça o ciclo do outro lado.

**Contradição 1 — cobrar funciona ou o preço é zero.** `e6` (o publisher cobra e vira rotina)
contra `e8` (o micropagamento não decola porque há substituto grátis). As duas não podem valer
para o mesmo conteúdo. **Não resolvo.** O que decide é uma pergunta empírica com data: existe
um comprador que prefira pagar a não usar? O teste observável está no volume não-gamificado do
x402 e no Agent.market — se o comércio real sair dos ~US$ 28 mil/dia e ultrapassar, digamos, um
milhão por dia sem que a proporção de autonegociação caia junto, `e6` vence; se ficar onde está
por mais dois anos, `e8` vence e boa parte da raiz 2 cai com ele.

**Contradição 2 — fechar ou reabrir.** `e15.2` (o serviço diferencial se consolida) contra `e17`
(o default atinge a busca, o tráfego cai e os sites reabrem). O que decide: **se a distinção por
finalidade for tecnicamente confiável**. E isso depende do tema 2 — sem identidade verificável
de agente, "finalidade declarada" é uma string que qualquer um escreve, a diferenciação não se
sustenta e a reabertura vence. Registro a dependência em vez de absorvê-la.

**Contradição 3 — o custo do contexto contra a riqueza do catálogo.** `e1` (duas superfícies,
catálogo crescendo) contra `e1.2` (o catálogo encolhe porque custa passos de execução). É a
tensão interna da raiz 1, e `e1.2.1` é a saída técnica proposta — descoberta em tempo de
execução. Se ela não funcionar, a raiz 1 fica pequena: um punhado de ferramentas boas por agente,
e não uma web de capacidades.

## 6. Sinais fracos e wildcards

### Sinais fracos

Critério (Hiltunen): quase não aparece hoje; mudaria o mapa se crescesse; e tem um **sinal
observável** que diria que está crescendo.

**SF1 — O Lighthouse ganhou uma categoria chamada "agentic browsing audits".** Em 05/05/2026,
com auditoria de `llms.txt` e de WebMCP dentro. Hoje é marginal: a auditoria marca "Not
Applicable" quando o arquivo não existe, porque a implementação é opcional. *Por que muda o
mapa:* a régua do navegador é o instrumento que moveu a web mais rápido na história recente
(HTTPS, responsivo, Core Web Vitals). Se a prontidão agêntica virar sinal pontuado em vez de
auditoria opcional, `e2` e `e2.1.1` antecipam dois anos. *Sinal observável:* a categoria sair do
rótulo "Not Applicable" e passar a produzir nota; ou o Google declarar que algum sinal agêntico
entra em ranqueamento.

**SF2 — Quem mais lê o `llms.txt` é o agente de programação, não o buscador.** Na medição da
Ahrefs, agentes e infraestrutura agêntica respondem por 10,5% das requisições ao arquivo, com o
Claude-Code em segundo lugar geral, à frente de todo bot de busca e assistente; bots de
recuperação ficam em 1,1%. *Por que muda o mapa:* o consumidor real da web legível por máquina é
a IDE, não o motor de resposta. Isso desloca o objeto — a primeira web agêntica de verdade pode
ser a **documentação técnica**, não o comércio. *Sinal observável:* sites de documentação
publicarem métricas de tráfego de agente de código maior que tráfego humano; ou um formato de
documentação para agente com adoção acima de 30% entre os cem maiores projetos de software
aberto.

**SF3 — O Slackbot busca `llms.txt` mais que o PerplexityBot.** Detalhe registrado na mesma
medição. *Por que importa:* existe uma classe inteira de leitor-máquina invisível — geradores de
pré-visualização de link, perfiladores técnicos, ferramentas de auditoria — que já consome a web
em volume e não é contada em nenhuma política de acesso. Eles não são "IA" e são bloqueados
junto. *Sinal observável:* ferramentas de colaboração passarem a se declarar com finalidade
(`Signature-Agent` ou equivalente) para não caírem no bloqueio de uso misto.

**SF4 — A confiança transitiva entrou por um cabeçalho.** O anúncio de julho de 2026 da
Cloudflare menciona uso do cabeçalho HTTP `Forwarded` para identificar o solicitante original
através de intermediários. *Por que muda o mapa:* é a primeira peça de infraestrutura que trata
a **cadeia de delegação** como objeto de rede — o que permitiria cobrar ou permitir com base em
**quem é o humano no fim da cadeia**, e não em qual agente bateu na porta. Se isso pegar, `e15.2`
muda de natureza: a diferenciação deixa de ser por bot e passa a ser por pessoa. *Sinal
observável:* preço ou permissão condicionados ao usuário final em documentação pública de CDN.

**SF5 — O pagamento virou regra de firewall.** AWS e Cloudflare colocaram o x402 no CloudFront e
no WAF, ao lado de limite de taxa e regra de bot — não na aplicação. *Por que muda o mapa:*
quando o preço mora na mesma tabela que a regra de bloqueio, mudar de "bloquear" para "cobrar" é
uma linha de configuração, e a decisão editorial de `e15` pode ser tomada por quem nunca falou
com a redação. *Sinal observável:* campo de preço aparecer na interface padrão de WAF, sem lista
de espera.

**SF6 — Um índice de descoberta com cinco mil sites.** O Not Human Search tem 5.316 sites
indexados e nota média 38 de 100. É pequeno do jeito que o PageRank foi pequeno. *Por que muda o
mapa:* `e4` (concentração da descoberta) depende de **qual** registro o fabricante embarca. Se
um fabricante de agente adotar um índice de terceiro como padrão, o ponto de controle nasce
fora das grandes plataformas — e isso é um futuro diferente. *Sinal observável:* um cliente de
agente amplamente distribuído trazer um registro de terceiro pré-configurado.

**SF7 — A acessibilidade virou argumento de negócio.** A observação de que um site que funciona
com leitor de tela geralmente funciona com agente aparece em material técnico de 2026. *Por que
muda o mapa:* inverte `e16`. Se semântica boa serve às duas pontas, o investimento em
acessibilidade passa a ter retorno comercial pela primeira vez em vinte anos, e quem não tem
agente é beneficiado por tabela. *Sinal observável:* um caso público de empresa justificando
investimento em acessibilidade por conversão de agente.

### Wildcards

Critério (Petersen): baixa probabilidade, alto impacto, plausibilidade interna — com mecanismo
escrito. Sem mecanismo é enredo, não wildcard.

**WC1 — Um grande portal bloqueia todos os agentes e a audiência não nota.** *Mecanismo:* se a
leitura por agente já substituiu parte da leitura humana, o bloqueio não produz queda
perceptível de sessão — porque a sessão já não existia. O que cai é a citação, e citação ninguém
mede. O portal fecha, economiza banda, não perde receita mensurável e publica o resultado. *Por
que é improvável:* medo. Nenhum diretor arrisca a hipótese sem saber o tamanho do que está
cortando, e o número que diria o tamanho é justamente o que não existe. *O que faria com o mapa:*
mata a raiz 2 inteira — não há o que cobrar se fechar custa zero — e fortalece a raiz 4. `e6`,
`e6.1`, `e6.2` e `e7` cairiam junto. *Sinal precoce:* um veículo grande publicar a série
temporal de tráfego humano antes e depois de fechar, com números.

**WC2 — Um fabricante de agente compra (ou trava exclusividade com) uma CDN grande.** *Mecanismo:*
a camada que mede o acesso e a camada que consome o acesso viram a mesma empresa, o que resolve a
aferição de citação por integração vertical em vez de por auditoria. *Por que é improvável:*
antitruste, e o fato de que a CDN vende para todos os concorrentes. *O que faria com o mapa:*
`e6.1.1` (auditoria independente) deixa de ser negócio e vira exigência regulatória; `e6.2`
(aprisionamento) passa de risco a fato consumado; e `e4.2` (o DMA sobre o registro) ganha um alvo
muito maior. *Sinal precoce:* participação minoritária, acordo de exclusividade ou contrato de
capacidade plurianual entre fabricante de modelo e operador de borda.

**WC3 — Um tribunal decide que negar acesso ao agente de uma pessoa é negar acesso à pessoa.**
*Mecanismo:* se o agente é prótese — tecnologia assistiva, no limite —, bloqueá-lo é barrar o
titular. A analogia está disponível em dois ordenamentos: acessibilidade (LBI e e-MAG no Brasil,
ADA nos EUA) e, de forma mais frouxa, neutralidade de acesso. *Por que é improvável:* nenhum
ordenamento trata agente como extensão da pessoa hoje, e a decisão exigiria um caso com autor,
dano e nexo. *O que faria com o mapa:* mata a raiz 4 — a diferenciação por solicitante vira
ilícita — e obriga `e16` a inverter de sinal. *Sinal precoce:* uma ação judicial, no Brasil ou
nos EUA, em que agente de IA é enquadrado como tecnologia assistiva.

**WC4 — O `robots.txt` recebe execução em vez de continuar consultivo.** *Mecanismo:* um
tribunal ou uma agência decide que ignorar `robots.txt` ou Content Signals configura acesso não
autorizado — e a reserva de direitos sob o Artigo 4 da Diretiva 2019/790, que a Cloudflare já
embutiu no texto da política, é o vetor pronto. Trinta anos de convenção viram norma de um dia
para o outro. *Por que é improvável:* a RFC 9309 é deliberadamente consultiva, e o custo de
transformar preferência em obrigação recai sobre buscador e arquivista junto. *O que faria com o
mapa:* `e15.1.1` (finalidade com efeito jurídico) antecipa de 2033 para ~2029 e vira o eixo do
mapa inteiro; `e6` ganha poder de barganha real e `e8` enfraquece. *Sinal precoce:* uma decisão
citando Content Signals ou `robots.txt` como reserva de direitos oponível.

## 7. Contra o próprio mapa

Esta seção foi escrita **depois** do mapa pronto e **alterou** o mapa. O registro auditável de
antes → depois está em 7.8.

### 7.1 Pré-mortem — é 2036 e este mapa se mostrou errado. Por quê?

**Razão 1 — a web agêntica nunca saiu da programação.** O sinal fraco SF2 estava certo e eu o
tratei como nota de rodapé: quem lê a web legível por máquina é a IDE. Em 2036, MCP e WebMCP são
infraestrutura de desenvolvimento — enormes, invisíveis, irrelevantes para mídia. O consumidor
nunca delegou compra, reserva ou leitura a um agente em volume; delegou código. Toda a raiz 1
vale para ferramenta de trabalho e não para publicação. *Efeito atingido:* `e3` e `e4` — rebaixei
`e4` de alta para média e empurrei de 2029 para 2030.

**Razão 2 — o crawl-to-refer se resolveu sozinho e ninguém precisou cobrar.** A Anthropic foi de
5.143:1 para 1.917:1 e a OpenAI de 870:1 para 251:1 em **um trimestre**. Se a curva continuar,
em 2029 os números estão na casa do Googlebot, o argumento econômico para cobrar evapora e a
raiz 2 nunca acontece — o 402 fica como curiosidade histórica, ao lado do próprio 402, que
existe no HTTP desde 1997 e nunca foi usado. *Efeito atingido:* `e6` e `e7`; empurrei `e7` de
2028 para 2029 e reforcei `e8` na prosa.

**Razão 3 — o assistente virou um jardim murado e a questão da web aberta ficou sem objeto.**
Se em 2030 quatro empresas concentram a interação e cada uma resolve tudo com parceiro
contratado, não existe "web agêntica" — existe integração comercial, como sempre houve. A
pergunta "quem paga pelo conteúdo que alimenta o agente" se responde por contrato bilateral, e
nada do que este mapa chama de ruptura chega ao público. *Efeito atingido:* `e13` e `e13.1`;
mantidos, mas com a prosa reconhecendo que este é o desfecho mais provável da raiz 3.

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

Três efeitos não passam no teste sem um mecanismo de não-linearidade:

- **`e2` (o SEO se parte).** Sem mecanismo, é "SEO muda de novo", o que acontece todo ano desde
  2003. A não-linearidade que o salva: o objeto muda de tipo — de documento ranqueado para
  função chamada —, e disciplinas não se adaptam a mudança de tipo, elas se dividem. Fica, com
  a exigência de que a prosa carregue essa distinção.
- **`e12` (o anúncio migra).** Sem mecanismo, é "a publicidade segue a atenção", que é banal. A
  não-linearidade: o anúncio deixa de ter **posição** e passa a ter **momento** — não há slot,
  há um ponto na conversa —, o que quebra a mensuração por impressão, e não só a quantidade.
  Fica.
- **`e9` (o agente economiza leitura).** Este é extrapolação pura: "custo sobe, consumo cai".
  **Rebaixei a prosa** e mantive o efeito apenas porque o filho `e9.1` tem mecanismo próprio
  (menos fontes → menos diversidade) que não é redução de escala.

### 7.3 Velocidade de adoção — prazos confrontados com a classe de referência

| Efeito | Prazo | Classe usada | Veredito |
|---|---|---|---|
| `e1` 2028 | 2 anos | responsivo pós-mobilegeddon (2-3 anos) | **aceito**, no limite otimista |
| `e6` 2028 | 2 anos | HTTPS por padrão (4 anos) | **exige adoção mais rápida que a referência** — mas a referência é de mudança que cada site faz; aqui é default de intermediário. Mantido com a ressalva escrita. |
| `e7` 2028 → **2029** | 3 anos | micropagamento (15 anos de fracasso) | **empurrado um ano**; ainda assim otimista, e é o motivo de `e8` existir |
| `e11` 2028 → **2029** | 3 anos | loja de aplicativos (3 anos entre existir e virar canal) | **empurrado um ano** |
| `e6.1.1` 2032 | 6 anos | verificação de terceiro na mídia digital (~10 anos) | aceito por ser 3ª ordem e por já haver precedente institucional (IVC, MRC) |
| `e17.1.1` 2032 → **2035** | 9 anos | RSS/hábito de leitura (5 anos para subir) | **empurrado três anos**: mudança de hábito de massa é a coisa mais lenta deste mapa |
| `e16.1.1` 2034 | 8 anos | norma de acessibilidade → item de edital (~10 anos) | aceito |

### 7.4 A raiz que não acontece — o que sobra do mapa?

- **Sem a raiz 1** (protocolo/ferramenta): sobram as raízes 2, 3 e 4 quase inteiras. O agente
  continua lendo a página renderizada, e o conflito sobre acesso, preço e interface permanece
  idêntico. **A raiz 1 é a mais dispensável do mapa** — e é a que tem mais barulho de indústria
  em volta. Isso é informação.
- **Sem a raiz 2** (preço por requisição): sobram 1, 3 e 4. A web se fecha ou se abre por
  política, não por preço — o que é o cenário de WC1. Caem `e6`, `e6.1`, `e6.1.1`, `e6.2`,
  `e6.2.1`, `e7`, `e7.1`, `e7.1.1`, `e9`, `e9.1`, `e9.1.1`: **onze efeitos**, o maior bloco
  dependente de uma raiz só. É também a raiz com a evidência mais fraca de demanda.
- **Sem a raiz 3** (interface dentro do agente): sobram 1, 2 e 4, e o mapa perde quase toda a
  sua ligação com **design**. Sem ela, este é um mapa de infraestrutura e economia, não de mídia
  e interação. Registro isso como um alerta sobre o recorte: a raiz 3 é a que justifica o tema
  estar nesta disciplina.
- **Sem a raiz 4** (serviço diferencial): sobram 1, 2 e 3, mas `e16`, `e17`, `e18` e toda a
  discussão de quem fica de fora somem — e o mapa fica confortável demais. Um mapa em que
  ninguém perde é propaganda.

**Verificação do teste:** nenhuma raiz é indispensável e nenhuma é redundante. Não há "uma raiz
só disfarçada em quatro". A mais frágil em evidência de demanda é a 2; a mais frágil em escopo é
a 1.

### 7.5 Suposições escondidas que o mapa assume

1. **Que a delegação a agentes continua crescendo no consumidor.** Se a delegação estacionar em
   um nicho profissional — o que o fracasso do Atlas e os menos de 3% dos navegadores de IA
   sugerem —, três das quatro raízes viram assunto corporativo. **É a premissa mais frágil do
   mapa.**
2. **Que a Cloudflare continua na posição de intermediário.** Boa parte de `e6.2`, `e10`, `e15`
   e `e17` assume o default de um fornecedor específico. Concentração muda, e o mapa não tem
   plano B.
3. **Que o custo de inferência continua caindo.** `e9` inverte de sentido se cair muito: um
   agente barato lê mais, não menos.
4. **Que os padrões seguem abertos.** MCP na Linux Foundation, WebMCP no W3C, x402 na Linux
   Foundation. Fechamento ou fragmentação em dialetos reescreve as raízes 1 e 3. *Esta premissa
   quebrada é o wildcard WC2.*
5. **Que existe demanda por trás da infraestrutura de pagamento.** Os US$ 28 mil/dia dizem que
   ainda não existe. **Assumi que vai existir, e isso é um chute** — declarado.
6. **Que nenhuma decisão judicial grande vira a mesa.** *Premissa quebrada = WC3 e WC4.*
7. **Que o Brasil segue a política global com atraso e sem legislação própria sobre acesso de
   máquina.** O PL 2338/2023 trata de IA, não de acesso a conteúdo por rastreador. Se isso
   mudar, `e10` e `e16.1.1` mudam.

### 7.6 Viés do autor

**Viés declarado no briefing: neutro.** O que entrou assim mesmo:

- **Gosto do argumento da web aberta, e isso me fez tratar o fechamento como perda.** `e17.1`,
  `e18` e `e18.1.1` estão escritos com a sensibilidade de quem acha que a reconstituibilidade da
  web é um bem público. É defensável, mas é posição — um comerciante de dados leria a mesma
  evidência como "o mercado finalmente precificou um insumo que era roubado".
- **Sou professor e programador, e por isso vi o sinal SF2 com carinho.** A hipótese de que a
  web agêntica real é a de documentação técnica me agrada porque é o meu mundo. Coloquei-a como
  sinal fraco e como razão 1 do pré-mortem, o que é o lugar certo — mas ela pode estar
  subvalorizada por eu ter desconfiado do meu próprio gosto.
- **Escolhi quatro raízes e não duas.** Com duas — protocolo e preço — o mapa ficaria mais
  defensável e menos útil. Assumo a escolha e registro que ela infla a contagem de efeitos.
- **A raiz 3 está aqui porque a disciplina é de mídia e interação.** Ela é a de evidência mais
  fina (demo pública a produto de nicho). Se o mapa fosse de infraestrutura, eu a teria deixado
  de fora. O recorte do público decidiu uma raiz — e está declarado.

### 7.7 Calibração

Contagem por ordem, conferida contra o bloco:

| Ordem | alta | media | baixa | Total |
|---|---|---|---|---|
| 1 | 6 | 12 | 0 | 18 |
| 2 | 1 | 18 | 6 | 25 |
| 3 | 0 | 0 | 20 | 20 |

A distribuição cai com a ordem, como exige o §3. A 3ª ordem é **integralmente baixa** — o que é
a resposta esperada, e não um defeito. A única confiança alta em 2ª ordem é `e15.1`, que tem
artefato medido hoje (as razões de bloqueio por finalidade em 4.223 arquivos `robots.txt`).
Nenhuma confiança baixa em 1ª ordem: as raízes foram escolhidas para serem ancoráveis, e se
nenhum efeito de 1ª ordem fosse duvidoso eu estaria com um problema — `e13` (sinal fraco,
confiança média) é o mais próximo disso e está marcado.

### 7.8 Registro de alterações — antes → depois

Cota do §6: pelo menos um efeito rebaixado ou removido **por raiz**. A bateria derrubou coisa em
todas as quatro.

**Raiz 1**
- `e4`: confianca **alta → media** e prazo **2029 → 2030**, porque nenhum fabricante publicou
  critério de registro padrão e a própria contagem de servidores MCP diverge por fator de oito
  entre fontes (12.6). Concentração é plausível; a data era chute.
- `e2.2.1` (*"surge a função de curador de registros de ferramentas"*): **removido** → 12.3.
  Reprovado no teste do §3: profissão sem nome, sem empregador e sem mecanismo que a ligue ao
  pai.
- `e1` : confiança **mantida em alta**, com a ressalva escrita de que o prazo 2028 está no limite
  otimista da classe de referência.

**Raiz 2**
- `e7`: prazo **2028 → 2029**, pela classe do micropagamento (15 anos de fracasso).
- `e8.1`: sinal **medio → fraco**, porque não há caso documentado de conteúdo que tenha cobrado
  e sustentado a cobrança — só a inferência.
- *"Governos passam a tributar a requisição de máquina"*: **removido** → 12.3. Sem ator
  nomeado, sem precedente, e a lacuna real (faturamento e IVA) já está capturada como "o que
  falta acontecer" na raiz 2.
- `e9`: **mantido com prosa rebaixada** no §7.2, por ser extrapolação linear.

**Raiz 3**
- `e11`: prazo **2028 → 2029**, pela classe da loja de aplicativos.
- `e12.2`: confianca **media → baixa**, porque o único número que sustenta o ganho de alcance
  (80% de PMEs entre 600 anunciantes) vem de um piloto de seis semanas relatado pela própria
  OpenAI.
- *"Surge a profissão de designer de agente"*: **removido** → 12.3. Proibição explícita do §3; o
  que sobrevive é `e11.1`, que tem entregável concreto (variante de design system).

**Raiz 4**
- `e16`: confianca **alta → media**. Eu havia colocado alta por achar o mecanismo óbvio; o dado
  que tenho (9,64% de 403 contra bots de IA) mede rejeição a **bot**, não a humano confundido
  com bot. O número do falso positivo não existe — ver 12.5.
- `e18.1`: sinal **medio → fraco**, porque não há medição de lacuna de arquivamento pós-2025.
- `e17.1.1`: prazo **2032 → 2035**, pela classe de mudança de hábito de massa.
- *"Cursos de comunicação reorganizam o currículo"*: **removido** → 12.3. Proibição explícita do
  §3, e serviria para qualquer um dos dezenove temas da disciplina.

**Total:** 8 rebaixamentos (confiança, sinal ou prazo) e 4 remoções. A bateria derrubou algo em
cada raiz.

## 8. O que a máquina errou

Sou a máquina. O que deu errado neste trabalho, com o motivo da desconfiança:

1. **Repeti um número que não consegui confirmar na fonte primária.** A frase "mais de um bilhão
   de respostas 402 por dia" apareceu em resumo de busca atribuído à Cloudflare. Abri o blog da
   Cloudflare (o relatório de aniversário do Content Independence Day) e o changelog do
   pay-per-crawl: **nenhum dos dois traz esse número**. Mantive-o fora do corpo do mapa — ele
   não aparece em nenhum mecanismo — e registro aqui que circulei com ele na cabeça enquanto
   montava `e6`. Um mapa montado sobre ele estaria montado sobre nada.

2. **Confundi duas datas de julho separadas por um ano.** O pay-per-crawl é de **01/07/2025**
   (changelog da Cloudflare, aberto). O Pay Per Use é de **01/07/2026** (TechCrunch, aberto).
   Duas fontes secundárias tratavam as duas coisas como sendo de 2026, e na primeira leitura eu
   aceitei. Só notei ao abrir o changelog — que é exatamente o motivo de a skill exigir abrir.

3. **Atribuí o WebMCP ao Google e errei a API.** A autoria é **conjunta de Microsoft e Google**,
   no Web Machine Learning Community Group, e o README credita o avanço do rascunho a Dominic
   Farolino. E a API é **`document.modelContext`**, não `navigator.modelContext` — esta última
   aparece em vários textos secundários (e na minha primeira busca) e está errada. Se eu tivesse
   escrito o experimento da seção 10 a partir do resumo, ele não rodaria.

4. **Usei um denominador enviesado sem dizer.** O "97% dos `llms.txt` nunca lidos" é sobre
   137.210 domínios **que usam o Ahrefs Web Analytics** — ou seja, sites que fazem SEO e pagam
   por ferramenta. É o recorte mais favorável possível à hipótese de que o arquivo seria lido, o
   que fortalece a conclusão; mas não é "a web". Corrigi o texto da seção 3 para dizer o
   denominador.

5. **Não consegui abrir a fonte primária sobre o fim do Atlas.** A página de ajuda da OpenAI
   devolveu 403. A data de **09/08/2026** vem de agregadores; a data de anúncio, **09/07/2026**,
   tem TechCrunch aberto. Tratei a segunda como sólida e a primeira como provável, e disse isso
   na seção 11.

6. **Escolhi entre três contagens incompatíveis do mesmo ecossistema e quase escondi isso.**
   Servidores MCP: ~2.000 (WorkOS), 9.652 registros "latest" na API oficial em 24/05/2026,
   17.468 num censo independente. Fator de oito. Minha primeira versão da seção 3 dizia "cerca
   de dez mil" sem nota. Passei a divergência para 12.6 e deixei de usar a contagem como
   evidência de qualquer efeito.

7. **Escrevi um efeito bonito que não passava no meu próprio teste.** "Os rankings de prontidão
   agêntica viram o PageRank da era dos agentes" — frase do enunciado do tema, e frase boa. Ela
   não tem mecanismo: o PageRank funcionava porque media **link recebido**, um voto que custa
   caro; a nota de prontidão mede **arquivo publicado**, que custa dez minutos. Reescrevi como
   `e2.2`, que é o contrário: o ranking é gamificado antes de ser usado.

8. **Deixei um eixo do STEEP vazio e fiquei tentado a preenchê-lo.** O eixo ecológico: a
   Cloudflare usa o desperdício de rebusca como argumento, mas não achei nenhum número de
   energia ou emissão atribuível a rastreamento de IA. Registrei "vazio" em 5.2 em vez de
   inventar um efeito plausível.

## 9. Três cenários para 2036

### Provável — a web de duas portas, com uma delas emperrada

É 2036. Todo site de porte médio para cima tem duas superfícies: a página, que ainda existe e
que quase ninguém abre por vontade própria, e o catálogo de ferramentas, que é o que responde
por metade das interações comerciais. A política de acesso é um campo de formulário no painel da
CDN, e nove em cada dez sites nunca o abriram — herdaram um default. Grandes veículos têm
contrato de licenciamento; a documentação técnica cobra por requisição e recebe; o veículo local
não faz nem uma coisa nem outra e sumiu das respostas sem nunca ter sido bloqueado. A aferição
continua sendo o problema não resolvido: existem três empresas vendendo contagem de citação e
nenhuma delas é auditada por terceiro. A interface, para a maior parte das tarefas, acontece
dentro de quatro assistentes, com curadoria e comissão. "Visitar um site" é o que se faz para
conferir uma resposta. *Sinal precoce de que estamos entrando aqui:* o primeiro relatório
trimestral de um grande publisher em que a receita de licenciamento e uso por IA aparece como
linha própria, separada de publicidade.

### Desejável — a semântica volta a valer, e o acesso é negociado sem ser fechado

É 2036. A aposta que deu certo não foi o protocolo novo: foi a descoberta de que o mesmo
trabalho — marcação semântica honesta, estrutura estável, texto que diz o que a coisa faz —
serve ao leitor de tela, ao buscador e ao agente. Investir em acessibilidade passou a ter
retorno mensurável, e o primeiro efeito visível foi que a web ficou melhor para quem **não** tem
agente. A aferição de uso foi resolvida por uma entidade de auditoria com participação dos dois
lados, no molde do que a mídia impressa construiu em cem anos e a digital levou vinte para
tentar. O pagamento por requisição não virou o modelo geral — virou o modelo de conteúdo de
referência, que é onde ele funciona —, e o resto da web continuou aberto porque fechar custava
mais do que rendia. Registros de ferramentas são múltiplos e interoperáveis, e nenhum fabricante
embarca só o seu. *O que teria que ser feito para chegar aqui:* a aferição precisa nascer
institucional, e não como produto de um dos lados; e algum guardião precisa amarrar semântica —
não formato proprietário — à distribuição. *Sinal precoce:* uma auditoria de citação com
governança compartilhada entre publishers e empresas de IA, publicada com metodologia aberta.

### Indesejável — a web de convidados

É 2036. O ataque por descrição de ferramenta aconteceu em escala em 2029, e a resposta foi a de
sempre: lista de convidados. Agentes só chamam servidores auditados; auditoria custa caro e é
vendida como selo; quem paga entra. A descoberta se concentrou em dois registros embarcados por
padrão, e estar fora deles é não existir — sem que haja qualquer processo para reclamar, porque
não é bloqueio, é ausência. A publicidade mora inteira dentro dos assistentes e ninguém audita
onde apareceu: o anunciante aceita o número do fornecedor, como em 2005. A web aberta não acabou
— ela virou o lugar onde está o que não valia a pena proteger. E a maior parte do que foi
publicado entre 2026 e 2036 não pode ser reconstituída, porque o arquivista recebia uma versão
diferente da que o agente lia, e ninguém guardou nenhuma das duas. *Sinal precoce dele:* o
primeiro grande cliente de agente anunciar que só chamará servidores de uma lista fechada — e a
lista ter critério de admissão pago.

## 10. O experimento

### O mesmo site, dois visitantes

**O que é.** Um site pequeno e real — cinco a dez páginas com alguma função útil de verdade
(consulta de horário, busca em catálogo, um formulário que faz algo) — publicado em **duas
superfícies simultâneas**:

1. **A página**, HTML renderizado, como sempre.
2. **O catálogo de ferramentas**: WebMCP (`document.modelContext.registerTool()`) dentro da
   página e um servidor MCP remoto para o mesmo conjunto de funções.

E instrumentado em três camadas que normalmente ninguém liga junto:

- **Diferenciação por solicitante:** o mesmo endereço devolve conteúdo distinto conforme a
  finalidade declarada (humano, agente do usuário, rastreador), usando `robots.txt`, Content
  Signals e o cabeçalho `Signature-Agent` quando presente.
- **Preço:** uma rota devolve **HTTP 402** com desafio de pagamento em modo de teste, para medir
  o que acontece quando um agente encontra um preço — não para faturar.
- **Medição:** cada requisição registra quem pediu, o que recebeu, quantos tokens custou do lado
  do agente, quantos passos levou e se a tarefa foi concluída.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta é a raiz 1 inteira, na forma
mais simples possível: **a superfície agêntica é uma segunda superfície ou é *a* superfície?**
Em subperguntas testáveis: (a) o agente conclui mais tarefas pelo catálogo do que pela página
renderizada, e quanto mais? (b) quanto custa cada caminho em tokens e em passos — o estudo de
2026 diz que descrição boa melhora o acerto em 5,85 p.p. e cobra 67,46% mais passos; isso se
reproduz num site real? (c) o que o humano perde quando é confundido com máquina? (d) o agente
paga, desiste ou contorna quando encontra um 402?

**Que tecnologia emergente usa, e por que não dá com a madura.** Com REST e OpenAPI — maduros —
dá para expor capacidade e um agente com integração prévia a usa. **Não dá** para: (1) ser
descoberto por um agente que nunca ouviu falar do site, porque OpenAPI não tem descoberta nem
negociação de esquema em tempo de execução; (2) devolver interface renderizável dentro do
cliente do agente, que é o que MCP Apps faz e nenhuma API REST faz; (3) negociar preço na
própria requisição, que é o 402 com x402 e não existe em REST; (4) declarar finalidade e receber
conteúdo diferente por ela. As quatro coisas são precisamente as quatro raízes deste mapa — e é
por isso que o experimento testa o mapa, e não uma tecnologia.

**O que a turma faz ao testar isso em sala.** A turma se divide em três. **Grupo A** opera como
humano, no navegador, com cronômetro: cinco tarefas definidas. **Grupo B** dirige um agente
(cliente de MCP à escolha) sobre o mesmo site, com as mesmas cinco tarefas. **Grupo C** opera o
site: durante a sessão, muda a política de acesso ao vivo — bloqueia o agente de B, devolve
conteúdo reduzido, liga o 402 — e observa o que quebra dos dois lados. Ao fim, os três grupos
olham o mesmo registro de requisições e respondem juntos: *quem viu o quê, quanto custou, e o
que cada lado não ficou sabendo que não viu*. O material de aula não é o site: é o log.

**O resultado que me faria mudar de ideia.** Se o **Grupo B concluir as cinco tarefas tão bem
pela página renderizada quanto pelo catálogo** — mesma taxa de sucesso, custo comparável —,
então a camada de protocolo é conveniência de engenharia, não ruptura, e a raiz 1 deste mapa
perde o direito de ser raiz: vira melhoria sustentadora, que o §2 manda recusar. Eu teria de
reescrever `e1`, `e2`, `e3`, `e4` e `e5` como contexto. **É um resultado plausível**, porque
modelos multimodais leem interface renderizada razoavelmente bem — e é exatamente por isso que
o experimento vale a pena.

Um segundo resultado, menos provável e mais interessante: se o **Grupo A** (humano) perder mais
tarefas por causa da política de acesso do Grupo C do que o Grupo B (agente), o mapa está
invertido em `e16` — a web diferencial machucaria mais quem tem agente do que quem não tem.

## 11. Fontes

Todas foram abertas e lidas entre 11 e 12 de setembro de 2026. As que não abriram estão em 12.5.

**Por que `fontes: 33` e só 32 URLs aqui.** A fonte 18 foi lida, está numerada e descrita, mas o
servidor dela bloqueia cliente automatizado com 429 determinístico; a URL está em 12.5. O campo
`fontes:` conta **o que foi lido**; a lista de links conta **o que responde a um robô**. As duas
contagens deixam de ser iguais exatamente quando um servidor decide quem pode ler — que é o
objeto deste mapa.

**Primárias — dados de rede e infraestrutura**

1. `https://blog.cloudflare.com/agentic-internet-bot-report/` — Cloudflare, relatório de um ano
   do "Content Independence Day". Sustenta: mais de 50% do tráfego não-humano; 52% do
   rastreamento para treino em junho/2026 contra 22% na primavera de 2025; 36% de uso misto;
   queda de até 40% de tráfego humano em categorias muito rastreadas; Cloudflare à frente de 20%
   da web, 36% dos sites mais visitados, ~80% das principais empresas de IA; mais de 50 acordos
   publisher-IA desde 2023; 2,5 bilhões de usuários de IA generativa em 3,5 anos. *Confiabilidade:*
   alta para medição de rede própria, com o viés óbvio de quem vende a solução para o problema
   que descreve.
2. `https://blog.cloudflare.com/content-signals-policy` — Cloudflare, 24/09/2025. Sustenta: os
   três sinais (`search`, `ai-input`, `ai-train`); aplicação automática a mais de 3,8 milhões de
   domínios com `search=yes, ai-train=no`; a reserva de direitos sob o Artigo 4 da Diretiva UE
   2019/790. *Confiabilidade:* alta — é o texto da própria política.
3. `https://developers.cloudflare.com/changelog/2025-07-01-pay-per-crawl/` — changelog oficial.
   Sustenta a data correta do pay-per-crawl (01/07/2025, beta privado) e a mecânica por
   cabeçalhos HTTP. *Confiabilidade:* alta; escasso em detalhe técnico.
4. `https://technologychecker.io/blog/robots-txt-ai-crawlers-blocking-report` — análise de 4.223
   arquivos `robots.txt` (instantâneo de 31/08/2026) sobre a API do Cloudflare Radar. Sustenta:
   bloqueio por finalidade (GPTBot 2,33:1 contra OAI-SearchBot 0,94:1; ClaudeBot 2,39:1 contra
   Claude-User ~1:1; Applebot-Extended 3,24:1); crawl-to-refer de julho/2026 (Anthropic 1.917:1,
   OpenAI 251:1, Perplexity 289:1, Google 4,7:1); distribuição de finalidade; 403 de 5,67% para
   9,64% em um ano, pico de 12,92%. *Confiabilidade:* média-alta — é agregador, mas declara
   metodologia, amostra e as limitações (o `robots.txt` é instantâneo de um dia, não janela).
5. `https://www.digitalapplied.com/blog/ai-crawler-bot-traffic-statistics-2026-data-reference` —
   compilação com atribuição de fonte por número. Sustenta: 57,5% bots contra 42,5% humanos
   (Radar, 03/06/2026); composição de maio/2026; ClaudeBot 23.951:1 no 1º trimestre; 393% de
   crescimento de referência de IA no varejo dos EUA (Adobe). *Confiabilidade:* média — é
   compilação, mas atribui cada número à origem e à data, o que permite conferir.
6. `https://www.helpnetsecurity.com/2026/07/02/cloudflare-ai-crawler-controls/` — 02/07/2026.
   Sustenta: bloqueio padrão de rastreador de uso misto em páginas com anúncio a partir de
   15/09/2026; categorias Search/Agent/Training; níveis de uso Immediate/Reference/Full;
   BotBase; confiança transitiva por cabeçalho `Forwarded`. *Confiabilidade:* alta — veículo
   técnico, cita os autores do anúncio.
7. `https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/`
   — 01/07/2026. Sustenta: o Pay Per Use; a citação de Matthew Prince; parceiros Ceramic.ai e
   You.com; a data-limite de 15/09/2026. *Confiabilidade:* alta.
8. `https://ppc.land/cloudflare-stops-charging-ai-per-crawl-and-starts-paying-per-answer/` —
   Sustenta o mecanismo do pay-per-answer: pagamento por citação em vez de por busca; mais de
   metade do rastreamento é rebusca de página inalterada; mais de 90% das páginas processadas
   por grandes rastreadores são únicas por conteúdo; a Cloudflare chamando tudo de experimento.
   *Confiabilidade:* média — veículo pequeno, mas o conteúdo bate com o TechCrunch.

**Primárias — padrões e especificações**

9. `https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture` —
   draft-05, 02/03/2026, **expirado e substituído**, sem posição formal no IETF. Sustenta: RFC
   9421 como base; cabeçalho `Signature-Agent`; `keyid` como thumbprint JWK; e os não-objetivos
   declarados (desenho de sessão fora de escopo; troca de verificação criptográfica por
   propriedades de token ao portador, sujeito a roubo e reprodução). *Confiabilidade:* alta para
   o conteúdo técnico; o próprio documento avisa que não é endossado pelo IETF.
10. `https://github.com/webmachinelearning/webmcp` — repositório da especificação. Sustenta:
    autoria conjunta Microsoft/Google; Web Machine Learning Community Group; primeira publicação
    em 13/08/2025; API `document.modelContext` com `registerTool()`, `getTools()`,
    `executeTool()` e evento `toolchange`; as questões abertas (multimodal, resposta entre
    documentos, fluxo, validação de esquema, autorização e consulta ao usuário). *Confiabilidade:*
    alta — é a fonte.
11. `https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/` — anúncio oficial do MCP
    Apps, 26/01/2026. Sustenta: primeira extensão oficial; autoria conjunta Anthropic + OpenAI +
    comunidade MCP-UI (Salomon, Yosef, Cooper); clientes que embarcaram (Claude web e desktop,
    Goose, VS Code Insiders, ChatGPT); a citação sobre o que a interface faz e o texto não.
    *Confiabilidade:* alta.
12. `https://workos.com/blog/everything-your-team-needs-to-know-about-mcp-in-2026` — Sustenta:
    doação à Agentic AI Foundation sob a Linux Foundation em dezembro de 2025, com OpenAI e Block
    como cofundadores; ~97 milhões de downloads mensais de SDK; OAuth 2.1 com CIMD substituindo
    registro dinâmico; as quatro lacunas corporativas (auditoria, multi-tenancy, limite de taxa e
    atribuição de custo, portabilidade); "quase 2.000" entradas no registro. *Confiabilidade:*
    média-alta — fornecedor de autenticação, com interesse no diagnóstico de lacuna de authz.
13. `https://ppc.land/google-adds-llms-txt-to-lighthouse-as-agentic-web-standards-heat-up/` —
    Sustenta: auditoria de `llms.txt` no Lighthouse em 05/05/2026; a categoria "agentic browsing
    audits" com WebMCP; a citação da documentação sobre o custo de rastrear sem o arquivo; 7,4%
    da Fortune 500 (37 de 500) contra 92,8% com `robots.txt`. *Confiabilidade:* média.

**Primárias — medições independentes sobre `llms.txt`**

14. `https://ahrefs.com/blog/llmstxt-study/` — 137.210 domínios com tráfego em maio de 2026,
    16/06/2026. Sustenta: 28% publicam o arquivo; **97% receberam zero requisição**; 96% das
    requisições vêm de bots e 77% desses não são de IA; a distribuição por categoria (agentes
    10,5%, treino 5,3%, assistente 2,5%, recuperação 1,1%); ferramentas de SEO (21,7%) leem mais
    que qualquer IA; Claude-Code em segundo lugar. *Confiabilidade:* alta para a medição,
    **com o viés de denominador declarado**: são clientes de uma ferramenta paga de SEO.
15. `https://seranking.com/blog/llms-txt/` — ~300.000 domínios. Sustenta: adoção de 10,13%;
    distribuição por faixa de tráfego (9,88% / 10,54% / 8,27%); ausência de correlação com
    citação; a remoção da variável **melhorando** o modelo XGBoost. *Confiabilidade:* média-alta;
    é fornecedor de SEO medindo algo que contraria o próprio mercado, o que reforça o achado.
16. `https://www.searchenginejournal.com/97-of-llms-txt-files-got-no-requests-ahrefs-data-shows/579478/`
    — 16/06/2026. Sustenta a repercussão e a posição de John Mueller ("muleta temporária, talvez
    para economizar alguns tokens"); o detalhe do Slackbot buscando mais que o PerplexityBot.
    *Confiabilidade:* alta para o setor.

**Primárias — pagamento por requisição**

17. `https://www.infoq.com/news/2026/07/cloudflare-aws-x402-micropayment/` — julho/2026.
    Sustenta: AWS com x402 em disponibilidade geral no CloudFront e no WAF (ação "Monetize" em
    Bot Control); Cloudflare Monetization Gateway em lista de espera; o handshake terminando na
    borda; 169 milhões de pagamentos, 590 mil compradores, 100 mil vendedores; USDC em Base e
    Solana; e as objeções (dado grátis abundante, IVA e faturamento indefinidos, preço não
    divulgado). *Confiabilidade:* alta.
18. **CoinDesk, 11/03/2026 — "Coinbase-backed AI payments protocol wants to fix micropayment
    but demand is just not there yet".** *URL em 12.5*, porque o servidor devolve **429 de forma
    determinística** a cliente automatizado (medido seis vezes) e a URL na lista quebraria a
    checagem de links. Aberta e lida nesta rodada. Sustenta: ~US$ 28 mil/dia de volume real;
    ~50% de transações gamificadas (autonegociação e lavagem), pela Artemis; a comparação com
    Lightning, BAT e mercados de computação descentralizada. *Confiabilidade:* alta para o setor,
    e é a fonte crítica **de dentro** do próprio meio que promove o protocolo — o que a torna a
    evidência mais forte contra a raiz 2.
19. `https://presenc.ai/research/x402-protocol-adoption-tracker-2026` — Sustenta: ~167 milhões
    de transações liquidadas no 1º trimestre de 2026, 85% na Base; x402 Foundation sob a Linux
    Foundation com Coinbase, Cloudflare, Stripe, AWS, Google, Visa e Circle; Agent.market com
    sete categorias. *Confiabilidade:* baixa-média — é rastreador comercial sem metodologia
    publicada; usei só onde outra fonte confirma.
20. `https://stackoverflow.blog/2026/02/26/how-pay-per-crawl-is-reshaping-data-monetization/` —
    26/02/2026. Sustenta: o relato de um publisher que aderiu; a citação de Josh Zhang sobre
    rastreadores pararem depois do 402; o enquadramento "sim, se" de Will Allen. *Confiabilidade:*
    alta para o relato, **sem nenhum número** — o que é, por si, um dado.

**Primárias — interface, navegador e publicidade**

21. `https://techcrunch.com/2026/07/09/openai-is-shutting-down-atlas-but-its-ai-browser-ambitions-are-still-growing/`
    — 09/07/2026. Sustenta: o anúncio do fim do Atlas; a diretriz de cortar "missões paralelas";
    a conclusão de que "o navegador é um recurso, não o destino"; a redistribuição para extensão
    do Chrome e app de desktop com navegador remoto. *Confiabilidade:* alta.
22. `https://exame.com/inteligencia-artificial/anuncios-no-chatgpt-atingem-us-100-milhoes-em-receita-durante-primeiros-testes-nos-eua/`
    — Sustenta: US$ 100 milhões anualizados em seis semanas; 600 anunciantes, 80% PMEs; 85% dos
    usuários com conta apta e 20% vendo anúncio diariamente; rollout para EUA, Austrália, Nova
    Zelândia e Canadá. *Confiabilidade:* média-alta — os números vêm da OpenAI, e são de piloto.
23. `https://olhardigital.com.br/2026/05/21/inteligencia-artificial/google-testa-publicidade-em-respostas-da-busca-com-ia/`
    — 21/05/2026, sobre o Google Marketing Live de 20/05/2026. Sustenta: anúncios dentro do Modo
    IA; formatos conversacionais com captura de contato; e a informação de que **não há previsão
    para o Brasil**. *Confiabilidade:* média-alta.
24. `https://agentexperience.ax/` — Sustenta a definição de Agent Experience (AX) e o papel da
    Netlify em convocar a iniciativa. *Confiabilidade:* baixa-média — é material de posicionamento
    de uma comunidade patrocinada; **não prescreve prática nenhuma**, o que registro como dado.

**Acadêmicas**

25. `https://arxiv.org/abs/2602.14878` — Hasan, Li, Rajbahadur, Adams, Hassan, fevereiro de 2026
    (revisto em maio). Sustenta: 856 ferramentas em 103 servidores MCP; 97,1% com ao menos um
    defeito; 56% sem declarar o propósito; +5,85 p.p. de sucesso na mediana; +15,12% de conclusão
    parcial; +67,46% de passos; regressão em 16,67% dos casos. *Confiabilidade:* alta — método e
    amostra declarados; é a melhor evidência do mapa para a tese de que a descrição é interface.
26. `https://arxiv.org/abs/2603.01564` — Deng, Gui, Zhang, 02/03/2026, "From Secure Agentic AI to
    Secure Agentic Web". Sustenta: a escalada de risco por cadeias de delegação, interação entre
    domínios e ecossistemas mediados por protocolo; as lacunas de identidade interoperável,
    proveniência, resposta no nível do ecossistema e avaliação sob adversário adaptativo.
    *Confiabilidade:* alta como levantamento; é survey, não medição.
27. `https://arxiv.org/pdf/2606.30119` — Fayolle, Bouhenniche, Pélissier, Laperdrix, Maurice,
    Rudametkin, 30/06/2026, "On the Internet, Nobody Knows You're an LLM Bot". Sustenta que a
    identificação de agente por impressão digital multicamada (TLS, cabeçalhos, comportamento) é
    viável contra Claude, ChatGPT Agent, Gemini, Perplexity, Skyvern, OpenClaw e as ferramentas
    de automação. *Confiabilidade:* alta; usei só como pré-condição técnica da raiz 4 — o objeto
    é do tema 2. **Não consegui extrair a acurácia numérica do PDF**, e por isso não cito
    número.
28. `https://arxiv.org/pdf/2606.20570` — Dey e Viradecha, 23/06/2026, "Infrastructure for the
    Agentic Web: Gap Analysis". Sustenta a existência das quatro camadas em falta — descoberta,
    identidade, pagamento, confiança — como diagnóstico acadêmico independente do discurso de
    fornecedor. *Confiabilidade:* média — é relato a partir de uma plataforma própria
    (Agentverse), com o viés de quem propõe a solução.

**Ecossistema e Brasil**

29. `https://nothumansearch.ai/` — Sustenta: 5.316 sites indexados, nota média 38; os sete sinais
    e os pesos (llms.txt 25, ai-plugin 20, OpenAPI 20, API estruturada 15, MCP 10, robots.txt 5,
    Schema.org 5). *Confiabilidade:* baixa-média para representatividade — é um índice novo, sem
    metodologia de amostragem publicada; alta para o fato de que existe e como pontua.
30. `https://usefoil.com/` — Foil (ABXY, Inc.), a ferramenta de detecção citada pelo enunciado do
    tema. Sustenta: 350+ sinais; detecção de navegador anti-detecção (Multilogin, GoLogin, Linken
    Sphere) e headless; taxonomia de agentes conhecidos; validação criptográfica de bot que se
    declara. Em beta gratuito. *Confiabilidade:* baixa — é página de produto, sem cliente nem
    data de fundação divulgados. Usei só para confirmar que a categoria existe.
31. `https://brasilgeo.ai/conteudos/artigos/o-que-mudou-na-busca-por-ia-junho-julho-2026` —
    Sustenta, do lado brasileiro: a data de 15/09/2026 para o bloqueio padrão; o Pay Per Use de
    01/07/2026; 92,4% de participação do ChatGPT na referência rastreável de LLM e 7,1% de
    conversão (Previsible, jul/2026); crescimento de 8x no tráfego de IA da Shopify no 1º
    trimestre de 2026; Ask Maps em português no Brasil. *Confiabilidade:* média — compilação
    brasileira que atribui cada número à origem.
32. `https://www.conversion.com.br/blog/navegacao-agentica/` — 10/07/2026. Sustenta que há
    material técnico brasileiro tratando de `document.modelContext`, Chrome 150, auditorias
    agênticas do Lighthouse e WebMCP. **Não traz número sobre sites brasileiros**, e registro
    isso: procurei censo e não há. *Confiabilidade:* média para o conteúdo técnico.
33. `https://en.wikipedia.org/wiki/NLWeb` — Sustenta: NLWeb como projeto aberto da Microsoft de
    2025, cada instância sendo um servidor MCP, sobre Schema.org e RSS; adotantes citados
    (TripAdvisor, Shopify, Eventbrite, Hearst). *Confiabilidade:* baixa — o verbete é esboço e
    pede referências desde maio de 2025. **A própria pobreza do verbete é o dado** que uso: um
    ano e meio depois, não há literatura independente sobre adoção.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2036/04-a-internet-agentica-quando-o-usuario-e-uma-maquina/tendencia-a-internet-agentica-quando-o-usuario-e-uma-maquina.md --links
```

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 18 (frontmatter diz 18)
efeitos ordem 2: 25 (frontmatter diz 25)
efeitos ordem 3: 20 (frontmatter diz 20)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 6 · media 12 · baixa 0
confiança ordem 2: alta 1 · media 18 · baixa 6
confiança ordem 3: alta 0 · media 0 · baixa 20
  link não responde: https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet
links da seção 11: 32/33 respondem (frontmatter diz fontes: 33)
RESULTADO: 1 problema(s) — corrija antes de entregar
```

**Sobre o problema apontado, e o que foi feito.** O link acusado é o da CoinDesk (fonte 18). A
fonte **foi aberta e lida** nesta rodada; o que o verificador encontra é bloqueio do servidor a
cliente automatizado. Antes de mexer em qualquer coisa, medi seis vezes com o mesmo método do
verificador (`urllib`, agente Mozilla, timeout de 10s), para separar servidor lento de bloqueio
de robô:

```
429 | 429 | 429 | 429 | 429 | 429      (6/6 — determinístico, não intermitente)
curl -L -A "Mozilla/5.0" → 429
```

Sendo determinístico, **a URL saiu da seção 11 e foi para 12.5**, com a fonte permanecendo
numerada, descrita e citada na 11. Saída do verificador depois da correção:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 18 (frontmatter diz 18)
efeitos ordem 2: 25 (frontmatter diz 25)
efeitos ordem 3: 20 (frontmatter diz 20)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 6 · media 12 · baixa 0
confiança ordem 2: alta 1 · media 18 · baixa 6
confiança ordem 3: alta 0 · media 0 · baixa 20
links da seção 11: 32/32 respondem (frontmatter diz fontes: 33)
RESULTADO: ok
```

Duas observações que valem a aula. A primeira: `429` é *"requisições demais"*, não *"não
existe"* — a distinção entre link quebrado e política de robô é precisamente o que a seção 3
deste mapa passa dez parágrafos medindo. A segunda: **o verificador desta rodada foi barrado por
ser uma máquina lendo a web**, e a solução adotada foi tirar a URL da lista e deixá-la no anexo,
que é a versão em miniatura de `e15.2` — a mesma informação servida de forma diferente conforme
quem pede.

### 12.2 Premissas assumidas — o que o briefing não cobriu

O `briefing:` veio completo (modo, tema, slug, autor, zona, horizonte, público, recorte,
descartado, raiz suspeita, viés, busca web, saída), e a rodada foi **não interativa** — não havia
ninguém para responder. Pelo §0 da skill, briefing completo **não rebaixa** a confiança; o que
ele não cobriu é declarado aqui como premissa assumida.

1. **"O que já é comum em produto de massa" foi lido como a régua de maturidade do §2, e não
   como uma lista de exclusão.** Foi o que derrubou o zero-click como candidato a raiz.
2. **"Ideias óbvias a excluir: as que servem para qualquer tema"** foi aplicado como a lista de
   efeitos proibidos do §3. Removi quatro efeitos por esse critério (12.3).
3. **O falseador do briefing** ("evidência de que a adoção já passou da maioria inicial, ou de que
   a tecnologia não rompe nada") virou critério operante do §6. Ele derrubou uma coisa de fato:
   o zero-click, com número (AI Overviews em 48%-50% das buscas nos EUA; clique caindo de 15%
   para 8%).
4. **Profundidade "três ordens" e modo "a partir de uma inovação/tema"** foram seguidos ao pé da
   letra: o mapa parte do tema, não de um setor, e para na terceira ordem.
5. **Assumi que "global, com uma nota sobre o Brasil" significa uma seção brasileira na âncora
   (3.5) e efeitos brasileiros nomeados na roda** (`e10`, `e10.1`, `e10.1.1`, `e16.1.1`,
   `e11.2.1`), e não apenas um parágrafo de cortesia.
6. **Assumi que as fronteiras declaradas pelo enunciado do tema (temas 2 e 5) são vinculantes** —
   e recusei duas raízes plausíveis por causa delas, registrando em 4.0. Se a intenção fosse
   permitir sobreposição, o mapa teria ao menos uma raiz a mais (identidade de agente).
7. **Assumi `publico_ok: false`**, que é o padrão do formato da disciplina; o briefing não trata
   do assunto.
8. **Assumi que "confiança do mapa" no frontmatter é a confiança agregada**, e escrevi `media`:
   a âncora é forte e datada, mas duas das quatro raízes (2 e 3) têm evidência de demanda fraca,
   e uma (1) pode estar fora do escopo de mídia, como diz o pré-mortem.

### 12.3 Efeitos cortados no §6, com o motivo

Quatro efeitos foram escritos, entraram numa versão do bloco `roda:` e saíram. Ficam aqui
porque o formato proíbe corte silencioso.

**Cortado — `e2.2.1` "Surge a função de curador de registros de ferramentas".** Reprovado no
teste do §3 (efeitos proibidos): profissão sem nome, sem empregador e sem mecanismo ligando-a ao
pai. O que sobreviveu da intuição está em `e4.1` (o registro vira ponto de controle comercial),
que tem ator — quem opera o registro — e mecanismo — controle de acesso ao mercado.

**Cortado — "Governos passam a tributar a requisição de máquina".** Reprovado por dois motivos:
não tem ator nomeado (qual governo, sob qual competência) e não tem precedente. A intuição
correta que o originou — que não há resposta para "quem eu faturo?" — está registrada como "o
que ainda falta acontecer" na raiz 2, que é o lugar dela.

**Cortado — "Surge a profissão de designer de agente (AX designer)".** Proibição explícita do
§3. A literatura de "AX" existe e a abri (fonte 24), mas a própria página não prescreve prática
nenhuma — é vocabulário à procura de conteúdo. O que sobreviveu, com entregável concreto, é
`e11.1`: uma variante do design system para dentro do agente.

**Cortado — "Cursos de comunicação e design reorganizam o currículo em torno de agentes".**
Proibição explícita do §3, e o teste de especificidade o mata de vez: trocando "internet
agêntica" por qualquer um dos outros dezoito temas da disciplina, a frase continua servindo.

**Rebaixado e mantido — `e9`.** Marcado no §7.2 como extrapolação linear ("custo sobe, consumo
cai"). Sobreviveu porque o filho `e9.1` tem mecanismo próprio e não-linear: menos leitura não
significa só menos páginas, significa **outra composição de fontes**, com preço entrando onde
antes havia relevância.

### 12.4 Caminhos abandonados

**Abandonado — organizar o mapa por camada de protocolo** (descoberta → identidade → pagamento →
interface), que é a arrumação do artigo de Dey e Viradecha (fonte 28). É mais limpa e produz um
mapa de infraestrutura, com efeitos técnicos derivando de efeitos técnicos. Abandonei porque o
público do mapa é quem projeta mídia e interação: a camada de pagamento importa aqui pelo que
faz com o conteúdo, não pela liquidação.

**Abandonado — fazer da identidade de agente (Web Bot Auth) a raiz 1.** É a candidata mais forte
em evidência de produção — roda na Cloudflare, AWS, Akamai e Vercel — e estruturalmente a mais
fundamental: sem ela, nenhuma das quatro raízes funciona direito. É o tema 2. Mantive como
pré-condição declarada, e é por isso que a contradição 2 da seção 5.3 termina apontando para
fora deste mapa.

**Abandonado — um quinto ramo sobre acessibilidade como raiz própria.** A simetria entre leitor
de tela e agente (SF7) é o achado mais contraintuitivo desta rodada, e cheguei a esboçar uma
raiz "a semântica volta a ter valor econômico". Não passou no §2: **não rompe nada** — é a
mesma prática de sempre ganhando um segundo motivo. Melhoria sustentadora, e o §2 manda recusar.
Virou sinal fraco e o eixo do cenário desejável.

**Abandonado — tratar o `llms.txt` como raiz e o seu fracasso como efeito.** Teria sido o mapa
mais fácil de escrever e o mais errado: o padrão foi adotado por 10% dos domínios, ignorado por
97% e desmentido por dois estudos independentes em menos de dois anos. Virou o contraexemplo que
organiza o ceticismo do mapa inteiro — toda vez que um efeito depende de "o padrão X pegou",
`llms.txt` é a pergunta de controle.

**Abandonado — usar a contagem de servidores MCP como medida de adoção.** Ver 12.6.

**Abandonado — derivar da raiz 3 um neto sobre o site não conseguir distinguir o clique da
pessoa do clique do agente dela.** Escrevi, e apaguei: é exatamente o objeto do tema 2. Está na
prosa de `e14.1` como aviso de fronteira, sem id próprio.

### 12.5 Buscas que não deram em nada, e fontes que não abriram

- **Censo de prontidão agêntica em domínios `.br`.** Procurei em português por levantamento de
  `llms.txt`, MCP ou prontidão agêntica em domínios brasileiros. **Não existe.** O que achei foi
  material de agência, um servidor MCP brasileiro de APIs públicas e uma rodada de 18 domínios
  de SEO/GEO — amostra pequena e autosselecionada (sites de SEO são os que mais publicariam o
  arquivo). A seção 3.5 é indício, e está escrita como indício.
- **Número de energia ou emissão atribuível a rastreamento de IA.** Procurei porque o eixo
  ecológico do STEEP estava vazio e a Cloudflare usa o desperdício de rebusca como argumento.
  Não achei nenhuma medição. O eixo ficou vazio, declarado em 5.2.
- **Taxa de falso positivo de detecção de bot contra humanos.** É o número que faria `e16` ter
  confiança alta em vez de média. Achei relatos qualitativos (usuário de VPN e de tecnologia
  assistiva preso em desafio infinito; ausência de auditoria independente de acessibilidade do
  Turnstile após o redesenho de 2026) e **nenhuma medição**. Foi o motivo do rebaixamento
  registrado em 7.8.
- **Caso público de site com receita maior pela superfície agêntica que pela página.** Procurei
  em inglês e português. Nada com número divulgado. É a lacuna que mais enfraquece a raiz 1, e
  está declarada em 4.1.
- **Fonte 18 (CoinDesk), URL fora da seção 11 por bloqueio determinístico a robô.** A página
  foi aberta e lida; o servidor devolve **429 em 6 de 6 medições** a `urllib` e a `curl` com
  agente de navegador. A URL, para quem quiser conferir à mão:
  `https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet`
  Ela sustenta os ~US$ 28 mil/dia de comércio real do x402 e os ~50% de transações gamificadas —
  a evidência mais forte **contra** a raiz 2 deste mapa, que por isso não podia simplesmente ser
  descartada por um código HTTP.
- **`https://help.openai.com/en/articles/20001371-evolving-atlas-into-chatgpt-for-browser-based-agentic-work`**
  — **HTTP 403**. Era a fonte primária da OpenAI sobre o fim do Atlas. A data de 09/08/2026 vem
  de agregadores e está marcada como provável, não confirmada; a data de anúncio (09/07/2026)
  tem TechCrunch.
- **Acurácia numérica do artigo de impressão digital de agentes (arXiv:2606.30119).** O PDF
  abriu, mas o trecho extraído não continha a tabela de acurácia. Por isso o artigo sustenta uma
  afirmação qualitativa ("é viável") e nenhum número.
- **Metodologia do Not Human Search.** A página inicial dá o total (5.316) e a média (38), e não
  publica nem distribuição nem critério de amostragem. Usei o índice como existência, não como
  medida.

### 12.6 Divergências não resolvidas, registradas

**Quantos servidores MCP existem?** Três medições incompatíveis, todas de 2026:

| Fonte | Número | Data | O que conta |
|---|---|---|---|
| WorkOS | "quase 2.000 entradas" | 2026 | registro oficial |
| API oficial do MCP Registry | 9.652 registros "latest"; 28.959 registros servidor/versão | 24/05/2026 | registro oficial |
| Censo independente (Nerq) | 17.468 servidores | 1º trimestre de 2026 | vários registros somados |
| Anthropic, na doação | "mais de 10.000 servidores públicos ativos" | dezembro/2025 | não definido |

Fator de oito entre a menor e a maior. **Nenhuma das quatro define o denominador da mesma
forma** — "entrada no registro", "registro latest", "servidor em qualquer registro" e "servidor
público ativo" são quatro coisas. Não escolhi: nenhum efeito deste mapa se apoia nessa contagem.

**Qual é o crawl-to-refer da Anthropic?** 38.000:1 (dados de julho/2026 citados em resumo),
1.917:1 (julho/2026, TechnologyChecker sobre Radar), 5.143:1 (2º trimestre de 2026), 23.951:1
(1º trimestre de 2026, SEOmator sobre Radar). A ordem de grandeza varia por **um fator de vinte**
conforme a janela e a metodologia. Usei a série do TechnologyChecker no corpo, por ser a que
declara janela e método — **e a instabilidade virou argumento** em 1 e em 3.1: não existe régua
estável.

**Os orçamentos de AEO/GEO são confiáveis?** "94% dos líderes de marketing vão aumentar", "12%
do digital", "US$ 75-150 mil/ano no médio porte". Todos vêm de empresas que **vendem serviço de
AEO**. Registrei o número em 5.1 com a ressalva, e não apoiei nenhum prazo nele.

**O Atlas foi desligado em que data?** Anúncio em 09/07/2026 (TechCrunch, aberto). Desligamento
em 09/08/2026 (agregadores; a fonte primária deu 403). Uso a segunda como provável.

**A Cloudflare cobra por crawl ou por uso?** Ambas, em momentos diferentes: pay-per-crawl desde
01/07/2025, Pay Per Use desde 01/07/2026, o segundo apresentado como evolução do primeiro e não
como substituição limpa. Dois textos secundários tratam como se fossem a mesma coisa lançada em
2026. Não são.

### 12.7 As buscas que sustentaram esta rodada

Quatorze buscas, em português e inglês, e trinta e três documentos abertos. As consultas:

1. `Cloudflare pay-per-crawl HTTP 402 AI crawlers adoption 2026`
2. `llms.txt adoption agentic web standard 2026 criticism`
3. `Web Bot Auth IETF draft signature agents adoption 2026`
4. `x402 protocol payments agents adoption transactions 2026`
5. `Model Context Protocol adoption servers registry 2026 statistics`
6. `AI crawl-to-refer ratio publisher traffic decline Cloudflare 2026 data`
7. `WebMCP W3C browser standard sites expose tools to agents 2026`
8. `"Not Human Search" agent-ready score llms.txt OpenAPI MCP index`
9. `answer engine optimization AEO market spend 2026 SEO budget shift agents`
10. `agentic browser adoption 2026 ChatGPT Atlas Comet usage share numbers`
11. `Brasil sites bloqueio crawlers IA llms.txt adoção agentes 2026`
12. `publicidade em respostas de IA anúncios agentes 2026 modelo de receita web aberta`
13. `MCP Apps extension OpenAI Apps SDK interface inside chat 2026 adoption`
14. `censo domínios .br llms.txt MCP prontidão agêntica Brasil levantamento`

Mais as consultas de confirmação pontual (fim do Atlas; estudo da Ahrefs; estudo da SE Ranking;
Content Signals; estudo das 856 ferramentas; Pew e zero-click; NLWeb; Foil; AX), que levaram às
fontes da seção 11 e cujos resultados negativos estão em 12.5.

### 12.8 O que ficou de fora por fronteira, e para onde vai

Para quem for cruzar este mapa com os vizinhos da disciplina:

- **Tema 2 (contenção, segurança e identidade de agentes):** Web Bot Auth e a RFC 9421; o artigo
  de impressão digital multicamada; a Foil e a categoria de detecção; a incapacidade de o site
  distinguir a pessoa do agente dela quando os dois vêm da mesma sessão autenticada (o neto que
  apaguei de `e14.1`); e a contradição 2 de 5.3, que **só se resolve no tema 2**.
- **Tema 3 (infraestrutura de confiança):** as quatro lacunas corporativas do MCP — auditoria,
  multi-tenancy, limite de taxa, portabilidade; e toda a aferição de citação de `e6.1.1`, que é
  um problema de observabilidade antes de ser um problema comercial.
- **Tema 5 (pagamento e comércio por agentes):** carteira, checkout, Agent.market, a decisão de
  compra. Aqui o x402 entrou só como preço de acesso ao conteúdo.
- **Convergência a conferir com o mapa do tema 3:** se o efeito "a aferição vira a próxima
  indústria" (convergência 1 da seção 5.3) aparecer também lá, por outro caminho, é convergência
  independente entre mapas — o achado que a disciplina disse procurar ao cruzar os doze blocos
  `roda:`.
