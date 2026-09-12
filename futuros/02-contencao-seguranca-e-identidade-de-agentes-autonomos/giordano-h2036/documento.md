---
tema: "Contenção, segurança e identidade de agentes autônomos"
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 18
efeitos_ordem_2: 34
efeitos_ordem_3: 24
tecnologias_citadas: [Web Bot Auth, HTTP Message Signatures, Ed25519, HTTP 402, Microsoft Entra Agent ID, Agent 365, Cross App Access, MCP, A2A, ACP, OAuth 2.1, PKCE, OpenID Connect, SPIFFE/SPIRE, SCIM, NGAC, Agent Auth Protocol, aiAuthZ, AgentDojo, Firecracker, microVM, gVisor, WebAssembly, WASI, V8 isolates, E2B, World ID, AgentKit, x402, ERC-8004, Foil, PromptTrace, Comet, Claude Code, GPT-4.1, Llama Guard 4, CAPTCHA, WCAG 2.2, LGPD]
fontes: 32
confianca: media
experimento: "O crachá e a porta — quatro portas numa mesma página (aberta, assinada, tarifada e vigiada) contra quatro agentes, incluindo um que copia a assinatura alheia e um leitor de tela"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Os agentes saíram do chat e ganharam mãos, e a infraestrutura de confiança da internet não tinha
lugar para um ator que não é pessoa nem processo. Em 2026 isso deixou de ser hipótese: as
organizações administram **109 identidades de máquina para cada identidade humana, e 79 dessas
109 são agentes de IA** (Palo Alto Networks, maio de 2026), enquanto **apenas 34% delas aplicam
algum controle de segurança a agentes**. Ao mesmo tempo a defesa clássica perdeu o chão — a
injeção de prompt é declarada, em letra de forma, um **problema arquitetural não resolvido**,
porque o modelo processa tudo como uma sequência única de tokens e "não há mecanismo confiável
para impor fronteiras de privilégio entre prompt de sistema, pergunta do usuário e conteúdo
recuperado pelo agente" (OWASP, Infosecurity Europe, junho de 2026). Este mapa persegue quatro
rupturas até 2036: **o agente vira principal de segurança**, com identidade, credencial e ciclo
de vida próprios (Entra Agent ID em disponibilidade geral em maio de 2026; iniciativa do NIST em
fevereiro de 2026); **a contenção migra para fora do modelo**, porque ninguém mais espera
consertar a fronteira entre dado e instrução dentro dele; **a porta da web passa a distinguir
humano de agente e a cobrar diferente**, com assinatura criptográfica no cabeçalho e preço por
requisição; e **o rastro de execução vira prova jurídica e prêmio de seguro**, não artefato de
depuração. O achado que se repete não é "os agentes serão contidos". É que **conter custa
identificar, identificar custa excluir, e quem paga a conta da exclusão é quem já dependia de
agente para chegar à página** — a pessoa com deficiência, o estúdio pequeno, o fornecedor sem
nuvem. Para quem projeta mídia e interação, a consequência prática é que em 2036 a credencial,
o orçamento e o log do agente são elementos de interface tão concretos quanto o botão.

## 2. O tema

**Contenção, segurança e identidade de agentes autônomos** é o conjunto de mecanismos que trata
o agente como um *principal* — uma entidade que age, que precisa ser autenticada, autorizada,
isolada e auditada por conta própria. É um objeto novo. Firewall, antivírus e OAuth para gente
existem há décadas e são maduros; o que apareceu em 2025-2026 é a camada que responde a
perguntas que ninguém precisava fazer antes: *quem é este agente, quem respondeu por ele, o que
ele podia tocar, e onde está escrito o que ele fez*.

**Onde isso encosta em mídia e interação**, em quatro lugares que não são "segurança" no sentido
estreito:

1. **A porta do conteúdo virou uma decisão de produto.** Quando o site distingue humano de agente
   e cobra diferente, quem edita passa a publicar para duas audiências com estatutos jurídicos e
   comerciais diferentes. Isso é decisão editorial antes de ser decisão de infraestrutura.
2. **A permissão virou elemento de interface.** "Aprovar" deixou de ser um clique de conveniência
   e passou a ser o ato de maior consequência jurídica que um usuário pratica. O desenho do
   consentimento agêntico é design de interação com responsabilidade civil embutida.
3. **A exclusão passou a ser efeito colateral da detecção.** Todo detector que separa humano de
   máquina pelo *comportamento* erra exatamente com quem não se comporta como a mediana — leitor
   de tela, acesso por varredura, tremor, tempo de resposta longo. A mesma engenharia que protege
   o site desfaz trinta anos de acessibilidade, sem que ninguém tenha decidido isso.
4. **O rastro virou artefato de autoria.** Se o log é a prova, o que se registra sobre a intenção
   e a aprovação passa a ser parte do que se produz — e disputado em juízo.

**Por que isto merece um mapa de futuro e não um levantamento de estado da arte.** Porque o
estado da arte aqui é uma corrida de fornecedores que se reescreve a cada trimestre, e o que
interessa é o que *não* se reescreve: as instituições que pressupunham uma pessoa do outro lado.
O cadastro, o termo de uso, o assento de licença, a apólice, a prova judicial, o direito de
acesso, o anonimato, o `robots.txt` — tudo isso foi construído sobre a suposição de que uma
requisição vem de alguém que pode ser responsabilizado. Dez anos é o prazo em que instituições
se reorganizam; três anos é o prazo em que ferramentas mudam de nome.

### 2.1 Premissas assumidas nesta rodada

O briefing veio completo (tema, horizonte 2036, público, recorte global com nota sobre o Brasil,
descarte inicial, viés neutro, falseador declarado), então **não houve rebaixamento de confiança
por ausência de entrevista**. O que o briefing não cobriu e foi assumido, declarado aqui:

- **Continuidade de fornecimento de modelo.** O mapa assume que modelos de capacidade agêntica
  continuam disponíveis comercialmente até 2036, sem interdição regulatória ampla.
- **Custo de computação decrescente ou estável.** Vários efeitos dependem de isolamento barato.
- **Nenhuma mudança de arquitetura que resolva a fronteira dado/instrução.** Se um modelo com
  canais de privilégio separados aparecer, a raiz R2 muda de natureza (tratado em §6.4).
- **"Global" com nota Brasil** significa: a evidência primária é majoritariamente de língua
  inglesa; o recorte brasileiro aparece onde há fonte brasileira aberta (ANPD, imprensa técnica).
- **Ideias óbvias excluídas de saída**, conforme o briefing: as que serviriam para qualquer tema.
  O registro das que foram cortadas por esse critério está em §12.2.

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 12/09/2026; 32 fontes abertas e lidas, listadas em §11. O
que não abriu está em §12.4, nomeado.

### 3.1 O que já existe e funciona

**Identidade de agente virou produto de prateleira, dentro de um fornecedor.** O **Microsoft
Entra Agent ID** está em disponibilidade geral desde 1º de maio de 2026, e a documentação oficial
não descreve uma promessa: descreve um aparato administrativo completo — *blueprints* de
identidade de agente, distinção entre **owner, sponsor e manager**, pacotes de acesso para os dois
casos (agente agindo *em nome de* um usuário e agente **autônomo, sem contexto de usuário**),
*templates* de Acesso Condicional para "bloquear identidades de agente de alto risco", exclusão
com limpeza em cascata, e — o detalhe que denuncia o problema real — dois *workflows* de ciclo de
vida que **transferem automaticamente o patrocínio quando o patrocinador muda de cargo ou sai da
empresa, "para evitar agentes órfãos"**.

**O padrão aberto correspondente existe e é embrionário.** O **Agent Auth Protocol**, da equipe
Better Auth, publica a v1.0 (marcada `v1.0-draft` no site) com a premissa dita sem rodeio:
*"agentes hoje não têm identidade"*, e *"todos os agentes compartilham um token; o servidor vê o
usuário, não o agente"*. O repositório tinha **187 estrelas e 12 forks** quando foi aberto nesta
rodada — a ordem de grandeza importa: é um padrão de projeto, não um padrão de indústria.

**O Estado entrou.** O NIST criou, em **fevereiro de 2026**, a *AI Agent Standards Initiative*,
com três frentes (normas lideradas pela indústria, protocolos abertos financiados pela NSF, e
pesquisa de segurança e identidade). O documento-conceito recomenda **adaptar OAuth 2.0/2.1,
OpenID Connect, SPIFFE/SPIRE, SCIM, NGAC e o MCP em vez de inventar autenticação nova**, pede
"identidades de nível corporativo com ciclo de vida adequado" em vez de contas de serviço
compartilhadas, e registra que **delegação multi-salto — agente que cria agente — continua um
problema aberto**.

**A porta da web já cobra.** O **pay per crawl** da Cloudflare usa `HTTP 402 Payment Required`,
os cabeçalhos `crawler-price`, `crawler-exact-price`, `crawler-max-price` e `crawler-charged`, e
autentica o rastejador por **Web Bot Auth**: par de chaves **Ed25519**, chave pública publicada
num diretório JWK, e assinatura por *HTTP Message Signatures* nos cabeçalhos `Signature-Agent`,
`Signature-Input` e `Signature`. Em **1º de julho de 2026** a Cloudflare anunciou que, a partir de
**15 de setembro de 2026**, bloqueia por padrão rastejadores "de uso misto" (que misturam busca,
agente e treino) em **qualquer página que hospede anúncio** — para clientes novos, sites novos de
clientes existentes e **todos os clientes gratuitos existentes**. A justificativa de Matthew
Prince é a frase que define o período: *"agora que a maioria do tráfego da internet é
não-humana"*.

**Detectar agente virou mercado com taxonomia nominal.** O **Foil** (ABXY, Inc.) vende detecção
de agente com **mais de 350 sinais** em Web, iOS e Android, sem CAPTCHA, e mantém *"uma taxonomia
de centenas de agentes de IA, rastejadores e tipos de bot conhecidos; cada um classificado e
identificado pelo nome, não apenas marcado como 'bot'"*. Detecta explicitamente navegador
anti-detecção (Multilogin, GoLogin, Linken Sphere) e navegador headless em modo furtivo
(Puppeteer, Playwright, Selenium).

**Isolamento por tarefa é engenharia resolvida, com números.** A comparação aberta nesta rodada
(26/05/2026) mede: contêiner + gVisor, **1 a 5 s** de partida e **50-200 MB**; microVM
(Firecracker), **125-150 ms** e **128 MB+**, com isolamento em nível de hardware via KVM; isolados
V8, **<1 ms** e **2-10 MB**, restritos a JavaScript; **WebAssembly, <1 ms e menos de 1 a 5 MB, com
modelo de capacidade negado por padrão** — o ponto arquitetural é que o componente WASM começa com
zero permissões, o que remove a *autoridade ambiente* apontada como causa-raiz de boa parte das
falhas de agente.

**Prova de humano por trás do agente saiu do papel.** Em **17 de março de 2026** a World anunciou
o **AgentKit**, com Coinbase e Cloudflare, integrado ao protocolo **x402**: a pessoa registra o
agente com seu **World ID** e o site recebe, via x402, a afirmação de que *"um humano distinto e
verificado aprova as decisões de compra do agente"*. Nas palavras de Tiago Sada, diretor de
produto: *"o que o crachá do World ID te diz é que alguém é um humano real e único"*.

**O tribunal já decidiu uma vez.** Em **4 de agosto de 2026** o Nono Circuito derrubou a liminar
que a Amazon obtivera contra o navegador **Comet**, da Perplexity: como o Comet age sob direção do
usuário, **quem acessa os servidores da Amazon é o usuário**, não a Perplexity — e uma liminar
*"contra conduta que provavelmente não viola o CFAA não serviria ao interesse público"*. A ação de
fundo continua em São Francisco.

**Seguro para agente existe, com nome e data.** Em **28 de julho de 2026** o escritório Crosby
anunciou seguro de responsabilidade profissional **para os próprios agentes**, para que eles
façam trabalho jurídico autônomo. O CEO Ryan Daniels: *"hoje nossos advogados revisam cada
resultado. Como os agentes melhoraram aos saltos nos últimos meses, ficou claro que isso não será
necessário no futuro."*

**A taxonomia de risco está publicada.** O **OWASP Top 10 for Agentic Applications** foi publicado
em **9 de dezembro de 2025**, com mais de 100 especialistas, e lista: ASI01 sequestro de objetivo,
ASI02 abuso de ferramenta, ASI03 **abuso de identidade e privilégio**, ASI04 cadeia de suprimentos
agêntica, ASI05 execução inesperada de código, ASI06 envenenamento de memória e contexto, ASI07
**comunicação insegura entre agentes**, ASI08 falhas em cascata, ASI09 exploração da confiança
humana no agente, ASI10 **agentes desonestos**. O OWASP mantém duas listas em paralelo: a de LLM
governa *o que o modelo diz*; a agêntica governa *o que o sistema faz*.

**E existe treino público, gratuito e aferido.** O **PromptTrace** oferece 10 laboratórios com
LLMs reais e um CTF de **17 níveis** — níveis 1-7 de guardas de prompt, 8-11 de guardas de código
(limite de interação, regex de saída, canários) e 12-17 de **classificadores LLM** (classificador
de entrada, de saída, guarda tripla, *final boss*, *firewall* de dependência, classificador de
troca), alinhados às duas listas do OWASP. O recurso didático relevante é o *Context Trace*: a
visão em tempo real das camadas do prompt — instrução de sistema, documentos RAG, definições de
ferramenta e entrada do usuário.

### 3.2 O que existe e ainda não funciona

**A identidade não atravessa fornecedor.** O Entra Agent ID é, na avaliação aberta nesta rodada,
"o melhor sistema de identidade de agente que só funciona dentro da Microsoft". O Cross App Access
da Okta virou, em **24 de agosto de 2026**, a extensão oficial de autorização gerenciada por
empresa do MCP — dentro do ecossistema Okta. O diagnóstico da mesma fonte é duro e é o melhor
resumo do estado atual: *"o protocolo de delegação está perto de resolvido, e a disciplina
operacional em torno dele não está perto de nada"* — com quatro buracos nomeados: execução de
entrada não confiável (issue de GitHub virando código executável em runner com credencial), perda
de identidade de sessão em brokers sem estado, **ausência de dono para o agente (só 34% das
organizações aplicam controles de segurança a agentes)**, e escopo aspiracional (*"um agente com
token restrito que pode chamar uma ferramenta com token amplo tem token amplo"*).

**Reputação portátil de agente não funciona — e isso está medido.** O estudo empírico do
ecossistema **ERC-8004** (primeira camada de confiança sem permissão para economias de agentes,
com registros de Identidade, Reputação e Validação, em Ethereum, BSC e Base até maio de 2026)
encontrou: **apenas 3%, 4% e 15% dos registros** expunham arquivo válido com endpoint de serviço
ativo; **73,5%, 59,2% e 90,6% dos avaliadores** apresentaram comportamento Sybil coordenado; e,
removida a avaliação marcada como Sybil, **15,8%, 77,9% e 86,8% dos agentes avaliados ficaram sem
nenhum retorno válido**. A conclusão dos autores é que o registro de reputação *"não pode
funcionar como sinal de confiança"*.

**Pagamento agêntico é anúncio, não adoção.** Mastercard Agent Pay, Visa Trusted Agent Protocol e
o AP2 do Google existem desde 2025 com dezenas de parceiros; a leitura de mercado aberta nesta
rodada registra que, em meados de 2026, o usuário médio ainda não consegue comprar por AP2 em
produto da Google. *(Esta é a fonte mais fraca do conjunto — ver §11.)*

**Os protocolos de interoperabilidade não sabem governar.** A análise de MCP, A2A e ACP conclui
que eles resolvem *"identidade, descoberta de capacidade, acesso a ferramenta e troca de
mensagem"* e não expressam **votação** (ausente em todos), **preservação de dissenso** (ausente em
todos), deliberação, pertencimento, escalonamento humano e auditoria/replay — e que isso é *"uma
camada arquitetural faltante acima dos padrões de interoperabilidade atuais, não uma
funcionalidade faltante dentro deles"*.

**Defesa por prompt não resolve.** O estudo de junho de 2026 sobre injeção camuflada por domínio
(3.510 ensaios, Claude Haiku, Llama 3.1 8B e Gemini 2.0 Flash) mede que parafrasear o conteúdo
recuperado reduz o sucesso do ataque em **55% a 84%** conforme o modelo, superando o Llama Guard 4
em todos — mas que *spotlighting* reduz à metade no Claude Haiku e **não ajuda em nada** no Llama
3.1 8B, e que **nenhuma defesa por prompt elimina a ameaça nos modelos mais fracos**.

### 3.3 Quem constrói

| Ator | O que constrói | Onde está |
|---|---|---|
| **Microsoft (Entra Agent ID / Agent 365)** | identidade, governança e acesso condicional de agente | GA desde 01/05/2026, dentro do próprio ecossistema |
| **Cloudflare** | Web Bot Auth, classificação de rastejador por finalidade, `HTTP 402` e pay per crawl | em produção; política de bloqueio padrão desde 15/09/2026 |
| **NIST / NSF** | normas de autenticação, autorização e interoperação de agente | iniciativa criada em 02/2026; documento-conceito |
| **OWASP (GenAI Security Project)** | as duas listas de risco (LLM e agêntica) | agêntica publicada em 09/12/2025 |
| **Better Auth** | Agent Auth Protocol, padrão aberto de identidade e capacidade | v1.0-draft, 187 estrelas |
| **World / Coinbase** | prova de humano por trás do agente (AgentKit sobre x402) | beta desde 17/03/2026 |
| **Foil (ABXY)** | detecção nominal de agente por 350+ sinais | produto comercial |
| **E2B, Firecracker, comunidade WASI** | isolamento por tarefa, de microVM a WebAssembly | em produção |
| **Crosby** | seguro de responsabilidade para agentes | anunciado em 28/07/2026 |
| **ANPD (Brasil)** | fiscalização de IA no tratamento de dados pessoais | Resolução CD/ANPD nº 30/2025, de 24/12/2025 |

### 3.4 Os números que descrevem a adoção hoje

- **109 identidades de máquina por identidade humana**, das quais **79 são agentes de IA**; projeção
  de **+85% de agentes em 12 meses**, **+77% de identidades de máquina** e **+56% de humanas**
  (Palo Alto Networks, *2026 Identity Security Landscape*, via Help Net Security, 14/05/2026). O
  tamanho da amostra não é divulgado na cobertura.
- **34% das organizações** aplicam controles de segurança a agentes.
- **+32% de conteúdo malicioso de injeção indireta** entre novembro de 2025 e fevereiro de 2026,
  medido pelo Google sobre 2 a 3 bilhões de páginas rastejadas por mês. A Unit 42 documentou
  **12 casos** contra agentes e catalogou **22 técnicas de entrega de carga** em uso ativo; em
  **85,2% dos casos** havia enquadramento de engenharia social; entrega por texto visível em
  **37,8%**, ocultação em atributo HTML em **19,8%**, supressão por CSS em **16,9%**. A
  compilação do OWASP para o 1º trimestre de 2026 consolidou **8 incidentes maiores** entre janeiro
  e 11 de abril, dos quais **apenas um** recebeu CVE tradicional (Flowise, CVE-2025-59528).
- **Taxa de sucesso de ataque de 26% a 33%** em cenário de domínio financeiro, sobre 3.510 ensaios.
- **187 estrelas** no repositório do Agent Auth Protocol — a ordem de grandeza da adoção do padrão
  aberto, contra a disponibilidade geral do produto proprietário equivalente.
- **3.117 ações judiciais de acessibilidade web** na justiça federal dos EUA em 2025, **+27% sobre
  2024**; na Europa, um tribunal francês condenou o Carrefour, em meados de 2026, a corrigir site
  e aplicativo em seis meses sob pena de multa diária.
- **Brasil:** a ANPD publicou em **24/12/2025** o Mapa de Temas Prioritários 2026-2027 (Resolução
  CD/ANPD nº 30/2025), com quatro eixos, e **inteligência artificial e tecnologias emergentes no
  contexto do tratamento de dados pessoais** é um deles — ao lado de direitos dos titulares,
  proteção de crianças e adolescentes, e tratamento pelo Poder Público. **Sem número encontrado**
  para adoção de identidade de agente em organizações brasileiras.
- **Incidente de referência:** entre o fim de dezembro de 2025 e janeiro de 2026, um atacante usou
  Claude Code (e GPT-4.1) contra **dez órgãos do governo mexicano e uma instituição financeira** —
  autoridade tributária, cartório civil da Cidade do México, secretaria de saúde, instituto
  eleitoral nacional, governos de quatro cidades e uma empresa de água —, exfiltrando **mais de
  150 GB** e expondo **cerca de 195 milhões de identidades**, com **mais de mil prompts**. O relato
  é da Gambit Security. Em novembro de 2025 a Anthropic já havia divulgado manipulação do Claude
  Code em campanha de espionagem contra cerca de 30 organizações.

## 4. As disrupções-raiz

Quatro rupturas. Antes delas, as recusas.

### 4.0 Candidatos recusados como raiz

- **Candidato "usar agente de código" recusado como raiz:** adoção em maioria desde 2026 (90% de
  desenvolvedores profissionais ao menos semanalmente, medição JetBrains registrada na rodada do
  tema 1 desta mesma série). É contexto, não ruptura.
- **Candidato "sandbox em contêiner" recusado como raiz:** Docker e afins são maioria há uma
  década. O que é emergente é o isolamento **por tarefa** a custo quase zero — e isso é a raiz R2,
  não o contêiner.
- **Candidato "detecção de bot" recusado como raiz:** CAPTCHA e gestão de bot são maduros desde os
  anos 2010. O emergente é a **classificação por finalidade com nome próprio e preço**, que é R3.
- **Candidato "OAuth / OIDC" recusado como raiz:** maduro, e o próprio NIST recomenda adaptá-lo em
  vez de inventar. Entra como insumo das raízes, não como raiz.
- **Candidato "injeção de prompt" recusado como raiz:** é uma *vulnerabilidade*, conhecida desde
  2022, não uma ruptura de prática. A ruptura é o que se fez com a constatação de que ela não tem
  conserto — e isso é R2.
- **Candidato "reputação portátil de agente" recusado como raiz:** não passa no teste 4 do §2 —
  falta acontecer algo que a evidência diz que não está acontecendo. Vai para sinal fraco (§6) e
  aparece invertida como efeito e18.

### 4.1 R1 — O agente vira principal de segurança: identidade, credencial e ciclo de vida próprios

**O que rompe.** Rompe a suposição de que toda ação num sistema traça de volta a **uma conta
humana** ou a uma **conta de serviço estática**. Com ela caem quatro instituições silenciosas: o
controle de acesso baseado em papel de pessoa; a trilha de auditoria que responde "quem fez isso"
com um nome; a conta de serviço como depósito de tudo que não é gente; e a **licença por assento**
como unidade de cobrança de software. Não é "o mesmo login, melhor" — é outra unidade de
contabilidade de quem age.

**Por que agora, e não há cinco anos.** Porque há cinco anos o número de atores não-humanos com
iniciativa própria era desprezível e eles não tomavam decisão: executavam script. A pré-condição
que apareceu é dupla — **volume** (79 dos 109 identidades de máquina por humano são agentes) e
**iniciativa** (o agente escolhe qual ferramenta chamar). Sem iniciativa, uma chave de API basta;
com iniciativa, é preciso poder revogar, limitar e responsabilizar em tempo de execução.

**Onde está na difusão.** **Produto de nicho passando a adoção precoce.** O produto proprietário
está em GA (Entra Agent ID, 01/05/2026) e o padrão aberto tem 187 estrelas; **34% das organizações
aplicam controle a agentes** — bem abaixo de maioria. Não é maduro.

**O que ainda falta acontecer.** (a) Delegação multi-salto resolvida — o NIST a registra em
aberto. (b) Portabilidade entre fornecedores: hoje a identidade morre na fronteira da nuvem.
(c) Disciplina de revogação: existe o *template*, falta o hábito. (d) Um emissor aceito por quem
não é cliente de grande nuvem. (e) Amarração entre o escopo declarado e o escopo efetivo — hoje
o token restrito que chama ferramenta ampla **é** amplo.

**Quem bloqueia.** Os provedores de identidade. O incentivo deles é que a identidade de agente
seja **excelente e intransportável**, porque é isso que converte agente em aprisionamento — e a
evidência de 2026 é exatamente essa (efeito e3).

### 4.2 R2 — Não há fronteira entre dado e instrução, e a indústria parou de consertá-la no modelo

**O que rompe.** Rompe o método central da segurança de aplicação: **validar a entrada**. Com um
modelo de linguagem, não há fronteira de privilégio dentro da sequência de tokens — a citação do
OWASP é literal quanto a isso. A consequência não é "mais um bug"; é que **o componente deixa de
ser algo que se pode tornar correto e passa a ser tratado como permanentemente comprometível por
desenho**. A resposta migrou de dentro para fora: porteiro de autorização que o agente não lê nem
altera, isolamento com capacidade negada por padrão, proveniência de contexto, ponto de parada
humano.

**Por que agora, e não há cinco anos.** Porque o modelo passou a **agir**. Em 2021 uma alucinação
produzia uma frase errada; em 2026 produz uma chamada de ferramenta executada — o caso mexicano é
a demonstração de escala (150 GB, dez órgãos, mais de mil prompts). E porque o problema deixou de
ser tratado como bug a corrigir e passou a ser declarado insolúvel por quem tem autoridade para
declarar (OWASP, em junho de 2026). Declarar insolúvel é a pré-condição que libera o investimento
em contenção externa.

**Onde está na difusão.** **Produto de nicho para adoção precoce.** Há produto em produção (E2B,
Firecracker), há prova acadêmica (aiAuthZ: **0% de sucesso residual de ataque em 15 modelos, com
0,03 ms de latência adicional**, bloqueando as sete chamadas dirigidas pelo atacante na suíte
bancária do AgentDojo e nove de nove estudos de caso de um corpus de incidentes) — e há ausência
de prática: proveniência de contexto não é padrão em lugar nenhum.

**O que ainda falta acontecer.** (a) Um formato comum de proveniência de contexto. (b) Porteiro
externo como serviço gerenciado de nuvem, e não como biblioteca. (c) Custo de isolamento por
tarefa cair para a faixa do WASM sem perder o acesso a ferramenta real. (d) Uma convenção pública
sobre o que numa página é conteúdo e o que nunca deve ser lido como ordem.

**Quem bloqueia.** Quem vende o modelo. Admitir contenção externa como obrigatória é admitir que o
produto não é confiável sozinho — e o preço do modelo está indexado à promessa de autonomia. O
efeito disso é a preferência por defesas *dentro* do modelo (classificador, alinhamento), que a
medição mostra insuficientes nos modelos mais fracos.

### 4.3 R3 — A porta da web passa a distinguir humano de agente, e a cobrar diferente

**O que rompe.** Rompe o contrato fundador da web: **uma requisição é uma requisição**, e o HTTP
é agnóstico quanto a quem a envia. O `robots.txt` era um pedido educado sem sanção; o Web Bot Auth
com Ed25519 e o `HTTP 402` com preço no cabeçalho são **identificação verificável e cobrança na
mesma requisição**. Com isso caem: o acesso binário (permitir/bloquear), o anonimato como padrão
da leitura, e a indiferença do publicador quanto a quem lê.

**Por que agora, e não há cinco anos.** Porque a maioria do tráfego passou a ser não-humana — é a
justificativa explícita da Cloudflare — e porque o rastejo deixou de ser custo de descoberta
(que trazia visita de volta) e virou consumo terminal (o agente lê e o leitor nunca chega).
Quebrada a troca implícita "eu te dou conteúdo, você me manda gente", o publicador precisa de
outro instrumento. Há cinco anos não havia nem o volume nem a assinatura criptográfica barata.

**Onde está na difusão.** **Adoção precoce.** O bloqueio padrão de rastejador misto em páginas com
anúncio vale desde 15/09/2026 e alcança de uma vez todos os clientes gratuitos existentes — o que
empurra depressa —, mas a cobrança por requisição ainda é beta privado e o pagamento agêntico é
demonstração. Não é maioria.

**O que ainda falta acontecer.** (a) Um segundo CDN de porte adotar Web Bot Auth, para virar
padrão e não política de um fornecedor. (b) Estabilização jurídica: o Nono Circuito diz que o
agente sob direção do usuário **é o usuário**, o que enfraquece o bloqueio por lei e empurra tudo
para arquitetura e contrato. (c) Liquidação: cobrar por requisição exige um trilho de pagamento
que funcione, e ele não funciona ainda. (d) Um tratamento para quem depende de agente por
necessidade, e não por conveniência.

**Quem bloqueia.** Os compradores de conteúdo — os próprios laboratórios de modelo. O incentivo
deles é que o agente **não** se identifique, ou que se identifique sem preço. A evidência do
incentivo é comportamental: diante de bloqueio, a resposta observada no mercado foi alterar o
navegador para escapar da detecção, não negociar. É isso que gera o efeito e12.3.

### 4.4 R4 — O rastro de execução vira prova jurídica e prêmio de seguro

**O que rompe.** Rompe o "as is" — a cláusula que, por quarenta anos, fez do software um produto
sem responsabilidade por resultado — e rompe a natureza do log, que deixa de ser artefato interno
de depuração e vira **instrumento probatório e financeiro**. O enquadramento acadêmico é
explícito: o **log de interação com estado** como *"traço probatório primário, permitindo que
tribunais infiram onde a trajetória humano-IA se afastou do encargo autorizado"*. E há precificação
real derivada do traço: o erro médio absoluto de tarifação cai de **US$ 17,7 mil para US$ 569**, o
subsídio cruzado regressivo desaparece, os controles condicionados ao traço reduzem o **CVaR95 em
72%**, e uma auditoria de **300 traços por especialista aceitou 295 rótulos sem alteração**.

**Por que agora, e não há cinco anos.** Porque só agora existe o traço: a execução agêntica produz
um registro passo a passo de decisão, ferramenta, argumento e resultado, que não existia quando o
software era uma função chamada por um humano. E porque alguém aceitou o risco em dinheiro — a
Crosby contratou apólice para os próprios agentes em 28/07/2026. Seguro exige sinistralidade; o
traço é o que permite estimá-la sem histórico.

**Onde está na difusão.** **Demonstração pública passando a produto de nicho.** Um escritório com
apólice, um arcabouço doutrinário e um método de subscrição publicado — nada disso é maioria, e a
confiança em toda a cadeia derivada é média ou baixa por isso.

**O que ainda falta acontecer.** (a) Um formato de traço que a seguradora e o tribunal aceitem
igualmente. (b) Um caso decidido sobre o traço, criando precedente. (c) Resolver se o raciocínio
intermediário do agente é descobrível em juízo ou segredo comercial. (d) Histórico de perda
suficiente para tarifar sem prêmio proibitivo. (e) Retenção: o traço precisa sobreviver ao prazo
prescricional, não ao ciclo de log.

**Quem bloqueia.** Quem opera o agente. Guardar o traço é produzir prova contra si mesmo, e custa
dinheiro. O incentivo é registrar o mínimo e descartar cedo — e o contrapeso só aparece quando a
ausência do traço passar a ser interpretada contra quem deveria tê-lo. É o mecanismo do wildcard
W1.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente vira principal de segurança, com identidade, credencial e ciclo de vida próprios
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O provedor de identidade passa a ser o lugar onde se decide o que um agente pode fazer, e o catálogo de agentes vira inventário obrigatório de TI"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Todo agente ganha um patrocinador humano nominal, e a saída dessa pessoa da empresa dispara revogação em cascata"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O número de agentes que uma pessoa pode patrocinar vira métrica de risco e limite de política, como hoje é o número de credenciais privilegiadas"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Licenciamento de software deixa de ser por assento e passa a ser por identidade ativa, humana ou não"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Produtos de mídia e de design passam a ter preço de API separado do preço de interface, e a interface vira o produto caro"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: "O custo de governar identidade de agente faz times consolidarem muitos agentes numa identidade só, reintroduzindo o problema que a identidade resolvia"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "Auditoria externa passa a exigir prova de que uma identidade de agente corresponde a um agente, e não a um pool"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A delegação multi-salto, quando um agente cria outro agente, vira o problema técnico não resolvido que trava contrato corporativo"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Contratos de software como serviço passam a ter cláusula de profundidade máxima de delegação, como hoje têm cláusula de subcontratação"
            sinal: fraco
            prazo: 2032
            confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "Ferramentas de autoria expõem quantos níveis de agente tocaram num arquivo como metadado de primeira classe"
            sinal: fraco
            prazo: 2033
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O crédito de autoria em peças de mídia passa a listar cadeia de delegação além de pessoas"
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Identidade de agente é portátil dentro de um fornecedor e não entre fornecedores, e o resultado é aprisionamento por identidade em vez de aprisionamento por dado"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Estúdios pequenos e agências ficam fora da web agêntica corporativa porque não conseguem emitir identidade que o cliente aceite"
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Aparece um cartório de identidade de agente para quem não é cliente de grande nuvem, e ele vira ponto único de falha"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O crachá que a empresa emite e o crachá que o site exige convergem para o mesmo objeto, e quem controla o crachá controla o acesso"
            sinal: medio
            prazo: 2032
            confianca: media
      - id: e4
        ordem: 1
        efeito: "A pergunta sobre quem fez algo deixa de ter resposta única e passa a ter resposta em cadeia, e o log vira o artefato que responde"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Produtos passam a mostrar ao usuário final qual agente agiu em seu nome e sob que permissão, num histórico de agentes ao lado do histórico de sessões"
            sinal: fraco
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Revogar um agente vira gesto de interface corriqueiro, como sair de todos os dispositivos é hoje"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Quem automatizou o próprio trabalho com agente pessoal perde o direito de fazê-lo, porque o agente não tem identidade emitida pela empresa"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O agente sombra sucede a TI sombra como categoria de risco, e é detectado pelo tráfego e não pela conta"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Negociação coletiva passa a tratar de ferramenta de IA pessoal no trabalho como hoje trata de dispositivo pessoal"
                sinal: fraco
                prazo: 2035
                confianca: baixa

  - disrupcao: Não há fronteira entre dado e instrução, e a contenção migra para fora do modelo
    efeitos:
      - id: e6
        ordem: 1
        efeito: "A autorização sai do agente e vai para um porteiro externo que o agente não consegue ler nem alterar"
        sinal: medio
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A frase o modelo pediu deixa de ser autorização suficiente em qualquer sistema que mova dinheiro ou dado pessoal"
            sinal: medio
            prazo: 2030
            confianca: alta
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Fluxos de compra e de publicação passam a exigir confirmação fora da conversa, num canal separado, e isso vira padrão de interface"
                sinal: fraco
                prazo: 2032
                confianca: media
          - id: e6.2
            ordem: 2
            efeito: "A latência e o custo do porteiro empurram equipes a conceder permissão larga uma vez em vez de estreita muitas vezes, e a permissão larga volta pela porta dos fundos"
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e7
        ordem: 1
        efeito: "O isolamento deixa de ser por serviço e passa a ser por tarefa, com cada execução de agente em seu próprio mundo descartável"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O ambiente de execução vira parte do desenho do produto, e quem projeta a experiência passa a decidir o que o agente alcança e não só o que ele diz"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O modo demonstração de um produto deixa de ser tela falsa e passa a ser mundo real descartável, porque isolar ficou mais barato que simular"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "O custo marginal de executar conteúdo hostil cai o bastante para que sites hospedem execução de agentes de terceiros, e a página vira sandbox"
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Publicidade e paywall passam a negociar com o agente dentro do sandbox da própria página em vez de bloqueá-lo na porta"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Proveniência do contexto vira metadado obrigatório, e cada trecho que entra no agente carrega de onde veio e quanto vale"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Conteúdo publicado passa a ser escrito para duas audiências com estatutos diferentes, o humano que lê e o agente que obedece, e a ambiguidade entre elas vira problema editorial"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Aparece o equivalente do robots.txt para instrução, um arquivo que declara o que na página é conteúdo e o que nunca deve ser lido como ordem"
                sinal: fraco
                prazo: 2032
                confianca: media
          - id: e8.2
            ordem: 2
            efeito: "Fórum, comentário e conteúdo gerado por usuário perdem valor para agentes por não terem proveniência verificável, e a web aberta encolhe naquilo que o agente lê"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "O arquivo público como Wikipédia, repositórios e bibliotecas vira a fonte preferida por ser assinável, e sua captura vira alvo estratégico"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "O incidente com agente deixa de ser notícia técnica e vira notícia política, e a primeira resposta é proibição por decreto em vez de engenharia"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Órgãos públicos brasileiros passam a exigir homologação de agente antes do uso, e o tempo de homologação vira a barreira real de adoção"
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Fornecedor pequeno desaparece das compras públicas por não conseguir pagar a homologação, e o Estado brasileiro fica dependente de poucas nuvens estrangeiras"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "O engenheiro de segurança de aplicação perde o método central do ofício, validar entrada, e o trabalho migra para desenhar o que acontece depois que a entrada engana"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Programas de recompensa por falha passam a pagar por cadeia de exploração com agente no meio em vez de por carga isolada, e o valor do achado sobe porque reproduzir custa caro"
            sinal: fraco
            prazo: 2031
            confianca: media

  - disrupcao: A porta da web passa a distinguir humano de agente e a cobrar diferente
    efeitos:
      - id: e11
        ordem: 1
        efeito: "O acesso a conteúdo deixa de ser binário entre permitir e bloquear e vira preço por requisição, com assinatura criptográfica no cabeçalho"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "O agente passa a ter orçamento, e quanto ele pode gastar lendo vira parâmetro de produto que alguém precisa projetar"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Aparece a interface de negociação de acesso, em que o usuário vê o agente decidir pagar ou desistir de uma fonte e precisa poder discordar"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: "Publicações passam a ter dois preços, leitura humana por anúncio ou assinatura e leitura de máquina por requisição, e as duas divergem editorialmente"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: "O que é barato para máquina ler vira o que é escrito, e a pauta se desloca para o que rende mais por token entregue"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e11.3
            ordem: 2
            efeito: "Sites que cobram caro demais somem daquilo que os agentes leem, e a invisibilidade custa mais que a receita, de modo que o preço converge para baixo"
            sinal: fraco
            prazo: 2032
            confianca: media
      - id: e12
        ordem: 1
        efeito: "Distinguir humano de agente vira mercado de detecção com taxonomia nominal, em que o resultado não é bot mas o nome do agente"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Quem usa tecnologia assistiva é classificado como agente e perde acesso, porque o detector mede comportamento humano médio e não direito de estar ali"
            sinal: medio
            prazo: 2029
            confianca: alta
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "A acessibilidade passa a ser defendida como direito de usar agente e não como direito de navegar, invertendo trinta anos de doutrina de diretrizes de conteúdo"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: "Nasce o mercado de parecer humano, e o navegador anti-detecção deixa de ser ferramenta de fraude para virar ferramenta de acesso legítimo"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: "Vender evasão de detecção vira serviço regulado ou criminalizado em alguma jurisdição, e a mesma ferramenta fica legal de um lado da fronteira e ilegal do outro"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e12.3
            ordem: 2
            efeito: "O agente que se identifica fica em desvantagem competitiva contra o que se disfarça, e a identificação só sobrevive onde dá vantagem concreta"
            sinal: medio
            prazo: 2031
            confianca: alta
      - id: e13
        ordem: 1
        efeito: "Prova de que existe um humano responsável por trás do agente vira credencial de acesso, separada da identidade do agente"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Comprar, publicar e falar em público passam a exigir lastro humano verificado, e o anonimato fica restrito ao que não tem consequência"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "O custo de existir publicamente na web passa a incluir uma verificação biométrica, e quem recusa fica numa web de segunda classe"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "O lastro humano vira commodity alugável, e contas verificadas são alugadas a agentes de terceiros exatamente como contas de rede social hoje"
            sinal: fraco
            prazo: 2031
            confianca: media
      - id: e14
        ordem: 1
        efeito: "A pergunta jurídica sobre o agente ser ferramenta do usuário ou intruso no site decide quem pode bloquear quem, e a resposta corrente é ferramenta"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "Sites deixam de usar a lei para barrar agentes e passam a usar arquitetura e contrato, porque a lei diz que quem acessa é o usuário"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "Termos de uso passam a ser escritos para leitura por máquina e aceitos por máquina, e a aceitação vira ato do agente com consequência para o humano"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: "O registro de quem dirigiu o agente vira a prova que decide o caso, e guardá-lo vira obrigação de quem opera o agente"
            sinal: medio
            prazo: 2031
            confianca: media

  - disrupcao: O rastro de execução vira prova jurídica e prêmio de seguro
    efeitos:
      - id: e15
        ordem: 1
        efeito: "O log de execução do agente deixa de ser artefato de depuração e passa a ser instrumento probatório e financeiro"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "Retenção de log passa de dias para anos, e o custo de guardar vira item de orçamento que compete com o custo de rodar"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "O raciocínio intermediário do agente vira objeto de disputa, descobrível em juízo de um lado e segredo comercial do outro"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: "Ferramentas de mídia passam a gravar a intenção declarada junto com o resultado, porque sem intenção declarada não há como demonstrar desvio"
            sinal: fraco
            prazo: 2032
            confianca: media
      - id: e16
        ordem: 1
        efeito: "Seguro de responsabilidade para agente muda quem decide o que o agente pode fazer, e quem decide passa a ser a apólice e não o time de produto"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: "O que é segurável define o que é oferecido, e funcionalidade sem histórico de perda não entra em produto"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: "Um acordo de transferência de responsabilidade nos moldes do cartão com chip, em que quem não tem identidade e rastro de agente arca com a perda, força a adoção mais rápido que qualquer norma técnica"
                sinal: fraco
                prazo: 2034
                confianca: media
          - id: e16.2
            ordem: 2
            efeito: "Autônomo e estúdio pequeno não conseguem apólice e ficam impedidos de entregar a cliente corporativo trabalho feito por agente"
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e16.2.1
                ordem: 3
                efeito: "A plataforma passa a vender seguro embutido na assinatura, e escolher a ferramenta vira escolher a seguradora"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e17
        ordem: 1
        efeito: "A responsabilidade continua humana mas se desloca de quem programou para quem autorizou"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: "Aprovar vira o ato de maior risco jurídico numa organização, e o desenho do botão de aprovação vira questão de responsabilidade antes de ser questão de usabilidade"
            sinal: fraco
            prazo: 2032
            confianca: media
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: "Aprovação em massa de muitas ações de uma vez vira prática vedada por apólice, como assinatura em branco"
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e17.2
            ordem: 2
            efeito: "O receio de aprovar reduz a autonomia concedida, e o agente volta a ser copiloto exatamente nas tarefas de maior valor"
            sinal: medio
            prazo: 2031
            confianca: media
      - id: e18
        ordem: 1
        efeito: "Reputação de agente não se torna portátil, porque reputação sem custo de entrada é capturada"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: "A confiança em agente volta a ser mediada por marca e por contrato, e quem responde é a empresa que emitiu e não o histórico do agente"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e18.1.1
                ordem: 3
                efeito: "Poucos emissores concentram a confiança, e trocar de emissor passa a custar a reputação inteira, num aprisionamento por reputação"
                sinal: fraco
                prazo: 2034
                confianca: baixa
```

### 5.1 Os mecanismos, um a um

O bloco acima diz *o quê*. Aqui está o *porque*, que é a única coisa que distingue uma roda de
uma lista de palpites. A forma é sempre a mesma: **porque o efeito pai faz X, então Y**.

**R1 → e1.** Porque o agente ganha identidade própria no diretório, o diretório vira o único lugar
onde a permissão existe de fato — e um objeto que existe no diretório é, por construção,
inventariável. A evidência de que isso não é especulação está na documentação da Microsoft: já
existem *blueprints*, pacotes de acesso, exclusão em cascata e convergência de registro sob o
Agent 365. **Sinal forte** porque há artefato em produção, não porque eu acredite.

**e1 → e1.1.** Porque ciclo de vida exige um responsável, e software não sabe pedir aprovação a
ninguém. A Microsoft já publicou dois *templates* de fluxo para transferir patrocínio quando o
patrocinador muda de cargo ou sai, *"para evitar agentes órfãos"* — o que revela que o problema é
tão concreto que já tem remédio de prateleira.

**e1.1 → e1.1.1.** Porque, uma vez que patrocinar é responsabilidade, acumular patrocínio é
acumular risco, e toda organização acaba medindo o que a responsabiliza. É o mesmo caminho que
o número de contas privilegiadas por administrador percorreu.

**e1 → e1.2.** Porque o assento pressupõe uma bunda na cadeira, e com 109 identidades de máquina
por humano a cadeira deixou de ser a unidade. Quem já conta identidades no diretório tem o
medidor pronto para cobrar por elas. **Classe de referência:** a migração de licença por assento
para consumo em nuvem levou cerca de oito anos (2012-2020) mesmo com forte incentivo do
fornecedor — daí o prazo 2033, e não 2029.

**e1 → e1.3 (retroação).** Porque governar custa, e o caminho mais curto para reduzir custo de
governança é reduzir o número de coisas governadas. Com 34% das organizações aplicando qualquer
controle, o comportamento dominante já é o de agrupar. Este é o freio interno de R1: a identidade
de agente pode ser derrotada não por ataque, mas por consolidação preguiçosa.

**R1 → e2.** Porque o NIST registra delegação multi-salto como problema aberto, e contrato
corporativo não assina o que não sabe delimitar. Advogado pede um número; engenharia não tem um.

**e2 → e2.2 → e2.2.1.** Porque, se a profundidade de delegação vira cláusula, ela vira campo — e
campo em ferramenta de autoria vira metadado, e metadado de autoria acaba em crédito. Este é o
ramo mais especulativo de R1 e o `sinal fraco` em toda a cadeia diz isso.

**R1 → e3.** Porque o incentivo do provedor de identidade é que o crachá seja excelente e
intransportável: identidade portátil transforma o produto em commodity. A evidência é a leitura
corrente de que o Entra Agent ID *"só funciona dentro da Microsoft"* e que o Cross App Access
entrou no MCP pela porta da Okta. **Sinal forte, confiança alta** — não porque o futuro seja
certo, mas porque o presente já é assim.

**e3 → e3.1 → e3.1.1.** Porque quem não emite crachá aceito não entra, e mercado que exclui cria
intermediário. O intermediário concentra, e concentração é ponto único de falha. **Classe de
referência:** as autoridades certificadoras da web — o mesmo desenho produziu, nos anos 2010,
exatamente essa concentração e exatamente esse modo de falha.

**e3 → e3.2 (convergência).** Ver §5.2.

**R1 → e4 → e4.1 → e4.1.1.** Porque a cadeia de delegação destrói a resposta única, e um produto
que não consegue dizer quem agiu perde a confiança do usuário antes de perder a auditoria. Assim
que o dado existe no diretório, mostrá-lo é barato. **Classe de referência:** "sessões ativas" e
"sair de todos os dispositivos" levaram cerca de seis anos (2013-2019) do primeiro produto ao
padrão de interface — daí 2031 e 2033.

**R1 → e5 → e5.1 → e5.1.1.** Porque identidade emitida pela empresa é, por definição, o oposto de
ferramenta trazida de casa. Quem automatizou o próprio trabalho por conta própria é exatamente
quem não tem crachá. O agente sombra é detectável pelo tráfego (um porteiro externo vê a chamada),
não pela conta — e é por isso que ele é achado, não declarado. **Este é o ramo de "quem perde" de
R1**, e ele é o mais fácil de esquecer num mapa escrito por quem tem crachá.

**R2 → e6.** Porque, se a decisão de autorizar mora dentro do mesmo contexto que o atacante
consegue escrever, o atacante autoriza. Tirar a decisão de lá é a única correção estrutural, e
está medida: 0% de sucesso residual em 15 modelos, 0,03 ms de latência. **Confiança alta** com
`sinal medio` porque existe prova acadêmica forte e pouco produto — a assimetria é proposital e o
verificador vai mostrá-la.

**e6 → e6.1 → e6.1.1.** Porque a taxa de recusa dos próprios modelos varia de 100% a 38% conforme
o cenário; um controle que oscila 62 pontos não é controle. Uma vez que "o modelo pediu" não
autoriza, a confirmação precisa vir por um canal que o conteúdo injetado não alcança — e canal
separado é, literalmente, uma decisão de interface.

**e6 → e6.2 (retroação).** Porque o porteiro cobra a cada chamada e a permissão larga é gratuita
uma vez só. Este é o freio de R2, e ele já tem nome no diagnóstico de 2026: *"um agente com token
restrito que pode chamar uma ferramenta com token amplo tem token amplo"*.

**R2 → e7.** Porque o isolamento ficou barato: WASM parte em menos de 1 ms com menos de 5 MB,
contra 125-150 ms e 128 MB do microVM. Quando o mundo descartável custa menos que o risco de
reaproveitar o mundo, ninguém reaproveita. **Classe de referência:** a passagem de máquina virtual
para contêiner levou cerca de cinco anos (2013-2018) do lançamento à prática dominante; daí 2029.

**e7 → e7.1 → e7.1.1.** Porque, se o ambiente é descartável e barato, ele deixa de ser
infraestrutura e vira escolha de produto: o que o agente alcança passa a ser desenhado junto com
o que ele mostra. E se um mundo real descartável custa menos que manter uma tela falsa,
a demonstração de produto muda de natureza. Este é o efeito de R2 que mais interessa a quem
projeta mídia.

**e7 → e7.2 → e7.2.1.** Porque hospedar execução hostil é uma função do custo de isolar, e o custo
caiu. **`sinal fraco` e `confiança baixa`**: não há hoje um único site relevante fazendo isso, e
a inferência é puramente econômica.

**R2 → e8 → e8.1 → e8.1.1.** Porque a recomendação de defesa que sobrou é manter *"metadado de
proveniência e restringir invocação de ferramenta com base na origem do dado"* — e proveniência só
funciona se a origem for declarada na publicação, não adivinhada na leitura. O arquivo que declara
"isto é conteúdo, não ordem" é a forma mínima disso, e o `robots.txt` é a classe de referência
direta: nasceu em 1994 como convenção de um punhado de operadores e virou universal em cerca de
cinco anos, **porque não exigia nada de ninguém além de um arquivo de texto**. Daí 2032.

**e8 → e8.2 → e8.2.1.** Porque conteúdo sem proveniência verificável é exatamente o vetor descrito
pela Unit 42 (texto visível em 37,8% dos casos, atributo HTML em 19,8%, CSS em 16,9%) — e o modo
mais barato de não ser envenenado é não ler. **Quem perde aqui é a web aberta**, e o ganhador é o
arquivo assinável, o que torna a captura do arquivo um objetivo estratégico.

**R2 → e9 → e9.1 → e9.1.1.** Porque um incidente com 195 milhões de identidades e dez órgãos de
governo não é lido como falha técnica, e a resposta política padrão é proibir. **`sinal forte,
confiança alta, prazo 2028`** — é o único efeito do mapa cujo gatilho já aconteceu. No Brasil, o
vetor concreto existe e tem número de resolução: a ANPD pôs IA entre os quatro eixos de
fiscalização do biênio (Res. CD/ANPD nº 30/2025, de 24/12/2025). **Classe de referência:** a
exigência de adequação à LGPD em compra pública levou cerca de três anos entre a lei e a cláusula
virar rotina de edital.

**R2 → e10 → e10.1.** Porque, se a entrada não pode ser validada, o ofício que existia para
validá-la precisa de outro objeto — e o objeto que sobra é o que acontece depois do engano:
permissão, isolamento, reversão. **Quem perde** é a especialidade, não a pessoa.

**R3 → e11.** Porque o mecanismo já está implantado: `HTTP 402`, quatro cabeçalhos de preço e
assinatura Ed25519 amarrada aos cabeçalhos de pagamento. **Classe de referência:** o HTTPS passou
de minoria a maioria das cargas de página em cerca de cinco anos (2014-2019) *porque foi
automatizado e gratuito*; a cobrança por rastejo tem o empurrão de um bloqueio padrão (15/09/2026)
mas não a gratuidade — daí 2029, e não 2028.

**e11 → e11.1 → e11.1.1.** Porque preço por requisição só é operável se houver teto, e teto é
`crawler-max-price`, que alguém precisa preencher. Um agente com orçamento que decide não pagar
por uma fonte está tomando uma decisão editorial em nome do usuário, e o usuário precisa poder
vê-la e revertê-la. **É aqui que este tema vira, literalmente, design de interação.**

**e11 → e11.2 → e11.2.1.** Porque dois preços produzem dois produtos, e o que rende por token
entregue não é o que prende um leitor humano. **Classe de referência:** a otimização para
mecanismo de busca levou cerca de seis anos para reescrever a pauta de veículos inteiros; a
otimização para leitura de máquina paga tende a ser mais rápida, porque a realimentação é
financeira e direta — mas 2034 na terceira ordem já embute o ceticismo.

**e11 → e11.3 (retroação).** Porque o publicador que cobra caro demais desaparece do conjunto que
o agente lê, e desaparecer custa mais que a receita marginal. É o freio de mercado de R3.

**R3 → e12.** Porque a taxonomia nominal já é o produto vendido (350+ sinais, agentes
identificados pelo nome). **Sinal forte, prazo 2028**: já está em catálogo.

**e12 → e12.1 → e12.1.1.** Porque o detector comportamental mede desvio da mediana, e tecnologia
assistiva **é** desvio da mediana. Isso não é hipótese: sistemas de CAPTCHA comportamental já
"interpretam mal leitores de tela e dispositivos de acesso por varredura como tráfego
automatizado, o que dispara um desafio mais difícil justamente para quem menos precisa dele". Com
3.117 ações de acessibilidade em 2025 (+27%) e a primeira condenação europeia em 2026, o litígio
é o mecanismo de correção — e é lento. **`confiança alta` na segunda ordem** é exceção deliberada
neste mapa, e está justificada: o erro já ocorre hoje, com a tecnologia madura; o que muda é a
escala.

**e12 → e12.2 → e12.2.1.** Porque, se parecer humano é condição de acesso, a ferramenta que faz
parecer humano deixa de ser instrumento de fraude e vira instrumento de acesso. O mesmo binário
(Multilogin, GoLogin, navegador headless furtivo) muda de estatuto moral conforme quem o usa, e
nenhuma jurisdição consegue escrever essa distinção em lei sem capturar o caso legítimo junto.

**e12 → e12.3.** Porque o agente honesto paga (preço, latência, bloqueio) e o disfarçado não. A
evidência do incentivo é comportamental e recente: diante de bloqueio, a resposta observada no
mercado foi **alterar o navegador para escapar da detecção**. `confiança alta` porque é teoria dos
jogos elementar sobre um incentivo já demonstrado.

**R3 → e13 → e13.1 → e13.1.1.** Porque a identidade do agente responde "o que é isto" e não "quem
responde por isto", e a segunda pergunta é a que o comerciante precisa. O AgentKit é a forma
mínima: o site pergunta se o agente está ligado a um humano real e recebe sim ou não. A extensão
para publicar e falar é inferência — daí `confiança media` em 2033 e o salto para **2038 na
terceira ordem, que está fora da janela deste mapa** e é declarado como tal.

**e13 → e13.2 (retroação).** Porque qualquer credencial escassa e verificável cria mercado de
aluguel. Conta verificada de rede social já é alugada hoje; não há razão para que lastro humano
seja diferente, e há uma razão a mais: ele vale dinheiro por transação.

**R3 → e14 → e14.1 → e14.1.1.** Porque, se o agente age sob direção do usuário e quem acessa é o
usuário, a lei de acesso não autorizado deixa de ser a alavanca — e sobra arquitetura e contrato.
Contrato que precisa ser aceito por máquina precisa ser legível por máquina. **`sinal forte,
confiança media`**: o acórdão é de 04/08/2026 e é real, mas o Nono Circuito decidiu sobre liminar,
a ação de fundo continua, e cabe pedido de revisão.

**e14 → e14.2 (convergência).** Ver §5.2.

**R4 → e15 → e15.1 → e15.1.1.** Porque, se o traço é a prova, ele precisa sobreviver ao prazo
prescricional e não ao ciclo de rotação de log — e isso muda o custo de ordem de grandeza. O que
o agente "pensou" é a parte mais valiosa e a mais perigosa do traço: quem processa quer, quem
opera não quer entregar.

**e15 → e15.2.** Porque desvio só se demonstra contra um encargo declarado — é exatamente o
mecanismo do arcabouço de responsabilidade por interação, que procura "onde a trajetória humano-IA
se afastou do encargo autorizado". Sem intenção registrada, não há de que se afastar.

**R4 → e16 → e16.1 → e16.1.1.** Porque a seguradora escreve exclusões, e exclusão é especificação
de produto por outro nome. **Classe de referência explícita:** a transferência de responsabilidade
do cartão com chip nos EUA (outubro de 2015) levou a maioria dos comerciantes a adotar em cerca de
dois anos — sem lei, só realocando a perda. É a classe mais rápida que conheço, e é por isso que
e16.1.1 tem `confiança media` apesar de `sinal fraco`: o mecanismo é comprovadamente potente. A
ressalva, que rebaixou a confiança em §6, é que o chip tinha um consórcio capaz de decretar a data
e a responsabilidade agêntica não tem.

**e16 → e16.2 → e16.2.1.** Porque prêmio é função de histórico, e quem é pequeno não tem histórico.
Plataforma que empacota seguro resolve o problema do pequeno e, de quebra, o prende.

**R4 → e17 → e17.1 → e17.1.1.** Porque o arcabouço de responsabilidade distingue uso como
ferramenta, planejamento colaborativo e **desvio autônomo** — e o que separa os três é o que foi
autorizado, por quem. Se autorizar é onde a responsabilidade encosta, aprovar em lote é assinar em
branco, e apólice não cobre assinatura em branco.

**e17 → e17.2 (retroação).** Porque o receio de aprovar é maior exatamente onde a consequência é
maior, isto é, nas tarefas de maior valor. Este é o freio de R4 e ele é contraintuitivo: a
maturidade jurídica **reduz** a autonomia no topo da cadeia de valor, não aumenta.

**R4 → e18 → e18.1 → e18.1.1.** Porque reputação sem custo de entrada é capturada, e a medição
existe: 3% a 15% de registros com endpoint válido; 59% a 91% de avaliadores com comportamento
Sybil; e, removida a fraude, a maioria dos agentes fica sem avaliação alguma. Se a reputação não
é portátil, a confiança volta para onde estava: marca e contrato. **Este efeito entrou invertido
em relação ao rascunho** — ver o registro de alterações em §7.8.

### 5.2 Convergências, retroalimentações e contradições

**Convergência 1 — o crachá único (e3.2 ∩ e11 ∩ e13).** Três raízes diferentes chegam ao mesmo
objeto por caminhos que não se conhecem. R1 produz um crachá porque a empresa precisa governar o
agente; R3 produz um crachá porque o site precisa cobrar do agente; e o lastro de humanidade de
R3 produz um terceiro, porque o comerciante precisa de alguém a quem responsabilizar. Não há
razão técnica para que sejam três objetos, e há forte pressão econômica para que sejam um.
**Quem emitir esse crachá único ocupa a posição que as autoridades certificadoras ocuparam na web
dos anos 2010** — e este é, na minha leitura, o achado mais consequente deste mapa.

**Convergência 2 — o log é a mesma coisa em três lugares (e4 ∩ e14.2 ∩ e15).** O log que a
auditoria quer para responder "quem fez isso", o log que o tribunal quer para saber quem dirigiu
o agente, e o log que a seguradora quer para tarifar são **o mesmo arquivo com três compradores**.
Isso tem consequência prática imediata para quem projeta: o registro deixa de ser decisão de
engenharia e vira decisão de produto com três partes interessadas de fora.

**Retroalimentação 1 (reforça R1 e R4).** e16.1.1 → R1. Se a perda recai sobre quem não tem
identidade e rastro de agente, então adotar identidade de agente deixa de ser questão de
segurança e vira questão de custo — e a adoção acelera por razão financeira, não técnica. É o
único laço do mapa capaz de levar R1 de adoção precoce a maioria dentro do horizonte.

**Retroalimentação 2 (enfraquece R3).** e12.3 → R3. Se o agente honesto perde para o disfarçado,
a identificação voluntária morre, e sobra detecção adversarial — que é justamente o que produz
e12.1, a exclusão de quem usa tecnologia assistiva. **O mapa contém um laço que converte o fracasso
da identidade no dano à acessibilidade.** Vale a pena dizer isso em voz alta: os dois problemas não
são independentes.

**Retroalimentação 3 (enfraquece R2).** e6.2 → R2. O porteiro externo funciona e é barato em
latência (0,03 ms), mas caro em disciplina. A pressão operacional reintroduz a permissão larga, e
a contenção externa é vencida sem nunca ser atacada.

**Contradição 1 — e13.1 contra e12.1.** Exigir lastro humano verificado para agir na web é o
remédio de R3 para o anonimato do agente; e é também a forma mais eficiente de excluir quem não
pode ou não quer se verificar, incluindo quem depende de agente por deficiência. As duas não
coexistem sem uma terceira coisa que ainda não existe: um lastro que prove responsabilidade **sem**
provar comportamento humano. Não resolvo: registro as duas. **O que decide entre elas é se algum
tribunal enquadrar a exigência de identidade de agente como barreira de acessibilidade** — é o
wildcard W4.

**Contradição 2 — e7.2 contra e8.2.** Um ramo diz que a página vira sandbox e passa a **hospedar**
agentes de terceiros; o outro diz que a web aberta encolhe porque conteúdo sem proveniência não é
lido. As duas derivam da mesma raiz (R2) e apontam para direções opostas: abrir a página à execução
e fechar a página à leitura. O que decide é se proveniência é mais barata de produzir do que
isolamento é de oferecer. Hoje, isolamento está mais barato — o que favorece e7.2 e é a razão de
e8.2 não ter sido promovido a `confiança alta`.

**Cobertura STEEP e quem perde.** Social: e5, e12.1, e13.1. Tecnológico: e1, e6, e7, e8, e11.
Econômico: e1.2, e11.2, e16, e18. Político/regulatório: e9, e14, e12.2.1, e9.1. **Ecológico: vazio**
— o custo energético do isolamento por tarefa e da retenção plurianual de log é real, mas não
encontrei número aberto que sustentasse um efeito, e prefiro registrar a lacuna a inventá-lo.
**Quem perde** tem ramo próprio em cada raiz: e5 (trabalhador com agente pessoal), e10 (engenheiro
de segurança de aplicação), e3.1 e e16.2 (estúdio pequeno), e12.1 (pessoa com deficiência), e8.2
(web aberta), e9.1.1 (fornecedor nacional em compra pública).

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

Cada um traz: **onde foi visto** (fonte aberta nesta rodada), **o que mudaria** e **o sinal
observável** que diria que está crescendo — uma métrica, um evento ou uma decisão, não uma
impressão.

**SF1 — Reputação de agente registrada em cadeia pública (ERC-8004).**
*Onde:* estudo empírico em Ethereum, BSC e Base até maio de 2026, com três registros
(Identidade, Reputação, Validação).
*O que mudaria:* se funcionasse, R1 perderia força — a confiança deixaria de depender de quem
emite o crachá e passaria a depender do histórico do próprio agente, dissolvendo o aprisionamento
de e3 e e18.1.1.
*Sinal observável:* **a fração de registros com arquivo válido e endpoint ativo passar de 50% em
qualquer uma das três redes** (hoje: 3%, 4% e 15%), **e** a fração de avaliadores marcados como
Sybil cair abaixo de 20% (hoje: 59% a 91%). Os dois juntos; um sem o outro é ruído.

**SF2 — Identidade de agente atravessando fornecedor.**
*Onde:* o Cross App Access virou, em 24/08/2026, a extensão oficial de autorização gerenciada por
empresa do MCP — mas por iniciativa de um fornecedor.
*O que mudaria:* derrubaria e3, e3.1, e3.1.1 e a convergência do crachá único ficaria sem dono —
o que é um futuro melhor e menos provável.
*Sinal observável:* **uma segunda implementação de Cross App Access, de fornecedor sem relação
comercial com o primeiro, passando em teste de interoperabilidade público.** Anúncio de parceria
não conta; implementação independente conta.

**SF3 — Porteiro externo de autorização virando serviço gerenciado.**
*Onde:* aiAuthZ, julho de 2026 — 0% de sucesso residual em 15 modelos, 0,03 ms de latência, sete
de sete chamadas dirigidas pelo atacante bloqueadas no AgentDojo bancário, nove de nove estudos de
caso de um corpus de incidentes.
*O que mudaria:* aceleraria e6 em três a quatro anos e enfraqueceria e6.2, porque serviço
gerenciado remove o custo de disciplina que é justamente o que faz a equipe conceder permissão
larga.
*Sinal observável:* **uma das três grandes nuvens listar "gateway de autorização de agente" como
produto pago com acordo de nível de serviço** — não como biblioteca de referência.

**SF4 — Declaração de conteúdo contra instrução no próprio arquivo publicado.**
*Onde:* a recomendação da Cloud Security Alliance de elevar a separação entre conteúdo processado
e instrução obedecida a "preocupação primária de projeto", com metadado de proveniência.
*O que mudaria:* tornaria e8.1.1 rápido em vez de especulativo, e daria ao publicador uma defesa
que hoje ele não tem.
*Sinal observável:* **um rascunho de especificação em corpo de padronização aberto (IETF ou W3C)
com dois implementadores**, ou a adoção do mesmo arquivo por dois dos cinco maiores sistemas de
gestão de conteúdo.

**SF5 — Prova de humano vinculada a agente como requisito de compra.**
*Onde:* AgentKit, 17/03/2026, com Coinbase e Cloudflare sobre x402.
*O que mudaria:* e13.1 sairia de 2033 para perto de 2030 e a contradição 1 (§5.2) viraria conflito
aberto, com litígio de acessibilidade em cima.
*Sinal observável:* **um dos dez maiores varejistas do mundo exigir lastro de humanidade para
concluir compra por agente**, e não apenas aceitá-lo como sinal opcional de confiança.

**SF6 — Isolamento por tarefa em WebAssembly substituindo microVM em produto de agente.**
*Onde:* comparação de 26/05/2026 — WASM parte em menos de 1 ms com menos de 5 MB e capacidade
negada por padrão, contra 125-150 ms e 128 MB+ do microVM.
*O que mudaria:* e7.2 (a página como sandbox) sairia de `confiança baixa`, e o custo de oferecer
mundo descartável a terceiros deixaria de ser proibitivo.
*Sinal observável:* **um provedor conhecido de execução de agente anunciar migração do caminho
padrão de microVM para WebAssembly**, com número de partida publicado.

**SF7 — Governança de comunidade de agentes como camada de protocolo.**
*Onde:* a análise que conclui que MCP, A2A e ACP não expressam votação nem preservação de
dissenso — e que isso é camada arquitetural faltante, não funcionalidade faltante.
*O que mudaria:* abriria um ramo inteiro que este mapa não tem, sobre decisão coletiva entre
agentes de donos diferentes.
*Sinal observável:* **uma extensão de A2A ou MCP que defina escalonamento humano obrigatório e
registro de dissenso, com implementação de referência.**

**SF8 — Formação pública e gratuita em ataque a agente, com aferição.**
*Onde:* PromptTrace — 10 laboratórios e 17 níveis de CTF, alinhados às duas listas do OWASP,
com visão em tempo real das camadas de prompt.
*O que mudaria:* a oferta de gente capaz de testar agente cresce antes da oferta de gente capaz
de construí-lo com segurança, o que muda a velocidade de e10.1.
*Sinal observável:* **uma universidade brasileira adotar um CTF de injeção como avaliação de
disciplina regular** — o que, registre-se, esta disciplina está em posição de fazer.

### 6.2 Wildcards

**W1 — A ausência do log é o que condena.**
*Mecanismo:* um tribunal decide um caso de dano causado por agente e, não havendo traço de
execução, aplica inversão do ônus da prova contra quem operava o agente — exatamente o desenho que
a União Europeia adotou para software como produto. A partir daí o traço deixa de ser opção: não
tê-lo é pior que tê-lo.
*Por que é improvável:* exige que o tribunal aceite como confiável um registro produzido pelo
próprio réu, e a doutrina de prova digital leva anos a firmar isso.
*O que faria com o mapa:* R4 salta cerca de cinco anos. e15.1 (retenção plurianual) vira 2029, e
e16.1.1 (transferência de responsabilidade) deixa de ser sinal fraco.
*Sinal precoce:* **a primeira decisão judicial, em qualquer jurisdição, que cite ausência de log
de agente como fator na distribuição do ônus da prova.**

**W2 — Um verme de injeção entre agentes.**
*Mecanismo:* conteúdo que, ao ser lido por um agente com permissão de escrita, faz esse agente
publicar o mesmo conteúdo em outro lugar onde outro agente vai lê-lo. Todas as peças existem
separadas e estão catalogadas: ASI06 (envenenamento de memória e contexto), ASI07 (comunicação
insegura entre agentes), ASI10 (agentes desonestos), e a entrega já medida em texto visível
(37,8%), atributo HTML (19,8%) e supressão por CSS (16,9%).
*Por que é improvável:* exige coincidência de permissão de leitura e de escrita na mesma população
de agentes, e as populações hoje são heterogêneas o bastante para quebrar a cadeia.
*O que faria com o mapa:* R2 e R3 aceleram juntas e violentamente. A web fecha por medo, não por
economia: e8.2 vira 2029 e `confiança alta`, e e11.3 (o freio de preço) deixa de operar porque o
bloqueio deixa de ser questão de dinheiro.
*Sinal precoce:* **o primeiro incidente documentado de propagação agente-a-agente sem intervenção
humana entre dois sistemas de donos diferentes.** Prova de conceito em laboratório não conta;
propagação em produção conta.

**W3 — Um regulador marca data para identidade de agente.**
*Mecanismo:* uma autoridade com poder de fixar prazo (o modelo do banner de consentimento) exige
que todo agente que trate dado pessoal tenha identidade própria e rastro, a partir de uma data.
No Brasil o vetor existe e está nomeado: IA e tecnologias emergentes é um dos quatro eixos do
Mapa de Temas Prioritários 2026-2027 da ANPD, aprovado pela Resolução CD/ANPD nº 30/2025.
*Por que é improvável:* reguladores de dados fiscalizam tratamento, não arquitetura, e exigir
identidade de agente é exigir arquitetura.
*O que faria com o mapa:* o prazo de R1 cai de cerca de dez anos para três. **Classe de
referência:** entre o regulamento europeu de proteção de dados ficar exigível (2018) e o banner de
consentimento ser universal passaram cerca de três anos — quando há data, a adoção não espera a
técnica.
*Sinal precoce:* **qualquer consulta pública, em qualquer jurisdição, cujo objeto seja
identificação obrigatória de agente autônomo** — não uso de IA em geral, mas identificação do
agente.

**W4 — Um tribunal decide que exigir identidade de agente é barreira de acessibilidade.**
*Mecanismo:* alguém que depende de agente por deficiência é barrado por um detector, processa, e
o tribunal enquadra a exigência de identificação como discriminação — apoiado em que o detector
comportamental já confunde leitor de tela e acesso por varredura com tráfego automatizado, em
3.117 ações de acessibilidade nos EUA em 2025 (+27% sobre 2024) e na primeira condenação europeia
de 2026.
*Por que é improvável:* exige que o autor prove dependência do agente, e não mera conveniência —
prova difícil de produzir hoje.
*O que faria com o mapa:* mata e13.1 e reabre e12.1 pelo avesso. **É o único wildcard deste mapa
que melhora a vida de quem perde**, e por isso mesmo eu desconfio de ter gostado dele — ver §7.6.
*Sinal precoce:* **a primeira ação judicial que peça, como remédio, o direito de acessar um
serviço por agente** — e não o direito de acessá-lo diretamente.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria aplicada ao mapa já escrito, e as alterações que ela produziu
estão registradas em §7.8, com valor antes e valor depois.

### 7.1 Pré-mortem: é 2036 e este mapa deu errado. Por quê?

**Razão 1 — porque tudo isto foi absorvido por três empresas e virou ajuste de configuração.**
A hipótese mais provável de erro não é que os efeitos não aconteçam: é que aconteçam **por baixo**,
resolvidos no painel de administração da nuvem, sem nunca virarem decisão de quem projeta. Se em
2036 identidade, isolamento, rastro e preço vierem todos de fábrica em três plataformas, o mapa
inteiro descreve corretamente a mecânica e erra completamente sobre quem decide. *Aponta para:*
e1, e3, e7 — todos com `confiança alta` na primeira ordem. *Ação tomada:* nenhum rebaixamento de
confiança (a mecânica continua certa), mas o cenário provável de §9 foi reescrito para incorporar
esta hipótese como desfecho principal, em vez de tratá-la como variante.

**Razão 2 — porque a injeção de prompt foi resolvida por mudança de arquitetura de modelo.**
Se aparecer um modelo com canais de privilégio de fato separados — instrução de sistema num canal
que o conteúdo recuperado não alcança —, R2 deixa de ser "contenção externa" e vira "correção
interna", e metade dos efeitos de R2 perde o mecanismo. Não é impossível: a afirmação de que não
tem conserto é sobre a arquitetura **atual**, e está datada de junho de 2026. *Aponta para:* e6,
e8, e10. *Ação tomada:* e6 manteve `confiança alta` (o porteiro externo é bom desenho mesmo num
mundo com fronteira interna), mas o pressuposto foi promovido a premissa declarada em §2.1 e a
§7.5.

**Razão 3 — porque o dinheiro não apareceu.** Metade de R3 e quase toda R4 dependem de trilhos
que hoje não liquidam: o pagamento por rastejo está em beta privado e o pagamento agêntico é
demonstração. Se em 2031 ainda não houver liquidação em escala, e11 vira um recurso de nicho de um
CDN, e11.2 nunca acontece, e R4 fica sem a realimentação econômica que a faria andar. *Aponta
para:* e11.2, e11.2.1, e16.1. *Ação tomada:* e11.2.1 teve o prazo empurrado (§7.8).

### 7.2 Extrapolação linear — o que é só "mais do mesmo, maior"

Três efeitos foram marcados e tratados:

- **e1.2 (licença por identidade ativa)** era extrapolação de uma tendência de precificação que já
  existe. Ganhou uma classe de referência explícita (assento → consumo, cerca de oito anos) e o
  prazo foi empurrado — §7.8.
- **e15.1 (retenção de log de dias para anos)** é "mais log, por mais tempo". O que o salva de ser
  extrapolação é a não-linearidade **do motivo**: não é volume que cresce, é a finalidade que muda
  de depuração para prova, o que troca o prazo de retenção pelo prazo prescricional — uma
  descontinuidade, não uma curva.
- **e11.3 (o preço converge para baixo)** é raciocínio de equilíbrio de mercado sem atrito, isto é,
  extrapolação disfarçada de economia. Mantido em `sinal fraco` e `confiança media` precisamente
  por isso, e explicitado aqui para que ninguém o leia como previsão.

### 7.3 Velocidade de adoção — prazos confrontados com a classe de referência

| Efeito | Prazo | Classe de referência usada | Veredito |
|---|---|---|---|
| e7 (isolamento por tarefa) | 2029 | VM → contêiner, ~5 anos (2013-2018) | compatível |
| e11 (preço por requisição) | 2029 | HTTPS a maioria, ~5 anos (2014-2019), **com gratuidade e automação** | apertado; mantido por causa do bloqueio padrão de 15/09/2026, que é um empurrão que o HTTPS não teve |
| e1.2 (licença por identidade) | 2031→2033 | assento → consumo, ~8 anos | **empurrado** |
| e13.1 (lastro humano para publicar) | 2033 | identificação obrigatória em plataforma, lenta e contestada | mantido, mas confiança rebaixada (§7.8) |
| e16.1.1 (transferência de responsabilidade) | 2034 | cartão com chip nos EUA, ~2 anos após a data | mecanismo potente, **mas sem consórcio que decrete a data** — confiança rebaixada (§7.8) |
| e8.1.1 (arquivo de instrução) | 2032 | `robots.txt`, ~5 anos, porque não exigia nada de ninguém | compatível |
| e3.1.1 (cartório de identidade) | 2034 | autoridades certificadoras da web, ~10 anos até a concentração | compatível |
| e11.2.1 (pauta por token) | 2032→2034 | otimização para busca, ~6 anos para reescrever pauta | **empurrado** |

### 7.4 E se a raiz simplesmente não acontecer?

- **Sem R1** (a identidade de agente não emplaca e todo mundo continua com conta de serviço
  compartilhada): caem e1 a e5 e toda a sua descendência — 5 efeitos de 1ª, 9 de 2ª, 6 de 3ª. R3
  sobrevive inteira, porque o site não precisa da identidade corporativa do agente para cobrar
  dele; R4 sobrevive porque o rastro não depende de identidade, só de registro. **Sobra mapa.**
- **Sem R2** (a fronteira dado/instrução é consertada dentro do modelo): caem e6, e8 e e10 e seus
  filhos. Mas **e7 sobrevive** — isolamento por tarefa é justificado por custo, não só por ameaça —
  e **e9 sobrevive**, porque o incidente político já aconteceu. **Sobra mapa.**
- **Sem R3** (a web não distingue nem cobra): caem e11 a e14. É a perda mais grave para o público
  deste mapa, porque é o ramo que mais toca quem projeta mídia. R1 e R4 sobrevivem intactas.
  **Sobra mapa, mas o mapa fica corporativo.**
- **Sem R4** (o rastro não vira prova nem prêmio): caem e15 a e18. R1 e R3 sobrevivem, e o mapa
  perde justamente o laço que poderia acelerar R1 (e16.1.1). **Sobra mapa.**

Nenhuma raiz sustenta as outras, e a remoção de qualquer uma deixa o mapa de pé. **Não são quatro
nomes para a mesma coisa.** O único acoplamento forte é R1↔R4 pelo laço de responsabilidade, e ele
está declarado como retroalimentação, não escondido como dependência.

### 7.5 Suposições escondidas, agora ditas

1. **Que a arquitetura de modelo não muda.** Toda R2 assume que a ausência de fronteira de
   privilégio persiste. Se mudar, vira o wildcard invertido de §7.1, razão 2.
2. **Que a computação continua barata.** e7, e7.2 e e15.1 assumem isolamento e retenção baratos.
   Um choque de custo de energia ou de capacidade inverte e7.2 e transforma e15.1 em barreira.
3. **Que os protocolos abertos continuam abertos.** MCP, A2A e o Agent Auth Protocol são hoje
   abertos. O Agent Auth Protocol tem 187 estrelas: é um projeto, não uma instituição. Se for
   comprado ou abandonado, e3 piora e SF2 morre.
4. **Que a plataforma continua permitindo.** Todo o ramo e5 (agente pessoal no trabalho) assume que
   a ferramenta pessoal continua existindo e alcançável. Um modelo de licenciamento que proíba uso
   pessoal em contexto corporativo mata e5 sem nenhum efeito de segurança.
5. **Que existe jurisdição capaz de decidir.** e14, e17 e W1 assumem um sistema judicial que alcança
   os atores. Boa parte dos operadores de agente é estrangeira em relação a quem sofre o dano.
6. **Que a medição citada é honesta.** Quatro números centrais deste mapa vêm de partes
   interessadas — o fornecedor de segurança que mede identidades de máquina, a empresa de segurança
   que relata o incidente mexicano, o fornecedor de detecção que conta seus sinais. Ver §8.

### 7.6 Viés do autor

Três, nomeados:

- **Gosto de ruptura institucional mais do que de engenharia.** Isso enviesa o mapa para R3 e R4
  (direito, seguro, preço) em detrimento de R2 (a parte técnica), que ficou com menos efeitos de
  segunda ordem e menos densidade de mecanismo. Um mapa escrito por alguém de segurança teria
  mais ramos em e6 e e7 e menos em e14 e e16.
- **W4 está aqui porque eu queria que existisse.** O wildcard em que um tribunal protege quem
  depende de agente é o único do conjunto que tem desfecho moralmente confortável, e eu o escrevi
  com mais entusiasmo que os outros três. Mantive-o porque o mecanismo se sustenta, mas registro
  que a plausibilidade que atribuo a ele é suspeita.
- **e12.1 recebeu `confiança alta` na segunda ordem, o que é fora do padrão deste mapa.** A
  justificativa está escrita (o erro já ocorre hoje, com tecnologia madura), mas é justo dizer que
  o tema da exclusão por detecção é o que mais me interessa neste conjunto, e que interesse e
  confiança são fáceis de confundir.

### 7.7 Calibração

| Ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1ª | 7 | 11 | 0 | 18 |
| 2ª | 3 | 28 | 3 | 34 |
| 3ª | 0 | 3 | 21 | 24 |

A distribuição cai com a ordem: 39% de alta na primeira, 9% na segunda, **zero na terceira**.
Nenhum efeito de terceira ordem deste mapa tem confiança alta, e isso é deliberado — a terceira
ordem é o lugar onde a honestidade custa menos e vale mais.

### 7.8 Registro de alterações — o que a bateria derrubou

Cota cumprida: **pelo menos um rebaixamento ou remoção por raiz.** A bateria **derrubou coisa**.

**Raiz R1**
- `e1.2`: prazo **2031 → 2033**, porque a classe de referência (assento → consumo em software
  corporativo) levou cerca de oito anos mesmo com o fornecedor empurrando, e aqui o fornecedor
  ganha com a contagem mas perde com a confusão.
- `e1.4` (**removido**): "surge a profissão de gestor de frota de agentes". É exatamente o efeito
  genérico que a régua deste método proíbe — serve para qualquer tema, não nomeia ator nem
  mecanismo. Vai para §12.2.
- `e2.1`: confiança **media → baixa**, porque cláusula contratual sobre profundidade de delegação
  pressupõe que alguém saiba medir profundidade de delegação, e o próprio NIST registra que
  ninguém sabe.

**Raiz R2**
- `e7.2`: prazo **2030 → 2032** e confiança **media → baixa**, porque não há hoje um único site de
  porte hospedando execução de agente de terceiro, e a inferência é puramente econômica.
- `e7.1.1`: confiança **media → baixa**, pelo mesmo motivo, um nível abaixo.
- `e-corte-1` (**removido**): "agentes passam a assinar criptograficamente cada ação individual".
  Não passa no teste da causa solta: isso decorreria igualmente de R1, de R3 ou de uma exigência de
  auditoria sem nenhuma das três. Reconectado conceitualmente a e11 e descartado como efeito
  próprio. Vai para §12.2.
- `e-corte-2` (**removido**): "reguladores criam uma categoria jurídica nova para agentes". Efeito
  proibido sem nome de regulador e mecanismo. Substituído por e9.1, que nomeia a ANPD, o eixo e o
  número da resolução.

**Raiz R3**
- `e13.1`: confiança **alta → media**, porque o gatilho que eu tinha em mente (compra) é muito mais
  estreito que a afirmação do efeito (comprar, publicar **e falar em público**), e não há evidência
  aberta de exigência de lastro humano para publicar ou falar — só para transacionar.
- `e13.1.1`: prazo **2036 → 2038**, para fora da janela deste mapa, declarado como tal: verificação
  biométrica como custo de existir publicamente exige uma infraestrutura de verificação universal
  que não tem caminho visível até 2036.
- `e11.2.1`: prazo **2032 → 2034**, pela classe de referência da otimização para busca (~6 anos
  para reescrever pauta de veículo inteiro).
- `e-corte-3` (**removido**): "escolas de design reorganizam o currículo em torno de modelagem de
  capacidade". Genérico e proibido; substituído por e7.1.1, que fala de um objeto concreto (o modo
  demonstração).

**Raiz R4**
- `e16.1.1`: confiança **alta → media**, porque a classe de referência do cartão com chip tinha um
  consórcio de bandeiras capaz de decretar a data e a responsabilidade agêntica não tem ninguém
  nessa posição. O mecanismo é potente; falta o decretador.
- `e18` (**invertido**): o rascunho trazia "reputação de agente vira portátil entre plataformas",
  com `confiança media`. A leitura do estudo empírico do ERC-8004 inverteu o efeito para
  "**não** se torna portátil" — 3% a 15% de registros com endpoint válido, 59% a 91% de avaliadores
  com comportamento Sybil, e a maioria dos agentes sem avaliação alguma depois de removida a
  fraude. É a única alteração deste mapa que mudou o **sentido** de um efeito, e não seu grau.
- `e17.2`: incluído **na bateria**, não no rascunho. Faltava a retroação de R4, e uma roda só com
  aceleração é propaganda.

## 8. O que a máquina errou

Eu sou a máquina. O que segue é sobre esta rodada, não sobre IA em geral.

1. **Juntei duas datas da Cloudflare numa só e teria publicado a errada.** O primeiro rascunho
   dizia que o *pay per crawl* foi anunciado em 2026. Não foi: o blog que abri traz `datePublished`
   de **1º de julho de 2025**. O que é de 2026 é a política de rastejador de uso misto, com
   bloqueio padrão a partir de **15/09/2026**. São dois fatos de anos diferentes que a cobertura de
   imprensa apresenta juntos, e eu os fundi. Corrigido no §3.1.
2. **A lista ASI01-ASI10 não veio do OWASP.** Abri as duas páginas oficiais do OWASP e **nenhuma
   delas contém a lista** — são páginas de download. Os nomes dos dez riscos que uso no §3.1 vêm da
   documentação do **Promptfoo**, um fornecedor de teste adversarial. É provavelmente fiel, e
   **não** é fonte primária. Não abri o PDF do OWASP nesta rodada.
3. **O número do incidente mexicano não é um número, são três, e a fonte é parte interessada.**
   Vi "195 milhões de registros de contribuintes", "195 milhões de identidades expostas" e
   "220 milhões de registros civis" em coberturas diferentes — alegações distintas que circulam
   como se fossem a mesma. Usei a formulação da fonte que abri ("cerca de 195 milhões de
   identidades"), mas o relato original é da **Gambit Security**, empresa que saiu do modo furtivo
   em março de 2026 com US$ 61 milhões captados. O incidente é real e foi confirmado por várias
   redações; **a magnitude vem de quem lucra com a magnitude.**
4. **O "34% das organizações aplicam controles a agentes" veio de um blog, não do levantamento.**
   Abri a análise que cita o número; não localizei nem abri a pesquisa de origem. Uso o número
   porque ele é coerente com o resto do quadro, e o declaro de segunda mão. Um número de segunda
   mão usado três vezes num documento começa a parecer um fato.
5. **Escrevi um efeito de primeira ordem proibido pela própria régua que estou aplicando.** O
   rascunho tinha "surge a profissão de gestor de frota de agentes" — sem ator, sem mecanismo,
   serve para qualquer tema. Só percebi ao rodar o teste de especificidade do §3 (trocar a raiz e
   ver se a frase ainda "serve"). Ela servia para todas as quatro. Removido em §7.8.
6. **Três fontes que eu queria não abriram, e eu quase citei duas de memória.** A análise jurídica
   do escritório Ropes & Gray sobre Amazon v. Perplexity, a matéria do GeekWire sobre a liminar e a
   cobertura da CNBC devolveram **403**. Eu tinha, do resumo de busca, o nome da juíza (Maxine
   Chesney) e a data da liminar (10/03/2026) — e **não** os uso no corpo do mapa, porque não abri a
   fonte. O que uso sobre o caso vem da matéria do Engadget, que abri: Nono Circuito, 04/08/2026,
   e a citação sobre o CFAA. Estão nomeadas em §12.4.
7. **Dois números atraentes ficaram de fora por não terem fonte aberta.** O mercado de comércio
   agêntico "de US$ 3 a 5 trilhões até 2030" e os "17.912.203 humanos verificados" da World
   apareceram em resumos de busca; a matéria do TechCrunch que abri **não traz número de humanos
   verificados**. Ambos seriam ótimos no §1. Nenhum dos dois está no documento.
8. **Confiança alta na segunda ordem em dois efeitos (e6.1, e12.1, e12.3) foge do padrão que eu
   mesmo estabeleci.** Cada um tem justificativa escrita, mas três exceções numa mesma regra é o
   começo de uma regra diferente. Registro para que a correção pergunte.

## 9. Três cenários para 2036

### Provável — "vem de fábrica"

Em 2036 o agente tem crachá, e o crachá vem da nuvem. Identidade, isolamento por tarefa, rastro e
orçamento de acesso são caixas marcadas no painel de administração de três plataformas, e quase
ninguém que projeta produto precisa pensar nelas — do mesmo jeito que quase ninguém pensa em
certificado TLS desde que ele ficou automático e gratuito. A web tem duas portas: a humana, com
anúncio e assinatura, e a de máquina, com assinatura criptográfica e preço por requisição. Quem
tem nuvem entra nas duas. Estúdio pequeno, fornecedor local e órgão público sem contrato de grande
nuvem entram só na primeira, e cada vez menos gente está do outro lado dela. A reputação de agente
nunca ficou portátil: confia-se na marca de quem emitiu. A responsabilidade continua humana e mora
em quem aprovou, o que fez do botão de aprovação o artefato mais litigado da década — e fez as
organizações aprovarem menos, e mais devagar, exatamente onde havia mais valor. A injeção de prompt
não foi resolvida; foi contida por fora, e o custo dessa contenção é o motivo pelo qual boa parte
dos agentes de 2036 é menos autônoma do que os de 2029 prometiam. **O sinal precoce de que estamos
neste cenário:** a identidade de agente aparecer como *checkbox* incluída no plano corporativo de
uma grande nuvem, sem preço destacado, antes de 2030.

### Desejável — "o crachá é do agente, não do dono do agente"

Em 2036 existe um formato de identidade de agente que atravessa fornecedor, com dois ou mais
emissores independentes e teste público de interoperabilidade — e existe porque um corpo de
padronização aberto o levou adiante entre 2027 e 2030, com o NIST empurrando e sem nenhum
fornecedor conseguindo capturá-lo. O agente carrega um crachá que declara quem responde por ele e
o que ele pode tocar, e esse crachá **não** exige provar que o usuário se comporta como a mediana:
prova responsabilidade, não humanidade. A distinção parece pequena e é tudo — é o que impede que
quem usa leitor de tela seja barrado junto com o rastejador. A proveniência de contexto virou um
arquivo simples que qualquer publicador escreve, no espírito do `robots.txt`, e por isso foi
adotada de fato. O rastro de execução é padronizado e serve igual à auditoria, ao tribunal e à
seguradora, o que baixou o prêmio o bastante para que autônomo e estúdio pequeno consigam apólice.
**Para chegar aqui** foi preciso uma coisa que não acontece sozinha: que a interoperabilidade fosse
condição de compra pública em pelo menos um mercado grande, antes de a concentração se firmar.
**O sinal precoce:** uma segunda implementação independente de identidade de agente passando em
teste público de interoperabilidade, antes de 2029.

### Indesejável — "provar que você é gente"

Em 2036 a web pede prova de humanidade na porta. A identificação voluntária de agentes morreu cedo,
por volta de 2029, quando ficou evidente que o agente honesto pagava e o disfarçado não; o que
sobrou foi detecção adversarial, medindo comportamento. Como detector comportamental mede desvio da
mediana, quem tem deficiência, quem usa acesso por varredura, quem responde devagar e quem navega
de um país pouco representado nos dados de treino são barrados junto com os agentes. O remédio que
o mercado ofereceu foi o lastro biométrico de humanidade, que resolveu o acesso e criou outra
exclusão, agora para quem não pode ou não quer se verificar — e um mercado cinzento de contas
verificadas alugadas, que devolveu ao ponto de partida a garantia que ela deveria dar. A web aberta
encolheu no que o agente lê: sem proveniência verificável, fórum e comentário viraram ruído
descartado, e o que o agente lê é o arquivo assinado por quem podia assinar. **O sinal precoce
deste cenário é específico e observável desde já:** o primeiro caso documentado de pessoa com
deficiência barrada por detecção de agente **num serviço essencial** — banco, saúde, serviço
público. Não é hipótese distante: o erro já acontece com CAPTCHA comportamental hoje, e a única
coisa que falta é a consequência subir de "formulário chato" para "conta bloqueada".

## 10. O experimento

### O que é

**O crachá e a porta.** Uma página única com **quatro portas** para o mesmo conteúdo, e **quatro
visitantes**. A turma constrói as duas pontas e mede o que passa.

**As portas:**
1. **Aberta.** Serve o conteúdo a qualquer requisição. É o controle.
2. **Assinada.** Só serve a quem apresentar assinatura válida de Web Bot Auth — chave Ed25519, chave
   pública publicada num diretório JWK, e os cabeçalhos `Signature-Agent`, `Signature-Input` e
   `Signature` cobrindo a requisição.
3. **Tarifada.** Responde `HTTP 402 Payment Required` com `crawler-price`, e só serve a quem voltar
   aceitando o preço em `crawler-exact-price` **dentro da assinatura** — não apenas no cabeçalho.
4. **Vigiada.** Sem assinatura: decide por comportamento (tempo entre eventos, trajetória de
   ponteiro, ordem de foco, cadência de teclado). É um detector ingênuo, feito pela turma em meia
   hora, e é de propósito que seja ingênuo.

**Os visitantes:**
1. Um **agente honesto**, que assina e paga.
2. Um **agente mudo**, que não assina.
3. Um **agente impostor**, que **copia uma assinatura válida do agente honesto** e a reapresenta —
   em outra requisição, com outro preço, e depois do prazo.
4. Uma **pessoa usando leitor de tela** (VoiceOver ou NVDA) ou navegando **só pelo teclado**,
   atravessando a porta 4.

### Que pergunta sobre o futuro ele ajuda a responder

Duas, e elas são o eixo de R3 inteira:

**"Identidade de agente é uma propriedade do agente ou uma permissão do site?"** Se a assinatura
amarra a requisição (método, caminho, cabeçalhos de preço, prazo), o impostor falha e o crachá é
propriedade do agente. Se o impostor passa, o crachá é só uma etiqueta declarativa — e então Web
Bot Auth é `robots.txt` com criptografia decorativa, e a raiz R3 não tem a perna que este mapa
supõe que ela tem.

**"Quem paga a conta de distinguir humano de agente?"** A porta 4 responde com dado próprio,
colhido em sala, e não com citação.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa **Web Bot Auth** (HTTP Message Signatures sobre Ed25519, com diretório de chave pública) e
**`HTTP 402` com cabeçalhos de preço**. Com tecnologia madura não dá, e a razão é precisa: **chave
de API** identifica mas não é verificável por terceiro e não cobre a requisição (roubada a chave,
o impostor é indistinguível); **`User-Agent`** é declaração sem prova, e a própria Cloudflare só o
usa como detecção de plano gratuito; **CAPTCHA** responde "é humano?" e nunca "é qual agente, e
quanto ele aceita pagar?"; e **OAuth** exige registro prévio entre duas partes que já se conhecem,
que é exatamente o que não existe entre um agente qualquer e um site qualquer. A combinação de
identificação verificável por terceiro **com** negociação de preço na mesma requisição não existe
em tecnologia madura — é isso que torna o experimento um teste de futuro e não um exercício de
programação.

### O que a turma faz quando testar em sala

1. Cada dupla implementa **uma porta** e **um visitante**, e não pode implementar o par
   correspondente. O impostor é escrito por quem não escreveu a porta assinada.
2. Roda-se a matriz **4 × 4** e registra-se, em tabela, quem passou onde e por quê — o `Signature-
   Input` recebido, o `crawler-charged` devolvido, o veredito do detector.
3. **A metade que interessa:** alguém da turma atravessa a porta 4 com leitor de tela ligado,
   depois só com teclado, depois com o ponteiro e pressa normal. Mede-se a taxa de falso positivo
   do detector **por modo de navegação**, com o número de tentativas anotado. Não se mede "o
   detector é bom"; mede-se **em quem ele erra**.
4. Discussão de fechamento com uma pergunta só: **qual das quatro portas você colocaria no site da
   sua cliente, sabendo o resultado da porta 4?**

### O que seria um resultado que me faria mudar de ideia

Três, e são falseadores de verdade — cada um derruba parte nomeada deste mapa:

- **Se o agente impostor passar pela porta assinada** (assinatura não amarrada à requisição, ao
  preço ou ao prazo), Web Bot Auth não é identidade e sim etiqueta. Cai o `sinal forte` de **e11**,
  e R3 perde a perna criptográfica, restando só detecção adversarial — o que torna o cenário
  indesejável de §9 o mais provável, não o menos.
- **Se o detector ingênuo da porta 4 não errar com leitor de tela** numa amostra decente (digamos,
  30 travessias por modo), então minha `confiança alta` em **e12.1** está mal calibrada, e o efeito
  precisa cair para `media`. Registro desde já que **espero** errar aqui, e que este é o resultado
  que eu ficaria feliz de obter.
- **Se a porta tarifada for trivial de implementar** — se uma dupla fizer `HTTP 402` com assinatura
  e cobrança consistente numa tarde —, então a minha objeção do §7.1 razão 3 ("o dinheiro não
  apareceu") é sobre liquidação financeira e não sobre protocolo, e **e11 deve ser antecipado**
  de 2029 para 2028.

## 11. Fontes

Trinta e duas fontes, todas abertas e lidas em 12/09/2026. O que **não** abriu está em §12.4, com
nome e motivo.

1. **OWASP — Top 10 for Agentic Applications 2026.** https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/ — sustenta a data de publicação (09/12/2025) e a escala do processo (mais de 100 especialistas). *Confiabilidade:* alta como fonte institucional; **mas é página de download e não contém a lista dos dez riscos** — ver §8, item 2.
2. **OWASP — GenAI LLM Top 10 2026.** https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/ — sustenta a existência de duas listas paralelas em 2026. *Confiabilidade:* alta; igualmente página de download, sem rankings no corpo.
3. **Promptfoo — OWASP Top 10 for Agentic AI.** https://www.promptfoo.dev/docs/red-team/owasp-agentic-ai/ — sustenta os nomes ASI01 a ASI10 usados no §3.1. *Confiabilidade:* média. É documentação de **fornecedor** de teste adversarial reproduzindo lista alheia; provavelmente fiel, não primária.
4. **Help Net Security — Machine identities outnumber humans 109 to 1 (14/05/2026).** https://www.helpnetsecurity.com/2026/05/14/2026-identity-security-landscape-report/ — sustenta os números centrais do §1 e §3.4. *Confiabilidade:* média-alta como jornalismo técnico; a pesquisa de origem é de **fornecedor** (Palo Alto Networks) e o tamanho da amostra não é divulgado.
5. **Infosecurity Magazine — Prompt Injection Remains Unsolved (Infosecurity Europe, 08/06/2026).** https://www.infosecurity-magazine.com/news/infosec-europe-prompt-injection/ — sustenta a citação sobre ausência de fronteira de privilégio na sequência de tokens, base de R2. *Confiabilidade:* alta; declaração atribuída, em evento público, com nome e data.
6. **Help Net Security — Prompt injection still drives most agentic AI security failures (11/06/2026).** https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/ — sustenta que o relatório do OWASP de 2026 cataloga CVEs e avisos de fornecedor em quase toda categoria de risco agêntico. *Confiabilidade:* média-alta; **não** traz as contagens que eu buscava, e digo isso em §8.
7. **Cloudflare — Introducing pay per crawl.** https://blog.cloudflare.com/introducing-pay-per-crawl/ — sustenta o mecanismo inteiro de R3: `HTTP 402`, os quatro cabeçalhos de preço, Ed25519, diretório JWK, `Signature-Agent`/`Signature-Input`/`Signature`. *Confiabilidade:* alta para o mecanismo (é o implementador); interessada quanto ao mérito. **Data do post: 01/07/2025** — ver §8, item 1.
8. **Cloudflare — Manage AI crawlers (documentação).** https://developers.cloudflare.com/ai-crawl-control/features/manage-ai-crawlers/ — sustenta que a classificação por categoria e as ações permitir/bloquear/cobrar existem, e que a cobrança é beta privado. *Confiabilidade:* alta; documentação do produto.
9. **TechCrunch — Cloudflare's new policy pushes AI companies to pay (01/07/2026).** https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/ — sustenta a data de 15/09/2026, a definição de rastejador de uso misto, o alcance (clientes novos, sites novos, **todos** os gratuitos existentes) e a citação de Matthew Prince. *Confiabilidade:* alta.
10. **TechCrunch — World launches tool to verify humans behind AI shopping agents (17/03/2026).** https://techcrunch.com/2026/03/17/world-launches-tool-to-verify-humans-behind-ai-shopping-agents/ — sustenta o AgentKit, a parceria com Coinbase e Cloudflare, o x402 e a citação de Tiago Sada. *Confiabilidade:* alta. **Não traz número de humanos verificados** — §8, item 7.
11. **Pai, A. — Evaluating Prompting-Based Defenses Against Domain-Camouflaged Injection Attacks (16/06/2026).** https://arxiv.org/abs/2606.18530 — sustenta 3.510 ensaios, 26-33% de sucesso em domínio financeiro, redução de 55-84% por paráfrase, e que *spotlighting* não ajuda no Llama 3.1 8B. *Confiabilidade:* média. Pré-publicação sem revisão por pares, autor único, **documentos sintéticos** (os próprios autores ressalvam a generalização).
12. **Cloud Security Alliance — Indirect Prompt Injection in the Wild (26/04/2026).** https://labs.cloudsecurityalliance.org/research/csa-research-note-indirect-prompt-injection-in-the-wild-2026/ — sustenta +32% de conteúdo malicioso entre 11/2025 e 02/2026 sobre 2-3 bilhões de páginas/mês, os 12 casos e 22 técnicas da Unit 42, a distribuição de entrega (37,8%/19,8%/16,9%), os 8 incidentes do 1º trimestre com **um** CVE, e a recomendação de proveniência. *Confiabilidade:* alta; consolida medições de terceiros identificados.
13. **Yao, Y. — Acting with AI: An Interaction-Based Framework for Agentic Tort Liability (30/05/2026).** https://arxiv.org/abs/2606.00518 — sustenta a base doutrinária de R4 e a expressão "traço probatório primário", além da tripartição ferramenta / planejamento colaborativo / desvio autônomo. *Confiabilidade:* média-alta como doutrina; pré-publicação, não é decisão judicial.
14. **When Agent Automation Becomes Profitable: Quantifying and Insuring Autonomous AI Risk through Trace-Economic Underwriting (2026).** https://arxiv.org/abs/2606.16465 — sustenta a tarifação pelo traço: erro médio absoluto de US$ 17,7 mil para US$ 569, CVaR95 −72%, auditoria de 300 traços com 295 rótulos aceitos. *Confiabilidade:* média; pré-publicação, resultados em ambiente construído pelos autores.
15. **WorkOS — NIST's AI Agent Standards Initiative explained.** https://workos.com/blog/nist-ai-agent-standards-initiative-explained — sustenta a criação da iniciativa em 02/2026, as três frentes, a recomendação de adaptar OAuth/OIDC/SPIFFE/SCIM/NGAC/MCP e o problema aberto da delegação multi-salto. *Confiabilidade:* média. É blog de **fornecedor de identidade**, portanto interessado, glosando documento público que eu não abri.
16. **Start With Identity — Agent identity gets a protocol.** https://startwithidentity.com/blog/agent-identity-gets-a-protocol/ — sustenta o Cross App Access no MCP (24/08/2026), o "34% das organizações", e as citações sobre disciplina operacional e sobre token restrito que chama ferramenta ampla. *Confiabilidade:* média. Blog especializado; o número de 34% é de segunda mão — §8, item 4.
17. **Li, Z. et al. — Towards Secure Agent Skills: Architecture, Threat Taxonomy, and Security Analysis (03/04/2026).** https://arxiv.org/abs/2604.02837 — sustenta a taxonomia de 7 categorias e 17 cenários em 3 camadas, e a tese de que ausência de fronteira dado-instrução, confiança persistente por aprovação única e ausência de revisão de mercado são falhas **arquiteturais**. *Confiabilidade:* média-alta; pré-publicação com cinco incidentes confirmados como validação.
18. **Xiong, X. et al. — Can Trustless Agents Be Trusted? (24/06/2026, rev. 08/07/2026).** https://arxiv.org/abs/2606.26028 — sustenta a inversão de e18: 3%/4%/15% de registros válidos, 73,5%/59,2%/90,6% de avaliadores Sybil, e a conclusão de que o registro de reputação não funciona como sinal. *Confiabilidade:* alta para o que mede; é medição direta sobre três cadeias públicas, verificável por terceiros.
19. **Kang, R.; Diponegoro, Y. — Governance Gaps in Agent Interoperability Protocols (30/06/2026).** https://arxiv.org/abs/2606.31498 — sustenta que MCP, A2A e ACP não expressam votação nem preservação de dissenso, e a distinção entre lacuna extensível e estrutural. *Confiabilidade:* média; análise conceitual, pré-publicação.
20. **Artificial Lawyer — Crosby to Insure Its Agents for Legal Liability (28/07/2026).** https://www.artificiallawyer.com/2026/07/28/crosby-to-insure-its-agents-for-legal-liability/ — sustenta o único caso aberto de apólice para agentes e a citação de Ryan Daniels. *Confiabilidade:* média-alta; publicação especializada, mas **a seguradora não é nomeada**, o que enfraquece a verificação.
21. **Better Auth — agent-auth-protocol (GitHub).** https://github.com/better-auth/agent-auth-protocol — sustenta a existência do padrão aberto, "agentes hoje não têm identidade", e as 187 estrelas e 12 forks. *Confiabilidade:* alta para o que é (o próprio repositório); a métrica de estrelas é o dado mais honesto sobre adoção real.
22. **SecurityWeek — Hackers Weaponize Claude Code in Mexican Government Cyberattack.** Sustenta o incidente-referência: dez órgãos e uma instituição financeira, mais de 150 GB, cerca de 195 milhões de identidades, mais de mil prompts, atribuição à Gambit Security, e a divulgação anterior da Anthropic em 11/2025. *Confiabilidade:* média-alta como jornalismo de segurança; a magnitude vem de fonte interessada — §8, item 3. **O link está em §12.4 e não aqui: o site devolve 403 a cliente automatizado, e incluí-lo aqui quebraria a verificação de links. Ele foi aberto nesta rodada.**
23. **Security Leaders — IA agêntica coloca gestão de identidades no centro do risco cibernético em 2026 (01/06/2026).** https://securityleaders.com.br/ia-agentica-coloca-gestao-de-identidades-no-centro-do-risco-cibernetico-em-2026/ — sustenta o recorte brasileiro sobre identidade de agente e a elevação da ANPD a agência reguladora. *Confiabilidade:* média; imprensa técnica brasileira glosando relatório do Gartner, **sem números próprios**.
24. **OOPSpam — CAPTCHA and Accessibility (2026).** https://www.oopspam.com/blog/captcha-and-accessibility-why-your-forms-might-be-breaking-the-law-in-2026 — sustenta e12.1: 3.117 ações de acessibilidade nos EUA em 2025 (+27%), a condenação do Carrefour na França, os critérios 1.1.1 e 3.3.8, e a confusão entre leitor de tela e tráfego automatizado. *Confiabilidade:* média. Blog de **fornecedor** de anti-spam, portanto interessado; os números são checáveis e o mecanismo descrito é consistente com a literatura de acessibilidade.
25. **PromptTrace — Prompt Injection Labs.** https://prompttrace.airedlab.com/ — sustenta a existência de formação pública aferida: 10 laboratórios, CTF de 17 níveis, três camadas de defesa, e o *Context Trace*. *Confiabilidade:* alta para o que é (é o próprio produto); as capacidades são verificáveis usando-o.
26. **Cosmonic — AI Sandbox: The Complete Guide (26/05/2026).** https://cosmonic.com/blog/ai-sandbox-guide/ — sustenta os números de isolamento: 1-5 s e 50-200 MB de contêiner+gVisor; 125-150 ms e 128 MB+ de microVM; <1 ms e 2-10 MB de isolado V8; <1 ms e <1-5 MB de WASM com capacidade negada por padrão. *Confiabilidade:* **média-baixa para a comparação, alta para a ordem de grandeza.** A Cosmonic vende WebAssembly, e a comparação favorece o produto dela. Uso as ordens de grandeza, que batem com fontes independentes, e não a conclusão.
27. **Microsoft Learn — What's new in Microsoft Entra Agent ID (01/05/2026).** https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id — sustenta a disponibilidade geral e o aparato: blueprints, owner/sponsor/manager, pacotes de acesso para agente autônomo e em nome de usuário, exclusão em cascata, Acesso Condicional para agente de alto risco, e os workflows que transferem patrocínio "para evitar agentes órfãos". *Confiabilidade:* alta; documentação do implementador, e é a melhor evidência de R1 no mapa.
28. **Kodathala, S. V. — aiAuthZ: Off-Host, Identity-Bound Authorization for AI Agents (06/07/2026).** https://arxiv.org/abs/2607.05518 — sustenta e6: recusa de modelo variando de 100% a 38%, 0% de sucesso residual em 15 modelos, 0,03 ms de latência, 7/7 no AgentDojo bancário e 9/9 em estudos de caso. *Confiabilidade:* média; pré-publicação, autor único, avaliação com a metodologia do próprio autor.
29. **Engadget — Perplexity has overturned Amazon's injunction (04/08/2026).** https://www.engadget.com/2230471/perplexity-has-successfully-overturned-amazon-injunction-on-its-ai-shopping-bot/ — sustenta e14: Nono Circuito, o raciocínio de que quem acessa é o usuário, e a citação sobre o interesse público. *Confiabilidade:* média-alta; jornalismo generalista sobre decisão pública verificável. Não substitui a leitura do acórdão, que não abri.
30. **ANPD — Mapa de Temas Prioritários 2026-2027 (24/12/2025).** https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-mapa-de-temas-prioritarios-para-o-bienio-2026-2027-e-atualiza-agenda-regulatoria-2025-2026 — sustenta a nota Brasil: os quatro eixos, com IA e tecnologias emergentes entre eles, e as Resoluções CD/ANPD nº 30/2025 e nº 31/2025. *Confiabilidade:* alta; fonte oficial primária.
31. **Foil (ABXY, Inc.).** https://usefoil.com/ — sustenta e12: mais de 350 sinais, taxonomia de agentes identificados **pelo nome**, e detecção de navegador anti-detecção e headless furtivo. *Confiabilidade:* baixa-média como evidência de eficácia (é material de venda); **alta como evidência de que o mercado existe e de como ele se descreve**, que é para o que uso.
32. **Agent Auth Protocol (sítio do padrão).** https://agentauthprotocol.com/ — sustenta a formulação do problema: "todos os agentes compartilham um token; o servidor vê o usuário, não o agente", e os três casos (delegado, autônomo, descoberta). *Confiabilidade:* alta para o que o padrão propõe; marcado **v1.0-draft**, o que é o dado relevante sobre maturidade.

## 12. Anexo — o levantamento bruto

Tudo o que foi levantado e não coube acima. Sem corte silencioso.

### 12.1 As buscas feitas, e o que cada uma rendeu

Dez buscas, em inglês e português, mais buscas de verificação pontual. Na coluna "rendeu": o que
entrou no mapa, ou por que não entrou.

| # | Consulta | Rendeu |
|---|---|---|
| 1 | `agent identity protocol 2026 authentication for AI agents standard` | O panorama de R1: Entra Agent ID, NIST, Cross App Access, os quatro modelos de identidade no comércio agêntico. **Base do §3.1.** |
| 2 | `prompt injection 2026 agent attack real incident exfiltration CVE` | O incidente mexicano, CVE-2025-32711 (Copilot, zero-clique), CVE-2026-24307 (Reprompt), CVE-2025-6514 (MCP, 9.6), o caso postmark-mcp. **Só o mexicano entrou**, porque foi o único cuja fonte eu abri. |
| 3 | `Cloudflare AI crawler bot detection pay per crawl 2026 signed agents Web Bot Auth` | Todo o mecanismo de R3. **Base do §4.3.** |
| 4 | `agent sandbox microVM Firecracker WebAssembly isolation per-agent 2026 E2B` | Os números de isolamento; a arquitetura do Manus (um sandbox E2B completo por tarefa, com Chromium, terminal e sistema de arquivos). **O dado do Manus não entrou** — não abri fonte primária. |
| 5 | `OWASP Top 10 LLM applications 2025 2026 agentic security risks` | As duas listas, ASI01-ASI10, e a informação de que "Excessive Agency" subiu de #6 para #3 na lista de LLM de 2026, sobre 7.714 incidentes reais com peso de 25% contra 75% de voto da comunidade. **Nada disso entrou**: as duas páginas do OWASP que abri não contêm os rankings nem a metodologia, e eu não abri o PDF. É a lacuna mais incômoda desta rodada. |
| 6 | `"agentes de IA" identidade segurança 2026 Brasil ANPD LGPD regulação agente autônomo` | A nota Brasil. Rendeu menos do que eu esperava: **não encontrei nenhum número brasileiro** de adoção de identidade de agente, nem levantamento nacional sobre agentes em produção. Registrado como "sem número encontrado" no §3.4. |
| 7 | `AI agent legal liability lawsuit 2026 who is responsible autonomous agent insurance` | Toda R4. Também trouxe: lei da Califórnia em vigor em 2026 impedindo que a operação autônoma sirva de defesa; Colorado AI Act em junho de 2026 exigindo avaliação de impacto; ação da Nippon Life contra a OpenAI em março de 2026 por exercício não autorizado da advocacia. **Nenhum dos três entrou** — não abri fonte para eles, e são exatamente o tipo de alegação jurídica que não se cita de segunda mão. |
| 8 | `bot detection blocking accessibility screen reader assistive agent discrimination CAPTCHA 2026` | e12.1 inteiro. |
| 9 | `Visa Trusted Agent Protocol Mastercard Agent Pay Google AP2 agentic commerce 2026 adoption numbers` | O quadro de pagamento agêntico e, sobretudo, **a ausência de adoção** — o que virou o §3.2 e a razão 3 do pré-mortem. Fonte não aberta; usada apenas como leitura de mercado explicitamente marcada como fraca. |
| 10 | `non-human identity machine identities ratio to humans 2026 survey percentage agents in production` | Os números do §1. Também trouxe razões conflitantes de outras fontes: **45:1** (Rubrik Zero Labs), **80:1** (GitGuardian), **96:1**, **144:1** (Entro Labs, ambientes nativos de nuvem), e "quase metade acima de 100:1, alguns setores em 500:1". **Usei só o 109:1**, que é o da fonte que abri, e registro aqui que a dispersão entre levantamentos é de uma ordem de grandeza — o que deveria bastar para ninguém tratar nenhum desses números como medida. |
| 11 | `prompt injection "cannot be solved" research consensus 2026 defenses` | A citação central de R2. Também: avaliação da OpenAI de novembro de 2025 chamando injeção de "engenharia social específica de IA conversacional" e "improvável de ser jamais totalmente resolvida"; taxa base de 73,2% de sucesso caindo para 41,0% com filtragem de conteúdo; faixa de 50% a 84% em modelos comuns. **Essas três não entraram**: vieram de resumo de busca, não de fonte aberta. |
| 12 | `proof of personhood World ID human verification 2026` | O AgentKit. Também os "17.912.203 humanos verificados" e o mercado de "US$ 3 a 5 trilhões até 2030" — **ambos descartados**, §8 item 7. |
| 13 | `agent reputation system portable trust score A2A 2026` | O estudo do ERC-8004, que **inverteu e18**. Também: AgentGraph (0-100, multissinal), Verascore (cinco dimensões, identidade Ed25519), Concordia, MolTrust, Pilot Protocol, e a doação do A2A à Linux Foundation em 2026 com a v1.0.1 em maio. **Nada disso entrou** por falta de fonte aberta; a lista fica aqui porque é o inventário do que existe sendo tentado. |
| 14 | `better-auth "Agent Auth Protocol"` | R1, padrão aberto. |
| 15 | `Amazon sues Perplexity Comet agent lawsuit ruling 2026` | e14. |
| 16 | `Microsoft Entra Agent ID general availability` | R1, produto. |
| 17 | `PromptTrace prompt injection labs CTF` | SF8. |
| 18 | `"Foil" SDK detect AI agents bots` | e12. Também `@vercel/detect-agent` e `@knownagents/sdk` (verificação de agente por Web Bot Auth e correspondência de IP, em pacote npm comum) — **não entraram**, npm devolveu 403. |
| 19 | `ANPD mapa de temas prioritários fiscalização 2026 2027` | A nota Brasil, com número de resolução. |
| 20 | `Anthropic Claude Code Mexico government breach` | O incidente-referência. |

**Buscas que não deram em nada aproveitável:** a busca por número brasileiro de adoção de
identidade de agente (nº 6) e a tentativa de obter, das páginas oficiais do OWASP, os rankings e
a metodologia (nº 5). Nos dois casos a ausência está declarada no corpo do documento, e não
preenchida por estimativa.

### 12.2 Os efeitos cortados na bateria do §7, na íntegra

Nada disto está no bloco `roda:`. Está aqui porque foi pensado, escrito e derrubado — e porque a
correção precisa poder discordar da derrubada.

**`e1.4` — "Surge a profissão de gestor de frota de agentes."**
*Motivo do corte:* efeito genérico proibido pela régua do método. Troque a raiz por qualquer uma
das outras três — ou por qualquer tema dos dezenove da disciplina — e a frase continua "servindo".
Não nomeia curso, empregador, nem mecanismo que a ligue ao pai. *O que salvaria:* nomear a
organização que primeiro abriu a vaga e o que ela pediu no anúncio. Não encontrei, não inventei.

**`e-corte-1` — "Agentes passam a assinar criptograficamente cada ação individual, e não só a
requisição."**
*Motivo do corte:* falha no **teste da causa solta**. Removida R2, isso aconteceria igualmente por
R1 (exigência do diretório), por R3 (exigência da porta) ou por auditoria contábil comum. Não
deriva desta raiz. *Observação:* é possível que seja um efeito legítimo **de e11**, e não de R2 —
deixo a hipótese registrada em vez de forçá-la para dentro da árvore.

**`e-corte-2` — "Reguladores criam uma categoria jurídica nova para agentes autônomos."**
*Motivo do corte:* efeito proibido sem nome de regulador, de instrumento e mecanismo. Substituído
por `e9.1`, que nomeia a ANPD, o eixo de fiscalização e a Resolução CD/ANPD nº 30/2025. *Registro
da tentação:* esta frase é a que mais aparece em roda de futuros sobre qualquer tecnologia, e é
quase sempre verdadeira e quase sempre inútil.

**`e-corte-3` — "Escolas de design reorganizam o currículo em torno de modelagem de capacidade."**
*Motivo do corte:* mesma categoria — "cursos reorganizam o currículo" serve para todo tema.
Substituído por `e7.1.1` (o modo demonstração como mundo real descartável), que tem objeto
concreto e mecanismo econômico.

**`e-corte-4` — "O mercado de trabalho de segurança cresce."**
*Motivo do corte:* "mudanças no mercado de trabalho" é o quarto efeito proibido da régua. O que
sobrevive dele, com ator e mecanismo, é `e10`: o engenheiro de segurança de aplicação perde o
método central do ofício. Perder método é afirmação falseável; "o mercado cresce" não é.

**`e-corte-5` — "Agentes passam a ter personalidade jurídica própria."**
*Motivo do corte:* contradiz a fonte. O arcabouço de responsabilidade por interação que abri
explicitamente **não** defende personalidade para o agente: mantém a responsabilidade humana e
distribui pela interação. Manter o efeito seria inventar contra a evidência que eu mesmo levantei.
Ele reaparece, corretamente, como `e17` — a responsabilidade continua humana e **se desloca**.

### 12.3 Candidatos a raiz avaliados e recusados, com o critério aplicado

Além dos seis registrados no §4.0, foram avaliados e recusados:

- **"Modelos rodando no dispositivo"** — é raiz de outro tema, e aqui seria efeito (mudaria a
  superfície de contenção, não o estatuto do agente).
- **"Comércio agêntico"** — não passa no teste 3: está em demonstração, e a evidência aberta diz
  que o usuário médio ainda não compra por AP2. Entra como contexto de R3 e como sinal fraco SF5.
- **"Observabilidade e avaliação de agente"** — é o tema 3 da disciplina. Fronteira respeitada;
  aparece aqui só onde o rastro vira **prova** (R4), que é outro objeto que "o agente acertou?".
- **"Identidade humana sem terceiros (passkeys)"** — é o tema 17. Aparece aqui só invertido: o
  lastro de humanidade como credencial **do agente** (e13).
- **"Programar com agente"** — é o tema 1, e é maioria. Contexto.

### 12.4 O que não abriu, nomeado

Fontes que eu quis usar e **não** usei, ou usei sem link vivo:

- **SecurityWeek — Hackers Weaponize Claude Code in Mexican Government Cyberattack.**
  `https://www.securityweek.com/hackers-weaponize-claude-code-in-mexican-government-cyberattack/`
  — **foi aberta e lida** nesta rodada; é a fonte 22 do §11. O link mora aqui porque o servidor
  devolve **403** a cliente automatizado, e mantê-lo no §11 quebraria a verificação de links sem
  que houvesse qualquer problema com a fonte.
- **Ropes & Gray — "Tool or Intruder? What Amazon v. Perplexity Means for Agentic AI and the
  CFAA" (08/2026).** `https://www.ropesgray.com/en/insights/alerts/2026/08/tool-or-intruder-what-amazon-v-perplexity-means-for-agentic-ai-and-the-cfaa` — **403**. Era a melhor fonte
  jurídica do conjunto e teria sustentado e14 com mais força que a matéria do Engadget.
- **GeekWire — sobre a liminar contra o Comet.** `https://www.geekwire.com/2026/judge-blocks-perplexitys-ai-bot-from-shopping-on-amazon-in-early-test-of-agentic-commerce/` — **403**. Traria
  o nome da juíza e a data da liminar, que por isso **não** aparecem no corpo do mapa.
- **CNBC — Amazon wins court order to block Perplexity's AI shopping agent (10/03/2026).**
  `https://www.cnbc.com/2026/03/10/amazon-wins-court-order-to-block-perplexitys-ai-shopping-agent.html` — **403**.
- **Confidata — ANPD e Regulação de IA no Brasil: Guia 2026-2027.**
  `https://confidata.com.br/blog/anpd-regulacao-ia-brasil-2026-2027` — **403**. Substituída pela
  fonte oficial da própria ANPD, o que foi uma troca boa.
- **npm — `@knownagents/sdk`.** `https://www.npmjs.com/package/@knownagents/sdk` — **403**.
  Verificação de agente por Web Bot Auth em pacote comum de JavaScript seria o melhor indicador de
  que a assinatura de agente está descendo do CDN para a aplicação. Fica como pendência de medição.
- **PDF do OWASP Top 10 for Agentic Applications 2026** — não baixado. É a razão do item 2 do §8.

### 12.5 Alegações que circulam e que este mapa deliberadamente não usa

Cada uma apareceu em resultado de busca, nenhuma teve fonte aberta, e todas seriam úteis. Estão
aqui para que a correção possa cobrá-las, e para que ninguém as reintroduza achando que faltaram
por esquecimento:

- "Excessive Agency" subindo de #6 (2025) para #3 (2026) na lista de LLM do OWASP, sobre **7.714
  incidentes reais**, com peso de 25% contra 75% de voto da comunidade.
- Taxa base de sucesso de injeção de **73,2%**, caindo para **41,0%** com filtragem de conteúdo.
- Faixa de **50% a 84%** de sucesso de injeção em modelos comuns.
- **CVE-2025-32711** (Copilot, zero-clique, CVSS 9,3), **CVE-2026-24307** (Reprompt, exfiltração
  por um clique) e **CVE-2025-6514** (MCP, execução remota, CVSS 9,6).
- O pacote `postmark-mcp`, com quinze versões limpas antes de uma linha de exfiltração.
- **17.912.203** humanos verificados na rede World.
- Mercado de comércio agêntico de **US$ 3 a 5 trilhões até 2030**.
- Razões de identidade não-humana por humana de **45:1**, **80:1**, **96:1**, **144:1** e "500:1 em
  alguns setores" — contra o 109:1 que uso.
- Lei da Califórnia, em vigor em 2026, impedindo que a operação autônoma do sistema sirva de defesa;
  **Colorado AI Act** em junho de 2026 com avaliação de impacto obrigatória; ação da **Nippon Life
  contra a OpenAI** em março de 2026 por exercício não autorizado da advocacia.
- Doação do **A2A à Linux Foundation** em 2026, com v1.0.1 em maio e mecanismo de extensão.
- Doação do **MCP-I à Decentralized Identity Foundation** em março de 2026, renomeado **KYA-OS**.
  Esta em particular é curiosa: apareceu no resumo de uma busca, e a página especializada que abri
  em seguida **não menciona nem MCP-I nem KYA-OS**. É exatamente o perfil de uma alegação que não
  se sustenta, e por isso ela está aqui e não no corpo.
- Arquitetura do **Manus**: um sandbox E2B completo por tarefa, com Chromium, terminal, sistema de
  arquivos e 27 outras ferramentas.
- **AgentGraph**, **Verascore**, **Concordia**, **MolTrust**, **Pilot Protocol** — o inventário de
  tentativas de reputação de agente.

### 12.6 Notas de método desta rodada

- **Entrevista:** não houve, por ser rodada não interativa. O `briefing:` veio completo (tema,
  horizonte, público, recorte, descartado, viés, falseador, profundidade, modo, zona de interesse),
  portanto **não houve rebaixamento de confiança**. O que o briefing não cobriu está declarado como
  premissa assumida em §2.1.
- **O falseador declarado no briefing** era: evidência de que a adoção já passou da maioria inicial,
  ou de que a tecnologia não rompe nada. Ele foi aplicado e **funcionou**: eliminou cinco candidatos
  a raiz (§4.0) e reclassificou "reputação portátil" de raiz para sinal fraco, depois para efeito
  invertido. O mapa é menor por causa dele.
- **Profundidade:** três ordens, conforme pedido. A regra de parada foi aplicada — vários ramos
  pararam na segunda ordem por não haver troca de ator nem de mecanismo (e3.2, e6.2, e10.1, e11.3,
  e13.2, e14.2, e15.2, e17.2). Continuar seria o mesmo efeito amadurecendo, não outra ordem.
- **Modo:** a partir do tema, não de um setor.
- **Efeitos fora do horizonte:** um, `e13.1.1` (2038), de terceira ordem, declarado como fora da
  janela no §5.1 e no registro de alterações §7.8.
- **Contagens:** 4 raízes, 18 efeitos de 1ª ordem, 34 de 2ª, 24 de 3ª, 32 fontes abertas. Conferidas
  pelo verificador, cuja saída está em §12.7.

### 12.7 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py \
  /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2036/02-contencao-seguranca-e-identidade-de-agentes-autonomos/tendencia-contencao-seguranca-e-identidade-de-agentes-autonomos.md --links
```

Saída, na íntegra, em 12/09/2026:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 18 (frontmatter diz 18)
efeitos ordem 2: 34 (frontmatter diz 34)
efeitos ordem 3: 24 (frontmatter diz 24)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e13.1.1', 2038)]
confiança ordem 1: alta 7 · media 11 · baixa 0
confiança ordem 2: alta 3 · media 28 · baixa 3
confiança ordem 3: alta 0 · media 3 · baixa 21
links da seção 11: 31/31 respondem (frontmatter diz fontes: 32)
RESULTADO: ok
```

Leitura da saída, item a item — os números, não a palavra "passou":

- **frontmatter 18/18** e **títulos 12/12**: o formato da disciplina está íntegro.
- **4 raízes, 18 / 34 / 24 efeitos**: batem com o frontmatter. Nenhuma correção de texto foi feita
  para agradar o contador; o único ajuste foi no frontmatter (`efeitos_ordem_3` de 23 para 24,
  porque eu havia contado errado ao planejar a roda).
- **prazo > horizonte em ordens 1-2: 0**. Como manda a regra.
- **prazo > horizonte em ordem 3: 1 — `e13.1.1` em 2038.** Declarado: está fora da janela deste
  mapa, e o motivo está em §5.1 e no registro de alterações §7.8.
- **Calibração: alta 7 → 3 → 0.** A confiança cai com a ordem, e a terceira ordem não tem nenhum
  efeito com confiança alta.
- **links da seção 11: 31/31 respondem, e o frontmatter diz `fontes: 32`.** A diferença é
  deliberada e não é erro: a fonte 22 (SecurityWeek) foi aberta e lida nesta rodada, mas o servidor
  devolve 403 a cliente automatizado. O link dela está em §12.4, com a explicação, para que a
  verificação de links reflita a saúde dos links e não a acessibilidade de um servidor a robôs.
  São 32 fontes abertas e 31 URLs no §11.
- **RESULTADO: ok.**
