---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 19
efeitos_ordem_2: 26
efeitos_ordem_3: 22
tecnologias_citadas: [Model Context Protocol, MCP Registry, MCP Apps (SEP-1865), ui:// scheme, MCP-UI, WebMCP, navigator.modelContext, document.modelContext, NLWeb, llms.txt, robots.txt, Content Signals Policy, schema.org, OpenAPI, ai-plugin.json, Web Bot Auth, HTTP Message Signatures, Signature Agent Card, HTTP 402, pay per crawl, Cloudflare AI Crawl Control, Cloudflare Agent Readiness, isitagentready.com, x402, Agentic Commerce Protocol, Universal Commerce Protocol, RSL (Really Simple Licensing), RSL Collective, Not Human Search, Lighthouse Agentic Browsing audits, ChatGPT Atlas, ChatGPT Agent, Perplexity Comet, WebArena, WebChoreArena, CFAA, EU AI Act Art. 50, European Accessibility Act, Diretiva (UE) 2019/790 Art. 4, Pix]
fontes: 34
confianca: media
experimento: "O site de duas caras — publicar a mesma peça editorial em duas superfícies (HTML para gente, servidor MCP + llms.txt + Web Bot Auth para máquina), instrumentar as duas e medir por quatro semanas quem chega, quanto custa servir cada lado, e o que acontece quando se liga o HTTP 402 num dos caminhos"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

A web foi construída para olhos, e está sendo reorganizada para programas — mas não do jeito que a
conversa da indústria sugere. Este mapa persegue quatro rupturas até 2046. A primeira: **o site
passa a expor ferramentas em vez de telas**, e o ofício de projetar interface se divide entre quem
desenha o que a pessoa vê e quem escreve o contrato que a máquina lê. A segunda: **buscar um
recurso passa a custar dinheiro na hora** — o HTTP 402, código morto desde 1997, vira resposta
rotineira, e a suposição fundadora de que o acesso é grátis porque a atenção paga depois deixa de
valer quando não há atenção. A terceira: **"visitar" deixa de ser um ato do corpo e vira um ato
delegado**, e a web precisa decidir — por contrato e por tribunal, não por especificação — se a
visita é do agente ou de quem o mandou. A quarta: **a descoberta muda de eixo**, da atenção
disputada para a invocação medida, e nasce um ranking de prontidão de máquina com o lugar que o
PageRank ocupou. O achado que mais desloca o mapa é negativo e tem evidência dura: a prontidão
agêntica, hoje, é em grande parte teatro — o `llms.txt` está em 10,13% de trezentos mil domínios
e, num levantamento de logs de cerca de 900 domínios entre setembro de 2025 e abril de 2026, **não
houve uma única requisição verificada de bot de fronteira** ao arquivo. A web de máquina que já
existe não é a que se publica: é a que se cobra, se assina e se processa em juízo.

## 2. O tema

O objeto aqui é a **web como plataforma sendo reprojetada para máquinas**. Não é o ofício de
programar com agente (tema 1 da disciplina), não é a segurança e a identidade de agentes autônomos
(tema 2), não é a infraestrutura de memória e avaliação (tema 3), não é pagamento e comércio
agêntico como categoria de negócio (tema 5). É a camada que fica entre o agente e o recurso: como
um site se anuncia, como ele se deixa usar, quem ele deixa entrar e como cobra por isso.

Encosta em mídia e interação por um ponto muito concreto e muito desconfortável para quem projeta:
**se o principal visitante de uma página é um programa, a página deixa de ser o lugar onde o
trabalho de design acontece.** A composição, o ritmo de leitura, a hierarquia tipográfica, o
percurso — tudo isso pressupõe um olho que percorre. Um agente não percorre: ele extrai, decide e
age. O que ele lê do que projetamos é uma fração, e essa fração é escolhida por ele, não por nós.

Merece mapa de futuro e não levantamento de estado da arte por três razões.

**A primeira é que já aconteceu antes e deu errado.** A "web legível por máquina" é um projeto de
2001, chamado Semantic Web, que nunca chegou. O que chegou foi o `schema.org`, dez anos depois, e
chegou porque o Google passou a dar *rich snippets* a quem marcasse. A diferença entre o que falhou
e o que pegou não é técnica — é de incentivo. Qualquer mapa deste tema que não carregue essa
lembrança sai otimista demais, e a maior parte do que se escreve hoje sobre `llms.txt` e prontidão
agêntica sai otimista demais.

**A segunda é que o dinheiro se moveu antes da técnica.** A parte da internet agêntica que está de
fato em produção não é a descoberta nem a declaração de ferramentas: é a cobrança e o bloqueio. A
Cloudflare pôs preço na porta antes de qualquer padrão de publicação pegar. O primeiro efeito de
massa dos agentes sobre a web não foi "os sites se abriram": foi "os sites fecharam e começaram a
cobrar".

**A terceira é que a pergunta central é jurídica, não de engenharia.** Quando o agente entra logado
com a sua senha, o visitante é você ou é ele? Essa pergunta está num tribunal federal americano
desde o começo de 2026 e a resposta determina o que se pode projetar. Nenhum protocolo resolve isso.

O horizonte de 2046 — vinte anos — não é decorativo. Ele foi escolhido porque a classe de
referência relevante (HTTPS, `robots.txt`, `schema.org`, a própria Semantic Web) opera em décadas,
não em trimestres. Em cinco anos, este tema é uma lista de produtos. Em vinte, é uma pergunta sobre
o que sobrou da web aberta.

## 3. Onde isso está hoje

*Âncora feita com acesso à web em 12/09/2026. Trinta e quatro fontes abertas e lidas; a lista está
na seção 11 e o que não abriu está na 12.4.*

### O que já existe e funciona

**O conector virou universal em menos de dois anos.** O Model Context Protocol saiu em novembro de
2024. Em maio de 2026, a API do registro oficial contava 9.652 registros de servidor mais recentes
e 28.959 registros de servidor/versão; o mesmo levantamento achou 15.926 repositórios no GitHub com
o tópico `mcp-server`. O registro está no ar — consultado em 12/09/2026, devolve entradas ativas
com carimbo de estado. Os downloads mensais dos SDKs foram anunciados em 97 milhões em dezembro de
2025. Uma pesquisa da Stacklok com 100 lideranças técnicas indicou 41% das organizações com
servidores MCP em alguma forma de produção (29% produção limitada, 12% produção ampla).

**A cobrança na porta existe e é operada por infraestrutura de terceiro.** O *pay per crawl* da
Cloudflare usa exatamente o mecanismo que o tema pede: o crawler se autentica por assinatura
(Ed25519, HTTP Message Signatures), recebe um `402 Payment Required` com o preço, e decide. O
changelog do produto mostra que a coisa saiu do anúncio e virou engenharia miúda: em 17/04/2026
entraram os redirecionamentos de crawler de treino para URL canônica e o *Agent Readiness score*
dentro do painel; em 16/06/2026, preço dinâmico por padrão de URI, com o cabeçalho `cf-pay-per-crawl`
indo até a origem para que o site decida o preço em tempo de requisição. Isso não é protótipo.

**O bloqueio existe e é o comportamento padrão de milhões de domínios.** A Content Signals Policy,
de 24/09/2025, estendeu o `robots.txt` para dizer não *quem* entra, mas *o que se pode fazer com o
que foi lido* — três sinais (`search`, `ai-input`, `ai-train`) — e foi aplicada automaticamente a
mais de 3,8 milhões de domínios com o padrão `search=yes, ai-train=no`. O texto da política declara
que as restrições são reserva expressa de direitos sob o Artigo 4 da Diretiva (UE) 2019/790. É a
primeira vez que um arquivo de configuração de servidor vem com fundamentação jurídica embutida.

**A assimetria é medida e é grotesca.** Os dados agregados do Cloudflare Radar, compilados em
junho de 2026, dão 57,5% do tráfego HTML como bot contra 42,5% humano — a primeira vez que a
máquina passa a pessoa. Entre os bots verificados, os crawlers de IA eram 20,3% em maio de 2026,
mais 6,5% de bots de busca com IA. E a razão *crawl-to-refer* — quantas páginas buscadas para cada
visita devolvida — ficou em torno de 11.122:1 para o ClaudeBot no fim de maio de 2026, 1.276:1 para
o GPTBot no primeiro trimestre, 111:1 para o PerplexityBot e 4,9:1 para o Google em março de 2026.
A ordem de grandeza importa mais que o número exato: o Google devolve uma visita a cada cinco
páginas que busca; os agentes devolvem uma a cada milhares.

**A conta já chegou para quem publica.** Os dados da Chartbeat divulgados em março de 2026 medem a
queda de tráfego de busca entre dezembro de 2024 e dezembro de 2025 por porte: **60% para veículo
pequeno** (mil a dez mil páginas/dia), 47% para médio, 22% para grande. Google Search caiu 34%,
Google Discover 15%. E o que veio no lugar não veio: os chatbots, somados, respondem por **menos de
1%** de todas as referências de página vista, mesmo com o ChatGPT crescendo mais de 200% no período.
O total global de páginas vistas caiu só 6% — ou seja, a audiência não sumiu, mudou de dono.

**O direito já está decidindo.** A Amazon processou a Perplexity no fim de 2025 alegando que o
navegador Comet, ao entrar na conta do usuário com as credenciais dele, violava os termos de uso e
a CFAA. Em **10/03/2026** um juiz federal do Distrito Norte da Califórnia concedeu liminar
bloqueando o Comet das páginas logadas; o Nono Circuito suspendeu a liminar dias depois, a
Perplexity protocolou razões em 08/05/2026 e a sustentação oral foi marcada para 11/06/2026 em
Seattle. A questão é de uma clareza rara: **a Amazon sustenta que quem visita é o agente; a
Perplexity sustenta que quem visita é o usuário e o agente é mandatário.** Não achei o desfecho em
fonte aberta (ver 12.5).

**A interface voltou, por dentro.** O MCP Apps (SEP-1865), proposto em 21/11/2025 por mantenedores
da OpenAI, da Anthropic e do projeto MCP-UI, define o esquema `ui://`: uma ferramenta pode devolver
o ponteiro para uma interface renderizável, entregue em `text/html+mcp` dentro de um iframe isolado
no host. Virou a primeira extensão oficial do protocolo em 26/01/2026. Para quem projeta mídia, é o
fato mais importante desta seção: a página não morreu — **mudou de senhorio**.

### O que existe e ainda não funciona

**A publicação para máquina.** O `llms.txt` é o caso mais bem documentado de padrão que foi adotado
sem ser consumido. O estudo da SE Ranking de 07/11/2025, sobre quase 300 mil domínios, achou 10,13%
de adoção e **nenhuma ligação mensurável** entre ter o arquivo e ser citado por IA — o modelo de
predição melhorou quando a variável foi retirada, o que significa que ela funcionava como ruído. E
o resultado que fecha a questão: um levantamento de logs de servidor de cerca de 900 domínios,
entre 04/09/2025 e 13/04/2026, registrou 1.227 requisições ao arquivo, das quais **zero
verificadamente de GPTBot, ClaudeBot, PerplexityBot ou Google-Extended**; 64,7% vieram de um
agregador comercial de dados e 31,9% de navegador humano. O arquivo existe, é servido, e os robôs
para os quais ele foi escrito não o pedem.

**A declaração de capacidades no navegador.** O WebMCB — WebMCP — foi publicado como explicador em
13/08/2025 por autores da Microsoft e do Google, entrou como rascunho no W3C em 10/02/2026 e em
origin trial público no Chrome 149 em 19/05/2026. Continua rotulado como experimental, não está na
trilha de recomendação do W3C, e Firefox e Safari estão engajados sem compromisso. A promessa
técnica é boa (declarar ferramenta em vez de simular clique), mas a adoção medida é quase nula: ao
varrer os 200 mil maiores domínios em abril de 2026, a Cloudflare achou **menos de 15 sites** com
MCP Server Cards ou catálogos de API.

**O ranking de prontidão.** O Not Human Search indexa sites por prontidão agêntica com pesos
declarados — `llms.txt` 25 pontos, `ai-plugin.json` 20, OpenAPI 20, API estruturada 15, MCP 10,
`robots.txt` 5, schema.org 5 — e mantém um servidor MCP para ser consultado por agentes. Consultado
em 12/09/2026, o site declarava **5.316 sites indexados e score médio 38**. Um índice de cinco mil
sites não é um índice da web; é uma aposta.

**A interface conversacional do site.** O NLWeb, da Microsoft (2025), transforma conteúdo marcado em
schema.org numa interface de pergunta em linguagem natural, com endpoints `/ask` e `/mcp` — cada
instância é um servidor MCP. Adotantes iniciais: Shopify, Snowflake, O'Reilly, Tripadvisor,
Eventbrite, Hearst. Não há métrica pública de uso.

**O pagamento por requisição fora do nicho.** O x402, hoje sob a x402 Foundation na Linux
Foundation, declarava em 25/08/2026, para os 30 dias anteriores, **75,41 milhões de transações,
US$ 24,24 milhões de volume, 94,06 mil compradores e 22 mil vendedores**. É volume real, mas é
volume de um ecossistema de stablecoin. Nenhum veículo de imprensa grande cobrando por requisição
por esse trilho apareceu nas buscas.

**O navegador agêntico dedicado.** O ChatGPT Atlas foi lançado em outubro de 2025 e **descontinuado
em 09/08/2026**, com a capacidade agêntica dobrada para dentro do ChatGPT e do Codex. É o
contraexemplo mais útil do mapa: a forma óbvia — um navegador só para o agente — não vingou.

**Os próprios agentes.** No WebArena, 812 tarefas reprodutíveis em sites autohospedados, o
*leaderboard* atualizado em 29/06/2026 traz 74,3% para o topo (WebTactix/DeepSeek v3.2), 71,6% e
71,2% em seguida, contra 78,24% de linha de base humana e 14,41% do agente GPT-4 original. Em
tarefas mais longas (WebChoreArena), os mesmos sistemas caem para a faixa dos 37%. Ou seja: o
agente chegou perto do humano no caso fácil e continua longe no caso difícil — e o caso difícil é
onde mora a promessa de delegação.

### Quem constrói

Seis atores, com papéis distintos e incentivos que não coincidem:

1. **Anthropic** — dona do MCP, que doou o protocolo e o registro. Ganha com a camada aberta e é,
   ao mesmo tempo, o crawler com a pior razão *crawl-to-refer* medida.
2. **Cloudflare** — não define o que se publica, define quem entra e quanto custa. Está na frente
   de uma fatia grande da web e transformou bloqueio e cobrança em produto padrão. É hoje o ator
   com mais poder prático sobre a internet agêntica, e não é fabricante de agente.
3. **Google e Microsoft** — coautores do WebMCP, donos dos dois motores de navegador que importam
   e, no caso do Google, do único incentivo capaz de fazer um padrão pegar (o Lighthouse ganhou
   uma categoria "Agentic browsing audits" em 05/05/2026; ainda é auditoria, não ranqueamento).
4. **OpenAI** — o maior consumidor de web por agente e o lugar onde a publicidade da era agêntica
   está de fato acontecendo: o piloto de anúncios chegou a 31 mercados europeus por volta de
   24/08/2026, com carrosséis de produto e teste de medição.
5. **Consórcios de quem publica** — RSL Collective, com Reddit, Yahoo, Ziff Davis, O'Reilly, Vox,
   USA Today, além de Akamai, Fastly, Cloudflare e Creative Commons; e o IAB, que declarou estar
   montando um arcabouço de medição de publicidade em IA com alvo em novembro de 2026 — porque
   anúncio começou a ser servido para bot e ninguém sabe quanto isso vale.
6. **A academia**, que chegou tarde e está tentando nomear: *Agentic Web* (Yang e outros, SJTU/UC
   Berkeley/HKUST, 28/07/2025) propõe as três dimensões — inteligência, interação, economia — e o
   termo que mais rende neste mapa, **"economia da atenção do agente"**: serviços competindo por
   invocação em vez de por clique. *Towards an Agent-First Web* (Bandara e outros, 06/2026) é um
   manifesto de projeto que defende convergência deliberada em vez de divergência espontânea.

### Que número descreve a adoção hoje

Escolhendo um só: **57,5% do tráfego HTML é máquina** (Cloudflare Radar, junho de 2026). É o número
que descreve o tema, porque é o ponto em que a premissa de projeto da web — "do outro lado tem uma
pessoa" — deixou de ser verdadeira na média.

Quatro números secundários, porque um número sozinho engana:
- **10,13%** dos domínios com `llms.txt`, e **zero** requisições verificadas de bot de fronteira a
  ele: adoção de publicação sem consumo.
- **< 15** sites entre os 200 mil maiores com MCP Server Card (abril de 2026): adoção de protocolo
  praticamente nula na web aberta.
- **< 1%** das referências de página vista vindas de chatbot, contra **60%** de queda de busca em
  veículo pequeno: a troca não está sendo paga.
- **9.652** servidores no registro oficial de MCP (maio de 2026): a camada agêntica que existe está
  dentro de ferramentas de trabalho, não em sites.

### O que é maduro e por isso fica aqui, como contexto

- **API REST documentada, SDK e scraping.** Maduros há mais de uma década. O agente que consome uma
  API REST não é novidade nenhuma.
- **`robots.txt`.** Existe desde 1994, está em 92,8% das empresas da Fortune 500 e em 78% dos 200
  mil maiores domínios. É o contraste que mede tudo o mais desta seção.
- **`schema.org` e dados estruturados.** Em 53,8% da Fortune 500. Já passou de maioria; é contexto.
- **IA generativa como categoria.** Maduro. Não entra.
- **Comércio agêntico com cartão** (ACP de OpenAI e Stripe, de 29/09/2025; UCP do Google, de
  11/01/2026, com Amazon, Meta, Microsoft, Salesforce e Stripe no conselho técnico desde
  24/04/2026). Não é maduro, mas **é o tema 5 da disciplina** e fica de fora por recorte, aparecendo
  só onde toca o objeto deste mapa.

## 4. As disrupções-raiz

### D1 — O site passa a expor ferramentas em vez de telas

**O que rompe.** Rompe a identidade entre *interface* e *superfície visível*. Desde 1993, projetar
um serviço na web é projetar o que se vê: a tela é o contrato. Quando o site declara ferramentas —
`registerTool` com nome, descrição em linguagem natural e esquema JSON —, o contrato passa a ser um
texto que ninguém vê, e a tela vira uma das saídas possíveis, não a única. Isso não é "a mesma
coisa, melhor": é a transferência do contrato de uso da camada visual para a camada semântica, com
um público diferente do outro lado.

**Por que agora, e não há cinco anos.** Três pré-condições entraram juntas. (a) O MCP resolveu o
problema de *como* declarar, e virou o conector universal em dezoito meses. (b) A navegação por
captura de tela e DOM ficou boa o suficiente para ser útil e cara o suficiente para doer — é o
argumento explícito do explicador do WebMCP: agentes hoje observam "screenshots, DOM snapshots" e
simulam entrada, o que é frágil e caro. (c) Os dois fabricantes de navegador que importam
escreveram a especificação juntos, em agosto de 2025, e o Chrome pôs em origin trial em maio de
2026. Em 2021 faltavam as três.

**Onde está na difusão.** **Produto de nicho**, com um pé em adoção precoce *dentro de ferramentas
de trabalho* (9.652 servidores no registro, 41% das organizações pesquisadas com algo em produção) e
praticamente **nenhum pé na web aberta** (menos de 15 sites entre os 200 mil maiores com MCP Server
Card). Esta assimetria é o fato central de D1: a camada agêntica pegou entre desenvolvedores e não
pegou entre sites.

**O que ainda falta acontecer.** Suporte estável em navegador além do Chrome; um incentivo que
recompense quem declara (hoje o Lighthouse audita, não ranqueia); resposta a quem paga a segunda
superfície; e uma resposta ao problema de segurança do registro, que já teve envenenamento
documentado.

**Quem bloqueia.** Plataformas que vivem do controle do funil — marketplaces, agregadores de
viagem, redes sociais. Declarar ferramentas é entregar a função sem a intermediação. O bloqueio
delas não é passivo: é o processo da Amazon contra a Perplexity, que é D3.

### D2 — Buscar um recurso passa a custar dinheiro na hora

**O que rompe.** Rompe o acordo tácito que sustentou a web comercial: *servir uma requisição é
grátis porque a atenção que ela gera paga a conta depois*. Quando o leitor é máquina não há atenção
depois — a razão *crawl-to-refer* mede exatamente o tamanho do buraco. O `402 Payment Required`, um
código reservado em 1997 e nunca usado, deixa de ser piada de especificação e vira a resposta
padrão para um visitante que não tem olho. Não é "monetizar melhor": é mudar o **momento** em que o
valor é capturado, da saída (atenção, conversão) para a entrada (acesso).

**Por que agora, e não há cinco anos.** (a) A assimetria virou mensurável e pública — sem o Radar
da Cloudflare, ninguém saberia que a razão é de milhares para um. (b) A cobrança pôde ser
terceirizada: nenhum site precisou construir faturamento, tarifação e verificação de assinatura; um
intermediário que já está na frente de boa parte da web fez isso. (c) Existe, pela primeira vez, um
trilho de liquidação que não exige conta e cartão — o x402 move dezenas de milhões de transações por
mês. Há cinco anos, cobrar por requisição exigia que cada site virasse uma operadora.

**Onde está na difusão.** **Produto de nicho caminhando para adoção precoce.** O produto existe,
está em produção, tem configuração fina (preço por padrão de URI desde 16/06/2026) e tem
contraparte de licenciamento coletivo (RSL, com pay-per-crawl e pay-per-inference expressos no
`robots.txt`). Ainda está longe da maioria e depende fortemente de um fornecedor.

**O que ainda falta acontecer.** Interoperabilidade entre os três desenhos (pay per crawl, x402,
RSL); um modo de cobrar que não passe por um único intermediário; e, sobretudo, **compradores** —
falta a evidência de que o fabricante de agente paga em vez de simplesmente não ir.

**Quem bloqueia.** Os próprios fabricantes de agente, cujo incentivo é que o acesso continue
gratuito, e que têm a alternativa barata de ignorar quem cobra. O efeito disso está na roda como
e8.

### D3 — "Visitar" vira um ato delegado, e a web precisa decidir de quem é a visita

**O que rompe.** Rompe a categoria de *visitante*, que é a unidade sobre a qual se construiu tudo:
métrica, publicidade, termo de uso, segurança, lei de acesso não autorizado. Quando o agente entra
**logado como você**, com a sua credencial, a seu pedido, ele não é um crawler nem é você. A web não
tem essa categoria — e a está inventando por duas vias simultâneas e independentes: assinatura
criptográfica (Web Bot Auth, já verificado em produção por Cloudflare, AWS WAF, Akamai, HUMAN e
Vercel antes de ser padrão) e decisão judicial (Amazon × Perplexity).

*Fronteira declarada:* a **detecção e a identidade técnica** de agentes é o tema 2 da disciplina.
Aqui o objeto é outro: o **estatuto** do visitante-máquina — o que ele é para o contrato, para a
métrica e para a lei, e o que isso faz com o desenho de quem publica.

**Por que agora, e não há cinco anos.** (a) Só agora existe agente que entra logado e transaciona —
antes o bot era anônimo e o problema era simples. (b) A infraestrutura de verificação chegou antes
do padrão: a arquitetura de Web Bot Auth é um rascunho individual do IETF, expirado na versão 05
(02/03/2026) e substituído, e mesmo assim já é verificada em produção por cinco grandes. (c) Há,
pela primeira vez, um caso concreto com liminar, com apelação e com data de sustentação oral.

**Onde está na difusão.** **Adoção precoce na verificação**, **laboratório na definição jurídica**.
A cadeia inteira que depende da segunda perna carrega confiança baixa.

**O que ainda falta acontecer.** Uma decisão de mérito (e depois a segunda, e a divergência entre
circuitos); a adoção do rascunho por um grupo de trabalho do IETF; e uma resposta para o agente que
roda na máquina da própria pessoa e não tem quem assine por ele.

**Quem bloqueia.** Marketplaces e plataformas com receita de intermediação, que têm incentivo
direto para que o agente delegado seja juridicamente um invasor. E, do outro lado, os fabricantes
de agente, que têm incentivo para que ele seja juridicamente o usuário.

### D4 — A descoberta troca a atenção pela invocação

**O que rompe.** Rompe o objeto sobre o qual a mídia digital foi inteiramente construída: a
atenção. A economia da web media impressão, tempo, clique — todos definidos por um olho. Se quem
escolhe a fonte é um programa que compara custo de parsing, confiabilidade de ferramenta e
completude do dado, a métrica de sucesso deixa de ser "fui visto" e vira "fui chamado". É o que o
artigo do Agentic Web chama de *economia da atenção do agente*. Isso não melhora a publicidade
display: **retira a superfície** em que ela existia.

**Por que agora, e não há cinco anos.** (a) A queda já foi medida e é grande — 60% em veículo
pequeno em dois anos — e não foi compensada: chatbot é menos de 1% das referências. (b) Apareceram
os primeiros índices que ranqueiam por prontidão de máquina (Not Human Search; o *Agent Readiness
score* da Cloudflare, de abril de 2026; a categoria de auditoria agêntica do Lighthouse, de maio de
2026). (c) O mercado publicitário começou a se mexer no lugar certo: a Time servindo anúncio na
versão da página voltada para chatbot em agosto de 2026, a Perplexity bloqueando e chamando de
enganoso, e o IAB montando medição porque ninguém sabe quanto vale um anúncio servido a um bot.

**Onde está na difusão.** **Produto de nicho.** Os índices existem e são minúsculos — cinco mil
sites, score médio 38. A indústria de otimização já renomeou o que faz (AEO, GEO) antes de ter
evidência de que funciona; é exatamente o padrão de 2011 com o `schema.org`, mas sem o incentivo do
Google que fez aquilo pegar.

**O que ainda falta acontecer.** Um gatekeeper transformar prontidão em ranking ou em preço. Sem
isso, D4 não sai do lugar — e a evidência do `llms.txt` mostra o que acontece quando falta: adota-se
o arquivo, ninguém o pede, e a categoria perde crédito.

**Quem bloqueia.** O próprio Google, cujo negócio de busca depende de o clique continuar
existindo, e que por isso auditou a prontidão agêntica em vez de ranqueá-la. É um bloqueio por
omissão, e é o mais eficaz de todos.

### Recusas registradas

- **Candidato `llms.txt` recusado como raiz:** não rompe nada. Adoção de 10,13% em ~300 mil domínios
  (SE Ranking, 07/11/2025) sem consumo verificável (zero requisições de bot de fronteira em ~900
  domínios entre 09/2025 e 04/2026). Não passa na pergunta 1 do critério — não há prática que deixe
  de valer. Tratado como sinal fraco invertido na seção 6 e como efeito e19.1.
- **Candidato "navegador agêntico" (ChatGPT Atlas, Comet) recusado como raiz:** é produto, não
  ruptura — e o principal deles foi descontinuado em 09/08/2026. Tratado como contexto na seção 3.
- **Candidato "API REST / SDK / scraping" recusado como raiz:** adoção em maioria há mais de uma
  década. Contexto na seção 3.
- **Candidato "`robots.txt` e `schema.org`" recusados como raiz:** maioria desde sempre (92,8% e
  53,8% da Fortune 500). Servem de classe de referência, não de disrupção.
- **Candidato "comércio agêntico / checkout por agente" recusado por recorte:** é o tema 5 da
  disciplina. Entra só onde toca o objeto deste mapa (e11, e13).
- **Candidato "identidade e detecção de agente" recusado por recorte:** é o tema 2. A parte que fica
  aqui é o estatuto do visitante, não a técnica de detecção.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O site passa a expor ferramentas declaradas em vez de telas
    efeitos:
      - id: e1
        ordem: 1
        efeito: Sites de serviço publicam um catálogo de ações executáveis ao lado da interface visual
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O projeto de interface se divide em dois ofícios, quem desenha a tela e quem escreve o contrato da ferramenta
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Escrever a descrição de uma ferramenta vira competência de design, porque é o texto que decide se o produto é escolhido
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A taxa de conclusão de tarefa substitui o tempo de permanência como métrica de sucesso do produto
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Empresas publicam a própria taxa de conclusão agêntica como publicam disponibilidade, e o número entra em contrato
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: Sites que não declaram ferramentas seguem acessíveis com taxa de erro maior, e o agente aprende a preferir os que declaram
            sinal: fraco
            prazo: 2035
            confianca: baixa
      - id: e2
        ordem: 1
        efeito: A interface volta a existir dentro do host do agente, entregue como componente renderizável no lugar de página no navegador
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Projetar a página migra para projetar o componente que roda dentro do assistente de outra empresa, com grade e tema ditados pelo host
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A identidade visual de marca perde a superfície onde se expressava e passa a viver em nome, voz e comportamento da ferramenta
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A loja de aplicativos da era agêntica é o catálogo de extensões do assistente, com curadoria e taxa de intermediação
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Quem publica mídia passa a negociar distribuição com três ou quatro hosts de assistente, como negociou com duas lojas de aplicativo
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Manter duas superfícies dobra o custo de manutenção e as duas divergem, com a ferramenta prometendo o que a tela não faz
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Organizações pequenas abandonam a camada agêntica e a delegam a um intermediário, concentrando a web de máquina em poucos provedores
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O equivalente agêntico do site institucional vira um registro em diretório de terceiro, e o domínio próprio perde função para quem é pequeno
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A navegação por captura de tela e DOM permanece como o caminho universal para a maioria dos sites, que nunca declarará nada
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Forma-se um mercado de tradutores que geram a camada de ferramenta a partir do HTML alheio sem consentimento do site
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Sites processam esses tradutores por criar uma interface derivada da sua, abrindo uma disputa de propriedade sobre a forma e não sobre o conteúdo
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Acessibilidade humana e legibilidade de máquina disputam o mesmo orçamento e a mesma equipe, e a segunda ganha por ter retorno mensurável
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Texto alternativo e marcação semântica são abandonados onde o modelo já interpreta a imagem, e o leitor de tela perde o que o agente não precisa
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A revisão do European Accessibility Act passa a exigir prova de navegabilidade por leitor de tela, e não só conteúdo disponível em formato legível por máquina
                sinal: fraco
                prazo: 2042
                confianca: baixa
  - disrupcao: Buscar um recurso passa a custar dinheiro na hora, com o HTTP 402 como resposta rotineira
    efeitos:
      - id: e6
        ordem: 1
        efeito: O servidor responde com preço e o agente decide se paga, tornando o acesso uma transação e não um direito de porta aberta
        sinal: forte
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O orçamento vira parâmetro de projeto de produto, com teto por tarefa definido pelo usuário e negociado pelo agente
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Quanto custou esta resposta vira elemento de interface tão comum quanto o relógio, e transparência de custo entra no critério de escolha de assistente
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Arquivo, biblioteca e órgão público decidem se cobram da máquina o que não cobram da pessoa, e cada resposta vira política pública
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Cria-se tarifa social de acesso de máquina para pesquisa e educação, com os mesmos efeitos de exclusão do acesso institucional a periódico científico
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O preço de acesso vira sinal de escassez, e o que continua gratuito passa a ser lido como commodity inclusive pelo agente
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Veículos dividem o acervo em duas faixas, a que se dá de graça para ser citada e a que se cobra para ser usada
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A faixa gratuita degenera em isca escrita para máquina, e a diferença entre conteúdo e anúncio desaparece na camada que o agente lê
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Cobrar faz o agente ir a outro lugar, e o site que cobra some do conjunto de respostas em vez de ser pago
        sinal: medio
        prazo: 2031
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Forma-se licenciamento coletivo no molde do RSL Collective, porque cobrar sozinho equivale a se apagar
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A negociação passa a ser entre quatro ou cinco blocos e quatro ou cinco fabricantes de agente, e o site individual perde voz no preço do próprio texto
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O custo de servir máquina entra no orçamento de infraestrutura como item próprio, separado do tráfego humano
        sinal: medio
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A sustentabilidade de um site passa a ser calculada por requisição de máquina, e publicar mais deixa de ser sempre melhor
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: Publicar menos e mais denso vira estratégia editorial explícita, porque cada página a mais é custo de servir sem receita de leitura
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: Micropagamento por requisição só funciona onde já existe carteira, e a fronteira do pagamento vira fronteira de acesso
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: No Brasil o trilho de pagamento de máquina nasce sobre o Pix e não sobre stablecoin, porque a liquidação instantânea já existe e é gratuita
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A web brasileira cobra do agente estrangeiro num trilho que ele não fala, e o acesso se fragmenta por jurisdição de pagamento
                sinal: fraco
                prazo: 2041
                confianca: baixa
  - disrupcao: Visitar vira um ato delegado, e a web tem de decidir de quem é a visita
    efeitos:
      - id: e11
        ordem: 1
        efeito: Todo site passa a distinguir três visitantes, a pessoa, o agente que age por uma pessoa logada e o crawler que age por uma empresa
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: Os termos de uso ganham cláusula de delegação, e o que o seu agente pode fazer em seu nome vira contrato em vez de configuração
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A responsabilidade por erro do agente é atribuída por contrato antes de ser atribuída por lei, e as condições variam de plataforma para plataforma
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: Sites oferecem duas portas com preço e permissão diferentes para a mesma função, e a porta de máquina é a mais restrita
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e12
        ordem: 1
        efeito: A identidade credenciada do agente vira pré-requisito de acesso, e quem não tem quem assine por ele fica de fora
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: O agente pessoal rodando no computador da própria pessoa perde acesso à web funcional, e ter agente passa a significar ter conta num dos grandes
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A assimetria entre agentes vira assimetria de acesso a serviço público digital, e quem tem o agente melhor consegue a vaga e a consulta antes
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: A decisão judicial sobre se o agente é o usuário passa a valer mais que qualquer especificação técnica
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Jurisdições divergem, e onde o agente é o usuário o comércio agêntico prospera enquanto onde ele é terceiro exige acordo bilateral prévio
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Fabricantes de agente geo-restringem capacidades por país, e a web que o seu agente alcança passa a depender de onde você está
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: A exigência de credenciamento pesa contra a própria delegação e reduz o número de sites que o agente consegue de fato usar
        sinal: fraco
        prazo: 2032
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: O agente opera preferencialmente dentro de poucos ecossistemas que já o credenciam, e a web aberta vira a exceção
            sinal: fraco
            prazo: 2037
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: O domínio próprio deixa de ser o endereço do serviço e vira apenas a fonte citada, enquanto a transação acontece dentro do ecossistema
                sinal: fraco
                prazo: 2043
                confianca: baixa
  - disrupcao: A descoberta troca a atenção pela invocação, e a prontidão de máquina vira o ranking
    efeitos:
      - id: e15
        ordem: 1
        efeito: Nasce um ranking de prontidão agêntica com o peso que o PageRank teve, e a otimização passa a mirar o analisador sintático em vez do leitor
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: A indústria de otimização se reconverte, e a entrega deixa de ser posição na página de resultado e passa a ser frequência de invocação
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e15.1.1
                ordem: 3
                efeito: O score de prontidão é gamificado como o PageRank foi, e surge spam agêntico com ferramentas declaradas que não fazem o que prometem
                sinal: fraco
                prazo: 2035
                confianca: media
          - id: e15.2
            ordem: 2
            efeito: A métrica de audiência muda de pessoa para tarefa, e o relatório passa a dizer quantas tarefas a sua fonte ajudou a concluir
            sinal: fraco
            prazo: 2034
            confianca: media
      - id: e16
        ordem: 1
        efeito: A publicidade display perde a superfície, porque não há impressão onde não há olho
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e16.1
            ordem: 2
            efeito: O anúncio migra para dentro da resposta do agente, e quem paga passa a ser quem quer ser recomendado em vez de quem quer ser visto
            sinal: medio
            prazo: 2031
            confianca: alta
            efeitos:
              - id: e16.1.1
                ordem: 3
                efeito: A separação entre recomendação e anúncio deixa de ser visual e passa a depender de aviso textual que o usuário não lê porque não leu a página
                sinal: fraco
                prazo: 2034
                confianca: media
          - id: e16.2
            ordem: 2
            efeito: Veículos servem uma versão da página para bot e outra para gente, e a prática é disputada como engano por quem opera o agente
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e16.2.1
                ordem: 3
                efeito: Escrever para o agente e escrever para a pessoa viram duas redações com chefias distintas dentro da mesma casa
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e17
        ordem: 1
        efeito: O número de páginas vistas deixa de medir qualquer coisa e a redação perde o instrumento com que decidia o que publicar
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e17.1
            ordem: 2
            efeito: A pauta passa a ser decidida pelo que o agente não consegue responder sozinho, isto é apuração, presença física e fonte fechada
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e17.1.1
                ordem: 3
                efeito: O que é facilmente sintetizável deixa de ser produzido por humano, e a base factual que alimenta o agente fica mais rala com o tempo
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e18
        ordem: 1
        efeito: A marca vira um parâmetro dentro de uma comparação que ninguém vê acontecer
        sinal: fraco
        prazo: 2035
        confianca: media
        efeitos:
          - id: e18.1
            ordem: 2
            efeito: O investimento migra de campanha para presença estruturada, isto é estar no índice certo com o dado certo em vez de aparecer
            sinal: medio
            prazo: 2033
            confianca: media
      - id: e19
        ordem: 1
        efeito: A prontidão agêntica permanece largamente teatro enquanto nenhum comprador punir quem não a tem
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e19.1
            ordem: 2
            efeito: Padrões adotados e não consumidos drenam a credibilidade da categoria inteira e atrasam a adoção dos que funcionariam
            sinal: forte
            prazo: 2030
            confianca: alta
            efeitos:
              - id: e19.1.1
                ordem: 3
                efeito: A prontidão agêntica só se torna obrigatória quando um guardião de acesso a transforma em ranking ou em preço, como o Google fez com HTTPS e com dados estruturados
                sinal: medio
                prazo: 2033
                confianca: media
```

### O que o bloco não diz: os mecanismos

O YAML lista os efeitos; ele não carrega o *porque*. Cada efeito abaixo aparece na forma
`porque <pai> faz <mecanismo>`, que é a exigência que separa uma roda de uma lista de palpites.

**D1 — O site expõe ferramentas em vez de telas**

- **e1** *(catálogo de ações ao lado da tela)* — porque o custo de operar por captura de tela é alto
  em token e frágil na manutenção, e o explicador do WebMCP mede a diferença: declarar ferramenta em
  vez de interpretar pixel é uma ordem de grandeza mais barato. Quem tem volume de tarefa agêntica
  chegando descobre isso na fatura. **Classe de referência:** `schema.org`, lançado em 2011 e hoje em
  53,8% da Fortune 500 — quinze anos para chegar à metade das grandes, *com* o Google recompensando.
  Sem recompensa equivalente, 2032 já é um prazo generoso; ver 7.3.
- **e1.1** *(o ofício se divide)* — porque e1 cria dois artefatos com públicos diferentes, mantidos
  em ritmos diferentes: a tela muda por campanha, o contrato de ferramenta muda por versão. Quem
  escreve um não é quem desenha o outro. **Referência:** a separação entre *front-end* e API interna
  na década de 2010, que levou cerca de cinco anos para virar cargo com nome.
- **e1.1.1** *(descrição de ferramenta vira design)* — porque e1.1 põe um texto entre o produto e a
  decisão de compra, e a redação desse texto passa a determinar se a ferramenta é escolhida entre as
  concorrentes. É a microcópia da era agêntica, com a diferença de que o leitor não perdoa
  ambiguidade.
- **e1.2** *(taxa de conclusão substitui tempo de permanência)* — porque um agente não permanece.
  Tempo na página, com agente do outro lado, mede latência, não interesse. O único número que
  sobrevive à troca de leitor é "a tarefa foi concluída?". O WebArena já é isso: 812 tarefas, uma
  taxa.
- **e1.2.1** *(taxa publicada e contratada)* — porque e1.2 cria um número comparável entre
  fornecedores, e todo número comparável entre fornecedores acaba em SLA. **Referência:** *uptime*,
  que levou cerca de uma década para sair do painel interno e entrar no contrato.
- **e1.3** *(seleção silenciosa dos que declaram)* — porque e1 cria diferença de confiabilidade
  entre quem declara e quem não declara, e um agente que otimiza taxa de sucesso vai preferir o
  previsível. Confiança **baixa** de propósito: isto pressupõe que o agente tenha memória de
  fracasso entre sessões, o que hoje não é padrão.
- **e2** *(a interface volta dentro do host)* — porque a camada de ferramenta é boa para executar e
  péssima para *escolher*: escolher hotel, ver a peça, comparar visualmente. O MCP Apps
  (26/01/2026) é exatamente o remendo dessa lacuna, e o esquema `ui://` entrega HTML dentro de um
  iframe isolado no host. **Referência:** AMP do Google (2015), que levou cerca de três anos para
  ser adotado por grandes veículos — e depois foi abandonado, o que é parte do aviso.
- **e2.1** *(projetar dentro do assistente do outro)* — porque e2 move a renderização para um
  ambiente cujas regras o publicador não controla: grade, tema, modo escuro, altura máxima, o que
  pode e o que não pode rodar num iframe isolado. **Referência:** *Instant Articles* e *AMP*, onde a
  perda de controle de layout foi imediata e a perda de identidade veio depois.
- **e2.1.1** *(a marca sai da superfície)* — porque e2.1 remove os elementos em que identidade visual
  se expressava. Sobram nome, tom das descrições e comportamento — e o comportamento de uma
  ferramenta é um objeto de design que ninguém ainda sabe projetar.
- **e2.2** *(o catálogo de extensões é a nova loja)* — porque e2 cria dependência de distribuição:
  para ser renderizado, é preciso estar instalado. Onde há instalação, há curadoria; onde há
  curadoria, há taxa. **Referência:** App Store, três anos de loja aberta até a comissão virar o
  centro da discussão.
- **e2.2.1** *(negociação com três ou quatro hosts)* — porque e2.2 concentra a distribuição no mesmo
  número de atores que hoje fazem assistente. É o duopólio de loja de aplicativo repetido com outro
  nome.
- **e3** *(duas superfícies divergem)* — **retroação de D1.** Porque e1 cria um segundo artefato que
  precisa ser mantido em paridade com o primeiro, e paridade é a coisa que mais falha em software.
  Quando divergem, a ferramenta promete o que a tela não entrega, e a confiança no caminho agêntico
  cai. **Referência:** a divergência entre site móvel e site desktop nos anos 2010, que foi o que
  matou o padrão `m.` e forçou o responsivo.
- **e3.1** *(o pequeno terceiriza)* — porque o custo fixo de e3 é indiferente ao tamanho do site, e
  para o pequeno isso é proibitivo. **Referência:** certificado SSL antes do Let's Encrypt: o custo
  era pequeno em valor absoluto e mesmo assim excluiu milhões de sites, até alguém o zerar.
- **e3.1.1** *(o domínio próprio perde função)* — porque e3.1, repetido por uma década, faz com que
  a existência agêntica de uma organização pequena seja uma linha no diretório de outra empresa.
- **e4** *(DOM e captura de tela permanecem)* — porque a cauda longa da web nunca vai declarar nada:
  menos de 15 sites entre os 200 mil maiores tinham MCP Server Card em abril de 2026, e o `robots.txt`
  levou três décadas para chegar a 78%. O agente que só funciona onde há declaração não funciona.
  Confiança **alta** e sinal **forte** porque é o estado de fato hoje, não uma previsão.
- **e4.1** *(mercado de tradutores)* — porque e4 cria demanda por uma camada que o site não fornece,
  e alguém sempre a fornece por fora. **Referência:** os *scrapers* de voo e de preço nos anos 2000,
  que viraram indústria antes de virarem processo judicial.
- **e4.1.1** *(processo por interface derivada)* — porque e4.1 produz um artefato que é claramente
  derivado do trabalho do site e claramente não é cópia do conteúdo. O direito não tem categoria
  pronta para "alguém publicou uma API da minha tela".
- **e5** *(acessibilidade humana perde para legibilidade de máquina)* — **quem perde.** Porque e1 e
  e4 criam, dentro da mesma equipe, um trabalho de estruturação com retorno mensurável (taxa de
  conclusão, invocação), enquanto a acessibilidade humana continua com retorno difuso e obrigação
  legal fraca. Zong e Elavsky nomeiam isso em 20/05/2026: texto plano otimizado para modelo **não é**
  HTML bem estruturado para leitor de tela — o primeiro achata, o segundo dá o que navegar. E a
  linha de base é péssima: mais de 95% do primeiro milhão de páginas com falha de acessibilidade,
  medido em 2026.
- **e5.1** *(o texto alternativo some)* — porque e5 realoca o esforço, e o argumento técnico para
  abandonar o `alt` já está pronto: o modelo lê a imagem sozinho. O que o modelo lê sozinho, o
  leitor de tela não lê.
- **e5.1.1** *(a regra passa a exigir navegabilidade)* — porque e5.1 produz um dano concreto e
  atribuível a um grupo com representação organizada, e o instrumento existente (European
  Accessibility Act, em vigor desde junho de 2025) já regula disponibilidade sem regular
  navegabilidade. Confiança **baixa**: depende de litígio que ainda não existe.

**D2 — Buscar um recurso passa a custar dinheiro na hora**

- **e6** *(preço na porta)* — porque a razão *crawl-to-refer* tornou visível que servir máquina é
  custo sem receita, e porque a cobrança pôde ser terceirizada para quem já está na frente do
  tráfego. O mecanismo está implementado: `402` com preço, assinatura Ed25519, e desde 16/06/2026
  preço dinâmico por padrão de URI com o cabeçalho `cf-pay-per-crawl` chegando à origem. Sinal
  **forte**, confiança **alta**: não é projeção, é changelog.
- **e6.1** *(orçamento como parâmetro de produto)* — porque e6 introduz uma variável que o usuário
  precisa controlar, e nenhuma delegação sobrevive sem teto. O x402 já trabalha com essa forma —
  75,41 milhões de transações em 30 dias até 25/08/2026 — ainda que num ecossistema fechado.
- **e6.1.1** *(o custo vira elemento de interface)* — porque e6.1 transforma o gasto numa decisão
  recorrente do usuário, e decisão recorrente precisa de indicador permanente. Para quem projeta
  interação, este é um dos poucos elementos de tela genuinamente novos deste mapa.
- **e6.2** *(arquivo e biblioteca têm de decidir)* — porque e6 apresenta a conta a instituições que
  nunca cobraram de leitor. A escolha não é técnica: é sobre o que "acesso público" significa quando
  o público é uma frota.
- **e6.2.1** *(tarifa social de acesso de máquina)* — porque e6.2, resolvido pela via do desconto em
  vez da via da gratuidade, reproduz o desenho do acesso institucional a periódico, com o mesmo
  efeito colateral: quem está dentro de uma instituição tem; quem está fora, não.
- **e7** *(preço como sinal de escassez)* — porque e6 cria um mercado onde antes havia só um
  comum, e em mercado o preço zero é informação. **Referência:** o que aconteceu com dados abertos
  nos anos 2010 — o que era gratuito virou insumo de terceiro e deixou de ser lido como valioso.
- **e7.1** *(duas faixas de acervo)* — porque e7 deixa quem publica com dois objetivos
  incompatíveis (ser citado exige estar aberto; ser pago exige estar fechado) e a saída de engenharia
  é segmentar. É exatamente o desenho do RSL: pay-per-crawl para um conjunto, atribuição livre para
  outro.
- **e7.1.1** *(a faixa livre vira isca)* — porque e7.1 dá à faixa gratuita uma função única, atrair
  citação, e conteúdo com função única converge para a forma mais eficiente daquela função. O nome
  disso, quando a superfície era humana, era *conteúdo de SEO*.
- **e8** *(cobrar afasta o agente)* — **retroação de D2.** Porque o agente tem alternativa barata:
  a web é redundante e a maior parte do que se cobra existe de graça em outro lugar, pior escrito.
  Confiança **alta** porque o mecanismo é aritmético, não especulativo.
- **e8.1** *(licenciamento coletivo)* — porque e8 torna a cobrança individual autodestrutiva, e a
  saída histórica para isso é o licenciamento coletivo. **Referência direta:** ECAD e sociedades de
  gestão coletiva de direito musical, que levaram décadas e se tornaram poder próprio. O RSL
  Collective é a tentativa análoga, montada em 2025 com apoio de Reddit, Yahoo, Ziff Davis,
  O'Reilly, Vox e USA Today.
- **e8.1.1** *(o site individual perde voz)* — porque e8.1 cria um intermediário com poder de
  barganha e, como todo intermediário com poder de barganha, ele negocia em nome de um agregado em
  que o caso particular se dissolve.
- **e9** *(custo de máquina como item de orçamento)* — porque e6 e e8 obrigam a separar as duas
  contas, e porque o volume já justifica: 57,5% do tráfego HTML é máquina. Confiança **alta**: em
  parte das organizações isso já é linha de planilha.
- **e9.1** *(sustentabilidade por requisição)* — porque e9 muda a unidade de custo, e quando a
  unidade de custo muda, a estratégia de produção muda atrás. Se cada página publicada gera custo de
  servir sem receita de leitura, publicar mais deixa de ser estratégia.
- **e9.1.1** *(publicar menos e mais denso)* — porque e9.1 inverte o incentivo de volume que
  governou a produção editorial digital por vinte anos.
- **e10** *(a fronteira do pagamento vira fronteira de acesso)* — porque e6 pressupõe um trilho de
  liquidação, e trilho de liquidação é a coisa menos universal da internet. Onde não há carteira, o
  402 não é negociação: é um 403 com outro número.
- **e10.1** *(no Brasil, Pix)* — **nota de recorte.** Porque e10 exige liquidação instantânea e
  barata, e o Brasil já tem isso desde 2020, sem stablecoin e sem intermediário internacional. O
  país tem cerca de 185 milhões de usuários de internet, o que dá escala para um trilho próprio.
  Confiança **baixa**: não achei nenhum piloto de pagamento máquina-a-máquina sobre Pix, e a
  ausência de evidência aqui é grande.
- **e10.1.1** *(fragmentação por jurisdição de pagamento)* — porque e10.1, repetido em cada país com
  trilho instantâneo próprio (Índia com UPI, Brasil com Pix, UE com instant payments), produz
  incompatibilidade na camada de pagamento em vez de na camada de protocolo.

**D3 — Visitar vira um ato delegado**

- **e11** *(três visitantes em vez de um)* — porque o agente logado não cabe em nenhuma das duas
  categorias existentes, e porque a infraestrutura de distinguir já está em produção antes do padrão:
  Cloudflare, AWS WAF, Akamai, HUMAN e Vercel verificam assinatura de Web Bot Auth. Sinal **forte**,
  confiança **alta**: é descrição do presente.
- **e11.1** *(cláusula de delegação nos termos de uso)* — porque e11 cria uma situação em que o site
  precisa dizer o que aceita, e a maneira barata de dizer é contratual, não técnica. A Amazon já
  argumenta exatamente isso: os termos restringem o acesso a humanos.
- **e11.1.1** *(responsabilidade atribuída por contrato antes da lei)* — porque e11.1 chega antes de
  qualquer legislação específica, e o vácuo é preenchido por quem escreve o contrato de adesão. O
  Artigo 50 do AI Act, aplicável desde 02/08/2026, resolve transparência (avisar que é IA), não
  resolve imputação.
- **e11.2** *(duas portas com preços diferentes)* — porque e11 mais D2 dão ao site a capacidade
  técnica de discriminar por tipo de visitante, e quem pode discriminar preço, discrimina.
- **e12** *(credencial como pré-requisito)* — **quem perde.** Porque e11 só funciona se houver o que
  verificar, e verificar exige um emissor. O rascunho de arquitetura do Web Bot Auth é explícito no
  ponto que produz a exclusão: *"se um agente prefere não se identificar, este não é o protocolo
  certo para ele"*. Quem roda agente próprio não tem quem assine por ele.
- **e12.1** *(o agente local perde a web funcional)* — porque e12 transforma "ter agente" em "ter
  conta credenciada", e o agente que roda no computador de casa não tem provedor que responda por
  ele.
- **e12.1.1** *(assimetria de agente vira assimetria de direito)* — porque e12.1, aplicado a serviço
  público digital com fila, produz vantagem mensurável para quem tem o agente melhor. Sharp, Bilgin,
  Gabriel e Hammond nomeiam as três dimensões — disponibilidade, qualidade, quantidade — e a
  reportagem da Rest of World de 26/05/2026 mostra o caso concreto na Índia, com o governo
  planejando distribuir agente pessoal a 50 milhões de peregrinos.
- **e13** *(o direito define a arquitetura)* — porque nenhuma especificação decide quem é o
  visitante: a liminar de 10/03/2026 decidiu, e a suspensão do Nono Circuito decidiu de novo. Um
  desenho de produto que dependa da resposta errada é um produto ilegal.
- **e13.1** *(jurisdições divergem)* — porque e13 se resolve por tribunal, e tribunais de países
  diferentes resolvem diferente. O AI Act europeu regula transparência; a CFAA americana regula
  autorização; o Brasil não tem instrumento específico.
- **e13.1.1** *(geo-restrição de capacidade)* — porque e13.1 obriga o fabricante de agente a operar
  com o menor denominador comum de cada jurisdição, e a saída barata é desligar capacidade por
  região. **Referência:** o que a GDPR fez com sites americanos em 2018 — muitos simplesmente
  bloquearam a Europa.
- **e14** *(o credenciamento pesa contra a delegação)* — **retroação de D3.** Porque cada porta que
  exige assinatura é uma porta em que o agente falha, e um agente que falha em metade dos sites não
  é delegação: é trabalho a mais. Com o topo do WebArena em 74,3% em tarefa fácil e ~37% em tarefa
  longa, a margem para acrescentar fricção é pequena.
- **e14.1** *(o agente recua para dentro dos ecossistemas)* — porque e14 torna a web aberta o
  caminho caro e o ecossistema credenciado o caminho barato, e sistemas otimizam para o caminho
  barato.
- **e14.1.1** *(o domínio vira citação, não endereço)* — porque e14.1, sustentado por uma década,
  esvazia a função do site próprio: ele continua sendo de onde a informação veio, e deixa de ser
  onde a coisa acontece.

**D4 — A descoberta troca a atenção pela invocação**

- **e15** *(nasce o ranking de prontidão)* — porque o agente precisa escolher fonte e não tem olho
  para julgar, então julga por sinal estrutural: existe ferramenta, existe esquema, o dado é
  completo. Os três índices que já existem (Not Human Search, *Agent Readiness* da Cloudflare,
  auditoria agêntica do Lighthouse) são a primeira geração. **Referência que define o prazo:**
  `schema.org` de 2011 a metade da Fortune 500 em quinze anos, e a Semantic Web de 2001 a lugar
  nenhum. O que separa os dois é um comprador que pune quem não adota; ver e19.1.1.
- **e15.1** *(a otimização se reconverte)* — porque e15 cria uma métrica nova e existe uma indústria
  inteira cujo produto é subir métrica. A reconversão já começou na nomenclatura (AEO, GEO) antes de
  existir evidência de eficácia — o que é, em si, o sinal de que a indústria está se movendo.
- **e15.1.1** *(spam agêntico)* — **retroação de D4.** Porque e15.1 põe dinheiro em subir o score, e
  todo score que vale dinheiro é gamificado. A forma específica aqui é nova e desagradável:
  ferramentas declaradas que não fazem o que a descrição diz. **Referência:** *keyword stuffing*,
  que apareceu menos de três anos depois do PageRank.
- **e15.2** *(audiência medida em tarefa)* — porque e15 e e1.2 convergem: se o que se mede é
  conclusão, o relatório de audiência tem de falar de tarefa.
- **e16** *(a publicidade display perde superfície)* — porque não existe impressão sem olho, e o olho
  foi embora: 60% de queda em veículo pequeno em dois anos, com menos de 1% de reposição vinda de
  chatbot. Não é queda de eficácia; é desaparecimento do inventário.
- **e16.1** *(o anúncio migra para dentro da resposta)* — porque e16 destrói o inventário antigo e
  a atenção se concentrou onde a resposta é dada. Sinal **medio** e confiança **alta** por exceção
  justificada: isto já está em produção — o piloto de anúncios do ChatGPT chegou a 31 mercados
  europeus por volta de 24/08/2026, com carrossel de produto e teste de medição.
- **e16.1.1** *(recomendação e anúncio ficam indistinguíveis)* — porque e16.1 elimina o
  enquadramento visual que separava conteúdo de publicidade, e o que resta é aviso textual dentro de
  um texto que a pessoa pediu para não ler. O Artigo 50 do AI Act obriga a dizer que é IA; não
  obriga a dizer que é pago.
- **e16.2** *(uma versão para bot, outra para gente)* — porque e16 dá ao publicador incentivo para
  monetizar o visitante de máquina, e a forma mais barata é servir conteúdo diferente por
  User-Agent. Já aconteceu: Time em agosto de 2026, com a Perplexity bloqueando e chamando de
  enganoso, e o IAB montando arcabouço de medição com alvo em novembro de 2026.
- **e16.2.1** *(duas redações na mesma casa)* — porque e16.2, institucionalizado, produz dois
  produtos com métricas, prazos e chefias distintas.
- **e17** *(o pageview para de medir)* — **quem perde.** Porque e16 e e15 tiram do número de páginas
  vistas a correlação com atenção humana, e o número continua existindo, agora medindo outra coisa.
  A redação perde o instrumento e não ganha outro no mesmo movimento.
- **e17.1** *(a pauta migra para o que o agente não faz)* — porque e17 obriga a escolher pauta por
  outro critério, e o critério disponível é a vantagem comparativa: o que exige presença, apuração
  ou fonte fechada.
- **e17.1.1** *(a base factual fica mais rala)* — **retroalimentação negativa.** Porque e17.1,
  aplicado por vinte anos, retira da web exatamente o material sintetizável de que o agente se
  alimenta. Prazo 2042, dentro do horizonte, e confiança **baixa**: depende de nenhum outro
  incentivo de produção aparecer, o que é uma suposição forte.
- **e18** *(a marca vira parâmetro)* — porque e15 move a escolha para dentro de uma comparação
  automática, onde marca não é imagem: é um campo. Sinal **fraco**, porque o que existe hoje é
  inferência, não caso.
- **e18.1** *(de campanha para presença estruturada)* — porque e18 muda o objeto do investimento:
  não adianta ser lembrado por quem não decide.
- **e19** *(a prontidão continua sendo teatro)* — **retroação de D4, e o efeito com a evidência mais
  forte do mapa.** Porque não existe, hoje, comprador que puna a ausência: o Lighthouse audita e não
  ranqueia; o Not Human Search tem 5.316 sites; menos de 15 dos 200 mil maiores têm MCP Server Card.
  Sinal **forte** e confiança **alta** porque isto é o presente medido, não uma projeção.
- **e19.1** *(padrões adotados e não consumidos drenam a categoria)* — porque e19 produz um caso
  público de fracasso — `llms.txt` em 10,13% dos domínios, com zero requisições verificadas de bot
  de fronteira em ~900 domínios entre 09/2025 e 04/2026 — e casos públicos de fracasso contaminam a
  categoria inteira, inclusive as partes que funcionariam.
- **e19.1.1** *(só vira obrigatório quando um guardião cobrar por isso)* — porque e19.1 identifica a
  variável que falta, e a história tem duas demonstrações do mesmo mecanismo: HTTPS, que saltou
  quando o Let's Encrypt zerou o custo e o Chrome passou a marcar "não seguro"; e `schema.org`, que
  pegou quando o Google deu *rich snippet*. Confiança **media** na terceira ordem, e é a única —
  justificada por duas classes de referência convergentes.

### Cruzamentos

**Convergência 1 — a interface deixa de ser onde o valor é capturado.** D1 chega lá pela técnica
(o site expõe ferramenta, e2 move a renderização para o host) e D4 pela economia (e16: não há
impressão sem olho). São mecanismos independentes — um é sobre execução, outro sobre descoberta e
receita — e desembocam no mesmo lugar de segunda ordem: **e2.1 e e18.1 descrevem a mesma perda**, a
de que projetar a superfície deixa de ser o ato em que a organização captura valor. É o achado mais
importante do mapa para quem projeta mídia e interação, e é robusto justamente porque sobreviveria
à queda de qualquer uma das duas raízes.

**Convergência 2 — o acesso vira contrato individual, e o anônimo acaba.** D2 (preço por requisição)
e D3 (identidade credenciada) chegam juntas a **e11.2**: duas portas, preços e permissões
diferentes. Preço exige saber de quem cobrar; permissão exige saber quem entra. Somados, eliminam a
requisição anônima, que é a unidade sobre a qual a web foi construída. Nenhuma das duas raízes
sozinha faz isso; as duas juntas fazem em uma década.

**Convergência 3 — concentração, por três caminhos.** **e3.1** (o pequeno terceiriza a camada
agêntica), **e8.1.1** (o licenciamento coletivo tira a voz do site individual) e **e14.1** (o agente
recua para ecossistemas credenciados) vêm de três raízes diferentes e produzem o mesmo resultado:
menos atores decidindo o que a máquina alcança. Quando três mecanismos independentes apontam para
o mesmo desfecho, ele deixa de ser cenário e vira tendência central — e é por isso que o cenário
provável da seção 9 é o da concentração, não o da abertura.

**Retroalimentação negativa — o poço seca.** **e17.1.1** (o sintetizável deixa de ser produzido por
humano) volta contra **D4** e contra **D1**: a utilidade do agente depende de uma base factual que a
economia agêntica desincentiva produzir. É o ciclo mais lento do mapa — vinte anos — e o mais
difícil de observar antes que já tenha acontecido, porque o acervo antigo continua ali enquanto o
novo não é feito.

**Retroalimentação positiva — quem cobra ensina a pagar.** **e6** → **e6.1** (orçamento como
parâmetro) → mais agentes com carteira → mais viabilidade de **e6** em quem ainda não cobra. É o
único ciclo de reforço do mapa, e é a razão de e6 carregar confiança alta.

**Contradição não resolvida — abrir ou fechar.** **D2 manda fechar e cobrar**; **D4 manda abrir e
otimizar para ser invocado**. Um site não pode fazer as duas coisas com o mesmo acervo: cobrar tira
do conjunto de respostas (e8), e ser invocado exige estar acessível. As duas ficam vigentes no mapa
porque nenhuma das duas venceu. **O que decide entre elas é a substituibilidade do acervo:** onde o
conteúdo tem equivalente gratuito em outro lugar, abrir é a única opção viável; onde ele é único
(arquivo histórico, dado proprietário, apuração exclusiva), fechar e cobrar é. A previsão do mapa é
que a web se estratifique nessas duas faixas — e é exatamente isso que **e7.1** descreve dentro de
uma única organização.

**Contradição secundária — acessibilidade.** **e5** diz que a legibilidade de máquina canibaliza a
acessibilidade humana; o artigo de Zong e Elavsky aponta que as duas poderiam se reforçar, porque
estrutura semântica serve aos dois. As duas leituras são internamente consistentes. O que decide é
**quem manda no orçamento**: se o trabalho é encomendado por quem mede taxa de conclusão agêntica,
canibaliza; se é encomendado por quem responde a obrigação legal de acessibilidade, reforça.

### Cobertura STEEP e quem perde

- **Social** — e5 e e5.1 (acessibilidade), e12.1 e e12.1.1 (quem não tem agente credenciado),
  e6.2.1 (acesso a arquivo e biblioteca).
- **Tecnológico** — e1 a e4 inteiros, e15, e19.
- **Econômico** — D2 inteira, e16, e17, e18, e8.1.
- **Ecológico** — **parcialmente vazio, e registro por quê.** Há dois vetores opostos e não achei
  medição de nenhum dos dois: a camada declarada reduz drasticamente o trabalho por tarefa (não
  interpretar pixel), e o volume total de requisição de máquina cresce em ordens de grandeza.
  O único efeito que carrega o eixo é **e9.1** (sustentabilidade calculada por requisição), e ele
  é econômico antes de ser ecológico. Não forcei um efeito ambiental sem mecanismo; a lacuna fica
  declarada.
- **Político** — e13, e13.1, e13.1.1, e5.1.1, e6.2, e10.1.1.

**Quem perde, nomeado:**
1. **Veículo pequeno** — já perdeu 60% do tráfego de busca entre dez/2024 e dez/2025, contra 22% do
   grande. A internet agêntica não distribui a perda igualmente: ela a concentra em quem não tem
   escala para negociar licença.
2. **Quem usa leitor de tela** — e5.1.
3. **Quem tem agente ruim, poucos agentes ou nenhum** — e12.1, e12.1.1.
4. **Quem projeta interface visual de captação** — e2.1, e16. O trabalho não some; muda de dono e
   perde autonomia.
5. **Ad tech de display** — e16, sem realocação garantida: e16.1 move o dinheiro para dentro do
   assistente, não de volta para o publicador.
6. **O site individual que quer cobrar sozinho** — e8, e8.1.1.
7. **Países fora do trilho de pagamento dominante** — e10, e10.1.1.

### Prazo e horizonte

O horizonte deste mapa é 2046 e o efeito mais tardio está em 2044: **nenhum efeito ultrapassa a
janela**, e isso é deliberado, não folga. A razão está em 7.3: com classes de referência que operam
em décadas (HTTPS, `schema.org`, Semantic Web), empilhar efeitos de terceira ordem para além de 2044
seria inventar precisão que o método não sustenta. O mapa cobre a janela inteira e para de derivar
onde o mecanismo deixa de ser rastreável — que é a regra de parada do §3 da skill, e não uma
economia de esforço.

## 6. Sinais fracos e wildcards

### Sinais fracos

**SF1 — O anúncio servido só para o robô.** *Onde foi visto:* relato de agosto de 2026 de que a
Time colocou anúncios em versões de página voltadas para chatbot; a Perplexity bloqueou e chamou de
enganoso; o IAB declarou estar montando um arcabouço de medição de publicidade em IA com alvo em
novembro de 2026, "porque anúncios estão começando a ser servidos a bots e ninguém concorda quanto
isso vale". *O que mudaria:* se a prática se firmar, o inventário publicitário sobrevive à saída do
olho humano — e todo o ramo e16 muda de sinal, de perda para realocação. *Sinal observável de que
está crescendo:* o IAB publicar a métrica (e qual unidade ela adota — impressão para bot? invocação?
citação?), e um segundo veículo grande adotar publicamente.

**SF2 — O padrão adotado que ninguém consome.** *Onde foi visto:* `llms.txt` em 10,13% de quase 300
mil domínios (SE Ranking, 07/11/2025), sem ligação mensurável com citação por IA; e zero requisições
verificadas de GPTBot, ClaudeBot, PerplexityBot ou Google-Extended num levantamento de logs de ~900
domínios entre 04/09/2025 e 13/04/2026, num total de 1.227 requisições ao arquivo. *O que mudaria:*
este é um sinal fraco **invertido** — não é algo pequeno que pode crescer, é a demonstração de que
algo que parece grande não existe. Se ele se mantiver por mais dois anos, D4 não se concretiza no
prazo do mapa e e15 vai para 2038. *Sinal observável:* logs públicos mostrando bot de fronteira
buscando `llms.txt` de forma sistemática; ou o Google movendo a auditoria agêntica do Lighthouse
para dentro do ranqueamento.

**SF3 — Menos de quinze.** *Onde foi visto:* a Cloudflare varreu os 200 mil maiores domínios em
abril de 2026 e achou **menos de 15** com MCP Server Cards ou catálogos de API; 78% tinham
`robots.txt`, e só 4% adotaram Content Signals. *O que mudaria:* esse número é o termômetro mais
limpo de D1 na web aberta. *Sinal observável:* passar de mil. Se passar de mil antes de 2030, todos
os prazos de D1 encurtam em três a cinco anos.

**SF4 — A interface renasceu dentro do assistente.** *Onde foi visto:* MCP Apps, proposto em
21/11/2025 por mantenedores da OpenAI, da Anthropic e do MCP-UI, primeira extensão oficial do
protocolo em 26/01/2026, com o esquema `ui://` e HTML em iframe isolado. *O que mudaria:* é a única
via pela qual quem projeta mídia continua projetando superfície na era agêntica — mas dentro da
casa do outro. *Sinal observável:* a primeira **peça de mídia** (não ferramenta de trabalho)
publicada como MCP App por um veículo de comunicação. Hoje os adotantes citados são Shopify, Hugging
Face e ElevenLabs — ferramenta, não mídia.

**SF5 — O navegador agêntico que não vingou.** *Onde foi visto:* ChatGPT Atlas, lançado em outubro
de 2025, descontinuado em **09/08/2026**, com a capacidade agêntica dobrada para dentro do ChatGPT e
do Codex. *O que mudaria:* mata a hipótese "um navegador separado para o agente" e reforça e14.1 (o
agente opera de dentro do ecossistema). *Sinal observável:* nenhum fabricante grande relançar
navegador agêntico dedicado até 2028.

**SF6 — O dinheiro de máquina que só circula em cripto.** *Onde foi visto:* x402 com 75,41 milhões
de transações, US$ 24,24 milhões, 94,06 mil compradores e 22 mil vendedores nos 30 dias anteriores a
25/08/2026, sob a x402 Foundation na Linux Foundation. *O que mudaria:* volume real, ecossistema
fechado. *Sinal observável:* um veículo de imprensa, uma universidade ou um órgão público — fora do
mundo cripto — cobrando por requisição de máquina em produção.

**SF7 — O `robots.txt` com fundamentação jurídica.** *Onde foi visto:* a Content Signals Policy
(24/09/2025) declara que as restrições são reserva expressa de direitos sob o Artigo 4 da Diretiva
(UE) 2019/790, e foi aplicada a mais de 3,8 milhões de domínios com `search=yes, ai-train=no`.
*O que mudaria:* se um tribunal europeu acolher o argumento, um arquivo de texto de 1994 vira
instrumento contratual oponível — e e11.1 acontece sem que ninguém precise reescrever termos de uso.
*Sinal observável:* a primeira decisão que cite Content Signals como reserva de direitos.

**SF8 — A prontidão medida e o seu valor médio.** *Onde foi visto:* Not Human Search, consultado em
12/09/2026: 5.316 sites indexados, score médio 38 de 100, com pesos declarados (`llms.txt` 25,
`ai-plugin.json` 20, OpenAPI 20, API estruturada 15, MCP 10, `robots.txt` 5, schema.org 5) e a regra
"a posição orgânica se baseia em prontidão, nunca em pagamento". *O que mudaria:* é a primeira
tentativa pública de um PageRank agêntico, e já declara a regra que o PageRank levou anos para
precisar declarar. *Sinal observável:* um fabricante de agente adotar um índice externo desses como
fonte de descoberta, em vez de usar busca tradicional.

### Wildcards

**W1 — Um tribunal decide que bloquear o agente delegado é bloquear a pessoa.**
*Mecanismo:* o Nono Circuito, ou a corte que vier depois, acolhe a tese da agência — o mandatário
age pelo mandante, logo o acesso é autorizado — e estende: condicionar o acesso a que o usuário use
o próprio corpo passa a ser tratado como restrição indevida, talvez por analogia com acessibilidade.
*Por que é improvável:* exigiria que o tribunal fosse além de rejeitar a CFAA e criasse um direito
de acesso positivo, o que tribunais americanos evitam.
*O que faria com o mapa:* destruiria D3 do lado do bloqueio e faria D1 explodir — todo site
precisaria de camada agêntica porque não poderia recusá-la. e12 e e14 cairiam; e1 iria para 2029.
*Sinal precoce:* linguagem sobre "acesso do usuário por meio de mandatário" aparecendo em decisão
de mérito, não em liminar.

**W2 — Um grande portal bloqueia todos os agentes e a audiência não nota.**
*Mecanismo:* a aritmética já favorece isso. Se mais de 90% do rastreamento é extração sem retorno e
menos de 1% das referências vêm de chatbot, o custo esperado de bloquear tudo é próximo de zero e a
economia de servir é imediata. Basta um portal grande fazer, publicar o número, e o cálculo vira
público.
*Por que é improvável:* medo. Ninguém quer ser o primeiro a sumir de um canal que talvez cresça.
*O que faria com o mapa:* seria a evidência que falta para D2 pelo lado do fechamento, e
transformaria e8 de retroação em tendência dominante. A web se dividiria em "fechada e cara" e
"aberta e irrelevante" em menos de cinco anos.
*Sinal precoce:* um veículo do primeiro escalão publicando, com número, o efeito de um bloqueio
total de agentes sobre a própria receita.

**W3 — O protocolo aberto é substituído por um proprietário que ganha.**
*Mecanismo:* um fabricante de agente com participação dominante passa a exigir integração pelo seu
próprio formato para dar distribuição preferencial. O MCP continua existindo, como o RSS continua
existindo, e vira irrelevante pelo mesmo motivo: a distribuição está em outro lugar.
*Por que é improvável:* hoje os três maiores fabricantes convergiram no MCP e coautoraram o WebMCP
e o MCP Apps; romper isso custa caro em credibilidade.
*O que faria com o mapa:* D1 continua, com outro nome e com dono. e2.2 e e14.1 aceleram; o resto do
mapa fica igual, o que é em si um achado — **a camada de protocolo importa menos do que quem opera
a distribuição.**
*Sinal precoce:* uma extensão significativa de um fabricante que os outros não implementem em seis
meses.

**W4 — Um incidente de escala no registro de servidores fecha a porta para os pequenos.**
*Mecanismo:* já houve ensaio. Em fevereiro de 2026, uma operação de malware construiu por três meses
um ecossistema falso de desenvolvedores, com cinco contas de GitHub, para submeter um servidor MCP
trojanizado a um registro legítimo; a carga era um ladrão de credenciais. Em abril de 2026,
pesquisadores relataram execução de comando nos SDKs oficiais via transporte STDIO. Um incidente de
massa faz os hosts exigirem assinatura, revisão e lista branca.
*Por que é improvável (na escala necessária):* os incidentes até agora foram contidos.
*O que faria com o mapa:* aceleraria e3.1 e e14.1 em cinco anos e acabaria com a hipótese de uma
camada agêntica aberta operada por quem é pequeno. A internet agêntica nasceria já concentrada.
*Sinal precoce:* um host grande passar a exigir assinatura de código para servidores MCP de
terceiros.

## 7. Contra o próprio mapa

Esta seção é o §6 da skill aplicado ao mapa já montado. As alterações estão registradas em 7.8 com
o valor antes e depois; o bloco YAML da seção 5 já mostra os valores **depois**.

### 7.1 Pré-mortem: é 2046 e este mapa se mostrou errado. Por quê?

**Razão 1 — os agentes ficaram bons o bastante em ler a web humana, e ninguém precisou publicar
nada.** É a razão mais provável, e tem dado a favor: o topo do WebArena foi de 14,41% (GPT-4
original) a 74,3% em junho de 2026, contra 78,24% de linha de base humana. Se a curva continuar, a
camada declarada vira otimização de custo, não condição de funcionamento — e um site sem `llms.txt`,
sem MCP e sem WebMCP continua perfeitamente usável. *Aponta para:* **e1** e **e15**, rebaixados; e
para **e4**, que ganha confiança alta e sinal forte justamente por descrever esse desfecho.

**Razão 2 — o dinheiro nunca circulou.** O 402 ficou preso a um fornecedor de infraestrutura e a um
ecossistema de stablecoin; os fabricantes de agente preferiram licença bilateral com meia dúzia de
grandes; e cobrar por requisição nunca virou prática de mercado porque não havia comprador. *Aponta
para:* **e7** e **e10**, rebaixados; **e8** mantido com confiança alta, porque é exatamente o
mecanismo que produziria esse desfecho.

**Razão 3 — o direito fechou a porta cedo.** Um tribunal decide que agente logado é acesso não
autorizado, a decisão se firma, e a "internet agêntica" vira um conjunto de acordos bilaterais entre
plataformas — não uma web. Nada do que este mapa descreve como reprojeto acontece em escala; o que
acontece é integração corporativa, que é tema antigo. *Aponta para:* **e13** rebaixado de alta para
media, e toda a cadeia de D3 marcada como a mais frágil do mapa.

### 7.2 Extrapolação linear

Três efeitos eram "mais do mesmo, maior", e cada um foi tratado:

- **e15** *(o ranking de prontidão vira o novo PageRank)* era extrapolação pura: existe índice
  pequeno hoje, logo existirá índice grande amanhã. Ganhou mecanismo de não-linearidade em
  **e19.1.1**: a passagem de nicho a obrigatório não é gradual, é um degrau, e o degrau é um
  guardião de acesso transformar prontidão em ranking ou em preço. Sem o degrau, o índice fica
  pequeno para sempre. Prazo empurrado de 2030 para 2032.
- **e16** *(a publicidade display perde superfície)* era extrapolação da queda medida. Ficou, porque
  o mecanismo não é "a queda continua": é "o inventário deixa de existir", que é descontínuo. Mas
  perdeu confiança alta.
- **e9** *(custo de máquina vira item de orçamento)* era linear e permaneceu linear — e por isso
  foi rebaixado de disrupção candidata a efeito de primeira ordem, com prazo curto e confiança alta.
  É o tipo de coisa que já está acontecendo e não precisa de história para acontecer.

### 7.3 Velocidade de adoção confrontada com a classe de referência

Este é o teste que mais mudou o mapa. As classes usadas:

| Classe | Do "funciona" ao patamar | O que a torna comparável |
|---|---|---|
| Semantic Web / RDF (2001) | nunca chegou | web legível por máquina, sem incentivo de adoção |
| `schema.org` (2011) | ~15 anos para 53,8% da Fortune 500 | idem, **com** incentivo (rich snippets do Google) |
| HTTPS / Let's Encrypt (2016) | ~4 anos para virar padrão | custo levado a zero **e** punição visível no navegador |
| `robots.txt` (1994) | ~30 anos para 78–92% | convenção voluntária sem punição nenhuma |
| AMP (2015) | ~3 anos para adoção ampla, depois abandono | formato imposto por gatekeeper e revertido |
| Responsivo / mobile-first (2010) | ~6 anos para maioria | virou fator de ranqueamento do Google |

A conclusão que atravessa a tabela: **nada que exija que cada site faça alguma coisa pega em menos
de cinco anos, e nada pega sem que um guardião de acesso pague ou puna.** Aplicado ao mapa:

- **e1** tinha prazo 2029. Nenhum incentivo equivalente ao rich snippet existe para WebMCP hoje — o
  Lighthouse audita, não ranqueia. **Empurrado para 2032** (a referência mais otimista, o
  responsivo, exigiu seis anos *com* fator de ranqueamento).
- **e15** tinha 2030. Mesmo argumento, agravado pelo resultado nulo do `llms.txt`. **Empurrado para
  2032.**
- **e12** tinha 2030. Credenciamento generalizado exige emissor, adoção de padrão e mudança em
  milhões de sites; o Web Bot Auth nem grupo de trabalho adotado tinha em agosto de 2026.
  **Empurrado para 2033.**
- **e17.1.1** tinha 2038. Esvaziamento de acervo é o processo mais lento que existe — o declínio da
  imprensa local levou vinte anos para ficar visível. **Empurrado para 2042.**
- **e6** ficou em 2031 e **não** foi empurrado: é o único efeito do mapa cujo mecanismo já está em
  produção com changelog público, e a referência aqui não é "padrão que cada site adota" e sim
  "recurso que um fornecedor de infraestrutura liga para toda a sua base" — que é rápido por
  construção.

### 7.4 A raiz que não acontece

- **Se D1 não acontece** (nenhum site declara ferramenta): sobra muito. D2, D3 e D4 seguem inteiras,
  porque a cobrança, o credenciamento e a perda de audiência não dependem de o site publicar nada —
  dependem de o agente **chegar**. O mapa perde o ramo e1–e3 e o e5, e ganha peso em e4. É uma perda
  de cerca de um quinto.
- **Se D2 não acontece** (o acesso segue gratuito): sobra quase tudo, e piora. Sem cobrança, a
  assimetria de e16/e17 não tem compensação nenhuma, e o cenário indesejável da seção 9 fica mais
  provável, não menos.
- **Se D3 não acontece** (o direito nunca decide, e a prática segue no limbo): o mapa perde a parte
  mais frágil e mantém o corpo. Mas **e11 já aconteceu** — a distinção de três visitantes está em
  produção em cinco provedores de infraestrutura —, então D3 não é uma aposta inteira: é uma aposta
  sobre o desfecho jurídico.
- **Se D4 não acontece** (a descoberta continua sendo por busca com clique): o mapa perde a parte
  que fala diretamente ao público dele, mas D2 e D3 continuam. E **e19** é justamente o efeito que
  descreve esse desfecho — ele está dentro do mapa, com sinal forte, o que é a maneira honesta de
  embutir a própria refutação.

**A resposta que importa:** as quatro raízes não são uma só disfarçada. Duas delas (D2 e D3)
dependem de o agente **chegar** ao site; duas (D1 e D4) dependem de o site **se preparar** para ele.
São condições independentes, e o mapa sobrevive à queda de qualquer uma.

### 7.5 Suposições escondidas

1. **Que os fabricantes de agente continuem permitindo agentes de terceiros.** Todo o mapa supõe uma
   camada aberta. Nada garante isso; é o W3.
2. **Que ler a web por agente continue barato.** Se o custo por token parar de cair ou subir, e6
   acelera (todo mundo cobra) e D1 acelera (declarar vira obrigatório por economia), mas D4 morre —
   ninguém manda agente ler mil fontes.
3. **Que a web continue sendo o substrato.** Se a informação relevante migrar para dentro de poucos
   ecossistemas fechados antes de 2035, não há web agêntica a reprojetar: há integração entre
   plataformas, que é assunto antigo. **e14.1 é essa suposição quebrando por dentro do próprio mapa.**
4. **Que continue havendo quem publique.** O mapa supõe que o incentivo para produzir sobreviva à
   queda do pageview. e17.1.1 é essa suposição quebrando.
5. **Que exista energia e capacidade de datacenter** para o volume de tráfego de máquina projetado —
   a própria Cloudflare fala em até mil vezes o tráfego humano em cinco anos. Não achei nenhuma
   projeção de capacidade que sustente isso, e o mapa não tem efeito ecológico com mecanismo por
   causa dessa lacuna (declarado em STEEP).
6. **Que a regulação continue tratando agente como ferramenta e não como sujeito.** O Artigo 50 do
   AI Act, aplicável desde 02/08/2026, exige transparência, não personalidade. Se algum ordenamento
   criar estatuto próprio para agente, e11.1.1 e e13 mudam de natureza.

Cada uma dessas premissas quebrada gera um wildcard; três delas já estão na seção 6 (W1, W3, W4).

### 7.6 Viés do autor

A zona de interesse declarada é **Agentes**, e isso enviesa o mapa em duas direções específicas.

**Primeira: eu quero que a camada de protocolo seja o centro.** É elegante, é a parte que dá vontade
de estudar, e é onde meu trabalho encosta. O efeito que existe para corrigir isso é **e19** — a
prontidão é teatro — e não é coincidência que ele tenha a evidência mais dura do mapa inteiro
(zero requisições de bot de fronteira a `llms.txt`) e ao mesmo tempo seja o efeito que mais me
desagrada escrever. Deixei-o com sinal forte e confiança alta de propósito.

**Segunda: e2 está aqui porque a tese me agrada.** "A interface não morre, migra para dentro do host
do agente" é uma frase bonita, útil em aula, e se apoia em **um único artefato** — o MCP Apps, de
janeiro de 2026 — e em **nenhuma medida de uso**. Os adotantes citados são ferramentas de trabalho
(Shopify, Hugging Face, ElevenLabs), não mídia. Rebaixei e2.1 de alta para media por causa disso, e
o sinal precoce de SF4 existe para me desmentir.

**Terceira, menos confortável: escolhi um horizonte longo porque ele favorece a minha tese.** Em
2031 este mapa seria quase todo "não aconteceu". Em 2046, quase tudo é plausível. O horizonte de
vinte anos foi dado no briefing, mas eu o teria escolhido — e ele protege o mapa de ser falseado no
prazo em que alguém se lembraria de conferir.

### 7.7 Calibração

Contagem por ordem, depois das alterações de 7.8:

| Ordem | efeitos | alta | media | baixa |
|---|---|---|---|---|
| 1 | 19 | 6 | 13 | 0 |
| 2 | 26 | 2 | 22 | 2 |
| 3 | 22 | 0 | 3 | 19 |

A confiança cai com a ordem, como o método exige: 6 → 2 → 0 em "alta"; 0 → 2 → 19 em "baixa".
Nenhum efeito de terceira ordem tem confiança alta. As três exceções de confiança media na terceira
ordem estão justificadas individualmente na prosa (e15.1.1 tem a referência do *keyword stuffing*;
e16.1.1 decorre de fato já observado; e19.1.1 tem duas classes de referência convergentes).

**O ponto fraco da calibração:** zero "baixa" na primeira ordem. Isso é defensável — seis dos
dezenove efeitos de primeira ordem descrevem coisas já em produção — mas é o lugar onde eu
suspeitaria de mim mesmo se estivesse corrigindo este mapa.

### 7.8 Registro de alterações (antes → depois)

Cota do método: pelo menos um efeito rebaixado ou removido por raiz. A bateria derrubou quatro
efeitos e rebaixou nove.

**D1:**
- `e1`: prazo **2029 → 2032**, porque a classe de referência mais otimista (responsivo, seis anos)
  contava com fator de ranqueamento, e aqui não há nenhum — o Lighthouse audita e não ranqueia.
- `e1.3`: confianca **media → baixa**, porque o efeito pressupõe que o agente carregue memória de
  fracasso entre sessões, o que não é comportamento padrão hoje.
- `e2.1`: confianca **alta → media**, porque a tese se apoia em um artefato único (MCP Apps) e em
  nenhuma medida de uso — e porque é a tese de que eu gosto (7.6).
- `e3`: sinal **medio → fraco**, porque não achei nenhum caso documentado de divergência entre
  camada de ferramenta e tela; é inferência por analogia com o site móvel.
- **Removido:** *"Escolas de design reorganizam o currículo em torno de interface para máquina"* —
  efeito proibido pelo método (genérico, serve a qualquer tema, sem curso nem ator nomeado). Vai
  para 12.3.

**D2:**
- `e7`: prazo **2031 → 2034**, porque "preço vira sinal de qualidade" exige um mercado
  estabelecido, e o mercado nem preço de referência tem.
- `e10.1`: confianca **media → baixa**, porque não achei nenhum piloto de pagamento máquina-a-máquina
  sobre Pix; a plausibilidade é inteira e a evidência é zero.
- `e9`: **promovido** de candidato a raiz para efeito de primeira ordem, porque não rompe nada —
  é o mesmo orçamento com mais uma linha (pergunta 1 do §2 da skill).
- **Removido:** *"Surge um mercado secundário de revenda de acesso pago"* — reprovado no teste da
  causa solta: aconteceria igual com qualquer precificação de API, sem precisar de agente nenhum.
  Vai para 12.3.

**D3:**
- `e13`: confianca **alta → media**, porque decisão judicial é o item menos previsível do mapa e a
  razão 3 do pré-mortem aponta diretamente para ela.
- `e12`: prazo **2030 → 2033**, porque credenciamento generalizado exige emissor, padrão adotado e
  mudança em milhões de sites, e em agosto de 2026 o Web Bot Auth não tinha sequer documento adotado
  por grupo de trabalho do IETF.
- `e14`: sinal **medio → fraco**, porque a fricção de credenciamento ainda não foi medida em
  nenhum estudo que eu tenha aberto.
- **Removido:** *"Reguladores criam a categoria jurídica de agente eletrônico"* — efeito proibido
  (regulador genérico) e, além disso, factualmente preguiçoso: figuras de agente eletrônico já
  existem em direito de comércio eletrônico desde os anos 1990. Vai para 12.3.

**D4:**
- `e15`: prazo **2030 → 2032**, mesma razão de e1, agravada pelo resultado nulo do `llms.txt`.
- `e16`: confianca **alta → media**, porque a perda de inventário está medida mas a velocidade da
  substituição não está.
- `e18`: sinal **medio → fraco**, porque "a marca vira parâmetro" é inferência pura; não achei
  nenhum caso de compra decidida por agente em que a marca tenha entrado como campo.
- `e17.1.1`: prazo **2038 → 2042**, porque esvaziamento de acervo é o processo mais lento do mapa e
  a referência (declínio da imprensa local) levou cerca de vinte anos para ficar visível.
- **Removido:** *"Surge a profissão de engenheiro de prontidão agêntica"* — efeito proibido pelo
  método, e sem mecanismo que o ligue ao pai. Vai para 12.3.

## 8. O que a máquina errou

Sou a máquina. O que segue é o que eu produzi de errado ou de frágil nesta rodada, com o motivo da
desconfiança.

1. **Quase citei números de x402 que eu não abri.** O resultado de busca trazia "69.000 agentes
   ativos, 165 milhões de transações e cerca de US$ 50 milhões acumulados até o fim de abril de
   2026". A página da Wikipedia que sustentaria isso devolveu 404 quando tentei abrir. Abri o
   `x402.org`, que declara, em 25/08/2026, números de outra ordem e de outra janela: 75,41 milhões de
   transações e US$ 24,24 milhões **nos últimos 30 dias**. Os dois conjuntos não são reconciliáveis
   sem saber a metodologia de cada um. **Usei só o que abri, e registro que a divergência ficou em
   aberto.** Se eu tivesse citado o primeiro conjunto, teria escrito um número inventado com cara de
   dado.

2. **"Um bilhão de respostas 402 por dia" não entrou no documento, e esse número está em toda
   parte.** Ele apareceu em resultado de busca atribuído à Cloudflare. Abri o blog primário de
   *pay per crawl*: ele **não traz número nenhum**, e descreve o recurso como beta privado. Abri o
   changelog do AI Crawl Control: também não traz. Não confirmei em fonte primária, então o número
   não entrou em nenhuma seção — mas ele é exatamente o tipo de dado redondo e memorável que eu teria
   repetido sem conferir.

3. **Os dados do Cloudflare Radar estão aqui em segunda mão.** O `radar.cloudflare.com` devolveu 403
   às minhas tentativas. Os 57,5% de tráfego bot, os 20,3% de crawler de IA e as razões
   *crawl-to-refer* vêm de agregadores que citam o Radar, não do Radar. E há um sinal de alerta
   dentro dos próprios dados: o blog primário da Cloudflare sobre finalidade de rastreamento (dados
   de julho e início de agosto de 2025) dá **~80% de treino**; o agregado de maio de 2026 dá
   **51,8%**. Uma queda dessa magnitude em nove meses é mais compatível com mudança de metodologia
   ou de base de medição do que com mudança do mundo. **Tratei a ordem de grandeza como informação e
   o número exato como não confiável.**

4. **A linha do tempo do caso Amazon × Perplexity vem de fonte secundária, e o desfecho está em
   branco.** Axios e GeekWire devolveram 403. O que tenho é o Search Engine Journal, que é
   secundário e tem interesse editorial no assunto. Ele dá liminar em 10/03/2026, suspensão pelo
   Nono Circuito dias depois, razões da Perplexity em 08/05/2026 e sustentação oral em 11/06/2026.
   **Não achei o resultado da sustentação oral em fonte aberta** — e este mapa põe uma raiz inteira
   (D3) em cima desse processo. É a fragilidade factual mais séria do documento.

5. **Confundi o estado do Web Bot Auth na primeira leitura.** Um resultado de busca afirmava que um
   grupo de trabalho do IETF foi constituído no começo de 2026 com marco de especificação em abril.
   Ao abrir o rascunho de arquitetura, o que ele diz é outra coisa: versão 05 de 02/03/2026,
   **expirada e arquivada**, submissão individual, não endossada pelo IETF, substituída pelo
   rascunho `webbotauth-httpsig-protocol`. Não abri a ata de nenhum grupo de trabalho, então **não
   afirmo em lugar nenhum que existe documento adotado** — só que cinco provedores de infraestrutura
   verificam as assinaturas em produção, o que é afirmação de outra natureza e vem de fonte
   secundária.

6. **Duas fontes que usei são fracas e eu as usei mesmo assim.** O `ai.aeo.press` foi aberto e
   mostrou-se um texto sem dado nenhum — está citado na seção 11 exatamente por isso, como exemplo
   do gênero "análise de padrão emergente sem evidência", que é o gênero dominante neste tema. E o
   artigo brasileiro do E-Commerce Brasil, de 24/10/2025, que eu abri procurando dado nacional,
   **não tem dado nacional**: tem um número global (84% dos negócios de e-commerce) apresentado em
   contexto brasileiro. Registro que a nota sobre o Brasil deste mapa está mal ancorada (ver 12.5).

7. **O efeito e10.1 é a coisa mais próxima de ficção que eu deixei entrar.** "No Brasil o trilho de
   pagamento de máquina nasce sobre o Pix" é plausível, tem mecanismo (liquidação instantânea
   gratuita, já universal) e **zero evidência** — não achei um piloto, um anúncio, uma consulta
   pública do Banco Central sobre pagamento máquina-a-máquina. Está com confiança baixa e sinal
   fraco, e mesmo assim eu o manteria fora se o briefing não pedisse recorte brasileiro.

8. **Tratei "menos de 15 sites" como um dado quando ele é uma varredura de um fornecedor sobre a
   própria definição de prontidão.** A Cloudflare varreu os 200 mil maiores domínios em abril de
   2026 procurando os sinais que a **Cloudflare** define como prontidão agêntica. É um número forte
   e é um número interessado. Usei-o três vezes.

## 9. Três cenários para 2046

### Provável — a web de duas camadas, operada por poucos

É 2046. A web não se dividiu em "para humanos" e "para máquinas" como se temia em 2026: dividiu-se
em **aberta e irrelevante** contra **fechada e cara**. O que tem equivalente gratuito em outro lugar
está aberto, estruturado e otimizado para ser invocado, e não gera receita para quem o publica; o
que é único — arquivo, apuração, dado proprietário — está atrás de um preço por requisição
negociado por blocos de licenciamento coletivo com meia dúzia de fabricantes de agente. O domínio
próprio ainda existe e ainda é citado, mas a transação acontece dentro do ecossistema do assistente,
e projetar produto digital é, na prática, projetar para três hosts com suas grades, seus temas e
suas comissões. A organização pequena não mantém camada agêntica própria: aparece por meio de um
intermediário, como aparecia no catálogo telefônico. O `pageview` continua sendo contado e ninguém
mais sabe dizer o que ele mede.

*Sinal precoce de que estamos entrando neste cenário:* o número de sites com catálogo de ferramentas
entre os 200 mil maiores sair de "menos de 15" e estacionar na casa das centenas — grande o bastante
para existir, pequeno o bastante para caber em poucas mãos.

### Desejável — a segunda superfície virou infraestrutura pública

É 2046. Publicar para máquina ficou tão barato e tão padronizado quanto servir HTTPS ficou depois de
2016 — e pelo mesmo caminho: alguém zerou o custo e alguém tornou visível a ausência. O CMS já
publica a camada de ferramenta junto com a página, sem que ninguém decida; o credenciamento de
agente aceita o agente que a pessoa roda na própria máquina, porque a identidade é do humano e não
do fornecedor; e o pagamento por acesso corre por trilhos públicos e locais — no Brasil, sobre o
Pix — em vez de depender de um intermediário global. A estruturação semântica que os agentes
exigiram acabou servindo a quem usa leitor de tela, porque a exigência legal chegou antes de o
`alt` ser abandonado. A web aberta não voltou a ser o que era, mas continua sendo onde as coisas
estão.

*O que teria de ser feito para chegar aqui:* um guardião de acesso transformar prontidão em ranking
**e** algum ente público zerar o custo de implementá-la, nessa ordem e com pouca distância entre as
duas coisas — é a combinação do Let's Encrypt com a marcação de "não seguro" do Chrome, aplicada à
camada agêntica. *Sinal precoce:* a camada de ferramenta virar padrão de CMS popular, entregue
ligada, sem plugin.

### Indesejável — a web fechou e ninguém notou

É 2046. O cálculo de W2 se mostrou certo e se espalhou: como mais de nove décimos do rastreamento
nunca devolveu visita e os assistentes nunca passaram de uma fração ínfima das referências,
bloquear agentes virou a decisão financeiramente óbvia. Os grandes fecharam primeiro, com contratos
bilaterais que os compensam; os pequenos fecharam depois, sem contrato nenhum, para parar de pagar
banda. O que os agentes leem hoje é um acervo em boa parte anterior a 2030, mais o que foi escrito
especificamente para eles — e o que foi escrito especificamente para eles é, em larga medida, isca.
A separação entre conteúdo e anúncio desapareceu na camada que a máquina lê, e como é a máquina que
resume para a pessoa, desapareceu também para a pessoa. Quem tem agente bom acessa um mundo; quem
não tem, acessa o resto.

*Sinal precoce dele:* a proporção de citações de agentes apontando para material publicado nos
últimos doze meses começar a cair de forma sustentada. É uma medida que hoje ninguém publica, e
deveria ser a primeira coisa a instrumentar.

## 10. O experimento

### O que é

**O site de duas caras.** Publicar a mesma peça editorial — uma reportagem, um verbete, um guia — em
duas superfícies montadas com o mesmo conteúdo e instrumentadas separadamente:

1. **A cara humana:** a página HTML de sempre, com a analítica de sempre.
2. **A cara de máquina:** um servidor MCP declarando duas ou três ferramentas sobre aquele conteúdo
   (`buscar_trecho`, `resumir_secao`, `listar_fontes`), mais `llms.txt`, mais `robots.txt` com
   Content Signals, mais verificação de assinatura de agente na entrada.

Roda quatro semanas com tudo aberto e instrumentado. Na quinta semana, liga-se o `402` num dos
caminhos de máquina, com preço simbólico, e mede-se o que muda.

**O que se mede:** quem chega em cada cara (assinado, não assinado, humano); quantas requisições por
visita devolvida; custo de servir cada lado; qual fração do conteúdo o agente efetivamente puxa; o
que o agente entrega ao usuário final (cita? atribui? distorce?); e, depois do 402, quantos agentes
pagam, quantos desistem e quantos tentam o outro caminho.

### Que pergunta sobre o futuro ele ajuda a responder

**Quando o leitor é uma máquina, o que sobra do que a gente projetou?** E, mais concretamente: a
prontidão agêntica de que todo mundo fala em 2026 é uma coisa que existe ou é teatro? O experimento
é a réplica, em escala de sala de aula, do levantamento de logs que achou zero requisições de bot de
fronteira a `llms.txt` — com a diferença de que aqui o grupo de controle e o grupo de tratamento
estão no mesmo servidor, com o mesmo conteúdo, no mesmo período.

### Que tecnologia emergente ele usa, e por que não dá com a madura

Usa MCP (servidor e declaração de ferramenta), `llms.txt`, Content Signals no `robots.txt`,
verificação de assinatura de agente e uma resposta `402` com preço. **Nenhuma dessas peças existia
em forma utilizável há três anos.**

Não dá para fazer com tecnologia madura porque a pergunta é sobre a diferença entre publicar para
gente e publicar para máquina. Com API REST e `robots.txt` — as duas coisas maduras do tema — só se
consegue medir crawler anônimo buscando HTML, que é o que se mede desde 2005. O que é novo, e
mensurável só com a camada emergente, é a **escolha** do agente entre dois caminhos e a **decisão de
pagar**.

### O que a turma faz quando testar isso em sala

1. Cada dupla leva um agente diferente (Claude, ChatGPT, Gemini, um agente local) e uma tarefa
   idêntica: *"responda X usando aquele site"*. O painel do servidor fica projetado.
2. **Todo mundo vê, ao vivo, por qual porta cada agente entrou.** Essa é a aula: descobrir que
   metade deles ignorou a camada declarada e foi raspar o HTML.
3. Liga-se o `402` durante a sessão e repete-se a tarefa. A turma vê quem paga, quem desiste e quem
   contorna.
4. Cada dupla escreve uma frase: *o que o meu agente entregou ao usuário que o site não disse.*
5. Discussão fechando com os números do próprio servidor — não com opinião sobre agentes.

### O resultado que me faria mudar de ideia

**Se, em quatro semanas, a cara de máquina não receber nenhuma requisição de agente de fronteira
verificável — e for tudo agregador comercial e navegador humano, como no levantamento de logs de
2026 —, então D1 e D4 não se sustentam no prazo deste mapa.** e1 e e15 iriam para 2038 ou além, e a
tese central do documento passaria a ser e19: a internet agêntica de 2026 é uma camada de cobrança e
de bloqueio com um discurso de publicação por cima.

**E o inverso também vale:** se os agentes preferirem consistentemente a camada declarada, e se
algum deles **pagar** o 402 sem intervenção humana, então e6 e e1 estão corretos e conservadores, e
os prazos que eu empurrei em 7.3 deveriam ser puxados de volta.

## 11. Fontes

Trinta e quatro fontes abertas e lidas em 12/09/2026. O que eu tentei abrir e não consegui está em
12.4; o que usei sem conseguir confirmar está em 12.5.

1. **Cloudflare — Introducing pay per crawl.** `https://blog.cloudflare.com/introducing-pay-per-crawl/`
   — sustenta o mecanismo de D2: `402` com preço, assinatura Ed25519, HTTP Message Signatures, fluxo
   reativo e proativo. *Confiabilidade:* primária do fornecedor que opera o recurso; descreve beta
   privado e **não traz número nenhum**, o que é em si informação (ver 8.2).
2. **Cloudflare — Agent Readiness score.** `https://blog.cloudflare.com/agent-readiness/` — sustenta
   os quatro eixos de prontidão, a varredura de 200 mil domínios em abril de 2026, os 78% de
   `robots.txt`, os 4% de Content Signals e os **menos de 15** sites com MCP Server Card.
   *Confiabilidade:* primária e interessada — o fornecedor define o que conta como prontidão e
   depois mede.
3. **Cloudflare — Content Signals Policy.** `https://blog.cloudflare.com/content-signals-policy/` —
   sustenta os três sinais (`search`, `ai-input`, `ai-train`), os 3,8 milhões de domínios com
   `search=yes, ai-train=no` e a fundamentação no Artigo 4 da Diretiva (UE) 2019/790.
   *Confiabilidade:* primária; a parte jurídica é posição da empresa, não decisão de tribunal.
4. **Cloudflare — A deeper look at AI crawlers.** `https://blog.cloudflare.com/ai-crawler-traffic-by-purpose-and-industry/`
   — sustenta a divisão por finalidade (~80% treino, <5% ação de usuário, <5% busca) e as razões
   *crawl-to-refer* por vertical. *Confiabilidade:* primária, mas **dados de julho–agosto de 2025**,
   divergentes do agregado de 2026 (ver 8.3).
5. **Cloudflare — AI Crawl Control changelog.** `https://developers.cloudflare.com/ai-crawl-control/changelog/`
   — sustenta que o pay per crawl virou engenharia miúda: preço dinâmico por padrão de URI e
   cabeçalho `cf-pay-per-crawl` em 16/06/2026; redirecionamento de crawler de treino e integração
   do Agent Readiness em 17/04/2026. *Confiabilidade:* primária e datada; é a melhor evidência de
   D2 no documento.
6. **IETF — draft-meunier-web-bot-auth-architecture.** `https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture`
   — sustenta o mecanismo de assinatura de agente, os cabeçalhos `Signature`/`Signature-Input`, a
   motivação de diferenciar humano de automatizado, e a frase que produz e12 ("se um agente prefere
   não se identificar, este não é o protocolo certo"). Versão 05, 02/03/2026, **expirada e
   substituída**. *Confiabilidade:* primária; documento individual, não endossado pelo IETF.
7. **RSL — Really Simple Licensing.** `https://rslstandard.org/` — sustenta os modelos de
   licenciamento (pay-per-crawl, pay-per-inference, atribuição), a expressão em `robots.txt` e a
   lista de apoiadores. *Confiabilidade:* primária do consórcio; não publica número de adoção.
8. **Not Human Search — repositório.** `https://github.com/unitedideas/nothumansearch` — sustenta os
   pesos do score (llms.txt 25, ai-plugin 20, OpenAPI 20, API 15, MCP 10, robots 5, schema 5) e a
   existência de servidor MCP próprio. *Confiabilidade:* primária; os números de sites indexados
   divergem entre README e site (ver 12.5).
9. **Not Human Search — índice.** `https://nothumansearch.ai/` — sustenta, em 12/09/2026, **5.316
   sites indexados e score médio 38**, e a regra "posição orgânica por prontidão, nunca por
   pagamento". *Confiabilidade:* primária e auto-declarada.
10. **x402.** `https://www.x402.org/` — sustenta os números de 30 dias até 25/08/2026 (75,41 M
    transações, US$ 24,24 M, 94,06 mil compradores, 22 mil vendedores) e a governança sob a x402
    Foundation na Linux Foundation. *Confiabilidade:* primária e auto-reportada, sem auditoria
    independente; divergente de números de terceiros (ver 8.1).
11. **Stripe — Agentic Commerce Protocol.** `https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce`
    — sustenta a data (29/09/2025), o desenho em que o comerciante segue sendo o *merchant of
    record*, e os parceiros iniciais. *Confiabilidade:* primária e comercial; entra por fronteira
    com o tema 5.
12. **PPC Land — Google adds llms.txt to Lighthouse.** `https://ppc.land/google-adds-llms-txt-to-lighthouse-as-agentic-web-standards-heat-up/`
    — sustenta a categoria "Agentic browsing audits" em 05/05/2026, o origin trial do WebMCP no
    Chrome 149 em 19/05/2026, e os 7,4% de `llms.txt` na Fortune 500 contra 92,8% de `robots.txt`.
    *Confiabilidade:* imprensa especializada; datada e verificável, mas secundária.
13. **Conversion — Navegação agêntica.** `https://www.conversion.com.br/blog/navegacao-agentica/` —
    sustenta como o mercado brasileiro está formulando o problema (10/07/2026): HTML semântico,
    controles acessíveis, WebMCP só onde há tarefa definida, escrita sensível com confirmação
    humana. *Confiabilidade:* consultoria brasileira; **conceitual e normativa, sem nenhum dado
    empírico** — e é o melhor que achei em português.
14. **WebMCP — explicador.** `https://github.com/webmachinelearning/webmcp` — sustenta o mecanismo
    de D1 (`registerTool`, descrição em linguagem natural, esquema JSON), o diagnóstico do
    problema (screenshot e DOM são frágeis), os autores de Microsoft e Google, a data de 13/08/2025
    e o estado experimental. *Confiabilidade:* primária; especificação em incubação.
15. **Registro oficial de MCP.** `https://registry.modelcontextprotocol.io/v0/servers?limit=1` —
    consultado em 12/09/2026: o registro responde, devolve entradas ativas com carimbo de mudança de
    estado e paginação. *Confiabilidade:* primária e verificável em tempo real; não é análise, é
    verificação de que a infraestrutura existe.
16. **Digital Applied — AI crawler & bot traffic statistics 2026.** `https://www.digitalapplied.com/blog/ai-crawler-bot-traffic-statistics-2026-data-reference`
    — sustenta os 57,5% de tráfego bot (Radar, junho de 2026), os 20,3% de crawler de IA (maio de
    2026), a composição por bot e as razões *crawl-to-refer*. *Confiabilidade:* **agregador
    secundário** que cita Radar, Imperva, SEOmator e Adobe; usei a ordem de grandeza, não o dígito
    (ver 8.3).
17. **Digital Applied — MCP adoption statistics 2026.** `https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol`
    — sustenta 97 M de downloads mensais (dez/2025), 9.652 e 28.959 registros na API do registro
    (24/05/2026), 15.926 repositórios com o tópico `mcp-server` e os 41% da pesquisa Stacklok com
    100 lideranças. *Confiabilidade:* secundária, mas com fonte e data por número — é o que a torna
    utilizável.
18. **Digital Applied — llms.txt in practice.** `https://www.digitalapplied.com/blog/llms-txt-in-practice-adoption-evidence-2026`
    — sustenta o achado central do mapa: o estudo de ~300 mil domínios (20/11/2025) sem ligação com
    citação, e o levantamento de logs de ~900 domínios entre 04/09/2025 e 13/04/2026 com 1.227
    requisições e **zero de bot de fronteira** (64,7% agregador comercial, 31,9% navegador humano).
    *Confiabilidade:* secundária; descreve metodologia e janela, o que permite julgar — mas eu não
    abri o estudo de logs original.
19. **aeo.press — The state of llms.txt in 2026.** `https://ai.aeo.press/the-state-of-llms-txt-in-2026`
    — está aqui como **exemplo do gênero**: texto sobre padrão emergente sem um número, sem log, sem
    amostra, admitindo que a conformidade é inconsistente. *Confiabilidade:* baixa, e é esse o ponto
    (ver 8.6).
20. **Steel.dev — WebArena leaderboard.** `https://leaderboard.steel.dev/leaderboards/webarena/` —
    sustenta 74,3% no topo (atualização de 29/06/2026), 71,6% e 71,2% em seguida, contra 78,24%
    humano e 14,41% do agente GPT-4 original. *Confiabilidade:* placar mantido por empresa do setor,
    com submissões de terceiros; a ressalva do próprio site — que o número é do sistema inteiro e
    não do modelo — é relevante e eu a respeitei.
21. **Wikipédia — NLWeb.** `https://en.wikipedia.org/wiki/NLWeb` — sustenta o desenho (cada
    instância é um servidor MCP; schema.org e RSS como base) e os adotantes iniciais.
    *Confiabilidade:* enciclopédica e marcada como esboço; usei só o factual básico.
22. **ProOps — Digital ad trends, agosto de 2026.** `https://www.proopsconsulting.ca/blog/digital-ad-trends-august-2026-chatgpt-ads-hit-europe-publishers-fight-the-bot-layer-agentic-buying-leaves-the-deck-and-public-ad-tech-goes-private`
    — sustenta SF1 (Time com anúncio em versão voltada a chatbot; Perplexity bloqueando e chamando
    de enganoso; IAB montando medição com alvo em novembro de 2026) e a expansão do piloto de
    anúncios do ChatGPT a 31 mercados europeus por volta de 24/08/2026. *Confiabilidade:* boletim de
    consultoria; é a única fonte que abri para esses fatos, e cada um deles merecia confirmação
    independente.
23. **arXiv 2606.19116 — Towards an Agent-First Web.** `https://arxiv.org/pdf/2606.19116` —
    sustenta a posição acadêmica de "convergência deliberada em vez de divergência espontânea", que
    é a alternativa explícita ao cenário provável da seção 9. *Confiabilidade:* pré-print de junho
    de 2026, 21 autores, sem revisão por pares; é manifesto de projeto, não medição.
24. **arXiv 2507.21206 — Agentic Web.** `https://arxiv.org/html/2507.21206` — sustenta o arcabouço
    de três dimensões (inteligência, interação, economia) e o conceito de **economia da atenção do
    agente**, que é o eixo conceitual de D4. *Confiabilidade:* pré-print de 28/07/2025, SJTU/UC
    Berkeley/HKUST; conceitual, com evidência de adoção ilustrativa.
25. **ALM Corp — dados da Chartbeat.** `https://almcorp.com/blog/search-traffic-decline-small-publishers-chartbeat-data/`
    — sustenta os números que ancoram D4: queda de 60% / 47% / 22% por porte de veículo entre
    dez/2024 e dez/2025, Google Search −34%, Discover −15%, chatbots em **menos de 1%** das
    referências, e queda total global de só 6%. *Confiabilidade:* secundária, relatando dados da
    Chartbeat divulgados via Axios em março de 2026; a fonte primária me deu 403 (ver 12.4).
26. **E-Commerce Brasil — IA agêntica e o e-commerce brasileiro.** `https://www.ecommercebrasil.com.br/artigos/ia-agentica-e-o-e-commerce-brasileiro-em-2026-redesenhando-o-nucleo-operacional-do-comercio-digital`
    — usada como evidência **negativa**: publicada em 24/10/2025, apresenta número global (84%) em
    contexto brasileiro e **nenhum dado nacional**. *Confiabilidade:* artigo de opinião setorial;
    entra porque a ausência de dado brasileiro é um achado desta rodada.
27. **MCP Apps (SEP-1865) — anúncio.** `https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/`
    — sustenta e2: esquema `ui://`, `text/html+mcp`, iframe isolado, coautoria de OpenAI, Anthropic
    e MCP-UI, data de 21/11/2025. *Confiabilidade:* primária do protocolo.
28. **MCP Apps (SEP-1865) — proposta.** `https://modelcontextprotocol.io/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp`
    — o texto normativo da mesma extensão. *Confiabilidade:* primária.
29. **SE Ranking — estudo de llms.txt.** `https://www.seranking.com/blog/llms-txt/` — sustenta o
    número que mais pesa neste mapa: **10,13% de adoção em quase 300 mil domínios**, publicado em
    07/11/2025, **sem ligação mensurável com citação por IA** — e o detalhe metodológico de que o
    modelo melhorou quando a variável foi retirada. *Confiabilidade:* primária do estudo; empresa de
    ferramentas de SEO, com interesse comercial em vender otimização, publicando um resultado nulo
    contra o próprio interesse — o que aumenta a credibilidade.
30. **Tech Policy Press — The Web Is Being Made Accessible for AI, Not People.**
    `https://www.techpolicy.press/the-web-is-being-made-accessible-for-ai-not-people/` — sustenta e5
    e e5.1: texto plano para modelo não é HTML estruturado para leitor de tela; risco de abandono do
    `alt`; mais de 95% do primeiro milhão de páginas com falha de acessibilidade; o conceito de
    *accessibility-washing*. Jonathan Zong e Frank Elavsky, 20/05/2026. *Confiabilidade:* ensaio
    assinado por pesquisadores da área, com posição declarada.
31. **Rest of World — AI agents e desigualdade.** `https://restofworld.org/2026/ai-agent-inequality/`
    — sustenta e12.1.1: divisão entre quem tem agente, quem tem agente bom e quem não tem; o plano
    indiano de distribuir agente pessoal a 50 milhões de peregrinos; e o caso concreto de
    substituição de salários. Rina Chandran, 26/05/2026. *Confiabilidade:* jornalismo de qualidade
    com foco no Sul global; **sem dado brasileiro**.
32. **Search Engine Journal — Amazon v. Perplexity.** `https://www.searchenginejournal.com/amazon-vs-perplexity-the-cfaa-case-that-decides-whether-ai-agents-can-visit-your-website/575499/`
    — sustenta D3 inteira: a questão (quem é o visitante quando a visita é delegada), a tese de cada
    lado, a liminar de 10/03/2026, a suspensão pelo Nono Circuito, as razões de 08/05/2026 e a
    sustentação oral marcada para 11/06/2026. *Confiabilidade:* **secundária, e é a fragilidade
    factual mais séria do documento** (ver 8.4).
33. **arXiv 2510.16853 — Agentic Inequality.** `https://arxiv.org/pdf/2510.16853` — sustenta a
    tipologia de desigualdade agêntica (disponibilidade, qualidade, quantidade) usada em e12 e
    e12.1.1. Sharp, Bilgin, Gabriel e Hammond. *Confiabilidade:* pré-print; argumentativo, com
    evidência por analogia histórica e não por medição.
34. **MCP Manager — estatísticas de adoção.** `https://mcpmanager.ai/blog/mcp-adoption-statistics/`
    — sustenta a curva de servidores remotos (crescimento de ~4× entre maio e outubro de 2025;
    5.500+ no PulseMCP) e o fato de que grandes empresas estão migrando de servidor local para
    remoto. *Confiabilidade:* fornecedor do setor; dados de outubro de 2025, já defasados quando
    comparados ao registro oficial de maio de 2026.

## 12. Anexo — o levantamento bruto

Nada foi cortado em silêncio. O que saiu das seções de cima está aqui, com o motivo.

### 12.1 O contrato desta rodada (tempo 2 do protocolo, escrito antes da execução)

**Objetivo.** Produzir o mapa de futuro do tema 4 da disciplina — *A internet agêntica: quando o
usuário é uma máquina* — no modo MAPA da skill `futurizacao-giordano` v1.2, horizonte 2046, público
"quem projeta mídia e interação", recorte global com nota sobre o Brasil, viés neutro, com busca na
web de verdade.

**Critério de pronto.** Arquivo em
`/Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2046/04-a-internet-agentica-quando-o-usuario-e-uma-maquina/tendencia-a-internet-agentica-quando-o-usuario-e-uma-maquina.md`,
no formato de `references/formato.md`: frontmatter completo, doze seções com títulos literais, bloco
`roda:` com três níveis e ids hierárquicos, duas a quatro disrupções-raiz que passem no critério de
maturidade do §2, mecanismo escrito para cada efeito, pelo menos um efeito de retroação por raiz,
§6 com cota de rebaixamento cumprida, só fontes abertas na seção 11, e a saída íntegra de
`verificar.py --links` colada nesta seção.

**O que NÃO entra.**
- Modo adversarial: não há documento de aluno nesta rodada.
- Identidade e detecção técnica de agentes: é o tema 2 da disciplina. Aqui entra só o **estatuto**
  do visitante-máquina.
- Pagamento e comércio agêntico como categoria: é o tema 5. Entra só onde toca a web como
  plataforma (e11, e13).
- O que já é comum em produto de massa: a régua da disciplina. Recusas registradas na seção 4.
- Previsão. O documento é exploração estruturada, com incerteza escrita em cada linha.

### 12.2 Premissas assumidas por falta de entrevista

A rodada foi não interativa. O `briefing:` cobriu horizonte, público, recorte, zona de interesse,
viés, descartes, o falseador e a profundidade — por isso **não houve rebaixamento de confiança**
(regra da skill v1.2, §0: briefing completo substitui a entrevista). O que o briefing **não** cobria
e eu assumi:

1. **Que "quem projeta mídia e interação" inclui quem escreve, quem desenha e quem decide o modelo
   de negócio da peça** — e não só quem faz interface. Foi o que me levou a manter D2 e D4, que são
   econômicas antes de serem de projeto.
2. **Que a nota sobre o Brasil deve ser um efeito dentro da roda, e não uma seção separada.** Está
   em e10.1 e e10.1.1, e a fragilidade dela está declarada em 8.7.
3. **Que o horizonte de 2046 permite efeitos de terceira ordem dentro da janela**, em vez de exigir
   que eles a ultrapassem. Nenhum efeito passa de 2044, e a justificativa está em "Prazo e
   horizonte", na seção 5.
4. **Que "descartado: o que já é comum em produto de massa" se aplica a `robots.txt`, `schema.org`,
   API REST e scraping** — as quatro recusas registradas na seção 4.
5. **Que o número de raízes fica em quatro**, o máximo permitido, porque o tema tem quatro
   mecanismos genuinamente independentes (declarar, cobrar, credenciar, descobrir). Com três, eu
   teria de fundir cobrança e descoberta, que é exatamente a fusão que a contradição
   "abrir ou fechar" mostra ser errada.

### 12.3 Efeitos cortados no §6, com o motivo

Quatro efeitos removidos, um por raiz, conforme a cota do método:

- **[D1] "Escolas de design reorganizam o currículo em torno de interface para máquina."** Removido
  por ser um dos efeitos explicitamente proibidos pelo método: serve a qualquer tema, não nomeia
  curso nem instituição, e não tem mecanismo que o ligue ao pai. Se voltasse, teria de vir como
  *"o currículo de design de interação do CIn-UFPE substitui a disciplina de prototipação visual por
  uma de contrato de ferramenta"* — o que eu não tenho como sustentar.
- **[D2] "Surge um mercado secundário de revenda de acesso pago."** Removido pelo teste da causa
  solta: aconteceria exatamente igual com qualquer precificação de API, sem agente nenhum. Não
  deriva desta raiz.
- **[D3] "Reguladores criam a categoria jurídica de agente eletrônico."** Removido por duas razões.
  É efeito proibido (regulador genérico, sem nome). E é factualmente preguiçoso: figuras de agente
  eletrônico existem em direito de comércio eletrônico desde os anos 1990 — o que falta não é a
  categoria, é a imputação de responsabilidade, que virou e11.1.1 com mecanismo próprio.
- **[D4] "Surge a profissão de engenheiro de prontidão agêntica."** Removido por ser efeito
  proibido. O que sobrou dele, com mecanismo, é e15.1 (a indústria de otimização se reconverte), que
  nomeia o ator existente em vez de inventar um novo.

Além desses, dois efeitos foram **fundidos** em vez de removidos:
- *"O site passa a ter duas analíticas"* foi absorvido por e9 (custo de máquina como item de
  orçamento), porque era o mesmo efeito visto do lado da medição.
- *"A documentação técnica vira produto"* foi absorvido por e1.1.1 (descrição de ferramenta vira
  design), porque o ator e o mecanismo eram os mesmos.

E um candidato a **raiz** foi rebaixado a efeito: *"o custo de servir máquina entra no orçamento"*
não rompe nada — é o mesmo orçamento com mais uma linha. Virou e9.

### 12.4 O que tentei abrir e não consegui

- `https://en.wikipedia.org/wiki/X402` — **404**. Era a fonte que sustentaria os números de x402
  citados em resultado de busca (69 mil agentes, 165 M de transações, ~US$ 50 M até abril de 2026).
  Sem ela, usei só o `x402.org`.
- `https://www.axios.com/2026/03/17/chartbeat-search-traffic-ai-chatbots` — **403**. É a fonte
  primária dos dados da Chartbeat. Usei o relato do ALM Corp, que é secundário.
- `https://radar.cloudflare.com/bots` — **403**. É a fonte primária de todos os números de tráfego
  de bot deste documento. Usei agregadores.
- `https://www.geekwire.com/2026/judge-blocks-perplexitys-ai-bot-from-shopping-on-amazon-in-early-test-of-agentic-commerce/`
  — **403**. Era a cobertura jornalística direta da liminar.
- `https://nerova.ai/news/openai-retiring-atlas-browser-computer-use-moving-into-chatgpt-july-2026`
  — **503**. Era a fonte que confirmaria a data de descontinuação do Atlas.
- `https://help.openai.com/en/articles/20001371-evolving-atlas-into-chatgpt-for-browser-based-agentic-work`
  — **403**. Era a fonte **primária** da mesma coisa.
- `https://techcommunity.microsoft.com/blog/microsoft-security-blog/the-state-of-mcp-security-in-2026/4531327`
  — devolveu só o título, sem corpo.
- `https://modelcontextprotocol.io/specification/2026-06-18/changelog` — **404**. Eu tinha chutado a
  data da revisão da especificação na URL; a revisão que aparece em fonte secundária é 2026-07-28.
  **Não confirmei nenhuma das duas**, e por isso a versão da especificação não aparece em lugar
  nenhum do documento.
- `https://checkmarx.com/learn/mcp-security-risks-real-world-incidents-and-security-controls/` —
  abriu para a ferramenta de leitura e devolve **403** para `curl`/`urllib` com User-Agent de
  navegador. Como a regra da seção 11 é "link tem que responder", **não entrou na lista de fontes**,
  embora eu tenha lido o conteúdo. O que dele sobrou no documento (W4, incidentes de MCP) está
  marcado em 12.5 como não confirmado em fonte citável.

### 12.5 Alegações que usei e não consegui confirmar em fonte aberta citável

1. **O desfecho do caso Amazon × Perplexity.** A sustentação oral estava marcada para 11/06/2026 em
   Seattle. Não achei o resultado. **Uma raiz inteira do mapa (D3) depende disso.**
2. **"Mais de um bilhão de respostas 402 por dia na rede da Cloudflare."** Amplamente repetido;
   ausente das duas fontes primárias da própria Cloudflare que abri. **Não entrou no documento.**
3. **A data de descontinuação do ChatGPT Atlas (09/08/2026).** Aparece em resultado de busca; as
   duas fontes que a sustentariam (uma delas primária, da própria OpenAI) me deram 503 e 403. Usei a
   informação na seção 3 e em SF5, e registro aqui que **ela não está ancorada em fonte aberta desta
   rodada**.
4. **Os incidentes de segurança de MCP.** Registro poisoning em fevereiro de 2026 (operação
   SmartLoader, cinco contas falsas de GitHub, servidor Oura Ring trojanizado), execução de comando
   via transporte STDIO nos SDKs oficiais em abril de 2026, mais de 30 CVEs num período de 60 dias.
   Lidos, mas a fonte não é citável pelo critério de link (12.4). Por isso W4 está escrito como
   wildcard, e não como sinal fraco com fonte.
5. **O número de sites indexados pelo Not Human Search.** O README diz "8.000+"; a lista interna do
   repositório fala em ~1.900 sites mais ~500 servidores MCP; o site declarava 5.316 em 12/09/2026.
   **Três números do mesmo projeto.** Usei o do site, que é o mais recente e o mais verificável, e
   registro a divergência.
6. **"Mais de 400 provedores distintos de IA com capacidade de navegação web"** e **"o tráfego de
   máquina pode ser mil vezes o humano em cinco anos"**, ambos atribuídos à Cloudflare em imprensa
   brasileira. A segunda entrou no documento uma vez, em 7.5, explicitamente marcada como projeção
   da empresa; a primeira não entrou.
7. **Os 185 milhões de usuários de internet no Brasil** (relatório Digital 2026, citado de segunda
   mão). Usei na prosa de e10.1 como ordem de grandeza, sem abrir o relatório.
8. **O piloto de anúncios do ChatGPT em 31 mercados europeus.** Uma fonte só, de boletim de
   consultoria (fonte 22). Sustenta e16.1 com confiança alta, o que é generoso para uma fonte
   única — é o ponto onde eu mais aceitaria uma correção.

### 12.6 Buscas que não deram em nada

- **"Brasil + internet agêntica + dado"**, em várias formulações. O que existe em português é
  material de consultoria, conceitual e normativo, sem medição. O melhor achado foi um número de
  volume de busca (crescimento de 22% nas buscas por "agentes de IA" no Google Brasil, ~175 mil
  pesquisas no ano), que mede curiosidade, não adoção — e por isso não entrou. **A ausência de dado
  brasileiro sobre este tema é, ela mesma, o achado da busca.**
- **Regulação de acesso de agente a sites na UE.** Procurei DSA e AI Act. O que existe é o Artigo 50
  (transparência: dizer que é IA), aplicável desde 02/08/2026, e o registro explícito do AI Office
  de que suas considerações sobre agentes são preliminares. **Não há instrumento europeu sobre
  direito de acesso de agente** — o que é informativo: a Europa regulou o que o agente diz, não o
  que ele pode visitar.
- **Medição de custo energético do tráfego agêntico.** Nada com método. É a razão de o eixo
  ecológico do STEEP estar declarado como parcialmente vazio.
- **Adoção real de WebMCP em produção.** Só números de origin trial e de intenção. Ninguém publicou
  quantos sites registram ferramentas.
- **Preço praticado em pay per crawl.** Nem a Cloudflare nem nenhum publicador divulgou faixa. Sem
  isso, e6.1 (orçamento como parâmetro) não tem como ser dimensionado.
- **Um veículo de imprensa cobrando por requisição via x402.** Procurei explicitamente. Não achei —
  e é o sinal observável de SF6 justamente por isso.

### 12.7 Notas soltas do levantamento, que não couberam

**A ironia central do tema, que não coube em nenhuma seção.** O `llms.txt` é, hoje, um arquivo que
humanos publicam e humanos leem: 31,9% das requisições a ele vieram de navegador. Foi escrito para
robôs, é lido por gente, e os robôs raspam o HTML que não foi escrito para eles. A web agêntica de
2026, medida em vez de descrita, é isso.

**O Atlas como lição de forma.** A hipótese óbvia — o agente precisa do próprio navegador — durou
menos de dez meses. O que sobreviveu foi a hipótese menos óbvia: o agente opera de dentro do
assistente, e o navegador vira detalhe de implementação. Vale como aviso geral para mapas de
futuro: a forma que parece necessária costuma ser a primeira a cair.

**Uma assimetria que merecia um mapa próprio.** O MCP pegou entre desenvolvedores (9.652 servidores
no registro, 41% das organizações pesquisadas com algo em produção) e não pegou entre sites (menos
de 15 dos 200 mil maiores). A mesma tecnologia, o mesmo período, dois resultados opostos. A
explicação é de incentivo, não de técnica: o desenvolvedor que expõe uma ferramenta ganha
imediatamente; o site que expõe uma ferramenta entrega a função e não recebe nada em troca. Isto
está embutido em D1 e em D4, mas mereceria ser o objeto de um mapa inteiro.

**O ECAD como classe de referência de e8.1.** O licenciamento coletivo de direito musical é a
analogia mais próxima do que o RSL Collective tenta fazer, e a história dele carrega o aviso: o
coletivo que nasce para dar poder a quem é pequeno vira, com o tempo, um poder próprio, com agenda
própria, que o pequeno também não controla. Deixei isso em e8.1.1 sem citar o ECAD no bloco, para
não amarrar um efeito global a uma instituição brasileira.

**Um número que eu queria e não existe.** Qual é a taxa de conclusão de tarefa de um agente numa
amostra de sites **reais**, não autohospedados? O WebArena é reprodutível porque roda em cópias
controladas de seis sistemas. Ninguém publica a taxa na web viva, e ela é o número que decidiria
metade das confianças deste mapa.

**O que eu diria numa aula, se tivesse de escolher uma frase.** A internet agêntica de 2026 não é
uma web que se abriu para máquinas: é uma web que aprendeu a cobrar delas e a barrá-las, enquanto
publica arquivos que elas não leem.

### 12.8 Saída do verificador

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 19 (frontmatter diz 19)
efeitos ordem 2: 26 (frontmatter diz 26)
efeitos ordem 3: 22 (frontmatter diz 22)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 6 · media 13 · baixa 0
confiança ordem 2: alta 2 · media 22 · baixa 2
confiança ordem 3: alta 0 · media 3 · baixa 19
links da seção 11: 34/34 respondem (frontmatter diz fontes: 34)
RESULTADO: ok
```

Rodado em 12/09/2026, com `--links`. Os trinta e quatro links da seção 11 responderam. A única
divergência que o verificador não vê e que eu registro à mão: o `checkmarx.com` foi lido pela
ferramenta de leitura e devolve 403 para `curl`/`urllib`, e por isso **não** está na seção 11 — o
que faz `fontes: 34` contar as fontes citáveis, não as lidas, que foram trinta e cinco.
