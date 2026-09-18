---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: mjbo
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 16
tecnologias_citadas: [Model Context Protocol, WebMCP, llms.txt, ai-plugin.json, OpenAPI, x402, HTTP 402, Agentic Commerce Protocol, AP2, Machine Payments Protocol, Web Bot Auth, RFC 9421 HTTP Message Signatures, Signature Agent Card, robots.txt, Cloudflare Pay Per Use, Not Human Search, A2A, schema.org, JSON-LD, Pix]
fontes: 15
confianca: media
experimento: O site de duas caras
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

A web está sendo reorganizada para um visitante que não tem olhos. Em junho de 2026, requisições
automatizadas já eram 57,5% do tráfego HTML medido pela Cloudflare, e a relação entre páginas
rastreadas e visitas devolvidas chegou a 50.000 para 1 em alguns rastreadores — o acordo tácito
que sustentava a web aberta (deixo você ler, você me manda gente) quebrou nos números antes de
quebrar no discurso. Três rupturas derivam daí: o site passa a **declarar o que sabe fazer** em
vez de exibir (MCP, com 10 mil servidores em produção, e WebMCP, em origin trial no Chrome); o
acesso de máquina passa a ser **cobrado por requisição** (x402, Pay Per Use da Cloudflare, ACP,
AP2); e o visitante automatizado passa a ter de **provar quem é** para entrar (Web Bot Auth, e
uma decisão judicial de março de 2026 estabelecendo que a permissão do usuário não equivale à
autorização do site). O mapa aponta para uma web em três faixas — aberta a humanos, aberta a
agentes identificados, fechada — e para um deslocamento do ofício de design: da tela para o
contrato de ferramenta. A aposta mais frágil é a do pagamento por requisição, cujo histórico de
antecessores é um cemitério; a mais consolidada é a do controle de entrada, que já está em
produção e já tem jurisprudência.

## 2. O tema

A web foi construída para um leitor com retina, atenção e cartão de crédito. Cada camada dela
pressupõe isso: o HTML descreve uma coisa a ser vista, o CSS a torna legível, o anúncio paga pela
página porque alguém a olha, o SEO existe porque o buscador manda gente, e a métrica de sucesso —
o clique — é um gesto de dedo humano.

O tema aqui não é "agentes de IA usam a web". Isso é uso. O tema é a web **sendo reprojetada**
para que o uso principal seja de máquina: um endereço `.well-known` em vez de uma home, um
esquema JSON em vez de um formulário, um preço por requisição em vez de um banner, uma assinatura
criptográfica em vez de um user-agent. Quando isso acontece, mídia e interação deixam de ter o
mesmo objeto: não se projeta mais "o que a pessoa vê e faz", projeta-se "o que a máquina dela
pode pedir, e em que termos".

Isso merece mapa de futuro, e não levantamento de estado da arte, por uma razão específica: as
peças já existem e estão em conflito aberto entre si. A Cloudflare vira o default para bloquear;
o W3C discute como abrir; a Anthropic e a OpenAI assinam suas requisições; a Amazon processa a
Perplexity e ganha. Não há uma trajetória única a descrever — há uma bifurcação em curso, com
atores empurrando para lados opostos, e o resultado de 2031 depende de qual empurrão prevalece.
Levantamento de estado da arte descreveria as peças. O que falta é dizer o que decorre delas.

A fronteira com os vizinhos: identidade e detecção de agente como problema de **segurança** é o
tema 2; pagamento e comércio como problema de **transação** é o tema 5. Aqui os dois entram só
enquanto decisões de **publicação** — quem o site deixa entrar e por quanto, como escolha
editorial e de produto.

## 3. Onde isso está hoje

### O que já existe e funciona em produção

**O tráfego já é majoritariamente de máquina.** A Cloudflare Radar mediu, em junho de 2026, 57,5%
de requisições automatizadas contra 42,5% humanas no tráfego HTML — acima dos 53% de 2025, que já
tinham sido o primeiro ano-calendário em que máquinas superaram pessoas [13]. Dentro do tráfego
de bot verificado, a fatia de IA fica em torno de um quarto.

**O acordo crawl-por-visita já quebrou, e há número.** A própria Cloudflare publicou as razões
entre páginas rastreadas e visitas devolvidas, medidas na primeira semana de agosto de 2025: 50.000
para 1 no ClaudeBot, 887 para 1 na OpenAI, 118 para 1 na Perplexity — e, no recorte de notícias,
2.500 / 152 / 32,7 para 1 [8]. Medições posteriores, de terceiros, dão 23.951 para 1 no ClaudeBot
no primeiro trimestre de 2026, contra cerca de 4,9 para 1 da busca tradicional do Google [13].
Números diferentes, janelas diferentes; a ordem de grandeza é a mesma e a direção também.

**O MCP virou infraestrutura.** Lançado pela Anthropic em 25 de novembro de 2024, foi adotado pela
OpenAI em março de 2025 e pelo Google DeepMind em abril de 2025; em meados de 2026 havia mais de
10 mil servidores MCP em produção e os SDKs eram baixados 97 milhões de vezes por mês; a revisão
de especificação de 28 de julho de 2026 removeu o rastreio de sessão no nível de protocolo,
tornando o MCP *stateless* [11]. O roadmap de agosto de 2026 organiza-se em cinco eixos, sendo
dois diretamente sobre a web como plataforma: transporte HTTP-nativo unificado e identidade de
agente para uso corporativo; e um grupo de trabalho dedicado a **Server Cards**, metadados em
`.well-known` que permitem descobrir um servidor "sem se conectar a ele" [2].

**O bloqueio por padrão tem data marcada.** Em 1º de julho de 2026 a Cloudflare anunciou que, a
partir de 15 de setembro de 2026, rastreadores de uso misto seriam bloqueados por padrão em
páginas com anúncio, com o modelo Pay Per Use substituindo o Pay Per Crawl — pagando o editor
quando o conteúdo é **usado** numa resposta, não quando a página é buscada. Os primeiros parceiros
são Ceramic.ai e You.com. A mesma nota registra que mais de 50% do tráfego de rastreio de IA é
gasto rebuscando páginas que não mudaram [3].

**O pagamento por requisição existe e roda.** O x402 usa o código HTTP 402 para negociar e liquidar
dentro do mesmo ciclo de requisição: o servidor responde 402, o cliente paga em stablecoin, anexa a
prova e repete. O painel do próprio protocolo, em setembro de 2026, mostrava 75,41 milhões de
transações, US$ 24,24 milhões de volume, 94.060 compradores e 22 mil vendedores nos últimos 30
dias, com integrações declaradas de Alchemy, AWS, Cloudflare, Stripe e Vercel — e, note-se,
**nenhuma menção a MCP** na página oficial [4]. Ao lado dele, quatro protocolos disputam a camada:
AP2 (Google, com mandatos assinados), ACP (OpenAI e Stripe, padronizando o checkout), MPP (Stripe
e Tempo) e o próprio x402 [14].

**A identificação criptográfica de agente já está em produção antes de ser padrão.** O Web Bot
Auth, de Thibault Meunier (Cloudflare) e Sandor Major, especifica assinatura de mensagens HTTP
para tráfego automatizado, com cabeçalho `Signature-Agent`, diretório JWKS e URI `.well-known`;
o rascunho individual de agosto de 2026 já foi sucedido por um draft de grupo de trabalho do IETF
[6]. Anthropic, OpenAI, Perplexity, Common Crawl e bots do Google já assinam.

**Há jurisprudência.** Em 9 de março de 2026, no caso 25-cv-09514-MMC (Distrito Norte da
Califórnia), a juíza Maxine M. Chesney concedeu liminar impedindo a Perplexity de usar agentes do
navegador Comet em contas protegidas por senha da Amazon, e ordenou a destruição dos dados já
obtidos. O raciocínio central: **"o consentimento do usuário não é o mesmo que a autorização da
plataforma"**, com apoio no precedente *Facebook v. Power Ventures*. A Amazon alegou violação da
CFAA e que o Comet se disfarçava usando a mesma string de identificação do Chrome [15].

### O que existe mas não funciona

**O llms.txt falhou, e há dado.** A Ahrefs analisou 137.210 domínios em maio de 2026: 28% publicam
um llms.txt válido (38.360 domínios) e **97% desses arquivos não receberam requisição nenhuma** no
mês; dos 3% lidos, 96% das requisições vieram de bots, e apenas 19,5% delas de bots de IA — o
maior grupo isolado eram ferramentas de auditoria de SEO, com 21,7% [1]. Um estudo independente da
SE Ranking sobre cerca de 300 mil domínios testou, com XGBoost, se a presença do arquivo prevê
citação por LLM: remover a variável **melhorou** a acurácia do modelo — o arquivo adicionava
ruído, não sinal [12]. O Google declarou, em maio de 2026, que o arquivo não é necessário para
nenhum de seus recursos generativos.

**O WebMCP é promessa, não prática.** É um Draft Community Group Report do W3C Web Machine
Learning CG, fora do standards track. Chrome em origin trial (versões 149–156), Edge atrás de
flag, Firefox e Safari sem compromisso. A API mudou de `navigator.modelContext` para
`document.modelContext` em 21 de julho de 2026, criando dívida técnica para quem adotou cedo. A
adoção real é descrita como "aproximadamente zero": Expedia, Booking.com e Shopify participam do
origin trial, mas nenhum agente mainstream consome as ferramentas registradas — problema clássico
de bootstrap de dois lados [7].

**O ranking de prontidão agêntica é artesanal.** O Not Human Search pontua sites de 0 a 100 em
sete sinais (llms.txt vale 25 pontos, ai-plugin.json vale 20; os pesos dos demais não são
verificáveis na página). Aberto em setembro de 2026, o índice declarava **5.339 sites** e
pontuação média **38** [5] — muito abaixo do "8.000+" que aparece na descrição do repositório. É
um embrião, não um PageRank.

### Quem está construindo

Anthropic (MCP, e a maior razão crawl-por-visita medida), Google (WebMCP, AP2, A2A — e 28,4% do
tráfego de bot verificado), Microsoft (coautoria do WebMCP), OpenAI e Stripe (ACP), Coinbase e
depois a x402 Foundation sob a Linux Foundation, Cloudflare (Pay Per Use, Web Bot Auth, e a
posição de árbitro por ser quem serve a página), Perplexity (do lado de quem força a porta), e do
lado de quem fecha: Amazon, Reddit e os tribunais. Há ainda uma camada acadêmica incipiente: um
paper de junho de 2026 argumenta que a otimização para motores generativos cria riscos de
**concentração** (poucas empresas controlam modelo e busca), de **disclosure** (opacidade sobre
como o conteúdo é selecionado, com vulnerabilidade a envenenamento) e pontos cegos da própria
academia [10].

### O recorte brasileiro

O Brasil aparece adiantado na ponta do consumo e atrasado na ponta da publicação. Pesquisa da
NielsenIQ de maio de 2026 indica que 42% dos consumidores brasileiros já usam ferramentas de IA
para pesquisar preço e comparar produtos; o relatório da Worldpay registra 57% apontando rapidez e
conveniência como razão para considerar comércio agêntico, com projeção de 11% das compras
brasileiras feitas por bots em cinco anos [9]. O trilho existe: Pix e Open Finance dão ao país uma
infraestrutura de pagamento que os protocolos agênticos estão tentando inventar do zero em
stablecoin. O que não aparece em lugar nenhum é sinal equivalente do **lado do site** — nenhuma
evidência de adoção brasileira relevante de MCP público, WebMCP ou tarifação por requisição.

## 4. As disrupções-raiz

Três candidatos passaram no teste de três perguntas da Etapa 3 da skill. Quatro foram reprovados e
estão registrados na Seção 12 — entre eles o llms.txt, que é hoje o termo mais citado do tema e
não é disrupção nenhuma.

### D1 — A capacidade declarada: o site diz o que sabe fazer, em vez de exibir o que sabe fazer

**O que rompe.** Rompe a interface como lugar do negócio. Até aqui, um programa terceiro só operava
um site de dois jeitos: por uma API documentada para pessoas, com integração bilateral negociada
de antemão, ou por raspagem frágil. A capacidade declarada (MCP do lado do servidor, WebMCP do lado
do navegador) cria uma terceira via que **não existia**: o cliente é escrito em tempo de execução
pelo modelo, a partir de um contrato que o site publica, sem acordo prévio entre as partes. O que
isso invalida é nomeável: o SEO como prática, o funil como objeto de projeto, o formulário HTML
como superfície oficial de transação, e a publicidade adjacente ao conteúdo como forma de cobrar
pela visita.

**Por que agora.** Não por a tecnologia estar melhor. Por três coisas datadas: o MCP saiu de zero
(novembro de 2024) para mais de 10 mil servidores e 97 milhões de downloads de SDK por mês em
meados de 2026 [11]; o W3C aceitou o WebMCP como Community Group em setembro de 2025 e o Chrome
enviou preview em fevereiro de 2026 [7]; e os modelos passaram a chamar ferramenta com
confiabilidade suficiente para que um site declarar capacidade não seja um convite ao desastre.

**O que falta.** Falta o consumo. Enquanto o agente mainstream não usar a ferramenta declarada, o
site que a publica paga custo sem retorno — o bootstrap de dois lados descrito em [7]. E falta
resolver descoberta: o Server Card Working Group ainda trabalha em convenções de metadados [2].
Sem descoberta, capacidade declarada é uma porta sem endereço.

### D2 — O preço por requisição de máquina: o leitor automático deixa de ser gratuito

**O que rompe.** Rompe o contrato econômico da web aberta. O acesso sempre foi gratuito na troca
implícita por visita — e a troca deixou de existir, medida em 50.000 páginas por visita devolvida
[8]. O que o x402 torna possível e antes não era é liquidação **sub-centavo, sem conta e sem
humano**, dentro do próprio ciclo HTTP [4]. Cobrar por acesso sempre foi possível; cobrar por
requisição individual de um cliente anônimo que não pode abrir cadastro, não. O que isso invalida:
o inventário publicitário onde o agente substitui a visita, o paywall como unidade (assinatura
mensal pressupõe leitor recorrente com identidade), e a gratuidade como valor-padrão da publicação.

**Por que agora.** Trilho de liquidação em stablecoin barato o bastante para sub-centavo; um lugar
neutro para o padrão (x402 Foundation sob a Linux Foundation, abril de 2026, com Google, AWS,
Microsoft, Stripe, Visa e Mastercard entre os fundadores); e sobretudo a decisão da Cloudflare de
**virar o default** em 15 de setembro de 2026, o que transforma a cobrança de opção militante em
configuração de fábrica para quem chega [3].

**O que falta.** Falta demanda do lado do comprador e falta escala: US$ 24,24 milhões em 30 dias
[4] é ruído perto do mercado de publicidade digital. E falta resolver qual protocolo — quatro
disputam a mesma camada, e o texto que mais defende a pilha admite que ali "há bandeiras demais
fincadas" [14].

### D3 — A porta com fechadura: identidade criptográfica como condição de entrada

**O que rompe.** Rompe o anonimato do cliente como premissa da web. Até aqui o site sabia, no
máximo, uma string de user-agent que qualquer um forja — a Amazon alegou exatamente isso sobre o
Comet [15]. Com Web Bot Auth, cada requisição é assinada por chave privada do provedor, com o
cartão do agente declarando identidade, propósito e expectativa de taxa [6]. O que isso torna
possível e antes não era: **servir coisas diferentes a agentes diferentes, com base em quem os
emitiu e para quem trabalham**. O que invalida: a raspagem indiferenciada como modelo de negócio, o
robots.txt como pedido de boa-fé sem verificação, e — juridicamente estabelecido — a ideia de que a
permissão do usuário basta para o agente dele entrar.

**Por que agora.** RFC 9421 como base pronta; Cloudflare, Anthropic e OpenAI em produção
simultânea, o que torna o rascunho padrão de facto antes de ser padrão de direito [6]; e a decisão
de 9 de março de 2026, que deu ao lado de quem fecha uma vitória citável [15].

**O que falta.** Falta o tratamento de quem não é grande: um agente próprio, sem reputação nem
provedor conhecido, assina do mesmo jeito e vale menos. E falta decidir se a verificação será
usada para **admitir com condições** ou simplesmente para **barrar** — o mesmo mecanismo serve aos
dois, e nada na especificação escolhe.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A capacidade declarada — o site publica o que sabe fazer, em vez de exibir
    efeitos:
      - id: e1
        ordem: 1
        efeito: A publicação passa a ter duas superfícies obrigatórias, a página para olhos e o catálogo de ferramentas para agentes
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O ofício de design de interação se divide entre desenhar telas e redigir contratos de ferramenta
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Cursos de design passam a ensinar escrita de esquema e de mensagem de erro como peça de interface
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Surge o papel de curador de capacidade, encarregado de decidir o que o site deixa a máquina fazer
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A analítica de produto migra de clique e sessão para chamada de ferramenta e intenção declarada
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O funil deixa de ser unidade de planejamento de produto, porque o agente não percorre etapas
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A descoberta deixa de ser indexação de texto e passa a ser consulta a registros de capacidade
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Um ranking de prontidão agêntica decide quais sites o agente sequer tenta usar
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Quem não declara capacidade sai da consideração do agente sem nunca aparecer como resultado ruim, e a exclusão fica invisível
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e2.1.2
                ordem: 3
                efeito: Forma-se um mercado de otimização para agentes com os vícios do SEO, com fazenda de esquema e ferramenta declarada que não funciona
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O registro de capacidade vira ponto de controle, e quem o opera decide o que existe para o agente
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A neutralidade de registro entra no debate regulatório nos moldes do que se discutiu para loja de aplicativo
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: O preço por requisição de máquina — o leitor automático deixa de ser gratuito
    efeitos:
      - id: e3
        ordem: 1
        efeito: O acesso de máquina passa a ser precificado por requisição, e o gratuito-com-anúncio deixa de ser o padrão para leitor automático
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A publicidade display perde base de cálculo onde o agente substitui a visita, e o inventário encolhe
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O patrocínio migra para dentro da resposta do agente, e a separação entre conteúdo pago e resposta vira a nova disputa de transparência
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: Veículos pequenos que viviam de display fecham ou viram fornecedores de dado no atacado para um punhado de compradores
                sinal: medio
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Publicar passa a ter tabela de preço por leitor de máquina, e o preço vira decisão editorial
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Arquivos, bases públicas e sites de serviço público precisam decidir se cobram da máquina, e a resposta redefine o que é bem público na web
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O agente passa a operar com orçamento, e escolher fonte vira decisão de custo além de decisão de qualidade
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Fontes caras só são consultadas quando a resposta barata falha, criando uma hierarquia de acesso invisível para o usuário
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A qualidade da resposta passa a depender de quanto o usuário paga pelo agente, e não do que está publicado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Sites otimizam para serem baratos de ler, com resposta curta e estruturada, porque custo por token entra no critério de escolha
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A prosa encolhe onde o leitor previsto é máquina, e escrever para humano vira produto separado e mais caro
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A porta com fechadura — identidade criptográfica como condição de entrada
    efeitos:
      - id: e5
        ordem: 1
        efeito: A web se separa em três faixas, aberta a humanos, aberta a agentes identificados e fechada
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Acessar um site exige que o agente prove por quem age, e o anonimato do cliente automatizado acaba na prática
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Quem usa agente próprio, não emitido por grande fornecedor, é tratado como tráfego suspeito por falta de reputação
                sinal: fraco
                prazo: 2030
                confianca: media
              - id: e5.1.2
                ordem: 3
                efeito: Escolher agente vira escolher acesso, porque trocar de assistente muda o que se consegue ler e comprar
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A permissão do usuário deixa de bastar, e o site decide se aceita o agente dele mesmo quando ele já é cliente
            sinal: medio
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Contratos de serviço passam a listar quais agentes podem agir em nome do cliente, e a delegação vira cláusula negociada
                sinal: fraco
                prazo: 2030
                confianca: media
      - id: e6
        ordem: 1
        efeito: Fechar-se para agentes vira estratégia comercial de quem tem marca e catálogo próprios
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Plataformas com demanda própria cobram para deixar o agente entrar e abrem apenas onde ganham
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O acesso agêntico se concentra em poucos acordos bilaterais e a web aberta para máquina não se realiza
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Surgem agentes-espelho autorizados pela própria plataforma, devolvendo o controle da experiência a quem publica
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O usuário passa a conversar com o agente da loja em vez de levar o seu, e a promessa de agente universal do lado do usuário encolhe
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

### O que o bloco não diz

**Primeiro: os três ramos não são independentes, e a roda não sabe representar isso.** O ramo de
D2 inteiro — oito efeitos — só existe se a cobrança por requisição pegar. Se não pegar, `e4.1`
("fontes caras só quando a barata falha") não fica mais fraco: ele desaparece, porque não há caro
nem barato. É a limitação que o próprio método tem, e que a Análise de Impacto Cruzado de Gordon e
Helmer existe para cobrir: a roda trata cada efeito como se tivesse probabilidade própria, quando
metade deles tem probabilidade **condicional**. Registro a dependência aqui porque o formato do
bloco não tem campo para ela.

**Segundo: D1 e D3 puxam em direções opostas e o bloco os apresenta lado a lado como se
somassem.** Declarar capacidade é abrir; exigir assinatura é fechar. O mesmo site pode fazer as
duas coisas — e é justamente isso que produz `e5` (a web em três faixas). Mas o resultado agregado
depende de qual movimento é mais barato, e nada na roda indica isso. Hoje, fechar é mais barato:
vira um clique no painel da Cloudflare em 15 de setembro de 2026. Abrir exige publicar, manter e
versionar um contrato.

**Terceiro: os prazos são o campo mais fraco do bloco.** `prazo: 2028` em `e1` significa "o efeito
fica reconhecível", não "está consumado" — e essa distinção some quando o número é lido isolado.
Tratei prazo como data de visibilidade, não de maioria adotante.

**Quarto: o bloco não tem onde registrar quem perde.** Todo efeito está escrito do ponto de vista
do sistema, não de quem é atingido. `e3.1.2` é a única linha em que alguém fecha as portas, e mesmo
ali está em voz passiva.

## 6. Sinais fracos e wildcards

### Sinais fracos

**O llms.txt é o primeiro padrão da web agêntica a fracassar em público, com medição.** Isso quase
não é tratado como informação sobre os outros. 97% dos arquivos sem um único leitor [1] e efeito
estatisticamente nulo sobre citação [12] são um resultado experimental sobre uma hipótese que os
demais padrões compartilham: a de que *publicar para máquina basta para ser lido por máquina*.
Quem quer prever WebMCP deveria olhar para llms.txt antes de olhar para MCP.

**O Signature Agent Card carrega mais do que identidade.** O cartão declara "identidade, propósito
e expectativa de taxa" e tem registro IANA de parâmetros [6]. Isso é a semente de um **cadastro de
reputação de agente** — um birô de crédito para robôs — e ninguém está chamando pelo nome. É o
mecanismo que decide `e5.1.1`.

**A assimetria brasileira é um experimento natural.** O Brasil tem 42% de consumidores já usando IA
para comprar e o Pix como trilho pronto [9], sem sinal correspondente de publicação agêntica do
lado dos sites. Isso configura um país que pode entrar no comércio agêntico **sem** passar pela web
agêntica — a compra intermediada por agente acontecendo dentro de aplicativos de mensagem e de
instituições financeiras, não em sites que declaram capacidade. Se acontecer, boa parte de D1 é
irrelevante aqui, e D2 chega por um caminho que não é o x402.

**A virada do MCP para stateless, em 28 de julho de 2026** [11], parece detalhe de engenharia e
decide economia: protocolo sem estado é cacheável e distribuível por CDN. É a diferença entre a
web agêntica ser infraestrutura barata ou permanecer cara — e portanto entre `e3` ser inevitável ou
opcional.

### Wildcards

**Wildcard 1 — um grande portal bloqueia todos os agentes e a audiência não nota.** Impacto alto:
provaria que o tráfego agêntico é economicamente irrelevante, e os três ramos do mapa perdem
urgência ao mesmo tempo. Probabilidade baixa **por uma razão datada**: o teste natural está prestes
a rodar em escala, porque a Cloudflare vira o default em 15 de setembro de 2026 para novos clientes
e para todos os clientes gratuitos [3] — e se bloquear fosse indolor, bloquear já seria universal,
o que os 57,5% de tráfego automatizado [13] mostram que não é.

**Wildcard 2 — um tribunal estende o raciocínio de Chesney da conta para a leitura.** Se "permissão
do usuário não é autorização da plataforma" [15] valer também para navegação deslogada, a navegação
agêntica passa a exigir contrato prévio, e a web aberta para máquina morre por decisão judicial em
vez de por economia. O mapa inteiro colapsa em `e6.1.1`. Probabilidade baixa porque a liminar de 9
de março de 2026 se apoiou especificamente em contas protegidas por senha e no limiar de prejuízo
da CFAA — dois elementos que não existem em leitura pública.

**Wildcard 3 — o MCP é absorvido por um padrão nativo de navegador e os 10 mil servidores viram
legado.** Impacto alto sobre D1: a capacidade declarada continuaria, mas sob controle de quem faz
navegador, o que empurra `e2.2` (registro como ponto de controle) de "fraco" para inevitável.
Probabilidade baixa pela base instalada e por 97 milhões de downloads de SDK ao mês [11] — mas o
WebMCP já mudou o nome da própria API uma vez em julho de 2026 [7], o que mostra que a camada do
navegador ainda se mexe.

## 7. Contra o próprio mapa

**1. Qual efeito é só extrapolação linear do presente.** `e3.1` — "a publicidade display perde base
de cálculo". O display já estava em queda antes de qualquer agente: a Pew mediu clique em 8% quando
há resumo de IA contra 15% quando não há, e a taxa de busca sem clique subiu de 56% para 69% entre
maio de 2024 e maio de 2025 — tudo isso é **busca**, não agente. Estou pegando uma erosão em curso,
de outra causa, e recontando como efeito da internet agêntica. Mudança de natureza seria `e3.1.1`
(o patrocínio dentro da resposta), e é justamente o efeito em que tenho confiança baixa. Ou seja: o
efeito de que tenho certeza não é novidade, e o que é novidade eu não tenho certeza.

**2. Qual efeito assume velocidade de adoção sem caso comparável.** `e1` — duas superfícies
obrigatórias até 2028. O caso comparável honesto é a adoção de padrão de navegador: o HTTPS, com o
Let's Encrypt gratuito desde 2016 e com o Chrome marcando site inseguro, levou perto de uma década
para ser quase universal; a web responsiva, empurrada pelo ranking do Google a partir de abril de
2015, levou cerca de cinco anos para virar maioria — e as duas tinham **um consumidor já
existente** puxando. O WebMCP não tem: a adoção é descrita como aproximadamente zero, o origin
trial está preso ao Chrome 149–156, Firefox e Safari não se comprometeram, e a API mudou de lugar
em julho de 2026 [7]. Afirmar 2028 é comprimir um ciclo de cinco a dez anos em dois, num padrão que
ainda não saiu do rascunho de Community Group. Este é o efeito mais frágil do mapa que está marcado
como `confianca: alta`, e a marcação está errada por otimismo.

**3. Qual disrupção pode não se concretizar, e o que sobra.** D2, o preço por requisição. O
histórico de micropagamento na web é um cemitério de tentativas boas, e US$ 24,24 milhões em 30
dias [4] é irrelevante perto do mercado publicitário — o volume também é concentrado em casos de
uso cripto-nativos, não em leitura de conteúdo. Se D2 cair, caem oito efeitos (`e3`, `e4` e seus
descendentes) e sobra um mapa coerente e mais chato: uma web que se abre para máquina por protocolo
e controla quem entra por assinatura, continuando a se pagar por anúncio e assinatura mensal como
hoje. O que se perde é a resposta à pergunta de 2ª ordem do tema — *quem paga pelo conteúdo que
alimenta o agente* —, que voltaria a não ter resposta.

**4. Que viés entrou aqui, e onde.** Pediram lente neutra, e a lente não é neutra em dois pontos
localizáveis. O primeiro: a zona de interesse declarada é "Agentes", e isso se vê em `e2.1` e
`e2.2`, onde dei `confianca: media` a um ranking de prontidão agêntica tratando o Not Human Search
como embrião de PageRank — quando o índice tem 5.339 sites e média 38 [5], escala de projeto
pessoal. A um artefato desse porte cabe `confianca: baixa`; mantive `media` porque a ideia de um
novo ranking nascendo é atraente demais para quem escolheu este tema. O segundo é meu, como
máquina: este é um mapa sobre a web ser reconstruída para agentes, escrito por um agente. Toda vez
que o mapa afirma que declarar capacidade para máquina é o futuro, ele está afirmando a
importância de si mesmo — e o efeito prático disso é que as evidências de fracasso (o llms.txt) eu
tratei como exceção instrutiva, enquanto as de sucesso (o MCP) tratei como tendência.

## 8. O que a máquina errou

**1. Quase publiquei um número de marketing como dado.** O resultado de busca sobre o Not Human
Search dizia "8.000+ sites indexados" — número que vem da descrição do repositório no GitHub. Ao
abrir o site [5], o painel dizia **5.339 sites, média 38**. A desconfiança veio de o número redondo
com "+" ser exatamente o formato de quem arredonda para cima. Os pesos dos sete sinais tiveram
problema análogo: o resumo de busca listava os sete com pontuação; a página confirmava só dois
(llms.txt +25, ai-plugin +20). Publiquei os dois verificados e disse que os demais não são
verificáveis, em vez de repetir a lista inteira.

**2. Errei a data de um processo e só notei pelo conflito entre URLs.** Vários resumos diziam que a
Amazon processou a Perplexity "em novembro", sem ano, no meio de um bloco sobre 2026; eu ia
escrever "novembro de 2026", que é **futuro**. O que expôs o erro foi a URL da Bloomberg conter
`2025-11-04`. A correção veio de abrir [15]: o processo é de novembro de 2025, a liminar é de 9 de
março de 2026, e o caso é o 25-cv-09514-MMC — o "25" no número do caso confirma o ano de entrada.
Duas fontes que eu pretendia usar para isso (CNBC e GeekWire) devolveram HTTP 403 e não entraram na
lista de fontes, embora tenham aparecido na busca.

**3. Misturei duas medições de razão crawl-por-visita como se uma fosse a atualização da outra.** O
blog da Cloudflare dá 50.000:1 para o ClaudeBot na primeira semana de **agosto de 2025** [8];
terceiros dão 23.951:1 no **primeiro trimestre de 2026** [13]. Eu ia escrever que a razão "caiu de
50.000 para 24.000", o que sugere uma tendência de melhora que ninguém mediu. São janelas,
metodologias e recortes de indústria diferentes. Estão relatadas separadamente, com as datas.

**4. Errei de categoria, não de fato: pus o llms.txt como disrupção-raiz na primeira passagem.** Ele
é o termo mais citado do tema e a coisa mais visível, e isso bastou para eu tratá-lo como ruptura.
Ele reprova na primeira pergunta do teste — uma lista curada de links não torna possível nada que
já não fosse — e, pior, a evidência diz que ele fracassou na prática [1][12]. Se tivesse passado, a
primeira disrupção do mapa seria um padrão morto. O que me fez pegar: os dois números independentes
apontando na mesma direção, e a percepção de que eu estava confundindo *popularidade do termo* com
*capacidade nova*.

**5. Quase escrevi que o x402 já se integra ao MCP.** É o tipo de afirmação que soa certa: os dois
são protocolos agênticos, e uma fonte secundária fala em "integração mais profunda com frameworks
de agente e protocolos de ferramenta como MCP". A página oficial do x402, aberta [4], **não menciona
MCP em lugar nenhum**. Ficou registrado como ausência, e não como integração existente. Os números
do x402 também divergem entre fontes — um resumo fala em 165 milhões de transações acumuladas até
abril de 2026, o painel oficial em 75,41 milhões nos últimos 30 dias; acumulado e janela móvel são
coisas distintas e viram uma frase errada com facilidade.

Nenhum destes cinco é hipotético: todos aconteceram durante esta rodada, e quatro deles só
apareceram porque abrir a fonte devolveu um número diferente do que o resumo de busca prometia.

## 9. Três cenários para 2031

**Provável.** Em 2031 a web tem duas portas, e quase ninguém chama isso de bifurcação — virou
arquitetura normal, do jeito que HTTPS virou. Todo site comercial de porte publica um contrato de
capacidade, versionado como se versiona API, e mantém a página humana como vitrine e como peça de
marca. A entrada é assinada: o site sabe qual agente bate, quem o emitiu e para quem ele trabalha,
e serve conteúdo diferente conforme a resposta. O pagamento por requisição existe e é rotina entre
máquinas — para dados, ferramentas e APIs — mas nunca virou a forma de pagar por jornalismo: o
conteúdo editorial se acertou por contrato de licenciamento entre poucos veículos grandes e poucos
fabricantes de modelo, e os veículos pequenos que viviam de display não estão mais lá para
reclamar. A descoberta se concentrou em dois ou três registros de capacidade operados por quem já
opera navegador e nuvem. Não é a web aberta que se prometeu para as máquinas; é um shopping com
catraca e cadastro, mais eficiente que o anterior e com menos gente decidindo o que existe.

**Desejável.** Em 2031 declarar capacidade é barato e portátil: o contrato que um site publica
funciona em qualquer agente, porque a descoberta está num registro federado, com regra pública de
inclusão, e não num índice privado. A assinatura de agente serve para **admitir com condições** —
taxa, escopo, propósito declarado — em vez de para barrar: um agente pessoal, rodando na máquina de
alguém, sem marca por trás, entra e é atendido, com limite menor, mas entra. O pagamento por
requisição existe e convive com uma faixa pública irredutível: arquivo, base pública, serviço de
Estado e acervo cultural continuam legíveis por máquina sem cobrança, por decisão explícita e não
por esquecimento. Para chegar aqui, três coisas precisavam ter sido feitas a partir de agora: um
registro de capacidade com governança neutra — o caminho que os Server Cards do MCP [2] começaram e
que precisava terminar fora do controle de um fabricante; uma regra de identidade que trate
ausência de reputação como *desconhecido*, não como *suspeito*, o que é decisão de política e não
de protocolo; e a definição legal de uma faixa de conteúdo público que a máquina lê de graça,
decidida antes de o default de bloqueio se sedimentar.

**Indesejável.** Em 2031 só entra quem tem contrato. A leitura por máquina exige credencial emitida
por um punhado de fornecedores, e quem não é cliente deles simplesmente não consegue ler a web
programaticamente — pesquisa acadêmica, arquivamento, auditoria de conteúdo e jornalismo de dados
passam a depender de licença. Cada grande plataforma tem seu agente-espelho, e levar o seu próprio
agente é como levar comida para dentro do cinema. O conteúdo que não está atrás de contrato é o que
ninguém quis licenciar, e a qualidade da resposta que uma pessoa recebe é função direta de quanto
ela paga pelo assistente. **O sinal precoce disso, hoje:** não é o bloqueio em si — é a reação a
agente próprio, sem provedor conhecido. Se, ao longo de 2027, agentes autoconstruídos que assinam
corretamente pelo Web Bot Auth [6] continuarem sendo tratados como tráfego suspeito só por não
terem reputação de marca, o desfecho já começou; a diferença entre *verificar quem é* e *só aceitar
quem é grande* é a coisa toda, e ela se decide na configuração padrão de quem serve as páginas,
não na especificação.

## 10. O experimento

### O que é

**O site de duas caras.** Um único serviço mínimo — digamos, um catálogo de eventos da disciplina,
com busca e inscrição — publicado simultaneamente em duas superfícies instrumentadas:

- **Cara humana:** página HTML comum, com formulário, e log de acesso.
- **Cara de máquina:** um servidor MCP remoto (e, opcionalmente, ferramentas WebMCP via
  `document.modelContext` para quem estiver no Chrome com a flag), mais `llms.txt`, `robots.txt` e
  uma especificação OpenAPI — os quatro sinais que o Not Human Search pontua [5].

Sobre a cara de máquina, dois controles: **verificação de assinatura** no estilo Web Bot Auth [6],
registrando quem assinou e quem não assinou; e **cobrança por requisição** via resposta HTTP 402 no
formato x402 [4], em ambiente de teste, aplicada a uma parte dos endpoints e não a outra.

O servidor registra tudo: qual porta cada visitante usou, se assinou, se pagou, o que pediu, quantas
vezes rebuscou o que não mudou.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta que sustenta o efeito `e1` e o ramo inteiro de D1: **declarar capacidade muda o que o
agente faz, ou o agente continua raspando o HTML porque sai mais barato?** É a pergunta que o
fracasso do llms.txt deixou em aberto — 97% dos arquivos nunca lidos [1] pode significar que o
formato era ruim, ou pode significar que agentes preferem ler a página e ignorar o que o site
declara sobre si. Em segundo plano, uma pergunta de `e5.1.1`: **o que acontece com um agente que
assina corretamente mas não tem marca?**

### Que tecnologia emergente usa, e por que não dá com tecnologia madura

Usa três: MCP/WebMCP, x402 e Web Bot Auth. Nenhuma das três é substituível por tecnologia madura
sem matar a pergunta.

- Uma **API REST com chave** não serve porque exige integração prévia: o aluno cadastra a chave, o
  agente usa. Isso responde "o agente consegue?", que já se sabe. A pergunta é sobre descoberta em
  tempo de execução, sem acordo prévio — que é exatamente o que só a capacidade declarada permite.
- Um **paywall ou assinatura** não serve porque pressupõe conta e leitor recorrente. O que se quer
  medir é a decisão de um cliente anônimo diante de um preço por requisição — comportamento que só
  existe com liquidação dentro do ciclo HTTP.
- **Checar user-agent** não serve porque a string é forjável, e a própria Amazon alegou que era
  isso que estava sendo feito [15]. A distinção entre *quem diz que é* e *quem provou que é* só
  existe com assinatura.

### O que a turma faz em sala

Cada aluno traz **o agente que já usa** — Claude, ChatGPT, Gemini, Comet, um agente próprio em
script, o que tiver. Todos recebem a mesma tarefa em linguagem natural ("encontre o evento de tal
data e inscreva fulano"), e o endereço do site. Ninguém recebe instrução sobre qual porta usar.

Na parede, projetado, o log do servidor em tempo real: uma coluna por aluno, mostrando qual porta
o agente dele escolheu, se assinou, se pagou ou desistiu ao ver o 402, e quantas requisições gastou.
A aula é assistir a isso acontecer. A discussão que vem depois é sobre a coluna que ninguém previu.

Segunda rodada, com uma mudança: desligamos a cara humana, deixando só a de máquina. Terceira
rodada: ligamos a cobrança nos endpoints que estavam gratuitos. Cada rodada leva minutos e produz
um log comparável.

### O que seria um resultado que me faria mudar de ideia

Três resultados, cada um derrubando uma parte:

1. **Se a maioria dos agentes ignorar as ferramentas declaradas e raspar o HTML** — D1 está
   superestimada, `e1` e `e2` caem juntos, e o mapa passa a descrever uma web em que a máquina lê a
   página humana e a "capacidade declarada" é cerimônia de conformidade, como o llms.txt.
2. **Se quase todos pagarem o 402 sem hesitar** — D2 é mais forte do que eu escrevi, a `confianca`
   de `e3` e `e4` sobe, e a Seção 7 item 3 estava errada ao tratar o pagamento por requisição como
   a aposta mais frágil.
3. **Se a verificação de assinatura barrar os agentes próprios dos alunos e deixar passar só os de
   grande fornecedor** — `e5.1.1` deixa de ser efeito de 3ª ordem com sinal fraco e passa a ser
   descrição do presente, e o cenário indesejável ganha prazo.

## 11. Fontes

Quinze fontes, todas abertas e lidas nesta rodada. Duas que apareceram na busca e **não** entraram
por terem devolvido HTTP 403 estão registradas na Seção 12.

1. **Ahrefs — "We Analyzed 137K Sites: 97% of llms.txt Files Never Get Read"** ·
   `https://ahrefs.com/blog/llmstxt-study/`
   Sustenta o fracasso medido do llms.txt: 137.210 domínios, 28% com arquivo válido (38.360), 97%
   sem nenhuma requisição em maio de 2026, e a composição dos leitores (21,7% ferramentas de SEO,
   19,5% bots de IA). Confiabilidade alta para a medição, com a ressalva de que a Ahrefs vende
   ferramenta de SEO e portanto tem interesse no resultado — mas o dado vem de log próprio de
   analytics, com metodologia declarada, e converge com [12], que é independente.

2. **Model Context Protocol Blog — "The New MCP Roadmap"** ·
   `https://blog.modelcontextprotocol.io/posts/mcp-roadmap/`
   Sustenta a direção do MCP: cinco eixos do roadmap de agosto de 2026, Server Card Working Group
   com metadados `.well-known`, CIMD e DPoP para identidade, spec 2026-07-28. Fonte primária do
   mantenedor do padrão — autoritativa sobre intenção, e por isso mesmo não isenta sobre adoção.

3. **TechCrunch — "Cloudflare's new policy pushes AI companies to pay for publishers' content"** ·
   `https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/`
   Sustenta a data e o conteúdo da virada de default (anúncio 01/07/2026, vigência 15/09/2026),
   o Pay Per Use, os parceiros Ceramic.ai e You.com, e o dado de que mais de 50% do rastreio é
   rebusca de página inalterada. Veículo com apuração, reportando anúncio de empresa: confiável para
   o fato do anúncio, dependente da Cloudflare para os números.

4. **x402 — site oficial do protocolo** · `https://x402.org/`
   Sustenta o mecanismo (402 → pagar → repetir), a manutenção por fundação, os números do painel
   dos últimos 30 dias (75,41 milhões de transações, US$ 24,24 milhões, 94.060 compradores, 22 mil
   vendedores) e as integrações declaradas. **Sustenta também uma ausência**: nenhuma menção a MCP.
   Fonte interessada, por ser do próprio protocolo; os números de volume não são auditáveis a partir
   dela.

5. **Not Human Search** · `https://nothumansearch.ai/`
   Sustenta a existência e a escala real de um ranking por prontidão agêntica: 5.339 sites, média 38,
   sete sinais com llms.txt valendo 25 e ai-plugin.json valendo 20. Fonte primária de um projeto
   pequeno; útil como sinal, e a discrepância com o "8.000+" da própria descrição do repositório é
   razão para tratar qualquer número dela com cautela.

6. **IETF — draft-meunier-webbotauth-httpsig-protocol** ·
   `https://datatracker.ietf.org/doc/draft-meunier-webbotauth-httpsig-protocol/`
   Sustenta o Web Bot Auth: autores (Thibault Meunier e Sandor Major), data (agosto de 2026), o
   mecanismo (assinatura de mensagem HTTP, cabeçalho `Signature-Agent`, diretório JWKS em
   `.well-known`) e o status — rascunho individual expirado, já sucedido por versão de grupo de
   trabalho. Fonte primária e datada; o status do documento é ele próprio um dado (é padrão de facto
   antes de ser de direito).

7. **Spronta — "The State of WebMCP: July 2026"** ·
   `https://www.spronta.com/blog/state-of-webmcp-july-2026/`
   Sustenta o estado real do WebMCP: Draft Community Group Report fora do standards track, origin
   trial no Chrome 149–156, Firefox e Safari sem compromisso, mudança de `navigator.modelContext`
   para `document.modelContext` em 21/07/2026, adoção "aproximadamente zero", bootstrap de dois
   lados. Blog técnico, não institucional — confiável nos fatos verificáveis (versões, datas, nome
   de API) e opinativo na avaliação de adoção; é a fonte mais cética do conjunto, e por isso
   cruzada com [14], que é entusiasta.

8. **Cloudflare Blog — "A deeper look at AI crawlers: breaking down traffic by purpose and
   industry"** · `https://blog.cloudflare.com/ai-crawler-traffic-by-purpose-and-industry/`
   Sustenta as razões crawl-por-visita por operador e por indústria (50.000:1, 887:1, 118:1 na visão
   geral; 2.500:1, 152:1, 32,7:1 em notícias) e a composição por propósito, com treino perto de 80%.
   Fonte primária de quem tem o melhor ponto de medição da web — e parte interessada, já que a mesma
   empresa vende a solução para o problema que mede. Janela de julho-agosto de 2025, o que importa.

9. **ES Hoje — "Comércio agêntico avança no Brasil: 42% já usam IA para comprar"** ·
   `https://eshoje.com.br/economia/economia-e-mercado/2026/09/comercio-agentico-avanca-no-brasil-42-ja-usam-ia-para-comprar-e-empresas-precisam-se-adaptar/`
   Sustenta o recorte brasileiro: 42% (NielsenIQ, maio de 2026), 57% e a projeção de 11% das compras
   em cinco anos (The Agentic Commerce Report, Worldpay), 39% dispostos a testar em 12 meses.
   **A mais fraca do conjunto**: é agregação jornalística de estudos de fornecedor, sem tamanho de
   amostra, sem margem de erro e sem quem encomendou. Usada para direção, nunca para magnitude, e
   assinalada como tal no texto.

10. **Wen, Zhang, Yuan, Chen, Zhang e Guo — "Position: Generative Engine Optimization Creates
    Underexamined Risks…"** · `https://arxiv.org/pdf/2606.12439`
    Sustenta a leitura crítica da camada de otimização para agentes: riscos de concentração,
    disclosure e ponto cego acadêmico. Preprint de junho de 2026, sem revisão por pares declarada;
    é paper de posição, não de evidência empírica — vale pela formulação do problema.

11. **Wikipedia — "Model Context Protocol"** · `https://en.wikipedia.org/wiki/Model_Context_Protocol`
    Sustenta a cronologia e a escala do MCP: lançamento em 25/11/2024, adoção pela OpenAI em março
    de 2025 e pelo Google DeepMind em abril de 2025, mais de 10 mil servidores e 97 milhões de
    downloads de SDK por mês em meados de 2026, a virada stateless em 28/07/2026, e as
    vulnerabilidades de injeção de prompt reportadas em abril de 2025. Terciária: boa para datas e
    encadeamento, e por isso cruzada com [2] no que é técnico.

12. **Search Engine Journal — "LLMs.txt Shows No Clear Effect On AI Citations, Based On 300k
    Domains"** · `https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/`
    Sustenta o resultado independente sobre llms.txt: estudo da SE Ranking com ~300 mil domínios,
    modelo XGBoost, remover a variável melhorou a acurácia, 10,13% de adoção. Veículo especializado
    reportando estudo de terceiro; a metodologia está declarada e o resultado converge com [1], que
    usou dado e método diferentes — é essa convergência que dá peso, não a fonte isolada.

13. **WorkOS — "AI agents now make up the majority of web traffic"** ·
    `https://workos.com/blog/ai-agent-web-traffic-what-developers-need-to-change`
    Sustenta os 57,5% de tráfego automatizado contra 42,5% humano (Cloudflare Radar, junho de 2026)
    e as razões crawl-por-visita do primeiro trimestre de 2026 (ClaudeBot 23.951:1, Perplexity
    111:1, busca do Google 4,9:1). Blog corporativo de empresa de autenticação — parte interessada
    em que identidade de agente importe; os números são atribuídos a terceiros (Cloudflare Radar,
    SEOmator, HUMAN Security) e citados aqui com essa cadeia declarada.

14. **"The State of Agentic AI Standards in 2026: MCP, A2A, WebMCP, OSI, and the Protocol Stack
    Taking Shape"** · `https://amdatalakehouse.substack.com/p/the-state-of-agentic-ai-standards`
    Sustenta o mapa da pilha em camadas (MCP, A2A, WebMCP, OSI, pagamentos, humano, identidade), as
    datas (OSI em janeiro de 2026, WebMCP no Chrome em fevereiro de 2026, A2A 1.0 em abril de 2026
    com mais de 150 organizações) e o reconhecimento de que a camada de pagamento tem "bandeiras
    demais fincadas". Newsletter de opinião técnica, entusiasta da pilha — usada pelo panorama, com o
    contraponto cético vindo de [7].

15. **PPC Land — "Court blocks Perplexity's Comet browser from Amazon's accounts"** ·
    `https://ppc.land/court-blocks-perplexitys-comet-browser-from-amazons-accounts/`
    Sustenta a decisão judicial com precisão utilizável: 9 de março de 2026, Distrito Norte da
    Califórnia, caso 25-cv-09514-MMC, juíza Maxine M. Chesney, liminar mais ordem de destruição de
    dados, o raciocínio "consentimento do usuário não é autorização da plataforma", o precedente
    *Facebook v. Power Ventures*, a alegação da Amazon sobre o Comet usar a string de identificação
    do Chrome, e os argumentos da Perplexity. Veículo especializado em publicidade digital,
    reportando peça processual identificada — confiável porque o número do caso permite verificação
    independente, que é mais do que as duas fontes de maior marca (CNBC, GeekWire) ofereceram, já
    que ambas recusaram a leitura.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 1 — entrevista, respostas recebidas

Rodada não-interativa: não havia interlocutor para responder. Os parâmetros vieram fixados no
despacho da rodada e são reproduzidos aqui sem edição, porque a skill exige que os itens 1, 3, 4 e
5 tenham resposta explícita e não assumida.

- **Horizonte (obrigatório):** 2031.
- **Público:** quem projeta mídia e interação.
- **Recorte geográfico (obrigatório):** global, com uma nota sobre o Brasil.
- **Descartado de início (obrigatório):** o que já é comum em produto de massa — a régua da
  disciplina. Nenhuma outra exclusão, **confirmado explicitamente** no despacho ("nenhuma outra
  exclusão"), e não assumido por mim.
- **Viés (obrigatório):** neutro.
- **Zona de interesse:** Agentes.
- **Parâmetros extras do despacho:** disrupção suspeita — nenhuma, descobrir; ideias óbvias a
  excluir — as que servem para qualquer tema; o que faria mudar de ideia — evidência de que a adoção
  passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe sem romper
  nada; profundidade — três ordens; modo — a partir de uma inovação/tema, não de um setor.

**Assunções declaradas por falta de interlocutor:** (a) "global com nota sobre o Brasil" foi
implementado como uma subseção dedicada na Seção 3 e um sinal fraco na Seção 6, não como recorte
paralelo em toda a roda; (b) `publico_ok: false`, como manda a skill na ausência de autorização
explícita; (c) o critério "o que faria mudar de ideia" foi aplicado como filtro na Etapa 3 — foi
ele que reprovou llms.txt e OpenAPI/REST.

### 12.2 Etapa 2 — buscas executadas e o que cada uma rendeu

**Buscas (WebSearch), na ordem:**

1. `Model Context Protocol adoption 2026 agentic web specification` — rendeu [2], [11], [14].
2. `Cloudflare pay-per-crawl AI crawler blocking default 2026` — rendeu [3]; muitos resultados
   secundários de blogs de proxy e de SEO, descartados por serem paráfrase do anúncio.
3. `llms.txt adoption criticism 2026` — rendeu [1] e [12]. A divergência de números entre trackers
   (51,8% num painel de 219 hosts; 8,7% no Tranco top 1.000; 10,13% na SE Ranking; 28% na Ahrefs)
   foi decisiva: mostra que "adoção de llms.txt" depende inteiramente do denominador, e por isso
   usei só as duas medições com metodologia declarada e amostra grande.
4. `x402 protocol HTTP 402 agent payments per request 2026` — rendeu [4]. Aqui apareceu a divergência
   165 milhões acumulados × 75,41 milhões em 30 dias, registrada na Seção 8.
5. `WebMCP W3C proposal browser tool calling website 2026` — rendeu [7].
6. `Web Bot Auth IETF draft signed agents Cloudflare signature 2026` — rendeu [6].
7. `publisher referral traffic decline AI search 2026 data crawl-to-referral ratio` — rendeu os
   números de queda de tráfego (60% para publishers pequenos, 47% médios, 22% grandes; Pew 8%×15%;
   zero-click de 56% para 69%) que sustentam o item 1 da Seção 7. **Nenhuma dessas fontes foi
   aberta**, e por isso os números aparecem no texto como argumento contra o próprio mapa, não como
   evidência a favor dele — decisão consciente: usar dado não verificado para enfraquecer a própria
   tese é assimetricamente mais seguro do que usá-lo para fortalecê-la.
8. `"Not Human Search" agent-ready score llms.txt OpenAPI MCP index` — rendeu [5].
9. `Cloudflare Radar bot traffic share AI crawlers percentage 2026 human vs bot` — rendeu [13] e [8].
10. `Brasil agentes de IA comércio conversacional Pix agente 2026 navegação agêntica adoção` —
    rendeu [9], mais dados não usados: a Iniciador lançando MCP de pagamento agêntico via Pix com
    aprovação biométrica; a primeira transação agêntica do país em 11/03/2026 entre Banco do Brasil
    e Visa; o programa Visa Agentic Ready em 29/04/2026 com BB, Bradesco, Dock, Santander e XP; e
    76% de brasileiros pretendendo usar agente para comprar contra 44% nos EUA. **Nada disso entrou
    como evidência** porque nenhuma dessas páginas foi aberta; o que entrou está em [9], que abri.
11. `agentic commerce protocol OpenAI Stripe ACP AP2 Google agent payments 2026` — rendeu o mapa dos
    quatro protocolos concorrentes, confirmado depois em [14].
12. `"answer engine optimization" OR "generative engine optimization" 2026 evidence effectiveness
    study` — rendeu [10]. Apareceu também a alegação de ganho de "até 40% de visibilidade" do
    GEO-bench (Princeton, Georgia Tech, AI2, IIT Delhi); **não usada**, porque só vi a alegação em
    material de agência de marketing citando o paper, e não abri o paper.
13. `Reddit Amazon blocking AI agents lawsuit Perplexity Comet 2026 sites blocking agentic browsing`
    — rendeu [15], mais o dado não usado do processo da Reddit contra a Perplexity (22/10/2025,
    Distrito Sul de Nova York) e a razão crawl-por-visita da Perplexity subindo de 54 para 195 entre
    janeiro e julho de 2025.

**Buscas que falharam ou não renderam:**

- `https://www.cnbc.com/2026/03/10/amazon-wins-court-order-to-block-perplexitys-ai-shopping-agent.html`
  — **HTTP 403**. Era a fonte de maior marca sobre a decisão judicial e não pôde ser lida.
- `https://www.geekwire.com/2026/judge-blocks-perplexitys-ai-bot-from-shopping-on-amazon-in-early-test-of-agentic-commerce/`
  — **HTTP 403**. Segunda tentativa para o mesmo fato, também recusada.
- Consequência: a decisão judicial entrou apoiada em [15], veículo menor, escolhido por trazer
  número de caso e nome de juíza — dados verificáveis de forma independente, que as duas fontes
  grandes teriam confirmado se tivessem respondido. Registrado porque "só cite o que abriu" tem um
  efeito colateral pouco comentado: empurra o documento para fontes menores que deixam ler.

### 12.3 Etapa 2 — classificação do levantamento

**Existe e funciona em produção:** MCP (10 mil+ servidores, 97 M downloads/mês); assinatura de
agente por Web Bot Auth em Anthropic, OpenAI, Perplexity, Common Crawl e Google; bloqueio e
tarifação pela Cloudflare; x402 com volume real, ainda que pequeno; comércio agêntico em ACP/AP2 com
apoio de bandeiras; detecção e bloqueio como produto.

**Existe como protótipo, papel ou demo, sem produção:** WebMCP (origin trial, adoção ~zero); Server
Cards do MCP (grupo de trabalho); registros de capacidade e ranking de prontidão agêntica (Not Human
Search, 5.339 sites); pagamento por requisição aplicado a **conteúdo editorial** (o Pay Per Use tem
dois parceiros anunciados).

**Existe e comprovadamente não funciona:** llms.txt (97% sem leitor; efeito nulo sobre citação).

**Quem constrói:** Anthropic, Google, Microsoft, OpenAI, Stripe, Coinbase/x402 Foundation,
Cloudflare, Perplexity, Amazon, Reddit, W3C Web Machine Learning CG, IETF, Linux Foundation,
Agentic AI Foundation.

### 12.4 Etapa 3 — o teste de disrupção aplicado, incluindo os reprovados

**Aprovados** (as três respostas de cada um estão na Seção 4, em prosa):

- **D1 — capacidade declarada.** Passa em 1 (cliente escrito em tempo de execução sem acordo
  prévio), em 2 (invalida SEO, funil, formulário como superfície oficial, display adjacente) e em 3
  (MCP de 0 a 10 mil servidores em 19 meses; W3C em set/2025; Chrome em fev/2026; confiabilidade de
  tool-calling). → **disrupção-raiz**.
- **D2 — preço por requisição.** Passa em 1 (liquidação sub-centavo sem conta, dentro do ciclo
  HTTP), em 2 (invalida o gratuito-com-anúncio para leitor de máquina e o paywall como unidade) e em
  3 (trilho de stablecoin, fundação neutra em abr/2026, virada de default em 15/09/2026). →
  **disrupção-raiz**, com a ressalva de escala registrada na Seção 7.
- **D3 — identidade como condição de entrada.** Passa em 1 (servir coisas diferentes a agentes
  diferentes com base em quem os emitiu), em 2 (invalida raspagem indiferenciada, robots.txt como
  boa-fé, e a premissa de que permissão do usuário basta) e em 3 (RFC 9421 pronto, três grandes em
  produção simultânea, liminar de 09/03/2026). → **disrupção-raiz**.

**Reprovados:**

- **llms.txt — REPROVADO na pergunta 1.** O que torna possível que antes não era? Nada: é uma lista
  curada de links, e um sitemap já fazia isso. A tentação de aprová-lo vinha de ser o termo mais
  citado do tema. A evidência empírica [1][12] é o segundo prego. Entrou na Seção 3 como estado
  atual, e na Seção 6 como o sinal fraco mais informativo do mapa — um fracasso medido vale mais que
  cinco sucessos anunciados.
- **APIs REST, OpenAPI e SDKs — REPROVADOS na pergunta 1.** Maduros desde meados dos anos 2000.
  Melhoram (mais fáceis, melhor documentados), não rompem. Aparecem na Seção 3 e no experimento como
  **contraste**: é contra eles que se mede se a capacidade declarada faz diferença.
- **Raspagem (scraping) — REPROVADA na pergunta 1.** Madura, e o que muda nela não é ela: é a porta
  se fechando (D3).
- **AEO/GEO como prática de otimização — REPROVADA na pergunta 1, com ressalva.** É SEO sob novo
  nome enquanto o objeto for texto de página. O que seria novo — otimizar a **declaração de
  capacidade** — ainda não tem prática constituída, e aparece como efeito de 3ª ordem em `e2.1.2`, e
  não como disrupção. O paper [10] é usado pelo problema de governança, não como evidência de
  ruptura.
- **A2A (agente-a-agente) — FORA DE ESCOPO, não reprovado.** Passaria no teste, mas o objeto aqui é
  a web como plataforma de publicação, não a comunicação entre agentes. Mantido fora por decisão de
  recorte, e registrado para que outra rodada possa pegá-lo.

### 12.5 Etapa 4 — efeitos cortados, e por quê

Cortados por não terem caminho nomeável de volta à disrupção-raiz, ou por exigirem empilhar duas
suposições independentes não testadas (a regra de parada da skill):

- *"O navegador desaparece como categoria de produto até 2031."* — Exige empilhar: (a) agentes
  substituem navegação e (b) ninguém quer mais ver a página. Duas apostas, nenhuma testada. Cortado.
  Sobrou em forma bem mais fraca em `e6.2.1`.
- *"A web se fragmenta em jardins murados por fabricante de modelo, com conteúdo exclusivo por
  assistente."* — Plausível, mas é consequência de estratégia comercial, não da disrupção: eu não
  consigo narrar em uma frase por que decorre de D3 e não de decisão de negócio independente.
  Cortado como efeito; o que dele sobrevive está no cenário indesejável.
- *"O HTML perde relevância e é substituído por formatos estruturados."* — Cortado por ser previsão
  de substituição de formato, o erro clássico do gênero (prevê-se a morte do HTML desde 1998).
  Reformulado como `e4.2`, que é mais defensável: não o HTML morrendo, mas a prosa encolhendo onde o
  leitor previsto é máquina.
- *"Governos obrigam sites públicos a serem legíveis por agente."* — Cortado: exige supor iniciativa
  regulatória sem nenhum sinal atual. Virou parte do cenário desejável, que é o lugar certo para
  ação deliberada que ainda não tem sinal.
- *"O custo de infraestrutura de rebusca leva à padronização de cache agêntico."* — Cortado do bloco
  por ser técnico demais para ser efeito de mídia e interação; sobreviveu na Seção 6 como sinal
  fraco, ligado à virada stateless do MCP.
- *"Agentes passam a negociar preço entre si em leilão por requisição."* — Cortado: é dois passos
  além de D2, e o segundo passo (negociação autônoma) é tema do vizinho 5. Seria especulação de
  especulação.

**Efeitos que mudaram de nível durante a montagem:** "um ranking de prontidão agêntica decide o que
o agente tenta usar" começou como efeito de 1ª ordem e foi rebaixado para 2ª (`e2.1`), porque ele
não decorre da disrupção diretamente — decorre de a descoberta mudar de mecanismo (`e2`). É o tipo
de correção que a regra de rastreabilidade da Etapa 4 existe para forçar.

### 12.6 Etapa 5 — anotações da contestação que não couberam na Seção 7

- A Seção 7 aponta `e1` como o efeito com velocidade de adoção implausível. A anotação que não coube
  ali: eu marquei `confianca: alta` nele e **não corrigi para média**, apesar de argumentar contra na
  própria Seção 7. Deixei a contradição de pé de propósito, e ela é legível: a roda diz uma coisa e a
  contestação diz outra sobre o mesmo efeito. Corrigir silenciosamente teria apagado o rastro de que
  o mapa foi montado antes de ser atacado — que é o ponto do método.
- Um viés que considerei e descartei nomear na Seção 7 por ser genérico demais: o viés de
  disponibilidade de fonte. Quase toda a medição deste mapa vem da Cloudflare ou de quem a cita, por
  ser quem tem o ponto de observação. Um mapa sobre a web feito quase inteiramente com os números de
  uma empresa que vende controle de acesso à web é um mapa com um lado. Não está na Seção 7 porque
  não consegui apontar **onde** ele inflou um efeito específico — mas o risco está concentrado em
  `e5` e `e6`.

### 12.7 Checagem final executada

- 12 seções com títulos exatos: conferido por contagem de linhas iniciadas por `## `.
- Frontmatter: todos os campos preenchidos, nenhum omitido; `publico` com valor real,
  `publico_ok: false`.
- Bloco `roda:`: 3 disrupções, 3 níveis de profundidade, ids hierárquicos únicos, todo nó com
  `sinal`, `prazo` e `confianca`.
- Contagens declaradas no frontmatter conferidas contra o bloco: 6 efeitos de 1ª ordem, 12 de 2ª,
  16 de 3ª.
- Seção 4: nenhum item reprovado no teste da Etapa 3 (llms.txt, REST/OpenAPI, scraping, AEO/GEO).
- Seção 7: quatro itens, cada um nomeando um efeito ou disrupção específico por id.
- Seção 11: 15 fontes, todas abertas; as duas que devolveram 403 estão fora da lista e registradas
  em 12.2.
