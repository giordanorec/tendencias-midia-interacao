---
tema: Agentes com carteira — comércio agêntico e mercados de máquinas
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: meap
zona_de_interesse: Agentes
data: 2026-09-11
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 10
efeitos_ordem_2: 14
efeitos_ordem_3: 11
tecnologias_citadas:
  - x402 (HTTP 402 revivido)
  - Agentic Commerce Protocol (ACP) e Shared Payment Token
  - AP2 (Agent Payments Protocol) e mandatos Intent/Cart
  - Visa Intelligent Commerce e Trusted Agent Protocol
  - Mastercard Agent Pay e Agentic Tokens
  - Web Bot Auth (RFC 9421, assinatura de mensagem HTTP)
  - Stablecoin USDC em Base, Solana e Tempo
  - Pix e Open Finance com autorização FIDO2
  - APIs de reserva de viagem (Duffel, Amadeus, NDC)
  - Agentes de LLM operando capital real (Alpha Arena / Nof1)
  - Filtragem de tráfego de agente (Advanced Airline Profile)
fontes: 13
confianca: media
experimento: Protótipo de duas pontas — um endpoint que devolve HTTP 402 cobrando por requisição e um agente comprador com mandato assinado (teto, categoria, validade) — instrumentado para medir quantas requisições o agente gasta para concluir UMA compra e quanto uma pessoa consegue reconstruir da compra lendo só o recibo do mandato
skill_usada: futurization-meap
publico_ok: false
---

## 1. Resumo

Um agente que lê é um leitor; um agente que paga é uma parte contratante. Este mapa trata da
travessia dessa linha e do que ela faz com quem projeta mídia e interação até 2031. Três
disrupções-raiz sustentam a análise: a credencial de pagamento emitida para o agente sob mandato
assinado, que desloca a prova antifraude do comportamento humano para a cadeia de assinaturas; o
pagamento por requisição na camada de protocolo (x402), que torna vendável por centavos uma
unidade de conteúdo que nunca teve preço; e o capital real como régua de avaliação de modelo,
onde a nota deixa de ser ponto e passa a ser prejuízo. Os efeitos derivados não são sobre
e-commerce — esse está maduro — mas sobre o que muda quando o comprador não tem olho, não abandona
carrinho e não liga para o call center: o custo de ser consultado explode, a vitrine se bifurca em
uma versão para pessoa e uma versão para máquina, a fidelidade se reescreve como cláusula legível
por programa, e a responsabilidade pelo erro fica sem dono declarado. A confiança do mapa é
**média**: os trilhos existem e estão documentados, mas o volume liquidado é pequeno, a regra de
responsabilidade não existe, e há uma guerra de padrões em curso cujo vencedor muda os efeitos de
2ª ordem.

## 2. O tema

**Comércio agêntico** é a compra em que o agente de software não apenas pesquisa e recomenda, mas
seleciona, contrata e **paga** — e, em alguns desenhos, responde. **Mercados de máquinas** é o par
seguinte: agentes operando capital próprio ou delegado em mercados abertos, negociando com outros
agentes, sem humano no laço de cada decisão.

O tema pertence a mídia e interação por três razões, e nenhuma delas é financeira.

A primeira é que **interface pressupõe um leitor**, e o leitor deixou de ser único. Desde a década
de 1990 o projeto de interface comercial otimiza atenção humana: hierarquia visual, prova social,
fricção calculada, persuasão. Quando o comprador é um programa que lê esquema e ignora fotografia,
metade do repertório da disciplina perde função — e a outra metade tem de ser reescrita para um
leitor que não se distrai, não se encanta e não perdoa ambiguidade.

A segunda é que **pagar é o ato que define agência**. Um agente que resume um artigo pode errar sem
consequência patrimonial. Um agente que compra a passagem errada produz um prejuízo com dono. A
partir do momento em que existe prejuízo, existe disputa, e a interação passa a ter de carregar
prova: o que a pessoa autorizou, com que limite, e como ela verifica depois. Isso é trabalho de
projeto de interface — não de backend.

A terceira é que **o dinheiro reprecifica o conteúdo**. Se uma requisição pode custar um centavo,
a unidade econômica da mídia deixa de ser a assinatura ou a impressão e passa a ser o item
consultado. Quem decide o que produzir passa a olhar um número diferente.

Merece mapa de futuro porque a infraestrutura já existe e está datada — não é promessa de keynote
— e porque a peça que falta não é técnica: é a regra de quem paga o erro. Mapas cujo gargalo é
regulatório, não técnico, são exatamente os que se deve desenhar antes, porque a regra se escreve
uma vez e depois se herda por uma década.

## 3. Onde isso está hoje

O que está **maduro** e por isso entra como contexto, não como disrupção:

- **Checkout online, tokenização de cartão, comparador de preços e metabusca.** Commodity há mais
  de uma década. Não rompem nada agora.
- **APIs de reserva de viagem e NDC.** Duffel, Amadeus e o padrão NDC já expõem catálogo e
  reserva a programas. O substrato do comércio agêntico em viagens é maduro; o que é novo é *quem*
  chama a API.
- **Pix e Open Finance no Brasil.** Infraestrutura consolidada, planejada pelo Banco Central,
  com cobertura declarada acima de 95% da população adulta.
- **Stablecoin como ativo de liquidação.** USDC em Base e Solana é rotina; o que é novo é o uso
  como trilho de máquina.
- **Scraping de tarifa.** Antigo, e hoje mais combatido do que novo.

O que está **emergindo**, com data e fonte no presente:

- **x402.** Protocolo que revive o HTTP 402: o servidor responde `402 Payment Required` com os
  termos e um endereço; o cliente reenvia a requisição com autorização assinada; o facilitador
  liquida on-chain. A Stripe documenta a receita com USDC em Base, **US$ 0,01 por requisição** no
  exemplo do próprio guia, registrando a liquidação como um `PaymentIntent` comum — o que costura
  o trilho de máquina à contabilidade normal da empresa. Requer versão de API `2026-05-27.preview`.
  Disponibilidade declarada: todos os estados dos EUA exceto Nova York, e mais de 30 países sob
  solicitação.
- **Volume ainda pequeno.** Uma análise independente da KPMG citada em fevereiro de 2026 registra
  161,32 milhões de transações cumulativas, **US$ 43,57 milhões liquidados**, 417 mil compradores e
  83 mil vendedores — com cerca de US$ 17 mil de volume diário real, e a estimativa, do próprio
  autor que compila os dados, de que **aproximadamente metade seja teste de facilitador**, não
  comércio.
- **Segurança do trilho, não resolvida.** Uma análise sistemática de segurança do x402 identifica
  quatro classes de falha — substituição entre recursos, corrida de liquidação duplicada, estouro
  de allowance e negação de liquidação — com razões de vazamento de recurso de **até 100%** contra
  SDKs oficiais e implantações em produção; e prova que, para preço por token de saída, **nenhum
  esquema baseado só na saída pode ser simultaneamente justo com o usuário honesto e limitado
  contra inflação** de processamento oculto.
- **Agentic Commerce Protocol (ACP).** Publicado por Stripe e OpenAI em **29/09/2025**, sob Apache
  2.0, com o *Shared Payment Token* — primitiva que permite a um aplicativo iniciar a transação sem
  expor a credencial do comprador. Entrou no ar com vendedores da Etsy e mais de um milhão de
  lojistas Shopify anunciados.
- **AP2 (Agent Payments Protocol).** Anunciado pelo Google em **16/09/2025** com mais de 60
  organizações (Adyen, American Express, Mastercard, PayPal, Worldpay, Coinbase, Etsy, Okta,
  1Password, entre outras). Introduz o **mandato**: contrato digital assinado e à prova de
  alteração. Dois fluxos — *Intent Mandate* + *Cart Mandate* com humano presente, e **mandato
  delegado**, assinado adiantado com condições (teto de preço, janela de tempo, regra), em que o
  agente gera o carrinho e paga **sem humano no momento da compra**.
- **Bandeiras.** Visa lançou o **Intelligent Commerce Connect** em **22/04/2026**: uma integração
  única para iniciação de pagamento, tokenização, controles de gasto e autenticação de transação
  dirigida por agente, com suporte declarado a Trusted Agent Protocol, Machine Payments Protocol,
  ACP e Universal Commerce Protocol; em piloto com AWS, Diddo e Highnote. Mastercard opera o
  **Agent Pay** com *Agentic Tokens*. A American Express também está no jogo.
- **Identidade de agente.** O **Trusted Agent Protocol** (Visa + Cloudflare) e o **Web Bot Auth**
  (proposta do IETF sobre RFC 9421) assinam a identidade do agente no cabeçalho HTTP. A Cloudflare
  descreve sete verificações e, o que mais importa para projeto, **duas etiquetas distintas**:
  `agent-browser-auth` e `agent-payer-auth`. O site passa a poder distinguir o agente que vem olhar
  do agente que vem pagar.
- **Aviação.** Relatório da Amadeus com apoio da Microsoft, de **04/06/2026**, com entrevistas em
  Azul, Icelandair e Southwest, descreve o agente capaz de identificar a reserva, entender o pedido
  de mudança por voz, propor opções, **articular a diferença tarifária e iniciar o pagamento** — e
  classifica a tecnologia como pronta para produção em fluxos previsíveis, não como amplamente
  implantada. Em **09/09/2026**, o agente Muse da Meta passou a buscar, reservar e gerenciar viagem
  via Duffel nos EUA.
- **O custo de olhar.** Em **09/07/2026**, análise da OAG registra a razão atual de 10 mil a 20 mil
  buscas por bilhete vendido, projeção de **até 200 mil buscas por bilhete** na era agêntica, e um
  incidente concreto: **um único agente Claude Code gerou 881.076 opções tarifárias** para uma
  viagem da Etihad. A resposta já existe do outro lado: a filtragem Advanced Airline Profile da
  Amadeus reduziu tráfego improdutivo em **mais de 70%** em alguns casos, e a Air France-KLM bloqueia
  a maioria do tráfego irrelevante.
- **Responsabilidade.** Não existe. Hoje **o lojista absorve a perda por padrão**: o processo de
  chargeback não foi construído para distinguir comprador humano de agente, e a prova clássica
  (impressão digital do dispositivo, histórico de navegação, trilha de deliberação) não existe
  quando quem comprou foi um programa. A American Express se comprometeu a cobrir compras
  equivocadas de agentes registrados na sua rede — que é, até aqui, o movimento mais concreto de
  deslocamento de risco.
- **Reguladores já chegaram, antes do caso.** A CMA publicou pesquisa sobre agentes e consumidores
  em **09/03/2026**, nomeando padrões escuros, erosão da capacidade de escrutínio do consumidor e
  **conluio agêntico**. O DRCF (CMA, FCA, ICO, Ofcom) publicou o documento de prospecção *The
  Future of Agentic AI* em **31/03/2026**, catalogando conluio algorítmico, injeção de prompt,
  falhas de minimização de dados e direitos do consumidor. As obrigações de alto risco do AI Act
  entram em vigor em **02/08/2026**.
- **Brasil, por outro caminho.** Em **19/05/2026** a Iniciador lançou o primeiro MCP de pagamentos
  agênticos via Pix. O desenho é deliberadamente o oposto do mandato delegado: **o agente propõe e
  o humano assina** — notificação, conferência de valor e destinatário, autorização biométrica
  FIDO2 com chave vinculada ao dispositivo, liquidação em segundos e sem chargeback. A frase da
  empresa resume a escolha de arquitetura: "o usuário aprova a transação com os dados do pagamento
  gerados por nós, não pelo agente".
- **Capital real como régua.** No Alpha Arena da Nof1, seis modelos operaram **US$ 10 mil reais cada
  um** em perpétuos de criptoativo na Hyperliquid, com prompt idêntico. Resultado: Qwen3 Max
  +22,3%, DeepSeek V3.1 +4,89%, Claude Sonnet 4.5 −30,81%, Grok 4 −45,3%, Gemini 2.5 Pro −56,71%,
  GPT-5 −62,66%. Quatro dos seis perderam dinheiro, e a dispersão passa de 85 pontos percentuais.

## 4. As disrupções-raiz

### 4.1. O agente como parte pagante credenciada, sob mandato assinado

**O que rompe.** A premissa, embutida em todo o aparato de pagamento e de interface de compra, de
que existe um humano no ponto de autorização. Com mandato delegado, a autorização deixa de ser um
gesto no instante da compra e passa a ser um **documento assinado antes**, com teto, categoria,
janela e regra. Rompe, por consequência, a prova antifraude: a defesa do lojista era comportamental
(dispositivo, navegação, deliberação) e esse sinal desaparece.

**Por que agora.** Porque a peça que faltava — identidade verificável do agente — foi construída em
menos de um ano. ACP com Shared Payment Token (29/09/2025), AP2 com mandatos e mais de 60
organizações (16/09/2025), Trusted Agent Protocol e Web Bot Auth assinando o agente no cabeçalho
HTTP, Visa Intelligent Commerce Connect (22/04/2026) e Mastercard Agent Pay integrando isso ao
trilho de cartão. Antes disso, "agente que paga" era um roteiro com credencial roubada.

**O que ainda falta.** A regra de responsabilidade. Hoje o lojista absorve o prejuízo por omissão,
não por decisão, e o único compromisso público de cobertura é de uma bandeira, para agentes
registrados na sua própria rede. Falta também o vencedor da guerra de padrões: ACP, AP2, TAP, MPP e
UCP concorrem, e a Visa suportar todos é sinal de que ninguém sabe qual sobrevive. Sem convergência,
o mandato não é portátil — e mandato não portátil é o que impede os efeitos de 2ª ordem deste mapa.

### 4.2. Pagamento por requisição na camada de protocolo

**O que rompe.** Dois contratos de uma vez. Do lado do vendedor, a assinatura mais a chave de API
como forma única de monetizar acesso — o x402 permite cobrar do desconhecido, por unidade, sem
cadastro. Do lado da mídia, o binômio anúncio-ou-paywall: uma página pode cobrar do agente o que
não cobraria da pessoa, e um item de acervo que nunca teve preço passa a ter.

**Por que agora.** Porque o trilho saiu do cripto e entrou na contabilidade. A Stripe documenta a
liquidação on-chain sendo registrada como `PaymentIntent` comum, com USDC em Base, Solana e Tempo,
e US$ 0,01 por requisição no exemplo oficial. Isso significa que o pagamento de máquina passa pela
mesma conciliação, o mesmo painel e o mesmo relatório fiscal que o resto da receita — que é a
condição prática de adoção por empresa que não é nativa de cripto.

**O que ainda falta.** Volume e segurança. US$ 43,57 milhões liquidados, com cerca de metade do
volume diário possivelmente sendo teste de infraestrutura, é um número de laboratório, não de
mercado. E a análise de segurança encontra quatro classes de falha com vazamento de até 100%, mais
um resultado de impossibilidade para preço por token de saída — o que significa que a precificação
por requisição, no formato hoje predominante, **não tem solução justa conhecida** e terá de mudar
de forma antes de escalar.

### 4.3. Capital real como régua de avaliação e como campo de operação

**O que rompe.** O regime de avaliação de modelo. A nota deixa de ser ponto em conjunto estático e
passa a ser posição aberta com marcação a mercado, drawdown e perda realizada. E rompe o backtest:
em mercado, viés de look-ahead invalida a retro-simulação, o que força a avaliação para capital ao
vivo. Rompe também a equivalência de marketing entre modelos — com prompt idêntico, mesmo mercado e
mesma janela, a dispersão observada foi de +22,3% a −62,66%.

**Por que agora.** Porque três coisas coincidiram: corretoras e bolsas com API aberta a programas,
inferência barata o suficiente para operar continuamente, e demanda por uma régua que não se
contamine — dinheiro é a única nota que o avaliado não consegue negociar.

**O que ainda falta.** Escala estatística. Uma temporada com seis competidores não separa
habilidade de variância, e o próprio material que reporta o resultado diz isso. Falta também
moldura de governança e de seguro para experimento com dinheiro real: não há regra sobre quem
responde quando o experimento perde capital de terceiro, nem sobre o que pode ser anunciado a
partir do resultado.

**Descartada na triagem.** Uma quarta candidata — "comércio eletrônico assistido por IA" — foi
rejeitada como madura: recomendação algorítmica, comparação de preço e checkout em um clique estão
em mais da metade dos serviços do público-alvo e não rompem nada agora. Entrou na seção 3 como
contexto. Pelo mesmo critério, Pix, NDC e tokenização de cartão não entraram como raiz.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "O agente como parte pagante credenciada, sob mandato assinado"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A credencial de pagamento passa a ser emitida para o agente, e a autorizacao deixa de ser um gesto no momento da compra para virar um documento assinado antes, com teto, categoria e validade"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A prova antifraude migra de sinal comportamental para cadeia de assinaturas — identidade do agente, mandato, carrinho — e quem nao registra assinatura perde a disputa por padrao"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Forma-se um mercado de custodia e pericia de mandatos: empresas que guardam, versionam e atestam mandatos de agente, como hoje se faz com assinatura digital e documento fiscal eletronico"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Emissores e bandeiras passam a precificar risco por agente, e nao apenas por portador: o historico de erro de um agente vira insumo de autorizacao"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Consolida-se um score de reputacao de agente, portatil entre lojistas — e com ele a exclusao: agente sem historico paga mais caro ou e recusado, reproduzindo na camada de maquina a assimetria de credito que existe entre pessoas"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.3
            ordem: 2
            efeito: "O lojista passa a manter duas vitrines: uma para pessoa, com imagem e persuasao, e outra para agente, com catalogo estruturado, preco e termo legiveis por programa"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.3.1
                ordem: 3
                efeito: "O oficio de design de interface se bifurca e nasce uma linha de trabalho que projeta para leitor nao-humano — esquema, termo, restricao, prova — enquanto a persuasao visual perde centralidade como disciplina de conversao"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A identidade criptografica de agente torna-se pre-requisito de acesso: o site deixa de perguntar se ha um humano e passa a perguntar de quem e o agente e se ele vem olhar ou vem pagar"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "A web se estratifica em faixas de acesso por identidade de agente — aberta para pessoa, credenciada para agente pagante, bloqueada para agente anonimo — e o bloqueio passa a ser o padrao, nao a excecao"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "Estar na web deixa de garantir ser encontravel: a descoberta passa por registro em programa de agente, e quem nao se credencia sai do alcance dos compradores-maquina — uma camada de porteiro equivalente ao que o SEO foi nos anos 2010"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "O custo de ser consultado explode: a razao entre buscas e vendas salta de ordem de dezenas de milhares para ordem de centenas de milhares de consultas por unidade vendida, e olhar passa a ter preco"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Vendedores passam a cobrar pela consulta ou a filtrar tráfego de agente por qualificacao, invertendo a gratuidade da busca que sustentou a web comercial por trinta anos"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A natureza do comprador vira eixo de discriminacao de preco: tarifa mais barata para agente que nao usa atendimento nem abandona carrinho, e mais cara para agente que gera custo de consulta — precificacao por tipo de leitor, nao por tipo de cliente"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: "O programa de fidelidade perde funcao de retencao quando o agente escolhe pelo critério que o dono declarou no mandato, e nao pelo saldo de pontos"
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A fidelidade se reescreve como clausula legivel por maquina — desconto condicionado, teto garantido, prioridade contratual — em vez de sentimento de marca, e por isso vira insumo de otimizacao e perde margem"
            sinal: medio
            prazo: 2030
            confianca: media
      - id: e10
        ordem: 1
        efeito: "A empresa passa a ter uma linha de gasto executada por maquina — insumo, servico, pagamento por consulta — sob teto declarado em politica, e nao sob aprovacao caso a caso"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: "A funcao de compras se reorganiza em torno de escrever politica em vez de negociar caso a caso: o comprador humano vira autor de regra e auditor de excecao"
            sinal: medio
            prazo: 2030
            confianca: media

  - disrupcao: "Pagamento por requisicao na camada de protocolo (x402 / HTTP 402)"
    efeitos:
      - id: e5
        ordem: 1
        efeito: "Conteudo e dado passam a ser vendidos por unidade a comprador nao-humano, na casa de centavos por requisicao, sem conta e sem assinatura"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O binomio anuncio-ou-paywall ganha uma terceira via: a pagina cobra do agente o que nao cobraria da pessoa, e o acervo antigo de um veiculo vira receita por item consultado"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "A unidade economica da midia encolhe de assinatura para requisicao, e a redacao passa a ser avaliada por quanto do acervo e consultado por maquina — o que muda o que se decide produzir e o que se decide manter no ar"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: "O preco por requisicao vira superficie de ataque: cobranca por token de saida permite inflar processamento oculto, e o trilho herda fraudes proprias de liquidacao como corrida de pagamento duplicado e estouro de allowance"
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: "Consolida-se uma camada de seguro e arbitragem para gasto de agente — apolice por teto de mandato, pericia de liquidacao, resseguro de erro — justamente porque o trilho de stablecoin nao tem chargeback"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "O trilho de maquina se costura ao trilho contabil: a liquidacao on-chain e registrada como transacao comum no processador, e o gasto de agente entra na conciliacao da empresa sem sistema paralelo"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "Pagamento de maquina deixa de ser assunto de cripto e passa a ser linha de custo de tecnologia, orcada como computacao e revista trimestralmente, nao como iniciativa financeira"
            sinal: medio
            prazo: 2029
            confianca: media
      - id: e7
        ordem: 1
        efeito: "O trilho nasce assimetrico por jurisdicao: liberado em quase todos os estados dos EUA e sob solicitacao em pouco mais de trinta paises, enquanto o Brasil chega pelo lado oposto, com Pix e Open Finance exigindo assinatura biometrica da pessoa em cada pagamento"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Formam-se dois regimes de agencia financeira — um em que o agente carrega a chave e paga sozinho, outro em que o agente propoe e a pessoa assina — e todo produto global passa a ter de suportar os dois com a mesma interface"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "A expressao agente autonomo se parte em duas classes de produto com UX, risco e regulacao distintos, e o desenho de confirmacao humana obrigatoria deixa de ser lido como atraso de mercado para ser lido como requisito de seguranca"
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: "Capital real como regua de avaliacao e como campo de operacao"
    efeitos:
      - id: e8
        ordem: 1
        efeito: "A avaliacao de modelo migra de placar estatico para posicao aberta: o resultado e lido em resultado financeiro e drawdown, e a retro-simulacao perde valor por vies de look-ahead"
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "A vantagem anunciada entre modelos deixa de ser demonstravel por benchmark: com prompt identico e mesmo mercado, a dispersao observada passou de oitenta pontos percentuais, o que torna a afirmacao melhor modelo dependente de tarefa e de janela"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A comunicacao de produto de IA passa a ser cobrada com o rigor de material publicitario de investimento — janela declarada, resultado passado, aviso de risco — porque o numero anunciado passou a ter contraparte monetaria"
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: "Surge a arena como formato: competicao publica de agentes com capital real, placar ao vivo e posicoes visiveis, operada como produto de audiencia e nao como relatorio tecnico"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: "Estabelece-se um genero de espetaculo sem corpo — mercado como esporte, com narracao, liga e aposta paralela — e quem projeta midia passa a desenhar interface de espectador para processos que nao tem rosto, gesto nem voz"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "Agentes negociando com agentes em mercado aberto e continuo comprimem o tempo de reacao de preco para baixo do limiar humano em nichos de oferta perecivel, como tarifa aerea e hospedagem"
        sinal: forte
        prazo: 2030
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "Reguladores de concorrencia tratam conluio agentico como categoria propria de risco antes de existir caso provado, e exigem do operador do agente a explicacao da politica de preco"
            sinal: medio
            prazo: 2027
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "O registro de decisao do agente — mandato, politica, log de alteracao — passa a ser documento regulatorio exigivel, como hoje e o livro de ordens de uma corretora, e guardar esse registro vira custo fixo de operar agente"
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

O que o YAML não consegue dizer, e que é o mais importante deste mapa:

**A árvore é desigual de propósito.** A raiz 4.1 tem cinco efeitos de 1ª ordem e as outras duas têm
três e dois. Isso não é desequilíbrio de análise: é o retrato de que a credencial com mandato é a
peça de que tudo o resto depende. Sem mandato portátil, o x402 continua sendo um trilho para
comprar chamada de API entre desenvolvedores, e a arena continua sendo um experimento com seis
participantes. A ordem de leitura correta é 4.1 → 4.2 → 4.3, não a ordem numérica dos efeitos.

**Os prazos de 2ª ordem em 4.3 estão antes dos de 1ª ordem — e isso está certo.** O efeito `e9.1`
(regulador trata conluio agêntico como categoria) tem prazo 2027, anterior ao seu pai `e9` (2030).
Não é erro de derivação: a CMA e o DRCF já publicaram, em março de 2026, documentos que nomeiam
conluio agêntico como risco. O regulador chegou antes do fenômeno. Isso é raro e vale registrar,
porque inverte o padrão que a disciplina costuma assumir — tecnologia primeiro, regra depois. Aqui a
regra está sendo escrita sobre um comportamento que ainda não foi observado em escala, e a forma
dessa regra vai determinar se `e9` acontece ou não.

**Três efeitos formam um mesmo mecanismo econômico, e nenhum deles é sobre pagamento.** `e3` (custo
de ser consultado), `e2.1` (estratificação de acesso) e `e5` (venda por requisição) são a mesma
coisa vista de três ângulos: **quando o leitor é uma máquina, a leitura deixa de ser gratuita**. O
incidente dos 881.076 preços gerados por um agente para uma única viagem é o caso-limite: nenhum
modelo de negócio da web suporta um leitor que consulta cem mil vezes para comprar uma. A web
comercial foi construída sobre a premissa de que olhar é grátis porque olhar é caro para quem olha.
Essa premissa caiu, e é por isso que a resposta imediata da indústria é bloqueio e filtro, não
cobrança — bloquear é mais rápido de implementar do que precificar.

**O que a roda não mostra: o cenário em que nada disso acontece.** Existe um caminho, plausível, em
que os protocolos convergem para um desenho com humano no laço em toda compra acima de um valor
trivial — e então o "agente com carteira" fica restrito a micropagamento de API, o comércio agêntico
vira uma camada de conveniência sobre o checkout existente, e o mapa inteiro descreve uma mudança de
interface, não de mercado. Esse caminho não está na árvore porque a roda de futuros deriva efeitos, e
não a ausência deles. Ele está na seção 7.

## 6. Sinais fracos e wildcards

**Sinais fracos — existem hoje, quase não aparecem, e mudariam o mapa inteiro.**

1. **As duas etiquetas do Web Bot Auth.** `agent-browser-auth` e `agent-payer-auth` são dois valores
   de um campo em um cabeçalho HTTP, descritos em um parágrafo de um post de engenharia. São também
   a primeira formalização técnica de uma distinção que não existia: **o visitante que vem olhar e o
   visitante que vem pagar**. Toda a hierarquia de acesso descrita em `e2.1` cabe dentro dessa
   distinção. Um detalhe de implementação está definindo uma categoria de cidadania na web.

2. **O compromisso de cobertura da American Express.** Uma bandeira dizer que cobre compra
   equivocada de agente registrado na sua rede é, na prática, a primeira precificação de risco de
   agente por um balanço privado. Se der certo, o seguro descrito em `e5.2.1` vem por concorrência,
   não por regulação — o que é bem mais rápido. Se der errado, o registro de agente vira barreira de
   entrada e consolida oligopólio de agentes credenciados.

3. **A impossibilidade formal do preço por token de saída.** Um resultado de prova em um artigo de
   segurança — nenhum esquema baseado só na saída é simultaneamente justo com o usuário honesto e
   limitado contra inflação de processamento oculto — é o tipo de achado que a indústria ignora até
   que uma fraude o torne caro. Ele implica que o modelo de cobrança hoje dominante em IA precisa
   mudar de forma. Quem estiver desenhando produto sobre preço por token está construindo sobre
   fundação com defeito demonstrado.

4. **A Stripe registrando liquidação on-chain como `PaymentIntent` comum.** Não é anúncio, é uma
   linha de documentação com uma versão de API. Mas é o que transforma pagamento de máquina de
   projeto especial em item de conciliação — a diferença entre uma tecnologia que precisa de defensor
   interno e uma que passa despercebida pelo financeiro. Adoção silenciosa é mais difícil de reverter
   do que adoção anunciada.

5. **A frase da Iniciador.** "O usuário aprova a transação com os dados do pagamento gerados por nós,
   não pelo agente." É uma tese de arquitetura de segurança escrita como nota técnica: **o agente não
   é confiável para descrever o que ele mesmo está fazendo**. Se essa premissa se generalizar, o
   mandato delegado do AP2 é estruturalmente inseguro e o mapa muda de eixo.

6. **Uso de dinheiro como fricção de compromisso pessoal.** Aparece hoje em experimentos marginais —
   aposta em cripto como mecanismo de hábito, com testemunhas. É pequeno e fácil de descartar como
   curiosidade. Mas é a única categoria em que o dinheiro do agente serve a um propósito que não é
   comprar: **o valor está em perder**. Se isso escalar, aparece uma classe de produto de mídia em que
   o pagamento é um elemento de narrativa, não de transação — e o repertório de projeto para isso não
   existe.

**Wildcards — baixa probabilidade, alto impacto, e nenhum deles está na árvore.**

- **Tarifa exclusiva para agente, anunciada por uma companhia aérea.** Mais barata, justificada por
  custo de atendimento zero. Mudaria a natureza do mapa: o agente deixa de ser tolerado e passa a ser
  o canal preferencial, e a pessoa que compra sozinha paga mais caro por ser pessoa. O inverso também
  é wildcard: **sobretaxa de consulta** cobrada de agente, tornando a busca um serviço pago.

- **O primeiro prejuízo grande e público causado por mandato mal escrito.** Não fraude, não invasão:
  um mandato ambíguo executado corretamente. É o evento que escreve a jurisprudência, e a forma como
  o primeiro caso for decidido vale mais para este mapa do que dois anos de desenvolvimento de
  protocolo.

- **Um regulador exigir que o agente se identifique como agente em toda interação, inclusive
  conversacional.** Equivalente ao que a etiqueta de conteúdo publicitário é hoje. Tornaria
  obrigatório, em projeto de interface, um elemento que ninguém desenhou ainda.

- **Convergência forçada de padrões por decisão de uma plataforma dominante.** Se um único ponto de
  distribuição de agentes exigir um protocolo, os outros morrem em um trimestre — e os efeitos de 2ª
  ordem deste mapa mudam de forma, porque mandato portátil e mandato cativo produzem mercados
  diferentes.

- **Recuo por perda.** Uma das arenas de capital real termina com prejuízo agregado grande o
  suficiente para virar notícia geral, e a categoria "agente que opera dinheiro" perde permissão
  social por alguns anos — não por proibição, mas por vergonha institucional. Já houve dispersão de
  oitenta pontos percentuais em uma temporada de seis participantes; a cauda dessa distribuição é
  onde mora este wildcard.

## 7. Contra o próprio mapa

**Erro provável nº 1 — confundir infraestrutura pronta com mercado existente.** Este é o risco
central, e o mapa o comete em parte. Há doze fontes datadas descrevendo protocolo, lançamento e
piloto. Há uma única série de números de adoção — 161 milhões de transações, mas apenas US$ 43,57
milhões liquidados, cerca de US$ 17 mil por dia, e a estimativa de que metade seja teste. Um
protocolo bem documentado com volume de laboratório é o retrato clássico de tecnologia que a
disciplina classificaria como emergente e que pode simplesmente não escalar. O mapa trata como raiz
algo cujo volume comercial ainda não foi demonstrado.

**Erro provável nº 2 — extrapolação de substituição de interface.** O mapa afirma que a persuasão
visual perde centralidade (`e1.3.1`). Nenhuma modalidade de interface madura foi deslocada por uma
nova em menos de quinze ou vinte anos: o mouse não matou o teclado, o toque não matou o mouse, a
voz não matou o toque. A formulação foi corrigida na rodada adversarial — de "a loja deixa de ter
interface" para "a vitrine se bifurca" — mas o efeito de 3ª ordem ainda carrega um resíduo de lógica
de substituição. Leia `e1.3.1` como coexistência com deslocamento de prestígio, não como extinção.

**Erro provável nº 3 — o mapa assume que a guerra de padrões termina.** Todos os efeitos de 2ª e 3ª
ordem em 4.1 pressupõem mandato portátil entre lojistas. Se ACP, AP2, TAP, MPP e UCP coexistirem por
cinco anos — e a Visa suportar todos é indício de que coexistir é o cenário provável, não o
excepcional — então não há score portátil de agente (`e1.2.1`), não há mercado de custódia de mandato
(`e1.1.1`) e a estratificação da web fica presa a cada plataforma. Meio mapa depende de uma
convergência que ninguém garantiu.

**Erro provável nº 4 — reaparecimento do trading de alta frequência no varejo (`e9`).** A analogia é
tentadora e foi marcada como suspeita na rodada adversarial. Mas mercado de bilhete aéreo e de
hospedagem tem estoque físico, liquidação lenta, inventário limitado e regulação de consumidor —
nenhuma dessas fricções existe em mercado de ativos financeiros. O efeito foi mantido com prazo
empurrado para 2030 e confiança reduzida a `media`, e o leitor deve tratá-lo como o elo mais frágil
da roda.

**Viés do solicitante, declarado.** O recorte pedido foi "global, com uma nota sobre o Brasil". Esse
pedido convida ao elogio nacional, e o efeito `e7.1.1` — o Brasil exportando a confirmação humana
como padrão de segurança em vez de atraso — é exatamente onde o viés aterra. A evidência sustenta a
**descrição** (o desenho brasileiro é de fato o oposto do mandato delegado, e é regulado); não
sustenta a **valoração** (que esse desenho vença). Está marcado `baixa` e deve ser lido como hipótese
de arquitetura, não como previsão.

**Segundo viés, também do recorte.** A disciplina ofereceu, no enunciado do tema, a tarifa exclusiva
para agente como wildcard. O efeito `e3.1.1` é essa ideia promovida a derivação. Ele tem evidência de
mecanismo — há dados sobre o custo de consulta, e a assimetria de custo de atendimento entre agente e
pessoa é real — mas nasceu de uma sugestão, não de uma derivação independente. Está registrado como
tal na seção 12.

**Terceiro viés, meu.** Sou o mesmo sistema que constrói o mapa e que executa a rodada adversarial.
A rodada descartou três efeitos e reescreveu um, o que é evidência de que ela funcionou em algum
grau; mas um adversário que compartilha os pesos do autor encontra os erros que o autor sabe
reconhecer, não os que ele não vê. O documento precisa de leitura humana hostil, e é honesto dizer
que ainda não teve.

## 8. O que a máquina errou

Erros cometidos durante esta construção, com o que os expôs.

**Erro 1 — data de nascimento do x402, duas versões incompatíveis.** Uma fonte afirma que a Coinbase
introduziu o x402 em **maio de 2025**; outra, que o protocolo foi lançado em **setembro de 2025**, e
usa essa data para justificar que os números de adoção são de estágio inicial. As duas afirmações
apareceram na mesma sessão de pesquisa. Não consegui resolver a contradição com as páginas que abri,
e a diferença importa: quatro meses mudam a leitura de US$ 43,57 milhões liquidados. **A contradição
está declarada, não resolvida** — e a data de lançamento foi retirada do corpo do documento por isso.

**Erro 2 — atribuir a data de lançamento da Visa à conferência errada.** Na primeira redação da
seção 3 escrevi que o Visa Intelligent Commerce Connect foi anunciado em 10/06/2026 no Visa Payments
Forum. Ao abrir a fonte, a data do lançamento do Connect é **22/04/2026**; 10/06/2026 é a data de um
anúncio distinto, de integração com a OpenAI, que apareceu no mesmo resumo de busca. Eu havia fundido
dois eventos porque vinham no mesmo parágrafo de um snippet. Corrigido contra a página aberta.

**Erro 3 — números de adoção como se fossem volume de mercado.** Escrevi, na primeira versão da
seção 3, "161 milhões de transações" como evidência de que o x402 escalou. A própria fonte que
compila o dado diz que cerca de metade do volume diário pode ser teste de facilitador, e que o
volume diário real é de ordem de US$ 17 mil. Cento e sessenta e um milhões de transações e US$ 43,57
milhões liquidados dão uma média de vinte e sete centavos por transação — coerente com micropagamento
de API, incoerente com comércio. Apresentar o número grande sem o pequeno era desonesto, e foi
corrigido.

**Erro 4 — atribuir ao relatório da Amadeus uma previsão que não está nele.** Um resumo de busca
associava ao relatório a projeção da IDC de que a IA agêntica responderia por cerca de um terço das
reservas internacionais até o fim da década. Abri a página: a projeção **não está lá**, e o
documento não traz nenhuma cifra de participação de reservas. A previsão foi removida. Era o número
mais citável do mapa e o mais frágil — número redondo, fonte de segunda mão, sem página aberta.

**Erro 5 — fidelidade "morre".** A primeira derivação produziu "o programa de fidelidade deixa de
existir porque o agente não tem lealdade". Ilogismo de substituição total, o mesmo padrão do erro do
teclado QWERTY documentado no `DUVIDAS.md` desta skill. Programa de fidelidade é contrato, não
sentimento: ele não morre, ele muda de forma. Reescrito como `e4.1`.

**Erro 6 — efeito pendurado na raiz errada.** Derivei "a empresa passa a ter linha de gasto executada
por máquina" (`e10`) sob a disrupção 4.3, capital real. O teste de causa solta reprovou: remova a
disrupção 4.3 e o efeito acontece igual, porque ele deriva da **credencial com mandato**, não da
operação de mercado. Religado a 4.1.

**Erro 7 — três páginas que eu disse que ia ler e não li.** As páginas da Mastercard sobre Agent Pay
for Machines, da PhocusWire e do TravelDailyNews sobre o Muse com Duffel devolveram HTTP 403; a
página inicial da Nof1 devolveu 429. Tudo que eu sei sobre o Agent Pay for Machines e sobre as datas
do Alpha Arena vem de resumo de busca, não de fonte aberta. Está marcado como tal na seção 11 e
listado na seção 12. A tentação de citar de todo modo — a informação parecia boa — é precisamente o
mecanismo que produz fonte inventada.

## 9. Três cenários para 2031

### 9.1. Provável

O agente com carteira virou infraestrutura sem virar acontecimento. A convergência de padrões não
aconteceu: ACP, AP2 e os protocolos de bandeira coexistiram, cada plataforma exigiu o seu, e o
mandato nunca foi portátil de verdade — o que sobreviveu foi um adaptador em cada lojista, feio e
funcional, como o gateway de pagamento foi nos anos 2000. A compra assistida por agente se
normalizou nas categorias onde o catálogo é estruturado e a decisão é comparável: passagem,
hospedagem, insumo corporativo, recorrência doméstica. Nas categorias onde a decisão é estética ou
identitária, a pessoa continuou comprando sozinha, e quem tentou automatizar isso desistiu por
devolução.

O que mudou de verdade foi o custo de olhar. A gratuidade da consulta terminou sem cerimônia: os
vendedores grandes filtraram tráfego de agente por credencial, os médios passaram a cobrar por
chamada, e "estar na web" deixou de garantir ser encontrável por comprador-máquina. Apareceram os
dois desenhos de vitrine, e a segunda — a que ninguém vê — passou a definir a receita. Quem projeta
interface aprendeu a escrever para leitor sem olho, e essa virou uma especialidade com nome próprio,
sem que a primeira vitrine perdesse orçamento: as duas disputaram o mesmo time.

A responsabilidade pelo erro nunca foi resolvida de forma geral. Foi resolvida caso a caso, por
contrato, e cada plataforma grande absorveu a sua fatia como custo de aquisição. O seguro de gasto
de agente existiu, mas como cláusula dentro de apólice cibernética, não como produto. Os reguladores
publicaram muito e sancionaram pouco: o conluio agêntico continuou sendo uma categoria de risco sem
caso emblemático. E as arenas de capital real sobreviveram como formato de nicho, com público fiel e
sem consequência econômica — o que se aprendeu delas foi menos sobre modelo e mais sobre variância.

### 9.2. Desejável

O que fez a diferença foi uma escolha de arquitetura que parecia burocrática em 2026: o mandato se
tornou um artefato legível pela pessoa, portátil entre plataformas e auditável depois. Não porque os
protocolos convergiram por generosidade, mas porque a primeira leva de prejuízos por mandato ambíguo
deixou claro que registro ilegível é passivo. O painel de mandato entrou no repertório de interface
como a permissão de câmera entrou nos anos 2010: um lugar fixo onde a pessoa vê o que delegou, com
que teto, por quanto tempo, e o que já foi gasto.

A dupla assinatura venceu como padrão em compra acima de valor trivial — e o desenho que o Brasil
havia adotado por caminho próprio, com o agente propondo e a pessoa confirmando com biometria,
deixou de ser lido como atraso e passou a ser referência de segurança, citado por quem havia
escolhido o mandato delegado e recuado. Isso custou latência e conveniência, e o custo foi aceito
porque a alternativa havia sido medida.

A responsabilidade ficou onde há capacidade de controlar o risco: quem opera o agente e quem emite a
credencial responde pelo erro, e o lojista deixou de absorver por omissão. O seguro de gasto de
agente virou produto com preço, o que fez o risco ser medido em vez de discutido. A camada de
reputação de agente existiu, mas com portabilidade obrigatória e direito de contestação — não como
score opaco.

E a mídia encontrou uma receita que não dependia de atenção. O pagamento por requisição transformou
acervo em fluxo de caixa pequeno e constante, o que sustentou arquivos, bases de dados e jornalismo
de registro — a parte do ofício que a economia da atenção nunca conseguiu pagar. Não substituiu
assinatura nem publicidade; virou a terceira perna, e a terceira perna foi a que segurou o que
ninguém lia mas todo mundo consultava.

### 9.3. Indesejável

O credenciamento virou o gargalo, e quem controla o credenciamento controla o acesso ao comprador.
Os protocolos convergiram — mas para dentro de três plataformas, cada uma com o seu registro de
agentes confiáveis. Agente não registrado passou a ser tratado como tráfego hostil por padrão, e o
bloqueio, que em 2026 era medida defensiva de custo, virou política de mercado. Pequeno vendedor sem
credencial saiu do alcance do comprador-máquina; pequeno desenvolvedor de agente não conseguiu
registro sem volume prévio. O porteiro da web deixou de ser o mecanismo de busca e passou a ser o
registro de agentes, com a diferença de que o registro cobra e não publica critério.

O score de agente consolidou a assimetria. Agente sem histórico pagou mais caro ou foi recusado, e
como o agente é de quem o opera, o custo caiu sobre quem já tinha menos — exatamente como o crédito.
O score não foi portátil nem contestável, porque ninguém obrigou a isso quando ainda era barato
obrigar.

A responsabilidade nunca saiu do lugar onde estava em 2026: o lojista absorveu, agora em escala, e
repassou no preço. A prova comportamental morreu e não foi substituída por prova de mandato legível
— foi substituída por registro proprietário, guardado por quem tem interesse no resultado da
disputa. Quem comprou por agente e foi lesado descobriu que não tinha como reconstruir o que havia
autorizado.

A cobrança por requisição, sem a correção do problema de preço por saída, virou vetor de extração:
serviços aprenderam a inflar processamento oculto dentro do limite do mandato, e como não há
chargeback em stablecoin, não houve para onde recorrer. E as arenas de capital real, que eram
experimento, viraram produto de varejo — dispersão de oitenta pontos percentuais vendida como
oportunidade, agente terceirizando prejuízo para quem não tinha como avaliar drawdown. Interface
limpa, botão único, mandato de uma linha, e o dono do dinheiro sem nenhum lugar onde ler o que
assinou.

## 10. O experimento

**O que se constrói hoje, com uma tarde e sem gastar dinheiro real.**

Um protótipo de duas pontas, cujo objeto de estudo não é o pagamento — é a **interação em volta do
pagamento**, que é o que falta na literatura e o que o público-alvo deste mapa vai ter de desenhar.

**Ponta A — o vendedor.** Um endpoint que devolve `HTTP 402` com os termos de pagamento no cabeçalho
e só entrega o conteúdo depois da autorização assinada. A receita está documentada e é curta: o guia
do x402 da Stripe entrega isso com `@x402/core`, `@x402/hono` e `@coinbase/x402`, cobrando US$ 0,01
por requisição. **Rode em rede de teste**, não em mainnet — a documentação avisa que a chamada com
cliente elegível move fundos de verdade. O conteúdo servido deve ser algo com granularidade real:
uma base de tarifas fictícias com cem itens, por exemplo, para que consultar muitas vezes seja
possível e caro.

**Ponta B — o comprador.** Um agente com um arquivo de mandato explícito — teto total, teto por
transação, categorias permitidas, validade, e o critério de escolha declarado em texto — e a tarefa
de comprar **um** item que satisfaça uma condição composta ("o mais barato que sai antes das 9h e
tem bagagem incluída"). O agente mantém um log de requisições e um recibo por gasto.

**Ponta C — e é aqui que está a contribuição de mídia e interação.** Um **painel de mandato**: a
interface que a pessoa lê *antes* de delegar e *depois* de gastar. Antes: o que estou autorizando, em
uma tela, sem jargão. Depois: o que foi gasto, em que, sob qual cláusula, e o que o agente descartou
no caminho. É a peça que nenhum dos protocolos especifica e que todos pressupõem.

**As duas medições, e são as que dão resultado publicável.**

1. **Quantas requisições o agente gasta para concluir uma compra.** É o look-to-book de uma única
   transação, medido em bancada. O dado de referência existe: a razão hoje é de dezenas de milhares
   de buscas por bilhete vendido, e há o registro de um agente que gerou 881.076 opções tarifárias
   para uma viagem. Se o protótipo reproduzir a ordem de grandeza — mesmo com cem itens e uma
   condição composta — a hipótese central de `e3` está demonstrada em escala de laboratório, o que é
   raro num trabalho de disciplina. Varie o critério de escolha e meça como o custo de consulta
   responde: é isso que transforma o experimento em achado.

2. **Quanto uma pessoa reconstrói lendo só o recibo.** Teste com oito a dez colegas, sem contexto
   prévio: mostre o mandato e o recibo, e pergunte o que o agente comprou, por quanto, por que
   escolheu aquilo e o que ele deixou de fora. Conte quantos acertam cada item. Esta é a medição da
   **lacuna de prova** descrita em `e1.1` — e é testável com papel, sem infraestrutura nenhuma. Se a
   maioria não conseguir reconstruir a decisão, o resultado vale para a defesa do mapa mais do que
   qualquer projeção: significa que a delegação de dinheiro, hoje, não é auditável pelo dono do
   dinheiro.

**Variante sem código, para quem não quer mexer em protocolo.** Pegue os fluxos de mandato do AP2 —
*Intent Mandate*, *Cart Mandate*, mandato delegado — e o fluxo brasileiro da Iniciador, em que o
agente propõe e a pessoa confirma com biometria. Desenhe as duas telas de confirmação, uma para cada
regime, com o mesmo cenário de compra. Teste qual das duas produz decisão informada e quanto tempo
cada uma custa. É um estudo de interface comparado, com dois regimes de agência financeira reais
documentados, e responde diretamente `e7.1`.

**O que este experimento não faz.** Não mede adoção, não mede mercado e não valida nenhum cenário da
seção 9. Mede duas coisas verificáveis: quanto custa consultar e quanto se consegue provar depois. As
duas são exatamente onde o mapa é mais frágil, e é por isso que valem ser medidas.

## 11. Fontes

Somente páginas efetivamente abertas e lidas. As afirmações que vieram de resumo de busca sem página
aberta estão listadas na seção 12 como não verificadas, e não foram usadas no corpo do documento.

1. `https://docs.stripe.com/payments/machine/x402` — sustenta o funcionamento do x402 (ciclo
   402 → autorização assinada → liquidação → conteúdo), o registro da liquidação on-chain como
   `PaymentIntent`, US$ 0,01 em USDC na Base como exemplo oficial, as redes suportadas (Tempo, Base,
   Solana), a versão de API `2026-05-27.preview`, e a disponibilidade geográfica (EUA exceto Nova
   York; mais de 30 países sob solicitação). **Confiabilidade: alta** — documentação técnica primária
   do fornecedor, com código executável e endereços de contrato verificáveis. Ressalva: é documento
   comercial, descreve o que funciona, não o que falha.

2. `https://arxiv.org/abs/2605.30998` — *Free-Riding the Agentic Web: A Systematic Security Analysis
   of x402 Payments*. Sustenta as quatro classes de falha (substituição entre recursos, corrida de
   liquidação duplicada, estouro de allowance, negação de liquidação), a razão de vazamento de até
   100% contra SDKs oficiais e implantações em produção, e o resultado de impossibilidade para preço
   por token de saída. **Confiabilidade: alta para o método, média para a magnitude** — preprint sem
   revisão por pares confirmada, mas com divulgação responsável declarada e um resultado formal, que é
   verificável independentemente da amostra.

3. `https://stripe.com/newsroom/news/stripe-openai-instant-checkout` — sustenta a data do Agentic
   Commerce Protocol (29/09/2025), a licença Apache 2.0, o *Shared Payment Token* como primitiva que
   dispensa expor a credencial do comprador, e o escopo inicial (Etsy ao vivo, mais de um milhão de
   lojistas Shopify anunciados). **Confiabilidade: alta para o fato do anúncio, baixa para escala** —
   é material de imprensa da própria empresa; "mais de um milhão de lojistas" é lojista habilitado,
   não lojista transacionando, e a fonte não distingue.

4. `https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol`
   — sustenta o AP2 (16/09/2025), mais de 60 organizações nomeadas, o conceito de mandato assinado, a
   distinção entre *Intent Mandate* e *Cart Mandate*, o fluxo delegado sem humano presente, e a
   extensão A2A x402. **Confiabilidade: alta para a especificação, média para adoção** — fonte
   primária do proponente; "60 organizações colaboraram" descreve participação em consórcio, não
   implantação.

5. `https://blog.cloudflare.com/secure-agentic-commerce/` — sustenta o Trusted Agent Protocol e o Web
   Bot Auth como camada de identidade criptográfica de agente, as sete verificações, a assinatura
   Ed25519, e — o item mais importante deste mapa — a distinção entre as etiquetas
   `agent-browser-auth` e `agent-payer-auth`. Confirma também que a American Express usa Web Bot Auth
   como base. Publicado em 24/10/2025, com atualizações até 15/07/2026. **Confiabilidade: alta** —
   documentação de engenharia de quem opera a camada, com mecanismo descrito em detalhe verificável.

6. `https://thepaypers.com/payments/news/visa-launches-intelligent-commerce-connect-for-agentic-payments`
   — sustenta a data (22/04/2026), o escopo do Intelligent Commerce Connect (iniciação, tokenização,
   controles de gasto, autenticação para transação dirigida por agente), o suporte declarado a TAP,
   MPP, ACP e UCP, e os pilotos com AWS, Diddo e Highnote. **Confiabilidade: média-alta** — veículo
   setorial especializado, reportando anúncio de fornecedor. A própria página não traz detalhe de
   responsabilidade nem de disputa, e isso foi registrado como ausência, não inferido.

7. `https://www.chargeflow.io/blog/ai-agent-chargeback-liability` — sustenta que hoje o lojista
   absorve a perda por padrão, a inexistência de moldura que reparta responsabilidade entre
   consumidor, provedor de IA e lojista, a lacuna de prova (impressão digital de dispositivo,
   navegação e sessão deixam de existir), e o compromisso da American Express de cobrir compra
   equivocada de agente registrado. **Confiabilidade: média** — fornecedor de solução de chargeback,
   portanto parte interessada em dimensionar o problema. O fato jurídico central — não existe regra —
   é consistente com as fontes regulatórias independentes desta lista, o que o corrobora.

8. `https://www.reedsmith.com/our-insights/blogs/viewpoints/102mp93/regulators-turn-their-attention-to-agentic-ai/`
   — sustenta a pesquisa da CMA (09/03/2026) nomeando padrões escuros, erosão de escrutínio e
   **conluio agêntico**; o documento de prospecção do DRCF *The Future of Agentic AI* (31/03/2026); a
   consulta da ICO sobre decisão automatizada (31/03/2026); e a entrada em vigor das obrigações de
   alto risco do AI Act em 02/08/2026. **Confiabilidade: alta** — banca de advocacia citando
   documento público com data, que é conferível na fonte primária. É análise, não norma.

9. `https://amadeus.com/en/newsroom/press-releases/agentic-ai-airlines-amadeus` — sustenta a data
   (04/06/2026), o apoio da Microsoft, as companhias entrevistadas (Azul, Icelandair, Southwest), a
   capacidade descrita de o agente articular diferença tarifária e **iniciar o pagamento**, e o
   enquadramento como pronto para produção em fluxos previsíveis. **Confiabilidade: média** — é
   material de imprensa de fornecedor de tecnologia de distribuição, com interesse direto na tese.
   Registro explícito: a página **não** contém a projeção de participação de reservas que apareceu
   associada a ela em resumo de busca (ver seção 8, erro 4).

10. `https://www.oag.com/blog/airline-ai-interface` — sustenta a data (09/07/2026), a razão atual de
    10 mil a 20 mil buscas por bilhete vendido, a projeção de até 200 mil na era agêntica, o
    incidente de **881.076 opções tarifárias geradas por um único agente Claude Code** para uma
    viagem da Etihad, a redução de mais de 70% de tráfego improdutivo pela filtragem da Amadeus, e o
    bloqueio pela Air France-KLM. **Confiabilidade: média-alta** — analista setorial independente com
    série histórica no assunto. O incidente da Etihad é relato de terceiro, não medição reproduzível,
    e o mapa o usa como caso-limite ilustrativo, não como estatística.

11. `https://opustechglobal.com/blog/x402-programmatic-money-just-moved-from-whitepaper-to-working-infrastructure/`
    — sustenta os números de adoção atribuídos a análise independente da KPMG (161,32 milhões de
    transações cumulativas, US$ 43,57 milhões liquidados, 417 mil compradores, 83 mil vendedores, até
    fevereiro de 2026), o volume diário de ordem de US$ 17 mil via x402Scan, e — decisivo — a
    estimativa do próprio autor de que cerca de metade desse volume seja teste de facilitador.
    **Confiabilidade: baixa-média para os números, alta para a ressalva** — é blog de consultoria
    citando a KPMG de segunda mão; não abri o relatório da KPMG e não pude conferir metodologia. Os
    números entraram no documento **acompanhados da ressalva**, e nenhuma conclusão do mapa depende
    de sua precisão.

12. `https://iniciador.com.br/conteudos/iniciador-anuncia-pagamentos-agenticos-full-stack-ai-toolkit`
    — sustenta a nota sobre o Brasil: data (19/05/2026), o primeiro MCP de pagamentos agênticos via
    Pix, a arquitetura em que o agente propõe e a pessoa autoriza com biometria FIDO2 vinculada ao
    dispositivo, a liquidação instantânea sem chargeback, e a formulação de arquitetura de segurança
    "o usuário aprova a transação com os dados do pagamento gerados por nós, não pelo agente".
    **Confiabilidade: média** — comunicação da própria empresa, com interesse em reivindicar
    primazia. A reivindicação de "primeiro do Brasil" não foi verificada; o **desenho** descrito é o
    que o mapa usa, e esse é verificável contra a arquitetura do Pix e do Open Finance.

13. `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/` — sustenta os resultados da
    primeira temporada do Alpha Arena: seis modelos (Qwen3 Max, DeepSeek Chat V3.1, Claude Sonnet
    4.5, Grok 4, Gemini 2.5 Pro, GPT-5), US$ 10 mil reais cada um, perpétuos na Hyperliquid, e o
    resultado final de +22,3% a −62,66%. Sustenta também a ressalva metodológica da própria fonte: uma
    temporada não estabelece superioridade, e retorno final esconde risco de drawdown.
    **Confiabilidade: baixa-média** — blog secundário; a fonte primária (nof1.ai) devolveu HTTP 429 e
    não pôde ser aberta. Os números são citados como **relato**, e a única conclusão que o mapa extrai
    deles é a dispersão entre modelos — que é robusta a erro de alguns pontos percentuais em qualquer
    dos valores.

## 12. Anexo — o levantamento bruto

### 12.1. Fase 1 — entrevista de enquadramento, como ocorreu

A skill exige entrevista antes de qualquer produção, uma pergunta por vez, e proíbe avançar sem
resposta. Esta rodada é automatizada e **não há usuário disponível para responder**. A instrução de
execução fornecida cobria antecipadamente os oito itens e determinava, literalmente: não fazer
perguntas de volta, não parar para confirmar, e assumir e declarar o que não estivesse definido.
Registro as perguntas e as respostas recebidas, para que a auditoria possa distinguir o que foi
informado do que foi assumido por mim.

| # | Pergunta da skill | Resposta recebida |
|---|---|---|
| 1 | Tema exato, 3 a 7 palavras | "Agentes com carteira: comércio agêntico e mercados de máquinas" (tema 5 de 19; família "Agentes") |
| 2 | Recorte: tecnologia, prática social, mercado, regulação, infraestrutura? | **Assumido por mim e declarado:** não foi especificado. Adotei **infraestrutura + prática de mercado**, porque as fontes datadas disponíveis são de protocolo e de rede de pagamento, e porque o público pedido projeta interação, não política |
| 3 | Horizonte | 2031 |
| 4 | Para quem é o mapa | Quem projeta mídia e interação |
| 5 | Recorte geográfico | Global, com uma nota sobre o Brasil |
| 6 | O que já está descartado | O que já é comum em produto de massa (régua da disciplina); nenhuma outra exclusão |
| 7 | Viés desejado | Neutro |
| 8 | O que o solicitante já sabe / fontes confiáveis e desconfiadas | Nenhuma disrupção suspeita indicada ("descubra"); ideias óbvias a excluir são as que serviriam para qualquer tema; e o critério declarado de mudança de opinião: evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada e só melhora o que existe |

**Consequências registradas do modo automatizado.** Três exigências da skill não puderam ser
cumpridas como escritas, e isso é limitação declarada, não licença:

- **Fase 2 pede confirmação da triagem antes de prosseguir.** Não houve quem confirmasse. A triagem
  está publicada na íntegra em 12.2 para contestação posterior.
- **Fase 5 exige mostrar o resumo da rodada adversarial e perguntar se alguma disrupção deve ser
  reprocessada.** Não houve quem respondesse. O resumo está em 12.5, e nenhuma disrupção foi
  reprocessada por decisão de terceiro — apenas as correções que a própria rodada impôs.
- **Item 8 da entrevista pede fontes desconfiadas.** Não foram indicadas, então apliquei o critério
  da própria skill: material de fornecedor sustenta o fato do anúncio, nunca a escala da adoção.

**Idioma, assumido e declarado.** A skill opera em inglês e exige explicitamente que os títulos de
seção e as chaves do frontmatter sejam as strings canônicas em português, para o pipeline da
CIN0055 — mas não determina o idioma do corpo. O exemplo de teste que acompanha a skill
(`TESTE.md`) é inconsistente nesse ponto: títulos e roda em português, prosa em inglês. Adotei
**corpo inteiro em PT-BR**, por ser o idioma da disciplina, do público declarado e do conteúdo
citado do Brasil.

### 12.2. Fase 2 — triagem de maturidade, completa

| Tecnologia | Classificação | Justificativa | Entra como raiz? |
|---|---|---|---|
| Checkout online, um clique, tokenização de cartão | **Madura** | Commodity há mais de uma década, em mais de 50% dos serviços do público-alvo | Não — seção 3 |
| Comparador de preço e metabusca | **Madura** | Padrão de mercado desde os anos 2000 | Não — seção 3 |
| APIs de reserva de viagem (Duffel, Amadeus, NDC) | **Madura** | Expõem catálogo e reserva a programas há anos; o que é novo é quem chama | Não — seção 3 |
| Scraping de tarifa | **Madura** | Prática antiga; hoje mais combatida que emergente | Não — seção 3 |
| Pix e Open Finance | **Madura** | Infraestrutura consolidada, cobertura declarada acima de 95% dos adultos | Não — seção 3, e base do efeito `e7` |
| Stablecoin (USDC) como ativo de liquidação | **Madura** | Rotina em Base e Solana | Não — o novo é o uso como trilho de máquina |
| Recomendação algorítmica de compra | **Madura** | Está em praticamente todo e-commerce grande | Não — **descartada explicitamente como raiz** |
| **x402 / HTTP 402 como trilho de máquina** | **Emergente + disruptiva** | Especificação e SDK existem, com receita oficial de processador; volume liquidado é de laboratório; rompe assinatura e chave de API como forma de monetizar acesso | **Sim — raiz 4.2** |
| **ACP e Shared Payment Token** | **Emergente + disruptiva** | Datada em 09/2025, em produção limitada; rompe a premissa de credencial exposta ao vendedor | **Sim — compõe a raiz 4.1** |
| **AP2 e mandatos (Intent/Cart/delegado)** | **Emergente + disruptiva** | Consórcio de 60+ organizações, especificação pública; o mandato delegado rompe a autorização como gesto | **Sim — compõe a raiz 4.1** |
| **Visa Intelligent Commerce, Mastercard Agent Pay, Agentic Tokens** | **Emergente** | Lançados e em piloto em 2026; ainda sem regra de responsabilidade | **Sim — compõe a raiz 4.1** |
| **Web Bot Auth e Trusted Agent Protocol** | **Emergente + disruptiva** | Rascunho de IETF sobre RFC 9421, já implementado em camada de borda; rompe a pergunta "é humano?" e a substitui por "de quem é este agente?" | **Sim — compõe a raiz 4.1** |
| **Agentes de LLM operando capital real** | **Emergente + disruptiva** | Existe em experimento público com capital pequeno; rompe o regime de avaliação por benchmark estático e invalida o backtest | **Sim — raiz 4.3** |
| Agentes como funcionários digitais com acesso a ERP e CRM | **Emergente** | Produtos existem, adoção não demonstrada; e o efeito relevante deriva do mandato, não do acesso | Não — entra como efeito `e10` |
| Filtragem de tráfego de agente (Advanced Airline Profile) | **Emergente** | Em produção, com número declarado (−70%); é resposta, não causa | Não — sustenta `e3` |
| Dinheiro como fricção de compromisso pessoal | **Emergente, marginal** | Existe em experimento de nicho; sem viabilidade demonstrada em escala | Não — seção 6, sinal fraco |

**Regra de ouro da skill aplicada:** "se a tecnologia está em mais de 50% dos dispositivos ou
serviços do público-alvo, é madura; se é tema de keynote há mais de 5 anos e não mudou nada de
fundamental, é madura." Foi ela que descartou recomendação algorítmica e checkout — e é ela que
sustenta a régua da disciplina ("o que já é comum em produto de massa está fora").

### 12.3. Fase 3 — candidatas a raiz, incluindo as rejeitadas

Candidatas consideradas: seis. Mantidas: três.

- **Mantida — credencial de pagamento para o agente, sob mandato assinado** (4.1).
- **Mantida — pagamento por requisição na camada de protocolo** (4.2).
- **Mantida — capital real como régua de avaliação e campo de operação** (4.3).
- **Rejeitada — "comércio eletrônico assistido por IA".** Madura pelo critério da Fase 2. Foi
  rejeitada explicitamente na seção 4, como a skill exige.
- **Rejeitada — "o colapso da economia do look-to-book".** Tem a melhor evidência do levantamento
  (10–20 mil buscas por bilhete, projeção de 200 mil, os 881.076 preços da Etihad, os −70% da
  filtragem). Mas não é raiz: é consequência direta de 4.1 e 4.2 operando juntas. Promovê-la a raiz
  teria inflado o mapa com uma quarta árvore cujos galhos já pendem de outras. Rebaixada a efeito
  `e3`, onde a evidência sustenta confiança `alta`.
- **Rejeitada — "mercados simulados e empresas de agentes como instrumento".** Fora do escopo por
  fronteira declarada: pertence ao tema 6 da disciplina. Aqui o objeto é dinheiro real em mão de
  máquina, não simulação como método de pesquisa. A fronteira com o tema 4 (web reprojetada para
  agentes, protocolo e descoberta) foi respeitada de forma diferente: `e2` e `e2.1` tocam
  credenciamento de acesso, mas apenas no que decorre de **pagar** — a etiqueta que separa
  `agent-browser-auth` de `agent-payer-auth` é exatamente a costura entre os dois temas, e está
  citada aqui pelo lado do pagamento.

### 12.4. Fase 4 — derivação bruta, antes da rodada adversarial

Primeira derivação, em texto corrido, tal como saiu. Os itens marcados **[CORTADO]** e
**[REESCRITO]** não estão no YAML da seção 5.

Da raiz 4.1:
- 1ª ordem: credencial emitida para o agente com mandato assinado → virou `e1`.
- 1ª ordem: identidade criptográfica como pré-requisito de acesso → virou `e2`.
- 1ª ordem: custo de consulta explode → virou `e3`.
- 1ª ordem: fidelidade perde função de retenção → virou `e4`.
- 1ª ordem: **[CORTADO]** "agentes substituem aplicativos de e-commerce; a loja deixa de ter
  interface". Adoção acelerada. Nenhuma modalidade de interface madura foi deslocada em menos de
  quinze anos. **[REESCRITO]** como `e1.3`, vitrine bifurcada, com o efeito de 3ª ordem rebaixado de
  extinção a deslocamento de prestígio.
- 2ª ordem: **[CORTADO]** "dados de intenção de compra coletados pelo agente viram commodity, como
  geolocalização". Causa solta: remova a credencial de pagamento e o efeito acontece igual, por
  qualquer sistema de recomendação. Não deriva desta raiz e não foi religado a nenhuma — nenhuma das
  três raízes o produz. Descartado.
- 2ª ordem: **[CORTADO]** "comparadores de preço desaparecem, absorvidos pelo agente".
  Extrapolação linear e adoção acelerada no mesmo item. Descartado.

Da raiz 4.2:
- 1ª ordem: venda por requisição a comprador não-humano → `e5`.
- 1ª ordem: costura ao trilho contábil → `e6`.
- 1ª ordem: assimetria por jurisdição → `e7`.
- 2ª ordem: superfície de ataque na precificação → `e5.2`.

Da raiz 4.3:
- 1ª ordem: avaliação migra para posição aberta → `e8`.
- 1ª ordem: agentes negociando com agentes comprimem reação de preço → `e9`.
- 1ª ordem: **[RELIGADO]** "empresa passa a ter linha de gasto executada por máquina". Reprovado no
  teste de causa solta sob 4.3: remova o capital real como régua e o efeito acontece igual, porque
  deriva do **mandato**. Religado a 4.1 como `e10`.

### 12.5. Fase 5 — rodada adversarial, na íntegra

**Teste 1 — extrapolação linear** ("isto é só o que já acontece, só mais?").
- `e3` (custo de consultar explode): **aprovado.** Não é "mais busca": é inversão de sinal de custo.
  Hoje quem busca paga o custo cognitivo; ali, quem é buscado paga o custo computacional. Muda quem
  arca, não a quantidade.
- `e9` (agentes negociando com agentes): **suspeito.** É o trading de alta frequência reencenado no
  varejo. Bilhete e hospedagem têm estoque físico, liquidação lenta e regulação de consumidor —
  fricções que não existem em mercado de ativos. **Mantido** com prazo empurrado de 2029 para 2030 e
  confiança reduzida de `alta` para `media`. Marcado na seção 7 como o elo mais frágil.
- `e5.1` (terceira via além de anúncio e paywall): **aprovado.** Micropagamento por item foi tentado
  e falhou repetidamente com comprador humano, por custo de decisão. O comprador-máquina não tem
  custo de decisão — o mecanismo de falha histórico não se aplica, e é isso que torna o efeito não
  linear.
- "Comparadores desaparecem": **descartado** no teste (ver 12.4).

**Teste 2 — adoção acelerada** ("isto pressupõe adoção mais rápida que qualquer precedente
histórico comparável?").
- "A loja deixa de ter interface": **reprovado e cortado** (ver 12.4).
- `e1.3.1` (bifurcação do ofício de design): **suspeito.** Reforma de currículo e de mercado
  profissional leva de dez a quinze anos. **Mantido** em 2031 com confiança `baixa`, e com a
  formulação alterada: perda de centralidade, não extinção — "enquanto a persuasão visual perde
  centralidade", não "desaparece".
- `e1.2.1` (score portátil de agente): **suspeito.** Depende de convergência de padrões que não
  aconteceu. **Mantido** com confiança `baixa` e com a dependência declarada na seção 7, erro 3.
- `e8.1.1` (comunicação de IA cobrada como material de investimento): **suspeito.** Regulação de
  publicidade financeira levou décadas para se formar. **Mantido** com prazo empurrado de 2031 para
  2032 e confiança `baixa`.

**Teste 3 — causa solta** (remova a raiz; o efeito ainda acontece por outro motivo?).
- "Dados de intenção como commodity": **reprovado.** Acontece por qualquer recomendador.
  **Descartado.**
- `e10` (linha de gasto executada por máquina): **reprovado sob 4.3, aprovado sob 4.1.**
  **Religado.**
- `e9.1` (regulador trata conluio agêntico como categoria): **aprovado com anotação.** Acontece mesmo
  sem 4.3 — de fato **já aconteceu**, em março de 2026, antes do fenômeno. Mantido sob 4.3 porque a
  raiz é o que dá conteúdo empírico ao risco, mas o prazo (2027) ficou deliberadamente **anterior ao
  do efeito pai** (2030), e isso está explicado na prosa da seção 5. Anomalia de derivação preservada
  de propósito, porque descrever com fidelidade vale mais do que uma árvore bonita.
- `e6.1` (pagamento de máquina como linha de custo de TI): **aprovado.** Só acontece se a liquidação
  entrar na conciliação normal, que é especificamente o mecanismo de 4.2.

**Teste 4 — viés do solicitante** (o efeito confirma crença prévia de quem pediu?).
- `e7.1.1` (Brasil exportando confirmação humana como padrão de segurança): **marcado para revisão.**
  O recorte pedido — "global, com uma nota sobre o Brasil" — convida ao elogio nacional. A evidência
  sustenta a descrição do desenho, não a previsão de que ele vença. **Mantido** com confiança `baixa`
  e com o viés declarado na seção 7.
- `e3.1.1` (tarifa exclusiva para agente): **marcado para revisão.** O enunciado do tema ofereceu
  exatamente esta ideia como wildcard, e ela reaparece aqui promovida a efeito de 3ª ordem. Não é
  derivação independente. **Mantido** porque tem mecanismo com evidência — assimetria real de custo de
  atendimento e de consulta — mas com a origem registrada, e com o efeito formulado nos **dois
  sentidos** (mais barato para agente que não custa atendimento, mais caro para agente que custa
  consulta), justamente para não entregar de volta a sugestão recebida.
- O viés declarado como neutro foi respeitado na escolha de cenários: o indesejável (9.3) é tão
  detalhado quanto o desejável (9.2), e o provável (9.1) é o mais morno dos três — que é o resultado
  honesto quando o gargalo é regulatório.
- **Contra-teste do critério de mudança de opinião.** O solicitante declarou que mudaria de ideia
  diante de evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia só
  melhora o que existe. Apliquei os dois: **(a)** a adoção não passou da maioria inicial — US$ 43,57
  milhões liquidados com metade possivelmente sendo teste, e nenhuma companhia aérea com política
  pública de agente, colocam o x402 e o mandato delegado antes mesmo dos primeiros adotantes em
  mercado amplo; **(b)** a tecnologia não é só melhoria — a etiqueta `agent-payer-auth` cria uma
  categoria de visitante que não existia, e a lacuna de prova antifraude não é um incômodo
  incremental, é a destruição da base probatória de um processo. O tema **sobreviveu** ao critério.

**Resumo das falhas encontradas, como a skill exige:**

| Contagem | Quais |
|---|---|
| **3 efeitos descartados** | dados de intenção como commodity (causa solta); fim da interface de loja (adoção acelerada); fim dos comparadores de preço (extrapolação linear + adoção acelerada) |
| **1 efeito reescrito** | "a fidelidade morre" → `e4.1`, fidelidade como cláusula legível por máquina |
| **1 efeito religado a outra raiz** | `e10`, de 4.3 para 4.1 |
| **1 efeito reformulado sem mudar de posição** | `e1.3.1`, de extinção para perda de centralidade |
| **3 prazos empurrados** | `e9` 2029→2030; `e8.1.1` 2031→2032; `e1.3.1` mantido em 2031 mas com confiança rebaixada |
| **4 efeitos mantidos com ressalva registrada** | `e9`, `e1.2.1`, `e7.1.1`, `e3.1.1` |
| **1 anomalia de derivação preservada** | `e9.1` com prazo anterior ao do pai, porque o regulador chegou antes do fenômeno |
| **1 anomalia de estrutura preservada** | árvore desigual (5 / 3 / 2 efeitos de 1ª ordem), porque reflete a dependência real entre as raízes |

**Pergunta obrigatória da Fase 5, e o que aconteceu com ela.** A skill manda mostrar este resumo ao
solicitante e perguntar se alguma disrupção deve ser reprocessada. A pergunta foi formulada e **não
houve a quem dirigi-la**; a instrução vigente para esta rodada determina não parar para pedir
confirmação. Nenhuma raiz foi reprocessada a pedido. Fica registrado o que eu teria perguntado:
*"quer que eu reprocesse a raiz 4.3? Ela é a mais fraca em evidência — uma temporada, seis
participantes, US$ 60 mil no total — e é a única cuja fonte primária eu não consegui abrir."*

### 12.6. Buscas e páginas que falharam

**Páginas que tentei abrir e não abriram:**
- `https://www.mastercard.com/global/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html` — **HTTP 403.** Consequência: tudo sobre o Agent Pay for Machines (o anúncio de junho de 2026, o foco em pagamento máquina-a-máquina de alta frequência e baixo valor) vem de resumo de busca e **não foi usado como afirmação no corpo**. O Agent Pay é mencionado apenas onde a Cloudflare e o The Paypers, abertos, o confirmam.
- `https://www.phocuswire.com/news/technology/meta-launches-ai-agent-travel-booking` — **HTTP 403.**
- `https://www.traveldailynews.com/technology/metas-muse-adds-duffel-for-ai-powered-travel-bookings/` — **HTTP 403.** Consequência: a data de 09/09/2026 e o escopo do Muse com Duffel (busca, reserva e gestão, disponível nos EUA) vêm de resumo de busca. Estão na seção 3 como referência de cenário, sem sustentar nenhum efeito da roda.
- `https://nof1.ai/` — **HTTP 429.** Fonte primária da raiz 4.3 inacessível. Substituída por relato secundário (fonte 13), com a confiabilidade rebaixada em consequência.
- `https://www.datawallet.com/crypto/alpha-arena-nof1-ai-explained` — **HTTP 404.**

**Afirmações que apareceram em busca e que eu deliberadamente NÃO usei, por não ter aberto a fonte:**
- A projeção da IDC de que a IA agêntica responderia por cerca de um terço das reservas
  internacionais até o fim da década. Apareceu atribuída ao relatório da Amadeus; **não está na
  página**. Ver seção 8, erro 4.
- As datas da primeira temporada do Alpha Arena (18/10 a 03/11/2025). Só em resumo de busca.
- "Nenhuma companhia aérea publicou API voltada a agente nem política pública de acesso de agente, e
  a IATA pede que vendedores declarem sua política agêntica, mas as políticas ainda não existem."
  Afirmação forte e diretamente relevante; a página da OAG que abri **não a contém**. Deixada fora
  do corpo, registrada aqui como pista a verificar — é o tipo de ausência que, se confirmada,
  reforça `e2.1`.
- "Provedores de TI aeronáutica processam de 3 a 13 bilhões de requisições de compra por dia, e mais
  de 80% das ofertas construídas nunca são mostradas a um cliente." Mesma situação: não confirmada em
  página aberta.
- A taxa de 4% cobrada pela OpenAI por compra concluída no Instant Checkout, e a data de 16/02/2026
  do "Buy it in ChatGPT". Vindas de resumo de busca; o material de imprensa da Stripe que abri não
  traz estrutura de tarifa.

**Contradição não resolvida:** data de origem do x402 — maio de 2025 em uma fonte, setembro de 2025
em outra. Declarada na seção 8, erro 1. Nenhuma afirmação do mapa depende dela.

**Termos de busca usados:** *x402 HTTP 402 machine-to-machine payments agents*; *Agentic Commerce
Protocol Stripe OpenAI Instant Checkout adoption*; *Visa Intelligent Commerce Mastercard Agent Pay
agentic tokens*; *Nof1 Alpha Arena AI trading real money results*; *Pix agentic Banco Central
pagamento por agentes de IA Brasil*; *airline agentic booking Duffel Amadeus AI agents book
flights*; *agentic commerce liability chargeback who is responsible insurance for AI agents*;
*airlines block AI agents loyalty program NDC agent fare*; *AI agents negotiating algorithmic
collusion pricing regulators*; *agent identity reputation Trusted Agent Protocol Cloudflare web bot
auth*.

### 12.7. Contagens declaradas, para conferência

- Disrupções-raiz: **3** (4.1, 4.2, 4.3). Candidatas rejeitadas: **3**.
- Efeitos de 1ª ordem: **10** — `e1 e2 e3 e4 e10` (raiz 4.1, cinco, no limite máximo da skill);
  `e5 e6 e7` (raiz 4.2, três); `e8 e9` (raiz 4.3, dois, no mínimo da skill).
- Efeitos de 2ª ordem: **14** — `e1.1 e1.2 e1.3 e2.1 e3.1 e4.1 e10.1 e5.1 e5.2 e6.1 e7.1 e8.1 e8.2
  e9.1`.
- Efeitos de 3ª ordem: **11** — `e1.1.1 e1.2.1 e1.3.1 e2.1.1 e3.1.1 e5.1.1 e5.2.1 e7.1.1 e8.1.1
  e8.2.1 e9.1.1`.
- Ramos com profundidade 3: **11** (exigência da skill: no mínimo 3).
- Fontes abertas e citadas na seção 11: **13**. Páginas tentadas e falhadas: **5**.
- Confiança global: **media** — justificada pela combinação de infraestrutura datada e verificável
  com volume comercial não demonstrado e regra de responsabilidade inexistente.
