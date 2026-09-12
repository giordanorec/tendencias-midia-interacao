---
tema: A internet agêntica — quando o usuário é uma máquina
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
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
tecnologias_citadas: [Web Bot Auth (HTTP Message Signatures RFC 9421), Signature Agent Card, HTTP 402 / pay-per-crawl / pay-per-use, x402, WebMCP (navigator.modelContext), MCP Server Card, Agent Skills, Markdown for Agents, Content Signals, Agent Readiness Score, AdCP]
fontes: 13
confianca: media
experimento: Construir um site com três portas — GET anônimo, requisição assinada e requisição tarifada — e soltar os agentes da turma contra ele para descobrir por qual critério o agente escolhe uma fonte.
skill_usada: futurizacao-kvv
publico_ok: false
---

## Seção 1 — Resumo

A web foi construída para olhos humanos e está sendo reescrita para programas: 57,4% das requisições na rede da Cloudflare já não vêm de pessoas. Em jogo não está uma camada nova de API, e sim a queda de três pressupostos fundadores da web aberta — visitante anônimo, acesso gratuito, página como unidade publicada. Em seu lugar surgem identidade criptográfica do visitante, preço embutido na resposta HTTP e sites que declaram capacidades tipadas em vez de documentos. Nenhuma das três se concretizou: a especificação de identidade é rascunho expirado, a cobrança por crawl segue em beta fechado, a API de capacidades roda atrás de flag. O mapa projeta até 2031 o que muda em publicidade, jornalismo e acessibilidade quando o principal leitor de uma página é um programa que nunca a renderiza.

## Seção 2 — O tema

"Internet agêntica" nomeia a reorganização da web para um visitante que não tem olhos. Não se trata de automação de tarefas dentro de um produto, nem de um chatbot que responde sobre um site: trata-se de a *camada de protocolo* da web — descoberta, identificação, autorização, cobrança e representação do conteúdo — ser redesenhada para que o consumidor primário seja um programa agindo por conta de uma pessoa.

O ponto de contato com mídia e interação é direto e desconfortável. **Interface:** se o agente nunca renderiza a página, a interface deixa de ser o lugar onde o produto acontece e passa a ser um artefato para uma minoria de visitantes; o que o agente lê é uma descrição textual de ferramenta, e escrever essa descrição vira design. **Mídia:** o modelo que pagou a web aberta — acesso gratuito financiado por atenção humana medida em impressão e clique — não sobrevive a um visitante que não vê anúncio e não volta. **Interação:** a relação de uma pessoa com uma marca, um veículo ou um serviço passa a ser mediada por um terceiro software cujas preferências ela não inspeciona.

Por que isto exige mapa prospectivo e não levantamento de estado da arte: o estado da arte aqui é inconclusivo por construção. As três peças centrais estão em estado *simultaneamente* de produção e de rascunho — a Cloudflare, a Anthropic e a OpenAI operam Web Bot Auth em produção enquanto o documento de arquitetura correspondente é um Internet-Draft individual, expirado, que o próprio texto declara "not endorsed by the IETF" [3]. Um levantamento diria "existe e funciona"; outro, lendo o mesmo material, diria "não é padrão e pode morrer". A pergunta útil não é o que existe, e sim quais bifurcações estão abertas e o que as fecha. Além disso, a força que decide não é técnica: em 4 de agosto de 2026 um tribunal federal americano, e não um comitê de padronização, alterou a premissa jurídica de quem pode barrar um agente [5]. Mapa prospectivo é o formato que suporta essa indeterminação sem fingir consenso.

**Fronteira declarada.** Identidade e detecção de agentes como problema de *segurança* é o tema 2; pagamento e comércio *do consumidor* por agentes é o tema 5. Aqui a identidade entra só como condição de entrada na web, e o pagamento só como preço de acesso ao conteúdo publicado — o objeto é a web como plataforma sendo reprojetada para máquinas.

## Seção 3 — Onde isso está hoje

**O que funciona.**

A camada de conexão está madura e governada. O Model Context Protocol passou de protocolo de um fornecedor a padrão multi-institucional: a especificação de 28 de julho de 2026 tornou o protocolo *stateless* — eliminou o handshake `initialize`/`initialized` e o header `Mcp-Session-Id`, de modo que servidores rodam atrás de balanceadores round-robin sem estado compartilhado —, introduziu roteamento por header (`Mcp-Method`, `Mcp-Name`), listas cacheáveis com `ttlMs` e uma política formal de depreciação com janela mínima de doze meses [1]. Os SDKs Tier 1 somam perto de meio bilhão de downloads por mês [1]. Isto não é promessa: é infraestrutura.

A leitura por máquina já é maioria. A Cloudflare mede 57,4% das requisições iniciadas por bots contra 42,6% por humanos — marco que Matthew Prince disse ter ocorrido "nos últimos seis meses", admitindo que "o dia exato permanece incerto" e que o dado é "um pouco bagunçado" [8]. É a primeira vez na história da web que o visitante típico não é uma pessoa.

A infraestrutura já reagiu, e com critério explícito. Em 15 de setembro de 2026 a Cloudflare passou a exigir que empresas de IA separem seus crawlers em três categorias — *search*, *agent* e *training* — e a bloquear por padrão os de treinamento e de agente em páginas que exibem anúncio, para novos clientes, novos domínios e toda a base do plano gratuito [11]. O critério de corte é uma tese de design travestida de configuração: o anúncio é o sinal de que o dono do site queria um humano ali [12]. A justificativa de Prince: "agora que a maioria do tráfego da Internet é não-humana, precisamos ir além e agir mais rápido para que um ecossistema sustentável possa emergir" [11].

E o ranking da era agêntica já nasceu, feito pelo mesmo ator. Em abril de 2026 a Cloudflare lançou o Agent Readiness Score, escore público de 0 a 100 em quatro eixos — Discoverability (robots.txt, sitemap, Link headers), Content (Markdown for Agents), Bot Access Control (Content Signals, regras de bot, Web Bot Auth) e Capabilities (Agent Skills, catálogo de API, discovery OAuth, MCP Server Card, WebMCP) [7]. O argumento declarado: "a web sempre teve de se adaptar a novos padrões. Aprendeu a falar com navegadores, depois com buscadores. Agora precisa falar com agentes de IA" [7].

**O que falha.**

*A adoção declarada não é adoção real.* O `llms.txt` é o caso exemplar. As taxas de publicação variam conforme a amostra — 51,8% num painel de hosts de desenvolvedores (agosto/2026), 8,7% no Tranco top 1.000 (junho/2026), 10,13% em ~300 mil domínios gerais (novembro/2025) [9]. Mas um estudo de logs de servidor em 900 domínios, de setembro/2025 a abril/2026, registrou 1.227 requisições ao arquivo, das quais 794 (64,7%) vieram de um agregador comercial de dados, 392 (31,9%) de navegadores humanos — e **zero** dos crawlers das grandes laboratórios de IA [9]. O Google declarou em junho de 2026 que o arquivo não tem efeito, positivo ou negativo, sobre ranking ou AI Overviews [9]. Publicar não é ser lido.

*A cobrança ainda não existe em escala.* A documentação da própria Cloudflare diz que o pay-per-crawl segue em *closed beta*, com preço por zona e a Cloudflare como merchant of record [2]. Ou seja: o mecanismo mais citado como solução econômica da web agêntica não está disponível para a maioria dos sites.

*A economia da extração é brutal e instável.* Na janela de 28 dias encerrada em 21 de julho de 2026, o Cloudflare Radar mediu razões crawl-to-refer de 3.389:1 (Mistral), 2.237:1 (Anthropic), 225:1 (Perplexity), 217:1 (OpenAI), 35:1 (Microsoft) e 4,6:1 (Google) [10]. Mas a mesma fonte mostra a volatilidade que desmonta qualquer leitura estrutural apressada: no painel da SEOmator, a Anthropic saiu de 56.969:1 em janeiro para 2.363:1 em julho, enquanto a Mistral foi de 22:1 para 6.021:1 [10]. Os autores registram: "as razões de extração não são fixas, e se movem no instante em que uma plataforma lança um produto que linka para fora" [10].

*A identidade não é padrão.* O documento de arquitetura do Web Bot Auth — assinatura por chave assimétrica com `Signature`/`Signature-Input`, header opcional `Signature-Agent` para descoberta de chave, `keyid` obrigatoriamente um thumbprint SHA-256 de JWK, `tag="web-bot-auth"`, proibição explícita de HMAC compartilhado por causa de não-repúdio — está na versão 05, publicada em 2 de março de 2026, **expirada**, substituída por outro rascunho individual, e declara não ter standing formal na IETF [3]. Ele também lista o que *não* resolve: governança completa das listas de chaves públicas, prevenção de correlação com o usuário humano e proteção contra comprometimento de chave além de rotação [3].

*E o pagamento por máquina ainda é ruído.* O x402 acumulava ~167 milhões de transações liquidadas até o Q1 de 2026, com mais de vinte respaldos institucionais (Coinbase, Cloudflare, Stripe, AWS, Google, Visa, Circle), sob a Linux Foundation — porém com volume de comércio real de aproximadamente US$ 28 mil por dia e cerca de metade da atividade classificada como gamificada [4]. A própria fonte resume: "167 milhões de transações é um sinal saudável de rede; US$ 28 mil de comércio real por dia não é" [4].

**Quem está construindo.** Cloudflare ocupa simultaneamente três posições — define o bloqueio padrão, opera a cobrança e publica o escore que mede a conformidade [2][7][11]. Anthropic, OpenAI, Google, Microsoft, AWS, GitHub e Bloomberg sustentam a Agentic AI Foundation em torno do MCP [1]. Google e Microsoft editam em conjunto o WebMCP na W3C Web Machine Learning Community Group. Do outro lado da mesa, publishers bloqueiam de forma cirúrgica: num snapshot de 4.223 arquivos `robots.txt` em 31 de agosto de 2026, a razão disallow/allow foi de 2,39:1 para o ClaudeBot e 2,33:1 para o GPTBot, mas **0,94:1** para o OAI-SearchBot — mais liberado que bloqueado [6]. A conclusão do relatório é a frase mais precisa que encontrei sobre o momento: "publishers não estão bloqueando 'IA'. Estão bloqueando treinamento e liberando resposta — e estão fazendo isso com as mesmas empresas" [6].

**E os tribunais.** Em 4 de agosto de 2026 o Nono Circuito anulou a liminar que a Amazon obtivera contra o agente Comet, da Perplexity, sob o entendimento de que, "quando um usuário instrui o assistente de IA da Perplexity a completar uma tarefa na Amazon.com, é o usuário — não a Perplexity — que está acessando os computadores da Amazon" [5]. A corte considerou improvável o êxito da Amazon sob o Computer Fraud and Abuse Act; o processo de mérito continua e cabe recurso [5].

**Nota sobre o Brasil.** Não encontrei medição brasileira própria de tráfego agêntico — o que já é um dado. O que há é o efeito a jusante: o capítulo brasileiro do Digital News Report 2026, assinado por Rodrigo Carro, registra 13% de uso de chatbots para notícia, com rede social liderando o consumo com nove pontos de vantagem sobre a TV e um terço da população se informando por criadores, num quadro descrito como "mais agudo por causa do peso das plataformas" [13]. O Brasil chega à web agêntica com dependência de plataforma já consolidada e sem instrumento de medição próprio — combinação que aparece adiante, no efeito e6.2.

## Seção 4 — As disrupções-raiz

**Primeiro, o que foi recusado — e por quê.** O filtro anti-tecnologia madura desta skill obriga a explicar as recusas, e três candidatos óbvios caíram:

- **O MCP em si — RECUSADO.** É a candidata mais citada e a menos defensável. Com meio bilhão de downloads mensais nos SDKs Tier 1, governança sob a Linux Foundation com OpenAI, AWS, Google, Microsoft, Cloudflare, GitHub e Bloomberg, política formal de depreciação e SDKs em cinco linguagens [1], o MCP não é ruptura em curso: é a *base instalada* sobre a qual as rupturas ocorrem. Chamá-lo de disrupção-raiz em 2026 seria o mesmo erro de chamar HTTP de disrupção em 2005. Ele entra neste mapa como infraestrutura, não como incógnita.
- **`llms.txt` — RECUSADO.** É um arquivo de texto estático num diretório conhecido, tecnicamente idêntico ao `robots.txt` de 1994. Além de incremental, é empiricamente inerte: zero requisições dos crawlers das grandes laboratórios em 900 domínios ao longo de sete meses, e nenhuma correlação com citação em IA num estudo de ~300 mil domínios [9]. Sinal de época, não motor de mudança.
- **"AEO/GEO" como nova disciplina — RECUSADO.** Otimizar conteúdo para aparecer numa resposta é a mesma prática de otimizar para aparecer num resultado, com outro nome e outro intermediário. É rebranding de SEO, não ruptura. O que *é* ruptura — o escore de prontidão como critério de acesso, e não de posição — entra abaixo, dentro da Disrupção 3.

As três aceitas rompem, cada uma, um pressuposto fundador da web aberta.

### Disrupção 1 — O visitante deixa de ser anônimo por padrão: identidade criptográfica como condição de entrada

**O que rompe.** O pressuposto de que qualquer cliente pode fazer um GET sem dizer quem é. A web inteira — indexação, arquivamento, citação, leitura de link compartilhado — foi construída sobre um acesso anônimo por default, com identificação opcional e não verificável (`User-Agent` é uma string que qualquer um escreve). O Web Bot Auth inverte isso: cada requisição automatizada carrega assinatura Ed25519 sobre `@authority`/`@target-uri`, com `created`, `expires`, `keyid` e `tag="web-bot-auth"`, e o servidor descobre a chave por `Signature-Agent` [3]. A pergunta da portaria muda de *"você é humano?"* — pergunta que o tema 2 trata e que a estatística já tornou inútil, com bots em 57,4% [8] — para *"de quem você é o agente, e o que o seu principal autorizou?"*. Isso não é segurança: é uma camada de identidade e procuração embutida no protocolo de transporte da mídia.

**Por que agora e não há cinco anos.** Três condições que não existiam em 2021. (i) Escala: bot virou maioria do tráfego, e um controle que antes protegia casos de borda passou a governar o caso comum [8]. (ii) Assimetria econômica mensurável: razões de milhares de requisições por referência [10] deram ao dono do site um motivo financeiro, não ideológico, para discriminar visitante. (iii) Coordenação de infraestrutura: Cloudflare, Anthropic e OpenAI colocaram o mecanismo em produção em conjunto, e o escore de prontidão já *pontua* a presença de Web Bot Auth como item de controle de acesso [7] — quem define o teste define o padrão.

**O que falta para se concretizar.** Falta o que o próprio rascunho admite faltar: governança das listas de chaves públicas, prevenção de correlação com o usuário humano por trás do agente, e tratamento de comprometimento de chave além da recomendação de rotação [3]. Falta status formal — a versão 05 expirou em março de 2026 e não tem standing na IETF [3]. E falta resolver a colisão com a decisão do Nono Circuito: se o agente é juridicamente *o usuário* acessando o site [5], então exigir que ele se identifique como máquina é exigir que a pessoa se identifique por instrumento — pergunta que nenhum rascunho de protocolo responde.

### Disrupção 2 — O acesso vira transação precificada: o preço entra na resposta HTTP

**O que rompe.** A barganha que financiou a web aberta: conteúdo gratuito na entrada, pago depois pela atenção humana convertida em impressão e clique. Quando o leitor é um programa que não vê anúncio, não volta e não converte, essa barganha deixa de fechar — e a resposta em construção é substituí-la por preço na porta. Não é paywall: paywall é para pessoa, tem tela, tem cadastro, tem decisão humana. Aqui o `402 Payment Required` volta ao uso para que foi reservado e nunca teve, com intenção de pagamento em header de requisição e preço por zona, tendo a Cloudflare como merchant of record [2]; e com o x402 oferecendo liquidação por requisição em stablecoin sem conta e sem chave de API [4]. O corte da Cloudflare em 15/09/2026 revela a lógica em estado puro: bloqueio por padrão de treinamento e agente **nas páginas que exibem anúncio** [11][12] — a monetização humana e a monetização por máquina passam a ser mutuamente excludentes na mesma URL.

**Por que agora e não há cinco anos.** O 402 existe desde 1997 e não foi usado porque faltava o comprador: não havia cliente capaz de decidir pagar sem um humano no meio. O agente é esse comprador. Some-se o dado que só existiu em 2026 — a maioria não-humana [8] — e a extração medida em milhares para um [10], e a cobrança deixa de ser filosofia e vira contabilidade. E, pela primeira vez, há um intermediário em posição de cobrar por todos: a mesma empresa que decide o bloqueio padrão opera o pagamento [2][11].

**O que falta para se concretizar.** Falta o produto existir: o pay-per-crawl segue em beta fechado, disponível por lista de espera e a clientes Enterprise [2]. Falta demanda real do lado do comprador: US$ 28 mil/dia de comércio real no x402, metade da atividade gamificada, contra 167 milhões de transações liquidadas [4] — assinatura clássica de rede testada, não usada. Falta preço de referência: ninguém sabe quanto vale uma página para um modelo, e o escore de prontidão da Cloudflare chega a verificar x402, UCP e ACP mas *deliberadamente não os pontua* [7], sinal de que o próprio árbitro não sabe ainda o que recompensar. E falta enfrentar a assimetria: o crawler paga por página, mas o valor que extrai não está na página — está no corpus.

### Disrupção 3 — A página deixa de ser a unidade da web: o site publica capacidades, não documentos

**O que rompe.** O documento como unidade de publicação — o pressuposto mais antigo e mais invisível da web. O WebMCP, incubado na W3C Web Machine Learning Community Group com edição conjunta de Google e Microsoft e primeira implementação atrás de flag no Chrome, expõe `navigator.modelContext`: a página declara funções JavaScript tipadas, cada uma com descrição em linguagem natural e JSON Schema de parâmetros, que o agente no navegador descobre e chama sem renderizar nem tirar screenshot. O Agent Readiness Score já trata isso como categoria de *capacidade*, ao lado de Agent Skills, catálogo de API, discovery OAuth e MCP Server Card [7], e trata "Markdown for Agents" como a forma canônica de *conteúdo* [7]. A consequência para quem projeta mídia e interação é a mais dura deste mapa: a superfície de produto deixa de ser o layout e passa a ser **a redação da descrição da ferramenta**. O texto que descreve o que um botão faz vira mais determinante do que o botão.

**Por que agora e não há cinco anos.** Porque a alternativa esgotou. Até 2025 a forma de um agente usar um site era imitar uma pessoa: renderizar, ver, clicar. É caro, frágil e indistinguível de abuso — indistinguível, aliás, *justamente* para os sistemas de detecção que a Disrupção 1 formaliza. Com o MCP estabilizado como transporte stateless e cacheável [1], o passo que faltava era trazê-lo para dentro da página, e é isso que o WebMCP faz. Há cinco anos não havia nem cliente capaz de escolher a ferramenta certa pela descrição, nem protocolo comum para descrevê-la.

**O que falta para se concretizar.** Falta saída de flag e implementação em dois motores. Falta um modelo de consentimento e autorização para ferramenta que gasta dinheiro ou altera estado — a especificação de julho de 2026 endureceu autorização no lado servidor, migrando de Dynamic Client Registration para Client ID Metadata Documents e exigindo validação de emissor por RFC 9207 [1], mas o caso "página arbitrária declara ferramenta ao agente do usuário" tem superfície de ataque distinta e ainda sem resposta. Falta resolver a assimetria de verdade: a descrição é autodeclarada, e o argumento do Google contra o `llms.txt` — um manifesto autorreportado não diferencia sites, porque todo site diz que é o melhor [9] — vale integralmente aqui, com a diferença de que a descrição de ferramenta não apenas informa: **executa**.

## Seção 5 — A roda dos futuros

```yaml
roda_dos_futuros:
  - id: e1
    efeito: "A identidade do visitante vira condição de entrada e o GET anônimo deixa de ser o padrão da web"
    sinal: moderado
    prazo: "2027-2030"
    confianca: media
    filhos:
      - id: e1.1
        efeito: "Sites passam a servir conteúdo diferente conforme a chave que assina a requisição"
        sinal: moderado
        prazo: "2027-2029"
        confianca: media
        filhos:
          - id: e1.1.1
            efeito: "Nasce um cloaking legítimo: a versão agêntica e a versão humana divergem sem que ninguém compare as duas"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e1.1.2
            efeito: "Auditoria de paridade entre versão-humana e versão-agente vira exigência contratual e depois regulatória"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa
      - id: e1.2
        efeito: "A reputação de um agente vira ativo negociável — e revogável por quem emite a chave"
        sinal: fraco
        prazo: "2028-2031"
        confianca: media
        filhos:
          - id: e1.2.1
            efeito: "Poucos emissores concentram o direito de circular; agente novo nasce sem acesso e a barreira de entrada da web volta"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media

  - id: e2
    efeito: "O acesso vira transação precificada: a resposta HTTP passa a ter preço de tabela por classe de visitante"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e2.1
        efeito: "Publishers separam catálogo: o que é gratuito para humano e tarifado para máquina, na mesma URL"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e2.1.1
            efeito: "Surge arbitragem de acesso: intermediários compram no atacado e revendem ao agente, como as trocas de tráfego fizeram com banda"
            sinal: fraco
            prazo: "2029-2032"
            confianca: baixa
          - id: e2.1.2
            efeito: "Conteúdo barato de licenciar desloca conteúdo caro na resposta do agente: o preço vira critério editorial invisível"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media
      - id: e2.2
        efeito: "A publicidade perde o alvo: a impressão passa a ser servida a quem não compra, e o inventário humano encolhe"
        sinal: forte
        prazo: "2026-2029"
        confianca: alta
        filhos:
          - id: e2.2.1
            efeito: "A métrica de mídia migra de impressão e clique para citação na resposta e compra concluída pelo agente"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media

  - id: e3
    efeito: "O site publica capacidades tipadas em vez de páginas, e a descrição da ferramenta vira a superfície de produto"
    sinal: moderado
    prazo: "2027-2031"
    confianca: media
    filhos:
      - id: e3.1
        efeito: "O design se bifurca: interface para humano de um lado, contrato de ferramenta para agente do outro, com times separados"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e3.1.1
            efeito: "Escrever a descrição da ferramenta vira ofício remunerado — redação como engenharia de interface"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e3.1.2
            efeito: "Ataque por descrição: a ferramenta mente sobre o que faz e o agente obedece, sem que o usuário veja a diferença"
            sinal: moderado
            prazo: "2027-2030"
            confianca: alta
      - id: e3.2
        efeito: "Escores de prontidão agêntica passam a mover orçamento, como o PageRank moveu"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e3.2.1
            efeito: "Otimizar para o escore substitui otimizar para a pessoa; a métrica vira alvo e deixa de medir o que media"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media

  - id: e4
    efeito: "A audiência humana deixa de ser o denominador de qualquer métrica de mídia"
    sinal: forte
    prazo: "2026-2029"
    confianca: alta
    filhos:
      - id: e4.1
        efeito: "Contratos de publicidade passam a exigir prova positiva de visitante humano, não ausência de bot"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e4.1.1
            efeito: "Prova de humanidade vira infraestrutura cara, concentrada em poucos fornecedores e acoplada a documento ou dispositivo"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
          - id: e4.1.2
            efeito: "Quem não consegue provar humanidade — conexão pobre, navegador antigo, leitor de tela, automação de acessibilidade — é lido como bot e barrado"
            sinal: fraco
            prazo: "2028-2031"
            confianca: media
      - id: e4.2
        efeito: "O veículo reconfigura o produto para o leitor-máquina e perde o vínculo direto com o leitor-pessoa"
        sinal: moderado
        prazo: "2027-2031"
        confianca: media
        filhos:
          - id: e4.2.1
            efeito: "A marca desaparece da experiência: a fonte vira insumo anônimo da resposta e o jornalismo perde o nome junto com o clique"
            sinal: moderado
            prazo: "2028-2031"
            confianca: media

  - id: e5
    efeito: "A web se reparte em duas superfícies com governanças distintas: a aberta para máquina e a fechada por acordo"
    sinal: moderado
    prazo: "2028-2031"
    confianca: media
    filhos:
      - id: e5.1
        efeito: "Jardins murados abrem canal agente-a-agente negociado com parceiros selecionados e fecham todo o resto"
        sinal: moderado
        prazo: "2027-2030"
        confianca: media
        filhos:
          - id: e5.1.1
            efeito: "Acesso por acordo bilateral substitui acesso por protocolo aberto; interoperar vira função de contrato, não de padrão"
            sinal: fraco
            prazo: "2029-2032"
            confianca: media
          - id: e5.1.2
            efeito: "O tribunal, não o comitê de padronização, decide quem entra; a jurisprudência vira camada da pilha de protocolos"
            sinal: moderado
            prazo: "2026-2030"
            confianca: alta
      - id: e5.2
        efeito: "Sites pequenos saem do ar por custo de crawl sem retorno de referência"
        sinal: fraco
        prazo: "2028-2032"
        confianca: baixa
        filhos:
          - id: e5.2.1
            efeito: "O corpus que alimenta os agentes encolhe e envelhece; a diversidade de fonte cai justamente onde o agente promete abundância"
            sinal: fraco
            prazo: "2030-2034"
            confianca: baixa

  - id: e6
    efeito: "Ter um agente vira condição de acesso pleno, e não ter, uma desvantagem estrutural"
    sinal: fraco
    prazo: "2029-2033"
    confianca: baixa
    filhos:
      - id: e6.1
        efeito: "Serviço público e comércio publicam a versão boa do serviço apenas pelo canal agêntico, e degradam a versão web"
        sinal: fraco
        prazo: "2029-2032"
        confianca: baixa
        filhos:
          - id: e6.1.1
            efeito: "Assistência agêntica entra na pauta de acessibilidade e de direito do consumidor como condição de igualdade de acesso"
            sinal: fraco
            prazo: "2030-2033"
            confianca: baixa
          - id: e6.1.2
            efeito: "Agente subsidiado ou estatal aparece como política pública em países de renda média, com o Estado escolhendo o intermediário de todos"
            sinal: fraco
            prazo: "2030-2034"
            confianca: baixa
      - id: e6.2
        efeito: "No Brasil o efeito é amplificado pela dependência de plataforma, e a escolha do agente é feita pela operadora ou pelo aparelho, não pela pessoa"
        sinal: fraco
        prazo: "2028-2032"
        confianca: media
        filhos:
          - id: e6.2.1
            efeito: "A pergunta regulatória brasileira deixa de ser quem modera o conteúdo e passa a ser quem escolhe o agente do cidadão"
            sinal: fraco
            prazo: "2029-2033"
            confianca: baixa
```

**O que o bloco não exprime sozinho.**

*Três efeitos não são projeção — já aconteceram, e estão no bloco como âncora de calibração.* `e2.2` (a publicidade perde o alvo), `e4` (a audiência humana deixa de ser o denominador) e `e5.1.2` (o tribunal decide quem entra) receberam confiança alta porque têm data e medição: 57,4% de tráfego não-humano [8], o corte da Cloudflare em páginas com anúncio [11] e a decisão do Nono Circuito de 4 de agosto de 2026 [5]. Um mapa em que *tudo* é futuro é um mapa sem régua.

*As ramificações não são independentes, e o YAML sugere que são.* `e1` (identidade) e `e5.1.2` (tribunal) estão em rota de colisão direta: se o entendimento de que "é o usuário, não a empresa, que acessa" [5] se firmar, a exigência de identificação de máquina perde base legal e a árvore inteira de `e1` encolhe. Já `e2` e `e6` se realimentam: quanto mais caro o acesso por máquina, mais valioso o agente que já tem acordo — e mais desvantajoso não ter agente nenhum.

*O prazo de `e2` é o mais frágil do bloco e está deliberadamente largo.* Projetar um mercado de acesso precificado a partir de um produto em beta fechado [2] e de uma rede com US$ 28 mil/dia de comércio real [4] é extrapolar de quase nada. A janela 2027-2031 reflete essa ignorância, não um cronograma.

*O que o bloco não tem, e a ausência é uma escolha.* Não há efeito de "os agentes melhoram a experiência do usuário". Ele existiria — agentes resolvem tarefas chatas melhor que formulários —, mas é ganho incremental sobre a lógica atual e o filtro da Etapa 2 o exclui. O mapa é deliberadamente parcial nesse ponto, e o leitor deve corrigir por isso.

*A terceira ordem é a menos confiável e deve ser lida como hipótese, não previsão.* Dos 18 efeitos de terceira ordem, quatorze têm confiança baixa ou média por uma razão simples: cada nível de encadeamento multiplica a incerteza do anterior, e nenhuma técnica de prospecção contorna isso. Eles servem para orientar o que observar, não para planejar.

## Seção 6 — Sinais fracos e wildcards

**Sinais fracos.**

1. **Zero.** Nenhuma requisição ao `llms.txt` vinda dos crawlers das grandes laboratórios em 900 domínios ao longo de sete meses, enquanto 64,7% das requisições ao arquivo vieram de um único agregador comercial [9]. O sinal não é "o arquivo não funciona" — é que a web já produz artefatos destinados a máquinas que nenhuma máquina lê, e ninguém percebeu por quase um ano. Adoção declarada e adoção medida se descolaram.
2. **O árbitro verifica mas não pontua.** O Agent Readiness Score checa x402, Universal Commerce Protocol e Agentic Commerce Protocol, e explicitamente não os inclui na nota [7]. Quem define a régua está sinalizando que ainda não sabe o que premiar em comércio agêntico — e esse "ainda não" é a janela em que o padrão é decidido.
3. **Produção rodando sobre rascunho expirado.** Cloudflare, Anthropic e OpenAI operam Web Bot Auth enquanto o documento de arquitetura correspondente está expirado e sem standing na IETF [3]. O padrão de fato precedeu o padrão de direito — inversão que, quando ocorre, costuma terminar com a captura da especificação por quem já implantou.
4. **O anúncio como declaração de intenção.** Ao bloquear por padrão nas páginas com anúncio [11][12], a infraestrutura passou a inferir a *vontade* do publisher a partir de um artefato comercial. É a primeira vez que um sinal de monetização é lido como política de acesso — e sites sem anúncio, que são a maioria da web aberta não-comercial, ficam fora da proteção por não terem o sinal.
5. **A publicidade já fala MCP.** O Ad Context Protocol foi construído sobre o MCP, o que significa que a compra de mídia entre agentes está sendo especificada antes de existir inventário agêntico definido. A infraestrutura de monetização está chegando antes do objeto monetizado.
6. **Quatro portas fechadas nesta pesquisa.** Ao produzir este documento, quatro veículos jornalísticos devolveram HTTP 403 à ferramenta de leitura (CNBC, GeekWire, Medianama e um portal brasileiro), enquanto blogs de infraestrutura, documentação técnica e o datatracker da IETF responderam normalmente. O sinal, pequeno e imediato: **a imprensa já fechou e a infraestrutura já abriu**. Quem paga por atenção humana barra a máquina; quem vende plataforma a recebe. A assimetria de quem alimenta o agente está se decidindo por essa via, não por protocolo.

**Wildcards.**

- **O portal que fecha tudo e ninguém sente falta.** Um grande veículo bloqueia integralmente todo agente e toda IA, sem exceção para *search*, e a audiência não se move. Baixa probabilidade — a categoria *search* é justamente a que os publishers liberam mais do que bloqueiam, 0,94:1 para o OAI-SearchBot [6], o que revela que eles não acreditam poder abrir mão dela. Se acontecesse e não houvesse dano mensurável, a premissa econômica de todo este mapa cairia: a Disrupção 2 perderia o comprador e o poder de barganha voltaria inteiro ao publisher. **Impacto: destrói e2 e esvazia e5.2.**
- **A doutrina do "é o usuário quem acessa" vira regra geral.** O raciocínio do Nono Circuito [5] é adotado amplamente e barrar agente que age sob instrução humana passa a ser barrar a pessoa — com potencial enquadramento em direito do consumidor e acessibilidade. A web não se bifurca: é obrigada a permanecer única, e a Disrupção 1 perde a função de portaria, sobrando como mera telemetria. **Impacto: colapsa o ramo e1 e inverte e5 inteiro.**
- **Um incidente agêntico em massa.** Uma injeção de prompt via descrição de ferramenta (`e3.1.2`) atinge simultaneamente milhares de sites com WebMCP, e agentes executam compras, vazamentos ou alterações de estado em escala. A reação previsível é exigir renderização e confirmação humana por item, o que devolve o humano ao circuito por regulação, não por design. **Impacto: adia a Disrupção 3 em cinco anos e transforma `e4.1` em obrigação legal.**
- **Um só fornecedor fecha a pilha.** Um navegador ativa WebMCP por padrão, com pagamento integrado e identidade própria de agente, cobrindo mais de 80% do mercado. As três disrupções se concretizam de uma vez — e como produto de uma empresa, não como camada aberta. É o cenário em que este mapa acerta o "o quê" e erra completamente o "quem". **Impacto: todas as folhas do bloco mudam de dono.**

## Seção 7 — Contra o próprio mapa (teste adversarial)

**Extrapolação linear.** O mapa apoia muito peso numa única linha de tendência — a curva de tráfego não-humano — e a trata como monotônica. Ela não é. O número de 57,4% [8] mistura crawler de IA, bot de monitoramento, scanner de segurança e automação antiga; a fonte não desagrega agente de IA do resto [8], e Prince admite que o dado é "um pouco bagunçado" e que o dia da virada é incerto [8]. Pior: as razões crawl-to-refer, que uso como motor econômico de toda a Disrupção 2, oscilaram de 56.969:1 para 2.363:1 em seis meses para um mesmo operador [10] — uma variação de mais de vinte vezes na direção *oposta* à narrativa de extração crescente. Se essa reversão continuar, o argumento de que o agente é parasitário se desfaz e a cobrança perde justificativa. Onde eu extrapolei linearmente, a série é volátil.

**Velocidade de adoção irreal.** É o defeito mais grave deste documento e está concentrado na Disrupção 2. Projeto um mercado de acesso precificado até 2031 a partir de: um produto em *closed beta* desde meados de 2025 e ainda em beta fechado em setembro de 2026 [2]; e uma rede de pagamento com 167 milhões de transações mas US$ 28 mil/dia de comércio real, metade gamificada [4]. Quinze meses de beta não é rampa, é indício de atrito não resolvido. A Disrupção 3 sofre do mesmo mal em menor grau: WebMCP está atrás de flag em um motor, e a passagem de flag a implementação em dois motores levou anos para APIs bem menos controversas. O padrão histórico de padrões web é lento; o único acelerador real aqui é a concentração da infraestrutura — o que é um argumento a favor do quarto wildcard, não do meu cronograma.

**Falha da disrupção.** Cada uma pode simplesmente não acontecer, e por motivos distintos. *D1 (identidade)* morre por via jurídica: se o agente é o usuário [5], identificar a máquina é problema resolvido do lado errado, e o Web Bot Auth vira telemetria voluntária — destino provável de um rascunho expirado sem governança de chaves [3]. *D2 (preço)* morre por falta de comprador: se os laboratórios preferirem pagar acordos de licenciamento diretos com os cem maiores publishers a negociar por requisição com milhões de sites, o 402 nunca escala e vira nota de rodapé. *D3 (capacidades)* morre por segurança: descrição autodeclarada que executa é uma superfície de ataque para a qual ninguém tem resposta [1], e basta um incidente para que o modelo volte ao screenshot, mais caro e mais seguro. Nenhuma das três é inevitável; todas são disputadas.

**Viés pessoal do autor.** Três camadas, e a última é desconfortável. (i) A zona de interesse declarada é "Agentes", o que predispõe a ver agente como causa de tudo — inclusive de fenômenos com causa anterior: a queda de tráfego de referência para jornalismo começou com a busca sem clique, não com agentes, e este mapa a atribui à internet agêntica com mais convicção do que a evidência sustenta [13]. (ii) A cadeia de evidência é enviesada por origem: cinco das treze fontes vêm da Cloudflare ou a citam como medidor, e a Cloudflare é parte interessada — vende o bloqueio, opera a cobrança e publica o escore [2][7][11]. Quando a mesma empresa mede o problema, define a solução e cobra pela solução, aceitar a medição sem desconto é ingenuidade metodológica; aqui isso foi feito parcialmente. (iii) O documento foi escrito por um agente, sobre agentes, e será lido em grande parte *por* agentes. Todo incentivo textual empurra para superestimar a importância do leitor-máquina. O leitor deve descontar por isso — e eu não tenho como me descontar sozinho.

## Seção 8 — O que a máquina errou

1. **Cinco razões crawl-to-refer incompatíveis para o mesmo operador, tratadas como intercambiáveis.** Na primeira varredura, o material devolvido trazia para a Anthropic: 38.000:1, 4.580:1, 3.386:1, 2.363:1, 2.237:1 e 1.917:1 — todas "de 2026", todas atribuídas ao Cloudflare Radar. A tentação era usar a maior, que sustenta melhor o argumento. **Como foi percebido:** ao tentar escrever a frase com data, ficou impossível dizer *quando* cada número valia. **Correção:** abri a fonte [10], fixei uma única janela declarada (28 dias móveis encerrados em 21/07/2026), usei apenas os números dela e passei a apresentar a volatilidade — 56.969:1 → 2.363:1 em seis meses — como parte do achado, não como ruído a esconder. A volatilidade virou argumento na Seção 7 contra o meu próprio mapa.
2. **"Um bilhão de respostas 402 por dia" quase entrou como fato estrutural.** Um resultado de busca afirmava que publishers enviam mais de 1 bilhão de 402 diários. É um número redondo, enorme e perfeito demais para a tese. **Como foi percebido:** ao abrir a documentação da própria Cloudflare para descrever o mecanismo, li que o pay-per-crawl está em *closed beta* [2] — incompatível com a escala alegada. **Correção:** o número foi removido do argumento. Não afirmo que seja falso (pode contar 402 originados de outros mecanismos, ou de bloqueio e não de cobrança); afirmo que não consegui reconciliá-lo com a fonte primária, e por isso não o uso. O que sustenta a Disrupção 2 é o beta fechado, que é um dado *contrário* à minha tese — e está lá por isso.
3. **A direção do caso Amazon × Perplexity estava invertida.** A primeira leitura fixou "Amazon obtém ordem judicial contra o agente da Perplexity, março de 2026" como estado do mundo, e a Seção 3 começou a ser escrita com a web se fechando por via judicial. **Como foi percebido:** ao buscar a fundamentação, encontrei a decisão de segunda instância. **Correção:** [5] mostra que em 4 de agosto de 2026 o Nono Circuito *anulou* a liminar, entendendo que é o usuário, e não a Perplexity, quem acessa os computadores da Amazon, e considerando improvável o êxito sob o CFAA. Isso não corrigiu uma data — inverteu o sinal de um ramo inteiro do mapa, e gerou o segundo wildcard da Seção 6.
4. **Web Bot Auth foi chamado de "padrão da IETF" no rascunho.** **Como foi percebido:** ao abrir o datatracker para descrever o mecanismo com precisão. **Correção:** [3] declara literalmente que o documento "não é endossado pela IETF e não tem standing formal no processo de padronização", está na versão 05, publicada em 2 de março de 2026, expirada e substituída por outro rascunho individual. O texto passou a dizer "rascunho individual expirado, em produção" — formulação menos vendável e mais verdadeira, e que virou o terceiro sinal fraco.
5. **Nenhuma projeção de mercado foi escrita — por decisão explícita.** O modo de falha registrado pelo próprio autor da skill em `DUVIDAS.md` é exatamente este: inserir cifra de mercado com aparência de autoridade estatística e sem fonte. Havia espaço óbvio para "o mercado de infraestrutura agêntica deve atingir US$ X bilhões até 2030". Não há uma única projeção financeira neste documento. Onde o número não foi medido por alguém que eu pudesse abrir, ele não aparece.
6. **Quatro fontes que não consegui abrir não foram citadas.** CNBC, GeekWire, Medianama e um portal brasileiro devolveram HTTP 403 à ferramenta de leitura. Os resumos de busca traziam conteúdo aparentemente utilizável sobre o caso Amazon × Perplexity e sobre tráfego de bot no Brasil. **Correção:** nenhum deles está na Seção 11, e nenhuma afirmação deste documento se apoia neles. O fato de terem sido bloqueados foi registrado como sinal fraco (item 6 da Seção 6) — que é o uso legítimo de uma porta fechada.
7. **Faltou medição brasileira e isso está declarado, não contornado.** Procurei dado brasileiro de tráfego agêntico e não encontrei fonte primária que pudesse abrir; os resultados disponíveis eram material de agência citando painéis proprietários. **Correção:** a nota sobre o Brasil usa apenas o que consegui verificar — o capítulo brasileiro do Digital News Report [13] — e diz explicitamente que a ausência de medição própria é parte do diagnóstico, em vez de preencher o vazio com números de terceiros não verificáveis.

## Seção 9 — Três cenários para 2031

**Provável — a web de duas portas.** Todo site relevante mantém duas entradas para o mesmo conteúdo: uma página, que quase ninguém visita, e um contrato de capacidades, por onde passa o volume. Quem projeta produto escreve as duas, e o time que redige descrições de ferramenta é maior que o time de layout. A identificação de agente é rotina comercial e não obrigação legal — os grandes emissores assinam suas chaves, os pequenos circulam sem assinar e aceitam limites de taxa piores, e a portaria do site é uma tabela de tarifas por classe de visitante. O pagamento por acesso existe, mas não como o mercado aberto por requisição que se imaginou: concentra-se em algumas dezenas de acordos entre grandes laboratórios e grandes publishers, enquanto o resto da web é lido de graça porque cobrar de todo mundo custa mais do que rende. A publicidade não morreu, migrou: paga-se por citação na resposta e por compra concluída, e a impressão virou métrica de nicho. O jornalismo continua sendo lido e continua sem ser visitado; os veículos que sobreviveram são os que negociaram como fornecedores de insumo, não como destinos. Ninguém chama isso de ruptura — chama-se de "como a web funciona", e a geração que entra na universidade não conhece outra.

**Desejável — o acesso permanece único e a diferença é auditável.** A doutrina de que o agente age como instrumento de uma pessoa se firmou, e a consequência foi virtuosa: não se pode barrar um agente sob instrução humana sem barrar a pessoa, o que manteve a web aberta por obrigação e não por virtude. A identidade de agente sobreviveu, mas invertida — serve para o *usuário* provar procuração e responsabilizar quem age em seu nome, não para o site filtrar quem entra, e a governança das chaves é plural, com mais de um emissor e revogação contestável. A paridade entre a versão humana e a versão agêntica virou exigência auditável, do mesmo tecido normativo que a acessibilidade: um site que serve conteúdo diferente à máquina precisa poder demonstrar a diferença. O escore de prontidão agêntica é medido por mais de um árbitro independente, nenhum deles vendendo o remédio que a nota prescreve. E a remuneração do conteúdo se resolveu onde o valor de fato está — no corpus e na citação, com rateio coletivo — em vez de na página, o que permitiu que o site pequeno, sem anúncio e sem advogado, continuasse sendo lido e pago. A web tem duas portas, mas as duas dão na mesma casa.

**Indesejável — a procuração concentrada.** Três empresas operam o navegador, o agente, a identidade que ele apresenta e o trilho de pagamento que ele usa, e entrar na web sem uma delas é tecnicamente possível e praticamente inviável. O acesso pleno exige agente credenciado; quem não tem — por renda, por aparelho antigo, por conexão instável, por usar leitor de tela que o detector confunde com automação — recebe a versão degradada do serviço público e o preço pior no comércio, sem nunca saber que existia outra versão. Sites servem conteúdo diferente conforme a chave que assina a requisição, e como ninguém compara as duas, ninguém prova a divergência. A ordem das fontes na resposta é decidida por preço de licença, não por qualidade, e essa ordenação não é publicada. No Brasil, a escolha do agente vem embarcada no aparelho e no plano da operadora, de modo que o intermediário entre o cidadão e a informação foi decidido por um contrato que ele não leu — e o debate público, que passou uma década discutindo quem modera o conteúdo, chega tarde à pergunta de quem escolhe o agente. A web aberta não foi fechada por decreto: ficou vazia porque o tráfego que a sustentava passou a chegar por outra porta, e quem ficou do lado de fora não foi avisado.

## Seção 10 — O experimento

**O que é.** *A portaria* — um site mínimo, publicado pela turma, com três portas para o mesmo conteúdo e instrumentação de log em todas elas. **Porta A:** `GET` anônimo, que devolve HTML normal com um anúncio falso. **Porta B:** requisição assinada, que só devolve conteúdo se vier com um header `Signature-Agent` declarando quem é o agente e a quem serve — e devolve, para agente identificado, uma versão em Markdown mais completa que a versão humana. **Porta C:** `402 Payment Required`, que devolve preço e um token de teste, e só libera na segunda requisição. Ao lado, cada grupo publica um `llms.txt` e uma descrição de ferramenta (uma função tipada com descrição em linguagem natural, no espírito do WebMCP) anunciando o que seu site sabe fazer. Uma tarde de trabalho em Flask ou Node, publicável no Vercel, sem dependência paga.

**A pergunta sobre o futuro que ele testa.** *Por qual critério um agente escolhe uma fonte, quando as fontes são ele que lê e não a pessoa?* Especificamente: entre um site com conteúdo melhor atrás de uma porta cara ou atritada e um site com conteúdo pior, gratuito e bem descrito para máquina, qual o agente entrega para o seu usuário — e o usuário percebe a diferença? É a pergunta que decide se `e2.1.2` (preço como critério editorial invisível) e `e3.2.1` (o escore vira alvo e deixa de medir) são especulação ou mecânica.

**Tecnologia emergente usada.** HTTP 402 com intenção de pagamento em header, no padrão do pay-per-crawl [2]; assinatura de requisição no formato do Web Bot Auth, com `Signature-Agent` e `tag="web-bot-auth"` [3]; descrição de ferramenta tipada no espírito do `navigator.modelContext` do WebMCP; `llms.txt` e Markdown para agentes; e, como árbitro externo, o Agent Readiness Score público [7].

**Atividade da turma.** Três papéis, duas rodadas, e a segunda é onde o experimento acontece. *Rodada 1 (publishers):* cada grupo monta seu site, decide o que serve em cada porta e — a decisão de design que importa — **quanto cobra**, e se a versão da máquina é melhor, igual ou pior que a da pessoa. Ninguém vê a escolha dos outros. *Rodada 2 (agentes):* cada grupo recebe uma tarefa real de pesquisa que só se resolve com informação espalhada pelos sites da turma, e a executa com um agente (Claude Code, um navegador agêntico, ou um script simples com uma API) sob uma restrição declarada de orçamento — por exemplo, dez unidades para gastar. Os logs do servidor de cada site são projetados ao vivo. *Rodada 3 (leitura):* comparar três coisas — que portas o agente tentou e em que ordem; quanto gastou e onde desistiu; e, o teste decisivo, colocar lado a lado a resposta que o agente entregou e o que de fato estava publicado nos sites, para ver o que se perdeu no caminho. Fecha-se rodando o `isitagentready.com` em cada site e comparando a nota com o quanto cada um foi efetivamente lido.

**O resultado que muda de ideia.** O experimento é desenhado para poder me desmentir, e há três desfechos que fariam isso. (a) Se os agentes da turma buscarem sistematicamente a fonte mais barata e mais bem descrita, ignorando a de melhor conteúdo, e ninguém no grupo notar ao ler a resposta final — então `e2.1.2` está confirmado em miniatura, e o preço é critério editorial invisível. (b) Se os agentes simplesmente **desistirem** de toda porta com atrito, pagamento ou assinatura, e responderem apenas com o que estava atrás da porta A gratuita, então a Disrupção 2 não tem comprador: o resultado sustenta o primeiro wildcard e derruba o ramo `e2` deste mapa — o poder de barganha volta para quem publica, e eu errei. (c) Se um grupo mentir na descrição da ferramenta e o agente de outro grupo obedecer, `e3.1.2` deixa de ser risco projetado e vira demonstração de sala — e, honestamente, é o desfecho mais provável e o mais instrutivo.

## Seção 11 — Fontes

1. "The 2026-07-28 Specification" — Model Context Protocol Blog. O que sustenta: protocolo stateless, MRTR, roteamento por header, listas cacheáveis, endurecimento de autorização (RFC 9207, CIMD), política de depreciação de doze meses e volumes de download dos SDKs; base da recusa formal do MCP como disrupção-raiz e do "o que falta" da Disrupção 3. Confiabilidade: alta. `https://blog.modelcontextprotocol.io/posts/2026-07-28/`
2. "What is Pay Per Crawl?" — Cloudflare Developer Docs. O que sustenta: mecânica do 402 com intenção de pagamento em header, preço por zona, Cloudflare como merchant of record e, sobretudo, o status de *closed beta* que limita a Disrupção 2 e derrubou a alegação de "1 bilhão de 402 por dia". Confiabilidade: alta. `https://developers.cloudflare.com/ai-crawl-control/features/pay-per-crawl/what-is-pay-per-crawl/`
3. "draft-meunier-web-bot-auth-architecture-05" — IETF Datatracker. O que sustenta: mecânica do Web Bot Auth (Signature/Signature-Input/Signature-Agent, keyid como thumbprint JWK SHA-256, proibição de HMAC compartilhado), status de rascunho individual expirado sem standing na IETF, e as limitações declaradas (governança de chaves, correlação com usuário, comprometimento de chave); base da Disrupção 1. Confiabilidade: alta. `https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture`
4. "x402 Protocol Adoption Tracker 2026" — Presenc AI (snapshot 15/05/2026, volume atribuído a análise da CoinDesk de março/2026). O que sustenta: ~167 milhões de transações liquidadas, ~US$ 28 mil/dia de comércio real, ~50% de atividade gamificada e a lista de respaldos institucionais; usada como evidência *contra* a maturidade da Disrupção 2. Confiabilidade: baixa — é agregador secundário de dado de terceiro, e foi usada apenas onde a própria fonte relativiza o próprio número. `https://presenc.ai/research/x402-protocol-adoption-tracker-2026`
5. "AI shopping agents may be harder to shut out of ecommerce sites" — eMarketer. O que sustenta: decisão do Nono Circuito de 4 de agosto de 2026 anulando a liminar da Amazon contra o Comet, o entendimento de que é o usuário quem acessa, a improbabilidade de êxito sob o CFAA e a continuidade do processo de mérito; base de `e5.1.2` e do segundo wildcard. Confiabilidade: média. `https://www.emarketer.com/content/perplexity-comet-amazon-ai-shopping-agents-ruling`
6. "We Analyzed robots.txt Across Cloudflare's Network: Publishers Now Block Training Bots and Allow Answering Bots" — TechnologyChecker.io (set/2026). O que sustenta: snapshot de 4.223 arquivos robots.txt em 31/08/2026, razões disallow/allow por bot (ClaudeBot 2,39:1, GPTBot 2,33:1, OAI-SearchBot 0,94:1) e a tese de que se bloqueia treinamento e se libera resposta; usada na Seção 3 e no primeiro wildcard. Confiabilidade: média — análise de terceiro sobre a API do Cloudflare Radar, com o caveat de snapshot e não série temporal declarado pela própria fonte. `https://technologychecker.io/blog/robots-txt-ai-crawlers-blocking-report`
7. "Introducing the Agent Readiness score" — Cloudflare Blog (17/04/2026). O que sustenta: as quatro categorias do escore (Discoverability, Content, Bot Access Control, Capabilities) e seus itens, a verificação sem pontuação de x402/UCP/ACP, e a tese declarada de que a web precisa aprender a falar com agentes; base da Disrupção 3, de `e3.2` e do segundo sinal fraco. Confiabilidade: alta para o que a Cloudflare faz; parte interessada quanto ao diagnóstico. `https://blog.cloudflare.com/agent-readiness/`
8. "Bot web traffic has overtaken human web traffic, data shows" — NBC News. O que sustenta: 57,4% de requisições de bot contra 42,6% humanas, a admissão de Matthew Prince de que a virada ocorreu "nos últimos seis meses" e de que o dado é "um pouco bagunçado", e a ausência de desagregação entre agente de IA e outros bots — usada tanto como âncora quanto como ressalva na Seção 7. Confiabilidade: alta. `https://www.nbcnews.com/tech/tech-news/bot-web-traffic-overtaken-human-web-traffic-data-shows-rcna348522`
9. "llms.txt in Practice: Adoption Data, Evidence, and Setup" — Digital Applied. O que sustenta: taxas de adoção incompatíveis por amostra (51,8% / 8,7% / 10,13%), o estudo de logs em 900 domínios com zero requisições de crawlers de grandes laboratórios, a ausência de correlação com citação em ~300 mil domínios, e a posição do Google de junho/2026; base da recusa do llms.txt e do primeiro sinal fraco. Confiabilidade: média. `https://www.digitalapplied.com/blog/llms-txt-in-practice-adoption-evidence-2026`
10. "GEO Data Report 2026: Which AI Crawlers & LLM Bots Take the Most and Give the Least?" — SEOmator. O que sustenta: razões crawl-to-refer da janela de 28 dias encerrada em 21/07/2026 (Mistral 3.389:1, Anthropic 2.237:1, OpenAI 217:1, Google 4,6:1), a volatilidade mês a mês (Anthropic 56.969:1 → 2.363:1) e os limites de método declarados pelos autores; sustenta a economia da Disrupção 2 e, ao mesmo tempo, a crítica a ela na Seção 7. Confiabilidade: média. `https://seomator.com/blog/crawl-to-refer-ratio-ai-crawlers-llm-bots`
11. "Cloudflare's new policy pushes AI companies to pay for publishers' content" — TechCrunch (01/07/2026). O que sustenta: a exigência de separação de crawlers em search/agent/training, a data de 15/09/2026, o escopo (novos clientes, novos domínios, base do plano gratuito), a citação de Matthew Prince e o piloto de Pay Per Use com Ceramic.ai e You.com. Confiabilidade: alta. `https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/`
12. "15 de setembro: o dia em que parte da web fecha a porta para os robôs de IA" — Cientistas Digitais (28/08/2026). O que sustenta: a leitura de que "o anúncio é o sinal de que o dono do site queria um humano ali", e os dados de recrawl redundante e de queda de clique com resumo de IA na SERP; usada na Seção 3 e no quarto sinal fraco. Confiabilidade: baixa — análise editorial sem fonte primária para os dois números citados, por isso usada apenas pelo argumento, não pelos números. `https://cientistasdigitais.com/tecnologia-e-inovacao/15-de-setembro-o-dia-em-que-parte-da-web-fecha-a-porta-para-os-robos-de-ia`
13. "IA vira gatekeeper da notícia e ameaça tráfego que SEO trazia para o jornalismo" — Observatório da Imprensa, sobre o capítulo brasileiro do Digital News Report 2026 (Rodrigo Carro). O que sustenta: 13% de uso de chatbots para notícia no Brasil, rede social liderando o consumo com nove pontos sobre a TV, um terço da população se informando por criadores, e o diagnóstico de quadro "mais agudo por causa do peso das plataformas"; base da nota sobre o Brasil e de `e6.2`. Confiabilidade: média. `https://www.observatoriodaimprensa.com.br/digital-news-report/ia-vira-gatekeeper-da-noticia-e-ameaca-trafego-que-seo-trazia-para-o-jornalismo/`

## Seção 12 — Anexo: o levantamento bruto

### 12.1 Entrevista prévia de recorte (Etapa 1) — perguntas feitas e respostas recebidas

As seis perguntas da Etapa 1 foram feitas e respondidas antes de qualquer geração. Nesta execução a skill rodou em rodada automatizada da disciplina, com as respostas fornecidas de antemão, em bloco, por quem despachou a execução. Registro integral, sem edição:

- **1. Tema da análise:** "A internet agêntica: quando o usuário é uma máquina" (tema 4 de 19 da disciplina; família "Agentes").
- **2. Horizonte temporal:** 2031.
- **3. Público-alvo:** quem projeta mídia e interação.
- **4. Recorte geográfico:** global, com uma nota sobre o Brasil.
- **5. Premissas descartadas e viés:** "Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão." "Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema." "O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe)."
- **6. Tecnologias/vetores de interesse:** nenhum vetor imposto. O enunciado do tema sugeriu termos para busca — *Model Context Protocol, llms.txt, agentic web, agent-ready, machine-readable web, AI crawler, robots.txt AI, Web Bot Auth, HTTP 402, pay-per-crawl* — e entidades: Anthropic, Cloudflare, OpenAI, Google, Not Human Search.
- **Parâmetros adicionais recebidos:** profundidade de três ordens; modo "a partir de uma inovação/tema, não de um setor"; zona de interesse do autor "Agentes"; login kvv; busca na web obrigatória com WebSearch/WebFetch reais, citando apenas o que foi aberto; sem perguntas de volta e sem pausa para confirmação; o que não estiver definido deve ser assumido e declarado.

**Assunções declaradas, por não estarem definidas na entrevista:**
- *Confiança global do documento:* `media`, conforme o template da skill. Coerente com a Seção 7: as três disrupções dependem de artefatos em rascunho, em beta ou atrás de flag.
- *Data do frontmatter:* 2026-09-15, valor fixo do template da skill, mantido apesar de a execução ter ocorrido em 12/09/2026.
- *`publico_ok: false`*, valor padrão do template — a publicação depende de revisão humana.
- *Fronteiras com temas vizinhos:* identidade tratada só como condição de entrada (o resto é tema 2) e pagamento só como preço de acesso ao conteúdo publicado (comércio do consumidor é tema 5). Declarado no fim da Seção 2.
- *"Not Human Search"*, citado no enunciado do tema, **não** aparece no corpo do documento: não consegui abrir fonte primária sobre o serviço. Seu papel conceitual — o ranking de prontidão agêntica como PageRank da era dos agentes — é sustentado pelo Agent Readiness Score da Cloudflare [7], que consegui abrir. Substituição deliberada de uma entidade não verificada por outra verificada com a mesma função no argumento.

### 12.2 Aplicação do filtro anti-tecnologia madura (Etapa 2) — recusas e aceitações

**Recusadas, com motivo formal (as três primeiras estão no corpo, na abertura da Seção 4):**

| Candidata | Motivo da recusa |
|---|---|
| Model Context Protocol | Base instalada, não ruptura em curso. Meio bilhão de downloads/mês nos SDKs Tier 1, governança sob a Linux Foundation, política formal de depreciação [1]. Entra como infraestrutura. |
| `llms.txt` | Incremental (tecnicamente um `robots.txt`) e empiricamente inerte: zero requisições de crawlers de grandes laboratórios em 900 domínios/7 meses; sem correlação com citação em ~300 mil domínios [9]. |
| AEO/GEO como disciplina nova | Rebranding de SEO: mesma prática, outro intermediário. Não rompe lógica alguma. |
| APIs REST, SDKs, scraping | Maduros por definição, conforme a própria régua do enunciado do tema. |
| "Agente que resolve tarefa chata melhor que formulário" | Melhoria incremental sobre a lógica atual, não ruptura. Excluída pelo filtro — e a exclusão está declarada no comentário da Seção 5, porque enviesa o mapa para o lado pessimista. |
| "IA generativa resume o site para o usuário" | Já comum em produto de massa (AI Overviews, resumos em buscador). Fora da régua da disciplina. |

**Aceitas:** identidade criptográfica do visitante (D1); preço na resposta HTTP (D2); capacidades tipadas no lugar da página (D3). Critério comum: cada uma quebra um pressuposto fundador da web aberta — anonimato, gratuidade, documento como unidade — e nenhuma se concretizou (rascunho expirado, beta fechado, flag de navegador).

### 12.3 Log das iterações de busca

Rodadas executadas (WebSearch), na ordem:

1. `Model Context Protocol adoption 2026 agentic web standard`
2. `Cloudflare pay per crawl AI crawler 402 2026`
3. `llms.txt adoption criticism 2026 Google ignores`
4. `Web Bot Auth IETF draft HTTP message signatures agent identity 2026`
5. `x402 protocol payments agents 2026 adoption HTTP 402`
6. `WebMCP W3C browser agent API 2026 NLWeb Microsoft`
7. `crawl to refer ratio Cloudflare publishers 2026 AI referral traffic collapse`
8. `sites blocking AI agents 2026 Amazon Reddit agentic browser blocked Perplexity Comet`
9. `Cloudflare September 15 2026 default block AI crawlers ads pages announcement blog`
10. `"agent readiness" OR "agent-ready" score website ranking agents search engine for agents 2026`
11. `bot traffic overtakes human traffic internet 2026 share of automated requests`
12. `advertising for AI agents 2026 ads agentic browsing publishers business model answer engine optimization`
13. `Brasil agentes de IA web tráfego bots 2026 publishers bloqueio crawler LGPD`
14. `Brasil portais notícias tráfego busca IA queda 2026 dados audiência ChatGPT referência`

Páginas efetivamente abertas (WebFetch com sucesso): as treze da Seção 11.

Páginas que devolveram **HTTP 403** à ferramenta de leitura e por isso **não foram citadas**:
- `https://www.cnbc.com/2026/03/10/amazon-wins-court-order-to-block-perplexitys-ai-shopping-agent.html`
- `https://www.geekwire.com/2026/judge-blocks-perplexitys-ai-bot-from-shopping-on-amazon-in-early-test-of-agentic-commerce/`
- `https://www.medianama.com/2026/08/223-perplexity-vs-amazon-ai-agents-users/`
- `https://vektorconsultoria.com/noticias/agentes-de-ia-dominam-trafego-na-web-e-redefinem-estrategias-digitais/`
- `https://full.services/estado-da-busca-com-ia-no-brasil-2026/`

(Cinco, não quatro: ao consolidar o sinal fraco nº 6 da Seção 6 agrupei os dois portais brasileiros como "um portal brasileiro". A contagem exata é cinco URLs bloqueadas, sendo três veículos jornalísticos internacionais e dois portais brasileiros. O argumento do sinal fraco não muda; o número, sim — registrado aqui por honestidade de contagem.)

### 12.4 Material bruto recolhido e NÃO usado no corpo

- **WebMCP, detalhes de calendário:** rascunho W3C publicado em 10/02/2026, primeira implementação no Chrome 146 Canary atrás de flag, rascunho corrente datado de 10/07/2026, editores nomeados do Google (David Bokan, Khushal Sagar, Hannah Van Opstal) e da Microsoft (Brandon Walderman, Leo Lee, Andrew Nolan); alegação de "89% de economia de token" contra interação por screenshot e previsão de rollout estável no Q4/2026. **Por que não entrou nos números do corpo:** não abri a especificação nem o blog do Chrome — só resultados de busca. Uso apenas a existência e a filiação institucional do WebMCP, que o próprio Agent Readiness Score da Cloudflare confirma ao listá-lo entre os itens verificados [7]. A previsão de "Q4/2026 ubíquo" foi descartada como projeção de terceiro sem fonte primária.
- **Ad Context Protocol (AdCP):** lançado em outubro de 2025, construído sobre o MCP, fundado por seis empresas, nove tarefas de agente entre descoberta, comparação e ativação de campanha; dados do IAB de que 21% dos compradores de vídeo digital estão ao vivo com campanhas agênticas, 20% testando e 25% planejando. **Usado apenas qualitativamente** (sinal fraco nº 5); os percentuais do IAB não entraram porque não abri o relatório original.
- **MCP, governança:** doação à Agentic AI Foundation sob a Linux Foundation no fim de 2025, com OpenAI e Block como co-fundadores e AWS, Google, Microsoft, Cloudflare, GitHub e Bloomberg como apoiadores; MCP Dev Summit North America em abril de 2026, ~1.200 participantes. Usado na recusa formal do MCP; o número de participantes foi descartado por não ter fonte aberta.
- **WeChat/Tencent:** após bloquear o assistente Doubao da ByteDance, que navegava o WeChat por acesso de sistema sem permissão, a Tencent teria aberto um canal agente-a-agente para assistentes selecionados. É a ilustração mais limpa de `e5.1`, e **foi cortada do corpo** por eu não ter conseguido fonte primária ou veículo que abrisse. Fica registrada aqui como pista a verificar.
- **Brasil, dados vistos e não usados:** Brasil como segundo país mais atacado por bots na América Latina segundo o Cloudflare Radar, com picos acima de 40% de tráfego automatizado em e-commerce, fintechs e portais; painel PRO da Leadster com participação da busca orgânica caindo de 41,47% (2024) para 33,86% (2025) e 27,91% (2026); queda de 34% no tráfego do Google Search para sites de notícia medida pelo Chartbeat; AI Mode do Google acima de 1 bilhão de usuários mensais em maio de 2026; 58% a 68% das buscas terminando sem clique. **Nada disso entrou no corpo** — todas as URLs que os sustentavam devolveram 403 ou eram material de agência citando painel proprietário. A nota sobre o Brasil ficou deliberadamente magra por causa disso, e a Seção 8, item 7, registra a lacuna.
- **Pay-per-crawl, alegação descartada:** "publishers enviam mais de 1 bilhão de respostas HTTP 402 a crawlers de IA por dia"; e "durante a Agents Week 2026 (13-17 de abril) a Cloudflare consolidou o pay-per-crawl num console único disponível em todos os planos". Ambas incompatíveis com a documentação da própria Cloudflare, que mantém o recurso em *closed beta* [2]. Descartadas — ver Seção 8, item 2.
- **Crawl-to-refer, números descartados:** 38.000:1 e 1.091:1 (atribuídos a "dados da Cloudflare de julho/2026"), 4.580:1 / 848:1 / 186:1 / 5:1 (atribuídos ao Cloudflare Radar de junho/2026), 1.917:1 (julho), 10.300:1 (agregador). Nenhum entrou: o corpo usa só a janela declarada de [10]. Ver Seção 8, item 1.
- **Referência de IA em alta, dado não usado:** "referências do ChatGPT chegaram a 1,05%, salto de 3,5× em um mês e ~5,5× desde janeiro, tornando-o o maior referenciador de IA e o 6º domínio referenciador da web". Este dado **contraria** parcialmente a tese do mapa — indica que a referência pode crescer, não só encolher — e por isso mereceria estar no corpo. Ficou de fora por não ter fonte aberta, mas é registrado aqui como a evidência contrária mais forte que encontrei e não pude citar. Quem retomar este mapa deve começar por verificá-la.

### 12.5 Efeitos cortados da roda dos futuros

Gerados e descartados, com motivo:

| Efeito descartado | Motivo |
|---|---|
| "Agentes reduzem o tempo de tarefas online" | Serve para qualquer tema de IA; excluído pela instrução de cortar ideias óbvias. |
| "Aumenta a demanda por engenheiros de prompt" | Genérico e já maduro em 2026. |
| "Surgem leis de transparência algorítmica" | Genérico, não específico da web agêntica. |
| "O SEO morre" | Afirmação forte sem evidência: o dado disponível mostra publishers *liberando* bots de busca [6], não o contrário. |
| "Sites voltam a ser estáticos para serem lidos por máquina" | Movimento técnico, não efeito social; e contradito pela direção do WebMCP, que é dinâmica. |
| "Agentes negociam preço entre si em leilão contínuo" | É tema 5 (comércio agêntico), fora da fronteira declarada. |
| "CAPTCHAs desaparecem" | Tema 2 (detecção e identidade como segurança), fora da fronteira. |
| "A web se torna majoritariamente sintética" | Efeito de geração de conteúdo, não de reprojeto da web para máquinas; tema vizinho. |

### 12.6 Rodada descartada de disrupções-raiz

Primeira formulação, abandonada antes da pesquisa terminar:

- ~~D1: "MCP como conector universal"~~ → recusado pelo filtro (base instalada). Ver 12.2.
- ~~D2: "AEO substitui SEO"~~ → recusado (rebranding).
- ~~D3: "A web se fecha por bloqueio de crawler"~~ → **abandonado por inversão de evidência.** Esta formulação assumia que o movimento dominante era o fechamento, sustentado pela primeira leitura do caso Amazon × Perplexity. A decisão do Nono Circuito de 04/08/2026 [5] e a medição de robots.txt que mostra publishers liberando bots de resposta [6] mostraram que o movimento é *seletivo*, não de fechamento: bloqueia-se treinamento e libera-se resposta, com as mesmas empresas dos dois lados. A bifurcação aberto/fechado migrou de disrupção-raiz para efeito de primeira ordem (`e5`), que é seu lugar correto — ela é consequência das três rupturas, não causa delas.
