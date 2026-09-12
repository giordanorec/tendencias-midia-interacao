---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: kvv
zona_de_interesse: Agentes
data: 2026-09-15
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 18
tecnologias_citadas: ["mandatos criptográficos assinados (AP2)", "x402 sobre HTTP 402", "Agentic Commerce Protocol", "tokens agênticos de bandeira (Agent Pay e Trusted Agent Protocol)", "micropagamento em stablecoin máquina-a-máquina", "streaming de micropagamento por sessão (MPP)", "pagamento agêntico sobre Pix e Open Finance", "identidade portátil e seguro de agentes"]
fontes: 16
confianca: media
experimento: Duas turmas operam agentes compradores com orçamento real e limites declarados num mercado de sala com vendedores também agentes, para observar preço, colusão tácita e quem fica com o prejuízo do erro.
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

Um agente que lê é uma ferramenta; um agente que paga é uma parte contratante. Este mapa trata da travessia dessa linha até 2031 e recusa como disrupção tudo o que já é comum em produto de massa — e-commerce, comparador de preço, checkout com um clique, assistente que recomenda. Três rupturas ainda inacabadas organizam o documento: a autorização de compra deixando de ser um clique e virando um mandato criptográfico delegável; a demanda deixando de ser uma pessoa persuadível e virando uma função objetivo que negocia em latência de máquina; e o dinheiro descendo para a camada de transporte da web, cobrado por requisição, sem conta e sem cadastro. Nenhuma das três está consolidada: em 2026 o checkout dentro do chat estagnou em torno de 30 lojistas, nenhuma bandeira publicou regra de chargeback específica para agente, e o tribunal que julgou se um agente pode comprar no lugar do dono decidiu de propósito o mais estreito possível. O mapa percorre efeitos de primeira, segunda e terceira ordem, se audita contra si mesmo e propõe um experimento de sala com dinheiro pequeno e consequência real.

## Seção 2 — O tema

Comércio agêntico é o arranjo em que um programa executa o ciclo inteiro de uma compra — descobrir, comparar, autorizar, pagar e responder pelo resultado — a partir de um objetivo, e não de uma sequência de cliques. O objeto de estudo aqui não é a compra automatizada (isso existe desde a compra recorrente e o robô de leilão), e sim o deslocamento da **parte contratante**: quem escolhe, quem paga, quem erra e quem é cobrado.

Os pontos de contato com mídia e interação são três, e nenhum deles é acessório. **Primeiro:** se o comprador é um programa, a interface deixa de ser o lugar onde a venda acontece e passa a ser o lugar onde o mandato é escrito — a superfície de design migra da vitrine para a política. **Segundo:** toda a economia da persuasão comercial — vitrine, urgência, prova social, fidelidade, mídia paga — foi construída contra um sistema cognitivo humano que, no momento da compra, sai de cena. **Terceiro:** a web como mídia foi financiada por um acordo implícito (acesso gratuito em troca de atenção ou de dado) que um agente pagante não cumpre: ele consome o conteúdo e não vê o anúncio, o que reabre a pergunta de quem paga a informação.

Isso exige mapa prospectivo, e não levantamento de estado da arte, por uma razão específica: o estado da arte aqui é enganosamente eloquente. Há protocolo publicado por Google, OpenAI, Stripe, Coinbase, Visa e Mastercard, há integração de voo em produção, há modelo de linguagem operando com capital real — e, ao mesmo tempo, há um piloto de checkout que travou em dezenas de lojistas e um vazio jurídico em que ninguém sabe quem paga o erro. Um levantamento fotografaria os anúncios e concluiria que já chegou; um mapa prospectivo precisa separar o que foi anunciado do que foi adotado, e localizar onde a ruptura ainda não aconteceu.

## Seção 3 — Onde isso está hoje

**O que já funciona.** A camada de autorização existe e é pública. O AP2, anunciado pelo Google em 16/09/2025 com mais de 60 parceiros — Mastercard, American Express, PayPal, Adyen, Coinbase, Etsy, Revolut, entre outros —, define *mandatos* assinados por credenciais verificáveis: um *Intent Mandate* que registra a instrução original ("ache um tênis branco de corrida", com limites de preço e condições) e um *Cart Mandate* que congela item e preço antes do pagamento, produzindo uma trilha não repudiável de intenção → carrinho → pagamento [1]. Do lado do trilho, o x402 da Coinbase ressuscita o código HTTP 402: o agente pede um recurso, recebe 402 com a especificação de cobrança, paga em stablecoin e reapresenta o pedido com o recibo, em liquidação abaixo de dois segundos e custo na casa de US$ 0,0001 por transação [2]. A V2 foi ao ar em dezembro de 2025 e o protocolo tem suporte de Cloudflare e Stripe; o MPP, de Stripe e Tempo, entrou em mainnet em março de 2026 com pré-autorização de limite e micropagamento contínuo dentro de uma sessão [4]. As bandeiras construíram sua própria camada: Mastercard Agent Pay (29/04/2025) amarra uma credencial tokenizada a um agente, um escopo de lojista e uma política de consentimento, com Agent Pay for Machines em 10/06/2026; Visa Intelligent Commerce (30/04/2025) e Visa Trusted Agent Protocol (14/10/2025) acrescentam verificação criptográfica que distingue um agente comprador de um raspador, usando HTTP Message Signatures construídas com a Cloudflare [8]. Em viagens, o substrato é real: desde 09/09/2026 o agente Muse, da Meta, usa a Duffel para buscar, reservar e gerenciar voos em inventário ao vivo de mais de 500 companhias, inclusive inserindo o número de fidelidade do passageiro [6]; a Amadeus publicou em 04/06/2026 que considera a tecnologia madura para operação em companhias aéreas e chama os próximos 12 a 18 meses de decisivos [7]. E há dinheiro de verdade na mão de modelos: no Alpha Arena, da Nof1, seis modelos receberam US$ 10 mil cada, com prompt e dados idênticos, para operar perpétuos de cripto na Hyperliquid [12].

**O que falha.** O elo mais frágil é justamente o do meio — o fechamento da compra. Até fevereiro de 2026 havia cerca de 30 lojistas ao vivo no Instant Checkout dentro do ChatGPT, contra o "mais de um milhão" prometido no lançamento de setembro de 2025; a Walmart mediu o checkout em chat convertendo a cerca de um terço da taxa de mandar o comprador para o próprio site, e o diagnóstico apontado foi qualidade de dado — estoque, prazo e frete envelhecendo entre a raspagem e a compra [10]. O resultado é que o padrão que se firmou em 2026 é "descobre na IA, compra no site", que é exatamente o oposto da promessa de agência plena. A camada de responsabilidade simplesmente não existe: nenhum governo legislou sobre quem responde quando um agente compra errado, nenhuma bandeira publicou regra de chargeback específica para agente, e a especificação de pagamento delegado diz com todas as letras que liquidação, reembolso, chargeback e compliance continuam com o lojista e seu adquirente [8][9]. Pior: as provas com que o lojista costuma ganhar uma disputa — impressão digital do dispositivo, IP do cliente, histórico de navegação, sinais de sessão — desaparecem quando quem compra é uma chamada de API [9]. A segurança do trilho também está sob escrutínio acadêmico: um trabalho apresentado no ATC '26 faz análise sistemática de vulnerabilidades do x402 sob o título explícito de "pegar carona" no pagamento alheio [3]. E os resultados do dinheiro em mãos de máquina não sustentam entusiasmo: na temporada 1 do Alpha Arena, encerrada em 04/08/2026, só dois dos seis modelos terminaram positivos (Qwen3 Max +22,3%; DeepSeek Chat V3.1 +4,89%), enquanto GPT-5 fechou −62,66% e Gemini 2.5 Pro −56,71% [12].

**Quem está construindo.** Google (AP2), OpenAI e Stripe (ACP e Instant Checkout), Coinbase (x402), Stripe e Tempo (MPP), Cloudflare (assinatura e cobrança na borda), Visa e Mastercard (tokens e protocolo de agente confiável), Duffel e Amadeus (inventário de viagem legível por programa), Meta (Muse), Nof1 (benchmark com capital real). No Brasil o arranjo é próprio e vale registrar: a Visa fez a primeira transação agêntica do país em março de 2026 e lançou o programa Visa Agentic Ready com Banco do Brasil, Bradesco, Dock, Santander e XP; a Iniciador lançou um servidor MCP que permite a ChatGPT, Claude e Gemini iniciarem Pix; Pomelo e Payzu operam em cartão e em detecção de fraude. A base local é incomum — Pix mais Open Finance — e a pesquisa citada indica 76% de brasileiros dispostos a comprar via IA contra 44% de norte-americanos, o que faz do país um candidato a adotante precoce **sem** que o Banco Central tenha ainda definido a regulação [11].

## Seção 4 — As disrupções-raiz

Antes das três, o registro do que foi **recusado** pelo filtro da Etapa 2, com o motivo formal. *Comprar dentro do chat* é e-commerce com outra fachada: muda o ponto de entrada, não a lógica da transação — e os dados de 2026 mostram que estagnou justamente por ser uma otimização de interface [10]. *Comparador de preço automatizado* e *alerta de queda de tarifa* são automação simples de uma prática madura. *Assistente que recomenda produto* é IA generativa básica acoplada a catálogo. *Pagamento por aproximação, um clique e cobrança recorrente* são infraestrutura amplamente adotada. Nenhum desses rompe quem é a parte contratante, que é o eixo deste mapa.

### Disrupção 1 — A autorização vira um artefato assinado e delegável: o fim do clique como prova de consentimento

**O que rompe.** Toda a arquitetura jurídica e de interface do comércio digital repousa sobre um pressuposto: houve um humano, houve uma tela, houve um clique, e o clique é a prova. O mandato criptográfico substitui esse pressuposto por outro — existe um documento assinado que declara escopo, limite, condição e validade, e que pode ser executado **na ausência do humano**, inclusive dias depois, por um programa que o portador delegou. O consentimento deixa de ser um evento pontual e vira uma política com prazo. Isso rompe três coisas de uma vez: a prova de consentimento (o clique deixa de ser o artefato central), o desenho da interface (o que a tela precisa produzir não é mais uma decisão, é um contrato legível), e a cadeia de responsabilidade (o erro passa a ser um mandato mal escrito ou mal executado, não uma compra mal feita).

**Por que agora e não há cinco anos.** Porque em 2025–2026 a camada foi publicada por quem tem poder de impô-la, e não por um consórcio marginal: AP2 com 60+ parceiros de pagamento [1], tokens agênticos das duas bandeiras globais [8], e uma extensão A2A x402 feita com Coinbase, Ethereum Foundation e MetaMask [1]. Há cinco anos faltava simultaneamente o executor confiável (um modelo capaz de interpretar um objetivo comercial sem supervisão passo a passo) e o formalismo de credencial verificável em escala de pagamento. Hoje falta apenas a última coisa da lista — e ela é a mais difícil.

**O que falta para se concretizar.** Falta a regra de responsabilidade. Nenhuma bandeira publicou chargeback específico de agente; a especificação de pagamento delegado empurra reembolso e disputa de volta ao lojista; e não existe taxa de disputa atribuída a agente publicada por ninguém [8][9]. Falta também o lado do lojista: enquanto as provas tradicionais de disputa não forem substituídas por prova de mandato, o comerciante racional continua preferindo o comprador humano — e é isso, não a tecnologia, que segura a adoção.

### Disrupção 2 — O comprador vira uma função objetivo: preço formado entre máquinas e persuasão sem alvo

**O que rompe.** Rompe o pressuposto de que a demanda é persuadível. Quando quem compara é um programa com objetivo declarado, a marca não disputa atenção — disputa posição numa lista de fornecedores aceitos. A pesquisa da Amadeus sobre o setor já formula o problema do lado da oferta: a companhia aérea precisa decidir se vende para a pessoa ou para o agente [7], e o Muse já insere o número de fidelidade **em nome** do passageiro, o que expõe o quanto o programa de milhas foi desenhado para um humano que agora não decide [6]. Do outro lado, a formação de preço muda de natureza: há evidência experimental de que agentes de precificação baseados em LLM alcançam preços supracompetitivos de forma rápida e autônoma em oligopólio, com o grau de supracompetitividade sensível a variações aparentemente inócuas do prompt [13]; e há o caso mais desconfortável, em que vendedores concorrentes que delegam a precificação ao **mesmo** modelo produzem preço correlacionado sem comunicação alguma — "monocultura de IA" — de modo que configurar o modelo para robustez e reprodutibilidade, prática que parece prudente, é justamente o que sustenta o preço elevado [14].

**Por que agora e não há cinco anos.** Porque só agora as duas pontas são programáveis ao mesmo tempo. Do lado da compra, inventário de verdade acessível a programa (Duffel, mais de 500 companhias, em produção com um agente de consumo em setembro de 2026) [6]. Do lado da venda, a delegação de precificação a modelos de linguagem deixou de ser hipótese de laboratório e virou caso de uso prioritário em varejo [14]. Colusão algorítmica por regras já era estudada antes; o que é novo é a colusão **tácita e não instruída**, emergindo de modelos de propósito geral.

**O que falta para se concretizar.** Falta densidade: enquanto a maior parte do fechamento voltar para o site do lojista [10], o agente não tem o controle de preço que a hipótese exige. Falta instrumento de prova: autoridade de concorrência não tem hoje como caracterizar cartel sem acordo, sem comunicação e sem instrução — o que existe é literatura, não jurisprudência. E falta a decisão comercial mais simples e mais reveladora: alguém precisa lançar preço diferente para agente e para pessoa, assumindo em público que são dois compradores distintos.

### Disrupção 3 — O dinheiro desce para a camada de transporte: pagar por requisição sem conta, sem cadastro e sem relação

**O que rompe.** Rompe o acordo que financia a web como mídia. Acesso gratuito em troca de atenção ou de dado pessoal pressupõe um visitante que pode ser medido, perfilado e reexposto. Um agente pagante não é nada disso: ele paga, pega, e some. O x402 dissolve as duas pré-condições da relação comercial digital — cadastro e chave de API — e substitui por um recibo por requisição [2]. Isso abre um objeto novo, que não é loja nem assinatura: **mercado de informação vendida a máquina**, incluindo mercados de micro-transação para informação de produto *verificada*, exatamente para resolver a assimetria que hoje quebra a compra agêntica [15]. E inverte a economia do bloqueio: em vez de expulsar o robô, cobrar dele.

**Por que agora e não há cinco anos.** Três coisas coincidiram: liquidação barata e quase instantânea em stablecoin (sub-2s, ~US$ 0,0001) [2], suporte de infraestrutura de borda e de processador (Cloudflare, Stripe) [4], e — a parte que faltava — um consumidor não humano com motivo para pagar frações de centavo milhares de vezes por hora. Micropagamento fracassou repetidamente desde os anos 1990 porque exigia decisão humana por unidade; o custo real nunca foi a taxa, foi o clique. O agente elimina o clique.

**O que falta para se concretizar.** Falta segurança madura: já há análise sistemática de como pegar carona no pagamento alheio no x402 [3] e trabalho sobre vazamento de dado pessoal em metadados de pagamento agêntico [16]. Falta prova de receita: o volume mais citado do protocolo vem de comparativo de fornecedor, não de fonte auditada [4]. E falta a escolha de quem publica: enquanto o modelo de negócio dominante da mídia for anúncio e assinatura, cobrar por requisição é canibalização — a mudança depende de o tráfego de agente ficar grande o bastante para doer.

## Seção 5 — A roda dos futuros

```yaml
roda_dos_futuros:
  - id: e1
    efeito: "A autorização de compra vira artefato criptográfico delegável, e não um clique"
    sinal: moderado
    prazo: "2026-2029"
    confianca: media
    filhos:
      - id: e1.1
        efeito: "Mandatos assinados (intenção e carrinho) viram o objeto que a interface passa a produzir"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e1.1.1
            efeito: "Surge um 'design de mandato': escopo, teto, validade e revogação como elementos de UI"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e1.1.2
            efeito: "Arrependimento vira operação de revogar mandato, não de devolver produto"
            sinal: fraco
            prazo: "2029-2031"
            confianca: baixa
      - id: e1.2
        efeito: "O consentimento deixa de ser evento e vira política com prazo de validade"
        sinal: fraco
        prazo: "2028-2031"
        confianca: baixa
        filhos:
          - id: e1.2.1
            efeito: "Defesa do consumidor passa a exigir prova de mandato onde hoje exige prova de clique"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa

  - id: e2
    efeito: "O ponto de venda migra da interface para o endpoint: a loja é lida por máquina antes de ser vista por gente"
    sinal: forte
    prazo: "2026-2029"
    confianca: alta
    filhos:
      - id: e2.1
        efeito: "Catálogo estruturado e fresco vale mais que a página de produto"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e2.1.1
            efeito: "Verba de persuasão visual migra para qualidade de dado: estoque, prazo, frete, devolução"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media
          - id: e2.1.2
            efeito: "Otimização para agente substitui parcialmente SEO e mídia paga como disciplina"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media
      - id: e2.2
        efeito: "A compra se parte em duas: descoberta no agente, fechamento no site do lojista"
        sinal: forte
        prazo: "2026-2028"
        confianca: alta
        filhos:
          - id: e2.2.1
            efeito: "Atribuição de venda vira disputa contratual entre plataforma de agente e lojista"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media

  - id: e3
    efeito: "Preço no varejo passa a ser formado em latência de máquina, agente contra agente"
    sinal: fraco
    prazo: "2028-2032"
    confianca: baixa
    filhos:
      - id: e3.1
        efeito: "Precificação delegada a poucos modelos produz preço correlacionado sem combinação explícita"
        sinal: moderado
        prazo: "2027-2031"
        confianca: media
        filhos:
          - id: e3.1.1
            efeito: "Autoridade de concorrência passa a pedir log de prompt e de política como prova"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
          - id: e3.1.2
            efeito: "Auditoria de monocultura de modelo vira exigência de compliance em setores concentrados"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa
      - id: e3.2
        efeito: "Volatilidade intradiária de preço chega a categorias antes estáveis (tarifa, diária, assinatura)"
        sinal: fraco
        prazo: "2029-2032"
        confianca: baixa
        filhos:
          - id: e3.2.1
            efeito: "Reguladores criam disjuntor de preço no varejo, por analogia ao mercado financeiro"
            sinal: fraco
            prazo: "2031-2034"
            confianca: baixa

  - id: e4
    efeito: "A fidelidade perde o alvo: o programa de pontos foi desenhado para um humano que não decide mais"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e4.1
        efeito: "Fornecedores passam a precificar para dois compradores distintos: o agente e a pessoa"
        sinal: fraco
        prazo: "2028-2031"
        confianca: baixa
        filhos:
          - id: e4.1.1
            efeito: "Tarifa exclusiva para agente aparece como produto: mais barata, sem canal de atendimento"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
          - id: e4.1.2
            efeito: "Fidelidade migra de ponto por consumo para contrato de exclusividade com o operador do agente"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
      - id: e4.2
        efeito: "A marca deixa de disputar atenção no momento da compra e passa a disputar a política do agente"
        sinal: moderado
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e4.2.1
            efeito: "Publicidade vira lobby técnico: pagar para constar na lista de fornecedores aceitos"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa

  - id: e5
    efeito: "A web se parte em regimes de acesso: quem aceita agente pagante e quem o expulsa"
    sinal: forte
    prazo: "2026-2029"
    confianca: alta
    filhos:
      - id: e5.1
        efeito: "Detecção e bloqueio de agente viram camada de infraestrutura tão banal quanto anti-DDoS"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e5.1.1
            efeito: "Assinatura criptográfica de agente vira requisito para ler catálogo e abrir checkout"
            sinal: moderado
            prazo: "2027-2030"
            confianca: media
          - id: e5.1.2
            efeito: "Sites passam a cobrar por requisição de agente (HTTP 402) em vez de bloqueá-lo"
            sinal: moderado
            prazo: "2027-2031"
            confianca: media
      - id: e5.2
        efeito: "A disputa migra do direito de acesso para o contrato e os termos de uso"
        sinal: moderado
        prazo: "2026-2030"
        confianca: media
        filhos:
          - id: e5.2.1
            efeito: "Termos de uso ganham cláusula de agente, com preço por requisição e limite de taxa declarados"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media

  - id: e6
    efeito: "Nasce um mercado de responsabilidade por ato de máquina: identidade, reputação e seguro de agentes"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e6.1
        efeito: "Identidade portátil de agente (operador mais histórico de incidentes) vira pré-requisito para transacionar"
        sinal: moderado
        prazo: "2027-2031"
        confianca: media
        filhos:
          - id: e6.1.1
            efeito: "Reputação de agente vira ativo com preço: prêmio de seguro e teto de gasto variam com ela"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
          - id: e6.1.2
            efeito: "Operador queimado recria agente limpo; surge pressão por registro público de operador"
            sinal: fraco
            prazo: "2029-2033"
            confianca: baixa
      - id: e6.2
        efeito: "O chargeback se adapta: prova de intenção assinada substitui prova de comportamento (dispositivo, IP, sessão)"
        sinal: moderado
        prazo: "2027-2031"
        confianca: media
        filhos:
          - id: e6.2.1
            efeito: "Lojista sem suporte a mandato assinado passa a perder a disputa por padrão"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
```

**O que o bloco não exprime sozinho.** Três coisas. **Primeira:** os nós de sinal forte e confiança alta (e2, e2.1, e2.2, e5, e5.1) não são sobre pagamento — são sobre *acesso e leitura*. O que está de fato acontecendo em 2026 é a reorganização da web para ser lida por máquina e a construção de porteiros; o pagamento autônomo é a parte anunciada, não a parte adotada. Quem projeta mídia e interação deve ler a roda de baixo para cima: o trabalho urgente é catálogo, dado fresco e política de acesso, não carteira.

**Segunda:** o ramo e3 é o de maior impacto e menor confiança, e essa combinação é deliberada. A evidência de preço supracompetitivo entre agentes é experimental e robusta [13][14], mas o caminho entre laboratório e prateleira passa por uma condição que hoje não se cumpre — o agente precisa controlar o fechamento, e em 2026 ele não controla [10]. Se a Disrupção 1 falhar, e3 inteiro não acontece.

**Terceira, e a mais importante:** os ramos não são independentes, e a roda, por ser árvore, esconde isso. e5 (regime de acesso) e e6 (responsabilidade) convergem no mesmo objeto: a identidade verificável do agente. A mesma assinatura que serve ao porteiro para deixar entrar serve ao segurador para precificar risco e ao adquirente para decidir a disputa. Quem controlar esse registro — bandeira, provedor de borda, plataforma de modelo ou um cadastro público — controla quem pode comprar em nome de quem. Essa é a disputa de poder do período, e ela não aparece em nenhum nó isolado.

## Seção 6 — Sinais fracos e wildcards

**Sinais fracos.** (1) O seguro de agente já existe e já foi subscrito: em 11/02/2026 a ElevenLabs saiu com apólice de US$ 50 milhões com capacidade do mercado Lloyd's, depois de 5.835 avaliações técnicas incluindo jailbreak adversarial, chamada de ferramenta não autorizada e sequestro de identidade de voz [5] — é subscrição de risco de agente acontecendo antes de existir qualquer regra de responsabilidade. (2) Subscritores já pedem, em texto, o que a indústria ainda não sabe produzir: identidade verificável do operador, histórico de incidentes e trajetória longitudinal, com a observação de que reputação presa a uma plataforma não serve e que registro de responsabilidade não vale nada se o operador ruim puder se desfazer dele e reaparecer limpo [5] — isto é, o embrião de um score de crédito para agentes. (3) Pesquisa propondo micro-transação para comprar informação de produto *verificada* [15] sinaliza que o gargalo do comércio agêntico está virando um mercado de dado confiável, não de recomendação. (4) A camada de pagamento já produz vazamento de dado pessoal em metadados, a ponto de existir trabalho dedicado a filtrá-los antes da execução [16]. (5) O Brasil aparece com arranjo próprio e sem regulação: Pix iniciado por servidor MCP a partir de ChatGPT, Claude ou Gemini, e 76% de intenção declarada de comprar via IA contra 44% nos EUA [11] — adoção alta correndo à frente da regra.

**Wildcard.** Uma decisão judicial de alta corte, em qualquer mercado grande, que atribua ao **operador do agente** — e não ao dono do dinheiro nem ao lojista — a responsabilidade objetiva por compras feitas dentro do mandato. O Nono Circuito, em 04/08/2026, foi deliberadamente na direção oposta e estreita: decidiu que quem "acessa" é o usuário, não a Perplexity, porque a captura de tela acontece na máquina do usuário e a empresa não fala diretamente com os servidores da Amazon — e fez questão de registrar que o alcance é limitado ao CFAA, deixando em aberto contrato, termos de uso e teoria de dano, e que agente com comunicação direta servidor a servidor pode ter sorte diferente [9]. Uma decisão no sentido inverso, em qualquer foro, reprecificaria o setor inteiro em meses: quem opera o agente passaria a carregar o risco, seguro viraria obrigatório, o teto de gasto delegado despencaria, os operadores pequenos sumiriam, e a Disrupção 1 se consolidaria — porém concentrada em três ou quatro empresas com balanço para suportar sinistro. É o único evento isolado capaz de acelerar e capturar o mapa ao mesmo tempo.

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa toma o adensamento protocolar de 2025–2026 (AP2, ACP, x402, MPP, tokens de bandeira) como curva que continua. Mas protocolo publicado não é protocolo adotado, e o próprio período oferece o contraexemplo: o Instant Checkout foi lançado em setembro de 2025 prometendo mais de um milhão de lojistas e estava em cerca de 30 em fevereiro de 2026 [10]. A leitura alternativa honesta é que 2026 marcou o pico de expectativa, não o início da curva — e que 2031 chega com uma dúzia de padrões concorrentes, nenhum majoritário, e comércio agêntico confinado a nichos de alto volume e baixo valor unitário (API, dado, computação), sem jamais chegar ao varejo de consumo.

**Velocidade de adoção irreal.** Os prazos de e1 e e6 (2027–2031) presumem que regra de responsabilidade, identidade portátil e chargeback adaptado se resolvem em três a cinco anos. Isso contraria o histórico do próprio setor: tokenização de cartão levou mais de uma década para virar padrão, e ali havia um único tipo de ator e nenhuma dúvida sobre quem consentiu. Aqui há três partes cuja relação nenhum arcabouço divide com clareza [9], reguladores dos EUA e do Reino Unido já com conclusões provisórias divergentes [8], e um vazio legislativo global. Dez anos é uma estimativa tão defensável quanto cinco.

**Falha da disrupção.** A Disrupção 3 é a mais frágil. O argumento de que o agente elimina o clique e por isso viabiliza o micropagamento é elegante, e elegância é exatamente do que se deve desconfiar: o micropagamento fracassou em ondas sucessivas desde os anos 1990, e a atribuição do fracasso ao custo cognitivo do clique é hipótese, não achado. O volume mais citado do x402 vem de material comparativo de fornecedor [4], a segurança do protocolo já é objeto de análise de vulnerabilidade sistemática [3], e o incentivo do publicador continua apontando para anúncio e assinatura. É perfeitamente possível que, em 2031, o x402 seja infraestrutura de nicho para APIs entre empresas e nada mais — e que a web de mídia nunca cobre por requisição.

**Viés do autor (e da máquina que redigiu).** Há dois vieses estruturais aqui. O primeiro é de fonte: o material disponível sobre comércio agêntico é esmagadoramente produzido por quem vende a infraestrutura — bandeira, processador, provedor de borda, consultoria de fintech, plataforma de modelo. Textos assim descrevem a adoção como inevitável porque é isso que estão vendendo, e este mapa se apoiou neles para a Seção 3. Compensou-se buscando deliberadamente contraevidência (Instant Checkout estagnado, conversão da Walmart, análise de vulnerabilidade, resultado do Alpha Arena), mas a assimetria de volume permanece. O segundo é de gênero textual: um mapa de futuro premia quem vê ruptura, porque ruptura rende documento interessante e continuidade não rende nada — e a hipótese mais provável, estatisticamente, continua sendo a chata: em 2031 a maioria das pessoas ainda compra clicando, e o agente com carteira é um recurso avançado de uma minoria, como foi o pagamento por aproximação por muitos anos antes de virar padrão.

## Seção 8 — O que a máquina errou

Cinco erros ocorreram durante esta sessão e foram corrigidos antes da versão final:

1. **Projeção de consultoria quase virou estado do mundo.** O rascunho da Seção 3 abria com "o comércio agêntico vai mediar de US$ 3 a 5 trilhões do comércio global até 2030", número da McKinsey citado num blog institucional da AWS [2]. É projeção de terceiro reproduzida por fornecedor de infraestrutura, com todos os dígitos redondos e sem metodologia acessível. **Como foi percebido:** ao montar a Seção 11, a checagem cruzada mostrou que o número não vinha de nenhuma fonte primária aberta na sessão. **Correção:** retirado do corpo do texto; a Seção 3 passou a abrir por capacidade técnica verificável e o número não sustenta nenhuma afirmação do mapa.

2. **Volume autodeclarado tratado como dado de adoção.** O comparativo de protocolos atribui ao x402 "cerca de US$ 600 milhões em volume anualizado no primeiro trimestre de 2026" [4]. A fonte é um fornecedor que vende integração dos quatro protocolos — tem interesse direto em que todos pareçam grandes. **Como foi percebido:** ao classificar a confiabilidade das fontes, notou-se que nenhuma fonte independente ou auditada corroborava o número. **Correção:** o valor saiu do corpo do mapa e virou, na Disrupção 3, uma afirmação explícita de que *falta* prova de receita auditada.

3. **Placar em curso confundido com resultado final.** A primeira busca sobre o Alpha Arena trouxe um instantâneo da competição (DeepSeek +46%, GPT-5 −75%) que o rascunho registrou como resultado. Ao abrir a apuração de encerramento, os números finais de 04/08/2026 eram outros: Qwen3 Max +22,3%, DeepSeek +4,89%, GPT-5 −62,66% [12]. **Como foi percebido:** divergência entre o snippet de busca e a fonte aberta. **Correção:** só os números de encerramento entraram, com a ressalva — que a própria fonte faz — de que uma temporada curta não estabelece capacidade de gerar retorno.

4. **Estatística atribuída a uma fonte que não a contém.** O rascunho da Disrupção 2 afirmava, citando o release da Amadeus, que "viajantes com preferência de marca trocam de fornecedor se o assistente de IA achar oferta melhor". A frase apareceu no resumo do buscador; ao abrir o release de 04/06/2026, ele não traz essa estatística [7]. **Como foi percebido:** leitura integral da fonte antes de citá-la. **Correção:** a afirmação quantitativa foi removida e substituída pela formulação qualitativa que a fonte de fato sustenta (a companhia precisa decidir para quem vende).

5. **Tecnologia madura quase entrou como disrupção-raiz.** "Comprar dentro do chat" foi cogitado como candidata, por ser o rosto público do comércio agêntico. **Como foi percebido:** ao aplicar o filtro da Etapa 2, ficou claro que muda o ponto de entrada e não a lógica da transação — e a evidência de estagnação em 2026 confirmou o diagnóstico [10]. **Correção:** movido para a lista de recusas explícitas na abertura da Seção 4, com o motivo registrado.

## Seção 9 — Três cenários para 2031

**Provável.** Em 2031 o agente compra, mas com coleira curta e em faixas estreitas. O mandato assinado é padrão em viagem, assinatura de software, compra recorrente de suprimento e procurement corporativo de baixo valor — categorias em que o item é comparável e o erro é barato —, e continua raro em tudo que envolve gosto, prova ou devolução complicada. O padrão dominante segue sendo o que se firmou em 2026: descobre no agente, fecha no site, porque nenhum lojista aceitou de bom grado herdar uma disputa sem dispositivo, sem IP e sem sessão para se defender. A web está dividida em três faixas visíveis — o que bloqueia agente, o que o aceita mediante assinatura criptográfica e o que cobra dele por requisição — e escolher a faixa virou decisão de produto, tomada por gente de mídia e não só de infraestrutura. O mercado de responsabilidade existe mas é feio: seguro de agente é caro, identidade de operador é fragmentada entre três registros concorrentes que não conversam, e o operador que queima a reputação ainda consegue reaparecer limpo em outra rede. No Brasil o Pix carrega mais pagamento agêntico por transação que cartão, com regra do Banco Central publicada tarde, depois de um caso de repercussão.

**Desejável.** Em 2031 o mandato é um objeto que a pessoa entende e revoga sozinha. Escrever um mandato virou uma competência de design com vocabulário próprio — teto, escopo, validade, condição de parada, quem responde —, ensinada como se ensinou senha forte, e a tela onde ele é escrito é tratada com o cuidado que já se dedicou ao carrinho. A responsabilidade ficou onde há capacidade de controlar o risco: quem opera o agente responde pelo que ele faz dentro do mandato, o que tornou o seguro rotina e o teto de gasto uma decisão de subscrição e não de marketing. A identidade do agente é portátil e o histórico de incidentes acompanha o operador entre plataformas, então trocar de rede não limpa ficha. A cobrança por requisição financia parte da informação que os agentes consomem, e publicadores pequenos recebem por leitura de máquina o que nunca receberam por leitura humana. As autoridades de concorrência ganharam instrumento para tratar preço correlacionado sem acordo, e a delegação de precificação a um modelo compartilhado passou a exigir divulgação — de modo que a monocultura é um risco medido, e não um efeito colateral silencioso.

**Indesejável.** Em 2031 o agente comprou a agência da pessoa junto com a passagem. Três plataformas concentram quase todo o comércio agêntico e cobram dos fornecedores para constar na lista de opções que o agente sequer mostra ao dono — a publicidade virou lobby técnico invisível, e o usuário não tem como saber que a alternativa mais barata foi filtrada antes de existir. A precificação delegada a um punhado de modelos sustenta preço elevado em categorias inteiras sem que ninguém tenha combinado nada, e nenhum órgão consegue caracterizar infração porque não há acordo, comunicação nem instrução para exibir. A fidelidade morreu e não foi substituída por nada melhor: a companhia aérea vende tarifa barata para agente e cara para quem ainda liga no telefone, de modo que quem não delega paga mais — o custo de permanecer humano virou um preço explícito na tabela. E o prejuízo do erro desceu para quem menos pode carregá-lo: o lojista pequeno perde a disputa por não suportar mandato assinado, e o dono do dinheiro descobre que autorizou, meses antes, uma política que não leu e não sabia revogar.

## Seção 10 — O experimento

**O que é.** Um mercado de sala com dinheiro real e pequeno, rodando em duas horas. Metade da turma opera **agentes compradores**: cada dupla escreve um mandato em texto para um LLM com acesso a ferramenta de compra — orçamento fixo (por exemplo, R$ 20 por dupla, custeados pela disciplina), escopo, teto por item, condição de parada e critério de escolha. A outra metade opera **agentes vendedores**: cada dupla define, também por prompt, a política de preço de um item fictício com custo declarado, e o agente responde às consultas dos compradores em rodadas. O ambiente pode ser um script simples de leilão em rodadas, ou uma pasta com endpoints protegidos por HTTP 402 em ambiente de teste, se houver uma sessão de preparo. Ao final, cada compra executada é honrada de verdade — quem comprou, comprou; quem perdeu dinheiro, perdeu.

**Pergunta sobre o futuro.** Quando compradores e vendedores são programas com objetivo declarado, o preço melhora para quem compra ou piora para todo mundo? E, no erro, de quem é o prejuízo: de quem escreveu o mandato, de quem operou o agente ou de quem vendeu?

**Tecnologia emergente usada.** Mandato assinado como artefato da interação (no espírito do AP2: intenção, escopo, teto, validade), cobrança por requisição em ambiente de teste (x402 sobre HTTP 402) e delegação de precificação a um modelo de linguagem — que é exatamente o arranjo em que a literatura observa preço supracompetitivo emergindo sem instrução [13][14].

**Atividade da turma.** Três rodadas, com uma variação por rodada. Rodada 1: cada dupla vendedora usa o modelo que preferir. Rodada 2: **todas** usam o mesmo modelo e o mesmo prompt-base — o teste direto da monocultura. Rodada 3: introduz-se um erro plantado (um vendedor anuncia estoque que não tem, ou um comprador recebe mandato ambíguo de propósito) e a turma precisa decidir, em plenário e com o dinheiro já gasto, quem arca. O registro é a série de preços das três rodadas, os mandatos escritos e a ata da decisão sobre o prejuízo.

**Resultado de mudança de ideia esperado.** A expectativa é que a turma chegue tratando o agente comprador como uma ferramenta a favor do consumidor — ele compara mais rápido, logo compra melhor — e saia com duas convicções desfeitas. Primeira: na rodada 2, ver o preço subir e estabilizar sem que nenhum vendedor tenha combinado nada desloca a conversa de "agente é bom ou ruim para o consumidor" para "quantos modelos distintos existem no mercado". Segunda: na rodada 3, a turma descobre que a pergunta difícil não é técnica — é que o mandato mal escrito é uma peça de **design de interface**, e que quem projeta a tela onde ele é escrito está distribuindo prejuízo sem saber. Quem entra achando que projetava vitrine sai entendendo que passa a projetar contrato.

## Seção 11 — Fontes

1. "Announcing Agent Payments Protocol (AP2)" — Google Cloud Blog, 16/09/2025. Sustenta: existência, data, parceiros e mecânica dos mandatos (Intent e Cart) da Disrupção 1 e da Seção 3. Confiabilidade: alta (fonte primária do protocolo). https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol
2. "x402 and Agentic Commerce: Redefining Autonomous Payments in Financial Services" — AWS Blogs (Industries). Sustenta: mecânica do HTTP 402, latência sub-2s e custo ~US$ 0,0001 na Seção 3 e na Disrupção 3; é também a fonte da projeção McKinsey de US$ 3–5 tri descartada na Seção 8. Confiabilidade: média (fornecedor de infraestrutura, com interesse comercial). https://aws.amazon.com/blogs/industries/x402-and-agentic-commerce-redefining-autonomous-payments-in-financial-services/
3. Ling, Huang, Du, Chen, Zhou, Wu, Wang. "Free-Riding the Agentic Web: A Systematic Security Analysis of x402 Payments" — arXiv 2605.30998, ACM SIGOPS ATC '26, 23/06/2026. Sustenta: fragilidade de segurança do x402 na Seção 3 e no "o que falta" da Disrupção 3. Confiabilidade: alta (revisado por pares). https://arxiv.org/pdf/2605.30998
4. "Agentic payments protocols compared: MPP, ACP, AP2, x402" — Crossmint. Sustenta: datas de x402 V2 (dez/2025) e MPP em mainnet (mar/2026), e o inventário de lacunas (disputa, chargeback, responsabilidade, interoperabilidade). Confiabilidade: média (fornecedor que integra os quatro protocolos; origem do volume de US$ 600M não auditado, descartado na Seção 8). https://www.crossmint.com/learn/agentic-payments-protocols-compared
5. "Insuring AI agents: what underwriters will demand before pricing your agent" — Tobira. Sustenta: apólice ElevenLabs/Lloyd's de US$ 50 mi em 11/02/2026 e 5.835 avaliações técnicas; exigência de identidade de operador, histórico de incidentes e reputação portátil (Seção 6 e efeito e6). Confiabilidade: média (blog de empresa do setor de identidade de agentes). https://blog.tobira.ai/insuring-ai-agents-underwriting-identity/
6. "Meta's Muse adds Duffel for AI-powered travel bookings" — Travel Daily News, set/2026. Sustenta: agente de consumo reservando voo em inventário ao vivo de 500+ companhias e inserindo dado de fidelidade em nome do passageiro (Seção 3, Disrupção 2, ramo e4). Confiabilidade: média (imprensa setorial; a página retornou 403 na tentativa de leitura direta — o conteúdo usado veio do índice de busca e do relato convergente do PhocusWire, e por isso a afirmação foi mantida no nível factual mínimo). https://www.traveldailynews.com/technology/metas-muse-adds-duffel-for-ai-powered-travel-bookings/
7. "How Agentic AI Is Transforming Airlines" — Amadeus, 04/06/2026. Sustenta: maturidade declarada para operação em companhias aéreas, os cinco casos de uso e a janela de 12–18 meses (Seção 3 e Disrupção 2). Confiabilidade: média (fornecedor do setor). https://amadeus.com/en/newsroom/press-releases/agentic-ai-airlines-amadeus
8. "Who Vouches for the Bot? Agent Checkout Authentication" — Digital Applied, 2026. Sustenta: datas e mecânica de Visa Intelligent Commerce, Visa Trusted Agent Protocol, Mastercard Agent Pay e Agent Pay for Machines; e a constatação de que nenhuma bandeira publicou regra de chargeback específica para agente. Confiabilidade: média (análise setorial independente, sem revisão por pares). https://www.digitalapplied.com/blog/agent-checkout-authentication-card-networks-2026
9. "AI Agent Chargeback Liability: Who Pays & How to Prepare" — Chargeflow, 2026, combinado com "Ninth Circuit Rules on AI Agent 'Access' to Third-Party Websites Under CFAA" — Cooley, 06/08/2026. Sustentam: o vazio de responsabilidade, o colapso das provas tradicionais de disputa, e o teor e os limites explícitos da decisão do Nono Circuito de 04/08/2026 (Seção 3, Seção 6, ramo e5). Confiabilidade: alta para a análise da Cooley (escritório de advocacia, sobre decisão pública); média para a Chargeflow (fornecedor de gestão de chargeback). https://www.cooley.com/news/insight/2026/2026-08-06-ninth-circuit-rules-on-ai-agent-access-to-third-party-websites-under-cfaa
10. "Why AI Checkout Stalled: Discover in AI, Buy on Site" — Digital Applied, 2026. Sustenta: ~30 lojistas no Instant Checkout em fev/2026 contra "mais de um milhão" prometido em set/2025 (via Forrester/Emily Pfeiffer); conversão da Walmart em ~1/3 do site próprio (mar/2026, CNBC e Search Engine Land); diagnóstico de qualidade de dado. É a contraevidência central da Seção 7. Confiabilidade: média (compilação secundária de fontes nomeadas). https://www.digitalapplied.com/blog/ai-agentic-commerce-discover-in-ai-buy-on-site-2026
11. "Pagamentos agênticos avançam no Brasil e atraem bancos, bandeiras e fintechs" — Finsiders Brasil, 17/08/2026. Sustenta: primeira transação agêntica da Visa no Brasil (mar/2026), Visa Agentic Ready com BB, Bradesco, Dock, Santander e XP; MCP Server da Iniciador iniciando Pix; 76% de brasileiros × 44% de norte-americanos com intenção de comprar via IA; ausência de regulação do Banco Central. Confiabilidade: média (imprensa especializada em fintech). https://finsidersbrasil.com.br/tendencias-de-pagamento/pagamentos-agenticos-avancam-no-brasil-e-atraem-bancos-bandeiras-e-fintechs/
12. "Alpha Arena Season 1 Results: Final Ranking and Lessons" — iWeaver, sobre o experimento Nof1 encerrado em 04/08/2026. Sustenta: US$ 10 mil de capital real por modelo, prompt idêntico, resultados finais (Qwen3 Max +22,3%; DeepSeek V3.1 +4,89%; Claude Sonnet 4.5 −30,81%; Grok 4 −45,3%; Gemini 2.5 Pro −56,71%; GPT-5 −62,66%) e a crítica à validade do benchmark. Confiabilidade: média (análise secundária; resultados primários públicos na própria plataforma). https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/
13. Fish, Gonczarowski, Shorrer. "Algorithmic Collusion by Large Language Models" — arXiv 2404.00806, aceito na EC 2026. Sustenta: agentes de precificação em LLM alcançam preços supracompetitivos de forma autônoma em oligopólio, com sensibilidade a variações mínimas de prompt; base do ramo e3 e da Disrupção 2. Confiabilidade: alta (revisado por pares em conferência de referência). https://arxiv.org/abs/2404.00806
14. "Supracompetitive Pricing Under AI Monoculture" — arXiv 2601.01279. Sustenta: preço correlacionado sem comunicação quando concorrentes delegam ao mesmo modelo; limiar de fidelidade de saída; a observação contraintuitiva sobre robustez e reprodutibilidade. Base de e3.1 e e3.1.2. Confiabilidade: média (preprint, sem revisão por pares confirmada). https://arxiv.org/html/2601.01279
15. Ventirozos, Shardlow. "Paying to Know: Micro-Transaction Markets for Verified Product Information in Agentic E-Commerce" — arXiv 2606.24783, 24/06/2026. Sustenta: o mercado de informação verificada vendida a máquina como resposta à assimetria que quebra a compra agêntica (Disrupção 3 e Seção 6). Confiabilidade: média (preprint). https://arxiv.org/pdf/2606.24783
16. "Hardening x402: PII-Safe Agentic Payments via Pre-Execution Metadata Filtering" — arXiv 2604.11430. Sustenta: vazamento de dado pessoal em metadados de pagamento agêntico como problema aberto (Seção 6, sinal fraco 4). Confiabilidade: média (preprint; localizado em busca e não aberto integralmente nesta sessão — sustenta apenas a existência do problema, nenhum número). https://arxiv.org/pdf/2604.11430

## Seção 12 — Anexo: o levantamento bruto

**Respostas da entrevista de recorte (Etapa 1).**
- *Tema da análise:* "Agentes com carteira: comércio agêntico e mercados de máquinas" — tema 5 de 19 da disciplina, família "Agentes".
- *Horizonte temporal:* 2031.
- *Público-alvo:* quem projeta mídia e interação.
- *Recorte geográfico:* global, com uma nota sobre o Brasil (atendida na Seção 3, no sinal fraco 5 da Seção 6 e no cenário Provável da Seção 9).
- *Premissas descartadas e viés:* descartar de início o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão. Viés declarado: neutro. Excluir ideias óbvias que serviriam para qualquer tema. Disrupção suspeita: nenhuma — descobrir. Critério declarado de mudança de ideia do solicitante: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (apenas melhora o existente).
- *Tecnologias/vetores de interesse:* nenhum vetor imposto; os vetores foram derivados da pesquisa (mandatos assinados, x402/HTTP 402, tokens agênticos de bandeira, streaming de micropagamento, Pix agêntico sobre Open Finance, identidade e seguro de agentes).
- *Observação de execução:* rodada não interativa, sem usuário disponível para responder. Todas as respostas acima vieram do enunciado da rodada; nenhuma pergunta foi devolvida, conforme instrução explícita. O BLOQUEIO ABSOLUTO da Etapa 1 foi satisfeito pela pré-entrega das respostas, não ignorado.
- *Profundidade e modo declarados:* três ordens; mapeamento a partir de uma inovação/tema, não de um setor.

**Rodadas e candidatas descartadas (Etapa 2).**
- "Comprar dentro do chat / Instant Checkout" — recusada: muda o ponto de entrada, não a lógica da transação; evidência de estagnação em 2026 [10].
- "Comparador de preço automatizado e alerta de queda de tarifa" — recusada: automação simples de prática madura; é o substrato citado no enunciado do tema (Cheap_Flight_SMS_Alert, FlyClaw), não ruptura.
- "Assistente que recomenda produto" — recusada: IA generativa básica acoplada a catálogo.
- "Pagamento por aproximação, um clique, cobrança recorrente" — recusada: infraestrutura amplamente adotada.
- "Empresas simuladas e mercados povoados por agentes" (Agent Valley, Wall Street of AI Agents) — não recusada por maturidade, mas **por fronteira**: o enunciado da disciplina aloca mercado simulado como instrumento de pesquisa ao tema 6. Entrou aqui apenas como evidência de capacidade (Alpha Arena, que tem dinheiro real e por isso pertence a este tema).
- "Cripto como mecanismo de compromisso pessoal" (Pinky-Pact) — considerada e não aprofundada: é dinheiro como fricção comportamental, o que pertence ao tema de bem-estar digital; sem ligação causal com a formação de preço ou a responsabilidade por ato de máquina, que são os eixos deste mapa.

**Efeitos cortados da roda.**
- "Consumidores se tornam mais racionais nas compras" — cortado por ser afirmação genérica sem mecanismo causal identificável; serviria para qualquer tema, o que a instrução de recorte pedia para excluir.
- "Empregos de atendimento desaparecem" — cortado pelo mesmo motivo, e por pertencer a um mapa de automação de trabalho, não de agência financeira.
- "Fraude aumenta com agentes" — cortado por baixa especificidade; o conteúdo útil foi preservado em forma precisa nos nós e6.2 e e6.2.1 (a prova de disputa muda de natureza) e no sinal fraco 4 (vazamento de PII em metadados).
- "Bancos centrais emitem moeda digital para agentes" — cortado por horizonte posterior a 2031 e por depender de uma decisão soberana sobre a qual não se encontrou sinal, apenas especulação de fornecedor.
- Terceira ordem mesclada: "reguladores multam plataformas que bloqueiam agentes legítimos" foi absorvida em e5.2.1 (cláusula de agente nos termos de uso), por redundância conceitual.

**Logs das iterações.**
- Iteração 1 — busca sobre protocolos de pagamento agêntico (AP2, ACP, x402, MPP); leitura integral do anúncio do AP2, do post da AWS sobre x402, do comparativo de protocolos e do paper de segurança do x402.
- Iteração 2 — busca sobre viagens e fidelidade (Duffel, Amadeus, Muse); leitura do release da Amadeus (o item Travel Daily News retornou HTTP 403 e ficou restrito ao que o índice de busca sustenta, registrado como tal na fonte 6).
- Iteração 3 — busca sobre bandeiras, responsabilidade e chargeback; leitura da análise de autenticação de agente no checkout, da análise de responsabilidade de chargeback e do parecer da Cooley sobre a decisão do Nono Circuito.
- Iteração 4 — busca sobre Brasil (Pix, Open Finance, Banco Central); leitura da matéria da Finsiders de 17/08/2026.
- Iteração 5 — busca sobre colusão algorítmica entre LLMs; leitura do paper da EC 2026 e do preprint sobre monocultura de IA.
- Iteração 6 — busca sobre dinheiro real em mãos de modelo (Nof1/Alpha Arena) e sobre seguro e identidade de agentes; leitura da apuração final da temporada 1 e do texto sobre subscrição de risco de agente.
- Iteração 7 — leitura do preprint sobre mercados de micro-transação para informação verificada; consolidação das sete frentes, derivação das três disrupções-raiz, montagem da roda de 36 nós (6 + 12 + 18), auditoria adversarial (Seção 7) e revisão dos cinco erros (Seção 8) antes da redação final.
- Contagem de fontes efetivamente abertas nesta sessão: 12 leituras integrais por WebFetch mais 4 itens localizados por busca e declarados com sua limitação. Total listado na Seção 11: 16.
