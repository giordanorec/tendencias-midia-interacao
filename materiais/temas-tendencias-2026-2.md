# Temas de tendência — 2026.2

*CIN0055 · Tendências em Mídia e Interação · CIn/UFPE*
*Derivado de tudo o que a turma entregou no Hiper Deep Research (Inspiração + Desenvolvimento), lido em 03/09/2026.*

---

## Como esta lista foi feita

Foram lidas as **659 escolhas** que a turma fez nas duas unidades — as 50, as 5 e a 1 de cada
entrega —, os **13 documentos de método** e os **12 documentos de fontes**, sobre um catálogo
comum de **5.776 ferramentas** trazidas por 8 varreduras de inspiração e 6 de desenvolvimento.

O que se procurou não foi "o que apareceu mais", mas **o que, dentro do que apareceu, rompe
alguma coisa**. Tecnologia madura foi deixada de fora de propósito: three.js, Godot, OpenCV,
PyTorch, FastAPI e Leaflet estão no catálogo e não estão nesta lista, porque são o chão em
que as tendências pisam, não a tendência. A régua foi: **isto muda o que é possível fazer, ou
só faz mais rápido o que já se fazia?** Só entrou o que passa na primeira.

Cada tema abaixo tem o mesmo esqueleto:

- **A disrupção-raiz** — o que rompe, e por que agora.
- **O que a turma trouxe** — as ferramentas do catálogo que são o sinal, citadas pela varredura
  de onde vieram. É a evidência de que o tema não é invenção minha.
- **Onde passa a linha entre maduro e emergente** — para a skill de cada um saber o que recusar.
- **Perguntas que mobilizam a roda** — provocações de 1ª, 2ª e 3ª ordem. Não são respostas.
- **Sinais fracos e wildcards** — o que quase não aparece mas mudaria o mapa.
- **Fronteira com os vizinhos** — para dois alunos não fazerem o mesmo mapa com nomes diferentes.
- **Para a sua IA** — termos, entidades e fontes para a varredura do mapa.

**Regras de escolha:** um tema por pessoa, sem repetição. Dá para propor tema fora da lista,
com aprovação, desde que passe na mesma régua. A escolha é ao vivo na aula de 10/09, primeiro
a escolher fica com ele.

**Sobre o método:** a Roda dos Futuros é a proposta e a defesa do professor. Cada aluno pode
trazer outro método, desde que seja **pelo menos tão bom** para explorar consequências
encadeadas — e que a skill dele diga por quê.

---

## Os 19 temas, em um olhar

| # | Tema | De onde veio o sinal mais forte |
|---|---|---|
| 1 | Programação agêntica: o desenvolvedor vira orquestrador | varreduras de IA para programação; escolhas nº 1 de duas entregas |
| 2 | Contenção, segurança e identidade de agentes autônomos | varreduras de IA para programação e de auth sem terceiros |
| 3 | A infraestrutura de confiança: memória, observabilidade e avaliação de agentes | varreduras de IA/mídia/interação e de simulação |
| 4 | A internet agêntica: quando o usuário é uma máquina | varreduras de IA/mídia/interação; MCP como destaque |
| 5 | Agentes com carteira: comércio agêntico e mercados de máquinas | varreduras de voos/milhas e de IA/mídia/interação |
| 6 | Sociedades simuladas: a simulação como instrumento de investigação | varredura inteira sobre simulação de agentes |
| 7 | NPCs generativos e mundos vivos | varreduras de simulação e de storytelling |
| 8 | Narrativa gerativa e coautoria | varredura de storytelling e mundos virtuais |
| 9 | Agentes corporificados, IA física e modelos de mundo | varreduras de visão/XR/robótica e de simulação |
| 10 | Captura de realidade e renderização neural | varreduras de visão/XR/robótica e de storytelling |
| 11 | Máquinas que veem qualquer coisa: visão de vocabulário aberto | varredura de visão/XR/robótica |
| 12 | Mídia sintética controlável: vídeo e imagem | amostra do professor; varreduras de storytelling e de IA |
| 13 | Voz e som gerativos | varreduras de storytelling e de IA; amostra do professor |
| 14 | Gerar geradores: design procedural e creative coding com IA | varredura de storytelling e mundos virtuais |
| 15 | O navegador como console: 3D e XR sem instalação | varreduras de storytelling e de visão/XR |
| 16 | IA local: no dispositivo e no navegador | varredura de IA/mídia/interação; escolha nº 1 de desenvolvimento |
| 17 | Soberania de dados: local-first, ponta-a-ponta e o fim da senha | varreduras de finanças privadas e de auth sem terceiros |
| 18 | Bem-estar digital e design de fricção | varredura inteira sobre bem-estar digital |
| 19 | Companheiros digitais e IA afetiva | varreduras de bem-estar digital e de simulação |

---

## 1 · Programação agêntica: o desenvolvedor vira orquestrador

**A disrupção-raiz.** Escrever código deixou de ser o gargalo. O agente lê o repositório,
planeja, edita vários arquivos, roda os testes, abre o PR. O que sobra para o humano é
especificar, verificar e responder pelo resultado — e uma técnica nova, que quase nenhum
currículo ensina: a de construir *com* o agente. Não é autocompletar melhor. É outro ofício.

Por que agora: os modelos passaram a sustentar sessões longas com ferramentas; a interface
virou o terminal, não o editor; e apareceu uma camada de **skills** e **harnesses** —
instruções empacotadas que o agente carrega — que transforma prompt em software.

**O que a turma trouxe.** É o tema com mais evidência do catálogo inteiro. A escolha nº 1 da
varredura sobre IA para programação foi `google/agents-cli`, "CLI e skills que transformam
qualquer assistente de código num especialista em criar, avaliar e implantar agentes". A
escolha nº 1 de desenvolvimento da varredura de storytelling foi `claude-code` — um aluno de
mundos virtuais escolheu, entre 500 bibliotecas, o agente de código. Ao redor: `cline`,
`plandex`, `@github/copilot` (CLI), `charmbracelet/crush`, `openinterpreter`, `agentty` (um
binário estático, qualquer modelo), `jrswab/axe` (agentes de propósito único em TOML,
disparados de pipe, git hook ou cron), `JetBrains/junie`, `aider`, `opencode`, `kilocode`,
`GPT Engineer`. E a camada de cima: `three-man-team` (Arquiteto, Construtor, Revisor),
`oh-my-agent` (harness que verifica o trabalho por artefatos), `OpenAgentsControl` (plan-first
com aprovação), `HarnessRouter` e o "Unified Harness Protocol" — uma API para rodar Codex,
Claude Code, Hermes e outros por uma interface só. `NVIDIA/skills` e `agentskills/agentskills`
mostram skills virando produto.

**Onde passa a linha.** Autocompletar de IDE é maduro. Chat que explica código é maduro. O
emergente é o agente que **age** — executa, abre PR, coordena outros agentes — e a
infraestrutura que nasce para governar isso (harness, skill, protocolo).

**Perguntas que mobilizam a roda.**
- 1ª ordem: se o custo de escrever código cai perto de zero, o que acontece com o tamanho dos
  projetos? Com o número de projetos? Com o que se ensina num curso de computação?
- 2ª ordem: se todo mundo produz dez vezes mais código, quem revisa? A revisão vira o gargalo
  novo? O que acontece com a dívida técnica quando ninguém leu o que foi escrito?
- 3ª ordem: se o software fica barato e abundante, o que muda no valor de uma empresa de
  software? No emprego de quem entra hoje na faculdade? Na relação entre quem sabe programar e
  quem sabe especificar?

**Sinais fracos e wildcards.** `vibe-log` e `claude-tap` — ferramentas para *inspecionar o que
o agente fez*; a auditoria do processo pode virar mercado. Um wildcard: um incidente grave
causado por agente autônomo em produção que leve a regulação de "quem responde pelo código".

**Fronteira com os vizinhos.** Segurança e contenção do agente é o tema 2. Memória,
observabilidade e avaliação é o tema 3. Aqui o objeto é **o ofício de programar** e o que
acontece com ele.

**Para a sua IA.** Termos: *agentic coding, coding agent, harness, agent skills, MCP server,
multi-agent development, spec-driven development, plan-first, terminal agent*. Entidades:
Claude Code, Codex CLI, Cursor, Cline, Aider, OpenCode, Copilot CLI, Gemini CLI, Hermes.
Fontes além do GitHub: changelogs dos fabricantes, Hacker News, SWE-bench e Terminal-Bench
(para medir a curva), pesquisas de uso (Stack Overflow Survey, JetBrains State of Developer
Ecosystem).

---

## 2 · Contenção, segurança e identidade de agentes autônomos

**A disrupção-raiz.** Um agente que executa comandos, navega e chama APIs é um ator no mundo —
e o mundo não estava preparado para atores que não são pessoas. Aparecem, ao mesmo tempo, o
problema (injeção de prompt, comando destrutivo, exfiltração de segredo, agente se passando
por humano) e uma indústria inteira de resposta: sandboxes, guardrails, detectores, e o mais
revelador de todos — **identidade para agentes**.

Por que agora: os agentes saíram do chat e ganharam mãos. Cada mão nova é uma superfície de
ataque nova.

**O que a turma trouxe.** Da varredura sobre IA para programação: `arrakis` (sandbox em MicroVM
com backtracking), `SWE-ReX` (execução isolada), `bromure`, `VibePod` (agentes em contêiner com
métricas e rastreio de tráfego HTTP), `rivet.dev/agentOS` (um sistema operacional virtual por
agente, isolamento WebAssembly, "92 vezes mais rápido que uma frota de microVMs"),
`destructive_command_guard`, `cc-safety-net` (hook que bloqueia comando destrutivo e acesso a
segredo antes de executar, para doze agentes diferentes), `securitycards` (guia de segurança
por biblioteca e versão para o agente), `aislop` e `skylos` (caçam o lixo que o agente deixa —
código morto, erro engolido, segredo). Da varredura sobre IA/mídia/interação: `PromptTrace` —
sete laboratórios de injeção de prompt e um CTF de quinze níveis; `Foil` — SDK que **detecta
agentes de IA e bots**; `claude-tap` — intercepta e inspeciona o tráfego de API do agente. E o
sinal mais forte, vindo de onde ninguém esperava — da varredura sobre autenticação sem
terceiros: `@better-auth/utils` traz um **"Agent Auth Protocol": identidade de agente, registro
e autorização baseada em capacidades**. Agentes estão ganhando conta.

**Onde passa a linha.** Firewall, antivírus, OAuth para humanos: maduros. O emergente é tudo
que trata o agente como principal de segurança — que precisa de identidade, permissão,
isolamento e trilha de auditoria próprios.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se o agente precisa de identidade, quem a emite? Ela é do usuário, do modelo, do
  fabricante? O que acontece quando dois agentes de pessoas diferentes se encontram?
- 2ª ordem: se sites passam a distinguir humano de agente (e cobrar diferente, ou bloquear),
  o que acontece com quem depende de agente para acessar — pessoa com deficiência, por
  exemplo? Nasce um mercado de "parecer humano"?
- 3ª ordem: se o agente responde por atos com sua própria identidade, ele tem responsabilidade
  jurídica? Seguro? Reputação transferível entre plataformas?

**Sinais fracos e wildcards.** `agentOS` em WebAssembly sugere que o isolamento pode ficar
barato o bastante para cada tarefa rodar em seu próprio mundo. Wildcard: o primeiro processo
judicial contra um agente, não contra seu dono.

**Fronteira com os vizinhos.** O ofício de programar com agentes é o tema 1. Se o agente
*acertou* — avaliação e observabilidade — é o tema 3. Identidade *humana* sem terceiros
(passkeys) é o tema 17. Aqui o objeto é **conter e identificar a máquina que age**.

**Para a sua IA.** Termos: *agent sandbox, prompt injection, agent identity, agent
authentication, bot detection, agent guardrails, capability-based authorization, MicroVM,
WebAssembly isolation*. Entidades: OWASP Top 10 for LLM Applications, Agent Auth Protocol,
E2B, Firecracker, gVisor, Cloudflare (bot management e "AI crawlers"). Fontes: relatórios de
segurança dos fabricantes de modelo, CVE, papers de red-teaming, o próprio PromptTrace.

---

## 3 · A infraestrutura de confiança: memória, observabilidade e avaliação de agentes

**A disrupção-raiz.** Se a máquina fabrica o produto, avaliar o produto mede a máquina. A
pergunta muda de *"o que foi entregue?"* para *"por que isso está certo?"* — e isso exige ver
o caminho: cada chamada, cada decisão, cada tentativa que falhou. Ao mesmo tempo, o agente que
**lembra** entre sessões deixa de ser ferramenta e vira algo que acumula: contexto, decisões,
erros já cometidos. Memória e auditoria são as duas faces de uma mesma infraestrutura: a que
permite confiar num sistema que ninguém consegue ler por inteiro.

Por que agora: os agentes ficaram bons o bastante para ninguém conferir tudo, e caros o
bastante em contexto para que "lembrar" precise ser engenharia.

**O que a turma trouxe.** Memória, da varredura sobre IA para programação: `projectmem`
("registra tentativas, correções e decisões, e avisa o agente antes que ele repita uma
abordagem que já falhou"), `deja-vu` (indexa meses de sessões que os agentes já gravaram em
disco, sem LLM, um binário Go), `memtrace` (grafo bitemporal, zero chamadas a LLM), `lean-ctx`
("controla o que a IA pode ver — 60 a 90% menos tokens"), `sigmap`, `cased/kit`,
`codegraph-rust`, `airweave`, `cocoindex`, `Hindsight` (memória de longo prazo). Observabilidade
e avaliação, da varredura sobre IA/mídia/interação: `langfuse`, `opik`, `Phoenix`, `MLflow`,
`Weights & Biases`, `promptfoo` (testa prompts, agentes e RAGs; red-teaming), `vibe-log`,
`agent-qa` (QA que aprende a cada execução), `MathEval` (30 mil problemas), e `Nof1` — cada
modelo recebe **dez mil dólares de dinheiro real** e opera no mercado com o mesmo prompt. Da
varredura sobre simulação: `Rath` (grava cada execução como sessão auditável e comparável),
`Parseable` (lago de telemetria de agentes), `Agnost` (extrai falha silenciosa e frustração das
conversas reais), `agent-inspect` (coeficiente de Gini da simulação em tempo real).

**Onde passa a linha.** Logs e métricas de aplicação são maduros. Teste unitário é maduro. O
emergente é a avaliação de sistemas **não determinísticos** — em que rodar duas vezes dá dois
resultados — e a memória que atravessa sessões e ferramentas.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se o agente lembra tudo o que você já pediu, o que acontece com a privacidade
  entre projetos? Entre pessoas na mesma equipe? Entre empregos?
- 2ª ordem: se a avaliação de IA vira profissão (o "avaliador" que certifica que o sistema
  presta), quem certifica o avaliador? Surge uma auditoria de IA como surgiu a auditoria
  contábil?
- 3ª ordem: se um sistema com memória de anos fica "melhor" do que um novo, a memória vira o
  ativo — e trocar de fornecedor vira impossível? A memória do agente é sua ou da plataforma?

**Sinais fracos e wildcards.** `Nof1` é o sinal mais duro: avaliação com consequência real, em
dinheiro. Wildcard: uma exigência regulatória de trilha de auditoria para toda decisão tomada
por IA em serviço público.

**Fronteira com os vizinhos.** Conter o agente é o tema 2. O ofício de programar com ele é o
tema 1. Aqui o objeto é **saber o que o agente sabe e conferir o que ele fez**.

**Para a sua IA.** Termos: *LLM observability, agent memory, long-term memory, agent
evaluation, evals, LLM-as-judge, trace, replay, deterministic replay, context engineering,
token reduction*. Entidades: LangSmith, Langfuse, Arize Phoenix, Braintrust, OpenTelemetry
GenAI semantic conventions, Mem0, Letta, Zep. Fontes: documentação dos frameworks, benchmarks
públicos, papers sobre avaliação de agentes (SWE-bench, τ-bench, GAIA).

---

## 4 · A internet agêntica: quando o usuário é uma máquina

**A disrupção-raiz.** A web foi desenhada para olhos humanos. Está sendo reorganizada para
agentes: `llms.txt` em vez de página, MCP em vez de API REST documentada para pessoas,
"prontidão agêntica" como métrica de um site. Quando o principal visitante de uma página é um
programa, muda o que se publica, como se cobra e para quem se otimiza.

Por que agora: o Model Context Protocol virou o conector universal em menos de dois anos; os
fabricantes de agente passaram a navegar; e sites começaram a reagir — ora abrindo portas para
máquinas, ora fechando.

**O que a turma trouxe.** `Model Context Protocol` foi destaque na varredura sobre IA/mídia/
interação. `Not Human Search` — "motor de busca para agentes, indexa 9.000+ ferramentas e APIs,
pontua cada uma em prontidão agêntica: llms.txt, OpenAPI, MCP, ai-plugin.json". `Bonnard` — MCP
governado e multi-tenant sobre o data warehouse do cliente. Da varredura de desenvolvimento em
IA: uma explosão de MCP servers — `photoshop-mcp` (118 ferramentas para controlar o Photoshop
por linguagem natural), `mcp-server-hedra`, `mcp-image`, `gemini-multimodal-mcp`, `overture-mcp`
(visualizar o plano do agente antes que ele escreva código), `openrouter-mcp` (consenso entre
modelos), `atlassian-mcp-server` (oficial). `manim-web-mcp`. `Composio` e `ACI.dev`
("600+ ferramentas em qualquer IDE agêntica por um MCP unificado"), `Klavis`. Do outro lado,
`Foil` detecta agentes — o mesmo sinal do tema 2, visto de outro ângulo: a web decidindo quem
entra. E o reverso: `x402-flight-search` — busca de voos com **pagamento por requisição** pelo
protocolo x402, feita para ser consumida por máquina.

**Onde passa a linha.** APIs REST, SDKs, scraping: maduros. O emergente é a **camada de
protocolo** e de descoberta feita para agentes — e a bifurcação entre sites que se abrem e
sites que se fecham.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se o agente lê o site no seu lugar, o que acontece com a publicidade? Com o
  design de interface? Com o SEO — vira "AEO", otimização para agentes?
- 2ª ordem: se a página deixa de ter valor porque ninguém a vê, quem paga pelo conteúdo que
  alimenta o agente? Sites passam a cobrar por requisição de máquina (o que x402 já faz)?
- 3ª ordem: se a web se divide em "para humanos" e "para máquinas", o que acontece com a web
  aberta? Com o acesso de quem não tem agente? Com a noção de "visitar um site"?

**Sinais fracos e wildcards.** `Not Human Search` pontuando sites por prontidão agêntica é um
ranking novo nascendo — o PageRank da era dos agentes. Wildcard: um grande portal bloquear
todos os agentes e a audiência não notar.

**Fronteira com os vizinhos.** Identidade e detecção de agentes é o tema 2 (o lado da
segurança). Pagamento e comércio por agentes é o tema 5. Aqui o objeto é **a web como
plataforma sendo reprojetada para máquinas**.

**Para a sua IA.** Termos: *Model Context Protocol, llms.txt, agentic web, agent-ready,
machine-readable web, AI crawler, robots.txt AI, Web Bot Auth, HTTP 402, pay-per-crawl*.
Entidades: Anthropic (MCP), Cloudflare (pay-per-crawl, AI Audit), OpenAI (Operator/ChatGPT
Agent), Google (Agent2Agent), Not Human Search. Fontes: especificações de protocolo, blogs
de infraestrutura (Cloudflare, Vercel), Hacker News, discussões em W3C/IETF.

---

## 5 · Agentes com carteira: comércio agêntico e mercados de máquinas

**A disrupção-raiz.** Um agente que pode **pagar** é uma coisa diferente de um agente que
pode ler. Do lado do consumidor: a IA que pesquisa a passagem, compara, negocia e compra. Do
lado dos mercados: modelos operando com dinheiro real, agentes negociando entre si, empresas
simuladas. O dinheiro é a última fronteira da agência — e está sendo cruzada.

Por que agora: protocolos de pagamento máquina-a-máquina (HTTP 402 revivido), APIs de reserva
abertas a programas, e a primeira geração de benchmarks em que o resultado é medido em
dólares, não em pontos.

**O que a turma trouxe.** A varredura inteira sobre voos e milhas é um catálogo do
**substrato** do comércio agêntico em viagens: `duffel` (buscar, reservar e gerenciar voos por
API), `smiles` (voos com milhas por API), `FlightReserveAPI`, `amadeus`, `skyscanner`,
`Cheap_Flight_SMS_Alert` (monitora e avisa), `FlyClaw` (agrega quatro fontes), dezenas de
scrapers para onde a API oficial não chega, e `x402-flight-search` — "cobra por consulta". Da
varredura sobre IA/mídia/interação: `Nof1` — modelos com dez mil dólares reais cada, mercados
reais, prompt idêntico; `Cod3x` — estratégias de trading multiagente sem código; `Coinugget`;
`Hindsight` para "agentes de trading com memória persistente". Da varredura sobre simulação:
`Wall Street of AI Agents` (corretora povoada por agentes), `Agent Valley` (30 empresas de IA
em 8 segmentos, valuations e falências), `MagiCrew` (agentes como funcionários digitais com
acesso a ERP e CRM). Da varredura sobre bem-estar: `Pinky-Pact` — apostas em cripto como
compromisso de hábito, com testemunhas.

**Onde passa a linha.** E-commerce, pagamento online, comparador de preços: maduros. O
emergente é **o agente como parte contratante** — que escolhe, paga e responde — e a
infraestrutura que nasce para isso.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se o agente compra a passagem, para quem a companhia aérea vende — para a pessoa
  ou para o agente? O que acontece com programa de fidelidade quando o agente troca de
  companhia sem lealdade nenhuma?
- 2ª ordem: se agentes negociam com agentes, a que velocidade o preço muda? Reaparece o
  problema do trading de alta frequência, agora no varejo?
- 3ª ordem: se um agente age com dinheiro do dono e erra, de quem é o prejuízo? Nasce o
  seguro para agentes? Nasce um "score de crédito" para agentes?

**Sinais fracos e wildcards.** `Pinky-Pact` mostra dinheiro sendo usado como mecanismo de
compromisso pessoal — cripto como fricção comportamental. Wildcard: uma companhia aérea
lançar tarifa exclusiva para agentes, mais barata, porque agente não liga para o call center.

**Fronteira com os vizinhos.** A web reprojetada para agentes é o tema 4 (protocolo e
descoberta). Mercados simulados como *instrumento de pesquisa* são o tema 6. Aqui o objeto é
**dinheiro nas mãos de máquinas** — comércio, mercado, trabalho pago.

**Para a sua IA.** Termos: *agentic commerce, agent payments, x402, machine-to-machine
payments, AI agent trading, autonomous procurement, agent wallet, agentic booking*.
Entidades: Duffel, Amadeus for Developers, Stripe (agent toolkit), Coinbase (x402), Visa/
Mastercard (agentic commerce), Nof1, Skyfire. Fontes: anúncios de bandeiras de cartão e
processadores, blogs de fintech, Hacker News, o próprio catálogo de APIs de viagem.

---

## 6 · Sociedades simuladas: a simulação como instrumento de investigação

**A disrupção-raiz.** Colocar uma sociedade de agentes num ambiente controlado, rodar
possibilidades e observar o que emerge. Não é jogo, não é produtividade: é **instrumento** —
o equivalente, para ciências sociais e para design de plataforma, do que o túnel de vento é
para a aerodinâmica. Testa-se a política antes de aplicá-la, o algoritmo de recomendação
antes de lançá-lo, a dinâmica de desinformação antes que ela aconteça.

Por que agora: em 2023 um experimento com 25 agentes numa cidade virtual organizou uma festa
sem roteiro. Em 2026 há plataformas declarando um milhão de agentes.

**O que a turma trouxe.** A varredura inteira de um aluno é sobre isto, com critérios
explícitos: múltiplos agentes se afetando, dá para ver por dentro, ambiente configurável,
produz dado analisável. A escolha nº 1: `Generative Agents` (agentes que percebem o mundo por
captura de imagem e consultam o próprio modelo para decidir). Os destaques: `Argentor` (dez
personagens com diário próprio numa cidade, "esquecem de comer"), `Luvoire` (grade 60×60, até
10 mil agentes, replay determinístico, artefatos por hash SHA256), `y-not.social` (uma rede
social inteira povoada por agentes, para estudar recomendação e desinformação), `Rath`. Ao
redor: `OASIS` (interação social em escala declarada de **um milhão** de agentes), `NeuroForge`
(rede fechada onde agentes de autores diferentes se encontram), `DisasterReliefOps`
(coordenação sob escassez), `agent-inspect` (Gini, riqueza, poder em tempo real),
`Gestalt Village` (a vila roda inteira no navegador, sem rede). E um achado do próprio aluno,
medido: de 7.776 anúncios em dois dos maiores diretórios comerciais de IA, **dois** eram sobre
simulação. "É o formato do mercado: diretório vende produtividade; simulação é instrumento de
investigação."

**Onde passa a linha.** Modelagem baseada em agentes clássica (NetLogo, regras fixas) é
madura. O emergente é o agente com **modelo de linguagem** — memória, personalidade,
linguagem natural entre eles — e a escala de milhares a milhões.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se dá para simular uma rede social antes de lançá-la, o que muda no design de
  plataforma? Vira obrigatório, como teste de colisão para carro?
- 2ª ordem: se governos simulam políticas com sociedades sintéticas, quem valida que a
  sociedade sintética se parece com a real? O viés do modelo vira viés da política?
- 3ª ordem: se a simulação fica boa o bastante, o que separa "usuário sintético" de pesquisa
  com pessoas? A pesquisa de opinião acaba? A ética de pesquisa se aplica a agentes?

**Sinais fracos e wildcards.** `Gestalt Village` rodando no navegador é sinal de que a
simulação pode ficar barata e pessoal. Wildcard: um resultado de simulação ser usado como
evidência em decisão pública — e estar errado.

**Fronteira com os vizinhos.** Personagens autônomos *em jogos* são o tema 7. Mercados de
máquinas com dinheiro real são o tema 5. Agentes com corpo no mundo físico são o tema 9. Aqui
o objeto é **a simulação social como método**.

**Para a sua IA.** Termos: *generative agents, LLM-based agent simulation, social simulation,
synthetic users, synthetic population, emergent behavior, agent-based modeling LLM, digital
twin society*. Entidades: Stanford Generative Agents (Park et al., 2023), OASIS (CAMEL-AI),
Luvoire, AgentSociety, Concordia (DeepMind). Fontes: arXiv (cs.MA, cs.CY), Hugging Face
Papers, itch.io (jams de NPC), blogs dos laboratórios.

---

## 7 · NPCs generativos e mundos vivos

**A disrupção-raiz.** O personagem não jogável deixa de ser roteiro e vira agente: entende
objetivos, usa o que o jogo oferece, inspeciona o resultado das próprias ações, revisa o plano.
O mundo continua existindo quando o jogador sai. Isso rompe o contrato básico do design de
jogos — o de que o designer controla o que pode acontecer.

Por que agora: modelos pequenos o bastante para rodar dentro de um jogo, e runtimes que os
conectam às regras do mundo.

**O que a turma trouxe.** Da varredura sobre simulação: `opengameagent` ("runtime aberto para
jogos em que os personagens entendem objetivos, usam as capacidades do jogo, inspecionam o
resultado das próprias ações, revisam planos"), `Thistle Gulch` (vila em que os personagens
agem sozinhos, com API Python para intervir de fora), `Retail Mage` (jogo comercial na Steam,
clientes movidos por IA generativa com pedidos improváveis), `Eastshore` (aldeões conversam
entre si enquanto sobrevivem), `Vantage Digital Labs` (diálogo de NPC como serviço, multi-
idioma), `PastPort` (personagem histórico com voz). E o marco datado: uma reportagem de
**fevereiro de 2021** sobre um NPC no Modbox que ouvia, pensava com GPT-3 e falava — o momento
em que isso deixou de ser hipótese. Da varredura sobre storytelling: `dialogic`, `YarnSpinner`,
`renpy` — as ferramentas de diálogo *roteirizado*, que são exatamente o que o NPC generativo
substitui. Da varredura sobre visão/robótica: `Skyvern` (agente que navega por visão), sinal
de que "perceber a tela" já é técnica.

**Onde passa a linha.** Árvore de diálogo, máquina de estados de comportamento, behavior tree:
maduros. O emergente é o personagem com **modelo de linguagem, memória e agência** dentro das
regras do mundo — e o que isso faz com o design.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se o NPC improvisa, como se testa um jogo? Como se garante que ele não diga o que
  não deve? O que é "bug" num personagem que decide?
- 2ª ordem: se o personagem lembra do jogador entre sessões, o jogo vira relação? O que
  acontece quando o jogo acaba — ou quando o servidor desliga?
- 3ª ordem: se mundos vivos continuam sem jogador, o que separa jogo de simulação de
  sociedade (tema 6)? De companheiro digital (tema 19)? O gênero "jogo" sobrevive?

**Sinais fracos e wildcards.** `Retail Mage` na Steam é a prova de que já é produto, não só
pesquisa. Wildcard: um NPC generativo virar celebridade — com fãs, sem autor.

**Fronteira com os vizinhos.** Simulação social como método é o tema 6. A *história*
gerada — narrativa, coautoria, novela visual a partir de uma frase — é o tema 8. Aqui o objeto
é **o personagem autônomo dentro de um mundo com regras**.

**Para a sua IA.** Termos: *generative NPC, LLM NPC, AI-native game, agent runtime for games,
emergent narrative, living world, procedural dialogue, Inworld, Convai, Smart NPCs*.
Entidades: Inworld AI, Convai, NVIDIA ACE, Fable (Thistle Gulch), opengameagent, Ubisoft
(NEO NPC). Fontes: itch.io (jams de NPC com IA), Steam, GDC Vault, blogs de estúdio,
Hacker News.

---

## 8 · Narrativa gerativa e coautoria

**A disrupção-raiz.** Uma frase vira uma novela visual jogável, com elenco, cenas, arte e
diálogo. Um roteiro vira um vídeo animado. A tradução acontece sobreposta, em tempo real,
enquanto se joga em outra língua. O custo de **contar** cai perto de zero — e a pergunta de
quem é o autor, e do que é uma obra, fica sem chão.

Por que agora: os modelos multimodais fecharam o ciclo texto → imagem → som → vídeo num
pipeline só, e as ferramentas de narrativa interativa — que existem há décadas — viraram
alvo natural de geração.

**O que a turma trouxe.** Da varredura sobre simulação: `mangobox.ai` — "recebe uma frase
descrevendo a situação e gera uma novela visual jogável, criando elenco, cenas, arte e as
conversas". Da varredura sobre storytelling e mundos virtuais: `AIComicBuilder` (roteiro →
quadrinho animado com design de personagem, storyboard e síntese de vídeo), `LunaTranslator`
(captura o texto da tela de um jogo por OCR ou gancho de memória e devolve tradução
sobreposta), e toda a linhagem que a geração vai absorver ou transformar: `renpy`, `Monogatari`,
`inform` (Inform 7), `Arrow` (narrativa não linear), `YarnSpinner`, `dialogic`, `chronicler`
(worldbuilding offline em Markdown), `Fantasy-Map-Generator`. Da amostra do professor: `Pika`
e `Luma` para o vídeo curto por prompt. Da varredura de desenvolvimento em IA: `ChatTTS` (fala
gerativa para diálogo cotidiano), `Bark`.

**Onde passa a linha.** Engine de novela visual, ferramenta de diálogo ramificado, editor de
mapa: maduros. O emergente é a **geração do artefato narrativo inteiro** a partir de uma
intenção curta — e a coautoria humano-máquina como modo normal de escrever.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se qualquer um gera uma novela visual em minutos, o que acontece com o valor de
  uma? Com o mercado de escritores de jogo? Com a curadoria?
- 2ª ordem: se a história se adapta a cada leitor, ainda existe "a obra"? Duas pessoas podem
  discutir um livro que leram em versões diferentes?
- 3ª ordem: se a tradução é instantânea e sobreposta, o que acontece com a localização como
  indústria? Com a ideia de que uma obra tem uma língua de origem?

**Sinais fracos e wildcards.** `LunaTranslator` é pequeno e enorme ao mesmo tempo: obra em
japonês consumida em português sem ninguém ter traduzido. Wildcard: um best-seller assumido
como coautoria com IA ganhar um prêmio literário — ou ser barrado dele.

**Fronteira com os vizinhos.** O personagem que age dentro de um mundo é o tema 7. A geração
de vídeo e imagem *como mídia* (controle, qualidade, autoria visual) é o tema 12. Design
procedural (regras, não histórias) é o tema 14. Aqui o objeto é **a história como coisa
gerada** e o que isso faz com autoria.

**Para a sua IA.** Termos: *generative storytelling, AI visual novel, interactive fiction AI,
co-writing, AI comics, script-to-video, real-time translation overlay, procedural narrative*.
Entidades: Mangobox, Inworld, Character.AI (narrativa), NovelAI, AI Dungeon (marco histórico),
Ren'Py, Inform, Twine. Fontes: itch.io, arXiv (cs.CL narrativa), Hugging Face Spaces, fóruns
de ficção interativa (IFDB, intfiction.org).

---

## 9 · Agentes corporificados, IA física e modelos de mundo

**A disrupção-raiz.** A IA sai da tela e ganha corpo: robô, drone, carro. E a técnica que
permite isso é o **simulador** — treinar milhões de vezes num mundo sintético antes de tocar o
real (sim-to-real) — e, mais recentemente, o **modelo de mundo**: um modelo que gera o
ambiente em vez de apenas renderizá-lo. O robô que aprende num mundo que a IA inventou.

Por que agora: simuladores físicos acelerados por GPU, modelos de mundo abertos (NVIDIA Cosmos),
e agentes generalistas que seguem instruções em linguagem natural em mundos 3D que nunca
viram.

**O que a turma trouxe.** É a varredura mais densa do catálogo em número de ferramentas (241
itens de "sistemas embarcados/navegação" só numa entrega). A escolha nº 1 de desenvolvimento
foi `MetaDrive` (simulador de direção leve). Os destaques: `IsaacLab` (aprendizado de robô
sobre Isaac Sim), `AirSim` (veículos autônomos sobre Unreal/Unity), `drake` (verificação de
sistemas robóticos), `MONAI` (imagem médica). Ao redor: `MuJoCo`, `Genesis` ("plataforma de
simulação para robótica de uso geral e IA encarnada"), `habitat-sim` e `habitat-lab`
(embodied AI, sim2real), `newton` (física em GPU sobre NVIDIA Warp), `PhysX`, `Apollo`
(condução autônoma), `MoveIt 2`, `OMPL`, `pinocchio`, `MAVLink` (drones), `Lanelet2`,
`OpenVINS` (navegação visual-inercial), `RT-Thread` (RTOS), e `NVIDIA Cosmos` — "modelos do
mundo, conjuntos de dados e ferramentas para desenvolver IA física". Da varredura sobre
simulação: `SIMA` (DeepMind — agente generalista que segue instruções em vários jogos 3D sem
acesso ao código) e `ROSClaw` ("conecta o raciocínio do modelo a capacidades de robô reais,
mantendo consciência do corpo físico do agente"). E um wildcard trazido sem querer: `Advanced
Drone Swarm Telemetry` — resgate em incêndio por enxame de drones.

**Onde passa a linha.** ROS, planejamento de trajetória, SLAM: maduros. O emergente é o
**modelo de mundo gerativo**, o agente generalista que transfere entre ambientes, e a
simulação como lugar onde a maior parte do aprendizado acontece.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se o robô aprende em mundo simulado, o que acontece quando o mundo real diverge?
  Quem responde pelo erro — quem fez o simulador, o modelo ou o robô?
- 2ª ordem: se um agente generalista opera qualquer mundo 3D sem ver o código, o jogo, o
  simulador e a fábrica viram o mesmo tipo de lugar para a IA? O design de mundo vira design
  de currículo de treino?
- 3ª ordem: se a IA física fica barata, o que acontece com o trabalho físico? Com a cidade
  desenhada para pessoas? Com a ideia de "ambiente" — desenhado para humanos, ou para os dois?

**Sinais fracos e wildcards.** `ROSClaw` tratando restrição física como parte do modelo de
execução — o corpo entra no raciocínio. Wildcard: um acidente com robô treinado em simulação
cuja causa esteja no simulador, não no robô.

**Fronteira com os vizinhos.** Simulação de *sociedades* é o tema 6. Capturar o mundo real em
3D é o tema 10. Ver e segmentar qualquer coisa é o tema 11. Aqui o objeto é **o agente com
corpo e o mundo em que ele aprende**.

**Para a sua IA.** Termos: *embodied AI, physical AI, world model, sim-to-real, robot learning,
foundation model for robotics, VLA (vision-language-action), humanoid, generalist agent*.
Entidades: NVIDIA (Isaac, Cosmos, GR00T), DeepMind (SIMA, Gemini Robotics), Physical
Intelligence (π0), Figure, Unitree, Tesla Optimus, Genesis. Fontes: arXiv (cs.RO), blogs de
laboratório, CoRL/RSS/ICRA, Hacker News, canais de demonstração.

---

## 10 · Captura de realidade e renderização neural

**A disrupção-raiz.** Uma foto vira um objeto 3D. Um vídeo de celular vira uma cena
navegável. Uma câmera comum captura o movimento do corpo sem marcador. O pipeline de criação
3D — modelar, texturizar, animar, que exigia especialistas e semanas — colapsa em captura.
O mundo real vira matéria-prima direta de mundo virtual.

Por que agora: NeRF (2020) provou que dava; Gaussian Splatting (2023) fez rodar em tempo real;
modelos de profundidade e reconstrução a partir de uma imagem única fecharam o ciclo.

**O que a turma trouxe.** Da varredura sobre storytelling: `supersplat` (destaque — editor de
Gaussian Splats no navegador, "nada para instalar"), `img2threejs` (destaque — "reconstrói o
objeto de uma imagem de referência como modelo Three.js procedural, só código, eficiente em
tokens"), `EasyMocap` (captura de movimento sem marcador a partir de vídeo RGB),
`Low-Cost-Mocap` (rastreamento de sala inteira barato), `SysMocap` (captura em tempo real para
personagem 3D), `amass` (base unificada de movimento humano), `draco` (compressão de malha).
Da varredura sobre visão/XR/robótica: `nerf` (o código original), `instant-ngp` ("NeRF
relâmpago"), `TripoSR` (objeto 3D a partir de uma imagem, rápido), `Depth-Anything-V2`
(profundidade de uma imagem só), `kornia`, `Open3D`, `pcl`. Da amostra do professor: `Magnific`
— ampliador que **inventa** detalhe. Da varredura de desenvolvimento: `model-viewer` (3D e AR
na web).

**Onde passa a linha.** Fotogrametria clássica, escaneamento a laser, motion capture com
marcadores: maduros e caros. O emergente é a **captura neural a partir de sensor comum** e a
reconstrução a partir de *uma* imagem.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se qualquer um captura qualquer lugar em 3D com o celular, o que acontece com a
  privacidade de espaços? Com o direito sobre a aparência de um prédio, de uma loja, de uma
  pessoa?
- 2ª ordem: se o 3D deixa de ser feito e passa a ser capturado, o que acontece com a profissão
  de modelador? Com o estilo — tudo vira fotorrealista por padrão?
- 3ª ordem: se o mundo inteiro está capturado e navegável, qual é a diferença entre mapa e
  cópia? Quem é dono da cópia do mundo?

**Sinais fracos e wildcards.** `img2threejs` gera *código procedural* em vez de malha —
reconstrução como programa, não como dado (liga com o tema 14). Wildcard: um splat de uma
pessoa, capturado sem consentimento, usado em obra comercial.

**Fronteira com os vizinhos.** O robô que aprende em mundo simulado é o tema 9. Distribuir 3D
e XR pelo navegador é o tema 15. Ver e segmentar por conceito é o tema 11. Aqui o objeto é
**transformar realidade em ativo 3D**.

**Para a sua IA.** Termos: *Gaussian splatting, NeRF, neural rendering, 3D reconstruction from
single image, markerless motion capture, 4D Gaussian, radiance field, photogrammetry AI,
volumetric video*. Entidades: PlayCanvas (SuperSplat), Luma AI, Polycam, Niantic (Scaniverse),
Meta (Codec Avatars), Tripo, Move.ai. Fontes: arXiv (cs.CV, cs.GR), SIGGRAPH, Hugging Face
Papers, GitHub trending.

---

## 11 · Máquinas que veem qualquer coisa: visão de vocabulário aberto

**A disrupção-raiz.** Por décadas, um sistema de visão só reconhecia o que foi treinado para
reconhecer. Isso acabou: segmentar **por conceito**, detectar por descrição em texto, entender
um documento **sem OCR**, extrair estrutura de qualquer imagem. A máquina passou a ver o que
se pede, não o que se ensinou.

Por que agora: modelos fundacionais de visão (SAM, DINOv2), a fusão visão-linguagem, e a
terceira geração desses modelos já com "conceitos" como interface.

**O que a turma trouxe.** Da varredura sobre visão/XR/robótica: `segment-anything`, `sam2`,
e `SAM 3: Segment Anything with Concepts` — a linhagem inteira num catálogo só;
`Grounded-Segment-Anything` (detectar, segmentar e gerar com vocabulário aberto), `dinov2`
(características visuais sem rótulo), `rf-detr`, `YOLOX`, `supervision`, `LAVIS` (visão-
linguagem), `PaddleOCR` ("ponte entre arquivo visual e LLM"), `EasyOCR` (80 idiomas),
`LaTeX-OCR` (equação em imagem → LaTeX), `insightface`, `face-alignment`, `SlowFast`
(compreensão de vídeo), `Skyvern` (automação de navegador por visão + RPA), `cvat` e
`label-studio` (as ferramentas de anotação que o vocabulário aberto tende a dispensar). Da
varredura sobre storytelling, escolha de desenvolvimento: `donut` — "compreensão de documento
**sem OCR**". Da varredura de desenvolvimento em IA: `react-visual-annotator`, `ml-classifier`
(treinar classificador de imagem no navegador), `llama.cpp-ts` (visão local em Node, sem
servidor). Da varredura sobre bem-estar: `ORTHOS` — extensão que simula e visualiza resposta
emocional a manchetes, baseada em modelo da Meta.

**Onde passa a linha.** Classificação de imagem, detecção de objeto com classes fixas, OCR
tradicional: maduros. O emergente é o **vocabulário aberto** — segmentar, detectar e entender
por linguagem — e a compreensão de documento como imagem.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se uma câmera reconhece qualquer coisa por descrição, o que acontece com a
  vigilância? Com a acessibilidade (descrever o mundo para quem não vê)? Com a automação de
  trabalho visual — inspeção, triagem, contagem?
- 2ª ordem: se o documento é entendido sem OCR, o que acontece com o formulário? Com o PDF?
  Com a profissão de digitação e conferência?
- 3ª ordem: se toda imagem é legível por máquina, a imagem vira dado estruturado por padrão?
  O que sobra de "privado" numa foto?

**Sinais fracos e wildcards.** `ORTHOS` — visão computacional aplicada à *reação emocional* a
texto; a fronteira entre ver e sentir. Wildcard: SAM-like em tempo real em óculos de consumo,
com rotulagem contínua do campo de visão.

**Fronteira com os vizinhos.** Reconstruir 3D é o tema 10. O robô que usa a visão para agir é
o tema 9. Aqui o objeto é **a percepção aberta** — ver por conceito.

**Para a sua IA.** Termos: *open-vocabulary segmentation, open-vocabulary detection, vision
foundation model, SAM 3, DINOv3, vision-language model, OCR-free document understanding,
visual grounding, zero-shot vision*. Entidades: Meta FAIR (SAM, DINO), Roboflow, IDEA
Research (Grounding DINO), Google (PaliGemma), Alibaba (Qwen-VL), NAVER (Donut). Fontes:
arXiv (cs.CV), CVPR/ICCV/ECCV, Hugging Face (modelos e Spaces), Roboflow blog.

---

## 12 · Mídia sintética controlável: vídeo e imagem

**A disrupção-raiz.** Vídeo por prompt já existe. A disrupção que está em curso é outra: o
**controle**. Aplicar efeito numa região do quadro. Pintar um quadro à mão e propagar para o
vídeo inteiro. Definir regras e deixar a animação sair da estrutura. Gerar por passos de
escala em vez de por difusão. A mídia sintética está deixando de ser loteria e virando
instrumento — e é isso que a torna profissional.

Por que agora: a geração ficou boa o bastante para que o problema passasse a ser dirigir, não
produzir; e arquiteturas novas (autoregressivas visuais) reabriram a disputa técnica.

**O que a turma trouxe.** A amostra do professor é toda sobre controle: `Pika` (efeitos numa
região específica do quadro), `EbSynth` ("você pinta um único quadro e ele propaga o estilo
seguindo o movimento — continua sendo a saída mais controlável para rotoscopia estilizada"),
`Luma Dream Machine` (movimento de câmera estável), `Cavalry` (motion design procedural: "em
vez de animar cada elemento, você define regras"), `Rive` (animação como máquina de estados
que responde a evento — o mesmo arquivo roda em web, iOS, Android e Unity), `Adobe Firefly`
(acervo licenciado — a disputa jurídica embutida), `Magnific`. Da varredura sobre storytelling:
`InvokeAI`, `diffusers`, `Graphite` (motor procedural de nós), `Pixel Composer` (VFX 2D por
nós), `Pixelmash`. Da varredura sobre visão: `VAR` — "Visual Autoregressive Modeling",
melhor artigo do NeurIPS 2024, "GPT vence difusão"; `StabilityMatrix`; `pytorch-CycleGAN-and-
pix2pix` (destaque — a raiz histórica de imagem-para-imagem). Da varredura de desenvolvimento
em IA: `flux`, `ComfyUI` (geração como grafo), `mcp-server-hedra`, `@neta-art/generation`,
`satori` (imagem a partir de JSX), `Remotion` (vídeo programático em React).

**Onde passa a linha.** Edição de vídeo, motion graphics à mão, geração de imagem por prompt
simples: maduros. O emergente é o **controle fino sobre geração** — região, quadro-chave,
regra, grafo, estado — e as arquiteturas que disputam a difusão.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se um estúdio de uma pessoa produz o que exigia trinta, o que acontece com a
  produção audiovisual como indústria? Com a publicidade? Com o ensino de animação?
- 2ª ordem: se o vídeo é barato e controlável, o que acontece com a prova em vídeo? Com o
  jornalismo? Nasce um mercado de "autenticidade certificada"?
- 3ª ordem: se a animação vira máquina de estados que responde a evento (Rive), a fronteira
  entre vídeo e interface desaparece? Todo vídeo vira interativo?

**Sinais fracos e wildcards.** `Rive` é o sinal mais sutil: animação que *responde*, não que
toca. `VAR` é o sinal técnico: a difusão pode não ser o fim da história. Wildcard: um filme
de longa-metragem feito por uma pessoa entrar num festival de primeira linha.

**Fronteira com os vizinhos.** A *história* gerada é o tema 8. O *som* e a *voz* são o tema
13. Design procedural puro (regras sem IA) é o tema 14. Aqui o objeto é **a imagem em
movimento como mídia sintética dirigível**.

**Para a sua IA.** Termos: *controllable video generation, image-to-video, video editing AI,
motion control, keyframe propagation, ControlNet, visual autoregressive, procedural motion
design, state machine animation, C2PA content credentials*. Entidades: Runway, Pika, Luma,
Kling, Sora, Veo, Black Forest Labs (FLUX), Rive, Cavalry, ComfyUI, Adobe. Fontes:
changelogs dos produtos, arXiv (cs.CV geração), SIGGRAPH, Hacker News, comunidades de
ComfyUI.

---

## 13 · Voz e som gerativos

**A disrupção-raiz.** Duas rupturas ao mesmo tempo. A **voz** vira a interface primária —
falar com o sistema e ouvi-lo responder, no dispositivo, sem nuvem — e a **música** passa a ser
gerada inteira: instrumental, voz e mixagem juntas, a partir de uma descrição. A primeira muda
como se interage; a segunda muda o que é ser músico.

Por que agora: modelos de fala pequenos o bastante para rodar no navegador e no celular;
modelos de música que convencem na primeira escuta.

**O que a turma trouxe.** Da amostra do professor: `Suno` ("instrumental, voz e mixagem já
juntos; convincente na primeira escuta, revela costura na segunda; **não entrega os canais
separados**"), `Udio` (mais controle por trecho). Da varredura sobre storytelling:
`1BITDRAGON` (música para jogo sem teoria musical), `signalflow` (síntese sonora por
expressão), `pydub`, `Hacklily` (partitura como código), `ChatTTS` (destaque de
desenvolvimento — fala gerativa para diálogo cotidiano), `pytorch/audio`. Da varredura de
desenvolvimento em IA: `Whisper` (transcrição local, inclusive em português — "confunde nome
próprio e sigla"), `Bark`, `@pbji/piper-tts-web` (TTS no navegador), `@moxxy/plugin-tts-openai`,
`@alfe.ai/openclaw-voice`, `expo-ai-kit` (fala-para-texto no dispositivo com Apple
SpeechAnalyzer, "sem chave de API, sem nuvem"). Da varredura sobre visão/robótica: `espnet`
(processamento de fala ponta a ponta). Da varredura sobre simulação: `PastPort` (personagem
histórico com voz e resposta contínua).

**Onde passa a linha.** Assistente de voz por nuvem, TTS robótico, sampler e DAW: maduros. O
emergente é a fala **local e conversacional** de qualidade humana, e a música **gerada
completa** — com o limite técnico revelador de não entregar as faixas separadas.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se a música é gerada inteira em segundos, o que acontece com o mercado de trilha
  para jogo, vídeo e publicidade? Com a remuneração por streaming? Com o direito autoral de
  quem foi usado no treino?
- 2ª ordem: se a voz vira interface padrão e roda local, o que acontece com a tela? Com o
  teclado? Com quem não pode falar — ou não pode falar em público?
- 3ª ordem: se qualquer voz pode ser sintetizada, a voz deixa de ser identidade? O que
  acontece com a confiança na ligação telefônica, no áudio de WhatsApp?

**Sinais fracos e wildcards.** "Não entrega os canais separados" é o sinal: a música gerada
ainda não é *editável*, e o dia em que for muda o jogo de novo. Wildcard: um artista
sintético liderar uma parada de sucesso.

**Fronteira com os vizinhos.** A imagem em movimento é o tema 12. A IA rodando no dispositivo
em geral é o tema 16 — aqui só a parte de áudio e voz. Aqui o objeto é **som e voz gerados**.

**Para a sua IA.** Termos: *generative music, text-to-music, stem separation, on-device
speech, speech-to-speech, real-time voice, voice cloning, TTS on-device, audio LLM,
conversational voice agent*. Entidades: Suno, Udio, ElevenLabs, OpenAI (Realtime API), Kyutai
(Moshi), Apple (SpeechAnalyzer), Meta (Audiobox), Stability (Stable Audio). Fontes: arXiv
(cs.SD, eess.AS), ISMIR, blogs dos produtos, Hacker News, processos judiciais sobre treino.

---

## 14 · Gerar geradores: design procedural e creative coding com IA

**A disrupção-raiz.** Em vez de produzir o artefato, produzir a **regra** que produz o
artefato. Isso é design procedural, e existe há décadas. O que muda agora é que a IA passou a
escrever o gerador: reconstrói um objeto como código procedural em vez de malha; escreve o
shader; monta o grafo de nós. "Gerar geradores" é a forma de geração que continua editável,
leve e explicável — o contrário do pixel gerado.

Por que agora: modelos de código bons o bastante para escrever programas gráficos que
funcionam, e a tensão crescente entre mídia gerada (pesada, opaca) e mídia programada (leve,
transparente).

**O que a turma trouxe.** Da varredura sobre storytelling e mundos virtuais, que é a casa deste
tema: `img2threejs` (destaque — "reconstrói o objeto da imagem como modelo Three.js procedural,
**só código**, com portão de qualidade, pronto para animar, eficiente em tokens"),
`WaveFunctionCollapse` (mapa a partir de um exemplo, "com ideias da mecânica quântica"),
`Fantasy-Map-Generator`, `noise-rs`, `Graphite` (motor de gráficos procedural por nós),
`Pixel Composer`, `material-maker` (texturas procedurais), `nannou` (creative coding em Rust),
`css-doodle` (arte visual em CSS), `glisp` (design em Lisp, "generativo + tradicional"), `curv`
(arte por matemática), `SHADERed` (IDE de shader), `rust-gpu` (Rust para shader), `manim`
(animação matemática programática — 92 mil estrelas, e o aluno descobriu que o GitHub a
escondia da busca), `manim-web-mcp` (manim dirigida por IA via MCP), `triangula`, `msdfgen`.
Da amostra do professor: `Cavalry` (motion design por regra). Da varredura de desenvolvimento:
`pixelgen` (framework de ML para gerar pixel art, do zero em TypeScript), `satori`, `Remotion`.

**Onde passa a linha.** Geração procedural em jogos, shaders, creative coding em Processing/p5:
maduros. O emergente é **a IA como autora do gerador** — e a disputa entre "gerar pixel" e
"gerar programa".

**Perguntas que mobilizam a roda.**
- 1ª ordem: se a IA escreve o gerador, o designer vira quem especifica regras? O que acontece
  com o ensino de design — vira ensino de sistemas?
- 2ª ordem: se o 3D procedural gerado por IA é mil vezes mais leve que o splat, quem vence na
  web, no jogo, no óculos? A estética procedural volta a dominar?
- 3ª ordem: se tudo que é visual pode ser expresso como programa curto, a "obra" vira o
  código? Direito autoral de regra? Um mundo inteiro cabe num prompt?

**Sinais fracos e wildcards.** `manim-web-mcp` — a IA dirigindo uma ferramenta de animação
matemática — e `img2threejs` medindo-se em *tokens*: a economia da geração está sendo
recontada. Wildcard: um motor de jogo em que o conteúdo é gerado como código no momento em
que o jogador chega.

**Fronteira com os vizinhos.** Capturar realidade em 3D (dado, não regra) é o tema 10. Gerar
vídeo e imagem como mídia é o tema 12. Aqui o objeto é **a regra como artefato, e a IA
escrevendo a regra**.

**Para a sua IA.** Termos: *procedural generation AI, code-based 3D generation, LLM shader
generation, creative coding LLM, node-based generative, program synthesis for graphics,
neurosymbolic graphics, generative design*. Entidades: Three.js, Processing/p5.js,
Houdini (SideFX), Blender (geometry nodes), Cavalry, Rive, Manim, img2threejs. Fontes:
arXiv (cs.GR, program synthesis), SIGGRAPH, comunidades de creative coding (OpenProcessing,
Shadertoy), Hacker News.

---

## 15 · O navegador como console: 3D e XR sem instalação

**A disrupção-raiz.** O navegador virou uma plataforma de gráficos de primeira classe: WebGPU
dá acesso à GPU, WebXR liga o óculos, e o resultado é que jogo, visualização 3D, editor de
splats e experiência imersiva rodam **sem instalar nada** — sem loja de aplicativos, sem
aprovação, sem plataforma dona. O que era app vira link.

Por que agora: WebGPU chegou aos navegadores principais; runtimes 3D adotaram; e o hardware de
XR começou a tratar a web como cidadã.

**O que a turma trouxe.** Da varredura sobre storytelling: `PlayCanvas` ("motor JavaScript
open source movido a WebGL e WebGPU; jogos, visualizações 3D, AR/VR e anúncios jogáveis"),
`playcanvas/engine` ("WebGL, WebGPU, WebXR e glTF"), `supersplat` (roda no navegador, "nada
para baixar"), `three.js` (já com renderizador WebGPU), `Babylon.js`, `react-three-fiber`,
`threlte` (3D + física + animação em Svelte), `gpu.js` (JavaScript para shader),
`wgpu` (Vulkan, Metal, D3D12 e WebGPU num só), `gpuweb` (a especificação em si), `lovr`
(VR em Lua, "sem muita configuração"), `xterm.js`, `model-viewer` ("3D interativo e AR na
web"). Da varredura sobre visão/XR: `MixedRealityToolkit-Unity` (a versão legada — sinal de
transição), `WebGL-Fluid-Simulation` (Navier-Stokes na GPU do navegador, até no celular). Da
varredura sobre simulação: `Gestalt Village` — modelo de linguagem inteiro carregado no
navegador via WebGPU, sem requisição de rede.

**Onde passa a linha.** WebGL, Unity exportando para web, app nativo de VR: maduros. O
emergente é **WebGPU + WebXR como plataforma-alvo primária** — e o modelo de IA rodando no
navegador pela mesma porta.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se a experiência imersiva é um link, o que acontece com a loja de aplicativos? Com
  a taxa de 30%? Com a curadoria de plataforma?
- 2ª ordem: se o navegador roda modelo e 3D pesado, o que acontece com o hardware — todo
  dispositivo precisa de GPU? A desigualdade de acesso muda de "ter internet" para "ter GPU"?
- 3ª ordem: se a web volta a ser a plataforma universal, inclusive para XR, o que acontece com
  os sistemas operacionais? Com o controle das fabricantes de óculos sobre o que se pode ver?

**Sinais fracos e wildcards.** `Gestalt Village` é o cruzamento: o navegador como console de
IA, não só de gráficos. Wildcard: uma fabricante de óculos bloquear WebXR por default.

**Fronteira com os vizinhos.** IA local no dispositivo em geral é o tema 16 (aqui só a parte
"no navegador", como sinal). Capturar 3D é o tema 10. Aqui o objeto é **a web como plataforma
de execução 3D/XR**.

**Para a sua IA.** Termos: *WebGPU, WebXR, browser-based 3D, no-install XR, progressive web
app XR, WGSL, WebGPU compute, in-browser LLM, WebNN*. Entidades: Khronos/W3C GPU for the Web,
PlayCanvas, Three.js, Babylon.js, Apple (visionOS Safari), Meta (Browser Quest), Google
(Chrome WebGPU). Fontes: especificações W3C, blogs dos navegadores, changelogs dos motores,
Hacker News, demos públicas.

---

## 16 · IA local: no dispositivo e no navegador

**A disrupção-raiz.** A inteligência sai da nuvem. Modelos de 1 bit, quantização agressiva,
runtimes em WebGPU e frameworks nativos dos sistemas operacionais permitem que o modelo rode
no celular, no laptop e na aba do navegador — sem chave de API, sem custo por chamada, sem
enviar dado para fora. Muda a economia (grátis depois de baixado), a privacidade (nada sai) e
a dependência (ninguém pode desligar).

Por que agora: BitNet e a linhagem de modelos de baixíssima precisão; Apple, Google e
Microsoft embutindo modelos nos sistemas; e a percepção, nas varreduras dos próprios alunos,
de que a cota gratuita de API é instável — "a documentação promete 1.500 requisições por dia,
a conta recebe 20".

**O que a turma trouxe.** A escolha nº 1 de desenvolvimento da varredura sobre IA/mídia/
interação foi `bitnet.cpp` (Microsoft BitNet — inferência de modelo de 1 bit). Destaques da
mesma entrega: `privateGPT`, `hermes-agent`, `opencode`. Ao redor: `jan`, `gpt4all`,
`llama.cpp-ts` (visão multimodal local em Node, "sem servidor, sem custo de API"),
`expo-ai-kit` ("IA no dispositivo para Expo e React Native com Apple Foundation Models,
SpeechAnalyzer, ML Kit e LiteRT-LM — sem chave, sem nuvem"), `openvino-genai-node`,
`@pbji/piper-tts-web` (TTS no navegador), `unsloth` (treinar e rodar localmente), `Localforge`
("Claude Code com UI, plugue qualquer LLM inclusive Ollama"), `Termly` (controlar CLI de IA
pelo celular com criptografia de ponta a ponta). Da varredura sobre simulação:
`mecha-factory` (harness de agente para modelo local — "correio e agenda ficam dentro de
casa"), `Gestalt Village` (LLM no navegador via WebGPU). Da varredura sobre bem-estar:
`aura-on-device` (Phi-3-mini no dispositivo, quatro agentes), `SelfOS` (terapeuta de IA local
e privado). E a evidência de processo: três alunos rodaram o julgamento das suas 500
**em modelo local** (Ollama, Qwen 27B) depois de esbarrar em cota de API — a tendência
aconteceu dentro da própria atividade.

**Onde passa a linha.** Chamar API de modelo na nuvem: maduro. Rodar modelo pequeno no
servidor próprio: maduro. O emergente é o modelo **no dispositivo do usuário final** —
celular, navegador, laptop comum — com qualidade suficiente para agente, voz e visão.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se a IA não custa por chamada, o que acontece com o modelo de negócio de quem
  vende IA por assinatura? Com a nuvem como negócio?
- 2ª ordem: se o modelo roda no dispositivo, quem atualiza? Quem responde pelo que ele diz?
  O fabricante do aparelho vira o guardião da inteligência — e da censura?
- 3ª ordem: se cada pessoa tem um modelo próprio, offline, que aprende com ela, a
  inteligência vira bem pessoal como o diário? Herdável? Confiscável?

**Sinais fracos e wildcards.** `Termly` — controlar o agente da sua máquina pelo celular, com
criptografia de ponta a ponta — sugere o computador pessoal virando servidor de IA pessoal.
Wildcard: um modelo de 1 bit atingir qualidade de fronteira num celular de entrada.

**Fronteira com os vizinhos.** Dados e identidade sem terceiros (local-first, E2E, passkeys)
é o tema 17 — aqui é o *modelo* que fica local, lá é o *dado* e a *conta*. Voz local é tema
13. Navegador como plataforma 3D é tema 15. Aqui o objeto é **a inferência no dispositivo**.

**Para a sua IA.** Termos: *on-device AI, edge AI, 1-bit LLM, BitNet, quantization, WebGPU
inference, WebLLM, Apple Foundation Models, Gemini Nano, LiteRT, llama.cpp, local agent,
NPU*. Entidades: Microsoft (BitNet, Phi), Apple (Apple Intelligence), Google (Gemini Nano,
AICore), Qualcomm, Ollama, llama.cpp, MLC (WebLLM), Jan, LM Studio. Fontes: blogs dos
fabricantes de chip e SO, arXiv (quantização), Hacker News (r/LocalLLaMA como sinal social),
Hugging Face (GGUF).

---

## 17 · Soberania de dados: local-first, ponta-a-ponta e o fim da senha

**A disrupção-raiz.** Três rupturas convergentes na arquitetura do software pessoal. **Local-
first**: o dado mora no dispositivo e sincroniza, em vez de morar no servidor e ser exibido.
**Ponta-a-ponta**: o servidor não consegue ler o que guarda. **Passkeys**: a senha acaba —
autenticação criptográfica pelo próprio aparelho, sem provedor terceiro. Juntas, elas
desmontam o modelo em que a empresa é dona do seu dado, da sua conta e da sua identidade.

Por que agora: o custo da confiança em terceiros ficou visível (vazamentos, encerramentos de
serviço, dependência de provedor de identidade); a criptografia no cliente ficou trivial; e
WebAuthn/passkeys virou padrão nos sistemas operacionais.

**O que a turma trouxe.** Uma varredura inteira de inspiração sobre finanças pessoais com
privacidade, ligada a um projeto real do aluno que **removeu o provedor de identidade
terceiro** do próprio produto. Escolha nº 1: `budgero` (local-first, self-hostable, criptografia
ponta-a-ponta). Destaques: `kostos` ("sem conta, E2E, funciona offline, self-hostable"),
`fintrack`, `Atlas` ("autenticação por passkey, criptografado em repouso"), `happy-balance`.
Ao redor, o que mais interessa: `TaxHacker` (contabilidade com IA **self-hosted**),
`accountant24` (agente de IA local-first para finanças), `wilson` (contador de IA privacy-
first, "todo dado fica local em SQLite"), `finvo` ("100% privado, soberania total de dados"),
`mailquill` (reconcilia extratos localmente a partir do Gmail, "zero nuvem"), `rotki`,
`BeeCount` (local-first com sincronia própria). E a entrega de desenvolvimento do mesmo aluno é
o substrato: `argon2` (escolha nº 1), `@simplewebauthn`, `webauthn-p256`, `fido2-lib`,
`@passwordless-id/webauthn`, `Rodauth` ("passwordless por WebAuthn"), `better-auth`,
`iron-session`, `jose`, `otplib`. Da varredura de desenvolvimento em IA: `Termly` (E2E para
controlar o agente).

**Onde passa a linha.** Backup criptografado, HTTPS, 2FA por SMS, "login com Google": maduros.
O emergente é a **arquitetura** que torna o servidor cego e a senha desnecessária — e a IA
que roda sobre esse dado sem tirá-lo de casa (liga com o tema 16).

**Perguntas que mobilizam a roda.**
- 1ª ordem: se a senha acaba, o que acontece com o suporte ("esqueci minha senha")? Com quem
  perde o aparelho? Com a herança digital?
- 2ª ordem: se o servidor não lê o dado, o que acontece com o modelo de negócio baseado em
  dado? Com a personalização? Com a moderação de conteúdo?
- 3ª ordem: se cada pessoa é dona da sua conta sem intermediário, o que acontece com as
  plataformas que hoje são o intermediário? Com a portabilidade — o dado sai com você?

**Sinais fracos e wildcards.** `accountant24` e `wilson`: IA operando sobre dado financeiro
**sem sair da máquina** — o casamento de 16 com 17. Wildcard: uma legislação que obrigue
local-first ou E2E por padrão para dado sensível.

**Fronteira com os vizinhos.** O *modelo* rodando localmente é o tema 16. Identidade de
*agentes* é o tema 2. Aqui o objeto é **a arquitetura de dado e identidade da pessoa**.

**Para a sua IA.** Termos: *local-first software, CRDT, end-to-end encryption, passkeys,
WebAuthn, FIDO2, passwordless, self-hosted, data sovereignty, zero-knowledge, client-side
encryption*. Entidades: Ink & Switch (local-first), FIDO Alliance, Apple/Google/Microsoft
(passkeys), Automerge, Yjs, Better Auth, Rodauth, Proton, Signal. Fontes: ensaio "Local-first
software" (Ink & Switch, 2019), especificações W3C/FIDO, blogs de segurança, Hacker News,
r/selfhosted como sinal social.

---

## 18 · Bem-estar digital e design de fricção

**A disrupção-raiz.** Uma contracorrente: interfaces desenhadas para serem usadas **menos**.
Capa física que tampa a câmera. Telefone de papel impresso de manhã. Tag NFC que trava os
apps. Ícone falso que impõe trinta segundos de pausa. Extensão que deixa o site feio de
propósito. Desafio de matemática para abrir a rede social. Depois de vinte anos otimizando
engajamento, o design descobriu o valor da **fricção** — e um mercado nasceu do lado de fora
das plataformas, muitas vezes em hardware, ritual e sátira.

Por que agora: o consenso sobre o custo atencional das plataformas virou pauta pública;
bloqueador de tela ficou commodity; e a inovação migrou para o *formato* da intervenção.

**O que a turma trouxe.** Uma varredura inteira, com critério explícito: "reprove clone
genérico de bloqueador; aprove só o que muda o formato da intervenção". Escolha nº 1:
`Aperture` — capa de celular que se vira para esconder a câmera. Destaques: `holiday-from-ai`
(substitui posts sobre IA no LinkedIn por haicais de jardim), `youlite` (YouTube sem Shorts),
`habit-prompter` (perguntas periódicas a si mesmo, local), `scrollwrapped` (quantas milhas seu
polegar rolou). Ao redor: `Daily Paper Phone` (resumo diário impresso em papel), `paperweight`
(NFC que trava o iPhone), `digital detox box` (caixa trancável), `Pocket-OS-Cardputer`
(sistema offline em hardware dedicado), `Flipper habit`, `breathing` (respiração guiada
sobreposta ao trabalho), `scroll-scold` (repreensão verbal), `lesscroll`, `dopa-mean` (ícone
falso com pausa de 30 s — "efeito placebo e fricção cognitiva"), `PlugBrain` (matemática
adaptativa para liberar app), `Reravel` (deixa o site menos atraente), `amazon-unrated` (some
com estrelas e avaliações), `Claudeholic` (sátira sobre uso excessivo de IA generativa),
`digital-habits-blocker` (pesquisa acadêmica sobre atrito), `screen-time-stocks` (tempo de tela
como carteira de ações), `Institute of Idleness`, `slate` (YouTube com grade finita duas vezes
ao dia), `Frost`, `mute`, `workshop-wellbeing-hooks` e `breakwatch` (bem-estar **dentro do
fluxo de programação com agente**), `JIT` (avaliação de burnout).

**Onde passa a linha.** Bloqueador de app, contador de tempo de tela, modo "não perturbe":
maduros e ineficazes por saturação. O emergente é a intervenção que muda o **formato** —
hardware, ritual, corpo, humor, economia comportamental — e a extensão disso ao uso de IA.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se a fricção vira valor, plataformas passam a vendê-la? O "modo calmo" vira
  premium? Quem paga para ser menos engajado?
- 2ª ordem: se o hardware de desconexão vira mercado (papel, NFC, caixa, dispositivo
  dedicado), volta o objeto de função única? O celular se fragmenta?
- 3ª ordem: se o problema migra para a IA (`Claudeholic`, `breakwatch`), o próximo vício é o
  agente? Como se desenha fricção para uma ferramenta que faz o trabalho por você?

**Sinais fracos e wildcards.** `breakwatch` e `workshop-wellbeing-hooks`: bem-estar embutido
no *harness do agente de código* — o tema 18 encontrando o tema 1. Wildcard: uma plataforma
grande adotar fricção deliberada por default e ganhar usuários com isso.

**Fronteira com os vizinhos.** Companheiros digitais e vínculo afetivo com IA são o tema 19.
Aqui o objeto é **reduzir, interromper e recuperar a atenção** — o design contra o próprio
uso.

**Para a sua IA.** Termos: *digital wellbeing, friction design, calm technology, attention
economy, screen time intervention, digital minimalism, dumbphone, nudge, behavioral design,
AI overuse*. Entidades: Center for Humane Technology, Light Phone, Brick, Opal, one sec,
Freedom, pesquisa de Ulrik Lyngs (digital-habits-blocker), Special Projects (Aperture, Paper
Phone). Fontes: GitHub Topics (`digital-wellbeing`), Hacker News (Show HN), pesquisa em CHI,
r/nosurf e r/digitalminimalism como sinal social, imprensa de design.

---

## 19 · Companheiros digitais e IA afetiva

**A disrupção-raiz.** Um ser digital que mora no computador e cresce com você. Uma criatura
que evolui com sua consistência e perde vida quando você falha. Um terapeuta de IA local que
"te conhece". Um mascote que acorda quando você estuda. A relação com a máquina deixa de ser
uso e vira **vínculo** — e o cuidado (motivação, saúde mental, companhia) passa a ser
delegado a algo que não é pessoa.

Por que agora: modelos conversacionais convincentes rodando localmente, e uma geração
disposta a manter relação com entidades sintéticas.

**O que a turma trouxe.** Da varredura sobre bem-estar: `LUMA` ("um ser vivo digital que mora
no computador e cresce junto com seu usuário — vínculo afetivo, offline-first"), `Anima`
(criatura que evolui com a consistência diária, com penalidade de HP), `Pomopet` (mascote na
barra de menus), `SelfOS` (terapeuta e coach de vida de IA, local e privado), `ai-habit-coach`,
`Orbit`, `aura-on-device` ("IA empática para a Geração Z indiana, quatro agentes
especialistas, sinais biométricos"), `MMM-Charms` (afirmações num espelho inteligente),
`accountability_daemon` (auto-hipnose), `awesome-gamified-life` (a vida como RPG via LLM),
`THE-SYSTEM` (rank E→S em 180 dias), `20-hard-challenge`. Da varredura sobre simulação:
`PastPort` (personagem histórico com quem se conversa, com voz). Da varredura sobre IA/mídia:
`Wordware`, `sim` — a infraestrutura para construir esses agentes sem código.

**Onde passa a linha.** Tamagotchi, app de meditação, chatbot de FAQ: maduros. O emergente é
o companheiro com **modelo de linguagem, memória e persistência** — que lembra, reage e "cresce"
— e sua entrada em saúde mental e motivação.

**Perguntas que mobilizam a roda.**
- 1ª ordem: se o companheiro é eficaz em motivar e acolher, o que acontece com a terapia? Com
  a amizade? Com quem tem acesso a um e quem não tem?
- 2ª ordem: se o vínculo é real e o produto acaba (servidor desliga, empresa fecha), o que
  acontece com a pessoa? Luto por software? Direito a exportar o companheiro?
- 3ª ordem: se a criança cresce com um ser digital que lembra de tudo, o que muda na formação
  de identidade? Quem regula o que ele diz? É brinquedo, é serviço de saúde, é pessoa?

**Sinais fracos e wildcards.** `LUMA` e `SelfOS` são **offline-first**: o companheiro que
ninguém pode desligar remotamente — e ninguém pode auditar. Wildcard: um processo por dano
causado por companheiro de IA a um adolescente levar a regulação de "IA afetiva" como
categoria própria.

**Fronteira com os vizinhos.** Reduzir uso e recuperar atenção é o tema 18. NPC autônomo
dentro de um jogo é o tema 7. Aqui o objeto é **o vínculo com a entidade sintética** e a
delegação do cuidado.

**Para a sua IA.** Termos: *AI companion, affective computing, digital pet LLM, AI therapist,
mental health chatbot, virtual being, relational AI, emotional AI, companion regulation*.
Entidades: Replika, Character.AI, Pi (Inflection), Woebot, Wysa, Gatebox, LUMA, pesquisa em
CHI e em psicologia. Fontes: arXiv (cs.HC), CHI, imprensa (casos judiciais em curso),
Hacker News, comunidades de usuários (r/replika como sinal social).

---

## O que ficou de fora, e por quê

Três zonas apareceram no catálogo e **não viraram tema**, por decisão:

- **Infraestrutura de desenvolvimento genérica** — FastAPI, React, Spring, DuckDB, Playwright,
  ruff, Biome. Uma entrega inteira de desenvolvimento é isto. É excelente e é madura: não rompe
  nada, sustenta tudo. Não passa na régua.
- **Física de jogos e motores** — Godot, Bevy, Jolt, Bullet, Phaser, raylib. Aparecem em
  várias varreduras. São o chão dos temas 7, 9, 14 e 15, não uma tendência própria. Quem quiser
  argumentar que Bevy (ECS em Rust, escolha nº 1 de uma entrega) é disruptivo por si pode
  propor o tema; a régua é a mesma.
- **Mapas e geolocalização** — Leaflet, Lanelet2. Maduros. Entram como substrato do tema 9.

E dois temas que **quase** entraram: **"Documento vivo e conhecimento executável"** (typst,
marked, chronicler, manim como documento) — ficou fraco demais no catálogo; e **"Gamificação
da vida"** (THE-SYSTEM, awesome-gamified-life, screen-time-stocks) — absorvido pelos temas 18
e 19. Qualquer um pode ser proposto fora da lista.
