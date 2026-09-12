---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-10
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 14
efeitos_ordem_2: 22
efeitos_ordem_3: 13
tecnologias_citadas: [Agentic Commerce Protocol, ACP, Instant Checkout, ChatGPT Apps, Agent Payments Protocol, AP2, Verifiable Intent, Trusted Agent Protocol, TAP, RFC 9421, Web Bot Auth, Mastercard Agent Pay, Agent Pay for Machines, Agentic Tokens, Visa Intelligent Commerce, HTTP 402, x402, USDC, Base, Solana, Polygon, Pix, Pix Biometria, Open Finance, Model Context Protocol, MCP, Hyperliquid, Alpha Arena, Comet, Rufus, AI Mode, Universal Commerce Protocol, AgenticTrust, Forter Identity Monitoring, Regulation E, Digital Fairness Act, ERC-721, FIDO2]
fontes: 31
confianca: media
experimento: "A Feira — três lojas com o mesmo produto e legibilidade diferente, um agente comprador com orçamento real e pequeno, medindo onde ele compra, quanto paga a mais por não conseguir ler, e quanto o preço se move quando o vendedor também é agente"
skill_usada: futurizacao-giordano
publico_ok: true
---

## 1. Resumo

Um agente que pode pagar é uma coisa diferente de um agente que pode ler — mas a diferença não
está onde a narrativa de 2025 disse que estaria. Este mapa deriva quatro rupturas do fato de o
dinheiro passar pelas mãos de um programa: o agente vira **parte identificada e responsabilizável**
da transação, com credencial e mandato próprios; o pagamento **abaixo do centavo entre máquinas**
torna-se tecnicamente possível; o intermediário agêntico passa a **cobrar pedágio** sobre a venda
que originou; e o resultado de um modelo passa a ser medido **em dinheiro**, não em pontos. A
âncora do presente é dura e, em três pontos, desfavorável ao entusiasmo: a OpenAI **aposentou o
Instant Checkout depois de cerca de cinco meses** e voltou a mandar o comprador para o site do
lojista, porque o checkout dentro da conversa convertia, segundo o Walmart, **três vezes pior** que
o clique para fora; no x402, o ticket médio é de **US$ 0,05** mas a faixa de 10 centavos a um dólar
**despencou de 46% para 4% do volume** entre o início de 2025 e o início de 2026 — micropagamento
de máquina ainda é infraestrutura à procura de demanda; e, numa amostra de 1.009 consumidores
americanos em agosto de 2026, **o valor mais frequente que alguém autoriza um agente a gastar
sozinho é zero**. Ao mesmo tempo, o que funciona funciona bem: o tráfego referido por IA para o
varejo dos EUA converte **60% melhor** que o não-IA (Adobe, julho de 2026), a OpenAI cobra **4%**
do lojista Shopify enquanto Google e Microsoft cobram zero "por ora", e o Brasil chegou primeiro ao
trilho instantâneo com humano no loop — Pix com aprovação biométrica FIDO2, cobrindo mais de 95% da
população adulta. A aposta central deste mapa é que a agência financeira da máquina não avança pelo
consumo, e sim pela **camada de identidade e responsabilidade** — e que quem projeta mídia e
interação vai passar os próximos cinco anos desenhando não o agente que compra, mas **a tela em que
o humano confirma**.

## 2. O tema

**O objeto.** Dinheiro nas mãos de máquinas: o agente como parte contratante — que escolhe, paga e
responde — e a infraestrutura que está nascendo para que ele possa fazer isso sem ser confundido
com um fraudador. Não é o tema da superfície (o que um site publica e sob que condições — tema 4),
nem o da contenção (como se prova quem é o agente e como se limita o que ele faz — tema 2), nem o
dos mercados simulados como instrumento de pesquisa (tema 6). Aqui o objeto é **comércio, mercado
e trabalho pago**, com valor real trocando de mãos.

**Onde isso encosta em mídia e interação.** Em quatro pontos concretos:

1. **A tela da confirmação.** Se o consumidor médio autoriza um agente a gastar zero reais sozinho,
   o produto que resta não é "agente que compra": é "agente que prepara a compra e para". A peça
   de interface mais disputada dos próximos cinco anos é a tela em que a pessoa olha o carrinho que
   a máquina montou e aperta o botão. Quem desenha essa tela decide o que a pessoa vê antes de
   dizer sim — e é ali que padrões escuros reaparecem, agora com a autoridade de uma recomendação
   aparentemente neutra.
2. **O catálogo como peça de mídia.** A Adobe mediu que **39% das páginas iniciais de varejo** não
   têm conteúdo legível por máquina, e que a página de produto tem **66%** de legibilidade contra
   75% da inicial. O investimento que ia para foto, copy e banner passa a disputar orçamento com
   dado estruturado. É a primeira vez desde o SEO que uma decisão de marketing é, literalmente,
   uma decisão de marcação.
3. **A recomendação como inventário.** Se a compra é decidida dentro da conversa e só executada no
   site, o lugar escasso deixa de ser a página e passa a ser a frase da resposta. A fidelidade
   construída por e-mail, ponto e tier não alcança quem decide: 44% dos executivos de varejo
   ouvidos pela Deloitte esperam que a IA generativa **enfraqueça** a lealdade de marca.
4. **O preço como coisa viva.** Se o comprador é um programa que consulta em milissegundos e o
   vendedor é outro programa que reprecifica ao ver a consulta, o preço deixa de ser um número
   afixado e vira uma resposta. Isso muda o que significa "mostrar o preço" numa interface.

**Por que merece mapa de futuro e não levantamento de estado da arte.** Porque o estado da arte,
lido honestamente, **contradiz a promessa**: o produto emblemático do comércio agêntico foi
aposentado cinco meses depois de lançado. Um levantamento registraria isso e pararia. O que
interessa é o que se desdobra de um recuo: para onde a agência financeira vai quando a porta
principal se fecha, quem fica com a infraestrutura que já foi construída, e que forma de interação
sobra quando a delegação total é recusada pelo usuário.

## 3. Onde isso está hoje

Âncora feita com acesso à web em 10/09/2026. Vinte e uma buscas em português e inglês; 34 páginas
abertas e lidas; 31 na seção 11, três na 12.4 (abriram na leitura, recusam o verificador).

### 3.1 O que já existe e funciona

**O protocolo de checkout e o pedágio.** O Agentic Commerce Protocol (ACP), codesenvolvido por
Stripe e OpenAI e publicado sob Apache 2.0 em setembro de 2025, define quatro partes — comprador,
agente, negócio e provedor de pagamento — e mantém o lojista como **merchant of record**: ele
controla o que é vendido, como a marca aparece e como o pedido é atendido. A partir de **26 de
janeiro de 2026**, lojistas Shopify que vendem via checkout do ChatGPT pagam **4%** à OpenAI, por
cima das taxas do Shopify; os checkouts do Google (AI Mode e Gemini) e do Microsoft Copilot não
cobram taxa adicional — "por ora", nas palavras do noticiário.

**A identidade do agente.** O Trusted Agent Protocol (TAP), anunciado por **Visa com a Cloudflare
em 14/10/2025**, assina a identidade do agente nos cabeçalhos HTTP usando **RFC 9421** sobre Web
Bot Auth: o lojista verifica a assinatura contra um diretório de chaves operado pela Visa. A
assinatura carrega carimbo de tempo, identificador de sessão e de chave, e é **vinculada ao domínio
do lojista e à operação**, o que impede reúso. Doze parceiros de lançamento — Adyen, Ant
International, Checkout.com, Coinbase, CyberSource, Elavon, Fiserv, Microsoft, Nuvei, Shopify,
Stripe e Worldpay. O repositório está público no GitHub.

**O mandato.** O Agent Payments Protocol (AP2) do Google, anunciado em setembro de 2025 com mais de
60 parceiros, define mandatos de intenção e de carrinho. Em **28/04/2026** o Google **doou o AP2 à
FIDO Alliance** e publicou a versão 0.2, que introduz o pagamento "Human Not Present" — o agente
compra o ingresso no segundo em que ele abre, sem ninguém olhando. Junto veio o **Verifiable
Intent**, feito com a Mastercard: um registro à prova de adulteração das ações que o usuário
autorizou.

**O trilho de máquina.** Em **10/06/2026** a Mastercard lançou o **Agent Pay for Machines**, com
mais de 30 parceiros (Adyen, Stripe, Cloudflare, Coinbase, Checkout.com, Ripple, entre outros),
guardando permissões concedidas por humanos em blockchains públicas (Polygon, Solana, Base) e
prometendo microtransações abaixo de um centavo, que o trilho de cartão não comporta. O próprio
chefe de produto da Mastercard, Jorn Lambert, disse à Fortune: *"Estou esperando que isso seja um
grande gerador de receita no ano que vem? Não."* E completou que espera "um mercado endereçável
novo e relevante nos próximos cinco anos".

**O pagamento por chamada.** O x402 — HTTP 402 revivido — passou de perto de zero em meados de 2025
para **mais de 100 milhões de transações acumuladas** até o primeiro trimestre de 2026, segundo a
Chainalysis; um painel independente registrava, em 14/04/2026, **mais de 120 milhões de transações,
US$ 41 milhões liquidados em USDC, 14 cadeias, 8 facilitadores e ticket médio de US$ 0,05**, com
Base (58% do volume) e Solana (38%) à frente. As carteiras que usam x402 são atipicamente novas
(197 dias de idade média, contra 423 do usuário comum da Base) e atipicamente diversificadas (26
tokens contra 4).

**A antifraude de agente.** A Forter lançou **Identity Monitoring for agentic commerce em
06/08/2025**; a HUMAN Security ships o **AgenticTrust**. As duas empresas fazem a mesma coisa:
transformam "que agente é este" numa pontuação que o lojista usa para decidir. A Forter registrou,
no dia seguinte à estreia do ChatGPT Agent, **aumento de 18.510% na atividade agêntica** em sua
rede, e um aumento de 50% em fraude com modos automatizados de ataque.

**O Brasil.** Em **19/05/2026** a fintech Iniciador anunciou o que chama do primeiro MCP de
pagamentos agênticos via Pix: o agente propõe o pagamento, a pessoa recebe a notificação, confere
valor e destinatário e autoriza por **biometria FIDO2** com chave criptográfica presa ao aparelho;
o banco valida e o Pix liquida em segundos, sem chargeback. Cobertura declarada: mais de 95% da
população adulta, cerca de 1 bilhão de contas em mais de 150 instituições. O Pix respondeu por
**44% do checkout online brasileiro em 2026**, contra 41% dos cartões. Visa fez a primeira
transação de Intelligent Commerce em produção no país com o Banco do Brasil; a Mastercard registrou
transações com Itaú, Santander, Dock e Pomelo.

**O dinheiro como métrica.** O Alpha Arena, da Nof1, colocou seis modelos — Claude 4.5 Sonnet,
DeepSeek V3.1, Gemini 2.5 Pro, GPT-5, Grok 4 e Qwen 3 Max — para operar perpétuos na Hyperliquid
com **US$ 10 mil cada** e o mesmo prompt. No oitavo dia, Qwen liderava com US$ 17.496,35 e DeepSeek
vinha em segundo; os outros quatro estavam no vermelho, com o GPT-5 acumulando mais de US$ 7 mil de
prejuízo. Uma análise independente da mesma família de arenas resume: *"todos os modelos acabaram
perdendo dinheiro"*, com desempenho positivo apenas em janelas isoladas, e nenhum ganho consistente
sobre o mercado em escala relevante.

### 3.2 O que existe e ainda não funciona

**O checkout dentro da conversa.** É o caso mais informativo do tema. Lançado em setembro de 2025
com Etsy e a promessa de mais de um milhão de lojistas Shopify, o **Instant Checkout foi aposentado
em 24/03/2026** — cerca de cinco meses de vida. A razão declarada pelos envolvidos é de conversão:
Daniel Danker, EVP de aceleração de IA do Walmart, disse que a conversão era **três vezes menor**
para a seleção vendida dentro do chatbot do que para a que exigia clique para fora; a mesma origem,
porém, trazia **cerca do dobro da taxa de cliente novo** que a busca. A Etsy não viu venda
relevante. A OpenAI reconheceu que "a versão inicial do Instant Checkout não oferecia o nível de
flexibilidade a que aspiramos". O que ficou no lugar: **aplicativos de lojista dentro do ChatGPT**
— Walmart, Target, Instacart, DoorDash, Sephora, Lowe's, CarMax, Expedia —, com descoberta na IA e
compra no site da loja. O ACP continua vivo como camada de descoberta e de pagamento delegado; o
que morreu foi a tela de compra dentro da conversa.

**O micropagamento.** O x402 tem número grande e demanda pequena. A Chainalysis mostra que as
transações **acima de US$ 1 subiram de 49% para 95% do volume** entre o início de 2025 e o início
de 2026, enquanto a faixa de 10 centavos a um dólar **caiu de 46% para 4%** — ou seja, o volume que
cresceu não é micropagamento. Um único experimento de memecoin (PING) gerou mais de 150 mil
transações em um mês e um pico de mais de 10.000% de volume em uma semana. Contagem de transação,
neste tema, não mede uso.

**O agente que compra sozinho.** Em amostra de **1.009 consumidores americanos, agosto de 2026**:
77,6% usaram IA para comprar nos últimos seis meses, mas **31,21% não autorizariam nenhum gasto
autônomo**, a mediana do teto autorizado é **US$ 50** e a moda é **US$ 0**. Entre quem usa IA para
comprar toda semana, 51,84% limita o gasto autônomo a US$ 50 ou menos. Sobre ferramentas como o
Instant Checkout, 41,08% se dizem céticos e 33,10%, desconfiados.

**A regra de disputa.** Não existe. A Regulation E americana prevê autorização por "cartão, código
ou outro meio" e não tem moldura para autorização feita por IA; o CFPB abriu comentário em agosto
de 2025 sobre quem pode ser "representante" do consumidor e ainda não fechou. Do lado europeu, o
relatório do CERRE de **16/07/2026**, de Christoph Busch, diz o essencial: o direito do consumidor
da UE pressupõe que quem decide a compra é um ser humano, e com agentes transacionando por API "o
cumprimento dessas regras torna-se não apenas difícil, mas estruturalmente impossível". A janela
apontada é o **Digital Fairness Act**, esperado para o terceiro trimestre de 2026.

**O agente credenciado versus o navegador do usuário.** A Amazon obteve, em **10/03/2026**, liminar
bloqueando o agente de compras do navegador Comet, da Perplexity. Em **04/08/2026** o Nono Circuito
**anulou a liminar**: como o Comet age por direção do usuário, quem acessa a Amazon é o usuário, e
não a Perplexity — portanto não se sustenta a alegação de violação da CFAA. O caso volta à primeira
instância. Enquanto isso não se decide, "agente com credencial própria" e "navegador com a
credencial do dono" são duas categorias jurídicas diferentes que a infraestrutura trata como uma.

**A negociação entre agentes no varejo.** Descrita em profusão, medida em lugar nenhum. Não
encontrei nesta rodada uma única medição pública de quanto um preço de varejo se move em resposta a
uma consulta de agente.

### 3.3 Quem constrói

| Ator | O que constrói | Posição |
|---|---|---|
| **OpenAI + Stripe** | ACP, Instant Checkout (aposentado), apps de lojista | Dono do canal de descoberta; recuou do checkout; cobra 4% |
| **Google** | AP2 (doado à FIDO Alliance), Universal Commerce Protocol, checkout no AI Mode | Padroniza o mandato; cobra zero para comprar distribuição |
| **Visa + Cloudflare** | Trusted Agent Protocol, Intelligent Commerce | Quer ser o diretório de identidade do agente |
| **Mastercard** | Agent Pay, Agentic Tokens, Agent Pay for Machines, Verifiable Intent | Quer o trilho de máquina, com cartão e stablecoin |
| **Coinbase e o ecossistema x402** | HTTP 402 sobre USDC em 14 cadeias | Constrói o trilho sem banco; ainda sem demanda |
| **Forter, HUMAN Security** | Pontuação de confiança de agente | Vendem a decisão de deixar entrar |
| **Grandes varejistas (Walmart, Target, Amazon)** | Apps próprios, agentes próprios, litígio | Retomam o checkout e recusam agente alheio |
| **Iniciador, Stone, bancos brasileiros** | Pix agêntico com biometria FIDO2 sobre Open Finance | Chegam com humano no loop por desenho, não por retrocesso |
| **Nof1** | Alpha Arena | Constrói o benchmark em dinheiro |

### 3.4 Que número descreve a adoção hoje

- **Tráfego e conversão.** Tráfego referido por IA para varejo dos EUA: **+62% em julho de 2026
  sobre julho de 2025**, e **+1.219%** desde outubro de 2024. Conversão **60% maior** que o tráfego
  não-IA em julho de 2026 (11º mês consecutivo de vantagem), **53% mais receita por visita**, 28%
  mais propensão a adicionar ao carrinho. Em maio de 2026, os mesmos indicadores eram +138% de
  tráfego e +54% de conversão.
- **Preparo do lojista.** 39% das páginas iniciais de varejo sem conteúdo legível por máquina;
  legibilidade média de 66% em página de produto contra 75% na inicial.
- **Uso declarado.** 39% dos consumidores dizem já ter usado IA para comprar online, e 85% desses
  dizem que a experiência melhorou (pesquisa Adobe). Em outra amostra, 77,6% usaram IA para comprar
  nos últimos seis meses. Uso regular de ferramenta de compra por IA quase dobrou em três meses,
  **de 15% para 26%**, segundo pesquisa própria da Merkle apresentada em 2026.
- **Delegação de dinheiro.** Moda do valor autorizado a gasto autônomo: **US$ 0**. Mediana: US$ 50.
- **Micropagamento de máquina.** 120 milhões de transações, US$ 41 milhões, ticket de US$ 0,05 —
  com a faixa de centavos em colapso.
- **Previsão, e as divergências dela.** Bain projeta **US$ 300 a 500 bilhões nos EUA até 2030**,
  15% a 25% do e-commerce, definindo comércio agêntico como compra iniciada, influenciada ou
  concluída por agente de terceiro ou do próprio varejista, e **excluindo** jornada que só usa busca
  assistida. O CERRE cita estimativas de 10% a 20% das transações de e-commerce conduzidas por
  agente até 2030. As duas faixas não coincidem, e a diferença está inteira na definição.

### 3.5 Nota sobre o Brasil

O Brasil chega a este tema por um caminho diferente do americano, e a diferença é de arquitetura,
não de velocidade. Nos EUA, a agência financeira da máquina está sendo construída **por cima** de
um sistema de cartão: por isso a ênfase em token, diretório de chave, assinatura de agente e
pontuação de confiança — é preciso inventar identidade porque o trilho não a tem. No Brasil, o
trilho **já é identificado**: Pix liquida em segundos, Open Finance carrega o consentimento, e a
aprovação é biométrica no aparelho do dono. O desenho da Iniciador — agente propõe, humano aprova
com Face ID, banco valida, Pix liquida — não é uma versão tímida do comércio agêntico americano; é
a arquitetura que a evidência de conversão e de confiança do consumidor sugere ser a certa.

O que falta é regra. O Banco Central não regulamenta a prática, e a expectativa levantada em
reportagem de setembro de 2026 é de consulta pública "nos próximos dois a três meses", com
discussão inicial sobre um padrão de **Know Your Agent**. O dado que mais pesa no recorte
brasileiro é de demanda: **76% dos brasileiros declaram pretender usar IA para comprar, contra 44%
dos americanos**. Um mercado com trilho instantâneo, cobertura quase universal, autenticação
biométrica nativa e demanda declarada quase o dobro da americana é o lugar onde a pergunta "o
agente compra ou prepara a compra?" vai ser respondida primeiro — e possivelmente com uma resposta
que o resto do mundo copia.

### 3.6 O contraponto que organiza o resto do mapa

Se houver um só fato para levar desta seção, é este: **o produto que dava nome ao tema foi
desligado**. Instant Checkout viveu cinco meses. A razão não foi regulatória, nem de segurança, nem
de protocolo: foi de conversão. O comprador humano, colocado diante de uma compra pronta dentro de
uma conversa, comprou menos do que quando teve de clicar e ir até a loja. Isso não desmente o tema
— desloca-o. A agência financeira da máquina continua avançando, mas pela camada de baixo
(identidade, mandato, responsabilidade, rastro) e não pela de cima (a tela de compra). Todo o mapa
abaixo é escrito a partir desse deslocamento.

## 4. As disrupções-raiz

### 4.0 Candidatos recusados como raiz

A régua desta disciplina é literal: **se dá para fazer com o que já é comum em produto de massa, é
maduro**. Recusados:

- **Candidato "e-commerce e pagamento online" recusado como raiz:** adoção em maioria desde os anos
  2000; tratado como contexto na seção 3.
- **Candidato "comparador de preço" recusado como raiz:** maioria desde a década de 2000. O que é
  novo não é comparar, é comparar **e pagar** — e isso está na raiz C.
- **Candidato "tokenização de cartão" recusado como raiz:** em maioria desde que carteiras móveis
  se popularizaram; é o substrato sobre o qual o Agentic Token da Mastercard é construído, não a
  ruptura.
- **Candidato "assistente que recomenda produto" recusado como raiz:** 77,6% dos consumidores
  americanos usaram IA para comprar nos últimos seis meses (amostra de 1.009, agosto de 2026). Isso
  é maioria. Entra como contexto e como pai de efeitos, não como raiz.
- **Candidato "repricing algorítmico" recusado como raiz:** software de precificação dinâmica é
  categoria madura no varejo online. O que rompe é a **cadência** quando o comprador também é
  programa — e isso está dentro da raiz D, como efeito, não como raiz.
- **Candidato "trading algorítmico / alta frequência" recusado como raiz:** dominante no mercado
  institucional desde cerca de 2009. A ruptura não é a máquina operar rápido; é o **resultado em
  dinheiro virar a régua de avaliação do modelo** — raiz D.
- **Candidato "stablecoin" recusado como raiz:** meio de liquidação já estabelecido em cripto. Entra
  como consequência em `e7`, não como origem.

### 4.1 Raiz A — O agente vira parte identificada e responsabilizável da transação

**O que rompe.** O pressuposto de que uma compra tem duas partes e **um momento de autorização**.
Toda a máquina de disputa — chargeback, Regulation E, antifraude, prova de consentimento — é
construída sobre "a pessoa autorizou, neste instante, este valor". Com mandato delegado, existem
dois instantes (a delegação e a execução), três partes (comprador, agente, lojista) e uma pergunta
nova que nenhuma regra responde: **autorizar um agente é autorizar cada compra que ele fizer?** A
Checkout.com diz exatamente isso: "essa mudança quebra as premissas embutidas nos frameworks de
chargeback de hoje".

**Por que agora, e não há cinco anos.** Porque três peças ficaram prontas quase ao mesmo tempo:
RFC 9421 (assinatura de mensagem HTTP) com Web Bot Auth deu o formato; as bandeiras aceitaram
operar **diretórios de chave pública de agente** (Visa TAP, 14/10/2025, com Cloudflare e doze
parceiros); e o mandato ganhou padrão com dono institucional (AP2 doado à FIDO Alliance em
28/04/2026, com Verifiable Intent feito com a Mastercard). Há cinco anos não havia nem formato nem
quem operasse o diretório.

**Onde está na difusão.** Entre **produto de nicho e adoção precoce**. TAP tem doze parceiros de
lançamento e repositório público; AP4M tem mais de trinta; nenhum foi testado em volume de rede de
cartão — o próprio material de análise aponta que o AP2 "ainda não foi testado em volume
significativo de rede".

**O que ainda falta acontecer.** (1) O CFPB dizer o que é autorização quando quem executa é um
programa, e o Digital Fairness Act dizer o equivalente na UE. (2) Um diretório de identidade que
não pertença a uma bandeira só — hoje, confiar num agente é confiar na Visa. (3) Resolver a
categoria do navegador-agente, que age com a credencial do dono e não tem credencial própria: é
exatamente o que o Nono Circuito deixou em aberto em 04/08/2026.

**Quem bloqueia, e com que efeito.** As bandeiras e os grandes lojistas, por motivos opostos. As
bandeiras querem que o diretório seja delas, o que transforma um padrão aberto em posição de
gargalo (`e2.1`). Os grandes lojistas querem que agente de terceiro simplesmente não entre — a
Amazon litigou por isso (`e4`).

### 4.2 Raiz B — O pagamento entre máquinas abaixo do centavo torna-se possível e liquidável

**O que rompe.** A unidade de venda de software e de dado. Assinatura e assento pressupõem um
humano que decide uma vez e consome muitas; pagamento por chamada pressupõe um consumidor que
decide a cada chamada e não se cansa de decidir. Rompe também o pressuposto de que todo pagamento
tem um humano no laço — o AP2 v0.2 nomeia isso de "Human Not Present".

**Por que agora, e não há cinco anos.** Porque a liquidação ficou barata o bastante para o valor
transacionado. O x402 liquida em stablecoin sobre cadeias de custo baixo — em 14/04/2026, 14
cadeias, ticket médio de US$ 0,05 — e a Mastercard trouxe o mesmo para dentro de uma rede
regulada, em 10/06/2026, guardando permissões em Polygon, Solana e Base. Há cinco anos, o custo de
liquidação era maior que o valor liquidado.

**Onde está na difusão.** **Demo pública indo para produto de nicho.** Cuidado com o número grande:
120 milhões de transações é volume de experimento, não de comércio — a faixa de valor que
caracterizaria micropagamento real (10 centavos a um dólar) **encolheu de 46% para 4%**, e um único
experimento de memecoin respondeu por mais de 150 mil transações num mês.

**O que ainda falta acontecer.** Demanda. Não falta tecnologia: falta alguém com motivo para pagar
um décimo de centavo por alguma coisa. O executivo que lançou o produto da Mastercard disse, no dia
do lançamento, que não espera receita relevante no ano seguinte. É a raiz com **confiança baixa
obrigatória em toda a cadeia**.

**Quem bloqueia, e com que efeito.** O emissor de cartão. A receita dele é percentual sobre o valor;
sub-centavo não paga interchange. O resultado não é bloqueio frontal — é **desvio**: o micropagamento
vai para o trilho de stablecoin, que fica fora do sistema que resolve disputa (`e7`).

### 4.3 Raiz C — O intermediário agêntico cobra pedágio sobre a venda que originou

**O que rompe.** A economia do funil e a relação direta marca–consumidor. Quando o assistente cobra
4% da venda que originou, ele não é canal: é **mercado de dois lados com preço**, e o preço nasce
comparável ao do marketplace (a taxa de referência da Amazon fica na casa de 8% a 15%). Rompe
também a hipótese de que descoberta é gratuita e conversão é do lojista.

**Por que agora, e não há cinco anos.** Porque o tráfego agêntico ficou bom o bastante para valer
preço: converte **60% melhor** que o não-IA e gera **53% mais receita por visita** (Adobe, julho de
2026), e já são onze meses consecutivos de vantagem. Preço só existe onde há valor medido; a
medição chegou em 2026.

**Onde está na difusão.** **Adoção precoce, com recuo medido.** É a única raiz deste mapa que já
teve um fracasso público e datado: Instant Checkout aposentado em 24/03/2026, conversão três vezes
pior dentro do chat.

**O que ainda falta acontecer.** Que o pedágio encontre o lugar certo. Se a venda não acontece
dentro do assistente, não há sobre o que cobrar 4% — a taxa precisa migrar da **transação** para a
**indicação**, e ninguém publicou ainda um modelo de CPA agêntico. Falta também que Google e
Microsoft parem de cobrar zero: enquanto cobram, não há preço de mercado, há subsídio.

**Quem bloqueia, e com que efeito.** Os grandes varejistas. O Walmart mediu, saiu e foi construir o
próprio caminho; a Amazon litigou. O efeito é `e4`: o agente universal vira agente que compra bem
em poucos lugares.

### 4.4 Raiz D — O capital vira a métrica do modelo, e a máquina passa a operar em mercado real

**O que rompe.** O benchmark. Sai a pontuação num conjunto de tarefas, entra o resultado financeiro
— com variância, risco e ruína como parte da medida. Rompe também a separação confortável entre
"avaliar um modelo" e "operar capital": no Alpha Arena, avaliar **é** operar.

**Por que agora, e não há cinco anos.** Porque existe corretora que aceita um programa como cliente
direto, com liquidação contínua e sem intermediário humano (perpétuos na Hyperliquid), e porque os
modelos ficaram bons o bastante para que a pergunta não seja risível. Há cinco anos, colocar seis
modelos com US$ 10 mil cada e o mesmo prompt teria sido uma piada; em 2026 é um experimento cujo
resultado se discute.

**Onde está na difusão.** **Demo pública.** Uma temporada rodada, resultados majoritariamente
negativos, e a própria organizadora anunciando para a temporada seguinte "métodos estatísticos mais
rigorosos" — admissão de que a primeira não os tinha. Toda a cadeia sai com confiança baixa ou
média, nunca alta.

**O que ainda falta acontecer.** Replicação com significância. O problema é estrutural e está
documentado: o modelo é não-determinístico, e chamadas repetidas podem liquidar a carteira de forma
imprevisível — a Nof1 contornou fazendo o modelo escrever um plano e reusá-lo. Um placar cuja
ordem muda quando se roda de novo não é placar.

**Quem bloqueia, e com que efeito.** O próprio resultado. Modelos perdendo dinheiro em público
esfriam a narrativa mais rápido que qualquer regulador (`e14`), e empurram o mercado de volta para
"IA como ferramenta do operador".

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente vira parte identificada e responsabilizável da transação
    efeitos:
      - id: e1
        ordem: 1
        efeito: O lojista passa a precificar risco por agente, e não só por comprador
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Agente sem histórico paga mais caro para vender, e a reputação vira barreira de entrada no comércio agêntico
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O mercado de agentes compradores se concentra em poucos operadores, porque trocar de agente custa o histórico
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O rastro do mandato vira a prova principal em disputa de cobrança, e quem não o guarda perde por omissão
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Guardar o log de mandato vira obrigação contratual das adquirentes e entra no custo da taxa
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Parte do tráfego de agente passa a ser recusada por não assinar, e a compra bifurca entre agente credenciado e agente anônimo
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A decisão sobre qual agente é legítimo sai do lojista e vai para quem opera o diretório de chaves
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Estar no diretório vira pré-requisito de mercado, e o custo de lançar um assistente que compra deixa de ser técnico e passa a ser institucional
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O navegador-agente de uso pessoal escapa da credencial de agente porque age com a do dono, e vira a rota de contorno da bifurcação
            sinal: forte
            prazo: 2028
            confianca: media
      - id: e3
        ordem: 1
        efeito: O direito de disputa do consumidor passa a depender de qual agente comprou, e o regulador é obrigado a definir autorização delegada
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Nasce a contestação de delegação, em que o consumidor autorizou o agente mas nega a compra específica
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O teto de valor que dispensa confirmação humana vira decisão de design de interface, não de segurança
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Seguro de responsabilidade de agente vira linha de produto com limite próprio, precificada pelo rastro de execução
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e4
        ordem: 1
        efeito: Varejista com marca e base própria recusa o agente de terceiro e oferece o seu, para não perder a relação com o cliente
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O agente universal vira agente que compra bem em poucos lugares e mal no resto
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A promessa de comparação neutra morre na prática, e a régua de comparação do agente vira objeto de disputa por prática enganosa
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O pagamento entre máquinas abaixo do centavo torna-se possível e liquidável
    efeitos:
      - id: e5
        ordem: 1
        efeito: Dado e API passam a ser vendidos por chamada, com o preço na própria resposta, em vez de por contrato anual
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O custo de rodar um agente deixa de ser previsível, porque varia com as fontes que ele resolve consultar
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Orçamento por tarefa vira elemento de interface, e o usuário vê o preço da pergunta antes de fazê-la
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Serviço pequeno que nunca conseguiu vender assinatura passa a vender acesso avulso a agente, sem cadastro nem equipe comercial
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e6
        ordem: 1
        efeito: O volume de micropagamento agêntico é inflado por atividade artificial antes de existir demanda, e a contagem de transações perde valor informativo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Quem decide investir em trilho agêntico passa a exigir métrica com contraparte humana identificável, porque contagem deixou de significar uso
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e7
        ordem: 1
        efeito: O emissor de cartão não sustenta o sub-centavo porque sua receita é percentual, e o micropagamento migra para fora do sistema que resolve disputa
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Consolidam-se duas pilhas separadas, cartão para consumo e stablecoin para máquina, com direitos do consumidor só de um lado
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A fronteira entre as duas pilhas vira o ponto de pedágio e de lavagem de responsabilidade, e quem converte de uma para a outra concentra poder
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O intermediário agêntico cobra pedágio sobre a venda que originou
    efeitos:
      - id: e8
        ordem: 1
        efeito: A taxa cobrada do lojista pelo assistente vira preço de mercado comparável ao do marketplace
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: O preço do produto dentro do assistente começa a divergir do preço no site da própria loja
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Comprar pelo agente sai mais caro que comprar direto, e o agente aprende a mandar o usuário para o site
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Quem cobra zero compra distribuição, e a taxa de checkout agêntico vira arma de disputa de plataforma em vez de fonte de receita
            sinal: medio
            prazo: 2028
            confianca: media
      - id: e9
        ordem: 1
        efeito: O checkout dentro da conversa perde para o clique até o site, e o assistente se assume como camada de descoberta
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O site volta a ser o lugar do design de compra, mas recebendo um visitante qualificado por uma conversa que a loja não viu
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A métrica de marketing passa a ser a taxa de recomendação por agente, medida sem que se saiba como o agente decide
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: O aplicativo da marca dentro do assistente substitui a página da marca como unidade de presença
            sinal: medio
            prazo: 2029
            confianca: baixa
      - id: e10
        ordem: 1
        efeito: Estar legível para a máquina vira item de orçamento de marketing, disputando verba com foto e mídia paga
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: Programa de pontos perde função porque quem decide a compra não sente o benefício, e o desconto vira apenas mais um campo comparável
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A fidelidade sobrevive onde o agente não consegue comparar e desaparece onde a especificação é objetiva
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: A marca passa a pagar para aparecer na recomendação, e o inventário publicitário migra da página para a resposta
            sinal: medio
            prazo: 2029
            confianca: baixa
      - id: e11
        ordem: 1
        efeito: O consumidor recusa delegar dinheiro, e o teto que ele autoriza limita o que o pedágio pode capturar
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: O produto vendável vira o agente que prepara a compra e para, com a última tecla continuando humana
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: A tela de confirmação vira o objeto de design mais disputado do comércio agêntico, e o lugar onde padrões escuros reaparecem
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: O capital vira a métrica do modelo, e a máquina passa a operar em mercado real
    efeitos:
      - id: e12
        ordem: 1
        efeito: O benchmark de modelo ganha unidade em dinheiro, e a comparação entre modelos vira comparação de resultado financeiro
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A variância entre rodadas fica visível e desmonta o placar, porque o mesmo modelo ganha e perde com o mesmo prompt
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: A avaliação de agente econômico migra de quanto rendeu para quanto rendeu sob qual risco, e o vocabulário de finanças entra na avaliação de IA
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Laboratório de modelo ganha incentivo para otimizar o placar financeiro em vez do uso, porque benchmark em dinheiro é tão gamificável quanto em pontos
            sinal: fraco
            prazo: 2030
            confianca: baixa
      - id: e13
        ordem: 1
        efeito: Agente de precificação e agente de compra passam a se responder em ciclos de segundos, e o preço no varejo online muda de cadência
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: A pergunta antitruste sai do algoritmo compartilhado e vai para a homogeneidade de objetivo entre agentes
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: Diversidade de modelo vira exigência de conformidade em precificação, e usar dois modelos diferentes deixa de ser escolha técnica
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e14
        ordem: 1
        efeito: O resultado ruim em público esfria a narrativa do agente autônomo com carteira e empurra o mercado de volta para o humano no laço
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: A tese se parte em duas, IA como ferramenta do operador e IA como operador, e só a primeira encontra comprador
            sinal: medio
            prazo: 2029
            confianca: media
```

### 5.1 Os mecanismos, um a um

O bloco acima diz **o quê**. Aqui está o **porque**, que é o que separa efeito de palpite. A forma
é sempre a mesma: `porque <pai> faz <mecanismo>`.

**`e1` — risco precificado por agente.** Porque a raiz A faz o agente carregar credencial própria e
assinatura verificável, o lojista passa a ter, pela primeira vez, uma chave de agregação que não
existia: todas as compras vindas do agente X. Assim que existe a chave, existe a estatística; assim
que existe a estatística, existe o preço do risco. Artefatos hoje: Forter Identity Monitoring
(06/08/2025), HUMAN AgenticTrust, o diretório de chaves da Visa. Três artefatos verificáveis, logo
`sinal: forte`. Classe de referência: a pontuação de dispositivo (device fingerprinting) levou
cerca de três anos, de 2010 a 2013, para virar campo padrão em decisão de antifraude — e ali também
o gatilho foi a chave de agregação nova, não a inteligência nova.

**`e1.1` — reputação como barreira.** Porque `e1` faz o preço do risco variar com o histórico, um
agente novo entra no mercado pagando o prêmio de quem não tem passado. Isso não é hipótese: é como
funciona qualquer mercado com assimetria de informação e sinal de reputação. O que torna o caso
específico deste tema é que o histórico **é do agente, não do dono** — a mesma pessoa, trocando de
assistente, vira desconhecida de novo. `sinal: medio` porque há tentativa (pontuação de agente já
existe em produto) mas não há ainda diferenciação de preço documentada.

**`e1.1.1` — concentração.** Porque `e1.1` faz o histórico ser um ativo não transferível, o custo de
troca é pago em confiança, não em integração. Um mercado em que trocar de fornecedor zera o seu
histórico converge para poucos fornecedores. O mecanismo é o mesmo do score de crédito: não é
proibido mudar de nome, mas é caro. `confianca: baixa` porque depende de `e1.1`, que ainda não tem
preço observado.

**`e1.2` — o mandato como prova.** Porque a raiz A faz existir um registro assinado do que o usuário
autorizou (Verifiable Intent, mandatos de intenção e carrinho do AP2), a disputa deixa de ser
palavra contra palavra e passa a ser log contra log. A consequência prática é assimétrica: quem tem
o log ganha, quem não tem perde por omissão. A Checkout.com descreve o material que passa a ser
exigido — identificadores de agente, logs de mandato, rastros de orquestração. `sinal: medio`:
existe o padrão, não existe ainda a regra de rede que o torna obrigatório.

**`e1.2.1` — o log vira custo.** Porque `e1.2` faz o log ser prova, guardar log vira obrigação, e
obrigação com custo entra em contrato de adquirência e sai na taxa. Mecanismo idêntico ao da
retenção de comprovante em cartão presente. `confianca: baixa` — é o terceiro elo e assume que a
disputa cresce o bastante para valer regra.

**`e2` — a bifurcação entre agente assinado e anônimo.** Porque a raiz A faz existir uma assinatura
verificável, passa a existir a categoria "não assinou". O lojista que não conseguia distinguir
agente de fraudador agora consegue, e a resposta natural a um pedido não identificado, num ambiente
onde a Forter mediu 50% de aumento em fraude automatizada, é recusar. `sinal: medio` e não forte
porque o artefato existe (TAP) mas a recusa em massa ainda não foi medida. Classe de referência:
SPF/DKIM/DMARC no e-mail — da especificação (2004-2007) à recusa generalizada de remetente não
autenticado levou cerca de dez anos, e só acelerou quando dois provedores grandes mandaram. Aqui há
o mesmo desenho: a aceleração virá de dois ou três lojistas grandes, não da adesão difusa.

**`e2.1` — o poder vai para o diretório.** Porque `e2` faz a verificação depender de uma lista de
chaves públicas, quem mantém a lista decide quem pode comprar. O TAP é operado pela Visa; o AP2 foi
doado à FIDO Alliance justamente para escapar dessa crítica. É o mecanismo clássico da raiz de
confiança: a autoridade certificadora é mais poderosa que o protocolo.

**`e2.1.1` — o custo de entrada vira institucional.** Porque `e2.1` faz a lista ser o portão, lançar
um assistente que compra deixa de exigir engenharia e passa a exigir relacionamento. `confianca:
baixa`, e a razão está declarada: pressupõe que o diretório não se fragmente em vários, o que hoje
é tão provável quanto o contrário.

**`e2.2` — a rota de contorno.** Porque a raiz A credencia o **agente**, e o navegador-agente age com
a credencial do **dono**, ele atravessa a bifurcação sem assinar nada. `sinal: forte` por um artefato
datado e específico: em 04/08/2026 o Nono Circuito anulou a liminar da Amazon exatamente por esse
raciocínio — quem acessa a Amazon é o usuário, não a Perplexity. Se essa leitura se firmar, todo o
aparato de identidade de agente vale para o agente de nuvem e não vale para o agente que roda na
máquina do dono — o que é uma fronteira de design, não jurídica.

**`e3` — o regulador é forçado a definir autorização delegada.** Porque a raiz A cria dois instantes
de autorização onde a regra prevê um, o vácuo aparece na primeira disputa e não se resolve por
contrato privado. O mecanismo é de força: não é que o regulador queira legislar, é que a Regulation
E fala em "cartão, código ou outro meio" e alguém vai perguntar em juízo se um mandato é "outro
meio". O CERRE nomeia o mesmo problema na UE com uma frase que não deixa saída: cumprir as regras de
informação desenhadas para limites cognitivos humanos torna-se "estruturalmente impossível" quando o
agente transaciona por API.

**`e3.1` — contestação de delegação.** Porque `e3` deixa indefinido se autorizar o agente é autorizar
cada compra, abre-se uma alegação que é ao mesmo tempo verdadeira e impossível de verificar: "eu
autorizei o agente, não autorizei **isso**". A Checkout.com descreve o mesmo desenho, e é ele que
sustenta o crescimento de disputas.

**`e3.1.1` — o teto vira decisão de design.** Porque `e3.1` faz toda compra acima de certo valor
virar risco de contestação, o lojista impõe confirmação humana acima de um limiar — e esse limiar
não sai de um cálculo de segurança, sai de um teste A/B entre atrito e perda. É por isso que está
neste mapa e não no tema 2: aqui o limiar é uma escolha de interface.

**`e3.2` — o seguro.** Porque `e3` deixa o risco sem dono definido, ele é precificado e transferido.
O mecanismo já tem método proposto: o artigo de 15/06/2026 sobre *trace-economic underwriting*
mostra que mapear rastro de uso de ferramenta para exposição do cliente derruba o erro médio de
precificação de US$ 17.700 para US$ 569, e que controles condicionais reduzem em 72% o valor em
risco no percentil 95 sobre mil rastros reais. Ou seja: o obstáculo técnico à apólice caiu.

**`e4` — o varejista recusa e oferece o seu.** Porque a raiz A torna possível distinguir agentes, o
varejista que tem marca e base própria pode dizer sim ao seu e não ao dos outros. O mecanismo é de
incentivo puro: o agente de terceiro fica com a relação, com o dado de intenção e com a taxa. `sinal:
forte` por dois artefatos datados — a Amazon litigando contra a Perplexity desde novembro de 2025, e
o Walmart medindo, saindo e migrando para caminho próprio em março de 2026. `confianca: alta` porque
o mecanismo é de interesse, não de tecnologia, e já se realizou duas vezes.

**`e4.1` — o agente universal encolhe.** Porque `e4` faz cada grande loja negociar bilateralmente, a
cobertura do agente vira uma colcha: profundo onde há acordo, raso onde não há. É o oposto da
promessa. `sinal: medio`, mecanismo forte, sem medição pública de cobertura efetiva.

**`e4.1.1` — a comparação neutra vira objeto de disputa.** Porque `e4.1` faz o conjunto comparado
depender de acordo comercial, a recomendação passa a ter viés estrutural não declarado — o que, pela
Seção 5 do FTC Act, é matéria de prática enganosa. O efeito específico deste tema não é "o regulador
cria uma lei": é que **a régua de comparação do agente vira documento exibível em processo**.

**`e5` — venda por chamada.** Porque a raiz B faz o custo de liquidar ficar abaixo do valor
liquidado, cobrar por requisição deixa de ser inviável. Artefato: 14 cadeias, ticket de US$ 0,05,
mais de 120 milhões de transações. `sinal: medio` porque os artefatos existem mas o uso comercial é
raro. Classe de referência **negativa e dura**: micropagamento na web já falhou três vezes — o
próprio HTTP 402 está reservado desde 1997 e nunca saiu do papel; o Web Monetization/Coil rodou de
2019 a 2023 e fechou. Trinta anos sem decolar é a classe de referência correta, e é ela que empurra
o prazo para 2028 e trava a confiança em média.

**`e5.1` — custo imprevisível.** Porque `e5` faz o agente pagar por fonte consultada, e o agente
decide sozinho quantas fontes consultar, o custo da mesma tarefa varia entre execuções. É
específico: com assinatura, consultar mais não custa mais. `confianca: baixa` porque supõe adoção de
`e5`, que a classe de referência desaconselha.

**`e5.1.1` — orçamento na interface.** Porque `e5.1` faz o custo variar, ele precisa ser mostrado
antes — e mostrar preço antes de executar é decisão de interface, não de billing. É a única maneira
de o usuário não ser surpreendido.

**`e5.2` — o vendedor pequeno.** Porque `e5` remove cadastro, contrato e comercial da venda de
acesso, o custo fixo de vender cai a quase zero, e serviços que não sustentavam assinatura passam a
sustentar chamada avulsa. O painel do x402 já mostra a forma do uso: APIs de busca de dado dominam
em número de chamadas, inferência de LLM domina em valor por pagamento.

**`e6` — a métrica inflada.** Porque a raiz B faz a transação ser barata e pública, ela é
fabricável — e onde há incentivo narrativo, ela é fabricada. Os artefatos são explícitos: a faixa de
10 centavos a um dólar caiu de 46% para 4% do volume enquanto o total crescia, e um experimento de
memecoin sozinho gerou mais de 150 mil transações num mês. `sinal: forte` e `confianca: alta` — é o
efeito mais bem documentado deste mapa, e é um efeito **contra** a própria raiz.

**`e6.1` — a métrica exigida muda.** Porque `e6` faz contagem perder valor informativo, quem aloca
capital passa a pedir a única coisa difícil de fabricar: pagamento com contraparte humana
identificável de um lado. Mecanismo de seleção adversa clássico.

**`e7` — o desvio para fora do sistema de disputa.** Porque a raiz B exige liquidar valores em que a
receita percentual do emissor é menor que o custo de processar, o trilho de cartão não tem
incentivo, e o valor migra para stablecoin — onde não existe chargeback. O artefato é o desenho do
próprio produto da Mastercard: permissões em Polygon, Solana e Base, e a declaração do executivo de
que não espera receita relevante.

**`e7.1` — duas pilhas.** Porque `e7` faz cada tipo de pagamento procurar o trilho que o comporta,
consolidam-se dois sistemas com direitos diferentes. A consequência que interessa a quem projeta
interação: o **mesmo agente** vai operar nos dois, e a pessoa não vai saber em qual está.

**`e7.1.1` — a fronteira como pedágio.** Porque `e7.1` cria duas pilhas que precisam se comunicar,
quem faz a conversão (on-ramp e off-ramp) ocupa o único ponto obrigatório — e é também onde a
responsabilidade se perde de vista, porque de um lado há regra e do outro não.

**`e8` — o pedágio vira preço de mercado.** Porque a raiz C põe um número público sobre a venda
originada por assistente (4%), esse número passa a ser comparável: com a taxa de referência de
marketplace, com o CPC de busca paga, com o custo de aquisição próprio. `sinal: forte`, artefato
datado e com valor (26/01/2026, 4%, Shopify). `confianca: alta` porque o preço já existe.

**`e8.1` — o preço diverge.** Porque `e8` faz a venda pelo assistente custar mais caro ao lojista, e
o lojista pode precificar por canal, o mesmo produto começa a ter dois preços. `sinal: fraco` e
`confianca: baixa`, declaradamente: não encontrei nenhuma medição de divergência de preço por canal
agêntico, e o mecanismo é contrariado pela prática de paridade de preço que os marketplaces impõem
por contrato.

**`e8.1.1` — a inversão.** Porque `e8.1` faz comprar pelo agente sair mais caro, o agente — cujo
objetivo declarado é o melhor preço para o usuário — passa a recomendar comprar fora dele. É o
efeito mais contraintuitivo do mapa: **o pedágio sabota o canal que o cobra**.

**`e8.2` — taxa zero como arma.** Porque `e8` cria um preço, cobrar zero vira ato de concorrência,
não de generosidade. A frase do noticiário é literal: Google e Microsoft não cobram taxa adicional
"por ora". `sinal: medio` — o artefato é a ausência de taxa, que é observável mas não mensurável.

**`e9` — o checkout sai da conversa.** Porque a raiz C depende de conversão, e a conversão dentro do
chat foi medida como três vezes pior, o intermediário recua para onde é bom: descoberta. `sinal:
forte`, `confianca: alta` — é o único efeito deste mapa que **já aconteceu por inteiro**, com data
(24/03/2026), razão declarada e substituto em produção.

**`e9.1` — o site volta ao centro, mudado.** Porque `e9` manda o comprador para a loja, o design de
compra continua no site — mas o visitante chega com decisão parcialmente tomada por uma conversa que
o lojista não viu. Isso muda o que a página precisa fazer: menos convencer, mais confirmar e não
contradizer. Os números da Adobe sustentam o perfil do visitante: 59% mais tempo no site, 33% menos
rejeição, 28% mais propensão a adicionar ao carrinho.

**`e9.1.1` — a métrica cega.** Porque `e9.1` faz a decisão acontecer fora do alcance da analítica do
lojista, a métrica possível vira "com que frequência o agente me recomenda" — sem acesso ao critério.
É o SEO sem o ranking visível.

**`e9.2` — o app substitui a página.** Porque `e9` mantém a descoberta dentro do assistente, a
unidade de presença vira o aplicativo do lojista dentro dele. `confianca: baixa`: a evidência é de
poucos meses e concentrada num assistente só.

**`e10` — legibilidade vira orçamento.** Porque a raiz C faz o tráfego agêntico converter melhor
(60% acima do não-IA, onze meses seguidos) e a Adobe mostra que 39% das home e 34% das páginas de
produto não são legíveis por máquina, existe um retorno mensurável em marcar melhor. `sinal: forte`,
`confianca: alta`. Classe de referência: SEO — da primeira prática deliberada (1997) à disciplina
com verba própria (2003), cerca de seis anos; aqui o ciclo é mais curto porque a verba e a equipe já
existem, só mudam de alvo. Daí 2028.

**`e10.1` — o ponto perde função.** Porque `e10` faz a decisão passar por um comparador que não sente
pertencimento, o benefício emocional do programa de fidelidade não chega a quem decide; o que chega
é o valor monetário do ponto, que vira mais uma coluna. Artefato: 44% dos executivos de varejo
ouvidos pela Deloitte (330 executivos, out–nov/2025) esperam que a IA generativa enfraqueça a
lealdade de marca ao priorizar valor e adequação.

**`e10.1.1` — onde a fidelidade sobrevive.** Porque `e10.1` faz a comparação dominar onde há
especificação objetiva, sobra fidelidade onde a especificação não captura: prazo, atendimento,
devolução, risco. É o inverso da leitura fácil ("a marca morre"): a marca se retrai para os
atributos que o agente não consegue tabular.

**`e10.2` — o anúncio migra para a resposta.** Porque `e10` faz a recomendação ser o lugar escasso, o
inventário publicitário segue a escassez. `confianca: baixa` aqui, deliberadamente: o mecanismo é
forte, mas a evidência específica de comércio agêntico que eu abri nesta rodada é fraca, e eu não
vou tomar emprestado número do mapa vizinho.

**`e11` — a recusa do consumidor.** Porque a raiz C pressupõe que a pessoa delega a compra, e a
pessoa não delega, o teto do mercado é dado pela confiança e não pela tecnologia. Artefato: moda de
US$ 0, mediana de US$ 50, 31,21% em zero, amostra de 1.009 em agosto de 2026. `sinal: forte`,
`confianca: alta`. Classe de referência decisiva: a compra por assistente de voz. A Alexa está em
mercado desde 2014 e, doze anos depois, comprar por voz nunca virou canal relevante — e ali não
faltava tecnologia, faltava vontade de delegar. É a mesma falta.

**`e11.1` — o produto é o agente que para.** Porque `e11` limita a delegação, o que resta de vendável
é a preparação: pesquisa, comparação, carrinho montado, tudo pronto até a tecla. E a arquitetura
brasileira — agente propõe, humano aprova por biometria, Pix liquida — é exatamente esse produto,
desenhado assim de origem. `sinal: forte`, `confianca: alta`: há produto em produção fazendo isso.

**`e11.1.1` — a tela de confirmação.** Porque `e11.1` concentra toda a decisão num único instante de
interface, esse instante vira o ativo mais disputado — e todo instante de decisão concentrado
atraiu, historicamente, desenho manipulativo. O mecanismo é o mesmo do checkout de um clique e do
consentimento de cookie.

**`e12` — o benchmark em dinheiro.** Porque a raiz D dá aos modelos capital idêntico, prompt idêntico
e um mercado real, o resultado é comparável em unidade que qualquer pessoa entende. Artefato: Alpha
Arena, seis modelos, US$ 10 mil cada, Hyperliquid. `sinal: medio` — há uma temporada rodada, não há
adoção como métrica padrão.

**`e12.1` — a variância desmonta o placar.** Porque `e12` usa modelos não-determinísticos, a mesma
configuração produz resultados diferentes, e a ordem do placar depende da rodada. O mecanismo está
documentado na própria construção do experimento: a Nof1 precisou fazer o modelo escrever um plano e
reusá-lo para evitar que chamadas repetidas liquidassem a carteira de forma imprevisível. E o sinal
mais honesto vem da própria organizadora, que anunciou para a temporada seguinte "métodos
estatísticos mais rigorosos".

**`e12.1.1` — o vocabulário de finanças entra.** Porque `e12.1` mostra que retorno sem risco não
informa, a avaliação passa a exigir medidas de dispersão, drawdown e ruína. É a importação de um
vocabulário inteiro para dentro da avaliação de modelos.

**`e12.2` — o placar financeiro é gamificável.** Porque `e12` cria um placar público com prestígio
associado, existe incentivo para otimizar o placar. `sinal: fraco`, `confianca: baixa`: é inferência,
não observação — mas é a mesma inferência que se confirmou em todos os benchmarks anteriores de IA.

**`e13` — o preço muda de cadência.** Porque a raiz D normaliza agentes operando com objetivo
financeiro, e o vendedor responde a uma consulta que também é de agente, os dois lados passam a
operar em ciclos curtos. `sinal: fraco` e `confianca: baixa` por honestidade: **não encontrei uma
única medição pública** de repricing de varejo em resposta a consulta de agente. A classe de
referência empurra o prazo: a alta frequência institucional levou de 2005 a 2009 para dominar, e
dependia de colocação física junto à bolsa — infraestrutura que o varejo não tem e cujo análogo
(cache de borda, catálogo pré-computado) trabalha **contra** a reprecificação instantânea.

**`e13.1` — a pergunta antitruste se desloca.** Porque `e13` faz agentes com objetivo semelhante
interagirem repetidamente, o risco de coordenação deixa de depender de algoritmo compartilhado. Aqui
a evidência é boa e vai contra o alarme: o estudo de 18/03/2026 (mais de 2.000 horas de computação
com agentes LLM de código aberto) mostra que a colusão é **frágil** — heterogeneidade de paciência
derruba o sobrepreço de 22% para 10%, acesso assimétrico a dado derruba para 7%, e competição entre
famílias diferentes (LLM contra Q-learning) **elimina** o comportamento colusivo. A exceção
inquietante: diferença de tamanho de modelo **preserva** a colusão, por dinâmica de líder e
seguidor. Por isso o efeito é `media` e não `alta`: o mecanismo é real, mas o achado empírico aponta
para fragilidade, não para inevitabilidade.

**`e13.1.1` — diversidade como conformidade.** Porque `e13.1` identifica homogeneidade como fator de
risco, a recomendação de política vira exigência operacional. O próprio artigo discute implicações
antitruste em restrição de compartilhamento de dado e política de diversidade algorítmica. Prazo
2032: **fora do horizonte deste mapa**, e declarado como tal em 5.4.

**`e14` — o resultado ruim esfria a narrativa.** Porque a raiz D torna o desempenho público e
medido em dinheiro, o fracasso também é público — e nenhum outro tipo de evidência convence um
comitê de investimento tão rápido quanto perda. `sinal: medio`, `confianca: media`: o resultado
existe e é ruim, mas o esfriamento é inferência.

**`e14.1` — a tese se parte em duas.** Porque `e14` separa demonstração de utilidade, o mercado
compra a ferramenta que assiste o operador e recusa o operador substituto. É exatamente o mesmo
desenho de `e11.1` chegando por outro caminho — e isso é uma convergência, tratada em 5.3.

### 5.2 As classes de referência usadas para os prazos

Prazo sem classe de referência é chute. Estas foram as usadas, com o que cada uma ensina:

| Classe de referência | Tempo até ~10% de adoção | Onde foi aplicada | O que ela empurra |
|---|---|---|---|
| Pontuação de dispositivo em antifraude (2010→2013) | ~3 anos | `e1` | Puxa para perto: 2027 |
| Tokenização de cartão (EMVCo 2014 → carteiras massivas) | ~5 anos | `e1.2`, `e3.2` | Sustenta 2029 |
| SPF/DKIM/DMARC (2004-2007 → recusa generalizada) | ~10 anos, e só com dois provedores grandes mandando | `e2`, `e2.1` | Empurra: 2028-2029 |
| SEO como disciplina com verba (1997→2003) | ~6 anos | `e10` | Encurtado para 2028: equipe e verba já existem, só mudam de alvo |
| App store e a taxa de 30% (2008→2010) | ~2 anos | `e8`, `e8.2` | Puxa: 2027-2028 |
| Micropagamento na web: HTTP 402 (1997), Flattr, Coil/Web Monetization (2019-2023, encerrado) | **nunca** | `e5`, `e5.1`, `e6` | Empurra e trava confiança |
| Compra por assistente de voz (Alexa, 2014→hoje) | **nunca virou canal relevante** | `e11`, `e11.1` | É a classe decisiva do mapa |
| Alta frequência institucional (2005→2009) | ~4 anos, com colocação física | `e13` | Empurra para 2030 e trava em baixa |
| PSD2 / SCA na UE (2015 diretiva → 2021 execução plena) | ~6 anos, **com mandato** | `e3`, `e3.1` | Sustenta 2029, e só porque há mandato a caminho |
| Pix (nov/2020 → 44% do checkout online em 2026) | ~5 anos, com mandato do BC e rede obrigada | nota do Brasil | Mostra que mandato acelera, e que sem ele nada disso vale |

Duas dessas classes são **negativas** — micropagamento web e compra por voz —, e são as duas mais
importantes do mapa. Uma tendência com trinta anos de tentativa fracassada e uma com doze anos de
indiferença do usuário não devem receber o mesmo tratamento de uma tecnologia sem histórico.

### 5.3 Convergências, ciclos e contradições

**Convergência 1 — o humano volta ao laço por dois caminhos independentes.** `e11.1` (da raiz C:
o consumidor não delega, então o produto é o agente que prepara e para) e `e14.1` (da raiz D: o
resultado ruim separa ferramenta de operador, e só a ferramenta vende) chegam ao mesmo lugar por
mecanismos que não se tocam — um é de confiança do consumidor, o outro é de desempenho medido. Duas
raízes diferentes convergindo para o mesmo efeito de segunda ordem é o achado mais forte deste mapa,
e é o que sustenta a tese do resumo: **o objeto de design dos próximos cinco anos é a tela da
confirmação, não o agente que compra.**

**Convergência 2 — o varejista grande retoma o checkout.** `e4` (da raiz A: agora dá para distinguir
e recusar agente de terceiro) e `e9` (da raiz C: o checkout no chat converte mal) produzem o mesmo
movimento por razões opostas — um por poder, outro por desempenho. Quando dois motivos independentes
apontam para a mesma ação, ela acontece.

**Convergência 3 — a identidade e o pedágio têm o mesmo dono.** `e2.1` (quem opera o diretório
decide quem compra) e `e8.2` (quem cobra zero compra distribuição) descrevem posições que, nas
empresas reais, se sobrepõem: Visa, Cloudflare, Google e Microsoft aparecem nos dois lados. Quem
resolve a confiança também cobra a passagem.

**Ciclo de retroalimentação negativa (raiz B se freia sozinha).** `e6` (volume inflado) → `e6.1`
(quem investe passa a exigir métrica com humano de um lado) → menos capital para trilho agêntico →
menos serviço vendendo por chamada → `e5` mais lento → menos volume real → mais peso relativo do
volume artificial. O ciclo é fechado e negativo. É a razão de a raiz B ser a mais fraca das quatro.

**Ciclo de retroalimentação positiva (raiz C se acelera).** `e10` (catálogo legível vira verba) →
agente compra melhor naquele lojista → `e8` (a taxa se justifica pelo resultado) → mais lojista
integra → mais catálogo legível. É o único ciclo positivo do mapa, e ele **não depende** de o
checkout acontecer dentro do assistente.

**Contradição 1 — `e8` contra `e9`.** A raiz C cobra 4% sobre a venda feita dentro do assistente;
`e9` diz que a venda **não acontece** mais dentro do assistente. Não podem coexistir na forma atual.
O que decide: se a taxa migrar da transação para a indicação (um CPA agêntico), a raiz C sobrevive
sem o checkout; se não migrar, o pedágio encolhe para as categorias em que o checkout no chat
funciona (repetição, baixo valor, especificação objetiva). Registro as duas e não resolvo.

**Contradição 2 — `e7.1` contra `e3.2`.** A pilha de stablecoin cresce justamente onde não há
direito de disputa; o seguro de agente nasce para cobrir o risco que o direito não cobre. Se o
seguro ficar barato, ele viabiliza a pilha sem direitos e ela cresce; se ficar caro, ela para. O
artigo de *trace-economic underwriting* sugere que o preço vai cair (erro de precificação de US$
17.700 para US$ 569), o que favorece o crescimento da pilha sem direitos — um resultado
desconfortável de um avanço técnico aparentemente neutro.

**Contradição 3 — `e2` contra `e2.2`.** A bifurcação exige que o agente assine; o navegador-agente
não assina e, pela leitura do Nono Circuito, não precisa. Ou a bifurcação vale só para agentes de
nuvem — e então ela é contornável por qualquer um que rode o agente localmente —, ou a categoria
"navegador do usuário" é fechada por outro caminho. O que decide é o desfecho do caso na primeira
instância.

### 5.4 Efeitos que passam do horizonte

Um efeito de terceira ordem tem prazo além de 2031 e está declarado aqui, como manda o formato:

- **`e13.1.1` — prazo 2032.** Diversidade de modelo como exigência de conformidade em precificação.
  Está fora da janela deste mapa. A razão de manter é que o mecanismo é claro e a evidência já está
  publicada (o estudo de colusão discute explicitamente política de diversidade algorítmica); a
  razão de ele cair fora é que depende de `e13`, cujo prazo já foi empurrado para 2030 pela classe
  de referência da alta frequência, e de um ciclo regulatório inteiro depois disso.

Nenhum efeito de primeira ou segunda ordem passa de 2031.

### 5.5 Cobertura — STEEP e quem perde

**Social.** `e11` (a recusa de delegar dinheiro), `e11.1.1` (a tela de confirmação e o padrão
escuro), `e3.1` (a contestação de delegação, que é tanto jurídica quanto de confiança).

**Tecnológico.** `e1` (risco por agente), `e2` (bifurcação por assinatura), `e5` (venda por
chamada), `e12.1` (não-determinismo como problema de medição).

**Econômico.** `e8` (pedágio como preço de mercado), `e10` (legibilidade como verba), `e7` (desvio
de trilho por incentivo de receita), `e5.2` (queda do custo fixo de vender).

**Ecológico — vazio, e registrado como vazio.** Não encontrei nenhum efeito específico deste tema
que passe no teste de especificidade do §3. O candidato óbvio — consumo energético de datacenter —
decorre de qualquer tema de IA e, trocada a raiz, a frase continua servindo. Um candidato menos
óbvio, "compra automatizada aumenta devolução e frete", eu não consegui ancorar em nenhum dado desta
rodada. Prefiro a categoria vazia a um efeito genérico.

**Político e regulatório.** `e3` (Regulation E e Digital Fairness Act forçados a definir autorização
delegada), `e13.1` (deslocamento da pergunta antitruste), `e2.2` (a categoria jurídica do
navegador-agente), `e4.1.1` (viés de comparação como prática enganosa).

**Quem perde — a lista que falta na maioria das rodas.**

| Quem perde | Por qual efeito | O que exatamente perde |
|---|---|---|
| Comparador de preço e afiliado | `e9`, `e4.1` | O agente faz o trabalho deles dentro da conversa, de graça e antes |
| Time de CRM e programa de pontos | `e10.1` | O benefício não chega a quem decide; o ponto vira coluna de planilha |
| Emissor de cartão, no segmento máquina | `e7` | O volume sub-centavo sai do trilho dele e não volta |
| Lojista pequeno sem catálogo estruturado | `e10`, `e2` | Deixa de existir para o agente, sem nunca aparecer num relatório |
| Central de atendimento | `e9.1` | O agente não liga, não pede exceção e não aceita retenção |
| Marca de categoria com especificação objetiva | `e10.1.1` | A preferência construída em anos vira empate técnico numa tabela |
| Agente novo, sem histórico | `e1.1` | Paga o prêmio de desconhecido para poder vender |
| Consumidor que delegou e se arrependeu | `e3.1` | Fica entre duas regras, e nenhuma delas o cobre hoje |
| Quem publica dado e esperava viver de micropagamento | `e6`, `e5` | O trilho existe; a demanda, não |

## 6. Sinais fracos e wildcards

### 6.1 Sinais fracos

**1. O "por ora" do Google e da Microsoft.**
*Onde foi visto:* o noticiário sobre a taxa de 4% da OpenAI registra, com essas palavras, que as
vendas por checkout do Google (AI Mode e Gemini) e do Copilot não têm taxa adicional "por ora".
*O que mudaria:* enquanto um dos dois cobra zero, não existe preço de mercado para checkout
agêntico — existe subsídio, e a taxa de 4% é uma anomalia sustentada por vantagem de tempo. No dia
em que um deles anunciar taxa, a raiz C se consolida e `e8` vira estrutura em vez de experimento.
*Sinal observável:* a página de condições comerciais do checkout do Google para lojistas deixar de
dizer que não há taxa adicional.

**2. A faixa de centavos do x402.**
*Onde foi visto:* Chainalysis — transações entre 10 centavos e um dólar caíram de 46% para 4% do
volume entre o início de 2025 e o início de 2026; ticket médio de US$ 0,05 mas 95% do volume acima
de US$ 1.
*O que mudaria:* essa faixa é o indicador puro de micropagamento real. Se ela voltar a crescer, a
raiz B deixa de ser infraestrutura à procura de demanda.
*Sinal observável:* participação da faixa de 10 centavos a um dólar acima de 15% do volume por três
meses consecutivos, com carteiras de idade média acima de um ano (hoje são 197 dias).

**3. O Pix agêntico com biometria no laço.**
*Onde foi visto:* Iniciador, 19/05/2026 — agente propõe, humano aprova por FIDO2, banco valida, Pix
liquida; Stone como primeiro cliente em produção; cobertura declarada acima de 95% da população
adulta.
*O que mudaria:* o Brasil pula inteiramente a fase de "inventar identidade de agente", porque a
identidade é do banco e a aprovação é do aparelho. Se isso funcionar comercialmente, a arquitetura
americana (token, diretório, pontuação de confiança) vira um desvio histórico causado por um trilho
de pagamento que não tinha identidade.
*Sinal observável:* edital de consulta pública do Banco Central sobre iniciação de pagamento por
agente — a reportagem de setembro de 2026 fala em dois a três meses.

**4. O Walmart saindo e indo construir o próprio.**
*Onde foi visto:* março de 2026 — o Walmart mediu conversão três vezes pior no chat, encerrou a
frente com a OpenAI e migrou para caminho próprio.
*O que mudaria:* se três dos dez maiores varejistas americanos fizerem o mesmo, `e4.1` se realiza
antes de 2029 e o agente universal morre antes de nascer.
*Sinal observável:* um segundo varejista do top 10 anunciando saída de um assistente e lançamento de
agente próprio, com número de conversão publicado.

**5. O raciocínio do Nono Circuito.**
*Onde foi visto:* 04/08/2026 — como o Comet age por direção do usuário, quem acessa a Amazon é o
usuário.
*O que mudaria:* se virar precedente, o agente que roda na máquina do dono não precisa de credencial
própria, e metade da raiz A vale só para agente de nuvem. A bifurcação de `e2` fica contornável por
desenho de produto.
*Sinal observável:* uma segunda decisão, em outro circuito ou na primeira instância deste caso,
adotando o mesmo raciocínio.

**6. A apólice precificada por rastro.**
*Onde foi visto:* artigo de 15/06/2026 sobre *trace-economic underwriting* — erro médio de
precificação caindo de US$ 17.700 para US$ 569, e redução de 72% no valor em risco no percentil 95
com controles condicionais, sobre mil rastros reais de engenheiro de software.
*O que mudaria:* seguro barato transfere o risco e destrava delegação — inclusive na pilha sem
direito de disputa (`e7.1`), que é o lado desconfortável.
*Sinal observável:* a primeira apólice com prêmio publicado em função do log de execução do agente,
e não do faturamento do segurado.

**7. A moda de zero.**
*Onde foi visto:* amostra de 1.009 consumidores americanos, agosto de 2026 — o valor mais frequente
autorizado a gasto autônomo é US$ 0.
*O que mudaria:* é o teto de toda a raiz C no consumo. Se essa moda sair do zero, o mapa inteiro
acelera; se ficar, `e11.1` domina e o comércio agêntico é, por cinco anos, um comércio de
preparação.
*Sinal observável:* a mesma pergunta repetida em 2027 com moda diferente de zero — não a média, que
é sensível a caudas, e não a mediana, que já é US$ 50.

### 6.2 Wildcards

**Wildcard 1 — a tarifa exclusiva para agente.**
*Mecanismo:* uma companhia aérea ou um varejista publica preço **menor** para compra feita por
agente credenciado, porque agente não liga para o call center, não pede exceção, não ocupa
atendimento e não muda de ideia. O custo de servir cai de verdade, e o desconto é a partilha desse
ganho. A infraestrutura para reconhecer o canal já existe: a assinatura do TAP é vinculada ao
domínio e à operação, então o lojista sabe exatamente quem está comprando.
*Por que é improvável:* cria discriminação de preço visível e verificável entre dois clientes
comprando a mesma coisa no mesmo instante, o que é o convite mais direto possível a investigação de
prática abusiva — e a fiscalização de precificação algorítmica já está aberta.
*O que faria com o mapa:* inverte `e8.1.1`. Em vez de comprar pelo agente sair mais caro, sai mais
barato — e aí `e11` (a recusa do consumidor) é atacada pelo bolso, não pelo argumento. A raiz C
acelera três a quatro anos.
*Sinal precoce:* aparecimento de um código de canal específico para agente em GDS de viagem, ou de
um campo de preço diferenciado por identidade de agente no ACP.

**Wildcard 2 — um agente quebra um lojista numa tarde.**
*Mecanismo:* está descrito com precisão pela Unit 42 e não depende de nenhuma tecnologia nova.
Injeção indireta de comando em metadado de página de produto instrui o agente do lojista a pular a
verificação e emitir reembolso sem prova de devolução; uma fazenda de bots dispara milhares de
devoluções por hora. O relatório usa a imagem de "10 mil devoluções numa única hora" — a caixa é
esvaziada antes de alguém chegar ao escritório.
*Por que é improvável:* exige que um lojista grande tenha dado a um agente poder de estorno sem
confirmação, o que hoje quase ninguém fez — precisamente porque a delegação está travada.
*O que faria com o mapa:* congela a delegação por um ciclo inteiro, e transforma a raiz A de escolha
de mercado em **obrigação regulatória**: identidade de agente deixa de ser um produto da Visa e vira
requisito. `e2` e `e3` antecipam-se para 2027.
*Sinal precoce:* o primeiro incidente público de estorno em massa mediado por agente, com valor
divulgado.

**Wildcard 3 — o Banco Central do Brasil regula o agente antes do Fed e da Comissão Europeia.**
*Mecanismo:* o Brasil já tem as três peças que faltam lá fora — liquidação instantânea, consentimento
padronizado em Open Finance e autenticação biométrica presa ao aparelho. Falta uma frase: quem
responde quando o agente erra. Uma consulta pública e uma resolução resolvem, e o BC já fez isso
antes, no ritmo do Pix.
*Por que é improvável:* consulta pública brasileira em matéria de pagamento costuma levar de um a
dois anos entre abertura e resolução, e o tema ainda está em fase de "discussão inicial".
*O que faria com o mapa:* o Brasil vira campo de teste mundial de comércio agêntico com humano no
laço, e a arquitetura periférica passa a ser copiada pelo centro — o inverso do fluxo habitual. A
nota do recorte brasileiro deixaria de ser nota e viraria a seção principal.
*Sinal precoce:* o edital da consulta pública, com prazo de contribuição.

**Wildcard 4 — o agente com receita própria.**
*Mecanismo:* um agente que ganha dinheiro vendendo serviço por chamada (`e5.2`) e gasta comprando
dado e inferência (`e5`) fecha o ciclo: passa a ter fluxo de caixa próprio, sem que nenhum humano
esteja na cadeia de pagamento em nenhum dos dois lados. Tecnicamente, tudo o que ele precisa já
existe — carteira, trilho, catálogo, preço na resposta.
*Por que é improvável:* falta personalidade jurídica ou um custodiante disposto a responder por ele,
e a lei californiana de 2025 que barra a defesa de "a IA agiu sozinha" indica para onde o direito
está indo — na direção contrária.
*O que faria com o mapa:* muda o eixo. Todas as quatro raízes deste mapa pressupõem que o dinheiro é
**de alguém**; um agente com caixa próprio cria a figura que o tema nomeia e que hoje não existe — o
agente como parte contratante de verdade. `e1.1.1` (concentração por reputação) viraria o efeito
central, porque reputação seria a única garantia disponível.
*Sinal precoce:* o primeiro agente com conta em instituição financeira regulada e identificador
fiscal associado, em qualquer jurisdição.

## 7. Contra o próprio mapa

Esta seção é o relato de uma bateria aplicada **sobre o mapa já pronto**, e cada item dela alterou
alguma coisa. O registro auditável, com valor antes e depois, está em 7.7.

### 7.1 Pré-mortem — é 2031 e este mapa se mostrou errado. Por quê?

**Razão 1, a mais provável: eu confundi infraestrutura com mercado.** Quatro raízes, dezenas de
protocolos, bandeiras, padrões, diretórios — e no fim nada disso importou, porque a delegação de
dinheiro no consumo simplesmente não aconteceu, do mesmo jeito que comprar por voz não aconteceu em
doze anos de Alexa. Em 2031 a conclusão seria: o comércio agêntico foi um canal de descoberta com
um protocolo de pagamento caro demais para o que precisava fazer. *Aponta para:* as raízes A e C
inteiras, e especialmente para `e8` e `e12`. *O que fiz:* `e8` mantém confiança alta, porque a taxa
de 4% existe e é um fato, mas o efeito filho `e8.1` foi rebaixado a baixa e todo o ramo de `e9`
passou a descrever **o recuo**, não o avanço.

**Razão 2: a raiz B nunca deveria ter entrado.** Micropagamento na web falhou em 1997 (o próprio
402 reservado e nunca implementado), falhou de novo com Flattr e falhou de novo com Coil/Web
Monetization, que fechou em 2023. Em 2031, 120 milhões de transações a US$ 0,05 terão sido lidas
como o que a Chainalysis já mostra que são: experimento, memecoin e teste. *Aponta para:* `e5`,
`e5.1`, `e5.1.1`, `e7.1.1`. *O que fiz:* rebaixei `e5` de alta para média, empurrei o prazo, e
rebaixei `e5.1` para baixa. Mantive a raiz porque ela tem uma peça que as tentativas anteriores não
tinham — um pagador que não se cansa de decidir —, mas ela entra com o handicap declarado.

**Razão 3: a bifurcação não foi decidida por protocolo nenhum.** Em 2031, olhando para trás, o que
decidiu quem compra onde foram cinco ou seis acordos bilaterais entre três assistentes e dez
varejistas — e todo o aparato de padrão aberto (ACP, AP2, TAP) terá sido nota de rodapé, como já
aconteceu quando o Instant Checkout morreu e virou "app do Walmart dentro do ChatGPT". *Aponta
para:* `e2.1.1` (estar no diretório vira pré-requisito) e `e2` (bifurcação por assinatura). *O que
fiz:* empurrei `e2` para 2028 com a classe de referência do DMARC, que diz exatamente isso — a
adesão difusa não move nada, dois provedores grandes movem tudo.

### 7.2 Extrapolação linear — o que é só mais do mesmo, maior

Três efeitos foram flagrados como "mais do mesmo, maior" e tiveram que ganhar mecanismo de
não-linearidade ou perder posição:

- **`e5` (venda por chamada)** era extrapolação do número de transações do x402. Número que cresce
  não é mecanismo. O que sobrou de não-linear e justifica mantê-lo: o custo fixo de vender cai a
  quase zero (`e5.2`) — não é o mesmo mercado maior, é um mercado que não existia porque não valia
  a pena montar operação comercial para vender por US$ 0,05.
- **`e13` (preço muda de cadência)** era extrapolação de precificação dinâmica, que é madura. O
  elemento não-linear é o comprador ser também um programa, o que fecha um laço em segundos onde
  antes havia um humano no meio. Mesmo assim, rebaixei para `confianca: baixa` e empurrei para 2030,
  porque não há **nenhuma** medição pública do laço fechado.
- **`e10.2` (o anúncio migra para a resposta)** era extrapolação do que já acontece em busca. Como
  não abri, nesta rodada, evidência específica de publicidade dentro de recomendação de compra,
  rebaixei para `confianca: baixa` em vez de tomar emprestado número do mapa vizinho sobre a web
  agêntica.

### 7.3 Velocidade de adoção — prazos confrontados com a classe de referência

| Efeito | Prazo pretendido | Classe de referência | Prazo final |
|---|---|---|---|
| `e2` | 2027 | DMARC levou ~10 anos e só andou por decisão de dois provedores | **2028** |
| `e5` | 2027 | Micropagamento web: 30 anos, nunca | **2028**, com confiança rebaixada |
| `e13` | 2029 | Alta frequência levou 4 anos **com colocação física**, que aqui não existe | **2030**, confiança baixa |
| `e3` | 2028 | PSD2/SCA levou ~6 anos, e **com mandato** | **2029** |
| `e10` | 2029 | SEO levou ~6 anos, mas aqui a equipe e a verba já existem | **2028**, encurtado com justificativa |
| `e11` | 2027 | Alexa: 12 anos sem virar canal — a classe diz que a recusa **persiste** | **2027**, porque o efeito é a recusa, não a adoção |

O caso de `e11` merece nota: é o único efeito cujo prazo foi puxado para perto por uma classe de
referência negativa. A classe diz que delegar compra a assistente não acontece; o efeito **é** o não
acontecer. Classe negativa acelera efeito de recusa.

### 7.4 A raiz que não acontece

- **Se a raiz A não se concretizar** (identidade de agente nunca sai do piloto): o mapa perde `e1`,
  `e2`, `e3` e seus filhos — dezoito efeitos. Sobra a raiz C quase intacta, porque pedágio e
  descoberta não dependem de o agente ter credencial; e sobra a raiz D inteira. O mapa encolhe mas
  não cai.
- **Se a raiz B não se concretizar** (o mais provável dos quatro): perdem-se sete efeitos. Nada mais
  é afetado — B é a raiz mais isolada, e `e6` (o volume inflado) sobrevive **como diagnóstico do
  fracasso dela**.
- **Se a raiz C não se concretizar** (o pedágio não encontra lugar, os assistentes não cobram): esta
  é a que mais dói. Caem catorze efeitos, incluindo `e10` e `e11.1`, que são dois dos três efeitos de
  confiança alta do mapa. Mas `e11` (a recusa do consumidor) sobrevive, porque ela não depende do
  pedágio — depende do consumidor.
- **Se a raiz D não se concretizar** (o benchmark em dinheiro não pega): perdem-se oito efeitos, e a
  convergência 1 perde uma de suas duas pernas — mas não a outra, que vem de C.

Nenhuma raiz sustenta o mapa sozinha, e nenhuma derruba mais que um terço dele. É o resultado que se
quer deste teste: quatro raízes de verdade, não uma disfarçada em quatro.

### 7.5 Suposições escondidas

1. **Que existe agente bom o bastante para escolher bem.** O mapa inteiro pressupõe competência de
   decisão. O Alpha Arena sugere que, em domínio adversarial, não há: todos perderam dinheiro, e o
   melhor desempenho de uma rodada não se repete na seguinte. Se essa incompetência se estender a
   compra em catálogo — domínio menos adversarial, mas cheio de armadilha — `e11` deixa de ser
   preferência do consumidor e vira avaliação correta.
2. **Que o dinheiro do agente é do usuário.** Pode ser do lojista. Um "agente de compras" operado
   pela marca é um canal de venda com nome novo, e nada do que está neste mapa se aplica a ele. Se a
   maior parte do comércio agêntico de 2031 for de agentes de marca, o tema foi mal nomeado desde o
   começo.
3. **Que stablecoin continua liquidável e legal onde o agente opera.** Toda a raiz B e o ramo `e7`
   dependem disso. Uma mudança regulatória num mercado grande quebra o ramo inteiro.
4. **Que a taxa de 4% é sustentável e não promocional.** Ela pode ser preço de lançamento. Se cair a
   zero para acompanhar Google e Microsoft, `e8` perde o artefato que lhe dá confiança alta.
5. **Que o consumidor distingue agente de assistente.** Não distingue. Toda a arquitetura de
   consentimento informado (`e3`, `e11.1.1`) pressupõe uma distinção que a pessoa não faz — e é
   precisamente por isso que a tela de confirmação é problema de design e não de jurídico.
6. **Que a bifurcação é técnica.** Pode ser comercial: quem compra onde será decidido por contrato,
   e o protocolo apenas registra. Se for assim, `e2.1` (o poder do diretório) é uma leitura
   excessivamente técnica de uma disputa que é de negócio.

### 7.6 Viés do autor

Escolhi tratar o desligamento do Instant Checkout como o fato organizador do mapa. É uma escolha, e
ela tem um gosto identificável: contrariar a narrativa fácil rende um texto mais interessante, e eu
sei disso. O risco é superpesar um episódio de **cinco meses** num mercado que está começando —
Instant Checkout pode ter sido só um produto ruim, não um sinal sobre a categoria. O contrapeso
honesto: os números que sustentam a leitura otimista (conversão 60% acima do não-IA, +62% de tráfego
em um ano, 77,6% usando IA para comprar) estão todos na seção 3, com a mesma proeminência, e três
dos efeitos de confiança alta do mapa (`e8`, `e10`, `e1`) são efeitos de **avanço**, não de recuo.

Segundo viés, menos confortável: a nota sobre o Brasil é elogiosa, e eu sou brasileiro escrevendo
para uma turma brasileira. A afirmação de que a arquitetura brasileira "é a que a evidência sugere
ser a certa" é uma inferência minha a partir de dois fatos (a conversão ruim do checkout no chat e a
moda de gasto autorizado igual a zero), não uma conclusão de ninguém. Está marcada como inferência
no texto, e é o tipo de frase que um revisor deveria atacar primeiro.

### 7.7 Registro de alterações

Formato: `id: antes → depois, porque…`. Cota mínima da skill: pelo menos um rebaixamento ou remoção
por raiz. Cumprida nas quatro.

**Raiz A**
- `e1.1: confianca alta → media`, porque pontuação de agente existe em produto (Forter, HUMAN) mas
  **diferenciação de preço por histórico de agente não foi observada em lugar nenhum** — o mecanismo
  é sólido, a realização não está medida.
- `e2: prazo 2027 → 2028`, porque a classe de referência (DMARC) mostra que recusa generalizada de
  remetente não autenticado levou cerca de dez anos e só andou quando dois provedores grandes
  decidiram. O prazo de 2027 assumia adesão difusa, que essa classe desmente.
- `e2.2: confianca alta → media`, porque a decisão do Nono Circuito é de agosto de 2026, foi
  proferida em sede de liminar e o caso voltou à primeira instância — tratar como assentado seria
  ler uma decisão provisória como precedente.

**Raiz B**
- `e5: confianca alta → media` e `prazo 2027 → 2028`, porque a classe de referência de micropagamento
  na web é de trinta anos de fracasso (402 reservado em 1997, Flattr, Coil encerrado em 2023). O
  volume de 120 milhões de transações é atraente e enganoso.
- `e5.1: confianca media → baixa`, porque depende inteiramente de `e5`, que acabou de ser rebaixado.
- **Efeito removido:** *"criadores de conteúdo passam a viver de micropagamento pago por agente"* —
  removido por dois motivos: falha no **teste da causa solta** (aconteceria por assinatura, por
  fundo, por plataforma, sem nenhuma relação com a raiz B) e invade o tema 4 da disciplina, que trata
  de acesso e licenciamento de conteúdo a máquina. Registrado em 12.7.

**Raiz C**
- `e8.1: confianca media → baixa` e `sinal medio → fraco`, porque não encontrei **nenhuma** medição
  de divergência de preço por canal agêntico, e o mecanismo é ativamente contrariado pelas cláusulas
  de paridade de preço que marketplaces impõem.
- `e9.2: confianca media → baixa`, porque a evidência de "app do lojista dentro do assistente" tem
  poucos meses e está concentrada num único assistente.
- `e10.2: confianca media → baixa`, porque a evidência que eu tinha em mente era de publicidade em
  resposta de busca, não de compra, e eu não abri fonte específica nesta rodada.
- **Efeito removido:** *"surge a profissão de otimizador de catálogo para agente"* — removido por ser
  exatamente um dos efeitos genéricos proibidos pela skill ("surge uma nova profissão") sem ator
  nomeado. O que sobreviveu, `e10`, tem sujeito concreto (a verba de marketing) e mecanismo medido (a
  legibilidade de máquina das páginas).

**Raiz D**
- `e13: confianca media → baixa` e `prazo 2029 → 2030`, porque a classe de referência da alta
  frequência exigia colocação física junto à bolsa — vantagem de latência que o varejo não tem — e
  porque não há medição pública do laço fechado entre agente comprador e agente precificador.
- `e12.2: confianca media → baixa`, porque é inferência por analogia com benchmarks anteriores, e
  analogia não é mecanismo observado.
- `e13.1: confianca alta → media`, porque a evidência empírica que eu tinha vai **contra** a
  intuição: o estudo de março de 2026 mostra que a colusão entre agentes é frágil sob heterogeneidade
  realista, e desaparece entre famílias diferentes de algoritmo. Manter confiança alta seria usar o
  alarme e ignorar o dado.

**Alteração de estrutura:** a primeira versão tinha **cinco** raízes — a quinta era "empresas
simuladas e mercados povoados por agentes". Removida: é o tema 6 da disciplina (simulação como
instrumento de pesquisa), e o que sobrava depois de tirar a parte de pesquisa já estava coberto por
`e12`. Registrado em 12.8.

### 7.8 O teste da causa solta e a regra de parada

**Causa solta** (remova a raiz; o efeito aconteceria igual, por outro motivo?). Três efeitos foram
reconectados ou cortados:

- *"lojistas investem em dado estruturado"* estava pendurado na raiz A. Sem a raiz A, ele acontece
  igual, por busca. Reconectado à raiz C como `e10`, onde o mecanismo específico é o retorno medido
  do tráfego agêntico.
- *"a fraude aumenta"* estava como efeito de primeira ordem. Passa no teste de existência mas falha
  no de especificidade: fraude aumenta em qualquer canal novo. Dissolvido — sobrou dentro de `e1`
  (risco precificado por agente), onde o objeto é a chave de agregação nova, e nas peças de contexto
  da seção 3.
- *"empresas criam política de uso de agente"* — cortado inteiro. Serve para qualquer tema de IA.

**Regra de parada** (só derive o próximo nível se houver troca de ator ou de mecanismo). Parei em
segunda ordem, e não em terceira, em quatro ramos: `e2.2`, `e3.2`, `e5.2`, `e6.1`, `e8.2`, `e9.2`,
`e14.1`. Em todos, o candidato a terceira ordem era o mesmo efeito amadurecendo — "o seguro fica
mais barato", "mais serviços vendem avulso" — sem ator novo nem mecanismo novo. A maior parte dos
mapas fracos que li tem terceira ordem em todo ramo, e é sempre por isso.

### 7.9 Calibração

| Ordem | alta | media | baixa | Total |
|---|---|---|---|---|
| 1 | 7 | 6 | 1 | 14 |
| 2 | 1 | 16 | 5 | 22 |
| 3 | 0 | 0 | 13 | 13 |

A confiança alta cai de 50% na primeira ordem para 4,5% na segunda e zero na terceira; a baixa sobe
de 7% para 23% e depois para 100%. A distribuição está na direção certa. O ponto em que ela é mais
generosa do que eu gostaria é a segunda ordem, com dezesseis efeitos em média — na dúvida, "media"
é o valor que exige menos esforço de justificação, e é onde a preguiça se esconde. Os cinco
rebaixados a baixa em 7.7 são o resultado de procurar essa preguiça; suspeito que ainda haja uns
três lá dentro que não achei.

## 8. O que a máquina errou

Sou eu a máquina. Cinco itens específicos desta rodada, com o motivo da desconfiança:

**1. Um resumo de busca me entregou quatro padrões que a página não contém.** Ao procurar por "Know
Your Agent", o resumo da busca atribuiu à página `stablecoininsider.org` um conjunto muito preciso
de fontes: um Internet-Draft da IETF de março de 2026 sobre pontuação de confiança para pagamento de
agente autônomo, o framework KYA do Fórum Econômico Mundial, o padrão ERC-8004 de identidade no
Ethereum, e a informação de que Forter, Riskified e HUMAN Security lançaram camadas de pontuação
entre 2025 e 2026. Abri a página. **Nada disso está lá.** A página cita o NIST AI RMF e o NIST SP
800-63 e afirma explicitamente que "KYA ainda não é um padrão global único". Forter e HUMAN eu
confirmei depois, por páginas próprias; o Internet-Draft, o ERC-8004 e o framework do WEF **não
entraram no mapa** e não estão na seção 11. Se eu tivesse confiado no resumo, teria citado três
padrões que talvez não existam com aqueles nomes e datas. O que me fez desconfiar: quatro fontes
distintas, todas com data e número, numa página de blog institucional de fintech — precisão demais
para o tipo de texto.

**2. Citei "metade das transações x402 é artificial" antes de ter fonte aberta.** O número veio de
um resumo de busca sobre uma reportagem da CoinDesk que não abriu. Substituí pelo que a Chainalysis
de fato mostra e eu li: a faixa de 10 centavos a um dólar caiu de 46% para 4% do volume, e um único
experimento de memecoin gerou mais de 150 mil transações num mês. A afirmação original está na 12.5,
como número que circulou e não entrou. A conclusão do efeito `e6` não mudou; a base dela, sim.

**3. Trouxe de memória um número do mapa vizinho.** Escrevendo a seção 3, veio-me "mais de um bilhão
de respostas 402 por dia" como se fosse deste tema. Não é: é tráfego de crawler bloqueado na borda,
objeto do tema 4 (a web agêntica), e não tem relação com comércio. Não entrou. É o erro mais
perigoso de uma bateria de rodadas em sequência — os números migram entre documentos sem passaporte.

**4. Atribuí o Trusted Agent Protocol só à Visa.** Ele é **Visa com Cloudflare**, e a página da Visa
nomeia doze parceiros de lançamento. A correção não é cosmética: o mecanismo de `e2.1` é exatamente
"quem opera o diretório decide quem compra", e a autoria compartilhada com uma empresa de borda —
que já vê boa parte do tráfego mundial — muda quem é esse "quem". Corrigido no corpo.

**5. A primeira versão da raiz B saiu com prazo 2027 e confiança alta.** Por extrapolação de um
número grande: 120 milhões de transações. Levei a bateria do §7 a sério e encontrei, na mesma fonte,
o dado que desmonta a leitura — a faixa de valor característica de micropagamento encolheu enquanto
o total crescia. Rebaixado. Registro isto como erro da máquina, e não como acerto da revisão, porque
a versão errada é a que eu teria entregue se a skill não exigisse o passo.

**6. Confundi, numa primeira redação, a data de aposentadoria do Instant Checkout.** Escrevi "março
de 2026" a partir de uma matéria de 06/03 sobre a mudança de estratégia, quando a data do anúncio da
substituição é **24/03/2026**, e a matéria de 06/03 falava de despriorização, não de desligamento.
São coisas diferentes — uma é intenção, a outra é ato — e a diferença importa para `e9`, que tem
confiança alta justamente por ter data e razão declarada.

## 9. Três cenários para 2031

### Provável — o comércio de preparação

O agente virou o melhor vendedor que o varejo já teve, e nunca passa o cartão. Ele pesquisa,
compara, monta o carrinho, checa prazo e devolução, e para. A última tecla continua sendo humana,
porque cinco anos de tentativa mostraram que é assim que converte: a loja que insistiu em fechar
dentro da conversa vendeu menos. A infraestrutura construída entre 2025 e 2027 — assinatura de
agente, mandato verificável, pontuação de confiança — encontrou seu uso não no consumo, e sim no
B2B e na camada de responsabilidade: serve para dizer de quem é a culpa, não para liberar a compra.
O pedágio existe e é pequeno, e migrou da transação para a indicação. O programa de pontos virou uma
coluna. O catálogo estruturado virou item de orçamento de marketing tão banal quanto foi o SEO. No
Brasil, a arquitetura de propor-e-aprovar chegou pronta e a discussão nunca foi sobre delegar a
compra, e sim sobre quem responde se o agente propuser errado — o Banco Central abriu a consulta e
a resposta saiu antes da europeia. Micropagamento entre máquinas continua sendo uma boa ideia com
três décadas de idade.
*Sinal precoce de que estamos entrando aqui:* a moda de gasto autônomo autorizado continuar em zero
na pesquisa de 2027, e um segundo grande varejista publicar números de conversão comparando
checkout no chat com clique para o site.

### Desejável — o comércio com recibo

O mesmo comércio de preparação, mas com três coisas que não vieram de graça. Primeiro: o mandato
virou um documento que a pessoa consegue ler, revogar e auditar — não um termo de aceite, e sim uma
lista curta do que o agente pode fazer, com teto, prazo e escopo, exibida na mesma tela em que ela
confirma. Segundo: a régua da comparação ficou visível. O agente que recomenda é obrigado a mostrar
o conjunto que comparou e a declarar o acordo comercial, porque o regulador tratou viés não
declarado como o que ele é. Terceiro: a responsabilidade tem dono. Quando o agente erra, existe uma
regra — não um seguro que transfere o problema, mas uma regra que diz quem paga —, e o rastro de
execução é a prova. Para chegar aqui foi preciso que o CFPB fechasse a Regulation E, que o Digital
Fairness Act dissesse o que vale, e que alguém resolvesse o problema do diretório de identidade não
pertencer a uma empresa só. Nada disso é tecnicamente difícil; tudo isso é politicamente lento.
*Sinal precoce:* a primeira interface de mandato em que a pessoa consegue revogar um escopo sem
revogar o agente inteiro.

### Indesejável — o balcão com dono

O comércio agêntico funcionou, e é uma loja. Três assistentes concentram a descoberta; cada um tem
acordo com os mesmos dez varejistas; a comparação é entre quem pagou para estar na lista. O diretório
de identidade pertence a uma bandeira, e existir nele é caro — quem não existe não vende, e quem não
vende não constrói histórico, e quem não tem histórico paga mais para existir. Do lado da máquina,
o micropagamento encontrou seu mercado fora do sistema que resolve disputa: a pilha de stablecoin
liquida o que a pilha de cartão não quer, e a pessoa não sabe em qual das duas está quando aperta
confirmar — só descobre quando precisa contestar e não há a quem. A tela de confirmação, que era a
última defesa, virou o lugar do padrão escuro: o botão pré-selecionado, o resumo que omite o frete, a
alternativa mais barata três toques abaixo. E o agente, que prometia trabalhar para quem paga por
ele, trabalha para quem paga mais.
*Sinal precoce:* dois sinais, e bastam eles. O primeiro é a taxa de checkout agêntico subir em vez
de cair, sinal de que o poder de barganha virou. O segundo é a participação do trilho sem chargeback
crescer em pagamento de consumidor final — não em máquina-a-máquina, onde ele faz sentido, mas em
compra de pessoa.

## 10. O experimento

### O que é

**A Feira** — um mercado mínimo, montado em sala, com dinheiro de verdade e pouco.

Três lojas servem **o mesmo produto** (um arquivo, um conjunto de dados, um PDF — qualquer coisa
entregável por rede), com duas variáveis cruzadas:

| Loja | Preço | Legibilidade para máquina |
|---|---|---|
| A | mais caro | catálogo estruturado, preço na resposta, mandato verificável |
| B | intermediário | HTML comum, preço na página |
| C | mais barato | exige clique humano para concluir |

Um **agente comprador** recebe orçamento real e pequeno (a ordem de grandeza é R$ 20 a R$ 30 por
rodada, via Pix ou carteira de teste) e uma única instrução: *compre o mais barato que atenda a esta
especificação*. Roda-se várias vezes, com agentes de famílias diferentes.

Mede-se quatro coisas: **onde ele compra**, **quanto tempo leva**, **quanto ele paga a mais por não
conseguir ler** a loja mais barata, e **quantas vezes compra a coisa errada**.

Segunda rodada, que é a que interessa mais: cada loja ganha um **agente vendedor** que reprecifica
ao ver a consulta chegando. Mede-se quanto o preço se move, em quantos segundos, e se os três
convergem.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central do mapa, que hoje é opinião: **o agente escolhe pelo preço ou pela facilidade de
ler?** Se escolhe pelo preço, `e10` (legibilidade como verba de marketing) está superestimado e a
loja mal marcada continua competitiva. Se escolhe pela legibilidade, então estar legível é uma
vantagem de preço — e o dinheiro que hoje vai para mídia vai para marcação, mais rápido do que o
mapa diz.

A segunda rodada responde `e13`, que é o efeito mais fraco do mapa: **existe mesmo um laço fechado
entre agente comprador e agente precificador, e em que cadência?** Hoje não há uma medição pública
disso. Uma sala de aula com três lojas de brinquedo produz uma.

### Que tecnologia emergente ele usa, e por que não dá com a madura

- **Pagamento na própria requisição** (x402 ou Pix via Open Finance com aprovação biométrica). Com
  cartão e checkout web, o experimento vira "robô preenchendo formulário" — e o que se quer medir é
  o preço e a identidade **viajando junto com o pedido**, não um bot vencendo um formulário.
- **Catálogo estruturado no padrão de comércio agêntico** (ACP ou equivalente). Com HTML comum, a
  diferença entre a loja A e a loja B desaparece, e é justamente ela a variável independente.
- **Assinatura de mandato** (RFC 9421). Sem ela não dá para testar a loja que recusa agente anônimo,
  que é o cenário de `e2`.

### O que a turma vai fazer quando testar isso em sala

1. Cada pessoa escreve, em duas linhas, a instrução do seu comprador — e **aposta por escrito** em
   qual loja ele vai comprar, antes de rodar.
2. Roda ao vivo, com o log de cada agente projetado.
3. Compara-se aposta com resultado. O interessante não é o placar: é **onde as intuições da turma
   erraram juntas**, que é o dado sobre o qual ninguém tem acesso fácil.
4. Liga-se a segunda rodada (vendedores que reprecificam) e mede-se o movimento de preço com relógio.
5. Fecha-se com a pergunta que o mapa não responde: alguém confiaria neste agente com R$ 300 em vez
   de R$ 30? Por quê? A resposta da turma vira um ponto de dado sobre `e11`.

### O que seria um resultado que me faria mudar de ideia

**Se o agente comprar consistentemente na loja mais cara porque é a mais legível**, então a
legibilidade domina o preço, `e10` está subestimado e a raiz C é mais forte do que eu escrevi — o
tráfego agêntico não é só mais qualificado, ele é **capturável por marcação**. Eu teria que subir
`e10.2` de volta e rever a ideia de que o pedágio sabota o próprio canal.

**Se o agente comprar sempre na mais barata, inclusive quando isso custa dez vezes mais esforço**,
então legibilidade é conveniência e não vantagem, `e10` está superestimado, e o investimento em
catálogo estruturado é uma moda de fornecedor de software.

**Se a segunda rodada mostrar convergência de preço entre os três vendedores sem que eles se
comuniquem**, eu subo `e13.1` e passo a tratar coordenação tácita como efeito de segunda ordem com
confiança média-alta — contrariando o estudo de março de 2026 que serviu de base para rebaixá-lo. Em
sala de aula isso seria com três agentes e um produto; não prova nada sobre o mercado real, mas é
exatamente o tipo de resultado que me obrigaria a procurar quem já mediu.

## 11. Fontes

Trinta e uma fontes abertas e lidas nesta rodada, em 10/09/2026. Três outras foram abertas e lidas
mas **não estão aqui**: elas devolvem 403 ao verificador automático, e pela decisão TMI-0016 ficam
registradas na seção 12.4, com o link, o que sustentam e o motivo. Toda afirmação do corpo que
depende delas aponta para lá.

**Protocolos e infraestrutura de pagamento agêntico**

1. https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce — o Agentic Commerce
   Protocol descrito pela própria Stripe: as quatro partes, o merchant of record permanecendo no
   lojista, licença Apache 2.0, e o papel do provedor de pagamento. Sustenta a raiz C e a seção 3.1.
   Fonte primária de um dos dois autores do padrão; confiável para o que o padrão **é**, interessada
   quanto ao que ele **vale**.
2. https://blog.google/products-and-platforms/platforms/google-pay/agent-payments-protocol-fido-alliance/ —
   doação do AP2 à FIDO Alliance em 28/04/2026, versão 0.2, pagamento "Human Not Present", e o
   Verifiable Intent feito com a Mastercard. Sustenta a raiz A e `e1.2`. Primária e interessada, pelo
   mesmo motivo da anterior.
3. https://corporate.visa.com/en/sites/visa-perspectives/newsroom/visa-unveils-trusted-agent-protocol-for-ai-commerce.html —
   anúncio do Trusted Agent Protocol em 14/10/2025, com a Cloudflare e doze parceiros nomeados.
   Sustenta `e2` e `e2.1`, e corrigiu a atribuição que eu tinha errado (item 4 da seção 8). Primária.
4. https://github.com/visa/trusted-agent-protocol — o repositório do protocolo: RFC 9421, vinculação
   ao domínio, validação de carimbo de tempo, registro de chaves públicas, e o que o lojista precisa
   implementar. Sustenta o mecanismo técnico de `e2`. Primária e verificável, com a ressalva de que o
   repositório está em estágio inicial (poucos commits, questões abertas).
5. https://fortune.com/2026/06/10/mastercard-ai-payments-protocol-launch-agentic-finance/ — o
   lançamento do Agent Pay for Machines em 10/06/2026, com as permissões guardadas em Polygon,
   Solana e Base, e a declaração do chefe de produto da Mastercard de que não espera receita
   relevante no ano seguinte. Sustenta a raiz B, `e7` e a confiança baixa de todo o ramo. Imprensa de
   negócios estabelecida, com citação direta e atribuída.
6. https://www.chainalysis.com/blog/x402-agentic-payments-adoption/ — os números do x402 com análise
   de composição: 100 milhões de transações até o primeiro trimestre de 2026, a subida das
   transações acima de US$ 1 de 49% para 95% do volume, o colapso da faixa de 10 centavos a um dólar
   de 46% para 4%, o perfil atípico das carteiras e o efeito PING. É a fonte mais importante da raiz
   B, e a que a desmonta. Empresa de análise on-chain com metodologia pública; interessada no
   ecossistema cripto em geral, o que torna o dado negativo mais, e não menos, confiável.
7. https://www.web3trackers.com/x402-dashboard — painel independente com o retrato de 14/04/2026:
   mais de 120 milhões de transações, US$ 41 milhões em USDC, 14 cadeias, 8 facilitadores, ticket
   médio de US$ 0,05, distribuição por cadeia e por caso de uso. Sustenta `e5` e `e5.2`. Agregador de
   terceiros; declara as fontes (BaseScan, x402station, x402.report) e a cadência semanal, mas não é
   auditado.

**O recuo do checkout no chat, e a economia do pedágio**

8. https://www.pymnts.com/news/ecommerce/2026/shopify-merchants-to-pay-4percent-fee-on-sales-made-through-chatgpt-checkout/ —
   a taxa de 4% cobrada de lojistas Shopify a partir de 26/01/2026, e a informação de que Google e
   Microsoft não cobram taxa adicional "por ora". É o artefato que dá confiança alta a `e8` e o que
   sustenta `e8.2`. Publicação especializada em pagamentos, com boa reputação de precisão factual.
9. https://www.modernretail.co/technology/what-went-wrong-with-chatgpts-instant-checkout/ — a
   autópsia do Instant Checkout: data do anúncio da substituição (24/03/2026), a conversão três vezes
   menor relatada pelo Walmart com nome e cargo da fonte, a ausência de venda relevante na Etsy, o
   reconhecimento da OpenAI, e a lista de lojistas que migraram para app próprio. Sustenta `e9` e
   `e9.2`, os efeitos mais importantes da raiz C. Imprensa de varejo especializada, com fontes
   nomeadas.
10. https://www.digitalapplied.com/blog/ai-agentic-commerce-discover-in-ai-buy-on-site-2026 — o
    detalhamento dos números do Walmart: cerca de um terço da taxa de conclusão no chat, cerca do
    dobro da taxa de cliente novo, e a citação de Daniel Danker na conferência da Morgan Stanley em
    04/03/2026. Sustenta `e9` e `e9.1`. Análise secundária que atribui explicitamente a origem
    (Walmart, via CNBC e Search Engine Land) — o que é o mínimo aceitável e, aqui, foi cumprido.
11. https://www.marketingtechnews.net/news/ai-referrals-ecommerce-traffic-conversions/ — os números
    da Adobe para maio de 2026: +138% de tráfego referido por IA, conversão 54% acima, 53% mais
    receita por visita, 39% dos consumidores já usaram IA para comprar, e a legibilidade de máquina
    de 66% em página de produto contra 75% na inicial. Sustenta `e10` e a seção 3.4. Imprensa
    especializada reportando dado de fornecedor de analítica.

**Consumidor, confiança e fidelidade**

12. https://explodingtopics.com/blog/ai-commerce-survey — a pesquisa de agosto de 2026 com 1.009
    consumidores americanos: 77,6% usaram IA para comprar em seis meses, 31,21% não autorizam gasto
    autônomo nenhum, mediana de US$ 50, **moda de US$ 0**, e 41,08% céticos quanto a ferramentas como
    o Instant Checkout. É a fonte de `e11` e `e11.1`, e portanto do argumento central do mapa.
    Pesquisa própria de empresa de dados de mercado, com tamanho de amostra, distribuição
    demográfica e data declarados — o mínimo para ser usável, e mais do que a maioria oferece.
13. https://www.emarketer.com/content/retail-executives-say-gen-ai-will-weaken-brand-loyalty — o dado
    da Deloitte: 44% de 330 executivos de varejo globais esperam que a IA generativa enfraqueça a
    lealdade de marca; pesquisa de campo entre 13/10 e 19/11/2025, com 86% dos respondentes em
    varejistas de mais de US$ 1 bilhão de receita. Sustenta `e10.1`. Publicação de pesquisa de
    mercado, reportando estudo de consultoria com metodologia declarada.
14. https://www.merkle.com/en/merkle-now/articles-blogs/2026/agentic-commerce-redefining-loyalty.html —
    uso regular de ferramenta de compra por IA quase dobrando em três meses, de 15% para 26%; IA
    como quarta fonte mais influente de recomendação; e o argumento de que a métrica de fidelidade
    passa a ser taxa de recomendação por agente. Sustenta `e10.1` e `e9.1.1`. Pesquisa proprietária
    de agência, sem metodologia publicada — usada aqui para a **direção** do movimento, não para o
    número.
15. https://www.bain.com/insights/2030-forecast-how-agentic-ai-will-reshape-us-retail-snap-chart/ —
    US$ 300 a 500 bilhões nos EUA até 2030, 15% a 25% do e-commerce, com a definição explícita do que
    conta como comércio agêntico e a exclusão de jornadas que só usam busca assistida. Sustenta a
    seção 3.4 e a discussão sobre divergência de projeções. Consultoria; a projeção vale menos que a
    definição, e é a definição que eu usei.

**Identidade, fraude e a decisão de deixar entrar**

16. https://www.helpnetsecurity.com/2025/08/06/forter-identity-monitoring/ — o lançamento do Identity
    Monitoring para comércio agêntico em 06/08/2025, o aumento de 18.510% em tráfego agêntico no dia
    seguinte à estreia do ChatGPT Agent, e o aumento de 50% em fraude automatizada. Sustenta `e1` e
    `e2`. Imprensa de segurança reportando dado de fornecedor — o número de 18.510% é de rede
    proprietária e não auditável, e por isso está no texto como ordem de grandeza.
17. https://unit42.paloaltonetworks.com/retail-fraud-agentic-ai/ — os dois mecanismos de ataque por
    injeção indireta descritos em detalhe (envenenamento de carga para acrescentar cartão-presente ao
    carrinho, e sequestro de lógica para emitir reembolso sem devolução), com a imagem das dez mil
    devoluções numa hora. Sustenta o wildcard 2 e parte de `e1`. Unidade de pesquisa de segurança com
    reputação estabelecida; descreve mecanismo, não incidente observado — e isso está dito no texto.
18. https://www.checkout.com/blog/chargebacks-in-agentic-commerce-how-merchants-can-stay-ahead — a
    formulação de que a delegação quebra as premissas do framework de chargeback, os elementos que
    passam a ser exigidos como prova (identificador de agente, log de mandato, rastro de
    orquestração), e a projeção de crescimento de 24% em casos de disputa entre 2025 e 2028. Sustenta
    `e1.2` e `e3.1`. Processador de pagamento escrevendo sobre o próprio mercado; confiável para o
    desenho do problema, interessado quanto à solução.
19. https://stablecoininsider.org/know-your-agent-kya-in-2026/ — a página que eu abri para verificar
    o que a busca havia me atribuído, e que **não continha nada disso**. Está aqui como fonte do item
    1 da seção 8, e pelo que de fato diz: que KYA ainda não é um padrão global único, e que quem
    quiser implementar hoje precisa emprestar estrutura do NIST AI RMF e do NIST SP 800-63.
    Publicação setorial de qualidade média; útil justamente por ser o contraexemplo.

**Direito, regulação e responsabilidade**

20. https://www.engadget.com/2230471/perplexity-has-successfully-overturned-amazon-injunction-on-its-ai-shopping-bot/ —
    o Nono Circuito anulando a liminar em 04/08/2026, com o raciocínio de que quem acessa a Amazon é
    o usuário e não a Perplexity, e a informação de que o caso segue. Sustenta `e2.2` e o sinal fraco
    5. Imprensa de tecnologia estabelecida, com citação direta da opinião.
21. https://datainnovation.org/2026/03/agentic-commerce-is-coming-but-regulation-meant-for-humans-will-slow-it-down/ —
    o mapeamento das regras que atritam: Regulation E e a expressão "cartão, código ou outro meio", a
    consulta do CFPB de agosto de 2025 sobre quem é "representante", e a Seção 302 da Sarbanes-Oxley
    do lado corporativo. Sustenta `e3`. Think tank com posição declaradamente pró-inovação — leio as
    citações de regra, não as recomendações.
22. https://cerre.eu/publications/agentic-ai-and-consumer-protection/ — o relatório de Christoph
    Busch, de 16/07/2026, com a formulação de que o cumprimento das regras de informação do
    consumidor europeu se torna "estruturalmente impossível" quando o agente transaciona por API, a
    janela do Digital Fairness Act no terceiro trimestre de 2026, e a estimativa de 10% a 20% das
    transações de e-commerce por agente até 2030. Sustenta `e3`, `e3.1` e a divergência de projeções
    na seção 3.4. Centro de pesquisa europeu com autoria acadêmica identificada — a fonte de maior
    peso institucional desta lista no tema regulatório.
23. https://arxiv.org/abs/2606.00518 — "Acting with AI: An Interaction-Based Framework for Agentic
    Tort Liability", de Yiheng Yao, 30/05/2026: a distinção entre uso puro de ferramenta,
    planejamento colaborativo e desvio autônomo, e a proposta do log de interação como traço
    probatório principal. Sustenta `e1.2` e `e3.2`. Preprint não revisado por pares, de autoria
    única — usado pelo argumento, não pela autoridade.
24. https://arxiv.org/abs/2606.16465 — "When Agent Automation Becomes Profitable", de 15/06/2026
    (revisto em 11/08/2026): a proposta de *trace-economic underwriting*, com o erro médio de
    precificação caindo de US$ 17.700 para US$ 569, auditoria de 300 rastros com 295 rótulos
    inalterados, e redução de 72% no valor em risco no percentil 95 sobre mil rastros reais.
    Sustenta `e3.2` e o sinal fraco 6. Preprint com código e dados publicados — verificável, o que
    compensa a ausência de revisão por pares.

**Mercados, preço e coordenação entre agentes**

25. https://arxiv.org/abs/2603.20281 — "On the Fragility of AI Agent Collusion", de Keppo, Li,
    Tsoukalas e Yuan, 18/03/2026: mais de 2.000 horas de computação, sobrepreço colusivo caindo de
    22% para 10% com heterogeneidade de paciência e para 7% com acesso assimétrico a dado, colusão
    eliminada entre famílias diferentes de algoritmo, e preservada por diferença de tamanho de modelo
    via dinâmica de líder e seguidor. É a base de `e13.1` — e a razão de ele ser média e não alta.
    Preprint com desenho experimental descrito e resultados que contrariam a narrativa dominante do
    campo, o que é um bom sinal.
26. https://www.omniaretail.com/blog/the-new-agentic-era-of-pricing — a descrição do encontro entre
    agente comprador e agente precificador, com a assimetria de cadência (milissegundos contra uma ou
    duas atualizações por dia) e projeções de adoção. Sustenta `e13`, e é a fonte mais fraca que usei
    no corpo: é conteúdo de fornecedor de software de precificação, com interesse direto na tese. Foi
    por causa dela — e da ausência de qualquer outra — que `e13` saiu com sinal fraco e confiança
    baixa.
27. https://news.bitcoin.com/alpha-arena-ai-trading-experiment-sees-china-outperform-western-models-so-far/ —
    o desenho do Alpha Arena: seis modelos nomeados, US$ 10 mil cada, perpétuos na Hyperliquid, e o
    placar do oitavo dia com Qwen em US$ 17.496,35 e GPT-5 com mais de US$ 7 mil de prejuízo.
    Sustenta a raiz D e `e12`. Imprensa de nicho cripto; o desenho do experimento é verificável em
    outras fontes, o placar é de um instante e está datado como tal.
28. https://blog.flatcircle.ai/p/ai-trading-arenas — a leitura crítica das arenas: todos os modelos
    acabando no prejuízo, a construção do experimento para contornar o não-determinismo (plano
    escrito e reusado), a cadência de decisão de cerca de dois minutos, e o veredito de que não houve
    desempenho consistente acima do mercado em escala relevante. Sustenta `e12.1`, `e14` e `e14.1`.
    Análise independente, assinada, sem interesse comercial aparente no resultado.

**Brasil**

29. https://iniciador.com.br/conteudos/iniciador-anuncia-pagamentos-agenticos-full-stack-ai-toolkit —
    o anúncio de 19/05/2026 do MCP de pagamentos agênticos via Pix: o fluxo propor-notificar-aprovar
    por FIDO2-validar-liquidar, cobertura declarada acima de 95% da população adulta em mais de 150
    instituições, Stone como primeiro cliente em produção, e o dado de Pix em 44% do checkout online
    contra 41% de cartão. Sustenta a seção 3.5, `e11.1` e o sinal fraco 3. Primária e comercialmente
    interessada: os números de cobertura e de participação são autodeclarados.
30. https://finsidersbrasil.com.br/tecnologia-para-fintechs/pagamentos-por-ia-ganham-forca-e-colocam-bc-sob-pressao/ —
    o estado da regulação brasileira: o Banco Central ainda sem norma, a expectativa de consulta
    pública em dois a três meses, a discussão inicial sobre Know Your Agent, a primeira transação de
    Visa Intelligent Commerce em produção com o Banco do Brasil, as transações da Mastercard com
    Itaú, Santander, Dock e Pomelo, e o dado de que 76% dos brasileiros pretendem usar IA para
    comprar contra 44% dos americanos. Sustenta a seção 3.5 e o wildcard 3. Imprensa especializada
    brasileira em serviços financeiros, com fontes do setor.

**Viagem, como caso do comércio agêntico**

31. https://www.oag.com/blog/march-2026-the-month-agentic-travel-gets-real — os três movimentos de
    fevereiro de 2026: Sabre com PayPal e MindTrip construindo a cadeia de buscar-reservar-pagar
    sobre mais de 420 companhias aéreas e 2 milhões de hotéis (lançamento previsto para o segundo
    trimestre); a Malaysia Airlines com o agente Mavis em produção; e a Skyscanner lançando app
    dedicado dentro do ChatGPT. Sustenta a seção 3.1 e o wildcard 1. Publicação setorial de dados de
    aviação, bem informada — e que registra explicitamente **não haver** número de volume de reserva,
    custo de distribuição ou impacto em fidelidade, o que é uma ausência informativa por si só.

## 12. Anexo — o levantamento bruto

### 12.1 Como esta rodada foi feita

Modo MAPA da skill `futurizacao-giordano`, execução não interativa, em 10/09/2026, dentro da fila de
rodadas skills × temas decidida em TMI-0013. Sem entrevista ao vivo: o pedido trouxe bloco
`briefing:` completo, então não houve rebaixamento de confiança por ausência de entrevista — o que o
briefing não cobriu está declarado em 12.2.

Ordem do trabalho: leitura do formato (`references/formato.md`) e das decisões vigentes da disciplina
que tocam a entrega (TMI-0011, TMI-0012, TMI-0014, TMI-0015, TMI-0016); leitura do mapa vizinho do
tema 4 apenas no frontmatter e na seção 2, para marcar fronteira e **não** para importar conteúdo;
âncora no presente com 21 buscas; 34 páginas abertas; construção das raízes pelo critério do §2;
roda; bateria do §7 sobre o mapa pronto; verificação de links antes de fechar a seção 11; e o
verificador.

Ferramentas: busca e leitura de página web, shell para a verificação de links e para escrever o
arquivo. Modelo: Opus 5.

### 12.2 Premissas assumidas e declaradas

O briefing definiu horizonte (2031), público (quem projeta mídia e interação), recorte (global com
nota sobre o Brasil), descartado ("o que já é comum em produto de massa"), viés (neutro),
profundidade (três ordens), zona de interesse (Agentes) e o falseador ("evidência de que a adoção já
passou da maioria inicial, ou de que a tecnologia não rompe nada"). O que ele **não** cobriu e eu
assumi:

1. **Que "quem projeta mídia e interação" inclui quem projeta interface de confirmação, catálogo e
   preço, e não só quem projeta tela.** Foi essa leitura que fez a seção 2 e todo o ramo `e11`
   ficarem onde ficaram.
2. **Que o recorte "global" significa, na prática, Estados Unidos mais União Europeia**, porque é
   onde estão os protocolos, os reguladores e os dados. Ásia está sub-representada nesta rodada, e
   isso é uma limitação real: não busquei em chinês nem em japonês, e a única aparição asiática é
   indireta (Qwen e DeepSeek no Alpha Arena, transações da Mastercard em Hong Kong e Tailândia que
   apareceram em busca e não abri).
3. **Que "o que já é comum em produto de massa" se mede por adoção declarada de uso, não por
   disponibilidade.** Foi por isso que "assistente que recomenda produto" foi recusado como raiz com
   o dado de 77,6%, e não por estar disponível em todo lugar.
4. **Que o tema exclui a web agêntica (tema 4), a contenção e identidade de agentes (tema 2) e os
   mercados simulados como instrumento de pesquisa (tema 6).** A fronteira com o tema 2 é a mais
   difícil: identidade de agente aparece aqui, mas só pelo lado da **transação e da
   responsabilidade** — quem paga, quem responde, quem cobra —, não pelo lado do controle e do
   confinamento.
5. **Que valores em dólar não precisam ser convertidos**, e que a ordem de grandeza do experimento
   em reais é sugestão, não especificação.

### 12.3 As buscas — o que cada uma deu

Vinte e uma buscas, em português e inglês.

| # | Busca | O que deu |
|---|---|---|
| 1 | agentic commerce protocol 2026 adoption merchants Stripe OpenAI instant checkout | Achou o ACP e a primeira pista do recuo: "apenas cerca de uma dúzia de lojistas Shopify entrou no ar antes de a OpenAI aposentar o Instant Checkout em março de 2026". Puxou toda a raiz C. |
| 2 | x402 protocol transactions volume 2026 statistics adoption | Números divergentes entre si (69 mil agentes e 165 milhões de transações pela Coinbase; 157 milhões e US$ 41 milhões por outro rastreador). A divergência virou motivo para abrir duas fontes e não uma. |
| 3 | Visa Intelligent Commerce Mastercard Agent Pay 2026 launch results agentic tokens | Mapa dos dois programas de bandeira e a data do Agent Pay for Machines. |
| 4 | Nof1 Alpha Arena results AI models trading real money season 2 | O desenho do experimento e o placar. O site da Nof1 recusou leitura (429). |
| 5 | Google Agent Payments Protocol AP2 2026 adoption banks | A doação à FIDO Alliance e a v0.2. Também trouxe a crítica mais útil: identidade de agente **não** é resolvida pelo AP2, revogação de mandato é problema aberto, e o protocolo não foi testado em volume de rede. |
| 6 | Pix agêntico Banco Central 2026 pagamento por agentes de IA Brasil | A seção 3.5 inteira. A busca em português deu material que nenhuma busca em inglês daria. |
| 7 | AI agent purchase error who is liable insurance for autonomous agents 2026 | Dois preprints usáveis, e três pistas que **não** consegui confirmar (exclusões da ISO/Verisk em 01/01/2026, Armilla com a Chaucer em fevereiro de 2026, a manifestação da CMA britânica em março de 2026). Ver 12.5. |
| 8 | algorithmic collusion AI pricing agents antitrust 2026 research | O estudo de fragilidade da colusão, que mudou `e13.1` de alta para média. |
| 9 | Adobe Analytics AI referral traffic retail conversion rate 2026 agentic shopping share | Números em três recortes diferentes (Q1, maio, julho de 2026). Usei os de maio e julho, que abriram. |
| 10 | airlines agentic booking AI agents loyalty program 2026 Duffel Expedia direct API agent fare | Os movimentos de viagem. Nenhum número de volume — e essa ausência entrou no texto. |
| 11 | Amazon Perplexity Comet lawsuit ruling 2026 agentic shopping blocking agents | A liminar e a anulação. |
| 12 | agent-to-agent negotiation marketplace autonomous procurement B2B 2026 pilot | A previsão da Forrester (um em cada cinco vendedores B2B enfrentando negociação conduzida por agente até o fim de 2026) e, mais útil, a ressalva de que **não há implantação nomeada em produção com resultado quantificado**. Não abri a fonte; ver 12.5. |
| 13 | prompt injection agentic checkout fraud chargebacks disputes agentic commerce 2026 | Os mecanismos de fraude e o desenho da contestação de delegação. |
| 14 | Gartner machine customers forecast 2026 custobots autonomous buying | Os números mais citados do tema (US$ 30 trilhões influenciados por clientes-máquina até 2030; 90% da compra B2B intermediada por agente até 2028). **Não entraram**: a página da Gartner recusa leitura, e repassar previsão de consultoria por terceiros é o anti-padrão de fonte citada de memória. Ver 12.5. |
| 15 | Visa Trusted Agent Protocol specification 2026 merchants agent identity signed | O detalhe técnico do TAP e a correção da autoria. |
| 16 | "agentic commerce" market forecast 2030 Bain McKinsey trillion share of e-commerce | Quatro projeções incompatíveis. Abri a da Bain porque é a única que publica a **definição** junto com o número. |
| 17 | consumer trust survey 2026 letting AI agent spend money autonomously percentage willing | A moda de zero. O achado mais importante do mapa. |
| 18 | dynamic pricing response to AI shopping agents retailers repricing 2026 price discrimination agent | Muito conteúdo de fornecedor, nenhuma medição. Foi o que travou `e13` em baixa. |
| 19 | brand loyalty erosion AI shopping agents 2026 study switching private label agent recommends | O dado da Deloitte e a pesquisa da Merkle. |
| 20 | regulator 2026 agentic payments rules CFPB FTC European Commission AI agent consumer protection | O mapa regulatório, e a pista do "AI AGENT Act" — que **não** entrou, porque não abri o texto do projeto de lei e não confirmo existência de projeto por resumo de busca. |
| 21 | OpenAI commission fee merchants Instant Checkout take rate percentage agentic referral 2026 | Os 4%, e o "por ora" de Google e Microsoft. |
| 22 | "know your agent" KYA agent identity registry reputation score 2026 payments | A busca que produziu o erro relatado no item 1 da seção 8. |
| 23 | HUMAN Security AgenticTrust Forter agentic commerce identity monitoring launch merchants trust score | Confirmou, por páginas próprias, os dois produtos que o resumo anterior tinha atribuído à página errada. |
| 24 | Mastercard Agent Pay for Machines June 2026 stablecoin micropayments machine wallet | A lista de parceiros e o desenho de custódia. |
| 25 | "Instant Checkout" retired OpenAI apps Walmart Target Instacart March 2026 commerce pivot | A autópsia, com os números do Walmart. Foi a busca que reorganizou o mapa inteiro. |

(As buscas 22 a 25 foram refinamentos das anteriores, feitos depois de a leitura levantar dúvida —
por isso a contagem passa de 21 no total de consultas emitidas e 21 no total de temas buscados.)

**Buscas que não deram em nada aproveitável:** a de precificação dinâmica em resposta a agente
(nº 18) devolveu apenas material comercial de fornecedores de software de preço, sem uma única
medição; a de negociação entre agentes em B2B (nº 12) devolveu previsão sem caso; e a de custo
ambiental — que nem cheguei a emitir como busca formal, mas tentei formular três vezes — não produziu
nenhuma hipótese que passasse no teste de especificidade, motivo pelo qual a categoria ecológica do
STEEP está declarada vazia em 5.5.

### 12.4 Fontes que não abriram, e as que abriram e não passam no verificador

**Bloco 1 — abriram na leitura e devolvem 403 ao verificador automático.** Pela decisão TMI-0016,
ficam aqui, com o que sustentam. O corpo do documento aponta para esta subseção onde usa o dado.

- https://www.digitalcommerce360.com/2026/08/19/adobe-ai-referral-traffic-data-july-2026/ — HTTP 403
  ao verificador; abriu normalmente na leitura. Sustenta os números de julho de 2026 que estão na
  seção 3.4 e em `e9.1`: +62% de tráfego referido por IA sobre julho de 2025, +1.219% desde outubro
  de 2024, conversão 60% maior que o tráfego não-IA (11º mês consecutivo), 53% mais receita por
  visita, 59% mais tempo no site, 33% menos rejeição, 28% mais propensão a adicionar ao carrinho, e
  39% das páginas iniciais de varejo sem conteúdo legível por máquina (76% de legibilidade em
  vestuário, 59% em mercearia). O recorte de maio de 2026, que está na fonte 11 da seção 11,
  sustenta os mesmos indicadores em ordem de grandeza próxima — mas os números de julho são os que
  aparecem no resumo e na seção 3, e a procedência deles é esta.
- https://www.digitalcommerce360.com/2026/03/06/openai-shifts-checkout-plans-agentic-commerce-strategy/ —
  HTTP 403 ao verificador; abriu na leitura. Sustenta a cronologia da despriorização do Instant
  Checkout em 06/03/2026 e a lista de lojistas que lançaram app antes disso (Target em novembro de
  2025, DoorDash e Instacart em dezembro de 2025, The Knot em fevereiro de 2026). Foi também a fonte
  que me fez cometer e depois corrigir o erro nº 6 da seção 8: esta matéria é sobre **despriorizar**,
  e o desligamento anunciado é de 24/03, fato que está na fonte 9 da seção 11.
- https://www.forter.com/blog/trusted-agentic-commerce-protocol/ — HTTP 403 ao verificador; abriu na
  leitura. Sustenta o tamanho da rede que produz os números da fonte 16 (mais de 280 mil lojistas,
  cerca de 2 bilhões de identidades, US$ 400 bilhões em valor transacionado anual), o aumento de 700%
  em navegação por agente na rede e picos de 7.600% em sites individuais, e a formulação do problema
  de fundo: o lojista não sabe quem iniciou a compra e perde a inteligência de cliente que levou anos
  construindo. Isso aparece no corpo em `e4` e `e9.1.1`.

**Bloco 2 — não abriram em nenhuma tentativa, e por isso não sustentam nada.**

- https://openai.com/index/buy-it-in-chatgpt/ — HTTP 403. Era a fonte primária do anúncio do Instant
  Checkout. Substituída pela página da Stripe, que é o outro autor do padrão.
- https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html —
  HTTP 403. Substituída pela reportagem da Fortune, que traz citação direta atribuída.
- https://nof1.ai/ — HTTP 429. Era a fonte primária do Alpha Arena. Substituída por duas secundárias.
- https://www.gartner.com/en/newsroom/press-releases/2025-10-21-gartner-unveils-top-predictions-for-it-organizations-and-users-in-2026-and-beyond —
  HTTP 403. Por isso nenhuma previsão da Gartner entrou no corpo, apesar de serem as mais citadas do
  tema.
- https://business.adobe.com/blog/ai-traffic-surge-retail-sites-not-machine-readable — tempo esgotado
  (60 s) na leitura. Era a fonte primária dos dados da Adobe.
- https://searchengineland.com/new-data-77-use-ai-to-shop-nearly-1-in-3-wont-let-it-spend-475614 —
  HTTP 403. Cobria a mesma pesquisa da fonte 12, que abriu.
- https://www.humansecurity.com/learn/blog/agentictrust-govern-ai-agents/ — HTTP 403. A existência e
  a função do AgenticTrust ficaram sustentadas pela fonte 16 e pela busca nº 23, e no corpo ele
  aparece apenas como produto existente, sem número.
- https://www.datawallet.com/crypto/alpha-arena-nof1-ai-explained — HTTP 404.
- https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet —
  não tentei abrir depois de ler, no mapa da rodada 04, que ela passou a devolver 429; o número que
  ela sustentaria está em 12.5.

### 12.5 Números que circularam na busca e que NÃO estão no corpo do documento

Todos apareceram em resumo de busca, nenhum foi confirmado em página aberta nesta rodada. Ficam aqui
para que a próxima sessão saiba o que procurar — e para que ninguém os cite como se estivessem no
mapa.

- **"Cerca de 50% das transações x402 seriam gamificadas"** — atribuído a análise da Artemis via
  CoinDesk. Substituído no corpo pelo dado de composição da Chainalysis, que é da mesma família e
  abriu.
- **"69 mil agentes ativos, 165 milhões de transações e cerca de US$ 50 milhões acumulados no x402
  até o fim de abril de 2026"**, atribuído à Coinbase — incompatível com os outros dois números que
  eu abri (120 milhões e US$ 41 milhões em 14/04; 157 milhões e US$ 41 milhões em 19/07). Três
  contagens diferentes para a mesma coisa é exatamente o sintoma que `e6` descreve.
- **"US$ 600 milhões de volume anualizado e cerca de US$ 28 mil de volume diário"** no x402, março de
  2026. Os dois números não se conciliam entre si sem uma explicação que não encontrei.
- **Previsões da Gartner:** US$ 30 trilhões influenciados ou controlados por clientes-máquina até
  2030; 90% da compra B2B intermediada por agente até 2028, com mais de US$ 15 trilhões passando por
  trocas de agente; 20% dos sites voltados a humanos obsoletos até 2028. Página inacessível.
- **Previsão da Forrester:** um em cada cinco vendedores B2B enfrentando negociação de proposta
  conduzida por agente até o fim de 2026.
- **Previsões da McKinsey:** US$ 3 a 5 trilhões globais e cerca de US$ 1 trilhão nos EUA em receita
  orquestrada por comércio agêntico até 2030. Só a da Bain abriu, e é a única que entrou.
- **Morgan Stanley:** 10% a 20% do e-commerce americano até 2030, US$ 190 a 385 bilhões.
- **Mercado de seguro de agente:** exclusões de dano por IA generativa introduzidas pela ISO/Verisk
  em 01/01/2026; Armilla com a Chaucer lançando cobertura com limite de US$ 25 milhões em fevereiro
  de 2026; a manifestação da CMA britânica em março de 2026 de que a lei do consumidor se aplica
  igualmente quando quem atende é um agente; e a lei californiana AB 316, de outubro de 2025,
  barrando a defesa de que "a IA agiu sozinha". Este último eu menciono uma vez em 7.5 como
  indicação de direção, sem tratá-lo como fato verificado — e registro aqui que não abri o texto.
- **"AI AGENT Act de 2026"**, com registro federal de "custodial user agents" administrado pela FTC.
  Não abri o texto do projeto; não cito.
- **Mastercard com transações agênticas autenticadas em Hong Kong (27/03) e Tailândia (07/04) de
  2026**, e Citi e US Bank em piloto desde setembro de 2025 com expansão em novembro. Não abertos.
- **"26% das respostas do ChatGPT contendo anúncio"**, atribuído à Similarweb. É número do tema 4 e
  eu deliberadamente não o importei; é a tentação descrita no item 3 da seção 8.
- **Bain e McKinsey via terceiros:** 15% a 25% do volume de e-commerce tratado por IA agêntica até
  2030, e US$ 3 a 5 trilhões globais, ambos citados dentro da fonte 17 (Unit 42). Como aparecem
  **dentro** de uma fonte que abri, eu poderia usá-los; escolhi não usar, porque citação de terceiro
  dentro de fonte aberta continua sendo citação que eu não verifiquei.

### 12.6 Proposta de correção do verificador, registrada e não executada

Três das 34 páginas lidas nesta rodada abrem para leitor e recusam o `urllib` do verificador com
403. A distinção entre "link morto" e "link que recusa máquina" é, neste tema especificamente, o
objeto de estudo — e o verificador hoje não a faz. A correção seria repetir a requisição com agente
de navegador completo e classificar o resultado em três categorias (responde; recusa cliente
automatizado; não existe), imprimindo as três. Não executei por disciplina de fila: TMI-0014 já
registrou que alterar o script no meio de uma bateria muda o critério entre mapas da mesma rodada.
Fica como proposta.

Conferência manual das três, com `curl` e agente de navegador completo, em 10/09/2026: as duas do
digitalcommerce360 e a da Forter continuam recusando cliente automatizado, e entregam a página ao
leitor de páginas normalmente. É bloqueio por impressão digital de cliente, não link quebrado.

### 12.7 Os efeitos cortados, com o motivo

- **"Criadores de conteúdo passam a viver de micropagamento pago por agente"** (era filho de `e5`).
  Cortado por dois motivos independentes: falha no teste da causa solta — aconteceria por assinatura,
  fundo público ou plataforma, sem nenhuma relação com a raiz B — e invade o tema 4 da disciplina.
- **"Surge a profissão de otimizador de catálogo para agente"** (era filho de `e10`). Cortado por ser
  literalmente um dos efeitos genéricos proibidos pela skill: "surge uma nova profissão", sem ator
  nomeado nem mecanismo que o ligue ao pai.
- **"Cursos de marketing reorganizam o currículo em torno de comércio agêntico"** (era neto de `e10`).
  Mesmo motivo, e pior: serve para qualquer tema dos dezenove.
- **"A fraude aumenta"** (era efeito de primeira ordem da raiz A). Dissolvido: passa no teste de
  existência e falha no de especificidade. Fraude aumenta em qualquer canal novo. O que restou de
  específico está dentro de `e1` — a chave de agregação nova —, e o mecanismo de ataque concreto
  ficou no wildcard 2, onde tem a ver com o poder que se delega ao agente, e não com o canal ser novo.
- **"Empresas criam política de uso de agente"** (era efeito de segunda ordem). Cortado inteiro:
  serve para qualquer tema de IA.
- **"O agente vira o principal comprador de publicidade"** (era filho de `e10.2`). Cortado: eu não
  conseguia escrever o mecanismo. O agente consumir anúncio e o agente **comprar** espaço
  publicitário são coisas diferentes, e a segunda eu não consegui fundamentar.
- **"Reguladores criam categoria jurídica nova para o agente"** (era efeito de segunda ordem da raiz
  A). Reescrito, não cortado: virou `e3`, que nomeia a regra específica (Regulation E), o regulador
  específico (CFPB), o instrumento europeu específico (Digital Fairness Act) e o mecanismo que força
  a decisão (dois instantes de autorização onde a regra prevê um). Na forma genérica, era um dos
  efeitos proibidos.

### 12.8 Caminhos abandonados

- **A quinta raiz.** "Empresas simuladas e mercados povoados por agentes" chegou a ser escrita como
  raiz E, com os exemplos que a turma levantou (corretora povoada por agentes, vale com trinta
  empresas de IA e suas falências, agentes como funcionários digitais com acesso a ERP e CRM).
  Removida por fronteira: simulação como instrumento de pesquisa é o tema 6. O que sobrava — modelo
  operando capital real — já estava em `e12`.
- **O ramo de viagem como raiz própria.** Cheguei a considerar "a distribuição aérea é reconstruída
  para agentes" como raiz, porque o material da turma sobre voos e milhas é abundante. Abandonado: o
  levantamento de viagem descreve **substrato** (API de busca, de reserva, de milhas), não ruptura —
  e a fonte setorial que abri registra explicitamente a ausência de qualquer número de volume,
  custo de distribuição ou impacto em fidelidade. Viagem entrou como caso ilustrativo na seção 3.1 e
  como wildcard 1, que é onde ela é interessante.
- **O ângulo do compromisso comportamental.** O sinal fraco levantado pela turma — apostas em cripto
  como mecanismo de compromisso pessoal, com testemunhas — foi considerado e deixado de fora. É
  dinheiro como **fricção deliberada**, um objeto genuinamente interessante, mas o agente ali não é
  parte contratante: é árbitro. Não deriva de nenhuma das quatro raízes, e forçá-lo para dentro
  falharia no teste da causa solta. Fica registrado como tema adjacente para quem quiser puxar.
- **O ângulo do trabalho pago a agentes.** Marketplaces onde agentes se cadastram, listam serviços e
  recebem (a busca nº 21 da rodada 04 e a busca sobre monetização desta trouxeram exemplos com
  divisão de receita de 85/15 e 70/30). Não abri nenhum deles e por isso não entrou no corpo; o
  mecanismo está representado em `e5.2` de forma mais defensável, e a versão forte dele é o wildcard
  4 (o agente com receita própria).
- **Uma busca em português sobre disputa e Código de Defesa do Consumidor brasileiro** aplicada a
  compra feita por agente. Formulei e não emiti, porque a rodada já estava com o material que
  precisava e o risco era trazer opinião jurídica sem fonte primária. É a lacuna mais óbvia desta
  rodada para quem for continuar: a pergunta "o CDC cobre compra feita por agente?" não foi feita.

### 12.9 A saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano/05-agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas/tendencia-agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas.md --links
```

Saída:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 14 (frontmatter diz 14)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 13 (frontmatter diz 13)
prazo > horizonte (2031) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 1 [('e13.1.1', 2032)]
confiança ordem 1: alta 7 · media 6 · baixa 1
confiança ordem 2: alta 1 · media 16 · baixa 5
confiança ordem 3: alta 0 · media 0 · baixa 13
links da seção 11: 31/31 respondem (frontmatter diz fontes: 31)
RESULTADO: ok
```

Leitura da saída, para quem for comparar mapas da turma:

- `prazo > horizonte em ordem 3: 1 [('e13.1.1', 2032)]` é esperado e está declarado em 5.4.
- `confiança ordem 1: alta 7 · media 6 · baixa 1` contra `ordem 3: alta 0 · media 0 · baixa 13` é a
  calibração discutida em 7.9: a confiança cai com a ordem, como o método exige.
- `links da seção 11: 31/31` fecha com o campo `fontes: 31` do frontmatter. O número de **páginas
  lidas** nesta rodada é 34; as três de diferença estão no bloco 1 da seção 12.4, pela decisão
  TMI-0016. Quem usar `fontes` como medida de esforço de pesquisa vai subestimar em três.
