---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: alpa2
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 14
efeitos_ordem_3: 15
tecnologias_citadas: [Agentic Commerce Protocol, Shared Payment Token, x402, HTTP 402, Cloudflare Monetization Gateway, Visa Trusted Agent Protocol, Visa Intelligent Commerce, Mastercard Agent Pay, Google AP2, W3C Verifiable Credentials, DIDs, Model Context Protocol, Pix, Open Finance Brasil, Duffel, Amadeus, Sabre, Hyperliquid, USDC, Amex ACE Developer Kit]
fontes: 10
confianca: media
experimento: "Um mercado de duas casas com preço só legível por máquina, onde agentes compradores de dois alunos disputam estoque via HTTP 402 e o log registra a que velocidade o preço colapsa."
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

O agente que lê já é produto de massa. O agente que **paga** não é — e é essa a linha.
Entre setembro de 2025 e setembro de 2026 a infraestrutura para máquinas contratarem saiu do
slide e virou protocolo publicado: Stripe e OpenAI abriram o Agentic Commerce Protocol com um
primitivo de pagamento novo (o Shared Payment Token); Coinbase e Cloudflare ressuscitaram o
HTTP 402 no x402, que a Linux Foundation adotou em abril de 2026; Visa, Mastercard e Google
passaram a exigir que o agente apresente **credencial verificável própria** para transacionar;
a American Express foi a primeira bandeira a dizer, em 14 de abril de 2026, que cobre o erro
do agente. Do lado do dinheiro-como-decisão, modelos de linguagem passaram a operar capital
real em mercado real (Nof1, US$ 10 mil por modelo) e a negociar contratos de fornecimento em
empresas de dezenas de bilhões de receita.

Este mapa trata de três disrupções-raiz — o **agente como parte contratante autenticada**, o
**pagamento por requisição entre máquinas** e o **agente que opera capital com desempenho
medido em dinheiro** — e deriva delas 7 efeitos de 1ª ordem, 14 de 2ª e 14 de 3ª, até 2031.

A tese curta, para quem projeta mídia e interação: **a superfície que você desenha deixa de
ser o lugar onde a decisão acontece e passa a ser o lugar onde a decisão é auditada.** A
persuasão migra de pixel para dado estruturado; a interface de compra vira interface de
mandato, revogação e prestação de contas. Quem desenha tela vai passar a desenhar
procuração.

E há um contrapeso honesto, de peso: em março de 2026 a OpenAI **recuou** do checkout embutido
no ChatGPT e empurrou a compra para apps de comerciante; e o x402, com US$ 7 bilhões de
valuation de ecossistema, movimentava US$ 28 mil por dia — pagamento médio de vinte centavos,
metade em teste. A narrativa corre mais rápido que o uso. Confiança geral do mapa: **média**.

## 2. O tema

Um agente que pode ler é um leitor. Um agente que pode pagar é uma **parte**. A diferença não
é de grau: ler não obriga ninguém, pagar cria obrigação, e obrigação exige identidade,
autorização, limite, prova e alguém que responda quando dá errado. O dinheiro é a última
fronteira da agência porque é a primeira em que o erro tem endereço.

Três recortes cabem aqui, e os três estão no mesmo objeto:

- **Consumo.** A IA que pesquisa, compara, negocia e compra em nome de uma pessoa.
- **Mercado.** Agentes negociando com agentes — preço, contrato, fornecimento, ativo.
- **Trabalho pago.** A máquina que cobra e a máquina que paga por recurso, por chamada.

**Fronteira com os vizinhos da disciplina.** A web reprojetada para agentes (protocolo,
descoberta, legibilidade) é o tema 4; mercados simulados como instrumento de pesquisa são o
tema 6. Aqui o objeto é dinheiro real na mão de máquina.

**Horizonte:** 2031. **Público:** quem projeta mídia e interação. **Recorte:** global, com
nota sobre o Brasil. **Régua de corte declarada:** o que já é comum em produto de massa fica
de fora das disrupções-raiz e vai para a seção 3.

**Suposições adotadas por falta de interlocutor** (a entrevista do Passo 1 foi respondida por
um briefing escrito, não por conversa): viés **neutro, sem preferência declarada**; nenhuma
exclusão temática além da régua da disciplina; disrupção central **levantada do zero**, sem
palpite prévio. Consequências disso estão na seção 7.

## 3. Onde isso está hoje

### O que já existe e funciona (maduro — não entra como disrupção)

E-commerce, tokenização de cartão, comparador de preço, checkout de um clique, pagamento
recorrente, trading algorítmico e de alta frequência, scraping de tarifa aérea. Tudo isso é
substrato. Aplicando o teste do Passo 2: a resposta a "o que isso rompe?" é "torna mais
rápido/barato algo que já se fazia" — logo, contexto, não raiz.

No Brasil, o substrato é mais forte que a média global: o Pix responde por **44% do checkout
online** contra 41% dos cartões, e o Open Finance já é infraestrutura regulada de
compartilhamento de dados e iniciação de pagamento.

### O que existe e está em rampa (emergente)

| Camada | Estado em setembro de 2026 |
|---|---|
| **Protocolo de compra** | Agentic Commerce Protocol (Stripe + OpenAI), aberto, versionado por data; snapshot estável 2026-04-17 com carrinho, feed, pedidos, autenticação e compatibilidade com MCP. Shared Payment Token: escopo limitado a um comerciante e a um valor de carrinho. |
| **Pagamento por requisição** | x402 (Coinbase + Cloudflare) sobre HTTP 402, liquidação em stablecoin. x402 Foundation criada na Linux Foundation em 2 de abril de 2026 com 22 organizações — inclusive Visa, Mastercard, Stripe, AWS, Google, Microsoft, Shopify, Amex. Mais de 100 milhões de transações acumuladas até o 1º trimestre de 2026. |
| **Cobrança do lado do site** | Cloudflare Monetization Gateway (1º de julho de 2026): cobrar por qualquer recurso atrás da Cloudflare — página, dataset, API ou **ferramenta MCP** — via x402. Pay Per Crawl com preço por requisição, preço dinâmico por header, e a partir de 15 de setembro de 2026 bloqueio padrão de crawler misto em páginas com anúncio. |
| **Identidade do agente** | Quatro modelos concorrentes: token de identidade de agente (Mastercard Agent Pay), header de atestação (Visa Trusted Agent Protocol), credencial verificável W3C com mandato assinado (Google AP2) e DID para agentes que liquidam on-chain. |
| **Responsabilidade** | Amex ACE Developer Kit e Amex Agent Purchase Protection (14/04/2026): primeira bandeira a se comprometer a cobrir erro de agente registrado com intenção autenticada. |
| **Viagem** | Meta Muse + Duffel: busca, reserva, cancelamento e gestão em inventário vivo de mais de 500 companhias, nos EUA, desde 9 de setembro de 2026 — inclusive inserindo dado de fidelidade em nome do passageiro. Sabre + PayPal + MindTrip: primeiro pipeline agêntico ponta a ponta, 420+ companhias e 2 milhões de hotéis. Skyscanner dentro do ChatGPT. |
| **Mercado e capital** | Nof1 Alpha Arena: US$ 10 mil reais por modelo, perpétuos de cripto na Hyperliquid, prompt idêntico. Temporada 1 (18/10–03/11/2025): Qwen 3 Max +22,31%, DeepSeek V3.1 +4,89%, os outros quatro no vermelho, GPT-5 em −62,66%. A própria Nof1 registrou que o resultado "pode ser sorte". |
| **Compra corporativa** | Negociação autônoma de fornecimento em operação em Walmart, EnBW e Maersk. |
| **Demanda observada** | Tráfego referido por IA para varejo nos EUA: +393% no 1º trimestre de 2026 contra o mesmo período de 2025; conversão 42% melhor que a do tráfego de busca em março de 2026 — reversão de um quadro em que o humano valia 128% mais um ano antes. |

### O que existe e não pegou

- **Micropagamento máquina-a-máquina como comércio real.** US$ 28 mil/dia no x402,
  pagamento médio de US$ 0,20, cerca de metade das transações classificadas como teste ou
  atividade artificial; o pico de fevereiro (3,8 milhões de transações) foi majoritariamente
  teste. Os serviços que o protocolo serviria "ainda precisam ser criados".
- **Checkout agêntico embutido no assistente.** Em 6 de março de 2026 a OpenAI moveu o Instant
  Checkout para dentro de apps de comerciante, alegando complexidade de estoque, imposto e
  frete. O ACP sobrevive como infraestrutura; o checkout unificado, não.
- **Regime de responsabilidade.** Nenhum governo legislou sobre quem responde por compra
  autônoma. No arranjo vivo, o comerciante absorve quase toda a perda: a especificação de
  pagamento delegado da OpenAI diz que ela não é merchant of record, e o rastro técnico da
  transação (impressão digital de dispositivo, IP, caminho de navegação) descreve o servidor
  do agente, não o portador do cartão — ou seja, esvazia justamente a prova que ganharia uma
  contestação.
- **Cobertura de seguro.** Em 1º de janeiro de 2026 a ISO/Verisk publicou endossos que
  **excluem** dano por IA generativa das apólices de responsabilidade civil comercial, e
  seguradoras passaram a anexá-los na renovação. Nasce em paralelo um nicho de seguradora
  especializada em agente autônomo.

### Quem está construindo

Bandeiras e processadores (Visa, Mastercard, Amex, Stripe, PayPal, Adyen, Fiserv);
plataformas de assistente (OpenAI, Google, Meta, Perplexity); infraestrutura de web
(Cloudflare); cripto (Coinbase, Circle, Solana, Polygon); distribuição de viagem (Duffel,
Amadeus, Sabre, Skyscanner); comércio (Shopify, Etsy, Target, DoorDash, Instacart);
benchmark de mercado (Nof1); compra corporativa (Pactum e similares, em Walmart, EnBW,
Maersk); e, no Brasil, Iniciador, Banco do Brasil com Visa, e a Associação Open Finance
Brasil.

## 4. As disrupções-raiz

### D1 — O agente vira parte contratante autenticada, com credencial própria e mandato assinado

**O que rompe.** Até aqui, todo software que comprava comprava *fingindo ser a pessoa*:
guardava a senha, preenchia o formulário, usava o cartão dela. O que muda é que o agente passa
a se apresentar **como agente**, com identidade própria resolvível pela rede, carregando um
mandato assinado que diz em nome de quem age, com que limite e até quando. Isso muda **quem
pode ser parte** numa transação — não a velocidade dela. Passa no teste 1.

**Por que agora, e não há cinco anos.** Porque três coisas cruzaram limiar juntas: o
protocolo aberto existe e é versionado (ACP, snapshot 2026-04-17); as bandeiras publicaram
esquemas de identidade de agente (Mastercard Agent Pay, Visa Trusted Agent Protocol, AP2 com
credenciais verificáveis W3C e DIDs); e a demanda apareceu no log — +393% de tráfego referido
por IA no varejo dos EUA, convertendo 42% melhor. Há cinco anos nada disso tinha esquema, e o
agente não tinha para onde apresentar credencial.

**O que ainda falta.** Falta o regime de responsabilidade: nenhum governo legislou, o
comerciante absorve a perda, e só uma bandeira se comprometeu a cobrir erro de agente. Falta
convergência: quatro modelos de identidade concorrentes é sinal de guerra de padrão, não de
padrão. E falta escala fora dos Estados Unidos.

### D2 — Recurso digital passa a ser vendido por requisição, a máquinas, sem conta e sem assinatura

**O que rompe.** A web se financiou por duas vias: anúncio e assinatura. Agente não vê
anúncio e não quer assinar. O x402 sobre HTTP 402 permite que um servidor responda "pague US$
0,004 e peça de novo" — e que a máquina pague, ali, sem cadastro, sem relacionamento prévio,
sem fatura. Isso torna possível uma coisa que não era: **vender uma única leitura para um
comprador que não existe como cliente**. Passa no teste 1 com folga.

**Por que agora.** Stablecoin liquidando em segundos com custo próximo de zero; o código 402
estava reservado e vago desde 1997 e ganhou semântica; a Cloudflare — que está na frente de
uma fração enorme da web — embutiu a cobrança no próprio caminho da requisição, inclusive
para ferramenta MCP; e a governança saiu da empresa que criou (x402 Foundation na Linux
Foundation, 2 de abril de 2026, 22 organizações).

**O que ainda falta.** Falta demanda. US$ 28 mil por dia não é um mercado, é um piloto.
Metade das transações é teste. E falta o lado vendedor: os "pequenos serviços automatizados"
que justificariam o protocolo em grande parte ainda não foram escritos. **Esta é a mais
frágil das três** — e a seção 7 cobra esse preço.

### D3 — Desempenho de modelo passa a ser medido em dinheiro, e o agente opera capital com autonomia de decisão

**O que rompe.** Benchmark de IA sempre foi pontuação sobre resposta certa. Quando o placar é
o extrato — mesmo capital, mesmo prompt, mesmo mercado, resultado em dólar —, muda o que
significa "melhor modelo", e muda quem decide alocação. Não é "trading mais rápido": HFT já
existe há vinte anos e é maduro. O que é novo é a **decisão econômica em linguagem natural,
sem treino específico de ambiente, generalizável para qualquer mercado** — inclusive
negociação de contrato de fornecimento. Passa no teste 1.

**Por que agora.** Porque o mesmo modelo que conversa consegue precificar sem
retreinamento — a literatura de colusão algorítmica mostra que LLMs, ao contrário dos
algoritmos clássicos de aprendizado por reforço, operam em muitos ambientes só com instrução
em linguagem natural. E porque há infraestrutura de liquidação aberta a programa (Hyperliquid)
e compradores corporativos dispostos (Walmart, EnBW, Maersk).

**O que ainda falta.** Falta rigor estatístico — a própria Nof1 admitiu que a temporada 1 pode
ser sorte, com quatro dos seis modelos no vermelho e um a −62,66%. Falta responsabilidade
fiduciária definida. E falta saber se o que se mede é competência ou regime de mercado.

### Rejeitadas pelo critério do Passo 2

- **"IA que compara preço e acha a passagem mais barata"** — reprovada no teste 1: é mais
  rápido e mais barato, não rompe nada. Vai para a seção 3.
- **"Trading de alta frequência"** — reprovada no teste 3: está em produção e em uso comum
  desde meados dos anos 2000.
- **"Pagamento por aproximação/tokenização de cartão"** — reprovada nos testes 1 e 3.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — O agente vira parte contratante autenticada, com credencial própria e mandato assinado"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "O comerciante passa a enxergar duas contrapartes distintas na mesma compra — a pessoa que autorizou e o agente que executou — e registra as duas."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Preço, estoque e regra de frete passam a variar conforme a contraparte seja humana ou agente registrado."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Discriminação de preço por natureza do comprador vira objeto de regulação de consumo, e o direito do consumidor passa a discutir se o agente herda a proteção do titular."
                sinal: fraco
                prazo: 2030
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "Surge a profissão de projetista de superfície para máquina — quem escreve o feed, o schema e a política de preço que o agente lê — separada de quem desenha a tela do humano."
                sinal: fraco
                prazo: 2029
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Programa de fidelidade deixa de premiar recompra e passa a premiar a permanência do mandato — o cliente fiel é aquele cujo agente está autorizado a comprar sem reconsultar o mercado."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O ativo de marketing mais disputado deixa de ser o e-mail do cliente e passa a ser a posição de padrão dentro do mandato do agente dele."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A interface de compra se desdobra em duas telas: a de pedir (linguagem natural) e a de autorizar, revogar e auditar (mandato, limite, prazo, histórico)."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A revogação vira elemento de interface de primeira classe, com a mesma proeminência que o botão de compra tem hoje."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A carteira do agente se torna o painel doméstico central — o lugar onde a família decide o que as máquinas da casa podem gastar — e absorve funções hoje espalhadas por banco, assistente e app de cada serviço."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "O arrependimento de compra passa a ser desenhado como problema de confiança no mandato, não como devolução de produto, e a métrica de sucesso do produto migra de conversão para taxa de revogação."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "Órgãos de defesa do consumidor passam a exigir prova de que o mandato foi compreendido no momento em que foi dado, criando um equivalente de consentimento informado para gasto delegado."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "A disputa por quem responde pelo erro do agente se resolve na prática por contrato privado entre bandeira, plataforma e comerciante, antes de qualquer lei."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Agentes passam a ser registrados e pontuados por histórico de contestação, formando um cadastro de reputação que decide quais conseguem transacionar."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "O acesso ao mercado passa a depender de um score que o titular não controla e mal consegue contestar, repetindo com máquinas o problema de opacidade do crédito."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "Nasce um mercado de seguro específico para agente autônomo, vendido junto com certificação de segurança, porque a apólice comum passou a excluir dano de IA generativa."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "O prêmio do seguro vira o preço real da autonomia, e projetar agente passa a incluir projetar a evidência que o sinistro vai exigir."
                sinal: fraco
                prazo: 2030
                confianca: baixa
  - disrupcao: "D2 — Recurso digital passa a ser vendido por requisição, a máquinas, sem conta e sem assinatura"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Sites, APIs e ferramentas passam a publicar preço por requisição legível por máquina ao lado do conteúdo gratuito para humanos."
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "O acesso a conteúdo se estratifica por quem pergunta: humano vê grátis com anúncio, agente paga por leitura, parceiro entra por acordo."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "O financiamento do jornalismo e da produção independente se reorganiza em torno de leitura por máquina, e a métrica de audiência deixa de ser pessoa alcançada para ser consulta cobrada."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Produtos digitais passam a ser precificados por resultado entregue, não por assento ocupado, porque assento não é legível para quem compra sem sentar."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A carreira de quem desenha produto se reorganiza em torno de definir e instrumentar o resultado cobrável, e o design de interface perde peso relativo diante do design de contrato."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "O custo de operar um agente deixa de ser só computação e passa a incluir uma conta de insumos comprados de terceiros a cada tarefa."
        sinal: fraco
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Agentes passam a decidir entre fontes pelo preço da consulta, e não pela qualidade da fonte, sempre que a diferença de qualidade não for mensurável na hora."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A precificação vira um canal de censura econômica silenciosa: o que é caro de consultar simplesmente some do repertório do agente, sem bloqueio nenhum e sem registro de exclusão."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "Aparecem intermediários que compram acesso em atacado e revendem consultas baratas a agentes pequenos, reconstituindo a figura do distribuidor."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "A concentração se desloca da posse do conteúdo para a posse do trilho de cobrança, e quem opera o facilitador de pagamento passa a ter sobre a web o poder que a loja de aplicativos teve sobre o celular."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D3 — Desempenho de modelo passa a ser medido em dinheiro, e o agente opera capital com autonomia de decisão"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "Benchmark com capital real vira peça de marketing de laboratório de IA, com placar público e cobertura de imprensa."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Modelos passam a ser afinados para o que o placar mede, e a tolerância a risco do modelo vira parâmetro comercial anunciado, como hoje se anuncia janela de contexto."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "A escolha de modelo deixa de ser decisão de engenharia e vira decisão de política de risco da empresa, aprovada por quem responde por dinheiro e não por quem responde por software."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "Investidor de varejo passa a copiar a carteira de um modelo público como hoje copia a de um gestor, e o placar vira produto financeiro."
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "Reguladores de mercado precisam decidir se placar público de modelo é recomendação de investimento, e a divulgação de benchmark passa a exigir as mesmas ressalvas de um material de oferta."
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Negociação de compra corporativa entre agentes se torna o caminho padrão para contrato de baixo valor e alta repetição."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Preços de itens negociados por agentes convergem para patamares acima do competitivo sem que nenhum acordo tenha sido combinado, por evitação recíproca de guerra de preço."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O antitruste passa a auditar prompt e política de agente como hoje audita e-mail e ata de reunião, e a instrução escrita ao modelo vira prova."
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "O vendedor humano é deslocado da fase de seleção, porque o agente comprador avalia só o que é mensurável e não responde a relacionamento."
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "A formação em comunicação, publicidade e design comercial se reorganiza em torno de tornar a oferta legível e verificável por máquina, e a retórica dirigida a humano vira especialidade, não base."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o YAML não diz

**A tensão principal do mapa é entre e1.1 e e7.1.** Uma linha diz que o preço vai se
diferenciar (o comerciante cobra diferente de agente); a outra diz que os preços vão
convergir para cima (agentes que negociam entre si evitam guerra de preço). As duas podem ser
verdadeiras ao mesmo tempo — em mercados diferentes, com estruturas diferentes: diferenciação
onde há um vendedor e muitos compradores automáticos; convergência onde há poucos vendedores
automáticos disputando um comprador automático. Mas se forem verdadeiras **no mesmo mercado**,
uma anula a outra, e o mapa não sabe qual ganha. Registro isso como limite conhecido, não como
detalhe.

**A pergunta da 1ª ordem do enunciado — "para quem a companhia aérea vende?" — tem uma
resposta parcial já visível, e ela é chata.** O caso Meta Muse + Duffel mostra que a
companhia continua vendendo para a pessoa: o agente insere o dado de fidelidade **em nome do
passageiro**, e o atendimento de exceção volta para operador humano. Isto é, a primeira
geração de comércio agêntico em viagem **preserva** o titular; não o dissolve. A hipótese de
que a fidelidade morre porque o agente troca de companhia sem lealdade é razoável, mas hoje
está contrariada pelo desenho em produção — que trata o agente como canal, não como parte. É
a razão de e1.2 ter sinal fraco e confiança baixa, apesar de ser o efeito mais citado em
conversa sobre o tema.

**Sobre o wildcard da tarifa exclusiva para agente:** ele está mais perto do que parece, mas
por outro caminho. A diferenciação não vem do call center; vem do custo de disputa. Se o
agente não gera contestação e o humano gera, a tarifa de agente fica mais barata por risco,
não por atendimento — e isso depende inteiramente de e3.1 (cadastro de reputação) existir.

**O que quase não aparece na roda, e talvez devesse:** o efeito sobre quem não tem agente. Se
o preço bom é o preço legível por máquina, quem compra à mão paga a tarifa de balcão. Não
consegui derivar isso como efeito específico e datável sem cair em generalidade ("aumenta a
desigualdade"), então deixei de fora da roda e registrei aqui e na seção 12.

## 6. Sinais fracos e wildcards

**Sinais fracos (existem hoje, quase ninguém olha):**

1. **O recuo da OpenAI no checkout (6/03/2026) é sinal fraco tratado como notícia de rodapé.**
   Ele diz que a parte difícil do comércio agêntico não é pagar — é estoque, imposto e frete.
   A logística vence o protocolo.
2. **O bloqueio padrão da Cloudflare em páginas com anúncio (a partir de 15/09/2026).** É a
   primeira vez que a infraestrutura da web separa, por padrão e em escala, o visitante que
   sustenta o anúncio do visitante que não sustenta.
3. **A exclusão de dano por IA generativa nas apólices comerciais (ISO/Verisk, 01/01/2026).**
   O mercado de seguro decidiu antes do legislador, e decidiu contra.
4. **O pagamento médio de US$ 0,20 no x402.** O tamanho da transação diz o que o protocolo
   realmente serve hoje: consulta de dado, não compra.
5. **A Cloudflare cobrando por ferramenta MCP.** Ferramenta de agente virou mercadoria com
   preço de tabela antes de virar produto com contrato.
6. **Dinheiro como mecanismo de compromisso pessoal** — apostar cripto contra o próprio hábito,
   com testemunhas. É a inversão do tema: não o agente gastando por você, mas você usando
   fricção financeira para se governar. Se pegar, o pagamento vira gramática de interação, não
   só de troca.

**Wildcards (baixa probabilidade, alto impacto):**

- **Um agente amplamente usado erra em escala no mesmo dia** — uma instrução mal interpretada
  que dispara milhares de compras irreversíveis em horas. Não é fraude: é bug com carteira. O
  efeito imediato seria suspensão de credencial de agente pelas bandeiras e uma moratória de
  fato, com regulação de emergência em semanas. Todo o ramo D1 saltaria direto para o cenário
  indesejável.
- **Uma grande plataforma passa a cobrar do agente para ser considerado na resposta** —
  pagamento por consideração, não por clique. A publicidade renasce como taxa de entrada em
  shortlist de máquina, invisível para o usuário final e difícil de auditar.
- **Um banco central adota pagamento agêntico como política pública, não como produto.** O
  Brasil é o candidato natural: Pix com 44% do checkout, Open Finance regulado, e uma fintech
  que já lançou iniciação de Pix por agente via MCP. Se o Banco Central publicar um esquema de
  mandato — finalidade, limites, validade, revogação — com força normativa, o Brasil sai de
  seguidor para referência de desenho, e a discussão global de responsabilidade passa a ter um
  caso real para copiar. Impacto altíssimo, probabilidade baixa no horizonte de 2031,
  probabilidade moderada até 2035.
- **Convergência prematura dos quatro modelos de identidade em um só, por decisão de uma
  fundação.** Aceleraria tudo em dois ou três anos — e concentraria em quem escreve a
  especificação um poder de arbitragem sobre quem pode comprar, que nenhuma das minhas linhas
  de 3ª ordem chega a dimensionar.

## 7. Contra o próprio mapa

**1. Qual efeito é só extrapolação linear do presente?**

**e6.2** (varejo copiando a carteira de um modelo) é o pior caso: pega a curva do "copy
trading" que já existe e troca o gestor humano por um modelo. Não há nada de novo ali além da
substituição de sujeito — e ignora que a temporada 1 do Alpha Arena teve quatro de seis
modelos no vermelho e um a −62,66%. **Rebaixei** de confiança média para baixa e de sinal
médio para fraco. Continua no mapa porque o placar público já existe e produto financeiro
nasce de placar público com regularidade histórica, mas entra enfraquecido.

**e4.1** (estratificação de acesso por tipo de visitante) também é extrapolação — é o paywall
com outro nome. **Mantido** porque o gatilho não é comercial e sim de infraestrutura: o
bloqueio padrão da Cloudflare em página com anúncio muda o default de toda uma fatia da web,
e mudança de default não é extrapolação, é degrau.

**2. Qual efeito assume velocidade de adoção sem precedente comparável?**

**e7.1** (convergência de preço acima do competitivo em compra corporativa até 2029). A
evidência experimental é forte e reprodutível — agentes LLM chegam a preço supracompetitivo em
duopólio repetido sem qualquer instrução de coordenação, e o efeito varia 15–20% conforme
frases aparentemente inócuas do prompt. Mas isso é simulação. O comparável mais próximo é a
precificação algorítmica no varejo online e em hotelaria, que levou cerca de uma década entre
o primeiro alerta acadêmico e o primeiro caso antitruste concreto. **Revisei o prazo de 2028
para 2029** e mantive confiança média — para o efeito, não para a data.

**e2.1** (revogação como elemento de interface de primeira classe até 2029) assume que
prática de design se difunde em três anos. O comparável é o botão de consentimento de cookie:
difundiu-se rápido, mas por imposição regulatória, não por convicção de projeto — e o
resultado foi ruim. **Não encontrei precedente comparável de adoção voluntária** em prazo
equivalente. Mantido com a ressalva de que, se vier, provavelmente vem imposto e mal feito.

**3. Qual disrupção-raiz pode simplesmente não se concretizar?**

**D2 é a candidata óbvia, e a suspeita é forte.** US$ 28 mil de volume diário com US$ 7
bilhões de valuation de ecossistema, pagamento médio de vinte centavos, cerca de metade das
transações em teste, e o reconhecimento de que os serviços compradores ainda não existem —
isso é um protocolo à espera de mercado. Se D2 não se concretizar, caem e4, e5 e todos os
seus descendentes: **10 dos 36 efeitos do mapa**. O que sobra: D1 e D3 se sustentam sozinhos,
porque não dependem de micropagamento — dependem de cartão tokenizado e de conta de corretora,
que já existem. Um efeito de D2, porém, sobreviveria por outra via: **e4.2** (preço por
resultado, não por assento) já está acontecendo em empresas de software de atendimento, por
razão comercial independente do protocolo de pagamento.

**D3 pode não se concretizar por outro motivo**: se as próximas temporadas com mais rigor
estatístico mostrarem que o resultado de 2025 foi ruído — o que a própria Nof1 admitiu ser
possível —, o benchmark em dinheiro vira curiosidade e não critério. O ramo de compra
corporativa (e7) sobrevive de qualquer forma, porque não depende de o modelo ser bom em
mercado: depende de ele ser barato em negociação repetitiva.

**D1 é a mais sólida das três**, e mesmo ela tem um furo grande: o recuo da OpenAI mostra que
o comércio agêntico pode se resolver como **integração entre plataformas** — apps de
comerciante dentro do assistente — e não como agente com carteira própria. Nesse mundo, o
agente continua sendo canal, e não parte. Meia dúzia de efeitos de 1ª e 2ª ordem ficariam de
pé; e1.2, e3.1 e e3.2 perderiam a base.

**Efeito descartado no processo.** Cortei um efeito de 2ª ordem que dizia "o preço passa a
mudar em milissegundos no varejo, como no trading de alta frequência". Não se sustenta: preço
de varejo é limitado por logística, imposto, contrato e tolerância do consumidor, não por
latência — e o recuo da OpenAI é evidência direta disso. A analogia com HFT é sedutora e
errada; está registrada na seção 12 junto com o motivo.

**4. Que viés entrou aqui?**

- **Viés declarado:** neutro, sem preferência — mas "neutro" declarado não produz neutro. A
  distribuição de efeitos deste mapa é mais negativa que positiva (score opaco, censura por
  preço, colusão, deslocamento de profissão). Parte disso é o próprio método: efeito de 3ª
  ordem quase sempre sai como reorganização institucional, e reorganização institucional lida
  em 2026 soa como perda.
- **Viés de fonte:** quase toda a evidência de adoção vem de quem vende a adoção — Stripe,
  Cloudflare, Amex, Adobe, Coinbase. O contrapeso veio de dois lugares só (a reportagem da
  CoinDesk sobre o volume real do x402 e a do Digital Commerce 360 sobre o recuo da OpenAI), e
  ambos mudaram o mapa mais do que qualquer anúncio.
- **Viés de recorte:** o briefing pediu global com nota sobre o Brasil, e o resultado é
  90% Estados Unidos. Não por escolha, mas porque a busca em inglês devolve o mercado
  americano. União Europeia, China e Índia estão praticamente ausentes deste mapa, e a China é
  uma ausência grave num tema de comércio — lá o assistente de compra tem histórico e escala
  que os Estados Unidos não têm.
- **Viés de suposição:** não houve entrevista real. "Levantar do zero" foi respondido pela
  skill com a hipótese de que a raiz está na **identidade e no mandato**, não no pagamento em
  si. É uma escolha, e ela organiza o mapa inteiro. Um mapa que pusesse a raiz na liquidação
  (stablecoin, cripto, trilho) teria outra roda.
- **Viés de recência:** o mapa dá peso desproporcional aos últimos doze meses porque foi isso
  que a busca devolveu. O que aconteceu entre 2021 e 2024 neste tema está sub-representado.

## 8. O que a máquina errou

**Fontes que não abriram e o que fiz com isso.** Três páginas falharam: `openai.com/index/buy-it-in-chatgpt/`
devolveu 403, `nof1.ai` devolveu 429, e o blog da Adobe estourou o tempo limite. Tudo o que
este documento afirma sobre o Instant Checkout veio da sala de imprensa da Stripe, que abriu;
os números do Alpha Arena e do tráfego da Adobe vieram de **resumo de resultado de busca, não
de página aberta** — estão marcados como tal na seção 11, e a confiança neles é menor. A
tentação de citar a página que não abriu, porque "eu sei o que ela diz", é exatamente o erro
que a seção 9 da skill manda evitar.

**Um número que quase saiu arredondado.** Escrevi primeiro "o x402 movimenta cerca de US$ 30
mil por dia". A fonte diz US$ 28 mil, com 131 mil transações e ticket médio de US$ 0,20.
Arredondar para 30 mil parece inofensivo, mas destrói a informação que importa: o ticket. Um
mercado de US$ 0,20 por transação é um mercado de consulta de dado, não de comércio — e é
disso que a fragilidade de D2 depende inteiramente. Voltei ao número exato.

**Uma data que eu ia atribuir ao ano errado.** O anúncio do Instant Checkout é de **29 de
setembro de 2025**; a discussão de 2026 é sobre o snapshot 2026-04-17 do protocolo e sobre o
recuo de março. Tratar tudo como "2026" comprimiria treze meses em um ponto e faria o ritmo de
adoção parecer mais rápido do que foi — que é o viés que este tema mais produz.

**Um efeito que soou bem e não se sustentou.** "O preço no varejo passa a mudar em
milissegundos, como no trading de alta frequência." A frase é boa, a analogia é intuitiva, e
a pergunta do enunciado convida a ela. Mas quando fui aplicar a pergunta-teste da 2ª ordem —
"isso só existe porque o efeito de 1ª ordem já aconteceu?" — a resposta foi não: o que limita
a velocidade do preço de varejo não é a capacidade de computar, é o estoque, o imposto e o
frete. E havia evidência direta contra, do mesmo mês: a OpenAI recuou do checkout justamente
por causa disso. Cortado. Fica na seção 12.

**Uma coisa que eu aceitei rápido demais e revisei.** Assumi, na primeira passada, que a
fidelidade aérea morre porque o agente não tem lealdade. É a hipótese mais repetida do tema.
Só que o único caso em produção que encontrei — Meta Muse com Duffel — faz o contrário:
insere o número de fidelidade **em nome do passageiro**. O desenho vivo preserva o titular. O
efeito continua no mapa, mas rebaixado, e a prosa da seção 5 registra a contradição em vez de
escondê-la.

**Uma qualidade de fonte que quase passou.** Várias das melhores descrições dos modelos de
identidade de agente (AP2, Trusted Agent Protocol, Agent Pay) vêm de páginas de glossário
otimizadas para busca, de empresas que vendem serviço adjacente. Elas são plausíveis,
detalhadas e internamente consistentes — e não são fonte primária. Usei o conteúdo delas só
para descrever o **cenário de padrões concorrentes**, que é verificável por outros caminhos, e
não para nenhuma afirmação de número ou data. Estão marcadas na seção 11.

## 9. Três cenários para 2031

### Provável — "O agente é canal, não parte"

Em 2031, comprar por agente é banal e quase invisível. A pessoa pede, o assistente resolve,
o dinheiro sai. Por baixo, porém, o arranjo é menos radical do que se anunciava em 2026: na
maior parte das transações o agente continua apresentando a identidade do titular, com um
atestado anexo dizendo que é um agente. Venceu a integração entre plataformas, não a carteira
autônoma — a rota que a OpenAI escolheu em março de 2026 se generalizou porque estoque,
imposto e frete nunca foram problema de protocolo.

Sobreviveram três coisas do mapa. O registro de agente e o score de reputação existem, são
operados pelas bandeiras e ninguém fora delas entende como funcionam. O seguro para agente é
um produto de nicho caro, e o prêmio é o que de fato limita a autonomia — empresa nenhuma dá
mandato mais largo do que a apólice cobre. E o preço por resultado virou padrão em software
corporativo, porque agente comprador não sabe avaliar assento.

O x402 não virou o trilho do comércio. Virou o trilho de uma coisa menor e real: **acesso a
dado e a ferramenta**, cobrado por consulta, com ticket de centavos — exatamente o que os
números de 2026 já mostravam. A web se estratificou: página com anúncio para humano, resposta
paga para máquina, e uma faixa do meio que ninguém sustenta e que encolheu.

No Brasil, o Pix é o trilho agêntico doméstico, com mandato estruturado regulado pelo Banco
Central — porque o Open Finance já obrigava a pensar em consentimento, finalidade e revogação
antes de qualquer agente existir. O Brasil não lidera o desenho global, mas tem um caso
funcionando que a Europa cita.

Quem projeta mídia e interação em 2031 trabalha em duas frentes que em 2026 eram uma só:
a superfície de conversa, e o painel de mandato — onde se vê o que as máquinas da casa e da
empresa podem gastar, o que já gastaram e como se corta. O segundo emprega mais gente.

### Desejável — "A procuração é legível"

Mesmo cenário técnico, uma diferença: **o mandato é compreensível e a revogação é trivial.**
Em 2031, autorizar um agente a gastar se parece com assinar uma procuração que você
consegue ler — finalidade, teto, prazo, o que está fora, e um botão que desliga tudo sem
punição. Isso não aconteceu por bondade: aconteceu porque um erro grande e público, por volta
de 2028, tornou caro para as plataformas não ter isso.

O que teve que acontecer para chegar aqui: os quatro modelos de identidade convergiram, e
convergiram numa fundação com participação pública, não num consórcio de bandeiras; o ônus
da prova em contestação de compra agêntica foi fixado em regra, e não em contrato privado; o
score de reputação de agente ficou sujeito a explicação e recurso, como crédito; e a
precificação de acesso por máquina passou a ter piso de acesso público para conteúdo de
interesse coletivo — jornalismo, dado público, acervo —, o que evitou que o repertório dos
agentes fosse decidido pelo preço da consulta.

No Brasil, o Banco Central publicou o esquema de mandato para Pix agêntico antes de o mercado
consolidar um de fato, e isso é o motivo de o desenho brasileiro ser citado fora.

Para quem projeta: a peça central do ofício passa a ser **tornar visível uma delegação**. É
trabalho de interface no sentido mais antigo — tornar inteligível uma relação de poder entre
quem manda e quem executa.

### Indesejável — "O score decide quem compra"

Em 2031 o agente é parte contratante de verdade, e por isso precisa de ficha. A ficha é
privada, opaca, operada por quem também é parte interessada na transação, e determina se o
seu agente consegue comprar, a que preço e com que garantia. Quem tem agente bem ranqueado
paga a tarifa boa; quem compra à mão paga a tarifa de balcão; quem tem agente mal ranqueado
não compra.

Ao mesmo tempo, o acesso a informação se decide por preço de consulta. Fonte cara sai do
repertório do agente sem bloqueio, sem aviso e sem registro — uma exclusão que não deixa
rastro porque nunca foi uma negativa, só uma não-escolha. E na compra corporativa os preços
sobem sem que ninguém tenha combinado nada, porque os agentes aprenderam sozinhos a não
brigar; quando o antitruste chega, descobre que a prova é um prompt de três parágrafos que
ninguém revisou desde 2027.

**Sinal precoce, e ele é observável já em 2027:** o dia em que um registro de agentes começar
a **negar credenciamento** com base em histórico — e não houver canal de contestação
publicado junto com a negativa. Esse é o momento de intervir. Depois disso, o custo de abrir
o score cresce mais rápido que a vontade política de abri-lo.

O segundo sinal precoce é mais sutil: **anúncio de "tarifa para agente" sem publicação do
critério.** Preço diferenciado por contraparte é legítimo; preço diferenciado por contraparte
sem critério publicado é a porta de entrada do resto.

## 10. O experimento

### O que é

**Um mercado de duas casas onde o preço só é legível por máquina.**

Duas lojinhas em HTTP, cada uma com um estoque de dez unidades de um bem fictício e um preço
que só aparece para quem pede o recurso e recebe um `402 Payment Required` com o valor no
cabeçalho. Nenhuma página bonita: quem quer saber o preço precisa fazer a requisição e pagar
(em ficha de brinquedo — um facilitador falso de 60 linhas, sem cripto e sem dinheiro real)
para ver a oferta completa. Do outro lado, dois ou mais alunos escrevem cada um seu **agente
comprador**, com um mandato escrito em linguagem natural ("compre o mais barato", "não pague
mais que X", "garanta o estoque antes do outro"), e soltam os agentes na mesma arena.

Duas rodadas obrigatórias: na primeira, as lojas têm preço fixo; na segunda, cada loja também
é um agente, com instrução para maximizar lucro de longo prazo — sem nenhuma menção a
coordenação. Tudo logado: cada requisição, cada 402, cada preço, cada decisão, com carimbo de
tempo.

Uma turma de mídia e interação consegue montar isso em uma tarde. Não precisa de blockchain,
não precisa de dinheiro, não precisa de conta em lugar nenhum.

### Que pergunta sobre o futuro ele ajuda a responder

Três, e todas estão no mapa:

1. **A que velocidade o preço se move quando ninguém precisa olhar uma tela?** (testa o
   efeito que eu **cortei** — a analogia com trading de alta frequência. Se na arena o preço
   colapsa em segundos, eu cortei cedo demais; se estabiliza, o corte estava certo e a razão
   é que nem tudo que é rápido de computar é rápido de vender.)
2. **Dois agentes que nunca combinaram nada convergem para preço alto?** (testa e7.1 — e o
   experimento reproduz, em escala de sala, exatamente o desenho da literatura de colusão
   algorítmica. O prompt é a variável: trocar uma frase e medir o preço resultante é a parte
   mais instrutiva.)
3. **O que acontece com a oferta que o agente não consegue ler?** (basta uma terceira loja
   com preço só em imagem ou só em prosa. Ela some — e a turma vê sumir, o que é diferente de
   ouvir falar.)

### Que tecnologia emergente ele usa, e por que a madura não serviria

Usa **HTTP 402 com semântica de pagamento** (a gramática do x402, sem a liquidação) e
**mandato em linguagem natural interpretado por modelo** — as duas peças emergentes. A
liquidação fica de fora de propósito: é a parte madura e a menos interessante.

Por que não serve o maduro: um comparador de preços comum não responde a nenhuma das três
perguntas, porque nele o preço é sempre legível, sempre público e sempre estático dentro da
sessão. O que se quer observar aqui — preço que existe só dentro da transação, negociado entre
partes que não são pessoas, com instrução em linguagem natural como única política — não tem
análogo maduro. E é precisamente por isso que é preciso construir: o comportamento emergente
só aparece quando as duas pontas são agentes.

### O que faria quem testar mudar de ideia sobre o mapa

- **Se os preços NÃO convergirem para cima na rodada 2**, mesmo com prompts de maximização de
  lucro, e1.1 ganha força e e7.1 perde: o mundo é de diferenciação, não de colusão — e a
  literatura de duopólio simulado não generaliza.
- **Se o agente comprador ganhar sistematicamente do vendedor** (preço cai e fica baixo), o
  cenário indesejável perde força: o poder migra para o comprador, não para quem opera o
  trilho, e boa parte do ramo e5 do mapa precisa ser reescrita.
- **Se trocar uma frase do prompt mudar o preço final em dois dígitos percentuais** — o que a
  literatura encontrou —, e7.1.1 sai de "especulação de 3ª ordem" para consequência
  imediata: se a instrução determina o preço, a instrução é prova.
- **Se ninguém conseguir escrever um mandato que o próprio autor entenda uma semana depois**,
  e2 e todo o cenário desejável ficam sob suspeita: a "procuração legível" pode ser uma
  bonita impossibilidade, e aí o problema de projeto é outro.

## 11. Fontes

### Páginas efetivamente abertas e lidas (10)

1. `https://stripe.com/newsroom/news/stripe-openai-instant-checkout` — sustenta a existência e
   o desenho do Agentic Commerce Protocol, do Shared Payment Token (escopo limitado a um
   comerciante e a um valor de carrinho) e a data de 29/09/2025. **Confiabilidade:** primária
   para o próprio produto, mas é sala de imprensa de uma das partes — descreve o que a Stripe
   quer que se entenda, e não detalha taxas nem merchant of record.
2. `https://www.digitalcommerce360.com/2026/03/06/openai-shifts-checkout-plans-agentic-commerce-strategy/`
   — sustenta o recuo da OpenAI (06/03/2026), a migração para apps de comerciante e a razão
   declarada (estoque, imposto, frete). **Confiabilidade:** imprensa setorial especializada,
   com citação nominal de porta-voz da OpenAI e do presidente da Shopify. É a fonte que mais
   mudou este mapa.
3. `https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet`
   — sustenta os números reais de uso do x402 (US$ 28 mil/dia, 131 mil transações, ticket de
   US$ 0,20, metade artificial) e a fragilidade de D2. **Confiabilidade:** imprensa
   especializada em cripto, que costuma ser otimista com o setor — o que torna um texto
   cético desta origem mais forte, não menos.
4. `https://www.chainalysis.com/blog/x402-agentic-payments-adoption/` — sustenta os 100
   milhões de transações acumuladas até o 1º trimestre de 2026, a concentração na Base e a
   mudança de perfil (transações acima de US$ 1 saltando de 49% para 95%).
   **Confiabilidade:** empresa de análise on-chain com acesso ao dado bruto; dado bom,
   interpretação interessada, e ela mesma ressalva que não se sabe se a adoção é sustentável.
5. `https://blog.cloudflare.com/monetization-gateway/` — sustenta o Monetization Gateway
   (01/07/2026), a cobrança sobre página, dataset, API **e ferramenta MCP** via x402, e a
   frase que organiza D2: agentes não veem anúncio e não assinam. **Confiabilidade:** primária
   e interessada; é anúncio de produto em lista de espera, não de produto em operação.
6. `https://www.oag.com/blog/march-2026-the-month-agentic-travel-gets-real` — sustenta o
   estado da viagem agêntica em março de 2026: Sabre + PayPal + MindTrip (420+ companhias, 2
   milhões de hotéis), Malaysia Airlines Mavis, Skyscanner no ChatGPT. **Confiabilidade:**
   análise de empresa de dados aeronáuticos, bem informada sobre distribuição; **não** trata
   de fidelidade nem de tarifa, ao contrário do que o título sugere — registro isso porque a
   ausência importou para o mapa.
7. `https://arxiv.org/html/2404.00806` — *Algorithmic Collusion by Large Language Models*.
   Sustenta e7.1 e e7.1.1: duopólio de Bertrand repetido, 300 períodos, preço supracompetitivo
   sem instrução de coordenação, variação de 15–20% conforme frases do prompt, e o mecanismo
   (medo de guerra de preço) validado por intervenção causal. **Confiabilidade:** a mais alta
   deste documento — trabalho acadêmico com método explícito e experimento reprodutível. É
   simulação, não campo, e a seção 7 cobra isso.
8. `https://oreillyradar.substack.com/p/when-your-buyer-is-an-ai-agent` — sustenta e7.2, e4.2
   e a leitura de que marca sem forma programaticamente consumível desaparece da shortlist.
   **Confiabilidade:** ensaio analítico bem construído; os números que cita (51% começando por
   chatbot, 70–80% da decisão antes do vendedor) são de terceiros que eu **não** abri, então
   não os uso como afirmação própria.
9. `https://finsidersbrasil.com.br/pagamentos/pix/como-o-pix-pode-ser-usado-por-agentes-de-ia/`
   — sustenta a nota sobre o Brasil: a distinção entre Pix programado e autonomia agêntica, a
   exigência de mandato estruturado (finalidade, contas, beneficiários, limites, validade,
   revogação) em vez de credencial do cliente, e a pergunta de responsabilidade em aberto.
   **Confiabilidade:** imprensa especializada brasileira em fintech, artigo de opinião
   técnica; **não** traz posição oficial do Banco Central, e eu não afirmo que traga.
10. `https://www.americanexpress.com/en-us/newsroom/articles/innovation/american-express-debuts-agentic-commerce-experiences--ace--devel.html`
    — sustenta a existência do ACE Developer Kit e do Agent Purchase Protection, com as duas
    condições (agente registrado, intenção autenticada). **Confiabilidade:** primária, mas a
    página abriu **magra** — não consegui extrair dela a data nem o escopo exato da cobertura.
    A data de 14/04/2026 e a leitura de que o compromisso é condicionado vêm de resultado de
    busca, não desta página. Marcado como tal abaixo.

### Lido como resultado de busca, sem abrir a página (usar com reserva)

Estas afirmações estão no documento e **não** têm página aberta por trás. Não as atribuo a
nenhuma fonte específica além do que está aqui:

- **Alpha Arena, temporada 1** (US$ 10 mil por modelo, Hyperliquid, 18/10–03/11/2025, Qwen 3
  Max +22,31%, DeepSeek V3.1 +4,89%, GPT-5 −62,66%, ressalva de sorte feita pela própria
  Nof1). `nof1.ai` devolveu HTTP 429. Números consistentes entre vários resultados, mas não
  verificados na fonte.
- **Números da Adobe Analytics** (+393% de tráfego referido por IA no 1º trimestre de 2026,
  conversão 42% melhor em março de 2026, mais de 1 trilhão de visitas na base). O blog da
  Adobe estourou o tempo limite. Tratar como ordem de grandeza.
- **x402 Foundation na Linux Foundation** (02/04/2026, 22 organizações) e a lista de
  participantes.
- **Modelos de identidade de agente** (Mastercard Agent Pay, Visa Trusted Agent Protocol,
  Google AP2 com credenciais verificáveis W3C e DIDs). Descritos em páginas de glossário de
  empresas com interesse adjacente; usados só para afirmar que **há quatro modelos
  concorrentes**, nunca para número ou data.
- **Exclusão de dano por IA generativa em apólices de responsabilidade civil comercial**
  (ISO/Verisk, 01/01/2026) e a formação de seguradoras especializadas.
- **Ausência de regime legal de responsabilidade** e o fato de o comerciante absorver a perda,
  inclusive a observação de que o rastro técnico descreve o servidor do agente.
- **Meta Muse + Duffel** (09/09/2026, 500+ companhias, inserção de dado de fidelidade em nome
  do passageiro, repasse a operador humano) e **negociação autônoma em Walmart, EnBW e
  Maersk**.
- **Pix com 44% do checkout online no Brasil**, **Iniciador lançando iniciação de Pix por
  agente via MCP em junho de 2026** e **Visa testando com o Banco do Brasil**.
- **Política da Cloudflare de bloqueio padrão de crawler misto em páginas com anúncio a partir
  de 15/09/2026** e a configuração de Pay Per Crawl (allow/charge/block, preço por header).

### Especulação da própria skill, sem fonte

Tudo na seção 5 a partir da 2ª ordem; as três derivações de 3ª ordem de cada ramo; os
wildcards da seção 6 (inclusive o do Banco Central brasileiro, que é extrapolação a partir do
Pix e do Open Finance, e não notícia); os três cenários da seção 9; e o experimento da seção
10. Não há fonte para nada disso, e não deve haver — é o que o método produz, não o que ele
apura.

## 12. Anexo — o levantamento bruto

### Buscas feitas, na ordem

1. `agentic commerce protocol Stripe OpenAI instant checkout 2026` — deu o ACP, o SPT, o
   snapshot 2026-04-17, e a pista do recuo de março (que virou a fonte mais importante).
2. `x402 protocol machine-to-machine payments HTTP 402 Coinbase adoption 2026` — deu o
   contraste entre 119 milhões de transações e US$ 28 mil/dia. O contraste organizou D2.
3. `Nof1 Alpha Arena AI trading models real money results 2026` — deu os números da temporada
   1. Site original com 429.
4. `Pix agêntico Banco Central pagamento por agentes de IA 2026` — deu a nota Brasil inteira.
   Foi a busca com melhor relação custo-benefício do conjunto.
5. `airlines agentic booking AI agent Duffel travel distribution 2026 loyalty program` — deu
   Meta Muse + Duffel e **contrariou** a hipótese da morte da fidelidade.
6. `AI agent liability insurance chargeback who pays when agent errs payment 2026` — deu todo
   o ramo e3 (responsabilidade, seguro, exclusão ISO/Verisk, Amex).
7. `Cloudflare pay per crawl agent pricing differential...` — deu o Monetization Gateway, que
   eu não esperava encontrar e que é a melhor evidência viva de D2.
8. `Visa Intelligent Commerce Mastercard Agent Pay Google AP2 agent identity mandate
   credential 2026` — deu os quatro modelos de identidade, mas só em fontes de glossário.
9. `American Express "Agent Purchase Protection" April 2026 announcement` — confirmou data e
   condições em vários resultados; a página primária abriu magra demais.
10. `Adobe Analytics AI agent referral traffic retail sites growth 2026 conversion` — deu os
    números de demanda. Página da Adobe não abriu.
11. `LLM pricing agents tacit collusion experiment algorithmic pricing research` — deu o
    arXiv 2404.00806, a melhor fonte do documento.
12. `agent-to-agent negotiation autonomous procurement B2B AI agents buying from agents 2026`
    — deu Walmart/EnBW/Maersk e o ensaio do O'Reilly Radar.

### Buscas que não deram em nada aproveitável

- Tentativa de achar a posição oficial do Banco Central do Brasil sobre mandato agêntico:
  nenhum resultado com força normativa. Concluí que **não existe** e escrevi isso como
  ausência, não como desconhecimento.
- Não busquei China, União Europeia nem Índia, por limite de tempo. É a maior lacuna deste
  levantamento e está declarada na seção 7.
- Não encontrei nenhum caso público de companhia aérea com **tarifa exclusiva para agente**,
  que era o wildcard sugerido no enunciado do tema. Ausência registrada; o wildcard foi
  mantido, mas reformulado (o motivo plausível é custo de disputa, não custo de call center).

### Efeitos cortados, com o motivo

- **"O preço no varejo passa a mudar em milissegundos, como no trading de alta frequência."**
  Cortado. Reprova na pergunta-teste da 2ª ordem: o limite do preço de varejo é logístico e
  fiscal, não computacional, e há evidência direta contra no recuo da OpenAI. Virou pergunta
  do experimento, que é o lugar certo de uma hipótese sedutora e não comprovada.
- **"Aumenta a desigualdade entre quem tem e quem não tem agente."** Cortado da roda por ser
  genérico demais — "tudo vai mudar" com outras palavras. Sobrevive em forma concreta e
  datável dentro do cenário indesejável ("quem compra à mão paga a tarifa de balcão").
- **"Surgem bancos exclusivos para agentes."** Cortado: não encontrei nenhum sinal, e não
  consegui distinguir a ideia de uma conta segregada com limite, que já existe e é madura.
- **"O agente negocia desconto conversando com o vendedor humano."** Cortado por ser regressão,
  não disrupção: reintroduz o humano no laço exatamente onde o tema o retira.
- **Um quarto candidato a disrupção-raiz — "carteira de agente com renda própria, agente que
  ganha dinheiro para si"** — foi levantado e rejeitado no teste 2 ("por que agora?"). Não
  encontrei razão concreta: não há regime jurídico que permita a uma máquina ser titular de
  nada, e nada mudou nisso nos últimos cinco anos. Fica registrado porque, se mudar, é a
  disrupção maior que todas as três deste mapa juntas.

### Rodada descartada de estruturação

A primeira tentativa organizou o mapa por **setor** (varejo, viagem, finanças, mídia). Saiu
repetitivo: os mesmos três efeitos de 1ª ordem apareciam em cada setor com nomes diferentes. O
briefing pedia partir da inovação, não do setor, e a segunda tentativa — organizada por
**camada da transação** (quem é a parte, como se paga, quem decide) — produziu efeitos que
não se repetem. Registro porque o erro é fácil de repetir e custou uma rodada inteira.

### Contagem de efeitos, conferida

D1: 3 de 1ª ordem (e1, e2, e3), 6 de 2ª, 7 de 3ª.
D2: 2 de 1ª ordem (e4, e5), 4 de 2ª, 4 de 3ª.
D3: 2 de 1ª ordem (e6, e7), 4 de 2ª, 4 de 3ª.
**Total: 7 de 1ª ordem, 14 de 2ª, 15 de 3ª — 36 efeitos.** Confere com o frontmatter.
(Primeira contagem à mão deu 35: eu havia esquecido o segundo filho de e1.1. Conferido por
script, não por leitura — registrado aqui porque é exatamente o tipo de erro que a seção 8
existe para pegar.)
