---
tema: "A internet agentica: quando o usuario e uma maquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: meap
zona_de_interesse: Agentes
data: 2026-09-11
horizonte: 2031
publico: quem projeta midia e interacao (designers, desenvolvedores de front-end, editores de produto digital)
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 9
efeitos_ordem_3: 7
tecnologias_citadas: [Model Context Protocol, WebMCP (navigator.modelContext), MCP Server Cards, llms.txt, robots.txt, Content Signals, Web Bot Auth (HTTP Message Signatures RFC 9421), x402 / HTTP 402, OpenAPI, ai-plugin.json, Schema.org, agent-readiness scoring, agentic browsers, AI crawlers]
fontes: 12
confianca: media
experimento: '"O mesmo site, dois leitores" — medir a prontidao agentica de 12 a 15 sites brasileiros com um script reproduzivel e, em seguida, dar a um agente uma tarefa real em cada um, comparando com a mesma tarefa feita a mao pela turma'
skill_usada: futurization-meap
publico_ok: false
---

## 1. Resumo

The web was built to be read by eyes and is now, measurably, read mostly by programs: as of 4 June 2026, Cloudflare reported 57.4% of HTTP requests as bot-originated against 42.6% human. That crossover arrived roughly eighteen months earlier than Cloudflare's own CEO expected. This map takes the theme's premise — that the web is being reorganized for agents — and tests it against what can actually be opened and read today. The finding is uncomfortable for the premise: the *reading* side of the shift has already happened, while the *publishing* side has barely started. Cloudflare's own scan of the 200,000 most visited domains found fewer than 15 sites carrying the capability standards it scores. The machine-readable layer that the theme names first, `llms.txt`, was explicitly declared unnecessary by Google in May 2026. So the three root disruptions below are not "the web adopts agent protocols". They are: the page stops being the interface (WebMCP), machine access stops being free and anonymous (Web Bot Auth plus per-request payment), and the majority visitor stops being human — which strands the metric that pays for the web. Confidence is `media`, and the single wildcard that would collapse the whole map is the one with the best source behind it: agents may simply get good enough at reading human HTML.

## 2. O tema

The agentic web is the reorganization of the web as a *platform* for non-human clients: discovery, description, access control and payment redesigned for a visitor that does not look at a screen. It is not the same object as agent identity and detection (theme 2 of this course, the security side) nor as agent commerce (theme 5). Here the question is narrower and more structural: when the principal reader of a page is a program, what does one publish, how does one charge, and for whom does one optimize?

This belongs squarely in media and interaction because it attacks the discipline's two load-bearing assumptions at once. The first is that interface means *screen*: layout, hierarchy, affordance, visual identity. The second is that attention is the currency: a pageview served to an eye is what pays for the content beneath it. An agent has no eye and pays no attention. If it becomes the majority reader, both assumptions become historically local rather than natural.

It deserves a future map — rather than a market report — for a specific reason. The technical layer (protocols) and the economic layer (who pays) are moving at very different speeds and in different directions, and the interesting effects live in the gap between them. A market report would measure one of the two and miss the tension. A futures wheel can hold both.

## 3. Onde isso está hoje

**The reading side is already past the tipping point.** Cloudflare reported on 4 June 2026 that bots generate 57.4% of requests on its network against 42.6% from humans. Matthew Prince's own framing is the useful part: he had predicted the crossover for "end of 2027, then early 2027", and attributed the acceleration to agentic traffic, noting that where a human might visit five sites before buying, an AI service might browse five thousand.

**The connector layer has consolidated and left its vendor.** The Model Context Protocol was donated to the Agentic AI Foundation, a directed fund under the Linux Foundation, on 9 December 2025, co-founded by Anthropic, Block and OpenAI with support from Google, Microsoft, AWS, Cloudflare and Bloomberg. At that date MCP reported over 97 million monthly SDK downloads and about 10,000 active servers. Two years from one company's protocol to foundation governance is fast even by web standards.

**The in-page layer is a draft, not a standard.** WebMCP — the API that lets a page register tools for an in-browser agent via `document.modelContext`, with `registerTool()`, `getTools()` and `executeTool()` — was published as a *Draft Community Group Report* on 10 September 2026 by the W3C Web Machine Learning Community Group, edited by Brandon Walderman (Microsoft), Khushal Sagar (Google) and Dominic Farolino (Google). The document states it is not a W3C Standard.

**The publishing side is nearly empty.** Cloudflare's Agent Readiness score (17 April 2026) grades sites on four dimensions — discoverability, content, bot access control, capabilities. Scanning the 200,000 most visited domains it found: 78% have a `robots.txt` but most are not configured for AI agents; 4% have declared AI usage preferences via Content Signals; markdown content negotiation passes on 3.9%; and for the emerging capability standards (MCP Server Cards, API Catalogs) "fewer than 15 sites in the entire dataset". Not Human Search, the agent-first search engine that ranks by machine-readability, shows 5,316 sites indexed at an *average score of 38 out of 100*, using published weights: llms.txt 25 points, ai-plugin.json 20, OpenAPI 20, structured API 15, MCP server 10, robots.txt 5, Schema.org 5.

**The layer the theme names first is the one with the worst evidence.** On 15 May 2026 Google's AI optimization guidance told site owners that `llms.txt` is not needed for AI Overviews, AI Mode or any generative Search feature, grouping it with tactics that do not help AI visibility. The only adoption figure I could open is from Wix Studio's AI Search Lab (October 2025): Google indexes somewhere between 30,000 and 60,000 `llms.txt` files globally — a rounding error against the scale of the web.

**Access control has shipped ahead of its standard.** Web Bot Auth is in production: an agent operator generates an Ed25519 key pair, hosts a public key directory at `/.well-known/http-message-signatures-directory`, and signs requests with HTTP Message Signatures (RFC 9421) carrying `Signature-Input`, `Signature` and `Signature-Agent` headers. Cloudflare's "signed agents" announcement (28 August 2025) named an initial cohort: ChatGPT agent (OpenAI), Goose (Block), Browserbase, Anchor Browser and Cloudflare's own Browser Rendering.

**Per-request payment exists and is small but lopsided.** x402, the protocol that finally uses HTTP 402, reports for the trailing 30 days: 75.41 million transactions, $24.24 million in volume, 94,060 buyers and 22,000 sellers, listing Alchemy, AWS, Cloudflare, Messari, Nansen, QuickNode, Stripe, Vercel and World among its users. Note the asymmetry — more than four buyers for every seller.

**The economics are already bleeding.** In the first four months of 2026, 68.01% of Google searches ended without a click, against 60.45% in 2024 and 49% in 2019 (SparkToro, on a Similarweb clickstream panel). Akamai's State of the Internet, as reported in the Brazilian trade press on 24 April 2026, found AI assistants generate roughly 96% less referral traffic than traditional search engines, with about 1% of users clicking through to cited sources; AI bot activity rose 300% during 2025, and training crawlers account for 63% of bot activity in the media sector.

**Nota sobre o Brasil.** The most verifiable Brazilian fact here is a negative one. The Brazilian coverage of this shift reports global numbers: the E-Commerce Brasil piece of 24 April 2026 carries Akamai's worldwide figures and contains no Brazil-specific data at all. There is no Brazilian equivalent of Cloudflare's 200,000-domain readiness scan, no published measurement of agent traffic against Brazilian sites, and no regulatory instrument addressing machine access to content. Brazil is discussing the agentic web with borrowed measurements — which, for a class that can run a script, is less a complaint than an opening. Section 10 is built on exactly that gap.

## 4. As disrupções-raiz

### 4.1. A página deixa de ser a interface: o site declara capacidades em vez de renderizar telas

**What it breaks:** the page as the unit of publication, of measurement and of design. If a site exposes typed tools with validated parameters, then layout, visual hierarchy, navigation and the ad slot are no longer where the site's function lives — they become one of two possible renderings of a function declared elsewhere. The craft of interface design loses its monopoly on the interface.

**Why now:** WebMCP moved from proposal to Draft Community Group Report between August 2025 and 10 September 2026, authored jointly by Microsoft and Google editors, with a concrete API surface (`document.modelContext`) rather than a manifesto. Underneath it, MCP stopped being one vendor's protocol on 9 December 2025 and now reports ~10,000 active servers and 97M monthly SDK downloads. The inversion of control — the site telling the agent what is possible instead of the agent reverse-engineering the DOM — has a spec, editors from the two companies that ship browsers, and an installed base of server implementations to imitate.

**What is still missing:** a reason for a site to do it. Declaring a tool removes the pageview that currently pays for the page — the incentive points backwards. The trigger that has not fired is a *business* one, not a technical one: some form of compensation attached to a tool call, or a competitive loss large enough that not declaring becomes more expensive than declaring. Cloudflare's own scan is the measure of this gap: fewer than 15 sites in 200,000.

### 4.2. O acesso da máquina passa a ser identificado, autorizado e medido — e cobrado por requisição

**What it breaks:** the implicit contract of the open web, which is that an anonymous GET is free and indistinguishable from any other. Web Bot Auth makes machine identity a precondition of access; per-request payment makes access a metered good. Together they turn "reading a page" from a right of anyone with a URL into a transaction between parties who know each other.

**Why now:** the pieces shipped before the standards finished. Web Bot Auth has been in production since 28 August 2025 with a named cohort of agent operators, and Cloudflare's April 2026 readiness score treats *bot access control* — Content Signals, AI bot rules in robots.txt, Web Bot Auth — as one of four graded dimensions, which tells you an infrastructure company now considers machine-access policy a normal property of a website. On the payment side, x402 has moved 75.41M transactions and $24.24M in 30 days with AWS, Stripe, Cloudflare and Vercel among its users. The economic pressure is documented: ~96% less referral traffic from AI assistants than from search, per Akamai.

**What is still missing:** settlement and leverage. A protocol that can charge is not a mechanism through which a publisher actually gets paid at scale — 22,000 sellers is nothing against the web. And the negotiating power is wildly unequal: a large publisher can strike a licence, while a small site has nothing to withhold that anyone wants. Without a default path for the long tail, metered access concentrates rather than compensates.

**Border note:** agent identity as a security problem is theme 2 and agent purchasing is theme 5. What is claimed here is only the *platform* consequence — that access becomes conditional and priced.

### 4.3. O visitante majoritário deixa de ser humano, e a métrica que financia a web perde referente

**What it breaks:** the attention-for-content barter. The ad-funded web rests on a chain — page served, eye present, attention measurable, impression sellable — and an agent breaks the second link while leaving the first intact. A site can be busier than ever and worth less than ever.

**Why now:** this is the only one of the three whose trigger has already fired. The crossover was reported on 4 June 2026 at 57.4% bots against 42.6% humans, about eighteen months ahead of the prediction of the person best placed to make it. Alongside it, 68.01% of Google searches ended without a click in early 2026 against 49% in 2019, and roughly 1% of users click a source cited by a chatbot.

**What is still missing:** nothing technical — which is precisely why this disruption has the most force and the least resolution. What is missing is a replacement revenue mechanism. The candidates are all visible and all small: metered machine access (4 buyers per seller), licensing (available to large publishers only), and placement inside the assistant itself (which moves the money to the assistant's owner).

**Triage note:** this root was admitted as a *practice and market* disruption, not a technology. It passes the rejection test in the skill's Phase 2 table — one can name exactly what it breaks right now — but it is worth flagging that its cause is partly shared with AI answers in search, which is not this theme. See section 7.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A pagina deixa de ser a interface — o site declara capacidades em vez de renderizar telas
    efeitos:
      - id: e1
        ordem: 1
        efeito: Sites passam a manter duas superficies — a pagina para humanos e um manifesto de capacidades para agentes
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O design de interface se divide em dois oficios — desenho de tela e desenho de affordance de maquina (nome de ferramenta, esquema de parametro, mensagem de erro)
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Formacao e portfolio de design passam a incluir especificacao de ferramenta como peca avaliavel, e escrever a descricao de uma ferramenta se torna funcao remunerada — o texto volta a ser interface, dirigido a um leitor nao-humano
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A metrica de um site deixa de ser pageview e passa a ser chamada de ferramenta concluida com sucesso
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Contratos de agencia e de conteudo passam a ser precificados por tarefa concluida pelo agente, e nao por audiencia ou impressao
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A camada visual deixa de ser onde a regra de negocio mora — o que o agente pode fazer e declarado, nao descoberto clicando
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Dark patterns perdem eficacia contra agente — friccao desenhada (cancelamento escondido, checkbox pre-marcado) nao sobrevive a uma interface tipada
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A fiscalizacao de direito do consumidor migra de "a tela era enganosa" para "a ferramenta declarada divergia do efeito" — a prova passa a ser o esquema, nao o screenshot
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O acesso da maquina passa a ser identificado, autorizado e medido — e cobrado por requisicao
    efeitos:
      - id: e3
        ordem: 1
        efeito: Acesso anonimo de maquina deixa de ser o default — agente sem chave assinada recebe menos do que um humano recebe na mesma URL
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Surge um mercado de reputacao de agente, em que operadores grandes negociam acesso em bloco e agentes independentes ficam de fora
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Construir um agente que navegue a web livremente deixa de ser questao de codigo e passa a ser questao de credencial — o "faca voce mesmo" da web se fecha para quem nao tem contrato
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O preco por requisicao de maquina se torna dado publico comparavel, e constar de um indice de preco passa a ser condicao de ser lido
            sinal: medio
            prazo: 2030
            confianca: baixa
      - id: e4
        ordem: 1
        efeito: Conteudo passa a ser publicado em duas tarifas — gratis para o olho, pago para o programa
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O paywall deixa de ser sobre quem le e passa a ser sobre o uso — o mesmo texto tem preco diferente se for citado, resumido ou usado em treino
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: '"Direito de leitura por maquina" se torna clausula padrao em contrato de autor e em licenca de imagem, como hoje e o direito de traducao'
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O visitante majoritario deixa de ser humano, e a metrica que financia a web perde referente
    efeitos:
      - id: e5
        ordem: 1
        efeito: A publicidade grafica perde base de medicao na cauda longa — impressao servida a agente nao vale nada, e a fraude fica indistinguivel do uso legitimo
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O dinheiro de midia se concentra onde ainda ha olho humano garantido — video, audio e a superficie dentro do proprio assistente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O assistente se torna o inventario premium da decada, e a disputa antitruste se desloca de "quem controla a busca" para "quem controla o que o agente considera"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Sites de conteudo medio — os que viviam de busca — desaparecem ou viram fornecedor de dado por contrato
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e6
        ordem: 1
        efeito: '"Visitar um site" deixa de ser experiencia para a maioria dos conteudos — o site continua existindo sem nunca ser visto'
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A identidade visual de marca perde funcao de reconhecimento no momento da decisao, porque a decisao acontece numa superficie que a marca nao desenha
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O investimento de marca migra de identidade visual para presenca canonica — dado estruturado, fato verificavel, entidade nomeada — e branding se torna, em parte, engenharia de dados
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

What the YAML cannot say is that these three branches run on different clocks, and that the map's real tension is the mismatch. Disruption 3 has already happened — its trigger fired in June 2026 — so its effects are the *earliest* in the tree despite being the least technological. Disruption 1 has the best specification and the worst adoption: fewer than 15 sites in 200,000, which means its 2028 first-order effect is a bet on an incentive that does not yet exist. Disruption 2 sits between them and is the hinge: it is the only one that could supply Disruption 1 with the missing business reason, by attaching a price to a tool call. If Disruption 2 stalls, Disruption 1's branch does not merely arrive late — it does not arrive, because nobody publishes a capability manifest for free while their pageview revenue evaporates.

Two further things the tree hides. First, the branches under e1 and e2 are effects on the *craft* (what a designer does), while those under e3 and e4 are effects on *access* (who may read), and those under e5 and e6 are effects on *money*. A map that mixed them would read as a single accelerating trend; separated, it becomes visible that the craft effects depend on the money effects and not the reverse. Second, e2.1 (dark patterns losing efficacy) is the only effect in this map that is unambiguously good for the user, and it arrives as a side effect of a change nobody made for that reason — which is the most reliable kind of good news and the least likely to be defended when it becomes inconvenient.

## 6. Sinais fracos e wildcards

**Weak signal 1 — the scoreboard was built before the game.** Cloudflare's Agent Readiness score grades a "Capabilities" dimension (Agent Skills, API Catalog, OAuth server discovery, MCP Server Cards, WebMCP) on which fewer than 15 sites out of 200,000 register anything at all. An infrastructure company is defining the metric of agent-readiness years before the practice it measures exists. Whoever defines that score defines what the web optimizes for next — the same position PageRank held, taken quietly and in advance.

**Weak signal 2 — the demand side is already bigger than the supply side.** x402 reports 94,060 buyers against 22,000 sellers in 30 days. That ratio says machines willing to pay for access outnumber services willing to sell it by more than four to one. Every story about this shift is told from the publisher's side ("will sites start charging?"), but the pressure in the data runs the other way: the buyers are waiting.

**Weak signal 3 — WebMCP puts the agent inside the session, not outside the door.** `document.modelContext` registers tools in a page the user already has open, with the user's own authorization. Every other piece of this map is about an agent arriving from outside and being let in or kept out; this one is about an agent that is already in, because the human brought it. (Where that leads is theme 2's object, not mine — but it matters here because it is the one path that needs no publisher cooperation and no payment rail.)

**Wildcard 1 — practice arrives before protocol and inverts the map's ordering.** A major browser ships agent mode on by default, pageviews in one content category fall 30% in a quarter, and the protocols get written afterwards to describe what already happened. This map assumes protocol then practice; that sequence is a habit of standards people, not a law.

**Wildcard 2 — the one that kills the map, and the one with the best source.** Google stated in May 2026 that `llms.txt` is not needed for any of its generative features, and the crawl data shows AI bots overwhelmingly fetching ordinary HTML. If models simply get good enough at reading pages built for eyes, the machine-readable layer never pays for itself, the bifurcation never happens, and everything in section 5 about "two surfaces" is wrong. What remains is not an agentic web but an ordinary web whose readers changed — a disruption of the audience, not of the platform. This is the wildcard I would bet against my own map on, because it is the only one currently supported by the largest operator's public position and by the crawl logs.

## 7. Contra o próprio mapa

**Confirmation of the premise handed to me.** The theme statement asserts that the web "is being reorganized for agents". Effects e1 and e6 come close to restating that assertion rather than deriving from evidence, and I marked both `review` in the adversarial round. I kept them because each names a measurable mechanism (a second published surface; a site that exists unvisited), but a reader should treat them as the premise's own children. The honest counter-reading of my own section 3 is that the web is *being read* by agents and is *not yet being reorganized* for them at all — 4% Content Signals, 3.9% markdown negotiation, under 15 sites with capability manifests.

**Loose cause on Disruption 3.** The 68% zero-click figure is a search phenomenon. It would have happened from AI answers in search results alone, with no agents browsing anything. So e5 is over-attributed: the agent layer accelerates the collapse of the attention metric but did not cause it, and I marked the effect `reconnected` rather than discarding it, since the 57.4% bot share is a genuinely separate mechanism. Anyone using this map for planning should not credit "agents" with damage that AI summaries did.

**Accelerated adoption in the 2028 dates.** e1 (two published surfaces by 2028) and e3 (signed access as default by 2028) assume adoption curves faster than the comparable precedent. HTTPS-by-default took roughly a decade from Let's Encrypt to ubiquity, and `robots.txt` is still misconfigured for AI on most of the 78% of sites that have one. If the standards follow that shape, the first-order effects land nearer 2030 and the third-order effects fall outside the horizon entirely — meaning the 2031 rows of this tree would be, at best, early instances rather than states of the field.

**Linear extrapolation risk in e3.2 and e4.1.** Both assume that a market appears wherever a metering technology appears. Metering has existed before without producing a market: micropayments have been repeatedly demonstrated and repeatedly failed since the 1990s, for reasons of transaction cost and cognitive load that x402 solves for machines but not for the publisher's side of the decision. Confidence on both is `baixa` for that reason.

**Selection bias in my own sources.** Cloudflare appears in four of my twelve sources, and Cloudflare is simultaneously the measurer of this shift, a seller of the tools that manage it, and a co-author of one of its standards. Its numbers are the best available and are also marketing for a product line. I have no independent measurement of agent-readiness to check them against — which is, not coincidentally, exactly what section 10 proposes building.

**What is absent because the class's ruler excluded it.** Per the course's cut, anything already common in mass-market product was set aside up front: REST APIs, scraping, `robots.txt`, Schema.org. Two of those exclusions are doing hidden work. Schema.org in particular may be the actual machine-readable layer of the agentic web — mature, widely deployed, already consumed — in which case the emerging-protocol story is a distraction and the real map is about a mature technology finding a new reader. I did not pursue that reading, and it may be the better one.

## 8. O que a máquina errou

**Error 1 — a fabricated URL, caught by a 404.** To source Google's position on `llms.txt` I went straight to `developers.google.com/search/docs/ai-optimization/ai-features-guide`, a plausible, well-formed, entirely invented path. It returned HTTP 404. The claim survives in this document only through a secondary analysis of the guidance, which is weaker sourcing than it appears in section 3, and I have marked it as such in section 11. The lesson is the one in the skill's own DUVIDAS.md: plausible structure is not evidence, and a confident URL is a guess in a URL's clothing.

**Error 2 — precise numbers I never opened.** Search summaries offered me a set of extremely quotable figures: ClaudeBot crawling 23,951 pages per referral; `llms.txt` adoption at 10.13% across 300,000 domains; 97% of `llms.txt` files receiving zero AI requests. Every one of them is the kind of specific-and-round number that DUVIDAS.md flags as a hallucination signal, and I did not open a single one of them. All three are excluded from sections 1 through 11 and recorded in section 12. Note how much stronger section 3 would have read with them in it — that is the temptation, precisely.

**Error 3 — I called a draft a standard.** My first pass described WebMCP as "a W3C standard". The specification itself says it is a Draft Community Group Report from a Community Group and explicitly not a W3C Standard. A Community Group report has roughly the standing of a well-organized proposal; presenting it as a ratified standard would have inflated Disruption 1's maturity by one whole category in the Phase 2 triage — and the triage is the thing that decides whether it belongs in the map at all.

**Error 4 — my own sources disagree and I nearly took the biggest number.** Not Human Search's homepage reports 5,316 sites indexed at an average score of 38/100; its GitHub README header says "8,000+ indexed sites" while the body says "1,900+ agent-first sites" plus "500+ MCP servers". Three numbers for one index. I used the homepage figure and recorded the divergence rather than choosing the most impressive one, which was the instinct.

**Error 5 — event dates collapsed into one.** Search results presented Cloudflare's July 2025 actions (default blocking of AI scraping, Pay Per Crawl beta) and its July 2026 actions (Pay Per Use, the mixed-crawler rule) as if they were a single policy, with the September 2026 deadline floating between them. I could not open a primary source for either the default-block flip or Pay Per Use, so neither appears in the disruptions' "why now" — Disruption 2 rests instead on the signed-agents post, the readiness score's treatment of access control, and x402's own numbers. Both claims are recorded as unverified in section 12. They are probably true; probably true is not a citation.

## 9. Três cenários para 2031

### 9.1. Provável

By 2031 the web had split, but along a different seam than the one people had predicted in 2026. There was never a general migration to machine-readable publishing: capability manifests remained a property of large commercial sites — retail, travel, banking, booking — where a completed transaction paid for the engineering, and stayed absent almost everywhere else. What did become universal was the access layer. Signed agent identity became the ordinary condition of machine reading, because it was cheap to demand and the infrastructure companies enabled it by default; by 2029 an unsigned crawler received a degraded response almost everywhere, and nobody experienced this as a policy change. Per-request payment settled into a middling role: real between machines and machines, negligible between agents and publishers, because the long tail had nothing worth metering. Display advertising in the middle of the market did not survive contact with a majority-machine audience — the money went to video, to audio, and above all to placement inside the assistants, which by 2031 were the most valuable inventory on the internet and were owned by four companies. The interface craft did not split in two as this map projected; instead a small specialty appeared inside product teams, writing tool descriptions and parameter schemas, and it was generally staffed by the same people who had been writing microcopy. The sites of the middle — the ones that had lived on search traffic — were mostly gone by 2030, and the ones that remained had become data suppliers under contract.

### 9.2. Desejável

By 2031 the reorganization had happened on terms that did not require a publisher to be large. The decisive move, in hindsight, was small and structural: capability declaration was specified so that it worked on a static site, with no server and no negotiation, which meant a university department or a municipal service could be agent-legible for the cost of one file — and, crucially, that declaring capabilities came bundled with a default compensation path rather than requiring a bilateral deal. Metered machine access arrived with a floor price and a collective settlement body, so the long tail was paid by default instead of being invited to negotiate alone. Agent identity was verifiable without being gatekept: signing a request cost nothing and required no commercial relationship, so a student in Recife could still write an agent that read the web, and the credential requirement never became a licence requirement. Public institutions went first — Brazilian federal and state services published capability manifests as part of their transparency obligations and, by doing so, produced the first Brazilian measurement of what agent-readiness even meant locally. The interface discipline absorbed the change rather than being displaced by it: designers specified what a service could do and then rendered it twice, once for eyes and once for programs, and treated the second rendering as a first-class artifact. Dark patterns did not survive the transition, because a typed interface has nowhere to hide a hidden cancellation. Getting here took three things that were contingent, not inevitable: a specification that favoured the small publisher, a default payment path that did not require a lawyer, and a decision — taken around 2028, against real pressure — not to let agent verification become agent licensing.

### 9.3. Indesejável

By 2031 reading the web by machine required a contract. Verification, which had arrived in 2025 as a way of distinguishing honest agents from disguised ones, had by 2029 become the mechanism by which four operators held the keys: their agents were signed, allow-listed and priced in bulk, and everyone else's received a degraded response or none. Building an agent stopped being an act of programming and became an act of procurement, which quietly ended the era in which a student could write something that read the whole web. Publishers, offered metered access without any collective structure, took the only deal available and licensed their archives to the same four operators — so content flowed into assistants and the assistants became the place where all decisions were made. The bifurcation the 2026 commentary had feared did occur, but it was not human-web versus machine-web; it was contracted-web versus everything else, and the uncontracted part became invisible rather than closed: still online, still served, never read. Brazil experienced the whole thing as a price-taker, having never measured its own baseline and having no instrument to require reciprocity; Brazilian content was read, summarized and monetized under agreements signed elsewhere, in currencies negotiated elsewhere. The early sign, visible already in 2027 and dismissed, was that nobody objected when unsigned agents began receiving less than humans on the same URL — a change to the fundamental default of the web, shipped as a security improvement, and noticed by almost no one.

## 10. O experimento

**What it is:** "O mesmo site, dois leitores" — a two-part measurement, buildable in a week, on 12 to 15 Brazilian sites chosen across categories (the CIn and UFPE sites, a large news portal, a mid-sized blog, a marketplace, a small e-commerce, a federal service such as gov.br, a municipal service, a bank).

Part one is a reproducible script that fetches, for each site: `/robots.txt`, `/llms.txt`, `/.well-known/` entries including `http-message-signatures-directory`, `/openapi.json` and common variants, `/.well-known/ai-plugin.json`, any Schema.org JSON-LD in the page, and the response to a request with `Accept: text/markdown`. It then scores each site on the *published* Not Human Search weights (llms.txt 25, ai-plugin.json 20, OpenAPI 20, structured API 15, MCP server 10, robots.txt 5, Schema.org 5), producing a Brazilian score distribution to compare against that index's global average of 38/100 and against Cloudflare's figures for the global top 200,000.

Part two is the test that matters. For each site, define one real, verifiable task — find the ementa and the prerequisite of a specific discipline; find the price and the delivery estimate for a specific item; find the phone number and the opening hours of a specific department; find the document required for a specific public service. Give each task to an agent and record: did it complete it, was the answer correct, how many requests did it make, and did anything block it. Then give the same tasks to the class by hand, with a stopwatch and a count of pages touched.

**What future question it helps answer:** does agent-readiness actually gate anything? This map's entire bifurcation thesis — Disruption 1, and the "two surfaces" branch under it — assumes that a site which is not legible to machines will be functionally unreachable by them. That assumption has never been tested on Brazilian sites, and Wildcard 2 says it may be false everywhere.

**What emerging technology it uses:** the agent-readiness scoring layer (emerging, with published weights, so reproducible) and an agentic browser or tool-using agent for part two. The fetching is mature technology — HTTP and a parser. The novelty is entirely in what is measured, which is why a class can do it.

**What the class will do when testing:** each student takes one site, runs the script on it, and performs two of its tasks by hand while timing themselves and counting pages. The agent runs the same tasks in parallel on a projector, so the room watches where it stalls. We then plot completion rate against readiness score and see whether there is any relationship at all.

**What result would make me change my mind:** if agents complete tasks at a high rate on sites scoring below 40 — which, given the global average of 38, will be most of the sample — then agent-readiness is not a gate, the bifurcation thesis is wrong, and Disruption 1 collapses into "agents read HTML fine". That would cut this map roughly in half and shift its weight entirely onto Disruptions 2 and 3, which are about access and money rather than about publishing format. Conversely, if completion correlates with score and the failures cluster on a specific missing signal, then that signal is the actual chokepoint of the Brazilian web, and it becomes a concrete thing to recommend to a specific set of site owners. Either result is publishable, which is the property I wanted: the experiment cannot come back empty.

## 11. Fontes

1. https://www.nbcnews.com/tech/tech-news/bot-web-traffic-overtaken-human-web-traffic-data-shows-rcna348522 — Cloudflare data, 4 June 2026: bots 57.4% of requests, humans 42.6%; Matthew Prince on the crossover arriving ahead of his own prediction. Supports Disruption 3's "why now". Reliability: high for the figures (major outlet reporting a named company's own measurement), medium for interpretation (the measurement is of Cloudflare's network, not the internet).
2. https://blog.cloudflare.com/agent-readiness/ — 17 April 2026. The four scored dimensions and the scan of the 200,000 most visited domains: robots.txt 78%, Content Signals 4%, markdown negotiation 3.9%, fewer than 15 sites with MCP Server Cards or API Catalogs. The single most important source in this map — it is what makes Disruption 1 a bet rather than a description. Reliability: high for the data, with the caveat that Cloudflare measures a market it sells into.
3. https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/ — 9 December 2025. MCP donated to the Agentic AI Foundation under the Linux Foundation; co-founders Anthropic, Block, OpenAI, with Google, Microsoft, AWS, Cloudflare, Bloomberg supporting; 97M monthly SDK downloads, ~10,000 active servers. Reliability: high for governance facts (primary source), medium for the adoption figures (self-reported, and "SDK downloads" is a weak proxy for use).
4. https://webmachinelearning.github.io/webmcp/ — Draft Community Group Report, 10 September 2026. `document.modelContext`, `registerTool()`, `getTools()`, `executeTool()`; editors Walderman (Microsoft), Sagar and Farolino (Google); explicitly not a W3C Standard. Primary source for Disruption 1. Reliability: high, and the status caveat is load-bearing — see section 8, error 3.
5. https://x402.org/ — trailing 30 days: 75.41M transactions, $24.24M volume, 94,060 buyers, 22,000 sellers; listed users include Alchemy, AWS, Cloudflare, Messari, Nansen, QuickNode, Stripe, Vercel, World. Supports Disruption 2 and Weak Signal 2. Reliability: medium — primary but promotional, with no methodology for the counters and no way to distinguish economically meaningful transactions from test traffic.
6. https://blog.cloudflare.com/signed-agents/ — 28 August 2025. Signed agents as a category; initial cohort ChatGPT agent, Goose, Browserbase, Anchor Browser, Cloudflare Browser Rendering. Reliability: high for the announcement; contains no traffic figures, contrary to what I expected when I opened it.
7. https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/ — technical mechanics of Web Bot Auth: Ed25519 keys, `/.well-known/http-message-signatures-directory`, `Signature-Input`/`Signature`/`Signature-Agent` headers over RFC 9421, operator obligations. Supports e3 and grounds the experiment's probe list. Reliability: high (vendor documentation of a shipped feature).
8. https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/ — 68.01% of Google searches ended without a click, Jan–Apr 2026, against 60.45% in 2024 and 49% in 2019; Similarweb clickstream panel, with stated adjustments and an acknowledged cross-year comparability problem. Reliability: medium — the trend is robust across panels, the precise decimals are not, and the author says so.
9. https://nothumansearch.ai/ — 5,316 sites indexed at an average score of 38/100; signals include llms.txt, ai-plugin.json, OpenAPI, AI bot support, Schema.org, MCP servers. The global baseline the experiment compares against. Reliability: medium — primary but self-reported, and inconsistent with its own repository (see section 8, error 4).
10. https://github.com/unitedideas/nothumansearch — the published scoring weights (llms.txt 25, ai-plugin.json 20, OpenAPI 20, structured API 15, MCP 10, robots.txt 5, Schema.org 5). Makes the experiment reproducible without depending on the service. Reliability: high for the weights (they are the code), low for the index-size claims in the same README.
11. https://www.ecommercebrasil.com.br/noticias/buscas-via-ia-cortam-mais-de-95-do-trafego-para-sites-mostra-estudo — 24 April 2026, reporting Akamai's State of the Internet: AI assistants generate ~96% less referral traffic than traditional search; ~1% of users click cited sources; AI bot activity +300% in 2025; training crawlers 63% of bot activity in media. Also the basis of the Brazil note, by what it lacks: no Brazil-specific data at all. Reliability: medium — secondary reporting of a vendor report I could not open directly; the "96%" is the kind of headline figure whose denominator I cannot inspect.
12. https://www.getpassionfruit.com/blog/should-i-create-an-llms.txt-file-google-s-2026-guidance-explained — Google's AI optimization guidance of 15 May 2026 stating llms.txt is not needed for AI Overviews, AI Mode or any generative Search feature; Wix Studio AI Search Lab (Oct 2025) estimating Google indexes 30,000–60,000 llms.txt files globally. Supports Wildcard 2. Reliability: **low to medium, and the weakest link in this document** — it is a marketing-agency blog standing in for a Google primary source I failed to find (section 8, error 1). Wildcard 2 is the most consequential claim in the map and rests on the worst source in it. Verify before using.

## 12. Anexo — o levantamento bruto

### Phase 1 — Framing interview, as conducted

The skill requires the interview and requires stopping for it. In this run there was no interlocutor available to answer in real time; the framing answers were supplied in advance with the theme, and the instruction was explicit not to stop for confirmation. Recorded verbatim as answered, with `null` where the skill's question had no answer:

1. **Exact theme:** "A internet agêntica: quando o usuário é uma máquina" (theme 4 of 19; family "Agentes").
2. **Cut:** infrastructure and platform — the web as a platform being redesigned for machines. Explicitly *not* security/identity (theme 2) and *not* commerce (theme 5).
3. **Horizon:** 2031.
4. **Audience:** those who design media and interaction.
5. **Geographic scope:** global, with a note on Brazil.
6. **Already discarded:** whatever is already common in mass-market product (the course's ruler). No other exclusion.
7. **Bias:** neutral. Suspected disruption: none given — "descubra". Obvious ideas to exclude: those that would serve any theme whatsoever.
8. **What the requester already knows / would change their mind:** evidence that adoption has passed Rogers' early majority, or that the technology ruptures nothing and merely improves what exists.

Deviation from the skill, declared: Phase 2 requires asking for confirmation of the triage table, and Phase 5 requires asking whether to re-run a disruption. Both questions were posed and both went unanswered by design; the standing instruction was to assume and declare rather than block. So the triage below was not confirmed by a human, and no disruption was re-run.

**Language decision, declared.** The skill states it operates in English while mandating the literal Portuguese section titles and frontmatter keys for the CIN0055 pipeline, and its own tested exemplar (TESTE.md) is written exactly that way: English prose body, Portuguese headings, Portuguese effect sentences inside the wheel YAML. This document reproduces that pattern rather than translating the body, on the grounds that the skill does address output language and its exemplar resolves the ambiguity. Accents are stripped inside the YAML block, also following the exemplar.

### Phase 2 — Technology maturity triage (full table, unconfirmed)

| Technology | Classification | Rationale |
|---|---|---|
| REST APIs, OpenAPI, SDKs | **Mature** | Market standard for over a decade. Cannot name what it breaks today. Enters section 3 as context, per the course ruler. |
| Scraping | **Mature** | Older than the problem. What changed is its scale and who does it, not the technique. |
| robots.txt | **Mature**, and misconfigured | 1994. Present on 78% of the top 200k domains, mostly not configured for AI agents. Mature technology in a new role — which is a distinct category the skill's table does not have. |
| Schema.org structured data | **Mature** | Widely deployed, already consumed by machines. Excluded as a root disruption by the ruler — and see section 7, where I flag that this exclusion may be a mistake. |
| MCP (the connector) | **Maturing fast — split decision** | By the skill's golden rule this is now mature for its audience: first-class support in ChatGPT, Claude, Cursor, Gemini, Copilot and VS Code, ~10k servers, foundation governance since Dec 2025. Two years old and already a standard. Rejected as a root disruption *in that form*. |
| MCP as the web's public surface (MCP Server Cards on `.well-known`) | **Emerging** | Fewer than 15 sites in 200,000. Viability demonstrated, scaling trigger absent. Admitted into Disruption 1. |
| WebMCP / `document.modelContext` | **Disruptive** | Inverts control between site and agent: the site declares, the agent no longer reverse-engineers. Draft CG Report, origin trial. Root of Disruption 1. |
| llms.txt | **Emerging with negative signal → discarded** | Technically coherent, but Google said in May 2026 it is not needed, crawlers fetch HTML instead, and the only figure I could open is 30k–60k files indexed globally. Discarded as a root disruption. It survives in the map only as Wildcard 2 — the evidence that the machine-readable layer may never pay off. Note the irony: the theme statement names it first. |
| Web Bot Auth / signed agents | **Emerging → scaling** | In production since Aug 2025 with a named cohort; IETF draft. Admitted as the *gatekeeping mechanism* inside Disruption 2, not as its own root, to respect theme 2's border. |
| x402 / HTTP 402 pay-per-request | **Disruptive, bordered** | Uses a status code reserved in 1997 and never implemented. Admitted only as the metering of *content access*; agent purchasing belongs to theme 5. |
| Agent-readiness scoring (Not Human Search, Cloudflare score) | **Emerging** | Not a disruption — an instrument, and a symptom. Appears as Weak Signal 1 and as the experiment's method. |
| Agentic browsers / AI crawlers | **Emerging in form, consequential in effect** | I have no opened source naming specific products, so no product is named in this map. The measured consequence (57.4% bot traffic) is what Disruption 3 rests on. |

Rejected as roots: REST/OpenAPI, scraping, robots.txt, Schema.org, MCP-as-connector, llms.txt. Six rejections, three roots admitted.

### Discarded rounds

**First attempt at the root set** produced four disruptions, with the fourth being "llms.txt e a publicação legível por máquina se tornam padrão editorial". Discarded in triage on the evidence above — Google's position plus the crawl behaviour plus a global index count in the tens of thousands. It would have been the most intuitive disruption in the map, given how the theme is framed, and it is the one the evidence most clearly refuses. Reframed into Wildcard 2, where its negative evidence does useful work.

**Second attempt** merged Disruptions 2 and 3 into one ("a economia da web se reorganiza"). Split because they fail differently: Disruption 2 needs a settlement mechanism that does not exist, while Disruption 3 has already happened and needs nothing. Merging them would have hidden the fact that one is a forecast and the other is a report.

### Cut and reconnected effects

- "Todo site publica um llms.txt até 2029" — **discarded**: linear extrapolation, and contradicted by the largest operator's stated position.
- "SEO desaparece e é substituído por AEO" — **discarded**: linear extrapolation of the strongest kind, in that AEO is largely the same vendors selling the same retainers under a new acronym; and loose cause, since it follows from AI answers in search (adjacent theme) rather than from the web being reorganized for agents. This was the single most tempting effect to keep, because the theme statement asks about it directly.
- "A web aberta acaba" — **discarded** as empty, per the skill's stopping criterion. No named mechanism. Replaced by e3.1.1, which names one: the barrier becomes a credential rather than code.
- "Agentes substituem navegadores até 2031" — **suspect**, accelerated adoption: no access or input technology has displaced its predecessor in five years. Rewritten as e6, which claims only that visiting stops being the experience for most content, not that the browser dies.
- "A publicidade digital acaba" — **rewritten** into e5 (loses its measurement base in the long tail) plus e5.1 (concentration where a human eye is guaranteed). The original was an outcome; the rewrite names the mechanism.
- "Plataformas de streaming oferecem modo agêntico" — **discarded**: loose cause, and imported by pattern-matching from the skill's own exemplar run on a different theme. Worth flagging as a specific failure mode of running a skill with a worked example in it — the example's effects want to reappear.
- e5 — **reconnected with reservation**: partially attributable to zero-click search rather than to agents. Kept under Disruption 3 because the 57.4% bot share is an independent mechanism, but the over-attribution is declared in section 7.
- e1 and e6 — **review**: closest to restating the premise handed to me. Kept, flagged in section 7.
- e3.2 and e4.1 — **suspect**, linear extrapolation: both assume a market follows a metering technology. Confidence set to `baixa`; the micropayment precedent is against them.

**Adversarial round summary, as the skill requires:** 6 effects discarded (4 in the tree, plus 2 candidate roots cut at triage that had already sprouted children); 5 kept with reservations (e1, e6 as `review`; e5 as `reconnected`; e3.2, e4.1 as `suspect`); 3 rewritten (e5, e6, and the e3.1.1 replacement for "a web aberta acaba"). Re-run of any disruption was offered and not requested; none re-run.

### Unverified claims — seen in search results, never opened, deliberately excluded

These are recorded so that a future reader can either verify or discard them, and so that their absence from sections 1–11 is legible as a choice rather than an oversight:

- ClaudeBot crawled 23,951 pages per referral in Q1 2026; Perplexity ~111:1; Google search ~4.9:1.
- Search-purpose crawling under 10% of AI crawler requests in May 2026, the other 90% being extraction.
- SE Ranking: 10.13% llms.txt adoption across 300,000 domains; only 1 of the 50 most AI-cited domains has the file; an XGBoost model improved when the llms.txt variable was removed.
- Ahrefs: 28% publish an llms.txt (self-described as an upper bound).
- 97% of llms.txt files receive zero AI requests; adoption up 8.8x in a year.
- Cloudflare blocked AI scraping by default from 1 July 2025 and launched Pay Per Crawl; replaced by Pay Per Use on 1 July 2026 with Ceramic.ai and You.com as first partners; from 15 September 2026 defaults block mixed-use crawlers on ad-bearing pages.
- Google referral traffic to publishers down 38% year over year; AI-referred traffic to US retailers up 393% YoY in Q1 2026 (Adobe).
- 94% of marketing leaders plan to increase AEO/GEO budgets in 2026; average enterprise allocating 12% of digital marketing spend to it.
- Web Bot Auth backed by Cloudflare, Amazon, Akamai and OpenAI, with an IETF working group chartered in 2026.
- MCP's 2026 roadmap includes MCP Server Cards exposed via `.well-known` URLs.
- Foil (`usefoil.com`): agent detection via 350+ signals, with allow/throttle/block control per agent identity.

The Cloudflare default-block and Pay Per Use items are the costly omissions — they would have strengthened Disruption 2's "why now" considerably. Disruption 2 was built without them.

### Failed searches and dead ends

- `developers.google.com/search/docs/ai-optimization/ai-features-guide` — HTTP 404. Invented path. See section 8, error 1.
- No Brazil-specific measurement of agent traffic, agent-readiness or machine access found. The Brazilian trade coverage reprints global figures. This is the gap the experiment exists to fill, and it is the most useful negative finding in the run.
- No Brazilian regulatory instrument addressing machine access to content. LGPD is about personal data, not about who may read a published page by program.
- No independent (non-vendor) measurement of agent-readiness at scale. Every figure available comes from a company selling into the market it measures. This is a real limitation of section 3 and the reason section 7 flags source concentration.
- No opened source quantifying what share of the 57.4% bot traffic is agentic-on-behalf-of-a-human versus crawling for training. The distinction matters a great deal for Disruption 3 — one is a reader, the other is an extractor — and I could not measure it.

### First-round output, before the adversarial pass

```
Disruptions: 4 (including llms.txt as editorial standard, cut at triage)
1st-order effects: 9
2nd-order effects: 11
3rd-order effects: 8
Problems found: 2 effects with loose cause, 2 with linear extrapolation,
1 with accelerated adoption, 1 empty ("a web aberta acaba"),
1 imported from the skill's own worked example.
```

Final: 3 disruptions, 6 / 9 / 7 effects across the three orders, with 6 of the 6 first-order branches reaching depth 3 (the skill requires at least 3). Verified by parsing the wheel YAML rather than by counting it by eye — my first count said "7 branches", conflating the 7 third-order effects with the 6 branches that carry them, since e1 carries two.

### Notes of doubt during construction

- The sharpest tension in this map is between its own sections 3 and 5. Section 3 says the publishing side is empty (fewer than 15 sites in 200,000). Section 5 projects a first-order effect of two published surfaces by 2028. That is a very large gap to cross in two years, and I do not have a mechanism that closes it — only the argument that Disruption 2 might supply the missing incentive. If a reader concludes the map is optimistic, this is where the optimism lives.
- Is Disruption 3 really this theme's, or does it belong to whatever theme covers AI in search? I admitted it because 57.4% bot traffic is a platform fact and not a search fact, but the money damage is shared with search, and a stricter reading would move half of it out.
- The `confianca` values were assigned mechanically per the skill's rule (alta/media/baixa by order), then lowered where warranted. The rule bothers me: it makes causal distance a proxy for epistemic confidence, and those are different things. e5 is first-order and over-attributed; e6.1.1 is third-order and fairly safe, since brand investment shifting toward structured data is already observable. Registered as a disagreement with the method rather than a deviation from it — the rule was followed.
- Cloudflare is four of my twelve sources and is the measurer, the vendor and a co-author of the standards. I used its numbers because they are the best that exist. That is not the same as them being neutral, and the experiment in section 10 is in part a response to that discomfort.
