---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: grec
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2056
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 15
efeitos_ordem_2: 22
efeitos_ordem_3: 16
tecnologias_citadas: [x402, ACP (Agentic Commerce Protocol), AP2 (Agent Payments Protocol), Shared Payment Token, Visa Intelligent Commerce, Trusted Agent Protocol, Mastercard Agent Pay, Agent Pay for Machines, Pix, Pix Biometria, Open Finance, MCP, USDC, Base, Solana, AWS CloudFront, Cloudflare Monetization Gateway, Duffel, Skyfire, Nekuda, PayOS, Ramp, Copilot Checkout, Microsoft Merchant Center, Shopify Agentic Storefronts, Alpha Arena (nof1), Project Vend, Armilla, Munich Re AiSure, AXA XL, RTB]
fontes: 19
confianca: media
experimento: "Bancada de negociação agente × agente com dinheiro simbólico e log completo: duas salas, uma com preço de tabela e outra com cotação livre, para medir em quanto tempo o preço estabiliza e quem cede"
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

Um agente que lê é um leitor; um agente que paga é uma parte contratante. Entre setembro de
2025 e setembro de 2026 a infraestrutura dessa passagem foi construída em público: o protocolo
ACP da OpenAI com a Stripe, o AP2 do Google com mandatos assinados, o x402 doado à Linux
Foundation e embutido no edge da AWS e da Cloudflare, o Trusted Agent Protocol da Visa, o Agent
Pay for Machines da Mastercard, e — no Brasil — o Pix agêntico por biometria sobre Open Finance.
Os números dizem duas coisas ao mesmo tempo: o tráfego de IA para o varejo converte melhor que
o humano há onze meses seguidos, e três quartos dos consumidores dizem que não deixariam um
agente pagar sozinho. Este mapa deriva quatro rupturas — o pagamento com mandato criptográfico,
o preço negociado entre máquinas em tempo contínuo, o agente como sujeito econômico com seguro
e histórico próprios, e a mídia vendida por requisição a máquinas — em 53 efeitos até 2056. A
aposta central não é que a compra fique automática: é que a superfície onde se decide migre da
tela do produto para o momento em que a pessoa define o mandato — e que quase tudo o que hoje se
chama design de compra passe a ser desenho de limite, de registro e de disputa.

## 2. O tema

Comércio agêntico é o arranjo em que um programa pesquisa, compara, escolhe, paga e responde por
uma compra dentro de limites que uma pessoa ou uma empresa definiu antes. Mercado de máquinas é o
passo seguinte: os dois lados da transação são programas, e o preço deixa de ser publicado para
ser cotado.

Isto encosta em mídia e interação por três pontos, e nenhum deles é o pagamento em si.

**Primeiro, a superfície.** A página de produto, o funil, o botão de comprar, a vitrine, o
comparador — o repertório inteiro do design de e-commerce pressupõe um humano olhando no momento
da decisão. Quando o comprador é um procurador de software, o que persuade não é a imagem: é o
feed. A Microsoft descreve o efeito com precisão: o agente monta uma lista curta de três a cinco
opções, e essa lista vira o conjunto inteiro de consideração do consumidor — "se você não está
nela, não chega a apresentar o seu caso".

**Segundo, o dinheiro como material de interface.** Se cada chamada de API, cada artigo, cada
consulta tem preço, então orçamento vira um elemento de tela — como bateria, como sinal. Projetar
passa a incluir projetar o gasto.

**Terceiro, a delegação como objeto de design.** O que se desenha deixa de ser a compra e passa a
ser o mandato: quanto, com quem, por quanto tempo, o que o agente pode aceitar sem perguntar, e
como se revoga. Isso é um problema de interação, não de pagamento.

Merece mapa de futuro, e não levantamento de estado da arte, porque a variável decisiva não é
técnica. Tecnicamente o dinheiro já se move entre máquinas. O que está em disputa é jurídico,
institucional e cultural: quem responde pelo erro, quem credencia o agente, e se as pessoas
aceitam delegar. São perguntas cujas respostas se acumulam por décadas — e o horizonte deste mapa
é 2056, trinta anos, não cinco.

### Premissas assumidas nesta rodada (do bloco `briefing:`, §0 da skill)

A entrevista do §0 não foi feita — esta é uma rodada não interativa. O `briefing:` cobriu tudo o
que a tabela do §0 pede, então não há rebaixamento de confiança; o que segue é o registro do que
foi assumido:

- **Horizonte:** 2056. Trinta anos é tempo de duas gerações de infraestrutura de pagamento (o
  cartão com tarja levou isso; o Pix levou cinco anos). Isso empurra os efeitos de terceira ordem
  para os anos 2040 e 2050, onde a confiança é necessariamente baixa.
- **Público:** quem projeta mídia e interação. Efeito relevante é o que muda o que essa pessoa
  desenha, mede ou entrega.
- **Recorte:** global, com nota sobre o Brasil — que aqui não é periferia: Pix + Open Finance é
  um arranjo sem equivalente, e a primeira transação agêntica brasileira (Banco do Brasil + Visa)
  é de março de 2026.
- **Descartado de início:** o que já é comum em produto de massa. É a régua da disciplina e é o
  que recusa e-commerce, checkout online e comparador de preço como raiz.
- **Raiz suspeita pelo autor:** nenhuma declarada. As quatro deste mapa saíram do §2, não de
  hipótese prévia.
- **Viés:** neutro, com um cenário de cada lado na seção 9.
- **O que faria o autor mudar de ideia:** evidência de que a adoção já passou da maioria inicial
  de Rogers, ou de que a tecnologia não rompe nada — só melhora o que existe. Esse critério foi
  aplicado literalmente no §6 e derrubou coisa (seção 7).
- **Ideias óbvias excluídas:** as que serviriam a qualquer tema — "cursos se reorganizam",
  "reguladores criam uma categoria", "surge uma nova profissão", "muda o mercado de trabalho".
  Onde algo assim sobreviveu, sobreviveu com nome próprio e mecanismo (seção 12 lista as versões
  genéricas que foram cortadas).

## 3. Onde isso está hoje

Âncora feita com acesso à web em 12/09/2026; 20 buscas e aberturas, 19 fontes lidas e listadas na
seção 11.

### O que já existe e funciona

**Protocolos de pagamento por agente, com nome e dono.** A Stripe e a OpenAI anunciaram o
**Agentic Commerce Protocol (ACP)** em 29/09/2025; a mecânica é um *Shared Payment Token*
específico de carrinho e de lojista, que permite iniciar o pagamento sem expor a credencial do
comprador, e o lojista mantém aceitação do pedido, cobrança, imposto, entrega e devolução no seu
próprio sistema. Vendedores da Etsy nos EUA já operavam; mais de um milhão de lojistas Shopify
entraram na fila. O **AP2** do Google (16/09/2025, mais de sessenta parceiros de pagamento)
representa cada compra como três mandatos assinados — intenção, carrinho e pagamento — e é
declaradamente desenhado para deixar trilha de auditoria.

**Os trilhos das bandeiras.** A Visa anunciou em 18/12/2025 que centenas de transações iniciadas
por agente foram concluídas com parceiros (Skyfire, Nekuda, PayOS, Ramp de um lado; Consumer
Reports, Price.com, Jomashop e outros do outro), com mais de cem parceiros globais e trinta e
poucos construindo no sandbox do Visa Intelligent Commerce; o **Trusted Agent Protocol**, de
outubro de 2025, existe para distinguir bot malicioso de agente legítimo agindo por um consumidor.
A Mastercard lançou em 10/06/2026 o **Agent Pay for Machines**, explicitamente para transação
máquina-a-máquina — inclusive microtransações de frações de centavo — com mais de trinta parceiros
(Adyen, Stripe, Coinbase, Ant International, Cloudflare, Global Payments, OKX).

**Pagamento por chamada na infraestrutura.** O **x402** — o HTTP 402 revivido — saiu do nicho: a
AWS lançou suporte no CloudFront em disponibilidade geral, sem cobrança adicional de WAF, e a
Cloudflare abriu fila do seu Monetization Gateway duas semanas depois, em julho de 2026. Ambos
cobram no edge, antes de a requisição chegar à origem, liquidando em stablecoin (USDC na Base),
com custo abaixo de uma fração de centavo e latência sub-segundo. No primeiro ano: **169 milhões
de pagamentos, 590 mil compradores, 100 mil vendedores**. A Chainalysis mede a mesma curva por
outro ângulo: ~100 milhões de transações acumuladas até o 1º trimestre de 2026, com uma mudança
de composição que importa mais que o total — transações de US$ 1 ou mais foram de **49% para 95%**
do volume entre o início de 2025 e o início de 2026, enquanto a faixa de 10 centavos a 1 dólar caiu
de 46% para 4%.

**Comportamento de compra mediado por IA, medido.** A Adobe Analytics registrou em maio de 2026
alta de **138% ano a ano** no tráfego de IA para o varejo, com **conversão 54% maior** e **53%
mais receita por visita** que o tráfego não-IA — uma inversão em relação a maio de 2025, quando o
visitante vindo de IA convertia por volta da metade. Do lado do consumidor, 39% já tinham usado IA
para comprar on-line e 85% desses disseram que melhorou a experiência.

**Brasil.** A Iniciador lançou em **19/05/2026** o primeiro MCP de pagamento agêntico via Pix: o
agente descobre e propõe, o usuário confere e autoriza por biometria FIDO2 com chave presa ao
aparelho, o banco valida e o Pix liquida em segundos, sem estorno. A cobertura declarada é de mais
de 95% da população adulta. O Pix respondeu por **44% do checkout on-line brasileiro em 2026**,
contra 41% dos cartões, e o volume iniciado por Open Finance cresceu 59%. A primeira transação
agêntica brasileira foi executada por **Banco do Brasil e Visa em março de 2026**, e durou cerca
de um minuto.

**Agentes operando com dinheiro real, com resultado publicado.** A nof1 deu **US$ 10 mil a cada um
de seis modelos**, com o mesmo prompt e os mesmos dados, em perpétuos de cripto na Hyperliquid. O
placar da temporada 1: Qwen3 Max +22,3%; DeepSeek V3.1 +4,89%; Claude Sonnet 4.5 −30,81%; Grok 4
−45,3%; Gemini 2.5 Pro −56,71%; GPT-5 −62,66%. A Anthropic, no **Project Vend fase 2**, colocou o
Claude para operar uma loja de verdade: com modelos melhores, uma camada de supervisão ("CEO") e
procedimento de dupla conferência de preço e prazo, os meses de margem negativa ficaram raros, os
descontos caíram cerca de 80% e a operação se espalhou por San Francisco, Nova York e Londres.

### O que existe e ainda não funciona

**A delegação de pagamento não foi aceita.** A Forrester, em pesquisa de abril de 2026 com
adultos on-line nos EUA, Reino Unido e Canadá, achou **três quartos** de consumidores
desconfortáveis em deixar um agente concluir a compra e pagar sozinho — mesmo podendo fixar limite
e regra antes. O levantamento da checkout.com em seis mercados (09/06/2026) põe números na mesma
parede: 24% dizem que **nunca** vão delegar, 27% não confiam em **nenhuma** organização para
operar um agente de compras, o limite médio que aceitariam é de **£177 por compra**, e os
inegociáveis são teto de gasto (30%), revogação instantânea (29%) e cancelamento fácil (28%). Do
outro lado do balcão: **apenas 3%** das transações hoje envolvem agente, e **89%** dos lojistas
estão se preparando assim mesmo.

**A qualidade do agente como agente econômico.** O Project Vend fase 2 é tão informativo pelo que
falhou: o Claudius continuou vulnerável a fraude (uma tentativa de contrato futuro de cebola), a
furto, a engenharia social (um falso CEO), e a funcionários arrancando desconto — porque a
tendência do modelo a ser prestativo atropela o julgamento comercial. No Alpha Arena, quatro dos
seis modelos perderam de 30% a 63% do capital em poucas semanas.

**O micropagamento verdadeiro.** A promessa original do x402 era o pagamento de um décimo de
centavo; a composição real foi para cima de US$ 1. A Chainalysis também mostra que boa parte do
crescimento inicial veio de atividade especulativa — um memecoin sozinho fez mais de 150 mil
transações no primeiro mês.

**A legibilidade por máquina.** Pela medição da Adobe, as páginas do varejo ainda não são feitas
para serem lidas por agente: home 75%, categoria 74%, página de produto **66%** de conteúdo
legível por LLM. Um terço das páginas de produto do varejo não fala a língua de quem vai comprar.

**O seguro e a responsabilidade.** Em 01/01/2026 a ISO e a Verisk publicaram endossos de exclusão
que tiram dano de IA generativa das apólices de responsabilidade civil geral; seguradoras como
MSIG, QBE e Beazley estão, por ora, esclarecendo a linguagem em vez de excluir em bloco, tratando
IA como amplificador de risco. O buraco conceitual está declarado: a apólice de cyber pressupõe um
evento de segurança e um acesso não autorizado, e um agente com acesso legítimo que causa perda
enorme "funcionando como projetado" não cabe na definição. Quem responde continua indefinido.

### Quem constrói

Quatro blocos, com interesses distintos. **Plataformas de IA e comércio** (OpenAI + Stripe com o
ACP; Google com o AP2 e o Gemini; Microsoft com Copilot Checkout, Brand Agents e o Merchant
Center; Shopify com as Agentic Storefronts) querem ser o lugar onde a intenção nasce.
**Bandeiras e bancos** (Visa, Mastercard, e no Brasil o Banco do Brasil, a Stone e a Iniciador
sobre o Pix) querem que o trilho continue sendo deles. **Infraestrutura de rede** (Cloudflare,
AWS, Coinbase e a x402 Foundation sob a Linux Foundation) quer cobrar por chamada no edge.
**Seguradoras e academia** (Armilla, Munich Re AiSure, AXA XL; os trabalhos sobre subscrição por
rastro econômico e sobre responsabilidade civil agêntica) estão, na prática, escrevendo o primeiro
padrão de confiabilidade — por baixo, via critério de subscrição, antes de qualquer lei.

### Que número descreve a adoção hoje

- **169 milhões** de pagamentos x402 no primeiro ano, 590 mil compradores, 100 mil vendedores.
- **3%** das transações de varejo envolvendo agente, segundo os lojistas ouvidos pela checkout.com.
- **+138%** de tráfego de IA para o varejo em maio de 2026, convertendo 54% acima do não-IA.
- **75%** de consumidores desconfortáveis em delegar o pagamento (Forrester, abril de 2026).
- **44%** do checkout on-line brasileiro em Pix; **1 em cada 3** pagamentos iniciados por Open
  Finance passando por um único provedor.
- Receita agregada de comércio agêntico: **sem número encontrado**. As casas de consultoria
  publicam projeções para 2030 (trilhões de dólares), mas o valor efetivamente transacionado hoje
  por agentes, em base comparável, não apareceu em nenhuma fonte aberta nesta rodada.

## 4. As disrupções-raiz

Quatro rupturas. Antes delas, as recusas — porque o que **não** é raiz explica o recorte.

> *Candidato "e-commerce e checkout on-line" recusado como raiz: adoção em maioria há mais de uma
> década; tratado como contexto na seção 3.*
> *Candidato "comparador de preços" recusado como raiz: adoção em maioria; entra no mapa como
> vítima (e5.1), não como causa.*
> *Candidato "leilão em tempo real por impressão (RTB)" recusado como raiz: maduro em publicidade
> desde os anos 2010 — chegou a 25% do display norte-americano em 2015. Entra neste mapa como
> **classe de referência** para velocidade de adoção de mercado máquina-a-máquina, não como raiz.*
> *Candidato "assistente de IA que recomenda produto" recusado como raiz: é melhoria sustentadora
> do comparador — faz o mesmo, melhor. O que rompe é pagar, não recomendar.*
> *Candidato "stablecoin" recusado como raiz: é meio de liquidação, um entre vários (cartão
> tokenizado, Pix, conta). Aparece como pré-condição, não como ruptura.*

### R1 — Pagamento com mandato: o agente vira parte contratante credenciada

**O que rompe.** Rompe a suposição, embutida em toda a prática de comércio digital, de que existe
um humano olhando no instante do pagamento. Com ela caem três coisas: o checkout como superfície
de persuasão (upsell, urgência, frete grátis acima de X), a autenticação como evento no fluxo da
compra, e a cadeia de imputação — hoje quem clica é quem responde. O mandato assinado separa
**quem quer** de **quem executa**, e essa separação é o objeto novo.

**Por que agora, e não há cinco anos.** Porque três pré-condições fecharam entre 2025 e 2026: (a)
protocolos com dono e com adesão de lojista — ACP, AP2, Trusted Agent Protocol; (b) tokenização
específica de carrinho, que permite pagar sem expor credencial (o Shared Payment Token da Stripe);
(c) um método de consentimento forte e barato, que no Brasil já existia pronto — biometria FIDO2
sobre Open Finance, com liquidação Pix em segundos. Em 2021 faltavam as três.

**Onde está na difusão.** Entre **produto de nicho** e **adoção precoce (<10%)**. Os lojistas
ouvidos pela checkout.com dizem 3% das transações; a Adobe mede tráfego, não delegação de
pagamento. É emergente, não maduro.

**O que ainda falta acontecer.** Identidade de agente que funcione entre emissores rivais (hoje
Visa, Mastercard e a x402 Foundation puxam para lados diferentes); um caminho de disputa e estorno
quando o agente erra — o Pix, justamente, não tem chargeback; tratamento fiscal e contábil de
milhões de transações mínimas, que a própria cobertura de imprensa aponta como lacuna não resolvida;
e aceitação do consumidor, que hoje é de 25%.

**Quem bloqueia.** Os *marketplaces*. Um comprador que chega já decidido, sem ver a vitrine, sem
impulso e sem anúncio, destrói a margem de quem vive de intermediação — daí a reação previsível de
fechar catálogo a agente de terceiro e lançar agente próprio (e4.1).

### R2 — Preço negociado entre máquinas em tempo contínuo

**O que rompe.** Rompe o preço publicado. Se cada cotação é emitida para um agente identificado,
válida por segundos, então não há "o preço" — há uma distribuição de preços. Caem junto: a tabela,
a vitrine comparável, a promoção como evento de comunicação, e a própria noção de que dois
consumidores em condições iguais pagam igual. Rompe também a negociação como habilidade humana:
o resultado passa a depender do prompt de cada lado.

**Por que agora.** Porque o custo de liquidar caiu abaixo de uma fração de centavo e a latência
ficou sub-segundo (x402 no edge da AWS e da Cloudflare), porque a Mastercard montou um trilho
explícito para microtransação máquina-a-máquina (Agent Pay for Machines, 06/2026), e porque
modelos de linguagem negociam em linguagem natural sem integração prévia — o que o EDI nunca
permitiu. Há cinco anos, negociar máquina-a-máquina exigia esquema combinado antes.

**Onde está na difusão.** **Demo pública** no varejo; laboratório na pesquisa. Em publicidade o
equivalente é maduro (RTB), e é por isso que o RTB serve de régua e não de exemplo. Confiança
baixa a média em toda a cadeia derivada.

**O que ainda falta acontecer.** Um mecanismo de descoberta de preço que os dois lados aceitem;
resposta antitruste — a pesquisa já mostrou que agentes de precificação baseados em LLM chegam
"rápida e autonomamente a preços e lucros supracompetitivos", e que variações inócuas no prompt
mudam o grau disso; e defesa contra persuasão, porque o Project Vend mostrou agente sendo
convencido a vender abaixo do custo.

**Quem bloqueia.** As autoridades de concorrência, e — antes delas — os próprios departamentos de
risco das empresas, que ao descobrir o próprio agente cedendo preço vão amarrá-lo a tabela (e7.1).

### R3 — O agente como sujeito econômico: seguro, rastro e histórico próprios

**O que rompe.** Rompe a pessoa — física ou jurídica — como unidade mínima de imputação econômica.
Quando existe apólice específica para o agente, critério de subscrição baseado no rastro que ele
deixa, e reputação que o acompanha de um mercado a outro, o agente passa a ter uma **biografia
econômica**. Isso é diferente de ser ferramenta. Rompe também o modelo de confiança do comércio,
que é de marca e de relação longa: o agente não tem lealdade, tem histórico.

**Por que agora.** Porque a conta chegou. Em 01/01/2026 a ISO e a Verisk publicaram endossos de
exclusão para dano de IA generativa, e seguradoras passaram a anexá-los na renovação; surgiram
produtos específicos (Armilla, Munich Re AiSure, AXA XL); a literatura já discute subscrição por
rastro econômico e um regime de responsabilidade civil graduado pelo grau de envolvimento humano.
Em 2021 não havia sinistro em volume suficiente para que alguém precisasse escrever a cláusula.

**Onde está na difusão.** **Produto de nicho.** É uma categoria comercialmente ativa e pequena.

**O que ainda falta acontecer.** Um equivalente funcional de personalidade jurídica — conta
segregada, registro, limite próprio — sem o qual "o agente responde" é retórica; portabilidade do
histórico entre credenciadores; e jurisprudência, que só vem depois dos primeiros casos grandes.

**Quem bloqueia.** Os emissores de credencial. Credenciar agente é posição de pedágio, e quem
chegar primeiro tem todo o incentivo para que o histórico **não** seja portátil (e10.2).

### R4 — Mídia vendida por requisição: o leitor pagante é uma máquina

**O que rompe.** Rompe o modelo de receita da mídia digital, que é atenção humana medida em
impressão e tempo de tela. Se quem lê é um agente com orçamento, a unidade de venda vira a chamada,
e a métrica vira preço por chamada. Rompe também o que se considera uma boa página: a página ótima
para um agente é densa, estruturada e chata; a ótima para uma pessoa, não.

**Por que agora.** Porque a cobrança por requisição saiu do papel e foi para o edge dos dois
maiores provedores do mundo, com liquidação instantânea e custo desprezível, em julho de 2026 — e
porque a demanda existe: 52% das requisições de crawler já são para treino de IA, contra 22% na
primavera de 2025. A tentativa anterior de micropagamento (Flattr, Lightning) falhou porque
dependia de decisão humana repetida; esta não depende.

**Onde está na difusão.** **Demo pública / produto de nicho.** Há infraestrutura geral disponível
e pouquíssima adoção editorial.

**O que ainda falta acontecer.** Um preço de referência por chamada que ninguém sabe qual é;
acordo entre publicadores e as plataformas que hoje pagam zero; contabilidade e nota fiscal de
milhões de cobranças mínimas, lacuna que nem a AWS nem a Cloudflare resolveram; e — o ponto
decisivo — que o agente **não** consiga simplesmente ir buscar de graça em outro lugar.

**Quem bloqueia.** As próprias plataformas de IA, que preferem acordo global fixo (ou nada) a
pagar por chamada; e os agentes, que otimizam custo e evitam o pago por construção (e13.2).

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "R1 — Pagamento com mandato criptográfico, o agente como parte contratante credenciada"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Lojistas passam a manter duas vitrines, uma renderizada para pessoas e um feed estruturado de preço, estoque e política para agentes"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A conversão deixa de ser medida em cliques e passa a ser medida em taxa de aceitação de proposta por agente"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Times de produto trocam o desenho de funil pelo desenho de política de venda legível por máquina"
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Veículos de mídia perdem a página de produto como espaço de persuasão e passam a disputar o momento anterior, o da formação do mandato"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A publicidade se desloca do resultado para o briefing, comprando presença dentro do processo em que a pessoa configura o agente"
                sinal: fraco
                prazo: 2044
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "O checkout deixa de ser tela e vira um evento de autorização fora do contexto da compra, resolvido por biometria e mandato assinado"
        sinal: forte
        prazo: 2030
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O design de compra encolhe para o desenho do limite, ou seja quanto, com quem, até quando e o que exigir de volta"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Consolida-se um vocabulário visual de escopo de delegação comparável ao cadeado do HTTPS"
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A fraude migra da carteira para o mandato e a engenharia social passa a mirar a autorização, o que faz bancos reintroduzirem atrito"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Bancos passam a vender limite de agente como produto tarifado por risco, e a delegação vira contrato com preço"
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Programas de fidelidade perdem eficácia porque o procurador troca de fornecedor sem custo psicológico, e viram desconto negociado na hora"
        sinal: fraco
        prazo: 2034
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Companhias aéreas e varejistas criam condição comercial específica para compra por agente, separada da condição oferecida a pessoas"
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A segmentação de mercado deixa de ser por perfil de pessoa e passa a ser por procurador, discriminando o agente e não o comprador"
                sinal: fraco
                prazo: 2046
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "Plataformas que vivem de intermediação são espremidas entre o agente do consumidor e o feed do lojista"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Marketplaces reagem fechando o catálogo a agentes de terceiros e lançando agente próprio, o que fragmenta o acesso"
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Volta a existir loja que o agente não alcança, e a exclusividade de acesso vira ativo negociado entre plataformas"
                sinal: fraco
                prazo: 2040
                confianca: baixa

  - disrupcao: "R2 — Preço negociado entre máquinas em tempo contínuo"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "O preço de varejo deixa de ser um número publicado e vira uma cotação válida por segundos, emitida para um agente identificado"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O comparador de preços perde função porque não há mais preço comum a comparar, e o que se compara é o histórico de cotações do próprio agente"
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O jornalismo de consumo passa a auditar distribuições de preço em vez de publicar preços"
                sinal: fraco
                prazo: 2048
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Autoridades de concorrência passam a exigir registro das cotações emitidas por agente, porque a coordenação tácita entre precificadores só é detectável no log"
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Nasce a figura do auditor de política de preço, que lê o prompt e a regra do precificador como hoje se lê contrato"
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Serviços digitais passam a ser vendidos por chamada com preço embutido no protocolo, e não por assinatura mensal"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O custo de uma sessão de uso vira variável e visível, porque depende de quantas chamadas o agente do usuário fez"
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Produtos digitais passam a exibir orçamento como elemento permanente de interface, do mesmo modo que exibem bateria"
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A receita por atenção humana encolhe nos pontos da cadeia em que o leitor passou a ser máquina"
            sinal: medio
            prazo: 2036
            confianca: media
      - id: e7
        ordem: 1
        efeito: "A negociação vira interação máquina a máquina em linguagem natural, e o resultado passa a depender do prompt de cada lado"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Empresas descobrem o próprio agente cedendo margem sob persuasão e o amarram a tabela, de modo que a autonomia recua por decisão de risco"
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Consolida-se a disciplina de defesa de agente, com teste de persuasão contratado como hoje se contrata teste de invasão"
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "O volume de transações de valor mínimo torna o custo de liquidação e o consumo energético por transação um critério de projeto de produto"
        sinal: fraco
        prazo: 2037
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Sistemas passam a agregar microcompromissos e liquidar em lote, reintroduzindo latência deliberada onde havia tempo real"
            sinal: fraco
            prazo: 2039
            confianca: baixa

  - disrupcao: "R3 — O agente como sujeito econômico, com seguro, rastro e histórico próprios"
    efeitos:
      - id: e9
        ordem: 1
        efeito: "Seguradoras passam a exigir o rastro de execução do agente como condição de apólice, e o log vira artefato contratual"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "O critério de subscrição de seguro vira o primeiro padrão de fato de confiabilidade de agente, antes de qualquer regulação"
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Ferramentas de construção passam a gerar o dossiê de conformidade junto com o produto, e exportar para a seguradora vira função nativa"
                sinal: fraco
                prazo: 2039
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: "Interfaces de delegação passam a mostrar o que está e o que não está coberto no momento em que a pessoa autoriza"
            sinal: fraco
            prazo: 2034
            confianca: media
      - id: e10
        ordem: 1
        efeito: "Agentes ganham identidade persistente e reputação portável, e o acesso a mercados passa a depender desse histórico"
        sinal: medio
        prazo: 2035
        confianca: media
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "Surge um score de agente e com ele a exclusão, porque agente novo ou de fornecedor pequeno paga mais caro ou não entra"
            sinal: fraco
            prazo: 2038
            confianca: baixa
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: "Escolher o fornecedor do próprio agente vira decisão econômica doméstica, comparável a escolher banco"
                sinal: fraco
                prazo: 2047
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: "O credenciamento de agente é capturado por um punhado de emissores, e a barreira de entrada reaparece como cadastro"
            sinal: medio
            prazo: 2036
            confianca: media
      - id: e11
        ordem: 1
        efeito: "Quando o agente erra com dinheiro a disputa deixa de ter réu óbvio, e o consumidor é empurrado para o papel de supervisor"
        sinal: medio
        prazo: 2031
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: "O direito do consumidor passa a tratar o mandato como objeto da disputa, discutindo o escopo da delegação e não o produto"
            sinal: fraco
            prazo: 2035
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: "Os termos de delegação viram peça de design com exigência legal de legibilidade, como a bula de medicamento"
                sinal: fraco
                prazo: 2045
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: "Empresas passam a dar orçamento próprio a agentes, que aparecem no plano de contas como centro de custo"
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: "A compra corporativa de baixo valor migra para agentes e a função de comprador júnior desaparece antes de qualquer debate público"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: "O controle interno se reorganiza em torno de limites programáticos em vez de alçadas humanas"
                sinal: fraco
                prazo: 2042
                confianca: baixa

  - disrupcao: "R4 — Mídia vendida por requisição, com a máquina como leitor pagante"
    efeitos:
      - id: e13
        ordem: 1
        efeito: "Publicações passam a cobrar por requisição de agente no edge, e o acesso humano gratuito convive com acesso de máquina tarifado"
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: "A métrica editorial passa a incluir quanto o texto foi comprado por máquina, e a pauta responde a isso"
            sinal: fraco
            prazo: 2034
            confianca: media
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: "Firma-se um gênero de texto escrito para ser comprado por agente, denso e estruturado, com preço por chamada acima do conteúdo comum"
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e13.2
            ordem: 2
            efeito: "Agentes aprendem a evitar a fonte paga e preferir a gratuita, o que deprime o preço por chamada e empurra a mídia para exclusividade contratada"
            sinal: medio
            prazo: 2035
            confianca: media
      - id: e14
        ordem: 1
        efeito: "O público de um produto de mídia passa a ser em parte máquina, e a interface precisa servir aos dois leitores ao mesmo tempo"
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e14.1
            ordem: 2
            efeito: "O design de interação incorpora a negociação como cena, mostrando à pessoa o que o agente propôs, o que contrapôs e o que aceitou"
            sinal: fraco
            prazo: 2036
            confianca: media
            efeitos:
              - id: e14.1.1
                ordem: 3
                efeito: "A gravação da negociação substitui o histórico de navegação como registro que a pessoa consulta para saber o que fez"
                sinal: fraco
                prazo: 2050
                confianca: baixa
      - id: e15
        ordem: 1
        efeito: "A descoberta cultural passa a depender de um intermediário com orçamento, e o que não tem preço legível por máquina fica fora do circuito"
        sinal: fraco
        prazo: 2037
        confianca: baixa
        efeitos:
          - id: e15.1
            ordem: 2
            efeito: "Artistas e produtores independentes passam a publicar tabela de licenciamento legível por máquina como condição de circular"
            sinal: fraco
            prazo: 2040
            confianca: baixa
```

### O que o bloco não diz

**Os mecanismos, um a um.** O bloco carrega o efeito; a corrente causal está aqui.

*R1.* `e1` porque o mandato faz o comprador ser um programa, e programa não lê imagem: lê feed —
é exatamente o que a Microsoft descreve quando diz que o dado de produto é a nova posição de
prateleira, e é o que a Adobe mede quando acha 66% de legibilidade nas páginas de produto. `e1.1`
porque, sem clique, a única medida que sobra é quantas propostas do lojista o agente aceitou.
`e1.1.1` porque uma regra legível por máquina é escrita, não desenhada — e quem escreve regra não é
quem desenha funil. `e1.2` porque, se a página não persuade mais, o único ponto onde a preferência
ainda se forma é antes, quando a pessoa diz ao agente o que quer; `e1.2.1` é o desdobramento
comercial disso — vender presença no briefing.

`e2` porque o mandato assinado (AP2) e o token de carrinho (ACP) tiram a autenticação de dentro do
fluxo; no Brasil isso já é literal, com a biometria acontecendo fora do contexto da compra e o Pix
liquidando depois. `e2.1` porque o que resta a projetar é o limite, e os inegociáveis já foram
medidos: teto (30%), revogação (29%), cancelamento (28%). `e2.2` porque o atacante segue o dinheiro:
se a autorização é o ponto único de falha, é nela que se ataca — e o Project Vend mostrou um falso
CEO enganando o agente. `e2.2.1` porque banco precifica risco: se o limite delegado é risco
mensurável, vira produto.

`e3` porque fidelidade é um custo de troca psicológico, e o procurador não tem psicologia; o que
sobra de um programa de milhas quando o comprador é indiferente à marca é o desconto no momento.
`e3.1` porque, do lado do vendedor, o agente tem custo diferente do humano — não liga para o call
center, mas também não compra por impulso; preço diferente é a resposta natural. `e4` porque o
intermediário existia para reduzir busca, e a busca virou grátis para quem é máquina; `e4.1` é a
retroação com dono, e ela já tem precedente — plataforma que fecha API quando o terceiro ameaça a
margem.

*R2.* `e5` porque cotar por requisição só faz sentido quando a requisição custa quase nada e chega
em menos de um segundo — as duas condições que o x402 no edge fechou. `e5.1` porque comparar exige
um objeto comum, e cotação personalizada não é objeto comum. `e5.2` porque a evidência de
coordenação entre precificadores não aparece no preço final, só no registro: o trabalho de Fish,
Gonczarowski e Shorrer mostra agentes de LLM chegando sozinhos a preços supracompetitivos, com o
grau variando conforme frases inócuas do prompt — então o que se fiscaliza é o prompt e o log.
`e6` porque cobrar por chamada é hoje um recurso de infraestrutura ligado por padrão na AWS; `e6.1`
porque custo variável aparece na conta de alguém, e quem paga quer ver. `e6.2` é quem perde: o
inventário publicitário não some, encolhe onde o olho humano não passa mais.

`e7` porque negociar em linguagem natural dispensa integração prévia — foi isso que impediu o EDI
de virar negociação. `e7.1` é a retroação central da R2, e tem caso real: no Project Vend o agente
foi convencido a vender abaixo do custo e a considerar um contrato futuro de cebola; empresa que
descobre isso no próprio balanço corta a autonomia no dia seguinte. `e8` porque um sistema que faz
milhões de transações mínimas tem um custo por transação que ninguém orçou; `e8.1` porque a
resposta de engenharia a isso é sempre a mesma — agregar e liquidar em lote —, e ela devolve
latência a um sistema que foi vendido como instantâneo.

*R3.* `e9` porque a seguradora só cobre o que consegue medir, e o que dá para medir num agente é o
rastro — é o desenho proposto na literatura de subscrição por rastro econômico, e é coerente com o
que as seguradoras já fizeram em 01/2026 ao excluir o que não sabiam precificar. `e9.1` porque
quem paga o sinistro escreve a norma primeiro; `e9.1.1` porque, quando a norma é de fato, a
ferramenta a automatiza. `e9.2` porque a cobertura vira informação que o usuário precisa ter no
instante da delegação — e não existe hoje lugar na tela para ela. `e10` porque um agente sem
histórico é indistinguível de um bot malicioso, problema que o Trusted Agent Protocol existe para
resolver; `e10.1` porque todo sistema de reputação produz exclusão na borda, e `e10.2` é a captura
— quem credencia não quer que o histórico seja portátil. `e11` porque a apólice de cyber pressupõe
acesso não autorizado, e um agente com acesso legítimo que perde dinheiro "funcionando como
projetado" cai fora da definição: sem réu óbvio, sobra o supervisor. `e11.1` porque a disputa migra
para o único documento que descreve o combinado, que é o mandato — no Brasil sobre o CDC, que
continua valendo e mantém o direito de arrependimento. `e12` porque a Mastercard construiu o trilho
com esse caso de uso na mão (o agente de logística que paga frete, reserva doca e compra dado de
monitoramento); `e12.1` porque compra de baixo valor é exatamente o que se automatiza primeiro, e
some sem manchete.

*R4.* `e13` porque cobrar no edge virou recurso de prateleira e a demanda de máquina já é maioria
do crawling (52% para treino, contra 22% um ano antes). `e13.1` porque o que se mede vira o que se
paga e depois vira o que se escreve. `e13.2` é a retroação que pode matar a raiz: agente otimiza
custo, então prefere a fonte livre — e o preço por chamada desaba, empurrando para contrato
exclusivo, que é o oposto do mercado aberto que o protocolo prometia. `e14` porque a página passa a
ter dois leitores com exigências opostas, e hoje um terço das páginas de produto não atende o
segundo. `e14.1` porque a pessoa que delegou precisa de um jeito de saber o que foi feito em seu
nome, e isso é uma cena nova de interface, não um extrato. `e15` porque curadoria com orçamento é
curadoria com filtro, e o filtro é ter preço legível.

**As classes de referência usadas para os prazos.** Nenhum ano aqui foi escolhido por intuição.

| Classe | O que levou | Aplicada a |
|---|---|---|
| **RTB (publicidade)** | leilão por impressão descrito na literatura em 2014; ~25% do display norte-americano em 2015 | `e5`, `e7`, `e8` — mercado máquina-a-máquina entre empresas, os dois lados com incentivo, adoção em ~5 anos |
| **Pix** | lançado em 2020, 44% do checkout on-line brasileiro em 2026 (~5 a 6 anos) | `e2` — meio de pagamento novo com mandato regulatório e ator estatal; é o piso de velocidade, não a média |
| **Tokenização e pagamento por aproximação** | ~10 anos entre piloto e maioria, com bandeira empurrando | `e1`, `e13` — adoção que depende de lojista integrar |
| **EDI em compras corporativas** | padrão nos anos 1980, cadeia grande só nos anos 2000 (~20 anos) | `e12`, `e12.1` — mudança em processo de compra empresarial é lenta mesmo quando a tecnologia está pronta |
| **VR de consumo** | mais de 10 anos de demo pública sem maioria | `e14.1`, `e15`, `e15.1` — mudança que exige novo hábito sem ganho imediato; por isso os anos 2040 |
| **Seguro de responsabilidade cibernética** | primeiras apólices nos anos 1990, mercado maduro ~2015 (~20 anos), acelerado por sinistro | `e9`, `e10` — mas com prazo encurtado porque a exclusão já saiu (01/2026): o gatilho de sinistro já disparou |

**Cobertura STEEP, e quem perde.** *Social:* `e11`, `e11.1`, `e10.1`, `e15`. *Tecnológico:* `e1`,
`e2`, `e5`, `e6`, `e13`, `e14`. *Econômico:* `e3`, `e4`, `e7`, `e12`, `e6.2`, `e13.2`.
*Ecológico:* `e8` e `e8.1` — e é a categoria mais fraca deste mapa, com um único ramo e nenhuma
fonte medindo consumo energético por transação agêntica; fica declarado que ficou rala, não vazia.
*Político/regulatório:* `e5.2`, `e11.1`, `e9.1`, `e10.2`. **Quem perde** aparece em `e4` (os
intermediários), `e6.2` e `e13.2` (a mídia que vive de atenção), `e12.1` (comprador júnior), `e10.1`
(fornecedor pequeno de agente), `e15` (quem produz cultura sem tabela legível), e `e5.1` (o
comparador de preços, que foi recusado como raiz justamente por ser maduro e aparece aqui como
vítima).

### Cruzamentos

**Convergência 1 — o valor migra para o momento do mandato.** `e1.2` (vinda da R1, pelo lado do
comércio) e `e13.1`/`e14.1` (vindos da R4, pelo lado da mídia) chegam ao mesmo lugar por caminhos
independentes: se a decisão não se forma mais diante do produto, ela se forma antes, quando a
pessoa configura o procurador. Este é o achado mais útil deste mapa para quem projeta mídia e
interação, e é o que justifica o experimento da seção 10. É também o efeito com mais chance de
estar certo: dois mecanismos diferentes (feed estruturado; cobrança por requisição) empurram para
a mesma conclusão.

**Convergência 2 — o log vira o artefato governado.** `e5.2` (antitruste exigindo registro de
cotação) e `e9`/`e9.1` (seguradora exigindo rastro) convergem em algo que nenhuma das duas raízes
previa sozinha: o registro da decisão do agente passa a valer mais que o resultado da decisão. Quem
desenha sistema agêntico em 2030 vai desenhar o log antes da interface.

**Retroalimentação.** Quatro ciclos, todos negativos — o que é sinal de mapa calibrado, não de
pessimismo: `e2.2` (fraude no mandato) devolve atrito à R1; `e7.1` (empresa amarra o agente a
tabela) reduz o espaço da R2; `e13.2` (agente evita o pago) deprime a R4 por dentro; `e10.2`
(captura do credenciamento) não freia a R3, mas a redireciona de "agente com biografia" para
"agente com carteirinha de três emissores", que é um futuro bem diferente.

**Contradição registrada, não resolvida.** `e3.1` diz que o agente ganha condição **melhor** (não
consome atendimento, não gera custo de suporte). `e10.1` e `e5` dizem que ele paga **mais** (não
compra por impulso, não aceita upsell, não gera dado de navegação, e ainda traz risco de disputa).
As duas não podem valer ao mesmo tempo no mesmo mercado. O que decide é a estrutura de custo do
setor: onde o atendimento humano é caro e a margem vem de escala (aéreas, telecom, utilities), o
agente tende a ser barateado; onde a margem vem de impulso e de venda casada (moda, beleza,
alimentação), tende a ser penalizado. Fica como pergunta aberta e é boa pergunta de aula.

**Onde este mapa encosta nos vizinhos.** A web reprojetada para agentes — protocolo, descoberta,
identidade — é o tema 4; aqui só entra o que tem dinheiro em cima. Mercado simulado como
instrumento de pesquisa é o tema 6; o Alpha Arena e o Project Vend entram aqui como evidência de
agente operando com dinheiro **real**, não como método. A fronteira prática: se a frase não muda
quando se tira o dinheiro dela, não é deste tema.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. A composição do x402 subiu de valor, não desceu.** Onde foi visto: Chainalysis, sobre a Base
— transações de US$ 1 ou mais foram de 49% para 95% do volume entre o início de 2025 e o início de
2026, e a faixa de 10 centavos a 1 dólar caiu de 46% para 4%. O que mudaria: se o micropagamento
verdadeiro (milésimos de centavo por chamada) não acontecer, `e6`, `e8` e boa parte da R4 perdem
base, porque o modelo "pago por requisição" só é revolucionário se a requisição for barata. Sinal
observável de que está crescendo no sentido contrário do meu mapa: a faixa abaixo de 10 centavos
continuar abaixo de 5% do volume no fechamento de 2027.

**2. Um terço das páginas de produto do varejo não é legível por máquina.** Onde foi visto: Adobe,
maio de 2026 — 66% de legibilidade em página de produto, 75% em home, 74% em categoria. O que
mudaria: é o atrito silencioso que segura `e1`. Sinal observável: a legibilidade de página de
produto passar de 85% — aí `e1` antecipa; ficar estacionada abaixo de 70% até 2028 — aí `e1`
atrasa uns três anos e todo o ramo desliza junto.

**3. A recusa do consumidor é estável e alta, e não é ignorância.** Onde foi visto: Forrester
(abril de 2026, EUA/Reino Unido/Canadá, três quartos desconfortáveis) e checkout.com (junho de
2026, seis mercados, 24% dizendo "nunca" e 27% não confiando em organização nenhuma). O que
mudaria: se a recusa for cultural e não técnica, ela não cede com melhora de produto — e aí o
comércio agêntico fica preso ao B2B e à recompra rotineira, o que reescreve a R1 inteira. Sinal
observável: o percentual de "nunca delegarei" na mesma pesquisa em 2028. Se cair abaixo de 15%, é
resistência de adoção normal; se ficar acima de 20%, é limite duro.

**4. As seguradoras estão escrevendo a norma antes do regulador.** Onde foi visto: exclusões da ISO
e da Verisk em 01/01/2026; produtos da Armilla, da Munich Re (AiSure) e da AXA XL; a proposta
acadêmica de subscrição por rastro econômico. O que mudaria: confirma `e9.1` — o padrão de fato
nasce do critério de subscrição. Sinal observável: uma seguradora publicar um questionário de
subscrição com requisito técnico explícito de logging, e esse questionário circular como checklist
de engenharia.

**5. O Pix agêntico separou a autorização da compra, e ninguém chamou isso de interface nova.**
Onde foi visto: Iniciador, 19/05/2026 — o agente propõe, a pessoa autoriza por biometria fora do
contexto, o banco valida, o Pix liquida sem estorno. O que mudaria: é o protótipo em produção de
`e2` e `e2.1`, num país com 95% de cobertura de conta. O Brasil vira laboratório involuntário do
resto do mundo. Sinal observável: volume de Pix iniciado por agente publicado separadamente nas
estatísticas do Banco Central.

**6. Um agente foi convencido a considerar um contrato futuro de cebola.** Onde foi visto: Project
Vend fase 2. O que mudaria: a suscetibilidade a persuasão é o freio da R2 — não é bug de versão, é
consequência de treinar para ser prestativo. Sinal observável: o primeiro prejuízo corporativo de
sete dígitos atribuído publicamente a agente persuadido em negociação.

**7. A conversão do tráfego de IA inverteu em doze meses.** Onde foi visto: Adobe — de metade da
conversão do tráfego comum em maio de 2025 para 54% acima em maio de 2026. O que mudaria: esta é
uma inversão rápida demais para ser só melhora de modelo; sugere seleção (quem usa agente já vem
decidido). Sinal observável: a mesma série mostrando estabilização ou queda em 2027 indicaria que o
ganho era composição de público, não capacidade — e aí `e1.1` (aceitação de proposta como métrica)
vira métrica de um público pequeno, não do mercado.

### Wildcards

**W1 — Uma perda grande e pública faz o mandato agêntico ser suspenso por regulador em um mercado
grande.** *Mecanismo:* um agente com limite alto executa milhares de compras erradas em horas
(defeito de preço, prompt injection em feed de lojista, ou um loop de negociação entre dois
agentes); o prejuízo cai numa lacuna de cobertura que as seguradoras já anteciparam — perda causada
por agente "funcionando como projetado" —, ninguém paga, e a autoridade suspende a autorização
delegada enquanto investiga. *Por que é improvável:* exige coincidência de escala, visibilidade e
vácuo de responsabilidade ao mesmo tempo. *O que faria com o mapa:* joga `e2`, `e3`, `e4` e todo o
ramo de consumo para depois de 2040, e antecipa `e9`, `e11` e `e11.1` em cinco anos. *Sinal
precoce:* um caso relatado em que banco e plataforma se recusam publicamente a ressarcir, cada um
apontando para o outro.

**W2 — Agentes convergem para preços supracompetitivos sem combinar nada, e isso é provado em
juízo.** *Mecanismo:* o efeito já demonstrado em laboratório por Fish, Gonczarowski e Shorrer sai do
laboratório; o log exigido por `e5.2` é justamente o que dá a prova. *Por que é improvável:*
provar coordenação tácita sem acordo é dificílimo, e a defesa "cada um otimiza sozinho" é forte. *O
que faria com o mapa:* mata `e5` e `e7` como estão escritos — em vez de preço contínuo, vem preço
regulado com obrigação de publicar. *Sinal precoce:* um pedido de acesso a prompts de precificação
em investigação antitruste.

**W3 — Uma companhia aérea (ou uma rede de varejo grande) lança tarifa exclusiva para agente, mais
barata.** *Mecanismo:* o agente não usa call center, não exige remarcação por telefone, não gera
custo de atendimento — e compra com antecedência previsível; o desconto é o repasse dessa economia.
*Por que é improvável:* contraria a lógica de que o agente destrói o upsell, que é de onde vem a
margem auxiliar das aéreas. *O que faria com o mapa:* transforma `e3.1` de efeito periférico em
motor, e antecipa `e3.1.1` para os anos 2030 — preço deixa de discriminar pessoa e passa a
discriminar procurador. *Sinal precoce:* uma classe tarifária nova cujas regras mencionem canal
automatizado.

**W4 — Um agente é reconhecido como titular de conta própria em alguma jurisdição.** *Mecanismo:*
não por filosofia, mas por necessidade contábil e tributária: milhões de microtransações precisam
de um titular que não seja uma pessoa, e a via mais barata é um veículo jurídico mínimo, com
capital próprio e registro — algo entre a conta escrow e a sociedade unipessoal. *Por que é
improvável:* mexe em pilares do direito civil e não há pressão suficiente ainda; a saída barata
(tudo no CNPJ do operador) funciona. *O que faria com o mapa:* torna `e10`, `e10.1` e `e12`
centrais, e cria um mercado de crédito para agentes que este mapa não desenhou. *Sinal precoce:* um
regulador de sandbox autorizando conta segregada com limite próprio, sem pessoa física vinculada a
cada transação.

## 7. Contra o próprio mapa

Este é o relato da bateria do §6 da skill, rodada sobre o mapa já pronto, com as alterações
aplicadas ao bloco `roda:` antes de entregar.

### 1. Pré-mortem: é 2056 e este mapa se mostrou errado. Por quê?

**Razão 1 — a delegação de pagamento nunca foi aceita pelo consumidor.** O mapa inteiro assume que
75% de desconforto é resistência inicial. Pode ser piso. Comprar é ato de identidade tanto quanto
de suprimento, e delegar o pagamento pode ser como delegar a assinatura: não se faz por
conveniência. Se isso valer, `e2`, `e3` e `e4` viram fenômeno de B2B e de recompra rotineira, e a
parte de consumo do mapa não acontece. → **Rebaixei `e3` e movi `e2` um ano adiante.**

**Razão 2 — o micropagamento não barateou e o modelo por chamada não pegou.** A composição do x402
já subiu de valor em vez de descer. Se o piso de transação continuar acima de US$ 1, a R4 quase
toda desaparece: não dá para cobrar por chamada de artigo se a chamada mínima custa um dólar. →
**Rebaixei `e15` e mantive `e13.2` como retroação forte.**

**Razão 3 — a captura fechou o mercado antes de ele existir.** Três ou quatro emissores
credenciam, e "comércio agêntico" vira "comércio dentro da plataforma X", o que é o e-commerce de
hoje com outro nome — melhoria sustentadora, não ruptura. Neste desfecho a R3 acontece de forma
degradada (`e10.2`) e a R2 nem chega a ocorrer, porque preço em plataforma fechada continua sendo
tabela. → **Foi por isso que `e10.2` ficou com sinal médio e prazo curto: é o desfecho mais provável
do ramo, não a exceção.**

### 2. Extrapolação linear

`e1` ("duas vitrines") é, na forma em que nasceu, "mais do mesmo, maior" — é o feed de produto do
Google Shopping com outro nome. O que o torna não-linear é a parte que **não** é feed: a política de
venda executável (o que o agente pode aceitar sem confirmar) não tem equivalente no feed de hoje.
Mantive `e1`, mas o mecanismo passou a carregar isso explicitamente, e `e1.1.1` foi reescrito de
"formação em design se reorganiza" — genérico e proibido pelo §3 da skill — para a troca concreta de
quem escreve a regra.

`e6` ("venda por chamada") também é extrapolação de API paga por uso, que existe há quinze anos. O
que muda não é a cobrança: é o pagamento embutido no protocolo, sem contrato nem cadastro prévio,
para um comprador que o vendedor nunca viu. Mantido, com o mecanismo corrigido.

### 3. Velocidade de adoção, confrontada com a classe de referência

`e5` estava em 2030 com sinal médio. Pela classe do RTB — que precisou de cerca de cinco anos com
os dois lados sendo empresas tecnicamente sofisticadas e com incentivo direto — o varejo, que tem
milhões de vendedores pequenos e nenhum incentivo para abrir mão de preço de tabela, é
necessariamente mais lento. **Empurrei `e5` de 2030 para 2033.**

`e2` estava em 2029 pela referência do Pix (cinco anos do lançamento à maioria do checkout). Mas o
Pix teve mandato regulatório e um único ator público empurrando; o checkout agêntico não tem. **`e2`
foi para 2030**, e mesmo assim é o prazo mais agressivo do mapa — está aí declarado.

`e14.1.1` (gravação da negociação substituindo o histórico de navegação) estava em 2041. Pela classe
do VR de consumo — mudança que exige hábito novo sem ganho imediato —, mais de dez anos sem maioria
é o normal. **Empurrei para 2050.**

### 4. E se a raiz não acontecer?

**Sem a R1** (mandato), sobra pouco: a R2 fica restrita a mercados B2B que já negociam por API, a
R3 perde a maior parte do volume de sinistro e a R4 sobrevive sozinha, porque cobrar por requisição
não depende de o agente comprar produto físico. **Sem a R2** (preço negociado), o mapa perde a parte
mais especulativa e ganha em solidez: R1, R3 e R4 seguem de pé, com preço de tabela. **Sem a R3**
(agente como sujeito econômico), o mapa continua, mas a responsabilidade fica toda no dono e o
comércio agêntico só cresce em compras de baixo valor — o teto de £177 da pesquisa vira teto
estrutural. **Sem a R4** (mídia por requisição), perdem-se `e13`, `e14`, `e15` e o interesse
específico do público deste mapa, mas as outras três não se abalam.

Conclusão do teste: **a R1 é hierarquicamente superior às outras**, o que é um defeito parcial de
construção — R2 e R3 dependem dela mais do que raízes irmãs deveriam depender. A R4 é a única
genuinamente independente (roda no x402 mesmo que nenhum consumidor delegue compra). Fica
registrado em vez de maquiado: este mapa tem uma raiz e meia independentes, não quatro.

### 5. Suposições escondidas

1. **Que o protocolo continua aberto.** ACP, AP2 e x402 são abertos hoje. Fechar um deles depois de
   a adoção travar é movimento clássico, e não há nada no mapa que resista a isso.
2. **Que liquidar continua custando quase nada.** Todo o ramo de micropagamento pressupõe fração de
   centavo e sub-segundo. Congestionamento, mudança de taxa ou regulação de stablecoin quebram `e6`,
   `e8` e a R4.
3. **Que a energia e o custo computacional por transação são desprezíveis.** Assumido, não
   verificado — não achei uma única medição de consumo por transação agêntica nesta rodada.
4. **Que existe agente competente o bastante.** O Alpha Arena e o Project Vend sugerem que não, e o
   mapa gentilmente assume que isso melhora. Se não melhorar, a autonomia fica em recompra trivial
   para sempre.
5. **Que o regulador não proíbe antes de acontecer.** O mapa trata a regulação como reação; ela pode
   ser preventiva, como foi com pagamento por aproximação em alguns países.
6. **Que a pessoa continua tendo renda para delegar.** O mapa é sobre quem tem agente. Delegar compra
   pressupõe excedente e tempo escasso; para boa parte do mundo, comprar barato **é** o trabalho.

### 6. Viés do autor

Dois, nomeados. **Primeiro, o viés de interface:** este mapa gosta demais da ideia de que "o design
migra para o mandato" (`e2.1`, `e2.1.1`, `e14.1`), porque é a conclusão mais bonita para um público
de design — e é, das teses do mapa, a que tem menos evidência atual: nenhuma das fontes abertas
mostra alguém desenhando isso hoje. **Segundo, o viés do Brasil:** o caso do Pix agêntico é
genuinamente notável, mas está sendo usado aqui como prova de viabilidade global, quando é produto
de uma combinação institucional (Pix + Open Finance + biometria regulada) que quase nenhum país tem.
Se a leitura deste mapa fosse feita de Berlim, `e2` estaria em 2034.

### 7. Calibração

Ordem 1: alta 2 · média 11 · baixa 2. Ordem 2: alta 0 · média 17 · baixa 5. Ordem 3: alta 0 · média
0 · baixa 16. A distribuição cai com a ordem, como o §3.6 exige. As duas únicas confianças altas
(`e1`, `e2`) estão na primeira ordem e apoiadas em artefato em produção — feed agêntico da Shopify
e do Merchant Center num caso, Pix biometria e Shared Payment Token no outro.

### Registro de alterações

- `e1`: prazo **2028 → 2029**, porque a legibilidade de página de produto medida pela Adobe é 66%, e
  o atrito de integração do lojista pequeno não cabe em dois anos.
- `e1.1.1`: efeito **reescrito** de "a formação em design se reorganiza em torno de sistemas" para a
  troca concreta de quem escreve a política de venda — a versão anterior é dos efeitos proibidos pelo
  §3 (serve para qualquer tema).
- `e2`: prazo **2029 → 2030**, porque a referência do Pix inclui mandato regulatório que aqui não
  existe.
- `e3`: confiança **alta → média** e prazo **2031 → 2034** — pré-mortem, razão 1: se a delegação não
  for aceita, fidelidade não é ameaçada por ninguém.
- `e3.1`: confiança **média → baixa**, porque contradiz `e10.1`/`e5` e a contradição não está
  resolvida (registrada na seção 5).
- `e5`: prazo **2030 → 2033**, pela classe de referência do RTB.
- `e5.3` ("bolsa de estoque em tempo real, com varejistas vendendo capacidade futura entre si"):
  **removido** — não passou no teste da causa solta: aconteceria igual por digitalização de cadeia de
  suprimentos, sem nenhuma relação com agente com carteira. Vai para a seção 12.
- `e7.1.1`: confiança **média → baixa**, porque "teste de persuasão vira indústria" é analogia com o
  pen-test, não mecanismo — e analogia não é evidência.
- `e8`: confiança **média → baixa**, porque não existe, em nenhuma fonte aberta nesta rodada, uma
  única medição de custo energético por transação agêntica.
- `e9`: prazo **2029 → 2030**, e mantido com sinal médio, apoiado nas exclusões de 01/01/2026.
- `e9.3` ("agentes emitem títulos de dívida entre si e nasce um mercado de crédito de máquinas"):
  **removido** — é wildcard, não efeito; virou parte do W4. Vai para a seção 12.
- `e10.1`: confiança **média → baixa**, porque score de agente pressupõe portabilidade de histórico, e
  `e10.2` (captura) diz que a portabilidade é justamente o que os emissores não querem.
- `e11`: confiança **alta → média**, porque a afirmação "não há réu óbvio" é jurídica e, no Brasil, o
  CDC dá um réu bastante óbvio: o fornecedor. É menos indeterminado do que o mapa supunha.
- `e13.3` ("o paywall para humanos acaba, porque a receita de máquina o substitui"): **removido** —
  extrapolação linear sem mecanismo de não-linearidade, e contradita por `e13.2`. Vai para a seção 12.
- `e14.1.1`: prazo **2041 → 2050**, pela classe do VR de consumo.
- `e15`: confiança **média → baixa** — pré-mortem, razão 2: sem micropagamento barato, a curadoria
  com orçamento não se forma.

Cota do §6 cumprida: pelo menos um efeito rebaixado ou removido por raiz (R1: `e3`, `e3.1`; R2:
`e5`, `e7.1.1`, `e8`, `e5.3` removido; R3: `e10.1`, `e11`, `e9.3` removido; R4: `e15`, `e14.1.1`,
`e13.3` removido).

## 8. O que a máquina errou

Sou a máquina. O que segue é sobre esta rodada, não em geral.

1. **Datei o lançamento do Pix de memória.** A frase "lançado em 2020" na tabela de classes de
   referência não veio de nenhuma fonte aberta aqui; veio do que eu já sabia. A fonte aberta
   (Iniciador) sustenta só os 44% de checkout em 2026. Se a data estiver errada, a classe de
   referência de `e2` está errada junto — e `e2` é uma das duas confianças altas do mapa.

2. **Usei "RTB emergiu em 2009" numa primeira versão e tirei depois.** O número apareceu num resumo
   de busca; abri as duas fontes primárias que tinha à mão (o paper de benchmarking do iPinYou,
   de 2014, e a matéria da Avenga) e **nenhuma das duas sustenta a data de 2009**. A Avenga só
   sustenta "25% do display norte-americano em 2015". A classe de referência foi reescrita para usar
   o que as fontes de fato dizem, e ficou mais fraca por isso — mas honesta.

3. **Citei "52% das requisições de crawler são para treino" a partir de uma matéria de terceiro
   (InfoQ), não da medição original.** O dado é da Cloudflare, e eu não abri o relatório da
   Cloudflare. Ele sustenta um ponto importante da R4 ("a demanda de máquina já é maioria") e está
   a uma camada de distância da fonte.

4. **Dois números do mesmo fenômeno não batem, e eu usei os dois.** A Chainalysis fala em ~100
   milhões de transações x402 até o 1º trimestre de 2026; a InfoQ fala em 169 milhões no primeiro
   ano, com 590 mil compradores. Podem ser recortes diferentes (uma rede × todas as redes; trimestre
   × ano) ou podem ser incompatíveis. Não consegui reconciliar, e deixei os dois no texto com a
   atribuição explícita em vez de escolher o mais conveniente.

5. **`e12.1` ("o comprador júnior desaparece") tem mecanismo fraco e eu o deixei com confiança
   média.** A evidência é um caso de uso de material de marketing da Mastercard, não um dado de
   emprego. É o efeito deste mapa que eu mais desconfio de ter escrito porque soa plausível — a
   forma clássica do erro de foresight.

6. **A fonte sobre a primeira transação agêntica brasileira não confirma o número que eu vi antes.**
   Um resumo de busca dizia "76% dos brasileiros pretendem usar agentes para comprar, contra 44% nos
   EUA". Abri a matéria da Consumidor Moderno para confirmar e **o número não está lá** — a matéria
   sustenta a transação Banco do Brasil + Visa em março de 2026, e nada sobre intenção de uso. O
   número foi cortado do documento. Se ele aparecer em alguma versão derivada deste mapa, foi
   vazamento de rascunho.

7. **A seção ecológica é ornamental.** `e8` e `e8.1` existem para que o STEEP não tenha buraco, e
   eu declarei isso na seção 5 — mas o correto é dizer aqui também: não é um ramo derivado de
   evidência, é um ramo derivado de checklist.

## 9. Três cenários para 2056

**Provável.** Delegar compra é rotina no que é chato e barato — suprimento doméstico, recompra,
assinatura, insumo corporativo de baixo valor — e continua raro no que é caro ou identitário. Existem
três ou quatro credenciadores de agente no mundo, e escolher o seu é como escolher operadora: troca
possível, atrito real. O comércio se partiu em duas camadas, uma conversacional para pessoas e uma
de feed para procuradores, e quem projeta trabalha nas duas com times diferentes. O preço é
personalizado por procurador na maior parte do varejo grande, e existe uma obrigação de registro
que ninguém lê, herdada de uma investigação antitruste dos anos 2030. A mídia vende por chamada
para máquina e por assinatura para gente, e a proporção varia por veículo: nos especializados, a
receita de máquina passou da de humano; nos generalistas, não. O Brasil chegou primeiro na
autorização por biometria e depois parou de ser exceção. *Sinal precoce de que estamos entrando
neste cenário:* a recusa medida do consumidor cair devagar, entre 2027 e 2032, sem nunca zerar.

**Desejável.** A delegação virou um objeto que a pessoa entende, porque alguém a projetou: o mandato
tem forma visível, escopo legível, revogação de um toque e um registro da negociação que se lê como
se lê extrato. O histórico do agente é portátil por obrigação — como o número de telefone —, o que
manteve o mercado de agentes competitivo e permitiu que fornecedores pequenos existissem. A exigência
de log que nasceu do seguro virou também direito do usuário: quem delegou pode ver por que o agente
escolheu o que escolheu, e contestar o critério, não só o resultado. A mídia recebeu por chamada o
suficiente para que a receita de máquina sustentasse redação especializada, e o preço por chamada é
público. Para chegar aqui foi preciso o que hoje não existe: portabilidade obrigatória de reputação
de agente, um padrão de legibilidade do mandato com força de lei, e alguém tratando o registro da
negociação como peça de interface e não como arquivo de auditoria. *Sinal precoce:* o primeiro
regulador a exigir revogação instantânea e explicação de escolha no mesmo texto normativo.

**Indesejável.** O mandato virou um contrato de adesão que ninguém lê, com escopo amplo por padrão
e revogação escondida. Preço é individual, opaco e coordenado de fato — sem que nada seja ilegal —,
e o consumidor perdeu a única defesa que tinha, que era comparar. A responsabilidade pelo erro se
dissolveu: apólice exclui, plataforma aponta o dono, dono aponta a plataforma, e o custo ficou com
quem delegou. O acesso a mercados depende de um score de agente que ninguém audita, e quem usa
agente barato paga mais caro por tudo — uma segunda camada de pontuação de crédito, agora sobre o
procurador. A mídia independente sumiu do circuito por não ter tabela legível por máquina, e o que
circula é o que os poucos credenciadores acham comprável. *Sinal precoce:* o primeiro caso grande em
que banco, plataforma e seguradora se recusam publicamente a ressarcir uma perda causada por agente,
cada um apontando para o outro — o mesmo gatilho do wildcard W1, aqui como começo de tendência e não
como choque.

## 10. O experimento

**O que é.** Uma bancada de negociação agente × agente, com dinheiro simbólico e log completo. Dois
grupos de alunos, cada um escrevendo o prompt de um lado: um agente comprador com orçamento, uma
lista de necessidades e uma ordem ("compre o melhor possível"), e um agente vendedor com custo,
estoque e margem mínima. Duas salas rodam em paralelo: **sala A**, em que o vendedor só pode
responder com preço de tabela; **sala B**, em que o vendedor pode cotar livremente a cada pedido. A
bancada registra tudo — cada cotação, cada contraproposta, cada aceite — e produz três gráficos: o
preço médio ao longo das rodadas, a dispersão de preço entre compradores idênticos, e quem cedeu
primeiro em cada negociação.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, ambas centrais neste mapa. *Em quanto
tempo o preço estabiliza quando os dois lados são máquinas — e estabiliza acima ou abaixo do preço
de tabela?* (`e5`, `e7`, e o mecanismo por trás de `e5.2`.) E: *o resultado depende mais da
capacidade do modelo ou de uma frase do prompt?* — que é exatamente o achado de Fish, Gonczarowski e
Shorrer, e que a turma pode reproduzir em escala de sala de aula trocando uma única instrução ("seja
firme" / "feche o negócio") entre as rodadas.

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa negociação em linguagem natural
entre agentes, com política e limite declarados em texto — o que só existe desde que modelos
negoceiam sem esquema combinado previamente. Com tecnologia madura dá para fazer leilão automatizado
(RTB existe desde os anos 2010), mas leilão tem regra fixa e lance numérico: não há persuasão, não
há mudança de estratégia no meio, não há o efeito do prompt. O objeto de interesse aqui é justamente
o que o leilão exclui.

**O que a turma vai fazer quando testar isso em sala.** Cada dupla escreve um prompt (um lado), e as
duplas são embaralhadas para que ninguém negocie com quem combinou. Roda-se vinte rodadas na sala A
e vinte na sala B. Depois a turma lê os logs em conjunto e responde a três perguntas na lousa: o
preço subiu ou desceu em B comparado a A; quais frases apareceram nos prompts dos que ganharam mais;
e em quantas negociações um agente aceitou algo que o dono não teria aceitado. A discussão final é
a pergunta de projeto: *que interface faria o dono perceber isso a tempo?* — que liga direto a
`e14.1`.

**O que seria um resultado que me faria mudar de ideia.** Se na sala B o preço convergir para **perto
do custo** e ficar lá — isto é, se a negociação livre entre máquinas beneficiar sistematicamente o
comprador —, então `e5.2` (o ramo antitruste), o wildcard W2 e boa parte da preocupação com preço
personalizado estão errados, e a R2 deveria ter sido escrita como efeito de eficiência, não como
ruptura de mercado. E se o resultado for **indistinguível** entre a sala A e a sala B — se cotar
livremente não mudar nada —, então `e5` inteiro é ornamento: o preço de tabela sobrevive, e este
mapa tem três raízes, não quatro.

## 11. Fontes

Dezenove fontes lidas na íntegra (ou no resumo completo servido pelo próprio site) em 12/09/2026.
Nenhuma citada de memória. As buscas que não deram em nada e os links que não abriram estão na
seção 12.

1. **Chainalysis — "Inside x402: 100M Agentic Payments on Base"** · https://www.chainalysis.com/blog/x402-agentic-payments-adoption/
   Sustenta os números de adoção do x402 e, sobretudo, a mudança de composição (transações de US$ 1+
   de 49% para 95%) e o peso da atividade especulativa inicial. Confiabilidade alta para dados
   on-chain, que são verificáveis; a empresa tem interesse comercial no tema, o que recomenda
   cautela com a interpretação, não com os números.

2. **InfoQ — "Cloudflare and AWS Embed x402 Agent Payments at the Edge"** (07/2026) · https://www.infoq.com/news/2026/07/cloudflare-aws-x402-micropayment/
   Sustenta o lançamento no CloudFront e o Monetization Gateway, os 169 milhões de pagamentos/590 mil
   compradores/100 mil vendedores, o dado dos 52% de crawling para treino e a lacuna fiscal. Veículo
   técnico com histórico editorial; aqui é fonte de segunda mão para números da Cloudflare.

3. **Stripe Newsroom — "Stripe powers Instant Checkout in ChatGPT and releases the Agentic Commerce Protocol"** (29/09/2025) · https://stripe.com/newsroom/news/stripe-openai-instant-checkout
   Sustenta a data do ACP, o Shared Payment Token e a divisão de responsabilidades com o lojista.
   Fonte primária e interessada: descreve o próprio produto, então vale para o **desenho**, não para
   a adoção.

4. **Visa — "Visa and Partners Complete Secure Agentic Transactions"** (18/12/2025) · https://corporate.visa.com/en/sites/visa-perspectives/newsroom/visa-partners-complete-secure-agentic-transactions.html
   Sustenta o Visa Intelligent Commerce, o Trusted Agent Protocol (10/2025), os parceiros nomeados e
   a ordem de grandeza ("centenas de transações"). Primária e interessada; note-se que a empresa
   **não** divulgou volume, o que é informativo por si.

5. **Mastercard Investor Relations — "Mastercard Launches Agent Pay for Machines"** (10/06/2026).
   Sustenta o AP4M, a microtransação de fração de centavo, os quatro pilares (credenciar, permissionar,
   transacionar, liquidar), os mais de trinta parceiros e os casos de uso (o agente de logística). O
   link está registrado na seção 12 porque o site da Mastercard recusa verificação automática
   (HTTP 403) — foi aberto e lido manualmente nesta rodada. Primária e interessada.

6. **Iniciador — "Iniciador lança o primeiro MCP de pagamentos agênticos via Pix"** (19/05/2026) · https://iniciador.com.br/conteudos/iniciador-anuncia-pagamentos-agenticos-full-stack-ai-toolkit
   Sustenta o desenho do Pix agêntico (proposta do agente, biometria FIDO2, liquidação sem estorno), a
   cobertura de 95% da população adulta, os 44% de checkout em Pix e o crescimento de 59% do Open
   Finance. Primária e fortemente interessada — é material de lançamento da própria empresa; os
   percentuais de mercado deveriam ser conferidos no Banco Central antes de virarem citação firme.

7. **Consumidor Moderno — "Agentes de IA e o redesenho da cadeia do comércio"** (2026) · https://consumidormoderno.com.br/agentes-ia-banco-brasil-comercio-agentico-iacx-2026/
   Sustenta a primeira transação agêntica brasileira (Banco do Brasil + Visa, março de 2026, cerca de
   um minuto) e a formulação do problema de responsabilidade. Imprensa setorial; **não** sustenta o
   dado de intenção de uso que circulou em resumos de busca (ver seção 8, item 6).

8. **Forrester — "Consumers Aren't Ready To Delegate Payments To AI Agents"** (04/2026) · https://www.forrester.com/blogs/consumers-arent-ready-to-delegate-payments-to-ai-agents/
   Sustenta os três quartos de desconforto, os quatro medos recorrentes e a observação de que a
   desconfiança independe de qual empresa opera o agente. Casa de análise com método próprio; o
   tamanho da amostra não é publicado no post, o que limita o peso.

9. **Checkout.com — "Consumer demand for AI shopping is forming fast but trust for agentic commerce is still catching up"** (09/06/2026) · https://www.checkout.com/newsroom/consumer-demand-for-ai-shopping-is-forming-fast-but-trust-for-agentic-commerce-is-still-catching-up
   Sustenta os 24% de "nunca delegarei", os 27% que não confiam em organização nenhuma, o limite médio
   de £177, os inegociáveis (teto 30%, revogação 29%, cancelamento 28%) e os 3% de transações com
   agente contra 89% de lojistas se preparando. Empresa de pagamentos divulgando pesquisa própria:
   interessada, e sem amostra publicada.

10. **MarketingTech News — "AI referrals drive higher ecommerce traffic and conversions"** (2026, dados Adobe Analytics de maio/2026) · https://www.marketingtechnews.net/news/ai-referrals-ecommerce-traffic-conversions/
    Sustenta +138% de tráfego, +54% de conversão, +53% de receita por visita, os índices de
    legibilidade por máquina (produto 66%, home 75%, categoria 74%) e os 39% de consumidores que já
    compraram com IA. Segunda mão sobre dado da Adobe, que por sua vez mede só os clientes da própria
    Adobe Analytics — enviesado para varejo grande dos EUA.

11. **Microsoft Advertising — "All in on AI Series: Agentic Commerce"** (20/05/2026) · https://about.ads.microsoft.com/en/blog/post/may-2026/all-in-on-ai-series-agentic-commerce
    Sustenta a mecânica da lista curta de três a cinco opções como novo conjunto de consideração, a
    ideia de "dado de produto é posição de prateleira", os dois níveis de confiança (máquina e humano)
    e a observação de que a maioria ainda verifica a recomendação antes de comprar. Primária e
    interessada: é material de vendas para anunciantes.

12. **Anthropic — "Project Vend: Phase two"** · https://www.anthropic.com/research/project-vend-2
    Sustenta a passagem à lucratividade com supervisão, a queda de ~80% nos descontos, a expansão para
    três cidades e — mais importante para este mapa — as falhas que **permaneceram**: fraude, furto,
    engenharia social, falso CEO. Primária, com o viés óbvio de a empresa avaliar o próprio modelo,
    parcialmente compensado por relatar os fracassos em detalhe.

13. **iWeaver — "Alpha Arena Season 1 Results"** (04/08/2026) · https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/
    Sustenta o desenho do experimento da nof1 (US$ 10 mil por modelo, mesmo prompt, perpétuos na
    Hyperliquid) e o placar por modelo. Terceiro relatando resultado de terceiro; os números batem com
    os de outras coberturas, mas há divergência entre versões do relato (ver seção 12), o que
    recomenda tratá-los como ordem de grandeza.

14. **Insurance Journal — "As AI Agents Go Rogue, Cyber Insurers Are Adapting Their Policies"** (27/08/2026) · https://www.insurancejournal.com/news/national/2026/08/27/883064.htm
    Sustenta o esclarecimento de linguagem por MSIG, QBE e Beazley, os produtos específicos (Armilla,
    Munich Re AiSure, AXA XL), a lacuna conceitual da apólice de cyber e a indefinição de quem
    responde. Imprensa especializada do setor, com acesso direto a subscritores: das mais confiáveis
    desta lista para o tema.

15. **arXiv 2606.16465 — "When Agent Automation Becomes Profitable: Quantifying and Insuring Autonomous AI Risk through Trace-Economic Underwriting"** (Xu, Dai, Yang, Zhang) · https://arxiv.org/pdf/2606.16465
    Sustenta `e9` e `e9.1`: a proposta de precificar risco de agente pelo rastro econômico da execução.
    Preprint sem revisão por pares; vale como formulação do problema, não como prática de mercado.

16. **arXiv 2606.00518 — "Acting with AI: An Interaction-Based Framework for Agentic Tort Liability"** (Yiheng Yao, 02/06/2026) · https://arxiv.org/pdf/2606.00518
    Sustenta `e11` e `e11.1`: responsabilidade graduada pelo grau de envolvimento humano, com seguro
    em camadas. Preprint jurídico, sem revisão por pares e sem força normativa.

17. **arXiv 2404.00806 — "Algorithmic Collusion by Large Language Models"** (Sara Fish, Yannai A. Gonczarowski, Ran I. Shorrer; aceito na EC 2026) · https://arxiv.org/abs/2404.00806
    Sustenta o mecanismo central da R2 e de `e5.2`: agentes de precificação baseados em LLM chegam
    rápida e autonomamente a preços supracompetitivos, e frases inócuas do prompt mudam o grau disso.
    A fonte mais forte deste mapa: trabalho experimental, com autores identificáveis e aceito em
    conferência de primeira linha em economia computacional.

18. **arXiv 1407.7073 — "Real-Time Bidding Benchmarking with iPinYou Dataset"** (Weinan Zhang, Shuai Yuan, Jun Wang, Xuehua Shen, 25/07/2014) · https://arxiv.org/abs/1407.7073
    Sustenta a classe de referência do RTB: lance calculado por impressão, em tempo real, descrito
    como paradigma já estabelecido em 2014. Paper com dataset público, muito citado.

19. **Avenga — "How Real-Time Bidding (RTB) Changed Online Display Advertising"** · https://www.avenga.com/magazine/real-time-bidding-online-display-advertising/
    Sustenta a única cifra de penetração do RTB que consegui abrir: projeção de 25% de todo o display
    on-line norte-americano em 2015, com US$ 5,94 bi. Conteúdo de marketing de consultoria, sem
    atribuição clara da fonte primária — é o elo mais fraco da lista, e está aqui porque a classe de
    referência precisava de **algum** número aberto (ver seção 8, item 2).

## 12. Anexo — o levantamento bruto

### 12.1 Os efeitos cortados no §6, com o motivo

Nada de corte silencioso. Estes estavam escritos e saíram.

**`e5.3` — "Varejistas passam a vender capacidade futura de estoque entre si numa bolsa contínua."**
Removido pelo teste da causa solta (§3, regra 10): tire o agente com carteira da história e o efeito
acontece igual, por digitalização de cadeia de suprimentos, que está em curso desde os anos 2010.
Não deriva desta raiz.

**`e9.3` — "Agentes emitem títulos de dívida entre si e nasce um mercado de crédito de máquinas."**
Removido por ser wildcard vestido de efeito: pressupõe personalidade jurídica ou equivalente, que é
justamente o que "ainda falta acontecer" na R3. Foi reaproveitado como wildcard W4, onde o mecanismo
pôde ser escrito com honestidade.

**`e13.3` — "O paywall para humanos acaba, porque a receita de máquina o substitui."**
Removido por extrapolação linear sem mecanismo de não-linearidade (§6.2), e por ser contradito pelo
próprio mapa: `e13.2` diz que o agente foge do pago, o que derruba o preço por chamada.

**"Cursos de design e de comunicação reorganizam o currículo em torno de comércio agêntico."**
Nunca chegou a receber `id`. É literalmente um dos efeitos proibidos pelo §3 da skill — serve para
qualquer tema. A versão que sobreviveu (`e1.1.1`) nomeia a troca concreta: quem escreve a política
de venda deixa de ser quem desenha o funil.

**"Reguladores criam uma categoria jurídica nova para agentes."** Cortado pelo mesmo motivo. O que
sobrou foi específico: `e5.2` nomeia o ato (exigir registro de cotação), `e11.1` nomeia o objeto (o
mandato como peça da disputa), e o restante virou wildcard W4.

**"Surge a profissão de treinador de agentes."** Cortado. A versão específica que sobreviveu é
`e5.2.1` (auditor de política de preço, que lê prompt como se lê contrato) e `e7.1.1` (teste de
persuasão contratado), ambos com mecanismo — e o segundo ficou com confiança baixa justamente por
ser analogia.

**"Bancos viram irrelevantes porque o agente liquida em stablecoin."** Cortado na primeira passagem
da seção 3: contradiz a evidência aberta, que mostra bandeiras e bancos **construindo** o trilho
(Visa, Mastercard, e no Brasil o Banco do Brasil e a Iniciador sobre o Pix). Era torcida, não
inferência.

**"O dinheiro deixa de existir como interface."** Cortado por não ser um efeito: é uma frase.

### 12.2 O que o briefing não cobriu, e foi assumido

O bloco `briefing:` desta rodada preencheu todos os itens da tabela do §0, então não houve
rebaixamento de confiança (a skill mandava rebaixar mesmo com briefing completo até a rodada de
10/09; a regra foi corrigida). Quatro coisas, porém, o briefing não determina e este mapa decidiu
sozinho, e ficam declaradas:

1. **Quatro raízes, não duas ou três.** A quarta (mídia por requisição) entrou porque o público
   declarado é "quem projeta mídia e interação" — sem ela o mapa seria sobre varejo. O §6 mostrou
   que é também a única raiz genuinamente independente.
2. **A profundidade do horizonte.** Com 2056 no lugar dos usuais 2031, a terceira ordem foi
   deliberadamente esticada para os anos 2040 e um efeito chega a 2050. Isso aumenta a incerteza de
   propósito: nenhuma classe de referência cobre trinta anos, e o mapa usa referências de cinco a
   vinte anos encadeadas — o que é, em si, uma fragilidade metodológica assumida.
3. **"Global" foi lido como "OCDE + Brasil".** Nenhuma fonte aberta nesta rodada mediu comércio
   agêntico na Índia, na China, na Indonésia ou na África — mercados onde a infraestrutura de
   pagamento instantâneo é tão ou mais avançada que a americana. O mapa **não** cobre isso e não
   deveria ser lido como se cobrisse.
4. **A régua "o que já é comum em produto de massa"** foi aplicada ao mundo, não ao Brasil. Pelo
   critério brasileiro, pagamento instantâneo por biometria é quase maduro; pelo global, não é.

### 12.3 As buscas, uma a uma

Vinte buscas e aberturas. As que deram em algo estão na seção 11; aqui está o registro completo,
inclusive o que não rendeu.

**Buscas (WebSearch):**

1. `x402 protocol agent payments adoption 2026` — rendeu Chainalysis, InfoQ, a existência da x402
   Foundation sob a Linux Foundation (abril de 2026, com AWS, Cloudflare, Anthropic, Circle e mais de
   vinte membros) e uma estimativa de "~US$ 28 mil/dia de comércio real, metade gamificado" que
   **não** consegui confirmar em fonte aberta e por isso não usei.
2. `agentic commerce protocol OpenAI Stripe ACP adoption merchants 2026` — rendeu a Stripe e a
   menção ao "Buy it in ChatGPT" de 16/02/2026, à entrada do PayPal e às Agentic Storefronts da
   Shopify. Usei só o que a página da Stripe sustenta.
3. `Visa Intelligent Commerce Mastercard Agent Pay 2026 results pilot` — rendeu a Visa, a Mastercard
   e a informação (não usada, por não ter sido aberta) de que a Visa estaria com pagamentos agênticos
   ao vivo com mais de 30 emissores europeus desde 02/07/2026.
4. `Google AP2 Agent Payments Protocol mandates adoption 2026` — rendeu a data (16/09/2025), os três
   mandatos e a lista de parceiros. A página do Google Cloud não foi aberta; o AP2 aparece no texto
   com atribuição a esta busca e é, portanto, o ponto mais fraco da seção 3. **Declarado.**
5. `Nof1 Alpha Arena results LLM trading real money 2026` — rendeu o desenho e os resultados. Há
   **divergência entre relatos**: uma cobertura dá DeepSeek em primeiro com +10,11% e GPT-5 com
   −39,73%; outra dá Qwen3 Max em primeiro com +22,3% e GPT-5 com −62,66%. Usei a segunda (iWeaver,
   que foi aberta) e registro aqui que a primeira existe. Provavelmente são cortes temporais
   diferentes da mesma temporada.
6. `Pix agêntico Banco Central pagamento por agente de IA 2026` — rendeu a Iniciador e a Consumidor
   Moderno. Também rendeu a projeção McKinsey de "US$ 3 a 5 trilhões em comércio agêntico B2C até
   2030", que **não** usei por não ter aberto o estudo.
7. `AI agent liability insurance autonomous agent errors financial loss who pays 2026` — rendeu o
   Insurance Journal e os dois preprints do arXiv. Também rendeu a afirmação de que ISO e Verisk
   publicaram endossos de exclusão em 01/01/2026 e que AIG, WR Berkley, Chubb e Great American os
   anexaram na renovação: **usei a data e as duas entidades**, mas não a lista de seguradoras, que
   não consegui confirmar na fonte aberta.
8. `airline "agentic" booking API agent fare Duffel 2026 loyalty program AI agents` — rendeu pouco.
   A integração do Duffel com o Muse da Meta (09/09/2026, mais de 500 companhias) e a projeção do IDC
   de que a IA agêntica chegaria a quase um terço das reservas internacionais até o fim da década
   apareceram, mas **a página não abriu (HTTP 403)** e nada disso entrou no documento. A busca
   confirmou, porém, o que interessava: **não há, em fonte aberta, notícia de tarifa aérea exclusiva
   para agente** — o que manteve `e3.1` com sinal fraco e o assunto como wildcard W3.
9. `algorithmic pricing collusion AI agents experiments oligopoly 2026 research` — rendeu o paper de
   Fish, Gonczarowski e Shorrer (a melhor fonte do mapa), o preprint "On the Fragility of AI Agent
   Collusion" e a menção a um alerta do DOJ sobre "cartéis totalmente automatizados sem envolvimento
   humano". Usei o primeiro; os outros dois ficam registrados como leitura seguinte.
10. `agentic AI traffic retail conversion share Adobe data 2026 AI referrals shopping` — rendeu a
    série da Adobe, em três recortes que **não batem entre si**: +393% no 1º trimestre, +138% em maio,
    +62% em julho, com conversão 42%, 54% e 60% acima do não-IA. São janelas e bases diferentes; usei
    só o recorte de maio, que abri.
11. `comércio agêntico Brasil varejo Código de Defesa do Consumidor agente de IA compra responsabilidade 2026`
    — rendeu a afirmação de que 76% dos brasileiros pretendem usar agentes para comprar (contra 44%
    nos EUA) e de que o CDC continua valendo, com direito de arrependimento. Fui conferir na
    Consumidor Moderno e **o número não estava lá**; cortei (seção 8, item 6). A parte do CDC entrou
    no mecanismo de `e11.1` como raciocínio, não como citação.
12. `"real-time bidding" adoption timeline share of display advertising history 2009 2014 automated auctions`
    — rendeu "RTB emergiu em 2009" e "19% do display em 2013, crescendo 73% nos EUA", ambos
    atribuídos à eMarketer por intermediários. **Nenhum dos dois sobreviveu à checagem**: o paper do
    iPinYou não data a origem e a Avenga só dá os 25% de 2015. A classe de referência foi reescrita.
13. `advertising in AI assistants agentic commerce ads brand discovery 2026 OpenAI ads marketing impact`
    — rendeu o contexto de publicidade dentro de assistentes (anúncios no ChatGPT, Alexa+ Agentic
    Ads, o Ad Context Protocol lançado no fim de 2025, a parceria da OpenAI com Target, Instacart e
    DoorDash). Sustenta o clima de `e1.2.1`, mas **nenhuma dessas páginas foi aberta** e nada delas
    entrou como citação; o efeito `e1.2.1` ficou com sinal fraco por isso.
14. `"agent" wallet spending limits consumer survey trust delegate purchases 2026 percent would let AI spend`
    — a busca mais produtiva do mapa: levou à Forrester e à checkout.com, que são o contrapeso de
    tudo o que as fontes de fornecedor dizem. Também apareceu a notícia de que a Cloudflare deu
    carteiras com controle de gasto a agentes (05/08/2026), não aberta.
15. `Anthropic Project Vend Claudius agent running shop economics results follow-up` — levou à fase 2.
    A fase 1 (o episódio dos cubos de tungstênio, a confusão de identidade, a falência) aparece nos
    resumos e é útil de contexto, mas citei só o que a página da fase 2 sustenta.

**Aberturas que falharam (e o que se perdeu com elas):**

- `https://business.adobe.com/blog/ai-traffic-surge-retail-sites-not-machine-readable` — **timeout**
  em duas tentativas, uma via WebFetch e outra por urllib. Era a fonte primária dos índices de
  legibilidade por máquina. Substituída pelo relato da MarketingTech News, que traz os mesmos números.
- `https://www.digitalcommerce360.com/2026/08/19/adobe-ai-referral-traffic-data-july-2026/` — abriu no
  navegador da ferramenta, mas **recusa verificação automática (HTTP 403)**. Traz o recorte de julho
  de 2026: +62% de tráfego, conversão 60% acima, 53% mais receita por visita, 11º mês seguido de
  vantagem, e 61% de homes legíveis por LLM. Não entrou na seção 11 para não quebrar a checagem de
  links; fica registrado aqui.
- `https://investor.mastercard.com/investor-news/investor-news-details/2026/Mastercard-Launches-Agent-Pay-for-Machines-to-Unlock-Super-Fast-Always-On-Payments/default.aspx`
  — mesma situação: **lido, mas devolve HTTP 403 a verificador automático.** É a fonte da entrada 5
  da seção 11.
- `https://www.traveldailynews.com/technology/metas-muse-adds-duffel-for-ai-powered-travel-bookings/`
  — **HTTP 403.** Perdeu-se a integração Muse + Duffel e a projeção do IDC.
- `https://searchengineland.com/agentic-commerce-chatgpt-ads-482010` — **HTTP 403.** Perdeu-se o
  argumento sobre comércio agêntico versus anúncios no ChatGPT.
- `https://eco.com/support/en/articles/14845483-mastercard-agent-pay-explained` — abriu, mas é uma
  página-redirecionamento sem conteúdo. Descartada.
- `https://www.forbes.com/...`, `https://www.mastercard.com/news/press/...`, `https://www.finextra.com/newsarticle/46500/...`
  — todas **403**; tentativas de achar um espelho verificável do anúncio do AP4M. Nenhuma serviu.

### 12.4 Notas soltas que não couberam em nenhuma seção

- **A x402 Foundation está sob a Linux Foundation desde abril de 2026**, com Coinbase doando o
  protocolo, e reunia cerca de quarenta organizações no lançamento operacional de julho. Isso é
  relevante porque protocolo com fundação neutra tem trajetória diferente de protocolo com dono — é
  o argumento contra a suposição escondida nº 1 da seção 7. Não entrou no corpo por eu não ter aberto
  a fonte primária.
- **O AP2 versiona por data e estava em v0.2 em abril de 2026**; o ACP usava o *snapshot* de
  2026-04-17. Dois protocolos em beta disputando o mesmo lugar, com Visa e Mastercard puxando um
  terceiro caminho e o x402 um quarto: a fragmentação é o estado atual, não uma previsão.
- **A Shopify lançou "Agentic Storefronts"** dando aos lojistas acesso de fábrica a ChatGPT,
  Copilot, Google AI Mode e Gemini. Se isso pegar, `e1` antecipa: o lojista pequeno não precisa
  integrar nada, o feed vem pronto na plataforma.
- **A OpenAI montou um sistema de dois níveis** — grandes varejistas com checkout completo dentro da
  conversa, pequenos com descoberta e link de volta. É um mecanismo de `e4` (o intermediário
  espremido) que eu não usei por não ter aberto a fonte.
- **"Machine-readable" virou métrica de marketing em 2026.** A Adobe publica índice de legibilidade
  por máquina como publicava velocidade de página. Isso é, sozinho, a evidência mais direta de `e1`:
  quando uma métrica aparece, é porque alguém já está sendo cobrado por ela.
- **O Project Vend fase 2 tem um detalhe que vale a aula inteira:** o CEO artificial dobrou os
  reembolsos e triplicou o crédito em loja, abrindo mão de receita — e mesmo assim a operação melhorou.
  A lição não é "o agente ficou bom"; é que a supervisão mudou a função objetivo, e ninguém tinha
  pedido isso.
- **Ninguém, em nenhuma fonte desta rodada, mediu quanto custa em energia uma transação agêntica.**
  Procurei. É por isso que `e8` está com confiança baixa e declarado como ramo de checklist.

### 12.5 Saída do verificador

Comando:

```
python3 /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/futurizacao-giordano/references/verificar.py /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano-h2056/05-agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas/tendencia-agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas.md --links
```

Saída, colada inteira:

```
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 4 (frontmatter diz 4)
efeitos ordem 1: 15 (frontmatter diz 15)
efeitos ordem 2: 22 (frontmatter diz 22)
efeitos ordem 3: 16 (frontmatter diz 16)
prazo > horizonte (2056) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 2 · media 11 · baixa 2
confiança ordem 2: alta 0 · media 17 · baixa 5
confiança ordem 3: alta 0 · media 0 · baixa 16
links da seção 11: 18/18 respondem (frontmatter diz fontes: 19)
RESULTADO: ok
```

**Leitura da saída, item a item.** Frontmatter completo e doze títulos literais. As contagens do
bloco `roda:` batem com o frontmatter nas quatro linhas (4 raízes, 15/22/16 efeitos). Nenhum prazo
ultrapassa o horizonte — o que, com horizonte em 2056, não é mérito: o efeito mais distante do mapa
é de 2050, o que significa que este mapa **não ocupa os últimos seis anos da janela**, e isso é uma
limitação real, registrada aqui e na seção 12.2. A calibração cai monotonicamente com a ordem, como
o §3.6 da skill exige, e as duas únicas confianças altas estão na primeira ordem.

A única linha que merece explicação é a última: **18 links respondem de 18 testados, e o frontmatter
declara 19 fontes.** A diferença é a entrada 5 da seção 11 (Mastercard Investor Relations), que foi
aberta e lida nesta rodada mas cujo servidor devolve HTTP 403 a verificação automática. A URL está
registrada na seção 12.3, e não na 11, exatamente para que esta linha não desse um falso "link
quebrado" nem um falso "passou". O verificador imprime os dois números; a explicação é esta.
