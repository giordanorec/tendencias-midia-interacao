---
tema: "A internet agêntica: quando o usuário é uma máquina"
slug: a-internet-agentica-quando-o-usuario-e-uma-maquina
autor_login: hfm
zona_de_interesse: Agentes
data: 2026-09-18
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: [Model Context Protocol, WebMCP, llms.txt, ai-plugin.json, OpenAPI, robots.txt, Web Bot Auth, HTTP Message Signatures, HTTP 402, x402, pay per crawl, Agent2Agent, Not Human Search, AgenticOS, Cloudflare Radar]
fontes: 18
confianca: media
experimento: "Banca de prontidão agêntica — o mesmo serviço publicado em três superfícies (página, llms.txt, ferramenta declarada) e um agente tentando concluir a mesma tarefa nas três"
skill_usada: futurizacao-hfm
publico_ok: false
---

## 1. Resumo

A web está sendo reorganizada para um visitante que não olha: em maio de 2026 o tráfego automatizado já superava o humano nas duas medições independentes consultadas, e a proporção entre o que os sistemas de IA leem e o que devolvem em visita chega a quatro dígitos. Deste desequilíbrio saem três rupturas, e só três se sustentam na evidência aberta. A primeira é de **protocolo**: com o MCP tornado sem estado em julho de 2026 e o WebMCP publicado como rascunho de comunidade no W3C em fevereiro de 2026 e em origin trial no Chrome 149, o site deixa de oferecer apenas uma tela e passa a declarar funções tipadas — a unidade de publicação sai do documento e vai para a ferramenta. A segunda é de **porteiro**: a partir de 15/09/2026 a Cloudflare separa crawlers por finalidade (busca, agente, treinamento) e bloqueia agente e treinamento por padrão em páginas com anúncio, enquanto o Web Bot Auth dá identidade criptográfica ao cliente — o acesso deixa de ser público por padrão e passa a ser negociado por identidade e propósito. A terceira é de **preço**: o HTTP 402, ressuscitado pelo pay-per-crawl e pelo x402, torna possível cobrar por requisição de máquina — só que a demanda ainda não apareceu, e é aqui que o mapa é mais frágil. Para quem projeta mídia e interação, a consequência de primeira ordem não é estética: a interface deixa de ser o único contrato de uso do produto, e passa a dividir esse papel com um contrato semântico que ninguém vê. O que este mapa **não** sustenta é que a "prontidão agêntica" já seja um critério de descoberta com peso real — a evidência disponível diz o contrário.

## 2. O tema

A web foi desenhada para olhos humanos: uma página é um arranjo espacial de texto, imagem e controle, otimizado para leitura, escaneamento e clique. A internet agêntica é a hipótese de que o principal consumidor dessa página deixou de ser uma pessoa. Não no sentido antigo — crawlers de busca existem desde os anos 1990 e sempre foram maioria em várias propriedades —, mas num sentido novo: o programa que chega agora não indexa para devolver a pessoa ao site; ele **executa a tarefa no lugar dela** e responde na própria janela de conversa.

Isso encosta em mídia e interação em três pontos exatos.

**No objeto do projeto.** Se a tarefa é concluída por um agente, a tela deixa de ser o lugar onde o produto acontece e vira um dos lugares. O que se projeta passa a incluir uma superfície que não tem forma visual: nomes de ferramentas, esquemas de parâmetro, mensagens de erro legíveis por máquina, descrições que o modelo lê para decidir se usa ou não aquele site. É design de interação sem pixel — e continua sendo design de interação, porque continua definindo o que a outra parte consegue e não consegue fazer.

**No modelo econômico que sustenta a publicação.** O contrato implícito da web aberta — você me dá o conteúdo, eu te dou atenção, a atenção vira anúncio — pressupõe que alguém chegue. Se o agente lê e resume, a atenção não chega. Isso não é especulação: é o que os dados de crawl-to-refer descrevem.

**Na fronteira do que é público.** Uma web em que o acesso depende de identidade assinada e finalidade declarada é uma web com portaria. A portaria pode ser legítima (proteger quem produz) e ainda assim reorganizar quem entra.

Por que isso merece um mapa de futuro e não um levantamento de estado da arte: as peças técnicas já existem e são mensuráveis, mas **ainda não se encaixaram**. Há um protocolo de ferramentas sem um mecanismo de descoberta consensual; um mecanismo de bloqueio sem um mecanismo de pagamento com demanda; um padrão de identidade sem grupo de trabalho no IETF; e um arquivo de metadados — o `llms.txt` — que 28% dos domínios publicaram e quase ninguém lê. O interesse está justamente no encaixe: é ele que decide se a web agêntica será uma camada a mais sobre a web aberta ou uma web paralela com porteiro na entrada.

## 3. Onde isso está hoje

### 3.1 O visitante já é maioria, e a troca ficou desigual

O relatório *Bad Bot Report 2026* da Imperva mede tráfego automatizado em **mais de 53% do total em 2025**, contra 51% no ano anterior; a atividade humana caiu para 47%. Não é um pico de ataque: o relatório descreve mudança estrutural, com os agentes como nova categoria de participante — recuperam dados, executam fluxos e agem em nome de usuários, borrando a distinção entre automação legítima e maliciosa. Serviços financeiros concentram 24% dos ataques de bot, e 27% dos ataques miram endpoints de API — o que já é um sinal de que a superfície atacada migrou da página para a interface de máquina.

Do lado da infraestrutura, a Cloudflare publicou no Radar a razão **crawl-to-refer**: quantas páginas um sistema de IA lê para cada visita que devolve. Na semana de 19 a 26 de junho, o crawler da Anthropic aparece em **70.900:1**; o da Mistral, no extremo oposto, em **0,1:1** — devolvendo dez visitas para cada requisição. A tese do próprio post é explícita: o crawler de busca tornava o conteúdo visível e mantinha a monetização viável; o bot de IA reempacota o conteúdo sem exigir visita à fonte. Levantamentos secundários citando o mesmo Radar em outros recortes mensais dão números bem diferentes (Anthropic perto de 4.580:1 em junho de 2026, OpenAI em 848:1, Perplexity 186:1, Google 5:1) — a ordem de grandeza varia com a janela, o que por si só é um aviso metodológico. O que não varia é o sinal: para quase todos, a razão é de muitas leituras por visita.

O relatório *State of the Internet* da Akamai, de abril de 2026, chega ao mesmo lugar por outro caminho: chatbots geram cerca de **96% menos tráfego de referência** que a busca tradicional, e apenas 1% dos usuários clica nas fontes citadas pelo assistente. A atividade de bots de IA cresceu 300% em 2025; no setor de mídia, 63% são crawlers de treinamento e ~24% são *fetchers* em tempo real.

### 3.2 O protocolo: maduro o bastante para virar infraestrutura

O **Model Context Protocol** deixou de ser novidade e virou encanamento. A revisão de **28/07/2026** fez a mudança que importa para este mapa: o núcleo virou **sem estado**. Some o *handshake* de inicialização, some o `Mcp-Session-Id`, e cada requisição carrega sozinha versão, identidade e capacidades. Com isso o MCP passa a se comportar como o resto da web — cacheável, roteável por cabeçalho (`Mcp-Method`, `Mcp-Name`), servível por qualquer instância atrás de um balanceador. Os SDKs *tier 1* estavam perto de **500 milhões de downloads mensais**; TypeScript e Python passaram de 1 bilhão acumulados. Não é adoção inicial: é adoção de infraestrutura.

O **WebMCP** é a outra metade, e é ela que toca diretamente quem projeta interface. Proposto em conjunto por Chrome e Edge ao W3C Web Machine Learning Community Group, foi publicado como **W3C Draft Community Group Report em 10/02/2026**, chegou ao Chrome 146 Canary na mesma data e entrou em **origin trial no Chrome 149**. A mecânica: em vez de o agente ler a tela e adivinhar qual botão envia o formulário, a própria página declara suas ferramentas — por API imperativa (funções JavaScript com esquema JSON) ou declarativa (anotação em formulário HTML). A documentação do Chrome resume o ganho numa frase que é, no fundo, uma tese de design: *"the website declares the element's purpose, so it's used correctly"*.

### 3.3 A descoberta: o elo que ainda não fechou

Aqui a evidência vai contra o discurso. O **llms.txt** foi medido pela Ahrefs em maio de 2026 sobre **137.210 domínios**: 28% publicam o arquivo, e **97% desses arquivos nunca recebem uma única requisição**. Das requisições que chegam aos 3% restantes, 96% são de bots, mas só 19,5% de bots de IA nomeados; a maior fatia isolada é de ferramentas de auditoria de SEO (21,7%). E o dado mais duro: **0% dos bots de IA procuram o arquivo quando ele não existe**. Ou seja, ninguém sai à caça dele.

O Google fechou a questão do seu lado. Em **02/06/2026**, John Mueller chamou o `llms.txt` de *"purely speculative for now"* e observou que o arquivo existe há anos e nenhum sistema de IA o usa. Na mesma fala, disse preferir o WebMCP — *"they have clear goals & processes"* — e deu a recomendação prática que resume o problema real da maioria dos sites: *"don't block agents"*.

No vazio, apareceu um candidato a ranking. O **Not Human Search** se apresenta como buscador para agentes e pontua cada site de 0 a 100 em sete sinais — `llms.txt` (25), `ai-plugin.json` (20), OpenAPI (20), API estruturada (15), MCP (10), regras de bot em `robots.txt` (5) e Schema.org (5) — declarando que *"organic rank is based on readiness, never payment"*. A escala, porém, desmente a retórica: a home informava **5.342 sites indexados** quando consultada, enquanto a descrição do repositório fala em 8.000+ e o material da disciplina citava 9.000+. São números de projeto, não de índice da web.

### 3.4 A portaria: o movimento mais concreto de todos

Em **01/07/2026** a Cloudflare separou o tráfego de IA em três categorias por finalidade — **Search** (indexa e devolve visita), **Agent** (age em tempo real por um usuário) e **Training** (coleta para treinar) — e anunciou que, a partir de **15/09/2026**, para domínios novos, **Agent e Training passam a ser bloqueados por padrão nas páginas que exibem anúncios**, com Search liberado. A justificativa publicada é uma definição de fronteira: *"An ad is a signal that a website owner meant for a person to land there and see it"*. O anúncio virou marcador semântico de "esta página é para gente".

Os editores já vinham fazendo essa distinção sozinhos. Uma análise sobre `robots.txt` na rede da Cloudflare (4.223 arquivos em 27/07/2026) mostra bloqueio sistemático de treinamento e permissão de resposta: GPTBot 2,33:1 e ClaudeBot 2,39:1 na razão bloqueado-vs-permitido, contra OAI-SearchBot em 0,94:1 e ChatGPT-User em 1,12:1 — mais permitidos que bloqueados. A taxa de 403 servidos a bots de IA subiu de 5,67% (jul/2025) para **9,64%** (jul/2026), com pico de 12,92% na semana de 27/07. A conclusão do levantamento é a frase que melhor descreve o momento: os editores não estão bloqueando "IA", estão **bloqueando treino e liberando resposta**.

Para a portaria funcionar sem cair na farsa do `User-Agent` declarado, falta identidade. É o papel do **Web Bot Auth**, conduzido por Cloudflare no IETF sobre HTTP Message Signatures (RFC 9421): o agente assina criptograficamente a requisição e publica um *Signature Agent Card* em JSON com identidade, propósito, expectativa de taxa e chaves. O estado formal, porém, é modesto — o rascunho de arquitetura (`draft-meunier-web-bot-auth-architecture-05`, 02/03/2026) consta como **individual, expirado e arquivado**, sucedido pelo `draft-meunier-webbotauth-httpsig-protocol`; nenhum grupo de trabalho adotou o documento. É padrão de fato antes de ser padrão de direito.

### 3.5 O preço: infraestrutura pronta, demanda ausente

O **pay per crawl** da Cloudflare ressuscitou o **HTTP 402**. O dono do conteúdo define um preço único por requisição no domínio e escolhe, por crawler, entre *Allow*, *Charge* e *Block*; quem chega sem pagar recebe 402 com o cabeçalho `crawler-price`, e pode reagir (`crawler-exact-price`) ou antecipar um teto (`crawler-max-price`) e receber 200 direto. A Cloudflare atua como *merchant of record*. O serviço segue em beta privada, e está evoluindo para um "pay per use" em que o editor recebe quando o conteúdo **aparece na resposta**, não quando o bot busca o arquivo.

O **x402** faz o mesmo movimento pelo lado do pagamento, e é o mais adiantado institucionalmente: implementação de referência da Coinbase sob Apache 2.0, formalização na **Linux Foundation em 02/04/2026** no MCP Dev Summit North America, e uma lista de fundação que vai de Visa, Mastercard e Stripe a AWS, Google, Microsoft e Shopify. O painel do próprio site reportava, nos 30 dias anteriores à consulta, **75,41 milhões de transações**, **US$ 24,24 milhões** de volume, 94.060 compradores e 22.000 vendedores.

E aqui entra o contraditório mais importante deste mapa. A CoinDesk, em **11/03/2026**, mostrou o outro lado: **US$ 28 mil por dia** em transações, pagamento médio de US$ 0,20, e uma análise da Artemis estimando que **cerca de metade** do tráfego é atividade "gamificada" — negociação com a mesma carteira e *wash trading*. A frase da reportagem serve de régua para o tema inteiro: a narrativa do comércio agêntico está crescendo mais rápido que o uso que a justificaria.

### 3.6 A publicidade já começou a se reorganizar

Do lado do mercado, a mudança é menos sobre o formato do anúncio e mais sobre **quem negocia**. A Omnicom confirmou, na chamada de resultados do 1º trimestre de 2026, compras de mídia executadas ao vivo por um arranjo agente-para-agente, com descoberta de inventário e negociação em frações de segundo. PubMatic e Optable operam o **AgenticOS**: a Optable empacota dados primários do editor em públicos a partir de um briefing, e o agente comprador da PubMatic processa em tempo real. Em 03/08/2026 a PubMatic relatava mais de mil negociações com a tecnologia e cerca de 30 campanhas programáticas agênticas, com a Mediavine (18.000+ editores) entre os testes. É pouco em volume e muito em direção: a peça que o agente consome não é o banner, é o público.

### 3.7 O que ainda falta, segundo quem mapeou a infraestrutura

Um levantamento de arquitetura submetido em **26/04/2026** (Dey e Viradecha, a partir de 204 endpoints da plataforma Agentverse) catalogou **62 capacidades ausentes** em oito categorias — memória, observabilidade, segurança, primitivos econômicos, escala — e propôs uma pilha de sete camadas até 2030. Entre os caminhos evolutivos, dois interessam diretamente aqui: sair da descoberta por palavra-chave rumo a um "Agent DNS" semântico, e sair do pagamento simples rumo a primitivos econômicos. Traduzindo para este mapa: **descoberta e preço são justamente os dois elos abertos**.

### 3.8 Classificação dos achados

| Achado | Classe | Por quê |
|---|---|---|
| API REST, SDK, scraping, `robots.txt` | maduro | disponível há décadas, efeitos estabilizados |
| MCP como conector (núcleo sem estado, ~500M downloads/mês) | maduro tecnicamente, **disruptivo em consequência** | deixou de ser novidade; a ruptura é ele virar a superfície de acesso |
| WebMCP | emergente **e disruptivo** | origin trial no Chrome 149; rompe a relação página↔agente |
| Separação de crawler por finalidade + bloqueio por padrão | emergente **e disruptivo** | muda a regra de acesso da web, não a eficiência dela |
| Web Bot Auth | emergente | em produção nos grandes, sem adoção de WG no IETF |
| HTTP 402 / pay-per-crawl / x402 | emergente, **disrupção condicionada** | mecânica pronta, demanda real não comprovada |
| `llms.txt` | emergente e **provavelmente natimorto** | 97% nunca lidos; Google declara sem efeito |
| Prontidão agêntica como ranking (Not Human Search) | sinal fraco | índice de milhares, não de milhões |
| Publicidade negociada entre agentes | emergente | ~30 campanhas; direção clara, volume irrelevante |

## 4. As disrupções-raiz

### D1 — A unidade de publicação sai do documento e vai para a ferramenta

**O que rompe.** Desde 1991 a coisa que se publica na web é um documento endereçável, e a interface é o contrato: o que o usuário consegue fazer é o que a tela deixa. Com MCP e WebMCP, o site passa a publicar também um conjunto de **funções tipadas com esquema declarado** — e esse vira um segundo contrato, paralelo ao visual, com seu próprio versionamento, sua própria superfície de erro e sua própria política de permissão. Quem projeta interação deixa de ter o monopólio do que é possível fazer com o produto.

**Por que agora e não há cinco anos.** Duas coisas mudaram em 2026 e nenhuma existia em 2021. Primeira: o MCP ficou **sem estado** em 28/07/2026, o que o tornou cacheável, roteável e escalável como HTTP comum — antes disso, expor ferramentas a agentes em escala de web exigia manter sessão, e isso não sobrevive a um balanceador. Segunda: o WebMCP levou a declaração de ferramentas **para dentro do navegador**, com respaldo conjunto de Chrome e Edge e publicação no W3C em 10/02/2026. Antes, "site legível por máquina" significava API à parte, com documentação, chave e integração — um caminho que só grandes percorriam.

**O que ainda falta.** Falta o origin trial virar suporte estável nos dois motores e falta posição pública de Safari e Firefox; falta um mecanismo de **descoberta** que não dependa de cada fornecedor manter sua lista (o elo que o `llms.txt` tentou ocupar e não ocupou); e falta um modelo de autorização granular — hoje a pergunta "este agente pode chamar esta ferramenta em nome de quem?" é resolvida caso a caso.

### D2 — O acesso deixa de ser público por padrão e passa a ser concedido por identidade e finalidade

**O que rompe.** O princípio operacional da web aberta é que qualquer cliente HTTP pode pedir qualquer recurso público, e a única distinção prática entre clientes é um `User-Agent` que qualquer um pode escrever. Isso está sendo desmontado por dois lados ao mesmo tempo: pela **finalidade** (a Cloudflare passa a classificar o crawler como busca, agente ou treinamento, e a decidir por categoria) e pela **identidade** (o Web Bot Auth exige assinatura criptográfica e uma carta de identificação publicada). A ruptura não é técnica, é de regime: sai o acesso anônimo por padrão, entra o acesso negociado.

**Por que agora.** Porque a assimetria ficou mensurável e cara. Com automação em mais de 53% do tráfego e razões de crawl-to-refer de três a cinco dígitos, o cálculo do editor mudou de sinal: antes, bloquear crawler era perder audiência; agora, liberar crawler é doar insumo sem contrapartida. A data de **15/09/2026** — bloqueio por padrão de agente e treinamento em páginas com anúncio para domínios novos — é o momento em que essa conta virou configuração de fábrica de uma das maiores redes de borda do mundo. E os editores já tinham começado antes, sozinhos: bloqueiam GPTBot e ClaudeBot, liberam OAI-SearchBot e ChatGPT-User.

**O que ainda falta.** Falta o Web Bot Auth sair de rascunho individual expirado para padrão adotado — hoje ele é padrão de fato porque Cloudflare, Anthropic e OpenAI o colocaram em produção juntos, o que é uma forma de governança por concentração, não por processo. Falta também um caminho para agentes pequenos: um regime de identidade assinada com custo de credenciamento favorece quem já é grande. E falta jurisprudência: a fronteira entre "bloquear treinamento" e "restringir concorrência" ainda não foi testada.

### D3 — A requisição de máquina ganha preço no próprio protocolo

**O que rompe.** O contrato econômico da web aberta é publicidade em troca de atenção; ele pressupõe uma pessoa chegando. A ressurreição do HTTP 402 — pelo pay-per-crawl e pelo x402 — cria a alternativa: **cobrar pelo acesso em vez de pela atenção**, por requisição, sem conta, sem cadastro, dentro do próprio ciclo de requisição-resposta. Se pegar, muda o que compensa publicar e para quem.

**Por que agora.** Porque as duas metades apareceram quase juntas. A Cloudflare pôs o 402 em produção com cabeçalhos próprios (`crawler-price`, `crawler-max-price`) e assumiu o papel de *merchant of record*, resolvendo o lado do cadastramento; e o x402 foi formalizado na Linux Foundation em 02/04/2026 com uma lista de fundação que inclui Visa, Mastercard, Stripe, AWS, Google, Microsoft e Shopify — resolvendo, no papel, o lado da liquidação. Micropagamento na web fracassou várias vezes desde os anos 1990 por falta de exatamente isso.

**O que ainda falta — e é muito.** Falta demanda. Os US$ 28 mil diários medidos em março de 2026, com pagamento médio de US$ 0,20 e cerca de metade do movimento classificado como gamificado pela Artemis, não descrevem um mercado; descrevem um teste. Mesmo o painel do x402, com 75 milhões de transações em 30 dias, aponta um valor médio por transação na casa de centavos — compatível com tráfego de demonstração. Falta também o pay-per-crawl sair de beta privada, e falta o modelo "pay per use" (pagar pela citação na resposta, não pela busca do arquivo) provar que consegue **medir** aparição em resposta de terceiro sem depender da boa-fé de quem responde. **Esta é a disrupção mais provável de não se concretizar no horizonte de 2031**, e o mapa está construído para sobreviver a isso.

### Por que uma quarta candidata ficou de fora

"A descoberta passa a ranquear por prontidão agêntica" — o PageRank da era dos agentes — tem a forma de uma disrupção e não tem o lastro. O índice que a encarna hoje tinha 5.342 sites quando consultado; o sinal de maior peso na sua fórmula (`llms.txt`, 25 de 100 pontos) é justamente o que 97% das vezes nunca é lido. Pela regra da skill — emergente não é automaticamente disruptivo, e disrupção-raiz exige sinal observável — ela desce para a seção 6, como sinal fraco.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A unidade de publicação sai do documento e vai para a ferramenta declarada (MCP sem estado + WebMCP)
    efeitos:
      - id: e1
        ordem: 1
        efeito: O site passa a publicar ferramentas tipadas ao lado da página, e a interface deixa de ser o único contrato de uso do produto
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Equipes de produto passam a versionar, documentar e testar a superfície de ferramentas com o mesmo rigor que aplicam a uma API pública
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formação em design de interação incorpora projeto de contrato semântico como disciplina, ao lado do projeto de tela
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O desenho visual se concentra nos momentos de decisão e consentimento humano e deixa de carregar a tarefa inteira
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Visitar um site deixa de ser a unidade de experiência e passa a ser a exceção deliberada dentro de uma tarefa
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O agente deixa de interpretar pixel e passa a chamar função declarada, derrubando o custo e a taxa de erro por tarefa
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Sites que não declaram ferramentas ficam mais caros de operar para o agente e são preteridos quando existe alternativa equivalente
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Prontidão agêntica entra em contrato de aquisição de software como requisito, ao lado de acessibilidade e segurança
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Agregadores de ferramentas se colocam entre o site e o agente e passam a deter a relação com o usuário final
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O poder de intermediação migra do buscador para o operador do agente, e a disputa regulatória de plataformas muda de alvo
                sinal: medio
                prazo: 2031
                confianca: baixa
  - disrupcao: O acesso deixa de ser público por padrão e passa a ser concedido por identidade assinada e finalidade declarada
    efeitos:
      - id: e3
        ordem: 1
        efeito: O acesso a conteúdo passa a ser decidido por finalidade declarada e identidade criptográfica em vez de User-Agent autodeclarado
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Editores consolidam a política de bloquear treinamento e liberar resposta, separando na prática dois mercados distintos para o mesmo conteúdo
            sinal: forte
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Web aberta passa a significar aberta a pessoas e a agentes credenciados, e não a qualquer cliente HTTP
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Agente sem credencial reconhecida perde acesso a uma parcela relevante da web e passa a depender de intermediários credenciados
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Quem não usa agente de um grande fornecedor acessa uma web menor, e a desigualdade de acesso deixa de ser só de banda e vira de credencial
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A presença de anúncio passa a funcionar como marcador de que a página foi feita para uma pessoa e delimita a fronteira de acesso
        sinal: medio
        prazo: 2027
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A publicidade se reorganiza em torno da resposta e da negociação entre agentes, e o inventário vendido passa a ser o público e não a impressão
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A métrica de audiência migra de visita e tempo de permanência para citação em resposta e conclusão de tarefa
                sinal: medio
                prazo: 2031
                confianca: baixa
  - disrupcao: A requisição de máquina ganha preço explícito no protocolo (HTTP 402, pay-per-crawl, x402)
    efeitos:
      - id: e5
        ordem: 1
        efeito: O acesso de máquina passa a ter preço declarado no próprio ciclo de requisição e resposta, sem cadastro prévio
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Conteúdo caro de produzir migra para trás do 402 e o conteúdo gratuito se especializa em servir de isca para treinamento e citação
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A distância entre o que o agente sabe e o que a web mostra sem pagar vira uma desigualdade de acesso mediada por preço
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Surgem intermediários de licenciamento que compram acesso em bloco e revendem ao operador de agente
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A concentração editorial aumenta, porque quem tem catálogo negocia em bloco e quem publica sozinho não tem com que negociar
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O paywall deixa de ser uma página de assinatura e vira um cabeçalho HTTP negociado entre máquinas
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A transação de fração de centavo se torna operacionalmente viável sem conta, resolvendo o problema que derrubou o micropagamento nos anos 1990
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Assinatura e consumo avulso mediado por agente passam a conviver no mesmo veículo, com o agente escolhendo qual usar por tarefa
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**As três disrupções não têm o mesmo lastro, e a roda esconde isso.** D1 e D2 estão ancoradas em coisas que já aconteceram com data: uma revisão de especificação, um origin trial, uma mudança de configuração padrão, uma série medida de `robots.txt`. D3 está ancorada em infraestrutura pronta e demanda ausente. Se a leitura do bloco tratar `e5` e `e1` como equivalentes porque ambos têm `confianca: media` ou `alta` no topo, a leitura estará errada. Por isso `e5.1` desce para `baixa` já na segunda ordem, e o ramo `e6` inteiro fica em `fraco`/`baixa`.

**As ordens se realimentam, e a árvore é acíclica.** O caso mais claro é `e4` ↔ `e3.1`: o anúncio delimitando fronteira reforça o bloqueio por finalidade, e o bloqueio por finalidade aumenta o valor do anúncio como marcador. Na representação hierárquica os dois aparecem como ramos separados da mesma disrupção, o que perde o laço. Outro laço perdido: `e2.1` (site sem ferramenta é preterido) alimenta `e1` (sites passam a publicar ferramentas), fechando um ciclo de adoção que a árvore não representa.

**Prazos são ordenações, não datas.** `prazo: 2029` significa "depois de 2028 e antes de 2030 na cadeia causal", não uma aposta de calendário. Na terceira ordem, os prazos convergem para 2031 simplesmente porque é o horizonte pedido — não porque esses efeitos aconteçam todos no mesmo ano.

**Uma cadeia foi interrompida por falta de evidência.** O ramo que iria de "prontidão agêntica vira ranking" para "AEO substitui SEO como profissão" e daí para "a economia de conteúdo se reorganiza em torno de ser citado" foi cortado: os dados do `llms.txt` e a posição pública do Google derrubam a premissa do primeiro elo. O que sobrou dele está na seção 6, como sinal fraco, e o registro do corte está na seção 12.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — o ranking por prontidão agêntica.** O Not Human Search pontua sites de 0 a 100 em sete sinais e declara que a posição orgânica nunca se compra. É pequeno (5.342 sites indexados na consulta) e sua fórmula pesa mais o sinal menos lido da web. Mas a *ideia* — de que existe uma ordenação da web para máquinas, com critério diferente do critério para gente — é a semente de uma segunda camada de descoberta. Se um operador de agente com base instalada adotar uma métrica dessas, a fórmula vira pauta de mercado numa temporada, como o PageRank virou.

**Sinal fraco 2 — o "pay per use" no lugar do "pay per crawl".** A mudança de cobrar pela busca do arquivo para cobrar pela **aparição na resposta** parece detalhe contábil e é mudança de objeto: o que se vende deixa de ser o acesso e passa a ser a citação. Se pegar, cria pela primeira vez uma métrica de audiência que não depende de visita — o que é exatamente o que falta hoje. Os parceiros iniciais são pequenos (Ceramic.ai, You.com), o que mantém o sinal fraco.

**Sinal fraco 3 — a API como superfície principal de ataque.** Com 27% dos ataques de bot mirando endpoints de API (Imperva), a segurança do produto migra da tela para a interface de máquina antes de o produto migrar. Historicamente, a superfície que os atacantes escolhem primeiro é um bom indicador de onde o valor está indo.

**Sinal fraco 4 — a negociação de mídia entre agentes.** Trinta campanhas na PubMatic e uma menção em chamada de resultados da Omnicom não movem mercado. Mas descrevem um comprador que não é humano negociando com um vendedor que não é humano — o formato do anúncio muda depois de quem o compra mudar, não antes.

**Wildcard — um grande portal bloqueia todos os agentes e a audiência não percebe.** Baixa probabilidade, alto impacto, e mais perto do plausível hoje do que há um ano: a configuração já existe (bloqueio por finalidade), a taxa de 403 servida a bots de IA já quase dobrou em um ano, e o tráfego de referência vindo de assistentes é pequeno o bastante (1% de cliques nas fontes, pela Akamai) para que a perda passe despercebida no painel. Se acontecer com um veículo grande e nada medível acontecer com a receita, a tese de que "é preciso estar visível para o agente" perde seu principal argumento, e o mapa inteiro desacelera — D3 some, D2 acelera, D1 fica restrita a software transacional. **Isto não é previsão**: é o cenário que mais eficientemente falsifica o resto deste documento, e por isso está aqui.

**Contra-wildcard — o consentimento entra pela porta jurídica.** Uma decisão judicial ou regulatória que declare a leitura por agente como uso equivalente ao acesso humano tornaria o bloqueio por finalidade ilegal em alguma jurisdição relevante. D2 travaria, e o preço (D3) viraria o único instrumento disponível. Probabilidade baixa no horizonte; impacto total sobre a roda.

## 7. Contra o próprio mapa

**Qual efeito é só extrapolação linear do presente.** `e2.1` — "sites que não declaram ferramentas são preteridos" — é a linha reta traçada a partir do argumento de eficiência do WebMCP. Ela supõe que o agente escolha por custo de operação, e agentes escolhem por muito mais que isso: marca, hábito do usuário, contrato do fornecedor, o que estava na primeira página. Um agente pode perfeitamente continuar usando o site caro porque foi o site que o usuário nomeou. Rebaixei a confiança para `media` e o sinal para `medio` por causa disso.

**Qual pressupõe velocidade de adoção sem caso comparável.** Todo o ramo `e5`/`e6` (preço no protocolo). Micropagamento fracassou na web em pelo menos três ondas desde 1997; a única coisa realmente nova é a liquidação automática sem conta. Assumir que um mecanismo com US$ 28 mil/dia e metade do movimento possivelmente artificial vira infraestrutura de receita editorial em cinco anos é apostar numa curva que não tem precedente na própria web. Por isso `e5.1` está em `confianca: baixa` e `e6` inteiro em `fraco`.

**Qual disrupção pode simplesmente não se concretizar, e o que acontece com o mapa.** D3. Se o preço no protocolo não vingar, `e5`, `e5.1`, `e5.2`, `e6` e seus filhos caem — cinco dos dez efeitos de segunda e terceira ordem daquele ramo. O mapa **não** cai junto: D1 e D2 seguem, e o efeito prático é que a web se fecha sem criar um mercado no lugar. Esse é, aliás, o desfecho indesejável da seção 9 — e, medido por evidência hoje, ele é mais provável que o desfecho com mercado.

**Um efeito que pode estar invertido.** `e1.2` supõe que o design visual se concentre nos momentos de decisão humana. O oposto é igualmente plausível: se o agente resolve a tarefa, a página sobrevivente pode ser justamente a **experiência que não se delega** — a página que existe para ser vista, não para ser usada. Ou seja, o design não encolheria para o consentimento; ele se especializaria no que o agente não consegue fazer. Mantive a formulação original porque é a que a evidência de curto prazo sustenta, mas registro a inversão.

**Um número que eu usei e que é instável.** A razão crawl-to-refer varia em uma ordem de grandeza entre janelas do mesmo painel (70.900:1 numa semana de junho, ~4.580:1 em outro recorte de junho de 2026, citado de segunda mão). Usei os dois com a fonte de cada um, mas quem ler rápido vai tratar como um dado firme, e não é. A direção é firme; a magnitude, não.

**Viés do agente que produziu este mapa.** Este documento foi escrito por um sistema que **é** uma das partes interessadas: agentes que consomem a web têm interesse em que a web seja legível por agentes. Isso se manifesta de maneira detectável — a tendência a tratar o MCP como inevitável, e a descrever a portaria como reação em vez de escolha legítima de quem publica. Compensei aceitando os dois contraditórios mais duros que encontrei (os 97% de `llms.txt` não lidos e os US$ 28 mil/dia do x402) e rebaixando D3. Mas o viés não foi eliminado; foi declarado.

**Viés de recorte.** O recorte foi definido como global, com nota sobre o Brasil. Das dezoito fontes abertas, uma é brasileira e não traz dado brasileiro próprio — reporta um estudo internacional. Então **não há, neste mapa, evidência específica sobre o Brasil**, e a nota da seção 9 sobre o país é inferência, não medição. Registro como limitação, não como achado.

**Viés de fonte.** Cloudflare aparece em quatro dos itens da lista de fontes e sustenta boa parte de D2 e metade de D3. Ela é ao mesmo tempo a melhor fonte de dados de borda disponível publicamente e uma empresa que **vende** o produto cujo mercado esses dados justificam. Não achei contraditório independente de mesma qualidade sobre crawl-to-refer; a corroboração vem de Imperva e Akamai, que medem coisas vizinhas, não a mesma coisa.

## 8. O que a máquina errou

**1. Confundiu duas datas de "bloqueio por padrão" e quase criou um fato.** Em uma passagem intermediária, a data de julho de 2025 (quando a Cloudflare começou a bloquear crawlers por padrão em domínios novos, mencionada de segunda mão numa matéria brasileira) foi misturada com a data de 15/09/2026 (bloqueio por finalidade em páginas com anúncio), produzindo a afirmação de que "a Cloudflare bloqueia agentes por padrão desde 2025". Percebi ao abrir o post de 01/07/2026 e ver que ele **anuncia** a mudança de defaults como algo futuro, marcado para setembro. Duas políticas diferentes, dois anos diferentes, escopos diferentes.

**2. Trouxe "9.000+ ferramentas indexadas" para o Not Human Search sem ter aberto o site.** O número veio do enunciado do tema e do repositório no GitHub. Ao abrir a home, ela informava **5.342 sites indexados**. Três números circulando para a mesma coisa (5.342, 8.000+, 9.000+) é a assinatura típica de métrica de divulgação. Corrigi para o número da página aberta e registrei a divergência — e essa divergência foi, ela própria, um dos motivos para rebaixar a "prontidão agêntica" de disrupção-raiz a sinal fraco.

**3. Tratou o Web Bot Auth como padrão IETF.** A primeira redação dizia "padrão do IETF". O datatracker mostra `draft-meunier-web-bot-auth-architecture-05` como **individual, expirado e arquivado**, sucedido por outro rascunho, sem adoção por grupo de trabalho. "Especificação em produção nos maiores operadores, sem status formal" é uma descrição bem diferente — e muda a análise: significa governança por concentração de mercado, não por processo aberto, o que é justamente o que está em jogo na terceira ordem de D2.

**4. Quase apresentou o volume do painel do x402 como prova de adoção.** 75,41 milhões de transações em 30 dias soa como mercado. Dividindo: US$ 24,24 milhões por 75,41 milhões de transações dá cerca de **US$ 0,32 por transação** — e a reportagem da CoinDesk, de março, estimava metade do movimento como *wash trading* ou negociação com a mesma carteira. Número grande com valor unitário de centavos e metade possivelmente artificial não é evidência de demanda; é evidência de tráfego. A desconfiança veio da própria aritmética, antes da reportagem.

**5. Produziu um efeito plausível que não se sustentava.** Havia um efeito de segunda ordem dizendo que "a acessibilidade melhora porque interfaces legíveis por máquina são também mais legíveis por leitor de tela". É bonito e é provavelmente falso: WebMCP declara **ferramentas**, não estrutura semântica de documento, e nada impede um site de expor funções impecáveis atrás de uma interface visual inacessível. Removido; registro na seção 12.

## 9. Três cenários para 2031

**Provável — a web de duas portas.** Em 2031 quase todo serviço transacional relevante tem duas entradas: uma tela para pessoas e um conjunto de ferramentas declaradas para agentes, servidas pelo mesmo back-end e versionadas juntas. Declarar ferramenta virou item de checklist de lançamento, como responsividade virou em 2015. O acesso é concedido por identidade assinada e finalidade declarada, e a distinção "bloqueio treino, libero resposta" — que os editores inventaram sozinhos em 2026 — está normalizada em contrato. O preço no protocolo existe, mas em nicho: paga-se por acesso a dado estruturado e a arquivo caro, não a notícia. A publicidade não morreu; ela se deslocou para dentro da resposta e para a negociação entre compradores e vendedores automáticos, e a métrica que importa passou a ser citação e tarefa concluída, não visita. Quem projeta interação projeta as duas superfícies, e a mais difícil não é a visual: é decidir o que o agente pode fazer sem perguntar. No Brasil, a adoção chega com atraso e por dependência — as ferramentas de borda e os agentes são os mesmos, as decisões de default são tomadas fora, e o veículo local herda uma política que não escreveu.

**Desejável — a portaria com porta dos fundos aberta.** O mesmo cenário, com três diferenças que não vieram de graça. Primeira: a identidade de agente virou padrão adotado por grupo de trabalho no IETF, com credenciamento barato o suficiente para que um agente construído por uma pessoa consiga acessar a web sem passar por um dos três grandes — o que exigiu que alguém decidisse, contra o próprio interesse de curto prazo, não cobrar pela credencial. Segunda: a descoberta de ferramentas roda sobre um mecanismo comum, não sobre listas proprietárias, e é auditável — dá para perguntar por que um agente escolheu um fornecedor e não outro. Terceira: o pagamento por citação funciona e é verificável por terceiro, então existe uma receita que não depende de visita, e publicar continua compensando para quem não tem catálogo. Nada disso acontece por evolução técnica: depende de decisão pública sobre o que é infraestrutura e do que se faz quando um padrão de fato precede o padrão de direito.

**Indesejável — a web que fechou e não criou mercado nenhum.** D2 acontece, D3 não. O bloqueio por finalidade se generaliza porque é barato e funciona; o pagamento não vinga porque nunca houve demanda real, e o "pay per use" não consegue provar aparição em resposta de terceiro. Resultado: a web pública encolhe para o que não vale a pena proteger, e o que vale vai para acordos bilaterais entre grandes editores e grandes operadores de agente — contratos que ninguém vê e cujos termos não são auditáveis. Quem publica sozinho tem duas opções ruins: liberar de graça e alimentar a resposta que substitui sua visita, ou bloquear e desaparecer das respostas. Acesso passa a depender de qual agente você usa. **O sinal precoce desse cenário é observável desde já, e é a divergência entre duas curvas**: a taxa de 403 servida a bots de IA continuar subindo (5,67% → 9,64% entre 2025 e 2026) enquanto o volume real transacionado por requisição paga fica estagnado na casa das dezenas de milhares de dólares por dia. Se em 2027 a primeira curva dobrar de novo e a segunda não sair do lugar, este é o cenário em curso.

## 10. O experimento

**O que é.** Uma **banca de prontidão agêntica**: um mesmo serviço pequeno e real — digamos, a consulta de horário e sala das disciplinas do CIn — publicado simultaneamente em três superfícies e submetido ao mesmo agente.

1. **Superfície A — página.** HTML normal, feito para gente, sem nenhuma concessão a máquina.
2. **Superfície B — metadados.** A mesma página, acrescida de `llms.txt`, Schema.org e um `robots.txt` que declara regras por finalidade.
3. **Superfície C — ferramenta declarada.** O mesmo serviço exposto como servidor MCP (e, se o Chrome da máquina permitir, como ferramenta WebMCP na própria página).

Um agente recebe a mesma tarefa nas três — *"descubra em que sala e horário é a disciplina X e me diga se ela conflita com a disciplina Y"* — e o painel mede, por superfície: acertou ou não, quantas requisições fez, quantos tokens consumiu, quanto tempo levou, e **em que ponto errou** quando errou. Uma quarta configuração liga a portaria: o servidor passa a responder 403 a requisição sem assinatura e 402 com `crawler-price` a requisição sem pagamento, e mede-se o que o agente faz diante de cada uma — desiste, tenta outra rota, mente sobre quem é.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta central de D1, que é empírica e ninguém na sala respondeu ainda: **quanto da vantagem do agente vem de ferramenta declarada e quanto vem só do modelo ficar melhor em ler tela?** Se a diferença entre A e C for pequena, `e2` e todo o ramo de adoção por eficiência enfraquecem, e o mapa muda. A quarta configuração responde à pergunta de D2 e D3: o agente **respeita** o 402 e o 403, ou trata como obstáculo a contornar? Porque a portaria só reorganiza a web se for obedecida.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa MCP (núcleo sem estado), WebMCP em origin trial, HTTP 402 com os cabeçalhos do pay-per-crawl e requisição assinada no estilo Web Bot Auth. Com tecnologia madura — REST documentado e scraping — o experimento responderia outra pergunta: mediria a competência do scraper, não a diferença que a **declaração** faz. O ponto inteiro é que em B e C o site *diz* o que oferece, em vez de o agente *adivinhar*; isso não existe em API REST comum, onde a declaração é documentação para humano.

**O que a turma faz quando testar isso em sala.** Cada dupla recebe uma superfície e uma tarefa, e roda o mesmo agente. Registra-se em quadro comum: acerto, custo, tempo, e o erro literal quando houve. Depois, a parte que interessa mais: **cada dupla escreve a descrição de uma ferramenta** para o mesmo serviço, sem ver a das outras, e trocam-se as descrições entre os agentes. A hipótese é que a variação de desempenho entre descrições escritas por pessoas diferentes seja maior que a variação entre superfícies — ou seja, que isto seja uma disciplina de **escrita**, e não de encanamento. Fecha-se com a portaria ligada, em que a turma observa o agente diante de um 402 e discute o que ele deveria fazer.

**O que me faria mudar de ideia.** Três resultados, cada um derrubando uma parte do mapa:

- **A superfície A empata com a C** em acerto e fica no máximo 30% acima em custo. Então a declaração de ferramenta é otimização, não ruptura, e D1 vira melhoria — a skill mandaria tirá-la da raiz.
- **A variação entre descrições escritas por pessoas diferentes for desprezível.** Então não há disciplina de design nova aqui, e `e1.1.1` (formação em design incorporar contrato semântico) cai.
- **O agente contornar rotineiramente o 403 e o 402** — trocando rota, omitindo identidade, usando terceiro. Então a portaria não é uma nova regra de acesso, é um pedágio com desvio, e D2 perde o efeito estrutural: a web não se fecha, ela só fica desagradável.

## 11. Fontes

Todas as fontes abaixo foram abertas durante esta rodada. Buscas cujos resultados não foram abertos estão registradas na seção 12 e **não** sustentam afirmação alguma deste documento.

1. **Model Context Protocol Blog — "The 2026-07-28 Specification"** — `https://blog.modelcontextprotocol.io/posts/2026-07-28/` — sustenta: núcleo sem estado, remoção do handshake e do `Mcp-Session-Id`, roteamento por `Mcp-Method`/`Mcp-Name`, cache de listas, ~500 milhões de downloads mensais nos SDKs tier 1. **Confiabilidade: alta como fonte primária** (é o blog oficial da especificação); baixa como fonte neutra sobre a importância do próprio protocolo.
2. **Cloudflare Blog — "Introducing pay per crawl"** — `https://blog.cloudflare.com/introducing-pay-per-crawl/` — sustenta: mecânica do HTTP 402 para crawler, cabeçalhos `crawler-price`, `crawler-exact-price`, `crawler-max-price`, os fluxos reativo e proativo, Cloudflare como *merchant of record*, estado de beta privada. **Alta como descrição técnica do produto; é material de lançamento da própria empresa.**
3. **Cloudflare Blog — "Your site, your rules: new AI traffic options for all customers"** — `https://blog.cloudflare.com/content-independence-day-ai-options/` — sustenta: categorias Search/Agent/Training, bloqueio padrão de Agent e Training em páginas com anúncio a partir de 15/09/2026, publicação em 01/07/2026, e a frase sobre o anúncio como sinal de página feita para pessoa. **Alta para a política; é a fonte primária dela.**
4. **Cloudflare Blog — "The crawl before the fall… of referrals"** — `https://blog.cloudflare.com/ai-search-crawl-refer-ratio-on-radar/` — sustenta: a métrica crawl-to-refer, Anthropic em 70.900:1 e Mistral em 0,1:1 na semana de 19–26 de junho, e a tese sobre reempacotamento sem visita. **Alta para os dados de borda; parte interessada na conclusão.**
5. **Ahrefs — "We Analyzed 137K Sites: 97% of llms.txt Files Never Get Read"** — `https://ahrefs.com/blog/llmstxt-study/` — sustenta: 137.210 domínios em maio de 2026, 28% com `llms.txt`, 97% com zero requisições, composição do tráfego restante, 0% de bots de IA procurando o arquivo inexistente. **Alta**: metodologia declarada, amostra grande, e conclusão contrária ao interesse comercial típico de uma empresa de SEO.
6. **Search Engine Journal — "Google Says llms.txt Is Purely Speculative For Now"** — `https://www.searchenginejournal.com/google-says-llms-txt-is-purely-speculative-for-now/577576/` — sustenta: declarações de John Mueller em 02/06/2026 sobre `llms.txt`, preferência pelo WebMCP e o conselho *"don't block agents"*. **Média-alta**: jornalismo especializado reportando fala pública; não é a fonte primária da fala.
7. **Chrome for Developers — "WebMCP"** — `https://developer.chrome.com/docs/ai/webmcp/` — sustenta: definição, API imperativa e declarativa, origin trial no Chrome 149, flag de teste local, e a diferença em relação a agentes que leem a tela. **Alta como documentação primária de implementação.**
8. **Imperva — "Bad Bot Report 2026: Bots in the Agentic Age"** — `https://www.imperva.com/blog/bad-bot-report-2026-bots-agentic-age/` — sustenta: >53% de tráfego automatizado em 2025 (contra 51%), humanos em 47%, serviços financeiros com 24% dos ataques, 27% mirando APIs, agentes como nova categoria. **Média-alta**: série histórica longa e respeitada; fornecedor de proteção contra bots, com interesse no tamanho do problema. Metodologia resumida, não detalhada no post.
9. **Akamai / E-Commerce Brasil — "Buscas via IA cortam mais de 95% do tráfego para sites"** — `https://www.ecommercebrasil.com.br/noticias/buscas-via-ia-cortam-mais-de-95-do-trafego-para-sites-mostra-estudo` — sustenta: ~96% menos tráfego de referência por chatbots, 1% de cliques nas fontes, +300% de bots de IA em 2025, composição no setor de mídia (63% treino, ~24% fetchers), e o registro de que o debate chegou ao Cade. **Média**: é reportagem sobre o *State of the Internet* da Akamai, não o relatório em si; **não traz dado brasileiro próprio.**
10. **IETF Datatracker — `draft-meunier-web-bot-auth-architecture`** — `https://datatracker.ietf.org/doc/draft-meunier-web-bot-auth-architecture/` — sustenta: versão 05 de 02/03/2026, status **individual, expirado e arquivado**, sucedido por `draft-meunier-webbotauth-httpsig-protocol`, e a proposta de assinar requisições sobre HTTP Message Signatures. **Alta**: registro oficial de status; é a fonte que desmente a descrição de "padrão IETF".
11. **x402.org** — `https://x402.org/` — sustenta: mecânica de uma linha de código, lançamento operacional da x402 Foundation sob a Linux Foundation, e o painel de 30 dias (75,41 milhões de transações, US$ 24,24 milhões, 94.060 compradores, 22.000 vendedores). **Baixa-média para interpretação**: é material do próprio projeto, e os números do painel não distinguem transação real de teste.
12. **CoinDesk — "Coinbase-backed AI payments protocol wants to fix micropayment but demand is just not there yet"** — `https://www.coindesk.com/markets/2026/03/11/coinbase-backed-ai-payments-protocol-wants-to-fix-micropayment-but-demand-is-just-not-there-yet` — sustenta: US$ 28 mil/dia em 11/03/2026, pagamento médio de US$ 0,20, e a estimativa da Artemis de que ~50% do tráfego é gamificado. **Alta como contraditório**: jornalismo especializado citando análise on-chain nomeada, contra a narrativa dominante do setor que cobre.
13. **Not Human Search** — `https://nothumansearch.ai/` — sustenta: existência do buscador para agentes, 5.342 sites indexados na consulta, os sete sinais de prontidão com seus pesos, e a declaração de que a posição orgânica nunca é paga. **Baixa como evidência de mercado, alta como evidência de que a ideia existe.** O número diverge do repositório (8.000+) e do enunciado do tema (9.000+).
14. **TechnologyChecker — análise de `robots.txt` na rede da Cloudflare** — `https://technologychecker.io/blog/robots-txt-ai-crawlers-blocking-report` — sustenta: 4.223 arquivos em 27/07/2026, razões bloqueado-vs-permitido (GPTBot 2,33:1, ClaudeBot 2,39:1, OAI-SearchBot 0,94:1, ChatGPT-User 1,12:1), 403 a bots de IA subindo de 5,67% para 9,64%, e a tese "bloqueiam treino, liberam resposta". **Média**: metodologia e amostra declaradas, mas é blog de análise secundária sobre dados do Radar, não o Radar.
15. **AdExchanger — "AI Agents Are Giving Publishers A New Way To Monetize Their Data"** — `https://www.adexchanger.com/ai/ai-agents-are-giving-publishers-a-new-way-to-monetize-their-data/` — sustenta: PubMatic + Optable no AgenticOS, >1.000 negociações, ~30 campanhas agênticas, Mediavine com 18.000+ editores, publicação em 03/08/2026. **Média-alta**: veículo especializado do setor, com os números vindo das próprias empresas.
16. **arXiv — "Agentic Web: Weaving the Next Web with AI Agents"** — `https://arxiv.org/abs/2507.21206` — sustenta: a definição de web agêntica, as três dimensões (inteligência, interação, economia) e a hipótese da *agent attention economy*, com deslocamento da publicidade por atenção humana para modelos guiados por intenção de agente. **Média**: é enquadramento conceitual revisado por pares na forma de preprint, não medição.
17. **arXiv — "Infrastructure for the Agentic Web: Gap Analysis and Architecture from the Agentverse Platform"** (Dey e Viradecha, 26/04/2026) — `https://arxiv.org/abs/2606.20570` — sustenta: 62 capacidades ausentes em oito categorias, a pilha de sete camadas, e os caminhos de descoberta semântica e de primitivos econômicos. **Média-baixa**: preprint baseado em 204 endpoints de **uma** plataforma (Fetch.ai), o que limita a generalização; usado aqui só para identificar lacunas, não para prever arquitetura.
18. **Cloudflare Blog — "Message Signatures are now part of our Verified Bots Program"** — `https://blog.cloudflare.com/verified-bots-with-cryptography/` — sustenta: a integração de HTTP Message Signatures ao Verified Bots Program (anunciada em julho de 2025), disponível nos planos Free e Pro, com bibliotecas abertas em Rust e TypeScript — e portanto a leitura de que o Web Bot Auth **roda em produção antes de ser padrão**, com o IETF ainda apenas considerando formar um grupo de trabalho. **Alta para o fato da implantação; parte interessada na tese.**

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista

A skill exige entrevista antes da pesquisa, com espera por resposta. **Esta rodada foi executada sem interlocutor disponível**: os valores foram fornecidos integralmente no despacho, junto com a instrução explícita de não perguntar de volta e de assumir e declarar o que faltasse. Registro a divergência em relação ao procedimento e os valores tal como recebidos:

| Campo | Valor confirmado | Origem |
|---|---|---|
| tema | A internet agêntica: quando o usuário é uma máquina (tema 4 de 19; família "Agentes") | despacho |
| recorte | A web como plataforma sendo reprojetada para máquinas — camada de protocolo e de descoberta; global, com nota sobre o Brasil | despacho |
| horizonte | 2031 | despacho |
| público | quem projeta mídia e interação | despacho |
| região | global, com nota sobre o Brasil | despacho |
| objetivo | mapa de futuro por roda dos futuros, três ordens, a partir da inovação (não do setor) | despacho |
| exclusões | o que já é comum em produto de massa (régua da disciplina); nenhuma outra | despacho |
| viés desejado | neutro | despacho |
| disrupção suspeita | nenhuma — descobrir | despacho |
| critério de mudança de ideia | evidência de que a adoção passou da maioria inicial (Rogers), ou de que a tecnologia só melhora o que existe | despacho |
| profundidade | três ordens | despacho |

**Assunções declaradas por falta de interlocutor:**
- "Neutro" foi operacionalizado como: buscar deliberadamente o contraditório de cada disrupção antes de escrevê-la, e rebaixar confiança quando o contraditório vencer. Foi o que derrubou a quarta disrupção candidata e rebaixou D3.
- A régua "o que já é comum em produto de massa sai" foi aplicada para excluir REST, SDK, scraping e `robots.txt` clássico da raiz — eles ficam na seção 3 como estado do presente.
- "Nota sobre o Brasil" foi interpretada como uma nota **assumidamente inferencial**, já que a busca não produziu dado brasileiro primário.

### 12.2 Consultas feitas

Buscas (WebSearch), oito no total:
1. `Model Context Protocol specification 2026 adoption agentic web`
2. `Cloudflare pay per crawl AI crawler blocking 2026`
3. `llms.txt standard adoption criticism Google`
4. `x402 protocol HTTP 402 agent payments Coinbase 2026`
5. `Web Bot Auth IETF draft signature agents Cloudflare 2026`
6. `WebMCP W3C Google Chrome browser agents web page tools 2026`
7. `Cloudflare Radar crawl to refer ratio AI crawlers publishers 2026 data`
8. `"Not Human Search" search engine for agents agent-readiness score llms.txt MCP`
9. `tráfego de agentes de IA em sites brasileiros 2026 bloqueio crawler publishers Brasil`
10. `agentic browsing share of web traffic 2026 bots exceed human traffic report Imperva`
11. `advertising for AI agents "agent" ad format 2026 publishers monetize answers`

Páginas efetivamente abertas (WebFetch): as 18 da seção 11.

### 12.3 Fontes que apareceram e foram descartadas — e por quê

- **Uma dezena de blogs de agência e de fornecedor de SEO** sobre Cloudflare, WebMCP e `llms.txt` (`novaproxy.io`, `fastcrw.com`, `seo-kreativ.de`, `chudi.dev`, `buildmvpfast.com`, `openaitoolshub.org`, `byteiota.com`, `visby.ai`, `nohacks.co`, `digitalapplied.com`, `seomator.com`, `nobori.ai`, `alphamatch.ai`, `verzdesign.com`, `seosandwitch.com`, `hivesecurity.gitlab.io`, `lyrie.ai`, `stellagent.ai`, `crawlbase.com`, `nerdleveltech.com`): **descartados por serem derivados**. Todos repetem os mesmos números de Cloudflare, Ahrefs e Imperva, com variações de arredondamento e, em vários casos, com números que não batem entre si (o crawl-to-refer da Anthropic aparece como 4.580:1, 10.300:1, 38.000:1 e 70.900:1 conforme o blog). Quando um número secundário divergia, fui à fonte primária. Onde não havia primária aberta, o número **não entrou**.
- **`datalakehousehub.com` sobre o estado dos padrões agênticos em 2026** e a alegação de que o A2A chegou a v1.0 em abril de 2026 com 150+ organizações: não aberto, não usado. Por isso o A2A aparece na lista de tecnologias citadas, mas **não sustenta nenhum efeito da roda**.
- **Alegação de "89% de economia de tokens" do WebMCP** (`agentmarketcap.ai`): descartada. Número redondo, de fonte secundária, sem metodologia visível — exatamente o tipo de dado que a seção 8 existe para pegar. A economia de token do WebMCP é justamente o que o experimento da seção 10 se propõe a **medir**, em vez de citar.
- **Alegação de que Chrome e Edge somam >85% de share e que o suporte estável chega no 4º trimestre de 2026**: mesma origem secundária, mesmo descarte. A parte verificada na documentação do Chrome — origin trial no 149 — é a que entrou.
- **Números de adoção do x402 de abril de 2026** (69 mil agentes, 165 milhões de transações, ~US$ 50 milhões acumulados), que vieram de resumo de busca: não abri a fonte primária, então não entraram no corpo. Usei o painel do próprio x402.org e a reportagem da CoinDesk, ambos abertos.
- **`sindpd.org.br`, `boainformacao.com.br`, `pt.dataconomy.com`, `flowup.agency`, `seopartner.com.br`, `imasters.com.br`**: material brasileiro localizado na busca, todo secundário sobre as mesmas políticas da Cloudflare, sem medição local própria. Não abertos, não usados. **É a razão de a nota sobre o Brasil ser inferência declarada.**
- **`getpublii.com`, `seranking.com`, `rankinllm.ai`, Medium (Kai Spriestersbach, Santhosh J), `dev.to`**: comentário sobre `llms.txt`. Descartados: o estudo da Ahrefs e a fala do Google, ambos abertos, já cobrem o ponto com dado.
- **Repositórios do GitHub do Not Human Search e do `agent-ready-index`**: apareceram na busca e não foram abertos; a discrepância entre "8.000+" (descrição do repo, via resultado de busca) e "5.342" (home aberta) está registrada como divergência, não como fato.
- **Post do Imperva sobre proteção contra bots de IA** e agregadores de estatística (`deepstrike.io`, `aicerts.ai`, `workos.com`): não abertos. O relatório principal, aberto, bastava.

### 12.4 Efeitos gerados e removidos

1. **"Interfaces legíveis por máquina melhoram a acessibilidade para leitores de tela"** (2ª ordem, ramo D1). **Removido.** WebMCP declara ferramentas, não estrutura semântica de documento; um site pode expor funções perfeitas atrás de uma interface visual inacessível. A correlação intuitiva não tem mecanismo. Registrado também na seção 8.
2. **Cadeia "prontidão agêntica vira ranking" → "AEO substitui SEO" → "economia de conteúdo se reorganiza em torno da citação"** (três ordens completas). **Removida como ramo da roda.** O primeiro elo não passa: o sinal de maior peso da métrica existente é o `llms.txt`, que 97% das vezes nunca é lido, e o Google declarou publicamente que ele não tem efeito. Sobrevive como sinal fraco na seção 6. **Esta é a cadeia interrompida por falta de evidência que a skill manda registrar.**
3. **"O navegador deixa de ter interface visual para o agente e vira runtime headless"** (1ª ordem). **Removido por ser extrapolação sem sinal**: o WebMCP é explicitamente uma API *dentro* da página renderizada, não um substituto dela; o movimento observado é o oposto do previsto pelo efeito.
4. **"Sites passam a publicar preços diferentes por agente conforme o operador"** (2ª ordem, ramo D3). **Removido**: o pay-per-crawl, na descrição da própria Cloudflare, usa **um preço único por domínio**. O efeito contradizia a fonte que o sustentaria.
5. **"CAPTCHAs desaparecem porque a identidade assinada os torna obsoletos"** (2ª ordem, ramo D2). **Removido por falta de fonte aberta.** A tese circula em material secundário; nenhuma fonte primária aberta sustenta que a verificação de identidade de bot substitua o desafio ao humano — são problemas diferentes (provar que é um bot autorizado ≠ provar que é uma pessoa).
6. **"Agentes passam a pagar uns aos outros por subtarefas, criando um mercado de trabalho de máquina"** (3ª ordem). **Movido para fora do escopo**: é o tema 5 da disciplina (pagamento e comércio por agentes). A fronteira foi respeitada; aqui o objeto é a web como plataforma.
7. **Efeitos rebaixados, não removidos**: `e2.1` (de `forte`/`alta` para `medio`/`media`, por ser extrapolação linear); `e5.1` (de `media` para `baixa`, pelo contraditório da CoinDesk); `e4` (de `forte` para `medio`, porque a política da Cloudflare vale, por ora, só para domínios novos e páginas com anúncio).

### 12.5 Separação entre fato, inferência e hipótese

**Fatos observados com fonte aberta:** as datas (10/02/2026 WebMCP no W3C e no Canary; 02/04/2026 x402 na Linux Foundation; 02/06/2026 fala de Mueller; 01/07/2026 categorias da Cloudflare; 28/07/2026 revisão do MCP; 15/09/2026 mudança de defaults); os números de tráfego (>53% automatizado; 5,67%→9,64% de 403); os números do `llms.txt` (137.210 domínios, 28%, 97%, 0%); as razões de crawl-to-refer com a janela de cada uma; os números do x402 (painel e CoinDesk); o status do rascunho no IETF; os pesos da pontuação do Not Human Search.

**Inferências causais argumentadas:** que o núcleo sem estado do MCP é pré-condição para ferramentas em escala de web (argumento: sessão não sobrevive a balanceador round-robin, o que o próprio post afirma); que o anúncio como marcador de fronteira reforça o bloqueio por finalidade e vice-versa; que um regime de credencial favorece o operador grande; que o "bloqueio de treino com liberação de resposta" **separa dois mercados** — isto é leitura minha sobre os dados de `robots.txt`, não afirmação da fonte.

**Hipóteses prospectivas:** tudo na seção 5 com `prazo` ≥ 2029; todos os efeitos de terceira ordem; os três cenários da seção 9; a nota sobre o Brasil.

### 12.6 Limitações desta rodada

- **Entrevista não realizada com interlocutor.** Os campos vieram prontos; não houve rodada de perguntas nem confirmação de resumo, como a skill manda. Isto reduz a confiança sobre o **recorte**, não sobre os dados.
- **Sem dado primário brasileiro.** Nenhuma fonte aberta mede tráfego agêntico, bloqueio ou receita de editor no Brasil. Tudo o que o documento diz sobre o país é inferência a partir de dados globais e da dependência de infraestrutura estrangeira. Um mapa que precisasse do recorte Brasil precisaria de dado que esta rodada não obteve.
- **Concentração de fonte.** Cloudflare sustenta quatro itens da lista e é parte interessada no mercado que os dados justificam. A corroboração (Imperva, Akamai) mede fenômenos vizinhos, não o mesmo.
- **Nenhuma fonte acadêmica com revisão por pares completa.** As duas de arXiv são preprints, e uma delas analisa uma única plataforma. O corpo de evidência deste mapa é predominantemente **infraestrutural e jornalístico**, o que é adequado para medir o presente e fraco para sustentar mecanismo causal.
- **A magnitude do crawl-to-refer é instável** entre janelas; o documento preserva a instabilidade em vez de escolher um número.
- **Não foi testado nada.** Este é um mapa de leitura, não de medição. O experimento da seção 10 existe exatamente porque a pergunta central de D1 — quanto da vantagem vem da declaração e quanto vem do modelo — **não tem resposta na literatura aberta consultada**.
