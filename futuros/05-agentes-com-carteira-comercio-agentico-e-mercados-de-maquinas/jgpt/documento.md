---
tema: "Agentes com carteira: comércio agêntico e mercados de máquinas"
slug: agentes-com-carteira-comercio-agentico-e-mercados-de-maquinas
autor_login: jgpt
zona_de_interesse: Agentes
data: 2026-09-18
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 12
efeitos_ordem_3: 12
tecnologias_citadas: [x402, AP2, ACP, "Visa Intelligent Commerce", "Visa Trusted Agent Protocol", "Mastercard Agent Pay", "Agentic Tokens", "Stripe Shared Payment Token", "Stripe Machine Payments", "W3C Verifiable Credentials", "Cloudflare Pay Per Crawl", "Cloudflare Pay Per Use", "HTTP 402", "EIP-712", "EIP-3009", Hyperliquid, Duffel, MCP, Pix]
fontes: 17
confianca: media
experimento: "Uma tela de mandato: 14 pessoas delegam orçamento a um agente que depois faz três compras — uma dentro do escopo, uma na borda e uma explorando ambiguidade — e se mede quantas foram previstas."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

Entre setembro de 2025 e setembro de 2026 o comércio agêntico deixou de ser demonstração e virou infraestrutura — mas não a infraestrutura que foi anunciada. O Instant Checkout do ChatGPT, lançado em 29/09/2025 com Etsy e Shopify e taxa de 4% ao lojista, foi desativado em março de 2026; o x402 acumulou centenas de milhões de transações com volume diário de cerca de US$ 28 mil e metade do movimento identificado como wash trading; seis modelos de fronteira receberam US$ 10 mil cada para operar cripto e quatro perderam entre 30% e 63%. O que sobreviveu e endureceu foi outra coisa: a credencial de pagamento com escopo — token amarrado a um agente, a um comerciante e a uma política de consentimento — e o mandato assinado como prova de autorização. É isso que muda o campo: não "a IA compra", mas "existe um documento assinado que diz quem autorizou o quê, e é ele que decide quem paga o prejuízo". Para quem projeta mídia e interação, a consequência é que a tela de compra deixa de ser o lugar da decisão e é substituída por uma tela de concessão de escopo, semanas antes da compra; e que a web passa a ter dois leitores com modelos de receita diferentes, depois que a Cloudflare tornou o bloqueio de agentes o padrão em páginas com anúncio a partir de 15/09/2026.

## 2. O tema

Um agente que pode ler é um leitor a mais. Um agente que pode **pagar** é uma parte contratante. A diferença não é de grau: pagar exige identidade, autorização comprovável, limite, e alguém a quem cobrar quando dá errado — quatro coisas que a arquitetura da web não tinha para software.

O tema encosta em mídia e interação em três pontos concretos, e nenhum deles é "e-commerce":

1. **O consentimento muda de unidade.** Hoje a unidade de consentimento é a transação: a pessoa vê o carrinho e confirma. Com agente, a unidade passa a ser o *mandato* — um escopo concedido antes, que vale para compras que ainda não existem. Isso é um problema de desenho de interface, não de pagamento.
2. **O leitor muda de espécie.** Quando parte do tráfego de um site é máquina que paga por acesso, a página deixa de ser uma superfície só e passa a ser duas, com métricas incomparáveis entre si.
3. **O preço deixa de ser um número.** Se agentes negociam com agentes, a interface tem de comunicar validade e faixa onde comunicava certeza.

Merece mapa de futuro, e não estado da arte, porque o presente aqui é enganoso nos dois sentidos: os números de adoção estão inflados (metade do movimento do x402 é artificial) e os recuos públicos são lidos como fracasso do campo quando foram fracasso de um produto. Um levantamento de estado da arte fotografaria o hype; o que interessa é qual limiar foi de fato cruzado por baixo dele.

## 3. Onde isso está hoje

### O que já existe e funciona

**A camada de credencial escopada está em produção.** O AP2 (Agent Payments Protocol), anunciado pelo Google em 16/09/2025 com mais de 60 parceiros — Mastercard, PayPal, Coinbase, American Express, Adyen, Worldpay, Etsy, Revolut —, define três mandatos assinados como Verifiable Credentials do W3C: *Intent* (o que a pessoa pediu), *Cart* (o que o agente montou, com preço exato) e a ligação ao meio de pagamento. O protocolo declara resolver explicitamente três perguntas: autorização, autenticidade e **responsabilidade** — "trilha de auditoria não-repudiável para determinar culpa em transações fraudulentas" [1]. A versão v0.2.0 saiu em abril de 2026.

**As bandeiras entraram com produto próprio.** Mastercard lançou Agent Pay em 29/04/2025 e Visa o Intelligent Commerce em 30/04/2025; o Trusted Agent Protocol da Visa veio em 14/10/2025. Os *Agentic Tokens* amarram uma credencial tokenizada a um agente específico, a um escopo de comerciante e a uma política de consentimento, com limites de gasto e allowlist de contrapartes — o modelo nunca vê o número do cartão. Mastercard está em produção em Singapura e Malásia e lançou Agent Pay for Machines em junho de 2026; a Visa está integrada a experiências da OpenAI desde junho de 2026 [2].

**Há pesquisa empírica, não só anúncio.** O paper *Free-Riding the Agentic Web* (23/06/2026) faz análise sistemática de segurança do x402 e documenta TOCTOU entre verificação e execução, validação incompleta de assinaturas EIP-712/EIP-3009 e bypass de autenticação — isto é, acesso a serviço sem pagamento efetivo [3]. E *On the Fragility of AI Agent Collusion* (30/01/2026) mede, em mais de 100 execuções e ~2.235 horas de computação, que dois agentes LLM pacientes num jogo de preços repetido chegam a +22% acima do nível competitivo — e que a heterogeneidade real de mercado derruba isso para +10% (horizontes diferentes) ou +7% (acesso a dados assimétrico) [4].

**O mercado de responsabilidade já precifica agentes.** A Armilla AI Liability foi lançada em abril de 2025 e elevada a US$ 25 milhões em janeiro de 2026; a AIUC AI Liability (US$ 50 milhões) saiu do stealth em julho de 2025. Em 01/01/2026 a divisão ISO da Verisk publicou três endossos de exclusão de IA generativa para apólices de responsabilidade civil geral (CG 40 47, CG 40 48, CG 35 08). Uma pesquisa Gallagher de 2026 encontrou 1 em 5 profissionais de seguro relatando perdas ligadas a risco de IA, e mais de 90% da exposição está em apólices convencionais nunca desenhadas para a tecnologia [5].

### O que existe e não funciona

**O checkout agêntico dentro do assistente recuou.** O Instant Checkout do ChatGPT foi lançado em 29/09/2025 com Etsy, e a cobrança de 4% aos lojistas Shopify começou em 26/01/2026 — take rate total de 7% a 9% com processamento incluído [6]. Em março de 2026 a OpenAI encerrou o Instant Checkout e passou a operar por apps de comerciante [7]. O diagnóstico do lado do setor de pagamentos é específico: faltam simultaneamente feed de produto em tempo real, consentimento verificável, modelo de fraude calibrado para comportamento de agente e resolução de disputa transfronteiriça — e nenhuma plataforma tinha os quatro [8].

**O micropagamento máquina-a-máquina está inflado.** O x402 registra volume diário de cerca de US$ 28 mil em ~131 mil transações, ticket médio de US$ 0,20; um pico em fevereiro de 2026 marcou 3,8 milhões de transações e ~US$ 2 milhões. Cerca de **metade da atividade observada é artificial** — self-dealing (mesma carteira compra e vende) e wash trading (o vendedor financia a carteira do comprador, que devolve em seguida). A frase que resume: "a infraestrutura de pagamentos agênticos chegou primeiro; a economia que ela deveria sustentar pode demorar mais" [9].

**Os modelos com dinheiro real perderam dinheiro.** Na Alpha Arena da Nof1 (Hyperliquid, perpétuos de cripto, US$ 10 mil por modelo, a partir de 18/10/2025), o resultado final da Season 1 foi: Qwen3 Max +22,3%, DeepSeek V3.1 +4,89%, Claude Sonnet 4.5 −30,81%, Grok 4 −45,3%, Gemini 2.5 Pro −56,71%, GPT-5 −62,66% [10]. Os modelos operaram sem acesso a notícia em tempo real ou dado proprietário [11].

### Quem está construindo agora

- **Padrões concorrentes:** ACP (Stripe + OpenAI, Apache 2.0, desde 29/09/2025) para o par agente-comerciante com Shared Payment Token emitido pelo processador [12]; AP2 (Google + 60 parceiros) para a prova de autorização; x402 (Coinbase) para pagamento por requisição, com suporte da Stripe em preview desde 10/02/2026 ("Machine Payments").
- **Infraestrutura de acesso:** a Cloudflare anunciou que, a partir de **15/09/2026**, domínios novos passam a bloquear por padrão as categorias *Training* e *Agent* em páginas com anúncio, mantendo *Search* liberada; e o Pay Per Crawl evoluiu para **Pay Per Use**, que cobra quando o conteúdo gera valor no resultado da IA, não quando é buscado — com Ceramic.ai e You.com como primeiros parceiros [13].
- **Brasil:** a Visa realizou a primeira transação agêntica do país em **março de 2026** e lançou o programa Visa Agentic Ready; Dock, Banco do Brasil e Iniciador participam dos pilotos. O país não tem regime jurídico específico para responsabilização em transação autônoma — Erik Oioli (VBSO) resume que "a IA não é, juridicamente, sujeito autônomo de direitos e obrigações", e a responsabilidade recai sobre usuário, banco, iniciador, fornecedor do agente e desenvolvedor. A Febraban aponta que o agente precisará de "identidade e credencial próprias". Bancos devem investir R$ 50 bilhões em 2026, R$ 3 bilhões deles em IA; 32,1% das empresas têm agentes autônomos em teste e apenas 3,6% conferem autonomia total [14].

### Diagnóstico de maturidade (heurística de Hype Cycle, não previsão)

Aplicando a pergunta "isto é cobertura de demonstração ou de adoção?": os anúncios de protocolo (AP2, ACP, Trusted Agent Protocol) são cobertura de demonstração — nenhum publica volume transacionado. A cobertura da Cloudflare, do recuo da OpenAI e do mercado de seguro é de adoção: são mudanças de default, de preço e de apólice, que só acontecem quando há uso. O sinal de adoção mais sólido, porém, é negativo: as sessões de IA seguem abaixo de 0,2% do tráfego total de e-commerce, e apenas 14% dos consumidores norte-americanos confiam numa IA para fazer o pedido, contra 45% que já usam IA em alguma parte da jornada [15]. A curva não diz quando isso vira; diz que o que está publicado hoje mede sobretudo interesse, não transação.

## 4. As disrupções-raiz

### Raiz A — A credencial de pagamento com escopo e o mandato assinado

**O que rompe.** Até aqui, autorizar uma máquina a pagar significava entregar a ela a credencial inteira de um humano (irrestrita, sem escopo, sem validade) ou construir integração bilateral com cada contraparte. A restrição removida é a da **granularidade da autorização**: passou a existir uma credencial que vale só para este agente, este comerciante, este teto e esta janela de tempo, e um documento criptográfico que prova que a pessoa pediu aquilo.

**Por que agora e não há cinco anos.** O limiar é concreto e datado: em setembro de 2025 apareceu um formato de prova de intenção (mandatos AP2 como Verifiable Credentials do W3C) e, dentro de doze meses, as duas bandeiras globais o traduziram em produto em produção — Mastercard vivo em Singapura e Malásia, Visa integrada à OpenAI desde junho de 2026, primeira transação agêntica brasileira em março de 2026. Há cinco anos não existia nem o formato de prova nem contraparte disposta a aceitá-lo: a tokenização de cartão existia, mas o token não carregava *escopo de agente* nem *prova de intenção* — carregava apenas a promessa de que o número não vazaria.

**O que ainda falta.** Falta o elo jurídico. O mandato prova quem autorizou; não diz de quem é o prejuízo quando o agente interpreta mal um escopo válido. No Brasil isso é lacuna declarada; nos EUA está sendo resolvido por exclusão de apólice antes de ser resolvido por lei.

### Raiz B — O preço por requisição: a web deixa de ser gratuita para quem não é humano

**O que rompe.** A web assumia que buscar uma página custa zero para quem busca. A restrição removida é a do **custo de cobrar valores minúsculos**: cobrar US$ 0,002 por requisição era impossível com trilho de cartão. Com liquidação em stablecoin sobre HTTP 402 e, principalmente, com um intermediário de escala aplicando a cobrança no default, passa a ser trivial.

**Por que agora e não há cinco anos.** Duas datas. A Stripe embarcou x402 em 10/02/2026 (Machine Payments), o que tira o micropagamento máquina-a-máquina do nicho cripto. E a Cloudflare mudou o **default** em 15/09/2026: em domínio novo com anúncio, agente é bloqueado salvo configuração em contrário. Mudança de default numa infraestrutura desse tamanho é o limiar — não depende de convencer ninguém, depende de ninguém desmarcar.

**O que ainda falta.** Falta demanda real: metade do movimento do x402 é artificial, e o volume diário de US$ 28 mil é ruído numa economia. Esta é a raiz mais frágil das três e está marcada como tal na seção 7.

### Raiz C — Máquinas operando capital próprio em mercado real

**O que rompe.** A avaliação de modelos era medida em pontos num conjunto de teste, com o dado de avaliação contaminando o dado de treino. A restrição removida é a do **custo de colocar um modelo diante de consequência financeira real**: hoje são uma carteira, uma API e uma bolsa que aceita programa como cliente. O resultado passa a ser medido em dólares, e o placar é público e verificável na cadeia.

**Por que agora e não há cinco anos.** Em 2020 não havia nem modelo que operasse ferramentas com raciocínio explicitado, nem exchange que aceitasse um programa como titular de conta sem intermediário humano, nem carteira endereçável por modelo. A Alpha Arena, em 18/10/2025, é o primeiro caso público com carteira rastreável por modelo e raciocínio publicado a cada operação.

**O que ainda falta.** Falta demonstração de que o resultado é sinal e não ruído: quatro de seis modelos perderam entre 30% e 63% em duas semanas, a Nof1 nunca publicou Season 2, levantou US$ 15 milhões em maio de 2026 e migrou para um produto de consumo. Um episódio de duas semanas em cripto não sustenta conclusão sobre capacidade.

### Candidatas testadas e rejeitadas como raiz

- **"IA que compra por você" (assistente de compras).** Rejeitada: é a promessa, não o limiar. O produto emblemático foi desligado em março de 2026 e as sessões de IA seguem abaixo de 0,2% do tráfego de e-commerce.
- **Comparador de preço e e-commerce.** Maduro. Se sumissem amanhã, seriam substituídos por equivalentes em semanas.
- **Tokenização de cartão.** Madura desde meados dos anos 2010; o que é novo é o *escopo de agente* dentro do token, e isso está na Raiz A.
- **Seguro de responsabilidade de agentes.** Emergente e consequente, não raiz: só existe porque a Raiz A criou trilha auditável para precificar. Entra na roda como efeito de 2ª ordem.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "Credencial de pagamento com escopo e mandato assinado"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A interface de compra deixa de ser uma tela de checkout e passa a ser uma tela de concessão de escopo, onde a pessoa aprova teto, prazo e contrapartes antes de existir qualquer compra."
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "Consolida-se um padrão de interface para orçamento delegado — teto, validade e revogação num só componente — tão convencional quanto o botão de carrinho é hoje."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "O arrependimento de compra se desloca do produto para o mandato, e o desenho do consentimento vira objeto de regulação de defesa do consumidor."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Parte do investimento publicitário migra de convencer a pessoa no instante da compra para entrar na lista de contrapartes autorizadas do mandato, meses antes."
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Surge um mercado de colocação em allowlist, equivalente agêntico da gôndola paga, e com ele a disputa sobre se isso é publicidade, distribuição ou abuso de posição."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A responsabilidade por erro do agente passa a ser alocada por contrato e trilha de auditoria assinada, em vez de presumida do portador do meio de pagamento."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O seguro de responsabilidade de agentes vira linha de produto madura, com underwriting feito sobre a arquitetura do sistema: o que o agente pode tocar, o que faz quando está incerto, se cada ação deixa rastro."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A apólice vira requisito de integração: plataformas exigem cobertura ou score de risco para admitir agente de terceiros, e o custo do seguro decide quais agentes conseguem existir."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: "A observabilidade deixa de ser ferramenta de engenharia e vira peça jurídica, obrigando registro legível por humano do raciocínio que levou à compra."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "A explicação da decisão do agente passa a ser escrita para ser lida numa disputa, e não para depurar, virando um artefato de design com público adversarial."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "O comerciante passa a manter duas superfícies distintas — uma para olhos humanos e outra estruturada para agentes — e a segunda concentra a maior parte da conversão em categorias de reposição."
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O trabalho de marca se parte em dois: identidade visual segue decidindo a descoberta humana, enquanto reputação legível por máquina — estoque, política de devolução, latência de resposta — decide a venda agêntica."
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Categorias de commodity perdem investimento em interface, o reabastecimento vira invisível, e a loja só se desenha para o que ainda se escolhe com o corpo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "Preço por requisição: a web deixa de ser gratuita para quem não é humano"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "O acesso deixa de ser binário entre permitir e bloquear e vira tabela de preços por tipo de agente e por uso, com bloqueio como default para quem não paga."
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "A publicação passa a operar dois modelos de receita simultâneos — audiência humana com anúncio e audiência de máquina com tarifa — e a redação escreve sabendo que o segundo leitor não vê anúncio."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "Aparece conteúdo produzido apenas para consumo de máquina, precificado por citação, que nenhum humano lê, e a métrica de sucesso editorial se parte em duas incomparáveis."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Sites pequenos ficam fora da tabela porque negociação por requisição só compensa em escala, e a intermediação de infraestrutura vira o balcão único que decide quem é visível para agentes."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "A diversidade do que um agente consegue ler encolhe espelhando a concentração da infraestrutura de CDN, sem que nenhuma decisão editorial tenha sido tomada por ninguém."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Cobrar por chamada de ferramenta torna-se viável, e cada ação de um agente passa a ter custo marginal explícito e atribuível."
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O design de interação ganha uma variável nova — quanto custa esta tela pensar — e o orçamento consumido passa a ser exibido ao usuário como a bateria é hoje."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Produtos passam a vender profundidade como item de menu, a mesma pergunta com três preços, e a diferença de resposta entre quem paga mais e quem paga menos vira questão de política pública."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "Máquinas operando capital próprio em mercado real"
    efeitos:
      - id: e6
        ordem: 1
        efeito: "O benchmark medido em dinheiro se espalha para além do trading, e avaliações passam a reportar resultado financeiro em ambiente real em vez de acerto em conjunto de teste."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A comunicação pública sobre capacidade de IA muda de registro, porque quanto o modelo ganhou é mais legível ao leigo do que quantos pontos ele fez, e isso desloca cobertura jornalística e marketing."
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Resultado financeiro de curto prazo, que é majoritariamente ruído, passa a ser lido como prova de inteligência, e ler benchmark criticamente vira tema de alfabetização midiática."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "A arena de máquinas apostando vira gênero de mídia, com placar ao vivo, raciocínio publicado a cada operação e mercado de previsão sobre o desempenho dos modelos."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "O gênero colide com regulação de jogo e de oferta de valores mobiliários, e parte dele migra para capital simulado com prêmio real."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "Agentes com objetivo de preço passam a interagir entre si em mercados de varejo, e o preço muda em cadência que nenhuma pessoa acompanha."
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A exibição de preço deixa de ser um número e vira uma faixa com validade, e a interface passa a comunicar volatilidade onde antes comunicava certeza."
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "O direito do consumidor passa a exigir congelamento de preço por janela mínima, e o preço travado por N minutos vira componente obrigatório de interface."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Autoridades de concorrência passam a auditar prompts e políticas de agentes de preço como hoje auditam acordos, porque o alinhamento supracompetitivo emerge sem comunicação explícita entre as partes."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Heterogeneidade forçada — obrigar diversidade de modelo, horizonte e acesso a dado entre concorrentes — aparece como remédio antitruste, e a escolha de modelo vira decisão jurídica."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz sozinho

**As três raízes não têm o mesmo peso, e o YAML esconde isso.** A Raiz A tem dado de adoção datado (produção em dois países, integração com a OpenAI, primeira transação brasileira). A Raiz B tem uma mudança de default numa infraestrutura enorme, mas demanda real quase inexistente. A Raiz C tem um único episódio público de duas semanas, com resultado majoritariamente negativo e sem continuação. Ler a roda como se os três ramos fossem igualmente sustentados é o erro mais provável de quem só ler o bloco.

**A causalidade de e1 é a menos óbvia e a mais importante.** Ela não deriva de "o agente compra"; deriva de que a prova de autorização passou a ser um documento assinado *antes* da compra. Se a prova é anterior, o momento da decisão humana também é — e a tela que carregava essa decisão perde a função. É por isso que e1 tem `sinal: forte` mesmo com adoção de consumidor baixa: o deslocamento não depende de quantos usam, depende de onde a assinatura está.

**A ligação entre e2 e e2.1 é a mais verificável hoje.** Já existem apólices específicas com capital declarado (US$ 25 mi e US$ 50 mi), exclusões padronizadas desde 01/01/2026, e underwriting descrito exatamente nesses termos — o que o agente pode tocar, o que faz quando está incerto, se deixa rastro. O efeito de 2ª ordem já está começando enquanto o de 1ª ordem ainda está se formando; isso é normal e não é erro de ordenação, é o sinal de que a Raiz A é a mais avançada.

**e7.2 tem número, e o número é desconfortável para os dois lados.** O experimento de conluio mede +22% de sobrepreço entre dois agentes pacientes e homogêneos, mas mostra que heterogeneidade realista derruba para +7% a +10%, que cinco agentes pacientes derrubam para +3% — e que diferença de *tamanho de modelo* (32B contra 14B) paradoxalmente **estabiliza** o conluio em +21%, por dinâmica de líder e seguidor. Ou seja: o mercado real provavelmente protege mais do que o laboratório sugere, exceto no cenário que é justamente o mais realista — poucos fornecedores, modelos de portes diferentes.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — O ataque de free-riding como fato econômico, não só de segurança.** O paper de junho de 2026 documenta bypass de autenticação no x402: consumir o serviço sem pagar de fato. Num mundo onde o agente é a parte contratante, "calote de máquina" deixa de ser incidente e vira categoria de perda a ser precificada — e provavelmente o primeiro lugar onde aparece um score de crédito para agentes.

**Sinal fraco 2 — A tarifa de agente como sinal de qualidade invertido.** A Cloudflare separa *Search* (liberado) de *Agent* e *Training* (bloqueados) em páginas com anúncio. A distinção é frágil na prática: o mesmo crawler faz as três coisas. Se ela não se sustentar tecnicamente, o default vira bloqueio geral, e aí o que é ou não legível por agente passa a ser decidido por quem opera a borda da rede, não por quem publica.

**Sinal fraco 3 — Identidade própria para o agente.** A Febraban já fala em "identidade e credencial próprias" para agentes. É a ponta do fio que leva a personalidade jurídica funcional — não como sujeito de direito, mas como titular de conta, de histórico e de reputação. Rejeitado como raiz por não ter limiar cruzado; é a candidata emergente com mais chance de virar raiz até 2029.

**Emergentes rejeitadas como raiz (ficam no radar):** benchmark financeiro como padrão de avaliação (ainda um caso público único); simulação de empresas por agentes com valuation e falência (pertence ao tema 6, mercados simulados como instrumento de pesquisa); cripto como mecanismo de compromisso comportamental (dinheiro como fricção, não como pagamento — interessante, mas é outro objeto).

**Wildcard — a tarifa agêntica de companhia aérea, ao contrário do esperado.** A hipótese corrente é que alguém lance tarifa mais barata para agente porque agente não liga para o call center. O wildcard de baixa probabilidade e alto impacto é o inverso: **uma grande companhia aérea cobrar mais caro do agente**, porque o agente não tem lealdade, não acumula milhas, não compra assento nem bagagem no upsell e, ao comparar sem atrito, destrói a discriminação de preço que sustenta a margem. Se isso acontecer e pegar, a aposta central da indústria de viagens — a de que o agente traz distribuição barata — se inverte, e o comércio agêntico passa a ser um canal *premium* em vez de um canal de desconto. Impacto de segunda ordem: programas de fidelidade deixam de premiar recompra e passam a premiar **compra feita pelas mãos da pessoa**, transformando "comprar sem agente" em benefício vendável.

**Wildcard 2 — um incidente de perda em massa por mandato mal escopado.** Um erro de interpretação replicado por um agente popular em milhões de mandatos válidos, num fim de semana. Não é fraude, não é invasão: é escopo concedido corretamente e lido de outro jeito. Seria o evento que transforma a apólice de agente de produto de nicho em exigência regulatória — e o único caminho plausível para e2.1.1 chegar antes de 2031.

## 7. Contra o próprio mapa

### Extrapolação linear — o que é só "o presente, só que mais"

**e3 é o efeito mais fraco do mapa e eu o rebaixei.** "O comerciante mantém uma superfície estruturada para máquina" descreve feed de produto, dado estruturado e SEO — que existem há vinte anos. O que muda é grau, não natureza: os números de crescimento citados pelas plataformas (tráfego dirigido por IA multiplicado por 7, pedidos por 11, sessões de IA ainda abaixo de 0,2% do total) são de uma curva já em curso, e nada ali rompe restrição. **Confiança de e3 rebaixada de `alta` para `media`**, e o ramo inteiro e3 → e3.1 → e3.1.1 deve ser lido como tendência acelerada, não como descontinuidade.

**e6.2 (a arena como gênero de mídia) também foi rebaixado**, de `medio` para `sinal: fraco`. A evidência disponível aponta contra: a Nof1 nunca publicou Season 2, e depois de levantar US$ 15 milhões em maio de 2026 migrou para produto de consumo. Um formato que o próprio criador abandonou não sustenta previsão de gênero.

### Velocidade de adoção nunca vista

**e1 em 2028 é o prazo mais agressivo do mapa.** Ele pressupõe que uma nova convenção de consentimento se estabeleça em cerca de dois anos. O caso comparável contradiz: o 3-D Secure foi especificado em 2001 e só teve adoção significativa mais de uma década depois, com a segunda versão; o EMV nos Estados Unidos levou cerca de dez anos e só andou quando uma data de transferência de responsabilidade forçou a mão dos comerciantes. A lição do EMV, aliás, é a mais útil aqui: **o que move adoção de padrão de pagamento não é a interface, é a data em que a responsabilidade muda de lado.** Nenhuma bandeira anunciou essa data para agentes. Por isso e1.1 (a convenção de interface consolidada) está em `confianca: media` e não alta, e o prazo de 2029 deve ser lido como o cenário otimista.

**Contraevidência quantitativa que pesa contra todo o ramo A:** 45% dos consumidores usam IA em parte da jornada de compra, mas apenas 14% dizem confiar numa IA para fazer o pedido, e 95% expressam ao menos uma preocupação. A distância entre "uso para pesquisar" e "autorizo a pagar" é exatamente o que este mapa aposta que se fecha até 2031 — e não há evidência de que esteja se fechando, só de que está sendo endereçada por quem vende a solução.

### Se a disrupção não vingar

**Raiz B (preço por requisição) é a mais provável de não vingar, e o custo disso é alto.** Se o Pay Per Use não sair do estágio em que metade do movimento equivalente é wash trading, e se o bloqueio por padrão for revertido sob pressão de publicadores que perdem referência, então **e4, e5 e seus seis descendentes caem inteiros** — são 8 dos 31 efeitos do mapa. O que sobra nesse cenário não é neutro: o acesso volta a ser binário, a extração por agente continua sem pagamento, e a resposta dos publicadores migra para litígio e paywall duro em vez de tarifa. Ou seja, a mesma pressão encontra outra saída, mais hostil ao agente e mais hostil ao leitor.

**Raiz C (capital nas mãos de modelos) pode ser um episódio, não uma tendência.** Se nenhuma arena com dinheiro real voltar a rodar e o benchmark financeiro não sair do trading, **e6, e7 e seus descendentes — 8 efeitos — perdem sustentação**, com uma exceção importante: e7.2 (auditoria de agentes de preço) sobrevive por outro caminho, porque o conluio algorítmico é objeto de pesquisa com resultado numérico próprio e não depende de arena nenhuma.

**Raiz A é a que menos depende de aposta**, e por isso o mapa inteiro pende para ela. Se ela não vingar, é porque o recuo do Instant Checkout se repetiu em escala — e o cenário seria o retorno do comércio agêntico ao interior de cada aplicativo de marca, sem padrão comum, com o agente reduzido a atalho de navegação. Nesse mundo, nada de 1ª ordem aqui acontece e o tema volta a ser e-commerce.

### Viés do autor

A skill manda perguntar ao usuário, não supor. **A pergunta foi feita no protocolo desta rodada e a resposta registrada foi: viés neutro, tema atribuído pela disciplina (5 de 19, família "Agentes"), não escolhido por afinidade.** Registro honesto da limitação: esta rodada foi executada em modo desassistido, com as respostas da Etapa 0 fornecidas por bloco pré-preenchido, sem interlocutor vivo para confrontar. Isso significa que a pergunta sobre viés não foi de fato conversada, e a resposta "neutro" não foi testada contra nenhuma reação. O viés que **eu** (a máquina) trouxe e consigo nomear é outro e não é o do autor: fontes de fornecedor dominam a cobertura deste tema — Stripe, Google, Visa, Mastercard, Cloudflare publicam sobre produto próprio, e quase todo número de projeção circula sem estudo primário atrás. Compensei isso puxando papers com número próprio (segurança, conluio, seguro) e a única reportagem que mediu o x402 em vez de anunciá-lo; o mapa ainda assim pende para o que os vendedores contam.

**O critério de refutação declarado pelo autor:** mudaria de ideia com evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada. Verificado: a adoção **não** passou da maioria inicial — 0,2% das sessões de e-commerce e 14% de confiança para delegar pedido colocam isto em inovadores/adotantes iniciais, com folga. A segunda hipótese não se confirma para a Raiz A (escopo e prova de intenção não existiam) mas **se confirma parcialmente para a Raiz B**: cobrar por acesso é mais barato, não qualitativamente novo — o que é novo é o default. É a parte mais contestável deste mapa e está assim marcada.

## 8. O que a máquina errou

**1. Entreguei o resultado da Alpha Arena invertido, com número e cifra, e quase o deixei no documento.** A primeira busca devolveu "DeepSeek Chat V3.1: US$ 14.764 de valor de conta, +48% de PnL" como se fosse resultado da competição, e o segundo colocado com +31%. Escrevi isso como fato. Era **um instantâneo de 31/10/2025, no meio da corrida** — o encerramento foi outro: Qwen3 Max +22,3%, DeepSeek +4,89%, e os quatro modelos norte-americanos entre −30,81% e −62,66%. A conclusão se inverteu: de "modelos operando dinheiro real superaram o mercado" para "quatro de seis perderam um terço ou mais do capital em duas semanas". Percebi porque abri uma segunda fonte para confirmar a cifra e as tabelas não batiam — e porque US$ 14.764 é um número específico demais para ser final sem data colada nele. **Lição que vale além deste caso: em competição em andamento, todo número é um instantâneo, e placar sem data de encerramento é sempre placar parcial.**

**2. Tratei contagem de transação como medida de economia.** A busca inicial devolveu "165 milhões de transações e ~US$ 50 milhões em volume acumulado" para o x402 e eu li isso como adoção. A reportagem que mediu o protocolo em vez de anunciá-lo mostra outra coisa: **cerca de metade da atividade é artificial** — self-dealing e wash trading —, o volume diário é de US$ 28 mil e o ticket médio, US$ 0,20. Cento e sessenta e cinco milhões de transações de vinte centavos, metade delas de uma carteira para ela mesma, não é uma economia: é um teste de carga. Se eu tivesse parado na primeira fonte, a Raiz B teria entrado como a mais sólida do mapa em vez da mais frágil.

**3. Construí o esqueleto sobre um produto desligado.** Nas duas primeiras buscas, o Instant Checkout do ChatGPT aparecia como o fato central do comércio agêntico, com parceiros e datas. Só na terceira apareceu que a OpenAI o encerrou em março de 2026. Um mapa ancorado nele teria colocado "o assistente é o balcão" como disrupção-raiz — e a raiz teria morrido seis meses antes da data do documento. **O que corrigiu: procurar deliberadamente o que não funcionou, e não só o que foi anunciado.**

**4. Número redondo que não usei como evidência.** "US$ 3 a 5 trilhões de movimentação global até 2030" aparece em fonte brasileira e em compilação americana, nas duas sem estudo primário atrás. O intervalo é redondo demais e circula por citação cruzada. Está mencionado na seção 3 como o que é — número que circula — e não sustenta nenhum efeito da roda.

**Limitação conhecida do documento, registrada conforme a skill exige:** a Etapa 0 foi respondida por bloco pré-preenchido em execução desassistida, sem interlocutor. Nenhuma pergunta foi negociada; nenhuma resposta foi confrontada. Especificamente, a pergunta sobre viés do autor (Etapa 4, item 4) foi respondida por procuração. Além disso, três fontes relevantes não abriram (403/404) e estão listadas no anexo como não verificadas — a integração Meta Muse + Duffel para reserva de voos (09/09/2026) é a mais importante delas e por isso **não** sustenta nenhum efeito da roda, apesar de ser o caso mais literal de "agente que compra passagem" que apareceu na pesquisa.

## 9. Três cenários para 2031

**Provável.** Em 2031 o mandato assinado tinha virado rotina invisível e ninguém chamava aquilo de comércio agêntico — chamava de "conta com limite". As bandeiras venceram a disputa de padrão, porque já tinham o que os protocolos abertos não tinham: um mecanismo pronto para dizer quem paga o prejuízo. A tela de escopo se consolidou num componente chato e bem resolvido, e a maior parte das pessoas o preenchia uma vez e esquecia — o que deslocou a disputa comercial para dentro da allowlist, longe dos olhos. O pagamento por requisição ficou onde já estava em 2026: entre máquinas de infraestrutura, invisível ao público, com a tarifa de agente virando linha de custo de quem opera IA e não fonte de receita relevante para quem publica. Fora dos grandes, quase nada mudou: o site pequeno seguiu bloqueado por padrão sem nunca ter negociado nada. Os benchmarks financeiros existiram, deram manchete duas vezes por ano e não substituíram nada. E o comércio agêntico ficou concentrado em reposição — o que se compra sem olhar — enquanto tudo que se escolhe com o corpo continuou exigindo uma pessoa.

**Desejável.** Em 2031 a delegação de dinheiro a uma máquina era uma decisão que as pessoas entendiam, e isso não aconteceu sozinho. Aconteceu porque três coisas foram feitas. Primeiro, fixou-se uma **data de transferência de responsabilidade**, como se fez com o EMV: a partir dela, mandato mal escopado passou a ser prejuízo de quem desenhou a tela, não de quem assinou — e as interfaces de consentimento melhoraram em dezoito meses mais do que em cinco anos de boa vontade. Segundo, o rastro do agente virou direito do titular e não ativo da plataforma: qualquer pessoa conseguia ler, em português comum, por que o agente comprou aquilo, e essa leitura foi testada com usuários antes de virar norma. Terceiro, a tarifa de acesso foi desenhada com piso de interoperabilidade, de modo que publicar fora da infraestrutura dominante não significasse ser invisível para máquina. O resultado não foi uma economia de agentes espetacular; foi uma em que o erro tem dono conhecido e a pessoa sabe o que autorizou.

**Indesejável.** Em 2031 quase ninguém entendia o que tinha autorizado. O mandato virou a nova política de privacidade: um documento que todo mundo assina, ninguém lê, e que existe para transferir responsabilidade ao usuário em vez de organizá-la. O seguro resolveu o problema de quem vende, não o de quem compra — a apólice virou requisito para o agente operar, o prêmio virou barreira de entrada, e sobraram três agentes possíveis no mundo, todos dos mesmos grupos que já operavam a infraestrutura de pagamento e a borda da rede. A visibilidade para máquina passou a ser comprada, e o que um agente conseguia ler sobre um assunto era o que alguém tinha pago para que fosse legível. Os preços passaram a se mover em cadência que nenhuma pessoa acompanhava, com faixa larga o bastante para esconder discriminação de preço dentro dela. **O sinal precoce disso, visível bem antes de 2031, é um só e é mensurável hoje: o dia em que o primeiro grande marketplace passar a vender colocação em allowlist de agentes sem declarar que é publicidade.** Quando isso aparecer e não houver reação regulatória em seis meses, este é o cenário em curso.

## 10. O experimento

**A tela de mandato.** Construível hoje, em uma aula.

**O que é.** Uma interface de concessão de escopo — teto de gasto, validade, categorias e lista de contrapartes — atrás da qual roda um agente com credencial real em ambiente de teste (modo sandbox de um processador, ou liquidação em testnet). A pessoa preenche o mandato e o entrega. Em seguida o agente faz três compras: **(a)** uma claramente dentro do escopo; **(b)** uma na borda — mesmo valor total, mas fracionada em duas transações, ou no último minuto da validade; **(c)** uma que explora uma ambiguidade genuína do texto do mandato — "material de escritório" comprando um monitor, "até R$ 200" comprando com frete que estoura o teto. Antes de ver os resultados, cada participante marca, para cada compra, se ela estava autorizada.

**Que pergunta sobre o futuro ele responde.** A pergunta de que todo o ramo A deste mapa depende: **as pessoas conseguem prever o que um mandato autoriza?** Se conseguem, o consentimento delegado é um problema de design já resolvível, e1.1 se consolida rápido e e1.1.1 (regulação do desenho do consentimento) não precisa existir. Se não conseguem — se a taxa de acerto no item (c) for próxima do acaso —, então o mandato está a caminho de virar a nova política de privacidade, e o cenário indesejável ganha uma medida em vez de uma intuição.

**Que tecnologia emergente usa, e por que não dá para fazer com tecnologia madura.** Usa credencial escopada por agente e mandato assinado (AP2 ou equivalente de bandeira, em sandbox). Não dá para fazer com checkout maduro por uma razão estrutural, não de conveniência: **no checkout tradicional não há escopo para delegar.** A unidade de consentimento é a transação individual e a pessoa vê exatamente o que está aprovando, então a pergunta do experimento não existe. O objeto de estudo — a distância entre o que se autorizou e o que se acha que se autorizou — só aparece quando a autorização é anterior à compra e mais larga que ela.

**O que a turma faria em sala.** Quatorze pessoas, três rodadas de vinte minutos. Rodada 1: mandato escrito em linguagem natural livre. Rodada 2: mandato em formulário estruturado com os campos das bandeiras (teto, validade, allowlist, categoria). Rodada 3: o grupo reescreve a interface que errou mais e testa de novo no grupo vizinho. Métricas: acerto por item, tempo de preenchimento, e — a mais reveladora — quantas pessoas **revogam** o mandato depois de ver a compra (c). Sai disso um dado que não existe na literatura consultada: taxa de previsão correta de escopo por formato de interface.

**O que mudaria a opinião do autor.** Se a rodada 2 (formulário estruturado) elevar o acerto no item (c) acima de ~80%, o problema do consentimento delegado é de design e já tem solução conhecida — e1.1.1 sai do mapa e e1 acelera. Se o acerto ficar baixo nos dois formatos, a conclusão é mais dura e vale contra o mapa inteiro: o gargalo do comércio agêntico não é protocolo, nem fraude, nem regulação — é que delegar orçamento é uma tarefa cognitiva que as pessoas não executam bem, e nenhuma quantidade de infraestrutura resolve isso.

## 11. Fontes

Todas abertas e lidas nesta sessão em 18/09/2026, salvo indicação em contrário. Fontes que não abriram estão no anexo, não aqui.

1. `https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol` — Google Cloud, anúncio do AP2 (16/09/2025). Sustenta: os três mandatos como Verifiable Credentials, os 60+ parceiros, e a formulação explícita do problema de responsabilidade. **Confiabilidade:** primária para o desenho do protocolo; é material de fornecedor, então descreve intenção e não adoção.
2. `https://www.pymnts.com/news/artificial-intelligence/2026/visa-and-mastercard-put-tokens-in-charge-of-ai-commerce/` — PYMNTS (17/06/2026). Sustenta: mecânica dos tokens agênticos, papel dos provedores de token como intermediário de confiança, e os dados de confiança do consumidor (45% confortáveis, 95% com ao menos uma preocupação, 50% confiariam mais com proteção clara contra fraude). **Confiabilidade:** imprensa setorial de pagamentos, boa em cronologia; não detalha realocação de chargeback, o que eu queria e não obtive.
3. `https://arxiv.org/pdf/2605.30998` — *Free-Riding the Agentic Web: A Systematic Security Analysis of x402 Payments*, Ling, Huang, Du, Chen, Zhou, Wu, Wang (23/06/2026). Sustenta: TOCTOU, validação incompleta de assinatura EIP-712/EIP-3009, bypass de pagamento. **Confiabilidade:** preprint arXiv, não consta revisão por pares; método declarado e reprodutível.
4. `https://arxiv.org/html/2603.20281` — *On the Fragility of AI Agent Collusion*, Keppo, Li, Tsoukalas, Yuan (30/01/2026; v1 em 25/09/2025). Sustenta todos os números de conluio de preço: +22% homogêneo, +10% e +7% com heterogeneidade, +36%/+11%/+3% com três/quatro/cinco agentes, +21% com portes diferentes de modelo. **Confiabilidade:** a fonte mais forte deste documento — desenho experimental explícito, 100+ execuções, ~2.235 horas de computação, resultados que contrariam a narrativa alarmista que o próprio tema sugere.
5. `https://www.insurancebusinessmag.com/us/news/technology/insurers-face-hidden-ai-liability-as-agent-risks-multiply-582433.aspx` — Insurance Business. Sustenta: 90%+ da exposição em apólices convencionais, exclusões ISO de 01/01/2026, pesquisa Gallagher (1 em 5), cenário de US$ 100 bi. **Confiabilidade:** imprensa setorial de seguro; os números vêm de estudo da AIUC com participação de pesquisadores da Anthropic e da OpenAI, o que é conflito de interesse a declarar.
6. `https://www.pymnts.com/news/ecommerce/2026/shopify-merchants-to-pay-4percent-fee-on-sales-made-through-chatgpt-checkout/` — PYMNTS (26/01/2026). Sustenta: taxa de 4% aos lojistas Shopify, crescimento de 7× em tráfego de IA e 11× em pedidos, gratuidade nos concorrentes (Google AI Mode, Gemini, Copilot). **Confiabilidade:** alta para a taxa; os múltiplos de crescimento são da plataforma e partem de base minúscula.
7. `https://www.digitalcommerce360.com/2026/03/06/openai-shifts-checkout-plans-agentic-commerce-strategy/` — Digital Commerce 360 (06/03/2026). Sustenta: o pivô da OpenAI, a cronologia de apps (Target nov/2025, DoorDash e Instacart dez/2025, The Knot fev/2026) e os motivos declarados (estoque, imposto, preço, assinatura). **Confiabilidade:** boa; não traz número de adoção, e eu procurei.
8. `https://www.nuvei.com/posts/openai-tried-to-checkout-it-couldnt` — Nuvei. Sustenta: o diagnóstico dos quatro elementos ausentes e a comparação de take rate (4% contra 8–15% da Amazon). **Confiabilidade:** material de concorrente no mesmo mercado; usei pela análise, não pelos números.
9. `https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet` — CoinDesk (11/03/2026). Sustenta: US$ 28 mil/dia, ~131 mil transações/dia, ticket de US$ 0,20, pico de 3,8 mi em fevereiro, e **~50% de atividade artificial**. **Confiabilidade:** a fonte mais útil do documento, porque mede em vez de anunciar; imprensa cripto, o que pede cautela, mas aqui o viés esperado seria a favor do protocolo e o texto vai contra.
10. `https://www.iweaver.ai/blog/alpha-arena-ai-trading-season-1-results/` — resultado final da Alpha Arena Season 1 (publicado 04/08/2026). Sustenta o ranking completo: Qwen +22,3%, DeepSeek +4,89%, Claude −30,81%, Grok −45,3%, Gemini −56,71%, GPT-5 −62,66%. **Confiabilidade:** blog secundário, não é a Nof1 — os números batem com o relato independente da fonte 11 para a fase inicial e com a cobertura de que a maioria perdeu, mas seriam mais sólidos se confirmados na fonte primária, que não abri.
11. `https://finance.yahoo.com/news/deepseek-outperforms-ai-rivals-real-093000567.html` — Yahoo Finance, cobertura da Alpha Arena em andamento. Sustenta: desenho do experimento (Hyperliquid, US$ 10 mil por modelo, seis perpétuos, início 18/10/2025, carteiras públicas) e a limitação declarada (sem notícia em tempo real nem dado proprietário). **Confiabilidade:** boa para desenho; **os números de desempenho nesta fonte são parciais e foram descartados** — ver seção 8.
12. `https://stripe.com/newsroom/news/stripe-openai-instant-checkout` — Stripe, lançamento do ACP e do Instant Checkout (29/09/2025). Sustenta: a divisão de papéis entre agente, comerciante e processador, o Shared Payment Token, e os parceiros iniciais. **Confiabilidade:** primária para o protocolo; descreve um produto que foi descontinuado seis meses depois, e não sinaliza isso — é o exemplo vivo do risco de ler anúncio como estado do mundo.
13. `https://www.cloudflare.com/press/press-releases/2026/cloudflare-allows-the-agentic-internet-to-flourish-with-a-simple-philosophy-your-content-your-rules/` — Cloudflare. Sustenta: bloqueio por padrão de *Training* e *Agent* em páginas com anúncio a partir de **15/09/2026**, *Search* liberada, e a transição de Pay Per Crawl para Pay Per Use com Ceramic.ai e You.com. **Confiabilidade:** primária; é o fato mais recente e mais consequente deste mapa, e tem só três dias na data deste documento — o que significa que nenhum efeito dele foi observado ainda.
14. `https://finsidersbrasil.com.br/regulamentacao/avanco-dos-agentes-de-ia-esbarra-na-falta-de-regulamentacao/` — Finsiders Brasil. Sustenta toda a nota sobre o Brasil: primeira transação agêntica em março de 2026, Visa Agentic Ready, Dock/BB/Iniciador, as falas de Bruna Moreira (Dock), Erik Oioli (VBSO) e Eduarda Davidovic (Febraban), R$ 50 bi / R$ 3 bi, 32,1% em teste e 3,6% com autonomia total. **Confiabilidade:** imprensa especializada brasileira, com fontes nomeadas; os percentuais de adoção vêm de pesquisa não identificada no texto.
15. `https://commercetools.com/blog/agentic-commerce-stats-enterprise-guide` — commercetools. Sustenta: projeções de 2030 (Bain, Gartner, Morgan Stanley, McKinsey, J.P. Morgan), 14% de confiança para fazer pedido, sessões de IA abaixo de 0,2% do tráfego, Black Friday 2025 (US$ 14,2 bi globais dirigidos por IA, ~US$ 3 bi nos EUA, ~20% dos pedidos *influenciados*), e os dados de fraude (Visa: +25% em transações maliciosas iniciadas por bot). **Confiabilidade:** compilação de fornecedor de e-commerce; usei os números que são **contra** o interesse de quem publica (0,2%, 14%) com mais confiança do que os que são a favor (as projeções de trilhões). A distinção entre "influenciado por IA" e "executado por agente" é da própria fonte e é a distinção mais importante de todo o levantamento.
16. `https://arxiv.org/abs/2606.05449` — *Insurance of Agentic AI*, Quanyan Zhu (03/06/2026). Sustenta: por que exposição de agente não cabe em categoria tradicional de apólice, e a proposta de arquitetura estratificada com alocação explícita de risco. **Confiabilidade:** preprint de autor único; é argumento conceitual, não dado de mercado, e está usado como tal.
17. `https://arxiv.org/pdf/2606.25876` — *The Web4 Agent Economy: A Large-Scale Empirical Study*, Jin, Wu, Chen, Bao, Yang, Chen (v2, 03/09/2026). Sustenta: existência de estudo empírico em larga escala sobre adoção de MCP, EIP-8004 e x402. **Confiabilidade:** ⚠️ **parcialmente verificada** — a página abriu, mas a extração do PDF não recuperou os números; confirmei tema, autores, data e escopo, e **nenhum número desta fonte foi usado** no documento.

## 12. Anexo — o levantamento bruto

### Buscas executadas, na ordem

1. `x402 payment protocol agentic commerce adoption 2026`
2. `Agentic Commerce Protocol OpenAI Stripe instant checkout merchants 2026`
3. `Visa Intelligent Commerce Mastercard Agent Pay agentic tokens 2026 rollout results`
4. `Nof1 Alpha Arena results LLM trading $10000 real money outcome`
5. `Brasil Banco Central Pix agentes de IA pagamento agêntico 2026 regulamentação`
6. `airlines block AI agents booking agentic travel 2026 Duffel IATA`
7. `insurance for AI agent errors liability agentic commerce underwriting 2026`
8. `"agentic commerce" share of online sales 2026 data consumers purchases through AI agents percentage`
9. `agent-to-agent negotiation pricing algorithmic collusion LLM agents experiment 2026`
10. `Amazon blocks AI shopping agents Cloudflare signed agents pay per crawl 2026`
11. `Google AP2 Agent Payments Protocol mandates verifiable credentials adoption 2026`
12. `"Alpha Arena" Nof1 season 2 2026 results models lost money`
13. `merchants pay fee agentic checkout take rate OpenAI commission agentic commerce 2026`

### Páginas que não abriram — nada delas sustenta o documento

- `https://www.forbes.com/sites/digital-assets/2026/06/07/visa-mastercard-and-coinbase-are-fighting-over-how-ai-agents-pay/` — **403**. Seria a fonte sobre a disputa de padrões entre bandeiras e Coinbase. Perda relevante: a análise de quem fica com a taxa ficou sem fonte própria.
- `https://www.phocuswire.com/news/technology/meta-launches-ai-agent-travel-booking` — **403**.
- `https://www.traveldailynews.com/technology/metas-muse-adds-duffel-for-ai-powered-travel-bookings/` — **403**. **Não verificado:** resultado de busca indica que, a partir de 09/09/2026, usuários do agente Muse da Meta poderiam buscar, reservar, cancelar e gerenciar voos via integração com a Duffel. Se confirmado, é o caso mais literal do tema — agente que compra passagem — e **deveria** aparecer na seção 3. Não aparece porque não consegui abrir nenhuma página que o descrevesse. Quem retomar este mapa: confirme isto primeiro.
- `https://www.business-standard.com/markets/news/ai-bots-auditioning-for-wall-street-trading-are-mostly-losing-money-126050701793_1.html` — **403**. Seria a confirmação independente de que os agentes de trading em geral perdem dinheiro, para além da Alpha Arena.
- `https://www.datawallet.com/crypto/alpha-arena-nof1-ai-explained` — **404**.
- `https://www.euclideanai.com/blog/llm-crypto-trading` — **404**.

### Também citado em busca e não perseguido até a fonte (portanto fora do documento)

- Projeção IDC de que IA agêntica responderia por cerca de um terço das reservas internacionais até o fim da década.
- Parceria Sabre + PayPal + MindTrip (fevereiro de 2026) para o primeiro pipeline de reserva agêntica ponta a ponta em viagens.
- Amazon bloqueando `ChatGPT-User` e `OAI-SearchBot` no robots.txt, além do `GPTBot`, e 47 bots bloqueados no total — apareceu em dois resultados de busca, nenhum aberto. Seria evidência forte de que a Raiz B tem um contramovimento vindo do varejo, e não só da infraestrutura.
- Papers de conluio não abertos: *Mitigating Emergent Collusion in LLM Pricing Agents* (arXiv 2609.13037), *Prompt Optimization Enables Stable Algorithmic Collusion in LLM Agents* (arXiv 2604.17774), *Faithful yet Collusive: Why Chain-of-Thought Monitoring Cannot Detect Collusion in LLM Pricing Agents* (2609.18346). O último é o mais interessante para o tema vizinho de observabilidade: se o monitoramento de cadeia de raciocínio não detecta conluio, e2.2 (o log como peça jurídica) tem um problema sério que este mapa não endereça.
- Armilla AI Liability e AIUC AI Liability: os valores (US$ 25 mi em jan/2026; US$ 50 mi em jul/2025) vieram de resultado de busca, não de página aberta, e por isso estão no texto atribuídos como tais, sem sustentar nenhum efeito sozinhos.
- DeNexus DeRISK UWA Agentic (maio de 2026, Chaucer Group como adotante inicial): agente que faz underwriting. É o espelho invertido do tema — a máquina que precifica risco de máquina — e ficou de fora por falta de espaço e de fonte aberta.

### Efeitos gerados e cortados

- **"Nasce um score de crédito para agentes"** — cortado da roda como efeito de 2ª ordem por falta de qualquer sinal atual; rebaixado para sinal fraco na seção 6, onde entra ligado ao free-riding documentado no paper de segurança. A pergunta de 3ª ordem do enunciado do tema está respondida lá, mas como possibilidade, não como efeito com mecanismo rastreável.
- **"Programas de fidelidade colapsam porque o agente não tem lealdade"** — cortado da roda e promovido a wildcard, invertido: o problema da companhia aérea não é perder a fidelidade, é perder o upsell e a discriminação de preço. A fidelidade é o instrumento, não o objetivo.
- **"Trading de alta frequência reaparece no varejo"** — gerado a partir da pergunta de 2ª ordem do enunciado e **rejeitado**, porque o mecanismo não se sustenta: HFT depende de vantagem de latência sobre a mesma infraestrutura de execução, e compra de varejo não tem execução centralizada nem book. O que sobrevive do raciocínio é e7.1 (preço como faixa com validade), que tem mecanismo, e e7.2 (conluio emergente), que tem número.
- **Um quarto nível de efeito** foi esboçado sob e1.1.1 — "o mandato padronizado por lei vira peça de contrato de adesão e perde função informativa" — e cortado conforme o teto de três níveis do formato. Está aqui porque é exatamente o mecanismo do cenário indesejável da seção 9.
- **Quarta raiz candidata: "responsabilidade precificada"** (o seguro de agentes como disrupção autônoma). Testada e rejeitada: não remove restrição, ela **decorre** da remoção feita pela Raiz A — só é possível segurar o que deixa trilha auditável. Reclassificada como e2.1.

### Contradições encontradas entre fontes, não resolvidas

- **Resultado da Alpha Arena:** instantâneo de 31/10/2025 (DeepSeek +48%) contra encerramento (Qwen +22,3%, DeepSeek +4,89%). Resolvida a favor do encerramento; a divergência está documentada na seção 8. Uma terceira cobertura menciona ainda "o portfólio como um todo perdeu cerca de um terço do capital" e "em 32 conjuntos de resultados, um modelo terminou no lucro apenas seis vezes" — número que não consegui casar com nenhum dos dois rankings e que, por isso, não usei.
- **Volume do x402:** "165 milhões de transações / ~US$ 50 mi acumulados até meados de abril de 2026" e "~130 milhões até maio de 2026" aparecem em resultados de busca — a segunda cifra é **menor** que a primeira num período **posterior**, o que é impossível e indica que pelo menos uma das duas está errada ou mede coisas diferentes. Nenhuma das duas foi usada; usei apenas os números da fonte 9, que abri.
- **Data do fim do Instant Checkout:** "março de 2026" (fontes 7 e 8) e "24 de março de 2026" (resultado de busca não aberto). Adotei "março de 2026".
