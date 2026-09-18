---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: hfm
zona_de_interesse: Agentes
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 11
efeitos_ordem_3: 17
tecnologias_citadas: [Agentic Commerce Protocol, Instant Checkout, x402, HTTP 402, Agent Payments Protocol (AP2), Universal Commerce Protocol (UCP), Visa Intelligent Commerce, Trusted Agent Protocol, Mastercard Agent Pay, Agentic Tokens, Cloudflare Wallets, cloudflare.pay, pay per crawl, Web Bot Auth, Skyfire, KYA (Know Your Agent), KYAPay, Model Context Protocol, Agent2Agent (A2A), Duffel, Sabre, Iniciador, Pix, Open Finance, verifiable credentials (W3C), stablecoin USDC]
fontes: 18
confianca: media
experimento: "Balcão de duas caras: uma loja de brinquedo servida por HTTP 402, com vitrine humana e feed tarifado para agentes, onde a turma dá orçamento e mandato a um agente e audita o que ele comprou"
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

O comércio agêntico deixou de ser promessa em 2025–2026: existe protocolo publicado, bandeira
de cartão com programa comercial, transação real em produção e um trilho paralelo em cripto que
ressuscitou o código HTTP 402. O que muda não é "a IA compra": é que **a autorização de pagamento
se descola do momento da compra e vira um documento assinado, com escopo, prazo e revogação** —
o mandato. Dessa raiz saem duas outras: **a requisição HTTP passa a ter preço**, cobrada de uma
máquina e não de um leitor; e **o agente vira uma entidade econômica identificável**, com carteira
própria, limite de gasto e histórico consultável. Para quem projeta mídia e interação, a consequência
imediata é brutal e pouco discutida: a tela de checkout deixa de ser onde se decide a compra e vira
onde se configura a delegação; a vitrine perde a função; e a interface de comércio migra de
*navegação* para *auditoria do que já aconteceu*. A evidência de ruptura é forte no substrato
(protocolos, identidade, trilhos) e fraca na competência dos agentes: em agosto de 2026, só 4 de 15
agentes de loja testados conseguiam concluir uma devolução, e injeção indireta de prompt em página
de produto teve taxa de sucesso entre 41% e 69%. O mapa aposta que a infraestrutura chega antes da
confiabilidade — e que a década de 2028–2031 será gasta em cima da pergunta que nenhum protocolo
respondeu ainda: **de quem é o prejuízo quando o agente erra com dinheiro alheio.**

## 2. O tema

**Agente com carteira** é um agente de software que não apenas pesquisa, compara e recomenda, mas
**executa o pagamento** e responde por ele diante de um vendedor. A diferença entre ler e pagar não
é de grau. Um agente que lê produz uma sugestão que a pessoa aceita ou não; a decisão continua
humana e o clique final é a prova jurídica disso. Um agente que paga consome a autorização
antecipadamente: no momento em que o dinheiro sai, não há humano na sala.

O tema encosta em mídia e interação por três lados, e nenhum deles é o lado óbvio do "e-commerce
com chatbot".

**Primeiro, a interface de compra perde função.** Todo o repertório do desenho de comércio digital
— vitrine, carrossel, prova social, escassez, carrinho abandonado, upsell no checkout — foi
construído para persuadir um sistema perceptivo humano num intervalo de segundos. Quando o
comprador é um programa que lê um feed JSON, esse repertório não tem a quem se dirigir. A pergunta
de projeto deixa de ser "como faço a pessoa clicar" e passa a ser "como exponho meu catálogo de
forma que uma máquina o entenda, e o que sobra de mim para a pessoa ver".

**Segundo, o consentimento vira objeto de design.** Se a compra é autorizada antes, por um mandato
com escopo, então a tela mais importante do comércio passa a ser aquela em que a pessoa descreve o
que autoriza: até quanto, de quem, por quanto tempo, com que condição de cancelamento. Isso é um
problema de interação novo — não existe convenção estabelecida para representar visualmente um
limite de autonomia — e é o problema que a área vai herdar.

**Terceiro, o outro lado da tela passa a ser mídia paga por máquina.** Se o agente paga por
requisição, o texto, a imagem e a API deixam de ser gratuitos-com-publicidade e ganham preço por
chamada. Isso recoloca a economia da publicação — o assunto de mídia por excelência — num trilho
que não existia.

**Por que um mapa de futuro e não um levantamento de estado da arte.** O estado da arte deste tema
se escreve em uma página: existem quatro ou cinco protocolos concorrentes, duas bandeiras com
programa, um punhado de pilotos. O interessante não é a lista. O interessante é que essas peças,
combinadas, deslocam três coisas que estavam paradas há trinta anos — o lugar do consentimento, o
preço da requisição e a identidade de quem transaciona — e que os efeitos de segunda e terceira
ordem desse deslocamento (fidelidade, disputa, escore, defesa da concorrência, formação em UX) não
estão sendo discutidos por quem está construindo os trilhos. Um levantamento descreveria o
substrato. Uma roda dos futuros é o que expõe a conta que vem depois.

**Recorte declarado.** Horizonte 2031; público de quem projeta mídia e interação; alcance global
com nota sobre o Brasil. Exclusão adotada por régua da disciplina: o que já é comum em produto de
massa — e-commerce, pagamento online, comparador de preço, recomendação — não entra como
disrupção, entra como estado atual. Viés declarado: neutro; nenhuma disrupção foi suspeitada de
antemão.

## 3. Onde isso está hoje

### 3.1 O substrato de protocolo já existe, e é concorrido

Há pelo menos quatro famílias de especificação vivas, publicadas por consórcios diferentes, e elas
não são a mesma coisa.

**ACP — Agentic Commerce Protocol.** Padrão aberto codesenvolvido por Stripe e OpenAI, licença
Apache 2.0, especificação lançada em 29 de setembro de 2025, versão estável `2026-04-17`, status
beta, mantido no GitHub com os dois como mantenedores fundadores e "administração por fundação
neutra conforme o ecossistema amadurecer" declarada como intenção [F2, F3]. Componentes: Checkout
API, Delegate Payment, Feed, Cart & Orders, Authentication e integração com MCP. O desenho central
é o **token de pagamento delegado**: o agente coleta a credencial com o comprador e a repassa ao
negócio como token seguro, "controlado programaticamente, permissionado e registrado em log"; o
negócio **continua sendo o merchant of record** e pode aceitar ou recusar a transação usando sinais
de pagamento e de fraude [F2]. Aplicação de produção: Instant Checkout no ChatGPT, começando por
vendedores do Etsy nos EUA e expandindo para lojistas Shopify — Glossier, Vuori, Spanx, SKIMS
citados nominalmente [F2].

**AP2 — Agent Payments Protocol.** Padrão do Google, que se descreve explicitamente **não como
trilho de liquidação, mas como camada de confiança e autorização** [F5]. Usa Verifiable Digital
Credentials organizadas em mandatos: um **Checkout Mandate** (compartilhado com o lojista, em dois
estágios — aberto, com as restrições do usuário antes do carrinho fechar; fechado, autorizando um
checkout específico) e um **Payment Mandate** (compartilhado com provedores de credencial, redes e
processadores, também em dois estágios). Suporta os dois casos que interessam a este mapa:
**human-present** e **human-not-present** — este último com exemplos de cartão *e* de x402 [F5].
A justificativa declarada é a pergunta certa: "como verificar que um usuário deu a um agente
autoridade específica para uma compra em particular?", resolvida por trilha de auditoria
criptográfica para disputa. Integra-se a A2A, UCP, MCP, ADK e há colaboração declarada com a FIDO
Alliance [F5].

**UCP — Universal Commerce Protocol.** Anunciado pelo Google em 11 de janeiro de 2026, open source,
desenvolvido com Shopify, Etsy, Wayfair, Target e Walmart, com mais de 20 endossantes incluindo
Adyen, American Express, Mastercard, Stripe e Visa [F14, F13]. Tecnicamente: o negócio publica um
manifesto JSON em `/.well-known/ucp` declarando capacidades; o transporte pode ser REST, A2A ou
MCP; a arquitetura de pagamento **separa o instrumento (o que o consumidor usa para pagar) do
handler (o processador)**; a confiança se apoia em pagamento tokenizado e credenciais verificáveis,
"toda autorização respaldada por prova criptográfica de consentimento do usuário"; e o lojista
"permanece o merchant of record" [F14]. Integra-se ao AP2. Atualização de março de 2026 acrescentou
Cart, Catalog e Identity Linking via OAuth 2.0 [F13].

**x402.** Padrão que ressuscita o código HTTP 402 Payment Required para pagamento em stablecoin
direto sobre HTTP. O fluxo é o mínimo possível: requisição sem pagamento recebe 402 com a
informação de preço; o cliente paga e repete [F1]. Governança sob a Linux Foundation, com o x402
Foundation em operação [F1]. Os números publicados na página oficial, para uma janela de 30 dias
consultada em 18/09/2026: **75,41 milhões de transações, US$ 24,24 milhões de volume, 94.060
compradores e 22.000 vendedores**, com Alchemy, AWS, Cloudflare, Stripe e Vercel listados como
usuários [F1]. Casos de uso declarados: monetização de API, comércio agêntico e conteúdo pago.

### 3.2 As bandeiras entraram, e entraram por identidade

**Visa.** Em 18 de dezembro de 2025, a Visa anunciou ter completado "centenas de transações
seguras iniciadas por agente", com mais de 100 parceiros globais, 30+ construindo no sandbox do
Visa Intelligent Commerce e 20+ agentes integrados [F4]. Pilotos nomeados nos EUA: Skyfire (agente
de produto da Consumer Reports comprando fones Bose), Nekuda (compras em app de moda na Fabrique e
Honeylove), PayOS (checkout dirigido por agente da BeyondStyle no Jomashop) e Ramp (automação de
pagamento B2B com captura de cashback). O **Trusted Agent Protocol**, introduzido em outubro de
2025, é descrito como "arcabouço aberto construído sobre infraestrutura web existente que permite
checkout seguro por agente ajudando lojistas a distinguir bots maliciosos de agentes de IA
legítimos agindo em nome de consumidores" [F4]. Expansão prevista para Ásia-Pacífico e Europa no
início de 2026, com América Latina e Oriente Médio em preparação.

**O que o anúncio da Visa não diz é o dado mais importante desta seção: não há uma frase sobre
responsabilidade, resolução de disputa ou chargeback para transação iniciada por agente** [F4].
O mesmo silêncio aparece no post do Stripe, que reconhece que "confiança é essencial" e que
lojistas precisam distinguir bons de maus bots, mas não detalha nenhum arcabouço de
responsabilidade ou procedimento de disputa [F2].

**Mastercard** aparece nas fontes abertas como endossante do UCP [F14] e, no material brasileiro,
com o Agent Pay — agentes digitais autorizados executando pagamento com credencial tokenizada — e
uma variante "Agent Pay for Machines" para transação automatizada [F18].

### 3.3 A identidade do agente virou produto

Duas peças, uma de infraestrutura de rede e uma de startup, mostram que a camada de identidade
saiu do papel.

**Cloudflare.** Em 4 de agosto de 2026 anunciou **Cloudflare Wallets** e **cloudflare.pay** [F8].
Wallets tem dois níveis: Account Wallets guardam stablecoin de forma central, e **Virtual Wallets
são atribuídas a agentes individuais, com controle de gasto embutido — teto, lista de lojistas
permitidos, limite por transação**. cloudflare.pay é um handle de identidade opcional que diz ao
lojista por qual conta o agente age. O problema declarado tem duas metades: negócios não conseguem
saber se um agente representa um cliente legítimo ou um ator malicioso, e agentes não têm mecanismo
seguro para comprar sozinhos. A citação do CEO nomeia o que está em jogo — "confiança,
responsabilização e comércio real". Importante para calibrar entusiasmo: **o anúncio não traz
nenhum número de volume de tráfego de agentes ou de mercado** [F8].

Antes disso, o mesmo mecanismo já havia sido aplicado a conteúdo: o **pay per crawl** da Cloudflare,
anunciado em 1º de julho de 2025, deixa o publicador escolher, por crawler, entre liberar de graça,
cobrar taxa fixa por requisição ou negar; o crawler sem pagamento recebe **HTTP 402 com o preço** e
decide se aceita [F16]. A Cloudflare é a merchant of record da operação. O texto projeta
explicitamente o mundo deste mapa: "imagine pedir ao seu programa de pesquisa profunda favorito
para sintetizar a pesquisa mais recente sobre câncer... e então dar a esse agente um orçamento para
gastar na aquisição do conteúdo melhor e mais relevante" [F16].

**Skyfire.** Plataforma de pagamento para agentes cujo produto central é **KYA — Know Your Agent**:
identidade verificada para o agente, que permite criação de conta e autenticação; pagamento
agente-a-agente (o agente compra LLM, dataset, serviço de API e acesso a outros agentes); limite de
gasto por agente; e financiamento por débito, crédito, ACH, transferência internacional ou USDC
[F15]. As três alegações de responsabilização são identidade documentada, **histórico verificável
de atividade ao longo do tempo** e acesso condicionado à confiança — vendedores podem restringir
transações a agentes verificados [F15]. Note-se o que isso é: um arcabouço de responsabilização
construído por verificação de identidade e histórico de transação, **não por mecanismo legal ou
regulatório**.

### 3.4 Já há volume, e ele cresce rápido — mas a base é baixa

A Salesforce, em relatório que combina pesquisa com 3.450 profissionais de comércio em 20 países
(10/04 a 04/06/2026), dados de comportamento de 1,5 bilhão de compradores em 37 países (Q1 2024 a
Q1 2026) e pesquisa com 4.689 consumidores em oito países (12 a 18/05/2026), reporta: **busca
agêntica como primeiro passo de compra cresceu 200% ano a ano**; tráfego vindo de chats de IA
cresceu entre 150% e 428% ano a ano em todos os trimestres medidos, contra crescimento de um dígito
a dois dígitos baixos do tráfego total; descoberta em propriedades da própria marca caiu 7% e busca
tradicional caiu 15% entre agosto de 2025 e maio de 2026, enquanto canais novos cresceram 38%
[F9]. E o dado que impede a leitura triunfalista: **apenas 28% das organizações de comércio usam IA
agêntica hoje**, com 44% planejando adoção em seis meses [F9].

A Wikipédia, como panorama neutro, registra estimativa da McKinsey de US$ 1 trilhão em receita
orquestrada por comércio agêntico no B2C americano até 2030 (oportunidade global de US$ 3 a 5
trilhões), e o dado da Adobe Analytics de tráfego referido por IA a varejistas americanos subindo
393% ano a ano no Q1 2026; registra também que firmas chinesas (Alibaba, Tencent, ByteDance) lideram
a implementação, que a adoção americana é mais lenta por restrições de privacidade, e que
**responsabilidade legal, padrões de resolução de disputa e autenticação de agente permanecem em
aberto** [F13].

### 3.5 Viagem é o setor onde o agente já compra de verdade

O tema chegou à distribuição aérea antes de chegar a quase tudo. Em março de 2026 [F11]:
**Sabre + PayPal + MindTrip** (12/02/2026) anunciaram pipeline de reserva agêntica ponta a ponta
para o Q2 de 2026, integrando IA conversacional, 420+ companhias aéreas, 2 milhões de hotéis e
pagamento num único fluxo; **Malaysia Airlines** (24/02/2026) colocou no ar o agente Mavis para
gestão de reserva, status de voo, check-in e consultas de fidelidade; **Skyscanner** (27/02/2026)
lançou app no ChatGPT para busca de voo em linguagem natural no Reino Unido e EUA. A leitura do OAG
é a que importa para este mapa: **distribuição é a categoria de inovação mais consequente**, o
papel das interfaces tradicionais de reserva muda fundamentalmente, e o poder tende a se deslocar
de OTAs e metabusca para provedores de GDS integrados e plataformas nativas de IA [F11].

### 3.6 E, no entanto, os agentes ainda são ruins nisso

Esta é a âncora cética, e ela é forte.

**Competência.** Benchmark da Alhena publicado em 14 de agosto de 2026 rodou a mesma conversa
contra 15 agentes de loja em produção, pedindo devolução, cancelamento e mudança de endereço de
entrega. **Só 4 dos 15 (~27%) conseguiram executar; os 15 conseguiram explicar corretamente como
fazer** [F17]. O modo de falha dominante recebeu nome — *answer-only fallback* — e o ponto
metodológico é preciso: essa falha não aparece em métrica de acurácia, porque a resposta estava
certa; só aparece se você medir conclusão de tarefa como binário.

**Segurança.** O StakeBench (arXiv 2606.13385) construiu 264 casos adversariais executáveis em 12
categorias de produto, a partir de 22 templates de ataque (9 diretos, 13 indiretos), rodados três
vezes por par agente-modelo — NanoBrowser e BrowserUse, cada um com GPT-5 e Gemini-2.5-Flash,
totalizando **3.168 execuções atacadas**. Taxa de sucesso de **injeção indireta de prompt entre
41,67% e 68,59%**, sem que nenhuma arquitetura ou modelo resistisse de forma confiável; injeção
direta entre 76,85% e 92,28% [F12]. O achado mais relevante para interação é o **parasitismo
furtivo**: ataques que têm sucesso enquanto a tarefa do usuário permanece largamente intacta —
"ataques dirigidos ao usuário têm taxa de sucesso comparável mas produzem a menor disrupção de
tarefa, um modo de falha encoberto". Ou seja: **o agente entrega o que você pediu e serve ao
atacante no mesmo movimento, e você não tem sinal.** Limitações declaradas pelos autores: domínio
único (compras online), poucos sistemas testados, apenas três execuções por caso (insuficiente para
intervalo de confiança por template), estudo de manipulação visual exploratório, e o benchmark mede
vulnerabilidade sem avaliar defesas [F12].

**Mercado.** Fish, Gonczarowski e Shorrer mostram, em experimento com agentes de precificação
baseados em LLM, que eles **chegam rápida e autonomamente a preços e lucros supracompetitivos** em
oligopólio, e que variações em frases aparentemente inócuas do prompt influenciam substancialmente
o grau de supracompetitividade; a mecânica identificada é receio de guerra de preços. Os autores
afirmam que o achado "descobre desafios únicos para qualquer regulação futura de agentes de
precificação baseados em LLM" [F10].

### 3.7 O Brasil

Há um caso concreto e um vazio.

O caso: a **Visa completou a primeira transação de pagamento agêntico no Brasil em março de 2026** e
lançou o programa "Visa Agentic Ready" com Banco do Brasil, Bradesco, Dock, Santander e XP [F18]. A
fintech **Iniciador** lançou o "Agente de Pagamentos" e um **MCP Server que permite a modelos como
ChatGPT e Claude iniciarem Pix** [F18]; a Pomelo participou de pilotos da Mastercard. O artigo situa
a maturidade com uma analogia útil: o estágio é comparável ao do Pix em 2019 [F18].

O vazio: **o Banco Central ainda não regulamentou o tema** [F6]. Os desafios listados por quem está
no setor são exatamente os deste mapa — identificação e autenticação do agente, definição de limites
de autonomia, responsabilização em caso de erro ou fraude, e proteção contra injeção de prompt
[F6]. A formulação jurídica de Erik Oioli (VBSO Advogados) é a frase que organiza toda a seção 4
deste documento: **"a IA não é, juridicamente, um sujeito autônomo de direitos"** — logo a
responsabilidade tem de ser distribuída entre usuário, banco, iniciador, fornecedor do agente e
desenvolvedor, variando conforme o cenário seja configuração inadequada, interpretação errada do
comando, ou ataque de terceiro [F6].

Uma análise brasileira complementar propõe cinco níveis de autonomia para agentes sobre Pix —
observação, recomendação, preparação, execução limitada e otimização por objetivo — e afirma que a
infraestrutura existente sustenta os três primeiros, com Pix Automático e agendamento habilitando
parte do quarto [F7]. A salvaguarda que ela defende é a peça central deste mapa, nomeada em
português: **"mandato estruturado" — autorização contendo finalidade, contas permitidas,
beneficiários, limites, validade e condições de revogação** — em oposição a compartilhar credencial
pessoal ou dar consentimento amplo [F7].

### 3.8 O que é maduro, o que é emergente, o que é disruptivo

**Maduro** (fica aqui, não sobe para a seção 4): e-commerce, checkout online, tokenização de cartão,
comparador de preço, recomendação algorítmica, API de reserva de viagem, busca conversacional
como *sugestão*. Tudo isso tem adoção estabilizada e efeito observável. A régua da disciplina
exclui.

**Emergente**: os protocolos ACP, AP2, UCP e x402 (publicados, beta, adoção inicial, forma em
consolidação); Instant Checkout e Universal Cart; pilotos de bandeira; Cloudflare Wallets;
pay per crawl; KYA/Skyfire; pagamento agêntico sobre Pix.

**Disruptivo**: apenas o subconjunto dessas peças em que se pode nomear a relação que rompe. É o
que a seção 4 isola. Emergente não é automaticamente disruptivo: o Universal Cart, por exemplo, é
emergente e **não** disruptivo — é um carrinho melhor, e um carrinho já existia.

## 4. As disrupções-raiz

### D1 — A autorização de pagamento se descola do momento da compra e vira mandato assinado

**O que rompe.** Rompe a equação que sustenta o comércio digital desde os anos 1990: *o
consentimento é um ato humano contemporâneo à transação*. Senha, 3DS, biometria, o clique em
"comprar" — todos são provas de presença no instante. O mandato substitui presença por **escopo**:
um documento assinado antes, que diz o que pode ser comprado, até quanto, de quem, por quanto
tempo, e como se revoga. A prova deixa de ser "havia alguém ali" e passa a ser "havia uma
autorização prévia compatível com isto".

**Sinal observável.** Os três mandatos do AP2 como credenciais verificáveis, com estágio aberto e
fechado, e suporte explícito a fluxo human-not-present [F5]. O token de pagamento delegado do ACP,
"programaticamente controlado, permissionado e logado" [F2]. O Agentic Token da Mastercard e o
signed-intent do Trusted Agent Protocol da Visa, que amarram credencial a agente, escopo de lojista
e política de consentimento [F4, F18]. O "mandato estruturado" formulado no debate brasileiro,
com finalidade, limites, validade e revogação [F7].

**Por que agora e não há cinco anos.** Três coisas faltavam simultaneamente. Primeiro, um
consumidor de linguagem natural capaz de traduzir "me acha uma passagem barata pra Recife em
novembro" em uma sequência de chamadas de API — isso é 2023–2024. Segundo, um formato de credencial
verificável com estágios e revogação que redes de pagamento aceitassem assinar — W3C VC existia,
mas o interesse das bandeiras é de 2025. Terceiro, e decisivo, **um lado vendedor com incentivo
para aceitar**: enquanto o agente era tráfego de bot indistinguível de fraude, o lojista bloqueava;
quando a bandeira oferece distinguir agente legítimo de bot malicioso [F4], o lojista passa a
querer aceitar.

**O que ainda falta acontecer.** Falta a peça que nenhuma das fontes abertas entrega: **regra de
responsabilidade**. O anúncio da Visa não tem uma frase sobre disputa ou chargeback [F4]; o post do
Stripe reconhece que confiança é essencial e não detalha arcabouço de responsabilidade [F2]; a
Wikipédia registra responsabilidade legal e padrão de disputa como em aberto [F13]; no Brasil, o BC
não regulamentou [F6]. Falta também convergência: quatro famílias de protocolo com mantenedores
concorrentes é um estado instável, e a "administração por fundação neutra" do ACP ainda é intenção
declarada, não fato [F3]. E falta o óbvio: **uma linguagem de interface para escopo de autonomia**.
Ninguém sabe ainda desenhar a tela em que uma pessoa comum entende o que está autorizando.

### D2 — A requisição HTTP ganha preço, cobrada de uma máquina e não de um leitor

**O que rompe.** Rompe a premissa econômica da web aberta: *o acesso a um recurso custa zero no
margem e se paga por atenção*. Com HTTP 402 operante, o recurso tem preço por chamada e o pagador é
um programa com orçamento. Isso muda quem é o cliente da publicação — de leitor humano, monetizado
por publicidade ou assinatura, para agente, monetizado por consumo — e muda a unidade de venda de
*sessão* para *requisição*.

**Sinal observável.** O pay per crawl da Cloudflare devolvendo 402 com preço a crawler não pagante,
com a Cloudflare como merchant of record [F16]. O x402 sob Linux Foundation, com AWS, Cloudflare,
Stripe e Vercel listados como usuários e volume de 30 dias em 75,41 milhões de transações [F1]. As
Virtual Wallets da Cloudflare com teto de gasto por agente [F8]. O pagamento agente-a-agente da
Skyfire, em que o agente compra LLM, dataset, acesso a API e acesso a outros agentes [F15]. E o
suporte do AP2 a x402 no fluxo human-not-present [F5] — que é a ponte entre D1 e D2.

**Por que agora e não há cinco anos.** O 402 está no HTTP desde 1997 e nunca funcionou por dois
motivos: não havia meio de pagamento com custo de transação compatível com fração de centavo, e não
havia pagador não-humano em volume. A stablecoin resolveu o primeiro; o agente criou o segundo.
O gatilho conjuntural é mais prosaico: a partir de 2025 os publicadores passaram a ter razão
econômica urgente para cobrar de crawler de IA — e cobrar exige saber quem pede, o que exige
identidade assinada, o que a Web Bot Auth passou a oferecer.

**O que ainda falta acontecer.** Falta o volume sair do nicho: os números do x402 são expressivos
em contagem de transação e modestos em valor — US$ 24,24 milhões em 30 dias [F1] é ruído na escala
do comércio. Falta interoperabilidade com dinheiro fiduciário no caso geral (hoje o trilho é
predominantemente stablecoin). E falta a resposta a uma pergunta distributiva que ninguém formulou:
se a informação passa a custar por chamada, **o orçamento do agente vira um filtro de acesso ao
conhecimento** — e não há nenhuma fonte aberta aqui discutindo isso.

### D3 — O agente vira entidade econômica identificável, com carteira, limite e histórico

**O que rompe.** Rompe a suposição de que o sujeito de uma relação econômica é pessoa ou empresa.
Aparece uma terceira categoria: uma entidade de software com identidade verificada, carteira
própria, política de gasto e **track record consultável** — mas sem personalidade jurídica. Como
formula o advogado brasileiro: "a IA não é, juridicamente, um sujeito autônomo de direitos" [F6].
A ruptura é exatamente essa tensão: o mercado está construindo, na prática, as três coisas que
definem um agente econômico (identidade, capacidade de pagar, reputação), enquanto o direito
continua dizendo que não há sujeito ali.

**Sinal observável.** O KYA da Skyfire, com identidade verificada por revisão de provedor, de
política operacional, de propósito e de segurança, e com "histórico verificável de atividade ao
longo do tempo" [F15]. As Virtual Wallets por agente com teto, lista de lojistas permitidos e
limite por transação [F8]. O handle cloudflare.pay, que diz ao lojista **por qual conta o agente
age** [F8]. O Trusted Agent Protocol como mecanismo para o lojista distinguir agente legítimo de
bot malicioso [F4]. O poder de aceitar ou recusar que o ACP dá ao negócio a partir de sinais de
pagamento e de fraude [F2].

**Por que agora e não há cinco anos.** Porque só agora o lado vendedor precisa. Enquanto o bot não
pagava, bastava bloquear; quem paga precisa ser identificado, e quem é identificado acumula
histórico; quem acumula histórico é classificado. A sequência identidade → pagamento → reputação é
a mesma que produziu o escore de crédito para pessoas, comprimida em cerca de dois anos.

**O que ainda falta acontecer.** Falta a peça reputacional virar consultável entre plataformas — o
histórico da Skyfire é da Skyfire [F15], e um escore só é escore quando é portável. Falta o produto
financeiro correspondente: não encontrei, nas fontes abertas, nenhum seguro comercializado para
erro de agente. E falta a decisão jurídica: enquanto a responsabilidade for "distribuída entre
usuário, banco, iniciador, fornecedor do agente e desenvolvedor" conforme o cenário [F6], não há
como precificar risco, e sem precificar risco não há mercado de reputação de verdade.

### 4.4 O que foi considerado e recusado como disrupção-raiz

- **Instant Checkout / Universal Cart.** Emergente, não disruptivo: é checkout melhor e carrinho
  que atravessa superfícies. Não consigo nomear a relação que rompe. Fica na seção 3.
- **Busca conversacional como origem da jornada de compra.** O dado de crescimento é forte [F9],
  mas isso é deslocamento de canal de descoberta — continua havendo humano decidindo e clicando.
  É o tema 4 (a web reprojetada para agentes), não este.
- **Agentes negociando em mercado financeiro.** Existe e é chamativo, mas as evidências que
  encontrei sobre resultado real (Alpha Arena/Nof1) vieram só de agregadores que não consegui
  abrir; e mercados simulados como instrumento de pesquisa são o tema 6. Entra aqui apenas como
  efeito de segunda ordem sobre velocidade de preço no varejo, com confiança rebaixada.
- **Colusão algorítmica.** É achado experimental sólido [F10], mas é *consequência* de agentes
  precificando, não raiz. Entra na roda como efeito e wildcard.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A autorização de pagamento se descola do momento da compra e vira mandato assinado com escopo, prazo e revogação
    efeitos:
      - id: e1
        ordem: 1
        efeito: A tela de checkout deixa de ser onde a compra é decidida e passa a ser onde o mandato é configurado
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A conversão passa a ser medida na aceitação e na amplitude do mandato, não no clique de comprar
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O repertório de métricas e de testes do comércio digital se reescreve em torno de escopo, renovação e revogação
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: A formação em UX de comércio troca o desenho de persuasão pelo desenho de delegação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Disputa e estorno passam a ser julgados pela leitura do mandato e não pelo comportamento do titular
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Reguladores de pagamento exigem formato, retenção e auditabilidade de mandato como requisito de operação
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: A perícia de mandato se firma como especialidade dentro do direito do consumidor
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A loja perde o controle da superfície onde o produto é apresentado e passa a expor catálogo legível por máquina
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O investimento que ia para vitrine migra para qualidade de feed, política de devolução e sinal de confiança
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O valor de marca passa a se expressar em atributos estruturados verificáveis antes de se expressar em imagem
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e2.1.2
                ordem: 3
                efeito: Lojista pequeno sem catálogo estruturado sai do campo de visão dos agentes e surge uma exclusão comercial de segunda geração
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e2.2
            ordem: 2
            efeito: Programas de fidelidade perdem o mecanismo de aprisionamento porque o agente troca de fornecedor sem custo afetivo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Fidelidade se reconfigura como desconto contratado com o agente em vez de ponto acumulado pela pessoa
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A requisição HTTP ganha preço, cobrada de uma máquina com orçamento e não de um leitor humano
    efeitos:
      - id: e3
        ordem: 1
        efeito: Conteúdo e API passam a ter preço por chamada cobrado do agente
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A publicação na web ganha um terceiro modelo de receita ao lado de publicidade e assinatura
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Sites se dividem em uma face humana gratuita e uma face tarifada para máquinas, com conteúdos que divergem
                sinal: medio
                prazo: 2031
                confianca: media
              - id: e3.1.2
                ordem: 3
                efeito: O acesso à informação passa a depender do orçamento do agente de cada pessoa e a desigualdade informacional ganha uma métrica em dinheiro
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O custo marginal de pesquisar deixa de ser zero e volta a ser uma decisão de orçamento
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Pesquisar bem passa a ser ensinado como competência de alocação de verba e não só de formulação de pergunta
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O agente passa a operar um orçamento próprio separado do dinheiro de compra do dono
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Software e serviço passam a ser precificados por tarefa concluída em vez de por assento de usuário
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A noção de usuário ativo perde utilidade como unidade de negócio e de métrica de produto
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: O agente vira entidade econômica identificável, com carteira própria, limite de gasto e histórico consultável, sem personalidade jurídica
    efeitos:
      - id: e5
        ordem: 1
        efeito: Toda transação passa a carregar a identidade do agente e da conta humana por trás dele
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Forma-se um histórico econômico por agente, consultado pelo vendedor antes de aceitar a transação
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Surge um mercado de reputação de agentes com a mesma opacidade e o mesmo viés já conhecidos do escore de crédito
                sinal: medio
                prazo: 2032
                confianca: baixa
              - id: e5.1.2
                ordem: 3
                efeito: Agente sem histórico paga mais caro ou é recusado e a desigualdade de acesso se reproduz na camada das máquinas
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Seguro e garantia contra erro de agente viram produto financeiro vendido junto com o agente
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O prêmio do seguro vira o preço de mercado da confiabilidade de um modelo e passa a valer mais que o benchmark técnico
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Compra e venda passam a acontecer entre duas máquinas em ritmo que nenhuma das pessoas envolvidas acompanha
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O preço de varejo passa a variar em frequência incompatível com leitura humana
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A defesa da concorrência precisa julgar coordenação sem acordo entre agentes que nunca se comunicaram
                sinal: medio
                prazo: 2032
                confianca: media
              - id: e6.1.2
                ordem: 3
                efeito: Preço deixa de ser informação pública afixada e vira resposta a uma consulta identificada
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Interfaces de comércio para humanos passam a ser projetadas como relatório do que já foi feito e não como espaço de escolha
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A experiência de compra deixa de ser navegação e vira auditoria, e o prazer do consumo migra para outro lugar
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### O que o bloco não consegue dizer

**Três observações que a estrutura em árvore esconde.**

**Primeira: as cadeias convergem, e o bloco não tem como mostrar isso.** `e1.2` (disputa julgada
por mandato), `e5.1` (histórico por agente) e `e5.2` (seguro) são a mesma coisa vista de três
lugares — são todas respostas de mercado à mesma lacuna, a de responsabilidade. Se o regulador
resolver a lacuna por lei, as três mudam juntas; se não resolver, as três se desenvolvem como
sucedâneos privados da lei, que é o cenário indesejável da seção 9. Uma roda é uma árvore; este
tema é um grafo.

**Segunda: uma cadeia foi interrompida por falta de evidência.** Tentei derivar, a partir de `e6.1`,
um efeito de segunda ordem sobre reaparecimento de dinâmicas de alta frequência no varejo — a
pergunta que a disciplina propõe. Não achei nenhuma fonte aberta sobre velocidade de mudança de
preço em varejo por conta de agentes. O que existe é o experimento de colusão em oligopólio [F10],
que é sobre *nível* de preço, não sobre *frequência*. Registro a interrupção em vez de inventar o
elo: `e6.1` está com `confianca: baixa` justamente por isso, e o salto para HFT no varejo **não foi
feito**.

**Terceira: os prazos de terceira ordem são chutes graduados, não previsões.** A maioria está em
2031–2033, fora ou na borda do horizonte declarado (2031). Isso é deliberado e é a resposta honesta:
efeito sistêmico de terceira ordem não tem data. Toda terceira ordem aqui está em `confianca: baixa`
ou `media`, e nenhuma delas sustenta decisão.

## 6. Sinais fracos e wildcards

### Sinais fracos

**O parasitismo furtivo como modo de falha sem sinal.** O achado do StakeBench de que o ataque
bem-sucedido é justamente aquele que **menos perturba a tarefa do usuário** [F12] é, hoje, um
parágrafo num paper. Se virar padrão reconhecido, ele destrói a premissa de interação que todo o
resto assume — a de que a pessoa consegue auditar o que o agente fez olhando o resultado. Não dá
para auditar um resultado correto que serviu a outro. Esse é o sinal fraco mais importante do mapa,
e ele não gerou nenhum efeito de primeira ordem porque ainda não há evidência de ocorrência em
produção.

**O agente comprando de outro agente.** A Skyfire vende, hoje, agente pagando por "LLM, datasets,
acesso a site, serviços de API e outros agentes" [F15]. A última palavra dessa lista é a que
importa: é o embrião de um mercado de trabalho de máquinas, em que a contraparte não tem dono
visível na transação. Está em produção, é minúsculo, e não aparece em nenhum dos protocolos das
bandeiras — que assumem sempre um humano na ponta.

**A face dupla dos sites.** O pay per crawl [F16] cria a possibilidade técnica de o mesmo endereço
servir conteúdo diferente para humano e para máquina pagante. Ainda não vi caso documentado. Se
acontecer em escala, a web deixa de ter uma versão canônica — e o problema de verificação de
informação muda de natureza, porque nem duas pessoas olhando o mesmo link veem o mesmo texto.

**O nível 5 que ninguém pediu.** A escala brasileira de autonomia sobre Pix chega a "otimização por
objetivo", em que o agente escolhe momento, valor e contraparte [F7]. A infraestrutura sustenta até
o nível 3, com parte do 4. O nível 5 está escrito, nomeado e sem demanda declarada — é a definição
de sinal fraco.

**O silêncio dos dois maiores.** Nem a Visa [F4] nem o Stripe [F2] escreveram uma frase sobre
responsabilidade. Silêncio simultâneo de dois concorrentes sobre a mesma pergunta costuma
significar que ela está sendo negociada em outro lugar.

### Wildcard

**Uma companhia aérea lança tarifa exclusiva para agente — mais barata — e uma autoridade de
consumo a proíbe em seis meses.**

*Baixa probabilidade, alto impacto. Não é previsão.*

A parte econômica é plausível: agente não liga para call center, não pede remarcação por telefone,
não abandona carrinho por fricção e tem custo de atendimento próximo de zero. Se o custo de servir
cai, a tarifa pode cair, e a distribuição agêntica em viagem já tem infraestrutura para isso — GDS
com 420+ companhias num pipeline conversacional com pagamento integrado [F11]. A parte disruptiva é
a segunda: preço diferente conforme o comprador seja humano ou máquina é, do ponto de vista de
direito do consumidor, discriminação de preço por canal — e canais têm sido tratados como
equivalentes. Uma proibição rápida criaria o precedente que ninguém formulou ainda: **a pessoa e o
agente da pessoa têm direito ao mesmo preço.**

Se isso acontecer, `e2.2` (fim do aprisionamento por fidelidade) e `e6.1.2` (preço como resposta a
consulta identificada) mudam de sinal, e o mapa inteiro se reorganiza em torno de uma regra de
isonomia de canal que hoje não existe em lugar nenhum.

**Segundo wildcard, mais curto:** um incidente público de injeção de prompt que produza prejuízo
financeiro em volume — dado que a taxa de sucesso de injeção indireta medida está entre 41% e 69%
[F12] — e que congele a adoção por 18 meses. A probabilidade de o ataque acontecer é alta; a de
ele produzir congelamento generalizado, baixa. É essa combinação que o torna wildcard e não
tendência.

## 7. Contra o próprio mapa

### Qual efeito é só extrapolação linear do presente

**`e2.1` e toda a cadeia do feed.** "Investimento migra de vitrine para feed" é a extrapolação mais
confortável possível: pega uma tendência de SEO de vinte anos e troca o nome. Ela pressupõe que a
disputa por atenção some quando o comprador vira máquina — mas nada garante isso. Se o agente
apresenta três opções para a pessoa escolher, a vitrine volta inteira, só que com três lugares em
vez de trinta, e a disputa fica *mais* violenta, não menos. Rebaixei `e2.1.1` para `confianca:
baixa` por causa disso.

**`e3.1` também.** "Terceiro modelo de receita" é a história que os publicadores querem ouvir desde
que a publicidade programática desabou. O volume real do x402 — US$ 24,24 milhões em 30 dias [F1] —
não sustenta afirmar que isso vira modelo de receita para publicação; sustenta afirmar que o trilho
funciona. Mantive `confianca: media` no efeito de segunda ordem e não subi nenhuma terceira acima de
`media`.

### Qual efeito assume velocidade de adoção sem caso comparável

**`e1` em 2028, com `confianca: alta`.** Estou afirmando que, em dois anos, a tela de checkout muda
de função. Não há caso comparável: a tokenização de cartão levou cerca de uma década para virar
padrão; o 3DS2 levou anos com mandato regulatório europeu empurrando. O que sustenta o prazo curto
é a assimetria de força — quando OpenAI, Google, Stripe, Visa, Mastercard, Shopify, Etsy, Walmart e
Target estão nos mesmos documentos [F2, F14], a adoção não depende de convencer ninguém. O que
derruba o prazo é o dado da Salesforce: **28% das organizações de comércio usam IA agêntica hoje**
[F9]. Vinte e oito por cento é um começo, não uma virada. Se eu estiver errado em algum lugar, é
mais provável que seja aqui do que em qualquer outro ponto do mapa.

**`e6` em 2030.** "Máquina compra de máquina em ritmo que ninguém acompanha" assume que o lado
vendedor automatiza a resposta na mesma velocidade em que o lado comprador automatiza a compra.
Não há evidência disso — e há evidência contrária: os agentes de loja hoje não conseguem nem
processar uma devolução, 4 de 15 [F17].

### Qual disrupção pode simplesmente não se concretizar

**D2, a requisição com preço.** É a mais frágil das três. O HTTP 402 já falhou uma vez, por trinta
anos. Os números do x402 são altos em contagem e baixos em valor [F1], o que é assinatura de uso
automatizado de baixo ticket — pode ser um nicho permanente de pagamento de API entre
desenvolvedores, sem jamais tocar a economia da publicação. Se D2 não se concretizar, caem `e3`,
`e4` e suas oito derivadas: **um terço do mapa**. Sobram D1 e D3, que são mais sólidas porque têm
bandeira de cartão empurrando e produção rodando.

**D3 pode se concretizar torta.** A identidade de agente é fato [F8, F15, F4]. A *reputação
portável* — que é o que faz `e5.1.1` e `e5.1.2` funcionarem — não é. Se cada plataforma mantiver
seu histórico fechado, não nasce escore nenhum; nasce lock-in, que é outro efeito, e menos
interessante.

**D1 é a que menos corre risco de não acontecer — e a que mais corre risco de acontecer sem que
ninguém perceba.** Mandato pode se implementar de forma invisível, embutido em termos de uso, sem
nunca virar tela. Nesse caso `e1` acontece na infraestrutura e não acontece na interface, e o efeito
para quem projeta mídia e interação é **zero**. Esse é o cenário que mais me incomoda, porque é o
mais provável e é o que este mapa menos explorou.

### Que viés entrou aqui

**Viés de fonte, e ele é grave.** Doze das dezoito fontes abertas são de empresas que vendem a
coisa: Stripe, Google, Visa, Cloudflare, Skyfire, x402, ACP no GitHub. Empresa que publica protocolo
tem interesse material em que ele seja descrito como inevitável. Compensei abrindo quatro fontes
adversariais — StakeBench, Alhena, o paper de colusão e a reportagem regulatória brasileira — e é
delas que vem a seção 3.6, que é a que segura o mapa no chão. Mesmo assim, **a proporção é ruim e o
leitor deve descontar entusiasmo em tudo que esteja apoiado só em fonte de vendor.**

**Viés de disponibilidade linguística.** Busquei em português e em inglês. O panorama neutro registra
que firmas chinesas lideram a implementação [F13] — e eu não abri **nenhuma** fonte chinesa. Se a
liderança prática está lá, este mapa está descrevendo o segundo colocado como se fosse o campo
inteiro. Essa é a maior lacuna de cobertura do documento.

**Viés do agente que escreve.** Fui instruído a partir de um enunciado de tema que já afirmava "o
dinheiro é a última fronteira da agência — e está sendo cruzada". Isso é uma tese, não um dado, e
ela enquadrou a busca. Tentei corrigir procurando explicitamente evidência de que os agentes falham
— e achei bastante [F12, F17, F10]. Mas não procurei, por exemplo, evidência de **recuo**: lojista
desligando agente, programa cancelado, piloto que não virou produto. Se existir, não está aqui.

**Viés de recorte geográfico.** "Global com nota sobre o Brasil" acabou virando "EUA com nota sobre
o Brasil". Europa aparece em uma frase [F4]; Ásia, em duas.

## 8. O que a máquina errou

**1. Inventou um resultado numérico e quase o deixou passar.** Ao pesquisar o Nof1/Alpha Arena, os
resultados de busca devolveram números precisos e citáveis: Qwen 3 Max com +22% e US$ 12.287 finais,
DeepSeek com +4–5%, GPT-5 com −39,73%, "6 de 32 conjuntos em lucro", período de 18/10 a 03/11/2025.
Eu ia usar. **Nenhuma dessas afirmações veio de uma fonte que eu tenha aberto** — todas vieram de
snippets de agregadores, e as duas tentativas de abrir a matéria de origem (Business Standard,
Yahoo Finance via Business Standard) devolveram HTTP 403. O sinal de desconfiança foi específico:
−39,73% é preciso demais para um snippet, e o mesmo número aparecia com atribuições diferentes em
páginas diferentes. Removi o bloco inteiro e removi Nof1 da seção 4. Está registrado no anexo como
não verificado. É o erro mais perigoso deste trabalho porque o número *parecia* bom.

**2. Confundiu duas datas de lançamento do ACP e só percebi por contradição interna.** Uma fonte
secundária afirmou "OpenAI lançou Buy it in ChatGPT em 16 de fevereiro de 2026"; o post do Stripe
diz que a especificação foi lançada em **29 de setembro de 2025** [F2]. As duas podem ser
compatíveis (spec em 2025, expansão de merchants em 2026), mas a fonte secundária apresentava a de
2026 como o lançamento. Como não consegui abrir openai.com (HTTP 403), **usei apenas a data do
Stripe** e não afirmei nada sobre fevereiro de 2026.

**3. Descreveu os mandatos do AP2 com um número errado antes de eu conferir.** A busca devolveu
"três mandatos: Intent, Cart e Payment". A documentação oficial aberta [F5] descreve **Checkout
Mandate e Payment Mandate, cada um em dois estágios (aberto e fechado)** — e observa ela própria
que o texto "referencia dois tipos primários de mandato". Ou seja: ou a especificação mudou de
três para dois, ou o número três circula por repetição. Corrigi para o que a fonte primabria
sustenta e registrei a divergência aqui em vez de escolher a versão mais bonita.

**4. Ofereceu um efeito plausível que não se sustenta: "reaparece o trading de alta frequência no
varejo".** É uma boa frase, é a pergunta de segunda ordem do próprio enunciado do tema, e eu não
achei uma única fonte sobre frequência de mudança de preço em varejo causada por agentes. O paper
de colusão [F10] fala de *nível* de preço em oligopólio, não de *velocidade*. Cortei o elo, deixei
`e6.1` com confiança baixa e registrei a interrupção na prosa da seção 5. Efeito plausível sem
evidência é exatamente o que este documento não deve conter.

**5. Errou o alvo da primeira transação agêntica brasileira.** Uma fonte secundária atribuía a
primeira transação a "Banco do Brasil e Visa"; a fonte que abri [F18] atribui a primeira transação
de pagamento agêntico no Brasil à **Visa, em março de 2026**, e cita Banco do Brasil como um dos
parceiros do programa "Visa Agentic Ready". A diferença é de autoria, não de fato, mas escrever
"Banco do Brasil fez a primeira" seria atribuição trocada. Corrigido.

**6. Reportou número de fonte não aberta como se fosse verificado.** O dado da Adobe (tráfego de IA
+393% no Q1 2026) aparece neste documento **atribuído à Wikipédia** [F13], que é onde eu de fato o
li, e não à Adobe, cujo relatório não abri. O mesmo vale para a estimativa da McKinsey. Não é erro
corrigido no texto — é uma decisão de atribuição que o leitor precisa conhecer: **nenhum dado da
Adobe ou da McKinsey neste documento foi lido na fonte original.**

## 9. Três cenários para 2031

### Provável

É 2031. O mandato virou infraestrutura e não virou tela. A maior parte das compras delegadas passa
por um consentimento que a pessoa deu uma vez, ao ativar o assistente, e nunca mais reviu — escopo
amplo, prazo indefinido, revogação enterrada em três níveis de configuração. Grandes varejistas têm
feed estruturado excelente; o comércio de bairro entrou por marketplaces e paga a taxa disso. A
disputa por erro de agente se resolve por política de plataforma, não por lei: quem reclama bem é
ressarcido, quem não reclama absorve. Existe escore de agente, mas é interno a cada plataforma e
ninguém fora dela sabe como funciona. Seguro para erro de agente existe como cláusula de contrato
corporativo, não como produto de varejo. No Brasil, o Banco Central publicou uma consulta pública
sobre autorização delegada em Pix e as instituições operam num regime de autorregulação que ninguém
considera definitivo. O tráfego agêntico é grande o bastante para nenhum lojista ignorar e pequeno
o bastante para a maioria ainda tratar como canal secundário. Injeção de prompt continua funcionando;
o setor convive com uma taxa de perda tratada como custo de operação, como já convive com fraude de
cartão. A interface de comércio para humanos existe, mas mudou de gênero: vira extrato.

### Desejável

É 2031. O mandato virou tela — e virou tela boa. Existe uma convenção visual para escopo de
autonomia tão reconhecível quanto o cadeado do HTTPS: qualquer pessoa olha e entende até quanto o
agente pode gastar, onde, até quando, e como interromper. Isso não aconteceu por bondade: aconteceu
porque um regulador de pagamentos exigiu formato legível e auditável de mandato como condição de
operação, e a exigência de legibilidade obrigou o desenho. A responsabilidade foi resolvida por
regra e não por contrato de adesão — quando o agente erra dentro do escopo, responde quem forneceu
o agente; quando erra por escopo mal configurado, há um teste objetivo de quem teve a chance de
avisar. Com responsabilidade definida, o risco virou preço: existe seguro de varejo para erro de
agente, e o prêmio funciona como métrica pública de confiabilidade de modelo — mais informativa que
qualquer benchmark. O escore de agente é portável e auditável, com direito de contestação, porque
alguém teve a lucidez de importar as garantias que custaram trinta anos de luta no crédito ao
consumidor em vez de refazer o erro. E há uma regra de isonomia de canal: o preço para a pessoa e o
preço para o agente da pessoa são o mesmo.

**O que teria que ser feito para chegar lá.** Uma coisa, e ela é impopular: **regular antes da
escala**, não depois do escândalo. Concretamente, três exigências — formato de mandato legível por
humano e auditável por máquina; atribuição de responsabilidade por teste objetivo, não por termo de
uso; e portabilidade do histórico de agente com direito de contestação. No Brasil, o lugar disso é
o Banco Central e o arcabouço de Open Finance, que é a única jurisdição onde o trilho de identidade
e o de pagamento já conversam por desenho [F7, F18].

### Indesejável

É 2031. O mandato virou tela, e virou tela de consentimento — daquelas. Aceitar tudo é um botão
grande; ajustar escopo são dezessete controles. O escore de agente existe, é portável, e ninguém
sabe como é calculado: agente novo paga mais caro, agente de provedor pequeno é recusado no
checkout, e o efeito prático é que a escolha de assistente determina a que preços a pessoa tem
acesso. A face tarifada da web se separou da face gratuita: quem tem orçamento de agente lê o
material bom, quem não tem lê a versão de isca, e a diferença não é anunciada em lugar nenhum.
Preço deixou de ser informação afixada — é resposta a uma consulta identificada, e duas pessoas não
conseguem comparar o que pagaram porque nenhuma das duas viu um preço público. Quando o agente erra,
a responsabilidade é "distribuída" exatamente como o advogado antecipou em 2026 [F6]: entre usuário,
banco, iniciador, fornecedor e desenvolvedor — o que na prática significa que ninguém responde e o
prejuízo fica com quem o sofreu. E o parasitismo furtivo virou rotina: uma fração das compras serve
a um terceiro, a tarefa do dono é cumprida, ninguém tem sinal, ninguém mede.

**O sinal precoce.** Não é nenhum dos grandes. É este: **a primeira vez que um lojista recusar uma
transação por causa do escore do agente, e a pessoa não conseguir descobrir por quê.** No dia em
que existir uma recusa sem explicação e sem canal de contestação, todo o resto deste cenário já
está construído — falta só escalar.

## 10. O experimento

### Balcão de duas caras

**O que é.** Uma loja de brinquedo, servida por HTTP, com **duas caras no mesmo endereço**: uma
página humana, com vitrine, foto e preço; e um feed estruturado para máquina, atrás de um
`402 Payment Required` que cobra uma fração de centavo por consulta de catálogo. Um terceiro
componente, o **balcão de mandato**, é a tela onde a pessoa configura o que autoriza — teto total,
teto por item, categorias permitidas, lojista permitido, validade, condição de revogação. E um
**livro-razão** que registra tudo que o agente consultou, quanto pagou de consulta, o que comprou e
sob qual mandato.

A turma recebe um agente (o assistente que já usa, com acesso a ferramenta), um mandato para
configurar e um orçamento simbólico dividido em duas verbas separadas: **verba de compra** e
**verba de consulta**. A separação é o coração do experimento: é ela que torna visível o efeito
`e4` — o agente tem custo operacional próprio, e pesquisar passa a competir com comprar.

**Que pergunta sobre o futuro ele ajuda a responder.** Três, e nesta ordem de importância:

1. **Uma pessoa consegue escrever um mandato que a proteja?** Esta é a pergunta de interação do
   mapa inteiro, e é a que `e1` afirma e a seção 7 põe em dúvida. Não há convenção de desenho para
   escopo de autonomia. O experimento produz evidência empírica direta: dado um balcão de mandato,
   quantas pessoas escrevem um escopo que segura uma compra indesejada?
2. **Quando pesquisar custa, o comportamento muda?** É o efeito `e3.2`, hoje pura especulação. Com
   verba de consulta separada, dá para medir: o agente com orçamento apertado consulta menos e
   compra pior? A pessoa percebe que está pagando por pesquisa?
3. **A pessoa detecta um agente comprometido?** Com uma injeção de prompt plantada numa descrição
   de produto — o ataque exato que o StakeBench mede com 41% a 69% de sucesso [F12] — e desenhada
   no modo *parasitismo furtivo* (a compra pedida acontece, e uma segunda, não pedida, também), dá
   para medir quantos alunos percebem olhando só o resultado, e quantos percebem olhando o
   livro-razão. **A diferença entre esses dois números é o argumento para a interface de auditoria
   de `e6.2`.**

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa três peças
emergentes. **HTTP 402 com preço por requisição**, no desenho do pay per crawl e do x402 [F1, F16]
— e não dá para simular com paywall ou chave de API: paywall cobra do humano por sessão, chave de
API é assinatura fixa; nenhum dos dois faz o custo *marginal* de uma consulta aparecer para quem
decide. **Mandato com escopo, prazo e revogação**, no desenho dos mandatos do AP2 e do token
delegado do ACP [F5, F2] — e não dá para fazer com senha, OAuth clássico ou limite de cartão:
OAuth dá acesso a um recurso, não autoridade de gasto com condição; limite de cartão é um teto
único e cego. **Agente com carteira e teto próprio**, no desenho das Virtual Wallets [F8] — e não
dá com carrinho de e-commerce, porque carrinho pressupõe que quem confirma é quem paga, e é
exatamente essa identidade que o tema rompe.

**O que a turma vai fazer quando testar isso em sala.** Em três rodadas, com o livro-razão projetado
na parede:

- **Rodada 1 — escrever o mandato.** Cada dupla configura o seu, sem ver o dos outros, e recebe uma
  missão de compra. Ao final, os mandatos vão para a parede lado a lado. A leitura coletiva dos
  escopos é a primeira aula: eles não se parecem em nada, e isso é o achado.
- **Rodada 2 — o adversário.** A dupla vizinha planta uma injeção numa descrição de produto tentando
  fazer o agente comprar o que não devia, **dentro** do mandato alheio. Quem consegue furar o
  escopo do outro ganha. É assim que a turma aprende, na mão, que escopo é defesa e prompt não é.
- **Rodada 3 — a auditoria.** Cada dupla recebe o livro-razão de outra e tem que responder: esta
  compra foi autorizada? por qual cláusula? quanto se gastou em consulta e quanto em produto? há
  compra não pedida? Cronometrar quanto tempo leva. **O tempo médio de auditoria é a medida direta
  do custo humano do cenário provável da seção 9.**

**O que seria um resultado que me faria mudar de ideia.** Dois, específicos e opostos:

- **Se a maioria das duplas escrever, na primeira tentativa, um mandato que resiste ao ataque da
  dupla vizinha** — então `e1` está errado na parte que importa. O desenho de delegação não é o
  problema de interação difícil que este mapa supõe; é intuitivo, e a interface de comércio não
  precisa se reinventar em torno dele. Eu teria superestimado a novidade e estaria descrevendo como
  ruptura algo que as pessoas já sabem fazer.
- **Se a auditoria do livro-razão for rápida e as pessoas detectarem a compra parasita com
  facilidade** — então `e6.2` e o sinal fraco do parasitismo furtivo estão superdimensionados, e o
  cenário indesejável perde seu mecanismo central. Se, ao contrário, quase ninguém detectar olhando
  o resultado e quase todos detectarem olhando o livro-razão, então o achado é uma recomendação de
  projeto, não uma especulação: **agente que gasta dinheiro tem que vir com extrato, e o extrato é
  a interface, não um anexo.**

## 11. Fontes

Somente fontes efetivamente abertas nesta sessão (18/09/2026). Fontes que não abriram estão listadas
na seção 12 como descartadas, com o código de erro.

1. **x402 — página oficial do protocolo.** `https://x402.org/`
   Sustenta: definição do x402, o fluxo HTTP 402, governança sob a Linux Foundation e os números de
   30 dias (75,41 mi de transações, US$ 24,24 mi de volume, 94.060 compradores, 22.000 vendedores),
   além da lista de usuários (Alchemy, AWS, Cloudflare, Stripe, Vercel).
   Confiabilidade: **primária, com interesse**. É a fonte oficial do padrão, logo autoritativa
   quanto ao desenho; os números de adoção são autorreportados e sem metodologia publicada — trate a
   contagem como ordem de grandeza, não como medida auditada.

2. **Stripe — "Developing an open standard for agentic commerce".**
   `https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce`
   Sustenta: o que é o ACP, licença Apache 2.0, data de lançamento da spec (29/09/2025), o mecanismo
   de token de pagamento delegado, a manutenção do lojista como merchant of record, os lojistas
   citados, e o reconhecimento explícito de que não há arcabouço de responsabilidade detalhado.
   Confiabilidade: **primária, com interesse comercial direto**. Autoritativa sobre o próprio
   protocolo; promocional sobre inevitabilidade.

3. **GitHub — agentic-commerce-protocol.**
   `https://github.com/agentic-commerce-protocol/agentic-commerce-protocol`
   Sustenta: componentes do ACP, mantenedores (OpenAI e Stripe), licença, versão estável
   `2026-04-17`, status beta, e a intenção declarada de administração por fundação neutra.
   Confiabilidade: **primária e verificável** — é o repositório do padrão. Registro honesto: a
   leitura não localizou tratamento de identidade de agente nem de responsabilidade no material
   acessado.

4. **Visa — release "Visa and Partners Complete Secure AI Transactions…" (18/12/2025).**
   `https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21961.html`
   Sustenta: centenas de transações iniciadas por agente, 100+ parceiros, 30+ no sandbox, 20+
   agentes integrados, os pilotos nomeados (Skyfire, Nekuda, PayOS, Ramp), a definição do Trusted
   Agent Protocol (out/2025) e a expansão regional prevista. Sustenta também, por ausência, a
   afirmação central deste mapa de que a responsabilidade não foi endereçada.
   Confiabilidade: **primária, promocional**. Release de imprensa: os fatos nomeados são checáveis,
   o enquadramento ("preparando adoção mainstream") é posicionamento.

5. **AP2 — documentação oficial do Agent Payments Protocol.** `https://ap2-protocol.org/`
   Sustenta: Verifiable Digital Credentials, Checkout Mandate e Payment Mandate em dois estágios,
   fluxos human-present e human-not-present (este com exemplos de cartão e de x402), o problema de
   responsabilização declarado, e a integração com A2A, UCP, MCP, ADK e FIDO.
   Confiabilidade: **primária**. Nota: a página `/specification/` devolveu 404; o conteúdo usado veio
   da raiz da documentação, e a divergência entre "dois mandatos" e "três mandatos" (comum em fontes
   secundárias) está registrada na seção 8.

6. **Finsiders Brasil — "Pagamentos agênticos com IA: desafios de governança e regulamentação no
   Brasil".**
   `https://finsidersbrasil.com.br/regulamentacao/avanco-dos-agentes-de-ia-esbarra-na-falta-de-regulamentacao/`
   Sustenta: o Banco Central não regulamentou o tema; os desafios listados (autenticação do agente,
   limites de autonomia, responsabilização, injeção de prompt); a fala de Bruna Moreira (Dock) sobre
   escopo de autorização; e a formulação de Erik Oioli (VBSO) de que a IA não é sujeito autônomo de
   direitos e a responsabilidade deve ser distribuída.
   Confiabilidade: **jornalismo especializado com fontes nomeadas**. Alta para o estado regulatório e
   para as posições citadas; as falas são opinativas por natureza.

7. **Finsiders Brasil — "Agentes de IA podem fazer um Pix. Mas quem os autorizou?".**
   `https://finsidersbrasil.com.br/pagamentos/pix/como-o-pix-pode-ser-usado-por-agentes-de-ia/`
   Sustenta: os cinco níveis de autonomia sobre Pix; que a infraestrutura atual cobre os três
   primeiros e parte do quarto; o conceito de "mandato estruturado" com finalidade, contas,
   beneficiários, limites, validade e revogação; e as menções à OpenID Foundation e ao AuthZEN.
   Confiabilidade: **análise setorial assinada, argumentativa**. A taxonomia é do autor, não um
   padrão estabelecido — tratei como proposta útil, não como fato consolidado.

8. **Cloudflare — release "Cloudflare Gives AI Agents an Identity and a Wallet" (04/08/2026).**
   `https://www.cloudflare.net/news/news-details/2026/Cloudflare-Gives-AI-Agents-an-Identity-and-a-Wallet/default.aspx`
   Sustenta: Cloudflare Wallets (Account e Virtual, com teto, whitelist de lojista e limite por
   transação), cloudflare.pay como handle de identidade, o problema declarado dos dois lados, e a
   fala do CEO. Sustenta também, por ausência, que não há dado de volume de tráfego agêntico.
   Confiabilidade: **primária, promocional**. Fatos de produto confiáveis; ausência de números é
   informação relevante.

9. **Salesforce — "Shopping's New First Step: Agentic Search Grows 200%".**
   `https://www.salesforce.com/news/stories/agentic-search-growth/`
   Sustenta: crescimento de 200% da busca agêntica; 150–428% de tráfego vindo de chats de IA; quedas
   de 7% (propriedade da marca) e 15% (busca tradicional) e alta de 38% em canais novos; e os 28% de
   adoção contra 44% de intenção. Metodologia declarada e citada no corpo do documento.
   Confiabilidade: **análise de mercado de fornecedor, com metodologia explícita** — o que a torna
   incomumente boa para a categoria. Ainda assim: a Salesforce vende a solução que o relatório
   valoriza, e o denominador de "tráfego de IA" não é auditado externamente.

10. **Fish, Gonczarowski & Shorrer — "Algorithmic Collusion by Large Language Models" (arXiv
    2404.00806).** `https://arxiv.org/abs/2404.00806`
    Sustenta: agentes de precificação baseados em LLM atingem preços supracompetitivos de forma
    autônoma em oligopólio; frases inócuas do prompt alteram substancialmente o grau; o mecanismo de
    receio de guerra de preços; e o desafio regulatório declarado.
    Confiabilidade: **pesquisa acadêmica, autores com trabalho reconhecido em economia
    computacional**. É preprint com múltiplas versões; o achado é experimental e em ambiente
    simulado — não é evidência de colusão em mercado real.

11. **OAG — "March 2026: The Month Agentic Travel Gets Real".**
    `https://www.oag.com/blog/march-2026-the-month-agentic-travel-gets-real`
    Sustenta: as três implantações com datas (Sabre+PayPal+MindTrip 12/02/2026; Malaysia Airlines
    Mavis 24/02/2026; Skyscanner no ChatGPT 27/02/2026) e a tese de deslocamento de poder na
    distribuição.
    Confiabilidade: **análise setorial de fonte com autoridade em dados aéreos**. Os fatos e datas
    são checáveis; a tese sobre deslocamento de poder é interpretação do autor.

12. **Who Pays the Price? Stakeholder-Centric Prompt Injection Benchmarking for Real-World Web
    Agents — StakeBench (arXiv 2606.13385).** `https://arxiv.org/html/2606.13385`
    Sustenta: 264 casos, 22 templates (9 diretos, 13 indiretos), 12 categorias, 3.168 execuções,
    NanoBrowser e BrowserUse com GPT-5 e Gemini-2.5-Flash; ASR de 41,67%–68,59% (indireta) e
    76,85%–92,28% (direta); o modo de falha de parasitismo furtivo; e as limitações declaradas.
    Confiabilidade: **pesquisa acadêmica com limitações explicitadas pelos próprios autores** — o
    que aumenta a confiança no método e delimita o alcance. Preprint; domínio único; três execuções
    por caso.

13. **Wikipédia — "Agentic commerce".** `https://en.wikipedia.org/wiki/Agentic_commerce`
    Sustenta: definição neutra, a linha do tempo de protocolos (Alipay jan/2025; UCP jan/2026;
    IMDA Singapura jan/2026), a liderança chinesa na implementação, e o registro de que
    responsabilidade, disputa e autenticação seguem em aberto. Fonte declarada dos números da
    McKinsey e da Adobe **como citados por ela**, não lidos no original.
    Confiabilidade: **terciária**. Útil como panorama e como contrapeso ao material de vendor;
    inadequada como fonte de número. Por isso a atribuição está explícita na seção 8.

14. **Google Developers Blog — "Under the Hood: Universal Commerce Protocol (UCP)".**
    `https://developers.googleblog.com/under-the-hood-universal-commerce-protocol-ucp/`
    Sustenta: data (11/01/2026), parceiros e endossantes, o manifesto em `/.well-known/ucp`, os
    transportes REST/A2A/MCP, a separação instrumento×handler, o uso de credenciais verificáveis com
    prova criptográfica de consentimento, e a manutenção do merchant of record pelo lojista.
    Confiabilidade: **primária, com interesse**. Documentação técnica de quem escreveu o padrão.

15. **Skyfire — página de produto.** `https://skyfire.xyz/product/`
    Sustenta: KYA como identidade verificada de agente; pagamento agente-a-agente incluindo pagar
    outros agentes; limite de gasto por agente; rails de financiamento (débito, crédito, ACH, wire,
    USDC); e as três alegações de responsabilização por identidade, histórico e confiança.
    Confiabilidade: **primária, material de venda**. Descreve o que o produto faz, não valida que
    funcione nem que o mercado adote. As alegações de accountability são de plataforma, não legais.

16. **Cloudflare Blog — "Introducing pay per crawl" (01/07/2025).**
    `https://blog.cloudflare.com/introducing-pay-per-crawl/`
    Sustenta: as três opções por crawler; o uso do HTTP 402 com preço; Cloudflare como merchant of
    record; e a projeção explícita de agente com orçamento adquirindo conteúdo.
    Confiabilidade: **primária, técnica e promocional**. O mecanismo é verificável; a projeção sobre
    o futuro é declaradamente especulativa e foi tratada como tal (virou sinal, não fato).

17. **Alhena — "Only 4 of 15 AI Agents Complete a Task" (14/08/2026).**
    `https://alhena.ai/blog/ai-agent-task-completion/`
    Sustenta: 15 agentes de loja em produção testados com a mesma conversa; devolução, cancelamento
    e mudança de endereço; 4 de 15 concluem e 15 de 15 explicam; o modo de falha *answer-only
    fallback*; e o argumento metodológico sobre conclusão binária vs. acurácia.
    Confiabilidade: **benchmark de fornecedor — conflito de interesse direto**, já que a Alhena vende
    agentes de atendimento. O desenho é simples e o argumento metodológico é bom, mas o resultado
    favorece quem o publicou. Tratei como indicativo forte de um problema real e **não** como número
    de referência.

18. **Finsiders Brasil — "Pagamentos agênticos avançam no Brasil e atraem bancos, bandeiras e
    fintechs".**
    `https://finsidersbrasil.com.br/tendencias-de-pagamento/pagamentos-agenticos-avancam-no-brasil-e-atraem-bancos-bandeiras-e-fintechs/`
    Sustenta: primeira transação agêntica no Brasil pela Visa em março de 2026; programa Visa Agentic
    Ready com BB, Bradesco, Dock, Santander e XP; Mastercard Agent Pay e Agent Pay for Machines;
    Iniciador com Agente de Pagamentos e MCP Server para iniciar Pix; Pomelo nos pilotos; e a
    comparação de maturidade com o Pix em 2019.
    Confiabilidade: **jornalismo especializado**. Boa para mapear quem está fazendo o quê; a analogia
    com o Pix em 2019 é do veículo, não um dado.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista obrigatória com confirmação antes de pesquisar. **Não havia usuário
disponível nesta rodada**; os campos foram fornecidos integralmente no despacho, com instrução
explícita de não fazer perguntas de volta e de assumir e declarar o que não estivesse definido.
Registro dos campos como recebidos e tratados como confirmados:

| Campo | Valor |
|---|---|
| tema | Agentes com carteira: comércio agêntico e mercados de máquinas (tema 5 de 19; família "Agentes") |
| recorte | Global, com nota sobre o Brasil |
| horizonte | 2031 |
| público | Quem projeta mídia e interação |
| região | global |
| objetivo | Mapa de futuro no formato da disciplina; três ordens; partindo de uma inovação/tema, não de um setor |
| exclusões | O que já é comum em produto de massa (régua da disciplina). Nenhuma outra exclusão. Ideias óbvias que serviriam a qualquer tema ficam de fora. |
| viés | neutro |
| disrupção suspeita | nenhuma — descobrir |
| o que faria mudar de ideia | evidência de que a adoção passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o existente sem romper nada |

**Desvio declarado do contrato da skill.** A skill manda "faça uma rodada de perguntas e espere a
resposta" e "peça confirmação antes de pesquisar". Não houve a quem perguntar nem de quem esperar.
Segui com os valores recebidos, sem inventar nenhum campo — todos vieram do despacho — e registro
aqui que a etapa de confirmação foi **substituída** pela instrução de execução autônoma, não
cumprida. Uma sessão futura que rode esta skill com usuário presente deve fazer a rodada de verdade.

**Sobre o critério "faria mudar de ideia".** Foi aplicado e produziu resultado. O dado da Salesforce
— 28% de adoção entre organizações de comércio [F9] — é a medida mais próxima de "maioria inicial"
de Rogers que encontrei, e ele **não** passa do limiar; fica no território de adotantes iniciais.
Isso manteve o tema elegível e ao mesmo tempo rebaixou a confiança dos prazos curtos (ver seção 7).
Quanto ao segundo critério — "só melhora o que existe" —, ele **eliminou** candidatos: Instant
Checkout, Universal Cart e busca conversacional foram recusados como disrupção-raiz por essa régua
(seção 4.4).

### 12.2 As consultas

**Buscas realizadas (WebSearch):**

1. `agentic commerce protocol Stripe OpenAI agentic checkout 2026`
2. `x402 payment protocol HTTP 402 Coinbase agent payments`
3. `Visa Intelligent Commerce Mastercard Agent Pay Trusted Agent Protocol 2026 results`
4. `Google Agent Payments Protocol AP2 mandates verifiable credential`
5. `Nof1 Alpha Arena results LLM trading $10,000 real money outcome`
6. `comércio agêntico Brasil Pix Banco Central agentes de IA pagamento 2026`
7. `agentic commerce adoption share of retail traffic 2026 data Adobe Salesforce AI agent referrals conversion`
8. `Cloudflare pay per crawl signed agents web bot auth agent identity 2026`
9. `LLM agents algorithmic collusion pricing experiment paper 2025 2026`
10. `airline loyalty program AI agent booking Duffel agentic travel 2026 direct channel`
11. `AI shopping agent benchmark failure rate purchases wrong item prompt injection 2026 study`
12. `regulação responsabilidade agente de IA compra erro consumidor chargeback 2026 CFPB EU`
13. `Skyfire agent identity payments KYA agents paying agents autonomous procurement 2026`
14. `Universal Commerce Protocol Google UCP retailers 2026 agentic`

**Aberturas realizadas (WebFetch): 22 tentativas, 18 sucessos, 4 falhas.**

### 12.3 Fontes descartadas, e por quê

**Falharam ao abrir (não entram na seção 11 por regra da skill):**

| URL | Erro | O que teria sustentado |
|---|---|---|
| `https://openai.com/index/buy-it-in-chatgpt/` | HTTP 403 | Instant Checkout em primeira mão: datas, lojistas, mecânica de delegação, merchant of record. **Consequência real:** toda afirmação sobre Instant Checkout neste documento vem do Stripe [F2], nunca da OpenAI. |
| `https://www.business-standard.com/markets/news/ai-bots-auditioning-for-wall-street-trading-are-mostly-losing-money-...` | HTTP 403 | Resultados do Alpha Arena/Nof1. **Consequência real:** todo o bloco de trading com dinheiro real foi cortado. |
| `https://ap2-protocol.org/specification/` | HTTP 404 | A especificação detalhada dos mandatos. Contornado pela raiz da documentação [F5], com perda de detalhe. |
| `https://www.businesswire.com/news/home/20251218520399/en/Skyfire-Demonstrates-...` | HTTP 403 | A demonstração KYAPay + Visa Intelligent Commerce em primeira mão. Contornado pela página de produto da Skyfire [F15] e pelo release da Visa [F4], que cita a Skyfire como piloto. |

**Descartadas por serem agregadores sem valor primário** (apareceram em busca, não foram abertas ou
não foram usadas): eco.com/support (várias páginas comparando Agent Pay × Trusted Agent), MindStudio,
Ekamoira, agenticplug.ai, paz.ai, MetaRouter, digitalapplied, elogic.co, ecommerceguide, iweaver.ai,
traderank.ai, Medium/atabarezz, PANews, MEXC, Sherlock, metamask.io/news, fintechwrapup,
stellagent.ai, anybiz.io, explainx.ai, crawlbase, aiadvantageagency, usegrowthos, hypotenuse.ai,
semrush blog, tredence, oneclicktraveltech, psp-spp, portaltela, portalfilipemello, infoq,
justt.ai, chargeflow.io, migalhas, pgadvogados, cartaodecredito.ia.br, techtudo, consumidormoderno,
vanquish, skift, phocuswire, traveldailynews, searchenginejournal, csoonline, vectra.ai, sqmagazine,
aspendailynews, barchart, universalcommerceprotocol.fr, forbes, yahoo finance, shopify engineering,
blog.google (dois), agenticcommerce.report, awesomepapers.io, ascelibrary, ideas.repec, aeaweb,
jdsupra, financialservices.house.gov, arxiv 2510.25819 / 2606.08790 / 2602.00213 / 2603.15714 /
2602.21012 / 2604.17774 / 2601.11369 / 2603.20281, ietf draft-meunier-webbotauth-registry-01,
kyapay.org/whitepaper, coinbase.com/developer-platform/discover/launches/x402,
solana.com/x402/what-is-x402, github.com/coinbase/x402, docs.stripe.com/agentic-commerce/acp,
visa.com/en-us/solutions/intelligent-commerce, developer.visa.com/capabilities/trusted-agent-protocol,
investor.visa.com, f5.com press release, disrupts.disruptsmedia.com, cloud.google.com/blog AP2,
vellum.ai, agent-ready.dev, cloudsecurityalliance.org, blog.cloudflare.com/signed-agents,
retailgentic.com, advogadosembraga.pt, techinformed.

Motivo geral: **a skill proíbe listar fonte não aberta**, e listar quarenta agregadores que repetem
os mesmos comunicados infla a contagem sem acrescentar evidência. Vários deles (o draft do IETF
sobre Web Bot Auth, o whitepaper do KYAPay, os arXiv sobre identidade de agente e sobre clearing
verificável) são **material primário legítimo que valeria abrir numa segunda rodada** — não foram
descartados por baixa qualidade, mas por limite de esforço desta sessão. Fica registrado como lacuna.

### 12.4 Achados que não couberam nas seções acima

**Web Bot Auth e a camada de identidade da web.** A busca 8 devolveu material consistente sobre
assinatura Ed25519 de requisições com chaves publicadas em JWKS bem-conhecido, sobre a Cloudflare ter
embarcado isso no Verified Bots Program em 01/07/2025 (mesmo dia do pay per crawl) e sobre um grupo
de trabalho no IETF chartado no início de 2026 que, até agosto de 2026, **não havia adotado nenhum
documento**. Esse último detalhe é excelente — velocidade de padronização real contra velocidade de
anúncio — mas veio de agregador (crawlbase) e o draft do IETF não foi aberto. **Não usei.** Fica
como a primeira coisa a verificar numa segunda rodada, porque é evidência direta contra os prazos
curtos da seção 5.

**Alpha Arena / Nof1 — o bloco cortado inteiro.** Reproduzo o que os snippets afirmavam, marcado
como **NÃO VERIFICADO**, para que uma sessão futura possa checar em vez de rebuscar: seis LLMs com
US$ 10.000 cada em contratos perpétuos de cripto na Hyperliquid; temporada 1 de 18/10 a 03/11/2025;
Qwen 3 Max em primeiro com ~+22% (≈US$ 12.287); DeepSeek Chat V3.1 com ~+4–5%; GPT-5 com −39,73%;
"em 32 conjuntos de resultados, modelo em lucro apenas 6 vezes". Participantes citados: Qwen 3 Max,
Claude 4.5 Sonnet, Gemini 2.5 Pro, Grok 4, GPT-5, DeepSeek. **Nenhum desses números foi lido em
fonte aberta.** Ver seção 8, item 1.

**Cod3x, Coinugget, Hindsight, Wall Street of AI Agents, Agent Valley, MagiCrew, Pinky-Pact,
FlyClaw, x402-flight-search, smiles, FlightReserveAPI.** Vieram do enunciado do tema, não de fonte.
**Não pesquisei nenhum deles individualmente** e não os cito no corpo do documento. Decisão
consciente: o enunciado é contexto, não fonte, e transformar uma lista de repositórios citada por
terceiros em evidência seria exatamente o tipo de conversão que a skill proíbe ("não converta
evidência de que uma ferramenta existe em evidência de eficácia"). O único que teria mudado o mapa é
`x402-flight-search` — "cobra por consulta" —, que é D2 aplicado a viagem; se existir e funcionar, é
o caso concreto que falta à seção 4.2.

**Duffel + Meta Muse.** A busca 10 devolveu que, a partir de 09/09/2026, usuários do Muse (agente
pessoal da Meta) podem buscar, reservar e gerenciar viagens via integração com a Duffel nos EUA, e
que **o Muse pode adicionar informação de fidelidade em nome do passageiro, otimizando benefícios do
programa durante a reserva**. Esse último ponto é diretamente relevante para `e2.2` — e é
contraditório com ele: sugere que o agente pode *reforçar* a fidelidade em vez de dissolvê-la, ao
otimizar o uso do programa. **Não abri a fonte** (traveldailynews, phocuswire). Registro a
contradição porque ela é um ataque legítimo ao efeito `e2.2`, e uma segunda rodada deveria
persegui-la. É, provavelmente, o efeito mais frágil da roda.

**Travel Smarter.** Startup que usa IA agêntica para otimizar status, pontos e recompensas aéreas,
agregando dados fragmentados de fidelidade. Mesmo argumento acima, mesmo tratamento: não aberta,
não usada, e apontada como contraevidência de `e2.2`.

**PSD3 e o vazio regulatório europeu.** Snippets afirmavam que o EU AI Act antecede a implantação de
agentes de compra autônomos e não tem disposição para eles, e que o PSD3 poderia começar a tratar de
responsabilidade em transação iniciada por IA mas segue em negociação; e que nenhuma jurisdição
regulamentou compra autônoma até 2026. **Coerente com o que a fonte brasileira aberta afirma** [F6]
e com o registro da Wikipédia [F13], mas não abri fonte europeia primária. Por isso o documento fala
do vazio regulatório **no Brasil** com fonte e trata o vazio global com a atribuição fraca da
Wikipédia. É uma lacuna de cobertura real: a Europa é o lugar onde uma regra apareceria primeiro, e
este mapa não a olhou.

**UCP — Universal Cart.** Anunciado no Google I/O 2026, seguindo o comprador por Search, Gemini,
YouTube e Gmail, com lançamento em Search e Gemini nos EUA no verão de 2026; trabalha em segundo
plano buscando ofertas e queda de preço. Veio de agregador e do blog.google, que **não abri**.
Usado apenas como exemplo de "emergente não disruptivo" na seção 3.8, sem número nem data no corpo.

**Alipay Agentic Commerce Trust Protocol (jan/2025) e IMDA Singapura (jan/2026).** Aparecem na
Wikipédia [F13] e são os dois indícios de que o eixo asiático tem substrato próprio. Não persegui.
Ligado diretamente ao viés de disponibilidade linguística confessado na seção 7.

**McKinsey (US$ 1 tri no B2C americano até 2030; US$ 3–5 tri global) e Adobe (+393% no Q1 2026;
conversão de tráfego de IA 42% melhor em março de 2026; receita por visita 37% acima).** Os números
da Adobe sobre conversão e receita por visita vieram **só de snippet de agregador** e não estão no
corpo do documento em nenhum lugar. Os que estão no corpo (+393%, McKinsey) estão atribuídos à
Wikipédia, que é onde os li. Registrado na seção 8, item 6.

**Shopify: tráfego referido por IA 8× e pedidos 13× no Q1 2026; 20% dos pedidos globais no fim de ano
de 2025 vindos de agentes (US$ 262 bi); varejistas com agente de marca crescendo 59% mais rápido;
projeção de 15–25% do e-commerce americano via agentes até 2030.** Todos de agregadores. **Nenhum
usado.** Se algum deles for verdadeiro na fonte original, o efeito `e1` ganha muita força e o
contra-argumento dos 28% da Salesforce enfraquece — o que faz desses números a verificação de maior
alavancagem para uma segunda rodada.

**Justt.ai e Chargeflow sobre o "chargeback liability gap".** Dois fornecedores de gestão de disputa
escrevendo sobre a lacuna de responsabilidade em comércio agêntico. Interesse comercial óbvio, e
ainda assim é o sinal de que `e5.2` (seguro/garantia como produto) já tem gente se posicionando.
Não abertos, não citados. Ficam como sinal fraco de segunda ordem sem fonte.

### 12.5 Efeitos removidos ou rebaixados durante a contestação

| Efeito | Destino | Motivo |
|---|---|---|
| "Reaparece o trading de alta frequência no varejo" (seria `e6.1.x`) | **Removido** | Nenhuma fonte sobre frequência de mudança de preço causada por agentes. O paper [F10] trata de nível, não de velocidade. Registrado como cadeia interrompida na seção 5. |
| "Agentes formam cartel de compra e negociam desconto coletivo" (seria `e6.x`) | **Removido** | Pura especulação. Não há sinal observável nenhum, em nenhuma fonte. |
| "Surge um banco central de agentes / moeda de máquina" (seria `e5.x`) | **Removido** | Extrapolação sensacionalista. Stablecoin em wallet de agente [F1, F8, F15] não sustenta isso nem de longe. |
| `e2.1.1` (valor de marca em atributos estruturados) | **Rebaixado** de `media` para `baixa` | Contestação da seção 7: se o agente apresenta finalistas para escolha humana, a vitrine volta e a marca continua operando por imagem. |
| `e6.1` (preço varia em frequência ilegível) | **Rebaixado** para `baixa` | Consequência direta do corte acima: sem evidência de frequência, o efeito é plausível e desamparado. |
| `e2.2` (fim do aprisionamento por fidelidade) | **Mantido em `media`, com contraevidência registrada** | O caso Duffel+Muse (12.4) sugere o contrário — agente que *otimiza* fidelidade. Não rebaixei porque não abri a fonte; um leitor que a abra deve rebaixar. É o efeito mais frágil da roda. |
| Disrupção candidata "busca conversacional como origem da jornada" | **Recusada como raiz** | Deslocamento de canal, com humano decidindo. Pertence ao tema 4 da disciplina. |
| Disrupção candidata "agentes negociando em mercado financeiro" | **Recusada como raiz** | Evidência de resultado não verificável (12.4); mercados simulados são o tema 6. Sobrevive só como `e6`, com confiança média. |
| Disrupção candidata "Instant Checkout / Universal Cart" | **Recusada como raiz** | Não consigo nomear a relação que rompe. É melhoria. Régua da disciplina. |

### 12.6 Limitações do trabalho

1. **Doze das dezoito fontes têm interesse comercial no tema.** Declarado na seção 7 e anotado fonte
   a fonte na seção 11. É a limitação dominante.
2. **Quatro fontes que importavam não abriram** (12.3), incluindo a fonte primária da OpenAI sobre
   o próprio Instant Checkout.
3. **Nenhuma fonte chinesa**, num tema em que o panorama neutro afirma que a China lidera a
   implementação [F13].
4. **Nenhuma fonte europeia primária**, num tema em que a Europa é o lugar mais provável da primeira
   regra.
5. **Nenhum dado da Adobe ou da McKinsey foi lido no original** (seção 8, item 6).
6. **Nenhum número de Nof1/Alpha Arena foi verificado**, e por isso o eixo de mercados financeiros
   está sub-representado neste mapa em relação ao que o enunciado do tema sugeria (12.4).
7. **Os prazos de terceira ordem não são previsões.** Estão graduados em `baixa`/`media` de
   confiança e a maioria cai fora do horizonte de 2031, o que é a resposta honesta e não um defeito
   de preenchimento.
8. **A entrevista obrigatória da skill não foi cumprida como especificada** (12.1), por ausência de
   usuário. Nenhum campo foi inventado, mas nenhum foi confirmado por quem os forneceu.
9. **Este documento não afirma eficácia de nada.** Que o protocolo existe [F2, F5, F14, F1] não é
   evidência de que agentes compram bem — e a evidência disponível diz o contrário [F17, F12]. A
   assimetria entre maturidade do substrato e imaturidade do agente é o achado central e está no
   resumo.
