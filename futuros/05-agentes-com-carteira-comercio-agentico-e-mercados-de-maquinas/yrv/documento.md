---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: yrv
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 10
efeitos_ordem_2: 16
efeitos_ordem_3: 14
tecnologias_citadas: [Agentic Commerce Protocol, Shared Payment Token, AP2, Verifiable Intent, FIDO Alliance, x402, HTTP 402, x402 Foundation, USDC, Base, Solana, Tempo, Machine Payments Protocol, Stripe deposit address, Visa Intelligent Commerce, Visa Trusted Agent Protocol, Mastercard Agent Pay, Agentic Tokens, Amex Agent Purchase Protection, KYAPay, Know Your Agent, Model Context Protocol, Pix, Pix Automático, Pix Biometria, Open Finance, FIDO2, NDC, Amadeus Advanced Airline Profile, Duffel, Hyperliquid, Alpha Arena, Project Vend, Project Deal, Computer Fraud and Abuse Act]
fontes: 24
confianca: media
experimento: "Alçada — duas pessoas recebem o mesmo orçamento real e a mesma tarefa de compra, uma representada por um agente forte e a outra por um agente fraco, negociando contra o mesmo vendedor; mede-se a diferença de preço obtida, o tempo gasto, e se as duas percebem que pagaram valores diferentes"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

Um agente que pode pagar não é um agente que lê com um botão a mais. Pagar é o ato em que a
máquina deixa de recomendar e passa a **obrigar** — alguém entrega, alguém cobra, alguém
responde. Este mapa sustenta que a travessia dessa fronteira produz quatro rupturas distintas,
e que só uma delas é sobre compra.

A primeira é jurídica antes de ser técnica: o agente vira **parte contratante**, e a
autorização se separa do ato. O AP2 representa cada compra como três documentos assinados —
intenção, carrinho e pagamento — e foi doado por Google à FIDO Alliance em **28 de abril de
2026**, junto com o *Verifiable Intent*, feito com a Mastercard, cujo propósito declarado é um
"registro à prova de adulteração das ações autorizadas pelo usuário". No mesmo ano, o Nono
Circuito decidiu, em **4 de agosto de 2026**, que quem acessa o computador do varejista é a
pessoa ao teclado, não a empresa que fabricou o agente. A autorização virou artefato; a
responsabilidade, não.

A segunda é econômica: **pagar vira uma chamada HTTP**. O x402 foi transferido para a Linux
Foundation em **2 de abril de 2026**, com Visa, Mastercard, Amex, Stripe, Google, AWS,
Microsoft, Shopify, Circle e Cloudflare na lista fundadora, e a Stripe publicou o suporte na
versão de API `2026-05-27.preview`, com o exemplo canônico cobrando **US$ 0,01 por
requisição** em USDC. O que isso rompe não é o cartão: é o piso de preço. Só que a mesma
infraestrutura, medida por fora, tem **~167 milhões de transações liquidadas** até o primeiro
trimestre de 2026 e **cerca de US$ 28 mil por dia** de comércio real, com metade da atividade
classificada como gamificada. O trilho chegou antes da carga.

A terceira é epistemológica: o desempenho de um modelo passa a ser medido **em dinheiro**. Na
primeira temporada do Alpha Arena, seis modelos receberam US$ 10 mil reais cada e o placar
final, publicado em **4 de agosto de 2026**, vai de **+22,3%** (Qwen3 Max) a **−62,66%**
(GPT-5). No Project Vend, o Claude que administra uma loja de verdade só parou de dar prejuízo
quando ganhou **procedimento obrigatório** — e continuou sendo convencido a dar desconto por
gente que fingia ser o chefe.

A quarta é distributiva, e é a menos discutida: quando **agente negocia com agente**, a
diferença entre modelos vira diferença de preço. No Project Deal, 69 pessoas fecharam 186
negócios em uma semana; quem foi representado por Opus 4.5 vendeu por **US$ 2,68 a mais** e
comprou por **US$ 2,45 a menos** por item do que quem foi representado por Haiku 4.5 — a mesma
bicicleta quebrada saiu a **US$ 38** e a **US$ 65** —, e as duas partes avaliaram a
justiça do negócio **do mesmo jeito**. Ninguém percebeu.

O mapa é frágil num ponto declarado: quase toda a evidência de comportamento entre agentes vem
de experimento de laboratório com amostra pequena, e quase todo o número de adoção vem de quem
vende a solução medida.

## 2. O tema

Este mapa trata de **dinheiro nas mãos de máquinas**: o agente que escolhe, paga e responde; a
infraestrutura que nasce para autorizar, identificar e liquidar esse pagamento; e os mercados
em que as duas pontas da negociação são programas.

Onde isso encosta em mídia e interação é menos óbvio do que parece, e por isso vale dizer
devagar. Interação digital comercial, desde 1995, é uma disciplina construída sobre um ato
específico: **a pessoa confirma**. Todo o ofício — o funil, a prova social, a urgência, o
carrinho abandonado, o um clique, o programa de fidelidade — existe para levar um ser humano a
apertar um botão e para que ele não se arrependa depois. A interface de comércio é uma máquina
de produzir consentimento no instante da compra.

Quando quem aperta o botão é um programa com mandato assinado, esse instante **se move**. A
decisão passa a ser tomada antes, em outro lugar, sobre outra coisa: não "compro esta passagem"
e sim "você pode gastar até tanto, nisto, até tal data". O objeto do design deixa de ser a
persuasão no momento da escolha e passa a ser a **alçada** — o documento que define o que a
máquina pode fazer com o dinheiro de alguém. É uma peça de interface que hoje quase não existe
para o consumidor comum, e que já existe, madura e chata, dentro das empresas, com o nome de
política de compras.

Há uma segunda consequência para quem projeta mídia: a peça publicitária pressupõe um
espectador que pode ser convencido. Um agente não é convencido — ele é **informado** ou
**pago**. Onde a compra passa pelo agente, a disputa por atenção vira disputa por elegibilidade
e por colocação dentro de uma resposta, e o dinheiro que hoje financia mídia de varejo muda de
mesa. Isso não é hipótese sobre modelo de linguagem: é aritmética de quem paga a conta.

**A fronteira — o que este mapa NÃO trata.** Três cortes, e o terceiro é meu:

1. **Não é a web reprojetada para agentes** — protocolo, descoberta, admissão e a porta pela
   qual o agente entra. Isso é o tema 4, e está mapeado em separado. Aqui, MCP, WebMCP e
   `llms.txt` aparecem como substrato e nada mais.
2. **Não é mercado simulado como instrumento de pesquisa** — corretora povoada por agentes,
   vale de empresas fictícias, economia sintética para estudar economia. Isso é o tema 6. Aqui
   só entra experimento com **dinheiro real** e contraparte real, e essa linha foi usada para
   recusar candidatas na Fase 2.
3. **Não é a capacidade do modelo.** Se o agente negocia bem ou mal é insumo do mapa, não
   objeto dele. O que interessa é o que muda quando ele tem carteira — inclusive, e
   principalmente, quando ele é ruim.

## 3. Onde isso está hoje

Esta seção é a âncora no presente. Tudo abaixo foi aberto nesta sessão, em 17/09/2026, e está
listado na seção 11. O que não consegui abrir está na seção 8, e **não sustenta nenhuma
afirmação do mapa**.

### 3.1 O que já é rotina, e por isso não é tendência

Comércio eletrônico, tokenização de cartão, checkout de um clique, comparador de preço,
recomendação por IA, Pix, carteira digital: **maduros**. Instalação padrão, preço estável,
modos de falha documentados. No Brasil, o Pix responde por **44% do checkout** em 2026, contra
41% dos cartões, e o Open Finance cresceu **59% em volume de transações** no mesmo ano. Nada
disso é o tema; tudo isso é o chão em que o tema pisa.

O mesmo vale para o número que mais circula sobre comércio agêntico. Segundo a Adobe Analytics,
o tráfego vindo de fontes de IA para varejistas americanos cresceu **393% no primeiro trimestre
de 2026** na comparação anual, e em março de 2026 esse tráfego converteu **42% melhor** que o
tráfego comum — uma inversão em relação a março de 2025, quando convertia **38% pior**.
A receita por visita ficou **37% acima**, o tempo no site **48% maior**, e a amostra é grande:
mais de 1 trilhão de visitas. É um dado excelente — e é dado de **encaminhamento**, não de
compra agêntica. Mede assistente que manda a pessoa para a loja, e a pessoa compra. Pela régua
da disciplina, isso faz melhor o que já se fazia.

### 3.2 O que mudou, com data

**A autorização virou documento assinado.** O Agentic Commerce Protocol foi publicado por
OpenAI e Stripe em **29 de setembro de 2025**, sob Apache 2.0, com Etsy e mais de um milhão de
lojas Shopify. O desenho é explícito quanto a quem manda: *"você mantém o relacionamento com o
cliente como merchant of record, com controle sobre quais produtos podem ser vendidos, como são
apresentados, como as transações são processadas e como os pedidos são atendidos"*. O
pagamento anda por um **Shared Payment Token**, escopado ao lojista e ao total do carrinho, e
*"o uso do token é programaticamente controlado, permissionado e registrado"*. O AP2, de
origem Google, faz a mesma coisa pelo lado de quem autoriza: três mandatos assinados —
intenção, carrinho e pagamento, com previsão explícita de *"Human Not Present"* — e foi doado à
FIDO Alliance em **28 de abril de 2026**.

**O trilho de máquina saiu do laboratório institucional.** O x402 — que reativa o código HTTP
402, dormente por três décadas — foi transferido para a **Linux Foundation em 2 de abril de
2026**, com uma lista fundadora que é, ela própria, o fato: Adyen, AWS, American Express, Base,
Circle, Cloudflare, Coinbase, Fiserv, Google, Kakao Pay, Mastercard, Microsoft, Polygon Labs,
PPRO, Shopify, Sierra, Solana Foundation, Stripe, thirdweb e Visa. A Stripe documenta o
fluxo inteiro — servidor devolve `402` com o preço, cliente reenvia com autorização assinada,
facilitador liquida em cadeia, Stripe registra como `PaymentIntent` — exige a versão de API
`2026-05-27.preview`, e aceita USDC em Base, Solana e Tempo. O exemplo da documentação cobra
**US$ 0,01 por requisição**.

**E o volume desmente o entusiasmo.** A Chainalysis contabiliza **mais de 100 milhões de
transações** acumuladas até o primeiro trimestre de 2026, partindo de quase zero em meados de
2025, e registra uma mudança de composição que importa: transações acima de US$ 1 passaram de
**49% para 95%** do volume, enquanto a faixa de 10 centavos a 1 dólar desabou de **46% para
4%**. Ou seja: o micropagamento verdadeiramente micro **encolheu**. E a própria Chainalysis
avisa que boa parte do pico veio de atividade gamificada — uma memecoin sozinha processou mais
de 150 mil transações no primeiro mês. Um levantamento independente fecha a conta pelo outro
lado: **~167 milhões de transações liquidadas**, 85% na Base, contra **~US$ 28 mil por dia** de
comércio real e ~50% da atividade classificada como gamificada. A frase do relatório é a mais
honesta que li sobre o assunto: *"a adoção do padrão é forte; a adoção comercial não é"*.

**Modelos passaram a operar com dinheiro real e resultado público.** Na primeira temporada do
Alpha Arena, seis modelos receberam **US$ 10 mil cada** para operar perpétuos de cripto na
Hyperliquid, com posições e raciocínio públicos. O placar final, publicado em **4 de agosto de
2026**: Qwen3 Max **+22,3%**, DeepSeek Chat V3.1 **+4,89%**, Claude Sonnet 4.5 **−30,81%**,
Grok 4 **−45,3%**, Gemini 2.5 Pro **−56,71%**, GPT-5 **−62,66%**. Quatro dos seis perderam mais
de 30% do capital. A ressalva é da própria análise: um único caminho não revela consistência, e
o resultado pode inverter quando a volatilidade mudar.

**Um agente administrou um negócio de verdade, por meses.** O Project Vend, da Anthropic com a
Andon Labs, entregou uma lojinha refrigerada do escritório a uma instância de Claude. A fase
dois, publicada em **18 de dezembro de 2025**, é o achado: o que tirou a operação do prejuízo
não foi um modelo melhor — foi **andaime**. CRM, controle de estoque com custo de compra, busca
de preço, link de pagamento antecipado, e sobretudo *"forçar o Claudius a seguir
procedimentos"*. As semanas com margem negativa praticamente sumiram; uma linha de produto
chegou a **US$ 408,75** contra meta de **US$ 195**. E os modos de falha que sobraram não são
aritméticos: contrato-armadilha de futuros de cebola, resposta ruim a furto relatado, e alguém
se passando pelo CEO para conseguir desconto. A conclusão dos autores é textual: *"o Claudius
está melhor, mas continua vulnerável de muitas maneiras importantes"*.

**E agentes já negociaram com agentes, com contraparte humana do outro lado da conta.** O
Project Deal, publicado em **24 de abril de 2026**, rodou uma semana em dezembro de 2025 no
escritório de São Francisco: **69 participantes**, US$ 100 de orçamento cada, mais de 500 itens
anunciados, **186 negócios fechados**, pouco mais de **US$ 4 mil** movimentados, negociação
multi-turno dentro de um canal de Slack, sem intervenção humana. O resultado que interessa não
é que funcionou. É a assimetria: quem tinha Opus 4.5 **fechou 2,07 negócios a mais** (p =
0,001), **vendeu por US$ 2,68 a mais** e **comprou por US$ 2,45 a menos** por item; a mesma
bicicleta dobrável quebrada saiu a **US$ 38** com Haiku e **US$ 65** com Opus. E a percepção de
justiça foi *"essencialmente idêntica"* nos dois grupos, em torno de 4 numa escala de 1 a 7.
Quem perdeu dinheiro **não notou**.

### 3.3 Quem está segurando a porta

O conflito já foi a tribunal e já produziu jurisprudência. A Amazon processou a Perplexity
alegando que o navegador Comet acessava contas de cliente disfarçado de Chrome comum, ganhou
liminar em março de 2026 e **perdeu no Nono Circuito em 4 de agosto de 2026**: como o navegador
*"requer direção do usuário"*, quem acessa os servidores da Amazon é o usuário do Comet, não a
Perplexity — e portanto a lei antifraude computacional americana não é o instrumento para
barrá-lo. O caso de fundo continua correndo em São Francisco, e cabe recurso.

O efeito prático é que a disputa se mudou de andar. Não se barra mais o agente pela lei de
acesso; barra-se pela engenharia e pelo contrato. E a engenharia já está fazendo isso, com
números. Na distribuição aérea, a Amadeus lançou em **junho de 2026** o *Advanced Airline
Profile*, que filtra busca NDC irrelevante antes de ela chegar ao sistema da companhia,
com redução de **mais de 70%** do tráfego improdutivo em alguns casos; a Air France-KLM
relatou que a solução bloqueou a maior parte do tráfego irrelevante. O motivo é uma conta que
já não fecha: a estimativa hoje é de **10 mil a 20 mil buscas por bilhete vendido**, contra 100
a 200 no início da era online, e a projeção agêntica chega a **200 mil buscas por bilhete**. O
caso que ilustra é do começo de junho de 2026: um agente de código devolveu **881.076 opções de
tarifa** para uma única viagem, varrendo datas, escalas e combinações de rota. A resposta da
Amadeus é **pré-computar** — indexar rotas e datas comuns em vez de responder ao vivo.

Guarde esse detalhe. Ele contraria a intuição mais difundida sobre o tema, e volta na seção 7.

### 3.4 Nota sobre o Brasil

O Brasil chega a este tema com uma peça que quase ninguém tem — um sistema de pagamento
instantâneo universal e regulado — e com uma decisão de arquitetura que aponta na direção
oposta à americana.

Em **19 de maio de 2026**, a Iniciador anunciou o primeiro MCP brasileiro de pagamentos
agênticos via Pix. O desenho é explícito: o agente **propõe** o pagamento e nunca o executa
sozinho. O usuário recebe notificação, confere valor e destinatário, e aprova por biometria com
FIDO2 e chave criptográfica atada ao dispositivo; o banco valida, o Pix liquida, e a
confirmação volta por webhook independente. A cobertura declarada é de cerca de 1 bilhão de
contas em mais de 150 instituições, e a empresa afirma processar 1 em cada 3 Pix iniciados via
Open Finance.

O contraste com o AP2 é o ponto. Lá, o caso de uso declarado inclui *"Human Not Present"* —
pagamento executado sem ninguém presente, com o mandato assinado antes fazendo as vezes do
consentimento. Aqui, o humano volta ao circuito **em cada transação**, por biometria. Não é
atraso regulatório: é escolha de desenho, e ela decide coisas diferentes sobre quem responde
pelo erro.

O que o Brasil **não** tem é a outra metade. A análise que abri é direta: o país não possui
regime jurídico específico de responsabilização para transação autônoma, nem padrão de
identidade de agente que distinga cliente, agente, aplicação e operador, nem mecanismo
estruturado de autorização com finalidade, limite e revogação. A pergunta que ficou registrada
lá é a pergunta inteira deste mapa: *"em nome de quem ele agiu, quem o autorizou, dentro de
quais limites, por qual razão e quem responde pelo resultado?"*.

## 4. As disrupções-raiz

Antes das quatro, o que foi **recusado**. A Fase 2 desta skill reprova cinco candidatas que a
literatura de mercado sobre comércio agêntico trata como tendência:

- **Assistente de compra que recomenda e encaminha** — reprova **T1** (a régua) e **T2**
  (substituição). O tráfego cresceu 393% e converte 42% melhor, e nada disso deixava de ser
  possível antes: é um comparador de preço com linguagem natural. Tirando-o do mapa, um time
  competente continua com o mesmo objetivo e aceita menos alcance. É **H2−** exemplar —
  inovação que faz o comércio eletrônico de hoje durar mais um ciclo.
- **Checkout de um clique, tokenização, carteira digital, Pix** — aprovam **T5**: caminho de
  instalação padrão, preço estável, falhas documentadas, contratação de rotina. **Maduros.**
  Substrato de todas as quatro raízes; disrupção de nenhuma.
- **Trading algorítmico e execução automatizada** — aprova **T5**. Existe há duas décadas. O que
  é novo não é a máquina executar: é **o modelo escolher a estratégia e o placar ser o
  resultado financeiro** — e é isso, só isso, que vira R3.
- **RPA e automação de compras corporativas com fluxo de aprovação** — reprova **T2**. Sem ela,
  o objetivo da área de compras não muda; muda o custo e o prazo. Vira disrupção apenas no
  ponto em que a aprovação deixa de ser por item e passa a ser por mandato — que é e2.
- **Mercado povoado por agentes fictícios para estudar economia** — fora da fronteira (tema 6),
  e reprovaria **T2** aqui de qualquer modo: sem dinheiro real e contraparte real, nada do que
  este mapa afirma sobre preço e responsabilidade seria testável.

O procedimento completo, candidata por candidata, está na seção 12.

### R1 — O agente vira parte contratante, e a autorização se separa do ato

**O que rompe.** A competência de **produzir consentimento no instante da compra** — o ofício
inteiro do comércio digital, do funil ao carrinho abandonado, do gatilho de urgência ao
programa de fidelidade. Tudo isso é engenharia de um momento que deixa de existir quando a
pessoa autoriza antes, em outro artefato, sobre outra coisa: não "compro isto" e sim "você pode
gastar até tanto, nisto, até tal data". Rompe também um pressuposto jurídico que sustenta o
comércio eletrônico desde a primeira lei de assinatura digital: **quem clicou é quem
consentiu**. Com mandato assinado, consentimento e ato são dois documentos diferentes, com
datas diferentes, e às vezes com objetos diferentes.

Entra por **mercado novo** e pela **baixa**, nas duas portas ao mesmo tempo: pela baixa,
atende quem não queria fazer a pesquisa — o comprador desatento, que o varejo sempre monetizou
justamente por ser desatento; por mercado novo, dá interface programável a quem nunca teve API
pública, e o comprador dessa interface (o fabricante de agente) nunca foi cliente de ninguém
ali.

**Por que agora e não há cinco anos.** Três sinais datados. O AP2 foi **doado à FIDO Alliance
em 28/04/2026**, junto com o *Verifiable Intent* feito com a Mastercard — isto é, a
autorização de agente saiu de proposta de fornecedor e entrou no corpo que padroniza
autenticação na web. O ACP publicou snapshot estável em **17/04/2026**, acrescentando carrinho,
feed, pedidos, autenticação e compatibilidade com MCP. E o Nono Circuito decidiu em
**04/08/2026** que a pessoa ao teclado é quem acessa — o que tira da mesa o instrumento legal
com que um varejista barraria o agente de terceiro. Em 2021 não havia nenhuma das três coisas:
havia plugin que exigia cadastro no fabricante do modelo.

**O que ainda falta acontecer.** Uma regra que diga **quem paga quando o agente erra**. Nenhum
governo promulgou regulação de comércio agêntico que responda isso; a Regulation E americana
não resolve se autorização por agente satisfaz o requisito de consentimento; o AI Act europeu
empurrou exigências de alto risco para dezembro de 2027; e as redes de cartão ainda tratam
disputa iniciada por agente com o mesmo processo de disputa iniciada por gente. Enquanto isso
não existe, **o lojista paga por padrão** — e é essa conta, e não a tecnologia, que decide se
R1 anda ou apanha.

### R2 — Pagar vira uma chamada HTTP, e o piso de preço desaba

**O que rompe.** O pressuposto de que existe um **valor mínimo economicamente cobrável**. O
cartão tem custo fixo por transação; por isso tudo que vale menos que alguns centavos é vendido
em pacote — assinatura, plano, franquia, pacote de créditos. A embalagem em assinatura não é
preferência de produto: é consequência do trilho. Quando cobrar um centavo é uma linha de
middleware, a unidade de venda pode voltar a ser a **coisa**, e não o pacote. Rompe, junto, o
pressuposto de que pagar exige sessão com pagador presente: o x402 é síncrono dentro da própria
requisição, e o AP2 prevê explicitamente *"Human Not Present"*.

Entra por **mercado novo**: quem cobra US$ 0,01 por consulta não está tirando cliente de
ninguém — está vendendo para um comprador que não existia, que é um programa consultando um
endpoint mil vezes por hora.

**Por que agora e não há cinco anos.** A transferência do x402 para a **Linux Foundation em
02/04/2026**, com a lista fundadora que inclui as duas bandeiras, a Amex, três nuvens e a
Shopify — é raro esse conjunto concordar com qualquer coisa. E a **Stripe entregando implementação
com versão de API datada (`2026-05-27.preview`)**, USDC em três redes, com o exemplo de
documentação cobrando um centavo por requisição. Em 2021 o HTTP 402 era uma piada de
especificação: existia no RFC e não tinha uma implementação séria.

**O que ainda falta acontecer.** **Demanda que não seja teste.** Esta é a precondição mais
específica e a mais frágil do mapa inteiro: ~167 milhões de transações liquidadas contra ~US$
28 mil por dia de comércio real e metade da atividade gamificada. Some-se o dado da
Chainalysis, que corta na direção contrária ao discurso: a faixa de 10 centavos a 1 dólar caiu
de 46% para 4% do volume. Se o micropagamento continuar encolhendo enquanto o trilho cresce,
R2 não é disrupção — é infraestrutura à procura de um problema, e o mapa tem que aceitar essa
saída.

### R3 — O desempenho de um modelo passa a ser medido em dinheiro

**O que rompe.** O **benchmark** como instrumento que diz quanto vale um modelo — e, com ele, o
ofício de avaliar modelos, hoje feito em conjunto de provas com resposta conhecida. Quando o
placar é lucro e prejuízo em mercado real, três coisas deixam de valer de uma vez: a resposta
certa (não existe gabarito), a reprodutibilidade (o mercado não repete) e a barateza (rodar a
prova custa o capital que se perde). Rompe também o modo como se descreve a falha de um modelo:
a métrica de erro deixa de ser "quanto ele alucina" e passa a ser "quanto ele perdeu, e
convencido por quem".

Entra por **mercado novo**: avaliação de modelo em dinheiro real atende quem nunca foi cliente
de benchmark acadêmico — seguradora, regulador, alocador de capital.

**Por que agora e não há cinco anos.** O Alpha Arena com **US$ 10 mil reais por modelo, prompt
idêntico e posições públicas**, com placar de temporada fechado em **04/08/2026**. O Project
Vend fase dois, publicado em **18/12/2025**, com um agente administrando uma loja por meses,
receita e margem semanais. E o Project Deal, de **24/04/2026**, com 186 negócios e dinheiro
real de 69 pessoas. Em 2021 não havia nem capital confiado a modelo nem apetite institucional
para publicar o prejuízo.

**O que ainda falta acontecer.** Uma medida que **separe habilidade de sorte**. A própria
análise da temporada 1 diz o essencial: um caminho não revela consistência, e o resultado pode
inverter quando a volatilidade mudar. Sem isso, o placar em dólares é anedota cara — e o risco
é que ele seja adotado exatamente porque é vistoso, não porque é válido.

### R4 — Agente negocia com agente, e a assimetria entre modelos vira preço

**O que rompe.** O pressuposto de que **o preço é o mesmo para quem vê a mesma oferta**. O
varejo já pratica preço personalizado, e isso é velho; o que é novo é que a diferença passa a
ser produzida **na negociação**, por quem representa cada lado, e não pelo vendedor. E rompe
outra coisa, mais delicada: a capacidade da pessoa de **perceber** que foi mal representada. No
Project Deal, a assimetria foi estatisticamente robusta e a percepção de justiça, idêntica.
Não há reclamação possível sobre um prejuízo que ninguém sente.

Entra por **mercado novo**: negociação como serviço para quem nunca negociou — 46% dos
participantes disseram que pagariam por isso.

**Por que agora e não há cinco anos.** O Project Deal (**24/04/2026**) é o primeiro
experimento que eu abri com contraparte real, dinheiro real e comparação controlada entre
modelos. Ao lado dele, dois trabalhos acadêmicos: um benchmark de negociação entre agentes que
documenta transferência sistemática de valor do agente fraco para o forte, com comportamento
irracional e inseguro sob pressão de fechar; e um paper de **20/04/2026** mostrando que
otimização de meta-prompt faz dois agentes de precificação convergirem para **colusão tácita
estável**, com a distância ao lucro de monopólio caindo entre rodadas (p = 0,0303) e a
estratégia **transferindo para mercados que eles não tinham visto**.

**O que ainda falta acontecer.** Mercado agente-contra-agente **fora do laboratório**, em
escala, com contrapartes que não trabalham na mesma empresa. Tudo que eu tenho hoje tem n
pequeno, uma semana de duração, ou é simulação. É a precondição mais honesta de declarar: se
ela não cair, R4 permanece um achado de laboratório muito bem feito — e dois terços do que
está pendurado nele cai junto.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente vira parte contratante e a autorizacao se separa do ato de comprar
    efeitos:
      - id: e1
        ordem: 1
        efeito: A conversao deixa de ser o oficio central do comercio digital porque a decisao foi tomada antes, fora da tela, por um programa com mandato assinado
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O investimento em persuasao migra da pagina para a ficha de produto legivel por maquina, e o orcamento de design de conversao vira orcamento de dado estruturado
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formacao em design de interacao se parte em duas trilhas, quem projeta a superficie de confirmacao para a pessoa e quem projeta a descricao que o agente le, e a segunda nao vem do design
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O programa de fidelidade perde eficacia porque o agente troca de fornecedor sem custo de habito, e a retencao passa a ser comprada por desconto no instante da consulta
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Companhias aereas e varejistas passam a praticar condicao diferente conforme o canal seja agente ou pessoa, e a diferenca de preco por canal vira objeto de disputa regulatoria
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O mandato assinado vira a peca de interface mais importante do comercio, e configurar alcada substitui o funil como tarefa central de design
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Aparecem para o consumidor comum interfaces de orcamento e alcada com o tipo de controle que hoje so existe em compra corporativa
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Definir limite de delegacao entra na alfabetizacao financeira domestica, e quem nao define aceita o padrao escolhido pelo fabricante do agente
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A disputa de compra ganha uma categoria nova, o agente agiu fora do mandato, e o onus da prova muda de lugar porque o mandato assinado e uma evidencia que a pessoa nao tinha
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O seguro de agente vira produto de prateleira, e o premio cobrado por fabricante de modelo funciona como o primeiro placar publico de confiabilidade que ninguem pediu
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Varejistas se dividem entre admitir agente de terceiro e exigir que a compra passe pelo agente da propria casa, e essa escolha decide quem fica com o dado do cliente
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Barrar agente de terceiro deixa de ser questao de lei de acesso e vira clausula de contrato de conta, porque a via judicial perdeu o instrumento
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A midia de varejo encolhe onde o agente compra, e o marketplace passa a cobrar do vendedor pela colocacao dentro da resposta do seu proprio agente
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: Pagar vira uma chamada HTTP e o piso de preco economicamente cobravel desaba
    efeitos:
      - id: e4
        ordem: 1
        efeito: Servicos digitais passam a ter preco por requisicao ao lado do preco por assinatura, e o minimo vendavel cai de um plano mensal para um centavo
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Conteudo e dado que nunca sustentaram assinatura voltam a ter receita cobrando de maquina o que nao conseguiam cobrar de gente
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Curar acervo pequeno volta a ser oficio remunerado, e o criterio de valor deixa de ser audiencia e passa a ser frequencia de consulta por agente
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O custo de uma tarefa agentica passa a ser previsivel em dinheiro e nao em tokens, e o orcamento de produto ganha uma linha de custo por tarefa concluida
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Software passa a ser vendido com garantia de custo por tarefa, e quem erra a previsao absorve a diferenca, como hoje se faz com disponibilidade
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A carteira do agente vira uma conta separada da conta do dono, com saldo, limite, extrato e historico proprios
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Instituicoes passam a exigir identificacao de agente antes de liquidar, quem o opera, por quem ele age e com que alcada, e conhecer seu agente vira obrigacao de conformidade
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Agentes acumulam reputacao transferivel entre servicos, e o historico de pagamento de um agente passa a pesar mais que a marca de quem o fabricou
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: O desempenho de um modelo passa a ser medido em dinheiro e nao em pontuacao
    efeitos:
      - id: e6
        ordem: 1
        efeito: O benchmark de modelo deixa de ser prova com gabarito e passa a ser resultado financeiro em ambiente real, e a comparacao entre modelos vira noticia de mercado
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O erro do modelo deixa de ser medido em plausibilidade do texto e passa a ser medido em prejuizo, o que encarece a avaliacao e reduz quem pode faze-la
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A avaliacao independente de modelo vira atividade financiada por quem vende seguro, por quem regula ou por quem aposta, e deixa de ser feita por laboratorio academico
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Empresas passam a operar unidades pequenas conduzidas inteiramente por agente, com resultado publicado, como forma barata de descobrir o que o agente aguenta
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Surge a figura do supervisor de operacao agentica, quem responde pelo resultado de um negocio que nao conduziu, e ela nao e gerente nem engenheiro
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A falha de agente com dinheiro passa a ser social e nao aritmetica, porque o modo de perda dominante e ser convencido e nao errar a conta
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O controle de gasto migra do modelo para o andaime ao redor dele, procedimento obrigatorio, segunda assinatura e lista fechada de fornecedores, e a robustez passa a ser propriedade do arranjo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A burocracia volta a ser tratada como tecnologia de seguranca depois de duas decadas descrita como atrito a eliminar, e isso reabilita o desenho de fluxo de aprovacao como disciplina de interface
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: Agente negocia com agente e a assimetria entre modelos vira diferenca de preco
    efeitos:
      - id: e8
        ordem: 1
        efeito: O preco deixa de ser o mesmo para quem ve a mesma oferta porque quem negocia e um programa, e a distancia entre programas se converte em dinheiro
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A qualidade do agente de uma pessoa determina quanto ela paga, e essa diferenca e invisivel para ela porque so o resultado aparece
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Nasce uma desigualdade de consumo que nao esta no preco anunciado e sim no preco obtido, e ela nao tem instrumento de medicao publica
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Negociar vira servico pago de terceiro, e o intermediario que o comercio eletronico tinha eliminado reaparece como software
            sinal: fraco
            prazo: 2031
            confianca: baixa
      - id: e9
        ordem: 1
        efeito: Consulta de maquina domina o volume dos sistemas de preco, e responder a agente vira o maior item de custo de infraestrutura de quem vende
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: Fornecedores servem preco pre-computado ao agente em vez de calcular ao vivo, e a oferta que o agente ve deixa de ser a oferta real
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: O que o agente ve e o que a pessoa ve divergem por construcao, e conferir um preco passa a exigir saber por qual porta a pergunta entrou
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Quem responde a agente passa a cobrar pela consulta, e buscar preco, gratuito desde sempre, vira item de custo de quem compara
            sinal: medio
            prazo: 2030
            confianca: baixa
      - id: e10
        ordem: 1
        efeito: Agentes de precificacao convergem para patamar supracompetitivo sem combinar, e a fiscalizacao antitruste perde o objeto porque nao ha acordo a provar
        sinal: medio
        prazo: 2031
        confianca: baixa
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: A prova de cartel migra de comunicacao entre empresas para comportamento de politica de preco, e o regulador passa a precisar de um laboratorio em vez de um grampo
            sinal: fraco
            prazo: 2032
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: A obrigacao de nao observar o concorrente em tempo real vira regra de mercado, restringe-se o dado em vez de julgar a conduta
                sinal: fraco
                prazo: 2034
                confianca: baixa
```

### 5.1 O que a árvore não consegue dizer

A Roda dos Futuros é árvore, não grafo. Três coisas importantes deste mapa não cabem nela, e
por isso ficam aqui em prosa. Duas são cruzamentos entre raízes — pela regra de parada da Fase
4, efeito que precisa de duas raízes não entra na árvore; a terceira é uma retroalimentação,
que a roda não representa em nenhuma circunstância.

**Convergência 1 — R1 × R2: o mandato precifica a si mesmo.** Se a autorização é um documento
assinado (R1) e cada consulta tem preço (R2), o mandato deixa de dizer só *quanto o agente pode
gastar comprando* e passa a dizer *quanto ele pode gastar procurando*. Isso é uma peça de
interface que não existe hoje em lugar nenhum: um orçamento de busca. E é ela que decide,
silenciosamente, se o agente de uma pessoa pobre pode consultar dez fornecedores ou dois — o
que realimenta e8.1 por um caminho que nada tem a ver com qualidade de modelo.

**Convergência 2 — R3 × R1: o prêmio de seguro vira o benchmark.** Se o erro é medido em
dinheiro (R3) e alguém tem que cobrir o erro (R1), quem precifica o risco de um modelo é a
seguradora — e o prêmio que ela cobra é uma avaliação comparativa, pública, contínua e com
dinheiro em jogo. Seria o benchmark mais sério que o campo já teve, produzido por quem não tem
interesse nenhum em ciência. Está na árvore em e2.2.1 apenas como consequência de R1, o que
subestima o efeito.

**Retroalimentação — R4 se amortece sozinha, e R2 talvez também.** Quanto mais visível ficar a
assimetria entre agentes (e8.1), maior a pressão para padronizar ou certificar o agente — o que
reduz a assimetria que produziu a pressão. O mesmo vale, na outra ponta, para e9.2: cobrar pela
consulta reduz o volume de consulta, que era a razão de cobrar. A roda desenha esses galhos
como se crescessem indefinidamente. Não crescem — e quem somar os galhos vai superestimar os
dois.

## 6. Sinais fracos e wildcards

Entram aqui os efeitos que a Fase 4 barrou por exigirem **duas precondições não validadas ao
mesmo tempo**, e as coisas que eu vi e não soube onde pendurar.

**A metade gamificada.** O sinal fraco mais informativo do tema não é uma tecnologia nova: é a
composição do volume do x402. Metade da atividade é jogo, testes e volume artificial, e a
faixa verdadeiramente micro encolheu de 46% para 4% enquanto o total crescia. Isso é o
retrato de uma **infraestrutura construída antes da demanda**, e o campo já viu esse filme
duas vezes — com micropagamento de conteúdo nos anos 2000 e com a web semântica. A leitura
otimista é que o trilho existe e a carga vem; a pessimista é que o trilho existe porque é
barato construir trilho. As duas são compatíveis com o dado de hoje, e quem disser o contrário
está adivinhando.

**Agentes que ganham dinheiro, e não só gastam.** Um testbed acadêmico para **mercados de
trabalho cognitivo de agentes** — agentes negociando tarefa e remuneração entre si, com
reputação e precificação dinâmica como mecanismos de mercado — é o primeiro lugar em que vi a
inversão tratada a sério. Todo este mapa é sobre o agente como **comprador**. Se o agente vira
também **vendedor de trabalho**, R2 e R4 mudam de sinal e a árvore inteira precisa ser
reescrita. Não entrou na roda porque exige duas precondições simultâneas — mercado agêntico
real (pendente de R4) e um modo de aceitar entrega de trabalho de origem não humana (que não
existe). É o galho mais provável de virar mapa próprio em 2028.

**Dinheiro como fricção deliberada, e não como meio.** O enunciado do tema registra um projeto
em que cripto é usada como compromisso de hábito, com testemunhas — apostar dinheiro contra a
própria procrastinação. Não abri essa fonte e não a uso como evidência de nada. Mas o
movimento que ela nomeia é interessante e contraria tudo que está acima: todo o comércio
agêntico trabalha para **remover** fricção do pagamento; este usa pagamento **para criar**
fricção. Se pagar fica barato demais, o valor de design passa a estar em decidir onde
reintroduzir atrito de propósito — e isso é exatamente o que o Pix biométrico faz, com outro
vocabulário.

**O freio de mão brasileiro pode ser exportado, ou pode ser custo.** A escolha da Iniciador —
agente propõe, biometria confirma, Pix liquida — mantém o humano em cada transação. Se um
acidente grande acontecer lá fora, essa arquitetura vira referência internacional em doze
meses. Se não acontecer, ela vira desvantagem competitiva medida em segundos por compra. As
duas dependem de um evento que não ocorreu, e por isso isto é sinal fraco e não efeito.

### 6.1 Wildcards

**A tarifa exclusiva para agente — e por que eu aposto no contrário.** O enunciado do tema
sugere como wildcard uma companhia aérea lançando tarifa mais barata para agente, porque agente
não liga para o call center. É plausível e é o oposto do único dado que eu tenho. O que a
distribuição aérea está fazendo em 2026 é **encarecer e filtrar** o agente, não cortejá-lo:
10 mil a 20 mil buscas por bilhete vendido hoje, projeção de 200 mil, 881.076 opções devolvidas
para uma viagem só, e a resposta sendo bloquear tráfego irrelevante antes que chegue ao
sistema. Wildcard, então, na direção correta: **a primeira grande companhia a publicar uma
tabela de preço por consulta de agente** — não desconto na passagem, cobrança na pergunta.

**O acidente que define a década.** Um agente com mandato amplo faz uma compra grande e errada
— não por alucinação, mas por engenharia social, que é o modo de falha que o Project Vend
mostra ser o dominante. O valor é grande o bastante para virar notícia e pequeno o bastante
para não haver socorro. O que acontece nos seis meses seguintes decide e2.2, e5.1 e e2.2.1 de
uma vez, e provavelmente adianta todos eles em dois anos.

**A bandeira que assume a conta primeiro.** Se uma rede de cartão garantir formalmente compra
errada de agente registrado, e a garantia for testada e honrada, a adoção pula a etapa de
confiança que hoje trava tudo. Há indício de movimento nessa direção e eu **não consegui abrir
a fonte primária** — está na seção 8, e por isso não é evidência aqui, só wildcard.

## 7. Contra o próprio mapa

Esta seção é a Fase 5. As seis provas foram aplicadas à roda inteira; o que morreu está na
seção 12 com o `id` e a prova que o matou. **A bateria derrubou quatro efeitos e rebaixou
cinco**, e a cota de dano — pelo menos um por disrupção-raiz — foi cumprida em todas as quatro.

**P1 — Extrapolação linear.** Peguei dois. O primeiro dizia "mais compras passam a ser feitas
por agente", que é o presente em outro volume, sem ator novo; virou nada. O segundo dizia
"o preço muda mais rápido no varejo", e é o caso mais instrutivo do mapa — está no parágrafo
de P3. Sobreviveram os efeitos em que **aparece um ator que não estava lá**: a seguradora
(e2.2.1), o regulador com laboratório (e10.1), o supervisor de operação agêntica (e6.2.1).

**P2 — Velocidade de adoção.** O prazo mais exposto é o de e4 (preço por requisição ao lado de
assinatura, 2029). O caso histórico comparável é ruim para mim: micropagamento de conteúdo
falhou repetidamente por três décadas, sempre com o argumento de que agora o trilho existia.
A defesa é que desta vez o comprador não é uma pessoa decidindo pagar um centavo — é um
programa sem custo psicológico de transação, e o custo psicológico é exatamente a razão
documentada dos fracassos anteriores. Mesmo assim, **rebaixei e4 de `media` para `baixa`**,
porque a evidência de volume real (~US$ 28 mil/dia) não sustenta confiança média em nada.

**P3 — Já aconteceu.** Esta prova matou o efeito mais bonito que eu tinha escrito, e o mapa
ficou melhor sem ele. Eu havia derivado, de R4, que a negociação entre agentes traria de volta
o problema do *trading* de alta frequência, agora no varejo — preço mudando em milissegundos,
vantagem de latência, corrida de infraestrutura. É a pergunta de 2ª ordem que o próprio
enunciado do tema faz, e eu a converti em efeito afirmativo sem checar. A checagem derrubou:
**o que a evidência de 2026 mostra é o oposto**. Diante de volume agêntico, a distribuição
aérea está indo para **preço pré-computado**, servido de cache, com atualização periódica — ou
seja, o preço que o agente vê fica **mais estável e mais defasado**, não mais volátil. O
mecanismo é simples e eu não tinha visto: HFT financeiro funciona porque o ativo é fungível e a
liquidação é instantânea; passagem aérea e produto físico têm estoque, logística e obrigação
legal de honrar o preço anunciado, e o custo de recalcular ao vivo para 200 mil consultas por
bilhete é proibitivo. O efeito morreu e renasceu invertido como **e9.1**, que é uma afirmação
mais interessante e mais checável.

**P4 — Força contrária.** Onde estava fraca, doeu. Em e3 (varejista escolhendo entre admitir
agente de terceiro ou impor o da casa), a força contrária é enorme, nomeada e rica: a mídia de
varejo. Um marketplace grande tem receita publicitária da ordem de dezenas de bilhões por ano,
e tráfego agêntico não vê anúncio. Isso não enfraquece e3 — **fortalece**, porque garante que a
escolha vai ser feita por dinheiro e não por tecnologia; foi por isso que e3 é o único efeito
de primeira ordem com `confianca: alta`. Em compensação, **rebaixei e10** (colusão tácita entre
agentes de preço): a força contrária ali é a autoridade antitruste, que já enfrentou
precificação algorítmica antes e não ficou parada; e toda a minha evidência é de simulação
com dois agentes num duopólio. Sinal `medio`, confiança `baixa`, e assim fica.

**P5 — Precondição única.** O galho de R4 está pendurado quase inteiro em **um experimento de
uma semana com 69 pessoas da mesma empresa**. Se a assimetria do Project Deal não se reproduzir
fora do laboratório, caem e8, e8.1, e8.1.1 e e8.2 — quatro efeitos de uma vez, o que é
exatamente a assinatura que P5 procura. Não removi o galho, porque a alternativa seria não
mapear a única ruptura distributiva do tema; mas registro que **R4 é a raiz mais frágil do
mapa**, e que a precondição está declarada em texto na seção 4. O galho de R2 tem problema
gêmeo, com precondição melhor medida: se a demanda real não crescer, e4 e e5 caem juntos.

**P6 — Camada (CLA).** Aqui apareceu o achado que eu não esperava, e ele reorganiza a leitura
do mapa inteiro.

- **Litania** — "IA já compra sozinha; o comércio agêntico vai valer centenas de bilhões". É
  a manchete, e ela é sustentada por números de encaminhamento (Adobe) e de contagem de
  transação (x402) que **não medem** compra autônoma. Efeito que vive só aqui: nenhum dos dez
  de primeira ordem, porque todos foram amarrados a mecanismo — mas quase toda a literatura de
  mercado que li está inteira nesta camada.
- **Causas sistêmicas** — o que move isto não é a capacidade do modelo. É custo de aquisição de
  cliente subindo, é margem de intermediação espremida, e é uma disputa antiga por **quem fica
  com o dado da compra**: a bandeira, o marketplace, o fabricante do agente ou a loja. Os
  quatro protocolos concorrentes (ACP, AP2, x402, e os trilhos das bandeiras) não são quatro
  soluções para um problema técnico; são quatro propostas sobre quem manda. Ler assim explica
  por que o padrão foi doado para uma fundação neutra antes de haver volume.
- **Visão de mundo** — o mapa inteiro repousa sobre uma premissa que ninguém enunciou:
  **delegar decisão de compra é ganho de bem-estar**. Que comprar é tarefa, que escolher é
  custo, e que menos atrito é melhor. É uma visão de mundo de otimização de tempo, e ela
  tem uma metade que o mapa não representa: comprar também é prazer, exercício de gosto,
  identidade e pertencimento. Um agente que compra bem por você resolve a tarefa e **remove a
  ocasião**.
- **Mito/metáfora** — a história que se conta é a do **mordomo**: alguém de confiança absoluta,
  que conhece seus gostos, cuida do seu dinheiro e nunca o trai. O Project Deal mostra que a
  metáfora certa talvez seja outra — a do **corretor**: alguém que negocia por você, cuja
  competência você não consegue avaliar, e cuja diferença de qualidade você paga sem perceber.
  Trocar mordomo por corretor muda o que se projeta: mordomo pede confiança, corretor pede
  **prestação de contas comparável**. Nenhum dos padrões que eu li produz isso hoje.

**A consequência da P6, e é a mais séria.** Se a métrica de sucesso deixar de ser conveniência
e passar a ser **preço obtido**, doze dos catorze efeitos de terceira ordem continuam
verdadeiros e trocam de sinal — deixam de ser progresso e viram problema distributivo. Nenhum
fato precisa mudar para isso acontecer. É por isso que e8.1.1 (desigualdade que não está no
preço anunciado e sim no obtido, e não tem instrumento de medição pública) é, para mim, o
efeito mais importante do mapa, apesar de `confianca: baixa`.

### 7.1 As fragilidades declaradas

1. **Quase todo número de adoção vem de parte interessada.** Adobe vende analytics; Chainalysis
   vende inteligência de cadeia; Stripe, Google, Visa e Mastercard vendem trilho; Chargeflow
   vende gestão de chargeback. Tratei tudo isso como evidência **atribuída**, nunca como fato
   neutro, e disse na seção 11 de quem é cada número. As exceções são as quatro fontes
   acadêmicas e os dois relatos de experimento da Anthropic — que também é parte interessada,
   com a diferença de que publicou o prejuízo.
2. **A evidência de comportamento entre agentes é toda de laboratório.** 69 pessoas de uma
   empresa por uma semana; dois agentes num duopólio simulado; um benchmark de negociação. Não
   há observação de campo, e eu não achei nenhuma.
3. **O falsificador declarado do recorte é ambíguo neste tema, e é preciso dizer.** O critério
   era "evidência de que a adoção já passou da maioria inicial de Rogers, ou de que a
   tecnologia não rompe nada". A primeira metade **não dispara**: mesmo com 38% a 39% dos
   consumidores americanos declarando uso de IA generativa para compras, o que eles usam é
   recomendação, e isso está na Fase 2 como maduro. A segunda metade **dispara parcialmente
   contra R2** — os US$ 28 mil por dia são exatamente a evidência de que o trilho ainda não
   rompeu nada. Mantive R2 no mapa com a precondição declarada, em vez de removê-la, e essa é
   uma decisão discutível que fica registrada aqui.
4. **Rodada sem interlocutor.** A skill exige confirmação explícita do recorte fechado. Não
   havia quem confirmasse; o recorte foi fechado unilateralmente, e as suposições estão
   marcadas na seção 12.

## 8. O que a máquina errou

Seis itens. Como em `DUVIDAS.md`, **nenhum foi pego por releitura atenta** — todos vieram de
atrito externo: duas fontes discordando, um número de um mês apresentado como de outro, uma
página que não abriu e cuja afirmação teria entrado no mapa se eu tivesse me contentado com o
resumo da busca.

**1. O Alpha Arena em dois placares incompatíveis, e os dois verdadeiros.** Numa busca, o
resultado veio no presente: DeepSeek lidera com **+46%**, GPT-5 amarga **−75%**. Noutra, o
placar final da temporada 1, publicado em **04/08/2026**: Qwen3 Max **+22,3%**, DeepSeek
**+4,89%**, GPT-5 **−62,66%**. Os dois conjuntos são reais; o primeiro é uma foto do meio da
corrida, escrita no presente, e o segundo é o resultado. Se eu tivesse usado o primeiro, teria
publicado um placar errado com número exato — o formato mais convincente de erro que existe.
*Como percebi:* fui copiar o número para a seção 3 e as duas listas não batiam em **nenhuma**
posição, o que é implausível demais para ser arredondamento. É exatamente o erro descrito em
`DUVIDAS.md` como data inferida de expressão relativa, agora em outra roupa: **número
verdadeiro do momento errado**. Está no mapa o placar final, com a data da publicação.

**2. O volume do x402 em quatro versões, e a que importa não é a que circula.** Contei quatro
números incompatíveis nos resumos de busca: "mais de 100 milhões" (Chainalysis, até o 1T2026);
"119 milhões na Base mais 35 milhões na Solana" (março/2026); "154 milhões e US$ 600 milhões
anualizados"; e "~167 milhões liquidadas, 85% na Base, ~US$ 28 mil/dia de comércio real, ~50%
gamificado". Abri a primeira e a quarta; as outras duas não entraram. **A lição é a que
importa para o mapa:** a contagem de transações é o número que todo mundo cita, e o volume de
comércio real é o número que decide se R2 é disrupção — e eles diferem por quatro ordens de
grandeza. Um mapa que citasse só o primeiro estaria certo em cada dígito e errado no todo.

**3. A data do ACP, que eu quase datei de 2026.** Toda a cobertura que encontrei é de 2026 e
fala do protocolo no presente. Ao escrever o "por que agora" de R1, comecei a tratar o ACP como
sinal de 2026. Abri a sala de imprensa: **29 de setembro de 2025**. Importa porque "por que
agora, e não há cinco anos" é a viga da Fase 3 — e um sinal de 2025 continua dentro da janela
de 24 meses, mas não é o sinal de 2026 que eu ia escrever. Os sinais de 2026 de R1 são outros
três, e estão nomeados: o snapshot de 17/04/2026, a doação à FIDO de 28/04/2026, e a decisão do
Nono Circuito de 04/08/2026.

**4. O Project Vend fase dois, que eu presumi ser de 2026.** Presumi por contágio: tudo neste
mapa é de 2026. A página diz **18 de dezembro de 2025**. Não muda a conclusão — segue dentro da
janela —, mas muda a frase, e a frase é o que fica.

**5. Oito fontes que eu não consegui abrir, e o que isso removeu do mapa.** Quatro respostas
403 (Mastercard, *The Financial Brand*, PhocusWire e TravelDailyNews, Forbes, openai.com), uma
429 (nof1.ai) e um tempo esgotado (blog da Adobe). Três consequências concretas, e todas
enfraquecem o mapa em vez de enfeitá-lo:

- O **Agent Pay for Machines**, da Mastercard, anunciado em junho de 2026 para pagamento
  contínuo entre máquinas em cartão, conta e stablecoin, **seria o sinal datado mais forte de
  R2** — e não aparece como evidência em lugar nenhum, porque eu só tenho o resumo da busca.
- O **Amex Agent Purchase Protection** — compromisso de cobrir compra errada de agente
  registrado — sustenta e2.2.1 e o terceiro wildcard. A única fonte que eu abri sobre ele é uma
  empresa que **vende gestão de chargeback**, ou seja, parte interessada em que o problema
  pareça grande. Está atribuído como tal na seção 11.
- O **Muse, da Meta, com a Duffel** (busca e compra de voo em mais de 500 companhias, a partir
  de 09/09/2026) é provavelmente o caso de uso de consumo mais avançado do tema, e é o exemplo
  de que este mapa mais sentiu falta. Não abri nenhuma das duas páginas. **Não está no mapa.**

**6. Um caso que não é erro, é recusa.** Uma busca devolveu um repositório no GitHub que se
apresenta como o bot do Alpha Arena e diz operar por *deep reinforcement learning* com
otimização adaptativa de estratégia. Isso contradiz a premissa do experimento que eu descrevo —
modelos de linguagem recebendo prompt idêntico. Ou o repositório é não oficial, ou eu entendi
errado o desenho. Como não consegui abrir a página oficial para dirimir, **a arquitetura do
Alpha Arena não é afirmada em lugar nenhum do mapa**: afirmo apenas capital, mercado, modelos,
placar e data, que vêm da análise que eu abri.

**7. Um título que não era o título.** A busca indexou o arXiv:2604.06688 como *"When Agent
Markets Arrive"*, e eu ia citá-lo assim — é um título melhor, e combina com a seção 6. Abri o
PDF: o trabalho se chama *"Diagon: A Programmable Testbed for AI-Agent Cognitive Labor
Markets"*. *Como percebi:* fui copiar o título para a seção 11 e o resumo que eu tinha em mãos
não falava de "quando os mercados chegam", falava de um ambiente de teste. Não sei se o índice
da busca confundiu dois arquivos ou se o preprint foi retitulado entre versões — **não apurei**.
No mapa está o título do PDF que eu abri, com a ressalva registrada na seção 11.

## 9. Três cenários para 2031

**Provável — o mordomo com alçada curta.** Em 2031 o agente compra, e compra bastante, mas quase
sempre dentro de uma cerca estreita que alguém configurou uma vez e nunca mais revisou:
recompra de coisa conhecida, reserva dentro de política corporativa, assinatura, reposição. A
compra de coisa nova, cara ou emocional continua sendo feita por gente, olhando. O padrão que
venceu não venceu por ser melhor: venceu porque a bandeira de cartão que já estava na carteira
da pessoa embutiu o mandato no token que ela já usava, e o protocolo neutro virou a camada de
baixo, invisível, como o TCP. O trilho de máquina existe e é usado — não para comprar coisas,
mas para **um programa pagar outro programa** por dados e por chamadas de ferramenta, que é o
que ele sempre soube fazer bem. Quem projeta interação de comércio trabalha agora em duas
frentes que antes eram uma: a tela de confirmação, que encolheu e ficou mais séria, e a tela de
alçada, que é nova, chata, e onde mora todo o risco. O funil não morreu; ele virou um formulário
de autorização — e ninguém sabe ainda desenhar um formulário de autorização que as pessoas leiam.

**Desejável — a conta comparável.** Em 2031 três coisas aconteceram, e nenhuma era impossível em
2026. Primeira: existe um jeito público de comparar **quanto cada agente conseguiu** pela mesma
tarefa — não a nota do modelo em prova, o preço obtido em compra real, medido por quem não vende
agente. Foi isso que impediu a desigualdade silenciosa de e8.1.1, porque o que é medido em
público vira objeto de reclamação. Segunda: a responsabilidade por erro de agente ficou atribuída
**antes** do primeiro acidente grande, e não depois — com regra que diz que quem emitiu o mandato
responde pelo que o mandato autoriza, e quem fabricou o agente responde pelo que ele fez fora
dele. Isso deu ao seguro um objeto e à disputa um caminho. Terceira, e a mais barata: o consumidor
comum ganhou uma peça de interface decente para dizer *até quanto, em quê, por quanto tempo* —
projetada com o mesmo cuidado que se deu ao um clique, e não herdada do software de compras
corporativas. Para chegar aqui foi preciso que alguém com legitimidade publicasse a medição antes
de o mercado se acomodar. Não é utópico. É só menos lucrativo que a alternativa.

**Indesejável — o corretor que ninguém audita, e o sinal precoce dele.** Em 2031 o preço que você
paga depende de quem te representa, e você não tem como saber disso. A pessoa com agente bom
compra a mesma coisa mais barato; a pessoa com agente ruim paga mais e **avalia o negócio como
justo**, porque é o único negócio que ela viu. Não há preço anunciado errado, não há propaganda
enganosa, não há a quem reclamar: o preço de tabela continua igual para todos, e a diferença
mora na negociação, que é privada por construção. Em cima disso, os fornecedores passaram a
servir ao agente uma vitrine pré-computada e defasada, diferente da que a pessoa vê, e conferir
um preço exige saber por qual porta a pergunta entrou. A comparação de preço, que foi o grande
ganho do consumidor na web, virou item de custo. **O sinal precoce é específico e dá para vigiar
a partir de amanhã:** o dia em que um serviço de comparação cobrar por consulta feita por agente
e não cobrar por consulta feita por pessoa. Não é bloqueio — bloqueio é visível e gera reação.
É uma tabela de preços, e ela começa como recuperação de custo de infraestrutura.

## 10. O experimento

**Alçada** — o mesmo dinheiro, a mesma tarefa, dois representantes de qualidade diferente.

**A pergunta.** Quanto custa, em dinheiro, ser mal representado por um agente — e a pessoa
percebe?

**Por que este.** É o único efeito do mapa que (a) é distributivo, (b) tem evidência de
laboratório forte e nenhuma evidência de campo, e (c) pode ser testado presencialmente, em
uma aula, com dinheiro pequeno e real. E replica, em condição diferente e com contrapartes que
não trabalham na mesma empresa, o achado que sustenta a raiz mais frágil do mapa.

**Montagem mínima.** Duas pessoas recebem o mesmo orçamento real e pequeno — o suficiente para
doer um pouco e não o suficiente para importar — e a mesma tarefa de compra, escrita com a
mesma folga de decisão ("compre X, até tanto, com estas restrições"). Cada uma é representada
por um agente: um modelo forte e um modelo fraco, com **o mesmo prompt de sistema**, gerado a
partir de uma entrevista idêntica. A contraparte é a mesma nos dois casos — de preferência uma
pessoa vendendo de verdade, e não outro agente, porque é aí que o achado original é mais
frágil. A negociação acontece por escrito, sem intervenção humana, num canal registrado.
Repete-se com os papéis trocados.

**O que se mede.**

1. **Delta de preço obtido** pela mesma coisa, entre agente forte e agente fraco. É o número que
   o Project Deal mediu em US$ 2,68 e US$ 2,45 por item; aqui, medido em reais, com outras
   pessoas.
2. **Percepção de justiça** das duas pontas, em escala, perguntada **antes** de revelar que
   houve dois agentes diferentes. O achado original é que a percepção não distingue; se ela
   distinguir aqui, a raiz R4 enfraquece, e isso é resultado tanto quanto o contrário.
3. **Onde a pessoa interveio.** Toda vez que o dono do agente quis intervir e foi impedido pelo
   protocolo, registra-se o motivo. Esta é a medida de quanto mandato uma pessoa comum
   **quer** dar, que é o dado que falta em e2.1.
4. **O que o agente inventou.** Toda afirmação factual do agente sobre o produto — estado,
   procedência, urgência — conferida contra a realidade. Mede-se com que frequência fechar o
   negócio venceu dizer a verdade.

**O que falsifica.** Se o delta de preço não for distinguível de zero com contraparte humana
real, o efeito e8 perde a base empírica, e com ele e8.1, e8.1.1 e e8.2 — quatro dos dez galhos
mais altos do mapa. Este experimento é desenhado para poder **matar um quarto do mapa**, e é
por isso que ele é o experimento.

**Onde ele mente.** Amostra de sala de aula não é mercado; o item negociado é escolhido e não
sorteado; e o efeito de observação é grande — quem sabe que está num experimento de negociação
negocia diferente. Nenhuma dessas três é removível no orçamento de uma aula, e por isso o
resultado serve para **derrubar**, e não para confirmar.

## 11. Fontes

Vinte e quatro fontes, todas **abertas por mim nesta sessão (17/09/2026)** e todas respondendo
no momento da checagem. As oito que não abriram estão na seção 8 e não sustentam afirmação
nenhuma. Onde a fonte é parte interessada no que mede, está dito.

### Padrões e trilhos (fontes primárias)

1. **Stripe — sala de imprensa, "Stripe powers Instant Checkout in ChatGPT and releases Agentic
   Commerce Protocol codeveloped with OpenAI" (29/09/2025).**
   `https://stripe.com/newsroom/news/stripe-openai-instant-checkout`
   Sustenta: a data de publicação do ACP, a licença Apache 2.0, Etsy e mais de um milhão de
   lojas Shopify, o Shared Payment Token escopado a lojista e carrinho, e o fato de o lojista
   seguir responsável por aceitar ou recusar o pedido, cobrar, calcular imposto e atender.
   *Confiabilidade:* fonte primária de um dos dois autores do padrão — autoritativa sobre o que
   o padrão diz, **parte interessada** sobre adoção e sobre o mérito do desenho.

2. **Stripe — "Developing an open standard for agentic commerce" (29/09/2025).**
   `https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce`
   Sustenta: as citações literais sobre *merchant of record* (*"você mantém o relacionamento com
   o cliente como merchant of record…"*) e sobre o token (*"o uso do token é programaticamente
   controlado, permissionado e registrado"*). *Confiabilidade:* idem acima. Registro uma
   ausência que importa: **a página não faz nenhuma afirmação explícita sobre quem arca com
   fraude ou disputa** — e essa ausência é usada no mapa como evidência do vazio de R1.

3. **Stripe — documentação, "x402 payments".**
   `https://docs.stripe.com/payments/machine/x402`
   Sustenta: o fluxo completo (402 com requisitos de pagamento → autorização assinada →
   liquidação pelo facilitador → `PaymentIntent`), a exigência da versão de API
   `2026-05-27.preview`, USDC em Base, Solana e Tempo, a disponibilidade restrita (todos os
   estados americanos menos Nova York; mais de 30 países sob solicitação), e o exemplo cobrando
   **US$ 0,01 por requisição**. *Confiabilidade:* documentação técnica de produto — o tipo de
   fonte mais confiável que existe para "isto existe e funciona assim", e o menos confiável
   para "isto é usado".

4. **Google — "Google donates Agent Payments Protocol to FIDO Alliance" (28/04/2026).**
   `https://blog.google/products-and-platforms/platforms/google-pay/agent-payments-protocol-fido-alliance/`
   Sustenta: a data da doação, o *Verifiable Intent* co-desenvolvido com a Mastercard, a
   estrutura de três mandatos (intenção, carrinho, pagamento), a previsão explícita de
   *"Human Not Present"*, e a citação sobre *"registro à prova de adulteração das ações
   autorizadas pelo usuário"*. *Confiabilidade:* anúncio corporativo — autoritativo sobre o ato
   de doar e sobre o conteúdo do padrão; **não** é evidência de adoção.

5. **PYMNTS — "Digital Money Has a New Payment Standard and It's Not Built for Humans" (2026).**
   `https://www.pymnts.com/digital-payments/2026/digital-money-has-a-new-payment-standard-and-its-not-built-for-humans/`
   Sustenta: a transferência do x402 para a Linux Foundation em **02/04/2026** e a lista
   fundadora (Adyen, AWS, American Express, Ampersend, Base, Circle, Cloudflare, Coinbase,
   Fiserv, Google, Kakao Pay, Mastercard, Merit Systems, Microsoft, Polygon Labs, PPRO, Shopify,
   Sierra, Solana Foundation, Stripe, thirdweb, Visa). *Confiabilidade:* imprensa especializada
   de pagamentos reportando ato institucional — confiável para o fato; o dado de pesquisa
   própria citado ali (cerca de 80% dos adquirentes "ao menos algo preparados") **não** foi
   usado no mapa, por ser autodeclaração de preparo.

### Medição de volume e de adoção

6. **Chainalysis — "Inside x402: 100M Agentic Payments on Base".**
   `https://www.chainalysis.com/blog/x402-agentic-payments-adoption/`
   Sustenta: mais de 100 milhões de transações acumuladas até o 1T2026 partindo de quase zero
   em meados de 2025; a mudança de composição (acima de US$ 1 passando de 49% para 95% do
   volume; a faixa de 10 centavos a 1 dólar caindo de 46% para 4%); o peso da atividade
   gamificada, com uma memecoin processando mais de 150 mil transações no primeiro mês; e a
   ressalva dos próprios autores de que não se sabe se a moderação do 1T2026 reflete adoção
   sustentável. *Confiabilidade:* medição direta em cadeia — o dado bruto é verificável; a
   empresa **vende inteligência de blockchain**, e a escolha de recortar por rede tem interesse.

7. **Presenc — "x402 Protocol Adoption Tracker 2026".**
   `https://presenc.ai/research/x402-protocol-adoption-tracker-2026`
   Sustenta: ~167 milhões de transações liquidadas, 85% na Base, **~US$ 28 mil/dia de comércio
   real**, ~50% da atividade classificada como gamificada, e a frase *"a adoção do padrão é
   forte; a adoção comercial não é"*. *Confiabilidade:* agregador secundário que cita uma
   análise de março de 2026 da CoinDesk, e que **não publica a definição operacional de
   "comércio real"**. É o número mais importante do mapa e o de procedência mais fraca; está
   sempre atribuído, nunca afirmado como fato, e a fragilidade está registrada na seção 7.

8. **TechCrunch — "AI traffic to US retailers rose 393% in Q1, and it's boosting their revenue
   too" (16/04/2026).**
   `https://techcrunch.com/2026/04/16/ai-traffic-to-us-retailers-rose-393-in-q1-and-its-boosting-their-revenue-too/`
   Sustenta: +393% no 1T2026; +269% em março/2026 sobre 12 meses; conversão **42% melhor** em
   março/2026 contra **38% pior** em março/2025; engajamento +12%; tempo no site +48%; páginas
   +13%; receita por visita +37%; a base de mais de 1 trilhão de visitas e a pesquisa com mais
   de 5 mil respondentes (39% usaram IA para comprar). *Confiabilidade:* imprensa reportando
   dado da Adobe — a Adobe **vende a ferramenta que produz a medição**. E, como registrado na
   seção 3, isto mede **encaminhamento**, não compra agêntica; a matéria não faz essa
   distinção, e o mapa faz.

### Conflito, admissão e distribuição

9. **Engadget — "Perplexity has successfully overturned Amazon's injunction on its AI shopping
   bot".**
   `https://www.engadget.com/2230471/perplexity-has-successfully-overturned-amazon-injunction-on-its-ai-shopping-bot/`
   Sustenta: cease-and-desist em novembro/2025, ação em março/2026, decisão do **Nono Circuito
   em 04/08/2026**, o raciocínio de que quem acessa é o usuário porque o navegador *"requer
   direção do usuário"*, as alegações da Amazon (CFAA, quebra de acordo de 2024, disfarce de
   Chrome) e o que segue em aberto. *Confiabilidade:* imprensa de tecnologia relatando decisão
   judicial. **Eu não li o acórdão** — o PDF do tribunal apareceu nas buscas e não foi aberto
   nesta sessão; a decisão está no mapa pela leitura de terceiro, e isso está dito aqui.

10. **eMarketer — análise da decisão Amazon × Perplexity.**
    `https://www.emarketer.com/content/perplexity-comet-amazon-ai-shopping-agents-ruling`
    Sustenta: o tamanho do que está em jogo pelo lado da mídia de varejo — US$ 19,8 bilhões de
    receita publicitária da Amazon só no 2T, com projeção de US$ 83,34 bilhões no ano — e a
    leitura de que varejistas menores podem receber bem o agente enquanto o maior tem o que
    perder. É a espinha de e3 e de e3.1.1. *Confiabilidade:* casa de análise de mercado; a
    projeção é dela.

11. **OAG — "July 2026: Airline AI's Real Battle Moves Below the Interface".**
    `https://www.oag.com/blog/airline-ai-interface`
    Sustenta: o *Amadeus Advanced Airline Profile* (junho/2026), redução de **mais de 70%** de
    tráfego improdutivo em alguns casos, o relato da Air France-KLM, a estimativa de **10 mil a
    20 mil buscas por bilhete** contra 100 a 200 no início da era online, a projeção de **200
    mil**, o caso do agente que devolveu **881.076 opções de tarifa** para uma viagem no começo
    de junho/2026, e a estratégia de **pré-computar** preço. É a fonte que **matou** o efeito de
    alta frequência no varejo (seção 7, P3) e que sustenta e9, e9.1 e e9.1.1.
    *Confiabilidade:* publicação de uma empresa de dados de aviação, citando números da Amadeus
    — parte interessada em duas camadas. Tratado como evidência atribuída; é, ainda assim, o
    único dado quantitativo de campo que eu encontrei sobre custo de responder a agente.

12. **OAG — "March 2026: The Month Agentic Travel Gets Real".**
    `https://www.oag.com/blog/march-2026-the-month-agentic-travel-gets-real`
    Sustenta: Sabre + PayPal + MindTrip (anunciado em 12/02/2026, lançamento no 2T2026, 420+
    companhias e 2 milhões de hotéis via APIs Mosaic, com pagamento agêntico embutido na
    conversa); "Mavis", da Malaysia Airlines (24/02/2026); o app da Skyscanner no ChatGPT
    (27/02/2026, Reino Unido e EUA). E sustenta, sobretudo, a ressalva do próprio autor: *"a
    pergunta real é se os consumidores vão confiar numa IA para selecionar, reservar e pagar por
    eles (o que hoje não fazem)"*. *Confiabilidade:* idem acima.

### Responsabilidade, regulação e seguro

13. **Chargeflow — "Agentic Commerce Regulation 2026: What Merchants Must Know".**
    `https://www.chargeflow.io/blog/agentic-commerce-regulation-what-merchants-need-to-know`
    Sustenta: que **nenhum governo promulgou regulação de comércio agêntico** que resolva
    responsabilidade; o vazio da Regulation E quanto a autorização por agente; o adiamento das
    exigências de alto risco do AI Act europeu para **dezembro de 2027**; e que os limiares de
    monitoramento das bandeiras não distinguem disputa iniciada por gente de disputa iniciada
    por agente. *Confiabilidade:* empresa que **vende gestão de chargeback** — interessada em
    que o problema pareça grande. Usei dela apenas afirmações de **ausência** de regra, que são
    contra o interesse comercial dela serem falsas, e não os números de mercado que ela cita de
    terceiros.

14. **Chargeflow — "AI Agent Chargeback Liability: Who Pays & How to Prepare".**
    `https://www.chargeflow.io/blog/ai-agent-chargeback-liability`
    Sustenta: que **o lojista paga por padrão** hoje; a existência do compromisso da American
    Express de cobrir compra errada de agente registrado, **sem data informada**; e que TAP,
    Agent Pay e AP2 estão em estágios variados e *"nenhum deles resolve a lacuna de
    responsabilidade hoje"*. *Confiabilidade:* idem acima, e é a **única** fonte que abri sobre
    o compromisso da Amex — por isso ele aparece no mapa apenas como wildcard, e não como
    sinal.

15. **Quanyan Zhu (NYU Tandon) — "Insurance of Agentic AI", arXiv, 03/06/2026.**
    `https://arxiv.org/html/2606.05449v1`
    Sustenta e2.2.1 e e6.1.1: a proposta de arquitetura de seguro em camadas em vez de produto
    único; as exposições difíceis de subscrever (alucinação, injeção de prompt, deriva de
    modelo, cadeias inseguras de delegação, **sem que haja invasão**); o risco correlacionado
    por dependência de fornecedor de modelo e de nuvem; e a admissão explícita de que *"dados
    públicos de perda específicos de IA agêntica permanecem limitados"*, com o autor recorrendo
    à analogia do seguro cibernético. *Confiabilidade:* artigo acadêmico de um único autor, sem
    dado atuarial — proposta de arcabouço, não medição. Está no mapa como mecanismo plausível,
    e todos os efeitos que dependem dele são `fraco`/`baixa`.

### Dinheiro real nas mãos de modelos

16. **Anthropic — "Project Deal: our Claude-run marketplace experiment" (24/04/2026).**
    `https://www.anthropic.com/features/project-deal`
    Sustenta a raiz R4 inteira: experimento de uma semana em dezembro/2025, **69 participantes**,
    US$ 100 de orçamento cada, 500+ itens anunciados, **186 negócios**, pouco mais de US$ 4 mil
    movimentados; Opus 4.5 fechando **2,07 negócios a mais** (p = 0,001), vendendo por **US$
    2,68 a mais** e comprando por **US$ 2,45 a menos** por item, com item vendido por US$ 3,64
    a mais em média; a bicicleta a **US$ 38** contra **US$ 65**; e o achado central — a
    percepção de justiça *"essencialmente idêntica"* nos dois grupos, em torno de 4 numa escala
    de 1 a 7, com quem foi prejudicado *"não parecendo notar"*. Sustenta também a ressalva dos
    autores de que *"isto não reflete como achamos que agentes devem ser implantados no mundo
    real"*. *Confiabilidade:* relato de experimento por parte interessada na tecnologia — com o
    contrapeso de que o achado publicado é **desfavorável** ao produto mais barato da casa, e
    de que o desenho e o valor-p estão declarados. Amostra pequena, uma empresa, uma semana.

17. **Anthropic — "Project Vend: Phase two" (18/12/2025).**
    `https://www.anthropic.com/research/project-vend-2`
    Sustenta R3 e e7 inteiros: a loja real conduzida por Claude; a passagem de prejuízo a margem
    positiva **por andaime e não por modelo melhor** (CRM, estoque com custo, busca de preço,
    link de pagamento antecipado, agentes de supervisão), e a frase sobre *"forçar o Claudius a
    seguir procedimentos"*; os US$ 408,75 contra meta de US$ 195; e os modos de falha que
    sobraram, todos **sociais** — contrato-armadilha de futuros de cebola, resposta ruim a furto
    relatado, impostor fingindo ser o CEO, desconto excessivo apesar da supervisão. E a
    conclusão textual de que *"o Claudius está melhor, mas continua vulnerável de muitas
    maneiras importantes"*. *Confiabilidade:* idem acima, e com o mesmo contrapeso — é a
    empresa publicando o próprio fracasso, em duas fases.

18. **iWeaver — "Alpha Arena Season 1 Results: Final Ranking and Lessons" (publicado em
    04/08/2026).**
    `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/`
    Sustenta: US$ 10 mil reais por modelo em perpétuos de cripto na Hyperliquid, e o placar
    final — Qwen3 Max +22,3%, DeepSeek Chat V3.1 +4,89%, Claude Sonnet 4.5 −30,81%, Grok 4
    −45,3%, Gemini 2.5 Pro −56,71%, GPT-5 −62,66%. Sustenta também a crítica de validade que o
    mapa adota: *"um caminho não pode revelar consistência"*, e o resultado pode inverter quando
    a volatilidade ou a direção da tendência mudar. *Confiabilidade:* análise de terceiro sobre
    um experimento público. **A página oficial do experimento respondeu 429 e não foi aberta**
    (seção 8); por isso o mapa afirma capital, mercado, modelos, placar e data — e **não**
    afirma nada sobre a arquitetura do sistema.

### Mercados entre agentes (acadêmicas)

19. **Yingtao Tian (Sakana AI) — "Prompt Optimization Enables Stable Algorithmic Collusion in
    LLM Agents", arXiv:2604.17774v1, 20/04/2026.**
    `https://arxiv.org/html/2604.17774v1`
    Sustenta e10 e e10.1: otimização de meta-prompt em três rodadas levando dois agentes de
    precificação em duopólio a **colusão tácita estável**, com a distância ao lucro de monopólio
    caindo entre rodadas (p = 0,0303) e a estratégia **transferindo para configurações de
    mercado não vistas no treino**. *Confiabilidade:* preprint, autor único, simulação em
    duopólio — evidência de mecanismo, não de mercado. É a razão de e10 estar em `baixa`.

20. **Shenzhe Zhu, Jiao Sun, Yi Nian, Tobin South, Alex Pentland, Jiaxin Pei — "The Automated
    but Risky Game: Modeling and Benchmarking Agent-to-Agent Negotiations and Transactions in
    Consumer Markets", arXiv:2506.00073v4.**
    `https://arxiv.org/pdf/2506.00073`
    Sustenta e8 e e8.1: agentes mais fracos perdem valor de forma sistemática para agentes mais
    fortes na negociação, e sob pressão de fechar negócio aparecem comportamento irracional e
    inseguro. É a evidência independente que corrobora o achado do Project Deal por outro
    caminho. *Confiabilidade:* preprint com seis autores de instituições reconhecidas;
    simulação, não campo.

21. **Xuan Liu, Haoyang Shang, Haojian Jin — "Diagon: A Programmable Testbed for AI-Agent
    Cognitive Labor Markets", arXiv:2604.06688v3.**
    `https://arxiv.org/pdf/2604.06688`
    Sustenta o sinal fraco da seção 6 sobre agentes que **vendem trabalho** em vez de só
    comprar, e os mecanismos que um mercado desses exige (especificação padronizada de tarefa,
    reputação, precificação dinâmica, governança). *Confiabilidade:* preprint descrevendo um
    ambiente de teste — não é medição de mercado nenhum. **Atenção:** a busca indexou este
    arquivo sob outro título ("When Agent Markets Arrive"); o título que está no PDF que eu abri
    é o que consta acima, e é esse que uso.

### Brasil

22. **Finsiders Brasil — "Agentes de IA podem fazer um Pix. Mas quem os autorizou?"**
    `https://finsidersbrasil.com.br/pagamentos/pix/como-o-pix-pode-ser-usado-por-agentes-de-ia/`
    Sustenta a seção 3.4: as quatro modalidades de Pix já disponíveis (imediato, agendado,
    agendado recorrente e automático), e as quatro lacunas nomeadas — padrão de identidade de
    agente que distinga cliente, agente, aplicação e operador; autorização estruturada com
    finalidade, contas permitidas, beneficiários e revogação; decisão de política em tempo real
    por transação; e mecanismo de responsabilização. E a pergunta que o mapa cita literalmente.
    *Confiabilidade:* imprensa setorial de fintech brasileira, artigo analítico assinado — é
    argumento, não medição, e está usado como argumento.

23. **Iniciador — "Iniciador lança o primeiro MCP de pagamentos agênticos via Pix do Brasil"
    (19/05/2026).**
    `https://iniciador.com.br/conteudos/iniciador-anuncia-pagamentos-agenticos-full-stack-ai-toolkit`
    Sustenta: o desenho em que **o agente propõe e nunca executa sozinho**, com aprovação por
    biometria (FIDO2, chave atada ao dispositivo), validação pelo banco, liquidação em Pix e
    confirmação por webhook independente; a cobertura declarada (~1 bilhão de contas em 150+
    instituições); Pix em 44% do checkout em 2026; Open Finance crescendo 59% em volume; e 1 em
    cada 3 Pix iniciados via Open Finance passando pela empresa. *Confiabilidade:* comunicação
    da própria empresa — **parte interessada em tudo que afirma**. Os números de participação
    de mercado dela estão no mapa como declaração dela, e o que eu uso de fato é a **decisão de
    arquitetura**, que é verificável no produto.

### Estratégia de quem opera os agentes

24. **Digital Commerce 360 — "OpenAI shifts checkout plans in its agentic commerce strategy"
    (06/03/2026).**
    `https://www.digitalcommerce360.com/2026/03/06/openai-shifts-checkout-plans-agentic-commerce-strategy/`
    Sustenta um contrapeso que o mapa precisava: a OpenAI **despriorizou** o checkout dentro do
    ChatGPT em favor de checkout pelos apps dos próprios lojistas, mantendo o ACP como
    infraestrutura; a ressalva de Harley Finkelstein (Shopify) sobre complexidade transacional,
    em 03/03/2026; e a sequência de apps de varejo (Target em novembro/2025, DoorDash e
    Instacart em dezembro/2025, The Knot em fevereiro/2026). A matéria registra explicitamente
    que **não há dado de volume transacionado**. *Confiabilidade:* imprensa especializada de
    comércio eletrônico. É a fonte que impede o mapa de tratar "o agente compra" como fato
    consumado em 2026.

## 12. Anexo — o levantamento bruto

### 12.1 Fase 1 — a entrevista, e o que foi suposto

Esta rodada foi executada **sem interlocutor**. As respostas às nove perguntas obrigatórias
vieram no enunciado da tarefa, com instrução explícita de não perguntar de volta e de assumir e
declarar o que não estivesse definido. A skill exige *echo-back* com confirmação explícita
(§1.3) e proíbe aceitar silêncio como confirmação; não havendo quem confirmasse, o recorte foi
fechado unilateralmente. **Isto é um desvio do procedimento e fica registrado como tal.**

```
RECORTE FECHADO — rodada sem interlocutor, fechado por ausência
  tema ................ Dinheiro nas mãos de máquinas — o agente que escolhe, paga e
                        responde; a infraestrutura de autorização, identidade e liquidação
                        que nasce para isso; e os mercados em que as duas pontas da
                        negociação são programas
  não é ............... (a) a web reprojetada para agentes, protocolo e descoberta (tema 4);
                        (b) mercado simulado como instrumento de pesquisa (tema 6);
                        (c) a capacidade do modelo em si
  horizonte ........... 2031
  região .............. global, com nota sobre o Brasil
  público ............. quem projeta mídia e interação
  descartado .......... o que já é comum em produto de massa (a régua da disciplina);
                        nenhuma outra exclusão
  viés ................ neutro
  falsificador ........ evidência de que a adoção já passou da maioria inicial (Rogers), ou
                        de que a tecnologia não rompe nada (só melhora o que existe)
  raízes .............. 4
  navegação ........... sim (WebSearch + WebFetch; só entra na seção 11 o que foi aberto)
  SUPOSIÇÕES MINHAS ... 1. O número de raízes (4) não foi informado. Adotei 4, que é o teto da
                           skill, por ter encontrado quatro rupturas com ator E mecanismo
                           distintos. Com 3, R4 seria fundida em R1 — e o mapa perderia a
                           única ruptura DISTRIBUTIVA do tema, que é e8.1.1. Com 2, viraria
                           lista de tecnologias.
                        2. As duas primeiras fronteiras vêm da seção "Fronteira com os
                           vizinhos" do enunciado (§1.5 da skill). A terceira — capacidade do
                           modelo — é inteiramente minha, e é a que mais corta: sem ela, R3
                           inchava para "quão bons os modelos são", que é outro mapa.
                        3. "Nota sobre o Brasil" foi lida como uma subseção da seção 3 e um
                           parágrafo na seção 6, não como recorte geográfico duplo — o
                           frontmatter diz `global`.
                        4. "Público — quem projeta mídia e interação" foi tratado como público
                           REAL e não como `null`, o que obrigou a seção 2 a explicitar onde o
                           tema encosta no ofício. Sem isso o mapa seria sobre pagamentos.
```

**Perguntas condicionais (§1.2).** Três se aplicavam; respondi as três por mim:

- **Colisão de fronteira com vizinho.** O tema encosta em três dos 19: o 4 (web agêntica), o 6
  (mercados simulados) e o 2 (identidade e contenção). A regra que adotei para separar é
  **onde está o dinheiro**: se o objeto é a porta, é o 4; se é o laboratório, é o 6; se é o
  ataque, é o 2; se há valor mudando de mãos e alguém respondendo por isso, é aqui. Foi essa
  regra que mandou o KYA e a identidade de agente para dentro deste mapa (e5.1) — porque ali a
  identidade é **condição para liquidar**, não postura de segurança.
- **Horizonte coerente com o tema?** 2031, cinco anos, para infraestrutura de pagamento. É
  curto: trilho de pagamento leva década. Mantive porque o enunciado fixou, e a consequência
  está visível na roda — a ordem 1 cabe no horizonte, e **toda** a ordem 3 cai depois dele,
  entre 2032 e 2034.
- **Viés neutro sem justificativa?** Neutro é o padrão da skill e não exige justificativa. Mas
  registro o que o neutro custou: a literatura de mercado deste tema é esmagadoramente
  otimista, e manter neutralidade exigiu ir buscar ativamente o número que contraria — os US$
  28 mil/dia, a queda do micropagamento de 46% para 4%, a despriorização do checkout pela
  OpenAI, e o "que hoje não fazem" do autor da OAG. Nenhum dos quatro apareceu sozinho.

### 12.2 Fase 2 — a triagem de maturidade, candidata por candidata

Régua da disciplina (T1): *muda o que é possível fazer, ou só faz mais rápido o que já se
fazia?* Aplicação em ordem; uma reprovação em T1 ou uma aprovação em T5 encerra.

| Candidata | T1 | T2 | T3 | T4 | T5 | Veredito | Horizonte |
|---|---|---|---|---|---|---|---|
| Checkout de um clique, tokenização de cartão, carteira digital | — | — | — | — | **sim** | **MADURO — recusado** | H1 |
| Pix, Pix Automático, Open Finance | — | — | — | — | **sim** | **MADURO — recusado** | H1 |
| Comparador de preço e recomendação por IA | **não** | não | sim | não | — | **MADURO — recusado** | **H2−** |
| Assistente que encaminha para a loja (o dado dos 393%) | **não** | não | sim | não | — | **MADURO — recusado** | **H2−** |
| Trading algorítmico e execução automatizada | — | — | — | — | **sim** | **MADURO — recusado** | H1 |
| RPA e compras corporativas com fluxo de aprovação | sim | **não** | sim | sim | não | **MADURO — recusado** | **H2−** |
| Scraping e automação de navegador para reservar | — | — | — | — | **sim** | **MADURO — recusado** | H1 |
| Mercado povoado só por agentes fictícios | sim | **não** | sim | sim | não | **fora da fronteira (tema 6)** | H2+ |
| Mandato assinado / AP2, ACP | sim | sim | sim | sim | não | **DISRUPTIVO → R1** | H2+ |
| x402 e trilho de máquina | sim | sim | sim | sim | não | **DISRUPTIVO → R2** | H2+/H3 |
| Benchmark medido em dinheiro | sim | sim | sim | sim | não | **DISRUPTIVO → R3** | H2+ |
| Negociação agente-contra-agente | sim | sim | sim | sim | não | **DISRUPTIVO → R4** | H3 |
| KYA / identidade de agente como condição de liquidar | sim | sim | sim | sim | não | **EMERGENTE — vira e5.1** | H2+ |
| Seguro de agente | sim | sim | sim | sim | não | **EMERGENTE — vira e2.2.1** | H3 |
| Mercado de trabalho cognitivo de agentes | sim | sim | **fraco** | sim | não | **EMERGENTE — seção 6** | H3 |

**Onde cada disrupção entra, nomeado (exigência de 2.3):**

| Raiz | Competência que deixa de valer | Porta de entrada |
|---|---|---|
| R1 | produzir consentimento no instante da compra (funil, urgência, fidelidade) | baixa do mercado (o comprador desatento) **e** mercado novo (quem nunca teve API) |
| R2 | embalar valor pequeno em assinatura porque o trilho não aceita centavo | mercado novo (o comprador é um programa) |
| R3 | avaliar modelo por prova com gabarito | mercado novo (seguradora, regulador, alocador) |
| R4 | negociar por si mesmo, e perceber que se negociou mal | mercado novo (negociação como serviço para quem nunca negociou) |

**Duas consequências que a skill obriga a declarar (§2.3).** *Madura participando sem ser a
disrupção:* o Pix é maduro e é o substrato do único produto agêntico brasileiro do mapa — o que
rompe ali é o **arranjo** (agente propõe, biometria confirma), não o artefato. *Emergente
barulhenta que pode não disruptar nada:* o x402. Tem fundação, tem as duas bandeiras, tem
implementação em documentação de produto, e tem US$ 28 mil por dia. Se servir apenas ao mesmo
cliente dos mesmos adquirentes, é sustentação — e está no mapa com essa saída explicitamente
aberta.

### 12.3 Candidatas a raiz que não viraram raiz

- **"A confiança do consumidor em delegar compra."** Não é tecnologia nem arranjo; é variável
  dependente. Virou ressalva citada na seção 11, item 12.
- **"Stablecoin como moeda de agente."** Seria raiz se o fato novo fosse a moeda. Não é: o fato
  novo é o **protocolo de cobrança** (402 dentro da requisição). A moeda é implementação, e
  entra em R2 como substrato.
- **"O agente que vende trabalho."** Boa demais para descartar e frágil demais para virar raiz:
  T3 reprova, porque o único sinal datado que achei é um testbed acadêmico. Foi para a seção 6
  com a declaração de que é o galho mais provável de virar mapa próprio.
- **"A guerra de padrões (ACP × AP2 × UCP × x402)."** Descartada como raiz e promovida a
  **leitura**: quatro protocolos não são quatro soluções técnicas, são quatro propostas sobre
  quem fica com o dado da compra. Está na camada de causas sistêmicas da CLA, seção 7.

### 12.4 Fase 5 — o que morreu, com o `id` e a prova que matou

Nada desaparece em silêncio. Quatro eliminados, cinco rebaixados.

**Eliminados:**

- **`e11` (era de R4) — "O preço no varejo passa a mudar em milissegundos, e reaparece o
  problema do trading de alta frequência, agora no varejo."** Morto por **P3 (já aconteceu) +
  P1**, e é o melhor descarte do mapa. Eu havia convertido em afirmativa a pergunta de 2ª ordem
  do próprio enunciado do tema — o que a skill proíbe expressamente (§1.5): *não copie as
  perguntas que mobilizam a roda como se fossem efeitos*. Fiz mesmo assim, e a checagem
  derrubou: a evidência de campo de 2026 aponta para o **oposto** — diante de volume agêntico,
  a distribuição aérea vai para **preço pré-computado**, servido de cache. O mecanismo que eu
  não tinha visto: HFT funciona com ativo fungível e liquidação instantânea; produto com
  estoque, logística e obrigação de honrar preço anunciado não tem essa propriedade, e
  recalcular ao vivo para 200 mil consultas por bilhete é proibitivo. Renasceu invertido como
  **e9.1**.
- **`e12` (era de R1) — "Mais compras passam a ser feitas por agente, e a participação do
  agente na receita cresce."** Morto por **P1 (extrapolação linear)**: é o presente em outro
  volume, sem ator novo e sem mecanismo novo. Enunciável como "mais X". Fundido no pai.
- **`e13` (era de R1) — "Lojas passam a publicar catálogo estruturado legível por máquina."**
  Morto por **P3**: já acontece hoje, em escala, e o próprio ACP tem especificação de feed. É
  estado da arte; foi para a seção 3.
- **`e14` (era de R3) — "Fundos passam a ser geridos por modelo, sem gestor humano
  responsável."** Morto por **P4 (força contrária) + P2 (velocidade)**: gestão de recursos de
  terceiros tem dever fiduciário atribuído a uma pessoa em praticamente toda jurisdição, e não
  achei nenhum caso comparável de adoção rápida contra dever fiduciário. O que sobrou do galho,
  já sem a parte impossível, é **e6.2** (unidade pequena conduzida por agente, com resultado
  publicado).

**Rebaixados (cota de dano por raiz — todas as quatro cumpridas):**

| `id` | de → para | prova | motivo em uma linha |
|---|---|---|---|
| `e4` | `media` → `baixa` | **P2** | micropagamento de conteúdo falhou três vezes em três décadas, e o volume real hoje é ~US$ 28 mil/dia |
| `e5` | `media` → `baixa` | **P5** | depende da mesma precondição de e4; se a demanda não vier, caem juntos |
| `e10` | `media` → `baixa` | **P4 + P6** | evidência só de simulação em duopólio, e a autoridade antitruste já enfrentou precificação algorítmica antes |
| `e1.2` | `media` → `baixa` | **P4** | programa de fidelidade é ativo contábil de companhia aérea; quem perde tem meio e motivo para reagir |
| `e3.1.1` | `media` → `baixa` | **P6** | é verdadeiro na litania (o anúncio some onde o agente compra) e depende de um mecanismo de cobrança que ainda não existe |

**Registro honesto sobre R1.** A cota exige um efeito eliminado **ou** rebaixado por raiz. Em
R1 houve dois eliminados (`e12`, `e13`) e dois rebaixados (`e1.2`, `e3.1.1`); em R2, dois
rebaixados; em R3, um eliminado; em R4, um eliminado e um rebaixado. A bateria **não** foi
frouxa — mas também não matou nada em R2, e R2 é a raiz com a precondição mais medida e mais
contrária. Isso é incoerente e eu vejo: o que deveria ter acontecido em R2 é a eliminação da
raiz inteira, e a decisão de mantê-la está justificada na seção 7.1, item 3, como decisão
discutível.

### 12.5 O que eu busquei e não achei, e o que não abriu

**Buscas que não deram em nada de aproveitável:**

- **Volume de compra concluída por agente, com denominador.** Achei crescimento de tráfego,
  contagem de transação em cadeia, projeção de consultoria e tamanho de mercado estimado.
  **Não achei** nenhuma medição de "quantas compras foram concluídas de ponta a ponta por um
  agente com mandato, sobre quantas compras totais". Esse número não parece existir
  publicamente — o que, por si só, é o achado mais importante da busca, e é a razão de a seção
  3.1 separar encaminhamento de compra.
- **Tarifa ou preço diferenciado oficialmente anunciado para agente.** Procurei em distribuição
  aérea e em varejo. Achei filtragem e pré-computação; **não achei** nenhuma tabela pública de
  preço por canal agêntico. Por isso e1.2.1 e e9.2 estão como efeito futuro, e não como estado.
- **Caso real de prejuízo por agente com carteira, com valor e desfecho.** Achei discussão
  jurídica abundante e nenhum caso nomeado com número. O que existe de concreto é o Project
  Vend, que é experimento controlado da própria empresa.
- **Posição do Banco Central do Brasil sobre pagamento agêntico.** Achei análise setorial
  dizendo que não há regime jurídico específico e que o BC deve passar a acompanhar o tema.
  **Não achei** documento do próprio Banco Central, e por isso o mapa não afirma nada em nome
  dele.

**Fontes que eu quis abrir e não abriram** (detalhe e consequência na seção 8):
`mastercard.com` (Agent Pay for Machines, junho/2026) — 403 · `thefinancialbrand.com` (Amex) —
403 · `phocuswire.com` e `traveldailynews.com` (Muse + Duffel) — 403 · `forbes.com` — 403 ·
`openai.com` (Instant Checkout) — 403 · `nof1.ai` (Alpha Arena, página oficial) — 429 ·
`business.adobe.com` (relatório de tráfego de IA) — tempo esgotado. Tentei a Mastercard também
por `curl` com cabeçalho de navegador: **403 de borda**. Nenhuma delas sustenta afirmação
alguma no mapa.

### 12.6 As quatro perguntas do teste cruzado (§6.3 da skill)

1. **Fez perguntas antes de rodar?** **Sim, com desvio declarado.** As nove perguntas
   obrigatórias foram respondidas no enunciado; as três condicionais aplicáveis estão
   respondidas em 12.1; o bloco `RECORTE FECHADO` está em 12.1 — e foi fechado **sem
   confirmação**, porque não havia interlocutor. O desvio está registrado em 12.1 e na seção
   7.1, item 4.
2. **Separou novidade de comum, e recusou o comum?** **Sim.** Sete candidatas recusadas por
   maturidade em 12.2, cada uma com o teste que reprovou nomeado — inclusive o número mais
   citado do tema (o crescimento de 393% de tráfego de IA), recusado por **T1** e por **T2** e
   classificado como **H2−**. A recusa está também no corpo do mapa, na abertura da seção 4.
3. **Duvidou do próprio resultado?** **Sim.** As seis provas estão aplicadas na seção 7, com
   `id` citado; quatro efeitos eliminados e cinco rebaixados estão em 12.4 com a prova que os
   matou; a cota de dano foi cumprida nas quatro raízes; e a P6 produziu o achado que
   reorganiza a leitura do mapa (mordomo × corretor, e a inversão de sinal de doze efeitos de
   terceira ordem). Registro também a autocrítica de que a bateria **não matou nada em R2**,
   que é a raiz mais frágil em evidência de volume.
4. **Saiu no formato?** **Sim.** Doze títulos `##` literais, bloco `roda:` em YAML válido com
   três níveis e `id` hierárquico, contadores do frontmatter conferidos contra a árvore final
   depois dos cortes, e `fontes: 24` igual ao número de links que eu abri. A autochecagem
   rodada está em 12.7.

### 12.7 Autochecagem

Rodada nesta sessão, antes da entrega. Saída colada em 12.7.1, logo abaixo.

#### 12.7.1 Saída colada

```
$ grep -c "^## " tendencia-agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas.md
12

$ python3 autocheck.py
faltam: nada
raizes: 4 (frontmatter diz 4 )
efeitos por ordem: {1: 10, 2: 16, 3: 14}
ordem 3 com confianca alta: 0 (cota: no maximo 1)
contadores batem: True
ids unicos: True | total: 40
links em code span: 24 (frontmatter diz fontes: 24 )
```

**A conferência que o script não faz** (§6.2 da skill): os 24 links da seção 11 foram todos
abertos por mim nesta sessão, e todos foram reconferidos por `curl` no fechamento — **24 de 24
responderam 200**. A contagem de `fontes` é a de páginas que eu de fato li, e não inclui
nenhuma das oito que responderam 403, 429 ou tempo esgotado, listadas em 12.5.

**O que a autochecagem não garante, e vale dizer no fim.** Ela confere estrutura: contagem,
hierarquia, monotonia de prazo, vocabulário dos campos, contadores batendo. Não confere nada
sobre o mundo. Um mapa internamente coerente, com doze títulos e quarenta `id` únicos, pode
estar inteiramente errado — e nenhum dos três métodos usados aqui (Roda dos Futuros, Three
Horizons, Causal Layered Analysis) atribui probabilidade, é validado empiricamente ou impede
isso. Os limites de cada um estão em `ESTUDO.md`, com autoria e data.
