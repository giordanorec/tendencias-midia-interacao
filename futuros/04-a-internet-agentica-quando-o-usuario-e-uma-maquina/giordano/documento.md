---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-10
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 20
efeitos_ordem_2: 23
efeitos_ordem_3: 14
tecnologias_citadas: [Model Context Protocol, MCP Registry, MCP Apps (SEP-1865), WebMCP, document.modelContext, NLWeb, llms.txt, ai-plugin.json, OpenAPI, Schema.org, robots.txt, RFC 9309, Content Signals Policy, AIPREF, draft-ietf-aipref-vocab, Web Bot Auth, RFC 9421, HTTP 402, x402, Really Simple Licensing (RSL), pay-per-crawl, pay-per-use, Not Human Search, agent-readiness score, Lighthouse webmcp-form-coverage, ChatGPT Atlas, Perplexity Comet, Claude for Chrome, AI Overviews, AI Mode, Cloudflare BotBase, Ceramic.ai, You.com]
fontes: 32
confianca: media
experimento: "Cobrador — o site da disciplina publicado em três superfícies (página, llms.txt, ferramenta MCP), com Content-Signal declarado e uma rota que responde 402, medindo quem chega, quem obedece e quem paga"
skill_usada: futurizacao-giordano
publico_ok: true
---

## 1. Resumo

A web foi construída sobre um acordo tácito: você lê de graça e eu ganho na sua atenção. Esse
acordo pressupõe que quem lê tem atenção — e o leitor deixou de ser uma pessoa. Este mapa deriva
quatro rupturas do fato de o visitante ser um programa: o site passa a publicar **ferramentas**
e não páginas; o acesso passa a ser **negociado e precificado na própria requisição**; a mesma
URL passa a devolver coisas diferentes conforme o **propósito declarado** de quem pede; e a
descoberta deixa de ranquear relevância para humanos e passa a ranquear **operabilidade por
máquina**. A âncora de hoje é dura e medida: em abril de 2026 a rede da Cloudflare emitia mais
de um bilhão de respostas HTTP 402 por dia para crawlers de IA; o crawler da Anthropic buscava,
segundo dados da própria Cloudflare, cerca de 38.000 páginas para cada visita que devolvia; o
Chrome abriu em maio de 2026 o teste público de uma API (WebMCP) que deixa a página declarar
ferramentas ao agente; e 68,01% das buscas no Google nos primeiros quatro meses de 2026
terminaram sem clique. Ao mesmo tempo, o sinal mais divulgado da web agêntica é oco: dos 137 mil
domínios auditados pela Ahrefs, 97% dos arquivos `llms.txt` não receberam nenhuma requisição em
maio de 2026. A aposta central deste mapa é que a bifurcação não acontece por adesão de quem
publica, e sim por **default de intermediário** — a borda, o navegador e o cliente de chat
decidem, e o site descobre depois. Quem projeta mídia e interação passa a desenhar duas coisas
ao mesmo tempo: o que a pessoa vê e o que a máquina pode fazer. Quem perde primeiro é quem vivia
de tráfego de busca e não tem como cobrar nem como bloquear — no Brasil, um em cada quatro
portais associados à Ajor perdeu mais de 20% de audiência em 2025.

## 2. O tema

**O objeto.** A web como plataforma sendo reprojetada para que o visitante principal seja um
programa. Não é o tema da segurança (quem é este agente e como eu o detecto — tema 2 da
disciplina), nem o do comércio (como o agente paga por um produto — tema 5). É o tema da
**superfície**: o que um site publica, em que formato, sob que condições, e para quem.

**Onde isso encosta em mídia e interação.** Em quatro pontos, todos concretos:

1. **A interface.** Se a leitura é feita por um programa, a página deixa de ser o lugar onde a
   interação acontece — e passa a ser, na melhor hipótese, um componente renderizado dentro do
   aplicativo de outra empresa. A extensão MCP Apps, oficializada em janeiro de 2026, faz
   exatamente isso: o servidor devolve HTML que o cliente de chat renderiza num iframe.
2. **A publicidade.** O inventário publicitário da web é o espaço da página. Se ninguém abre a
   página, o inventário evapora — e reaparece dentro da resposta do assistente. Em maio de 2026,
   segundo a Similarweb, cerca de 26% das respostas do ChatGPT já continham anúncio.
3. **A descoberta.** O SEO otimiza para um ranking cuja premissa é que existe alguém lendo. Já
   existe ranking com outra premissa: o Not Human Search pontua sites de 0 a 100 por
   *prontidão agêntica* — 25 pontos por ter `llms.txt`, 20 por `ai-plugin.json`, 20 por OpenAPI,
   15 por API estruturada, 10 por servidor MCP, 5 por regras de IA no `robots.txt`, 5 por
   Schema.org. Nenhum desses sete sinais mede qualidade editorial.
4. **O acesso.** Se o visitante é uma máquina que não vê anúncio e não assina nada, a única forma
   de cobrar é cobrar dele — e o HTTP tem, desde 1997, um código reservado para isso que nunca
   foi usado: o 402 Payment Required.

**Por que isto merece um mapa de futuro, e não um levantamento de estado da arte.** Porque as
peças já existem e o que está em disputa é o arranjo entre elas. Ninguém precisa inventar nada
novo para que a web se parta em duas: o protocolo existe (MCP, WebMCP), a política de uso existe
(Content Signals, AIPREF, RSL), o trilho de pagamento existe (402, x402), o ranking existe
(prontidão agêntica) e o bloqueio por default já foi acionado por uma empresa que está na frente
de uma fatia enorme do tráfego mundial. O que não existe é consenso sobre quem paga o quê, e é
disso que dependem os efeitos de segunda e terceira ordem. Um levantamento de estado da arte
listaria as peças; um mapa tem que dizer o que acontece com o ofício de projetar quando elas se
encaixam — e o que acontece se não se encaixarem.

**Uma observação de método, declarada de saída.** Este mapa foi escrito por uma máquina a partir
de fontes abertas na web. Em pelo menos dois pontos o objeto da pesquisa interferiu na pesquisa:
duas das fontes que eu quis abrir devolveram 403 para o meu agente (a Cloudflare Radar e a HUMAN
Security — as duas, ironicamente, empresas que medem tráfego automatizado), e uma terceira
devolveu 429 ao verificador automático. Isso não é anedota: é a primeira ordem do tema
acontecendo sobre quem o estuda. Está registrado na §12.4.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web, em 10/09/2026. Trinta e duas fontes abertas e lidas (§11),
mais duas medições próprias descritas em §3.5. As buscas que não deram em nada e as fontes que
não abriram estão na §12.

### 3.1 O que já existe e funciona

**O protocolo de ferramentas virou infraestrutura.** O Model Context Protocol, lançado pela
Anthropic em novembro de 2024, tem registro oficial desde 8 de setembro de 2025 — um catálogo
aberto com API pública, moderação comunitária e permissão para sub-registros públicos e
privados. A API responde: em 10/09/2026 consultei `registry.modelcontextprotocol.io/v0/servers`
e ela devolveu registros paginados, com metadados de status (`active`), data de publicação e
versão. Fontes secundárias auditadas em 2026 relatam 9.652 registros na leitura de maio de 2026
e mais de 97 milhões de downloads mensais de SDK segundo a Anthropic em dezembro de 2025. Esses
dois números eu não verifiquei na fonte primária: entram como relatados, com o intermediário
nomeado.

**A interface dentro do chat já é oficial.** A SEP-1865 (*MCP Apps*) foi aberta em 21/11/2025 e
integrada em 28/01/2026. Ela padroniza recursos de UI declarados sob o esquema `ui://`,
renderizados em iframe com sandbox, conversando com o host por JSON-RPC sobre `postMessage`. Ou
seja: **a tela do produto passa a ser servida por um servidor MCP e desenhada dentro do
aplicativo de outra empresa.** Para quem projeta interface, este é o fato mais concreto do mapa.

**A página declarando ferramentas está em teste público no Chrome.** O WebMCP é um *Draft
Community Group Report* do W3C Web Machine Learning Community Group, editado por Brandon
Walderman (Microsoft), Khushal Sagar (Google) e Dominic Farolino (Google), com publicação de
10/09/2026 — explicitamente **fora** da trilha de padrões do W3C. Ele define uma interface
`ModelContext` com `registerTool()`, `getTools()`, `executeTool()` e evento `toolchange`, atrás
de uma *permissions policy* chamada `tools`. O Chrome abriu *origin trial* público a partir da
versão 149 (maio de 2026), com previsão de ir até a 156; a API migrou de `navigator.modelContext`
para `document.modelContext` em 21/07/2026, e o Chrome 150 depreciou a localização antiga.

**O bloqueio por default já aconteceu, e está sendo endurecido.** Em 01/07/2025 a Cloudflare
passou a bloquear crawlers de IA por default para novos domínios e abriu o beta de *pay per
crawl*. Em 01/07/2026 anunciou a etapa seguinte: classificação do tráfego de IA em três usos —
**Search, Agent e Training** — e, a partir de **15/09/2026**, bloqueio por default de Agent e
Training **nas páginas que exibem anúncio**, com Search liberado. O detalhe que importa: se o
cliente bloqueia Training, crawlers multiuso como Googlebot, Applebot e BingBot são bloqueados
junto, porque combinam busca com treinamento. O CEO Matthew Prince justificou assim, segundo a
TechCrunch: *"agora que a maioria do tráfego na internet é não-humana, precisamos ir além e agir
mais rápido para que um ecossistema sustentável possa emergir"*.

**O 402 saiu do papel.** Segundo a reportagem da ppc.land, em abril de 2026 clientes da rede
Cloudflare emitiam **mais de um bilhão de respostas HTTP 402 por dia** para crawlers de IA. E o
modelo já mudou de eixo uma vez: em 01/07/2026 a empresa passou de *pay per crawl* (paga-se por
busca) para *pay per use* (paga-se quando o conteúdo aparece na resposta), com Ceramic.ai
operando pagamento por consulta e You.com permitindo compra pontual de conteúdo premium.

**A política de uso declarada existe em três formatos concorrentes.** (a) A *Content Signals
Policy* da Cloudflare, lançada em 24/09/2025, escreve no `robots.txt` linhas do tipo
`Content-Signal: search=yes, ai-train=no`; (b) o grupo AIPREF do IETF, constituído em fevereiro
de 2025, produz `draft-ietf-aipref-vocab`, na versão 07 de 18/08/2026, em trilha de *Proposed
Standard*, com duas categorias (`train-ai` e `search`) e três valores (permitido, proibido,
desconhecido); (c) a RSL 1.0, publicada em 10/12/2025 pelo comitê técnico da RSL Collective,
que acrescenta ao `robots.txt` uma diretiva `License:` apontando para um XML com termos —
inclusive pagamento por *crawl*, por uso, por treinamento, assinatura e compra única.

**A identidade criptográfica do visitante está implantada antes de ser padrão.** O Web Bot Auth
usa HTTP Message Signatures (RFC 9421) com cabeçalhos `Signature`, `Signature-Input` e
`Signature-Agent`, chave Ed25519 e `keyid` como *thumbprint* JWK. A arquitetura está em
`draft-meunier-web-bot-auth-architecture-05`, de 02/03/2026 — um *Internet-Draft* individual,
que o próprio documento declara **sem qualquer posição formal no processo de padronização do
IETF**. A Cloudflare já a usa no programa de bots verificados desde 01/07/2025. (Este é o ponto
de fronteira com o tema 2; aqui ele entra só como pré-condição da segmentação, não como objeto.)

**A cobrança tem contraparte do lado do cliente.** O x402 usa o 402 do HTTP como resposta que
dispara pagamento e nova tentativa, na mesma conversa HTTP. O site oficial reportava, em
10/09/2026, **75,41 milhões de transações, US$ 24,24 milhões de volume, 94.060 compradores e
22.000 vendedores nos últimos 30 dias**, e listava Alchemy, AWS, Cloudflare, Stripe e Vercel
como parceiros.

**O ranking de máquina existe e é público.** O Not Human Search se apresenta como buscador para
agentes, com pontuação de prontidão agêntica de 0 a 100 sobre sete sinais. O repositório declara
"1.900+ sites agent-first" pontuados no corpo do texto e "8.000+ sites indexados" no cabeçalho —
uma incoerência da própria fonte, registrada aqui como tal.

**A tese "a página é para gente" está escrita.** O `llms.txt` foi proposto por Jeremy Howard em
setembro de 2024, com versão 2 em agosto de 2026, e a justificativa é literal: *"páginas web são
feitas para pessoas. Uma página HTML embrulha a informação em navegação, anúncios e JavaScript,
e convertê-la de volta para texto limpo é difícil e impreciso"*.

### 3.2 O que existe e ainda não funciona

**O WebMCP não tem consumidor.** Segundo o levantamento da Spronta de julho de 2026, nenhum
agente de massa — Claude, ChatGPT Agent, Perplexity, Gemini — consome ferramentas WebMCP. A
Google anunciou que o Gemini no Chrome seria o primeiro. Os pilotos nomeados (Expedia,
Booking.com, Shopify, Credit Karma, TurboTax, Redfin, Etsy, Instacart, Target) são intenção
declarada, não implantação confirmada. A caracterização da fonte é dura e eu a adoto com o
crédito: *"um padrão com 0% de adoção sendo lançado"*.

**O `llms.txt` é publicado e não é lido.** A Ahrefs auditou logs de 137 mil domínios e achou que
**97% dos arquivos `llms.txt` não receberam nenhuma requisição** em maio de 2026; entre as poucas
requisições, GPTBot respondia por 4,51%, ClaudeBot por 0,80%, DeepseekBot por 0,02%. No mesmo
período a adoção cresceu 8,8 vezes — de cerca de 4.088 para 36.120 instâncias, na contagem da
Originality.ai. E a Google é explícita na documentação oficial: *"Você não precisa criar novos
arquivos legíveis por máquina, arquivos de texto de IA ou marcação para aparecer nestes
recursos"*, sem sequer mencionar o `llms.txt` pelo nome.

**O micropagamento não tem demanda comprovada.** A reportagem da CoinDesk de 11/03/2026 (aberta
por mim; o link está na §12.4 porque devolve 429 ao verificador automático) registra cerca de
US$ 28 mil de volume diário e ~131 mil transações, com ticket médio de ~US$ 0,20 — e cita
análise da Artemis segundo a qual **cerca de metade das transações observadas é artificial**,
entre autonegociação e *wash trading*. A distância entre esse número e os US$ 24,24 milhões em
30 dias anunciados pelo x402.org é parte do quadro, não um detalhe: o mesmo protocolo é descrito
por duas fontes em ordens de grandeza diferentes.

**A superfície de ferramentas é insegura.** Compilação de estudos publicada pela Practical
DevSecOps em 2026 reúne: 43% de servidores MCP vulneráveis a injeção de comando (Equixly,
fev/2026); 36,7% de mais de 7.000 servidores vulneráveis a SSRF (BlueRock, 2026); 33% de 1.000
servidores com vulnerabilidade crítica (Enkrypt, out/2025); ~5,5% de 1.899 servidores com
*tool poisoning* (estudo acadêmico, 2025); 53% dependendo de chave estática e só 8,5% usando
OAuth (Astrix, out/2025, 5.200+ servidores). São fontes secundárias com origem nomeada; a
convergência entre elas é o que sustenta a afirmação, não qualquer número isolado.

**A declaração de preferência não tem execução.** A própria Cloudflare afirma que os valores de
`Content-Signal` **sinalizam preferência, não bloqueiam**. O cumprimento depende de reputação
(bots verificados podem perder o selo). O precedente é ruim: o Do Not Track, de 2009, era
exatamente isso e morreu por falta de obrigatoriedade.

**O agente dentro do navegador é indetectável.** Conforme o comparativo do searchviu de
05/08/2026, agentes que rodam como extensão enviam o mesmo user-agent do Chrome e o mesmo IP
residencial de uma pessoa. A única métrica pública de adoção citada ali é a extensão Claude for
Chrome: de ~40 mil para mais de 10 milhões de instalações entre dezembro de 2025 e junho de 2026.

### 3.3 Quem constrói

| Ator | O que constrói | Interesse |
|---|---|---|
| **Anthropic** | MCP (nov/2024), registro oficial (set/2025), coautoria do MCP Apps | que o agente alcance qualquer sistema |
| **Google e Microsoft** | WebMCP no W3C WebML CG; Chrome origin trial 149-156; NLWeb (Microsoft, 19/05/2025, com TripAdvisor, Shopify, Eventbrite e Hearst) | que a página fale com o agente do navegador |
| **Cloudflare** | bloqueio por default, Content Signals, managed robots.txt, pay-per-crawl → pay-per-use, BotBase, Web Bot Auth | ser a camada onde a política é aplicada — e cobrada |
| **RSL Collective** | RSL 1.0; cofundada por Eckart Walther (cocriador do RSS) e Doug Leeds (ex-Ask.com); ~1.500 organizações declaradas, entre elas AP, Yahoo e People Inc. | licenciamento coletivo de conteúdo |
| **IETF (AIPREF)** | vocabulário e anexação de preferências, atualizando a RFC 9309 | tirar a expressão de preferência do improviso |
| **Coinbase / Fundação x402 / Stripe** | trilho de pagamento na requisição | que a máquina possa pagar sem intermediação humana |
| **Not Human Search e similares** | índice e pontuação de prontidão agêntica | ser o ranking da próxima camada |

### 3.4 Que número descreve a adoção hoje

Não há um número; há quatro, e eles não concordam entre si. Registro os quatro, com a fonte e a
discrepância à vista, em vez de escolher o mais conveniente:

| Medida | Valor | Fonte e data |
|---|---|---|
| Buscas do Google sem clique | 68,01% (jan-abr/2026, painel EUA) | SparkToro sobre painel Similarweb |
| Clique quando há resumo de IA | 8% (contra 15% sem resumo) | Pew Research, 68.879 buscas, março/2025 |
| Tráfego de bots na web | 57,4% em junho/2026 | ppc.land relatando dados Cloudflare |
| Tráfego de bots na web | ~35% em agosto/2026 | Cloudflare Radar, via busca — **fonte não aberta** (403) |
| Queda de busca orgânica | −33% global e −38% nos EUA (nov/2024 a nov/2025, 2.500+ sites) | Reuters Institute, *Trends and Predictions 2026* |
| Expectativa de queda adicional | −43% em três anos, entre 280 executivos de 51 países | Reuters Institute |
| Confiança no futuro do jornalismo | 38% (queda de 22 p.p. desde 2022) | Reuters Institute |
| Impacto esperado de ferramentas agênticas | 75% esperam impacto "grande" ou "muito grande" | Reuters Institute |
| Instâncias de `llms.txt` | 36.120 (de 4.088 um ano antes) | Originality.ai, via mecanik.dev |
| `llms.txt` sem nenhuma requisição | 97% de 137 mil domínios | Ahrefs, maio/2026, via mecanik.dev |
| Respostas HTTP 402/dia na rede Cloudflare | > 1 bilhão | ppc.land, abril/2026 |
| Razão crawl-para-referência | 38.000:1 (Anthropic) e 1.091:1 (OpenAI) | ppc.land relatando Cloudflare |

**A leitura honesta desta tabela:** a adoção do *comportamento* (ler por agente em vez de por
pessoa) está em maioria ou perto dela; a adoção da *infraestrutura* declarada para agentes
(llms.txt, WebMCP, RSL, Content Signals) está em adoção precoce ou abaixo. É essa defasagem que
produz quase todos os efeitos de segunda ordem deste mapa.

### 3.5 Duas medições próprias, feitas em 10/09/2026

Como quase todo número público vem de empresas que vendem o produto que medem, fiz duas
medições diretas. Método, resultado e erro estão declarados; o código está na §12.6.

**Medição 1 — prontidão agêntica em 49 domínios** (25 globais de grande porte e 21 do Brasil,
requisição com user-agent identificado como pesquisa acadêmica do CIn-UFPE):

| Sinal | Resultado |
|---|---|
| `robots.txt` responde | 43 de 49 |
| `/llms.txt` presente e não-HTML | **6 de 49** — github.com, stripe.com, vercel.com, cloudflare.com, shopify.com, americanas.com.br |
| `robots.txt` menciona GPTBot | 12 |
| `robots.txt` menciona ClaudeBot | 12 |
| `robots.txt` menciona Google-Extended | 9 |
| `Content-Signal` no `robots.txt` | **2** — vercel.com e cloudflare.com |
| Diretiva `License:` (RSL) no `robots.txt` | **2** — medium.com e theguardian.com |
| `/.well-known/mcp.json` com JSON válido | **0 de 49** |

No subconjunto brasileiro (21 domínios, de portais a bancos, governo e universidades): um único
`llms.txt` (americanas.com.br), quatro `robots.txt` mencionando GPTBot, quatro mencionando
ClaudeBot, **nenhum** `Content-Signal` e **nenhuma** diretiva `License:`.

**Medição 2 — onde o `llms.txt` de fato está.** Se ele quase não aparece na raiz dos domínios
grandes, onde está? Testei cinco sites de documentação técnica:

| URL | Resposta |
|---|---|
| `docs.anthropic.com/llms.txt` | 200, `text/plain`, 67.859 bytes |
| `docs.stripe.com/llms.txt` | 200, `text/markdown`, 90.555 bytes |
| `developers.cloudflare.com/llms.txt` | 200, `text/plain`, 15.906 bytes |
| `docs.github.com/llms.txt` | 200, `text/markdown`, 28.674 bytes |
| `ai.google.dev/llms.txt` | **404** |

**O que essas duas medições dizem, e que nenhuma fonte que li disse com essas palavras:** a web
agêntica, hoje, é um fenômeno de **documentação técnica**, construído por empresas de
infraestrutura para agentes de programação. Não é um fenômeno de mídia. O `llms.txt` mora em
`docs.*`, não em `home`. Quem está sendo servido não é o assistente do consumidor — é o agente
de código do desenvolvedor. Isso reposiciona todo o mapa: o que a disciplina chama de
"internet agêntica" começou como ferramenta de trabalho de quem constrói software, e a pergunta
aberta é se, e como, ela atravessa para a mídia.

### 3.6 Nota sobre o Brasil

O recorte é global, mas três coisas mudam de forma aqui.

**A perda já é mensurável e a contrapartida não existe.** Segundo reportagem da Agência Brasil de
agosto de 2026, um em cada quatro portais de notícia representados pela Ajor perdeu mais de 20%
de audiência em 2025. O PL 2338/2023, que prevê remuneração por conteúdo protegido por direito
autoral, está na Câmara **desde março de 2025** e parado: a comissão especial não se reúne desde
novembro de 2025, e a presidência da Casa condicionou a votação ao período pós-eleitoral. Ou
seja: no Brasil a bifurcação chega antes da regra de repartição — e chega por default de
infraestrutura estrangeira.

**A camada de política é importada.** As duas medições acima mostram que nenhum dos 21 domínios
brasileiros testados declara `Content-Signal` ou `License:`. Quem decide, então, o que acontece
com o conteúdo brasileiro quando um agente chega é a configuração default do CDN — e o default
de 15/09/2026 é da Cloudflare, não do editor.

**A dependência de busca é maior.** O dado global do Reuters Institute (−33% de busca orgânica)
não é desagregado por país nas fontes que abri; não invento a versão brasileira. O que é
verificável é o efeito combinado relatado pela Agência Brasil: queda de audiência, sem
mecanismo de compensação, num mercado publicitário já concentrado.

## 4. As disrupções-raiz

### 4.0 Candidatos recusados como raiz

Aplicando o critério do §2 da skill — *se dá para fazer com o que já é comum em produto de
massa, é maduro* — cinco candidatos frequentes ficaram de fora:

- **Candidato "APIs REST e SDKs" recusado como raiz:** adoção em maioria desde meados dos anos
  2000; é o contexto sobre o qual a ruptura acontece, não a ruptura. Tratado na §3.
- **Candidato "scraping" recusado como raiz:** prática madura desde os anos 1990; o que muda não
  é raspar, é raspar em escala industrial com contrapartida econômica ausente. O que entra é a
  *reação* a isso (raiz B), não a técnica.
- **Candidato "chatbot de busca" recusado como raiz:** a busca conversacional já está em maioria
  — 68% de buscas sem clique e 8% de cliques quando há resumo de IA descrevem comportamento
  consolidado, não emergente. Tratado como contexto na §3 e como causa próxima de vários efeitos.
- **Candidato "navegador agêntico" (Atlas, Comet, Claude for Chrome) recusado como raiz:** é
  produto, não ruptura — e o anti-padrão da skill é explícito quanto a isso. Além disso, a
  volatilidade do formato é grande (o Atlas autônomo foi descontinuado em 2026 segundo a busca,
  fonte não aberta). Entra como veículo de distribuição das quatro raízes.
- **Candidato "identidade criptográfica do agente" (Web Bot Auth) recusado como raiz *aqui*:** é
  o objeto do tema 2 da disciplina. Entra neste mapa como pré-condição técnica da raiz C, com o
  crédito à fronteira.

### 4.1 Raiz A — O site passa a publicar ferramentas, e não páginas

> A unidade de publicação da web deixa de ser o documento e passa a ser a **capacidade
> executável**: um nome, uma descrição em linguagem natural, um schema de entrada e um contrato
> de erro.

**1. O que ela rompe.** Rompe a página como unidade de tudo: de publicação, de medição, de
monetização e de design. Rompe também a separação entre "conteúdo" e "aplicação" — o texto da
descrição de uma ferramenta é, ao mesmo tempo, prosa e código: muda-se a frase e muda-se o
comportamento do sistema. E rompe a posse do enquadramento: com MCP Apps, o produto é desenhado
por você e emoldurado por outra empresa.

**2. Por que agora, e não há cinco anos.** Porque só agora existem as três pré-condições juntas:
(a) modelos capazes de escolher ferramenta a partir de descrição em linguagem natural com
confiabilidade suficiente para produção; (b) um protocolo único que venceu a fragmentação — o MCP
tem registro oficial desde set/2025, extensão oficial de UI desde jan/2026 e SDKs com escala de
dezenas de milhões de downloads mensais; (c) um ponto de entrega no navegador — o *origin trial*
do WebMCP no Chrome 149, em maio de 2026. Em 2021 existiam plugins e APIs; não existia nem o
seletor confiável, nem o conector universal, nem o lugar no navegador.

**3. Onde está na difusão.** **Produto de nicho caminhando para adoção precoce.** MCP em produção
é realidade em ferramentas de desenvolvimento; MCP Apps é suportado por um punhado de clientes;
WebMCP é *origin trial* com adoção descrita pela própria literatura como nula. A medição própria
confirma o lado baixo: zero `/.well-known/mcp.json` válido em 49 domínios.

**4. O que ainda falta acontecer.** (i) Um agente de massa consumir ferramentas declaradas pela
página — a Google prometeu o Gemini no Chrome, e nada disso é contrato. (ii) Estabilidade de
especificação: a migração `navigator` → `document` em julho de 2026 já criou dívida em quem
adotou cedo. (iii) Um modelo de permissão que sobreviva à injeção de prompt, já que a ferramenta
executa dentro da sessão autenticada do usuário. (iv) Uma razão econômica para o editor gastar
com a segunda superfície — hoje ela custa e não devolve.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** O fabricante do cliente de chat.
Se a página declara ferramentas, o valor migra para quem *orquestra* as ferramentas. É do
interesse de quem controla o cliente que o catálogo seja curado por ele — e não descoberto
livremente pela página. Isso produz `e18.1` (o catálogo curado como loja de aplicativos).

### 4.2 Raiz B — O acesso deixa de ser gratuito por default e passa a ser negociado na requisição

> A cláusula implícita da web — *você lê de graça, eu ganho na sua atenção* — perde o segundo
> termo quando quem lê é um programa. O preço volta para dentro do protocolo, no código 402.

**1. O que ela rompe.** Rompe o modelo de negócio que financiou a web aberta: publicidade paga
por atenção. Rompe a suposição de que uma URL pública é gratuitamente legível. E rompe a
contabilidade: o editor deixa de ter pageview como unidade de conta, sem ter ainda o que colocar
no lugar — a Cloudflare mesma mudou de *pay per crawl* para *pay per use* em um ano, o que é
confissão de que a unidade certa ainda está em disputa.

**2. Por que agora, e não há cinco anos.** Porque a razão entre extração e devolução colapsou de
forma mensurável: 38.000 buscas por referência no caso da Anthropic, 1.091 no da OpenAI, segundo
dados da Cloudflare relatados pela ppc.land. Enquanto o crawler devolvia visitas, o acordo se
sustentava sem contrato. Além disso, só agora existe (a) um ponto de aplicação com escala — uma
CDN capaz de emitir um bilhão de 402 por dia — e (b) um cliente com carteira, que é a novidade
que micropagamentos nunca tiveram: em 1999 não havia comprador que fosse software.

**3. Onde está na difusão.** **Adoção precoce, com fundamento frágil.** O 402 em escala é real; a
demanda por micropagamento não é. O ticket médio do x402 é de US$ 0,20-0,30 e metade das
transações observadas é artificial, segundo a Artemis via CoinDesk.

**4. O que ainda falta acontecer.** (i) Um comprador de verdade: um fabricante de agente aceitar
pagar por acesso por default, e não só por acordo bilateral. (ii) Uma unidade de cobrança
estável — por busca, por consulta, por citação, por inferência: hoje coexistem as quatro.
(iii) Contabilidade auditável do lado do editor: hoje ele não consegue verificar se foi citado.
(iv) Resolver o caso do pequeno: cobrar exige infraestrutura de borda que a maioria não tem.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** O intermediário de borda. Quem
opera o ponto de cobrança fica com poder de definir o default — e o default é a política real da
web. Isso produz `e9.1` e, em terceira ordem, a pergunta de concorrência em `e9.1.1`.

### 4.3 Raiz C — A mesma URL passa a responder conforme o propósito declarado de quem pede

> Deixa de existir "o que está publicado nesta página". Passa a existir "o que está publicado
> nesta página **para este uso**": busca, resposta de IA, treinamento, execução por agente.

**1. O que ela rompe.** Rompe a identidade entre URL e conteúdo, que é o alicerce de citar,
arquivar, verificar e comparar. Rompe a regra de ouro do SEO segundo a qual entregar coisas
diferentes a robô e a pessoa é *cloaking* e se pune. E rompe o `robots.txt` como instrumento: ele
foi feito para dizer *se* pode rastrear, não *para que* pode usar — é exatamente o que o grupo
AIPREF do IETF escreve ao justificar sua criação, ao descrever a situação atual como *"um
conjunto confuso de sinais não-padronizados"*.

**2. Por que agora, e não há cinco anos.** Porque a distinção entre usos passou a ter valor
econômico diferente: ser indexado por busca traz visita; ser ingerido para treino não traz nada;
aparecer numa resposta traz talvez uma citação. Antes de 2024 os três eram a mesma coisa. E
porque as três formas de declarar isso nasceram em doze meses: Content Signals (set/2025),
RSL 1.0 (dez/2025) e o vocabulário AIPREF (versão 07, ago/2026).

**3. Onde está na difusão.** **Demo pública indo para produto de nicho.** A Cloudflare afirma ter
milhões de domínios em `robots.txt` gerenciado, mas a expressão *deliberada* de propósito é rara:
na minha medição, 2 em 49 domínios com `Content-Signal` e 2 em 49 com `License:`, nenhum deles
brasileiro. Toda a cadeia derivada desta raiz carrega isso.

**4. O que ainda falta acontecer.** (i) Execução: hoje a declaração é preferência, não bloqueio.
(ii) Um caso judicial que transforme a declaração em prova — é a via mais provável de a coisa
ganhar dentes. (iii) Reconciliação entre os três vocabulários concorrentes. (iv) Uma definição de
paridade: quanto o conteúdo servido ao agente pode divergir do servido à pessoa sem que isso seja
tratado como fraude.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** O buscador que também treina. Um
crawler multiuso perde se a distinção entre usos for respeitada, porque ele depende de rastrear
para busca o mesmo conteúdo que usa para treino — e é justamente essa a razão de a Cloudflare
declarar que bloquear Training bloqueia junto Googlebot, Applebot e BingBot. O incentivo de quem
tem as duas funções é manter a distinção inviável na prática.

### 4.4 Raiz D — A descoberta passa a ranquear operabilidade, não relevância

> O critério de ordenação da web deixa de ser *quão útil isto é para quem lê* e passa a ser
> *quão executável isto é para quem chama* — e os dois não têm correlação conhecida.

**1. O que ela rompe.** Rompe o SEO como ofício e o PageRank como ideia. A premissa do PageRank é
social: um link é um voto humano. A premissa da prontidão agêntica é mecânica: pontos por ter
arquivo, schema, endpoint. O Not Human Search dá 25 pontos por um `llms.txt` que, segundo a
Ahrefs, em 97% dos casos ninguém lê. Um ranking cujo principal sinal é comprovadamente não
consumido é um ranking que mede conformidade, não utilidade — e essa é a ruptura: a visibilidade
passa a depender de um sinal que o próprio consumidor ignora.

**2. Por que agora, e não há cinco anos.** Porque agora existe um cliente que precisa
*selecionar* entre milhares de capacidades (os registros de MCP estão na casa dos milhares) e
não entre bilhões de documentos. Selecionar ferramenta é um problema diferente de ordenar
documento: importa o schema, a taxa de erro, a latência, o custo. Em 2021 não havia catálogo de
ferramentas com esse tamanho nem cliente que escolhesse sozinho.

**3. Onde está na difusão.** **Demo pública.** O Not Human Search é um projeto pequeno e
declara números incoerentes entre o cabeçalho e o corpo do próprio repositório. A auditoria
`webmcp-form-coverage` do Lighthouse existe desde maio de 2026 e, segundo a Spronta, ainda
aparece como "Not Applicable" na maioria dos sites. Toda a cadeia derivada desta raiz sai com
confiança rebaixada.

**4. O que ainda falta acontecer.** (i) Um consumidor de peso adotar um índice de operabilidade —
hoje cada fabricante de agente usa seu próprio catálogo. (ii) Uma métrica de qualidade de
ferramenta (taxa de sucesso real), e não de presença de arquivo. (iii) Resolver a poluição: com
~5,5% de servidores com *tool poisoning* medidos, o índice aberto é atacável por construção.

**Quem tem incentivo para bloquear, capturar ou redirecionar.** O próprio fabricante de agente.
Ele ganha se o catálogo for dele, curado e auditado — e não um índice aberto sobre o qual não
tem controle. É a mesma lógica que levou lojas de aplicativo a substituírem a web de downloads.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O site passa a publicar ferramentas, e não páginas
    efeitos:
      - id: e1
        ordem: 1
        efeito: Quem publica passa a manter duas superfícies com orçamentos próprios — a página para olhos e o conjunto de ferramentas para agentes
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A documentação técnica deixa de ser gênero editorial e vira formato de máquina, servida em markdown e anunciada por llms.txt
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A escrita de contrato de ferramenta — nome, descrição, schema, erro — entra no currículo de escrita técnica e de design de interação
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A tela do produto passa a ser renderizada dentro do cliente de chat de outra empresa, via MCP Apps
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A identidade visual se reduz a um cartão dentro do enquadramento do host, e tipografia, navegação e cor deixam de ser decisão de quem publica
                sinal: medio
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A descrição em linguagem natural de uma ferramenta vira parte executável do produto, e escrever texto passa a ser atividade de engenharia
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Teste de regressão de prompt entra na esteira de integração contínua do front-end, ao lado do teste de interface
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A redação da descrição de ferramenta entra no escopo de auditoria de conformidade, porque é ela que delimita o que o agente pode fazer em nome de alguém
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Sites sem ferramenta declarada passam a ser operados por automação sobre a interface humana, e cada mudança de layout quebra agentes de terceiros
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Quem publica passa a versionar a interface visual como se fosse API, com aviso de depreciação
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e4
        ordem: 1
        efeito: A superfície de ferramentas vira superfície de ataque, e a insegurança medida trava a exposição por default em setores regulados
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Bancos, operadoras de saúde e governo publicam ferramenta apenas atrás de identidade e escopo, e a web agêntica nasce partida entre um lado aberto e um lado credenciado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Quem não tem agente credenciado perde o caminho rápido do serviço público, e a fila digital reaparece como fila de capacidade computacional
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Agências e estúdios que vendem site institucional perdem a peça central do contrato e passam a vender integração
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Contratos de site passam a incluir acordo de nível de serviço da ferramenta — disponibilidade, latência e taxa de erro do endpoint —, e não só disponibilidade da página
            sinal: fraco
            prazo: 2030
            confianca: baixa
  - disrupcao: O acesso deixa de ser gratuito por default e passa a ser negociado na requisição
    efeitos:
      - id: e6
        ordem: 1
        efeito: O HTTP 402 deixa de ser código morto e vira resposta rotineira, e o cliente que lê passa a ter carteira
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O custo marginal de ler vira variável de projeto, e o agente passa a escolher a fonte pelo preço
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A hierarquia de credibilidade se reorganiza por preço, e a fonte gratuita e rasa ocupa o contexto do agente porque cabe no orçamento
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O editor troca pageview por citação como unidade de conta, e o contrato publicitário perde a métrica sobre a qual foi escrito
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e7
        ordem: 1
        efeito: A assinatura deixa de ser do leitor e passa a ser do agente, e quem paga é o software em nome de alguém
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Surge o atacadista de acesso, que compra em bloco e revende por consulta, e a relação entre editor e leitor passa a ser mediada por um terceiro que nenhum dos dois escolheu
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e8
        ordem: 1
        efeito: A demanda real por micropagamento não aparece na escala prometida, e parte dos editores volta a preferir bloqueio a cobrança
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O bloqueio volta como default e a web legível encolhe, e o que sobra aberto é o que ninguém quis cobrar
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e9
        ordem: 1
        efeito: O pequeno editor, sem borda própria e sem poder de negociação, não consegue cobrar nem bloquear, e a cobrança concentra audiência nos grandes
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A infraestrutura de borda passa a exercer política editorial de facto, porque o default dela é a regra da web
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Autoridades de concorrência como o CADE e a Comissão Europeia sob o DMA passam a tratar o default de borda como conduta de guardião de acesso
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: O anúncio migra para dentro da resposta do agente, e a página deixa de ser o inventário
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O inventário publicitário passa a ser o slot de citação, e a métrica de mídia vira aparecer na resposta
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: O texto público muda de forma para ser citável — frases curtas, afirmativas, atribuíveis, com o dado no início
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: A mesma URL passa a responder conforme o propósito declarado de quem pede
    efeitos:
      - id: e11
        ordem: 1
        efeito: A mesma URL passa a devolver conteúdos diferentes conforme o propósito declarado, e o que está publicado deixa de ter resposta única
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Citar uma URL deixa de garantir que outra pessoa veja o mesmo, e a verificação acadêmica e jornalística perde o referente
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Arquivos e bibliotecas passam a precisar de credencial de agente para preservar, e a preservação vira privilégio negociado com a borda
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: Paridade entre o que a pessoa vê e o que o agente recebe vira requisito auditável, nos moldes do que o cloaking é hoje para a busca
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e12
        ordem: 1
        efeito: A declaração de preferência deixa de ser convenção e vira peça jurídica, e o robots.txt passa a valer como prova de intenção
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O descumprimento passa a ser medido e publicado, e a reputação de crawler vira ativo econômico do fabricante de agente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Crawler com reputação ruim passa a ser bloqueado em massa por default, e perder o selo custa mais do que desrespeitar a regra
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: A segmentação por propósito entra em conflito com as diretrizes de busca, e quem entrega texto diferente ao agente arrisca a visibilidade que ainda tem
        sinal: medio
        prazo: 2028
        confianca: media
      - id: e14
        ordem: 1
        efeito: Visitar um site deixa de fazer sentido para uma fatia crescente de tarefas, e a métrica de produto migra de sessão para tarefa concluída
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A analítica deixa de enxergar a maior parte do consumo, e a decisão editorial passa a ser tomada sobre dados cegos
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: Contratos de mídia passam a exigir auditoria de terceiro sobre exposição dentro de respostas de IA, como já se audita circulação
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: Quem vive de tráfego de busca para receita publicitária, em especial o jornalismo local, perde a base econômica
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: No Brasil a bifurcação chega antes de qualquer regra de remuneração, porque o PL 2338 está parado na Câmara desde março de 2025
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: Redações brasileiras passam a publicar primeiro onde há pagamento por presença e só depois no site próprio
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A descoberta passa a ranquear operabilidade por máquina, e não relevância para pessoas
    efeitos:
      - id: e16
        ordem: 1
        efeito: Nasce um ranking cujo critério é operabilidade por máquina, sem relação conhecida com qualidade editorial
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: A prontidão agêntica vira checklist de agência, e o llms.txt é adotado por conformidade e não por efeito medido
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: A indústria de otimização se organiza em torno de auditorias que ninguém consegue validar, porque o consumidor do sinal é opaco
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e16.2
            ordem: 2
            efeito: A auditoria automática do navegador vira o vetor de adoção, e o front-end implementa prontidão agêntica sem que exista decisão de produto
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e17
        ordem: 1
        efeito: A escolha do agente passa a ser entre ferramentas e não entre sites, e quem tem a ferramenta certa ganha mesmo com marca fraca
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: Marcas fortes viram itens de catálogo dentro do cliente do agente
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: A publicidade de marca migra para patrocínio de ferramenta, e paga-se para ser a opção default do agente numa categoria
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e18
        ordem: 1
        efeito: O registro aberto de ferramentas é poluído por spam e por envenenamento de descrição, e a descoberta aberta cede a catálogos curados
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: O catálogo curado vira loja de aplicativos, e quem entra, quem é destacado e quem sai passa a ser decisão de uma empresa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e18.1.1
                ordem: 3
                efeito: A web agêntica reproduz a economia de loja de aplicativos, com taxa e política editorial, e o argumento da web aberta perde suporte material
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e19
        ordem: 1
        efeito: Quem nunca teve tráfego de busca ganha distribuição, e a documentação técnica vira canal de aquisição
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e19.1
            ordem: 2
            efeito: Empresas passam a tratar documentação como produto com preço, e não como custo de suporte
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e20
        ordem: 1
        efeito: O tráfego redundante de reingestão vira item de custo e de emissão, e o cache negociado entra no contrato
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e20.1
            ordem: 2
            efeito: Surge negociação de delta para agentes, equivalente ao If-Modified-Since aplicado a ferramentas e a corpora
            sinal: fraco
            prazo: 2030
            confianca: baixa
```

### 5.1 Os mecanismos, um a um

O bloco acima diz *o quê*. Aqui está o *porque* — a regra da skill é que efeito sem mecanismo
não entra. Cada parágrafo segue a forma `porque <pai> faz <mecanismo>`.

**e1 — duas superfícies.** Porque a raiz A separa o destinatário do artefato: a página continua
necessária (a pessoa ainda existe) e a ferramenta passa a ser necessária (o agente não lê layout
de forma confiável). Duas superfícies com públicos diferentes não compartilham roadmap nem
orçamento — é o mesmo mecanismo que separou "site" de "aplicativo" em 2010, com a diferença de
que aqui a segunda superfície não tem, ainda, receita própria. *Sinal forte* porque os artefatos
existem e são verificáveis hoje: `llms.txt` servido em quatro sites de documentação que testei,
MCP Apps oficializado, WebMCP em *origin trial*.

**e1.1 — a documentação vira formato de máquina.** Porque `e1` obriga a escolher qual conteúdo
recebe tratamento de máquina primeiro, e a resposta é o conteúdo cujo consumidor já é uma
máquina: o agente de programação. A minha medição 2 é o artefato: `docs.anthropic.com`,
`docs.stripe.com`, `developers.cloudflare.com` e `docs.github.com` servem `llms.txt` com 15 a 90
KB; `ai.google.dev` devolve 404. *Sinal forte*, *prazo 2027* porque já está acontecendo, e
*confiança alta* porque a medição é direta, não relatada.

**e1.1.1 — a escrita de contrato entra no currículo.** Porque `e1.1` transforma um gênero
editorial (documentação) num artefato de interface, e quem ensina a escrever interface passa a
ter de ensinar a escrever para dois leitores. Nomeio para não cair no efeito genérico proibido:
a disciplina CIN0055 do CIn-UFPE, que já usa este documento como objeto, e a comunidade de
escrita técnica organizada em torno do Write the Docs, que hoje ensina legibilidade e teria de
ensinar contrato. *Confiança baixa*: currículo muda devagar e por motivos que não são técnicos.

**e1.2 — a tela renderizada pelo host.** Porque a raiz A, via MCP Apps, define que o servidor
devolve HTML sob `ui://` e o cliente renderiza em iframe com sandbox. Quem desenha não controla
mais o entorno: fonte, largura, tema, navegação e até o gesto de fechar pertencem ao host.
*Sinal forte* (a extensão está integrada desde janeiro de 2026 e há clientes renderizando);
*confiança media* porque a fatia de interação que passa por chat, e não por navegador, ainda é
pequena e disputada.

**e1.2.1 — a marca vira cartão.** Porque `e1.2` retira do publicador o controle do enquadramento,
e identidade visual é, majoritariamente, enquadramento: grid, tipografia, cor de fundo,
hierarquia. Sobra o que cabe num componente: logotipo, uma cor de destaque, um nome. É o mesmo
mecanismo que reduziu identidade editorial a *card* dentro do feed de rede social entre 2012 e
2016 — com uma diferença que piora o caso: no feed o publicador ao menos escolhia a imagem.

**e2 — a descrição é código.** Porque a raiz A faz a seleção de ferramenta depender de uma
descrição em linguagem natural interpretada por modelo. Trocar "busca vagas" por "consulta
vagas disponíveis" muda a probabilidade de o agente escolher aquela ferramenta. Texto com efeito
executável é engenharia, independentemente de quem o escreva. *Confiança alta* — é propriedade
do mecanismo, não previsão de adoção.

**e2.1 — regressão de prompt no CI.** Porque `e2` cria uma classe de defeito que o teste
tradicional não pega: nada quebra, a ferramenta simplesmente deixa de ser escolhida. A resposta
de engenharia a defeito silencioso é sempre a mesma — teste automatizado na esteira. *Sinal
medio*: existe em times de IA, ainda não em times de front-end.

**e2.1.1 — a descrição entra na conformidade.** Porque `e2.1` estabelece que a descrição
determina comportamento, e comportamento automatizado que age em nome de alguém é objeto de
auditoria — é o que já acontece com termos de uso e com texto de consentimento. *Confiança
baixa*: depende de haver dano documentado primeiro.

**e3 — automação sobre a UI humana.** Porque a raiz A cria a expectativa de operabilidade, mas a
maioria dos sites não declara ferramenta nenhuma (zero `/.well-known/mcp.json` válido em 49
domínios medidos). A demanda não some por falta de oferta: ela é atendida por baixo, com agente
dirigindo o navegador sobre a interface feita para gente. O custo disso cai sobre quem publica,
que passa a quebrar integrações de terceiros a cada mudança de layout sem saber que existiam.

**e3.1 — versionar a interface visual.** Porque `e3` transforma o layout em contrato de fato. A
resposta conhecida para contrato implícito que quebra é torná-lo explícito e versionado. *Sinal
fraco*: não encontrei nenhum caso de site anunciando depreciação de layout para agentes.

**e4 — a ferramenta como superfície de ataque (retroação da raiz A).** Porque a raiz A move
capacidade executável para a borda pública, e capacidade executável exposta é, por definição,
superfície de ataque. Os números convergem em torno disso: 43% vulneráveis a injeção de comando,
36,7% a SSRF, ~5,5% com envenenamento de ferramenta, 8,5% usando OAuth. Este é o efeito que
**freia a própria raiz** — e por isso ele tem que estar aqui: roda só com aceleração é propaganda.

**e4.1 — o lado credenciado.** Porque `e4` torna a exposição aberta inaceitável para quem
responde por dinheiro ou por saúde de terceiros, e a saída conhecida é a credencial. O resultado
não é "menos web agêntica": é uma web agêntica com dois regimes.

**e4.1.1 — a fila de capacidade computacional.** Porque `e4.1` cria caminho rápido para quem tem
agente credenciado e caminho lento para os demais, e caminho rápido para poucos é definição de
fila para os outros. No Brasil, onde serviço público digital (gov.br) é a porta de entrada de
benefícios, isso tem endereço. *Confiança baixa*: depende de decisões de política pública que
podem ir para qualquer lado; e o efeito passa perto de virar extrapolação — foi mantido porque o
mecanismo é específico (capacidade de pagar por agente), não genérico (desigualdade digital).

**e5 — a agência perde a peça central.** Porque `e1` divide o produto em duas superfícies e a que
a agência sabe fazer é a que perde centralidade. O que se vende deixa de ser "um site" e passa a
ser "integração entre seu sistema e os agentes que importam". *Quem perde* está nomeado.

**e5.1 — SLA de ferramenta.** Porque `e5` muda o objeto do contrato e contrato de integração é
medido por disponibilidade, latência e taxa de erro — não por entrega de arquivos.

**e6 — o 402 vira rotina.** Porque a raiz B precisa de um mecanismo de cobrança dentro do
protocolo, e o HTTP já tem um. *Sinal forte* (mais de um bilhão de 402/dia na rede Cloudflare em
abril de 2026), mas *prazo 2029* e *confiança media* — este foi o efeito mais rebaixado pela
bateria da §7, e a razão está lá: emitir 402 não é o mesmo que alguém pagar.

**e6.1 — o preço entra no projeto.** Porque `e6` coloca custo marginal onde não havia. Todo
sistema com custo por chamada desenvolve política de custo, e política de custo é seleção. O
agente passa a escolher fonte como um compilador escolhe biblioteca: pelo custo total, não pela
excelência isolada.

**e6.1.1 — credibilidade por preço.** Porque `e6.1` faz o orçamento decidir a leitura, e o que é
barato tende a ser o que ninguém protegeu — que não é, em média, o que tem mais checagem.
*Confiança baixa*, e deliberadamente: é uma inferência sobre correlação preço-qualidade que não
tenho como sustentar em dado hoje.

**e6.2 — citação como unidade de conta.** Porque a mudança de *pay per crawl* para *pay per use*,
feita pela Cloudflare em julho de 2026, desloca o evento cobrável do acesso para a aparição. Uma
métrica nova de cobrança sempre vira métrica de gestão. E a métrica antiga — pageview — não tem
como sobreviver a um leitor que não carrega página.

**e7 — a assinatura é do agente.** Porque `e6` exige que alguém tenha carteira, e o leitor humano
não vai autorizar pagamento a cada requisição. A delegação é a única forma operável. *Sinal
fraco*: o x402 tem 94 mil compradores em 30 dias, o que é irrelevante em escala de web, e metade
das transações é apontada como artificial.

**e7.1 — o atacadista de acesso.** Porque `e6` e `e7` criam um mercado com muitos vendedores
pequenos e poucos compradores grandes, e mercados assim geram agregador. Ceramic.ai e You.com,
anunciados pela Cloudflare em julho de 2026, são exatamente isso em estado inicial.

**e8 — a demanda não aparece (retroação da raiz B).** Porque a raiz B assume comprador, e o
comprador é a parte não demonstrada. A classe de referência é impiedosa: micropagamento web foi
tentado em 1997 (Millicent), 1999 (Beenz, Flooz) e 2013 (Bitcoin em paywalls), e fracassou nas
três. *Sinal forte* porque o dado de *wash trading* já existe; *confiança media* porque agora há
uma diferença real que não havia antes — o comprador é software, e software não tem fricção
psicológica com pagar centavos.

**e8.1 — a web legível encolhe.** Porque `e8` deixa o editor com uma escolha binária quando a
cobrança não funciona: abrir de graça ou fechar. Quem tem o que vender fecha. O que sobra aberto
é, por seleção, o que não tinha valor comercial.

**e9 — o pequeno não consegue nem cobrar nem bloquear.** Porque a raiz B só é operável com
infraestrutura de borda e poder de negociação, e os dois são escassos e correlacionados com
tamanho. O número brasileiro dá a direção: um em quatro portais da Ajor perdeu mais de 20% de
audiência em 2025, e nenhum dos 21 domínios brasileiros que medi declara política de uso.

**e9.1 — a borda como política editorial.** Porque `e9` transfere a decisão para quem opera o
ponto de aplicação, e quem define o default define o comportamento da maioria, que não configura
nada. *Sinal forte* e *confiança alta*: a decisão de 15/09/2026 da Cloudflare — bloquear Agent e
Training por default em páginas com anúncio — é uma decisão editorial de alcance planetário
tomada por uma empresa de infraestrutura, e está publicada.

**e9.1.1 — o olhar da concorrência.** Porque `e9.1` concentra poder de gatekeeping fora do
contrato entre editor e leitor, e é essa a definição regulatória de guardião de acesso. Nomeio
CADE e Comissão Europeia sob o DMA para não cair no efeito genérico "reguladores criam categoria
nova". *Confiança baixa*: não há caso aberto que eu tenha encontrado.

**e10 — o anúncio migra para a resposta.** Porque a raiz B destrói o inventário da página e o
dinheiro publicitário não desaparece: ele se move para onde está a atenção. Em maio de 2026,
segundo a Similarweb, ~26% das respostas do ChatGPT já continham anúncio. *Sinal forte*,
*confiança alta*.

**e10.1 — o slot de citação como inventário.** Porque `e10` precisa de uma unidade vendável, e a
única unidade visível na resposta é a menção com atribuição.

**e10.1.1 — o texto muda de forma.** Porque `e10.1` premia o trecho que é fácil de extrair e
atribuir. O mecanismo é o mesmo que o *featured snippet* produziu entre 2016 e 2020 — com um
agravante: o destinatário agora não clica, então não há como o autor recuperar contexto depois.

**e11 — uma URL, vários conteúdos.** Porque a raiz C torna o propósito declarado uma dimensão da
requisição, e servidor que conhece o propósito responde conforme ele. Isso já existe em
embrião: o `Content-Signal` distingue `search`, `ai-input` e `ai-train`; o vocabulário AIPREF
distingue `train-ai` e `search`.

**e11.1 — a citação perde o referente.** Porque `e11` quebra a identidade entre URL e conteúdo, e
a citação acadêmica e jornalística depende dessa identidade para ser verificável. É um efeito com
endereço na universidade: quem orienta TCC passa a ter de exigir captura, não link.

**e11.1.1 — preservação como privilégio.** Porque `e11.1` torna a captura a única prova, e capturar
em escala é o ofício dos arquivos — que, se forem tratados como agentes, passam a depender de
credencial. *Prazo 2032*: fora da janela deste mapa, e declarado como tal na §5.4.

**e11.2 — paridade auditável.** Porque `e11` cria a possibilidade de divergência deliberada, e
divergência deliberada entre o que vê a pessoa e o que vê a máquina é a definição de cloaking.
Onde há definição, aparece auditoria.

**e12 — o robots.txt vira prova.** Porque a raiz C transforma um arquivo de convenção em
declaração explícita de licença e de propósito — a RSL literalmente aponta para um XML com
termos contratuais. Declaração explícita e datada é material probatório.

**e12.1 — reputação de crawler como ativo.** Porque `e12` exige verificar cumprimento, e a
Cloudflare já anunciou que reporta conformidade e que bots verificados podem perder o selo. Onde
há medição publicada, há reputação; onde há reputação, há ativo.

**e12.1.1 — bloqueio em massa por reputação.** Porque `e12.1` torna a reputação legível por
máquina e o bloqueio é a ação mais barata disponível a quem publica.

**e13 — o conflito com a busca (retroação da raiz C).** Porque a raiz C empurra para servir
conteúdo diferente por propósito, e a busca — que ainda é a origem do tráfego que resta — pune
exatamente isso. O editor fica preso entre a receita que tem e a que talvez venha. É um freio
real, com dono: quem freia é o buscador, e o incentivo dele está descrito em §4.3.

**e14 — de sessão para tarefa.** Porque a raiz C e a raiz A juntas fazem o valor se realizar fora
da página. Métrica que não mede mais nada é abandonada.

**e14.1 — decisão sobre dados cegos.** Porque `e14` desloca o consumo para fora do que a
analítica instrumenta: agente em extensão manda o mesmo user-agent e o mesmo IP residencial de
uma pessoa, conforme o comparativo do searchviu. *Sinal forte* e *confiança alta* — é o efeito
mais verificável de toda a raiz C, e já está em curso.

**e14.1.1 — auditoria de exposição.** Porque `e14.1` cria assimetria entre quem compra mídia e
quem a vende, e o mercado publicitário resolve assimetria com auditoria de terceiro — foi assim
com circulação impressa (IVC) e com audiência de TV.

**e15 — o jornalismo local perde a base.** Porque a raiz C, somada ao comportamento já
consolidado de busca sem clique, corta a rota entre o conteúdo e a receita. Números: −33% de
busca orgânica global entre nov/2024 e nov/2025 em 2.500+ sites; 8% de cliques quando há resumo
de IA; um em quatro portais da Ajor com queda superior a 20%.

**e15.1 — o Brasil sem contrapartida.** Porque `e15` acontece igual em todo lugar, mas o
mecanismo de compensação é local — e aqui ele está parado: PL 2338/2023 na Câmara desde março de
2025, comissão especial sem reunião desde novembro de 2025, votação condicionada ao pós-eleição.

**e15.1.1 — publicar primeiro onde paga.** Porque `e15.1` deixa a receita do site próprio menor
que a receita de presença em plataforma que paga, e a ordem de publicação segue a receita.

**e16 — o ranking de operabilidade.** Porque a raiz D precisa de um critério de ordenação para
máquinas, e o critério disponível é a presença de artefatos legíveis. O Not Human Search já
existe; o que não existe é consumidor de peso.

**e16.1 — conformidade sem efeito.** Porque `e16` cria um checklist e checklist é vendável. O
dado que sustenta: 36.120 `llms.txt` publicados e 97% deles sem uma única requisição. *Sinal
forte* e *confiança alta* — é o efeito mais bem documentado da raiz D, e o mais desconfortável:
mostra que a adoção pode crescer sem que o mecanismo funcione.

**e16.1.1 — auditoria não validável.** Porque `e16.1` estabelece um mercado cujo resultado
ninguém consegue medir, já que o consumidor do sinal (o agente) é fechado. Mercado sem
verificação converge para relato.

**e16.2 — o Lighthouse como vetor.** Porque `e16` sozinho não move ninguém, e ferramenta de
auditoria embutida no navegador move: a auditoria `webmcp-form-coverage` existe desde maio de
2026 e hoje sai como "Not Applicable". Quando virar aviso, entra na rotina do front-end sem
passar por decisão de produto. É o mesmo caminho que levou HTTPS e Core Web Vitals à adoção
universal — o default do intermediário, não o mérito do padrão.

**e17 — competir por ferramenta, não por site.** Porque a raiz D faz o agente escolher
capacidade. *Sinal fraco* e *confiança baixa*: nenhum agente de massa consome ferramenta
declarada pela página hoje.

**e17.1 — marca como item de catálogo.** Porque `e17` retira a marca do momento da escolha: quem
escolhe é o agente, e ele lê schema.

**e17.1.1 — patrocínio de ferramenta.** Porque `e17.1` cria uma posição default valiosa e
posição default sempre foi vendida. *Prazo 2032*, fora da janela do mapa, declarado na §5.4.

**e18 — poluição do registro (retroação da raiz D).** Porque a raiz D depende de um índice
aberto e índice aberto é atacável: ~5,5% de 1.899 servidores com envenenamento de ferramenta
medido em estudo acadêmico. Este é o freio da raiz D.

**e18.1 — o catálogo curado.** Porque `e18` torna a curadoria obrigatória e curadoria exige dono.

**e18.1.1 — a economia de loja de aplicativos.** Porque `e18.1` cria as três condições da loja:
porta única, decisão de entrada e custo de permanência. A analogia não é retórica: é o mesmo
mecanismo de 2008, aplicado a um objeto novo.

**e19 — a documentação como canal de aquisição.** Porque a raiz D premia quem já publica em
formato de máquina, e quem publica é a empresa de infraestrutura. Minha medição 2 é o artefato:
as quatro empresas com `llms.txt` em documentação vendem para desenvolvedores. *Confiança alta*,
porque o efeito já se realizou.

**e19.1 — documentação como produto.** Porque `e19` transforma um custo em canal, e canal com
demanda mensurável acaba precificado.

**e20 — o custo do lixo (STEEP ecológico).** Porque a raiz B expõe o desperdício: mais da metade
do tráfego de crawlers considerados legítimos é refetch de páginas que não mudaram, segundo
dados da Cloudflare relatados pela ppc.land. Onde há custo medido e cobrável, há negociação.

**e20.1 — delta para agentes.** Porque `e20` cria demanda por não reenviar o que não mudou, que é
o problema que o `If-Modified-Since` resolveu em 1996 para documentos e ninguém ainda resolveu
para ferramentas e corpora.

### 5.2 As classes de referência usadas para os prazos

A skill proíbe prazo sem classe de referência. As que usei, e o que cada uma implica:

| Classe | O que aconteceu | Implicação aplicada |
|---|---|---|
| **robots.txt (1994)** | padrão declarativo, voluntário, sem execução; até hoje só 37% dos 10 mil maiores domínios têm um, segundo a Cloudflare | padrão declarativo **não** satura: adotei prazos longos e confiança baixa para tudo que depende de adesão voluntária (`e11.2`, `e12`) |
| **Do Not Track (2009-2019)** | preferência declarada sem obrigatoriedade; morreu | classe de referência direta de `Content-Signal` e AIPREF: sem execução, a declaração não produz efeito — sustenta `e13` e o rebaixamento de `e12` |
| **RSS (1999-2013)** | padrão de máquina adotado em massa por editores e abandonado quando o consumidor principal saiu | sustenta `e16.1`: publicar não é ser lido; e é o cenário indesejável do `llms.txt` |
| **AMP (2015-2021)** | padrão imposto por plataforma com benefício de ranking, adotado rápido e abandonado quando o benefício sumiu | sustenta `e16.2` e o wildcard 4: adoção por intermediário é rápida **e** reversível |
| **HTTPS/Let's Encrypt (2016-2018)** | adoção majoritária em ~2 anos depois que o navegador passou a marcar "não seguro" | sustenta `e16.2`: quando o intermediário força, 2 a 3 anos bastam — é a referência dos prazos 2028-2029 |
| **Schema.org (2011)** | ~10 anos para adoção ampla, puxada por benefício visível (rich snippet) | sustenta os prazos 2029-2030 de tudo que depende de o editor ver retorno (`e6.2`, `e19.1`) |
| **Micropagamento web (1997, 1999, 2013)** | Millicent, Beenz/Flooz, paywalls em Bitcoin: três fracassos | é por causa dela que `e6` foi de 2027 para 2029 e de confiança alta para media (§7.3) |
| **Loja de aplicativos (2008-2011)** | 2 a 3 anos da abertura à consolidação da curadoria e da taxa | sustenta `e18.1` em 2029 |
| **Banner de cookie / GDPR (2018)** | regulação produziu adoção quase universal em ~1 ano | é a referência dos efeitos que dependem de regra, não de mercado (`e15.1`) — e a razão de eles serem os mais rápidos **se** a regra sair |

### 5.3 Convergências, ciclos e contradições

**Convergência 1 — a unidade de visibilidade deixa de ser a página.** `e10.1` (o slot de citação
vira inventário publicitário, vindo da raiz B) e `e16` (o ranking de operabilidade, vindo da raiz
D) chegam ao mesmo lugar por caminhos independentes: o que passa a ser disputado não é a posição
na lista nem a página, é a **menção dentro de uma resposta**. Duas raízes distintas convergindo
num mesmo efeito é o achado mais forte deste mapa, e é o que deve organizar a aula: a pergunta
"o que substitui o SEO?" tem duas respostas que não se anulam — uma comercial (comprar a citação)
e uma técnica (ser executável).

**Convergência 2 — a app-storização.** `e4.1` (publicação só atrás de credencial, raiz A) e
`e18.1` (catálogo curado, raiz D) produzem a mesma arquitetura final: uma porta única, com dono,
onde se pede permissão para existir. Vindo da segurança e vindo da poluição de índice, chega-se
à loja de aplicativos.

**Convergência 3 — um intermediário privado vira regulador de facto.** `e9.1` (o default de borda
é a regra, raiz B) e `e12.1` (reputação de crawler medida e publicada, raiz C) concentram no
mesmo ator — hoje, na prática, a Cloudflare — a definição do que é aceitável na web. Uma empresa
que vende proteção passa a definir o que precisa de proteção.

**Ciclo de reforço negativo.** `e16.1` enfraquece a própria raiz D: se o principal sinal do
ranking (`llms.txt`) é publicado por conformidade e não lido por ninguém, o índice mede ruído.
Um índice que mede ruído não é adotado por consumidor sério, o que reduz o incentivo de publicar
com qualidade, o que aumenta o ruído. A raiz D pode morrer do próprio sucesso aparente.

**Ciclo de reforço positivo.** `e9.1` → `e8.1` → `e9`: quanto mais a borda bloqueia por default,
mais o pequeno depende da borda para ter qualquer política; quanto mais depende, mais o default
da borda vira a regra. Concentração alimentando concentração.

**Contradição 1, não resolvida.** `e6` (o acesso vira pago e rotineiro) e `e8` (a demanda por
micropagamento não aparece) não podem estar os dois certos na mesma escala. Mantenho os dois,
como a skill manda. **O que decide entre eles:** se um fabricante de agente de massa passar a
pagar por acesso *por default*, e não por acordo bilateral. Enquanto o pagamento for contrato
entre empresas grandes, `e8` ganha e a web se fecha em vez de se precificar.

**Contradição 2, não resolvida.** `e11` (servir conteúdo diferente por propósito) e `e13` (isso é
cloaking e pune). **O que decide entre eles:** se o buscador dominante aceitar formalmente a
distinção entre usos — o que vai contra o interesse dele, já que é crawler multiuso. A
declaração da Cloudflare de que bloquear Training bloqueia junto Googlebot é o sintoma dessa
contradição em estado bruto.

### 5.4 Efeitos que passam do horizonte

Dois efeitos de terceira ordem têm prazo **além de 2031** e ficam, portanto, fora da janela deste
mapa. Ambos são declarados aqui, como a skill exige:

- **`e11.1.1` (2032)** — arquivos e bibliotecas precisando de credencial de agente para preservar.
  Depende de a segmentação por propósito estar consolidada, o que `e11` só coloca em 2029.
- **`e17.1.1` (2032)** — patrocínio de ferramenta como formato publicitário. Depende de `e17.1`
  (2031), que por sua vez depende de um agente de massa consumir ferramentas declaradas — o que
  hoje não acontece.

Nenhum efeito de 1ª ou 2ª ordem ultrapassa 2031.

### 5.5 Cobertura — STEEP e quem perde

| Eixo | Efeitos | Observação |
|---|---|---|
| **Social** | `e4.1.1`, `e11.1`, `e14`, `e15.1.1` | acesso desigual ao caminho rápido; perda do referente compartilhado |
| **Tecnológico** | `e1`, `e2`, `e3`, `e16.2`, `e20.1` | a maior parte do mapa — é o eixo natural do tema e o risco de viés declarado em §7.6 |
| **Econômico** | `e6`, `e7`, `e9`, `e10`, `e15`, `e19` | o eixo com mais efeitos de sinal forte |
| **Ecológico** | `e20`, `e20.1` | eixo **quase vazio**, e registro isso em vez de forçar: o único vetor que achei com dado é o desperdício de reingestão. Não encontrei fonte aberta que ligasse tráfego agêntico a consumo energético com número confiável |
| **Político** | `e9.1.1`, `e12`, `e15.1` | depende quase inteiramente de decisões que estão paradas (PL 2338) ou inexistentes (caso de concorrência) |

**Quem perde, nomeado:** o pequeno editor sem borda (`e9`); o jornalismo local (`e15`); as
agências de site institucional (`e5`); quem não tem agente credenciado diante do serviço público
(`e4.1.1`); quem cita e arquiva — universidade, biblioteca, jornalismo de verificação (`e11.1`);
a marca que investiu em identidade visual e a vê reduzida a um cartão (`e1.2.1`); e o editor
brasileiro, que recebe a bifurcação sem a regra de remuneração (`e15.1`).

**Quem ganha:** a infraestrutura de borda (`e9.1`); o fabricante de agente que cura catálogo
(`e18.1`); as empresas de infraestrutura para desenvolvedores, que já tinham documentação e
ganham distribuição de graça (`e19`); e o atacadista de acesso (`e7.1`).

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

Seguindo Hiltunen: coisa que quase não aparece hoje, mas que mudaria o mapa se crescesse. Para
cada um, **onde foi visto**, **o que mudaria** e **o sinal observável** que indicaria crescimento.

**SF1 — O `llms.txt` mora em `docs.*`, não na home.**
*Onde foi visto:* medição própria de 10/09/2026 (§3.5): 6 dos 49 domínios testados têm `llms.txt`
na raiz, e todos os quatro sites de documentação técnica que testei têm — `docs.anthropic.com`
(67.859 bytes), `docs.stripe.com` (90.555), `docs.github.com` (28.674),
`developers.cloudflare.com` (15.906). O `ai.google.dev` devolve 404.
*O que mudaria:* se isso é o que é, a "internet agêntica" de 2026 não é um fenômeno de mídia — é
uma ferramenta de trabalho de quem programa, e o mapa inteiro está antecipando em cinco anos uma
travessia que pode não acontecer.
*Sinal observável:* aparição de `llms.txt` em veículo de notícia de grande porte ou em site
transacional de consumo (varejo, banco, companhia aérea) fora do subdomínio de documentação. Hoje
o único caso não-técnico que encontrei em 49 domínios é `americanas.com.br`.

**SF2 — A auditoria `webmcp-form-coverage` no Lighthouse.**
*Onde foi visto:* relatado pela Spronta em julho de 2026; existe desde maio de 2026 e aparece
como "Not Applicable" na maioria dos sites.
*O que mudaria:* quando essa auditoria virar aviso, milhares de times de front-end passam a
implementar prontidão agêntica por rotina de esteira, sem que ninguém tome uma decisão de
produto. Seria a adoção do WebMCP sem que exista demanda por WebMCP. É `e16.2`.
*Sinal observável:* mudança do status da auditoria de "Not Applicable" para aviso ou falha numa
versão estável do Chrome.

**SF3 — O pagamento por aparição, e não por acesso.**
*Onde foi visto:* anúncio da Cloudflare de 01/07/2026, com Ceramic.ai (pagamento por consulta) e
You.com (compra pontual de conteúdo premium).
*O que mudaria:* se o evento cobrável for a aparição na resposta e não o acesso, o editor deixa
de ter interesse em bloquear e passa a ter interesse em ser lido — o que inverte o vetor inteiro
da raiz B e desativa `e8.1`. É a diferença entre uma web fechada e uma web com royalties.
*Sinal observável:* primeiro relatório público de um editor informando receita de pagamento por
aparição maior que a receita publicitária da mesma matéria.

**SF4 — A instabilidade da especificação como termômetro de irrelevância.**
*Onde foi visto:* a migração de `navigator.modelContext` para `document.modelContext` em
21/07/2026, com depreciação no Chrome 150 enquanto o *origin trial* ainda entrega a forma antiga.
*O que mudaria:* uma especificação só se dá ao luxo de mudar o ponto de acesso quando ninguém
depende dela. Se a instabilidade continuar em 2027, `e17` e toda a cadeia da raiz D atrasam.
*Sinal observável:* segunda mudança incompatível na API antes do fim do *origin trial* (Chrome
156), ou extensão do *origin trial* sem anúncio de envio definitivo.

**SF5 — A distância entre expectativa declarada e prática.**
*Onde foi visto:* Reuters Institute, 2026: 75% dos 280 executivos de 51 países esperam impacto
"grande" ou "muito grande" de ferramentas agênticas — e a mesma pesquisa mostra as prioridades de
investimento indo para YouTube (+74) e TikTok (+56).
*O que mudaria:* expectativa alta com investimento baixo é a assinatura de uma bolha de discurso.
Se a distância persistir, os efeitos que dependem de o editor *agir* (`e6.2`, `e11.2`, `e19.1`)
atrasam todos.
*Sinal observável:* a edição 2027 da mesma pesquisa mostrando "distribuição via agentes" entre as
três primeiras prioridades de investimento, e não só de preocupação.

**SF6 — O 402 emitido em massa sem contrapartida.**
*Onde foi visto:* mais de um bilhão de 402 por dia na rede Cloudflare em abril de 2026, segundo a
ppc.land; e, na outra ponta, US$ 28 mil de volume diário no x402 com metade das transações
apontada como artificial.
*O que mudaria:* um bilhão de pedidos de pagamento por dia, com volume real ínfimo do outro lado,
não é um mercado — é uma porta fechada com placa de preço. Se essa razão não mudar, `e6` vira
`e8.1`: o 402 é a nova forma de dizer não.
*Sinal observável:* volume pago em resposta a 402 divulgado por qualquer das partes; ou a
Cloudflare relatando taxa de conversão de 402 em pagamento.

**SF7 — Zero descoberta padronizada.**
*Onde foi visto:* medição própria — nenhum dos 49 domínios tem `/.well-known/mcp.json` com JSON
válido (e a primeira versão da minha medição disse 6, erro descrito em §8).
*O que mudaria:* hoje a descoberta de ferramentas depende de registro central (o MCP Registry) ou
de catálogo de fabricante. Um mecanismo de descoberta no próprio domínio tiraria o intermediário
do caminho e desativaria `e18.1` — a app-storização depende de a descoberta ser centralizada.
*Sinal observável:* um `.well-known` de MCP entrando em rascunho de IETF ou em documentação
oficial de fabricante de navegador.

### 6.2 Wildcards

Seguindo Petersen: baixa probabilidade, alto impacto, **plausibilidade interna com mecanismo
escrito**. Sem mecanismo não é wildcard, é enredo.

**W1 — Um grande portal bloqueia todos os agentes e a audiência não nota.**
*Mecanismo:* o portal ativa bloqueio total de crawler de IA e de agente. Os assistentes
substituem a fonte silenciosamente — não avisam o usuário de que uma fonte ficou de fora, porque
a resposta continua saindo. A audiência humana, que chega por rede social, aplicativo e
navegação direta, não muda. O portal publica que bloqueou e não teve perda mensurável.
*Por que é improvável:* exige que a fatia de tráfego agêntico do portal seja realmente
descartável, e as medições de tráfego automatizado (entre 35% e 57% conforme a fonte) sugerem o
contrário — mas nenhuma delas separa tráfego agêntico com valor comercial de tráfego agêntico
sem valor nenhum.
*O que faria com o mapa:* destruiria a raiz B. Se bloquear não dói, ninguém precisa cobrar — e
`e6`, `e7`, `e7.1`, `e10.1` e `e19` perdem a base. A web não se precifica: ela simplesmente se
fecha, de graça.
*Sinal precoce:* qualquer editor de porte publicando dado de audiência antes e depois de um
bloqueio total. Hoje ninguém publica isso, o que já é informação.

**W2 — Um único trilho captura o 402 e ler passa a ter cotação.**
*Mecanismo:* um consórcio consolida um meio de pagamento para a requisição, e o preço de ler
passa a ser denominado num ativo com câmbio. O custo de acessar uma fonte brasileira por um
agente estrangeiro passa a variar com a taxa de conversão, e não com o valor do conteúdo.
*Por que é improvável:* meios de pagamento raramente convergem para um só, e reguladores
financeiros de vários países teriam de aceitar ao mesmo tempo.
*O que faria com o mapa:* introduziria uma variável macroeconômica onde hoje há só decisão
editorial. `e6.1` (escolha de fonte por preço) viraria dependente de câmbio — com efeito direto
sobre conteúdo de países de moeda fraca, que ficariam artificialmente baratos de ler.
*Sinal precoce:* preço de acesso cotado em unidade que não seja a moeda local do editor.

**W3 — O Brasil aprova o PL 2338 com o capítulo de direito autoral intacto e vira ilha.**
*Mecanismo:* a Câmara aprova a remuneração obrigatória; os fabricantes de agente, em vez de
pagar, param de ingerir conteúdo `.br`, como já fizeram em outros países diante de leis de
compensação. Conteúdo brasileiro some das respostas.
*Por que é improvável:* o projeto está parado desde março de 2025, a comissão especial não se
reúne desde novembro de 2025 e há pressão declarada das empresas de tecnologia para retirar
justamente esse capítulo.
*O que faria com o mapa:* transformaria `e15.1` no seu oposto — o Brasil deixaria de ser o caso
de "bifurcação sem contrapartida" e passaria a ser o caso de "contrapartida sem acesso". Para
quem projeta aqui, a consequência prática é que o site brasileiro precisaria ser projetado para
não depender de agente nenhum.
*Sinal precoce:* apresentação do parecer do relator com o capítulo de direito autoral preservado.

**W4 — O WebMCP é abandonado como o AMP foi.**
*Mecanismo:* o *origin trial* termina no Chrome 156 sem envio definitivo; o Gemini no Chrome não
consome as ferramentas declaradas; os pilotos anunciados não saem do papel; a API é removida. O
trabalho de front-end feito nos pilotos vira dívida.
*Por que é improvável — mas não muito:* é o desfecho normal de padrão empurrado por plataforma
sem demanda demonstrada, e o AMP é a classe de referência exata. A improbabilidade vem só do
fato de Google e Microsoft estarem juntas na especificação.
*O que faria com o mapa:* remove `e17`, `e17.1`, `e17.1.1` e `e16.2` e rebaixa `e3` — a
automação sobre a interface humana deixaria de ser plano B e viraria o único plano.
*Sinal precoce:* extensão do *origin trial* sem data de envio, ou o anúncio do Gemini no Chrome
sem menção a ferramentas de página.

**W5 — Um incidente de cadeia de suprimento em servidores MCP produz certificação obrigatória.**
*Mecanismo:* um servidor MCP popular é atualizado com descrição envenenada e exfiltra credencial
de milhares de organizações ao mesmo tempo — o vetor já está medido (~5,5% com envenenamento de
ferramenta; 53% usando chave estática). O incidente é grande o bastante para virar caso público,
e a resposta é certificação obrigatória de servidor, com custo e auditoria.
*Por que é improvável:* exige coincidência de escala e de visibilidade; incidentes assim
costumam ficar contidos.
*O que faria com o mapa:* aceleraria violentamente `e18.1` e `e4.1` — a app-storização em dois
anos em vez de cinco — e mataria a descoberta aberta. A web agêntica nasceria já fechada.
*Sinal precoce:* primeiro CVE de servidor MCP com mais de um milhão de instalações afetadas, ou
exigência de assinatura obrigatória de servidor por um cliente de massa.

## 7. Contra o próprio mapa

Esta seção é o passo §6 da skill aplicado ao mapa já pronto. Ela **alterou** o mapa: o bloco YAML
da §5 é a versão pós-bateria, e o registro de alterações está em §7.7, com valor antes e depois.

### 7.1 Pré-mortem — é 2031 e este mapa se mostrou errado. Por quê?

**Razão 1, a mais provável: a travessia não aconteceu.** A internet agêntica ficou onde estava em
2026 — no ferramental de desenvolvimento. Os `llms.txt` continuaram em `docs.*`, o MCP continuou
sendo coisa de IDE e de automação corporativa, e a web de consumo seguiu sendo consumida por
pessoas com um assistente ao lado, não por agentes no lugar delas. Este mapa terá confundido
*a web que os programadores construíram para si* com *a web*. É a razão apontada pelo meu próprio
sinal fraco SF1, e é a mais incômoda porque a evidência dela está dentro do documento.
→ *Consequência aplicada:* rebaixei `e17` e toda a cadeia da raiz D, e rebaixei `e2` de sinal
forte para médio.

**Razão 2: o pagamento nunca destravou e a web só se fechou.** O 402 continuou sendo emitido aos
bilhões e ninguém pagou. Os grandes fizeram acordos bilaterais — como sempre fizeram — e o
pequeno ficou de fora dos dois lados: não recebe e não é lido. O mapa terá tratado como "mercado
emergente" o que era apenas uma porta fechada com placa de preço.
→ *Consequência aplicada:* `e6` foi de 2027 para 2029 e de confiança alta para media; `e7` foi
rebaixado para sinal fraco e confiança baixa.

**Razão 3: um intermediário decidiu tudo antes de o mercado se formar.** Nada do que este mapa
descreve como disputa foi disputado: a Cloudflare, o Chrome e dois ou três clientes de chat
definiram defaults, e o resto do ecossistema se adaptou. O mapa terá dedicado dez efeitos a uma
negociação que nunca houve.
→ *Consequência aplicada:* `e9.1` foi promovido a sinal forte e confiança alta — é hoje o efeito
mais bem sustentado do documento — e `e16.2` (adoção por auditoria de navegador) foi acrescentado
depois da bateria, porque a bateria mostrou que eu estava subestimando o vetor "default de
intermediário".

### 7.2 Extrapolação linear — o que é só mais do mesmo, maior

Três efeitos eram, na primeira versão, extrapolação sem mecanismo de não-linearidade:

- **`e15` (jornalismo local perde a base)** era "a queda de tráfego continua". Isso é linha reta.
  O que o torna não-linear e o mantém no mapa é o mecanismo de limiar: abaixo de certo volume, o
  anúncio programático deixa de ser vendável de todo, e a receita não cai — ela zera. Reescrevi o
  efeito para falar de base econômica, não de tráfego.
- **`e10` (o anúncio migra)** era "publicidade acompanha a atenção", que serve para qualquer
  tema. O que o especifica é a mudança de unidade: de impressão de página para citação em
  resposta — que é uma unidade sem inventário fixo e sem contagem auditável. Mantido, com a
  especificidade escrita.
- **`e20` (custo de reingestão)** era descrição de desperdício, não efeito. Ganhou o mecanismo de
  virar item negociado quando o acesso passa a ser cobrado — sem a raiz B, ele não existe.

Um quarto candidato **não** sobreviveu: "a experiência do usuário melhora porque o agente faz o
trabalho chato" foi removido antes de entrar na roda. É extrapolação linear pura, não tem ator
específico e serve para qualquer tema de automação. Está registrado em §12.7.

### 7.3 Velocidade de adoção — prazos confrontados com a classe de referência

| Efeito | Prazo original | Referência aplicada | Prazo final |
|---|---|---|---|
| `e6` — 402 rotineiro | 2027 | micropagamento web: três fracassos (1997, 1999, 2013); e nenhum deles tinha comprador-software, o que atenua mas não anula | **2029** |
| `e7` — assinatura do agente | 2028 | mesma classe; além disso, o x402 tem 94 mil compradores em 30 dias, irrelevante em escala de web | **2030** |
| `e11` — URL com várias respostas | 2027 | robots.txt: padrão declarativo levou 30 anos e ainda está em 37% dos 10 mil maiores domínios | **2029** |
| `e16` — ranking de operabilidade | 2028 | Schema.org: ~10 anos para adoção ampla mesmo com benefício visível | **2029** |
| `e17` — competir por ferramenta | 2029 | AMP e WebMCP: padrão sem consumidor não vira eixo de competição | **2030**, com confiança baixa |
| `e16.2` — Lighthouse como vetor | — | HTTPS/Let's Encrypt: 2 anos depois de o navegador forçar | **2029** (efeito acrescentado pela bateria) |

### 7.4 A raiz que não acontece

**Se a raiz A não acontecer** (o site nunca publica ferramentas, o WebMCP morre como o AMP):
sobra bastante. As raízes B, C e D não dependem de o site cooperar — dependem de o agente ler.
`e3` (automação sobre a interface humana) fica mais forte, não mais fraco. Perde-se toda a cadeia
de `e1.2` e `e17`. **O mapa sobrevive.**

**Se a raiz B não acontecer** (ninguém paga, mas também ninguém bloqueia): perde-se `e6`, `e7`,
`e7.1`, `e9` e `e10.1`. Sobram A, C e D — mas C fica sem o motivo econômico que a sustenta, já
que a razão de declarar propósito é cobrar diferente por usos diferentes. **Este é o cenário que
mais dano causa ao mapa.**

**Se a raiz C não acontecer** (a URL continua devolvendo a mesma coisa para todo mundo): perde-se
`e11`, `e12`, `e13`, `e14` e a cadeia brasileira `e15.1`. A e B sobrevivem inteiras. **O mapa
sobrevive.**

**Se a raiz D não acontecer** (a descoberta continua sendo busca): perde-se `e16`, `e17`, `e18`,
`e19`. As outras três seguem. **O mapa sobrevive, e é o cenário mais provável dos quatro** —
ver a Razão 1 do pré-mortem.

**Conclusão do teste:** as quatro raízes não são uma só disfarçada. Mas **B é a raiz carregadora**:
é dela que os outros ramos tiram o motivo econômico. Se eu tivesse que apostar em um único
mecanismo para observar, seria a conversão de 402 em pagamento efetivo.

### 7.5 Suposições escondidas

Premissas que o mapa assume sem ter dito. Cada uma é um wildcard em potencial:

1. **O agente continua acessando a web pública.** Se os fabricantes fecharem acordo de dados com
   um punhado de fontes e pararem de rastrear o resto, a web deixa de ser a superfície em
   disputa e o mapa perde objeto. É premissa forte, e é frágil.
2. **O custo de inferência continua caindo.** Vários efeitos supõem que vale a pena gastar
   computação lendo muitas fontes. Se o custo subir, o agente lê menos fontes e mais caras, e
   `e6.1` inverte de sinal: o barato não vence, o já-pago vence.
3. **A regulação continua parada.** O mapa trata o PL 2338 como parado porque está parado hoje.
   Uma aprovação muda `e15.1`, `e12` e `e9.1.1` de uma vez.
4. **A Cloudflare continua sendo o ponto de aplicação.** Três efeitos dependem de um ator
   específico manter posição de mercado. Não é uma constante da natureza.
5. **O MCP continua sendo o protocolo único.** O mapa assume que a fragmentação acabou. Um
   concorrente de peso reabriria a questão e atrasaria tudo em dois ou três anos.
6. **Existe demanda de usuário por delegação.** Todo o mapa pressupõe que pessoas querem que um
   programa navegue por elas. A evidência disso é comercial e de fabricante, não independente.

### 7.6 Viés do autor

**Viés 1 — o viés do ofício.** Eu sou um agente escrevendo sobre a web para agentes. A parte deste
mapa que descreve a web se abrindo para máquinas é escrita por quem se beneficia dela: o
`llms.txt` de `docs.stripe.com` foi feito para mim. Dois efeitos estão aqui com mais destaque do
que a evidência autoriza por causa disso: `e19` (documentação como canal) e `e1.1` (documentação
como formato de máquina). Os dois são reais e medidos — mas são reais *no meu ambiente*, que é o
menos representativo possível da web.

**Viés 2 — o viés do eixo tecnológico.** A cobertura STEEP (§5.5) mostra 5 efeitos no eixo
tecnológico e 2 no ecológico. Isso reflete o que eu sei procurar, não o que existe.

**Viés 3 — a fonte interessada tratada como neutra.** Sete afirmações deste mapa vêm de dados da
Cloudflare — uma empresa que vende exatamente a solução para o problema que mede. Não tenho fonte
independente para a razão crawl-para-referência de 38.000:1 nem para o bilhão de 402 por dia.
Mantive os números com o crédito explícito em todas as aparições; não os tratei como fato neutro.

**Viés 4 — o viés do tema escolhido.** O enunciado da disciplina já sugere a conclusão ("a web
está sendo reorganizada para agentes"). Escrevi um mapa que, no geral, confirma o enunciado. O
contrapeso que introduzi de propósito foi o SF1 e a Razão 1 do pré-mortem, que é o argumento
mais forte *contra* o enunciado — e ele veio de uma medição minha, não das fontes.

### 7.7 Registro de alterações

Cada linha traz o `id`, o valor **antes** e o valor **depois**. A cota mínima da skill é pelo
menos um efeito rebaixado ou removido **por raiz**; aqui houve rebaixamento ou remoção nas
quatro.

**Raiz A**
- `e2`: sinal **forte → medio**, porque o artefato que eu tinha em mente (descrição de ferramenta
  sendo tratada como código) existe em times de IA, não em times de produto web; não achei caso
  público fora de ferramentaria de desenvolvimento.
- `e1.2`: confianca **alta → media**, porque a extensão MCP Apps estar integrada não diz nada
  sobre que fatia da interação passa por cliente de chat — e essa fatia é pequena.
- **removido:** "a experiência do usuário melhora porque o agente faz o trabalho chato" — efeito
  genérico, sem ator, serve para qualquer tema (vai para §12.7).
- **removido:** "surge a profissão de engenheiro de prontidão agêntica" — é exatamente o efeito
  proibido pela skill ("surge uma nova profissão") sem nome, sem mecanismo e sem ator (§12.7).

**Raiz B**
- `e6`: prazo **2027 → 2029** e confianca **alta → media**, porque a classe de referência dos
  micropagamentos web (1997, 1999, 2013) contradiz o prazo, e porque emitir 402 não é receber.
- `e7`: sinal **medio → fraco**, prazo **2028 → 2030**, confianca **media → baixa**, pelo mesmo
  motivo, agravado por metade das transações x402 ser apontada como artificial.
- `e9.1`: sinal **medio → forte** e confianca **media → alta** — única promoção do documento,
  porque a decisão de 15/09/2026 da Cloudflare é artefato público e datado.
- **removido:** "assinaturas de notícia crescem porque o leitor quer fonte confiável" — não
  deriva desta raiz; passa no teste da causa solta (§7.8) e sai (vai para §12.7).

**Raiz C**
- `e11`: prazo **2027 → 2029**, pela classe de referência do `robots.txt`.
- `e12`: confianca **alta → media**, porque o precedente do Do Not Track mostra que declaração sem
  execução não produz efeito jurídico automático.
- `e11.2`: rebaixado de efeito de 1ª ordem para 2ª ordem, porque ele não decorre da raiz
  diretamente: é resposta a `e11`.
- **removido:** "governos criam uma agência de regulação da web agêntica" — efeito proibido
  ("reguladores criam categoria nova") sem nome de regulador nem mecanismo (§12.7).

**Raiz D**
- `e16`: prazo **2028 → 2029**, pela classe de referência do Schema.org.
- `e17`: prazo **2029 → 2030**, sinal **medio → fraco**, confianca **media → baixa**, porque
  nenhum agente de massa consome ferramenta declarada pela página hoje.
- `e19.1`: confianca **alta → media**, porque documentação virar produto pago contraria o
  incentivo de adoção de quem vende infraestrutura.
- **acrescentado:** `e16.2` (auditoria de navegador como vetor de adoção) — a bateria mostrou que
  eu estava subestimando a via "default de intermediário", que é justamente a via pela qual quase
  tudo neste mapa acontece.

### 7.8 O teste da causa solta e a regra de parada

**Causa solta** (remova a raiz: o efeito aconteceria do mesmo jeito, por outro motivo?). Passei
todos os efeitos de 2ª e 3ª ordem. Dois falharam e foram tratados:

- "assinaturas de notícia crescem" aconteceria por dezenas de outros motivos; **removido**.
- `e14.1` (decisão sobre dados cegos) aconteceria em parte por bloqueio de cookie de terceiro,
  que não tem nada a ver com este mapa. **Mantido**, porque o mecanismo específico — agente em
  extensão com user-agent e IP de pessoa — é próprio da raiz C e some se a raiz sumir. A parte
  atribuível a cookie está declarada aqui.

**Regra de parada** (derive o próximo nível só enquanto houver troca de ator ou de mecanismo).
Parei antes da 3ª ordem em sete ramos: `e3.1`, `e5.1`, `e6.2`, `e7.1`, `e8.1`, `e16.2`, `e19.1` e
`e20.1`. Em todos, o filho que eu teria escrito era o pai amadurecido, não outro efeito — por
exemplo, sob `e8.1` ("a web legível encolhe") o candidato natural era "a web legível encolhe
mais", que é a mesma coisa mais adiante. `e13` não tem filhos pela mesma razão.

### 7.9 Calibração

Contagem por ordem, no bloco final:

| Ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1 | 7 | 11 | 2 | 20 |
| 2 | 4 | 14 | 5 | 23 |
| 3 | 0 | 0 | 14 | 14 |

A distribuição cai com a ordem, como a skill exige, e nenhuma confiança alta sobrevive à terceira
ordem. O número que mais me incomoda é o 7 de confiança alta na primeira ordem. Verifiquei um a
um: `e1`, `e2`, `e4`, `e10`, `e15`, `e18` e `e19`. Cinco deles (`e1`, `e4`, `e10`, `e15`, `e19`)
descrevem coisas **que já estão acontecendo e que eu medi ou li em fonte aberta** — confiança
alta ali é descrição, não profecia. `e2` é propriedade lógica do mecanismo. `e18` é o único que é
projeção, e sustentado por dado de vulnerabilidade medida. Mantidos.

## 8. O que a máquina errou

Eu sou a máquina. O que errei nesta rodada, em ordem de gravidade:

**1. Inventei seis resultados por não checar o tipo de conteúdo.** Minha primeira medição de
`/.well-known/mcp.json` devolveu 6 domínios "com descoberta MCP": cloudflare.com, medium.com,
netflix.com, linkedin.com, folha.uol.com.br e correios.com.br. Era falso. Meu script seguia
redirecionamento e considerava qualquer HTTP 200 como sucesso — os seis devolviam página HTML de
erro ou redirecionavam para a home. Refiz sem seguir redirecionamento e exigindo JSON válido: o
número é **zero**. Se eu não tivesse refeito, este documento afirmaria que a Folha e os Correios
publicam descoberta de ferramentas para agentes. **O erro estava no meu método, e o método
produziu exatamente o resultado que o tema me convidava a encontrar.**

**2. Aceitei números que não conciliam e quase escolhi um.** A fatia de tráfego automatizado na
web aparece como 57,4% (ppc.land citando Cloudflare, junho/2026), ~35% (Cloudflare Radar via
busca, agosto/2026) e 53% (Imperva, 2025). São medições de bases diferentes com o mesmo nome. Meu
impulso foi usar o maior, que é o que sustenta melhor a tese do documento. Registrei os três com
a fonte, na §3.4, e não usei nenhum deles como número-âncora.

**3. Não abri a fonte do dado mais citado deste campo.** O Cloudflare Radar devolveu 403 para
mim, e a HUMAN Security também. Toda vez que falo de composição de tráfego agêntico, estou
usando intermediário. A ironia é registrável: as duas fontes que medem tráfego de máquina
bloquearam a máquina que queria lê-las.

**4. Números que circulam como se fossem primários e não são.** "97 milhões de downloads mensais
de SDK" e "10.000+ servidores MCP ativos" são atribuídos à Anthropic em dezembro de 2025, mas eu
os li numa compilação de segurança, não no anúncio original. Estão no texto com o intermediário
nomeado. O mesmo vale para os percentuais de vulnerabilidade de servidores MCP: são cinco
estudos distintos citados por um sexto autor, e eu não abri nenhum dos cinco.

**5. Minha própria contagem do registro oficial de MCP ficou incompleta.** Rodei a paginação da
API e parei em 401 páginas por um limite que eu mesmo pus no script: **40.100 registros, dos
quais 39.401 com status `active`**. Isso é um **piso**, não um total, e a unidade não é
"servidor" e sim "registro de servidor/versão" — o que explica a distância para os 9.652
relatados em maio de 2026 sem que nenhum dos dois esteja errado. Não usei o número como
argumento em nenhum efeito; está aqui e na §12 como o que é: uma medição inconclusa.

**6. Deixei a Cloudflare falar como se fosse o árbitro.** Sete afirmações do mapa vêm de dados
de uma empresa que vende a solução para o problema que mede. Corrigi atribuindo em cada
aparição, mas a estrutura do documento ainda reflete o enquadramento dela — inclusive a divisão
Search/Agent/Training, que é uma taxonomia comercial de um fornecedor e está sendo usada aqui
como se fosse categoria natural do fenômeno. Não conheço categoria melhor; registro que esta tem
dono.

**7. Um efeito plausível com mecanismo fraco, que mantive assim mesmo.** `e6.1.1` (a hierarquia
de credibilidade se reorganiza por preço) soa bem e é quase impossível de sustentar: eu suponho
uma correlação entre preço e qualidade de fonte sem nenhum dado. Está com sinal fraco e confiança
baixa, e isto aqui é o aviso de que a frase é mais bonita do que verdadeira.

**8. Uma incoerência da fonte que eu quase repassei como número.** O repositório do Not Human
Search diz "8.000+ sites indexados" no cabeçalho e "1.900+ sites agent-first" no corpo. Eu ia
escrever "8.000 sites" na §3. Está registrado como incoerência da fonte, e não como dado.

## 9. Três cenários para 2031

### Provável — a web de duas velocidades, decidida por default

É 2031. A web não se partiu em duas superfícies, como se anunciava em 2026 — ela se partiu em
duas **velocidades**. Sites de infraestrutura, documentação, comércio e serviço financeiro
publicam ferramentas e são operáveis por agente em segundos; o resto continua sendo lido por
agentes que dirigem navegador sobre uma interface feita para gente, com taxa de erro que ninguém
mede. O que decidiu isso não foi adesão: foram três defaults. O default de borda, que desde
setembro de 2026 bloqueia agente e crawler de treinamento nas páginas com anúncio. O default de
navegador, que passou a auditar prontidão agêntica e a envergonhar quem não a tem. E o default
de cliente de chat, que só chama o que está no catálogo dele. Pagar por acesso continua sendo
exceção — quem tem escala faz acordo bilateral e quem não tem simplesmente bloqueia ou é ignorado.
A publicidade se mudou para dentro da resposta e a unidade de mídia é a citação, sem auditoria
independente. Para quem projeta, o ofício ganhou uma pergunta que não existia: *quem é o
destinatário desta tela, e ela vai ser lida ou executada?*
**Sinal precoce de que estamos entrando neste cenário:** a proporção entre 402 emitidos e
pagamentos efetivos continuar perto de zero em 2027, enquanto a auditoria de prontidão agêntica
do Lighthouse deixa de ser "Not Applicable".

### Desejável — a web com recibo

É 2031. O acesso de máquina é pago, mas pago por **aparição**, não por busca: o editor recebe
quando o conteúdo aparece numa resposta, e recebe com recibo auditável por terceiro — como
circulação de jornal foi auditada no século XX. A declaração de propósito virou padrão do IETF e
tem execução real, porque o crawler que a desrespeita perde acesso, não só reputação. A paridade
entre o que a pessoa vê e o que a máquina recebe é auditável e auditada, então citar uma URL
ainda significa alguma coisa. O pequeno editor participa porque a cobrança é feita por um
mecanismo coletivo, e não por infraestrutura própria — o modelo de licenciamento coletivo que a
RSL propôs em 2025 funcionou como o ECAD funcionou para a música, com todos os defeitos que isso
implica, mas funcionou. No Brasil, a regra de remuneração saiu antes de a audiência acabar.
**O que teria de ser feito para chegar aqui:** que a unidade de cobrança fosse a aparição e não o
acesso (o movimento da Cloudflare de julho de 2026 aponta para lá); que a auditoria fosse de
terceiro e não do vendedor; e que o licenciamento fosse coletivo, porque individualmente o
pequeno não negocia.
**Sinal precoce:** o primeiro editor publicando receita de pagamento por aparição maior que a
receita publicitária da mesma matéria.

### Indesejável — a loja de aplicativos com cara de web

É 2031. Um incidente grande de servidor MCP envenenado, em 2028, encerrou a discussão sobre
descoberta aberta. Publicar ferramenta exige certificação paga; entrar no catálogo de um cliente
de massa exige aprovação; sair dele é decisão de uma empresa, sem recurso. A camada de leitura
aberta continua existindo, mas é onde está o que ninguém quis cobrar, e os agentes a usam por
último. O acesso ao serviço público rápido depende de ter agente credenciado, e quem não tem
volta para o formulário. As redações brasileiras publicam primeiro onde se paga por presença e
depois, se sobrar, no site próprio. Arquivar virou privilégio: o Internet Archive precisa de
credencial para preservar o que antes era público, e a verificação histórica passa a depender da
boa vontade de quem opera a borda. A web aberta não foi proibida — ficou cara, lenta e vazia,
que é como as coisas costumam acabar.
**Sinal precoce deste cenário:** um cliente de agente de massa exigindo assinatura obrigatória de
servidor para instalação, ou o primeiro caso público de um arquivo sendo bloqueado ao tentar
preservar conteúdo por ser classificado como agente.

## 10. O experimento

### O que é

**Cobrador** — o site da própria disciplina publicado em três superfícies ao mesmo tempo,
instrumentado para medir quem chega, quem obedece e quem paga.

Quatro peças, todas construíveis hoje com o que já roda em `tendencias-midia-interacao.vercel.app`:

1. **Três superfícies.** (a) a página HTML como está; (b) um `/llms.txt` com o índice do conteúdo
   em markdown e os `.md` correspondentes; (c) um servidor MCP com três ferramentas reais —
   `listar_temas`, `buscar_mapa(termo)`, `ler_secao(tema, secao)`. A terceira peça é o que
   transforma o site de documento em capacidade.
2. **Política declarada.** Um `robots.txt` com `Content-Signal: search=yes, ai-input=yes,
   ai-train=no`, uma diretiva `License:` no formato RSL apontando para os termos da disciplina, e
   uma rota deliberadamente marcada como proibida para agente — um canário. Se alguém ler o
   canário, sabemos quem ignora a declaração.
3. **Uma rota que cobra.** Um endpoint que responde **HTTP 402** com o cabeçalho de preço (valor
   simbólico) e libera o conteúdo mediante o fluxo x402. Não interessa arrecadar; interessa
   medir **quantos clientes sabem o que fazer diante de um 402**.
4. **O instrumento de medição do resto da web.** O script da §3.5 generalizado: um medidor de
   prontidão agêntica que a turma roda sobre uma lista de 200 sites brasileiros (veículos,
   varejo, bancos, universidades, `gov.br`), repetido em três momentos do semestre, produzindo
   série temporal em vez de foto.

### Que pergunta sobre o futuro ele ajuda a responder

**A pergunta central deste mapa:** a bifurcação da web está acontecendo por adesão de quem
publica, ou por default de intermediário? O Cobrador responde de dois lados ao mesmo tempo. Do
lado de dentro, medindo o que chega a um site que se abriu deliberadamente para máquinas: se
publicar `llms.txt`, MCP e política declarada não muda **nada** no tráfego recebido, a adesão não
é o vetor. Do lado de fora, medindo a série temporal de 200 sites brasileiros: se a adoção não se
mexer em quatro meses, a resposta é a mesma pelo outro caminho.

E responde três perguntas subordinadas, cada uma ligada a um efeito:
- **Quem obedece à declaração?** (`e12`, `e13`) — o canário mede desobediência com nome e IP.
- **Quem sabe pagar?** (`e6`, `e8`) — a rota 402 mede se existe cliente com carteira, ou se o 402
  é só uma porta fechada.
- **O que muda no que a gente escreve?** (`e1.1`, `e10.1.1`) — servir a mesma seção como HTML e
  como markdown obriga a turma a descobrir, na prática, o que se perde e o que se ganha.

### Que tecnologia emergente ele usa, e por que não dá com a madura

| Peça | Tecnologia emergente | Por que não dá com a madura |
|---|---|---|
| Servidor MCP com 3 ferramentas | MCP (registro oficial desde set/2025) | uma API REST com OpenAPI resolveria a chamada, mas não a **descoberta e seleção por modelo**: o que se quer observar é o agente escolher a ferramenta pela descrição, e isso não existe em REST |
| `Content-Signal` + RSL | Content Signals (set/2025), RSL 1.0 (dez/2025) | `robots.txt` clássico só diz se pode rastrear; não distingue busca de treino de resposta — e é exatamente a distinção que está em teste |
| Rota 402 com x402 | x402 (2025), 402 do HTTP | paywall com sessão e cartão é maduro e **pressupõe uma pessoa**; o que se quer medir é se um cliente-máquina, sem humano na frente, resolve o pagamento sozinho |
| Canário de desobediência | — | esta peça é madura de propósito: é um arquivo e um log. Está aqui para mostrar à turma que nem tudo precisa ser novo |

### O que a turma vai fazer quando testar isso em sala

1. **Cada dupla apresenta um agente ao Cobrador** — ChatGPT, Claude, Gemini, Perplexity, uma
   extensão de navegador e um script próprio — e pede a mesma tarefa: *"resuma o mapa do tema 4 e
   diga quem é o autor"*. Registra-se, do lado do servidor, o que cada um buscou: HTML, markdown,
   `llms.txt`, ferramenta MCP, ou nada.
2. **Mede-se a desobediência.** Quem tocou no canário? Com que user-agent, de que IP, assinado ou
   não? Essa tabela, projetada na tela, é a aula.
3. **Testa-se o 402.** Cada dupla tenta acessar a rota paga com um cliente diferente. Conta-se
   quantos entenderam o que fazer. A previsão da turma é registrada **antes** do teste, e essa é
   a parte importante do exercício.
4. **Roda-se o medidor sobre os 200 sites brasileiros**, com o resultado comparado à rodada
   anterior. Cada dupla adota 20 sites e explica um caso: por que a Americanas tem `llms.txt` e o
   `gov.br` não.
5. **Reescreve-se uma seção** deste documento em três formatos — página, markdown para agente e
   descrição de ferramenta — e compara-se o que cada formato faz o autor cortar.

### O que seria um resultado que me faria mudar de ideia

Três resultados, cada um derrubando uma parte específica do mapa:

- **Se todos os agentes testados buscarem apenas o HTML**, ignorando `llms.txt` e o servidor MCP,
  então a raiz A não está acontecendo no consumo de mídia — está acontecendo só em ferramentaria
  de desenvolvimento, exatamente como aponta o meu sinal fraco SF1. Isso derruba `e1`, `e1.1` e
  `e17`, e transforma o cenário provável no cenário de "não aconteceu nada".
- **Se nenhum cliente souber responder ao 402**, e se a série temporal dos 200 sites brasileiros
  não mudar nada em quatro meses, a raiz B não é "mercado emergente", é porta fechada — e o mapa
  inteiro precisa ser reescrito em torno de `e8.1` (a web encolhe) em vez de `e6` (a web se
  precifica).
- **Se ninguém tocar no canário**, a desobediência que a literatura descreve não está no nosso
  quintal, e `e12` e `e12.1` perdem urgência. (Cuidado metodológico que a turma tem de anotar: um
  site novo, sem audiência, pode simplesmente não ter sido visitado. A ausência de sinal aqui não
  é sinal de ausência, e essa distinção é metade do que a disciplina tem a ensinar sobre medir
  futuro.)

## 11. Fontes

Trinta e duas fontes, todas **abertas e lidas** em 10/09/2026. As que não abriram, e a que abriu
para mim mas devolve erro ao verificador automático, estão na §12.4 e não sustentam nada acima.

**Protocolo e especificação (primárias)**

1. https://webmachinelearning.github.io/webmcp/ — especificação do WebMCP, *Draft Community Group
   Report* de 10/09/2026, editada por Brandon Walderman (Microsoft), Khushal Sagar e Dominic
   Farolino (Google): interface `ModelContext`, `registerTool()`, `getTools()`, `executeTool()`,
   evento `toolchange`, *permissions policy* `tools`. Declara explicitamente não ser padrão W3C
   nem estar na trilha de padrões. Sustenta a raiz A e a raiz D. *Confiabilidade:* alta para o
   conteúdo técnico; nula como indicador de adoção — é um rascunho.
2. https://github.com/modelcontextprotocol/modelcontextprotocol/pull/1865 — SEP-1865 (MCP Apps),
   aberta em 21/11/2025 e integrada em 28/01/2026: recursos de UI sob `ui://`, iframe com
   sandbox, JSON-RPC sobre `postMessage`, nove autores nomeados. Sustenta `e1.2` e `e1.2.1`.
   *Confiabilidade:* alta — é o registro da própria mudança.
3. https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/ — anúncio do MCP
   Registry, 08/09/2025: catálogo aberto, API pública, moderação comunitária, sub-registros.
   Sustenta a §3.1 e `e18`. *Confiabilidade:* alta — anúncio oficial; é, porém, do próprio
   interessado.
4. https://registry.modelcontextprotocol.io/v0/servers?limit=1 — a API do registro, consultada
   por mim em 10/09/2026: devolve servidor, esquema, `remotes`, status e data. Sustenta a §3.1 e
   a medição inconclusa descrita em §8.5 e §12.5. *Confiabilidade:* alta — é a fonte primária,
   consultada diretamente.
5. https://datatracker.ietf.org/doc/draft-ietf-aipref-vocab/ — `draft-ietf-aipref-vocab`, versão
   07 de 18/08/2026, grupo AIPREF, trilha de *Proposed Standard*: categorias de treino e de
   busca, valores permitido/proibido/desconhecido. Sustenta a raiz C e `e12`. *Confiabilidade:*
   alta — documento oficial do IETF, com status declarado.
6. https://www.ietf.org/blog/aipref-wg/ — post do IETF sobre a constituição do grupo AIPREF
   (fev/2025): descreve a situação atual como "um conjunto confuso de sinais não-padronizados no
   robots.txt" e lista os dois entregáveis. Sustenta §4.3. *Confiabilidade:* alta para o escopo
   do grupo.
7. https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture —
   `draft-meunier-web-bot-auth-architecture-05`, 02/03/2026: assinatura por RFC 9421, cabeçalhos
   `Signature`, `Signature-Input`, `Signature-Agent`, `keyid` como *thumbprint* JWK. Declara não
   ter posição formal no IETF e ter sido sucedido por outro rascunho. Sustenta §3.1 e a fronteira
   com o tema 2. *Confiabilidade:* alta para o conteúdo; o próprio texto avisa que não é padrão.
8. https://rslstandard.org/rsl — RSL 1.0 (RSL-SPEC-1.0), 10/12/2025: diretiva `License:` no
   `robots.txt`, XML de termos, licenças por *crawl*, por uso, por treinamento, assinatura e
   compra única; anexação também por cabeçalho HTTP, HTML, RSS e metadados. Sustenta a raiz C e
   `e12`. *Confiabilidade:* alta para a especificação; é documento de uma parte interessada em
   licenciamento.
9. https://llmstxt.org/ — proposta do `llms.txt` por Jeremy Howard (set/2024, versão 2 em
   ago/2026), com a justificativa literal de que "páginas web são feitas para pessoas". Sustenta
   §2, §3.1 e `e16.1`. *Confiabilidade:* alta como declaração de intenção; nenhuma como
   indicador de uso.

**Infraestrutura, política de acesso e cobrança**

10. https://blog.cloudflare.com/content-independence-day-ai-options/ — anúncio de 01/07/2026:
    classificação em Search, Agent e Training; bloqueio por default de Agent e Training nas
    páginas com anúncio a partir de 15/09/2026; crawlers multiuso (Googlebot, Applebot, BingBot)
    bloqueados junto quando se bloqueia Training. Sustenta a raiz B, a raiz C, `e9.1` e `e13`.
    *Confiabilidade:* alta para a política anunciada; é a empresa que vende o produto.
11. https://blog.cloudflare.com/control-content-use-for-ai-training/ — `robots.txt` gerenciado e
    bloqueio para conteúdo monetizado; interceptação de `/robots.txt`, prefixo de diretivas,
    princípio da RFC 9309 de correspondência mais específica; o dado de que só 37% dos 10 mil
    maiores domínios têm `robots.txt`. Sustenta §5.2 e `e9.1`. *Confiabilidade:* alta para o
    mecanismo; média para os números, que são autorreportados.
12. https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/
    — 04/08/2025: metodologia de domínios-isca com `robots.txt` proibitivo, 20-25 milhões de
    requisições diárias do crawler declarado e 3-6 milhões do não declarado, deslistagem do
    programa de bots verificados. Sustenta `e12.1` e §4.3. *Confiabilidade:* média-alta — método
    descrito e reproduzível, mas é acusação de uma parte contra outra, contestada publicamente
    pela acusada.
13. https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/
    — cobertura independente do anúncio de 01/07/2026, com a data de 15/09/2026, a aplicação aos
    clientes do plano gratuito e a citação de Matthew Prince. Sustenta §3.1 e `e9.1`.
    *Confiabilidade:* alta como cobertura; os números seguem sendo da Cloudflare.
14. https://ppc.land/cloudflare-stops-charging-ai-per-crawl-and-starts-paying-per-answer/ — a
    mudança de *pay per crawl* para *pay per use*; mais de um bilhão de 402 por dia em abril de
    2026; razão crawl-para-referência de 38.000:1 (Anthropic) e 1.091:1 (OpenAI); mais de metade
    do tráfego de crawler sendo refetch de página não alterada; parceiros Ceramic.ai e You.com;
    57,4% de tráfego de bots em junho/2026. Sustenta a raiz B, `e6`, `e7.1`, `e20` e o SF3.
    *Confiabilidade:* média — veículo especializado repassando números de uma parte interessada,
    sem verificação independente. É a fonte de quatro dos números mais citados deste documento, e
    isso está declarado em §8.2 e §8.6.
15. https://www.x402.org/ — o protocolo x402 e os números autodeclarados de 10/09/2026: 75,41
    milhões de transações, US$ 24,24 milhões, 94.060 compradores e 22.000 vendedores em 30 dias;
    Alchemy, AWS, Cloudflare, Stripe e Vercel listados. Sustenta a raiz B e `e7`.
    *Confiabilidade:* baixa para os números (autorreportados, sem metodologia, e contraditos pela
    análise citada em §12.4); alta para a descrição do mecanismo.

**Comportamento de busca, tráfego e mídia**

16. https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/
    — 68,01% de buscas sem clique entre janeiro e abril de 2026, painel Similarweb de desktop e
    móvel nos EUA, com os ajustes metodológicos declarados e a limitação de não cobrir o
    aplicativo móvel do Google. Sustenta §1, §3.4 e `e15`. *Confiabilidade:* média-alta — método
    aberto e limitações declaradas, mas é painel, não censo.
17. https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
    — 8% de cliques com resumo de IA contra 15% sem; 68.879 buscas de 900 adultos nos EUA, março
    de 2025. Sustenta §3.4 e `e15`. *Confiabilidade:* alta — desenho amostral e método publicados
    por instituição sem interesse comercial no resultado.
18. https://reutersinstitute.politics.ox.ac.uk/journalism-media-and-technology-trends-and-predictions-2026
    — 280 executivos de 51 países; busca orgânica −33% global e −38% nos EUA em 2.500+ sites
    entre nov/2024 e nov/2025; expectativa de −43% em três anos; 38% de confiança no futuro do
    jornalismo; 75% esperando impacto grande de ferramentas agênticas. Sustenta §3.4, `e15` e o
    SF5. *Confiabilidade:* alta para a pesquisa de opinião; média para os dados de tráfego, que
    vêm de terceiro citado.
19. https://aisearch.similarweb.com/blog/gen-ai-stats/ — participação por assistente (ChatGPT
    ~53%, Gemini ~27-28%, Claude ~9%), taxa de citação subindo de 1,6% para ~6,8% em um ano, e
    ~26% das respostas do ChatGPT com anúncio em maio de 2026. Sustenta `e10` e `e10.1`.
    *Confiabilidade:* média — empresa de medição vendendo painel, sem metodologia detalhada na
    página.
20. https://digiday.com/media/no-playbook-just-pressure-publishers-eye-the-rise-of-agentic-browsers/
    — 31/12/2025: editores tratando navegador agêntico como "problema de 3%", sem playbook, com
    a frase de que "o navegador agêntico do Google é a única linha do tempo que importa".
    Sustenta §3.2 e o SF5. *Confiabilidade:* média-alta para o retrato de opinião do setor; é
    reportagem com fontes anônimas.
21. https://agenciabrasil.ebc.com.br/politica/noticia/2026-08/avanco-da-ia-corroi-financiamento-do-jornalismo-profissional-no-brasil
    — agosto de 2026: um em quatro portais da Ajor com perda superior a 20% de audiência em 2025;
    PL 2338 na Câmara desde março de 2025; comissão especial sem reunião desde novembro de 2025;
    votação condicionada ao pós-eleitoral; posição das empresas de tecnologia contra o capítulo
    de direito autoral. Sustenta §3.6, `e15.1` e o W3. *Confiabilidade:* alta — agência pública,
    com fontes nomeadas.
22. https://www.searchviu.com/en/ai-browsers-2026-compared/ — 05/08/2026: agentes em extensão
    enviando o mesmo user-agent e o mesmo IP residencial de uma pessoa; Claude for Chrome de ~40
    mil para mais de 10 milhões de instalações entre dez/2025 e jun/2026; menção a Web Bot Auth e
    WebMCP como sinais de detecção ainda não implantados. Sustenta `e14.1` e §3.2.
    *Confiabilidade:* média — análise de consultoria, com números de instalação verificáveis e
    inferências próprias.

**Adoção medida dos sinais para agente**

23. https://mecanik.dev/en/posts/does-llms-txt-do-anything-yet/ — compilação da evidência sobre
    `llms.txt`: 97% de arquivos sem nenhuma requisição em 137 mil domínios (Ahrefs, maio/2026);
    GPTBot em 4,51%, ClaudeBot em 0,80% e DeepseekBot em 0,02% das poucas requisições; adoção de
    4.088 para 36.120 instâncias em um ano (Originality.ai). Sustenta `e16.1` e a raiz D.
    *Confiabilidade:* média — é compilação de estudos de terceiros que eu não abri
    individualmente; a convergência entre eles é o que sustenta a afirmação.
24. https://developers.google.com/search/docs/appearance/ai-features — documentação oficial:
    "não é preciso criar novos arquivos legíveis por máquina, arquivos de texto de IA ou marcação
    para aparecer nestes recursos"; o `llms.txt` não é sequer mencionado. Sustenta `e16.1` e o
    ceticismo da raiz D. *Confiabilidade:* alta — é a posição oficial de quem controla o principal
    consumidor potencial do sinal.
25. https://nothumansearch.ai/guide — os sete sinais de prontidão agêntica e seus pesos:
    `llms.txt` 25, `ai-plugin.json` 20, OpenAPI 20, API estruturada 15, servidor MCP 10,
    `robots.txt` 5, Schema.org 5. Sustenta §2 e a raiz D. *Confiabilidade:* média — é a régua de
    um projeto pequeno, não um padrão; e a própria página não publica o tamanho do índice.
26. https://github.com/unitedideas/nothumansearch — repositório do Not Human Search, com o mesmo
    esquema de pontuação e a incoerência entre "8.000+ sites indexados" no cabeçalho e "1.900+
    sites agent-first" no corpo. Sustenta `e16` e o item 8 da §8. *Confiabilidade:* média —
    código aberto e verificável, números autodeclarados e internamente contraditórios.
27. https://www.spronta.com/blog/state-of-webmcp-july-2026/ — estado do WebMCP em julho de 2026:
    *origin trial* do Chrome 149 ao 156; migração de `navigator.modelContext` para
    `document.modelContext` em 21/07/2026 e depreciação no Chrome 150; nenhum agente de massa
    consumindo; pilotos nomeados (Expedia, Booking.com, Shopify, Credit Karma, TurboTax, Redfin,
    Etsy, Instacart, Target) como intenção; auditoria `webmcp-form-coverage` no Lighthouse desde
    maio de 2026. Sustenta §3.2, `e16.2`, SF2, SF4 e o W4. *Confiabilidade:* média — análise
    independente bem datada, sem revisão; os fatos de versão do Chrome são verificáveis.
28. https://en.wikipedia.org/wiki/NLWeb — NLWeb anunciado pela Microsoft em 19/05/2025, cada
    instância funcionando como servidor MCP, com `/ask` para pessoas e `/mcp` para agentes, sobre
    Schema.org e RSS; adotantes iniciais TripAdvisor, Shopify, Eventbrite e Hearst. Sustenta a
    raiz A. *Confiabilidade:* média — verbete enciclopédico com fontes, sem verificação
    independente da adoção.
29. https://en.wikipedia.org/wiki/Really_Simple_Licensing — RSL lançada em 10/09/2025 pela RSL
    Collective, cofundada por Eckart Walther (cocriador do RSS) e Doug Leeds (ex-Ask.com), com
    Reddit, Yahoo e Medium entre os apoiadores iniciais. Sustenta §3.3. *Confiabilidade:* média —
    verbete marcado como esboço, sem seção de críticas.
30. https://pressgazette.co.uk/publishers/digital-journalism/major-publishers-back-universal-ai-licensing-technology/
    — 15/12/2025: cerca de 1.500 organizações de mídia apoiando a RSL, entre elas People Inc.,
    Yahoo e Associated Press; especificação publicada em 11/12/2025; plugins de WordPress
    disponíveis. Sustenta §3.3 e `e12`. *Confiabilidade:* média-alta — veículo especializado em
    imprensa; o número de 1.500 é declarado pela própria RSL Collective.

**Segurança da superfície de ferramentas**

31. https://www.practical-devsecops.com/mcp-security-statistics-2026-report/ — compilação com
    origem e data por número: 43% vulneráveis a injeção de comando (Equixly, fev/2026); 36,7% de
    7.000+ a SSRF (BlueRock, 2026); 33% de 1.000 com vulnerabilidade crítica (Enkrypt,
    out/2025); ~5,5% de 1.899 com envenenamento de ferramenta (estudo acadêmico, 2025); 53% com
    chave estática e 8,5% com OAuth em 5.200+ servidores (Astrix, out/2025); 97 milhões de
    downloads mensais de SDK e 10.000+ servidores ativos (Anthropic, 09/12/2025); mais de 30 CVEs
    em uma janela de 60 dias no início de 2026. Sustenta `e4`, `e18` e o W5. *Confiabilidade:*
    média — é fonte terciária: compila estudos que eu não abri. A convergência entre seis estudos
    independentes é o que sustenta a afirmação de que a superfície é insegura; nenhum número
    isolado deve ser citado sem este aviso.

**Ofício**

32. https://www.speakeasy.com/blog/agent-experience-introduction — *Agent Experience* (AX),
    termo introduzido por Mathias Biilmann (Netlify) no início de 2025: documentar endpoints para
    agentes, restringir a exposição de ferramentas, cabeçalhos de rastreio, projetar para falha.
    Sustenta `e2`, `e5` e `e5.1`. *Confiabilidade:* média — conteúdo de empresa que vende
    ferramentas para APIs; útil como registro do vocabulário emergente do ofício, não como
    evidência de adoção.

## 12. Anexo — o levantamento bruto

Sem limite de tamanho e sem edição. Nada aqui foi cortado em silêncio: os efeitos removidos, as
buscas que não deram em nada, as fontes que não abriram, os números que circularam e não entraram,
o código das medições e a saída do verificador.

### 12.1 Como esta rodada foi feita

**Data:** 10/09/2026. **Modo:** MAPA, não interativo, com `briefing:` fechado recebido pronto.
**Skill:** `futurizacao-giordano` v1.2.0. **Ferramentas:** busca na web, leitura de páginas,
e execução local de scripts Python para as duas medições próprias.

**Sequência executada:**

1. Leitura do formato da disciplina (`references/formato.md`) e do verificador
   (`references/verificar.py`) antes de escrever qualquer coisa.
2. Leitura da rodada anterior da mesma série (tema 3) para conferir convenções de formatação —
   não o conteúdo.
3. Doze buscas na web, em português e inglês (a skill exige no mínimo oito), listadas em §12.3.
4. Trinta e duas leituras completas de página, mais três tentativas frustradas (§12.4).
5. Duas medições próprias com código escrito para esta rodada (§12.6), sendo que a primeira
   precisou ser refeita por erro meu (§8.1).
6. Montagem da roda; aplicação da bateria do §6 da skill sobre a roda já montada; alteração da
   roda conforme o resultado; registro das alterações em §7.7.
7. Execução do verificador e colagem da saída inteira em §12.9.

**O que consumiu mais tempo e por quê:** conciliar números de tráfego automatizado que não
conciliam (§8.2), e refazer a medição errada (§8.1).

### 12.2 Premissas assumidas e declaradas

O `briefing:` recebido cobriu horizonte (2031), público (quem projeta mídia e interação), recorte
(global com nota sobre o Brasil), o que está descartado (o que já é comum em produto de massa),
viés (neutro), zona de interesse (Agentes) e o falseador (evidência de que a adoção passou da
maioria inicial, ou de que a tecnologia não rompe nada). Não houve rebaixamento de confiança por
ausência de entrevista, porque o briefing é completo — conforme a regra da skill.

O que o briefing **não** cobria e eu assumi, declarado aqui:

1. **A fronteira com os temas vizinhos foi interpretada de forma estrita.** Identidade e detecção
   de agentes (tema 2) e pagamento por produto/comércio agêntico (tema 5) ficaram de fora como
   objeto; entram só como pré-condição, com o crédito. Outra leitura possível — e defensável —
   teria trazido Web Bot Auth como quinta raiz.
2. **"Quem projeta mídia e interação" foi lido como incluindo quem decide o que publicar**, e não
   só quem desenha telas. Foi por isso que efeitos econômicos de editor entraram no mapa.
3. **O horizonte 2031 foi tratado como janela de visibilidade para o público**, não como data de
   consumação — é a definição de `prazo` na skill.
4. **"O que já é comum em produto de massa" foi aplicado com a régua da própria skill**, o que
   levou a recusar cinco candidatos a raiz (§4.0), inclusive dois que o enunciado do tema sugeria.
5. **O recorte brasileiro foi construído por medição própria**, porque não encontrei fonte aberta
   com dados de adoção de sinais agênticos no Brasil. A amostra de 21 domínios é pequena e não
   probabilística; serve para ordem de grandeza, não para estimativa.

### 12.3 As buscas — o que cada uma deu

| # | Busca | O que deu |
|---|---|---|
| 1 | `Model Context Protocol adoption 2026 number of MCP servers registry statistics` | contagens divergentes entre registros (Glama ~19.8k, MCP.so ~16k, oficial ~9,6k em maio/2026); 97M downloads/mês; 41% de organizações com MCP em produção. **Nenhum número primário** — todos vinham de blogs de consultoria. Levou à decisão de contar o registro oficial eu mesmo. |
| 2 | `llms.txt adoption 2026 Google does not use llms.txt criticism` | a linha mestra da raiz D: adoção 8,8× e 97% sem requisição; posição da Google. Fonte aberta: mecanixdev e a documentação oficial. |
| 3 | `Cloudflare pay per crawl 2026 results adoption publishers` | a virada de *pay per crawl* para *pay per use*, o bilhão de 402/dia, os parceiros. |
| 4 | `Web Bot Auth IETF draft 2026 signed agents Cloudflare` | estado do rascunho; usado só como pré-condição, por causa da fronteira com o tema 2. |
| 5 | `x402 protocol adoption 2026 transactions pay per request agents` | os dois lados do x402: números oficiais e a crítica de demanda inexistente. |
| 6 | `AI search referral traffic decline publishers 2026 data Similarweb click-through` | zero-click, Pew, quedas por porte de publisher. |
| 7 | `RSL Really Simple Licensing standard adoption 2026 publishers` | a especificação e as ~1.500 organizações. |
| 8 | `IETF aipref working group RFC 2026 robots.txt AI preferences vocabulary` | o vocabulário e o post de constituição do grupo. |
| 9 | `agentic browser 2026 OpenAI Atlas Perplexity Comet market share traffic sites blocking` | **deu pouco aproveitável**: a fonte principal (HUMAN Security) devolveu 403; os números de participação por navegador ficaram só na busca e não entraram no documento (§12.5). |
| 10 | `"Not Human Search" agent readiness index llms.txt OpenAPI MCP scoring` | os sete sinais e seus pesos; o repositório. |
| 11 | `Brasil editores bloqueiam crawlers de IA 2026 robots.txt jornais brasileiros` | **deu quase nada de aproveitável**: só material de agências de SEO, sem metodologia. Os números de `.br` que apareceram (712 domínios bloqueando GPTBot, 168 domínios `.br` nomeando algum crawler) vêm de fontes que não abri e **não entraram**. Foi esta busca vazia que motivou a medição própria. |
| 12 | `Microsoft NLWeb adoption 2026 natural language web MCP endpoint sites` | o par `/ask` e `/mcp`, os quatro adotantes iniciais. |
| 13 | `Cloudflare Content Signals Policy 2026 adoption robots.txt ai-train search` | a política e o formato da linha `Content-Signal`. |
| 14 | `bot traffic share of internet 2026 automated traffic exceeds human Imperva Cloudflare Radar` | três números incompatíveis; virou a §8.2 em vez de virar afirmação. |
| 15 | `MCP Apps SEP-1865 interactive UI in MCP 2026 adoption interface agents` | a extensão e a data de integração. |
| 16 | `ads in AI answers 2026 ChatGPT advertising Google AI Mode ads publishers revenue` | ordens de grandeza de receita publicitária em IA. **Quase nada entrou**: os números de receita (US$ 100M anualizados, US$ 5,1 bi em 2026) vieram de blogs de marketing sem metodologia, e estão em §12.5, não no corpo. |
| 17 | `Cloudflare Perplexity stealth crawling dispute 2025 2026 verified bots outcome` | o caso e a deslistagem; abri o post original. |
| 18 | `"agent experience" AX design 2026 designing for AI agents interface Vercel` | o vocabulário do ofício; a projeção de 40% de aplicações empresariais com agente (Gartner) **não entrou** por não ter sido aberta. |
| 19 | `PL 2338 marco legal inteligência artificial Brasil 2026 remuneração conteúdo jornalístico` | o estado do projeto; abri a Agência Brasil. |
| 20 | `Reuters Institute journalism media technology trends predictions 2026` | a pesquisa com 280 executivos. |
| 21 | `MCP server security 2026 malicious servers registry prompt injection study percentage vulnerable` | os percentuais de vulnerabilidade, com origem nomeada. |
| 22 | `WebMCP navigator.modelContext W3C 2026 Chrome origin trial browser tool API status` | o achado tardio mais importante da rodada: o WebMCP. Sem esta busca, a raiz A estaria incompleta. |

### 12.4 Fontes que não abriram, e a que não abre para o verificador

- **https://radar.cloudflare.com/bots** — HTTP 403 para mim, duas vezes, com dois agentes
  diferentes. É a fonte primária do número de tráfego de bots que aparece na §3.4 como "via
  busca". Consequência: **não uso esse número para sustentar nada**; ele está na tabela só para
  mostrar que as medições divergem.
- **https://www.humansecurity.com/learn/blog/state-of-agentic-traffic-april-26/** — HTTP 403. Era
  a fonte com a repartição do tráfego agêntico por navegador (Comet ~48%, Atlas ~21%, extensão do
  Claude ~17%). Nada disso entrou no documento.
- **https://www.cnbc.com/2026/03/26/ai-bots-humans-internet.html** — HTTP 403. Era a cobertura
  independente do dado "bots superaram humanos". Não entrou.
- **https://www.linuxfoundation.org/press/linux-foundation-announces-intent-to-form-the-x402-foundation**
  — HTTP 404; o caminho que a busca indicou não existe. A informação sobre a fundação x402 e seus
  membros **não entrou** no corpo.
- **https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet**
  — esta eu **abri e li**: cerca de US$ 28 mil de volume diário, ~131 mil transações, ticket médio
  de ~US$ 0,20, pico de 3,8 milhões de transações num dia de fevereiro atribuído a teste, e a
  análise da Artemis segundo a qual cerca de metade das transações é artificial (autonegociação e
  *wash trading*). Ela sustenta `e8` e a §3.2. **Não está na §11** porque devolve HTTP 429 ao
  verificador automático, e a regra da entrega é que todo link da §11 responda. Fica aqui,
  declarada, para que ninguém encontre a afirmação sem a fonte.

### 12.5 Números que circularam na busca e que NÃO estão no corpo do documento

Todos apareceram em resultado de busca e **nenhum** foi usado, por não ter sido aberto na fonte:

- Repartição do tráfego agêntico em abril/2026: Comet 48,12%, Atlas 21,33%, extensão do Claude
  17,33%, ChatGPT Agent 8,55% (HUMAN Security, 403).
- Usuários ativos mensais de navegador agêntico: >10 milhões somados; Comet ~3 milhões; Atlas
  ~5 milhões (Similarweb citada por terceiros).
- Descontinuação do navegador Atlas autônomo em 2026, com as funções migrando para o aplicativo
  e uma extensão.
- Registros de MCP: 19.831 no Glama, ~16.000 no MCP.so, 5.500+ no PulseMCP, 17.468 num censo
  independente; 4.133 servidores operados por empresas, alta de 873%.
- Receita publicitária em IA: US$ 100 milhões anualizados para a OpenAI em fev/2026; US$ 5,1
  bilhões em 2026 e mais de US$ 100 bilhões em 2030 (WPP Media); ~25% das respostas do Google AI
  Mode com conteúdo patrocinado.
- Bloqueio de crawlers em domínios brasileiros: 712 domínios bloqueando GPTBot e 623 bloqueando
  ClaudeBot numa amostra de junho/2026; 168 domínios `.br` nomeando algum crawler de IA e 110
  bloqueando ao menos um.
- 3,8 milhões de domínios usando o `robots.txt` gerenciado da Cloudflare para recusar treino.
- Estudo da Universidade de Washington (03/07/2026) com sete navegadores agênticos, quatro deles
  permitindo contornar a política de mesma origem.
- Projeção do Gartner de 40% de aplicações empresariais com agente embutido até o fim de 2026.
- 88% de organizações relatando incidente confirmado ou suspeito com agente no último ano
  (Gravitee, 2026).

Se algum destes for necessário numa versão futura, o caminho é abrir a fonte primária — não
copiar daqui.

### 12.6 O código das duas medições próprias

**Medição 1 — prontidão agêntica em 49 domínios.** Requisições com `User-Agent:
pesquisa-academica-CIn-UFPE/1.0`, tempo limite de 12 s, 16 conexões simultâneas. Para cada
domínio: `GET /llms.txt` (contado só se HTTP 200, tipo de conteúdo diferente de `text/html` e
corpo maior que 20 bytes), `GET /robots.txt` (busca literal por `gptbot`, `claudebot`,
`google-extended`, `content-signal` e pela diretiva `license:` no início de linha) e
`GET /.well-known/mcp.json`.

Domínios testados (49): wikipedia.org, nytimes.com, github.com, stripe.com, vercel.com,
cloudflare.com, anthropic.com, openai.com, shopify.com, reddit.com, medium.com, booking.com,
airbnb.com, amazon.com, bbc.com, theguardian.com, wsj.com, washingtonpost.com, nike.com,
walmart.com, apple.com, microsoft.com, netflix.com, spotify.com, linkedin.com, globo.com,
g1.globo.com, folha.uol.com.br, estadao.com.br, uol.com.br, terra.com.br, cnnbrasil.com.br,
mercadolivre.com.br, magazineluiza.com.br, americanas.com.br, nubank.com.br, itau.com.br,
bb.com.br, gov.br, ufpe.br, cin.ufpe.br, band.uol.com.br, ig.com.br, metropoles.com,
poder360.com.br, sebrae.com.br, correios.com.br, petrobras.com.br, embrapa.br.

**O erro e a correção.** A primeira versão usava `urllib.request.urlopen` com o comportamento
padrão de seguir redirecionamento e contava qualquer HTTP 200 como sucesso. Resultado falso: 6
domínios "com `/.well-known/mcp.json`". A correção instalou um `HTTPRedirectHandler` que recusa
redirecionamento e passou a exigir `json.loads()` bem-sucedido. Resultado correto: **0 de 49**.
Verificação manual dos seis falsos positivos: cloudflare.com 301, medium.com 403, netflix.com
301, linkedin.com 200 com `text/html`, folha.uol.com.br 301, correios.com.br 302.

**Medição 2 — `llms.txt` em sites de documentação.** `curl -L` com agente de navegador, anotando
código, tipo de conteúdo e tamanho: `docs.anthropic.com` (200, `text/plain`, 67.859 bytes),
`docs.stripe.com` (200, `text/markdown`, 90.555), `developers.cloudflare.com` (200, `text/plain`,
15.906), `docs.github.com` (200, `text/markdown`, 28.674), `ai.google.dev` (404).

**Medição 3, inconclusa — tamanho do registro oficial de MCP.** Paginação de
`registry.modelcontextprotocol.io/v0/servers?limit=100` seguindo `nextCursor`. A execução parou
em **401 páginas** por um limite que eu mesmo pus no script: **40.100 registros, dos quais 39.401
com status `active`**, em 10/09/2026 às 22h50. É **piso, não total**, e a unidade é registro de
servidor/versão — o que explica a distância para os 9.652 relatados em maio de 2026 sem que
nenhum dos dois esteja errado. Uma segunda execução sem o limite foi lançada e não havia
terminado quando este documento foi fechado. **Nenhum efeito do mapa se apoia neste número.**

### 12.7 Os efeitos cortados, com o motivo

Nada foi cortado em silêncio. Estes estavam na primeira versão da roda e saíram:

1. **"A experiência do usuário melhora porque o agente faz o trabalho chato."** Extrapolação
   linear pura, sem ator específico, e serve para qualquer tema de automação. Falha no teste de
   especificidade do §3 da skill.
2. **"Surge a profissão de engenheiro de prontidão agêntica."** É literalmente um dos quatro
   efeitos que a skill proíbe sem nome, mecanismo e ator. O que sobrou dele, com mecanismo, é
   `e16.1` (a prontidão agêntica vira checklist de agência) — que descreve a mesma coisa sem
   inventar uma profissão.
3. **"Governos criam uma agência de regulação da web agêntica."** Mesmo problema, categoria
   "reguladores criam categoria/lei nova". O que sobrou, com nome e mecanismo, é `e9.1.1` (CADE e
   Comissão Europeia tratando default de borda como conduta de guardião).
4. **"Assinaturas de notícia crescem porque o leitor quer fonte confiável."** Falha no teste da
   causa solta: aconteceria por muitos outros motivos, e não deriva de nenhuma das quatro raízes.
5. **"Cursos de jornalismo reorganizam o currículo em torno de IA."** Efeito proibido pela skill,
   e eu não tinha nome de curso nem mecanismo. Não confundir com `e1.1.1`, que sobreviveu porque
   nomeia a disciplina e a comunidade e liga o mecanismo ao pai.
6. **"A web se torna mais acessível porque conteúdo estruturado para máquina também serve a
   leitor de tela."** Este eu cortei com pena, e registro o motivo: a premissa é plausível
   (markdown limpo é mais acessível que HTML com navegação), mas não achei nenhuma evidência de
   que quem publica para agente também melhora acessibilidade — e há razão para suspeitar do
   contrário, já que a superfície de máquina é separada da superfície humana (`e1`), o que
   permite deixar a segunda como está. Se alguém encontrar evidência, é um efeito que merece
   entrar.
7. **"O preço de ler varia por país."** Virou parte do wildcard W2 em vez de efeito, porque o
   mecanismo depende de uma condição improvável (consolidação num único trilho de pagamento) e
   efeito com mecanismo condicional é wildcard, não efeito.

### 12.8 Caminhos abandonados

- **Tratar Web Bot Auth como quinta raiz.** Abandonado pela fronteira com o tema 2 da disciplina,
  declarada no enunciado. Registro que é uma escolha de recorte, não um julgamento: um mapa que
  incluísse identidade criptográfica como raiz teria uma cadeia inteira a mais, e ela encostaria
  em `e12.1` e `e4.1`.
- **Construir o mapa a partir do setor (mídia) em vez da inovação.** O briefing determina "a
  partir de uma inovação/tema". Um mapa setorial teria posto o jornalismo no centro; este põe a
  camada de protocolo, e o jornalismo aparece como quem perde.
- **Usar a taxonomia Search/Agent/Training como eixo organizador do documento.** Cheguei a
  esboçar. Abandonei porque é taxonomia comercial de um fornecedor (§8.6) e teria enquadrado o
  mapa inteiro na visão de mundo da Cloudflare. Ela aparece como fato, não como estrutura.
- **Fazer a medição própria sobre 200 domínios em vez de 49.** Abandonado por tempo de execução
  nesta rodada; virou parte do experimento (§10), onde a turma faz com série temporal, que é
  melhor do que uma foto maior.
- **Procurar dados de consumo energético do tráfego agêntico.** Duas tentativas sem resultado
  aproveitável. É por isso que o eixo ecológico do STEEP (§5.5) tem dois efeitos e uma confissão.

### 12.9 A saída do verificador


Execução de `verificar.py --links` em 10/09/2026, sobre a versão final deste arquivo. A saída
inteira, com os números — não a palavra "passou":

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 20 (frontmatter diz 20)
efeitos ordem 2: 23 (frontmatter diz 23)
efeitos ordem 3: 14 (frontmatter diz 14)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 2 [('e11.1.1', 2032), ('e17.1.1', 2032)]
confiança ordem 1: alta 7 · media 11 · baixa 2
confiança ordem 2: alta 4 · media 14 · baixa 5
confiança ordem 3: alta 0 · media 0 · baixa 14
links da seção 11: 32/32 respondem (frontmatter diz fontes: 32)
RESULTADO: ok
```

Leitura da saída, item a item:

- **18/18 campos e 12/12 títulos:** o documento está no formato da disciplina, sem desvio.
- **4 raízes, 20 / 23 / 14 efeitos:** batem com o frontmatter.
- **Nenhum efeito de 1ª ou 2ª ordem passa de 2031;** os dois de 3ª ordem que passam (`e11.1.1` e
  `e17.1.1`, ambos em 2032) estão declarados na §5.4, como a skill exige.
- **Calibração:** 7/11/2 na primeira ordem, 4/14/5 na segunda, 0/0/14 na terceira. A confiança
  cai com a ordem e nenhuma confiança alta sobrevive à terceira — é o que a skill pede, e a
  justificativa das sete altas de primeira ordem está em §7.9.
- **32/32 links respondem**, e o número bate com o campo `fontes` do frontmatter. As três fontes
  que não respondem estão fora da §11, na §12.4.
