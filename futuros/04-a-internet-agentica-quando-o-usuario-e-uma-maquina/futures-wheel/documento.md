---
titulo: "A internet agêntica: quando o usuário é uma máquina"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "4 de 19"
familia: "Agentes"
zona: "Agentes"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-11
mapa_completo: "futures-wheel-a-internet-agentica-quando-o-usuario-e-uma-maquina.md"
---

# A internet agêntica: quando o usuário é uma máquina

**Rodada com teto de 15 subagentes** (a skill prevê um expansor por ramo; aqui os ramos foram
agrupados, e 96 dos 116 efeitos de 2ª ordem ficaram sem expansão). Fase 8, infográficos,
pulada. O mapa completo — 207 efeitos (30 + 116 + 61), conexões cruzadas, wildcards e
260 fontes — está em `futures-wheel-a-internet-agentica-quando-o-usuario-e-uma-maquina.md` e no HTML de mesmo nome.

## A inovação

A web foi desenhada para olhos humanos e está sendo reorganizada para programas, em duas camadas que
avançam em velocidades diferentes. A **camada de declaração** — Model Context Protocol (spec estável em
28/07/2026, sob a Agentic AI Foundation), WebMCP em origin trial no Chrome, llms.txt, A2A v1.0, dado
estruturado — é a forma de um site dizer à máquina o que ele faz, em vez de desenhar para quem olha. A
**camada de porteiro e de caixa** — bloqueio de robôs por padrão na borda desde 15/09/2026, Content
Signals, RSL, pay-per-crawl virando pay-per-use, HTTP 402 e x402, Web Bot Auth no IETF — decide quem
entra e quanto paga. No meio, uma métrica nova: 'prontidão agêntica', nota de 0 a 100 para um visitante
que não tem olhos, não vê anúncio e não clica.

O estado da adoção é uma assimetria medida: robôs já são ~57% das requisições de página na rede da
Cloudflare, e a razão entre o que a IA lê e o que devolve em visitas vai de centenas a dezenas de
milhares por 1 — mas do lado de quem publica ainda é adoção de inovadores: menos de 15 dos 200 mil
maiores domínios com MCP Server Card, 3,9% negociando markdown, 97% dos arquivos llms.txt sem uma única
requisição em um mês. Quem adaptou a web para a máquina até agora foi o intermediário — CDN e CMS —, não
o autor. Fora do recorte, pela régua da disciplina: API REST, SDK e scraping, maduros; a resposta de IA
na busca e o zero-clique entram como **causa**, não como novidade. Fronteiras com os vizinhos:
identidade e detecção de agentes é o tema 2; pagamento e comércio por agentes é o tema 5.

**A tese.** A web agêntica não troca o leitor humano pelo leitor-máquina: ela troca um regime de acesso público e contestável por um conjunto de listas privadas decididas em changelog e formulário, instrumentadas por medidores que contam o custo e nunca o valor — de modo que o trabalho de quem projeta mídia e interação em 2031 é decidir de propósito o que hoje se herda do fornecedor, registrar no ato o que foi servido a quem, e investir na marcação semântica que serve à pessoa com deficiência, ao agente e à conta de tokens ao mesmo tempo.

## Os 30 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | O documento único acaba: a mesma URL passa a devolver conteúdos diferentes conforme quem pergunta | Tecnológico | alta | curto |
| `e1_02` | A versão-para-máquina do conteúdo deixa de ser decisão editorial e passa a ser produzida por um intermediário | Econômico | alta | curto |
| `e1_03` | 'Prontidão agêntica' vira nota pública, com peso e fórmula, e o placar é publicado por quem vende infraestrutura | Econômico | alta | curto |
| `e1_04` | Nasce um gênero de artefato publicado para um leitor que não vem: adoção de publicação sem adoção de consumo | Tecnológico | alta | curto |
| `e1_05` | O cargo de quem escreve para a web passa a redigir duas faces do mesmo documento, e a segunda é auditada por placar e vendida como serviço | Social | média | médio |
| `e1_06` | O investimento desloca-se de 'publicar' para 'ser citado': para o leitor-máquina, o site próprio pesa menos do que o que terceiros dizem… *(óbvio)* | Econômico | alta | curto |
| `e1_07` | A publicidade migra para uma camada que nenhum humano vê e que nenhuma regra de rotulagem alcança | Econômico | média | médio |
| `e1_08` | O comprador-máquina tem vieses que não são os humanos, e a participação de mercado passa a depender de release de modelo | Econômico | média | médio |
| `e1_09` | O design manipulativo é reescrito para enganar máquinas — e funciona melhor nelas do que em gente | Social | média | médio |
| `e1_10` | Quando o leitor é um modelo, qualquer texto de terceiros publicado numa página vira comando em potencial | Tecnológico | alta | curto |
| `e1_11` | O texto de ajuda virou código executável: a descrição de uma ferramenta, que existe para o modelo entender o que o serviço faz, é hoje o… | Tecnológico | alta | curto |
| `e1_12` | Forma-se uma web paralela, indexada e servida por terceiros, que o agente consulta em vez de visitar o site | Econômico | alta | curto |
| `e1_13` | Bloquear máquinas deixa de ser barreira técnica e vira posição de negociação — e a assimetria é desconfortável: é tecnicamente frouxo e… | Econômico | média | curto |
| `e1_14` | A fronteira relevante deixa de ser humano × máquina e passa a ser 'máquina que me cita' × 'máquina que me absorve' — e a taxonomia de robôs… | Político | alta | curto |
| `e1_15` | A doutrina do 'fetcher acionado pelo usuário' esvazia o robots.txt por dentro: quando o agente age em nome de uma pessoa, reivindica os… *(óbvio)* | Político | alta | curto |
| `e1_16` | O controle sobre o que a máquina lê migra do autor para a borda, e passa a ser exercido por padrão | Político | alta | curto |
| `e1_17` | A unidade de cobrança muda da visita para o uso: o conteúdo passa a ser precificado pelo que a máquina faz com ele, não por ter sido baixado *(óbvio)* | Econômico | média | médio |
| `e1_18` | Surgem serviços sem vitrine: o produto é a API, o cliente é o agente e a fatura é por requisição | Econômico | baixa | médio |
| `e1_19` | Acessibilidade ganha um segundo pagador — ou piora para os dois públicos ao mesmo tempo | Social | média | médio |
| `e1_20` | A interface humana volta — mas gerada dentro do agente, não na página de origem | Social | média | médio |
| `e1_21` | O custo de interpretação em tokens vira critério objetivo de escolha entre sites — uma métrica de ranqueamento que nenhum designer tinha no… | Econômico | média | médio |
| `e1_22` | A camada de declaração para agentes é construída antes de existir demanda por ela: padrão com tudo, menos usuários | Tecnológico | média | curto |
| `e1_23` | A web que se fecha para máquinas é a de qualidade; a que fica aberta é a de baixa confiabilidade — e há quem publique em escala industrial… | Social | alta | curto |
| `e1_24` | Escrever para um leitor-máquina escondido do leitor humano deixa de ser tática de operação de influência e chega ao documento pessoal | Social | média | curto |
| `e1_25` | Proteção por inadequação: estar mal preparado para agentes começa a funcionar como defesa, e a ilegibilidade vira escolha | Tecnológico | baixa | médio |
| `e1_26` | O painel com que o editor 'vê' os agentes é ele próprio enganoso, e decisões de milhões são tomadas sobre uma visualização mal desenhada | Tecnológico | média | curto |
| `e1_27` | O que decide o que o agente vê deixa de ser o índice de busca e passa a ser o registro e o gateway de ferramentas — um 'SEO de ferramentas'… | Econômico | média | médio |
| `e1_28` | Aparecem espaços em que provar-se máquina é a condição de entrada, e o humano vira o intruso | Social | baixa | longo |
| `e1_29` | A web para humanos começa a se diferenciar CONTRA a web para máquinas: publica-se o que a máquina copia mal | Social | média | médio |
| `e1_30` | No Brasil, a camada agêntica entra pela infraestrutura financeira e pela comunidade — não pela mídia — e a interação que resta ao humano… | Econômico | média | médio |

Quatro grupos organizam a leitura. **O documento e quem o escreve** (e1_01–06, e1_20–22, e1_29): a mesma URL passa a devolver coisas diferentes conforme quem pergunta, a face-máquina é produzida por um intermediário, nasce um placar de prontidão e nasce o cargo que trabalha para ele. **O dinheiro** (e1_07–08, e1_12–13, e1_17–18, e1_27): a publicidade migra para uma camada que ninguém vê, a unidade de cobrança muda da visita para o uso, e o índice de terceiros passa a ser consultado no lugar do site. **A confiança e a manipulação** (e1_09–11, e1_23–26): padrão obscuro funciona melhor em máquina do que em gente, todo texto de terceiro vira comando em potencial, e a ilegibilidade começa a ser usada como defesa. **Quem decide** (e1_14–16, e1_19, e1_28, e1_30): o controle sobre o que a máquina lê migra do autor para a borda e passa a ser exercido por padrão. Brasil: e1_30.

## Os 5 mais impactantes

*O porquê aparece aqui abreviado; o texto integral e a cadeia de efeitos estão no mapa completo.*

1. **`e1_16` — O controle sobre o que a máquina lê migra do autor para a borda, e passa a ser exercido por padrão.** É a raiz da cadeia mais consequente da árvore e a única com data marcada. Quando o bloqueio era opt-in, 5,7% dos sites o haviam ligado; a mesma empresa gere hoje o robots.txt de mais de 3,8 milhões de domínios, tem cerca de 82% do mercado de proteção contra bots e bloqueia por padrão desde 15/09/2026.

2. **`e1_01` — O documento único acaba: a mesma URL devolve conteúdos diferentes conforme quem pergunta.** Destrói, de uma vez, as três instituições que dependiam de a página ser uma só — arquivo, perícia e comprovante. A TIME serve 41.823 bytes de markdown a ClaudeBot, PerplexityBot e OAI-SearchBot contra 1,23 MB de HTML; como arquivistas coletam apresentando-se como navegador, a face-máquina não entra em acervo nenhum (e2_C28), o arquivo terá de escolher uma variante e essa escolha define qual passado existe (e3_G20), a perícia sobre manipulação de agente fica sem objeto reproduzível (e2_C03) e a publicidade agêntica nasce sem comprovante de veiculação (e3_G19).

3. **`e1_03` — 'Prontidão agêntica' vira nota pública, com fórmula, publicada por quem vende a infraestrutura.** É o efeito que move dinheiro e organograma sem ter passado por nenhuma verificação. A nota de 0 a 100 da Cloudflare (17/04/2026, quatro dimensões que correspondem uma a uma a produtos da própria empresa, e2_A11) gera orçamento, o orçamento gera o cargo — 883 vagas de GEO no Indeed, prêmio salarial de 31% (e2_A17) —, e a profissão nasce sem exame próprio, avaliada pelo placar de quem vende a infraestrutura (e3_D06).

4. **`e2_D09` — Se recusar o agente é recusar o usuário, controlar acesso passa a exigir identificar o usuário — e o conteúdo aberto encolhe em favor do login.** É a resposta da árvore à pergunta de 3ª ordem do enunciado sobre o que acontece com a web aberta, e ela não é a bifurcação esperada. A doutrina do fetcher acionado pelo usuário (e1_15) esvazia o robots.txt por dentro: o agente reivindica os direitos da pessoa por quem age.

5. **`e1_19` — Acessibilidade ganha um segundo pagador — ou piora para os dois públicos ao mesmo tempo.** É o único ponto da árvore em que 'fazer para máquina' entrega algo diretamente usável por gente, e por isso é onde a decisão de projeto tem o maior retorno — e o maior risco. Agentes leem pela mesma árvore de acessibilidade dos leitores de tela, o que cria pela primeira vez um caso de negócio que não depende de conformidade legal (sy3, cv3).

**O padrão por trás dos cinco.** Em cinco camadas independentes da pilha, uma decisão que era pública, verificável e contestável vira privada, declarativa e sem recurso — quem pode ler a web, quais ferramentas podem ser chamadas, que destinos o agente alcança, o que conta como publicidade legítima e o que conta como manipulação. Sempre com o mesmo desenho: entrada por formulário, critério discricionário, sanção eficaz, nenhum recurso. E o instrumento que deveria arbitrar não existe: mede-se o insumo (token, requisição, presença de arquivo, código de status) e nunca o valor (citação efetiva, tarefa concluída, agente que desistiu) — quem conta é sempre quem paga o custo, não quem produz o valor. A cascata se juridifica com a profundidade (Político: 10% → 22% → 33% das três ordens), com a ressalva de que o método exagera essa magnitude. Para quem projeta mídia e interação: o objeto de design deixa de ser a página e passa a ser um conjunto de saídas contratadas por classe de leitor (e3_E17), e a pergunta editorial inédita é qual delas é a versão de registro — a que se cita, a que se arquiva, a que um tribunal leria.

## Wildcards

9 cenários de baixa probabilidade e alto impacto — 3 positivos, 2 adversos, 4 ambivalentes.

- **w1 · O aferidor aparece: uma medição independente reprecifica cinco mercados no mesmo trimestre** (positivo). Entre 2028 e 2030, um consórcio sem interesse comercial no resultado — arranjo de institutos nacionais de registro de domínio, bibliotecas nacionais e universidades, com o CGI.br/NIC.br entre os fundadores — publica o primeiro painel….
- **w2 · O pedágio para o leitor que não veio** (adverso). A categoria de consumo agêntico da web pública não decola.
- **w3 · O agente passa a ler pixel, e o canal único de leitura não visual deixa de existir** (ambivalente). Uma geração de agentes chega a paridade de custo lendo a página renderizada como imagem, sem passar pelo DOM nem pela árvore de acessibilidade.
- **w4 · O Pix emite a prova de humanidade: o Brasil vira credenciador da web agêntica** (ambivalente). A pressão por regra de 'Know Your Agent' se converte, entre 2027 e 2029, numa norma do Banco Central que define como um agente prova agir por uma pessoa.
- **w5 · Treze palavras: o incidente que faz os modelos pararem de ler a web aberta** (adverso). Um episódio público e documentado — uma alegação falsa sobre medicamento, um dado econômico fabricado, uma orientação eleitoral — e rastreado até uma inserção paga de poucas dezenas de palavras num único endereço que os agentes recuperam….
- **w6 · O índice estruturado comum: a marcação vence e o pedágio some por consequência** (positivo). Entre 2028 e 2030, os operadores de índice para agentes concluem que manter cada um o seu rastreamento próprio é o maior custo do negócio e a menor fonte de diferenciação, e passam a consumir um índice público e compartilhado de dados….
- **w7 · A doutrina escrita em changelog cai num tribunal** (ambivalente). Entre 2028 e 2030, uma decisão judicial ou administrativa de alcance amplo — plausivelmente europeia, possivelmente brasileira — fixa que a requisição feita por um agente é ato do operador do agente, e não da pessoa que o acionou.
- **w8 · Não arquivado é não publicado: a presunção processual que obriga o depósito da face-máquina** (ambivalente). Por volta de 2030, uma disputa de grande visibilidade trava porque ninguém consegue produzir a página como ela foi servida — nem a variante que o agente leu, nem a versão que o modelo interpretou, e o modelo que a interpretou já foi….
- **w9 · A face-máquina é aberta às pessoas: o argumento que o Ministério Público ainda não usou** (positivo). Um inquérito civil brasileiro faz a pergunta que a árvore deixa armada e ninguém formulou: se a empresa consegue gerar, a custo próximo de zero, uma versão limpa, sem framework e sem ARIA quebrado, e servi-la a um robô, por que não a serve….

O que os nove revelam em conjunto está em `json/wildcards.json` e na nota completa.

## Nota Brasil

A posição brasileira não é atraso: é a combinação de três assimetrias medidas. **Mais aberto** — 93% de 4.025 sites de jornalismo sem nenhuma diretiva contra robôs de IA (e2_A16, e2_D26, e3_E19). **Menos legível** — 2,9% de aprovação em todos os testes de acessibilidade entre 26,3 milhões de sites ativos, contra 3,3% no ano anterior (e2_A24). **Mais consumidor que produtor** — 76% dos brasileiros pretendem usar IA para comprar, contra 44% nos EUA, e não existe nenhuma medição nacional de tráfego agêntico (e2_D28). Juntas: ser colhido sem contrapartida, ser lido mal, e ter a interface com a web definida por um agente estrangeiro. A consequência mais dura é datada e não foi decidida aqui — onde a taxa de configuração explícita é de ~7%, o padrão de fábrica que passou a valer em 15/09/2026 É a política (e3_G10). O país briga pelo valor e não pelo acesso: CADE, PL 2338 e acordos bilaterais operam na moeda do dinheiro, e nenhum tem instrumento sobre quem pode rastrear o conteúdo brasileiro — o desfecho possível é o jornalismo remunerado e o corpus em português inacessível a quem quisesse construir sem contrato (e3_G11, e3_G12). Duas exceções valem registro. A via de entrada é financeira: o Pix agêntico com confirmação humana por transação (e1_30) é o único arranjo da árvore em que a contagem nasce do lado de quem vende, e nasceu porque a regulação exigiu uma pessoa no circuito. E há um ponto em que o Brasil pode exportar em vez de importar: a injeção oculta em documento sob triagem automatizada, com sentença da 3ª Vara do Trabalho de Parauapebas (12/05/2026), Resolução CNJ 615/2025 e a régua fixada na ocultação, não no conteúdo (e2_C17, e3_D20).

## O que me faria mudar de ideia

- REFUTAÇÃO 1 — a adoção passar da maioria inicial (Rogers). Do lado de quem publica, a rodada mede adoção de inovadores: menos de 15 dos 200 mil maiores domínios com MCP Server Card ou API Catalog, 3,9% respondendo markdown, 8,7% dos mil maiores com llms.txt e 97% desses arquivos sem uma única requisição em maio de 2026.
- REFUTAÇÃO 2 — a tecnologia não romper nada, só melhorar o que existe. O resultado de Mannheim é o teste mais duro contra a própria árvore: se RAG sobre schema.org já publicado bate o protocolo dedicado em qualidade e custo (e2_A31, cp4), então a camada de protocolo é um desvio, e o que muda é incremental — dado estruturado melhor, servido mais barato.
- SINAL CONTRÁRIO — o default se fragmentar. Toda a cadeia mais forte da árvore (fl8, cp5, a cadeia brasileira) depende de um fornecedor com ~82% do mercado de proteção contra bots impondo um padrão de fábrica.
- SINAL CONTRÁRIO — aparecer contagem do lado do valor. Se um terceiro acreditado medir citação efetiva ou uso na resposta (o equivalente ao MRC na publicidade), cai o achado mais robusto da rodada (cp1) e com ele a leitura de que cinco mercados nasceram sem aferidor.
- SINAL A FAVOR que ainda não apareceu — a primeira decisão judicial ou administrativa que exija como prova a variante servida a um agente específico (e3_G15, e3_G21), e a primeira medição brasileira de tráfego agêntico, que não existe e é lacuna declarada nas cinco pesquisas. Se as duas aparecerem antes de 2028, o diagnóstico de cp3 (o artefato probatório tem de ser produzido no ato da publicação) deixa de ser previsão e vira requisito corrente de projeto.

## Bibliografia essencial

Seleção das fontes que sustentam os efeitos citados acima. A lista completa (260 fontes, com marcação do que foi aberto por inteiro) está no mapa completo.

1. Cloudflare Blog — 'Introducing the Agent Readiness score' (17/04/2026) — `https://blog.cloudflare.com/agent-readiness/`
2. Cloudflare Blog — 'Control content use for AI training with Cloudflare's managed robots.txt' (01/07/2025) — `https://blog.cloudflare.com/control-content-use-for-ai-training/`
3. TechCrunch — 'Cloudflare's new policy pushes AI companies to pay for publishers' content' (01/07/2026) — `https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/`
4. PPC Land — 'Cloudflare stops charging AI per crawl and starts paying per answer' — `https://ppc.land/cloudflare-stops-charging-ai-per-crawl-and-starts-paying-per-answer/`
5. Cloudflare Docs — 'Signed agents' (consultado 11/09/2026) — `https://developers.cloudflare.com/bots/concepts/bot/signed-agents/`
6. Luke Hogg e Tim Hwang — 'Cloudflare's Troubling Shift From Guardian to Gatekeeper', Tech Policy Press (09/07/2026) — `https://www.techpolicy.press/cloudflares-troubling-shift-from-guardian-to-gatekeeper/`
7. Steiner, Peeters, Bizer (Univ. Mannheim) — 'MCP vs RAG vs NLWeb vs HTML' (arXiv 2511.23281) — `https://arxiv.org/html/2511.23281`
8. Allouah, Besbes, Figueroa, Kanoria, Kumar — 'What Is Your AI Agent Buying?' / ACES (ACM Web Conference 2026, arXiv 2508.02630) — `https://arxiv.org/abs/2508.02630`
9. Gubbi Mohanbabu et al. — 'A11y-CUA Dataset' (CHI 2026, arXiv 2602.09310) — `https://arxiv.org/html/2602.09310`
10. WebAIM — 'The WebAIM Million' (fevereiro de 2026) — `https://webaim.org/projects/million/`
11. Search Engine Journal, Slobodan Manic — 'The accessibility tree is how AI agents read your site. It's breaking' (24/06/2026) — `https://www.searchenginejournal.com/the-accessibility-tree-is-how-ai-agents-read-your-site-its-breaking/578171/`
12. Zhao (Rutgers) & Berman (Wharton) — 'Strategic Response of News Publishers to Generative AI' (arXiv 2512.24968) — `https://arxiv.org/html/2512.24968v4`
13. PPC Land — 'Blocking AI crawlers doesn't stop citations — new data shows why' (estudo BuzzStream, 19/03/2026) — `https://ppc.land/blocking-ai-crawlers-doesnt-stop-citations-new-data-shows-why/`
14. Steinacker-Olsztyn, Gosain, Dao — 'Is Misinformation More Open?' (arXiv 2510.10315) — `https://arxiv.org/html/2510.10315v1`
15. Lopez-Fonseca, Rodriguez, Bechtold, Del Alamo — 'Do Generative AI Assistants Respect robots.txt?' (arXiv 2607.14447) — `https://arxiv.org/html/2607.14447`
16. Liu, Luo, Shan, Voelker, Zhao, Savage — 'Somesite I Used To Crawl' (ACM IMC 2025, arXiv 2411.15091) — `https://arxiv.org/html/2411.15091v1`
17. Ahrefs — estudo sobre llms.txt (137.210 domínios; 97% dos arquivos sem requisição) — `https://ahrefs.com/blog/llmstxt-study/`
18. Suganthan Mohanadasan — 'Cloudflare Markdown for Agents' (19/04/2026, 44 dias de logs) — `https://suganthan.com/blog/cloudflare-markdown-for-agents/`
19. Umesh Malik — 'Ads for AI agents: it's time for markdown crawlers' (06/08/2026; o caso TIME) — `https://umesh-malik.com/blog/ads-for-ai-agents-time-markdown-crawlers`
20. Not Human Search (nothumansearch.ai), consultado em 11/09/2026 — `https://nothumansearch.ai/`
21. MCP Queen — 'State of the MCP Ecosystem, July 2026' — `https://mcpqueen.com/reports/state-of-mcp-2026-07`
22. Model Context Protocol Blog — 'MCP Apps: Bringing UI Capabilities To MCP Clients' (26/01/2026, SEP-1865) — `https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/`
23. Anthropic — 'Design guidelines' para MCP Apps no Claude (consultado em 11/09/2026) — `https://claude.com/docs/connectors/building/mcp-apps/design-guidelines`
24. Arcade.dev — 'Smithery Is Now Part of Arcade.dev' (05/08/2026) — `https://www.arcade.dev/blog/smithery-joins-arcade/`
25. Sneh et al. — 'ToolTweak' (arXiv 2510.02554) — `https://arxiv.org/abs/2510.02554`
26. Cuvin, Zhu e Yang (Stanford) — DECEPTICON (arXiv 2512.22894v2) — `https://arxiv.org/html/2512.22894`
27. Unit 42 / Palo Alto Networks — injeção indireta baseada na web observada em uso real — `https://unit42.paloaltonetworks.com/ai-agent-prompt-injection/`
28. Migalhas — 3ª Vara do Trabalho de Parauapebas, multa por prompt oculto em petição (13/05/2026) — `https://www.migalhas.com.br/quentes/455817/juiz-multa-advogadas-que-esconderam-prompt-para-enganar-ia-da-justica`
29. IETF — draft-ietf-aipref-vocab-07 (18/08/2026) — `https://datatracker.ietf.org/doc/draft-ietf-aipref-vocab/`
30. Nerd Level Tech — 'Web Bot Auth in 2026: Shipped Before It's a Standard' — `https://nerdleveltech.com/web-bot-auth-ietf-standard-agent-verification`
31. RSL — comunicado do padrão (10/09/2025) — `https://rslstandard.org/press/rsl-standard`
32. Archer, Ghili, Haghpanah (Yale) — 'Pay-Per-Crawl Pricing for AI' (arXiv 2604.01416) — `https://arxiv.org/html/2604.01416v1`
33. Agentic Commerce Protocol — repositório e Product Feed Specification — `https://github.com/agentic-commerce-protocol/agentic-commerce-protocol`
34. Shopify Engineering — 'Building the Universal Commerce Protocol' (11/01/2026) — `https://shopify.engineering/ucp`
35. Semrush Newsroom — 'Expanded 2026 AI Visibility Index' (126 milhões de prompts) — `https://www.semrush.com/news/463141-semrush-releases-expanded-2026-ai-visibility-index-analyzing-126-million-ai-search-prompts/`
36. Nieman Journalism Lab — 'News publishers limit Internet Archive access due to AI scraping concerns' — `https://www.niemanlab.org/2026/01/news-publishers-limit-internet-archive-access-due-to-ai-scraping-concerns/`
37. Ben Thompson — 'The Agentic Web and Original Sin', Stratechery (mai/2025) — `https://stratechery.com/2025/the-agentic-web-and-original-sin/`
38. Jakob Nielsen — 'UX Roundup: Web Design for AI Agents' (31/07/2026) — `https://jakobnielsenphd.substack.com/p/ux-roundup-20260731`
39. Pattison, Boulos, Kolt, Li, Piccardi, Lazar — 'The Agentic Web Requires New Normative Infrastructure' (arXiv 2606.10711) — `https://arxiv.org/abs/2606.10711`
40. mcp-brasil (GitHub Mcp-Brasil/mcp-brasil, consultado 11/09/2026) — `https://github.com/Mcp-Brasil/mcp-brasil`
41. Iniciador — 'Iniciador lança o primeiro MCP de pagamentos agênticos via Pix' (19/05/2026) — `https://iniciador.com.br/conteudos/iniciador-anuncia-pagamentos-agenticos-full-stack-ai-toolkit`
42. CGI.br / NIC.br — programa de incentivo à pesquisa sobre impactos da IA na web (11/11/2025) — `https://cgi.br/noticia/releases/cgi-br-e-nic-br-lancam-programa-de-incentivo-a-pesquisa-sobre-impactos-da-inteligencia-artificial-na-web/`
43. Correio Braziliense — 'Cade aprofunda investigações contra Google por conteúdo jornalístico via IA' (abr/2026) — `https://www.correiobraziliense.com.br/politica/2026/04/7404499-cade-aprofunda-investigacoes-contra-google-por-conteudo-jornalistico-via-ia.html`
44. Search Engine Journal — 'OpenAI says robots.txt may not apply to ChatGPT's fetch bot' (14/08/2026) — `https://www.searchenginejournal.com/openai-says-robots-txt-may-not-apply-to-chatgpts-fetch-bot/585864/`

