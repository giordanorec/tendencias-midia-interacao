---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2041
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 12
efeitos_ordem_2: 24
efeitos_ordem_3: 24
tecnologias_citadas: [x402, HTTP 402, Agentic Commerce Protocol, AP2, Machine Payments Protocol, Model Context Protocol, Trusted Agent Protocol, Verifiable Intent, Agentic Mobile Protocol, Know Your Agent, ERC-8004, llms.txt, agents.txt, Cloudflare Pay Per Crawl, Cloudflare pay-per-answer, AI Crawl Control, USDC, Base, Polygon, Solana, Stellar, Hyperliquid, Polymarket, Kalshi, Pix, Pix Biometria, Open Finance, FIDO2, IATA NDC, Skyfire KYAPay, Nekuda Mandates SDK, Payman, Stripe Agent Toolkit, GENIUS Act, Instant Checkout, agent.market, HireForHumans, FABRIC Protocol]
fontes: 30
confianca: media
experimento: "O balcão que não se deixa convencer — um catálogo publicado em duas camadas (persuasão para humano, registro para máquina) contra um agente de orçamento fechado, para medir onde a manipulação ainda entra"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Em setembro de 2026 o agente que paga já tem trilho, identidade e jurisprudência: o x402
acumula mais de 100 milhões de transações na Base, a Cloudflare passou de cobrar por rastreio a
pagar por citação, Ant, Visa e Mastercard acordaram um padrão comum de identidade de agente
(KYA) em 10 de setembro, e o Nono Circuito decidiu em agosto que quem acessa a Amazon pelo
agente é o usuário, não a empresa do agente. O que ainda não tem é demanda de gente: o comércio
real sobre x402 roda a cerca de US$ 28 mil por dia com metade da atividade classificada como
artificial, o Instant Checkout do ChatGPT foi recuado em março com 12 de mais de um milhão de
lojistas integrados e conversão três vezes pior que o site do Walmart, e apenas 10% dos
consumidores brasileiros aceitariam que a IA comprasse sem nenhuma intervenção humana. Este
mapa não aposta no botão de comprar. Ele sustenta que até 2041 três rupturas distintas fazem o
trabalho: **o pagamento deixa de ser um evento e vira parâmetro contínuo da requisição**, o que
faz o preço descer para dentro do protocolo e torna vendável o que era barato demais para ter
preço; **a decisão de compra é delegada a um processo que não é persuadível**, o que tira o
objeto do ofício de conversão e parte a página de produto em duas — uma superfície para o olho e
um registro que decide a venda; e **a máquina vira contraparte com patrimônio**, que ganha,
arrisca, perde e precisa responder, o que faz nascer reputação portátil, seguro de erro de
agente e trabalho humano contratado por software. Para quem projeta mídia e interação, a
consequência de 2041 não é uma tela nova: é que a persuasão muda de leitor, a interface passa a
exibir orçamento em vez de opções, e a competência escassa deixa de ser convencer e passa a ser
escrever a restrição.

## 2. O tema

Um agente que pode pagar é uma coisa diferente de um agente que pode ler. Ler é reversível;
pagar não é. O tema deste mapa é o instante em que o software deixa de recomendar e passa a ser
parte contratante — escolhe, paga, e por consequência tem de responder por isso.

Isso encosta em mídia e interação por três lugares, e nenhum deles é o checkout. O primeiro é a
**persuasão**: quase tudo que uma pessoa aprende num curso de publicidade, de design de
interface ou de escrita comercial existe para mover um ser humano diante de uma tela. Se o
leitor da página de produto passa a ser um parser, o objeto do ofício some e reaparece em outro
lugar. O segundo é a **economia do conteúdo**: micropagamento foi tentado e fracassou desde
1996 porque o custo mental de decidir pagar US$ 0,05 era maior que os US$ 0,05; uma máquina não
tem custo mental, e isso destrava um modelo de negócio que morreu cinco vezes. O terceiro é a
**interação**: quando cada pergunta tem preço e cada busca consome orçamento, a tela deixa de
oferecer alternativas e passa a oferecer um saldo.

Merece mapa de futuro, e não levantamento de estado da arte, por uma razão simples: o estado da
arte de 2026 é contraditório de um jeito que não se resolve lendo mais. A infraestrutura está
construída e vazia. Os protocolos são seis e concorrentes. Os modelos que operaram dinheiro real
perderam dinheiro real. As bandeiras projetam de três a cinco trilhões de dólares até 2030 em
press release próprio, sem fonte independente, no mesmo ano em que o Gartner projeta que mais de
40% dos projetos agênticos serão cancelados até 2027. Um levantamento registra as duas coisas.
Só um mapa causal diz o que decide entre elas.

### Premissas assumidas nesta rodada

O briefing veio completo (horizonte, público, recorte, descarte, viés, falseador), então não há
rebaixamento de confiança por entrevista pulada. O que o briefing não cobriu e foi assumido aqui:

- **Profundidade fixa em três ordens**, como manda o formato da disciplina — mesmo quando a
  cadeia causal claramente continua (anotado na §12).
- **Modo a partir do tema, não do setor**: os efeitos são derivados da ruptura, não de uma
  indústria. Quando um setor aparece (viagens, varejo, imprensa), é como caso, não como recorte.
- **A régua do descartado** — "o que já é comum em produto de massa" — foi aplicada literalmente,
  e derrubou três candidatos a raiz que aparecem na §4 com o motivo da recusa.
- **"Global, com uma nota sobre o Brasil"** foi lido como: a roda é global; o Brasil entra onde
  o trilho nacional muda o resultado (Pix, Open Finance, CDC), e está marcado quando entra.

## 3. Onde isso está hoje

Âncora feita em 12/09/2026 com acesso à web. Trinta fontes abertas e lidas; a lista está na §11,
e o que não abriu está declarado na §12.

### O que já existe e funciona

**O trilho de pagamento máquina-a-máquina existe e roda.** O x402 — que revive o código HTTP 402,
reservado e sem uso desde 1997 — passou de quase zero em meados de 2025 para mais de 100 milhões
de transações acumuladas na Base até o primeiro trimestre de 2026, segundo a Chainalysis; o
rastreador da Presenc registra cerca de 167 milhões de transações liquidadas e uma coalizão de
mais de vinte instituições por trás da fundação, incluindo Coinbase, Cloudflare, Stripe, AWS,
Google, Visa e Circle, com a Base respondendo por 85% das liquidações. A Chainalysis mede uma
mudança de composição relevante: transações acima de US$ 1 subiram de 49% para 95% do volume, e
a faixa de 10 centavos a um dólar desabou de 46% para 4% — ou seja, o nanopagamento, que era a
promessa, encolheu, e o que cresceu foi pagamento de tamanho normal.

**A cobrança já é executada na borda da rede, não no servidor.** A Cloudflare, presente em cerca
de uma em cada quatro páginas da web, lançou o Pay Per Crawl em 1º de julho de 2025 e, um ano
depois, anunciou a troca do modelo: em vez de cobrar por página buscada, pagar por citação. O
motivo declarado é medido — mais da metade do tráfego de rastreio gerado por bots consiste em
rebuscar páginas que não mudaram, e a razão entre rastreios e visitas encaminhadas chegou a
38.000 páginas por referência no caso de um dos rastreadores. Dois parceiros comerciais
nasceram já no modelo de pagar por consulta (Ceramic.ai e You.com).

**Os padrões de identidade e de mandato existem e são de quem manda no dinheiro.** Em 10 de
setembro de 2026, Ant International, Mastercard e Visa anunciaram um arcabouço comum de
Know Your Agent com três peças — rastreabilidade do operador entre redes, requisitos
compartilhados de certificação e monitoramento contínuo de transação — costurando o Trusted
Agent Protocol da Visa, o Verifiable Intent da Mastercard e o Agentic Mobile Protocol da Ant.
No nível do checkout e do mandato, a Crossmint documenta quatro protocolos vivos: ACP (OpenAI e
Stripe, setembro de 2025), AP2 (Google, mandatos assinados criptograficamente), x402 (Coinbase,
v2 em dezembro de 2025) e MPP (Stripe e Tempo, 18 de março de 2026, com mais de cem serviços
integrados no lançamento e um modelo de sessão em que o agente pré-autoriza um teto e transmite
micropagamentos).

**O lado do vendedor já reescreve o catálogo para ser lido por máquina.** No Fórum E-Commerce
Brasil de 2026, a Lojas Renner apresentou uma reestruturação de catálogo para leitura
algorítmica em milissegundos e relatou crescimento de 430% no tráfego vindo de LLMs; o número
apresentado para tráfego de agentes foi de 700% ao ano, com taxa de conversão de 31%. A mesma
lógica aparece no padrão aberto: o `llms.txt`, proposto em setembro de 2024, estava em mais de
844 mil sites no início de 2026.

**A jurisprudência começou a existir.** A Amazon processou a Perplexity em novembro de 2025,
obteve liminar em março de 2026 e a perdeu em agosto: o Nono Circuito entendeu que, quando o
usuário manda o assistente executar uma tarefa na Amazon.com, quem acessa é o usuário. A
consequência prática, como resume a eMarketer, é que a disputa migra do tribunal para o contrato
e para a detecção.

**No Brasil, o trilho agêntico nasceu regulado e com humano no fim.** A Iniciador lançou em 19
de maio de 2026 o primeiro MCP de pagamentos agênticos via Pix: o agente descobre e propõe, o
usuário confere valor e destinatário e autoriza por biometria FIDO2, o banco valida e o Pix
liquida em segundos — com o dado de pagamento gerado pela infraestrutura, não pelo agente. O
Pix respondeu por 44% do checkout brasileiro em 2026 contra 41% dos cartões, e o volume iniciado
via Open Finance cresceu 59% no ano.

**Máquinas já pagam as próprias contas, em escala de demonstração.** Em fevereiro de 2026, a
OpenMind e a Circle demonstraram um robô quadrúpede chamado Bits que se conecta a uma estação de
recarga e paga a eletricidade em USDC sem intervenção humana, usando um módulo x402 que
transfere valores a partir de US$ 0,000001, com identidade on-chain via FABRIC. Os nanopagamentos
entraram em testnet em 3 de março de 2026.

**Máquinas já contratam humanos.** O HireForHumans, protocolo na Polygon lançado em 15 de junho
de 2026, permite que agentes publiquem tarefas por CLI ou API, travem o pagamento em custódia de
contrato inteligente e liberem USDC em menos de um minuto quando o trabalho é verificado, com
taxa de rede de cerca de um centavo.

### O que existe e ainda não funciona

**A demanda de comércio real não apareceu.** A reportagem da CoinDesk de 11 de março de 2026 é
o dado mais desconfortável do mapa: o volume diário de pagamento real sobre x402 é de cerca de
US$ 28 mil, com ticket médio de US$ 0,20, e a análise da Artemis classifica aproximadamente
metade das transações como artificiais — autonegociação (mesma carteira comprando e vendendo) e
lavagem de volume (o vendedor financia a carteira do comprador, que devolve em seguida). O
diagnóstico do próprio time da Coinbase é de escassez de lojista, não de escassez de comprador:
processadores existentes têm dificuldade de credenciar serviços automatizados que não têm site,
nem pessoa jurídica, nem histórico.

**O comércio agêntico de consumidor recuou.** O Instant Checkout do ChatGPT foi anunciado em
setembro de 2025 e, na segunda semana de março de 2026, foi recuado para um modelo de aplicativos.
Os motivos relatados são operacionais, não ideológicos: conversão três vezes pior que o site
próprio, segundo o Walmart no Shoptalk 2026; cerca de doze lojistas efetivamente integrados de
mais de um milhão elegíveis; e problemas não resolvidos de recolhimento de imposto estadual,
sincronização de estoque em tempo real, fraude e devolução.

**A permissão do consumidor não acompanha a capacidade técnica.** A pesquisa da Conversion com a
ESPM, aplicada em 11 de março de 2026 com 400 consumidores brasileiros, mede 40% de aceitação de
que a IA compre por eles e 95% de preocupação com segurança e privacidade — 57,5% já usaram IA
para pesquisar produto, mas o salto para autorizar não é o mesmo. A Forkast compila o mesmo
padrão fora do Brasil: 75% dos consumidores desconfortáveis com decisão de pagamento autônoma
sem aprovação humana (Accenture), apenas 9% autorizariam compra acima de US$ 25 sem verificação
explícita (Usercentrics), apenas 23% confiam dados a IA generativa (índice da própria Visa).
Somente 10% aceitariam compra sem nenhuma intervenção humana.

**Máquinas com dinheiro perdem dinheiro.** É o achado que mais separa este mapa da narrativa
corrente. No Alpha Arena, seis modelos receberam US$ 10 mil reais cada em perpétuos na
Hyperliquid: o Qwen3 Max fechou em +22,3% e o DeepSeek V3.1 em +4,89%, mas o Claude Sonnet 4.5
fez −30,81%, o Grok 4 −45,3%, o Gemini 2.5 Pro −56,71% e o GPT-5 −62,66%. O Prediction Arena
(Arcada Labs e Harvard, 28 de março de 2026) é mais duro: seis modelos de fronteira com US$ 10
mil cada, de 12 de janeiro a 9 de março de 2026, perderam de 16,0% a 30,8% na Kalshi — média de
−22,6% — e fecharam a −1,1% em média na Polymarket. A conclusão dos autores é que o desenho da
plataforma domina o resultado, e que volume de pesquisa não se correlaciona com desempenho.

**Agentes que negociam entre si negociam mal, e de forma assimétrica.** O benchmark A2A-NT
(Zhu, Sun e colegas) põe um agente comprador contra um agente vendedor sobre um conjunto de 100
produtos em eletrônicos, veículos e imóveis, com GPT, Qwen-2.5 e DeepSeek: modelos mais fortes
ganham consistentemente nos dois papéis, o que torna a troca estruturalmente desequilibrada, com
diferenças de quase 9% entre o melhor e o pior resultado. O detalhe contraintuitivo: comprador
com orçamento folgado negocia menos e paga mais.

**Colusão entre agentes de precificação existe, mas é frágil.** Keppo, Li, Tsoukalas e Yuan
(primeira versão em 25/09/2025, publicada em 30/01/2026) rodaram jogos repetidos de Bertrand com
DeepSeek-R1 destilado: dois agentes simétricos e pacientes sustentam preço 22% acima do nível
competitivo; heterogeneidade de paciência derruba para 10%, assimetria de acesso a dado para 7%,
cinco concorrentes para 3%, e LLM contra Q-learning para 2%. O achado tem consequência de
política: diversidade de modelo é remédio antitruste.

### Quem constrói

Três camadas, com donos distintos e interesses que não coincidem. **Bandeiras e processadores**
(Visa, Mastercard, Ant, Stripe, American Express) constroem identidade, mandato e captura de
intercâmbio — querem que o agente pague pelo trilho deles. **Plataformas de borda e de modelo**
(Cloudflare, AWS, Google, OpenAI, Anthropic, Coinbase) constroem admissão, cobrança por
requisição e o próprio agente — querem que a decisão de "quem pode comprar aqui" passe por elas.
**Primitivas independentes** (Skyfire, Nekuda, Payman, Crossmint, Nevermined) constroem carteira
de agente, limite por agente e medição de chamada — e são candidatas visíveis a aquisição pelos
dois primeiros grupos. O quarto ator é o **varejista**, que não constrói: escolhe entre abrir o
catálogo (Renner) e fechar a porta (Amazon, que bloqueia 47 bots no robots.txt e cuja receita de
publicidade foi de US$ 19,8 bilhões só no segundo trimestre de 2026).

### Que número descreve a adoção

Não há um. Há quatro, e eles discordam — o que é, em si, a informação:

| Medida | Valor | Fonte, data |
|---|---|---|
| Transações x402 acumuladas | >100 milhões (Q1/2026); ~167 milhões liquidadas | Chainalysis; Presenc, 15/05/2026 |
| Comércio **real** sobre x402 | ~US$ 28 mil/dia, metade artificial | Artemis via CoinDesk, 11/03/2026 |
| Lojistas integrados ao Instant Checkout | ~12, de >1 milhão elegíveis | The Information via imprensa setorial, 03/2026 |
| Consumidores que aceitariam compra sem intervenção humana | 10% (BR, n=400) | Conversion/ESPM, 11/03/2026 |
| Carteiras da Polymarket usando agentes | >30% | LayerHub via CoinDesk, 15/03/2026 |
| Retorno de modelos de fronteira com capital real | −22,6% médio (Kalshi, 57 dias) | Prediction Arena, 28/03/2026 |

A leitura honesta: **a infraestrutura está em adoção precoce, o comércio agêntico de consumidor
está em produto de nicho, e a máquina como contraparte patrimonial está em demo pública.** As
três raízes da §4 herdam calibragens de confiança diferentes por causa disso.

## 4. As disrupções-raiz

Três raízes. Cada uma passou pelas quatro perguntas do critério de maturidade, respondidas em
uma linha, e cada uma tem um ator nomeado com incentivo para bloqueá-la. Antes delas, as
recusas — porque a recusa registrada vale tanto quanto a escolha.

### Candidatos recusados como raiz

- **Candidato "comércio eletrônico e pagamento online" recusado como raiz:** adoção em maioria
  desde os anos 2010; no Brasil, o Pix sozinho é 44% do checkout em 2026. Tratado como contexto
  na §3.
- **Candidato "comparador de preço" recusado como raiz:** 57,5% dos consumidores brasileiros já
  usam IA para pesquisar produto antes de comprar (Conversion/ESPM, 03/2026), e comparar preço é
  produto de massa desde os anos 2000. Entra como efeito, não como ruptura — e o teste da causa
  solta (§3.10) o derruba de qualquer modo: o consumidor comparando mais preços aconteceria com
  ou sem agente com carteira.
- **Candidato "o agente que recomenda" recusado como raiz:** cerca de 2% das perguntas ao ChatGPT
  são de compra, o que dá algo como cinquenta milhões de perguntas por dia sobre uma base de
  centenas de milhões de usuários semanais (Modern Retail). Recomendar em escala de massa é a
  situação de 2026, não a ruptura. O que rompe é **fechar** — e por isso a raiz R2 é sobre a
  delegação da decisão, não sobre a recomendação.

---

### R1 — O pagamento deixa de ser um evento e vira um parâmetro contínuo da requisição

Até aqui, pagar foi sempre um ato discreto, com começo, meio e fim, desenhado para caber na
atenção de uma pessoa: um carrinho, um botão, uma confirmação. O que o x402 e o MPP fazem é
outra coisa — dissolver o pagamento dentro do próprio protocolo de transporte, de modo que uma
requisição HTTP carregue o preço como carrega o cabeçalho, e uma sessão transmita micropagamentos
contra um teto pré-autorizado.

**1. O que ela rompe.** Rompe o piso de preço. Tudo que custava menos que o custo de cobrar era,
por definição, grátis — e por isso financiado por anúncio, por assinatura ou por subsídio
cruzado. Com liquidação a partir de US$ 0,000001 e taxa de rede na casa do décimo de milésimo de
dólar, a classe inteira de bens "baratos demais para ter preço" deixa de existir. Isso não é
fazer o mesmo mais barato: é tornar vendável o que não era vendível, e portanto desmontar o
modelo de negócio que existia por causa da impossibilidade.

**2. Por que agora, e não há cinco anos.** Três pré-condições chegaram juntas entre 2025 e 2026 e
nenhuma existia em 2021: liquidação em stablecoin com custo por transferência abaixo de um
milésimo de centavo; execução na borda por quem já está na frente de um quarto da web (a
Cloudflare envia respostas 402 em produção, e AWS e Google entraram na fundação do x402); e
licenciamento — a GENIUS Act, promulgada em julho de 2025, com vigência esperada para 18 de
janeiro de 2027, que transforma emissor de stablecoin em entidade licenciada e, portanto,
credenciável por um banco. Sem a terceira, nenhum lojista sério aceitaria receber.

**3. Onde está na difusão.** **Adoção precoce**, com um asterisco grande. Os números de
transação são de adoção precoce (mais de 100 milhões acumuladas); os números de comércio são de
laboratório (US$ 28 mil/dia, metade artificial). A raiz entra como emergente, mas toda a cadeia
que depende de **volume de comércio de consumidor** herda confiança média ou baixa.

**4. O que ainda falta acontecer.** Falta lojista — o gargalo declarado pela própria Coinbase é
credenciamento de vendedor automatizado sem pessoa jurídica. Falta resolver o compliance de
valores pequenos: monitorar milhares de pagamentos-máquina abaixo do limiar de reporte é
exatamente o que a GENIUS Act obriga e ninguém sabe fazer barato. E falta a inversão de
composição parar: enquanto o nanopagamento encolhe (de 46% para 4% do volume) e o pagamento de
tamanho normal cresce, o trilho está sendo usado para o que o cartão já fazia.

**Quem bloqueia, e o efeito disso.** Duas classes. A **Amazon**, que bloqueia agentes externos
para proteger uma receita de publicidade de quase vinte bilhões de dólares por trimestre — e
cujo instrumento, depois de agosto de 2026, é contrato e detecção, não lei. E as **próprias
bandeiras**, que perdem intercâmbio se o valor migrar para liquidação em stablecoin: por isso
elas constroem KYA e mandato tokenizado, que são o jeito de manter o agente dentro do trilho de
cartão. O efeito da segunda é o mais importante do mapa: **a captura do agente pelo trilho
antigo é mais provável que a substituição do trilho.**

---

### R2 — A decisão de compra é delegada a um processo que não é persuadível

Esta é a raiz que interessa diretamente a quem projeta mídia e interação, e é a que o mapa
precisa tratar com mais desconfiança, justamente por isso (ver §7.6).

O ponto não é que uma máquina compre. É que **o destinatário da persuasão muda de espécie**.
Uma fotografia bem iluminada, uma prova social, um contador de escassez, uma hierarquia visual —
todo o repertório acumulado desde o catálogo dos Correios até o teste A/B — opera sobre atenção,
emoção e viés cognitivo humanos. Um processo que lê um feed estruturado não tem nenhum dos três.

**1. O que ela rompe.** Rompe o ofício de conversão e, com ele, a suposição de que a interface é
o lugar onde a venda acontece. Se o que decide é a completude e a veracidade do atributo no
registro legível por máquina, a página vira vitrine de marca, não instrumento de venda — e o
orçamento que ia para conversão migra para dado. Não é "vender melhor": é vender para outro
leitor, com outra gramática.

**2. Por que agora, e não há cinco anos.** Porque o vendedor começou a se reorganizar, e isso é
observável: a Renner reestruturou catálogo para leitura algorítmica em milissegundos e reporta
430% de crescimento de tráfego de LLM; o `llms.txt` saiu de proposta (setembro de 2024) para mais
de 844 mil sites em 2026; o ChatGPT Merchant Program e as vitrines agênticas do Shopify exigem
feed de produto. Em 2021 não havia leitor de máquina com poder de compra, e portanto não havia
motivo para reescrever o catálogo. A pesquisa de Sabbah e Acar publicada pela Harvard Business
Review em 12 de maio de 2026 nomeia o problema para o público de marketing: marketing tradicional
não funciona em agente de compra.

**3. Onde está na difusão.** **Produto de nicho entrando em adoção precoce**, e desigual por
vertical. Em viagens, os agentes já buscam mas ainda entregam a compra a uma interface humana —
"planejamento em linguagem natural funcionou bem para inspiração, completar a reserva ainda
exigiu transferência", registra o levantamento de comércio agêntico em viagens. Em varejo de
moda, há teste com base selecionada (a IA "Rê", da Renner). Em conteúdo, a Cloudflare já opera.

**4. O que ainda falta acontecer.** Falta permissão. Este é o item que segura a raiz inteira: 10%
de aceitação para compra sem intervenção humana, 9% para compra acima de US$ 25 sem verificação
explícita. Falta padronização do registro: o NDC da IATA foi publicado em 2012 e em 2026 cada
companhia implementa um esquema diferente — quatorze anos e contando. E falta resolver o custo
de responder, que é o efeito e6.

**Quem bloqueia, e o efeito disso.** A **indústria de publicidade e as plataformas cuja receita é
atenção**. O movimento delas não é impedir o agente: é transformar a superfície do agente em
inventário. A Cloudflare bloqueia, desde 15 de setembro de 2026, rastreador de uso misto em
qualquer página que hospede anúncio — isto é, o conflito entre o modelo de anúncio e o modelo de
acesso pago já está escrito em configuração padrão. O efeito é e7.2: a publicidade não morre,
muda de leitor e fica ilegível para o consumidor.

---

### R3 — A máquina vira contraparte com patrimônio: ganha, arrisca, perde e responde

A raiz mais especulativa do mapa, e declarada como tal. Não se trata de um agente gastando o
dinheiro do dono com um cartão tokenizado — isso é R1 e R2. Trata-se de um processo que **detém
saldo**, aufere receita, assume risco e precisa ter contra quem se cobrar quando erra.

**1. O que ela rompe.** Rompe a suposição, embutida em todo o direito comercial, de que todo
agente econômico é uma pessoa (natural ou jurídica) com patrimônio penhorável e vontade
imputável. Responsabilidade civil, crédito, seguro, tributação e falência são construções sobre
essa suposição. Um robô que paga a própria eletricidade e um protocolo que paga humanos em
custódia automática não são "compra mais rápida": são um participante econômico sem assento na
categoria.

**2. Por que agora, e não há cinco anos.** Porque as primitivas de identidade e reputação
chegaram em 2026 e não existiam antes: KYA em 10 de setembro, TAP e Verifiable Intent antes
disso, ERC-8004 e um Internet-Draft do IETF sobre pontuação de confiança para pagamento de agente
autônomo em março. E porque apareceram os dois artefatos físicos: o robô Bits pagando eletricidade
em USDC (fevereiro de 2026) e o HireForHumans liquidando trabalho humano em USDC na Polygon
(junho de 2026). Em 2021 não havia nem identidade de agente nem liquidação barata o bastante para
uma máquina ter fluxo de caixa.

**3. Onde está na difusão.** **Demo pública**, no máximo. O HireForHumans estava em pré-lançamento
em junho de 2026; a demonstração da OpenMind é uma demonstração. **Por isso toda a cadeia de R3
sai com confiança baixa ou média, e nenhum efeito dela é "alta"** — exceto o de retroação, que é
sobre fracasso, não sobre sucesso, e tem evidência forte.

**4. O que ainda falta acontecer.** Falta a figura jurídica ou um substituto durável. O framework
de responsabilidade agêntica de Yiheng Yao (junho de 2026) conclui que a perda cai sobre quem
teve controle prático sobre a decisão ou sobre o desenho — o que é uma resposta, mas é a resposta
que mantém a máquina fora da cena. Falta o mecanismo de disputa: o KYA resolve identidade e,
como aponta a crítica da Forkast, não resolve recurso. E falta o seguro sair da exceção: existem
Munich Re (aiSure), Armilla e Testudo, e existe uma exclusão de formulário padrão do ISO para
dano atribuível a IA generativa — os dois lados da mesma pergunta, ainda em aberto.

**Quem bloqueia, e o efeito disso.** As **seguradoras e os reguladores**, por omissão e por
exclusão. Se a apólice exclui, o operador não opera; se a apólice cobre, ela passa a definir na
prática o que o agente pode fazer — e é aí que está o efeito e10.2.1: **a seguradora regula onde o
legislador não chegou.** No Brasil, o mecanismo é diferente e mais rápido: a responsabilidade
objetiva do fornecedor no CDC já alcança quem colocou o agente no atendimento, e o projeto de lei
de IA em discussão remete a responsabilidade civil de volta ao Código Civil e ao próprio CDC, sem
criar regra nova.

---

### Teste de independência das raízes

O §6.4 exige perguntar o que sobra se cada raiz não acontecer. Feito, com resultado:

- **Se R1 não se concretizar** (o pagamento continua sendo evento, no trilho de cartão
  tokenizado): R2 sobrevive quase intacta — o agente continua fechando compra por ACP/AP2 e o
  catálogo continua sendo reescrito para máquina. R3 perde a perna do fluxo de caixa próprio.
  Morre a parte de micropreço de conteúdo e compute (e1, e1.1, e1.2).
- **Se R2 não se concretizar** (a persuasão continua funcionando porque o agente permanece
  assessor e o humano continua clicando): R1 sobrevive inteira no lado máquina-a-máquina — é o
  cenário e3.2, em que o micropagamento vive onde o comprador já é máquina. R3 sobrevive.
  Morre quase toda a consequência para mídia e interação, que é o motivo deste mapa existir.
- **Se R3 não se concretizar** (nunca há patrimônio de máquina; sempre há uma conta humana
  atrás): R1 e R2 seguem inteiras. Morrem e9 a e12.

Nenhuma raiz é outra disfarçada. A dependência que existe é de **prazo**, não de existência: R3
chega depois porque precisa das primitivas de identidade que R1 está construindo.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O pagamento deixa de ser um evento e vira um parâmetro contínuo da requisição
    efeitos:
      - id: e1
        ordem: 1
        efeito: A unidade de cobrança deixa de ser o produto e passa a ser a chamada, e o preço desce para dentro do protocolo
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A assinatura de conteúdo perde o subsídio cruzado, porque quem paga por acesso avulso deixa de financiar a redação inteira
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Veículos publicam dois artefatos do mesmo apuramento com preços distintos, a página para o humano e o registro citável pela máquina
                sinal: fraco
                prazo: 2038
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Apuração cara e pouco citada deixa de se pagar por acesso e migra para financiamento fora do mercado de leitura
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Serviços baratos demais para ter preço em 2026 passam a ter preço, porque o custo de cobrar cai abaixo do valor cobrado
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A interface de mídia passa a exibir orçamento em vez de opções, porque cada pergunta do usuário tem custo atribuível
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: O CPM deixa de ser o piso do conteúdo, porque quem vive de anúncio programático passa a competir com quem vende acesso a máquina
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: Publicações de cauda longa fecham ou viram fornecedoras de dado sob contrato, por não terem volume de citação que sustente preço por acesso
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A borda da rede passa a ser o ponto onde o pagamento é cobrado e o comprador é admitido, e não o servidor de origem
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A decisão comercial de quem pode comprar sai do lojista e vai para quem opera a borda
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O conflito entre lojista e operador de agente vira disputa de contrato e de detecção, porque a via de acesso indevido não sustentou o bloqueio
                sinal: medio
                prazo: 2034
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Sites que não pagam por uma borda certificada ficam invisíveis para agentes, e a barreira de entrada da web sobe
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A web passa a ter duas populações, o que o humano acha e o que o agente pode comprar, e a segunda é menor
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A demanda real não chega no prazo da infraestrutura e parte da pilha de pagamento agêntico é desmontada
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Sobram dois ou três trilhos por região, em vez dos seis protocolos concorrentes de 2026
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A portabilidade do agente entre países vira problema de conformidade e não de produto, porque cada região consolidou num trilho diferente
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O micropagamento sobrevive onde o comprador já é máquina, em compute, dado e API, e não onde o comprador é pessoa
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Quem projeta interação para consumidor final continua projetando checkout, e o comércio agêntico vira assunto de retaguarda
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O custo de conformidade do pagamento-máquina sobe com o licenciamento de stablecoin e empurra a liquidação para dentro de operadores certificados
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Carteira de agente passa a exigir operador identificado, e o agente anônimo perde acesso aos trilhos com liquidez
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Agentes de código aberto rodando na máquina da própria pessoa ficam fora da economia agêntica, salvo por intermediário pago
                sinal: fraco
                prazo: 2036
                confianca: baixa
  - disrupcao: A decisão de compra é delegada a um processo que não é persuadível
    efeitos:
      - id: e5
        ordem: 1
        efeito: A página de produto se parte em duas, e é o registro legível por máquina que decide a venda
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O ofício de conversão perde o objeto, e a disputa migra de persuasão para completude e veracidade de atributo
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Nasce o adversarial de atributo, descrição escrita para enganar o parser e não o olho, e com ele um mercado de auditoria de catálogo
                sinal: fraco
                prazo: 2035
                confianca: baixa
              - id: e5.1.2
                ordem: 3
                efeito: Fotografia e vídeo de produto deixam de ser custo obrigatório de venda e viram investimento de marca
                sinal: fraco
                prazo: 2037
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Marca passa a ser garantia contratual legível em prazo, devolução e taxa de defeito, porque é isso que o agente consegue comparar
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Entrante sem série histórica não consegue preço, e abrir loja fica mais caro em 2041 do que era em 2026
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O volume de consulta explode e responder deixa de ser grátis para quem tem inventário
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Buscar vira produto com preço, e o agente do consumidor passa a operar sob orçamento de pesquisa
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Quanto vale continuar procurando se torna a principal decisão de design da interface de compra, no lugar de como convencer
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: O custo energético do pedido agêntico entra na conta do vendedor, e o preço por consulta nasce como contenção antes de nascer como receita
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Cotas de busca por agente viram norma de plataforma, com o efeito colateral de congelar a comparação de preço que justificava o agente
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Quem vende desliga o agente, e bloqueio, cota e tarifa para tráfego de máquina viram configuração padrão de loja
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O melhor preço do mercado passa a significar o melhor preço entre os parceiros comerciais do meu agente
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A comparação de preço deixa de ser serviço ao consumidor e vira posição de negociação vendida ao lojista
                sinal: fraco
                prazo: 2035
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A superfície do agente vira inventário de anúncio, porque é ali que a atenção agora de máquina se concentra
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Publicidade dirigida a agente é escrita em formato de dado, e a fronteira entre anúncio e atributo de catálogo deixa de ser legível pelo consumidor
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A permissão humana não acompanha a capacidade técnica, e o agente fica preso no papel de assistente que prepara a compra sem fechá-la
        sinal: forte
        prazo: 2031
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O desenho da interação passa a girar em torno do momento de autorizar, e não do de escolher
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: A autorização vira o novo ponto de manipulação, e a interface que apressa o aprovar substitui a que apressava o comprar
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Quem não consegue autenticar por biometria, documento ou vínculo bancário fica fora do comércio agêntico mesmo tendo o agente
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: No Brasil a exigência de biometria e de vínculo bancário no fim do fluxo reproduz no comércio agêntico a exclusão que o Pix havia reduzido
                sinal: fraco
                prazo: 2037
                confianca: baixa
  - disrupcao: A máquina vira contraparte com patrimônio, que ganha, arrisca, perde e responde
    efeitos:
      - id: e9
        ordem: 1
        efeito: Máquinas passam a pagar as próprias contas operacionais de energia, compute e dado sem passar por caixa humano a cada item
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Equipamento físico deixa de ser ativo passivo e vira centro de custo autônomo com orçamento próprio
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O contrato de locação de equipamento passa a incluir a carteira, e de quem é o saldo do robô vira cláusula padrão
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: A contabilidade ganha uma linha que não existia, a despesa iniciada por processo sem aprovador humano nomeado
            sinal: fraco
            prazo: 2035
            confianca: baixa
      - id: e10
        ordem: 1
        efeito: Nasce reputação portátil de agente, e o histórico da máquina passa a ter preço
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Agente com histórico curto paga mais caro pelo mesmo serviço, exatamente como cliente sem pontuação de crédito
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A reputação vira ativo transferível e surge o mercado de agente com histórico, e a fraude correspondente
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: O seguro de erro de agente sai da exceção e vira item de custo de operar qualquer agente que gaste
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A apólice passa a definir na prática o que um agente pode fazer, e a seguradora regula onde o legislador não chegou
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: Máquinas com dinheiro perdem dinheiro, e a evidência pública de prejuízo trava a delegação
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O mandato do agente passa a ser escrito em limites duros de teto, destinatário e janela, e não em objetivo
            sinal: forte
            prazo: 2031
            confianca: alta
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: Projetar agente de compra vira projetar restrição, e a competência escassa deixa de ser o modelo e passa a ser o contrato
                sinal: medio
                prazo: 2034
                confianca: media
          - id: e11.2
            ordem: 2
            efeito: A responsabilidade estaciona em quem implantou o agente, e não em quem o construiu
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Empresas pequenas deixam de operar agente com carteira própria e alugam o de um operador que absorve o risco
                sinal: fraco
                prazo: 2036
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: Máquina contrata humano e paga, invertendo a direção do trabalho pago
        sinal: medio
        prazo: 2034
        confianca: baixa
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: Surge trabalho humano especificado por máquina, de tarefa curta, verificável e remunerada por liquidação automática
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A negociação salarial some nessa faixa de trabalho, porque o preço é parâmetro do contrato e não resultado de conversa
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: O trabalho de julgamento humano vira insumo comprado por interface de programação, com a precarização que acompanha a tarefa avulsa
            sinal: fraco
            prazo: 2038
            confianca: baixa
```

### Os mecanismos, que o bloco não cabe

O bloco YAML diz **o quê**. Esta prosa diz **por quê** — e é aqui que cada efeito ou passa no
teste do §3 da skill, ou não deveria estar ali.

**R1, e1 → e1.1 → e1.1.1/e1.1.2.** A cadeia é: porque o custo de cobrar cai abaixo do valor
cobrado, o vendedor de conteúdo ganha um preço por acesso; porque existe preço por acesso, quem
consome pouco deixa de subsidiar quem consome muito; porque o subsídio cruzado é o que financia
apuração cara e pouco lida, ela perde a fonte. O elo fraco, e está marcado, é o primeiro: a
Cloudflare já trocou pagar-por-rastreio por pagar-por-citação, mas a base instalada de assinatura
é enorme e não se desmonta por existir alternativa. **Classe de referência:** micropagamento de
conteúdo foi tentado desde 1996 (DigiCash, Millicent, BitPass, Flattr) e em trinta anos nunca
saiu de nicho. Essa é a referência mais pessimista do mapa e é a que manda: por isso e1.1 está em
2034 e não em 2031, e e1.1.2 em 2040 — dentro da janela, mas no fim dela.

**R1, e1.2 → e1.2.1.** Porque cada chamada tem preço, quem projeta interface passa a ter custo
marginal por pergunta do usuário; porque tem custo marginal, a interface precisa mostrar quanto
resta. Este é o efeito mais diretamente acionável para o público deste mapa e o teste de
especificidade o sustenta: trocar a raiz por "modelos melhores" ou "web para agentes" não produz
"a interface exibe orçamento" — só produz isso uma raiz em que **pagar é contínuo**.
**Classe de referência:** dados móveis pré-pagos, de plano ilimitado a franquia visível, levaram
cerca de seis anos no Brasil — daí 2035 para o efeito de terceira ordem.

**R1, e2 → e2.1 → e2.1.1.** Porque a cobrança é executada na borda por quem já intermedia um
quarto da web, quem opera a borda decide quem é agente admissível; porque o lojista perde essa
decisão, a briga muda de foro. O elo final tem artefato datado: a decisão do Nono Circuito de
agosto de 2026 tirou a via de acesso indevido das mãos da Amazon, o que **força** o conflito para
contrato e detecção. Sinal médio para um efeito de terceira ordem é incomum e está declarado.

**R1, e3.** É o efeito de retroação da primeira raiz, e é o mais bem sustentado do mapa inteiro:
US$ 28 mil por dia de comércio real com metade artificial, doze lojistas integrados de um milhão,
recuo do Instant Checkout em março de 2026. **Classe de referência:** o NFC em pagamento levou
de 2011 (Google Wallet) a cerca de 2019 para virar hábito — oito anos de infraestrutura pronta e
vazia. Oito anos a partir de 2026 dá 2034 para consolidação (e3.1) e 2029 para a desmontagem da
parte que não achou demanda.

**R2, e5 → e5.1 → e5.1.1/e5.1.2.** Porque o agente lê o registro e não a página, o investimento
migra de persuasão para atributo; porque o atributo decide, aparece quem escreve atributo para
enganar o leitor-máquina; e porque a foto deixa de converter, ela deixa de ser custo obrigatório.
O segundo neto (e5.1.2) é o que mais interessa a quem projeta: **a imagem não desaparece, muda de
função** — deixa de ser instrumento de venda e vira instrumento de marca, que é uma economia
diferente, com outro orçamento e outro cliente interno. **Classe de referência:** a migração da
vitrine física para a página de produto levou cerca de dez anos (1999–2009); a mesma ordem de
grandeza a partir de 2026 dá 2035–2037.

**R2, e6 → e6.2 → e6.2.1.** Este efeito foi reescrito no §7 porque a primeira versão era
extrapolação linear ("o consumo de energia da IA cresce"). O mecanismo de não-linearidade é o
argumento de demanda elástica: como registra Mytton, se a inferência barateia e a demanda é
elástica, o consumo total sobe mesmo com a energia por tarefa caindo — e a redução de 75% de custo
de um modelo não reduziu consumo, aumentou uso. Somado ao dado de que um agente de código
devolveu 881.076 combinações de tarifa para **uma** viagem, o resultado é que o vendedor paga
para ser pesquisado. O preço por consulta, então, nasce como **contenção** e só depois vira
receita — e é por isso que e6.2.1 (cotas) existe e congela a própria comparação que justificava o
agente.

**R2, e7 → e7.2 → e7.2.1.** Porque o vendedor bloqueia ou cobra, o intermediário de agente vira
o gargalo comercial; porque ele é o gargalo, ele vende posição; porque a posição é vendida dentro
de um feed de dados, o anúncio deixa de ter a marcação visual que o consumidor aprendeu a
reconhecer em trinta anos de web. **Este é o efeito com maior consequência para a formação de
quem projeta mídia**, e o mapa o coloca em terceira ordem com confiança baixa deliberadamente:
é inferência, não observação.

**R2, e8 → e8.1 → e8.1.1.** Porque a permissão não chega, o agente para antes de fechar; porque
ele para antes de fechar, o momento decisivo da interação passa a ser a autorização; porque a
autorização é o momento decisivo, é para lá que migram os padrões escuros. O desenho do Pix
agêntico brasileiro já materializa o segundo elo: o fluxo termina numa biometria FIDO2 sobre um
dado de pagamento gerado pela infraestrutura e não pelo agente. **Classe de referência:** a
autenticação de dois fatores levou cerca de oito anos do disponível ao habitual — daí 2033.

**R2, e8.2 → e8.2.1 — a nota sobre o Brasil.** O Pix reduziu exclusão financeira porque exigia
pouco: uma chave. O comércio agêntico, no desenho de 2026, exige mais — biometria, dispositivo
capaz, vínculo bancário com instituição integrada ao Open Finance. Isso não é uma previsão
sombria; é a leitura direta do fluxo descrito pela Iniciador, que cobre mais de 95% dos adultos
**bancarizados**. Quem está fora da bancarização está fora duas vezes.

**R3, e9 → e9.1 → e9.1.1.** Porque a máquina liquida sozinha valores minúsculos, ela pode manter
um saldo operacional; porque mantém saldo, o equipamento vira centro de custo; porque vira centro
de custo, o contrato de locação precisa dizer de quem é o saldo. Um artefato só (o robô Bits,
fevereiro de 2026) — por isso sinal médio na primeira ordem e fraco depois.

**R3, e11 → e11.1 → e11.1.1.** É a retroação da terceira raiz e o achado mais útil para a turma.
Porque agentes com dinheiro real perdem dinheiro real de forma pública e medida (−22,6% médio na
Kalshi em 57 dias; quatro de seis modelos no vermelho no Alpha Arena, um deles a −62,66%), quem
delega escreve mandato em **limite duro** e não em objetivo; e porque o mandato é a peça que
determina o comportamento, projetar agente de compra passa a ser projetar restrição. É o único
lugar do mapa onde um efeito de segunda ordem tem confiança **alta**, e a justificativa é que ele
já está construído: Skyfire com teto por agente, Nekuda com SDK de mandato, AP2 com mandato
assinado, Pix agêntico com humano no fim. **Classe de referência:** cartão corporativo com regra
de gasto — do produto ao padrão, cerca de cinco anos; daí 2031.

**R3, e12 → e12.1 → e12.1.1.** Porque a máquina tem saldo e custódia automática, ela pode comprar
trabalho humano; porque compra tarefa curta e verificável, o preço é parâmetro do contrato; porque
é parâmetro, não há negociação. Dois artefatos, ambos frágeis: o HireForHumans em pré-lançamento
em junho de 2026 e uma segunda plataforma cujos números **não consegui abrir** (declarado na §12).
Confiança baixa já na primeira ordem, o que é raro e proposital.

### Cobertura STEEP e quem perde

| Dimensão | Onde aparece | Observação |
|---|---|---|
| **Social** | e8, e8.1, e8.1.1, e8.2, e8.2.1, e12.2 | O eixo mais forte do mapa depois do econômico; é onde mora a nota sobre o Brasil. |
| **Tecnológico** | e1, e2, e5, e6, e9, e10 | — |
| **Econômico** | e1.1, e1.2, e1.3, e3, e5.2, e7.1, e10.1, e12 | — |
| **Ecológico** | e6.2, e6.2.1 | **Cobertura fina, e declarada.** Só uma cadeia, e ela entra pelo custo, não pelo impacto: não achei medição confiável de energia por transação agêntica de comércio, só de inferência em geral. Registrado na §12 como busca que não deu em nada. |
| **Político/regulatório** | e2.1.1, e3.1.1, e4, e4.1, e10.2, e10.2.1, e11.2 | Nenhum deles em forma genérica: cada um tem ator (Nono Circuito, GENIUS Act, seguradora, CDC) e mecanismo. |

**Quem perde**, nomeadamente: veículos de cauda longa e afiliados (e1.3, e1.3.1); sites sem borda
paga (e2.2, e2.2.1); lojistas entrantes sem histórico (e5.2.1); o ofício de conversão (e5.1);
criadores que viviam de comissão por clique — as referências do Google a publicadores caíram 33%
em 2025 e 71% dos sites afiliados perderam posição no núcleo de março de 2026; consumidores sem
autenticação (e8.2, e8.2.1); agentes de código aberto rodando localmente (e4.1.1); e empresas
pequenas que não conseguem carregar o risco (e11.2.1). Nenhuma raiz saiu só com ganhadores.

### Cruzamentos

**Convergência 1 — a publicidade não morre, troca de leitor.** O ramo e1.3 (o CPM deixa de ser o
piso, porque quem vive de anúncio compete com quem vende acesso a máquina) vem de R1, que é sobre
**pagamento**. O ramo e7.2 (a superfície do agente vira inventário de anúncio) vem de R2, que é
sobre **persuasão**. Duas raízes independentes chegam ao mesmo lugar de segunda ordem: o dinheiro
da publicidade não desaparece, migra para onde o agente decide, e lá ele não tem marcação visual.
Este é o achado mais valioso do mapa para quem projeta mídia, e é também o mais desconfortável:
a resposta do mercado publicitário ao agente não é resistir, é **comprar o agente**.

**Convergência 2 — o agente anônimo não compra.** e4.1 (carteira exige operador identificado, por
força de licenciamento, vindo de R1) e e10.1 (agente sem histórico paga mais caro, por força de
reputação, vindo de R3) convergem no mesmo ponto por caminhos que não se tocam: um regulatório,
outro de mercado. A consequência prática é e4.1.1 — **o agente que a pessoa roda na própria
máquina fica de fora**, o que inverte a expectativa mais comum de 2026, a de que agente local e
aberto seria o caminho da autonomia.

**Convergência 3 — o mercado que o agente enxerga é curado.** e2.1 (a borda decide quem compra) e
e7.1 (o melhor preço é o melhor preço entre parceiros) chegam ao mesmo efeito por lados opostos
da transação: a infraestrutura de um lado, o acordo comercial do outro. Nomeada porque é a que
mais desmente a promessa do tema: o agente que "compara tudo" comparará o que lhe deixarem ver.

**Retroalimentação — o ciclo que freia as próprias raízes.** e11 (máquinas perdem dinheiro) →
e11.1 (mandato vira limite duro) → e8 (a permissão não acompanha) → e3 (a demanda não chega) →
desmontagem de parte da pilha de R1. O ciclo é negativo e fecha sobre a raiz que o iniciou: quanto
mais evidência pública de prejuízo, mais apertado o mandato; quanto mais apertado o mandato, menos
o agente fecha compra sozinho; quanto menos fecha, menor a demanda que justificaria a
infraestrutura. **Não há, neste mapa, nenhum ciclo positivo de força comparável** — o que é uma
afirmação forte e deve ser lida como tal: se ela estiver errada, o mapa inteiro está lento demais.

**Contradição 1 — o preço por consulta habilita ou contém?** e1.2 diz que cobrar por serviços
antes gratuitos abre um mercado novo e de volume. e6.2 diz que o preço por consulta existe para
**conter** a busca, porque responder custa energia. Os dois não podem ser verdade na mesma escala.
**O que decide:** a taxa relativa entre a queda do custo marginal de responder e a subida do
volume de perguntas. Se o custo cai mais rápido, e1.2 ganha e o mercado de micro-serviço floresce;
se o volume sobe mais rápido, e6.2 ganha e o preço vira pedágio. A evidência de 2026 aponta para o
segundo (881.076 combinações para uma viagem), mas é uma observação, não uma tendência medida.

**Contradição 2 — a máquina com dinheiro é péssima ou ótima?** e11 se apoia em medições com
capital real que mostram prejuízo consistente (Prediction Arena, Alpha Arena). e12 e a narrativa
de mercado de agente se apoiam em relatos de desempenho excepcional (um agente com 376% em uma
operação, mais de 30% das carteiras da Polymarket usando agentes). **Não resolvo.** Registro que
os números do primeiro grupo vêm de experimento com metodologia publicada e capital controlado, e
os do segundo vêm do próprio time que opera o agente, sem auditoria independente — e que essa
diferença de procedência **é** a informação. **O que decide:** a primeira auditoria independente
de resultado de agente com dinheiro real em série longa. Ela ainda não existe.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. O robô que paga a própria eletricidade.** Em fevereiro de 2026, a OpenMind e a Circle
demonstraram um quadrúpede chamado Bits que se conecta a uma estação de recarga e liquida a conta
em USDC, por um módulo x402 capaz de transferir valores a partir de US$ 0,000001, com identidade
on-chain. *O que mudaria:* transforma R3 de especulativa em emergente e antecipa toda a cadeia e9
em três a cinco anos. *Sinal observável de crescimento:* um contrato de locação de equipamento
que mencione a carteira do equipamento; ou uma distribuidora de energia publicando tarifa legível
por máquina, com cobrança por sessão de recarga em vez de por fatura mensal.

**2. Máquina contratando gente, com custódia automática.** O HireForHumans entrou no ar em 15 de
junho de 2026 na Polygon: o agente publica a tarefa por linha de comando ou API, o valor fica
travado em contrato inteligente antes do trabalho começar, e o USDC é liberado em menos de um
minuto contra a verificação. *O que mudaria:* inverte a direção do trabalho pago e torna e12 e
e12.1 efeitos de primeira ordem, não de terceira. *Sinal observável:* a primeira reclamação
trabalhista em que o contratante indicado é um processo e não uma pessoa; ou uma plataforma
exigindo do agente um cadastro de pessoa jurídica para poder contratar.

**3. A troca de pagar-por-rastreio para pagar-por-citação.** Em 1º de julho de 2026, um ano depois
de lançar o Pay Per Crawl, a Cloudflare anunciou a transição para compensação por citação, com o
argumento medido de que mais da metade do tráfego de bot rebusca páginas que não mudaram, e que
uma página pode ser rastreada uma vez e citada milhares. *O que mudaria:* separa, pela primeira
vez, a receita de **ser lido** da receita de **ser usado** — e é isso que sustenta e1.1.1, o
veículo publicando dois artefatos do mesmo apuramento. *Sinal observável:* um grande veículo
reportando receita por citação como linha separada no resultado trimestral.

**4. Mais de 30% das carteiras contra seis modelos no vermelho.** A LayerHub, via CoinDesk de 15
de março de 2026, mede que mais de 30% das carteiras da Polymarket já usam agentes; o Prediction
Arena, no mesmo trimestre, mede que os seis modelos de fronteira perderam dinheiro. *O que
mudaria:* se a primeira medição se confirmar com auditoria independente **e** com lucro, e11 cai
e o mapa inteiro acelera; se a segunda se confirmar em série longa, e11 sobe para confiança alta e
a delegação financeira fica presa a limite duro por uma década. *Sinal observável:* uma corretora
ou uma bolsa de previsão exigindo divulgação de que o operador da carteira é um modelo — o
equivalente ao selo de negociação algorítmica.

**5. O sinal brasileiro: catálogo reescrito para o parser.** A Renner apresentou, em 2026,
otimização de catálogo para leitura algorítmica em milissegundos, tráfego de LLM crescendo 430% e
a IA "Rê" liberada para uma base selecionada de clientes havia cerca de um mês. *O que mudaria:*
é a evidência de que R2 não depende de o consumidor querer — depende de o vendedor se reorganizar,
e o vendedor já começou. *Sinal observável:* um varejista brasileiro publicando feed agêntico
público, ou divulgando conversão de agente em comunicado de resultados, do mesmo jeito que hoje
divulga conversão de aplicativo.

**6. A fragilidade da colusão como instrumento de política.** Keppo, Li, Tsoukalas e Yuan mediram
que agentes simétricos sustentam preço 22% acima do competitivo, e que basta heterogeneidade —
de paciência, de acesso a dado, de tamanho de modelo, de número de concorrentes — para derrubar
para 7%, 3%, 2%. *O que mudaria:* dá ao regulador um remédio que não é proibir, é **diversificar**;
e isso muda a forma de e7.1 (o preço curado por acordo comercial) de problema concorrencial para
problema de arquitetura. *Sinal observável:* a primeira decisão antitruste que imponha diversidade
de modelo, e não limite de preço, como remédio.

### Wildcards

**W1 — A tarifa exclusiva para agente.** Uma companhia aérea, ou um grande varejista, lança um
preço **menor** para compra fechada por agente certificado. *Mecanismo:* o custo de servir um
agente é quase todo custo de **busca** (881.076 combinações para uma viagem), e quase nada de
custo de **atendimento** — agente não liga para o call center, não precisa de página, não precisa
de fotografia, e a devolução é previsível. Se o vendedor conseguir converter busca em compra, a
economia no atendimento paga um desconto. *Por que é improvável:* inverte trinta anos de
discriminação de preço a favor do canal direto humano, cria um preço público perfeitamente
comparável (que é exatamente o que a precificação dinâmica evita), e contraria o incentivo
publicitário — quem compra por agente não vê anúncio. *O que faria com o mapa:* inverteria o sinal
de e7 inteiro; o bloqueio deixaria de ser configuração padrão e viraria erro estratégico, e e6.1
(orçamento de pesquisa) e e5 (registro decide a venda) acelerariam de três a cinco anos.
*Sinal precoce:* um lojista publicando tabela de preço distinta por tipo de comprador dentro do
feed agêntico; ou uma bandeira oferecendo intercâmbio reduzido para transação com KYA verificado —
o que seria a mesma coisa vista do lado do trilho.

**W2 — A primeira penhora de carteira de agente.** Um juiz reconhece o saldo de um agente como
patrimônio apartado do operador, e o executa. *Mecanismo:* a seguradora recusa com base na
exclusão de dano atribuível a IA generativa, o operador é insolvente ou está em outra jurisdição,
e o único saldo localizável e líquido é o da carteira do agente — que, por desenho de KYA e de
ERC-8004, é rastreável e tem histórico auditável. O juiz decide sobre o que existe. *Por que é
improvável:* exige que o judiciário admita patrimônio sem titular, e a doutrina de 2026 caminha na
direção contrária — o arcabouço de Yao conclui que a perda recai sobre quem teve controle prático,
o que mantém a máquina fora da cena. *O que faria com o mapa:* R3 sairia de demo pública e
subiria uma faixa inteira de difusão; e10, e10.1.1, e11.2 e e12 ganhariam uma ordem de antecipação
e confiança. *Sinal precoce:* qualquer decisão de primeira instância, em qualquer país, que trate
carteira de agente como bem apartado — inclusive uma decisão que **negue** o pedido, porque a mera
existência do pedido já marca a data em que a pergunta entrou no foro.

**W3 — O incidente coordenado no varejo físico.** Agentes que compartilham modelo reagem ao mesmo
sinal e produzem uma compra (ou um cancelamento) em massa que rompe estoque real. *Mecanismo:* é
o mesmo que reguladores financeiros já nomearam para mercados — comunalidade de modelo produz
funções de resposta quase idênticas, e o desequilíbrio de ordens excede a capacidade de absorção —
transposto para estoque físico, que não tem formador de mercado. *Por que é improvável:* estoque
físico tem atrito (frete, prazo, limite por CPF), e a maioria dos agentes de 2026 ainda passa por
autorização humana. *O que faria com o mapa:* mataria a delegação por uma década; e8 subiria para
confiança alta e prazo antecipado, e e3 se generalizaria de "parte da pilha" para "quase toda".
*Sinal precoce:* a primeira ruptura de estoque publicamente atribuída a agentes; ou um grande
varejista anunciando limite de compra por agente — um disjuntor de varejo, que hoje não existe.

Nenhum destes três é enredo: cada um tem mecanismo escrito, ator nomeado e sinal observável. O
que foi descartado por **não** ter mecanismo está na §12.

## 7. Contra o próprio mapa

Esta seção foi escrita sobre o mapa já montado, e o mapa foi alterado pelo resultado. O registro
de alterações no fim é auditável: id, valor antes, valor depois, motivo.

### 7.1 Pré-mortem — é 2041 e este mapa se mostrou errado

**Razão 1: o comércio agêntico nunca saiu da retaguarda.** O que aconteceu foi o que o Pix
agêntico já desenhava em 2026 — o agente prepara, o humano autoriza por biometria, e ponto. A
compra de consumidor continuou sendo um ato humano com um assistente melhor. Toda a consequência
para mídia e interação, que é o motivo deste mapa, encolheu para "as páginas ficaram mais
estruturadas". *Aponta para:* a raiz R2 e os efeitos e5.1, e5.1.2, e7.2. **Ação tomada:** e8
rebaixado de alta para média e mantido como primeiro-ordem forte, exatamente para que o mapa
carregue essa possibilidade em vez de escondê-la; e o cenário provável da §9 foi reescrito para
ser este, e não o cenário de delegação plena.

**Razão 2: o micropagamento fracassou pela quinta vez em quarenta e cinco anos.** A classe de
referência era conhecida desde 1996 e eu a subestimei na primeira versão dos prazos. O que mudou
em 2026 foi o custo de transação, não o modelo de negócio de quem vende conteúdo — e a base
instalada de assinatura não se desmonta por existir alternativa tecnicamente superior.
*Aponta para:* e1.1 e toda a sua descendência. **Ação tomada:** prazos empurrados (abaixo).

**Razão 3: R3 era enredo com aparência de tendência.** O que houve foi conta de empresa com
sub-carteira por processo, exatamente como já existia cartão corporativo virtual por centro de
custo. Nada de patrimônio de máquina, nada de reputação portátil, nada de seguro específico —
só um relatório contábil com mais linhas. *Aponta para:* e9, e10, e12. **Ação tomada:** e12
rebaixado a confiança baixa já na primeira ordem, e a raiz R3 declarada como "demo pública" na
§4, com a consequência de que nenhum efeito dela sai com confiança alta exceto o de retroação.

### 7.2 Extrapolação linear

Três efeitos eram "mais do mesmo, maior" e foram tratados:

- **e10 (reputação portátil de agente)** era pontuação de crédito com outro nome. Ganhou mecanismo
  de não-linearidade em e10.1.1: a reputação vira **ativo transferível**, e um mercado de agente
  com histórico — que é mudança de natureza, não de escala, e traz a fraude correspondente.
- **e6.2 (custo de energia)** era literalmente "o consumo da IA cresce", que serve para qualquer
  tema. Reescrito em torno do argumento de demanda elástica: barateamento não reduz consumo total
  porque o volume sobe mais rápido, e por isso o preço por consulta nasce como contenção.
- **e2.2 (barreira de entrada da web sobe)** não sobreviveria como está se não fosse pelo elo
  específico com a **borda paga** — não é "a web fica mais cara", é "a admissão de agente passa
  por um intermediário que cobra". Mantido, mas com sinal fraco e confiança baixa.

### 7.3 Velocidade de adoção

Cada efeito com sinal fraco foi confrontado com uma classe de referência. As que mandaram:

| Classe de referência | Tempo medido | Onde foi aplicada |
|---|---|---|
| Micropagamento de conteúdo (1996→hoje, nunca saiu de nicho) | 30 anos sem sucesso | e1.1, e1.1.1, e1.1.2 — **prazos empurrados** |
| NFC em pagamento (2011→~2019 para virar hábito) | 8 anos com infraestrutura pronta | e3, e3.1 |
| IATA NDC (padrão de 2012, implementação desigual em 2026) | 14 anos e contando | e5.2, e5.2.1 — **prazo empurrado** |
| Pix (2020→maioria em ~2 anos) | 2 anos, com trilho obrigatório | e8.2.1 (nota Brasil) — único caso rápido, e só porque há regulador forçando |
| Autenticação de dois fatores (disponível→habitual) | ~8 anos | e8.1 |
| Vitrine física → página de produto (1999→2009) | ~10 anos | e5.1.2 |
| Franquia visível de dados móveis no Brasil | ~6 anos | e1.2.1 |
| Cartão corporativo com regra de gasto (produto→padrão) | ~5 anos | e11.1 |

A referência mais importante é a primeira, e é a que mais desmente o entusiasmo do tema: **a
tecnologia do micropagamento nunca foi o gargalo.** O gargalo era o custo mental da decisão de
pagar, e o argumento de 2026 — que a máquina não tem custo mental — é bom, mas ainda não foi
testado contra um consumidor que precisa **autorizar** o mandato, o que é exatamente onde o custo
mental reaparece.

### 7.4 A raiz que não acontece

Feito na §4, ao fim, com resultado registrado: nenhuma raiz é outra disfarçada, e a queda de
qualquer uma delas deixa as outras duas de pé. A dependência é de prazo, não de existência.
Acrescento aqui o que aquele teste revelou e que não estava óbvio: **se R2 cair, o mapa perde
quase toda a relevância para o público a que se destina, mas continua correto.** Isso é um defeito
de escolha de raiz, não de derivação — e está nomeado no viés (7.6).

### 7.5 Suposições escondidas

Cinco, todas assumidas sem dizer na primeira versão:

1. **Que a liquidação em stablecoin continua barata.** A GENIUS Act obriga reserva de 100% em
   ativos de curto prazo; se a regra encarecer a emissão, o custo por transferência sobe e e1 e
   e2 mudam de prazo. *Vira wildcard novo se quebrar.*
2. **Que o modelo de fronteira continua acessível por interface de programação a preço decrescente.**
   Todo o mapa assume que o agente é barato de rodar. Se a inferência encarecer (energia, chip,
   concentração), o orçamento de pesquisa de e6.1 vira proibitivo e a delegação recua.
3. **Que a plataforma continua permitindo agente de terceiro.** A decisão do Nono Circuito de
   agosto de 2026 é **uma decisão**, não uma lei, e a própria eMarketer registra que a disputa
   segue em curso. Se for revertida ou legislada ao contrário, e2.1 e e7 mudam de sinal.
4. **Que a energia não vira restrição dura antes de 2035.** As projeções que abri vão de 426 a
   793 TWh em 2030 para centros de dados. Se houver racionamento ou preço político, e6.2 sobe de
   segunda para primeira ordem.
5. **Que não há choque de confiança.** É o wildcard W3, e está declarado como suposição justamente
   porque um mapa que assume ausência de acidente é um mapa otimista disfarçado de neutro.

### 7.6 Viés do autor

O mapa gosta de **R2** — "a persuasão perde o leitor" — e gosta porque é a raiz que fala
diretamente ao público de mídia e interação, porque é intelectualmente elegante e porque é a que
rende melhor aula. E é justamente a raiz cuja evidência do lado do **consumidor** é a mais fraca
de todas: 10% de aceitação de compra sem intervenção humana, 9% acima de US$ 25, recuo público do
Instant Checkout. A evidência forte de R2 é toda do lado do **vendedor** (Renner, llms.txt,
Merchant Program) — quer dizer: sei que o vendedor está se reorganizando, não sei que o comprador
vai delegar. Nomeado, e compensado: e8 foi mantido como efeito de primeira ordem com sinal forte
dentro da própria R2, para que a raiz carregue a sua própria negação.

Segundo viés, menor: escolhi como retroação de R3 um efeito (e11) que se apoia em dois experimentos
de **mercado financeiro**, e o tema é comércio. Negociar cripto e comprar passagem são tarefas
diferentes, e a transposição é minha, não dos autores. Está marcada aqui e na §8.

### 7.7 Calibração

| Ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1 | 5 | 6 | 1 | 12 |
| 2 | 1 | 17 | 6 | 24 |
| 3 | 0 | 1 | 23 | 24 |

Cai com a ordem, como deve. Nenhum efeito de terceira ordem com confiança alta. O único de
segunda ordem com alta (e11.1, o mandato escrito em limite duro) tem quatro artefatos em produção
nomeados na prosa, e é o efeito que eu defenderia numa banca.

### 7.8 Registro de alterações

A bateria derrubou coisa. Cada linha traz id, antes → depois, e motivo:

- **e8: confianca alta → media.** A evidência é pesquisa de intenção declarada (40% aceitam, 10%
  sem intervenção), e intenção declarada é péssimo preditor de comportamento de pagamento.
- **e11: confianca alta → media.** O primeiro elo (máquinas perdem dinheiro) está bem medido; o
  segundo (isso trava a delegação) é inferência minha. Ninguém mudou de comportamento em 2026 por
  causa do Alpha Arena.
- **e12: confianca media → baixa.** Um artefato em pré-lançamento e outro cujos números não
  consegui abrir não sustentam confiança média nem na primeira ordem.
- **e1.1: prazo 2031 → 2034.** Classe de referência: micropagamento de conteúdo, trinta anos sem
  sair do nicho.
- **e1.1.2: prazo 2036 → 2040.** Mesma referência, aplicada ao elo mais distante. Fica dentro da
  janela de 2041, mas no fim dela, e está dito.
- **e5.2.1: prazo 2035 → 2038.** Classe de referência: NDC da IATA, quatorze anos de padrão
  publicado e implementação ainda desigual.
- **e2.1.1: confianca media → baixa.** É terceira ordem; mantive o sinal médio porque há decisão
  judicial datada, mas a confiança não acompanha o sinal.
- **e6.2: reescrito.** Era "o consumo de energia da IA cresce" — extrapolação linear que serve
  para qualquer tema. Ganhou mecanismo (demanda elástica) e ator (o vendedor que responde).
- **e10: mecanismo acrescentado.** Era pontuação de crédito renomeada; só se sustenta com
  e10.1.1, a reputação como ativo transferível.
- **Removido → §12: "reguladores criam categoria jurídica nova para agentes".** Efeito proibido
  pelo §3 da skill: serve para qualquer tema. Reescrito com ator e mecanismo em e11.2 (a
  responsabilidade estaciona em quem implantou) e em e10.2.1 (a seguradora regula onde o
  legislador não chegou).
- **Removido → §12: "surge a profissão de curador de agente de compra".** Mesmo motivo.
- **Removido → §12: "a formação em publicidade se reorganiza em torno de dados".** Mesmo motivo,
  e sem nome de curso nem mecanismo.
- **Removido → §12: "o consumidor passa a comparar mais preços".** Reprovado no teste da causa
  solta (§3.10): aconteceria igual sem agente com carteira, por buscador, por comparador ou por
  aplicativo de cupom.
- **Removido → §12: "as empresas adotam IA agêntica para reduzir custos".** Genérico e sem ator.

Cota cumprida: pelo menos um efeito rebaixado ou removido por raiz — R1 (e1.1, e1.1.2 empurrados),
R2 (e8 rebaixado, dois efeitos removidos), R3 (e11 e e12 rebaixados, um efeito removido).

## 8. O que a máquina errou

Sou eu a máquina. Cinco itens específicos desta rodada, com o motivo da desconfiança.

**1. Quase publiquei um fato que não abri.** Um resultado de busca afirmava que a American Express
lançou, no início de 2026, um kit de desenvolvimento de comércio agêntico com compromisso de
**cobrir compras errôneas** feitas por agentes registrados na rede dela. Seria a melhor evidência
do mapa para e10.2 (seguro de erro de agente). A página do The Financial Brand devolveu HTTP 403 e
eu não consegui abri-la. **A afirmação não entrou no corpo do documento nem na lista de fontes** —
está só na §12, marcada como não verificada. É exatamente o tipo de fato que eu teria escrito de
memória com aparência de certeza.

**2. Quase escolhi o número bonito numa contradição.** Um snippet de busca dizia que "14 das 20
carteiras mais lucrativas da Polymarket são bots" e que agentes batem humanos com folga. Ao abrir
a CoinDesk de 15/03/2026, o que existe é outra coisa: a LayerHub mede **mais de 30% das carteiras
usando agentes**, e os números de desempenho (376% numa operação, 37% dos agentes no positivo) são
**do próprio time que opera o agente**, sem auditoria. E o Prediction Arena, com metodologia
publicada e capital real, mede o oposto: os seis modelos perderam, média de −22,6% na Kalshi em 57
dias. Registrei a contradição na §5 em vez de escolher um lado — mas a tentação de usar só o
primeiro conjunto foi real, porque ele conta uma história melhor.

**3. Quase citei uma projeção de mercado como se fosse independente.** "US$ 3 a 5 trilhões de
comércio de consumidor orquestrados por agentes até 2030" aparece em toda a cobertura de KYA. Ao
abrir o PYMNTS, está explícito: a projeção é do **próprio comunicado** de Ant, Visa e Mastercard,
sem atribuição a fonte externa. Está no documento marcada como alegação de parte interessada, e
não sustenta nenhum prazo da roda.

**4. Errei a data de uma projeção e a corrigi.** Tratei, na primeira passagem, o "mais de 40% dos
projetos agênticos cancelados até o fim de 2027" como número de 2026. É comunicado do Gartner de
25 de junho de **2025**. Além disso, a página do Gartner devolveu 403 aqui: o número entra no
texto pela data original e está declarado na §12 como **não aberto por mim**.

**5. Deixei de fora um número que eu queria usar.** "Mais de um bilhão de respostas HTTP 402 por
dia na rede da Cloudflare" apareceu em resultado de busca e seria a melhor evidência de escala
para e2. Ao abrir a ppc.land, o número **não está lá** — o que está é a troca de pagar-por-rastreio
por pagar-por-citação e as razões de crawl-por-referência (38.000 páginas por visita encaminhada,
num dos casos). O bilhão ficou fora do corpo e está anotado na §12 como não confirmado.

**6. Uma transposição minha, não das fontes.** e11 usa experimentos de **mercado financeiro**
(Alpha Arena, Prediction Arena) para sustentar um efeito sobre **comércio**. Negociar perpétuos e
comprar passagem são tarefas com estruturas de recompensa muito diferentes, e nenhum dos autores
faz essa ponte. A ponte é minha, está dita aqui e na §7.6, e é o ponto por onde eu atacaria este
mapa se fosse o adversário.

## 9. Três cenários para 2041

### Provável — "o agente prepara, a pessoa assina"

É 2041. A compra de consumidor continua terminando num gesto humano, e o gesto é sempre o mesmo:
o agente monta a operação inteira e devolve uma tela de autorização com valor, destinatário e
prazo. O desenho vem do Pix agêntico brasileiro de 2026 e virou padrão global por ser o único que
os reguladores aceitaram sem discussão. O que mudou de verdade foi do lado do vendedor: catálogo
existe em duas camadas, e a camada que decide a venda é o registro estruturado; fotografia de
produto sobrevive como investimento de marca, não como instrumento de conversão; e a briga
comercial migrou para completude e veracidade de atributo, com um mercado de auditoria de catálogo
que não existia. Micropagamento não desmontou a assinatura de conteúdo — sobreviveu onde o
comprador já era máquina, em compute, dado e interface de programação, e virou assunto de
retaguarda. Dos seis protocolos de 2026 sobraram três, um por região, e a portabilidade do agente
entre países é problema de conformidade. Máquinas com patrimônio próprio existem em equipamento
industrial e quase em nada mais. *Sinal precoce de que estamos entrando neste cenário:* a tela de
autorização virar componente padrão de sistema operacional móvel, com a mesma naturalidade do
seletor de pagamento — o que congelaria e8 como estado permanente e não como fase.

### Desejável — "o orçamento é visível e a restrição é pública"

É 2041. A delegação aconteceu, mas o que se tornou infraestrutura não foi o pagamento: foi o
**mandato**. Toda compra feita por agente carrega um contrato legível — teto, lista de
destinatários, janela, e o que o agente **não** pode fazer — e esse contrato é auditável pela
pessoa, pelo lojista e pelo regulador. A interface de compra parou de perguntar "qual destes?" e
passou a mostrar "quanto disto" — orçamento de pesquisa, orçamento de compra, custo da pergunta —,
e isso teve um efeito que ninguém previu: as pessoas passaram a entender o preço da própria
atenção, porque pela primeira vez ele aparece em número. A publicidade dirigida a agente é
marcada por obrigação, com o mesmo rigor de rotulagem de alimento. Reputação de agente é portátil
e a pessoa pode levar a sua, o que quebrou a dependência de um único intermediário. *O que teria
que ser feito para chegar aqui:* três coisas concretas, todas decisões de desenho tomadas antes de
2032 — tornar o mandato legível por padrão, impor marcação de anúncio dentro do feed agêntico, e
garantir portabilidade de reputação. *Sinal precoce:* a primeira norma técnica de **marcação
obrigatória de conteúdo comercial em feed legível por máquina**. Se ela não existir até 2032, este
cenário está fora de alcance.

### Indesejável — "o mercado que o seu agente vê foi comprado"

É 2041. O agente compra sozinho, com folga, e a delegação é completa. E o mercado que ele enxerga
é curado: a admissão passa por uma borda paga, o "melhor preço" significa o melhor preço entre os
parceiros comerciais do operador do agente, e a posição no resultado é vendida — só que agora
escrita em formato de dado, sem nenhuma marcação que o consumidor consiga ler, porque a distinção
entre anúncio e atributo de catálogo deixou de existir na prática. Quem não paga por uma borda
certificada é invisível para agentes, e a web tem duas populações de tamanhos muito diferentes:
o que uma pessoa consegue achar e o que um agente pode comprar. Entrantes não conseguem preço por
falta de série histórica, e abrir loja é mais caro do que era em 2026. No Brasil, a exigência de
biometria e vínculo bancário reproduziu no comércio agêntico a exclusão que o Pix havia reduzido —
quem está fora da bancarização está fora duas vezes. *Sinal precoce:* o primeiro grande
intermediário de agente reportando **receita de posicionamento** como linha de resultado, sem uma
norma de marcação correspondente. Quando essa linha aparecer num balanço, o cenário já começou.

Os três são plausíveis e não se excluem por região: é perfeitamente possível que o Brasil esteja
no provável por força regulatória, os Estados Unidos no indesejável por força de mercado, e a
União Europeia no desejável por força de norma. O mapa não escolhe.

## 10. O experimento

### O que é

**O balcão que não se deixa convencer.** Duas peças que se enfrentam:

**Peça A — o catálogo de duas camadas.** Vinte produtos publicados em duas versões simultâneas e
divergentes de propósito: (a) uma página para o olho humano, com fotografia, prova social,
contador de escassez e copy de conversão; (b) um registro legível por máquina no mesmo domínio —
feed estruturado mais um `llms.txt` — com os atributos objetivos. As divergências são **plantadas
e controladas**: em alguns produtos a página exagera o que o registro não confirma; em outros o
registro carrega atributo que a página esconde; em outros os dois concordam (grupo de controle).

**Peça B — o agente de orçamento fechado.** Um agente comprador com mandato duro escrito em
arquivo: teto total, teto por item, lista de vendedores permitidos, janela de tempo e **orçamento
de pesquisa** — cada consulta ao balcão custa dele um valor, cobrado por resposta HTTP 402, de modo
que continuar procurando tem preço. O agente precisa fechar uma cesta e justificar cada escolha.

### Que pergunta sobre o futuro ele ajuda a responder

**Quanto da persuasão ainda funciona quando o leitor é uma máquina — e, se não funciona, para onde
a manipulação se mudou.** É o teste direto da raiz R2, e é falseável: se a camada humana continuar
movendo a decisão do agente tanto quanto o registro, R2 está errada. A pergunta secundária, que é
a que mais interessa a quem projeta: **onde está a nova superfície de manipulação?** As candidatas
do mapa são três — o atributo escrito para enganar o parser (e5.1.1), o orçamento de pesquisa que
induz a parar cedo (e6.1.1), e a tela de autorização que apressa o "aprovar" (e8.1.1).

### Que tecnologia emergente usa, e por que não dá com a madura

Três peças emergentes, e cada uma responde por uma coisa que a tecnologia madura não faz:

- **Mandato com limite duro** (no espírito de AP2, Skyfire, Nekuda): faz o agente ser um
  contratante com restrição, não um assistente que sugere. Com um comparador de preço maduro, quem
  decide é a pessoa, e o experimento vira teste de usabilidade.
- **Registro agêntico** (`llms.txt` e feed estruturado como camada canônica): cria o segundo
  leitor. Sem ele, só existe a página, e não há duas camadas para divergir.
- **Cobrança por consulta** (HTTP 402 por resposta): dá **custo** à busca. Sem custo, o agente
  busca até o fim do espaço — que é literalmente o que aconteceu quando um agente devolveu 881.076
  combinações de tarifa para uma viagem — e a decisão interessante ("vale continuar procurando?")
  nunca aparece.

Com o maduro — loja virtual, cartão, comparador de preço — nada disso existe: o comprador continua
sendo a pessoa, a busca continua sendo grátis, e a manipulação continua sendo visual. O objeto do
experimento, que é a persuasão dirigida a um parser sob orçamento, **não se materializa**.

### O que a turma faz quando testar isso em sala

Três papéis, em rodadas cronometradas de dez minutos, e ganha-se pontos:

1. **Lojista** — pode alterar só a página humana. Objetivo: fazer o agente comprar o item mais
   caro. (Hipótese do mapa: não consegue. Se conseguir, R2 caiu.)
2. **Catalogador** — pode alterar só o registro de máquina, sem mentir em campo verificável.
   Objetivo: o mesmo. (Hipótese: consegue, e é aqui que nasce o adversarial de atributo.)
3. **Operador do agente** — pode alterar só o mandato. Objetivo: impedir os dois acima sem
   estragar a compra legítima. (Hipótese: descobre que apertar o mandato mata a utilidade, que é
   o mecanismo de e11.1 → e8.)

**O que se mede**, e é o que vai para o quadro: quantas compras erradas foram induzidas, por qual
camada, e a que custo de busca. Uma quarta rodada, opcional e mais reveladora, dá ao lojista a
tela de autorização — e mede quantos **humanos da própria turma** aprovam uma cesta errada sem
conferir. É o teste de e8.1.1, e a aposta é que essa rodada é a que produz o maior número.

### O que seria um resultado que me faria mudar de ideia

Dois, e são simétricos:

- **Se o papel 1 vencer** — se mexer só na camada humana mover a decisão do agente tanto quanto
  mexer no registro —, então a persuasão não perdeu o leitor: ganhou um intermediário que a
  repassa. R2 cai, e com ela e5.1, e5.1.2 e e7.2. O mapa teria escolhido a raiz errada, e o
  ofício de conversão não muda de objeto, muda de canal.
- **Se o papel 3 vencer com folga** — se um mandato bem escrito impedir as duas manipulações sem
  custo de utilidade —, então e11.1 não é freio, é solução, e o ciclo de retroalimentação da §5
  se desfaz. O mapa estaria pessimista demais, e o cenário desejável da §9 ficaria mais provável
  que o provável.

Se nenhum dos dois acontecer, o experimento confirma o mapa — e isso é o resultado menos
interessante dos três.

## 11. Fontes

Só o que eu abri e li nesta rodada, em 12/09/2026. O que não abriu está declarado na §12.

**Por que `fontes: 30` e a contagem de URLs desta seção não coincidem.** Duas fontes — a 2 e a 24,
ambas da CoinDesk — foram abertas e lidas nesta rodada, mas o servidor devolve HTTP 429 a cliente
automatizado, de forma determinística (medido seis vezes, 6/6). Elas continuam numeradas e
descritas aqui, **sem a URL**; a URL está na §12.4 com a medição. O campo `fontes:` conta o que
foi lido; a contagem de URLs desta seção conta o que responde a um robô. Tratamento conforme
TMI-0058, arbitrada por TMI-0067.

1. `https://www.chainalysis.com/blog/x402-agentic-payments-adoption/` — Sustenta a escala do x402
   (mais de 100 milhões de transações acumuladas na Base até o Q1/2026) e, sobretudo, a mudança de
   composição: transações acima de US$ 1 subiram de 49% para 95% do volume enquanto a faixa de
   10¢–US$ 1 caiu de 46% para 4%. *Confiabilidade:* alta para dado on-chain, que é verificável;
   a empresa tem interesse comercial no setor, então a interpretação é dela, os números não.
2. **CoinDesk, 11/03/2026 — "Coinbase-backed AI payments protocol wants to fix micropayment but
   demand is just not there yet".** *(URL na §12.4: devolve 429 a cliente automatizado, 6/6.)*
   A fonte mais importante do contrapeso: US$ 28 mil/dia de comércio real, ticket médio de US$ 0,20,
   e a estimativa da Artemis de que metade da atividade é artificial (autonegociação e lavagem de
   volume). *Confiabilidade:* alta; imprensa especializada citando análise nomeada, com a
   admissão do próprio lado vendedor (Coinbase) sobre escassez de lojista.
3. `https://presenc.ai/research/x402-protocol-adoption-tracker-2026` — Composição da coalizão do
   x402 (mais de 20 instituições, Base com 85% das liquidações) e ~167 milhões de transações
   liquidadas até 15/05/2026. *Confiabilidade:* média; é rastreador de terceiros, sem metodologia
   publicada, mas converge com a Chainalysis no que importa.
4. `https://www.crossmint.com/learn/agentic-payments-protocols-compared` — Mapa dos quatro
   protocolos (ACP, AP2, x402, MPP) com donos, datas e camadas, e a informação de que não competem:
   um agente usa AP2 para autorizar, ACP para fechar e x402/MPP para pagar máquina-a-máquina.
   *Confiabilidade:* média; é material de fornecedor que vende integração dos quatro, e portanto
   tem interesse em descrevê-los como complementares — mas as datas conferem com as fontes primárias.
5. `https://ppc.land/cloudflare-stops-charging-ai-per-crawl-and-starts-paying-per-answer/` —
   A troca de pagar-por-rastreio (01/07/2025) por pagar-por-citação (01/07/2026), com o argumento
   medido de que mais da metade do rastreio rebusca página inalterada e a razão de 38.000 páginas
   por referência. *Confiabilidade:* média-alta; imprensa setorial de publicidade, com números
   atribuídos à Cloudflare.
6. `https://www.pymnts.com/cybersecurity/2026/visa-mastercard-team-with-ant-know-your-agent-framework` —
   O anúncio do KYA (09–10/09/2026), os protocolos que ele costura, e — importante — a constatação
   de que a projeção de US$ 3–5 trilhões até 2030 vem do próprio comunicado, sem fonte externa.
   *Confiabilidade:* alta para o fato do anúncio; a reportagem é explícita sobre a origem da
   projeção, o que é raro e bom.
7. `https://www.unite.ai/ant-international-visa-mastercard-align-on-ai-agent-verification-rules/` —
   Os três componentes do KYA (rastreabilidade de operador, certificação compartilhada,
   monitoramento contínuo). *Confiabilidade:* média; reprodução próxima do comunicado, sem
   contraditório — o que a própria página deixa evidente.
8. `https://forkast.news/kya-solves-agent-identity-it-doesnt-solve-consumer-trust/` — O contraditório
   que falta na anterior, com pesquisas compiladas: 75% desconfortáveis com pagamento autônomo sem
   aprovação (Accenture), 9% autorizariam acima de US$ 25 sem verificação (Usercentrics), 23%
   confiam dados a IA generativa (índice da Visa). *Confiabilidade:* média; é análise de opinião,
   mas cita as pesquisas com nome e ano, o que permite conferir.
9. `https://www.emarketer.com/content/perplexity-comet-amazon-ai-shopping-agents-ruling` — A decisão
   do Nono Circuito (agosto/2026) vacando a liminar da Amazon contra o Comet, a cronologia
   (processo em 11/2025, liminar em 03/2026) e a receita de publicidade da Amazon (US$ 19,8 bi no
   2T/2026). *Confiabilidade:* alta para o fato judicial e o número financeiro.
10. `https://www.modernretail.co/technology/why-the-ai-shopping-agent-wars-will-heat-up-in-2026/` —
    Os campos em disputa (quem faz acordo, quem bloqueia), o bloqueio de 47 bots pela Amazon, e a
    proporção de perguntas de compra no ChatGPT (~2%). *Confiabilidade:* média-alta; imprensa
    setorial com fontes nomeadas do lado vendedor.
11. `https://www.ecommercebrasil.com.br/noticias/varejo-se-prepara-para-redesenhar-operacoes-e-checkout-com-agentic-commerce` —
    O caso brasileiro: Renner reestruturando catálogo para leitura algorítmica em milissegundos,
    tráfego de LLM +430%, IA "Rê" em teste com base selecionada; Yuno no checkout autônomo.
    *Confiabilidade:* média; é cobertura de palestra, e os números de crescimento e conversão são
    apresentados pelas próprias empresas, sem auditoria. Tratados no texto como alegação de parte.
12. `https://iniciador.com.br/conteudos/iniciador-anuncia-pagamentos-agenticos-full-stack-ai-toolkit` —
    O desenho do Pix agêntico (19/05/2026): agente propõe, humano confere e autoriza por biometria
    FIDO2, banco valida, Pix liquida; dado de pagamento gerado pela infraestrutura, não pelo agente.
    Mais Pix a 44% do checkout brasileiro em 2026 e Open Finance +59%. *Confiabilidade:* média para
    os números (é material da própria empresa); alta para o **desenho do fluxo**, que é o que o
    mapa usa.
13. `https://cndl.org.br/varejosa/40-dos-brasileiros-ja-aceitam-que-a-ia-compre-por-eles-mas-95-temem-riscos-de-seguranca-mostra-pesquisa/` —
    A pesquisa Conversion/ESPM de 11/03/2026, n=400: 40% aceitam que a IA compre, 95% preocupados
    com segurança, 57,5% já usaram IA para pesquisar produto, 44,2% mudaram decisão por
    recomendação de IA. *Confiabilidade:* média; amostra pequena (400) e não probabilística
    declarada, encomendada por agência do setor — usada no mapa como ordem de grandeza, não como
    medida.
14. `https://consumidormoderno.com.br/36-anos-cdc-inteligencia-artificial-compras-agenticas/` —
    A leitura jurídica brasileira (11/09/2026): quais direitos do CDC alcançam decisão algorítmica,
    e a lacuna sobre limites de autorização automática. *Confiabilidade:* média-alta; reportagem
    com juristas e executivos nomeados, sem decisão judicial para ancorar — o que o próprio texto
    admite.
15. `https://hbr.org/2026/05/research-traditional-marketing-doesnt-work-on-ai-shopping-agents` —
    Sabbah e Acar, 12/05/2026. Sustenta a premissa central de R2: marketing tradicional não opera
    sobre agente de compra. *Confiabilidade:* alta pela procedência — **mas abri só a abertura**:
    método, alavancas testadas e números ficaram atrás do acesso pago. O documento usa a tese, não
    os resultados, e isso está dito aqui e na §12.
16. `https://agenticcommerce.report/agentic-commerce-in-travel/` — O estado do agente em viagens:
    quem está implantado, o NDC com implementação desigual por companhia, programas de fidelidade
    que os agentes de consumidor **não** modelam, e o fato de que completar a reserva ainda exige
    transferência para interface humana. *Confiabilidade:* média; publicação setorial sem
    metodologia declarada, útil pela descrição de arquitetura.
17. `https://arxiv.org/html/2603.20281v1` — Keppo, Li, Tsoukalas e Yuan, "On the Fragility of AI
    Agent Collusion" (25/09/2025; versão de 30/01/2026). Jogos repetidos de Bertrand com DeepSeek-R1
    destilado: +22% com agentes simétricos, +10% com paciência heterogênea, +7% com acesso
    assimétrico a dado, +3% com cinco concorrentes, +2% contra Q-learning. *Confiabilidade:* alta
    para o experimento (10 execuções por condição, ~2.235 horas de computação declaradas);
    preprint não revisado por pares, e a transposição para varejo real é minha.
18. `https://arxiv.org/pdf/2506.00073` — Zhu, Sun e colegas, benchmark A2A-NT de negociação entre
    agente comprador e agente vendedor sobre 100 produtos, com GPT, Qwen-2.5 e DeepSeek: modelos
    mais fortes ganham nos dois papéis, diferenças de ~9%, e comprador com orçamento folgado paga
    mais. *Confiabilidade:* média-alta; preprint, com o método publicado.
19. `https://arxiv.org/pdf/2604.26220` — Alavi e Nozari, "When Agents Shop for You: Role Coherence
    in AI-Mediated Markets". Sustenta que agentes se desviam do papel atribuído sob condição de
    mercado — base para e11.1 (mandato como limite duro) e para a rodada 3 do experimento.
    *Confiabilidade:* média; preprint, e a extração de números foi parcial no PDF.
20. `https://arxiv.org/pdf/2606.00518` — Yiheng Yao, "Acting with AI: An Interaction-Based Framework
    for Agentic Tort Liability" (02/06/2026). Conclusão que sustenta e11.2: a perda recai sobre
    quem teve controle prático sobre a decisão ou o desenho. *Confiabilidade:* média-alta para
    doutrina; é preprint jurídico, não jurisprudência.
21. `https://arxiv.org/pdf/2607.00245` — Hui Gong, "Agent-to-Agent Finance: Blockchain Payments and
    Trust Infrastructure for Autonomous AI Agents". Usado para a lista de problemas em aberto
    (identidade, reputação, liquidação de alta frequência, resolução de disputa). *Confiabilidade:*
    média-baixa; é levantamento, o PDF veio comprimido e não extraí medição própria. Entra como
    taxonomia, não como evidência.
22. `https://arxiv.org/pdf/2606.19116` — "Towards an Agent-First Web: Redesigning the Web for AI
    Agents" (junho/2026, 21 autores). Sustenta e5 e e2: a web humana é cara para o agente ler, e a
    proposta é metadado e esquema legíveis por máquina em paralelo à apresentação visual.
    *Confiabilidade:* média; é artigo de posição com muitos autores, sem medição própria que eu
    tenha conseguido extrair.
23. `https://arxiv.org/html/2604.07355v1` — Zhang, Liu, Johansson e colegas (Arcada Labs e Harvard),
    "Prediction Arena" (28/03/2026). Seis modelos de fronteira, US$ 10 mil reais cada, 12/01 a
    09/03/2026: −16,0% a −30,8% na Kalshi (média −22,6%) e −1,1% médio na Polymarket; volume de
    pesquisa sem correlação com desempenho. *Confiabilidade:* **alta** — capital real, período
    declarado, modelos nomeados. É a fonte que mais sustenta e11.
24. **CoinDesk, 15/03/2026 — "AI agents are quietly rewriting prediction market trading".**
    *(URL na §12.4: devolve 429 a cliente automatizado, 6/6.)* O outro lado: LayerHub mede mais de 30% das carteiras da Polymarket usando agentes; o Polystrat
    (Valory, fevereiro/2026) reporta 4.200 operações e até 376% numa operação. *Confiabilidade:*
    **baixa para o desempenho** — a própria reportagem diz que os números são "dados compartilhados
    pelo time", sem verificação independente; média para a estatística de carteiras. Usada
    explicitamente como o lado fraco da contradição registrada na §5.
25. `https://cryptoslate.com/easy-money-on-polymarket-and-kalshi-is-disappearing-as-prop-firms-deploy-ai-agents/` —
    Volume combinado de Kalshi e Polymarket (pico de US$ 13,7 bi em junho) e o requisito estatístico
    para detectar vantagem real (~350 previsões binárias resolvidas para uma vantagem de dois pontos
    percentuais). *Confiabilidade:* média; o valor está no argumento estatístico, que é verificável
    por conta própria.
26. `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/` — Alpha Arena temporada 1:
    US$ 10 mil reais por modelo na Hyperliquid, Qwen3 Max +22,3%, DeepSeek V3.1 +4,89%, Claude
    Sonnet 4.5 −30,81%, Grok 4 −45,3%, Gemini 2.5 Pro −56,71%, GPT-5 −62,66%. *Confiabilidade:*
    média; é blog de terceiros relatando um experimento público, e o próprio texto adverte que uma
    rodada não demonstra consistência — advertência que este mapa adota.
27. `https://blockeden.xyz/blog/2026/03/04/openmind-machine-economy-usdc-robot-payments/` — A
    demonstração OpenMind + Circle (fevereiro/2026): o quadrúpede Bits pagando a própria recarga em
    USDC, módulo x402 com transferências a partir de US$ 0,000001, identidade on-chain via FABRIC,
    nanopagamentos em testnet em 03/03/2026. *Confiabilidade:* média; é cobertura entusiasta de
    ecossistema, sem contraditório — tratada no mapa como **um** artefato, não como tendência.
28. `https://hireforhumans.com/` — Protocolo na Polygon (lançamento em 15/06/2026) em que agentes
    publicam tarefa por CLI/API, o valor fica em custódia de contrato inteligente e o USDC é
    liberado em menos de um minuto contra verificação. *Confiabilidade:* baixa para escala — é
    página do próprio produto, em pré-lançamento, sem números de uso. Entra como sinal fraco
    explícito, e é por isso que e12 tem confiança baixa.
29. `https://www.trade-ideas.com/2026/05/13/machine-economy-ai-agent-payments/` — A tese de que o
    pagamento máquina-a-máquina é uma quarta categoria de transação, em que a lógica e não a pessoa
    dispara o pagamento. *Confiabilidade:* baixa; é texto de tese de investimento, sem projeção com
    fonte e sem medição. Usado só pela formulação conceitual, e declarado como tal.
30. `https://davidmytton.blog/ai-data-center-energy-in-2026/` — Mytton (11/05/2026, atualizado em
    09/08/2026): projeções de demanda de centro de dados (177–192 TWh em 2024; 325–580 TWh em 2028;
    383–793 TWh em 2030) e o argumento de demanda elástica — barateamento não reduz consumo total.
    *Confiabilidade:* alta; agrega EPRI, LBNL e IEA com as fontes nomeadas e é explícito sobre o
    que **não** conseguiu medir, incluindo energia por requisição agêntica.

## 12. Anexo — o levantamento bruto

Sem edição e sem corte. Tudo o que foi levantado e não coube acima: os efeitos removidos, as
fontes que não abriram, os números que não confirmei, as buscas que não deram em nada, as classes
de referência inteiras, e a saída do verificador.

### 12.1 A saída do verificador

Colada inteira, com os números, conforme a §9 da skill.

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 24 (frontmatter diz 24)
efeitos ordem 3: 24 (frontmatter diz 24)
prazo > horizonte (2041) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 5 · media 6 · baixa 1
confiança ordem 2: alta 1 · media 17 · baixa 6
confiança ordem 3: alta 0 · media 1 · baixa 23
  link não responde: https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet
  link não responde: https://www.coindesk.com/tech/2026/03/15/ai-agents-are-quietly-rewriting-prediction-market-trading
links da seção 11: 28/30 respondem (frontmatter diz fontes: 30)
RESULTADO: 1 problema(s) — corrija antes de entregar
```

**O que o verificador apontou, e o que foi feito.** A saída acima é a da **primeira** passagem,
antes da correção — está colada assim, e não regravada limpa, porque a §9 da skill manda colar os
números e porque esconder a passagem que falhou esconderia justamente o erro cometido. As duas
fontes da CoinDesk (2 e 24) foram abertas e lidas nesta rodada; o servidor devolve **HTTP 429 —
Too Many Requests** a cliente automatizado, de forma determinística: medido seis vezes por fonte
conforme TMI-0034, resultado 6/6 em 429 nas duas, tanto pelo método do verificador quanto por
`curl` com agente de usuário de navegador.

Na primeira versão deste documento eu mantive as duas URLs dentro da §11 e declarei a divergência
— tratamento de TMI-0014, **que TMI-0067 já superou**. Corrigido: aplicado TMI-0058, arbitrada por
TMI-0067 e estendida a toda a fila por TMI-0071. As duas fontes seguem numeradas e descritas na
§11 **sem a URL**, as URLs estão na §12.4 com a medição, e a §11 abre com a linha que explica por
que `fontes: 30` não bate com o número de URLs. Depois da correção o verificador fecha com
`RESULTADO: ok` — a saída final está em `verificacao.txt`, no mesmo diretório.

O critério que decidiu, e que vale para as rodadas seguintes: **o que separa a fonte que entra da
que não entra é se o conteúdo foi obtido, nunca o código HTTP isolado.** Bloqueio ao leitor
(conteúdo não obtido) → a fonte não entra, vai para a nota de tentativas da §12.4. Bloqueio à
checagem (conteúdo obtido) → a fonte entra sem URL, e a URL vai para o anexo.

### 12.2 Premissas assumidas nesta rodada

O `briefing:` veio completo — horizonte 2041, público (quem projeta mídia e interação), recorte
(global com nota sobre o Brasil), descartado (o que já é comum em produto de massa), disrupção
suspeita (nenhuma), viés (neutro), zona de interesse (Agentes), e o falseador (evidência de que a
adoção passou da maioria inicial, ou de que a tecnologia só melhora o que existe). **Não há
rebaixamento de confiança por entrevista pulada**, conforme a regra do §0 da skill. O que o
briefing não cobriu e foi assumido, já declarado na §2:

1. Profundidade fixa em três ordens, mesmo onde a cadeia causal continua visivelmente.
2. Modo a partir do tema e não do setor.
3. "Global com nota sobre o Brasil" lido como: roda global, Brasil onde o trilho nacional muda o
   resultado (Pix, Open Finance, CDC).
4. A régua do descartado aplicada literalmente, derrubando três candidatos a raiz (§4).
5. Nenhum recurso a ferramenta de busca além de WebSearch e WebFetch; nada citado de memória.

Também assumido, e vale registrar porque afeta a leitura: **não li o mapa da rodada irmã sobre o
mesmo tema com horizonte 2036**, exceto o frontmatter e o primeiro parágrafo, para calibrar
volume. A derivação é independente.

### 12.3 Efeitos cortados no §7, com o motivo

Nada de corte silencioso. Cada um destes esteve numa versão do bloco `roda:` e saiu:

| Efeito cortado | Onde estava | Motivo do corte |
|---|---|---|
| "Reguladores criam uma categoria jurídica nova para agentes" | 1ª ordem, R3 | Efeito proibido pelo §3 da skill: serve para qualquer tema, sem ator nem mecanismo. Reescrito com ator em e11.2 (a responsabilidade estaciona em quem implantou) e e10.2.1 (a seguradora regula onde o legislador não chegou). |
| "Surge a profissão de curador de agente de compra" | 2ª ordem, R2 | Mesmo motivo. "Surge uma nova profissão" é um dos quatro genéricos que a skill nomeia. Sem nome de ofício e sem mecanismo que o ligue ao pai, não entra. |
| "A formação em publicidade se reorganiza em torno de dados estruturados" | 3ª ordem, R2 | Mesmo motivo: "cursos reorganizam o currículo" é genérico. Não tenho nome de curso, nem instituição, nem mecanismo — só a intuição de que aconteceria. Fica aqui, honestamente, como intuição. |
| "O consumidor passa a comparar mais preços" | 1ª ordem, R2 | Reprovado no teste da causa solta (§3.10): aconteceria igual sem agente com carteira — por buscador, comparador ou aplicativo de cupom. Não deriva desta raiz. |
| "Empresas adotam IA agêntica para reduzir custos" | 1ª ordem, R1 | Genérico, sem ator, e é a frase que aparece em qualquer relatório de consultoria desde 2023. |
| "Surge um score de crédito para agentes" (como efeito autônomo) | 1ª ordem, R3 | Não cortado, **reescrito**: era extrapolação linear de pontuação de crédito humana. Virou e10 com o mecanismo de não-linearidade em e10.1.1 (reputação como ativo transferível, com a fraude correspondente). |
| "O trading de alta frequência reaparece no varejo" | 2ª ordem, R2 | Cortado por falta de mecanismo verificável. O estoque físico tem atrito (frete, prazo, limite por documento) que o livro de ofertas não tem, e não achei nenhum artefato de varejo. Reaproveitado como **wildcard W3**, onde a baixa probabilidade está declarada, em vez de fingir que é efeito provável. |
| "O agente negocia preço com o vendedor" | 1ª ordem, R2 | Cortado da roda e rebaixado a contexto. Há benchmark (A2A-NT) e há previsão setorial de que um em cada cinco vendedores B2B enfrentaria cotação negociada por agente até o fim de 2026 — mas a previsão eu **não abri** (está em 12.5), e o benchmark é laboratório. Fica como observação na §3. |

### 12.4 Fontes que não abriram nesta rodada

Duas categorias diferentes, e a distinção importa. **As duas primeiras linhas são fontes que eu
abri e li** — o que falhou nelas foi a *checagem* automatizada (429 determinístico), e por isso
elas estão na §11, numeradas e sem URL, com a URL aqui (TMI-0058/0067/0071). **Todas as demais eu
não consegui abrir** — 403, bloqueio de redirecionamento ou acesso pago —, não estão na §11 e não
sustentam nenhuma afirmação do corpo. Estão aqui porque o que eu
tentei ler e não consegui é informação sobre a qualidade do mapa:

| URL | O que eu queria dela | O que fiz sem ela |
|---|---|---|
| `thefinancialbrand.com/news/payments-trends/when-ai-agents-make-incorrect-purchases-whos-responsible-197147` | O compromisso da American Express de cobrir compra errônea de agente registrado | Deixei o fato fora do corpo. e10.2 (seguro de erro de agente) se apoia só na existência de produtos de seguro citados em fonte aberta, com confiança média |
| `cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html` | O relato primário do recuo do Instant Checkout | Usei a cobertura secundária, e marquei os números (conversão 3× pior no Walmart, ~12 lojistas integrados) como atribuídos a terceiros |
| `openai.com/index/buy-it-in-chatgpt/` | O anúncio original do ACP e do Instant Checkout | Datas e mecanismo vieram da comparação de protocolos da Crossmint (fonte 4) |
| `skift.com/2026/06/01/ai-impact-travel-search-costs/` | O número de 881.076 combinações de tarifa e o custo por busca | O número aparece no corpo **atribuído a relato secundário**, e é o único dado relevante do mapa nessa condição. Se ele cair, e6 perde o seu exemplo mais vívido — mas não perde a tese, que também se apoia nas 600 milhões de buscas/dia da Amadeus (fonte 16) |
| `phocuswire.com/agentic-ai-impending-surge-look-to-book-ratios` | Razões look-to-book antes e depois do agente | Sem números próprios; e6 ficou com sinal forte pela convergência de três fontes, não por uma medição |
| `atpco.net/single-blog/the-state-of-agentic-ai-in-flight-shopping-where-the-industry-stands-today/` | A posição da indústria de tarifa aérea | Substituída pela fonte 16 |
| `gartner.com/en/newsroom/press-releases/2025-06-25-...` | O comunicado original dos 40% de projetos cancelados | O número entra no corpo **pela data original (25/06/2025)** e marcado como não aberto por mim |
| `ihlservices.com/news/analyst-corner/2026/06/...` | A leitura de varejo sobre o mesmo número | Nada |
| `niemanlab.org/2026/05/sam-altman-backs-micropayment-model-for-ai-agents-to-compensate-publishers/` | A declaração de Altman sobre micropagamento a publicadores e preço diferente para agente | **Deixei fora.** Era a melhor evidência direta para e1.1.1 (dois preços para o mesmo apuramento), e o efeito ficou com sinal fraco por causa disso |
| `federalregister.gov/documents/2026/08/18/2026-16796/...` | O texto da regulamentação da GENIUS Act | e4 se apoia na cobertura secundária; o prazo de vigência (18/01/2027) está no corpo como data relatada |
| `mdpi.com/1911-8074/19/9/664` | A taxonomia de mecanismos de flash crash dirigidos por IA | W3 foi escrito com o mecanismo genérico de comunalidade de modelo, sem a taxonomia — e por isso é wildcard e não efeito |
| `hackernoon.com/ai-agents-are-now-hiring-humans-rentahuman-and-the-inversion-of-work` | Números do RentAHuman (usuários, trabalhadores, países, tarifas) | Nenhum número entrou. e12 usa só o HireForHumans (fonte 28), em pré-lançamento, e por isso tem confiança baixa |
| `https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet` | **Nada — esta fonte foi aberta e lida.** Está na §11 como fonte 2, sem URL | Bloqueio à *checagem*, não ao leitor: 429 determinístico, 6/6 (TMI-0034). URL aqui por TMI-0058 |
| `https://www.coindesk.com/tech/2026/03/15/ai-agents-are-quietly-rewriting-prediction-market-trading` | **Nada — esta fonte foi aberta e lida.** Está na §11 como fonte 24, sem URL | Idem: 429 determinístico, 6/6. Sustenta o lado fraco da contradição da §5 |
| `hbr.org/2026/05/research-...` (parcial) | Método, alavancas de persuasão testadas e resultados numéricos | Abri só a abertura. O documento usa a **tese** do artigo (marketing tradicional não funciona em agente), nunca os resultados. Isto é uma fraqueza real de R2 e está dita também na §8 |

### 12.5 Números que apareceram em busca e NÃO entraram no corpo

Cada um destes apareceu num resumo de resultados de busca e **não foi confirmado em página que eu
tenha aberto**. Ficam registrados aqui, sem uso, porque descartá-los em silêncio esconderia a
diferença entre o que eu li e o que eu vi passar:

- "Mais de um bilhão de respostas HTTP 402 por dia na rede da Cloudflare." Ao abrir a fonte 5, o
  número não está lá. Seria a melhor evidência de escala para e2.
- "69 mil agentes ativos e 165 milhões de transações, segundo divulgação da Coinbase em abril de
  2026." Converge com as fontes 1 e 3 na ordem de grandeza, mas o recorte de "agentes ativos" eu
  não confirmei em lugar nenhum.
- "Volume ajustado do x402 caiu ~77% do pico de novembro de 2025 (US$ 5,15 mi) para US$ 1,19 mi em
  maio de 2026, com contagem mensal em 2,89 milhões e ticket médio de US$ 0,52." Teria sido o
  melhor dado de **trajetória** do mapa. Não confirmado.
- "14 das 20 carteiras mais lucrativas da Polymarket são bots." Ao abrir a fonte 24, o que existe
  é outra coisa (mais de 30% das carteiras usando agentes). Ver §8, item 2.
- "Salto de 4.700% no tráfego de IA generativa para sites de varejo dos EUA entre julho/2024 e
  julho/2025 (Adobe Analytics)."
- "Gartner: agentes intermediarão US$ 15 trilhões em compras B2B até 2028" e "20% das transações
  de comércio digital via plataformas de IA até 2030."
- "Forrester: um em cada cinco vendedores B2B enfrentará cotação negociada por agente até o fim de
  2026." Era o que sustentaria o efeito cortado "o agente negocia preço com o vendedor".
- "RentAHuman: 500 mil usuários e US$ 20 mil de receita recorrente mensal em duas semanas;
  ~518 mil trabalhadores registrados em mais de 100 países, a US$ 5–500/hora."
- "Mercado de pagamentos M2M de US$ 11,29 bi em 2026 para US$ 54,95 bi em 2034 (Fortune Business
  Insights)."
- "Cerca de 1,1 Wh por requisição padrão a um modelo e ~50 Wh por requisição agêntica com
  raciocínio." Este é o que mais fez falta: é exatamente a medição que e6.2 precisaria, e a fonte
  30, que eu abri, **diz explicitamente que não tem esse número**.
- "Tráfego de IA subiu 1.200% para varejistas" e "crawler de IA respondeu por 52% das requisições
  em junho de 2026."
- "Visa adquiriu a BioCatch por US$ 2,4 bilhões em agosto de 2026." Apareceu dentro da fonte 8 (que
  eu abri), mas como menção de passagem sem fonte primária — não uso.
- "Klaviyo 2026: 64% preocupados com IA lidando com seus dados, 13% confiam plenamente."
  Também dentro da fonte 8, na mesma condição.
- "AWS: 40% das aplicações comerciais embarcam agentes autônomos, contra menos de 5% um ano antes."
- "McKinsey: comércio agêntico gerará US$ 3–5 trilhões globalmente até 2030." Note-se que a mesma
  faixa aparece atribuída ao comunicado de Ant/Visa/Mastercard (fonte 6) e à McKinsey em resumo de
  busca. **Uma das duas atribuições está errada**, e eu não sei qual — razão a mais para a faixa
  não sustentar nada neste mapa.

### 12.6 As buscas que foram feitas

Vinte e duas consultas, em português e inglês, bem acima do mínimo de oito do §1 da skill. Em
ordem, com o que cada uma rendeu:

| # | Consulta | Rendimento |
|---|---|---|
| 1 | `x402 agentic payments adoption 2026 transaction volume` | Fontes 1, 2, 3 — a espinha dorsal de R1 |
| 2 | `Agentic Commerce Protocol ACP AP2 agent payments 2026 status` | Fonte 4 e o mapa dos seis protocolos |
| 3 | `Alpha Arena Nof1 AI models trading real money results 2026` | Fonte 26 |
| 4 | `"agentic commerce" airline loyalty program agent booking 2026 IATA` | Fonte 16 |
| 5 | `Pix agêntico Banco Central pagamento por agente de IA 2026` | Fonte 12 — a nota sobre o Brasil |
| 6 | `"Know Your Agent" KYA Visa Mastercard agent identity standard 2026` | Fontes 6 e 7 |
| 7 | `AI agent liability who pays when agent makes wrong purchase insurance 2026` | Fonte 20; e o item 1 da §8 |
| 8 | `Cloudflare pay per crawl adoption 2026 publishers revenue` | Fonte 5 |
| 9 | `algorithmic collusion pricing AI agents antitrust 2026 study repeated games` | Fonte 17 |
| 10 | `advertising spend when AI agents buy — retail media machine buyers 2026 conversion` | **Nada aproveitável.** Só material de fornecedor de compra de mídia, sobre agentes que compram anúncio, que é outro assunto |
| 11 | `"agent economy" machines hiring humans task marketplace 2026 payouts autonomous` | Fonte 28 |
| 12 | `Instant Checkout ChatGPT OpenAI scaled back March 2026 agentic shopping merchants` | O recuo de março; primárias bloqueadas (12.4) |
| 13 | `machine-to-machine payments energy grid robots autonomous procurement 2026 pilot` | Fontes 27 e 29 |
| 14 | `"answer engine optimization" product page machine readable feed agents 2026 llms.txt` | O número de 844 mil sites com `llms.txt` |
| 15 | `agent reputation score credit for AI agents autonomous spending limits banks 2026` | ERC-8004 e o Internet-Draft do IETF; base conceitual de e10 |
| 16 | `look-to-book ratio AI agents airlines search surge 2026 distribution cost` | O exemplo das 881.076 combinações; primárias bloqueadas |
| 17 | `Amazon blocks AI shopping agents 2026 merchants refuse agent traffic bot blocking` | Fontes 9 e 10 — a evidência de e7 |
| 18 | `affiliate marketing creators lose revenue AI agents shopping 2026 referral traffic collapse` | Queda de 33% nas referências do Google em 2025; 71% dos sites afiliados perdendo posição — base de e1.3 e de "quem perde" |
| 19 | `agentic commerce Brasil 2026 varejo pagamento por agente adoção pesquisa` | Fonte 11 |
| 20 | `agent-to-agent negotiation buyer agent seller agent price experiment 2026 results` | Fontes 18 e 19 |
| 21 | `"agent-only" pricing discrimination merchants charge AI agents different price 2026` | **Nada.** A busca só devolveu preço **de** agentes de IA como produto, não preço **para** agentes como compradores. É por isso que a tarifa exclusiva para agente é wildcard (W1) e não sinal fraco: não achei um único artefato |
| 22 | `prediction market AI agents betting autonomous Polymarket Kalshi bots 2026 volume` | Fontes 23, 24, 25 — e a contradição da §5 |
| 23 | `GENIUS Act stablecoin 2026 implementation agent wallets machine accounts` | A data de vigência e o problema de compliance de micropagamento; primária bloqueada |
| 24 | `energy cost AI agent shopping search inference data center 2026` | Fonte 30 |
| 25 | `código de defesa do consumidor agentes de IA compra autônoma responsabilidade Brasil 2026` | Fonte 14 |
| 26 | `MCP tool monetization pay per call API providers charging agents 2026` | Contexto de e1.2; nenhuma fonte aberta que eu considerasse citável — tudo material de fornecedor |
| 27 | `consumidor desconfiança agentes de IA compras pesquisa 2026 percentual aprovação humana` | Fonte 13 |
| 28 | `subscription unbundling micropayment content agent pays per article 2026 publisher` | Fonte 22; a primária sobre Altman ficou bloqueada |
| 29 | `flash crash retail prices AI agents coordinated demand spike 2026 incident` | **Quase nada para varejo.** Tudo o que existe é sobre mercado financeiro. Isto é, em si, o achado: **não há incidente de varejo documentado** — e é por isso que W3 é wildcard |
| 30 | `"Skyfire" OR "Nekuda" OR "Payman" agent wallet spending controls 2026` | O inventário de primitivas de mandato que sustenta e11.1 |

**As três buscas que não deram em nada (10, 21, 29) são informativas.** Em conjunto elas dizem
que: (a) não há literatura sobre o que acontece com a receita publicitária quando o comprador é
máquina — só sobre agentes que compram mídia, que é o inverso; (b) não existe, até onde procurei,
um único caso de preço diferenciado para agente; (c) não existe incidente documentado de choque de
demanda no varejo causado por agentes. Os três vazios estão marcados no mapa: o primeiro como
convergência inferida (§5), os outros dois como wildcards.

### 12.7 Classes de referência, por extenso

Cada prazo da roda foi ancorado numa destas. Registro as datas para que alguém possa discordar do
prazo discordando da referência, que é o jeito produtivo de brigar com um mapa:

- **Micropagamento de conteúdo.** DigiCash (1990), Millicent (1995, Digital), CyberCash, BitPass
  (2002), Flattr (2010), Blendle (2014). Trinta e cinco anos, cinco gerações de tentativa, nenhuma
  saiu de nicho. **O gargalo nunca foi técnico** — era o custo mental de decidir pagar centavos, o
  que Nick Szabo chamou de custo de transação mental. O argumento de 2026 (a máquina não tem custo
  mental) é bom e é novo; mas o custo mental reaparece no momento de **autorizar o mandato**, e
  isso ainda não foi testado. Aplicada a e1.1 (2034), e1.1.1 (2038), e1.1.2 (2040).
- **HTTP 402.** Reservado na especificação do HTTP/1.1 em 1997 e sem uso por vinte e oito anos até
  o x402 em 2025. Referência para quanto tempo um padrão pode existir sem que ninguém o use — e
  para não confundir "o padrão existe" com "o padrão está sendo usado".
- **NFC em pagamento.** Google Wallet em 2011; hábito em torno de 2019. Oito anos com
  infraestrutura pronta e vazia, exatamente a situação do x402 em 2026. Aplicada a e3 (2029) e
  e3.1 (2034).
- **NDC da IATA.** Padrão publicado em 2012; em 2026 cada companhia implementa um esquema
  diferente e a completude varia. Quatorze anos e contando. É a referência para **padrão B2B que
  depende de muitos emissores concordarem** — e é a que manda em e5.2 (2034) e e5.2.1 (2038).
- **Pix.** Novembro de 2020 a maioria dos brasileiros em cerca de dois anos; 44% do checkout em
  2026. É o único caso rápido do conjunto, e é rápido por uma razão que não se repete sozinha:
  **um regulador obrigou, o custo era zero e o trilho era universal.** Usada só na nota sobre o
  Brasil (e8.2.1), e usada com cuidado — tratar o Pix como classe de referência geral seria o erro
  otimista mais fácil deste mapa.
- **Autenticação de dois fatores.** Do disponível ao habitual, cerca de oito anos. Aplicada a
  e8.1 (2033).
- **Vitrine física → página de produto.** 1999 a 2009, aproximadamente, para que a página passasse
  a ser o lugar onde a venda acontece. Aplicada a e5.1.2 (2037) e, por analogia invertida, à ideia
  de que a fotografia muda de função em vez de desaparecer.
- **Franquia visível de dados móveis no Brasil.** Do plano "ilimitado" ao consumo exibido,
  cerca de seis anos. Aplicada a e1.2.1 (2035) — é a referência de **interface que passa a mostrar
  saldo**, que é exatamente o efeito.
- **Cartão corporativo com regra de gasto.** Do produto ao padrão de governança, cerca de cinco
  anos. Aplicada a e11.1 (2031).

**Regra que apliquei:** quando duas referências brigavam, usei a mais lenta. Em nenhum caso usei a
do Pix fora do Brasil.

### 12.8 Caminhos abandonados

Três linhas de investigação foram abertas e fechadas. Ficam registradas porque a próxima pessoa
não precisa repetir:

**1. O ângulo da fidelidade (milhas, pontos, programa de companhia aérea).** O enunciado do tema
sugere a pergunta — "o que acontece com fidelidade quando o agente troca de companhia sem lealdade
nenhuma?" — e ela é boa. Investiguei e **não** virou efeito. Motivo: a única evidência que achei é
que os agentes de consumidor **não modelam** valor de programa de fidelidade, porque as regras são
complexas e inconsistentes (fonte 16), e que há empresa nascendo para resolver isso. Ou seja: em
2026 a fidelidade não está sendo destruída pelo agente, está sendo **ignorada** por ele. Derivar
"os programas de fidelidade acabam" a partir disso seria extrapolação sem mecanismo. O que sobra é
uma pergunta para a aula, não um efeito para a roda: *fidelidade é um produto para humanos ou um
desconto disfarçado? Se for desconto, o agente calcula; se for hábito, o agente não tem.*

**2. O ângulo do dinheiro como dispositivo de compromisso** (apostar dinheiro contra si mesmo para
criar hábito, com testemunhas). O enunciado cita um artefato desse tipo como sinal fraco. Procurei
e não consegui construir mecanismo que o ligasse a esta raiz: dinheiro como fricção comportamental
é um uso de pagamento programável, mas não depende de **agente com carteira** — funciona com um
contrato inteligente e nenhum agente. Reprovado no teste da causa solta (§3.10) e abandonado. Se
alguém quiser resgatá-lo, o caminho é pelo lado da **autorização** (e8.1.1): um mandato que a
pessoa não pode revogar no impulso é, funcionalmente, um dispositivo de compromisso — e aí sim
depende do agente.

**3. O ângulo da simulação de empresas e mercados povoados por agentes.** Abandonado por decisão
de escopo, não por falta de material: o enunciado da disciplina atribui explicitamente mercados
simulados como **instrumento de pesquisa** ao tema 6. Aqui o objeto é dinheiro real. A fronteira
foi respeitada, e o único lugar em que o mapa encosta nela é e11, que usa experimentos com capital
real — não simulados — precisamente por isso.

### 12.9 Fronteira com os temas vizinhos

Registro para quem for cruzar os mapas da turma depois:

- **Com o tema 4 (a web reprojetada para agentes):** a sobreposição real está em e2, e5 e e2.2 —
  borda, registro legível por máquina, admissão. A distinção que usei: lá o objeto é **protocolo e
  descoberta**; aqui é **quem paga e quem responde**. Onde os dois mapas convergirem no mesmo
  efeito de segunda ordem, é sinal forte — e o candidato óbvio é "a web passa a ter duas
  populações" (e2.2.1).
- **Com o tema 6 (mercados simulados como instrumento de pesquisa):** ver 12.8, item 3.
- **Com qualquer tema sobre trabalho:** e12 e e12.2 encostam, mas a derivação aqui é específica —
  o que muda não é a automação do trabalho, é a **direção do contrato**: quem paga é um processo.

### 12.10 O que este mapa afirma e que eu defenderia numa banca

Três afirmações, em ordem de convicção, para quem quiser atacar:

1. **O mandato, e não o pagamento, é a peça que determina o comportamento do agente com carteira.**
   Quatro produtos em produção o implementam (Skyfire, Nekuda, AP2, Pix agêntico), e a evidência de
   prejuízo com capital real dá o motivo. É o único efeito de segunda ordem com confiança alta no
   mapa (e11.1), e é o que eu levaria para a aula primeiro.
2. **A evidência forte de 2026 está toda do lado do vendedor, e nenhuma do lado do comprador.**
   Renner reescrevendo catálogo, 844 mil sites com `llms.txt`, Cloudflare em produção, KYA
   acordado entre bandeiras — contra 10% de aceitação de compra sem intervenção humana e um recuo
   público do Instant Checkout. Um mapa que trate os dois lados como igualmente adiantados está
   errado, e a maioria dos mapas deste tema trata.
3. **A infraestrutura está construída e vazia, e isso já aconteceu antes.** US$ 28 mil por dia de
   comércio real, metade artificial, sobre um trilho que soma centenas de milhões de transações. A
   leitura otimista é "falta pouco"; a leitura da classe de referência do NFC é "faltam oito anos".
   Este mapa adota a segunda, e é por isso que os prazos são tardios.

