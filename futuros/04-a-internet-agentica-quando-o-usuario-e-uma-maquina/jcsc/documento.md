---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: jcsc
zona_de_interesse: Agentes
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 13
efeitos_ordem_3: 16
tecnologias_citadas: [Model Context Protocol, WebMCP, navigator.modelContext, llms.txt, rsl.txt, Really Simple Licensing, Web Bot Auth, HTTP 402, x402, pay-per-crawl, AI Crawl Control, Agent2Agent, Agentic Commerce Protocol, Universal Commerce Protocol, Not Human Search, Foil, Fingerprint, ChatGPT Atlas, Perplexity Comet, AdCP]
fontes: 12
confianca: media
experimento: "Site de duas portas — o mesmo conteúdo publicado como página para gente e como superfície declarada para máquina (WebMCP + servidor MCP + rsl.txt + endpoint tarifado por HTTP 402), medindo o que o agente faz com cada uma"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Até 2031, o visitante majoritário de um site já não é uma pessoa — em junho de 2026 o tráfego automatizado passou de metade das requisições HTML medidas pela Cloudflare —, e a web está sendo reprojetada em três frentes simultâneas: o site passa a **declarar funções chamáveis** para o agente dentro do próprio navegador (WebMCP, aceito no W3C Web ML CG em setembro de 2025 e em preview no Chrome 146 desde fevereiro de 2026); a porta do site passa a **cobrar e a pedir crachá** da máquina (HTTP 402, `rsl.txt`, Web Bot Auth — com a Cloudflare bloqueando por padrão crawlers de Treinamento e de Agente em páginas com anúncio a partir de 15/09/2026); e o agente que navega passa a ser **indistinguível de uma pessoa** no log do servidor, o que quebra de uma vez paywall client-side, analítica e a própria ideia de robots.txt. O mapa é cético em dois pontos que o discurso do setor trata como resolvidos: a camada de protocolo ainda não é padrão (o draft de arquitetura do Web Bot Auth expirou sem adoção por grupo de trabalho da IETF) e a camada de pagamento ainda não tem demanda real (o x402 movimentava cerca de US$ 28 mil por dia em comércio genuíno no início de 2026, com metade da atividade classificada como artificial). O efeito de segunda ordem mais provável não é a web se abrir para máquinas: é ela se **partir em duas**, uma cara e fechada, outra gratuita e sem quem pague por ela — e o que alimenta os agentes ser sistematicamente o que ninguém conseguiu cobrar.

## 2. O tema

A web foi desenhada para olhos. Layout, hierarquia visual, publicidade, medição de audiência, paywall, consentimento de cookie: tudo isso pressupõe um par de olhos de um lado e um servidor do outro, e pressupõe que dá para saber qual é qual. O tema aqui é o que acontece com essa plataforma quando o principal visitante de uma página passa a ser um programa agindo por conta de alguém — e quando o site começa a **publicar para esse programa** em vez de publicar para a pessoa.

Onde isso encosta em mídia e interação: no ponto exato onde uma interface deixa de ser vista. Se o agente lê a página no lugar da pessoa, o objeto de design deixa de ser só a tela e passa a ser também o **contrato de ação** que o site oferece à máquina — o nome da ferramenta, o parâmetro, a mensagem de erro. É interaction design sem interface visível, com um interlocutor que não tem paciência, não tem atenção residual para anúncio e não perdoa ambiguidade de rótulo. E é economia de mídia: a página financiada por impressão publicitária não tem modelo de receita quando quem lê é uma máquina que não vê anúncio e raramente devolve visita.

Por que isto merece um mapa de futuro e não um levantamento de estado da arte: porque o estado da arte já está descrito e é chato — existem protocolos, existem servidores MCP, existe `llms.txt`. O que não está decidido é **quem manda na porta**: se o site se abre para o agente e monetiza o acesso, se ele se fecha e aposta que a audiência humana volta, ou se ele tenta e descobre que não consegue mais distinguir um do outro. Essa bifurcação é estrutural, está acontecendo agora, e as três saídas produzem webs diferentes.

**Registro da entrevista (Etapa 1 da skill).** As cinco perguntas foram feitas e respondidas; nenhuma ficou como "tanto faz". Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o Brasil. Descartes explícitos: o que já é comum em produto de massa (a régua da disciplina), sem nenhuma outra exclusão. Viés: neutro. Modo: partir de uma inovação/tema, não de um setor. Profundidade: três ordens. A transcrição literal está na seção 12.

## 3. Onde isso está hoje

**O tráfego já virou.** Dados do Cloudflare Radar citados em junho de 2026 colocam as requisições automatizadas em **57,5% do tráfego HTML**, contra 42,5% de humanos — a primeira vez que a máquina passa a pessoa. Dentro do tráfego de IA, 51,8% das requisições de crawler são para treinamento e apenas 9,3% para busca [12].

**E a troca é desigual.** A Cloudflare mediu, na semana de 19 a 26 de junho de 2025, a razão entre páginas rastreadas e visitas devolvidas por plataforma de IA. O número da Anthropic naquela janela foi de **70.900 páginas rastreadas para cada visita enviada** [1]. Outros levantamentos, todos posteriores, dão 23.951:1, 11.000:1 e 2.237:1 para a mesma empresa em janelas diferentes — o número é instável, a direção não é (ver seção 8). O estudo *State of the Internet* da Akamai, publicado em abril de 2026 e noticiado no Brasil, mede o mesmo fenômeno pelo outro lado: chatbots geram cerca de **96% menos tráfego de referência** que buscadores tradicionais, e só 1% dos usuários clica na fonte citada [8].

**A camada de protocolo existe e está mudando de forma debaixo de quem a usa.** O Model Context Protocol virou infraestrutura: SDKs de primeira linha somam mais de 1 bilhão de downloads cada e perto de meio bilhão mensais [2]. Mas a especificação de **28/07/2026** reescreveu o núcleo — de protocolo bidirecional com estado para requisição/resposta **sem estado**, com roteamento por cabeçalho HTTP (`Mcp-Method`, `Mcp-Name`), resultados de listagem cacheáveis (`ttlMs`, `cacheScope`), *Multi Round-Trip Requests* no lugar de chamadas iniciadas pelo servidor, depreciação de Dynamic Client Registration em favor de CIMD, e depreciação de Roots, Sampling e Logging com janela mínima de 12 meses [2]. Ou seja: o conector universal está sendo reconstruído para se parecer com o resto da web (cacheável, roteável, escalável) enquanto meio milhão de integrações rodam em cima dele.

**O navegador começou a virar runtime de agente.** O WebMCP — `navigator.modelContext`, a API pela qual a própria página declara ferramentas chamáveis — foi aceito pelo W3C Web Machine Learning Community Group em setembro de 2025 e chegou como *Early Preview* no Chrome 146 em fevereiro de 2026, atrás de flag, com editores do Chrome e do Edge trabalhando juntos. Esta é a única afirmação estrutural do mapa que eu **não consegui confirmar em fonte primária aberta** (ver seções 8 e 11): ela vem de resultados de busca, não de página que eu tenha aberto.

**A porta começou a cobrar.** O *pay-per-crawl* da Cloudflare, lançado em beta privado em 01/07/2025, usa o HTTP 402 — código reservado e nunca usado — para devolver preço ao crawler. Em **01/07/2026** a Cloudflare publicou uma reorganização completa: o tráfego de IA passa a ser classificado em três comportamentos separados — **Search** (indexa para responder depois, devolve visita), **Agent** (atividade em tempo real em nome de um usuário) e **Training** (coleta para treinar modelo) —, cada um com política própria. E a partir de **15/09/2026** os domínios novos entram com um padrão em que **Training e Agent são bloqueados nas páginas que exibem anúncio**, enquanto Search continua liberado; clientes existentes podiam optar por sair antes dessa data [7]. Três dias depois de hoje, portanto, o default da web para uma classe inteira de máquinas muda em um dos maiores pontos de passagem da internet.

**E há um padrão de licenciamento disputando o mesmo espaço.** O RSL (Really Simple Licensing) publica termos de licença legíveis por máquina em XML, referenciados a partir do `robots.txt`, de cabeçalhos HTTP, do HTML, de arquivos de mídia e de feeds RSS. Suporta atribuição (inclusive Creative Commons), assinatura, **pay-per-crawl** e **pay-per-inference** — pagamento quando o conteúdo aparece na resposta, não quando é lido. É apoiado por Akamai, Cloudflare, Creative Commons, Fastly, O'Reilly, Reddit, Vox Media, Yahoo e Ziff Davis, com uma entidade coletiva (RSL Collective) para cobrar em nome de quem não tem como negociar sozinho [9].

**O crachá da máquina ainda não é padrão.** O Web Bot Auth assina requisições com Ed25519 e publica as chaves num diretório JWKS bem-conhecido, para que a identidade do bot seja **verificada** e não inferida. Está em produção na Cloudflare, AWS, Akamai e Vercel. Mas o documento de arquitetura — `draft-meunier-web-bot-auth-architecture-05`, atualizado em 02/03/2026 — é **submissão individual, nunca adotada por grupo de trabalho, e está expirado**, sucedido por `draft-meunier-webbotauth-httpsig-protocol` [3]. Está implantado antes de ser padrão, e mantido em grande parte por quem mais ganha com o desenho.

**O pagamento por requisição existe e quase não tem freguês.** O x402, da Coinbase, usa o mesmo HTTP 402 para pagamento em stablecoin. Os números de março de 2026: cerca de **US$ 28 mil de volume diário**, ~131 mil transações, ticket médio de US$ 0,20 — e, segundo análise da Artemis de fevereiro de 2026, **cerca de metade das transações observadas é atividade artificial** (mesma carteira nas duas pontas, ou vendedor financiando o comprador). Um único dia de fevereiro registrou 3,8 milhões de transações e ~US$ 2 milhões, atribuídos a teste de infraestrutura. A avaliação do ecossistema girava em torno de US$ 7 bilhões — inflada por incluir a Chainlink, que é anterior e serve a outra coisa [4]. A frase da Artemis: *"o boom de pagamentos de agentes do x402 ainda é, em grande medida, uma miragem."*

**A convenção mais adotada é a que ninguém lê.** O `llms.txt` saltou de 4.088 para 36.120 sites entre junho de 2025 e maio de 2026 (dados Originality.ai), um crescimento de 8,8×. Em maio de 2026, análise da Ahrefs sobre logs de servidor de **137 mil domínios** encontrou que **97% dos arquivos `llms.txt` receberam zero requisições**; entre as poucas requisições recebidas, bots de recuperação de IA eram 1,1%. O Google disse publicamente em julho de 2025 que não lê e não pretende ler; a OpenAI não o menciona na documentação de crawler e aponta o `robots.txt`; a Anthropic publica o seu mas não afirma que o Claude lê os de terceiros; a Perplexity é a exceção que diz usá-lo [5].

**Já existe um ranking novo nascendo.** O Not Human Search se apresenta como motor de busca para agentes, com rank orgânico "baseado em prontidão, nunca em pagamento", e pontua sites de 0 a 100 em sinais de prontidão agêntica — **`llms.txt` vale +25, `ai-plugin` vale +20**, além de OpenAPI, Schema.org, MCP e regras de bot no `robots.txt`. Na página inicial, em 12/09/2026, o índice declarava **5.316 sites** [6]. Vale reler as duas últimas frases juntas: o sinal de maior peso no ranking da web agêntica é o arquivo que 97% das vezes nunca é buscado.

**E o agente já passa pela porta como se fosse gente.** Em 30/10/2025 a *Columbia Journalism Review* testou o Atlas (OpenAI) e o Comet (Perplexity) contra um artigo de nove mil palavras exclusivo para assinantes da *MIT Technology Review*: os dois navegadores agênticos entregaram o texto completo, enquanto as interfaces normais do ChatGPT e da Perplexity responderam que não conseguiam acessar, porque a revista bloqueara os crawlers das empresas. As razões são duas, e ambas estruturais: no log do site o Atlas aparece como um Chrome comum, e o paywall da revista é *client-side* — o texto carrega no DOM e só fica escondido atrás de um overlay [11].

**Publicidade.** A previsão da eMarketer de 04/06/2026 põe o gasto com publicidade de IA nos EUA em US$ 32,03 bilhões em 2026 indo a US$ 68,25 bilhões em 2030 — mas **mais de 80% disso fica ao lado da resposta da IA, não dentro dela**; o mercado de anúncio dentro de chatbot é estimado em pouco mais de US$ 5 bilhões só em 2030. O CPM de anúncio do ChatGPT teria saído perto de US$ 60 em fevereiro de 2026 e caído para US$ 25 em nove semanas [10]. Nas palavras do mesmo levantamento: a caixa de resposta não tem camada nativa de anúncio nem trilho de pagamento de volta para as fontes que ela cita — o leilão migrou, a cadeia de valor não.

**Brasil.** Não encontrei, em fonte que eu tenha aberto, dado desagregado do Brasil sobre tráfego de agente ou bloqueio de crawler: o estudo da Akamai noticiado pelo E-Commerce Brasil traz números globais e regionais, sem recorte brasileiro [8]. O que se pode dizer com honestidade é estrutural, não numérico: as decisões que definem a porta (padrão de bloqueio da Cloudflare, política de crawler da OpenAI e da Google, termos do RSL) são tomadas fora do país e chegam como default; e o Brasil tem uma peculiaridade que pesa nos efeitos de terceira ordem — um trilho de pagamento instantâneo público e onipresente (Pix) que, se e quando for exposto a agentes, muda a economia do pagamento por requisição de forma diferente de onde o trilho é privado e caro. Isso é hipótese declarada, não achado; não abri fonte que a sustente.

## 4. As disrupções-raiz

Três, depois do filtro de maturidade da Etapa 2. Os candidatos recusados estão no fim desta seção — a recusa é evidência de que o critério foi aplicado, não citado.

### Disrupção-raiz 1 — O site declara funções chamáveis para a máquina dentro do próprio navegador

**O que rompe.** A unidade de publicação da web deixa de ser a *página* e passa a ser o *catálogo de ações*. Hoje o agente que quer comprar uma passagem lê HTML, adivinha seletor CSS e clica. Com WebMCP (`navigator.modelContext`) o site diz, em estrutura: "eu sei fazer `buscar_voo(origem, destino, data)` e `reservar(id, passageiro)`". Isso rompe com trinta anos de pressuposto de que a interface *é* o contrato — o contrato passa a ser declarado ao lado dela, e o design da coisa declarada vira trabalho de interaction design, não de back-end.

**Por que agora e não há cinco anos.** Porque faltavam as duas pontas. Do lado do agente, faltava um modelo que soubesse escolher e encadear ferramenta — o que só ficou confiável o bastante para produção com a geração de modelos de 2025-2026. Do lado do site, faltava um lugar padronizado para declarar: o MCP resolveu isso para o servidor (e virou infraestrutura), e o WebMCP é a tentativa de resolver dentro do navegador, onde já estão a sessão, o login e o cookie da pessoa. O aceite no W3C Web ML CG em setembro de 2025 e o preview no Chrome 146 em fevereiro de 2026 são o marco: antes disso, "expor ferramenta para agente" era decisão de cada site; agora é candidato a primitiva da plataforma.

**O que ainda falta.** Envio estável nos dois navegadores que co-editam a especificação; um modelo de permissão que responda "quem pode chamar o quê, em nome de quem, com que limite"; e — o mais difícil — uma razão comercial para o site investir. Declarar ferramenta é ajudar o agente a não ler a página; quem vive de impressão publicitária está pagando para perder receita.

### Disrupção-raiz 2 — A porta da web passa a cobrar e a pedir crachá da máquina

**O que rompe.** O default da web para programas sempre foi "aberto, salvo proibição explícita no `robots.txt`" — e a proibição sempre foi um pedido, não uma tranca. O que está sendo construído inverte as duas coisas: bloqueio por padrão para certas classes de máquina, preço expresso em HTTP 402, termos de licença legíveis por máquina em `rsl.txt` e identidade criptográfica do bot via Web Bot Auth. Rompe com a gratuidade estrutural que fez a web ser rastreável — e portanto buscável, e portanto navegável.

**Por que agora e não há cinco anos.** Porque a assimetria ficou grande demais para ser absorvida. Enquanto a razão rastreio/visita ficou perto de 5:1, como na busca tradicional, o crawler pagava pelo que consumia em audiência devolvida. Quando ela vai para as ordens de milhar [1] e o tráfego de referência de chatbot fica abaixo de 1% do total, o negócio deixa de fechar — e quem opera a infraestrutura (Cloudflare, Akamai, Fastly) tem posição, incentivo e alcance para mudar o default de milhões de sites de uma vez. A data é concreta: 15/09/2026 [7].

**O que ainda falta.** Três coisas, e nenhuma é pequena. (a) **Padrão de verdade**: o documento de arquitetura do Web Bot Auth está expirado e nunca foi adotado por grupo de trabalho da IETF [3] — o que está em produção é implementação de fornecedor, com formato de cabeçalho mudando entre revisões. (b) **Demanda**: o x402 existe, funciona, e move cerca de US$ 28 mil por dia de comércio real com metade da atividade sendo artificial [4] — não há, hoje, fila de agentes querendo pagar por conteúdo. (c) **Uma unidade de cobrança que faça sentido**: a própria Cloudflare declarou em julho de 2026 que cobrar por rastreio é insuficiente e propôs pagar por aparição na resposta — o que é a mesma direção do `pay-per-inference` do RSL [9], e é muito mais difícil de auditar, porque quem mede é quem paga.

### Disrupção-raiz 3 — O agente que navega como gente: a distinção entre visitante humano e máquina deixa de ser observável

**O que rompe.** Rompe o pressuposto sobre o qual está construída toda a governança da web: o de que o servidor sabe com quem está falando. `robots.txt` só funciona se o bot se identificar. Paywall só funciona se o conteúdo não estiver no DOM de quem não pagou. Analítica só funciona se sessão for pessoa. Publicidade só se vende se impressão for olho. Anúncio de consentimento de cookie só faz sentido se houver alguém para consentir. Um navegador agêntico que se apresenta como Chrome e lê o texto antes de o overlay cobri-lo desliga as quatro coisas ao mesmo tempo [11].

**Por que agora e não há cinco anos.** Porque o agente saiu do servidor e entrou no navegador do usuário. Um crawler roda em datacenter, com faixa de IP conhecida e user-agent declarado — dava para governar. Um agente que roda dentro do navegador da pessoa, com a sessão da pessoa, o cookie da pessoa e o IP residencial da pessoa, é literalmente a pessoa, do ponto de vista do servidor. Atlas e Comet existem desde o segundo semestre de 2025; a Cloudflare reconheceu "Agent" como categoria operacional distinta de "Search" e "Training" em julho de 2026 [7], o que é o sinal de que o problema virou produto.

**O que ainda falta.** A bifurcação: ou vence a **identidade declarada** (o agente assina, o site confere, e quem não assina é degradado — caminho do Web Bot Auth) ou vence a **detecção inferida** (fingerprint de dispositivo, análise comportamental, corrida armamentista — caminho do Foil e da Fingerprint). As duas estão sendo construídas em paralelo, e produzem webs muito diferentes: a primeira cria um cartório de agentes; a segunda cria uma vigilância que não distingue máquina de pessoa atípica.

### Candidatos cogitados e descartados

**Descartados pelo critério de maturidade da Etapa 2** (padrão de mercado consolidado, adotado pelos líderes, sem debate real e atual de substituição no horizonte):

- **APIs REST, OpenAPI/Swagger, SDKs e scraping.** A própria régua da disciplina já os põe do lado maduro, e concordo: são o presente, não o futuro. Um agente que consome API REST documentada não está fazendo nada estruturalmente novo.
- **O Model Context Protocol como conector servidor-a-modelo.** Este é o descarte mais discutível do mapa, e o registro é deliberado. Argumento para descartar: adotado por OpenAI, Google DeepMind, Microsoft e Anthropic; doado à Agentic AI Foundation sob a Linux Foundation em dezembro de 2025 com AWS, Google, Microsoft, Cloudflare, GitHub e Bloomberg como apoiadores; SDKs com mais de 1 bilhão de downloads acumulados cada [2]. Adoção pelos líderes: plena. Debate sobre substituição: não há — ninguém propõe trocar o MCP por outra coisa. **Logo, pelo critério literal, é maduro: virou infraestrutura em menos de dois anos.** Contra-argumento honesto: a especificação de 28/07/2026 reescreveu o núcleo do protocolo (stateful → stateless) e depreciou três primitivas [2], o que é debate técnico real sobre a *forma*, ainda que não sobre a *existência*. Decidi que debate sobre a forma de um incumbente incontestado é sinal de maturação, não de disrupção — é o que acontece com HTTP, não o que acontece com uma tecnologia emergente. O MCP entra no mapa como **condição de possibilidade** das três disrupções, não como disrupção.
- **`robots.txt` como convenção de acesso.** Trinta anos, universal, sem substituto proposto. O que é emergente não é o arquivo: é o `rsl.txt` referenciado a partir dele e o 402 devolvido apesar dele.
- **RAG, embeddings e busca vetorial.** Commodity de 2023-2024; não rompem nada aqui.

**Descartado por outro critério — não por maturidade, mas por falta de consumidor:** o **`llms.txt`**. Ele não é maduro; é o contrário. É uma convenção com adoção editorial alta e crescendo 8,8× ao ano, e **consumo praticamente zero**: 97% dos arquivos sem nenhuma requisição em maio de 2026, num universo de 137 mil domínios [5]. Não entra como disrupção-raiz porque uma disrupção precisa de alguém do outro lado da linha. Entra no mapa como **objeto de estudo** — é o caso exemplar de um sinal barato de produzir e barato de medir virando métrica antes de ter utilidade demonstrada (efeito `e7.1`), e é a peça que mais me faz desconfiar do otimismo geral sobre "prontidão agêntica".

**Descartados por fronteira de tema, não por maturidade** (registrados para o cruzamento entre mapas da turma): identidade, detecção e contenção de agente como problema de **segurança** são o tema 2; pagamento e comércio agêntico — ACP da OpenAI/Stripe, UCP da Google/Shopify — são o tema 5. Eles aparecem aqui só onde tocam a web como plataforma: o crachá como condição de acesso (`e5.2`) e o 402 como preço de porta (`e3`), não como meio de pagamento em si.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O site declara funções chamáveis para a máquina dentro do próprio navegador (WebMCP / navigator.modelContext)
    efeitos:
      - id: e1
        ordem: 1
        efeito: A página deixa de ser a unidade de publicação e o site passa a publicar um catálogo de ações chamáveis ao lado do HTML
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O design de interação ganha um segundo destinatário e nome de ferramenta, parâmetro e mensagem de erro viram elementos de interface
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A redação de ferramenta vira especialidade e ocupa o lugar que o microcopy e o title tag ocuparam no SEO
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: Sistemas de design passam a versionar tokens de ação junto com tokens visuais
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A avaliação de usabilidade passa a medir taxa de conclusão do agente como métrica própria, separada da taxa humana
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Conversão humana e conversão agêntica são reportadas em separado e otimizar uma passa a piorar a outra
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O custo de contexto vira critério de arquitetura porque expor ação estruturada é mais barato para o agente do que ler a página inteira
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Sites pesados de JavaScript perdem posição não por lentidão para a pessoa mas por custo de token para a máquina
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Volta a haver incentivo econômico para HTML semântico, vindo de fora do campo da acessibilidade
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A camada de ferramentas declaradas do site vira superfície de ataque e objeto de governança de permissão
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Limite de taxa e escopo de permissão passam a ser parte do design da interface pública e não só da API interna
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A porta da web passa a cobrar e a pedir crachá da máquina (HTTP 402, rsl.txt, Web Bot Auth, bloqueio por padrão)
    efeitos:
      - id: e3
        ordem: 1
        efeito: O padrão de acesso de máquina inverte de aberto salvo proibição para bloqueado ou tarifado salvo acordo
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Consolida-se uma camada de intermediação que negocia acesso em nome de milhões de sites que nunca negociariam sozinhos
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O poder de decidir quem lê a web migra de quem publica para quem serve a publicação
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: Autoridades de concorrência passam a tratar o controle de acesso a conteúdo por infraestrutura privada como questão regulatória
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Conteúdo sem valor comercial direto segue aberto e gratuito enquanto o conteúdo comercial se fecha atrás de preço
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: O corpus que alimenta os agentes fica enviesado para o que ninguém conseguiu cobrar
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e3.3
            ordem: 2
            efeito: O preço de acesso por máquina vira dado comparável entre sites e nasce um mercado de arbitragem de fontes
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.3.1
                ordem: 3
                efeito: O agente escolhe a fonte pelo custo e não pela qualidade sempre que não houver um sinal de qualidade barato de ler
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A remuneração de conteúdo se desloca da impressão publicitária para o acesso e a citação, mas só onde existe quem pague
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Sites cujo modelo é impressão publicitária ficam sem receita correspondente à leitura feita por máquina
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Assinatura, evento e serviço crescem como receita editorial e o volume de conteúdo aberto encolhe
                sinal: medio
                prazo: 2031
                confianca: baixa
  - disrupcao: O agente navega como gente e a distinção entre visitante humano e máquina deixa de ser observável
    efeitos:
      - id: e5
        ordem: 1
        efeito: O log do servidor deixa de distinguir pessoa de máquina e toda regra baseada em user-agent perde eficácia
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A analítica de produto perde a base porque sessão, funil e teste A/B passam a misturar dois tipos de visitante
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Métricas de audiência usadas para vender publicidade perdem auditabilidade e passam a ser contestadas comercialmente
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O site passa a exigir crachá criptográfico do agente para dar acesso bom e a degradar deliberadamente quem não assina
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Assinar vira condição de existir como agente e quem emite as chaves vira ponto de controle da web agêntica
                sinal: medio
                prazo: 2031
                confianca: baixa
              - id: e5.2.2
                ordem: 3
                efeito: Agente pessoal construído por um indivíduo fica fora do circuito e a autonomia do usuário passa a depender de um fornecedor credenciado
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.3
            ordem: 2
            efeito: Defesa antifraude e defesa antiagente se fundem num mesmo produto de detecção comportamental
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.3.1
                ordem: 3
                efeito: Acessibilidade e detecção de bot entram em conflito direto porque o mesmo sinal que denuncia máquina denuncia leitor de tela e automação legítima
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O paywall client-side morre como mecanismo porque o conteúdo já está no DOM antes de ser coberto
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A publicação migra para entrega autenticada no servidor e o link que sempre abriu deixa de abrir
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A URL enfraquece como endereço público estável porque o mesmo endereço devolve coisas diferentes conforme quem pede
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Surge um índice de prontidão agêntica disputando o papel que o PageRank teve na web humana
        sinal: fraco
        prazo: 2028
        confianca: baixa
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O sinal mais barato de medir vira proxy de qualidade e é otimizado sem relação com utilidade real
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O ciclo do SEO se repete em escala menor e mais rápida porque a métrica é gamificada antes de ter sido validada
                sinal: medio
                prazo: 2031
                confianca: baixa
```

**O que o bloco não consegue dizer.**

*A cadeia continuaria.* O corte em três níveis é regra da skill e do formato, não do método — Glenn nunca fixou profundidade. Três ramos claramente continuariam se houvesse um quarto nível, e vale registrá-los em prosa em vez de inventá-los no YAML: (a) de `e3.2.1` — corpus enviesado para o que ninguém cobrou — sairia o efeito de que os agentes passam a saber muito sobre software livre, fórum técnico e documentação, e pouco sobre jornalismo pago e pesquisa fechada, o que realimenta a qualidade da resposta e portanto a disposição de pagar pelo agente; (b) de `e5.2.1` — cartório de agentes — sairia uma disputa de jurisdição sobre quem credencia agente, do mesmo tipo que houve com autoridade certificadora, com a diferença de que agora o credenciado age no mundo; (c) de `e6.1.1` — a URL deixando de ser endereço estável — sairia a corrosão da citabilidade da web, o que atinge arquivo, pesquisa acadêmica e a própria possibilidade de conferir uma fonte, inclusive as deste documento.

*A roda não diz o que é simultâneo.* Os três ramos não são independentes: `e3` (a porta cobra) e `e5` (não dá para saber quem é) se contradizem operacionalmente. Não se cobra de quem não se identifica. Ou a disrupção 2 depende da 3 ser resolvida no sentido do crachá, ou ela se resolve no sentido pior: cobra-se de quem se identifica honestamente e se deixa passar de graça quem se disfarça — o que **pune a franqueza** e é, hoje, o desenho vigente. Este é o achado que eu não esperava ao começar o mapa.

*A roda não diz onde os efeitos já começaram.* `e5` e `e6` não são previsões: são descrições do que a CJR mediu em outubro de 2025 [11]. Estão na roda como efeitos de primeira ordem porque suas consequências ainda não se realizaram, mas a causa já é presente. Ver seção 7.

*A roda não pesa.* Ela ramifica; não prioriza. Se fosse para monitorar um único efeito, seria `e3.2` — quem fica de fora do mercado de acesso —, porque é ele que decide se a web agêntica herda a web aberta ou só a parte dela que não tinha preço.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o ranking já existe e já está errado.** O Not Human Search dá 25 dos 100 pontos de prontidão agêntica ao `llms.txt` [6], arquivo que 97% das vezes não é requisitado por ninguém [5]. Não é um erro do Not Human Search: é o comportamento esperado de qualquer ranking novo, que começa medindo o que é barato de medir. O sinal fraco não é o ranking existir — é ele nascer já descolado do consumo real, o que dá a data aproximada em que a otimização para agente vira indústria sem base empírica.

**Sinal fraco 2 — o padrão que roda em produção sem ser padrão.** O Web Bot Auth está gateando tráfego na Cloudflare, AWS, Akamai e Vercel com um documento de arquitetura expirado e nunca adotado por grupo de trabalho [3]. Isso é a inversão da ordem histórica da web (padrão primeiro, implementação depois) e diz quem está escrevendo as regras: quem já opera a porta. O sinal a monitorar é se algum WG da IETF adota o trabalho até 2028 — se não adotar, o "padrão" da identidade de máquina será, de fato, a configuração de três empresas.

**Sinal fraco 3 — a unidade de cobrança mudou de nome no meio do caminho.** Em 01/07/2025 a Cloudflare lançou pagamento **por rastreio**; em 01/07/2026, exatamente um ano depois, declarou que rastreio é a unidade errada e propôs pagamento **por aparição na resposta** — que é a mesma unidade do `pay-per-inference` do RSL [9]. Ninguém sabe medir isso de fora. O sinal fraco é a emergência de um problema de auditoria: quem verifica que o conteúdo apareceu na resposta é exatamente quem teria de pagar por isso.

**Sinal fraco 4 — o `robots.txt` está sendo carregado de semântica que ele não suporta.** Ele virou ponto de ancoragem do RSL, ponto de referência da OpenAI para quem pergunta por `llms.txt`, e critério de pontuação do Not Human Search. Um arquivo de texto sem autenticação, sem versionamento e sem valor jurídico claro está sendo usado como registro de licença comercial. Alguma coisa vai ceder aí.

**Sinal fraco 5 — o preço do anúncio dentro da resposta caiu 58% em nove semanas.** De ~US$ 60 para US$ 25 de CPM entre fevereiro e abril de 2026 [10]. Se a tendência se mantiver, o modelo "anúncio dentro da resposta do agente" não substitui a receita da página que ele leu — o que empurra `e4.1` mais rápido do que a roda supõe.

**Wildcard A (baixa probabilidade, alto impacto) — um grande portal bloqueia todos os agentes e a audiência não nota.** Se um site de audiência massiva fechar a porta para máquinas e os números humanos não se mexerem em três meses, o argumento inteiro do "tráfego de agente é o futuro da distribuição" perde o chão, e a bifurcação se resolve pelo lado do fechamento — não por ideologia, por planilha. Mudaria o mapa inteiro: `e1` e `e2` (declarar ferramenta) perderiam a razão comercial, e `e3` viraria regra em vez de tendência. É o wildcard mais barato de testar e o que ninguém publica quando testa.

**Wildcard B — um navegador embute um agente de série e o fim da distinção vira irreversível.** Não é que o agente se disfarce de Chrome: é que o Chrome *é* o agente, para todos os 3 bilhões de instalações. Qualquer defesa baseada em distinguir humano de máquina passa a ter que distinguir "pessoa usando o navegador" de "pessoa pedindo ao navegador" — dentro do mesmo processo, com a mesma sessão. `e5.2` (crachá) fica impossível de aplicar sem quebrar a web para pessoas reais.

**Wildcard C — decisão judicial ou regulatória equipara leitura por agente a leitura por pessoa.** Se um tribunal relevante decidir que o agente lendo em nome de um assinante é o assinante lendo, todo o edifício de `e3` desaba: não se pode cobrar duas vezes pelo mesmo acesso. O inverso também é wildcard — se decidir que é reprodução, o `pay-per-inference` do RSL vira obrigação legal e não acordo comercial.

**Wildcard D — o protocolo muda de novo.** O MCP reescreveu seu núcleo em julho de 2026 [2]. Se o WebMCP não estabilizar nos dois navegadores até 2028, ou se um terceiro desenho aparecer vindo de quem tem distribuição, todo o ramo da disrupção 1 escorrega para depois do horizonte deste mapa.

## 7. Contra o próprio mapa

Esta seção é a Etapa 4 da skill, e ela é auditável: cada rebaixamento de confiança está registrado com o valor **original antes** do rebaixamento.

### Rebaixamentos aplicados

| efeito | confiança original | depois | por quê |
|---|---|---|---|
| `e3` | **alta** | media | Extrapolei "o padrão de acesso da web inverte" a partir de uma mudança de configuração que, lida com cuidado, é bem mais estreita: vale para **domínios novos**, apenas nas **páginas que exibem anúncio**, num **único** provedor de infraestrutura, com opção de saída [7]. É uma inversão de default de um fornecedor, não da web. |
| `e1` | **alta** | media | Assumi que uma API aceita em Community Group e em preview atrás de flag chega a envio estável nos dois navegadores e é adotada pelos sites até 2028. Padrões de navegador levam rotineiramente de cinco a dez anos entre proposta e uso majoritário, e alguns simplesmente não chegam. Não tenho caso comparável que justifique velocidade maior. |
| `e4.1` | **alta** | media | O efeito é real e já medido, mas eu havia embutido nele uma conclusão que os dados não sustentam: que a receita *desaparece*. Publishers grandes perderam 22% de referência, pequenos até 60% — é dano severo, não colapso, e a distribuição do dano é desigual de um jeito que a frase "ficam sem receita" apaga. |
| `e6` | **alta** | media | Trata "paywall client-side" como se fosse o paywall dominante. Não sei que fração dos paywalls é client-side, e não achei fonte que diga. O teste da CJR cobre dois veículos [11]. A morte do mecanismo é certa; o tamanho do mecanismo, não. |
| `e5.2` | **media** | baixa | Pressupõe que o ecossistema converge para identidade declarada. Hoje ele está dividido entre declarar (Web Bot Auth) e detectar (fingerprint comportamental), com o padrão do primeiro caminho expirado na IETF [3]. Apostar no vencedor de uma disputa em aberto não merece confiança média. |

### Qual efeito é só extrapolação linear do presente

`e4.1` e `e5.1`. Os dois são a reta que já está desenhada: a curva de referência caindo e a analítica se contaminando já estão acontecendo e não exigem nenhuma ruptura nova para continuar. `e5` e `e6` são pior que extrapolação — são **descrição**: a CJR mediu em outubro de 2025 [11] o que o mapa lista como efeito de primeira ordem com prazo 2027. Mantive-os na roda porque as consequências deles não se realizaram, mas quem ler a roda como previsão vai estar lendo presente disfarçado de futuro. É o mesmo erro que a skill me manda caçar, cometido por mim.

### Qual efeito assume velocidade de adoção sem precedente

`e1` e toda a sua cadeia. O ramo inteiro da disrupção 1 depende de sites **investirem trabalho** em declarar ferramentas cujo benefício direto é ajudar o agente a não ler a página que financia o site. Não conheço caso comparável de adoção voluntária e rápida de uma marcação estrutural sem incentivo econômico claro: dados estruturados do schema.org levaram anos e só andaram quando o Google passou a dar rich snippet em troca; a acessibilidade semântica, com força de lei em vários países, ainda não é universal; e o `llms.txt`, que é a coisa mais barata possível de adotar, foi adotado por ~10% dos sites e ignorado por quem consumiria [5]. `e1` em 2028 assume um comportamento que a evidência disponível contradiz.

### Qual disrupção pode simplesmente não se concretizar, e o que aconteceria com o mapa

**A disrupção 2 é a mais frágil, e não pelo lado técnico.** O técnico está pronto: 402 existe, RSL existe, Web Bot Auth roda em produção. O que pode não existir é **freguês**. O x402 é a evidência mais dura contra o próprio mapa: um protocolo de pagamento por requisição, com Coinbase, Google, Stripe, AWS, Visa e Mastercard na fundação, movimentando cerca de US$ 28 mil por dia de comércio real com metade da atividade sendo auto-negociação e lavagem [4]. Se pagar por acesso não pegar, a disrupção 2 se resolve pelo lado do **bloqueio puro** — a porta fecha e não abre com moeda. Nesse mundo, `e3.1`, `e3.3` e `e4` caem inteiros; `e3.2` fica ainda mais forte (a web se parte de todo modo, só que sem mercado); e a disrupção 1 perde metade do sentido, porque declarar ferramenta para um agente que não pode pagar nem ser cobrado é caridade.

**A disrupção 1 também pode não acontecer, e de um jeito específico:** o WebMCP pode ser adotado só por quem já queria ser lido por máquina — SaaS, documentação, e-commerce grande — e ignorado por todo o resto, virando um recurso de nicho em vez de primitiva da plataforma. O mapa continua de pé, mas com um ramo inteiro rebaixado a "uma boa prática de B2B".

### Que viés entrou aqui

Três, e vale nomear todos.

O primeiro é de **fonte**. Boa parte do que se publica sobre "prontidão agêntica" é marketing de conteúdo de empresas que vendem otimização para IA — literalmente SEO escrevendo sobre o fim do SEO. Essas fontes têm incentivo estrutural em afirmar que a mudança é grande, urgente e exige contratar alguém. Reduzi o dano usando-as apenas quando citam estudo nomeado (Ahrefs, Originality.ai, eMarketer) e dizendo de onde veio o número, mas o viés não foi eliminado: ele está no que eu *encontrei*, porque é esse material que domina os resultados de busca sobre o tema.

O segundo é de **provedor**. Os dados mais fortes deste mapa — razão rastreio/visita, participação do tráfego automatizado, categorias de bot — vêm da Cloudflare [1][7][12], que é ao mesmo tempo a maior fonte de medição e uma parte interessada: ela vende a solução para o problema que mede. Não tenho medição independente de escala comparável para confrontar. Isso é uma dependência estrutural do mapa, não um detalhe.

O terceiro é **meu**, e é o mais difícil de corrigir. Escolhi o tema por interesse em agentes, e agentes são a minha zona de interesse declarada na disciplina — quem estuda agentes tende a ver o mundo se reorganizando em torno de agentes. Um mapa escrito por alguém da zona "mídia e jornalismo" provavelmente teria posto `e4.1` como disrupção-raiz, não como efeito de segunda ordem, e teria tratado o protocolo como detalhe de implementação. Os dois mapas seriam defensáveis. Este é o meu, com o viés que vem junto.

### O que me faria mudar de ideia

Foi declarado antes de começar, e cumpro registrá-lo: (a) evidência de que a adoção já passou da maioria inicial na curva de Rogers — e, pelos dados que encontrei, não passou: 10% de adoção de `llms.txt` com 97% de não-consumo [5], WebMCP atrás de flag, x402 com volume real de brinquedo [4] são números de inovadores e primeiros adotantes, não de maioria inicial; (b) evidência de que a tecnologia não rompe nada — e aqui há um caso parcial contra mim: se o WebMCP for apenas "OpenAPI dentro do navegador", ele é melhoria, não ruptura. Mantive-o como disrupção porque o que ele muda não é o formato da chamada e sim **quem é o destinatário do design**, mas reconheço que essa é uma leitura, não um fato.

## 8. O que a máquina errou

Cinco itens concretos desta rodada, com o motivo da desconfiança.

**1. A razão rastreio/visita é citada como se fosse um número, e são quatro números incompatíveis.** Comecei aceitando "ClaudeBot rastreia 23.951 páginas por visita devolvida", que aparece em resultado de busca e é repetido em vários textos [12]. Ao abrir a fonte primária — o próprio blog da Cloudflare sobre o Radar — o número reportado para a Anthropic na semana de 19 a 26/06/2025 era **70.900:1** [1]. Outra análise citava 11.000:1 em meados de 2026 [10], e outra ainda 2.237:1 em julho de 2026. São quatro valores para a mesma métrica e a mesma empresa, com uma ordem de grandeza de diferença entre os extremos. Não consegui reconciliar: as janelas são diferentes, as definições de "referral" provavelmente também, e ninguém publica a metodologia ao lado do número. **Corrigi o corpo do documento para citar a janela e a fonte de cada número e para não usar nenhum deles como base de cálculo.** A direção — extração muito maior que devolução — é robusta; o número não é.

**2. Repeti o tamanho do índice do Not Human Search sem conferir.** O enunciado do tema fala em "9.000+ ferramentas e APIs"; o repositório no GitHub diz "8,000+ indexed sites"; a página inicial do serviço, aberta em 12/09/2026, mostrava **5.316 sites** [6]. Usei o número que li na página e registrei os outros aqui. O erro teria sido silencioso e simpático — um número maior torna a história mais impressionante.

**3. Quase chamei o Web Bot Auth de padrão da IETF.** É a descrição que circula em praticamente todo texto sobre o assunto ("novo padrão da Cloudflare e da IETF"). Ao abrir o datatracker, `draft-meunier-web-bot-auth-architecture-05` é **submissão individual, nunca adotada por grupo de trabalho, atualizada em 02/03/2026 e expirada**, sucedida por outro draft [3]. "Rodando em produção na Cloudflare, AWS, Akamai e Vercel" e "padrão da IETF" são afirmações muito diferentes, e a segunda é falsa. Esse erro mudaria a leitura de uma disrupção inteira — é a diferença entre "a identidade de máquina está resolvida" e "três empresas estão decidindo a identidade de máquina".

**4. Deixei de fora um número que não consegui verificar.** "Publishers enviam mais de 1 bilhão de respostas HTTP 402 por dia na rede da Cloudflare" aparece em blog secundário e é uma estatística excelente para o argumento — grande, redonda e conveniente. Não a encontrei em nenhuma fonte da própria Cloudflare que eu tenha aberto. **Não entrou no corpo do documento.** Fica registrada aqui como afirmação não verificada.

**5. O WebMCP sustenta uma disrupção-raiz inteira e eu não abri fonte primária sobre ele.** As datas que uso — aceite no W3C Web ML CG em setembro de 2025, preview no Chrome 146 em fevereiro de 2026, envio estável mirado no segundo semestre de 2026 — vêm de resultados de busca convergentes, não de página que eu tenha carregado. Os textos concordam entre si, o que é fraco: podem estar todos copiando a mesma origem. **Declaro a fragilidade em vez de listar como fonte lida.** Quem for verificar este mapa deveria começar por aqui, no repositório da especificação e no changelog do Chrome.

Um item que **não** é erro meu, mas é erro de leitura que o mapa poderia induzir: a especificação MCP de 28/07/2026 é descrita em alguns lugares como "MCP 2.0". Ela não se chama assim; a numeração é por data, e o que houve foi uma reescrita do núcleo com política formal de depreciação de doze meses [2].

## 9. Três cenários para 2031

**Provável — a web de duas portas, com uma delas escondida.** Chegamos a 2031 e a web não se partiu em duas: ela ganhou um fundo falso. Todo site comercial de tamanho relevante tem duas superfícies — a página, que quase ninguém vê, e a interface de máquina, que responde pela maior parte das requisições e por uma parte crescente da receita. A camada de tarifação se consolidou onde havia quem cobrar e quem pagar: grandes editoras, dados financeiros, catálogos de produto, documentação de software pago. Fora daí, o acesso de máquina continua de graça, porque cobrar US$ 0,0004 de um agente custa mais caro do que deixar passar. O `llms.txt` foi abandonado sem cerimônia por volta de 2028, substituído por alguma outra marcação que também será medida antes de ser usada. A distinção humano-máquina nunca foi resolvida: virou um mercado de detecção de algumas centenas de milhões de dólares por ano, com falso positivo recorrente em cima de pessoas que navegam de um jeito atípico. O design de interação se acostumou a ter dois destinatários e parou de achar isso estranho, do mesmo modo que se acostumou a ter dois tamanhos de tela. A publicidade dentro da resposta do agente existe e é pequena; a receita editorial migrou para assinatura e serviço; e o conteúdo aberto em português é visivelmente mais raro do que era em 2026.

**Desejável — a porta com preço, crachá e recurso.** Em 2031 existe um padrão de identidade de máquina que passou por grupo de trabalho de verdade, com mais de uma implementação independente e um caminho para quem não é operadora de agente assinar o próprio: o agente pessoal de uma pessoa física consegue crachá, e portanto consegue entrar. O pagamento por acesso encontrou uma unidade que dá para auditar de fora — não "apareceu na resposta", que só quem responde sabe, mas algo verificável pelas duas pontas —, e existe uma entidade coletiva com governança pública cobrando em nome de quem publica pouco, de modo que o site de um professor ou de um veículo local recebe alguma coisa em vez de nada. O WebMCP virou primitiva e, por um efeito colateral feliz, trouxe de volta o incentivo ao HTML semântico: o que é bom para o agente ler é o mesmo que é bom para o leitor de tela, e a acessibilidade ganhou um financiador que ela nunca teve. Para chegar aqui foi preciso três coisas que não aconteceram sozinhas: um WG da IETF adotar o trabalho de identidade até 2028; um regulador tratar o controle privado de acesso a conteúdo como questão de concorrência antes da consolidação, não depois; e alguém construir a ponte para o lado pobre do mercado — o que, no Brasil, seria plausível em cima de um trilho de pagamento público, barato e onipresente, se ele for exposto a agente com regra clara de consentimento.

**Indesejável — o cartório e o vale-tudo, ao mesmo tempo.** Em 2031 há um registro de agentes credenciados operado por três empresas, e ser agente sem estar nele significa receber a versão degradada da web: sem conteúdo completo, sem preço, sem ação. Quem emite as chaves decide o que cada agente pode ler, e a decisão não tem recurso porque não é pública nem regulada. Em paralelo — e é isto que torna o cenário pior que a simples concentração — o disfarce continua funcionando: quem não quer se identificar não se identifica, passa como Chrome e lê tudo de graça, de modo que a tranca só prende quem foi honesto. Cobra-se de quem declarou; deixa-se passar quem mentiu. O conteúdo que alimenta os modelos é o que sobrou de graça, enviesado para o que não tinha preço, e a qualidade da resposta cai de um jeito que ninguém consegue atribuir a uma causa. A web aberta não morre de repente: ela vira um lugar de onde as coisas boas foram retiradas. **O sinal precoce, que dá para observar bem antes de 2031, é um só: a proporção entre sites que fecham a porta e sites que a abrem com preço.** Se o fechamento crescer e a tarifação não, este é o cenário em curso — e o segundo sinal, ainda mais barato de medir, é se o número de agentes que assinam requisição sobe mais rápido que o de agentes que se disfarçam de navegador.

## 10. O experimento

**O que é.** Um **site de duas portas**: uma página de conteúdo pequena e real, publicada simultaneamente de quatro maneiras, num só domínio, instrumentado para registrar tudo que bate nele.

1. **Porta humana** — HTML normal, com um paywall *client-side* deliberadamente ingênuo (overlay por CSS sobre o texto já carregado), idêntico ao que a CJR encontrou na MIT Technology Review [11].
2. **Porta declarada** — as mesmas funções expostas como ferramentas: `navigator.modelContext` (WebMCP, atrás de flag no Chrome) na página, e um servidor MCP remoto para quem chega de fora do navegador.
3. **Porta com preço** — um endpoint que devolve **HTTP 402** com preço no cabeçalho para conteúdo integral, e o `rsl.txt` correspondente declarando os termos de licença legíveis por máquina.
4. **Porta com crachá** — verificação de assinatura no estilo Web Bot Auth: quem assina a requisição recebe a resposta completa; quem não assina recebe a versão resumida.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta central do mapa, que nenhuma fonte responde: **o agente acha a porta de máquina, e escolhe usá-la?** Três desdobramentos mensuráveis: (a) dado que existe uma porta declarada, o agente ainda assim raspa o HTML? (b) diante do 402, ele para, tenta pagar, ou procura o mesmo conteúdo em outro lugar de graça — que é `e3.3.1` testado em miniatura; (c) quando o crachá é opcional, ele assina ou se disfarça? A resposta (c) é o teste direto do sinal precoce do cenário indesejável.

**Que tecnologia emergente ele usa, e por que não dá para fazer com tecnologia madura.** Usa WebMCP/`navigator.modelContext`, MCP, HTTP 402 com semântica de preço, `rsl.txt` e assinatura de requisição no estilo Web Bot Auth. Não dá para fazer com REST + OpenAPI porque REST não responde a nenhuma das três perguntas: uma API documentada não é **descoberta** pelo agente dentro da sessão de navegação, não **negocia** acesso (ou tem chave, ou não tem) e não **identifica** quem chama de um jeito que o servidor possa verificar sem cadastro prévio. Toda a graça do experimento está exatamente nas três coisas que o maduro não faz.

**O que a turma vai fazer quando testar isso em sala.** Cada pessoa chega com o agente que usa — Claude Code, ChatGPT com navegação, Atlas, Comet, um script próprio — e recebe a mesma tarefa em linguagem natural ("me diga o que este artigo conclui sobre X e cite o trecho"). Ninguém recebe instrução sobre qual porta usar; a tarefa não menciona que existem portas. O servidor registra, por tentativa: qual porta foi batida primeiro, se a ferramenta declarada foi sequer enumerada, se o 402 foi respeitado ou contornado, se a requisição veio assinada, se o texto sob o overlay foi extraído, e quantos tokens/requisições a tarefa custou por caminho. No fim, projetamos os logs na parede e comparamos os agentes lado a lado. A parte mais interessante da aula é provavelmente a mais simples: ver quantos agentes leem o texto escondido sob o overlay sem que ninguém tenha pedido.

**O que seria um resultado que me faria mudar de ideia.** Se a maioria dos agentes **encontrar e preferir espontaneamente a porta declarada**, sem instrução, e respeitar o 402 em vez de contorná-lo, então a disrupção 1 é mais rápida e a 3 é menos grave do que este mapa supõe — `e1` volta para confiança alta e o cenário desejável fica plausível sem intervenção regulatória. Se, ao contrário, **todos rasparem o HTML e ninguém assinar nada** — o resultado que eu espero —, então a camada de protocolo é, por ora, uma conversa entre quem escreve especificação, e a web agêntica de 2031 será decidida na porta, por quem opera a porta, e não no protocolo. Um terceiro resultado me faria mudar de ideia de outro jeito: se os agentes **enumerarem a ferramenta declarada e mesmo assim errarem a tarefa** mais do que raspando, o problema não é de adoção — é de que declarar ferramenta não é suficiente, e todo o ramo da disrupção 1 precisa ser reescrito em torno de qualidade de descrição, não de existência de interface.

## 11. Fontes

Doze fontes, todas **abertas e lidas** nesta rodada (12/09/2026). O que não foi aberto está na seção 12, marcado como tal, e não sustenta nenhuma afirmação do corpo do documento.

1. **Cloudflare — "The crawl before the fall… of referrals"** · `https://blog.cloudflare.com/ai-search-crawl-refer-ratio-on-radar/` — sustenta a razão rastreio/visita por plataforma (Anthropic 70.900:1 na semana de 19-26/06/2025) e o argumento econômico de que o modelo de crawler mudou de natureza. **Confiabilidade:** medição primária de quem opera a infraestrutura, com escala que ninguém mais tem — e parte interessada direta no problema que descreve. Usar para direção, não para valor absoluto.
2. **Model Context Protocol — "The 2026-07-28 Specification"** · `https://blog.modelcontextprotocol.io/posts/2026-07-28/` — sustenta a reescrita do núcleo do MCP (stateless, roteamento por cabeçalho, MRTR, CIMD, depreciações com janela de 12 meses) e os números de download dos SDKs. **Confiabilidade:** fonte primária do projeto; alta para o que a especificação diz, autodeclarada para números de adoção.
3. **IETF Datatracker — `draft-meunier-web-bot-auth-architecture`** · `https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/` — sustenta que o Web Bot Auth é submissão individual, versão 05 de 02/03/2026, **expirada** e sucedida por outro draft. **Confiabilidade:** máxima; é o registro oficial do processo.
4. **CoinDesk — "Coinbase-backed AI payments protocol wants to fix micropayment but demand is just not there yet" (11/03/2026)** *(URL no anexo 12.7: o servidor devolve 429 a cliente automatizado)* — sustenta os números do x402 (~US$ 28 mil/dia, ~131 mil transações, ticket de US$ 0,20, ~50% de atividade artificial pela Artemis em fev/2026). **Confiabilidade:** veículo especializado citando análise nomeada de terceiro; é a fonte mais cética que encontrei sobre o tema e a que mais pesa contra o próprio mapa.
5. **mecanik.dev — "Does llms.txt Do Anything Yet"** · `https://mecanik.dev/en/posts/does-llms-txt-do-anything-yet/` — sustenta a adoção (4.088 → 36.120 sites, Originality.ai) e o não-consumo (97% com zero requisições em 137 mil domínios, Ahrefs, maio/2026), além das posições de Google, OpenAI, Anthropic e Perplexity. **Confiabilidade:** blog técnico independente que cita estudos nomeados e verificáveis; média-alta pelo encadeamento das fontes, e o achado central é justamente o que contraria o interesse comercial de quem escreve sobre otimização para IA.
6. **Not Human Search** · `https://nothumansearch.ai/` — sustenta a existência de um ranking de prontidão agêntica, os pesos (`llms.txt` +25, `ai-plugin` +20) e o tamanho do índice (5.316 sites em 12/09/2026). **Confiabilidade:** fonte primária do próprio serviço; alta para o que ele faz, nula como medida independente do fenômeno.
7. **Cloudflare Changelog — "New options to manage AI traffic" (01/07/2026)** · `https://developers.cloudflare.com/changelog/post/2026-07-01-ai-traffic-options/` — sustenta as três categorias (Search, Agent, Training) e a mudança de padrão de 15/09/2026 para domínios novos, bloqueando Training e Agent em páginas com anúncio. **Confiabilidade:** documentação primária do fornecedor; alta para o que muda, silenciosa sobre como o classificador de página com anúncio funciona.
8. **E-Commerce Brasil — estudo *State of the Internet* da Akamai (24/04/2026)** · `https://www.ecommercebrasil.com.br/noticias/buscas-via-ia-cortam-mais-de-95-do-trafego-para-sites-mostra-estudo` — sustenta os ~96% a menos de tráfego de referência de chatbots, 1% de clique na fonte, +300% de bots de IA em 2025, e a composição do setor de mídia (63% treinamento, 24% fetchers). Confirmou também a **ausência** de recorte brasileiro. **Confiabilidade:** veículo setorial reportando estudo de terceiro; média — não abri o relatório da Akamai em si.
9. **RSL — Really Simple Licensing** · `https://rslstandard.org/` — sustenta o desenho do padrão (XML referenciado de robots.txt, cabeçalho, HTML, mídia e RSS), os modelos de compensação (atribuição, assinatura, pay-per-crawl, pay-per-inference) e a lista de apoiadores. **Confiabilidade:** fonte primária do padrão; alta para a especificação, promocional para a adoção.
10. **smalk.ai — "AI Search Advertising: Beside the Answer, Not Inside"** · `https://www.smalk.ai/blog/ai-search-advertising-beside-the-answer-not-inside` — sustenta a previsão da eMarketer de 04/06/2026 (US$ 32,03 bi em 2026 → US$ 68,25 bi em 2030; 80%+ ao lado e não dentro; mercado de anúncio em chatbot em pouco mais de US$ 5 bi só em 2030), a queda do CPM do ChatGPT de ~US$ 60 para US$ 25 em nove semanas, e a frase sobre o leilão migrar sem a cadeia de valor. **Confiabilidade:** blog de fornecedor citando previsão nomeada e explicando a divergência com a WPP Media; média — os números de previsão são de terceiros e não os verifiquei na origem.
11. **Columbia Journalism Review — "How AI Browsers Sneak Past Blockers and Paywalls" (30/10/2025)** *(URL no anexo 12.7: o servidor devolve 403 a cliente automatizado)* — sustenta o teste de Atlas e Comet contra artigo exclusivo da MIT Technology Review, a indistinguibilidade no log e o mecanismo do paywall client-side. **Confiabilidade:** alta; é jornalismo com teste descrito e reprodutível, feito por instituição sem interesse comercial no resultado. É a fonte que sustenta a disrupção 3.
12. **WorkOS — "AI agents now make up the majority of web traffic"** · `https://workos.com/blog/ai-agent-web-traffic-what-developers-need-to-change` — sustenta os 57,5% de tráfego automatizado (Cloudflare Radar, junho/2026) e a composição do tráfego de crawler de IA (51,8% treinamento, 9,3% busca). **Confiabilidade:** blog de fornecedor de infraestrutura de identidade, agregando dados de terceiros nomeados; média. É também onde apareceu a razão 23.951:1 que não bate com a fonte 1 — ver seção 8.

**Por que `fontes: 12` e só dez URLs aparecem abaixo.** O campo `fontes:` conta **o que foi lido**; a lista de URLs conta **o que responde a um cliente automatizado**. Duas fontes abertas e lidas nesta rodada bloqueiam robô de forma determinística — medido seis vezes pelo método do verificador: CJR em 403 (6/6) e CoinDesk em 429 (6/6). As duas seguem numeradas e descritas aqui, com a URL no anexo 12.7 e o motivo medido. É o tratamento fixado para a fila de rodadas.

E vale registrar o que essa medição significa dentro deste tema, porque não é acidente burocrático: a rotina que a disciplina usa para conferir fontes é, do ponto de vista desses dois sites, exatamente o tipo de visitante que a disrupção-raiz 2 existe para barrar — e passaria sem dificuldade se fingisse ser um navegador, que é a disrupção-raiz 3. A ferramenta de verificação tropeçou no objeto de estudo.

**Declaradamente não abertas, e por isso não citadas no corpo:** a especificação do WebMCP no W3C e o changelog do Chrome 146. As datas do WebMCP usadas na seção 3 vêm de resultados de busca convergentes, e isso está sinalizado no próprio texto e na seção 8.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 1 — a entrevista, literal

As cinco perguntas obrigatórias da skill, e as respostas como foram dadas. Nenhuma foi pulada; nenhuma foi respondida com "tanto faz".

> 1. **Horizonte temporal**: para que ano você quer projetar os efeitos?
> — 2031.
>
> 2. **Público-alvo**: quem vai ler/usar esse mapa?
> — Quem projeta mídia e interação.
>
> 3. **Recorte geográfico**: mercado global, ou uma região específica?
> — Global, com uma nota sobre o Brasil.
>
> 4. **Descartes explícitos**: existe algo que você já sabe que NÃO quer que o mapa cubra?
> — O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão.
>
> 5. **Viés desejado**: otimista, pessimista, ou neutro/cético?
> — Neutro.

Parâmetros adicionais informados junto com a entrevista, e aplicados: tema "A internet agêntica: quando o usuário é uma máquina" (tema 4 de 19, família "Agentes"); nenhuma disrupção suspeita pré-definida — descobrir; excluir ideias óbvias que serviriam para qualquer tema; profundidade de três ordens; modo "a partir de uma inovação/tema", não de um setor; zona de interesse do autor "Agentes"; login `jcsc`; skill `futurizacao-jcsc`; busca na web real, citando apenas o que foi aberto.

**O que me faria mudar de ideia, declarado antes de começar:** evidência de que a adoção já passou da maioria inicial na curva de Rogers, ou de que a tecnologia não rompe nada — só melhora o que existe. Respondido na seção 7.

**Interpretação aplicada, para registro:** "descarte explícito = o que já é comum em produto de massa" **reforça** o critério de maturidade da Etapa 2 da skill em vez de substituí-lo. Foi por essa via que o MCP como conector servidor-a-modelo acabou descartado: meio bilhão de downloads mensais e governança da Linux Foundation é produto de massa, mesmo que o público final não saiba o nome dele.

### 12.2 Etapa 2 — todos os candidatos levantados, aceitos e recusados

Candidatos considerados, em ordem de levantamento, com o destino de cada um:

| candidato | destino | critério |
|---|---|---|
| Model Context Protocol (servidor↔modelo) | recusado | maturidade — adotado por todos os líderes, sem debate de substituição |
| WebMCP / `navigator.modelContext` | **aceito (D1)** | adoção em curso, incerteza real de envio e de adoção |
| `llms.txt` | recusado | não por maturidade — por ausência de consumidor (97% sem requisição) |
| `rsl.txt` / Really Simple Licensing | **aceito, dentro de D2** | 1.0 recente, adoção editorial em curso, sem consumidor consolidado |
| HTTP 402 / pay-per-crawl (Cloudflare) | **aceito, dentro de D2** | default mudando em 15/09/2026, unidade de cobrança em disputa |
| x402 | considerado, incorporado a D2 como **evidência contrária** | existe e funciona; demanda real ínfima |
| Web Bot Auth | **aceito, dentro de D2/D3** | em produção sem ser padrão; draft expirado |
| Navegador agêntico (Atlas, Comet) | **aceito (D3)** | quebra a observabilidade que toda a governança pressupõe |
| Detecção de agente (Foil, Fingerprint) | aceito como o **outro braço** de D3 | disputa em aberto com o braço da identidade declarada |
| Agent2Agent (A2A) | fora | fronteira: comunicação entre agentes, não a web como plataforma |
| ACP (OpenAI/Stripe) e UCP (Google/Shopify) | fora | fronteira explícita: é o tema 5 |
| Identidade e contenção de agente como segurança | fora | fronteira explícita: é o tema 2 |
| AdCP (Ad Context Protocol) | fora do corpo | levantado mas não aberto; ver 12.4 |
| API REST, OpenAPI, SDK, scraping | recusado | maturidade (é a régua da própria disciplina) |
| `robots.txt` | recusado | maturidade — o arquivo; o emergente é o que se pendura nele |
| RAG, embeddings, busca vetorial | recusado | maturidade; e não rompe nada neste tema |
| Schema.org / dados estruturados | recusado | maturidade — mas entra no mapa como **precedente histórico** de adoção lenta de marcação estrutural (seção 7) |

### 12.3 Efeitos gerados e depois cortados

Cortados por serem genéricos demais — serviriam para qualquer tema da disciplina, o que a entrevista pediu para excluir:

- "Empresas precisarão se adaptar" / "novas profissões surgirão" / "questões éticas ganharão relevância" — os três foram gerados na primeira passagem e eliminados. Não dizem nada sobre a web agêntica que não digam sobre qualquer outra tecnologia.
- "O volume de dados aumentará" — verdadeiro e inútil.
- "Haverá regulação" — só entrou na roda em `e3.1.2`, com objeto específico (concentração do controle de acesso por infraestrutura privada) e não como afirmação genérica.

Cortados por serem consequência de outro tema:

- "Agentes passam a negociar preço entre si" — é comércio agêntico, tema 5.
- "Ataques de prompt injection via conteúdo de página" — é contenção e segurança, tema 2. Aparece de raspão em `e2.2` apenas pelo ângulo de governança de permissão da interface pública, que é design.

Cortados por serem quarto nível (a skill fixa três):

- De `e3.2.1`: "o viés do corpus realimenta a qualidade da resposta e, por consequência, a disposição de pagar pelo agente".
- De `e5.2.1`: "disputa de jurisdição sobre quem credencia agente, análoga à das autoridades certificadoras, agravada porque o credenciado age no mundo".
- De `e6.1.1`: "a citabilidade da web se corrói e atinge arquivo, pesquisa e a própria verificação de fontes".
- De `e1.1.1`: "a descrição de ferramenta vira objeto de disputa competitiva e nasce o equivalente ao keyword stuffing na camada de tool".

Os quatro estão registrados em prosa na seção 5 e aqui, e nenhum foi para o YAML.

Cortado por não sustentar:

- "O agente substitui o navegador como principal cliente HTTP até 2031." Gerado na primeira passagem com confiança média. Derrubado na Etapa 4: o dado disponível é que 57,5% das requisições HTML são automatizadas [12], o que inclui crawler de busca, monitoramento, scraper e bot de todo tipo há muitos anos — não é "agente". Confundir tráfego automatizado com tráfego agêntico é o erro mais fácil deste tema, e eu o cometi antes de cortar.

### 12.4 Buscas feitas, e o que cada uma rendeu

Todas as buscas desta rodada, em ordem, com o resultado:

1. *MCP adoption 2026 agentic web standard* — rendeu o blog da especificação de 28/07/2026 (aberto, fonte 2) e a informação sobre a doação à Agentic AI Foundation em dezembro de 2025. **Esta última não foi aberta em fonte primária** — aparece em vários resultados e foi usada apenas no descarte do MCP por maturidade, onde é argumento, não fato de sustentação.
2. *Cloudflare pay-per-crawl HTTP 402 2026* — rendeu o changelog de 01/07/2026 (aberto, fonte 7) e a alegação de "1 bilhão de 402 por dia" que não consegui verificar (ver seção 8).
3. *llms.txt adoption 2026 criticism* — rendeu a fonte 5 (aberta) e a posição do Google de maio de 2026 no guia de otimização para IA. Vários resultados nesta busca são de agências de SEO vendendo serviço de otimização para IA; usei só o que cita estudo nomeado.
4. *Web Bot Auth IETF signed agents* — rendeu o datatracker (aberto, fonte 3), e a informação de que AWS WAF anunciou suporte em novembro de 2025 e de que a Cloudflare anunciou um formato de registro aberto com o Amazon Bedrock AgentCore em fevereiro de 2026 (*Signature Agent Card*). **Não abertas**; ficam registradas aqui.
5. *WebMCP W3C browser API 2026 Chrome Edge* — rendeu as datas usadas na seção 3, todas de fontes secundárias convergentes e **nenhuma aberta**. É a lacuna declarada nas seções 8 e 11. Uma alegação recorrente que não usei por não conseguir origem: "89% de economia de token" com WebMCP.
6. *x402 payments agents 2026 Coinbase Google AP2* — rendeu a fonte 4 (aberta) e o contexto da Fundação x402 (Coinbase + Cloudflare em 23/09/2025, formalizada na Linux Foundation em 02/04/2026, 22 organizações incluindo Google, Stripe, AWS, Visa e Mastercard) e da AP2 do Google. **Não abertos**; não sustentam nada no corpo.
7. *AI agent traffic share crawl to refer ratio* — rendeu a fonte 12 (aberta) e as razões conflitantes discutidas na seção 8. Trouxe também "+7.851% de tráfego de agente ano a ano" (HUMAN Security, *2026 State of AI Traffic*) — número grande, base desconhecida, **não usado**.
8. *answer engine optimization / generative engine optimization 2026 + queda de referência* — rendeu os números de queda por porte de publisher (60% pequenos, 47% médios, 22% grandes), a pesquisa do Reuters Institute com 280 executivos de mídia de 51 países (expectativa de -43% de referência em três anos, com um em cada cinco esperando perda acima de 75%), o dado de que chatbots respondem por menos de 1% da referência total, e o de que mais de 60% das buscas no Google terminam sem clique. **Nenhuma dessas páginas foi aberta.** São consistentes com o que as fontes abertas dizem e por isso não contradizem o mapa, mas ficam aqui e não no corpo.
9. *Brasil tráfego de agentes, bloqueio de crawler, comércio agêntico* — rendeu a fonte 8 (aberta) e a confirmação da ausência de recorte brasileiro. Trouxe também: Cloudflare Radar de julho/2026 com ClaudeBot em 16,28% do tráfego de bots de IA e GPTBot em 9,74%; um caso de crawler com ~420.680 páginas numa semana e ~35.000 páginas por usuário enviado; e o crescimento de tráfego de IA para lojas Shopify (8× ano a ano no 1º trimestre de 2026, pedidos 13×). **Não abertos.**
10. *RSL Really Simple Licensing* — rendeu a fonte 9 (aberta). Não abertos: o lançamento em 10/09/2025, a co-fundação por Eckart Walther (co-criador do RSS) e Doug Leeds (ex-Ask.com), e o número de ~1.500 organizações de mídia apoiadoras.
11. *advertising for AI agents 2026* — rendeu a fonte 10 (aberta). Não aberto: o AdCP (Ad Context Protocol), lançado em outubro de 2025, que define nove tarefas de agente em descoberta, comparação e ativação de campanha. É candidato a ramo próprio num mapa futuro deste tema.
12. *Foil / detecção de agente* — rendeu a página do Foil (`usefoil.com`, não aberta) e o anúncio da Fingerprint de fevereiro de 2026 de detecção de "agente de IA autorizado". Usei apenas para nomear o braço de detecção em D3; nenhum número entrou.
13. *AI browsers Atlas Comet paywalls* — rendeu a fonte 11 (aberta, CJR). Não abertos: a observação de que o Atlas evita conteúdo de empresas que processam a OpenAI (NYT, PCMag) e a citação ao relatório da TollBit sobre a dificuldade de bloquear sem bloquear gente.
14. *agentic commerce ACP/UCP* — feita para delimitar fronteira com o tema 5, não para sustentar o mapa. Registro do que apareceu, **nada aberto**: ACP lançado por Stripe e OpenAI com o Instant Checkout do ChatGPT em 29/09/2025; UCP lançado pelo Google em 11/01/2026 com Shopify, Etsy, Wayfair, Target e Walmart; Shopify ativando *Agentic Storefronts* para todas as lojas no fim de março de 2026.

### 12.5 Caminhos abandonados

- **Tentei achar medição independente da Cloudflare** sobre participação de tráfego agêntico — de acadêmico, de W3C, de arquivo público. Não achei nada de escala comparável. A dependência de um único medidor, que é também parte interessada, está registrada como viés na seção 7 e é a fragilidade estrutural mais séria deste mapa.
- **Tentei achar dado brasileiro** de bloqueio de crawler, tráfego de agente ou prontidão agêntica de sites nacionais. Não existe, ou não achei. A nota sobre o Brasil na seção 3 é, por isso, estrutural e não numérica, e a hipótese sobre o Pix está marcada como hipótese.
- **Considerei um quarto ramo sobre acessibilidade** — o encontro entre "o que é bom para o agente ler" e "o que é bom para o leitor de tela ler" —, que é provavelmente o efeito mais interessante e menos discutido de todo o tema. Não virou disrupção-raiz porque não é uma ruptura, é uma consequência; ficou distribuído em `e2.1.1` (o incentivo econômico ao HTML semântico voltando de fora) e `e5.3.1` (detecção de bot em conflito com tecnologia assistiva). Se este mapa fosse reescrito por alguém da zona de acessibilidade, seria o eixo central, e seria um mapa melhor em pelo menos um aspecto.
- **Não investiguei o lado do custo de inferência.** Se rodar agente ficar dez vezes mais barato até 2031, o volume de tráfego de máquina muda de ordem de grandeza e vários prazos da roda encurtam. Se ficar mais caro, o oposto. Não tenho base para projetar isso e preferi não fingir que tenho — mas é a variável exógena que mais mexeria com o mapa inteiro, mais do que qualquer protocolo citado aqui.

### 12.6 Nota de método

Este documento foi produzido pela skill `futurizacao-jcsc`, seguindo as cinco etapas do `SKILL.md`: entrevista (registrada em 12.1), levantamento com filtro explícito de maturidade (seção 4 e 12.2), roda de três níveis (seção 5), autocrítica com rebaixamento auditável de confiança (seção 7) e saída no formato da disciplina.

Uma observação sobre a própria skill, para a próxima iteração. O `DUVIDAS.md` da entrega da Atividade 03 registrou que, na rodada de teste, quatro efeitos de terceira ordem receberam `prazo` além do horizonte pedido, sem aviso — e que a correção seria incluir na Etapa 4 uma checagem de que nenhum `prazo` excede o `horizonte` do frontmatter. Essa correção **ainda não está no `SKILL.md`**, e esta rodada foi executada com a skill como ela está escrita. Confiro aqui manualmente, para registro: todos os 36 efeitos do bloco `roda:` têm `prazo` entre 2027 e 2031, dentro do horizonte pedido. As cadeias que só se resolveriam depois de 2031 estão descritas em prosa na seção 5 e em 12.3, em vez de receberem data fora do intervalo — que é exatamente o comportamento que o `DUVIDAS.md` propôs. Ele funcionou desta vez porque eu o li; continua não sendo uma regra da skill.

### 12.7 — URLs das fontes que não respondem a cliente automatizado

Medidas seis vezes cada, com o método do verificador (`urllib`, User-Agent `Mozilla/5.0`, timeout de 10s). As duas foram abertas e lidas normalmente durante a pesquisa; o bloqueio é do servidor contra robô, não indisponibilidade da página.

- **Fonte 4 — CoinDesk** · `https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet` — 429 em 6 de 6 medições (limite de taxa).
- **Fonte 11 — Columbia Journalism Review** · `https://www.cjr.org/analysis/how-ai-browsers-sneak-past-blockers-and-paywalls.php` — 403 em 6 de 6 medições (bloqueio de bot).

Nenhuma das duas foi substituída por fonte equivalente que respondesse 200, e o motivo é o mesmo que já apareceu antes nesta fila: são as duas fontes que mais pesam **contra** o mapa e a favor do ceticismo dele — a CoinDesk sustenta os ~US$ 28 mil/dia de comércio real do x402, e a CJR é o único teste descrito e reprodutível que sustenta a disrupção-raiz 3. Trocar por link mais complacente é neutro para a checagem e ruim para o argumento.
