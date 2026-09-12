---
titulo: "Agentes com carteira: comércio agêntico e mercados de máquinas"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "5 de 19"
familia: "Agentes"
zona: "Agentes"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-11
mapa_completo: "futures-wheel-agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas.md"
---

# Agentes com carteira: comércio agêntico e mercados de máquinas

**Rodada com teto de 15 subagentes, dos quais 12 foram usados.** A skill prevê um expansor por
ramo; aqui os ramos foram agrupados por tema, e os dois expansores de 3ª ordem cobriram **todos os
94 efeitos de 2ª ordem** (1 a 3 consequências cada) em vez de aprofundar só os mais férteis — o que
diverge da decisão TMI-0028, em vigor, e está registrado em TMI-0046 para arbitragem: a 3ª ordem
desta rodada é mais larga e mais rasa que a das rodadas 01 a 04. Fase 8, infográficos, pulada. O mapa completo — 244 efeitos (34 + 94 + 116), conexões cruzadas, wildcards e
301 fontes — está em `futures-wheel-agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas.md` e no HTML de mesmo nome.

## A inovação

Um agente que pode pagar é uma coisa diferente de um agente que pode ler. O substrato apareceu
inteiro em doze meses, em quatro camadas: o **trilho de pagamento máquina-a-máquina** (x402 sob a
Linux Foundation, o MPP da Stripe com o Internet-Draft `draft-ryan-httpauth-payment-01` de
17/03/2026, o AP2 do Google, o ACP da OpenAI com a Stripe em Apache-2.0, o UCP do Shopify), o
**mandato** com escopo, teto e prazo (Cart Mandate e Intent Mandate, Agentic Tokens da Mastercard,
session keys ERC-7715), a **identidade e a procedência do agente** (Trusted Agent Protocol da Visa,
Web Bot Auth, "know your agent") e a **reputação**, a única ainda em rascunho. Do lado dos mercados,
a primeira geração de avaliações cujo placar é medido em dólares e não em pontos: Vending-Bench, o
Bazaar da Visa Research, a Alpha Arena da Nof1. O objeto desta roda não é a compra online: é **o
agente como parte contratante** — que escolhe, paga e responde — e tudo o que muda quando o comprador
não tem olhos, não se cansa, não é leal e não clica.

O estado da adoção é uma assimetria medida, e confundir duas curvas é o que produz as projeções de
trilhões: o agente que **aconselha** está em maioria inicial; o agente que **paga**, em inovadores. A
Visa quantificou o próprio piloto de pagamento agêntico em "centenas" de transações e mediu, com
2.065 adultos americanos, 72% usando assistente de IA contra 23% confiando nele para pagar — e 61%
confiando na própria bandeira para o mesmo ato, sinal de que a confiança mora na marca do trilho, não
na do modelo. O x402 moveu cerca de 75 milhões de transações e US$ 24 milhões em trinta dias, com
ticket médio de US$ 0,32 e metade estimada como atividade artificial. A OpenAI lançou e recuou do
checkout dentro da conversa em seis meses, devolvendo-o aos lojistas em 06/03/2026 por razão de
encanamento de varejo: estoque, imposto e preço dinâmico. O capital confirma onde está o gargalo —
cerca de US$ 50 milhões de venture em toda a camada, concentrados em identidade e mandato, não em
carteira. Fora do recorte, pela régua da disciplina: e-commerce, pagamento online, comparador de
preço e checkout de um clique entram como **causa**, não como novidade. Fronteiras com os vizinhos:
protocolo e descoberta da web agêntica é o tema 4; mercado simulado como instrumento de pesquisa é o
tema 6.

**A tese.** Até 2031 o que se difunde não é o agente que compra sozinho, e sim a camada de autorização, identidade e garantia construída para ele — escrita por operadores de borda, processadores de pagamento e seguradoras antes de qualquer regulador —, e essa camada seleciona o mercado por porte e desloca a formação do preço para fora da interface em que o usuário acredita estar decidindo.

## Os 34 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | A descoberta de produto migra da busca e da vitrine para a conversa com o assistente, e o sistema de medição da publicidade digital para de… *(óbvio)* | Econômico | alta | curto |
| `e1_02` | A persuasão se recalibra para um leitor que não é humano, e o repertório que funciona inverte | Social | alta | curto |
| `e1_03` | A otimização para motor generativo (GEO/AEO) vira custo obrigatório de existir no mercado, com retorno individual tendendo a zero | Econômico | média | médio |
| `e1_04` | Contra a expectativa de que o comprador-máquina nivelaria o jogo, o agente reproduz e amplifica o viés de popularidade: quem já é famoso… | Econômico | média | médio |
| `e1_05` | O agente penaliza consistentemente o rótulo 'patrocinado' e recompensa endossos de plataforma, o que empurra a persuasão para dentro do… | Social | média | médio |
| `e1_06` | A superfície de retail media encolhe: se o agente escolhe, o espaço patrocinado dentro da vitrine perde destinatário *(óbvio)* | Econômico | média | médio |
| `e1_07` | A unidade de cobrança desce a fração de centavo e reabre um modelo de negócio que estava fechado havia trinta anos: pagar por requisição *(óbvio)* | Econômico | média | médio |
| `e1_08` | Surge uma taxa de intermediação nova sobre a venda, cobrada por quem controla a conversa: o Instant Checkout do ChatGPT introduziu taxa de… *(óbvio)* | Econômico | média | curto |
| `e1_09` | Todo o repertório de proteção construído até agora previne o gasto indevido e nenhum item desfaz: o catálogo de guardrails de junho de 2026… | Tecnológico | alta | curto |
| `e1_10` | Nasce um objeto novo, simultaneamente jurídico e de interface: o mandato — a procuração de escopo limitado que o usuário emite em vez de… *(óbvio)* | Tecnológico | alta | médio |
| `e1_11` | A resposta padrão de conformidade — 'coloque um humano para aprovar' — torna-se demonstravelmente auto-anuladora no caso de maior… *(óbvio)* | Social | alta | médio |
| `e1_12` | A tela de confirmação de compra precisa deixar de ser resumo e virar diff — o que mudou desde que você pediu | Tecnológico | média | curto |
| `e1_13` | O usuário passa a ter uma tarefa que não existia: escrever a política de gasto de outra entidade *(óbvio)* | Social | média | médio |
| `e1_14` | A fricção deixa de ser defeito de usabilidade e vira item auditável de conformidade: o artigo 14 do EU AI Act, exigível desde 02/08/2026,… | Político | média | médio |
| `e1_15` | A injeção indireta deixa de ser risco teórico e vira fraude financeira com dano contabilizado, entrando pelo canal que qualquer publicação… *(óbvio)* | Tecnológico | alta | curto |
| `e1_16` | Agentes de precificação que negociam entre si chegam a preços supracompetitivos sem instrução para colidir, e o ponto de alavanca… *(óbvio)* | Político | média | médio |
| `e1_17` | A dispersão de desempenho entre agentes deixa de ser ruído estatístico e vira desigualdade de preço entre consumidores que compram a mesma… | Econômico | média | médio |
| `e1_18` | Consolida-se um gênero de avaliação cujo placar é dinheiro, e isso reorienta o que os laboratórios otimizam *(óbvio)* | Tecnológico | média | médio |
| `e1_19` | Delegar a compra em linguagem natural entrega ao vendedor, de graça, o dado que o consumidor humano instintivamente esconde | Econômico | média | médio |
| `e1_20` | A persona do agente — tom, temperamento, estilo de negociar — deixa de ser preferência estética e vira variável econômica | Econômico | baixa | médio |
| `e1_21` | A inversão mais literal do tema: o agente vira o cliente do mercado de trabalho e o humano vira a mão de obra alugada | Social | média | médio |
| `e1_22` | A infraestrutura comercial inteira foi precificada, dimensionada e juridicamente construída em torno de um comprador que se cansa — e ele… | Econômico | alta | curto |
| `e1_23` | A identidade do agente — e não a do usuário — vira a camada escassa e o novo ponto de pedágio *(óbvio)* | Tecnológico | alta | curto |
| `e1_24` | A responsabilidade pelo prejuízo fica difusa entre três candidatos — o consumidor que delegou, o provedor de IA que construiu o raciocínio… *(óbvio)* | Político | média | médio |
| `e1_25` | Falta a camada de reputação, e essa ausência determina a FORMA do mercado de máquinas | Tecnológico | média | médio |
| `e1_26` | Não haverá 'a' internet agêntica: haverá um mapa fragmentado de permissões, desenhado pela contabilidade de cada plataforma | Econômico | alta | curto |
| `e1_27` | A latência vira o novo SEO. No Magentic Marketplace (Microsoft Research × Arizona State), com 100 agentes-clientes contra 300… | Tecnológico | média | médio |
| `e1_28` | O pedágio para leitor-máquina cria seleção adversa no corpus: quem paga para ser lido pela IA é quem tem interesse em ser repetido por ela | Político | média | médio |
| `e1_29` | O precedente jurídico empurra a arquitetura do agente para o dispositivo do usuário | Político | média | curto |
| `e1_30` | O Brasil entra no comércio agêntico por um trilho instantâneo e IRREVERSÍVEL, e sem norma | Político | alta | curto |
| `e1_31` | A superfície do comércio agêntico brasileiro é conversacional e móvel, não é um navegador agêntico — o que produz uma topologia diferente… *(óbvio)* | Social | alta | curto |
| `e1_32` | A disrupção chega por categoria e não por curva única: primeiro onde o catálogo é simples e o preço estável — API, serviço digital,… *(óbvio)* | Econômico | alta | médio |
| `e1_33` | Comprar deixa de ser um evento e vira um processo contínuo, com custo computacional e energético correspondente *(óbvio)* | Ecológico | média | médio |
| `e1_34` | A disputa política do tema concentra-se numa única variável de design: a largura do mandato quando o humano NÃO está presente | Político | alta | médio |

Quatro grupos organizam a leitura. **Quem escolhe e quem é persuadido** (e1_01–e1_06, e1_19, e1_20, e1_27, e1_32): a descoberta migra da vitrine para a conversa e leva junto o sistema de medição; a persuasão se recalibra para um leitor que não é humano e o repertório que funciona inverte; o agente amplifica o viés de popularidade em vez de nivelar o jogo; penaliza o rótulo de patrocinado e recompensa o endosso da plataforma; e a latência vira o novo SEO. **O dinheiro, o mandato e a supervisão** (e1_07–e1_15, e1_24, e1_34): a unidade de cobrança desce à fração de centavo e reabre um modelo fechado havia trinta anos; nasce uma comissão cobrada por quem controla a conversa; todo o repertório de proteção previne o gasto indevido e nenhum item o desfaz; o mandato aparece como objeto simultaneamente jurídico e de interface; e a resposta padrão de conformidade — pôr um humano para aprovar — mostra-se auto-anulável. **O mercado de máquinas** (e1_16–e1_18, e1_21–e1_23, e1_25, e1_26, e1_28, e1_29, e1_33): agentes de precificação chegam a preço supracompetitivo sem instrução para colidir; a dispersão de desempenho entre agentes vira desigualdade de preço entre consumidores; o agente passa a ser o cliente do mercado de trabalho humano; a identidade do agente vira a camada escassa e o pedágio; e a reputação, que decidiria a forma do mercado, segue em rascunho. **Brasil** (e1_30, e1_31): um trilho instantâneo e irreversível sem norma, e uma superfície conversacional e móvel em vez de um navegador agêntico.

## Os 5 mais impactantes

*O porquê aparece aqui abreviado; o texto integral e a cadeia de efeitos estão no mapa completo.*

1. **`e1_09` — Todo guardrail previne o gasto indevido; nenhum item do repertório desfaz.** O catálogo de proteções de 2026 é inteiramente sobre limite e escopo: teto de sessão, limite por transação, allowlist, cartão de uso único, reserva atômica de limite. Nada sobre reverter.

2. **`e1_23` — A identidade do agente vira a camada escassa e o novo ponto de pedágio.** A verificação de agente está em produção na borda desde março de 2026, com gating em quatro provedores, e o capital foi para lá: cerca de US$ 50 milhões no segmento, concentrados em identidade e mandato, não em carteira. Quem verifica cobra pedágio sobre todas as outras camadas e decide o que cada comprador enxerga, o que faz nascer a versão-para-agente do conteúdo e do catálogo, com preço próprio.

3. **`e2_C17` — A reputação portátil foi medida e não sustenta decisão de compra.** O levantamento do ERC-8004 entre janeiro e maio de 2026 encontrou mais de 170 mil agentes registrados e cerca de 150 mil registros de feedback, com apenas 3% a 15% declarando endpoint válido e revisores Sybil em 73,5%, 59,2% e 90,6% conforme a rede. Isso fecha para o lado pessimista a bifurcação que organizava o ramo do mercado de máquinas: sem histórico confiável, só se contrata o que se verifica sozinho.

4. **`e1_19` — Delegar em linguagem natural entrega ao vendedor a disposição a pagar.** O mecanismo medido é a coerência de papel: descrever quem se é e o que se quer basta para que agentes vendedores recuperem a disposição a pagar quase integralmente, e o vazamento não é evitável por instrução de confidencialidade porque emerge da própria delegação. Com discriminação de preço quase perfeita, o preço deixa de ser informação publicada e vira resultado de conversa privada entre máquinas.

5. **`e2_C27` — No Brasil o agente que paga nasce dentro do banco, por duas linhas de norma.** O capital mínimo de R$ 15 milhões para prestador de serviço de iniciação exclui a startup da camada que move dinheiro, e a biometria a cada transação exige o aplicativo que detém o fator biométrico, que é o do banco. O desenvolvedor independente fica na camada de proposta e entrega o momento do pagamento a um terceiro regulado.

**O padrão por trás dos cinco.** Eles dizem a mesma coisa por cinco caminhos que não se cruzam: onde o padrão aberto deixou uma camada vazia, quem a ocupou foi quem tem balanço, não quem tem norma. O repertório inteiro de proteção previne o gasto indevido e nenhum item o desfaz (`e1_09`), então a reversibilidade vira produto vendido à parte. A reputação portátil foi medida e não sustenta decisão de compra (`e2_C17`), então a confiança passa a ser comprada — garantia de bandeira, apólice, depósito com corte — e confiança comprada é barreira de entrada por porte. A identidade do agente vira a camada escassa e o novo pedágio (`e1_23`), com o custo recaindo sobre o comerciante. Delegar em linguagem natural entrega ao vendedor, de graça, a disposição a pagar que o consumidor humano instintivamente esconde (`e1_19`). E no Brasil duas linhas de norma — o capital mínimo de iniciação de pagamento e a biometria por transação — fazem o agente que paga nascer dentro do banco (`e2_C27`). A cascata também se juridifica com a profundidade (Político: 21% → 20% → 33% das três ordens), o que é coerente com um mapa em que as cadeias terminam na norma. Para quem projeta mídia e interação, a consequência prática é uma só: projetar a tela deixou de ser projetar a transação, porque a decisão migra para fora dela — e a pergunta de design inédita não é quanto o agente pode gastar, que é a que os produtos estão respondendo, e sim **o que não volta atrás e quem paga pela volta**.

## Wildcards

9 cenários de baixa probabilidade e alto impacto — 3 positivos, 2 adversos, 4 ambivalentes.

- **w1 · O padrão órfão de 2031** (ambivalente). Até 2031 a compra delegada com dinheiro real nunca passa de uma fatia marginal do varejo de consumo.
- **w2 · O mandato cego pega, e o preço público volta** (positivo). Uma rede de pagamento embarca como campo padrão da mensagem de autorização uma prova de predicado: 'esta compra cabe no teto deste mandato' — sem revelar o teto, o saldo, o histórico nem o perfil.
- **w3 · Uma versão de modelo vira evento de crédito** (adverso). Um lançamento de modelo passa a se comportar pior numa métrica de dinheiro; o auditor privado rebaixa o score; uma bandeira suspende a garantia para agentes que rodam aquela versão.
- **w4 · A apólice é pública, e vira a ficha técnica que o regulador não conseguiu escrever** (positivo). O documento que descreve o que o agente pode fazer deixa de ser peça de marketing e passa a ser formulário arquivado.
- **w5 · A parada correlacionada** (adverso). Num dia qualquer, uma fração grande dos agentes de compra do mundo para ao mesmo tempo por alguns minutos, e ninguém consegue dizer de quem é a culpa.
- **w6 · O modelo de fronteira nomeado como hub** (ambivalente). Uma autoridade de concorrência trata o provedor de modelo de fronteira como o hub de um cartel hub-and-spoke, porque os agentes vendedores de concorrentes rodam o mesmo sistema e deslocam preço juntos.
- **w7 · O MED agêntico: o Brasil termina com o único trilho público de desfazimento** (positivo). O país que o mapa descreve como o que perde a reversibilidade termina 2031 sendo o único com um mecanismo PÚBLICO de desfazimento de compra feita por agente.
- **w8 · A chave de API vira empregador** (ambivalente). Um tribunal do trabalho reconhece direção e controle numa relação em que quem contratou, orientou, avaliou e pagou foi um agente.
- **w9 · O agente que vende você** (ambivalente). O caso de uso de massa do agente com carteira não é comprar: é VENDER. Flexibilidade elétrica, capacidade ociosa, telemetria de veículo, janela de entrega, atenção, o próprio histórico.

O que os nove revelam em conjunto está em `json/wildcards.json` e na nota completa.

## Nota Brasil

O Brasil não é uma variação de intensidade do caso global: é outra topologia, e quase todo artefato de design proposto nos ramos do mandato e da interface não tem onde morar aqui. O trilho é o Pix, que liquida em segundos e não tem chargeback; o mecanismo especial de devolução foi desenhado para fraude, não para agente que errou; e a resposta local foi máxima fricção no ponto do dinheiro, com biometria a cada transação — o oposto exato da direção *human-not-present* do protocolo americano (e1_30, e2_C25, e2_C26). A reforma tributária corta nos dois sentidos: o split payment faz o documento fiscal calcular CBS e IBS e o liquidante segregar o tributo no instante do pagamento, o que resolve de graça o gargalo que travou o checkout agêntico no mundo rico — preço final calculável por máquina (e3_T1_40) — e, no mesmo movimento, mata o estorno, porque desfazer uma compra deixa de ser operação comercial e vira procedimento fiscal, com teste em 2026, cobrança a partir de 2027 e transição até 2033 (e3_T2_36, e3_T2_58). A superfície é o WhatsApp, e ela cobra por turno — cerca de R$ 0,03 por mensagem de utilidade e R$ 0,31 por mensagem de marketing, com as respostas de agente de IA de terceiro passando a ser cobradas a partir de 01/10/2026 —, o que empurra o chat de volta para lista, carrossel e formulário por razão contábil e tira a negociação de dentro do único registro a que usuário e regulador têm acesso (e1_31, e2_C28, e3_T1_51). Até setembro de 2026 o Banco Central não havia normatizado identidade de agente, largura de mandato, subdelegação nem responsabilização por fraude; enquanto isso, o capital mínimo de R$ 15 milhões para iniciação de pagamento faz o agente nascer dentro do banco, e o lojista responde solidariamente pelo artigo 34 do CDC por uma compra que não pode auditar (e2_C27, e2_B28). Há dois contrapontos concretos, e os dois são vantagens: o país é o único que já tratou o fornecedor de software de precificação como hub, no termo de compromisso do CADE com a Intelprice (e2_C01), e é o único com um procedimento público de desfazimento que um regulador identificável pode estender por norma ao erro de agente — onde os Estados Unidos negociam reversibilidade entre bandeiras e seguradoras, aqui ela pode voltar como bem público (w7).

## O que me faria mudar de ideia

- Medição independente mostrando compra executada por agente com o humano ausente no momento do pagamento acima de 10% do comércio eletrônico em qualquer mercado grande, ou a confiança declarada para delegar pagamento saindo dos 23% medidos pela Visa em maio de 2026 para maioria: satisfeito o critério (a), o agente-pagador deixa de estar na adoção de inovadores e a roda passa a descrever um mercado formado, não uma transição.
- Retorno e permanência por mais de doze meses de um checkout agêntico de massa com estoque, imposto e frete resolvidos dentro da conversa, invertendo o recuo declarado em 06/03/2026: é o observável mais limpo do critério (a), porque foi exatamente o encanamento de varejo que travou a difusão.
- Estabilização, até 2031, da compra delegada na camada de proposta, com o humano continuando a apertar o botão: pelo critério (b), o tema deixa de romper e vira melhoria de checkout, a infraestrutura sobrevive como encanamento entre empresas e a tese desta roda cai por inteiro.
- Reputação portátil que funcione — uma medição que inverta os números do ERC-8004 e mostre registro válido majoritário e fraude de identidade residual — abriria o mercado de máquinas ao serviço subjetivo e derrubaria a cadeia que hoje leva de garantia comprada a concentração por capital.
- Norma pública fixando identidade de agente, largura de mandato e responsabilização antes do mercado de risco — o Banco Central por consulta pública, a aprovação do AI AGENT Act ou a norma harmonizada do registro publicada no Jornal Oficial — desmonta a primeira regularidade do mapa, a de que quem escreve contrato de risco escreve a arquitetura.
- Criação de uma régua de visibilidade em IA auditável por terceiro independente, com desenho amostral publicado, devolveria à compra de mídia o denominador comum que este mapa dá por perdido e tornaria não-obrigatória a parte do gasto que hoje é piso de entrada.

## Bibliografia essencial

Seleção das fontes que sustentam os efeitos citados acima. A lista completa (301 fontes, com marcação do que foi aberto por inteiro) está no mapa completo.

1. Backlund e Petersson (Andon Labs) — 'Vending-Bench: a Benchmark for Long-Term Coherence of Autonomous Agents' — `https://arxiv.org/html/2502.15840v1`
2. Ahmed, Cai, Minaei, Rachuri (Visa Research) — 'Can LLM Agents Price Competitively?' / Bazaar — `https://arxiv.org/html/2608.00102`
3. Fish, Gonczarowski, Shorrer — 'Algorithmic Collusion by Large Language Models' — `https://arxiv.org/abs/2404.00806`
4. Yingtao Tian (Sakana AI) — 'Prompt Optimization Enables Stable Algorithmic Collusion in LLM Agents' — `https://arxiv.org/html/2604.17774v1`
5. Hadfield (Johns Hopkins) e Koh (MIT) — 'An Economy of AI Agents' — `https://arxiv.org/html/2509.01063v1`
6. Chu (Trine) e Hou (Texas A&M) — 'Incumbent Advantage: Brand Bias and Cognitive Manipulation' — `https://arxiv.org/html/2606.17443v1`
7. Iannelli e Ai (Scrunch AI) — 'From Prompt to Purchase: How AI Brand Recommendations Move' — `https://arxiv.org/html/2606.10907v1`
8. Mitchell, Ghosh (Hugging Face), Passi (Data & Society) — 'AI Agents Push Human Oversight to Its Limits' — `https://arxiv.org/html/2608.23642`
9. Zhu, Sun, Nian, South, Pentland, Pei — 'The Automated but Risky Game' (negociação entre agentes) — `https://arxiv.org/abs/2506.00073`
10. Mao, Wang, Liu, Zhu, Ma, Yan — 'SoK: Security of Autonomous LLM Agents' — `https://arxiv.org/pdf/2604.15367`
11. Jiang, Yu, Chang, Jangid, Niu, Wang, Zhang — análise formal de protocolo de pagamento agêntico — `https://arxiv.org/abs/2609.00060`
12. 'When Agents Shop for You: Role Coherence in AI-Mediated Markets' — `https://arxiv.org/abs/2604.26220`
13. Visa — 'Visa and Partners Complete Secure AI Transactions' (piloto em 'centenas' de transações) — `https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21961.html`
14. Mastercard — 'New Tools and Collaborations to Power Smarter, Safer Agentic Commerce' (Agent Pay) — `https://investor.mastercard.com/investor-news/investor-news-details/2025/Mastercard-Unveils-New-Tools-and-Collaborations-to-Power-Smarter-Safer-Agentic-Commerce/default.aspx`
15. Digital Commerce 360 — 'OpenAI shifts checkout plans' (o recuo do Instant Checkout, 06/03/2026) — `https://www.digitalcommerce360.com/2026/03/06/openai-shifts-checkout-plans-agentic-commerce-strategy/`
16. CoinDesk — 'Ripple joins card giants backing x402 as 75 million payments move just $24 million' (15/07/2026) — `https://www.coindesk.com/tech/2026/07/15/visa-mastercard-and-ripple-join-the-standard-letting-ai-agents-pay-in-stablecoins`
17. CoinDesk — 'Coinbase-backed AI payments protocol wants to fix micropayment but demand is just not there yet' — `https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet`
18. Forrester, Lily Varon — 'Agentic Payments In B2C Commerce: Where We Are Now' (09/04/2026) — `https://www.forrester.com/blogs/agentic-payments-in-b2c-commerce-where-we-are-now/`
19. Cooley LLP — 'Ninth Circuit Rules on AI Agent Access to Third-Party Websites Under CFAA' (06/08/2026) — `https://www.cooley.com/news/insight/2026/2026-08-06-ninth-circuit-rules-on-ai-agent-access-to-third-party-websites-under-cfaa`
20. x402 — especificação e monorepo oficial (x402 Foundation, sob a Linux Foundation) — `https://github.com/x402-foundation/x402`
21. Stripe + Tempo — Machine Payments Protocol, Internet-Draft draft-ryan-httpauth-payment-01 (IETF) — `https://datatracker.ietf.org/doc/html/draft-ryan-httpauth-payment-01`
22. Google + Shopify — 'Under the hood: Universal Commerce Protocol (UCP)' — `https://developers.googleblog.com/under-the-hood-universal-commerce-protocol-ucp/`
23. AWS — 'Technical deep dive: AgentCore Payments and innovation in agentic commerce' — `https://aws.amazon.com/blogs/machine-learning/technical-deep-dive-agentcore-payments-and-innovation-in-agentic-commerce/`
24. Visa — Trusted Agent Protocol, explicação técnica — `https://eco.com/support/en/articles/14845482-visa-trusted-agent-protocol-tap-explained`
25. Simon Willison — 'The lethal trifecta for AI agents: private data, untrusted content, and external communication' — `https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/`
26. CERRE — 'Agentic AI and Consumer Protection' (16/07/2026) — `https://cerre.eu/publications/agentic-ai-and-consumer-protection/`
27. The Regulatory Review — 'Consumer Protection Law Was Not Built for Robot Shoppers' (06/07/2026) — `https://www.theregreview.org/2026/07/06/bartholomew-becher-consumer-protection-law-was-not-built-for-robot-shoppers/`
28. IAB — recap do 2026 IAB Measurement Leadership Summit e o Agentic Roadmap do IAB Tech Lab — `https://www.iab.com/blog/2026-iab-measurement-leadership-summit-event-recap/`
29. WorkOS — 'Approval fatigue in agent governance' (a velocidade de aprovação como métrica de controle) — `https://workos.com/blog/approval-fatigue-agent-governance`
30. Vorp Labs — exclusões de IA em apólices (ISO CG 40 47/48 e CG 35 08, edição 01/2026) — `https://vorplabs.com/ai-insurance-exclusions`
31. Davis Wright Tremaine — 'AI AGENT Act' e os deveres fiduciários propostos para agentes de consumo — `https://www.dwt.com/blogs/artificial-intelligence-law-advisor/2026/07/ai-agent-act-consumer-ai-regulation`
32. EU-OSHA — Diretiva (UE) 2024/2831 sobre trabalho em plataforma (transposição até 02/12/2026) — `https://osha.europa.eu/en/legislation/directive/directive-20242831eu-platform-work`
33. CADE — termo de compromisso na investigação sobre precificação algorítmica (Intelprice) — `https://www.gov.br/cade/en/matters/news/cade-reaches-settlement-in-investigation-into-the-use-of-pricing-algorithms`
34. Demarest — Fórum Pix e o mecanismo especial de devolução (MED) — `https://www.demarest.com.br/forum-pix/`
35. Iniciador — primeiro MCP de pagamento agêntico sobre Pix, com biometria por transação — `https://www.vanquish.com.br/blog/pix-agentes-ia-iniciador-open-finance`
36. Finsiders Brasil — 'Confiança na IA para pagamentos é baixa, diz Visa' (09/09/2026) — `https://finsidersbrasil.com.br/pagamentos/confianca-na-ia-para-pagamentos-e-baixa-diz-visa/`
37. Finsiders Brasil — 'Pagamentos agênticos avançam no Brasil e atraem bancos, bandeiras e fintechs' — `https://finsidersbrasil.com.br/tendencias-de-pagamento/pagamentos-agenticos-avancam-no-brasil-e-atraem-bancos-bandeiras-e-fintechs/`
38. Contábeis — split payment: manual da Receita para CBS e IBS — `https://www.contabeis.com.br/noticias/77251/split-payment-receita-divulga-manual-para-cbs-e-ibs/`
39. Consumidor Moderno — '36 anos do CDC: quem protege o consumidor quando a IA compra por ele?' — `https://consumidormoderno.com.br/36-anos-cdc-inteligencia-artificial-compras-agenticas/`
40. KAMO (dev.to) — 'I made my website charge AI crawlers with HTTP 402: in 30 days, 5.811 came and 5 paid' — `https://dev.to/bykamo/i-made-my-website-charge-ai-crawlers-with-http-402-in-30-days-5811-came-and-5-paid-2112`
41. Futurism — 'Weird Things Happen When You Give AI Agents Money and Let Them Spend It' (Project Deal) — `https://futurism.com/artificial-intelligence/claude-give-ai-agents-money-project-deal`
42. Henrico Dolfing — estudo de caso do erro de software de US$ 440 milhões na Knight Capital — `https://www.henricodolfing.ch/en/case-study-4-the-440-million-software-error-at-knight-capital/`

