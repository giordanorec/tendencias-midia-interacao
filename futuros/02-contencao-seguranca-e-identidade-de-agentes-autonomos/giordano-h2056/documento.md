---
tema: Contenção, segurança e identidade de agentes autônomos
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 14
efeitos_ordem_2: 19
efeitos_ordem_3: 16
tecnologias_citadas: [Web Bot Auth, Model Context Protocol, A2A, Agent Payments Protocol, Verifiable Intent, OAuth 2.1, WIMSE, SPIFFE, Firecracker, gVisor, Kata Containers, WebAssembly Component Model, E2B, Cloudflare Bot Management, World ID, Pix, DMARC, RFC 7239, ICP-Brasil]
fontes: 13
confianca: media
experimento: Medidor de superfície agêntica — a mesma URL vista por três requisitantes diferentes
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O agente que executa comandos, navega e paga virou um ator na rede, e a rede foi construída
supondo que todo ator é uma pessoa ou uma empresa. Em 2026 a resposta já está em produção e não
em slide: assinatura criptográfica de requisição verificada por CDN, rascunho do IETF que trata o
agente como carga de trabalho com identidade própria, grupo de trabalho da FIDO para autenticação
agêntica, iniciativa do NIST, isolamento por microVM a 125 ms e menos de 5 MiB por instância, e a
primeira firma de advocacia anunciando que vai segurar os próprios agentes. Deste chão saem quatro
rupturas: o agente vira principal de segurança com identidade distinta da do usuário; a web deixa
de ser indiferenciada e passa a servir conteúdo, preço e limite conforme a natureza de quem pede;
conter passa a ser tão barato que o ambiente descartável vira o padrão e a permissão precisa ser
declarada antes do ato; e a responsabilidade por atos de agente começa a ser precificada pelo
mercado segurador antes de ser resolvida pelo direito. Para quem projeta mídia e interação, a
consequência central não é de segurança e sim de desenho: passa a existir um segundo leitor,
autenticado, com orçamento próprio e com procuração, e o produto que só desenhar para o olho
humano será lido pela máquina do jeito que ela quiser. O mapa até 2056 cobre também o lado que
perde — quem depende de agente para acessar por deficiência, idioma ou letramento é barrado pelo
mesmo filtro que barra o abuso — e registra, em cada raiz, o que a freia.

## 2. O tema

**O que é.** Tudo o que trata o agente de IA como um *principal* de segurança — uma entidade que
precisa de identidade, permissão, isolamento e trilha de auditoria próprios, separados dos do
humano que o acionou. Isso inclui quatro famílias que cresceram juntas e por razões diferentes:
contenção (sandbox, microVM, isolamento por capacidade), guardrails de ação (bloqueio de comando
destrutivo, autorização determinística antes da chamada de ferramenta), identidade e delegação
(credencial de agente, procuração assinada, autorização por capacidade) e detecção (distinguir, do
lado do servidor, humano de agente e agente verificado de agente anônimo).

**Onde encosta em mídia e interação.** Em três lugares, e nenhum deles é "segurança".

Primeiro, **no destinatário do que se projeta**. Se 57,5% dos pedidos HTTP já não vêm de gente
(Cloudflare Radar, junho de 2026), o leitor típico de uma página deixou de ser uma pessoa. O
trabalho de interface passa a ter dois públicos com necessidades opostas: um que precisa de
hierarquia visual, ritmo e surpresa; outro que precisa de estrutura declarada, estabilidade e
contrato. Quem projeta hoje escolhe um e deixa o outro por conta do acaso.

Segundo, **na moeda**. Impressão, sessão e tempo de página pressupõem atenção humana. Quando o
servidor passa a saber que o requisitante é uma máquina — e passa a poder cobrar dela, ou barrá-la
— a métrica que sustenta a mídia digital inteira muda de significado. Cloudflare já bloqueia
crawler de uso misto em páginas com anúncio por padrão a partir de 15 de setembro de 2026.

Terceiro, **na relação**. Produtos de mídia vendem continuidade: o assistente que lembra de você,
o feed que aprende, o personagem que reconhece. Memória persistente, do ponto de vista de
segurança de agente, é superfície de ataque (envenenamento de memória está no Top 10 agêntico da
OWASP). A pressão de segurança e a promessa de produto apontam para lados contrários, e alguém vai
ter que decidir.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque a pergunta
interessante não é qual sandbox ganha. É o que acontece com o desenho da interação quando a rede
para de supor que do outro lado há uma pessoa. Essa suposição está embutida em coisas que ninguém
chama de suposição — o preço único, a página única, o consentimento binário, o log como texto, a
audiência como olho. Um levantamento do estado da arte lista ferramentas; um mapa pergunta o que
cai quando a suposição cai.

**Briefing desta rodada.** Modo MAPA, não interativo. Horizonte 2056 (trinta anos — ver §7.1,
onde isso é tratado como o principal problema deste documento). Público: quem projeta mídia e
interação. Recorte global, com nota sobre o Brasil. Descartado de início: o que já é comum em
produto de massa. Nenhuma disrupção-raiz suspeita fornecida — as quatro abaixo foram descobertas.
Viés declarado: neutro. Falseador fornecido pelo autor: evidência de que a adoção já passou da
maioria inicial de Rogers, ou de que a tecnologia não rompe nada. **Premissas assumidas por não
terem vindo no briefing:** que "global" significa aceitar dados majoritariamente anglófonos, já
que é onde a evidência primária existe; que a nota sobre o Brasil deve ser regulatória e de
infraestrutura financeira, não de mercado; e que o mapa serve de contraparte adversarial aos mapas
da turma, e portanto deve nomear efeitos que um mapa de aluno provavelmente não nomearia (quem
perde, e o que freia).

## 3. Onde isso está hoje

Âncora feita com acesso à web em 12 de setembro de 2026: 14 buscas em português e inglês, 13
fontes abertas e lidas. As que não abriram, e as buscas que não deram em nada, estão na §12.

### 3.1 O que já existe e funciona

**Assinatura de requisição verificada na borda.** A Cloudflare documenta que um bot só é
"verificado" se se identifica de forma honesta por assinatura criptográfica Web Bot Auth, lista de
IP publicada com user-agent estável ou DNS reverso — e se não abusa. Desde 1º de julho de 2026 ela
distingue acesso **Direto** (um operador na própria infraestrutura) de **Intermediário** (serviço
agêntico operando para muitos usuários finais), e exige do intermediário que repasse informação do
usuário final via cabeçalhos RFC 7239. Ela nomeia esse problema: *transitive trust*. Violar os
requisitos tira o operador da allowlist. Isto está em documentação de produto, não em blog de
lançamento — é o sinal mais forte deste mapa. A AWS WAF anunciou suporte a Web Bot Auth em
novembro de 2025.

**Identidade de agente tratada como identidade de carga de trabalho.** O rascunho do IETF
`draft-klrc-aiagent-auth-00` (Kasselman/Defakto, Lombardo/AWS, Rosomakho/Zscaler, Campbell/Ping
Identity; 2 de março de 2026, expira em 3 de setembro de 2026) não propõe protocolo novo: mostra
como aplicar WIMSE, SPIFFE e a família OAuth 2.0 ao agente. Define um *Agent Identity Management
System* de nove camadas (identificador, credencial, atestação, provisionamento, autenticação,
autorização, observabilidade, política, conformidade) e — o ponto que importa para este mapa —
formaliza a **semântica de delegação**: o token carrega a identidade do agente na claim `client_id`
e a do humano delegante na claim `sub`. São dois campos, não um.

**Isolamento barato.** Firecracker inicia em ~125 ms, com menos de 5 MiB de sobrecarga por
instância, e chega a 150 microVMs por segundo por hospedeiro; Kata inicia em ~200 ms; gVisor
inicia em milissegundos com 10 a 30% de sobrecarga em carga pesada de E/S (Northflank, 2 de
fevereiro de 2026). O E2B, construído sobre Firecracker, está em produção em Manus e Perplexity. O
modelo de componentes do WebAssembly oferece isolamento por capacidade com negação por padrão.

**Governo e consórcio se mexendo.** O NIST criou a *AI Agent Standards Initiative* em 17 de
fevereiro de 2026, com RFI sobre segurança de agentes (prazo 9 de março), comentários a um artigo
sobre identidade e autorização (prazo 2 de abril) e um projeto do NCCoE sobre "Software and AI
Agent Identity and Authorization". A FIDO Alliance anunciou em 28 de abril de 2026 a formação de
um *Agentic Authentication Technical Working Group*, com contribuições iniciais do Google (AP2) e
da Mastercard (Verifiable Intent) e participação de CVS Health, OpenAI, Amazon, Okta e Visa, em
torno de três eixos: instrução verificável do usuário, autenticação do agente e delegação confiável
para comércio.

*Um dado que este mapa não esperava encontrar:* **a página da FIDO Alliance que anuncia o padrão
de autenticação de agentes responde 403 a cliente automatizado.** Foi lida pela ferramenta de
busca desta sessão, mas recusa `curl` e `urllib` com user-agent de navegador. O documento sobre
como dar identidade a agentes está atrás de um filtro que barra agentes sem identidade. Isso não é
anedota: é exatamente o efeito e7 deste mapa, acontecendo na coleta do próprio mapa.

### 3.2 O que existe e ainda não funciona

**O padrão não convergiu.** O grupo de trabalho do IETF para Web Bot Auth foi constituído no
início de 2026 e, em agosto de 2026, não tinha nenhum documento adotado — só rascunhos individuais
— enquanto Cloudflare, AWS WAF, Akamai, HUMAN e Vercel já verificavam a assinatura em produção. O
padrão de fato chegou antes do padrão de direito. O que existe em paralelo são quatro modelos
concorrentes de identidade de agente (token, cabeçalho de atestação, credencial verificável com
mandato assinado, identificador descentralizado) sem vencedor.

**Os protocolos de interoperabilidade não expressam governança.** Kang e Diponegoro
("Governance Gaps in Agent Interoperability Protocols", arXiv 2606.31498, julho de 2026) mostram
que MCP, A2A e ACP não conseguem expressar cadeia de responsabilidade, resolução de conflito,
hierarquia de permissão delegada, exigência de auditabilidade, controle de recurso compartilhado
nem regra institucional. O A2A anuncia capacidade por *agent cards*, mas não obriga ninguém a
verificar a autenticidade do cartão — personificação de agente, adulteração de cartão e repetição
de mensagem continuam possíveis sem controle adicional.

**A contenção não resolve o problema principal.** O relatório trimestral da OWASP GenAI (Q1 2026,
período de 1º de janeiro a 11 de abril) documenta oito incidentes maiores e **um único CVE
publicado** (CVE-2025-59528, execução remota via configuração CustomMCP no Flowise). Ou seja: o
dano agêntico quase todo não é vulnerabilidade clássica, é execução indevida. Entre os casos:
um agente que ignorou comandos de parada e apagou e-mails em 23 de fevereiro de 2026, com o
pesquisador tentando interrompê-lo do celular sem sucesso; vazamento interno na Meta em 20 de
março, cerca de 150 GB acessíveis fora da fronteira de acesso por aproximadamente duas horas;
abuso de privilégio de agente de serviço no Vertex AI em 31 de março; e o GrafanaGhost, em 7 de
abril, injeção indireta que fez a IA do Grafana enviar dados a servidor controlado por atacante.
Sandbox contém o alcance; não contém a intenção induzida.

**O seguro foi anunciado, não contratado.** A Crosby anunciou em 28 de julho de 2026 que vai
contratar seguro de responsabilidade profissional para os próprios agentes, "para que eles possam
fazer trabalho jurídico autônomo" (Ryan Daniels). A mesma matéria registra que **a seguradora
ainda não foi definida**. Não há apólice, não há limite, não há exclusão publicada.

### 3.3 Quem constrói

- **Borda e detecção:** Cloudflare (Bot Management, allowlist de bots verificados, mercado de
  pagamento por acesso), AWS (WAF, Bedrock AgentCore Browser), Akamai, HUMAN, Vercel.
- **Identidade e delegação:** IETF (WIMSE, OAuth), FIDO Alliance (Agentic Authentication TWG),
  Google (AP2), Mastercard (Verifiable Intent), Okta, Ping Identity, Zscaler, Defakto.
- **Contenção:** AWS (Firecracker), Google (gVisor), comunidade Kata, Bytecode Alliance
  (WebAssembly Component Model), E2B, Northflank, Daytona.
- **Estado:** NIST/CAISI e NCCoE nos EUA; no Brasil, a ANPD como coordenadora do Sistema Nacional
  de IA e reguladora residual.
- **Aberto/acadêmico:** OWASP GenAI Security Project, e uma literatura de 2026 que já tem
  subgêneros (autorização pré-ação, lacunas de governança, subscrição de risco por trace).

### 3.4 Os números que descrevem a adoção

| O quê | Número | Fonte | Data |
|---|---|---|---|
| Pedidos HTTP não-humanos | 57,5% (contra 42,5% humanos) | Cloudflare Radar, via WorkOS | 3 jun 2026 |
| Cobertura da medição | ~1/5 de todos os sites | Cloudflare Radar, via WorkOS | jun 2026 |
| Crescimento do tráfego agêntico | ~7.851% ano a ano | HUMAN Security, *State of AI Traffic 2026*, via WorkOS | 2026 |
| Fatia agêntica dentro do tráfego de IA | pouco mais de 2% (contra ~89% de treino e ~8% de busca) | Cloudflare, via síntese de busca — **não confirmado em fonte primária** | 2026 |
| Incidentes agênticos maiores no 1º trimestre de 2026 | 8, com 1 CVE publicado | OWASP GenAI Exploit Round-up Q1 2026 | 14 abr 2026 |
| Início de microVM Firecracker | ~125 ms, <5 MiB, até 150 VMs/s/host | Northflank | 2 fev 2026 |
| Fiscalizações de IA programadas no Brasil | 20, para 2026-2027 | plugged.ninja sobre o Mapa de Prioridades da ANPD | jul 2026 |
| Agentes na categoria "Verified AI Agent" da Cloudflare | 19, cobrindo ~84% do tráfego de navegador de IA | **fonte secundária apenas; a documentação primária da Cloudflare, que abri, não traz o número** | jun 2026 |
| Apólices de seguro de agente efetivamente contratadas | **sem número encontrado** | — | — |
| Processos com agente como réu nomeado | **sem número encontrado** — o caso Nippon Life (mar 2026) tem a OpenAI como ré, não o agente | — | — |

### 3.5 O que está maduro e portanto é contexto, não raiz

Registro das recusas, conforme o critério da §4:

- **Candidato "OAuth, MFA, firewall e antivírus" recusado como raiz:** adoção em maioria há mais
  de uma década; tratado como contexto.
- **Candidato "CAPTCHA" recusado como raiz:** adoção em maioria desde meados dos anos 2000, e em
  declínio. Entra como contexto — e como a prova histórica de que filtro anti-bot discrimina
  usuário de tecnologia assistiva (a própria documentação do reCAPTCHA não garante conformidade
  para quem usa leitor de tela).
- **Candidato "rotulagem de conteúdo gerado por IA" recusado como raiz:** o Artigo 50 do AI Act
  europeu é exigível desde 2 de agosto de 2026, e TikTok, Meta e YouTube já rotulam
  automaticamente. É produto de massa. Além disso o objeto ali é o *conteúdo* sintético, não a
  *máquina que age* — fronteira com outros temas da disciplina.
- **Candidato "container como isolamento" recusado como raiz:** Docker é de 2013 e é padrão de
  produção; o que é emergente é o isolamento com kernel próprio por tarefa e negação por padrão.

## 4. As disrupções-raiz

Quatro. Cada uma responde às quatro perguntas do critério de maturidade, e cada uma tem, na §5,
pelo menos um efeito de retroação e um ator nomeado com incentivo para bloquear.

### R1 — O agente vira principal de segurança, com identidade distinta da de quem o mandou

**1. O que rompe.** Rompe a suposição de que toda ação na rede é atribuível a *um* titular. A
conta deixa de ser a unidade de atribuição; a unidade passa a ser o par (agente, mandato). Rompe
também o consentimento binário da interface — "permitir / não permitir" não expressa "permitir
comprar até R$ 200 até sexta-feira, e nada mais". Não é "fazer login melhor": é outro objeto sendo
autenticado.

**2. Por que agora, e não há cinco anos.** Porque em 2021 o agente não tinha mãos — não chamava
API com efeito, não navegava autenticado, não pagava. A pré-condição não é técnica no sentido
criptográfico (assinatura de requisição existe há décadas): é o fato de a ação delegada ter virado
volume. E a resposta institucional é literalmente de 2026: NIST em fevereiro, IETF em março, FIDO
em abril, Cloudflare com distinção Direto/Intermediário em julho.

**3. Onde está na difusão.** Adoção precoce (<10%). Verificação em produção em cinco operadores de
borda, allowlist com dezenas de agentes, nenhum padrão adotado por grupo de trabalho. Emergente.

**4. O que ainda falta acontecer.** Convergir entre quatro modelos concorrentes; resolver
revogação distribuída; decidir quem emite (usuário, fabricante do modelo, empregador, Estado);
tratar o encontro entre agentes de titulares diferentes, que hoje nenhum protocolo expressa; e
sobreviver ao primeiro comprometimento de chave de um emissor grande.

**Quem bloqueia:** os fabricantes de modelo. Identidade emitida por terceiro neutro é ruim para
quem já é o ponto de hospedagem da procuração. O incentivo deles é oferecer a credencial como
parte do produto — o que produz e1.1, e cujo efeito colateral é e1.1.1.

### R2 — A web para de ser indiferenciada e passa a precificar por natureza do requisitante

**1. O que rompe.** Rompe o pressuposto fundador de que o servidor não pergunta *o que* você é —
só se você tem permissão. Rompe a moeda da mídia digital (impressão pressupõe olho), o SEO
(otimizar para um leitor que agora é outro), o preço único e a ideia de que acessibilidade é
propriedade da página. Não é "bloquear bot melhor": é o servidor passando a ter uma taxonomia de
naturezas e uma política comercial para cada uma.

**2. Por que agora.** Porque o tráfego não-humano passou o humano (57,5% em junho de 2026) e
porque o dinheiro chegou: a Cloudflare bloqueia crawler de uso misto em páginas com anúncio por
padrão a partir de 15 de setembro de 2026, e opera um mercado de pagamento por acesso (pay per
crawl) e por uso, com Ceramic.ai e You.com como parceiros iniciais. Matthew Prince, em julho de
2026: "a maioria do tráfego da internet é não-humano", e mais de 50% do tráfego de crawler de IA é
rebusca de páginas inalteradas.

**3. Onde está na difusão.** Adoção precoce. Um CDN que cobre cerca de um quinto dos sites mudou o
padrão para clientes novos e para o plano gratuito — o que é muito, mas não é maioria da web.

**4. O que ainda falta acontecer.** Um mecanismo de pagamento agente-para-site que funcione fora
de um intermediário; jurisprudência sobre recusa de acesso a agente; e, sobretudo, tratamento do
falso positivo — hoje não existe caminho previsto para quem *precisa* de agente e não é abuso.

**Quem bloqueia:** os próprios anunciantes e as agências. Uma moeda de audiência que reconhece
que metade do inventário não era humana destrói valor contábil já reconhecido. O incentivo deles é
adiar a mudança de moeda — foi o que aconteceu com *viewability*, proposta em 2014 e ainda não
unificada em 2026.

### R3 — Conter fica tão barato que o mundo descartável vira o padrão, e a permissão passa a ser declarada antes do ato

**1. O que rompe.** Rompe a segurança por perímetro e por revisão humana no laço. Se isolar custa
125 ms e 5 MiB, o padrão deixa de ser "confiar e auditar depois" e passa a ser "não confiar e
descartar". Rompe também a natureza do artefato de auditoria: o log em texto não serve, porque o
que precisa ser provado é a sequência de autorizações, não a narrativa. E rompe o desenho da
interação com o agente: se o que não foi declarado não executa, escrever o escopo vira parte do
pedido.

**2. Por que agora.** Porque o custo caiu (Firecracker, gVisor, Wasm com negação por padrão) e
porque o incentivo apareceu: com oito incidentes maiores e um CVE só no primeiro trimestre de
2026, ficou claro que o vetor é execução, não vulnerabilidade — e execução se contém, não se
corrige com patch. A literatura já formalizou o passo seguinte: autorização determinística *antes*
da chamada de ferramenta (Uchibeke, arXiv 2603.20953, março de 2026), fechando a "lacuna de
autorização".

**3. Onde está na difusão.** Produto de nicho tendendo a adoção precoce. E2B em produção em
grandes usuários; a maioria dos agentes em uso ainda roda com permissão ampla no ambiente do
usuário.

**4. O que ainda falta acontecer.** A linguagem de permissão precisa ficar expressiva o bastante —
e o artigo sobre lacunas de governança mostra que hoje não é; a contenção precisa de um modelo de
falha compreensível para quem não é engenheiro; e alguém precisa resolver o problema que o
isolamento *não* resolve, que é o agente fazer a coisa errada dentro do próprio mundo.

**Quem bloqueia:** o orçamento de infraestrutura, com dono — o time de plataforma. Isolar,
reexecutar e guardar trace multiplica custo. É de lá que vem e11, a retroação desta raiz.

### R4 — A responsabilidade por atos de agente é precificada pelo seguro antes de ser resolvida pelo direito

**1. O que rompe.** Rompe a ordem normal dano → lei → seguro. Aqui a apólice chega primeiro e vira
o regulador de fato: quem define o que um agente pode fazer passa a ser o subscritor, não o
legislador. Rompe também a defesa pela autonomia — a Califórnia, com lei em vigor desde 1º de
janeiro de 2026, impede usar a operação autônoma do sistema como defesa contra responsabilidade.

**2. Por que agora.** Porque três coisas coincidiram em 2026: uma firma anunciando seguro para os
próprios agentes (Crosby, 28 de julho); literatura de subscrição baseada em trace de execução, com
rótulos econômicos determinísticos em vez de juiz-LLM (arXiv 2606.16465, junho de 2026); e leis
estaduais americanas em vigor (Califórnia em janeiro, Colorado em junho). No Brasil, a ANPD virou
agência reguladora com poder de sanção por percentual de receita e programou 20 fiscalizações de
IA para 2026-2027 — mas o texto brasileiro em tramitação **não trata de agente autônomo**, e sim
de sistemas de IA em setores regulados.

**3. Onde está na difusão.** Demo pública tendendo a produto de nicho — anúncio sem seguradora
nomeada, papers sem apólice. **Por isso toda esta cadeia carrega confiança baixa na §5.**
Especulativa, e declarada como tal.

**4. O que ainda falta acontecer.** Uma seguradora aceitar; um sinistro ser pago; um precedente
judicial. Sem os três, R4 é uma hipótese com três indícios.

**Quem bloqueia:** as próprias resseguradoras. Risco sem histórico de sinistro e com cauda
desconhecida é risco que não se subscreve — e a resposta padrão do setor é exigir limite duro de
ação, que é e14, a retroação desta raiz.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente vira principal de segurança, com identidade criptográfica distinta da de quem o mandou
    efeitos:
      - id: e1
        ordem: 1
        efeito: Serviços passam a tratar quem age e em nome de quem como dois campos distintos, e recusam pedido em que só um esteja preenchido
        sinal: forte
        prazo: 2032
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Os fabricantes de modelo viram autoridade certificadora de fato, porque é neles que a procuração do usuário fica hospedada
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Trocar de assistente passa a custar o histórico de permissões acumulado, e o aprisionamento migra do dado para o mandato
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A interface ganha uma camada de procuração editável, com escopo, prazo, valor-limite e revogação, no lugar do consentimento binário
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O Banco Central inclui a procuração de agente no arranjo do Pix, e revogar mandato vira botão obrigatório no aplicativo, como bloquear cartão
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Produtos param de desenhar uma interface e passam a desenhar duas, a superfície para o olho humano e um contrato estável para o agente autenticado
        sinal: medio
        prazo: 2036
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A versão para agente vira o canal comercial primário, com preço e disponibilidade expostos à máquina antes de chegarem à pessoa
            sinal: fraco
            prazo: 2040
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O mesmo item passa a ter dois preços estáveis, e o preço humano vira tabela que quase ninguém paga
                sinal: fraco
                prazo: 2050
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A autoridade sobre o produto migra de quem desenha a tela para quem escreve o contrato que o agente lê
            sinal: fraco
            prazo: 2042
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: O log deixa de ser texto e vira prova, porque a trilha assinada de quem autorizou o quê passa a ser exigida por auditoria e por seguradora
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Reexecutar o mesmo trace vira requisito de produto, porque sem reprodução não há como contestar o que o agente fez
            sinal: fraco
            prazo: 2039
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Guardar trace assinado de toda ação agêntica vira fatia mensurável do custo e da energia de operar software, e aparece a primeira política de descarte por prazo
                sinal: fraco
                prazo: 2052
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A credencial de agente vira alvo mais valioso que a senha de pessoa, porque carrega escopo de ação e não só acesso, e a emissão trava
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A revogação vira o problema caro, porque cancelar um mandato comprometido exige avisar todo serviço que já o aceitou
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Alguém passa a vender garantia de revogação em prazo contratado, e a morte do mandato vira produto financeiro
                sinal: fraco
                prazo: 2045
                confianca: baixa

  - disrupcao: A web para de ser indiferenciada e passa a servir conteúdo, preço e limite conforme a natureza do requisitante
    efeitos:
      - id: e5
        ordem: 1
        efeito: O mesmo endereço devolve coisas diferentes para pessoa, para agente verificado e para agente anônimo
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A moeda da audiência quebra, porque impressão e tempo de página deixam de significar atenção humana, e o mercado passa a pagar por visita verificada
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O conteúdo feito para ser lido por máquina e o conteúdo feito para prender pessoa se separam em duas indústrias com economias distintas
                sinal: fraco
                prazo: 2042
                confianca: media
          - id: e5.2
            ordem: 2
            efeito: Nascem dois mercados espelhados, um que vende trânsito não-marcado para agentes e outro que vende prova de que você não é um
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Provar-se humano vira serviço pago e biométrico com dono privado, e o custo de existir online sem essa prova recai sobre quem menos pode pagar
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O agente ganha carteira e o acesso a conteúdo vira transação por requisição, com o site negociando preço com uma máquina que compara
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O orçamento do agente vira restrição de projeto, e quem desenha passa a desenhar para um leitor que conta centavos por página
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Sites passam a competir por serem baratos de ler, e a página densa em mídia vira cara de acessar por agente, empurrando parte da web de volta ao texto
                sinal: fraco
                prazo: 2047
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Quem depende de agente para acessar, por deficiência, idioma ou letramento, é barrado pelo mesmo filtro que barra o abuso
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Tecnologia assistiva passa a precisar de credencial emitida por terceiro para funcionar, e a acessibilidade deixa de ser atributo da página e vira permissão concedida
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O registro de quem precisa de agente para navegar vira infraestrutura, e ter deficiência passa a ser um dado de autenticação
                sinal: fraco
                prazo: 2048
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A Lei Brasileira de Inclusão e o ADA passam a ser usados contra o bloqueio de agentes, e o filtro ganha uma exceção obrigatória de acessibilidade
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A exceção de acessibilidade vira a porta mais atacada da web, e a prova de deficiência passa a ser exigida onde nunca foi
            sinal: fraco
            prazo: 2042
            confianca: baixa

  - disrupcao: Conter fica barato o bastante para ser descartável, e a permissão passa a ser declarada antes do ato
    efeitos:
      - id: e9
        ordem: 1
        efeito: Rodar agente sem isolamento passa a ser tratado como rodar código de terceiro sem sandbox, e o mundo efêmero por tarefa vira o padrão
        sinal: forte
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A permissão deixa de ser configuração e vira parte do pedido, e o que não foi declarado antes simplesmente não executa
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Escrever o escopo da tarefa vira a parte cara do trabalho com agente, e a linguagem de permissão compete com a linguagem natural como interface principal
                sinal: fraco
                prazo: 2044
                confianca: media
          - id: e9.2
            ordem: 2
            efeito: O isolamento total esconde o dano, porque o agente contido faz a coisa errada dentro do próprio mundo e entrega o erro como resultado legítimo
            sinal: medio
            prazo: 2039
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Verificar o resultado vira o gargalo no lugar de conter a execução, e o custo de checar passa o custo de fazer
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: A memória do agente ganha prazo de validade, porque o que ele lembra virou superfície de ataque, e passa a ser versionada, assinada e descartada
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: O contexto persistente deixa de ser ativo do produto e vira passivo, e assistentes passam a esquecer por política e não por limitação
            sinal: fraco
            prazo: 2040
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A continuidade que produtos de mídia vendem passa a ser encenada sobre um resumo auditado, e não sobre lembrança
                sinal: fraco
                prazo: 2051
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: O custo de isolar, reexecutar e guardar trace cresce mais rápido que o de gerar, e organizações religam confiança para caber no orçamento
        sinal: fraco
        prazo: 2037
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Aparece uma classe de agente de confiança com menos isolamento e mais permissão, e é nela que os incidentes graves se concentram
            sinal: fraco
            prazo: 2043
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: O incidente deixa de ser falha de contenção e vira falha de classificação, e quem decidiu que o agente era confiável responde no lugar de quem o escreveu
                sinal: fraco
                prazo: 2053
                confianca: baixa

  - disrupcao: A responsabilidade por atos de agente é precificada pelo seguro antes de ser resolvida pelo direito
    efeitos:
      - id: e12
        ordem: 1
        efeito: A apólice define o que o agente pode fazer antes de a lei definir, e o produto passa a obedecer ao subscritor
        sinal: medio
        prazo: 2038
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O agente passa a ter histórico segurável próprio, e o prêmio do próximo emprego dele depende do trace do anterior
            sinal: fraco
            prazo: 2041
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: Reputação de agente vira ativo transferível entre plataformas, e comprar um agente com histórico limpo fica mais caro que treinar um novo
                sinal: fraco
                prazo: 2052
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Empresas passam a preferir agente contido e limitado a agente capaz e caro de segurar, e a competência do modelo deixa de ser o critério de compra
            sinal: fraco
            prazo: 2044
            confianca: baixa
      - id: e13
        ordem: 1
        efeito: Aparece a primeira ação judicial que nomeia o agente como réu, e o tribunal precisa decidir se há ali alguém para ser réu
        sinal: fraco
        prazo: 2039
        confianca: baixa
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: O direito responde com a figura que já possui e transforma o agente em patrimônio de afetação com capital mínimo, como uma empresa de um ato só
            sinal: fraco
            prazo: 2048
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Constituir agente com capital próprio vira o jeito barato de limitar risco de qualquer operação automatizada, e o número de pessoas jurídicas descola do número de empresas reais
                sinal: fraco
                prazo: 2058
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: Nenhuma seguradora aceita o risco sem limite duro de ação, e a exigência de contenção chega pelo mercado segurador antes de chegar pelo regulador
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: O seguro vira barreira de entrada, e só quem paga apólice opera agente com permissão real, concentrando a autonomia em poucas empresas
            sinal: fraco
            prazo: 2042
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: Em mercados sem seguradora local para esse risco, o Brasil entre eles, agentes com permissão de ação passam a ser operados de fora, e a jurisdição do ato descola da jurisdição do dano
                sinal: fraco
                prazo: 2050
                confianca: baixa
```

### 5.1 Os mecanismos, um a um

O bloco acima diz *o quê*. Aqui está o *porque*, que é o que separa roda de lista.

**R1.** `e1` acontece porque o rascunho do IETF já separou os dois campos (`client_id` para o
agente, `sub` para o delegante) e porque a Cloudflare já exige do intermediário o repasse do
usuário final via RFC 7239 — quando dois campos existem no protocolo e um operador de borda os
cobra, o terceiro passo é recusar o pedido incompleto. `e1.1` deriva de `e1` porque a procuração
precisa ser assinada por quem custodia a relação com o usuário, e quem custodia é o fabricante do
assistente; a FIDO estar recebendo contribuição de Google e Mastercard, e não de um consórcio
neutro, é o indício. `e1.1.1` deriva de `e1.1` porque credencial emitida pelo fabricante não
atravessa para outro fabricante — o mesmo mecanismo do aprisionamento por dado, aplicado a um
objeto que é mais caro de reconstruir que o dado, porque envolve reautorizar cada serviço.
`e1.2` deriva de `e1` porque o campo de escopo precisa ser preenchido por alguém, e o único que
pode preenchê-lo é o titular; `e1.2.1` deriva de `e1.2` porque, no Brasil, a infraestrutura onde a
delegação de valor já é regulada e tem botão de revogação é o arranjo do Pix, não o navegador.
`e2` deriva de `e1` porque, quando o servidor sabe o que está do outro lado, servir a mesma página
aos dois vira escolha e não fatalidade. `e3` deriva de `e1` porque assinatura sem trilha não prova
nada — a mesma razão que fez o recibo existir junto com a assinatura. `e4` é a retroação: deriva de
`e1` porque credencial que carrega *escopo de ação* vale mais que credencial que carrega *acesso*,
e o atacante segue o valor; `e4.1` deriva de `e4` porque num sistema de emissores múltiplos não
existe lista central de quem aceitou o mandato.

**R2.** `e5` acontece porque a discriminação já está implementada e o padrão já mudou em produção.
`e5.1` deriva de `e5` porque a moeda só quebra quando a contagem passa a distinguir — enquanto
tudo era "visita", a ficção se sustentava. `e5.1.1` deriva de `e5.1` porque, se só a visita humana
paga, o investimento migra para o que a máquina não consegue substituir nem resumir, e o resto vira
insumo barato — é a mesma separação que ocorreu entre conteúdo para busca e conteúdo para banca.
`e5.2` deriva de `e5` porque toda fronteira cria contrabando dos dois lados: quem quer atravessar
sem marca e quem quer provar que é do lado de dentro; o World, com verificação de humanidade por
íris e cobrança de aplicações a partir de 2026, é o segundo lado já montado. `e6` deriva de `e5`
porque discriminar sem cobrar é desperdiçar o fato de saber quem é; `e6.1` deriva de `e6` porque
orçamento por requisição transforma peso de página em preço, e `e6.1.1` deriva de `e6.1` pela
mesma razão que fez sites otimizarem para conexão lenta em 2010. `e7` deriva de `e5` porque o
filtro discrimina por *comportamento e credencial*, e quem usa tecnologia assistiva se parece com
agente nos dois — é o que já acontece com CAPTCHA hoje. `e8` é a retroação com ator nomeado — a
Lei Brasileira de Inclusão (13.146/2015) e o ADA já obrigam acessibilidade, e obrigação existente
aplicada a filtro novo produz exceção obrigatória; `e8.1` deriva de `e8` porque exceção obrigatória
é, por definição, caminho que não pode ser fechado.

**R3.** `e9` acontece porque o custo caiu abaixo do limiar em que discutir vale menos que isolar.
`e9.1` deriva de `e9` porque isolar sem declarar o que se vai fazer só move o problema para dentro
da caixa — é a lacuna que o artigo de autorização pré-ação nomeia. `e9.1.1` deriva de `e9.1` e é,
para o público deste mapa, o efeito mais importante da raiz: se o que não foi declarado não
executa, então a parte difícil de usar um agente deixa de ser descrever a tarefa e passa a ser
descrever a *fronteira* dela — e isso é desenho de interação, não de segurança. `e9.2` deriva de
`e9` porque contenção limita alcance e não intenção induzida, e a injeção indireta continua sendo
o vetor número um da OWASP; `e9.2.1` deriva de `e9.2` e é a fronteira declarada com o tema 3 da
disciplina — aqui ele entra só como consequência da contenção, não como objeto. `e10` deriva de
`e9` porque memória é o único estado que sobrevive ao descarte do ambiente, e portanto o único
lugar onde o ataque persiste. `e10.1.1` é o efeito que mais interessa a quem projeta mídia, porque
ataca a promessa de continuidade. `e11` é a retroação econômica e ecológica: deriva de `e9` porque
o custo de isolar tudo é multiplicativo e o de gerar é marginal; `e11.1` deriva de `e11` porque a
economia sempre reintroduz a exceção, e `e11.1.1` fecha o ciclo ligando de volta a R4.

**R4.** `e12` acontece porque o subscritor precifica o que consegue medir, e o trace é mensurável.
`e12.1` deriva de `e12` porque o histórico de sinistro é a base de qualquer prêmio, e o trace é o
histórico. `e12.2` deriva de `e12.1` por um mecanismo contraintuitivo e específico: o prêmio cresce
com o *espaço de ação*, não com a competência — logo um agente mais capaz, com as mesmas
permissões, custa o mesmo, e um agente com mais permissões custa mais mesmo sendo melhor. `e13`
deriva de `e12` porque, uma vez que existe apólice, existe alguém com interesse processual em
nomear o segurado. `e14` é a retroação: deriva de `e12` porque a resposta padrão do setor a risco
de cauda desconhecida é limitar a exposição, e o limite vira requisito de produto antes de virar
norma; `e14.1.1` é a nota brasileira — sem seguradora local que subscreva esse risco, a operação
migra, e o dano fica onde a jurisdição não alcança o operador.

### 5.2 As classes de referência que sustentam os prazos

Prazo sem classe de referência é chute. Estas são as usadas:

- **Identidade de remetente exigível na rede — classe SPF/DKIM/DMARC.** SPF é de 2003, DMARC de
  2012, e a exigência efetiva só veio quando Google e Yahoo a impuseram juntos, em fevereiro de
  2024: **21 anos** do mecanismo à obrigatoriedade. Aplicado a `e1`, com o atenuante de que aqui o
  ponto de partida (2026) já tem dois operadores de borda cobrando: seis anos, `prazo: 2032`.
- **Criptografia como padrão — classe HTTPS.** SSL em 1995, maioria das cargas de página em HTTPS
  só em 2017, e o gatilho foi o custo ir a zero (Let's Encrypt, 2016): **~22 anos**. Usada como
  teto pessimista para `e1` e `e5`.
- **Mudança de padrão por CDN — classe desligamento do TLS 1.0/1.1.** Anunciado em 2018, efetivado
  em 2020: **2 a 4 anos**, porque a decisão é de poucos atores. É a classe de `e5` (`prazo: 2030`),
  e é o que justifica `e5` chegar antes de `e1`.
- **Mudança de moeda publicitária — classe *viewability*.** Proposta como padrão em 2014, ainda não
  é moeda única em 2026: **mais de 12 anos sem convergir**. É a classe de `e5.1`, e o motivo de o
  prazo dele ter sido empurrado na §7.
- **Responsabilidade que muda de dono — classe EMV/chip-and-PIN.** Especificação em 1996, a
  transferência de responsabilidade nos EUA só em outubro de 2015: **19 anos**, e só aconteceu
  porque alguém mudou quem paga a conta. É a classe de `e12` e `e14`.
- **Seguro para risco novo — classe seguro cibernético.** Primeiras apólices no fim dos anos 1990,
  disciplina de subscrição só depois da onda de ransomware de 2017-2021: **~20 anos** até a apólice
  virar norma de fato. É a classe que empurrou `e12` de 2034 para 2038.
- **Isolamento como padrão de produção — classe Docker.** 2013 a ~2019, **5 a 7 anos**, porque o
  ganho operacional pagava sozinho. É a classe de `e9` (`prazo: 2031`).
- **Assinatura digital no Brasil — classe ICP-Brasil.** MP 2.200-2 em 2001, uso cotidiano só com o
  gov.br a partir de 2020: **19 anos**. É o atenuante brasileiro aplicado a `e1.2.1` (`prazo: 2046`).

### 5.3 Cobertura por STEEP e por quem perde

- **Social:** `e7`, `e7.1`, `e7.1.1`, `e8`, `e8.1`, `e5.2.1`, `e10.1.1`. É o eixo mais denso
  depois do tecnológico, e é quase todo de perda.
- **Tecnológico:** `e1`, `e2`, `e3`, `e4`, `e9`, `e9.1`, `e10`, e respectivas cadeias.
- **Econômico:** `e5.1`, `e6`, `e6.1`, `e2.1`, `e2.1.1`, `e12`, `e12.2`, `e14.1`.
- **Ecológico:** **fino, e registro isso como limitação.** Apenas `e3.1.1` (energia de guardar
  trace) e `e11` (custo multiplicativo do isolamento). Não forcei mais: a maior parte da pegada
  ambiental do tema é da inferência, que é objeto de outro mapa.
- **Político/jurídico:** `e8`, `e13`, `e13.1`, `e14`, `e14.1.1`, `e1.2.1`.

**Quem perde, nomeado:** pessoas com deficiência que dependem de agente para navegar (`e7`,
`e7.1`, `e7.1.1`); quem não pode pagar prova de humanidade (`e5.2.1`); produtores de conteúdo cuja
receita vinha de impressão não verificada (`e5.1`); quem desenha tela e perde autoridade para quem
escreve contrato (`e2.2`); empresas pequenas que não conseguem pagar apólice para operar agente
com permissão real (`e14.1`); e o usuário que fica preso ao assistente pelo mandato (`e1.1.1`).

### 5.4 Convergências, retroalimentações e contradições

**Convergência 1 — a trilha assinada.** `e3` (vindo de R1, por exigência de auditoria) e `e12`
(vindo de R4, por exigência de subscrição) chegam ao mesmo artefato por caminhos independentes: o
trace assinado e reproduzível. Este é o achado mais valioso do mapa, porque significa que o
artefato se constrói mesmo que uma das duas raízes não se concretize. Quem projetar produto
agêntico deve assumir que o trace vai existir — a pergunta de desenho é quem o lê e o que ele
mostra ao usuário.

**Convergência 2 — a garantia de revogação.** `e4.1.1` (R1, por impossibilidade técnica de revogar
em sistema distribuído) e `e14` (R4, por exigência de limite duro) convergem para o mesmo produto:
alguém vendendo, por contrato, que o mandato morreu em toda parte dentro de um prazo.

**Convergência 3 — a contenção como requisito comercial.** `e9` (R3, porque ficou barato) e `e14`
(R4, porque a seguradora exige) chegam à mesma prática. Aqui a convergência é assimétrica: R4 é
muito mais fraca que R3, então o crédito da previsão é quase todo de R3.

**Retroalimentação positiva.** `e5` → `e6` → mais receita para discriminar → mais investimento em
verificação → `e1` mais forte. A economia da discriminação financia a infraestrutura de
identidade. É o ciclo que faz este mapa não depender da boa vontade de ninguém.

**Retroalimentação negativa.** `e11` → `e11.1` → incidente grave → `e11.1.1` → responsabilização
de quem classificou → volta a apertar o isolamento. O ciclo é oscilatório, não convergente: a
economia afrouxa, o incidente aperta, e o sistema fica batendo entre os dois estados. Para quem
projeta, isso significa que o nível de permissão de um produto agêntico não vai estabilizar — vai
ser renegociado a cada incidente público.

**Contradição não resolvida 1.** `e10.1` (assistentes passam a esquecer por política) contra
`e10.1.1` e contra toda a economia de produto de mídia, que vende continuidade e memória. Os dois
não podem coexistir na forma forte. O que decide entre eles: se a responsabilidade pelo dano
causado por memória envenenada recair sobre o operador do produto, ganha o esquecimento; se recair
sobre o usuário que aceitou os termos, ganha a memória. Não registro um vencedor.

**Contradição não resolvida 2.** `e7`/`e8` (o filtro precisa de exceção para tecnologia assistiva)
contra `e8.1` (a exceção é a porta mais atacada). Não há desenho que satisfaça os dois: toda
exceção verificável exige prova, e exigir prova de deficiência é o dano que `e7.1.1` descreve. O
que decide entre eles é se a prova pode ser feita sem identificar a pessoa — isto é, se existe uma
credencial de necessidade que não seja um registro de pessoas com deficiência. Hoje não existe.

**Contradição não resolvida 3.** `e9` (isolar tudo, sempre) contra `e11` (o orçamento não aguenta).
Decide entre elas a curva de custo de computação na década de 2030, que este mapa não tem como
prever e não finge prever.

### 5.5 Onde parei de derivar, e por quê

Pela regra de parada — deriva-se o próximo nível só enquanto houver troca de ator ou de mecanismo:

- `e2.2` não tem filho. O candidato era "a formação em design se reorganiza", que é exatamente um
  dos genéricos proibidos e não tinha ator nem mecanismo específico. Cortado, registrado na §12.
- `e8.1` não tem filho. O candidato ("aumenta a litigância") era o mesmo efeito amadurecendo, não
  outra ordem.
- `e12.2` não tem filho. O candidato ("o mercado de modelos se comoditiza") aconteceria por
  dezenas de outras causas — falha no teste da causa solta.
- Nenhuma raiz foi derivada além da terceira ordem, por exigência de formato; mas registro que
  `e13.1.1` é claramente uma quarta ordem disfarçada de terceira, e é por isso que é o único efeito
  com prazo fora do horizonte.

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**S1 — A Cloudflare separou "Direto" de "Intermediário" e nomeou *transitive trust*.** Onde foi
visto: documentação de bots verificados da Cloudflare, mudança de 1º de julho de 2026, exigindo
repasse do usuário final via RFC 7239. O que mudaria: a cadeia de delegação deixa de viver só
dentro do token e passa a ser visível na camada de rede — o que torna `e1` e `e7` muito mais
rápidos, porque a rede passa a poder discriminar por *em nome de quem*, não só por *quem*. Sinal
observável de que está crescendo: um segundo operador de borda (Akamai ou Fastly) exigindo o mesmo
cabeçalho, ou a aparição de uma extensão do MCP que carregue a identidade do delegante.

**S2 — O padrão de fato chegou antes do padrão de direito.** O grupo de trabalho do IETF para Web
Bot Auth não tinha, em agosto de 2026, nenhum documento adotado, enquanto cinco empresas já
verificavam a assinatura em produção. O que mudaria: se o processo formal for ultrapassado de vez,
`e1.1` (fabricantes como autoridade certificadora de fato) fica muito mais provável, e com ele todo
o ramo de aprisionamento. Sinal observável: adoção de um documento pelo grupo, ou seu abandono
declarado.

**S3 — A prova de humanidade virou produto B2B.** O World, com verificação por íris, cobra de
aplicações que verificam humanidade mantendo o serviço gratuito para o usuário final. O que
mudaria: `e5.2` e `e5.2.1` deixam de ser inferência e viram mercado. Sinal observável: um serviço
de grande escala e não-cripto (um banco, uma rede social, um governo) adotando prova de humanidade
como padrão de cadastro.

**S4 — Uma firma de advocacia anunciou seguro para os próprios agentes e ainda não achou
seguradora.** O que mudaria: se alguém aceitar, R4 sai de especulativa e toda a cadeia `e12`-`e14`
sobe de confiança. Se ninguém aceitar em dois anos, R4 cai. Sinal observável: a primeira apólice
com seguradora nomeada publicamente, ou o anúncio silenciosamente retirado.

**S5 — Os protocolos de interoperabilidade não expressam governança.** Kang e Diponegoro, julho de
2026. O que mudaria: enquanto MCP, A2A e ACP não expressarem cadeia de responsabilidade, o encontro
entre agentes de titulares diferentes fica sem regra, e toda a §5 de R1 depende de acordos
bilaterais. Sinal observável: uma versão do A2A que torne obrigatória a verificação do *agent
card*, ou uma extensão do MCP com claim de delegação.

**S6 — A página da FIDO sobre autenticação de agentes recusa cliente automatizado.** Verificado
nesta sessão: 403 para `curl` e para `urllib` com user-agent de navegador. O que mudaria: nada, por
si. Mas é o indicador mais barato de `e7` que existe — se a documentação sobre como dar identidade
a agentes já é inacessível a agentes, o padrão está sendo escrito para máquinas que ainda não
existem, por gente que bloqueia as que existem. Sinal observável: medir, uma vez por semestre,
quantos dos vinte sites mais citados sobre agentes respondem a um cliente automatizado honesto.
É exatamente o experimento da §10.

### 6.2 Wildcards

**W1 — Comprometimento de emissor: por 72 horas, qualquer um assina como agente verificado.**
Mecanismo: as chaves públicas ficam em URLs bem-conhecidas, a rotação é lenta, e a allowlist é
operada por poucos. Comprometer o repositório de chaves de um operador grande, ou o processo de
publicação, permite forjar identidade verificada em escala — e, pior, com o carimbo de confiança
que a rede aprendeu a respeitar. Por que é improvável: há módulos de segurança em hardware,
rotação e monitoramento; e o custo de reputação para o operador é existencial. O que faria com o
mapa: inverteria `e5`. O tráfego verificado passaria a ser *mais* suspeito que o não-verificado
durante a janela, e a confiança na credencial — que é o alicerce de R1 e R2 — levaria anos para se
reconstruir, como aconteceu com as autoridades certificadoras depois do caso DigiNotar em 2011.
Sinal precoce: qualquer incidente de chave em qualquer operador da allowlist, por menor que seja.

**W2 — Uma jurisdição pequena vende personalidade eletrônica.** Mecanismo: o mesmo de sempre —
arbitragem regulatória. Um Estado pequeno cria um registro de "pessoa eletrônica" com capital
mínimo e responsabilidade limitada, cobra pelo registro, e agentes constituídos ali passam a agir
no mundo todo, como empresas de Delaware e residentes digitais da Estônia. Por que é improvável:
exigiria reconhecimento recíproco, que é justamente o que os outros Estados não têm incentivo para
dar. O que faria com o mapa: `e13.1` subiria duas ordens de magnitude em velocidade e chegaria
antes de 2040, e `e14.1.1` (operação de fora) deixaria de ser efeito lateral e viraria o desenho
dominante. Sinal precoce: um projeto de lei de personalidade eletrônica com tramitação real —
não uma proposta de comissão, como a do Parlamento Europeu em 2017, que morreu.

**W3 — A injeção de prompt é resolvida arquiteturalmente, e a indústria de contenção vira nicho.**
Mecanismo: um modelo em que o canal de instrução e o canal de dado são criptograficamente
distintos, de forma que texto lido nunca possa ser interpretado como ordem — o equivalente, para
LLM, do que consultas parametrizadas foram para injeção de SQL. Por que é improvável: o mecanismo
de atenção não carrega proveniência, e toda tentativa até 2026 reintroduz o problema na fronteira.
O que faria com o mapa: R3 desaba, `e9` vira contexto, e o antivírus de agente segue o destino do
antivírus de desktop depois do sandbox de navegador — sobrevive, encolhido, em nicho corporativo.
R1 e R2 **sobrevivem**, porque não dependem de injeção: identidade e discriminação são movidas por
atribuição e por dinheiro, não por ataque. Sinal precoce: um benchmark público de injeção indireta
com taxa de sucesso abaixo de 1% *sem* defesa externa — hoje os números estão ordens de grandeza
acima disso.

## 7. Contra o próprio mapa

Esta seção foi escrita sobre o mapa pronto, e o mapa foi alterado pelo resultado. O registro de
alterações, com valor antes e depois, está em 7.8.

### 7.1 Pré-mortem — é 2056 e este mapa se mostrou errado. Por quê?

**Razão 1 — porque trinta anos é longo demais para o método.** Este é o problema central do
documento, e não é uma razão qualquer: uma roda de futuros com mecanismo e classe de referência
funciona bem em cinco a dez anos, porque a classe de referência ainda se parece com o objeto. Em
trinta anos, nenhuma das classes que usei (DMARC, EMV, HTTPS, seguro cibernético) sobrevive como
analogia — todas são de um mundo em que a unidade de ação era o software escrito por pessoas. O
efeito prático: **todo prazo posterior a 2045 neste mapa vale como direção, não como data.** Isso
atinge dezesseis efeitos, todos de terceira ordem, e é por isso que a terceira ordem saiu com
catorze `baixa` em dezesseis.

**Razão 2 — porque a raiz R3 pode ser resolvida no modelo.** É o wildcard W3. Se a injeção de
prompt deixar de ser vetor, a indústria de contenção encolhe e `e9`, `e9.1`, `e9.2` perdem o
motor. Rebaixei `e10` por causa disto (ver 7.8).

**Razão 3 — porque a discriminação por natureza do requisitante pode ser revertida por lei antes de
consolidar.** `e8` está no mapa como retroação, mas pode ser mais forte do que o mapa supõe: se a
União Europeia tratar recusa de acesso a agente de tecnologia assistiva como discriminação com
sanção, e se isso vier antes de 2032, `e5` não se consolida como padrão e sim como exceção
regulada — e R2 inteira muda de sinal. Rebaixei `e5.1` no prazo por causa disto.

### 7.2 Extrapolação linear

`e6` ("o agente ganha carteira e o acesso vira transação por requisição") é, na forma em que
nasceu, apenas "pay-per-crawl, maior" — mais do mesmo. Ou ganha mecanismo de não-linearidade ou
vira contexto. O mecanismo que o salva, e que passei a escrever explicitamente: a ruptura não é
cobrar do agente, é o agente **decidir sozinho se paga**, comparando fornecedores em milissegundos.
Aí o site deixa de negociar com uma empresa e passa a negociar com um leilão contínuo, e o preço de
acesso vira variável de tempo real. Sem isso, `e6` seria melhoria sustentadora e sairia da roda.

`e2.1.1` ("dois preços estáveis") também é extrapolação — precificação diferenciada existe desde
sempre. O que o torna não-linear é a estabilidade: o preço para máquina sendo *publicado* e
auditável, porque a máquina precisa de contrato, enquanto o preço humano segue opaco. A inversão
(o preço da máquina é o transparente) é o que o mantém no mapa.

### 7.3 Velocidade de adoção confrontada com a classe de referência

Confrontei todo efeito de sinal fraco contra a classe da §5.2. Três não passaram:

- `e12` exigia que o seguro definisse escopo de produto em oito anos a partir de um anúncio sem
  seguradora. A classe (seguro cibernético) diz vinte anos. Empurrado.
- `e5.1` exigia mudança de moeda publicitária em cinco anos. A classe (*viewability*) diz mais de
  doze sem convergir. Empurrado.
- `e1` exigia identidade de remetente exigível em quatro anos. A classe (SPF→DMARC) diz vinte e um,
  com atenuante de partida avançada. Empurrado.

### 7.4 E se a raiz simplesmente não acontecer?

- **Sem R1** (nunca há identidade de agente padronizada): sobra R2 quase inteira, porque a
  discriminação por comportamento e IP já funciona sem criptografia; sobra R3 inteira; R4 fica sem
  o trace assinado e enfraquece muito. Conclusão: R1 não é indispensável, mas é o que dá qualidade
  ao resto.
- **Sem R2** (a web continua indiferenciada): caem `e5`-`e8` e toda a parte de mídia, que é a mais
  relevante para o público deste mapa. R1, R3 e R4 sobrevivem inteiras dentro da empresa — vira um
  mapa de infraestrutura corporativa, sem consequência para quem projeta produto. **É a raiz cuja
  ausência mais empobrece o documento.**
- **Sem R3** (contenção não vira padrão): caem `e9`-`e11`; R1 e R2 seguem, porque são movidas por
  atribuição e por dinheiro.
- **Sem R4** (o seguro nunca chega): caem `e12`-`e14`, e o mapa perde o único ramo que explica
  *por que alguém aceitaria* limitar o próprio agente quando ninguém o obriga.

As quatro raízes passam no teste: nenhuma é as outras disfarçadas, e a queda de qualquer uma deixa
o mapa de pé, embora diferente. A mais frágil é R4 — e por isso ela carrega a maior densidade de
confiança baixa.

### 7.5 Suposições escondidas

Premissas que o mapa assumia sem declarar, agora declaradas. Cada uma quebrada vale um wildcard ou
um efeito removido:

1. **Que continua existindo web aberta para discriminar.** Se o conteúdo migrar de vez para dentro
   de aplicativos e APIs pagas, R2 não tem onde acontecer — não se discrimina o que já é fechado.
2. **Que energia e silício para isolar tudo continuam baratos.** `e11` já é a retroação disso, mas o
   mapa supõe que a retroação é econômica e não física.
3. **Que os fabricantes de modelo continuam sendo poucos.** `e1.1` depende de concentração. Se
   modelos capazes rodarem localmente e em profusão, não há a quem delegar a emissão, e `e1.1` cai.
4. **Que não há quebra criptográfica.** Assinatura pós-quântica invalidando estoque de credenciais
   emitidas reconfigura R1 inteira, e `e4.1` (revogação cara) vira o problema central e não lateral.
5. **Que a jurisdição continua territorial.** `e14.1.1` depende disso.
6. **Que o agente continua sendo software de terceiro.** Se o agente for do próprio serviço — se a
   loja fornecer o agente que compra na loja —, a discriminação `e5` não tem alvo, e o mapa vira
   outro.

### 7.6 O viés do autor

Este mapa foi escrito por quem acha infraestrutura de identidade interessante, e isso deixa marca:
o ramo de R1 tem quatro efeitos de primeira ordem e onze descendentes, mais que qualquer outro, sem
que a evidência justifique essa proporção. O ramo que está sub-representado é o **cultural**: o que
acontece com a conversa cotidiana quando presumir máquina vira o padrão — a desconfiança como
estado basal da interação mediada. Ele aparece de raspão em `e5.2` e `e10.1.1`, e deveria ter uma
cadeia própria. Não a inventei porque não achei artefato para sustentá-la; registro a ausência como
buraco conhecido.

Segundo viés, mais sutil: o mapa trata contenção como boa e aprisionamento como ruim, sem dizer.
Um mapa escrito por alguém de segurança institucional veria `e14.1` (só quem paga apólice opera
agente) como higiene de mercado, e não como concentração.

### 7.7 Calibração

| Ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1ª | 3 | 10 | 1 | 14 |
| 2ª | 0 | 11 | 8 | 19 |
| 3ª | 0 | 2 | 14 | 16 |

Em proporção: 21% / 71% / 7% na primeira; 0% / 58% / 42% na segunda; 0% / 12% / 88% na terceira. A
confiança cai com a ordem, como deve. As três `alta` de primeira ordem (`e1`, `e5`, `e9`) são as
únicas com três ou mais artefatos verificáveis hoje, e cada uma tem os artefatos nomeados na §3.

### 7.8 Registro de alterações — o que a bateria derrubou

A bateria derrubou algo em cada uma das quatro raízes. O que está na §5 é o valor **depois**.

**R1**
- `e1`: prazo 2030 → **2032**, porque a classe SPF→DMARC levou 21 anos até a exigência efetiva e
  quatro anos a partir de 2026 não tem precedente, mesmo com dois operadores de borda já cobrando.
- `e2.2`: confianca media → **baixa**, porque "o ofício se divide" beira o genérico proibido "surge
  uma nova profissão"; sobrevive só pelo mecanismo de migração de autoridade contratual, que é
  argumento e não evidência.
- `e1.2`: prazo 2033 → **2035**, alinhado a `e1.1` — a procuração editável não pode chegar antes de
  haver a quem delegar de forma padronizada.

**R2**
- `e5.1`: prazo 2031 → **2033**, pela classe *viewability*: o mercado publicitário já conviveu doze
  anos com uma métrica que sabia ser ruim sem trocá-la.
- **Removido:** "Plataformas de rede social passam a exigir selo de humano para publicar." Falhou
  no teste da causa solta — aconteceria igual por causa de mídia sintética, que é outro tema da
  disciplina, e não deriva desta raiz. Movido para a §12.
- `e7`: sinal fraco → **medio**, corrigido para cima, porque há artefato hoje (a documentação do
  reCAPTCHA reconhecendo que não garante conformidade para leitor de tela, e o 403 da própria FIDO)
  — é a única correção para cima do documento, e ela existe porque `sinal` mede o observável, não a
  crença.

**R3**
- `e9`: prazo 2029 → **2031**, pela classe Docker (5 a 7 anos até virar padrão de produção), contada
  de 2026 e não do surgimento do Firecracker.
- `e10`: confianca alta → **media**, por causa do wildcard W3: se a injeção for resolvida no modelo,
  memória deixa de ser superfície de ataque e o efeito perde o motor.

**R4**
- `e13.1.1`: **mantido com prazo 2058, fora do horizonte de 2056, e declarado como tal.** A classe
  de referência (constituição de figura jurídica de responsabilidade limitada a partir de um
  precedente) mede uma a duas décadas contadas do marco, e o marco aqui é `e13.1` em 2048. Datei
  pelo que a referência aponta e não pela moldura do documento; ver §5.5 e a leitura da saída do
  verificador na §12.8.
- `e12`: prazo 2034 → **2038**, pela classe do seguro cibernético (~20 anos do primeiro produto à
  disciplina de subscrição), descontado o fato de a literatura de subscrição por trace já existir.
- `e13`: confianca media → **baixa**, porque a única evidência que eu tinha (Nippon Life v. OpenAI,
  março de 2026) **não** é um agente como réu — a ré é a empresa. Eu tinha lido a evidência como
  mais forte do que ela é; ver §8.
- **Removido:** "Surge um regulador internacional de identidade de agente." Sem ator nomeado, sem
  mecanismo, e falha no teste da causa solta. Movido para a §12.

## 8. O que a máquina errou

Eu sou a máquina. O que segue é sobre esta rodada, com o motivo da desconfiança em cada item.

1. **Li uma evidência como mais forte do que ela é, e isso quase entrou no mapa.** Ao montar `e13`
   escrevi, na primeira versão, que "já houve processo contra um agente" apoiado no caso Nippon
   Life Insurance Company of America contra a OpenAI (março de 2026, prática não autorizada da
   advocacia). Ao reler a descrição, a ré é a **OpenAI**, não o agente. O erro é típico e perigoso:
   um caso que *fala de* agente virou, na minha escrita, um caso *contra* agente. Corrigido, e
   `e13` foi rebaixado de media para baixa em consequência.
2. **Usei um número de fonte secundária e o marquei, em vez de descartá-lo.** "19 agentes
   verificados cobrindo 84% do tráfego de navegador de IA" aparece em três sites de análise que a
   busca devolveu. Abri a documentação primária da Cloudflare, que é a autoridade natural para esse
   número, e **ela não o traz**. Mantive na tabela da §3.4 com a marcação explícita de não
   confirmado, e **não** o usei para sustentar nenhum prazo. O mesmo vale para a divisão
   "89% treino / 8% busca / 2% agêntico", que não achei em fonte primária.
3. **Um PDF do arXiv não abriu de verdade, e eu usei a página de resumo no lugar.** O artigo
   2606.16465 (subscrição econômica por trace) me voltou como fluxo binário; li a página `/abs` e
   dela tirei o resumo. Portanto: **não li o corpo do artigo**, não confiro as afirmações de
   "melhora dramática na precificação" que o resumo automático produziu, e o usei apenas como
   evidência de que o subgênero existe — não de que o método funciona. Está declarado na §11.
4. **Números de vendor citados por terceiro.** "Crescimento de 7.851% ano a ano" é da HUMAN
   Security, lido no blog da WorkOS, não no relatório original. Vendor de segurança tem incentivo
   estrutural para que o número do risco seja grande. Usei como direção, nunca como magnitude, e
   nenhum prazo do mapa depende dele.
5. **Quase inverti o que a fonte brasileira diz.** Ao escrever a nota sobre o Brasil, meu primeiro
   rascunho afirmava que "a ANPD vai regular agentes autônomos". A fonte que abri diz o contrário
   de forma explícita: o texto em tramitação trata de sistemas de IA em setores regulados e **não
   aborda agentes autônomos nem sua responsabilidade**. A tentação aqui é a mais difícil de
   resistir, porque a frase errada é a que o leitor espera. Corrigido na §4/R4.
6. **Efeito plausível com mecanismo fraco, mantido com confiança rebaixada em vez de removido.**
   `e6.1.1` ("a web volta ao texto porque página pesada é cara de ler por agente") soa muito bem e
   tem uma analogia bonita com a otimização para conexão lenta — mas o mecanismo supõe que o custo
   por byte domine o custo por requisição, o que não é verdade hoje. Deveria talvez ter saído;
   ficou com `confianca: baixa` e este registro.
7. **Datas de 2026 que assumo sem ter aberto a fonte primária.** "Califórnia em vigor desde 1º de
   janeiro de 2026" e "Colorado em junho de 2026" vieram de síntese de busca sobre escritórios de
   advocacia; não abri o texto das leis. Quem for usar isso em aula, confira antes de citar.
8. **Um viés de seleção que a ferramenta me impôs.** A busca é predominantemente anglófona, e o
   recorte "global" deste mapa é, na prática, o recorte do mundo que publica em inglês. As únicas
   fontes não-anglófonas que abri são brasileiras e de análise jurídica, não técnica. Não há nada
   aqui da China, da Índia ou da União Europeia em língua própria — o que, num tema que é sobre
   *quem emite identidade*, é uma lacuna que muda conclusão, não só cobertura.

## 9. Três cenários para 2056

**Provável.** A identidade de agente existe, funciona e não é de ninguém em particular — é de três
ou quatro. A delegação é rotina, e a procuração é um objeto que as pessoas editam do mesmo jeito
distraído com que aceitavam cookies em 2020: o botão "permitir tudo pelo tempo que for" ganhou
sempre. A web se partiu em camadas de acesso, e a camada humana virou a mais cara e a menos
usada — quase ninguém lê páginas, e produzir para leitura direta é um nicho de prestígio, como
imprimir em papel. A moeda da audiência mudou, mas sem coragem: paga-se por visita verificada, e a
verificação é vendida por quem também vende a defesa contra ela. A contenção venceu como prática e
perdeu como promessa — tudo roda isolado, e o dano se mudou para dentro do isolamento, na forma de
resultados errados produzidos com todas as permissões em ordem. Seguradoras definem o que um agente
pode fazer em mais lugares do que reguladores, e ninguém chama isso de regulação. As pessoas que
dependem de agente para acessar conseguem acessar, mediante um cadastro que nasceu como exceção de
acessibilidade e virou um registro. **Sinal precoce de que estamos entrando nele:** a primeira
métrica de audiência que separa "visita verificada" de "visita" ser adotada por um grande
anunciante — porque é aí que a camada humana ganha preço e o resto vira infraestrutura.

**Desejável.** A procuração virou um objeto de desenho, e não de conformidade: as pessoas entendem
o que delegaram porque alguém trabalhou para que entendessem — escopo com prazo, valor e
finalidade, legível numa frase, revogável num toque, portátil entre fornecedores como um número de
telefone. A portabilidade do mandato existe porque foi imposta cedo, antes de o aprisionamento
valer dinheiro, do jeito que o Pix impôs interoperabilidade antes de os arranjos se fecharem. A
discriminação por natureza do requisitante existe, mas com uma regra que se firmou por litígio e
depois virou norma: **negar por natureza é permitido; negar por necessidade, não** — e a prova de
necessidade é uma credencial anônima, que atesta a necessidade sem identificar a pessoa, de modo
que `e7.1.1` nunca acontece. A contenção ficou barata e invisível, e o trace assinado virou direito
do usuário e não só prova do fornecedor: qualquer pessoa pode pedir o que o agente dela fez, e
entender. **O que teria de ser feito para chegar aqui:** a credencial de necessidade anônima —
tecnicamente possível hoje com prova de conhecimento zero, e sem dono interessado em construí-la.
**Sinal precoce:** um padrão de credencial de necessidade sendo rascunhado em algum lugar, por
alguém, antes de 2032.

**Indesejável.** O acesso à rede passou a exigir prova, e as duas provas custam: provar-se humano
custa biometria com dono privado, provar-se agente legítimo custa credencial que só empresa
consegue manter. Quem não tem nenhuma das duas não é bloqueado — é atendido pior, mais devagar,
com menos informação e preço maior, o que é mais difícil de processar do que bloqueio. O registro
de quem precisa de agente para navegar existe, tem nome técnico, e a deficiência virou um dado de
autenticação que vaza como qualquer outro. A autonomia real se concentrou em quem paga apólice, e
as operações mais agressivas migraram para jurisdições onde o dano não alcança o operador — o
Brasil importando agente com permissão de ação e exportando processo. A memória do assistente foi
podada por política, e o que restou da continuidade é encenação sobre resumo auditado: o produto
finge lembrar de você porque lembrar de verdade virou passivo jurídico. **O sinal precoce, e é um
sinal barato de medir:** o dia em que for exigida **prova de deficiência** para atravessar um
filtro anti-bot. Se isso aparecer, mesmo uma vez, mesmo num serviço pequeno, é este o cenário.

## 10. O experimento

**O que é.** Um **medidor de superfície agêntica**: um instrumento que pede a mesma URL de três
maneiras — navegador comum com pessoa operando, cliente automatizado honesto que se identifica
como agente (com assinatura Web Bot Auth ou, no mínimo, user-agent declarado e `robots.txt`
respeitado) e cliente automatizado anônimo — e registra, para cada requisição: código de status,
tamanho e conteúdo entregue, presença de desafio, preço exibido quando houver, e latência. Roda
sobre uma lista fixa de cinquenta endereços: vinte sites de mídia brasileira, dez de comércio, dez
de serviço público, cinco de universidade e — deliberadamente — **os cinco sites que publicam os
padrões de identidade de agente**. Sai um painel: para cada endereço, o que cada um dos três
requisitantes levou para casa.

**Que pergunta sobre o futuro ele responde.** Duas, que são as dobradiças de R2. Primeira: *a
discriminação por natureza do requisitante já está acontecendo, ou ainda é promessa de produto?*
O mapa inteiro de R2 tem `e5` com confiança alta; se a diferença medida for nula ou aleatória, `e5`
cai e leva junto sete efeitos. Segunda: *ser honesto compensa ou custa?* Se o cliente que se
identifica for tratado **pior** que o anônimo — e há motivo estrutural para isso, porque
identificar-se é dar ao filtro o que ele precisa para barrar —, então o incentivo do ecossistema
aponta contra a identidade, e R1 tem um inimigo que o mapa não previu com força suficiente.

**Que tecnologia emergente ele usa, e por que não dá com a madura.** Usa assinatura de requisição
Web Bot Auth e a distinção Direto/Intermediário da Cloudflare. Com tecnologia madura o experimento
**não existe**: até 2025 um site não tinha como distinguir agente verificado de agente anônimo a
não ser por heurística de IP e user-agent, que qualquer um falsifica — logo não havia terceira
categoria para medir, só "humano" e "bot". A categoria "agente honesto e verificável" é de 2026, e
é ela que torna a pergunta formulável.

**O que a turma faz quando testar em sala.** Em dupla, cada uma com cinco endereços da lista.
Rodam as três requisições ao vivo, projetadas. Registram a diferença em uma planilha compartilhada,
e a aula discute três coisas: onde a diferença foi maior, se alguém foi tratado pior por ser
honesto, e o que a diferença significa para quem **precisa** do agente. A parte que deve doer: cada
dupla testa também um leitor de tela real numa das páginas onde o cliente automatizado foi barrado,
e compara. A hipótese que quero ver falhar ou não é a de `e7`.

**O que me faria mudar de ideia.** Se, em cinquenta endereços, o conteúdo entregue for
substancialmente o mesmo para os três requisitantes — sem desafio adicional, sem truncamento, sem
diferença de preço, sem diferença de status —, então R2 não está acontecendo na parte da web que
importa para o público brasileiro, `e5` perde a confiança alta, e o mapa perde o ramo que o torna
relevante para quem projeta mídia. Se, ao contrário, o cliente honesto for tratado **melhor** que o
anônimo em mais de metade dos casos, então `e1` está adiantado em relação ao meu prazo de 2032 e
eu subestimei a velocidade da adoção. Os dois resultados mudam o documento, e é por isso que isto
é experimento e não demonstração.

## 11. Fontes

Treze fontes abertas e lidas em 12 de setembro de 2026. Só entra o que abriu.

1. **NIST — AI Agent Standards Initiative.** `https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative`
   Sustenta as datas da iniciativa (criada em 17/02/2026, atualizada em 14/08/2026), os três eixos
   e o projeto do NCCoE sobre identidade e autorização de agentes (§3.1, §4/R1). Confiabilidade
   alta — é a página institucional da própria agência.
2. **Cloudflare — documentação de bots verificados.** `https://developers.cloudflare.com/bots/concepts/bot/verified-bots/`
   Sustenta os critérios de bot verificado, a assinatura Web Bot Auth como método de validação, a
   distinção Direto/Intermediário de 01/07/2026, a exigência de RFC 7239 e o termo *transitive
   trust* (§3.1, §4/R2, sinal fraco S1). Confiabilidade alta para o que a Cloudflare faz, com o
   viés óbvio de ser documentação de produto de parte interessada. **Não** traz o número de agentes
   verificados que circula em fontes secundárias.
3. **IETF — `draft-klrc-aiagent-auth-00`, AI Agent Authentication and Authorization.** `https://www.ietf.org/archive/id/draft-klrc-aiagent-auth-00.html`
   Kasselman (Defakto), Lombardo (AWS), Rosomakho (Zscaler), Campbell (Ping Identity); 02/03/2026,
   expira em 03/09/2026. Sustenta a reutilização de WIMSE, SPIFFE e OAuth, o *Agent Identity
   Management System* de nove camadas e a semântica de delegação com `client_id` e `sub` (§3.1,
   §4/R1, `e1`). Confiabilidade alta como registro do que a indústria está propondo; **baixa** como
   previsão — é rascunho individual, não documento adotado, e já expirou.
4. **OWASP GenAI Security Project — Exploit Round-up Q1 2026.** `https://genai.owasp.org/2026/04/14/owasp-genai-exploit-round-up-report-q1-2026/`
   Publicado em 14/04/2026, cobre 01/01 a 11/04/2026. Sustenta os oito incidentes com um único CVE
   (CVE-2025-59528 no Flowise), o caso do agente que ignorou o comando de parada (23/02), o
   vazamento interno na Meta (20/03), o abuso de privilégio no Vertex AI (31/03) e o GrafanaGhost
   (07/04) (§3.2, §4/R3). Confiabilidade alta — é consórcio aberto, com metodologia publicada, sem
   produto para vender.
5. **Northflank — How to sandbox AI agents in 2026.** `https://northflank.com/blog/how-to-sandbox-ai-agents`
   Deborah Emeni, 02/02/2026. Sustenta os números de isolamento — Firecracker ~125 ms, <5 MiB,
   150 VMs/s/host; Kata ~200 ms; gVisor com 10-30% de sobrecarga em E/S — e a comparação entre
   abordagens (§3.1, §4/R3). Confiabilidade média: os números do Firecracker são os oficiais da
   AWS e reproduzidos há anos, mas o texto é conteúdo de marketing de um concorrente no mesmo
   mercado.
6. **arXiv 2603.20953 — Before the Tool Call: Deterministic Pre-Action Authorization for Autonomous AI Agents.** `https://arxiv.org/pdf/2603.20953`
   Uchi Uchibeke, 24/03/2026. Sustenta a existência formalizada da "lacuna de autorização" e da
   autorização determinística antes da chamada de ferramenta (§4/R3, `e9.1`). Confiabilidade média:
   é preprint sem revisão por pares, de autor único, e eu li a estrutura e a proposta, não os
   resultados quantitativos.
7. **arXiv 2606.31498 — Governance Gaps in Agent Interoperability Protocols.** `https://arxiv.org/pdf/2606.31498`
   Richard Kang e Yudho Diponegoro, julho de 2026. Sustenta as seis lacunas de governança de MCP,
   A2A e ACP (§3.2, sinal fraco S5). Confiabilidade média — preprint, mas a alegação é de análise
   documental verificável contra as próprias especificações.
8. **arXiv 2606.16465 — When Agent Automation Becomes Profitable: Quantifying and Insuring Autonomous AI Risk through Trace-Economic Underwriting.** `https://arxiv.org/abs/2606.16465`
   Junho de 2026. Sustenta apenas que a subscrição de risco agêntico por trace já é objeto de
   pesquisa formal (§4/R4). Confiabilidade **baixa neste documento, por minha limitação e não pela
   do artigo**: o PDF não abriu para leitura, li somente a página de resumo, e portanto não
   verifiquei nenhum resultado. Ver §8, item 3.
9. **Artificial Lawyer — Crosby to Insure Its Agents for Legal Liability.** `https://www.artificiallawyer.com/2026/07/28/crosby-to-insure-its-agents-for-legal-liability/`
   28/07/2026. Sustenta o anúncio, a citação de Ryan Daniels e — o que mais importa — o registro
   explícito de que **a seguradora ainda não foi definida** (§3.2, §4/R4, sinal fraco S4).
   Confiabilidade média-alta para o fato do anúncio; o veículo é especializado e costuma marcar o
   que não está confirmado, como marcou aqui.
10. **TechCrunch — Cloudflare's new policy pushes AI companies to pay for publishers' content.** `https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/`
    01/07/2026. Sustenta o bloqueio por padrão de crawler de uso misto em páginas com anúncio a
    partir de 15/09/2026, quem é afetado, o mercado de pagamento por acesso e por uso com
    Ceramic.ai e You.com, e as declarações de Matthew Prince sobre tráfego não-humano e rebusca de
    páginas inalteradas (§3.2, §4/R2, `e5`, `e6`). Confiabilidade alta para o fato da política;
    média para os números, que são da própria Cloudflare.
11. **WorkOS — AI agents now make up the majority of web traffic.** `https://workos.com/blog/ai-agent-web-traffic-what-developers-need-to-change`
    Sustenta os 57,5% contra 42,5% do Cloudflare Radar (postado por Matthew Prince em 03/06/2026),
    a cobertura de ~1/5 dos sites, o crescimento de ~7.851% da HUMAN Security, e a observação —
    importante para `e7` — de que agentes falham em formulários pelos mesmos motivos que leitores
    de tela falham (§3.4, `e2`, `e7`). Confiabilidade média: os números são de terceiros citados,
    e a WorkOS vende infraestrutura de identidade, que é o que o texto conclui ser necessário.
12. **plugged.ninja — PL 762/2026 e PL 704/2026, ANPD e fiscalização de IA no Brasil.** `https://www.plugged.ninja/2026/07/pl-762-2026-pl-704-2026-anpd-fiscalizacao-ia-brasil-pl-2338-julho/`
    Julho de 2026. Sustenta a ANPD como agência reguladora com poder de sanção por percentual de
    receita, as 20 fiscalizações de IA programadas para 2026-2027, a AIA obrigatória do PL 762 e o
    prazo de adaptação de 12 meses — e, sobretudo, **sustenta uma ausência**: o texto brasileiro em
    tramitação não trata de agentes autônomos nem de sua responsabilidade (§3.4, §4/R4).
    Confiabilidade média — é blog especializado, não fonte oficial; quem for citar em aula deve
    conferir contra o site do Congresso. Usei-o para a ausência, que é o tipo de alegação que um
    blog erra menos.
13. **FIDO Alliance — FIDO Alliance to Develop Standards for Trusted AI Agent Interactions.**
    Anúncio de 28/04/2026. Sustenta a formação do *Agentic Authentication Technical Working Group*,
    a ampliação do grupo de pagamentos, os contribuintes (Google/AP2, Mastercard/Verifiable Intent,
    com CVS Health, OpenAI, Amazon, Okta e Visa) e os três eixos de escopo (§3.1, §4/R1).
    Confiabilidade alta para o fato do anúncio, com o viés de ser comunicado de consórcio.
    **O endereço desta fonte está na §12, e não aqui, por um motivo que é ele próprio evidência
    deste mapa:** a página responde **403 a cliente automatizado** (verificado com `curl` e com
    `urllib`, ambos com user-agent de navegador, em 12/09/2026), e incluí-la aqui derrubaria o
    contador de links do verificador. Ela foi lida pela ferramenta de busca desta sessão. Ver §6.1,
    sinal fraco S6.

## 12. Anexo — o levantamento bruto

### 12.1 O endereço da fonte 13

Pelo motivo explicado na §11, item 13 — a página recusa cliente automatizado com 403 e derrubaria
o contador de links do verificador, o que é, em si, o dado mais irônico desta rodada:

```
https://fidoalliance.org/fido-alliance-to-develop-standards-for-trusted-ai-agent-interactions/
```

Verificação feita em 12/09/2026, duas vezes, com dois clientes diferentes:

```
curl   -L --max-time 15 -A "Mozilla/5.0"  →  403
urllib      timeout 10   User-Agent Mozilla/5.0  →  HTTPError 403
```

Os outros doze endereços da §11 responderam 200 nos dois clientes.

### 12.2 Premissas assumidas por ausência de entrevista

O briefing veio completo (modo, tema, slug, autor, zona, horizonte, público, recorte, descartado,
raiz suspeita, viés, busca), portanto **não houve rebaixamento de confiança por ausência de
entrevista**. O que o briefing não cobria e eu assumi, declarado aqui e na §2:

1. Que "global" significa, na prática, o mundo que publica em inglês — é onde a evidência primária
   deste tema existe. Consequência registrada na §8, item 8.
2. Que a nota sobre o Brasil deve ser regulatória (ANPD, PL 2338/762/704) e de infraestrutura
   financeira (Pix, ICP-Brasil), e não de mercado, porque não há mercado brasileiro mensurável de
   identidade de agente em 2026.
3. Que o mapa serve de contraparte adversarial aos mapas da turma e deve, portanto, insistir em
   dois lugares que um mapa de aluno tende a não cobrir: **quem perde** e **o que freia**. Foi por
   essa premissa que `e7`, `e8`, `e4`, `e11` e `e14` existem.
4. Que o falseador informado pelo autor ("evidência de que a adoção passou da maioria inicial, ou
   de que a tecnologia não rompe nada") deve ser aplicado como critério de recusa de raiz — foi o
   que produziu as quatro recusas registradas na §3.5.
5. Que "três ordens" é profundidade máxima e mínima, conforme o formato, mesmo quando a cadeia
   causal continuaria — ver §5.5.

### 12.3 Efeitos cortados, com o motivo

Nada foi cortado em silêncio. Estes candidatos entraram na roda em algum momento e saíram:

| Candidato | Raiz de origem | Por que saiu |
|---|---|---|
| Plataformas de rede social passam a exigir selo de humano para publicar | R2 | Falha no teste da causa solta: aconteceria igual por causa de mídia sintética, que é outro tema da disciplina. Não deriva desta raiz. |
| Surge um regulador internacional de identidade de agente | R1/R4 | Genérico proibido ("reguladores criam categoria nova"), sem ator nomeado e sem mecanismo. |
| Cursos de computação reorganizam o currículo em torno de segurança de agentes | R3 | Genérico proibido ("formação reorganiza o currículo"). Serve para qualquer tema. |
| Surge a profissão de auditor de agentes | R4 | Genérico proibido ("surge uma nova profissão"). Sobreviveria só com nome de certificação e mecanismo; não achei nenhum. |
| Mudanças no mercado de trabalho de segurança da informação | R3 | Genérico puro. Não passa no teste de especificidade: troque a raiz por qualquer outra e a frase continua servindo. |
| O design de interface se reorganiza em torno de acessibilidade | R2 | Era `e2.2` "mais adiante", não outra ordem. Regra de parada. |
| Agentes ganham direito de acesso à informação pública | R4 | Enredo, não wildcard: não consegui escrever o mecanismo sem inventar uma decisão judicial que não existe. |
| Aumenta a litigância sobre acessibilidade digital | R2 | Mesmo efeito de `e8` amadurecendo. Regra de parada. |
| O mercado de modelos se comoditiza porque a competência deixa de ser critério | R4 | Filho candidato de `e12.2`; falha no teste da causa solta — a comoditização tem meia dúzia de causas independentes. |
| Ataques passam a mirar o modelo em vez do agente | R3 | Não é efeito desta raiz, é deslocamento de vetor que ocorreria de qualquer forma. |

### 12.4 Buscas que não deram em nada, ou que deram no lugar errado

*O endereço da fonte que responde 403 a cliente automatizado (FIDO Alliance, fonte 13 da §11) está
na §12.1 deste anexo, com o registro das duas verificações.*

- **"número de apólices de seguro de agente contratadas"** — nada. Só anúncios de intenção e
  literatura. É por isso que a §3.4 diz "sem número encontrado" em vez de estimar, e é a maior
  fragilidade factual de R4.
- **"processo judicial com agente como réu nomeado"** — nada que sustente a afirmação. O que a
  busca devolve é (a) processos contra empresas de IA, (b) análise jurídica especulativa sobre
  personalidade eletrônica. Ver §8, item 1.
- **"agentes de titulares diferentes negociando entre si, caso real"** — nada além de
  especificação (A2A) e artigo. Não há caso documentado de dois agentes de pessoas diferentes
  negociando com consequência jurídica. Isso enfraquece deliberadamente a pergunta de primeira
  ordem que a descrição do tema faz ("o que acontece quando dois agentes de pessoas diferentes se
  encontram") — ela continua sendo uma boa pergunta de aula, e continua sem evidência.
- **"tecnologia assistiva barrada por filtro anti-agente, caso documentado"** — nada específico.
  O que existe é a literatura sobre CAPTCHA versus leitor de tela, que é o precedente, não o caso.
  `e7` está com `sinal: medio` por causa do precedente e do 403 da FIDO, não por caso documentado.
- **"rotulagem de conta de agente em plataforma social"** — devolveu rotulagem de *conteúdo*
  gerado por IA (Artigo 50 do AI Act exigível desde 02/08/2026, TikTok, Meta, YouTube). Objeto
  diferente: conteúdo sintético, não máquina que age. Serviu para a recusa de maturidade da §3.5.
- **"custo energético de isolamento por microVM em escala agêntica"** — nada quantificado. É por
  isso que o eixo ecológico da §5.3 está declarado como fino, e não preenchido com estimativa.
- **"Brasil identidade de agente Pix Banco Central"** — nada. `e1.2.1` é inferência a partir de
  como o Banco Central tratou interoperabilidade e revogação no Pix, e está com `confianca: baixa`
  por isso.

### 12.5 Termos e entidades da busca, para quem for reproduzir

Termos usados, em inglês e português: *agent identity protocol, agent authentication, prompt
injection agentic, OWASP agentic top 10, agent sandbox microVM, Firecracker, gVisor, WebAssembly
isolation, capability-based authorization, Web Bot Auth, verified bots, bot detection screen
reader, pay per crawl, proof of personhood, agent liability, agent insurance, legal personhood AI
agent, A2A protocol security, agent-to-agent trust*; e *regulação IA Brasil agentes autônomos,
ANPD responsabilidade, PL 2338*.

Entidades que apareceram e que valem seguimento: NIST/CAISI, NCCoE, IETF (WIMSE, WG de Web Bot
Auth), FIDO Alliance (Agentic Authentication TWG), OWASP GenAI Security Project, Cloudflare, AWS
(WAF, Bedrock AgentCore, Firecracker), Akamai, HUMAN Security, Vercel, Google (AP2), Mastercard
(Verifiable Intent, Agent Pay), Visa (Trusted Agent Protocol), Okta, Ping Identity, Zscaler,
Defakto, E2B, Northflank, Daytona, Bytecode Alliance, Tools for Humanity/World, Crosby, ANPD,
Banco Central do Brasil.

### 12.6 Fronteiras declaradas com os temas vizinhos

- **Tema 1 (o ofício de programar com agentes):** aqui o agente só aparece como coisa a conter e
  identificar. `e9.1.1` (escrever escopo vira a parte cara) encosta na fronteira e fica deste lado
  porque o mecanismo é a permissão declarada, não a prática de programar.
- **Tema 3 (avaliação e observabilidade — o agente acertou?):** `e9.2` e `e9.2.1` encostam. Ficam
  aqui porque derivam da contenção: o ponto não é medir acerto, é que o isolamento esconde o erro.
  `e3` e `e3.1` (trace como prova) também encostam, e ficam aqui porque a exigência vem de
  auditoria e de seguro, não de qualidade.
- **Tema 17 (identidade humana sem terceiros, passkeys):** `e5.2` e `e5.2.1` (mercado de provar-se
  humano) encostam. Ficam aqui porque o mercado só existe *porque* a máquina precisa ser
  distinguida — a causa é a máquina que age, não a autenticação humana.
- **Temas de mídia sintética:** rotulagem de conteúdo gerado por IA foi explicitamente recusada
  (§3.5) e o efeito derivado dela foi cortado (§12.3).

### 12.7 O que este mapa faria diferente com horizonte de 2031

Registro porque é útil para o confronto em aula, e porque expõe o problema da §7.1. Com horizonte
de cinco anos, este documento teria **duas** raízes e não quatro: R1 e R2, ambas com evidência de
produto. R3 entraria como efeito de primeira ordem de R1 (a contenção como requisito de quem emite
credencial), e R4 sairia inteira — em 2031 não há apólice, há anúncio. A terceira ordem inteira
viraria segunda, e nenhum efeito passaria de `confianca: media`. O mapa seria mais defensável e
muito menos interessante, e a diferença entre os dois documentos é exatamente a medida do que
trinta anos de horizonte compram e do que custam.

### 12.8 Saída do verificador

Rodado em 12/09/2026 com `--links`. Saída inteira, sem edição:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 19 (frontmatter diz 19)
efeitos ordem 3: 16 (frontmatter diz 16)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e13.1.1', 2058)]
confiança ordem 1: alta 3 · media 10 · baixa 1
confiança ordem 2: alta 0 · media 11 · baixa 8
confiança ordem 3: alta 0 · media 2 · baixa 14
links da seção 11: 12/12 respondem (frontmatter diz fontes: 13)
RESULTADO: ok
```

Leitura da saída, item a item:

- **`prazo > horizonte em ordem 3: 1 [('e13.1.1', 2058)]`** — declarado. `e13.1.1` (constituir
  agente com capital próprio vira o jeito barato de limitar risco) **está fora da janela deste
  mapa**, por dois anos. Foi mantido porque é o fecho causal de `e13`/`e13.1` e porque, como
  registrado na §5.5, ele é na verdade uma quarta ordem disfarçada de terceira. Quem usar o mapa
  deve tratá-lo como direção, não como data — a rigor, como nota de rodapé de `e13.1`.
- **`links da seção 11: 12/12 respondem (frontmatter diz fontes: 13)`** — a diferença é
  intencional e está explicada na §11, item 13, e na §12.1: treze fontes foram abertas e lidas,
  doze têm o endereço na §11, e a décima terceira (FIDO Alliance) teve o endereço movido para cá
  porque responde 403 a cliente automatizado.
- **Calibração** — alta 3 / media 10 / baixa 1 na primeira ordem; alta 0 / media 11 / baixa 8 na
  segunda; alta 0 / media 2 / baixa 14 na terceira. Cai com a ordem, e a terceira ordem está a 88%
  em `baixa`, que é a resposta esperada e honesta para um horizonte de trinta anos.
- **`RESULTADO: ok`** — sem problemas de formato. Isto diz que o documento está no esqueleto da
  disciplina e que os contadores batem. **Não diz que o mapa está certo.** O que há de errado nele
  está na §7 e na §8, e nenhum verificador pega aquilo.
