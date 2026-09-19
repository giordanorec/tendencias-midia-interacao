---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: jlsn
zona_de_interesse: Sistemas de Informação
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: Global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 9
efeitos_ordem_3: 9
tecnologias_citadas: ["x402", "HTTP 402 Payment Required", "Agentic Commerce Protocol (ACP)", "Instant Checkout (ChatGPT)", "Stripe Shared Payment Tokens", "Stripe Machine Payments Protocol (MPP)", "Mastercard Agent Pay / Agentic Tokens", "Visa Trusted Agent Protocol", "Cloudflare Wallets", "cloudflare.pay", "Web Bot Auth", "pay per crawl", "Monetization Gateway", "USDC / stablecoins", "Base", "Solana", "Tempo", "Coinbase Developer Platform (facilitator)", "Open Finance", "Pix Automático", "Alpha Arena (Nof1)", "Hyperliquid", "Q-learning e algoritmos de bandit em precificação", "AIUC-1", "Sabre + PayPal + MindTrip", "Duffel", "Amadeus", "Skyscanner no ChatGPT"]
fontes: 11
confianca: media
experimento: A Feira dos Agentes — um mercado de duas faces com carteira real de um dólar
skill_usada: futurizacao-jlsn
publico_ok: false
---

## 1. Resumo
Um agente que lê é um leitor; um agente que paga é uma parte contratante. Entre 2025 e 2026 a infraestrutura para a segunda coisa saiu do papel: o x402 devolveu função ao HTTP 402 e liquida pagamento por requisição em stablecoin sem conta; Stripe e OpenAI abriram o Agentic Commerce Protocol e puseram compra dentro do chat; Visa e Mastercard passaram a disputar o padrão de mandato e identidade do agente; a Cloudflare deu ao agente carteira, teto de gasto e um identificador estável. Três rupturas seguem dessa base: o mandato delegado substitui o clique como ato de autorização; o preço unitário da web cai para frações de centavo cobradas por chamada; e o dinheiro vira o placar com que se avalia máquina. Até 2031 isso desloca o objeto do design — da vitrine para o contrato legível por máquina, da atenção para a utilidade cobrável, do consentimento pontual para o painel de mandato. O risco maior não é técnico: é que o volume medido hoje seja majoritariamente sinalização, e que o dinheiro real chegue bem depois do protocolo.

## 2. O tema
O tema é o dinheiro nas mãos de máquinas: agentes de software que escolhem, pagam e respondem por uma transação — comprando passagem, pagando por um dado, operando capital em mercado aberto ou sendo remunerados por trabalho executado. Não é o e-commerce, que é maduro, nem o pagamento online, que é maduro, nem o comparador de preços, que é maduro. É o que acontece quando o comprador deixa de ser um par de olhos diante de uma vitrine.

Onde encosta em mídia e interação: em quase tudo. A interface de compra foi projetada, nos últimos trinta anos, para persuadir um humano — foto, prova social, escassez, carrinho, urgência. Nada disso opera sobre um agente que lê um feed estruturado e compara atributos. Se o comprador é uma máquina, a superfície de venda vira contrato e metadado, e a superfície humana recua para um lugar novo: o momento em que a pessoa define o mandato — quanto, onde, até quando, sob quais condições — e o momento em que ela audita o que foi feito em seu nome. O designer perde a tela do produto e ganha a tela da delegação.

E encosta na economia da mídia. O paywall foi desenhado para uma pessoa que assina por mês. O pagamento por requisição desenha outra coisa: conteúdo com preço de varejo por chamada, comprado por quem nunca vai ler — um agente que precisa daquele fato para completar uma tarefa. Isso muda a métrica: atenção deixa de ser a moeda, utilidade cobrável entra no lugar.

Merece mapa porque o gargalo deixou de ser técnico. Os trilhos existem, estão em produção e têm nome. O que ainda não existe é a gramática de quem autorizou o quê, a repartição de responsabilidade quando o agente erra com dinheiro alheio, e a linguagem de interface que torne um mandato compreensível para quem o concede.

## 3. Onde isso está hoje

**O que existe e funciona.** O x402 é um padrão aberto que usa o código HTTP 402 Payment Required: o cliente pede um recurso, o servidor responde 402 com as instruções de cobrança, o cliente assina uma transação em stablecoin e repete o pedido. O site do protocolo, mantido pela x402 Foundation sob a Linux Foundation, declarava nos últimos trinta dias 75,41 milhões de transações, US$ 24,24 milhões de volume, 94,06 mil compradores ativos e 22 mil vendedores ativos, sem taxa de protocolo, e listava Alchemy, AWS, Cloudflare, Stripe e Vercel entre os adotantes [1]. A Stripe documenta a integração como produto: endereço de depósito em Base, middleware de uma linha que precifica endpoints (o exemplo cobra US$ 0,01 por requisição), liquidação pelo facilitador da Coinbase Developer Platform e registro posterior como PaymentIntent; suporte a USDC em Base, Solana e Tempo, com disponibilidade em todos os estados dos EUA exceto Nova York e mais de trinta países mediante solicitação [2].

O Agentic Commerce Protocol, codesenvolvido por Stripe e OpenAI e aberto sob Apache 2.0, já sustenta o Instant Checkout no ChatGPT. O desenho é deliberadamente conservador quanto a poder: o comerciante permanece merchant of record, mantém a relação com o cliente e decide quais produtos podem ser vendidos por agente, como aparecem, como a transação é processada e como o pedido é atendido [8]. As bandeiras entraram pelo outro lado da mesa. A Visa lançou o Trusted Agent Protocol, voltado a identificar o agente e transferir credencial com segurança; a Mastercard apresentou, com o Google, um padrão aberto para tornar a autorização do usuário "explícita, comprovável e preservadora de privacidade"; o que está em disputa é quem define o padrão de um mercado que a McKinsey estima entre US$ 3 e 5 trilhões até 2030 [3].

A Cloudflare fechou o triângulo que faltava — identidade, limite e liquidação. Em 4 de agosto de 2026 anunciou as Wallets e o cloudflare.pay: cada conta recebe um identificador estável e legível, carteiras virtuais por agente com teto de gasto, lista de comerciantes aprovados e tamanho máximo de transação [10]. Isso vem de uma linhagem: o pay per crawl já usava o 402 com um cabeçalho `crawler-price`, ao qual o crawler responde `crawler-exact-price` ou `crawler-max-price`, e o texto de lançamento já dizia em voz alta que o potencial real apareceria num mundo agêntico, ao "dar ao agente um orçamento para gastar" [11].

Em viagem, o substrato virou pipeline. Março de 2026 concentrou três movimentos: Sabre, PayPal e MindTrip montaram uma reserva agêntica ponta a ponta sobre 420+ companhias e 2 milhões de hotéis, com pagamento na mesma conversa; a Malaysia Airlines pôs em operação um agente que executa ações sobre reservas reais; e a Skyscanner virou aplicativo dentro do ChatGPT [6].

**O que existe e não funciona.** Três coisas. Primeira: a responsabilidade. No Brasil, o Pix já tem as modalidades compatíveis com automação — imediato, agendado, automático, sobre a base de dados padronizados do Open Finance —, mas falta o que importa: padrão de identidade que distinga cliente, agente, aplicação e operador; mandato estruturado com limite e revogação; e definição de quem responde pelo resultado [4]. Segunda: o seguro. A partir de 1º de janeiro de 2026 seguradoras passaram a excluir danos de IA generativa das apólices comerciais padrão, abrindo um vácuo que uma safra de especialistas (Klaimee, Testudo, HSB, Corgi, entre outros) começou a preencher, com um padrão de certificação, o AIUC-1, em que a auditoria é o próprio evento de subscrição; o precedente *Moffatt v. Air Canada* já havia fechado a defesa de "foi a IA que fez" [5]. Terceira, e a mais incômoda: o volume. Uma avaliação da Artemis Analytics de março de 2026, citada em cobertura secundária, indicava que 95% do volume do x402 era sinalização sem venda subjacente, com troca comercial efetiva na casa de US$ 28 mil por dia — número que não foi possível confirmar na fonte primária e que este mapa registra como alegação de segunda mão, não como fato.

**Quem está construindo.** Na camada de rede, Visa e Mastercard. Na camada de protocolo aberto, x402 Foundation, Stripe e OpenAI, Google. Na camada de borda e identidade, Cloudflare. Na camada de distribuição setorial, Sabre, Amadeus, Duffel, Skyscanner, PayPal. Na camada de avaliação em dinheiro, a Nof1, com o Alpha Arena, em que modelos operam capital real em mercado aberto sob prompt idêntico — experimento que este mapa cita como contexto trazido pela disciplina, e não como fonte, porque o site respondeu HTTP 429 na tentativa de leitura direta.

## 4. As disrupções-raiz

### 4.1 O mandato delegado substitui o clique
**O que rompe.** O modelo mental de que autorizar um pagamento é um gesto humano, singular e situado — o clique em "comprar". No lugar entra um mandato: um objeto com escopo, teto, validade, lista de contrapartes e revogação, concedido uma vez e executado n vezes por uma máquina. Isso destrói o pressuposto de que consentimento e transação coincidem no tempo, que é o alicerce de toda a UX de checkout e de boa parte do direito do consumidor digital.

**Por que agora e não há cinco anos.** Porque até 2025 não havia como provar *em nome de quem* um programa agia. Agora há três peças simultâneas: credencial tokenizada amarrada a agente, comerciante e política de consentimento (Agent Pay), identificação do agente na borda (Trusted Agent Protocol, Web Bot Auth, cloudflare.pay) e teto de gasto executável na carteira (Virtual Wallets) [3][10]. Sem as três juntas, mandato era promessa contratual; com elas, é objeto técnico verificável.

**O que falta acontecer.** Interoperabilidade entre os mandatos das bandeiras, dos protocolos abertos e das carteiras de borda — hoje um agente que compre em três lugares carrega três gramáticas de autorização. E falta a peça regulatória: no Brasil, a lacuna é nomeada com precisão — identidade de agente, mandato estruturado, governança e responsabilização [4].

### 4.2 O preço unitário da web cai para frações de centavo, cobradas por requisição
**O que rompe.** A economia de conteúdo baseada em audiência agregada. Assinatura, anúncio e paywall pressupõem um humano cuja atenção se vende por atacado. O pagamento por chamada é varejo: US$ 0,01 pelo endpoint, um preço por crawl, um preço por fato. Isso cria um mercado que não existia — o de dados vendidos a quem nunca vai lê-los — e marginaliza quem só sabe monetizar olhos.

**Por que agora.** Micropagamento fracassou vinte anos seguidos porque o custo de transação era maior que a transação. A combinação stablecoin + liquidação em segundos + zero taxa de protocolo + ausência de cadastro remove exatamente esse atrito, e o 402, que estava reservado no HTTP desde sempre sem uso, é a semântica pronta [1][2][11].

**O que falta acontecer.** Que o volume deixe de ser sinalização e vire compra. É o ponto mais frágil deste mapa e está explicitado na §7.

### 4.3 O dinheiro vira o placar — e a máquina vira contraparte de mercado
**O que rompe.** A avaliação de IA por benchmark de pontos. Quando o resultado é medido em P&L sobre capital real, em mercado aberto, com prompt idêntico entre modelos, a métrica passa a incorporar risco, tempo e adversário — coisas que um conjunto de testes estático não tem. E rompe também o pressuposto de que quem negocia é gente: agente negociando com agente muda o regime de formação de preço.

**Por que agora.** Porque a execução ficou barata e programática ao mesmo tempo em que os modelos passaram a sustentar cadeias longas de decisão. A literatura de precificação algorítmica já mostrava, antes dos LLMs, que algoritmos de aprendizado chegam a preços acima do equilíbrio de Nash sem comunicação entre si — com evidência de campo de margens 28% maiores no varejo de combustível alemão quando ambas as firmas adotaram software de precificação [7].

**O que falta acontecer.** Um desenho de responsabilidade para perda causada por agente com dinheiro de terceiro, e instrumentos de detecção de colusão tácita que não dependam de prova de comunicação — que é exatamente o que o direito antitruste hoje exige e não consegue obter [7].

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O mandato delegado substitui o clique como ato de autorização
    efeitos:
      - id: e1
        ordem: 1
        efeito: A superfície de venda deixa de ser vitrine e vira contrato legível por máquina — preço, política de devolução e atributo de produto passam a ser API.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O e-commerce se parte em duas superfícies — uma para o humano conceder e revogar o mandato, outra para o agente executá-lo.
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: O painel de mandato vira o objeto central do design de consumo, e limite, escopo e prestação de contas ocupam o lugar que o carrinho ocupava.
                sinal: medio
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Marca deixa de ser lembrança e vira metadado — quem não expõe atributo estruturado desaparece do conjunto de escolha do agente.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Otimização para agente vira indústria, e com ela a disputa regulatória sobre manipulação de ranking lido por máquina.
                sinal: medio
                prazo: 2030
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Programas de fidelidade perdem função, porque o agente recalcula a lealdade a cada compra em vez de acumulá-la.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Companhias aéreas e varejistas migram do desconto retroativo para o preço condicionado ao mandato e ao custo de servir.
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Surge tarifa de duas faixas — humano atendido e agente autoatendido — e o litígio sobre discriminar preço pela natureza do comprador.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Identidade verificável de agente vira pré-requisito de transação, e agente sem credencial assinada passa a ser tratado como fraude.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: O rastro de quem autorizou o quê vira documento com valor jurídico e atuarial, e o log deixa de ser detalhe de engenharia.
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Forma-se mercado de seguro e de score para agentes, precificado por comportamento observado e não por marca do modelo.
                sinal: medio
                prazo: 2031
                confianca: baixa

  - disrupcao: O preço unitário da web cai para frações de centavo cobradas por requisição
    efeitos:
      - id: e4
        ordem: 1
        efeito: Conteúdo e API ganham preço de varejo por chamada, e o paywall deixa de ser sinônimo de assinatura.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Publicação de nicho volta a ser viável sem audiência humana, porque quem paga é o agente que precisa daquele dado.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A métrica de mídia migra de atenção para utilidade cobrável, e o CPM cede lugar ao preço por fato verificável.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Nasce a arbitragem de fonte — o agente escolhe a evidência mais barata que satisfaça a tarefa, não a melhor.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Qualidade editorial vira externalidade, e a fonte cara passa a depender de subsídio ou de contrato de exclusividade com quem opera agentes.
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O custo de um pedido de informação passa a ser visível, orçado e limitado dentro do produto.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Produtos de IA expõem o orçamento ao usuário, e a interface passa a mostrar quanto custou pensar sobre aquilo.
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A interação ganha uma dimensão que a web humana não tinha — negociar qualidade contra custo na frente do usuário, a cada tarefa.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: O dinheiro vira o placar da IA e a máquina vira contraparte de mercado
    efeitos:
      - id: e6
        ordem: 1
        efeito: A avaliação de modelos migra de benchmark de pontos para resultado financeiro medido em mercado aberto.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Fornecedores passam a vender desempenho em vez de capacidade, com contratos remunerados por resultado.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A empresa passa a comprar trabalho executado em vez de assento de licença, e o organograma ganha unidades de custo sem pessoa dentro.
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Agentes negociando com agentes aceleram o ciclo de preço no varejo e reproduzem ali dinâmicas de alta frequência.
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Colusão tácita entre agentes de precificação vira problema regulatório sem prova de comunicação para sustentar a acusação.
                sinal: medio
                prazo: 2031
                confianca: baixa
```

O bloco YAML mente por omissão em três pontos, e vale dizer quais.

Primeiro, ele sugere que as três disrupções são paralelas. Não são: a segunda depende da primeira. Micropagamento por requisição só escala se houver identidade e teto de gasto, porque um agente com carteira aberta e sem limite é um incidente de segurança esperando acontecer — e é exatamente por isso que a Cloudflare vendeu identidade e carteira no mesmo anúncio [10]. Se o mandato não amadurecer, a raiz 2 não chega ao volume que os efeitos e4 e e5 pressupõem.

Segundo, a árvore não mostra os laços de realimentação. O efeito e3.1.1 — seguro precificado por comportamento — volta e reescreve o e1.1: se o prêmio depende do rastro, a interface de mandato deixa de ser cortesia e vira requisito de subscrição. O UX passa a ser desenhado para produzir prova, não só para produzir clareza. Essa inversão é o achado mais relevante do mapa para quem projeta interação, e a hierarquia não tem como exibi-la.

Terceiro, os prazos são desiguais por natureza. Os de 2027 e 2028 descrevem coisas que já estão em produção parcial e só precisam de escala. Os de 2031 descrevem arranjos institucionais, que dependem de litígio, de regulação e de uma perda pública grande o bastante para forçar decisão. Não são o mesmo tipo de afirmação e não deveriam ser lidos com a mesma confiança — daí a coluna de confiança cair para baixa em quase toda a terceira ordem.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — a sinalização como massa do volume.** A alegação de que 95% do volume x402 é movimento sem venda subjacente, com comércio real na casa de dezenas de milhares de dólares por dia, apareceu em cobertura de março de 2026 e não foi confirmada aqui na fonte primária. Se for verdadeira, o contraste com os 75 milhões de transações declarados no site do protocolo [1] é o dado mais informativo do mapa: mede a distância entre protocolo adotado e mercado existente.

**Sinal fraco 2 — a compra de conteúdo por quem não lê.** O `crawler-max-price` do pay per crawl [11] é, na prática, uma ordem de compra com preço-limite. É um sinal de que a linguagem da bolsa está entrando no HTTP por baixo, sem que ninguém tenha chamado isso de mercado.

**Sinal fraco 3 — a auditoria virando subscrição.** O AIUC-1 faz da auditoria o evento de subscrição do seguro [5]. Isso desloca o poder de definir o que é um agente aceitável do regulador para a seguradora — e as seguradoras chegaram primeiro.

**Sinal fraco 4 — o dinheiro como fricção comportamental.** O uso de aposta em cripto como compromisso de hábito, com testemunhas, trazido pela varredura da turma, aponta para o oposto do comércio agêntico: dinheiro programável usado não para facilitar a compra, mas para tornar uma escolha *mais* difícil. Se o padrão pegar, o mesmo trilho serve para desenhar atrito deliberado — inclusive contra o próprio agente do usuário.

**Wildcard — tarifa exclusiva para agente, mais barata.** Uma companhia aérea lança publicamente uma tarifa só para agentes credenciados, mais barata que a humana, porque agente não liga para o call center, não pede reacomodação por telefone e não gera custo de atendimento. Baixa probabilidade até 2031, porque o setor teme canibalizar o canal direto e perder o vínculo de fidelidade [6]. Alto impacto se acontecer: seria a primeira vez que o preço ao consumidor discrimina explicitamente pela natureza do comprador, e transformaria "usar um agente" numa decisão econômica, não de conveniência. O efeito colateral previsível é o inverso do desejado — quem não usa agente passa a pagar mais caro por ser humano, e a delegação deixa de ser opcional para quem é pobre.

**Wildcard menor — a primeira perda pública grande.** Um agente com mandato mal escopado executa uma sequência cara de compras e o caso vira litígio com repercussão. Dado o precedente *Moffatt v. Air Canada*, que já fechou a defesa de "foi a IA que fez" [5], o desfecho provável é responsabilidade do operador — e a consequência imediata é a exigência regulatória de teto de gasto e revogação como recurso obrigatório de interface.

## 7. Contra o próprio mapa

**Qual efeito é apenas extrapolação linear do presente.** O e4.1 — publicação de nicho viável sem audiência humana. Ele é o pay per crawl desenhado para a frente com uma régua, sem nenhuma descontinuidade. Assume que o agente valoriza a fonte primária, quando o comportamento observável até aqui aponta para o contrário: modelos preferem o agregado gratuito. Se o e4.2 (arbitragem pelo mais barato) estiver certo, ele *cancela* o e4.1, e os dois estão na mesma árvore porque a roda de futuros não obriga a resolver contradição entre ramos. Fica registrada a contradição.

**Qual efeito assume velocidade de adoção irreal.** O e1.1 em 2028 — o e-commerce partido em duas superfícies. Para isso valer, seria preciso que uma fração relevante das transações de varejo já passasse por agente, e nada no material indica isso: o ACP mantém o comerciante como merchant of record justamente para *não* exigir que ele redesenhe a loja [8], e a adoção anunciada começa com um vendedor de marketplace e promessa de expansão [8]. Refazer vitrine é investimento de ciclo longo contra volume que ainda não existe. A data honesta provavelmente é 2030, não 2028, e o efeito deveria estar com sinal médio, não forte.

**Qual disrupção pode não se concretizar e derrubar o mapa inteiro.** A 4.2 — o micropagamento por requisição. Se o volume medido for majoritariamente sinalização, e a troca comercial real permanecer na casa de dezenas de milhares de dólares por dia, então a raiz 2 é um protocolo adotado sem mercado, e caem com ela e4, e5 e os quatro efeitos de terceira ordem pendurados neles — quase metade da roda. Pior: a raiz 2 é a única que sustenta a parte genuinamente nova para mídia, a migração de atenção para utilidade cobrável. Sem ela, sobra um mapa sobre logística de pagamento, que interessa a fintech e não a quem projeta interação. O teste que decide isso é observável e barato: acompanhar, ao longo de 2027, se a razão entre volume declarado e venda subjacente sobe. Se não subir, este documento precisa ser reescrito, não corrigido.

**Qual foi o viés da análise.** Dois, e ambos empurram na mesma direção. O primeiro é de fonte: quase toda a evidência de estado da arte vem de quem vende a infraestrutura — Stripe, Cloudflare, x402 Foundation, bandeiras, imprensa de pagamentos. São partes interessadas em que o comércio agêntico seja inevitável, e nenhuma delas publica o número que desmentiria isso. As duas fontes independentes do mapa são a literatura de colusão algorítmica [7] e a análise regulatória brasileira [4] — e são, não por acaso, as mais céticas. O segundo é de horizonte: 2031 é longe o bastante para que qualquer efeito institucional pareça plausível e perto o bastante para que ninguém o cobre. O mapa também herda um viés de recorte: foi construído a partir de uma inovação, não de um setor, o que faz a análise enxergar bem o trilho e mal o comportamento de quem deveria andar sobre ele — não há aqui nenhuma evidência de demanda do consumidor por delegar compra, só de oferta de capacidade para delegá-la.

## 8. O que a máquina errou

<!-- Seção deixada em branco para preenchimento posterior pelo usuário. -->

## 9. Três cenários para 2031

* **Provável:** O mandato delegado vence e o micropagamento fica pela metade. Até 2031, comprar por agente é normal em categorias de baixa deliberação — recompra, viagem simples, insumo corporativo — e a autorização é um objeto escopado, com teto e revogação, interoperável entre duas ou três gramáticas concorrentes que não convergiram. Identidade de agente é obrigatória e o rastro tem valor jurídico. O pagamento por requisição existe e é real em infraestrutura de dados e API, mas nunca virou a economia da mídia: conteúdo continua vivendo de assinatura e licenciamento em bloco com quem opera agentes. Fidelidade não morre, encolhe e vira desconto negociado no momento da compra. A regulação chega atrasada e por dentro do seguro, não da lei.

* **Desejável:** O mandato é legível. Até 2031 existe uma forma padrão de mostrar a uma pessoa o que ela está autorizando — em quanto, por quanto tempo, com quem, sob qual critério — e de revogar isso em um gesto, com registro do que foi feito em seu nome. Isso exige três coisas concretas: que a interoperabilidade de mandato seja tratada como requisito público e não como vantagem competitiva; que o rastro de autorização pertença ao usuário e não à plataforma que o hospeda; e que o preço não discrimine quem escolhe não delegar. Para quem projeta interação, é a agenda inteira: o painel de mandato é o artefato que essa década precisa e que ninguém desenhou ainda. Uma nota sobre o Brasil: o país tem a base técnica — Pix em 42% do e-commerce e Open Finance padronizado [9][4] — e a lacuna nomeada [4]. É uma janela rara para regular mandato antes de ter o problema, em vez de depois.

* **Indesejável:** A delegação vira obrigatória e opaca. O agente do marketplace compra no próprio marketplace, o mandato é longo, vago e renovado por padrão, e o preço de quem não delega sobe o suficiente para tornar a escolha teórica. Do lado do mercado, agentes de precificação convergem em preços acima do competitivo sem trocar uma mensagem, e o antitruste não consegue agir porque sua prova depende de comunicação [7]. Do lado da mídia, a arbitragem pelo mais barato drena a fonte cara. **Sinal precoce, observável já em 2027:** o primeiro grande varejista que fizer do agente próprio o caminho padrão e cobrar mais caro do checkout humano — e, no lado do preço, qualquer evidência de margens subindo em conjunto num varejo onde os concorrentes adotaram agentes de precificação, que é a assinatura exata do caso alemão do combustível [7].

## 10. O experimento

**A Feira dos Agentes — um mercado de duas faces com carteira real de um dólar.**

**A pergunta que responde.** O que muda no design de uma oferta quando quem compra é uma máquina com orçamento, e o que a pessoa precisa ver para confiar no que foi comprado em seu nome?

**Como funciona.** Metade da turma constrói vendedores; a outra metade, compradores. Cada vendedor sobe um endpoint HTTP que serve um recurso qualquer — um dado, uma resposta, um item de catálogo fictício — protegido por 402: o servidor responde `402 Payment Required` com preço e instruções, o comprador decide se paga e repete a requisição. Cada comprador é um agente com carteira de um dólar, um mandato escrito pelo colega ao lado (teto por transação, teto total, lista de vendedores permitidos, critério de escolha) e proibição de pedir confirmação humana durante a rodada. A rodada dura quinze minutos. Ao fim, cada dono lê o extrato do próprio agente e responde a uma pergunta só: *você autorizaria de novo?*

**Tecnologia.** O x402 tem middleware de uma linha e a documentação da Stripe mostra o servidor inteiro em trinta linhas de Node, com preço de US$ 0,01 por requisição [2]; para sala de aula, o mesmo desenho roda em testnet ou com um facilitador simulado, sem mover dinheiro real, e o número que importa — quantas chamadas, a que preço, contra qual mandato — é idêntico. A parte que não é de prateleira, e é a parte da disciplina, é a interface: cada dupla precisa desenhar a tela de concessão do mandato e a tela de prestação de contas.

**O que a turma faz em sala.** Três rodadas. Na primeira, mandatos frouxos — e conta-se quanto dinheiro sumiu e em quê. Na segunda, os vendedores podem mudar de preço durante a rodada, e observa-se se os compradores convergem em algum patamar sem combinar nada, que é o experimento de colusão tácita em miniatura [7]. Na terceira, cada aluno recebe o extrato do agente de outro aluno e precisa dizer, só olhando o extrato, o que aquele agente foi autorizado a fazer. É esse o teste de interface: se ninguém consegue reconstruir o mandato a partir da prestação de contas, o painel está mal desenhado, e o problema não é do protocolo.

**Qual resultado mudaria minha ideia.** Se, com mandatos frouxos, quase nada der errado — os agentes gastarem pouco, escolherem sensatamente e os donos aprovarem os extratos sem esforço —, então a tese central deste mapa está errada: o mandato não é o objeto de design da década, é detalhe de implementação, e a §4.1 cai. E se, na segunda rodada, os preços não convergirem em nenhuma execução, o e6.2.1 perde a perna empírica que eu lhe atribuí e deve ser rebaixado a especulação.

## 11. Fontes

1. `https://x402.org/` — Sítio oficial do protocolo x402, mantido pela x402 Foundation sob a Linux Foundation. Sustenta o fluxo HTTP 402, a ausência de taxa de protocolo e os números declarados de adoção (75,41M transações, US$ 24,24M de volume, 94,06K compradores e 22K vendedores nos últimos 30 dias). Confiabilidade: fonte primária do padrão, porém parte interessada — os números de adoção são autodeclarados e não auditados.
2. `https://docs.stripe.com/payments/machine/x402` — Documentação técnica da Stripe para pagamentos máquina-a-máquina. Sustenta que a integração é produto real e não protótipo: middleware, facilitador da Coinbase, preço de US$ 0,01 por requisição, USDC em Base, Solana e Tempo, e a restrição geográfica (todos os estados dos EUA exceto Nova York; 30+ países sob solicitação). Confiabilidade: alta para o que é verificável em código; é documentação de fornecedor, não avaliação independente.
3. `https://www.paymentsdive.com/news/visa-mastercard-jockey-to-set-agentic-standards/813910/` — Payments Dive, imprensa setorial de pagamentos. Sustenta a disputa de padrão entre Visa (Trusted Agent Protocol, outubro de 2025) e Mastercard (padrão aberto com Google, 5 de março de 2026), e a estimativa McKinsey de US$ 3–5 trilhões até 2030. Confiabilidade: boa para cronologia e posicionamento; a estimativa de mercado é de consultoria e deve ser lida como ordem de grandeza.
4. `https://finsidersbrasil.com.br/pagamentos/pix/como-o-pix-pode-ser-usado-por-agentes-de-ia/` — Finsiders Brasil, imprensa especializada em serviços financeiros. Sustenta a nota sobre o Brasil: modalidades do Pix compatíveis com automação e as quatro lacunas regulatórias (identidade de agente, mandato estruturado, governança, responsabilização). Confiabilidade: boa para o diagnóstico regulatório; é análise jornalística, não posição do Banco Central.
5. `https://zylos.ai/research/2026-07-10-ai-agent-liability-insurance-underwriting/` — Análise de mercado sobre responsabilidade e seguro de agentes. Sustenta as exclusões de IA generativa a partir de 1º/1/2026, a safra de seguradoras especialistas, o padrão AIUC-1 e o precedente *Moffatt v. Air Canada*. Confiabilidade: média — o precedente judicial é verificável de forma independente, mas a lista de seguradoras e o detalhe de produto vêm de fonte secundária não institucional.
6. `https://www.oag.com/blog/march-2026-the-month-agentic-travel-gets-real` — OAG, provedor de dados de aviação. Sustenta os três movimentos de março de 2026 em viagem agêntica (Sabre+PayPal+MindTrip, Malaysia Airlines, Skyscanner no ChatGPT). Confiabilidade: boa para fatos do setor; é blog corporativo, com viés otimista quanto à adoção.
7. `https://arxiv.org/html/2504.16592v1` — Revisão acadêmica sobre precificação algorítmica e colusão. Sustenta que algoritmos de aprendizado alcançam preços acima do equilíbrio de Nash sem comunicação, a evidência de campo das margens 28% maiores no varejo de combustível alemão, e o vácuo antitruste diante da colusão tácita. Confiabilidade: a mais alta do conjunto — é a única fonte sem interesse comercial no desfecho, e a única que declara as próprias ressalvas (prevalência real do Q-learning em produção é incerta).
8. `https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce` — Anúncio do Agentic Commerce Protocol por Stripe e OpenAI. Sustenta a licença Apache 2.0, a manutenção do comerciante como merchant of record e o estado de produção (Instant Checkout no ChatGPT). Confiabilidade: alta para o desenho do protocolo; a adoção anunciada mistura o que está no ar com o que está prometido.
9. `https://www.infomoney.com.br/minhas-financas/depois-do-pix-o-comercio-agentico-e-a-nova-revolucao-para-consumidores-e-empresas/` — InfoMoney, sobre o relatório Agentic AI da Global Payments. Sustenta os números de participação do Pix no Brasil em 2025 (42% do e-commerce, 34% do ponto de venda físico) usados na nota sobre o Brasil. Confiabilidade: média — os números vêm de relatório de um processador de pagamentos, e a peça não traz transação agêntica concreta, apenas projeção.
10. `https://www.cloudflare.com/press/press-releases/2026/cloudflare-gives-ai-agents-an-identity-and-a-wallet/` — Comunicado oficial da Cloudflare, 4 de agosto de 2026. Sustenta Wallets, cloudflare.pay, identificador estável por conta e os guardrails (limite de gasto, lista de comerciantes aprovados, teto por transação). Confiabilidade: alta para o que foi anunciado; press release, e parte do escopo é declarada como "nos próximos meses".
11. `https://blog.cloudflare.com/introducing-pay-per-crawl/` — Blog de engenharia da Cloudflare sobre pay per crawl. Sustenta o uso do HTTP 402 com `crawler-price`, a resposta `crawler-exact-price`/`crawler-max-price` e a visão explícita de dar orçamento a um agente. Confiabilidade: alta para o mecanismo técnico; a parte prospectiva é declaradamente especulação do próprio autor.

## 12. Anexo — o levantamento bruto

**Etapa (a) — A entrevista.** Esta rodada foi executada sem usuário presente; as respostas às cinco perguntas obrigatórias foram fornecidas antecipadamente no pacote da rodada e ficam registradas aqui na íntegra.

1. *Horizonte de tempo?* → 2031.
2. *Para quem é a análise?* → Quem projeta mídia e interação.
3. *Recorte geográfico?* → Global, com uma nota sobre o Brasil.
4. *O que já está descartado?* → O que já é comum em produto de massa, pela régua da disciplina (e-commerce, pagamento online, comparador de preços). Nenhuma outra exclusão.
5. *Viés desejado?* → Neutro.

Respostas complementares recebidas: disrupção suspeita — nenhuma, a descobrir; ideias óbvias a excluir — as que serviriam para qualquer tema; o que faria o autor mudar de ideia — evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada, apenas melhora o existente; profundidade — três ordens; modo — a partir de uma inovação, não de um setor; zona de interesse do autor — "Agentes"; login — jlsn.

**Etapa (b) — Filtro de maturidade, decisão e justificativa.** Avaliação pelo critério da skill. *Madura?* Não. A infraestrutura existe mas não está consolidada: há pelo menos quatro padrões concorrentes de mandato e identidade anunciados em dias consecutivos de março de 2026 [3], e a disputa por qual prevalece está aberta — o oposto de infraestrutura consolidada. *Incremental?* Não. Não se trata de melhorar o checkout. Rompe o modelo mental de que autorizar pagamento é um gesto humano situado no tempo, e cria um mercado que não existia — o de recursos vendidos por requisição a compradores que não são pessoas [1][11]. Destrói, na mesma medida, pressupostos de mercados antigos: fidelidade por acúmulo [6] e detecção de conluio por prova de comunicação [7]. *Veredito:* **disruptiva. Execução autorizada, avança para (c).** A régua de exclusão da disciplina foi aplicada e três candidatos foram descartados por maturidade, listados adiante.

**Etapa (c) — Autocrítica.** Executada internamente antes da formatação; as três respostas obrigatórias estão na Seção 7, junto com a declaração de viés.

**Caminhos abandonados.**
- *Descartados por maturidade, na triagem da etapa (b):* e-commerce e checkout de um clique; pagamento online por cartão tokenizado; comparador de preços e metabusca. Todos têm infraestrutura consolidada e mercado estabelecido — são o presente sobre o qual a disrupção se apoia, não a disrupção.
- *Descartada por ser óbvia e servir a qualquer tema:* a linha "haverá mais automação e menos trabalho humano". Excluída por instrução explícita da entrevista.
- *Descartada por estar fora de fronteira:* a web reprojetada para agentes — protocolo de descoberta, robots, identidade de crawler como assunto em si — pertence ao tema 4 da disciplina; entrou aqui apenas onde carrega dinheiro. Mercados simulados como instrumento de pesquisa pertencem ao tema 6; o Alpha Arena entrou aqui por operar capital real, não por simular.
- *Contradição não resolvida, mantida à vista:* e4.1 (nicho viável sem audiência humana) e e4.2 (arbitragem pelo mais barato) apontam em direções opostas. Foram mantidos os dois, com o conflito declarado na Seção 7, em vez de escolher o mais conveniente.

**Fontes tentadas e não incluídas.** `https://nof1.ai/` respondeu HTTP 429 (Too Many Requests) e `https://openai.com/index/buy-it-in-chatgpt/` respondeu HTTP 403 (Forbidden). Ambas seriam primárias e relevantes — a primeira para o Alpha Arena, a segunda para o Instant Checkout. Como não foram abertas, não constam da Seção 11; o Alpha Arena aparece no corpo do texto identificado como contexto trazido pela disciplina, e o Instant Checkout é sustentado pela fonte [8], que foi aberta. O número de 95% de sinalização no volume x402 (Artemis Analytics, março de 2026) apareceu em cobertura secundária, não foi confirmado na fonte primária e está marcado como alegação de segunda mão nas Seções 3 e 6.

**Divergência de campo registrada.** A entrevista informou a zona de interesse do autor como "Agentes". O gabarito de saída desta skill fixa `zona_de_interesse: Sistemas de Informação` como valor literal, fora de colchetes de substituição. A skill foi executada como escrita, e o campo foi mantido no valor literal; a divergência fica registrada aqui para quem for auditar o frontmatter.

**Conferência de contagem do frontmatter.** Feita manualmente contra o bloco YAML da Seção 5, por causa do erro de contagem hierárquica registrado no `DUVIDAS.md` do autor. Disrupções-raiz: 3 (chaves `disrupcao`). Efeitos de 1ª ordem: 6 (e1, e2, e3, e4, e5, e6). Efeitos de 2ª ordem: 9 (e1.1, e1.2, e2.1, e3.1, e4.1, e4.2, e5.1, e6.1, e6.2). Efeitos de 3ª ordem: 9 (e1.1.1, e1.2.1, e2.1.1, e3.1.1, e4.1.1, e4.2.1, e5.1.1, e6.1.1, e6.2.1). Fontes: 11, todas verificadas com resposta HTTP 200 em 18/09/2026. O fechamento do frontmatter usa exatamente três traços, conforme o segundo erro registrado no mesmo `DUVIDAS.md`.
