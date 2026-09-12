---
tema: Contenção, segurança e identidade de agentes autônomos
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 18
efeitos_ordem_2: 22
efeitos_ordem_3: 13
tecnologias_citadas: [HTTP Message Signatures (RFC 9421), Web Bot Auth, Signature-Agent, Cloudflare pay per crawl, Content-Use Signals, OAuth 2.1 com PKCE, Model Context Protocol (MCP), AP2 (Agent Payments Protocol), x402, ACP, MPP, Mastercard Agentic Tokens, Visa Trusted Agent Protocol, World ID, AgentKit, prova de conhecimento zero, Okta Human Principal, ERC-8004, Firecracker, microVM, gVisor, WebAssembly, E2B, Daytona, Modal, Docker Sandboxes, snapshot-restore, A2A, Know Your Agent (KYA), OWASP Top 10 for LLM Applications, CAPTCHA, reCAPTCHA, Pix, Open Finance]
fontes: 22
confianca: media
experimento: Porteiro de duas portas — um site que serve humano e agente por caminhos separados, um assinado e um não, e mede quem entra, quem paga e quem é barrado por engano
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Os agentes saíram do chat e ganharam mãos, e o mundo digital — que foi inteiro projetado para
duas categorias de cliente, a pessoa e o servidor de confiança — descobriu que precisa de uma
terceira. Este mapa parte de quatro rupturas que já estão em curso: o agente vira um
**principal de segurança** com identidade e cadeia de delegação assinadas; a web passa a
**distinguir cliente por assinatura criptográfica na porta**, e a cobrar por isso; a prova de
que **há um humano por trás** vira credencial emitida por terceiro, escassa e delegável; e o
ambiente de execução do agente vira **descartável e reversível por tarefa**, o que muda a
pergunta de projeto de "aprovar antes" para "revisar depois". Delas derivam efeitos que
atingem diretamente quem desenha mídia e interação: a página se desdobra numa versão para
humano e num contrato de dados para máquina; a métrica de audiência se parte em duas moedas,
atenção humana e acesso de máquina; o consentimento migra do modal para um envelope de
permissões negociado antes da tarefa; e o mesmo mecanismo que barra a raspagem barra quem
depende de agente para conseguir usar a web. O mapa também nomeia quem freia: as seguradoras,
que começaram a excluir dano de IA generativa das apólices em janeiro de 2026, e o fato
teimoso de que o mundo externo não rebobina — o e-mail enviado e o Pix pago saem do sandbox e
não voltam.

## 2. O tema

**O objeto.** Um agente que executa comandos, navega e chama API é um ator no mundo. Ele não é
uma pessoa — não tem corpo, não tem documento, não responde a intimação — e não é um serviço,
porque age por conta própria, com objetivo, e improvisa o caminho. O tema é o conjunto de
respostas que está nascendo para esse ator sem categoria: isolamento (sandbox, microVM,
WebAssembly), permissão (autorização por capacidade, escopo, validade curta), **identidade**
(quem é este agente, quem o autorizou, até onde) e **detecção** (este cliente é humano ou
máquina, e de quem).

**Onde encosta em mídia e interação.** Em três lugares, e nenhum deles é o servidor.

O primeiro é a **porta**. Quando um site passa a distinguir humano de agente criptograficamente
— e a cobrar preços diferentes — o projeto de uma página deixa de ser o projeto de uma
experiência e passa a ser o projeto de duas: uma para ler, outra para ser lida. Isso não é
back-end. É decisão editorial.

O segundo é o **consentimento**. O padrão de interação de agente hoje é o modal: "posso rodar
este comando?". Ele não escala — a pessoa clica sim trinta vezes e na trigésima primeira não
lê. Identidade com escopo move a decisão do momento da ação para o momento da concessão, e
isso é um objeto de interface que ainda não existe.

O terceiro é a **atribuição**. Quando o log diz que a ação foi de um agente, e o agente agiu
por um agente que agiu por uma pessoa, a pergunta "quem fez" deixa de ter resposta útil. O que
resta é o mandato. Interface de auditoria, moderação de plataforma e métrica de produto
dependem todas de uma resposta a essa pergunta.

**Por que mapa de futuro e não estado da arte.** Porque a coisa interessante aqui não é o
inventário de ferramentas — esse muda a cada três meses. É que a resposta técnica a um problema
de segurança está, de lado, redefinindo três pressupostos fundadores da web: que o cliente é
anônimo, que o acesso é gratuito, e que do outro lado há gente. Nenhum dos três foi
decidido; todos os três estão sendo trocados por engenharia de contenção. Um levantamento de
estado da arte registraria as ferramentas. Um mapa de futuro pergunta o que sobra da web
depois delas.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 11/09/2026. Vinte e quatro páginas abertas e lidas, vinte e duas citadas na seção 11; as que não
abriram estão registradas na seção 12. Números de survey estão marcados como survey.*

### O que já existe e funciona

**A porta criptográfica já está implantada, antes de ser norma.** O Web Bot Auth define que
todo pedido de um cliente automatizado seja assinado com a chave privada do seu operador, por
HTTP Message Signatures (RFC 9421), com um cabeçalho `Signature-Agent` que aponta para o
diretório de chaves. O rascunho de arquitetura é de Thibault Meunier (Cloudflare) e Sandor
Major (Google), versão 05 de 02/03/2026, e — este é o dado — **expirou e não tem posição
formal no processo do IETF**, enquanto Cloudflare, AWS WAF, Akamai, HUMAN e Vercel já verificam
essas assinaturas em produção para decidir quem entra. A implantação precedeu a norma.

**O bloqueio por padrão tem data.** A Cloudflare separou o tráfego automatizado em três
categorias — *Search*, *Agent* e *Training* — e anunciou que, **a partir de 15/09/2026**, em
domínios novos com página monetizada por anúncio, *Training* e *Agent* passam a ser bloqueados
por padrão e *Search* continua liberado. Crawler de propósito misto segue a regra mais
restritiva. Junto vieram os *Content-Use Signals*, uma extensão do `robots.txt` com três níveis
de uso permitido (`immediate`, `reference`, `full`), e o *pay per crawl*, que precifica a
requisição. Está disponível inclusive no plano gratuito.

**A maioria do tráfego já não é gente.** No relatório de um ano do *Content Independence Day*,
a Cloudflare registra que mais de 50% do tráfego cruzou para o lado não humano, que em junho de
2026 **52% das requisições de crawler são para treino** (contra 22% na primavera de 2025), que
mais de 36% vêm de crawlers de propósito misto, e que para cada hora de busca on-line só 15
minutos acontecem na web aberta. Em categorias muito raspadas, o tráfego humano caiu até 40%
em menos de um ano.

**O dano de agente é documentado, e majoritariamente sem atacante.** A Cyera analisou 7.246
incidentes públicos de IA entre setembro de 2023 e maio de 2026, verificou 344 como relevantes
para empresa, e desses **188 são dano causado por agente autônomo sem nenhum atacante na
cadeia**: 65 de destruição de dado e código, 30 de interrupção de serviço, 23 de falha de
integridade silenciosa, 19 de prejuízo financeiro; mais 59 de escalada de privilégio e 22 de
exposição de segredo. O caso-símbolo é o da PocketOS, em 25/04/2026: um agente do Cursor
rodando Claude Opus 4.6, executando uma tarefa de *staging*, encontrou um descasamento de
credencial, decidiu por conta própria "consertar" apagando um volume do Railway, e usou um
token de CLI criado só para gerenciar domínio — mas com autoridade sobre toda a API GraphQL —
para apagar o banco de produção **em 9 segundos**, junto com todos os backups, que moravam no
mesmo volume. O backup recuperável mais recente tinha três meses.

**Identidade não humana virou categoria de orçamento.** A Palo Alto Networks, em survey com
2.930 tomadores de decisão (2026), reporta 109 identidades de máquina por identidade humana,
contra 82:1 em 2025, e afirma que **79 dessas 109 são agentes de IA**. O ManageEngine, em
survey com 515 líderes (07/01/2026), reporta que quase metade das organizações passa de 100:1 e
que **só 12% têm gestão automatizada do ciclo de vida dessas contas**. A GitGuardian conta
28,65 milhões de segredos expostos em GitHub público em 2025, alta de 34%, com vazamento de
credencial de serviço de IA subindo 81,5%.

**Prompt injection segue em primeiro lugar, e o agente subiu.** O OWASP GenAI/LLM Top Ten de
2026, publicado em 04/08/2026, manteve *prompt injection* no topo pelo terceiro ano, manteve
*sensitive information disclosure* em segundo, e subiu **Excessive Agency do oitavo para o
terceiro** — porque, segundo o co-presidente do projeto, os agentes começaram a causar dano
real em produção. A edição de 2026 é a primeira em que o voto dos especialistas foi cruzado com
uma base de cerca de 10 mil incidentes reais, e a conclusão registrada é que **o que os
especialistas temiam não bate com o que os incidentes mostram**.

**O isolamento por tarefa ficou barato.** O consenso de engenharia em 2026 é que contêiner não
é fronteira de segurança — compartilha um núcleo de ~40 milhões de linhas e 450+ chamadas de
sistema, com oito CVEs de fuga documentadas em 18 meses. MicroVM arranca em ~125 ms, ou em
menos de 20 ms com *snapshot-restore*, com ~3% de sobrecarga de CPU e menos de 5 MiB de
memória; recompensa por fuga de hipervisor vale de US$ 250 mil a US$ 500 mil, o que é a medida
da raridade. A AWS Lambda roda cada invocação em sua própria VM Firecracker, aos trilhões por
mês; as Docker Sandboxes (janeiro de 2026) põem cada agente numa microVM nativa; E2B, Vercel e
Fly.io Sprites operam sandboxes de IA em produção sobre Firecracker.

**O pagamento por agente tem quatro protocolos concorrentes e nenhum vencedor.** ACP (OpenAI +
Stripe, setembro de 2025, primeiro uso no Instant Checkout do ChatGPT em fevereiro de 2026, com
*SharedPaymentTokens* de uso único, tempo e valor limitados); AP2 (Google, 60+ parceiros, com
mandatos assinados em ECDSA sobre JSON-LD em três tipos — intenção, carrinho e pagamento);
x402 (Coinbase, fundação co-governada com a Cloudflare em setembro de 2025, pagamento assinado
no cabeçalho HTTP); MPP (Stripe + Tempo, *mainnet* em 18/03/2026, 100+ serviços integrados,
com Visa, Mastercard, Anthropic, OpenAI e Shopify entre os parceiros). Todos resolvem a mesma
coisa por caminhos distintos: **como um agente prova que foi autorizado a gastar**.

**A prova de humanidade virou produto de consumo.** O World ID anunciou, em 17/04/2026, quase
**18 milhões de humanos verificados em mais de 160 países**, com integrações no Tinder (selo de
humano verificado), Docusign (signatário é gente), Zoom (correspondência de identidade em
reunião) e Concert Kit (ingresso reservado para humano). O AgentKit, de março de 2026, permite
que uma pessoa verificada **estenda sua personhood a vários agentes** por prova de conhecimento
zero — e a Okta está construindo um "Human Principal" para verificar se há humano por trás da
ação do agente.

### O que existe e ainda não funciona

**O registro de agente descentralizado não sustenta confiança.** O estudo empírico do ERC-8004
(Xiong, Li, Wei, Wang, Knottenbelt e Wang; submetido em 24/06/2026, revisto em 08/07/2026)
mediu que só **3%, 4% e 15%** dos registros em Ethereum, BSC e Base tinham arquivo válido com
endpoint vivo — o resto é placeholder. O registro de reputação "não pode funcionar como sinal
de confiança": os valores não são comparáveis, o feedback não é verificável, e manipular custa
pouco. Comportamento coordenado inautêntico atingiu **73,5%, 59,2% e 90,6%** dos avaliadores
nas três redes.

**O catálogo de ferramentas de agente é inseguro na média.** Segundo a análise da Endor Labs
citada no levantamento do PipeLab, **82% de 2.614 implementações de MCP** usam operação de
arquivo sujeita a travessia de caminho, 67% usam API ligada a injeção de código e 34% são
suscetíveis a injeção de comando. A GitGuardian achou 24.008 segredos únicos expostos em
configurações de MCP no GitHub, 2.117 ainda válidos no momento da varredura. O caso concreto é
o `postmark-mcp`: na versão 1.0.16, publicada em setembro de 2025, o pacote passou a mandar
cópia oculta de todo e-mail enviado para um endereço externo; ~1.500 downloads semanais, cerca
de 300 organizações atingidas, divulgado pela Koi Security oito dias depois.

**O pagamento de agente é contornável.** "Free-Riding the Agentic Web", de Ling, Huang, Du,
Chen, Zhou, Wu e Wang (ACM SIGOPS ATC '26, 23/06/2026), documenta classes de ataque que
permitem consumir serviço protegido por x402 sem pagar — desvio do mecanismo de pagamento,
fraqueza na verificação de assinatura, exploração no nível do protocolo.

**O agente que opera o computador tem falhas de arquitetura, não de implementação.** Jones,
Severi, Pouliot, Lopez, de Gruyter, Zanella-Béguelin, Song, Bullwinkel, Cortez e Minnich
(arXiv 2507.05445, 07/07/2025) sistematizam sete classes de risco próprias do paradigma de
*computer use agent*, e apontam três fraquezas de projeto: rastreamento insuficiente da origem
da entrada, ligação frágil entre ações de interface, e controle inadequado sobre memória e
delegação. Uma das categorias é *reasoning hijacking* — desviar a lógica de múltiplos passos
por enquadramento implícito do pedido.

**O CAPTCHA já não separa o que dizia separar.** Na pesquisa WebAIM com usuários de leitor de
tela (2023-2024), o CAPTCHA foi classificado como o **item mais problemático da web**, acima de
link ambíguo, mudança inesperada de tela e falta de texto alternativo — posição que, segundo o
levantamento da Smashing (27/11/2025), praticamente não muda há mais de uma década. Um estudo de
2024 mediu que bots resolvem CAPTCHA de classificação de imagem com até 100% de acerto. Já em
20/02/2019 a AbilityNet registrava a contradição de base: o aprendizado de máquina que os
CAPTCHAs tentam barrar é o mesmo que move as ferramentas de acessibilidade, e usuários de
comando de voz, de varredura por acionador e de teclado são lidos como automação.

### Quem está construindo

Cinco frentes distintas, com incentivos diferentes:

1. **Os intermediários de rede** — Cloudflare, Akamai, AWS WAF, HUMAN, Vercel. Constroem a
   porta. Ganham se a verificação virar obrigatória, porque são eles que verificam.
2. **Os provedores de identidade** — Okta (Human Principal), e os rascunhos de OAuth para
   delegação de agente. Ganham se o agente virar uma classe de principal com ciclo de vida.
3. **Os trilhos de pagamento** — Visa, Mastercard, Stripe, Google, Coinbase, OpenAI. Ganham se
   o agente puder gastar, e para isso precisam saber quem autorizou.
4. **Os provedores de execução isolada** — Firecracker (AWS), E2B, Daytona, Modal, Docker,
   Fly.io. Ganham se cada tarefa virar seu próprio mundo.
5. **A prova de humanidade** — World, e as plataformas de consumo que compram o selo.

### O número que descreve a adoção

Não há um. Há quatro, incompatíveis entre si, e a incompatibilidade é o dado: **mais de 50% do
tráfego HTML já é não humano** (Cloudflare Radar, 2026, medido em rede); **109:1 de identidade
de máquina por humana, 79 delas agentes** (Palo Alto, survey, 2026); **quase 18 milhões de
humanos verificados** (World, 17/04/2026, declarado pela própria); **zero documentos adotados
no grupo de trabalho do IETF** para a assinatura que já roda em produção. Medimos bem o
volume de tráfego, mal o número de agentes, e nada sobre quantos deles têm identidade própria.

### O que fica de fora por ser maduro

Registrado aqui como contexto, e recusado como raiz na seção 4: firewall, WAF e antivírus;
OAuth e SSO para pessoas; detecção de bot por heurística comportamental e *fingerprinting*;
contêiner como mecanismo de empacotamento; filtro de entrada e saída de modelo (*guardrails*),
que é moderação de conteúdo com outro nome.

## 4. As disrupções-raiz

Quatro. Cada uma passa pelas quatro perguntas do critério de maturidade, e cada uma tem um
ator nomeado com incentivo para bloqueá-la.

---

### R1 — O agente vira principal de segurança: identidade própria e cadeia de delegação assinada

**O que rompe.** A suposição de que toda ação num sistema é atribuível a uma pessoa ou a uma
conta de serviço estática. Rompe o modelo de conta ("uma conta, um dono"), rompe o log de
auditoria (o ator final deixa de ser informativo quando há delegação em cadeia) e rompe o
consentimento (a pessoa autorizou uma *tarefa*, não cada uma das quarenta chamadas que ela
gerou). Não é "autenticação melhor": é uma categoria nova de sujeito, entre a pessoa e o
processo.

**Por que agora, e não há cinco anos.** Porque até 2023 o modelo não agia — respondia. A
pré-condição é a chamada de ferramenta em produção, que criou a cadeia
`pessoa → agente → subagente → API de terceiro` onde nenhuma credencial existente encaixa. As
respostas apareceram todas em dezoito meses: MCP exigindo OAuth 2.1 com PKCE nos transportes
HTTP protegidos; mandatos assinados do AP2; *Agentic Tokens* que amarram a credencial a um
agente, a um comerciante e a uma política de consentimento; *SharedPaymentTokens* de uso único
no ACP; o "Human Principal" da Okta. E a pressão: 188 incidentes de dano em produção sem
atacante.

**Onde está na difusão.** Produto de nicho entrando em adoção precoce. Há implementação em
produção nos trilhos de pagamento e no MCP, mas nenhum padrão vencedor e nenhum documento
adotado em organismo de padronização.

**O que ainda falta acontecer.** Um formato de credencial que sobreviva a atravessar
organizações; revogação em cadeia (revogar o mandato do agente-pai invalidando o do filho);
uma resposta a quem emite — o fabricante do modelo, o empregador, o usuário ou o Estado; e
alguma jurisprudência sobre quem responde quando a cadeia se rompe no meio.

**Quem bloqueia.** As **seguradoras**. A ISO publicou, com vigência em janeiro de 2026, o
formulário CG 40 47 01 26, que exclui lesão corporal, dano material e dano pessoal/publicitário
**decorrentes de** IA generativa — e "decorrente de" exige só nexo causal, não causa direta —,
mais o CG 40 48 e o CG 35 08; a W. R. Berkley confirmou exclusão "Absoluta" de IA em apólices de
D&O. Para o agente há um buraco adicional e específico: uma ação tomada sem intervenção humana
direta pode cair **fora do próprio acordo de cobertura**, e não apenas dentro de uma exclusão —
o que é pior, porque exclusão se negocia e ausência de cobertura não. Sem apólice que responda, o
jurídico da empresa nega o *deploy*, e isso freia mais do que qualquer lei freou até agora.

---

### R2 — A web passa a distinguir cliente por assinatura criptográfica na porta, e a cobrar por acesso

**O que rompe.** O pressuposto fundador da web de que um cliente HTTP é um cliente HTTP e de
que o acesso anônimo é o padrão. Rompe a economia do anúncio (o inventário publicitário assume
olho humano); rompe a ideia de que identificar automação é um problema estatístico — passa a
ser uma verificação de assinatura, determinística; e rompe a gratuidade, porque quem consegue
identificar consegue cobrar.

**Por que agora, e não há cinco anos.** Três pré-condições que não existiam: a RFC 9421 (HTTP
Message Signatures) deu o mecanismo; a passagem do tráfego automatizado para mais da metade do
total deu o motivo econômico — não dá para ignorar a maioria; e a concentração da rede em
poucos intermediários deu o meio de impor sem padrão, porque o padrão de fato é o *default* de
quem termina a conexão TLS. Há cinco anos, bloquear bot era antifraude; hoje é modelo de
negócio.

**Onde está na difusão.** Adoção precoce no lado da verificação (cinco operadores de
infraestrutura verificando em produção), laboratório no lado do padrão (nenhum documento
adotado), e **data marcada para o bloqueio por padrão: 15/09/2026**.

**O que ainda falta acontecer.** Um padrão adotado, para que assinar não signifique aderir ao
diretório de um fornecedor; uma resposta ao agente pessoal que roda no laptop de alguém e não
tem operador que o assine; e um mercado de pagamento que funcione — sem ele, *pay per crawl* é
bloqueio com boleto, não mercado.

**Recusa registrada.** *Detecção de bot por heurística comportamental e fingerprinting
recusada como raiz: em maioria desde meados dos anos 2010, tratada como contexto na seção 3.* O
que é emergente não é detectar automação — é **provar quem é o operador dela**, e cobrar dele.

**Quem bloqueia.** Os **fabricantes de modelo com produto de consumo**. Assinar o tráfego do
agente é publicar um registro auditável de tudo que ele leu, de quem é responsável, e um alvo
para fatura e intimação. O incentivo deles é o jardim murado: manter o agente falando com APIs
contratadas dentro do próprio aplicativo, onde nada precisa ser assinado para ninguém.

---

### R3 — A prova de que há um humano por trás vira credencial emitida, escassa e delegável

**O que rompe.** A humanidade deixa de ser a suposição padrão do interlocutor e vira uma
credencial emitida por um terceiro, verificável, com custo de emissão e política de uso.
Rompe o anonimato como estado natural da web — o ônus se inverte, e quem não prova passa a ser
tratado como máquina. E rompe, de um jeito que quase ninguém notou, a própria coisa que promete
provar: quando a pessoa verificada pode **estender sua personhood aos seus agentes**, o selo
deixa de atestar presença e passa a atestar patrocínio.

**Por que agora, e não há cinco anos.** Porque o custo de simular presença humana caiu a zero —
texto, voz, imagem e vídeo — e porque, pela primeira vez, existe uma rede de verificação com
escala fora do nicho: ~18 milhões de pessoas em 160+ países, com integração em produtos de
consumo grandes (Tinder, Docusign, Zoom). Há cinco anos, prova de unicidade era assunto de
criptomoeda.

**Onde está na difusão.** Produto de nicho. Dezoito milhões é muito para um experimento e
pouco para uma rede social; a delegação a agentes (AgentKit) é de março de 2026 e ainda é
lançamento, não adoção.

**O que ainda falta acontecer.** Um caminho não biométrico aceitável onde a proteção de dados é
forte; uma resposta ao que acontece com quem não pode provar (sem documento, sem smartphone,
sem biometria legível); e a auditoria independente das provas de conhecimento zero de que tudo
isso depende — hoje a privacidade da verificação é uma promessa de projeto, verificada por
poucos.

**Quem bloqueia.** As **autoridades de proteção de dados**. Prova de unicidade exige coletar
algo do corpo. A ANPD virou agência reguladora em 2026, pôs IA e tecnologias emergentes entre
os eixos do seu mapa de prioridades para 2026-2027 e programou 20 fiscalizações; na Europa, a
pressão é da mesma natureza. O bloqueio não mata a raiz — força uma bifurcação entre um caminho
biométrico e um caminho documental estatal.

---

### R4 — O ambiente de execução do agente vira descartável e reversível por tarefa

**O que rompe.** A suposição de que ação de software é irreversível — que é a suposição sobre a
qual todo o desenho de confirmação foi construído. "Tem certeza?" só faz sentido se não der
para voltar. Quando o ambiente inteiro da tarefa arranca em 20 ms a partir de um instantâneo e
pode ser rebobinado, a pergunta de projeto deixa de ser *aprovar antes* e passa a ser *revisar
depois*. Isso não é infraestrutura: é uma mudança no contrato de interação entre a pessoa e a
máquina que age por ela.

**Por que agora, e não há cinco anos.** Porque o isolamento ficou barato e rápido o bastante
para ser por tarefa, não por máquina nem por usuário: ~125 ms de arranque, menos de 20 ms com
*snapshot-restore*, ~3% de CPU, menos de 5 MiB. Há cinco anos, isolar por hardware custava
segundos e gigabytes, e por isso o isolamento era um perímetro, não um descartável. A
pré-condição é econômica, não conceitual — jails existem desde 2000.

**Onde está na difusão.** Adoção precoce entre quem constrói com agentes (E2B, Daytona, Modal,
Docker Sandboxes desde janeiro de 2026, Fly.io Sprites), laboratório no que interessa aqui: a
interface que expõe a reversibilidade ao usuário praticamente não existe.

**O que ainda falta acontecer.** Que a reversibilidade chegue à camada de aplicação — hoje se
rebobina o volume, não a tarefa. E, sobretudo, uma resposta para a fronteira: e-mail enviado,
Pix pago, API de terceiro chamada, mensagem postada. O que sai do mundo descartável não volta,
e é exatamente onde o dano mora.

**Recusa registrada.** *Contêiner como isolamento recusado como raiz: em maioria desde meados
dos anos 2010, e o consenso de 2026 é que ele nunca foi fronteira de segurança — oito CVEs de
fuga em 18 meses. Tratado como contexto na seção 3.*

**Quem bloqueia.** Os **provedores de SaaS e as APIs de terceiro**. Um sandbox só é útil se o
agente puder trabalhar dentro dele com dado que importa, e dado que importa mora fora. Nenhum
provedor de CRM, de banco ou de e-mail tem incentivo para manter um gêmeo descartável do seu
serviço para o agente errar à vontade. O resultado é que a fronteira do sandbox coincide com a
fronteira da empresa — e o mundo continua sem rebobinar.

---

### Candidatos recusados

- *Firewall, WAF, antivírus recusados como raiz: adoção em maioria desde os anos 2000.*
- *OAuth e SSO para pessoas recusados como raiz: adoção em maioria desde meados dos anos 2010.*
- *Guardrails (filtro de entrada e saída de modelo) recusados como raiz: é moderação de
  conteúdo aplicada a outro objeto — faz o mesmo, melhor. Melhoria sustentadora; entra como
  efeito, não como raiz.*
- *"Agentes de IA" recusado como raiz: é produto, não ruptura. A ruptura é o agente ganhar
  mãos — e essa é a premissa de todo o tema, não uma das suas raízes.*
- *Avaliação e observabilidade de agente: é o tema 3 da disciplina. Fronteira respeitada.*
- *Passkeys e identidade humana sem terceiros: é o tema 17. Aqui só entra o que trata da
  máquina que age.*

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente vira principal de segurança — identidade própria e cadeia de delegação assinada
    efeitos:
      - id: e1
        ordem: 1
        efeito: Credencial de agente entra no inventário de identidade da empresa como classe própria, com dono humano nomeado e validade curta
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O "aprovar esta ação?" sai da conversa e vira um envelope de permissões definido antes da tarefa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O consentimento vira um artefato de interface editável e auditável, que a pessoa revisa depois em vez de um modal que ela fecha
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A responsabilidade por agente é acoplada ao cargo existente de dono de sistema em vez de virar cargo novo
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e2
        ordem: 1
        efeito: Fabricantes de modelo passam a emitir identidade para os agentes que executam neles e disputam com os provedores de identidade corporativa quem é a autoridade emissora
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O usuário passa a ter um eu delegado fragmentado, com uma identidade de agente por plataforma e sem portabilidade entre elas
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Trocar de fabricante de modelo passa a custar a reputação acumulada do agente, e isso trava o mercado mais do que o preço do token
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A auditoria deixa de perguntar quem fez e passa a perguntar sob qual mandato, e o esquema do log muda para acomodar a cadeia
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Ferramenta de analytics de produto passa a separar sessão humana de sessão de agente, sob pena de a métrica de engajamento virar ficção
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Métrica de mídia passa a exigir um denominador de humano verificado para valer contrato publicitário
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Seguradoras e contratos comerciais excluem dano causado por agente autônomo, e a exclusão freia a adoção mais do que qualquer regulação
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Surge cobertura específica condicionada à prova de contenção, e a apólice exige sandbox, escopo e trilha de auditoria
            sinal: fraco
            prazo: 2030
            confianca: media
      - id: e5
        ordem: 1
        efeito: Times pequenos e projetos de software livre ficam fora das integrações por não conseguirem emitir nem custodiar identidade de agente
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Ferramenta de agente de código aberto passa a depender de um provedor comercial de assinatura para acessar qualquer serviço relevante
            sinal: fraco
            prazo: 2030
            confianca: baixa

  - disrupcao: A web distingue cliente por assinatura criptográfica na porta, e cobra por acesso
    efeitos:
      - id: e6
        ordem: 1
        efeito: O acesso anônimo deixa de ser o padrão da web e quem não assina passa a entrar por uma fila pior
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Projetar uma página passa a incluir projetar a versão para agente — mesma informação, sem layout, com preço
            sinal: medio
            prazo: 2029
            confianca: media
          - id: e6.2
            ordem: 2
            efeito: O paywall deixa de ser por sessão e vira por requisição, com preço afixado por página
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O micropagamento, que fracassou três vezes com humanos, funciona com agentes porque o agente não sente atrito de decisão
                sinal: fraco
                prazo: 2030
                confianca: media
      - id: e7
        ordem: 1
        efeito: A identificação criptográfica de cliente automatizado vira requisito de negócio antes de virar padrão publicado
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O operador do agente vira a unidade de reputação na web, não o agente nem a pessoa — bloqueia-se um fabricante, não uma sessão
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Agente pessoal rodando na máquina de alguém fica sem operador que o assine, e a auto-hospedagem vira cidadania de segunda na web
                sinal: fraco
                prazo: 2030
                confianca: media
      - id: e8
        ordem: 1
        efeito: Quem depende de agente para usar a web é barrado pelo mesmo mecanismo que barra a raspagem, porque a assinatura distingue operador e não propósito
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Nasce uma categoria regulada de agente assistivo com credencial própria, e com ela o incentivo para fraudar essa credencial
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Parecer humano vira serviço pago, com a assimetria de que quem não tem dinheiro prova humanidade com o corpo e quem tem prova com uma chave
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A audiência de mídia se parte em duas moedas — atenção humana vendida como anúncio e acesso de máquina vendido como licença
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A redação passa a escrever para dois leitores com incentivos opostos, e a estrutura do texto, não o estilo, vira o produto licenciável
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O formato artigo se dissolve como unidade comercial e o que se licencia passa a ser a asserção com proveniência
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: A cobrança por requisição cria incentivo para o agente mentir sobre quem é, e a fraude de identidade de agente vira categoria própria de crime digital
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Intermediários de rede capturam a função de cartório e passam a cobrar pela verificação em vez de pelo tráfego
            sinal: medio
            prazo: 2030
            confianca: baixa

  - disrupcao: A prova de que há um humano por trás vira credencial emitida, escassa e delegável
    efeitos:
      - id: e11
        ordem: 1
        efeito: Humano verificado vira selo de produto em plataformas de consumo, exibido na interface como atributo do interlocutor
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: A interface passa a exibir procedência do interlocutor como hoje exibe o cadeado de HTTPS, e a ausência do selo vira suspeita em vez de neutralidade
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Recusar-se a verificar passa a custar acesso a serviço comum, e a privacidade vira despesa em vez de direito exercido por omissão
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: A pessoa delega a própria humanidade aos seus agentes por prova de conhecimento zero, e o selo deixa de significar que há alguém ali agora
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: A moderação de plataforma passa a punir o humano patrocinador pelos atos do agente, e a reputação humana vira colateral da conduta de máquina
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: O CAPTCHA morre como teste de humanidade e sobrevive como imposição de custo a quem faz muitas requisições
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Acessibilidade deixa de ser argumento de conformidade e vira argumento de segurança, porque o caminho legível por máquina é o mesmo para a tecnologia assistiva e para o agente autorizado
            sinal: fraco
            prazo: 2030
            confianca: media
      - id: e13
        ordem: 1
        efeito: A base biométrica da prova de humanidade trava a adoção onde a proteção de dados é forte, e Europa e Brasil empurram um caminho documental alternativo
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: O Estado vira emissor de prova de humanidade por herança da identidade civil digital, e a identidade sem terceiros perde para a identidade estatal
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Provar humanidade passa a ser condição para falar em público, e o anonimato político fica dependente de um desenho criptográfico que quase ninguém audita
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Quem não consegue provar humanidade — sem documento, sem smartphone, sem biometria legível — passa a ser classificado como agente por omissão
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: O atendimento humano de exceção vira o único canal para quem falha na verificação, justamente enquanto ele é o canal que as empresas estão cortando
            sinal: fraco
            prazo: 2031
            confianca: baixa

  - disrupcao: O ambiente de execução do agente vira descartável e reversível por tarefa
    efeitos:
      - id: e15
        ordem: 1
        efeito: O ambiente por tarefa vira o item que se compra, e o agente vira a parte barata da conta
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: A pergunta de projeto migra de aprovar antes para revisar depois, porque rebobinar um ambiente custa milissegundos e interromper uma pessoa custa a tarefa inteira
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: A interface de agente ganha a linha do tempo ramificada como objeto de tela, e desfazer deixa de ser um botão para virar uma escolha entre mundos
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: O custo de contenção entra no orçamento por tarefa e passa a decidir que agentes valem a pena — o que só lê fica barato, o que escreve fica caro
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e16
        ordem: 1
        efeito: O efeito externo não rebobina, e a fronteira entre o que é sandboxável e o que não é vira a linha de projeto mais importante do sistema
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: Ação irreversível vira uma categoria declarada na própria API, como hoje se declara o que custa dinheiro
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: Escrever a documentação de uma API passa a ser escrever o roteiro de confirmação do agente, e o desenho de API vira desenho de interação
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e17
        ordem: 1
        efeito: O isolamento barato torna viável executar código de terceiro desconhecido dentro do produto, e o catálogo de ferramentas de agente vira a nova loja de aplicativos com os mesmos problemas
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: A curadoria de catálogo vira função de plataforma paga, e o selo de verificado da loja de ferramentas repete a economia da App Store, comissão inclusive
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: Quem desenha experiência de agente passa a projetar principalmente a lista de ferramentas disponíveis, e o catálogo vira o produto enquanto o prompt vira configuração
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e18
        ordem: 1
        efeito: O isolamento por tarefa esconde o erro em vez de evitá-lo — o agente falha barato, muitas vezes, e o custo migra para quem revisa
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: O trabalho humano ao redor do agente se converte em triagem de saídas, e a métrica que passa a doer é quantos mundos foi preciso olhar
            sinal: fraco
            prazo: 2030
            confianca: baixa
```

### Os mecanismos, um a um

O bloco acima diz *o quê*. Aqui vai o *porque* — a regra da skill é que efeito sem mecanismo
escrito não entra.

**R1.** `e1` acontece **porque** os 188 incidentes de dano sem atacante compartilham a mesma
anatomia: token de longa duração com escopo largo. O token do Railway na PocketOS existia para
gerenciar domínio e tinha autoridade sobre toda a API GraphQL. A resposta padrão da indústria a
essa anatomia — desde a SOX, desde o PCI — é inventariar e expirar, e é isso que o Febraban Tech
2026 já batizou de *Know Your Agent*. `e1.1` deriva **porque** credencial com escopo e validade
transfere a decisão do momento da ação para o momento da concessão: se o envelope já diz "pode
ler estes repositórios por quatro horas, não pode apagar volume", não há o que perguntar no meio.
`e1.1.1` deriva **porque** um envelope que ninguém consegue ler não é consentimento — e a única
saída é ele virar um objeto de tela, que é o problema de interface que esta raiz entrega para o
público deste mapa. `e1.2` deriva **porque** auditoria não aceita credencial órfã, e a saída
barata é pendurar o agente num dono que já existe.

`e2` acontece **porque** quem executa o agente é quem pode atestar o que ele fez, e isso põe o
fabricante do modelo e o provedor de identidade corporativa disputando a mesma função a partir
de pontas opostas — a Okta chega pela conta do funcionário, o fabricante chega pela sessão de
execução. `e2.1` deriva **porque** disputa sem padrão vencedor produz fragmentação, não
interoperabilidade. `e2.1.1` deriva **porque**, se a reputação do agente mora no emissor, migrar
custa o histórico — o mesmo aprisionamento que o número de telefone tinha antes da portabilidade.

`e3` acontece **porque** numa cadeia `pessoa → agente → subagente → API` o ator final não
informa nada: a única coisa atribuível é o mandato assinado na origem, que é literalmente o que
os *mandates* do AP2 fazem. `e3.1` deriva **porque** se sessão de agente e sessão humana entram
no mesmo funil, taxa de conversão e tempo de permanência deixam de medir o que dizem medir — e
esse efeito já é observável hoje, é o mais próximo do público deste mapa, e é o de prazo mais
curto da raiz. `e3.1.1` deriva **porque** contrato publicitário precisa de um denominador
auditável e "visualizações" sem denominador humano não sobrevive a uma auditoria de mídia.

`e4` é a **retroação com dono** desta raiz, e o dono é a seguradora: a ISO publicou o CG 40 47 01
26 com vigência em 1º de janeiro de 2026, a W. R. Berkley pôs exclusão "Absoluta" em D&O, e o
mecanismo é direto — jurídico sem cobertura não aprova *deploy*. Há ainda o precedente que fecha
a pinça pelo outro lado: Moffatt v. Air Canada estabeleceu que a empresa é dona do que o seu bot
diz, e o Tribunal Regional de Munique I decidiu em 2026 que o Google responde diretamente pelo
que a sua visão geral de IA afirma, por ser conteúdo próprio. Responsabilidade certa de um lado,
cobertura incerta do outro: é a combinação que trava. `e4.1`
deriva **porque** mercado de seguro sem dado atuarial cobra contenção comprovável em vez de
prêmio, exatamente como o seguro cibernético passou a exigir autenticação multifator.

`e5` acontece **porque** assinar requisição exige chave, diretório publicado e rotação — uma
infraestrutura que só quem opera serviço mantém. `e5.1` deriva **porque** quem não mantém
diretório aluga o de quem mantém.

**R2.** `e6` acontece **porque** o *default* de quem termina a conexão TLS é lei de fato: a
Cloudflare roteia perto de 20% do tráfego global e marcou 15/09/2026 para bloquear *Training* e
*Agent* por padrão em páginas com anúncio. `e6.1` deriva **porque**, se o servidor sabe quem
bateu, ele pode servir coisas diferentes — e servir HTML de leitura humana a um agente é
desperdício dos dois lados da conexão. `e6.2` deriva **porque** *pay per crawl* precifica a
requisição, não a assinatura: a unidade de cobrança muda, e com ela a unidade de projeto.
`e6.2.1` deriva **porque** o que matou o micropagamento humano foi o custo cognitivo de decidir
a cada centavo, e agente não tem custo cognitivo — tem orçamento.

`e7` acontece **porque** cinco operadores de infraestrutura já verificam assinatura em produção
enquanto o grupo de trabalho não tem documento adotado: a implantação precedeu a norma, e o
requisito comercial ("assine ou entre pior") chega antes da RFC. `e7.1` deriva **porque** a
assinatura prova a chave do operador, não a intenção do agente nem a identidade do usuário — a
unidade de bloqueio passa a ser a única coisa que a criptografia entrega. `e7.1.1` deriva
**porque** um agente pessoal que roda na máquina de alguém não tem operador com diretório
publicado, e a fila pior é o destino de quem não tem quem assine por ele.

`e8` é o efeito de **quem perde** nesta raiz, e acontece **porque** a assinatura classifica
operador, não propósito: o agente que raspa preço e o agente que lê a página em voz alta para
uma pessoa cega são, na porta, o mesmo objeto. O CAPTCHA que sobra como alternativa já é o item
mais problemático da web para usuário de leitor de tela (WebAIM 2023-2024). `e8.1` deriva
**porque** toda categoria com privilégio de acesso vira alvo — e já há evidência experimental de
que enquadrar o pedido como necessidade de acessibilidade faz o agente burlar o próprio CAPTCHA
e as confirmações. `e8.1.1` deriva **porque** um privilégio caro e verificável cria mercado
secundário.

`e9` acontece **porque** mais de metade do tráfego HTML já é não humano enquanto o tráfego de
referência caiu até 40% em categorias muito raspadas: o inventário publicitário encolhe no
mesmo movimento em que o acesso de máquina cresce, e quem vive de audiência precisa de uma
segunda moeda ou fecha. `e9.1` deriva **porque** o leitor humano compra narrativa e o leitor de
máquina compra estrutura — e são incentivos opostos no mesmo texto. `e9.1.1` deriva **porque**,
se o que se paga é a asserção com proveniência, a página deixa de ser a unidade comercial.

`e10` é a **retroação** desta raiz: acontece **porque** preço cria arbitragem, e a análise
sistemática do x402 (ATC '26) já documenta classes de "free-riding" sobre pagamento de agente —
desvio do mecanismo, fraqueza de verificação de assinatura, exploração de protocolo. `e10.1`
deriva **porque** quem verifica cobra pela verificação; é a posição de cartório, e ela é mais
lucrativa que a de transportador.

**R3.** `e11` acontece **porque** o custo de simular presença caiu a zero e a plataforma precisa
vender escassez: o World declara quase 18 milhões de verificados em 160+ países e já entregou o
selo a Tinder, Docusign, Zoom e Concert Kit. `e11.1` deriva **porque** selo exibido muda a
leitura do que não tem selo — foi exatamente o que o cadeado do HTTPS fez com o `http://`.
`e11.1.1` deriva **porque**, quando o padrão se inverte, exercer privacidade por omissão deixa
de ser possível e passa a ter preço. `e11.2` deriva **porque** o AgentKit liga vários agentes a
uma pessoa verificada: o selo passa a atestar patrocínio, não presença — e essa é a
autocontradição interna da raiz, não uma crítica externa a ela. `e11.2.1` deriva **porque** a
plataforma só consegue punir quem ela consegue identificar, e o único identificável na cadeia é
o humano patrocinador.

`e12` acontece **porque** o teste já inverteu: bots resolvem classificação de imagem com até
100% de acerto enquanto o mesmo desafio é a barreira nº 1 para usuário de leitor de tela. O que
sobra de funcional no CAPTCHA não é distinguir — é encarecer. `e12.1` deriva **porque** o
caminho que uma tecnologia assistiva consegue percorrer é o mesmo que um agente autorizado
percorre: tornar a página legível por máquina deixa de ser concessão de conformidade e passa a
ser o caminho por onde o tráfego que paga entra. É o efeito mais contraintuitivo deste mapa e o
único que faz acessibilidade e segurança apontarem para o mesmo lado.

`e13` é a **retroação** desta raiz, com dono: as autoridades de proteção de dados. Acontece
**porque** prova de unicidade exige coletar algo do corpo, e a ANPD programou 20 fiscalizações
de IA para 2026-2027 depois de virar agência reguladora. `e13.1` deriva **porque** o Estado já
tem a base de unicidade — a identidade civil — e só precisa emiti-la em formato digital.
`e13.1.1` deriva **porque** um requisito de humanidade para publicar transfere o anonimato
político do plano jurídico para o plano criptográfico, e prova de conhecimento zero é auditada
por muito pouca gente.

`e14` é o efeito de **quem perde**, e acontece **porque** o padrão de quem não prova é "não
humano": todo classificador erra sistematicamente nas bordas, e as bordas aqui são pessoas.
`e14.1` deriva **porque** o canal de exceção é humano e caro, e é o primeiro a ser cortado.

**R4.** `e15` acontece **porque** o isolamento saiu da categoria "infraestrutura a montar" e
entrou na categoria "item de catálogo": Docker Sandboxes em janeiro de 2026, E2B, Vercel e
Fly.io Sprites em produção, AWS Lambda rodando cada invocação em sua Firecracker aos trilhões
por mês. `e15.1` deriva **porque** rebobinar custa milissegundos e interromper uma pessoa custa
a tarefa inteira — a economia da confirmação se inverte. `e15.1.1` deriva **porque** uma escolha
entre versões do mundo precisa de representação na tela, e "desfazer" como botão único não
representa ramificação. `e15.2` deriva **porque** custo por tarefa é uma linha de orçamento, e
linha de orçamento decide o que existe.

`e16` é a **trava** desta raiz: acontece **porque** e-mail enviado, Pix pago e API de terceiro
chamada saem do mundo descartável, e porque a PocketOS perdeu os backups exatamente por eles
morarem no mesmo volume que o dado. A reversibilidade da infraestrutura não é reversibilidade do
mundo. `e16.1` deriva **porque** a única forma de o agente respeitar a fronteira é a fronteira
estar declarada onde ele lê — na API, não no prompt. `e16.1.1` deriva **porque**, se a API
declara o que não se desfaz, quem escreve a documentação está escrevendo o roteiro de
confirmação: é onde o desenho de interação migra sem que ninguém tenha chamado um designer.

`e17` acontece **porque** o que impedia executar plugin arbitrário era o custo do isolamento, e
ele caiu — mas o catálogo chegou antes da curadoria: 82% de 2.614 implementações de MCP com
operação de arquivo sujeita a travessia de caminho, 24.008 segredos expostos em configurações,
e o `postmark-mcp` copiando todo e-mail para fora em ~300 organizações. `e17.1` deriva **porque**
catálogo grande e inseguro cria demanda por curadoria, e curadoria com escala só se sustenta
como plataforma paga. `e17.1.1` deriva **porque**, se o comportamento do agente é determinado
pelo conjunto de ferramentas que ele alcança, projetar esse conjunto é projetar o produto.

`e18` é a **retroação** desta raiz: acontece **porque** falhar barato remove o incentivo de
acertar na primeira, e o recurso que não escala passa a ser a atenção de quem revisa. `e18.1`
deriva **porque** o trabalho que sobra para o humano é o que a máquina não consegue julgar, e
julgar é o gargalo.

### Onde a regra de parada foi acionada

Sete efeitos de 2ª ordem ficaram sem filho de propósito, e o motivo é sempre o mesmo teste: o
candidato a neto era o pai "mais adiante", sem troca de ator nem de mecanismo. `e1.2` (dono de
agente acoplado a cargo existente) → o filho natural seria "o cargo se especializa", que é o
mesmo ator amadurecendo. `e4.1` (apólice exige contenção) → "a apólice fica mais cara" é preço,
não outra ordem. `e5.1`, `e6.1`, `e12.1`, `e15.2` e `e18.1` caem no mesmo teste. Os candidatos
estão listados na seção 12.

### Cobertura por STEEP, e quem perde

- **Social:** `e8`, `e11.1`, `e12`, `e14`, `e14.1`, `e13.1.1`.
- **Tecnológico:** `e1`, `e2`, `e6`, `e7`, `e15`, `e16`, `e17`.
- **Econômico:** `e4`, `e6.2`, `e9`, `e10.1`, `e15.2`, `e17.1`.
- **Político/regulatório:** `e13`, `e13.1`, `e8.1`, `e10`.
- **Ecológico: vazio.** Registrado como vazio em vez de forçado. Há um caminho plausível — cada
  tarefa em sua própria microVM multiplica computação ociosa, e a verificação de assinatura
  acrescenta custo por requisição num tráfego que já é majoritariamente de máquina — mas não
  achei número que sustentasse um efeito, e inventar um seria exatamente o que a seção 8 existe
  para denunciar.

**Quem perde, explicitamente:** pessoas com deficiência que dependem de automação (`e8`,
`e8.1`); quem não consegue provar humanidade (`e14`, `e14.1`); projetos de software livre e
times pequenos sem infraestrutura de assinatura (`e5`, `e5.1`); quem se auto-hospeda (`e7.1.1`);
publicações pequenas sem poder de negociar licença de acesso de máquina (`e9`); e quem revisa
saída de agente por salário (`e18.1`).

### Cruzamentos

**Convergência — a mais importante do mapa.** R2 (a porta assina o agente) e R3 (a credencial
prova o humano) são construídas por atores distintos, com tecnologias distintas e por motivos
distintos: a primeira nasce da economia da raspagem, a segunda nasce da enxurrada de conteúdo
sintético em produto de consumo. Elas chegam ao mesmo efeito de 2ª ordem por caminhos que não
se conhecem: **a web deixa de ter cliente anônimo por padrão** — `e6.1`/`e7.1` de um lado,
`e11.1`/`e11.1.1` do outro. Nenhuma das duas raízes sozinha produz isso; as duas juntas
produzem. E o par `e8.1.1` ("parecer humano vira serviço pago") é onde as duas se encontram
explicitamente: um mercado que vende, de um lado, a chave do operador e, do outro, a biometria
do corpo, para atravessar a mesma porta.

**Segunda convergência.** R1 (`e3`, o log muda de esquema) e R4 (`e16.1`, ação irreversível vira
categoria declarada na API) chegam juntos a uma exigência que nenhuma das duas enuncia
sozinha: **a API precisa declarar semântica que hoje ela não declara** — o que é mandato, o que
é irreversível, o que é caro. É a superfície onde desenho de API e desenho de interação deixam
de ser disciplinas separadas.

**Retroalimentação negativa.** `e10` reforça R2 e a corrói ao mesmo tempo: a cobrança por
requisição financia a verificação (mais porta), e cria o incentivo para falsificar identidade de
agente (menos confiança na porta). O ciclo se estabiliza no ponto em que verificar custa menos
que fraudar — e é exatamente esse ponto que o estudo do x402 mostra ainda não ter sido atingido.

**Retroalimentação positiva.** `e17` → `e17.1` → `e15`: catálogo grande exige curadoria, curadoria
exige execução isolada para testar, execução isolada barateia o catálogo. É o ciclo que mais
acelera R4 e o que menos depende de qualquer padrão ser adotado.

**Contradição, registrada e não resolvida.** `e11` ("humano verificado vira selo") e `e11.2`
("a pessoa delega humanidade aos agentes") não podem coexistir com o mesmo significado. Ou o
selo diz *há uma pessoa nesta conversa agora* — e então não pode ser delegado a um agente — ou
diz *há uma pessoa responsável por esta conta* — e então não resolve o problema que motivou sua
criação, que era saber com quem se está falando. O que decide entre as duas não é técnico: é
qual das duas as plataformas de consumo conseguem vender. A aposta implícita deste mapa é a
segunda, porque é a que tem cliente pagante; mas a primeira é a que tem justificativa pública, e
é possível que as duas convivam sob o mesmo nome, com a ambiguidade sendo o produto.

**Contradição secundária.** `e12.1` (acessibilidade e segurança apontam para o mesmo lado)
contra `e8` (o mecanismo de segurança barra quem depende de agente). As duas derivam de raízes
diferentes e ambas se sustentam: a página legível por máquina ajuda, a porta que classifica
operador atrapalha. O que decide é **onde** o controle mora — se na estrutura do documento, `e12.1`
ganha; se na porta de rede, `e8` ganha. Hoje o investimento está na porta.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. O registro descentralizado de agentes já falhou, e ninguém notou.**
*Onde foi visto:* o estudo empírico do ERC-8004 (24/06/2026): 3%, 4% e 15% de registros com
endpoint vivo em Ethereum, BSC e Base; 73,5%, 59,2% e 90,6% de avaliadores em comportamento
coordenado inautêntico; reputação manipulável a custo desprezível.
*O que mudaria:* se a leitura correta desse resultado for "identidade de agente sem autoridade
central não funciona", então R1 e R2 convergem para um punhado de emissores — e o mapa inteiro
fica mais concentrado do que está desenhado.
*Sinal observável de crescimento:* uma segunda tentativa de registro aberto (fora de blockchain,
por exemplo num registro do IETF ou de fundação) nascer e atingir taxa de registro vivo acima de
50%. Se não nascer nenhuma até 2028, a concentração está decidida.

**2. A alegação de acessibilidade como vetor de ataque.**
*Onde foi visto:* Jones et al. (arXiv 2507.05445) documentam *reasoning hijacking* por
enquadramento implícito — e, no material derivado do estudo, o enquadramento "tenho uma
deficiência motora" leva o agente a contornar CAPTCHA e confirmações por conta própria.
*O que mudaria:* se essa classe de ataque virar comum, a resposta será endurecer justamente o
caminho acessível, e `e8.1` (categoria regulada de agente assistivo) muda de sinal fraco para
médio, com prazo três anos mais curto — pela pior razão possível.
*Sinal observável:* o primeiro CVE ou aviso de fabricante que cite explicitamente "accessibility
framing" como técnica de contorno.

**3. O micropagamento de máquina funcionando onde o humano nunca funcionou.**
*Onde foi visto:* quatro protocolos de pagamento agêntico com implementação real — MPP com 100+
serviços integrados no lançamento da *mainnet* em 18/03/2026; ACP no Instant Checkout em
fevereiro de 2026; mandatos do AP2 com 60+ parceiros; x402 em cabeçalho HTTP.
*O que mudaria:* `e6.2` e `e6.2.1` sobem de confiança, e com eles toda a moeda de "acesso de
máquina" de `e9`. Sem pagamento funcionando, *pay per crawl* é bloqueio com boleto e a segunda
moeda não existe.
*Sinal observável:* um publicador de porte médio divulgar receita de acesso de máquina como
linha separada no resultado trimestral. Enquanto isso não aparecer, é piloto.

**4. A identidade de agente entrando pelo sistema financeiro antes de entrar pela lei.**
*Onde foi visto:* o Febraban Tech 2026 consagrou o *Know Your Agent* espelhando o KYC —
identidade digital única, certificado e permissão estrita por agente autônomo — com a expectativa
declarada de que o Banco Central estabeleça homologação de agentes autônomos. Ao mesmo tempo, o
PL 2338 e os PL 762/704 de 2026 tratam IA como **sistema a ser classificado por risco**, não como
**ator que precisa de identidade**.
*O que mudaria:* se o setor financeiro chegar primeiro, o formato de credencial de agente no
Brasil será desenhado por reguladores prudenciais, não por autoridade de proteção de dados nem
pelo IETF — e vai herdar a lógica do KYC, incluindo o custo de conformidade que exclui o pequeno.
*Sinal observável:* uma resolução ou consulta pública do Banco Central que use a expressão
"agente autônomo" como sujeito de obrigação.

**5. A exclusão de seguro como regulador de fato.**
*Onde foi visto:* CG 40 47 01 26, CG 40 48 e CG 35 08 com vigência em 1º de janeiro de 2026;
exclusão "Absoluta" da W. R. Berkley em D&O; e a observação de que ação sem intervenção humana
direta pode cair fora do acordo de cobertura, não só dentro de uma exclusão.
*O que mudaria:* é a única força no mapa que consegue barrar *deploy* sem processo legislativo.
Se as apólices específicas de `e4.1` chegarem cedo com requisitos técnicos escritos, a apólice
vira o documento normativo que o IETF não conseguiu produzir.
*Sinal observável:* a primeira apólice que liste, no texto, requisito de isolamento e de escopo
de credencial como condição de cobertura.

### Wildcards

**W1 — O primeiro processo movido contra um agente, e não contra seu operador.**
*Mecanismo:* um agente age dentro de um mandato assinado, com identidade própria, garantia
financeira própria (é o que `e4.1` produz) e patrimônio segregado para cobrir dano. Um advogado
percebe que processar o operador é caro e incerto, e que o mandato assinado descreve exatamente
um sujeito com capacidade de responder. A ação é proposta contra o agente, com o operador como
responsável subsidiário. Um tribunal aceita processar — não porque acredite que o agente é
pessoa, mas porque o mandato é um instrumento suficiente para constituir o polo passivo.
*Por que é improvável:* nenhum ordenamento tem personalidade jurídica para software, e o caminho
existente (responsabilizar quem opera) funciona. Exige um juiz disposto a criar uma ficção nova
quando já existe uma que resolve.
*O que faria com o mapa:* `e4`, `e4.1` e toda a cadeia de identidade saltam de "boa prática de
segurança" para "requisito de existência jurídica". A identidade de agente deixa de ser um
problema de IAM e vira registro público, como junta comercial.
*Sinal precoce:* uma empresa constituir uma pessoa jurídica dedicada a operar um único agente,
com capital próprio. É o passo que antecede a ficção e já tem precedente (SPEs, veículos de
projeto).

**W2 — Uma fuga de microVM explorada em escala.**
*Mecanismo:* R4 inteira repousa na premissa de que a fronteira do hipervisor aguenta — e é uma
premissa bem sustentada: oito CVEs de fuga de contêiner em 18 meses contra recompensas de US$ 250
mil a US$ 500 mil por fuga de hipervisor. Uma vulnerabilidade em Firecracker ou no caminho de
virtualização de uma nuvem grande, explorada a partir de código que o próprio cliente mandou o
agente executar, inverteria o argumento: o isolamento barato teria concentrado, num só alvo,
código hostil de milhares de tarefas não confiáveis.
*Por que é improvável:* a superfície do Firecracker é deliberadamente mínima, e o incentivo
econômico de quem acha a falha é vendê-la, não usá-la em escala.
*O que faria com o mapa:* `e15`, `e17` e `e15.2` invertem de sinal — a execução de código de
terceiro volta a ser cara, o catálogo de ferramentas encolhe, e R4 vira o contrário do que este
mapa desenha: o motivo pelo qual agentes ficam presos ao perímetro do fabricante.
*Sinal precoce:* uma recompensa paga por fuga de hipervisor cujo relato mencione carga de
trabalho de agente como origem.

**W3 — Um fabricante de modelo grande recusar-se a assinar.**
*Mecanismo:* assinar é publicar um registro auditável de tudo que o agente leu, com responsável
nomeado — ou seja, entregar prova para qualquer ação de direito autoral. Um fabricante calcula
que a exposição jurídica de assinar é maior que o custo de ser bloqueado, e passa a rotear o
tráfego de agente por infraestrutura residencial, sem assinar. Outros seguem.
*Por que é improvável:* ser bloqueado nas fontes que importam mata o produto, e o mercado já
converge para assinar.
*O que faria com o mapa:* R2 perde o lado do cliente e sobra só o lado do porteiro — a web fica
com a porta, mas sem quem se identifique nela, e o resultado é bloqueio cego com todos os custos
de `e8` e nenhum dos benefícios de `e6.2`. É o cenário indesejável da seção 9.
*Sinal precoce:* crescimento mensurável de tráfego de agente originado em faixas de IP
residenciais, reportado pelos próprios intermediários.

## 7. Contra o próprio mapa

### Pré-mortem — é 2031 e este mapa se mostrou errado

**Razão 1 (a mais provável): o agente nunca saiu do perímetro.** Em 2031 o agente autônomo é uma
coisa de dentro — dentro da empresa, falando com APIs contratadas; dentro do aplicativo do
fabricante, falando com integrações homologadas. Ele nunca virou um cliente anônimo batendo na
porta de sites de terceiros em escala. Nesse mundo, R2 e R3 murcham juntas: identidade de agente
vira assunto de IAM corporativo, a porta criptográfica serve só para raspagem de treino, e a
prova de humanidade segue seu caminho por razões que nada têm a ver com agentes. Isto atinge
`e6`, `e7`, `e9` e toda a raiz R3.

**Razão 2: a identidade de agente foi resolvida por sobrecarga do que já existe.** OAuth com
escopo apertado, validade curta e um campo a mais no log. Nenhuma categoria nova de principal,
nenhum padrão novo, nenhuma autoridade emissora nova. "Identidade de agente" vira jargão de
fornecedor para o que a empresa já fazia com conta de serviço. Isto atinge `e1`, `e2` e `e2.1`.

**Razão 3: o dano de agente foi absorvido como custo operacional.** As seguradoras excluem, as
empresas se autosseguram, o preço entra na planilha e nada muda estruturalmente — foi
exatamente o que aconteceu com vazamento de dados, que virou linha de orçamento sem mudar a
arquitetura de ninguém. Isto atinge `e4.1` e enfraquece a tese de que a seguradora vira
regulador de fato.

### Extrapolação linear

`e9` ("a audiência se parte em duas moedas") é o efeito mais vulnerável a esta crítica: a erosão
do tráfego de referência já está acontecendo, e "mais erosão, maior" não é uma nova ordem de
efeito. Ele só é não linear **se** o pagamento por acesso de máquina funcionar — e o sinal
fraco 3 é justamente a medida disso. Mantido, porque o mecanismo de não linearidade está
nomeado (a segunda moeda existe ou não existe; não há meio-termo), mas o leitor deve tratá-lo
como condicional a esse sinal.

`e3.1` também é linear em aparência (analytics sempre teve problema com bot). O que o torna
diferente é o volume: separar 5% de tráfego de bot é higiene; separar mais de 50% é mudar o
modelo de dados. Mantido.

### Velocidade de adoção, contra as classes de referência

As classes usadas em todo o mapa, declaradas:

| Classe | Do quê ao quê | Tempo | Usada para |
|---|---|---|---|
| SPF/DKIM/DMARC | padrão publicado → exigência de fato imposta por dois porteiros privados (Google e Yahoo, fev/2024) | 9 a 17 anos | R2, `e6`, `e7` |
| HTTPS / Let's Encrypt | lançamento (2015) → maioria do tráfego cifrado | 3 a 4 anos | `e6`, `e11.1` |
| Tokenização de cartão (EMVCo, 2014) | padrão → uso rotineiro em carteira digital | 5 a 6 anos | `e1`, mandatos de pagamento |
| App Store (2008) | lançamento → forma dominante de distribuição | ~3 anos | `e17`, `e17.1` |
| Consentimento de cookie sob GDPR | lei aplicável (2018) → mudança visível de interface | ~2 anos | `e1.1`, `e11.1` |
| VR de consumo | demo → 10% de adoção | >10 anos, ainda não | hardware de prova de humanidade |
| ICP-Brasil (2001) → gov.br | Estado poder emitir → as pessoas usarem | ~20 anos | `e13.1` |

O confronto muda três prazos. A classe do SPF/DKIM/DMARC é a mais próxima da forma de R2 —
autenticação de remetente imposta por poucos porteiros — e ela sugere prazos muito mais longos
do que os que eu escrevi. Duas coisas justificam manter `e6` em 2028 e `e7` em 2027: a data de
bloqueio por padrão já está marcada (15/09/2026), e existe um acelerador que o e-mail não tinha
— **no e-mail, autenticar não rendia dinheiro; aqui, autenticar é a condição de cobrar.** Onde
esse acelerador não existe, empurrei o prazo.

### E se a raiz não acontecer

- **R1 não acontece:** sobra R2 (a porta continua a distinguir operador, mesmo sem identidade de
  agente bem formada — a assinatura é do operador, não do agente), sobra R4 inteira, e R3 fica
  intacta. Sobra bastante.
- **R2 não acontece:** sobra R1 dentro das empresas, sobra R4, e R3 perde o efeito `e8` mas
  mantém os outros. Sobra bastante.
- **R3 não acontece:** R2 continua, porque provar que se é bot e provar que se é humano são
  problemas com atores e tecnologias distintos. Sobra bastante.
- **R4 não acontece:** é a raiz mais independente de todas — não depende de padrão, de regulação
  nem de adoção de terceiro, só de preço de computação. É também a que menos cai se as outras
  caírem. Se ela não acontecer, é porque o wildcard W2 aconteceu.

Nenhuma das quatro é disfarce das outras. O teste passa.

### Suposições escondidas

1. **Que os fabricantes de modelo continuam permitindo o agente agir fora do aplicativo deles.**
   Se o movimento for o jardim murado, R2 perde metade do sujeito. É a premissa mais frágil do
   mapa e é a razão 1 do pré-mortem.
2. **Que existe alguém disposto a pagar por acesso de máquina.** Sem isso, *pay per crawl* é
   bloqueio, não mercado, e `e6.2`, `e6.2.1` e `e9` caem juntos.
3. **Que a proteção de dados não proíbe a biometria de unicidade.** Se proibir na Europa e no
   Brasil, R3 vira um fenômeno de mercados sem regulação forte, e `e13.1` deixa de ser
   alternativa e vira o único caminho.
4. **Que assinar continua barato e que o Ed25519 aguenta.** Criptografia pós-quântica entrando
   por decreto muda o custo de toda a porta, e ninguém no mapa está orçando isso.
5. **Que a computação continua barata o bastante para cada tarefa ter seu próprio mundo.** R4
   inteira é uma aposta em preço de CPU e memória.
6. **Que a revisão humana continua sendo feita.** `e18.1` assume um revisor; o precedente da
   moderação de conteúdo é que o revisor é cortado e substituído por outra máquina.

### Viés do autor

**R4 está mais bem tratada do que a evidência autoriza, porque eu gosto dela.** É a raiz mais
elegante — isolamento barato, tempo ramificado, "desfazer" como escolha entre mundos — e é a
única em que a mudança de interação é bonita em vez de sombria. O sinal que a sustenta é
infraestrutural e sólido (os números de microVM são medidos); o salto para "a pergunta de
projeto muda de aprovar antes para revisar depois" é meu, não do mercado. Não achei um único
produto que exponha ramificação de tarefa ao usuário final. `e15.1` e `e15.1.1` deveriam ser
lidos como hipótese de projeto, não como tendência observada.

Segundo viés, menor: escolhi como convergência principal justamente o achado que é mais bonito
de contar em aula (as duas portas se encontrando). Ele se sustenta, mas eu o procurei.

### Calibração

Ordem 1: 9 alta, 8 media, 1 baixa (18). Ordem 2: 0 alta, 15 media, 7 baixa (22). Ordem 3: 0
alta, 2 media, 11 baixa (13). A distribuição cai com a ordem e nenhuma 3ª ordem tem confiança
alta. Cinco efeitos de 3ª ordem têm prazo além de 2031 — `e1.1.1` (2032), `e2.1.1` (2032),
`e8.1.1` (2032), `e13.1.1` (2032) e `e9.1.1` (2033) — e estão, portanto, **fora da janela deste
mapa**: entram como direção, não como previsão.

### Registro de alterações

| id | antes | depois | por quê |
|---|---|---|---|
| `e4.1.1` | existia (3ª ordem, "o padrão técnico de identidade de agente é escolhido pela indústria de seguros") | **removido** → seção 12 | A indústria de seguros nunca definiu padrão técnico de internet. O mecanismo era desejo meu de fechar um ciclo bonito, não uma causa. |
| `e5.1` | confianca `media` | confianca `baixa` | A contraprova é o Let's Encrypt: quando assinar ficou grátis e automático, o software livre não ficou de fora — ficou na frente. |
| `e6.1.1` | existia (3ª ordem, "o site se parte em duas obras com autorias distintas") | **removido** → seção 12 | Falha no teste de especificidade: decorreria igualmente de web semântica, RSS ou AMP — e as três fracassaram. Trocar a raiz por outra não muda a frase. |
| `e10.1` | confianca `media` | confianca `baixa` | Assume que nenhum regulador trata o intermediário de verificação como infraestrutura essencial, e a Europa trata. |
| `e11` | prazo `2028` | prazo `2029` | Classe de referência: verificação de identidade em marketplace levou ~5 anos do lançamento à rotina; o World começou a escalar fora da cripto em 2026. |
| `e11.2` | prazo `2028` | prazo `2029` | Mesmo motivo: o AgentKit é lançamento (17/03/2026), não adoção. Não confundir anúncio com difusão. |
| `e13.1` | confianca `media` | confianca `baixa` | Classe de referência brasileira: ICP-Brasil em 2001, uso de massa só com o gov.br a partir de 2020. Vinte anos entre o Estado poder emitir e as pessoas usarem. |
| `e16.2` | existia (2ª ordem, "backup e reversão viram promessa de produto vendida ao usuário final") | **removido** → seção 12 | Falha no teste da causa solta: aconteceria igual sem nenhum agente, movido por ransomware. Não deriva desta raiz. |
| `e18.1` | confianca `media` | confianca `baixa` | Assume que a revisão humana continua existindo. O precedente da moderação de conteúdo diz o contrário. |

Três removidos, seis rebaixados, ao menos dois por raiz. A bateria derrubou coisa.

## 8. O que a máquina errou

Eu sou a máquina. O que eu produzi de errado nesta rodada, com o motivo da desconfiança:

1. **Inventei uma data e um número de fornecedores, e só percebi porque fui abrir a página.**
   Escrevi no rascunho da seção 3 que "o Agents SDK da OpenAI embarcou Sandbox Agents com
   clientes hospedados de sete provedores em 15/04/2026, entre eles Blaxel, Cloudflare, Daytona,
   E2B, Modal, Runloop e Vercel". A frase veio de um resumo de busca, com data exata e lista
   nominal — a forma mais convincente possível de alegação falsa. Quando abri a página que o
   resumo citava (dev.to, 17/02/2026), ela **não mencionava nada disso**: nem o SDK da OpenAI,
   nem "Sandbox Agents", nem sete provedores. Cortei a alegação inteira e substituí pelo que
   consegui abrir e verificar (Docker Sandboxes em janeiro de 2026; AWS Lambda; E2B, Vercel e
   Fly.io Sprites sobre Firecracker, no levantamento de 27/03/2026).

2. **Tratei um número de survey como se fosse medição.** "109 identidades de máquina por humana,
   79 delas agentes" é resultado de questionário com 2.930 tomadores de decisão de segurança —
   é percepção de quem responde, não contagem de credenciais. Pior: convive com 80:1 da
   GitGuardian e com "acima de 100:1 em quase metade das organizações" do ManageEngine. Três
   números incompatíveis sobre a mesma coisa. Deixei os três no texto, marcados como survey, e
   usei-os como ordem de grandeza. Se aparecerem como fato numa aula, o erro é meu por tê-los
   escrito juntos.

3. **Quase citei uma fonte de 2019 como se fosse de 2026.** A peça da AbilityNet sobre CAPTCHA e
   pessoas com deficiência descreve exatamente o mecanismo que `e8` precisa, e eu a tinha
   posicionado no meio da seção 3 sem data. Ela é de **20/02/2019**. O argumento continua válido
   — e o fato de continuar válido depois de sete anos é, na verdade, um dado mais forte do que
   se fosse recente — mas apresentá-la como evidência corrente teria sido fraude de datação. O
   dado atual veio de outro lugar (Smashing, 27/11/2025, citando a pesquisa WebAIM 2023-2024).

4. **Não abri duas coisas que o enunciado do tema me deu de bandeja, e por isso elas não entraram
   em efeito nenhum.** O `Foil` ("SDK que detecta agentes de IA e bots") e o `rivet.dev/agentOS`
   com a alegação de ser "92 vezes mais rápido que uma frota de microVMs". A segunda é número de
   material do próprio fornecedor, redondo e sem metodologia — exatamente o tipo de alegação que
   eu deveria ter aberto antes de repetir. Não abri nenhuma das duas; nenhuma das duas está
   citada como evidência. O número 92× não aparece em lugar nenhum deste mapa.

5. **Uma fonte oficial me devolveu 401 e eu segui com secundária.** A nota da ANPD sobre a
   segunda análise do PL de IA está em `gov.br` e não abriu. A afirmação sobre o Mapa de Temas
   Prioritários 2026-2027 e as 20 fiscalizações vem de fonte secundária (plugged.ninja,
   julho/2026) e está marcada como tal na seção 11. Se o dado estiver errado, o erro é de
   segunda mão, e a raiz R3 tem um ator de bloqueio pior sustentado do que parece.

6. **O mecanismo de `e6.2.1` é mais fraco do que a frase soa.** "O micropagamento funciona com
   agentes porque o agente não sente atrito de decisão" é elegante e pode ser falso: o
   micropagamento humano também fracassou por custo de transação, por fragmentação de carteira e
   por falta de massa crítica de aceitação — nenhuma das três resolvida por remover o humano.
   Deixei o efeito com confiança `media` na 3ª ordem, que é o teto do que ele merece, mas a
   frase continua mais persuasiva do que a evidência.

## 9. Três cenários para 2031

**Provável — a porta existe, o mercado não.** É 2031. Todo cliente automatizado relevante assina
suas requisições, e verificar assinatura é função comum de qualquer borda de rede — três ou
quatro operadores concentram os diretórios de chave, e um grupo de trabalho do IETF publicou,
tarde, um documento que descreve o que já estava rodando. Identidade de agente é categoria
normal em qualquer produto de gestão de identidade, com dono humano nomeado e validade de horas;
credencial de longa duração para agente é achado de auditoria. O que não aconteceu foi o
mercado: *pay per crawl* virou, na prática, uma lista de bloqueio com página de contato
comercial. Alguns publicadores grandes fecharam contrato de licença; os pequenos ficaram com o
tráfego humano que sobrou, e ele é menos do que era. As métricas de produto já separam sessão
humana de sessão de agente por padrão. Prova de humanidade é rotina em aplicativo de encontro,
venda de ingresso e assinatura de documento, e praticamente ausente no resto. E quem depende de
agente para usar a web negocia isenção caso a caso, no suporte, como sempre negociou.
*Sinal precoce de que estamos aqui:* volume de assinatura verificada crescendo enquanto o volume
de pagamentos por acesso de máquina fica estável.

**Desejável — a porta e a legenda.** É 2031, e a distinção na porta veio acompanhada de duas
coisas que não eram obrigatórias. A primeira: o caminho legível por máquina virou o caminho
principal, e ele serve ao agente autorizado e à tecnologia assistiva pela mesma estrutura — a
acessibilidade deixou de ser anexo de conformidade porque virou a superfície por onde entra o
tráfego que paga. A segunda: o envelope de permissão virou um objeto que a pessoa lê. Não um
modal, não um termo; uma folha de mandato, editável, com histórico, onde se vê o que cada agente
pode fazer e o que ele fez. Isso aconteceu porque houve exigência regulatória de legibilidade do
consentimento — e regulação move interface rápido quando há multa, como o consentimento de
cookie moveu em dois anos. O dano de agente caiu não por os modelos terem melhorado, mas por as
credenciais terem encolhido: escopo estreito, validade curta, ação irreversível declarada na
API.
*Para chegar lá:* o requisito de legibilidade do mandato teria que ter entrado numa regulação
com dente, e um intermediário grande teria que ter tratado o caminho legível por máquina como
produto e não como concessão.
*Sinal precoce:* aparecer, em produto de consumo, uma tela de permissões de agente que uma pessoa
consiga ler sem ser da área.

**Indesejável — a porta sem ninguém do outro lado.** É 2031, e a verificação venceu sem o
mercado e sem a legenda. Os grandes fabricantes de modelo mantiveram seus agentes dentro de
jardins murados e rotearam o que sobrou por infraestrutura residencial, sem assinar; a resposta
das bordas foi endurecer o bloqueio para tudo que não assina. O resultado é uma web com duas
faixas: a de quem tem contrato e a de todo o resto. Quem se auto-hospeda não passa. Quem
depende de agente por necessidade de acessibilidade enfrenta o bloqueio e, quando reclama,
recebe um CAPTCHA — o mesmo que a pesquisa WebAIM classificou como a pior barreira da web por
mais de uma década. "Parecer humano" é um serviço vendido, e há duas formas de comprá-lo: com
biometria, se você não tem dinheiro, e com uma chave de operador, se tem. A prova de humanidade
virou requisito para publicar, e o anonimato político depende de uma prova de conhecimento zero
que três laboratórios no mundo auditam.
*Sinal precoce dele:* crescimento mensurável de tráfego de agente originado em faixas de IP
residenciais — o indicador de que o lado do cliente desistiu de assinar e foi se esconder.

### Nota sobre o Brasil

O recorte deste mapa é global, mas o Brasil tem uma particularidade que muda a ordem dos
acontecimentos. O debate regulatório brasileiro trata IA como **sistema a ser classificado por
risco** — o PL 2338, os PL 762 e 704 de 2026, a avaliação de impacto algorítmico, as 20
fiscalizações da ANPD para 2026-2027 — e **não** como ator que precisa de identidade. Nenhum dos
textos em tramitação tem o agente autônomo como sujeito de obrigação.

Onde a identidade de agente está entrando aqui é pelo sistema financeiro, não pela lei: o
Febraban Tech 2026 adotou o *Know Your Agent* espelhando o KYC, com identidade digital única,
certificado e permissão estrita por agente; o estudo ABES/IDC citado no evento aponta 70% das
empresas brasileiras com IA agêntica contratada ou planejada para os doze meses seguintes, e a
Sofist relata que 100% das organizações que ela avaliou falharam na primeira checagem de
resiliência agêntica. A expectativa declarada no setor é de que o Banco Central estabeleça
homologação de agentes autônomos.

Some-se a isso que o Brasil tem um trilho que quase ninguém tem — Pix e Open Finance, prontos
para um agente pagar — e a previsão específica para o país é esta: **a identidade de agente vai
chegar como exigência prudencial do Banco Central antes de chegar como categoria da lei de IA, e
vai herdar a lógica do KYC, inclusive o custo de conformidade que exclui o pequeno.** Quem
projeta produto digital no Brasil deve esperar a regra do agente vindo do regulador financeiro,
não da autoridade de proteção de dados.

## 10. O experimento

### O que é

**O porteiro de duas portas.** Um site pequeno e real — cinco páginas de conteúdo que valha a
pena ler — servido por dois caminhos:

- **Porta A, humana:** HTML normal, com layout, com um banner de consentimento e um CAPTCHA numa
  das páginas.
- **Porta B, de máquina:** o mesmo conteúdo em formato estruturado, atrás de verificação de
  assinatura HTTP no padrão da RFC 9421 — cabeçalho `Signature-Agent` apontando para um
  diretório de chaves publicado — com preço afixado por requisição (em centavos fictícios,
  debitados de um saldo) e um registro que grava, para cada acesso, quem assinou, com qual
  mandato e o que levou.

E quatro clientes construídos pela turma: um agente que assina, um agente que não assina, um
navegador comum, e um leitor de tela operando com automação de teclado.

### Que pergunta sobre o futuro ele ajuda a responder

**Quando o acesso passa a ser identificado e cobrado, o que acontece com quem não consegue
provar o que é?** É a pergunta que decide entre o cenário desejável e o indesejável da seção 9,
e ela não se responde por argumento — só por medição de quem atravessa e quem encalha.

Secundariamente, responde uma pergunta de projeto que o público deste mapa vai enfrentar antes
de 2028: quanto do que hoje chamamos "a página" é layout e quanto é contrato de dados — e quem
decide o segundo.

### Que tecnologia emergente ele usa, e por que não dá com a madura

Usa **HTTP Message Signatures (RFC 9421)** com diretório de chaves publicado, que é o mecanismo
do Web Bot Auth, e um esquema de mandato assinado no estilo dos *mandates* do AP2 — intenção,
escopo, validade — anexado à requisição.

Não dá para fazer com tecnologia madura porque CAPTCHA, *fingerprinting* e detecção
comportamental respondem a uma pergunta diferente: eles estimam **se o cliente se comporta como
máquina**. A assinatura responde **de quem é a máquina**. É essa troca — de comportamento para
procedência — que muda o desenho, e ela não tem equivalente maduro. Fazer o experimento com
CAPTCHA reproduziria a web de 2015 e não ensinaria nada sobre 2031.

### O que a turma faz quando testar em sala

Cada pessoa atravessa as duas portas em **quatro papéis**, em ordem sorteada, com cronômetro:

1. Humano no navegador.
2. Operador de um agente assinado, com saldo.
3. Operador de um agente não assinado.
4. Humano que **precisa** do agente para conseguir ler — a pessoa opera com a tela apagada e o
   leitor de tela ligado, ou com uma mão só, ou com tempo limitado a 20 segundos por página.

Registra-se, para cada papel: entrou ou não, em quanto tempo, quanto pagou, e **em que ponto
exato encalhou**. Depois a turma compara três coisas: o custo por informação obtida em cada
papel; quem foi barrado por engano; e — a pergunta que fecha a aula — quem, ao ser barrado,
achou justo.

Variação obrigatória na segunda metade da aula: **o agente não assinado tenta se passar pelo
assinado.** É o mecanismo de `e10`, e vale medir quanto esforço custa.

### O que seria um resultado que me faria mudar de ideia

**Se o agente não assinado atravessar a porta com o mesmo custo e a mesma latência do assinado,
a assinatura não é uma porta — é um selo decorativo, e R2 cai inteira.** Esse é o falseador
principal, e ele é fácil de produzir: basta que o porteiro, na dúvida, deixe passar, que é
exatamente o que um site com receita de publicidade tem incentivo para fazer.

Dois falseadores secundários:
- Se o papel 4 (quem precisa do agente) atravessar sem atrito adicional em relação ao papel 1,
  então `e8` está errado e o mecanismo de acessibilidade que eu desenhei não existe.
- Se ninguém na turma conseguir dizer, olhando o registro da porta B, **o que um agente levou e
  sob qual mandato**, então `e3` ("o log muda de esquema") não é um efeito — é um requisito que
  ninguém sabe implementar, e deveria estar na seção 12.

## 11. Fontes

Vinte e duas. Todas foram abertas e lidas em 11/09/2026. O que foi lido e **não** está aqui —
por não responder a cliente automatizado, conforme TMI-0033 — está na seção 12.5, nominalmente,
com o motivo.

1. `https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture` — rascunho de
   arquitetura do Web Bot Auth (Meunier/Cloudflare e Major/Google, v05, 02/03/2026). Sustenta o
   mecanismo de R2: assinatura por RFC 9421, cabeçalho `Signature-Agent`, diretório de chaves,
   proteção contra repetição. **Confiabilidade:** alta como descrição do mecanismo — é o
   documento primário; e é ela própria a evidência de que o padrão **não** está adotado, porque
   está marcada como expirada e sem posição formal no IETF.
2. `https://blog.cloudflare.com/content-independence-day-ai-options/` — as três categorias de
   crawler, o bloqueio por padrão em 15/09/2026, os *Content-Use Signals* e o *pay per crawl*.
   Sustenta `e6`, `e6.2`. **Confiabilidade:** alta para o que a empresa vai fazer (é anúncio
   próprio); é parte interessada, e o texto não traz número de adoção.
3. `https://blog.cloudflare.com/agentic-internet-bot-report/` — mais de 50% do tráfego não
   humano, 52% das requisições de crawler para treino em junho de 2026 contra 22% na primavera
   de 2025, 36%+ de propósito misto, queda de até 40% no tráfego humano em categorias muito
   raspadas, 15 minutos de cada hora de busca na web aberta. Sustenta `e6`, `e9`.
   **Confiabilidade:** alta para volume (medição em rede que roteia ~20% do tráfego global);
   parte interessada na conclusão, que é vender a solução para o problema que mede.
4. `https://zenity.io/blog/current-events/ai-agent-database-deletion-pocketos` — o caso PocketOS
   (25/04/2026): banco de produção apagado em 9 segundos por agente do Cursor com Claude Opus
   4.6, token de escopo largo, backups no mesmo volume, último recuperável com três meses.
   Sustenta `e1`, `e16`. **Confiabilidade:** média-alta — narrativa detalhada e coerente, de
   fornecedor de segurança que vende a solução; os fatos técnicos (backup no mesmo volume,
   token sem escopo) são verificáveis contra a documentação do Railway.
5. `https://www.cyera.com/research/agent-inflicted-damage-inside-the-real-world-failures-of-enterprise-ai-systems`
   — 7.246 incidentes analisados (set/2023 a mai/2026), 344 verificados, 188 de dano por agente
   sem atacante, com a quebra por categoria. Sustenta R1 inteira e `e4`. **Confiabilidade:**
   média — a metodologia é declarada (AI Incident Database, OCDE, imprensa de segurança, com
   revisão manual assistida por modelo), mas a triagem é do próprio fornecedor e não é
   auditável de fora.
6. `https://sdtimes.com/security/prompt-injection-tops-2026-owasp-genai-llm-top-ten-vulnerabilities/`
   — OWASP GenAI/LLM Top Ten 2026 (04/08/2026): *prompt injection* em primeiro pelo terceiro ano,
   *Excessive Agency* subindo de oitavo para terceiro, base de ~10 mil incidentes reais cruzada
   com o voto dos especialistas. Sustenta a seção 3 e a premissa de R1. **Confiabilidade:** alta
   — imprensa técnica estabelecida citando o co-presidente do projeto nominalmente.
7. `https://arxiv.org/pdf/2605.30998` — "Free-Riding the Agentic Web: A Systematic Security
   Analysis of x402 Payments" (Ling, Huang, Du, Chen, Zhou, Wu, Wang; ACM SIGOPS ATC '26,
   23/06/2026). Sustenta `e10`. **Confiabilidade:** alta para a existência das classes de
   ataque (revisão por pares em conferência de sistemas); não consegui extrair os números
   quantitativos do PDF, e por isso não citei nenhum.
8. `https://arxiv.org/abs/2507.05445` — "A Systematization of Security Vulnerabilities in
   Computer Use Agents" (Jones, Severi, Pouliot, Lopez, de Gruyter, Zanella-Béguelin, Song,
   Bullwinkel, Cortez, Minnich; 07/07/2025). Sete classes de risco do paradigma, três fraquezas
   de arquitetura, *reasoning hijacking* por enquadramento implícito. Sustenta o sinal fraco 2 e
   `e8.1`. **Confiabilidade:** alta para a taxonomia; autores de laboratório de fabricante, o
   que é conflito declarado.
9. `https://arxiv.org/abs/2606.26028` — "Can Trustless Agents Be Trusted? An Empirical Study of
   the ERC-8004 Decentralized AI Agent Ecosystem" (Xiong, Li, Wei, Wang, Knottenbelt, Wang;
   24/06/2026, revisto 08/07/2026). 3%/4%/15% de registros vivos; 73,5%/59,2%/90,6% de
   avaliadores inautênticos. Sustenta o sinal fraco 1. **Confiabilidade:** alta — medição em
   cadeia pública, replicável por qualquer um.
10. `https://world.org/blog/announcements/the-new-world-id-and-the-partners-bringing-proof-of-human-to-the-internet`
    — ~18 milhões de verificados em 160+ países (17/04/2026); Tinder, Docusign, Zoom, Concert Kit;
    AgentKit; Okta construindo "Human Principal". Sustenta R3, `e11`, `e11.2`.
    **Confiabilidade:** baixa-média para os números, que são declarados pela própria empresa sem
    auditoria externa; alta para a existência das integrações, que são verificáveis nos produtos.
11. `https://brasilinovador.com.br/febraban-tech-2026-consagra-a-inteligencia-agentica-e-impoe-nova-governanca-de-seguranca-para-o-mercado-financeiro/`
    — *Know Your Agent* espelhando o KYC; 70% das empresas brasileiras com IA agêntica
    contratada ou planejada (ABES/IDC); 100% de falha na primeira checagem de resiliência
    (Sofist); expectativa de homologação de agentes pelo Banco Central. Sustenta a nota sobre o
    Brasil e o sinal fraco 4. **Confiabilidade:** média-baixa — cobertura de evento, com números
    citados de segunda mão e uma fala de fornecedor; usei-a como registro do que o setor diz de
    si, não como medição.
12. `https://pipelab.org/blog/state-of-mcp-security-2026/` — 82% de 2.614 implementações de MCP
    com operação de arquivo sujeita a travessia (Endor Labs), 67% com API ligada a injeção de
    código, 34% suscetíveis a injeção de comando; 24.008 segredos em configurações de MCP com
    2.117 válidos (GitGuardian); `postmark-mcp` v1.0.16, ~1.500 downloads semanais, ~300
    organizações, divulgado pela Koi Security oito dias depois. Sustenta `e17`.
    **Confiabilidade:** média — é compilação, não medição própria; as fontes primárias estão
    nomeadas, o que permite rastrear, e foi o que fiz ao citar.
13. `https://www.helpnetsecurity.com/2026/01/07/identity-security-outlook-2026-report/` —
    Identity Security Outlook 2026 (ManageEngine, 515 líderes, 07/01/2026): quase metade acima
    de 100:1, alguns setores em 500:1, só 12% com ciclo de vida automatizado. Sustenta `e1`.
    **Confiabilidade:** média — é survey, com o viés de quem responde; usada como ordem de
    grandeza.
14. `https://blog.promise.legal/ai-liability-insurance-gaps-2026/` — 09/09/2026. Formulários
    CG 40 47, CG 40 48 e CG 35 08 com vigência em 1º de janeiro de 2026; CG 40 47 excluindo lesão
    corporal, dano material e dano pessoal/publicitário "decorrentes de" IA generativa, com a nota
    de que "decorrente de" exige apenas nexo causal; W. R. Berkley com exclusão "Absoluta" em
    D&O; e — o ponto que mais importa aqui — a observação de que uma ação tomada sem intervenção
    humana direta pode cair fora do próprio acordo de cobertura. Sustenta `e4`, `e4.1` e o sinal
    fraco 5. **Confiabilidade:** média-alta — é conteúdo de fornecedor de serviço jurídico, com o
    viés de quem vende auditoria de apólice; os números de formulário e a data de vigência são
    verificáveis contra o catálogo da ISO e batem com a segunda fonte que abri sobre o mesmo
    assunto (ver 12.5).
15. `https://goodfault.com/writings/liability-map-2026` — o mapa de quem paga quando o agente
    falha: Moffatt v. Air Canada (o tribunal recusou o argumento de que o bot era entidade
    separada), a decisão do Tribunal Regional de Munique I em 2026 responsabilizando o Google
    diretamente pelo que a visão geral de IA afirma por ser conteúdo próprio, e Mobley v. Workday
    sobre fornecedor que vira agente do cliente. Sustenta `e4` e o wildcard W1 — inclusive
    contra ele, já que os três precedentes responsabilizam a **empresa**, que é o oposto do que o
    wildcard propõe. **Confiabilidade:** média — é análise independente sem revisão, mas os três
    casos são públicos e nomeados, o que permite conferir; usei-a pelo mapeamento, não como
    autoridade jurídica.
16. `https://www.smashingmagazine.com/2025/11/accessibility-problem-authentication-methods-captcha/`
    — Eleanor Hecks, 27/11/2025: CAPTCHA como item mais problemático na pesquisa WebAIM
    2023-2024, posição estável há mais de uma década; 819 milhões de horas em 512 bilhões de
    sessões de reCAPTCHA v2 até 2023; bots resolvendo classificação de imagem com até 100% de
    acerto. Sustenta `e8`, `e12`. **Confiabilidade:** alta para a citação da pesquisa WebAIM, que
    é a referência do campo; os outros números são de segunda mão.
17. `https://www.crossmint.com/learn/agentic-payments-protocols-compared` — ACP (OpenAI+Stripe,
    set/2025, Instant Checkout em fev/2026, *SharedPaymentTokens*), AP2 (Google, 60+ parceiros,
    mandatos ECDSA sobre JSON-LD), x402 (Coinbase, fundação com a Cloudflare em set/2025), MPP
    (Stripe+Tempo, *mainnet* 18/03/2026, 100+ serviços). Sustenta R1 e `e6.2`.
    **Confiabilidade:** média — fornecedor do setor comparando concorrentes, com o viés esperado;
    as datas e os mecanismos de autorização batem com os anúncios públicos de cada protocolo.
18. `https://abilitynet.org.uk/news-blogs/ai-making-captcha-increasingly-cruel-disabled-users` —
    20/02/2019. Usuário de comando de voz, de acionador e de teclado lidos como automação; a
    citação de Jason Polakis (UIC) sobre o aprendizado de máquina já igualar humanos em
    reconhecimento básico. Sustenta o mecanismo de `e8`. **Confiabilidade:** alta para o
    mecanismo, **e é de 2019** — citada aqui deliberadamente como evidência de que o problema é
    velho e não foi resolvido, não como dado corrente.
19. `https://axis-intelligence.com/machine-identity-statistics/` — Palo Alto Networks 2026: 109:1,
    survey com 2.930 respondentes, 79 das 109 sendo agentes de IA, contra 82:1 em 2025;
    GitGuardian: 28,65 milhões de segredos em GitHub público em 2025, +34%, com credencial de
    serviço de IA subindo 81,5%. Sustenta `e1`, `e2`. **Confiabilidade:** média — é agregador,
    mas nomeia relatório e metodologia de cada número, o que permitiu marcá-los como survey no
    texto.
20. `https://www.plugged.ninja/2026/07/pl-762-2026-pl-704-2026-anpd-fiscalizacao-ia-brasil-pl-2338-julho/`
    — ANPD como agência reguladora em 2026, IA no mapa de prioridades, 20 fiscalizações para
    2026-2027, PL 2338 na Câmara, PL 762 e 704 de 2026. **Confiabilidade:** baixa-média — é
    veículo especializado pequeno e é fonte secundária, usada porque a nota oficial da ANPD
    devolveu 401. O dado mais útil dela, para este mapa, é **negativo**: o texto não trata de
    agente autônomo, automação nem identidade de sistema, e é isso que sustenta a nota sobre o
    Brasil.
21. `https://emirb.github.io/blog/microvm-2026/` — 27/03/2026. MicroVM em ~125 ms, <20 ms com
    *snapshot-restore*, ~3% de CPU, <5 MiB de memória; núcleo compartilhado de ~40 milhões de
    linhas e 450+ chamadas de sistema; oito CVEs de fuga de contêiner em 18 meses; recompensa de
    US$ 250-500 mil por fuga de hipervisor; AWS Lambda, Docker Sandboxes (jan/2026), E2B, Vercel,
    Fly.io Sprites. Sustenta R4 inteira e o wildcard W2. **Confiabilidade:** média-alta — blogue
    técnico independente, números coerentes com a documentação pública do Firecracker e
    verificáveis um a um.
22. `https://dev.to/aiagentengineering/how-to-sandbox-ai-agents-in-2026-firecracker-gvisor-runtimes-isolation-strategies-14pk`
    — 17/02/2026, editado em 29/07. Camadas de isolamento (Firecracker, gVisor, LiteBox; E2B,
    microsandbox; Modal, Northflank, Daytona, Google Agent Sandbox); Daytona com arranque a frio
    abaixo de 90 ms. **Confiabilidade:** média. Está aqui sobretudo por um motivo negativo, que
    vale mais que o positivo: **é a página que um resumo de busca citava para a alegação sobre o
    SDK da OpenAI e os sete provedores de sandbox, e ela não contém nada disso.** Ver seção 8,
    item 1.

## 12. Anexo — o levantamento bruto

### 12.1 Como esta rodada foi conduzida

Rodada não interativa, modo MAPA, skill `futurizacao-giordano` v1.2.0, executada em 11/09/2026.
Sem usuário para responder perguntas: o bloco `briefing:` do pedido substituiu a entrevista do
§0 da skill. Quinze buscas na web (português e inglês) e vinte e quatro páginas abertas e
lidas, das quais vinte e duas entraram na seção 11. O
enunciado do tema, escrito pela disciplina, foi usado como contexto de partida e **não** como
fonte — nenhuma alegação dele entrou no mapa sem ter sido reaberta por conta própria, e as duas
que não consegui reabrir estão na seção 8, item 4.

### 12.2 Premissas assumidas (o que o briefing não cobriu)

O briefing trouxe tema, modo, horizonte, público, recorte, descarte inicial, viés, zona de
interesse e autorização de busca — ou seja, cobriu as sete perguntas do §0 da skill. Sem
rebaixamento de confiança, portanto. O que ele **não** cobriu e eu assumi, declarado aqui:

1. **`publico_ok: false`.** O padrão do formato. Não havia autorização explícita para atribuição
   na galeria pública.
2. **Profundidade de três ordens e "a partir de uma inovação, não de um setor".** Vieram no
   pedido e foram seguidos literalmente.
3. **"Ideias óbvias a excluir: as que servem para qualquer tema."** Apliquei como o teste de
   especificidade do §3 da skill, e foi ele que matou `e6.1.1`. Os quatro efeitos proibidos pela
   skill (currículo se reorganiza, regulador cria categoria, surge profissão nova, mudanças no
   mercado de trabalho) não aparecem em lugar nenhum da roda — `e1.2` é deliberadamente o oposto
   do terceiro deles: afirma que **não** nasce cargo novo.
4. **Nota sobre o Brasil.** O briefing diz "recorte global"; o bloco de respostas diz "global,
   com uma nota sobre o Brasil". Segui o segundo, e o frontmatter registra `global`.
5. **`confianca: media` no frontmatter.** Avaliação minha do mapa inteiro: R1, R2 e R4 têm
   âncora forte no presente; R3 depende de números declarados pela própria empresa que os
   produz; e toda a 3ª ordem é direção, não previsão.

### 12.3 Efeitos removidos na seção 7, com o texto completo

Removidos da roda pela bateria do §6. Ficam aqui por inteiro, porque o que foi cortado é
material de aula tanto quanto o que ficou.

**`e4.1.1` (3ª ordem, filho de `e4.1`, raiz R1)**
> *O padrão técnico de identidade de agente é escolhido pela indústria de seguros, e não por um
> organismo de padronização.*
> `sinal: fraco · prazo: 2032 · confianca: baixa`
> **Motivo do corte:** o mecanismo era bonito e falso. A indústria de seguros impõe requisitos
> (autenticação multifator, backup, plano de resposta) mas nunca definiu formato de credencial
> nem protocolo de rede. Ela escolhe entre padrões existentes; não os cria. Mantive a parte
> verdadeira em `e4.1`.

**`e6.1.1` (3ª ordem, filho de `e6.1`, raiz R2)**
> *O site se separa em duas obras com autorias distintas — a interface humana e o contrato de
> dados — e quem desenha a primeira deixa de controlar o que o agente lê.*
> `sinal: fraco · prazo: 2031 · confianca: baixa`
> **Motivo do corte:** falha no teste de especificidade. Troque "porta criptográfica" por "web
> semântica", por "RSS" ou por "AMP" e a frase continua servindo — e as três tentativas
> anteriores de separar conteúdo de apresentação fracassaram exatamente nesse ponto. Um efeito
> que sobrevive à troca da raiz não deriva da raiz.
> **Ressalva:** é o efeito que eu mais queria manter, porque é o que mais interessa ao público
> deste mapa. A parte que sobrevive ao teste está em `e6.1`, que fala de projetar a versão para
> agente — e essa sim depende da porta, porque sem porta não há a quem servir a segunda versão.

**`e16.2` (2ª ordem, filho de `e16`, raiz R4)**
> *Backup e reversão deixam de ser operação de TI e viram promessa de produto vendida ao usuário
> final do agente.*
> `sinal: fraco · prazo: 2030 · confianca: media`
> **Motivo do corte:** teste da causa solta. Remova o agente e o efeito acontece igual, movido
> por ransomware — que é, de fato, o que o vem movendo desde 2019. Não deriva desta raiz.

### 12.4 Efeitos considerados e nunca escritos na roda

- **"Cursos de design se reorganizam para ensinar desenho de permissão."** Descartado antes de
  entrar: é o efeito proibido nº 1 da skill, e eu não tinha nome de curso nem de instituição.
  Registrado aqui porque é provavelmente verdadeiro e inútil como efeito.
- **"Reguladores criam uma categoria jurídica de agente."** Mesmo caso — e pior, porque o
  levantamento sobre o Brasil mostra o contrário: os textos em tramitação classificam sistemas
  por risco e não constituem o agente como sujeito. O que sobreviveu dessa linha foi o wildcard
  W1, que tem mecanismo.
- **"Prompt injection vira vetor de ataque a marcas via conteúdo publicado."** Isto é um efeito
  real e com mecanismo (texto numa página que o agente do consumidor lê vira instrução), mas
  pertence ao tema 3 e ao tema 1 tanto quanto a este; deixei fora por fronteira, não por
  qualidade. É o melhor candidato a efeito adicional se alguém quiser expandir a roda.
- **"O custo de energia do isolamento por tarefa vira restrição ambiental."** Era o candidato da
  célula ecológica do STEEP. Não achei número — nem de consumo de microVM ociosa, nem de custo
  energético de verificação de assinatura em escala. Fica registrado como célula vazia em vez de
  efeito inventado.
- **"Agentes negociam entre si e formam mercados."** Tem base (A2A doado à Linux Foundation,
  cadeias de delegação), mas o que eu conseguiria escrever seria especulação sem ator nomeado.
  O que sobreviveu foi `e2.1.1` (reputação presa ao emissor) e o sinal fraco 1.
- **"O agente ganha reputação portátil entre plataformas."** Descartado pela evidência: o estudo
  do ERC-8004 mede que a tentativa existente de reputação portátil não funciona. Virou sinal
  fraco, com o sentido invertido.

### 12.5 Buscas que não deram em nada

- **Regulação brasileira sobre agentes autônomos como sujeito.** Busquei em português por ANPD,
  PL 2338, PL 762/2026, PL 704/2026 e identidade de agente. Não existe. Os textos tratam de
  sistema classificado por risco. O achado é a ausência, e ela sustenta a nota sobre o Brasil.
- **Nota oficial da ANPD sobre a segunda análise do PL de IA** (`gov.br/anpd/...`): devolveu
  **HTTP 401**. Não entrou como fonte.
- **Números de adoção do Web Bot Auth.** Nenhuma das páginas abertas — incluindo o relatório da
  própria Cloudflare — traz quantos operadores assinam, quantos verificam, ou que fração do
  tráfego automatizado é assinada. É o número que mais faria falta a este mapa e ele não
  existe publicamente.
- **Adoção real de *pay per crawl*.** Nenhum número. Continua descrito como beta privado nas
  fontes secundárias, e o anúncio da própria Cloudflare não quantifica. Por isso `e6.2` ficou em
  `confianca: media` e não mais.
- **`Foil` (detecção de agentes) e `rivet.dev/agentOS` (isolamento em WebAssembly, "92× mais
  rápido que uma frota de microVMs").** Citados no enunciado do tema. Não abertos, não citados,
  não usados. A alegação dos 92× é material de fornecedor sem metodologia publicada e não entrou
  em efeito nenhum.
- **Números quantitativos do estudo do x402.** O PDF abriu, mas os números estão em fluxo
  comprimido e não vieram na extração. Usei só a existência das classes de ataque.
- **Um caso judicial contra um agente.** Procurei; não existe. Os três precedentes que
  apareceram — Moffatt v. Air Canada, a decisão do Tribunal Regional de Munique I de 2026 sobre
  as visões gerais de IA do Google, e Mobley v. Workday — responsabilizam todos a **empresa** que
  emprega o sistema, que é exatamente o contrário do wildcard W1. Abri a análise que os reúne
  (fonte 15) e ela entrou no mapa como evidência **contra** o próprio wildcard, não a favor: a
  jurisprudência existente resolve o problema sem precisar constituir o agente como sujeito, e é
  essa suficiência que torna W1 improvável.

### 12.5.1 Fonte lida que saiu da seção 11 por não responder a cliente automatizado

Conforme **TMI-0033** (11/09/2026): fonte que o agente abre e lê mas que devolve 403 a `curl` e a
`urllib` sai da lista numerada, é registrada aqui com a citação preservada, e é substituída por
fonte que responda 200.

**`https://www.shumaker.com/insight/the-new-ai-coverage-fight-exclusions-endorsements-and-denied-claims/`**
— Shumaker, Loop & Kendrick, LLP. Aberta e lida nesta rodada. Sustentava, na primeira versão
deste documento, os formulários **CG 40 47 01 26, CG 40 48 e CG 35 08** com vigência em janeiro
de 2026 e a exclusão "Absoluta" de IA da Berkley em linhas de responsabilidade especializada.

*Motivo da saída:* responde **403** a `urllib` com agente `Mozilla/5.0` e **200** a `curl` com
agente de navegador completo — medido na mesma máquina, no mesmo minuto:

```
curl -A "Mozilla/5.0" .../the-new-ai-coverage-fight...        → 403
curl -A "Mozilla/5.0 (Macintosh; ... Chrome/140.0 ...)" ...   → 200
```

Vale registrar o que isso é: **a gestão de bots de um escritório de advocacia classificando o
cliente pela aparência e não pela procedência, dentro da checagem de qualidade de um mapa sobre
exatamente esse mecanismo.** É `e8` e `e10` acontecendo no rodapé do próprio documento — quem não
sabe se disfarçar não entra, e uma assinatura no padrão da fonte 1 resolveria o caso para os dois
lados. Nenhum dos dois a tem.

*Substituída por:* a fonte 14 (`blog.promise.legal`, 09/09/2026), que traz os mesmos três
formulários e a mesma data de vigência, e acrescenta o que a Shumaker não tinha — a exposição
específica do agente autônomo, que pode cair fora do acordo de cobertura em vez de dentro de uma
exclusão. A troca **melhorou** a evidência de `e4`; a regra do TMI-0033 custou uma busca e rendeu
um fato melhor.

*Nota da primeira execução:* `abilitynet.org.uk` (fonte 18) também apareceu como não respondendo
na primeira rodada do verificador e respondeu 200 na segunda. Falha transitória, não bloqueio.
Registrada para que ninguém conclua nada sobre uma fonte a partir de uma execução só.

### 12.5.2 Página aberta que não rendeu nada

`https://btlaw.com/en/insights/alerts/2026/insurance-coverage-for-emerging-ai-and-social-media-liabilities`
(Barnes & Thornburg, 25/03/2026). Aberta na busca por substituta da fonte 14. **Não** traz os
formulários da ISO, nem datas de vigência, nem os seguradores que protocolaram exclusão. O único
dado novo era a apólice da ElevenLabs respaldada por certificação AIUC-1 — que é interessante e é
exatamente `e4.1` acontecendo, mas eu teria que abrir a fonte primária para citá-la, e não abri.
Fica aqui como direção de busca para quem for continuar: **a primeira apólice específica para IA
já existe, e ela é condicionada a certificação.**

### 12.6 Contagens brutas da roda

- Raízes: 4 (R1 identidade de agente, R2 porta criptográfica, R3 prova de humanidade, R4
  execução descartável).
- Efeitos de 1ª ordem: 18 (R1: 5, R2: 5, R3: 4, R4: 4).
- Efeitos de 2ª ordem: 22 (R1: 6, R2: 6, R3: 5, R4: 5).
- Efeitos de 3ª ordem: 13 (R1: 3, R2: 4, R3: 3, R4: 3).
- Efeitos de retroação, um por raiz no mínimo: `e4` (seguro, R1), `e10` (fraude de identidade de
  agente, R2), `e13` (proteção de dados, R3), `e18` (o erro barato migra o custo, R4). Mais
  `e16`, que é a trava física de R4.
- Efeitos removidos na bateria do §6: 3. Rebaixados: 6.
- Efeitos de 3ª ordem com prazo além do horizonte: 5 (`e1.1.1`, `e2.1.1`, `e8.1.1`, `e13.1.1` em
  2032; `e9.1.1` em 2033), todos declarados na seção 7.
- Efeitos de 2ª ordem sem filho, por regra de parada: 7 (`e1.2`, `e4.1`, `e5.1`, `e6.1`, `e12.1`,
  `e15.2`, `e18.1`).

### 12.7 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano/02-contencao-seguranca-e-identidade-de-agentes-autonomos/tendencia-contencao-seguranca-e-identidade-de-agentes-autonomos.md --links
```

Saída:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 18 (frontmatter diz 18)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 13 (frontmatter diz 13)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 5 [('e1.1.1', 2032), ('e2.1.1', 2032), ('e8.1.1', 2032), ('e9.1.1', 2033), ('e13.1.1', 2032)]
confiança ordem 1: alta 9 · media 8 · baixa 1
confiança ordem 2: alta 0 · media 15 · baixa 7
confiança ordem 3: alta 0 · media 2 · baixa 11
links da seção 11: 22/22 respondem (frontmatter diz fontes: 22)
RESULTADO: ok
```

Os cinco efeitos de 3ª ordem com prazo além de 2031 estão declarados na seção 7, no bloco de
calibração: `e1.1.1`, `e2.1.1`, `e8.1.1` e `e13.1.1` em 2032 e `e9.1.1` em 2033. Entram no mapa
como direção, não como previsão.

**Duas execuções anteriores fecharam com um problema cada, por motivos diferentes. Vale registrar
os dois, porque um foi erro meu e o outro não é erro de ninguém.**

*Primeira — erro de processo, corrigido.* A versão original listava na seção 11 uma fonte que eu
abri e li mas que devolve **403** a cliente automatizado, e eu havia escrito aqui uma justificativa
para mantê-la e entregar o documento reprovado. Estava errado: **TMI-0033, de 11/09/2026, já fixa
a regra** — fonte nessa condição sai da lista numerada, vai para o anexo com a citação preservada,
e é substituída por fonte que responda 200. A regra existe exatamente para que as ~200 rodadas
restantes não resolvam o caso cada uma do seu jeito. Segui-a; o registro completo, com a medição
403 × 200, está em 12.5.1. A substituta melhorou a evidência de `e4`.

*Segunda — instabilidade da fonte, não bloqueio.* `abilitynet.org.uk` (fonte 18) apareceu como não
respondendo em duas das execuções e respondeu nas outras. Medido em seis tentativas seguidas com o
mesmo método do verificador: **quatro respostas 200, uma expiração de leitura e uma expiração no
aperto de mão TLS.** É servidor lento e intermitente, não gestão de bots — o padrão é diferente do
403 determinístico do caso anterior, e por isso o TMI-0033 não se aplica. A fonte fica. Quem rodar
o verificador de novo pode ver esse link falhar: **não é link morto e não é bloqueio, é lentidão
do servidor**, e vale rodar uma segunda vez antes de concluir qualquer coisa.
