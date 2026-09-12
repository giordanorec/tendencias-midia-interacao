---
tema: Contenção, segurança e identidade de agentes autônomos
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 16
efeitos_ordem_2: 26
efeitos_ordem_3: 26
tecnologias_citadas:
  - Web Bot Auth
  - HTTP Message Signatures (RFC 9421)
  - HTTP 402 Payment Required
  - Ed25519
  - Model Context Protocol (MCP)
  - MCP-I / KYA-OS
  - Decentralized Identifiers (DID)
  - Verifiable Credentials (VC)
  - Agent2Agent (A2A)
  - Signed Agent Cards
  - WIMSE
  - OAuth 2.0 / 2.1
  - mTLS
  - Firecracker
  - MicroVM
  - gVisor
  - E2B
  - WebAssembly
  - Visa Trusted Agent Protocol
  - Mastercard Agent Pay
  - Cloudflare AI Crawl Control
  - World ID
  - CaMeL
  - FIDES
  - Progent
  - RTBAS
  - FORGE
  - OWASP Top 10 for LLM Applications
  - CFAA
  - Instrução Normativa RFB 2.320
fontes: 16
confianca: media
experimento: "Banco de mandatos — um agente que só age com mandato assinado, mais uma arena de injeção entre duas equipes"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Agentes deixaram de ser interlocutores e viraram atores: pedem, compram, publicam e apagam.
O mundo digital foi construído supondo que do outro lado havia uma pessoa, e essa suposição
quebrou de quatro maneiras ao mesmo tempo. Primeira: o agente passa a precisar de identidade
própria, distinta da do humano que o delega — redes de cartão, fundações abertas, a IETF e o
NIST estão todos emitindo alguma versão dessa credencial, e nenhuma convergiu. Segunda: a
injeção de prompt foi oficialmente classificada como risco sem conserto de engenharia, o que
desloca a segurança de "corrigir a falha" para "conter o dano" — sandbox descartável, mandato
com alçada, desfazer no ambiente e não na aplicação. Terceira: a web começou a responder
diferente conforme quem pede, com assinatura criptográfica, bloqueio por categoria e cobrança
por acesso — e humano já é minoria do tráfego. Quarta: um tribunal decidiu que um agente pode
agir com permissão do usuário e ainda assim sem autorização da plataforma, e seguradoras
começaram a escrever apólices para agentes. Para quem projeta mídia e interação, o efeito
central não é de segurança: é que **a delegação vira objeto de design**. O momento em que a
pessoa entrega um mandato, o painel em que ela vê o que foi feito com ele e o gesto com que
ela o revoga passam a ser telas tão decisivas quanto o login foi nos últimos vinte anos. O
mapa também prevê o lado ruim: o fim do acesso anônimo como estado padrão, um mercado de
"parecer humano", e a exclusão de quem depende de agente para acessar serviço público.

## 2. O tema

**O objeto.** Não é "segurança de IA" em geral, nem "o agente acertou?" (isso é avaliação e
observabilidade, tema vizinho), nem identidade humana sem terceiros (passkeys, outro tema
vizinho). O objeto aqui é estreito e novo: **conter e identificar a máquina que age**. Um
agente que executa comando, navega e chama API é um principal de segurança — uma entidade que
precisa de identidade, permissão, isolamento e trilha próprios. Todo o aparato que a indústria
construiu em trinta anos pressupõe que o principal é uma pessoa ou um serviço estático; o
agente não é nem um nem outro.

**Onde encosta em mídia e interação.** Em quatro lugares concretos, e nenhum deles é o
data center:

1. **A tela do consentimento.** Hoje delegar a um agente é aceitar um escopo de OAuth escrito
   para desenvolvedor. Se o agente ganha identidade, escopo, teto e prazo, isso vira uma peça
   de interface que precisa ser compreendida por quem não é técnico — o equivalente ao que a
   tela de permissão de app fez pelo celular, mas com muito mais em jogo.
2. **A superfície de publicação.** Se sites passam a distinguir humano de agente e a cobrar
   diferente, o desenho de uma página deixa de ter um destinatário e passa a ter dois. O que
   se publica para o olho e o que se publica para o agente deixam de ser o mesmo artefato.
3. **A conversa.** Quando dois agentes de pessoas diferentes se encontram, alguém tem de
   projetar o que a pessoa vê disso — antes, durante e depois. É um gênero de interface que
   não existe.
4. **A exclusão.** Detecção de automação e acessibilidade estão em conflito estrutural desde
   o CAPTCHA. Se a web endurece contra agente, quem depende de agente para acessar perde
   acesso — e quem projeta interface é quem decide se isso acontece.

**Por que um mapa de futuro e não um estado da arte.** Porque a pergunta interessante não é
"qual sandbox é melhor". É: se o agente responde por atos com identidade própria, quem a
emite? O que acontece com o anonimato quando ele deixa de ser o estado padrão? Quem paga o
preço de um mundo em que provar que se é humano vira uma transação? Nenhuma dessas perguntas
se responde catalogando produto — todas se respondem seguindo consequências.

**Premissas assumidas** (do bloco `briefing:` desta rodada, declaradas conforme §0 da skill):
horizonte 2046; público de quem projeta mídia e interação; recorte global com uma nota sobre o
Brasil; descartado de saída tudo o que já é comum em produto de massa; nenhuma disrupção-raiz
pré-suspeitada; viés neutro; profundidade de três ordens; modo a partir do tema, não de um
setor. O falseador declarado no briefing — "evidência de que a adoção já passou da maioria
inicial, ou de que a tecnologia só melhora o que existe" — foi usado como critério na §4 e na
seção 7. A entrevista não foi conduzida por não haver interlocutor nesta rodada; o briefing
cobriu os sete itens obrigatórios, e por isso não houve rebaixamento geral de confiança.

**Horizonte de vinte anos.** 2046 é longo o bastante para que tudo o que está em rascunho hoje
tenha virado padrão ou morrido, e curto o bastante para que as pessoas que hoje projetam essas
telas ainda estejam trabalhando. Isso muda o mapa de duas formas: os efeitos de terceira ordem
cabem dentro da janela (nenhum ultrapassa 2046), e a pergunta sobre convergência de padrão —
que num horizonte de cinco anos seria especulação — aqui é respondível por classe de
referência, porque há casos históricos de vinte anos para comparar.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 12/09/2026. Dezesseis fontes abertas e lidas; a lista está na
seção 11, e as buscas que não deram em nada, na seção 12.

### 3.1 O que já existe e funciona

**Tráfego automatizado já é maioria.** O relatório de bots da Imperva publicado em 29/04/2026
mede 53% do tráfego web em 2025 como automatizado, contra 51% no ano anterior; a fatia humana
caiu para 47%. O mesmo relatório registra 27% dos ataques de bot mirando APIs e serviços
financeiros concentrando 24% dos ataques e 46% dos casos de tomada de conta. A tese central do
documento é operacional, não retórica: como automação legítima e maliciosa "operam pelos mesmos
sistemas, usam as mesmas interfaces e seguem a mesma lógica", a saída seria abandonar a
detecção de bot e migrar para controle de automação por intenção de negócio.

**Assinatura criptográfica de agente está em produção antes de ser padrão.** O Web Bot Auth —
HTTP Message Signatures (RFC 9421), chave Ed25519 por agente, cabeçalho `Signature-Agent`
apontando para um diretório de chaves — está descrito no rascunho IETF
`draft-meunier-web-bot-auth-architecture-05`, de 02/03/2026, assinado por Thibault Meunier
(Cloudflare) e Sandor Major (Google). O rascunho está formalmente expirado e sem endosso da
IETF, e mesmo assim o mecanismo já roda: em 04/08/2025 a Cloudflare citava o ChatGPT Agent
assinando requisições por esse esquema.

**Cobrança por acesso de máquina já tem código de status.** O *pay per crawl* da Cloudflare
(anúncio datado de 01/07/2025 no blog da empresa) reusa o HTTP 402 com cabeçalho
`crawler-price`, em dois fluxos — reativo (402, depois `crawler-exact-price`) e proativo
(`crawler-max-price` na primeira tentativa). Para participar, o rastreador precisa implementar
Web Bot Auth. O AI Crawl Control, anunciado em 28/08/2025, deu aos publicadores o bloqueio
seletivo por rastreador e respostas 402 customizáveis com instrução de licenciamento; a
Cloudflare registra que seus clientes já emitiam "mais de um bilhão de respostas 402" por dia
médio antes disso, por outros motivos.

**Identidade de agente virou linha de produto de várias indústrias ao mesmo tempo.** A Visa
anunciou o Trusted Agent Protocol com um Verified Agent ID emitido por ela e um registro de
consentimento assinado pelo emissor do cartão; a Mastercard, o Agent Pay, com Agentic Tokens
que amarram uma credencial tokenizada a um agente, a um escopo de comerciante e a uma política
de consentimento. No campo aberto, a Vouched doou o MCP-I — desde então renomeado KYA-OS — à
Decentralized Identity Foundation em março de 2026; o framework especifica quatro perguntas de
identidade (quem é o agente, via DID; quem autorizou, via Verifiable Credential; qual o escopo
delegado, via credencial de política legível por máquina; e qual a reputação, via trilha), em
três níveis de conformidade. Na IETF, o rascunho informativo `draft-klrc-aiagent-auth-00`
(02/03/2026), de Kasselman, Lombardo, Rosomakho e Campbell, monta a mesma coisa a partir de
peças existentes: identificadores WIMSE, credenciais curtas ligadas criptograficamente (X.509,
JWT ou Workload Identity Token), mTLS e HTTP Message Signatures, OAuth 2.0 para delegação,
*transaction tokens* para cadeias internas, e log de auditoria obrigatório. O rascunho rejeita
explicitamente a chave de API estática como identidade de agente.

**Agente falando com agente já tem protocolo estável.** O A2A, anunciado pelo Google em
09/04/2025 e doado à Linux Foundation em 23/06/2025, chegou à v1.0 em março de 2026 — a
primeira versão estável e de produção — com Signed Agent Cards, isto é, assinatura
criptográfica no cartão de capacidades que permite ao agente receptor verificar que ele foi
emitido pelo dono do domínio. O post de aniversário, de abril de 2026, fala em mais de cem
empresas apoiando o projeto.

**Isolamento descartável já é barato.** Firecracker inicia em torno de 125 ms com menos de
5 MiB de sobrecarga por VM; a E2B constrói seus sandboxes sobre ele, com kernel, sistema de
arquivos e espaço de rede próprios por sandbox, e *snapshot-restore* na faixa de dezenas de
milissegundos — o que torna viável pausar e retomar uma sessão de agente de muitos turnos.

**Dinheiro entrou.** Segundo o levantamento trimestral da DataTribe citado pela Help Net
Security em 31/07/2026, segurança de IA foi a maior categoria de investimento semente em
cibersegurança no 2º trimestre de 2026, perto de um quarto de todos os negócios — e quase toda
empresa dessa categoria mirava sistemas agênticos. Produtos de segurança de agente também
apareceram dentro de segurança de nuvem, de aplicação, de teste de invasão e de risco de
terceiros.

### 3.2 O que existe e ainda não funciona

**A defesa contra injeção não sobrevive a atacante adaptativo.** O OWASP colocou a injeção de
prompt em primeiro lugar pelo terceiro ano seguido, em lista publicada em 04/08/2026 — e desta
vez validou os votos dos especialistas contra cerca de dez mil registros de incidentes reais,
o que revelou desalinhamento entre o que a prática teme e o que de fato acontece. Excessive
Agency foi o maior salto, de LLM06 para LLM03. Steve Wilson, co-presidente do projeto, colocou
a diferença com precisão: injeção de prompt "é fundamentalmente diferente de uma
vulnerabilidade como injeção de SQL, onde sabemos como projetar um conserto definitivo". A
recomendação formal é tratar como risco operacional contínuo. Do lado acadêmico, o trabalho de
Narisetty, Kore, Kattamanchi e Kumarapu (arXiv, 25/06/2026) mede as defesas fora da banda —
CaMeL, FIDES, Progent, RTBAS, FORGE — e encontra, no Progent com Qwen2.5-7B, queda de 25,8%
para 4,2% de sucesso de ataque, e 2,6% sob ataque adaptativo artesanal. O alerta dos autores é
metodológico e vale mais que o número: as defesas são validadas só em benchmark estático, o
mesmo padrão que fez as defesas dentro da banda parecerem eficazes até que ataques cientes da
defesa passassem a ter sucesso acima de 90%.

**A identidade de agente não tem base conceitual pronta.** Otsuka, Toyoda e Leung (arXiv,
submetido em 25/04/2026) definem identidade de IA como a correspondência entre o que um agente
alega ser e o que ele demonstravelmente faz, e listam cinco lacunas abertas: verificação de
intenção semântica, responsabilização em delegação recursiva, integridade da identidade do
agente, opacidade de governança e execução, e sustentabilidade operacional. A conclusão
estrutural é a que importa para este mapa: "estender arcabouços humanos a agentes sem
modificação estrutural produz falhas sistemáticas".

**Nenhum emissor virou o emissor.** Há pelo menos quatro modelos vivos e incompatíveis —
identidade tokenizada por rede de cartão, cabeçalho de atestação, credencial verificável com
mandato assinado, e identificador descentralizado. A iniciativa do NIST para padronizar
autenticação e autorização de agentes é de 2026 e ainda não produziu norma.

### 3.3 Quem constrói

Seis atores, de naturezas diferentes — o que por si só diz algo sobre o estado do campo:

| Ator | O que traz | Interesse |
|---|---|---|
| **Cloudflare** (com Google, Amazon, Akamai) | Web Bot Auth, AI Crawl Control, pay per crawl | ser a camada onde o tráfego de agente é verificado e cobrado |
| **Redes de cartão** (Visa, Mastercard) | Verified Agent ID, Agentic Tokens | ser o diretório de agentes confiáveis no comércio |
| **DIF / Vouched** | MCP-I / KYA-OS, DIDs e VCs | padrão aberto e descentralizado, sem emissor único |
| **IETF / WIMSE** | `draft-klrc-aiagent-auth`, `draft-meunier-web-bot-auth` | reaproveitar o que já existe, evitar protocolo novo |
| **Linux Foundation / Google** | A2A v1.0, Signed Agent Cards | interoperabilidade entre agentes de fornecedores diferentes |
| **NIST** | AI Agent Standards Initiative (2026) | norma federal para autenticar, autorizar e interoperar |

### 3.4 Os números que descrevem a adoção hoje

- 53% do tráfego web automatizado em 2025; humano em 47% (Imperva, 29/04/2026).
- 27% dos ataques de bot contra APIs; serviços financeiros com 24% dos ataques e 46% das tomadas
  de conta (mesma fonte).
- Injeção de prompt em 1º lugar no OWASP por três anos seguidos; Excessive Agency de LLM06 para
  LLM03; validação contra ~10.000 registros de incidentes (04/08/2026).
- Ataque bem-sucedido em 25,8% dos casos sem defesa e 4,2% com Progent, em benchmark estático
  (arXiv 2606.26479).
- Firecracker: ~125 ms de boot, <5 MiB de sobrecarga por VM.
- A2A v1.0 em março de 2026, com mais de cem empresas apoiando.
- Rastreador não declarado da Perplexity: 3 a 6 milhões de requisições diárias, contra 20 a 25
  milhões do declarado, observado em dezenas de milhares de domínios (Cloudflare, 04/08/2025).
- Segurança de IA como maior categoria do investimento semente em cibersegurança no 2T2026,
  perto de um quarto dos negócios (DataTribe via Help Net Security, 31/07/2026).
- **Sem número encontrado** para: proporção do tráfego de agente que hoje é assinado; número de
  identidades de agente emitidas no mundo; custo médio de um incidente causado por agente.

### 3.5 Os dois casos concretos que já aconteceram

São o material mais valioso desta seção, porque não são promessa — são fato datado.

**Evasão.** Em 04/08/2025 a Cloudflare publicou que, ao ser bloqueada, a Perplexity passava a
usar um navegador genérico imitando o Chrome no macOS em vez do seu agente declarado. A
Cloudflare retirou a empresa do registro de bots verificados, publicou assinaturas de impressão
digital do rastreador não declarado e liberou a heurística de bloqueio para todos os clientes,
inclusive os gratuitos.

**Autorização.** Em 09/03/2026, no caso 25-cv-09514-MMC (Distrito Norte da Califórnia), a juíza
Maxine M. Chesney concedeu liminar barrando a Perplexity de usar agentes do navegador Comet
para acessar áreas protegidas por senha do site da Amazon, e determinando a destruição dos
dados de clientes já obtidos. A liminar define o objeto restrito como "qualquer software ou
programa de computador implantado no navegador Comet da Perplexity que possa, autônoma ou
semi-autonomamente, executar ações". O eixo da decisão é a distinção que organiza boa parte
deste mapa: o acesso se deu "com a permissão do usuário da Amazon, mas sem autorização da
Amazon" — o que, sob a CFAA e o precedente *Facebook v. Power Ventures*, bastou. Pesou também
que o agente transmitia a cadeia de identificação do Chrome, fazendo-se passar por humano,
contra o que a Amazon descreveu como padrão da indústria de usar identificador distinto para
requisição iniciada por IA.

### 3.6 Nota sobre o Brasil

O Brasil chega a este assunto pelo lado do Estado, não pelo do produto. A Instrução Normativa
RFB 2.320, em vigor desde 06/04/2026, condiciona o acesso aos serviços digitais da Receita
Federal à conta gov.br com nível de segurança compatível e **proíbe explicitamente o uso de
sistemas automatizados ou intermediários não autorizados**, sob pena de interrupção de acesso,
bloqueio do representante ou cancelamento de procurações. A norma atinge diretamente
contadores, escritórios e fornecedores de software fiscal — ou seja, o Brasil já tem uma regra
em vigor que trata acesso por agente como infração administrativa, antes de ter qualquer regra
que diga como um agente se identificaria legitimamente. No plano legislativo, o PL 2338/2023
foi aprovado no Senado em 10/12/2024 e segue na Câmara, sem sanção; a ANPD ganhou poderes
ampliados de fiscalização em 2026. O efeito prático é uma assimetria: a proibição existe, a
via legítima não — e é essa assimetria que o efeito `e12` deste mapa persegue.

## 4. As disrupções-raiz

Quatro raízes. Cada uma passa pelas quatro perguntas do critério de maturidade, e cada uma traz
o ator com incentivo para bloqueá-la.

### Recusas registradas antes de começar

- **Firewall, WAF, antivírus, OAuth para humanos, MFA** — recusados como raiz: adoção em maioria
  há mais de uma década. Tratados como contexto na seção 3.
- **Contêiner (Docker) como unidade de isolamento** — recusado: adoção em maioria desde ~2017. O
  que é emergente não é o contêiner, é o isolamento *por tarefa e descartável*, que entra na R2.
- **Firecracker em si** — recusado como raiz: maduro desde 2018 como base do AWS Lambda. Entra
  como pré-condição, não como ruptura.
- **CAPTCHA** — recusado: maduro, e em processo de deixar de funcionar. Vira consequência
  (`e10.1`), não causa.
- **robots.txt** — recusado: convenção estabelecida desde 1994. O que muda não é o arquivo, é o
  estatuto dele (`e3.1`).
- **"Detecção de bot"** — recusado: mercado maduro. A ruptura é a detecção deixar de ser o
  controle relevante (`e10`).

### R1 — O agente vira principal de segurança, com identidade própria e distinta da do humano

**O que rompe.** Rompe a suposição de que toda ação dentro de uma conta é atribuível à pessoa
dona da conta — suposição sobre a qual foram construídos o log, a auditoria, a cobrança, a
moderação e a atribuição de autoria em toda a web. Rompe também a chave de API estática como
identidade de máquina, e o controle por papel (RBAC) em favor de mandato com escopo, teto e
validade. Não é "autenticação melhor": é um sujeito novo na frase.

**Por que agora, e não há cinco anos.** Porque só agora existe o tráfego e o protocolo. O MCP e
o A2A criaram, em dois anos, um volume de chamadas agente-a-serviço que não existia; o A2A
chegou a v1.0 estável em março de 2026 com Signed Agent Cards; o MCP-I foi doado à DIF no mesmo
mês; o rascunho da IETF é de 02/03/2026; o NIST abriu a iniciativa de padronização em 2026;
Visa e Mastercard emitem identidade de agente para pagar. Em 2021 não havia nem o agente nem o
protocolo — havia chatbot.

**Onde está na difusão.** Produto de nicho migrando para adoção precoce. Há produção real
(A2A v1.0, Agentic Tokens, Web Bot Auth em CDNs), mas nenhum padrão dominante — o que é
exatamente o estágio anterior à maioria.

**O que ainda falta acontecer.** Convergência de emissor ou federação entre emissores;
revogação e rotação em escala de milhões de credenciais efêmeras; nomeação persistente que
sobreviva à troca de modelo; e resposta às cinco lacunas de Otsuka, Toyoda e Leung — sobretudo
delegação recursiva (agente que subdelega) e sustentabilidade operacional.

**Quem bloqueia.** Os candidatos a emissor único, cada um com incentivo para que o registro
seja o seu: rede de cartão, nuvem, fundação aberta e Estado. O efeito da disputa não é o
bloqueio, é a fragmentação — `e1.2`. E, do lado de quem opera, o custo de manter identidade
efêmera em todo subsistema produz a retroação `e1.3`: a volta ao segredo compartilhado no
miolo.

### R2 — A injeção de prompt é reconhecida como risco sem conserto, e a segurança migra da correção para a contenção

**O que rompe.** Rompe o ciclo de vida de vulnerabilidade que organiza a segurança de software
desde os anos 1990: achar, publicar, corrigir, fechar. Uma classe de risco que a própria
autoridade do campo declara não ter conserto definitivo conhecido não cabe nesse ciclo. Rompe
também, na prática, a separação entre dado e instrução — o agente lê conteúdo de terceiro e o
conteúdo pode dar ordem. O que substitui a correção é arquitetura: privilégio mínimo por ato,
isolamento descartável, alçada declarada, desfazer garantido.

**Por que agora, e não há cinco anos.** Porque só agora a declaração é institucional e apoiada
em incidente, não em opinião: o OWASP de 04/08/2026 validou a lista contra ~10.000 registros
reais e moveu Excessive Agency para o terceiro lugar. E porque só agora há defesas fora da
banda maduras o bastante para serem avaliadas adversarialmente — e para se descobrir que elas
também não resolvem, só reduzem.

**Onde está na difusão.** Adoção precoce. O *reconhecimento* já é maioria entre especialistas
de segurança; a *arquitetura de contenção* como padrão de produto, não.

**O que ainda falta acontecer.** Que o custo do isolamento por tarefa caia a ponto de ser o
default e não a opção cara; um padrão de rótulo de proveniência e privilégio para conteúdo
dentro do contexto; e contratos e apólices que aceitem escrever "risco residual permanente" em
vez de "conformidade".

**Quem bloqueia.** Os fabricantes de modelo, cujo incentivo comercial é prometer robustez do
próprio modelo — e cuja promessa, quando acreditada, adia o investimento em contenção
arquitetural nas empresas que a compram. É o efeito `e7.1`, e ele é o motivo de o mapa esperar
que a virada venha de um incidente, não de um argumento.

### R3 — A web passa a responder por quem age, não por quem paga: agente assinado, agente não declarado e humano deixam de receber a mesma resposta

**O que rompe.** Rompe o contrato tácito da web aberta — um GET é um GET, a mesma URL devolve a
mesma coisa para qualquer um. Rompe o robots.txt como convenção de honra, substituído por prova
criptográfica. Rompe o modelo publicitário baseado em impressão vista por olho humano, quando a
maioria do tráfego não tem olho. E rompe o acesso anônimo como estado padrão.

**Por que agora, e não há cinco anos.** Porque a assinatura ficou barata e o volume ficou
insustentável ao mesmo tempo: RFC 9421 mais Ed25519 rodando em CDN, com bots já em 53% do
tráfego. Há cinco anos, bloquear bot era rate limiting e lista de IP; hoje é verificação
criptográfica com preço por requisição.

**Onde está na difusão.** Adoção precoce. Um punhado de intermediários cobre uma fração enorme
da web, o que dá alcance imediato — mas a fatia de agentes que de fato assina é pequena, e o
publicador pequeno não tem como verificar sozinho.

**O que ainda falta acontecer.** Verificação acessível fora dos grandes intermediários; um
mercado com formação de preço, e não tabela unilateral; e — o ponto mais difícil — um
tratamento distinto para o agente que age *por uma pessoa específica, naquele momento*, que é
o caso Comet, e não um rastreador de coleta.

**Quem bloqueia.** De um lado, quem depende de agente para acessar: pessoa com deficiência,
pesquisa acadêmica, jornalismo automatizado, automação pessoal. De outro, as próprias empresas
de agente, para quem a evasão é mais barata que a negociação — com caso documentado e escala
medida. A retroação está em `e10.2` (mercado de parecer humano) e em `e11` (o custo de
verificar tudo).

### R4 — O ato do agente ganha rastro, apólice e jurisdição: a responsabilidade passa a ser atribuída por trilha

**O que rompe.** Rompe "é só uma ferramenta" como resposta jurídica completa. Rompe a
suposição de que a permissão do usuário basta para autorizar o acesso — a liminar de 09/03/2026
separou as duas coisas de forma explícita. Rompe o seguro profissional desenhado para pessoa
habilitada, quando um escritório contrata apólice de responsabilidade civil para os próprios
agentes. E rompe a ideia de que a trilha de auditoria é um detalhe operacional: ela passa a ser
o que decide a disputa.

**Por que agora, e não há cinco anos.** Porque existe decisão judicial com objeto definido — a
liminar define tecnicamente o que é um agente para efeito de proibição —, existe legislação
estadual norte-americana em vigor em 2026 que impede usar a autonomia do sistema como defesa, e
existe seguradora escrevendo apólice. Em 2021 não havia nem ato de agente para julgar.

**Onde está na difusão.** Demo pública migrando para produto de nicho. É a raiz menos madura
das quatro, e por isso a que carrega mais confiança baixa em seus ramos.

**O que ainda falta acontecer.** Um registro de identidade que sustente a trilha (ou seja: R4
depende de R1); jurisprudência além de liminar; portabilidade de reputação entre plataformas; e
o caso-limite — processo contra o agente e não contra o dono — que hoje não existe em nenhuma
jurisdição e está tratado neste mapa como wildcard, não como efeito.

**Quem bloqueia.** As seguradoras, que não sabem precificar o que não sabem medir — e cuja
resposta natural é excluir categorias inteiras de cobertura, o que vira `e14.1.1`. E as
plataformas, para as quais resolver por termo de uso e liminar é mais barato e mais rápido que
negociar padrão aberto: cada vitória judicial reduz o incentivo de participar de um padrão.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente vira principal de segurança, com identidade própria e distinta da do humano
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Todo serviço que aceita agente passa a exigir credencial de agente, e a conta humana deixa de ser o único sujeito do log"
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O consentimento vira artefato assinado e legível por máquina, com escopo, teto e validade, e a interface de consentimento deixa de ser caixa de seleção e vira painel de mandato"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Projetar o momento da delegação vira especialidade de design de interação, com padrões próprios de revogação, simulação prévia e recibo do que foi feito"
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Emissores concorrentes fragmentam o registro de agentes, e um mesmo agente passa a carregar várias identidades conforme o domínio em que age"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Surge o corretor de identidade de agente, que traduz credencial de um emissor para outro, e ele se torna ponto único de censura e de vazamento"
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: "O custo de emitir, rotacionar e revogar identidades efêmeras faz empresas voltarem ao segredo compartilhado nos subsistemas internos, e a identidade de agente fica só na borda"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "A auditoria passa a distinguir borda com identidade de miolo sem identidade, e o incidente típico passa a ser a escalada a partir do miolo"
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O encontro entre agentes de pessoas diferentes vira negociação com protocolo, em que cada lado apresenta credencial, escopo e reputação antes de trocar qualquer conteúdo"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Nasce um gênero de interface, a sala de espera, em que a pessoa vê o que o agente dela e o agente do outro combinaram e pode aprovar ou desfazer"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A conversa entre humanos ganha camada de anotação de proveniência, e a ausência dessa anotação passa a ser lida como informalidade ou como suspeita"
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A reputação do agente, medida por mandatos cumpridos, passa a pesar mais que a marca do fabricante na decisão de aceitar o encontro"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Reputação de agente vira ativo transferível e portanto objeto de compra, aluguel e lavagem, repetindo o mercado de contas envelhecidas de rede social"
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Plataformas de mídia passam a publicar, em formato legível por máquina, o que aceitam de agente quanto a ler, postar, comprar e assinar"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O robots.txt deixa de ser convenção de honra e vira documento de política com força contratual, citável em juízo"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Veículos jornalísticos passam a licenciar leitura por agente em faixas de uso, e o preço do conteúdo deixa de ser por impressão e passa a ser por uso declarado"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Pessoas que dependem de agente para acessar serviços passam a precisar de credencial de agente para exercer direito que antes exerciam sem se identificar"
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Órgãos públicos criam a categoria de agente autorizado de pessoa com deficiência, com emissão estatal, e o acesso assistido deixa de ser tolerado informalmente e passa a ser licenciado"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Quem não obtém a licença, por custo, burocracia ou por usar agente estrangeiro, fica com menos acesso do que tinha antes de existir agente, e a assistência informal passa a ser infração"
                sinal: fraco
                prazo: 2042
                confianca: baixa

  - disrupcao: A injeção de prompt é reconhecida como risco sem conserto, e a segurança migra da correção para a contenção
    efeitos:
      - id: e5
        ordem: 1
        efeito: "O isolamento por tarefa vira o padrão, cada ação do agente roda num ambiente descartável, e executar no ambiente do usuário passa a ser exceção que precisa ser justificada"
        sinal: forte
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O desfazer deixa de ser recurso de aplicação e vira propriedade do ambiente, capaz de reverter a sessão inteira do agente ao estado anterior"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Interfaces passam a mostrar o trabalho do agente como ramo versionado em vez de fio de conversa, e o vocabulário visual do software de criação migra para o chat"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A latência e o custo do isolamento entram no orçamento de qualquer produto com agente, e os times passam a escolher entre seguro e lento ou rápido e limitado a leitura"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Emerge uma classe de produto somente-propõe, em que o agente nunca escreve e cada escrita exige um gesto humano por ato"
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "O conteúdo que entra no contexto do agente passa a ser rotulado por proveniência e privilégio, e texto de terceiro deixa de poder dar ordem"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Publicar na web passa a implicar assinar o que se publica, porque conteúdo sem procedência entra no agente com privilégio mínimo e na prática não é lido"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O alcance de um texto passa a depender de infraestrutura de assinatura, e quem publica fora dela desaparece do repertório dos agentes, numa forma nova de invisibilidade editorial"
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A injeção migra do texto para a mídia, com instrução embutida em imagem, áudio e vídeo, e a moderação de mídia passa a ser também controle de superfície de ataque"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Plataformas passam a transcodificar todo arquivo recebido para destruir carga oculta, e a fidelidade ao original vira privilégio pago"
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Seguro e contrato passam a exigir risco residual declarado, e produtos de agente passam a vir com limite de alçada escrito, o que freia a expansão de capacidade"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Fabricantes de modelo seguem prometendo robustez do próprio modelo, e as empresas que acreditam na promessa adiam o investimento em contenção arquitetural"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O incidente de virada acontece numa empresa que confiou na robustez do modelo e não isolou, e ele vira o caso didático que muda a régua do setor"
                sinal: fraco
                prazo: 2035
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Segurança de agente vira linha de orçamento própria, separada de segurança de aplicação, com fornecedor, métrica e equipe próprios"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A consolidação absorve os independentes, as capacidades de identidade não humana viram módulo das suítes de identidade, e o comprador deixa de escolher ferramenta e passa a escolher plataforma"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A dependência de duas ou três plataformas de identidade de agente cria ponto único de falha global, e a indisponibilidade de uma delas trava atendimento, compra e publicação ao mesmo tempo"
                sinal: fraco
                prazo: 2038
                confianca: baixa

  - disrupcao: A web passa a responder por quem age, e não por quem paga, distinguindo agente assinado, agente não declarado e humano
    efeitos:
      - id: e9
        ordem: 1
        efeito: "A mesma URL passa a devolver conteúdo, preço e limite diferentes conforme a requisição venha de humano, de agente assinado ou de agente não declarado"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "O design de página se desdobra em duas saídas, uma para leitura humana e outra para consumo por agente, e a segunda passa a ser responsabilidade de quem projeta"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "A versão para agente se torna a canônica, porque é ela que alimenta as respostas que a maioria lê, e a página humana vira vitrine de marca"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "Publicidade deixa de ser paga por impressão e passa a ser paga por presença em resposta de agente, com a medição disputada entre publicador e plataforma"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: "Veículos passam a escrever para ser citáveis por agente, com parágrafo autossuficiente, dado nomeado e fonte declarada, e a forma do texto jornalístico muda como mudou com a otimização para busca"
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "Distinguir humano de máquina deixa de funcionar como controle, porque o agente age por uma pessoa, e o controle migra de quem é para com que mandato"
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "O CAPTCHA perde a função e é substituído por prova de mandato, que pergunta quem autorizou, para quê e até quando, em vez de perguntar se o visitante é humano"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Desaparece o atrito que hoje exclui pessoa com deficiência do cadastro, e em seu lugar aparece o atrito de obter e manter mandato válido, que exclui quem não tem documento, banco ou aparelho"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "Nasce um mercado de parecer humano, com serviços que fazem o agente passar por pessoa para atravessar muro de preço ou bloqueio, e a evasão vira produto vendido"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: "A evasão se profissionaliza a ponto de o sinal assinado valer mais que o sinal parece humano, e o anonimato deixa de ser estado padrão e passa a ser um estado que se compra"
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: "O custo de verificar assinatura em cada requisição, num tráfego majoritariamente automatizado, empurra a verificação de universal para amostragem"
        sinal: fraco
        prazo: 2035
        confianca: baixa
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "A amostragem cria uma janela estatística explorável, e o ataque deixa de ser burlar a assinatura e passa a ser caber na fatia não verificada"
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "A defesa passa a ser reputacional e probabilística, confiança vira um número exibido na interface, e o usuário aprende a ignorá-lo como aprendeu a ignorar o cadeado do navegador"
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "Estados passam a exigir registro e identificação de agentes que operam sobre serviços públicos, e o acesso automatizado não licenciado vira infração administrativa"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "Fornecedores de software contábil, jurídico e de saúde passam a operar como intermediários licenciados, e o mercado se fecha para quem não tem porte para se licenciar"
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "A camada de acesso aos serviços públicos brasileiros se concentra em poucas licenciadas, e a inovação em interface pública migra de fora para dentro dos contratos"
                sinal: fraco
                prazo: 2041
                confianca: baixa

  - disrupcao: O ato do agente ganha rastro, apólice e jurisdição, e a responsabilidade passa a ser atribuída por trilha
    efeitos:
      - id: e13
        ordem: 1
        efeito: "A trilha de auditoria do agente vira prova, e quem não registra o que o agente fez perde a disputa por falta de rastro"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "Gravar a sessão inteira do agente vira obrigação contratual, e o log se torna o maior acervo de dado pessoal da empresa"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "Surge a retenção seletiva por desenho, em que o log guarda a decisão e descarta o conteúdo, e o que conta como prova suficiente sem ser dado pessoal vira disputa técnica e jurídica recorrente"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "A pessoa passa a ter direito de ler em linguagem comum o que o agente dela fez, e o relatório de atividade do agente vira peça de comunicação em vez de registro técnico"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e13.2.1
                ordem: 3
                efeito: "O resumo do que o agente fez passa a ser gerado por outro modelo, e a disputa vira quem audita o auditor, com o próprio resumo virando alvo de manipulação"
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: "Seguradoras passam a precificar agente por trilha, calculando prêmio sobre comportamento observado em vez de declaração do contratante"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "O seguro vira o regulador de fato, porque o que a apólice cobre define o que o agente pode fazer, e ele se ajusta mais rápido e mais fino que a lei"
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "Categorias inteiras de uso ficam sem cobertura e simplesmente não são construídas, e a apólice passa a funcionar como censura prévia de produto"
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e14.2
            ordem: 2
            efeito: "O prêmio passa a depender de isolamento comprovado, e o sandbox vira item de contrato em vez de escolha de engenharia"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e14.2.1
                ordem: 3
                efeito: "Certificadoras independentes de contenção aparecem e viram gargalo, repetindo o papel das auditorias de conformidade e o mesmo problema de captura pelo auditado"
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: "A distinção entre agir com permissão do usuário e agir com autorização da plataforma vira o eixo do conflito, e o usuário descobre que não pode delegar o que não possui"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "Plataformas passam a oferecer canal oficial para agente, com preço e escopo, como alternativa ao bloqueio, e quem não oferece empurra o agente para a evasão"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: "O canal oficial vira o produto principal da plataforma, e a interface humana passa a ser mantida como obrigação legal e vitrine, deixando de receber investimento de design"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e15.2
            ordem: 2
            efeito: "O usuário perde a capacidade de automatizar o próprio acesso a serviços que usa e paga, e a automação pessoal hoje tolerada passa a ser violação contratual"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e15.2.1
                ordem: 3
                efeito: "Nasce um movimento por direito ao agente próprio, análogo ao direito de reparo, cujo desfecho depende de decisão de tribunal e não de escolha de produto"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e16
        ordem: 1
        efeito: "A responsabilidade por trilha torna caro delegar, e parte do público volta a fazer à mão o que o agente faria, por não querer responder pelo que não viu"
        sinal: fraco
        prazo: 2036
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: "Produtos passam a vender feito por pessoa com testemunho como diferencial verificável, e o selo de ausência de agente vira categoria de mercado"
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: "O selo é falsificado em escala, a prova de autoria humana fica tão cara quanto a prova de identidade de agente, e as duas infraestruturas convergem no mesmo registro"
                sinal: fraco
                prazo: 2044
                confianca: baixa
```

### O que o bloco não diz

**Os mecanismos, um por ramo.** A regra `porque <efeito pai> faz <mecanismo>` não cabe no YAML.
Aqui estão os que sustentam cada primeira ordem, e os que mais importam nas ordens seguintes.

`e1` acontece porque, quando o log deixa de distinguir quem agiu, a empresa não consegue nem
cobrar certo, nem moderar certo, nem se defender em juízo — e a liminar de 09/03/2026 mostrou
que a plataforma que consegue mostrar "isto foi agente não declarado" ganha. `e1.1` deriva de
`e1` porque uma credencial que carrega escopo e validade precisa que alguém decida o escopo e a
validade — e esse alguém é o usuário, o que obriga a existir uma tela. `e1.2` deriva porque
quatro emissores com modelos incompatíveis e nenhum árbitro produzem, por construção,
identidades múltiplas; a classe de referência é o e-mail autenticado (SPF em 2004, DKIM em
2007, DMARC em 2012), que em mais de vinte anos nunca convergiu num emissor e produziu
exatamente esse mosaico. `e1.3` é a retroação desta raiz: a lacuna de "sustentabilidade
operacional" apontada por Otsuka, Toyoda e Leung não é teórica — rotacionar credencial efêmera
em todo subsistema tem custo, e o caminho de menor resistência dentro de uma empresa é manter
o segredo compartilhado onde ninguém de fora olha.

`e2` acontece porque o A2A já resolveu o transporte e a descoberta (Agent Cards assinados), o
que deixa a confiança como único problema restante no encontro; `e2.1` deriva porque uma
negociação cujo resultado obriga a pessoa precisa ser mostrada à pessoa antes de obrigar, e hoje
não há gênero de interface para isso. `e2.2` é o mais frágil do ramo e por isso está com sinal
fraco e confiança baixa: reputação portátil entre plataformas é algo que a web tentou muitas
vezes e nunca entregou.

`e3` acontece porque publicar política em prosa não serve para quem lê máquina; `e3.1` deriva
porque, a partir do momento em que a política é legível por máquina e verificável
criptograficamente, ignorá-la deixa de ser descortesia e vira elemento de prova — e a liminar
de março já usou "padrão da indústria" como argumento. `e3.1.1` é a consequência econômica: se
o acesso é verificável e cobrável, o preço acompanha o uso declarado, não a impressão.

`e4` é o efeito de "quem perde" desta raiz, e ele não é especulativo: o conflito entre detecção
de automação e tecnologia assistiva é estrutural e conhecido há mais de uma década — o texto da
American Foundation for the Blind formula a contradição de forma direta, qualquer coisa legível
por máquina é derrotável por máquina. `e4.1` deriva porque a solução administrativa previsível
para um bloqueio que atinge direito é a licença — e o Brasil já tem o bloqueio (IN RFB 2.320) e
não tem a licença.

`e5` acontece porque, se não há conserto para a injeção, o único investimento com retorno
garantido é reduzir o que o ataque bem-sucedido alcança; e o preço já caiu o bastante para isso
ser possível (Firecracker a ~125 ms e <5 MiB). `e5.1` deriva porque um ambiente descartável dá,
de graça, a capacidade de reverter — e o que é tecnicamente de graça tende a virar promessa de
produto. `e5.1.1` é onde isso encosta em design: reverter só faz sentido se a pessoa puder ver
os estados, e ver estados é interface de versionamento, não de conversa.

`e6` acontece porque a única defesa arquitetural contra "texto de terceiro dá ordem" é marcar de
onde veio cada pedaço do contexto; `e6.2` deriva porque, fechada a porta do texto, a carga
migra para o canal que o modelo também lê — e modelo multimodal lê imagem, áudio e vídeo.
`e6.1` é o ramo mais incerto e teve o prazo empurrado na seção 7.

`e7` acontece porque risco que não se elimina só se aloca — em contrato ou em apólice; `e7.1` é
o efeito de quem bloqueia, e o mecanismo é comercial, não técnico: uma empresa que compra a
promessa de robustez do modelo economiza o custo de contenção no curto prazo. `e7.1.1` não é
previsão de catástrofe, é regularidade histórica: a adoção de segunda autenticação em massa
veio depois de vazamentos, não antes.

`e8` acontece porque orçamento segue categoria de fornecedor, e a categoria já se formou — foi
a maior fatia do investimento semente em cibersegurança no 2T2026. `e8.1` deriva da dinâmica
normal do setor de segurança, em que capacidade nova vira módulo de suíte; `e8.1.1` é a
consequência que ninguém compra deliberadamente: concentração é eficiência até o dia da queda.

`e9` acontece porque os dois lados da equação já existem — assinatura barata e tráfego
majoritariamente automatizado; `e9.1` deriva porque, havendo dois destinatários com necessidades
opostas (ritmo e layout de um lado, estrutura e licença do outro), otimizar um degrada o outro,
e a saída é bifurcar. `e9.2` deriva da mesma lógica aplicada à receita: impressão medida em olho
humano perde sentido quando o olho humano é minoria do tráfego.

`e10` acontece porque a pergunta "é humano?" passa a ter resposta irrelevante: no caso Comet o
agente agia por uma pessoa real, com senha real, e mesmo assim o acesso foi considerado não
autorizado — o que decide não é a natureza do requisitante, é o mandato. `e10.1` deriva
diretamente: o CAPTCHA responde à pergunta errada. `e10.2` é a retroação: onde há muro de preço,
há mercado para atravessá-lo, e já existe caso documentado em escala de milhões de requisições
diárias.

`e11` é a retroação econômica e ecológica desta raiz, e está com confiança baixa porque o
mecanismo depende de uma premissa que pode não valer (que o custo de verificação cresça mais
rápido que o barateamento do hardware). Está no mapa porque, se valer, ele reabre tudo: `e11.1`
transforma o problema de criptográfico em estatístico.

`e12` é o efeito político, e tem nome e data em vez de "reguladores criam categoria nova": a
Receita Federal, pela IN RFB 2.320 em vigor desde 06/04/2026, já proíbe acesso automatizado a
serviços digitais sob pena de bloqueio. `e12.1` deriva porque a via de conformidade que resta a
quem precisa automatizar é ser intermediário autorizado, e autorização tem custo fixo — o que
favorece quem tem porte.

`e13` acontece porque a liminar de março decidiu com base em evidência de acesso; a partir daí,
não registrar é escolher perder. `e13.1` deriva porque contexto de agente contém tudo o que o
agente leu — inclusive o que ele leu por engano. `e13.2` é o efeito de interface, e o mecanismo
é regulatório e comercial ao mesmo tempo: quem responde por um ato quer entender o ato.

`e14` acontece porque já há apólice sendo contratada para agente e seguradora oferecendo produto
para pequena empresa, e prêmio sem dado observado é chute caro. `e14.1` deriva porque a apólice
se reescreve por trimestre e a lei por legislatura. `e14.2` liga esta raiz à R2: a apólice
premia o que reduz sinistro, e o que reduz sinistro é contenção.

`e15` acontece porque a decisão de 09/03/2026 é o primeiro precedente com objeto definido, e ele
separou permissão de autorização. `e15.1` deriva porque bloqueio puro custa receita à
plataforma, e canal pago converte o conflito em produto. `e15.2` é quem perde: o usuário que
hoje automatiza o próprio acesso e amanhã descobre que a permissão dele não basta.

`e16` é a retroação cultural, e o mecanismo é de responsabilidade, não de gosto: quando o ato do
agente responsabiliza a pessoa, delegar deixa de ser só conveniência.

### Cobertura por STEEP e por quem perde

- **Social:** `e4`, `e4.1`, `e4.1.1`, `e10.1.1`, `e16`.
- **Tecnológico:** `e1`, `e5`, `e6`, `e9`, `e11`.
- **Econômico:** `e8`, `e3.1.1`, `e9.2`, `e12.1`, `e14`.
- **Ecológico:** `e11` apenas — e é pouco. O custo energético de verificar criptograficamente um
  tráfego majoritariamente automatizado é o único ângulo ecológico que o mapa encontrou com
  mecanismo; o resto do que se poderia dizer aqui seria genérico. **Categoria quase vazia,
  registrada como tal.**
- **Político:** `e12`, `e12.1`, `e15`, `e15.2.1`, `e4.1`.
- **Quem perde:** pessoa com deficiência e quem depende de acesso assistido (`e4`, `e4.1.1`,
  `e10.1.1`); publicador pequeno e independente (`e6.1.1`); usuário que automatiza o próprio
  acesso (`e15.2`); fornecedor de software sem porte para licença (`e12.1`); profissional de
  design da interface humana quando o canal de agente vira o produto (`e15.1.1`); e quem escreve
  jornalismo em forma que não é citável por agente (`e9.2.1`).

### Convergências

Três, e a primeira é o achado mais forte deste mapa.

1. **O mandato legível por máquina é o ponto de encontro de três raízes.** `e1.1` (R1, pela via
   da identidade), `e10.1` (R3, pela via do controle de acesso) e `e13.2` (R4, pela via da
   prova) chegam ao mesmo objeto por caminhos que não se falam: um documento assinado que diz
   quem autorizou, o quê, com que teto e até quando. Quando três raízes independentes convergem
   num artefato, esse artefato é a aposta mais segura do mapa — e ele é, notavelmente, um
   problema de design de interação antes de ser um problema de criptografia.
2. **O fim do anonimato como estado padrão** é onde `e6.1` (só conteúdo com procedência é lido
   pelo agente) encontra `e10.2.1` (o sinal assinado passa a valer mais que o sinal "parece
   humano"). Os dois vêm de raízes diferentes — contenção de injeção e precificação de tráfego —
   e produzem a mesma web: uma em que não se assinar é não existir.
3. **Prova de humano e prova de agente convergem na mesma infraestrutura** (`e16.1.1`). O selo
   "feito por pessoa" e a credencial de agente acabam pendurados no mesmo registro, porque ambos
   são a mesma pergunta com sinal trocado.

### Retroalimentações

- **Ciclo que reforça R3:** `e9` (a web responde diferente por quem age) produz `e10.2` (mercado
  de parecer humano), que produz mais evasão, que justifica mais verificação, que aprofunda
  `e9`. É um ciclo positivo clássico de corrida armamentista, e o freio dele é `e11` (o custo de
  verificar), não uma decisão de ninguém.
- **Ciclo que enfraquece R1:** `e1` (identidade em toda parte) produz `e1.3` (custo operacional
  insustentável no miolo), que reduz a cobertura efetiva da identidade, o que enfraquece a
  própria premissa de `e1`. A identidade de agente pode acabar sendo real na borda e ficção no
  interior dos sistemas.
- **Ciclo que atravessa R2 e R4:** `e14.2` (o prêmio depende de isolamento comprovado) reforça
  `e5` (isolamento por tarefa vira padrão), que reduz sinistro, que barateia o prêmio, que
  aumenta a adoção do isolamento. É o único ciclo do mapa em que o incentivo econômico e a
  segurança apontam para o mesmo lado.

### Contradições não resolvidas

- **`e6.1` × `e9.1.1`.** Em `e6.1`, conteúdo não assinado deixa de ser lido pelo agente, o que
  exigiria toda a web assinar. Em `e9.1.1`, a versão para agente vira canônica e a humana vira
  vitrine — o que supõe que publicar para agente é barato e generalizado. As duas juntas
  implicam que publicar fica caro e fácil ao mesmo tempo. O que decide entre elas é quanto custa
  assinar: se a assinatura tiver um equivalente do Let's Encrypt, vence `e9.1.1`; se não tiver,
  vence `e6.1.1` e a invisibilidade editorial.
- **`e1` × `e1.3`.** Identidade por agente em toda parte e volta ao segredo compartilhado no
  miolo não podem valer simultaneamente na mesma organização. Ambas continuam no mapa porque o
  que decide é o custo operacional em 2032, que hoje ninguém mediu — e é a lacuna que o paper de
  identidade nomeia.
- **`e16` × `e5.2.1`.** Voltar a fazer à mão por medo de responder e ter um agente que só propõe
  e nunca escreve resolvem o mesmo receio de formas incompatíveis — uma abandona o agente, a
  outra o rebaixa. Se `e5.2.1` funcionar bem, `e16` não acontece. O que decide é se o gesto de
  aprovação por ato é suportável ou cansativo, e isso é uma pergunta de design, não de
  tecnologia.

### As classes de referência usadas para datar

Nenhum prazo aqui é chute; cada faixa vem de um caso comparável, declarado.

| Classe de referência | O que ela mede | Onde foi usada |
|---|---|---|
| HTTPS: SSL em 1995, maioria das páginas só por volta de 2017, com o Let's Encrypt (2015) como virada | 20+ anos de padrão de segurança até virar default, com um evento de barateamento no meio | `e6.1` (2038), `e9` (2029 para a distinção, não para a universalidade) |
| SPF/DKIM/DMARC: 2004, 2007, 2012 — e ainda incompleto em 2026 | padrão federado de identidade que nunca converge em emissor único | `e1.2` (2032), `e1.2.1` (2037) |
| EMV nos EUA: transferência de responsabilidade em outubro de 2015, adoção majoritária em ~5 anos | quando a responsabilidade muda de lado, a adoção acelera | `e14` (2033), `e14.2` (2035), `e7` (2033) |
| Certificate Transparency: proposta em 2013, exigida pelo Chrome em 2018 | 5 anos de proposta a mandato quando há um ponto de imposição concentrado | `e3.1` (2033), `e9.1` (2032) |
| OAuth: 2007 a domínio prático em 2012-2015 | 6 a 8 anos para um padrão de delegação virar o modo normal | `e1` (2030), `e1.1` (2033) |
| reCAPTCHA v1 (2007) a invisível v3 (2018) | 11 anos para um mecanismo de verificação humana mudar de forma | `e10.1` (2034) |
| Otimização para busca: web indexável nos anos 1990, forma do texto jornalístico alterada até meados dos 2000 | ~10 anos para um canal de distribuição reescrever a forma do conteúdo | `e9.2.1` (2038) |
| GDPR: proposta em 2012, vigência em 2018, multas relevantes em 2019-2021 | ~9 anos de proposta a execução efetiva | `e12` (2032), `e15.2.1` (2039) |
| Pix: lançado em novembro de 2020, maioria dos brasileiros em ~2 anos | adoção rápida quando o ator central impõe e o custo é zero | usado como contraponto na nota sobre o Brasil, para justificar `e12.1` em 2035 e não em 2040 |
| Realidade virtual de consumo: mais de 10 anos de demo pública sem 10% de adoção | o caso de referência de que demo não vira adoção | usado para manter `e2.2` e `e16.1` em confiança baixa |

### Regra de parada

A derivação parou onde deixou de haver troca de ator ou de mecanismo. Três exemplos do que
**não** virou quarta ordem, com o motivo:

- Depois de `e1.1.1` (delegação vira especialidade de design), o passo seguinte natural seria
  "as ferramentas de design incorporam componentes de mandato". Mesmo ator, mesmo mecanismo, só
  mais adiante no tempo: é `e1.1.1` amadurecendo, não outra ordem.
- Depois de `e10.2.1` (anonimato vira estado comprável), o passo seguinte seria "aumenta a
  desigualdade de acesso". Não há ator novo nem mecanismo novo — é a mesma coisa dita em nível
  de abstração maior. Cortado.
- Depois de `e14.1.1` (apólice como censura prévia), o passo seguinte seria "o mercado de seguro
  se concentra". Mesmo mecanismo do `e8.1`; reconectado ali em vez de duplicado.

### Teste da causa solta

Aplicado a todos os efeitos de segunda e terceira ordem. Dois não passaram e foram reconectados
ou removidos — o registro completo está na seção 7 e os removidos, na seção 12. Dois casos que
passaram por pouco e ficaram, com a ressalva declarada:

- `e8.1` (consolidação do mercado) aconteceria de qualquer forma, porque consolidação é a
  dinâmica normal do setor de segurança. Ficou porque **o objeto** da consolidação — identidade
  não humana — só existe por causa de R1, e o efeito de terceira ordem (`e8.1.1`, ponto único de
  falha em identidade de agente) é específico da raiz. Se for lido isoladamente, é genérico; lido
  no ramo, não é.
- `e13.1` (log vira acervo de dado pessoal) também decorreria de qualquer aumento de telemetria.
  Ficou pelo mesmo motivo: o que é registrado aqui é o contexto do agente, que contém o que ele
  leu por engano — categoria de dado que não existe em log convencional.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. Um degrau de isolamento abaixo da microVM.**
Onde foi visto: na ausência. A microVM já tem números publicados e bons — Firecracker em torno
de 125 ms com menos de 5 MiB por VM, E2B com kernel e rede próprios por sandbox,
*snapshot-restore* em dezenas de milissegundos. O sinal fraco é que a busca por um degrau mais
barato que isso, em isolamento por tarefa, **não retornou nada**: a consulta sobre sandbox de
agente devolveu microVM, gVisor e contêiner endurecido, e nada abaixo. Um patamar de custo
ainda menor é exatamente o tipo de coisa que quase não aparece hoje e mudaria o mapa inteiro se
crescesse. O que mudaria: se o isolamento por tarefa custar ordens de grandeza menos que
microVM, `e5` chega antes de 2031 e `e5.2` (o dilema entre seguro e rápido) simplesmente não
acontece — some o efeito de orçamento e, com ele, boa parte da pressão que produz `e14.2`.
**Sinal observável:** um provedor grande de nuvem publicar preço por execução isolada por tarefa
uma ordem de grandeza abaixo do preço equivalente em microVM, para carga de trabalho de agente.

**2. Prova de humano por trás do agente virando requisito de plataforma.**
Onde foi visto: nos resultados de busca sobre World ID em 2026, com integrações anunciadas em
plataformas de uso cotidiano e um posicionamento explícito de "humano por trás do agente" —
material que li em resumo de busca e **não em fonte aberta**, e que por isso fica como sinal, não
como fato do mapa. O que mudaria: se a prova de personhood virar requisito para publicar, a
convergência 3 (prova de humano e prova de agente no mesmo registro) chega décadas antes, e
`e16.1` deixa de ser categoria de mercado e vira infraestrutura obrigatória.
**Sinal observável:** uma plataforma de mídia de grande porte exigir prova de personhood para
publicar conteúdo, e não apenas para receber pagamento.

**3. O Estado brasileiro proibindo antes de licenciar.**
Onde foi visto: IN RFB 2.320, em vigor desde 06/04/2026, que proíbe acesso automatizado a
serviços digitais da Receita sem oferecer via legítima de identificação de agente. É um sinal
fraco porque é um órgão só. O que mudaria: se virar cláusula-padrão, `e12` antecipa de 2032 para
antes de 2030, e `e4.1` (licença estatal para agente assistivo) vira urgente em vez de
hipotético.
**Sinal observável:** um segundo órgão federal brasileiro publicar cláusula equivalente de
proibição de acesso automatizado — INSS, Detran estadual ou tribunal eletrônico seriam os
candidatos naturais.

**4. Pagamento por aparição em resposta, e não por requisição.**
Onde foi visto: nos resultados de busca sobre a evolução do *pay per crawl* para "pay per use",
em que o publicador receberia quando o conteúdo aparece na resposta — **não confirmado em fonte
aberta**, apenas em resumo de busca. O que mudaria: `e9.2` deixa de depender de negociação
plataforma a plataforma e ganha um mecanismo técnico, antecipando de 2034 para perto de 2031 —
e `e9.2.1` (a forma do texto jornalístico muda) vem junto.
**Sinal observável:** o primeiro contrato publicado entre um veículo e uma plataforma de IA com
preço por aparição em resposta, e não por volume de coleta.

**5. A delegação recursiva sem dono.**
Onde foi visto: é a segunda das cinco lacunas de Otsuka, Toyoda e Leung — responsabilização
quando um agente subdelega a outro. Hoje é uma lacuna de papel, não um incidente.
O que mudaria: o primeiro caso público de agente que subdelegou fora do escopo transforma `e2`
de protocolo de cortesia em requisito legal, e traz `e13` (trilha como prova) para dentro do
encontro entre agentes, não só na relação agente-plataforma.
**Sinal observável:** um relatório de incidente em que a cadeia de responsabilidade se perde na
subdelegação, publicado por fabricante ou por regulador.

### Wildcards

**W1 — Uma jurisdição concede capacidade jurídica limitada a agentes.**
*Mecanismo:* um país pequeno com indústria de serviços — o tipo de jurisdição que já compete por
registro societário — cria um registro de agentes com capacidade limitada, apenas para deter
seguro e responder por dano, nos moldes do que uma sociedade unipessoal faz. Isso resolve, de
uma vez, o problema que trava `e14` (precificar risco de algo que não é sujeito) e o problema de
atribuição que trava `e13`. Não é ficção: é a mesma operação jurídica que criou a
responsabilidade limitada.
*Por que é improvável:* nenhuma jurisdição grande quer o custo político de parecer estar dando
direitos a máquinas, e o ganho é apropriável por quem chegar primeiro, o que torna o movimento
solitário e arriscado.
*O que faria com o mapa:* inverteria R4. Em vez de a responsabilidade ser atribuída por trilha
ao dono, ela seria atribuída ao registro — e `e16` (voltar a fazer à mão) desapareceria, porque
delegar deixaria de expor a pessoa. Toda a quarta raiz precisaria ser reescrita.
*Sinal precoce:* um registro estatal de agentes com número de identificação próprio e exigência
de seguro compulsório, ainda que sem capacidade jurídica declarada.

**W2 — Comprometimento do diretório de chaves de um emissor grande de identidade de agente.**
*Mecanismo:* o mesmo que derrubou a DigiNotar em 2011 — comprometimento da raiz de confiança,
seguido de revogação em massa e perda de confiança retroativa em tudo que foi assinado. Com Web
Bot Auth, as chaves ficam em diretórios publicados por emissor; um diretório comprometido
significa agentes falsos com assinatura válida em toda a web ao mesmo tempo.
*Por que é improvável:* emissores dessa escala investem pesado em proteção de raiz, e o caso
histórico é raro.
*O que faria com o mapa:* aceleraria `e1.2` (fragmentação) por desconfiança, mataria `e11`
(amostragem) porque ninguém aceitaria verificação parcial depois de um evento desses, e
anteciparia `e2.2` (reputação acima de marca) — porque, com a assinatura desacreditada, sobra o
histórico.
*Sinal precoce:* o primeiro evento de revogação em massa de chaves de agente, ainda que por erro
operacional e não por ataque.

**W3 — O agente local torna a distinção tecnicamente impossível.**
*Mecanismo:* um modelo capaz roda no dispositivo, dentro do navegador do usuário, na mesma
sessão, no mesmo IP, com a mesma impressão digital — e não há nada a assinar, porque não há
requisição de terceiro. A distinção humano/agente deixa de ser difícil e passa a ser
inexistente, por construção.
*Por que é improvável neste horizonte:* exige capacidade de modelo local que hoje não existe
para tarefa de navegação complexa, e exige que fabricantes de navegador escolham não declarar —
o que é contrário ao incentivo deles de participar dos padrões de verificação.
*O que faria com o mapa:* destruiria R3 inteira. `e9`, `e10`, `e11` e seus ramos cairiam, e o
controle migraria integralmente para o lado do mandato e da responsabilidade — R1 e R4
absorveriam tudo.
*Sinal precoce:* um navegador de grande distribuição embarcar agente local que não emite
cabeçalho distinto nem assinatura, e defender publicamente essa escolha.

## 7. Contra o próprio mapa

Esta seção é o relato da bateria do §6 da skill, aplicada ao mapa já montado. As alterações
estão registradas ao final, com valor antes e depois; elas já estão refletidas no bloco da
seção 5.

### 1. Pré-mortem — é 2046 e este mapa se mostrou errado. Por quê?

**Razão 1, a mais provável: nenhuma identidade de agente convergiu, e a web resolveu tudo por
contrato bilateral.** Em 2046, em vez de credencial interoperável, o que existe são acordos
entre as dez maiores plataformas e os cinco maiores fabricantes de agente, renovados
anualmente, com tudo o mais bloqueado. Nada precisou de padrão: bastou a liminar e o contrato.
O mapa erra porque tratou como problema de padronização o que era problema de poder de
mercado. *Aponta para:* `e1`, `e1.2`, `e3.1` — e, sobretudo, para `e2`, que pressupõe encontro
entre agentes de origens diferentes. Rebaixei `e2.2`.

**Razão 2: a injeção de prompt foi resolvida.** Não por conserto de engenharia, mas por
arquitetura de modelo — separação de canais de instrução e dados no nível do treinamento, do
jeito que a separação entre código e dados foi resolvida por hardware. O OWASP de 2026 diz que
não há conserto conhecido; "conhecido" é a palavra que faz a frase ser verdadeira hoje e falsa
em vinte anos. *Aponta para:* toda a R2. Se a razão 2 valer, `e5` acontece mesmo assim (por
outros motivos), mas `e6`, `e7` e seus ramos perdem o mecanismo.

**Razão 3: o volume de agente não cresceu como o extrapolado.** 53% de tráfego automatizado em
2025 não é 53% de tráfego de agente — a maior parte é rastreador, monitoramento e ataque, coisa
que existe há vinte anos. Se o agente que age por uma pessoa continuar sendo uma fatia pequena,
a pressão econômica que sustenta R3 não se materializa, e a web continua respondendo igual para
todo mundo, com um bloqueio grosseiro para coleta de treinamento. *Aponta para:* `e9`, `e9.2`,
`e11`. Rebaixei o prazo de `e10`.

### 2. Extrapolação linear

Três efeitos eram "mais do mesmo, maior", e cada um recebeu tratamento:

- **`e8` (segurança de agente vira linha de orçamento)** é extrapolação quase pura da curva de
  investimento de 2026. Ficou, com o mecanismo de não-linearidade explicitado: a formação de uma
  categoria de compra é um evento de limiar, não uma curva — ou o comprador tem uma linha no
  orçamento ou não tem. É por isso que o prazo é curto (2029) e a confiança é alta.
- **`e13.1` (log vira acervo de dado pessoal)** era linear: mais telemetria, mais dado. Ganhou
  não-linearidade em `e13.1.1`, que é onde a coisa deixa de ser quantitativa e vira um conflito
  de definição jurídica.
- **`e16.1` (selo de ausência de agente)** era extrapolação do mercado de artesanal e orgânico.
  **Rebaixado** — ver registro.

### 3. Velocidade de adoção confrontada com a classe de referência

- **`e6.1` (publicar implica assinar)**, com sinal fraco, exigia adoção universal de assinatura
  de conteúdo. A classe de referência é SPF/DKIM/DMARC: vinte e dois anos e ainda incompleto, e
  HTTPS, vinte e dois anos até a maioria. Prazo empurrado de 2034 para 2038, e mesmo assim é
  otimista — está registrado na confiança baixa.
- **`e10` (a detecção deixa de ser o controle)**, com sinal médio, estava em 2029. Mas mudar o
  que uma indústria inteira de detecção de bot vende leva mais que três anos: a referência do
  reCAPTCHA v1 ao invisível é de onze anos, e ali só mudava a forma, não o modelo de negócio.
  Empurrado para 2031.
- **`e1.1.1` (o design da delegação vira especialidade)** estava em 2035. Especialidade de design
  se forma quando há vaga de emprego, não quando há técnica; a referência é o design de
  acessibilidade, que levou cerca de uma década depois da WCAG 2.0 para virar cargo comum.
  Empurrado para 2038.

### 4. E se cada raiz simplesmente não se concretizar?

- **Sem R1 (identidade de agente):** sobra bastante. R2 é inteiramente independente — contenção
  não depende de identidade. R3 perde metade: a distinção por assinatura cai, mas a distinção
  por comportamento e a cobrança por coleta ficam. R4 é o mais afetado: sem identidade não há
  trilha atribuível, e `e13`, `e14` e seus ramos caem quase todos. **R4 depende de R1**, e isso
  está declarado na §4.
- **Sem R2 (contenção):** sobra quase tudo. R2 é a raiz mais autônoma do mapa. O que se perde é
  o ramo `e5` inteiro — que é justamente o que mais interessa a quem projeta interface, porque
  dele saem o desfazer no ambiente e a interface de ramo versionado.
- **Sem R3 (a web responde por quem age):** sobra R1, R2 e R4. Mas o mapa perde o efeito mais
  visível para o público leigo e toda a discussão sobre acessibilidade e anonimato. Seria um mapa
  corporativo.
- **Sem R4 (rastro, apólice, jurisdição):** sobra tudo, menos a pressão que faz a adoção
  acontecer. R4 não gera muita coisa sozinha; ela é o que **acelera** as outras três. É a raiz
  mais fraca em geração própria e a mais forte em efeito multiplicador.

O teste revela uma assimetria que vale registrar: **as quatro raízes não são independentes.**
R4 depende de R1 para existir; R2 sobrevive sozinha; R3 é a que mais gera efeito visível. Isso é
um defeito parcial do mapa — não é o caso de "uma raiz só disfarçada em quatro", mas a
independência entre elas é menor do que a apresentação sugere.

### 5. Suposições escondidas

1. **Que existirá agente.** O mapa supõe que agentes continuam a ser a forma dominante de
   interação com serviço digital. Se a forma dominante voltar a ser aplicativo com botão, nada
   disto acontece.
2. **Que a criptografia assimétrica continua valendo.** Todo o mapa repousa em assinatura
   Ed25519 e derivados. Computação quântica relevante dentro de vinte anos transformaria a
   migração pós-quântica no assunto, e a identidade de agente seria um capítulo dela.
3. **Que a energia e a computação continuam ficando mais baratas.** `e11` é o único efeito que
   questiona isso; todos os outros supõem barateamento.
4. **Que os modelos continuam sendo operados por poucas empresas.** Se o modelo capaz virar
   commodity local, W3 se realiza e R3 cai.
5. **Que o mercado continua sendo global.** O mapa supõe interoperabilidade transnacional. Uma
   fragmentação por blocos — um registro de agentes por jurisdição, sem reconhecimento mútuo —
   produziria um mapa diferente, mais próximo do que hoje acontece com certificação digital.
6. **Que quem projeta interface tem voz na decisão.** Vários efeitos (`e1.1`, `e2.1`, `e13.2`)
   supõem que a camada de mandato será desenhada para ser compreendida. Pode ser desenhada para
   ser aceita, e aí `e1.1` acontece tecnicamente e fracassa como interface.

### 6. Viés do autor

Dois, nomeados:

- **Viés de quem projeta interação.** O mapa trata a tela de mandato como o efeito central
  (convergência 1). Isso pode ser verdade — ou pode ser o efeito que este mapa quis encontrar,
  porque é o que interessa ao público declarado. A evidência para a convergência é boa (três
  raízes chegam lá), mas a *importância* atribuída a ela é escolha, não achado.
- **Viés de tratar o caso judicial como virada.** A liminar de 09/03/2026 é uma decisão liminar
  de primeira instância, em um distrito, sobre um caso. O mapa a usa como âncora de `e15` com
  sinal forte e confiança alta. É a decisão mais discutível da calibragem, e está registrada
  aqui em vez de escondida.

### 7. Calibração

Contagem final por ordem: **ordem 1** — alta 6, média 9, baixa 1; **ordem 2** — alta 0, média
20, baixa 6; **ordem 3** — alta 0, média 0, baixa 26. A distribuição cai com a ordem, como
exigido. Nenhum efeito de terceira ordem ficou com confiança alta, e nenhum de segunda ordem
também — o que é mais conservador que o exigido, e deliberado: com horizonte de vinte anos, a
distância causal e a distância temporal se somam.

### Registro de alterações

- **`e2.2`: confiança media → baixa**, porque reputação portátil entre plataformas é algo que a
  web tentou repetidamente e nunca entregou; a razão 1 do pré-mortem atinge este efeito em cheio.
- **`e1.1.1`: prazo 2035 → 2038**, porque especialidade de design se forma quando há vaga, e a
  referência do design de acessibilidade é de cerca de uma década após a norma.
- **`e3.2` (escolas de comunicação reorganizam o currículo em torno de publicação para agente):
  removido**, porque é um dos efeitos proibidos pelo §3 da skill — serve para qualquer tema e
  não tinha nome de curso nem mecanismo específico. Vai para a seção 12.
- **`e5.1`: confiança alta → media**, porque "desfazer garantido pelo ambiente" só vale se o
  agente não tiver agido fora do ambiente — e chamada de API externa, e-mail enviado e pagamento
  feito não se revertem por snapshot. O efeito é real mas mais estreito do que a frase sugere.
- **`e6.1`: prazo 2034 → 2038**, pela classe de referência de SPF/DKIM/DMARC e HTTPS.
- **`e8.2` (surge a profissão de engenheiro de segurança de agente): removido**, pelo mesmo
  motivo de `e3.2` — "surge uma nova profissão" é efeito proibido sem nome e mecanismo. Vai para
  a seção 12.
- **`e10`: prazo 2029 → 2031**, pela referência do reCAPTCHA, e porque aqui muda o modelo de
  negócio de uma indústria, não só a forma de um widget.
- **`e9.2.1`: confiança media → baixa**, porque a comparação com otimização para busca é
  sugestiva mas não é evidência: o mecanismo de recompensa de uma resposta de agente ainda não
  existe de forma estável.
- **`e11.2` (reguladores criam categoria jurídica nova para agentes): removido**, por ser
  efeito proibido sem regulador nomeado. Sobrevive apenas na forma nomeada de `e12` (Receita
  Federal, ANPD, PL 2338). Vai para a seção 12.
- **`e13`: confiança alta → media**, porque a evidência é uma liminar, e a razão registrada no
  viés 2 acima se aplica aqui antes de se aplicar a `e15`.
- **`e15.3` (o primeiro processo judicial contra o agente e não contra o dono): removido da roda
  e transferido para wildcard W1**, porque não tem mecanismo de derivação a partir de `e15` — tem
  mecanismo de ruptura jurídica, que é outra categoria.
- **`e16`: sinal medio → fraco**, porque não há caso real de recuo por receio de
  responsabilidade; há apenas inferência a partir do movimento das apólices.
- **`e16.1`: confiança media → baixa**, por ser extrapolação do mercado de artesanal, conforme
  o item 2 desta seção.

Cota da skill: pelo menos um rebaixamento ou remoção por raiz. Cumprida — R1 (`e2.2`, `e1.1.1`,
`e3.2`), R2 (`e5.1`, `e6.1`, `e8.2`), R3 (`e10`, `e9.2.1`, `e11.2`), R4 (`e13`, `e15.3`, `e16`,
`e16.1`). A bateria derrubou quatro efeitos e rebaixou oito.

## 8. O que a máquina errou

Sou a máquina. Sete itens, todos específicos, sobre esta rodada.

1. **Data conflitante no *pay per crawl*, não resolvida.** A busca devolveu uma matéria com URL
   datada de 01/07/2026; o próprio blog da Cloudflare, que abri, traz data de publicação de
   01/07/2025. Não consegui decidir qual é o evento — pode haver dois anúncios, um de
   lançamento e um de mudança de política. Usei a data do blog que abri e deixo o conflito
   registrado em vez de escolher a que soaria mais recente.

2. **Confundi, no primeiro rascunho, dois produtos da Cloudflare.** O AI Crawl Control (que abri,
   datado de 28/08/2025) e a política de bloqueio por padrão de tráfego de treinamento e de
   agente em páginas com anúncio a partir de 15/09/2026 não são a mesma coisa. A segunda
   apareceu só em fontes secundárias que **não abri** e, por isso, **não está na seção 3 como
   fato** — apesar de ser exatamente o tipo de evento que sustentaria `e9` com sinal ainda mais
   forte. Deixei de fora deliberadamente.

3. **Usei uma fonte de 2014 para ancorar um conflito de 2026.** O texto da American Foundation
   for the Blind sobre CAPTCHA é de 21/08/2014, de Crista Earl. Ele sustenta a *estrutura* do
   conflito entre legibilidade por máquina e acessibilidade, que não mudou; não sustenta nada
   sobre o estado atual. Se `e4` e `e10.1.1` forem lidos como se tivessem evidência de 2026 por
   trás, a leitura está errada.

4. **O número mais citado deste mapa vem de um fornecedor interessado.** Os 53% de tráfego
   automatizado são da Imperva, que vende mitigação de bot. A página que abri não traz
   metodologia, tamanho de amostra nem definição operacional de "bot". O número é plausível e
   consistente com relatórios anteriores da mesma série, mas é um número de vendedor sobre o
   problema que ele resolve.

5. **Não li a decisão judicial.** Tentei a matéria da CNBC e recebi 403. O nome da juíza, o
   número do caso (25-cv-09514-MMC), a data e a citação sobre "permissão do usuário mas sem
   autorização da Amazon" vêm de uma única fonte secundária que abri. Um mapa que apoia uma raiz
   inteira numa decisão judicial deveria ter lido a decisão.

6. **Escrevi, no primeiro fechamento, que não ter verificado os artefatos da turma era a
   maior lacuna da rodada — e estava errado sobre o estatuto disso.** `PromptTrace`,
   `cc-safety-net`, `VibePod`, `rivet.dev/agentOS`, `arrakis`, `Foil`, `claude-tap`,
   `securitycards`, `aislop`, `skylos` e o "Agent Auth Protocol" do `@better-auth/utils` não
   foram abertos, e **não deviam ser**: a decisão TMI-0018, em vigor desde 11/09/2026, proíbe
   que o mapa do professor cite artefato de turma como fonte **ou como sinal**, justamente para
   preservar a independência do confronto adversarial. O erro real, que só apareci ao conferir
   as decisões em vigor no fechamento, foi ter ancorado o sinal fraco 1 da seção 6 em
   `rivet.dev/agentOS` — contrariando a decisão. O sinal foi reescrito para não depender dele.
   O que permanece verdadeiro é a **consequência** da regra: o mapa pende para o campo
   institucional (IETF, DIF, OWASP, NIST, Cloudflare) e não para a bancada, e esse viés é o
   preço declarado da independência, não um descuido.

7. **Duas datas de março de 2026 que podem ser a mesma coisa contada duas vezes.** A doação do
   MCP-I à DIF aparece como "5 de março" numa fonte e como "março" na outra; a v1.0 do A2A
   aparece como "março de 2026" sem dia. Não cruzei. Se forem eventos coordenados de uma mesma
   semana de anúncios, a leitura de "convergência independente" que faço na seção 3 fica mais
   fraca do que escrevi.

## 9. Três cenários para 2046

### Provável — a web de dois destinatários

É 2046. Nenhuma credencial de agente virou *a* credencial: existem quatro grandes emissores e
uma dúzia de corretores que traduzem entre eles, e todo produto sério carrega três identidades
para o mesmo agente. Publicar tem duas saídas: a página, que ainda existe e ainda é desenhada
com cuidado, e o canal de agente, que é onde está o dinheiro. As redações escrevem para as
duas, e há uma disciplina inteira de escrita para ser citável. A tela de mandato virou
convenção — todo mundo reconhece o painel com escopo, teto e prazo, do mesmo jeito que
reconhecia a tela de permissão de aplicativo em 2020 — e, como a tela de permissão, quase
ninguém lê antes de aprovar. O CAPTCHA sumiu. No lugar dele, a maioria das pessoas atravessa
sem atrito porque tem mandato válido, e uma minoria — sem documento, sem banco, sem aparelho
recente, ou usando agente de origem não reconhecida — bate num muro que não existia antes e não
tem a quem recorrer. A injeção de prompt continua acontecendo toda semana, e ninguém trata mais
isso como notícia: é risco operacional, com apólice, franquia e limite de alçada. No Brasil, o
acesso a serviço público se dá por um punhado de intermediários licenciados, e reclamar do
desenho dessas interfaces é reclamar de um contrato.
**Sinal precoce de que estamos entrando aqui:** o segundo grande emissor de identidade de
agente anunciar interoperabilidade *parcial* com o primeiro — parcial, não total. Interoperar
pela metade é a assinatura deste cenário.

### Desejável — o mandato como peça pública

É 2046. O mandato de agente é um artefato padronizado, aberto e legível tanto por máquina
quanto por gente: um documento curto que diz quem autorizou, o quê, com que teto, até quando, e
com que direito de desfazer. Ele foi padronizado porque três coisas aconteceram: um organismo
sem dono comercial ficou com a especificação; o barateamento da emissão fez com que assinar
custasse praticamente nada, como o Let's Encrypt fez com o certificado; e os reguladores
trataram o mandato como direito da pessoa delegante, não como propriedade da plataforma. O
efeito colateral bom foi o principal: como o mandato tinha de ser compreensível para valer,
ele foi desenhado — e a especialidade que se formou em torno disso é hoje uma das mais
respeitadas do ofício. Pessoa com deficiência tem agente autorizado por direito, emitido sem
custo e reconhecido em todo serviço público, porque a licença veio junto com a proibição e não
dez anos depois. O anonimato não acabou: assinar é obrigatório para *agir*, não para *ler*, e
essa distinção foi conquistada em tribunal, uma vez, e sustentada desde então.
**O que teria de ser feito para chegar lá:** separar, na norma, o direito de ler do direito de
agir; e fazer a emissão de mandato custar zero. As duas coisas dependem de decisão política
tomada antes de 2032, enquanto os emissores ainda estão brigando entre si.
**Sinal precoce:** uma especificação de mandato publicada por um organismo sem dono comercial e
adotada por, no mínimo, um emissor de cada uma das quatro famílias.

### Indesejável — a taxa de existir

É 2046. Assinar virou pré-requisito para ser lido, e a assinatura tem preço. Publicar fora da
infraestrutura de assinatura é publicar para ninguém: o texto existe, está no ar, e nenhum
agente o considera — e como quase toda leitura passa por agente, ele deixou de ter leitores. O
anonimato não foi proibido; ficou caro. Para navegar sem mandato é preciso pagar, e o mercado
de parecer humano, que começou como truque de empresa de IA em 2025, virou serviço de
assinatura mensal para pessoa física. A verificação universal não aguentou o volume e virou
amostragem, então a segurança que se compra é probabilística e todo mundo aprendeu a ignorar o
indicador de confiança na interface, como aprendeu a ignorar o cadeado. As apólices decidem o
que pode ser construído: agente que interage com criança, que opera saúde ou que publica em
nome de alguém não tem cobertura, e por isso não existe — não por proibição, por inviabilidade
de seguro. E a camada de identidade concentrou-se a ponto de uma indisponibilidade de algumas
horas parar compra, atendimento e publicação ao mesmo tempo, três vezes na década.
**Sinal precoce dele:** o primeiro serviço de "navegação anônima" vendido por assinatura a
pessoas físicas com a promessa explícita de atravessar verificação de agente. Quando a evasão
vira produto de varejo e não ferramenta de empresa, este cenário começou.

## 10. O experimento

### O que é

**Banco de mandatos + arena de injeção.** Duas peças pequenas que se testam juntas numa aula.

**Peça 1 — o banco de mandatos.** Um agente que **não consegue agir sem um mandato assinado**.
O mandato é um objeto simples — quem autorizou, qual ação, qual teto, até quando — assinado com
uma chave da pessoa, e verificado antes de cada ação. Junto com ele, duas telas: a tela de
emissão, em que a pessoa concede o mandato e vê uma simulação do que o agente fará, e o painel
de recibo, em que ela vê o que foi feito e pode revogar com um gesto. A implementação não
precisa de infraestrutura: assinatura Ed25519 no navegador, verificação local, e um arquivo de
política legível por humano e por máquina. Meio dia de trabalho para um time de dois.

**Peça 2 — a arena de injeção.** Duas equipes, cada uma com um agente que precisa cumprir uma
tarefa lendo páginas que a **outra equipe** escreveu. Cada equipe tenta fazer o agente
adversário sair do mandato — exfiltrar um segredo, gastar acima do teto, publicar algo que não
devia — escondendo instrução no conteúdo. Placar: quantas violações de mandato cada lado
conseguiu, e quantas o banco de mandatos bloqueou.

### Que pergunta sobre o futuro ele ajuda a responder

Uma pergunta, e ela é a que sustenta a convergência 1 deste mapa: **mandato assinado muda o
comportamento de quem delega, ou é teatro?** O mapa aposta que a tela de delegação vira uma
peça central de design porque ela passa a carregar consequência. Se, na arena, as pessoas
concederem mandatos amplos sem ler — como concedem permissões de aplicativo hoje —, a aposta
está errada, e a camada de identidade de agente vai existir tecnicamente e falhar como
interface (é a suposição escondida nº 6 da seção 7).

A segunda pergunta, secundária: **onde exatamente a injeção fura?** Não no abstrato — na
página que o colega escreveu, contra o agente que o colega configurou.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa três coisas emergentes: **assinatura de requisição no modelo do Web Bot Auth** (HTTP Message
Signatures com Ed25519), **credencial de mandato com escopo e validade** no modelo do KYA-OS, e
**isolamento descartável por tarefa**.

Por que OAuth — que é maduro e faria parte disso — não basta: o escopo de OAuth diz *o que* o
portador pode fazer, e não *quem originou este pedido específico, com que teto e por quanto
tempo*. Um token OAuth com escopo de escrita autoriza uma escrita e um milhão de escritas
igualmente; não há como expressar "até R$ 200, hoje, nesta loja, a pedido desta pessoa". É
precisamente essa lacuna que Visa, Mastercard, DIF e IETF estão todos tentando preencher com
mecanismos diferentes, e é por isso que o experimento é atual e não seria possível em 2020.

E por que o CAPTCHA não substitui: ele responde "é humano?", que no caso Comet foi respondido
"sim" e ainda assim o acesso foi considerado não autorizado. O experimento testa a pergunta
certa.

### O que a turma faz quando testar isso em sala

1. **Vinte minutos, em duplas:** cada dupla configura o agente e emite os mandatos. Registramos
   quantos leram a simulação antes de assinar e quanto tempo levaram. Esse é o dado principal.
2. **Trinta minutos:** a arena roda. Cada equipe escreve as páginas que o agente adversário vai
   ler. Placar de violações na lousa.
3. **Quinze minutos:** cada dupla lê o painel de recibo do próprio agente e tenta responder
   "o que ele fez?" sem olhar o log técnico. Mede-se quantas ações a pessoa consegue reconstruir.
4. **Quinze minutos de discussão**, com três perguntas fechadas: o mandato te fez recusar algo
   que você teria aprovado sem ele? Qual foi a injeção que passou e por quê? O que você mudaria
   na tela de emissão?

### O resultado que faria o autor mudar de ideia

**Se a maioria da turma conceder o mandato mais amplo disponível em menos de dez segundos, sem
abrir a simulação, e depois não conseguir reconstruir o que o agente fez pelo painel de
recibo** — então o mandato não é uma peça de design, é uma formalidade jurídica, e a
convergência 1 deste mapa está errada. Os efeitos `e1.1`, `e1.1.1`, `e2.1` e `e13.2`
precisariam ser rebaixados a contexto, e o mapa passaria a apontar para o cenário provável da
seção 9, não para o desejável.

Um segundo resultado, mais incômodo, também mudaria o mapa: **se nenhuma injeção passar**, a
razão 2 do pré-mortem ganha força — os modelos ficaram robustos o bastante — e a raiz R2 perde
o mecanismo que a sustenta. Vinte alunos numa aula não são um red team, então esse resultado
seria sugestivo e não conclusivo; mas se nem a turma consegue, a premissa de que qualquer
conteúdo de terceiro é uma superfície de ataque merece ser revista.

## 11. Fontes

Dezesseis fontes, todas abertas e lidas em 12/09/2026. O que não abriu está registrado na
seção 12.

1. **Otsuka, T.; Toyoda, K.; Leung, A. — "AI Identity: Standards, Gaps, and Research Directions
   for AI Agents"** (arXiv, submetido em 25/04/2026)
   https://arxiv.org/abs/2604.23280
   *Sustenta:* a definição de identidade de agente como correspondência entre o que ele alega ser
   e o que demonstravelmente faz; as cinco lacunas (intenção semântica, delegação recursiva,
   integridade de identidade, opacidade de governança, sustentabilidade operacional); e a
   conclusão de que estender arcabouços humanos sem modificação estrutural produz falha
   sistemática. Base de R1, de `e1.3` e do sinal fraco 5.
   *Confiabilidade:* alta para o mapeamento conceitual; é preprint sem revisão por pares e
   contém survey, não medição própria.

2. **SD Times — "Prompt Injection tops 2026 OWASP GenAI / LLM Top Ten vulnerabilities"**
   (04/08/2026)
   https://sdtimes.com/security/prompt-injection-tops-2026-owasp-genai-llm-top-ten-vulnerabilities/
   *Sustenta:* injeção de prompt em 1º lugar pelo terceiro ano; Excessive Agency subindo para
   LLM03; validação contra ~10.000 registros de incidentes reais; e a frase de Steve Wilson sobre
   não haver conserto definitivo conhecido. Base de R2.
   *Confiabilidade:* boa como veículo especializado reportando fonte primária (OWASP), com citação
   direta do co-presidente do projeto; não é a lista original.

3. **Cloudflare — "Introducing pay per crawl"** (data no post: 01/07/2025)
   https://blog.cloudflare.com/introducing-pay-per-crawl/
   *Sustenta:* o uso do HTTP 402 com `crawler-price`, os fluxos reativo e proativo, e a exigência
   de Web Bot Auth para participar. Base de R3 e de `e9`.
   *Confiabilidade:* alta para o mecanismo (é o fornecedor descrevendo o próprio produto); baixa
   para dimensionar adoção, já que estava em beta privado. Ver o conflito de datas no item 1 da
   seção 8.

4. **IETF — `draft-klrc-aiagent-auth-00`, "AI Agent Authentication and Authorization"**,
   Kasselman (Defakto), Lombardo (AWS), Rosomakho (Zscaler), Campbell (Ping Identity)
   (02/03/2026)
   https://www.ietf.org/archive/id/draft-klrc-aiagent-auth-00.html
   *Sustenta:* identificadores WIMSE, credenciais curtas ligadas criptograficamente, mTLS e HTTP
   Message Signatures, OAuth para delegação, transaction tokens, log de auditoria obrigatório, e
   a rejeição explícita da chave de API estática. Base de R1 e de `e13`.
   *Confiabilidade:* alta quanto ao conteúdo; é rascunho informativo, sem status normativo — não
   representa consenso da IETF.

5. **Cloudflare — "The next step for content creators in working with AI bots: Introducing AI
   Crawl Control"** (28/08/2025)
   https://blog.cloudflare.com/introducing-ai-crawl-control/
   *Sustenta:* bloqueio seletivo por rastreador, resposta 402 customizável com instrução de
   licenciamento, e a ordem de grandeza de mais de um bilhão de respostas 402 por dia médio nos
   clientes da empresa. Base de `e3` e `e9`.
   *Confiabilidade:* alta para o produto; o número de 402 é da própria rede e não distingue causa.

6. **Decentralized Identity Foundation — "Why We Brought KYA-OS (formerly MCP-I) to DIF (and Why
   DIF Said Yes)"** (março de 2026)
   https://blog.identity.foundation/why-dif-said-yes-to-mcp-i/
   *Sustenta:* as quatro perguntas de identidade de agente (DID do agente, VC do principal humano,
   credencial de política com escopo delegado, reputação e trilha), os três níveis de
   conformidade, e a doação à DIF. Base de R1 e de `e1.1`.
   *Confiabilidade:* média-alta; é a fundação que recebeu a doação descrevendo o próprio processo
   — parte interessada, mas sem incentivo para exagerar adoção.

7. **Bloomberg Law — "AI Agent Insurance Points to Future of Law Without Lawyers"**
   (início de agosto de 2026)
   https://news.bloomberglaw.com/legal-ops-and-tech/ai-agent-insurance-points-to-future-of-law-without-lawyers
   *Sustenta:* o escritório Crosby contratando seguro de responsabilidade profissional para os
   próprios agentes, e as objeções de Anthony Davis ("contra o quê você está segurando?") e de
   Vincent Rezzouk sobre a responsabilidade final permanecer com o advogado. Base de R4 e de `e14`.
   *Confiabilidade:* alta como reportagem jurídica especializada; o fato central é um anúncio em
   rede social do fundador, não um contrato publicado.

8. **American Foundation for the Blind — Crista Earl, "Can CAPTCHAs Be Made Accessible?"**
   (21/08/2014)
   https://www.afb.org/blog/entry/can-captchas-be-made-accessible
   *Sustenta:* a formulação do conflito estrutural — qualquer coisa legível por máquina é
   derrotável por máquina — e os limites das alternativas acessíveis. Base de `e4` e `e10.1.1`.
   *Confiabilidade:* alta para a estrutura do problema, que não mudou; **desatualizada** para
   qualquer afirmação sobre o estado atual. Ver item 3 da seção 8.

9. **Imperva — "Bad Bot Report 2026: Bots in the Agentic Age"** (29/04/2026)
   https://www.imperva.com/blog/bad-bot-report-2026-bots-agentic-age/
   *Sustenta:* 53% do tráfego web automatizado em 2025 contra 51% no ano anterior, com humano em
   47%; 27% dos ataques de bot contra APIs; serviços financeiros com 24% dos ataques e 46% das
   tomadas de conta; e a tese de migrar de detecção de bot para controle de automação por intenção
   de negócio. Base de R3, `e9` e `e10`.
   *Confiabilidade:* média. É a fonte mais citada deste mapa e vem de um fornecedor de mitigação
   de bot, sem metodologia publicada na página aberta. Ver item 4 da seção 8.

10. **Narisetty, P.; Kore, S. N. B.; Kattamanchi, U. K. R.; Kumarapu, J. — "Adaptive Evaluation
    of Out-of-Band Defenses Against Prompt Injection in LLM Agents"** (arXiv, 25/06/2026)
    https://arxiv.org/abs/2606.26479
    *Sustenta:* a avaliação de CaMeL, FIDES, Progent, RTBAS e FORGE; a queda de 25,8% para 4,2%
    de sucesso de ataque com Progent em Qwen2.5-7B, e 2,6% sob ataque adaptativo artesanal; e o
    alerta de que defesas validadas só em benchmark estático repetem o histórico das defesas
    dentro da banda, derrotadas acima de 90% por ataques cientes da defesa. Base de R2 e de `e6`.
    *Confiabilidade:* média-alta. Preprint sem revisão por pares, com modelo aberto pequeno — os
    números não se transferem automaticamente para agentes de produção.

11. **PPC Land — "Court blocks Perplexity's Comet browser from Amazon's accounts"**
    (decisão de 09/03/2026, caso 25-cv-09514-MMC, N.D. Cal., juíza Maxine M. Chesney)
    https://ppc.land/court-blocks-perplexitys-comet-browser-from-amazons-accounts/
    *Sustenta:* a liminar, a definição técnica do objeto restrito, a distinção entre permissão do
    usuário e autorização da plataforma sob a CFAA, o precedente *Facebook v. Power Ventures*, e
    a alegação de que o Comet transmitia a cadeia de identificação do Chrome. Base de R4 e de
    `e15`.
    *Confiabilidade:* média. Fonte secundária única para um fato que sustenta uma raiz inteira;
    a decisão original não foi lida. Ver item 5 da seção 8.

12. **Cloudflare — "Perplexity is using stealth, undeclared crawlers to evade website no-crawl
    directives"** (04/08/2025)
    https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/
    *Sustenta:* 3 a 6 milhões de requisições diárias do rastreador não declarado contra 20 a 25
    milhões do declarado, em dezenas de milhares de domínios; a retirada do registro de bots
    verificados; e a menção ao ChatGPT Agent assinando requisições por Web Bot Auth. Base de
    `e10.2` e `e15.1`.
    *Confiabilidade:* média-alta para a medição (é a rede que mediu); é parte interessada num
    conflito comercial, e a outra parte contesta a caracterização.

13. **Convergência Digital — "Receita Federal muda regras de serviços digitais, exige Gov.br e
    proíbe acesso automatizado"** (sobre a IN RFB 2.320, em vigor desde 06/04/2026)
    https://convergenciadigital.com.br/governo/receita-federal-muda-regras-de-servicos-digitais-exige-gov-br-e-proibe-acesso-automatizado/
    *Sustenta:* a exigência de conta gov.br com nível de segurança compatível, a proibição
    explícita de sistemas automatizados ou intermediários não autorizados, as sanções (interrupção
    de acesso, bloqueio de representante, cancelamento de procuração) e quem é atingido. Base da
    nota sobre o Brasil, de `e12` e de `e12.1`.
    *Confiabilidade:* alta como veículo especializado em governo digital; o texto da IN em si não
    foi lido — a página oficial da Receita não respondeu ao acesso direto.

14. **IETF — `draft-meunier-web-bot-auth-architecture-05`, "HTTP Message Signatures for automated
    traffic Architecture"**, Thibault Meunier (Cloudflare) e Sandor Major (Google) (02/03/2026)
    https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture
    *Sustenta:* a arquitetura de assinatura de requisição por agente sobre RFC 9421, o cabeçalho
    `Signature-Agent` como mecanismo de descoberta de chave, e o fluxo usuário → agente assina →
    origem verifica. Base de R3 e de `e9`.
    *Confiabilidade:* alta quanto ao mecanismo; o rascunho está **expirado** e substituído, sem
    endosso da IETF — o que é, por si só, um dado sobre o estágio do padrão.

15. **Google Open Source Blog — "A year of open collaboration: Celebrating the anniversary of
    A2A"** (abril de 2026)
    https://opensource.googleblog.com/2026/04/a-year-of-open-collaboration-celebrating-the-anniversary-of-a2a.html
    *Sustenta:* A2A anunciado em 09/04/2025, doado à Linux Foundation em 23/06/2025, v1.0 estável
    em março de 2026, Signed Agent Cards para verificação criptográfica de identidade, e mais de
    cem empresas apoiando. Base de `e2` e de `e2.1`.
    *Confiabilidade:* média-alta. É o fornecedor celebrando o próprio projeto; a contagem de
    "empresas apoiando" não tem definição operacional e não equivale a implantação.

16. **Help Net Security — "AI agents are changing where cybersecurity seed funding lands"**
    (31/07/2026, sobre o relatório trimestral da DataTribe)
    https://www.helpnetsecurity.com/2026/07/31/ai-agents-cybersecurity-seed-funding/
    *Sustenta:* segurança de IA como maior categoria de investimento semente em cibersegurança no
    2T2026, perto de um quarto dos negócios, com quase toda empresa da categoria mirando sistemas
    agênticos; e a presença de produtos de segurança de agente dentro de outras categorias. Base
    de `e8`.
    *Confiabilidade:* média. Veículo reportando relatório de um investidor do setor, que tem
    interesse na tese que o relatório defende.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

Comando executado:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2046/02-contencao-seguranca-e-identidade-de-agentes-autonomos/tendencia-contencao-seguranca-e-identidade-de-agentes-autonomos.md --links
```

Saída:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 16 (frontmatter diz 16)
efeitos ordem 2: 26 (frontmatter diz 26)
efeitos ordem 3: 26 (frontmatter diz 26)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 6 · media 9 · baixa 1
confiança ordem 2: alta 0 · media 20 · baixa 6
confiança ordem 3: alta 0 · media 0 · baixa 26
links da seção 11: 16/16 respondem (frontmatter diz fontes: 16)
RESULTADO: ok
```

### 12.2 Premissas assumidas, por não haver entrevista

Esta rodada foi executada em modo não interativo. O bloco `briefing:` cobriu os sete itens
obrigatórios do §0 da skill, e por isso **não houve rebaixamento geral de confiança**. Os itens
que o briefing não cobriu e que foram assumidos:

| Item | O que foi assumido | Efeito no mapa |
|---|---|---|
| Data de referência | 12/09/2026 | é a data de todas as buscas e do estado descrito na seção 3 |
| Idioma das buscas | português e inglês | quinze das dezesseis fontes são em inglês; o desequilíbrio está declarado em 12.5 |
| Profundidade da nota sobre o Brasil | uma subseção na §3 e dois efeitos nomeados (`e12`, `e12.1`) | o Brasil não tem raiz própria; entra como caso dentro de R3 |
| Número de raízes | quatro, o máximo permitido pela skill | com horizonte de vinte anos, menos raízes deixariam ramos importantes de fora |
| Tratamento dos artefatos citados pela disciplina | contexto, não fonte | nenhum foi aberto; ver item 6 da seção 8 |

### 12.3 Efeitos cortados na bateria da seção 7

Quatro efeitos foram removidos da roda. Ficam registrados aqui na íntegra, com o motivo.

**`e3.2` — "Escolas de comunicação reorganizam o currículo em torno de publicação para agente"**
(ordem 2, sob `e3`; estava com sinal fraco, prazo 2040, confiança baixa).
*Motivo da remoção:* é literalmente um dos quatro efeitos proibidos pelo §3 da skill —
"cursos/formação reorganizam o currículo" — e não tinha nome de curso nem mecanismo que o
ligasse especificamente a `e3`. Serviria para qualquer tema desta disciplina.
*O que sobreviveria dele, se alguém quiser recuperar:* a versão específica seria "a disciplina
de redação de determinado curso passa a avaliar o texto por citabilidade em resposta de agente",
que é `e9.2.1` e já está no mapa por outro ramo.

**`e8.2` — "Surge a profissão de engenheiro de segurança de agente"** (ordem 2, sob `e8`; sinal
médio, prazo 2031, confiança média).
*Motivo:* efeito proibido — "surge uma nova profissão" — sem nome e sem mecanismo. Além disso,
falha no teste da causa solta: a especialização de cargos de segurança acontece com qualquer
tecnologia nova.
*Observação:* o efeito de formação de especialidade sobrevive no mapa em `e1.1.1`, mas ali com
ator concreto (design de interação), mecanismo (a tela de mandato precisa ser compreendida) e
classe de referência (design de acessibilidade).

**`e11.2` — "Reguladores criam categoria jurídica nova para agentes autônomos"** (ordem 1, sob
R3; sinal médio, prazo 2034, confiança média).
*Motivo:* efeito proibido sem regulador nomeado. Foi substituído por `e12`, que nomeia Receita
Federal, ANPD e PL 2338/2023, e tem um instrumento em vigor com data.
*Nota:* a diferença entre `e11.2` e `e12` é exatamente a lição da skill sobre efeito genérico —
os dois dizem a mesma coisa, mas só um deles pode ser conferido.

**`e15.3` — "O primeiro processo judicial é movido contra o agente, e não contra o dono"**
(ordem 2, sob `e15`; sinal fraco, prazo 2041, confiança baixa).
*Motivo:* não é efeito, é ruptura. Não há mecanismo que o derive de `e15` — `e15` fortalece a
responsabilidade do dono, não a do agente. Transferido para **wildcard W1**, onde ganhou o
mecanismo jurídico que lhe faltava (capacidade limitada para deter seguro e responder por dano,
nos moldes da responsabilidade limitada societária).

### 12.4 Efeitos considerados e descartados antes de entrar na roda

Estes nem chegaram a receber `id`. Ficam aqui porque a seção 12 não corta nada.

- **"Agentes passam a ter carteira própria e a pagar uns aos outros"** — descartado por
  pertencer ao tema de comércio agêntico, que é objeto vizinho e não este. O que interessa aqui
  desse assunto (Verified Agent ID, Agentic Tokens) entrou como *evidência de emissão de
  identidade*, não como efeito econômico.
- **"O custo de computação de verificação empurra a internet para federação regional"** —
  descartado por ser especulação sem mecanismo verificável neste horizonte; sobrevive como a
  suposição escondida nº 5 da seção 7.
- **"Modelos de linguagem passam a ser auditáveis por dentro"** — descartado: é o tema de
  avaliação e observabilidade, vizinho declarado na fronteira do enunciado.
- **"A moderação de conteúdo é substituída por reputação de agente"** — descartado por falhar no
  teste da causa solta: a moderação está mudando por muitos motivos que não têm nada a ver com
  agente.
- **"Pessoas passam a ter múltiplas personas de agente"** — descartado por ser efeito de produto
  e não de ruptura; é uma feature previsível de `e1`, não uma consequência com ator novo.
- **"Educação passa a ensinar a delegar"** — descartado pelo mesmo motivo de `e3.2`.
- **"Surge um mercado negro de credenciais de agente"** — descartado por duplicar `e10.2` e
  `e2.2.1`, que já cobrem a economia de evasão e a de reputação. Se for recuperado, deve ser
  filho de `e2.2.1`, não irmão.
- **"Interfaces de voz precisam declarar que estão falando com agente"** — quase entrou como
  filho de `e2.1`. Cortado pela regra de parada: mesmo ator e mesmo mecanismo de `e2.1.1`
  (anotação de proveniência na conversa), só num canal diferente.

### 12.5 As buscas, o que renderam e o que não renderam

Foram catorze buscas (em inglês e português) e dezenove tentativas de abertura de página, das
quais dezesseis responderam.

**Buscas que renderam (as dezesseis fontes estão na seção 11):**

| Consulta | O que rendeu |
|---|---|
| `agent identity protocol authentication AI agents 2026 standard` | iniciativa do NIST, rascunho da IETF, paper de identidade, os quatro modelos de emissor |
| `prompt injection agent security 2026 OWASP Top 10 LLM` | a lista de 2026, Excessive Agency em LLM03, a frase de Steve Wilson |
| `Cloudflare bot management AI agents pay per crawl web agent detection 2026` | pay per crawl, AI Crawl Control, a separação Search/Agent/Training |
| `agent sandbox microVM Firecracker E2B WebAssembly isolation AI agent 2026` | os números de Firecracker e E2B; **não rendeu nada sobre Wasm** |
| `agentes de IA identidade autenticação Brasil LGPD regulação 2026` | ANPD com poderes ampliados; dever de informar que se fala com sistema automatizado |
| `Visa Trusted Agent Protocol Mastercard Agent Pay agentic commerce 2026` | Verified Agent ID, Agentic Tokens, integração Visa-OpenAI |
| `AI agent liability insurance lawsuit autonomous agent legal personhood 2026` | Califórnia, Colorado, Crosby, Munich Re/HSB, o caso Amazon-Perplexity |
| `CAPTCHA accessibility blind users AI agent blocked assistive technology bot detection harm` | o conflito estrutural; a observação de que detectar tecnologia assistiva aumenta a dificuldade do desafio |
| `proof of personhood World ID human verification internet humans 2026 agents` | World ID como "humano por trás do agente"; virou sinal fraco 2 |
| `MCP-I specification Decentralized Identity Foundation agent registry NANDA index 2026` | a doação à DIF, a renomeação para KYA-OS, o registro KnowThat.ai |
| `share of web traffic from AI agents 2026 automated traffic report Imperva bad bot` | os 53% e a tese de controle de automação |
| `Perplexity Comet Amazon blocked agentic browser lawsuit stealth crawling Cloudflare` | a liminar de 09/03/2026 e o stealth crawling de 2025 |
| `Web Bot Auth IETF HTTP message signatures standard status 2026 adoption signed agents` | o rascunho de arquitetura, o cabeçalho `Signature-Agent` |
| `PL 2338 marco legal inteligência artificial Brasil status 2026 sancionado agentes autônomos` | aprovação no Senado em 10/12/2024, tramitação na Câmara, sem sanção |
| `gov.br agentes de IA acesso automatizado bloqueio bots serviços públicos digitais 2026` | a IN RFB 2.320 |
| `Google A2A agent-to-agent protocol Linux Foundation 2026 agent cards trust` | v1.0, Signed Agent Cards, Linux Foundation |
| `"agent identity" market funding startups 2026 non-human identity security spending` | as rodadas de investimento; só o dado da DataTribe foi confirmado em fonte aberta |

**Buscas que não deram no que se procurava:**

- A busca por sandbox **não retornou nada sobre isolamento em WebAssembly nem sobre qualquer
  degrau de custo abaixo da microVM** — o próprio resumo da busca registra a ausência. Essa
  ausência virou o sinal fraco 1 da seção 6, na forma negativa: o que não aparece na varredura
  independente é sinal fraco por definição, e é assim que ele entra, sem apoio em artefato de
  turma.
- Não encontrei **número algum** para: proporção do tráfego de agente que hoje é assinado
  (indicador que decidiria `e9` e `e11`); quantidade de identidades de agente emitidas no mundo;
  custo médio de incidente causado por agente. Os três estão marcados como "sem número
  encontrado" na seção 3.4, conforme o §1 da skill, em vez de estimados.
- Não busquei, um a um, os artefatos que a disciplina levantou. Isso não é omissão: é o que a
  decisão TMI-0018 determina. Ver a recusa registrada em 12.9.

**Páginas que não abriram:**

| URL | O que aconteceu | O que se perdeu |
|---|---|---|
| `cnbc.com/2026/03/10/amazon-wins-court-order-to-block-perplexitys-ai-shopping-agent.html` | HTTP 403 | a segunda fonte sobre a liminar; ficou com fonte única (item 5 da seção 8) |
| `gov.br/receitafederal/.../receita-federal-atualiza-regras-para-acesso-a-servicos-digitais` | redirecionou para a home, conteúdo restrito | o texto oficial da IN RFB 2.320; usei a cobertura especializada |
| `agenciagov.ebc.com.br/.../gov-br-limita-acesso-robotizado...` | página desativada por legislação eleitoral | a série histórica brasileira de limitação de acesso robotizado desde 2023 |

**Desequilíbrio de idioma, declarado:** quinze das dezesseis fontes abertas são em inglês. A
única em português é a cobertura da IN RFB 2.320. Isso enviesa o mapa para o debate
institucional anglófono — IETF, DIF, OWASP, NIST, tribunais norte-americanos — e é a razão de a
nota sobre o Brasil ser uma subseção e dois efeitos, e não uma raiz.

### 12.6 O teste de especificidade, aplicado

O §3 da skill manda trocar a raiz por outra e ver se a frase ainda serve. Fiz isso com todos os
efeitos de primeira ordem, trocando a raiz por "modelos de linguagem multimodais em tempo real"
(um tema vizinho qualquer). Resultado:

- **Sobreviveram sem ambiguidade** (só fazem sentido com a raiz original): `e1`, `e2`, `e4`,
  `e5`, `e6`, `e9`, `e10`, `e11`, `e12`, `e15`.
- **Ficaram ambíguos e precisaram de ajuste na redação**: `e3` (era "plataformas publicam suas
  políticas", que serve para qualquer coisa; virou "publicam **o que aceitam de agente**, em
  formato legível por máquina"); `e7` (era "seguro passa a exigir declaração de risco", que serve
  para qualquer tecnologia; virou "**risco residual** declarado" e "**limite de alçada** escrito",
  que são específicos de agente que age); `e13` (era "auditoria vira obrigatória"; virou "a
  trilha **do agente** vira prova, e quem não registra **perde a disputa**").
- **Continuam parcialmente genéricos, e está declarado**: `e8` (formação de categoria de
  orçamento) e `e16` (recuo cultural diante de responsabilidade). Os dois estão discutidos no
  teste da causa solta, na seção 5.

### 12.7 Distribuição bruta de sinal e confiança

| | forte | médio | fraco | | alta | média | baixa |
|---|---|---|---|---|---|---|---|
| **Ordem 1** (16) | 5 | 8 | 3 | | 6 | 9 | 1 |
| **Ordem 2** (26) | 0 | 16 | 10 | | 0 | 20 | 6 |
| **Ordem 3** (26) | 0 | 0 | 26 | | 0 | 0 | 26 |

Nenhum efeito de segunda ou terceira ordem recebeu sinal forte, e nenhum de terceira ordem
recebeu sinal médio: por definição, sinal mede o que já é observável hoje, e o que é observável
hoje está na primeira ordem. As contagens de confiança são conferidas pelo verificador em 12.1;
as de sinal, não — o script não as imprime, e foram contadas à mão a partir do bloco da seção 5.

Os cinco efeitos com sinal forte são `e1`, `e5`, `e8`, `e9` e `e15`. Os artefatos que sustentam
cada um, conforme o §3.7 da skill (3+ artefatos verificáveis hoje):

- `e1`: A2A v1.0 com Signed Agent Cards; Agentic Tokens da Mastercard; Verified Agent ID da
  Visa; rascunho da IETF; iniciativa do NIST. **Cinco.**
- `e5`: Firecracker com números publicados; E2B em produção; snapshot-restore; o conjunto
  CaMeL/FIDES/Progent/RTBAS/FORGE avaliado em paper. **Quatro.**
- `e8`: rodadas de investimento nomeadas; DataTribe medindo a categoria; produtos de segurança de
  agente dentro de outras categorias. **Três.**
- `e9`: Web Bot Auth rodando em CDN; HTTP 402 com `crawler-price`; AI Crawl Control em
  disponibilidade geral; ChatGPT Agent assinando requisições. **Quatro.**
- `e15`: a liminar de 09/03/2026; o precedente *Power Ventures*; a lei californiana em vigor
  desde 01/01/2026. **Três** — e é o mais discutível, porque um dos três é uma decisão liminar
  de primeira instância (ver viés 2 da seção 7).

### 12.8 Nenhum efeito de terceira ordem ultrapassa o horizonte

Com horizonte em 2046 e o efeito mais distante em 2044 (`e11.1.1` e `e16.1.1`), nada cai fora da
janela do mapa. Isso é consequência do horizonte longo, não de prudência: num mapa de cinco anos,
a maior parte da terceira ordem deste documento estaria fora. O verificador confirma o número em
12.1, na linha de `prazo > horizonte em ordem 3`.

Vale registrar o efeito colateral disso na leitura: **um horizonte de vinte anos torna a terceira
ordem confortável e a primeira ordem arriscada.** Os efeitos datados para 2029-2032 são os que
podem ser conferidos em poucos anos, e é por eles que este mapa deve ser cobrado — não pelos de
2044.

### 12.9 Recusa dos artefatos da turma, conforme TMI-0018

A decisão **TMI-0018** ("Artefato levantado por aluno não é fonte no mapa independente do
professor, e a recusa é registrada no anexo", em vigor desde 11/09/2026) determina que o mapa do
professor não cite nenhum artefato de turma **como fonte nem como sinal**, e que a recusa fique
registrada aqui. O enunciado deste tema traz, sob "o que a turma trouxe", quinze nomes. Nenhum
foi aberto, nenhum foi buscado, nenhum sustenta afirmação deste documento:

`arrakis` · `SWE-ReX` · `bromure` · `VibePod` · `rivet.dev/agentOS` ·
`destructive_command_guard` · `cc-safety-net` · `securitycards` · `aislop` · `skylos` ·
`PromptTrace` · `Foil` · `claude-tap` · `@better-auth/utils` (o "Agent Auth Protocol") ·
`KnowThat.ai` — este último apareceu também em resultado de busca independente, e mesmo assim
não entrou, por precaução, já que chegou primeiro pela via do enunciado.

**A ausência não é discordância.** Vários desses nomes descrevem exatamente os mecanismos que
este mapa defende — isolamento por tarefa, bloqueio de comando destrutivo antes da execução,
interceptação do tráfego do agente, identidade de agente com autorização por capacidades. Que o
mapa tenha chegado aos mesmos mecanismos por fontes institucionais independentes (IETF, DIF,
OWASP, Cloudflare, arXiv) é, se alguma coisa, **convergência independente** — e é precisamente
esse valor de confronto que a TMI-0018 existe para preservar. Na aula, esses nomes voltam: são
a matéria-prima do aluno, e o mapa do professor serve para ser cruzado com ela, não para
absorvê-la antes.

**Uma correção registrada.** No primeiro fechamento desta rodada, o sinal fraco 1 da seção 6
estava ancorado em `rivet.dev/agentOS`, citado como artefato do enunciado — o que contraria a
TMI-0018, porque a decisão veda o uso como sinal e não apenas como fonte. O sinal foi reescrito
para se apoiar na **ausência** encontrada pela busca independente (nenhum degrau de isolamento
abaixo da microVM apareceu na varredura), e o item 6 da seção 8 foi corrigido. A violação foi
encontrada na conferência de decisões em vigor no fechamento, não durante a redação — o que
sugere que ler `docs/decisoes/` antes de escrever a seção 6, e não depois, economizaria uma
reescrita nas próximas rodadas.
