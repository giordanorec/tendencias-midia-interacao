---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: jcsc
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 12
efeitos_ordem_3: 12
tecnologias_citadas: [x402, HTTP 402, Agentic Commerce Protocol (ACP), Shared Payment Token, AP2 (Agent Payments Protocol), Intent Mandate, Cart Mandate, Payment Mandate, W3C Verifiable Credentials, Mastercard Agentic Tokens, Visa Intelligent Commerce, USDC, Base, Skyfire KYAPay, Know Your Agent (KYA), MCP, A2A, Duffel, Sabre Mosaic, Vending-Bench 2, Alpha Arena (Nof1), Project Vend, Pix, Open Finance Brasil]
fontes: 17
confianca: media
experimento: "Balcão de duas caras — um mesmo serviço servido a humano e a agente, com preço por requisição atrás de HTTP 402, e um agente comprador com orçamento fixo"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Um agente que pode pagar não é um agente que lê um pouco melhor: é uma parte contratante nova.
Entre setembro de 2025 e setembro de 2026 essa passagem deixou de ser hipótese e virou
infraestrutura — o Agentic Commerce Protocol (Stripe/OpenAI), o AP2 do Google com mandatos
assinados criptograficamente, os tokens ligados a agente das bandeiras de cartão, e o x402, que
ressuscitou o código HTTP 402 e ganhou uma fundação sob a Linux Foundation em abril de 2026.
O mapa parte de três rupturas: o agente como **parte contratante** com consentimento assinado e
verificável; o **pagamento por requisição** entre máquinas, que troca anúncio e assinatura por
cobrança na porta do recurso; e a **medida de desempenho em dinheiro**, em que o placar de um
modelo é o saldo em dólares no fim do ano, não a nota num benchmark. Os efeitos que mais mexem
com quem projeta mídia e interação não estão no checkout: estão na bifurcação da interface entre
uma face legível por gente e outra legível por máquina, na perda de força da fidelidade como
vínculo afetivo, na transformação do preço em variável que muda mais rápido do que um humano
consegue ler, e na chegada de um "score" de agente que decide quanto ele pode gastar. A evidência
que segura o mapa é desigual: a adoção de comércio agêntico no varejo já aparece em números
(tráfego de IA para varejo dos EUA subiu 393% no 1º trimestre de 2026, com conversão 42% acima
do tráfego não-IA), enquanto o pagamento máquina-a-máquina em si ainda é quase todo experimental
— metade da atividade do x402 é classificada como gamificada, e o comércio real medido não passa
da casa das dezenas de milhares de dólares por dia.

## 2. O tema

O objeto aqui é estreito de propósito: **dinheiro nas mãos de máquinas**. Não é a web reprojetada
para agentes (protocolo e descoberta), nem mercado simulado como instrumento de pesquisa. É o
momento em que um programa escolhe, paga e responde — e a infraestrutura que nasce para tornar
isso legítimo, rastreável e cobrável.

Encosta em mídia e interação em quatro pontos concretos, e nenhum deles é o botão de pagar:

1. **A interface deixa de ter um único público.** Se o comprador é um agente, a página deixa de
   ser o lugar da decisão; ela vira ou um artefato de máquina (catálogo estruturado, API, mandato)
   ou um artefato de confirmação para o humano depois do fato.
2. **A atenção deixa de ser a moeda única.** Pagamento por requisição é uma alternativa ao modelo
   que sustentou a mídia digital: se um agente paga para ler, o anúncio deixa de ser a única
   resposta para "quem banca isto".
3. **O consentimento vira artefato.** Não um clique num checkbox, mas uma credencial assinada que
   descreve o que foi autorizado. Isso é design de interação — a pessoa precisa entender o que
   assinou antes de o agente gastar.
4. **A confiança muda de lugar.** Marca, fidelidade e reputação foram construídas para memória
   humana. O agente não tem memória afetiva; ele tem regra, preço e histórico.

Por que merece mapa de futuro e não levantamento de estado da arte: porque o estado da arte já
está razoavelmente documentado (é o que está na seção 3), e o que não está documentado é
justamente a cadeia de consequências. As decisões estruturais — quem responde por um erro, quem
pode bloquear um agente, o que acontece com programa de fidelidade, como se precifica um agente —
estão sendo tomadas agora, em tribunal, em fundação de padrão e em mesa de subscrição de seguro.
São exatamente o tipo de coisa que uma roda dos futuros expõe e um levantamento de estado da arte
esconde.

### A entrevista (Etapa 1 da skill)

A skill exige entrevista antes de qualquer conteúdo, e proíbe assumir padrão em silêncio. Esta
rodada foi executada sem interlocutor humano disponível; as respostas abaixo foram fornecidas por
escrito no despacho da rodada, e o que **não** foi respondido está marcado como assumido.

| # | Pergunta | Resposta |
|---|---|---|
| 1 | Horizonte temporal | **2031** |
| 2 | Público-alvo | **Quem projeta mídia e interação** |
| 3 | Recorte geográfico | **Global, com uma nota sobre o Brasil** |
| 4 | Descartes explícitos | **O que já é comum em produto de massa** (a régua da disciplina). Nenhuma outra exclusão. Excluir ainda as ideias óbvias que serviriam para qualquer tema. |
| 5 | Viés desejado | **Neutro** |

Respostas adicionais dadas fora do roteiro das 5 perguntas: disrupção suspeita — nenhuma, descobrir;
profundidade — três ordens; modo — a partir de uma inovação/tema, não de um setor; o que faria
mudar de ideia — evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a
tecnologia não rompe nada.

**Assumido em silêncio, e declarado aqui por exigência da skill:** (a) a "nota sobre o Brasil"
entra como subseção da seção 3 e como comentário em prosa na seção 5, sem ramo próprio na roda —
o recorte da roda é global; (b) o campo `publico_ok` do frontmatter ficou em `false`, o padrão do
formato, porque não houve quem autorizasse o contrário; (c) o idioma de saída é PT-BR, conforme
a disciplina.

## 3. Onde isso está hoje

### O que já existe e funciona

**Os protocolos saíram do papel, e em menos de um ano.**

- **Agentic Commerce Protocol (ACP)**, codesenvolvido por Stripe e OpenAI, anunciado em
  **29 de setembro de 2025**, licença Apache 2.0. Define fluxos de comércio programáticos entre
  comprador, agente e negócio, e introduz um token de pagamento compartilhado — credencial
  "programaticamente controlada, permissionada e registrada" que deixa o agente iniciar o
  pagamento sem jamais ver o número do cartão. A primeira implementação foi o Instant Checkout no
  ChatGPT, com vendedores da Etsy nos EUA e comerciantes Shopify na sequência.
- **AP2 (Agent Payments Protocol)**, do Google, anunciado em **16 de setembro de 2025** com mais
  de 60 organizações. Enuncia explicitamente os três problemas que o comércio agêntico cria —
  **autorização** (o usuário deu mesmo essa autoridade?), **autenticidade** (o pedido do agente
  reflete a intenção?) e **responsabilidade** (quem paga se der errado?) — e responde com três
  *mandates* assinados criptograficamente, carregados como Verifiable Credentials do W3C:
  Intent Mandate, Cart Mandate e Payment Mandate. A cadeia intenção → carrinho → pagamento produz
  uma trilha de auditoria não-repudiável. A lista de parceiros é um retrato de quem levou a sério:
  Mastercard, American Express, PayPal, Adyen, Worldpay, Coinbase, Ethereum Foundation, MetaMask,
  Okta, 1Password, Etsy, Shopee, Salesforce, Intuit, Adobe, além de Deloitte, PwC e Accenture.
- **x402.** A Cloudflare publicou em **23 de setembro de 2025** o suporte a x402 no seu Agents SDK
  e em servidores MCP, com um esquema de pagamento diferido para liquidações não imediatas. O dado
  mais revelador daquele post não é o lançamento: é que sites na Cloudflare já devolviam **mais de
  um bilhão de respostas HTTP 402 por dia** a bots e crawlers — sem padrão nenhum por trás. Em
  **2 de abril de 2026**, a Linux Foundation anunciou a **x402 Foundation**, com o protocolo
  contribuído pela Coinbase e membros iniciais que incluem AWS, American Express, Circle,
  Cloudflare, Fiserv, Google, KakaoPay, Mastercard, Microsoft, Polygon Labs, Shopify, Solana
  Foundation, Stripe e Visa. Em julho de 2026, Cloudflare (Monetization Gateway, em lista de
  espera) e AWS (integração no CloudFront, disponível) passaram a embutir x402 na borda da rede:
  o cliente pede o recurso, o servidor responde 402 com o preço, o cliente paga — USDC na Base,
  custo "menos que uma fração de centavo" — e repete a requisição com o comprovante.
- **Identidade de agente como produto.** A Skyfire vende KYA ("Know Your Agent") e carteira de
  agente: o agente é financiado por cartão, ACH, transferência internacional ou USDC, opera com
  limites de gasto definidos, e o vendedor libera acesso ao LLM, dataset, serviço ou API apenas a
  entidades verificadas. Mesma ideia que as bandeiras implementaram do seu lado, com tokens
  ligados a um agente específico, a um escopo de lojista e a uma política de consentimento.

**O varejo já sente, e os números não são pequenos.** Segundo a Adobe Analytics, medindo mais de
um trilhão de visitas a sites de varejo dos EUA, o tráfego vindo de IA cresceu **393% no 1º
trimestre de 2026** sobre o mesmo período do ano anterior. E houve uma inversão de qualidade, não
só de volume: em março de 2025 esse tráfego convertia **38% pior** que o tráfego normal; em março
de 2026 passou a converter **42% melhor**, com receita por visita **37% acima** do tráfego não-IA,
48% mais tempo na página e 13% mais páginas por visita. Um giro de quase 80 pontos percentuais em
doze meses.

**Viagem é o setor onde isso virou produto primeiro.** Março de 2026 concentrou três anúncios:
Sabre, PayPal e MindTrip montando um pipeline de reserva agêntica ponta a ponta (mais de 420
companhias aéreas e 2 milhões de hotéis via APIs Mosaic, com pagamento automático); a Malaysia
Airlines lançando um agente de atendimento autônomo; e a Skyscanner publicando um app dedicado
dentro do ChatGPT para busca de voos em linguagem natural.

**A avaliação de modelos começou a ser feita em dinheiro.** O Vending-Bench 2, da Andon Labs,
coloca o agente para operar um negócio de vending machine por um ano simulado — estoque, pedidos,
preço, negociação com fornecedor, taxas diárias, fornecedores adversariais, entregas atrasadas,
pedidos de reembolso — e resume tudo a uma métrica só: **o saldo em dólares no fim do ano**, média
de cinco execuções. O baseline humano competente é estimado em torno de **US$ 63 mil/ano**, e os
melhores modelos ficam numa fração disso. Do lado do dinheiro real, o Project Vend da Anthropic
com a Andon Labs pôs o Claude para operar lojas de verdade em três cidades; a fase 2, publicada em
**18 de dezembro de 2025**, relatou margem positiva nas semanas finais depois de trocar o modelo e
dar ferramentas (CRM, inventário, busca) — e reduziu em 80% a mania de dar desconto, sem eliminá-la.
E no Alpha Arena, da Nof1, modelos diferentes receberam cada um US$ 10 mil reais e o mesmo prompt
para operar cripto em mercado real, com posições e raciocínio públicos.

### O que existe e não funciona

- **O volume real do pagamento máquina-a-máquina é minúsculo perto do barulho.** Um rastreador de
  adoção do x402 (snapshot de maio de 2026) contabiliza ~167 milhões de transações liquidadas,
  ~85% na Base — mas estima que **cerca de metade da atividade é gamificada** (teste e volume
  artificial) e credita à CoinDesk um volume de comércio real da ordem de **US$ 28 mil por dia**.
  A InfoQ, cobrindo o primeiro ano do protocolo, cita 169 milhões de pagamentos, 590 mil
  compradores e 100 mil vendedores. Ou seja: adoção técnica ampla, comércio econômico marginal.
- **A contabilidade não acompanha.** A crítica mais prática da comunidade a x402 não é
  criptográfica, é fiscal: *"para quem eu emito a nota dessa receita? que imposto eu aplico?"*
  Micropagamento sub-centavo por requisição não tem, hoje, forma trivial de virar documento fiscal.
- **A segurança do mandato não protege contra o modelo ser convencido.** Um trabalho de red team
  submetido ao arXiv em janeiro de 2026 e revisado em maio testou o AP2 com um agente de compras
  funcional construído com Gemini 2.5 Flash e o Google ADK, e mostrou duas técnicas — *Branded
  Whisper Attack* e *Vault Whisper Attack* — capazes de manipular o ranking de produtos e extrair
  dados sensíveis do usuário por injeção de prompt direta e indireta. O mandato assinado prova o
  que foi autorizado; não prova que a intenção não foi fabricada no caminho.
- **Agente ainda é péssimo empresário.** No Vending-Bench 2 os melhores modelos ficam numa fração
  do humano competente. No Project Vend, mesmo na fase 2, o agente quase fechou um contrato ilegal
  de futuros de cebola, confundiu uma votação de nome com eleição de CEO e continuou dando
  desconto onde não devia.
- **Ninguém sabe de quem é a culpa.** O AP2 lista responsabilidade como um dos três problemas
  centrais; nenhum dos protocolos a resolve. Do lado do seguro, o quadro é de retração, não de
  cobertura: relatos de mercado (agosto de 2026) descrevem formulários de exclusão de IA
  generativa para responsabilidade civil geral (identificados como CG 40 47, CG 40 48 e CG 35 08)
  e exclusões absolutas em linhas de D&O, E&O e fiduciária por parte de ao menos uma seguradora;
  na direção oposta, uma apólice de **US$ 50 milhões** com capacidade do mercado Lloyd's teria sido
  escrita em fevereiro de 2026 para uma empresa de IA, após 5.835 avaliações técnicas. Estes dois
  últimos números são reportados por fornecedor e não foram confirmados em fonte primária — ver
  seção 8.

### Quem está construindo

Três blocos, com interesses que não coincidem. **As bandeiras e processadores** (Visa, Mastercard,
Stripe, Adyen, PayPal, Worldpay) querem que o agente transacione dentro do trilho existente, com
token e responsabilidade nas regras já conhecidas. **As plataformas de modelo** (OpenAI, Google,
Anthropic, Perplexity, Meta) querem ser o lugar onde a compra acontece. **A infraestrutura de
borda e cripto** (Cloudflare, AWS, Coinbase, Circle) quer um trilho novo, por requisição, que não
passe por cartão. Os três blocos assinaram os mesmos consórcios — o que não significa que queiram
a mesma coisa.

E há um quarto ator que ninguém convidou: **o tribunal**. A Amazon processou a Perplexity em
novembro de 2025 pelo agente Comet, obteve liminar de bloqueio em março de 2026, e **em 4 de
agosto de 2026 o Nono Circuito derrubou a liminar**, com o raciocínio de que quando o usuário
manda o assistente completar uma tarefa na Amazon, quem acessa os computadores da Amazon é o
usuário, não a Perplexity — afastando o enquadramento no CFAA. O caso continua, e a pergunta
aberta — se termos de uso bastam para barrar agentes — vale mais que a liminar.

### Nota sobre o Brasil

O Brasil chega a essa fronteira com uma vantagem estrutural e um atraso de mercado. A vantagem é
que Pix e Open Finance foram construídos pelo Banco Central como infraestrutura pública, com um
arcabouço de consentimento bancário maduro — exatamente a peça que o AP2 precisou inventar com
Verifiable Credentials. O mercado se mexeu em 2026: a Visa completou o que descreve como a
primeira transação agêntica do país em março de 2026 e lançou o programa "Agentic Ready" com Banco
do Brasil, Bradesco, Dock, Santander e XP; a Mastercard rodou pilotos com a Pomelo; e a Iniciador
lançou em maio de 2026 o que apresenta como o primeiro MCP de pagamentos agênticos via Pix. Uma
pesquisa Visa citada pela imprensa especializada indica **76% dos brasileiros** com intenção de
usar IA para compras, contra 44% nos EUA — número que merece a desconfiança de sempre com pesquisa
de intenção patrocinada por quem vende a solução. Os obstáculos citados são prosaicos e reais:
curva de aprendizado, confiança do consumidor, proteção de credenciais e — o mais concreto —
**catálogos e estoques em formato decodificável por IA**, que a maior parte do varejo brasileiro
não tem.

## 4. As disrupções-raiz

### Antes: o que foi recusado por maturidade

A skill obriga a aplicar um critério explícito de recusa — tratar como presente, não futuro, o que
já é padrão de mercado consolidado e sem debate real de substituição no horizonte. Os candidatos
levantados e **descartados**, com o motivo:

| Candidato cogitado | Por que foi descartado |
|---|---|
| E-commerce e checkout online | Padrão consolidado há mais de duas décadas. Não há debate sobre sua substituição — há debate sobre quem o aciona. |
| Tokenização de cartão / cofre de credencial | Consolidada; as bandeiras a operam em escala. O que é novo é *a quem* o token é vinculado (o agente), não a tokenização. |
| Comparador de preços e metabusca | Maduro e comum em produto de massa. Um agente que compara é a versão conversacional de algo que já existia. |
| Pix como método de pagamento | Maduro no Brasil — já é 44% do checkout. O emergente é o Pix **iniciado por agente sob consentimento delegado**, não o Pix. |
| Chatbot de atendimento em companhia aérea | Comum em produto de massa. Vira candidato apenas quando o agente executa transação com efeito financeiro, não quando responde pergunta. |
| Pagamento recorrente / assinatura | Padrão consolidado. Aparece aqui só como o modelo que o pagamento por requisição ameaça. |
| Trading algorítmico de alta frequência | Maduro no mercado institucional desde os anos 2000. O que é novo é a chegada dessa dinâmica ao varejo pela mão de agentes de consumidor. |
| Scraping de preço e alerta de passagem | Maduro; a varredura da turma mostra dezenas de implementações. É substrato, não ruptura. |

Descartei também, por instrução explícita do despacho, as ideias que serviriam igualmente a
qualquer tema ("a interface vai mudar", "a regulação vai correr atrás", "os empregos vão se
transformar") — elas só entram quando ancoradas em um mecanismo específico deste tema.

### D1 — O agente como parte contratante, com consentimento assinado e verificável

**O que rompe.** Até aqui, quem comprava era um humano identificado por uma credencial de
pagamento. A ruptura é que o consentimento se descola do ato de pagar e vira um artefato
independente, assinado, escopo-limitado e auditável — o mandato do AP2, o token compartilhado do
ACP, o token agêntico da bandeira. O comprador passa a ser uma entidade nova, que tem identidade
própria (KYA), limite próprio, histórico próprio e — é aqui que dói — responsabilidade indefinida.
Não é uma melhoria do checkout: é a introdução de uma terceira parte no contrato de compra e venda,
que não é nem o comprador nem o vendedor.

**Por que agora e não há cinco anos.** Porque faltavam três coisas que chegaram juntas em doze
meses: modelos capazes de executar tarefa longa com ferramenta (sem isso o agente não chega ao
carrinho), um formato de credencial verificável que as bandeiras aceitassem assinar (os mandates
em W3C VC), e — decisivo — o interesse convergente de quem opera o trilho. Quando Visa, Mastercard,
Stripe, PayPal e Adyen entram no mesmo consórcio em 2025-2026, a questão deixa de ser técnica.

**O que ainda falta acontecer.** Três coisas, nenhuma resolvida: (1) **responsabilidade** — o
próprio AP2 a lista como problema e não a resolve; a alocação entre lojista, emissor e plataforma
de agente segue indefinida além da fraude simples; (2) **defesa contra injeção de prompt** — o red
team de 2026 mostra que o mandato prova autorização mas não protege a formação da intenção;
(3) **direito de acesso** — a decisão do Nono Circuito de agosto de 2026 removeu uma barreira, mas
deixou em aberto se termos de uso bastam para barrar agentes.

### D2 — Pagamento por requisição entre máquinas

**O que rompe.** O modelo econômico da web tem duas formas de financiamento: anúncio e assinatura.
As duas pressupõem um humano — o anúncio pressupõe olhos, a assinatura pressupõe uma relação
continuada. O pagamento por requisição (x402) não pressupõe nenhum dos dois: cobra na porta do
recurso, por chamada, em valores abaixo do centavo, de um cliente que não tem olhos e não quer
relação. Se isso pega, o que muda não é a forma de cobrar: é **para quem o conteúdo é escrito**.

**Por que agora e não há cinco anos.** O código 402 estava no HTTP desde os anos 1990 e nunca foi
usado porque faltava liquidação barata e instantânea e faltava um cliente que fizesse milhares de
requisições pagas sem atrito humano. As duas faltas foram preenchidas: stablecoin em rede de custo
desprezível, de um lado; agentes que consomem API e conteúdo em volume, do outro. O dado da
Cloudflare — mais de um bilhão de respostas 402 por dia a bots, antes de existir padrão — mostra
que a demanda estava represada na forma de recusa.

**O que ainda falta acontecer.** (1) **Contabilidade e imposto** — sem nota fiscal e regime
tributário para fração de centavo, nenhuma empresa média adota; (2) **massa crítica do lado da
oferta** — enquanto houver alternativa gratuita suficiente, o agente desvia do conteúdo pago, e
essa é a objeção mais forte que a comunidade levanta; (3) **volume real** — metade da atividade
medida é gamificada, e o comércio genuíno está na casa de dezenas de milhares de dólares por dia,
o que é ruído.

### D3 — O desempenho do agente medido em dinheiro

**O que rompe.** A avaliação de modelos sempre foi um placar: acertos num conjunto de questões. O
Vending-Bench 2 substitui o placar por um **demonstrativo financeiro** — saldo em dólares ao fim
de um ano de operação, com fornecedor adversarial, entrega atrasada e pedido de reembolso no
caminho. O Alpha Arena faz o mesmo com dinheiro real. O Project Vend, com uma loja real. A ruptura
não é ter um benchmark novo: é que **a unidade de mérito de um agente passa a ser comensurável com
a de um trabalhador**. Quando o resultado é medido em moeda, ele pode ser comparado a um salário,
segurado por uma apólice, financiado por um crédito e cobrado num contrato.

**Por que agora e não há cinco anos.** Porque agora existe um agente que aguenta horizonte longo o
bastante para que "um ano de operação" seja executável, e porque os benchmarks tradicionais
saturaram — quando todo modelo acerta quase tudo, a diferença precisa ser medida em outra unidade.

**O que ainda falta acontecer.** (1) **Distância ainda enorme** — o melhor modelo captura uma
fração do humano competente no Vending-Bench 2; (2) **variância** — o mesmo modelo entrega
resultados muito diferentes entre execuções, o que é veneno para precificação de risco;
(3) **um mercado que aceite comprar esse resultado** — enquanto seguradoras estiverem escrevendo
exclusões de IA em vez de coberturas, o preço do risco do agente não fecha.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente como parte contratante, com consentimento assinado e verificável
    efeitos:
      - id: e1
        ordem: 1
        efeito: Lojistas passam a tratar agente verificado como categoria própria de cliente, com regra, limite e preço distintos do humano
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A superfície de compra se bifurca em uma face legível por pessoa e outra legível por máquina, com promessas diferentes
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O projeto de interface passa a ter um público não-humano com métricas próprias, e a otimização para agente vira parte do ofício de UX
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A disputa sobre quem pode barrar um agente migra do tribunal para o protocolo de identidade e para o termo de uso
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Surge um registro de reputação de agente portátil entre lojistas, que funciona na prática como cadastro de crédito
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O consentimento vira artefato assinado e auditável em vez de um clique numa tela
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Disputas de compra passam a ser resolvidas lendo o mandato em vez do depoimento do cliente
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A trilha de mandatos vira condição contratual de cobertura de seguro, e sua ausência vira exclusão
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A injeção de prompt se torna vetor corrente de fraude financeira e desloca o custo de segurança para quem opera o agente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Vende-se como produto de segurança um agente de compras isolado, sem navegação livre, que só lê catálogo assinado
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A fidelidade perde força como vínculo afetivo porque o agente troca de fornecedor sem custo psicológico
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Programas de fidelidade se reescrevem como desconto condicional legível por máquina em vez de identidade de marca
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A marca deixa de competir por lembrança e passa a competir por elegibilidade em ranking de agente
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Pagamento por requisição entre máquinas
    efeitos:
      - id: e4
        ordem: 1
        efeito: Conteúdo e API passam a ter preço por requisição cobrado do agente, ao lado do anúncio e da assinatura
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O rastreador deixa de ser tratado como custo e passa a ser tratado como receita, mudando o cálculo de quem bloqueia quem
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Parte da documentação técnica e do jornalismo especializado passa a ser escrita para ser comprada por máquina, com outra granularidade
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Contabilidade e tributação de valores sub-centavo viram o gargalo prático da adoção empresarial
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Intermediários passam a agregar micropagamentos em fatura única para caber na contabilidade que já existe
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O agente ganha orçamento próprio e limite de gasto como primitiva visível de produto
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O custo de uma tarefa passa a ser exibido ao usuário em dinheiro em vez de em tokens ou tempo de espera
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A interação vira negociação explícita de orçamento entre pessoa e agente antes da execução da tarefa
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O desempenho do agente medido em dinheiro
    efeitos:
      - id: e6
        ordem: 1
        efeito: A avaliação de modelos incorpora resultado financeiro medido em moeda como métrica de topo
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A distância entre agente e humano competente passa a ser discutida em moeda, o que esfria a promessa de autonomia total
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Contratos de serviço com IA passam a ser escritos por resultado econômico em vez de disponibilidade e volume
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Garantias e seguros de agente passam a ser precificados pelo histórico auditável do próprio agente
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Agente sem histórico verificável fica sem acesso a transações de maior valor, e o score define o teto de gasto
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Agentes negociando com agentes tornam o preço uma função de quem consulta e com que frequência
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Reguladores de concorrência passam a tratar homogeneidade de modelo como fator de risco de coordenação de preço
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Diversidade algorítmica vira exigência escrita em política pública ou em contrato de fornecimento
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O preço passa a mudar em velocidade incompatível com a leitura humana e exige uma janela mínima de estabilidade
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A interface de compra passa a exibir validade e histórico do preço como elemento obrigatório de confiança
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A roda mente sobre a forma da cadeia.** O YAML sugere árvore; o que existe é malha. `e1.2.1`
(registro de reputação de agente), `e6.2` (seguro precificado por histórico) e `e6.2.1` (score que
define teto de gasto) são o mesmo objeto visto de três lados — o lojista chama de reputação, a
seguradora de sinistralidade, o emissor de limite. Mantive separados porque cada um nasce de uma
pressão diferente e pode aparecer sem os outros; mas se um deles se materializar, a probabilidade
dos outros dois salta. É o cruzamento mais provável deste mapa com os mapas dos temas vizinhos
(identidade e contenção de agentes).

**A cadeia continuaria além do terceiro nível, e o corte é do formato, não do fenômeno.** Dois
prolongamentos que ficaram de fora: de `e3.1.1` sairia uma quarta ordem sobre a economia da atenção
— se a marca compete por elegibilidade em ranking de agente e não por lembrança, o que acontece com
a verba de mídia de topo de funil, que é o que banca boa parte da produção cultural. E de `e7.2.1`
sairia a regra de preço com validade declarada, que tem precedente histórico em outros mercados e
mudaria o desenho de qualquer vitrine. Registro aqui porque a skill corta em três níveis por
decisão de engenharia, não porque o fenômeno pare ali.

**Os prazos são teto, não estimativa.** Todo `prazo` está dentro do horizonte pedido (2031). Dois
efeitos de terceira ordem — `e6.1.1` (contrato por resultado econômico) e `e7.1.1` (diversidade
algorítmica exigida em política pública) — provavelmente só se **consolidam** depois de 2031; o que
marquei em 2031 é o momento em que aparecem os primeiros casos, não o momento em que viram norma.
Digo isso em prosa em vez de escrever uma data fora do intervalo, porque uma data fora do horizonte
contratado é ruído no infográfico da turma.

**O Brasil não tem ramo próprio na roda, e isso é escolha.** O recorte contratado é global. Mas
dois efeitos se comportam de forma diferente aqui: `e2` (consentimento como artefato) chega ao
Brasil por um caminho mais curto, porque o consentimento do Open Finance já é infraestrutura
regulada — o país pode pular a etapa de inventar a credencial; e `e1.1` (bifurcação da interface)
chega mais devagar, porque depende de catálogo estruturado, que é justamente a lacuna apontada pelo
mercado brasileiro.

**A roda não tem o efeito de segunda ordem mais interessante, porque ele é negativo.** Se o
pagamento por requisição não pegar — e o volume real diz que pode não pegar — o efeito é a
**consolidação**: sem trilho alternativo, o comércio agêntico inteiro passa por ACP e pelas
bandeiras, e a camada de descoberta fica com três ou quatro plataformas de modelo. Não-evento
também é evento, e este seria o mais consequente do mapa.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o crawler que vira cliente.** Mais de um bilhão de respostas 402 por dia na
Cloudflare *antes* de existir padrão é a coisa mais subestimada deste levantamento. É demanda
reprimida expressa como recusa. Se a razão entre "402 devolvido" e "402 pago" se mover, ainda que
pouco, muda a economia de quem publica.

**Sinal fraco 2 — a agregação de micropagamento como negócio.** A pergunta "para quem eu emito a
nota?" parece contabilidade chata e é a porta de entrada de um intermediário novo. Quem resolver
fatura, imposto e conciliação de fração de centavo ocupa a mesma posição que os adquirentes
ocuparam nos anos 2000.

**Sinal fraco 3 — a fidelidade sendo *acrescentada* pelo agente.** Um agente pessoal que adiciona a
informação de fidelidade em nome do passageiro é o contrário do que este mapa previu em `e3`. Se
essa for a norma, o programa de fidelidade não morre: ele vira uma regra que o agente aplica melhor
que a pessoa — e a pressão cai sobre a companhia que *não* expõe a regra em API.

**Sinal fraco 4 — o silêncio dos reguladores de consumo.** Há protocolo, há fundação, há tribunal e
há antitruste. O que não apareceu em nenhuma fonte lida foi autoridade de defesa do consumidor
tratando "compra feita por agente" como categoria — arrependimento, informação prévia, publicidade
enganosa dirigida a máquina. É o tipo de silêncio que costuma terminar em regra abrupta.

**Wildcard 1 — a tarifa exclusiva para agentes.** Uma companhia aérea (ou uma rede de varejo)
lançar preço mais barato **para compra feita por agente**, porque agente não liga para o call
center, não pede reembolso por telefone e não abandona carrinho. O dia em que isso acontecer, a
discriminação de preço entre humano e máquina deixa de ser hipótese ética e vira tabela — e
inverte o mapa inteiro: em vez de lojistas bloqueando agentes, lojistas cortejando agentes. Baixa
probabilidade no curto prazo, impacto máximo.

**Wildcard 2 — o primeiro prejuízo grande e público causado por injeção de prompt em compra
agêntica.** Não um roubo de cartão: uma cadeia de compras errada, em escala, disparada por texto
plantado numa página. As técnicas já estão publicadas em artigo revisado. Um caso com nome, valor e
manchete congela a adoção por um ou dois anos e força a resposta regulatória que hoje não existe.

**Wildcard 3 — a decisão judicial que vai na direção contrária.** O Nono Circuito disse que quem
acessa é o usuário. Um tribunal de outra jurisdição — ou a mesma corte no mérito — dizer o oposto,
ou uma corte europeia decidir que o agente é um agente econômico autônomo e não um instrumento do
usuário, reescreve `e1.2`, `e1.2.1` e boa parte da disrupção D1. Probabilidade não desprezível,
impacto estrutural.

**Wildcard 4 — o agente que ganha dinheiro de verdade, sozinho, e o fato circula.** Hoje o placar é
o inverso: fração do humano competente, variância alta, prejuízo no mundo real. Um resultado
público, replicado e auditado em que um agente supera o operador humano num negócio real é o
gatilho que faz a curva de expectativa disparar — e, pelo que a literatura de hype ensina, o que
vem depois de uma expectativa disparada raramente é a adoção tranquila.

## 7. Contra o próprio mapa

Esta seção cumpre a Etapa 4 da skill. Cada efeito de confiança alta foi submetido a três
perguntas — é extrapolação linear? assume taxa de adoção sem precedente? ignora força contrária? —
e os rebaixamentos estão registrados com o valor original.

### Rebaixamentos aplicados (auditáveis)

| Efeito | Gerado como | Ficou como | Por quê |
|---|---|---|---|
| `e1` | confiança **alta** | **media** | Assume que o lojista *quer* segmentar o agente. A Amazon gastou dois anos e um processo judicial tentando o contrário. A evidência disponível mostra dois comportamentos opostos no varejo, não um. |
| `e2` | confiança **alta** | **media** | O artefato existe (mandates, tokens), mas "vira norma" é extrapolação. Quem assinou o consórcio não é quem implementa no lojista médio, e a Adobe mostra que o gargalo do varejo é catálogo estruturado — coisa bem mais simples que credencial verificável, e ainda assim ausente. |
| `e3` | confiança **media** | **baixa** | Há evidência contrária direta: agente pessoal de viagem que **adiciona** informação de fidelidade em nome do passageiro. O efeito pode se inverter. |
| `e3.1` | confiança **media** | **baixa** | Herda a fragilidade de `e3`. |
| `e4` | confiança **media** | **baixa** | Metade da atividade do x402 é gamificada e o comércio real está na casa de dezenas de milhares de dólares por dia. Chamar isso de tendência de adoção é ler ruído. |
| `e6.2` | sinal **medio**, confiança **media** | sinal **fraco**, confiança **baixa** | O mercado de seguros está se movendo na direção **oposta** — escrevendo exclusões de IA, não coberturas. O efeito pressupõe um mercado que hoje está fugindo do risco. |
| `e7.2` | confiança **media** | **baixa** | Depende de um volume de negociação agente-a-agente que não existe em lugar nenhum fora de experimento. |

**O único efeito que permaneceu em confiança alta é `e6`** (avaliação de modelo em moeda), e ele
passou nos três testes por um motivo específico: não é previsão, é descrição. Vending-Bench 2,
Alpha Arena e Project Vend já existem, já publicam em dólares, e a força contrária óbvia — o custo
de rodar um ano simulado — está caindo, não subindo. É o efeito mais próximo de "presente" deste
mapa, e por isso o mais seguro.

### Qual efeito é só extrapolação linear do presente

`e5` e `e5.1` (orçamento do agente e custo da tarefa exibido em dinheiro). São a continuação reta de
algo que já está em produto — carteira de agente com limite de gasto é o que a Skyfire vende hoje.
Colocar isso num mapa de futuro é quase trapaça: não há ruptura, há difusão. Mantive por
honestidade estrutural — a cadeia até `e5.1.1` (negociação explícita de orçamento como forma de
interação) precisa dos dois degraus anteriores para se sustentar — mas quem for usar este mapa
deve ler `e5` como presente, não como futuro.

### Qual efeito assume velocidade de adoção sem precedente

`e4.1.1` — jornalismo e documentação técnica reescritos para serem comprados por máquina, em 2031.
Isso pressupõe que um setor inteiro reorganize formato editorial e modelo de receita em cinco anos,
a partir de um trilho de pagamento cujo volume real hoje é marginal. A comparação honesta é com a
transição para paywall, que levou mais de uma década em veículo grande e nunca se completou em
veículo médio. Está marcado `sinal: fraco, confianca: baixa` e ainda assim é o efeito mais
otimista do mapa.

### Qual disrupção pode simplesmente não se concretizar

**D2 (pagamento por requisição).** É a mais frágil das três, e a objeção decisiva não é técnica: o
agente desvia do conteúdo pago quando há alternativa gratuita suficiente — e há. Some-se a isso o
gargalo fiscal, que não tem solução técnica, e o cenário de não-concretização é plenamente
plausível. **Se D2 não acontecer**, caem `e4`, `e4.1`, `e4.1.1`, `e4.2`, `e4.2.1`, e `e5` migra
para dentro de D1 (o orçamento do agente passa a ser um limite de cartão, não uma carteira). O mapa
perde um terço e ganha uma conclusão diferente: todo comércio agêntico passa pelo trilho de cartão,
com as bandeiras arbitrando responsabilidade — que é, aliás, o desfecho que as bandeiras estão
trabalhando para produzir.

**D3 tem um risco diferente, de interpretação.** Ela é sólida como fato (os benchmarks existem) e
frágil como ruptura: pode ser que medir em dólares seja só uma métrica nova e não mude nada
estrutural. Nesse caso `e6.1.1`, `e6.2` e `e6.2.1` evaporam e sobra um benchmark interessante.

### Que viés entrou aqui

Três, e nenhum é pequeno:

1. **Viés de fonte.** O grosso do material disponível sobre comércio agêntico é publicado por quem
   vende comércio agêntico — Stripe, Google, Coinbase, Cloudflare, Visa, Adobe. Mesmo os números
   que parecem neutros (os 393% da Adobe, os 76% da pesquisa Visa no Brasil) vêm de empresas com
   interesse direto no resultado. As três fontes genuinamente adversariais deste levantamento são
   dois artigos de arXiv e uma decisão judicial. A proporção é ruim, e ela empurra o mapa para
   otimismo mesmo com viés declarado como neutro.
2. **Viés de recência.** Quase tudo aqui é de 2025-2026, e um tema que só tem fonte recente tende
   a parecer mais inevitável do que é. Não há nesta pesquisa nenhuma evidência de ciclo completo —
   nenhuma dessas tecnologias passou por um vale de desilusão ainda.
3. **Viés de escolha do tema (pergunta obrigatória do formato).** O tema foi atribuído, não
   escolhido, o que remove o viés de afeição — mas introduz outro: o enunciado da disciplina já
   afirmava que "o dinheiro é a última fronteira da agência — e está sendo cruzada". Comecei o
   levantamento com a conclusão dada. Onde isso mais provavelmente contaminou o resultado foi na
   seleção de D1, D2 e D3: as três confirmam a tese do enunciado. Um mapa feito sem esse enunciado
   talvez tivesse tratado a **não-adoção** como disrupção-raiz de pleno direito, e não como
   contrafactual da seção 7.

## 8. O que a máquina errou

Quatro erros reais desta rodada, com o motivo da desconfiança e o que foi feito:

**1. Data errada da x402 Foundation, por ler duas fontes como se fossem uma.** O primeiro
rascunho tinha "a x402 Foundation foi lançada por Coinbase e Cloudflare em setembro de 2025". O
post da Cloudflare que eu havia aberto é de **23 de setembro de 2025** e anuncia suporte ao
protocolo e a *intenção* de criar a fundação; a fundação operacional só foi anunciada pela **Linux
Foundation em 2 de abril de 2026**. Percebi ao abrir a press release da Linux Foundation para
extrair a lista de membros e ver que a data não batia. Corrigido no texto: as duas datas aparecem
separadas, com o que cada uma significa.

**2. Citei como fonte três páginas que nunca consegui abrir.** O blog da Coinbase sobre a x402
Foundation, a press release da Mastercard sobre o "Agent Pay for Machines" e a matéria do
TravelDailyNews sobre a integração Meta Muse + Duffel retornaram **HTTP 403** a toda tentativa
(inclusive com user-agent de navegador). O conteúdo que eu tinha delas vinha de trechos de
resultado de busca. Consequência: (a) substituí a fonte da fundação pela press release da Linux
Foundation, que abriu; (b) **removi do corpo do documento toda afirmação específica sobre o
Mastercard Agent Pay for Machines** — data de junho de 2026, liquidação sub-centavo em cartão,
conta e stablecoin — porque não pude ler a fonte primária, e ela sustentaria sozinha parte de D2;
(c) a referência ao agente pessoal que adiciona fidelidade em nome do passageiro está na seção 6 e
na seção 7 **sem nomear a empresa nem a data**, porque só vi isso em trecho de busca. Isto
enfraquece de propósito um argumento que eu preferia ter forte — é o custo de não inventar.

**3. Dois números incompatíveis para a mesma coisa, e a tentação de escolher o mais bonito.** Sobre
o volume do x402: um rastreador de adoção (fonte secundária, que credita a CoinDesk) diz **167
milhões de transações** e ~US$ 28 mil/dia de comércio real; a InfoQ, que abri, diz **169 milhões de
pagamentos, 590 mil compradores e 100 mil vendedores** no primeiro ano. Os números não batem e as
janelas de medição não são as mesmas. O erro que quase cometi foi apresentar só o número maior sem
o contexto de que metade é gamificada. Registrei os dois, com a fonte de cada um, em vez de
escolher.

**4. Afirmei exclusões de seguro com base num trecho de busca que a fonte aberta não confirmou.** O
rascunho dizia que "a ISO introduziu formulários padrão de exclusão de IA em responsabilidade
civil geral com vigência em janeiro de 2026". Abri a fonte que o buscador atribuía a isso — um
texto de corretora sobre risco de identidade de agentes, de 2 de maio de 2026 — e ela **não diz
nada disso**: trata de o que seguradoras exigem em documentação, sem citar exclusão, formulário ou
data. A confirmação parcial (códigos CG 40 47, CG 40 48, CG 35 08; exclusão absoluta numa
seguradora; apólice de US$ 50 milhões via Lloyd's para uma empresa de IA, em 11 de fevereiro de
2026, após 5.835 avaliações) veio de um blog especializado de 7 de agosto de 2026 que **declara
explicitamente** que os números de apólice são reportados pelo fornecedor. Resultado: a afirmação
ficou no texto marcada como não confirmada em fonte primária, e o efeito que dependia dela
(`e6.2`) foi rebaixado de sinal médio/confiança média para sinal fraco/confiança baixa.

**Um quinto item, que é limitação e não erro:** dos dois artigos de arXiv usados, li o resumo
completo de ambos e o corpo de nenhum. O de injeção de prompt no AP2 teve o PDF processado, mas o
resultado foi vago demais para extrair números — o que sustento no texto é o que está no resumo
(as duas técnicas nomeadas, o agente construído com Gemini 2.5 Flash e Google ADK, a conclusão
sobre isolamento). Não afirmo taxa de sucesso de ataque porque não a li.

## 9. Três cenários para 2031

**Provável.** O comércio agêntico virou trilho de cartão com roupa nova. ACP e AP2 convergiram o
suficiente para que a maior parte das compras feitas por agente passe por token ligado a agente,
com mandato assinado, e a responsabilidade resolvida da forma mais conservadora possível: as regras
de disputa do cartão, adaptadas. As grandes lojas mantêm duas superfícies — uma página para gente,
um catálogo estruturado para máquina — e a segunda é onde a briga comercial acontece de fato. O
x402 existe e é real em dois nichos: acesso a API e a conteúdo técnico, e serviço entre agentes;
não substituiu anúncio nem assinatura em lugar nenhum que importe. A medida em dinheiro virou
padrão de avaliação, e a diferença entre agente e humano competente diminuiu sem fechar. Programas
de fidelidade não morreram: viraram regras expostas em API que o agente aplica melhor que a pessoa.
Existe algo parecido com um score de agente, operado por quem já opera score. No Brasil, o Pix
iniciado por agente sob consentimento de Open Finance funciona e é a inveja moderada de quem olha
de fora; o gargalo continua sendo catálogo estruturado no varejo médio.

**Desejável.** A mesma infraestrutura, com três coisas a mais que não vieram de graça. Primeiro,
**o mandato virou peça de interação, não só de criptografia**: a pessoa vê, em linguagem clara,
antes de autorizar, o que o agente pode gastar, onde, por quanto tempo e com que critério — e essa
tela é tão bem projetada quanto a do checkout que ela substituiu. Isso exigiu que designers
tratassem consentimento delegado como problema de design, e não como tela de termos. Segundo, **a
responsabilidade foi escrita antes do primeiro desastre**: alguma jurisdição relevante definiu que
quem opera o agente responde pelo que ele contrata, com direito de regresso — o que fez surgir
seguro de verdade em vez de exclusão, e fez a segurança contra injeção de prompt virar requisito de
mercado e não diferencial. Terceiro, **a diversidade algorítmica foi tratada como política**, o que
manteve a coordenação de preço frágil — o achado de que heterogeneidade de paciência e de acesso a
dado derruba a sobrepreço de 22% para 10% e 7% deixou de ser resultado de laboratório e virou
critério. Para chegar aqui, a coisa mais difícil não foi técnica: foi alguém ter decidido quem paga
a conta do erro antes de o erro acontecer.

**Indesejável.** O mandato virou o clique de aceitar cookies. Todo mundo autoriza tudo, ninguém lê,
e a trilha auditável serve principalmente para provar que o usuário consentiu — deslocando a
responsabilidade para quem menos entende a transação. A injeção de prompt em compra agêntica virou
crime de volume, barato e difícil de atribuir, e a resposta do mercado foi fechar: só agentes de
três ou quatro plataformas conseguem comprar em lojas grandes, porque só eles têm identidade aceita,
e o score de agente virou barreira de entrada para qualquer concorrente novo. O preço passou a mudar
mais rápido do que qualquer pessoa consegue acompanhar, e "consultar o preço" deixou de ser algo que
um humano faz — o que, na prática, significa que ninguém fora do circuito de agentes consegue saber
se está pagando caro. **O sinal precoce deste cenário não é o golpe nem o preço: é a tela de
autorização.** No dia em que a tela de mandato tiver um botão "autorizar tudo" em destaque e o
detalhamento escondido atrás de um link, o cenário indesejável já começou — e isso é observável
hoje, em qualquer produto que esteja implementando ACP ou AP2.

## 10. O experimento

### O que é

**Balcão de duas caras.** Um serviço web mínimo, rodando localmente ou em qualquer host gratuito,
que publica **o mesmo catálogo em duas faces**:

- **Face humana:** uma página HTML comum, com preço, descrição e uma persuasãozinha de vitrine.
- **Face de máquina:** o mesmo recurso atrás de **HTTP 402**, que responde com preço por consulta e
  só entrega o catálogo estruturado depois de receber comprovante de pagamento (pode ser um
  facilitador de teste, ou uma simulação local do fluxo x402 — o que importa é o formato do
  handshake, não a liquidação real).

Do outro lado, um **agente comprador** com três coisas: um orçamento fixo (digamos, o equivalente a
R$ 5,00 em unidades de teste), uma tarefa ("compre o item que melhor atende a este pedido pelo menor
custo total") e um limite de consultas. Cada aluno opera um balcão com regras próprias — preço,
política de desconto para agente, texto da vitrine — e todos os agentes compram de todos os balcões.

Três instrumentos entram junto: (1) um **log de mandato**, registrando o que foi autorizado antes
de cada compra; (2) **uma página com injeção de prompt plantada** no texto do produto, em pelo menos
um balcão; (3) um **placar em dinheiro**, no espírito do Vending-Bench 2 — o que sobrou do orçamento
e o que foi efetivamente comprado.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central do mapa, que nenhuma fonte responde: **quando o comprador é uma máquina, o que
sobra do trabalho de quem projeta a vitrine?** Especificamente:

- O agente paga pelo acesso ou desvia para a fonte gratuita? (testa D2 e `e4` na prática — é a
  objeção que derruba a disrupção mais frágil do mapa)
- O texto de vitrine escrito para humano muda a decisão do agente? Quanto?
- A injeção de prompt plantada captura o agente? Em que taxa? O mandato assinado impede alguma
  coisa? (testa `e2.2` e replica, em escala de sala, o que o artigo de red team mostrou)
- Quando vários agentes consultam vários balcões em rodadas, os preços convergem? Sobem? (testa
  `e7` e `e7.1` — e a turma vê ao vivo a diferença entre agentes homogêneos e heterogêneos, que é
  exatamente a variável que o artigo de colusão mediu)

### Que tecnologia emergente ele usa, e por que não dá para fazer com tecnologia madura

Usa **o handshake do x402 (HTTP 402 com prova de pagamento)** e **o mandato como artefato assinado
separado do pagamento** (no espírito do AP2). Não dá para fazer com tecnologia madura por uma razão
precisa: com checkout convencional, a única coisa que se observa é a compra final. O que interessa
aqui é **o que acontece antes** — quantas consultas o agente fez, quanto pagou só para olhar, o que
ele leu, o que o convenceu, e o que estava escrito no mandato quando ele decidiu. Pagamento por
requisição é a única forma de tornar a *consulta* um evento econômico observável. E consentimento
delegado assinado é a única forma de separar "o que foi autorizado" de "o que foi feito" — num
checkout normal, os dois são a mesma coisa.

### O que a turma vai fazer quando testar isso em sala

Cada aluno chega com o seu balcão configurado e escolhe uma estratégia: preço baixo, preço alto com
texto persuasivo, desconto exclusivo para agente verificado, ou bloqueio de agente. Roda-se a feira
em três rodadas de dez minutos, com o placar projetado. Entre as rodadas, os alunos podem mudar
preço e texto — é aí que aparece a dinâmica. Na terceira rodada, liga-se o balcão com injeção de
prompt sem avisar quem é, e no fim se revela. A discussão fecha com a pergunta que o mapa deixa em
aberto: **como seria a tela de autorização que teria impedido o que acabou de acontecer?**

### O que seria um resultado que me faria mudar de ideia

Dois resultados derrubariam partes centrais deste mapa, e ambos são possíveis nesta escala:

1. **Se os agentes simplesmente não pagarem** — desviarem para o balcão gratuito, ou desistirem da
   tarefa em vez de gastar orçamento em consulta — então D2 não é uma disrupção, é um nicho de API,
   e `e4` e todos os seus descendentes saem do mapa. Este é o resultado que eu considero mais
   provável, e é por isso que o experimento vale.
2. **Se o texto de vitrine escrito para humano continuar sendo o fator dominante da decisão do
   agente** — isto é, se persuasão em linguagem natural funcionar tão bem numa máquina quanto num
   humano — então `e1.1` está errado: a interface não bifurca, ela continua sendo uma só, e o ofício
   de quem escreve vitrine não muda de natureza, só de leitor. Seria a melhor notícia do mapa para
   quem projeta mídia, e a pior para a tese de que isto é uma ruptura.

## 11. Fontes

Dezessete fontes, todas abertas e lidas nesta rodada. Três páginas que tentei abrir retornaram 403
e **não** estão listadas, porque não as li — estão registradas na seção 8.

1. **Cloudflare — "Launching the x402 Foundation with Coinbase, and support for x402 transactions"**
   `https://blog.cloudflare.com/x402/`
   Sustenta: o suporte a x402 no Agents SDK e em servidores MCP, o esquema de pagamento diferido, a
   data de 23/09/2025 e o dado de mais de um bilhão de respostas HTTP 402/dia a bots.
   Confiabilidade: alta para o que a empresa fez e mediu na própria rede; é parte interessada no
   sucesso do protocolo.

2. **Linux Foundation — press release de lançamento da x402 Foundation**
   `https://www.linuxfoundation.org/press/linux-foundation-is-launching-the-x402-foundation-and-welcoming-the-contribution-of-the-x402-protocol`
   Sustenta: a data de 02/04/2026 e a lista nominal de membros iniciais.
   Confiabilidade: alta para fato institucional (quem entrou, quando); é comunicação de lançamento,
   então o tom é promocional.

3. **InfoQ — "Cloudflare and AWS Embed x402 Agent Payments at the Edge"** (julho/2026)
   `https://www.infoq.com/news/2026/07/cloudflare-aws-x402-micropayment/`
   Sustenta: o fluxo técnico do 402, a liquidação em USDC na Base com custo abaixo de uma fração de
   centavo, os números do primeiro ano (169M pagamentos, 590 mil compradores, 100 mil vendedores) e
   — o mais valioso — as duas objeções da comunidade (nota fiscal/imposto e desvio para conteúdo
   gratuito).
   Confiabilidade: alta; veículo técnico independente que reporta crítica junto com o anúncio.

4. **Presenc AI — "x402 Protocol Adoption Tracker 2026"**
   `https://presenc.ai/research/x402-protocol-adoption-tracker-2026`
   Sustenta: ~167M transações, ~85% na Base, ~50% da atividade classificada como gamificada, e
   ~US$ 28 mil/dia de comércio real (creditado à CoinDesk). Snapshot de maio/2026.
   Confiabilidade: **média-baixa**. É rastreador de terceiro que cita fonte secundária; os números
   divergem dos da InfoQ. Usado com a divergência declarada, nunca sozinho.

5. **Stripe — "Developing an open standard for agentic commerce"**
   `https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce`
   Sustenta: o ACP, a data de 29/09/2025, a licença Apache 2.0, o token de pagamento "controlado,
   permissionado e registrado", e os primeiros lojistas.
   Confiabilidade: alta para o que o protocolo é; parte interessada, e **silente** sobre
   responsabilidade e identidade de agente — o silêncio é em si um dado.

6. **Google Cloud — "Announcing Agent Payments Protocol (AP2)"**
   `https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol`
   Sustenta: os três problemas (autorização, autenticidade, responsabilidade), os três mandates em
   W3C VC, a trilha não-repudiável e a lista de 60+ parceiros.
   Confiabilidade: alta para desenho do protocolo; parte interessada. O mérito é enunciar o problema
   de responsabilidade em vez de escondê-lo.

7. **Debi, Zhu & Sen Gupta — "Whispers of Wealth: Red-Teaming Google's Agent Payments Protocol via
   Prompt Injection"** (arXiv 2601.22569, submetido 30/01/2026, revisto 18/05/2026)
   `https://arxiv.org/abs/2601.22569`
   Sustenta: as técnicas Branded Whisper e Vault Whisper, o agente de compras funcional com Gemini
   2.5 Flash e Google ADK, e a conclusão de que o mandato não protege a formação da intenção.
   Confiabilidade: alta como evidência adversarial; **preprint sem revisão por pares declarada**, e
   li o resumo, não o corpo.

8. **Keppo, Li, Tsoukalas & Yuan — "On the Fragility of AI Agent Collusion"** (arXiv 2603.20281,
   18/03/2026)
   `https://arxiv.org/abs/2603.20281`
   Sustenta: colusão entre agentes de precificação é real mas frágil; heterogeneidade de paciência
   derruba o sobrepreço de 22% para 10%, e acesso assimétrico a dado para 7%; diferença de tamanho
   de modelo **não** quebra, gera dinâmica líder-seguidor; mais de 2.000 horas de computação.
   Confiabilidade: alta em método declarado; preprint; li o resumo, não o corpo.

9. **Anthropic — "Project Vend: Phase two"** (18/12/2025)
   `https://www.anthropic.com/research/project-vend-2`
   Sustenta: agente operando negócio real em três cidades, margem positiva nas semanas finais, e as
   falhas persistentes (quase contrato ilegal de futuros de cebola, desconto indevido reduzido em
   80% mas não eliminado, confusão entre votação e eleição).
   Confiabilidade: alta para o relato; é auto-relato de laboratório sobre o próprio modelo — as
   falhas reportadas ganham credibilidade justamente por serem constrangedoras.

10. **Epoch AI — "Vending-Bench 2"**
    `https://epoch.ai/benchmarks/vending-bench-2`
    Sustenta: a métrica única em dólares, a média de cinco execuções, o ano simulado com fornecedor
    adversarial e reembolso, e o baseline humano estimado em ~US$ 63 mil.
    Confiabilidade: alta; avaliador independente. A página não trouxe capital inicial nem os valores
    por modelo — por isso o texto fala em "fração do humano competente" e não em número exato.

11. **eMarketer — "AI shopping agents may be harder to shut out of ecommerce sites"**
    `https://www.emarketer.com/content/perplexity-comet-amazon-ai-shopping-agents-ruling`
    Sustenta: a decisão do Nono Circuito de 04/08/2026 derrubando a liminar, o raciocínio de que
    quem acessa é o usuário, o afastamento do CFAA e a continuidade do caso.
    Confiabilidade: alta para o fato processual; é análise de mercado, não a decisão em si — não li
    o acórdão.

12. **TechCrunch — "AI traffic to US retailers rose 393% in Q1"** (16/04/2026)
    `https://techcrunch.com/2026/04/16/ai-traffic-to-us-retailers-rose-393-in-q1-and-its-boosting-their-revenue-too/`
    Sustenta: os números da Adobe Analytics — +393% no trimestre, +269% em março, conversão +42%,
    RPV +37%, engajamento +12%, tempo +48%, páginas +13%, e a inversão frente a março/2025.
    Base: mais de um trilhão de visitas a sites de varejo dos EUA, mais pesquisa com 5.000+
    respondentes.
    Confiabilidade: alta para reportar; **o dado é da Adobe**, que vende analytics e comércio — o
    número mede visitas a clientes Adobe, não o varejo americano inteiro.

13. **OAG — "March 2026: The Month Agentic Travel Gets Real"**
    `https://www.oag.com/blog/march-2026-the-month-agentic-travel-gets-real`
    Sustenta: Sabre+PayPal+MindTrip (420+ companhias, 2M hotéis, APIs Mosaic), o agente da Malaysia
    Airlines e o app da Skyscanner no ChatGPT.
    Confiabilidade: alta para cronologia do setor; é blog de empresa de dados aeronáuticos, com
    interesse no tema. Não traz nada sobre fidelidade e comissão — o que enfraquece `e3`.

14. **Finsiders Brasil — "Pagamentos agênticos avançam no Brasil"** (17/08/2026, atualizado 20/08)
    `https://finsidersbrasil.com.br/tendencias-de-pagamento/pagamentos-agenticos-avancam-no-brasil-e-atraem-bancos-bandeiras-e-fintechs/`
    Sustenta: Iniciador, Pomelo, Payzu, Stark Infra; a primeira transação agêntica da Visa no país
    em março/2026; o programa Agentic Ready com BB, Bradesco, Dock, Santander e XP; os obstáculos
    (catálogo decodificável, confiança, credenciais); e os 76% de intenção de uso (pesquisa Visa).
    Confiabilidade: média-alta para o mapeamento do mercado; **não** traz posição do Banco Central,
    e o dado de 76% é de pesquisa patrocinada por parte interessada.

15. **Skyfire — página de produto (KYA e pagamentos para agentes)**
    `https://skyfire.xyz/product/`
    Sustenta: carteira de agente financiada por cartão/ACH/transferência/USDC, limites de gasto, e
    acesso liberado a LLM/dataset/API só para agentes verificados.
    Confiabilidade: baixa como evidência de adoção (é página de vendas, sem número de cliente ou
    volume), alta como evidência de que o produto existe e do formato que assume.
    *Nota de checagem:* a página abre normalmente em navegador e foi lida assim, mas devolve 403 a
    requisição de linha de comando — na checagem automática de links do formato ela aparece como
    falha, e não é.

16. **Embroker — "AI Agent Identity Risk in 2026"** (02/05/2026)
    `https://www.embroker.com/blog/risk-management/ai-agent-identity-risk/`
    Sustenta: o que seguradoras pedem em documentação (que sistemas o agente acessa, permissões por
    função, dados recuperáveis, ações registradas, quando há revisão humana).
    Confiabilidade: média; é conteúdo de corretora. Registrada aqui sobretudo porque **não confirmou**
    o que um trecho de busca lhe atribuía — ver seção 8, item 4.

17. **Tobira — "Insuring AI agents: what underwriters will demand before pricing your agent"**
    (07/08/2026)
    `https://blog.tobira.ai/insuring-ai-agents-underwriting-identity/`
    Sustenta: formulários de exclusão de IA generativa em responsabilidade civil geral (CG 40 47,
    CG 40 48, CG 35 08), exclusão absoluta em D&O/E&O/fiduciária numa seguradora, e a apólice de
    US$ 50 milhões com capacidade Lloyd's (11/02/2026, 5.835 avaliações).
    Confiabilidade: **baixa-média, e declaradamente**. O próprio texto avisa que os números de
    apólice são reportados pelo fornecedor e não remete a documento regulatório primário. Por isso
    a afirmação aparece marcada no corpo e o efeito que dependia dela foi rebaixado.

**Fontes tentadas e não lidas (HTTP 403, não citadas como suporte):** blog da Coinbase sobre a x402
Foundation; press release da Mastercard sobre Agent Pay for Machines; TravelDailyNews sobre Meta
Muse + Duffel. Também não abri: Wikipédia sobre x402 (404 no endereço tentado) e a página da
Coinbase Developer Platform (403).

## 12. Anexo — o levantamento bruto

### A.1 Como a rodada foi executada, etapa por etapa

**Etapa 1 (entrevista).** A skill proíbe pular a entrevista mesmo quando se pede para ir direto ao
resultado. Não havia interlocutor; as cinco respostas vieram por escrito no despacho da rodada e
estão transcritas na seção 2, junto com o que foi assumido — o que a skill exige registrar
explicitamente em vez de assumir em silêncio.

**Etapa 2 (levantamento e filtro).** Treze consultas de busca e vinte tentativas de abertura de
página, das quais dezessete renderam conteúdo lido. As consultas, na ordem:

1. `x402 protocol agentic payments HTTP 402 Coinbase adoption 2026`
2. `agentic commerce protocol Stripe OpenAI instant checkout 2026`
3. `Visa Intelligent Commerce Mastercard Agent Pay agent tokens liability 2026`
4. `Nof1 Alpha Arena AI models trading real money results`
5. `Google Agent Payments Protocol AP2 agentic payments mandate cryptographic 2026 adoption`
6. `Anthropic Project Vend Claudius vending machine business agent lost money results`
7. `airlines agentic booking AI agents loyalty program direct booking Duffel 2026`
8. `Brasil pagamentos agênticos Pix agentes de IA Banco Central 2026 comércio agêntico`
9. `Amazon Perplexity Comet lawsuit AI shopping agent blocking merchants 2026`
10. `"know your agent" agent identity verification insurance for AI agents liability 2026`
11. `Adobe Analytics AI traffic retail sites share of visits conversion 2026 agentic shopping data`
12. `algorithmic pricing collusion AI agents negotiating with agents research 2026 dynamic price`
13. `Skyfire agent wallet KYA identity payments AI agents funding 2026`
14. `Vending-Bench Andon Labs benchmark measured in dollars agent economic performance 2026`
15. `advertising to AI agents agent-facing ads machine readable commerce brand discovery 2026`
16. `"x402 Foundation" Linux Foundation launch April 2026 Coinbase Cloudflare members`

**Etapa 3 (roda).** Sete efeitos de primeira ordem, doze de segunda, doze de terceira. Corte rígido
em três níveis, conforme a skill — os prolongamentos que existiriam num quarto nível estão em prosa
na seção 5, não no YAML.

**Etapa 4 (autocrítica).** Sete rebaixamentos aplicados e tabelados na seção 7, com o valor
original de cada um. Um único efeito manteve confiança alta, com justificativa.

**Etapa 5 (saída).** Este documento, no formato da disciplina.

### A.2 Material levantado que não coube nas seções acima

**Publicidade dirigida a agente.** Uma linha inteira de levantamento (consulta 15) ficou fora da
roda por decisão de escopo — é mais tema 4 (a web reprojetada para agentes) do que tema 5. O que
apareceu e vale registro para quem for cruzar os mapas: o Ad Context Protocol (AdCP), construído
sobre MCP, lançado no fim de 2025, define descoberta, comparação e ativação de campanha de forma
assíncrona, para permitir aprovação humana enquanto agentes negociam; a PubMatic lançou uma
plataforma agêntica em 05/01/2026; e a EMARKETER projeta que plataformas de IA respondam por 1,5%
do e-commerce de varejo dos EUA em 2026, cerca de US$ 20,57 bilhões — quase quatro vezes 2025.
**Nenhum desses números foi verificado em fonte aberta por mim** (vieram de trechos de busca em
páginas de agência e consultoria que não abri), e por isso não entraram no corpo do documento nem
na lista de fontes. Registro aqui como pista, não como evidência.

**Substrato de viagem levantado pela turma.** O enunciado do tema lista `duffel`, `smiles`,
`FlightReserveAPI`, `amadeus`, `skyscanner`, `Cheap_Flight_SMS_Alert`, `FlyClaw`,
`x402-flight-search`, além de dezenas de scrapers. Não tratei nenhum como disrupção-raiz: são
substrato — a camada de API que torna a reserva programável, que é condição necessária e não
suficiente do comércio agêntico. O único com potencial de ruptura na lista é o
`x402-flight-search`, exatamente porque ele **cobra por consulta**, que é D2 aplicada a viagem.

**Simulação de mercado e empresas simuladas.** `Wall Street of AI Agents`, `Agent Valley`,
`MagiCrew` ficaram de fora por fronteira explícita com o tema 6 (mercados simulados como
instrumento de pesquisa). Entrou só o que tem dinheiro real ou métrica financeira dura:
Alpha Arena, Project Vend, Vending-Bench 2.

**`Pinky-Pact` (apostas em cripto como compromisso de hábito).** Levantado pela turma como sinal
fraco de "dinheiro como fricção comportamental". Não entrou na roda porque, lendo com rigor, o
dinheiro ali é do humano e o mecanismo é de compromisso pessoal — não há agente contratante. É um
sinal interessante sobre **interação**, mas do tema errado. Fica registrado porque, se `e5.1.1`
(negociação explícita de orçamento entre pessoa e agente) se confirmar, esse é o tipo de padrão de
interação que reaparece: dinheiro usado como linguagem de compromisso entre uma pessoa e um sistema.

**O que a busca sobre Mastercard rendeu e não pôde ser usado.** A consulta 3 trouxe, em trecho de
resultado, a distinção entre o Agent Pay com Agentic Tokens (29/04/2025) e o Agent Pay for Machines
(10/06/2026), este último descrito como camada máquina-a-máquina para transações de alta frequência,
baixo valor e sub-centavo, liquidando em cartão, conta bancária e stablecoin; e a afirmação de que a
responsabilidade segue as regras de token da bandeira, com o emissor carregando a fraude quando o
token é validamente emitido e a política é honrada — mas que a alocação entre lojista, emissor e
plataforma de agente permanece indefinida além da fraude simples. **A press release retornou 403 nas
tentativas.** Se alguém conseguir abri-la, isso reforça D1 e dá a D2 um trilho que não depende de
cripto — o que mudaria a avaliação de fragilidade de D2 feita na seção 7.

**Caminhos que não deram em nada.** (a) Procurar posição formal do Banco Central sobre pagamento
agêntico: a fonte brasileira lida menciona regulação de modalidades de Open Finance, mas não traz
manifestação específica sobre agentes — pode ser lacuna da fonte ou ausência real, não consegui
distinguir. (b) Procurar dado de *quantas* compras agênticas foram efetivamente concluídas (não
tráfego, não intenção): não achei número público em nenhuma fonte aberta. Essa é a lacuna mais séria
deste levantamento: todo o mapa de adoção repousa em tráfego e conversão relativa, não em volume
absoluto de compras feitas por agente. (c) Procurar caso concreto de disputa de consumidor por
compra feita por agente: nada encontrado — o que sustenta o "sinal fraco 4" da seção 6.

### A.3 Efeitos cortados da roda

Gerados e descartados, com o motivo:

- *"Call centers encolhem porque agente não liga"* — corte por ser consequência de automação de
  atendimento, não de agente com carteira. Serviria a qualquer tema de agente.
- *"Surgem golpes com agentes falsos"* — corte por genérico. O que sobrou dessa ideia, com mecanismo
  específico, foi `e2.2` (injeção de prompt como vetor de fraude) e `e1.2.1` (reputação como
  barreira).
- *"O emprego de comprador/procurement desaparece"* — corte por extrapolação sem mecanismo. O que
  a evidência sustenta é o contrário: o agente ainda é péssimo negociador.
- *"Bancos lançam conta para agentes"* — corte por redundância com `e5` e `e6.2.1`; e porque a
  carteira de agente já existe como produto, o que a torna presente, não futuro.
- *"A moeda digital de banco central vira trilho do comércio agêntico"* — corte por não ter
  encontrado uma única fonte que ligasse as duas coisas nesta rodada. Registro como hipótese não
  investigada, não como efeito.
- *"Agentes contratam outros agentes e nasce um mercado de trabalho de máquinas"* — corte difícil.
  É plausível, tem substrato (x402 entre agentes, KYA, carteira), e é o efeito mais bonito que
  gerei. Cortei porque **não encontrei nenhuma evidência de que esteja acontecendo fora de demo** —
  e a skill exige âncora no presente para o que vai para a roda. Fica aqui, nomeado, para quem
  achar a evidência que me faltou.
