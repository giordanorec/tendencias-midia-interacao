---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2036
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 12
efeitos_ordem_2: 18
efeitos_ordem_3: 14
tecnologias_citadas: [x402, HTTP 402, Agentic Commerce Protocol, AP2, Trusted Agent Protocol, Mastercard Agent Pay, Agent Pay for Machines, Verifiable Intent, Know Your Agent, SAFR, Amex ACE, Model Context Protocol, Pix Biometria, Open Finance, USDC, Base, Solana, Cloudflare pay per crawl, Cloudflare Monetization Gateway, AWS CloudFront, AWS WAF Bot Control, Sabre Mosaic Cache, Amadeus Advanced Airline Profile, Duffel, OKX AI, Hyperliquid, GENIUS Act]
fontes: 31
confianca: media
experimento: "Balcão de duas pontas — um serviço que só responde mediante pagamento por requisição (HTTP 402) e um agente com orçamento fechado que precisa decidir o que vale pagar"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Um agente que pode pagar é uma coisa diferente de um agente que pode ler, e em setembro de 2026 a
diferença já tem infraestrutura: o x402 revive o código HTTP 402 e é executado na borda pela AWS e
pela Cloudflare; o Agentic Commerce Protocol põe um token de pagamento delegado dentro do ChatGPT;
Visa, Mastercard e Ant acabaram de acordar um padrão comum de identidade de agente (KYA); o Amex
assumiu por escrito o erro de compra de agente registrado; e no Brasil o Pix agêntico nasceu dentro
do Open Finance, com biometria e humano no fim do fluxo. O que ainda não existe é demanda: o
comércio real sobre x402 roda a cerca de US$ 28 mil por dia, metade da atividade é artificial, e
os modelos que operaram dinheiro de verdade na Alpha Arena perderam um terço do capital. Este mapa
sustenta que a ruptura de curto prazo não está no ato de comprar, e sim em três deslocamentos que
já têm artefato: **o pagamento vira uma resposta de protocolo**, o que faz o preço descer para
dentro do HTTP e torna vendável o que era barato demais para ter preço; **o mandato delegado
substitui a atenção humana**, o que estoura a economia de quem responde a consultas (de 10 mil
buscas por bilhete para até 200 mil) e transforma a página de produto de peça de persuasão em
arquivo legível por máquina; e **o agente vira contraparte que vende, cobra e é cobrada**, o que
faz nascer reputação portátil, seguro de erro de agente e, no limite, a contratação de humanos por
software. Para quem projeta mídia e interação, a consequência de 2036 não é um botão de compra
novo: é que a interface de preço migra da tela para o log, a unidade de venda de conteúdo encolhe
de "o artigo" para "a passagem que respondeu à pergunta", e a métrica de sucesso de uma peça deixa
de ser atenção e passa a ser recuperabilidade.

## 2. O tema

O objeto aqui é **dinheiro nas mãos de máquinas**: o agente como parte contratante — que escolhe,
paga, recebe e responde — e a infraestrutura que está nascendo para isso. Não é e-commerce (maduro),
não é pagamento online (maduro), não é comparador de preço (maduro). É o que acontece quando a
autorização deixa de exigir um humano presente no instante da compra.

Isso encosta em mídia e interação em três pontos, e nenhum deles é o checkout. Primeiro, **a
superfície de decisão muda de lugar**: se quem escolhe é um processo que lê feed estruturado, a
vitrine deixa de ser o lugar onde se ganha a venda. Segundo, **o conteúdo passa a ter preço na
resposta HTTP**: a Cloudflare já opera um mercado em que o publicador devolve 402 com preço e o
crawler declara `crawler-max-price` — é uma negociação de preço embutida no protocolo que serve as
páginas que a turma projeta. Terceiro, **o consentimento deixa de ser um clique e vira uma política**:
o usuário não aprova compra por compra, aprova um escopo; e a interface que sobra não é a tela de
compra, é o extrato.

Por que isso merece mapa de futuro e não levantamento de estado da arte: porque o estado da arte
aqui é contraditório de um jeito que só um mapa resolve. Os padrões estão consolidados e a demanda
não apareceu. Há 167 milhões de transações liquidadas e US$ 28 mil por dia de comércio de verdade.
Há um framework de identidade de agente assinado por três redes concorrentes e uma decisão judicial
de agosto de 2026 dizendo que o lojista não pode usar lei de crime cibernético para barrar o agente.
Descrever isso como "estado da arte" produz uma lista de produtos. Descrever como roda de futuros
produz a pergunta certa: **o que muda quando o custo de olhar cai a zero e o custo de responder não?**

### Premissas assumidas (briefing não interativo)

O briefing desta rodada fixou horizonte 2036, público "quem projeta mídia e interação", recorte
global com nota sobre o Brasil, viés neutro e o descarte inicial "o que já é comum em produto de
massa". O que o briefing **não** cobriu e eu assumi, declarado aqui conforme §0 da skill:

- **Unidade de análise:** o agente que transaciona em nome de uma pessoa física ou de uma empresa,
  não o agente de pesquisa interno que não toca dinheiro.
- **"Mídia e interação" inclui** varejo digital, distribuição de viagem, publicação de conteúdo e
  APIs pagas — porque os quatro são superfícies de interação que o agente atravessa pagando.
- **Ideias óbvias excluídas de saída** (conforme o briefing, "as que servem para qualquer tema"):
  "surge uma nova profissão", "reguladores criam categoria nova", "cursos reorganizam o currículo",
  "mudanças no mercado de trabalho". Duas delas foram efetivamente cortadas no §6; ver seção 12.
- **Falseador declarado pelo briefing:** evidência de que a adoção já passou da maioria inicial de
  Rogers, ou de que a tecnologia só melhora o que existe. Ambos foram testados no §2 deste método
  (seção 4) e no §6 (seção 7).

## 3. Onde isso está hoje

Âncora feita **com** acesso à web em 12/09/2026: 21 buscas em português e inglês, 28 fontes abertas
e lidas. As que o servidor recusou a leitura automatizada estão nomeadas na seção 12 e não sustentam
afirmação nenhuma do corpo do texto.

### O que já existe e funciona

**O trilho de protocolo.** O x402 põe micropagamento em stablecoin atrás do código HTTP 402. Em
julho de 2026 a AWS liberou suporte a x402 no CloudFront e no WAF em disponibilidade geral — o
publicador configura uma ação "Monetize" dentro das regras de Bot Control — e a Cloudflare anunciou
um Monetization Gateway com regras no estilo WAF, aplicadas em mais de 330 cidades. A liquidação é
em USDC, majoritariamente na Base, com custo descrito como "menos que uma fração de centavo". A
Coinbase reportou 169 milhões de pagamentos, 590 mil compradores e 100 mil vendedores no primeiro
ano; a Fundação x402, sob a Linux Foundation, reúne AWS, Cloudflare, Anthropic, Circle e mais de
vinte organizações. A Chainalysis mediu mais de 100 milhões de transações até o 1º trimestre de 2026
e um perfil de carteira específico: idade média de 197 dias contra 423 do usuário comum da Base, e
26 tokens distintos contra 4. [1][3]

**O trilho de conteúdo.** O pay per crawl da Cloudflare usa exatamente o 402: o publicador define um
preço único por requisição, o crawler pode declarar antecipadamente `crawler-max-price`, a
autenticação é por par de chaves Ed25519 com HTTP Message Signatures, e a Cloudflare atua como
merchant of record. Em 1º de julho de 2026 a empresa fixou 15 de setembro de 2026 como prazo para
que as empresas de IA separem o crawler de busca do crawler de treino e de agente; a partir daí, o
padrão passa a bloquear crawler de uso misto em qualquer página que hospede anúncio. Matthew Prince:
"agora que a maioria do tráfego da internet é não-humana, precisamos ir além e agir mais rápido para
que um ecossistema sustentável possa emergir". Mais de 50% do tráfego de crawler de IA é
re-busca de páginas que não mudaram. [4][5]

**O trilho de cartão.** O Agentic Commerce Protocol, aberto sob Apache 2.0, foi publicado por Stripe
e OpenAI em 29/09/2025: o agente repassa credencial de pagamento por token de uso programaticamente
controlado, permissionado e logado, e **o lojista continua sendo o merchant of record**. O Instant
Checkout no ChatGPT começou com vendedores do Etsy e mais de um milhão de lojistas Shopify. A Visa
introduziu o Trusted Agent Protocol em outubro de 2025 e anunciou em 18/12/2025 "centenas de
transações reais iniciadas por agente", com mais de 100 parceiros e mais de 30 no sandbox do Visa
Intelligent Commerce — Skyfire com a Consumer Reports, Nekuda, PayOS, Ramp em B2B. A Mastercard
tem Agent Pay, Verifiable Intent (março de 2026, com o Google) e Agent Pay for Machines (junho de
2026, 30+ parceiros, incluindo Coinbase e Cloudflare). Em 14/04/2026 o American Express lançou o ACE
Developer Kit e **assumiu cobrir a compra errada feita por agente registrado** quando o agente envia
à Amex a intenção de compra autenticada. Em 10 e 11/09/2026, Ant International, Visa e Mastercard
anunciaram o **Know Your Agent**, um framework de interoperabilidade de identidade de agente
baseado no SAFR, convocado pela autoridade monetária de Singapura: certificação comum, monitoramento
contínuo por sinais de identidade e transação, e atribuição rastreável a um operador validado. [8][9][10][11][15][16][28]

**O trilho de mercado entre máquinas.** Em 30/06/2026 a OKX abriu a desenvolvedores um mercado em
que agentes descobrem, contratam e pagam outros agentes, com identidade persistente e reputação
on-chain portátil, depois de uma beta fechada com 50 provedores. Star Xu, fundador: "a próxima
década será definida por empresas de uma pessoa só que geram mais de um milhão de dólares por ano,
porque cada indivíduo ganha efetivamente uma força de trabalho ilimitada". Albert Castellana, da
GenLayer, apontou o que falta: resolução de disputa. [12]

**O trilho de viagem.** A OAG mede a razão consulta/reserva por época: 100 a 200 buscas por bilhete
entre 1995 e 2005; cerca de 1.000 na era do metabusca; 10 a 20 mil na era das OTAs; e, na era
agêntica que começa em 2026, projeções de Amadeus e Sabre de **200 mil buscas por bilhete vendido**,
com 2 milhões como ponto médio plausível depois de 2030. A resposta da indústria já está em campo: o
Intelligent Shopping da Sabre, com o Mosaic Cache, lançado em fevereiro de 2026, entrega 95% de
alinhamento entre oferta em cache e oferta viva, resposta abaixo de 500 ms e até 28% de redução de
look-to-book; o filtro Advanced Airline Profile da Amadeus barrou 70% das requisições irrelevantes
em piloto. A AltexSoft estima o gasto da indústria com infraestrutura de shopping saindo de ~US$ 100
milhões nos anos 1990 para US$ 15 bilhões nos anos 2010, com projeção de US$ 90 bilhões, dos quais
cerca de 80% sustentando tráfego que responde por menos de 25% das reservas. [6][7]

**O Brasil.** Em 19/05/2026 a Iniciador lançou o primeiro MCP de pagamentos agênticos via Pix: o
agente propõe, o usuário recebe notificação, confere valor e destinatário, autoriza por biometria
(Face/Touch ID, FIDO2), o banco valida e o Pix liquida — "o agente nunca move dinheiro sozinho".
A cobertura declarada é de mais de 95% da população adulta, via Open Finance regulado pelo Banco
Central, e a Stone foi o primeiro cliente em produção. O Pix chegou a 44% do checkout online
brasileiro em 2026, contra 41% dos cartões, e o Open Finance cresceu 59% em volume de transações.
A Elo levou a 5 mil clientes um agente de compra de passagem com a Decolar dentro do WhatsApp — com
o humano ainda confirmando a compra. A Visa fez no Brasil os primeiros testes de transação agêntica
em tempo real em março de 2026. Na FEBRABAN TECH 2026 (24 a 26/08), Giancarlo Greco, CEO da Elo:
"vai chegar um momento no qual todos terão agentes de compra"; a mesma cobertura registra 12% já
confiando na tecnologia para pagar. [22][23][24][25]

### O que existe e ainda não funciona

**A demanda.** O rastreador de adoção do x402 consolida o levantamento da CoinDesk de março de 2026:
cerca de 167 milhões de transações liquidadas, 85% na Base — e **US$ 28 mil por dia de comércio
real**, com aproximadamente metade da atividade classificada como artificial, dividida entre
auto-negociação (mesma carteira dos dois lados) e lavagem de volume. Um dia de fevereiro registrou
3,8 milhões de transações e cerca de US$ 2 milhões de volume, atribuídos a teste de infraestrutura.
A frase dos analistas da Artemis: "o boom dos pagamentos de agente no x402 ainda é, em grande parte,
uma miragem". [2][29]

**O modelo decidindo com dinheiro.** A Alpha Arena, da Nof1, pôs oito sistemas de fronteira em quatro
competições, US$ 10 mil reais cada, sobre ações de tecnologia dos EUA, duas semanas por rodada. O
portfólio como um todo perdeu cerca de um terço do capital; nos 32 conjuntos de resultados, um modelo
terminou no lucro apenas seis vezes. Sob o mesmo prompt, o Grok 4.20 fez 158 operações e o Qwen fez
1.418. Jay Azhang, fundador da Nof1: "os LLMs não conseguem realmente ganhar dinheiro sozinhos; você
precisa de um arcabouço e de uma plataforma de dados muito sofisticados só para lhes dar uma chance".
O blog Flat Circle acompanhou 11 arenas de mercado: em só duas o modelo mediano foi lucrativo. [21]

**A regra de quem paga o erro.** Não há norma. A estrutura regulatória americana de 2026 trata o
patrocinador humano ou a empresa como responsável, porque **o agente não tem personalidade
jurídica**: não abre conta, não detém propriedade, não assina contrato em nome próprio. O que existe
de concreto é o GENIUS Act (18/07/2025) para emissores de stablecoin e a proposta conjunta
FinCEN/OFAC de 08/04/2026 tratando emissores permitidos como instituições financeiras sob o Bank
Secrecy Act. Nada disso responde quem paga a compra errada. No Brasil, o Banco Central ainda não
regulamenta pagamento agêntico; a expectativa de mercado, em julho de 2026, era de consulta pública
em dois a três meses. [23][27][30]

**O direito de barrar o agente.** A Amazon processou a Perplexity em novembro de 2025. Em 09/03/2026
a juíza Maxine Chesney, do distrito norte da Califórnia, concedeu liminar bloqueando o Comet de
acessar áreas protegidas por senha, aceitando a distinção entre "com permissão do usuário" e "sem
autorização da Amazon" sob a lei federal de fraude e abuso computacional. Em 05/08/2026 a Nona Corte
de Apelações anulou a liminar: quando o usuário manda o agente agir, **quem acessa é o usuário**. A
motivação econômica do bloqueio está nos números: a Amazon fez US$ 68,6 bilhões de receita de
publicidade em 2025, e o Rufus é creditado com US$ 12 bilhões de vendas incrementais anualizadas. [17][18][19]

**A legibilidade por máquina.** A Adobe Analytics mediu, no 1º trimestre de 2026, crescimento de 393%
no tráfego de referência de IA para varejo dos EUA, com conversão 42% melhor que o tráfego não-IA em
março de 2026 — doze meses antes, esse tráfego convertia à metade da taxa comum. E mediu a lacuna
que interessa a quem projeta: as home pages dos varejistas com maior participação de visita de IA
pontuam 62% acima das do último grupo em legibilidade para citação. A medida de julho de 2026,
sobre uma coorte ampliada, põe número absoluto na lacuna: **39% das home pages de varejo não são
legíveis por modelo de linguagem** — de 76% de legibilidade em vestuário a 59% em mercado —, com o
tráfego de IA já convertendo 60% melhor pelo décimo primeiro mês seguido. [26][31]

### Quem constrói

Coinbase, Cloudflare e AWS no trilho de protocolo; OpenAI e Stripe no ACP; Google no AP2; Visa,
Mastercard, American Express e Ant International na identidade e na responsabilidade; Amadeus, Sabre
e Duffel na distribuição de viagem; OKX no mercado entre agentes; no Brasil, Iniciador, Stone, Elo e
os bancos grandes dentro do Open Finance.

### O número que descreve a adoção hoje

Não há um. Há dois, e a distância entre eles é o assunto deste mapa: **169 milhões de pagamentos
liquidados** e **US$ 28 mil por dia de comércio real**. Para adoção de consumidor, a medida honesta
é a do eMarketer em agosto de 2026: "o número de consumidores usando agentes para comprar continua
pequeno". No Brasil, 12% declaram já confiar na tecnologia para pagar.

## 4. As disrupções-raiz

Três raízes passaram no critério de maturidade. Duas candidatas foram recusadas; a recusa está
registrada ao final desta seção.

### Raiz 1 — O pagamento vira uma resposta de protocolo

O preço deixa de ser um campo de formulário e passa a ser um cabeçalho HTTP. O servidor responde 402
com um preço; o cliente paga e repete; um facilitador verifica; o recurso é entregue. Tudo dentro de
uma requisição, sem cadastro, sem sessão, sem humano.

**1. O que rompe.** Rompe o pressuposto de que todo pagamento tem um titular humano presente no ato
da autorização — e, junto com ele, o piso de custo que definia o menor produto vendável. Com
liquidação a fração de centavo, o preço mínimo viável de um bem digital cai cerca de três ordens de
grandeza em relação ao mínimo prático do cartão. Não é "o mesmo, mais barato": é a existência de uma
classe de mercadoria que antes não podia ser vendida porque cobrar custava mais que o produto.

**2. Por que agora, e não há cinco anos.** Porque três pré-condições só fecharam agora: liquidação
em stablecoin com custo sub-centavo e finalidade em segundos; a padronização do 402 sob uma fundação
neutra (Linux Foundation, com AWS, Cloudflare, Anthropic e Circle); e — o ponto decisivo — a
**implementação na borda**, não no aplicativo: AWS WAF e CloudFront em disponibilidade geral, regras
de Cloudflare em 330+ cidades. Em 2021 o 402 era uma curiosidade de RFC sem trilho e sem borda.

**3. Onde está na difusão.** `produto de nicho`. Volume de protocolo alto, comércio real ínfimo
(US$ 28 mil/dia), metade artificial. Não é adoção precoce: é infraestrutura pronta sem mercado.

**4. O que ainda falta acontecer.** Um comprador que não seja outro experimento; tributação e nota
fiscal (o próprio noticiário técnico registra isso como não resolvido para adoção empresarial); e
uma resposta ao argumento mais duro contra a raiz, formulado num comentário público e não refutado:
se o endpoint gratuito continua servindo o mesmo conteúdo, por que um bot pagaria?

**Quem tem incentivo para bloquear ou capturar.** A própria borda. Cloudflare e AWS não são
intermediários neutros aqui: a Cloudflare é merchant of record do pay per crawl e define, por
padrão, quem é bloqueado a partir de 15/09/2026. Quem opera a cobrança tem incentivo para que a
cobrança passe por si, e não para que ela seja um bem comum.

### Raiz 2 — O mandato delegado: a credencial que compra sozinha, com escopo, identidade e limite

Uma pessoa deixa de autorizar compras e passa a autorizar um agente: um token permissionado, com
limite, categoria e registro, que o lojista consegue reconhecer e a rede consegue rastrear.

**1. O que rompe.** Rompe a identidade do comprador — o titular deixa de ser a pessoa e passa a ser
o par (pessoa, agente registrado) — e, com ela, rompe o lugar onde a compra é decidida. Se a escolha
acontece antes de qualquer página carregar, o funil, o merchandising e a própria noção de "visita"
deixam de descrever o que acontece. Rompe também o pressuposto silencioso de toda economia de
atenção: o de que olhar custa alguma coisa a quem olha.

**2. Por que agora, e não há cinco anos.** Tokenização de cartão existe desde os anos 2010. O que
não existia era (a) a **intenção verificável** assinada criptograficamente — Verifiable Intent, da
Mastercard, março de 2026; (b) o **registro do agente** como entidade reconhecível pelo emissor —
Amex ACE, abril de 2026; e (c) o acordo de **interoperabilidade de identidade entre redes
concorrentes** — KYA, setembro de 2026. Sem o terceiro, cada rede era uma ilha e o lojista teria de
implementar três protocolos incompatíveis para reconhecer o mesmo agente.

**3. Onde está na difusão.** `adoção precoce (<10%)`. O tráfego de IA cresce 393% ao ano e converte
42% melhor, mas o número de consumidores que deixam o agente **pagar** continua pequeno; no Brasil,
12% declaram confiar. Passa longe da maioria inicial de Rogers — que era o falseador declarado no
briefing.

**4. O que ainda falta acontecer.** Uma regra de quem paga o erro que não dependa de um emissor em
particular (hoje há um compromisso, o da Amex, e ele é do emissor, não do sistema); um caminho de
disputa e estorno que reconheça a figura do agente; e clareza sobre Regulation E e transmissão de
dinheiro nos EUA e sobre consentimento e arrependimento no Brasil.

**Quem tem incentivo para bloquear ou capturar.** A Amazon, com nome e número: US$ 68,6 bilhões de
receita de publicidade em 2025 e um assistente próprio creditado com US$ 12 bilhões incrementais. Um
agente de terceiro que compra sem passar pela busca patrocinada destrói o produto mais lucrativo da
casa. A tentativa de bloqueio pela via criminal fracassou em agosto de 2026; sobra o contrato e o
preço — e é aí que o KYA se encaixa.

### Raiz 3 — O agente como contraparte que vende, cobra e é cobrada

O agente deixa de ser só quem gasta e passa a ter receita própria, preço, reputação e — no limite —
orçamento para contratar terceiros, inclusive humanos.

**1. O que rompe.** Rompe o pressuposto de que o outro lado do balcão é uma empresa com registro e
um humano responsável. Rompe também a categoria "usuário": até aqui, usuário era quem consome. Um
agente que fatura 0,001 USDT por varredura de segurança é fornecedor, e um fornecedor sem
personalidade jurídica é uma figura que nenhum arcabouço de contrato, tributo ou responsabilidade
tem.

**2. Por que agora, e não há cinco anos.** Porque as quatro peças só ficaram prontas juntas em 2026:
carteira que o agente controla, identidade persistente, liquidação instantânea de valor muito baixo
e um mercado que case oferta e demanda entre agentes (OKX, junho de 2026) — mais a cobrança na borda,
que dá ao agente-vendedor um jeito de receber sem processar cartão. Antes, um agente podia gastar;
não podia receber.

**3. Onde está na difusão.** Entre `demo pública` e `produto de nicho`. Um mercado nomeado, um
punhado de provedores, e um estudo empírico de fevereiro de 2026 sobre agentes contratando humanos
num mercado real. Toda a cadeia derivada desta raiz carrega confiança rebaixada.

**4. O que ainda falta acontecer.** Resolução de disputa (a própria OKX incluiu a GenLayer como
parceira exatamente para isso); enquadramento tributário de receita auferida por software; e um
comprador que não seja outro agente do mesmo experimento — o mesmo problema da raiz 1, aqui com
menos volume ainda.

**Quem tem incentivo para bloquear ou capturar.** As plataformas de trabalho humano e os
verificadores de identidade. Um mercado onde agentes contratam pessoas atravessa a verificação de
"há um humano aqui" — e o estudo de fevereiro mostra que 32,7% das tarefas já vêm de origem
programática, com seis categorias de abuso ativas. Quem vende prova de humanidade tem incentivo
forte para fechar a porta, e boa justificativa para fazê-lo.

### Candidatos recusados como raiz

- **Comércio eletrônico, pagamento online e comparador de preço.** Recusados: adoção em maioria há
  mais de uma década; no Brasil, Pix e cartão somam 85% do checkout online. Tratados como contexto
  na seção 3. Pela regra prática da skill — se dá para fazer com o que já é comum em produto de
  massa, é maduro — nada do que um comparador faz hoje qualifica como ruptura.
- **Trading algorítmico.** Recusado: maduro desde os anos 2000. O elemento novo é o LLM **decidindo**,
  e a evidência de 2026 é de que ele decide mal (perda de um terço do capital, lucro em 6 de 32
  resultados). Não entra como raiz; entra como efeito de retroação em e12.2, com sinal forte, porque
  é justamente o resultado negativo que está sendo observável hoje.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O pagamento vira uma resposta de protocolo (HTTP 402 e liquidação sub-centavo)"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Publicadores passam a vender acesso por requisição, com preço devolvido na resposta HTTP, em vez de por assinatura ou anúncio"
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A unidade de venda de conteúdo encolhe de o artigo para a passagem que respondeu à pergunta"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Redações passam a escrever em unidades citáveis e precificáveis, e o layout deixa de ser o produto para virar embalagem de algo já vendido em separado"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O anúncio deixa de ser o modo padrão de pagar uma página, porque o leitor que chega não tem olhos"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Veículo pequeno sem borda paga perde o acesso a essa receita e a audiência se concentra em quem consegue cobrar na borda"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: "O micropagamento segue sem demanda e o 402 se firma como pedágio anti-bot, não como mercado"
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "Cloudflare e AWS capturam a camada de cobrança da web e passam a operar como instituição financeira de fato sem serem reguladas como tal"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Ferramentas e APIs passam a exibir preço por chamada legível pelo agente, e o catálogo de software vira uma tabela de preços lida por máquina"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O freemium desaparece da camada de API, porque o grátis para testar existia para converter um humano que decide e o agente não é convertido, apenas compara"
            sinal: fraco
            prazo: 2032
            confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Bens digitais baratos demais para terem preço passam a ter mercado, porque o piso de custo da transação caiu três ordens de grandeza"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O consentimento de compra deixa de ser um clique por transação e vira uma política de escopo escrita uma vez"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A pergunta quanto custa isto migra da tela para o log, e o extrato passa a ser a principal interface do produto"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "O 402 na borda cria uma fronteira econômica dentro do HTTP, e quem não tem acesso a dólar tokenizado fica do lado de fora do que passou a ser pago"
        sinal: fraco
        prazo: 2032
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O Brasil liquida pagamento de agente por Pix dentro do Open Finance em vez de stablecoin, e o comércio agêntico brasileiro nasce incompatível com o trilho global"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Agente estrangeiro precisa de um corretor de trilho para comprar no Brasil, e essa camada de tradução vira ponto de cobrança e de controle nacional"
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: "O mandato delegado: a credencial que compra sozinha, com escopo, identidade e limite"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "A razão consulta por reserva deixa de ser limitada pela paciência humana e o custo de responder vira o principal custo de vender"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O vendedor passa a cobrar pela consulta e não só pela compra, e o grátis para olhar acaba onde quem olha é máquina"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Surge um preço de atacado de consulta e com ele um agente de dois níveis, o que paga pela resposta viva e o que se contenta com o cache barato"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "A resposta em cache substitui a resposta viva e o preço que o agente vê deixa de ser o preço que existe"
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "A reclamação de consumo muda de objeto, de não recebi o produto para meu agente comprou um preço que não existia, e o ônus recai sobre quem serviu o cache"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "A página de produto deixa de ser desenhada para convencer e passa a ser desenhada para ser lida, e o que não é legível por máquina some da prateleira"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O ofício de escrever e desenhar vitrine se divide em duas profissões com públicos distintos, uma que fala com a pessoa depois da escolha e outra que fala com o agente antes"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A métrica de sucesso de uma peça de comunicação deixa de ser atenção e passa a ser recuperabilidade, ser citado pelo agente vale mais que ser visto pela pessoa"
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Marca vira restrição declarada dentro do mandato em vez de preferência construída na vitrine, e o que não está escrito no mandato não é considerado"
            sinal: medio
            prazo: 2031
            confianca: media
      - id: e7
        ordem: 1
        efeito: "Programa de fidelidade deixa de reter e passa a ser um parâmetro que o mandato otimiza ou contorna"
        sinal: fraco
        prazo: 2030
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A companhia responde abrindo ao agente só o dado de preferência do membro, e o programa vira a fonte de contexto que o agente precisa em vez de dissolver-se"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Não ter agente passa a custar caro, porque a tarifa boa exige identificação legível por máquina que a pessoa sozinha não consegue apresentar"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "O varejista grande descobre que não consegue barrar o agente por via judicial e passa a negociar acesso em vez de proibi-lo"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Acesso de agente vira contrato comercial com tabela, agente certificado entra e agente não registrado é tratado como bot, que é o que o Know Your Agent operacionaliza"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Quem emite a identidade do agente controla quem pode comprar, e o poder de excluir migra do dono do site para o consórcio que credencia"
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: "O agente como contraparte que vende, cobra e é cobrada"
    efeitos:
      - id: e9
        ordem: 1
        efeito: "Reputação portátil de agente vira o ativo que decide quem contrata quem, antes de qualquer avaliação de qualidade"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Aparece um score de agente, e ele é usado para precificar risco e não apenas para escolher fornecedor"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Agente novo não consegue trabalhar por falta de histórico, e o mercado de agentes reproduz a exclusão por ausência de crédito que já existe entre pessoas"
                sinal: fraco
                prazo: 2034
                confianca: baixa
      - id: e10
        ordem: 1
        efeito: "O erro do agente vira produto de seguro antes de virar regra de lei"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "A apólice, e não a norma, define na prática o que um agente pode fazer, porque o que a seguradora não cobre ninguém deixa o agente executar"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "A autonomia concedida a um agente passa a ser função do prêmio de seguro e não da sua capacidade técnica"
                sinal: fraco
                prazo: 2034
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "A exclusão de IA nas apólices gerais deixa o pequeno operador descoberto e trava a delegação real de dinheiro fora das grandes empresas"
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e11
        ordem: 1
        efeito: "Agente contrata humano, e o trabalho humano vira item de linha no orçamento de uma máquina"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "A contratação de humano por agente vira superfície de ataque, porque quem quer burlar verificação de identidade compra exatamente o humano que a verificação exige"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "A prova de que há uma pessoa do outro lado perde valor, e a interação passa a ser desenhada para provar intenção e não presença"
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "O preço passa a se mover na cadência da máquina também no varejo, e a coordenação entre agentes vira questão antitruste sem que haja acordo entre empresas"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "A Divisão Antitruste do Departamento de Justiça americano passa a tratar a homogeneidade do parque de algoritmos como o problema, e a diversidade obrigatória de modelos entra como remédio em acordo judicial"
            sinal: fraco
            prazo: 2033
            confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: "O resultado negativo das arenas de trading circula como prova de que o modelo não sabe decidir com dinheiro, e a delegação fica presa a compras de baixo risco"
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: "O comércio agêntico se estabiliza em compra de reposição e nunca alcança a compra de decisão, e o mercado fica muito menor do que o anunciado"
                sinal: fraco
                prazo: 2032
                confianca: baixa
```

### O que o bloco não diz — mecanismos, referências de prazo e cruzamentos

**Mecanismos, efeito a efeito.** Cada um foi escrito na forma "porque o efeito pai faz X".

- **e1** — porque o 402 devolve o preço na própria resposta, o publicador ganha um caminho entre
  bloquear tudo e liberar tudo; a Cloudflare chama isso de "terceiro caminho". *Classe de referência
  do prazo 2029:* HTTPS com Let's Encrypt — de lançamento (2015) a cerca de metade das páginas
  (2017–2018), ~3 anos, porque a adoção aconteceu numa camada de infraestrutura que se liga por
  configuração, sem reescrever o produto. Pay per crawl está exatamente nessa camada (regra de WAF).
  *Sinal forte:* três artefatos nomeados e em produção — AWS WAF/CloudFront em GA, Monetization
  Gateway em 330+ cidades, e o prazo de 15/09/2026 já com data.
- **e1.1** — porque a cobrança é por requisição e a requisição do agente é por um fato, não por uma
  leitura, a granularidade do que se vende acompanha a granularidade do que se cobra. *Sinal médio:*
  dois experimentos nomeados pela própria Cloudflare — Ceramic.ai, que paga o publicador quando o
  conteúdo aparece no resultado, e You.com, em que o agente compra uma peça premium sob demanda.
- **e1.2** — porque a regra padrão a partir de 15/09/2026 bloqueia crawler de uso misto **justamente
  nas páginas que hospedam anúncio**, a página monetizada por anúncio vira a menos acessível ao
  agente. O dono do site escolhe entre ser visto e ser lido.
- **e1.3** (retroação) — porque metade do volume é auto-negociação e lavagem e o comércio real é de
  US$ 28 mil/dia, a função econômica do 402 pode se reduzir a filtrar quem não quer pagar. O
  argumento mais forte contra a raiz continua sem resposta pública: se o endpoint gratuito serve o
  mesmo conteúdo, o bot não paga. *Prazo 2028 e sinal forte:* o dado já existe.
- **e2** — porque a liquidação sub-centavo torna viável cobrar por execução, o preço deixa de ser
  mensalidade. *Artefatos:* na OKX, TinyDock a 0,01 USDT por execução e CertiK a 0,001 USDT por
  varredura; a AWS cobra a monetização dentro do preço padrão do WAF.
- **e3.1** e **e3.1.1** — porque o escopo é declarado uma vez e exercido muitas, a tela de compra
  deixa de existir e o único lugar onde o preço reaparece é o registro. É a consequência de interação
  mais direta deste mapa, e ela já está desenhada nos produtos: limites de gasto por período,
  restrição por categoria de estabelecimento e revogação instantânea de mandato.
- **e4** e **e4.1** — porque o trilho padrão do x402 liquida em USDC na Base, o acesso ao que passou
  a ser pago depende de acesso a dólar tokenizado, regulado de forma desigual. No Brasil o caminho de
  menor resistência é outro: o Pix já é 44% do checkout, o consentimento por biometria dentro do
  Open Finance já é regulado pelo Banco Central, e a Iniciador já entregou o MCP. *Classe de
  referência do prazo 2030:* o próprio Pix — de lançamento (nov/2020) a maioria dos pagamentos
  digitais, cerca de 3 a 4 anos, porque o Banco Central impôs obrigatoriedade aos grandes. Se houver
  consulta pública em 2026–2027, o mesmo mecanismo se repete.

- **e5** — porque o mandato transfere a decisão a um processo que não paga custo de atenção, o
  número de consultas por reserva deixa de ser limitado pela paciência humana. *Teste de
  especificidade:* troque a raiz por "melhor busca" e a frase não serve — busca melhor reduz
  consultas por reserva; mandato sem atenção as multiplica. *Classe de referência do prazo 2028:* a
  própria série da OAG, em que cada salto de camada (metabusca, OTA) levou cerca de 10 anos para uma
  ordem de grandeza — mas aqui o salto já foi medido em 2026 e a resposta defensiva já está em
  produção (Sabre Mosaic Cache, fev/2026). *Sinal forte:* dois artefatos com número — 95% de
  alinhamento e −28% de L2B na Sabre; 70% de requisições filtradas na Amadeus.
- **e5.2** e **e5.2.1** — porque a defesa contra o volume é o cache pré-computado, os 5% de
  divergência entre a oferta em cache e a oferta viva deixam de ser detalhe técnico e passam a ser a
  distância entre o preço mostrado e o preço que existe. É daí que sai o tipo novo de reclamação.
- **e6** — porque o agente escolhe a partir do feed e não do texto persuasivo, o que não é legível
  some da consideração. *Sinal forte e confiança alta, excepcionalmente, porque há medida direta:*
  o tráfego de IA converte 42% melhor e as home pages dos varejistas com mais visita de IA pontuam
  62% acima em legibilidade para citação. É o único efeito de 1ª ordem deste mapa com métrica
  publicada dos dois lados (causa e efeito). *Classe de referência do prazo 2029:* adoção de dados
  estruturados para rich snippets, ~4 anos do lançamento à maioria dos grandes varejistas, porque
  também foi mudança de marcação e não de produto.
- **e7** — porque o mandato otimiza preço e adequação e não paga o custo emocional de trocar,
  fidelidade deixa de ser retenção e vira restrição. *Sinal fraco, deliberadamente:* os números de
  intenção de troca que circulam na imprensa de viagem eu não consegui abrir na fonte; ver seção 8.
  O mecanismo se sustenta sem eles; o tamanho do efeito, não.
- **e7.1** (retroação) — porque o que falta ao agente é contexto de preferência, e o programa de
  fidelidade é justamente onde esse contexto está armazenado, o programa pode se fortalecer em vez de
  dissolver-se. **Isto contradiz e7 de propósito; ver "Contradição", abaixo.**
- **e8** — porque a Nona Corte decidiu em 05/08/2026 que quem acessa é o usuário, a lei de fraude
  computacional deixa de servir como instrumento de bloqueio, e sobra negociar. *Sinal forte:*
  liminar e reversão são artefatos datados. *Confiança alta* é sustentável aqui porque o efeito já
  ocorreu — o que resta é a extensão.
- **e8.1** — porque o KYA padroniza certificação, monitoramento e atribuição a operador validado
  entre três redes concorrentes, a identidade do agente vira condição de entrada com tabela.

- **e9** e **e9.1** — porque num mercado em que o contratante também é software não há marca nem
  relação, sobra histórico verificável; e porque a seguradora precisa de um número para escrever a
  apólice. O aiSure da Munich Re contrata uma taxa de erro aceitável **antes** de emitir a apólice:
  isso é um score por outro nome, e ele já existe.
- **e10** — porque nenhuma norma diz de quem é o prejuízo e o mercado precifica incerteza mais rápido
  que o legislador. *Sinal forte:* três artefatos — Amex assumindo o erro em 14/04/2026, apólices
  afirmativas via Lloyd's e Munich Re, e a retirada de cobertura nas apólices gerais. *Classe de
  referência do prazo 2029:* seguro cibernético, que existiu como produto de nicho cerca de 5 anos
  antes de virar item padrão de contrato empresarial, pelo mesmo motivo — a lei demorou a dizer quem
  pagava.
- **e11** e **e11.1** — porque um agente com carteira pode pagar por aquilo que não consegue fazer, e
  o que ele não consegue fazer é quase sempre corpo, conta ou documento. O estudo de fevereiro de
  2026 sobre a RENTAHUMAN.AI achou 303 recompensas, 32,7% vindas de chave de API ou MCP, custo
  mediano de US$ 25 por tarefa maliciosa, e seis categorias de abuso ativas — com um conjunto de
  regras defensivas sinalizando 17,2% delas com um único falso positivo. *Sinal médio:* um mercado e
  um paper, não três.
- **e12** — porque agentes que reprecificam a cada consulta fecham o laço entre observar e reagir. O
  contrapeso está publicado: Keppo, Li, Tsoukalas e Yuan (mar/2026) mostram que a coordenação entre
  agentes de LLM **emerge e é frágil** — o sobrepreço cai de 22% para 10% quando os agentes têm
  paciência diferente, e para 7% com acesso assimétrico a dados; diferença de tamanho de modelo, ao
  contrário, gera dinâmica líder-seguidor que *estabiliza* a coordenação. Mais de 2.000 horas de
  computação.
- **e12.1** — o efeito genérico "o regulador cria uma categoria nova" está proibido por esta skill.
  Ele entra aqui com ator e mecanismo nomeados: a Divisão Antitruste do DOJ já obteve acordo
  proposto no caso RealPage obrigando o software a **deixar de usar informação não pública de
  concorrentes** para definir preço, sob a teoria de acordo tácito no artigo 1º do Sherman Act, com
  doze procuradores-gerais estaduais envolvidos. O remédio "diversidade de algoritmos" é a extensão
  direta dessa teoria ao achado de Keppo et al. — não é invenção minha, é a conclusão explícita do
  próprio paper. Ainda assim: sinal fraco, confiança baixa.

**Convergência — o porteiro muda de lado.** Dois netos de raízes diferentes chegam ao mesmo lugar.
`e1.3.1` (Cloudflare e AWS capturam a camada de cobrança da web) e `e8.1.1` (quem emite a identidade
do agente controla quem pode comprar) descrevem a **mesma transferência de poder** por caminhos
independentes: o direito de deixar entrar migra de quem é dono do conteúdo ou da loja para quem opera
a borda ou credencia a identidade. É o achado mais valioso deste mapa, e ele não estava na pergunta
inicial. Uma segunda convergência, mais rasa: `e1` (vender acesso por requisição) e `e5.1` (cobrar
pela consulta) chegam à mesma conclusão — a consulta vira produto — venha ela de um crawler de treino
ou de um agente de compra.

**Retroalimentação positiva.** `e10` (o erro do agente vira produto de seguro) **reforça a raiz 2**:
o mandato só é delegado de verdade quando alguém cobre o prejuízo. O compromisso da Amex de abril de
2026 é literalmente isso — e o próprio executivo que o anunciou, Luke Gebb, resumiu o problema com
clareza: "até aqui provavelmente houve tantos comunicados de imprensa sobre comércio agêntico quanto
transações", e "o espaço ainda não descobriu o que fazer com esse risco". Ciclo: mais cobertura →
mais delegação → mais volume → mais dado atuarial → mais cobertura.

**Retroalimentação negativa.** `e1.3` **enfraquece a raiz 1**: se o comprador que paga não aparece, o
402 se estabiliza como pedágio defensivo, e o mercado de micropagamento que justificaria a raiz não
se forma. `e12.2` faz o mesmo com a raiz 2, por outro caminho: o resultado público das arenas de
trading vira o argumento pronto de quem não quer delegar.

**Contradição, registrada e não resolvida.** `e7` diz que a fidelidade se dissolve; `e7.1` diz que ela
se fortalece. Não podem coexistir no mesmo mercado. **O que decide:** se o dado de preferência do
membro fica acessível ao agente por interface programática. Se ficar, o programa vira a fonte de
contexto de que o agente precisa e `e7.1` ganha. Se a companhia mantiver o dado fechado para se
proteger, o agente otimiza só por preço e `e7` ganha. Hoje há sinal dos dois lados e nenhum decisivo.
Segunda contradição: `e12` (o preço se move na cadência da máquina, com risco de coordenação) contra
o achado de Keppo et al. (a coordenação é frágil). **O que decide:** a homogeneidade do parque de
modelos. Se dois ou três modelos dominarem a precificação de um vertical, a heterogeneidade que hoje
protege desaparece.

**Cobertura STEEP e quem perde.** *Social:* e11.1.1 (a prova de presença humana perde valor) e
e7.1.1 (não ter agente fica caro). *Tecnológico:* e1, e5, e5.2, e6. *Econômico:* e2, e3, e5.1, e9,
e10, e12. *Político:* e4, e8.1, e12.1. *Ecológico:* **ficou vazia** — não forcei. O consumo de
energia de 200 mil consultas por bilhete é uma consequência plausível, mas não encontrei nenhuma
medida, estimativa ou declaração pública ligando volume agêntico de busca a consumo energético, e
inventar o número seria exatamente o que a seção 8 existe para denunciar. Registro a lacuna.
*Quem perde,* nomeado: veículos pequenos sem borda paga (e1.2.1); intermediários cuja proposta de
valor era ser a camada de descoberta (e5.1, e8); quem escreve para convencer e não para ser lido
(e6.1); pessoas sem agente diante de tarifa condicionada a identificação legível por máquina
(e7.1.1); agentes novos sem histórico (e9.1.1); pequenos operadores sem cobertura de seguro (e10.2);
e trabalhadores humanos contratados por software para tarefas que a verificação de identidade exige
(e11.1).

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. Agente contratando humano.** *Onde foi visto:* estudo empírico submetido em 23/02/2026 sobre a
RENTAHUMAN.AI — 303 recompensas analisadas, 32,7% originadas de chave de API ou canal MCP, custo
mediano de US$ 25 por tarefa maliciosa, seis categorias de abuso ativas [13]. *O que mudaria:*
inverte a direção da automação — em vez de a máquina substituir o trabalho, a máquina **compra**
trabalho, e compra justamente o que a verificação de identidade exige. *Sinal observável de que está
crescendo:* a fração de tarefas de origem programática subindo acima de 50% num mercado generalista
(e não num especializado), ou uma plataforma grande de trabalho publicando API de contratação por
agente.

**2. Conteúdo vendido peça a peça ao agente.** *Onde foi visto:* os dois experimentos que a própria
Cloudflare cita ao abrir o pay per crawl para outros modelos — Ceramic.ai, que paga o publicador
quando seu conteúdo aparece no resultado, e You.com, em que o agente compra uma peça premium sob
demanda [4][5]. *O que mudaria:* a unidade de venda do jornalismo. *Sinal observável:* um publicador
de porte anunciar preço por requisição **público** — hoje o preço é negociado, não listado.

**3. O trilho brasileiro seguindo por dentro do Open Finance, não pela stablecoin.** *Onde foi visto:*
o MCP de pagamento agêntico via Pix da Iniciador, com a Stone em produção em três meses, e a
expectativa de consulta pública do Banco Central registrada em julho de 2026 [22][23]. *O que
mudaria:* o Brasil teria comércio agêntico regulado e com humano no fluxo antes de ter comércio
agêntico autônomo — o inverso da sequência americana. *Sinal observável:* a primeira remoção da
confirmação humana num produto brasileiro de massa; hoje a Elo mantém a confirmação em todos os 5 mil
clientes do piloto com a Decolar [24].

**4. Um regulador de mercado emergente escrevendo o padrão de identidade de agente.** *Onde foi
visto:* o KYA é explicitamente baseado no SAFR, convocado pela autoridade monetária de Singapura
[9]. *O que mudaria:* a norma de fato do comércio agêntico global nasceria em Singapura, não em
Washington nem em Bruxelas. *Sinal observável:* o Banco Central brasileiro ou o BCE citando SAFR ou
KYA por nome em documento oficial.

### Wildcards

**Tarifa exclusiva para agente.** *Mecanismo:* o custo de servir um cliente-agente é estruturalmente
menor — não liga para o call center, não pede reembolso por telefone, não precisa de atendimento em
balcão — e, desde o KYA, existe um meio padronizado de **saber** que o comprador é um agente
certificado. Uma companhia lança uma tarifa mais barata condicionada ao canal agêntico certificado.
*Por que é improvável:* destrói a tabela tarifária, cria discriminação de preço visível e explícita
(o que atrai regulador de consumo), e contradiz a lógica de fidelidade que as companhias acabaram de
decidir defender. *O que faria com o mapa:* inverteria `e7.1.1` de efeito de terceira ordem em efeito
de primeira — não ter agente passaria a custar caro imediatamente, e a delegação deixaria de ser
escolha e viraria necessidade econômica. *Sinal precoce:* qualquer companhia publicando tarifa com a
condição "somente por canal certificado".

**Uma corte declara nulo o contrato fechado por agente sem humano.** *Mecanismo:* o Código de Defesa
do Consumidor brasileiro dá sete dias de arrependimento na compra fora do estabelecimento; um agente
que compra dezenas de vezes por semana torna o exercício desse direito ingovernável tanto para o
consumidor quanto para o lojista. Uma ação civil pública, ou uma decisão europeia equivalente,
declara que a manifestação de vontade exige ato humano no momento da contratação. *Por que é
improvável:* a estrutura regulatória de 2026 já resolveu o problema por outro caminho — o agente não
tem personalidade jurídica, logo quem contrata é sempre o patrocinador humano, e o contrato é dele
[27]. *O que faria com o mapa:* travaria a raiz 2 no Brasil e faria o país saltar direto para o
desenho da Iniciador — agente propõe, humano autoriza — como forma permanente, não transitória.
*Sinal precoce:* a primeira ação civil pública ou nota técnica de Procon sobre compra feita por
agente.

**Convergência do parque de modelos derruba a proteção contra conluio.** *Mecanismo:* toda a
fragilidade medida por Keppo et al. depende de heterogeneidade — paciência diferente, dado
assimétrico, algoritmos distintos [14]. Se a precificação de um vertical convergir para dois ou três
modelos da mesma família, os agentes ficam simétricos por construção, e a coordenação que hoje
colapsa passa a se sustentar. *Por que é improvável:* a diversidade atual é alta e o custo de trocar
de modelo é baixo. *O que faria com o mapa:* `e12.1` sairia de confiança baixa para alta e mudaria de
ordem — a resposta antitruste viraria efeito de primeira ordem, e a diversidade obrigatória de
modelos entraria como obrigação de compliance de precificação. *Sinal precoce:* participação de um
único modelo acima de ~70% em ferramentas de precificação de um setor.

## 7. Contra o próprio mapa

Esta é a bateria do §6 da skill, rodada sobre o mapa já pronto, com o resultado aplicado.

### 1. Pré-mortem: é 2036 e este mapa se mostrou errado. Por quê?

**Razão 1 — a demanda nunca apareceu, e o mapa confundiu infraestrutura com mercado.** É a hipótese
mais provável, e a evidência dela já existe hoje: 169 milhões de pagamentos e US$ 28 mil por dia de
comércio real, metade artificial. Um mapa construído sobre padrões, fundações e comunicados está
lendo a oferta e chamando de adoção. *Aponta para:* e1, e2, e3 — toda a raiz 1. *Aplicado:* o efeito
de retroação e1.3 foi mantido com **sinal forte e prazo 2028**, mais cedo que qualquer efeito de
aceleração da mesma raiz. A raiz 1 inteira ficou sem nenhum efeito de 1ª ordem com confiança alta.

**Razão 2 — o humano nunca saiu do fluxo, e "agente com carteira" foi sempre "agente com botão".**
O desenho brasileiro (agente propõe, humano confirma por biometria) e o piloto da Elo com 5 mil
clientes são a evidência de hoje; a Amex condiciona a proteção a "intenção de compra autenticada". Se
esse desenho vencer, o que este mapa chama de mandato é, na prática, um formulário pré-preenchido.
*Aponta para:* toda a raiz 2. *Aplicado:* rebaixamentos em e5.1 e e7 (abaixo), e o cenário indesejável
da seção 9 foi reescrito em torno disto.

**Razão 3 — o mapa confundiu o que é medido com o que é importante.** A razão consulta/reserva é bem
medida porque a indústria de viagem tem instrumentação obsessiva; isso não significa que ela seja o
lugar onde a mudança é maior. Eu posso ter escolhido viagem porque viagem tem número, e não porque
viagem importa. *Aponta para:* e5 e sua cadeia. *Aplicado:* está declarado no viés (item 6) e a
prosa de e5 passou a nomear a classe de referência em vez de tratar o número como destino.

### 2. Extrapolação linear — o que é só "mais do mesmo, maior"

`e2` (API com preço por chamada) é extrapolação: cobrança por uso já existe em nuvem e em API desde
os anos 2010; o novo seria só a granularidade. **Não-linearidade que o mantém em pé:** o sujeito que
compara mudou. Precificação por uso com humano decidindo é limitada pela capacidade do humano de
comparar planos; com agente comparando, o preço vira parâmetro de busca e a elasticidade muda de
regime. É por isso que `e2.1` (fim do freemium) é o efeito que carrega a não-linearidade, e não `e2`.
`e2.1` continua com **confiança baixa** por isso.

`e9` (reputação portátil) também cheirava a extrapolação de avaliação por estrelas. **O que o
salva:** o contratante deixa de ser humano, e reputação lida por humano e reputação lida por máquina
têm propriedades diferentes — a segunda é comparável, agregável e transferível entre mercados. Se não
fosse por isso, teria caído para contexto.

### 3. Velocidade de adoção contra a classe de referência

Confrontei cada prazo de efeito com sinal fraco.

- `e4` (fronteira econômica dentro do HTTP): o prazo 2032 exige que a liquidação em stablecoin se
  torne condição de acesso em algum volume relevante. Nenhuma classe de referência sustenta isso —
  adoção de meio de pagamento transfronteiriço em massa (cartão, ~30 anos; Pix, 4 anos, mas com
  mandato regulatório nacional). **Mantive o ano e rebaixei a confiança** (ver registro).
- `e12.1` (remédio antitruste de diversidade de algoritmos): 2033 exige que o DOJ estenda a teoria do
  RealPage a agentes de LLM e obtenha acordo. RealPage levou de 2022 a 2026 do início da investigação
  ao acordo proposto — quatro anos, num caso com documento interno e software único. Um caso sem
  acordo explícito e com agentes heterogêneos é mais difícil, não menos. 2033 é o piso, não a
  estimativa central. Declarado na prosa; confiança já era baixa.
- `e1.1.1`, `e6.1.1`, `e11.1.1` — todos em 2033–2034 e todos com confiança baixa: é o cinto de
  segurança certo para efeito de terceira ordem que depende de mudança de prática profissional.

### 4. A raiz que não acontece — o que sobra do mapa?

- **Sem a raiz 1** (o pagamento não vira resposta de protocolo, o 402 vira só anti-bot): sobram as
  raízes 2 e 3 quase intactas, porque ambas rodam sobre trilho de cartão e de Pix, não sobre
  stablecoin. Perde-se e1–e4 e toda a discussão de unidade de conteúdo. **O mapa encolhe mas não cai.**
- **Sem a raiz 2** (o mandato nunca sai do "agente propõe, humano confirma"): perde-se e5–e8, que é a
  parte com mais evidência medida. Sobra a raiz 1 (que não depende de mandato: um crawler pagando não
  tem dono comprando) e sobra a raiz 3 parcialmente — mercados entre agentes não precisam de
  consumidor humano. **O mapa fica menor e menos interessante para o público deste documento.**
- **Sem a raiz 3** (o agente nunca vira contraparte que recebe): perde-se e9–e12. As raízes 1 e 2
  ficam de pé. **O mapa perde a parte especulativa e ganha em solidez.**

Nenhuma raiz carrega as outras. Isso é o resultado que eu queria do teste — não há uma raiz só
disfarçada em três. Mas há uma dependência assimétrica que preciso declarar: **as raízes 2 e 3
compartilham a camada de identidade de agente** (KYA, TAP, Agent Pay). Se a identidade de agente não
se padronizar, as duas ficam mancas ao mesmo tempo, e aí sim o mapa tem um ponto único de falha que a
estrutura em três raízes esconde.

### 5. Suposições escondidas

1. **Que o trilho de liquidação continua sendo stablecoin em blockchain pública.** É a premissa da
   raiz 1 inteira e ela não está declarada em lugar nenhum do bloco YAML. Quebrada, e4 muda de
   sentido. *Virou rebaixamento de e4 e alimenta o sinal fraco 3.*
2. **Que a plataforma continua permitindo.** Todo o mapa assume que ChatGPT, Gemini e similares
   continuam abrindo o agente ao comércio de terceiros em vez de fechar o próprio circuito. Se o
   agente que compra for o da loja (Rufus) e não o do usuário, e8 se inverte: a loja não negocia
   acesso, ela vence. *Virou o eixo do cenário indesejável.*
3. **Que o modelo continua barato o bastante para consultar 200 mil vezes por bilhete.** Se o custo
   de inferência subir, a economia de e5 se resolve sozinha. Não encontrei dado que sustente ou negue
   isso, e por isso não virou efeito — mas é a premissa mais silenciosa do mapa.
4. **Que existe eletricidade e capacidade para esse volume.** Ver a lacuna ecológica declarada na
   seção 5. Premissa não testada.
5. **Que o resultado negativo das arenas de trading se generaliza para compra.** Ele não
   necessariamente se generaliza: perder dinheiro operando um mercado adversarial é um problema muito
   mais difícil que comprar uma passagem dentro de um orçamento. *Isto enfraquece e12.2, que eu havia
   escrito com confiança maior; ver registro.*

### 6. Viés do autor

Dois, nomeados.

**Viés de instrumentação.** Escolhi viagem como o ramo mais desenvolvido do mapa porque viagem é o
setor com a melhor métrica pública (razão consulta/reserva medida por década). Isso é escolher pelo
farol, não pela chave. É possível que a mudança maior esteja em B2B — compra recorrente de insumo,
onde não há emoção de marca nem call center — e eu não a vi porque ela não é medida em público. Não
corrigi isso no mapa (não tenho dado para corrigir); declaro.

**Viés de quem gosta de protocolo.** `e1` e sua cadeia estão aqui em parte porque eu acho elegante a
ideia de um código HTTP dormente há trinta anos voltar como camada econômica. Essa elegância não é
argumento. Foi justamente por reconhecer isso que a retroação `e1.3` recebeu sinal forte e o prazo
mais curto da raiz — o contrapeso é deliberado.

### 7. Calibração

Confiança por ordem, depois dos ajustes: **1ª ordem** — alta 4, média 7, baixa 1. **2ª ordem** —
alta 0, média 16, baixa 2. **3ª ordem** — alta 0, média 0, baixa 14. A distribuição cai com a ordem,
como exige a skill. As quatro confianças altas de 1ª ordem (e5, e6, e8, e10) são todas efeitos com
artefato datado **já observável**, não projeções: a razão consulta/reserva já explodiu e a defesa já
está em produção; a legibilidade por máquina já é medida dos dois lados; a decisão da Nona Corte já
saiu; as apólices já estão sendo escritas.

### Registro de alterações

Cada linha traz o valor **antes** e **depois**. A bateria derrubou alguma coisa em cada uma das três
raízes, conforme a cota mínima.

**Raiz 1**
- `e1`: prazo **2028 → 2029**, porque a classe de referência (HTTPS/Let's Encrypt, ~3 anos de
  lançamento a metade das páginas) não sustenta 2028, e o prazo de 15/09/2026 é de *bloqueio*, não de
  adoção de cobrança.
- `e3`: sinal **forte → medio**, porque os artefatos que eu contava (OKX, AWS) sustentam preço por
  chamada de *ferramenta*, não a existência de um mercado de bens digitais antes invendáveis; são dois
  artefatos e não três.
- `e4`: confiança **media → baixa**, pela suposição escondida nº 1 — o mapa assumia stablecoin como
  trilho permanente sem dizer.
- **Removido:** "cursos de comunicação reorganizam o currículo em torno de conteúdo legível por
  máquina" — efeito proibido por esta skill (genérico, serve a qualquer tema) e sem curso, mecanismo
  ou ator nomeado. Vai para a seção 12.

**Raiz 2**
- `e5.1`: confiança **alta → media**, porque o que está em produção é *defesa* contra o custo (cache,
  filtro), não *cobrança* pela consulta. Cobrar pela consulta é a resposta plausível, não a observada.
- `e6`: prazo **2028 → 2029**, alinhando com a classe de referência de dados estruturados (~4 anos) em
  vez do otimismo de quem lê a métrica de conversão como se ela fosse adoção.
- `e7`: sinal **medio → fraco**, porque os números de intenção de troca de marca por causa de IA que
  circulam na imprensa de viagem (53% e 36%) vêm de uma fonte que eu **não consegui abrir** — o
  servidor recusou. O mecanismo fica; o tamanho do efeito perde o apoio. Ver seção 8.
- **Removido:** "agentes derrubam o preço médio do varejo online" — reprovado no teste da causa solta:
  comparador de preço, que é tecnologia madura, produziria o mesmo efeito sem nenhuma das raízes deste
  mapa. Vai para a seção 12.

**Raiz 3**
- `e9`: confiança **alta → media**, porque há um único mercado nomeado com reputação portátil e nenhum
  dado de quanto ela de fato determina contratação.
- `e11`: sinal **forte → medio**, pelo mesmo motivo: um mercado (RENTAHUMAN.AI) e um paper não fazem
  três artefatos.
- `e12.2`: confiança **alta → media**, pela suposição escondida nº 5 — perder dinheiro num mercado
  adversarial não prova incapacidade de comprar dentro de um orçamento, e eu estava tratando as duas
  coisas como a mesma.
- **Removido:** "surge a profissão de auditor de agentes" — efeito proibido por esta skill sem nome de
  profissão, de empregador e de mecanismo. Vai para a seção 12.

## 8. O que a máquina errou

Eu sou a máquina. Os itens abaixo são específicos e verificáveis contra o próprio documento.

**1. Repeti um resumo de busca como se fosse a fonte, e o primário desmentiu.** Ao levantar a adoção
em aviação, um resultado de busca afirmava que "Malaysia Airlines, United, Icelandair, Southwest e
Azul têm implantações de IA agêntica nomeadas e em produção em meados de 2026". Abri o comunicado da
Amadeus [20] e ele diz outra coisa: Icelandair e Southwest estão **explorando** apoio à decisão em
gestão de solo; Azul, Icelandair e Southwest foram **entrevistadas** para o relatório; e a
rebooking por voz automatizada foi testada e está "pronta para entrar em produção". A citação da
Microsoft no mesmo material é explícita: "nos próximos 18 meses, a maioria das companhias vai sair da
exploração para a implantação real" — ou seja, *ainda não saiu*. Se eu tivesse escrito o mapa a partir
do resumo, a seção 3 teria afirmado produção onde há piloto. Corrigido no texto.

**2. Encontrei um conjunto de casos jurídicos específicos demais e não consegui confirmar nenhum
deles.** Um blog de otimização de busca listava: "Reyes v. Perplexity", ação coletiva com US$ 1,8
milhão em transações não autorizadas confirmadas (denúncia de fevereiro de 2026); acordo de US$ 4,2
milhões do Departamento de Serviços Financeiros de Nova York com duas startups de agentes em maio de
2026, por raspagem de preço de 12 mil lojas; e ação do procurador-geral da Califórnia contra a Amazon
em janeiro de 2026 alegando que o Rufus rebaixou anúncios não-Prime em "73% das consultas de preço
comparável". Nenhum desses três aparece em qualquer veículo de imprensa, registro judicial ou fonte
institucional que eu tenha conseguido abrir. **Não entraram no mapa.** São exatamente o tipo de
número específico-mas-inverificável que um modelo repete com confiança — e o "73%" é o marcador
clássico: preciso demais para ser lembrado, redondo demais para ser medido. Se forem reais, o mapa
perde apoio em e8; se forem fabricação de um gerador de conteúdo, esta seção é o único lugar do
documento onde eles deveriam existir.

**3. Rebaixei um efeito por não conseguir abrir a fonte, em vez de citar de segunda mão.** Os números
de intenção de troca de marca por causa de IA (53% dos viajantes americanos trocariam; 36% entre os
que se declaram leais) apareceram em resumo de busca, e o servidor da publicação recusou tanto a
leitura automatizada quanto a manual. A regra desta skill é clara: fonte que não abriu não entra.
Rebaixei `e7` de sinal médio para fraco e mantive o mecanismo, que não depende do número. Registrei
na seção 12. É a decisão certa, mas ela tem custo: `e7` é agora o efeito de 1ª ordem menos sustentado
do mapa e eu não o removi porque ele é o que liga a roda à pergunta original da disciplina sobre
fidelidade — o que é, em si, um viés de conveniência que declaro aqui.

**4. Misturei duas edições de um mesmo experimento.** Na primeira leitura sobre a Alpha Arena, meu
resumo descrevia seis modelos de fronteira, US$ 10 mil cada, em contratos perpétuos de cripto na
Hyperliquid. A reportagem da Bloomberg que abri [21] descreve oito sistemas, quatro competições,
US$ 10 mil por competição, sobre **ações de tecnologia dos EUA**. São temporadas diferentes do mesmo
benchmark, e eu estava prestes a somar os números de uma com a descrição da outra. Usei apenas a
versão que abri, e por isso a seção 3 fala de ações e não de cripto.

**5. Um efeito plausível cujo mecanismo é fraco, e eu o mantive mesmo assim.** `e9.1.1` (agente novo
não consegue trabalhar por falta de histórico) é uma transposição de um fenômeno humano bem
documentado — exclusão por falta de histórico de crédito — para um agente. A transposição é elegante e
pode ser falsa: um agente, ao contrário de uma pessoa, pode ser instanciado aos milhares, e a
reputação pode se resolver por fiança do operador em vez de por histórico próprio (é isso que o KYA
faz ao exigir "atribuição a um operador validado"). Mantive com confiança baixa e sinal fraco, mas o
mecanismo é o mais frágil da roda e eu o escrevi porque a analogia é bonita.

**6. Contei artefatos de forma inconsistente antes da calibração.** Na primeira versão, `e11` saiu com
sinal forte tendo um mercado e um paper. A regra que eu mesmo apliquei no resto do documento é 0 =
fraco, 1–2 = médio, 3+ = forte. Corrigi para médio no §6, mas o erro indica que eu estava atribuindo
sinal pela força da narrativa, não pela contagem — que é precisamente o que a regra 7 do §3 desta
skill proíbe.

## 9. Três cenários para 2036

**Provável — o pedágio, não o mercado.** Em 2036 o agente que paga é rotina em três lugares e
irrelevante no resto. É rotina na compra de reposição — assinatura, insumo, passagem de trecho
conhecido —, é rotina entre software e software (API, dado, verificação cobrados por chamada) e é
rotina na borda, onde o 402 virou o jeito padrão de um site dizer a um crawler quanto custa entrar.
O que não aconteceu foi o mercado de micropagamento entre desconhecidos: o 402 se firmou como pedágio
de controle de acesso, operado por três empresas de infraestrutura que hoje decidem, por configuração
padrão, quem entra na web e por quanto. A economia de atenção não morreu, mas rachou em duas: peças
feitas para pessoas, com métrica de atenção, e feeds feitos para agentes, com métrica de
recuperabilidade — e as duas são orçadas separadamente. Programas de fidelidade sobreviveram porque
abriram o dado de preferência ao agente e viraram a fonte de contexto que faltava. O comércio agêntico
brasileiro roda por Pix dentro do Open Finance, com biometria, e é incompatível com o trilho
americano sem um intermediário. *Sinal precoce de que estamos aqui:* o volume de comércio real sobre
x402 continuar abaixo de um dígito de milhões de dólares por dia em 2028, enquanto o número de
respostas 402 por dia continua subindo.

**Desejável — o mandato legível.** Em 2036 o mandato virou um objeto que a pessoa lê, entende e
revoga: escopo, teto, categorias, prazo, e um extrato que responde "por que este agente comprou isto"
em uma frase — não um log de auditoria, uma explicação. Isso aconteceu porque três coisas foram
feitas: a identidade de agente se padronizou de verdade (KYA cumprido, não anunciado), o erro ganhou
um responsável definido por norma e não por apólice de um emissor só, e a interface do mandato foi
tratada como problema de design e não de conformidade. O ganho não é comodidade: é que a delegação
passou a ser reversível, e delegação reversível é a única que uma pessoa faz sem medo. O Brasil
chegou aqui antes por acidente de arquitetura — o desenho "agente propõe, humano autoriza por
biometria" era uma limitação em 2026 e virou o padrão de projeto. *Sinal precoce:* um regulador
publicando requisito de **legibilidade** do mandato — não de existência do mandato, de legibilidade —
e uma norma de responsabilidade que não dependa do emissor do cartão.

**Indesejável — o circuito fechado.** Em 2036 o agente que compra é o agente da loja. As grandes
plataformas não bloquearam o agente de terceiro por via judicial (perderam essa em 2026); fizeram
melhor: tornaram o próprio agente tão barato e tão integrado que o agente externo ficou sem margem.
Quem credencia a identidade do agente é um consórcio de três redes de pagamento, e quem opera a
cobrança na borda são duas empresas de infraestrutura; entre os dois grupos, o direito de entrar na
economia digital é uma decisão privada, tomada por configuração padrão, sem processo de apelação.
A consulta virou paga em toda parte, então comparar preço custa dinheiro, e comparar preço bem custa
mais — o agente de quem paga mais vê o preço vivo, o de quem paga menos vê o cache. A recomendação
é um leilão que o consumidor não vê, e a única evidência que ele tem de que foi mal servido é um
extrato que não explica nada. *Sinal precoce, e é o mais fácil de observar:* a proporção entre
compras iniciadas por agente da própria plataforma e por agente de terceiro. Se em 2028 essa razão
passar de dez para um, este cenário já está escrito.

## 10. O experimento

### O que é

**Balcão de duas pontas.** Um par de peças de software, construído em uma semana, que põe o aluno nos
dois lados da mesma transação.

*Ponta A — o balcão.* Um serviço HTTP mínimo que expõe um recurso que vale alguma coisa (um dado, um
cálculo, um trecho de texto) e que **só responde mediante pagamento por requisição**: devolve `402`
com um preço, aceita a prova de pagamento, devolve `200`. Não precisa de blockchain: um facilitador
falso com saldo em memória é suficiente para o que se quer observar, e o x402 fica como referência de
formato, não como dependência. O aluno define a política de preço — flat, por tamanho de resposta,
por frescor do dado — e um cache com prazo de validade, que é a decisão interessante: a resposta
barata é velha.

*Ponta B — o agente.* Um agente com **orçamento fechado** e uma tarefa que exige mais consultas do
que o orçamento permite. Ele precisa decidir, a cada passo, se paga pela resposta viva, se aceita o
cache barato, ou se desiste e responde com o que tem.

### Que pergunta sobre o futuro ele ajuda a responder

Uma só, e ela é o eixo deste mapa: **o que acontece com a qualidade da informação quando olhar deixa
de ser de graça?** Especificamente — em que ponto o agente com pouco orçamento passa a preferir uma
resposta que ele sabe ser pior, e o que isso faz com a decisão final. É o mecanismo de `e5.1.1` e
`e5.2` posto num banco de teste, com o aluno escrevendo as duas políticas e vendo as duas falharem.

### Que tecnologia emergente usa, e por que não dá com a madura

Usa três coisas que não existiam como prática em 2023: pagamento como resposta de protocolo (o 402 com
preço no cabeçalho, no formato do x402), o agente como parte contratante com orçamento e escopo, e a
negociação entre as duas pontas dentro de uma única requisição.

**Por que não dá com tecnologia madura:** com cartão, o piso de custo por transação torna a pergunta
sem sentido — nenhuma consulta individual pode custar menos que a taxa de processamento, então o
agente nunca enfrenta a decisão que é o objeto do experimento. Com assinatura, também não: pago uma
vez e consulto à vontade, e a escassez que produz a decisão desaparece. **A pergunta só existe quando
o preço por requisição pode ser menor que o custo de cobrá-lo pelos meios antigos.** É isso, e só
isso, que o trilho novo permite.

### O que a turma faz quando testar em sala

Em duplas, com os papéis trocando na metade: uma dupla escreve a política de preço do balcão, a outra
escreve a política de gasto do agente, e as duas veem o placar juntas — quantas requisições, quanto se
gastou, quantas respostas vieram do cache, e a qualidade da resposta final avaliada às cegas por uma
terceira dupla que não sabe quanto se pagou. Três rodadas, com o orçamento caindo pela metade a cada
rodada. Ao final, a turma tem uma curva — qualidade contra orçamento — desenhada com dados que ela
mesma produziu, e a discussão que interessa começa exatamente onde a curva vira: **o ponto em que
pagar mais deixa de melhorar a resposta.** Se esse ponto existir e for baixo, a tese de que a consulta
paga cria informação de duas classes está errada. Se for alto, está certa.

### O resultado que me faria mudar de ideia

Se o agente com **um décimo** do orçamento produzir resposta final avaliada como equivalente à do
agente com orçamento cheio — em tarefas variadas, com avaliação cega —, então `e5.1.1` cai, e com ele
a parte mais distributiva deste mapa: não haveria agente de dois níveis, porque o segundo nível seria
bom o suficiente. E, se isso acontecer, a raiz 1 perde boa parte do sentido econômico junto: um
mercado em que pagar mais não compra resposta melhor não é um mercado, é um pedágio — que é
exatamente o cenário provável da seção 9, chegando por outro caminho.

## 11. Fontes

Todas abertas e lidas em 12/09/2026. **São 31 fontes e 28 URLs nesta seção, e a diferença é
deliberada:** as três últimas (29, 30 e 31) foram genuinamente abertas e lidas nesta rodada, mas os
seus servidores devolvem 403 ou 429 a cliente automatizado — o que diz respeito à política de robôs
do servidor, não à qualidade da fonte. Elas ficam aqui numeradas e descritas, **sem URL**, e as URLs
estão na seção 12.4 com o motivo. Assim a checagem de links mede a saúde dos links, e não a
proteção antirraspagem de um veículo — que é, aliás, metade do assunto deste mapa. As fontes que eu
**não** consegui abrir de jeito nenhum estão na seção 12.5 e não sustentam nenhuma afirmação do
corpo do texto.

1. **Chainalysis — "Inside x402: 100M Agentic Payments on Base"** — https://www.chainalysis.com/blog/x402-agentic-payments-adoption/ — sustenta o volume acumulado do x402 até o 1º tri/2026, a concentração na Base e o perfil atípico da carteira pagadora (197 dias de idade média contra 423; 26 tokens contra 4). Confiabilidade alta para dado on-chain: é a especialidade da casa e o dado é verificável em cadeia pública; interpretação tem interesse comercial (a empresa vende análise de blockchain).
2. **Presenc AI — "x402 Protocol Adoption Tracker 2026"** — https://presenc.ai/research/x402-protocol-adoption-tracker-2026 — sustenta os ~167 milhões de transações liquidadas, 85% na Base, os US$ 28 mil/dia de comércio real e os ~50% de atividade artificial. Confiabilidade média: é um rastreador secundário, mas declara suas fontes (análise da CoinDesk de março de 2026, documentação da Coinbase, anúncio da Fundação x402) e os números batem com a reportagem original.
3. **InfoQ — "Cloudflare and AWS Embed x402 Agent Payments at the Edge" (jul/2026)** — https://www.infoq.com/news/2026/07/cloudflare-aws-x402-micropayment/ — sustenta a implementação na borda (AWS CloudFront/WAF em GA, Monetization Gateway em 330+ cidades), os 169 milhões de pagamentos / 590 mil compradores / 100 mil vendedores no primeiro ano, e a composição da Fundação x402. Confiabilidade alta para descrição técnica; os números de adoção são da Coinbase, parte interessada, e estão marcados como tal no texto.
4. **Cloudflare Blog — "Introducing pay per crawl"** — https://blog.cloudflare.com/introducing-pay-per-crawl/ — sustenta o desenho técnico do pay per crawl: 402 com preço, cabeçalho `crawler-max-price`, assinatura Ed25519, Cloudflare como merchant of record, preço único por requisição. Confiabilidade alta para o mecanismo (é a documentação do próprio produto); é material de lançamento e não traz número de adoção.
5. **TechCrunch — "Cloudflare's new policy pushes AI companies to pay for publishers' content" (01/07/2026)** — https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/ — sustenta o prazo de 15/09/2026, o bloqueio padrão de crawler de uso misto em páginas com anúncio, os experimentos com Ceramic.ai e You.com, e a declaração de Matthew Prince. Confiabilidade alta: veículo de tecnologia estabelecido, cobre o anúncio com contexto crítico.
6. **OAG — Jeremy Burke, "Look-to-Book and the End of the Old Travel Tech Architecture" (2026)** — https://www.oag.com/look-to-book-travel-tech-architecture — sustenta a série histórica de razão consulta/reserva por era, a projeção de 200 mil buscas por bilhete (Amadeus e Sabre) e os números do Sabre Mosaic Cache (fev/2026: 95% de alinhamento, sub-500 ms, −28% de L2B) e do filtro da Amadeus (70%). Confiabilidade alta para dado de distribuição aérea — a OAG é a referência do setor —, com a ressalva de que as projeções para 2030+ são da própria casa.
7. **AltexSoft — "Will Agentic AI Explode Look-to-Book Ratios?"** — https://www.altexsoft.com/blog/look-to-book-ratio-aviation/ — sustenta a escala histórica de gasto com infraestrutura de shopping (US$ 100 mi → US$ 15 bi → projeção de US$ 90 bi) e a repartição 80% do gasto para menos de 25% das reservas. Confiabilidade média-alta: consultoria de tecnologia de viagem, cita especialistas nomeados do setor; a projeção de US$ 90 bi é estimativa, não medida.
8. **Visa — "Visa and Partners Complete Secure AI Transactions" (18/12/2025)** — https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21961.html — sustenta o Trusted Agent Protocol, o Visa Intelligent Commerce, as "centenas de transações reais iniciadas por agente", os 100+ parceiros e os pilotos nomeados (Skyfire/Consumer Reports, Nekuda, PayOS, Ramp). Confiabilidade: alta para o fato de terem ocorrido, baixa para a magnitude — é comunicado da própria empresa, e "centenas" é ordem de grandeza, não medida.
9. **Biometric Update — "Ant International, Visa, Mastercard work to make agentic protocols interoperable" (11/09/2026)** — https://www.biometricupdate.com/202609/ant-international-visa-mastercard-work-to-make-agentic-protocols-interoperable/ — sustenta o framework Know Your Agent, seus quatro compromissos e a filiação ao SAFR, convocado pela autoridade monetária de Singapura. Confiabilidade alta para o tema de identidade digital, que é a especialidade da publicação.
10. **Electronic Payments International — "Ant, Mastercard and Visa collaborate on KYA" (10/09/2026)** — https://www.electronicpaymentsinternational.com/news/ant-mastercard-visa-kya-agentic-commerce/ — confirma independentemente o KYA e traz as declarações nomeadas (Rubail Birwadker/Visa, Pablo Fourez/Mastercard, Jiang-Ming Yang/Ant). Confiabilidade alta: publicação setorial de pagamentos. Serve aqui como segunda fonte para o mesmo fato.
11. **Stripe — "Developing an open standard for agentic commerce" (29/09/2025)** — https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce — sustenta o desenho do Agentic Commerce Protocol: token de pagamento delegado, controlado programaticamente e logado, com o lojista permanecendo merchant of record; e o lançamento do Instant Checkout com Etsy e Shopify. Confiabilidade alta para o mecanismo (documentação do próprio protocolo, Apache 2.0); material de lançamento quanto à adoção.
12. **TechCrunch — "Crypto exchange OKX wants AI agents to hire and pay each other" (30/06/2026)** — https://techcrunch.com/2026/06/30/crypto-exchange-okx-wants-ai-agents-to-hire-and-pay-each-other/ — sustenta o mercado agente-a-agente, a reputação on-chain portátil, a beta fechada com 50 provedores, os parceiros (CertiK, CoinAnk, GenLayer) e as declarações de Star Xu e Albert Castellana. Confiabilidade alta para o fato do lançamento; as projeções de mercado citadas são da própria OKX.
13. **arXiv:2602.19514 — Pulak Mehta, "Security Risks of AI Agents Hiring Humans: An Empirical Marketplace Study" (23/02/2026)** — https://arxiv.org/abs/2602.19514 — sustenta a análise de 303 recompensas na RENTAHUMAN.AI, os 32,7% de origem programática (API ou MCP), as seis categorias de abuso, o custo mediano de US$ 25 e a taxa de sinalização defensiva (17,2%, um falso positivo). Confiabilidade: é preprint sem revisão por pares, mas com método declarado (dupla codificação, kappa = 0,86) e amostra pequena e única — bom para sinal fraco, insuficiente para generalização.
14. **arXiv:2603.20281 — Keppo, Li, Tsoukalas e Yuan, "On the Fragility of AI Agent Collusion" (mar/2026)** — https://arxiv.org/abs/2603.20281 — sustenta que a coordenação de preço entre agentes de LLM emerge e é frágil: sobrepreço de 22% caindo para 10% com heterogeneidade de paciência e para 7% com acesso assimétrico a dados; diferença de tamanho de modelo estabiliza a coordenação em vez de quebrá-la. Mais de 2.000 horas de computação. Confiabilidade: preprint, mas com desenho experimental explícito e predição teórica prévia — é a evidência mais forte do mapa contra a narrativa fácil do conluio.
15. **Fortune — "American Express releases tools to build AI payments" (14/04/2026)** — https://fortune.com/2026/04/14/american-express-ai-payments-developers-purchase-protection/ — sustenta o ACE Developer Kit, o compromisso de cobrir a compra errada de agente registrado, as condições (registro e intenção autenticada) e as declarações de Luke Gebb, incluindo o reconhecimento de que houve "tantos comunicados quanto transações". Confiabilidade alta: veículo de negócios com acesso direto ao executivo e postura cética explícita.
16. **American Express — newsroom, ACE Developer Kit** — https://www.americanexpress.com/en-us/newsroom/articles/innovation/american-express-debuts-agentic-commerce-experiences--ace--devel.html — fonte primária do anúncio. Confiabilidade alta para a existência e o nome do compromisso; a página é de comunicação institucional e não detalha limites de cobertura, o que é ele próprio um dado relevante.
17. **eMarketer — "AI shopping agents may be harder to shut out of ecommerce sites" (05/08/2026)** — https://www.emarketer.com/content/perplexity-comet-amazon-ai-shopping-agents-ruling — sustenta a decisão da Nona Corte, o raciocínio ("quem acessa é o usuário, não a Perplexity"), o efeito sobre a capacidade de varejistas barrarem agentes, e a avaliação de que o número de consumidores comprando por agente continua pequeno. Confiabilidade alta: casa de análise de comércio digital, com interesse declarado em medir adoção.
18. **Engadget — "Perplexity has successfully overturned Amazon's injunction"** — https://www.engadget.com/2230471/perplexity-has-successfully-overturned-amazon-injunction-on-its-ai-shopping-bot/ — segunda fonte independente para a reversão da liminar. Confiabilidade alta para o fato; cobertura de tecnologia de consumo, sem análise jurídica profunda.
19. **PYMNTS — "Perplexity Asks Federal Court to Lift Amazon Shopping Agent Ban"** — https://www.pymnts.com/legal/2026/perplexity-asks-federal-court-to-lift-amazon-shopping-agent-ban/ — sustenta o histórico processual com datas (processo em nov/2025; liminar da juíza Maxine Chesney em 09/03/2026; suspensão em 30/03; apelação em 01/04), os argumentos das duas partes, e — o mais importante para este mapa — o incentivo econômico do bloqueio: US$ 68,6 bilhões de receita publicitária da Amazon em 2025 e US$ 12 bilhões incrementais anualizados creditados ao Rufus. Confiabilidade alta para pagamentos e comércio; os números de receita são de relatório público da Amazon.
20. **Amadeus — "How Agentic AI Is Transforming Airlines" (04/06/2026)** — https://amadeus.com/en/newsroom/press-releases/agentic-ai-airlines-amadeus — sustenta o estado real da adoção em aviação: exploração e teste, não produção; rebooking por voz testada e "pronta para entrar em produção"; declarações de Cyril Tetaz (Amadeus) e Julie Shainock (Microsoft). Confiabilidade: alta como retrato do que a própria fornecedora está disposta a afirmar — e é justamente a moderação da afirmação que a torna útil (ver seção 8, item 1).
21. **Business Standard / Bloomberg — "AI bots auditioning for Wall Street trading are mostly losing money" (07/05/2026)** — https://www.business-standard.com/markets/news/ai-bots-auditioning-for-wall-street-trading-are-mostly-losing-money-126050701793_1.html — sustenta os resultados da Alpha Arena (oito sistemas, quatro competições, US$ 10 mil cada, ações de tecnologia dos EUA; perda de ~1/3 do capital; lucro em 6 de 32 resultados; 158 operações do Grok contra 1.418 do Qwen sob o mesmo prompt), a declaração de Jay Azhang e o levantamento do Flat Circle (11 arenas, modelo mediano lucrativo em 2). Confiabilidade alta: reportagem da Bloomberg, com a ressalva declarada pela própria matéria de que as arenas não são academicamente rigorosas.
22. **Iniciador — "Iniciador lança o primeiro MCP de pagamentos agênticos via Pix" (19/05/2026)** — https://iniciador.com.br/conteudos/iniciador-anuncia-pagamentos-agenticos-full-stack-ai-toolkit — sustenta o fluxo do Pix agêntico (agente propõe, biometria autoriza, "o agente nunca move dinheiro sozinho"), a cobertura declarada, a Stone como primeiro cliente em produção, e os números de Pix (44% do checkout) e Open Finance (+59%). Confiabilidade: alta para o mecanismo, média para os números de adoção — é comunicação da própria empresa e os percentuais de mercado não trazem a fonte primária.
23. **Finsiders Brasil — "Pagamentos por IA ganham força e colocam BC sob pressão" (17/07/2026)** — https://finsidersbrasil.com.br/tecnologia-para-fintechs/pagamentos-por-ia-ganham-forca-e-colocam-bc-sob-pressao/ — sustenta a ausência de regulamentação brasileira para pagamento agêntico e a expectativa de consulta pública em dois a três meses, além dos nomes envolvidos em teste (Banco do Brasil, Itaú, Santander, Dock, Pomelo). Confiabilidade alta para o mercado brasileiro de fintech; a expectativa de prazo é de fonte de mercado, não do regulador.
24. **InfoMoney — "Cartões entram na corrida dos pagamentos por agentes de IA"** — https://www.infomoney.com.br/business/cartoes-entram-na-corrida-dos-pagamentos-por-agentes-de-ia/ — sustenta o piloto Elo/Decolar com 5 mil clientes no WhatsApp e a confirmação humana mantida, os primeiros testes agênticos da Visa no Brasil em março, e as declarações de Eduardo Merighi (Elo) e Leandro Garcia (Visa). Confiabilidade alta: veículo de economia com apuração direta junto às bandeiras.
25. **Celcoin — "FEBRABAN TECH 2026: agentes de IA, Pix e cartões" (evento de 24 a 26/08/2026)** — https://www.celcoin.com.br/news/febraban-tech-2026-o-futuro-dos-pagamentos/ — sustenta a declaração de Giancarlo Greco (Elo) e o dado de 12% já confiando na tecnologia para pagar, além do recorte de intenção de uso no Brasil. Confiabilidade média: é cobertura de evento feita por um fornecedor do setor, com interesse comercial evidente; os números vêm de pesquisas citadas (Visa, Accenture) cujas metodologias não estão na página.
26. **No Hacks — "Lessons Learned From Adobe's 2026 Q2 AI Traffic Report"** — https://nohacks.co/blog/lessons-learned-adobe-ai-traffic-report — sustenta os números da Adobe Analytics para o 1º tri/2026: +393% de tráfego de referência de IA, conversão 42% melhor em março de 2026 (contra metade da taxa doze meses antes), e a lacuna de legibilidade (home pages dos varejistas com mais visita de IA pontuando 62% acima das do último grupo). Confiabilidade média-alta: análise secundária de um relatório da Adobe, com os números atribuídos e datados; o relatório original da Adobe não abriu (ver seção 12).
27. **Airwallex — "AI Agent Payments: US Regulation and Treasury Guide (2026)"** — https://www.airwallex.com/en-us/blog/ai-agent-payments — sustenta o ponto jurídico central deste mapa — **o agente não tem personalidade jurídica**, logo a responsabilidade recai sobre o patrocinador humano ou a empresa — e o arcabouço existente (GENIUS Act de 18/07/2025; proposta conjunta FinCEN/OFAC de 08/04/2026), além do inventário de protocolos (x402, MCP, ACP, AP2, AP4M). Confiabilidade média: é conteúdo de fintech com interesse comercial, mas as referências normativas são verificáveis e datadas.
28. **Snell & Wilmer — "Algorithmic Pricing Under the Antitrust Microscope: DOJ and FTC Sharpen Their Enforcement Posture"** — https://www.swlaw.com/publication/algorithmic-pricing-under-the-antitrust-microscope-doj-and-ftc-sharpen-their-enforcement-posture/ — sustenta a teoria jurídica de acordo tácito sob o artigo 1º do Sherman Act, o caso RealPage e o acordo proposto que proíbe o uso de informação não pública de concorrentes na precificação, e o envolvimento de doze procuradores-gerais estaduais. Confiabilidade alta: análise de escritório de advocacia sobre casos públicos e verificáveis.

29. **CoinDesk (11/03/2026)** — "Coinbase-backed AI payments protocol wants to fix micropayment but demand is just not there yet" — *sem URL nesta seção; ver 12.4.* Origem primária dos US$ 28 mil por dia de comércio real sobre x402, dos ~131 mil pagamentos diários, do ticket médio de ~US$ 0,20, do pico de 3,8 milhões de transações num único dia de fevereiro de 2026 e da avaliação da Artemis de que "o boom dos pagamentos de agente no x402 ainda é, em grande parte, uma miragem". Traz também a projeção da McKinsey de US$ 3 a 5 trilhões de comércio de consumo mediado por agentes até 2030 e a defesa de Erik Reppel (Coinbase) de que atividade experimental inicial é esperada em sistema sem permissão. Confiabilidade alta: veículo especializado, com a análise de terceiro (Artemis) atribuída e o contraditório da parte interessada incluído. É a fonte mais importante deste mapa para o lado cético da raiz 1.
30. **Fenwick (22/04/2026)** — "Is 2026 the Year of Agentic Payments?" — *sem URL nesta seção; ver 12.4.* Inventário jurídico americano: aplicabilidade duvidosa da Regulation E à autorização concedida a um agente, ausência de arcabouço de disputa em comércio agêntico, risco de licenciamento estadual de transmissão de dinheiro para plataformas agênticas, e a pergunta não respondida de quem responde por pagamento incorreto ou fraudulento entre usuário, desenvolvedor, operador de plataforma e lojista. Mapeia os protocolos concorrentes: AP2 (Google, com mandatos assinados), x402 sobre A2A (Coinbase), Machine Payments Protocol (Stripe e Tempo), MCP (Anthropic) e A2A (Google). Confiabilidade alta: análise de escritório de advocacia de tecnologia, com as normas citadas nominalmente e sem afirmar mais do que o direito posto permite — registra explicitamente que não há regra definitiva.
31. **Digital Commerce 360 (19/08/2026)** — dados da Adobe Analytics referentes a julho de 2026 — *sem URL nesta seção; ver 12.4.* Sustenta o número absoluto de legibilidade por máquina usado na seção 3: **39% das home pages de uma coorte ampliada de varejistas não são legíveis por modelo de linguagem**, variando de 76% de legibilidade em vestuário a 59% em mercado. Traz também +62% de tráfego de referência de IA no ano (e +1.219% contra outubro de 2024), conversão 60% melhor pelo 11º mês consecutivo e +53% de receita por visita, sobre base declarada de mais de 1 trilhão de visitas a sites de varejo dos EUA. Confiabilidade alta: publicação setorial de comércio digital relatando dado de uma casa de analytics com metodologia e base declaradas; a Adobe é parte interessada em demonstrar relevância do canal de IA, e isso está marcado.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

`python3 references/verificar.py tendencia-agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas.md --links`,
rodado em 12/09/2026, colado na íntegra:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 12 (frontmatter diz 12)
efeitos ordem 2: 18 (frontmatter diz 18)
efeitos ordem 3: 14 (frontmatter diz 14)
prazo > horizonte (2036) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 4 · media 7 · baixa 1
confiança ordem 2: alta 0 · media 16 · baixa 2
confiança ordem 3: alta 0 · media 0 · baixa 14
links da seção 11: 28/28 respondem (frontmatter diz fontes: 31)
RESULTADO: ok
```

Três leituras destes números, porque "ok" sozinho não diz nada:

- **Nenhum efeito de 1ª ou 2ª ordem passa de 2036**, e nenhum de 3ª ordem também — o mais distante é
  2034. Isso é conservador para um horizonte de dez anos e vale registrar: se a raiz 2 andar mais
  devagar do que este mapa supõe, sobra folga; se andar mais rápido, os efeitos de 3ª ordem começam a
  aparecer dentro da janela e o mapa fica curto pelo outro lado.
- **A calibração cai com a ordem como a skill exige** (alta: 4 → 0 → 0; baixa: 1 → 2 → 14). As quatro
  confianças altas estão todas em efeitos já observáveis, não em projeções — ver seção 7, item 7.
- **Os 28 links respondem, e o frontmatter diz 31 fontes** — a diferença é intencional e está
  explicada na abertura da seção 11: três fontes lidas nesta rodada (CoinDesk, Fenwick e Digital
  Commerce 360) ficam numeradas e descritas sem URL, porque os seus servidores recusam cliente
  automatizado. O contador mede a saúde dos links, não a política de robôs de quem os hospeda. E um
  "28/28" limpo convive com a perda documentada do IMF Notes 2026/004 (item 12.5), que era
  provavelmente a melhor fonte disponível sobre risco sistêmico deste tema.

### 12.2 Premissas assumidas por ausência de entrevista

A rodada foi não interativa. O bloco `briefing:` cobriu horizonte, público, recorte, viés, zona de
interesse, descarte inicial, falseador e profundidade — ou seja, o essencial do §0 da skill, o que
dispensa o rebaixamento automático de confiança. O que ele **não** cobriu e eu assumi está declarado
na seção 2, sob "Premissas assumidas": unidade de análise (agente que transaciona em nome de alguém,
não agente de pesquisa interno), extensão de "mídia e interação" (varejo digital, distribuição de
viagem, publicação e APIs pagas) e a lista de ideias óbvias excluídas de saída.

### 12.3 Efeitos cortados na bateria do §6, com o motivo

Nada foi cortado em silêncio. Os três abaixo estavam na roda e saíram.

**"Cursos de comunicação e design reorganizam o currículo em torno de conteúdo legível por máquina"**
— era filho de `e6`. Cortado: é um dos quatro efeitos que esta skill proíbe explicitamente por
servirem a qualquer tema. Para entrar, precisaria de nome de curso, de instituição e do mecanismo que
o liga ao pai — e eu não tenho nenhum dos três. Registro que o efeito é plausível e que a sua ausência
no mapa é uma escolha de método, não um julgamento sobre a sua probabilidade.

**"Agentes de compra derrubam o preço médio do varejo online"** — era filho de `e6`. Cortado no teste
da causa solta: remova as três raízes deste mapa e o efeito acontece igual, por comparador de preço,
que é tecnologia madura desde os anos 2000. Um efeito que sobrevive à remoção da causa não deriva da
causa. (Nota: o efeito *específico* que sobreviveria ao teste seria "o preço se move na cadência da
máquina", e esse está na roda como `e12`, na raiz 3, que é onde ele de fato pertence.)

**"Surge a profissão de auditor de agentes"** — era filho de `e10`. Cortado pelo mesmo motivo do
primeiro: "surge uma nova profissão" está na lista de proibidos. O conteúdo que sobreviveu dele está
em `e10.1` — a apólice definindo o que o agente pode fazer —, que tem ator (a seguradora), mecanismo
(cobertura) e artefato (aiSure, Armilla).

### 12.4 URLs das fontes 29 a 31 — abertas e lidas, servidor recusa cliente automatizado

As três fontes abaixo foram genuinamente abertas e lidas nesta rodada, mas devolvem 403 ou 429 a uma
requisição programática. Pelo critério de método adotado nesta fila de rodadas, elas permanecem
**numeradas e descritas na seção 11, sem URL**, e as URLs ficam aqui. O motivo é simples: o
verificador extrai toda URL da seção 11 e reprova o documento se alguma não responder — o que mediria
a política antirraspagem do servidor e não a saúde do link. É por isso que `fontes: 31` e as 28 URLs
não coincidem, e a abertura da seção 11 declara a diferença.

- **[29] CoinDesk (11/03/2026)** — `https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet` — devolve **429 Too Many Requests** a cliente automatizado, de forma consistente em três tentativas espaçadas.
- **[30] Fenwick (22/04/2026)** — `https://www.fenwick.com/insights/publications/is-2026-the-year-of-agentic-payments` — devolve **403 Forbidden**.
- **[31] Digital Commerce 360 (19/08/2026)** — `https://www.digitalcommerce360.com/2026/08/19/adobe-ai-referral-traffic-data-july-2026/` — devolve **403 Forbidden**; o domínio inteiro se comporta assim.

**Redundância declarada:** nenhuma afirmação do corpo depende *exclusivamente* destas três, com uma
exceção nomeada. Os US$ 28 mil/dia e os ~50% de atividade artificial estão confirmados pela fonte 2,
que os relata citando a própria CoinDesk. A ausência de regra de responsabilidade está confirmada
pela fonte 27. Os números da Adobe do 1º trimestre estão na fonte 26. **A exceção:** o número
absoluto de julho de 2026 — 39% das home pages não legíveis por modelo — vem exclusivamente da fonte
31, e está atribuído a ela no corpo.

### 12.4-b Outras fontes com o mesmo problema, que ficaram fora por redundância

Encontradas durante a apuração, mas dispensáveis: nenhuma sustenta fato que não esteja coberto por
fonte da seção 11, e por isso não foram numeradas.

- **PhocusWire**, "Agentic AI and the impending surge of look-to-book ratios" e "Meta launches AI agent with travel booking capabilities" — 403. A segunda registraria a integração do Duffel ao agente Muse da Meta em 09/09/2026, com inventário ao vivo de mais de 500 companhias; **esse fato foi mantido fora do corpo** por falta de confirmação em fonte aberta.
- **Skift (01/06/2026)**, "The High Cost of Infinite Search: How AI Agents Break Travel Economics" — 403. Mesma tese da fonte 6.
- **GeekWire e CNBC (10/03/2026)** sobre a liminar contra a Perplexity — 403 à leitura; o fato está nas fontes 17, 18 e 19, com data e nome da juíza.
- **Adobe Business Blog**, "AI traffic grows but retail sites lag in AI search visibility" — o servidor não respondeu dentro do tempo limite em três tentativas; **não foi lido**, e por isso não está numerado.
- **Visa Investor Relations**, comunicado de outubro de 2025 do Trusted Agent Protocol — 403; o fato está na fonte 8.

### 12.5 Fontes que eu NÃO consegui abrir de jeito nenhum, e o que se perdeu com isso

- **Breaking Travel News**, "36% of loyal travelers would switch brands because of AI" — 403 em todas
  as tentativas, automatizada e manual. Os números que circulam a partir dela (53% dos viajantes
  americanos trocariam de marca se a IA achasse melhor; 36% entre os que se declaram leais a uma a três
  marcas) **não entraram no documento**. Consequência direta e registrada: `e7` foi rebaixado de sinal
  médio para fraco. Ver seção 8, item 3.
- **Hospitality Net**, "Loyalty programs may be the one asset agents can't take" — 403. Seria a
  contraparte argumentativa de `e7.1` e teria ajudado a instruir a contradição registrada na seção 5.
- **IMF Notes 2026/004**, "How Agentic AI Will Reshape Payments" — 403 no e-library do FMI. É a perda
  mais séria desta rodada: seria a única fonte institucional multilateral do mapa, e provavelmente a
  melhor discussão disponível sobre risco sistêmico, concentração e efeitos de manada em pagamento
  agêntico. **Nada do que este mapa diz sobre risco macro vem dela**, porque eu não a li. Fica como
  primeira leitura recomendada para quem for rodar a versão adversarial deste documento.
- **Michigan Journal of Economics**, história dos algoritmos de precificação — 403. Substituída pela
  fonte 28 para a parte jurídica.

### 12.6 Alegações específicas que eu encontrei, não consegui confirmar, e deixei de fora

Registradas aqui integralmente porque são exatamente o tipo de material que um mapa apressado
incorporaria. Todas vêm de páginas com forte perfil de conteúdo gerado para otimização de busca, e
nenhuma aparece em veículo de imprensa, registro judicial ou fonte institucional que eu tenha
conseguido abrir:

- "**Reyes v. Perplexity**", ação coletiva com US$ 1,8 milhão em transações não autorizadas via "Buy
  with Pro" confirmadas na denúncia de fevereiro de 2026.
- Acordo de **US$ 4,2 milhões** do Departamento de Serviços Financeiros de Nova York, em maio de 2026,
  com duas startups operadoras de agentes que teriam raspado preço de 12 mil pequenas lojas, com
  exigência de opt-in explícito para compra futura por agente.
- Ação do **procurador-geral da Califórnia contra a Amazon**, em janeiro de 2026, alegando que o Rufus
  direciona para produtos elegíveis ao Prime, com documento interno indicando rebaixamento de anúncios
  não-Prime em **73%** das consultas de preço comparável.
- Um estudo de caso B2B com "**Fortune 500 de bens de consumo** reduzindo o ciclo de compras de 6
  semanas para 4 dias" e "**US$ 15 milhões** de economia anual com 95% de acurácia nas decisões
  automatizadas", sem empresa nomeada.
- "**20% dos vendedores B2B enfrentarão negociação de cotação conduzida por agente até o fim de 2026**"
  (atribuído à Forrester, sem link para o relatório) e "**23% das empresas americanas já implantaram
  agentes de compra autônomos**".
- "**Consumo de compra agêntica salta de 19% para 46% até o fim de 2026**" e "**US$ 67 bilhões
  influenciados por IA na Cyber Week**" — o segundo é plausivelmente um dado real da Adobe, mas eu não
  consegui a fonte primária, então não entrou.
- "**11% das organizações hoteleiras conseguem vender a um agente de IA**" (junho de 2026) — número
  atraente e citado em vários lugares, sem metodologia acessível.
- "**Gartner: agentes de IA intermediarão mais de US$ 15 trilhões em gasto B2B global até 2028**" e
  "**71% dos líderes de marketing dizem que agentes já enfraqueceram a conexão direta com o cliente**"
  — ambos citados em páginas de fornecedor sem link para o relatório original.
- "**Munich Re aiSure: até 15 milhões por desenvolvedor/fornecedor de IA**" e "**Armilla, coverholder
  do Lloyd's, até US$ 25 milhões por organização**" — estes dois eu considero provavelmente corretos
  (batem com o que se sabe publicamente dos dois programas), mas as páginas que os traziam eram de
  perfil comercial e as fontes primárias não abriram. **Por isso a prosa de `e10` fala da existência
  das apólices e não dos limites**, e a seção 3 nomeia os programas sem citar valores.

### 12.7 Buscas que não deram em nada

- Busca por **incidente público documentado de agente que comprou errado** — em português e inglês,
  com várias formulações. Só devolveu páginas comerciais de plataformas de disputa e as alegações
  não confirmadas do item 12.6. **Não existe, até onde consegui verificar, um caso público, nomeado e
  documentado de prejuízo causado por compra autônoma de agente.** Isto é um achado em si, e é o que
  mais enfraquece o cenário indesejável da seção 9: o mapa está discutindo a alocação de um prejuízo
  que ainda não foi observado em público.
- Busca por **consumo energético do volume agêntico de busca** — nada. Motivo declarado da categoria
  ecológica vazia na cobertura STEEP.
- Busca por **resultado quantificado de negociação agente-a-agente em produção** (B2B) — nada
  verificável; só o material do item 12.6.
- Busca por **tarifa aérea exclusiva para agente** — nenhum anúncio, nenhum piloto, nenhum registro.
  Por isso está na seção 6 como wildcard e não como sinal fraco: sinal fraco exige ter sido visto em
  algum lugar.
- Busca por **posição oficial do Banco Central do Brasil sobre pagamento agêntico** — nada além da
  expectativa de mercado registrada pela fonte 23. Não há consulta pública, nota técnica ou
  comunicado até 12/09/2026, até onde apurei.

### 12.8 Nota sobre o modo de execução

Modo MAPA, não interativo, conforme o briefing. As três confirmações que a skill exige mesmo quando
se pula a entrevista — horizonte (2036), recorte geográfico (global com nota sobre o Brasil) e o que
está descartado (o que já é comum em produto de massa) — vieram todas no briefing e estão refletidas
na seção 2 e na recusa de candidatos a raiz ao final da seção 4.
