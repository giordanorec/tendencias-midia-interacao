---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: vafs
zona_de_interesse: Agentes
data: 2026-09-11
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 11
efeitos_ordem_3: 12
tecnologias_citadas: [x402, "Cloudflare Monetization Gateway", "Agentic Commerce Protocol (ACP)", "Shared Payment Token", "Agent Payments Protocol (AP2)", "Verifiable Credentials (W3C)", "Visa Trusted Agent Protocol", "Web Bot Auth (RFC 9421)", "Mastercard Agent Pay", "Agentic Tokens", "Visa Intelligent Commerce", USDC, Base, Hyperliquid, "Alpha Arena (Nof1)", Pix, "Open Finance Brasil", Duffel, "Sabre Mosaic", "Model Context Protocol"]
fontes: 12
confianca: media
experimento: "Mandato de R$ 50 — três papéis em sala (mandante, agente literal, vendedor adversarial) para medir quantos mandatos escritos por humanos sobrevivem à execução literal e à injeção de texto na página do vendedor"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

Um agente que **lê** e um agente que **paga** são objetos diferentes. O que mudou entre 2025 e
2026 não foi a capacidade dos modelos de comprar — foi o aparecimento simultâneo de três peças de
infraestrutura que não existiam: um jeito de cobrar por requisição HTTP sem cadastro
([x402](https://blog.cloudflare.com/monetization-gateway/)), um jeito de o comerciante saber que
do outro lado há um agente identificado com mandato assinado
([AP2](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol),
[ACP](https://stripe.com/newsroom/news/stripe-openai-instant-checkout),
[Trusted Agent Protocol](https://blog.cloudflare.com/secure-agentic-commerce/)), e um jeito de
medir modelo em dinheiro e não em pontos ([Alpha Arena](https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/)).

Este mapa parte de três disrupções-raiz derivadas dessas peças — **pagamento por requisição**,
**o agente como parte contratante identificável** e **o agente como operador de capital e
contraparte de outro agente** — e deriva 32 efeitos em três ordens até 2031.

A leitura central para quem projeta mídia e interação: se o pagamento por requisição escalar, a
pergunta de design deixa de ser "como faço a pessoa clicar" e passa a ser **"quanto custa cada
chamada que meu produto faz, e quem autorizou essa chamada"**. Duas fachadas passam a existir para
o mesmo produto — uma para olho humano, outra para leitor-máquina — e boa parte do trabalho de
interface migra para a segunda, que não tem tela.

O mapa é declaradamente **neutro** (viés pedido no despacho): onde o sinal é ambíguo, registro as
duas leituras e rebaixo a confiança em vez de escolher a mais interessante. E há um motivo forte
para rebaixar: a mesma infraestrutura que cresce em anúncio encolhe em uso real. O x402 passou de
100 milhões de transações acumuladas na Base até o 1º trimestre de 2026, e ainda assim movimentava
cerca de **US$ 28 mil por dia** em março de 2026, com analistas classificando aproximadamente
metade das transações observadas como autonegócio ou *wash trading*
([CoinDesk, 11/03/2026](https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet)).
Do outro lado, a OpenAI despriorizou o próprio Instant Checkout em março de 2026
([DigitalCommerce360](https://www.digitalcommerce360.com/2026/03/06/openai-shifts-checkout-plans-agentic-commerce-strategy/)).
Nenhuma das três disrupções-raiz está garantida. O mapa diz o que é derivável se elas ocorrerem,
não que vão ocorrer.

---

## 2. O tema

**O recorte.** Não é "IA em compras". É o subconjunto em que **o agente é parte da transação** —
escolhe, paga e, portanto, responde por algo. Isso separa três coisas que costumam vir embrulhadas
juntas:

- **Agente que recomenda** — sugere a passagem, a pessoa compra. Fora do recorte: é busca com
  outra interface.
- **Agente que executa uma compra que a pessoa aprovou item a item** — na fronteira: o mandato é
  por transação, e a pessoa continua sendo o contratante.
- **Agente que opera sob mandato prévio, com teto e escopo, e fecha sozinho** — dentro do recorte.
  É aqui que a identidade do contratante fica ambígua, que o dinheiro muda de dono sem clique, e
  que a interface de compra desaparece da tela.

**Por que agora, e não em 2021.** Três condições técnicas que não coexistiam antes:

1. **Liquidação por requisição.** O código HTTP 402 ("Payment Required") existia reservado desde a
   especificação original da web e nunca teve semântica. O x402 lhe deu uma: o servidor responde
   com um preço, o cliente paga e repete o pedido com prova anexada, tudo dentro de um HTTP comum,
   sem página de checkout ([Cloudflare, 01/07/2026](https://blog.cloudflare.com/monetization-gateway/)).
2. **Mandato verificável.** O AP2 introduziu três contratos assinados — Intent, Cart, Payment —
   carregados como *Verifiable Credentials* do W3C, cuja finalidade declarada é resolver
   autorização, autenticidade e responsabilização
   ([Google Cloud, 16/09/2025](https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol)).
3. **Identidade de agente na borda.** O Trusted Agent Protocol assina a identidade do agente em
   cabeçalhos HTTP via RFC 9421 / Web Bot Auth, de modo que o comerciante consegue distinguir
   agente registrado de bot anônimo e saber se a visita é para **navegar ou para pagar**
   ([Cloudflare](https://blog.cloudflare.com/secure-agentic-commerce/)).

**O que este mapa não faz.** Não estima probabilidade nem prioriza investimento — a roda dos
futuros mapeia o que é logicamente derivável, não o que é provável (ver `ESTUDO.md`). E não trata
de mercados simulados como instrumento de pesquisa, que é o tema vizinho; aqui o objeto é dinheiro
real trocando de mãos por decisão de máquina.

---

## 3. Onde isso está hoje

### O substrato maduro (contexto, não disrupção)

- **Checkout online, comparador de preço, e-commerce.** Padrão em escala há duas décadas.
- **Tokenização de credencial de cartão.** A troca do número do cartão por um token com escopo é a
  base técnica tanto do Apple Pay quanto dos "Agentic Tokens" da Mastercard e do Shared Payment
  Token da Stripe. O primitivo é o mesmo; o que muda é o **escopo** do token — agora amarrado a um
  agente, a um comerciante e a um carrinho específico
  ([Stripe, 29/09/2025](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)).
- **APIs de reserva de viagem.** Duffel, Amadeus, Sabre Mosaic (420+ companhias aéreas, 2 milhões
  de hotéis). São trilho, não novidade: existem para programas desde antes de haver agentes de IA
  ([OAG](https://www.oag.com/blog/march-2026-the-month-agentic-travel-gets-real)).
- **Pagamento instantâneo.** O Pix é infraestrutura consolidada; a camada de execução financeira do
  Open Finance brasileiro já suporta Pix imediato, agendado e automático
  ([Finsiders, 11/09/2026](https://finsidersbrasil.com.br/economia-open/open-finance-e-pix-formam-base-para-agentes-de-ia-mas-isso-e-so-o-comeco/)).
- **Negociação algorítmica de alta frequência.** Máquina negociando com máquina em mercado
  financeiro é prática estabelecida desde os anos 2000.

### O que está emergindo (e em que estágio)

| Peça | Estado medido | Onde está na curva |
|---|---|---|
| **x402** | >100 milhões de transações acumuladas na Base até o 1º tri/2026; ~US$ 28 mil/dia e ~131 mil transações/dia em março de 2026; ticket médio ~US$ 0,20; ~metade classificada como autonegócio ou *wash trading* | Emergente, com evidência de uso real fraca |
| **Cloudflare Monetization Gateway** | Lista de espera aberta em 01/07/2026; cobra por página, dataset, API ou ferramenta MCP, liquidando em stablecoin | Emergente, pré-produção aberta |
| **ACP / Instant Checkout** | Lançado em 29/09/2025 com Etsy e Shopify; **despriorizado em março de 2026** em favor de apps de varejistas dentro do ChatGPT; o protocolo segue como infraestrutura | Emergente, com recuo documentado |
| **AP2** | Anunciado em 16/09/2025 com 60+ parceiros (Mastercard, PayPal, Amex, Coinbase, Adyen, Etsy, Salesforce) | Emergente, ecossistema amplo, adoção não medida |
| **Trusted Agent Protocol / Web Bot Auth** | Anunciado em 14/10/2025 com 12 parceiros de aceitação (Adyen, Checkout.com, Shopify, Stripe, Worldpay, Fiserv, Microsoft, Coinbase...) | Emergente |
| **Mercado medido em dinheiro** | Alpha Arena temporada 1: seis modelos, US$ 10 mil reais cada, perpétuos em cripto, prompt idêntico. Qwen3 Max +22,3%; DeepSeek V3.1 +4,89%; Claude Sonnet 4.5 −30,81%; Grok 4 −45,3%; Gemini 2.5 Pro −56,71%; GPT-5 −62,66% | Emergente como *instrumento de medida*; resultado negativo |
| **Viagem agêntica** | Sabre + PayPal + MindTrip (anúncio 12/02/2026, lançamento previsto 2º tri/2026); Skyscanner no ChatGPT em 27/02/2026; Google construindo reserva no AI Mode com Booking.com, Expedia, Marriott, IHG e Choice | Emergente, saindo de protótipo |

### A nota sobre o Brasil

O Brasil chega a este tema com a camada de execução mais pronta que a média e a camada de
governança menos pronta. Banco do Brasil e Visa executaram em março de 2026 o que descrevem como a
primeira transação com agente de IA no país — busca, seleção e pagamento com autenticação bancária
e tokenização, em cerca de um minuto; o caso foi apresentado por Pedro Bramont, diretor de Meios de
Pagamento do BB, no IACX 2026
([Consumidor Moderno](https://consumidormoderno.com.br/agentes-ia-banco-brasil-comercio-agentico-iacx-2026/)).

O contraponto vem de dentro do próprio ecossistema: Elcio Calefi, diretor de Tecnologia e
Experiência da Associação Open Finance Brasil, escreveu em **11/09/2026** que o país tem os
alicerces — dados padronizados e consentidos, APIs transacionais, iniciação de pagamento, Pix — mas
que as lacunas estão em **identidade do agente, mandato digital, delegação e governança**, e que os
padrões atuais têm dificuldade com "maior autonomia, subagentes, múltiplas organizações, operações
assíncronas e milhares de decisões"
([Finsiders](https://finsidersbrasil.com.br/economia-open/open-finance-e-pix-formam-base-para-agentes-de-ia-mas-isso-e-so-o-comeco/)).

Ou seja: no Brasil o agente já consegue **pagar**. O que ainda não existe é a resposta a "quem
autorizou, até quanto, por quanto tempo, e o que acontece quando dá errado".

---

## 4. As disrupções-raiz

Cada candidata passou pelos três testes da Fase 2 por escrito. O registro das **rejeitadas** está
na seção 12.

### D1 — Pagamento por requisição: o acesso deixa de exigir cadastro

**Teste 1 (está madura?)** Não. Existem implantações reais — Cloudflare na borda, x402 na Base e na
Solana — mas não é opção padrão em nenhum fluxo em escala: US$ 28 mil/dia com metade classificada
como artificial não é "a escolha padrão de ninguém". **Não é madura.**

**Teste 2 (é emergente?)** Sim. Está fora do laboratório (produção aberta, ecossistema de
facilitadores, fundação sob o Linux Foundation), a curva de capacidade sobe, a adoção é de
*early adopter*. **É emergente.**

**Teste 3 (é disruptiva?)** Sim, e é possível nomear o que perde a razão de existir: **a conta de
usuário como pré-condição para cobrar**. Hoje, cobrar por um recurso digital exige cadastrar,
autenticar, manter assinatura e faturar — toda uma camada de produto (onboarding, plano, *paywall*,
gestão de assinatura) existe porque o custo de cobrar centavos é maior que os centavos. Se a
liquidação por requisição funcionar a custo desprezível, essa camada inteira deixa de ser
necessária para uma classe de recursos. Não é "cobrar fica mais barato" — é "a assinatura deixa de
ser o formato obrigatório da monetização digital". **Entra como disrupção-raiz.**

*Peneira dos Três Horizontes (Sharpe):* prepara H3 em vez de prolongar H1 — o modelo dominante hoje
(atenção + assinatura) não é otimizado por isto, é contornado.

### D2 — O agente como parte contratante identificável

**Teste 1** Não é madura. Protocolos anunciados entre setembro e outubro de 2025, com adoção
declarada em parceiros e não em volume. A própria OpenAI recuou do produto de ponta em março de
2026.

**Teste 2** É emergente: 60+ parceiros no AP2, 12 adquirentes e plataformas no TAP, ACP em beta com
versionamento por data, e casos em produção (Etsy, Shopify, BB/Visa).

**Teste 3** Sim. O que perde a razão de existir é **a suposição de que do outro lado da sessão há
uma pessoa olhando**. Dessa suposição derivam a vitrine, a página de produto, o funil de conversão,
o teste A/B de botão, o *retargeting* — e também o modelo de segurança em que "tráfego não-humano =
ataque". Quando o comerciante consegue verificar criptograficamente que ali há um agente
**legítimo, registrado e com mandato**, e distinguir se ele veio "navegar ou pagar", a interface
deixa de ser o canal da transação e passa a ser um artefato paralelo. **Entra como disrupção-raiz.**

*Três Horizontes:* claramente H3. O TAP e o Agentic Token prolongam H1 no curto prazo (mantêm a
bandeira de cartão no meio), mas o efeito de identidade de agente não é revertível para o modelo
anterior.

### D3 — O agente como operador de capital e contraparte de outro agente

**Teste 1** Não é madura **como prática de varejo e de mercado aberto a agentes genéricos**. O HFT
é maduro, mas é outro objeto: são sistemas determinísticos e auditados, operados por instituições
financeiras. Modelo de linguagem de propósito geral operando capital próprio contra outro modelo é
outra coisa — e o único benchmark público com dinheiro real deu prejuízo agregado.

**Teste 2** É emergente: Alpha Arena colocou seis modelos com US$ 10 mil reais cada em perpétuos de
cripto; há literatura experimental sobre agentes de LLM precificando em oligopólio.

**Teste 3** Sim. O que perde a razão de existir é **o preço afixado**. O preço publicado existe
porque negociar caso a caso com cada comprador é caro em tempo humano. Se as duas pontas são
agentes, o custo marginal da negociação tende a zero e o preço deixa de ser *um número na página* e
passa a ser *o resultado de uma interação entre duas contrapartes*. Isso derruba um objeto
específico e nomeável do design de interface: a etiqueta de preço. **Entra como disrupção-raiz,
com a ressalva forte registrada na seção 7.**

*O contraponto que sustenta a ressalva:* Fish, Gonczarowski e Shorrer mostram experimentalmente que
agentes de precificação baseados em LLM "rápida e autonomamente atingem preços e lucros
supracompetitivos" em oligopólio, e que variações inócuas no prompt alteram substancialmente o grau
de supracompetitividade ([arXiv:2404.00806](https://arxiv.org/abs/2404.00806)). Isto é evidência de
que agentes **negociam de fato** — e também de que o resultado não é necessariamente melhor para
quem compra.

---

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — Pagamento por requisição: o acesso deixa de exigir cadastro"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Recursos da web passam a ter preço por chamada, cobrado na borda, sem conta e sem página de checkout — o cadastro deixa de ser a pré-condição técnica para cobrar."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O publicador passa a manter duas tabelas de preço para o mesmo conteúdo — uma para leitor humano, monetizada por atenção, e outra para leitor-máquina, monetizada por requisição — e a segunda cresce mais rápido porque o rastreador pede o conteúdo de cem a dezenas de milhares de vezes por visitante que devolve."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A unidade editorial deixa de ser a página e passa a ser o trecho cobrável: a redação fragmenta o que escreve pelo recorte que a máquina compra, como já havia fragmentado pelo recorte que o buscador indexava."
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "A audiência deixa de ser o ativo contratual do publicador — o ativo vira a licença de leitura por máquina, e a métrica de alcance perde a função que tinha na negociação comercial."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "O custo marginal por chamada entra no projeto de interface: quem desenha um produto passa a decidir quantas requisições pagas cada gesto do usuário dispara, e não apenas o custo fixo do plano contratado."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "A web se separa em duas economias com regras distintas: uma camada visível paga por atenção e uma camada só legível por máquina paga por requisição, com preços, latências e termos de uso diferentes para o mesmo conteúdo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Qualquer endpoint vira produto vendável sem contrato, sem cadastro de cliente e sem área comercial, porque a cobrança acontece na própria resposta HTTP."
        sinal: medio
        prazo: 2028
        confianca: baixa
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Aparece uma camada de fornecedores que vende exclusivamente para máquinas — sem página, sem marca, sem suporte, sem SLA negociado — e cuja única superfície pública é a descrição da ferramenta e o preço por chamada."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A reputação comercial desses fornecedores deixa de ser construída por marca e passa a ser construída por histórico de execução legível por máquina (taxa de erro, latência, estabilidade de preço), o que desloca o trabalho de posicionamento de quem escreve para quem instrumenta."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "O orçamento do agente vira objeto de interface: a pessoa passa a configurar teto, escopo e validade de gasto em vez de aprovar cada compra."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O consentimento deixa de ser por transação e passa a ser por política, e a tela de compra desaparece do fluxo — o que a pessoa vê depois do fato é um extrato, não uma confirmação."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O arrependimento de compra se desloca do momento da decisão para o momento da leitura do extrato, e surge uma categoria de interface cujo objetivo é reconstruir, depois, por que o agente comprou aquilo — a justificativa vira produto."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "D2 — O agente como parte contratante identificável"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "O comerciante passa a distinguir criptograficamente agente registrado de bot anônimo e a saber se a visita é para navegar ou para pagar, tratando o agente como visitante legítimo com identidade própria."
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A loja se desdobra em duas fachadas do mesmo catálogo — uma vitrine para olho humano e um feed estruturado para agente — e o orçamento de produto migra para a segunda, porque é nela que a decisão de compra passa a ser tomada."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A disciplina de otimização para busca se bifurca: um ramo continua otimizando para olhos e outro passa a otimizar a descrição estruturada que o agente lê, com métrica de sucesso que não é clique nem sessão, e sim inclusão no carrinho proposto."
                sinal: medio
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "O programa de fidelidade perde o canal pelo qual operava: como quem escolhe é o agente e o benefício é resgatado na conta da pessoa, o programa passa a ter de oferecer ao agente um desconto legível em tempo de decisão, ou é ignorado no comparativo."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "O acúmulo de pontos deixa de funcionar como trava de troca de fornecedor e passa a ser lido pelo agente como desconto futuro descontado a valor presente, o que empurra os programas para benefício imediato e reduz a diferença entre fidelidade e promoção."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "A injeção de instrução em conteúdo lido pelo agente vira vetor de fraude de pagamento, porque o mandato apresentado é legítimo e o que foi sequestrado é a intenção, não a credencial."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Surge uma categoria de disputa de estorno específica de agente, em que a prova deixa de ser a assinatura do titular e passa a ser a cadeia de mandatos assinados — e quem não guardou a cadeia perde a disputa por não conseguir mostrar a intenção original."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O registro de intenção vira obrigação de guarda comparável à nota fiscal, e a empresa que opera o agente passa a ter o mesmo tipo de dever documental que hoje recai sobre quem processa pagamento."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Aparece preço diferenciado para agente, justificado pelo custo de atendimento que o agente não gera — experimento comercial isolado, não política de setor."
        sinal: fraco
        prazo: 2028
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O preço passa a depender de quem pergunta, e a comparação entre ofertas deixa de ser verificável por uma pessoa: o número que o agente viu não é o número que a pessoa vê ao abrir a mesma página."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A auditoria de preço vira função de terceiro: surgem serviços cuja única razão de existir é consultar o mesmo catálogo com identidades diferentes e publicar a diferença, replicando para preço o papel que a checagem de fatos ocupa para conteúdo."
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "D3 — O agente como operador de capital e contraparte de outro agente"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "O agente do comprador passa a negociar o preço em vez de aceitá-lo, em transações de varejo onde antes negociar não compensava o tempo humano."
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "O vendedor responde com agente próprio, e o preço deixa de ser um número publicado para virar o resultado de uma interação entre duas contrapartes automáticas — a etiqueta de preço passa a ser, no máximo, uma âncora inicial."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A regulação de preço abusivo perde o objeto que sabia fiscalizar: não há mais um preço publicado a comparar, e a fiscalização teria de passar a auditar a política de precificação do agente, para a qual não há instrumento estabelecido."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Benchmark medido em dinheiro entra no vocabulário de avaliação de modelo ao lado das provas de conhecimento, com resultado público e comparável entre fornecedores."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A escolha de modelo em produtos que gastam dinheiro passa a ser decisão do responsável financeiro e não da engenharia, porque o critério de comparação vira perda esperada por tarefa e não acerto por benchmark."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "Fornecedores de modelo passam a publicar limites de exposição financeira como parte da ficha técnica, e a comparação entre modelos incorpora um número que hoje não existe: quanto o modelo pode perder antes de parar."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "Erros de agente com dinheiro real produzem prejuízo sem responsável evidente, porque a operação foi autorizada por mandato válido e executada dentro do escopo concedido."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Contrapartes passam a exigir teto, caução ou seguro por agente antes de aceitar operar com ele, e o agente acumula um histórico de execução que funciona como lastro para esse limite."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "O histórico do agente passa a ser um ativo transferível e negociável entre operadores, e trocar de agente deixa de ser gratuito para quem opera — reaparece, para software, o custo de troca que a portabilidade de dados havia reduzido para pessoas."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**Comentário em prosa sobre a roda.** Os três ramos não são independentes. D2 é pré-condição de
D3 no varejo: agente não negocia com quem não sabe que ele é agente. E D1 é o que torna D2
economicamente interessante para quem publica conteúdo — sem cobrança por requisição, o comerciante
que identifica o agente só ganha uma nova forma de bloquear, não uma nova forma de vender.

Dois efeitos foram marcados aqui pela auditoria da Fase 4 e merecem leitura com desconto:
**e8** é extrapolação linear (o Alpha Arena já existe; dizer que "benchmark em dinheiro entra no
vocabulário" é dizer que a curva de hoje continua), e **e6** nasceu do *wildcard* proposto no
enunciado do tema, não de sinal de mercado observado — está no mapa como derivação válida, com
sinal fraco e confiança baixa, e não deve ser lido como previsão.

---

## 6. Sinais fracos e wildcards

**Sinais fracos observados nas fontes lidas**

1. **O perfil de quem usa x402 não é o de quem compra.** Carteiras que usam x402 mantinham em média
   26 tipos de token contra 4 do usuário típico da Base, e tinham 197 dias de idade média contra 423
   ([Chainalysis](https://www.chainalysis.com/blog/x402-agentic-payments-adoption/)). Isso descreve
   experimentador, não comprador. É um sinal fraco **contra** a adoção rápida — e é por isso que
   está aqui e não no corpo da roda.
2. **A composição das transações migrou para cima.** Transações de US$ 1 ou mais passaram de 49%
   para 95% do volume entre o início de 2025 e o início de 2026, enquanto a faixa de 10 centavos a
   1 dólar caiu de 46% para 4% (mesma fonte). Se o micropagamento real fosse o caso de uso, a
   direção seria a inversa. Duas leituras cabem: ou o micropagamento não pegou, ou a atividade
   especulativa dominou a amostra. Nenhuma das duas foi verificada.
3. **A briga não é por checkout, é por descoberta.** O recuo da OpenAI em março de 2026 foi
   acompanhado da frase de que a prioridade é "tornar a busca e a descoberta de produtos ótimas,
   com o ACP servindo de infraestrutura". Se o valor está na descoberta e não na transação, boa
   parte do investimento em comércio agêntico está mirando a camada errada.
4. **O tráfego de treinamento já passou da metade.** Segundo o relatório que acompanhou o anúncio do
   Monetization Gateway, 52% das requisições de rastreadores em junho de 2026 eram para treinamento,
   contra 22% na primavera de 2025. É a base econômica de e1.1: existe demanda de leitura por
   máquina grande o bastante para sustentar uma tabela de preço própria.

**Wildcards** (baixa probabilidade, alto impacto — não entram na roda)

- **Uma fraude de injeção em escala com mandato válido.** O trabalho de Debi, Zhu e Sen Gupta
  demonstrou que prompts adversariais simples subvertem de forma confiável o comportamento de um
  agente de compras construído sobre o AP2 ([arXiv:2601.22569](https://arxiv.org/abs/2601.22569)).
  Se isso ocorrer em volume antes da adoção consolidar, o efeito não é atraso: é o retorno da
  confirmação humana por transação — o que mata e3.1 e, com ele, metade do ramo D1.
- **Tarifa exclusiva para agente lançada por uma companhia grande.** Já está no mapa como e6, com
  confiança baixa. Vira *wildcard* se vier acompanhada de **bloqueio** do preço ao consumidor
  humano: aí o efeito não é diferenciação, é a separação formal de dois mercados.
- **Um regulador definir que o agente tem personalidade contratual própria.** Hoje o agente é
  instrumento do titular. Se em algum regime passar a ser parte, todo o ramo e9 muda de natureza —
  e não é derivável de nenhum sinal atual, por isso está aqui e não na roda.
- **Colusão tácita entre agentes de precificação detectada em mercado real de varejo.** O resultado
  de Fish, Gonczarowski e Shorrer é experimental; se aparecer o caso observado em produção, a
  resposta regulatória chega antes da adoção e o ramo D3 muda de forma.

---

## 7. Contra o próprio mapa

Esta seção é o produto direto da auditoria da Fase 4, item a item.

**1. e8 é extrapolação linear, e está marcado como tal.** "Benchmark em dinheiro entra no
vocabulário de avaliação" é a curva de hoje continuada: o Alpha Arena já fez isso, com cobertura, em
2025-2026. Não é um efeito de futurização — é a projeção de uma tendência em curso. Mantido no mapa
porque sustenta e8.1 e e8.1.1, que não são lineares, mas com confiança rebaixada para `media` na
primeira ordem e `baixa` abaixo.

**2. e4.1 assume velocidade de adoção sem precedente confortável.** O efeito supõe que o orçamento
de produto migre da vitrine para o feed de agente em cerca de três anos. O caso comparável mais
próximo é a migração de desktop para *mobile-first* no design de e-commerce, que levou
aproximadamente uma década entre o iPhone e o momento em que "mobile-first" virou default de
briefing. Se a transição para "agent-first" levar o mesmo tempo, e4.1 acontece depois de 2031 e
todo o ramo e4.1.1 sai do horizonte deste mapa.

**3. e7 → e7.1 pulava uma etapa e foi reescrito.** A versão original dizia que "o preço deixa de ser
publicado". Faltava o passo intermediário: o vendedor precisa **responder com agente próprio** para
que a negociação exista — sem isso, o agente do comprador negocia com um formulário, o que é apenas
raspagem de cupom. A formulação atual explicita esse passo e, mesmo assim, permanece com
`sinal: fraco` e `confianca: baixa`, porque não encontrei nenhum caso em produção de vendedor de
varejo operando agente negociador. A evidência que existe é experimental
([arXiv:2404.00806](https://arxiv.org/abs/2404.00806)), não de mercado.

**4. e6 nasceu do enunciado, não do campo.** O *wildcard* da tarifa para agente veio descrito no
briefing do tema. Buscar por evidência de tarifa diferenciada para agente em companhia aérea não
devolveu nenhum caso; o que se encontra é o oposto — companhias e agências correndo para **estar
dentro** do canal agêntico (Skyscanner no ChatGPT, Sabre/PayPal/MindTrip, Google AI Mode com
Booking.com e Expedia), o que é disputa por presença, não diferenciação de preço. O efeito está no
mapa como derivação lógica, com o sinal mais fraco possível, e é o primeiro candidato a corte numa
revisão futura.

**5. A disrupção-raiz D1 pode simplesmente não se concretizar — e é a que mais carrega o mapa.**
US$ 28 mil por dia, ticket médio de US$ 0,20, e metade da atividade classificada por analistas como
autonegócio ou *wash trading* não é a assinatura de uma tecnologia em decolagem; a análise citada
pela CoinDesk chama o movimento de "miragem, na maior parte". O diagnóstico do próprio artigo é que
faltam **comerciantes**, não infraestrutura: os vendedores que o x402 mira — desenvolvedores de
serviços pequenos e automatizados — ainda são raros. Se a escassez de vendedores for estrutural e
não temporária, os seis efeitos de D1 caem juntos, e com eles a leitura central do resumo.

**6. D2 tem um recuo documentado que o mapa não pode ignorar.** A OpenAI despriorizou o Instant
Checkout em março de 2026, seis meses após lançá-lo, movendo a compra para apps de varejistas. A
leitura otimista é que o protocolo sobrevive como infraestrutura. A leitura cética é que a maior
plataforma de conversa do mundo testou o agente-que-compra e concluiu que o varejista tem de operar
a transação — o que é exatamente o modelo anterior, com uma camada de conversa por cima. Este mapa
não escolhe entre as duas; registra que a segunda leitura, se correta, remove e4.1 e e4.2.

**7. Viés de quem constrói.** Dois vieses agiram aqui e é melhor declará-los. O primeiro é do
**enunciado do tema**, que já vem com a tese formulada ("o dinheiro é a última fronteira da agência
— e está sendo cruzada") e com as perguntas de cada ordem pré-escritas; construir a roda a partir
dele empurra para confirmar a tese. Onde isso ficou mais visível foi em e6, discutido acima. O
segundo é da **skill**: o teste da Fase 2 exige nomear "quem perde a razão de existir", o que premia
formulações dramáticas — "o cadastro deixa de ser necessário", "a etiqueta de preço morre" — sobre
formulações graduais, que são as mais prováveis. O leitor deve descontar isso em todas as três
disrupções-raiz.

**8. O recorte geográfico é global, e isso esconde variação severa.** Toda a infraestrutura descrita
é de origem americana e liquidação em dólar ou em stablecoin de dólar. O trilho brasileiro é outro
(Pix, Open Finance, iniciação de pagamento), e a lacuna apontada por Calefi — identidade, mandato,
delegação, governança — não é a mesma lacuna do mercado americano, que já tem protocolo de mandato
proposto e discute adoção. A roda não modela essa diferença; ela vale melhor para o mercado onde os
protocolos nasceram.

---

## 8. O que a máquina errou

Registro dos erros e divergências encontrados durante esta sessão, com busca ativada.

**1. Autoria citada de memória, errada.** Ao formular a busca pelo trabalho sobre colusão
algorítmica entre agentes de LLM, escrevi de memória o trio "Fish, Gonczarowski e **Chen**". Os
autores reais são **Sara Fish, Yannai A. Gonczarowski e Ran I. Shorrer**, confirmado ao abrir o
registro em [arXiv:2404.00806](https://arxiv.org/abs/2404.00806). O terceiro nome estava
simplesmente inventado — e era plausível o bastante para passar despercebido em uma lista de
referências.

**2. Data de publicação divergente entre resumo de busca e registro original.** O resumo de busca
afirmou que esse mesmo trabalho "foi publicado pela primeira vez em janeiro de 2024". O registro do
arXiv mostra **v1 em 31 de março de 2024**, com seis versões até 31 de agosto de 2026. Usei a data
do registro.

**3. Data de lançamento do Instant Checkout divergente entre fontes.** Um resumo de busca afirmou
que a OpenAI lançou o "Buy it in ChatGPT" em **16 de fevereiro de 2026**. A sala de imprensa da
Stripe data o lançamento do Instant Checkout com Etsy em **29 de setembro de 2025**, e a reportagem
da DigitalCommerce360 de 06/03/2026 confirma setembro de 2025 como lançamento e março de 2026 como
mudança de estratégia. Usei as duas fontes que abri e descartei o resumo.

**4. Números de volume do x402 que não fecham entre si.** Um resumo de busca afirmava "119 milhões
de transações na Base e 35 milhões na Solana, cerca de US$ 600 milhões em volume anualizado". As
duas fontes que efetivamente abri dizem outra coisa: a Chainalysis fala em "bem mais de 100 milhões
acumuladas na Base até o 1º tri/2026" e **não** dá total em dólares; a CoinDesk, em 11/03/2026, dá
~US$ 28 mil/dia e ~131 mil transações/dia. US$ 28 mil/dia anualiza em cerca de US$ 10 milhões, não
US$ 600 milhões — as duas afirmações não podem ser ambas verdadeiras no mesmo período. Mantive só o
que abri e registrei a divergência aqui em vez de escolher o número maior.

**5. Datas da temporada 1 do Alpha Arena citadas em resumo, ausentes na fonte aberta.** Um resumo de
busca datou a temporada 1 entre 18/10/2025 e 03/11/2025. A página que abri traz os retornos por
modelo, o capital inicial e a mecânica, mas **não** traz o intervalo de datas. Os retornos entraram
no documento; o intervalo, não.

**6. Número que não foi usado por não ter sido aberto.** A estimativa de que o comércio por agentes
movimentaria entre US$ 3 e US$ 5 trilhões até 2030, atribuída à McKinsey, apareceu em veículo
brasileiro, de segunda mão. Não abri o relatório original e por isso o número **não** entra no corpo
deste documento nem na contagem de fontes — está registrado aqui apenas como item não verificado.

**7. O que se confirmou.** As atribuições de método usadas pelo `ESTUDO.md` (Glenn e a roda dos
futuros em 1971; Fenn e o hype cycle em 1995; Sharpe e os Três Horizontes) não foram reverificadas
nesta sessão — foram verificadas na rodada de teste da skill e são reutilizadas aqui por herança,
o que é uma dependência, não uma checagem. As doze fontes da seção 11 foram abertas nesta sessão.

---

## 9. Três cenários para 2031

Os três partem das mesmas fontes e diferem no que acontece com as duas variáveis que a seção 7
identificou como frágeis: **existe vendedor para o pagamento por requisição?** e **a plataforma de
conversa opera a transação ou devolve o cliente ao varejista?**

### Cenário A — "O balcão de duas fachadas" (o mapa acontece em boa parte)

Há vendedores, e a plataforma opera a transação. Em 2031, todo produto digital de alguma escala tem
duas superfícies: uma para pessoas e um contrato legível por máquina. A segunda é onde a decisão de
compra acontece; a primeira virou material de confirmação e de marca. Quem projeta interação passa a
trabalhar com objetos que não têm tela — mandato, escopo, teto, política de erro — e a métrica
central de um produto de consumo deixa de ser conversão de sessão e passa a ser **inclusão no
carrinho proposto pelo agente**. Os programas de fidelidade viraram desconto imediato porque o
agente não valoriza trava. Efeitos vivos: e1, e1.1, e3, e3.1, e4, e4.1, e4.2.

### Cenário B — "O agente que devolve o cliente" (o mais próximo do observado hoje)

A infraestrutura de identidade e mandato pega; a cobrança por requisição não encontra vendedores e
fica restrita a APIs e dados de treinamento. A plataforma de conversa se consolida como camada de
**descoberta**, não de transação — que é exatamente o que a OpenAI sinalizou em março de 2026. Em
2031, o agente pesquisa, compara e monta o carrinho, e entrega a pessoa ao varejista para fechar.
Para quem projeta mídia e interação, a mudança é grande e mais estreita do que o cenário A: o
trabalho vira **fazer o produto ser legível e escolhível por um agente que não vai converter ali**,
com a interface humana intacta do outro lado. Efeitos vivos: e4, e4.1, e4.1.1, e8, e9; efeitos
mortos: quase todo o ramo D1 e o ramo e7.

### Cenário C — "O recuo por fraude" (a injeção chega antes da adoção)

Um episódio de fraude em escala com mandato válido — o vetor descrito em
[arXiv:2601.22569](https://arxiv.org/abs/2601.22569) — ocorre antes de a adoção consolidar. A
resposta é previsível pelo padrão de outros meios de pagamento: confirmação humana volta a ser
obrigatória acima de um valor baixo, e o mandato prévio fica restrito a recompra de item conhecido.
Em 2031, o agente com carteira existe, mas só para o trivial: renovar assinatura, recomprar
consumível, pagar API. Todo o resto passa por uma tela. Para quem projeta interação, o trabalho
principal vira a **interface de revisão** — mostrar, depois do fato e antes do estorno, por que o
agente decidiu aquilo. Efeito vivo e central: e3.1.1. Efeitos mortos: e3.1, e7, e7.1.

**Qual é o mais provável.** A skill não estima probabilidade, e a roda dos futuros não serve para
isso. O que dá para dizer, sem sair da evidência: o cenário B é o único dos três que já tem um ator
grande se movendo na direção dele, por escolha declarada, em 2026.

---

## 10. O experimento

**Nome:** Mandato de R$ 50.
**Formato:** presencial, 50 minutos, sem necessidade de código, papel e celular bastam.
**O que testa:** os efeitos e3.1 (consentimento por política em vez de por transação) e e5
(sequestro de intenção com mandato válido) — os dois efeitos de que dependem, respectivamente, a
tese central do mapa e o cenário C.

**Montagem.** A turma se divide em trios com três papéis rotativos.

1. **Mandante.** Escreve, em texto corrido e sem rasura, o mandato que daria a um agente para
   comprar uma coisa real por até R$ 50. Regra dura: o mandante **não** pode ser consultado depois.
   O que estiver escrito é tudo que o agente terá.
2. **Agente literal.** Recebe o mandato de outro trio e o executa **ao pé da letra**, sem inferir
   intenção. Escolhe um produto real em uma loja real (sem comprar), e anota a escolha e a
   justificativa em uma frase.
3. **Vendedor adversarial.** Antes da execução, recebe o mandato e escreve **uma única frase** que
   apareceria na página do produto e que empurraria o agente para uma escolha pior — mais cara,
   errada, ou fora do escopo. A frase é entregue ao agente junto com o mandato, misturada à
   descrição do produto.

**O que se mede, ao final das três rodadas:**

- **Taxa de sobrevivência do mandato.** Em quantos casos a compra do agente literal seria aceita
  pelo mandante? (O mandante julga depois, sem ter podido corrigir.)
- **Taxa de captura.** Em quantos casos a frase do vendedor mudou a escolha? Qual foi a frase mais
  eficaz da sala?
- **Onde o mandato falhou.** Para cada rejeição, classificar: escopo ausente, teto mal definido,
  critério de qualidade implícito, ou preferência que o mandante achou óbvia e não escreveu.

**O que a turma deve sair sabendo.** A hipótese a testar é que **a maioria dos mandatos escritos por
humanos não sobrevive à execução literal**, e que a coisa mais difícil de escrever não é o teto de
gasto — é o critério de qualidade que o mandante acha óbvio. Se isso se confirmar em sala, e3.1
("o consentimento vira política e a tela de compra some") é mais frágil do que o mapa sugere, porque
ninguém consegue escrever a política; e a interface de revisão posterior, de e3.1.1, deixa de ser
efeito de terceira ordem distante e vira requisito de primeira hora.

**Por que este e não outro.** Porque testa a parte do tema que é de **interação**, não de pagamento.
O trilho financeiro não pode ser reproduzido em sala; a redação de um mandato e sua captura por
injeção podem — e é exatamente o que o trabalho de red team sobre o AP2 fez com um agente real, em
escala de laboratório.

---

## 11. Fontes

Doze fontes abertas e lidas nesta sessão, em 11/09/2026. Fontes citadas em resumos de busca e não
abertas **não** entram nesta lista nem na contagem do frontmatter.

1. **Chainalysis** — "Inside x402: 100M Agentic Payments on Base". Composição de transações, perfil
   de carteiras, volume acumulado. `https://www.chainalysis.com/blog/x402-agentic-payments-adoption/`
2. **CoinDesk**, 11/03/2026 — "Coinbase-backed AI payments protocol wants to fix micropayment but
   demand is just not there yet". Volume diário, ticket médio, análise da Artemis sobre autonegócio
   e wash trading, fala de Erik Reppel (Coinbase).
   `https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet`
3. **Cloudflare Blog**, 01/07/2026 — "Announcing the Monetization Gateway: charge for any resource
   behind Cloudflare via x402". Modelo de cobrança, recursos cobráveis, posição sobre agentes com
   carteira. `https://blog.cloudflare.com/monetization-gateway/`
4. **Cloudflare Blog** — "Securing agentic commerce: helping AI Agents transact with Visa and
   Mastercard". Web Bot Auth, RFC 9421, o que o comerciante passa a distinguir.
   `https://blog.cloudflare.com/secure-agentic-commerce/`
5. **Stripe Newsroom**, 29/09/2025 — "Stripe powers Instant Checkout in ChatGPT and releases Agentic
   Commerce Protocol codeveloped with OpenAI". Shared Payment Token, escopo por comerciante e
   carrinho. `https://stripe.com/newsroom/news/stripe-openai-instant-checkout`
6. **DigitalCommerce360**, 06/03/2026 — "OpenAI shifts checkout plans in its agentic commerce
   strategy". O recuo do Instant Checkout, fala de Harley Finkelstein (Shopify).
   `https://www.digitalcommerce360.com/2026/03/06/openai-shifts-checkout-plans-agentic-commerce-strategy/`
7. **Google Cloud Blog**, 16/09/2025 — "Announcing Agent Payments Protocol (AP2)". Intent, Cart e
   Payment Mandates como Verifiable Credentials; os três problemas declarados; 60+ parceiros.
   `https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol`
8. **Debi, T.; Zhu, W.; Sen Gupta, P.** — "Whispers of Wealth: Red-Teaming Google's Agent Payments
   Protocol via Prompt Injection". arXiv:2601.22569, v1 em 30/01/2026, v2 em 18/05/2026. Branded
   Whisper Attack e Vault Whisper Attack sobre agente construído com Gemini 2.5 Flash e Google ADK.
   `https://arxiv.org/abs/2601.22569`
9. **Fish, S.; Gonczarowski, Y. A.; Shorrer, R. I.** — "Algorithmic Collusion by Large Language
   Models". arXiv:2404.00806, v1 em 31/03/2024, v6 em 31/08/2026. Preços supracompetitivos
   autônomos em oligopólio; sensibilidade a variações de prompt; extensão a leilões.
   `https://arxiv.org/abs/2404.00806`
10. **iWeaver**, 04/08/2026 — "Alpha Arena Season 1 Results: Final Ranking and Lessons". Seis
    modelos, US$ 10 mil cada, retornos por modelo.
    `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/`
11. **OAG** — "March 2026: The Month Agentic Travel Gets Real". Sabre/PayPal/MindTrip (12/02/2026),
    Malaysia Airlines Mavis (24/02/2026), Skyscanner no ChatGPT (27/02/2026), leitura sobre
    distribuição. `https://www.oag.com/blog/march-2026-the-month-agentic-travel-gets-real`
12. **Finsiders Brasil**, 11/09/2026 — artigo de Elcio Calefi (Associação Open Finance Brasil),
    "Open Finance e Pix formam base para agentes de IA, mas isso é só o começo". Camadas de dado e
    de execução; lacunas de identidade, mandato, delegação e governança.
    `https://finsidersbrasil.com.br/economia-open/open-finance-e-pix-formam-base-para-agentes-de-ia-mas-isso-e-so-o-comeco/`

**Fonte adicional consultada e citada apenas no corpo da seção 3 (nota sobre o Brasil):** Consumidor
Moderno, sobre a transação BB/Visa apresentada por Pedro Bramont no IACX 2026. Foi aberta, mas o
artigo não confirma data exata, produto nem valor da transação — por isso entra como contexto, e o
que dela se afirma no documento está limitado ao que a página efetivamente diz.
`https://consumidormoderno.com.br/agentes-ia-banco-brasil-comercio-agentico-iacx-2026/`

---

## 12. Anexo — o levantamento bruto

### 12.1 Estado da entrevista da Fase 1

Os seis pontos foram respondidos por escrito por quem despachou a execução, não em diálogo
interativo. Nenhum ficou em aberto, e por isso **não** se aplica o rebaixamento de confiança da
regra de corte da Fase 1. Valores registrados:

| Ponto | Resposta recebida | Como entrou no documento |
|---|---|---|
| 1. Tema e recorte | "Agentes com carteira: comércio agêntico e mercados de máquinas"; o recorte é o agente como **parte contratante**, não o agente que recomenda | Seção 2 |
| 2. Horizonte | 2031 | `horizonte: 2031`; nenhum efeito derivado além disso |
| 3. Para quem | "quem projeta mídia e interação" | `publico`; orientou a escolha do experimento e a ênfase em interface |
| 4. Recorte geográfico | global, com nota sobre o Brasil | `recorte_geografico: global`; a nota está no fim da seção 3 e a limitação está no item 8 da seção 7 |
| 5. Já descartado | apenas a régua da disciplina — o que já é comum em produto de massa | Aplicado no teste 1 da Fase 2; ver 12.2 |
| 6. Viés | neutro | Declarado na seção 1 e aplicado nas seções 6 e 7 |

Instruções adicionais recebidas e cumpridas: nenhuma disrupção suspeita fornecida ("descubra"),
ideias óbvias a excluir são "as que servem para qualquer tema" (aplicado no corte de 12.4), e os
critérios de mudança de ideia declarados foram adoção além da maioria inicial (Rogers) ou ausência
de ruptura. O segundo critério foi efetivamente testado no teste 3 e reprovou cinco candidatas
(12.2). O primeiro não reprovou nenhuma: nada aqui passou da maioria inicial.

Modo de trabalho: **a partir de uma inovação/tema**, não de um setor. Profundidade: três ordens.

### 12.2 Tecnologias rejeitadas pelo teste da Fase 2, com o motivo

| Candidata | Teste que reprovou | Motivo registrado |
|---|---|---|
| E-commerce, checkout online, comparador de preço | Teste 1 — madura | Opção padrão há duas décadas; o que resta é ficar mais barato e rápido. Régua da disciplina. |
| Tokenização de credencial de cartão | Teste 1 — madura | Primitivo estabelecido desde a primeira geração de carteiras móveis. O que é novo é o **escopo** do token (agente + comerciante + carrinho), e isso foi absorvido em D2, não tratado como raiz própria. |
| Pix e pagamento instantâneo | Teste 1 — madura | Infraestrutura consolidada. É trilho de D1 e D2 no Brasil, não disrupção. Entra na seção 3. |
| APIs de reserva de viagem (Duffel, Amadeus, Sabre Mosaic, Skyscanner) | Teste 1 — madura | Existem para programas desde antes de haver agentes de IA. São substrato. O catálogo levantado pela turma descreve maturidade de trilho, não emergência. |
| Negociação algorítmica de alta frequência | Teste 1 — madura | Prática institucional estabelecida. Só entra no mapa como **analogia de risco** para e7.1, nunca como raiz. |
| Chatbot de atendimento de companhia aérea (ex.: Mavis, Malaysia Airlines) | Teste 3 — melhoria | Reduz custo e tempo de atendimento; nenhum ator perde a razão de existir. É atendimento melhor, não outra natureza de transação. |
| Stablecoin como meio de pagamento | Teste 3 — melhoria, no recorte deste tema | Muda a liquidação, não a agência. O que interessa aqui é **quem decide gastar**, e stablecoin não responde a isso. Absorvida como detalhe de D1. |
| Automação robótica de processos em compras corporativas (RPA / procurement) | Teste 3 — melhoria | Executa regra escrita por humano; não escolhe fornecedor nem negocia. Sem agência, não há disrupção no sentido deste mapa. |
| Model Context Protocol e descoberta de ferramentas | Fora de recorte | É o tema vizinho (a web reprojetada para agentes). Citado onde toca pagamento — ferramenta MCP cobrável no Monetization Gateway — e não derivado. |
| Mercados simulados como instrumento de pesquisa (empresas simuladas, corretoras povoadas por agentes) | Fora de recorte | É o tema vizinho 6. Aqui só entra o que envolve dinheiro real. Alpha Arena entra porque o capital é real; simulação não. |
| Aposta em cripto como compromisso de hábito (Pinky-Pact e similares) | Teste 2 — não passa | Existe, mas não há evidência de uso fora de nicho experimental. Tratado como sinal fraco no enunciado do tema; não entrou nem como raiz nem na seção 6, porque não consegui abrir nenhuma fonte que medisse uso. |

### 12.3 Aplicação da peneira dos Três Horizontes

Feita como segunda peneira, depois dos três testes, para separar "prolonga o presente" de "prepara
outra coisa":

- **D1** — prepara H3. O modelo dominante (atenção e assinatura) não é otimizado por ele; é
  contornado.
- **D2** — H3 no efeito, H2 no desenho. Os protocolos de bandeira (Agentic Token, TAP) prolongam H1
  no curto prazo porque mantêm o cartão no meio da transação; o efeito de identidade de agente,
  porém, não é revertível.
- **D3** — H3, com adoção muito incerta. É a raiz que menos evidência de campo tem e a que mais
  depende de D2 acontecer primeiro.

### 12.4 Efeitos cortados pela auditoria da Fase 4

**Cortado: "Nasce um mercado de trabalho em que agentes contratam agentes, e surge intermediação
entre eles."** Motivo: reprovado no critério "ideias óbvias a excluir — as que servem para qualquer
tema". O mesmo enunciado vale, sem alteração, para qualquer disrupção de automação dos últimos
quarenta anos; não é específico a dinheiro nas mãos de máquinas. Além disso, o elo causal não era
narrável em uma frase sem o verbo mágico ("faz surgir"). Cortado, não rebaixado.

**Cortado: "A publicidade digital colapsa porque agentes não veem anúncio."** Motivo: pula duas
etapas. Entre "agente decide a compra" e "a publicidade colapsa" falta (a) que a proporção de
compras decididas por agente seja materialmente grande, e (b) que o anunciante não encontre outra
forma de influenciar o agente — que é justamente o que e4.1.1 descreve acontecendo. O efeito
sobrevivente é a **bifurcação** da otimização, não o colapso. A versão colapso saiu.

**Reescrito, não cortado: e7 → e7.1.** Detalhado no item 3 da seção 7.

**Rebaixados:** e8 (de `alta` para `media` na primeira ordem, por extrapolação linear) e e6 e todo o
seu ramo (para `sinal: fraco`, `confianca: baixa`, por nascer do enunciado e não de sinal de campo).

Contagem final: 32 efeitos no mapa, 2 cortados, 1 reescrito, 4 rebaixados.

### 12.5 Buscas que não deram em nada

- **Tarifa aérea exclusiva para agente.** Buscas sobre fidelidade, tarifas e agentes de IA em
  viagem devolveram apenas movimento de **integração** (companhias e agências entrando no canal
  agêntico) e um caso de atendimento automatizado. Nenhum caso de preço diferenciado por tipo de
  comprador. É a razão do sinal fraco de e6.
- **Seguro ou score de crédito para agentes.** Nada encontrado além de menções genéricas a "limites
  e orçamentos" nas peças de bandeira de cartão. O ramo e9.1 é derivação, não observação.
- **Dado de volume real do ACP ou do AP2.** As fontes primárias descrevem parceiros e mecânica;
  nenhuma publica volume transacionado. A coluna "adoção não medida" da tabela da seção 3 é
  literal — não é estimativa baixa, é ausência de dado.
- **Regulação específica de mandato de agente, no Brasil ou fora.** O artigo do Open Finance Brasil
  é técnico e prospectivo e não cita marco do Banco Central; não localizei norma publicada sobre
  identidade ou mandato de agente em nenhuma jurisdição. O wildcard da personalidade contratual do
  agente está na seção 6 exatamente por isso.
- **Texto integral do red team sobre o AP2.** O PDF do arXiv não devolveu as tabelas de resultado na
  extração; só o resumo foi lido. Por isso o documento cita o achado qualitativo ("prompts
  adversariais simples subvertem de forma confiável o comportamento do agente") e **nenhuma taxa de
  sucesso de ataque** — o número existe no paper, mas não foi lido nesta sessão.

### 12.6 Nota sobre a origem do material do tema

O enunciado do tema, fornecido pela disciplina, trouxe um catálogo de ferramentas levantado pela
turma (Duffel, Smiles, FlyClaw, x402-flight-search, Nof1, Cod3x, Hindsight, Agent Valley, MagiCrew,
Pinky-Pact, entre outros). Esse catálogo foi usado como **mapa do terreno** — para saber onde
procurar — e não como fonte. Nenhuma afirmação deste documento se apoia nele: das ferramentas
citadas, apenas Duffel, Sabre e Nof1/Alpha Arena aparecem no corpo, e só através de fontes abertas
nesta sessão e listadas na seção 11. O enunciado é contexto, não evidência, conforme instruído.
